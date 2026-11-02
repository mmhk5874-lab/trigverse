/* ==========================================================================
   TrigVerse Ultra-Detailed Mastery Chapters:
   - Complementary Angles
   - Finding Unknown Trigonometric Ratios (Algebraic, Equations & 4-Quadrant)
   - Trigonometric Identities (Complete 6×6 Matrix & Parameter Elimination)
   - Simplification of Trigonometric Expressions (Power Sums, LCM, Conjugates)
   - Proving Trigonometric Identities (7 Master Techniques & Boss Proofs)
   - Heights & Distances Advanced Masterclass (Cloud Reflection, Broken Tree, etc.)
   ========================================================================== */

window.TRIG_ULTRA_MODULES = {
  /* ========================================================================
     ULTRA-DETAILED: TRIGONOMETRIC RATIOS OF COMPLEMENTARY ANGLES
     ======================================================================== */
  complementaryAngles: {
    id: "ch-7-complementary",
    grade: "Ch 7",
    tierId: "tier-2",
    tierColor: "#fb923c",
    title: "7. Trigonometric Ratios of Complementary Angles",
    subtitle: "Ultra-detailed mastery of co-functions $(90^\\circ - \\theta)$, telescoping sums & products, solving co-function equations, and interior-angle triangle proofs.",
    prerequisites: ["Chapters 4–6: Primary, Reciprocal & Standard Angles"],
    tags: ["sin(90°-θ) = cos θ", "Telescoping Series", "Co-Function Equations", "A+B+C = 180° Trick"],
    sandboxType: "rightTriangle",
    intuition: `Have you ever wondered why **co**sine, **co**tangent, and **co**secant all start with **"co-"**? The prefix **"co-"** is short for **Complement**! In any right-angled triangle $\\triangle ABC$ with $\\angle B = 90^\\circ$, the two acute angles satisfy $\\angle A + \\angle C = 90^\\circ$, so $\\angle C = 90^\\circ - \\angle A$. Walking from corner $A$ over to corner $C$ doesn't change the triangle at all—it simply **swaps Opposite and Adjacent**! Thus the *sine* of $\\theta$ IS literally the *complement's sine* ($\\cos(90^\\circ - \\theta)$)!`,
    theoryHtml: `
      <h3>7.1 Complete Geometric Proof of All 6 Co-Function Identities</h3>
      <p>Consider $\\triangle ABC$ right-angled at $B$. Let $\\angle A = \\theta$. By the angle-sum property of a triangle:</p>
      $$\\angle A + \\angle B + \\angle C = 180^\\circ \\implies \\theta + 90^\\circ + \\angle C = 180^\\circ \\implies \\angle C = 90^\\circ - \\theta$$
      <p>Now list the sides from each acute vertex's point of view (Hypotenuse $AC$ never changes!):</p>
      <ul>
        <li><strong>From $\\angle A = \\theta$:</strong> Opposite $= BC$, Adjacent $= AB$, Hypotenuse $= AC$.</li>
        <li><strong>From $\\angle C = 90^\\circ - \\theta$:</strong> Opposite $= AB$, Adjacent $= BC$, Hypotenuse $= AC$.</li>
      </ul>
      <p>Comparing the six fractions side-by-side proves all six complementary identities in one stroke:</p>
      <div class="math-box">
        <div class="math-box-title">The Six Complementary (Co-Function) Laws</div>
        $$\\sin(90^\\circ - \\theta) = \\frac{AB}{AC} = \\cos\\theta \\qquad\\qquad \\cos(90^\\circ - \\theta) = \\frac{BC}{AC} = \\sin\\theta$$
        $$\\tan(90^\\circ - \\theta) = \\frac{AB}{BC} = \\cot\\theta \\qquad\\qquad \\cot(90^\\circ - \\theta) = \\frac{BC}{AB} = \\tan\\theta$$
        $$\\sec(90^\\circ - \\theta) = \\frac{AC}{BC} = \\operatorname{cosec}\\theta \\qquad\\qquad \\operatorname{cosec}(90^\\circ - \\theta) = \\frac{AC}{AB} = \\sec\\theta$$
      </div>
      <p><em>Crucial Distinction:</em> Do NOT confuse <strong>Reciprocal Pairs</strong> with <strong>Complementary Pairs</strong>!</p>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr><th>Function</th><th>Reciprocal ($1/f$)</th><th>Complementary Co-Function $f(90^\\circ-\\theta)$</th></tr>
          </thead>
          <tbody>
            <tr><td>$\\sin\\theta$</td><td>$\\operatorname{cosec}\\theta$</td><td>$\\cos\\theta$</td></tr>
            <tr><td>$\\cos\\theta$</td><td>$\\sec\\theta$</td><td>$\\sin\\theta$</td></tr>
            <tr><td>$\\tan\\theta$</td><td>$\\cot\\theta$</td><td>$\\cot\\theta$ (Both!)</td></tr>
          </tbody>
        </table>
      </div>

      <h3>7.2 Four High-Yield Problem Patterns Using Complementary Angles</h3>
      <ol>
        <li>
          <strong>Pattern 1 — Quotient & Subtraction Cancellation ($\\alpha + \\beta = 90^\\circ$):</strong><br/>
          Whenever two angles add up to $90^\\circ$ (like $23^\\circ$ and $67^\\circ$, or $18^\\circ$ and $72^\\circ$), convert <strong>ONLY ONE</strong> of the two—never both!
          $$\\frac{\\sin 23^\\circ}{\\cos 67^\\circ} = \\frac{\\sin(90^\\circ - 67^\\circ)}{\\cos 67^\\circ} = \\frac{\\cos 67^\\circ}{\\cos 67^\\circ} = 1, \\qquad \\sec 50^\\circ - \\operatorname{cosec} 40^\\circ = 0$$
        </li>
        <li>
          <strong>Pattern 2 — Telescoping Tangent/Cotangent Products:</strong><br/>
          In long products like $\\tan 1^\\circ \\tan 2^\\circ \\tan 3^\\circ \\cdots \\tan 89^\\circ$, pair the outer ends ($1^\\circ$ with $89^\\circ$, $2^\\circ$ with $88^\\circ$, $\\dots$, $44^\\circ$ with $46^\\circ$):
          $$\\tan\\theta \\cdot \\tan(90^\\circ - \\theta) = \\tan\\theta \\cdot \\cot\\theta = 1$$
          Every pair collapses to $1$, and the middle term $\\tan 45^\\circ = 1$, so the entire 89-term product equals $1$!
        </li>
        <li>
          <strong>Pattern 3 — Telescoping $\\sin^2$ or $\\cos^2$ Sums:</strong><br/>
          Since $\\sin^2\\theta + \\sin^2(90^\\circ - \\theta) = \\sin^2\\theta + \\cos^2\\theta = 1$, any symmetric sum from $1^\\circ$ to $89^\\circ$ pairs into $1$'s plus the middle $45^\\circ$ term ($\\sin^2 45^\\circ = \\frac{1}{2}$)!
        </li>
        <li>
          <strong>Pattern 4 — Interior Angles of Any Triangle ($A + B + C = 180^\\circ$):</strong><br/>
          Divide $B + C = 180^\\circ - A$ by $2$ to get $\\frac{B+C}{2} = 90^\\circ - \\frac{A}{2}$! Taking $\\sin, \\cos, \\tan$ of both sides instantly proves:
          $$\\sin\\!\\left(\\frac{B+C}{2}\\right) = \\cos\\!\\left(\\frac{A}{2}\\right), \\qquad \\tan\\!\\left(\\frac{A+B}{2}\\right) = \\cot\\!\\left(\\frac{C}{2}\\right), \\qquad \\sec\\!\\left(\\frac{C+A}{2}\\right) = \\operatorname{cosec}\\!\\left(\\frac{B}{2}\\right)$$
        </li>
      </ol>
    `,
    pitfalls: [
      "Converting BOTH angles in a complementary pair: In $\\frac{\\sin 35^\\circ}{\\cos 55^\\circ}$, if you convert $\\sin 35^\\circ \\to \\cos 55^\\circ$ AND convert $\\cos 55^\\circ \\to \\sin 35^\\circ$ at the same time, you get $\\frac{\\cos 55^\\circ}{\\sin 35^\\circ}$ and go around in circles! Convert ONLY ONE!",
      "Miscounting terms in telescoping series: From $1^\\circ, 2^\\circ, \\dots, 89^\\circ$ there are $89$ terms = $44$ pairs summing to $1$ PLUS one unpaired middle term at $45^\\circ$ ($\\sin^2 45^\\circ = \\frac{1}{2}$), giving $44.5$, NOT $45$!"
    ],
    examples: [
      {
        q: "Example 1 (Co-Function Equation): If $\\sin 3A = \\cos(A - 26^\\circ)$, where $3A$ is an acute angle, find the value of $A$.",
        sol: "Rewrite LHS using $\\sin\\theta = \\cos(90^\\circ - \\theta)$: $\\cos(90^\\circ - 3A) = \\cos(A - 26^\\circ)$. Since both angles are acute, equate arguments: $90^\\circ - 3A = A - 26^\\circ \\implies 4A = 116^\\circ \\implies A = 29^\\circ$."
      },
      {
        q: "Example 2 (89-Term Telescoping Sum): Evaluate $S = \\sin^2 1^\\circ + \\sin^2 2^\\circ + \\sin^2 3^\\circ + \\cdots + \\sin^2 89^\\circ$.",
        sol: "Pair $(1^\\circ, 89^\\circ), (2^\\circ, 88^\\circ), \\dots, (44^\\circ, 46^\\circ)$: there are $44$ pairs, and each pair equals $\\sin^2 k^\\circ + \\sin^2(90^\\circ - k^\\circ) = \\sin^2 k^\\circ + \\cos^2 k^\\circ = 1$. The lone middle term is $\\sin^2 45^\\circ = (\\frac{1}{\\sqrt{2}})^2 = \\frac{1}{2}$. Total $S = 44(1) + \\frac{1}{2} = 44.5 = \\frac{89}{2}$."
      },
      {
        q: "Example 3 (Mixed Multi-Term Expression): Evaluate $\\frac{\\cos 70^\\circ}{\\sin 20^\\circ} + \\frac{\\cos 59^\\circ}{\\sin 31^\\circ} - 8\\sin^2 30^\\circ$.",
        sol: "Convert numerators: $\\cos 70^\\circ = \\sin 20^\\circ$ and $\\cos 59^\\circ = \\sin 31^\\circ$. Expression $= \\frac{\\sin 20^\\circ}{\\sin 20^\\circ} + \\frac{\\sin 31^\\circ}{\\sin 31^\\circ} - 8\\left(\\frac{1}{2}\\right)^2 = 1 + 1 - 8\\left(\\frac{1}{4}\\right) = 2 - 2 = 0$."
      },
      {
        q: "Example 4 (Pythagorean + Complementary Hybrid): Evaluate $\\frac{\\sec^2 54^\\circ - \\cot^2 36^\\circ}{\\operatorname{cosec}^2 57^\\circ - \\tan^2 33^\\circ}$.",
        sol: "Notice $54^\\circ + 36^\\circ = 90^\\circ \\implies \\cot 36^\\circ = \\tan 54^\\circ$, and $57^\\circ + 33^\\circ = 90^\\circ \\implies \\tan 33^\\circ = \\cot 57^\\circ$. Substitute: $\\frac{\\sec^2 54^\\circ - \\tan^2 54^\\circ}{\\operatorname{cosec}^2 57^\\circ - \\cot^2 57^\\circ} = \\frac{1}{1} = 1$!"
      }
    ],
    quiz: [
      {
        q: "If $\\tan 2A = \\cot(A - 18^\\circ)$ where $2A$ is acute, what is $A$?",
        options: ["$24^\\circ$", "$36^\\circ$", "$18^\\circ$", "$54^\\circ$"],
        answer: 1,
        explanation: "Write $\\tan 2A = \\cot(90^\\circ - 2A) = \\cot(A - 18^\\circ) \\implies 90^\\circ - 2A = A - 18^\\circ \\implies 3A = 108^\\circ \\implies A = 36^\\circ$."
      },
      {
        q: "Evaluate $\\cos 1^\\circ \\cdot \\cos 2^\\circ \\cdot \\cos 3^\\circ \\cdots \\cos 179^\\circ$.",
        options: ["$1$", "$-1$", "$0$", "$\\frac{1}{2}$"],
        answer: 2,
        explanation: "Hidden right in the middle of the product is $\\cos 90^\\circ = 0$! Multiplying anything by $0$ gives $0$."
      },
      {
        q: "In $\\triangle ABC$, what does $\\tan\\!\\left(\\frac{B + C}{2}\\right)$ always equal?",
        options: ["$\\tan\\!\\left(\\frac{A}{2}\\right)$", "$\\cot\\!\\left(\\frac{A}{2}\\right)$", "$\\cot A$", "$1$"],
        answer: 1,
        explanation: "Since $A + B + C = 180^\\circ$, $\\frac{B+C}{2} = 90^\\circ - \\frac{A}{2}$, so $\\tan\\!\\left(90^\\circ - \\frac{A}{2}\\right) = \\cot\\!\\left(\\frac{A}{2}\\right)$."
      },
      {
        q: "Evaluate $\\sin^2 5^\\circ + \\sin^2 10^\\circ + \\sin^2 80^\\circ + \\sin^2 85^\\circ$.",
        options: ["$1$", "$2$", "$4$", "$\\frac{3}{2}$"],
        answer: 1,
        explanation: "Pair $(5^\\circ, 85^\\circ)$ and $(10^\\circ, 80^\\circ)$: $(\\sin^2 5^\\circ + \\cos^2 5^\\circ) + (\\sin^2 10^\\circ + \\cos^2 10^\\circ) = 1 + 1 = 2$."
      }
    ]
  },

  /* ========================================================================
     ULTRA-DETAILED: FINDING UNKNOWN TRIGONOMETRIC RATIOS
     ======================================================================== */
  findingUnknownRatios: {
    id: "ch-8-unknown-ratios",
    grade: "Ch 8",
    tierId: "tier-2",
    tierColor: "#fb923c",
    title: "8. Finding Unknown Trigonometric Ratios",
    subtitle: "Given ONE numerical, algebraic, or equation clue, unlock ALL 6 trigonometric ratios—across acute triangles, all 4 Quadrants, and linear/quadratic equations.",
    prerequisites: ["Chapters 4, 5 & 7: All 6 Ratios & Co-Functions"],
    tags: ["1 Ratio → All 6 Ratios", "Algebraic Sides (a²-b²)", "4-Quadrant Signs", "sec θ + tan θ = p Trick"],
    sandboxType: "identityExplorer",
    intuition: `All $6$ trigonometric ratios of an angle $\\theta$ are locked together by a single geometric skeleton! Give a detective **just ONE clue**—like $\\sin\\theta = \\frac{8}{17}$, or $\\tan\\theta = \\frac{a}{b}$, or $\\sec\\theta + \\tan\\theta = 5$, or $3\\sin\\theta + 4\\cos\\theta = 5$—and you can reconstruct **every single one of the other 5 ratios** with $100\\%$ precision!`,
    theoryHtml: `
      <h3>8.1 Case 1 — Numerical Ratio Given (Acute Angle $\\theta$)</h3>
      <p><strong>Universal 3-Step Method:</strong></p>
      <ol>
        <li>Isolate the given ratio as a clean fraction (e.g. $13\\cos\\theta = 5 \\implies \\cos\\theta = \\frac{5}{13} = \\frac{A}{H}$).</li>
        <li>Set the two sides to $5k$ and $13k$ ($k > 0$), and find the missing third side by Pythagoras: $O = \\sqrt{(13k)^2 - (5k)^2} = 12k$.</li>
        <li>Write out all remaining $5$ ratios ($k$ cancels in every fraction!).</li>
      </ol>

      <h3>8.2 Case 2 — Algebraic / Parametric Ratio Given</h3>
      <p>Exams love giving literal letters instead of numbers! Memorize these <strong>Three Classic Algebraic Pythagorean Triples</strong> so you recognize the third side on sight:</p>
      <div class="math-box">
        <div class="math-box-title">Famous Algebraic Right-Triangle Side Triples</div>
        $$1.\\quad (a^2 - b^2)^2 + (2ab)^2 = (a^2 + b^2)^2 \\quad \\Longrightarrow \\quad \\text{Legs: } a^2-b^2,\\; 2ab \\;\\big|\\; \\text{Hypotenuse: } a^2+b^2$$
        $$2.\\quad (x^2 - 1)^2 + (2x)^2 = (x^2 + 1)^2 \\quad \\Longrightarrow \\quad \\text{Legs: } x^2-1,\\; 2x \\;\\big|\\; \\text{Hypotenuse: } x^2+1$$
        $$3.\\quad p^2 + q^2 = (\\sqrt{p^2+q^2})^2 \\quad \\Longrightarrow \\quad \\text{If } \\tan\\theta = \\frac{p}{q}, \\text{ then } H = \\sqrt{p^2+q^2}$$
      </div>

      <h3>8.3 Case 3 — Finding Unknown Ratios in Quadrants I, II, III, IV</h3>
      <p>When $\\theta$ can lie in <em>any</em> quadrant, you need <strong>two pieces of information</strong>: (a) one ratio's value, and (b) either the Quadrant or the sign of a second ratio to pin down the unique quadrant!</p>
      <ul>
        <li><strong>ASTC Sign Matrix:</strong>
          <ul>
            <li><strong>Q-I:</strong> All $6$ positive ($+$).</li>
            <li><strong>Q-II:</strong> Only $\\sin\\theta, \\operatorname{cosec}\\theta > 0$; the other $4$ are negative ($-$).</li>
            <li><strong>Q-III:</strong> Only $\\tan\\theta, \\cot\\theta > 0$; the other $4$ are negative ($-$).</li>
            <li><strong>Q-IV:</strong> Only $\\cos\\theta, \\sec\\theta > 0$; the other $4$ are negative ($-$).</li>
          </ul>
        </li>
        <li><strong>Workflow:</strong> Compute the positive magnitudes $(|O|, |A|, H)$ from a right triangle as usual, then <strong>attach $+$ or $-$ to each of the 6 ratios</strong> according to the quadrant!</li>
      </ul>

      <h3>8.4 Case 4 — Finding Unknown Ratios from Sum/Difference or Quadratic Equations</h3>
      <ul>
        <li>
          <strong>Reciprocal Conjugate Trick ($\\sec\\theta + \\tan\\theta = p$ or $\\operatorname{cosec}\\theta + \\cot\\theta = p$):</strong><br/>
          Since $\\sec^2\\theta - \\tan^2\\theta = 1$, we immediately know $\\sec\\theta - \\tan\\theta = \\frac{1}{p}$! Adding and subtracting the two equations gives:
          $$\\sec\\theta = \\frac{p^2 + 1}{2p}, \\qquad \\tan\\theta = \\frac{p^2 - 1}{2p}, \\qquad \\sin\\theta = \\frac{\\tan\\theta}{\\sec\\theta} = \\frac{p^2 - 1}{p^2 + 1}$$
        </li>
        <li>
          <strong>Homogeneous Fraction Shortcut:</strong> If given $\\tan\\theta = \\frac{a}{b}$ and asked for $\\frac{a\\sin\\theta - b\\cos\\theta}{a\\sin\\theta + b\\cos\\theta}$ where every term has the <em>same degree</em> in $\\sin\\theta, \\cos\\theta$, divide numerator and denominator by $\\cos\\theta$ (or $\\cos^2\\theta$ if quadratic!) to plug in $\\tan\\theta$ directly without even finding $H$!
          <p><em>Warning:</em> If degrees don't match—like $\\frac{\\sin\\theta + 2}{\\cos\\theta - 1}$—you CANNOT just divide by $\\cos\\theta$ to get pure $\\tan\\theta$; use the triangle method instead!</p>
        </li>
        <li>
          <strong>Special Boundary Linear Equation $a\\sin\\theta + b\\cos\\theta = \\sqrt{a^2+b^2}$:</strong><br/>
          Divide by $\\sqrt{a^2+b^2}$ and compare with $\\sin\\theta\\sin\\theta + \\cos\\theta\\cos\\theta = 1$: this uniquely forces $\\sin\\theta = \\frac{a}{\\sqrt{a^2+b^2}}$ and $\\cos\\theta = \\frac{b}{\\sqrt{a^2+b^2}}$!
        </li>
      </ul>
    `,
    pitfalls: [
      "Substituting $\\sin\\theta = a$ and $\\cos\\theta = b$ when $\\tan\\theta = \\frac{a}{b}$ in NON-homogeneous expressions: In $a\\sin\\theta + b\\cos\\theta$, $\\sin\\theta = \\frac{a}{\\sqrt{a^2+b^2}}$, NOT $a$! The shortcut ONLY works in fractions where $\\sqrt{a^2+b^2}$ cancels from top and bottom.",
      "Forgetting negative signs in Quadrants II, III, IV: If $\\sin\\theta = \\frac{3}{5}$ and $\\theta \\in \\text{Q-II}$, then $\\cos\\theta = -\\frac{4}{5}$, NOT $+\\frac{4}{5}$!"
    ],
    examples: [
      {
        q: "Example 1 (Algebraic Sides): If $\\sin\\theta = \\frac{a^2 - b^2}{a^2 + b^2}$ ($a > b > 0$, $\\theta$ acute), find $\\cos\\theta$, $\\tan\\theta$, and $\\sec\\theta$.",
        sol: "Set $O = a^2 - b^2$ and $H = a^2 + b^2$. Then $A = \\sqrt{(a^2+b^2)^2 - (a^2-b^2)^2} = \\sqrt{4a^2b^2} = 2ab$. Hence $\\cos\\theta = \\frac{2ab}{a^2+b^2}$, $\\tan\\theta = \\frac{a^2-b^2}{2ab}$, and $\\sec\\theta = \\frac{a^2+b^2}{2ab}$."
      },
      {
        q: "Example 2 (Quadrant + Sign Constraint): Given $\\tan\\theta = \\frac{15}{8}$ and $\\cos\\theta < 0$, find $\\sin\\theta$ and $\\sec\\theta$.",
        sol: "Since $\\tan\\theta > 0$ (Q-I or Q-III) AND $\\cos\\theta < 0$ (Q-II or Q-III), $\\theta$ MUST lie in Quadrant III! Magnitudes: $O = 15, A = 8 \\implies H = \\sqrt{225 + 64} = 17$. In Q-III both $\\sin$ and $\\sec$ are negative: $\\sin\\theta = -\\frac{15}{17}$ and $\\sec\\theta = -\\frac{17}{8}$."
      },
      {
        q: "Example 3 (Conjugate Sum Equation): If $\\sec\\theta + \\tan\\theta = 3$, find $\\sin\\theta$ and $\\cos\\theta$.",
        sol: "From $\\sec^2\\theta - \\tan^2\\theta = 1$, we have $\\sec\\theta - \\tan\\theta = \\frac{1}{3}$. Add the two equations: $2\\sec\\theta = 3 + \\frac{1}{3} = \\frac{10}{3} \\implies \\sec\\theta = \\frac{5}{3} \\implies \\cos\\theta = \\frac{3}{5}$. Subtract them: $2\\tan\\theta = 3 - \\frac{1}{3} = \\frac{8}{3} \\implies \\tan\\theta = \\frac{4}{3}$. Finally $\\sin\\theta = \\tan\\theta \\cdot \\cos\\theta = \\frac{4}{3} \\cdot \\frac{3}{5} = \\frac{4}{5}$!"
      },
      {
        q: "Example 4 (Quadratic Equation in Ratios): Solve $6\\cos^2\\theta + \\sin\\theta - 4 = 0$ ($\\theta$ acute) to find $\\tan\\theta$.",
        sol: "Replace $\\cos^2\\theta = 1 - \\sin^2\\theta$: $6(1 - \\sin^2\\theta) + \\sin\\theta - 4 = 0 \\implies 6\\sin^2\\theta - \\sin\\theta - 2 = 0 \\implies (3\\sin\\theta - 2)(2\\sin\\theta + 1) = 0$. Since $\\theta$ is acute ($\\sin\\theta > 0$), $\\sin\\theta = \\frac{2}{3}$. Then $A = \\sqrt{9 - 4} = \\sqrt{5} \\implies \\tan\\theta = \\frac{2}{\\sqrt{5}}$."
      }
    ],
    quiz: [
      {
        q: "If $\\cos\\theta = -\\frac{5}{13}$ and $\\sin\\theta > 0$, what is $\\cot\\theta$?",
        options: ["$\\frac{5}{12}$", "$-\\frac{5}{12}$", "$-\\frac{12}{5}$", "$\\frac{12}{5}$"],
        answer: 1,
        explanation: "$\\cos\\theta < 0$ and $\\sin\\theta > 0$ places $\\theta$ in Quadrant II, where $\\cot\\theta < 0$. With $A=5, H=13 \\implies O=12$, we get $\\cot\\theta = -\\frac{5}{12}$."
      },
      {
        q: "If $\\operatorname{cosec}\\theta + \\cot\\theta = 5$, what is $\\operatorname{cosec}\\theta$?",
        options: ["$\\frac{13}{5}$", "$\\frac{12}{5}$", "$\\frac{26}{5}$", "$\\frac{5}{13}$"],
        answer: 0,
        explanation: "$\\operatorname{cosec}\\theta - \\cot\\theta = \\frac{1}{5}$. Adding gives $2\\operatorname{cosec}\\theta = 5 + \\frac{1}{5} = \\frac{26}{5} \\implies \\operatorname{cosec}\\theta = \\frac{13}{5}$."
      },
      {
        q: "If $\\tan\\theta = \\frac{x}{y}$ ($x,y > 0$), what is $\\frac{x\\sin\\theta + y\\cos\\theta}{x\\sin\\theta - y\\cos\\theta}$?",
        options: ["$\\frac{x^2 + y^2}{x^2 - y^2}$", "$\\frac{x + y}{x - y}$", "$1$", "$\\frac{2xy}{x^2+y^2}$"],
        answer: 0,
        explanation: "Divide top and bottom by $\\cos\\theta$: $\\frac{x\\tan\\theta + y}{x\\tan\\theta - y} = \\frac{x(x/y) + y}{x(x/y) - y} = \\frac{x^2 + y^2}{x^2 - y^2}$."
      },
      {
        q: "If $3\\sin\\theta + 4\\cos\\theta = 5$, what is the exact value of $\\sin\\theta$?",
        options: ["$\\frac{4}{5}$", "$\\frac{3}{5}$", "$\\frac{3}{4}$", "$1$"],
        answer: 1,
        explanation: "Notice $\\sqrt{3^2 + 4^2} = 5$! Dividing by $5$ gives $\\frac{3}{5}\\sin\\theta + \\frac{4}{5}\\cos\\theta = 1$, which uniquely matches $\\sin^2\\theta + \\cos^2\\theta = 1$ when $\\sin\\theta = \\frac{3}{5}$ and $\\cos\\theta = \\frac{4}{5}$."
      }
    ]
  },

  /* ========================================================================
     ULTRA-DETAILED: TRIGONOMETRIC IDENTITIES & 6×6 CONVERSION MATRIX
     ======================================================================== */
  identitiesUltra: {
    id: "ch-11-identities",
    grade: "Ch 11",
    tierId: "tier-3",
    tierColor: "#f59e0b",
    title: "11. Fundamental Trigonometric Identities",
    subtitle: "Geometric & coordinate proofs of all fundamental identities, domain restrictions, the full $6 \\times 6$ inter-conversion table, and eliminating $\\theta$ from parametric curves.",
    prerequisites: ["Chapters 4–8: All 6 Ratios & Unknown Ratios"],
    tags: ["3 Pythagorean Identities", "6×6 Conversion Table", "Domain Restrictions", "Eliminating θ"],
    sandboxType: "identityExplorer",
    intuition: `An **Identity** is an unbreakable law of mathematics that holds for *every permissible angle $\\theta$*, unlike a conditional equation that works only for select angles. Together, the **3 Reciprocal**, **2 Quotient**, and **3 Pythagorean Identities** form an $8$-gear clockwork machine: turn any *one* gear, and formulas exist to express all other $5$ functions directly in terms of it!`,
    theoryHtml: `
      <h3>11.1 Complete Family of 8 Fundamental Trigonometric Identities</h3>
      <div class="math-box">
        <div class="math-box-title">Reciprocal, Quotient & Pythagorean Master List</div>
        $$\\textbf{Reciprocal (3):}\\quad \\sin\\theta\\operatorname{cosec}\\theta = 1, \\qquad \\cos\\theta\\sec\\theta = 1, \\qquad \\tan\\theta\\cot\\theta = 1$$
        $$\\textbf{Quotient (2):}\\quad \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$$
        $$\\textbf{Pythagorean (3):}\\quad \\sin^2\\theta + \\cos^2\\theta = 1, \\qquad 1 + \\tan^2\\theta = \\sec^2\\theta, \\qquad 1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta$$
      </div>
      <ul>
        <li><strong>Where is each Pythagorean Identity valid?</strong>
          <ul>
            <li>$\\sin^2\\theta + \\cos^2\\theta = 1$ holds for <strong>ALL $\\theta \\in \\mathbb{R}$</strong> (zero exceptions!).</li>
            <li>$1 + \\tan^2\\theta = \\sec^2\\theta$ holds for all $\\theta \\neq (2n+1)\\frac{\\pi}{2}$ (i.e., $\\theta \\neq 90^\\circ, 270^\\circ, \\dots$ where $\\cos\\theta = 0$).</li>
            <li>$1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta$ holds for all $\\theta \\neq n\\pi$ (i.e., $\\theta \\neq 0^\\circ, 180^\\circ, \\dots$ where $\\sin\\theta = 0$).</li>
          </ul>
        </li>
      </ul>

      <h3>11.2 The Complete Conversion Matrix (Acute Angle $\\theta$)</h3>
      <p>Board exams frequently ask: <em>"Express all trigonometric ratios in terms of $\\sec A$ (or $\\cot A$)."</em> Here is the master conversion reference:</p>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Ratio</th>
              <th>In terms of $\\sin\\theta$</th>
              <th>In terms of $\\cos\\theta$</th>
              <th>In terms of $\\tan\\theta$</th>
              <th>In terms of $\\sec\\theta$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>$\\sin\\theta$</strong></td>
              <td>$\\sin\\theta$</td>
              <td>$\\sqrt{1-\\cos^2\\theta}$</td>
              <td>$\\frac{\\tan\\theta}{\\sqrt{1+\\tan^2\\theta}}$</td>
              <td>$\\frac{\\sqrt{\\sec^2\\theta-1}}{\\sec\\theta}$</td>
            </tr>
            <tr>
              <td><strong>$\\cos\\theta$</strong></td>
              <td>$\\sqrt{1-\\sin^2\\theta}$</td>
              <td>$\\cos\\theta$</td>
              <td>$\\frac{1}{\\sqrt{1+\\tan^2\\theta}}$</td>
              <td>$\\frac{1}{\\sec\\theta}$</td>
            </tr>
            <tr>
              <td><strong>$\\tan\\theta$</strong></td>
              <td>$\\frac{\\sin\\theta}{\\sqrt{1-\\sin^2\\theta}}$</td>
              <td>$\\frac{\\sqrt{1-\\cos^2\\theta}}{\\cos\\theta}$</td>
              <td>$\\tan\\theta$</td>
              <td>$\\sqrt{\\sec^2\\theta-1}$</td>
            </tr>
            <tr>
              <td><strong>$\\operatorname{cosec}\\theta$</strong></td>
              <td>$\\frac{1}{\\sin\\theta}$</td>
              <td>$\\frac{1}{\\sqrt{1-\\cos^2\\theta}}$</td>
              <td>$\\frac{\\sqrt{1+\\tan^2\\theta}}{\\tan\\theta}$</td>
              <td>$\\frac{\\sec\\theta}{\\sqrt{\\sec^2\\theta-1}}$</td>
            </tr>
            <tr>
              <td><strong>$\\sec\\theta$</strong></td>
              <td>$\\frac{1}{\\sqrt{1-\\sin^2\\theta}}$</td>
              <td>$\\frac{1}{\\cos\\theta}$</td>
              <td>$\\sqrt{1+\\tan^2\\theta}$</td>
              <td>$\\sec\\theta$</td>
            </tr>
            <tr>
              <td><strong>$\\cot\\theta$</strong></td>
              <td>$\\frac{\\sqrt{1-\\sin^2\\theta}}{\\sin\\theta}$</td>
              <td>$\\frac{\\cos\\theta}{\\sqrt{1-\\cos^2\\theta}}$</td>
              <td>$\\frac{1}{\\tan\\theta}$</td>
              <td>$\\frac{1}{\\sqrt{\\sec^2\\theta-1}}$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>11.3 Eliminating $\\theta$ Between Two Parametric Equations</h3>
      <p>Physics and coordinate geometry describe curves using $\\theta$ (like ellipses, hyperbolas, and rotating vectors). To eliminate $\\theta$:</p>
      <ol>
        <li><strong>Type 1 ($x = a\\cos\\theta,\\; y = b\\sin\\theta$):</strong> Isolate $\\cos\\theta = \\frac{x}{a}, \\sin\\theta = \\frac{y}{b}$ and square-add $\\implies \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ (Ellipse!).</li>
        <li><strong>Type 2 ($x = a\\sec\\theta,\\; y = b\\tan\\theta$):</strong> Isolate $\\sec\\theta = \\frac{x}{a}, \\tan\\theta = \\frac{y}{b}$ and square-subtract $\\implies \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ (Hyperbola!).</li>
        <li><strong>Type 3 (Rotation Pair $x = a\\cos\\theta + b\\sin\\theta,\\; y = a\\sin\\theta - b\\cos\\theta$):</strong> Square and add directly—the cross terms $+2ab\\sin\\theta\\cos\\theta$ and $-2ab\\sin\\theta\\cos\\theta$ cancel out completely!
          $$x^2 + y^2 = a^2(\\cos^2\\theta + \\sin^2\\theta) + b^2(\\sin^2\\theta + \\cos^2\\theta) = a^2 + b^2$$
        </li>
      </ol>
    `,
    pitfalls: [
      "Writing $\\sin\\theta + \\cos\\theta = 1$: NEVER drop the squares! $\\sin^2\\theta + \\cos^2\\theta = 1$, whereas at $45^\\circ$, $\\sin 45^\\circ + \\cos 45^\\circ = \\sqrt{2} \\approx 1.414 \\neq 1$!",
      "Getting the order backwards in $\\tan^2\\theta - \\sec^2\\theta$: Since $1 + \\tan^2\\theta = \\sec^2\\theta$, $\\sec^2\\theta - \\tan^2\\theta = +1$, while $\\tan^2\\theta - \\sec^2\\theta = -1$!"
    ],
    examples: [
      {
        q: "Example 1: Express $\\sin A$ and $\\operatorname{cosec} A$ purely in terms of $\\cot A$ (for acute $A$).",
        sol: "Start from $1 + \\cot^2 A = \\operatorname{cosec}^2 A \\implies \\operatorname{cosec} A = \\sqrt{1 + \\cot^2 A}$. Taking the reciprocal gives $\\sin A = \\frac{1}{\\operatorname{cosec} A} = \\frac{1}{\\sqrt{1 + \\cot^2 A}}$."
      },
      {
        q: "Example 2: If $3\\sin\\theta + 5\\cos\\theta = 5$, prove that $5\\sin\\theta - 3\\cos\\theta = \\pm 3$.",
        sol: "Let $5\\sin\\theta - 3\\cos\\theta = k$. Square and add the two equations using $(a\\cos\\theta+b\\sin\\theta)^2 + (a\\sin\\theta-b\\cos\\theta)^2 = a^2+b^2$: $(3\\sin\\theta + 5\\cos\\theta)^2 + (5\\sin\\theta - 3\\cos\\theta)^2 = 3^2 + 5^2 \\implies 5^2 + k^2 = 9 + 25 = 34 \\implies k^2 = 9 \\implies k = \\pm 3$!"
      },
      {
        q: "Example 3: Eliminate $\\theta$ from $x = a\\sec\\theta + b\\tan\\theta$ and $y = a\\tan\\theta + b\\sec\\theta$.",
        sol: "Square and SUBTRACT $x^2 - y^2$: $x^2 - y^2 = a^2(\\sec^2\\theta - \\tan^2\\theta) + b^2(\\tan^2\\theta - \\sec^2\\theta) + (2ab\\sec\\theta\\tan\\theta - 2ab\\sec\\theta\\tan\\theta) = a^2(1) + b^2(-1) = a^2 - b^2$!"
      }
    ],
    quiz: [
      {
        q: "Which expression equals $\\tan^2\\theta - \\sec^2\\theta$ for all valid $\\theta$?",
        options: ["$1$", "$-1$", "$0$", "$2\\tan^2\\theta$"],
        answer: 1,
        explanation: "Since $1 + \\tan^2\\theta = \\sec^2\\theta$, subtracting $\\sec^2\\theta$ and $1$ gives $\\tan^2\\theta - \\sec^2\\theta = -1$."
      },
      {
        q: "For acute $\\theta$, how is $\\cos\\theta$ written purely in terms of $\\tan\\theta$?",
        options: ["$\\frac{1}{\\sqrt{1 + \\tan^2\\theta}}$", "$\\frac{\\tan\\theta}{\\sqrt{1 + \\tan^2\\theta}}$", "$\\sqrt{1 - \\tan^2\\theta}$", "$\\frac{1}{\\tan\\theta}$"],
        answer: 0,
        explanation: "$\\sec\\theta = \\sqrt{1 + \\tan^2\\theta}$, so $\\cos\\theta = \\frac{1}{\\sec\\theta} = \\frac{1}{\\sqrt{1 + \\tan^2\\theta}}$."
      },
      {
        q: "If $x = 3\\cos\\theta - 4\\sin\\theta$ and $y = 3\\sin\\theta + 4\\cos\\theta$, what is $x^2 + y^2$?",
        options: ["$7$", "$25$", "$12$", "$1$"],
        answer: 1,
        explanation: "Cross-terms cancel upon squaring and adding: $x^2 + y^2 = 3^2 + 4^2 = 9 + 16 = 25$."
      },
      {
        q: "At which angle is the identity $1 + \\tan^2\\theta = \\sec^2\\theta$ NOT defined?",
        options: ["$0^\\circ$", "$45^\\circ$", "$90^\\circ$", "$180^\\circ$"],
        answer: 2,
        explanation: "At $\\theta = 90^\\circ$, $\\cos 90^\\circ = 0$, so both $\\tan 90^\\circ$ and $\\sec 90^\\circ$ involve division by zero."
      }
    ]
  },

  /* ========================================================================
     ULTRA-DETAILED: SIMPLIFICATION OF TRIGONOMETRIC EXPRESSIONS
     ======================================================================== */
  simplificationUltra: {
    id: "ch-12-simplification",
    grade: "Ch 12",
    tierId: "tier-3",
    tierColor: "#f59e0b",
    title: "12. Simplification of Trigonometric Expressions",
    subtitle: "Turn sprawling, intimidating trigonometric tangles into crisp 1-term answers using 6 systematic algebraic reduction tools.",
    prerequisites: ["Chapter 11: Trigonometric Identities"],
    tags: ["sin⁴+cos⁴ & sin⁶+cos⁶", "Factoring a³±b³", "LCM Fraction Merge", "Radical Conjugates"],
    sandboxType: "identityExplorer",
    intuition: `Why do students freeze when asked to simplify a giant expression like $3(\\sin^4\\theta + \\cos^4\\theta) - 2(\\sin^6\\theta + \\cos^6\\theta)$? Because they don't realize it's just **elementary polynomial algebra wearing a $\\sin/\\cos$ costume**! Once you let $s = \\sin\\theta$ and $c = \\cos\\theta$ (with $s^2 + c^2 = 1$), giant expressions collapse like magic—in fact, that scary degree-6 monster simplifies to the single number **$1$**!`,
    theoryHtml: `
      <h3>12.1 The Six Core Algebraic Tools for Trigonometric Simplification</h3>
      <ol>
        <li>
          <strong>Tool 1 — Convert Everything to $s = \\sin\\theta$ and $c = \\cos\\theta$:</strong><br/>
          Replace $\\tan = \\frac{s}{c}$, $\\cot = \\frac{c}{s}$, $\\sec = \\frac{1}{c}$, $\\operatorname{cosec} = \\frac{1}{s}$. Over $80\\%$ of simplification problems unravel immediately once only $s$ and $c$ remain!
        </li>
        <li>
          <strong>Tool 2 — Common Factor Extraction & Pythagorean Replacement:</strong><br/>
          Always pull out greatest common factors BEFORE expanding! E.g.:
          $$\\sin^3\\theta + \\sin\\theta\\cos^2\\theta = \\sin\\theta(\\sin^2\\theta + \\cos^2\\theta) = \\sin\\theta(1) = \\sin\\theta$$
          $$\\sec^4\\theta - \\sec^2\\theta = \\sec^2\\theta(\\sec^2\\theta - 1) = (1 + \\tan^2\\theta)\\tan^2\\theta = \\tan^2\\theta + \\tan^4\\theta$$
        </li>
        <li>
          <strong>Tool 3 — Difference of Squares & Sum/Difference of Cubes:</strong>
          <div class="math-box">
            <div class="math-box-title">Essential Polynomial Factorizations in Trig</div>
            $$\\sin^4\\theta - \\cos^4\\theta = (\\sin^2\\theta - \\cos^2\\theta)(\\sin^2\\theta + \\cos^2\\theta) = \\sin^2\\theta - \\cos^2\\theta = 2\\sin^2\\theta - 1$$
            $$\\sin^3\\theta + \\cos^3\\theta = (\\sin\\theta + \\cos\\theta)(\\sin^2\\theta - \\sin\\theta\\cos\\theta + \\cos^2\\theta) = (\\sin\\theta + \\cos\\theta)(1 - \\sin\\theta\\cos\\theta)$$
            $$\\sin^3\\theta - \\cos^3\\theta = (\\sin\\theta - \\cos\\theta)(1 + \\sin\\theta\\cos\\theta)$$
          </div>
        </li>
        <li>
          <strong>Tool 4 — Completing the Square on $\\sin^4\\theta + \\cos^4\\theta$ and $\\sin^6\\theta + \\cos^6\\theta$:</strong><br/>
          Memorize these two legendary power-sum reductions—they appear on nearly every competitive and board exam!
          <div class="math-box">
            <div class="math-box-title">4th-Power & 6th-Power Sum Reductions</div>
            $$\\sin^4\\theta + \\cos^4\\theta = (\\sin^2\\theta + \\cos^2\\theta)^2 - 2\\sin^2\\theta\\cos^2\\theta = 1 - 2\\sin^2\\theta\\cos^2\\theta$$
            $$\\sin^6\\theta + \\cos^6\\theta = (\\sin^2\\theta + \\cos^2\\theta)^3 - 3\\sin^2\\theta\\cos^2\\theta(\\sin^2\\theta + \\cos^2\\theta) = 1 - 3\\sin^2\\theta\\cos^2\\theta$$
          </div>
          Look what happens when you compute $3(\\sin^4\\theta + \\cos^4\\theta) - 2(\\sin^6\\theta + \\cos^6\\theta)$:
          $$3(1 - 2\\sin^2\\theta\\cos^2\\theta) - 2(1 - 3\\sin^2\\theta\\cos^2\\theta) = 3 - 6\\sin^2\\theta\\cos^2\\theta - 2 + 6\\sin^2\\theta\\cos^2\\theta = 1!$$
        </li>
        <li>
          <strong>Tool 5 — Merging Fractions Over an LCM Denominator:</strong><br/>
          Adding two fractions like $\\frac{\\cos\\theta}{1 - \\sin\\theta} + \\frac{\\cos\\theta}{1 + \\sin\\theta}$ brings $(1-\\sin\\theta)(1+\\sin\\theta) = \\cos^2\\theta$ into the denominator!
        </li>
        <li>
          <strong>Tool 6 — Rationalizing Conjugates Under Square Roots:</strong><br/>
          Multiply $\\sqrt{\\frac{1 - \\cos\\theta}{1 + \\cos\\theta}}$ inside the radical by $\\frac{1 - \\cos\\theta}{1 - \\cos\\theta}$ to get $\\frac{1 - \\cos\\theta}{|\\sin\\theta|} = \\operatorname{cosec}\\theta - \\cot\\theta$ (for acute $\\theta$).
        </li>
      </ol>
    `,
    pitfalls: [
      "Expanding factored denominators too early: Keep denominators factored like $\\cos\\theta(1 + \\sin\\theta)$ because $(1 + \\sin\\theta)$ almost always cancels with the simplified numerator!",
      "Canceling individual terms across addition: In $\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta}$, DO NOT cross out $\\sin\\theta$ to leave $1 + \\cos\\theta$! Split properly as $\\frac{\\sin\\theta}{\\sin\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = 1 + \\cot\\theta$."
    ],
    examples: [
      {
        q: "Example 1 (LCM Merge): Simplify $\\frac{\\sin\\theta}{1 + \\cos\\theta} + \\frac{1 + \\cos\\theta}{\\sin\\theta}$.",
        sol: "Take common denominator $\\sin\\theta(1 + \\cos\\theta)$: $\\frac{\\sin^2\\theta + (1 + \\cos\\theta)^2}{\\sin\\theta(1 + \\cos\\theta)} = \\frac{\\sin^2\\theta + 1 + 2\\cos\\theta + \\cos^2\\theta}{\\sin\\theta(1 + \\cos\\theta)}$. Since $\\sin^2\\theta + \\cos^2\\theta = 1$, numerator becomes $2 + 2\\cos\\theta = 2(1 + \\cos\\theta)$. Cancel $(1 + \\cos\\theta)$ to get $\\frac{2}{\\sin\\theta} = 2\\operatorname{cosec}\\theta$!"
      },
      {
        q: "Example 2 (Factoring Cubes): Simplify $\\frac{\\sin^3\\theta + \\cos^3\\theta}{\\sin\\theta + \\cos\\theta} + \\sin\\theta\\cos\\theta$.",
        sol: "Factor numerator via $a^3+b^3 = (a+b)(a^2-ab+b^2)$: $\\frac{(\\sin\\theta+\\cos\\theta)(1 - \\sin\\theta\\cos\\theta)}{\\sin\\theta+\\cos\\theta} + \\sin\\theta\\cos\\theta = (1 - \\sin\\theta\\cos\\theta) + \\sin\\theta\\cos\\theta = 1$!"
      },
      {
        q: "Example 3 (Product-Sum Miracle): Simplify $\\tan^2\\theta - \\sin^2\\theta$ into a single product.",
        sol: "Write $\\tan^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta}$ and factor out $\\sin^2\\theta$: $\\sin^2\\theta\\!\\left(\\frac{1}{\\cos^2\\theta} - 1\\right) = \\sin^2\\theta\\!\\left(\\frac{1 - \\cos^2\\theta}{\\cos^2\\theta}\\right) = \\sin^2\\theta\\!\\left(\\frac{\\sin^2\\theta}{\\cos^2\\theta}\\right) = \\tan^2\\theta \\cdot \\sin^2\\theta$! Notice the difference equals the product!"
      },
      {
        q: "Example 4 (High-Power Constant Reduction): Simplify $2(\\sin^6\\theta + \\cos^6\\theta) - 3(\\sin^4\\theta + \\cos^4\\theta) + 1$.",
        sol: "Substitute $\\sin^6\\theta+\\cos^6\\theta = 1 - 3s^2c^2$ and $\\sin^4\\theta+\\cos^4\\theta = 1 - 2s^2c^2$: $2(1 - 3s^2c^2) - 3(1 - 2s^2c^2) + 1 = 2 - 6s^2c^2 - 3 + 6s^2c^2 + 1 = 0$!"
      }
    ],
    quiz: [
      {
        q: "Simplify $(\\sec A + \\tan A)(1 - \\sin A)$.",
        options: ["$\\sin A$", "$\\cos A$", "$\\sec A$", "$1$"],
        answer: 1,
        explanation: "$\\left(\\frac{1}{\\cos A} + \\frac{\\sin A}{\\cos A}\\right)(1 - \\sin A) = \\frac{(1 + \\sin A)(1 - \\sin A)}{\\cos A} = \\frac{1 - \\sin^2 A}{\\cos A} = \\frac{\\cos^2 A}{\\cos A} = \\cos A$."
      },
      {
        q: "Simplify $\\frac{1 + \\tan^2 A}{1 + \\cot^2 A}$.",
        options: ["$\\sec^2 A$", "$-1$", "$\\cot^2 A$", "$\\tan^2 A$"],
        answer: 3,
        explanation: "$\\frac{1 + \\tan^2 A}{1 + \\cot^2 A} = \\frac{\\sec^2 A}{\\operatorname{cosec}^2 A} = \\frac{1/\\cos^2 A}{1/\\sin^2 A} = \\frac{\\sin^2 A}{\\cos^2 A} = \\tan^2 A$."
      },
      {
        q: "What does $\\operatorname{cosec}^2\\theta + \\sec^2\\theta$ simplify to as a single product?",
        options: ["$1$", "$\\operatorname{cosec}^2\\theta \\cdot \\sec^2\\theta$", "$\\tan^2\\theta \\cdot \\cot^2\\theta$", "$2$"],
        answer: 1,
        explanation: "$\\frac{1}{\\sin^2\\theta} + \\frac{1}{\\cos^2\\theta} = \\frac{\\cos^2\\theta + \\sin^2\\theta}{\\sin^2\\theta\\cos^2\\theta} = \\frac{1}{\\sin^2\\theta\\cos^2\\theta} = \\operatorname{cosec}^2\\theta \\cdot \\sec^2\\theta$! Sum equals product!"
      },
      {
        q: "Evaluate $3(\\sin^4\\theta + \\cos^4\\theta) - 2(\\sin^6\\theta + \\cos^6\\theta)$ for $\\theta = 23.7^\\circ$.",
        options: ["$0$", "$1$", "$5$", "Depends on $\\theta$"],
        answer: 1,
        explanation: "It simplifies identically to $3(1 - 2s^2c^2) - 2(1 - 3s^2c^2) = 1$ for EVERY real angle $\\theta$!"
      }
    ]
  },

  /* ========================================================================
     ULTRA-DETAILED: PROVING TRIGONOMETRIC IDENTITIES
     ======================================================================== */
  provingIdentitiesUltra: {
    id: "ch-13-proving",
    grade: "Ch 13",
    tierId: "tier-3",
    tierColor: "#f59e0b",
    title: "13. Proving Trigonometric Identities (7 Master Techniques)",
    subtitle: "Conquer the toughest LHS = RHS board & Olympiad proofs—including the famous 'Replace 1' trick, Componendo-Dividendo, and Conditional Proofs.",
    prerequisites: ["Chapters 11–12: Identities & Expression Simplification"],
    tags: ["7 Proof Strategies", "'Replace 1' Boss Trick", "Componendo-Dividendo", "Conditional Identities"],
    sandboxType: "identityExplorer",
    intuition: `Proving an identity is way nicer than a regular math problem because **the exam literally prints the final answer (RHS) right on the page for you**! Your job is simply building a valid algebraic bridge from LHS to RHS without ever assuming the equality is already true. Master the **7 Signature Proof Techniques** below, and even the hardest 5-mark proof becomes predictable!`,
    theoryHtml: `
      <h3>13.1 Strict Golden Rules of Formal Identity Proofs</h3>
      <ul>
        <li><strong>NEVER cross-multiply or transpose terms across the '$=$' sign!</strong> Writing $\\frac{A}{B} = \\frac{C}{D} \\implies AD = BC$ assumes what you were asked to prove.</li>
        <li><strong>Three Legal Proof Formats:</strong>
          <ol>
            <li><strong>LHS $\\longrightarrow$ RHS:</strong> Start with LHS and transform step-by-step until it matches RHS.</li>
            <li><strong>RHS $\\longrightarrow$ LHS:</strong> Start with RHS when RHS is clearly the bulkier side.</li>
            <li><strong>Meet-in-the-Middle:</strong> Simplify $\\text{LHS} = M$ and separately simplify $\\text{RHS} = M$, then conclude $\\therefore \\text{LHS} = \\text{RHS}$.</li>
          </ol>
        </li>
      </ul>

      <h3>13.2 The 7 Master Proof Techniques</h3>
      <div class="math-box">
        <div class="math-box-title">Your Complete Proof Arsenal</div>
        <p><strong>Technique 1 (Target-Guided $\\sin/\\cos$ Reduction):</strong> Convert to $\\sin, \\cos$, combine fractions, and keep one eye on RHS's denominator so you know which factor to preserve!</p>
        <p><strong>Technique 2 (Conjugate Multiplication):</strong> When LHS has $1 \\pm \\sin\\theta$ or $1 \\pm \\cos\\theta$ and RHS has the opposite sign (or $\\sec\\theta \\mp \\tan\\theta$), multiply numerator & denominator of LHS by the conjugate $(1 \\mp \\sin\\theta)$ or $(1 \\mp \\cos\\theta)$.</p>
        <p><strong>Technique 3 (The Famous "Replace $1$" Trinomial Boss Trick!):</strong><br/>
        Whenever you face a 3-term fraction like $\\dfrac{\\cos A - \\sin A + 1}{\\cos A + \\sin A - 1} = \\operatorname{cosec} A + \\cot A$:</p>
        <ol>
          <li>Look at the target RHS ($\\operatorname{cosec} A + \\cot A$ have $\\sin A$ in the denominator) $\\implies$ divide numerator & denominator by $\\sin A$ to get $\\dfrac{\\cot A - 1 + \\operatorname{cosec} A}{\\cot A + 1 - \\operatorname{cosec} A}$.</li>
          <li>Replace ONLY the numerator's '$1$' with $(\\operatorname{cosec}^2 A - \\cot^2 A) = (\\operatorname{cosec} A - \\cot A)(\\operatorname{cosec} A + \\cot A)$!</li>
          <li>Factor out $(\\operatorname{cosec} A + \\cot A)$ from the numerator—the entire remaining trinomial $(1 - \\operatorname{cosec} A + \\cot A)$ cancels cleanly with the denominator!</li>
        </ol>
        <p><strong>Technique 4 (Split a Sum vs Product Bridge):</strong> Remember $\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta$ and $\\sec^2\\theta + \\operatorname{cosec}^2\\theta = \\sec^2\\theta\\operatorname{cosec}^2\\theta$.</p>
        <p><strong>Technique 5 (Componendo & Dividendo for Ratio Proportions):</strong><br/>
        If $\\frac{P}{Q} = \\frac{R}{S}$, then $\\frac{P + Q}{P - Q} = \\frac{R + S}{R - S}$! Ideal when given $\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta} = \\frac{a}{b}$.</p>
        <p><strong>Technique 6 (Squaring Auxiliary Equations in Conditional Proofs):</strong><br/>
        If given $\\sin\\theta + \\cos\\theta = p$, immediately square both sides: $1 + 2\\sin\\theta\\cos\\theta = p^2 \\implies \\sin\\theta\\cos\\theta = \\frac{p^2 - 1}{2}$!</p>
        <p><strong>Technique 7 (Split into Partial Fractions):</strong> When the numerator has multiple terms over a single product $\\sin\\theta\\cos\\theta$, split $\\frac{A + B}{\\sin\\theta\\cos\\theta} = \\frac{A}{\\sin\\theta\\cos\\theta} + \\frac{B}{\\sin\\theta\\cos\\theta}$.</p>
      </div>
    `,
    pitfalls: [
      "Replacing BOTH '$1$'s in the Trinomial Boss Trick: Replace ONLY the '$1$' in the numerator (if target is in the numerator) and leave the denominator's '$1$' untouched so the trinomial cancels!",
      "Dividing by $\\cos A$ instead of $\\sin A$ in the Trinomial Boss Trick: If RHS wants $\\sec A + \\tan A$, divide by $\\cos A$; if RHS wants $\\operatorname{cosec} A + \\cot A$, divide by $\\sin A$!"
    ],
    examples: [
      {
        q: "Boss Proof 1 ('Replace 1' Classic): Prove $\\frac{\\sin\\theta - \\cos\\theta + 1}{\\sin\\theta + \\cos\\theta - 1} = \\frac{1}{\\sec\\theta - \\tan\\theta}$.",
        sol: "First note $\\frac{1}{\\sec\\theta - \\tan\\theta} = \\sec\\theta + \\tan\\theta$. Divide top & bottom of LHS by $\\cos\\theta$: $\\text{LHS} = \\frac{\\tan\\theta - 1 + \\sec\\theta}{\\tan\\theta + 1 - \\sec\\theta} = \\frac{(\\sec\\theta + \\tan\\theta) - (\\sec^2\\theta - \\tan^2\\theta)}{1 - \\sec\\theta + \\tan\\theta} = \\frac{(\\sec\\theta + \\tan\\theta)[1 - (\\sec\\theta - \\tan\\theta)]}{1 - \\sec\\theta + \\tan\\theta} = \\sec\\theta + \\tan\\theta = \\frac{\\sec^2\\theta - \\tan^2\\theta}{\\sec\\theta - \\tan\\theta} = \\frac{1}{\\sec\\theta - \\tan\\theta} = \\text{RHS}$!"
      },
      {
        q: "Boss Proof 2 (Meet-in-the-Middle): Prove $\\frac{\\cot A - \\cos A}{\\cot A + \\cos A} = \\frac{\\operatorname{cosec} A - 1}{\\operatorname{cosec} A + 1}$.",
        sol: "Write $\\cot A = \\frac{\\cos A}{\\sin A}$ in LHS: $\\text{LHS} = \\frac{\\frac{\\cos A}{\\sin A} - \\cos A}{\\frac{\\cos A}{\\sin A} + \\cos A}$. Factor out $\\cos A$ and cancel it from top and bottom: $\\frac{\\frac{1}{\\sin A} - 1}{\\frac{1}{\\sin A} + 1} = \\frac{\\operatorname{cosec} A - 1}{\\operatorname{cosec} A + 1} = \\text{RHS}$."
      },
      {
        q: "Boss Proof 3 (Conditional Identity): If $\\sin\\theta + \\sin^2\\theta = 1$, prove that $\\cos^2\\theta + \\cos^4\\theta = 1$.",
        sol: "From the given condition: $\\sin\\theta = 1 - \\sin^2\\theta = \\cos^2\\theta$! Square both sides to also get $\\sin^2\\theta = \\cos^4\\theta$. Now evaluate $\\cos^2\\theta + \\cos^4\\theta = \\sin\\theta + \\sin^2\\theta = 1$ (by the given equation)!"
      },
      {
        q: "Boss Proof 4 (Conditional Identity with $m, n$): If $\\tan\\theta + \\sin\\theta = m$ and $\\tan\\theta - \\sin\\theta = n$, prove $m^2 - n^2 = 4\\sqrt{mn}$.",
        sol: "$\\text{LHS} = m^2 - n^2 = (m+n)(m-n) = (2\\tan\\theta)(2\\sin\\theta) = 4\\tan\\theta\\sin\\theta$. Now simplify $\\text{RHS} = 4\\sqrt{(\\tan\\theta+\\sin\\theta)(\\tan\\theta-\\sin\\theta)} = 4\\sqrt{\\tan^2\\theta - \\sin^2\\theta} = 4\\sqrt{\\sin^2\\theta(\\sec^2\\theta - 1)} = 4\\sqrt{\\sin^2\\theta\\tan^2\\theta} = 4\\tan\\theta\\sin\\theta = \\text{LHS}$!"
      }
    ],
    quiz: [
      {
        q: "To prove $\\frac{\\cos A - \\sin A + 1}{\\cos A + \\sin A - 1} = \\operatorname{cosec} A + \\cot A$, what should you divide numerator and denominator of LHS by FIRST?",
        options: ["$\\cos A$", "$\\sin A$", "$\\tan A$", "$\\sin A \\cos A$"],
        answer: 1,
        explanation: "Because RHS contains $\\operatorname{cosec} A = \\frac{1}{\\sin A}$ and $\\cot A = \\frac{\\cos A}{\\sin A}$, dividing by $\\sin A$ directly creates $\\cot A$ and $\\operatorname{cosec} A$!"
      },
      {
        q: "If $\\cos\\theta + \\cos^2\\theta = 1$, what is the exact value of $\\sin^2\\theta + \\sin^4\\theta$?",
        options: ["$0$", "$1$", "$2$", "$\\frac{1}{2}$"],
        answer: 1,
        explanation: "From $\\cos\\theta = 1 - \\cos^2\\theta = \\sin^2\\theta$, squaring gives $\\cos^2\\theta = \\sin^4\\theta$. Thus $\\sin^2\\theta + \\sin^4\\theta = \\cos\\theta + \\cos^2\\theta = 1$."
      },
      {
        q: "If $\\sin\\theta + \\cos\\theta = \\sqrt{2}$, what is $\\tan\\theta + \\cot\\theta$?",
        options: ["$1$", "$2$", "$\\sqrt{2}$", "$4$"],
        answer: 1,
        explanation: "Square the given equation: $1 + 2\\sin\\theta\\cos\\theta = 2 \\implies \\sin\\theta\\cos\\theta = \\frac{1}{2}$. Then $\\tan\\theta + \\cot\\theta = \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{1/2} = 2$."
      },
      {
        q: "Which step is INVALID in a formal LHS = RHS trigonometric identity proof?",
        options: [
          "Multiplying numerator and denominator of LHS by $(1 - \\cos\\theta)$",
          "Cross-multiplying LHS's denominator into RHS from line 1 as if '=' is already proved",
          "Simplifying LHS to $2\\sec\\theta$ and separately simplifying RHS to $2\\sec\\theta$",
          "Replacing $1$ with $\\sin^2\\theta + \\cos^2\\theta$"
        ],
        answer: 1,
        explanation: "Cross-multiplying across an unproved equality assumes the conclusion (circular logic unless reversed cleanly)."
      }
    ]
  },

  /* ========================================================================
     ULTRA-DETAILED: HEIGHTS & DISTANCES MASTERCLASS (PART 2 — ADVANCED BOSS PROBLEMS)
     ======================================================================== */
  heightsAdvancedUltra: {
    id: "ch-15-heights-advanced",
    grade: "Ch 15",
    tierId: "tier-3",
    tierColor: "#f59e0b",
    title: "15. Heights and Distances (Part 2: Advanced Boss Problems)",
    subtitle: "Conquer the most famous exam & Olympiad surveying problems: Cloud Reflection in a Lake, Broken Tree, Two Vertical Poles, Rising Balloon & 3D Bearings.",
    prerequisites: ["Chapter 14: Heights & Distances Core Blueprints"],
    tags: ["Cloud & Lake Reflection", "Broken Tree Problem", "Two-Pole Intersection", "3D Tower Bearings"],
    sandboxType: "elevation",
    intuition: `Once you know the $5$ basic Heights & Distances blueprints, exams combine optics, physics, and 3D geometry into **5 Legendary Boss Problems**: a cloud reflected deep inside a still lake, a storm-broken tree whose tip touches the ground, a spherical balloon subtending angle $\\alpha$ at your eye, two poles facing each other across a road, and a 3D tower viewed from Due South and Due East! Let's dismantle all $5$ cleanly.`,
    theoryHtml: `
      <h3>15.1 Boss Blueprint 1 — Cloud & Its Reflection in a Lake</h3>
      <p>Suppose an observer stands on a deck at height $h$ above a calm lake. A cloud sits at height $H$ above the lake surface ($H > h$). By the <strong>Law of Reflection in Plane Mirrors</strong>, the virtual image of the cloud appears at depth $H$ <strong>BELOW</strong> the water surface!</p>
      <ul>
        <li>Horizontal distance to cloud $= x$.</li>
        <li><strong>Upper Triangle (Elevation $\\alpha$ to Cloud):</strong> Vertical rise above observer's eye $= H - h \\implies \\tan\\alpha = \\frac{H - h}{x}$.</li>
        <li><strong>Lower Triangle (Depression $\\beta$ to Reflection):</strong> Vertical drop below observer's eye $= H + h \\implies \\tan\\beta = \\frac{H + h}{x}$! (Notice $+h$, NOT $-h$!)</li>
      </ul>
      <div class="math-box">
        <div class="math-box-title">Cloud Height Master Formula (Derived by Equating $x$)</div>
        $$\\frac{H - h}{\\tan\\alpha} = \\frac{H + h}{\\tan\\beta} \\quad \\Longrightarrow \\quad H = h\\left(\\frac{\\tan\\beta + \\tan\\alpha}{\\tan\\beta - \\tan\\alpha}\\right)$$
      </div>

      <h3>15.2 Boss Blueprint 2 — Storm-Broken Tree</h3>
      <p>A vertical tree of original total height $H_{\\text{tree}} = y + L$ snaps at height $y$ above the ground so that the broken upper part $L$ hinges over (without detaching!) and touches the ground at distance $d$ from the foot at angle $\\theta$:</p>
      <ul>
        <li>Standing stump height: $y = d\\tan\\theta$.</li>
        <li>Broken slanted part (Hypotenuse!): $L = \\frac{d}{\\cos\\theta} = d\\sec\\theta$.</li>
        <li><strong>Original Full Height of Tree:</strong> $H_{\\text{tree}} = y + L = d(\\tan\\theta + \\sec\\theta)$!</li>
      </ul>

      <h3>15.3 Boss Blueprint 3 — Spherical Balloon of Radius $r$</h3>
      <p>A round balloon of radius $r$ subtends angle $\\alpha$ at the observer's eye while the angle of elevation of its center $C$ is $\\beta$. The lines of sight to the balloon's edges are <strong>tangents</strong> perpendicular to the radii $r$, bisecting $\\alpha$ into $\\alpha/2$!</p>
      <div class="math-box">
        <div class="math-box-title">Spherical Balloon Center Height</div>
        $$\\text{Distance Eye-to-Center } OC = \\frac{r}{\\sin(\\alpha/2)} = r\\operatorname{cosec}\\!\\left(\\frac{\\alpha}{2}\\right) \\implies H_{\\text{center}} = OC\\sin\\beta = r\\sin\\beta\\operatorname{cosec}\\!\\left(\\frac{\\alpha}{2}\\right)$$
      </div>

      <h3>15.4 Boss Blueprint 4 — Crossing Cables Between Two Poles ($h_1$ and $h_2$)</h3>
      <p>Two vertical poles of heights $a$ and $b$ stand any distance $D$ apart. Straight cables connect the top of each pole to the foot of the opposite pole. At what height $h$ above the ground do the two cables intersect? Using $\\tan\\alpha = \\frac{a}{D}$ and $\\tan\\beta = \\frac{b}{D}$:</p>
      <div class="math-box">
        <div class="math-box-title">Crossed-Pole Harmonic Mean Theorem (Independent of Road Width $D$!)</div>
        $$\\frac{1}{h} = \\frac{1}{a} + \\frac{1}{b} \\quad \\Longrightarrow \\quad h = \\frac{ab}{a + b}$$
      </div>

      <h3>15.5 Boss Blueprint 5 — 3D Tower Bearings (South & East)</h3>
      <p>A vertical tower of height $h$ stands at $O$. Observer $A$ due South sees elevation $\\alpha$ ($OA = h\\cot\\alpha$), and Observer $B$ due East sees elevation $\\beta$ ($OB = h\\cot\\beta$). Since South $\\perp$ East on the flat ground ($\\angle AOB = 90^\\circ$!), the ground distance $AB = d$ satisfies Pythagoras:</p>
      <div class="math-box">
        <div class="math-box-title">3D Orthogonal Bearing Tower Formula</div>
        $$OA^2 + OB^2 = AB^2 \\implies h^2\\cot^2\\alpha + h^2\\cot^2\\beta = d^2 \\implies h = \\frac{d}{\\sqrt{\\cot^2\\alpha + \\cot^2\\beta}}$$
      </div>
    `,
    pitfalls: [
      "In the Cloud & Lake problem, using depth $H - h$ instead of $H + h$ for the reflection: The cloud is $H$ above the water, so its mirror image is $H$ BELOW the water, which is $(H + h)$ below an observer standing $h$ above the water!",
      "In the Broken Tree problem, reporting ONLY the stump height $y$ instead of the ORIGINAL tree height $y + L$!"
    ],
    examples: [
      {
        q: "Example 1 (Cloud Reflection in a Lake): The angle of elevation of a cloud from a point $60\\text{ m}$ above a lake is $30^\\circ$ and the angle of depression of its reflection in the lake is $60^\\circ$. Find the height of the cloud above the lake.",
        sol: "Here $h = 60\\text{ m}, \\alpha = 30^\\circ, \\beta = 60^\\circ$. Using $H = h\\left(\\frac{\\tan 60^\\circ + \\tan 30^\\circ}{\\tan 60^\\circ - \\tan 30^\\circ}\\right) = 60\\left(\\frac{\\sqrt{3} + 1/\\sqrt{3}}{\\sqrt{3} - 1/\\sqrt{3}}\\right) = 60\\left(\\frac{4/\\sqrt{3}}{2/\\sqrt{3}}\\right) = 60 \\times 2 = 120\\text{ m}$!"
      },
      {
        q: "Example 2 (Broken Tree): A tree breaks due to a storm and the broken part bends so that the top of the tree touches the ground making an angle of $30^\\circ$ with it. The distance between the foot of the tree and the point where the top touches the ground is $8\\text{ m}$. Find the original height of the tree.",
        sol: "Stump $y = 8\\tan 30^\\circ = \\frac{8}{\\sqrt{3}}\\text{ m}$. Fallen part $L = 8\\sec 30^\\circ = \\frac{16}{\\sqrt{3}}\\text{ m}$. Original height $= y + L = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3} \\approx 13.86\\text{ m}$."
      },
      {
        q: "Example 3 (Moving Car Time-to-Tower): A man at the top of a tower observes a car moving at uniform speed straight toward it. If it takes $12$ minutes for the angle of depression to change from $30^\\circ$ to $45^\\circ$, how much more time will the car take to reach the tower?",
        sol: "Let height be $h$. Distance at $30^\\circ$ is $h\\cot 30^\\circ = h\\sqrt{3}$; distance at $45^\\circ$ is $h\\cot 45^\\circ = h$. So distance $h(\\sqrt{3} - 1)$ takes $12\\text{ min}$. Remaining distance to tower is $h$, so time remaining $= \\frac{12}{\\sqrt{3} - 1} = \\frac{12(\\sqrt{3} + 1)}{2} = 6(\\sqrt{3} + 1) \\approx 16.39\\text{ minutes}$!"
      },
      {
        q: "Example 4 (Complementary Elevations Shortcut): The angles of elevation of the top of a tower from two points at distances $a$ and $b$ from the base and in the same straight line with it are complementary ($\\theta$ and $90^\\circ - \\theta$). Prove the height of the tower is $\\sqrt{ab}$.",
        sol: "From point 1: $\\tan\\theta = \\frac{h}{a}$. From point 2: $\\tan(90^\\circ - \\theta) = \\cot\\theta = \\frac{h}{b}$. Multiply the two equations: $\\tan\\theta \\cdot \\cot\\theta = \\frac{h}{a} \\cdot \\frac{h}{b} \\implies 1 = \\frac{h^2}{ab} \\implies h = \\sqrt{ab}$ (Geometric Mean)!"
      }
    ],
    quiz: [
      {
        q: "From two collinear points at distances $4\\text{ m}$ and $9\\text{ m}$ from the foot of a tower, the angles of elevation of its top are complementary. What is the height of the tower?",
        options: ["$5\\text{ m}$", "$6\\text{ m}$", "$6.5\\text{ m}$", "$13\\text{ m}$"],
        answer: 1,
        explanation: "For complementary elevations at distances $a$ and $b$, $h = \\sqrt{ab} = \\sqrt{4 \\times 9} = \\sqrt{36} = 6\\text{ m}$."
      },
      {
        q: "An observer sits $20\\text{ m}$ above a calm lake. If a cloud is $100\\text{ m}$ above the lake surface, how far vertically below the observer's eye is the cloud's virtual reflection?",
        options: ["$80\\text{ m}$", "$100\\text{ m}$", "$120\\text{ m}$", "$200\\text{ m}$"],
        answer: 2,
        explanation: "The reflection lies $100\\text{ m}$ below the lake surface, plus $20\\text{ m}$ from water up to the observer's eye $= 120\\text{ m}$."
      },
      {
        q: "Two vertical poles of heights $6\\text{ m}$ and $12\\text{ m}$ have taut wires connecting each top to the opposite foot. At what height above the ground do the wires cross?",
        options: ["$3\\text{ m}$", "$4\\text{ m}$", "$8\\text{ m}$", "$9\\text{ m}$"],
        answer: 1,
        explanation: "By the Crossed-Pole Formula $h = \\frac{ab}{a + b} = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\text{ m}$."
      },
      {
        q: "A vertical pole breaks at some height and its top touches the ground $6\\text{ m}$ from the base at an angle of $60^\\circ$. What is the length of just the fallen slanted portion?",
        options: ["$12\\text{ m}$", "$6\\sqrt{3}\\text{ m}$", "$3\\text{ m}$", "$6 + 6\\sqrt{3}\\text{ m}$"],
        answer: 0,
        explanation: "With Adjacent $= 6\\text{ m}$ and ground angle $60^\\circ$, Hypotenuse $L = \\frac{6}{\\cos 60^\\circ} = \\frac{6}{1/2} = 12\\text{ m}$."
      }
    ]
  }
};
