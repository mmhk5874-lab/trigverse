/* ==========================================================================
   Mr.mmhk — Expressive Multi-Emotion Owl Professor & Personal Study Guide
   Welcomes learners on app launch, introduces himself, asks personalized
   study questions (Name, Country, Experience, Goals), and guides with 8 emotions!
   ========================================================================== */

(function () {
  const PROFILE_STORAGE_KEY = "mathsverse_mrmmhk_profile_v1";

  const OWL_EMOTIONS = {
    excited: {
      id: "excited",
      emoji: "🤩",
      label: "Super Excited",
      animClass: "owl-anim-excited",
      auraClass: "owl-aura-excited",
      particles: ["🤩", "✨", "⭐", "🌟"],
      pitch: 1.18,
      rate: 1.05,
      quips: [
        "Hoot-hoot!! Every angle and number in MathsVerse is glowing today! ✨",
        "Ooh! Pick any category below and watch how easy & friendly Maths becomes! 🤩"
      ]
    },
    happy: {
      id: "happy",
      emoji: "😊",
      label: "Happy & Friendly",
      animClass: "owl-anim-happy",
      auraClass: "owl-aura-happy",
      particles: ["😊", "💛", "🦉", "✨"],
      pitch: 1.1,
      rate: 1.0,
      quips: [
        "Hi friend! Remember: one small step every day builds unstoppable math confidence! 😊",
        "I am always right here whenever you need a hint, formula, or smile! 🦉💛"
      ]
    },
    curious: {
      id: "curious",
      emoji: "🧐",
      label: "Curious Explorer",
      animClass: "owl-anim-curious",
      auraClass: "owl-aura-curious",
      particles: ["🧐", "🌍", "🧭", "❓"],
      pitch: 1.06,
      rate: 0.96,
      quips: [
        "Hmm, fascinating! Did you know radians measure arc length directly on a unit circle? 🧐",
        "Let's investigate why formulas work instead of just memorizing them! 🧭"
      ]
    },
    caring: {
      id: "caring",
      emoji: "🥰",
      label: "Caring & Gentle",
      animClass: "owl-anim-caring",
      auraClass: "owl-aura-caring",
      particles: ["🥰", "💖", "🌱", "🤗"],
      pitch: 1.08,
      rate: 0.9,
      quips: [
        "Mistakes are proof that your brain is growing! Take your time—Mr.mmhk believes in you! 🥰",
        "Never feel shy if a topic looks tricky. We will break it into tiny, friendly pieces! 💖"
      ]
    },
    thinking: {
      id: "thinking",
      emoji: "🤔",
      label: "Deep Thinking",
      animClass: "owl-anim-thinking",
      auraClass: "owl-aura-thinking",
      particles: ["🤔", "π", "∑", "θ"],
      pitch: 0.98,
      rate: 0.93,
      quips: [
        "Hmm... sin²θ + cos²θ = 1 is really Pythagoras wearing a unit-circle tuxedo! 🤔",
        "Let me calculate the smartest shortcut for your next chapter... π × wisdom! 🧠"
      ]
    },
    hyped: {
      id: "hyped",
      emoji: "🔥",
      label: "Fired Up!",
      animClass: "owl-anim-hyped",
      auraClass: "owl-aura-hyped",
      particles: ["🔥", "⚡", "🚀", "💥"],
      pitch: 1.2,
      rate: 1.1,
      quips: [
        "LET'S GOOO! Today we crush formulas, unlock chapters, and conquer Guardian Bosses! 🔥⚡",
        "Unstoppable energy!! Put 15 focused minutes in and watch your level skyrocket! 🚀"
      ]
    },
    mindblown: {
      id: "mindblown",
      emoji: "🤯",
      label: "Mind-Blown!",
      animClass: "owl-anim-mindblown",
      auraClass: "owl-aura-mindblown",
      particles: ["🤯", "⚡", "💫", "🧠"],
      pitch: 1.22,
      rate: 1.06,
      quips: [
        "WHOAAA!! e^(iπ) + 1 = 0 connects five of the greatest constants in one tiny equation! 🤯",
        "Your brain power is off the charts! Wait till you try our 5-second finger tricks! 💫"
      ]
    },
    proud: {
      id: "proud",
      emoji: "🥳",
      label: "Proud & Celebrating",
      animClass: "owl-anim-proud",
      auraClass: "owl-aura-proud",
      particles: ["🥳", "🎉", "🏆", "👑"],
      pitch: 1.16,
      rate: 1.04,
      quips: [
        "HOOT HOOT HOORAY!! Look how far you're coming—Mr.mmhk is super proud of you! 🥳🏆",
        "Champion alert!! Keep shining—you are becoming a true MathsVerse master! 🎉👑"
      ]
    }
  };

  const COUNTRIES = [
    { name: "Pakistan", flag: "🇵🇰", urHint: true, note: "AoA / Hello! You'll love both our 100 English and 100 Urdu/Hindi video lectures!" },
    { name: "India", flag: "🇮🇳", urHint: true, note: "Namaste / Hello! Our 200 English + Hindi/Urdu lectures & JEE/Board tricks fit right in!" },
    { name: "United States", flag: "🇺🇸", urHint: false, note: "Awesome! From Precalculus & Unit Circle labs to AP Calculus foundations—let's roll!" },
    { name: "United Kingdom", flag: "🇬🇧", urHint: false, note: "Brilliant! Perfect for GCSE, A-Level Maths & pure visual mastery!" },
    { name: "Bangladesh", flag: "🇧🇩", urHint: false, note: "Welcome aboard! Step-by-step board & admission math shortcuts await you!" },
    { name: "Saudi Arabia", flag: "🇸🇦", urHint: false, note: "Marhaba / Welcome! Let's make every math concept crystal clear together!" },
    { name: "UAE", flag: "🇦🇪", urHint: false, note: "Welcome from the UAE! Ready for sleek interactive labs & fast exam tricks!" },
    { name: "Canada", flag: "🇨🇦", urHint: false, note: "Awesome! Functions, Trigonometry & Calculus are super fun here!" },
    { name: "Australia", flag: "🇦🇺", urHint: false, note: "G'day! Ready to explore visual math sandboxes and smart shortcuts!" },
    { name: "Malaysia", flag: "🇲🇾", urHint: false, note: "Selamat datang! Let's master angles, identities & problem solving!" },
    { name: "Nigeria", flag: "🇳🇬", urHint: false, note: "Welcome champion! Let's ace every math exam with confidence & speed!" },
    { name: "Other Country", flag: "🌍", urHint: false, note: "Mathematics speaks one universal language across the whole planet!" }
  ];

  const EXPERIENCE_OPTIONS = [
    {
      id: "beginner",
      icon: "🌱",
      title: "Beginner / Starting Fresh",
      desc: "Maths feels hard or confusing—guide me gently from zero!",
      emotion: "caring",
      reaction: "Aww, don't worry even 1%! 🥰 I will hold your wing from the very basics with super simple visuals and zero stress!"
    },
    {
      id: "intermediate",
      icon: "📘",
      title: "School Foundation (Class 8–10)",
      desc: "I know the basics and want strong concepts & higher marks.",
      emotion: "happy",
      reaction: "That's wonderful! 😊 You already have a solid seed—together we'll turn your basics into rock-solid confidence!"
    },
    {
      id: "advanced",
      icon: "⚡",
      title: "College / Class 11–12 Student",
      desc: "Studying Trigonometry, Functions, Algebra & Calculus seriously!",
      emotion: "hyped",
      reaction: "LET'S GOOO!! 🔥 Class 11–12 Maths is my favourite playground—44 chapters, 200 lectures & 14 live labs are ready for you!"
    },
    {
      id: "pro",
      icon: "🏆",
      title: "Exam Warrior / Math Lover",
      desc: "Bring on 5-second tricks, tough identities & Guardian Boss Raids!",
      emotion: "mindblown",
      reaction: "WHOAAA!! 🤯 A true Math Challenger! Wait till you test our 60s Short Tricks and Guardian Boss Battles!"
    }
  ];

  const STUDY_GOALS = [
    { id: "exams", label: "🎯 Ace School / Board Exams", emotion: "proud" },
    { id: "tricks", label: "⚡ Learn 60s Short Video Tricks", emotion: "hyped" },
    { id: "visuals", label: "🔬 Visual Labs & Deep Concepts", emotion: "curious" },
    { id: "quests", label: "🎮 Play RPG Math Quests", emotion: "excited" }
  ];

  const STUDY_STYLES = [
    { id: "videos", label: "🎬 Video Lectures (EN / اردو)" },
    { id: "labs", label: "🎨 Interactive Touch Labs" },
    { id: "formulas", label: "📜 Formula Vault & Notes" },
    { id: "shorts", label: "⚡ TikTok / Insta / YT Shorts" }
  ];

  const DAILY_TIMES = [
    { id: "10m", label: "⏱️ 10 min / day (Easy)" },
    { id: "25m", label: "📖 25 min / day (Steady)" },
    { id: "45m", label: "🚀 45+ min / day (Pro)" }
  ];

  let profile = loadProfile();
  let wizardStep = 1;
  let currentEmotion = "excited";
  let voiceEnabled = false;
  let quipIndex = 0;

  let draft = {
    name: profile?.name || "",
    country: profile?.country || "",
    countryFlag: profile?.countryFlag || "🌍",
    experience: profile?.experience || "",
    goal: profile?.goal || "exams",
    style: profile?.style || "videos",
    dailyTime: profile?.dailyTime || "25m"
  };

  function loadProfile() {
    try {
      const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : null;
    } catch (_) {
      return null;
    }
  }

  function saveProfile(data) {
    profile = { ...data, updatedAt: Date.now() };
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    } catch (_) {
      /* ignore storage quota */
    }
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function speakOwlText(plainText, emotionKey) {
    if (!voiceEnabled || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const clean = String(plainText || "").replace(/[^\w\s.,!?'-]/g, " ").replace(/\s+/g, " ").trim();
      if (!clean) return;
      const utter = new SpeechSynthesisUtterance(clean);
      const emo = OWL_EMOTIONS[emotionKey] || OWL_EMOTIONS.happy;
      utter.lang = "en-US";
      utter.pitch = emo.pitch || 1.1;
      utter.rate = emo.rate || 1.0;
      window.speechSynthesis.speak(utter);
    } catch (_) {
      /* ignore speech errors */
    }
  }

  function buildOwlAvatarStageHtml(emotionKey, sizeClass = "") {
    const emo = OWL_EMOTIONS[emotionKey] || OWL_EMOTIONS.excited;
    const [p1, p2, p3, p4] = emo.particles;
    return `
      <div class="mrmmhk-avatar-stage ${sizeClass} ${emo.auraClass}" data-emotion="${emo.id}">
        <div class="mrmmhk-orbit-ring" aria-hidden="true"></div>
        <span class="mrmmhk-particle p-tl" aria-hidden="true">${p1}</span>
        <span class="mrmmhk-particle p-tr" aria-hidden="true">${p2}</span>
        <span class="mrmmhk-particle p-bl" aria-hidden="true">${p3}</span>
        <span class="mrmmhk-particle p-br" aria-hidden="true">${p4}</span>
        <div class="mrmmhk-portrait-frame ${emo.animClass}">
          <img src="logo.png?v=44" alt="Mr.mmhk Owl Guide (${emo.label})" class="mrmmhk-portrait-img" />
          <span class="mrmmhk-face-badge" title="Emotion: ${emo.label}">${emo.emoji}</span>
        </div>
        <div class="mrmmhk-name-ribbon">
          <span class="mrmmhk-ribbon-owl">🦉 Mr.mmhk</span>
          <span class="mrmmhk-mood-tag">${emo.emoji} ${emo.label}</span>
        </div>
      </div>
    `;
  }

  function buildEmotionPickerBarHtml(activeEmotionKey) {
    return `
      <div class="mrmmhk-emotion-bar" role="group" aria-label="Mr.mmhk Emotions">
        ${Object.values(OWL_EMOTIONS)
          .map(
            (e) => `
          <button
            type="button"
            class="mrmmhk-emo-chip ${e.id === activeEmotionKey ? "active" : ""}"
            data-pick-emotion="${e.id}"
            title="See Mr.mmhk ${e.label}"
          >
            <span>${e.emoji}</span>
            <span class="mrmmhk-emo-lbl">${e.label.split(" ")[0]}</span>
          </button>
        `
          )
          .join("")}
      </div>
    `;
  }

  function getCountryMeta(countryName) {
    const found = COUNTRIES.find((c) => c.name.toLowerCase() === String(countryName || "").trim().toLowerCase());
    return (
      found || {
        name: countryName || "Earth",
        flag: draft.countryFlag || "🌍",
        urHint: false,
        note: `Awesome to have a learner from ${countryName || "your country"}! Let's conquer MathsVerse together!`
      }
    );
  }

  function getExperienceMeta(expId) {
    return EXPERIENCE_OPTIONS.find((e) => e.id === expId) || EXPERIENCE_OPTIONS[1];
  }

  function getRecommendedAction(p) {
    if (!p) {
      return { label: "📐 Start Trigonometry Quest", action: "roadmap" };
    }
    if (p.goal === "tricks" || p.style === "shorts") {
      return { label: "⚡ Watch 60s Short Video Tricks", action: "tricks" };
    }
    if (p.goal === "visuals" || p.style === "labs") {
      return { label: "🔬 Explore 14 Interactive Labs", action: "playground" };
    }
    if (p.style === "formulas") {
      return { label: "📜 Open Complete Formula Vault", action: "vault" };
    }
    if (p.style === "videos") {
      const cMeta = getCountryMeta(p.country);
      return cMeta.urHint
        ? { label: "🎓 Open EN & اردو/Hindi Lectures", action: "lectures-ur" }
        : { label: "🎓 Open 200 Video Lectures", action: "lectures-en" };
    }
    if (p.experience === "beginner") {
      return { label: "🌱 Start Easy at Chapter 1 with Mr.mmhk", action: "ch1" };
    }
    return { label: "📐 Enter Trigonometry Quest", action: "roadmap" };
  }

  function triggerRecommendedAction(actionCode) {
    closeOwlWizardModal();
    closeFloatingBubble();
    const clickNavView = (viewName) => {
      const tab = document.querySelector(`.nav-tab[data-view="${viewName}"]`);
      if (tab) {
        tab.click();
        return true;
      }
      return false;
    };

    if (actionCode === "tricks") {
      clickNavView("lectures");
      setTimeout(() => {
        document.querySelector('#lecture-hub-lang-bar [data-lang-mode="trick"]')?.click();
      }, 60);
    } else if (actionCode === "lectures-ur") {
      clickNavView("lectures");
      setTimeout(() => {
        document.querySelector('#lecture-hub-lang-bar [data-lang-mode="ur"]')?.click();
      }, 60);
    } else if (actionCode === "lectures-en") {
      clickNavView("lectures");
      setTimeout(() => {
        document.querySelector('#lecture-hub-lang-bar [data-lang-mode="en"]')?.click();
      }, 60);
    } else if (actionCode === "playground") {
      clickNavView("playground");
    } else if (actionCode === "vault") {
      clickNavView("vault");
    } else if (actionCode === "ch1") {
      clickNavView("roadmap");
      setTimeout(() => {
        document.getElementById("btn-hero-start")?.click();
      }, 80);
    } else {
      clickNavView("roadmap");
    }
  }

  /* ------------------------------------------------------------------------
     Multi-Step Interactive Mr.mmhk Welcome & Study Questions Modal
     ------------------------------------------------------------------------ */
  function renderWizardModalContent() {
    const mount = document.getElementById("mrmmhk-modal-inner");
    if (!mount) return;

    let stepTitle = "";
    let speechHtml = "";
    let speechPlain = "";
    let bodyHtml = "";
    let footerHtml = "";

    if (wizardStep === 1) {
      stepTitle = "Step 1 of 4 • Meet Your Owl Guide";
      speechPlain =
        "Hoot-hoot! Hello my friend! My name is Mr. mmhk, your personal Owl Professor here in MathsVerse! I love guiding students with lots of emotions, visual tricks, and friendly stories. First, tell me about yourself: what is your name?";
      speechHtml = `
        <div class="mrmmhk-speech-greeting">Hoot-hoot! Hello there! 👋✨</div>
        <p>
          I am <strong>Mr.mmhk</strong> — your personal <strong>Owl Professor &amp; Study Guide</strong> in
          <strong>MathsVerse (Easy &amp; Friendly)</strong>! 🦉🎓
        </p>
        <p style="margin-top:0.4rem;">
          I am full of emotions—I get <strong>🤩 excited</strong> when you discover a shortcut, <strong>🥰 gentle &amp; caring</strong> when a formula looks tough, <strong>🧐 curious</strong> during experiments, and <strong>🥳 super proud</strong> when you level up!
        </p>
        <p style="margin-top:0.45rem;color:#fef08a;font-weight:700;">
          First, what is <u>your name</u> so I can guide you personally?
        </p>
      `;
      bodyHtml = `
        <div class="mrmmhk-form-group">
          <label for="mrmmhk-input-name" class="mrmmhk-field-label">✨ Your Name / Nickname:</label>
          <input
            type="text"
            id="mrmmhk-input-name"
            class="mrmmhk-text-input"
            placeholder="Type your name here (e.g. Ali, Ayesha, Alex, Sara)..."
            maxlength="40"
            value="${escapeHtml(draft.name)}"
            autocomplete="given-name"
          />
        </div>
        <div class="mrmmhk-emo-preview-note">
          <span>🎭 Tap any mood to see <strong>Mr.mmhk's emotions</strong> live:</span>
          ${buildEmotionPickerBarHtml(currentEmotion)}
        </div>
      `;
      footerHtml = `
        <button type="button" class="mrmmhk-btn-ghost" id="mrmmhk-skip-btn">Skip for Now</button>
        <button type="button" class="mrmmhk-btn-primary" id="mrmmhk-next-1">Nice to Meet You, Mr.mmhk! →</button>
      `;
    } else if (wizardStep === 2) {
      const displayName = escapeHtml(draft.name || "Explorer");
      const selectedCountryMeta = draft.country ? getCountryMeta(draft.country) : null;
      stepTitle = "Step 2 of 4 • Where Are You Studying From?";
      speechPlain = selectedCountryMeta
        ? `${selectedCountryMeta.note}`
        : `Awesome to meet you, ${draft.name || "my friend"}! Which country are you joining MathsVerse from?`;
      speechHtml = `
        <div class="mrmmhk-speech-greeting">Awesome to meet you, <span class="mrmmhk-hl">${displayName}</span>! 🌍🧐</div>
        <p>
          <strong>Mr.mmhk</strong> loves meeting students from all around the world! Which <strong>country</strong> are you studying from?
        </p>
        ${
          selectedCountryMeta
            ? `<div class="mrmmhk-live-reaction">${selectedCountryMeta.flag} <strong>${escapeHtml(selectedCountryMeta.name)}:</strong> ${escapeHtml(selectedCountryMeta.note)}</div>`
            : `<p style="margin-top:0.35rem;font-size:0.84rem;color:#cbd5e1;">Pick a flag below or type your country name:</p>`
        }
      `;
      bodyHtml = `
        <div class="mrmmhk-country-grid">
          ${COUNTRIES.map(
            (c) => `
            <button
              type="button"
              class="mrmmhk-country-chip ${draft.country.toLowerCase() === c.name.toLowerCase() ? "active" : ""}"
              data-country-name="${escapeHtml(c.name)}"
              data-country-flag="${c.flag}"
            >
              <span class="mrmmhk-c-flag">${c.flag}</span>
              <span>${escapeHtml(c.name)}</span>
            </button>
          `
          ).join("")}
        </div>
        <div class="mrmmhk-form-group" style="margin-top:0.65rem;">
          <label for="mrmmhk-input-country" class="mrmmhk-field-label">🌍 Or type any country name:</label>
          <input
            type="text"
            id="mrmmhk-input-country"
            class="mrmmhk-text-input"
            placeholder="Type your country (e.g. Pakistan, Turkey, Egypt, Indonesia, Germany)..."
            maxlength="48"
            value="${escapeHtml(draft.country)}"
          />
        </div>
      `;
      footerHtml = `
        <button type="button" class="mrmmhk-btn-secondary" id="mrmmhk-prev-2">← Back</button>
        <button type="button" class="mrmmhk-btn-primary" id="mrmmhk-next-2">Next: My Math Experience →</button>
      `;
    } else if (wizardStep === 3) {
      const displayName = escapeHtml(draft.name || "Explorer");
      const cMeta = getCountryMeta(draft.country || "your country");
      const chosenExp = EXPERIENCE_OPTIONS.find((e) => e.id === draft.experience);
      stepTitle = "Step 3 of 4 • Your Math Experience";
      speechPlain = chosenExp
        ? chosenExp.reaction
        : `Now tell Mr. mmhk honestly, ${draft.name || "friend"}: what is your experience with Mathematics so far?`;
      speechHtml = `
        <div class="mrmmhk-speech-greeting">${cMeta.flag} Hey <span class="mrmmhk-hl">${displayName}</span>! Tell me about your Maths experience:</div>
        <p>
          Every great mathematician started as a beginner! Pick the card that matches your <strong>experience</strong>—watch how <strong>Mr.mmhk's emotion</strong> reacts!
        </p>
        ${
          chosenExp
            ? `<div class="mrmmhk-live-reaction">${chosenExp.icon} ${escapeHtml(chosenExp.reaction)}</div>`
            : ""
        }
      `;
      bodyHtml = `
        <div class="mrmmhk-exp-grid">
          ${EXPERIENCE_OPTIONS.map(
            (opt) => `
            <button
              type="button"
              class="mrmmhk-exp-card ${draft.experience === opt.id ? "active" : ""}"
              data-exp-id="${opt.id}"
              data-exp-emo="${opt.emotion}"
            >
              <div class="mrmmhk-exp-icon">${opt.icon}</div>
              <div class="mrmmhk-exp-text">
                <div class="mrmmhk-exp-title">${escapeHtml(opt.title)}</div>
                <div class="mrmmhk-exp-desc">${escapeHtml(opt.desc)}</div>
              </div>
            </button>
          `
          ).join("")}
        </div>
      `;
      footerHtml = `
        <button type="button" class="mrmmhk-btn-secondary" id="mrmmhk-prev-3">← Back</button>
        <button type="button" class="mrmmhk-btn-primary" id="mrmmhk-next-3">Next: Quick Study Preferences →</button>
      `;
    } else if (wizardStep === 4) {
      stepTitle = "Step 4 of 4 • Study Questions & Daily Plan";
      speechPlain =
        "Almost ready! Answer these 3 quick study questions so Mr. mmhk can build your custom MathsVerse roadmap!";
      speechHtml = `
        <div class="mrmmhk-speech-greeting">Almost ready, <span class="mrmmhk-hl">${escapeHtml(draft.name || "Explorer")}</span>! 🧠⚡</div>
        <p>
          Answer <strong>3 quick study questions</strong> for <strong>Mr.mmhk</strong> so I know exactly how to guide your study sessions:
        </p>
      `;
      bodyHtml = `
        <div class="mrmmhk-q-block">
          <div class="mrmmhk-field-label">1️⃣ What is your #1 Study Goal right now?</div>
          <div class="mrmmhk-pill-choices">
            ${STUDY_GOALS.map(
              (g) => `
              <button type="button" class="mrmmhk-choice-pill ${draft.goal === g.id ? "active" : ""}" data-q-goal="${g.id}" data-q-emo="${g.emotion}">
                ${g.label}
              </button>
            `
            ).join("")}
          </div>
        </div>

        <div class="mrmmhk-q-block">
          <div class="mrmmhk-field-label">2️⃣ Which learning style makes you happiest?</div>
          <div class="mrmmhk-pill-choices">
            ${STUDY_STYLES.map(
              (s) => `
              <button type="button" class="mrmmhk-choice-pill ${draft.style === s.id ? "active" : ""}" data-q-style="${s.id}">
                ${s.label}
              </button>
            `
            ).join("")}
          </div>
        </div>

        <div class="mrmmhk-q-block">
          <div class="mrmmhk-field-label">3️⃣ How much daily time will we study together?</div>
          <div class="mrmmhk-pill-choices">
            ${DAILY_TIMES.map(
              (t) => `
              <button type="button" class="mrmmhk-choice-pill ${draft.dailyTime === t.id ? "active" : ""}" data-q-time="${t.id}">
                ${t.label}
              </button>
            `
            ).join("")}
          </div>
        </div>
      `;
      footerHtml = `
        <button type="button" class="mrmmhk-btn-secondary" id="mrmmhk-prev-4">← Back</button>
        <button type="button" class="mrmmhk-btn-primary" id="mrmmhk-finish-btn">🎉 Finish &amp; Reveal Mr.mmhk Plan!</button>
      `;
    } else {
      // Step 5: Celebration & Custom Study Passport!
      const displayName = escapeHtml(draft.name || "Explorer");
      const cMeta = getCountryMeta(draft.country || "Earth");
      const expMeta = getExperienceMeta(draft.experience || "intermediate");
      const goalMeta = STUDY_GOALS.find((g) => g.id === draft.goal) || STUDY_GOALS[0];
      const styleMeta = STUDY_STYLES.find((s) => s.id === draft.style) || STUDY_STYLES[0];
      const timeMeta = DAILY_TIMES.find((t) => t.id === draft.dailyTime) || DAILY_TIMES[1];
      const rec = getRecommendedAction(draft);

      stepTitle = "🥳 Official Mr.mmhk Study Passport Ready!";
      speechPlain = `Hooray ${draft.name || "my friend"} from ${cMeta.name}! Mr. mmhk is super proud and excited to be your personal guide! Let's begin our MathsVerse adventure!`;
      speechHtml = `
        <div class="mrmmhk-speech-greeting">HOOT-HOOT HOORAY, <span class="mrmmhk-hl">${displayName}</span>!! 🥳🎉👑</div>
        <p>
          <strong>Mr.mmhk</strong> is overflowing with joy! I have saved your personal study profile from <strong>${cMeta.flag} ${escapeHtml(cMeta.name)}</strong>. Whenever you open MathsVerse, I will greet you and guide your journey!
        </p>
      `;
      bodyHtml = `
        <div class="mrmmhk-passport-card">
          <div class="mrmmhk-passport-head">
            <span>🎓 MATHSVERSE LEARNER PASSPORT</span>
            <span>Guided by 🦉 Mr.mmhk</span>
          </div>
          <div class="mrmmhk-passport-grid">
            <div class="mrmmhk-pass-item"><span>👤 Student</span><strong>${displayName}</strong></div>
            <div class="mrmmhk-pass-item"><span>🌍 Country</span><strong>${cMeta.flag} ${escapeHtml(cMeta.name)}</strong></div>
            <div class="mrmmhk-pass-item"><span>📊 Experience</span><strong>${expMeta.icon} ${escapeHtml(expMeta.title)}</strong></div>
            <div class="mrmmhk-pass-item"><span>🎯 Goal</span><strong>${goalMeta.label}</strong></div>
            <div class="mrmmhk-pass-item"><span>✨ Best Style</span><strong>${styleMeta.label}</strong></div>
            <div class="mrmmhk-pass-item"><span>⏱️ Daily Rhythm</span><strong>${timeMeta.label}</strong></div>
          </div>
        </div>
        <div class="mrmmhk-emo-preview-note" style="margin-top:0.65rem;">
          <span>🎭 Play with all 8 of <strong>Mr.mmhk's Emotions</strong> anytime:</span>
          ${buildEmotionPickerBarHtml(currentEmotion)}
        </div>
      `;
      footerHtml = `
        <button type="button" class="mrmmhk-btn-secondary" id="mrmmhk-stay-portal">🌌 View All 12 Verses</button>
        <button type="button" class="mrmmhk-btn-primary" id="mrmmhk-launch-rec" data-rec-action="${rec.action}">
          ${rec.label} →
        </button>
      `;
    }

    const progressPct = Math.min(100, Math.round((wizardStep / 5) * 100));

    mount.innerHTML = `
      <div class="mrmmhk-modal-topbar">
        <div class="mrmmhk-step-pill">${stepTitle}</div>
        <div class="mrmmhk-top-actions">
          <button
            type="button"
            class="mrmmhk-voice-toggle ${voiceEnabled ? "on" : ""}"
            id="mrmmhk-voice-btn"
            title="Toggle Mr.mmhk Voice Narration"
          >
            ${voiceEnabled ? "🔊 Voice ON" : "🔈 Hear Mr.mmhk"}
          </button>
          <button type="button" class="mrmmhk-close-x" id="mrmmhk-close-modal" aria-label="Close Mr.mmhk Guide">✕</button>
        </div>
      </div>

      <div class="mrmmhk-progress-strip" aria-hidden="true">
        <div class="mrmmhk-progress-fill" style="width:${progressPct}%;"></div>
      </div>

      <div class="mrmmhk-stage-layout">
        <div class="mrmmhk-left-owl">
          ${buildOwlAvatarStageHtml(currentEmotion)}
        </div>

        <div class="mrmmhk-right-dialog">
          <div class="mrmmhk-speech-bubble">
            ${speechHtml}
          </div>
          <div class="mrmmhk-interactive-zone">
            ${bodyHtml}
          </div>
        </div>
      </div>

      <div class="mrmmhk-modal-footer">
        ${footerHtml}
      </div>
    `;

    speakOwlText(speechPlain, currentEmotion);
    wireWizardModalEvents(speechPlain);
  }

  function wireWizardModalEvents(speechPlain) {
    const mount = document.getElementById("mrmmhk-modal-inner");
    if (!mount) return;

    document.getElementById("mrmmhk-close-modal")?.addEventListener("click", closeOwlWizardModal);
    document.getElementById("mrmmhk-skip-btn")?.addEventListener("click", () => {
      if (!profile) {
        saveProfile({
          name: draft.name.trim() || "Explorer",
          country: draft.country.trim() || "Earth",
          countryFlag: draft.countryFlag || "🌍",
          experience: draft.experience || "intermediate",
          goal: draft.goal || "exams",
          style: draft.style || "videos",
          dailyTime: draft.dailyTime || "25m"
        });
      }
      closeOwlWizardModal();
      renderPortalGuideStrip();
    });

    document.getElementById("mrmmhk-voice-btn")?.addEventListener("click", () => {
      voiceEnabled = !voiceEnabled;
      if (!voiceEnabled && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      } else {
        speakOwlText(speechPlain, currentEmotion);
      }
      renderWizardModalContent();
    });

    mount.querySelectorAll("[data-pick-emotion]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentEmotion = btn.dataset.pickEmotion || "happy";
        const emo = OWL_EMOTIONS[currentEmotion];
        renderWizardModalContent();
        if (emo && voiceEnabled) {
          speakOwlText(emo.quips[0], currentEmotion);
        }
      });
    });

    // Step 1
    const nameIn = document.getElementById("mrmmhk-input-name");
    if (nameIn) {
      nameIn.addEventListener("input", () => {
        draft.name = nameIn.value;
      });
      nameIn.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          document.getElementById("mrmmhk-next-1")?.click();
        }
      });
    }
    document.getElementById("mrmmhk-next-1")?.addEventListener("click", () => {
      draft.name = (nameIn?.value || draft.name || "").trim() || "Explorer";
      wizardStep = 2;
      currentEmotion = "curious";
      renderWizardModalContent();
    });

    // Step 2
    mount.querySelectorAll("[data-country-name]").forEach((chip) => {
      chip.addEventListener("click", () => {
        draft.country = chip.dataset.countryName || "";
        draft.countryFlag = chip.dataset.countryFlag || "🌍";
        currentEmotion = draft.country === "Pakistan" || draft.country === "India" ? "excited" : "happy";
        renderWizardModalContent();
      });
    });
    const countryIn = document.getElementById("mrmmhk-input-country");
    if (countryIn) {
      countryIn.addEventListener("input", () => {
        draft.country = countryIn.value;
        const matched = COUNTRIES.find((c) => c.name.toLowerCase() === draft.country.trim().toLowerCase());
        draft.countryFlag = matched ? matched.flag : "🌍";
      });
      countryIn.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          document.getElementById("mrmmhk-next-2")?.click();
        }
      });
    }
    document.getElementById("mrmmhk-prev-2")?.addEventListener("click", () => {
      wizardStep = 1;
      currentEmotion = "excited";
      renderWizardModalContent();
    });
    document.getElementById("mrmmhk-next-2")?.addEventListener("click", () => {
      draft.country = (countryIn?.value || draft.country || "").trim() || "Earth";
      wizardStep = 3;
      currentEmotion = draft.experience ? getExperienceMeta(draft.experience).emotion : "thinking";
      renderWizardModalContent();
    });

    // Step 3
    mount.querySelectorAll("[data-exp-id]").forEach((card) => {
      card.addEventListener("click", () => {
        draft.experience = card.dataset.expId || "intermediate";
        currentEmotion = card.dataset.expEmo || "happy";
        renderWizardModalContent();
      });
    });
    document.getElementById("mrmmhk-prev-3")?.addEventListener("click", () => {
      wizardStep = 2;
      currentEmotion = "curious";
      renderWizardModalContent();
    });
    document.getElementById("mrmmhk-next-3")?.addEventListener("click", () => {
      if (!draft.experience) draft.experience = "intermediate";
      wizardStep = 4;
      currentEmotion = "excited";
      renderWizardModalContent();
    });

    // Step 4
    mount.querySelectorAll("[data-q-goal]").forEach((b) => {
      b.addEventListener("click", () => {
        draft.goal = b.dataset.qGoal || "exams";
        currentEmotion = b.dataset.qEmo || "hyped";
        renderWizardModalContent();
      });
    });
    mount.querySelectorAll("[data-q-style]").forEach((b) => {
      b.addEventListener("click", () => {
        draft.style = b.dataset.qStyle || "videos";
        currentEmotion = b.dataset.qStyle === "shorts" ? "hyped" : b.dataset.qStyle === "labs" ? "curious" : "happy";
        renderWizardModalContent();
      });
    });
    mount.querySelectorAll("[data-q-time]").forEach((b) => {
      b.addEventListener("click", () => {
        draft.dailyTime = b.dataset.qTime || "25m";
        currentEmotion = b.dataset.qTime === "45m" ? "mindblown" : "proud";
        renderWizardModalContent();
      });
    });
    document.getElementById("mrmmhk-prev-4")?.addEventListener("click", () => {
      wizardStep = 3;
      currentEmotion = getExperienceMeta(draft.experience).emotion;
      renderWizardModalContent();
    });
    document.getElementById("mrmmhk-finish-btn")?.addEventListener("click", () => {
      saveProfile({
        name: draft.name.trim() || "Explorer",
        country: draft.country.trim() || "Earth",
        countryFlag: draft.countryFlag || "🌍",
        experience: draft.experience || "intermediate",
        goal: draft.goal || "exams",
        style: draft.style || "videos",
        dailyTime: draft.dailyTime || "25m"
      });
      wizardStep = 5;
      currentEmotion = "proud";
      renderPortalGuideStrip();
      renderWizardModalContent();
    });

    // Step 5
    document.getElementById("mrmmhk-stay-portal")?.addEventListener("click", () => {
      closeOwlWizardModal();
      renderPortalGuideStrip();
    });
    document.getElementById("mrmmhk-launch-rec")?.addEventListener("click", (e) => {
      const act = e.currentTarget.dataset.recAction || "roadmap";
      triggerRecommendedAction(act);
    });
  }

  function openOwlWizardModal(startStep = 1) {
    const backdrop = document.getElementById("mrmmhk-wizard-modal");
    if (!backdrop) return;
    if (profile) {
      draft = {
        name: profile.name || "",
        country: profile.country || "",
        countryFlag: profile.countryFlag || "🌍",
        experience: profile.experience || "intermediate",
        goal: profile.goal || "exams",
        style: profile.style || "videos",
        dailyTime: profile.dailyTime || "25m"
      };
    }
    wizardStep = startStep;
    currentEmotion = startStep === 5 ? "proud" : "excited";
    backdrop.hidden = false;
    renderWizardModalContent();
  }

  function closeOwlWizardModal() {
    const backdrop = document.getElementById("mrmmhk-wizard-modal");
    if (backdrop) backdrop.hidden = true;
    if ("speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (_) {
        /* ignore */
      }
    }
  }

  /* ------------------------------------------------------------------------
     Start-Screen Live Guide Strip (#mrmmhk-portal-guide)
     ------------------------------------------------------------------------ */
  function renderPortalGuideStrip(customLine) {
    const strip = document.getElementById("mrmmhk-portal-guide");
    if (!strip) return;

    const emo = OWL_EMOTIONS[currentEmotion] || OWL_EMOTIONS.happy;
    const rec = getRecommendedAction(profile);
    let headline = "";
    let message = "";

    if (profile && profile.name) {
      const cMeta = getCountryMeta(profile.country);
      const expMeta = getExperienceMeta(profile.experience);
      headline = `🦉 Mr.mmhk (${emo.emoji} ${emo.label}) • Guiding ${escapeHtml(profile.name)} ${cMeta.flag}`;
      message =
        customLine ||
        `Welcome back, <strong>${escapeHtml(profile.name)}</strong> from <strong>${escapeHtml(cMeta.name)}</strong>! (${expMeta.icon} ${escapeHtml(expMeta.title)}). ${escapeHtml(emo.quips[quipIndex % emo.quips.length])}`;
    } else {
      headline = `🦉 Meet Mr.mmhk (${emo.emoji} ${emo.label}) — Your Personal MathsVerse Owl Guide!`;
      message =
        customLine ||
        `Hoot-hoot! I am <strong>Mr.mmhk</strong>! Tap <strong>"Introduce Yourself"</strong> so I can learn your name, country &amp; math experience—or tap my emotions below!`;
    }

    strip.innerHTML = `
      <div class="mrmmhk-strip-inner">
        <button type="button" class="mrmmhk-strip-avatar-btn ${emo.auraClass}" id="mrmmhk-strip-owl-btn" title="Chat with Mr.mmhk">
          <img src="logo.png?v=44" alt="Mr.mmhk" class="mrmmhk-strip-img ${emo.animClass}" />
          <span class="mrmmhk-strip-emo-badge">${emo.emoji}</span>
        </button>
        <div class="mrmmhk-strip-content">
          <div class="mrmmhk-strip-title-row">
            <span class="mrmmhk-strip-headline">${headline}</span>
            <div class="mrmmhk-strip-mini-emos" aria-label="Change Mr.mmhk Emotion">
              ${Object.values(OWL_EMOTIONS)
                .map(
                  (e) => `
                <button
                  type="button"
                  class="mrmmhk-mini-emo-btn ${e.id === currentEmotion ? "active" : ""}"
                  data-strip-emo="${e.id}"
                  title="Mr.mmhk: ${e.label}"
                >${e.emoji}</button>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="mrmmhk-strip-msg">${message}</div>
        </div>
        <div class="mrmmhk-strip-actions">
          <button type="button" class="mrmmhk-strip-cta" id="mrmmhk-strip-rec-btn" data-rec-action="${rec.action}">
            ${rec.label}
          </button>
          <button type="button" class="mrmmhk-strip-edit" id="mrmmhk-strip-open-wizard">
            ${profile ? "✏️ My Profile / Chat" : "👋 Introduce Yourself"}
          </button>
        </div>
      </div>
    `;

    document.getElementById("mrmmhk-strip-owl-btn")?.addEventListener("click", () => openOwlWizardModal(profile ? 5 : 1));
    document.getElementById("mrmmhk-strip-open-wizard")?.addEventListener("click", () => openOwlWizardModal(1));
    document.getElementById("mrmmhk-strip-rec-btn")?.addEventListener("click", (e) => {
      triggerRecommendedAction(e.currentTarget.dataset.recAction || "roadmap");
    });
    strip.querySelectorAll("[data-strip-emo]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentEmotion = btn.dataset.stripEmo || "happy";
        quipIndex += 1;
        const chosen = OWL_EMOTIONS[currentEmotion];
        renderPortalGuideStrip(chosen ? escapeHtml(chosen.quips[quipIndex % chosen.quips.length]) : "");
        syncMascotBadgeEmotion();
      });
    });
  }

  function syncMascotBadgeEmotion() {
    const emo = OWL_EMOTIONS[currentEmotion] || OWL_EMOTIONS.happy;
    const badgeEmo = document.getElementById("mv-mascot-emo-pill");
    if (badgeEmo) badgeEmo.textContent = `${emo.emoji} Mr.mmhk`;
    const fabEmo = document.getElementById("mrmmhk-fab-emo");
    if (fabEmo) fabEmo.textContent = emo.emoji;
  }

  /* ------------------------------------------------------------------------
     Floating Companion Dock & Quick Popover Across Views
     ------------------------------------------------------------------------ */
  function toggleFloatingBubble() {
    const pop = document.getElementById("mrmmhk-floating-popover");
    if (!pop) return;
    if (!pop.hidden) {
      pop.hidden = true;
      return;
    }
    renderFloatingBubble();
    pop.hidden = false;
  }

  function closeFloatingBubble() {
    const pop = document.getElementById("mrmmhk-floating-popover");
    if (pop) pop.hidden = true;
  }

  function renderFloatingBubble() {
    const pop = document.getElementById("mrmmhk-floating-popover");
    if (!pop) return;
    const emo = OWL_EMOTIONS[currentEmotion] || OWL_EMOTIONS.happy;
    const userName = escapeHtml(profile?.name || "Explorer");
    const rec = getRecommendedAction(profile);
    const tipText = emo.quips[quipIndex % emo.quips.length];

    pop.innerHTML = `
      <div class="mrmmhk-pop-head">
        <span>🦉 <strong>Mr.mmhk</strong> • ${emo.emoji} ${emo.label}</span>
        <button type="button" class="mrmmhk-pop-close" id="mrmmhk-pop-close-btn" aria-label="Close">✕</button>
      </div>
      <div class="mrmmhk-pop-body">
        <div class="mrmmhk-pop-row">
          <img src="logo.png?v=44" alt="Mr.mmhk" class="mrmmhk-pop-avatar ${emo.animClass}" />
          <div class="mrmmhk-pop-speech">
            Hey <strong>${userName}</strong>! ${escapeHtml(tipText)}
          </div>
        </div>
        ${buildEmotionPickerBarHtml(currentEmotion)}
        <div class="mrmmhk-pop-actions">
          <button type="button" class="mrmmhk-btn-primary mrmmhk-btn-sm" id="mrmmhk-pop-rec" data-rec-action="${rec.action}">
            ${rec.label}
          </button>
          <button type="button" class="mrmmhk-btn-secondary mrmmhk-btn-sm" id="mrmmhk-pop-wizard">
            🦉 Full Guide / Edit Info
          </button>
        </div>
      </div>
    `;

    document.getElementById("mrmmhk-pop-close-btn")?.addEventListener("click", closeFloatingBubble);
    document.getElementById("mrmmhk-pop-wizard")?.addEventListener("click", () => {
      closeFloatingBubble();
      openOwlWizardModal(1);
    });
    document.getElementById("mrmmhk-pop-rec")?.addEventListener("click", (e) => {
      triggerRecommendedAction(e.currentTarget.dataset.recAction || "roadmap");
    });
    pop.querySelectorAll("[data-pick-emotion]").forEach((b) => {
      b.addEventListener("click", () => {
        currentEmotion = b.dataset.pickEmotion || "happy";
        quipIndex += 1;
        syncMascotBadgeEmotion();
        renderFloatingBubble();
        renderPortalGuideStrip();
      });
    });
  }

  function initOwlGuide() {
    renderPortalGuideStrip();
    syncMascotBadgeEmotion();

    // Clicking the main Owl Mascot on the Cosmic Start Banner summons Mr.mmhk!
    document.getElementById("mv-mascot-trigger")?.addEventListener("click", () => {
      openOwlWizardModal(profile ? 5 : 1);
    });

    // Clicking the floating Mr.mmhk companion button
    document.getElementById("mrmmhk-fab-btn")?.addEventListener("click", () => {
      toggleFloatingBubble();
    });

    // Close modal on backdrop click or Escape
    document.getElementById("mrmmhk-wizard-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "mrmmhk-wizard-modal") {
        closeOwlWizardModal();
      }
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeOwlWizardModal();
        closeFloatingBubble();
      }
    });

    // Automatically summon Mr.mmhk when the user opens the app for the first time!
    if (!profile) {
      setTimeout(() => {
        openOwlWizardModal(1);
      }, 380);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initOwlGuide);
  } else {
    initOwlGuide();
  }

  window.MR_MMHK_GUIDE = {
    open: openOwlWizardModal,
    setEmotion: (emoKey) => {
      if (OWL_EMOTIONS[emoKey]) {
        currentEmotion = emoKey;
        syncMascotBadgeEmotion();
        renderPortalGuideStrip();
      }
    }
  };
})();
