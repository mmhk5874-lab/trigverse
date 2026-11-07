/* ==========================================================================
   ArithVerse — Pink Game-Type Winding Quest Roadmap, Lessons, Vault & Solver
   Beginning (Ch 1) → Highest Olympiad Level (Ch 36) in Luminous Pink!
   ========================================================================== */

(function () {
  const STORAGE_DONE = "arithverse_completed_v1";
  const STORAGE_RPG = "arithverse_rpg_state_v1";

  const DB = window.ARITH_CURRICULUM || { tiers: [], modules: [], generate15Mcqs: () => [] };
  const TIERS = DB.tiers;
  const MODULES = DB.modules;
  const VALID_IDS = new Set(MODULES.map((m) => m.id));

  let completedSet = new Set(
    JSON.parse(localStorage.getItem(STORAGE_DONE) || "[]").filter((id) => VALID_IDS.has(id))
  );
  let rpgState = Object.assign(
    { petImg: "animals/fox.png", claimedChests: [], bonusXp: 0 },
    JSON.parse(localStorage.getItem(STORAGE_RPG) || "{}")
  );

  let activeSubTab = "roadmap"; // "roadmap" | "lesson" | "vault" | "solver"
  let currentModuleId = MODULES[0]?.id || "ar-ch-1";
  let selectedPopoverId = null;
  let popoverInit = false;
  let vaultTierFilter = "ALL";
  let raidState = null;

  function saveState() {
    try {
      localStorage.setItem(STORAGE_DONE, JSON.stringify([...completedSet]));
      localStorage.setItem(STORAGE_RPG, JSON.stringify(rpgState));
    } catch (_) {
      /* ignore quota */
    }
  }

  function isMobile() {
    return typeof window !== "undefined" && window.innerWidth <= 640;
  }

  function typesetArith(el) {
    if (!el) return;
    if (typeof window.renderMathInElement === "function") {
      try {
        window.renderMathInElement(el, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      } catch (_) {
        /* ignore */
      }
    }
  }

  function getUnlockedMaxIndex() {
    let idx = 0;
    while (idx < MODULES.length && completedSet.has(MODULES[idx].id)) {
      idx += 1;
    }
    return Math.min(idx, MODULES.length - 1);
  }

  function isModuleUnlocked(idOrIdx) {
    const idx = typeof idOrIdx === "number" ? idOrIdx : MODULES.findIndex((m) => m.id === idOrIdx);
    if (idx <= 0) return true;
    return idx <= getUnlockedMaxIndex();
  }

  function isTierUnlocked(tierId) {
    const tIdx = TIERS.findIndex((t) => t.id === tierId);
    if (tIdx <= 0) return true;
    const prevTier = TIERS[tIdx - 1];
    const prevMods = MODULES.filter((m) => m.tierId === prevTier.id);
    return prevMods.every((m) => completedSet.has(m.id));
  }

  function getFrontierModuleId() {
    const firstInc = MODULES.find((m) => !completedSet.has(m.id));
    return firstInc ? firstInc.id : MODULES[MODULES.length - 1]?.id;
  }

  function buildPinkRoadSvg(offsets) {
    const stepY = 128;
    const pts = [...offsets, 0].map((ox, i) => [140 + ox, 42 + i * stepY]);
    if (pts.length < 2) return "";
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i];
      const [x2, y2] = pts[i + 1];
      const midY = (y1 + y2) / 2;
      d += ` C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
    }
    const h = pts[pts.length - 1][1] + 35;
    return `
      <svg class="duo-road-svg" viewBox="0 0 280 ${h}" preserveAspectRatio="none" aria-hidden="true">
        <path d="${d}" stroke="rgba(131, 24, 67, 0.55)" stroke-width="22" stroke-linecap="round" fill="none"/>
        <path d="${d}" stroke="rgba(244, 114, 182, 0.45)" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="${d}" stroke="#fdf2f8" stroke-width="3.5" stroke-dasharray="9 9" stroke-linecap="round" fill="none" opacity="0.9"/>
      </svg>
    `;
  }

  function getPinkStoneIconSvg(isDone, index, isBoss, isLocked) {
    if (isLocked) {
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <path d="M12 16V12.5C12 9.186 14.686 6.5 18 6.5C21.314 6.5 24 9.186 24 12.5V16" stroke="#fbcfe8" stroke-width="3" stroke-linecap="round"/>
        <rect x="8.5" y="15.5" width="19" height="14.5" rx="3.5" fill="#500724" stroke="#fbcfe8" stroke-width="2"/>
        <circle cx="18" cy="21.5" r="2.1" fill="#fde047"/>
        <path d="M18 23.2V26.3" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
    }
    if (isDone) {
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <path d="M8 18.5L15 25.5L28.5 11.5" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    }
    if (isBoss) {
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <path d="M7 28L27 8M27 8H20M27 8V15" stroke="#fde047" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29 28L9 8M9 8H16M9 8V15" stroke="#fdf2f8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 24L15 19L18 22L21 19L24 24H12Z" fill="#fde047" stroke="#831843" stroke-width="1.3"/>
      </svg>`;
    }
    const mode = index % 3;
    if (mode === 0) {
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <path d="M6 10C10.5 10 14.5 11.5 18 14C21.5 11.5 25.5 10 30 10V26C25.5 26 21.5 27.2 18 29.5C14.5 27.2 10.5 26 6 26V10Z" fill="#fdf2f8" stroke="#831843" stroke-width="2" stroke-linejoin="round"/>
        <path d="M18 14V29.5" stroke="#831843" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
    }
    if (mode === 1) {
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="7" width="20" height="22" rx="4" fill="#fdf2f8" stroke="#831843" stroke-width="2"/>
        <rect x="11.5" y="10.5" width="13" height="5" rx="1.5" fill="#f472b6"/>
        <circle cx="13.5" cy="20" r="1.6" fill="#be185d"/>
        <circle cx="18" cy="20" r="1.6" fill="#be185d"/>
        <circle cx="22.5" cy="20" r="1.6" fill="#be185d"/>
        <circle cx="13.5" cy="24.5" r="1.6" fill="#be185d"/>
        <rect x="17" y="23.2" width="7" height="2.6" rx="1.3" fill="#db2777"/>
      </svg>`;
    }
    return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
      <path d="M18 6.5L21.4 13.5L29.1 14.6L23.5 20L24.8 27.7L18 24.1L11.2 27.7L12.5 20L6.9 14.6L14.6 13.5L18 6.5Z" fill="#fdf2f8" stroke="#831843" stroke-width="1.6" stroke-linejoin="round"/>
    </svg>`;
  }

  function getPinkChestSvg(unlocked) {
    if (unlocked) {
      return `<svg class="duo-chest-svg" viewBox="0 0 80 72" fill="none">
        <rect x="10" y="28" width="60" height="36" rx="6" fill="#be185d" stroke="#500724" stroke-width="3"/>
        <path d="M12 16C12 11 22 8 40 8C58 8 68 11 68 16L72 28H8L12 16Z" fill="#f472b6" stroke="#500724" stroke-width="3"/>
        <circle cx="32" cy="27" r="5" fill="#fde047"/>
        <circle cx="48" cy="26" r="5.5" fill="#f9a8d4"/>
        <circle cx="40" cy="24" r="6" fill="#ffffff"/>
        <rect x="10" y="34" width="60" height="6" fill="#ec4899"/>
        <rect x="35" y="31" width="10" height="13" rx="3" fill="#fde047" stroke="#500724" stroke-width="2"/>
      </svg>`;
    }
    return `<svg class="duo-chest-svg" viewBox="0 0 80 72" fill="none">
      <rect x="10" y="26" width="60" height="38" rx="6" fill="#db2777" stroke="#500724" stroke-width="3"/>
      <rect x="10" y="14" width="60" height="16" rx="5" fill="#f472b6" stroke="#500724" stroke-width="3"/>
      <rect x="18" y="14" width="8" height="50" fill="#fbcfe8" opacity="0.88"/>
      <rect x="54" y="14" width="8" height="50" fill="#fbcfe8" opacity="0.88"/>
      <rect x="34" y="24" width="12" height="15" rx="3" fill="#fde047" stroke="#500724" stroke-width="2.5"/>
      <circle cx="40" cy="30" r="2.3" fill="#500724"/>
    </svg>`;
  }

  function updateHeaderStats() {
    const doneEl = document.getElementById("arith-stat-completed");
    if (doneEl) doneEl.textContent = `${completedSet.size}/${MODULES.length}`;
    const hudLv = document.getElementById("arith-hud-level");
    if (hudLv) hudLv.textContent = `Lv. ${Math.min(MODULES.length, completedSet.size + 1)}`;
  }

  function switchArithSubTab(subTab) {
    activeSubTab = subTab;
    document.querySelectorAll("[data-arith-tab]").forEach((btn) => {
      const match = subTab === "lesson" ? "roadmap" : subTab;
      btn.classList.toggle("active", btn.dataset.arithTab === match);
    });
    document.querySelectorAll(".arith-subpanel").forEach((panel) => {
      panel.hidden = panel.id !== `arith-panel-${subTab}`;
    });

    if (subTab === "roadmap") renderArithQuestTrail();
    else if (subTab === "lesson") renderArithLesson(currentModuleId);
    else if (subTab === "vault") renderArithVault();
    else if (subTab === "solver") renderArithSolver();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderArithMinimap() {
    const mapEl = document.getElementById("arith-world-minimap");
    if (!mapEl) return;
    mapEl.innerHTML = TIERS.map((tier, idx) => {
      const mods = MODULES.filter((m) => m.tierId === tier.id);
      const done = mods.filter((m) => completedSet.has(m.id)).length;
      const cleared = mods.length > 0 && done === mods.length;
      const open = isTierUnlocked(tier.id);
      const statusIcon = cleared ? "👑" : open ? "🔓" : "🔒";
      return `
        <button type="button" class="rpg-world-node ${cleared ? "cleared" : open ? "unlocked-world" : "locked-world"}" data-arith-teleport="arith-unit-realm-${idx + 1}">
          <img src="${tier.img}" alt="${tier.animal}" />
          <span>Realm ${idx + 1}: ${tier.shortTag} (${done}/${mods.length}) ${statusIcon}</span>
        </button>
      `;
    }).join("");

    mapEl.querySelectorAll("[data-arith-teleport]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.arithTeleport)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderArithQuestTrail() {
    updateHeaderStats();
    renderArithMinimap();
    const arena = document.getElementById("arith-path-arena");
    if (!arena) return;

    const frontierId = getFrontierModuleId();
    const unlockedMaxIdx = getUnlockedMaxIndex();
    const frontierMod = MODULES[unlockedMaxIdx] || MODULES[0];
    const frontierShort = frontierMod ? frontierMod.grade.split("•")[0].trim() : "Ch 1";
    if (!popoverInit) {
      popoverInit = true;
      selectedPopoverId = isMobile() ? null : frontierId;
    }

    const xCurve = [0, 56, -48, 52, -56, 48, -52, 56, -48, 52, -56, 0];
    let globalIdx = 0;

    arena.innerHTML = TIERS.map((tier, tIdx) => {
      const mods = MODULES.filter((m) => m.tierId === tier.id);
      const tierDoneCount = mods.filter((m) => completedSet.has(m.id)).length;
      const tierAllDone = mods.length > 0 && tierDoneCount === mods.length;
      const tierUnlocked = isTierUnlocked(tier.id);
      const prevTier = tIdx > 0 ? TIERS[tIdx - 1] : null;
      const prevTierMods = prevTier ? MODULES.filter((m) => m.tierId === prevTier.id) : [];
      const prevTierDone = prevTierMods.filter((m) => completedSet.has(m.id)).length;
      const tierPct = mods.length > 0 ? Math.round((tierDoneCount / mods.length) * 100) : 0;
      const chestId = `arith-chest-${tier.id}`;
      const chestClaimed = (rpgState.claimedChests || []).includes(chestId);
      const isChestSelected = selectedPopoverId === chestId;
      const unitOffsets = [];

      const stepsHtml = mods
        .map((m, mLocalIdx) => {
          const idx = globalIdx++;
          const offsetX = xCurve[idx % xCurve.length];
          unitOffsets.push(offsetX);
          const isDone = completedSet.has(m.id);
          const isUnlocked = idx <= unlockedMaxIdx;
          const isLocked = !isUnlocked;
          const isFrontier = m.id === frontierId && !isDone;
          const isSelected = selectedPopoverId === m.id;
          const isBoss = mLocalIdx === mods.length - 1;
          const btnVerb = isDone ? "REPLAY" : "STUDY";
          const stepsAway = Math.max(1, idx - unlockedMaxIdx);
          const prevReqMod = idx > 0 ? MODULES[idx - 1] : m;
          const prevReqShort = prevReqMod.grade.split("•")[0].trim();

          return `
            <div class="duo-step-row" style="--stone-x:${offsetX}px" id="arith-stone-row-${m.id}">
              <div class="duo-stone-anchor">
                ${
                  isFrontier || (m.id === frontierId && isDone)
                    ? `<div class="rpg-hero-pin"><img src="${rpgState.petImg}" alt="Hero" /><span>${isDone ? `👑 LV. ${idx + 1} MAXED` : `💖 LV. ${idx + 1} • CURRENT LEVEL`}</span></div>`
                    : ""
                }
                <button
                  type="button"
                  class="duo-stone-btn ${isBoss ? "boss-stone" : ""} ${isDone ? "completed" : ""} ${isFrontier ? "current-frontier" : ""} ${isLocked ? "locked-stone" : ""} ${isSelected ? "selected" : ""}"
                  data-arith-stone="${m.id}"
                  aria-label="${isLocked ? "Locked: " : ""}${m.grade}: ${m.title}"
                >
                  ${
                    isBoss
                      ? `<span class="duo-boss-tag">${isDone ? "👑 SLAIN" : isLocked ? "🔒 BOSS" : "⚔️ BOSS"}</span>`
                      : ""
                  }
                  ${getPinkStoneIconSvg(isDone, idx, isBoss, isLocked)}
                </button>
                <span class="duo-stone-grade-pill ${isLocked ? "locked-pill" : ""}">${isLocked ? "🔒 " : isDone ? "✓ " : "💖 "}${m.grade.split("•")[0].trim()} • ${m.title.replace(/^\d+\.\s*/, "").slice(0, 21)}${m.title.replace(/^\d+\.\s*/, "").length > 21 ? "…" : ""}</span>
                <div class="duo-stone-stars ${isDone ? "" : "unearned"}">${isLocked ? "🔒 LOCKED" : "★ ★ ★"}</div>
              </div>

              ${
                isSelected
                  ? isLocked
                    ? `
                <div class="duo-popover-card locked-popover" style="--arrow-x:${Math.max(-120, Math.min(120, offsetX))}px">
                  <div class="duo-sheet-handle" aria-hidden="true"></div>
                  <button type="button" class="duo-popover-close" data-arith-close-pop="1" aria-label="Close">✕</button>
                  <div class="duo-popover-arrow"></div>
                  <div class="duo-popover-grade">🔒 LEVEL LOCKED • ${stepsAway} STEP${stepsAway > 1 ? "S" : ""} AWAY</div>
                  <h4 class="duo-popover-title">🔒 ${m.title}</h4>
                  <p class="duo-popover-desc">
                    Complete <strong>${prevReqShort}</strong> first! Levels unlock step-by-step from the very beginning up to Olympiad Grandmaster. Active unlocked level: <strong>${frontierMod.title}</strong>.
                  </p>
                  <div class="duo-popover-btn-grid">
                    <button type="button" class="duo-popover-start-btn" data-arith-open="${frontierMod.id}">
                      📖 STUDY ${frontierShort}
                    </button>
                    <button type="button" class="duo-popover-raid-btn" data-arith-raid="${frontierMod.id}">
                      🎮 15 MCQs (${frontierShort})
                    </button>
                  </div>
                </div>
              `
                    : `
                <div class="duo-popover-card" style="--arrow-x:${Math.max(-120, Math.min(120, offsetX))}px">
                  <div class="duo-sheet-handle" aria-hidden="true"></div>
                  <button type="button" class="duo-popover-close" data-arith-close-pop="1" aria-label="Close">✕</button>
                  <div class="duo-popover-arrow"></div>
                  <div class="duo-popover-grade">${isBoss ? "⚔️ REALM BOSS STAGE" : "🔓 UNLOCKED QUEST STAGE"} • ${m.grade} • PASS: 10/15 MCQs</div>
                  <h4 class="duo-popover-title">${m.title}</h4>
                  <p class="duo-popover-desc">${m.subtitle}</p>
                  <div class="duo-popover-btn-grid">
                    <button type="button" class="duo-popover-start-btn" data-arith-open="${m.id}">
                      📖 ${btnVerb} LESSON
                    </button>
                    <button type="button" class="duo-popover-raid-btn" data-arith-raid="${m.id}">
                      🎮 ${isDone ? "REPLAY 15 MCQs" : "PLAY 15 MCQs"}
                    </button>
                  </div>
                </div>
              `
                  : ""
              }
            </div>
          `;
        })
        .join("");

      const activeInTier =
        mods.find((m) => m.id === frontierId) ||
        [...mods].reverse().find((m) => isModuleUnlocked(m.id)) ||
        mods[0];

      return `
        <div class="duo-unit-section ${tierUnlocked ? "" : "realm-locked"}" id="arith-unit-realm-${tIdx + 1}">
          <div class="duo-unit-banner">
            <div>
              <div class="duo-unit-eyebrow">
                ${tierAllDone ? "👑 REALM CLEARED" : tierUnlocked ? "🔓 UNLOCKED REALM" : "🔒 LOCKED REALM"} • REALM ${tIdx + 1} (${tierDoneCount}/${mods.length} CHAPTERS)
              </div>
              <h3 class="duo-unit-title">${tierUnlocked ? "" : "🔒 "}${tier.name}</h3>
              <div class="duo-realm-progress-wrap">
                <div class="duo-realm-bar"><div class="duo-realm-bar-fill" style="width:${tierPct}%"></div></div>
                <span style="font-size:0.75rem;font-weight:800;">${tierPct}% Conquered</span>
              </div>
              ${
                !tierUnlocked
                  ? `<div class="duo-realm-lock-pill">🔒 Complete all chapters in Realm ${tIdx} (${prevTierDone}/${prevTierMods.length}) to unlock Realm ${tIdx + 1}!</div>`
                  : ""
              }
            </div>
            <div class="duo-unit-actions">
              ${
                tierUnlocked
                  ? `<button type="button" class="duo-unit-guide-btn" data-arith-raid="${activeInTier?.id}">⚔️ ${tierAllDone ? "BOSS RAID" : "STAGE RAID"}</button>`
                  : `<button type="button" class="duo-unit-guide-btn" style="opacity:0.75;" disabled>🔒 RAID LOCKED</button>`
              }
              <button type="button" class="duo-unit-guide-btn" data-arith-jump-vault="${tier.id}">
                📜 FORMULAS
              </button>
            </div>
          </div>

          <div class="duo-unit-trail">
            ${buildPinkRoadSvg(unitOffsets)}

            <div class="duo-mascot-prop ${tier.side}" data-arith-mascot="${activeInTier?.id || "ar-ch-1"}">
              <div class="duo-mascot-quote">"${tier.quote}"</div>
              <div class="duo-mascot-ring">
                <img src="${tier.img}" alt="${tier.animal}" class="duo-mascot-img" />
              </div>
              <div class="duo-mascot-pedestal">
                <div class="duo-mascot-stars ${tierDoneCount > 0 ? "lit" : ""}">
                  ${tierAllDone ? "★ ★ ★" : tierDoneCount > 0 ? "★ ★ ☆" : "★ ☆ ☆"}
                </div>
                <span class="duo-mascot-name">${tier.animal}</span>
              </div>
            </div>

            ${stepsHtml}

            <div class="duo-step-row" style="--stone-x:0px">
              <button type="button" class="duo-chest-btn" data-arith-chest="${chestId}">
                ${getPinkChestSvg(tierAllDone || chestClaimed)}
                <span class="duo-chest-label">
                  ${chestClaimed ? `👑 Realm ${tIdx + 1} Trophy Claimed` : tierAllDone ? `🎁 Tap to Claim Realm ${tIdx + 1} Pink Trophy!` : `🔒 Realm ${tIdx + 1} Mastery Chest`}
                </span>
              </button>
              ${
                isChestSelected
                  ? `
                <div class="duo-popover-card" style="--arrow-x:0px">
                  <div class="duo-sheet-handle" aria-hidden="true"></div>
                  <button type="button" class="duo-popover-close" data-arith-close-pop="1" aria-label="Close">✕</button>
                  <div class="duo-popover-arrow"></div>
                  <div class="duo-popover-grade">REALM ${tIdx + 1} PINK MASTERY CHEST • ${tier.animal.toUpperCase()}</div>
                  <h4 class="duo-popover-title">${
                    chestClaimed
                      ? `🏆 Realm ${tIdx + 1} Pink Trophy Secured!`
                      : tierAllDone
                      ? "✨ Realm Cleared! Claim Your Pink Mastery Trophy!"
                      : `Clear All ${mods.length} Chapters in Realm ${tIdx + 1} to Unlock!`
                  }</h4>
                  <p class="duo-popover-desc">${tier.quote}</p>
                  <div class="duo-popover-btn-grid">
                    ${
                      tierAllDone && !chestClaimed
                        ? `<button type="button" class="duo-popover-raid-btn" data-arith-claim="${chestId}">🎁 CLAIM TROPHY</button>`
                        : `<button type="button" class="duo-popover-raid-btn" data-arith-raid="${activeInTier?.id}">🎮 PLAY 15 MCQs</button>`
                    }
                    <button type="button" class="duo-popover-start-btn" data-arith-jump-vault="${tier.id}">
                      📜 FORMULAS
                    </button>
                  </div>
                </div>
              `
                  : ""
              }
            </div>
          </div>
        </div>
      `;
    }).join("");

    typesetArith(arena);

    arena.querySelectorAll("[data-arith-stone]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.arithStone;
        selectedPopoverId = selectedPopoverId === id ? null : id;
        renderArithQuestTrail();
      });
    });

    arena.querySelectorAll("[data-arith-chest]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.arithChest;
        selectedPopoverId = selectedPopoverId === id ? null : id;
        renderArithQuestTrail();
      });
    });

    arena.querySelectorAll("[data-arith-close-pop]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedPopoverId = null;
        renderArithQuestTrail();
      });
    });

    arena.querySelectorAll("[data-arith-open]").forEach((btn) => {
      btn.addEventListener("click", () => openArithLesson(btn.dataset.arithOpen));
    });

    arena.querySelectorAll("[data-arith-mascot]").forEach((el) => {
      el.addEventListener("click", () => {
        const modId = el.dataset.arithMascot;
        if (isModuleUnlocked(modId)) openArithLesson(modId);
      });
    });

    arena.querySelectorAll("[data-arith-raid]").forEach((btn) => {
      btn.addEventListener("click", () => startArithRaid(btn.dataset.arithRaid));
    });

    arena.querySelectorAll("[data-arith-claim]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cId = btn.dataset.arithClaim;
        if (!rpgState.claimedChests.includes(cId)) {
          rpgState.claimedChests.push(cId);
          rpgState.bonusXp = (rpgState.bonusXp || 0) + 200;
          saveState();
        }
        renderArithQuestTrail();
      });
    });

    arena.querySelectorAll("[data-arith-jump-vault]").forEach((btn) => {
      btn.addEventListener("click", () => {
        vaultTierFilter = btn.dataset.arithJumpVault || "ALL";
        switchArithSubTab("vault");
      });
    });
  }

  /* ------------------------------------------------------------------------
     Interactive Arithmetic Chapter Lesson View
     ------------------------------------------------------------------------ */
  function openArithLesson(modId) {
    if (!isModuleUnlocked(modId)) {
      modId = getFrontierModuleId();
    }
    currentModuleId = modId;
    switchArithSubTab("lesson");
  }

  function renderArithLesson(modId) {
    const mount = document.getElementById("arith-lesson-mount");
    if (!mount) return;
    const idx = MODULES.findIndex((m) => m.id === modId);
    const mod = MODULES[idx >= 0 ? idx : 0];
    if (!mod) return;
    const isDone = completedSet.has(mod.id);
    const prevMod = idx > 0 ? MODULES[idx - 1] : null;
    const nextMod = idx < MODULES.length - 1 ? MODULES[idx + 1] : null;

    mount.innerHTML = `
      <div class="section-card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;margin-bottom:0.85rem;">
          <button type="button" class="trig-back-verses-btn" id="arith-back-roadmap">← Back to Pink Roadmap</button>
          <span class="lecture-level-tag">${mod.grade} ${isDone ? "• ✓ Mastered" : "• ⚡ Active Quest"}</span>
        </div>

        <h2 style="margin:0 0 0.35rem;">${mod.title}</h2>
        <p style="margin:0 0 1.15rem;color:var(--text-secondary);font-size:0.96rem;">${mod.subtitle}</p>

        <div class="callout" style="margin-bottom:1.15rem;padding:1rem 1.15rem;border-radius:14px;background:var(--bg-surface-elevated);border-left:4px solid #f472b6;">
          <h3 style="margin:0 0 0.4rem;font-size:1rem;">💡 Core Concept &amp; Friendly Intuition</h3>
          <p style="margin:0;line-height:1.65;">${mod.theory}</p>
        </div>

        <h3 style="margin:1.1rem 0 0.65rem;">📜 Key Blueprint Formulas</h3>
        <div class="vault-eq-grid" style="margin-bottom:1.25rem;">
          ${(mod.formulas || [])
            .map(
              (f, i) => `
            <div class="vault-eq-plate vault-eq-plate-full">
              <span class="vault-eq-step">${i + 1}</span>
              <div class="vault-eq-math">
                <div style="font-size:0.76rem;font-weight:800;color:#fbcfe8;margin-bottom:0.15rem;">${f.name}</div>
                <div>${f.tex}</div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="section-card" style="background:var(--bg-code);margin-bottom:1.25rem;padding:1rem 1.15rem;">
          <h3 style="margin:0 0 0.4rem;font-size:0.98rem;color:#fde047;">✍️ Worked Step-by-Step Example</h3>
          <p style="margin:0 0 0.45rem;font-weight:700;">Problem: ${mod.example?.q || ""}</p>
          <p style="margin:0;color:var(--text-secondary);"><strong>Solution:</strong> ${mod.example?.steps || ""}</p>
        </div>

        <div class="section-card" style="padding:1.1rem 1.15rem;margin-bottom:1.2rem;">
          <h3 style="margin:0 0 0.65rem;font-size:1rem;">🎯 Quick Warm-Up Check (${(mod.quiz || []).length} Questions)</h3>
          <div id="arith-inline-quiz">
            ${(mod.quiz || [])
              .map(
                (qz, qIdx) => `
              <div style="margin-bottom:0.95rem;padding-bottom:0.85rem;border-bottom:1px solid var(--border-subtle);">
                <div style="font-weight:700;margin-bottom:0.45rem;">Q${qIdx + 1}. ${qz.q}</div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:0.45rem;">
                  ${qz.opts
                    .map(
                      (opt, oIdx) => `
                    <button type="button" class="mrmmhk-choice-pill" data-inline-q="${qIdx}" data-inline-o="${oIdx}" data-inline-ans="${qz.ans}">
                      ${opt}
                    </button>
                  `
                    )
                    .join("")}
                </div>
                <div id="arith-q-fb-${qIdx}" style="font-size:0.82rem;font-weight:700;margin-top:0.35rem;"></div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:0.65rem;justify-content:space-between;align-items:center;">
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            ${
              prevMod
                ? `<button type="button" class="verses-cta-secondary" data-arith-nav="${prevMod.id}">← Ch ${idx}</button>`
                : ""
            }
            <button type="button" class="verses-cta-primary" id="arith-lesson-raid-btn">
              ⚔️ Play 15-MCQ Boss Challenge (Pass 10/15)
            </button>
            <button type="button" class="verses-cta-secondary" id="arith-mark-done-btn" style="border-color:#fde047;">
              ${isDone ? "✓ Chapter Mastered!" : "✓ Complete & Unlock Next Chapter →"}
            </button>
          </div>
          ${
            nextMod && (isDone || isModuleUnlocked(nextMod.id))
              ? `<button type="button" class="verses-cta-primary" data-arith-nav="${nextMod.id}">Next: Ch ${idx + 2} →</button>`
              : ""
          }
        </div>
      </div>
    `;

    typesetArith(mount);

    document.getElementById("arith-back-roadmap")?.addEventListener("click", () => switchArithSubTab("roadmap"));
    document.getElementById("arith-lesson-raid-btn")?.addEventListener("click", () => startArithRaid(mod.id));
    document.getElementById("arith-mark-done-btn")?.addEventListener("click", () => {
      completedSet.add(mod.id);
      saveState();
      updateHeaderStats();
      if (nextMod) {
        selectedPopoverId = nextMod.id;
        openArithLesson(nextMod.id);
      } else {
        switchArithSubTab("roadmap");
      }
    });

    mount.querySelectorAll("[data-arith-nav]").forEach((b) => {
      b.addEventListener("click", () => openArithLesson(b.dataset.arithNav));
    });

    mount.querySelectorAll("[data-inline-q]").forEach((b) => {
      b.addEventListener("click", () => {
        const qIdx = b.dataset.inlineQ;
        const chosen = Number(b.dataset.inlineO);
        const ans = Number(b.dataset.inlineAns);
        const fb = document.getElementById(`arith-q-fb-${qIdx}`);
        if (!fb) return;
        if (chosen === ans) {
          fb.innerHTML = `<span style="color:#4ade80;">✓ Correct! Awesome job! 💖</span>`;
        } else {
          fb.innerHTML = `<span style="color:#fda4af;">✗ Not quite—check the worked formula above and try again!</span>`;
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     Playable 15-MCQ Pink Guardian Boss Raid Modal
     ------------------------------------------------------------------------ */
  function startArithRaid(modId) {
    const idx = MODULES.findIndex((m) => m.id === modId);
    const mod = MODULES[idx >= 0 ? idx : 0];
    if (!mod) return;
    const tier = TIERS.find((t) => t.id === mod.tierId) || TIERS[0];
    const questions = DB.generate15Mcqs(mod);

    raidState = {
      mod,
      modIdx: idx,
      tier,
      questions,
      qIndex: 0,
      score: 0,
      answered: false
    };

    const modal = document.getElementById("arith-raid-modal");
    if (modal) {
      modal.hidden = false;
      renderArithRaidStep();
    }
  }

  function closeArithRaid() {
    const modal = document.getElementById("arith-raid-modal");
    if (modal) modal.hidden = true;
    raidState = null;
  }

  function renderArithRaidStep() {
    const box = document.getElementById("arith-raid-card");
    if (!box || !raidState) return;
    const { mod, modIdx, tier, questions, qIndex, score } = raidState;

    if (qIndex >= questions.length) {
      const passed = score >= 10;
      if (passed) {
        completedSet.add(mod.id);
        const nextMod = MODULES[modIdx + 1];
        if (nextMod) selectedPopoverId = nextMod.id;
        saveState();
        updateHeaderStats();
        renderArithQuestTrail();
      }
      box.innerHTML = `
        <div class="rpg-battle-topbar">
          <span class="rpg-battle-badge">${passed ? "👑 VICTORY!" : "💪 KEEP GOING!"} • ${mod.grade}</span>
          <button type="button" class="rpg-close-btn" id="arith-raid-close">✕ Close</button>
        </div>
        <div style="padding:1.4rem;text-align:center;">
          <img src="${tier.img}" alt="${tier.animal}" style="width:82px;height:82px;border-radius:50%;border:3px solid #fde047;margin-bottom:0.6rem;" />
          <h3 style="margin:0 0 0.35rem;font-size:1.35rem;">
            ${passed ? `🥳 Guardian Cleared! Score: ${score} / 15` : `Score: ${score} / 15 (Need 10 / 15 to Unlock Next)`}
          </h3>
          <p style="color:var(--text-secondary);margin:0 0 1.1rem;">
            ${
              passed
                ? `Fantastic mastery of ${mod.title}! The next stage on your Pink Arithmetic Roadmap is now unlocked!`
                : `Review the blueprint formulas in ${mod.title} and challenge ${tier.animal} again!`
            }
          </p>
          <div style="display:flex;justify-content:center;gap:0.65rem;flex-wrap:wrap;">
            <button type="button" class="verses-cta-secondary" id="arith-raid-retry">🔄 Play 15 MCQs Again</button>
            <button type="button" class="verses-cta-primary" id="arith-raid-done-btn">
              ${passed && MODULES[modIdx + 1] ? `🚀 Continue to Ch ${modIdx + 2} →` : "🗺️ Return to Roadmap"}
            </button>
          </div>
        </div>
      `;
      document.getElementById("arith-raid-close")?.addEventListener("click", closeArithRaid);
      document.getElementById("arith-raid-retry")?.addEventListener("click", () => startArithRaid(mod.id));
      document.getElementById("arith-raid-done-btn")?.addEventListener("click", () => {
        const next = MODULES[modIdx + 1];
        closeArithRaid();
        if (passed && next) {
          openArithLesson(next.id);
        } else {
          switchArithSubTab("roadmap");
        }
      });
      return;
    }

    const cur = questions[qIndex];
    const bossHpPct = Math.max(0, Math.round(((15 - score) / 15) * 100));

    box.innerHTML = `
      <div class="rpg-battle-topbar">
        <span class="rpg-battle-badge">⚔️ ${mod.grade} • Q ${qIndex + 1} / 15</span>
        <div class="rpg-combo-pill">💖 Score: ${score} / 15 (Pass: 10)</div>
        <button type="button" class="rpg-close-btn" id="arith-raid-close">✕ Retreat</button>
      </div>
      <div class="rpg-combatants-row">
        <div class="rpg-fighter-box player-side">
          <img src="logo.png?v=44" alt="Mr.mmhk & You" class="rpg-fighter-img" />
          <div class="rpg-fighter-info">
            <div class="rpg-fighter-name">You &amp; Mr.mmhk</div>
            <div style="font-size:0.78rem;color:#fbcfe8;font-weight:800;">✨ Correct: ${score}</div>
          </div>
        </div>
        <div class="rpg-vs-emblem">VS</div>
        <div class="rpg-fighter-box boss-side">
          <div class="rpg-fighter-info" style="text-align:right;">
            <div class="rpg-fighter-name">${tier.animal}</div>
            <div class="rpg-hp-track"><div class="rpg-hp-fill" style="width:${bossHpPct}%"></div></div>
            <div class="rpg-hp-text">Boss Shield ${bossHpPct}%</div>
          </div>
          <img src="${tier.img}" alt="${tier.animal}" class="rpg-fighter-img boss-glow" />
        </div>
      </div>
      <div class="rpg-battle-body" style="padding:1.15rem;">
        <div style="font-size:1.04rem;font-weight:800;margin-bottom:0.9rem;">${cur.q}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:0.55rem;" id="arith-raid-opts">
          ${cur.opts
            .map(
              (opt, oIdx) => `
            <button type="button" class="verses-cta-secondary" style="justify-content:flex-start;text-align:left;" data-raid-opt="${oIdx}">
              <strong style="color:#fde047;margin-right:0.35rem;">${String.fromCharCode(65 + oIdx)}.</strong> <span>${opt}</span>
            </button>
          `
            )
            .join("")}
        </div>
        <div id="arith-raid-feedback" style="margin-top:0.85rem;min-height:1.6rem;font-weight:800;"></div>
      </div>
    `;

    typesetArith(box);

    document.getElementById("arith-raid-close")?.addEventListener("click", closeArithRaid);
    box.querySelectorAll("[data-raid-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (raidState.answered) return;
        raidState.answered = true;
        const pick = Number(btn.dataset.raidOpt);
        const fb = document.getElementById("arith-raid-feedback");
        if (pick === cur.ans) {
          raidState.score += 1;
          btn.style.borderColor = "#4ade80";
          btn.style.background = "rgba(22, 163, 74, 0.32)";
          if (fb) fb.innerHTML = `<span style="color:#4ade80;">💥 Critical Hit! Correct Answer!</span>`;
        } else {
          btn.style.borderColor = "#fb7185";
          btn.style.background = "rgba(225, 29, 72, 0.32)";
          const rightBtn = box.querySelector(`[data-raid-opt="${cur.ans}"]`);
          if (rightBtn) rightBtn.style.borderColor = "#4ade80";
          if (fb) fb.innerHTML = `<span style="color:#fda4af;">🛡️ Blocked! Correct option highlighted in green.</span>`;
        }
        setTimeout(() => {
          if (!raidState) return;
          raidState.qIndex += 1;
          raidState.answered = false;
          renderArithRaidStep();
        }, 850);
      });
    });
  }

  /* ------------------------------------------------------------------------
     Complete Beginning-to-Olympiad Arithmetic Formula Vault
     ------------------------------------------------------------------------ */
  function renderArithVault() {
    const mount = document.getElementById("arith-vault-mount");
    if (!mount) return;
    const q = (document.getElementById("arith-vault-search")?.value || "").trim().toLowerCase();

    const filtered = MODULES.filter((m) => {
      if (vaultTierFilter !== "ALL" && m.tierId !== vaultTierFilter) return false;
      if (!q) return true;
      const hay = `${m.title} ${m.subtitle} ${m.theory} ${(m.formulas || []).map((f) => f.name).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });

    const pillsEl = document.getElementById("arith-vault-pills");
    if (pillsEl) {
      pillsEl.innerHTML =
        `<button type="button" class="lab-pill ${vaultTierFilter === "ALL" ? "active" : ""}" data-av-tier="ALL">All 7 Realms (${MODULES.length})</button>` +
        TIERS.map(
          (t, i) =>
            `<button type="button" class="lab-pill ${vaultTierFilter === t.id ? "active" : ""}" data-av-tier="${t.id}">Realm ${i + 1}: ${t.shortTag}</button>`
        ).join("");
      pillsEl.querySelectorAll("[data-av-tier]").forEach((b) => {
        b.addEventListener("click", () => {
          vaultTierFilter = b.dataset.avTier || "ALL";
          renderArithVault();
        });
      });
    }

    mount.innerHTML = filtered.length
      ? `<div class="formula-cards-grid">${filtered
          .map(
            (m) => `
          <div class="formula-card" style="--card-accent:#ec4899;">
            <div class="formula-card-top">
              <div class="formula-card-head">
                <div class="formula-head-left">
                  <span class="formula-num-badge" style="background:linear-gradient(135deg,#ec4899,#be185d);">#${m.num}</span>
                  <span class="formula-ch-chip">${m.grade}</span>
                </div>
                <button type="button" class="yt-ext-link" data-vault-open-ch="${m.id}">📖 Study →</button>
              </div>
              <h3 class="formula-card-title">${m.title}</h3>
              <div class="vault-eq-grid">
                ${(m.formulas || [])
                  .map(
                    (f, idx) => `
                  <div class="vault-eq-plate vault-eq-plate-full">
                    <span class="vault-eq-step">${idx + 1}</span>
                    <div class="vault-eq-math">
                      <div style="font-size:0.74rem;font-weight:800;color:#fbcfe8;">${f.name}</div>
                      <div>${f.tex}</div>
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        `
          )
          .join("")}</div>`
      : `<div class="callout callout-pitfall">No Arithmetic formulas matched your search.</div>`;

    typesetArith(mount);
    mount.querySelectorAll("[data-vault-open-ch]").forEach((b) => {
      b.addEventListener("click", () => openArithLesson(b.dataset.vaultOpenCh));
    });
  }

  /* ------------------------------------------------------------------------
     Interactive Arithmetic Solver & Visual Lab Workbench
     ------------------------------------------------------------------------ */
  function gcd(a, b) {
    a = Math.abs(Math.trunc(a));
    b = Math.abs(Math.trunc(b));
    while (b) {
      [a, b] = [b, a % b];
    }
    return a || 1;
  }

  function primeFactorize(n) {
    n = Math.max(2, Math.min(100000000, Math.abs(Math.trunc(n))));
    const factors = [];
    let d = 2;
    let temp = n;
    while (d * d <= temp) {
      let count = 0;
      while (temp % d === 0) {
        temp /= d;
        count += 1;
      }
      if (count > 0) factors.push([d, count]);
      d += d === 2 ? 1 : 2;
    }
    if (temp > 1) factors.push([temp, 1]);
    return factors;
  }

  function renderArithSolver() {
    const mount = document.getElementById("arith-solver-mount");
    if (!mount || mount.dataset.wired === "1") return;
    mount.dataset.wired = "1";

    mount.innerHTML = `
      <div class="formula-cards-grid">
        <!-- Tool 1: Prime Factorization, Divisor Count & GCD/LCM -->
        <div class="section-card">
          <h3 style="margin-top:0;">🔢 Prime Factorizer, Divisors $\\tau(N)$, GCD &amp; LCM</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;margin-bottom:0.75rem;">
            <div>
              <label style="font-size:0.78rem;font-weight:700;">Integer $A$:</label>
              <input type="number" id="ar-sol-a" class="mrmmhk-text-input" value="360" min="2" max="99999999" />
            </div>
            <div>
              <label style="font-size:0.78rem;font-weight:700;">Integer $B$:</label>
              <input type="number" id="ar-sol-b" class="mrmmhk-text-input" value="150" min="2" max="99999999" />
            </div>
          </div>
          <div id="ar-sol-prime-out" class="section-card" style="background:var(--bg-code);padding:0.85rem;"></div>
        </div>

        <!-- Tool 2: Number Base Converter (Binary, Octal, Decimal, Hex) -->
        <div class="section-card">
          <h3 style="margin-top:0;">💻 Instant Base-$b$ Converter (Base 2, 8, 10, 16)</h3>
          <div style="margin-bottom:0.75rem;">
            <label style="font-size:0.78rem;font-weight:700;">Decimal Integer ($N_{10}$):</label>
            <input type="number" id="ar-sol-base" class="mrmmhk-text-input" value="2026" min="0" max="999999999" />
          </div>
          <div id="ar-sol-base-out" class="section-card" style="background:var(--bg-code);padding:0.85rem;"></div>
        </div>

        <!-- Tool 3: Percentage, Profit & Compound Interest Lab -->
        <div class="section-card">
          <h3 style="margin-top:0;">💰 Percentage, SI &amp; Compound Interest Solver</h3>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;margin-bottom:0.75rem;">
            <div>
              <label style="font-size:0.75rem;font-weight:700;">Principal $P$:</label>
              <input type="number" id="ar-ci-p" class="mrmmhk-text-input" value="1000" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;">Rate $r\\%$:</label>
              <input type="number" id="ar-ci-r" class="mrmmhk-text-input" value="10" step="0.5" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;">Years $t$:</label>
              <input type="number" id="ar-ci-t" class="mrmmhk-text-input" value="3" />
            </div>
          </div>
          <div id="ar-sol-ci-out" class="section-card" style="background:var(--bg-code);padding:0.85rem;"></div>
        </div>
      </div>
    `;

    typesetArith(mount);

    const updatePrime = () => {
      const a = Math.max(2, Number(document.getElementById("ar-sol-a")?.value) || 360);
      const b = Math.max(2, Number(document.getElementById("ar-sol-b")?.value) || 150);
      const fa = primeFactorize(a);
      const tauA = fa.reduce((acc, [, e]) => acc * (e + 1), 1);
      const g = gcd(a, b);
      const l = Math.round((a / g) * b);
      const simpA = Math.round(a / g);
      const simpB = Math.round(b / g);
      const out = document.getElementById("ar-sol-prime-out");
      if (out) {
        out.innerHTML = `
          <div><strong>Prime Factorization of ${a}:</strong> ${fa.map(([p, e]) => `${p}<sup>${e}</sup>`).join(" × ")}</div>
          <div style="margin-top:0.3rem;"><strong>Total Divisors τ(${a}):</strong> ${tauA} divisors</div>
          <div style="margin-top:0.3rem;"><strong>GCD(${a}, ${b}):</strong> ${g} &nbsp;•&nbsp; <strong>LCM(${a}, ${b}):</strong> ${l.toLocaleString()}</div>
          <div style="margin-top:0.3rem;"><strong>Simplified Fraction ${a}/${b}:</strong> ${simpA} / ${simpB} (${(a / b).toFixed(4)})</div>
        `;
      }
    };

    const updateBase = () => {
      const n = Math.max(0, Math.trunc(Number(document.getElementById("ar-sol-base")?.value) || 0));
      const out = document.getElementById("ar-sol-base-out");
      if (out) {
        out.innerHTML = `
          <div><strong>Binary (Base 2):</strong> <code>${n.toString(2)}₂</code></div>
          <div style="margin-top:0.3rem;"><strong>Octal (Base 8):</strong> <code>${n.toString(8)}₈</code></div>
          <div style="margin-top:0.3rem;"><strong>Hexadecimal (Base 16):</strong> <code>${n.toString(16).toUpperCase()}₁₆</code></div>
          <div style="margin-top:0.3rem;"><strong>Trailing Zeros in ${Math.min(n, 10000)}!:</strong> ${(() => {
            let z = 0, m = Math.min(n, 10000);
            while (m >= 5) { m = Math.floor(m / 5); z += m; }
            return z;
          })()}</div>
        `;
      }
    };

    const updateCi = () => {
      const P = Number(document.getElementById("ar-ci-p")?.value) || 1000;
      const r = Number(document.getElementById("ar-ci-r")?.value) || 10;
      const t = Number(document.getElementById("ar-ci-t")?.value) || 3;
      const si = (P * r * t) / 100;
      const amt = P * Math.pow(1 + r / 100, t);
      const ci = amt - P;
      const out = document.getElementById("ar-sol-ci-out");
      if (out) {
        out.innerHTML = `
          <div><strong>Simple Interest (SI):</strong> $${si.toFixed(2)} (Total: $${(P + si).toFixed(2)})</div>
          <div style="margin-top:0.3rem;"><strong>Compound Interest (CI):</strong> $${ci.toFixed(2)} (Total: $${amt.toFixed(2)})</div>
          <div style="margin-top:0.3rem;color:#fde047;"><strong>Extra Compound Gain (CI − SI):</strong> $${(ci - si).toFixed(2)}</div>
        `;
      }
    };

    ["ar-sol-a", "ar-sol-b"].forEach((id) => document.getElementById(id)?.addEventListener("input", updatePrime));
    document.getElementById("ar-sol-base")?.addEventListener("input", updateBase);
    ["ar-ci-p", "ar-ci-r", "ar-ci-t"].forEach((id) => document.getElementById(id)?.addEventListener("input", updateCi));

    updatePrime();
    updateBase();
    updateCi();
  }

  function initArithQuest() {
    document.querySelectorAll("[data-arith-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchArithSubTab(btn.dataset.arithTab);
      });
    });

    document.getElementById("arith-jump-active")?.addEventListener("click", () => {
      const fId = getFrontierModuleId();
      selectedPopoverId = fId;
      renderArithQuestTrail();
      document.getElementById(`arith-stone-row-${fId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById("arith-vault-search")?.addEventListener("input", renderArithVault);

    document.getElementById("arith-raid-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "arith-raid-modal") closeArithRaid();
    });

    renderArithQuestTrail();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initArithQuest);
  } else {
    initArithQuest();
  }

  window.ARITH_QUEST = {
    openSubTab: switchArithSubTab,
    openLesson: openArithLesson,
    refreshRoadmap: renderArithQuestTrail
  };
})();
