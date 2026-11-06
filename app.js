/* ==========================================================================
   TrigVerse Main Application Controller (Chapters 1 → 44)
   ========================================================================== */

(function () {
  const C1_5 = window.TRIG_CH_1_TO_5 || [];
  const C6_10 = window.TRIG_CH_6_TO_10 || [];
  const U = window.TRIG_ULTRA_MODULES || {};
  const C11A = window.TRIG_CLASS11A_MODULES || [];
  const C11B_12 = window.TRIG_CLASS11B_12_MODULES || [];
  const C12_INV = window.TRIG_CLASS12_INVERSE_EQ || {};
  const C11_16 = window.TRIG_CH_11_TO_16 || [];

  const findById = (arr, id) => arr.find((x) => x.id === id);

  // Assemble the seamless 44-Chapter Master Sequence
  const RAW_MODULES = [
    ...C1_5,                                        // Ch 1–5: Intro, Angles & Measurement, Degree & Radian, Primary & Reciprocal Ratios
    findById(C6_10, "ch-6-standard-angles"),        // Ch 6: Trigonometric Ratios of Standard Angles
    U.complementaryAngles,                          // Ch 7: Trigonometric Ratios of Complementary Angles (Ultra)
    U.findingUnknownRatios,                         // Ch 8: Finding Unknown Trigonometric Ratios (Ultra)
    findById(C6_10, "ch-8-unknown-sides"),          // Ch 9: Finding Unknown Sides of Right-Angled Triangles
    findById(C6_10, "ch-9-unknown-angles"),         // Ch 10: Finding Unknown Angles
    U.identitiesUltra,                              // Ch 11: Fundamental Trigonometric Identities (Ultra)
    U.simplificationUltra,                          // Ch 12: Simplification of Trigonometric Expressions (Ultra)
    U.provingIdentitiesUltra,                       // Ch 13: Proving Trigonometric Identities (Ultra)
    findById(C6_10, "ch-10-heights-distances"),     // Ch 14: Heights & Distances (Part 1: Core Blueprints)
    U.heightsAdvancedUltra,                         // Ch 15: Heights & Distances (Part 2: Boss Problems) (Ultra)
    ...C11A,                                        // Ch 16–23: Trig Functions, Any Angle, Quadrants, Domain/Range, Periodicity, Graphs, Compound, Double-Angle
    findById(C11B_12, "ch-24-triple-angle"),        // Ch 24: Triple-Angle Formulas
    findById(C11B_12, "ch-25-half-angle"),          // Ch 25: Half-Angle Formulas
    findById(C11B_12, "ch-26-sum-to-product"),      // Ch 26: Sum-to-Product Formulas
    findById(C11B_12, "ch-27-product-to-sum"),      // Ch 27: Product-to-Sum Formulas
    C12_INV.identitiesTransformations,              // Ch 28: Trigonometric Identities and Transformations (Ultra)
    findById(C11B_12, "ch-28-trig-equations"),      // Ch 29: Trigonometric Equations
    findById(C11B_12, "ch-29-general-solutions"),   // Ch 30: General Solutions of Trigonometric Equations
    C12_INV.solvingEqUsingIdentities,               // Ch 31: Solving Trigonometric Equations Using Identities (Ultra)
    findById(C11B_12, "ch-30-oblique-laws"),        // Ch 32: Laws of Sines, Cosines & Oblique Triangles
    C12_INV.inverseTrigFoundations,                 // Ch 33: Inverse Trigonometric Functions (Ultra)
    C12_INV.inverseDomainRange,                     // Ch 34: Domain and Range of Inverse Trigonometric Functions (Ultra)
    C12_INV.inversePrincipalValues,                 // Ch 35: Principal Values of Inverse Trigonometric Functions (Ultra)
    C12_INV.inverseProperties,                      // Ch 36: Properties of Inverse Trigonometric Functions (Ultra)
    C12_INV.inverseIdentitiesAndEquations,          // Ch 37: Inverse Trigonometric Identities & Equations (Ultra)
    C12_INV.simplificationAdvancedInverse,          // Ch 38: Simplification of Trigonometric & Inverse Expressions (Ultra)
    C12_INV.proofIdentitiesAdvancedInverse,         // Ch 39: Proof of Trigonometric & Inverse Identities (Ultra)
    findById(C11B_12, "ch-32-trig-calculus"),       // Ch 40: Trigonometric Limits, Derivatives & Integrals
    ...C11_16,                                      // Ch 41–43: Euler/Spherical, Fourier Analysis, Complex & Lie Groups
    window.TRIG_GRAND_SUMMARY_CHAPTER               // Ch 44 (LAST): Grand Master Summary — All 4 Syllabus Stages
  ].filter(Boolean);

  const TIER_STAGE_TAGS = {
    "tier-1": "Angle Genesis",
    "tier-2": "Ratio Forge",
    "tier-3": "Identity Citadel",
    "tier-4": "Wave Observatory",
    "tier-5": "Multi-Angle Arena",
    "tier-6": "Inverse & Advanced",
    "tier-7": "Master Summary"
  };

  // Normalize sequential numbering (Ch 1 .. Ch 44) with realm stage tags
  const MODULES = RAW_MODULES.map((m, idx) => {
    const num = idx + 1;
    const cleanTitle = m.title.replace(/^\d+\.\s*/, "");
    const stageTag = TIER_STAGE_TAGS[m.tierId] || "Trigonometry";
    return {
      ...m,
      title: `${num}. ${cleanTitle}`,
      grade: `Ch ${num} • ${stageTag}`
    };
  });

  const VALID_IDS = new Set(MODULES.map((m) => m.id));
  const TIERS = window.TRIG_TIERS || [];
  const FORMULA_SECTIONS = window.TRIG_FORMULA_SECTIONS || [];
  const FORMULAS = window.TRIG_FORMULA_VAULT || [];

  let currentVaultSection = "ALL";
  const collapsedVaultSections = new Set();

  const STORAGE_KEY_COMPLETED = "trigverse_completed_v2";
  const STORAGE_KEY_THEME = "trigmastery_theme_v1";
  const STORAGE_KEY_RPG = "trigverse_rpg_state_v1";

  let completedSet = new Set(
    JSON.parse(localStorage.getItem(STORAGE_KEY_COMPLETED) || "[]").filter((id) => VALID_IDS.has(id))
  );
  let rpgState = Object.assign(
    { petImg: "animals/tiger.png", petName: "Frost-Flame Tiger", bonusXp: 0, bonusGems: 0, claimedChests: [], raidWins: 0 },
    JSON.parse(localStorage.getItem(STORAGE_KEY_RPG) || "{}")
  );
  let currentModuleId = MODULES[0]?.id || "ch-1-intro";
  let currentViewId = "roadmap";
  let activeLessonRedraw = null;
  let activeHubRedraw = null;

  function isMobileViewport() {
    return typeof window !== "undefined" && window.innerWidth <= 640;
  }

  function triggerHaptic(pattern = 12) {
    try {
      if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
        navigator.vibrate(pattern);
      }
    } catch (_) {
      /* ignore unsupported devices */
    }
  }

  function scrollChipIntoView(el, smooth = true) {
    if (!el) return;
    const rail = el.parentElement;
    if (!rail || rail.scrollWidth <= rail.clientWidth) return;
    try {
      const railRect = rail.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const targetLeft =
        rail.scrollLeft + (elRect.left - railRect.left) - Math.max(0, (railRect.width - elRect.width) / 2);
      rail.scrollTo({ left: Math.max(0, targetLeft), behavior: smooth ? "smooth" : "auto" });
    } catch (_) {
      /* ignore */
    }
  }

  /* ------------------------------------------------------------------------
     Math Rendering (KaTeX CDN + Graceful Offline Unicode Fallback)
     ------------------------------------------------------------------------ */
  function typesetMath(rootEl) {
    if (!rootEl) return;
    if (typeof window.renderMathInElement === "function") {
      try {
        window.renderMathInElement(rootEl, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
        return;
      } catch (err) {
        console.warn("KaTeX fallback triggered:", err);
      }
    }
    // Offline fallback if CDN wasn't reachable
    const html = rootEl.innerHTML
      .replace(/\$\$([\s\S]*?)\$\$/g, '<div class="offline-math-block">$1</div>')
      .replace(/\$([^$]+)\$/g, '<code class="offline-math-inline">$1</code>')
      .replace(/\\theta/g, "θ")
      .replace(/\\pi/g, "π")
      .replace(/\\alpha/g, "α")
      .replace(/\\beta/g, "β")
      .replace(/\\omega/g, "ω")
      .replace(/\\phi/g, "φ")
      .replace(/\\Delta/g, "Δ")
      .replace(/\\infty/g, "∞")
      .replace(/\^\\circ/g, "°")
      .replace(/\\pm/g, "±")
      .replace(/\\mp/g, "∓")
      .replace(/\\le/g, "≤")
      .replace(/\\ge/g, "≥")
      .replace(/\\neq/g, "≠")
      .replace(/\\approx/g, "≈")
      .replace(/\\implies/g, "⟹")
      .replace(/\\iff/g, "⟺");
    rootEl.innerHTML = html;
  }

  function formatInlineMarkdownBold(str) {
    return str.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  /* ------------------------------------------------------------------------
     Progress, RPG Profile & Theme Persistence
     ------------------------------------------------------------------------ */
  const RPG_RANKS = [
    { minLv: 1, title: "🗡️ Angle Squire" },
    { minLv: 6, title: "🏹 Ratio Ranger" },
    { minLv: 11, title: "🛡️ Identity Knight" },
    { minLv: 16, title: "⚡ Quadrant Paladin" },
    { minLv: 26, title: "🔥 Wave Archmage" },
    { minLv: 36, title: "👑 Inverse Sovereign" },
    { minLv: 44, title: "🐉 TrigVerse Grandmaster" }
  ];

  function saveRpgState() {
    localStorage.setItem(STORAGE_KEY_RPG, JSON.stringify(rpgState));
  }

  function showLootToast(msg) {
    const stack = document.getElementById("rpg-toast-stack");
    if (!stack) return;
    const el = document.createElement("div");
    el.className = "rpg-toast";
    el.textContent = msg;
    stack.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }

  function getRpgComputed() {
    const count = completedSet.size;
    const frontierIdx = getUnlockedMaxIndex();
    const allCompleted = MODULES.length > 0 && count >= MODULES.length;
    // Level increases strictly 1-by-1 from Chapter to Chapter ONLY (Ch 1 = Lv. 1 ... Ch 44 = Lv. 44)
    const level = frontierIdx + 1;
    const totalXp = count * 50 + (rpgState.bonusXp || 0);
    const totalGems = 500 + count * 45 + (rpgState.bonusGems || 0);
    const xpIntoLv = allCompleted ? 100 : 0;
    const rankObj = [...RPG_RANKS].reverse().find((r) => level >= r.minLv) || RPG_RANKS[0];
    return { count, totalXp, totalGems, level, allCompleted, xpIntoLv, rankTitle: rankObj.title };
  }

  /* ------------------------------------------------------------------------
     Step-by-Step Level Locking & Sequential Unlocking Helpers
     ------------------------------------------------------------------------ */
  function getUnlockedMaxIndex() {
    const firstIncomplete = MODULES.findIndex((m) => !completedSet.has(m.id));
    return firstIncomplete === -1 ? MODULES.length - 1 : firstIncomplete;
  }

  function isModuleUnlocked(modIdOrIdx) {
    const idx =
      typeof modIdOrIdx === "number" ? modIdOrIdx : MODULES.findIndex((m) => m.id === modIdOrIdx);
    if (idx < 0) return false;
    return idx <= getUnlockedMaxIndex();
  }

  function isTierUnlocked(tierId) {
    const firstIdx = MODULES.findIndex((m) => m.tierId === tierId);
    if (firstIdx < 0) return false;
    return firstIdx <= getUnlockedMaxIndex();
  }

  function notifyLockedModule(targetModId) {
    const frontierIdx = getUnlockedMaxIndex();
    const frontierMod = MODULES[frontierIdx] || MODULES[0];
    const shortFront = frontierMod ? frontierMod.grade.split("•")[0].trim() : "Ch 1";
    const targetMod = MODULES.find((m) => m.id === targetModId);
    const shortTarget = targetMod ? targetMod.grade.split("•")[0].trim() : "This level";
    showLootToast(
      `🔒 ${shortTarget} is Locked! Complete ${shortFront} (${frontierMod.title.replace(/^\d+\.\s*/, "")}) first to unlock step-by-step!`
    );
  }

  function completeModuleAndCelebrate(modId) {
    const idx = MODULES.findIndex((m) => m.id === modId);
    if (idx < 0) return;
    const wasAlreadyDone = completedSet.has(modId);
    completedSet.add(modId);
    saveProgress();

    if (!wasAlreadyDone) {
      triggerHaptic([18, 30, 22]);
      const curMod = MODULES[idx];
      const nextMod = MODULES[idx + 1];
      const newLevel = getUnlockedMaxIndex() + 1;
      if (nextMod && nextMod.tierId !== curMod.tierId) {
        const nextTierNum = TIERS.findIndex((t) => t.id === nextMod.tierId) + 1;
        const nextG = TIER_GUARDIANS[nextMod.tierId];
        showLootToast(
          `⬆️ LEVEL UP → Lv. ${newLevel}! Realm ${nextTierNum} (${nextG ? nextG.realmName : nextMod.grade}) Unlocked!`
        );
      } else if (nextMod) {
        const nextShort = nextMod.grade.split("•")[0].trim();
        showLootToast(
          `⬆️ LEVEL UP → Lv. ${newLevel}! ${nextShort}: ${nextMod.title.replace(/^\d+\.\s*/, "")} is now OPEN!`
        );
      } else {
        showLootToast("👑 MAX LEVEL 44 CONQUERED! All 44 Chapters & All 7 Realms 100% Mastered!");
      }
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify([...completedSet]));
    saveRpgState();
    selectedPopoverId = isMobileViewport() ? null : getFrontierModuleId();
    updateProgressUI();
    renderSidebar(document.getElementById("sidebar-search-input")?.value || "");
    renderRoadmapCards();
    renderRoadmapSummary();
    if (document.getElementById("view-lectures")?.classList.contains("active")) {
      renderLecturesTab();
    }
  }

  function updateProgressUI() {
    const { count, totalXp, totalGems, level, allCompleted, rankTitle } = getRpgComputed();
    const total = MODULES.length;
    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
    const streakVal = `${1 + count}`;
    const lvLabel = allCompleted ? `Lv. ${level} MAX` : `Lv. ${level}`;

    const txt = document.getElementById("progress-text");
    const bar = document.getElementById("progress-bar-fill");
    const heroStat = document.getElementById("stat-completed");
    const hudLv = document.getElementById("hud-level");
    const hudStreak = document.getElementById("hud-streak");
    const hudGems = document.getElementById("hud-gems");
    const hudXp = document.getElementById("hud-xp");
    const mobLv = document.getElementById("mob-hud-level");
    const mobStreak = document.getElementById("mob-hud-streak");
    const mobGems = document.getElementById("mob-hud-gems");

    if (txt) txt.textContent = `${count}/${total} Mastered (${pct}%)`;
    if (bar) bar.style.width = `${pct}%`;
    if (heroStat) heroStat.textContent = `${count}/${total}`;
    if (hudLv) hudLv.textContent = lvLabel;
    if (hudStreak) hudStreak.textContent = streakVal;
    if (hudGems) hudGems.textContent = `${totalGems}`;
    if (hudXp) hudXp.textContent = `${totalXp} XP`;
    if (mobLv) mobLv.textContent = lvLabel;
    if (mobStreak) mobStreak.textContent = streakVal;
    if (mobGems) mobGems.textContent = `${totalGems}`;

    // RPG Hero Command Deck updates
    const heroImg = document.getElementById("rpg-hero-avatar-img");
    const avatarLv = document.getElementById("rpg-avatar-lv");
    const rankEl = document.getElementById("rpg-rank-title");
    const xpNextEl = document.getElementById("rpg-xp-next");
    const xpFillEl = document.getElementById("rpg-xp-fill");

    if (heroImg) heroImg.src = rpgState.petImg;
    if (avatarLv) avatarLv.textContent = `LV ${level}`;
    if (rankEl) rankEl.textContent = `${rankTitle} • ${rpgState.petName}`;
    if (xpNextEl) {
      xpNextEl.textContent = allCompleted
        ? `All 44 Chapters Completed • MAX LV ${level}`
        : `Ch ${level} Active → Complete Ch ${level} for Lv ${Math.min(total, level + 1)}`;
    }
    if (xpFillEl) xpFillEl.style.width = `${Math.max(6, pct)}%`;

    document.querySelectorAll(".rpg-pet-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.pet === rpgState.petImg);
    });

    // Active Quest Bounty updates
    const frontierId = getFrontierModuleId();
    const bountyMod = MODULES.find((m) => m.id === frontierId) || MODULES[0];
    const bountyTitle = document.getElementById("rpg-bounty-title");
    if (bountyTitle && bountyMod) {
      bountyTitle.textContent = `${bountyMod.grade}: ${bountyMod.title.replace(/^\d+\.\s*/, "")}`;
    }
  }

  function syncThemeMetaColor(theme) {
    const meta = document.getElementById("meta-theme-color");
    if (meta) meta.setAttribute("content", theme === "light" ? "#ea580c" : "#2b0e04");
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY_THEME) || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    syncThemeMetaColor(saved);
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) btn.textContent = saved === "light" ? "🌙" : "☀️";
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", cur);
    localStorage.setItem(STORAGE_KEY_THEME, cur);
    syncThemeMetaColor(cur);
    triggerHaptic(10);
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) btn.textContent = cur === "light" ? "🌙" : "☀️";
    if (typeof activeLessonRedraw === "function") activeLessonRedraw();
    if (typeof activeHubRedraw === "function") activeHubRedraw();
    runTriangleSolver();
  }

  /* ------------------------------------------------------------------------
     View Switching (Desktop Top Tabs + Mobile Bottom Nav + History Back)
     ------------------------------------------------------------------------ */
  function switchView(viewId, fromOpenModule = false, skipPushHistory = false) {
    currentViewId = viewId;
    const raidModal = document.getElementById("rpg-battle-modal");
    if (raidModal && !raidModal.hidden) {
      closeBossRaid();
    } else {
      document.body.style.overflow = "";
    }
    document.querySelectorAll(".view-panel").forEach((p) => p.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.view === viewId);
    });

    const isSubView = viewId === "lesson" || viewId === "summary";
    const mobileTabMatch = isSubView ? "roadmap" : viewId;
    document.querySelectorAll(".mobile-nav-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.view === mobileTabMatch);
    });

    const backBtn = document.getElementById("mobile-back-btn");
    if (backBtn) backBtn.hidden = !isSubView;

    const target = document.getElementById(`view-${viewId}`);
    if (target) target.classList.add("active");

    if (!skipPushHistory && window.history && typeof window.history.pushState === "function") {
      const targetHash = `#${viewId}`;
      if (window.location.hash !== targetHash) {
        try {
          window.history.pushState({ view: viewId, mod: currentModuleId }, "", targetHash);
        } catch (_) {
          /* ignore file:// history restrictions */
        }
      }
    }

    if (viewId === "lesson" && !fromOpenModule) {
      if (!isModuleUnlocked(currentModuleId)) {
        currentModuleId = getFrontierModuleId();
        openModule(currentModuleId);
        return;
      }
      const lc = document.getElementById("lesson-container");
      if (lc && !lc.innerHTML.trim()) {
        openModule(currentModuleId);
        return;
      }
      if (typeof activeLessonRedraw === "function") activeLessonRedraw();
    } else if (viewId === "playground") {
      mountPlaygroundLab(currentHubLab);
    } else if (viewId === "solver") {
      runAngleEvaluator();
      runInverseAndEquationSolver();
      runIdentityProofWorkbench();
      runTriangleSolver();
    } else if (viewId === "vault") {
      renderFormulaVault();
    } else if (viewId === "summary") {
      renderSummaryTab();
    } else if (viewId === "lectures") {
      renderLecturesTab();
    }
    if (window.innerWidth <= 768) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /* ------------------------------------------------------------------------
     Sidebar & Roadmap Rendering
     ------------------------------------------------------------------------ */
  function renderSidebar(filterText = "") {
    const navEl = document.getElementById("sidebar-curriculum");
    if (!navEl) return;
    const q = filterText.trim().toLowerCase();

    let html = "";
    const frontierId = getFrontierModuleId();
    TIERS.forEach((tier, tIdx) => {
      const mods = MODULES.filter((m) => {
        if (m.tierId !== tier.id) return false;
        if (!q) return true;
        return (
          m.grade.toLowerCase().includes(q) ||
          m.title.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
      if (mods.length === 0) return;

      const allTierMods = MODULES.filter((m) => m.tierId === tier.id);
      const tierDone = allTierMods.length > 0 && allTierMods.every((m) => completedSet.has(m.id));
      const tierOpen = isTierUnlocked(tier.id);
      const tierStatusIcon = tierDone ? "👑" : tierOpen ? "🔓" : "🔒";

      html += `
        <div class="tier-group">
          <div class="tier-header">
            <span class="tier-dot" style="background:${tierOpen ? tier.color : "#64748b"}"></span>
            <span>${tierStatusIcon} Realm ${tIdx + 1}: ${tier.name.replace(/^Group \d:\s*/, "")}</span>
          </div>
          ${mods
            .map((m) => {
              const isDone = completedSet.has(m.id);
              const unlocked = isModuleUnlocked(m.id);
              const isFrontier = m.id === frontierId && !isDone;
              const isActive = m.id === currentModuleId && unlocked;
              const statusBadge = isDone ? "✓" : isFrontier ? "⚡" : unlocked ? "•" : "🔒";
              return `
                <button class="module-item ${isActive ? "active" : ""} ${!unlocked ? "locked-module" : ""} ${isFrontier ? "frontier-module" : ""}" data-module-id="${m.id}">
                  <span class="module-item-left">
                    <span class="class-badge">${m.grade}</span>
                    <span class="module-item-title" title="${m.title}">${m.title}</span>
                  </span>
                  <span class="module-check">${statusBadge}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      `;
    });

    navEl.innerHTML = html || `<p style="padding:0.75rem;color:var(--text-muted);font-size:0.86rem;">No matching levels found.</p>`;

    navEl.querySelectorAll(".module-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        openModule(btn.dataset.moduleId);
        document.getElementById("sidebar")?.classList.remove("open");
      });
    });
  }

  /* ------------------------------------------------------------------------
     Duolingo-Style Winding Orange Quest Trail + 6 Logo Animal Guardians
     ------------------------------------------------------------------------ */
  const TIER_GUARDIANS = {
    "tier-1": {
      animal: "Ember Ant",
      realmName: "Angle & Radian Genesis",
      shortTag: "Angle Genesis",
      img: "animals/ant.png",
      side: "side-left",
      quote: "Step by step! Intro, DMS Angles, Degrees & Radians!",
      vaultFilter: "Ch 1"
    },
    "tier-2": {
      animal: "Blaze Fox",
      realmName: "Right-Triangle Ratio Forge",
      shortTag: "Ratio Forge",
      img: "animals/fox.png",
      side: "side-right",
      quote: "Primary (sin, cos, tan), Reciprocal (cosec, sec, cot) & Standard Angles!",
      vaultFilter: "Ch 4"
    },
    "tier-3": {
      animal: "Zen Panda",
      realmName: "Identity Citadel & Surveyor Peaks",
      shortTag: "Identity Citadel",
      img: "animals/panda.png",
      side: "side-left",
      quote: "Identities, Simplification, Proofs, Sides/Angles & Heights/Distances!",
      vaultFilter: "Ch 11"
    },
    "tier-4": {
      animal: "Solar Eagle",
      realmName: "Unit-Circle & Wave Observatory",
      shortTag: "Wave Observatory",
      img: "animals/eagle.png",
      side: "side-right",
      quote: "Circular Functions, Any Angle, ASTC Signs, Domain/Range, Periodicity & Graphs!",
      vaultFilter: "Ch 16"
    },
    "tier-5": {
      animal: "Frost-Flame Tiger",
      realmName: "Multi-Angle Alchemy & Equations",
      shortTag: "Multi-Angle Arena",
      img: "animals/tiger.png",
      side: "side-left",
      quote: "Compound, Multiple/Half, Sum/Product, Transformations & Identity Trig Equations!",
      vaultFilter: "Ch 22"
    },
    "tier-6": {
      animal: "Apex Shadow Wolf",
      realmName: "Inverse Arcana, Calculus & Fourier",
      shortTag: "Inverse Arcana",
      img: "animals/wolf.png",
      side: "side-right",
      quote: "Inverse Trig (Domain/Range, Principal Values & Properties), Simplification, Proofs & Lie Groups!",
      vaultFilter: "Ch 33"
    },
    "tier-7": {
      animal: "Celestial Crest Boss",
      realmName: "Grandmaster Synthesis Citadel",
      shortTag: "Synthesis Citadel",
      img: "logo.png",
      side: "side-left",
      quote: "Final Citadel! Conquer all 4 Trigonometry Groups to claim Grandmaster Glory!",
      vaultFilter: "Ch 44"
    }
  };

  function getStoneIconSvg(isDone, index, isBoss = false, isLocked = false) {
    if (isLocked) {
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <path d="M12 16V12.5C12 9.186 14.686 6.5 18 6.5C21.314 6.5 24 9.186 24 12.5V16" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
        <rect x="8.5" y="15.5" width="19" height="14.5" rx="3.5" fill="#334155" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="18" cy="21.5" r="2.1" fill="#fde047"/>
        <path d="M18 23.2V26.3" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
    }
    if (isDone) {
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <path d="M8 18.5L15 25.5L28.5 11.5" stroke="#fffbeb" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    }
    if (isBoss) {
      // Crossed Swords & Crown Boss Emblem SVG!
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <path d="M7 28L27 8M27 8H20M27 8V15" stroke="#fef08a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29 28L9 8M9 8H16M9 8V15" stroke="#fff7ed" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 24L15 19L18 22L21 19L24 24H12Z" fill="#fde047" stroke="#7c2d12" stroke-width="1.3"/>
      </svg>`;
    }
    const mode = index % 3;
    if (mode === 0) {
      // Open Book SVG (just like screenshot!)
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <path d="M6 10C10.5 10 14.5 11.5 18 14C21.5 11.5 25.5 10 30 10V26C25.5 26 21.5 27.2 18 29.5C14.5 27.2 10.5 26 6 26V10Z" fill="#fff7ed" stroke="#9a3412" stroke-width="2" stroke-linejoin="round"/>
        <path d="M18 14V29.5" stroke="#9a3412" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
    }
    if (mode === 1) {
      // Dumbbell Practice SVG (just like screenshot!)
      return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="12" width="5" height="12" rx="2" fill="#fff7ed"/>
        <rect x="25" y="12" width="5" height="12" rx="2" fill="#fff7ed"/>
        <rect x="10" y="15.5" width="16" height="5" rx="2" fill="#ffedd5"/>
        <rect x="3.5" y="14.5" width="3" height="7" rx="1.5" fill="#fed7aa"/>
        <rect x="29.5" y="14.5" width="3" height="7" rx="1.5" fill="#fed7aa"/>
      </svg>`;
    }
    // Star Mastery SVG
    return `<svg class="duo-stone-svg" viewBox="0 0 36 36" fill="none">
      <path d="M18 6.5L21.4 13.5L29.1 14.6L23.5 20L24.8 27.7L18 24.1L11.2 27.7L12.5 20L6.9 14.6L14.6 13.5L18 6.5Z" fill="#fff7ed" stroke="#9a3412" stroke-width="1.6" stroke-linejoin="round"/>
    </svg>`;
  }

  function getChestSvg(unlocked) {
    if (unlocked) {
      return `<svg class="duo-chest-svg" viewBox="0 0 80 72" fill="none">
        <rect x="10" y="28" width="60" height="36" rx="6" fill="#d97706" stroke="#78350f" stroke-width="3"/>
        <path d="M12 16C12 11 22 8 40 8C58 8 68 11 68 16L72 28H8L12 16Z" fill="#fbbf24" stroke="#78350f" stroke-width="3"/>
        <circle cx="32" cy="27" r="5" fill="#38bdf8"/>
        <circle cx="48" cy="26" r="5.5" fill="#fb923c"/>
        <circle cx="40" cy="24" r="6" fill="#fef08a"/>
        <rect x="10" y="34" width="60" height="6" fill="#f59e0b"/>
        <rect x="35" y="31" width="10" height="13" rx="3" fill="#fef08a" stroke="#78350f" stroke-width="2"/>
      </svg>`;
    }
    return `<svg class="duo-chest-svg" viewBox="0 0 80 72" fill="none">
      <rect x="10" y="26" width="60" height="38" rx="6" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
      <rect x="10" y="14" width="60" height="16" rx="5" fill="#fbbf24" stroke="#7c2d12" stroke-width="3"/>
      <rect x="18" y="14" width="8" height="50" fill="#fde047" opacity="0.85"/>
      <rect x="54" y="14" width="8" height="50" fill="#fde047" opacity="0.85"/>
      <rect x="34" y="24" width="12" height="15" rx="3" fill="#fef08a" stroke="#7c2d12" stroke-width="2.5"/>
      <circle cx="40" cy="30" r="2.3" fill="#7c2d12"/>
    </svg>`;
  }

  let selectedPopoverId = null;
  let popoverInitialized = false;
  let openRoadmapLectureTierId = null;
  let globalLectureLangMode = "en"; // "en" | "ur"
  let currentLecturesTierFilter = "ALL";

  function getFrontierModuleId() {
    const firstIncomplete = MODULES.find((m) => !completedSet.has(m.id));
    return firstIncomplete ? firstIncomplete.id : MODULES[MODULES.length - 1]?.id;
  }

  function buildWindingRoadSvg(offsets) {
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
        <path d="${d}" stroke="rgba(154, 52, 18, 0.45)" stroke-width="22" stroke-linecap="round" fill="none"/>
        <path d="${d}" stroke="rgba(251, 146, 60, 0.35)" stroke-width="14" stroke-linecap="round" fill="none"/>
        <path d="${d}" stroke="#fde047" stroke-width="3.5" stroke-dasharray="9 9" stroke-linecap="round" fill="none" opacity="0.85"/>
      </svg>
    `;
  }

  function renderWorldMinimap() {
    const mapEl = document.getElementById("rpg-world-minimap");
    if (!mapEl) return;
    mapEl.innerHTML = TIERS.map((tier, idx) => {
      const mods = MODULES.filter((m) => m.tierId === tier.id);
      const done = mods.filter((m) => completedSet.has(m.id)).length;
      const g = TIER_GUARDIANS[tier.id] || TIER_GUARDIANS["tier-1"];
      const cleared = mods.length > 0 && done === mods.length;
      const tierOpen = isTierUnlocked(tier.id);
      const statusIcon = cleared ? "👑" : tierOpen ? "🔓" : "🔒";
      return `
        <button type="button" class="rpg-world-node ${cleared ? "cleared" : tierOpen ? "unlocked-world" : "locked-world"}" data-teleport-unit="unit-realm-${idx + 1}">
          <img src="${g.img}" alt="${g.animal}" />
          <span>Realm ${idx + 1}: ${g.shortTag} (${done}/${mods.length}) ${statusIcon}</span>
        </button>
      `;
    }).join("");

    mapEl.querySelectorAll("[data-teleport-unit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const el = document.getElementById(btn.dataset.teleportUnit);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function renderQuestTrail() {
    const arena = document.getElementById("duo-path-arena");
    if (!arena) return;
    renderWorldMinimap();

    const frontierId = getFrontierModuleId();
    const unlockedMaxIdx = getUnlockedMaxIndex();
    const frontierMod = MODULES[unlockedMaxIdx] || MODULES[0];
    const frontierShort = frontierMod ? frontierMod.grade.split("•")[0].trim() : "Ch 1";
    if (!popoverInitialized) {
      popoverInitialized = true;
      selectedPopoverId = isMobileViewport() ? null : frontierId;
    }

    // Sine-wave horizontal offsets (in px) for smooth winding S-curve!
    const xCurve = [0, 56, -48, 52, -56, 48, -52, 56, -48, 52, -56, 0];
    let globalIdx = 0;

    arena.innerHTML = TIERS.map((tier, tIdx) => {
      const mods = MODULES.filter((m) => m.tierId === tier.id);
      const guardian = TIER_GUARDIANS[tier.id] || TIER_GUARDIANS["tier-1"];
      const tierDoneCount = mods.filter((m) => completedSet.has(m.id)).length;
      const tierAllDone = mods.length > 0 && tierDoneCount === mods.length;
      const tierUnlocked = isTierUnlocked(tier.id);
      const prevTier = tIdx > 0 ? TIERS[tIdx - 1] : null;
      const prevTierMods = prevTier ? MODULES.filter((m) => m.tierId === prevTier.id) : [];
      const prevTierDone = prevTierMods.filter((m) => completedSet.has(m.id)).length;
      const tierPct = mods.length > 0 ? Math.round((tierDoneCount / mods.length) * 100) : 0;
      const chestId = `chest-${tier.id}`;
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
          const xpReward = isDone ? "+25 XP" : "+50 XP";
          const btnVerb = isDone ? "REPLAY" : "STUDY";
          const stepsAway = Math.max(1, idx - unlockedMaxIdx);
          const prevReqMod = idx > 0 ? MODULES[idx - 1] : m;
          const prevReqShort = prevReqMod.grade.split("•")[0].trim();

          return `
            <div class="duo-step-row" style="--stone-x:${offsetX}px" id="stone-row-${m.id}">
              <div class="duo-stone-anchor">
                ${
                  isFrontier || (m.id === frontierId && isDone)
                    ? `<div class="rpg-hero-pin"><img src="${rpgState.petImg}" alt="Hero" /><span>${isDone ? `👑 LV. ${idx + 1} MAXED` : `⚡ LV. ${idx + 1} • CURRENT LEVEL`}</span></div>`
                    : ""
                }
                <button
                  type="button"
                  class="duo-stone-btn ${isBoss ? "boss-stone" : ""} ${isDone ? "completed" : ""} ${isFrontier ? "current-frontier" : ""} ${isLocked ? "locked-stone" : ""} ${isSelected ? "selected" : ""}"
                  data-stone-id="${m.id}"
                  data-stone-locked="${isLocked ? "1" : "0"}"
                  aria-label="${isLocked ? "Locked: " : ""}${m.grade}: ${m.title}"
                >
                  ${
                    isBoss
                      ? `<span class="duo-boss-tag">${isDone ? "👑 SLAIN" : isLocked ? "🔒 BOSS" : "⚔️ BOSS"}</span>`
                      : ""
                  }
                  ${getStoneIconSvg(isDone, idx, isBoss, isLocked)}
                </button>
                <span class="duo-stone-grade-pill ${isLocked ? "locked-pill" : ""}">${isLocked ? "🔒 " : isDone ? "✓ " : "⚡ "}${m.grade.split("•")[0].trim()} • ${m.title.replace(/^\d+\.\s*/, "").slice(0, 21)}${m.title.replace(/^\d+\.\s*/, "").length > 21 ? "…" : ""}</span>
                <div class="duo-stone-stars ${isDone ? "" : "unearned"}">${isLocked ? "🔒 LOCKED" : "★ ★ ★"}</div>
              </div>

              ${
                isSelected
                  ? isLocked
                    ? `
                <div class="duo-popover-card locked-popover" style="--arrow-x:${Math.max(-120, Math.min(120, offsetX))}px">
                  <div class="duo-sheet-handle" aria-hidden="true"></div>
                  <button type="button" class="duo-popover-close" data-close-popover="1" aria-label="Close">✕</button>
                  <div class="duo-popover-arrow"></div>
                  <div class="duo-popover-grade">🔒 LEVEL LOCKED • ${stepsAway} STEP${stepsAway > 1 ? "S" : ""} AWAY</div>
                  <h4 class="duo-popover-title">🔒 ${m.title}</h4>
                  <p class="duo-popover-desc">
                    Complete <strong>${prevReqShort}</strong> first! Levels unlock step-by-step. Your active unlocked level right now is <strong>${frontierMod.title}</strong>.
                  </p>
                  <div class="duo-popover-btn-grid">
                    <button type="button" class="duo-popover-start-btn" data-launch-id="${frontierMod.id}">
                      📖 STUDY ${frontierShort}
                    </button>
                    <button type="button" class="duo-popover-raid-btn" data-raid-id="${frontierMod.id}">
                      🎮 15 MCQs (${frontierShort})
                    </button>
                  </div>
                </div>
              `
                    : `
                <div class="duo-popover-card" style="--arrow-x:${Math.max(-120, Math.min(120, offsetX))}px">
                  <div class="duo-sheet-handle" aria-hidden="true"></div>
                  <button type="button" class="duo-popover-close" data-close-popover="1" aria-label="Close">✕</button>
                  <div class="duo-popover-arrow"></div>
                  <div class="duo-popover-grade">${isBoss ? "⚔️ REALM BOSS STAGE" : "🔓 UNLOCKED QUEST STAGE"} • ${m.grade} • PASS: 10/15 MCQs</div>
                  <h4 class="duo-popover-title">${m.title}</h4>
                  <p class="duo-popover-desc">${m.subtitle}</p>
                  <div class="duo-popover-btn-grid">
                    <button type="button" class="duo-popover-raid-btn" data-raid-id="${m.id}">
                      🎮 ${isDone ? "REPLAY 15 MCQs" : "PLAY 15 MCQs (10 TO PASS)"}
                    </button>
                    <button type="button" class="duo-popover-start-btn" data-launch-id="${m.id}">
                      📖 ${btnVerb} LESSON
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

      const isLevelLectureOpen = tierUnlocked && openRoadmapLectureTierId === tier.id;
      const activeUnlockedInTier =
        mods.find((m) => m.id === frontierId) ||
        [...mods].reverse().find((m) => isModuleUnlocked(m.id)) ||
        mods[0];

      return `
        <div class="duo-unit-section ${tierUnlocked ? "" : "realm-locked"}" id="unit-realm-${tIdx + 1}">
          <div class="duo-unit-banner">
            <div>
              <div class="duo-unit-eyebrow">
                ${tierAllDone ? "👑 REALM CLEARED" : tierUnlocked ? "🔓 UNLOCKED REALM" : "🔒 LOCKED REALM"} • REALM ${tIdx + 1} (${tierDoneCount}/${mods.length} CHAPTERS)
              </div>
              <h3 class="duo-unit-title">${tierUnlocked ? "" : "🔒 "}${tier.name.replace(/^Group \d:\s*/, "")}</h3>
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
                  ? `
                  <button type="button" class="duo-unit-guide-btn" style="background:rgba(16,185,129,0.28);border-color:#6ee7b7;" data-toggle-level-lecture="${tier.id}">
                    🎓 ${isLevelLectureOpen ? "HIDE LECTURE" : "LECTURE (EN / اردو)"}
                  </button>
                  <button type="button" class="duo-unit-guide-btn" data-unit-boss-raid="${activeUnlockedInTier?.id}">
                    ⚔️ ${tierAllDone ? "BOSS RAID" : "STAGE RAID"}
                  </button>
                `
                  : `
                  <button type="button" class="duo-unit-guide-btn" style="opacity:0.75;" data-locked-tier-alert="${tIdx}">
                    🔒 LECTURE LOCKED
                  </button>
                  <button type="button" class="duo-unit-guide-btn" style="opacity:0.75;" data-locked-tier-alert="${tIdx}">
                    🔒 RAID LOCKED
                  </button>
                `
              }
              <button type="button" class="duo-unit-guide-btn" data-guide-filter="${guardian.vaultFilter}">
                📜 LORE VAULT
              </button>
            </div>
          </div>

          ${
            isLevelLectureOpen
              ? `<div class="duo-level-lecture-drawer">${buildRealmLectureCardHtml(tier.id, { showOpenHallBtn: true })}</div>`
              : ""
          }

          <div class="duo-unit-trail">
            ${buildWindingRoadSvg(unitOffsets)}

            <!-- Logo Animal Mascot Decoration + 3 Stars Pedestal -->
            <div class="duo-mascot-prop ${guardian.side}" data-mascot-mod="${mods[0]?.id || "ch-1-intro"}" data-mascot-tier="${tier.id}">
              <div class="duo-mascot-quote">"${guardian.quote}"</div>
              <div class="duo-mascot-ring">
                <img src="${guardian.img}" alt="${guardian.animal}" class="duo-mascot-img" />
              </div>
              <div class="duo-mascot-pedestal">
                <div class="duo-mascot-stars ${tierDoneCount > 0 ? "lit" : ""}">
                  ${tierAllDone ? "★ ★ ★" : tierDoneCount > 0 ? "★ ★ ☆" : "★ ☆ ☆"}
                </div>
                <span class="duo-mascot-name">${guardian.animal}</span>
              </div>
            </div>

            ${stepsHtml}

            <!-- Unit Milestone 3D Loot Chest -->
            <div class="duo-step-row" style="--stone-x:0px">
              <button type="button" class="duo-chest-btn" data-chest-id="${chestId}">
                ${getChestSvg(tierAllDone || chestClaimed)}
                <span class="duo-chest-label">
                  ${chestClaimed ? `👑 Realm ${tIdx + 1} Trophy Claimed` : tierAllDone ? `🎁 Tap to Claim Realm ${tIdx + 1} Trophy!` : `🔒 Realm ${tIdx + 1} Mastery Chest`}
                </span>
              </button>
              ${
                isChestSelected
                  ? `
                <div class="duo-popover-card" style="--arrow-x:0px">
                  <div class="duo-sheet-handle" aria-hidden="true"></div>
                  <button type="button" class="duo-popover-close" data-close-popover="1" aria-label="Close">✕</button>
                  <div class="duo-popover-arrow"></div>
                  <div class="duo-popover-grade">REALM ${tIdx + 1} MASTERY CHEST • ${guardian.animal.toUpperCase()}</div>
                  <h4 class="duo-popover-title">${
                    chestClaimed
                      ? `🏆 Realm ${tIdx + 1} Mastery Trophy Secured!`
                      : tierAllDone
                      ? "✨ Realm Cleared! Claim Your Mastery Trophy!"
                      : `Clear All ${mods.length} Chapters in Realm ${tIdx + 1} to Unlock!`
                  }</h4>
                  <p class="duo-popover-desc">${guardian.quote}</p>
                  <div class="duo-popover-btn-grid">
                    ${
                      tierAllDone && !chestClaimed
                        ? `<button type="button" class="duo-popover-raid-btn" data-claim-chest="${chestId}">🎁 CLAIM TROPHY</button>`
                        : `<button type="button" class="duo-popover-raid-btn" data-raid-id="${mods[mods.length - 1]?.id || mods[0]?.id}">🎮 PLAY 15 MCQs</button>`
                    }
                    <button type="button" class="duo-popover-start-btn" data-chest-vault="${guardian.vaultFilter}">
                      📜 SCROLL VAULT
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

    typesetMath(arena);

    // Dismiss button on popover / mobile bottom sheet
    arena.querySelectorAll("[data-close-popover]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        triggerHaptic(8);
        selectedPopoverId = null;
        renderQuestTrail();
      });
    });

    // Clicking any stepping-stone coin toggles/opens its Game Action Popover
    arena.querySelectorAll(".duo-stone-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(12);
        const id = btn.dataset.stoneId;
        const isLocked = btn.dataset.stoneLocked === "1";
        if (selectedPopoverId === id) {
          if (isLocked) {
            notifyLockedModule(id);
          } else {
            startBossRaid(id);
          }
        } else {
          selectedPopoverId = id;
          renderQuestTrail();
        }
      });
    });

    // Locked Realm Banner alert buttons
    arena.querySelectorAll("[data-locked-tier-alert]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prevLv = Number(btn.dataset.lockedTierAlert) || 1;
        const fMod = MODULES[getUnlockedMaxIndex()] || MODULES[0];
        showLootToast(
          `🔒 Complete all chapters in Realm ${prevLv} first! Current active chapter: ${fMod.grade.split("•")[0].trim()}`
        );
      });
    });

    // Clicking "STUDY" launches full lesson
    arena.querySelectorAll(".duo-popover-start-btn[data-launch-id]").forEach((btn) => {
      btn.addEventListener("click", () => openModule(btn.dataset.launchId));
    });

    // Clicking "RAID" or "BOSS RAID" launches playable Guardian Battle Arena!
    arena.querySelectorAll("[data-raid-id], [data-unit-boss-raid]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modId = btn.dataset.raidId || btn.dataset.unitBossRaid;
        if (modId) startBossRaid(modId);
      });
    });

    // Claiming an unlocked Treasure Chest
    arena.querySelectorAll("[data-claim-chest]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cid = btn.dataset.claimChest;
        if (!(rpgState.claimedChests || []).includes(cid)) {
          triggerHaptic([20, 35, 25]);
          rpgState.claimedChests = [...(rpgState.claimedChests || []), cid];
          showLootToast("🏆 REALM MASTERY TROPHY UNLOCKED!");
          saveProgress();
        }
      });
    });

    // Clicking animal mascot selects that Unit's first stone (and shows quote on touch/mobile)
    arena.querySelectorAll(".duo-mascot-prop").forEach((prop) => {
      prop.addEventListener("click", () => {
        triggerHaptic(10);
        const g = TIER_GUARDIANS[prop.dataset.mascotTier];
        if (g && window.innerWidth <= 768) {
          showLootToast(`🐾 ${g.animal}: "${g.quote}"`);
        }
        selectedPopoverId = prop.dataset.mascotMod;
        renderQuestTrail();
      });
    });

    // Clicking Treasure Chest toggles chest popover
    arena.querySelectorAll(".duo-chest-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(12);
        selectedPopoverId = selectedPopoverId === btn.dataset.chestId ? null : btn.dataset.chestId;
        renderQuestTrail();
      });
    });

    // Guidebook & Chest Formula Scroll buttons jump to Formula Vault filtered to that Unit
    arena.querySelectorAll("[data-guide-filter], [data-chest-vault]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const filterVal = btn.dataset.guideFilter || btn.dataset.chestVault || "ALL";
        currentVaultSection = "ALL";
        const searchIn = document.getElementById("vault-search");
        if (searchIn) searchIn.value = "";
        document.querySelectorAll("#vault-section-filter [data-vault-sec]").forEach((b) => {
          b.classList.toggle("active", b.dataset.vaultSec === "ALL");
        });
        const sel = document.getElementById("vault-grade-filter");
        if (sel) sel.value = filterVal;
        switchView("vault");
      });
    });

    // Toggle inline Bilingual Level Master Lecture Drawer on Roadmap Level Banner
    arena.querySelectorAll("[data-toggle-level-lecture]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tid = btn.dataset.toggleLevelLecture;
        openRoadmapLectureTierId = openRoadmapLectureTierId === tid ? null : tid;
        renderQuestTrail();
      });
    });

    // Stepping-stone Popover "LECTURE (English & اردو)" opens the dedicated Lectures category
    arena.querySelectorAll("[data-open-lecture-mod]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mod = MODULES.find((m) => m.id === btn.dataset.openLectureMod);
        if (mod) {
          currentLecturesTierFilter = mod.tierId || "ALL";
          activeSpotlightModId = mod.id;
          document.querySelectorAll("#lectures-level-filter [data-lec-tier]").forEach((b) => {
            b.classList.toggle("active", b.dataset.lecTier === currentLecturesTierFilter);
          });
        }
        switchView("lectures");
      });
    });

    wireLectureControls(arena);
  }

  /* ------------------------------------------------------------------------
     ⚔️ Playable Guardian Boss Battle Arena Engine
     ------------------------------------------------------------------------ */
  let battleTimerId = null;

  function closeBossRaid() {
    if (battleTimerId) {
      clearInterval(battleTimerId);
      battleTimerId = null;
    }
    document.body.style.overflow = "";
    const modal = document.getElementById("rpg-battle-modal");
    if (modal) modal.hidden = true;
  }

  function startBossRaid(moduleId) {
    const mod = MODULES.find((m) => m.id === moduleId) || MODULES[0];
    if (!mod) return;
    if (!isModuleUnlocked(mod.id)) {
      notifyLockedModule(mod.id);
      return;
    }
    const modal = document.getElementById("rpg-battle-modal");
    const bodyEl = document.getElementById("rpg-battle-body");
    if (!modal || !bodyEl) return;

    const wasModalHidden = modal.hidden;
    triggerHaptic(14);

    const modIdx = MODULES.findIndex((x) => x.id === mod.id);
    const chNum = modIdx + 1;
    const shortCur = mod.grade.split("•")[0].trim();
    const TOTAL_MCQS = (window.TrigMcqEngine && window.TrigMcqEngine.TOTAL_MCQS) || 15;
    const PASS_SCORE = (window.TrigMcqEngine && window.TrigMcqEngine.PASS_SCORE) || 10;

    // Generate a brand-new randomized set of 15 MCQs EVERY single time the game opens!
    const rounds =
      window.TrigMcqEngine && typeof window.TrigMcqEngine.generate15 === "function"
        ? window.TrigMcqEngine.generate15(mod, chNum, MODULES)
        : [...(mod.quiz || [])].slice(0, TOTAL_MCQS);

    const guardian = TIER_GUARDIANS[mod.tierId] || TIER_GUARDIANS["tier-1"];
    let qIdx = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let combo = 1;
    let timeLeft = 30;

    document.getElementById("rpg-battle-stage-tag").textContent = `🎯 ${shortCur.toUpperCase()} • 15 MCQs`;
    document.getElementById("rpg-player-battle-img").src = rpgState.petImg;
    document.getElementById("rpg-player-battle-name").textContent = `Lv. ${getUnlockedMaxIndex() + 1} • ${rpgState.petName}`;
    document.getElementById("rpg-boss-img").src = guardian.img;
    document.getElementById("rpg-boss-name").textContent = `${guardian.animal} (Pass: ${PASS_SCORE}/${TOTAL_MCQS})`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";

    if (wasModalHidden && window.history && typeof window.history.pushState === "function") {
      try {
        window.history.pushState({ modal: "raid", view: currentViewId, mod: currentModuleId }, "");
      } catch (_) {
        /* ignore */
      }
    }

    const syncHud = () => {
      const bossHp = Math.max(0, Math.round(((PASS_SCORE - Math.min(PASS_SCORE, correctCount)) / PASS_SCORE) * 100));
      document.getElementById("rpg-battle-hearts").textContent =
        `✅ ${correctCount}  •  ❌ ${wrongCount}`;
      document.getElementById("rpg-battle-combo").textContent =
        `📊 ${correctCount}/${TOTAL_MCQS} (Need ${PASS_SCORE})`;
      document.getElementById("rpg-boss-hp-fill").style.width = `${bossHp}%`;
      document.getElementById("rpg-boss-hp-text").textContent =
        correctCount >= PASS_SCORE
          ? `PASSED! (${correctCount}/${TOTAL_MCQS})`
          : `Need ${PASS_SCORE - correctCount} more to Pass`;
    };

    const startRoundTimer = () => {
      if (battleTimerId) clearInterval(battleTimerId);
      timeLeft = 30;
      const timerFill = document.getElementById("rpg-timer-fill");
      if (timerFill) timerFill.style.width = "100%";
      battleTimerId = setInterval(() => {
        timeLeft = Math.max(0, timeLeft - 0.25);
        if (timerFill) timerFill.style.width = `${(timeLeft / 30) * 100}%`;
        if (timeLeft <= 0) {
          clearInterval(battleTimerId);
          battleTimerId = null;
        }
      }, 250);
    };

    const renderRound = () => {
      syncHud();
      if (qIdx >= rounds.length) {
        if (battleTimerId) clearInterval(battleTimerId);
        const passed = correctCount >= PASS_SCORE;
        const nextMod = MODULES[modIdx + 1];
        const nextShort = nextMod ? nextMod.grade.split("•")[0].trim() : "";

        if (passed) {
          const wasAlreadyDone = completedSet.has(mod.id);
          rpgState.raidWins = (rpgState.raidWins || 0) + 1;
          completeModuleAndCelebrate(mod.id);
          if (wasAlreadyDone) {
            showLootToast(`🏆 ${correctCount}/${TOTAL_MCQS} MCQs Correct — ${shortCur} Passed!`);
          }

          bodyEl.innerHTML = `
            <div class="rpg-result-panel" style="text-align:center;padding:0.75rem 0.35rem;">
              <div style="font-size:2.3rem;">🏆✅🔓</div>
              <h3 style="margin:0.35rem 0;color:#fde047;font-size:1.24rem;">
                CHAPTER PASSED! (${correctCount} / ${TOTAL_MCQS} MCQs Correct)
              </h3>
              <p style="color:#e2e8f0;margin:0.35rem 0 0.9rem;font-size:0.9rem;line-height:1.45;">
                You scored <strong>${correctCount} out of ${TOTAL_MCQS}</strong> (Pass Mark: ${PASS_SCORE}/${TOTAL_MCQS}) on <strong>${mod.title}</strong>!
                ${
                  !wasAlreadyDone && nextMod
                    ? `<br/><span style="color:#6ee7b7;font-weight:800;">⬆️ LEVEL UP → Lv. ${modIdx + 2}! Unlocked ${nextMod.title}!</span>`
                    : nextMod
                    ? `<br/><span style="color:#6ee7b7;font-weight:800;">✓ ${shortCur} Mastered! Next Chapter: ${nextMod.title}</span>`
                    : `<br/><span style="color:#fde047;font-weight:800;">👑 All 44 Chapters Completed!</span>`
                }
              </p>
              <div class="rpg-result-actions">
                ${
                  nextMod
                    ? `<button type="button" class="rpg-raid-cta" id="btn-raid-next">🚀 Play ${nextShort} (15 MCQs) →</button>
                       <button type="button" class="rpg-study-cta" id="btn-raid-open-next" style="color:#fff;background:rgba(16,185,129,0.25);border:1px solid #6ee7b7;">📖 Open ${nextShort} Lesson →</button>`
                    : ""
                }
                <button type="button" class="rpg-study-cta" id="btn-raid-replay" style="color:#fff;background:rgba(255,255,255,0.12);">🔄 New 15 MCQs</button>
                <button type="button" class="rpg-study-cta" id="btn-raid-done" style="color:#fff;background:rgba(255,255,255,0.12);">🗺️ Back to Map</button>
              </div>
            </div>
          `;
          bodyEl.querySelector("#btn-raid-next")?.addEventListener("click", () => startBossRaid(nextMod.id));
          bodyEl.querySelector("#btn-raid-open-next")?.addEventListener("click", () => {
            closeBossRaid();
            openModule(nextMod.id);
          });
          bodyEl.querySelector("#btn-raid-replay")?.addEventListener("click", () => startBossRaid(mod.id));
          bodyEl.querySelector("#btn-raid-done")?.addEventListener("click", closeBossRaid);
          return;
        }

        // Score < 10 / 15 -> Not Passed (Level does NOT increase; retry gives brand-new 15 MCQs!)
        bodyEl.innerHTML = `
          <div class="rpg-result-panel" style="text-align:center;padding:0.75rem 0.35rem;">
            <div style="font-size:2.1rem;">📝🔄</div>
            <h3 style="margin:0.35rem 0;color:#fda4af;font-size:1.2rem;">
              Score: ${correctCount} / ${TOTAL_MCQS} — Need ${PASS_SCORE} / ${TOTAL_MCQS} to Pass!
            </h3>
            <p style="color:#cbd5e1;margin:0.35rem 0 0.9rem;font-size:0.9rem;line-height:1.45;">
              You got <strong>${correctCount}</strong> correct and <strong>${wrongCount}</strong> wrong. Score at least <strong>${PASS_SCORE} out of ${TOTAL_MCQS} MCQs</strong> to pass <strong>${shortCur}</strong> and advance to the next level!
            </p>
            <div class="rpg-result-actions">
              <button type="button" class="rpg-raid-cta" id="btn-raid-retry">🔄 Try Again (New 15 MCQs)</button>
              <button type="button" class="rpg-study-cta" id="btn-raid-study-now" style="color:#fff;background:rgba(255,255,255,0.14);">📖 Study ${shortCur} Lesson</button>
              <button type="button" class="rpg-study-cta" id="btn-raid-done-fail" style="color:#fff;background:rgba(255,255,255,0.1);">🗺️ Map</button>
            </div>
          </div>
        `;
        bodyEl.querySelector("#btn-raid-retry")?.addEventListener("click", () => startBossRaid(mod.id));
        bodyEl.querySelector("#btn-raid-study-now")?.addEventListener("click", () => {
          closeBossRaid();
          openModule(mod.id);
        });
        bodyEl.querySelector("#btn-raid-done-fail")?.addEventListener("click", closeBossRaid);
        return;
      }

      const curQ = rounds[qIdx];
      startRoundTimer();
      bodyEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;font-size:0.78rem;color:#fbbf24;font-weight:800;margin-bottom:0.4rem;">
          <span>MCQ ${qIdx + 1} OF ${rounds.length} • ${mod.title}</span>
          <span style="color:#fde68a;">Pass Mark: ${PASS_SCORE}/${rounds.length}</span>
        </div>
        <div class="rpg-spell-prompt">${curQ.q}</div>
        <div class="rpg-spell-grid">
          ${curQ.options
            .map(
              (opt, oIdx) => `
            <button type="button" class="rpg-spell-btn" data-opt="${oIdx}">
              <strong style="opacity:0.8;margin-right:0.25rem;">${String.fromCharCode(65 + oIdx)}.</strong> ${opt}
            </button>
          `
            )
            .join("")}
        </div>
        <div id="rpg-round-feedback" style="margin-top:0.85rem;"></div>
      `;
      typesetMath(bodyEl);

      bodyEl.querySelectorAll(".rpg-spell-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (battleTimerId) clearInterval(battleTimerId);
          const chosenIdx = Number(btn.dataset.opt);
          const isHit = chosenIdx === curQ.answer;
          bodyEl.querySelectorAll(".rpg-spell-btn").forEach((b, idx) => {
            b.disabled = true;
            if (idx === curQ.answer) b.classList.add("hit");
            else if (idx === chosenIdx) b.classList.add("miss");
          });

          const feedEl = document.getElementById("rpg-round-feedback");
          if (isHit) {
            triggerHaptic(16);
            correctCount += 1;
            combo += 1;
            const bossBox = document.getElementById("rpg-boss-box");
            bossBox?.classList.remove("boss-hit");
            void bossBox?.offsetWidth;
            bossBox?.classList.add("boss-hit");
            syncHud();
            feedEl.innerHTML = `
              <div class="callout callout-intuition" style="margin:0;background:rgba(16,185,129,0.16);color:#f8fafc;">
                <strong>✅ Correct! (${correctCount} / ${rounds.length} Correct)</strong><br/>
                ${curQ.explanation}
              </div>
              <button type="button" class="rpg-raid-cta" id="btn-next-strike" style="margin-top:0.65rem;">
                ${qIdx + 1 >= rounds.length ? "🏁 See Final Score →" : `⚡ Next MCQ (${qIdx + 2}/${rounds.length}) →`}
              </button>
            `;
          } else {
            triggerHaptic(32);
            wrongCount += 1;
            combo = 1;
            syncHud();
            feedEl.innerHTML = `
              <div class="callout callout-pitfall" style="margin:0;background:rgba(244,63,94,0.18);color:#f8fafc;">
                <strong>❌ Incorrect (${correctCount} / ${rounds.length} Correct so far)</strong><br/>
                ${curQ.explanation}
              </div>
              <button type="button" class="rpg-raid-cta" id="btn-next-strike" style="margin-top:0.65rem;">
                ${qIdx + 1 >= rounds.length ? "🏁 See Final Score →" : `⚡ Next MCQ (${qIdx + 2}/${rounds.length}) →`}
              </button>
            `;
          }
          qIdx += 1;
          typesetMath(feedEl);
          const nextStrikeBtn = feedEl.querySelector("#btn-next-strike");
          if (nextStrikeBtn) {
            requestAnimationFrame(() => {
              nextStrikeBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
            nextStrikeBtn.addEventListener("click", () => {
              bodyEl.closest(".rpg-battle-arena")?.scrollTo({ top: 0, behavior: "auto" });
              renderRound();
            });
          }
        });
      });
    };

    renderRound();
  }

  function renderRoadmapCards() {
    renderQuestTrail();
    const grid = document.getElementById("roadmap-grid");
    if (!grid) return;
    const unlockedMax = getUnlockedMaxIndex();
    grid.innerHTML = MODULES.map((m, idx) => {
      const done = completedSet.has(m.id);
      const unlocked = idx <= unlockedMax;
      const prevShort = idx > 0 ? MODULES[idx - 1].grade.split("•")[0].trim() : "Ch 1";
      return `
        <div class="roadmap-card ${unlocked ? "" : "locked-card"}" style="--card-accent:#f97316" data-open-id="${m.id}">
          <div>
            <div class="roadmap-card-top">
              <span class="roadmap-grade">${unlocked ? "" : "🔒 "}${m.grade}</span>
              <span style="font-size:0.82rem;font-weight:700;color:${done ? "#fb923c" : unlocked ? "#34d399" : "var(--text-muted)"}">
                ${done ? "✓ Completed" : unlocked ? "🔓 Unlocked — Start →" : `🔒 Complete ${prevShort} first`}
              </span>
            </div>
            <h3>${m.title}</h3>
            <p>${m.subtitle}</p>
          </div>
          <div class="roadmap-tags">
            <span class="tag" style="border-color:rgba(16,185,129,0.5);color:#6ee7b7;">${unlocked ? "🎓 EN + اردو Lecture" : "🔒 Lecture Locked"}</span>
            ${m.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      `;
    }).join("");

    typesetMath(grid);

    grid.querySelectorAll(".roadmap-card").forEach((card) => {
      card.addEventListener("click", () => openModule(card.dataset.openId));
    });
  }

  /* ------------------------------------------------------------------------
     Open & Render a Specific Chapter Module
     ------------------------------------------------------------------------ */
  function openModule(moduleId, focusLecture = false) {
    const idx = MODULES.findIndex((m) => m.id === moduleId);
    if (idx === -1) return;
    if (!isModuleUnlocked(idx)) {
      notifyLockedModule(moduleId);
      return;
    }
    currentModuleId = moduleId;
    const mod = MODULES[idx];
    const tier = TIERS.find((t) => t.id === mod.tierId);
    const prevMod = idx > 0 ? MODULES[idx - 1] : null;
    const nextMod = idx < MODULES.length - 1 ? MODULES[idx + 1] : null;
    const isCompleted = completedSet.has(mod.id);

    renderSidebar(document.getElementById("sidebar-search-input")?.value || "");
    switchView("lesson", true);

    const container = document.getElementById("lesson-container");
    container.innerHTML = `
      <div class="lesson-mobile-bar">
        <button type="button" class="lesson-mob-action" id="btn-lesson-mob-back">← Quest Map</button>
        <span class="lesson-mob-progress">Ch ${idx + 1} / ${MODULES.length} ${isCompleted ? "✓" : ""}</span>
        <button type="button" class="lesson-mob-action lesson-mob-raid" id="btn-lesson-mob-raid">⚔️ Boss Raid</button>
      </div>

      <div class="lesson-header" style="border-top: 4px solid ${mod.tierColor}">
        <div class="lesson-meta-row">
          <span class="lesson-tier-pill">${tier ? tier.name : mod.grade}</span>
          <span class="roadmap-grade">${mod.grade} • Module ${idx + 1} of ${MODULES.length}</span>
        </div>
        <h1>${mod.title}</h1>
        <p class="lesson-summary">${mod.subtitle}</p>
        <div class="prereq-bar">
          <strong>Prerequisites:</strong>
          ${mod.prerequisites.map((p) => `<span class="tag">${p}</span>`).join("")}
        </div>
      </div>

      <div class="section-card">
        <h2>💡 Intuition First — Why Does This Matter?</h2>
        <div class="callout callout-intuition">
          <p style="margin:0">${formatInlineMarkdownBold(mod.intuition)}</p>
        </div>
      </div>

      <div class="section-card">
        <h2>📘 Core Concepts, Derivations & Theorems</h2>
        <div class="theory-body">${mod.theoryHtml}</div>
      </div>

      <div class="section-card">
        <h2>🔬 Hands-On Interactive Visual Lab</h2>
        <p style="margin-top:0">Drag the sliders below to see the geometry and equations respond in real time:</p>
        <div id="lesson-sandbox-mount"></div>
      </div>

      <div class="section-card">
        <h2>✍️ Step-by-Step Worked Examples</h2>
        <div class="example-grid">
          ${mod.examples
            .map(
              (ex) => `
            <div class="example-item">
              <div class="example-q">${ex.q}</div>
              <div class="example-sol"><strong>Solution:</strong> ${ex.sol}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="section-card">
        <h2>⚠️ Classic Pitfalls & Exam Traps to Avoid</h2>
        ${mod.pitfalls
          .map(
            (pit) => `
          <div class="callout callout-pitfall">
            <div class="callout-title">Watch Out!</div>
            <p style="margin:0">${pit}</p>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="section-card" id="lesson-quiz-section">
        <div class="lesson-quiz-head">
          <h2 style="margin:0;">🎯 15-MCQ Chapter Mastery Game (${mod.grade.split("•")[0].trim()})</h2>
          <div class="lesson-quiz-head-btns">
            <button type="button" class="btn btn-secondary" id="btn-regen-lesson-mcqs">🔄 New 15 MCQs</button>
            <button type="button" class="btn btn-primary" id="btn-arcade-15-mcqs">🎮 Arcade Mode (15 MCQs)</button>
          </div>
        </div>
        <div id="lesson-quiz-scoreboard" class="callout callout-intuition" style="margin:0 0 1rem;padding:0.65rem 0.9rem;font-weight:700;">
          📊 Score: <span id="lesson-mcq-correct">0</span> / 15 Correct • Answered: <span id="lesson-mcq-answered">0</span> / 15 • <strong>Pass Mark: 10 / 15 MCQs</strong> (Fresh questions every time you open!)
        </div>
        <div id="lesson-quiz-mount"></div>

        <div class="lesson-footer-nav">
          <div>
            ${
              prevMod
                ? `<button class="btn btn-secondary" id="btn-prev-mod">← ${prevMod.grade}</button>`
                : `<button class="btn btn-secondary" id="btn-back-roadmap">← Full Roadmap</button>`
            }
          </div>
          <div style="display:flex;gap:0.65rem;flex-wrap:wrap;">
            <button class="btn ${isCompleted ? "btn-success" : "btn-secondary"}" id="btn-mark-complete">
              ${isCompleted ? "✓ Chapter Passed (Click to Reset)" : "🎮 Play 15-MCQ Test (Pass: 10/15)"}
            </button>
            ${
              nextMod
                ? `<button class="btn btn-primary" id="btn-next-mod">${isCompleted ? `Next: ${nextMod.grade} →` : `🔒 Pass 10/15 MCQs to Unlock ${nextMod.grade.split("•")[0].trim()} →`}</button>`
                : `<button class="btn btn-primary" id="btn-open-vault-end">${isCompleted ? "📜 Open Formula Vault →" : "🔒 Pass 10/15 MCQs to Complete Ch 44 →"}</button>`
            }
          </div>
        </div>
      </div>
    `;

    // Mount interactive visualizer
    const mountEl = document.getElementById("lesson-sandbox-mount");
    activeLessonRedraw = window.TrigVisualizers.mount(mod.sandboxType, mountEl);

    // Wire bilingual English & Urdu lecture controls inside chapter lesson
    wireLectureControls(container);
    if (focusLecture) {
      setTimeout(() => {
        document.getElementById("lesson-bilingual-lecture")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }

    // Dynamic 15-MCQ Chapter Quiz (changes every open & on Regenerate, passes at 10/15!)
    const mountDynamicLessonQuiz = () => {
      const quizMount = document.getElementById("lesson-quiz-mount");
      const scoreEl = document.getElementById("lesson-mcq-correct");
      const ansEl = document.getElementById("lesson-mcq-answered");
      const boardEl = document.getElementById("lesson-quiz-scoreboard");
      if (!quizMount) return;

      const mcqs =
        window.TrigMcqEngine && typeof window.TrigMcqEngine.generate15 === "function"
          ? window.TrigMcqEngine.generate15(mod, idx + 1, MODULES)
          : [...(mod.quiz || [])];
      const totalQuizCount = mcqs.length;
      const passTarget = Math.min(10, totalQuizCount);
      let correctQuizCount = 0;
      let answeredQuizCount = 0;
      if (scoreEl) scoreEl.textContent = "0";
      if (ansEl) ansEl.textContent = "0";

      quizMount.innerHTML = mcqs
        .map(
          (item, qIdx) => `
          <div class="quiz-question-card" data-qidx="${qIdx}">
            <div class="quiz-prompt">Q${qIdx + 1} / ${totalQuizCount}. ${item.q}</div>
            <div class="quiz-options">
              ${item.options
                .map(
                  (opt, oIdx) => `
                <button class="quiz-opt-btn" data-qidx="${qIdx}" data-oidx="${oIdx}">${opt}</button>
              `
                )
                .join("")}
            </div>
            <div class="quiz-feedback" id="qfeed-${qIdx}"></div>
          </div>
        `
        )
        .join("");

      typesetMath(quizMount);

      quizMount.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = Number(btn.dataset.qidx);
          const oIdx = Number(btn.dataset.oidx);
          const qObj = mcqs[qIdx];
          const card = btn.closest(".quiz-question-card");
          card.querySelectorAll(".quiz-opt-btn").forEach((b, idx2) => {
            b.disabled = true;
            if (idx2 === qObj.answer) b.classList.add("correct");
            else if (idx2 === oIdx) b.classList.add("wrong");
          });
          answeredQuizCount += 1;
          if (oIdx === qObj.answer) {
            triggerHaptic(14);
            correctQuizCount += 1;
          } else {
            triggerHaptic(28);
          }
          if (scoreEl) scoreEl.textContent = `${correctQuizCount}`;
          if (ansEl) ansEl.textContent = `${answeredQuizCount}`;

          const feed = document.getElementById(`qfeed-${qIdx}`);
          feed.classList.add("visible");
          feed.innerHTML =
            (oIdx === qObj.answer ? "<strong>✅ Correct!</strong> " : "<strong>❌ Not quite.</strong> ") +
            qObj.explanation;
          typesetMath(feed);

          if (correctQuizCount >= passTarget && !completedSet.has(mod.id)) {
            completeModuleAndCelebrate(mod.id);
            const markBtn = document.getElementById("btn-mark-complete");
            if (markBtn) {
              markBtn.className = "btn btn-success";
              markBtn.textContent = "✓ Chapter Passed (Click to Reset)";
            }
            const nextBtn = document.getElementById("btn-next-mod");
            if (nextBtn && nextMod) {
              nextBtn.textContent = `🔓 Next: ${nextMod.grade} →`;
            }
            if (boardEl) {
              boardEl.innerHTML = `🏆 <strong>PASSED! (${correctQuizCount} / ${totalQuizCount} Correct)</strong> — Next Chapter & Level Unlocked!`;
            }
          } else if (answeredQuizCount === totalQuizCount && correctQuizCount < passTarget) {
            showLootToast(`📝 Score: ${correctQuizCount}/${totalQuizCount} — Need ${passTarget}/${totalQuizCount} to pass! Tap "New 15 MCQs" to retry.`);
          }
        });
      });
    };

    mountDynamicLessonQuiz();

    document.getElementById("btn-regen-lesson-mcqs")?.addEventListener("click", () => {
      triggerHaptic(12);
      mountDynamicLessonQuiz();
      showLootToast("🔄 Generated 15 brand-new MCQs for this chapter!");
    });
    document.getElementById("btn-arcade-15-mcqs")?.addEventListener("click", () => {
      startBossRaid(mod.id);
    });

    // Wire navigation & completion buttons
    document.getElementById("btn-lesson-mob-back")?.addEventListener("click", () => {
      triggerHaptic(10);
      switchView("roadmap");
    });
    document.getElementById("btn-lesson-mob-raid")?.addEventListener("click", () => {
      startBossRaid(mod.id);
    });
    document.getElementById("btn-mark-complete")?.addEventListener("click", () => {
      if (completedSet.has(mod.id)) {
        completedSet.delete(mod.id);
        saveProgress();
        showLootToast(`🔒 Chapter unmarked — pass 10/15 MCQs to advance again.`);
        openModule(mod.id);
      } else {
        startBossRaid(mod.id);
      }
    });
    document.getElementById("btn-prev-mod")?.addEventListener("click", () => openModule(prevMod.id));
    document.getElementById("btn-next-mod")?.addEventListener("click", () => {
      if (completedSet.has(mod.id)) {
        openModule(nextMod.id);
      } else {
        startBossRaid(mod.id);
      }
    });
    document.getElementById("btn-back-roadmap")?.addEventListener("click", () => switchView("roadmap"));
    document.getElementById("btn-open-vault-end")?.addEventListener("click", () => {
      if (completedSet.has(mod.id)) {
        switchView("vault");
      } else {
        startBossRaid(mod.id);
      }
    });

    typesetMath(container);
  }

  /* ------------------------------------------------------------------------
     Interactive Playground Hub (All 14 Visual Labs in One Place)
     ------------------------------------------------------------------------ */
  let currentHubLab = "protractor";
  const HUB_LABS = [
    { id: "protractor", label: "1. Angles & DMS Protractor (Ch 2)" },
    { id: "radianSector", label: "2. Degree ↔ Radian & Sector (Ch 3)" },
    { id: "rightTriangle", label: "3. SOH-CAH-TOA & Complementary (Ch 1, 4–7)" },
    { id: "identityExplorer", label: "4. ASTC Signs, Unknown Ratios & Identities (Ch 8, 11–13, 18)" },
    { id: "triangleStepSolver", label: "5. Unknown Sides & Angles (Ch 9–10)" },
    { id: "elevation", label: "6. Heights & Distances (Ch 14–15)" },
    { id: "unitCircle", label: "7. Trig Functions & Any Angle (Ch 6, 16–17)" },
    { id: "waveLab", label: "8. Domain, Periodicity, Graphs & dy/dx (Ch 19–21, 40)" },
    { id: "compoundWaveLab", label: "9. Compound, Multiple, Sum-Product & Transform (Ch 22–28)" },
    { id: "trigEqInverseLab", label: "10. Trig Equations, General Sol & Folding (Ch 29–31, 35)" },
    { id: "inverseMasterLab", label: "11. Inverse Trig, Domain/Range, Simplification & Proofs (Ch 33–39)" },
    { id: "taylor", label: "12. Taylor Series (Ch 40)" },
    { id: "rootsUnity", label: "13. Roots of Unity (Ch 41, 43)" },
    { id: "fourier", label: "14. Fourier Harmonics (Ch 42)" }
  ];

  function initPlaygroundHub() {
    const bar = document.getElementById("hub-lab-bar");
    if (!bar) return;
    bar.innerHTML = HUB_LABS.map(
      (l) => `<button type="button" class="lab-pill ${l.id === currentHubLab ? "active" : ""}" data-lab="${l.id}">${l.label}</button>`
    ).join("");
    bar.querySelectorAll(".lab-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(10);
        mountPlaygroundLab(btn.dataset.lab, true);
      });
    });
  }

  function mountPlaygroundLab(labId, smoothScroll = false) {
    currentHubLab = labId;
    const bar = document.getElementById("hub-lab-bar");
    if (bar && !bar.children.length) initPlaygroundHub();
    let activePill = null;
    document.querySelectorAll("#hub-lab-bar .lab-pill").forEach((b) => {
      const isAct = b.dataset.lab === labId;
      b.classList.toggle("active", isAct);
      if (isAct) activePill = b;
    });
    if (activePill) scrollChipIntoView(activePill, smoothScroll);
    const mount = document.getElementById("hub-sandbox-mount");
    if (mount) {
      activeHubRedraw = window.TrigVisualizers.mount(labId, mount);
    }
  }

  /* ------------------------------------------------------------------------
     Scientific Handheld Calculators, CAS Workbench & Graphing Triangle Solver
     ------------------------------------------------------------------------ */
  let activeTrigFocus = "sin";
  let freshAngleEntry = true;
  let freshInvEntry = true;
  let activeTriSlotId = "tri-v1";
  let freshTriEntry = true;

  function parseCalcNumber(str, fallback = 0) {
    if (typeof str !== "string") return fallback;
    const cleaned = str.trim().replace(/−/g, "-");
    if (!cleaned || cleaned === "-" || cleaned === "." || cleaned === "-.") return fallback;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : fallback;
  }

  function getExactTrigMap(deg) {
    const normRaw = ((deg % 360) + 360) % 360;
    const nearest15 = Math.round(normRaw / 15) * 15;
    if (Math.abs(normRaw - nearest15) > 1e-4 && Math.abs(normRaw - 360) > 1e-4) return null;
    const k = nearest15 % 360;

    if (k === 0) return { sin: "0", cos: "1", tan: "0", csc: "Undefined", sec: "1", cot: "Undefined" };
    if (k === 90) return { sin: "1", cos: "0", tan: "Undefined", csc: "1", sec: "Undefined", cot: "0" };
    if (k === 180) return { sin: "0", cos: "−1", tan: "0", csc: "Undefined", sec: "−1", cot: "Undefined" };
    if (k === 270) return { sin: "−1", cos: "0", tan: "Undefined", csc: "−1", sec: "Undefined", cot: "0" };

    let ref = k;
    let sSign = "", cSign = "", tSign = "";
    if (k > 90 && k < 180) {
      ref = 180 - k; cSign = "−"; tSign = "−";
    } else if (k > 180 && k < 270) {
      ref = k - 180; sSign = "−"; cSign = "−";
    } else if (k > 270) {
      ref = 360 - k; sSign = "−"; tSign = "−";
    }

    const base = {
      15: { sin: "(√6−√2)/4", cos: "(√6+√2)/4", tan: "2−√3", csc: "√6+√2", sec: "√6−√2", cot: "2+√3" },
      30: { sin: "1/2", cos: "√3/2", tan: "1/√3", csc: "2", sec: "2/√3", cot: "√3" },
      45: { sin: "√2/2", cos: "√2/2", tan: "1", csc: "√2", sec: "√2", cot: "1" },
      60: { sin: "√3/2", cos: "1/2", tan: "√3", csc: "2/√3", sec: "2", cot: "1/√3" },
      75: { sin: "(√6+√2)/4", cos: "(√6−√2)/4", tan: "2+√3", csc: "√6−√2", sec: "√6+√2", cot: "2−√3" }
    }[ref];
    if (!base) return null;

    const applySign = (sg, expr) => {
      if (!sg) return expr;
      const needsParens = (expr.includes("+") || expr.includes("−")) && !expr.startsWith("(");
      return needsParens ? `−(${expr})` : `−${expr}`;
    };

    return {
      sin: applySign(sSign, base.sin),
      cos: applySign(cSign, base.cos),
      tan: applySign(tSign, base.tan),
      csc: applySign(sSign, base.csc),
      sec: applySign(cSign, base.sec),
      cot: applySign(tSign, base.cot)
    };
  }

  function getQuadrantLabel(deg) {
    const norm = ((deg % 360) + 360) % 360;
    const fmt = Number.isInteger(Number(norm.toFixed(2))) ? norm.toFixed(0) : norm.toFixed(1);
    if (Math.abs(norm) < 1e-5 || Math.abs(norm - 360) < 1e-5) return `+X Axis • 0°`;
    if (Math.abs(norm - 90) < 1e-5) return `+Y Axis • 90°`;
    if (Math.abs(norm - 180) < 1e-5) return `−X Axis • 180°`;
    if (Math.abs(norm - 270) < 1e-5) return `−Y Axis • 270°`;
    if (norm < 90) return `Q I (All +) • ${fmt}°`;
    if (norm < 180) return `Q II (sin +) • ${fmt}°`;
    if (norm < 270) return `Q III (tan +) • ${fmt}°`;
    return `Q IV (cos +) • ${fmt}°`;
  }

  function syncAngleCalculatorPresetLabels(unit) {
    const presetRow = document.getElementById("calc-angle-preset-row");
    if (presetRow) {
      const radLabels = { 0: "0", 30: "π/6", 45: "π/4", 60: "π/3", 90: "π/2", 180: "π" };
      const gradLabels = { 0: "0g", 30: "33.3g", 45: "50g", 60: "66.7g", 90: "100g", 180: "200g" };
      presetRow.querySelectorAll("[data-angle-deg]").forEach((btn) => {
        const d = Number(btn.dataset.angleDeg);
        btn.textContent = unit === "rad" ? radLabels[d] : unit === "grad" ? gradLabels[d] : `${d}°`;
      });
    }
    document.querySelectorAll("#calc-device-angle [data-angle-step]").forEach((btn) => {
      const d = Number(btn.dataset.angleStep);
      const sign = d > 0 ? "+" : "−";
      const ad = Math.abs(d);
      if (unit === "rad") {
        btn.textContent = `${sign}${ad === 15 ? "π/12" : "π/4"}`;
      } else if (unit === "grad") {
        btn.textContent = `${sign}${ad === 15 ? "16.7g" : "50g"}`;
      } else {
        btn.textContent = `${sign}${ad}°`;
      }
    });
  }

  function runAngleEvaluator() {
    const valInput = document.getElementById("calc-angle-val");
    const unitSel = document.getElementById("calc-angle-unit");
    const outEl = document.getElementById("calc-angle-output");
    if (!valInput || !unitSel || !outEl) return;

    const raw = parseCalcNumber(valInput.value, 0);
    const unit = unitSel.value;
    const deg = unit === "deg" ? raw : unit === "rad" ? (raw * 180) / Math.PI : raw * 0.9;
    const rad = (deg * Math.PI) / 180;
    const unitSym = unit === "deg" ? "°" : unit === "rad" ? " rad" : " gon";

    // Sync LCD header indicators & keypad mode buttons
    const unitTag = document.getElementById("calc-lcd-unit-tag");
    if (unitTag) unitTag.textContent = unit === "deg" ? "°" : unit === "rad" ? "rad" : "gon";
    const quadEl = document.getElementById("calc-lcd-quad");
    if (quadEl) quadEl.textContent = getQuadrantLabel(deg);
    document.querySelectorAll("#calc-lcd-unit-pills [data-lcd-u]").forEach((el) => {
      el.classList.toggle("active", el.dataset.lcdU === unit);
    });
    document.querySelectorAll("#calc-device-angle [data-angle-unit]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.angleUnit === unit);
    });
    document.querySelectorAll("#calc-device-angle [data-trig-focus]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.trigFocus === activeTrigFocus);
    });
    syncAngleCalculatorPresetLabels(unit);

    const s = Math.sin(rad);
    const c = Math.cos(rad);
    const sinZero = Math.abs(s) < 1e-10;
    const cosZero = Math.abs(c) < 1e-10;
    const cleanZero = (v) => (Math.abs(v) < 1e-12 ? 0 : v);

    const exactMap = getExactTrigMap(deg);
    const ratios = [
      { key: "sin", label: "sin θ", val: cleanZero(s).toFixed(6), exact: exactMap?.sin },
      { key: "cos", label: "cos θ", val: cleanZero(c).toFixed(6), exact: exactMap?.cos },
      { key: "tan", label: "tan θ", val: cosZero ? "Undefined" : cleanZero(s / c).toFixed(6), exact: exactMap?.tan },
      { key: "csc", label: "csc θ", val: sinZero ? "Undefined" : cleanZero(1 / s).toFixed(6), exact: exactMap?.csc },
      { key: "sec", label: "sec θ", val: cosZero ? "Undefined" : cleanZero(1 / c).toFixed(6), exact: exactMap?.sec },
      { key: "cot", label: "cot θ", val: sinZero ? "Undefined" : cleanZero(c / s).toFixed(6), exact: exactMap?.cot }
    ];

    const focused = ratios.find((r) => r.key === activeTrigFocus) || ratios[0];
    const spotlightEl = document.getElementById("calc-lcd-spotlight");
    const rawDisp = Number.isInteger(raw) ? raw : Number(raw.toFixed(6));
    if (spotlightEl) {
      const exactChip =
        focused.exact && focused.exact !== focused.val && focused.exact !== "Undefined"
          ? `<span class="calc-lcd-exact-pill">EXACT: ${focused.exact}</span>`
          : focused.exact
          ? `<span class="calc-lcd-exact-pill">EXACT</span>`
          : "";
      spotlightEl.innerHTML = `
        <div class="calc-lcd-spot-expr">${focused.key}(${rawDisp}${unitSym}) ${exactChip}</div>
        <div class="calc-lcd-spot-val">${focused.val === "Undefined" ? "MATH ∞ (Undefined)" : focused.val}</div>
      `;
    }

    outEl.innerHTML = `
      <div class="calc-lcd-ratio-grid">
        ${ratios
          .map(
            (r) => `
          <button type="button" class="calc-lcd-cell ${r.key === activeTrigFocus ? "active" : ""}" data-lcd-pick="${r.key}">
            <span class="calc-lcd-cell-top">
              <span class="calc-lcd-cell-fn">${r.label}</span>
              ${r.exact && r.exact !== "Undefined" ? `<span class="calc-lcd-cell-exact">${r.exact}</span>` : ""}
            </span>
            <span class="calc-lcd-cell-num ${r.val === "Undefined" ? "is-undef" : ""}">${r.val}</span>
          </button>
        `
          )
          .join("")}
      </div>
    `;

    outEl.querySelectorAll("[data-lcd-pick]").forEach((cell) => {
      cell.addEventListener("click", () => {
        triggerHaptic(8);
        activeTrigFocus = cell.dataset.lcdPick;
        runAngleEvaluator();
      });
    });
  }

  const PI_FRACTIONS = [
    [-Math.PI / 2, "−π/2 (−90°)"],
    [-Math.PI / 3, "−π/3 (−60°)"],
    [-Math.PI / 4, "−π/4 (−45°)"],
    [-Math.PI / 6, "−π/6 (−30°)"],
    [0, "0 (0°)"],
    [Math.PI / 6, "π/6 (30°)"],
    [Math.PI / 4, "π/4 (45°)"],
    [Math.PI / 3, "π/3 (60°)"],
    [Math.PI / 2, "π/2 (90°)"],
    [(2 * Math.PI) / 3, "2π/3 (120°)"],
    [(3 * Math.PI) / 4, "3π/4 (135°)"],
    [(5 * Math.PI) / 6, "5π/6 (150°)"],
    [Math.PI, "π (180°)"]
  ];

  function runInverseAndEquationSolver() {
    const fnSel = document.getElementById("inv-eq-fn");
    const valIn = document.getElementById("inv-eq-val");
    const outEl = document.getElementById("inv-eq-output");
    if (!fnSel || !valIn || !outEl) return;

    const fn = fnSel.value;
    const x = parseCalcNumber(valIn.value, 0);

    const meta = {
      asin: { name: "sin⁻¹(x)", eq: "sin θ = x", dom: "[−1, 1]", rng: "[−π/2, π/2]", fam: "Odd (−α for x < 0)", valid: Math.abs(x) <= 1 + 1e-7 },
      acos: { name: "cos⁻¹(x)", eq: "cos θ = x", dom: "[−1, 1]", rng: "[0, π]", fam: "π-Shift (π − α)", valid: Math.abs(x) <= 1 + 1e-7 },
      atan: { name: "tan⁻¹(x)", eq: "tan θ = x", dom: "ℝ (−∞, ∞)", rng: "(−π/2, π/2)", fam: "Odd (−α for x < 0)", valid: true },
      acot: { name: "cot⁻¹(x)", eq: "cot θ = x", dom: "ℝ (−∞, ∞)", rng: "(0, π)", fam: "π-Shift (π − α)", valid: true },
      asec: { name: "sec⁻¹(x)", eq: "sec θ = x", dom: "|x| ≥ 1", rng: "[0, π] \\ {π/2}", fam: "π-Shift (π − α)", valid: Math.abs(x) >= 1 - 1e-7 },
      acsc: { name: "csc⁻¹(x)", eq: "csc θ = x", dom: "|x| ≥ 1", rng: "[−π/2, π/2] \\ {0}", fam: "Odd (−α for x < 0)", valid: Math.abs(x) >= 1 - 1e-7 }
    }[fn];

    const promptEl = document.getElementById("inv-lcd-prompt");
    if (promptEl) promptEl.textContent = `${meta.name} • x =`;
    const rangePill = document.getElementById("inv-lcd-range-pill");
    if (rangePill) rangePill.textContent = meta.rng;
    const domPill = document.getElementById("inv-lcd-dom-pill");
    if (domPill) {
      domPill.textContent = meta.valid ? `DOMAIN ${meta.dom} ✓` : `OUT OF DOMAIN ⚠`;
      domPill.classList.toggle("is-err", !meta.valid);
    }
    document.querySelectorAll("#calc-device-inverse [data-inv-fn]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.invFn === fn);
    });

    if (!meta.valid || Number.isNaN(x)) {
      outEl.innerHTML = `
        <div class="calc-lcd-error">
          <div class="calc-lcd-error-title">⚠ MATH ERROR — DOMAIN VIOLATION</div>
          <div>x = <strong>${x}</strong> is outside <strong>${meta.dom}</strong> for <strong>${meta.name}</strong> (${meta.eq} has 0 real roots).</div>
        </div>
      `;
      return;
    }

    const clampedUnit = Math.min(1, Math.max(-1, x));
    const clampedRecip = Math.min(1, Math.max(-1, 1 / x));
    let pv = 0;
    if (fn === "asin") pv = Math.asin(clampedUnit);
    else if (fn === "acos") pv = Math.acos(clampedUnit);
    else if (fn === "atan") pv = Math.atan(x);
    else if (fn === "acot") pv = Math.PI / 2 - Math.atan(x);
    else if (fn === "asec") pv = Math.acos(clampedRecip);
    else if (fn === "acsc") pv = Math.asin(clampedRecip);

    const pvDeg = (pv * 180) / Math.PI;
    const hitPi = PI_FRACTIONS.find(([rad]) => Math.abs(pv - rad) < 2e-4);
    const pvDisplay = hitPi ? hitPi[1] : `${pv.toFixed(5)} rad (${pvDeg.toFixed(2)}°)`;

    let genSol = "";
    let prinList = [];
    if (fn === "asin" || fn === "acsc") {
      const sVal = fn === "asin" ? clampedUnit : clampedRecip;
      const a = Math.asin(sVal);
      const aStr = (PI_FRACTIONS.find(([r]) => Math.abs(a - r) < 2e-4)?.[1].split(" ")[0]) || `${a.toFixed(4)}`;
      genSol = `θ = nπ + (−1)ⁿ·(${aStr}), n ∈ ℤ`;
      for (let n = -1; n <= 3; n++) {
        const r = n * Math.PI + (n % 2 === 0 ? 1 : -1) * a;
        if (r >= -1e-7 && r < 2 * Math.PI - 1e-7 && !prinList.some((u) => Math.abs(u - r) < 1e-4)) prinList.push(r);
      }
    } else if (fn === "acos" || fn === "asec") {
      const cVal = fn === "acos" ? clampedUnit : clampedRecip;
      const a = Math.acos(cVal);
      const aStr = (PI_FRACTIONS.find(([r]) => Math.abs(a - r) < 2e-4)?.[1].split(" ")[0]) || `${a.toFixed(4)}`;
      genSol = `θ = 2nπ ± ${aStr}, n ∈ ℤ`;
      [a, 2 * Math.PI - a].forEach((r) => {
        const norm = ((r % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        if (!prinList.some((u) => Math.abs(u - norm) < 1e-4)) prinList.push(norm);
      });
    } else {
      const a = fn === "atan" ? Math.atan(x) : Math.PI / 2 - Math.atan(x);
      const aStr = (PI_FRACTIONS.find(([r]) => Math.abs(a - r) < 2e-4)?.[1].split(" ")[0]) || `${a.toFixed(4)}`;
      genSol = `θ = nπ + (${aStr}), n ∈ ℤ`;
      for (let n = -1; n <= 3; n++) {
        const r = n * Math.PI + a;
        if (r >= -1e-7 && r < 2 * Math.PI - 1e-7 && !prinList.some((u) => Math.abs(u - r) < 1e-4)) prinList.push(r);
      }
    }
    prinList.sort((u, v) => u - v);

    outEl.innerHTML = `
      <div class="calc-lcd-spotlight">
        <div class="calc-lcd-spot-expr">PRINCIPAL VALUE • ${meta.name}</div>
        <div class="calc-lcd-spot-val">${pvDisplay}</div>
      </div>
      <div class="calc-inv-lcd-lines">
        <div class="calc-inv-line">
          <span class="calc-inv-k">BRANCH</span>
          <span class="calc-inv-v">${meta.fam} • Range ${meta.rng}</span>
        </div>
        <div class="calc-inv-line">
          <span class="calc-inv-k">[0°, 360°)</span>
          <span class="calc-inv-v">${prinList.map((r) => `${((r * 180) / Math.PI).toFixed(1)}° (${r.toFixed(3)} rad)`).join(" , ")}</span>
        </div>
        <div class="calc-inv-line">
          <span class="calc-inv-k">GEN SOL</span>
          <span class="calc-inv-v">${genSol}</span>
        </div>
      </div>
    `;
  }

  const PROOF_PRESETS = [
    {
      label: "θ in Degrees (avoid ±45°, ±135°)",
      defaultVal: 25,
      chapterId: "ch-12-simplification",
      chapterTag: "Ch 12 • Simplification (Core)",
      statementTex: "$$\\frac{\\sin^4\\theta - \\cos^4\\theta}{\\sin^2\\theta - \\cos^2\\theta} \\equiv 1 \\qquad (\\sin^2\\theta \\neq \\cos^2\\theta)$$",
      evalPair: (deg) => {
        const r = (deg * Math.PI) / 180;
        const s2 = Math.sin(r) ** 2;
        const c2 = Math.cos(r) ** 2;
        if (Math.abs(s2 - c2) < 1e-9) return { err: "Denominator sin²θ − cos²θ = 0 at θ = 45° + 90°k (removable singularity!). Pick another θ." };
        return { argStr: `θ = ${deg}°`, lhs: (s2 * s2 - c2 * c2) / (s2 - c2), rhs: 1 };
      },
      steps: [
        "<strong>Step 1 (Difference of Squares $a^2 - b^2$):</strong> Factor numerator $(\\sin^2\\theta)^2 - (\\cos^2\\theta)^2 = (\\sin^2\\theta - \\cos^2\\theta)(\\sin^2\\theta + \\cos^2\\theta)$.",
        "<strong>Step 2 (Cancel Common Factor):</strong> Divide numerator and denominator by $(\\sin^2\\theta - \\cos^2\\theta) \\neq 0$ to leave $\\sin^2\\theta + \\cos^2\\theta$.",
        "<strong>Step 3 (Master Pythagorean Identity):</strong> Apply $\\sin^2\\theta + \\cos^2\\theta = 1 = \\text{RHS}$. $\\blacksquare$"
      ]
    },
    {
      label: "θ in Degrees (avoid 90°, 120°, 240°)",
      defaultVal: 35,
      chapterId: "ch-38-simplification-advanced",
      chapterTag: "Ch 38 • Simplification (Multi-Angle)",
      statementTex: "$$\\frac{\\sin\\theta + \\sin 2\\theta}{1 + \\cos\\theta + \\cos 2\\theta} \\equiv \\tan\\theta$$",
      evalPair: (deg) => {
        const r = (deg * Math.PI) / 180;
        const den = 1 + Math.cos(r) + Math.cos(2 * r);
        if (Math.abs(den) < 1e-9 || Math.abs(Math.cos(r)) < 1e-9) return { err: "Denominator vanishes at this angle. Try θ = 35° or 50°." };
        return { argStr: `θ = ${deg}°`, lhs: (Math.sin(r) + Math.sin(2 * r)) / den, rhs: Math.tan(r) };
      },
      steps: [
        "<strong>Step 1 (Kill $1 + \\cos 2\\theta$):</strong> Replace $1 + \\cos 2\\theta = 2\\cos^2\\theta$ in the denominator, and $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ in the numerator.",
        "<strong>Step 2 (Factor Both Sides):</strong> $\\text{LHS} = \\frac{\\sin\\theta + 2\\sin\\theta\\cos\\theta}{\\cos\\theta + 2\\cos^2\\theta} = \\frac{\\sin\\theta(1 + 2\\cos\\theta)}{\\cos\\theta(1 + 2\\cos\\theta)}$.",
        "<strong>Step 3 (Quotient Collapse):</strong> Cancel $(1 + 2\\cos\\theta)$ to get $\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta = \\text{RHS}$. $\\blacksquare$"
      ]
    },
    {
      label: "Real Input x ≠ 0 (e.g. x = 1.2 or -0.75)",
      defaultVal: 1.2,
      chapterId: "ch-38-simplification-advanced",
      chapterTag: "Ch 38 • Inverse Radical Substitution",
      statementTex: "$$\\tan^{-1}\\!\\left(\\frac{\\sqrt{1+x^2} - 1}{x}\\right) \\equiv \\frac{1}{2}\\tan^{-1}x \\qquad (x \\neq 0)$$",
      evalPair: (x) => {
        if (Math.abs(x) < 1e-9) return { err: "x = 0 is a removable singularity (limit is 0). Enter any non-zero real x!" };
        return { argStr: `x = ${x}`, lhs: Math.atan((Math.sqrt(1 + x * x) - 1) / x), rhs: 0.5 * Math.atan(x) };
      },
      steps: [
        "<strong>Step 1 (Canonical Substitution $\\sqrt{1+x^2}$):</strong> Let $x = \\tan\\theta$ with $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2}) \\setminus \\{0\\}$. Then $\\sqrt{1+\\tan^2\\theta} = \\sec\\theta$ (since $\\cos\\theta > 0$).",
        "<strong>Step 2 (Half-Angle Collapse):</strong> $\\frac{\\sec\\theta - 1}{\\tan\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{2\\sin^2(\\theta/2)}{2\\sin(\\theta/2)\\cos(\\theta/2)} = \\tan\\!\\left(\\frac{\\theta}{2}\\right)$.",
        "<strong>Step 3 (Principal Branch Check):</strong> Since $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2}) \\implies \\frac{\\theta}{2} \\in (-\\frac{\\pi}{4}, \\frac{\\pi}{4}) \\subset (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\tan^{-1}(\\tan\\frac{\\theta}{2}) = \\frac{\\theta}{2} = \\frac{1}{2}\\tan^{-1}x$. $\\blacksquare$"
      ]
    },
    {
      label: "x in Radians inside (−0.78, 2.35)",
      defaultVal: 0.5,
      chapterId: "ch-38-simplification-advanced",
      chapterTag: "Ch 38 • Inverse Phase Shift",
      statementTex: "$$\\tan^{-1}\\!\\left(\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right) \\equiv \\frac{\\pi}{4} - x \\qquad \\left(-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}\\right)$$",
      evalPair: (x) => {
        if (x <= -Math.PI / 4 + 1e-6 || x >= (3 * Math.PI) / 4 - 1e-6) {
          return { err: "Choose x strictly inside (−π/4, 3π/4) ≈ (−0.785, 2.356) so π/4 − x stays on the principal branch (−π/2, π/2)!" };
        }
        return { argStr: `x = ${x} rad`, lhs: Math.atan((Math.cos(x) - Math.sin(x)) / (Math.cos(x) + Math.sin(x))), rhs: Math.PI / 4 - x };
      },
      steps: [
        "<strong>Step 1 (Divide Top &amp; Bottom by $\\cos x$):</strong> $\\frac{\\cos x - \\sin x}{\\cos x + \\sin x} = \\frac{1 - \\tan x}{1 + 1\\cdot\\tan x} = \\tan\\!\\left(\\frac{\\pi}{4} - x\\right)$.",
        "<strong>Step 2 (Verify Principal Range):</strong> Given $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$, multiplying by $-1$ and adding $\\frac{\\pi}{4}$ gives $-\\frac{\\pi}{2} < \\frac{\\pi}{4} - x < \\frac{\\pi}{2}$.",
        "<strong>Step 3 (Cancel $\\tan^{-1} \\circ \\tan$):</strong> Because $\\frac{\\pi}{4} - x$ lies strictly inside $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\tan^{-1}\\!\\left(\\tan(\\frac{\\pi}{4}-x)\\right) = \\frac{\\pi}{4} - x$. $\\blacksquare$"
      ]
    },
    {
      label: "θ in Degrees (avoid ±90°)",
      defaultVal: 40,
      chapterId: "ch-13-proving",
      chapterTag: "Ch 13 • Proof of Identities (Core)",
      statementTex: "$$\\tan^2\\theta - \\sin^2\\theta \\equiv \\tan^2\\theta \\cdot \\sin^2\\theta$$",
      evalPair: (deg) => {
        const r = (deg * Math.PI) / 180;
        if (Math.abs(Math.cos(r)) < 1e-9) return { err: "tan θ is undefined at odd multiples of 90°." };
        const t2 = Math.tan(r) ** 2;
        const s2 = Math.sin(r) ** 2;
        return { argStr: `θ = ${deg}°`, lhs: t2 - s2, rhs: t2 * s2 };
      },
      steps: [
        "<strong>Step 1 (Convert $\\tan^2\\theta$ to $\\sin/\\cos$):</strong> $\\text{LHS} = \\frac{\\sin^2\\theta}{\\cos^2\\theta} - \\sin^2\\theta$.",
        "<strong>Step 2 (Factor Out $\\sin^2\\theta$):</strong> $\\text{LHS} = \\sin^2\\theta\\!\\left(\\frac{1}{\\cos^2\\theta} - 1\\right) = \\sin^2\\theta\\!\\left(\\frac{1 - \\cos^2\\theta}{\\cos^2\\theta}\\right)$.",
        "<strong>Step 3 (Pythagorean Swap $1 - \\cos^2\\theta = \\sin^2\\theta$):</strong> $\\text{LHS} = \\sin^2\\theta \\cdot \\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta\\sin^2\\theta = \\text{RHS}$. $\\blacksquare$"
      ]
    },
    {
      label: "x in Degrees (avoid 30°, 45°, 90°)",
      defaultVal: 20,
      chapterId: "ch-39-proof-identities-advanced",
      chapterTag: "Ch 39 • Split-Angle Proof",
      statementTex: "$$\\tan 3x - \\tan 2x - \\tan x \\equiv \\tan 3x \\cdot \\tan 2x \\cdot \\tan x$$",
      evalPair: (deg) => {
        const r = (deg * Math.PI) / 180;
        if (Math.abs(Math.cos(r)) < 1e-8 || Math.abs(Math.cos(2 * r)) < 1e-8 || Math.abs(Math.cos(3 * r)) < 1e-8) {
          return { err: "One of tan x, tan 2x, tan 3x hits an asymptote here. Try x = 20° or 15°!" };
        }
        const t1 = Math.tan(r), t2 = Math.tan(2 * r), t3 = Math.tan(3 * r);
        return { argStr: `x = ${deg}°`, lhs: t3 - t2 - t1, rhs: t3 * t2 * t1 };
      },
      steps: [
        "<strong>Step 1 (Split $3x = 2x + x$):</strong> Write $\\tan 3x = \\tan(2x + x) = \\frac{\\tan 2x + \\tan x}{1 - \\tan 2x\\tan x}$.",
        "<strong>Step 2 (Cross-Multiply):</strong> $\\tan 3x(1 - \\tan 2x\\tan x) = \\tan 2x + \\tan x \\implies \\tan 3x - \\tan 3x\\tan 2x\\tan x = \\tan 2x + \\tan x$.",
        "<strong>Step 3 (Rearrange Terms):</strong> $\\tan 3x - \\tan 2x - \\tan x = \\tan 3x\\tan 2x\\tan x = \\text{RHS}$. $\\blacksquare$"
      ]
    },
    {
      label: "x in Degrees (any real angle!)",
      defaultVal: 37,
      chapterId: "ch-39-proof-identities-advanced",
      chapterTag: "Ch 39 • Power-Lowering Proof",
      statementTex: "$$\\cos^2 x + \\cos^2\\!\\left(x + \\frac{\\pi}{3}\\right) + \\cos^2\\!\\left(x - \\frac{\\pi}{3}\\right) \\equiv \\frac{3}{2}$$",
      evalPair: (deg) => {
        const r = (deg * Math.PI) / 180;
        const lhs = Math.cos(r) ** 2 + Math.cos(r + Math.PI / 3) ** 2 + Math.cos(r - Math.PI / 3) ** 2;
        return { argStr: `x = ${deg}°`, lhs, rhs: 1.5 };
      },
      steps: [
        "<strong>Step 1 (Power-Lowering $\\cos^2\\phi = \\frac{1+\\cos 2\\phi}{2}$):</strong> $\\text{LHS} = \\frac{1}{2}\\!\\left[3 + \\cos 2x + \\cos(2x + \\frac{2\\pi}{3}) + \\cos(2x - \\frac{2\\pi}{3})\\right]$.",
        "<strong>Step 2 (Sum-to-Product on Shifted Pair):</strong> $\\cos(2x + \\frac{2\\pi}{3}) + \\cos(2x - \\frac{2\\pi}{3}) = 2\\cos 2x\\cos\\frac{2\\pi}{3} = 2\\cos 2x(-\\frac{1}{2}) = -\\cos 2x$.",
        "<strong>Step 3 (Exact Cancellation):</strong> $\\text{LHS} = \\frac{1}{2}[3 + \\cos 2x - \\cos 2x] = \\frac{3}{2} = \\text{RHS}$ for every angle $x \\in \\mathbb{R}$! $\\blacksquare$"
      ]
    },
    {
      label: "Real Input x ≥ 0 (e.g. x = 0.6 or 2.5)",
      defaultVal: 0.6,
      chapterId: "ch-39-proof-identities-advanced",
      chapterTag: "Ch 39 • Range-Bounded Inverse Proof",
      statementTex: "$$2\\tan^{-1}x \\equiv \\cos^{-1}\\!\\left(\\frac{1 - x^2}{1 + x^2}\\right) \\qquad (x \\ge 0)$$",
      evalPair: (x) => {
        if (x < 0) return { err: "For x < 0, 2 tan⁻¹(x) < 0 while cos⁻¹(...) ∈ [0, π], so the identity flips sign to −cos⁻¹((1−x²)/(1+x²))! Enter x ≥ 0." };
        return { argStr: `x = ${x}`, lhs: 2 * Math.atan(x), rhs: Math.acos((1 - x * x) / (1 + x * x)) };
      },
      steps: [
        "<strong>Step 1 (Name Principal Angle &amp; Bound $2\\theta$):</strong> Let $\\theta = \\tan^{-1}x$. Since $x \\ge 0$, $\\theta \\in [0, \\frac{\\pi}{2})$, which guarantees $2\\theta \\in [0, \\pi) \\subset [0, \\pi]$!",
        "<strong>Step 2 (Double-Angle Cosine in Terms of $\\tan\\theta$):</strong> Compute $\\cos(2\\theta) = \\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta} = \\frac{1 - x^2}{1 + x^2}$.",
        "<strong>Step 3 (Invoke Bijectivity of $\\cos$ on $[0, \\pi]$):</strong> Because $2\\theta \\in [0, \\pi]$ (the exact principal range of $\\cos^{-1}$!), taking $\\cos^{-1}$ yields $2\\theta = \\cos^{-1}\\!\\left(\\frac{1-x^2}{1+x^2}\\right)$, i.e. $2\\tan^{-1}x = \\cos^{-1}\\!\\left(\\frac{1-x^2}{1+x^2}\\right)$. $\\blacksquare$"
      ]
    }
  ];

  function runIdentityProofWorkbench(resetDefaultVal = false) {
    const sel = document.getElementById("proof-preset-select");
    const xIn = document.getElementById("proof-test-x");
    const lbl = document.getElementById("lbl-proof-test-x");
    const out = document.getElementById("proof-workbench-output");
    if (!sel || !xIn || !out) return;

    const idx = Number(sel.value) || 0;
    const p = PROOF_PRESETS[idx] || PROOF_PRESETS[0];
    if (lbl) lbl.textContent = `Test Input: ${p.label}`;
    if (resetDefaultVal) xIn.value = p.defaultVal;

    document.querySelectorAll("#proof-prog-keys [data-proof-idx]").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.proofIdx) === idx);
    });

    const val = parseCalcNumber(xIn.value, 0);
    const res = p.evalPair(val);

    const numericHtml = res.err
      ? `<div class="calc-lcd-error" style="margin-top:0.55rem;"><div class="calc-lcd-error-title">⚠ DOMAIN / BRANCH BOUNDARY</div><div>${res.err}</div></div>`
      : `<div class="calc-cas-telemetry">
           <div class="calc-cas-chip"><span>TEST</span><strong>${res.argStr}</strong></div>
           <div class="calc-cas-chip"><span>LHS</span><strong>${res.lhs.toFixed(8)}</strong></div>
           <div class="calc-cas-chip"><span>RHS</span><strong>${res.rhs.toFixed(8)}</strong></div>
           <div class="calc-cas-chip ok"><span>|Δ|</span><strong>${Math.abs(res.lhs - res.rhs).toExponential(2)} ✓</strong></div>
         </div>`;

    out.innerHTML = `
      <div class="calc-cas-head-row">
        <span class="calc-cas-tag">${p.chapterTag}</span>
        <button type="button" class="calc-cas-ch-btn" id="btn-open-proof-ch">Open Chapter →</button>
      </div>
      <div class="calc-cas-math-box">${p.statementTex}</div>
      ${numericHtml}
      <div class="calc-cas-steps">
        ${p.steps.map((s) => `<div class="calc-cas-step">${s}</div>`).join("")}
      </div>
    `;

    out.querySelector("#btn-open-proof-ch")?.addEventListener("click", () => openModule(p.chapterId));
    typesetMath(out);
  }

  function runTriangleSolver() {
    const mode = document.getElementById("tri-mode")?.value;
    const i1 = parseCalcNumber(document.getElementById("tri-v1")?.value, 0);
    const i2 = parseCalcNumber(document.getElementById("tri-v2")?.value, 0);
    const i3 = parseCalcNumber(document.getElementById("tri-v3")?.value, 0);
    const out = document.getElementById("tri-solver-output");
    const canvas = document.getElementById("tri-solver-canvas");
    if (!mode || !out || !canvas) return;

    const modeBadge = document.getElementById("tri-lcd-mode-badge");
    if (modeBadge) modeBadge.textContent = `MODE: ${mode}`;
    document.querySelectorAll("#tri-mode-keys [data-tri-mode]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.triMode === mode);
    });

    const labels = {
      SSS: ["Side a", "Side b", "Side c"],
      SAS: ["Side a", "Included Angle C (°)", "Side b"],
      ASA: ["Angle A (°)", "Included Side c", "Angle B (°)"]
    }[mode];
    document.getElementById("lbl-tri-1").textContent = labels[0];
    document.getElementById("lbl-tri-2").textContent = labels[1];
    document.getElementById("lbl-tri-3").textContent = labels[2];

    let a, b, c, A, B, C;
    let errorMsg = "";

    if (i1 <= 0 || i2 <= 0 || i3 <= 0) {
      errorMsg = "All inputs must be positive numbers.";
    } else if (mode === "SSS") {
      a = i1; b = i2; c = i3;
      if (a + b <= c || a + c <= b || b + c <= a) {
        errorMsg = "Triangle Inequality violated! Any two sides must sum to strictly more than the third side.";
      } else {
        A = (Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 180) / Math.PI;
        B = (Math.acos((a * a + c * c - b * b) / (2 * a * c)) * 180) / Math.PI;
        C = 180 - A - B;
      }
    } else if (mode === "SAS") {
      a = i1; C = i2; b = i3;
      if (C >= 180) {
        errorMsg = "Included angle C must be strictly less than 180°.";
      } else {
        const radC = (C * Math.PI) / 180;
        c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(radC));
        A = (Math.acos(Math.min(1, Math.max(-1, (b * b + c * c - a * a) / (2 * b * c)))) * 180) / Math.PI;
        B = 180 - A - C;
      }
    } else if (mode === "ASA") {
      A = i1; c = i2; B = i3;
      if (A + B >= 180) {
        errorMsg = "Angles A + B must be strictly less than 180°.";
      } else {
        C = 180 - A - B;
        const radA = (A * Math.PI) / 180;
        const radB = (B * Math.PI) / 180;
        const radC = (C * Math.PI) / 180;
        a = (c * Math.sin(radA)) / Math.sin(radC);
        b = (c * Math.sin(radB)) / Math.sin(radC);
      }
    }

    if (errorMsg) {
      out.innerHTML = `<div class="calc-lcd-error" style="margin-top:0.55rem;"><div class="calc-lcd-error-title">⚠ GEOMETRY ERROR</div><div>${errorMsg}</div></div>`;
      window.TrigVisualizers.drawSolvedTriangle(canvas, null);
      return;
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(Math.max(0, s * (s - a) * (s - b) * (s - c)));
    const circumR = (a * b * c) / (4 * area);
    const inr = area / s;

    out.innerHTML = `
      <div class="calc-tri-lcd-grid">
        <div class="calc-cas-chip"><span>SIDES</span><strong>a=${a.toFixed(2)}, b=${b.toFixed(2)}, c=${c.toFixed(2)}</strong></div>
        <div class="calc-cas-chip"><span>ANGLES</span><strong>A=${A.toFixed(1)}°, B=${B.toFixed(1)}°, C=${C.toFixed(1)}°</strong></div>
        <div class="calc-cas-chip"><span>AREA Δ</span><strong>${area.toFixed(3)} sq.u</strong></div>
        <div class="calc-cas-chip"><span>RADII</span><strong>R=${circumR.toFixed(3)} • r=${inr.toFixed(3)}</strong></div>
      </div>
    `;
    window.TrigVisualizers.drawSolvedTriangle(canvas, { a, b, c, A, B, C });
  }

  /* ------------------------------------------------------------------------
     Master Formula Category Rendering (Sequential Beginning -> End: Ch 1 -> Ch 44)
     ------------------------------------------------------------------------ */
  function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard
        .writeText(text)
        .then(() => showLootToast("📋 Formula LaTeX copied to clipboard!"))
        .catch(() => fallbackCopyText(text));
    } else {
      fallbackCopyText(text);
    }
  }

  function fallbackCopyText(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showLootToast("📋 Formula LaTeX copied to clipboard!");
    } catch (_) {
      showLootToast("⚠️ Could not copy automatically.");
    }
    document.body.removeChild(ta);
  }

  function splitDisplayBlockIntoPlates(rawBlock) {
    let inner = rawBlock.trim();
    if (inner.startsWith("$$") && inner.endsWith("$$")) {
      inner = inner.slice(2, -2).trim();
    }
    const parts = [];
    let buf = "";
    let i = 0;
    const n = inner.length;
    let braceDepth = 0;
    let envDepth = 0;
    let lrDepth = 0;

    while (i < n) {
      if (inner.startsWith("\\begin{", i)) {
        envDepth += 1;
      } else if (inner.startsWith("\\end{", i)) {
        envDepth = Math.max(0, envDepth - 1);
      } else if (
        inner.startsWith("\\left", i) &&
        (i + 5 === n || !/[A-Za-z]/.test(inner[i + 5]))
      ) {
        lrDepth += 1;
      } else if (
        inner.startsWith("\\right", i) &&
        (i + 6 === n || !/[A-Za-z]/.test(inner[i + 6]))
      ) {
        lrDepth = Math.max(0, lrDepth - 1);
      } else if (inner[i] === "{" && (i === 0 || inner[i - 1] !== "\\")) {
        braceDepth += 1;
      } else if (inner[i] === "}" && (i === 0 || inner[i - 1] !== "\\")) {
        braceDepth = Math.max(0, braceDepth - 1);
      }

      if (braceDepth === 0 && envDepth === 0 && lrDepth === 0) {
        const rest = inner.slice(i);
        const m = rest.match(
          /^\s*(?:[,;]\s*\\qquad|[,;]\s*\\quad|\\quad\|\s*\\quad|\\qquad(?=[A-Za-z\\(|0-9-]))\s*/
        );
        if (m) {
          const chunk = buf.trim();
          if (chunk) parts.push(chunk);
          buf = "";
          i += m[0].length;
          continue;
        }
      }
      buf += inner[i];
      i += 1;
    }

    const tail = buf.trim();
    if (tail) parts.push(tail);

    const merged = [];
    parts.forEach((p) => {
      if (
        merged.length &&
        (((p.startsWith("(") || p.startsWith("\\left(")) && !p.includes("=")) ||
          p.startsWith("\\text{or}"))
      ) {
        merged[merged.length - 1] += " \\quad " + p;
      } else {
        merged.push(p);
      }
    });

    return merged.map((p) => `$$${p}$$`);
  }

  function escapeHtmlAttr(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function buildFormulaCardHtml(f, accentColor) {
    const gradeParts = (f.grade || "").split("•").map((s) => s.trim());
    const chShort = gradeParts[0] || "Chapter";
    const realmLabel = gradeParts[1] || "";
    const hasMod = f.chapterId && VALID_IDS.has(f.chapterId);
    const unlocked = hasMod ? isModuleUnlocked(f.chapterId) : false;
    const rawBlocks = f.tex.match(/\$\$[\s\S]*?\$\$/g) || [f.tex];
    const atomicPlates = [];
    rawBlocks.forEach((blk) => {
      splitDisplayBlockIntoPlates(blk).forEach((sub) => atomicPlates.push(sub));
    });

    const hasMatrix = f.tex.includes("\\begin{array}");
    const isWide =
      hasMatrix ||
      atomicPlates.length >= 4 ||
      atomicPlates.some((blk) => blk.length > 155);
    const numStr = String(f.seqNum).padStart(2, "0");

    const eqPlatesHtml = atomicPlates
      .map((blk, idx) => {
        const isMatrixPlate = blk.includes("\\begin{array}");
        const isFullRow =
          isMatrixPlate ||
          blk.includes("\\begin{") ||
          blk.length > 98 ||
          atomicPlates.length === 1;
        const rawPlateTex = blk.replace(/^\$\$|\$\$$/g, "").trim();
        return `
          <div class="vault-eq-plate ${isFullRow ? "vault-eq-plate-full" : ""} ${isMatrixPlate ? "vault-eq-plate-matrix" : ""}" data-copy-plate="${escapeHtmlAttr(rawPlateTex)}" title="Tap equation to copy">
            ${atomicPlates.length > 1 ? `<span class="vault-eq-step" aria-hidden="true">${idx + 1}</span>` : ""}
            <div class="vault-eq-math">${blk}</div>
            ${isMatrixPlate ? `<span class="vault-matrix-hint" aria-hidden="true">↔ Swipe</span>` : ""}
          </div>
        `;
      })
      .join("");

    return `
      <article class="formula-card ${isWide ? "formula-card-wide" : ""}" style="--card-accent:${accentColor || "#f97316"};">
        <div class="formula-card-top">
          <div class="formula-card-head">
            <div class="formula-head-left">
              <span class="formula-num-badge">#${numStr}</span>
              <span class="formula-ch-chip">${chShort}</span>
              ${realmLabel ? `<span class="formula-realm-lbl">${realmLabel}</span>` : ""}
            </div>
            <span class="formula-cat-pill">${f.category}</span>
          </div>
          <h3 class="formula-card-title">${f.title}</h3>
          <div class="vault-eq-grid">${eqPlatesHtml}</div>
        </div>
        <div class="formula-card-bottom">
          ${
            f.note
              ? `<div class="formula-note-pill">
                  <span class="formula-note-icon" aria-hidden="true">💡</span>
                  <div class="formula-note-text"><strong>Key Insight:</strong> ${f.note}</div>
                </div>`
              : ""
          }
          <div class="formula-card-actions">
            <button type="button" class="formula-action-btn" data-copy-formula="${f.seqNum - 1}">
              📋 Copy Card
            </button>
            ${
              hasMod
                ? `<button type="button" class="formula-action-btn formula-action-primary" data-vault-open-ch="${f.chapterId}">
                    ${unlocked ? `📖 Study ${chShort} →` : `🔒 ${chShort} Lesson`}
                  </button>`
                : ""
            }
          </div>
        </div>
      </article>
    `;
  }

  function renderFormulaVault() {
    const q = (document.getElementById("vault-search")?.value || "").trim().toLowerCase();
    const gradeFilter = document.getElementById("vault-grade-filter")?.value || "ALL";
    const grid = document.getElementById("vault-grid");
    const countBadge = document.getElementById("vault-count-badge");
    const resetBtn = document.getElementById("vault-reset-btn");
    const foldAllBtn = document.getElementById("vault-fold-all-btn");
    if (!grid) return;

    const indexedFormulas = FORMULAS.map((f, idx) => ({ ...f, seqNum: idx + 1 }));
    const isFiltered = Boolean(q) || gradeFilter !== "ALL" || currentVaultSection !== "ALL";

    const list = indexedFormulas.filter((f) => {
      if (currentVaultSection !== "ALL" && f.sectionId !== currentVaultSection) return false;
      if (gradeFilter !== "ALL" && !f.grade.startsWith(gradeFilter + " ")) return false;
      if (!q) return true;
      return (
        f.title.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q) ||
        f.grade.toLowerCase().includes(q) ||
        f.tex.toLowerCase().includes(q) ||
        (f.note && f.note.toLowerCase().includes(q))
      );
    });

    if (countBadge) {
      countBadge.textContent = isFiltered
        ? `${list.length} / ${FORMULAS.length} Cards`
        : `${FORMULAS.length} Formula Cards • ${FORMULA_SECTIONS.length || 12} Sections`;
    }
    if (resetBtn) {
      resetBtn.hidden = !isFiltered;
    }
    if (foldAllBtn) {
      foldAllBtn.hidden = isFiltered;
      const allFolded =
        FORMULA_SECTIONS.length > 0 &&
        FORMULA_SECTIONS.every((s) => collapsedVaultSections.has(s.id));
      foldAllBtn.textContent = allFolded ? "↕ Expand All" : "↕ Collapse All";
    }

    if (!list.length) {
      grid.innerHTML = `
        <div class="callout callout-pitfall" style="margin-top:0.5rem;">
          <div class="callout-title">🔎 No Matching Formulas Found</div>
          <div>No formulas matched your current filter. Tap <strong>Reset</strong> or try a broader keyword (e.g., <em>Base</em>, <em>Perpendicular</em>, <em>Radian</em>, <em>Euler</em>, <em>Inverse</em>).</div>
        </div>
      `;
      return;
    }

    if (FORMULA_SECTIONS.length > 0) {
      grid.innerHTML = FORMULA_SECTIONS.map((sec) => {
        const secItems = list.filter((f) => f.sectionId === sec.id);
        if (!secItems.length) return "";
        const firstNum = String(secItems[0].seqNum).padStart(2, "0");
        const lastNum = String(secItems[secItems.length - 1].seqNum).padStart(2, "0");
        const cleanSecTitle = sec.title.replace(/^Section\s+\d+:\s*/i, "");
        const isCollapsed = !isFiltered && collapsedVaultSections.has(sec.id);
        return `
          <section class="vault-section-block ${isCollapsed ? "is-collapsed" : ""}" style="--sec-accent:${sec.color};">
            <button type="button" class="vault-section-header" data-toggle-vault-sec="${sec.id}" aria-expanded="${!isCollapsed}">
              <div class="vault-sec-medallion" aria-hidden="true">${String(sec.num).padStart(2, "0")}</div>
              <div class="vault-section-head-body">
                <div class="vault-section-eyebrow">
                  <span class="vault-part-pill">Section ${sec.num} of ${FORMULA_SECTIONS.length}</span>
                  <span class="vault-section-range">#${firstNum}–#${lastNum} (${secItems.length})</span>
                </div>
                <h3 class="vault-section-title">${cleanSecTitle}</h3>
                <p class="vault-section-sub">${sec.subtitle}</p>
              </div>
              <span class="vault-sec-chevron" aria-hidden="true">${isCollapsed ? "▸" : "▾"}</span>
            </button>
            ${
              isCollapsed
                ? ""
                : `<div class="formula-cards-grid">
                    ${secItems.map((f) => buildFormulaCardHtml(f, sec.color)).join("")}
                  </div>`
            }
          </section>
        `;
      }).join("");
    } else {
      grid.innerHTML = `<div class="formula-cards-grid">${list
        .map((f) => buildFormulaCardHtml(f, "#f97316"))
        .join("")}</div>`;
    }

    grid.querySelectorAll("[data-toggle-vault-sec]").forEach((hdr) => {
      hdr.addEventListener("click", () => {
        if (isFiltered) return;
        triggerHaptic(8);
        const sid = hdr.dataset.toggleVaultSec;
        if (collapsedVaultSections.has(sid)) {
          collapsedVaultSections.delete(sid);
        } else {
          collapsedVaultSections.add(sid);
        }
        renderFormulaVault();
      });
    });

    grid.querySelectorAll("[data-copy-plate]").forEach((plate) => {
      plate.addEventListener("click", () => {
        const sel = window.getSelection && window.getSelection().toString();
        if (sel) return;
        triggerHaptic(10);
        const texStr = plate.dataset.copyPlate || "";
        if (!texStr) return;
        copyTextToClipboard(texStr);
        plate.classList.add("plate-copied");
        setTimeout(() => plate.classList.remove("plate-copied"), 1100);
      });
    });

    grid.querySelectorAll("[data-copy-formula]").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(10);
        const item = FORMULAS[Number(btn.dataset.copyFormula)];
        if (!item) return;
        const cleanTex = item.tex
          .replace(/\$\$\s*\$\$/g, "\n")
          .replace(/\$\$/g, "")
          .trim();
        copyTextToClipboard(cleanTex);
        const origHtml = btn.innerHTML;
        btn.classList.add("copied");
        btn.innerHTML = "✓ Copied!";
        setTimeout(() => {
          btn.classList.remove("copied");
          btn.innerHTML = origHtml;
        }, 1500);
      });
    });

    grid.querySelectorAll("[data-vault-open-ch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(10);
        openModule(btn.dataset.vaultOpenCh);
      });
    });

    typesetMath(grid);
  }

  /* ------------------------------------------------------------------------
     Grand Master Summary Rendering (Bottom of Roadmap + Final Summary Tab)
     ------------------------------------------------------------------------ */
  let currentSummaryStage = "ALL";

  function buildSummaryBlocksHtml(stageFilter = "ALL", query = "") {
    const blocks = window.TRIG_SUMMARY_BLOCKS || [];
    const q = query.trim().toLowerCase();

    return blocks
      .filter((b) => stageFilter === "ALL" || b.id === stageFilter)
      .map((b) => {
        const filteredItems = b.items.filter((it) => {
          if (!q) return true;
          return (
            it.title.toLowerCase().includes(q) ||
            it.summary.toLowerCase().includes(q) ||
            it.goldenRule.toLowerCase().includes(q) ||
            it.formulaTex.toLowerCase().includes(q)
          );
        });
        if (!filteredItems.length) return "";

        const clearedInBlock = b.items.filter((it) => completedSet.has(it.chapterId)).length;
        const blockPct = Math.round((clearedInBlock / b.items.length) * 100);

        const cardsHtml = filteredItems
          .map((it) => {
            const targetMod = MODULES.find((m) => m.id === it.chapterId);
            const chLabel = targetMod ? targetMod.grade.split("•")[0].trim() : "Open";
            const isCleared = completedSet.has(it.chapterId);
            const unlocked = isModuleUnlocked(it.chapterId);
            return `
              <div class="summary-pillar-card" style="${isCleared ? "border-color:rgba(250,204,21,0.55);" : !unlocked ? "opacity:0.78;border-style:dashed;" : ""}">
                <div>
                  <div class="summary-card-top">
                    <div style="display:flex;align-items:center;gap:0.55rem;">
                      <span class="summary-num-badge" style="background:linear-gradient(135deg, ${b.color}, #ea580c);">${it.num}</span>
                      <h4 class="summary-card-title">${it.title}</h4>
                    </div>
                    <span class="tag" style="flex-shrink:0;">${isCleared ? "★ " : unlocked ? "🔓 " : "🔒 "}${chLabel}</span>
                  </div>
                  <p class="summary-card-desc" style="margin-top:0.5rem;">${formatInlineMarkdownBold(it.summary)}</p>
                  <div class="math-box" style="margin:0.55rem 0;padding:0.55rem 0.65rem;font-size:0.86rem;">${it.formulaTex}</div>
                </div>
                <div>
                  <div class="summary-rule-pill"><strong>⚡ Key Rule:</strong> ${formatInlineMarkdownBold(it.goldenRule)}</div>
                  <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.55rem;">
                    <button type="button" class="summary-jump-link" data-summary-raid="${it.chapterId}">
                      ${unlocked ? "🎮 Play 15 MCQs" : "🔒 MCQs Locked"}
                    </button>
                    <button type="button" class="summary-jump-link" data-summary-open="${it.chapterId}">
                      ${unlocked ? `📖 ${chLabel} Scroll →` : `🔒 ${chLabel} Locked`}
                    </button>
                  </div>
                </div>
              </div>
            `;
          })
          .join("");

        return `
          <div class="summary-stage-block" style="border-top: 3px solid ${b.color};">
            <div class="summary-stage-header">
              <img src="${b.animal}" alt="${b.animalName}" class="summary-stage-mascot" style="border-color:${b.color};" />
              <div style="flex:1;">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
                  <span class="tag">${b.badge} • ${b.animalName}</span>
                  <span style="font-size:0.78rem;font-weight:800;color:#fbbf24;">🏆 ${clearedInBlock}/${b.items.length} Quests Cleared (${blockPct}%)</span>
                </div>
                <h3 style="margin:0.25rem 0 0;font-size:1.12rem;">${b.title}</h3>
                <p style="margin:0.2rem 0 0;font-size:0.86rem;color:var(--text-secondary);">${b.subtitle}</p>
              </div>
            </div>
            <div class="summary-pillar-grid">${cardsHtml}</div>
          </div>
        `;
      })
      .join("");
  }

  function wireSummaryJumpButtons(rootEl) {
    if (!rootEl) return;
    rootEl.querySelectorAll("[data-summary-open]").forEach((btn) => {
      btn.addEventListener("click", () => openModule(btn.dataset.summaryOpen));
    });
    rootEl.querySelectorAll("[data-summary-raid]").forEach((btn) => {
      btn.addEventListener("click", () => startBossRaid(btn.dataset.summaryRaid));
    });
    typesetMath(rootEl);
  }

  function renderRoadmapSummary() {
    const mount = document.getElementById("roadmap-summary-blocks-mount");
    if (!mount) return;
    mount.innerHTML = buildSummaryBlocksHtml("ALL", "");
    wireSummaryJumpButtons(mount);
  }

  function renderSummaryTab() {
    const mount = document.getElementById("master-summary-mount");
    const q = document.getElementById("summary-search-input")?.value || "";
    if (!mount) return;
    const html = buildSummaryBlocksHtml(currentSummaryStage, q);
    mount.innerHTML =
      html ||
      `<div class="callout callout-pitfall">No summary pillars matched "<strong>${q}</strong>". Try clearing the search box!</div>`;
    wireSummaryJumpButtons(mount);
  }

  /* ------------------------------------------------------------------------
     🎓 Bilingual Professor Lecture Hall Engine (English & Urdu / اردو)
     ------------------------------------------------------------------------ */
  let activeVoiceBtn = null;

  function stopLectureVoice() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (activeVoiceBtn) {
      activeVoiceBtn.classList.remove("speaking");
      if (activeVoiceBtn.dataset.origLabel) {
        activeVoiceBtn.innerHTML = activeVoiceBtn.dataset.origLabel;
      }
      activeVoiceBtn = null;
    }
  }

  function speakLectureVoice(text, langPref, btnEl) {
    if (!("speechSynthesis" in window)) {
      showLootToast("⚠️ Browser Speech Synthesis is not supported in this browser.");
      return;
    }
    if (activeVoiceBtn === btnEl) {
      stopLectureVoice();
      return;
    }
    stopLectureVoice();

    const utter = new SpeechSynthesisUtterance(text);
    const rateVal = parseFloat(document.getElementById("lecture-voice-rate")?.value || "1") || 1;
    utter.rate = rateVal;

    const voices = window.speechSynthesis.getVoices() || [];
    if (langPref === "ur") {
      utter.lang = "ur-PK";
      const urVoice =
        voices.find((v) => /^ur/i.test(v.lang)) ||
        voices.find((v) => /urdu/i.test(v.name)) ||
        voices.find((v) => /^hi/i.test(v.lang));
      if (urVoice) {
        utter.voice = urVoice;
        utter.lang = urVoice.lang;
      } else {
        showLootToast("🇵🇰 Tip: Install Windows 'Urdu (Pakistan)' Speech Voice for native Urdu audio!");
      }
    } else {
      utter.lang = "en-US";
      const enVoice =
        voices.find((v) => /^en-(US|GB|IN)/i.test(v.lang)) ||
        voices.find((v) => /^en/i.test(v.lang));
      if (enVoice) utter.voice = enVoice;
    }

    if (btnEl) {
      if (!btnEl.dataset.origLabel) btnEl.dataset.origLabel = btnEl.innerHTML;
      btnEl.classList.add("speaking");
      btnEl.innerHTML = langPref === "ur" ? "⏹ چل رہا ہے (روکیں)" : "⏹ Playing (Stop)";
      activeVoiceBtn = btnEl;
    }

    utter.onend = () => stopLectureVoice();
    utter.onerror = () => stopLectureVoice();
    window.speechSynthesis.speak(utter);
  }

  function getDualGridModeClass() {
    if (globalLectureLangMode === "en") return "mode-en";
    if (globalLectureLangMode === "ur") return "mode-ur";
    return "";
  }

  function buildInlineLangPillsHtml() {
    return `
      <div class="lecture-lang-bar" data-local-lang-bar="1">
        <button type="button" class="lecture-lang-pill ${globalLectureLangMode === "en" ? "active" : ""}" data-set-lang="en">🇬🇧 English</button>
        <button type="button" class="lecture-lang-pill ${globalLectureLangMode === "ur" ? "active" : ""}" data-set-lang="ur">🇵🇰 اردو</button>
      </div>
    `;
  }

  function buildSingleYoutubeCardHtml(vidId, title, channel, searchQuery, langType, badgeText) {
    if (!vidId) return "";
    const isUr = langType === "ur";
    const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(vidId)}`;
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery || title)}`;
    const thumbUrl = `https://i.ytimg.com/vi/${encodeURIComponent(vidId)}/hqdefault.jpg`;
    const safeTitle = String(title || "YouTube Trigonometry Lecture").replace(/"/g, "&quot;");

    return `
      <div class="yt-video-card ${isUr ? "lecture-ur-col yt-ur-card" : "lecture-en-col yt-en-card"}" ${isUr ? 'dir="rtl"' : ""}>
        <div>
          <div class="lecture-col-header">
            <span>▶️ ${isUr ? "اردو یوٹیوب ویڈیو لیکچر (URDU YOUTUBE)" : "ENGLISH YOUTUBE VIDEO LECTURE"}</span>
            <span>${badgeText}</span>
          </div>
          <div class="yt-player-slot" data-yt-slot="${vidId}">
            <button type="button" class="yt-thumb-trigger" data-yt-play="${vidId}" data-yt-title="${safeTitle}" aria-label="Play YouTube Lecture: ${safeTitle}">
              <img src="${thumbUrl}" alt="${safeTitle}" class="yt-thumb-img" loading="lazy" />
              <div class="yt-thumb-gradient"></div>
              <div class="yt-play-badge">
                <svg viewBox="0 0 68 48" width="58" height="41" aria-hidden="true">
                  <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#ff0000"/>
                  <path d="M 45,24 27,14 27,34" fill="#ffffff"/>
                </svg>
              </div>
              <span class="yt-channel-chip" dir="ltr">📺 ${channel || "YouTube Maths"}</span>
            </button>
          </div>
          <div class="yt-video-title">${title}</div>
        </div>
        <div class="yt-action-bar" dir="ltr">
          <button type="button" class="yt-inline-play-btn" data-yt-play-btn="${vidId}" data-yt-title="${safeTitle}">
            ▶️ ${isUr ? "Play Here (یہیں چلائیں)" : "Play Inside Page"}
          </button>
          <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="yt-ext-link">
            ↗ ${isUr ? "Watch on YouTube" : "Open on YouTube"}
          </a>
          <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="yt-ext-link yt-more-link">
            🔎 ${isUr ? "More Urdu Videos" : "More Topic Videos"}
          </a>
        </div>
      </div>
    `;
  }

  function buildYoutubeDualBoxHtml(ytObj, badgeEn, badgeUr) {
    if (!ytObj || (!ytObj.enId && !ytObj.urId)) return "";
    return `
      <div class="yt-lecture-section">
        <div class="yt-section-banner">
          <span>📺 Curated YouTube Video Lectures (Play Inline or on YouTube)</span>
          <span dir="rtl">منتخب یوٹیوب ویڈیو لیکچرز (انگلش اور اردو)</span>
        </div>
        <div class="lecture-dual-grid yt-dual-grid ${getDualGridModeClass()}" data-dual-grid="1">
          ${buildSingleYoutubeCardHtml(ytObj.enId, ytObj.enTitle, ytObj.enChannel, ytObj.enQuery, "en", badgeEn)}
          ${buildSingleYoutubeCardHtml(ytObj.urId, ytObj.urTitle, ytObj.urChannel, ytObj.urQuery, "ur", badgeUr)}
        </div>
      </div>
    `;
  }

  function buildRealmLectureCardHtml(tierId, opts = {}) {
    const db = window.TRIG_BILINGUAL_LECTURES || { realms: {}, chapters: {} };
    const ytDb = window.TRIG_YOUTUBE_LECTURES || { realms: {}, chapters: {} };
    const r = db.realms?.[tierId];
    if (!r) return "";
    const ytRealm = ytDb.realms?.[tierId];
    const g = TIER_GUARDIANS[tierId] || TIER_GUARDIANS["tier-1"];
    const encEnVoice = encodeURIComponent(r.enVoice || "");
    const encUrVoice = encodeURIComponent(r.urVoice || "");

    return `
      <div class="bilingual-lecture-card" data-lecture-card="realm-${tierId}">
        <div class="lecture-card-top">
          <div style="display:flex;gap:0.85rem;align-items:flex-start;flex:1;min-width:0;">
            <img src="${g.img}" alt="${g.animal}" style="width:54px;height:54px;border-radius:50%;object-fit:cover;border:2px solid #fbbf24;flex-shrink:0;" />
            <div class="lecture-title-pair">
              <div class="lecture-badge-row">
                <span class="lecture-level-tag">🏛️ ${r.enBadge}</span>
                <span class="lecture-level-tag" dir="rtl">${r.urBadge}</span>
                <span class="tag">▶️ YouTube + Notes</span>
              </div>
              <h3 style="margin:0.15rem 0 0;font-size:1.15rem;">${r.enTitle}</h3>
              <div class="lecture-ur-subhead" dir="rtl">${r.urTitle}</div>
            </div>
          </div>

          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.45rem;">
            ${buildInlineLangPillsHtml()}
            <div class="lecture-voice-cluster">
              <button type="button" class="lecture-voice-btn" data-speak-lang="en" data-speak-text="${encEnVoice}">🔊 Listen (English)</button>
              <button type="button" class="lecture-voice-btn" data-speak-lang="ur" data-speak-text="${encUrVoice}">🔊 اردو میں سنیں</button>
              ${
                opts.showOpenHallBtn
                  ? `<button type="button" class="lecture-voice-btn" data-jump-lecture-hall="${tierId}">🎓 All Level ${r.levelNum} Lectures →</button>`
                  : ""
              }
            </div>
          </div>
        </div>

        ${buildYoutubeDualBoxHtml(ytRealm, `Level ${r.levelNum}`, `لیول ${r.levelNum}`)}

        <div class="lecture-chalkboard">
          <div class="lecture-chalkboard-label">
            <span>📐 Professor Chalkboard — Master Formulas</span>
            <span dir="rtl">استاد کا بلیک بورڈ — بنیادی فارمولے</span>
          </div>
          <div>${r.boardTex}</div>
        </div>

        <div class="lecture-dual-grid ${getDualGridModeClass()}" data-dual-grid="1">
          <div class="lecture-en-col">
            <div>
              <div class="lecture-col-header">
                <span>🇬🇧 ENGLISH MASTER LECTURE</span>
                <span>Step-by-Step Explanation</span>
              </div>
              <ul class="lecture-en-list">
                ${r.enSteps.map((s) => `<li>${s}</li>`).join("")}
              </ul>
            </div>
            <div class="lecture-tip-strip">
              <strong>⚡ Golden Exam Tip:</strong> ${r.enTip}
            </div>
          </div>

          <div class="lecture-ur-col" dir="rtl">
            <div>
              <div class="lecture-col-header">
                <span>🇵🇰 اردو جامع لیکچر (URDU LECTURE)</span>
                <span>مرحلہ وار تفصیلی وضاحت</span>
              </div>
              <ul class="lecture-ur-list">
                ${r.urSteps.map((s) => `<li>${s}</li>`).join("")}
              </ul>
            </div>
            <div class="lecture-tip-strip">
              <strong>⚡ امتحانی سنہری اصول:</strong> ${r.urTip}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function buildChapterLectureCardHtml(mod, modIdx, opts = {}) {
    const db = window.TRIG_BILINGUAL_LECTURES || { realms: {}, chapters: {} };
    const ytDb = window.TRIG_YOUTUBE_LECTURES || { realms: {}, chapters: {} };
    const lec = db.chapters?.[mod.id];
    if (!lec) return "";
    const ytCh = ytDb.chapters?.[mod.id] || ytDb.realms?.[mod.tierId];
    const chNum = modIdx + 1;
    const tier = TIERS.find((t) => t.id === mod.tierId);
    const levelLabel = tier ? `Level ${TIERS.indexOf(tier) + 1}` : mod.grade;
    const encEnVoice = encodeURIComponent(lec.enVoice || "");
    const encUrVoice = encodeURIComponent(lec.urVoice || "");

    return `
      <div class="bilingual-lecture-card" data-lecture-card="ch-${mod.id}">
        <div class="lecture-card-top">
          <div class="lecture-title-pair">
            <div class="lecture-badge-row">
              <span class="lecture-level-tag">🎓 ${levelLabel} • Chapter ${chNum} Lecture + YouTube</span>
              <span class="lecture-level-tag" dir="rtl">باب ${chNum} • یوٹیوب + تحریری لیکچر</span>
            </div>
            <h3 style="margin:0.15rem 0 0;font-size:1.12rem;">${lec.enTitle}</h3>
            <div class="lecture-ur-subhead" dir="rtl">${lec.urTitle}</div>
          </div>

          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.45rem;">
            ${buildInlineLangPillsHtml()}
            <div class="lecture-voice-cluster">
              <button type="button" class="lecture-voice-btn" data-speak-lang="en" data-speak-text="${encEnVoice}">🔊 Listen (English)</button>
              <button type="button" class="lecture-voice-btn" data-speak-lang="ur" data-speak-text="${encUrVoice}">🔊 اردو آڈیو</button>
              ${
                opts.includeRealmToggle
                  ? `<button type="button" class="lecture-voice-btn" data-toggle-inline-realm="${mod.tierId}">🏛️ ${levelLabel} Overview Lecture</button>`
                  : ""
              }
              ${
                opts.showChapterActions
                  ? `
                  <button type="button" class="lecture-voice-btn" data-lec-open-mod="${mod.id}">📖 Full Notes &amp; Lab →</button>
                  <button type="button" class="lecture-voice-btn" data-lec-raid-mod="${mod.id}">⚔️ Raid</button>
                `
                  : ""
              }
            </div>
          </div>
        </div>

        ${
          opts.includeRealmToggle
            ? `<div id="inline-realm-lecture-slot" style="display:none;margin-bottom:1rem;"></div>`
            : ""
        }

        ${buildYoutubeDualBoxHtml(ytCh, `Ch ${chNum}`, `باب ${chNum}`)}

        <div class="lecture-chalkboard">
          <div class="lecture-chalkboard-label">
            <span>📐 Key Board Formula — Ch ${chNum}</span>
            <span dir="rtl">بورڈ کا مرکزی فارمولا</span>
          </div>
          <div>${lec.boardTex}</div>
        </div>

        <div class="lecture-dual-grid ${getDualGridModeClass()}" data-dual-grid="1">
          <div class="lecture-en-col">
            <div>
              <div class="lecture-col-header">
                <span>🇬🇧 ENGLISH LECTURE</span>
                <span>Ch ${chNum} Key Concepts</span>
              </div>
              <ol class="lecture-en-list">
                ${lec.enLecture.map((p) => `<li>${p}</li>`).join("")}
              </ol>
            </div>
            <div class="lecture-tip-strip">
              <strong>💡 Professor's Pro-Tip:</strong> ${lec.enTip}
            </div>
          </div>

          <div class="lecture-ur-col" dir="rtl">
            <div>
              <div class="lecture-col-header">
                <span>🇵🇰 اردو لیکچر (URDU)</span>
                <span>باب ${chNum} کے اہم نکات</span>
              </div>
              <ol class="lecture-ur-list">
                ${lec.urLecture.map((p) => `<li>${p}</li>`).join("")}
              </ol>
            </div>
            <div class="lecture-tip-strip">
              <strong>💡 استاد کا خاص مشورہ:</strong> ${lec.urTip}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function syncAllLectureLanguageGrids() {
    const cls = getDualGridModeClass();
    document.querySelectorAll("[data-dual-grid]").forEach((grid) => {
      grid.classList.remove("mode-en", "mode-ur");
      if (cls) grid.classList.add(cls);
    });
    const enSec = document.getElementById("yt200-en-section");
    const urSec = document.getElementById("yt200-ur-section");
    if (enSec) enSec.style.display = globalLectureLangMode === "ur" ? "none" : "block";
    if (urSec) urSec.style.display = globalLectureLangMode === "en" ? "none" : "block";

    document.querySelectorAll("[data-set-lang], #lecture-hub-lang-bar [data-lang-mode]").forEach((btn) => {
      const m = btn.dataset.setLang || btn.dataset.langMode;
      btn.classList.toggle("active", m === globalLectureLangMode);
    });
  }

  function wireLectureControls(rootEl) {
    if (!rootEl) return;
    typesetMath(rootEl);

    rootEl.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        globalLectureLangMode = btn.dataset.setLang;
        syncAllLectureLanguageGrids();
      });
    });

    rootEl.querySelectorAll("[data-speak-text]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const txt = decodeURIComponent(btn.dataset.speakText || "");
        const lang = btn.dataset.speakLang || "en";
        speakLectureVoice(txt, lang, btn);
      });
    });

    rootEl.querySelectorAll("[data-jump-lecture-hall]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentLecturesTierFilter = btn.dataset.jumpLectureHall || "ALL";
        document.querySelectorAll("#lectures-level-filter [data-lec-tier]").forEach((b) => {
          b.classList.toggle("active", b.dataset.lecTier === currentLecturesTierFilter);
        });
        switchView("lectures");
      });
    });

    rootEl.querySelectorAll("[data-toggle-inline-realm]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const slot = rootEl.querySelector("#inline-realm-lecture-slot");
        if (!slot) return;
        if (slot.style.display === "none") {
          slot.style.display = "block";
          slot.innerHTML = buildRealmLectureCardHtml(btn.dataset.toggleInlineRealm, { showOpenHallBtn: true });
          wireLectureControls(slot);
        } else {
          slot.style.display = "none";
          slot.innerHTML = "";
        }
      });
    });

    rootEl.querySelectorAll("[data-lec-open-mod]").forEach((btn) => {
      btn.addEventListener("click", () => openModule(btn.dataset.lecOpenMod));
    });

    rootEl.querySelectorAll("[data-lec-raid-mod]").forEach((btn) => {
      btn.addEventListener("click", () => startBossRaid(btn.dataset.lecRaidMod));
    });

    const mountYt = (slotEl, vidId, title) => {
      if (!slotEl || !vidId) return;
      const safeTitle = String(title || "YouTube Lecture").replace(/"/g, "&quot;");
      slotEl.innerHTML = `
        <div class="yt-iframe-wrap">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(vidId)}?autoplay=1&rel=0"
            title="${safeTitle}"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      `;
    };

    rootEl.querySelectorAll("[data-yt-play]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const slot = btn.closest(".yt-player-slot");
        mountYt(slot, btn.dataset.ytPlay, btn.dataset.ytTitle);
      });
    });

    rootEl.querySelectorAll("[data-yt-play-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".yt-video-card");
        const slot = card?.querySelector(".yt-player-slot");
        mountYt(slot, btn.dataset.ytPlayBtn, btn.dataset.ytTitle);
      });
    });
  }

  function buildLockedLectureCardHtml(enHeading, urHeading, badgeEn, badgeUr, reqTextEn, reqTextUr) {
    const frontierMod = MODULES[getUnlockedMaxIndex()] || MODULES[0];
    const frontierShort = frontierMod.grade.split("•")[0].trim();
    return `
      <div class="bilingual-lecture-card locked-lecture-card">
        <div class="lecture-badge-row">
          <span class="lecture-level-tag">🔒 ${badgeEn}</span>
          <span class="lecture-level-tag" dir="rtl">🔒 ${badgeUr}</span>
        </div>
        <h3 style="margin:0.15rem 0 0;font-size:1.08rem;opacity:0.88;">🔒 ${enHeading}</h3>
        <div class="lecture-ur-subhead" dir="rtl" style="opacity:0.88;">🔒 ${urHeading}</div>
        <div class="locked-lecture-banner">
          <div style="flex:1;min-width:0;">
            <div style="font-size:0.88rem;line-height:1.55;">${reqTextEn}</div>
            <div dir="rtl" style="font-family:'Noto Nastaliq Urdu','Noto Naskh Arabic','Segoe UI',Tahoma,sans-serif;font-size:0.96rem;line-height:2.15;color:#fde68a;margin-top:0.25rem;">
              ${reqTextUr}
            </div>
          </div>
          <button type="button" class="lecture-voice-btn" data-lec-open-mod="${frontierMod.id}">
            🚀 Go to Active Level (${frontierShort}) →
          </button>
        </div>
      </div>
    `;
  }

  function buildYt200CardHtml(item, langTag) {
    const isUr = langTag === "ur";
    const lvNum = item.tierId ? item.tierId.split("-")[1] : "1";
    const codeBadge = isUr ? `🇵🇰🇮🇳 UR/HI #${item.num}` : `🇬🇧 EN #${item.num}`;
    const safeTitle = String(item.title || "Trigonometry Lecture").replace(/"/g, "&quot;");
    const thumbUrl = `https://i.ytimg.com/vi/${encodeURIComponent(item.id)}/hqdefault.jpg`;
    const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(item.id)}`;

    return `
      <div class="yt-video-card yt200-card">
        <div>
          <div class="yt200-card-top">
            <span class="yt200-num-pill ${isUr ? "ur-pill" : "en-pill"}">${codeBadge}</span>
            <span class="yt200-lv-pill">Lv ${lvNum}</span>
          </div>
          <div class="yt-player-slot" data-yt-slot="${item.id}">
            <button type="button" class="yt-thumb-trigger" data-yt-play="${item.id}" data-yt-title="${safeTitle}" aria-label="Play ${safeTitle}">
              <img src="${thumbUrl}" alt="${safeTitle}" class="yt-thumb-img" loading="lazy" />
              <div class="yt-thumb-gradient"></div>
              <div class="yt-play-badge">
                <svg viewBox="0 0 68 48" width="52" height="37" aria-hidden="true">
                  <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#ff0000"/>
                  <path d="M 45,24 27,14 27,34" fill="#ffffff"/>
                </svg>
              </div>
              <span class="yt-channel-chip">📺 ${item.channel}</span>
            </button>
          </div>
          <div class="yt200-title">${item.title}</div>
        </div>
        <div class="yt-action-bar">
          <button type="button" class="yt-inline-play-btn" data-yt-play-btn="${item.id}" data-yt-title="${safeTitle}">
            ▶️ Play Here
          </button>
          <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="yt-ext-link">
            ↗ YouTube
          </a>
        </div>
      </div>
    `;
  }

  let activeSpotlightModId = null;

  function renderLecturesTab() {
    const spotlightMount = document.getElementById("lectures-youtube-spotlight");
    const yt200Mount = document.getElementById("lectures-yt200-library-mount");
    const realmsMount = document.getElementById("lectures-realms-mount");
    const chaptersMount = document.getElementById("lectures-chapters-mount");
    if (!realmsMount || !chaptersMount) return;

    const db = window.TRIG_BILINGUAL_LECTURES || { realms: {}, chapters: {} };
    const ytDb = window.TRIG_YOUTUBE_LECTURES || { realms: {}, chapters: {} };
    const yt200Db = window.TRIG_YOUTUBE_LIBRARY_200 || { en: [], urHi: [] };
    const q = (document.getElementById("lectures-search-input")?.value || "").trim().toLowerCase();
    const frontierMod = MODULES[getUnlockedMaxIndex()] || MODULES[0];
    const frontierShort = frontierMod.grade.split("•")[0].trim();

    // Render 200-Video YouTube Mega Vault (100 English + 100 Urdu & Hindi)
    if (yt200Mount) {
      const matchItem = (v) => {
        if (currentLecturesTierFilter !== "ALL" && v.tierId !== currentLecturesTierFilter) return false;
        if (!q) return true;
        const hay = `${v.title} ${v.channel} #${v.num} ${v.tierId}`.toLowerCase();
        return hay.includes(q);
      };
      const enFiltered = (yt200Db.en || []).filter(matchItem);
      const urFiltered = (yt200Db.urHi || []).filter(matchItem);

      yt200Mount.innerHTML = `
        <div class="yt200-summary-bar">
          <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
            <span class="lecture-level-tag">🎬 Total Library: ${(yt200Db.en || []).length} English + ${(yt200Db.urHi || []).length} Urdu/Hindi = ${(yt200Db.en || []).length + (yt200Db.urHi || []).length} YouTube Lectures</span>
            <span style="font-size:0.84rem;color:var(--text-secondary);">Showing <strong>${enFiltered.length}</strong> English &amp; <strong>${urFiltered.length}</strong> Urdu/Hindi videos</span>
          </div>
          <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
            <button type="button" class="lecture-voice-btn" data-scroll-yt-sec="yt200-en-section">🇬🇧 100 English Videos ↓</button>
            <button type="button" class="lecture-voice-btn" data-scroll-yt-sec="yt200-ur-section">🇵🇰🇮🇳 100 Urdu + Hindi Videos ↓</button>
            <button type="button" class="lecture-voice-btn" data-scroll-yt-sec="lectures-realms-mount">📘 Written &amp; Voice Notes ↓</button>
          </div>
        </div>

        <div id="yt200-en-section" style="display:${globalLectureLangMode === "ur" ? "none" : "block"};">
          <div class="lectures-level-divider">
            <h3>🇬🇧 English YouTube Trigonometry Video Library (${enFiltered.length} / 100 Videos)</h3>
            <span>Play Directly Inside Page or Open on YouTube</span>
          </div>
          ${
            enFiltered.length
              ? `<div class="yt200-vault-grid">${enFiltered.map((v) => buildYt200CardHtml(v, "en")).join("")}</div>`
              : `<div class="callout callout-pitfall">No English YouTube videos matched your filter.</div>`
          }
        </div>

        <div id="yt200-ur-section" style="display:${globalLectureLangMode === "en" ? "none" : "block"};">
          <div class="lectures-level-divider">
            <h3>🇵🇰🇮🇳 Urdu &amp; Hindi YouTube Trigonometry Video Library (${urFiltered.length} / 100 Videos)</h3>
            <span dir="rtl" style="font-weight:700;">100 اردو اور ہندی یوٹیوب ویڈیو لیکچرز</span>
          </div>
          ${
            urFiltered.length
              ? `<div class="yt200-vault-grid">${urFiltered.map((v) => buildYt200CardHtml(v, "ur")).join("")}</div>`
              : `<div class="callout callout-pitfall">No Urdu/Hindi YouTube videos matched your filter.</div>`
          }
        </div>
      `;

      wireLectureControls(yt200Mount);
      yt200Mount.querySelectorAll("[data-scroll-yt-sec]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetId = btn.dataset.scrollYtSec;
          if (targetId === "yt200-en-section") {
            globalLectureLangMode = "en";
            syncAllLectureLanguageGrids();
          } else if (targetId === "yt200-ur-section") {
            globalLectureLangMode = "ur";
            syncAllLectureLanguageGrids();
          }
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }

    // 0. Render Featured YouTube Video Lecture Theater at top of Lectures category
    if (spotlightMount) {
      const unlockedPool = MODULES.map((m, idx) => ({ mod: m, idx })).filter(({ mod, idx }) => {
        if (!isModuleUnlocked(idx)) return false;
        if (currentLecturesTierFilter !== "ALL" && mod.tierId !== currentLecturesTierFilter) return false;
        if (!q) return true;
        const yt = ytDb.chapters?.[mod.id];
        const hay = [mod.title, yt?.enTitle, yt?.urTitle, yt?.enChannel, yt?.urChannel].join(" ").toLowerCase();
        return hay.includes(q);
      });

      if (unlockedPool.length) {
        if (!activeSpotlightModId || !unlockedPool.some((x) => x.mod.id === activeSpotlightModId)) {
          activeSpotlightModId = unlockedPool[unlockedPool.length - 1].mod.id;
        }
        const activeEntry = unlockedPool.find((x) => x.mod.id === activeSpotlightModId) || unlockedPool[0];
        const activeYt = ytDb.chapters?.[activeEntry.mod.id] || ytDb.realms?.[activeEntry.mod.tierId];
        const chNum = activeEntry.idx + 1;

        spotlightMount.innerHTML = `
          <div class="yt-spotlight-cinema">
            <div class="yt-spotlight-head">
              <div>
                <span class="lecture-level-tag">📺 YouTube Video Lecture Playlist (${unlockedPool.length} Unlocked)</span>
                <h3 style="margin:0.3rem 0 0.15rem;font-size:1.14rem;">▶️ Watch YouTube Lectures: Chapter ${chNum} — ${activeEntry.mod.title.replace(/^\d+\.\s*/, "")}</h3>
              </div>
              <span dir="rtl" style="font-family:'Noto Nastaliq Urdu','Noto Naskh Arabic',sans-serif;font-weight:700;color:#fde68a;">
                یوٹیوب ویڈیو لیکچر تھیٹر (انگلش + اردو)
              </span>
            </div>
            <div class="yt-playlist-strip">
              ${unlockedPool
                .map(
                  ({ mod, idx }) => `
                  <button type="button" class="lab-pill ${mod.id === activeEntry.mod.id ? "active" : ""}" data-yt-spot-mod="${mod.id}">
                    ▶️ Ch ${idx + 1}: ${mod.title.replace(/^\d+\.\s*/, "")}
                  </button>
                `
                )
                .join("")}
            </div>
            ${buildYoutubeDualBoxHtml(activeYt, `Ch ${chNum} Featured`, `باب ${chNum}`)}
          </div>
        `;
        wireLectureControls(spotlightMount);
        spotlightMount.querySelectorAll("[data-yt-spot-mod]").forEach((btn) => {
          btn.addEventListener("click", () => {
            activeSpotlightModId = btn.dataset.ytSpotMod;
            renderLecturesTab();
          });
        });
      } else {
        spotlightMount.innerHTML = "";
      }
    }

    // 1. Render matching Level Master Lectures (unlocked open, locked step-by-step)
    const matchingTiers = TIERS.filter((t) => {
      if (currentLecturesTierFilter !== "ALL" && t.id !== currentLecturesTierFilter) return false;
      if (!q) return true;
      const r = db.realms?.[t.id];
      if (!r) return false;
      const hay = [r.enTitle, r.urTitle, r.enBadge, r.urBadge, ...(r.enSteps || []), ...(r.urSteps || [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });

    realmsMount.innerHTML = matchingTiers.length
      ? `
        <div class="lectures-level-divider" style="margin-top:0.5rem;">
          <h3>🏛️ Part 1: Master Level Overview Lectures (${matchingTiers.length} Level${matchingTiers.length > 1 ? "s" : ""})</h3>
          <span dir="rtl" style="font-weight:700;">حصہ اول: ہر لیول کے جامع ماسٹر لیکچرز (انگلش + اردو)</span>
        </div>
        ${matchingTiers
          .map((t) => {
            if (isTierUnlocked(t.id)) {
              return buildRealmLectureCardHtml(t.id, { showOpenHallBtn: false });
            }
            const r = db.realms?.[t.id];
            const prevLv = TIERS.indexOf(t);
            return buildLockedLectureCardHtml(
              r?.enTitle || t.name,
              r?.urTitle || "",
              `Locked • ${r?.enBadge || "Level"}`,
              `مقفل • ${r?.urBadge || ""}`,
              `<strong>Step-by-Step Unlock:</strong> Complete all chapters in <strong>Level ${prevLv}</strong> first (currently at <strong>${frontierMod.title}</strong>) to unlock this Level's English &amp; Urdu Master Lecture!`,
              `یہ ماسٹر لیکچر کھولنے کے لیے پہلے <strong>لیول ${prevLv}</strong> مکمل کریں! اس وقت آپ کا فعال مرحلہ <strong>${frontierShort}</strong> ہے۔`
            );
          })
          .join("")}
      `
      : "";

    // 2. Render matching Chapter-by-Chapter Bilingual Lectures grouped by Level
    let chHtml = "";
    TIERS.forEach((tier, tIdx) => {
      if (currentLecturesTierFilter !== "ALL" && tier.id !== currentLecturesTierFilter) return;
      const tierMods = MODULES.map((m, globalIdx) => ({ mod: m, globalIdx })).filter(({ mod }) => {
        if (mod.tierId !== tier.id) return false;
        if (!q) return true;
        const lec = db.chapters?.[mod.id];
        if (!lec) return false;
        const hay = [
          mod.title,
          mod.grade,
          lec.enTitle,
          lec.urTitle,
          ...(lec.enLecture || []),
          ...(lec.urLecture || []),
          lec.enTip,
          lec.urTip
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });

      if (!tierMods.length) return;
      const r = db.realms?.[tier.id];
      const tierOpen = isTierUnlocked(tier.id);
      chHtml += `
        <div class="lectures-level-divider">
          <h3>${tierOpen ? "🔓" : "🔒"} Level ${tIdx + 1}: ${tier.name.replace(/^Group \d:\s*/, "")} — Chapter Lectures (${tierMods.length})</h3>
          <span dir="rtl" style="font-weight:700;">${r ? r.urBadge : ""}</span>
        </div>
        ${tierMods
          .map(({ mod, globalIdx }) => {
            if (isModuleUnlocked(globalIdx)) {
              return buildChapterLectureCardHtml(mod, globalIdx, { showChapterActions: true });
            }
            const lec = db.chapters?.[mod.id];
            const prevShort = globalIdx > 0 ? MODULES[globalIdx - 1].grade.split("•")[0].trim() : "Ch 1";
            return buildLockedLectureCardHtml(
              lec?.enTitle || mod.title,
              lec?.urTitle || "",
              `Locked • Chapter ${globalIdx + 1} Lecture`,
              `مقفل • باب ${globalIdx + 1}`,
              `<strong>Locked Stage:</strong> Complete <strong>${prevShort}</strong> first to unlock Chapter ${globalIdx + 1}'s English &amp; Urdu Lecture step-by-step!`,
              `باب ${globalIdx + 1} کا اردو اور انگلش لیکچر کھولنے کے لیے پہلے <strong>${prevShort}</strong> مکمل کریں!`
            );
          })
          .join("")}
      `;
    });

    chaptersMount.innerHTML =
      chHtml ||
      (!matchingTiers.length
        ? `<div class="callout callout-pitfall">No English or Urdu lectures matched "<strong>${q}</strong>". Try clearing the search box!</div>`
        : "");

    wireLectureControls(realmsMount);
    wireLectureControls(chaptersMount);
    syncAllLectureLanguageGrids();
  }

  /* ------------------------------------------------------------------------
     Live Orange Mathematics Display Wallpaper Initialization
     ------------------------------------------------------------------------ */
  function initMathBackgroundDisplay() {
    const mount = document.getElementById("math-floating-formulas");
    if (!mount) return;
    const formulas = [
      { txt: "sin²θ + cos²θ = 1", x: 4, y: 11, size: "1.12rem", rot: -6, dur: 11 },
      { txt: "e^{iθ} = cos θ + i sin θ", x: 64, y: 9, size: "1.18rem", rot: 5, dur: 14 },
      { txt: "π rad = 180°", x: 34, y: 7, size: "1.05rem", rot: -4, dur: 10 },
      { txt: "SOH • CAH • TOA", x: 24, y: 21, size: "1.22rem", rot: 4, dur: 13 },
      { txt: "sin 2A = 2 sin A cos A", x: 76, y: 27, size: "1.02rem", rot: -5, dur: 12 },
      { txt: "1 + tan²θ = sec²θ", x: 6, y: 34, size: "1.04rem", rot: 7, dur: 15 },
      { txt: "sin⁻¹x + cos⁻¹x = π/2", x: 52, y: 33, size: "1.1rem", rot: -3, dur: 13 },
      { txt: "c² = a² + b² − 2ab cos C", x: 81, y: 44, size: "0.98rem", rot: 6, dur: 16 },
      { txt: "tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)", x: 18, y: 47, size: "0.92rem", rot: -4, dur: 14 },
      { txt: "θ = nπ + (−1)ⁿα", x: 68, y: 55, size: "1.08rem", rot: 5, dur: 11 },
      { txt: "cos 3θ = 4cos³θ − 3cos θ", x: 5, y: 59, size: "0.98rem", rot: -6, dur: 13 },
      { txt: "l = rθ   •   A = ½r²θ", x: 44, y: 63, size: "1.06rem", rot: 3, dur: 12 },
      { txt: "a / sin A = b / sin B = 2R", x: 75, y: 69, size: "0.98rem", rot: -5, dur: 15 },
      { txt: "lim(x→0) (sin x)/x = 1", x: 14, y: 74, size: "1.05rem", rot: 4, dur: 12 },
      { txt: "cos 2θ = 1 − 2sin²θ = 2cos²θ − 1", x: 48, y: 79, size: "0.96rem", rot: -3, dur: 14 },
      { txt: "∑ 1/n² = π²/6", x: 84, y: 84, size: "1.14rem", rot: 6, dur: 11 },
      { txt: "4 tan⁻¹(1/5) − tan⁻¹(1/239) = π/4", x: 26, y: 88, size: "0.95rem", rot: -4, dur: 16 },
      { txt: "1 + cot²θ = cosec²θ", x: 60, y: 92, size: "1.02rem", rot: 3, dur: 13 },
      { txt: "√3/2  •  1/√2  •  1/2", x: 8, y: 91, size: "1.05rem", rot: -5, dur: 10 },
      { txt: "∫ sin x dx = −cos x + C", x: 38, y: 16, size: "1.0rem", rot: 5, dur: 15 }
    ];

    mount.innerHTML = formulas
      .map(
        (f, i) => `
        <span
          class="math-float-formula"
          style="left:${f.x}%;top:${f.y}%;font-size:${f.size};--rot:${f.rot}deg;--dur:${f.dur}s;--delay:-${(i * 1.3).toFixed(1)}s;"
        >${f.txt}</span>`
      )
      .join("");
  }

  /* ------------------------------------------------------------------------
     Initialization
     ------------------------------------------------------------------------ */
  function init() {
    initTheme();
    initMathBackgroundDisplay();
    const vaultFilterSel = document.getElementById("vault-grade-filter");
    if (vaultFilterSel) {
      vaultFilterSel.innerHTML =
        `<option value="ALL">📚 All ${MODULES.length} Chapters</option>` +
        MODULES.map((m, idx) => `<option value="Ch ${idx + 1}">${m.title.replace(/^\d+\.\s*/, `Ch ${idx + 1}: `)}</option>`).join("");
    }
    updateProgressUI();
    renderSidebar();
    renderRoadmapCards();
    renderRoadmapSummary();
    initPlaygroundHub();

    document.getElementById("theme-toggle-btn")?.addEventListener("click", toggleTheme);
    document.getElementById("brand-home")?.addEventListener("click", () => {
      triggerHaptic(10);
      switchView("roadmap");
    });
    document.getElementById("mobile-back-btn")?.addEventListener("click", () => {
      triggerHaptic(10);
      switchView("roadmap");
    });
    document.getElementById("mobile-menu-btn")?.addEventListener("click", () => {
      document.getElementById("sidebar")?.classList.toggle("open");
    });

    document.querySelectorAll(".nav-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        triggerHaptic(10);
        switchView(tab.dataset.view);
      });
    });

    document.querySelectorAll(".mobile-nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(10);
        switchView(btn.dataset.view);
      });
    });

    document.getElementById("btn-hero-start")?.addEventListener("click", () => openModule("ch-1-intro"));
    document.getElementById("btn-hero-lectures")?.addEventListener("click", () => switchView("lectures"));
    document.getElementById("btn-hero-class11")?.addEventListener("click", () => openModule("ch-16-trig-functions"));
    document.getElementById("btn-hero-labs")?.addEventListener("click", () => switchView("playground"));
    document.getElementById("btn-hero-summary")?.addEventListener("click", () => {
      const el = document.getElementById("roadmap-last-summary");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else switchView("summary");
    });

    // Bilingual Lecture Hall global controls
    document.querySelectorAll("#lecture-hub-lang-bar [data-lang-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(10);
        globalLectureLangMode = btn.dataset.langMode;
        syncAllLectureLanguageGrids();
      });
    });
    document.getElementById("btn-stop-lecture-voice")?.addEventListener("click", stopLectureVoice);
    document.getElementById("lectures-search-input")?.addEventListener("input", renderLecturesTab);
    document.querySelectorAll("#lectures-level-filter [data-lec-tier]").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(10);
        currentLecturesTierFilter = btn.dataset.lecTier;
        document.querySelectorAll("#lectures-level-filter [data-lec-tier]").forEach((b) => {
          b.classList.toggle("active", b.dataset.lecTier === currentLecturesTierFilter);
        });
        scrollChipIntoView(btn);
        renderLecturesTab();
      });
    });
    document.getElementById("btn-open-ch44")?.addEventListener("click", () => openModule("ch-44-grand-summary"));
    document.getElementById("btn-summary-tab-ch44")?.addEventListener("click", () => openModule("ch-44-grand-summary"));
    document.getElementById("btn-open-summary-tab")?.addEventListener("click", () => switchView("summary"));
    document.getElementById("summary-search-input")?.addEventListener("input", renderSummaryTab);
    document.querySelectorAll("#summary-stage-filter [data-stage]").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(10);
        currentSummaryStage = btn.dataset.stage;
        document.querySelectorAll("#summary-stage-filter [data-stage]").forEach((b) => {
          b.classList.toggle("active", b.dataset.stage === currentSummaryStage);
        });
        scrollChipIntoView(btn);
        renderSummaryTab();
      });
    });

    document.querySelectorAll("[data-quick-mod]").forEach((btn) => {
      btn.addEventListener("click", () => openModule(btn.dataset.quickMod));
    });

    // 🎮 RPG Companion Selector, Active Bounty Raid & Arcade Boss Battle Modal Listeners
    document.querySelectorAll(".rpg-pet-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(12);
        rpgState.petImg = btn.dataset.pet;
        rpgState.petName = btn.dataset.petName;
        saveRpgState();
        updateProgressUI();
        renderQuestTrail();
        showLootToast(`🐾 Companion switched to ${rpgState.petName}!`);
      });
    });

    document.getElementById("btn-bounty-raid")?.addEventListener("click", () => {
      startBossRaid(getFrontierModuleId());
    });
    document.getElementById("btn-bounty-study")?.addEventListener("click", () => {
      openModule(getFrontierModuleId());
    });
    document.getElementById("btn-arcade-raid")?.addEventListener("click", () => {
      const candidate =
        selectedPopoverId && !selectedPopoverId.startsWith("chest-") && isModuleUnlocked(selectedPopoverId)
          ? selectedPopoverId
          : getFrontierModuleId();
      startBossRaid(candidate);
    });
    document.getElementById("btn-close-battle")?.addEventListener("click", closeBossRaid);
    document.getElementById("rpg-battle-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "rpg-battle-modal") closeBossRaid();
    });

    // Quest Trail vs Card Grid Switcher & Jump-to-Active Floating Button
    const btnTrail = document.getElementById("btn-view-trail");
    const btnGrid = document.getElementById("btn-view-grid");
    const arenaEl = document.getElementById("duo-path-arena");
    const gridEl = document.getElementById("roadmap-grid");
    const jumpFab = document.getElementById("btn-jump-active");

    btnTrail?.addEventListener("click", () => {
      btnTrail.classList.add("active");
      btnGrid?.classList.remove("active");
      if (arenaEl) arenaEl.style.display = "flex";
      if (gridEl) gridEl.style.display = "none";
      if (jumpFab) jumpFab.style.display = "grid";
    });

    btnGrid?.addEventListener("click", () => {
      btnGrid.classList.add("active");
      btnTrail?.classList.remove("active");
      if (arenaEl) arenaEl.style.display = "none";
      if (gridEl) gridEl.style.display = "grid";
      if (jumpFab) jumpFab.style.display = "none";
    });

    jumpFab?.addEventListener("click", () => {
      const targetId = selectedPopoverId && !selectedPopoverId.startsWith("chest-") ? selectedPopoverId : getFrontierModuleId();
      const row = document.getElementById(`stone-row-${targetId}`);
      if (row) row.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById("sidebar-search-input")?.addEventListener("input", (e) => {
      renderSidebar(e.target.value);
    });

    // Calculator & Triangle Solver listeners (Physical Tactile Keypads + Direct Inputs)
    const appendCalcDigit = (inputEl, digit, isFreshFlag) => {
      if (!inputEl) return false;
      let cur = isFreshFlag ? "" : String(inputEl.value || "");
      if (digit === ".") {
        if (cur.includes(".")) return false;
        cur = cur === "" || cur === "-" ? (cur + "0.") : (cur + ".");
      } else {
        cur = cur === "0" ? digit : cur === "-0" ? "-" + digit : cur + digit;
      }
      inputEl.value = cur;
      return false;
    };

    const backspaceCalcInput = (inputEl) => {
      if (!inputEl) return;
      const cur = String(inputEl.value || "");
      const next = cur.slice(0, -1);
      inputEl.value = !next || next === "-" ? "0" : next;
    };

    const toggleSignCalcInput = (inputEl) => {
      if (!inputEl) return;
      const cur = String(inputEl.value || "0").trim();
      if (!cur || cur === "0") {
        inputEl.value = "-";
      } else if (cur.startsWith("-")) {
        inputEl.value = cur.slice(1) || "0";
      } else {
        inputEl.value = "-" + cur;
      }
    };

    // 1. Angle Scientific Calculator Listeners
    const angleInput = document.getElementById("calc-angle-val");
    const angleUnitSel = document.getElementById("calc-angle-unit");
    angleInput?.addEventListener("input", () => {
      freshAngleEntry = false;
      runAngleEvaluator();
    });
    angleUnitSel?.addEventListener("change", () => {
      freshAngleEntry = true;
      runAngleEvaluator();
    });

    const switchAngleUnitAndConvert = (nextUnit) => {
      if (!angleUnitSel || !angleInput) return;
      const prevUnit = angleUnitSel.value;
      if (prevUnit === nextUnit) return;
      const curRaw = parseCalcNumber(angleInput.value, 0);
      const curDeg = prevUnit === "deg" ? curRaw : prevUnit === "rad" ? (curRaw * 180) / Math.PI : curRaw * 0.9;
      const converted =
        nextUnit === "deg" ? curDeg : nextUnit === "rad" ? (curDeg * Math.PI) / 180 : curDeg / 0.9;
      angleUnitSel.value = nextUnit;
      angleInput.value = Number(converted.toFixed(nextUnit === "rad" ? 6 : 4));
      freshAngleEntry = true;
      runAngleEvaluator();
    };

    document.querySelectorAll("#calc-device-angle [data-angle-unit], #calc-lcd-unit-pills [data-lcd-u]").forEach((el) => {
      el.addEventListener("click", () => {
        triggerHaptic(10);
        switchAngleUnitAndConvert(el.dataset.angleUnit || el.dataset.lcdU);
      });
    });

    document.querySelectorAll("#calc-device-angle [data-angle-deg]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!angleInput || !angleUnitSel) return;
        triggerHaptic(8);
        const degVal = Number(btn.dataset.angleDeg);
        const u = angleUnitSel.value;
        const val = u === "deg" ? degVal : u === "rad" ? Number(((degVal * Math.PI) / 180).toFixed(6)) : Number((degVal / 0.9).toFixed(4));
        angleInput.value = val;
        freshAngleEntry = true;
        runAngleEvaluator();
      });
    });

    document.querySelectorAll("#calc-device-angle [data-trig-focus]").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(8);
        activeTrigFocus = btn.dataset.trigFocus;
        runAngleEvaluator();
      });
    });

    document.querySelectorAll("#calc-device-angle [data-angle-digit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(6);
        freshAngleEntry = appendCalcDigit(angleInput, btn.dataset.angleDigit, freshAngleEntry);
        runAngleEvaluator();
      });
    });

    document.querySelectorAll("#calc-device-angle [data-angle-step]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!angleInput || !angleUnitSel) return;
        triggerHaptic(8);
        const stepDeg = Number(btn.dataset.angleStep);
        const u = angleUnitSel.value;
        const delta = u === "deg" ? stepDeg : u === "rad" ? (stepDeg * Math.PI) / 180 : stepDeg / 0.9;
        const nextVal = parseCalcNumber(angleInput.value, 0) + delta;
        angleInput.value = Number(nextVal.toFixed(u === "rad" ? 6 : 4));
        freshAngleEntry = true;
        runAngleEvaluator();
      });
    });

    document.querySelectorAll("#calc-device-angle [data-angle-op]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!angleInput || !angleUnitSel) return;
        triggerHaptic(8);
        const op = btn.dataset.angleOp;
        if (op === "ac") {
          angleInput.value = "0";
          freshAngleEntry = true;
        } else if (op === "del") {
          backspaceCalcInput(angleInput);
          freshAngleEntry = false;
        } else if (op === "sign") {
          toggleSignCalcInput(angleInput);
          freshAngleEntry = false;
        } else if (op === "pi") {
          const u = angleUnitSel.value;
          angleInput.value = u === "rad" ? Number(Math.PI.toFixed(6)) : u === "grad" ? 200 : 180;
          freshAngleEntry = true;
        } else if (op === "eval") {
          angleInput.value = parseCalcNumber(angleInput.value, 0);
          freshAngleEntry = true;
        }
        runAngleEvaluator();
      });
    });

    // 2. Inverse & Trig Equation Scientific Calculator Listeners
    const invInput = document.getElementById("inv-eq-val");
    const invFnSel = document.getElementById("inv-eq-fn");
    invInput?.addEventListener("input", () => {
      freshInvEntry = false;
      runInverseAndEquationSolver();
    });
    invFnSel?.addEventListener("change", () => {
      runInverseAndEquationSolver();
    });

    document.querySelectorAll("#calc-device-inverse [data-inv-fn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!invFnSel) return;
        triggerHaptic(8);
        invFnSel.value = btn.dataset.invFn;
        // Auto-adjust x if switching between [-1,1] and |x|>=1 so user sees an immediate valid readout if desired, or preserve x!
        runInverseAndEquationSolver();
      });
    });

    document.querySelectorAll("#calc-device-inverse [data-inv-preset]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!invInput) return;
        triggerHaptic(8);
        invInput.value = btn.dataset.invPreset;
        freshInvEntry = true;
        runInverseAndEquationSolver();
      });
    });

    document.querySelectorAll("#calc-device-inverse [data-inv-digit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        triggerHaptic(6);
        freshInvEntry = appendCalcDigit(invInput, btn.dataset.invDigit, freshInvEntry);
        runInverseAndEquationSolver();
      });
    });

    document.querySelectorAll("#calc-device-inverse [data-inv-op]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!invInput) return;
        triggerHaptic(8);
        const op = btn.dataset.invOp;
        if (op === "ac") {
          invInput.value = "0";
          freshInvEntry = true;
        } else if (op === "del") {
          backspaceCalcInput(invInput);
          freshInvEntry = false;
        } else if (op === "sign") {
          toggleSignCalcInput(invInput);
          freshInvEntry = false;
        } else if (op === "recip") {
          const cur = parseCalcNumber(invInput.value, 0);
          if (Math.abs(cur) > 1e-9) {
            invInput.value = Number((1 / cur).toFixed(7));
            freshInvEntry = true;
          }
        } else if (op === "eval") {
          invInput.value = parseCalcNumber(invInput.value, 0);
          freshInvEntry = true;
        }
        runInverseAndEquationSolver();
      });
    });

    // 3. CAS Identity & Simplification Calculator Listeners
    const proofSel = document.getElementById("proof-preset-select");
    const proofXIn = document.getElementById("proof-test-x");
    proofSel?.addEventListener("change", () => runIdentityProofWorkbench(true));
    proofXIn?.addEventListener("input", () => runIdentityProofWorkbench(false));

    document.querySelectorAll("#proof-prog-keys [data-proof-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!proofSel) return;
        triggerHaptic(8);
        proofSel.value = btn.dataset.proofIdx;
        runIdentityProofWorkbench(true);
      });
    });

    document.querySelectorAll("#calc-device-proof [data-proof-step]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!proofXIn) return;
        triggerHaptic(8);
        const next = parseCalcNumber(proofXIn.value, 0) + Number(btn.dataset.proofStep);
        proofXIn.value = Number(next.toFixed(4));
        runIdentityProofWorkbench(false);
      });
    });

    document.querySelector("#calc-device-proof [data-proof-reset]")?.addEventListener("click", () => {
      triggerHaptic(8);
      runIdentityProofWorkbench(true);
    });

    // 4. Graphing Triangle Solver Calculator Listeners
    const triModeSel = document.getElementById("tri-mode");
    const setActiveTriSlot = (slotId) => {
      activeTriSlotId = slotId;
      freshTriEntry = true;
      document.querySelectorAll("#calc-device-triangle [data-tri-slot]").forEach((box) => {
        box.classList.toggle("active", box.dataset.triSlot === slotId);
      });
    };

    const applyTriModeDefaults = (m) => {
      if (m === "SSS") {
        document.getElementById("tri-v1").value = 5;
        document.getElementById("tri-v2").value = 6;
        document.getElementById("tri-v3").value = 7;
      } else if (m === "SAS") {
        document.getElementById("tri-v1").value = 7;
        document.getElementById("tri-v2").value = 60;
        document.getElementById("tri-v3").value = 8;
      } else {
        document.getElementById("tri-v1").value = 45;
        document.getElementById("tri-v2").value = 10;
        document.getElementById("tri-v3").value = 60;
      }
      freshTriEntry = true;
      runTriangleSolver();
    };

    triModeSel?.addEventListener("change", (e) => applyTriModeDefaults(e.target.value));
    document.querySelectorAll("#tri-mode-keys [data-tri-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!triModeSel) return;
        triggerHaptic(8);
        triModeSel.value = btn.dataset.triMode;
        applyTriModeDefaults(btn.dataset.triMode);
      });
    });

    document.querySelectorAll("#calc-device-triangle [data-tri-preset]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!triModeSel) return;
        triggerHaptic(8);
        const [v1, v2, v3, mode] = btn.dataset.triPreset.split(",");
        triModeSel.value = mode;
        document.getElementById("tri-v1").value = v1;
        document.getElementById("tri-v2").value = v2;
        document.getElementById("tri-v3").value = v3;
        freshTriEntry = true;
        runTriangleSolver();
      });
    });

    ["tri-v1", "tri-v2", "tri-v3"].forEach((id) => {
      const el = document.getElementById(id);
      el?.addEventListener("focus", () => setActiveTriSlot(id));
      el?.addEventListener("click", () => setActiveTriSlot(id));
      el?.addEventListener("input", () => {
        freshTriEntry = false;
        runTriangleSolver();
      });
    });

    document.querySelectorAll("#calc-device-triangle [data-tri-slot]").forEach((box) => {
      box.addEventListener("click", (e) => {
        if (e.target.tagName !== "INPUT") {
          setActiveTriSlot(box.dataset.triSlot);
        }
      });
    });

    document.querySelectorAll("#calc-device-triangle [data-tri-digit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const slotEl = document.getElementById(activeTriSlotId);
        if (!slotEl) return;
        triggerHaptic(6);
        freshTriEntry = appendCalcDigit(slotEl, btn.dataset.triDigit, freshTriEntry);
        runTriangleSolver();
      });
    });

    document.querySelectorAll("#calc-device-triangle [data-tri-op]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const slotEl = document.getElementById(activeTriSlotId);
        if (!slotEl) return;
        triggerHaptic(8);
        const op = btn.dataset.triOp;
        if (op === "del") {
          backspaceCalcInput(slotEl);
          freshTriEntry = false;
        } else if (op === "next") {
          const order = ["tri-v1", "tri-v2", "tri-v3"];
          const nextId = order[(order.indexOf(activeTriSlotId) + 1) % order.length];
          setActiveTriSlot(nextId);
          return;
        } else if (op === "inc" || op === "dec") {
          const next = Math.max(0.1, parseCalcNumber(slotEl.value, 1) + (op === "inc" ? 1 : -1));
          slotEl.value = Number(next.toFixed(2));
          freshTriEntry = true;
        } else if (op === "eval") {
          freshTriEntry = true;
        }
        runTriangleSolver();
      });
    });

    // Vault listeners & 12-Section Progressive Filter Bar
    const vaultSecBar = document.getElementById("vault-section-filter");
    if (vaultSecBar && FORMULA_SECTIONS.length) {
      vaultSecBar.innerHTML =
        `<button type="button" class="lab-pill active" data-vault-sec="ALL">All 12 (${FORMULAS.length})</button>` +
        FORMULA_SECTIONS.map(
          (s) =>
            `<button type="button" class="lab-pill" data-vault-sec="${s.id}">${s.shortLabel}</button>`
        ).join("");
      vaultSecBar.querySelectorAll("[data-vault-sec]").forEach((btn) => {
        btn.addEventListener("click", () => {
          triggerHaptic(10);
          currentVaultSection = btn.dataset.vaultSec;
          if (currentVaultSection !== "ALL") {
            collapsedVaultSections.delete(currentVaultSection);
          }
          vaultSecBar.querySelectorAll("[data-vault-sec]").forEach((b) => {
            b.classList.toggle("active", b.dataset.vaultSec === currentVaultSection);
          });
          scrollChipIntoView(btn);
          renderFormulaVault();
          if (window.innerWidth > 768) {
            const dock = document.querySelector(".vault-command-dock");
            if (dock && window.scrollY > dock.offsetTop + 140) {
              window.scrollTo({ top: Math.max(0, dock.offsetTop - 64), behavior: "smooth" });
            }
          }
        });
      });
    }
    document.getElementById("vault-search")?.addEventListener("input", renderFormulaVault);
    document.getElementById("vault-grade-filter")?.addEventListener("change", renderFormulaVault);
    document.getElementById("vault-fold-all-btn")?.addEventListener("click", () => {
      triggerHaptic(10);
      const allFolded =
        FORMULA_SECTIONS.length > 0 &&
        FORMULA_SECTIONS.every((s) => collapsedVaultSections.has(s.id));
      if (allFolded) {
        collapsedVaultSections.clear();
      } else {
        FORMULA_SECTIONS.forEach((s) => collapsedVaultSections.add(s.id));
      }
      renderFormulaVault();
    });
    document.getElementById("vault-reset-btn")?.addEventListener("click", () => {
      triggerHaptic(10);
      currentVaultSection = "ALL";
      collapsedVaultSections.clear();
      const sIn = document.getElementById("vault-search");
      const gSel = document.getElementById("vault-grade-filter");
      if (sIn) sIn.value = "";
      if (gSel) gSel.value = "ALL";
      document.querySelectorAll("#vault-section-filter [data-vault-sec]").forEach((b) => {
        b.classList.toggle("active", b.dataset.vaultSec === "ALL");
      });
      renderFormulaVault();
    });

    // Mobile Floating Return-to-Top Button
    const scrollTopBtn = document.getElementById("mobile-scroll-top-btn");
    if (scrollTopBtn) {
      window.addEventListener(
        "scroll",
        () => {
          const y = window.scrollY || document.documentElement.scrollTop || 0;
          scrollTopBtn.hidden = !(window.innerWidth <= 768 && y > 480);
        },
        { passive: true }
      );
      scrollTopBtn.addEventListener("click", () => {
        triggerHaptic(10);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Dismiss mobile bottom-sheet popover when tapping empty area on the Quest Roadmap
    document.addEventListener("click", (e) => {
      if (!isMobileViewport() || !selectedPopoverId) return;
      const tgt = e.target;
      if (!(tgt instanceof Element) || !document.body.contains(tgt)) return;
      if (!tgt.closest("#view-roadmap")) return;
      if (
        tgt.closest(
          ".duo-stone-btn, .duo-chest-btn, .duo-mascot-prop, .duo-popover-card, .duo-jump-fab, .rpg-hero-card, .duo-hud-bar"
        )
      ) {
        return;
      }
      selectedPopoverId = null;
      renderQuestTrail();
    });

    // Hardware Android/iOS Back Button & History Navigation Support
    window.addEventListener("popstate", (e) => {
      const battleModal = document.getElementById("rpg-battle-modal");
      if (battleModal && !battleModal.hidden) {
        closeBossRaid();
        return;
      }
      const validViews = new Set(["roadmap", "lectures", "playground", "solver", "lesson", "vault", "summary"]);
      const hashView = (window.location.hash || "").replace(/^#/, "");
      const targetView = e.state?.view || (validViews.has(hashView) ? hashView : "roadmap");
      if (targetView === "lesson" && e.state?.mod && isModuleUnlocked(e.state.mod)) {
        currentModuleId = e.state.mod;
      }
      switchView(validViews.has(targetView) ? targetView : "roadmap", false, true);
    });

    // PWA Home-Screen Shortcut / Initial Hash Deep-Link Support
    const initHash = (window.location.hash || "").replace(/^#/, "");
    const launchableViews = new Set(["roadmap", "lectures", "playground", "solver", "vault", "summary"]);
    if (launchableViews.has(initHash) && initHash !== "roadmap") {
      switchView(initHash, false, true);
    } else if (window.history && typeof window.history.replaceState === "function") {
      try {
        window.history.replaceState({ view: "roadmap", mod: currentModuleId }, "", window.location.hash || "#roadmap");
      } catch (_) {
        /* ignore */
      }
    }

    // Installable Mobile App (PWA) Prompt & Service Worker Registration
    let deferredInstallPrompt = null;
    const installBtn = document.getElementById("pwa-install-btn");
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      if (installBtn) installBtn.hidden = false;
    });
    installBtn?.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      triggerHaptic(14);
      deferredInstallPrompt.prompt();
      try {
        await deferredInstallPrompt.userChoice;
      } catch (_) {
        /* ignore */
      }
      deferredInstallPrompt = null;
      installBtn.hidden = true;
    });
    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      if (installBtn) installBtn.hidden = true;
      showLootToast("📲 TrigVerse installed on your Home Screen!");
    });
    if ("serviceWorker" in navigator && /^https?:$/i.test(window.location.protocol)) {
      const hadController = Boolean(navigator.serviceWorker.controller);
      let swRefreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (hadController && !swRefreshing) {
          swRefreshing = true;
          window.location.reload();
        }
      });
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("./sw.js", { updateViaCache: "none" })
          .then((reg) => reg.update().catch(() => {}))
          .catch(() => {});
      });
    }

    window.addEventListener("resize", () => {
      if (typeof activeLessonRedraw === "function") activeLessonRedraw();
      if (typeof activeHubRedraw === "function") activeHubRedraw();
      if (currentViewId === "solver") runTriangleSolver();
    });

    typesetMath(document.body);
  }

  window.addEventListener("DOMContentLoaded", init);
})();
