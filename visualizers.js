/* ==========================================================================
   TrigVerse Interactive HTML5 Canvas Visualizers
   ========================================================================== */

window.TrigVisualizers = (function () {
  function prepareCanvas(canvas, heightCss, mobileHeightCss) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    if (canvas.parentElement) {
      canvas.parentElement.style.minWidth = "0";
      canvas.parentElement.style.maxWidth = "100%";
    }
    canvas.style.width = "100%";
    canvas.style.maxWidth = "100%";
    const maxViewportW = Math.max(200, (window.innerWidth || 360) - 24);
    const parentW = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
    const rect = canvas.getBoundingClientRect();
    const rawW = parentW || rect.width || Math.min(maxViewportW, 680);
    const widthCss = Math.max(Math.min(Math.floor(rawW), maxViewportW), 200);
    const isNarrow = widthCss < 480;
    const finalH = isNarrow && mobileHeightCss ? mobileHeightCss : heightCss;
    canvas.style.height = finalH + "px";
    canvas.width = Math.round(widthCss * dpr);
    canvas.height = Math.round(finalH * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    return {
      ctx,
      w: widthCss,
      h: finalH,
      isNarrow,
      colors: {
        bg: isLight ? "#ffffff" : "#151e38",
        grid: isLight ? "rgba(15,23,42,0.08)" : "rgba(148,163,184,0.12)",
        axis: isLight ? "#475569" : "#94a3b8",
        text: isLight ? "#0f172a" : "#f1f5f9",
        muted: isLight ? "#64748b" : "#94a3b8",
        primary: isLight ? "#4f46e5" : "#818cf8",
        cyan: isLight ? "#0891b2" : "#22d3ee",
        emerald: isLight ? "#059669" : "#10b981",
        amber: isLight ? "#d97706" : "#f59e0b",
        rose: isLight ? "#e11d48" : "#f43f5e"
      }
    };
  }

  /* ------------------------------------------------------------------------
     Mobile Direct-Touch & Pointer Drag Helpers for Interactive Canvases
     ------------------------------------------------------------------------ */
  function enableRadialTouchDrag(canvas, getOriginAndBoundsFn, onAngleDegFn) {
    if (!canvas) return;
    canvas.style.touchAction = "pan-y";
    canvas.style.cursor = "grab";
    let dragging = false;
    let touchMode = "idle"; // "idle" | "pending" | "drag" | "scroll"
    let startX = 0;
    let startY = 0;

    const updateFromClient = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const info = getOriginAndBoundsFn(rect.width, rect.height);
      if (!info) return false;
      if (info.maxY && y > info.maxY && !dragging) return false;
      const dx = x - info.cx;
      const dy = info.cy - y;
      if (Math.hypot(dx, dy) < 6) return true;
      let deg = (Math.atan2(dy, dx) * 180) / Math.PI;
      if (deg < 0) deg += 360;
      onAngleDegFn(deg);
      return true;
    };

    canvas.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") {
        startX = e.clientX;
        startY = e.clientY;
        touchMode = "pending";
        return;
      }
      if (updateFromClient(e.clientX, e.clientY)) {
        dragging = true;
        canvas.style.cursor = "grabbing";
        try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
      }
    });
    canvas.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") {
        if (touchMode === "scroll" || touchMode === "idle") return;
        if (touchMode === "pending") {
          const dx = Math.abs(e.clientX - startX);
          const dy = Math.abs(e.clientY - startY);
          if (Math.hypot(dx, dy) < 7) return;
          if (dy > dx * 1.25) {
            touchMode = "scroll";
            return;
          }
          touchMode = "drag";
          dragging = true;
        }
        if (e.cancelable) e.preventDefault();
        updateFromClient(e.clientX, e.clientY);
        return;
      }
      if (!dragging) return;
      if (e.cancelable) e.preventDefault();
      updateFromClient(e.clientX, e.clientY);
    });
    const endDrag = (e) => {
      if (e && e.pointerType === "touch" && e.type === "pointerup" && touchMode === "pending") {
        updateFromClient(e.clientX, e.clientY);
      }
      dragging = false;
      touchMode = "idle";
      canvas.style.cursor = "grab";
    };
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
  }

  function enableHorizontalScrubDrag(canvas, getPadFn, onFractionFn) {
    if (!canvas) return;
    canvas.style.touchAction = "pan-y";
    canvas.style.cursor = "ew-resize";
    let dragging = false;
    let touchMode = "idle"; // "idle" | "pending" | "drag" | "scroll"
    let startX = 0;
    let startY = 0;

    const updateFromClient = (clientX) => {
      const rect = canvas.getBoundingClientRect();
      const pad = getPadFn(rect.width);
      const span = Math.max(40, rect.width - 2 * pad);
      const frac = Math.min(1, Math.max(0, (clientX - rect.left - pad) / span));
      onFractionFn(frac);
    };

    canvas.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") {
        startX = e.clientX;
        startY = e.clientY;
        touchMode = "pending";
        return;
      }
      dragging = true;
      updateFromClient(e.clientX);
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    });
    canvas.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") {
        if (touchMode === "scroll" || touchMode === "idle") return;
        if (touchMode === "pending") {
          const dx = Math.abs(e.clientX - startX);
          const dy = Math.abs(e.clientY - startY);
          if (dx < 6 && dy < 6) return;
          if (dy > dx) {
            touchMode = "scroll";
            return;
          }
          touchMode = "drag";
          dragging = true;
        }
        if (e.cancelable) e.preventDefault();
        updateFromClient(e.clientX);
        return;
      }
      if (!dragging) return;
      if (e.cancelable) e.preventDefault();
      updateFromClient(e.clientX);
    });
    const endDrag = (e) => {
      if (e && e.pointerType === "touch" && e.type === "pointerup" && touchMode === "pending") {
        updateFromClient(e.clientX);
      }
      dragging = false;
      touchMode = "idle";
    };
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
  }

  /* ------------------------------------------------------------------------
     1. Protractor & Angle Classifier
     ------------------------------------------------------------------------ */
  function mountProtractor(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Protractor, Turns & Angle Pairs</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Rotation Angle θ <span id="lbl-deg">55°</span></label>
            <input type="range" id="ctrl-deg" min="0" max="360" value="55" step="1" />
          </div>
          <div class="control-group">
            <label>Quick Presets</label>
            <select id="ctrl-preset">
              <option value="55">55° (Acute)</option>
              <option value="90">90° (Right Corner)</option>
              <option value="135">135° (Obtuse)</option>
              <option value="180">180° (Straight Line)</option>
              <option value="240">240° (Reflex)</option>
              <option value="360">360° (Complete Turn)</option>
            </select>
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const slider = container.querySelector("#ctrl-deg");
    const preset = container.querySelector("#ctrl-preset");
    const lblDeg = container.querySelector("#lbl-deg");
    const readout = container.querySelector("#viz-readout");

    function classify(deg) {
      if (deg === 0) return "Zero Angle";
      if (deg < 90) return "Acute Angle";
      if (deg === 90) return "Right Angle (Quarter Turn)";
      if (deg < 180) return "Obtuse Angle";
      if (deg === 180) return "Straight Angle (Half Turn)";
      if (deg < 360) return "Reflex Angle";
      return "Complete Angle (Full Turn)";
    }

    function draw() {
      const deg = Number(slider.value);
      lblDeg.textContent = deg + "°";
      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 290, 265);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.62;
      const R = Math.min(w * 0.36, h * 0.44, 125);

      // Draw protractor ticks (0 to 180)
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, R, Math.PI, 0, false);
      ctx.stroke();

      for (let a = 0; a <= 180; a += 15) {
        const rad = (a * Math.PI) / 180;
        const inner = a % 30 === 0 ? R - 12 : R - 6;
        ctx.strokeStyle = colors.axis;
        ctx.beginPath();
        ctx.moveTo(cx + inner * Math.cos(rad), cy - inner * Math.sin(rad));
        ctx.lineTo(cx + R * Math.cos(rad), cy - R * Math.sin(rad));
        ctx.stroke();
        if (a % 30 === 0) {
          ctx.fillStyle = colors.muted;
          ctx.font = "11px Inter, sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(a + "°", cx + (R + 16) * Math.cos(rad), cy - (R + 16) * Math.sin(rad) + 4);
        }
      }

      // Swept sector
      const rad = (deg * Math.PI) / 180;
      ctx.fillStyle = "rgba(99, 102, 241, 0.2)";
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R * 0.5, 0, -rad, true);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = colors.amber;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.5, 0, -rad, true);
      ctx.stroke();

      // Initial ray (0 deg)
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * 1.05, cy);
      ctx.stroke();

      // Terminal ray
      ctx.strokeStyle = colors.rose;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * 1.05 * Math.cos(rad), cy - R * 1.05 * Math.sin(rad));
      ctx.stroke();

      // Vertex dot
      ctx.fillStyle = colors.text;
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = colors.text;
      ctx.font = isNarrow ? "bold 12.5px Inter, sans-serif" : "bold 14px Inter, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`${deg}° — ${classify(deg)}`, 14, 24);
      ctx.fillStyle = colors.muted;
      ctx.font = "11px Inter, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("👆 Drag ray", w - 12, 24);
      ctx.textAlign = "left";

      const comp = deg <= 90 ? (90 - deg) + "°" : "N/A (>90°)";
      const supp = deg <= 180 ? (180 - deg) + "°" : "N/A (>180°)";
      readout.innerHTML = `
        <div class="readout-chip">Type: <strong>${classify(deg)}</strong></div>
        <div class="readout-chip">Turn Fraction: <strong>${(deg / 360).toFixed(3)}</strong> of circle</div>
        <div class="readout-chip">Complement (to 90°): <strong>${comp}</strong></div>
        <div class="readout-chip">Supplement (to 180°): <strong>${supp}</strong></div>
      `;
    }

    enableRadialTouchDrag(
      canvas,
      (cw, ch) => ({ cx: cw * 0.5, cy: ch * 0.62 }),
      (deg) => {
        slider.value = Math.round(deg);
        draw();
      }
    );

    slider.addEventListener("input", draw);
    preset.addEventListener("change", () => {
      slider.value = preset.value;
      draw();
    });
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     2. Right Triangle, Similarity & SOH-CAH-TOA Lab
     ------------------------------------------------------------------------ */
  function mountRightTriangle(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Right Triangle, Similarity Zoom & SOH-CAH-TOA</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Acute Angle θ <span id="lbl-theta">36.9°</span></label>
            <input type="range" id="ctrl-theta" min="8" max="82" value="36.87" step="0.1" />
          </div>
          <div class="control-group">
            <label>Triangle Scale (Zoom) <span id="lbl-scale">1.0×</span></label>
            <input type="range" id="ctrl-scale" min="0.5" max="1.6" value="1.0" step="0.05" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const ctrlTheta = container.querySelector("#ctrl-theta");
    const ctrlScale = container.querySelector("#ctrl-scale");
    const lblTheta = container.querySelector("#lbl-theta");
    const lblScale = container.querySelector("#lbl-scale");
    const readout = container.querySelector("#viz-readout");

    function draw() {
      const deg = Number(ctrlTheta.value);
      const scale = Number(ctrlScale.value);
      const rad = (deg * Math.PI) / 180;
      lblTheta.textContent = deg.toFixed(1) + "°";
      lblScale.textContent = scale.toFixed(2) + "×";

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 300, 275);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const hypUnits = 5 * scale;
      const adjUnits = hypUnits * Math.cos(rad);
      const oppUnits = hypUnits * Math.sin(rad);

      const x0 = isNarrow ? 28 : 70;
      const rightPad = isNarrow ? 82 : 95;
      const pxPerUnit = Math.min((w - x0 - rightPad) / 7.8, (h - 76) / 7.4);
      const y0 = h - 38;
      const x1 = x0 + adjUnits * pxPerUnit;
      const y1 = y0 - oppUnits * pxPerUnit;

      // Triangle fill
      ctx.fillStyle = "rgba(34, 211, 238, 0.11)";
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y0);
      ctx.lineTo(x1, y1);
      ctx.closePath();
      ctx.fill();

      // Right angle square at (x1, y0)
      const sq = 12;
      ctx.strokeStyle = colors.muted;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x1 - sq, y0 - sq, sq, sq);

      // Adjacent
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y0);
      ctx.stroke();

      // Opposite
      ctx.strokeStyle = colors.rose;
      ctx.beginPath();
      ctx.moveTo(x1, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();

      // Hypotenuse
      ctx.strokeStyle = colors.amber;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();

      // Angle arc
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x0, y0, Math.min(28, (x1 - x0) * 0.6), 0, -rad, true);
      ctx.stroke();

      // Labels
      ctx.font = isNarrow ? "bold 11px Inter, sans-serif" : "bold 12.5px Inter, sans-serif";
      ctx.fillStyle = colors.cyan;
      ctx.textAlign = "center";
      ctx.fillText(`A = ${adjUnits.toFixed(2)}`, (x0 + x1) / 2, y0 + 20);

      ctx.fillStyle = colors.rose;
      ctx.textAlign = "left";
      ctx.fillText(`O = ${oppUnits.toFixed(2)}`, x1 + 7, (y0 + y1) / 2 + 4);

      ctx.fillStyle = colors.amber;
      ctx.textAlign = "left";
      ctx.fillText(`H = ${hypUnits.toFixed(2)}`, x0 + 6, Math.max(44, (y0 + y1) / 2 - 10));

      ctx.fillStyle = colors.text;
      ctx.textAlign = "left";
      ctx.fillText(
        isNarrow
          ? "Zoom scale changes sides; ratios stay constant!"
          : "Notice: Drag 'Triangle Scale' — sides change, yet sin θ, cos θ, tan θ NEVER budge!",
        14,
        22
      );

      readout.innerHTML = `
        <div class="readout-chip">Pythagoras: <strong>${adjUnits.toFixed(2)}² + ${oppUnits.toFixed(2)}² = ${(hypUnits * hypUnits).toFixed(2)}</strong></div>
        <div class="readout-chip">sin θ = O/H = <strong>${Math.sin(rad).toFixed(4)}</strong></div>
        <div class="readout-chip">cos θ = A/H = <strong>${Math.cos(rad).toFixed(4)}</strong></div>
        <div class="readout-chip">tan θ = O/A = <strong>${Math.tan(rad).toFixed(4)}</strong></div>
      `;
    }

    enableRadialTouchDrag(
      canvas,
      (cw, ch) => ({ cx: cw < 480 ? 28 : 70, cy: ch - 38 }),
      (deg) => {
        if (deg <= 180) {
          ctrlTheta.value = Math.min(82, Math.max(8, deg)).toFixed(1);
          draw();
        }
      }
    );

    ctrlTheta.addEventListener("input", draw);
    ctrlScale.addEventListener("input", draw);
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     3. Heights & Distances Simulator
     ------------------------------------------------------------------------ */
  function mountElevation(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Angle of Elevation & Tower Height Measurer</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Angle of Elevation θ <span id="lbl-elev">45°</span></label>
            <input type="range" id="ctrl-elev" min="15" max="75" value="45" step="1" />
          </div>
          <div class="control-group">
            <label>Distance from Base d <span id="lbl-dist">40 m</span></label>
            <input type="range" id="ctrl-dist" min="15" max="80" value="40" step="1" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const ctrlElev = container.querySelector("#ctrl-elev");
    const ctrlDist = container.querySelector("#ctrl-dist");
    const lblElev = container.querySelector("#lbl-elev");
    const lblDist = container.querySelector("#lbl-dist");
    const readout = container.querySelector("#viz-readout");

    function draw() {
      const deg = Number(ctrlElev.value);
      const dist = Number(ctrlDist.value);
      const rad = (deg * Math.PI) / 180;
      const height = dist * Math.tan(rad);
      const los = dist / Math.cos(rad);

      lblElev.textContent = deg + "°";
      lblDist.textContent = dist + " m";

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 290, 265);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const groundY = h - 36;
      const obsX = isNarrow ? 26 : 75;
      const maxTowerX = w - (isNarrow ? 84 : 95);
      const distScale = (maxTowerX - obsX) / 80;
      const towerX = Math.max(obsX + 55, Math.min(maxTowerX, obsX + dist * distScale));
      const scaleY = Math.min((h - 72) / Math.max(height, 40), 3.2);
      const topY = Math.max(28, groundY - height * scaleY);

      // Ground line
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(14, groundY);
      ctx.lineTo(w - 14, groundY);
      ctx.stroke();

      // Tower rectangle
      const tw = isNarrow ? 20 : 26;
      ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 2.5;
      ctx.fillRect(towerX, topY, tw, groundY - topY);
      ctx.strokeRect(towerX, topY, tw, groundY - topY);

      // Top horizontal line (for Angle of Depression)
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = colors.muted;
      ctx.beginPath();
      ctx.moveTo(obsX, topY);
      ctx.lineTo(towerX, topY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Line of sight
      ctx.strokeStyle = colors.amber;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.moveTo(obsX, groundY);
      ctx.lineTo(towerX, topY);
      ctx.stroke();

      // Angle arcs (Elevation = Depression)
      const visualAngle = Math.atan2(groundY - topY, towerX - obsX);
      const arcR = isNarrow ? 24 : 34;
      ctx.strokeStyle = colors.emerald;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(obsX, groundY, arcR, 0, -visualAngle, true);
      ctx.stroke();

      ctx.strokeStyle = colors.rose;
      ctx.beginPath();
      ctx.arc(towerX, topY, arcR, Math.PI, Math.PI - visualAngle, true);
      ctx.stroke();

      ctx.font = isNarrow ? "bold 11px Inter, sans-serif" : "bold 12px Inter, sans-serif";
      ctx.fillStyle = colors.emerald;
      ctx.fillText(`Elev ${deg}°`, obsX + arcR + 4, groundY - 8);
      ctx.fillStyle = colors.rose;
      ctx.fillText(`Depr ${deg}°`, Math.max(12, towerX - (isNarrow ? 82 : 120)), topY + 16);
      ctx.fillStyle = colors.text;
      ctx.fillText(`${height.toFixed(1)}m`, towerX + tw + 5, (groundY + topY) / 2 + 4);

      readout.innerHTML = `
        <div class="readout-chip">Formula: <strong>h = d · tan(${deg}°)</strong></div>
        <div class="readout-chip">Tower Height h: <strong>${height.toFixed(2)} m</strong></div>
        <div class="readout-chip">Line-of-Sight Distance: <strong>${los.toFixed(2)} m</strong></div>
        <div class="readout-chip">sin²θ + cos²θ: <strong>${(Math.sin(rad) ** 2 + Math.cos(rad) ** 2).toFixed(4)}</strong></div>
      `;
    }

    ctrlElev.addEventListener("input", draw);
    ctrlDist.addEventListener("input", draw);
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     4. Unit Circle + Synchronized Sine/Cosine Wave
     ------------------------------------------------------------------------ */
  function mountUnitCircle(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Unit Circle (cos θ, sin θ) + Live Wave Unroller</div>
          <button class="btn btn-secondary" id="btn-anim" style="padding:0.35rem 0.8rem;font-size:0.8rem;">▶ Auto-Spin</button>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Angle θ (Degrees) <span id="lbl-uc-deg">60°</span></label>
            <input type="range" id="ctrl-uc-deg" min="0" max="720" value="60" step="1" />
          </div>
          <div class="control-group">
            <label>Snap to Special Angles</label>
            <select id="ctrl-uc-snap">
              <option value="60">60° (π/3)</option>
              <option value="0">0° (0)</option>
              <option value="30">30° (π/6)</option>
              <option value="45">45° (π/4)</option>
              <option value="90">90° (π/2)</option>
              <option value="120">120° (2π/3 — Q-II)</option>
              <option value="180">180° (π)</option>
              <option value="225">225° (5π/4 — Q-III)</option>
              <option value="300">300° (5π/3 — Q-IV)</option>
            </select>
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const slider = container.querySelector("#ctrl-uc-deg");
    const snap = container.querySelector("#ctrl-uc-snap");
    const lblDeg = container.querySelector("#lbl-uc-deg");
    const btnAnim = container.querySelector("#btn-anim");
    const readout = container.querySelector("#viz-readout");
    let animId = null;

    function quadrantName(deg) {
      const m = ((deg % 360) + 360) % 360;
      if (m === 0 || m === 90 || m === 180 || m === 270) return "Quadrantal Axis";
      if (m < 90) return "Q-I (All +)";
      if (m < 180) return "Q-II (Sin +)";
      if (m < 270) return "Q-III (Tan +)";
      return "Q-IV (Cos +)";
    }

    function draw() {
      const deg = Number(slider.value);
      const rad = (deg * Math.PI) / 180;
      lblDeg.textContent = `${deg}° (${(deg / 180).toFixed(2)}π rad)`;

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 310, 395);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const R = isNarrow ? Math.min(76, w * 0.28) : Math.min(98, h * 0.34, w * 0.2);
      const cx = isNarrow ? w * 0.5 : R + 44;
      const cy = isNarrow ? 108 : h / 2;

      // Unit Circle Axes
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx - R - 22, cy);
      ctx.lineTo(isNarrow ? cx + R + 22 : w - 20, cy);
      ctx.moveTo(cx, cy - R - 20);
      ctx.lineTo(cx, cy + R + 20);
      ctx.stroke();

      // Unit Circle
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      const px = cx + R * Math.cos(rad);
      const py = cy - R * Math.sin(rad);

      // cos projection (x)
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px, cy);
      ctx.stroke();

      // sin projection (y)
      ctx.strokeStyle = colors.rose;
      ctx.beginPath();
      ctx.moveTo(px, cy);
      ctx.lineTo(px, py);
      ctx.stroke();

      // Radius vector
      ctx.strokeStyle = colors.amber;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px, py);
      ctx.stroke();

      // Wave plot (side-by-side on desktop, stacked full-width below on mobile!)
      const waveStart = isNarrow ? 22 : cx + R + 45;
      const waveEnd = w - 22;
      const waveW = Math.max(120, waveEnd - waveStart);
      const waveCy = isNarrow ? 304 : cy;
      const waveAmp = isNarrow ? 58 : R;

      if (isNarrow) {
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(waveStart, waveCy);
        ctx.lineTo(waveEnd, waveCy);
        ctx.stroke();
        ctx.fillStyle = colors.muted;
        ctx.font = "11px Inter, sans-serif";
        ctx.fillText("👆 Drag circle", 12, 20);
      }

      if (waveW > 80) {
        // y = sin(t) curve over [0, 4pi]
        ctx.strokeStyle = colors.rose;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (let i = 0; i <= 180; i++) {
          const t = (i / 180) * (4 * Math.PI);
          const wx = waveStart + (i / 180) * waveW;
          const wy = waveCy - waveAmp * Math.sin(t);
          if (i === 0) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        }
        ctx.stroke();

        // y = cos(t) dashed curve
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = colors.cyan;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        for (let i = 0; i <= 180; i++) {
          const t = (i / 180) * (4 * Math.PI);
          const wx = waveStart + (i / 180) * waveW;
          const wy = waveCy - waveAmp * Math.cos(t);
          if (i === 0) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        }
        ctx.stroke();

        // Connector from unit circle point to wave point
        const curWx = waveStart + (deg / 720) * waveW;
        const curWy = waveCy - waveAmp * Math.sin(rad);
        ctx.strokeStyle = colors.muted;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(curWx, curWy);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = colors.rose;
        ctx.beginPath();
        ctx.arc(curWx, curWy, 5, 0, Math.PI * 2);
        ctx.fill();

        const legY = isNarrow ? 228 : 24;
        ctx.font = "11.5px Inter, sans-serif";
        ctx.fillStyle = colors.rose;
        ctx.fillText("— sin θ", waveStart, legY);
        ctx.fillStyle = colors.cyan;
        ctx.fillText("--- cos θ", waveStart + 65, legY);
      }

      ctx.fillStyle = colors.amber;
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();

      const tanVal = Math.abs(Math.cos(rad)) < 1e-6 ? "Undefined (±∞)" : Math.tan(rad).toFixed(4);
      readout.innerHTML = `
        <div class="readout-chip">Region: <strong>${quadrantName(deg)}</strong></div>
        <div class="readout-chip" style="border-color:var(--accent-cyan)">cos θ (x): <strong>${Math.cos(rad).toFixed(4)}</strong></div>
        <div class="readout-chip" style="border-color:var(--accent-rose)">sin θ (y): <strong>${Math.sin(rad).toFixed(4)}</strong></div>
        <div class="readout-chip">tan θ (y/x): <strong>${tanVal}</strong></div>
      `;
    }

    enableRadialTouchDrag(
      canvas,
      (cw, ch) => {
        const narrow = cw < 480;
        const r = narrow ? Math.min(76, cw * 0.28) : Math.min(98, ch * 0.34, cw * 0.2);
        return { cx: narrow ? cw * 0.5 : r + 44, cy: narrow ? 108 : ch / 2, maxY: narrow ? 215 : ch };
      },
      (deg) => {
        const cur = Number(slider.value);
        const turnBase = cur >= 360 ? 360 : 0;
        slider.value = Math.min(720, Math.round(turnBase + deg));
        draw();
      }
    );

    btnAnim.addEventListener("click", () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
        btnAnim.textContent = "▶ Auto-Spin";
      } else {
        btnAnim.textContent = "⏸ Pause";
        const tick = () => {
          if (!document.body.contains(canvas)) {
            animId = null;
            return;
          }
          slider.value = (Number(slider.value) + 1.5) % 720;
          draw();
          animId = requestAnimationFrame(tick);
        };
        animId = requestAnimationFrame(tick);
      }
    });

    slider.addEventListener("input", draw);
    snap.addEventListener("change", () => {
      slider.value = snap.value;
      draw();
    });
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     5. Sinusoidal Wave & Derivative Explorer
     ------------------------------------------------------------------------ */
  function mountWaveLab(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Wave Synthesizer y = A·f(ωx + φ) & Calculus Slope dy/dx</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Function f</label>
            <select id="ctrl-fn">
              <option value="sin">sin(ωx + φ)</option>
              <option value="cos">cos(ωx + φ)</option>
              <option value="tan">tan(ωx + φ)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Amplitude A <span id="lbl-amp">1.5</span></label>
            <input type="range" id="ctrl-amp" min="0.5" max="2.5" value="1.5" step="0.1" />
          </div>
          <div class="control-group">
            <label>Angular Freq ω <span id="lbl-om">2.0</span></label>
            <input type="range" id="ctrl-om" min="0.5" max="5" value="2.0" step="0.5" />
          </div>
          <div class="control-group">
            <label>Phase φ (rad) <span id="lbl-phi">0.0</span></label>
            <input type="range" id="ctrl-phi" min="-3.14" max="3.14" value="0" step="0.15" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const fnSel = container.querySelector("#ctrl-fn");
    const ctrlAmp = container.querySelector("#ctrl-amp");
    const ctrlOm = container.querySelector("#ctrl-om");
    const ctrlPhi = container.querySelector("#ctrl-phi");
    const readout = container.querySelector("#viz-readout");

    function draw() {
      const fn = fnSel.value;
      const A = Number(ctrlAmp.value);
      const om = Number(ctrlOm.value);
      const phi = Number(ctrlPhi.value);
      container.querySelector("#lbl-amp").textContent = A.toFixed(1);
      container.querySelector("#lbl-om").textContent = om.toFixed(1);
      container.querySelector("#lbl-phi").textContent = phi.toFixed(2);

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 290, 260);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const midY = h / 2;
      const scaleY = (h * 0.36) / 2.5;
      const xMin = -Math.PI * 2;
      const xMax = Math.PI * 2;

      // Grid & axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.moveTo(w / 2, 0);
      ctx.lineTo(w / 2, h);
      ctx.stroke();

      function evalFn(x) {
        const u = om * x + phi;
        if (fn === "sin") return A * Math.sin(u);
        if (fn === "cos") return A * Math.cos(u);
        return A * Math.tan(u);
      }

      function evalDeriv(x) {
        const u = om * x + phi;
        if (fn === "sin") return A * om * Math.cos(u);
        if (fn === "cos") return -A * om * Math.sin(u);
        return (A * om) / (Math.cos(u) ** 2);
      }

      // Draw derivative (dashed)
      if (fn !== "tan") {
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = colors.emerald;
        ctx.lineWidth = 1.7;
        ctx.beginPath();
        for (let px = 0; px <= w; px++) {
          const x = xMin + (px / w) * (xMax - xMin);
          const y = midY - evalDeriv(x) * (scaleY * 0.45);
          if (px === 0) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw primary curve
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      let prevY = null;
      for (let px = 0; px <= w; px++) {
        const x = xMin + (px / w) * (xMax - xMin);
        const val = evalFn(x);
        const y = midY - val * scaleY;
        if (Math.abs(val) > 8 || (prevY !== null && Math.abs(y - prevY) > h)) {
          ctx.stroke();
          ctx.beginPath();
          prevY = null;
        } else {
          if (prevY === null) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
          prevY = y;
        }
      }
      ctx.stroke();

      ctx.font = isNarrow ? "11px Inter, sans-serif" : "12px Inter, sans-serif";
      ctx.fillStyle = colors.primary;
      ctx.fillText(`— y = ${A}·${fn}(${om}x + ${phi.toFixed(2)})`, 12, 20);
      if (fn !== "tan") {
        ctx.fillStyle = colors.emerald;
        ctx.fillText("--- dy/dx (scaled)", isNarrow ? 12 : 230, isNarrow ? 36 : 20);
      }

      const period = fn === "tan" ? Math.PI / om : (2 * Math.PI) / om;
      readout.innerHTML = `
        <div class="readout-chip">Amplitude: <strong>${fn === "tan" ? "∞ (Unbounded)" : A.toFixed(2)}</strong></div>
        <div class="readout-chip">Period T: <strong>${period.toFixed(3)} rad</strong></div>
        <div class="readout-chip">Phase Shift (-φ/ω): <strong>${(-phi / om).toFixed(3)} rad</strong></div>
        <div class="readout-chip">Slope dy/dx at x=0: <strong>${evalDeriv(0).toFixed(3)}</strong></div>
      `;
    }

    [fnSel, ctrlAmp, ctrlOm, ctrlPhi].forEach((el) => el.addEventListener("input", draw));
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     6. Taylor Polynomial Approximator
     ------------------------------------------------------------------------ */
  function mountTaylor(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Maclaurin Series Polynomials Wrapping Around sin(x) & cos(x)</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Target Function</label>
            <select id="ctrl-tfn">
              <option value="sin">sin(x)</option>
              <option value="cos">cos(x)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Number of Series Terms k <span id="lbl-terms">3 terms</span></label>
            <input type="range" id="ctrl-terms" min="1" max="9" value="3" step="1" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const fnSel = container.querySelector("#ctrl-tfn");
    const ctrlTerms = container.querySelector("#ctrl-terms");
    const lblTerms = container.querySelector("#lbl-terms");
    const readout = container.querySelector("#viz-readout");

    function fact(n) {
      let r = 1;
      for (let i = 2; i <= n; i++) r *= i;
      return r;
    }

    function taylorEval(fn, x, terms) {
      let sum = 0;
      for (let k = 0; k < terms; k++) {
        const exp = fn === "sin" ? 2 * k + 1 : 2 * k;
        const sign = k % 2 === 0 ? 1 : -1;
        sum += (sign * Math.pow(x, exp)) / fact(exp);
      }
      return sum;
    }

    function draw() {
      const fn = fnSel.value;
      const terms = Number(ctrlTerms.value);
      const degOrder = fn === "sin" ? 2 * terms - 1 : 2 * terms - 2;
      lblTerms.textContent = `${terms} term${terms > 1 ? "s" : ""} (degree ${degOrder})`;

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 290, 260);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const midY = h / 2;
      const scaleY = h * 0.27;
      const xMin = -3 * Math.PI;
      const xMax = 3 * Math.PI;

      // Axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.moveTo(w / 2, 0);
      ctx.lineTo(w / 2, h);
      ctx.stroke();

      // Exact sin/cos
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      for (let px = 0; px <= w; px++) {
        const x = xMin + (px / w) * (xMax - xMin);
        const val = fn === "sin" ? Math.sin(x) : Math.cos(x);
        const y = midY - val * scaleY;
        if (px === 0) ctx.moveTo(px, y);
        else ctx.lineTo(px, y);
      }
      ctx.stroke();

      // Taylor Polynomial
      ctx.strokeStyle = colors.rose;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      let started = false;
      for (let px = 0; px <= w; px++) {
        const x = xMin + (px / w) * (xMax - xMin);
        const val = taylorEval(fn, x, terms);
        const y = midY - val * scaleY;
        if (y < -40 || y > h + 40) {
          started = false;
        } else if (!started) {
          ctx.moveTo(px, y);
          started = true;
        } else {
          ctx.lineTo(px, y);
        }
      }
      ctx.stroke();

      ctx.font = w < 420 ? "11px Inter, sans-serif" : "12px Inter, sans-serif";
      ctx.fillStyle = colors.cyan;
      ctx.fillText(`— Exact ${fn}(x) on [-3π, 3π]`, 12, 20);
      ctx.fillStyle = colors.rose;
      ctx.fillText(`— Taylor Polynomial P_${degOrder}(x)`, w < 420 ? 12 : 210, w < 420 ? 36 : 20);

      const errPi2 = Math.abs((fn === "sin" ? Math.sin(Math.PI / 2) : Math.cos(Math.PI / 2)) - taylorEval(fn, Math.PI / 2, terms));
      readout.innerHTML = `
        <div class="readout-chip">Polynomial Degree: <strong>${degOrder}</strong></div>
        <div class="readout-chip">Error at x = 0.5 rad: <strong>${Math.abs((fn === "sin" ? Math.sin(0.5) : Math.cos(0.5)) - taylorEval(fn, 0.5, terms)).toExponential(2)}</strong></div>
        <div class="readout-chip">Error at x = π/2: <strong>${errPi2.toExponential(2)}</strong></div>
      `;
    }

    fnSel.addEventListener("input", draw);
    ctrlTerms.addEventListener("input", draw);
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     7. Complex Plane & n-th Roots of Unity
     ------------------------------------------------------------------------ */
  function mountRootsUnity(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Complex Plane e^(iθ) & n-th Roots of Unity Polygon</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Roots of Unity z^n = 1 <span id="lbl-n">n = 5</span></label>
            <input type="range" id="ctrl-n" min="2" max="12" value="5" step="1" />
          </div>
          <div class="control-group">
            <label>Phase Rotation α <span id="lbl-rot">0°</span></label>
            <input type="range" id="ctrl-rot" min="0" max="360" value="0" step="1" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const ctrlN = container.querySelector("#ctrl-n");
    const ctrlRot = container.querySelector("#ctrl-rot");
    const lblN = container.querySelector("#lbl-n");
    const lblRot = container.querySelector("#lbl-rot");
    const readout = container.querySelector("#viz-readout");

    function draw() {
      const n = Number(ctrlN.value);
      const rotDeg = Number(ctrlRot.value);
      const rotRad = (rotDeg * Math.PI) / 180;
      lblN.textContent = `n = ${n}`;
      lblRot.textContent = `${rotDeg}°`;

      const { ctx, w, h, colors } = prepareCanvas(canvas, 300);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.36;

      // Complex Re/Im axes
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(cx - R - 40, cy);
      ctx.lineTo(cx + R + 40, cy);
      ctx.moveTo(cx, cy - R - 25);
      ctx.lineTo(cx, cy + R + 25);
      ctx.stroke();

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      const pts = [];
      for (let k = 0; k < n; k++) {
        const ang = rotRad + (2 * Math.PI * k) / n;
        pts.push({
          ang,
          x: cx + R * Math.cos(ang),
          y: cy - R * Math.sin(ang)
        });
      }

      // Polygon connecting roots
      ctx.fillStyle = "rgba(168, 85, 247, 0.14)";
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      pts.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Vectors & vertices
      pts.forEach((p, idx) => {
        ctx.strokeStyle = "rgba(34, 211, 238, 0.45)";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        ctx.fillStyle = idx === 0 ? colors.amber : colors.cyan;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5.5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = colors.muted;
      ctx.font = "12px Inter, sans-serif";
      ctx.fillText("Re(z)", Math.min(w - 38, cx + R + 8), cy - 6);
      ctx.fillText("Im(z)", cx + 8, Math.max(16, cy - R - 8));

      const z1Ang = (2 * Math.PI) / n;
      readout.innerHTML = `
        <div class="readout-chip">Equation: <strong>z^${n} = e^(i·${rotDeg}°)</strong></div>
        <div class="readout-chip">Angular Spacing: <strong>360°/${n} = ${(360 / n).toFixed(1)}°</strong></div>
        <div class="readout-chip">Primitive ω₁: <strong>${Math.cos(z1Ang).toFixed(3)} + ${Math.sin(z1Ang).toFixed(3)}i</strong></div>
        <div class="readout-chip">Sum of all ${n} roots: <strong>0 + 0i</strong></div>
      `;
    }

    enableRadialTouchDrag(
      canvas,
      (cw, ch) => ({ cx: cw / 2, cy: ch / 2 }),
      (deg) => {
        ctrlRot.value = Math.round(deg);
        draw();
      }
    );

    ctrlN.addEventListener("input", draw);
    ctrlRot.addEventListener("input", draw);
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     8. Fourier Series Harmonic Synthesizer
     ------------------------------------------------------------------------ */
  function mountFourier(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Fourier Series Harmonic Builder</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Target Periodic Waveform</label>
            <select id="ctrl-wave">
              <option value="square">Square Wave (Odd Harmonics 1/n)</option>
              <option value="sawtooth">Sawtooth Wave (All Harmonics (-1)^(n+1)/n)</option>
              <option value="triangle">Triangle Wave (Fast 1/n² Convergence)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Harmonic Partial Sum N <span id="lbl-harm">N = 5</span></label>
            <input type="range" id="ctrl-harm" min="1" max="35" value="5" step="1" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const waveSel = container.querySelector("#ctrl-wave");
    const ctrlHarm = container.querySelector("#ctrl-harm");
    const lblHarm = container.querySelector("#lbl-harm");
    const readout = container.querySelector("#viz-readout");

    function exactWave(type, x) {
      // Normalize x into [-pi, pi)
      const u = ((((x + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI;
      if (type === "square") return u >= 0 ? 1 : -1;
      if (type === "sawtooth") return u / Math.PI;
      // triangle in [-1, 1]
      return 1 - (2 * Math.abs(u)) / Math.PI;
    }

    function fourierApprox(type, x, N) {
      let s = 0;
      if (type === "square") {
        for (let k = 0; k < N; k++) {
          const n = 2 * k + 1;
          s += (4 / Math.PI) * (Math.sin(n * x) / n);
        }
      } else if (type === "sawtooth") {
        for (let n = 1; n <= N; n++) {
          const sign = n % 2 === 1 ? 1 : -1;
          s += (2 / Math.PI) * sign * (Math.sin(n * x) / n);
        }
      } else {
        // cosine triangle wave: (8/pi^2) sum cos((2k+1)x)/(2k+1)^2
        for (let k = 0; k < N; k++) {
          const n = 2 * k + 1;
          s += (8 / (Math.PI * Math.PI)) * (Math.cos(n * x) / (n * n));
        }
      }
      return s;
    }

    function draw() {
      const type = waveSel.value;
      const N = Number(ctrlHarm.value);
      lblHarm.textContent = `${N} term${N > 1 ? "s" : ""}`;

      const { ctx, w, h, colors } = prepareCanvas(canvas, 295);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const midY = h / 2;
      const scaleY = h * 0.33;
      const xMin = -2 * Math.PI;
      const xMax = 2 * Math.PI;

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.stroke();

      // Target ideal wave
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = colors.muted;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      let prev = null;
      for (let px = 0; px <= w; px++) {
        const x = xMin + (px / w) * (xMax - xMin);
        const y = midY - exactWave(type, x) * scaleY;
        if (prev !== null && Math.abs(y - prev) > scaleY * 1.4) {
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(px, y);
        } else if (px === 0) {
          ctx.moveTo(px, y);
        } else {
          ctx.lineTo(px, y);
        }
        prev = y;
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Fourier sum
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      for (let px = 0; px <= w; px++) {
        const x = xMin + (px / w) * (xMax - xMin);
        const y = midY - fourierApprox(type, x, N) * scaleY;
        if (px === 0) ctx.moveTo(px, y);
        else ctx.lineTo(px, y);
      }
      ctx.stroke();

      ctx.font = w < 420 ? "11px Inter, sans-serif" : "12px Inter, sans-serif";
      ctx.fillStyle = colors.cyan;
      ctx.fillText(`— Sum of ${N} Pure Sinusoids`, 12, 20);
      ctx.fillStyle = colors.muted;
      ctx.fillText("--- Ideal Target Waveform", w < 420 ? 12 : 215, w < 420 ? 36 : 20);

      readout.innerHTML = `
        <div class="readout-chip">Waveform: <strong>${type.toUpperCase()}</strong></div>
        <div class="readout-chip">Active Sinusoids: <strong>${N}</strong></div>
        <div class="readout-chip">Gibbs Overshoot: <strong>${type === "triangle" ? "None (Continuous!)" : "~8.95% at jumps"}</strong></div>
      `;
    }

    waveSel.addEventListener("input", draw);
    ctrlHarm.addEventListener("input", draw);
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     9. Radian, DMS, Arc Length & Sector Area Visualizer (Chapter 3)
     ------------------------------------------------------------------------ */
  function mountRadianSector(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Degree ↔ Radian, DMS, Arc Length l = rθ & Sector Area (Ch 3)</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Angle θ (Degrees) <span id="lbl-rad-deg">57.3°</span></label>
            <input type="range" id="ctrl-rad-deg" min="5" max="340" value="57.3" step="0.1" />
          </div>
          <div class="control-group">
            <label>Circle Radius r <span id="lbl-rad-r">10 cm</span></label>
            <input type="range" id="ctrl-rad-r" min="3" max="20" value="10" step="0.5" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const ctrlDeg = container.querySelector("#ctrl-rad-deg");
    const ctrlR = container.querySelector("#ctrl-rad-r");
    const lblDeg = container.querySelector("#lbl-rad-deg");
    const lblR = container.querySelector("#lbl-rad-r");
    const readout = container.querySelector("#viz-readout");

    function toDMS(deg) {
      const d = Math.floor(deg);
      const minFloat = (deg - d) * 60;
      const m = Math.floor(minFloat);
      const s = Math.round((minFloat - m) * 60);
      return `${d}° ${m}' ${s}''`;
    }

    function draw() {
      const deg = Number(ctrlDeg.value);
      const r = Number(ctrlR.value);
      const rad = (deg * Math.PI) / 180;
      const arcL = r * rad;
      const area = 0.5 * r * r * rad;

      lblDeg.textContent = `${deg.toFixed(1)}°`;
      lblR.textContent = `${r} cm`;

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 290, 260);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const cx = isNarrow ? w * 0.43 : w * 0.48;
      const cy = h * 0.56;
      const Rpx = Math.min(isNarrow ? w * 0.3 : 115, h * 0.36, 38 + r * 3.8);

      // Full circle outline
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, Rpx, 0, Math.PI * 2);
      ctx.stroke();

      // Shaded sector
      ctx.fillStyle = "rgba(249, 115, 22, 0.22)";
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, Rpx, 0, -rad, true);
      ctx.closePath();
      ctx.fill();

      // Highlighted curved arc l = r*theta
      ctx.strokeStyle = colors.amber;
      ctx.lineWidth = 4.5;
      ctx.beginPath();
      ctx.arc(cx, cy, Rpx, 0, -rad, true);
      ctx.stroke();

      // Radii arms
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Rpx, cy);
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Rpx * Math.cos(rad), cy - Rpx * Math.sin(rad));
      ctx.stroke();

      ctx.font = isNarrow ? "bold 11px Inter, sans-serif" : "bold 12.5px Inter, sans-serif";
      ctx.fillStyle = colors.cyan;
      ctx.fillText(`r=${r}cm`, cx + Rpx * 0.28, cy + 16);
      ctx.fillStyle = colors.amber;
      ctx.fillText(`l=${arcL.toFixed(1)}cm`, cx + Rpx + 6, cy - 8);
      ctx.fillStyle = colors.text;
      ctx.fillText(
        isNarrow ? "At 57.3° (1 rad), Arc l = Radius r!" : "At 57.3° (1 rad), Arc Length l equals Radius r!",
        12,
        22
      );

      readout.innerHTML = `
        <div class="readout-chip">Radians: <strong>${rad.toFixed(4)} rad (${(deg / 180).toFixed(3)}π)</strong></div>
        <div class="readout-chip">DMS: <strong>${toDMS(deg)}</strong></div>
        <div class="readout-chip">Arc l = rθ: <strong>${arcL.toFixed(2)} cm</strong></div>
        <div class="readout-chip">Sector Area ½r²θ: <strong>${area.toFixed(2)} cm²</strong></div>
      `;
    }

    enableRadialTouchDrag(
      canvas,
      (cw, ch) => ({ cx: cw < 480 ? cw * 0.43 : cw * 0.48, cy: ch * 0.56 }),
      (deg) => {
        ctrlDeg.value = Math.min(340, Math.max(5, deg)).toFixed(1);
        draw();
      }
    );

    ctrlDeg.addEventListener("input", draw);
    ctrlR.addEventListener("input", draw);
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     10. Step-by-Step Unknown Side & Unknown Angle Finder Lab (Chapters 8 & 9)
     ------------------------------------------------------------------------ */
  function mountTriangleStepSolver(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Step-by-Step Unknown Side (Ch 8) & Unknown Angle (Ch 9) Solver</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Problem Mode</label>
            <select id="ctrl-step-mode">
              <option value="findSide">Ch 8: Know 1 Angle θ + Hypotenuse H → Find Sides O & A</option>
              <option value="findFromAdj">Ch 8: Know 1 Angle θ + Adjacent A → Find O & H</option>
              <option value="findAngle">Ch 9: Know Opposite O & Adjacent A → Find Angle θ (tan⁻¹)</option>
            </select>
          </div>
          <div class="control-group">
            <label><span id="lbl-p1">Angle θ</span> <span id="val-p1">35°</span></label>
            <input type="range" id="ctrl-p1" min="10" max="80" value="35" step="1" />
          </div>
          <div class="control-group">
            <label><span id="lbl-p2">Hypotenuse H</span> <span id="val-p2">20</span></label>
            <input type="range" id="ctrl-p2" min="5" max="30" value="20" step="1" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const modeSel = container.querySelector("#ctrl-step-mode");
    const ctrl1 = container.querySelector("#ctrl-p1");
    const ctrl2 = container.querySelector("#ctrl-p2");
    const readout = container.querySelector("#viz-readout");

    function draw() {
      const mode = modeSel.value;
      let deg, O, A, H, stepSummary;

      if (mode === "findSide") {
        container.querySelector("#lbl-p1").textContent = "Known Angle θ";
        container.querySelector("#lbl-p2").textContent = "Known Hypotenuse H";
        ctrl1.min = 10; ctrl1.max = 80;
        deg = Number(ctrl1.value);
        H = Number(ctrl2.value);
        const rad = (deg * Math.PI) / 180;
        O = H * Math.sin(rad);
        A = H * Math.cos(rad);
        container.querySelector("#val-p1").textContent = `${deg}°`;
        container.querySelector("#val-p2").textContent = `${H}`;
        stepSummary = `
          <div class="readout-chip">Step 1 (SOH): <strong>O = ${H}·sin(${deg}°) = ${O.toFixed(2)}</strong></div>
          <div class="readout-chip">Step 2 (CAH): <strong>A = ${H}·cos(${deg}°) = ${A.toFixed(2)}</strong></div>
          <div class="readout-chip">Other Angle: <strong>90° - ${deg}° = ${(90 - deg).toFixed(1)}°</strong></div>
        `;
      } else if (mode === "findFromAdj") {
        container.querySelector("#lbl-p1").textContent = "Known Angle θ";
        container.querySelector("#lbl-p2").textContent = "Known Adjacent A";
        ctrl1.min = 10; ctrl1.max = 75;
        deg = Math.min(75, Number(ctrl1.value));
        A = Number(ctrl2.value);
        const rad = (deg * Math.PI) / 180;
        O = A * Math.tan(rad);
        H = A / Math.cos(rad);
        container.querySelector("#val-p1").textContent = `${deg}°`;
        container.querySelector("#val-p2").textContent = `${A}`;
        stepSummary = `
          <div class="readout-chip">Step 1 (TOA): <strong>O = ${A}·tan(${deg}°) = ${O.toFixed(2)}</strong></div>
          <div class="readout-chip">Step 2 (Denominator Swap): <strong>H = ${A}/cos(${deg}°) = ${H.toFixed(2)}</strong></div>
        `;
      } else {
        container.querySelector("#lbl-p1").textContent = "Known Opposite O";
        container.querySelector("#lbl-p2").textContent = "Known Adjacent A";
        ctrl1.min = 3; ctrl1.max = 30;
        O = Number(ctrl1.value);
        A = Number(ctrl2.value);
        H = Math.sqrt(O * O + A * A);
        deg = (Math.atan2(O, A) * 180) / Math.PI;
        container.querySelector("#val-p1").textContent = `${O}`;
        container.querySelector("#val-p2").textContent = `${A}`;
        const dWhole = Math.floor(deg);
        const mWhole = Math.round((deg - dWhole) * 60);
        stepSummary = `
          <div class="readout-chip">Step 1 (Inverse TOA): <strong>θ = tan⁻¹(${O}/${A}) = ${deg.toFixed(2)}° (${dWhole}° ${mWhole}')</strong></div>
          <div class="readout-chip">Step 2 (Complement): <strong>φ = 90° - θ = ${(90 - deg).toFixed(2)}°</strong></div>
          <div class="readout-chip">Hypotenuse H: <strong>${H.toFixed(2)}</strong></div>
        `;
      }

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 275, 255);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const x0 = isNarrow ? 30 : 75;
      const rightPad = isNarrow ? 78 : 105;
      const scale = Math.min((w - x0 - rightPad) / Math.max(A, 1), (h - 70) / Math.max(O, 1));
      const y0 = h - 36;
      const x1 = x0 + A * scale;
      const y1 = y0 - O * scale;

      ctx.fillStyle = "rgba(249, 115, 22, 0.14)";
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y0);
      ctx.lineTo(x1, y1);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = colors.muted;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x1 - 12, y0 - 12, 12, 12);

      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y0); ctx.stroke();

      ctx.strokeStyle = colors.rose;
      ctx.beginPath(); ctx.moveTo(x1, y0); ctx.lineTo(x1, y1); ctx.stroke();

      ctx.strokeStyle = colors.amber;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();

      ctx.font = isNarrow ? "bold 11px Inter, sans-serif" : "bold 12.5px Inter, sans-serif";
      ctx.fillStyle = colors.cyan;
      ctx.textAlign = "center";
      ctx.fillText(`A = ${A.toFixed(2)}`, (x0 + x1) / 2, y0 + 20);
      ctx.fillStyle = colors.rose;
      ctx.textAlign = "left";
      ctx.fillText(`O = ${O.toFixed(2)}`, x1 + 6, (y0 + y1) / 2 + 4);
      ctx.fillStyle = colors.amber;
      ctx.fillText(`H = ${H.toFixed(2)}`, x0 + 6, Math.max(24, (y0 + y1) / 2 - 10));
      ctx.fillStyle = colors.text;
      ctx.fillText(`θ = ${deg.toFixed(1)}°`, x0 + 20, y0 - 8);

      readout.innerHTML = stepSummary;
    }

    modeSel.addEventListener("change", () => {
      if (modeSel.value === "findAngle") {
        ctrl1.value = 12;
        ctrl2.value = 16;
      } else {
        ctrl1.value = 35;
        ctrl2.value = 20;
      }
      draw();
    });
    ctrl1.addEventListener("input", draw);
    ctrl2.addEventListener("input", draw);
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     11. 4-Quadrant Unknown Ratios, Identities & Power-Simplification Lab
     ------------------------------------------------------------------------ */
  function mountIdentityExplorer(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: 4-Quadrant Unknown Ratios, Identities & Simplification Verifier</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Quadrant (ASTC)</label>
            <select id="ctrl-id-quad">
              <option value="1">Quadrant I (All +)</option>
              <option value="2">Quadrant II (sin, cosec +)</option>
              <option value="3">Quadrant III (tan, cot +)</option>
              <option value="4">Quadrant IV (cos, sec +)</option>
            </select>
          </div>
          <div class="control-group">
            <label>|Opposite| Leg |y| <span id="lbl-id-o">5</span></label>
            <input type="range" id="ctrl-id-o" min="1" max="15" value="5" step="1" />
          </div>
          <div class="control-group">
            <label>|Adjacent| Leg |x| <span id="lbl-id-a">12</span></label>
            <input type="range" id="ctrl-id-a" min="1" max="15" value="12" step="1" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const quadSel = container.querySelector("#ctrl-id-quad");
    const ctrlO = container.querySelector("#ctrl-id-o");
    const ctrlA = container.querySelector("#ctrl-id-a");
    const readout = container.querySelector("#viz-readout");

    function draw() {
      const q = Number(quadSel.value);
      const absO = Number(ctrlO.value);
      const absA = Number(ctrlA.value);
      container.querySelector("#lbl-id-o").textContent = absO;
      container.querySelector("#lbl-id-a").textContent = absA;

      const xSign = q === 1 || q === 4 ? 1 : -1;
      const ySign = q === 1 || q === 2 ? 1 : -1;
      const xVal = xSign * absA;
      const yVal = ySign * absO;
      const H = Math.sqrt(absA * absA + absO * absO);

      const sinV = yVal / H;
      const cosV = xVal / H;
      const tanV = yVal / xVal;
      const secV = H / xVal;
      const cscV = H / yVal;
      const cotV = xVal / yVal;

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 285, 390);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const cx = isNarrow ? w * 0.5 : w * 0.34;
      const cy = isNarrow ? 108 : h * 0.52;
      const maxR = isNarrow ? Math.min(82, w * 0.32) : Math.min(cx - 42, h * 0.41);
      const scale = maxR / H;

      // Axes
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - maxR - 18, cy); ctx.lineTo(cx + maxR + 18, cy);
      ctx.moveTo(cx, cy - maxR - 16); ctx.lineTo(cx, cy + maxR + 16);
      ctx.stroke();

      // Circle of radius H
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = colors.grid;
      ctx.beginPath();
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      const px = cx + xVal * scale;
      const py = cy - yVal * scale;

      // Reference triangle
      ctx.fillStyle = "rgba(249, 115, 22, 0.18)";
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(px, cy);
      ctx.lineTo(px, py);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.stroke();

      ctx.strokeStyle = colors.rose;
      ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke();

      ctx.strokeStyle = colors.amber;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();

      ctx.fillStyle = colors.amber;
      ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fill();

      // Live 6-ratio & identity verification panel (right side on desktop, 2-col stacked below on mobile!)
      const Hstr = Number.isInteger(H) ? `${H}` : `√${absA * absA + absO * absO}`;
      if (isNarrow) {
        const yTop = 224;
        const col2 = Math.floor(w * 0.52);
        ctx.font = "bold 11.5px Inter, sans-serif";
        ctx.fillStyle = colors.text;
        ctx.fillText(`All 6 Exact Signed Ratios (Q-${q}):`, 14, yTop);
        ctx.font = "11px 'JetBrains Mono', monospace";
        ctx.fillStyle = colors.rose;
        ctx.fillText(`sin = ${yVal}/${Hstr}`, 14, yTop + 22);
        ctx.fillText(`csc = ${Hstr}/${yVal}`, col2, yTop + 22);
        ctx.fillStyle = colors.cyan;
        ctx.fillText(`cos = ${xVal}/${Hstr}`, 14, yTop + 42);
        ctx.fillText(`sec = ${Hstr}/${xVal}`, col2, yTop + 42);
        ctx.fillStyle = colors.amber;
        ctx.fillText(`tan = ${yVal}/${xVal}`, 14, yTop + 62);
        ctx.fillText(`cot = ${xVal}/${yVal}`, col2, yTop + 62);
        ctx.fillStyle = colors.emerald;
        ctx.fillText(`✓ sin²θ + cos²θ = ${(sinV ** 2 + cosV ** 2).toFixed(4)}`, 14, yTop + 88);
        ctx.fillText(`✓ sec²θ − tan²θ = ${(secV ** 2 - tanV ** 2).toFixed(4)}`, 14, yTop + 108);
        ctx.fillText(`✓ 3(s⁴+c⁴)−2(s⁶+c⁶) = ${(3 * (sinV ** 4 + cosV ** 4) - 2 * (sinV ** 6 + cosV ** 6)).toFixed(4)}`, 14, yTop + 128);
      } else {
        const panelX = cx * 2 + 6;
        if (w - panelX > 150) {
          ctx.font = "bold 12px Inter, sans-serif";
          ctx.fillStyle = colors.text;
          ctx.fillText(`All 6 Exact Signed Ratios (Q-${q}):`, panelX, 36);

          ctx.font = "12px 'JetBrains Mono', monospace";
          ctx.fillStyle = colors.rose;
          ctx.fillText(`sin θ = ${yVal}/${Hstr} (${sinV.toFixed(3)})`, panelX, 62);
          ctx.fillText(`csc θ = ${Hstr}/${yVal} (${cscV.toFixed(3)})`, panelX, 82);

          ctx.fillStyle = colors.cyan;
          ctx.fillText(`cos θ = ${xVal}/${Hstr} (${cosV.toFixed(3)})`, panelX, 108);
          ctx.fillText(`sec θ = ${Hstr}/${xVal} (${secV.toFixed(3)})`, panelX, 128);

          ctx.fillStyle = colors.amber;
          ctx.fillText(`tan θ = ${yVal}/${xVal} (${tanV.toFixed(3)})`, panelX, 154);
          ctx.fillText(`cot θ = ${xVal}/${yVal} (${cotV.toFixed(3)})`, panelX, 174);

          ctx.fillStyle = colors.emerald;
          ctx.fillText(`✓ sin²θ + cos²θ = ${(sinV ** 2 + cosV ** 2).toFixed(4)}`, panelX, 206);
          ctx.fillText(`✓ sec²θ - tan²θ = ${(secV ** 2 - tanV ** 2).toFixed(4)}`, panelX, 226);
          ctx.fillText(`✓ 3(s⁴+c⁴)-2(s⁶+c⁶) = ${(3 * (sinV ** 4 + cosV ** 4) - 2 * (sinV ** 6 + cosV ** 6)).toFixed(4)}`, panelX, 246);
        }
      }

      readout.innerHTML = `
        <div class="readout-chip">Point P(x,y): <strong>(${xVal}, ${yVal})</strong>, r = <strong>${H.toFixed(2)}</strong></div>
        <div class="readout-chip">(sec θ + tan θ)(sec θ - tan θ) = <strong>${((secV + tanV) * (secV - tanV)).toFixed(4)}</strong></div>
        <div class="readout-chip">sin⁴θ + cos⁴θ = 1 - 2s²c² = <strong>${(1 - 2 * sinV ** 2 * cosV ** 2).toFixed(4)}</strong></div>
      `;
    }

    [quadSel, ctrlO, ctrlA].forEach((el) => el.addEventListener("input", draw));
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     12. Compound, Double, Triple, Half & Sum-to-Product Explorer (Ch 22–27)
     ------------------------------------------------------------------------ */
  function mountCompoundWaveLab(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Compound, Double, Triple, Half &amp; Sum-to-Product Explorer (Ch 22–27)</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Identity Mode</label>
            <select id="ctrl-comp-mode">
              <option value="compound">Compound Angles (A, B, A+B, A−B)</option>
              <option value="multiple">Double, Triple &amp; Half Angles (A/2, A, 2A, 3A)</option>
              <option value="sumProduct">Sum-to-Product Wave Beats (sin C + sin D)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Angle A (or Freq C) <span id="lbl-ang-a">45°</span></label>
            <input type="range" id="ctrl-ang-a" min="5" max="175" value="45" step="1" />
          </div>
          <div class="control-group">
            <label>Angle B (or Freq D) <span id="lbl-ang-b">30°</span></label>
            <input type="range" id="ctrl-ang-b" min="5" max="175" value="30" step="1" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const modeSel = container.querySelector("#ctrl-comp-mode");
    const ctrlA = container.querySelector("#ctrl-ang-a");
    const ctrlB = container.querySelector("#ctrl-ang-b");
    const lblA = container.querySelector("#lbl-ang-a");
    const lblB = container.querySelector("#lbl-ang-b");
    const readout = container.querySelector("#viz-readout");

    function draw() {
      const mode = modeSel.value;
      const degA = Number(ctrlA.value);
      const degB = Number(ctrlB.value);
      const radA = (degA * Math.PI) / 180;
      const radB = (degB * Math.PI) / 180;

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(
        canvas,
        310,
        mode === "sumProduct" ? 270 : 410
      );
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      if (mode === "sumProduct") {
        const fC = Math.max(1, Math.round(degA / 15));
        const fD = Math.max(1, Math.round(degB / 15));
        lblA.textContent = `C = ${fC}x`;
        lblB.textContent = `D = ${fD}x`;

        const padX = isNarrow ? 20 : 48;
        const midY = h / 2;
        const scaleY = (h - 70) / 4.4;
        const spanX = w - 2 * padX;

        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(padX, midY);
        ctx.lineTo(w - padX, midY);
        ctx.moveTo(padX, 24);
        ctx.lineTo(padX, h - 24);
        ctx.stroke();

        // Envelope +- 2 cos((fC-fD)x/2)
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = colors.amber;
        ctx.lineWidth = 1.6;
        [1, -1].forEach((sgn) => {
          ctx.beginPath();
          for (let i = 0; i <= 260; i++) {
            const xVal = (i / 260) * 2 * Math.PI;
            const env = sgn * 2 * Math.cos(((fC - fD) * xVal) / 2);
            const px = padX + (i / 260) * spanX;
            const py = midY - env * scaleY;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
        });
        ctx.restore();

        // Sum wave sin(fC x) + sin(fD x)
        ctx.strokeStyle = colors.cyan;
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let i = 0; i <= 320; i++) {
          const xVal = (i / 320) * 2 * Math.PI;
          const yVal = Math.sin(fC * xVal) + Math.sin(fD * xVal);
          const px = padX + (i / 320) * spanX;
          const py = midY - yVal * scaleY;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        ctx.fillStyle = colors.text;
        ctx.font = isNarrow ? "bold 11px Inter, sans-serif" : "bold 12px Inter, sans-serif";
        ctx.fillText(`sin(${fC}x)+sin(${fD}x) = 2sin(${((fC + fD) / 2).toFixed(1)}x)cos(${((fC - fD) / 2).toFixed(1)}x)`, padX + 4, 20);

        const sampleX = 0.7;
        const lhs = Math.sin(fC * sampleX) + Math.sin(fD * sampleX);
        const rhs = 2 * Math.sin(((fC + fD) * sampleX) / 2) * Math.cos(((fC - fD) * sampleX) / 2);
        readout.innerHTML = `
          <div class="readout-chip">Carrier Half-Sum: <strong>(C+D)/2 = ${((fC + fD) / 2).toFixed(1)}x</strong></div>
          <div class="readout-chip">Beat Envelope: <strong>±2 cos(${((fC - fD) / 2).toFixed(1)}x)</strong></div>
          <div class="readout-chip">Verify @ x=0.7: <strong>LHS = ${lhs.toFixed(4)} = RHS = ${rhs.toFixed(4)}</strong></div>
        `;
        return;
      }

      lblA.textContent = `${degA}°`;
      lblB.textContent = `${degB}°`;

      const cx = isNarrow ? w * 0.5 : Math.min(w * 0.34, 195);
      const cy = isNarrow ? 110 : h / 2;
      const R = isNarrow ? Math.min(80, w * 0.31) : Math.min(cx - 34, h / 2 - 34);

      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx - R - 20, cy);
      ctx.lineTo(cx + R + 20, cy);
      ctx.moveTo(cx, cy - R - 20);
      ctx.lineTo(cx, cy + R + 20);
      ctx.stroke();

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      const drawRay = (ang, col, label) => {
        const px = cx + R * Math.cos(ang);
        const py = cy - R * Math.sin(ang);
        ctx.strokeStyle = col;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.stroke();
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = "bold 11.5px Inter, sans-serif";
        ctx.fillText(label, cx + (R + 15) * Math.cos(ang) - 10, cy - (R + 15) * Math.sin(ang) + 4);
      };

      const panelX = isNarrow ? 16 : cx + R + 42;
      const pY0 = isNarrow ? 236 : 52;
      ctx.font = isNarrow ? "11.5px JetBrains Mono, monospace" : "12.5px JetBrains Mono, monospace";

      if (mode === "compound") {
        drawRay(radA, colors.cyan, "A");
        drawRay(radB, colors.amber, "B");
        drawRay(radA + radB, colors.emerald, "A+B");
        drawRay(radA - radB, colors.rose, "A−B");

        const sAB = Math.sin(radA) * Math.cos(radB) + Math.cos(radA) * Math.sin(radB);
        const cAmB = Math.cos(radA) * Math.cos(radB) + Math.sin(radA) * Math.sin(radB);

        if (isNarrow || panelX < w - 160) {
          ctx.fillStyle = colors.text;
          ctx.fillText(`A = ${degA}°,  B = ${degB}°`, panelX, pY0);
          ctx.fillStyle = colors.emerald;
          ctx.fillText(`A + B = ${degA + degB}° | sin(A+B) = ${sAB.toFixed(4)} ✓`, panelX, pY0 + 26);
          ctx.fillText(`sinA·cosB + cosA·sinB = ${sAB.toFixed(4)}`, panelX, pY0 + 46);
          ctx.fillStyle = colors.rose;
          ctx.fillText(`A − B = ${degA - degB}° | cos(A−B) = ${cAmB.toFixed(4)} ✓`, panelX, pY0 + 74);
          ctx.fillText(`cosA·cosB + sinA·sinB = ${cAmB.toFixed(4)}`, panelX, pY0 + 94);
          ctx.fillStyle = colors.amber;
          ctx.fillText(`sin(A+B)sin(A−B) = sin²A−sin²B = ${(Math.sin(radA) ** 2 - Math.sin(radB) ** 2).toFixed(4)} ✓`, panelX, pY0 + 124);
        }

        readout.innerHTML = `
          <div class="readout-chip">sin(${degA}°+${degB}°): <strong>${sAB.toFixed(4)}</strong></div>
          <div class="readout-chip">cos(${degA}°−${degB}°): <strong>${cAmB.toFixed(4)}</strong></div>
          <div class="readout-chip">2 sin A cos B = sin(A+B)+sin(A−B) = <strong>${(Math.sin(radA + radB) + Math.sin(radA - radB)).toFixed(4)}</strong></div>
        `;
      } else {
        drawRay(radA / 2, colors.amber, "A/2");
        drawRay(radA, colors.cyan, "A");
        drawRay(2 * radA, colors.emerald, "2A");
        drawRay(3 * radA, colors.rose, "3A");

        const sA = Math.sin(radA);
        const cA = Math.cos(radA);
        const c2A = 2 * cA * cA - 1;
        const s3A = 3 * sA - 4 * sA * sA * sA;
        const tanHalf = (1 - cA) / sA;

        if (isNarrow || panelX < w - 160) {
          ctx.fillStyle = colors.cyan;
          ctx.fillText(`Base Angle A = ${degA}°`, panelX, pY0);
          ctx.fillStyle = colors.emerald;
          ctx.fillText(`2A = ${2 * degA}° | cos 2A = ${c2A.toFixed(4)} ✓`, panelX, pY0 + 26);
          ctx.fillText(`sin 2A = 2sinAcosA = ${(2 * sA * cA).toFixed(4)} ✓`, panelX, pY0 + 46);
          ctx.fillStyle = colors.rose;
          ctx.fillText(`3A = ${3 * degA}° | sin 3A = ${s3A.toFixed(4)} ✓`, panelX, pY0 + 74);
          ctx.fillText(`cos 3A = 4c³−3c = ${(4 * cA ** 3 - 3 * cA).toFixed(4)} ✓`, panelX, pY0 + 94);
          ctx.fillStyle = colors.amber;
          ctx.fillText(`tan(A/2) = (1−cosA)/sinA = ${tanHalf.toFixed(4)} ✓`, panelX, pY0 + 124);
        }

        readout.innerHTML = `
          <div class="readout-chip">sin 2A: <strong>${(2 * sA * cA).toFixed(4)}</strong> | cos 2A: <strong>${c2A.toFixed(4)}</strong></div>
          <div class="readout-chip">sin 3A: <strong>${s3A.toFixed(4)}</strong> | cos 3A: <strong>${(4 * cA ** 3 - 3 * cA).toFixed(4)}</strong></div>
          <div class="readout-chip">tan(A/2): <strong>${tanHalf.toFixed(4)}</strong></div>
        `;
      }
    }

    enableRadialTouchDrag(
      canvas,
      (cw, ch) => {
        if (modeSel.value === "sumProduct") return null;
        const narrow = cw < 480;
        return { cx: narrow ? cw * 0.5 : Math.min(cw * 0.34, 195), cy: narrow ? 110 : ch / 2, maxY: narrow ? 215 : ch };
      },
      (deg) => {
        if (deg <= 180) {
          ctrlA.value = Math.min(175, Math.max(5, Math.round(deg)));
          draw();
        }
      }
    );

    [modeSel, ctrlA, ctrlB].forEach((el) => el.addEventListener("input", draw));
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     13. Trig Equations, General Solutions & Inverse Principal Branches (Ch 28–29, 31)
     ------------------------------------------------------------------------ */
  function mountTrigEqInverseLab(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Trig Equations, General Solutions &amp; Inverse Principal Branches (Ch 28–29, 31)</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Equation / Inverse Mode</label>
            <select id="ctrl-eq-mode">
              <option value="sin">Solve sin x = c  &amp;  α = sin⁻¹(c) ∈ [−π/2, π/2]</option>
              <option value="cos">Solve cos x = c  &amp;  α = cos⁻¹(c) ∈ [0, π]</option>
              <option value="tan">Solve tan x = c  &amp;  α = tan⁻¹(c) ∈ (−π/2, π/2)</option>
              <option value="sawtooth">Composition Folding: y = sin⁻¹(sin x) &amp; cos⁻¹(cos x)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Target Constant c (or Input x) <span id="lbl-eq-c">0.50</span></label>
            <input type="range" id="ctrl-eq-c" min="-100" max="100" value="50" step="1" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const modeSel = container.querySelector("#ctrl-eq-mode");
    const ctrlC = container.querySelector("#ctrl-eq-c");
    const lblC = container.querySelector("#lbl-eq-c");
    const readout = container.querySelector("#viz-readout");

    function draw() {
      const mode = modeSel.value;
      const raw = Number(ctrlC.value) / 100; // in [-1, 1]
      const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 300, 270);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      const padX = isNarrow ? 22 : 48;
      const midY = h / 2;
      const spanX = w - 2 * padX;
      const xMin = -2 * Math.PI;
      const xMax = 2 * Math.PI;
      const mapX = (x) => padX + ((x - xMin) / (xMax - xMin)) * spanX;

      // Grid ticks at multiples of pi/2
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      for (let k = -4; k <= 4; k++) {
        const xv = (k * Math.PI) / 2;
        const px = mapX(xv);
        ctx.beginPath();
        ctx.moveTo(px, 20);
        ctx.lineTo(px, h - 24);
        ctx.stroke();
      }

      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(padX, midY);
      ctx.lineTo(w - padX, midY);
      ctx.moveTo(mapX(0), 18);
      ctx.lineTo(mapX(0), h - 22);
      ctx.stroke();

      ctx.fillStyle = colors.muted;
      ctx.font = "11px Inter, sans-serif";
      [
        [-2 * Math.PI, "−2π"],
        [-Math.PI, "−π"],
        [-Math.PI / 2, "−π/2"],
        [0, "0"],
        [Math.PI / 2, "π/2"],
        [Math.PI, "π"],
        [2 * Math.PI, "2π"]
      ].forEach(([xv, txt]) => {
        ctx.fillText(txt, mapX(xv) - 10, h - 8);
      });

      if (mode === "sawtooth") {
        const xCursor = raw * 2 * Math.PI;
        lblC.textContent = `x = ${xCursor.toFixed(2)} rad (${((xCursor * 180) / Math.PI).toFixed(0)}°)`;
        const scaleY = (h - 68) / (2 * Math.PI);
        const mapY = (y) => midY - y * scaleY;

        // Draw y = sin^-1(sin x) in cyan
        ctx.strokeStyle = colors.cyan;
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let i = 0; i <= 360; i++) {
          const xv = xMin + (i / 360) * (xMax - xMin);
          const yv = Math.asin(Math.sin(xv));
          if (i === 0) ctx.moveTo(mapX(xv), mapY(yv));
          else ctx.lineTo(mapX(xv), mapY(yv));
        }
        ctx.stroke();

        // Draw y = cos^-1(cos x) in amber
        ctx.strokeStyle = colors.amber;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (let i = 0; i <= 360; i++) {
          const xv = xMin + (i / 360) * (xMax - xMin);
          const yv = Math.acos(Math.cos(xv));
          if (i === 0) ctx.moveTo(mapX(xv), mapY(yv));
          else ctx.lineTo(mapX(xv), mapY(yv));
        }
        ctx.stroke();

        const asinVal = Math.asin(Math.sin(xCursor));
        const acosVal = Math.acos(Math.cos(xCursor));
        ctx.fillStyle = colors.rose;
        ctx.beginPath();
        ctx.arc(mapX(xCursor), mapY(asinVal), 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mapX(xCursor), mapY(acosVal), 5.5, 0, Math.PI * 2);
        ctx.fill();

        readout.innerHTML = `
          <div class="readout-chip">Input x: <strong>${xCursor.toFixed(3)} rad</strong></div>
          <div class="readout-chip">sin⁻¹(sin x) [Cyan]: <strong>${asinVal.toFixed(3)} rad (${((asinVal * 180) / Math.PI).toFixed(1)}°)</strong></div>
          <div class="readout-chip">cos⁻¹(cos x) [Gold]: <strong>${acosVal.toFixed(3)} rad (${((acosVal * 180) / Math.PI).toFixed(1)}°)</strong></div>
        `;
        return;
      }

      const cVal = mode === "tan" ? raw * 2.5 : raw;
      lblC.textContent = `c = ${cVal.toFixed(2)}`;
      const yMax = mode === "tan" ? 3.2 : 1.35;
      const mapY = (y) => midY - (y / yMax) * (h / 2 - 28);

      // Highlight Principal Value Branch strip!
      const [pStart, pEnd] = mode === "cos" ? [0, Math.PI] : [-Math.PI / 2, Math.PI / 2];
      ctx.fillStyle = "rgba(251, 191, 36, 0.12)";
      ctx.fillRect(mapX(pStart), 20, mapX(pEnd) - mapX(pStart), h - 44);
      ctx.fillStyle = colors.amber;
      ctx.font = "bold 11px Inter, sans-serif";
      ctx.fillText("Principal Inverse Branch", mapX(pStart) + 4, 34);

      // Plot function curve across [-2pi, 2pi]
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      let penDown = false;
      for (let i = 0; i <= 480; i++) {
        const xv = xMin + (i / 480) * (xMax - xMin);
        const yv = mode === "sin" ? Math.sin(xv) : mode === "cos" ? Math.cos(xv) : Math.tan(xv);
        if (Math.abs(yv) > yMax + 0.8) {
          penDown = false;
          continue;
        }
        if (!penDown) {
          ctx.moveTo(mapX(xv), mapY(yv));
          penDown = true;
        } else {
          ctx.lineTo(mapX(xv), mapY(yv));
        }
      }
      ctx.stroke();

      // Horizontal target line y = c
      ctx.save();
      ctx.setLineDash([6, 4]);
      ctx.strokeStyle = colors.rose;
      ctx.lineWidth = 1.9;
      ctx.beginPath();
      ctx.moveTo(padX, mapY(cVal));
      ctx.lineTo(w - padX, mapY(cVal));
      ctx.stroke();
      ctx.restore();

      // Compute exact principal inverse alpha & all roots in [-2pi, 2pi]
      const alpha = mode === "sin" ? Math.asin(cVal) : mode === "cos" ? Math.acos(cVal) : Math.atan(cVal);
      const roots = [];
      for (let n = -4; n <= 4; n++) {
        if (mode === "sin") {
          const r = n * Math.PI + (n % 2 === 0 ? 1 : -1) * alpha;
          if (r >= xMin - 1e-6 && r <= xMax + 1e-6) roots.push(r);
        } else if (mode === "cos") {
          [2 * n * Math.PI + alpha, 2 * n * Math.PI - alpha].forEach((r) => {
            if (r >= xMin - 1e-6 && r <= xMax + 1e-6 && !roots.some((u) => Math.abs(u - r) < 1e-4)) roots.push(r);
          });
        } else {
          const r = n * Math.PI + alpha;
          if (r >= xMin - 1e-6 && r <= xMax + 1e-6) roots.push(r);
        }
      }
      roots.sort((a, b) => a - b);

      roots.forEach((r) => {
        const isPrincipal02Pi = r >= -1e-6 && r < 2 * Math.PI - 1e-6;
        ctx.fillStyle = isPrincipal02Pi ? colors.emerald : colors.rose;
        ctx.beginPath();
        ctx.arc(mapX(r), mapY(cVal), isPrincipal02Pi ? 6 : 4.5, 0, Math.PI * 2);
        ctx.fill();
      });

      const prinRoots = roots
        .filter((r) => r >= -1e-6 && r < 2 * Math.PI - 1e-6)
        .map((r) => `${((r * 180) / Math.PI).toFixed(1)}°`)
        .join(", ");

      const genFormula =
        mode === "sin"
          ? `x = nπ + (−1)ⁿ(${alpha.toFixed(3)})`
          : mode === "cos"
          ? `x = 2nπ ± ${alpha.toFixed(3)}`
          : `x = nπ + (${alpha.toFixed(3)})`;

      readout.innerHTML = `
        <div class="readout-chip">Principal Inverse α: <strong>${alpha.toFixed(3)} rad (${((alpha * 180) / Math.PI).toFixed(1)}°)</strong></div>
        <div class="readout-chip">Principal Roots [0°, 360°): <strong>${prinRoots || "0°"}</strong></div>
        <div class="readout-chip">General Solution (n ∈ ℤ): <strong>${genFormula}</strong></div>
      `;
    }

    enableHorizontalScrubDrag(
      canvas,
      (cw) => (cw < 480 ? 22 : 48),
      (frac) => {
        ctrlC.value = Math.round(-100 + frac * 200);
        draw();
      }
    );

    [modeSel, ctrlC].forEach((el) => el.addEventListener("input", draw));
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     14. Inverse Trig Graphs, Domain/Range & Properties Explorer (Ch 33–36)
     ------------------------------------------------------------------------ */
  function mountInverseMasterLab(container) {
    container.innerHTML = `
      <div class="sandbox-box">
        <div class="sandbox-header">
          <div class="sandbox-title">Interactive Lab: Inverse Trig Graphs, Domain/Range &amp; Properties Explorer (Ch 33–36)</div>
        </div>
        <canvas class="canvas-stage" id="viz-canvas"></canvas>
        <div class="sandbox-controls">
          <div class="control-group">
            <label>Inverse Function / Property</label>
            <select id="ctrl-inv-fn">
              <option value="asin">y = sin⁻¹(x)  [Domain [−1,1], Range [−π/2, π/2]]</option>
              <option value="acos">y = cos⁻¹(x)  [Domain [−1,1], Range [0, π]]</option>
              <option value="atan">y = tan⁻¹(x)  [Domain ℝ, Range (−π/2, π/2)]</option>
              <option value="acot">y = cot⁻¹(x)  [Domain ℝ, Range (0, π)]</option>
              <option value="asec">y = sec⁻¹(x)  [Domain |x|≥1, Range [0,π]\{π/2}]</option>
              <option value="acsc">y = cosec⁻¹(x) [Domain |x|≥1, Range [−π/2,π/2]\{0}]</option>
              <option value="atanSum">Property: tan⁻¹(x) + tan⁻¹(y)  (Piecewise xy &lt; 1 vs xy &gt; 1)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Input x <span id="lbl-inv-x">0.50</span></label>
            <input type="range" id="ctrl-inv-x" min="-300" max="300" value="50" step="5" />
          </div>
          <div class="control-group">
            <label>Second Input y (for tan⁻¹x + tan⁻¹y) <span id="lbl-inv-y">2.00</span></label>
            <input type="range" id="ctrl-inv-y" min="-300" max="300" value="200" step="5" />
          </div>
        </div>
        <div class="readout-strip" id="viz-readout"></div>
      </div>
    `;

    const canvas = container.querySelector("#viz-canvas");
    const fnSel = container.querySelector("#ctrl-inv-fn");
    const ctrlX = container.querySelector("#ctrl-inv-x");
    const ctrlY = container.querySelector("#ctrl-inv-y");
    const lblX = container.querySelector("#lbl-inv-x");
    const lblY = container.querySelector("#lbl-inv-y");
    const readout = container.querySelector("#viz-readout");

    function evalInv(fn, x) {
      if (fn === "asin") return Math.abs(x) <= 1 ? Math.asin(x) : null;
      if (fn === "acos") return Math.abs(x) <= 1 ? Math.acos(x) : null;
      if (fn === "atan") return Math.atan(x);
      if (fn === "acot") return Math.PI / 2 - Math.atan(x);
      if (fn === "asec") return Math.abs(x) >= 1 ? Math.acos(1 / x) : null;
      if (fn === "acsc") return Math.abs(x) >= 1 ? Math.asin(1 / x) : null;
      return null;
    }

    function draw() {
      const fn = fnSel.value;
      const xVal = Number(ctrlX.value) / 100;
      const yInput = Number(ctrlY.value) / 100;
      lblX.textContent = xVal.toFixed(2);
      lblY.textContent = yInput.toFixed(2);

      const { ctx, w, h, isNarrow, colors } = prepareCanvas(
        canvas,
        305,
        fn === "atanSum" ? 395 : 275
      );
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);

      if (fn === "atanSum") {
        const A = Math.atan(xVal);
        const B = Math.atan(yInput);
        const sumAB = A + B;
        const xy = xVal * yInput;
        let branchLabel = "xy < 1 → Standard tan⁻¹((x+y)/(1−xy))";
        let formulaVal = Math.abs(1 - xy) < 1e-9 ? sumAB : Math.atan((xVal + yInput) / (1 - xy));
        if (xy > 1 && xVal > 0 && yInput > 0) {
          branchLabel = "xy > 1 (x,y > 0) → MUST ADD +π!";
          formulaVal += Math.PI;
        } else if (xy > 1 && xVal < 0 && yInput < 0) {
          branchLabel = "xy > 1 (x,y < 0) → MUST SUBTRACT −π!";
          formulaVal -= Math.PI;
        }

        const cx = isNarrow ? w * 0.5 : Math.min(w * 0.32, 185);
        const cy = isNarrow ? 108 : h / 2;
        const R = isNarrow ? Math.min(78, w * 0.3) : Math.min(cx - 32, h / 2 - 32);

        ctx.strokeStyle = colors.axis;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.moveTo(cx - R - 18, cy);
        ctx.lineTo(cx + R + 18, cy);
        ctx.moveTo(cx, cy - R - 18);
        ctx.lineTo(cx, cy + R + 18);
        ctx.stroke();

        const drawAng = (ang, col, lbl) => {
          ctx.strokeStyle = col;
          ctx.lineWidth = 2.6;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + R * Math.cos(ang), cy - R * Math.sin(ang));
          ctx.stroke();
          ctx.fillStyle = col;
          ctx.font = "bold 11.5px Inter, sans-serif";
          ctx.fillText(lbl, cx + (R + 14) * Math.cos(ang) - 10, cy - (R + 14) * Math.sin(ang) + 4);
        };
        drawAng(A, colors.cyan, "tan⁻¹x");
        drawAng(B, colors.amber, "tan⁻¹y");
        drawAng(sumAB, colors.emerald, "Sum");

        const px = isNarrow ? 14 : cx + R + 40;
        const py0 = isNarrow ? 232 : 64;
        if (isNarrow || px < w - 150) {
          ctx.font = isNarrow ? "11.5px JetBrains Mono, monospace" : "12.5px JetBrains Mono, monospace";
          ctx.fillStyle = colors.text;
          ctx.fillText(`x=${xVal.toFixed(2)}, y=${yInput.toFixed(2)}, xy=${xy.toFixed(2)}`, px, py0);
          ctx.fillStyle = xy > 1 ? colors.rose : colors.emerald;
          ctx.fillText(branchLabel, px, py0 + 26);
          ctx.fillStyle = colors.cyan;
          ctx.fillText(`tan⁻¹(x) = ${((A * 180) / Math.PI).toFixed(2)}° (${A.toFixed(3)} rad)`, px, py0 + 54);
          ctx.fillStyle = colors.amber;
          ctx.fillText(`tan⁻¹(y) = ${((B * 180) / Math.PI).toFixed(2)}° (${B.toFixed(3)} rad)`, px, py0 + 78);
          ctx.fillStyle = colors.emerald;
          ctx.fillText(`True Sum  = ${((sumAB * 180) / Math.PI).toFixed(2)}°`, px, py0 + 104);
          ctx.fillText(`Piecewise = ${((formulaVal * 180) / Math.PI).toFixed(2)}° ✓`, px, py0 + 126);
        }

        readout.innerHTML = `
          <div class="readout-chip">Product xy: <strong>${xy.toFixed(2)} (${xy < 1 ? "< 1" : xy > 1 ? "> 1" : "= 1"})</strong></div>
          <div class="readout-chip">tan⁻¹x + tan⁻¹y: <strong>${sumAB.toFixed(4)} rad (${((sumAB * 180) / Math.PI).toFixed(1)}°)</strong></div>
          <div class="readout-chip">2 tan⁻¹x: <strong>${(2 * A).toFixed(4)} rad</strong></div>
        `;
        return;
      }

      // Coordinate system [-3.4, 3.4] x [-2.1, 3.5]
      const xMin = -3.4, xMax = 3.4;
      const yMin = -2.0, yMax = 3.5;
      const padX = isNarrow ? 24 : 52, padY = 22;
      const mapX = (x) => padX + ((x - xMin) / (xMax - xMin)) * (w - 2 * padX);
      const mapY = (y) => h - padY - ((y - yMin) / (yMax - yMin)) * (h - 2 * padY);

      // Axes & y = x mirror line
      ctx.strokeStyle = colors.axis;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(padX, mapY(0));
      ctx.lineTo(w - padX, mapY(0));
      ctx.moveTo(mapX(0), padY);
      ctx.lineTo(mapX(0), h - padY);
      ctx.stroke();

      ctx.save();
      ctx.setLineDash([4, 5]);
      ctx.strokeStyle = colors.muted;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(mapX(-2), mapY(-2));
      ctx.lineTo(mapX(3.2), mapY(3.2));
      ctx.stroke();
      ctx.restore();

      // Horizontal asymptotes / principal range guides
      const guides =
        fn === "acos" || fn === "acot" || fn === "asec"
          ? [[0, "0"], [Math.PI / 2, "π/2"], [Math.PI, "π"]]
          : [[-Math.PI / 2, "−π/2"], [0, "0"], [Math.PI / 2, "π/2"]];

      ctx.save();
      ctx.setLineDash([5, 4]);
      ctx.strokeStyle = "rgba(251, 191, 36, 0.45)";
      ctx.fillStyle = colors.amber;
      ctx.font = "11px Inter, sans-serif";
      guides.forEach(([yv, lbl]) => {
        ctx.beginPath();
        ctx.moveTo(padX, mapY(yv));
        ctx.lineTo(w - padX, mapY(yv));
        ctx.stroke();
        ctx.fillText(lbl, padX + 4, mapY(yv) - 4);
      });
      ctx.restore();

      // Plot inverse curve
      ctx.strokeStyle = colors.cyan;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      let down = false;
      for (let i = 0; i <= 500; i++) {
        const xv = xMin + (i / 500) * (xMax - xMin);
        const yv = evalInv(fn, xv);
        if (yv === null || Number.isNaN(yv)) {
          down = false;
          continue;
        }
        if (!down) {
          ctx.moveTo(mapX(xv), mapY(yv));
          down = true;
        } else {
          ctx.lineTo(mapX(xv), mapY(yv));
        }
      }
      ctx.stroke();

      const yOut = evalInv(fn, xVal);
      if (yOut !== null) {
        ctx.fillStyle = colors.rose;
        ctx.beginPath();
        ctx.arc(mapX(xVal), mapY(yOut), 6, 0, Math.PI * 2);
        ctx.fill();
      }

      const coSum =
        Math.abs(xVal) <= 1
          ? `sin⁻¹x + cos⁻¹x = ${(Math.asin(xVal) + Math.acos(xVal)).toFixed(4)} = π/2 ✓`
          : `tan⁻¹x + cot⁻¹x = ${(Math.atan(xVal) + (Math.PI / 2 - Math.atan(xVal))).toFixed(4)} = π/2 ✓`;

      readout.innerHTML = `
        <div class="readout-chip">Input x = <strong>${xVal.toFixed(2)}</strong></div>
        <div class="readout-chip">Principal Value y: <strong>${yOut === null ? "OUTSIDE DOMAIN!" : `${yOut.toFixed(4)} rad (${((yOut * 180) / Math.PI).toFixed(1)}°)`}</strong></div>
        <div class="readout-chip">${coSum}</div>
      `;
    }

    enableHorizontalScrubDrag(
      canvas,
      (cw) => (cw < 480 ? 24 : 52),
      (frac) => {
        if (fnSel.value === "atanSum") return;
        const mapped = Math.round((-300 + frac * 600) / 5) * 5;
        ctrlX.value = Math.min(300, Math.max(-300, mapped));
        draw();
      }
    );

    [fnSel, ctrlX, ctrlY].forEach((el) => el.addEventListener("input", draw));
    draw();
    return draw;
  }

  /* ------------------------------------------------------------------------
     Dispatcher + Triangle Solver Diagram Renderer
     ------------------------------------------------------------------------ */
  function mount(type, container) {
    switch (type) {
      case "protractor": return mountProtractor(container);
      case "radianSector": return mountRadianSector(container);
      case "rightTriangle": return mountRightTriangle(container);
      case "triangleStepSolver": return mountTriangleStepSolver(container);
      case "identityExplorer": return mountIdentityExplorer(container);
      case "elevation": return mountElevation(container);
      case "unitCircle": return mountUnitCircle(container);
      case "waveLab": return mountWaveLab(container);
      case "compoundWaveLab": return mountCompoundWaveLab(container);
      case "trigEqInverseLab": return mountTrigEqInverseLab(container);
      case "inverseMasterLab": return mountInverseMasterLab(container);
      case "taylor": return mountTaylor(container);
      case "rootsUnity": return mountRootsUnity(container);
      case "fourier": return mountFourier(container);
      default: return mountUnitCircle(container);
    }
  }

  function drawSolvedTriangle(canvas, tri) {
    const { ctx, w, h, isNarrow, colors } = prepareCanvas(canvas, 250, 225);
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, w, h);
    if (!tri) return;

    // Place A at (0,0), B at (c, 0), C at (b cos A, b sin A)
    const radA = (tri.A * Math.PI) / 180;
    const pts = [
      { x: 0, y: 0, label: `A (${tri.A.toFixed(1)}°)` },
      { x: tri.c, y: 0, label: `B (${tri.B.toFixed(1)}°)` },
      { x: tri.b * Math.cos(radA), y: tri.b * Math.sin(radA), label: `C (${tri.C.toFixed(1)}°)` }
    ];

    const minX = Math.min(...pts.map((p) => p.x));
    const maxX = Math.max(...pts.map((p) => p.x));
    const minY = Math.min(...pts.map((p) => p.y));
    const maxY = Math.max(...pts.map((p) => p.y));
    const spanX = Math.max(maxX - minX, 1e-3);
    const spanY = Math.max(maxY - minY, 1e-3);
    const padSide = isNarrow ? 44 : 65;
    const scale = Math.min((w - padSide * 2) / spanX, (h - 76) / spanY);

    const mapPt = (p) => ({
      x: padSide + (p.x - minX) * scale,
      y: h - 34 - (p.y - minY) * scale
    });
    const P = pts.map(mapPt);

    ctx.fillStyle = "rgba(99, 102, 241, 0.16)";
    ctx.strokeStyle = colors.cyan;
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.moveTo(P[0].x, P[0].y);
    ctx.lineTo(P[1].x, P[1].y);
    ctx.lineTo(P[2].x, P[2].y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = colors.text;
    ctx.font = isNarrow ? "bold 11px Inter, sans-serif" : "bold 12px Inter, sans-serif";
    ctx.fillText(pts[0].label, Math.max(4, P[0].x - 28), P[0].y + 18);
    ctx.fillText(pts[1].label, Math.min(w - 64, P[1].x - 20), P[1].y + 18);
    ctx.fillText(pts[2].label, Math.min(w - 64, Math.max(4, P[2].x - 25)), Math.max(16, P[2].y - 10));

    ctx.fillStyle = colors.amber;
    ctx.fillText(`c=${tri.c.toFixed(1)}`, (P[0].x + P[1].x) / 2 - 18, (P[0].y + P[1].y) / 2 + 16);
    ctx.fillText(`a=${tri.a.toFixed(1)}`, Math.min(w - 52, (P[1].x + P[2].x) / 2 + 6), (P[1].y + P[2].y) / 2);
    ctx.fillText(`b=${tri.b.toFixed(1)}`, Math.max(4, (P[0].x + P[2].x) / 2 - 48), (P[0].y + P[2].y) / 2);
  }

  return { mount, drawSolvedTriangle };
})();
