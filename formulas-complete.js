/* ==========================================================================
   TrigVerse — Complete Master Formula Category (Beginning → End: Ch 1 → Ch 44)
   12 Progressive Sections • Every Formula, Identity, Table, Law & Theorem
   ========================================================================== */

window.TRIG_FORMULA_SECTIONS = [
  {
    id: "sec-1",
    num: 1,
    shortLabel: "1. Angles & Radians",
    title: "Section 1: Right-Triangle Geometry, Angle Systems & Radian Measure (Ch 1–3)",
    subtitle: "From Pythagoras' Theorem and DMS angles to radians, arc length, sector area, and rotational motion.",
    color: "#f97316"
  },
  {
    id: "sec-2",
    num: 2,
    shortLabel: "2. Ratios & Standard Angles",
    title: "Section 2: Primary, Reciprocal, Standard & Complementary Ratios (Ch 4–8)",
    subtitle: "Perpendicular / Base / Hypotenuse (P/H, B/H, P/B), reciprocal/quotient relations, exact angle tables (0°–360°, 15°, 18°, 22.5°), co-functions, and conjugate tricks.",
    color: "#fb923c"
  },
  {
    id: "sec-3",
    num: 3,
    shortLabel: "3. Identities, Proofs & Heights",
    title: "Section 3: Right-Triangle Solving, Fundamental Identities, Proofs & Heights (Ch 9–15)",
    subtitle: "Side/angle solvers, Pythagorean identities, power reductions, proof templates, and surveyor height-and-distance blueprints.",
    color: "#f59e0b"
  },
  {
    id: "sec-4",
    num: 4,
    shortLabel: "4. Unit Circle, ASTC & Graphs",
    title: "Section 4: Unit Circle, Allied Angles, Quadrants, Domain/Range, Periodicity & Graphs (Ch 16–21)",
    subtitle: "Circular functions of any angle, parity, ASTC signs, 90°·n ± θ reductions, extrema bounds, periods, and wave transformations.",
    color: "#ea580c"
  },
  {
    id: "sec-5",
    num: 5,
    shortLabel: "5. Compound, 2A, 3A & A/2",
    title: "Section 5: Compound, Double, Triple & Half-Angle Formulas (Ch 22–25)",
    subtitle: "Addition/subtraction laws, double/triple/half-angle identities, power-lowering 1-killers, and Weierstrass t = tan(θ/2).",
    color: "#f43f5e"
  },
  {
    id: "sec-6",
    num: 6,
    shortLabel: "6. Sum-Product & Conditional",
    title: "Section 6: Sum-to-Product, Product-to-Sum, Series & Conditional Identities (Ch 26–28)",
    subtitle: "C & D factoring, product-to-sum, cosine cascades, AP trig series, R-α harmonic form, and A + B + C = π triangle identities.",
    color: "#fb7185"
  },
  {
    id: "sec-7",
    num: 7,
    shortLabel: "7. Trig Equations & General Sol",
    title: "Section 7: Trigonometric Equations & General Solutions (Ch 29–31)",
    subtitle: "Zero/extreme root families, principal & general solutions (n ∈ ℤ), squared equations, linear auxiliary-angle, and symmetric equations.",
    color: "#ec4899"
  },
  {
    id: "sec-8",
    num: 8,
    shortLabel: "8. Oblique Triangles & Radii",
    title: "Section 8: Properties & Solution of Oblique Triangles (Ch 32)",
    subtitle: "Sine rule, cosine rule, projection laws, Napier's tangents, half-angle side laws, Heron's area, circumradius R, inradius r, and exradii.",
    color: "#10b981"
  },
  {
    id: "sec-9",
    num: 9,
    shortLabel: "9. Inverse Trig (ITF)",
    title: "Section 9: Inverse Trigonometric Functions — Branches, Properties & Proofs (Ch 33–39)",
    subtitle: "Principal value branches, negative-input families, reciprocal/co-function sums, piecewise arctan addition, multiple-angle ITF, and substitutions.",
    color: "#a855f7"
  },
  {
    id: "sec-10",
    num: 10,
    shortLabel: "10. Trig Calculus & Series",
    title: "Section 10: Trigonometric Limits, Derivatives, Integrals & Taylor Series (Ch 40–41)",
    subtitle: "Standard radian limits, derivatives & antiderivatives of all 6 trig and 6 inverse trig functions, Wallis integrals, and Maclaurin series.",
    color: "#6366f1"
  },
  {
    id: "sec-11",
    num: 11,
    shortLabel: "11. Euler, Hyperbolic & Spherical",
    title: "Section 11: Complex, Euler's Formula, Hyperbolic & Spherical Trigonometry (Ch 41)",
    subtitle: "Euler's identity, De Moivre's theorem, roots of unity, hyperbolic functions & inverses, complex modulus, and geodesic spherical laws.",
    color: "#06b6d4"
  },
  {
    id: "sec-12",
    num: 12,
    shortLabel: "12. Fourier, Products & Lie",
    title: "Section 12: Fourier Analysis, Infinite Products, Chebyshev & Lie Groups (Ch 42–44)",
    subtitle: "L² orthogonality, Fourier series, Parseval's theorem, Euler sine product, Basel ζ(2), Gamma reflection, Chebyshev Tn, and SO(2)/SO(3).",
    color: "#eab308"
  }
];

window.TRIG_FORMULA_VAULT = [
  /* ========================================================================
     SECTION 1: RIGHT-TRIANGLE GEOMETRY, ANGLE SYSTEMS & RADIAN MEASURE (Ch 1–3)
     ======================================================================== */
  {
    sectionId: "sec-1",
    chapterId: "ch-1-intro",
    grade: "Ch 1 • Angle Genesis",
    category: "Right Triangle & Pythagoras",
    title: "Pythagoras' Theorem & Acute Angle Complementarity",
    tex: "$$(\\text{Perpendicular})^2 + (\\text{Base})^2 = (\\text{Hypotenuse})^2 \\iff P^2 + B^2 = H^2$$ $$H = \\sqrt{P^2 + B^2}, \\qquad P = \\sqrt{H^2 - B^2}, \\qquad B = \\sqrt{H^2 - P^2}, \\qquad \\angle A + \\angle C = 90^\\circ$$",
    note: "In a right triangle with Perpendicular P, Base B, and Hypotenuse H (facing 90°), H is strictly the longest side (H > P and H > B)."
  },
  {
    sectionId: "sec-1",
    chapterId: "ch-1-intro",
    grade: "Ch 1 • Angle Genesis",
    category: "Pythagorean Triples",
    title: "Classic Integer & Parametric Pythagorean Triples",
    tex: "$$(3,4,5),\\; (5,12,13),\\; (8,15,17),\\; (7,24,25),\\; (20,21,29); \\qquad (a^2 - b^2)^2 + (2ab)^2 = (a^2 + b^2)^2$$",
    note: "Special cases: (1 − x², 2x, 1 + x²) and (m² − 1, 2m, m² + 1) generate instant rational right triangles."
  },
  {
    sectionId: "sec-1",
    chapterId: "ch-2-angles",
    grade: "Ch 2 • Angle Genesis",
    category: "Directed & Coterminal Angles",
    title: "Coterminal Angles & Quadrantal Boundaries",
    tex: "$$\\theta_{\\text{coterminal}} = \\theta + 360^\\circ k \\quad \\text{or} \\quad \\theta + 2\\pi k \\qquad (k \\in \\mathbb{Z})$$",
    note: "Counter-clockwise rotation is positive (+); clockwise rotation is negative (−). Coterminal angles share identical trig ratios."
  },
  {
    sectionId: "sec-1",
    chapterId: "ch-2-angles",
    grade: "Ch 2 • Angle Genesis",
    category: "DMS & Gradians",
    title: "Sexagesimal (DMS), Centesimal (Gradian) & Circular Systems",
    tex: "$$1\\text{ rev} = 360^\\circ = 400^g = 2\\pi\\text{ rad}, \\qquad 1^\\circ = 60', \\quad 1' = 60'', \\qquad \\frac{D}{90} = \\frac{G}{100} = \\frac{2R}{\\pi}$$",
    note: "Decimal degrees conversion: θ° = D + M/60 + S/3600."
  },
  {
    sectionId: "sec-1",
    chapterId: "ch-3-radian",
    grade: "Ch 3 • Angle Genesis",
    category: "Degree ↔ Radian Bridge",
    title: "Degree–Radian Exact Conversion Formulas",
    tex: "$$\\pi\\text{ rad} = 180^\\circ, \\qquad \\theta\\text{ (rad)} = \\theta^\\circ \\times \\frac{\\pi}{180^\\circ}, \\qquad \\theta^\\circ = \\theta\\text{ (rad)} \\times \\frac{180^\\circ}{\\pi}$$",
    note: "1 rad ≈ 57.2958° ≈ 57° 16' 22'';  1° ≈ 0.017453 rad."
  },
  {
    sectionId: "sec-1",
    chapterId: "ch-3-radian",
    grade: "Ch 3 • Angle Genesis",
    category: "Arc, Sector & Segment",
    title: "Arc Length, Sector Area, Segment Area & Chord Length",
    tex: "$$l = r\\theta, \\qquad A_{\\text{sector}} = \\frac{1}{2}r^2\\theta = \\frac{1}{2}lr, \\qquad A_{\\text{segment}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta), \\qquad c_{\\text{chord}} = 2r\\sin\\!\\left(\\frac{\\theta}{2}\\right)$$",
    note: "CRITICAL: θ MUST be in radians in l = rθ and sector/segment area formulas! Perimeter of sector = 2r + l."
  },
  {
    sectionId: "sec-1",
    chapterId: "ch-3-radian",
    grade: "Ch 3 • Angle Genesis",
    category: "Kinematics & Polygons",
    title: "Angular Velocity, Regular Polygon Angles & Clock Hands",
    tex: "$$\\omega = \\frac{\\theta}{t} = 2\\pi f, \\qquad v = r\\omega, \\qquad \\alpha_{\\text{interior}}(n\\text{-gon}) = \\frac{(n-2)\\pi}{n}, \\qquad \\Delta\\theta_{\\text{clock}} = \\left|30H - \\frac{11}{2}M\\right|^\\circ$$",
    note: "Minute hand moves at 6°/min; hour hand moves at 0.5°/min (relative speed = 5.5°/min)."
  },

  /* ========================================================================
     SECTION 2: PRIMARY, RECIPROCAL, STANDARD & COMPLEMENTARY RATIOS (Ch 4–8)
     ======================================================================== */
  {
    sectionId: "sec-2",
    chapterId: "ch-4-primary-ratios",
    grade: "Ch 4 • Ratio Forge",
    category: "Primary Ratios",
    title: "Primary Trigonometric Ratios (Perpendicular, Base & Hypotenuse)",
    tex: "$$\\sin\\theta = \\frac{\\text{Perpendicular}}{\\text{Hypotenuse}} = \\frac{P}{H}, \\qquad \\cos\\theta = \\frac{\\text{Base}}{\\text{Hypotenuse}} = \\frac{B}{H}, \\qquad \\tan\\theta = \\frac{\\text{Perpendicular}}{\\text{Base}} = \\frac{P}{B}$$",
    note: "For acute θ ∈ (0°, 90°): 0 < sin θ < 1, 0 < cos θ < 1, and 0 < tan θ < ∞."
  },
  {
    sectionId: "sec-2",
    chapterId: "ch-5-reciprocal-ratios",
    grade: "Ch 5 • Ratio Forge",
    category: "Reciprocal Ratios",
    title: "Reciprocal Trigonometric Ratios (cosec, sec, cot)",
    tex: "$$\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{\\text{Hypotenuse}}{\\text{Perpendicular}} = \\frac{H}{P}, \\qquad \\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{\\text{Hypotenuse}}{\\text{Base}} = \\frac{H}{B}, \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\text{Base}}{\\text{Perpendicular}} = \\frac{B}{P}$$",
    note: "|cosec θ| ≥ 1 and |sec θ| ≥ 1 always. Never confuse (sin θ)⁻¹ = cosec θ with inverse angle sin⁻¹(x)!"
  },
  {
    sectionId: "sec-2",
    chapterId: "ch-5-reciprocal-ratios",
    grade: "Ch 5 • Ratio Forge",
    category: "Quotient & Product Laws",
    title: "Quotient Identities & Reciprocal Product Identities",
    tex: "$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}; \\qquad \\sin\\theta\\operatorname{cosec}\\theta = 1, \\quad \\cos\\theta\\sec\\theta = 1, \\quad \\tan\\theta\\cot\\theta = 1$$",
    note: "Valid wherever denominators are non-zero."
  },
  {
    sectionId: "sec-2",
    chapterId: "ch-6-standard-angles",
    grade: "Ch 6 • Ratio Forge",
    category: "Standard Angles (0°–90°)",
    title: "Exact Values of sin, cos & tan at 0°, 30°, 45°, 60°, 90°",
    tex: "$$\\begin{array}{c|ccccc} \\theta & 0^\\circ\\;(0) & 30^\\circ\\;(\\frac{\\pi}{6}) & 45^\\circ\\;(\\frac{\\pi}{4}) & 60^\\circ\\;(\\frac{\\pi}{3}) & 90^\\circ\\;(\\frac{\\pi}{2}) \\\\ \\hline \\sin\\theta & 0 & \\frac{1}{2} & \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{3}}{2} & 1 \\\\ \\cos\\theta & 1 & \\frac{\\sqrt{3}}{2} & \\frac{\\sqrt{2}}{2} & \\frac{1}{2} & 0 \\\\ \\tan\\theta & 0 & \\frac{1}{\\sqrt{3}} & 1 & \\sqrt{3} & \\text{undef} \\end{array}$$",
    note: "Memory pattern: sin θ = √0/2, √1/2, √2/2, √3/2, √4/2; reverse for cos θ."
  },
  {
    sectionId: "sec-2",
    chapterId: "ch-6-standard-angles",
    grade: "Ch 6 • Ratio Forge",
    category: "Standard Angles (Reciprocal)",
    title: "Exact Values of cosec, sec & cot at 0°, 30°, 45°, 60°, 90°",
    tex: "$$\\begin{array}{c|ccccc} \\theta & 0^\\circ & 30^\\circ & 45^\\circ & 60^\\circ & 90^\\circ \\\\ \\hline \\operatorname{cosec}\\theta & \\text{undef} & 2 & \\sqrt{2} & \\frac{2}{\\sqrt{3}} & 1 \\\\ \\sec\\theta & 1 & \\frac{2}{\\sqrt{3}} & \\sqrt{2} & 2 & \\text{undef} \\\\ \\cot\\theta & \\text{undef} & \\sqrt{3} & 1 & \\frac{1}{\\sqrt{3}} & 0 \\end{array}$$",
    note: "Reciprocal of 0 is undefined; reciprocal of ∞ (undefined tan 90°) is cot 90° = 0."
  },
  {
    sectionId: "sec-2",
    chapterId: "ch-6-standard-angles",
    grade: "Ch 6 • Ratio Forge",
    category: "Special Surd Angles",
    title: "Exact Ratios of 15°, 75° & Half-Standard Angles 22.5°, 67.5°",
    tex: "$$\\sin 15^\\circ = \\cos 75^\\circ = \\frac{\\sqrt{6}-\\sqrt{2}}{4}, \\quad \\cos 15^\\circ = \\sin 75^\\circ = \\frac{\\sqrt{6}+\\sqrt{2}}{4}, \\quad \\tan 15^\\circ = 2 - \\sqrt{3}, \\quad \\tan 75^\\circ = 2 + \\sqrt{3}$$ $$\\sin 22.5^\\circ = \\frac{\\sqrt{2-\\sqrt{2}}}{2}, \\quad \\cos 22.5^\\circ = \\frac{\\sqrt{2+\\sqrt{2}}}{2}, \\quad \\tan 22.5^\\circ = \\sqrt{2}-1, \\quad \\tan 67.5^\\circ = \\sqrt{2}+1$$",
    note: "Derived via 15° = 45° − 30°, 75° = 45° + 30°, and half-angle of 45°."
  },
  {
    sectionId: "sec-2",
    chapterId: "ch-6-standard-angles",
    grade: "Ch 6 • Ratio Forge",
    category: "Golden Ratio Angles",
    title: "Exact Ratios of Pentagonal Angles 18°, 36°, 54°, 72°",
    tex: "$$\\sin 18^\\circ = \\cos 72^\\circ = \\frac{\\sqrt{5}-1}{4}, \\qquad \\cos 36^\\circ = \\sin 54^\\circ = \\frac{\\sqrt{5}+1}{4}$$ $$\\cos 18^\\circ = \\sin 72^\\circ = \\frac{\\sqrt{10+2\\sqrt{5}}}{4}, \\qquad \\sin 36^\\circ = \\cos 54^\\circ = \\frac{\\sqrt{10-2\\sqrt{5}}}{4}$$",
    note: "Notice cos 36° − sin 18° = 1/2 and cos 36° · sin 18° = 1/4!"
  },
  {
    sectionId: "sec-2",
    chapterId: "ch-7-complementary",
    grade: "Ch 7 • Ratio Forge",
    category: "Complementary Angles",
    title: "The Six Complementary (Co-Function) Identities",
    tex: "$$\\sin(90^\\circ - \\theta) = \\cos\\theta, \\qquad \\cos(90^\\circ - \\theta) = \\sin\\theta, \\qquad \\tan(90^\\circ - \\theta) = \\cot\\theta$$ $$\\cot(90^\\circ - \\theta) = \\tan\\theta, \\qquad \\sec(90^\\circ - \\theta) = \\operatorname{cosec}\\theta, \\qquad \\operatorname{cosec}(90^\\circ - \\theta) = \\sec\\theta$$",
    note: "In ΔABC (A+B+C = 180°): sin((B+C)/2) = cos(A/2), tan((B+C)/2) = cot(A/2), sec((B+C)/2) = cosec(A/2)."
  },
  {
    sectionId: "sec-2",
    chapterId: "ch-8-unknown-ratios",
    grade: "Ch 8 • Ratio Forge",
    category: "Unknown Ratios",
    title: "Secant–Tangent & Cosecant–Cotangent Conjugate Tricks",
    tex: "$$\\sec\\theta + \\tan\\theta = p \\implies \\sec\\theta - \\tan\\theta = \\frac{1}{p}, \\quad \\sec\\theta = \\frac{p^2+1}{2p}, \\quad \\tan\\theta = \\frac{p^2-1}{2p}, \\quad \\sin\\theta = \\frac{p^2-1}{p^2+1}$$ $$\\operatorname{cosec}\\theta + \\cot\\theta = q \\implies \\operatorname{cosec}\\theta - \\cot\\theta = \\frac{1}{q}, \\quad \\operatorname{cosec}\\theta = \\frac{q^2+1}{2q}, \\quad \\cot\\theta = \\frac{q^2-1}{2q}, \\quad \\cos\\theta = \\frac{q^2-1}{q^2+1}$$",
    note: "Fastest exam shortcut whenever sec θ ± tan θ or cosec θ ± cot θ is given!"
  },

  /* ========================================================================
     SECTION 3: RIGHT-TRIANGLE SOLVING, IDENTITIES, PROOFS & HEIGHTS (Ch 9–15)
     ======================================================================== */
  {
    sectionId: "sec-3",
    chapterId: "ch-8-unknown-sides",
    grade: "Ch 9 • Identity Citadel",
    category: "Solving Unknown Sides",
    title: "Right-Triangle Unknown Sides (P, B, H) & Vector Projections",
    tex: "$$P = H\\sin\\theta, \\quad B = H\\cos\\theta, \\quad P = B\\tan\\theta, \\quad B = P\\cot\\theta, \\quad H = \\frac{P}{\\sin\\theta} = \\frac{B}{\\cos\\theta}$$ $$\\vec{F} = (F\\cos\\theta)\\,\\hat{i} + (F\\sin\\theta)\\,\\hat{j}, \\qquad |\\vec{F}| = \\sqrt{F_x^2 + F_y^2}$$",
    note: "Physics vector resolution: Base component along θ is F_x = F cos θ; Perpendicular component is F_y = F sin θ."
  },
  {
    sectionId: "sec-3",
    chapterId: "ch-9-unknown-angles",
    grade: "Ch 10 • Identity Citadel",
    category: "Finding Unknown Angles",
    title: "Inverse Acute Angle Finders, Line Slope & Angle Between Two Lines",
    tex: "$$\\theta = \\sin^{-1}\\!\\left(\\frac{P}{H}\\right) = \\cos^{-1}\\!\\left(\\frac{B}{H}\\right) = \\tan^{-1}\\!\\left(\\frac{P}{B}\\right); \\qquad m = \\tan\\theta = \\frac{y_2 - y_1}{x_2 - x_1}$$ $$\\tan\\phi = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right| \\quad (m_1 m_2 \\neq -1; \\;\\text{perpendicular iff } m_1 m_2 = -1)$$",
    note: "Inclination θ ∈ [0°, 180°) of a line with positive x-axis has slope m = tan θ."
  },
  {
    sectionId: "sec-3",
    chapterId: "ch-11-identities",
    grade: "Ch 11 • Identity Citadel",
    category: "Fundamental Identities",
    title: "The Three Master Pythagorean Identities & Factorizations",
    tex: "$$\\sin^2\\theta + \\cos^2\\theta = 1 \\iff \\sin^2\\theta = (1 - \\cos\\theta)(1 + \\cos\\theta), \\quad \\cos^2\\theta = (1 - \\sin\\theta)(1 + \\sin\\theta)$$ $$1 + \\tan^2\\theta = \\sec^2\\theta \\iff (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1$$ $$1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta \\iff (\\operatorname{cosec}\\theta - \\cot\\theta)(\\operatorname{cosec}\\theta + \\cot\\theta) = 1$$",
    note: "Derived by dividing P² + B² = H² by H², B², and P² respectively."
  },
  {
    sectionId: "sec-3",
    chapterId: "ch-11-identities",
    grade: "Ch 11 • Identity Citadel",
    category: "Ratio Inter-Conversion",
    title: "Expressing Primary Ratios in Terms of tan θ (Quadrant-Signed)",
    tex: "$$\\sin\\theta = \\frac{\\pm\\tan\\theta}{\\sqrt{1 + \\tan^2\\theta}}, \\qquad \\cos\\theta = \\frac{\\pm 1}{\\sqrt{1 + \\tan^2\\theta}}, \\qquad \\sec\\theta = \\pm\\sqrt{1 + \\tan^2\\theta}, \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta}$$",
    note: "Choose the + or − sign according to the quadrant of θ (in Q-I all signs are +)."
  },
  {
    sectionId: "sec-3",
    chapterId: "ch-12-simplification",
    grade: "Ch 12 • Identity Citadel",
    category: "Algebraic Simplification",
    title: "Even-Power Sum Reductions & Square of sin θ ± cos θ",
    tex: "$$(\\sin\\theta \\pm \\cos\\theta)^2 = 1 \\pm 2\\sin\\theta\\cos\\theta$$ $$\\sin^4\\theta + \\cos^4\\theta = 1 - 2\\sin^2\\theta\\cos^2\\theta, \\qquad \\sin^6\\theta + \\cos^6\\theta = 1 - 3\\sin^2\\theta\\cos^2\\theta$$ $$\\sin^8\\theta + \\cos^8\\theta = 1 - 4\\sin^2\\theta\\cos^2\\theta + 2\\sin^4\\theta\\cos^4\\theta$$",
    note: "Notice 3(sin⁴θ + cos⁴θ) − 2(sin⁶θ + cos⁶θ) ≡ 1 for every angle θ!"
  },
  {
    sectionId: "sec-3",
    chapterId: "ch-13-proving",
    grade: "Ch 13 • Identity Citadel",
    category: "Proof Templates",
    title: "High-Yield Proof Identities, Conjugate Radicals & Elimination",
    tex: "$$\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta, \\qquad \\cot^2\\theta - \\cos^2\\theta = \\cot^2\\theta\\cos^2\\theta, \\qquad \\sec^2\\theta + \\operatorname{cosec}^2\\theta = \\sec^2\\theta\\operatorname{cosec}^2\\theta$$ $$\\sqrt{\\frac{1 + \\sin\\theta}{1 - \\sin\\theta}} = \\frac{1 + \\sin\\theta}{|\\cos\\theta|}, \\qquad (a\\cos\\theta + b\\sin\\theta)^2 + (a\\sin\\theta - b\\cos\\theta)^2 = a^2 + b^2$$",
    note: "Also: tan θ + cot θ = sec θ cosec θ = 2 cosec 2θ."
  },
  {
    sectionId: "sec-3",
    chapterId: "ch-10-heights-distances",
    grade: "Ch 14 • Identity Citadel",
    category: "Heights & Distances I",
    title: "Two-Point Elevation / Depression & Pedestal Formulas",
    tex: "$$d_{\\text{same side}} = h(\\cot\\alpha - \\cot\\beta) \\iff h = \\frac{d}{\\cot\\alpha - \\cot\\beta}, \\qquad D_{\\text{opposite sides}} = h(\\cot\\alpha + \\cot\\beta)$$ $$h_{\\text{statue on pedestal } p} = p(\\tan\\beta\\cot\\alpha - 1) \\quad (\\beta > \\alpha)$$",
    note: "Angle of Depression from top equals Angle of Elevation from ground (alternate interior angles)."
  },
  {
    sectionId: "sec-3",
    chapterId: "ch-15-heights-advanced",
    grade: "Ch 15 • Identity Citadel",
    category: "Heights & Distances II",
    title: "Cloud Reflection, Spherical Balloon, Crossed Poles & 3D Bearings",
    tex: "$$H_{\\text{cloud}} = h\\,\\frac{\\tan\\beta + \\tan\\alpha}{\\tan\\beta - \\tan\\alpha}, \\qquad H_{\\text{balloon}} = r\\sin\\beta\\operatorname{cosec}\\!\\left(\\frac{\\alpha}{2}\\right)$$ $$h_{\\text{complementary}} = \\sqrt{ab}, \\qquad h_{\\text{crossed poles}} = \\frac{ab}{a + b}, \\qquad d_{3\\text{D}}^2 = h^2(\\cot^2\\alpha + \\cot^2\\beta - 2\\cot\\alpha\\cot\\beta\\cos\\gamma)$$",
    note: "When two ground bearings are perpendicular (γ = 90°, e.g., South & East): d² = h²(cot²α + cot²β)."
  },

  /* ========================================================================
     SECTION 4: UNIT CIRCLE, ALLIED ANGLES, QUADRANTS, DOMAIN & GRAPHS (Ch 16–21)
     ======================================================================== */
  {
    sectionId: "sec-4",
    chapterId: "ch-16-trig-functions",
    grade: "Ch 16 • Wave Observatory",
    category: "Unit Circle & Parity",
    title: "Unit Circle Definition & Even–Odd Parity Laws",
    tex: "$$P(\\theta) = (\\cos\\theta,\\; \\sin\\theta) \\in x^2 + y^2 = 1; \\qquad \\cos(-\\theta) = \\cos\\theta,\\; \\sec(-\\theta) = \\sec\\theta \\;(\\text{Even})$$ $$\\sin(-\\theta) = -\\sin\\theta,\\quad \\operatorname{cosec}(-\\theta) = -\\operatorname{cosec}\\theta,\\quad \\tan(-\\theta) = -\\tan\\theta,\\quad \\cot(-\\theta) = -\\cot\\theta \\;(\\text{Odd})$$",
    note: "Only cos and sec absorb a negative sign; the other four pull the minus sign outside."
  },
  {
    sectionId: "sec-4",
    chapterId: "ch-17-any-angle",
    grade: "Ch 17 • Wave Observatory",
    category: "Any Angle & Allied Angles",
    title: "Coordinate Definition (r = √(x² + y²)) & Master Allied-Angle Rule",
    tex: "$$\\sin\\theta = \\frac{y}{r}, \\quad \\cos\\theta = \\frac{x}{r}, \\quad \\tan\\theta = \\frac{y}{x} \\quad \\left(r = \\sqrt{x^2 + y^2} > 0\\right)$$ $$\\operatorname{trig}(n\\cdot 90^\\circ \\pm \\theta) = (\\text{ASTC sign of original fn}) \\times \\begin{cases} \\operatorname{trig}\\theta & (n \\text{ even: } 180^\\circ,\\, 360^\\circ) \\\\ \\operatorname{co-trig}\\theta & (n \\text{ odd: } 90^\\circ,\\, 270^\\circ) \\end{cases}$$",
    note: "Key cases: sin(180° − θ) = sin θ, cos(180° − θ) = −cos θ, tan(180° + θ) = tan θ, cos(360° − θ) = cos θ."
  },
  {
    sectionId: "sec-4",
    chapterId: "ch-17-any-angle",
    grade: "Ch 17 • Wave Observatory",
    category: "Supplementary & Quadrantal",
    title: "Quadrantal Values (0°, 90°, 180°, 270°) & Supplementary Laws",
    tex: "$$P(0) = (1,0), \\quad P\\!\\left(\\tfrac{\\pi}{2}\\right) = (0,1), \\quad P(\\pi) = (-1,0), \\quad P\\!\\left(\\tfrac{3\\pi}{2}\\right) = (0,-1)$$ $$\\sin(\\pi - \\theta) = \\sin\\theta, \\quad \\cos(\\pi - \\theta) = -\\cos\\theta, \\quad \\tan(\\pi - \\theta) = -\\tan\\theta$$",
    note: "Zeros: sin θ = 0 ⟺ θ = nπ; cos θ = 0 ⟺ θ = (2n + 1)π/2 (n ∈ ℤ)."
  },
  {
    sectionId: "sec-4",
    chapterId: "ch-18-quadrant-signs",
    grade: "Ch 18 • Wave Observatory",
    category: "ASTC Quadrant Rule",
    title: "Signs of Trigonometric Functions in All Four Quadrants (ASTC)",
    tex: "$$\\text{Q-I }\\!\\left(0,\\tfrac{\\pi}{2}\\right): \\text{All } + \\quad|\\quad \\text{Q-II }\\!\\left(\\tfrac{\\pi}{2},\\pi\\right): \\sin,\\operatorname{cosec} + \\quad|\\quad \\text{Q-III }\\!\\left(\\pi,\\tfrac{3\\pi}{2}\\right): \\tan,\\cot + \\quad|\\quad \\text{Q-IV }\\!\\left(\\tfrac{3\\pi}{2},2\\pi\\right): \\cos,\\sec +$$",
    note: "Mnemonic: All Silver Tea Cups / Add Sugar To Coffee."
  },
  {
    sectionId: "sec-4",
    chapterId: "ch-19-domain-range",
    grade: "Ch 19 • Wave Observatory",
    category: "Domain & Range",
    title: "Domains & Ranges of All Six Trigonometric Functions",
    tex: "$$\\sin,\\cos : \\mathbb{R} \\to [-1,1]; \\qquad \\tan : \\mathbb{R}\\setminus\\!\\left\\{(2n+1)\\tfrac{\\pi}{2}\\right\\} \\to \\mathbb{R}; \\qquad \\cot : \\mathbb{R}\\setminus\\{n\\pi\\} \\to \\mathbb{R}$$ $$\\sec : \\mathbb{R}\\setminus\\!\\left\\{(2n+1)\\tfrac{\\pi}{2}\\right\\} \\to (-\\infty,-1]\\cup[1,\\infty); \\qquad \\operatorname{cosec} : \\mathbb{R}\\setminus\\{n\\pi\\} \\to (-\\infty,-1]\\cup[1,\\infty)$$",
    note: "Vertical asymptotes occur precisely at the excluded domain points where denominators vanish."
  },
  {
    sectionId: "sec-4",
    chapterId: "ch-19-domain-range",
    grade: "Ch 19 • Wave Observatory",
    category: "Extrema & Inequalities",
    title: "Trigonometric Extrema & Classic AM–GM Bounds",
    tex: "$$-\\sqrt{a^2 + b^2} \\le a\\cos x + b\\sin x \\le \\sqrt{a^2 + b^2}$$ $$a^2\\tan^2 x + b^2\\cot^2 x \\ge 2|ab|, \\qquad a^2\\sec^2 x + b^2\\operatorname{cosec}^2 x \\ge (|a| + |b|)^2 \\qquad (a,b > 0)$$",
    note: "Also for x ∈ (0, π/2): sin x < x < tan x (fundamental radian sandwich inequality)."
  },
  {
    sectionId: "sec-4",
    chapterId: "ch-20-periodicity",
    grade: "Ch 20 • Wave Observatory",
    category: "Periodicity Laws",
    title: "Fundamental Periods, Modulus/Power Halving & Fractional LCM",
    tex: "$$T(\\sin,\\cos,\\sec,\\operatorname{cosec}) = 2\\pi, \\quad T(\\tan,\\cot) = \\pi, \\quad T\\big(f(ax+b)\\big) = \\frac{T}{|a|}$$ $$T\\big(|\\sin x|\\big) = T(\\sin^{2k}x) = \\pi, \\quad T\\big(|\\sin x| + |\\cos x|\\big) = \\frac{\\pi}{2}, \\quad \\operatorname{LCM}\\!\\left(\\frac{p_1}{q_1},\\frac{p_2}{q_2}\\right) = \\frac{\\operatorname{LCM}(p_1,p_2)}{\\operatorname{HCF}(q_1,q_2)}$$",
    note: "Always check if even symmetry halves the LCM candidate (e.g., |sin x| + |cos x| drops from π to π/2)."
  },
  {
    sectionId: "sec-4",
    chapterId: "ch-21-trig-graphs",
    grade: "Ch 21 • Wave Observatory",
    category: "Sinusoidal Wave Graphs",
    title: "4-Parameter Sinusoidal Wave Transformation",
    tex: "$$y = A\\sin(Bx - C) + D = A\\sin\\!\\left(B\\!\\left(x - \\frac{C}{B}\\right)\\right) + D$$ $$\\text{Amplitude} = |A|, \\quad \\text{Period } T = \\frac{2\\pi}{|B|}, \\quad \\text{Phase Shift} = \\frac{C}{B}, \\quad \\text{Range} = [D - |A|,\\; D + |A|]$$",
    note: "For y = A tan(Bx − C) + D, there is no finite amplitude and the period is T = π / |B|."
  },

  /* ========================================================================
     SECTION 5: COMPOUND, DOUBLE, TRIPLE & HALF-ANGLE FORMULAS (Ch 22–25)
     ======================================================================== */
  {
    sectionId: "sec-5",
    chapterId: "ch-22-compound-angles",
    grade: "Ch 22 • Multi-Angle Arena",
    category: "Compound Angles (sin & cos)",
    title: "Sine & Cosine Addition and Subtraction Formulas",
    tex: "$$\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B, \\qquad \\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B$$ $$\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B, \\qquad \\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$$",
    note: "Sine keeps the same sign (+ → +); Cosine flips the middle sign (+ → −)."
  },
  {
    sectionId: "sec-5",
    chapterId: "ch-22-compound-angles",
    grade: "Ch 22 • Multi-Angle Arena",
    category: "Compound Angles (tan & cot)",
    title: "Tangent, Cotangent & 45° ± θ Addition Formulas",
    tex: "$$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}, \\qquad \\cot(A \\pm B) = \\frac{\\cot A\\cot B \\mp 1}{\\cot B \\pm \\cot A}$$ $$\\tan(45^\\circ \\pm \\theta) = \\frac{1 \\pm \\tan\\theta}{1 \\mp \\tan\\theta} = \\frac{\\cos\\theta \\pm \\sin\\theta}{\\cos\\theta \\mp \\sin\\theta}$$",
    note: "Super useful in calculus and inverse trig whenever (cos θ ± sin θ)/(cos θ ∓ sin θ) appears!"
  },
  {
    sectionId: "sec-5",
    chapterId: "ch-22-compound-angles",
    grade: "Ch 22 • Multi-Angle Arena",
    category: "Compound Products & 3 Angles",
    title: "Squared-Difference Product Identities & Three-Angle Sum",
    tex: "$$\\sin(A + B)\\sin(A - B) = \\sin^2 A - \\sin^2 B = \\cos^2 B - \\cos^2 A$$ $$\\cos(A + B)\\cos(A - B) = \\cos^2 A - \\sin^2 B = \\cos^2 B - \\sin^2 A$$ $$\\tan(A + B + C) = \\frac{\\tan A + \\tan B + \\tan C - \\tan A\\tan B\\tan C}{1 - (\\tan A\\tan B + \\tan B\\tan C + \\tan C\\tan A)}$$",
    note: "Notice sin(A+B)sin(A−B) factors sin²A − sin²B directly into a product of single sines!"
  },
  {
    sectionId: "sec-5",
    chapterId: "ch-23-double-angle",
    grade: "Ch 23 • Multi-Angle Arena",
    category: "Double-Angle Formulas",
    title: "Complete Double-Angle Identities (sin 2A, cos 2A, tan 2A, cot 2A)",
    tex: "$$\\sin 2A = 2\\sin A\\cos A = \\frac{2\\tan A}{1 + \\tan^2 A}, \\qquad \\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}, \\qquad \\cot 2A = \\frac{\\cot^2 A - 1}{2\\cot A}$$ $$\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A = \\frac{1 - \\tan^2 A}{1 + \\tan^2 A}$$",
    note: "Denominator watch: sin 2A & cos 2A have (1 + tan²A), whereas tan 2A has (1 − tan²A)!"
  },
  {
    sectionId: "sec-5",
    chapterId: "ch-23-double-angle",
    grade: "Ch 23 • Multi-Angle Arena",
    category: "Power-Reduction & 1-Killers",
    title: "Power-Lowering & 1-Elimination Identities",
    tex: "$$1 + \\cos 2A = 2\\cos^2 A, \\qquad 1 - \\cos 2A = 2\\sin^2 A, \\qquad 1 \\pm \\sin 2A = (\\cos A \\pm \\sin A)^2$$ $$\\sin^2 A = \\frac{1 - \\cos 2A}{2}, \\qquad \\cos^2 A = \\frac{1 + \\cos 2A}{2}, \\qquad \\tan^2 A = \\frac{1 - \\cos 2A}{1 + \\cos 2A}$$",
    note: "Also cot A − tan A = 2 cot 2A and cosec 2A = 1/2 (tan A + cot A) = cot A − cot 2A."
  },
  {
    sectionId: "sec-5",
    chapterId: "ch-24-triple-angle",
    grade: "Ch 24 • Multi-Angle Arena",
    category: "Triple-Angle & Cubic",
    title: "Triple-Angle (3A) & Cubic Power-Linearization Identities",
    tex: "$$\\sin 3A = 3\\sin A - 4\\sin^3 A, \\qquad \\cos 3A = 4\\cos^3 A - 3\\cos A, \\qquad \\tan 3A = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}$$ $$\\sin^3 A = \\frac{3\\sin A - \\sin 3A}{4}, \\qquad \\cos^3 A = \\frac{3\\cos A + \\cos 3A}{4}$$",
    note: "Essential for integrating ∫ sin³x dx and ∫ cos³x dx without integration by parts."
  },
  {
    sectionId: "sec-5",
    chapterId: "ch-24-triple-angle",
    grade: "Ch 24 • Multi-Angle Arena",
    category: "60° ± A Triple Products",
    title: "Symmetric 60°-Spaced Triple-Product Identities",
    tex: "$$\\sin A\\sin(60^\\circ - A)\\sin(60^\\circ + A) = \\frac{1}{4}\\sin 3A, \\qquad \\cos A\\cos(60^\\circ - A)\\cos(60^\\circ + A) = \\frac{1}{4}\\cos 3A$$ $$\\tan A\\tan(60^\\circ - A)\\tan(60^\\circ + A) = \\tan 3A$$",
    note: "Notice the tan product has NO factor of 1/4 because (1/4) cancels top and bottom!"
  },
  {
    sectionId: "sec-5",
    chapterId: "ch-25-half-angle",
    grade: "Ch 25 • Multi-Angle Arena",
    category: "Half-Angle & Weierstrass",
    title: "Half-Angle Formulas & Weierstrass Rational Substitution t = tan(θ/2)",
    tex: "$$\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}, \\quad \\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}, \\quad \\tan\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{1 + \\cos\\theta}} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}$$ $$t = \\tan\\frac{\\theta}{2} \\implies \\sin\\theta = \\frac{2t}{1 + t^2}, \\quad \\cos\\theta = \\frac{1 - t^2}{1 + t^2}, \\quad \\tan\\theta = \\frac{2t}{1 - t^2}, \\quad d\\theta = \\frac{2\\,dt}{1 + t^2}$$",
    note: "The rational forms (1 − cos θ)/sin θ and sin θ/(1 + cos θ) have NO ± sign ambiguity!"
  },

  /* ========================================================================
     SECTION 6: SUM-PRODUCT, CASCADES & CONDITIONAL IDENTITIES (Ch 26–28)
     ======================================================================== */
  {
    sectionId: "sec-6",
    chapterId: "ch-26-sum-to-product",
    grade: "Ch 26 • Multi-Angle Arena",
    category: "Sum-to-Product (C & D)",
    title: "The Four Sum-to-Product Factoring Formulas",
    tex: "$$\\sin C + \\sin D = 2\\sin\\!\\left(\\frac{C + D}{2}\\right)\\cos\\!\\left(\\frac{C - D}{2}\\right), \\qquad \\sin C - \\sin D = 2\\cos\\!\\left(\\frac{C + D}{2}\\right)\\sin\\!\\left(\\frac{C - D}{2}\\right)$$ $$\\cos C + \\cos D = 2\\cos\\!\\left(\\frac{C + D}{2}\\right)\\cos\\!\\left(\\frac{C - D}{2}\\right), \\qquad \\cos C - \\cos D = -2\\sin\\!\\left(\\frac{C + D}{2}\\right)\\sin\\!\\left(\\frac{C - D}{2}\\right)$$",
    note: "Watch the minus sign on cos C − cos D = 2 sin((C + D)/2) sin((D − C)/2)!"
  },
  {
    sectionId: "sec-6",
    chapterId: "ch-27-product-to-sum",
    grade: "Ch 27 • Multi-Angle Arena",
    category: "Product-to-Sum (2AB)",
    title: "The Four Product-to-Sum Linearization Formulas",
    tex: "$$2\\sin A\\cos B = \\sin(A + B) + \\sin(A - B), \\qquad 2\\cos A\\sin B = \\sin(A + B) - \\sin(A - B)$$ $$2\\cos A\\cos B = \\cos(A + B) + \\cos(A - B), \\qquad 2\\sin A\\sin B = \\cos(A - B) - \\cos(A + B)$$",
    note: "Essential for integrating products like ∫ sin(5x)cos(3x) dx."
  },
  {
    sectionId: "sec-6",
    chapterId: "ch-27-product-to-sum",
    grade: "Ch 27 • Multi-Angle Arena",
    category: "Cascades & AP Sums",
    title: "Doubling Cosine Cascade & Arithmetic-Progression Trig Sums",
    tex: "$$\\cos\\theta\\cos(2\\theta)\\cos(4\\theta)\\cdots\\cos(2^{n-1}\\theta) = \\frac{\\sin(2^n\\theta)}{2^n\\sin\\theta} \\qquad (\\sin\\theta \\neq 0)$$ $$\\sum_{k=0}^{n-1}\\sin(\\alpha + k\\beta) = \\frac{\\sin\\!\\left(\\frac{n\\beta}{2}\\right)}{\\sin\\!\\left(\\frac{\\beta}{2}\\right)}\\sin\\!\\left(\\alpha + \\frac{(n-1)\\beta}{2}\\right), \\qquad \\sum_{k=0}^{n-1}\\cos(\\alpha + k\\beta) = \\frac{\\sin\\!\\left(\\frac{n\\beta}{2}\\right)}{\\sin\\!\\left(\\frac{\\beta}{2}\\right)}\\cos\\!\\left(\\alpha + \\frac{(n-1)\\beta}{2}\\right)$$",
    note: "Rule: (sin(n · diff / 2) / sin(diff / 2)) × sin or cos of (average of first & last angles)."
  },
  {
    sectionId: "sec-6",
    chapterId: "ch-28-identities-transformations",
    grade: "Ch 28 • Multi-Angle Arena",
    category: "Harmonic R-Alpha Form",
    title: "Auxiliary-Angle Harmonic Synthesis (a cos θ + b sin θ)",
    tex: "$$a\\cos\\theta + b\\sin\\theta = R\\cos(\\theta - \\alpha) = R\\sin(\\theta + \\phi), \\qquad R = \\sqrt{a^2 + b^2}, \\quad \\cos\\alpha = \\frac{a}{R}, \\quad \\sin\\alpha = \\frac{b}{R}$$",
    note: "Combines a cosine and sine of the same frequency into a single phase-shifted wave of amplitude R."
  },
  {
    sectionId: "sec-6",
    chapterId: "ch-28-identities-transformations",
    grade: "Ch 28 • Multi-Angle Arena",
    category: "Conditional Identities (sin/cos)",
    title: "Conditional Identities When A + B + C = π (180°)",
    tex: "$$\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C, \\qquad \\cos 2A + \\cos 2B + \\cos 2C = -1 - 4\\cos A\\cos B\\cos C$$ $$\\sin A + \\sin B + \\sin C = 4\\cos\\frac{A}{2}\\cos\\frac{B}{2}\\cos\\frac{C}{2}, \\qquad \\cos A + \\cos B + \\cos C = 1 + 4\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}$$",
    note: "Also: sin²A + sin²B + sin²C = 2 + 2 cos A cos B cos C, and cos²A + cos²B + cos²C = 1 − 2 cos A cos B cos C."
  },
  {
    sectionId: "sec-6",
    chapterId: "ch-28-identities-transformations",
    grade: "Ch 28 • Multi-Angle Arena",
    category: "Conditional Identities (tan/cot)",
    title: "Tangent & Cotangent Conditional Identities When A + B + C = π",
    tex: "$$\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C, \\qquad \\cot A\\cot B + \\cot B\\cot C + \\cot C\\cot A = 1$$ $$\\tan\\frac{A}{2}\\tan\\frac{B}{2} + \\tan\\frac{B}{2}\\tan\\frac{C}{2} + \\tan\\frac{C}{2}\\tan\\frac{A}{2} = 1, \\qquad \\cot\\frac{A}{2} + \\cot\\frac{B}{2} + \\cot\\frac{C}{2} = \\cot\\frac{A}{2}\\cot\\frac{B}{2}\\cot\\frac{C}{2}$$",
    note: "If A + B = π/4 (45°), then (1 + tan A)(1 + tan B) = 2!"
  },

  /* ========================================================================
     SECTION 7: TRIGONOMETRIC EQUATIONS & GENERAL SOLUTIONS (Ch 29–31)
     ======================================================================== */
  {
    sectionId: "sec-7",
    chapterId: "ch-28-trig-equations",
    grade: "Ch 29 • Multi-Angle Arena",
    category: "Zeros & Extreme Roots",
    title: "Canonical Zero-Root & Extreme-Value (±1) Solution Families (n ∈ ℤ)",
    tex: "$$\\sin\\theta = 0 \\iff \\theta = n\\pi, \\qquad \\cos\\theta = 0 \\iff \\theta = (2n + 1)\\frac{\\pi}{2}, \\qquad \\tan\\theta = 0 \\iff \\theta = n\\pi$$ $$\\sin\\theta = \\pm 1 \\iff \\theta = 2n\\pi \\pm \\frac{\\pi}{2}, \\qquad \\cos\\theta = 1 \\iff \\theta = 2n\\pi, \\qquad \\cos\\theta = -1 \\iff \\theta = (2n + 1)\\pi$$",
    note: "Principal solutions are those roots lying inside [0, 2π)."
  },
  {
    sectionId: "sec-7",
    chapterId: "ch-29-general-solutions",
    grade: "Ch 30 • Multi-Angle Arena",
    category: "General Solutions",
    title: "Master General Solutions for sin, cos, tan & Squared Equations (n ∈ ℤ)",
    tex: "$$\\sin\\theta = \\sin\\alpha \\iff \\theta = n\\pi + (-1)^n\\alpha, \\qquad \\cos\\theta = \\cos\\alpha \\iff \\theta = 2n\\pi \\pm \\alpha, \\qquad \\tan\\theta = \\tan\\alpha \\iff \\theta = n\\pi + \\alpha$$ $$\\sin^2\\theta = \\sin^2\\alpha \\iff \\cos^2\\theta = \\cos^2\\alpha \\iff \\tan^2\\theta = \\tan^2\\alpha \\iff \\theta = n\\pi \\pm \\alpha$$",
    note: "Simultaneous system sin θ = sin α AND cos θ = cos α has general solution θ = 2nπ + α."
  },
  {
    sectionId: "sec-7",
    chapterId: "ch-31-solving-eq-identities",
    grade: "Ch 31 • Multi-Angle Arena",
    category: "Equation Techniques",
    title: "Linear a cos x + b sin x = c, Weierstrass & Symmetric (s ± c) Equations",
    tex: "$$a\\cos x + b\\sin x = c \\iff \\cos(x - \\alpha) = \\frac{c}{\\sqrt{a^2 + b^2}} \\quad \\left(|c| \\le \\sqrt{a^2 + b^2}\\right)$$ $$(a + c)t^2 - 2bt + (c - a) = 0 \\;\\left(t = \\tan\\tfrac{x}{2}\\right); \\qquad u = \\sin x \\pm \\cos x \\implies 2\\sin x\\cos x = \\pm(u^2 - 1)$$",
    note: "Always test x = (2n + 1)π separately in t = tan(x/2), and NEVER cancel common factors without setting them = 0!"
  },

  /* ========================================================================
     SECTION 8: PROPERTIES & SOLUTION OF OBLIQUE TRIANGLES (Ch 32)
     ======================================================================== */
  {
    sectionId: "sec-8",
    chapterId: "ch-30-oblique-laws",
    grade: "Ch 32 • Multi-Angle Arena",
    category: "Sine, Cosine & Projection",
    title: "Extended Law of Sines, Law of Cosines & Projection Formulas",
    tex: "$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$ $$a^2 = b^2 + c^2 - 2bc\\cos A \\iff \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}; \\qquad a = b\\cos C + c\\cos B$$",
    note: "Cycle (a, b, c) and (A, B, C) symmetrically for b², c², cos B, cos C, and b, c projections."
  },
  {
    sectionId: "sec-8",
    chapterId: "ch-30-oblique-laws",
    grade: "Ch 32 • Multi-Angle Arena",
    category: "Napier & Mollweide",
    title: "Napier's Analogies (Law of Tangents) & Mollweide's Formulas",
    tex: "$$\\tan\\!\\left(\\frac{B - C}{2}\\right) = \\frac{b - c}{b + c}\\cot\\!\\left(\\frac{A}{2}\\right); \\qquad \\frac{a - b}{c} = \\frac{\\sin\\!\\left(\\frac{A - B}{2}\\right)}{\\cos\\!\\left(\\frac{C}{2}\\right)}, \\qquad \\frac{a + b}{c} = \\frac{\\cos\\!\\left(\\frac{A - B}{2}\\right)}{\\sin\\!\\left(\\frac{C}{2}\\right)}$$",
    note: "Ideal for solving SAS triangles without computing intermediate side c first, and for verifying full triangle solutions."
  },
  {
    sectionId: "sec-8",
    chapterId: "ch-30-oblique-laws",
    grade: "Ch 32 • Multi-Angle Arena",
    category: "Triangle Half-Angles & Area",
    title: "Half-Angle Formulas in Terms of Sides & Heron's Area Formula",
    tex: "$$s = \\frac{a + b + c}{2}: \\quad \\sin\\frac{A}{2} = \\sqrt{\\frac{(s-b)(s-c)}{bc}}, \\quad \\cos\\frac{A}{2} = \\sqrt{\\frac{s(s-a)}{bc}}, \\quad \\tan\\frac{A}{2} = \\sqrt{\\frac{(s-b)(s-c)}{s(s-a)}} = \\frac{\\Delta}{s(s-a)}$$ $$\\Delta = \\frac{1}{2}bc\\sin A = \\sqrt{s(s-a)(s-b)(s-c)} = \\frac{abc}{4R} = rs = \\frac{a^2\\sin B\\sin C}{2\\sin A}$$",
    note: "Since A/2 ∈ (0°, 90°) in every triangle, all three half-angle radicals are strictly positive."
  },
  {
    sectionId: "sec-8",
    chapterId: "ch-30-oblique-laws",
    grade: "Ch 32 • Multi-Angle Arena",
    category: "Radii, Medians & Bisectors",
    title: "Circumradius R, Inradius r, Exradii (r₁, r₂, r₃), Medians & Bisectors",
    tex: "$$R = \\frac{abc}{4\\Delta}, \\quad r = \\frac{\\Delta}{s} = (s-a)\\tan\\frac{A}{2} = 4R\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}, \\quad r_1 = \\frac{\\Delta}{s-a} = s\\tan\\frac{A}{2}$$ $$\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{1}{r}, \\quad r_1 + r_2 + r_3 - r = 4R; \\qquad m_a = \\frac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}, \\quad l_A = \\frac{2bc\\cos(A/2)}{b + c}$$",
    note: "Euler's triangle inequality: R ≥ 2r (with equality iff ΔABC is equilateral); distance OI² = R² − 2Rr."
  },

  /* ========================================================================
     SECTION 9: INVERSE TRIGONOMETRIC FUNCTIONS (ITF) (Ch 33–39)
     ======================================================================== */
  {
    sectionId: "sec-9",
    chapterId: "ch-33-inverse-trig",
    grade: "Ch 33 • Inverse & Advanced",
    category: "ITF Foundations & Cancellation",
    title: "Bijectivity Restriction, Outer-Trig Cancellation & Asymptotes",
    tex: "$$y = f^{-1}(x) \\iff x = f(y)\\;\\text{on principal branch}; \\qquad \\sin(\\sin^{-1}x) = x,\\; \\cos(\\cos^{-1}x) = x\\;(|x|\\le 1), \\quad \\tan(\\tan^{-1}x) = x\\;(x\\in\\mathbb{R})$$ $$\\lim_{x\\to\\pm\\infty}\\tan^{-1}x = \\pm\\frac{\\pi}{2}, \\qquad \\lim_{x\\to +\\infty}\\cot^{-1}x = 0, \\qquad \\lim_{x\\to -\\infty}\\cot^{-1}x = \\pi$$",
    note: "Graph of y = f⁻¹(x) is the mirror reflection of the restricted branch of y = f(x) across the line y = x."
  },
  {
    sectionId: "sec-9",
    chapterId: "ch-34-inverse-domain-range",
    grade: "Ch 34 • Inverse & Advanced",
    category: "ITF Domain & Principal Range",
    title: "Complete Domain & Principal Value Branch Table of All 6 Inverse Functions",
    tex: "$$\\begin{array}{c|c|c} \\text{Function} & \\text{Domain} & \\text{Principal Value Range} \\\\ \\hline \\sin^{-1}x & [-1,\\; 1] & \\left[-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right] \\\\ \\cos^{-1}x & [-1,\\; 1] & [0,\\; \\pi] \\\\ \\tan^{-1}x & \\mathbb{R} = (-\\infty,\\; \\infty) & \\left(-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right) \\\\ \\cot^{-1}x & \\mathbb{R} = (-\\infty,\\; \\infty) & (0,\\; \\pi) \\\\ \\sec^{-1}x & (-\\infty,-1]\\cup[1,\\infty) & [0,\\; \\pi]\\setminus\\!\\left\\{\\frac{\\pi}{2}\\right\\} \\\\ \\operatorname{cosec}^{-1}x & (-\\infty,-1]\\cup[1,\\infty) & \\left[-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right]\\setminus\\{0\\} \\end{array}$$",
    note: "Quadratic bound on [-1, 1]: (sin⁻¹x)² + (cos⁻¹x)² ∈ [π²/8, 5π²/4]."
  },
  {
    sectionId: "sec-9",
    chapterId: "ch-35-inverse-principal-values",
    grade: "Ch 35 • Inverse & Advanced",
    category: "ITF Negative Inputs & Folding",
    title: "Two-Family Negative-Argument Law & Sawtooth Branch Folding",
    tex: "$$\\text{Family A (Odd):}\\quad \\sin^{-1}(-x) = -\\sin^{-1}x, \\quad \\tan^{-1}(-x) = -\\tan^{-1}x, \\quad \\operatorname{cosec}^{-1}(-x) = -\\operatorname{cosec}^{-1}x$$ $$\\text{Family B ($\\pi$-Shift):}\\quad \\cos^{-1}(-x) = \\pi - \\cos^{-1}x, \\quad \\cot^{-1}(-x) = \\pi - \\cot^{-1}x, \\quad \\sec^{-1}(-x) = \\pi - \\sec^{-1}x$$ $$\\sin^{-1}(\\sin x) = (-1)^n(x - n\\pi)\\;\\text{on }\\!\\left[n\\pi - \\tfrac{\\pi}{2},\\, n\\pi + \\tfrac{\\pi}{2}\\right]; \\quad \\tan^{-1}(\\tan x) = x - n\\pi\\;\\text{on }\\!\\left(n\\pi - \\tfrac{\\pi}{2},\\, n\\pi + \\tfrac{\\pi}{2}\\right)$$",
    note: "For cos⁻¹(cos x): equals (x − 2nπ) on [2nπ, (2n+1)π] and (2nπ − x) on [(2n−1)π, 2nπ]."
  },
  {
    sectionId: "sec-9",
    chapterId: "ch-36-inverse-properties",
    grade: "Ch 36 • Inverse & Advanced",
    category: "ITF Reciprocal & Co-Function",
    title: "Complementary π/2 Sums, Reciprocal Inverses & Triangle Inter-Conversion",
    tex: "$$\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}\\;(|x|\\le 1), \\qquad \\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2}\\;(x\\in\\mathbb{R}), \\qquad \\sec^{-1}x + \\operatorname{cosec}^{-1}x = \\frac{\\pi}{2}\\;(|x|\\ge 1)$$ $$\\sin^{-1}\\!\\left(\\frac{1}{x}\\right) = \\operatorname{cosec}^{-1}x, \\qquad \\cos^{-1}\\!\\left(\\frac{1}{x}\\right) = \\sec^{-1}x, \\qquad \\cot^{-1}\\!\\left(\\frac{1}{x}\\right) = \\begin{cases} \\tan^{-1}x & (x > 0) \\\\ \\pi + \\tan^{-1}x & (x < 0) \\end{cases}$$ $$\\text{For } x \\in (0,1):\\quad \\sin^{-1}x = \\cos^{-1}\\sqrt{1-x^2} = \\tan^{-1}\\!\\left(\\frac{x}{\\sqrt{1-x^2}}\\right)$$",
    note: "Watch x < 0 in cot⁻¹(1/x) = π + tan⁻¹(x) because cot⁻¹ ∈ (0, π) while tan⁻¹ ∈ (−π/2, 0)!"
  },
  {
    sectionId: "sec-9",
    chapterId: "ch-36-inverse-properties",
    grade: "Ch 36 • Inverse & Advanced",
    category: "ITF Addition & Subtraction",
    title: "Piecewise Addition & Subtraction of tan⁻¹, sin⁻¹ & cos⁻¹",
    tex: "$$\\tan^{-1}x + \\tan^{-1}y = \\begin{cases} \\tan^{-1}\\!\\left(\\frac{x+y}{1-xy}\\right) & (xy < 1) \\\\ \\pi + \\tan^{-1}\\!\\left(\\frac{x+y}{1-xy}\\right) & (x>0,\\, y>0,\\, xy>1) \\\\ -\\pi + \\tan^{-1}\\!\\left(\\frac{x+y}{1-xy}\\right) & (x<0,\\, y<0,\\, xy>1) \\end{cases}, \\qquad \\tan^{-1}x - \\tan^{-1}y = \\tan^{-1}\\!\\left(\\frac{x-y}{1+xy}\\right)\\;(xy > -1)$$ $$\\sin^{-1}x \\pm \\sin^{-1}y = \\sin^{-1}\\!\\left(x\\sqrt{1-y^2} \\pm y\\sqrt{1-x^2}\\right), \\qquad \\cos^{-1}x \\pm \\cos^{-1}y = \\cos^{-1}\\!\\left(xy \\mp \\sqrt{1-x^2}\\sqrt{1-y^2}\\right)$$",
    note: "Formula above for sin⁻¹x + sin⁻¹y holds on the principal branch when x² + y² ≤ 1 (or xy ≤ 0); for cos⁻¹x + cos⁻¹y when x + y ≥ 0."
  },
  {
    sectionId: "sec-9",
    chapterId: "ch-36-inverse-properties",
    grade: "Ch 36 • Inverse & Advanced",
    category: "Multiple-Angle ITF",
    title: "Double & Triple Inverse Trigonometric Formulas (2 tan⁻¹x, 3 sin⁻¹x, 3 cos⁻¹x, 3 tan⁻¹x)",
    tex: "$$2\\tan^{-1}x = \\tan^{-1}\\!\\left(\\frac{2x}{1-x^2}\\right)\\;(|x|<1) = \\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right)\\;(|x|\\le 1) = \\cos^{-1}\\!\\left(\\frac{1-x^2}{1+x^2}\\right)\\;(x \\ge 0)$$ $$3\\sin^{-1}x = \\sin^{-1}(3x - 4x^3)\\;\\left(|x|\\le\\tfrac{1}{2}\\right), \\quad 3\\cos^{-1}x = \\cos^{-1}(4x^3 - 3x)\\;\\left(x\\in\\left[\\tfrac{1}{2},1\\right]\\right), \\quad 3\\tan^{-1}x = \\tan^{-1}\\!\\left(\\frac{3x-x^3}{1-3x^2}\\right)\\;\\left(|x|<\\tfrac{1}{\\sqrt{3}}\\right)$$",
    note: "For x < 0: 2 tan⁻¹x = −cos⁻¹((1 − x²)/(1 + x²)); for x > 1: sin⁻¹(2x/(1 + x²)) = π − 2 tan⁻¹x."
  },
  {
    sectionId: "sec-9",
    chapterId: "ch-37-inverse-identities-equations",
    grade: "Ch 37 • Inverse & Advanced",
    category: "3-Variable ITF & Equations",
    title: "Three-Variable Conditional Inverse Identities & Extreme-Sum Equations",
    tex: "$$\\tan^{-1}x + \\tan^{-1}y + \\tan^{-1}z = \\pi \\implies x + y + z = xyz; \\qquad \\tan^{-1}x + \\tan^{-1}y + \\tan^{-1}z = \\frac{\\pi}{2} \\implies xy + yz + zx = 1$$ $$\\cos^{-1}x + \\cos^{-1}y + \\cos^{-1}z = \\pi \\implies x^2 + y^2 + z^2 + 2xyz = 1$$ $$\\sin^{-1}x + \\sin^{-1}y + \\sin^{-1}z = \\frac{3\\pi}{2} \\iff x = y = z = 1; \\qquad \\cos^{-1}x + \\cos^{-1}y + \\cos^{-1}z = 3\\pi \\iff x = y = z = -1$$",
    note: "Always substitute candidate roots back into the original inverse equation to reject extraneous branch roots!"
  },
  {
    sectionId: "sec-9",
    chapterId: "ch-38-simplification-advanced",
    grade: "Ch 38 • Inverse & Advanced",
    category: "ITF Radical Substitutions",
    title: "Canonical Radical Substitutions & Classic Inverse Simplifications",
    tex: "$$\\sqrt{a^2 - x^2} \\to x = a\\sin\\theta, \\quad \\sqrt{a^2 + x^2} \\to x = a\\tan\\theta, \\quad \\sqrt{x^2 - a^2} \\to x = a\\sec\\theta, \\quad \\sqrt{\\frac{a - x}{a + x}} \\to x = a\\cos 2\\theta$$ $$\\tan^{-1}\\!\\left(\\frac{\\sqrt{1+x^2}-1}{x}\\right) = \\frac{1}{2}\\tan^{-1}x\\;(x\\neq 0), \\qquad \\tan^{-1}\\!\\left(\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right) = \\frac{\\pi}{4} - x\\;\\left(x\\in\\left(-\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}\\right)\\right)$$",
    note: "Remember √(1 − cos x)/√(1 + cos x) = |tan(x/2)| — never drop the absolute value bars!"
  },
  {
    sectionId: "sec-9",
    chapterId: "ch-39-proof-identities-advanced",
    grade: "Ch 39 • Inverse & Advanced",
    category: "Telescoping Series & Proofs",
    title: "Telescoping Inverse/Cosecant Series, Split-Angle Proof & Machin's Formula",
    tex: "$$\\tan^{-1}\\!\\left(\\frac{A_r - A_{r-1}}{1 + A_r A_{r-1}}\\right) = \\tan^{-1}A_r - \\tan^{-1}A_{r-1}, \\qquad \\sum_{r=1}^{n}\\tan^{-1}\\!\\left(\\frac{1}{1 + r + r^2}\\right) = \\tan^{-1}(n+1) - \\frac{\\pi}{4}$$ $$\\operatorname{cosec}(2^k x) = \\cot(2^{k-1}x) - \\cot(2^k x), \\qquad \\tan 3x - \\tan 2x - \\tan x = \\tan 3x\\tan 2x\\tan x, \\qquad 4\\tan^{-1}\\frac{1}{5} - \\tan^{-1}\\frac{1}{239} = \\frac{\\pi}{4}$$",
    note: "Letting n → ∞ in ∑ tan⁻¹(1/(1 + r + r²)) yields the exact infinite sum π/2 − π/4 = π/4!"
  },

  /* ========================================================================
     SECTION 10: TRIGONOMETRIC CALCULUS & SERIES (Ch 40–41)
     ======================================================================== */
  {
    sectionId: "sec-10",
    chapterId: "ch-32-trig-calculus",
    grade: "Ch 40 • Inverse & Advanced",
    category: "Trigonometric Limits",
    title: "Fundamental Trigonometric & Inverse Limits (x in Radians!)",
    tex: "$$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1, \\quad \\lim_{x\\to 0}\\frac{\\tan x}{x} = 1, \\quad \\lim_{x\\to 0}\\frac{1 - \\cos x}{x^2} = \\frac{1}{2}, \\quad \\lim_{x\\to 0}\\frac{x - \\sin x}{x^3} = \\frac{1}{6}, \\quad \\lim_{x\\to 0}\\frac{\\tan x - \\sin x}{x^3} = \\frac{1}{2}$$ $$\\lim_{x\\to 0}\\frac{\\sin^{-1}x}{x} = 1, \\qquad \\lim_{x\\to 0}\\frac{\\tan^{-1}x}{x} = 1$$",
    note: "If x° is in degrees: lim_{x→0} (sin x°)/x = π / 180!"
  },
  {
    sectionId: "sec-10",
    chapterId: "ch-32-trig-calculus",
    grade: "Ch 40 • Inverse & Advanced",
    category: "Derivatives (Trig & ITF)",
    title: "Complete Differentiation Table of All 6 Trig & 6 Inverse Trig Functions",
    tex: "$$\\frac{d}{dx}(\\sin x) = \\cos x, \\quad \\frac{d}{dx}(\\cos x) = -\\sin x, \\quad \\frac{d}{dx}(\\tan x) = \\sec^2 x, \\quad \\frac{d}{dx}(\\cot x) = -\\operatorname{cosec}^2 x$$ $$\\frac{d}{dx}(\\sec x) = \\sec x\\tan x, \\quad \\frac{d}{dx}(\\operatorname{cosec}x) = -\\operatorname{cosec}x\\cot x$$ $$\\frac{d}{dx}(\\sin^{-1}x) = \\frac{1}{\\sqrt{1-x^2}}, \\quad \\frac{d}{dx}(\\cos^{-1}x) = -\\frac{1}{\\sqrt{1-x^2}}, \\quad \\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1+x^2}, \\quad \\frac{d}{dx}(\\cot^{-1}x) = -\\frac{1}{1+x^2}$$ $$\\frac{d}{dx}(\\sec^{-1}x) = \\frac{1}{|x|\\sqrt{x^2-1}}, \\qquad \\frac{d}{dx}(\\operatorname{cosec}^{-1}x) = -\\frac{1}{|x|\\sqrt{x^2-1}}$$",
    note: "Every 'Co-' function (cos, cot, cosec, cos⁻¹, cot⁻¹, cosec⁻¹) has a NEGATIVE derivative!"
  },
  {
    sectionId: "sec-10",
    chapterId: "ch-32-trig-calculus",
    grade: "Ch 40 • Inverse & Advanced",
    category: "Integrals & Wallis",
    title: "Standard Trigonometric & Inverse-Trig Integrals + Wallis's Formula",
    tex: "$$\\int\\sin x\\,dx = -\\cos x + C, \\quad \\int\\cos x\\,dx = \\sin x + C, \\quad \\int\\tan x\\,dx = \\ln|\\sec x| + C, \\quad \\int\\cot x\\,dx = \\ln|\\sin x| + C$$ $$\\int\\sec x\\,dx = \\ln|\\sec x + \\tan x| + C, \\qquad \\int\\operatorname{cosec}x\\,dx = \\ln|\\operatorname{cosec}x - \\cot x| + C = \\ln\\!\\left|\\tan\\frac{x}{2}\\right| + C$$ $$\\int\\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\!\\left(\\frac{x}{a}\\right) + C, \\quad \\int\\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\tan^{-1}\\!\\left(\\frac{x}{a}\\right) + C, \\quad \\int\\frac{dx}{x\\sqrt{x^2 - a^2}} = \\frac{1}{a}\\sec^{-1}\\!\\left(\\frac{|x|}{a}\\right) + C$$ $$I_n = \\int_0^{\\pi/2}\\sin^n x\\,dx = \\int_0^{\\pi/2}\\cos^n x\\,dx = \\frac{n-1}{n}\\cdot\\frac{n-3}{n-2}\\cdots \\times \\begin{cases}\\frac{\\pi}{2}&(n\\text{ even})\\\\ 1&(n\\text{ odd})\\end{cases}$$",
    note: "Also ∫ sec²x dx = tan x + C and ∫ cosec²x dx = −cot x + C."
  },
  {
    sectionId: "sec-10",
    chapterId: "ch-14-euler-spherical",
    grade: "Ch 41 • Inverse & Advanced",
    category: "Maclaurin Power Series",
    title: "Maclaurin / Taylor Series for sin, cos, tan, sin⁻¹ & tan⁻¹",
    tex: "$$\\sin x = \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots, \\qquad \\cos x = \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$ $$\\tan x = x + \\frac{x^3}{3} + \\frac{2x^5}{15} + \\cdots\\;\\left(|x|<\\tfrac{\\pi}{2}\\right), \\qquad \\tan^{-1}x = \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{2n+1} = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots\\;(|x|\\le 1)$$ $$\\sin^{-1}x = x + \\frac{1}{2}\\frac{x^3}{3} + \\frac{1\\cdot 3}{2\\cdot 4}\\frac{x^5}{5} + \\cdots\\;(|x|\\le 1)$$",
    note: "Setting x = 1 in tan⁻¹x gives Leibniz's π/4 = 1 − 1/3 + 1/5 − 1/7 + ⋯."
  },

  /* ========================================================================
     SECTION 11: COMPLEX, EULER, HYPERBOLIC & SPHERICAL TRIG (Ch 41)
     ======================================================================== */
  {
    sectionId: "sec-11",
    chapterId: "ch-14-euler-spherical",
    grade: "Ch 41 • Inverse & Advanced",
    category: "Euler & De Moivre",
    title: "Euler's Formula, Complex Definitions, De Moivre's Theorem & Roots of Unity",
    tex: "$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta, \\qquad e^{i\\pi} + 1 = 0, \\qquad \\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}, \\qquad \\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$$ $$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta), \\qquad z^n = re^{i\\theta} \\implies z_k = r^{1/n}e^{i(\\theta + 2\\pi k)/n}\\;(k = 0,\\dots,n-1)$$",
    note: "For n ≥ 2, the n-th roots of unity ω^k = e^{i2πk/n} satisfy 1 + ω + ω² + ⋯ + ω^{n−1} = 0."
  },
  {
    sectionId: "sec-11",
    chapterId: "ch-14-euler-spherical",
    grade: "Ch 41 • Inverse & Advanced",
    category: "Hyperbolic & Complex Bridge",
    title: "Hyperbolic Functions, Inverse Hyperbolics & Complex-Trig Bridge",
    tex: "$$\\cosh x = \\frac{e^x + e^{-x}}{2}, \\quad \\sinh x = \\frac{e^x - e^{-x}}{2}, \\quad \\tanh x = \\frac{\\sinh x}{\\cosh x}, \\quad \\cosh^2 x - \\sinh^2 x = 1$$ $$\\sinh 2x = 2\\sinh x\\cosh x, \\quad \\cosh 2x = \\cosh^2 x + \\sinh^2 x; \\qquad \\sinh^{-1}x = \\ln\\!\\left(x + \\sqrt{x^2+1}\\right), \\quad \\tanh^{-1}x = \\frac{1}{2}\\ln\\!\\left(\\frac{1+x}{1-x}\\right)$$ $$\\cos(iz) = \\cosh z, \\quad \\sin(iz) = i\\sinh z, \\quad |\\sin(x + iy)|^2 = \\sin^2 x + \\sinh^2 y, \\quad |\\cos(x + iy)|^2 = \\cos^2 x + \\sinh^2 y$$",
    note: "Osborn's Rule: replace every product of two sines (sin A sin B) with −sinh A sinh B to convert circular to hyperbolic identities."
  },
  {
    sectionId: "sec-11",
    chapterId: "ch-14-euler-spherical",
    grade: "Ch 41 • Inverse & Advanced",
    category: "Spherical & Geodesic Trig",
    title: "Spherical Laws of Cosines & Sines, Girard's Excess & GPS Haversine",
    tex: "$$\\cos c = \\cos a\\cos b + \\sin a\\sin b\\cos C, \\qquad \\cos C = -\\cos A\\cos B + \\sin A\\sin B\\cos c, \\qquad \\frac{\\sin a}{\\sin A} = \\frac{\\sin b}{\\sin B} = \\frac{\\sin c}{\\sin C}$$ $$\\text{Area}_{\\text{spherical}} = R^2(A + B + C - \\pi), \\qquad \\operatorname{hav}\\!\\left(\\frac{d}{R}\\right) = \\operatorname{hav}(\\Delta\\phi) + \\cos\\phi_1\\cos\\phi_2\\operatorname{hav}(\\Delta\\lambda)\\;\\left(\\operatorname{hav}\\theta = \\sin^2\\frac{\\theta}{2}\\right)$$",
    note: "When C = 90° on a unit sphere: cos c = cos a cos b (Spherical Pythagoras!)."
  },

  /* ========================================================================
     SECTION 12: FOURIER, INFINITE PRODUCTS, CHEBYSHEV & LIE GROUPS (Ch 42–44)
     ======================================================================== */
  {
    sectionId: "sec-12",
    chapterId: "ch-15-fourier",
    grade: "Ch 42 • Inverse & Advanced",
    category: "Fourier & Parseval",
    title: "L²[-π, π] Orthogonality, Fourier Series & Parseval's Energy Identity",
    tex: "$$\\int_{-\\pi}^{\\pi}\\cos(mx)\\cos(nx)\\,dx = \\pi\\delta_{mn}, \\quad \\int_{-\\pi}^{\\pi}\\sin(mx)\\sin(nx)\\,dx = \\pi\\delta_{mn}, \\quad \\int_{-\\pi}^{\\pi}\\sin(mx)\\cos(nx)\\,dx = 0$$ $$f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}(a_n\\cos nx + b_n\\sin nx), \\qquad a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}f(x)\\cos nx\\,dx, \\quad b_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}f(x)\\sin nx\\,dx$$ $$\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|f(x)|^2\\,dx = \\frac{a_0^2}{4} + \\frac{1}{2}\\sum_{n=1}^{\\infty}(a_n^2 + b_n^2) = \\sum_{n=-\\infty}^{\\infty}|c_n|^2$$",
    note: "Even f(−x) = f(x) ⟹ all b_n = 0; Odd f(−x) = −f(x) ⟹ a_0 = 0 and all a_n = 0."
  },
  {
    sectionId: "sec-12",
    chapterId: "ch-16-complex-lie",
    grade: "Ch 43 • Inverse & Advanced",
    category: "Infinite Products & Gamma",
    title: "Euler–Weierstrass Sine Product, Partial Fractions, Basel ζ(2) & Gamma Reflection",
    tex: "$$\\frac{\\sin(\\pi z)}{\\pi z} = \\prod_{n=1}^{\\infty}\\left(1 - \\frac{z^2}{n^2}\\right), \\qquad \\pi\\cot(\\pi z) = \\frac{1}{z} + \\sum_{n=1}^{\\infty}\\frac{2z}{z^2 - n^2}$$ $$\\zeta(2) = \\sum_{n=1}^{\\infty}\\frac{1}{n^2} = \\frac{\\pi^2}{6}, \\qquad \\zeta(4) = \\sum_{n=1}^{\\infty}\\frac{1}{n^4} = \\frac{\\pi^4}{90}, \\qquad \\Gamma(z)\\Gamma(1 - z) = \\frac{\\pi}{\\sin(\\pi z)}$$",
    note: "Setting z = 1/2 in the sine product yields Wallis's infinite product π/2 = ∏ (4n² / (4n² − 1)), and Γ(1/2) = √π."
  },
  {
    sectionId: "sec-12",
    chapterId: "ch-16-complex-lie",
    grade: "Ch 43 • Inverse & Advanced",
    category: "Chebyshev & Lie Groups",
    title: "Chebyshev Polynomials (Tn, Un) & Continuous Rotation Lie Groups SO(2) / SO(3)",
    tex: "$$T_n(\\cos\\theta) = \\cos(n\\theta), \\qquad U_{n-1}(\\cos\\theta) = \\frac{\\sin(n\\theta)}{\\sin\\theta}, \\qquad T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$$ $$R(\\theta) = \\exp\\!\\begin{pmatrix}0 & -\\theta\\\\ \\theta & 0\\end{pmatrix} = \\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix} \\in SO(2), \\qquad R(\\hat{u},\\theta) = I + (\\sin\\theta)K + (1 - \\cos\\theta)K^2 \\in SO(3)$$",
    note: "Rodrigues' formula R(û, θ) rotates 3D space around unit axis û using skew-symmetric cross-product matrix K."
  },
  {
    sectionId: "sec-12",
    chapterId: "ch-44-grand-summary",
    grade: "Ch 44 • Master Summary",
    category: "Grand Unification Bridge",
    title: "Beginning-to-End Master Trigonometry Unification Chain (Ch 1 → Ch 44)",
    tex: "$$\\frac{P^2 + B^2}{H^2} = 1 \\;\\Longleftrightarrow\\; \\cos^2\\theta + \\sin^2\\theta = 1 \\;\\Longleftrightarrow\\; e^{i\\theta}e^{-i\\theta} = 1 \\;\\Longleftrightarrow\\; \\det R(\\theta) = 1$$ $$\\text{Radian Rule: } \\theta = \\frac{l}{r} \\implies \\frac{d}{d\\theta}(\\sin\\theta) = \\cos\\theta \\implies e^{i\\theta} = \\sum_{n=0}^{\\infty}\\frac{(i\\theta)^n}{n!} = \\cos\\theta + i\\sin\\theta$$",
    note: "Every trigonometry formula from right triangles to Fourier waves, calculus, and Lie groups flows from one circle x² + y² = 1!"
  }
];
