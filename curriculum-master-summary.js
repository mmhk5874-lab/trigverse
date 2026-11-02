/* ==========================================================================
   TrigVerse — Grand Master Summary (Added in Last: Complete 4-Stage Synthesis)
   Covers all 4 Syllabus Stages (9 + 7 + 16 + 9 = 41 Numbered Pillars)
   ========================================================================== */

window.TRIG_SUMMARY_BLOCKS = [
  /* ========================================================================
     STAGE I: FOUNDATIONS & RIGHT-TRIANGLE TRIGONOMETRY (ITEMS 1–9)
     ======================================================================== */
  {
    id: "stage-1",
    badge: "Group I • Ember Ant Outpost (9 Core Topics)",
    animal: "animals/ant.png",
    animalName: "Ember Ant",
    color: "#f97316",
    title: "Group I: Right-Triangle Foundations & Trig Ratios (Topics 1–9)",
    subtitle: "Triangle Geometry, Angle Systems, Degrees & Radians, Primary & Reciprocal Ratios, Standard Angles, Core Identities, Solving Right Triangles & Real-World Heights.",
    items: [
      {
        num: 1,
        title: "Introduction to Trigonometry",
        chapterId: "ch-1-intro",
        summary: "Trigonometry (Greek *Trigonon* + *Metron*) links acute angles of a right-angled triangle to fixed side-length ratios via geometric similarity.",
        formulaTex: "$$P^2 + B^2 = H^2, \\qquad \\angle A + \\angle C = 90^\\circ \\;(\\angle B = 90^\\circ)$$",
        goldenRule: "Scaling a triangle $100\\times$ changes side lengths, NEVER its angle ratios; the hypotenuse $H$ opposite $90^\\circ$ is always the longest side."
      },
      {
        num: 2,
        title: "Measurement of Angles",
        chapterId: "ch-2-angles",
        summary: "Directed rotation from an initial ray to a terminal ray: counter-clockwise is $+$, clockwise is $-$. Subdivided in Sexagesimal DMS ($60', 60''$) or Centesimal Gradians.",
        formulaTex: "$$1^\\circ = 60', \\quad 1' = 60'', \\qquad \\theta_{\\text{coterm}} = \\theta + 360^\\circ k \\;(k \\in \\mathbb{Z})$$",
        goldenRule: "Coterminal angles share the exact same terminal ray and therefore identical trigonometric ratios!"
      },
      {
        num: 3,
        title: "Degrees and Radians",
        chapterId: "ch-3-radian",
        summary: "$1$ radian is the central angle subtended by an arc of length $l = r$. Radian measure is dimensionless, making calculus and rotational kinematics scale-free.",
        formulaTex: "$$\\pi\\text{ rad} = 180^\\circ, \\qquad l = r\\theta, \\qquad A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}lr, \\qquad v = r\\omega$$",
        goldenRule: "Always convert $\\theta$ to radians BEFORE using $l = r\\theta$ or $A = \\frac{1}{2}r^2\\theta$!"
      },
      {
        num: 4,
        title: "Trigonometric Ratios",
        chapterId: "ch-4-primary-ratios",
        summary: "The three primary ratios of an acute angle $\\theta$ compare Opposite ($O$), Adjacent ($A$), and Hypotenuse ($H$).",
        formulaTex: "$$\\sin\\theta = \\frac{O}{H}, \\qquad \\cos\\theta = \\frac{A}{H}, \\qquad \\tan\\theta = \\frac{O}{A} = \\frac{\\sin\\theta}{\\cos\\theta}$$",
        goldenRule: "Since $O < H$ and $A < H$ in every right triangle, $0 < \\sin\\theta < 1$ and $0 < \\cos\\theta < 1$ for acute $\\theta$, while $\\tan\\theta \\in (0, \\infty)$."
      },
      {
        num: 5,
        title: "Reciprocal Trigonometric Ratios",
        chapterId: "ch-5-reciprocal-ratios",
        summary: "Multiplicative inverses ($1/x$) of the three primary ratios: cosecant, secant, and cotangent.",
        formulaTex: "$$\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{H}{O}, \\qquad \\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{H}{A}, \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}$$",
        goldenRule: "$|\\operatorname{cosec}\\theta| \\ge 1$ and $|\\sec\\theta| \\ge 1$ always; never confuse reciprocal $(\\sin\\theta)^{-1} = \\operatorname{cosec}\\theta$ with inverse angle $\\sin^{-1}x$!"
      },
      {
        num: 6,
        title: "Standard Angles",
        chapterId: "ch-6-standard-angles",
        summary: "Exact surd values at $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$ derived from the $45^\\circ\\text{-}45^\\circ\\text{-}90^\\circ$ isosceles right triangle and bisected $60^\\circ$ equilateral triangle.",
        formulaTex: "$$\\sin(0^\\circ,30^\\circ,45^\\circ,60^\\circ,90^\\circ) = \\left(\\frac{\\sqrt{0}}{2},\\frac{\\sqrt{1}}{2},\\frac{\\sqrt{2}}{2},\\frac{\\sqrt{3}}{2},\\frac{\\sqrt{4}}{2}\\right)$$",
        goldenRule: "Reverse the row for $\\cos\\theta$, and divide $\\sin\\theta / \\cos\\theta$ for $\\tan\\theta = (0, \\frac{1}{\\sqrt{3}}, 1, \\sqrt{3}, \\text{undef})$."
      },
      {
        num: 7,
        title: "Trigonometric Identities",
        chapterId: "ch-11-identities",
        summary: "Universal equations true for every admissible angle $\\theta$, anchored by dividing $O^2 + A^2 = H^2$ by $H^2, A^2, O^2$.",
        formulaTex: "$$\\sin^2\\theta + \\cos^2\\theta = 1, \\qquad 1 + \\tan^2\\theta = \\sec^2\\theta, \\qquad 1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta$$",
        goldenRule: "Factor difference-of-squares forms cleanly: $(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1$ and $(\\operatorname{cosec}\\theta - \\cot\\theta)(\\operatorname{cosec}\\theta + \\cot\\theta) = 1$."
      },
      {
        num: 8,
        title: "Finding Unknown Sides and Angles",
        chapterId: "ch-8-unknown-sides",
        summary: "Given $(1\\text{ side} + 1\\text{ acute angle})$ use forward ratios to find sides; given $(2\\text{ sides})$ apply inverse ratios ($\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$) to recover angles.",
        formulaTex: "$$O = H\\sin\\theta,\\; A = H\\cos\\theta,\\; O = A\\tan\\theta; \\qquad \\theta = \\tan^{-1}\\!\\left(\\frac{O}{A}\\right)$$",
        goldenRule: "Always pick the ratio connecting the **1 unknown** directly to the **given exact values** to avoid rounding drift."
      },
      {
        num: 9,
        title: "Applications of Trigonometry",
        chapterId: "ch-10-heights-distances",
        summary: "Line of sight, horizontal reference, Angle of Elevation (upward), and Angle of Depression (downward, equal to ground elevation by alternate interior angles).",
        formulaTex: "$$d_{\\text{approach}} = h(\\cot\\alpha - \\cot\\beta), \\qquad D_{\\text{opposite}} = h(\\cot\\alpha + \\cot\\beta)$$",
        goldenRule: "Angles of elevation and depression are ALWAYS measured from the **horizontal line**, never from the vertical wall/tower!"
      }
    ]
  },

  /* ========================================================================
     STAGE II: CORE ALGEBRAIC & APPLIED TRIGONOMETRY (ITEMS 1–7)
     ======================================================================== */
  {
    id: "stage-2",
    badge: "Group II • Blaze Fox Forge (7 Mastery Topics)",
    animal: "animals/fox.png",
    animalName: "Blaze Fox",
    color: "#fb923c",
    title: "Group II: Algebraic Identities, Proofs & Heights Mastery (Topics 1–7)",
    subtitle: "Co-Function Complementary Shifts, Simplification of Trig Expressions, 7-Step Identity Proof Tactics, Finding Unknown Ratios & Multi-Triangle Surveyor Heights.",
    items: [
      {
        num: 1,
        title: "Trigonometric Ratios",
        chapterId: "ch-4-primary-ratios",
        summary: "Complete 6-ratio ecosystem ($\\sin,\\cos,\\tan,\\operatorname{cosec},\\sec,\\cot$) with Quotient and Product laws ($\\sin\\theta\\operatorname{cosec}\\theta = 1$, $\\tan\\theta\\cot\\theta = 1$).",
        formulaTex: "$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}, \\qquad \\sin^2\\theta = 1 - \\cos^2\\theta = (1-\\cos\\theta)(1+\\cos\\theta)$$",
        goldenRule: "In $\\triangle ABC$ right-angled at $B$, switching reference angle from $A$ to $C$ swaps Opposite $\\leftrightarrow$ Adjacent!"
      },
      {
        num: 2,
        title: "Complementary Angles",
        chapterId: "ch-7-complementary",
        summary: "Because acute angles of a right triangle satisfy $A + C = 90^\\circ$, every ratio of $(90^\\circ - \\theta)$ equals its **co-function** of $\\theta$.",
        formulaTex: "$$\\sin(90^\\circ-\\theta)=\\cos\\theta, \\quad \\tan(90^\\circ-\\theta)=\\cot\\theta, \\quad \\sec(90^\\circ-\\theta)=\\operatorname{cosec}\\theta$$",
        goldenRule: "In telescoping products like $\\tan 1^\\circ\\tan 2^\\circ\\cdots\\tan 89^\\circ$, pair $(k^\\circ, 90^\\circ-k^\\circ)$ so $\\tan k^\\circ \\cot k^\\circ = 1$!"
      },
      {
        num: 3,
        title: "Trigonometric Identities",
        chapterId: "ch-11-identities",
        summary: "Expressing any one of the 6 ratios purely in terms of any single target ratio (e.g., all 6 in terms of $\\tan\\theta$ or $\\sin\\theta$), plus elimination of $\\theta$.",
        formulaTex: "$$(a\\cos\\theta + b\\sin\\theta)^2 + (a\\sin\\theta - b\\cos\\theta)^2 = a^2 + b^2$$",
        goldenRule: "To eliminate $\\theta$ from $x = a\\sec\\theta, y = b\\tan\\theta$, isolate the ratios and subtract: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$."
      },
      {
        num: 4,
        title: "Simplification of Trigonometric Expressions",
        chapterId: "ch-12-simplification",
        summary: "Reducing algebraic trig combinations via LCD combining, $a^3 \\pm b^3$ factoring, conjugate rationalization, and 4th/6th power reductions.",
        formulaTex: "$$\\sin^4\\theta + \\cos^4\\theta = 1 - 2\\sin^2\\theta\\cos^2\\theta, \\qquad \\sin^6\\theta + \\cos^6\\theta = 1 - 3\\sin^2\\theta\\cos^2\\theta$$",
        goldenRule: "Whenever you see $\\sqrt{\\frac{1 - \\sin\\theta}{1 + \\sin\\theta}}$, multiply top & bottom by $(1 - \\sin\\theta)$ to collapse the radical to $\\frac{1 - \\sin\\theta}{|\\cos\\theta|}$."
      },
      {
        num: 5,
        title: "Proof of Trigonometric Identities",
        chapterId: "ch-13-proving",
        summary: "Strictly one-directional transformation ($\\text{LHS} \\to \\text{RHS}$, or $\\text{LHS} \\to M \\leftarrow \\text{RHS}$) without assuming equality in advance.",
        formulaTex: "$$\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta, \\qquad \\sec^2\\theta + \\operatorname{cosec}^2\\theta = \\sec^2\\theta\\operatorname{cosec}^2\\theta$$",
        goldenRule: "Convert to $\\sin\\theta, \\cos\\theta$ when stuck, watch the target denominator on RHS, and NEVER square both sides blindly!"
      },
      {
        num: 6,
        title: "Finding Unknown Trigonometric Ratios",
        chapterId: "ch-8-unknown-ratios",
        summary: "Given one numerical/algebraic ratio or a conjugate sum ($\\sec\\theta + \\tan\\theta = p$), determine all remaining 5 ratios accurately.",
        formulaTex: "$$\\sec\\theta + \\tan\\theta = p \\implies \\sec\\theta - \\tan\\theta = \\frac{1}{p}, \\quad \\sec\\theta = \\frac{p^2+1}{2p}, \\quad \\sin\\theta = \\frac{p^2-1}{p^2+1}$$",
        goldenRule: "Memorize the parametric Pythagorean triple $(a^2 - b^2,\\; 2ab,\\; a^2 + b^2)$ for instant algebraic triangle construction!"
      },
      {
        num: 7,
        title: "Heights and Distances",
        chapterId: "ch-15-heights-advanced",
        summary: "Multi-triangle surveyor blueprints: flagstaff on building, cloud reflection in a lake, moving vehicle timing, complementary angles, and 3D bearings.",
        formulaTex: "$$H_{\\text{cloud}} = h\\frac{\\tan\\beta + \\tan\\alpha}{\\tan\\beta - \\tan\\alpha}, \\qquad h_{\\text{complementary}} = \\sqrt{ab}, \\qquad h_{\\text{crossed poles}} = \\frac{ab}{a+b}$$",
        goldenRule: "For a lake reflection at height $h$ above water, the reflected image lies at $h + H_{\\text{cloud}}$ below the water surface, NOT $H_{\\text{cloud}}$!"
      }
    ]
  },

  /* ========================================================================
     STAGE III: ANALYTIC & MULTI-ANGLE TRIGONOMETRY (ITEMS 1–16)
     ======================================================================== */
  {
    id: "stage-3",
    badge: "Group III • Frost-Flame Tiger Spire (16 Analytic Topics)",
    animal: "animals/tiger.png",
    animalName: "Frost-Flame Tiger",
    color: "#fb7185",
    title: "Group III: Circular Functions, Multi-Angle & Wave Analytics (Topics 1–16)",
    subtitle: "Unit-Circle Functions of Any Angle, ASTC Quadrant Signs, Compound/Double/Triple/Half/Sum-Product Formulas, Trig Equations, General Solutions, Wave Graphs & Periodicity.",
    items: [
      {
        num: 1,
        title: "Angles and Their Measurement",
        chapterId: "ch-2-angles",
        summary: "Arbitrary positive/negative revolutions $\\theta \\in (-\\infty, \\infty)$, polygon interior angles $\\frac{(n-2)\\pi}{n}$, and clock-hand relative angular speed ($5.5^\\circ/\\text{min}$).",
        formulaTex: "$$\\theta\\text{ (rad)} = \\frac{\\pi}{180}\\cdot\\theta^\\circ, \\qquad l = r\\theta, \\qquad \\omega = \\frac{d\\theta}{dt}$$",
        goldenRule: "$1\\text{ rad} \\approx 57^\\circ 17' 45''$; keep $\\pi$ symbolic ($\\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}$) in exact analytic work."
      },
      {
        num: 2,
        title: "Trigonometric Functions",
        chapterId: "ch-16-trig-functions",
        summary: "Unit Circle wrapping $t \\mapsto P(\\cos t, \\sin t)$ on $x^2 + y^2 = 1$, turning geometric ratios into real-valued functions with even/odd symmetry.",
        formulaTex: "$$\\cos(-t) = \\cos t\\;(\\text{Even}), \\qquad \\sin(-t) = -\\sin t,\\; \\tan(-t) = -\\tan t\\;(\\text{Odd})$$",
        goldenRule: "Only $\\cos t$ and $\\sec t$ absorb a minus sign; the other four functions pull the minus sign out front!"
      },
      {
        num: 3,
        title: "Trigonometric Functions of Any Angle",
        chapterId: "ch-17-any-angle",
        summary: "For any point $(x, y) \\neq (0, 0)$ at radius $r = \\sqrt{x^2 + y^2} > 0$, plus the $n \\cdot 90^\\circ \\pm \\theta$ Allied-Angle Reduction Engine.",
        formulaTex: "$$\\sin\\theta = \\frac{y}{r},\\; \\cos\\theta = \\frac{x}{r},\\; \\tan\\theta = \\frac{y}{x}; \\qquad \\operatorname{trig}(n\\cdot 90^\\circ\\pm\\theta) = \\pm\\begin{cases}\\operatorname{trig}\\theta&(n\\text{ even})\\\\\\operatorname{co-trig}\\theta&(n\\text{ odd})\\end{cases}$$",
        goldenRule: "Decide the $\\pm$ sign using the **ORIGINAL function** in the quadrant of $(n\\cdot 90^\\circ \\pm \\theta)$!"
      },
      {
        num: 4,
        title: "Signs of Trigonometric Ratios in Quadrants",
        chapterId: "ch-18-quadrant-signs",
        summary: "Determined by the signs of $(x, y)$ across the four quadrants since $r > 0$ always (**ASTC — All Silver Tea Cups**).",
        formulaTex: "$$\\text{Q-I: All }+, \\quad \\text{Q-II: }\\sin,\\operatorname{cosec}+, \\quad \\text{Q-III: }\\tan,\\cot+, \\quad \\text{Q-IV: }\\cos,\\sec+$$",
        goldenRule: "Knowing two sign facts (e.g. $\\sin\\theta < 0$ and $\\tan\\theta > 0$) pins $\\theta$ to a **unique quadrant** (here Q-III)!"
      },
      {
        num: 5,
        title: "Standard Angles and Their Ratios",
        chapterId: "ch-6-standard-angles",
        summary: "Full $360^\\circ$ unit-circle values including quadrantal angles ($0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ$) and special surds ($15^\\circ, 18^\\circ, 36^\\circ, 75^\\circ$).",
        formulaTex: "$$\\sin 15^\\circ = \\frac{\\sqrt{6}-\\sqrt{2}}{4}, \\quad \\cos 15^\\circ = \\frac{\\sqrt{6}+\\sqrt{2}}{4}, \\quad \\sin 18^\\circ = \\frac{\\sqrt{5}-1}{4}, \\quad \\cos 36^\\circ = \\frac{\\sqrt{5}+1}{4}$$",
        goldenRule: "At $180^\\circ$: $(\\cos, \\sin) = (-1, 0)$; at $270^\\circ$: $(\\cos, \\sin) = (0, -1)$."
      },
      {
        num: 6,
        title: "Fundamental Trigonometric Identities",
        chapterId: "ch-11-identities",
        summary: "Pythagorean, Quotient, and Reciprocal identities valid across all four quadrants wherever denominators are non-zero.",
        formulaTex: "$$\\cos\\theta = \\pm\\sqrt{1 - \\sin^2\\theta}, \\qquad \\sec\\theta = \\pm\\sqrt{1 + \\tan^2\\theta} \\quad(\\text{sign fixed by ASTC!})$$",
        goldenRule: "In multi-quadrant problems, NEVER omit the quadrant check when taking square roots!"
      },
      {
        num: 7,
        title: "Compound-Angle Formulas",
        chapterId: "ch-22-compound-angles",
        summary: "Exact expansion of $\\sin(A \\pm B)$, $\\cos(A \\pm B)$, and $\\tan(A \\pm B)$ proved via unit-circle chord geometry.",
        formulaTex: "$$\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B, \\quad \\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B, \\quad \\tan(A\\pm B)=\\frac{\\tan A\\pm\\tan B}{1\\mp\\tan A\\tan B}$$",
        goldenRule: "Bonus gem: $\\sin(A+B)\\sin(A-B) = \\sin^2 A - \\sin^2 B$ and $\\cos(A+B)\\cos(A-B) = \\cos^2 A - \\sin^2 B$!"
      },
      {
        num: 8,
        title: "Double-Angle Formulas",
        chapterId: "ch-23-double-angle",
        summary: "Setting $B = A$ yields $2A$ expansions and the indispensable Power-Reduction identities used throughout Calculus.",
        formulaTex: "$$\\sin 2A = 2\\sin A\\cos A = \\frac{2\\tan A}{1+\\tan^2 A}, \\qquad \\cos 2A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A = \\frac{1-\\tan^2 A}{1+\\tan^2 A}$$",
        goldenRule: "Memorize the '$1$-Killers': $1 + \\cos 2A = 2\\cos^2 A$ and $1 - \\cos 2A = 2\\sin^2 A$!"
      },
      {
        num: 9,
        title: "Triple-Angle Formulas",
        chapterId: "ch-24-triple-angle",
        summary: "Cubic polynomials for $\\sin 3A, \\cos 3A$, rational $\\tan 3A$, and the symmetric $60^\\circ \\pm A$ product cascades.",
        formulaTex: "$$\\sin 3A = 3\\sin A - 4\\sin^3 A, \\quad \\cos 3A = 4\\cos^3 A - 3\\cos A, \\quad \\tan 3A = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}$$",
        goldenRule: "$\\sin A\\sin(60^\\circ-A)\\sin(60^\\circ+A) = \\frac{1}{4}\\sin 3A$ and $\\cos A\\cos(60^\\circ-A)\\cos(60^\\circ+A) = \\frac{1}{4}\\cos 3A$!"
      },
      {
        num: 10,
        title: "Half-Angle Formulas",
        chapterId: "ch-25-half-angle",
        summary: "Replacing $2A \\to \\theta$ expresses $\\frac{\\theta}{2}$ in terms of $\\theta$, plus the universal Weierstrass substitution $t = \\tan\\frac{\\theta}{2}$.",
        formulaTex: "$$\\sin\\frac{\\theta}{2}=\\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}, \\quad \\tan\\frac{\\theta}{2}=\\frac{1-\\cos\\theta}{\\sin\\theta}=\\frac{\\sin\\theta}{1+\\cos\\theta}, \\quad \\sin\\theta=\\frac{2t}{1+t^2},\\; \\cos\\theta=\\frac{1-t^2}{1+t^2}$$",
        goldenRule: "The rational forms $\\tan\\frac{\\theta}{2} = \\frac{1-\\cos\\theta}{\\sin\\theta}$ have **NO $\\pm$ ambiguity**—always prefer them over square roots!"
      },
      {
        num: 11,
        title: "Sum-to-Product Formulas",
        chapterId: "ch-26-sum-to-product",
        summary: "Converts sums/differences of $\\sin$ or $\\cos$ into factorized products—essential for solving equations $= 0$ and cancelling fractions.",
        formulaTex: "$$\\sin C+\\sin D=2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}, \\qquad \\cos C-\\cos D=-2\\sin\\frac{C+D}{2}\\sin\\frac{C-D}{2}$$",
        goldenRule: "Watch the **minus sign** in $\\cos C - \\cos D = -2\\sin\\frac{C+D}{2}\\sin\\frac{C-D}{2} = 2\\sin\\frac{C+D}{2}\\sin\\frac{D-C}{2}$!"
      },
      {
        num: 12,
        title: "Product-to-Sum Formulas",
        chapterId: "ch-27-product-to-sum",
        summary: "Splits products of waves into linear sums of frequencies $(A+B)$ and $(A-B)$ for integration and Fourier analysis.",
        formulaTex: "$$2\\sin A\\cos B=\\sin(A+B)+\\sin(A-B), \\quad 2\\cos A\\cos B=\\cos(A+B)+\\cos(A-B), \\quad 2\\sin A\\sin B=\\cos(A-B)-\\cos(A+B)$$",
        goldenRule: "Doubling cosine cascade: $\\cos\\theta\\cos 2\\theta\\cos 4\\theta\\cdots\\cos(2^{n-1}\\theta) = \\frac{\\sin(2^n\\theta)}{2^n\\sin\\theta}$!"
      },
      {
        num: 13,
        title: "Trigonometric Equations",
        chapterId: "ch-28-trig-equations",
        summary: "Finding Principal Solutions in $[0, 2\\pi)$ via factoring, quadratic substitution, homogeneous $\\div\\cos^2 x$, and $R\\cos(x-\\alpha)$.",
        formulaTex: "$$a\\cos x + b\\sin x = c \\iff \\cos(x - \\alpha) = \\frac{c}{\\sqrt{a^2+b^2}} \\quad(\\text{real iff } |c| \\le \\sqrt{a^2+b^2})$$",
        goldenRule: "**NEVER divide both sides by $\\sin x$ or $\\cos x$**—factor it out so you don't erase valid root families!"
      },
      {
        num: 14,
        title: "General Solutions",
        chapterId: "ch-29-general-solutions",
        summary: "Compact integer-indexed formulas ($n \\in \\mathbb{Z}$) generating every root along the infinite real line.",
        formulaTex: "$$\\sin\\theta=\\sin\\alpha \\Rightarrow n\\pi+(-1)^n\\alpha; \\quad \\cos\\theta=\\cos\\alpha \\Rightarrow 2n\\pi\\pm\\alpha; \\quad \\tan\\theta=\\tan\\alpha \\Rightarrow n\\pi+\\alpha$$",
        goldenRule: "All three squared equations ($\\sin^2\\theta = \\sin^2\\alpha$, $\\cos^2\\theta = \\cos^2\\alpha$, $\\tan^2\\theta = \\tan^2\\alpha$) share ONE formula: $\\theta = n\\pi \\pm \\alpha$!"
      },
      {
        num: 15,
        title: "Graphs of Trigonometric Functions",
        chapterId: "ch-21-trig-graphs",
        summary: "Sinusoidal waves, vertical asymptotes of $\\tan, \\cot, \\sec, \\operatorname{cosec}$, and the 4-parameter wave transformation.",
        formulaTex: "$$y = A\\sin(Bx - C) + D \\implies \\text{Amp}=|A|,\\; T=\\frac{2\\pi}{|B|},\\; \\text{Phase}=\\frac{C}{B},\\; \\text{Midline}=D$$",
        goldenRule: "Factor $B$ out of $(Bx - C) = B(x - \\frac{C}{B})$ first: the horizontal phase shift is $\\frac{C}{B}$, NOT $C$!"
      },
      {
        num: 16,
        title: "Periodicity of Trigonometric Functions",
        chapterId: "ch-20-periodicity",
        summary: "Smallest positive $T > 0$ with $f(x+T) = f(x)$ for all $x \\in \\text{Dom}(f)$, plus scaling, power/modulus halving, and LCM rules.",
        formulaTex: "$$T(\\sin,\\cos,\\sec,\\operatorname{cosec})=2\\pi,\\quad T(\\tan,\\cot)=\\pi,\\quad T(|\\sin x|)=T(\\sin^2 x)=\\pi,\\quad T(|\\sin x|+|\\cos x|)=\\frac{\\pi}{2}$$",
        goldenRule: "$\\operatorname{LCM}\\!\\left(\\frac{p_1}{q_1}, \\frac{p_2}{q_2}\\right) = \\frac{\\operatorname{LCM}(p_1, p_2)}{\\operatorname{HCF}(q_1, q_2)}$, then check whether algebraic symmetry halves it!"
      }
    ]
  },

  /* ========================================================================
     STAGE IV: INVERSE TRIG, ADVANCED PROOFS & EQUATIONS (ITEMS 1–9)
     ======================================================================== */
  {
    id: "stage-4",
    badge: "Group IV • Apex Shadow Wolf Sanctum (9 Advanced Topics)",
    animal: "animals/wolf.png",
    animalName: "Apex Shadow Wolf",
    color: "#a855f7",
    title: "Group IV: Inverse Trigonometry & Equation Synthesis (Topics 1–9)",
    subtitle: "Inverse Bijectivity, Domain & Range, Principal Values, Properties of ITF, Canonical Radical Simplification, Range-Bounded Identity Proofs & General Equation Mastery.",
    items: [
      {
        num: 1,
        title: "Inverse Trigonometric Functions",
        chapterId: "ch-33-inverse-trig",
        summary: "Periodic trig functions fail the Horizontal Line Test on $\\mathbb{R}$; restricting each to a canonical monotonic branch creates a bijection whose graph reflects across $y = x$.",
        formulaTex: "$$y = \\sin^{-1}x \\iff x = \\sin y \\;\\left(y \\in \\left[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right]\\right); \\qquad \\lim_{x\\to\\pm\\infty}\\tan^{-1}x = \\pm\\frac{\\pi}{2}$$",
        goldenRule: "$\\sin^{-1}x = \\arcsin x$ is an **ANGLE**; $(\\sin x)^{-1} = \\operatorname{cosec} x$ is a **RECIPROCAL NUMBER**!"
      },
      {
        num: 2,
        title: "Domain and Range",
        chapterId: "ch-34-inverse-domain-range",
        summary: "Swapping $(x, y)$ swaps Domain $\\leftrightarrow$ Principal Range across all 6 inverse functions, enabling composite domain/extrema analysis.",
        formulaTex: "$$\\sin^{-1},\\cos^{-1}:[-1,1]\\to\\left[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right],[0,\\pi]; \\quad \\tan^{-1},\\cot^{-1}:\\mathbb{R}\\to\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right),(0,\\pi)$$",
        goldenRule: "$\\sec^{-1},\\operatorname{cosec}^{-1}$ require $|x| \\ge 1$; and $(\\sin^{-1}x)^2 + (\\cos^{-1}x)^2 \\in \\left[\\frac{\\pi^2}{8}, \\frac{5\\pi^2}{4}\\right]$!"
      },
      {
        num: 3,
        title: "Principal Values",
        chapterId: "ch-35-inverse-principal-values",
        summary: "The unique output angle inside the principal branch, governed by the Two-Family Negative Rule and sawtooth/triangle-wave folding of $f^{-1}(f(x))$.",
        formulaTex: "$$\\text{Family A (Odd): }\\sin^{-1}(-x)=-\\sin^{-1}x; \\qquad \\text{Family B ($\\pi$-Shift): }\\cos^{-1}(-x)=\\pi-\\cos^{-1}x$$",
        goldenRule: "NEVER write $\\cos^{-1}(-\\frac{1}{2}) = -\\frac{\\pi}{3}$! Because $\\cos^{-1} \\in [0, \\pi]$, $\\cos^{-1}(-\\frac{1}{2}) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$!"
      },
      {
        num: 4,
        title: "Properties of Inverse Trigonometric Functions",
        chapterId: "ch-36-inverse-properties",
        summary: "Co-function $\\frac{\\pi}{2}$ sums, reciprocal conversions, piecewise $\\tan^{-1}x + \\tan^{-1}y$ & $2\\tan^{-1}x$ branch rules, and telescoping $\\sum \\tan^{-1}$ sums.",
        formulaTex: "$$\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}, \\qquad \\tan^{-1}x + \\tan^{-1}y = \\tan^{-1}\\!\\left(\\frac{x+y}{1-xy}\\right) + \\begin{cases}0&(xy<1)\\\\\\pi&(x,y>0,\\,xy>1)\\end{cases}$$",
        goldenRule: "For $x < 0$, $\\cot^{-1}\\!\\left(\\frac{1}{x}\\right) = \\pi + \\tan^{-1}x$ because $\\cot^{-1} \\in (0, \\pi)$ while $\\tan^{-1} \\in (-\\frac{\\pi}{2}, 0)$!"
      },
      {
        num: 5,
        title: "Trigonometric Identities",
        chapterId: "ch-37-inverse-identities-equations",
        summary: "Harmonic $R\\cos(\\theta-\\alpha)$, triangle $A+B+C=\\pi$ laws, and 3-variable conditional inverse trigonometric identities.",
        formulaTex: "$$\\tan^{-1}x+\\tan^{-1}y+\\tan^{-1}z=\\pi \\Rightarrow x+y+z=xyz; \\quad \\cos^{-1}x+\\cos^{-1}y+\\cos^{-1}z=\\pi \\Rightarrow x^2+y^2+z^2+2xyz=1$$",
        goldenRule: "If $\\sin^{-1}x + \\sin^{-1}y + \\sin^{-1}z = \\frac{3\\pi}{2}$, each term MUST hit its upper bound $\\frac{\\pi}{2} \\implies x = y = z = 1$!"
      },
      {
        num: 6,
        title: "Simplification of Trigonometric Expressions",
        chapterId: "ch-38-simplification-advanced",
        summary: "Multi-angle rational reductions, quadrant-aware $\\sqrt{1 \\pm \\sin 2x} = |\\cos x \\pm \\sin x|$, and the 5 canonical substitutions for inverse radicals.",
        formulaTex: "$$\\sqrt{a^2-x^2}\\to a\\sin\\theta, \\quad \\sqrt{a^2+x^2}\\to a\\tan\\theta, \\quad \\tan^{-1}\\!\\left(\\frac{\\sqrt{1+x^2}-1}{x}\\right)=\\frac{1}{2}\\tan^{-1}x$$",
        goldenRule: "After substituting $x = a\\tan\\theta$, ALWAYS check that the resulting multiple angle ($2\\theta$ or $3\\theta$) lies inside the principal branch before cancelling!"
      },
      {
        num: 7,
        title: "Proof of Trigonometric Identities",
        chapterId: "ch-39-proof-identities-advanced",
        summary: "Split-angle proofs ($3x = 2x + x$), telescoping $\\operatorname{cosec}2^k x$ sums, Machin's $\\frac{\\pi}{4}$ formula, and 4-step Range-Bounded Inverse Proofs.",
        formulaTex: "$$\\tan 3x - \\tan 2x - \\tan x = \\tan 3x\\tan 2x\\tan x, \\qquad 4\\tan^{-1}\\frac{1}{5} - \\tan^{-1}\\frac{1}{239} = \\frac{\\pi}{4}$$",
        goldenRule: "To prove an inverse identity $\\alpha + \\beta = \\gamma$, prove BOTH $\\cos(\\alpha+\\beta) = \\cos\\gamma$ AND $\\alpha+\\beta, \\gamma \\in [0, \\pi]$!"
      },
      {
        num: 8,
        title: "Trigonometric Equations",
        chapterId: "ch-31-solving-eq-identities",
        summary: "Solving non-trivial trig and inverse-trig equations via Weierstrass $t = \\tan\\frac{x}{2}$, symmetric $u = \\sin x \\pm \\cos x$, and inverse range checks.",
        formulaTex: "$$(a+c)t^2 - 2bt + (c-a) = 0 \\;(t=\\tan\\tfrac{x}{2}); \\qquad u = \\sin x + \\cos x \\implies \\sin 2x = u^2 - 1$$",
        goldenRule: "In Weierstrass $t = \\tan\\frac{x}{2}$, ALWAYS test $x = (2n+1)\\pi$ separately; in inverse equations, plug every algebraic root back into the original equation!"
      },
      {
        num: 9,
        title: "General Solutions of Trigonometric Equations",
        chapterId: "ch-29-general-solutions",
        summary: "Complete general-solution families ($n \\in \\mathbb{Z}$), non-redundancy merging, domain exclusion of denominator zeros, and simultaneous quadrant equations.",
        formulaTex: "$$\\sin\\theta=\\sin\\alpha \\Rightarrow n\\pi+(-1)^n\\alpha, \\quad \\cos\\theta=\\cos\\alpha \\Rightarrow 2n\\pi\\pm\\alpha, \\quad \\tan\\theta=\\tan\\alpha \\Rightarrow n\\pi+\\alpha$$",
        goldenRule: "When both $\\sin\\theta = s_0$ and $\\cos\\theta = c_0$ are given simultaneously, find the SINGLE angle $\\alpha \\in [0, 2\\pi)$ matching both and write $\\theta = 2n\\pi + \\alpha$!"
      }
    ]
  }
];

/* ==========================================================================
   FINAL CAPSTONE CHAPTER (Ch 44 — Last Chapter on Quest Roadmap & Sidebar)
   ========================================================================== */
(function () {
  const buildStageTablesHtml = () => {
    return window.TRIG_SUMMARY_BLOCKS.map((blk, bIdx) => {
      const rows = blk.items
        .map(
          (it) => `
          <tr>
            <td><strong>${it.num}. ${it.title}</strong></td>
            <td>${it.summary}<div style="margin-top:0.35rem;">${it.formulaTex}</div></td>
            <td>${it.goldenRule}</td>
          </tr>`
        )
        .join("");
      return `
        <h3>44.${bIdx + 1} ${blk.title}</h3>
        <p>${blk.subtitle}</p>
        <div class="trig-table-wrap">
          <table class="trig-table">
            <thead>
              <tr>
                <th style="min-width:190px;">Syllabus Topic</th>
                <th>Core Concept &amp; Master Formula</th>
                <th style="min-width:210px;">Golden Exam Rule</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }).join("");
  };

  window.TRIG_GRAND_SUMMARY_CHAPTER = {
    id: "ch-44-grand-summary",
    grade: "Ch 44 • Complete Master Summary",
    tierId: "tier-7",
    tierColor: "#f59e0b",
    title: "44. Grandmaster Synthesis: All 4 Trigonometry Groups (Complete Revision)",
    subtitle: "Your complete end-of-course revision synthesis across Group I (Right-Triangle Foundations), Group II (Identities, Proofs & Heights), Group III (Circular, Multi-Angle & Wave Analytics), and Group IV (Inverse Trig & Equation Synthesis).",
    prerequisites: ["Chapters 1–43 (Complete TrigVerse Journey)"],
    tags: ["Complete 4-Stage Summary", "41 Syllabus Pillars", "Master Revision Sheet", "Exam Trap Checklist"],
    sandboxType: "inverseMasterLab",
    intuition: `Welcome to the **Final Summit of TrigVerse**! Whether you are revising the night before a board exam, preparing for university entrance tests, or consolidating everything from **Introduction to Trigonometry** right through **Inverse Trigonometric Functions, Simplification, Proof of Identities, and General Solutions**, seeing all **4 progressive stages** side-by-side locks the entire architecture of Trigonometry into permanent memory!`,
    theoryHtml: buildStageTablesHtml(),
    pitfalls: [
      "**Top 5 Universal Exam Traps Across All 4 Stages:** (1) Using degrees instead of radians in $l = r\\theta$ or calculus; (2) Dividing an equation by $\\sin x$ or $\\cos x$ instead of factoring; (3) Writing $\\cos^{-1}(-x) = -\\cos^{-1}x$ instead of $\\pi - \\cos^{-1}x$; (4) Dropping $|\\cdot|$ when simplifying $\\sqrt{1 - \\sin 2x} = |\\cos x - \\sin x|$; (5) Proving an inverse identity without bounding the angle sum inside the principal branch!"
    ],
    examples: [
      {
        q: "Synthesis Example 1 (Stages I–II): If $\\sec\\theta + \\tan\\theta = 3$ ($\\theta$ acute), find $\\sin\\theta$ and $\\theta$'s complementary co-function value $\\cos(90^\\circ - \\theta)$.",
        sol: "By Stage II Pillar 6, $\\sec\\theta - \\tan\\theta = \\frac{1}{3}$. Adding gives $2\\sec\\theta = \\frac{10}{3} \\implies \\sec\\theta = \\frac{5}{3} \\implies \\cos\\theta = \\frac{3}{5} \\implies \\sin\\theta = \\frac{4}{5}$. By Stage II Pillar 2 (Complementary Angles), $\\cos(90^\\circ - \\theta) = \\sin\\theta = \\frac{4}{5}$!"
      },
      {
        q: "Synthesis Example 2 (Stages III–IV): Simplify $\\tan^{-1}\\!\\left(\\frac{\\sin x}{1 + \\cos x}\\right)$ for $x \\in (-\\pi, \\pi)$ and solve it equal to $\\frac{\\pi}{6}$.",
        sol: "By Stage III Pillar 10 (Half-Angle), $\\frac{\\sin x}{1 + \\cos x} = \\tan\\!\\left(\\frac{x}{2}\\right)$. Since $x \\in (-\\pi, \\pi) \\implies \\frac{x}{2} \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ (the exact principal range of $\\tan^{-1}$ by Stage IV Pillar 2!), $\\tan^{-1}(\\tan\\frac{x}{2}) = \\frac{x}{2}$. Setting $\\frac{x}{2} = \\frac{\\pi}{6}$ gives the unique root $x = \\frac{\\pi}{3}$!"
      }
    ],
    quiz: [
      {
        q: "Across all 6 inverse trigonometric functions, which three belong to **Family B** ($f^{-1}(-x) = \\pi - f^{-1}(x)$)?",
        options: [
          "$\\sin^{-1}x,\\; \\tan^{-1}x,\\; \\operatorname{cosec}^{-1}x$",
          "$\\cos^{-1}x,\\; \\cot^{-1}x,\\; \\sec^{-1}x$",
          "$\\sin^{-1}x,\\; \\cos^{-1}x,\\; \\tan^{-1}x$",
          "$\\tan^{-1}x,\\; \\cot^{-1}x,\\; \\sec^{-1}x$"
        ],
        answer: 1,
        explanation: "$\\cos^{-1}x$, $\\cot^{-1}x$, and $\\sec^{-1}x$ have principal ranges anchored on $[0, \\pi]$, so negative inputs reflect via $\\pi - \\alpha$!"
      },
      {
        q: "Which single general-solution formula solves $\\sin^2\\theta = \\sin^2\\alpha$, $\\cos^2\\theta = \\cos^2\\alpha$, AND $\\tan^2\\theta = \\tan^2\\alpha$ ($n \\in \\mathbb{Z}$)?",
        options: ["$\\theta = 2n\\pi \\pm \\alpha$", "$\\theta = n\\pi + (-1)^n\\alpha$", "$\\theta = n\\pi \\pm \\alpha$", "$\\theta = n\\pi + \\alpha$"],
        answer: 2,
        explanation: "Squaring removes sign differences across opposite quadrants, collapsing all three equations to $\\theta = n\\pi \\pm \\alpha$ ($n \\in \\mathbb{Z}$)."
      },
      {
        q: "For $x \\in (0, \\frac{\\pi}{2})$, what does $\\frac{\\sin x + \\sin 2x}{1 + \\cos x + \\cos 2x}$ simplify to?",
        options: ["$\\sin x$", "$\\cos x$", "$\\tan x$", "$\\cot x$"],
        answer: 2,
        explanation: "Using $1 + \\cos 2x = 2\\cos^2 x$ and $\\sin 2x = 2\\sin x\\cos x$, $\\frac{\\sin x(1 + 2\\cos x)}{\\cos x(1 + 2\\cos x)} = \\tan x$."
      }
    ]
  };
})();
