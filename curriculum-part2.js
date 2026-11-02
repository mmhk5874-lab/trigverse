/* ==========================================================================
   TrigVerse Advanced Summit Curriculum (Ch 40 → Ch 43)
   + Complete 35-Chapter Searchable Master Formula Vault (Ch 1 → Ch 35)
   ========================================================================== */

window.TRIG_CH_11_TO_16 = [
  /* ========================================================================
     CHAPTER 33: EULER'S FORMULA, SERIES, HYPERBOLIC & SPHERICAL TRIG (CLASS 13–14)
     ======================================================================== */
  {
    id: "ch-14-euler-spherical",
    grade: "Ch 33",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "33. Euler's Formula, Taylor Series, Hyperbolic & Spherical Trig",
    subtitle: "BS Years 1–2: Maclaurin expansions, $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, De Moivre's Theorem, $\\sinh/\\cosh$, and GPS Spherical Trigonometry.",
    prerequisites: ["Chapter 32: Calculus", "Complex Numbers $i^2 = -1$"],
    tags: ["e^(iθ) = cos θ + i sin θ", "Maclaurin Series", "De Moivre & Roots", "Spherical Law of Cosines"],
    sandboxType: "taylor",
    intuition: `Plug $z = i\\theta$ into the exponential power series $e^z = \\sum z^n/n!$ and watch algebra perform magic: even powers become $\\cos\\theta$ and odd powers become $i\\sin\\theta$, uniting exponentials and rotations into **Euler's Formula** $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$! Drop the $i$ to get **Hyperbolic Trig** ($x^2-y^2=1$), or step onto a curved globe of radius $R$ to unlock **Spherical Trigonometry** where $\\angle A + \\angle B + \\angle C > 180^\\circ$!`,
    theoryHtml: `
      <h3>33.1 Maclaurin Series, Euler's Formula & De Moivre's Theorem</h3>
      <div class="math-box">
        <div class="math-box-title">Power Series & Complex Trigonometry</div>
        $$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots, \\qquad \\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$
        $$e^{i\\theta} = \\cos\\theta + i\\sin\\theta, \\qquad \\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2}, \\qquad \\sin\\theta = \\frac{e^{i\\theta}-e^{-i\\theta}}{2i}$$
        $$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta), \\qquad z_k = e^{i2\\pi k/n}\\;(k=0,\\dots,n-1)$$
      </div>

      <h3>33.2 Hyperbolic Trig ($x^2 - y^2 = 1$) & Spherical Trig on Curved Worlds</h3>
      <div class="math-box">
        <div class="math-box-title">Hyperbolic & Spherical Laws</div>
        $$\\cosh x = \\frac{e^x+e^{-x}}{2}, \\quad \\sinh x = \\frac{e^x-e^{-x}}{2}, \\quad \\cosh^2 x - \\sinh^2 x = 1$$
        $$\\textbf{Spherical Law of Cosines:}\\quad \\cos c = \\cos a\\cos b + \\sin a\\sin b\\cos C$$
        $$\\textbf{Girard's Spherical Area:}\\quad \\text{Area} = R^2(A + B + C - \\pi)$$
      </div>
    `,
    pitfalls: [
      "Writing $\\cosh^2 x + \\sinh^2 x = 1$: No! $\\cosh^2 x - \\sinh^2 x = 1$, whereas $\\cosh^2 x + \\sinh^2 x = \\cosh(2x)$."
    ],
    examples: [
      {
        q: "Example 1: Compute $(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2})^9$ using De Moivre's Theorem.",
        sol: "Write in polar form: $\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3} = e^{i\\pi/3}$. Raising to power $9$: $e^{i3\\pi} = \\cos 3\\pi + i\\sin 3\\pi = -1$."
      },
      {
        q: "Example 2: Find the area of a tri-rectangular spherical triangle ($A=B=C=90^\\circ$) on Earth of radius $R$.",
        sol: "$A+B+C = \\frac{3\\pi}{2}$, so $\\text{Area} = R^2(\\frac{3\\pi}{2} - \\pi) = \\frac{\\pi}{2}R^2$ (one-eighth of $4\\pi R^2$)."
      }
    ],
    quiz: [
      {
        q: "Evaluate $e^{i\\pi} + 1$.",
        options: ["$2$", "$0$", "$1 + i$", "$-2$"],
        answer: 1,
        explanation: "$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1$, so $e^{i\\pi} + 1 = 0$."
      },
      {
        q: "What is the cubic Taylor approximation of $\\sin x$ near $x = 0$?",
        options: ["$x - \\frac{x^3}{6}$", "$x + \\frac{x^3}{6}$", "$1 - \\frac{x^2}{2}$", "$x - \\frac{x^3}{3}$"],
        answer: 0,
        explanation: "$\\sin x \\approx x - \\frac{x^3}{3!} = x - \\frac{x^3}{6}$."
      },
      {
        q: "When $C = 90^\\circ$ on a sphere, $\\cos c = \\cos a\\cos b + \\sin a\\sin b\\cos C$ simplifies to:",
        options: ["$c^2 = a^2 + b^2$", "$\\cos c = \\cos a\\cos b$", "$\\sin c = \\sin a\\sin b$", "$\\cos c = \\cos(a+b)$"],
        answer: 1,
        explanation: "Since $\\cos 90^\\circ = 0$, the Spherical Pythagorean theorem is $\\cos c = \\cos a\\cos b$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 34: HARMONIC ODES & FOURIER SERIES (CLASS 15 / BS YEAR 3)
     ======================================================================== */
  {
    id: "ch-15-fourier",
    grade: "Ch 42 • Harmonic Analysis",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "34. Orthogonal Harmonics, ODEs & Fourier Analysis",
    subtitle: "Harmonic Decomposition: Decompose ANY periodic waveform—music, ECG, Wi-Fi, images—into orthogonal pure sines and cosines.",
    prerequisites: ["Chapters 32–33: Integration & Euler's Formula"],
    tags: ["L² Orthogonality", "Harmonic Oscillator", "Fourier Series", "Parseval & FFT"],
    sandboxType: "fourier",
    intuition: `Just as perpendicular axes $(\\hat{i}, \\hat{j}, \\hat{k})$ decompose 3D vectors via dot products, the waves $1, \\cos nx, \\sin nx$ are **mutually orthogonal in $L^2[-\\pi,\\pi]$**! Taking an integral dot product extracts exact harmonic amplitudes—turning jagged square and sawtooth waves into pure trigonometric symphonies.`,
    theoryHtml: `
      <h3>34.1 Orthogonality & Fourier Coefficient Integrals</h3>
      <div class="math-box">
        <div class="math-box-title">Orthogonal Basis & Fourier Series</div>
        $$\\int_{-\\pi}^{\\pi}\\cos(mx)\\cos(nx)\\,dx = \\pi\\delta_{mn}, \\qquad \\int_{-\\pi}^{\\pi}\\sin(mx)\\sin(nx)\\,dx = \\pi\\delta_{mn}, \\qquad \\int_{-\\pi}^{\\pi}\\sin(mx)\\cos(nx)\\,dx = 0$$
        $$f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}(a_n\\cos nx + b_n\\sin nx), \\quad a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}f(x)\\cos nx\\,dx, \\quad b_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}f(x)\\sin nx\\,dx$$
        $$\\textbf{Parseval's Identity:}\\quad \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|f(x)|^2\\,dx = \\frac{a_0^2}{4} + \\frac{1}{2}\\sum_{n=1}^{\\infty}(a_n^2 + b_n^2)$$
      </div>
      <p>For the square wave $f(x)=\\operatorname{sgn}(x)$: $f(x) = \\frac{4}{\\pi}\\sum_{k=0}^{\\infty}\\frac{\\sin((2k+1)x)}{2k+1}$.</p>
    `,
    pitfalls: [
      "Computing $a_n$ for an odd function: Odd symmetry ($f(-x)=-f(x)$) guarantees $a_n = 0$ for all $n$; even symmetry guarantees $b_n = 0$!"
    ],
    examples: [
      {
        q: "Example 1: Plug $x = \\frac{\\pi}{2}$ into the square-wave series $\\frac{4}{\\pi}(\\sin x + \\frac{\\sin 3x}{3} + \\frac{\\sin 5x}{5} + \\cdots) = 1$.",
        sol: "We get $1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots = \\frac{\\pi}{4}$ (Leibniz's series for $\\pi$!)."
      }
    ],
    quiz: [
      {
        q: "What is $\\int_{-\\pi}^{\\pi}\\cos(4x)\\cos(9x)\\,dx$?",
        options: ["$\\pi$", "$2\\pi$", "$0$", "$\\frac{\\pi}{36}$"],
        answer: 2,
        explanation: "Since $4 \\neq 9$, orthogonality makes the integral $0$."
      },
      {
        q: "For an even $2\\pi$-periodic function $f(-x) = f(x)$, all sine coefficients $b_n$ equal:",
        options: ["$1$", "$0$", "$\\frac{2}{\\pi}$", "$a_n$"],
        answer: 1,
        explanation: "Even $\\times$ Odd $=$ Odd, which integrates to $0$ over $[-\\pi, \\pi]$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 35: COMPLEX ANALYTIC TRIG, INFINITE PRODUCTS & LIE GROUPS (CLASS 16)
     ======================================================================== */
  {
    id: "ch-16-complex-lie",
    grade: "Ch 43 • Complex & Lie Theory",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "35. Complex Analytic Trig, Infinite Products & Lie Groups",
    subtitle: "Analytic Summit: $\\sin z$ on $\\mathbb{C}$, Euler–Weierstrass Infinite Product, Basel Problem $\\zeta(2)=\\frac{\\pi^2}{6}$, Chebyshev Polynomials & $SO(2)$ Lie Theory.",
    prerequisites: ["Chapters 33–34: Complex Analysis, Linear Algebra & Fourier"],
    tags: ["Entire Functions on ℂ", "Euler Sine Product", "Gamma Reflection", "Lie Group SO(2)"],
    sandboxType: "rootsUnity",
    intuition: `At the summit of higher mathematics, trigonometry unifies every major branch of math: in Complex Analysis $|\\sin(x+iy)|^2 = \\sin^2 x + \\sinh^2 y$ grows unboundedly; factoring $\\frac{\\sin(\\pi z)}{\\pi z}$ over its integer roots solves $\\sum \\frac{1}{n^2} = \\frac{\\pi^2}{6}$; and exponentiating skew-symmetric matrices $\\exp(\\theta J)$ generates continuous rotation Lie groups $SO(n)$!`,
    theoryHtml: `
      <h3>35.1 Complex Modulus, Weierstrass Product, Gamma Reflection & $SO(2)$</h3>
      <div class="math-box">
        <div class="math-box-title">Higher Analytic Capstone Theorems</div>
        $$|\\sin(x+iy)|^2 = \\sin^2 x + \\sinh^2 y, \\qquad \\sin z = 0 \\iff z = n\\pi\\;(n \\in \\mathbb{Z})$$
        $$\\frac{\\sin(\\pi z)}{\\pi z} = \\prod_{n=1}^{\\infty}\\left(1 - \\frac{z^2}{n^2}\\right) \\implies \\sum_{n=1}^{\\infty}\\frac{1}{n^2} = \\frac{\\pi^2}{6}, \\qquad \\Gamma(z)\\Gamma(1-z) = \\frac{\\pi}{\\sin(\\pi z)}$$
        $$T_n(\\cos\\theta) = \\cos(n\\theta), \\qquad \\exp\\!\\begin{pmatrix}0 & -\\theta\\\\ \\theta & 0\\end{pmatrix} = \\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix} \\in SO(2)$$
      </div>
    `,
    pitfalls: [
      "Assuming $|\\sin z| \\le 1$ for complex $z \\in \\mathbb{C}$: Off the real axis, $|\\sin(iy)| = |\\sinh y| \\to \\infty$ as $|y| \\to \\infty$!"
    ],
    examples: [
      {
        q: "Example 1: Solve $\\cos z = 2$ in $\\mathbb{C}$.",
        sol: "$\\frac{e^{iz}+e^{-iz}}{2} = 2 \\implies e^{iz} = 2 \\pm \\sqrt{3} \\implies z = 2\\pi n \\mp i\\ln(2+\\sqrt{3}), \\; n \\in \\mathbb{Z}$."
      }
    ],
    quiz: [
      {
        q: "By comparing the $z^2$ term of $\\frac{\\sin(\\pi z)}{\\pi z} = \\prod_{n=1}^{\\infty}(1 - \\frac{z^2}{n^2})$, what does $\\sum_{n=1}^{\\infty}\\frac{1}{n^2}$ equal?",
        options: ["$\\frac{\\pi}{4}$", "$\\frac{\\pi^2}{6}$", "$\\frac{\\pi^2}{8}$", "$\\frac{\\pi^4}{90}$"],
        answer: 1,
        explanation: "In $1 - \\frac{(\\pi z)^2}{3!} + \\cdots$, the coefficient of $-z^2$ is $\\frac{\\pi^2}{6}$."
      },
      {
        q: "What is $\\det\\!\\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}$?",
        options: ["$0$", "$1$", "$-1$", "$\\theta$"],
        answer: 1,
        explanation: "$\\cos^2\\theta - (-\\sin^2\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$, proving it belongs to $SO(2)$."
      }
    ]
  }
];

/* ==========================================================================
   Expanded Searchable Master Formula Vault (All 35 Chapters: Ch 1 → Ch 35)
   ========================================================================== */
window.TRIG_FORMULA_VAULT = [
  { grade: "Ch 1 • Angle Genesis", category: "Intro & Pythagoras", title: "Pythagoras' Theorem & Right Triangle Sum", tex: "$$P^2 + B^2 = H^2, \\qquad \\angle A + \\angle C = 90^\\circ \\;(\\text{when } \\angle B = 90^\\circ)$$" },
  { grade: "Ch 2 • Angle Genesis", category: "Angle Measurement", title: "DMS System & Coterminal Angles", tex: "$$1^\\circ = 60',\\; 1' = 60'', \\qquad \\theta_{\\text{coterm}} = \\theta + 360^\\circ k \\;(k \\in \\mathbb{Z})$$" },
  { grade: "Ch 3 • Angle Genesis", category: "Degree & Radian", title: "Degree–Radian Conversion, Arc & Sector", tex: "$$\\pi\\text{ rad} = 180^\\circ, \\qquad l = r\\theta, \\qquad A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}lr, \\qquad v = r\\omega$$" },
  { grade: "Ch 4 • Ratio Forge", category: "Primary Ratios", title: "SOH-CAH-TOA & Quotient Identity", tex: "$$\\sin\\theta = \\frac{O}{H}, \\quad \\cos\\theta = \\frac{A}{H}, \\quad \\tan\\theta = \\frac{O}{A} = \\frac{\\sin\\theta}{\\cos\\theta}$$" },
  { grade: "Ch 5 • Ratio Forge", category: "Reciprocal Ratios", title: "Cosecant, Secant & Cotangent", tex: "$$\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{H}{O}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{H}{A}, \\quad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{A}{O}$$" },
  { grade: "Ch 6 • Ratio Forge", category: "Standard Angles", title: "Exact Standard Sine & Cosine Pattern", tex: "$$\\sin(0^\\circ,30^\\circ,45^\\circ,60^\\circ,90^\\circ) = \\left(0, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, 1\\right)$$" },
  { grade: "Ch 7 • Ratio Forge", category: "Complementary Angles", title: "Co-Function Laws & Triangle Half-Sum", tex: "$$\\sin(90^\\circ-\\theta)=\\cos\\theta,\\; \\tan(90^\\circ-\\theta)=\\cot\\theta,\\; \\sin\\!\\left(\\frac{B+C}{2}\\right)=\\cos\\!\\left(\\frac{A}{2}\\right)$$" },
  { grade: "Ch 8 • Ratio Forge", category: "Unknown Ratios", title: "Conjugate Sum Trick & Algebraic Triples", tex: "$$\\sec\\theta+\\tan\\theta=p \\implies \\sec\\theta=\\frac{p^2+1}{2p},\\; \\sin\\theta=\\frac{p^2-1}{p^2+1}; \\quad (a^2-b^2)^2+(2ab)^2=(a^2+b^2)^2$$" },
  { grade: "Ch 9 • Identity Citadel", category: "Unknown Sides", title: "Side-Component Formulas", tex: "$$O = H\\sin\\theta, \\quad A = H\\cos\\theta, \\quad O = A\\tan\\theta, \\quad H = \\frac{O}{\\sin\\theta} = \\frac{A}{\\cos\\theta}$$" },
  { grade: "Ch 10 • Identity Citadel", category: "Unknown Angles", title: "Inverse Angle Finders", tex: "$$\\theta = \\sin^{-1}\\!\\left(\\frac{O}{H}\\right) = \\cos^{-1}\\!\\left(\\frac{A}{H}\\right) = \\tan^{-1}\\!\\left(\\frac{O}{A}\\right)$$" },
  { grade: "Ch 11 • Identity Citadel", category: "Fundamental Identities", title: "Three Pythagorean Identities", tex: "$$\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta, \\quad 1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta$$" },
  { grade: "Ch 12 • Identity Citadel", category: "Simplification", title: "4th & 6th Power Reductions", tex: "$$\\sin^4\\theta+\\cos^4\\theta = 1-2\\sin^2\\theta\\cos^2\\theta, \\quad \\sin^6\\theta+\\cos^6\\theta = 1-3\\sin^2\\theta\\cos^2\\theta$$" },
  { grade: "Ch 13 • Identity Citadel", category: "Proving Identities", title: "Difference-Equals-Product & Sum-Equals-Product", tex: "$$\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta, \\qquad \\sec^2\\theta + \\operatorname{cosec}^2\\theta = \\sec^2\\theta\\operatorname{cosec}^2\\theta$$" },
  { grade: "Ch 14 • Identity Citadel", category: "Heights & Distances I", title: "Two-Point Tower & Lighthouse Shortcuts", tex: "$$d_{\\text{same side}} = h(\\cot\\alpha - \\cot\\beta), \\qquad D_{\\text{opposite sides}} = h(\\cot\\alpha + \\cot\\beta)$$" },
  { grade: "Ch 15 • Identity Citadel", category: "Heights & Distances II", title: "Cloud-in-Lake, Crossed Poles & Complementary Tower", tex: "$$H_{\\text{cloud}} = h\\frac{\\tan\\beta+\\tan\\alpha}{\\tan\\beta-\\tan\\alpha}, \\qquad h_{\\text{cross}} = \\frac{ab}{a+b}, \\qquad h_{\\text{comp}} = \\sqrt{ab}$$" },
  { grade: "Ch 16 • Wave Observatory", category: "Trigonometric Functions", title: "Unit Circle Wrapping & Parity Laws", tex: "$$(\\cos t, \\sin t) \\in x^2+y^2=1; \\quad \\cos(-t)=\\cos t,\\; \\sin(-t)=-\\sin t,\\; \\tan(-t)=-\\tan t$$" },
  { grade: "Ch 17 • Wave Observatory", category: "Any Angle & Allied", title: "Any-Angle Radius & Allied Angle Reductions", tex: "$$r=\\sqrt{x^2+y^2}:\\; \\sin\\theta=\\frac{y}{r},\\; \\cos\\theta=\\frac{x}{r}; \\quad \\operatorname{trig}(n\\cdot 90^\\circ\\pm\\theta)=\\pm\\begin{cases}\\operatorname{trig}\\theta&(n\\text{ even})\\\\\\operatorname{co-trig}\\theta&(n\\text{ odd})\\end{cases}$$" },
  { grade: "Ch 18 • Wave Observatory", category: "Quadrant Signs", title: "ASTC Quadrant Positivity Law", tex: "$$\\text{Q-I: All}+,\\quad \\text{Q-II: }\\sin/\\operatorname{cosec}+,\\quad \\text{Q-III: }\\tan/\\cot+,\\quad \\text{Q-IV: }\\cos/\\sec+$$" },
  { grade: "Ch 19 • Wave Observatory", category: "Domain & Range", title: "Linear Harmonic & Reciprocal-Square Bounds", tex: "$$a\\cos x + b\\sin x \\in [-\\sqrt{a^2+b^2},\\; \\sqrt{a^2+b^2}], \\qquad a^2\\tan^2 x + b^2\\cot^2 x \\ge 2ab$$" },
  { grade: "Ch 20 • Wave Observatory", category: "Periodicity", title: "Fundamental Periods & Power/Modulus Rules", tex: "$$T(\\sin,\\cos,\\sec,\\operatorname{cosec})=2\\pi,\\; T(\\tan,\\cot)=\\pi,\\; T(|\\sin x|)=\\pi,\\; T(|\\sin x|+|\\cos x|)=\\frac{\\pi}{2}$$" },
  { grade: "Ch 21 • Wave Observatory", category: "Trig Graphs", title: "4-Parameter Sinusoidal Transformation", tex: "$$y = A\\sin(Bx - C) + D \\implies \\text{Amp}=|A|,\\; T=\\frac{2\\pi}{|B|},\\; \\text{Phase Shift}=\\frac{C}{B},\\; \\text{Midline}=D$$" },
  { grade: "Ch 22 • Multi-Angle Arena", category: "Compound Angles", title: "Sum & Difference Formulas", tex: "$$\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B, \\quad \\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B, \\quad \\tan(A\\pm B)=\\frac{\\tan A\\pm\\tan B}{1\\mp\\tan A\\tan B}$$" },
  { grade: "Ch 23 • Multi-Angle Arena", category: "Double-Angle", title: "Double-Angle & Power-Reduction Laws", tex: "$$\\sin 2A = 2\\sin A\\cos A = \\frac{2\\tan A}{1+\\tan^2 A}, \\quad \\cos 2A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A = \\frac{1-\\tan^2 A}{1+\\tan^2 A}$$" },
  { grade: "Ch 24 • Multi-Angle Arena", category: "Triple-Angle", title: "Triple-Angle, 60°±A Product & Golden 18°", tex: "$$\\sin 3A=3\\sin A-4\\sin^3 A,\\; \\cos 3A=4\\cos^3 A-3\\cos A,\\; \\sin A\\sin(60^\\circ-A)\\sin(60^\\circ+A)=\\frac{\\sin 3A}{4},\\; \\sin 18^\\circ=\\frac{\\sqrt{5}-1}{4}$$" },
  { grade: "Ch 25 • Multi-Angle Arena", category: "Half-Angle", title: "Half-Angle & Weierstrass Substitution t = tan(θ/2)", tex: "$$\\tan\\frac{\\theta}{2}=\\frac{1-\\cos\\theta}{\\sin\\theta}=\\frac{\\sin\\theta}{1+\\cos\\theta}; \\qquad \\sin\\theta=\\frac{2t}{1+t^2},\\; \\cos\\theta=\\frac{1-t^2}{1+t^2}$$" },
  { grade: "Ch 26 • Multi-Angle Arena", category: "Sum-to-Product", title: "C & D Sum-to-Product Factoring", tex: "$$\\sin C+\\sin D=2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}, \\qquad \\cos C-\\cos D=-2\\sin\\frac{C+D}{2}\\sin\\frac{C-D}{2}$$" },
  { grade: "Ch 27 • Multi-Angle Arena", category: "Product-to-Sum", title: "Product-to-Sum & Doubling Cosine Cascade", tex: "$$2\\sin A\\cos B=\\sin(A+B)+\\sin(A-B),\\; 2\\sin A\\sin B=\\cos(A-B)-\\cos(A+B),\\; \\prod_{k=0}^{n-1}\\cos(2^k\\theta)=\\frac{\\sin(2^n\\theta)}{2^n\\sin\\theta}$$" },
  { grade: "Ch 28 • Multi-Angle Arena", category: "Transformations", title: "Harmonic R-Alpha & A+B+C = π Conditional Laws", tex: "$$a\\cos\\theta+b\\sin\\theta=R\\cos(\\theta-\\alpha); \\qquad A+B+C=\\pi \\implies \\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$$" },
  { grade: "Ch 29 • Multi-Angle Arena", category: "Trig Equations", title: "Principal Solutions & Auxiliary-Angle Solver", tex: "$$a\\cos x + b\\sin x = c \\iff \\cos(x - \\alpha) = \\frac{c}{\\sqrt{a^2+b^2}} \\quad (|c| \\le \\sqrt{a^2+b^2})$$" },
  { grade: "Ch 30 • Multi-Angle Arena", category: "General Solutions", title: "General Solutions & Squared Equations (n ∈ ℤ)", tex: "$$\\sin\\theta=\\sin\\alpha \\Rightarrow n\\pi+(-1)^n\\alpha; \\quad \\cos\\theta=\\cos\\alpha \\Rightarrow 2n\\pi\\pm\\alpha; \\quad \\tan\\theta=\\tan\\alpha \\Rightarrow n\\pi+\\alpha; \\quad \\sin^2\\theta=\\sin^2\\alpha \\Rightarrow n\\pi\\pm\\alpha$$" },
  { grade: "Ch 31 • Multi-Angle Arena", category: "Equations via Identities", title: "Weierstrass Quadratic & Symmetric (s+c) Substitution", tex: "$$(a+c)t^2 - 2bt + (c-a) = 0 \\;(t=\\tan\\tfrac{x}{2}); \\qquad u=\\sin x+\\cos x \\implies 2\\sin x\\cos x = u^2 - 1$$" },
  { grade: "Ch 32 • Multi-Angle Arena", category: "Oblique Triangles", title: "Sine Rule, Cosine Rule, Heron & Radii", tex: "$$\\frac{a}{\\sin A}=2R, \\quad c^2=a^2+b^2-2ab\\cos C, \\quad \\Delta=\\sqrt{s(s-a)(s-b)(s-c)}=rs=\\frac{abc}{4R}$$" },
  { grade: "Ch 33 • Inverse & Advanced", category: "Inverse Trig Functions", title: "Bijectivity & Horizontal Asymptotes", tex: "$$y=\\sin^{-1}x \\iff x=\\sin y\\;(y\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]); \\qquad \\lim_{x\\to\\pm\\infty}\\tan^{-1}x = \\pm\\frac{\\pi}{2}$$" },
  { grade: "Ch 34 • Inverse & Advanced", category: "Inverse Domain & Range", title: "Inverse Domains, Ranges & Quadratic Bounds", tex: "$$\\sin^{-1},\\cos^{-1}:[-1,1]; \\quad (\\sin^{-1}x)^2+(\\cos^{-1}x)^2 \\in \\left[\\frac{\\pi^2}{8},\\; \\frac{5\\pi^2}{4}\\right]$$" },
  { grade: "Ch 35 • Inverse & Advanced", category: "Inverse Principal Values", title: "Two-Family Negative Law & Sawtooth Folding", tex: "$$\\sin^{-1}(-x)=-\\sin^{-1}x,\\; \\cos^{-1}(-x)=\\pi-\\cos^{-1}x; \\quad \\sin^{-1}(\\sin x)=(-1)^n(x-n\\pi)$$" },
  { grade: "Ch 36 • Inverse & Advanced", category: "Inverse Properties", title: "Co-Function Sum, Piecewise Arctan & Telescoping", tex: "$$\\sin^{-1}x+\\cos^{-1}x=\\frac{\\pi}{2}, \\quad \\tan^{-1}x+\\tan^{-1}y=\\tan^{-1}\\frac{x+y}{1-xy}+\\begin{cases}0&(xy<1)\\\\\\pi&(x,y>0,xy>1)\\end{cases}$$" },
  { grade: "Ch 37 • Inverse & Advanced", category: "Inverse Identities & Equations", title: "3-Angle Conditional Inverse Laws & Root Checks", tex: "$$\\tan^{-1}x+\\tan^{-1}y+\\tan^{-1}z=\\pi \\Rightarrow x+y+z=xyz; \\quad \\cos^{-1}x+\\cos^{-1}y+\\cos^{-1}z=\\pi \\Rightarrow x^2+y^2+z^2+2xyz=1$$" },
  { grade: "Ch 38 • Inverse & Advanced", category: "Simplification (Adv & ITF)", title: "Canonical Substitutions & Radical Half-Angle Collapse", tex: "$$\\tan^{-1}\\!\\left(\\frac{\\sqrt{1+x^2}-1}{x}\\right)=\\frac{1}{2}\\tan^{-1}x,\\quad \\tan^{-1}\\!\\left(\\frac{\\cos x-\\sin x}{\\cos x+\\sin x}\\right)=\\frac{\\pi}{4}-x,\\quad \\frac{\\sin\\theta+\\sin 2\\theta}{1+\\cos\\theta+\\cos 2\\theta}=\\tan\\theta$$" },
  { grade: "Ch 39 • Inverse & Advanced", category: "Proof of Identities (Adv & ITF)", title: "Split-Angle Proof, Telescoping Cosecant & Machin's π Law", tex: "$$\\tan 3x-\\tan 2x-\\tan x=\\tan 3x\\tan 2x\\tan x, \\quad \\operatorname{cosec}2A=\\cot A-\\cot 2A, \\quad 4\\tan^{-1}\\frac{1}{5}-\\tan^{-1}\\frac{1}{239}=\\frac{\\pi}{4}$$" },
  { grade: "Ch 40 • Inverse & Advanced", category: "Trig Calculus", title: "Fundamental Limits & Derivatives", tex: "$$\\lim_{x\\to 0}\\frac{\\sin x}{x}=1, \\quad (\\sin x)'=\\cos x, \\quad (\\tan x)'=\\sec^2 x, \\quad (\\sin^{-1}x)'=\\frac{1}{\\sqrt{1-x^2}}, \\quad (\\tan^{-1}x)'=\\frac{1}{1+x^2}$$" },
  { grade: "Ch 41 • Inverse & Advanced", category: "Euler & Spherical", title: "Euler's Formula & Spherical Law of Cosines", tex: "$$e^{i\\theta}=\\cos\\theta+i\\sin\\theta, \\quad \\cos c = \\cos a\\cos b + \\sin a\\sin b\\cos C, \\quad \\text{Area}=R^2(A+B+C-\\pi)$$" },
  { grade: "Ch 42 • Inverse & Advanced", category: "Fourier Analysis", title: "Fourier Series & Parseval's Theorem", tex: "$$f(x)\\sim\\frac{a_0}{2}+\\sum_{n=1}^{\\infty}(a_n\\cos nx+b_n\\sin nx), \\quad \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|f|^2dx=\\frac{a_0^2}{4}+\\frac{1}{2}\\sum_{n=1}^{\\infty}(a_n^2+b_n^2)$$" },
  { grade: "Ch 43 • Inverse & Advanced", category: "Complex & Lie Groups", title: "Euler Sine Product & Rotation Lie Group SO(2)", tex: "$$\\frac{\\sin(\\pi z)}{\\pi z}=\\prod_{n=1}^{\\infty}\\left(1-\\frac{z^2}{n^2}\\right), \\qquad \\exp(\\theta J)=\\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}$$" },
  { grade: "Ch 44 • Master Summary", category: "4-Group Grand Summary", title: "Universal Synthesis: Ratios → Multi-Angle → General Solutions → Inverse Branches", tex: "$$\\sin^2\\theta+\\cos^2\\theta=1 \\;\\longrightarrow\\; e^{i\\theta}=\\cos\\theta+i\\sin\\theta \\;\\longrightarrow\\; \\sin^{-1}x+\\cos^{-1}x=\\frac{\\pi}{2}$$" }
];
