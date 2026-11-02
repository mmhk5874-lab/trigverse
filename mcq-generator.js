/* ==========================================================================
   TrigVerse Dynamic 15-MCQ Chapter Assessment & Game Engine (Chapters 1 → 44)
   - Generates 15 fresh, non-repeating MCQs tailored to each Chapter (1..44)
   - Regenerates new numbers, angles, expressions & shuffled options EVERY time
     the user opens, closes, and reopens a Chapter Game or Chapter Quiz!
   - Uses Perpendicular (P), Base (B), Hypotenuse (H) convention throughout.
   ========================================================================== */

(function () {
  const recentStemsByChapter = {};

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function gcd(a, b) {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y) {
      [x, y] = [y, x % y];
    }
    return x || 1;
  }

  function simpFrac(num, den) {
    if (den === 0) return "\\text{Undefined}";
    const sign = (num < 0) !== (den < 0) ? "-" : "";
    const n = Math.abs(num);
    const d = Math.abs(den);
    const g = gcd(n, d);
    const nn = n / g;
    const dd = d / g;
    return dd === 1 ? `${sign}${nn}` : `${sign}\\frac{${nn}}{${dd}}`;
  }

  function piRad(deg) {
    if (deg === 0) return "0";
    const sign = deg < 0 ? "-" : "";
    const d = Math.abs(deg);
    const g = gcd(d, 180);
    const num = d / g;
    const den = 180 / g;
    const pNum = num === 1 ? "\\pi" : `${num}\\pi`;
    return den === 1 ? `${sign}${pNum}` : `${sign}\\frac{${pNum}}{${den}}`;
  }

  // Build a guaranteed-valid 4-option shuffled MCQ object
  function makeMcq(q, correctStr, distractors, explanation) {
    const cleanCorrect = String(correctStr).trim();
    const seen = new Set([cleanCorrect]);
    const uniqueWrong = [];
    for (const d of distractors) {
      const s = String(d).trim();
      if (s && !seen.has(s)) {
        seen.add(s);
        uniqueWrong.push(s);
      }
      if (uniqueWrong.length === 3) break;
    }
    const fallbacks = ["0", "1", "-1", "\\frac{1}{2}", "2", "\\text{None of these}"];
    for (const fb of fallbacks) {
      if (uniqueWrong.length === 3) break;
      if (!seen.has(fb)) {
        seen.add(fb);
        uniqueWrong.push(fb);
      }
    }
    const allOpts = shuffle([cleanCorrect, ...uniqueWrong.slice(0, 3)]);
    return {
      q,
      options: allOpts,
      answer: allOpts.indexOf(cleanCorrect),
      explanation: explanation || `Correct answer: ${cleanCorrect}.`
    };
  }

  // Reshuffle options of an existing static quiz item so A/B/C/D changes every run
  function cloneAndShuffleStaticQuiz(item) {
    if (!item || !Array.isArray(item.options) || item.options.length < 2) return null;
    const correctText = item.options[item.answer] ?? item.options[0];
    const others = item.options.filter((_, idx) => idx !== item.answer);
    return makeMcq(item.q, correctText, shuffle(others), item.explanation);
  }

  const TRIPLES = [
    [3, 4, 5],
    [4, 3, 5],
    [5, 12, 13],
    [12, 5, 13],
    [8, 15, 17],
    [15, 8, 17],
    [7, 24, 25],
    [24, 7, 25],
    [9, 40, 41],
    [20, 21, 29],
    [6, 8, 10],
    [9, 12, 15],
    [12, 16, 20],
    [10, 24, 26],
    [15, 20, 25]
  ];

  const STD_TABLE = [
    { deg: 0, sin: "0", cos: "1", tan: "0", csc: "\\text{Undefined}", sec: "1", cot: "\\text{Undefined}" },
    { deg: 30, sin: "\\frac{1}{2}", cos: "\\frac{\\sqrt{3}}{2}", tan: "\\frac{1}{\\sqrt{3}}", csc: "2", sec: "\\frac{2}{\\sqrt{3}}", cot: "\\sqrt{3}" },
    { deg: 45, sin: "\\frac{1}{\\sqrt{2}}", cos: "\\frac{1}{\\sqrt{2}}", tan: "1", csc: "\\sqrt{2}", sec: "\\sqrt{2}", cot: "1" },
    { deg: 60, sin: "\\frac{\\sqrt{3}}{2}", cos: "\\frac{1}{2}", tan: "\\sqrt{3}", csc: "\\frac{2}{\\sqrt{3}}", sec: "2", cot: "\\frac{1}{\\sqrt{3}}" },
    { deg: 90, sin: "1", cos: "0", tan: "\\text{Undefined}", csc: "1", sec: "\\text{Undefined}", cot: "0" }
  ];

  /* ------------------------------------------------------------------------
     Topic-Specific Procedural Generators Across All 44 Chapters
     ------------------------------------------------------------------------ */
  function genCh1() {
    const variant = randInt(1, 5);
    const [P, B, H] = pick(TRIPLES);
    if (variant === 1) {
      return makeMcq(
        `In a right-angled triangle, if Perpendicular $P = ${P}$ and Base $B = ${B}$, what is the Hypotenuse $H$?`,
        `$${H}$`,
        [`$${P + B}$`, `$${Math.abs(H + 2)}$`, `$${Math.max(1, H - 2)}$`],
        `By Pythagoras' theorem, $H = \\sqrt{P^2 + B^2} = \\sqrt{${P}^2 + ${B}^2} = \\sqrt{${P * P + B * B}} = ${H}$.`
      );
    }
    if (variant === 2) {
      return makeMcq(
        `In a right-angled triangle with Hypotenuse $H = ${H}$ and Base $B = ${B}$, find the Perpendicular $P$.`,
        `$${P}$`,
        [`$${H - B}$`, `$${B}$`, `$${P + 3}$`],
        `Using $P^2 + B^2 = H^2$, $P = \\sqrt{${H}^2 - ${B}^2} = \\sqrt{${H * H - B * B}} = ${P}$.`
      );
    }
    if (variant === 3) {
      return makeMcq(
        `In a right triangle with Hypotenuse $H = ${H}$ and Perpendicular $P = ${P}$, find the Base $B$.`,
        `$${B}$`,
        [`$${H - P}$`, `$${P}$`, `$${B + 2}$`],
        `Using $B = \\sqrt{H^2 - P^2} = \\sqrt{${H}^2 - ${P}^2} = \\sqrt{${H * H - P * P}} = ${B}$.`
      );
    }
    if (variant === 4) {
      const A = randInt(18, 74);
      const C = 90 - A;
      return makeMcq(
        `In right triangle $\\triangle ABC$ right-angled at $B$, if acute angle $A = ${A}^\\circ$, what is acute angle $C$?`,
        `$${C}^\\circ$`,
        [`$${180 - A}^\\circ$`, `$${A}^\\circ$`, `$${C + 10}^\\circ$`],
        `The two acute angles in a right-angled triangle are complementary: $C = 90^\\circ - ${A}^\\circ = ${C}^\\circ$.`
      );
    }
    const k = randInt(2, 6);
    const t = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17]]);
    const a = t[0] * k, b = t[1] * k, c = t[2] * k;
    return makeMcq(
      `Which side is the Hypotenuse $H$ in a right-angled triangle with sides $${a}\\text{ cm}$, $${b}\\text{ cm}$, and $${c}\\text{ cm}$?`,
      `$${c}\\text{ cm}$`,
      [`$${a}\\text{ cm}$`, `$${b}\\text{ cm}$`, `$${a + b}\\text{ cm}$`],
      `The Hypotenuse $H$ is always the longest side opposite the $90^\\circ$ right angle: $${c}\\text{ cm}$ since $${a}^2 + ${b}^2 = ${c}^2$.`
    );
  }

  function genCh2() {
    const v = randInt(1, 5);
    if (v === 1) {
      const base = pick([25, 40, 55, 70, 110, 135, 200, 245, 305, 330]);
      const k = pick([1, -1, 2]);
      const cot = base + 360 * k;
      return makeMcq(
        `Which angle is coterminal with $${base}^\\circ$?`,
        `$${cot}^\\circ$`,
        [`$${base + 180}^\\circ$`, `$${360 - base}^\\circ$`, `$${base + 90}^\\circ$`],
        `Coterminal angles differ by integer multiples of $360^\\circ$: $${base}^\\circ + (${k})\\cdot 360^\\circ = ${cot}^\\circ$.`
      );
    }
    if (v === 2) {
      const qMap = [
        { q: "Quadrant I", range: [12, 84] },
        { q: "Quadrant II", range: [96, 174] },
        { q: "Quadrant III", range: [186, 264] },
        { q: "Quadrant IV", range: [276, 354] }
      ];
      const item = pick(qMap);
      const ang = randInt(item.range[0], item.range[1]) + pick([0, 360]);
      return makeMcq(
        `In which quadrant does the terminal side of $${ang}^\\circ$ lie in standard position?`,
        item.q,
        ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"].filter((x) => x !== item.q),
        `Reducing modulo $360^\\circ$ gives $${ang % 360}^\\circ$, which lies in ${item.q}.`
      );
    }
    if (v === 3) {
      const deg = randInt(12, 68);
      const mins = pick([15, 30, 45]);
      const dec = deg + mins / 60;
      return makeMcq(
        `Convert $${deg}^\\circ\\,${mins}'$ into decimal degrees.`,
        `$${dec}^\\circ$`,
        [`$${deg}.${mins}^\\circ$`, `$${(deg + mins / 100).toFixed(2)}^\\circ$`, `$${deg + 1}^\\circ$`],
        `Since $1^\\circ = 60'$, $${deg}^\\circ\\,${mins}' = ${deg} + \\frac{${mins}}{60} = ${dec}^\\circ$.`
      );
    }
    if (v === 4) {
      const negAng = -randInt(20, 340);
      const posCot = ((negAng % 360) + 360) % 360;
      return makeMcq(
        `Find the smallest non-negative coterminal angle in $[0^\\circ, 360^\\circ)$ for $${negAng}^\\circ$.`,
        `$${posCot}^\\circ$`,
        [`$${Math.abs(negAng)}^\\circ$`, `$${180 + negAng}^\\circ$`, `$${360 - posCot}^\\circ$`],
        `Adding $360^\\circ$: $${negAng}^\\circ + 360^\\circ = ${posCot}^\\circ$.`
      );
    }
    const turns = pick([
      { label: "\\frac{1}{4}", cw: false, ans: "90^\\circ" },
      { label: "\\frac{1}{2}", cw: true, ans: "-180^\\circ" },
      { label: "\\frac{3}{4}", cw: false, ans: "270^\\circ" },
      { label: "\\frac{1}{3}", cw: true, ans: "-120^\\circ" },
      { label: "\\frac{2}{3}", cw: false, ans: "240^\\circ" }
    ]);
    return makeMcq(
      `A ray rotates $${turns.label}$ of a full revolution ${turns.cw ? "clockwise" : "anticlockwise"}. What is the directed angle?`,
      `$${turns.ans}$`,
      [`$${turns.cw ? turns.ans.slice(1) : "-" + turns.ans}$`, `$180^\\circ$`, `$60^\\circ$`],
      `${turns.cw ? "Clockwise rotation is negative" : "Anticlockwise rotation is positive"}: $\\pm ${turns.label} \\times 360^\\circ = ${turns.ans}$.`
    );
  }

  function genCh3() {
    const v = randInt(1, 4);
    if (v === 1) {
      const deg = pick([15, 20, 30, 36, 45, 60, 72, 75, 90, 105, 120, 135, 144, 150, 210, 225, 240, 270, 300, 315, 330]);
      const ans = `$${piRad(deg)}$`;
      return makeMcq(
        `Convert $${deg}^\\circ$ into radian measure.`,
        ans,
        [`$${piRad(deg + 30)}$`, `$${piRad(Math.max(15, deg - 15))}$`, `$${piRad(deg * 2)}$`],
        `Multiply by $\\frac{\\pi}{180^\\circ}$: $${deg}^\\circ \\times \\frac{\\pi}{180^\\circ} = ${piRad(deg)}\\text{ rad}$.`
      );
    }
    if (v === 2) {
      const deg = pick([18, 24, 30, 45, 60, 75, 108, 120, 135, 150, 210, 240, 300, 315]);
      const rad = piRad(deg);
      return makeMcq(
        `Convert $${rad}\\text{ rad}$ into degrees.`,
        `$${deg}^\\circ$`,
        [`$${deg + 15}^\\circ$`, `$${Math.max(10, deg - 30)}^\\circ$`, `$${deg * 2}^\\circ$`],
        `Substitute $\\pi\\text{ rad} = 180^\\circ$: $${rad} = ${deg}^\\circ$.`
      );
    }
    if (v === 3) {
      const r = randInt(3, 18);
      const num = randInt(1, 5);
      const den = pick([2, 3, 4, 6]);
      const arc = simpFrac(r * num, den);
      return makeMcq(
        `Find the arc length $s$ on a circle of radius $r = ${r}\\text{ cm}$ subtending central angle $\\theta = \\frac{${num}\\pi}{${den}}\\text{ rad}$.`,
        `$${arc}\\pi\\text{ cm}$`,
        [`$${simpFrac(r * r * num, 2 * den)}\\pi\\text{ cm}$`, `$${simpFrac(r * num, den * 2)}\\pi\\text{ cm}$`, `$${r * num}\\text{ cm}$`],
        `Using $s = r\\theta$: $s = ${r} \\times \\frac{${num}\\pi}{${den}} = ${arc}\\pi\\text{ cm}$.`
      );
    }
    const r = pick([4, 6, 8, 10, 12]);
    const den = pick([3, 4, 6]);
    const area = simpFrac(r * r, 2 * den);
    return makeMcq(
      `Find the area $A$ of a circular sector of radius $r = ${r}\\text{ cm}$ and central angle $\\theta = \\frac{\\pi}{${den}}\\text{ rad}$.`,
      `$${area}\\pi\\text{ cm}^2$`,
      [`$${simpFrac(r * r, den)}\\pi\\text{ cm}^2$`, `$${simpFrac(r, den)}\\pi\\text{ cm}^2$`, `$${r * r}\\pi\\text{ cm}^2$`],
      `Sector area $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(${r})^2 \\cdot \\frac{\\pi}{${den}} = ${area}\\pi\\text{ cm}^2$.`
    );
  }

  function genCh4() {
    const [P, B, H] = pick(TRIPLES);
    const fn = pick(["sin", "cos", "tan"]);
    const map = {
      sin: { sym: "\\sin\\theta", val: simpFrac(P, H), formula: "\\frac{\\text{Perpendicular } (P)}{\\text{Hypotenuse } (H)}", w1: simpFrac(B, H), w2: simpFrac(P, B), w3: simpFrac(H, P) },
      cos: { sym: "\\cos\\theta", val: simpFrac(B, H), formula: "\\frac{\\text{Base } (B)}{\\text{Hypotenuse } (H)}", w1: simpFrac(P, H), w2: simpFrac(B, P), w3: simpFrac(H, B) },
      tan: { sym: "\\tan\\theta", val: simpFrac(P, B), formula: "\\frac{\\text{Perpendicular } (P)}{\\text{Base } (B)}", w1: simpFrac(B, P), w2: simpFrac(P, H), w3: simpFrac(B, H) }
    }[fn];
    if (randInt(1, 4) === 1) {
      const defPick = pick([
        { q: "In any right-angled triangle, $\\sin\\theta$ is defined as:", c: "$\\frac{\\text{Perpendicular } (P)}{\\text{Hypotenuse } (H)}$", d: ["$\\frac{\\text{Base } (B)}{\\text{Hypotenuse } (H)}$", "$\\frac{\\text{Perpendicular } (P)}{\\text{Base } (B)}$", "$\\frac{\\text{Hypotenuse } (H)}{\\text{Perpendicular } (P)}$"] },
        { q: "In any right-angled triangle, $\\cos\\theta$ is defined as:", c: "$\\frac{\\text{Base } (B)}{\\text{Hypotenuse } (H)}$", d: ["$\\frac{\\text{Perpendicular } (P)}{\\text{Hypotenuse } (H)}$", "$\\frac{\\text{Base } (B)}{\\text{Perpendicular } (P)}$", "$\\frac{\\text{Hypotenuse } (H)}{\\text{Base } (B)}$"] },
        { q: "In any right-angled triangle, $\\tan\\theta$ is defined as:", c: "$\\frac{\\text{Perpendicular } (P)}{\\text{Base } (B)}$", d: ["$\\frac{\\text{Base } (B)}{\\text{Perpendicular } (P)}$", "$\\frac{\\text{Perpendicular } (P)}{\\text{Hypotenuse } (H)}$", "$\\frac{\\text{Base } (B)}{\\text{Hypotenuse } (H)}$"] }
      ]);
      return makeMcq(defPick.q, defPick.c, defPick.d, `By right-triangle ratio definition: ${defPick.c}.`);
    }
    return makeMcq(
      `In a right triangle with Perpendicular $P = ${P}$, Base $B = ${B}$, and Hypotenuse $H = ${H}$, find $${map.sym}$.`,
      `$${map.val}$`,
      [`$${map.w1}$`, `$${map.w2}$`, `$${map.w3}$`],
      `$${map.sym} = ${map.formula} = ${map.val}$.`
    );
  }

  function genCh5() {
    const [P, B, H] = pick(TRIPLES);
    const v = randInt(1, 3);
    if (v === 1) {
      const fn = pick(["csc", "sec", "cot"]);
      const map = {
        csc: { sym: "\\csc\\theta", val: simpFrac(H, P), def: "\\frac{H}{P}", w: [simpFrac(P, H), simpFrac(H, B), simpFrac(B, P)] },
        sec: { sym: "\\sec\\theta", val: simpFrac(H, B), def: "\\frac{H}{B}", w: [simpFrac(B, H), simpFrac(H, P), simpFrac(P, B)] },
        cot: { sym: "\\cot\\theta", val: simpFrac(B, P), def: "\\frac{B}{P}", w: [simpFrac(P, B), simpFrac(B, H), simpFrac(H, P)] }
      }[fn];
      return makeMcq(
        `In a right triangle with $P = ${P}$, $B = ${B}$, and $H = ${H}$, find $${map.sym}$.`,
        `$${map.val}$`,
        map.w.map((x) => `$${x}$`),
        `$${map.sym} = ${map.def} = ${map.val}$.`
      );
    }
    if (v === 2) {
      const pair = pick([
        ["\\sin\\theta \\cdot \\csc\\theta", "1", ["0", "\\tan\\theta", "\\cos\\theta"]],
        ["\\cos\\theta \\cdot \\sec\\theta", "1", ["0", "\\sin\\theta", "\\cot\\theta"]],
        ["\\tan\\theta \\cdot \\cot\\theta", "1", ["0", "\\sec^2\\theta", "\\csc^2\\theta"]],
        ["\\frac{\\cos\\theta}{\\sin\\theta}", "\\cot\\theta", ["\\tan\\theta", "\\sec\\theta", "\\csc\\theta"]]
      ]);
      const k = randInt(2, 9);
      return pair[1] === "1"
        ? makeMcq(
            `Evaluate $${k}\\,${pair[0]}$ for any acute angle $\\theta$.`,
            `$${k}$`,
            [`$1$`, `$0$`, `$${k * 2}$`],
            `Since $${pair[0]} = 1$ (reciprocal pair), $${k}\\,${pair[0]} = ${k}$.`
          )
        : makeMcq(`Simplify the quotient $${pair[0]}$.`, `$${pair[1]}$`, pair[2].map((x) => `$${x}$`), `$\\frac{\\cos\\theta}{\\sin\\theta} = \\frac{B/H}{P/H} = \\frac{B}{P} = \\cot\\theta$.`);
    }
    return makeMcq(
      `If $\\sin\\theta = ${simpFrac(P, H)}$, what is $\\csc\\theta$?`,
      `$${simpFrac(H, P)}$`,
      [`$${simpFrac(B, H)}$`, `$${simpFrac(H, B)}$`, `$${simpFrac(P, B)}$`],
      `$\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{H}{P} = ${simpFrac(H, P)}$.`
    );
  }

  function genCh6() {
    const v = randInt(1, 3);
    if (v === 1) {
      const row = pick(STD_TABLE);
      const fn = pick(["sin", "cos", "tan", "csc", "sec", "cot"]);
      const symMap = { sin: "\\sin", cos: "\\cos", tan: "\\tan", csc: "\\csc", sec: "\\sec", cot: "\\cot" };
      const ans = `$${row[fn]}$`;
      const wrongs = shuffle(["$0$", "$1$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{2}}$", "$\\sqrt{3}$", "$\\frac{1}{\\sqrt{3}}$", "$2$", "$\\sqrt{2}$", "$\\text{Undefined}$"]);
      return makeMcq(
        `What is the exact value of $${symMap[fn]} ${row.deg}^\\circ$?`,
        ans,
        wrongs,
        `From the standard-angle exact ratio table, $${symMap[fn]} ${row.deg}^\\circ = ${row[fn]}$.`
      );
    }
    if (v === 2) {
      const a = randInt(2, 6);
      const b = randInt(1, 5);
      const exprs = [
        { q: `Evaluate $${a}\\tan^2 45^\\circ + ${b}\\sin 30^\\circ\\cdot 2$.`, ans: a + b, exp: `$\\tan 45^\\circ = 1$ and $2\\sin 30^\\circ = 1$, giving $${a}(1) + ${b}(1) = ${a + b}$.` },
        { q: `Evaluate $${a}(\\sin^2 30^\\circ + \\cos^2 30^\\circ) + ${b}\\cos 0^\\circ$.`, ans: a + b, exp: `$\\sin^2 30^\\circ + \\cos^2 30^\\circ = 1$ and $\\cos 0^\\circ = 1$, so $${a} + ${b} = ${a + b}$.` },
        { q: `Evaluate $${a}\\sec^2 45^\\circ - ${b}\\tan 45^\\circ$.`, ans: 2 * a - b, exp: `$\\sec^2 45^\\circ = (\\sqrt{2})^2 = 2$ and $\\tan 45^\\circ = 1$, giving $2(${a}) - ${b} = ${2 * a - b}$.` },
        { q: `Evaluate $${a}\\csc 30^\\circ + ${b}\\sec 60^\\circ$.`, ans: 2 * (a + b), exp: `$\\csc 30^\\circ = 2$ and $\\sec 60^\\circ = 2$, so $2(${a}) + 2(${b}) = ${2 * (a + b)}$.` }
      ];
      const item = pick(exprs);
      return makeMcq(item.q, `$${item.ans}$`, [`$${item.ans + 1}$`, `$${item.ans - 1}$`, `$${item.ans + 2}$`], item.exp);
    }
    const item = pick([
      { q: "Evaluate $\\sin 60^\\circ \\cos 30^\\circ + \\sin 30^\\circ \\cos 60^\\circ$.", a: "$1$", d: ["$0$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$"], e: "$\\frac{\\sqrt{3}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\cdot\\frac{1}{2} = \\frac{3}{4}+\\frac{1}{4}=1$." },
      { q: "Evaluate $\\frac{2\\tan 30^\\circ}{1 + \\tan^2 30^\\circ}$.", a: "$\\frac{\\sqrt{3}}{2}$", d: ["$\\frac{1}{2}$", "$\\sqrt{3}$", "$1$"], e: "Equals $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$." },
      { q: "Evaluate $\\frac{1 - \\tan^2 45^\\circ}{1 + \\tan^2 45^\\circ}$.", a: "$0$", d: ["$1$", "$\\frac{1}{2}$", "$-1$"], e: "Since $\\tan 45^\\circ = 1$, numerator $1 - 1 = 0$." }
    ]);
    return makeMcq(item.q, item.a, item.d, item.e);
  }

  function genCh7() {
    const v = randInt(1, 4);
    const a = randInt(7, 43);
    const b = 90 - a;
    if (v === 1) {
      const pair = pick([
        ["\\sin", "\\cos"],
        ["\\tan", "\\cot"],
        ["\\sec", "\\csc"]
      ]);
      const coef = randInt(1, 5);
      return makeMcq(
        `Evaluate $${coef}\\,\\frac{${pair[0]} ${a}^\\circ}{${pair[1]} ${b}^\\circ}$.`,
        `$${coef}$`,
        [`$0$`, `$1$`, `$${coef + 1}$`],
        `Since $${a}^\\circ + ${b}^\\circ = 90^\\circ$, $${pair[0]} ${a}^\\circ = ${pair[1]}(90^\\circ - ${a}^\\circ) = ${pair[1]} ${b}^\\circ$, so the ratio is $1$ and the value is $${coef}$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `Evaluate $\\cos ${a}^\\circ - \\sin ${b}^\\circ$.`,
        `$0$`,
        [`$1$`, `$-1$`, `$2\\cos ${a}^\\circ$`],
        `Because $${a}^\\circ + ${b}^\\circ = 90^\\circ$, $\\cos ${a}^\\circ = \\sin ${b}^\\circ$, so their difference is $0$.`
      );
    }
    if (v === 3) {
      const k = pick([2, 3, 4]);
      const ansA = randInt(12, Math.floor(84 / (k + 1)));
      const offset = 90 - (k + 1) * ansA;
      const signStr = offset >= 0 ? `+ ${offset}^\\circ` : `- ${Math.abs(offset)}^\\circ`;
      return makeMcq(
        `If $\\sin(${k}A) = \\cos(A ${signStr})$ where $${k}A$ is acute, find $A$.`,
        `$${ansA}^\\circ$`,
        [`$${ansA + 6}^\\circ$`, `$${Math.max(5, ansA - 5)}^\\circ$`, `$${ansA * 2}^\\circ$`],
        `Using $\\sin(${k}A) = \\cos(90^\\circ - ${k}A)$ gives $90^\\circ - ${k}A = A ${signStr} \\implies ${k + 1}A = ${90 - offset}^\\circ \\implies A = ${ansA}^\\circ$.`
      );
    }
    const c1 = randInt(5, 40);
    const c2 = 90 - c1;
    return makeMcq(
      `Evaluate $\\tan ${c1}^\\circ \\cdot \\tan 45^\\circ \\cdot \\tan ${c2}^\\circ$.`,
      `$1$`,
      [`$0$`, `$\\sqrt{3}$`, `$2$`],
      `$\\tan ${c1}^\\circ \\cdot \\tan ${c2}^\\circ = \\tan ${c1}^\\circ \\cdot \\cot ${c1}^\\circ = 1$, and $\\tan 45^\\circ = 1$.`
    );
  }

  function genCh8() {
    const [P, B, H] = pick(TRIPLES);
    const given = pick([
      { txt: `\\sin\\theta = ${simpFrac(P, H)}`, ask: "\\cos\\theta", ans: simpFrac(B, H), w: [simpFrac(P, B), simpFrac(H, B), simpFrac(P, H)] },
      { txt: `\\cos\\theta = ${simpFrac(B, H)}`, ask: "\\tan\\theta", ans: simpFrac(P, B), w: [simpFrac(B, P), simpFrac(P, H), simpFrac(H, P)] },
      { txt: `\\tan\\theta = ${simpFrac(P, B)}`, ask: "\\sec\\theta", ans: simpFrac(H, B), w: [simpFrac(B, H), simpFrac(H, P), simpFrac(P, H)] },
      { txt: `\\cot\\theta = ${simpFrac(B, P)}`, ask: "\\csc\\theta", ans: simpFrac(H, P), w: [simpFrac(P, H), simpFrac(H, B), simpFrac(B, H)] },
      { txt: `\\tan\\theta = ${simpFrac(P, B)}`, ask: "\\sin\\theta + \\cos\\theta", ans: simpFrac(P + B, H), w: [simpFrac(Math.abs(P - B), H), simpFrac(P + B, P * B), simpFrac(H, P + B)] }
    ]);
    return makeMcq(
      `For acute angle $\\theta$, given $${given.txt}$, find $${given.ask}$.`,
      `$${given.ans}$`,
      given.w.map((x) => `$${x}$`),
      `With $P = ${P}, B = ${B}, H = \\sqrt{${P}^2 + ${B}^2} = ${H}$, we obtain $${given.ask} = ${given.ans}$.`
    );
  }

  function genCh9() {
    const v = randInt(1, 3);
    if (v === 1) {
      const H = pick([10, 14, 18, 20, 24, 30, 40]);
      return makeMcq(
        `In a right triangle with Hypotenuse $H = ${H}\\text{ m}$ and acute angle $\\theta = 30^\\circ$, find the Perpendicular $P$.`,
        `$${H / 2}\\text{ m}$`,
        [`$${H}\\text{ m}$`, `$${H / 2}\\sqrt{3}\\text{ m}$`, `$${H * 2}\\text{ m}$`],
        `$P = H\\sin 30^\\circ = ${H} \\times \\frac{1}{2} = ${H / 2}\\text{ m}$.`
      );
    }
    if (v === 2) {
      const B = randInt(6, 28);
      return makeMcq(
        `In a right triangle with Base $B = ${B}\\text{ cm}$ and $\\theta = 45^\\circ$, find the Perpendicular $P$.`,
        `$${B}\\text{ cm}$`,
        [`$${B}\\sqrt{2}\\text{ cm}$`, `$\\frac{${B}}{2}\\text{ cm}$`, `$${B}\\sqrt{3}\\text{ cm}$`],
        `$P = B\\tan 45^\\circ = ${B} \\times 1 = ${B}\\text{ cm}$.`
      );
    }
    const B = randInt(4, 20);
    return makeMcq(
      `In a right triangle with Base $B = ${B}\\text{ m}$ and $\\theta = 60^\\circ$, find the Hypotenuse $H$.`,
      `$${2 * B}\\text{ m}$`,
      [`$${B}\\sqrt{3}\\text{ m}$`, `$${B}\\text{ m}$`, `$\\frac{${B}}{2}\\text{ m}$`],
      `$\\cos 60^\\circ = \\frac{B}{H} = \\frac{1}{2} \\implies H = 2B = ${2 * B}\\text{ m}$.`
    );
  }

  function genCh10() {
    const k = randInt(2, 12);
    const cases = [
      { desc: `Perpendicular $P = ${k}$ and Hypotenuse $H = ${2 * k}$`, ans: "30^\\circ", exp: `$\\sin\\theta = \\frac{P}{H} = \\frac{${k}}{${2 * k}} = \\frac{1}{2} \\implies \\theta = 30^\\circ$.` },
      { desc: `Base $B = ${k}$ and Hypotenuse $H = ${2 * k}$`, ans: "60^\\circ", exp: `$\\cos\\theta = \\frac{B}{H} = \\frac{${k}}{${2 * k}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$.` },
      { desc: `Perpendicular $P = ${k}$ and Base $B = ${k}$`, ans: "45^\\circ", exp: `$\\tan\\theta = \\frac{P}{B} = \\frac{${k}}{${k}} = 1 \\implies \\theta = 45^\\circ$.` },
      { desc: `Perpendicular $P = ${k}\\sqrt{3}$ and Base $B = ${k}$`, ans: "60^\\circ", exp: `$\\tan\\theta = \\frac{P}{B} = \\sqrt{3} \\implies \\theta = 60^\\circ$.` },
      { desc: `Perpendicular $P = ${k}$ and Base $B = ${k}\\sqrt{3}$`, ans: "30^\\circ", exp: `$\\tan\\theta = \\frac{P}{B} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$.` }
    ];
    const c = pick(cases);
    return makeMcq(
      `In a right-angled triangle, if ${c.desc}, find the acute angle $\\theta$.`,
      `$${c.ans}$`,
      ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"].filter((x) => x !== `$${c.ans}$`),
      c.exp
    );
  }

  function genCh11() {
    const m = randInt(2, 15);
    const v = randInt(1, 4);
    if (v === 1) {
      const form = pick([
        `\\sin^2\\theta + \\cos^2\\theta`,
        `\\sec^2\\theta - \\tan^2\\theta`,
        `\\csc^2\\theta - \\cot^2\\theta`
      ]);
      return makeMcq(
        `Evaluate $${m}(${form})$ where defined.`,
        `$${m}$`,
        [`$0$`, `$1$`, `$${-m}$`],
        `By the fundamental Pythagorean identity, $${form} = 1$, so $${m}(1) = ${m}$.`
      );
    }
    if (v === 2) {
      const k = randInt(2, 9);
      return makeMcq(
        `If $\\sec\\theta + \\tan\\theta = ${k}$, find the value of $\\sec\\theta - \\tan\\theta$.`,
        `$\\frac{1}{${k}}$`,
        [`$${-k}$`, `$${k}$`, `$${simpFrac(k * k + 1, 2 * k)}$`],
        `Since $(\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta) = \\sec^2\\theta - \\tan^2\\theta = 1$, $\\sec\\theta - \\tan\\theta = \\frac{1}{${k}}$.`
      );
    }
    if (v === 3) {
      const k = randInt(2, 7);
      const secVal = simpFrac(k * k + 1, 2 * k);
      return makeMcq(
        `If $\\csc\\theta + \\cot\\theta = ${k}$, what is $\\csc\\theta$?`,
        `$${secVal}$`,
        [`$\\frac{1}{${k}}$`, `$${simpFrac(k * k - 1, 2 * k)}$`, `$${k}$`],
        `$\\csc\\theta - \\cot\\theta = \\frac{1}{${k}}$. Adding the two equations gives $2\\csc\\theta = ${k} + \\frac{1}{${k}} = \\frac{${k * k + 1}}{${k}} \\implies \\csc\\theta = ${secVal}$.`
      );
    }
    const a = randInt(2, 8);
    return makeMcq(
      `Evaluate $${a}\\tan^2\\theta - ${a}\\sec^2\\theta$.`,
      `$${-a}$`,
      [`$${a}$`, `$0$`, `$1$`],
      `$${a}(\\tan^2\\theta - \\sec^2\\theta) = ${a}(-1) = ${-a}$.`
    );
  }

  function genCh12() {
    const k = randInt(2, 9);
    const items = [
      { q: `Simplify $${k}(1 - \\sin^2\\theta)\\sec^2\\theta$.`, a: `$${k}$`, d: [`$0$`, `$${k}\\cos^2\\theta$`, `$${k}\\tan^2\\theta$`], e: `$(1 - \\sin^2\\theta)\\sec^2\\theta = \\cos^2\\theta \\cdot \\frac{1}{\\cos^2\\theta} = 1$, so the expression equals $${k}$.` },
      { q: `Simplify $\\frac{${k}\\sin\\theta}{\\tan\\theta}$.`, a: `$${k}\\cos\\theta$`, d: [`$${k}\\sin\\theta$`, `$${k}\\sec\\theta$`, `$\\frac{${k}}{\\cos\\theta}$`], e: `$\\frac{\\sin\\theta}{\\sin\\theta / \\cos\\theta} = \\cos\\theta$, giving $${k}\\cos\\theta$.` },
      { q: `Simplify $${k}(1 + \\tan^2\\theta)(1 - \\sin^2\\theta)$.`, a: `$${k}$`, d: [`$${k}\\tan^2\\theta$`, `$1$`, `$0$`], e: `$\\sec^2\\theta \\cdot \\cos^2\\theta = 1$, so the result is $${k}$.` },
      { q: `Simplify $(\\sin\\theta + \\cos\\theta)^2 + (\\sin\\theta - \\cos\\theta)^2$.`, a: `$2$`, d: [`$1$`, `$4\\sin\\theta\\cos\\theta$`, `$0$`], e: `Cross terms $\\pm 2\\sin\\theta\\cos\\theta$ cancel, leaving $2(\\sin^2\\theta + \\cos^2\\theta) = 2$.` },
      { q: `Simplify $${k}(\\csc^2\\theta - 1)\\tan^2\\theta$.`, a: `$${k}$`, d: [`$0$`, `$${-k}$`, `$${k}\\cot^2\\theta$`], e: `$(\\csc^2\\theta - 1)\\tan^2\\theta = \\cot^2\\theta \\cdot \\tan^2\\theta = 1$, leaving $${k}$.` }
    ];
    const it = pick(items);
    return makeMcq(it.q, it.a, it.d, it.e);
  }

  function genCh13() {
    const a = randInt(2, 7);
    const b = randInt(2, 7);
    const v = randInt(1, 4);
    if (v === 1) {
      const sumSq = a * a + b * b;
      return makeMcq(
        `If $x = ${a}\\cos\\theta - ${b}\\sin\\theta$ and $y = ${a}\\sin\\theta + ${b}\\cos\\theta$, then $x^2 + y^2$ identically equals:`,
        `$${sumSq}$`,
        [`$${Math.abs(a * a - b * b)}$`, `$${(a + b) * (a + b)}$`, `$${a + b}$`],
        `Squaring and adding cancels $\\pm 2(${a})(${b})\\sin\\theta\\cos\\theta$, leaving $(${a}^2 + ${b}^2)(\\sin^2\\theta + \\cos^2\\theta) = ${sumSq}$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `The conjugate identity $\\sqrt{\\frac{1 + \\sin\\theta}{1 - \\sin\\theta}}$ for acute $\\theta$ simplifies to:`,
        `$\\sec\\theta + \\tan\\theta$`,
        [`$\\sec\\theta - \\tan\\theta$`, `$\\csc\\theta + \\cot\\theta$`, `$1 + \\sin\\theta$`],
        `Multiplying inside by $\\frac{1+\\sin\\theta}{1+\\sin\\theta}$ gives $\\sqrt{\\frac{(1+\\sin\\theta)^2}{\\cos^2\\theta}} = \\frac{1+\\sin\\theta}{\\cos\\theta} = \\sec\\theta + \\tan\\theta$.`
      );
    }
    if (v === 3) {
      return makeMcq(
        `Evaluate $\\sin^4\\theta - \\cos^4\\theta$ in terms of $\\sin^2\\theta$.`,
        `$2\\sin^2\\theta - 1$`,
        [`$1 - 2\\sin^2\\theta$`, `$1$`, `$\\sin^2\\theta - 1$`],
        `Factor as $(\\sin^2\\theta - \\cos^2\\theta)(\\sin^2\\theta + \\cos^2\\theta) = \\sin^2\\theta - (1 - \\sin^2\\theta) = 2\\sin^2\\theta - 1$.`
      );
    }
    const c = randInt(2, 6);
    return makeMcq(
      `For any acute $\\theta$, $${c}(\\sin^6\\theta + \\cos^6\\theta + 3\\sin^2\\theta\\cos^2\\theta)$ equals:`,
      `$${c}$`,
      [`$${3 * c}$`, `$1$`, `$0$`],
      `Since $(\\sin^2\\theta + \\cos^2\\theta)^3 = \\sin^6\\theta + \\cos^6\\theta + 3\\sin^2\\theta\\cos^2\\theta = 1$, multiplying by $${c}$ gives $${c}$.`
    );
  }

  function genCh14() {
    const d = randInt(10, 60);
    const v = randInt(1, 3);
    if (v === 1) {
      return makeMcq(
        `From a point $${d}\\text{ m}$ away from the foot of a vertical tower, the angle of elevation of its top is $45^\\circ$. Find the tower's height.`,
        `$${d}\\text{ m}$`,
        [`$${d}\\sqrt{3}\\text{ m}$`, `$\\frac{${d}}{\\sqrt{3}}\\text{ m}$`, `$${2 * d}\\text{ m}$`],
        `$\\tan 45^\\circ = \\frac{h}{${d}} \\implies h = ${d}\\times 1 = ${d}\\text{ m}$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `A vertical pole of height $${d}\\text{ m}$ casts a shadow of length $${d}\\sqrt{3}\\text{ m}$. What is the sun's angle of elevation?`,
        `$30^\\circ$`,
        [`$60^\\circ$`, `$45^\\circ$`, `$15^\\circ$`],
        `$\\tan\\theta = \\frac{P}{B} = \\frac{${d}}{${d}\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$.`
      );
    }
    const L = pick([10, 12, 16, 20, 24, 30]);
    return makeMcq(
      `A ladder $${L}\\text{ m}$ long leans against a vertical wall making $60^\\circ$ with the horizontal ground. How far is its foot from the wall?`,
      `$${L / 2}\\text{ m}$`,
      [`$${L / 2}\\sqrt{3}\\text{ m}$`, `$${L}\\text{ m}$`, `$${L / 4}\\text{ m}$`],
      `Base distance $B = H\\cos 60^\\circ = ${L} \\times \\frac{1}{2} = ${L / 2}\\text{ m}$.`
    );
  }

  function genCh15() {
    const h = pick([15, 20, 30, 40, 50, 60]);
    const v = randInt(1, 3);
    if (v === 1) {
      return makeMcq(
        `From the top of a $${h}\\text{ m}$ cliff, the angles of depression of two boats in line on opposite sides are $45^\\circ$ and $45^\\circ$. How far apart are the boats?`,
        `$${2 * h}\\text{ m}$`,
        [`$${h}\\text{ m}$`, `$${h}\\sqrt{3}\\text{ m}$`, `$${3 * h}\\text{ m}$`],
        `Distances on each side are $d_1 = ${h}\\cot 45^\\circ = ${h}$ and $d_2 = ${h}\\cot 45^\\circ = ${h}$, so total separation is $${2 * h}\\text{ m}$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `Walking toward a tower of height $${h}\\sqrt{3}\\text{ m}$, the angle of elevation changes from $30^\\circ$ to $60^\\circ$. What distance was walked?`,
        `$${2 * h}\\text{ m}$`,
        [`$${h}\\text{ m}$`, `$${3 * h}\\text{ m}$`, `$${h}\\sqrt{3}\\text{ m}$`],
        `$d = H(\\cot 30^\\circ - \\cot 60^\\circ) = ${h}\\sqrt{3}\\left(\\sqrt{3} - \\frac{1}{\\sqrt{3}}\\right) = ${h}(3 - 1) = ${2 * h}\\text{ m}$.`
      );
    }
    return makeMcq(
      `From the top of a $${h}\\text{ m}$ building, the angle of elevation of a tower's top is $45^\\circ$ and the angle of depression of its foot is $45^\\circ$. Find the tower's height.`,
      `$${2 * h}\\text{ m}$`,
      [`$${h}\\text{ m}$`, `$${3 * h}\\text{ m}$`, `$${h}\\sqrt{2}\\text{ m}$`],
      `Horizontal distance $x = ${h}\\cot 45^\\circ = ${h}\\text{ m}$; tower height $= ${h} + x\\tan 45^\\circ = ${2 * h}\\text{ m}$.`
    );
  }

  function genCh16() {
    const [P, B, H] = pick(TRIPLES);
    const sx = pick([1, -1]);
    const sy = pick([1, -1]);
    const x = simpFrac(sx * B, H);
    const y = simpFrac(sy * P, H);
    const fn = pick(["sin", "cos", "tan"]);
    const ans = fn === "sin" ? y : fn === "cos" ? x : simpFrac(sy * P, sx * B);
    const sym = fn === "sin" ? "\\sin\\theta" : fn === "cos" ? "\\cos\\theta" : "\\tan\\theta";
    return makeMcq(
      `The terminal ray of $\\theta$ intersects the unit circle $x^2 + y^2 = 1$ at $P\\left(${x},\\,${y}\\right)$. Find $${sym}$.`,
      `$${ans}$`,
      [`$${fn === "sin" ? x : y}$`, `$1$`, `$${simpFrac(-sy * P, H)}$`],
      `On the unit circle, $\\cos\\theta = x = ${x}$, $\\sin\\theta = y = ${y}$, and $\\tan\\theta = y/x$, so $${sym} = ${ans}$.`
    );
  }

  function genCh17() {
    const cases = [
      { d: 120, fn: "\\sin", a: "\\frac{\\sqrt{3}}{2}" },
      { d: 120, fn: "\\cos", a: "-\\frac{1}{2}" },
      { d: 135, fn: "\\tan", a: "-1" },
      { d: 150, fn: "\\sin", a: "\\frac{1}{2}" },
      { d: 150, fn: "\\cos", a: "-\\frac{\\sqrt{3}}{2}" },
      { d: 210, fn: "\\sin", a: "-\\frac{1}{2}" },
      { d: 225, fn: "\\tan", a: "1" },
      { d: 240, fn: "\\cos", a: "-\\frac{1}{2}" },
      { d: 300, fn: "\\cos", a: "\\frac{1}{2}" },
      { d: 315, fn: "\\tan", a: "-1" },
      { d: 330, fn: "\\sin", a: "-\\frac{1}{2}" },
      { d: -30, fn: "\\sin", a: "-\\frac{1}{2}" },
      { d: -60, fn: "\\cos", a: "\\frac{1}{2}" }
    ];
    const c = pick(cases);
    const extraTurns = pick([0, 360]);
    const ang = c.d > 0 ? c.d + extraTurns : c.d;
    return makeMcq(
      `Evaluate the exact value of $${c.fn}(${ang}^\\circ)$.`,
      `$${c.a}$`,
      shuffle(["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$1$", "$-1$", "$0$"]),
      `Using allied-angle reduction and quadrant sign (ASTC), $${c.fn}(${ang}^\\circ) = ${c.a}$.`
    );
  }

  function genCh18() {
    const v = randInt(1, 2);
    if (v === 1) {
      const qData = pick([
        { cond: "$\\sin\\theta > 0$ and $\\cos\\theta > 0$", q: "Quadrant I" },
        { cond: "$\\sin\\theta > 0$ and $\\cos\\theta < 0$", q: "Quadrant II" },
        { cond: "$\\sin\\theta > 0$ and $\\tan\\theta < 0$", q: "Quadrant II" },
        { cond: "$\\tan\\theta > 0$ and $\\sin\\theta < 0$", q: "Quadrant III" },
        { cond: "$\\cos\\theta < 0$ and $\\cot\\theta > 0$", q: "Quadrant III" },
        { cond: "$\\cos\\theta > 0$ and $\\sin\\theta < 0$", q: "Quadrant IV" },
        { cond: "$\\sec\\theta > 0$ and $\\tan\\theta < 0$", q: "Quadrant IV" }
      ]);
      return makeMcq(
        `If ${qData.cond}, in which quadrant does $\\theta$ lie?`,
        qData.q,
        ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"].filter((x) => x !== qData.q),
        `By the ASTC rule (All, Sine, Tan, Cos positive in Q-I, II, III, IV), $\\theta$ lies in ${qData.q}.`
      );
    }
    const [P, B, H] = pick(TRIPLES);
    const quad = pick([2, 3, 4]);
    const cosSign = quad === 4 ? "" : "-";
    return makeMcq(
      `If $\\sin\\theta = ${quad === 2 ? "" : "-"}${simpFrac(P, H)}$ and $\\theta$ lies in Quadrant ${quad === 2 ? "II" : quad === 3 ? "III" : "IV"}, find $\\cos\\theta$.`,
      `$${cosSign}${simpFrac(B, H)}$`,
      [`$${cosSign === "-" ? "" : "-"}${simpFrac(B, H)}$`, `$${simpFrac(P, B)}$`, `$-${simpFrac(P, B)}$`],
      `Magnitude $|\\cos\\theta| = \\frac{B}{H} = ${simpFrac(B, H)}$; in Quadrant ${quad === 2 ? "II" : quad === 3 ? "III" : "IV"}, cosine is ${cosSign === "-" ? "negative" : "positive"}.`
    );
  }

  function genCh19() {
    const [a, b, r] = pick(TRIPLES);
    const c = randInt(-6, 8);
    const askMax = Math.random() < 0.5;
    const ans = askMax ? c + r : c - r;
    const signB = Math.random() < 0.5 ? "+" : "-";
    const cStr = c === 0 ? "" : c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`;
    return makeMcq(
      `Find the ${askMax ? "maximum" : "minimum"} value of $f(x) = ${a}\\sin x ${signB} ${b}\\cos x${cStr}$.`,
      `$${ans}$`,
      [`$${askMax ? c - r : c + r}$`, `$${c + a + b}$`, `$${r}$`],
      `The extreme values of $a\\sin x \\pm b\\cos x + c$ are $c \\pm \\sqrt{a^2 + b^2} = ${c} \\pm ${r}$, so the ${askMax ? "maximum" : "minimum"} is $${ans}$.`
    );
  }

  function genCh20() {
    const k = randInt(2, 9);
    const fn = pick(["sin", "cos", "tan"]);
    const base = fn === "tan" ? 1 : 2;
    const ans = simpFrac(base, k);
    const pAns = ans === "1" ? "\\pi" : ans.includes("\\frac") ? ans.replace("\\frac{", "\\frac{").replace("}{", "\\pi}{").replace("1\\pi", "\\pi") : `${ans}\\pi`;
    return makeMcq(
      `What is the fundamental period of $f(x) = \\${fn}(${k}x)$?`,
      `$${pAns}$`,
      [`$${k}\\pi$`, `$2${k}\\pi$`, `$\\frac{\\pi}{${k * 2}}$`],
      `The period of $\\${fn}(kx)$ is $\\frac{${base === 2 ? "2\\pi" : "\\pi"}}{|k|} = \\frac{${base === 2 ? "2\\pi" : "\\pi"}}{${k}} = ${pAns}$.`
    );
  }

  function genCh21() {
    const A = randInt(2, 11);
    const B = randInt(2, 6);
    const C = randInt(1, 5);
    const D = randInt(-5, 7);
    const ask = pick(["amp", "shift", "mid"]);
    const dStr = D >= 0 ? `+ ${D}` : `- ${Math.abs(D)}`;
    if (ask === "amp") {
      return makeMcq(
        `What is the amplitude of the wave $y = -${A}\\sin(${B}x - ${C}\\pi) ${dStr}$?`,
        `$${A}$`,
        [`$-${A}$`, `$${B}$`, `$${A + Math.abs(D)}$`],
        `Amplitude is always $|A| = |-${A}| = ${A}$.`
      );
    }
    if (ask === "mid") {
      return makeMcq(
        `What is the midline (vertical shift) equation of $y = ${A}\\cos(${B}x + \\pi) ${dStr}$?`,
        `$y = ${D}$`,
        [`$y = ${A}$`, `$y = ${B}$`, `$y = 0$`],
        `In $y = A\\cos(Bx + C) + D$, the horizontal midline is $y = D = ${D}$.`
      );
    }
    return makeMcq(
      `Find the horizontal phase shift of $y = ${A}\\sin(${B}x - ${C}\\pi)$.`,
      `$${simpFrac(C, B) === "1" ? "" : simpFrac(C, B)}\\pi\\text{ right}$`.replace("\\frac{1}", "\\frac{\\pi}").replace(/\\frac\{(\d+)\}\{(\d+)\}\\pi/, "\\frac{$1\\pi}{$2}"),
      [`$${C}\\pi\\text{ left}$`, `$${B}\\pi\\text{ right}$`, `$0$`],
      `Setting ${B}x - ${C}\\pi = 0 gives $x = \\frac{${C}\\pi}{${B}}$ to the right.`
    );
  }

  function genCh22() {
    const a = randInt(10, 70);
    const v = randInt(1, 3);
    if (v === 1) {
      const target = pick([30, 45, 60, 90]);
      const b = target - a;
      if (b > 0) {
        const row = STD_TABLE.find((r) => r.deg === target);
        return makeMcq(
          `Evaluate $\\sin ${a}^\\circ \\cos ${b}^\\circ + \\cos ${a}^\\circ \\sin ${b}^\\circ$.`,
          `$${row.sin}$`,
          ["$0$", "$1$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{2}}$"].filter((x) => x !== `$${row.sin}$`),
          `By $\\sin(A + B)$, this equals $\\sin(${a}^\\circ + ${b}^\\circ) = \\sin ${target}^\\circ = ${row.sin}$.`
        );
      }
    }
    if (v === 2) {
      const b = a + pick([30, 45, 60]);
      const diff = b - a;
      const row = STD_TABLE.find((r) => r.deg === diff);
      return makeMcq(
        `Evaluate $\\cos ${b}^\\circ \\cos ${a}^\\circ + \\sin ${b}^\\circ \\sin ${a}^\\circ$.`,
        `$${row.cos}$`,
        ["$0$", "$1$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{2}}$"].filter((x) => x !== `$${row.cos}$`),
        `By $\\cos(B - A)$, this equals $\\cos(${b}^\\circ - ${a}^\\circ) = \\cos ${diff}^\\circ = ${row.cos}$.`
      );
    }
    const item = pick([
      { q: "What is the exact value of $\\sin 15^\\circ$?", a: "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$", d: ["$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", "$\\frac{\\sqrt{3}-1}{2}$", "$\\frac{1}{4}$"] },
      { q: "What is the exact value of $\\cos 15^\\circ$?", a: "$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", d: ["$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$", "$\\frac{\\sqrt{3}+1}{2}$", "$\\frac{\\sqrt{3}}{4}$"] },
      { q: "What is the exact value of $\\tan 75^\\circ$?", a: "$2 + \\sqrt{3}$", d: ["$2 - \\sqrt{3}$", "$\\sqrt{3} - 1$", "$1 + \\sqrt{3}$"] },
      { q: "What is the exact value of $\\tan 15^\\circ$?", a: "$2 - \\sqrt{3}$", d: ["$2 + \\sqrt{3}$", "$\\sqrt{3} - 1$", "$\\frac{1}{2}$"] }
    ]);
    return makeMcq(item.q, item.a, item.d, `Using compound-angle expansion $(45^\\circ \\pm 30^\\circ)$, the exact value is ${item.a}.`);
  }

  function genCh23() {
    const v = randInt(1, 3);
    if (v === 1) {
      const [P, B, H] = pick(TRIPLES);
      const sin2 = simpFrac(2 * P * B, H * H);
      const cos2 = simpFrac(B * B - P * P, H * H);
      const askSin = Math.random() < 0.5;
      return makeMcq(
        `For acute angle $A$ with $\\sin A = ${simpFrac(P, H)}$ and $\\cos A = ${simpFrac(B, H)}$, find $${askSin ? "\\sin 2A" : "\\cos 2A"}$.`,
        `$${askSin ? sin2 : cos2}$`,
        [`$${askSin ? cos2 : sin2}$`, `$${simpFrac(2 * P, H)}$`, `$${simpFrac(P * P + B * B, H * H)}$`],
        askSin
          ? `$\\sin 2A = 2\\sin A\\cos A = 2\\left(${simpFrac(P, H)}\\right)\\left(${simpFrac(B, H)}\\right) = ${sin2}$.`
          : `$\\cos 2A = \\cos^2 A - \\sin^2 A = ${cos2}$.`
      );
    }
    if (v === 2) {
      const deg = pick([15, 22.5, 30]);
      const dbl = deg * 2;
      const row = STD_TABLE.find((r) => r.deg === dbl);
      const fn = pick(["sin", "cos"]);
      return makeMcq(
        fn === "sin"
          ? `Evaluate $2\\sin ${deg}^\\circ \\cos ${deg}^\\circ$.`
          : `Evaluate $2\\cos^2 ${deg}^\\circ - 1$.`,
        `$${row[fn]}$`,
        ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{2}}$", "$1$", "$0$"].filter((x) => x !== `$${row[fn]}$`),
        `By the double-angle formula, this equals $\\${fn}(2 \\times ${deg}^\\circ) = \\${fn} ${dbl}^\\circ = ${row[fn]}$.`
      );
    }
    const t = randInt(2, 5);
    const s2 = simpFrac(2 * t, 1 + t * t);
    return makeMcq(
      `If $\\tan\\frac{A}{2} = ${t}$, find $\\sin A$ using the Weierstrass $t$-formula.`,
      `$${s2}$`,
      [`$${simpFrac(1 - t * t, 1 + t * t)}$`, `$${simpFrac(2 * t, t * t - 1)}$`, `$\\frac{1}{${t}}$`],
      `$\\sin A = \\frac{2t}{1 + t^2} = \\frac{2(${t})}{1 + ${t}^2} = ${s2}$.`
    );
  }

  function genCh24() {
    const v = randInt(1, 3);
    if (v === 1) {
      const p = randInt(1, 4);
      const q = randInt(p + 1, 6);
      // sin 3A = 3 sin A - 4 sin^3 A
      const num = 3 * p * q * q - 4 * p * p * p;
      const den = q * q * q;
      const ans = simpFrac(num, den);
      return makeMcq(
        `If $\\sin A = ${simpFrac(p, q)}$, find $\\sin 3A$.`,
        `$${ans}$`,
        [`$${simpFrac(3 * p, q)}$`, `$${simpFrac(-num, den)}$`, `$${simpFrac(4 * p * p * p - 3 * p * q * q, den)}$`],
        `$\\sin 3A = 3\\sin A - 4\\sin^3 A = 3\\left(${simpFrac(p, q)}\\right) - 4\\left(${simpFrac(p, q)}\\right)^3 = ${ans}$.`
      );
    }
    if (v === 2) {
      const a = pick([10, 15, 20]);
      const row = STD_TABLE.find((r) => r.deg === 3 * a);
      return makeMcq(
        `Evaluate $4\\cos^3 ${a}^\\circ - 3\\cos ${a}^\\circ$.`,
        `$${row.cos}$`,
        ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{2}}$", "$0$", "$1$"].filter((x) => x !== `$${row.cos}$`),
        `$4\\cos^3 ${a}^\\circ - 3\\cos ${a}^\\circ = \\cos(3 \\times ${a}^\\circ) = \\cos ${3 * a}^\\circ = ${row.cos}$.`
      );
    }
    const deg = pick([10, 15, 20]);
    const row = STD_TABLE.find((r) => r.deg === 3 * deg);
    const valMap = { "1": "\\frac{1}{4}", "\\frac{1}{2}": "\\frac{1}{8}", "\\frac{\\sqrt{3}}{2}": "\\frac{\\sqrt{3}}{8}", "\\frac{1}{\\sqrt{2}}": "\\frac{1}{4\\sqrt{2}}" };
    return makeMcq(
      `Evaluate $\\sin ${deg}^\\circ \\sin(${60 - deg}^\\circ) \\sin(${60 + deg}^\\circ)$.`,
      `$${valMap[row.sin]}$`,
      ["$\\frac{1}{4}$", "$\\frac{1}{8}$", "$\\frac{\\sqrt{3}}{8}$", "$\\frac{1}{2}$"].filter((x) => x !== `$${valMap[row.sin]}$`),
      `Using $\\sin A\\sin(60^\\circ - A)\\sin(60^\\circ + A) = \\frac{1}{4}\\sin 3A = \\frac{1}{4}\\sin ${3 * deg}^\\circ = ${valMap[row.sin]}$.`
    );
  }

  function genCh25() {
    const v = randInt(1, 3);
    if (v === 1) {
      const n = pick([1, 7, 17, 23]);
      const d = 25;
      // cos A = (2m^2 - d)/d or use clean cos A = (2p^2 - q^2)/q^2
      const p = randInt(1, 5);
      const q = randInt(p + 1, 7);
      const cosA = simpFrac(2 * p * p - q * q, q * q);
      const cosHalf = simpFrac(p, q);
      return makeMcq(
        `If $A \\in (0^\\circ, 180^\\circ)$ and $\\cos A = ${cosA}$, find $\\cos\\frac{A}{2}$.`,
        `$${cosHalf}$`,
        [`$-${cosHalf}$`, `$${simpFrac(q - p, q)}$`, `$${simpFrac(p * p, q * q)}$`],
        `$\\cos\\frac{A}{2} = +\\sqrt{\\frac{1 + \\cos A}{2}} = \\sqrt{\\frac{2(${p}^2)/${q}^2}{2}} = ${cosHalf}$ since $\\frac{A}{2} \\in (0^\\circ, 90^\\circ)$.`
      );
    }
    if (v === 2) {
      const k = randInt(2, 8);
      return makeMcq(
        `Simplify $\\frac{1 - \\cos(${2 * k}x)}{\\sin(${2 * k}x)}$.`,
        `$\\tan(${k}x)$`,
        [`$\\cot(${k}x)$`, `$\\tan(${2 * k}x)$`, `$2\\sin(${k}x)$`],
        `$\\frac{2\\sin^2(${k}x)}{2\\sin(${k}x)\\cos(${k}x)} = \\tan(${k}x)$.`
      );
    }
    const item = pick([
      { q: "What is the exact value of $\\tan 22.5^\\circ$?", a: "$\\sqrt{2} - 1$", d: ["$\\sqrt{2} + 1$", "$2 - \\sqrt{2}$", "$\\frac{\\sqrt{2}}{2}$"] },
      { q: "What is the exact value of $\\cot 22.5^\\circ$?", a: "$\\sqrt{2} + 1$", d: ["$\\sqrt{2} - 1$", "$2 + \\sqrt{2}$", "$\\sqrt{3} + 1$"] },
      { q: "What is the exact value of $\\sin 18^\\circ$?", a: "$\\frac{\\sqrt{5} - 1}{4}$", d: ["$\\frac{\\sqrt{5} + 1}{4}$", "$\\frac{\\sqrt{3} - 1}{4}$", "$\\frac{1}{4}$"] }
    ]);
    return makeMcq(item.q, item.a, item.d, `Exact half-angle / golden-triangle evaluation gives ${item.a}.`);
  }

  function genCh26() {
    const m = randInt(3, 9);
    const n = randInt(1, m - 1);
    if ((m + n) % 2 !== 0) return genCh26();
    const avg = (m + n) / 2;
    const halfDiff = (m - n) / 2;
    const v = randInt(1, 3);
    if (v === 1) {
      return makeMcq(
        `Simplify $\\frac{\\sin(${m}x) + \\sin(${n}x)}{\\cos(${m}x) + \\cos(${n}x)}$.`,
        `$\\tan(${avg}x)$`,
        [`$\\cot(${avg}x)$`, `$\\tan(${halfDiff}x)$`, `$\\tan(${m + n}x)$`],
        `$\\frac{2\\sin(${avg}x)\\cos(${halfDiff}x)}{2\\cos(${avg}x)\\cos(${halfDiff}x)} = \\tan(${avg}x)$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `Convert $\\cos(${m}x) - \\cos(${n}x)$ into a product.`,
        `$-2\\sin(${avg}x)\\sin(${halfDiff}x)$`,
        [`$2\\sin(${avg}x)\\sin(${halfDiff}x)$`, `$2\\cos(${avg}x)\\cos(${halfDiff}x)$`, `$-2\\cos(${avg}x)\\sin(${halfDiff}x)$`],
        `By the reverse-sign identity $\\cos C - \\cos D = -2\\sin\\frac{C+D}{2}\\sin\\frac{C-D}{2}$, we get $-2\\sin(${avg}x)\\sin(${halfDiff}x)$.`
      );
    }
    return makeMcq(
      `Evaluate $\\sin 75^\\circ - \\sin 15^\\circ$.`,
      `$\\frac{1}{\\sqrt{2}}$`,
      [`$\\frac{\\sqrt{3}}{2}$`, `$\\frac{1}{2}$`, `$\\sqrt{2}$`],
      `$2\\cos 45^\\circ \\sin 30^\\circ = 2\\cdot\\frac{1}{\\sqrt{2}}\\cdot\\frac{1}{2} = \\frac{1}{\\sqrt{2}}$.`
    );
  }

  function genCh27() {
    const a = randInt(4, 12);
    const b = randInt(1, a - 1);
    const v = randInt(1, 3);
    if (v === 1) {
      return makeMcq(
        `Expand $2\\sin(${a}x)\\cos(${b}x)$ as a sum of sines.`,
        `$\\sin(${a + b}x) + \\sin(${a - b}x)$`,
        [`$\\sin(${a + b}x) - \\sin(${a - b}x)$`, `$\\cos(${a - b}x) - \\cos(${a + b}x)$`, `$\\cos(${a + b}x) + \\cos(${a - b}x)$`],
        `Using $2\\sin A\\cos B = \\sin(A + B) + \\sin(A - B)$ yields $\\sin(${a + b}x) + \\sin(${a - b}x)$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `Expand $2\\sin(${a}x)\\sin(${b}x)$ as a difference of cosines.`,
        `$\\cos(${a - b}x) - \\cos(${a + b}x)$`,
        [`$\\cos(${a + b}x) - \\cos(${a - b}x)$`, `$\\cos(${a - b}x) + \\cos(${a + b}x)$`, `$\\sin(${a + b}x) - \\sin(${a - b}x)$`],
        `Using $2\\sin A\\sin B = \\cos(A - B) - \\cos(A + B)$ yields $\\cos(${a - b}x) - \\cos(${a + b}x)$.`
      );
    }
    return makeMcq(
      `Evaluate $2\\cos 45^\\circ \\cos 15^\\circ$.`,
      `$\\frac{\\sqrt{3} + 1}{2}$`,
      [`$\\frac{\\sqrt{3} - 1}{2}$`, "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$"],
      `$\\cos(60^\\circ) + \\cos(30^\\circ) = \\frac{1}{2} + \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3} + 1}{2}$.`
    );
  }

  function genCh28() {
    const A = randInt(35, 75);
    const B = randInt(35, 75);
    const C = 180 - A - B;
    const v = randInt(1, 3);
    if (v === 1) {
      const k = randInt(2, 6);
      return makeMcq(
        `In any non-right $\\triangle ABC$ ($A + B + C = \\pi$), if $\\tan A = 2$ and $\\tan B = 3$, find $\\tan C$ from $\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$.`,
        `$1$`,
        [`$-1$`, `$5$`, `$6$`],
        `$2 + 3 + \\tan C = 2(3)\\tan C \\implies 5 = 5\\tan C \\implies \\tan C = 1$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `In $\\triangle ABC$ with $A = ${A}^\\circ, B = ${B}^\\circ, C = ${C}^\\circ$, evaluate $\\sin(A + B) - \\sin C$.`,
        `$0$`,
        [`$1$`, `$2\\sin C$`, `$-1$`],
        `Since $A + B = 180^\\circ - C$, $\\sin(A + B) = \\sin(180^\\circ - C) = \\sin C$, so the difference is $0$.`
      );
    }
    return makeMcq(
      `In any $\\triangle ABC$ ($A + B + C = 180^\\circ$), evaluate $\\cos(A + B) + \\cos C$.`,
      `$0$`,
      [`$1$`, `$2\\cos C$`, `$-1$`],
      `$\\cos(180^\\circ - C) = -\\cos C$, so $\\cos(A + B) + \\cos C = 0$.`
    );
  }

  function genCh29() {
    const v = randInt(1, 2);
    if (v === 1) {
      const cases = [
        { eq: "\\sin x = \\frac{1}{2}", s: "\\frac{\\pi}{6},\\,\\frac{5\\pi}{6}" },
        { eq: "\\sin x = -\\frac{1}{2}", s: "\\frac{7\\pi}{6},\\,\\frac{11\\pi}{6}" },
        { eq: "\\sin x = \\frac{\\sqrt{3}}{2}", s: "\\frac{\\pi}{3},\\,\\frac{2\\pi}{3}" },
        { eq: "\\sin x = -\\frac{\\sqrt{3}}{2}", s: "\\frac{4\\pi}{3},\\,\\frac{5\\pi}{3}" },
        { eq: "\\cos x = \\frac{1}{2}", s: "\\frac{\\pi}{3},\\,\\frac{5\\pi}{3}" },
        { eq: "\\cos x = -\\frac{1}{2}", s: "\\frac{2\\pi}{3},\\,\\frac{4\\pi}{3}" },
        { eq: "\\cos x = \\frac{1}{\\sqrt{2}}", s: "\\frac{\\pi}{4},\\,\\frac{7\\pi}{4}" },
        { eq: "\\tan x = 1", s: "\\frac{\\pi}{4},\\,\\frac{5\\pi}{4}" },
        { eq: "\\tan x = -1", s: "\\frac{3\\pi}{4},\\,\\frac{7\\pi}{4}" },
        { eq: "\\tan x = \\sqrt{3}", s: "\\frac{\\pi}{3},\\,\\frac{4\\pi}{3}" },
        { eq: "\\tan x = -\\frac{1}{\\sqrt{3}}", s: "\\frac{5\\pi}{6},\\,\\frac{11\\pi}{6}" }
      ];
      const c = pick(cases);
      const others = cases.filter((x) => x.s !== c.s).map((x) => `$${x.s}$`);
      return makeMcq(
        `Find all principal solutions of $${c.eq}$ in $[0, 2\\pi)$.`,
        `$${c.s}$`,
        shuffle(others),
        `Checking the two ASTC quadrants where the equation holds in $[0, 2\\pi)$ gives $x = ${c.s}$.`
      );
    }
    const n = randInt(2, 6);
    const fn = pick(["sin", "cos"]);
    return makeMcq(
      `How many solutions does $\\${fn}(${n}x) = \\frac{1}{2}$ have on $[0, 2\\pi)$?`,
      `$${2 * n}$`,
      [`$${n}$`, `$${4 * n}$`, `$2$`],
      `$\\${fn}(${n}x)$ completes $${n}$ full periods on $[0, 2\\pi)$ and crosses $y = \\frac{1}{2}$ twice per period, giving $2 \\times ${n} = ${2 * n}$ roots.`
    );
  }

  function genCh30() {
    const k = randInt(1, 5);
    const items = [
      { q: `Find the general solution ($n \\in \\mathbb{Z}$) of $\\sin(${k}x) = 0$.`, a: `$x = \\frac{n\\pi}{${k}}$`.replace("\\frac{n\\pi}{1}", "n\\pi"), d: [`$x = \\frac{(2n+1)\\pi}{${2 * k}}$`, `$x = 2n\\pi$`, `$x = \\frac{2n\\pi}{${k}} + \\pi$`] },
      { q: `Find the general solution ($n \\in \\mathbb{Z}$) of $\\cos x = \\cos\\frac{\\pi}{${k + 2}}$.`, a: `$2n\\pi \\pm \\frac{\\pi}{${k + 2}}$`, d: [`$n\\pi + \\frac{\\pi}{${k + 2}}$`, `$n\\pi + (-1)^n\\frac{\\pi}{${k + 2}}$`, `$2n\\pi + \\frac{\\pi}{${k + 2}}$`] },
      { q: `Find the general solution ($n \\in \\mathbb{Z}$) of $\\tan x = \\tan\\frac{\\pi}{${k + 2}}$.`, a: `$n\\pi + \\frac{\\pi}{${k + 2}}$`, d: [`$2n\\pi \\pm \\frac{\\pi}{${k + 2}}$`, `$n\\pi + (-1)^n\\frac{\\pi}{${k + 2}}$`, `$2n\\pi + \\frac{\\pi}{${k + 2}}$`] },
      { q: `Find the general solution ($n \\in \\mathbb{Z}$) of $\\sin^2 x = \\sin^2\\frac{\\pi}{${k + 2}}$.`, a: `$n\\pi \\pm \\frac{\\pi}{${k + 2}}$`, d: [`$2n\\pi \\pm \\frac{\\pi}{${k + 2}}$`, `$n\\pi + \\frac{\\pi}{${k + 2}}$`, `$\\frac{n\\pi}{2}$`] }
    ];
    const it = pick(items);
    return makeMcq(it.q, it.a, it.d, `Standard general-solution theorem gives ${it.a} for $n \\in \\mathbb{Z}$.`);
  }

  function genCh31() {
    const [a, b, r] = pick(TRIPLES);
    const cYes = randInt(0, r);
    const cNo = r + randInt(1, 5);
    const solvable = Math.random() < 0.5;
    const c = solvable ? cYes : cNo;
    return makeMcq(
      `Does the linear equation $${a}\\cos x + ${b}\\sin x = ${c}$ have real solutions for $x$?`,
      solvable ? `Yes, since $|${c}| \\le ${r}$` : `No, since $|${c}| > ${r}$`,
      [
        solvable ? `No, since $|${c}| > ${r}$` : `Yes, since $|${c}| \\le ${r}$`,
        `Only when $x = 0$`,
        `Only if $${a} = ${b}$`
      ],
      `$a\\cos x + b\\sin x = c$ has real solutions iff $|c| \\le \\sqrt{a^2 + b^2} = \\sqrt{${a}^2 + ${b}^2} = ${r}$.`
    );
  }

  function genCh32() {
    const v = randInt(1, 3);
    if (v === 1) {
      const a = pick([6, 8, 10, 12, 14, 18, 20]);
      // a / sin 30 = 2R => R = a
      return makeMcq(
        `In $\\triangle ABC$, if side $a = ${a}$ and opposite angle $A = 30^\\circ$, find the circumradius $R$.`,
        `$${a}$`,
        [`$${a / 2}$`, `$${2 * a}$`, `$${a}\\sqrt{3}$`],
        `By the Extended Sine Rule, $2R = \\frac{a}{\\sin A} = \\frac{${a}}{1/2} = ${2 * a} \\implies R = ${a}$.`
      );
    }
    if (v === 2) {
      const k = randInt(1, 4);
      const a = 3 * k, b = 5 * k, c = 7 * k;
      return makeMcq(
        `In $\\triangle ABC$ with sides $a = ${a}, b = ${b}, c = ${c}$, find angle $C$ opposite the longest side $c$.`,
        `$120^\\circ$`,
        [`$60^\\circ$`, `$90^\\circ$`, `$150^\\circ$`],
        `$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{9 + 25 - 49}{30} = -\\frac{1}{2} \\implies C = 120^\\circ$.`
      );
    }
    const b = randInt(4, 12) * 2;
    const c = randInt(3, 10);
    const area = (b * c) / 4; // 1/2 b c sin 30 = bc/4
    return makeMcq(
      `Find the area $\\Delta$ of $\\triangle ABC$ with $b = ${b}$, $c = ${c}$, and included angle $A = 30^\\circ$.`,
      `$${area}$`,
      [`$${area * 2}$`, `$${area}\\sqrt{3}$`, `$${b + c}$`],
      `$\\Delta = \\frac{1}{2}bc\\sin 30^\\circ = \\frac{1}{2}(${b})(${c})\\left(\\frac{1}{2}\\right) = ${area}$.`
    );
  }

  function genCh33() {
    const [P, B, H] = pick(TRIPLES);
    const v = randInt(1, 3);
    if (v === 1) {
      return makeMcq(
        `Evaluate $\\sin\\left(\\cos^{-1}\\left(${simpFrac(B, H)}\\right)\\right)$.`,
        `$${simpFrac(P, H)}$`,
        [`$${simpFrac(B, H)}$`, `$${simpFrac(P, B)}$`, `$${simpFrac(H, P)}$`],
        `Let $\\theta = \\cos^{-1}(${simpFrac(B, H)})$ with $B = ${B}, H = ${H}$. Then $P = \\sqrt{${H}^2 - ${B}^2} = ${P}$, so $\\sin\\theta = ${simpFrac(P, H)}$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `Evaluate $\\tan\\left(\\sin^{-1}\\left(${simpFrac(P, H)}\\right)\\right)$.`,
        `$${simpFrac(P, B)}$`,
        [`$${simpFrac(B, P)}$`, `$${simpFrac(B, H)}$`, `$${simpFrac(H, B)}$`],
        `With $P = ${P}, H = ${H}$, Base $B = ${B}$, giving $\\tan\\theta = \\frac{P}{B} = ${simpFrac(P, B)}$.`
      );
    }
    const n = randInt(2, 12);
    return makeMcq(
      `Evaluate $\\tan(\\tan^{-1}(${n})) + \\sin\\left(\\sin^{-1}\\left(\\frac{1}{${n}}\\right)\\right)$.`,
      `$${simpFrac(n * n + 1, n)}$`,
      [`$${n}$`, `$\\frac{1}{${n}}$`, `$1$`],
      `$\\tan(\\tan^{-1}(${n})) = ${n}$ and $\\sin(\\sin^{-1}(1/${n})) = \\frac{1}{${n}}$, summing to $${simpFrac(n * n + 1, n)}$.`
    );
  }

  function genCh34() {
    const k = randInt(2, 7);
    const v = randInt(1, 2);
    if (v === 1) {
      return makeMcq(
        `Find the domain of $f(x) = \\sin^{-1}(${k}x - 1)$.`,
        `$\\left[0,\\,\\frac{2}{${k}}\\right]$`.replace("\\frac{2}{2}", "1").replace("\\frac{2}{4}", "\\frac{1}{2}").replace("\\frac{2}{6}", "\\frac{1}{3}"),
        [`$[-1, 1]$`, `$\\left[-\\frac{1}{${k}},\\,\\frac{1}{${k}}\\right]$`, `$\\mathbb{R}$`],
        `Require $-1 \\le ${k}x - 1 \\le 1 \\implies 0 \\le ${k}x \\le 2 \\implies x \\in \\left[0, ${simpFrac(2, k)}\\right]$.`
      );
    }
    const rPick = pick([
      { fn: "\\sin^{-1} x", r: "$\\left[-\\frac{\\pi}{2},\\,\\frac{\\pi}{2}\\right]$" },
      { fn: "\\cos^{-1} x", r: "$[0,\\,\\pi]$" },
      { fn: "\\tan^{-1} x", r: "$\\left(-\\frac{\\pi}{2},\\,\\frac{\\pi}{2}\\right)$" },
      { fn: "\\cot^{-1} x", r: "$(0,\\,\\pi)$" },
      { fn: "\\sec^{-1} x", r: "$[0,\\,\\pi] \\setminus \\{\\frac{\\pi}{2}\\}$" },
      { fn: "\\csc^{-1} x", r: "$[-\\frac{\\pi}{2},\\,\\frac{\\pi}{2}] \\setminus \\{0\\}$" }
    ]);
    return makeMcq(
      `What is the principal value range of $y = ${rPick.fn}$?`,
      rPick.r,
      ["$\\left[-\\frac{\\pi}{2},\\,\\frac{\\pi}{2}\\right]$", "$[0,\\,\\pi]$", "$\\left(-\\frac{\\pi}{2},\\,\\frac{\\pi}{2}\\right)$", "$(0,\\,\\pi)$"].filter((x) => x !== rPick.r),
      `The standard principal branch of $${rPick.fn}$ is ${rPick.r}.`
    );
  }

  function genCh35() {
    const v = randInt(1, 2);
    if (v === 1) {
      const pv = pick([
        ["\\sin^{-1}\\left(-\\frac{1}{2}\\right)", "-\\frac{\\pi}{6}"],
        ["\\sin^{-1}\\left(\\frac{1}{2}\\right)", "\\frac{\\pi}{6}"],
        ["\\sin^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right)", "-\\frac{\\pi}{3}"],
        ["\\sin^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right)", "-\\frac{\\pi}{4}"],
        ["\\cos^{-1}\\left(-\\frac{1}{2}\\right)", "\\frac{2\\pi}{3}"],
        ["\\cos^{-1}\\left(-\\frac{1}{\\sqrt{2}}\\right)", "\\frac{3\\pi}{4}"],
        ["\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right)", "\\frac{5\\pi}{6}"],
        ["\\tan^{-1}(-1)", "-\\frac{\\pi}{4}"],
        ["\\tan^{-1}(-\\sqrt{3})", "-\\frac{\\pi}{3}"],
        ["\\tan^{-1}\\left(-\\frac{1}{\\sqrt{3}}\\right)", "-\\frac{\\pi}{6}"],
        ["\\cot^{-1}(-1)", "\\frac{3\\pi}{4}"],
        ["\\cot^{-1}(-\\sqrt{3})", "\\frac{5\\pi}{6}"],
        ["\\sec^{-1}(-2)", "\\frac{2\\pi}{3}"],
        ["\\csc^{-1}(-2)", "-\\frac{\\pi}{6}"]
      ]);
      return makeMcq(
        `Find the principal value of $${pv[0]}$.`,
        `$${pv[1]}$`,
        shuffle(["$-\\frac{\\pi}{6}$", "$\\frac{\\pi}{6}$", "$-\\frac{\\pi}{3}$", "$\\frac{2\\pi}{3}$", "$\\frac{5\\pi}{6}$", "$-\\frac{\\pi}{4}$", "$\\frac{3\\pi}{4}$"]),
        `Using the principal branch rule, $${pv[0]} = ${pv[1]}$.`
      );
    }
    const k = randInt(2, 8);
    return makeMcq(
      `Evaluate $\\frac{${k}}{\\pi}\\left(\\cos^{-1}\\left(-\\frac{1}{2}\\right) + \\sin^{-1}\\left(\\frac{1}{2}\\right)\\right)$.`,
      `$${simpFrac(5 * k, 6)}$`,
      [`$${simpFrac(k, 2)}$`, `$${k}$`, `$${simpFrac(k, 3)}$`],
      `$\\cos^{-1}(-1/2) + \\sin^{-1}(1/2) = \\frac{2\\pi}{3} + \\frac{\\pi}{6} = \\frac{5\\pi}{6}$; multiplying by $\\frac{${k}}{\\pi}$ gives $${simpFrac(5 * k, 6)}$.`
    );
  }

  function genCh36() {
    const v = randInt(1, 3);
    if (v === 1) {
      const k = randInt(2, 9);
      const x = simpFrac(1, k);
      return makeMcq(
        `Evaluate $\\sin(\\sin^{-1}(${x}) + \\cos^{-1}(${x}))$.`,
        `$1$`,
        [`$0$`, `$${x}$`, `$\\frac{\\pi}{2}$`],
        `Since $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$ for all $x \\in [-1, 1]$, $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$.`
      );
    }
    if (v === 2) {
      const fold = pick([
        ["\\sin^{-1}\\left(\\sin\\frac{2\\pi}{3}\\right)", "\\frac{\\pi}{3}"],
        ["\\sin^{-1}\\left(\\sin\\frac{3\\pi}{4}\\right)", "\\frac{\\pi}{4}"],
        ["\\sin^{-1}\\left(\\sin\\frac{5\\pi}{6}\\right)", "\\frac{\\pi}{6}"],
        ["\\cos^{-1}\\left(\\cos\\frac{7\\pi}{6}\\right)", "\\frac{5\\pi}{6}"],
        ["\\cos^{-1}\\left(\\cos\\frac{5\\pi}{4}\\right)", "\\frac{3\\pi}{4}"],
        ["\\tan^{-1}\\left(\\tan\\frac{3\\pi}{4}\\right)", "-\\frac{\\pi}{4}"]
      ]);
      return makeMcq(
        `Evaluate $${fold[0]}$ by folding into the principal branch.`,
        `$${fold[1]}$`,
        shuffle(["$\\frac{\\pi}{3}$", "$\\frac{2\\pi}{3}$", "$\\frac{\\pi}{6}$", "$\\frac{5\\pi}{6}$", "$\\frac{3\\pi}{4}$", "$-\\frac{\\pi}{4}$"]),
        `Folding the angle into the principal value interval yields $${fold[1]}$.`
      );
    }
    const n = randInt(2, 12);
    return makeMcq(
      `For $x = ${n} > 0$, evaluate $\\tan^{-1}(${n}) + \\cot^{-1}(${n})$.`,
      `$\\frac{\\pi}{2}$`,
      [`$\\pi$`, `$0$`, `$1$`],
      `$\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}$ holds for every $x \\in \\mathbb{R}$.`
    );
  }

  function genCh37() {
    const v = randInt(1, 2);
    if (v === 1) {
      // tan^-1(1/p) + tan^-1(1/q) where pq > 1
      const pairs = [
        [2, 3, "\\frac{\\pi}{4}"],
        [1, 2, "\\tan^{-1}(3)"],
        [1, 3, "\\tan^{-1}(2)"],
        [3, 7, "\\tan^{-1}\\left(\\frac{1}{2}\\right)"]
      ];
      const p = pick(pairs);
      return makeMcq(
        `Evaluate $\\tan^{-1}\\left(\\frac{1}{${p[0]}}\\right) + \\tan^{-1}\\left(\\frac{1}{${p[1]}}\\right)$ (note: for $x=1$, $\\frac{1}{1}=1$).`,
        `$${p[2]}$`,
        ["$\\frac{\\pi}{4}$", "$\\frac{\\pi}{2}$", "$\\tan^{-1}(2)$", "$\\tan^{-1}(3)$", "$\\tan^{-1}\\left(\\frac{1}{2}\\right)$"].filter((x) => x !== `$${p[2]}$`),
        `Using $\\tan^{-1} x + \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$ when $xy < 1$ gives $${p[2]}$.`
      );
    }
    const m = randInt(2, 6);
    const sinArg = simpFrac(2 * m, m * m + 1);
    // note for m > 1, 2 tan^-1(1/m) = sin^-1(2m/(m^2+1)) since 1/m < 1!
    return makeMcq(
      `Since $\\frac{1}{${m}} < 1$, express $2\\tan^{-1}\\left(\\frac{1}{${m}}\\right)$ as $\\sin^{-1}(\\cdot)$.`,
      `$\\sin^{-1}\\left(${sinArg}\\right)$`,
      [`$\\sin^{-1}\\left(${simpFrac(m * m - 1, m * m + 1)}\\right)$`, `$\\sin^{-1}\\left(\\frac{2}{${m}}\\right)$`, `$\\cos^{-1}\\left(${sinArg}\\right)$`],
      `For $|x| \\le 1$, $2\\tan^{-1} x = \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right) = \\sin^{-1}\\left(${sinArg}\\right)$.`
    );
  }

  function genCh38() {
    const a = randInt(2, 9);
    const items = [
      { q: `Simplify $\\tan^{-1}\\left(\\frac{x}{\\sqrt{${a * a} - x^2}}\\right)$ for $|x| < ${a}$ using $x = ${a}\\sin\\theta$.`, a: `$\\sin^{-1}\\left(\\frac{x}{${a}}\\right)$`, d: [`$\\cos^{-1}\\left(\\frac{x}{${a}}\\right)$`, `$\\tan^{-1}\\left(\\frac{x}{${a}}\\right)$`, `$${a}\\sin^{-1} x$`] },
      { q: `Simplify $\\tan^{-1}\\left(\\sqrt{\\frac{1 - \\cos(${a}x)}{1 + \\cos(${a}x)}}\\right)$ for $0 < ${a}x < \\pi$.`, a: `$\\frac{${a}x}{2}$`.replace("\\frac{2x}{2}", "x"), d: [`$${a}x$`, `$2(${a}x)$`, `$\\frac{\\pi - ${a}x}{2}$`] },
      { q: `Simplify $\\sin^{-1}\\left(2x\\sqrt{1 - x^2}\\right)$ for $-\\frac{1}{\\sqrt{2}} \\le x \\le \\frac{1}{\\sqrt{2}}$.`, a: `$2\\sin^{-1} x$`, d: [`$2\\cos^{-1} x$`, `$\\sin^{-1}(2x)$`, `$\\pi - 2\\sin^{-1} x$`] },
      { q: `Simplify $\\cos^{-1}(2x^2 - 1)$ for $0 \\le x \\le 1$.`, a: `$2\\cos^{-1} x$`, d: [`$2\\sin^{-1} x$`, `$\\cos^{-1} x$`, `$\\pi - 2\\cos^{-1} x$`] }
    ];
    const it = pick(items);
    return makeMcq(it.q, it.a, it.d, `Trigonometric substitution collapses the inverse expression directly to ${it.a}.`);
  }

  function genCh39() {
    const n = randInt(2, 10);
    const v = randInt(1, 3);
    if (v === 1) {
      return makeMcq(
        `If $\\sin^{-1} x + \\sin^{-1} y + \\sin^{-1} z = \\frac{3\\pi}{2}$, evaluate $x^{${n}} + y^{${n}} + z^{${n}}$.`,
        `$3$`,
        [`$0$`, `$1$`, `$-3$`],
        `Each $\\sin^{-1}(\\cdot) \\le \\frac{\\pi}{2}$, so equality forces $x = y = z = 1$, giving $1^{${n}} + 1^{${n}} + 1^{${n}} = 3$.`
      );
    }
    if (v === 2) {
      const p = 2 * n;
      return makeMcq(
        `If $\\cos^{-1} x + \\cos^{-1} y + \\cos^{-1} z = 3\\pi$, evaluate $x^{${p}} + y^{${p}} + z^{${p}}$.`,
        `$3$`,
        [`$-3$`, `$0$`, `$1$`],
        `Each $\\cos^{-1}(\\cdot) \\le \\pi$, forcing $x = y = z = -1$. Since $${p}$ is even, $(-1)^{${p}} + (-1)^{${p}} + (-1)^{${p}} = 3$.`
      );
    }
    const items = [
      { q: "Evaluate $\\tan^{-1}(1) + \\tan^{-1}(2) + \\tan^{-1}(3)$.", a: "$\\pi$", d: ["$\\frac{\\pi}{2}$", "$\\frac{3\\pi}{4}$", "$0$"] },
      { q: "Evaluate $4\\tan^{-1}\\left(\\frac{1}{5}\\right) - \\tan^{-1}\\left(\\frac{1}{239}\\right)$ (Machin's formula).", a: "$\\frac{\\pi}{4}$", d: ["$\\frac{\\pi}{2}$", "$\\frac{\\pi}{6}$", "$1$"] }
    ];
    const it = pick(items);
    return makeMcq(it.q, it.a, it.d, `Exact multi-term inverse identity gives ${it.a}.`);
  }

  function genCh40() {
    const a = randInt(2, 9);
    const b = randInt(2, 9);
    const v = randInt(1, 4);
    if (v === 1) {
      const ans = simpFrac(a, b);
      return makeMcq(
        `Evaluate $\\lim_{x \\to 0} \\frac{\\sin(${a}x)}{${b}x}$ ($x$ in radians).`,
        `$${ans}$`,
        [`$${simpFrac(b, a)}$`, `$0$`, `$1$`],
        `Writing $\\frac{${a}}{${b}} \\cdot \\frac{\\sin(${a}x)}{${a}x} \\to ${ans}$ as $x \\to 0$.`
      );
    }
    if (v === 2) {
      const ans = simpFrac(a * a, 2);
      return makeMcq(
        `Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos(${a}x)}{x^2}$.`,
        `$${ans}$`,
        [`$${a * a}$`, `$${a}$`, `$0$`],
        `Since $1 - \\cos(${a}x) = 2\\sin^2\\left(\\frac{${a}x}{2}\\right) \\sim \\frac{${a}^2 x^2}{2}$, the limit is $${ans}$.`
      );
    }
    if (v === 3) {
      const dPick = pick([
        { q: `Differentiate $f(x) = \\sin(${a}x)$.`, c: `$${a}\\cos(${a}x)$`, d: [`$-${a}\\cos(${a}x)$`, `$\\cos(${a}x)$`, `$${a}\\sin(${a}x)$`] },
        { q: `Differentiate $f(x) = \\cos(${a}x)$.`, c: `$-${a}\\sin(${a}x)$`, d: [`$${a}\\sin(${a}x)$`, `$-\\sin(${a}x)$`, `$-${a}\\cos(${a}x)$`] },
        { q: `Differentiate $f(x) = \\tan(${a}x)$.`, c: `$${a}\\sec^2(${a}x)$`, d: [`$\\sec^2(${a}x)$`, `$${a}\\tan(${a}x)\\sec(${a}x)$`, `$-${a}\\csc^2(${a}x)$`] }
      ]);
      return makeMcq(dPick.q, dPick.c, dPick.d, `By the chain rule, $f'(x) = ${dPick.c}$.`);
    }
    return makeMcq(
      `Evaluate the indefinite integral $\\int \\cos(${a}x)\\,dx$.`,
      `$\\frac{1}{${a}}\\sin(${a}x) + C$`,
      [`$-\\frac{1}{${a}}\\sin(${a}x) + C$`, `$${a}\\sin(${a}x) + C$`, `$\\sin(${a}x) + C$`],
      `Integrating $\\cos(${a}x)$ divides by the inner coefficient $${a}$: $\\frac{1}{${a}}\\sin(${a}x) + C$.`
    );
  }

  function genCh41() {
    const n = pick([3, 4, 6, 8, 12]);
    const v = randInt(1, 3);
    if (v === 1) {
      return makeMcq(
        `By De Moivre's theorem, evaluate $\\left(\\cos\\frac{\\pi}{${n}} + i\\sin\\frac{\\pi}{${n}}\\right)^{${n}}$.`,
        `$-1$`,
        [`$1$`, `$i$`, `$-i$`],
        `$(\\cos(\\pi/${n}) + i\\sin(\\pi/${n}))^{${n}} = \\cos\\pi + i\\sin\\pi = -1$.`
      );
    }
    if (v === 2) {
      const k = randInt(1, 5);
      return makeMcq(
        `Evaluate $e^{i(${2 * k}\\pi)}$ using Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.`,
        `$1$`,
        [`$-1$`, `$0$`, `$i$`],
        `$e^{i(${2 * k}\\pi)} = \\cos(${2 * k}\\pi) + i\\sin(${2 * k}\\pi) = 1 + 0i = 1$.`
      );
    }
    const A = randInt(70, 110), B = randInt(70, 110), C = randInt(70, 110);
    const E = A + B + C - 180;
    return makeMcq(
      `A spherical triangle on the unit sphere ($R = 1$) has angles $A = ${A}^\\circ, B = ${B}^\\circ, C = ${C}^\\circ$. What is its spherical excess $E$ in degrees?`,
      `$${E}^\\circ$`,
      [`$${A + B + C}^\\circ$`, `$0^\\circ$`, `$${Math.abs(180 - E)}^\\circ$`],
      `By Girard's theorem, spherical excess $E = A + B + C - 180^\\circ = ${E}^\\circ$.`
    );
  }

  function genCh42() {
    const k = randInt(1, 7);
    const m = k + randInt(1, 5);
    const v = randInt(1, 3);
    if (v === 1) {
      return makeMcq(
        `Evaluate the orthogonality integral $\\int_{-\\pi}^{\\pi} \\sin(${k}x)\\sin(${m}x)\\,dx$ (where ${k} \\ne ${m}).`,
        `$0$`,
        [`$\\pi$`, `$2\\pi$`, `$\\frac{\\pi}{${k}}$`],
        `Distinct harmonics $${k} \\ne ${m}$ are orthogonal on $[-\\pi, \\pi]$, so the integral is $0$.`
      );
    }
    if (v === 2) {
      return makeMcq(
        `Evaluate $\\int_{-\\pi}^{\\pi} \\cos^2(${k}x)\\,dx$.`,
        `$\\pi$`,
        [`$2\\pi$`, `$0$`, `$\\frac{\\pi}{2}$`],
        `For every integer $n \\ge 1$, $\\int_{-\\pi}^{\\pi} \\cos^2(nx)\\,dx = \\int_{-\\pi}^{\\pi} \\sin^2(nx)\\,dx = \\pi$.`
      );
    }
    const f0 = pick([50, 60, 100, 120, 440]);
    const h = randInt(2, 6);
    return makeMcq(
      `If a periodic signal has fundamental frequency $f_0 = ${f0}\\text{ Hz}$, what is the frequency of its $${h}\\text{th}$ harmonic?`,
      `$${f0 * h}\\text{ Hz}$`,
      [`$${simpFrac(f0, h)}\\text{ Hz}$`, `$${f0 + h}\\text{ Hz}$`, `$${f0 * h * 2}\\text{ Hz}$`],
      `The $n$th harmonic frequency is $n f_0 = ${h} \\times ${f0} = ${f0 * h}\\text{ Hz}$.`
    );
  }

  function genCh43() {
    const v = randInt(1, 3);
    if (v === 1) {
      const k = randInt(2, 9);
      return makeMcq(
        `Evaluate $${k}(\\cosh^2 x - \\sinh^2 x)$ for any real $x$.`,
        `$${k}$`,
        [`$0$`, `$${-k}$`, `$${k}\\cosh(2x)$`],
        `The fundamental hyperbolic identity is $\\cosh^2 x - \\sinh^2 x = 1$, so multiplying by $${k}$ gives $${k}$.`
      );
    }
    if (v === 2) {
      const deg = randInt(15, 345);
      return makeMcq(
        `What is the determinant $\\det R(${deg}^\\circ)$ of the 2D rotation matrix $R(\\theta) = \\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}$ at $\\theta = ${deg}^\\circ$?`,
        `$1$`,
        [`$0$`, `$-1$`, `$\\cos(2\\cdot ${deg}^\\circ)$`],
        `$\\det R(\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$ for every rotation angle $\\theta \\in SO(2)$.`
      );
    }
    return makeMcq(
      `Using Osborne's complex bridge, $\\cos(ix)$ equals:`,
      `$\\cosh x$`,
      [`$i\\cosh x$`, `$\\sinh x$`, `$i\\sinh x$`],
      `$\\cos(ix) = \\frac{e^{i(ix)} + e^{-i(ix)}}{2} = \\frac{e^{-x} + e^x}{2} = \\cosh x$.`
    );
  }

  const GENERATORS = {
    1: genCh1, 2: genCh2, 3: genCh3, 4: genCh4, 5: genCh5,
    6: genCh6, 7: genCh7, 8: genCh8, 9: genCh9, 10: genCh10,
    11: genCh11, 12: genCh12, 13: genCh13, 14: genCh14, 15: genCh15,
    16: genCh16, 17: genCh17, 18: genCh18, 19: genCh19, 20: genCh20,
    21: genCh21, 22: genCh22, 23: genCh23, 24: genCh24, 25: genCh25,
    26: genCh26, 27: genCh27, 28: genCh28, 29: genCh29, 30: genCh30,
    31: genCh31, 32: genCh32, 33: genCh33, 34: genCh34, 35: genCh35,
    36: genCh36, 37: genCh37, 38: genCh38, 39: genCh39, 40: genCh40,
    41: genCh41, 42: genCh42, 43: genCh43
  };

  function genCh44() {
    const ch = randInt(1, 43);
    return GENERATORS[ch]();
  }
  GENERATORS[44] = genCh44;

  /* ------------------------------------------------------------------------
     Main Entry: Generate 15 Fresh, Non-Repeating MCQs for Chapter `chNum`
     ------------------------------------------------------------------------ */
  function generate15(mod, chNum, allModules) {
    const n = Math.min(44, Math.max(1, Number(chNum) || 1));
    const genFn = GENERATORS[n] || genCh1;
    const recentList = recentStemsByChapter[n] || [];
    const recentSet = new Set(recentList);

    const chosen = [];
    const chosenStems = new Set();

    // 1. Sample 0–3 shuffled items from the chapter's static conceptual quiz (varied each open!)
    const staticPool = shuffle((mod && mod.quiz) || [])
      .map(cloneAndShuffleStaticQuiz)
      .filter(Boolean);
    const freshStatic = staticPool.filter((item) => !recentSet.has(item.q));
    const staticToTake = Math.min(randInt(1, 3), freshStatic.length);
    for (let i = 0; i < staticToTake; i++) {
      chosen.push(freshStatic[i]);
      chosenStems.add(freshStatic[i].q);
    }

    // 2. Generate dynamic procedural questions tailored to Chapter `n` (preferring unseen stems!)
    let attempts = 0;
    while (chosen.length < 15 && attempts < 260) {
      attempts++;
      const qObj = genFn();
      if (!qObj || chosenStems.has(qObj.q)) continue;
      if (attempts < 150 && recentSet.has(qObj.q)) continue;
      chosen.push(qObj);
      chosenStems.add(qObj.q);
    }

    // 3. Fallback safety fill (neighbor chapter generators / static bank) if ever needed
    const neighborNums = [n, Math.max(1, n - 1), Math.min(44, n + 1)];
    let fbAttempts = 0;
    while (chosen.length < 15 && fbAttempts < 120) {
      fbAttempts++;
      const nb = pick(neighborNums);
      const qObj = (GENERATORS[nb] || genCh44)();
      if (qObj && !chosenStems.has(qObj.q)) {
        chosen.push(qObj);
        chosenStems.add(qObj.q);
      }
    }

    // Fallback from remaining static items in same tier if still < 15
    if (chosen.length < 15 && Array.isArray(allModules)) {
      const sameTier = shuffle(
        allModules
          .filter((m) => mod && m.tierId === mod.tierId)
          .flatMap((m) => m.quiz || [])
      );
      for (const st of sameTier) {
        if (chosen.length >= 15) break;
        const cloned = cloneAndShuffleStaticQuiz(st);
        if (cloned && !chosenStems.has(cloned.q)) {
          chosen.push(cloned);
          chosenStems.add(cloned.q);
        }
      }
    }

    const final15 = shuffle(chosen).slice(0, 15);

    // Record stems in rolling history (keep last 30 stems per chapter so next reopen is fresh!)
    const updatedHistory = [...recentList, ...final15.map((x) => x.q)].slice(-30);
    recentStemsByChapter[n] = updatedHistory;

    return final15;
  }

  window.TrigMcqEngine = {
    TOTAL_MCQS: 15,
    PASS_SCORE: 10,
    generate15
  };
})();
