/* ==========================================================================
   MathsVerse (Easy & Friendly) — 12-Category Cosmic Start Portal & Previews
   ========================================================================== */

(function () {
  const MATH_VERSES = [
    {
      id: "trigverse",
      verseName: "TrigVerse",
      subject: "Trigonometry",
      subtitle: "Angle • Identity • Ratio",
      aliases: "trigverse trig trigonometry angle identity ratio sine cosine tangent radians triangles",
      categoryLabel: "Space, Angles & Waves • 44 Live Chapters",
      isLive: true,
      glyph: "📐",
      symbolBadge: "sin θ • cos θ • tan θ",
      accent: "#a855f7",
      accentSoft: "rgba(168, 85, 247, 0.28)",
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mvg-trig" x1="8" y1="54" x2="56" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="55%" stop-color="#a855f7"/>
            <stop offset="100%" stop-color="#e879f9"/>
          </linearGradient>
        </defs>
        <polygon points="10,52 54,52 54,12" stroke="url(#mvg-trig)" stroke-width="3.6" stroke-linejoin="round" fill="rgba(168,85,247,0.12)"/>
        <polyline points="44,52 44,42 54,42" stroke="#38bdf8" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M 24 52 A 14 14 0 0 0 20 43" stroke="#e879f9" stroke-width="2.6" stroke-linecap="round"/>
        <line x1="29" y1="30" x2="34" y2="35" stroke="#c084fc" stroke-width="2.4" stroke-linecap="round"/>
      </svg>`,
      tagline:
        "Complete 44-Chapter Interactive RPG Quest, Beginning-to-End Formula Vault, 200 Bilingual Video Lectures (EN & اردو), 14 Touch Canvas Labs & Triangle Solver."
    },
    {
      id: "arithmetic",
      verseName: "ArithVerse",
      subject: "Arithmetic",
      subtitle: "Numbers • Operations",
      aliases: "arithematic arithmetic numbers operations fractions decimals percentages ratios proportions bodmas pemdas",
      categoryLabel: "Numbers & Operations • 36 Live Chapters",
      isLive: true,
      glyph: "🧮",
      symbolBadge: "± × ÷ %",
      accent: "#ec4899",
      accentSoft: "rgba(236, 72, 153, 0.28)",
      plannedChapters: 36,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mvg-arith" x1="14" y1="8" x2="50" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#60a5fa"/>
            <stop offset="55%" stop-color="#a855f7"/>
            <stop offset="100%" stop-color="#c084fc"/>
          </linearGradient>
        </defs>
        <rect x="15" y="9" width="34" height="46" rx="7" stroke="url(#mvg-arith)" stroke-width="3.4" fill="rgba(139,92,246,0.14)"/>
        <rect x="21" y="15" width="22" height="10" rx="2.5" fill="rgba(56,189,248,0.25)" stroke="#60a5fa" stroke-width="2.2"/>
        <circle cx="23.5" cy="33.5" r="2.6" fill="#c084fc"/>
        <circle cx="32" cy="33.5" r="2.6" fill="#c084fc"/>
        <circle cx="40.5" cy="33.5" r="2.6" fill="#38bdf8"/>
        <circle cx="23.5" cy="41.5" r="2.6" fill="#c084fc"/>
        <circle cx="32" cy="41.5" r="2.6" fill="#c084fc"/>
        <circle cx="40.5" cy="41.5" r="2.6" fill="#38bdf8"/>
        <circle cx="23.5" cy="49" r="2.4" fill="#c084fc"/>
        <rect x="30" y="46.8" width="13" height="4.4" rx="2.2" fill="#e879f9"/>
      </svg>`,
      tagline:
        "Easy & friendly mastery of whole numbers, fractions, decimals, ratios, proportions, percentages, exponents, surds, and fast mental calculation.",
      pillars: [
        "1. Whole Numbers, Integers & Order of Operations (BODMAS / PEMDAS)",
        "2. Fractions, Mixed Numbers, Decimals & Recurring Conversions",
        "3. Ratios, Direct/Inverse Proportions & Unitary Rates",
        "4. Percentages, Profit/Loss, Simple & Compound Interest",
        "5. Laws of Exponents, Scientific Notation & Square/Cube Roots",
        "6. Surds, Rationalization & Mental Speed Arithmetic"
      ],
      formulas: [
        { name: "Proportion Cross-Product", tex: "$$\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc \\quad (b,d \\neq 0)$$" },
        { name: "Percentage Change", tex: "$$\\text{\\% Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100\\%$$" },
        { name: "Laws of Exponents", tex: "$$a^m \\cdot a^n = a^{m+n}, \\qquad \\frac{a^m}{a^n} = a^{m-n}, \\qquad (a^m)^n = a^{mn}$$" },
        { name: "Compound Growth / Interest", tex: "$$A = P\\left(1 + \\frac{r}{100n}\\right)^{nt}$$" }
      ]
    },
    {
      id: "number-theory",
      verseName: "NumVerse",
      subject: "Number Theory",
      subtitle: "Primes • Divisibility",
      aliases: "number theory primes divisibility gcd lcm modular arithmetic congruences euler fermat diophantine",
      categoryLabel: "Primes & Integers",
      isLive: false,
      glyph: "ℕ",
      symbolBadge: "a ≡ b (mod m)",
      accent: "#a855f7",
      accentSoft: "rgba(168, 85, 247, 0.25)",
      plannedChapters: 26,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mvg-num" x1="14" y1="12" x2="50" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#c084fc"/>
            <stop offset="50%" stop-color="#a855f7"/>
            <stop offset="100%" stop-color="#38bdf8"/>
          </linearGradient>
        </defs>
        <path d="M18 50V14H26L42 40V14H47V50H39L23 24V50H18Z" stroke="url(#mvg-num)" stroke-width="3.2" fill="rgba(168,85,247,0.2)" stroke-linejoin="round"/>
        <line x1="15" y1="14" x2="29" y2="14" stroke="#e879f9" stroke-width="2.6" stroke-linecap="round"/>
        <line x1="15" y1="50" x2="25" y2="50" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round"/>
        <line x1="40" y1="14" x2="50" y2="14" stroke="#e879f9" stroke-width="2.6" stroke-linecap="round"/>
      </svg>`,
      tagline:
        "Discover primes, divisibility shortcuts, Euclidean GCD & LCM, modular clock arithmetic, Fermat/Euler theorems, and Diophantine puzzles.",
      pillars: [
        "1. Divisibility Rules, Prime Sieves & Fundamental Theorem of Arithmetic",
        "2. Euclidean Algorithm, GCD, LCM & Bézout's Identity",
        "3. Modular Arithmetic, Residue Classes & Linear Congruences",
        "4. Chinese Remainder Theorem & Systems of Congruences",
        "5. Fermat's Little Theorem, Wilson's Theorem & Euler's Totient φ(n)",
        "6. Linear Diophantine Equations & Cryptographic Foundations"
      ],
      formulas: [
        { name: "GCD–LCM Product Identity", tex: "$$\\gcd(a, b) \\cdot \\operatorname{lcm}(a, b) = |a \\cdot b|$$" },
        { name: "Bézout's Linear Identity", tex: "$$ax + by = \\gcd(a, b) \\quad (x, y \\in \\mathbb{Z})$$" },
        { name: "Fermat's Little Theorem", tex: "$$a^{p-1} \\equiv 1 \\pmod{p} \\quad (p \\text{ prime},\\; p \\nmid a)$$" },
        { name: "Euler's Totient Formula", tex: "$$\\varphi(n) = n \\prod_{p \\mid n}\\left(1 - \\frac{1}{p}\\right), \\qquad a^{\\varphi(n)} \\equiv 1 \\pmod{n}$$" }
      ]
    },
    {
      id: "algebra",
      verseName: "AlgeVerse",
      subject: "Algebra",
      subtitle: "Expressions • Equations",
      aliases: "algebra expressions equations polynomials quadratic linear inequalities sequences series progressions binomial",
      categoryLabel: "Expressions & Equations",
      isLive: false,
      glyph: "𝑥",
      symbolBadge: "ax² + bx + c = 0",
      accent: "#c084fc",
      accentSoft: "rgba(192, 132, 252, 0.25)",
      plannedChapters: 38,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mvg-alg" x1="14" y1="14" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#e879f9"/>
            <stop offset="55%" stop-color="#a855f7"/>
            <stop offset="100%" stop-color="#60a5fa"/>
          </linearGradient>
        </defs>
        <path d="M18 22C22 16 27 17 30 25L34 39C37 47 42 48 46 42" stroke="url(#mvg-alg)" stroke-width="4.6" stroke-linecap="round"/>
        <path d="M45 20C39 20 25 44 19 44" stroke="url(#mvg-alg)" stroke-width="4.6" stroke-linecap="round"/>
      </svg>`,
      tagline:
        "Step-by-step mastery of algebraic expressions, factoring, linear & quadratic equations, inequalities, sequences & series, and the binomial theorem.",
      pillars: [
        "1. Algebraic Identities, Factorization & Rational Expressions",
        "2. Linear Systems, Quadratic Equations, Discriminant & Vieta's Formulas",
        "3. Polynomials, Remainder/Factor Theorems & Partial Fractions",
        "4. Linear, Quadratic, Rational & Absolute-Value Inequalities",
        "5. Arithmetic, Geometric & Harmonic Progressions + Infinite Series",
        "6. Binomial Theorem, Complex Numbers & Mathematical Induction"
      ],
      formulas: [
        { name: "Quadratic Formula & Discriminant", tex: "$$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}, \\qquad \\Delta = b^2 - 4ac$$" },
        { name: "Vieta's Root Relations", tex: "$$\\alpha + \\beta = -\\frac{b}{a}, \\qquad \\alpha\\beta = \\frac{c}{a}$$" },
        { name: "Arithmetic & Geometric Series", tex: "$$S_n^{\\text{AP}} = \\frac{n}{2}[2a + (n-1)d], \\qquad S_n^{\\text{GP}} = \\frac{a(1 - r^n)}{1 - r}$$" },
        { name: "Binomial Expansion", tex: "$$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$$" }
      ]
    },
    {
      id: "vectors",
      verseName: "VectorVerse",
      subject: "Vectors",
      subtitle: "Magnitude • Direction",
      aliases: "vectors vector magnitude direction dot product cross product projection 2d 3d unit vector",
      categoryLabel: "Magnitude & Direction",
      isLive: false,
      glyph: "🧭",
      symbolBadge: "a⃗ · b⃗  |  a⃗ × b⃗",
      accent: "#38bdf8",
      accentSoft: "rgba(56, 189, 248, 0.25)",
      plannedChapters: 24,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mvg-vec" x1="10" y1="44" x2="54" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="60%" stop-color="#818cf8"/>
            <stop offset="100%" stop-color="#e879f9"/>
          </linearGradient>
        </defs>
        <line x1="12" y1="42" x2="49" y2="19" stroke="url(#mvg-vec)" stroke-width="3.6" stroke-linecap="round"/>
        <polyline points="39,17 50,18 45,28" stroke="#38bdf8" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="12" y1="42" x2="51" y2="42" stroke="url(#mvg-vec)" stroke-width="3.6" stroke-linecap="round"/>
        <polyline points="42,35 52,42 42,49" stroke="#c084fc" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="42" r="3.4" fill="#38bdf8"/>
      </svg>`,
      tagline:
        "Visualize 2D & 3D vectors effortlessly: magnitude, direction cosines, unit vectors, dot & cross products, projections, and lines & planes in space.",
      pillars: [
        "1. Scalars vs Vectors, Position Vectors, Magnitude & Unit Vectors",
        "2. Vector Addition (Triangle & Parallelogram Laws) & Section Formula",
        "3. Direction Ratios, Direction Cosines & Collinearity in 3D",
        "4. Scalar (Dot) Product, Orthogonality & Vector Projections",
        "5. Vector (Cross) Product, Area of Parallelogram/Triangle & Torque",
        "6. Scalar/Vector Triple Products & Equations of 3D Lines and Planes"
      ],
      formulas: [
        { name: "3D Magnitude & Unit Vector", tex: "$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2}, \\qquad \\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|}$$" },
        { name: "Scalar (Dot) Product", tex: "$$\\vec{a}\\cdot\\vec{b} = a_xb_x + a_yb_y + a_zb_z = |\\vec{a}||\\vec{b}|\\cos\\theta$$" },
        { name: "Vector (Cross) Product Magnitude", tex: "$$|\\vec{a}\\times\\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta, \\qquad \\text{Proj}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$$" },
        { name: "Direction Cosines Identity", tex: "$$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$$" }
      ]
    },
    {
      id: "sets-and-logic",
      verseName: "LogicVerse",
      subject: "Set & Logics",
      subtitle: "Sets • Logic • Proofs",
      aliases: "set and logic set and logics sets logic proofs venn diagrams boolean truth tables propositions quantifiers de morgan",
      categoryLabel: "Sets, Logic & Proofs",
      isLive: false,
      glyph: " Venn ",
      symbolBadge: "A ∪ B • p ⇒ q",
      accent: "#c084fc",
      accentSoft: "rgba(192, 132, 252, 0.25)",
      plannedChapters: 22,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="25" cy="32" r="15" stroke="#60a5fa" stroke-width="3.4" fill="rgba(56,189,248,0.14)"/>
        <circle cx="39" cy="32" r="15" stroke="#e879f9" stroke-width="3.4" fill="rgba(232,121,249,0.14)"/>
        <path d="M32 19.2A15 15 0 0 1 32 44.8A15 15 0 0 1 32 19.2Z" fill="rgba(168,85,247,0.38)"/>
      </svg>`,
      tagline:
        "Think like a mathematician with set operations, Venn diagrams, truth tables, De Morgan's laws, logical equivalences, quantifiers, and clean proofs.",
      pillars: [
        "1. Set Builder Notation, Subsets, Power Sets & Universal Sets",
        "2. Union, Intersection, Difference, Symmetric Difference & Venn Diagrams",
        "3. De Morgan's Laws, Cardinality & Inclusion–Exclusion Principle",
        "4. Propositions, Truth Tables, Conjunction, Disjunction & Implication",
        "5. Tautologies, Contrapositive, Converse & Logical Equivalences",
        "6. Universal/Existential Quantifiers (∀, ∃) & Direct/Contradiction Proofs"
      ],
      formulas: [
        { name: "Inclusion–Exclusion (2 Sets)", tex: "$$|A \\cup B| = |A| + |B| - |A \\cap B|$$" },
        { name: "De Morgan's Set & Logic Laws", tex: "$$(A \\cup B)' = A' \\cap B', \\qquad \\neg(p \\land q) \\equiv (\\neg p) \\lor (\\neg q)$$" },
        { name: "Power Set & Cartesian Size", tex: "$$|\\mathcal{P}(A)| = 2^{|A|}, \\qquad |A \\times B| = |A| \\cdot |B|$$" },
        { name: "Implication & Contrapositive", tex: "$$(p \\Rightarrow q) \\equiv (\\neg p \\lor q) \\equiv (\\neg q \\Rightarrow \\neg p)$$" }
      ]
    },
    {
      id: "geometry",
      verseName: "GeoVerse",
      subject: "Geometry",
      subtitle: "Shapes • Theorems",
      aliases: "geometry shapes theorems triangles circles polygons congruence similarity coordinate geometry conic sections",
      categoryLabel: "Shapes & Theorems",
      isLive: false,
      glyph: "💠",
      symbolBadge: "△ • ◯ • (x, y)",
      accent: "#60a5fa",
      accentSoft: "rgba(96, 165, 250, 0.25)",
      plannedChapters: 34,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mvg-geo" x1="16" y1="10" x2="48" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#93c5fd"/>
            <stop offset="55%" stop-color="#818cf8"/>
            <stop offset="100%" stop-color="#c084fc"/>
          </linearGradient>
        </defs>
        <line x1="32" y1="8" x2="32" y2="14" stroke="#93c5fd" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="32" cy="17" r="4.2" stroke="#60a5fa" stroke-width="3" fill="rgba(96,165,250,0.2)"/>
        <line x1="29.5" y1="20.5" x2="17" y2="53" stroke="url(#mvg-geo)" stroke-width="3.6" stroke-linecap="round"/>
        <line x1="34.5" y1="20.5" x2="47" y2="53" stroke="url(#mvg-geo)" stroke-width="3.6" stroke-linecap="round"/>
        <path d="M21 38 Q32 43 43 38" stroke="#38bdf8" stroke-width="2.6" stroke-linecap="round"/>
      </svg>`,
      tagline:
        "Visual and intuitive Euclidean shapes, angle & circle theorems, triangle similarity, polygons, coordinate lines, and conic sections.",
      pillars: [
        "1. Lines, Parallel Transversals, Polygons & Interior/Exterior Angles",
        "2. Triangle Congruence, Similarity, Thales Theorem & Triangle Centers",
        "3. Circle Chords, Tangents, Cyclic Quadrilaterals & Inscribed Angles",
        "4. Cartesian Distance, Midpoint, Section Formula & Triangle Area",
        "5. Straight Line Slopes, Intercepts, Normal Forms & Angle Between Lines",
        "6. Analytical Circles & Conic Sections (Parabola, Ellipse, Hyperbola)"
      ],
      formulas: [
        { name: "Polygon Interior Angle Sum", tex: "$$S_{\\text{int}} = (n - 2) \\times 180^\\circ, \\qquad \\text{Regular Angle} = \\frac{(n-2)180^\\circ}{n}$$" },
        { name: "Distance & Midpoint", tex: "$$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}, \\qquad M = \\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$$" },
        { name: "Point-to-Line Distance", tex: "$$D = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$$" },
        { name: "Circle & Ellipse Equations", tex: "$$(x-h)^2 + (y-k)^2 = r^2, \\qquad \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$" }
      ]
    },
    {
      id: "mensuration",
      verseName: "MensuraVerse",
      subject: "Mensuration",
      subtitle: "Area • Volume",
      aliases: "mensuration area volume perimeter surface area heron cylinder cone sphere prism pyramid frustum sector",
      categoryLabel: "2D Area & 3D Volume",
      isLive: false,
      glyph: "🧊",
      symbolBadge: "A = πr² • V = ⁴⁄₃πr³",
      accent: "#38bdf8",
      accentSoft: "rgba(56, 189, 248, 0.25)",
      plannedChapters: 24,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <polygon points="32,10 52,21 52,43 32,54 12,43 12,21" stroke="#38bdf8" stroke-width="3.2" stroke-linejoin="round" fill="rgba(56,189,248,0.12)"/>
        <polyline points="12,21 32,32 52,21" stroke="#818cf8" stroke-width="2.8" stroke-linejoin="round"/>
        <line x1="32" y1="32" x2="32" y2="54" stroke="#c084fc" stroke-width="2.8" stroke-linecap="round"/>
      </svg>`,
      tagline:
        "Master perimeters, 2D areas, Heron's formula, circular sectors, surface areas, and 3D volumes of cubes, cylinders, cones, spheres, and frustums.",
      pillars: [
        "1. Triangles, Heron's Formula, Quadrilaterals, Trapezoids & Regular Polygons",
        "2. Circles, Arc Length, Sectors, Segments & Annulus Rings",
        "3. Cubes, Cuboids, Right Prisms & Euler's Polyhedral Formula",
        "4. Right Circular Cylinders & Hollow Cylindrical Pipes",
        "5. Cones, Pyramids, Slant Height & Frustum of a Cone",
        "6. Spheres, Hemispheres, Composite Solids & Volume Conversions"
      ],
      formulas: [
        { name: "Heron's Triangle Area", tex: "$$A = \\sqrt{s(s-a)(s-b)(s-c)}, \\qquad s = \\frac{a+b+c}{2}$$" },
        { name: "Circular Arc & Sector (Radians)", tex: "$$L = r\\theta, \\qquad A_{\\text{sector}} = \\frac{1}{2}r^2\\theta$$" },
        { name: "Cylinder & Cone", tex: "$$V_{\\text{cyl}} = \\pi r^2 h, \\qquad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h, \\qquad \\text{CSA}_{\\text{cone}} = \\pi r l$$" },
        { name: "Sphere Surface & Volume", tex: "$$\\text{TSA}_{\\text{sphere}} = 4\\pi r^2, \\qquad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3$$" }
      ]
    },
    {
      id: "functions",
      verseName: "FuncVerse",
      subject: "Functions",
      subtitle: "Mappings • Graphs",
      aliases: "fuctions functions mappings graphs domain range injective surjective bijective inverse composition logarithms exponential",
      categoryLabel: "Mappings & Graphs",
      isLive: false,
      glyph: "ƒ(x)",
      symbolBadge: "y = f(x) • f⁻¹(x)",
      accent: "#e879f9",
      accentSoft: "rgba(232, 121, 249, 0.25)",
      plannedChapters: 28,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 84 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mvg-fn" x1="8" y1="12" x2="76" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#f0abfc"/>
            <stop offset="55%" stop-color="#c084fc"/>
            <stop offset="100%" stop-color="#60a5fa"/>
          </linearGradient>
        </defs>
        <text x="42" y="44" text-anchor="middle" fill="url(#mvg-fn)" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-weight="700" font-size="34">f(x)</text>
      </svg>`,
      tagline:
        "Understand domain & range, injective/surjective mappings, composite & inverse functions, graph transformations, and log/exponential curves.",
      pillars: [
        "1. Relations vs Functions, Vertical Line Test, Natural Domain & Range",
        "2. Injective (1–1), Surjective (Onto) & Bijective Functions",
        "3. Algebra of Functions, Composition (f ∘ g) & Invertibility Criteria",
        "4. Even/Odd Symmetry, Periodicity & Piecewise/Modulus/Floor Functions",
        "5. Graph Transformations: Shifts, Reflections & Vertical/Horizontal Scaling",
        "6. Exponential, Logarithmic & Hyperbolic Function Families"
      ],
      formulas: [
        { name: "Composition & Inverse Identity", tex: "$$(f \\circ g)(x) = f(g(x)), \\qquad f(f^{-1}(y)) = y,\\quad f^{-1}(f(x)) = x$$" },
        { name: "Even & Odd Symmetry", tex: "$$\\text{Even: } f(-x) = f(x), \\qquad \\text{Odd: } f(-x) = -f(x)$$" },
        { name: "Logarithm Laws", tex: "$$\\log_b(xy) = \\log_b x + \\log_b y, \\qquad \\log_b x = \\frac{\\ln x}{\\ln b}$$" },
        { name: "Affine Graph Transformation", tex: "$$y = a\\,f(b(x - h)) + k$$" }
      ]
    },
    {
      id: "matrices-and-determinants",
      verseName: "MatrixVerse",
      subject: "Matrices & Determinants",
      subtitle: "Matrices • Determinants",
      aliases: "matrices and determinants matrix determinant linear algebra inverse adjoint cofactor cramer eigenvalues",
      categoryLabel: "Linear Algebra",
      isLive: false,
      glyph: "[A]",
      symbolBadge: "det(A) • A⁻¹",
      accent: "#818cf8",
      accentSoft: "rgba(129, 140, 248, 0.25)",
      plannedChapters: 26,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 84 64" fill="none" aria-hidden="true">
        <path d="M19 12H12V52H19" stroke="#93c5fd" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M65 12H72V52H65" stroke="#c084fc" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="30" y="28" text-anchor="middle" fill="#e0e7ff" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="19">a</text>
        <text x="54" y="28" text-anchor="middle" fill="#c4b5fd" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="19">b</text>
        <text x="30" y="47" text-anchor="middle" fill="#93c5fd" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="19">c</text>
        <text x="54" y="47" text-anchor="middle" fill="#f0abfc" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="19">d</text>
      </svg>`,
      tagline:
        "Master matrix operations, determinants, minors & cofactors, adjoints, inverse matrices, Cramer's rule, linear systems, and eigenvalues.",
      pillars: [
        "1. Matrix Types, Trace, Transpose, Symmetric & Skew-Symmetric Matrices",
        "2. Matrix Addition, Scalar Scaling & Row-by-Column Multiplication",
        "3. Determinants of 2×2 & 3×3 Matrices, Sarrus & Row-Operation Properties",
        "4. Minors, Cofactors, Adjoint Matrix & Non-Singular Inverse A⁻¹",
        "5. Solving Linear Systems AX = B via Matrix Inverse, Cramer's Rule & Gauss-Jordan",
        "6. Matrix Rank, Consistency & Introduction to Eigenvalues (det(A − λI) = 0)"
      ],
      formulas: [
        { name: "2×2 Determinant & Inverse", tex: "$$A = \\begin{bmatrix}a & b\\\\c & d\\end{bmatrix} \\implies \\det(A)=ad-bc,\\quad A^{-1}=\\frac{1}{ad-bc}\\begin{bmatrix}d & -b\\\\-c & a\\end{bmatrix}$$" },
        { name: "Adjoint & Inverse Theorem", tex: "$$A \\cdot \\operatorname{adj}(A) = \\det(A)\\,I_n, \\qquad A^{-1} = \\frac{\\operatorname{adj}(A)}{\\det(A)}$$" },
        { name: "Transpose & Determinant Product", tex: "$$(AB)^T = B^T A^T, \\qquad \\det(AB) = \\det(A)\\det(B)$$" },
        { name: "Characteristic Eigenvalue Equation", tex: "$$\\det(A - \\lambda I) = 0$$" }
      ]
    },
    {
      id: "calculus",
      verseName: "CalcVerse",
      subject: "Calculus",
      subtitle: "Limits • Derivatives • Integrals",
      aliases: "calcus calculus limits derivatives integrals continuity differentiation integration differential equations",
      categoryLabel: "Limits, Derivatives & Integrals",
      isLive: false,
      glyph: "∫",
      symbolBadge: "d/dx • ∫ f(x) dx",
      accent: "#c084fc",
      accentSoft: "rgba(192, 132, 252, 0.25)",
      plannedChapters: 42,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="mvg-calc" x1="22" y1="8" x2="42" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#f0abfc"/>
            <stop offset="50%" stop-color="#a855f7"/>
            <stop offset="100%" stop-color="#38bdf8"/>
          </linearGradient>
        </defs>
        <path d="M41 13C41 9.5 36.5 8 34 11C31.5 14 32 22 32 32C32 42 32.5 50 30 53C27.5 56 23 54.5 23 51" stroke="url(#mvg-calc)" stroke-width="4.4" stroke-linecap="round"/>
      </svg>`,
      tagline:
        "Friendly visual guide to limits, continuity, derivatives, chain/product rules, maxima & minima, definite/indefinite integrals, and differential equations.",
      pillars: [
        "1. Limits, Indeterminate Forms, L'Hôpital's Rule & Continuity",
        "2. First Principles Derivative, Power, Product, Quotient & Chain Rules",
        "3. Implicit, Logarithmic, Parametric & Higher-Order Differentiation",
        "4. Tangents, Normals, Monotonicity, Maxima/Minima & Related Rates",
        "5. Antiderivatives, Substitution, Integration by Parts & Partial Fractions",
        "6. Fundamental Theorem of Calculus, Area Between Curves & First-Order ODEs"
      ],
      formulas: [
        { name: "Limit Definition of Derivative", tex: "$$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$" },
        { name: "Product & Chain Rules", tex: "$$(uv)' = u'v + uv', \\qquad \\frac{d}{dx}[f(g(x))] = f'(g(x))\\cdot g'(x)$$" },
        { name: "Fundamental Theorem of Calculus", tex: "$$\\int_a^b f(x)\\,dx = F(b) - F(a) \\quad \\text{where } F'(x) = f(x)$$" },
        { name: "Integration by Parts", tex: "$$\\int u\\,dv = uv - \\int v\\,du$$" }
      ]
    },
    {
      id: "statistics-and-probability",
      verseName: "StatProbVerse",
      subject: "Statistics & Probability",
      subtitle: "Data • Chances",
      aliases: "statistics propability probability data chances mean median mode variance standard deviation permutations combinations bayes binomial",
      categoryLabel: "Data Science & Chances",
      isLive: false,
      glyph: "🎲",
      symbolBadge: "μ • σ • P(A|B)",
      accent: "#a78bfa",
      accentSoft: "rgba(167, 139, 250, 0.25)",
      plannedChapters: 32,
      svgIcon: `<svg class="mv-tile-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <polygon points="32,10 52,20 52,43 32,54 12,43 12,20" stroke="#c4b5fd" stroke-width="3" stroke-linejoin="round" fill="rgba(139,92,246,0.22)"/>
        <polyline points="12,20 32,30 52,20" stroke="#93c5fd" stroke-width="2.6" stroke-linejoin="round"/>
        <line x1="32" y1="30" x2="32" y2="54" stroke="#93c5fd" stroke-width="2.6"/>
        <circle cx="32" cy="20" r="2.5" fill="#f8fafc"/>
        <circle cx="19" cy="31" r="2.2" fill="#e0e7ff"/>
        <circle cx="25" cy="41" r="2.2" fill="#e0e7ff"/>
        <circle cx="39" cy="33" r="2.1" fill="#f0abfc"/>
        <circle cx="45" cy="39" r="2.1" fill="#f0abfc"/>
        <circle cx="39" cy="45" r="2.1" fill="#f0abfc"/>
      </svg>`,
      tagline:
        "Master both data analysis and chance: mean, median, variance, standard deviation, correlation, permutations, combinations, and Bayes' probability.",
      pillars: [
        "1. Central Tendency (Mean, Median, Mode), Quartiles & Box Plots",
        "2. Variance, Standard Deviation (σ), Z-Scores & Normal Bell Curve",
        "3. Scatter Plots, Correlation (r) & Least-Squares Linear Regression",
        "4. Counting Principles, Factorials, Permutations (ⁿPᵣ) & Combinations (ⁿCᵣ)",
        "5. Sample Spaces, Addition/Multiplication Rules & Conditional Probability",
        "6. Bayes' Theorem, Random Variables, Expectation & Binomial Distribution"
      ],
      formulas: [
        { name: "Mean & Standard Deviation", tex: "$$\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i, \\qquad \\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^{N}(x_i - \\mu)^2}$$" },
        { name: "Permutations & Combinations", tex: "$$^nP_r = \\frac{n!}{(n-r)!}, \\qquad \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$" },
        { name: "Conditional Probability & Bayes' Theorem", tex: "$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(B \\mid A)\\,P(A)}{P(B)}$$" },
        { name: "Binomial Distribution", tex: "$$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}, \\qquad E[X] = np$$" }
      ]
    }
  ];

  window.MATH_VERSES_CATALOG = {
    verses: MATH_VERSES
  };
})();
