/* ==========================================================================
   TrigVerse CHRONO-FX 1000 — 3D Scientific Chronometer, Lab Stopwatch & Pacer
   Modes:
     1: CHRONO — 1/1000s Quartz Stopwatch + Lap/Split Mean (x̄), Std Dev (σ), Min/Max
     2: TIMER  — Exam / MCQ / Pomodoro Countdown Timer + Web Audio Quartz Alarm
     3: OSC·Hz — Harmonic / Pendulum Lab (Period T, Freq f, Angular ω = 2πf, Length L)
     4: PACER  — Math Problem Speed-Solving Pacer (Solved, Avg s/Q, Q/hr, Target Pace)
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     Web Audio Synthesizer for Crisp Quartz Stopwatch Clicks & Finish Chime
     ------------------------------------------------------------------------ */
  let audioCtx = null;
  function playQuartzTone(freq = 1200, durationMs = 35, type = "sine", gainVal = 0.06) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + durationMs / 1000);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + durationMs / 1000 + 0.01);
    } catch (_) {
      /* ignore audio autoplay blocks */
    }
  }

  function playAlarmBeepSequence() {
    [0, 140, 280, 520, 660].forEach((delay, idx) => {
      setTimeout(() => playQuartzTone(idx >= 3 ? 1760 : 1320, 110, "triangle", 0.12), delay);
    });
  }

  function formatChronoParts(msTotal) {
    const clamped = Math.max(0, msTotal);
    const totalIntMs = Math.floor(clamped);
    const ms = totalIntMs % 1000;
    const totalSec = Math.floor(totalIntMs / 1000);
    const sec = totalSec % 60;
    const totalMin = Math.floor(totalSec / 60);
    const min = totalSec >= 3600 ? totalMin % 60 : totalMin;
    const hr = Math.floor(totalSec / 3600);

    const pad2 = (n) => String(n).padStart(2, "0");
    const pad3 = (n) => String(n).padStart(3, "0");
    return {
      main: hr > 0 ? `${pad2(hr)}:${pad2(min)}:${pad2(sec)}` : `${pad2(min)}:${pad2(sec)}`,
      ms: `.${pad3(ms)}`,
      compact: hr > 0 ? `${pad2(hr)}:${pad2(min)}:${pad2(sec)}.${pad3(ms)}` : `${pad2(min)}:${pad2(sec)}.${pad3(ms)}`
    };
  }

  /* ------------------------------------------------------------------------
     Scientific Stopwatch Class (Shared Engine Option or Independent Instance)
     ------------------------------------------------------------------------ */
  class TrigScientificStopwatch {
    constructor(mountEl, opts = {}) {
      this.mountEl = mountEl;
      this.compact = Boolean(opts.compact);
      this.onTickBadge = opts.onTickBadge || null;

      this.mode = "CHRONO"; // CHRONO | TIMER | OSC | PACER
      this.running = false;
      this.soundOn = true;

      // High-resolution monotonic clock state (ms)
      this.elapsedMs = 0;
      this.startPerf = 0;
      this.rafId = null;

      // 1: CHRONO Laps
      this.laps = []; // { num, lapMs, splitMs }

      // 2: TIMER Countdown state
      this.timerDurationMs = 5 * 60 * 1000; // Default 5:00 MCQ Sprint
      this.timerRemainMs = 5 * 60 * 1000;
      this.timerFinished = false;

      // 3: OSC·Hz Harmonic Lab state
      this.oscCount = 0;

      // 4: PACER Math Speed-Solving state
      this.solvedCount = 0;
      this.targetSecPerQ = 60;
      this.questionTimes = []; // ms per solved question
      this.lastSolveSplitMs = 0;

      this.renderShell();
      this.updateDisplay();
    }

    beep(freq = 1350, dur = 32) {
      if (this.soundOn) playQuartzTone(freq, dur);
    }

    getCurrentMs() {
      if (this.mode === "TIMER") {
        if (!this.running) return this.timerRemainMs;
        const delta = performance.now() - this.startPerf;
        return Math.max(0, this.timerRemainMs - delta);
      }
      if (!this.running) return this.elapsedMs;
      return this.elapsedMs + (performance.now() - this.startPerf);
    }

    toggleStartPause() {
      if (this.running) {
        // Pause
        const now = performance.now();
        if (this.mode === "TIMER") {
          this.timerRemainMs = Math.max(0, this.timerRemainMs - (now - this.startPerf));
        } else {
          this.elapsedMs += now - this.startPerf;
        }
        this.running = false;
        if (this.rafId) cancelAnimationFrame(this.rafId);
        this.rafId = null;
        this.beep(920, 45);
        this.syncControls();
        this.updateDisplay();
        if (this.onTickBadge) this.onTickBadge(false, "");
      } else {
        // Start
        if (this.mode === "TIMER" && this.timerRemainMs <= 0) {
          this.timerRemainMs = this.timerDurationMs;
          this.timerFinished = false;
        }
        this.startPerf = performance.now();
        this.running = true;
        this.timerFinished = false;
        this.beep(1480, 45);
        this.syncControls();
        this.tickLoop();
      }
    }

    reset() {
      this.running = false;
      if (this.rafId) cancelAnimationFrame(this.rafId);
      this.rafId = null;
      this.beep(660, 55);

      if (this.mode === "TIMER") {
        this.timerRemainMs = this.timerDurationMs;
        this.timerFinished = false;
      } else {
        this.elapsedMs = 0;
        if (this.mode === "CHRONO") this.laps = [];
        if (this.mode === "OSC") this.oscCount = 0;
        if (this.mode === "PACER") {
          this.solvedCount = 0;
          this.questionTimes = [];
          this.lastSolveSplitMs = 0;
        }
      }
      this.syncControls();
      this.renderSubPanel();
      this.updateDisplay();
      if (this.onTickBadge) this.onTickBadge(false, "");
    }

    recordAction() {
      const curMs = this.getCurrentMs();
      if (this.mode === "CHRONO") {
        if (curMs <= 0) return;
        const prevSplit = this.laps.length > 0 ? this.laps[0].splitMs : 0;
        const lapMs = curMs - prevSplit;
        this.laps.unshift({
          num: this.laps.length + 1,
          lapMs,
          splitMs: curMs
        });
        this.beep(1680, 35);
        this.renderSubPanel();
      } else if (this.mode === "OSC") {
        if (!this.running && curMs <= 0) {
          this.toggleStartPause();
          return;
        }
        this.oscCount += 1;
        this.beep(1560, 30);
        this.renderSubPanel();
      } else if (this.mode === "PACER") {
        if (!this.running && curMs <= 0) {
          this.toggleStartPause();
          return;
        }
        const qMs = curMs - this.lastSolveSplitMs;
        this.lastSolveSplitMs = curMs;
        this.solvedCount += 1;
        this.questionTimes.unshift({ num: this.solvedCount, qMs, splitMs: curMs });
        this.beep(1720, 38);
        this.renderSubPanel();
      } else if (this.mode === "TIMER") {
        // Add +1 minute quick boost
        this.timerDurationMs += 60000;
        if (this.running) {
          this.timerRemainMs += 60000;
        } else {
          this.timerRemainMs = this.timerDurationMs;
        }
        this.beep(1400, 30);
        this.renderSubPanel();
        this.updateDisplay();
      }
    }

    tickLoop() {
      if (!this.running) return;
      const curMs = this.getCurrentMs();

      if (this.mode === "TIMER" && curMs <= 0) {
        this.timerRemainMs = 0;
        this.running = false;
        this.timerFinished = true;
        if (this.soundOn) playAlarmBeepSequence();
        this.syncControls();
        this.updateDisplay();
        if (this.onTickBadge) this.onTickBadge(false, "DONE!");
        return;
      }

      this.updateDisplay();
      if (this.onTickBadge) {
        const f = formatChronoParts(curMs);
        this.onTickBadge(true, f.main);
      }
      this.rafId = requestAnimationFrame(() => this.tickLoop());
    }

    renderShell() {
      // Build 12 major tick marks for the SVG Sweep Chronometer Dial
      let ticksSvg = "";
      for (let i = 0; i < 60; i++) {
        const ang = (i * 6 * Math.PI) / 180;
        const rOuter = 42;
        const rInner = i % 5 === 0 ? 35.5 : 39;
        const x1 = (50 + rInner * Math.sin(ang)).toFixed(2);
        const y1 = (50 - rInner * Math.cos(ang)).toFixed(2);
        const x2 = (50 + rOuter * Math.sin(ang)).toFixed(2);
        const y2 = (50 - rOuter * Math.cos(ang)).toFixed(2);
        ticksSvg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${i % 5 === 0 ? 1.7 : 0.85}" opacity="${i % 5 === 0 ? 0.85 : 0.38}" />`;
      }

      this.mountEl.innerHTML = `
        <div class="chrono-outer-wrap ${this.compact ? "is-compact" : ""}">
          <!-- Physical Stopwatch Top Crown & Angled Mechanical Plungers -->
          <div class="chrono-crown-bar" aria-hidden="true">
            <button type="button" class="chrono-pusher chrono-pusher-left" data-chrono-crown="lap" tabindex="-1" title="Lap / Split Pusher">
              <span class="pusher-cap"></span>
              <span class="pusher-stem"></span>
            </button>
            <div class="chrono-lanyard-crown">
              <span class="lanyard-ring"></span>
              <span class="lanyard-neck"></span>
            </div>
            <button type="button" class="chrono-pusher chrono-pusher-right" data-chrono-crown="start" tabindex="-1" title="Start / Stop Pusher">
              <span class="pusher-cap"></span>
              <span class="pusher-stem"></span>
            </button>
          </div>

          <article class="calc-device chrono-device ${this.compact ? "is-floating-compact" : ""}" aria-label="Scientific Chronometer and Lab Stopwatch">
            <div class="calc-chassis-screws" aria-hidden="true"><span></span><span></span></div>

            <header class="calc-brand-bar">
              <div class="calc-brand-left">
                <div class="calc-maker-row">
                  <span class="calc-maker">TRIGVERSE</span>
                  <span class="calc-model">CHRONO-FX 1000</span>
                </div>
                <div class="calc-submodel">1/1000s SCIENTIFIC STOPWATCH • HARMONIC &amp; EXAM PACER</div>
              </div>
              <div class="calc-solar-wrap" aria-hidden="true">
                <div class="calc-solar-panel">
                  <span></span><span></span><span></span><span></span>
                </div>
                <span class="calc-solar-label">QUARTZ • 1kHz PRECISION</span>
              </div>
            </header>

            <!-- 4 Scientific Chronometer Modes -->
            <div class="sci-mode-strip chrono-mode-strip" role="tablist" aria-label="Scientific Stopwatch Modes">
              <button type="button" class="sci-mode-pill active" data-chrono-mode="CHRONO">1:CHRONO</button>
              <button type="button" class="sci-mode-pill" data-chrono-mode="TIMER">2:TIMER</button>
              <button type="button" class="sci-mode-pill" data-chrono-mode="OSC">3:OSC·Hz</button>
              <button type="button" class="sci-mode-pill" data-chrono-mode="PACER">4:PACER</button>
            </div>

            <!-- Recessed Backlit Chronometer LCD -->
            <div class="calc-screen-bezel chrono-screen-bezel">
              <div class="calc-lcd chrono-lcd">
                <div class="calc-lcd-status">
                  <span class="chrono-run-pill" data-role="run-pill">● READY</span>
                  <span class="sci-fmt-pill" data-role="sound-pill" title="Toggle Quartz Audio">🔊 BEEP ON</span>
                  <span class="calc-lcd-quad" data-role="theta-pill">θ = 0.0°</span>
                </div>

                <!-- Sweep Dial + Giant 1/1000s Digital Display -->
                <div class="chrono-hero-row">
                  <div class="chrono-dial-box" aria-hidden="true">
                    <svg viewBox="0 0 100 100" class="chrono-dial-svg">
                      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="1.4" opacity="0.25" />
                      ${ticksSvg}
                      <circle cx="50" cy="50" r="31" fill="none" stroke="#fbbf24" stroke-width="2.4" stroke-dasharray="194.78" stroke-dashoffset="194.78" transform="rotate(-90 50 50)" data-role="sweep-arc" opacity="0.72" />
                      <line x1="50" y1="50" x2="50" y2="14" stroke="#fde047" stroke-width="2.2" stroke-linecap="round" data-role="sec-hand" />
                      <line x1="50" y1="50" x2="50" y2="27" stroke="#34d399" stroke-width="1.3" stroke-linecap="round" data-role="ms-hand" opacity="0.85" />
                      <circle cx="50" cy="50" r="3.4" fill="#fb923c" />
                    </svg>
                  </div>

                  <div class="chrono-digits-col">
                    <div class="chrono-sub-caption" data-role="sub-caption">ELAPSED LAB TIME (1 ms)</div>
                    <div class="chrono-main-digits" data-role="digits-wrap">
                      <span class="chrono-hms" data-role="hms">00:00</span><span class="chrono-ms" data-role="ms">.000</span>
                    </div>
                    <div class="chrono-live-sub" data-role="live-sub">LAP 01 • 00:00.000</div>
                  </div>
                </div>

                <!-- Progress bar for Countdown Timer mode -->
                <div class="chrono-progress-track" data-role="timer-track" hidden>
                  <div class="chrono-progress-fill" data-role="timer-fill" style="width:100%"></div>
                </div>

                <!-- Dynamic Scientific Telemetry & Lap Table -->
                <div class="chrono-subpanel" data-role="subpanel"></div>
              </div>
            </div>

            <!-- Sculpted 3D Chronometer Tactile Triggers -->
            <div class="calc-keypad chrono-keypad">
              <div class="calc-key-row chrono-main-triggers">
                <button type="button" class="calc-key chrono-btn-start" data-chrono-act="start">▶ START</button>
                <button type="button" class="calc-key chrono-btn-lap" data-chrono-act="lap" data-role="btn-lap">🏁 LAP</button>
                <button type="button" class="calc-key key-ac chrono-btn-reset" data-chrono-act="reset">↺ RESET</button>
              </div>

              <!-- Context Presets & Scientific Utilities Row -->
              <div class="chrono-context-keys" data-role="context-keys"></div>

              <div class="calc-key-row calc-row-3">
                <button type="button" class="calc-key key-const" data-chrono-act="sound">🔊 Audio</button>
                <button type="button" class="calc-key key-const" data-chrono-act="copy">📋 Copy Log</button>
                <button type="button" class="calc-key key-fn-alt" data-chrono-act="clear-log">⌫ Clear Log</button>
              </div>
            </div>
          </article>
        </div>
      `;

      this.bindEvents();
      this.syncControls();
      this.renderSubPanel();
    }

    bindEvents() {
      const root = this.mountEl;

      root.querySelectorAll("[data-chrono-mode]").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (this.running) this.toggleStartPause();
          this.mode = btn.dataset.chronoMode;
          this.timerFinished = false;
          this.syncControls();
          this.renderSubPanel();
          this.updateDisplay();
        });
      });

      root.querySelector('[data-role="sound-pill"]')?.addEventListener("click", () => {
        this.soundOn = !this.soundOn;
        if (this.soundOn) this.beep(1400, 30);
        this.syncControls();
      });

      root.querySelectorAll("[data-chrono-crown]").forEach((p) => {
        p.addEventListener("click", () => {
          p.classList.add("pressed");
          setTimeout(() => p.classList.remove("pressed"), 140);
          if (p.dataset.chronoCrown === "start") this.toggleStartPause();
          else this.recordAction();
        });
      });

      root.querySelectorAll("[data-chrono-act]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const act = btn.dataset.chronoAct;
          if (act === "start") this.toggleStartPause();
          else if (act === "lap") this.recordAction();
          else if (act === "reset") this.reset();
          else if (act === "sound") {
            this.soundOn = !this.soundOn;
            if (this.soundOn) this.beep(1400, 30);
            this.syncControls();
          } else if (act === "copy") {
            this.copyTelemetryLog();
          } else if (act === "clear-log") {
            this.laps = [];
            this.oscCount = 0;
            this.solvedCount = 0;
            this.questionTimes = [];
            this.lastSolveSplitMs = this.getCurrentMs();
            this.beep(880, 30);
            this.renderSubPanel();
            this.updateDisplay();
          }
        });
      });
    }

    syncControls() {
      const root = this.mountEl;
      root.querySelectorAll("[data-chrono-mode]").forEach((b) => {
        b.classList.toggle("active", b.dataset.chronoMode === this.mode);
      });

      const runPill = root.querySelector('[data-role="run-pill"]');
      if (runPill) {
        runPill.textContent = this.timerFinished ? "🔔 TIME UP!" : this.running ? "● RUNNING" : "● READY";
        runPill.classList.toggle("is-run", this.running);
        runPill.classList.toggle("is-done", this.timerFinished);
      }

      const sndPill = root.querySelector('[data-role="sound-pill"]');
      if (sndPill) sndPill.textContent = this.soundOn ? "🔊 BEEP ON" : "🔇 MUTED";

      const startBtn = root.querySelector(".chrono-btn-start");
      if (startBtn) {
        startBtn.textContent = this.running ? "⏸ PAUSE" : "▶ START";
        startBtn.classList.toggle("is-running", this.running);
      }

      const lapBtn = root.querySelector('[data-role="btn-lap"]');
      if (lapBtn) {
        lapBtn.textContent =
          this.mode === "CHRONO" ? "🏁 LAP" :
          this.mode === "TIMER" ? "+1 MIN" :
          this.mode === "OSC" ? "🔄 +1 OSC" : "✅ +1 SOLVED";
      }

      const subCap = root.querySelector('[data-role="sub-caption"]');
      if (subCap) {
        subCap.textContent =
          this.mode === "CHRONO" ? "ELAPSED LAB TIME (1/1000s)" :
          this.mode === "TIMER" ? "COUNTDOWN EXAM / STUDY TIMER" :
          this.mode === "OSC" ? "HARMONIC PERIOD & ANGULAR ω LAB" : "MCQ & PROBLEM SPEED PACER";
      }

      const timerTrack = root.querySelector('[data-role="timer-track"]');
      if (timerTrack) timerTrack.hidden = this.mode !== "TIMER";

      this.renderContextKeys();
    }

    renderContextKeys() {
      const box = this.mountEl.querySelector('[data-role="context-keys"]');
      if (!box) return;

      if (this.mode === "TIMER") {
        const presets = [
          [60, "1m MCQ"],
          [300, "5m Sprint"],
          [900, "15m Quiz"],
          [1500, "25m Focus"],
          [2700, "45m Test"],
          [3600, "60m Exam"]
        ];
        box.innerHTML = `
          <div class="calc-key-row calc-row-6">
            ${presets.map(([sec, lbl]) => `<button type="button" class="calc-key key-const ${this.timerDurationMs === sec * 1000 ? "active" : ""}" data-tmr-sec="${sec}">${lbl}</button>`).join("")}
          </div>
        `;
        box.querySelectorAll("[data-tmr-sec]").forEach((b) => {
          b.addEventListener("click", () => {
            if (this.running) this.toggleStartPause();
            const ms = Number(b.dataset.tmrSec) * 1000;
            this.timerDurationMs = ms;
            this.timerRemainMs = ms;
            this.timerFinished = false;
            this.beep(1300, 28);
            this.syncControls();
            this.renderSubPanel();
            this.updateDisplay();
          });
        });
      } else if (this.mode === "OSC") {
        box.innerHTML = `
          <div class="calc-key-row calc-row-4">
            <button type="button" class="calc-key key-const" data-osc-set="1">N = 1 Swing</button>
            <button type="button" class="calc-key key-const" data-osc-set="5">N = 5 Swings</button>
            <button type="button" class="calc-key key-const" data-osc-set="10">N = 10 Swings</button>
            <button type="button" class="calc-key key-const" data-osc-set="20">N = 20 Swings</button>
          </div>
        `;
        box.querySelectorAll("[data-osc-set]").forEach((b) => {
          b.addEventListener("click", () => {
            this.oscCount = Number(b.dataset.oscSet);
            this.beep(1380, 28);
            this.renderSubPanel();
          });
        });
      } else if (this.mode === "PACER") {
        box.innerHTML = `
          <div class="calc-key-row calc-row-4">
            <button type="button" class="calc-key key-const ${this.targetSecPerQ === 30 ? "active" : ""}" data-pace-t="30">Goal: 30s/Q</button>
            <button type="button" class="calc-key key-const ${this.targetSecPerQ === 60 ? "active" : ""}" data-pace-t="60">Goal: 60s/Q</button>
            <button type="button" class="calc-key key-const ${this.targetSecPerQ === 90 ? "active" : ""}" data-pace-t="90">Goal: 90s/Q</button>
            <button type="button" class="calc-key key-const ${this.targetSecPerQ === 120 ? "active" : ""}" data-pace-t="120">Goal: 120s/Q</button>
          </div>
        `;
        box.querySelectorAll("[data-pace-t]").forEach((b) => {
          b.addEventListener("click", () => {
            this.targetSecPerQ = Number(b.dataset.paceT);
            this.beep(1380, 28);
            this.syncControls();
            this.renderSubPanel();
          });
        });
      } else {
        box.innerHTML = "";
      }
    }

    updateDisplay() {
      const root = this.mountEl;
      const curMs = this.getCurrentMs();
      const parts = formatChronoParts(curMs);

      const hmsEl = root.querySelector('[data-role="hms"]');
      const msEl = root.querySelector('[data-role="ms"]');
      if (hmsEl) hmsEl.textContent = parts.main;
      if (msEl) msEl.textContent = parts.ms;

      // Update Sweeping Analog / Trigonometric Dial
      const totalSec = curMs / 1000;
      const secInMin = totalSec % 60;
      const deg = secInMin * 6; // 360° per 60s
      const msDeg = ((curMs % 1000) / 1000) * 360;

      const secHand = root.querySelector('[data-role="sec-hand"]');
      const msHand = root.querySelector('[data-role="ms-hand"]');
      const sweepArc = root.querySelector('[data-role="sweep-arc"]');
      const thetaPill = root.querySelector('[data-role="theta-pill"]');

      if (secHand) secHand.setAttribute("transform", `rotate(${deg.toFixed(2)} 50 50)`);
      if (msHand) msHand.setAttribute("transform", `rotate(${msDeg.toFixed(1)} 50 50)`);
      if (sweepArc) {
        const circumference = 194.78;
        const offset = circumference * (1 - secInMin / 60);
        sweepArc.setAttribute("stroke-dashoffset", offset.toFixed(2));
      }
      if (thetaPill) {
        thetaPill.textContent = `θ = ${deg.toFixed(1)}° (${((deg * Math.PI) / 180).toFixed(2)} rad)`;
      }

      const liveSub = root.querySelector('[data-role="live-sub"]');
      if (liveSub) {
        if (this.mode === "CHRONO") {
          const prevSplit = this.laps.length > 0 ? this.laps[0].splitMs : 0;
          const curLap = formatChronoParts(curMs - prevSplit);
          liveSub.textContent = `LAP ${String(this.laps.length + 1).padStart(2, "0")} • ${curLap.compact}`;
        } else if (this.mode === "TIMER") {
          const pct = this.timerDurationMs > 0 ? Math.round((curMs / this.timerDurationMs) * 100) : 0;
          liveSub.textContent = this.timerFinished
            ? "🔔 COUNTDOWN COMPLETE!"
            : `REMAINING: ${pct}% of ${formatChronoParts(this.timerDurationMs).main}`;
          const fill = root.querySelector('[data-role="timer-fill"]');
          if (fill) fill.style.width = `${Math.max(0, Math.min(100, pct))}%`;
        } else if (this.mode === "OSC") {
          if (this.oscCount > 0 && curMs > 0) {
            const T = (curMs / 1000) / this.oscCount;
            const omega = (2 * Math.PI) / T;
            liveSub.textContent = `N = ${this.oscCount} • T = ${T.toFixed(3)}s • ω = ${omega.toFixed(2)} rad/s`;
          } else {
            liveSub.textContent = "Start & tap +1 OSC on each cycle!";
          }
        } else if (this.mode === "PACER") {
          const curQ = formatChronoParts(curMs - this.lastSolveSplitMs);
          liveSub.textContent = `Q#${this.solvedCount + 1} IN PROGRESS • ${curQ.compact}`;
        }
      }

      if (this.mode === "OSC" && this.running && this.oscCount > 0) {
        this.renderOscLiveMetrics(curMs);
      }
    }

    renderOscLiveMetrics(curMs) {
      const box = this.mountEl.querySelector('[data-role="osc-live-grid"]');
      if (!box) return;
      const tSec = Math.max(0.001, curMs / 1000);
      const T = tSec / this.oscCount;
      const freq = 1 / T;
      const omegaRad = 2 * Math.PI * freq;
      const omegaDeg = 360 * freq;
      const pendL = 9.80665 * Math.pow(T / (2 * Math.PI), 2);
      box.innerHTML = `
        <div class="calc-cas-chip"><span>CYCLES N</span><strong>${this.oscCount}</strong></div>
        <div class="calc-cas-chip"><span>PERIOD T</span><strong>${T.toFixed(4)} s</strong></div>
        <div class="calc-cas-chip"><span>FREQ f</span><strong>${freq.toFixed(4)} Hz</strong></div>
        <div class="calc-cas-chip"><span>ω = 2πf</span><strong>${omegaRad.toFixed(3)} rad/s (${omegaDeg.toFixed(1)}°/s)</strong></div>
        <div class="calc-cas-chip" style="grid-column:1/-1;"><span>PENDULUM L = g(T/2π)²</span><strong>${pendL.toFixed(4)} m (${(pendL * 100).toFixed(2)} cm)</strong></div>
      `;
    }

    renderSubPanel() {
      const sp = this.mountEl.querySelector('[data-role="subpanel"]');
      if (!sp) return;

      if (this.mode === "CHRONO") {
        if (this.laps.length === 0) {
          sp.innerHTML = `
            <div class="chrono-empty-hint">
              Press <strong>▶ START</strong> then <strong>🏁 LAP</strong> (or the top metal crown pushers) to log 1/1000s splits, Mean <strong>x̄</strong>, and Std Dev <strong>σ</strong>.
            </div>
          `;
          return;
        }
        const times = this.laps.map((l) => l.lapMs);
        const minMs = Math.min(...times);
        const maxMs = Math.max(...times);
        const meanMs = times.reduce((a, b) => a + b, 0) / times.length;
        const sdMs = Math.sqrt(times.reduce((a, b) => a + (b - meanMs) ** 2, 0) / times.length);

        sp.innerHTML = `
          <div class="calc-cas-telemetry" style="margin-bottom:0.42rem;">
            <div class="calc-cas-chip"><span>MEAN x̄</span><strong>${formatChronoParts(meanMs).compact}</strong></div>
            <div class="calc-cas-chip"><span>STD DEV σ</span><strong>±${(sdMs / 1000).toFixed(3)} s</strong></div>
            <div class="calc-cas-chip ok"><span>FASTEST</span><strong>${formatChronoParts(minMs).compact}</strong></div>
            <div class="calc-cas-chip"><span>SLOWEST</span><strong>${formatChronoParts(maxMs).compact}</strong></div>
          </div>
          <div class="sci-table-scroll chrono-lap-scroll">
            <table class="sci-lcd-table">
              <thead><tr><th>Lap</th><th>Δ Lap</th><th>Split</th><th>Δ vs x̄</th></tr></thead>
              <tbody>
                ${this.laps.map((l) => {
                  const diffS = (l.lapMs - meanMs) / 1000;
                  const cls = this.laps.length > 1 ? (l.lapMs === minMs ? "lap-best" : l.lapMs === maxMs ? "lap-slow" : "") : "";
                  return `<tr class="${cls}">
                    <td>#${String(l.num).padStart(2, "0")}</td>
                    <td>${formatChronoParts(l.lapMs).compact}</td>
                    <td>${formatChronoParts(l.splitMs).compact}</td>
                    <td>${diffS >= 0 ? "+" : "−"}${Math.abs(diffS).toFixed(3)}s</td>
                  </tr>`;
                }).join("")}
              </tbody>
            </table>
          </div>
        `;
      } else if (this.mode === "TIMER") {
        const totSec = Math.round(this.timerDurationMs / 1000);
        const m = Math.floor(totSec / 60);
        const s = totSec % 60;
        sp.innerHTML = `
          <div class="sci-coeff-grid" style="grid-template-columns:1fr 1fr;margin-top:0.35rem;margin-bottom:0;">
            <label class="sci-coeff-cell">
              <span>SET MIN</span>
              <input type="number" name="chrono-set-min" min="0" max="999" value="${m}" data-tmr-custom="min" />
            </label>
            <label class="sci-coeff-cell">
              <span>SET SEC</span>
              <input type="number" name="chrono-set-sec" min="0" max="59" value="${s}" data-tmr-custom="sec" />
            </label>
          </div>
        `;
        sp.querySelectorAll("[data-tmr-custom]").forEach((inp) => {
          inp.addEventListener("input", () => {
            if (this.running) return;
            const mm = Math.max(0, Number(sp.querySelector('[data-tmr-custom="min"]')?.value) || 0);
            const ss = Math.max(0, Math.min(59, Number(sp.querySelector('[data-tmr-custom="sec"]')?.value) || 0));
            this.timerDurationMs = (mm * 60 + ss) * 1000;
            this.timerRemainMs = this.timerDurationMs;
            this.timerFinished = false;
            this.updateDisplay();
          });
        });
      } else if (this.mode === "OSC") {
        const curMs = this.getCurrentMs();
        sp.innerHTML = `<div class="calc-cas-telemetry" data-role="osc-live-grid" style="margin-bottom:0;"></div>`;
        if (this.oscCount > 0 && curMs > 0) {
          this.renderOscLiveMetrics(curMs);
        } else {
          sp.querySelector('[data-role="osc-live-grid"]').innerHTML = `
            <div class="chrono-empty-hint" style="grid-column:1/-1;">
              Measure harmonic motion: Start stopwatch, count swings, and tap <strong>🔄 +1 OSC</strong> (or pick <strong>N = 10 Swings</strong>) to compute Period <strong>T</strong>, Frequency <strong>f</strong>, Angular Velocity <strong>ω = 2πf</strong>, &amp; Pendulum Length <strong>L</strong>!
            </div>
          `;
        }
      } else if (this.mode === "PACER") {
        if (this.solvedCount === 0) {
          sp.innerHTML = `
            <div class="chrono-empty-hint">
              Target: <strong>${this.targetSecPerQ}s / Question</strong> (${Math.round(3600 / this.targetSecPerQ)} Q/hr). Tap <strong>✅ +1 SOLVED</strong> after each problem!
            </div>
          `;
          return;
        }
        const avgMs = this.lastSolveSplitMs / this.solvedCount;
        const avgSec = avgMs / 1000;
        const qPerHr = avgSec > 0 ? (3600 / avgSec) : 0;
        const onPace = avgSec <= this.targetSecPerQ;

        sp.innerHTML = `
          <div class="calc-cas-telemetry" style="margin-bottom:0.4rem;">
            <div class="calc-cas-chip"><span>SOLVED</span><strong>${this.solvedCount} Qs</strong></div>
            <div class="calc-cas-chip ${onPace ? "ok" : ""}"><span>AVG / Q</span><strong>${avgSec.toFixed(2)}s ${onPace ? "✓" : "⚠"}</strong></div>
            <div class="calc-cas-chip"><span>PACE</span><strong>${qPerHr.toFixed(1)} Q/hr</strong></div>
            <div class="calc-cas-chip"><span>GOAL Δ</span><strong>${(avgSec - this.targetSecPerQ) >= 0 ? "+" : "−"}${Math.abs(avgSec - this.targetSecPerQ).toFixed(1)}s</strong></div>
          </div>
          <div class="sci-table-scroll chrono-lap-scroll">
            <table class="sci-lcd-table">
              <thead><tr><th>Problem</th><th>Solve Time</th><th>Elapsed</th></tr></thead>
              <tbody>
                ${this.questionTimes.map((q) => `<tr class="${q.qMs / 1000 <= this.targetSecPerQ ? "lap-best" : "lap-slow"}">
                  <td>Q#${q.num}</td>
                  <td>${(q.qMs / 1000).toFixed(2)}s</td>
                  <td>${formatChronoParts(q.splitMs).main}</td>
                </tr>`).join("")}
              </tbody>
            </table>
          </div>
        `;
      }
    }

    copyTelemetryLog() {
      let text = `TrigVerse CHRONO-FX 1000 (${this.mode})\n`;
      if (this.mode === "CHRONO" && this.laps.length > 0) {
        text += "Lap,Lap_Time,Split_Time\n" +
          [...this.laps].reverse().map((l) => `${l.num},${formatChronoParts(l.lapMs).compact},${formatChronoParts(l.splitMs).compact}`).join("\n");
      } else if (this.mode === "PACER" && this.questionTimes.length > 0) {
        text += "Question,Seconds,Elapsed\n" +
          [...this.questionTimes].reverse().map((q) => `Q${q.num},${(q.qMs / 1000).toFixed(3)},${formatChronoParts(q.splitMs).compact}`).join("\n");
      } else {
        text += `Time: ${formatChronoParts(this.getCurrentMs()).compact}`;
      }
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      this.beep(1600, 45);
    }
  }

  /* ------------------------------------------------------------------------
     Auto-Mount Page Chronometer + All-Mode Floating Stopwatch Drawer
     ------------------------------------------------------------------------ */
  function initScientificStopwatches() {
    const pageMount = document.getElementById("master-stopwatch-mount");
    if (pageMount) {
      window.TrigMasterStopwatch = new TrigScientificStopwatch(pageMount, { compact: false });
    }

    const floatDrawer = document.getElementById("floating-stopwatch-drawer");
    const floatMount = document.getElementById("floating-stopwatch-mount");
    const badgeSpans = document.querySelectorAll("[data-chrono-live-badge]");
    let floatWatch = null;

    const updateTopbarBadge = (isRunning, timeStr) => {
      badgeSpans.forEach((el) => {
        el.textContent = isRunning ? timeStr : "Watch";
      });
      document.querySelectorAll("[data-toggle-floating-watch]").forEach((btn) => {
        btn.classList.toggle("is-ticking", isRunning);
      });
    };

    const toggleFloatingWatch = (forceOpen) => {
      if (!floatDrawer || !floatMount) return;
      const willOpen = typeof forceOpen === "boolean" ? forceOpen : floatDrawer.hidden;
      floatDrawer.hidden = !willOpen;
      document.querySelectorAll("[data-toggle-floating-watch]").forEach((b) => {
        b.classList.toggle("active", willOpen);
      });
      if (willOpen && !floatWatch) {
        floatWatch = new TrigScientificStopwatch(floatMount, {
          compact: true,
          onTickBadge: updateTopbarBadge
        });
      }
    };

    document.querySelectorAll("[data-toggle-floating-watch]").forEach((btn) => {
      btn.addEventListener("click", () => toggleFloatingWatch());
    });
    document.getElementById("btn-close-floating-watch")?.addEventListener("click", () => toggleFloatingWatch(false));
    document.getElementById("btn-dock-watch-solver")?.addEventListener("click", () => {
      toggleFloatingWatch(false);
      document.querySelector('.nav-tab[data-view="solver"]')?.click();
    });

    // Global shortcut Alt+S when floating watch drawer is present
    if (floatDrawer && floatMount) {
      window.addEventListener("keydown", (e) => {
        if (e.altKey && (e.key === "s" || e.key === "S")) {
          e.preventDefault();
          toggleFloatingWatch();
        }
      });
    }
  }

  window.TrigScientificStopwatch = TrigScientificStopwatch;

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initScientificStopwatches);
  } else {
    initScientificStopwatches();
  }
})();
