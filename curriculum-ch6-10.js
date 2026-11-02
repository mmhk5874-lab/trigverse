/* ==========================================================================
   TrigVerse Detailed Core Curriculum — Chapters 6 to 10
   ========================================================================== */

window.TRIG_CH_6_TO_10 = [
  /* ========================================================================
     CHAPTER 6: TRIGONOMETRIC RATIOS OF STANDARD ANGLES
     ======================================================================== */
  {
    id: "ch-6-standard-angles",
    grade: "Ch 6",
    tierId: "tier-2",
    tierColor: "#fb923c",
    title: "6. Trigonometric Ratios of Standard Angles",
    subtitle: "Prove from pure geometry the exact values of all 6 ratios at $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$—plus the Finger Trick & Complementary Angles.",
    prerequisites: ["Chapter 4 & 5: All 6 Trig Ratios", "Simplifying surds ($\\sqrt{2}, \\sqrt{3}$)"],
    tags: ["0°, 30°, 45°, 60°, 90° Proofs", "Full 6×5 Master Table", "Left-Hand Finger Trick", "Complementary Angles"],
    sandboxType: "unitCircle",
    intuition: `Most angles like $23^\\circ$ or $51^\\circ$ produce endless decimals that need a calculator or power series. Yet **five special benchmark angles**—$0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$—come straight out of **cutting a square in half diagonally** and **cutting an equilateral triangle in half vertically**! Once you see those two shapes, you never have to blindly memorize the table again.`,
    theoryHtml: `
      <h3>6.1 Complete Geometric Proofs of $45^\\circ$, $30^\\circ$, and $60^\\circ$</h3>
      <ul>
        <li>
          <strong>Proof for $45^\\circ$ (Isosceles Right Triangle $1 : 1 : \\sqrt{2}$):</strong><br/>
          Take $\\triangle ABC$ right-angled at $B$ with $\\angle A = 45^\\circ$. Then $\\angle C = 90^\\circ - 45^\\circ = 45^\\circ$, so the triangle is isosceles: $AB = BC = a$. By Pythagoras, $AC = \\sqrt{a^2 + a^2} = a\\sqrt{2}$. Dividing out $a$:
          $$\\sin 45^\\circ = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\qquad \\cos 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\qquad \\tan 45^\\circ = \\frac{a}{a} = 1$$
        </li>
        <li>
          <strong>Proof for $30^\\circ$ & $60^\\circ$ (Bisected Equilateral Triangle $1 : \\sqrt{3} : 2$):</strong><br/>
          Take an equilateral triangle $\\triangle PQR$ with all sides $= 2a$ and all angles $= 60^\\circ$. Drop perpendicular $PM \\perp QR$. By RHS congruence, $M$ bisects $QR$ into $QM = a$, and bisects $\\angle P$ into $\\angle QPM = 30^\\circ$. In right $\\triangle PQM$, altitude $PM = \\sqrt{(2a)^2 - a^2} = a\\sqrt{3}$. Now read off both acute angles ($60^\\circ$ at $Q$, $30^\\circ$ at $P$):
          $$\\sin 30^\\circ = \\frac{a}{2a} = \\frac{1}{2}, \\quad \\cos 30^\\circ = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}, \\quad \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$$
          $$\\sin 60^\\circ = \\frac{a\\sqrt{3}}{2a} = \\frac{\\sqrt{3}}{2}, \\quad \\cos 60^\\circ = \\frac{a}{2a} = \\frac{1}{2}, \\quad \\tan 60^\\circ = \\sqrt{3}$$
        </li>
        <li>
          <strong>Boundary Proof for $0^\\circ$ and $90^\\circ$ (Shrinking-Side Limit):</strong><br/>
          As $\\theta \\to 0^\\circ$, the Opposite leg shrinks to $0$ while the Hypotenuse collapses onto Adjacent ($O \\to 0, H \\to A$), giving $\\sin 0^\\circ = 0, \\cos 0^\\circ = 1, \\tan 0^\\circ = 0$. Conversely, as $\\theta \\to 90^\\circ$, Adjacent shrinks to $0$ while Opposite grows to match Hypotenuse ($A \\to 0, O \\to H$), giving $\\sin 90^\\circ = 1, \\cos 90^\\circ = 0$, and $\\tan 90^\\circ = \\frac{1}{0}$ (<strong>Undefined</strong>).
        </li>
      </ul>

      <h3>6.2 Master $6 \\times 5$ Standard Angle Reference Table</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Ratio $\\backslash$ Angle</th>
              <th>$0^\\circ \\;(0)$</th>
              <th>$30^\\circ \\;(\\frac{\\pi}{6})$</th>
              <th>$45^\\circ \\;(\\frac{\\pi}{4})$</th>
              <th>$60^\\circ \\;(\\frac{\\pi}{3})$</th>
              <th>$90^\\circ \\;(\\frac{\\pi}{2})$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>$\\sin\\theta$</strong></td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{1}{\\sqrt{2}}$</td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$1$</td></tr>
            <tr><td><strong>$\\cos\\theta$</strong></td><td>$1$</td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$\\frac{1}{\\sqrt{2}}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr>
            <tr><td><strong>$\\tan\\theta$</strong></td><td>$0$</td><td>$\\frac{1}{\\sqrt{3}}$</td><td>$1$</td><td>$\\sqrt{3}$</td><td>Not Defined</td></tr>
            <tr><td><strong>$\\operatorname{cosec}\\theta$</strong></td><td>Not Defined</td><td>$2$</td><td>$\\sqrt{2}$</td><td>$\\frac{2}{\\sqrt{3}}$</td><td>$1$</td></tr>
            <tr><td><strong>$\\sec\\theta$</strong></td><td>$1$</td><td>$\\frac{2}{\\sqrt{3}}$</td><td>$\\sqrt{2}$</td><td>$2$</td><td>Not Defined</td></tr>
            <tr><td><strong>$\\cot\\theta$</strong></td><td>Not Defined</td><td>$\\sqrt{3}$</td><td>$1$</td><td>$\\frac{1}{\\sqrt{3}}$</td><td>$0$</td></tr>
          </tbody>
        </table>
      </div>

      <h3>6.3 Two Unforgettable Memory Tricks</h3>
      <ol>
        <li><strong>The $\\sqrt{n}/2$ Formula:</strong> Write $0, 1, 2, 3, 4$ above $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$. Divide by $4$ and take the square root: $\\sqrt{\\frac{0}{4}}, \\sqrt{\\frac{1}{4}}, \\sqrt{\\frac{2}{4}}, \\sqrt{\\frac{3}{4}}, \\sqrt{\\frac{4}{4}}$ — that's the entire $\\sin\\theta$ row! Write it backwards for $\\cos\\theta$, and divide $\\sin/\\cos$ for $\\tan\\theta$!</li>
        <li><strong>Left-Hand Palm Trick:</strong> Hold your open left palm facing you: Little finger $= 0^\\circ$, Ring $= 30^\\circ$, Middle $= 45^\\circ$, Index $= 60^\\circ$, Thumb $= 90^\\circ$. Fold down the finger for your angle $\\theta$:
          $$\\sin\\theta = \\frac{\\sqrt{\\text{Fingers BELOW}}}{2}, \\qquad \\cos\\theta = \\frac{\\sqrt{\\text{Fingers ABOVE}}}{2}$$
        </li>
      </ol>

      <h3>6.4 Complementary Angle Co-Function Relations</h3>
      <div class="math-box">
        <div class="math-box-title">Complementary Pairs ($0^\\circ \\le \\theta \\le 90^\\circ$)</div>
        $$\\sin(90^\\circ - \\theta) = \\cos\\theta, \\qquad \\cos(90^\\circ - \\theta) = \\sin\\theta$$
        $$\\tan(90^\\circ - \\theta) = \\cot\\theta, \\qquad \\cot(90^\\circ - \\theta) = \\tan\\theta$$
        $$\\sec(90^\\circ - \\theta) = \\operatorname{cosec}\\theta, \\qquad \\operatorname{cosec}(90^\\circ - \\theta) = \\sec\\theta$$
      </div>
    `,
    pitfalls: [
      "Thinking $\\sin\\theta$ increases linearly (e.g., assuming $\\sin 60^\\circ = 2\\sin 30^\\circ$): Test it! $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.866$, whereas $2\\sin 30^\\circ = 2(0.5) = 1 \\neq 0.866$!",
      "Forgetting that as $\\theta$ increases from $0^\\circ \\to 90^\\circ$, $\\sin\\theta$ INCREASES ($0 \\to 1$) while $\\cos\\theta$ DECREASES ($1 \\to 0$)."
    ],
    examples: [
      {
        q: "Example 1: Evaluate $\\frac{5\\cos^2 60^\\circ + 4\\sec^2 30^\\circ - \\tan^2 45^\\circ}{\\sin^2 30^\\circ + \\cos^2 30^\\circ}$.",
        sol: "Denominator $= (\\frac{1}{2})^2 + (\\frac{\\sqrt{3}}{2})^2 = \\frac{1}{4} + \\frac{3}{4} = 1$. Numerator $= 5(\\frac{1}{2})^2 + 4(\\frac{2}{\\sqrt{3}})^2 - 1^2 = \\frac{5}{4} + \\frac{16}{3} - 1 = \\frac{15 + 64 - 12}{12} = \\frac{67}{12}$."
      },
      {
        q: "Example 2: If $\\tan(A + B) = \\sqrt{3}$ and $\\tan(A - B) = \\frac{1}{\\sqrt{3}}$ ($0^\\circ < A+B \\le 90^\\circ, A > B$), find $A$ and $B$.",
        sol: "Since $\\tan 60^\\circ = \\sqrt{3}$ and $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$, we get $A + B = 60^\\circ$ and $A - B = 30^\\circ$. Adding the two equations gives $2A = 90^\\circ \\implies A = 45^\\circ$, and $B = 15^\\circ$."
      },
      {
        q: "Example 3: Evaluate $\\tan 10^\\circ \\tan 25^\\circ \\tan 45^\\circ \\tan 65^\\circ \\tan 80^\\circ$ without a calculator.",
        sol: "Pair complements: $\\tan 80^\\circ = \\cot 10^\\circ$ and $\\tan 65^\\circ = \\cot 25^\\circ$. Then $(\\tan 10^\\circ \\cot 10^\\circ)(\\tan 25^\\circ \\cot 25^\\circ)(\\tan 45^\\circ) = 1 \\times 1 \\times 1 = 1$!"
      }
    ],
    quiz: [
      {
        q: "What is the exact value of $\\sin 60^\\circ \\cos 30^\\circ + \\sin 30^\\circ \\cos 60^\\circ$?",
        options: ["$\\frac{\\sqrt{3}}{2}$", "$1$", "$\\frac{1}{2}$", "$\\sqrt{3}$"],
        answer: 1,
        explanation: "$\\left(\\frac{\\sqrt{3}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) + \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right) = \\frac{3}{4} + \\frac{1}{4} = 1$."
      },
      {
        q: "For which acute angle $\\theta$ does $\\sin\\theta = \\cos\\theta$?",
        options: ["$0^\\circ$", "$30^\\circ$", "$45^\\circ$", "$60^\\circ$"],
        answer: 2,
        explanation: "At $\\theta = 45^\\circ$, both $\\sin 45^\\circ$ and $\\cos 45^\\circ$ equal $\\frac{1}{\\sqrt{2}}$."
      },
      {
        q: "Evaluate $\\frac{2\\tan 30^\\circ}{1 + \\tan^2 30^\\circ}$.",
        options: ["$\\sin 60^\\circ$", "$\\cos 60^\\circ$", "$\\tan 60^\\circ$", "$\\sin 30^\\circ$"],
        answer: 0,
        explanation: "$\\frac{2(1/\\sqrt{3})}{1 + 1/3} = \\frac{2/\\sqrt{3}}{4/3} = \\frac{3}{2\\sqrt{3}} = \\frac{\\sqrt{3}}{2} = \\sin 60^\\circ$."
      },
      {
        q: "Simplify $\\frac{\\sin 18^\\circ}{\\cos 72^\\circ}$.",
        options: ["$0$", "$1$", "$\\tan 18^\\circ$", "$\\frac{1}{4}$"],
        answer: 1,
        explanation: "$\\sin 18^\\circ = \\sin(90^\\circ - 72^\\circ) = \\cos 72^\\circ$, so the ratio equals $1$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 7: TRIGONOMETRIC IDENTITIES
     ======================================================================== */
  {
    id: "ch-7-identities",
    grade: "Ch 7 • Core –11",
    tierId: "tier-3",
    tierColor: "#f59e0b",
    title: "7. Trigonometric Identities",
    subtitle: "Prove the Three Pythagorean Identities from scratch, rearrange them 9 ways, and conquer LHS = RHS algebraic proofs.",
    prerequisites: ["Chapters 4–6: Primary, Reciprocal & Standard Ratios"],
    tags: ["sin²θ + cos²θ = 1", "1 + tan²θ = sec²θ", "1 + cot²θ = cosec²θ", "LHS = RHS Strategy"],
    sandboxType: "unitCircle",
    intuition: `What is the difference between an **Equation** and an **Identity**?
- An *equation* like $\\sin\\theta = \\frac{1}{2}$ is only true for specific angles ($30^\\circ, 150^\\circ, \\dots$).
- An **Identity** like $\\sin^2\\theta + \\cos^2\\theta = 1$ is **ALWAYS TRUE for every valid angle $\\theta$ in the universe**! Why? Because it is literally Pythagoras' Theorem $O^2 + A^2 = H^2$ wearing a trigonometry disguise!`,
    theoryHtml: `
      <h3>7.1 Deriving All Three Pythagorean Identities from $O^2 + A^2 = H^2$</h3>
      <p>Start with $\\triangle ABC$ where $O^2 + A^2 = H^2$:</p>
      <ol>
        <li><strong>Divide throughout by $H^2$:</strong> $\\left(\\frac{O}{H}\\right)^2 + \\left(\\frac{A}{H}\\right)^2 = 1 \\implies \\sin^2\\theta + \\cos^2\\theta = 1$ (valid for ALL $\\theta \\in \\mathbb{R}$).</li>
        <li><strong>Divide throughout by $A^2$:</strong> $\\left(\\frac{O}{A}\\right)^2 + 1 = \\left(\\frac{H}{A}\\right)^2 \\implies 1 + \\tan^2\\theta = \\sec^2\\theta$ (valid whenever $\\cos\\theta \\neq 0$).</li>
        <li><strong>Divide throughout by $O^2$:</strong> $1 + \\left(\\frac{A}{O}\\right)^2 = \\left(\\frac{H}{O}\\right)^2 \\implies 1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta$ (valid whenever $\\sin\\theta \\neq 0$).</li>
      </ol>

      <h3>7.2 All 9 Algebraic Rearrangements & Difference-of-Squares Power</h3>
      <div class="math-box">
        <div class="math-box-title">Complete Identity Rearrangement Toolkit</div>
        $$\\sin^2\\theta + \\cos^2\\theta = 1 \\quad \\Longleftrightarrow \\quad \\sin^2\\theta = 1 - \\cos^2\\theta = (1-\\cos\\theta)(1+\\cos\\theta), \\quad \\cos^2\\theta = 1 - \\sin^2\\theta$$
        $$\\sec^2\\theta - \\tan^2\\theta = 1 \\quad \\Longleftrightarrow \\quad (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1, \\quad \\tan^2\\theta = \\sec^2\\theta - 1$$
        $$\\operatorname{cosec}^2\\theta - \\cot^2\\theta = 1 \\quad \\Longleftrightarrow \\quad (\\operatorname{cosec}\\theta - \\cot\\theta)(\\operatorname{cosec}\\theta + \\cot\\theta) = 1, \\quad \\cot^2\\theta = \\operatorname{cosec}^2\\theta - 1$$
      </div>
      <p>Look at $(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1$: whenever an exam gives you $\\sec\\theta + \\tan\\theta = p$, you immediately know $\\sec\\theta - \\tan\\theta = \\frac{1}{p}$—add them to get $2\\sec\\theta = p + \\frac{1}{p}$ in 5 seconds!</p>

      <h3>7.3 Expressing Every Ratio in Terms of $\\sin\\theta$ Alone (Acute $\\theta$)</h3>
      <p>Using $\\cos\\theta = \\sqrt{1 - \\sin^2\\theta}$, every single ratio can be written purely using $\\sin\\theta$: $\\tan\\theta = \\frac{\\sin\\theta}{\\sqrt{1-\\sin^2\\theta}}$, $\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\sqrt{1-\\sin^2\\theta}}$, $\\cot\\theta = \\frac{\\sqrt{1-\\sin^2\\theta}}{\\sin\\theta}$.</p>

      <h3>7.4 The 5-Step Master Playbook for Proving $\\text{LHS} = \\text{RHS}$</h3>
      <ol>
        <li><strong>Start with the more complicated side</strong> (usually LHS) — never cross-multiply across an unproved '$=$'!</li>
        <li><strong>Convert everything to $\\sin\\theta$ and $\\cos\\theta$</strong> when stuck on mixed $\\tan, \\cot, \\sec, \\operatorname{cosec}$ expressions.</li>
        <li><strong>Take a common denominator</strong> and apply $a^2 - b^2$, $(a \\pm b)^2$, or $a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$.</li>
        <li><strong>Conjugate Multiplication Trick:</strong> Whenever you spot $\\sqrt{\\frac{1 - \\sin\\theta}{1 + \\sin\\theta}}$ or $\\frac{1}{1 \\pm \\cos\\theta}$, multiply top & bottom by the conjugate $(1 - \\sin\\theta)$ or $(1 \\mp \\cos\\theta)$ to turn the denominator into $\\cos^2\\theta$ or $\\sin^2\\theta$!</li>
        <li><strong>Replace '$1$' strategically:</strong> Inside fractions like $\\frac{\\sin\\theta - \\cos\\theta + 1}{\\sin\\theta + \\cos\\theta - 1}$ (after dividing by $\\cos\\theta$), replace the numerator's $1$ with $(\\sec^2\\theta - \\tan^2\\theta)$ and factor!</li>
      </ol>
    `,
    pitfalls: [
      "Working on BOTH sides simultaneously by moving terms across '=': In a formal proof, work on LHS alone until it equals RHS (or simplify LHS to $X$ and separately simplify RHS to $X$).",
      "Forgetting absolute value when $\\theta$ is outside Quadrant I: In general, $\\sqrt{1 - \\sin^2\\theta} = |\\cos\\theta|$, which equals $+\\cos\\theta$ in Q-I/Q-IV and $-\\cos\\theta$ in Q-II/Q-III!"
    ],
    examples: [
      {
        q: "Example 1: Prove $\\sqrt{\\frac{1 + \\sin A}{1 - \\sin A}} = \\sec A + \\tan A$ (for acute $A$).",
        sol: "Multiply inside the square root by $\\frac{1 + \\sin A}{1 + \\sin A}$: $\\text{LHS} = \\sqrt{\\frac{(1 + \\sin A)^2}{1 - \\sin^2 A}} = \\sqrt{\\frac{(1 + \\sin A)^2}{\\cos^2 A}} = \\frac{1 + \\sin A}{\\cos A} = \\frac{1}{\\cos A} + \\frac{\\sin A}{\\cos A} = \\sec A + \\tan A = \\text{RHS}$."
      },
      {
        q: "Example 2: Prove $\\frac{\\tan\\theta}{1 - \\cot\\theta} + \\frac{\\cot\\theta}{1 - \\tan\\theta} = 1 + \\sec\\theta\\operatorname{cosec}\\theta$.",
        sol: "Convert to $\\sin, \\cos$: $\\frac{\\sin^2\\theta}{\\cos\\theta(\\sin\\theta - \\cos\\theta)} - \\frac{\\cos^2\\theta}{\\sin\\theta(\\sin\\theta - \\cos\\theta)} = \\frac{\\sin^3\\theta - \\cos^3\\theta}{\\sin\\theta\\cos\\theta(\\sin\\theta - \\cos\\theta)}$. Factor $a^3-b^3 = (a-b)(a^2+ab+b^2)$: $(\\sin\\theta-\\cos\\theta)$ cancels, leaving $\\frac{\\sin^2\\theta + \\cos^2\\theta + \\sin\\theta\\cos\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1 + \\sin\\theta\\cos\\theta}{\\sin\\theta\\cos\\theta} = \\sec\\theta\\operatorname{cosec}\\theta + 1$."
      },
      {
        q: "Example 3: Eliminate $\\theta$ if $x = a\\sec\\theta$ and $y = b\\tan\\theta$.",
        sol: "Isolate ratios: $\\sec\\theta = \\frac{x}{a}$ and $\\tan\\theta = \\frac{y}{b}$. Substitute into $\\sec^2\\theta - \\tan^2\\theta = 1$ to get $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ (equation of a hyperbola!)."
      }
    ],
    quiz: [
      {
        q: "Evaluate $9\\sec^2 A - 9\\tan^2 A$.",
        options: ["$1$", "$9$", "$8$", "$0$"],
        answer: 1,
        explanation: "$9(\\sec^2 A - \\tan^2 A) = 9(1) = 9$."
      },
      {
        q: "Simplify $(1 + \\tan\\theta + \\sec\\theta)(1 + \\cot\\theta - \\operatorname{cosec}\\theta)$.",
        options: ["$0$", "$1$", "$2$", "$-1$"],
        answer: 2,
        explanation: "Write in $\\sin,\\cos$: $\\left(\\frac{\\cos\\theta+\\sin\\theta+1}{\\cos\\theta}\\right)\\left(\\frac{\\sin\\theta+\\cos\\theta-1}{\\sin\\theta}\\right) = \\frac{(\\sin\\theta+\\cos\\theta)^2 - 1}{\\sin\\theta\\cos\\theta} = \\frac{1 + 2\\sin\\theta\\cos\\theta - 1}{\\sin\\theta\\cos\\theta} = 2$."
      },
      {
        q: "If $\\operatorname{cosec}\\theta - \\cot\\theta = \\frac{1}{3}$, then what is $\\operatorname{cosec}\\theta + \\cot\\theta$?",
        options: ["$-\\frac{1}{3}$", "$3$", "$\\frac{2}{3}$", "$\\frac{10}{3}$"],
        answer: 1,
        explanation: "Since $(\\operatorname{cosec}\\theta - \\cot\\theta)(\\operatorname{cosec}\\theta + \\cot\\theta) = 1$, its value is $\\frac{1}{1/3} = 3$."
      },
      {
        q: "Simplify $\\frac{1 - \\tan^2 A}{1 + \\tan^2 A}$ in terms of $\\sin A$ and $\\cos A$.",
        options: ["$\\cos^2 A - \\sin^2 A$", "$1$", "$2\\sin A\\cos A$", "$\\sec^2 A$"],
        answer: 0,
        explanation: "Replace $1+\\tan^2 A = \\sec^2 A = \\frac{1}{\\cos^2 A}$: $(1 - \\frac{\\sin^2 A}{\\cos^2 A})\\cos^2 A = \\cos^2 A - \\sin^2 A$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 8: FINDING UNKNOWN SIDES OF RIGHT-ANGLED TRIANGLES
     ======================================================================== */
  {
    id: "ch-8-unknown-sides",
    grade: "Ch 8",
    tierId: "tier-3",
    tierColor: "#f59e0b",
    title: "8. Finding Unknown Sides of Right-Angled Triangles",
    subtitle: "Given ONE side and ONE acute angle, unlock EVERY missing side of a right triangle using a foolproof 4-step decision workflow.",
    prerequisites: ["Chapter 4: SOH-CAH-TOA", "Chapter 6: Standard Angles"],
    tags: ["4-Step Side Finder", "Unknown on Top vs Bottom", "Chained Right Triangles", "Exact Surds vs Decimals"],
    sandboxType: "triangleStepSolver",
    intuition: `Pythagoras' Theorem ($a^2 + b^2 = c^2$) needs **TWO known sides** to find the third—if you only know **ONE side** (say the ground distance $20\\text{ m}$) plus an angle ($35^\\circ$), Pythagoras is stuck! Trigonometry steps in as the superpower that turns **1 side + 1 angle** into **all 3 sides** effortlessly.`,
    theoryHtml: `
      <h3>8.1 The Foolproof 4-Step Side-Finding Algorithm</h3>
      <ol>
        <li><strong>Step 1 — Label $O, A, H$ relative to the given angle $\\theta$:</strong> Mark Hypotenuse ($H$, across from $90^\\circ$), Opposite ($O$, across from $\\theta$), and Adjacent ($A$, touching $\\theta$).Ignore the third unlabeled side that is neither given nor wanted!</li>
        <li><strong>Step 2 — Pick the SOH-CAH-TOA Ratio matching (Known + Wanted):</strong>
          <ul>
            <li>Involving $O$ and $H$ $\\longrightarrow$ choose $\\sin\\theta = \\frac{O}{H}$</li>
            <li>Involving $A$ and $H$ $\\longrightarrow$ choose $\\cos\\theta = \\frac{A}{H}$</li>
            <li>Involving $O$ and $A$ $\\longrightarrow$ choose $\\tan\\theta = \\frac{O}{A}$</li>
          </ul>
        </li>
        <li><strong>Step 3 — Substitute Known Numbers & Rearrange (Two Algebraic Cases!):</strong>
          <div class="math-box">
            <div class="math-box-title">Case A (Unknown $x$ on TOP) vs Case B (Unknown $x$ on BOTTOM)</div>
            $$\\textbf{Case A (Multiply):}\\quad \\sin 30^\\circ = \\frac{x}{14} \\implies x = 14 \\cdot \\sin 30^\\circ = 14 \\cdot \\frac{1}{2} = 7$$
            $$\\textbf{Case B (Swap & Divide):}\\quad \\cos 60^\\circ = \\frac{9}{x} \\implies x = \\frac{9}{\\cos 60^\\circ} = \\frac{9}{1/2} = 18$$
          </div>
        </li>
        <li><strong>Step 4 — Reality-Check Your Answer!</strong> Check that the Hypotenuse $H$ came out <em>strictly longer</em> than both legs $O$ and $A$! If a leg came out bigger than $H$, you accidentally multiplied instead of dividing (or your calculator is in RAD mode instead of DEG mode!).</li>
      </ol>

      <h3>8.2 Direct Side-Component Multipliers (Physics & Vector Form)</h3>
      <p>Once Hypotenuse $H$ and angle $\\theta$ are known, memorize this instant decomposition used daily in physics and engineering:</p>
      <div class="math-box">
        <div class="math-box-title">Instant Vector Components</div>
        $$\\text{Opposite } O = H \\sin\\theta, \\qquad \\text{Adjacent } A = H \\cos\\theta, \\qquad \\text{Opposite from Base: } O = A \\tan\\theta$$
      </div>

      <h3>8.3 Solving Chained (Two-Triangle) Figures</h3>
      <p>Many geometry figures contain two right triangles sharing a common side (an altitude or diagonal). Simply solve Triangle #1 to find the **shared bridge side**, then use that newly found side as the known side in Triangle #2! Keep intermediate values exact (e.g., $10\\sqrt{3}$ rather than rounding early to $17.3$) to avoid rounding drift.</p>
    `,
    pitfalls: [
      "Multiplying instead of dividing when $x$ is in the denominator: If $\\tan 40^\\circ = \\frac{12}{x}$, DO NOT write $x = 12\\tan 40^\\circ$! Swap $x$ and $\\tan 40^\\circ$ to get $x = \\frac{12}{\\tan 40^\\circ}$ (or use $x = 12\\cot 40^\\circ$).",
      "Calculator in RADIAN mode when entering degrees: $\\sin(30\\text{ rad}) \\approx -0.988$, whereas $\\sin(30^\\circ) = 0.5$! Always check the 'DEG' indicator."
    ],
    examples: [
      {
        q: "Example 1 (Unknown in Numerator): In right $\\triangle ABC$ ($\\angle B = 90^\\circ$), hypotenuse $AC = 16\\text{ cm}$ and $\\angle C = 60^\\circ$. Find $AB$ and $BC$.",
        sol: "Relative to $\\angle C = 60^\\circ$: $AB$ is Opposite and $BC$ is Adjacent, while $H = 16$. Thus $AB = 16\\sin 60^\\circ = 16\\left(\\frac{\\sqrt{3}}{2}\\right) = 8\\sqrt{3}\\text{ cm} \\approx 13.86\\text{ cm}$, and $BC = 16\\cos 60^\\circ = 16\\left(\\frac{1}{2}\\right) = 8\\text{ cm}$."
      },
      {
        q: "Example 2 (Unknown in Denominator): In right $\\triangle PQR$ ($\\angle Q = 90^\\circ$), $PQ = 12\\text{ m}$ and $\\angle P = 30^\\circ$. Find hypotenuse $PR$ and side $QR$.",
        sol: "Relative to $\\angle P = 30^\\circ$, $PQ = 12$ is Adjacent ($A$). For $PR$ ($H$), use CAH: $\\cos 30^\\circ = \\frac{12}{PR} \\implies PR = \\frac{12}{\\sqrt{3}/2} = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3}\\text{ m} \\approx 13.86\\text{ m}$. For $QR$ ($O$), use TOA: $QR = 12\\tan 30^\\circ = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}\\text{ m}$."
      },
      {
        q: "Example 3 (Chained Two-Triangle Figure): In $\\triangle ABD$ ($\\angle B = 90^\\circ$), point $C$ lies on $BD$ such that $AB = 10\\text{ cm}$, $\\angle ACB = 45^\\circ$, and $\\angle ADB = 30^\\circ$. Find $CD$.",
        sol: "In right $\\triangle ABC$: $\\tan 45^\\circ = \\frac{AB}{BC} \\implies 1 = \\frac{10}{BC} \\implies BC = 10\\text{ cm}$. In larger right $\\triangle ABD$: $\\tan 30^\\circ = \\frac{AB}{BD} \\implies \\frac{1}{\\sqrt{3}} = \\frac{10}{BD} \\implies BD = 10\\sqrt{3}\\text{ cm}$. Subtract: $CD = BD - BC = 10(\\sqrt{3} - 1) \\approx 7.32\\text{ cm}$."
      }
    ],
    quiz: [
      {
        q: "In a right triangle, the angle is $30^\\circ$ and the Opposite side is $9\\text{ cm}$. What is the Hypotenuse?",
        options: ["$4.5\\text{ cm}$", "$9\\sqrt{3}\\text{ cm}$", "$18\\text{ cm}$", "$6\\sqrt{3}\\text{ cm}$"],
        answer: 2,
        explanation: "$\\sin 30^\\circ = \\frac{9}{H} \\implies \\frac{1}{2} = \\frac{9}{H} \\implies H = 18\\text{ cm}$."
      },
      {
        q: "Which equation correctly finds Adjacent side $x$ when Opposite $= 15$ and $\\theta = 52^\\circ$?",
        options: ["$x = 15\\tan 52^\\circ$", "$x = \\frac{15}{\\tan 52^\\circ}$", "$x = \\frac{15}{\\cos 52^\\circ}$", "$x = 15\\sin 52^\\circ$"],
        answer: 1,
        explanation: "$\\tan 52^\\circ = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{15}{x} \\implies x = \\frac{15}{\\tan 52^\\circ}$."
      },
      {
        q: "A skateboard ramp has length $6\\text{ m}$ inclined at $45^\\circ$ to the ground. How high is its top edge?",
        options: ["$3\\text{ m}$", "$3\\sqrt{2}\\text{ m}$", "$6\\sqrt{2}\\text{ m}$", "$3\\sqrt{3}\\text{ m}$"],
        answer: 1,
        explanation: "The ramp length is the Hypotenuse $H = 6$. Height $O = 6\\sin 45^\\circ = 6 \\cdot \\frac{\\sqrt{2}}{2} = 3\\sqrt{2}\\text{ m}$."
      },
      {
        q: "If you calculate a leg of a right triangle to be $19.4\\text{ cm}$ when the Hypotenuse is $15\\text{ cm}$, what can you conclude immediately?",
        options: [
          "The triangle is obtuse",
          "An algebra/mode mistake occurred because no leg can exceed the hypotenuse",
          "The angle must be greater than $60^\\circ$",
          "The result is valid if $\\tan\\theta > 1$"
        ],
        answer: 1,
        explanation: "In every right triangle, $H = \\sqrt{O^2 + A^2}$ is strictly the longest side, so any leg $> 15\\text{ cm}$ flags an immediate error."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 9: FINDING UNKNOWN ANGLES
     ======================================================================== */
  {
    id: "ch-9-unknown-angles",
    grade: "Ch 9 • Core –12",
    tierId: "tier-3",
    tierColor: "#f59e0b",
    title: "9. Finding Unknown Angles",
    subtitle: "Work backwards from two known side lengths to the exact unknown angles using Inverse Trig ($\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$), DMS precision, and trig equations.",
    prerequisites: ["Chapter 4 & 8: SOH-CAH-TOA & Finding Unknown Sides"],
    tags: ["arcsin / arccos / arctan", "sin⁻¹ ≠ 1/sin", "Solving All 3 Angles", "Basic Trig Equations"],
    sandboxType: "triangleStepSolver",
    intuition: `Chapter 8 fed an **angle in** to get a **side ratio out** ($\\theta \\xrightarrow{\\sin} \\frac{O}{H}$). Now suppose a carpenter builds a roof rising $3\\text{ m}$ vertically over a $4\\text{ m}$ horizontal span and asks: *"What angle $\\theta$ did I just create?"* To run the machine in reverse—feeding a **side ratio in** to get the **angle $\\theta$ out**—we use the **Inverse Trigonometric Functions**: $\\sin^{-1}$ ($\\arcsin$), $\\cos^{-1}$ ($\\arccos$), and $\\tan^{-1}$ ($\\arctan$)!`,
    theoryHtml: `
      <h3>9.1 Inverse Trigonometric Notation ($\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$)</h3>
      <p>For an acute angle $\\theta \\in (0^\\circ, 90^\\circ)$, each ratio statement can be inverted to isolate $\\theta$:</p>
      <div class="math-box">
        <div class="math-box-title">Inverse Angle-Finder Formulas</div>
        $$\\sin\\theta = \\frac{O}{H} \\;\\Longleftrightarrow\\; \\theta = \\sin^{-1}\\!\\left(\\frac{O}{H}\\right) = \\arcsin\\!\\left(\\frac{O}{H}\\right)$$
        $$\\cos\\theta = \\frac{A}{H} \\;\\Longleftrightarrow\\; \\theta = \\cos^{-1}\\!\\left(\\frac{A}{H}\\right) = \\arccos\\!\\left(\\frac{A}{H}\\right)$$
        $$\\tan\\theta = \\frac{O}{A} \\;\\Longleftrightarrow\\; \\theta = \\tan^{-1}\\!\\left(\\frac{O}{A}\\right) = \\arctan\\!\\left(\\frac{O}{A}\\right)$$
      </div>
      <p><strong>Crucial Notation Warning:</strong> The superscript '$-1$' in $\\sin^{-1}(x)$ means <strong>inverse function</strong> ("the angle whose sine is $x$"), <strong>NEVER</strong> an exponent!
      $$\\sin^{-1}(x) = \\arcsin(x) \\;\\neq\\; (\\sin x)^{-1} = \\frac{1}{\\sin x} = \\operatorname{cosec} x$$</p>

      <h3>9.2 Step-by-Step Workflow to Find Unknown Angles in a Right Triangle</h3>
      <ol>
        <li><strong>Label $O, A, H$</strong> from the perspective of the unknown angle $\\theta$.</li>
        <li><strong>Select SOH, CAH, or TOA</strong> using the <em>two known sides</em>:
          <ul>
            <li>Know $O$ and $H$ $\\implies \\theta = \\sin^{-1}(O/H)$</li>
            <li>Know $A$ and $H$ $\\implies \\theta = \\cos^{-1}(A/H)$</li>
            <li>Know $O$ and $A$ $\\implies \\theta = \\tan^{-1}(O/A)$</li>
          </ul>
        </li>
        <li><strong>Evaluate $\\theta$:</strong>
          <ul>
            <li>If the fraction matches a <strong>Standard Ratio</strong> ($\\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{1}{\\sqrt{3}}, 1, \\sqrt{3}$), write the exact angle ($30^\\circ, 45^\\circ, 60^\\circ$) immediately!</li>
            <li>Otherwise, press <code>SHIFT + sin/cos/tan</code> (or <code>2nd + sin/cos/tan</code>) on a scientific calculator in <strong>DEG</strong> mode.</li>
          </ul>
        </li>
        <li><strong>Find the second acute angle instantly:</strong> Subtract from $90^\\circ$ ($\\phi = 90^\\circ - \\theta$)!</li>
      </ol>

      <h3>9.3 Converting Decimal Angle Outputs to Nearest Minute ($D^\\circ M'$)</h3>
      <p>Surveying and marine navigation often ask for an angle to the nearest minute ($1^\\circ = 60'$). For example, if $\\theta = \\tan^{-1}(3/4) \\approx 36.8699^\\circ$: take $0.8699 \\times 60' = 52.19'$, so $\\theta \\approx 36^\\circ 52'$!</p>

      <h3>9.4 Solving Algebraic Equations for Unknown Angles ($0^\\circ \\le \\theta \\le 90^\\circ$)</h3>
      <p>To solve equations like $2\\sin^2\\theta - \\sin\\theta = 0$: treat $u = \\sin\\theta$ like an algebra variable! Factor $u(2u - 1) = 0 \\implies \\sin\\theta = 0$ or $\\sin\\theta = \\frac{1}{2} \\implies \\theta = 0^\\circ$ or $\\theta = 30^\\circ$.</p>
    `,
    pitfalls: [
      "Typing $\\sin^{-1}(12/5)$ into a calculator and getting 'MATH ERROR': Remember $|O/H|$ and $|A/H|$ MUST be $\\le 1$! If you get Math Error on $\\sin^{-1}$ or $\\cos^{-1}$, you put the Hypotenuse on top by mistake!",
      "Dividing both sides of $2\\sin\\theta\\cos\\theta = \\sin\\theta$ by $\\sin\\theta$: That deletes the valid solution $\\sin\\theta = 0 \\;(\\theta = 0^\\circ)$! Always move everything to one side and factor: $\\sin\\theta(2\\cos\\theta - 1) = 0$."
    ],
    examples: [
      {
        q: "Example 1 (Exact Standard Angle): A $10\\text{ m}$ ladder leans against a wall with its foot $5\\text{ m}$ from the wall. What angle $\\theta$ does the ladder make with the ground?",
        sol: "Relative to ground angle $\\theta$: Adjacent $A = 5\\text{ m}$ and Hypotenuse $H = 10\\text{ m}$. Using CAH: $\\cos\\theta = \\frac{5}{10} = \\frac{1}{2} \\implies \\theta = \\cos^{-1}\\!\\left(\\frac{1}{2}\\right) = 60^\\circ$. (And it makes $90^\\circ - 60^\\circ = 30^\\circ$ with the vertical wall!)"
      },
      {
        q: "Example 2 (3-4-5 Classic Triangle): Find both acute angles of a $3\\text{-}4\\text{-}5$ right-angled triangle to $2$ decimal places and to the nearest minute.",
        sol: "Opposite the side of length $3$: $\\theta = \\tan^{-1}\\!\\left(\\frac{3}{4}\\right) = \\tan^{-1}(0.75) \\approx 36.87^\\circ$ ($36^\\circ 52'$). The other acute angle is $90^\\circ - 36.87^\\circ = 53.13^\\circ$ ($53^\\circ 08'$)."
      },
      {
        q: "Example 3 (Trig Equation): Solve $\\sqrt{3}\\tan 2\\theta - 3 = 0$ for acute $2\\theta$.",
        sol: "Isolate $\\tan 2\\theta = \\frac{3}{\\sqrt{3}} = \\sqrt{3}$. Since $\\tan 60^\\circ = \\sqrt{3}$, we have $2\\theta = 60^\\circ \\implies \\theta = 30^\\circ$."
      }
    ],
    quiz: [
      {
        q: "In right $\\triangle ABC$ ($\\angle B = 90^\\circ$), $AB = 6\\text{ cm}$ and $BC = 6\\sqrt{3}\\text{ cm}$. What is $\\angle A$?",
        options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$75^\\circ$"],
        answer: 2,
        explanation: "From $\\angle A$, Opposite $= BC = 6\\sqrt{3}$ and Adjacent $= AB = 6$. Thus $\\tan A = \\frac{6\\sqrt{3}}{6} = \\sqrt{3} \\implies \\angle A = 60^\\circ$."
      },
      {
        q: "Which expression finds $\\theta$ when Opposite $= 7$ and Hypotenuse $= 11$?",
        options: ["$\\theta = \\frac{1}{\\sin(7/11)}$", "$\\theta = \\sin^{-1}\\!\\left(\\frac{7}{11}\\right)$", "$\\theta = \\cos^{-1}\\!\\left(\\frac{7}{11}\\right)$", "$\\theta = \\sin\\!\\left(\\frac{11}{7}\\right)$"],
        answer: 1,
        explanation: "Since $\\sin\\theta = \\frac{O}{H} = \\frac{7}{11}$, inverting gives $\\theta = \\sin^{-1}\\!\\left(\\frac{7}{11}\\right)$."
      },
      {
        q: "Solve $2\\cos\\theta - \\sqrt{2} = 0$ for $0^\\circ \\le \\theta \\le 90^\\circ$.",
        options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"],
        answer: 1,
        explanation: "$\\cos\\theta = \\frac{\\sqrt{2}}{2} \\implies \\theta = 45^\\circ$."
      },
      {
        q: "Convert $41.25^\\circ$ into Degrees and Minutes.",
        options: ["$41^\\circ 25'$", "$41^\\circ 15'$", "$41^\\circ 12'$", "$41^\\circ 45'$"],
        answer: 1,
        explanation: "$0.25 \\times 60' = 15'$, so $41.25^\\circ = 41^\\circ 15'$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 10: APPLICATIONS OF TRIGONOMETRY (HEIGHTS AND DISTANCES)
     ======================================================================== */
  {
    id: "ch-10-heights-distances",
    grade: "Ch 10",
    tierId: "tier-3",
    tierColor: "#f59e0b",
    title: "10. Applications of Trigonometry (Heights and Distances)",
    subtitle: "Turn word problems into crystal-clear right-triangle diagrams: Elevation, Depression, Observer Eye-Height, Two-Point Towers, Lighthouses & Moving Aircraft.",
    prerequisites: ["Chapters 6, 8 & 9: Standard Angles, Unknown Sides & Unknown Angles"],
    tags: ["Elevation & Depression", "Observer Eye-Height", "2-Point Tower Formula", "Lighthouse & Aircraft"],
    sandboxType: "elevation",
    intuition: `Every Heights & Distances word problem—no matter how long the paragraph looks—boils down to drawing **horizontal lines**, **vertical objects** (towers, cliffs, lighthouses, clouds), and **slanted lines of sight**. Master the **5 Classic Diagram Archetypes** below, and you can solve *any* real-world surveying or exam problem in minutes!`,
    theoryHtml: `
      <h3>10.1 Core Surveying Vocabulary</h3>
      <ul>
        <li><strong>Line of Sight:</strong> The straight ray drawn from the observer's eye to the point being viewed on the object.</li>
        <li><strong>Horizontal Level:</strong> The flat horizontal reference line passing directly through the observer's eye (parallel to the ground).</li>
        <li><strong>Angle of Elevation ($\\alpha$):</strong> When the object is <em>above</em> horizontal eye level, the angle swept <strong>upward</strong> from the horizontal to the line of sight.</li>
        <li><strong>Angle of Depression ($\\beta$):</strong> When the object is <em>below</em> horizontal eye level (e.g., looking down at a boat from a cliff top), the angle swept <strong>downward</strong> from the horizontal to the line of sight.</li>
        <li><strong>Alternate Interior ($Z$-Angle) Equality:</strong> Because the top horizontal eye-line and the flat ground are parallel, <strong>$\\text{Angle of Depression from Top} = \\text{Angle of Elevation from Bottom}$</strong>!</li>
      </ul>

      <h3>10.2 The 5 Master Problem Archetypes & Shortcut Formulas</h3>
      <div class="math-box">
        <div class="math-box-title">5 Universal Heights & Distances Blueprints</div>
        <p><strong>Archetype 1 — Single Right Triangle (Shadow / Kite / Ramp):</strong><br/>
        Tower height $h$, ground distance $d$, elevation $\\theta \\implies h = d\\tan\\theta$, slant string/ramp $L = \\frac{h}{\\sin\\theta}$.</p>
        <p><strong>Archetype 2 — Tall Observer of Eye-Height $h_0$:</strong><br/>
        Subtract eye-height first to solve the upper right triangle, then add $h_0$ back at the end: $H_{\\text{total}} = h_0 + d\\tan\\theta$!</p>
        <p><strong>Archetype 3 — Walking Distance $d$ Closer to a Tower ($\\alpha \\to \\beta$, with $\\beta > \\alpha$):</strong><br/>
        From far point $A$ ($x+d$ away): $x+d = h\\cot\\alpha$. From closer point $B$ ($x$ away): $x = h\\cot\\beta$. Subtracting gives the famous shortcut:
        $$d = h(\\cot\\alpha - \\cot\\beta) \\quad \\Longleftrightarrow \\quad h = \\frac{d}{\\cot\\alpha - \\cot\\beta}$$</p>
        <p><strong>Archetype 4 — Two Ships on OPPOSITE Sides of a Lighthouse of Height $h$:</strong><br/>
        Distances $x_1 = h\\cot\\alpha$ and $x_2 = h\\cot\\beta$ add together:
        $$D_{\\text{between ships}} = h(\\cot\\alpha + \\cot\\beta)$$</p>
        <p><strong>Archetype 5 — Flagstaff / Statue on Top of a Pedestal or Building:</strong><br/>
        Both triangles share the same ground base $x$! Express $x$ from the lower triangle ($x = H\\cot\\alpha$), then substitute into the combined triangle ($H + h_{\\text{flag}} = x\\tan\\beta$).</p>
      </div>

      <h3>10.3 Golden Diagram Checklist Before Writing Any Algebra</h3>
      <ol>
        <li>Assume towers, trees, poles, and walls stand at <strong>$90^\\circ$ to flat horizontal ground</strong> unless stated as leaning.</li>
        <li>As you walk <strong>closer</strong> to a tower, the angle of elevation <strong>ALWAYS INCREASES</strong> (put the larger angle closer to the tower!).</li>
        <li>Whenever an angle of depression is mentioned, <strong>ALWAYS draw the dashed horizontal line at the top FIRST</strong> before labeling the angle!</li>
      </ol>
    `,
    pitfalls: [
      "Number-1 Exam Mistake: Labeling the Angle of Depression between the line of sight and the VERTICAL tower wall! If depression is $30^\\circ$, the angle inside the triangle against the vertical wall is $90^\\circ - 30^\\circ = 60^\\circ$ (or transfer $30^\\circ$ down to the ground via alternate $Z$-angles!).",
      "Forgetting to add the observer's height $h_0$ (e.g. a $1.5\\text{ m}$ boy) back to the calculated triangle leg at the very end."
    ],
    examples: [
      {
        q: "Example 1 (Walking Closer — Shadow Problem): The shadow of a tower standing on level ground is found to be $40\\text{ m}$ longer when the Sun's altitude is $30^\\circ$ than when it is $60^\\circ$. Find the height of the tower.",
        sol: "Using Archetype 3 with $d = 40\\text{ m}, \\alpha = 30^\\circ, \\beta = 60^\\circ$: $40 = h(\\cot 30^\\circ - \\cot 60^\\circ) = h\\!\\left(\\sqrt{3} - \\frac{1}{\\sqrt{3}}\\right) = h\\!\\left(\\frac{2}{\\sqrt{3}}\\right) \\implies h = 20\\sqrt{3} \\approx 34.64\\text{ m}$."
      },
      {
        q: "Example 2 (Two Ships & Lighthouse): From the top of a $75\\text{ m}$ high lighthouse, the angles of depression of two ships on the same side (one directly behind the other) are $30^\\circ$ and $45^\\circ$. Find the distance between the two ships.",
        sol: "By $Z$-angles, elevations from the ships are $30^\\circ$ and $45^\\circ$. Nearer ship distance $x_1 = 75\\cot 45^\\circ = 75\\text{ m}$. Farther ship distance $x_2 = 75\\cot 30^\\circ = 75\\sqrt{3}\\text{ m}$. Distance between ships $= 75(\\sqrt{3} - 1) \\approx 75(0.732) = 54.9\\text{ m}$."
      },
      {
        q: "Example 3 (Jet Plane Speed): The angle of elevation of a jet plane from a point $A$ on the ground is $60^\\circ$. After a flight of $15$ seconds at constant height $1500\\sqrt{3}\\text{ m}$, the angle of elevation changes to $30^\\circ$. Find the speed of the jet in km/h.",
        sol: "Initial horizontal distance $x_1 = \\frac{1500\\sqrt{3}}{\\tan 60^\\circ} = \\frac{1500\\sqrt{3}}{\\sqrt{3}} = 1500\\text{ m}$. Final horizontal distance $x_2 = \\frac{1500\\sqrt{3}}{\\tan 30^\\circ} = 1500\\sqrt{3}\\cdot\\sqrt{3} = 4500\\text{ m}$. Distance flown in $15\\text{ s}$ is $4500 - 1500 = 3000\\text{ m}$. Speed $= \\frac{3000\\text{ m}}{15\\text{ s}} = 200\\text{ m/s} = 200 \\times 3.6 = 720\\text{ km/h}$!"
      },
      {
        q: "Example 4 (Observer on a Deck): A $1.6\\text{ m}$ tall girl stands $20\\sqrt{3}\\text{ m}$ away from a tower and observes its top at an angle of elevation of $30^\\circ$. Find the full height of the tower.",
        sol: "Height above eye level $= 20\\sqrt{3} \\cdot \\tan 30^\\circ = 20\\sqrt{3} \\cdot \\frac{1}{\\sqrt{3}} = 20\\text{ m}$. Adding her eye-height: $H = 20 + 1.6 = 21.6\\text{ m}$."
      }
    ],
    quiz: [
      {
        q: "A kite is flying at a vertical height of $60\\text{ m}$ attached to a taut string inclined at $60^\\circ$ to the horizontal. What is the length of the string?",
        options: ["$30\\text{ m}$", "$40\\sqrt{3}\\text{ m}$", "$60\\sqrt{3}\\text{ m}$", "$120\\text{ m}$"],
        answer: 1,
        explanation: "$\\sin 60^\\circ = \\frac{60}{L} \\implies L = \\frac{60}{\\sqrt{3}/2} = \\frac{120}{\\sqrt{3}} = 40\\sqrt{3}\\text{ m}$."
      },
      {
        q: "When the length of the shadow of a vertical pole equals the height of the pole, what is the Sun's angle of elevation?",
        options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"],
        answer: 1,
        explanation: "$\\tan\\theta = \\frac{\\text{Height}}{\\text{Shadow}} = 1 \\implies \\theta = 45^\\circ$."
      },
      {
        q: "From the top of a $50\\text{ m}$ cliff, the angle of depression of a buoy is $30^\\circ$. How far is the buoy horizontally from the base of the cliff?",
        options: ["$\\frac{50}{\\sqrt{3}}\\text{ m}$", "$50\\text{ m}$", "$50\\sqrt{3}\\text{ m}$", "$100\\text{ m}$"],
        answer: 2,
        explanation: "Angle of elevation from buoy $= 30^\\circ$. Thus $\\tan 30^\\circ = \\frac{50}{d} \\implies d = 50\\cot 30^\\circ = 50\\sqrt{3}\\text{ m}$."
      },
      {
        q: "Two boats lie on OPPOSITE sides of a $100\\text{ m}$ high bridge with angles of depression $45^\\circ$ and $45^\\circ$. How far apart are the two boats?",
        options: ["$100\\text{ m}$", "$100\\sqrt{2}\\text{ m}$", "$200\\text{ m}$", "$50\\text{ m}$"],
        answer: 2,
        explanation: "Using $D = h(\\cot 45^\\circ + \\cot 45^\\circ) = 100(1 + 1) = 200\\text{ m}$."
      }
    ]
  }
];
