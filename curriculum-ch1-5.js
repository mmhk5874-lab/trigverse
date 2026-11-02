/* ==========================================================================
   TrigVerse Detailed Core Curriculum — Chapters 1 to 5
   ========================================================================== */

window.TRIG_TIERS = [
  { id: "tier-1", name: "Group 1: Angle & Radian Genesis (Ch 1–3)", color: "#f97316" },
  { id: "tier-2", name: "Group 2: Right-Triangle Ratio Forge (Ch 4–8)", color: "#fb923c" },
  { id: "tier-3", name: "Group 3: Identity Citadel & Surveyor Peaks (Ch 9–15)", color: "#f59e0b" },
  { id: "tier-4", name: "Group 4: Unit-Circle & Wave Observatory (Ch 16–21)", color: "#ea580c" },
  { id: "tier-5", name: "Group 5: Multi-Angle Alchemy & Equations (Ch 22–32)", color: "#fb7185" },
  { id: "tier-6", name: "Group 6: Inverse Arcana, Calculus & Fourier (Ch 33–43)", color: "#a855f7" },
  { id: "tier-7", name: "Group 7: Grandmaster Synthesis Citadel (Ch 44)", color: "#f59e0b" }
];

window.TRIG_CH_1_TO_5 = [
  /* ========================================================================
     CHAPTER 1: INTRODUCTION TO TRIGONOMETRY
     ======================================================================== */
  {
    id: "ch-1-intro",
    grade: "Ch 1 • Core –8",
    tierId: "tier-1",
    tierColor: "#f97316",
    title: "1. Introduction to Trigonometry",
    subtitle: "What trigonometry is, where it came from, why right-angled triangles rule geometry, and how similar triangles lock side ratios forever.",
    prerequisites: ["Basic arithmetic & fractions", "Lines, corners & squares ($3^2 = 9$)"],
    tags: ["Trigonon + Metron", "Right Triangle Anatomy", "Pythagoras Theorem", "Similar Triangles"],
    sandboxType: "rightTriangle",
    intuition: `Have you ever wondered how astronomers measured the distance to the Moon $2,000$ years before rockets existed—or how a video game engine rotates a 3D world $60$ times per second? Both rely on **Trigonometry**: the mathematical bridge connecting **angles** (how much something turns) to **lengths** (how far something reaches). Once you know *one acute angle* inside a right-angled triangle, the shape of that triangle is $100\\%$ frozen—no matter whether you draw it on a postage stamp or across a galaxy!`,
    theoryHtml: `
      <h3>1.1 Meaning & Historical Origin of Trigonometry</h3>
      <p>The word <strong>Trigonometry</strong> comes from three Greek roots:</p>
      <ul>
        <li><strong><em>Tri</em></strong> = Three</li>
        <li><strong><em>Gonon</em></strong> = Side / Angle</li>
        <li><strong><em>Metron</em></strong> = Measure</li>
      </ul>
      <p>Literally, <strong>"measurement of three-sided figures (triangles)"</strong>! Around $140\\text{ BCE}$, the Greek astronomer <strong>Hipparchus of Nicaea</strong> built the first chord tables to predict eclipses. Centuries later in India ($499\\text{ CE}$), <strong>Aryabhata</strong> introduced <em>ardha-jya</em> ("half-chord"), which translated through Arabic (<em>jiba</em> $\\to$ <em>jaib</em>) into Latin <em>sinus</em>—giving us our modern word <strong>sine</strong>!</p>

      <h3>1.2 Why Focus on the Right-Angled Triangle?</h3>
      <p>A <strong>right-angled triangle</strong> has one interior angle equal to $90^\\circ$ (a square corner). Why is it the universal building block of geometry?</p>
      <ol>
        <li><strong>Any triangle can be split into two right triangles</strong> simply by dropping a perpendicular altitude from a vertex to the opposite base!</li>
        <li><strong>Angle Sum Property:</strong> Since all three angles of a flat triangle sum to $180^\\circ$ ($\\angle A + \\angle B + \\angle C = 180^\\circ$), if $\\angle B = 90^\\circ$, then the two acute angles always satisfy:
          $$\\angle A + \\angle C = 90^\\circ \\quad (\\text{they are Complementary!})$$
        </li>
      </ol>

      <h3>1.3 Anatomy of a Right-Angled Triangle & Pythagoras' Theorem</h3>
      <p>In $\\triangle ABC$ right-angled at $B$, the three sides have distinct roles relative to a chosen acute reference angle $\\theta$:</p>
      <ul>
        <li><strong>Hypotenuse ($H$):</strong> The side directly opposite the $90^\\circ$ box. It is <em>always the longest side</em> of the right triangle and never changes regardless of which acute angle you pick.</li>
        <li><strong>Opposite / Perpendicular ($O$ or $P$):</strong> The side directly across from your chosen angle $\\theta$ (it does not touch $\\theta$).</li>
        <li><strong>Adjacent / Base ($A$ or $B$):</strong> The leg that forms one arm of your chosen angle $\\theta$ alongside the hypotenuse.</li>
      </ul>
      <div class="math-box">
        <div class="math-box-title">Pythagoras' Theorem (Side-Length Engine)</div>
        $$(\\text{Opposite})^2 + (\\text{Adjacent})^2 = (\\text{Hypotenuse})^2 \\quad \\Longleftrightarrow \\quad P^2 + B^2 = H^2$$
        $$H = \\sqrt{P^2 + B^2}, \\qquad P = \\sqrt{H^2 - B^2}, \\qquad B = \\sqrt{H^2 - P^2}$$
      </div>
      <p><strong>Essential Pythagorean Triples to Memorize:</strong> $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$, $(7, 24, 25)$, $(9, 40, 41)$, $(20, 21, 29)$, and any scaled multiples like $(6, 8, 10)$ or $(10, 24, 26)$.</p>

      <h3>1.4 The Core Miracle: Similar Triangles Keep Ratios Constant</h3>
      <p>Suppose $\\triangle ABC$ and $\\triangle ADE$ are both right-angled and share the same acute angle $\\theta$. By <strong>AA (Angle-Angle) Similarity</strong>, one triangle is simply a scaled zoom of the other ($k\\times$ larger):</p>
      <div class="math-box">
        <div class="math-box-title">Scale Invariance of Side Ratios</div>
        $$\\frac{BC}{AB} = \\frac{k \\cdot BC}{k \\cdot AB} = \\frac{DE}{AD} \\qquad \\text{and} \\qquad \\frac{BC}{AC} = \\frac{DE}{AE}$$
      </div>
      <p>Even if you multiply every side by $k = 1000$, the $k$ in the numerator and $k$ in the denominator <strong>cancel out completely</strong>! That means each angle $\\theta$ owns a unique, permanent set of side-length ratios—and studying those ratios is Trigonometry.</p>

      <h3>1.5 Where Trigonometry Powers Modern Life</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr><th>Field</th><th>How Trigonometry Is Used</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Surveying & Civil Engineering</strong></td><td>Measuring heights of skyscrapers, mountains, bridge cables, and tunnel slopes</td></tr>
            <tr><td><strong>GPS, Aviation & Astronomy</strong></td><td>Triangulating satellite positions, aircraft bearings, and stellar parallax</td></tr>
            <tr><td><strong>Physics & Electrical Eng.</strong></td><td>AC electricity, sound waves, light refraction (Snell's Law $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$), projectile motion</td></tr>
            <tr><td><strong>Computer Graphics & Robotics</strong></td><td>Rotating 3D cameras, skeletal animation, robot arm inverse kinematics</td></tr>
          </tbody>
        </table>
      </div>
    `,
    pitfalls: [
      "Thinking 'Opposite' is always the vertical side: If your reference angle $\\theta$ is at the TOP vertex of a vertical right triangle, the horizontal bottom side becomes Opposite and the vertical side becomes Adjacent!",
      "Splitting square roots over addition: $\\sqrt{P^2 + B^2} \\neq P + B$. Always square first, add/subtract second, and take the square root last!"
    ],
    examples: [
      {
        q: "Example 1: In $\\triangle PQR$ right-angled at $Q$, $PQ = 9\\text{ cm}$ and $QR = 12\\text{ cm}$. Identify the Hypotenuse, Opposite, and Adjacent relative to $\\angle P$, and find $PR$.",
        sol: "Since $\\angle Q = 90^\\circ$, the side opposite $Q$ is the Hypotenuse $PR = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ cm}$. Looking from $\\angle P$: Opposite side $= QR = 12\\text{ cm}$, Adjacent side $= PQ = 9\\text{ cm}$."
      },
      {
        q: "Example 2: A $3\\text{-}4\\text{-}5$ right triangle is enlarged $7$ times. Do its side lengths change? Do its side ratios change?",
        sol: "Side lengths become $21, 28, 35$ (they grow $7\\times$). However, Opposite/Hypotenuse is $\\frac{21}{35} = \\frac{3}{5} = 0.6$—completely unchanged!"
      },
      {
        q: "Example 3: In a right triangle, one acute angle is $34^\\circ$. Find the other acute angle.",
        sol: "Acute angles in a right triangle are complementary: $90^\\circ - 34^\\circ = 56^\\circ$."
      }
    ],
    quiz: [
      {
        q: "What does the Greek root 'Trigonon + Metron' literally mean?",
        options: ["Circle rotation", "Triangle measurement", "Right-corner algebra", "Wave calculation"],
        answer: 1,
        explanation: "'Tri' (three) + 'gonon' (angle/side) + 'metron' (measure) means measuring triangles."
      },
      {
        q: "In $\\triangle XYZ$ right-angled at $Y$, which side is Adjacent to $\\angle Z$?",
        options: ["$XZ$", "$XY$", "$YZ$", "Depends on triangle size"],
        answer: 2,
        explanation: "$XZ$ is opposite $90^\\circ$ (Hypotenuse), $XY$ is across from $\\angle Z$ (Opposite), and $YZ$ touches $\\angle Z$ (Adjacent)."
      },
      {
        q: "A right triangle has hypotenuse $25$ and one leg $7$. What is the length of the other leg?",
        options: ["$18$", "$20$", "$24$", "$\\sqrt{674}$"],
        answer: 2,
        explanation: "By Pythagoras, $\\text{leg} = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$."
      },
      {
        q: "If all sides of a right triangle are tripled, the ratio (Opposite / Hypotenuse) is:",
        options: ["Tripled", "Squared", "Divided by 3", "Completely unchanged"],
        answer: 3,
        explanation: "Scaling numerator and denominator by $3$ cancels out: $\\frac{3O}{3H} = \\frac{O}{H}$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 2: ANGLES AND THEIR MEASUREMENT
     ======================================================================== */
  {
    id: "ch-2-angles",
    grade: "Ch 2 • Core –9",
    tierId: "tier-1",
    tierColor: "#f97316",
    title: "2. Angles and Their Measurement",
    subtitle: "Master directed rotation, positive vs negative angles, standard position, Quadrants I–IV, coterminal angles, and Degrees-Minutes-Seconds (DMS).",
    prerequisites: ["Chapter 1: Introduction to Trigonometry", "Coordinate axes $(x, y)$"],
    tags: ["Positive & Negative Angles", "Quadrants I–IV", "Coterminal Angles", "DMS (60' 60'')"],
    sandboxType: "protractor",
    intuition: `In elementary geometry, an angle sits between $0^\\circ$ and $180^\\circ$ and has no direction. In Trigonometry, an angle is a **living motion**: turning a steering wheel $90^\\circ$ left vs $90^\\circ$ right lands you in totally different places, and spinning a skateboard $720^\\circ$ means two full revolutions! By giving angles a **sign ($+$ or $-$)** and placing them on $(x,y)$ axes, angles can take *any* real value from $-\\infty$ to $+\\infty$.`,
    theoryHtml: `
      <h3>2.1 Directed Angles: Initial Side, Terminal Side & Sign</h3>
      <p>Suppose a ray starts along a fixed <strong>Initial Side</strong> $\\overrightarrow{OA}$ and rotates around vertex $O$ to a final <strong>Terminal Side</strong> $\\overrightarrow{OB}$:</p>
      <ul>
        <li><strong>Positive Angle ($\\theta > 0$):</strong> Generated by rotating <strong>Counter-Clockwise (Anti-Clockwise)</strong>.</li>
        <li><strong>Negative Angle ($\\theta < 0$):</strong> Generated by rotating <strong>Clockwise</strong> (same direction as clock hands).</li>
      </ul>

      <h3>2.2 Geometric Classification & Angle Pairs</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr><th>Classification</th><th>Range</th><th>Pair Definitions</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Acute Angle</strong></td><td>$0^\\circ < \\theta < 90^\\circ$</td><td><strong>Complementary:</strong> $\\alpha + \\beta = 90^\\circ$</td></tr>
            <tr><td><strong>Right Angle</strong></td><td>$\\theta = 90^\\circ$</td><td>Quarter revolution</td></tr>
            <tr><td><strong>Obtuse Angle</strong></td><td>$90^\\circ < \\theta < 180^\\circ$</td><td><strong>Supplementary:</strong> $\\alpha + \\beta = 180^\\circ$</td></tr>
            <tr><td><strong>Straight Angle</strong></td><td>$\\theta = 180^\\circ$</td><td>Half revolution (straight line)</td></tr>
            <tr><td><strong>Reflex Angle</strong></td><td>$180^\\circ < \\theta < 360^\\circ$</td><td><strong>Conjugate / Explementary:</strong> $\\alpha + \\beta = 360^\\circ$</td></tr>
          </tbody>
        </table>
      </div>

      <h3>2.3 Standard Position, Quadrants & Quadrantal Angles</h3>
      <p>An angle is in <strong>Standard Position</strong> when its vertex sits at the origin $(0,0)$ and its initial side lies along the positive $x$-axis ($OX$). Depending on where the terminal side lands, the plane splits into four <strong>Quadrants</strong>:</p>
      <ul>
        <li><strong>Quadrant I:</strong> $0^\\circ < \\theta < 90^\\circ$ ($x > 0, y > 0$)</li>
        <li><strong>Quadrant II:</strong> $90^\\circ < \\theta < 180^\\circ$ ($x < 0, y > 0$)</li>
        <li><strong>Quadrant III:</strong> $180^\\circ < \\theta < 270^\\circ$ ($x < 0, y < 0$)</li>
        <li><strong>Quadrant IV:</strong> $270^\\circ < \\theta < 360^\\circ$ ($x > 0, y < 0$)</li>
        <li><strong>Quadrantal Angles:</strong> Angles whose terminal ray lands <em>directly on an axis</em>: $0^\\circ, \\pm 90^\\circ, \\pm 180^\\circ, \\pm 270^\\circ, \\pm 360^\\circ, \\dots$</li>
      </ul>

      <h3>2.4 Coterminal Angles</h3>
      <p>Two angles in standard position that share the exact same terminal ray are called <strong>Coterminal Angles</strong>. Adding or subtracting full $360^\\circ$ spins brings you right back to the same ray!</p>
      <div class="math-box">
        <div class="math-box-title">Coterminal Angle Formula</div>
        $$\\theta_{\\text{coterminal}} = \\theta + 360^\\circ \\cdot k \\qquad (k \\in \\mathbb{Z}: \\; k = \\pm 1, \\pm 2, \\pm 3, \\dots)$$
      </div>
      <p>For example, $45^\\circ$, $405^\\circ$ ($45^\\circ + 360^\\circ$), and $-315^\\circ$ ($45^\\circ - 360^\\circ$) are all coterminal and have <strong>identical trigonometric values</strong>!</p>

      <h3>2.5 Systems of Sub-Dividing Angles: DMS (Sexagesimal) & Gradians</h3>
      <p>Just like $1\\text{ hour} = 60\\text{ minutes}$ and $1\\text{ minute} = 60\\text{ seconds}$, navigation, astronomy, and latitude/longitude split $1^\\circ$ into <strong>Minutes ($'$)</strong> and <strong>Seconds ($''$)</strong>:</p>
      <div class="math-box">
        <div class="math-box-title">Sexagesimal (DMS) & Centesimal Systems</div>
        $$1 \\text{ Right Angle} = 90^\\circ, \\qquad 1^\\circ = 60' \\; (\\text{minutes}), \\qquad 1' = 60'' \\; (\\text{seconds}) \\implies 1^\\circ = 3600''$$
        $$\\text{Decimal Degrees} = D + \\frac{M}{60} + \\frac{S}{3600}$$
        $$\\text{Centesimal (Gradian) System: } 1 \\text{ Right Angle} = 100^{\\text{g}} \\; (\\text{grades/gons}), \\quad 1 \\text{ full circle} = 400^{\\text{g}}$$
      </div>
    `,
    pitfalls: [
      "Thinking $-60^\\circ$ lies in Quadrant I: Negative angles rotate CLOCKWISE from the positive $x$-axis, so $-60^\\circ$ is coterminal with $360^\\circ - 60^\\circ = 300^\\circ$, which lies in Quadrant IV!",
      "Confusing $35.30^\\circ$ with $35^\\circ 30'$: Because $30' = \\frac{30}{60}^\\circ = 0.5^\\circ$, $35^\\circ 30'$ equals $35.5^\\circ$, NOT $35.30^\\circ$!"
    ],
    examples: [
      {
        q: "Example 1: Convert $42^\\circ 24' 36''$ into decimal degrees.",
        sol: "$42 + \\frac{24}{60} + \\frac{36}{3600} = 42 + 0.4 + 0.01 = 42.41^\\circ$."
      },
      {
        q: "Example 2: Convert $28.64^\\circ$ into Degrees, Minutes, and Seconds ($D^\\circ M' S''$).",
        sol: "Whole degrees $= 28^\\circ$. Multiply fractional part by $60$: $0.64 \\times 60 = 38.4'$, giving $38'$. Multiply remaining fraction by $60$: $0.4 \\times 60 = 24''$. Answer: $28^\\circ 38' 24''$."
      },
      {
        q: "Example 3: Find the smallest positive angle coterminal with $-800^\\circ$ and state its quadrant.",
        sol: "Add multiples of $360^\\circ$: $-800^\\circ + 3 \\times 360^\\circ = -800^\\circ + 1080^\\circ = 280^\\circ$. Since $270^\\circ < 280^\\circ < 360^\\circ$, it lies in Quadrant IV."
      }
    ],
    quiz: [
      {
        q: "In which quadrant does the angle $-130^\\circ$ lie when placed in standard position?",
        options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
        answer: 2,
        explanation: "$-130^\\circ + 360^\\circ = 230^\\circ$. Since $180^\\circ < 230^\\circ < 270^\\circ$, it lies in Quadrant III."
      },
      {
        q: "Convert $15^\\circ 45'$ into decimal degrees.",
        options: ["$15.45^\\circ$", "$15.75^\\circ$", "$15.25^\\circ$", "$15.90^\\circ$"],
        answer: 1,
        explanation: "$15 + \\frac{45}{60} = 15 + 0.75 = 15.75^\\circ$."
      },
      {
        q: "Which of the following angles is coterminal with $70^\\circ$?",
        options: ["$-70^\\circ$", "$290^\\circ$", "$-290^\\circ$", "$250^\\circ$"],
        answer: 2,
        explanation: "$70^\\circ - 360^\\circ = -290^\\circ$."
      },
      {
        q: "Through how many degrees does the minute hand of a clock rotate in $25$ minutes (as a directed signed angle)?",
        options: ["$+150^\\circ$", "$-150^\\circ$", "$-125^\\circ$", "$-75^\\circ$"],
        answer: 1,
        explanation: "Each minute is $\\frac{360^\\circ}{60} = 6^\\circ$, so $25$ minutes is $150^\\circ$; since a clock hand moves clockwise, the directed angle is $-150^\\circ$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 3: DEGREE AND RADIAN
     ======================================================================== */
  {
    id: "ch-3-radian",
    grade: "Ch 3",
    tierId: "tier-1",
    tierColor: "#f97316",
    title: "3. Degree and Radian",
    subtitle: "Why science and calculus measure angles in Radians—conversions, arc length $l = r\\theta$, sector area $A = \\frac{1}{2}r^2\\theta$, and angular speed.",
    prerequisites: ["Chapter 2: Angles & DMS", "Circumference $C = 2\\pi r$ & Circle Area $\\pi r^2$"],
    tags: ["1 Radian Defined", "π rad = 180°", "Arc Length l = rθ", "Sector Area & ω"],
    sandboxType: "radianSector",
    intuition: `If an alien civilization on another planet studies circles, they would NEVER invent $360^\\circ$—because $360$ came from ancient Earth calendars! Instead, they would measure an angle by comparing **how far you walked along the circle's curved rim ($l$)** to **the circle's radius ($r$)**. When arc length equals one radius ($l = r$), that universal, planet-independent angle is **1 Radian** ($\\approx 57.2958^\\circ$)!`,
    theoryHtml: `
      <h3>3.1 Exact Definition of One Radian ($1^{\\text{c}}$ or $1\\text{ rad}$)</h3>
      <p>One <strong>radian</strong> is the central angle subtended at the center of a circle of radius $r$ by an arc whose length equals $r$. More generally, for <em>any</em> arc of length $l$ on a circle of radius $r$:</p>
      <div class="math-box">
        <div class="math-box-title">The Circular Measure Law</div>
        $$\\theta \\text{ (in radians)} = \\frac{\\text{Arc Length}}{\\text{Radius}} = \\frac{l}{r} \\quad \\Longleftrightarrow \\quad l = r\\theta$$
      </div>
      <p>Notice that because $l$ and $r$ are both lengths (e.g., $\\text{cm}/\\text{cm}$), a radian is a <strong>pure dimensionless number</strong>! That is why $\\sin x$ can take any real number $x$ in calculus.</p>

      <h3>3.2 Proof That $\\pi \\text{ radians} = 180^\\circ$</h3>
      <p>For one complete revolution around a circle of radius $r$, the arc length is the full circumference $l = 2\\pi r$. Plugging into $\\theta = \\frac{l}{r}$ gives $\\theta_{\\text{full}} = \\frac{2\\pi r}{r} = 2\\pi\\text{ rad}$. Since a full circle is also $360^\\circ$:</p>
      <div class="math-box">
        <div class="math-box-title">Degree ↔ Radian Master Bridge</div>
        $$2\\pi\\text{ rad} = 360^\\circ \\quad \\Longrightarrow \\quad \\pi\\text{ rad} = 180^\\circ$$
        $$\\text{Radians} = \\text{Degrees} \\times \\frac{\\pi}{180}, \\qquad\\qquad \\text{Degrees} = \\text{Radians} \\times \\frac{180}{\\pi}$$
        $$1\\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57.2958^\\circ \\approx 57^\\circ 17' 45'', \\qquad 1^\\circ = \\frac{\\pi}{180}\\text{ rad} \\approx 0.017453\\text{ rad}$$
      </div>

      <h3>3.3 Essential Degree–Radian Conversion Table</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Degrees</th>
              <th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th>
              <th>$120^\\circ$</th><th>$135^\\circ$</th><th>$150^\\circ$</th><th>$180^\\circ$</th><th>$270^\\circ$</th><th>$360^\\circ$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Radians</strong></td>
              <td>$0$</td><td>$\\frac{\\pi}{6}$</td><td>$\\frac{\\pi}{4}$</td><td>$\\frac{\\pi}{3}$</td><td>$\\frac{\\pi}{2}$</td>
              <td>$\\frac{2\\pi}{3}$</td><td>$\\frac{3\\pi}{4}$</td><td>$\\frac{5\\pi}{6}$</td><td>$\\pi$</td><td>$\\frac{3\\pi}{2}$</td><td>$2\\pi$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>3.4 Sector Area, Segment Area & Linear/Angular Velocity</h3>
      <p>A circular sector of angle $\\theta\\text{ rad}$ occupies the fraction $\\frac{\\theta}{2\\pi}$ of the full circle's area $\\pi r^2$:</p>
      <div class="math-box">
        <div class="math-box-title">Arc, Sector, Chord & Rotational Motion Formulas ($\\theta$ in Radians!)</div>
        $$\\text{Arc Length: } l = r\\theta, \\qquad \\text{Sector Perimeter: } P = 2r + r\\theta$$
        $$\\text{Sector Area: } A_{\\text{sector}} = \\frac{1}{2}r^2\\theta = \\frac{1}{2}lr, \\qquad \\text{Minor Segment Area: } A_{\\text{seg}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$
        $$\\text{Angular Velocity: } \\omega = \\frac{\\theta}{t} \\;(\\text{rad/s}), \\qquad \\text{Linear Rim Speed: } v = \\frac{l}{t} = r\\omega$$
      </div>
    `,
    pitfalls: [
      "Plugging degrees directly into $l = r\\theta$ or $A = \\frac{1}{2}r^2\\theta$: For $r = 10\\text{ cm}, \\theta = 60^\\circ$, writing $l = 10 \\times 60 = 600\\text{ cm}$ is $57\\times$ too big! Convert $60^\\circ = \\frac{\\pi}{3}\\text{ rad}$ first $\\implies l = \\frac{10\\pi}{3} \\approx 10.47\\text{ cm}$.",
      "Thinking $\\pi$ itself is a unit: $\\pi \\approx 3.14159$ is just a real number! So '$2\\text{ radians}$' (without $\\pi$) is a completely valid angle ($\\approx 114.6^\\circ$)."
    ],
    examples: [
      {
        q: "Example 1: Convert $40^\\circ 20'$ into radians in terms of $\\pi$.",
        sol: "First convert minutes to degrees: $40^\\circ 20' = 40 + \\frac{20}{60} = 40 + \\frac{1}{3} = \\frac{121}{3}^\\circ$. Multiply by $\\frac{\\pi}{180}$: $\\frac{121}{3} \\times \\frac{\\pi}{180} = \\frac{121\\pi}{540}\\text{ rad}$."
      },
      {
        q: "Example 2: A pendulum of length $42\\text{ cm}$ swings through an angle of $30^\\circ$. Find the arc length traced by its bob and the area swept out.",
        sol: "Convert $\\theta = 30^\\circ = \\frac{\\pi}{6}\\text{ rad}$. Arc length $l = r\\theta = 42 \\times \\frac{\\pi}{6} = 7\\pi \\approx 22\\text{ cm}$. Sector area $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(42)^2\\left(\\frac{\\pi}{6}\\right) = 147\\pi \\approx 461.8\\text{ cm}^2$."
      },
      {
        q: "Example 3: A bicycle wheel of radius $35\\text{ cm}$ makes $120$ revolutions per minute (RPM). Find its angular speed $\\omega$ in rad/s and linear speed $v$ in m/s.",
        sol: "$120\\text{ rev/min} = 2\\text{ rev/s}$. Since $1\\text{ rev} = 2\\pi\\text{ rad}$, $\\omega = 2 \\times 2\\pi = 4\\pi\\text{ rad/s}$. With $r = 0.35\\text{ m}$, linear speed $v = r\\omega = 0.35 \\times 4\\pi = 1.4\\pi \\approx 4.40\\text{ m/s}$."
      }
    ],
    quiz: [
      {
        q: "Convert $\\frac{7\\pi}{12}$ radians into degrees.",
        options: ["$95^\\circ$", "$105^\\circ$", "$115^\\circ$", "$135^\\circ$"],
        answer: 1,
        explanation: "$\\frac{7\\pi}{12} \\times \\frac{180^\\circ}{\\pi} = 7 \\times 15^\\circ = 105^\\circ$."
      },
      {
        q: "In a circle of radius $8\\text{ cm}$, an arc of length $6\\text{ cm}$ subtends what angle at the center?",
        options: ["$0.75\\text{ radians}$", "$0.75^\\circ$", "$\\frac{4}{3}\\text{ radians}$", "$48\\text{ radians}$"],
        answer: 0,
        explanation: "By $\\theta = \\frac{l}{r}$, $\\theta = \\frac{6}{8} = 0.75\\text{ radians}$."
      },
      {
        q: "Find the area of a circular sector with radius $10\\text{ m}$ and central angle $72^\\circ$.",
        options: ["$10\\pi\\text{ m}^2$", "$20\\pi\\text{ m}^2$", "$36\\pi\\text{ m}^2$", "$720\\text{ m}^2$"],
        answer: 1,
        explanation: "$72^\\circ = \\frac{2\\pi}{5}\\text{ rad}$. Then $A = \\frac{1}{2}(10)^2\\left(\\frac{2\\pi}{5}\\right) = 50 \\cdot \\frac{2\\pi}{5} = 20\\pi\\text{ m}^2$."
      },
      {
        q: "Approximately how many degrees is $1$ radian?",
        options: ["$3.14^\\circ$", "$45^\\circ$", "$57.3^\\circ$", "$60^\\circ$"],
        answer: 2,
        explanation: "$1\\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57.2958^\\circ$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 4: TRIGONOMETRIC RATIOS (sin, cos, tan)
     ======================================================================== */
  {
    id: "ch-4-primary-ratios",
    grade: "Ch 4",
    tierId: "tier-2",
    tierColor: "#fb923c",
    title: "4. Trigonometric Ratios (sin, cos, tan)",
    subtitle: "Deep mastery of Sine, Cosine, and Tangent—how SOH-CAH-TOA works, switching reference angles, quotient laws, and value bounds.",
    prerequisites: ["Chapter 1: Right Triangles & Pythagoras"],
    tags: ["sin θ, cos θ, tan θ", "SOH-CAH-TOA", "Angle Switching", "tan = sin/cos"],
    sandboxType: "rightTriangle",
    intuition: `Think of $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$ as **three percentage gauges** attached to angle $\\theta$:
- **$\\sin\\theta$** asks: *"What fraction of the slanted ramp ($H$) goes into vertical climb ($O$)?"*
- **$\\cos\\theta$** asks: *"What fraction of the slanted ramp ($H$) goes into horizontal forward travel ($A$)?"*
- **$\\tan\\theta$** asks: *"What is the steepness/slope (Rise $\\div$ Run $= O/A$) of the ramp?"*`,
    theoryHtml: `
      <h3>4.1 Precise Definitions of $\\sin\\theta, \\cos\\theta, \\tan\\theta$</h3>
      <p>For an acute angle $\\theta$ in a right-angled triangle with Opposite (Perpendicular) $O$, Adjacent (Base) $A$, and Hypotenuse $H$:</p>
      <div class="math-box">
        <div class="math-box-title">Primary Trigonometric Ratios (SOH – CAH – TOA)</div>
        $$\\textbf{Sine:}\\quad \\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{O}{H}$$
        $$\\textbf{Cosine:}\\quad \\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{A}{H}$$
        $$\\textbf{Tangent:}\\quad \\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{O}{A}$$
      </div>
      <p><em>Popular Mnemonics:</em> <strong>SOH-CAH-TOA</strong> ("Some Old Horses Can Always Hear Their Owner Approach") or in South Asian textbooks using Perpendicular/Base/Hypotenuse: <strong>"Some People Have, Curly Brown Hair, Through Proper Brushing"</strong> ($S=P/H, C=B/H, T=P/B$).</p>

      <h3>4.2 Switching the Acute Reference Angle ($\\angle A$ vs $\\angle C$)</h3>
      <p>In $\\triangle ABC$ right-angled at $B$, watch carefully what happens when you walk from vertex $A$ to vertex $C$:</p>
      <ul>
        <li>For $\\angle A$: Opposite $= BC$, Adjacent $= AB$, Hypotenuse $= AC \\implies \\sin A = \\frac{BC}{AC}, \\; \\cos A = \\frac{AB}{AC}$.</li>
        <li>For $\\angle C$: Opposite $= AB$, Adjacent $= BC$, Hypotenuse $= AC \\implies \\sin C = \\frac{AB}{AC}, \\; \\cos C = \\frac{BC}{AC}$.</li>
      </ul>
      <p>Look! $\\sin A = \\cos C$ and $\\cos A = \\sin C$ whenever $A + C = 90^\\circ$!</p>

      <h3>4.3 The Quotient Law & Magnitude Bounds</h3>
      <div class="math-box">
        <div class="math-box-title">Quotient Relation & Size Bounds ($0^\\circ < \\theta < 90^\\circ$)</div>
        $$\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{O / H}{A / H} = \\frac{O}{A} = \\tan\\theta$$
        $$0 < \\sin\\theta < 1, \\qquad 0 < \\cos\\theta < 1, \\qquad 0 < \\tan\\theta < \\infty$$
      </div>
      <ul>
        <li><strong>Why are $\\sin\\theta$ and $\\cos\\theta$ strictly less than $1$ for acute angles?</strong> Because the Hypotenuse $H = \\sqrt{O^2 + A^2}$ is always longer than either leg $O$ or $A$, so $O/H < 1$ and $A/H < 1$!</li>
        <li><strong>Why can $\\tan\\theta$ be anything from $0$ to $\\infty$?</strong> Because leg $O$ can be much smaller than $A$ ($\\tan\\theta < 1$), equal to $A$ ($\\tan 45^\\circ = 1$), or $1000\\times$ taller than $A$ ($\\tan\\theta = 1000$)!</li>
      </ul>

      <h3>4.4 Reconstructing the Triangle from One Given Ratio</h3>
      <p>If told $\\tan\\theta = \\frac{3}{4}$, does that force $O = 3$ and $A = 4$? Not necessarily—they could be $6$ and $8$, or $30$ and $40$! Write $O = 3k$ and $A = 4k$ ($k > 0$), compute $H = \\sqrt{(3k)^2 + (4k)^2} = 5k$, and then $k$ cancels cleanly inside $\\sin\\theta = \\frac{3k}{5k} = \\frac{3}{5}$ and $\\cos\\theta = \\frac{4k}{5k} = \\frac{4}{5}$.</p>
    `,
    pitfalls: [
      "Reading $\\sin\\theta$ as '$\\sin$ multiplied by $\\theta$': Never write $\\frac{\\sin 2\\theta}{2} = \\sin\\theta$! You cannot pull constants out of an angle argument.",
      "Confusing $\\sin^2\\theta$ with $\\sin(\\theta^2)$: $\\sin^2\\theta$ always means $(\\sin\\theta)^2$ (compute the ratio first, then square the number)."
    ],
    examples: [
      {
        q: "Example 1: In $\\triangle ABC$ right-angled at $B$, $AB = 24\\text{ cm}$ and $BC = 7\\text{ cm}$. Find (i) $\\sin A, \\cos A, \\tan A$ and (ii) $\\sin C, \\cos C, \\tan C$.",
        sol: "First find hypotenuse $AC = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25\\text{ cm}$. (i) From $A$, $O=7, A=24 \\implies \\sin A = \\frac{7}{25}, \\cos A = \\frac{24}{25}, \\tan A = \\frac{7}{24}$. (ii) From $C$, $O=24, A=7 \\implies \\sin C = \\frac{24}{25}, \\cos C = \\frac{7}{25}, \\tan C = \\frac{24}{7}$."
      },
      {
        q: "Example 2: Given $15\\tan\\theta = 8$ ($\\theta$ acute), evaluate $\\frac{3\\sin\\theta + 2\\cos\\theta}{3\\sin\\theta - \\cos\\theta}$.",
        sol: "Fast shortcut—divide numerator and denominator by $\\cos\\theta$! We get $\\frac{3\\tan\\theta + 2}{3\\tan\\theta - 1}$. Substitute $\\tan\\theta = \\frac{8}{15}$: $\\frac{3(8/15) + 2}{3(8/15) - 1} = \\frac{24/15 + 30/15}{24/15 - 15/15} = \\frac{54}{9} = 6$!"
      },
      {
        q: "Example 3: State with reason whether $\\sin\\theta = \\frac{5}{4}$ is possible for any real angle $\\theta$.",
        sol: "Impossible! $\\frac{5}{4} = 1.25 > 1$, which would require the Opposite leg ($5k$) to exceed the Hypotenuse ($4k$), violating $H = \\sqrt{O^2 + A^2} \\ge O$."
      }
    ],
    quiz: [
      {
        q: "If $\\cos\\theta = \\frac{12}{13}$ ($\\theta$ acute), what is $\\tan\\theta$?",
        options: ["$\\frac{5}{13}$", "$\\frac{5}{12}$", "$\\frac{12}{5}$", "$\\frac{13}{5}$"],
        answer: 1,
        explanation: "With $A = 12k, H = 13k$, Pythagoras gives $O = \\sqrt{169 - 144}k = 5k$. Thus $\\tan\\theta = \\frac{O}{A} = \\frac{5}{12}$."
      },
      {
        q: "In $\\triangle PQR$ right-angled at $Q$, if $\\sin P = \\frac{3}{5}$, what is $\\cos R$?",
        options: ["$\\frac{4}{5}$", "$\\frac{3}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{3}$"],
        answer: 1,
        explanation: "Since $\\angle P + \\angle R = 90^\\circ$, the side Opposite $P$ ($QR$) IS the side Adjacent to $R$! Thus $\\cos R = \\sin P = \\frac{3}{5}$."
      },
      {
        q: "If $\\tan\\theta = 1$, what does that tell you about the right triangle?",
        options: [
          "The hypotenuse equals 1",
          "It is an isosceles right triangle ($O = A$)",
          "Opposite is twice Adjacent",
          "Such a triangle cannot exist"
        ],
        answer: 1,
        explanation: "$\\tan\\theta = \\frac{O}{A} = 1 \\implies O = A$, an isosceles right triangle with $\\theta = 45^\\circ$."
      },
      {
        q: "If $4\\tan\\theta = 3$, find the value of $\\frac{4\\sin\\theta - \\cos\\theta}{4\\sin\\theta + \\cos\\theta}$.",
        options: ["$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{1}{4}$", "$\\frac{3}{5}$"],
        answer: 0,
        explanation: "Divide top and bottom by $\\cos\\theta$: $\\frac{4\\tan\\theta - 1}{4\\tan\\theta + 1} = \\frac{3 - 1}{3 + 1} = \\frac{2}{4} = \\frac{1}{2}$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 5: RECIPROCAL TRIGONOMETRIC RATIOS (cosec, sec, cot)
     ======================================================================== */
  {
    id: "ch-5-reciprocal-ratios",
    grade: "Ch 5",
    tierId: "tier-2",
    tierColor: "#fb923c",
    title: "5. Reciprocal Trigonometric Ratios (cosec, sec, cot)",
    subtitle: "Flip the primary fractions upside down: master Cosecant, Secant, and Cotangent, their pairing rules, bounds, and undefined zeros.",
    prerequisites: ["Chapter 4: Primary Trig Ratios (sin, cos, tan)"],
    tags: ["cosec θ, sec θ, cot θ", "One-'Co' Pairing Rule", "|sec| ≥ 1 & |cosec| ≥ 1", "All 6 Ratios"],
    sandboxType: "rightTriangle",
    intuition: `With three sides $(O, A, H)$, there are $6$ ways to form a ratio of two sides: $\\frac{O}{H}, \\frac{A}{H}, \\frac{O}{A}$ and their upside-down flips $\\frac{H}{O}, \\frac{H}{A}, \\frac{A}{O}$. Why bother naming the upside-down fractions **cosecant ($\\operatorname{cosec}$ or $\\csc$)**, **secant ($\\sec$)**, and **cotangent ($\\cot$)**? Because in surveying, optics, and calculus ($\\int \\sec^2 x\\,dx = \\tan x$!), dividing by $\\cos\\theta$ or $\\sin\\theta$ happens so often that flipping them turns messy compound fractions into clean single-line algebra!`,
    theoryHtml: `
      <h3>5.1 Definitions of $\\operatorname{cosec}\\theta, \\sec\\theta, \\cot\\theta$</h3>
      <div class="math-box">
        <div class="math-box-title">The Three Reciprocal Ratios</div>
        $$\\textbf{Cosecant (}\\operatorname{cosec}\\theta \\text{ or } \\csc\\theta\\textbf{):}\\quad \\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{\\text{Hypotenuse}}{\\text{Opposite}} = \\frac{H}{O}$$
        $$\\textbf{Secant (}\\sec\\theta\\textbf{):}\\quad \\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{\\text{Hypotenuse}}{\\text{Adjacent}} = \\frac{H}{A}$$
        $$\\textbf{Cotangent (}\\cot\\theta\\textbf{):}\\quad \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\text{Adjacent}}{\\text{Opposite}} = \\frac{A}{O}$$
      </div>
      <p><strong>Golden Memory Rule (The "Single Co-" Rule):</strong> Students often mix up whether $\\sec$ flips $\\sin$ or $\\cos$. Remember: <strong>every reciprocal pair has EXACTLY ONE "co-"</strong>!</p>
      <ul>
        <li><strong>s</strong>ine $\\longleftrightarrow$ <strong>co</strong>secant ($\\sin\\theta \\cdot \\operatorname{cosec}\\theta = 1$)</li>
        <li><strong>co</strong>sine $\\longleftrightarrow$ <strong>s</strong>ecant ($\\cos\\theta \\cdot \\sec\\theta = 1$)</li>
        <li><strong>t</strong>angent $\\longleftrightarrow$ <strong>co</strong>tangent ($\\tan\\theta \\cdot \\cot\\theta = 1$)</li>
      </ul>

      <h3>5.2 Range Bounds & Why $|\\operatorname{cosec}\\theta| \\ge 1$ and $|\\sec\\theta| \\ge 1$</h3>
      <p>Since the Hypotenuse $H$ is NEVER shorter than Opposite $O$ or Adjacent $A$, dividing $H$ by a smaller leg ALWAYS produces a magnitude $\\ge 1$!</p>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Ratio</th>
              <th>Reciprocal Of</th>
              <th>Acute Values ($0^\\circ < \\theta < 90^\\circ$)</th>
              <th>All-Angle Real Range</th>
              <th>Undefined When</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>$\\operatorname{cosec}\\theta$</td><td>$\\sin\\theta$</td><td>$\\operatorname{cosec}\\theta > 1$</td><td>$(-\\infty, -1] \\cup [1, \\infty)$</td><td>$\\sin\\theta = 0 \\; (0^\\circ, 180^\\circ, n\\pi)$</td></tr>
            <tr><td>$\\sec\\theta$</td><td>$\\cos\\theta$</td><td>$\\sec\\theta > 1$</td><td>$(-\\infty, -1] \\cup [1, \\infty)$</td><td>$\\cos\\theta = 0 \\; (90^\\circ, 270^\\circ)$</td></tr>
            <tr><td>$\\cot\\theta$</td><td>$\\tan\\theta$</td><td>$0 < \\cot\\theta < \\infty$</td><td>$(-\\infty, \\infty)$</td><td>$\\sin\\theta = 0 \\; (0^\\circ, 180^\\circ, n\\pi)$</td></tr>
          </tbody>
        </table>
      </div>
      <p><em>Subtle Exam Insight:</em> Notice $\\cot 90^\\circ = \\frac{\\cos 90^\\circ}{\\sin 90^\\circ} = \\frac{0}{1} = 0$ is <strong>perfectly defined</strong> even though $\\tan 90^\\circ$ is undefined! Always define $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ at boundary angles.</p>

      <h3>5.3 Geometric Meaning on a Unit Circle</h3>
      <p>Where did the word <strong>secant</strong> (Latin <em>secare</em> = "to cut") come from? Draw a tangent line touching the unit circle at $P(\\cos\\theta, \\sin\\theta)$: it cuts the horizontal $x$-axis at distance $\\sec\\theta$ from the origin, cuts the vertical $y$-axis at $\\operatorname{cosec}\\theta$, and its segment lengths to the axes are literally $\\tan\\theta$ and $\\cot\\theta$!</p>
    `,
    pitfalls: [
      "Pairing $\\sin\\theta$ with $\\sec\\theta$ because both start with 's': Wrong! Use the Single-'Co' Rule: $\\sec\\theta = \\frac{1}{\\cos\\theta}$ and $\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}$.",
      "Accepting $\\sec\\theta = \\frac{4}{5}$ as valid: Impossible! $|\\sec\\theta|$ and $|\\operatorname{cosec}\\theta|$ can NEVER lie strictly between $-1$ and $+1$."
    ],
    examples: [
      {
        q: "Example 1: Given $\\sec\\theta = \\frac{13}{5}$ ($\\theta$ acute), find all other 5 trigonometric ratios.",
        sol: "Since $\\sec\\theta = \\frac{H}{A} = \\frac{13}{5}$, set $H = 13k$ and $A = 5k$. By Pythagoras, $O = \\sqrt{13^2 - 5^2}k = 12k$. Therefore: $\\cos\\theta = \\frac{5}{13}$, $\\sin\\theta = \\frac{12}{13}$, $\\operatorname{cosec}\\theta = \\frac{13}{12}$, $\\tan\\theta = \\frac{12}{5}$, and $\\cot\\theta = \\frac{5}{12}$."
      },
      {
        q: "Example 2: Simplify $\\sin\\theta \\cdot \\cot\\theta \\cdot \\sec\\theta$.",
        sol: "Convert all reciprocals into $\\sin\\theta$ and $\\cos\\theta$: $\\sin\\theta \\cdot \\left(\\frac{\\cos\\theta}{\\sin\\theta}\\right) \\cdot \\left(\\frac{1}{\\cos\\theta}\\right) = 1$ (for $\\sin\\theta \\neq 0, \\cos\\theta \\neq 0$)."
      },
      {
        q: "Example 3: If $\\cot\\theta = \\frac{7}{8}$, evaluate $\\frac{(1 + \\sin\\theta)(1 - \\sin\\theta)}{(1 + \\cos\\theta)(1 - \\cos\\theta)}$.",
        sol: "Multiply out via $(a+b)(a-b) = a^2-b^2$: $\\frac{1 - \\sin^2\\theta}{1 - \\cos^2\\theta} = \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\cot^2\\theta = \\left(\\frac{7}{8}\\right)^2 = \\frac{49}{64}$!"
      }
    ],
    quiz: [
      {
        q: "Which of the following values is IMPOSSIBLE for $\\operatorname{cosec}\\theta$?",
        options: ["$2$", "$-\\frac{5}{3}$", "$\\frac{3}{4}$", "$1$"],
        answer: 2,
        explanation: "Because $|\\sin\\theta| \\le 1$, its reciprocal satisfies $|\\operatorname{cosec}\\theta| \\ge 1$. Thus $\\frac{3}{4} = 0.75$ is impossible."
      },
      {
        q: "Simplify $\\frac{\\operatorname{cosec}\\theta}{\\sec\\theta}$.",
        options: ["$\\tan\\theta$", "$\\cot\\theta$", "$1$", "$\\sin\\theta\\cos\\theta$"],
        answer: 1,
        explanation: "$\\frac{\\operatorname{cosec}\\theta}{\\sec\\theta} = \\frac{1/\\sin\\theta}{1/\\cos\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$."
      },
      {
        q: "If $\\operatorname{cosec}\\theta = \\frac{17}{15}$ ($\\theta$ acute), what is $\\sec\\theta$?",
        options: ["$\\frac{15}{17}$", "$\\frac{17}{8}$", "$\\frac{8}{17}$", "$\\frac{15}{8}$"],
        answer: 1,
        explanation: "Here $H = 17k, O = 15k \\implies A = \\sqrt{289 - 225}k = 8k$. Therefore $\\sec\\theta = \\frac{H}{A} = \\frac{17}{8}$."
      },
      {
        q: "For $\\theta = 90^\\circ$, what is the exact value of $\\cot 90^\\circ$?",
        options: ["Undefined", "$1$", "$0$", "$\\infty$"],
        answer: 2,
        explanation: "$\\cot 90^\\circ = \\frac{\\cos 90^\\circ}{\\sin 90^\\circ} = \\frac{0}{1} = 0$."
      }
    ]
  }
];
