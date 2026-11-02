/* ==========================================================================
   TrigVerse Ultra-Detailed Core —
   Triple-Angle, Half-Angle, Sum-to-Product, Product-to-Sum,
   Trig Equations, General Solutions, Oblique Laws, Inverse Trig & Calculus
   ========================================================================== */

window.TRIG_CLASS11B_12_MODULES = [
  /* ========================================================================
     CHAPTER 24: TRIPLE-ANGLE FORMULAS
     ======================================================================== */
  {
    id: "ch-24-triple-angle",
    grade: "Ch 24 • Core ",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "24. Triple-Angle Formulas",
    subtitle: "Full algebraic derivations of $\\sin 3A$, $\\cos 3A$, and $\\tan 3A$, cubic power-reductions, exact golden-ratio surds for $18^\\circ$ & $36^\\circ$, and the famous $60^\\circ \\pm A$ triple-product theorem.",
    prerequisites: ["Chapter 22: Compound Angles", "Chapter 23: Double-Angle Formulas"],
    tags: ["sin 3A & cos 3A Proofs", "tan 3A Formula", "sin 18° = (√5-1)/4", "60°±A Triple Products"],
    sandboxType: "compoundWaveLab",
    intuition: `Writing $3A = 2A + A$ turns triple-angle trigonometry into pure cubic algebra! Even more amazingly, triple-angle formulas solve ancient geometric mysteries: they prove why a regular pentagon's Golden Ratio $\\phi = \\frac{1+\\sqrt{5}}{2}$ hides inside $\\sin 18^\\circ$ and $\\cos 36^\\circ$, why trisecting a general angle with straightedge and compass is impossible, and how products like $\\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ$ collapse in one step!`,
    theoryHtml: `
      <h3>24.1 Step-by-Step Derivations of $\\sin 3A$, $\\cos 3A$, and $\\tan 3A$</h3>
      <ul>
        <li>
          <strong>Derivation of $\\sin 3A$:</strong><br/>
          $\\sin(2A + A) = \\sin 2A\\cos A + \\cos 2A\\sin A = (2\\sin A\\cos A)\\cos A + (1 - 2\\sin^2 A)\\sin A = 2\\sin A(1 - \\sin^2 A) + \\sin A - 2\\sin^3 A = 3\\sin A - 4\\sin^3 A$.
        </li>
        <li>
          <strong>Derivation of $\\cos 3A$:</strong><br/>
          $\\cos(2A + A) = \\cos 2A\\cos A - \\sin 2A\\sin A = (2\\cos^2 A - 1)\\cos A - (2\\sin A\\cos A)\\sin A = 2\\cos^3 A - \\cos A - 2\\cos A(1 - \\cos^2 A) = 4\\cos^3 A - 3\\cos A$.
        </li>
        <li>
          <strong>Derivation of $\\tan 3A$:</strong><br/>
          $\\tan(2A + A) = \\frac{\\tan 2A + \\tan A}{1 - \\tan 2A\\tan A} = \\frac{\\frac{2\\tan A}{1 - \\tan^2 A} + \\tan A}{1 - \\frac{2\\tan^2 A}{1 - \\tan^2 A}} = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}$.
        </li>
      </ul>
      <div class="math-box">
        <div class="math-box-title">Triple-Angle & Cubic Power-Reduction Master Box</div>
        $$\\sin 3A = 3\\sin A - 4\\sin^3 A \\quad \\Longleftrightarrow \\quad \\sin^3 A = \\frac{3\\sin A - \\sin 3A}{4}$$
        $$\\cos 3A = 4\\cos^3 A - 3\\cos A \\quad \\Longleftrightarrow \\quad \\cos^3 A = \\frac{3\\cos A + \\cos 3A}{4}$$
        $$\\tan 3A = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}, \\qquad \\cot 3A = \\frac{\\cot^3 A - 3\\cot A}{3\\cot^2 A - 1}$$
      </div>
      <p><em>Memory Trick for $3$ vs $4$:</em> Think <strong>"$43$" for Cosine</strong> ($4\\cos^3 A - 3\\cos A$, cube comes FIRST) and <strong>"$34$" for Sine</strong> ($3\\sin A - 4\\sin^3 A$, cube comes SECOND)! Test $A = 0$: $\\cos 0 = 4(1) - 3(1) = +1$ ✓!</p>

      <h3>24.2 The Famous $(60^\\circ - A) \\cdot A \\cdot (60^\\circ + A)$ Triple-Product Theorem</h3>
      <p>Multiply $\\sin A [\\sin(60^\\circ - A)\\sin(60^\\circ + A)] = \\sin A(\\sin^2 60^\\circ - \\sin^2 A) = \\sin A(\\frac{3}{4} - \\sin^2 A) = \\frac{3\\sin A - 4\\sin^3 A}{4}$:</p>
      <div class="math-box">
        <div class="math-box-title">$60^\\circ$-Spaced Triple-Product Identities</div>
        $$\\sin A\\,\\sin(60^\\circ - A)\\,\\sin(60^\\circ + A) = \\frac{1}{4}\\sin 3A$$
        $$\\cos A\\,\\cos(60^\\circ - A)\\,\\cos(60^\\circ + A) = \\frac{1}{4}\\cos 3A$$
        $$\\tan A\\,\\tan(60^\\circ - A)\\,\\tan(60^\\circ + A) = \\tan 3A \\qquad (\\text{no } \\tfrac{1}{4} \\text{ factor!})$$
      </div>

      <h3>24.3 Exact Golden-Ratio Derivation of $18^\\circ, 36^\\circ, 54^\\circ, 72^\\circ$</h3>
      <p>Let $\\theta = 18^\\circ$, so $5\\theta = 90^\\circ \\implies 2\\theta = 90^\\circ - 3\\theta$. Take $\\sin$ of both sides: $\\sin 2\\theta = \\sin(90^\\circ - 3\\theta) = \\cos 3\\theta$! Expand both sides: $2\\sin\\theta\\cos\\theta = 4\\cos^3\\theta - 3\\cos\\theta$. Since $\\cos 18^\\circ \\neq 0$, divide by $\\cos\\theta$ and replace $\\cos^2\\theta = 1 - \\sin^2\\theta$: $2\\sin\\theta = 4(1 - \\sin^2\\theta) - 3 \\implies 4\\sin^2\\theta + 2\\sin\\theta - 1 = 0$. Since $\\sin 18^\\circ > 0$, the quadratic formula yields:</p>
      <div class="math-box">
        <div class="math-box-title">Exact Pentagonal / Golden-Ratio Angles</div>
        $$\\sin 18^\\circ = \\cos 72^\\circ = \\frac{\\sqrt{5} - 1}{4}, \\qquad \\cos 36^\\circ = \\sin 54^\\circ = 1 - 2\\sin^2 18^\\circ = \\frac{\\sqrt{5} + 1}{4}$$
        $$\\cos 18^\\circ = \\sin 72^\\circ = \\frac{\\sqrt{10 + 2\\sqrt{5}}}{4}, \\qquad \\sin 36^\\circ = \\cos 54^\\circ = \\frac{\\sqrt{10 - 2\\sqrt{5}}}{4}$$
      </div>
    `,
    pitfalls: [
      "Swapping the signs in $\\sin 3A$ and $\\cos 3A$: Writing $4\\sin^3 A - 3\\sin A$ gives $-\\sin 3A$! Always check $A = 30^\\circ$: $3(\\frac{1}{2}) - 4(\\frac{1}{8}) = \\frac{3}{2} - \\frac{1}{2} = +1 = \\sin 90^\\circ$ ✓.",
      "Putting $\\frac{1}{4}$ in front of $\\tan 3A$ in the triple product: When you divide $\\frac{1}{4}\\sin 3A$ by $\\frac{1}{4}\\cos 3A$, the $\\frac{1}{4}$ cancels out, leaving $\\tan A\\tan(60^\\circ-A)\\tan(60^\\circ+A) = \\tan 3A$!"
    ],
    examples: [
      {
        q: "Example 1: Evaluate $\\sin 20^\\circ \\sin 40^\\circ \\sin 60^\\circ \\sin 80^\\circ$ without a calculator.",
        sol: "Spot the $A, 60^\\circ - A, 60^\\circ + A$ pattern with $A = 20^\\circ$! $\\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ = \\frac{1}{4}\\sin(3 \\times 20^\\circ) = \\frac{1}{4}\\sin 60^\\circ = \\frac{\\sqrt{3}}{8}$. Multiply by the remaining $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$ to get $\\frac{\\sqrt{3}}{8} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{3}{16}$!"
      },
      {
        q: "Example 2: Prove $\\cos^3 A + \\cos^3(120^\\circ + A) + \\cos^3(240^\\circ + A) = \\frac{3}{4}\\cos 3A$.",
        sol: "Use $\\cos^3\\theta = \\frac{3\\cos\\theta + \\cos 3\\theta}{4}$ on all three terms! First, the $\\cos\\theta$ sum is $\\cos A + \\cos(120^\\circ+A) + \\cos(240^\\circ+A) = \\cos A + 2\\cos 180^\\circ\\cos(60^\\circ) \\dots$: specifically $\\cos(120^\\circ+A) + \\cos(240^\\circ+A) = 2\\cos(180^\\circ)\\cos(60^\\circ+A)$—even simpler, rotate $120^\\circ$-spaced unit vectors sum to $0$, so $\\cos A + \\cos(120^\\circ+A) + \\cos(240^\\circ+A) = 0$! Meanwhile, multiplying each angle by $3$ gives $\\cos 3A + \\cos(360^\\circ + 3A) + \\cos(720^\\circ + 3A) = 3\\cos 3A$. Dividing by $4$ gives $\\frac{0 + 3\\cos 3A}{4} = \\frac{3}{4}\\cos 3A$!"
      },
      {
        q: "Example 3: Evaluate $\\cos^2 36^\\circ - \\sin^2 18^\\circ$ cleanly.",
        sol: "Substitute $\\cos 36^\\circ = \\frac{\\sqrt{5}+1}{4}$ and $\\sin 18^\\circ = \\frac{\\sqrt{5}-1}{4}$: $\\left(\\frac{\\sqrt{5}+1}{4}\\right)^2 - \\left(\\frac{\\sqrt{5}-1}{4}\\right)^2 = \\frac{(6 + 2\\sqrt{5}) - (6 - 2\\sqrt{5})}{16} = \\frac{4\\sqrt{5}}{16} = \\frac{\\sqrt{5}}{4}$! (Or use $\\cos^2 A - \\sin^2 B = \\cos(A+B)\\cos(A-B) = \\cos 54^\\circ\\cos 18^\\circ = \\frac{\\sqrt{5}}{4}$.)"
      }
    ],
    quiz: [
      {
        q: "What is the exact value of $\\tan 20^\\circ \\tan 40^\\circ \\tan 80^\\circ$?",
        options: ["$\\frac{\\sqrt{3}}{4}$", "$\\sqrt{3}$", "$\\frac{1}{\\sqrt{3}}$", "$3$"],
        answer: 1,
        explanation: "With $A = 20^\\circ$, $\\tan 20^\\circ \\tan(60^\\circ - 20^\\circ)\\tan(60^\\circ + 20^\\circ) = \\tan(3 \\times 20^\\circ) = \\tan 60^\\circ = \\sqrt{3}$."
      },
      {
        q: "Evaluate $4\\cos^3 20^\\circ - 3\\cos 20^\\circ$.",
        options: ["$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$1$"],
        answer: 1,
        explanation: "By $\\cos 3A = 4\\cos^3 A - 3\\cos A$, this equals $\\cos(3 \\times 20^\\circ) = \\cos 60^\\circ = \\frac{1}{2}$."
      },
      {
        q: "What is the exact value of $\\cos 36^\\circ - \\sin 18^\\circ$?",
        options: ["$\\frac{\\sqrt{5}}{2}$", "$\\frac{1}{2}$", "$\\frac{1}{4}$", "$1$"],
        answer: 1,
        explanation: "$\\frac{\\sqrt{5}+1}{4} - \\frac{\\sqrt{5}-1}{4} = \\frac{2}{4} = \\frac{1}{2}$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 25: HALF-ANGLE FORMULAS
     ======================================================================== */
  {
    id: "ch-25-half-angle",
    grade: "Ch 25",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "25. Half-Angle Formulas",
    subtitle: "Derive $\\sin\\frac{A}{2}$, $\\cos\\frac{A}{2}$, and all 3 forms of $\\tan\\frac{A}{2}$, master $\\frac{A}{2}$ quadrant sign selection, Weierstrass $t = \\tan\\frac{A}{2}$ substitution, and Heron's triangle half-angle laws.",
    prerequisites: ["Chapter 23: Double-Angle Formulas", "Chapter 18: Quadrant Signs"],
    tags: ["sin(A/2), cos(A/2), tan(A/2)", "Sign-Free tan(A/2) Forms", "Weierstrass t = tan(A/2)", "Triangle Half-Angles"],
    sandboxType: "compoundWaveLab",
    intuition: `Every double-angle formula runs in reverse! Simply replace $2A$ with $\\theta$ (so $A$ becomes $\\frac{\\theta}{2}$) and you instantly build a **Geometric Angle-Halving Microscope**—capable of finding exact radical expressions for $22.5^\\circ$, $11.25^\\circ$, $15^\\circ$, and $7.5^\\circ$, converting ANY rational trig expression into pure polynomial algebra via $t = \\tan\\frac{\\theta}{2}$, and computing the angles of a triangle directly from its three side lengths!`,
    theoryHtml: `
      <h3>25.1 Derivations & Sign Selection of $\\sin\\frac{\\theta}{2}$, $\\cos\\frac{\\theta}{2}$, and $\\tan\\frac{\\theta}{2}$</h3>
      <p>Replace $A$ by $\\frac{\\theta}{2}$ in $2\\sin^2 A = 1 - \\cos 2A$ and $2\\cos^2 A = 1 + \\cos 2A$:</p>
      <div class="math-box">
        <div class="math-box-title">Half-Angle Radical & Rational Identities</div>
        $$\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}, \\qquad \\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$$
        $$\\tan\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{1 + \\cos\\theta}} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}$$
      </div>
      <ul>
        <li><strong>How to Choose $+$ or $-$:</strong> The sign depends ONLY on the quadrant of the <strong>HALF-ANGLE $\\frac{\\theta}{2}$</strong> (NOT the quadrant of $\\theta$!). E.g., if $180^\\circ < \\theta < 270^\\circ$ (Q-III), divide the inequality by $2$ to get $90^\\circ < \\frac{\\theta}{2} < 135^\\circ$ (**Q-II**!), where $\\sin\\frac{\\theta}{2} > 0$ and $\\cos\\frac{\\theta}{2} < 0$!</li>
        <li><strong>Why $\\frac{1 - \\cos\\theta}{\\sin\\theta}$ and $\\frac{\\sin\\theta}{1 + \\cos\\theta}$ Need NO $\\pm$ Sign!</strong> Because $1 \\pm \\cos\\theta \\ge 0$ always, the denominator/numerator $\\sin\\theta$ automatically carries the exact sign of $\\tan\\frac{\\theta}{2}$ in every quadrant ($\\sin\\theta = 2\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}$ has the exact same sign as $\\frac{\\sin(\\theta/2)}{\\cos(\\theta/2)} = \\tan\\frac{\\theta}{2}$)!</li>
      </ul>

      <h3>25.2 The Universal Weierstrass Tangent Half-Angle Substitution ($t = \\tan\\frac{\\theta}{2}$)</h3>
      <p>Let $t = \\tan\\frac{\\theta}{2}$ ($\\theta \\neq (2n+1)\\pi$). Rewriting the double-angle rational formulas at $\\frac{\\theta}{2}$ expresses $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$ as pure rational algebra in $t$:</p>
      <div class="math-box">
        <div class="math-box-title">Rational Parameterization of the Unit Circle ($t = \\tan\\frac{\\theta}{2}$)</div>
        $$\\sin\\theta = \\frac{2t}{1 + t^2}, \\qquad \\cos\\theta = \\frac{1 - t^2}{1 + t^2}, \\qquad \\tan\\theta = \\frac{2t}{1 - t^2}, \\qquad d\\theta = \\frac{2\\,dt}{1 + t^2}$$
      </div>
      <p>Notice $\\left(\\frac{1-t^2}{1+t^2}\\right)^2 + \\left(\\frac{2t}{1+t^2}\\right)^2 = \\frac{1 - 2t^2 + t^4 + 4t^2}{(1+t^2)^2} = 1$ identically! In Calculus, this magical substitution turns <em>any</em> integral $\\int R(\\sin\\theta, \\cos\\theta)\\,d\\theta$ into a partial-fractions integral of a rational function of $t$!</p>

      <h3>25.3 Half-Angle Formulas in Any Triangle $\\triangle ABC$ (Sides $a, b, c$)</h3>
      <p>Let semi-perimeter $s = \\frac{a + b + c}{2}$ and area $\\Delta = \\sqrt{s(s-a)(s-b)(s-c)}$. Combining $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$ with $2\\sin^2\\frac{A}{2} = 1 - \\cos A$ and $2\\cos^2\\frac{A}{2} = 1 + \\cos A$ (note $0 < \\frac{A}{2} < 90^\\circ$ so all signs are $+$):</p>
      <div class="math-box">
        <div class="math-box-title">Triangle Half-Angle Formulas & Inradius $r = \\frac{\\Delta}{s}$</div>
        $$\\sin\\frac{A}{2} = \\sqrt{\\frac{(s - b)(s - c)}{bc}}, \\qquad \\cos\\frac{A}{2} = \\sqrt{\\frac{s(s - a)}{bc}}, \\qquad \\tan\\frac{A}{2} = \\sqrt{\\frac{(s - b)(s - c)}{s(s - a)}} = \\frac{\\Delta}{s(s - a)} = \\frac{r}{s - a}$$
      </div>
    `,
    pitfalls: [
      "Choosing the sign of $\\cos\\frac{\\theta}{2}$ from the quadrant of $\\theta$ instead of $\\frac{\\theta}{2}$: Even if $\\theta = 300^\\circ \\in \\text{Q-IV}$ (where $\\cos\\theta > 0$), $\\frac{\\theta}{2} = 150^\\circ \\in \\text{Q-II}$, so $\\cos 150^\\circ$ is NEGATIVE!",
      "Missing the root $\\theta = (2n+1)\\pi$ when solving equations with $t = \\tan\\frac{\\theta}{2}$: Since $\\tan\\frac{\\pi}{2}$ is undefined, ALWAYS test $\\theta = (2n+1)\\pi$ ($\\cos\\theta = -1, \\sin\\theta = 0$) separately before applying Weierstrass substitution!"
    ],
    examples: [
      {
        q: "Example 1: Find the exact surd values of $\\sin 22.5^\\circ$, $\\cos 22.5^\\circ$, and $\\tan 22.5^\\circ$.",
        sol: "Put $\\theta = 45^\\circ$ ($22.5^\\circ \\in \\text{Q-I}$, all $+$): $\\sin 22.5^\\circ = \\sqrt{\\frac{1 - \\cos 45^\\circ}{2}} = \\sqrt{\\frac{1 - \\sqrt{2}/2}{2}} = \\frac{\\sqrt{2 - \\sqrt{2}}}{2}$. Similarly, $\\cos 22.5^\\circ = \\frac{\\sqrt{2 + \\sqrt{2}}}{2}$. Using the sign-free formula: $\\tan 22.5^\\circ = \\frac{1 - \\cos 45^\\circ}{\\sin 45^\\circ} = \\frac{1 - 1/\\sqrt{2}}{1/\\sqrt{2}} = \\sqrt{2} - 1$!"
      },
      {
        q: "Example 2: Given $\\cos\\theta = -\\frac{7}{25}$ and $180^\\circ < \\theta < 270^\\circ$, find $\\sin\\frac{\\theta}{2}$, $\\cos\\frac{\\theta}{2}$, and $\\tan\\frac{\\theta}{2}$.",
        sol: "Halve the inequality FIRST: $90^\\circ < \\frac{\\theta}{2} < 135^\\circ$, so $\\frac{\\theta}{2}$ lies in **Quadrant II** ($\\sin > 0, \\cos < 0, \\tan < 0$)! Now compute: $\\sin\\frac{\\theta}{2} = +\\sqrt{\\frac{1 - (-7/25)}{2}} = \\sqrt{\\frac{32/25}{2}} = \\sqrt{\\frac{16}{25}} = +\\frac{4}{5}$; $\\cos\\frac{\\theta}{2} = -\\sqrt{\\frac{1 + (-7/25)}{2}} = -\\sqrt{\\frac{9}{25}} = -\\frac{3}{5}$; $\\tan\\frac{\\theta}{2} = -\\frac{4}{3}$."
      },
      {
        q: "Example 3: Find $\\cot 7.5^\\circ$ ($\\cot\\frac{\\pi}{24}$) in simplified radical form.",
        sol: "Use $\\cot\\frac{\\theta}{2} = \\frac{1 + \\cos\\theta}{\\sin\\theta}$ with $\\theta = 15^\\circ$: $\\cot 7.5^\\circ = \\frac{1 + \\cos 15^\\circ}{\\sin 15^\\circ} = \\frac{4 + \\sqrt{6} + \\sqrt{2}}{\\sqrt{6} - \\sqrt{2}}$. Multiply top and bottom by $(\\sqrt{6} + \\sqrt{2})$: $\\frac{(4 + \\sqrt{6} + \\sqrt{2})(\\sqrt{6} + \\sqrt{2})}{6 - 2} = \\frac{4\\sqrt{6} + 4\\sqrt{2} + 6 + 2\\sqrt{12} + 2}{4} = \\frac{8 + 4\\sqrt{3} + 4\\sqrt{6} + 4\\sqrt{2}}{4} = 2 + \\sqrt{2} + \\sqrt{3} + \\sqrt{6} = \\sqrt{2} + \\sqrt{3} + \\sqrt{4} + \\sqrt{6}$! Look at that unforgettable $\\sqrt{2}+\\sqrt{3}+\\sqrt{4}+\\sqrt{6}$ pattern!"
      }
    ],
    quiz: [
      {
        q: "Which of the following is identically equal to $\\tan\\frac{\\theta}{2}$ (with NO $\\pm$ sign ambiguity)?",
        options: ["$\\frac{1 + \\cos\\theta}{\\sin\\theta}$", "$\\frac{1 - \\cos\\theta}{\\sin\\theta}$", "$\\frac{\\sin\\theta}{1 - \\cos\\theta}$", "$\\frac{1 - \\sin\\theta}{\\cos\\theta}$"],
        answer: 1,
        explanation: "$\\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{2\\sin^2(\\theta/2)}{2\\sin(\\theta/2)\\cos(\\theta/2)} = \\tan\\frac{\\theta}{2}$."
      },
      {
        q: "If $\\tan\\frac{\\theta}{2} = \\frac{1}{2}$, what is $\\cos\\theta$?",
        options: ["$\\frac{4}{5}$", "$\\frac{3}{5}$", "$-\\frac{3}{5}$", "$\\frac{1}{2}$"],
        answer: 1,
        explanation: "By Weierstrass parameterization with $t = \\frac{1}{2}$: $\\cos\\theta = \\frac{1 - t^2}{1 + t^2} = \\frac{1 - 1/4}{1 + 1/4} = \\frac{3/4}{5/4} = \\frac{3}{5}$."
      },
      {
        q: "In $\\triangle ABC$ with sides $a = 13, b = 14, c = 15$, what is $\\tan\\frac{A}{2}$?",
        options: ["$\\frac{1}{2}$", "$\\frac{4}{7}$", "$\\frac{1}{3}$", "$\\frac{2}{3}$"],
        answer: 0,
        explanation: "Semi-perimeter $s = \\frac{13+14+15}{2} = 21$. Then $\\tan\\frac{A}{2} = \\sqrt{\\frac{(s-b)(s-c)}{s(s-a)}} = \\sqrt{\\frac{7 \\times 6}{21 \\times 8}} = \\sqrt{\\frac{42}{168}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 26: SUM-TO-PRODUCT FORMULAS
     ======================================================================== */
  {
    id: "ch-26-sum-to-product",
    grade: "Ch 26",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "26. Sum-to-Product Formulas",
    subtitle: "Convert sums & differences ($\\sin C \\pm \\sin D$, $\\cos C \\pm \\cos D$) into factorized products to simplify ratios, solve trig equations, and prove $A + B + C = \\pi$ triangle identities.",
    prerequisites: ["Chapter 22: Compound Angle Formulas"],
    tags: ["C & D Factoring Formulas", "cos C - cos D Minus Sign", "3- & 4-Term Grouping", "A+B+C = π Conditional Sums"],
    sandboxType: "compoundWaveLab",
    intuition: `In algebra, **sums are stubborn, while products cancel and solve equations** ($u \\cdot v = 0 \\iff u = 0$ or $v = 0$)! Physically, when two tuning forks at slightly different frequencies $C$ and $D$ sound together, $\\sin C + \\sin D = 2\\sin\\!\\left(\\frac{C+D}{2}\\right)\\cos\\!\\left(\\frac{C-D}{2}\\right)$ reveals acoustic **Beats**: a carrier wave oscillating at the average frequency $\\frac{C+D}{2}$ whose loudness pulses slowly at the half-difference $\\frac{C-D}{2}$!`,
    theoryHtml: `
      <h3>26.1 Complete Derivation of the Four $C$ & $D$ Sum-to-Product Formulas</h3>
      <p>Let $A + B = C$ and $A - B = D$. Adding and subtracting gives $A = \\frac{C + D}{2}$ (the <strong>Half-Sum</strong>) and $B = \\frac{C - D}{2}$ (the <strong>Half-Difference</strong>). Adding/subtracting the compound expansions of $\\sin(A\\pm B)$ and $\\cos(A\\pm B)$ immediately yields:</p>
      <div class="math-box">
        <div class="math-box-title">The Four $C$ & $D$ Sum-to-Product Identities</div>
        $$\\sin C + \\sin D = 2\\sin\\!\\left(\\frac{C + D}{2}\\right)\\cos\\!\\left(\\frac{C - D}{2}\\right)$$
        $$\\sin C - \\sin D = 2\\cos\\!\\left(\\frac{C + D}{2}\\right)\\sin\\!\\left(\\frac{C - D}{2}\\right)$$
        $$\\cos C + \\cos D = 2\\cos\\!\\left(\\frac{C + D}{2}\\right)\\cos\\!\\left(\\frac{C - D}{2}\\right)$$
        $$\\cos C - \\cos D = -2\\sin\\!\\left(\\frac{C + D}{2}\\right)\\sin\\!\\left(\\frac{C - D}{2}\\right) = 2\\sin\\!\\left(\\frac{C + D}{2}\\right)\\sin\\!\\left(\\frac{D - C}{2}\\right)$$
      </div>
      <p><em>Unforgettable Rhythm ("S+S, S-S, C+C, C-C"):</em><br/>
      <strong>$2\\,\\text{sin}\\,\\text{cos}$</strong> $\\to$ <strong>$2\\,\\text{cos}\\,\\text{sin}$</strong> $\\to$ <strong>$2\\,\\text{cos}\\,\\text{cos}$</strong> $\\to$ <strong>$-2\\,\\text{sin}\\,\\text{sin}$</strong>! Always put $\\frac{C+D}{2}$ FIRST and $\\frac{C-D}{2}$ SECOND—and NEVER forget the <strong>minus sign</strong> on $\\cos C - \\cos D$!</p>

      <h3>26.2 Smart Pairing Strategy for 3-Term & 4-Term Sums</h3>
      <p>When simplifying a sum like $\\sin\\theta + \\sin 3\\theta + \\sin 5\\theta + \\sin 7\\theta$, <strong>pair the outermost angles together</strong> so their average $\\frac{C+D}{2}$ matches!</p>
      <ul>
        <li>Pair $(\\sin 7\\theta + \\sin\\theta) = 2\\sin 4\\theta\\cos 3\\theta$ and $(\\sin 5\\theta + \\sin 3\\theta) = 2\\sin 4\\theta\\cos\\theta$: both share common factor $2\\sin 4\\theta$!</li>
        <li>Factor out $2\\sin 4\\theta(\\cos 3\\theta + \\cos\\theta) = 2\\sin 4\\theta(2\\cos 2\\theta\\cos\\theta) = 4\\sin 4\\theta\\cos 2\\theta\\cos\\theta$!</li>
        <li><strong>Mixed $\\sin + \\cos$ Tip:</strong> To factor $\\sin C + \\cos D$, first convert $\\cos D = \\sin(90^\\circ - D)$ (or $\\sin C = \\cos(90^\\circ - C)$) so both functions match!</li>
      </ul>

      <h3>26.3 Conditional Triangle Identities ($A + B + C = \\pi$)</h3>
      <p>Whenever $A + B + C = \\pi$ (so $A + B = \\pi - C$ and $\\frac{A+B}{2} = \\frac{\\pi}{2} - \\frac{C}{2}$), sum-to-product proves three celebrated identities:</p>
      <div class="math-box">
        <div class="math-box-title">Classic $A + B + C = 180^\\circ$ Sum-to-Product Theorems</div>
        $$\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$$
        $$\\cos 2A + \\cos 2B + \\cos 2C = -1 - 4\\cos A\\cos B\\cos C$$
        $$\\sin A + \\sin B + \\sin C = 4\\cos\\frac{A}{2}\\cos\\frac{B}{2}\\cos\\frac{C}{2}$$
      </div>
    `,
    pitfalls: [
      "Forgetting the minus sign in $\\cos C - \\cos D$: Test $C = 60^\\circ, D = 0^\\circ$: $\\cos 60^\\circ - \\cos 0^\\circ = \\frac{1}{2} - 1 = -\\frac{1}{2}$ (NEGATIVE!), matching $-2\\sin 30^\\circ\\sin 30^\\circ = -2(\\frac{1}{2})(\\frac{1}{2}) = -\\frac{1}{2}$!",
      "Trying to apply sum-to-product directly to $\\sin C + \\cos D$: There is NO direct formula until you rewrite $\\cos D = \\sin(\\frac{\\pi}{2} - D)$!"
    ],
    examples: [
      {
        q: "Example 1: Prove $\\frac{\\sin 7x + \\sin 5x + \\sin 9x + \\sin 3x}{\\cos 7x + \\cos 5x + \\cos 9x + \\cos 3x} = \\tan 6x$.",
        sol: "Group pairs with the SAME half-sum $6x$: $(9x, 3x)$ and $(7x, 5x)$! Numerator $= (\\sin 9x + \\sin 3x) + (\\sin 7x + \\sin 5x) = 2\\sin 6x\\cos 3x + 2\\sin 6x\\cos x = 2\\sin 6x(\\cos 3x + \\cos x)$. Denominator $= (\\cos 9x + \\cos 3x) + (\\cos 7x + \\cos 5x) = 2\\cos 6x\\cos 3x + 2\\cos 6x\\cos x = 2\\cos 6x(\\cos 3x + \\cos x)$. Cancel $2(\\cos 3x + \\cos x)$ to get $\\frac{\\sin 6x}{\\cos 6x} = \\tan 6x$!"
      },
      {
        q: "Example 2: Prove that $\\cos 20^\\circ + \\cos 100^\\circ + \\cos 140^\\circ = 0$.",
        sol: "Apply $\\cos C + \\cos D$ to the last two terms: $\\cos 140^\\circ + \\cos 100^\\circ = 2\\cos\\!\\left(\\frac{240^\\circ}{2}\\right)\\cos\\!\\left(\\frac{40^\\circ}{2}\\right) = 2\\cos 120^\\circ\\cos 20^\\circ = 2\\!\\left(-\\frac{1}{2}\\right)\\cos 20^\\circ = -\\cos 20^\\circ$. Adding $\\cos 20^\\circ$ gives $\\cos 20^\\circ - \\cos 20^\\circ = 0$!"
      },
      {
        q: "Example 3: If $A + B + C = \\pi$, prove $\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$.",
        sol: "Factor the first two terms and use $\\sin 2C = 2\\sin C\\cos C$: $LHS = 2\\sin(A+B)\\cos(A-B) + 2\\sin C\\cos C$. Since $A + B = \\pi - C$, $\\sin(A+B) = \\sin C$ and $\\cos C = -\\cos(A+B)$! Factor out $2\\sin C$: $2\\sin C[\\cos(A-B) - \\cos(A+B)] = 2\\sin C[2\\sin A\\sin B] = 4\\sin A\\sin B\\sin C$!"
      }
    ],
    quiz: [
      {
        q: "Simplify $\\frac{\\cos 4x - \\cos 8x}{\\sin 8x - \\sin 4x}$.",
        options: ["$\\cot 6x$", "$\\tan 6x$", "$-\\tan 6x$", "$\\tan 2x$"],
        answer: 1,
        explanation: "Numerator $= -2\\sin 6x\\sin(-2x) = +2\\sin 6x\\sin 2x$. Denominator $= 2\\cos 6x\\sin 2x$. Ratio $= \\frac{2\\sin 6x\\sin 2x}{2\\cos 6x\\sin 2x} = \\tan 6x$!"
      },
      {
        q: "Factor $\\sin 50^\\circ - \\sin 70^\\circ + \\sin 10^\\circ$ completely.",
        options: ["$1$", "$0$", "$\\frac{1}{2}$", "$\\sin 10^\\circ$"],
        answer: 1,
        explanation: "$\\sin 50^\\circ - \\sin 70^\\circ = 2\\cos 60^\\circ\\sin(-10^\\circ) = 2(\\frac{1}{2})(-\\sin 10^\\circ) = -\\sin 10^\\circ$. Adding $+\\sin 10^\\circ$ gives $0$!"
      },
      {
        q: "Rewrite $\\sin\\theta + \\cos\\theta$ as a single product using sum-to-product.",
        options: ["$\\sqrt{2}\\sin(\\theta + 45^\\circ)$", "$2\\sin\\theta\\cos\\theta$", "$\\sqrt{2}\\cos(\\theta + 45^\\circ)$", "$\\sin(\\theta + 45^\\circ)$"],
        answer: 0,
        explanation: "$\\sin\\theta + \\sin(90^\\circ - \\theta) = 2\\sin 45^\\circ\\cos(\\theta - 45^\\circ) = \\sqrt{2}\\cos(\\theta - 45^\\circ) = \\sqrt{2}\\sin(\\theta + 45^\\circ)$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 27: PRODUCT-TO-SUM FORMULAS
     ======================================================================== */
  {
    id: "ch-27-product-to-sum",
    grade: "Ch 27",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "27. Product-to-Sum Formulas",
    subtitle: "Unpack trig products ($2\\sin A\\cos B$, $2\\cos A\\cos B$, $2\\sin A\\sin B$) into clean sums, evaluate geometric-angle products $\\prod \\cos(2^k\\theta)$, and sum telescoping trig series.",
    prerequisites: ["Chapter 22: Compound Angles", "Chapter 26: Sum-to-Product"],
    tags: ["2 sin A cos B Laws", "2 sin A sin B Order", "Doubling Cosine Product", "Lagrange Telescoping Sum"],
    sandboxType: "compoundWaveLab",
    intuition: `When do we want to turn a **product BACK into a sum**? In **Integration** ($\\int \\sin 5x\\cos 3x\\,dx$ is hard as a product, effortless as $\\frac{1}{2}\\int (\\sin 8x + \\sin 2x)\\,dx$!), in **Radio Amplitude Modulation** (multiplying audio $\\cos\\omega_m t$ by carrier $\\cos\\omega_c t$ splits into upper & lower sidebands $\\omega_c \\pm \\omega_m$), and in **Telescoping Series** where consecutive terms cancel like dominoes!`,
    theoryHtml: `
      <h3>27.1 Complete Product-to-Sum (Defactorization) Identities</h3>
      <p>Adding and subtracting the four compound-angle formulas immediately isolates every product:</p>
      <div class="math-box">
        <div class="math-box-title">The Four Product-to-Sum Identities</div>
        $$2\\sin A\\cos B = \\sin(A + B) + \\sin(A - B)$$
        $$2\\cos A\\sin B = \\sin(A + B) - \\sin(A - B)$$
        $$2\\cos A\\cos B = \\cos(A + B) + \\cos(A - B)$$
        $$2\\sin A\\sin B = \\cos(A - B) - \\cos(A + B) \\qquad \\text{(Notice } A - B \\text{ comes FIRST!)}$$
      </div>
      <p><em>Crucial Order Warning on $2\\sin A\\sin B$:</em> Because $\\cos(A-B) = \\cos A\\cos B + \\sin A\\sin B$ has $+\\sin A\\sin B$ while $\\cos(A+B)$ has $-\\sin A\\sin B$, subtracting $\\cos(A-B) - \\cos(A+B)$ gives $+2\\sin A\\sin B$! Always put $\\cos(A - B)$ <strong>before</strong> $-\\cos(A + B)$!</p>

      <h3>27.2 Euler's Doubling-Angle Cosine Product Cascade</h3>
      <p>How do you evaluate $\\cos\\theta \\cdot \\cos 2\\theta \\cdot \\cos 4\\theta \\cdots \\cos(2^{n-1}\\theta)$ when angles <strong>double</strong> at each step? Multiply and divide by $2\\sin\\theta$ and watch $\\sin 2\\theta$ domino-chain through every factor:</p>
      <div class="math-box">
        <div class="math-box-title">Geometric-Angle Cosine Cascade ($\\sin\\theta \\neq 0$)</div>
        $$\\prod_{k=0}^{n-1} \\cos(2^k\\theta) = \\cos\\theta\\,\\cos 2\\theta\\,\\cos 4\\theta\\cdots\\cos(2^{n-1}\\theta) = \\frac{\\sin(2^n\\theta)}{2^n\\sin\\theta}$$
      </div>
      <p><em>Classic Application ($\\theta = \\frac{\\pi}{7}$ or $20^\\circ$):</em> For $\\cos 20^\\circ\\cos 40^\\circ\\cos 80^\\circ$ ($n=3, \\theta=20^\\circ$): $\\frac{\\sin(8 \\times 20^\\circ)}{8\\sin 20^\\circ} = \\frac{\\sin 160^\\circ}{8\\sin 20^\\circ} = \\frac{\\sin 20^\\circ}{8\\sin 20^\\circ} = \\frac{1}{8}$!</p>

      <h3>27.3 Arithmetic-Progression Sine & Cosine Series (Telescoping Method)</h3>
      <p>To sum angles in arithmetic progression $\\alpha, \\alpha + \\beta, \\alpha + 2\\beta, \\dots, \\alpha + (n-1)\\beta$, multiply every term by $2\\sin\\frac{\\beta}{2}$ and expand via $2\\sin A\\sin B = \\cos(A-B) - \\cos(A+B)$ so all middle terms cancel:</p>
      <div class="math-box">
        <div class="math-box-title">Arithmetic-Progression Trig Summation Formulas</div>
        $$\\sum_{k=0}^{n-1}\\sin(\\alpha + k\\beta) = \\frac{\\sin\\!\\left(\\frac{n\\beta}{2}\\right)}{\\sin\\!\\left(\\frac{\\beta}{2}\\right)} \\cdot \\sin\\!\\left(\\alpha + \\frac{(n-1)\\beta}{2}\\right)$$
        $$\\sum_{k=0}^{n-1}\\cos(\\alpha + k\\beta) = \\frac{\\sin\\!\\left(\\frac{n\\beta}{2}\\right)}{\\sin\\!\\left(\\frac{\\beta}{2}\\right)} \\cdot \\cos\\!\\left(\\alpha + \\frac{(n-1)\\beta}{2}\\right)$$
      </div>
      <p><em>Memory Gem:</em> Multiplier $= \\frac{\\sin(n \\cdot \\frac{\\text{diff}}{2})}{\\sin(\\frac{\\text{diff}}{2})} \\times \\operatorname{trig}(\\text{Average of First & Last Angle})$!</p>
    `,
    pitfalls: [
      "Forgetting the factor of $\\frac{1}{2}$ when there is NO $2$ in front of the product: $\\sin A\\cos B = \\frac{1}{2}[\\sin(A+B) + \\sin(A-B)]$!",
      "Writing $2\\sin A\\sin B = \\cos(A+B) - \\cos(A-B)$: That has the WRONG SIGN! Test $A = B = 45^\\circ$: $2(\\frac{1}{\\sqrt{2}})^2 = +1 = \\cos 0^\\circ - \\cos 90^\\circ = 1 - 0$ ✓."
    ],
    examples: [
      {
        q: "Example 1: Express $\\sin 6x\\cos 2x$ and $\\sin 3x\\sin 7x$ as sums or differences.",
        sol: "(a) $\\sin 6x\\cos 2x = \\frac{1}{2}(2\\sin 6x\\cos 2x) = \\frac{1}{2}(\\sin 8x + \\sin 4x)$. (b) Put larger angle first ($7x, 3x$): $\\sin 7x\\sin 3x = \\frac{1}{2}[\\cos(7x - 3x) - \\cos(7x + 3x)] = \\frac{1}{2}(\\cos 4x - \\cos 10x)$."
      },
      {
        q: "Example 2: Evaluate the exact value of $\\cos\\frac{\\pi}{7}\\cos\\frac{2\\pi}{7}\\cos\\frac{4\\pi}{7}$.",
        sol: "Angles double ($n = 3, \\theta = \\frac{\\pi}{7}$)! Using $\\frac{\\sin(2^3 \\cdot \\pi/7)}{2^3 \\sin(\\pi/7)} = \\frac{\\sin(8\\pi/7)}{8\\sin(\\pi/7)}$. Since $\\frac{8\\pi}{7} = \\pi + \\frac{\\pi}{7}$ lies in Q-III, $\\sin\\frac{8\\pi}{7} = -\\sin\\frac{\\pi}{7}$! Cancelling $\\sin\\frac{\\pi}{7}$ gives $-\\frac{1}{8}$!"
      },
      {
        q: "Example 3: Find the exact sum $S = \\cos\\frac{2\\pi}{7} + \\cos\\frac{4\\pi}{7} + \\cos\\frac{6\\pi}{7}$.",
        sol: "Here $n = 3$, first angle $\\alpha = \\frac{2\\pi}{7}$, common difference $\\beta = \\frac{2\\pi}{7}$, average of first & last $= \\frac{4\\pi}{7}$. By the AP cosine sum formula: $S = \\frac{\\sin(3\\pi/7)}{\\sin(\\pi/7)}\\cos\\frac{4\\pi}{7} = \\frac{2\\sin(3\\pi/7)\\cos(4\\pi/7)}{2\\sin(\\pi/7)} = \\frac{\\sin(\\pi) + \\sin(-\\pi/7)}{2\\sin(\\pi/7)} = \\frac{0 - \\sin(\\pi/7)}{2\\sin(\\pi/7)} = -\\frac{1}{2}$!"
      }
    ],
    quiz: [
      {
        q: "Convert $2\\sin 5\\theta\\sin 3\\theta$ into a difference of cosines.",
        options: [
          "$\\cos 8\\theta - \\cos 2\\theta$",
          "$\\cos 2\\theta - \\cos 8\\theta$",
          "$\\cos 2\\theta + \\cos 8\\theta$",
          "$\\sin 8\\theta - \\sin 2\\theta$"
        ],
        answer: 1,
        explanation: "$2\\sin A\\sin B = \\cos(A - B) - \\cos(A + B) = \\cos(5\\theta - 3\\theta) - \\cos(5\\theta + 3\\theta) = \\cos 2\\theta - \\cos 8\\theta$."
      },
      {
        q: "What is the exact value of $\\cos 20^\\circ \\cos 40^\\circ \\cos 60^\\circ \\cos 80^\\circ$?",
        options: ["$\\frac{1}{8}$", "$\\frac{1}{16}$", "$\\frac{3}{16}$", "$\\frac{1}{4}$"],
        answer: 1,
        explanation: "By the doubling cascade, $\\cos 20^\\circ\\cos 40^\\circ\\cos 80^\\circ = \\frac{\\sin 160^\\circ}{8\\sin 20^\\circ} = \\frac{1}{8}$. Multiplying by $\\cos 60^\\circ = \\frac{1}{2}$ gives $\\frac{1}{16}$."
      },
      {
        q: "Evaluate $\\sin 75^\\circ \\sin 15^\\circ$ in one line using product-to-sum.",
        options: ["$\\frac{1}{2}$", "$\\frac{1}{4}$", "$\\frac{\\sqrt{3}}{4}$", "$\\frac{3}{4}$"],
        answer: 1,
        explanation: "$\\frac{1}{2}(\\cos 60^\\circ - \\cos 90^\\circ) = \\frac{1}{2}(\\frac{1}{2} - 0) = \\frac{1}{4}$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 28: TRIGONOMETRIC EQUATIONS
     ======================================================================== */
  {
    id: "ch-28-trig-equations",
    grade: "Ch 28",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "28. Trigonometric Equations",
    subtitle: "Find all Principal Solutions in $[0, 2\\pi)$ and bounded intervals using 6 systematic solving strategies—while avoiding lost roots and extraneous roots!",
    prerequisites: ["Chapters 17–18: Quadrants & Reference Angles", "Chapters 22–26: Compound, Double & Sum-to-Product"],
    tags: ["Principal Solutions [0,2π)", "6 Solving Blueprints", "Auxiliary Angle a cos x + b sin x = c", "Lost & Extraneous Roots"],
    sandboxType: "trigEqInverseLab",
    intuition: `Unlike an identity (true for *all* $\\theta$), a **Trigonometric Equation** like $2\\sin^2 x - \\sin x - 1 = 0$ is true only at specific angles where the wave crosses zero! Because trig waves oscillate, even inside a single lap $[0, 2\\pi)$ an equation typically has **$2, 4,$ or $6$ distinct Principal Solutions**. Master six crisp algebraic blueprints—and two deadly root traps—and you'll never miss a single angle!`,
    theoryHtml: `
      <h3>28.1 Principal Solutions in $[0, 2\\pi)$</h3>
      <p>Solutions of a trigonometric equation satisfying $0 \\le x < 2\\pi$ ($0^\\circ \\le x < 360^\\circ$) are called <strong>Principal Solutions</strong>:</p>
      <ol>
        <li>Find the acute <strong>Reference Angle</strong> $\\alpha \\in [0, \\frac{\\pi}{2}]$ from $|\\operatorname{trig}(x)| = |k|$.</li>
        <li>Use <strong>ASTC</strong> to select the two quadrants where the sign matches $k$: Q-I ($\\alpha$), Q-II ($\\pi - \\alpha$), Q-III ($\\pi + \\alpha$), Q-IV ($2\\pi - \\alpha$).</li>
      </ol>
      <p><em>Example:</em> $\\sin x = -\\frac{\\sqrt{3}}{2} \\implies \\alpha = \\frac{\\pi}{3}$, negative in Q-III & Q-IV $\\implies x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$ and $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$.</p>

      <h3>28.2 Six Master Solving Blueprints</h3>
      <ol>
        <li>
          <strong>Blueprint 1 — Factoring (NEVER Divide Out a Variable Factor!):</strong><br/>
          Move everything to the LHS and factor! For $\\sin 2x = \\cos x$, write $2\\sin x\\cos x - \\cos x = 0 \\implies \\cos x(2\\sin x - 1) = 0 \\implies \\cos x = 0$ OR $\\sin x = \\frac{1}{2}$. (Dividing by $\\cos x$ would throw away $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$!)
        </li>
        <li>
          <strong>Blueprint 2 — Quadratic in One Trig Function:</strong><br/>
          Use Pythagorean identities ($\\cos^2 x = 1 - \\sin^2 x$, $\\sec^2 x = 1 + \\tan^2 x$) to convert to a single variable $u$, factor or use the quadratic formula, and <strong>reject branches with $|\\sin x| > 1$ or $|\\cos x| > 1$</strong>!
        </li>
        <li>
          <strong>Blueprint 3 — Homogeneous Equations ($a\\sin^2 x + b\\sin x\\cos x + c\\cos^2 x = 0$):</strong><br/>
          First check if $\\cos x = 0$ is a root (only if $a = 0$); otherwise divide through by $\\cos^2 x$ to get $a\\tan^2 x + b\\tan x + c = 0$!
        </li>
        <li>
          <strong>Blueprint 4 — Linear Equation $a\\cos x + b\\sin x = c$ (Auxiliary Angle Method):</strong><br/>
          Let $R = \\sqrt{a^2 + b^2}$. First check solvability: <strong>if $|c| > R$, NO real solution exists!</strong> Otherwise divide both sides by $R$:
          $$\\frac{a}{R}\\cos x + \\frac{b}{R}\\sin x = \\frac{c}{R} \\implies \\cos(x - \\alpha) = \\frac{c}{R}, \\quad \\text{where } \\cos\\alpha = \\frac{a}{R},\\; \\sin\\alpha = \\frac{b}{R}$$
        </li>
        <li>
          <strong>Blueprint 5 — Sum-to-Product Factoring ($\\sin mx + \\sin nx = 0$):</strong><br/>
          For $\\sin x + \\sin 3x + \\sin 5x = 0$, pair outer terms: $(\\sin 5x + \\sin x) + \\sin 3x = 2\\sin 3x\\cos 2x + \\sin 3x = \\sin 3x(2\\cos 2x + 1) = 0$.
        </li>
        <li>
          <strong>Blueprint 6 — Multiple-Angle Interval Scaling ($\\sin(kx) = c$ on $[0, 2\\pi)$):</strong><br/>
          If $0 \\le x < 2\\pi$, multiply the interval by $k$: $0 \\le kx < 2k\\pi$! Find ALL solutions for $u = kx$ across $k$ full revolutions $[0, 2k\\pi)$, then divide every root by $k$!
        </li>
      </ol>

      <h3>28.3 Two Deadly Root Traps to Check Every Time</h3>
      <ul>
        <li><strong>Trap A — Squaring Both Sides Creates Extraneous Roots:</strong> Squaring $\\sin x + \\cos x = 1$ gives $1 + \\sin 2x = 1 \\implies \\sin 2x = 0$, which includes $x = \\pi$ where $\\sin\\pi + \\cos\\pi = -1 \\neq +1$! <em>Rule:</em> Whenever you square an equation, <strong>plug candidate roots back into the original unsquared equation</strong>!</li>
        <li><strong>Trap B — Hidden Denominator / Tangent Exclusions:</strong> Before cancelling anything in an equation containing $\\tan x, \\sec x, \\cot x, \\operatorname{cosec} x$, record excluded values ($\\cos x \\neq 0$ or $\\sin x \\neq 0$) and discard any root that hits a zero denominator!</li>
      </ul>
    `,
    pitfalls: [
      "Missing roots on $\\sin 3x = \\frac{1}{2}$ in $[0, 2\\pi)$: Since $0 \\le 3x < 6\\pi$ ($3$ full circles!), there are $2 \\times 3 = 6$ solutions in $[0, 2\\pi)$, NOT just $2$!",
      "Dividing $\\tan x = 3\\sin x$ by $\\sin x$: Writing $\\frac{1}{\\cos x} = 3$ loses $\\sin x = 0 \\implies x = 0, \\pi$! Always factor: $\\sin x(\\sec x - 3) = 0$."
    ],
    examples: [
      {
        q: "Example 1: Find all solutions of $2\\cos^2 x + 3\\sin x = 0$ in $[0, 2\\pi)$.",
        sol: "Replace $\\cos^2 x = 1 - \\sin^2 x$: $2(1 - \\sin^2 x) + 3\\sin x = 0 \\implies 2\\sin^2 x - 3\\sin x - 2 = 0 \\implies (2\\sin x + 1)(\\sin x - 2) = 0$. Reject $\\sin x = 2$ (since $|\\sin x| \\le 1$!). From $\\sin x = -\\frac{1}{2}$ (Q-III & Q-IV with $\\alpha = \\frac{\\pi}{6}$): $x = \\frac{7\\pi}{6},\\; \\frac{11\\pi}{6}$."
      },
      {
        q: "Example 2: Solve $\\sqrt{3}\\cos x + \\sin x = \\sqrt{2}$ for $x \\in [0, 2\\pi)$.",
        sol: "Compute $R = \\sqrt{(\\sqrt{3})^2 + 1^2} = 2$. Since $|\\sqrt{2}| \\le 2$, divide both sides by $2$: $\\frac{\\sqrt{3}}{2}\\cos x + \\frac{1}{2}\\sin x = \\frac{\\sqrt{2}}{2} \\implies \\cos\\!\\left(x - \\frac{\\pi}{6}\\right) = \\frac{1}{\\sqrt{2}}$. Thus $x - \\frac{\\pi}{6} = \\frac{\\pi}{4}$ or $-\\frac{\\pi}{4}$ (or $\\frac{7\\pi}{4}$). Adding $\\frac{\\pi}{6}$: $x = \\frac{\\pi}{4} + \\frac{\\pi}{6} = \\frac{5\\pi}{12}$ ($75^\\circ$) and $x = -\\frac{\\pi}{4} + \\frac{\\pi}{6} + 2\\pi = \\frac{23\\pi}{12}$ ($345^\\circ$)."
      },
      {
        q: "Example 3: How many distinct roots does $\\frac{\\sin 3x}{\\sin x} = 2$ have in $(0, 2\\pi)$?",
        sol: "Domain restriction FIRST: $\\sin x \\neq 0 \\implies x \\neq \\pi$! Now use $\\sin 3x = 3\\sin x - 4\\sin^3 x$: since $\\sin x \\neq 0$, the ratio simplifies cleanly to $3 - 4\\sin^2 x = 2 \\implies \\sin^2 x = \\frac{1}{4} \\implies \\sin x = \\pm\\frac{1}{2}$! That gives $1$ root in EVERY quadrant ($\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$), none of which make $\\sin x = 0$—so **$4$ distinct roots**!"
      }
    ],
    quiz: [
      {
        q: "How many solutions does $\\sin 2x = \\sin x$ have in the closed interval $[0, 2\\pi]$?",
        options: ["$3$", "$4$", "$5$", "$2$"],
        answer: 2,
        explanation: "Factor $\\sin x(2\\cos x - 1) = 0$: $\\sin x = 0$ gives $0, \\pi, 2\\pi$ ($3$ roots), and $\\cos x = \\frac{1}{2}$ gives $\\frac{\\pi}{3}, \\frac{5\\pi}{3}$ ($2$ roots), totaling $3 + 2 = 5$ roots!"
      },
      {
        q: "For which real values of $k$ does $3\\sin x - 4\\cos x = k$ have at least one real solution?",
        options: ["$-4 \\le k \\le 3$", "$-5 \\le k \\le 5$", "$-7 \\le k \\le 7$", "All real $k$"],
        answer: 1,
        explanation: "Since $R = \\sqrt{3^2 + (-4)^2} = 5$, solutions exist if and only if $-5 \\le k \\le 5$."
      },
      {
        q: "Find all solutions of $\\tan^2 x - \\sqrt{3}\\tan x = 0$ in $[0, \\pi)$.",
        options: [
          "$\\frac{\\pi}{3}$ only",
          "$0$ and $\\frac{\\pi}{3}$",
          "$0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
          "$\\frac{\\pi}{6}$ and $\\frac{\\pi}{3}$"
        ],
        answer: 1,
        explanation: "Factor $\\tan x(\\tan x - \\sqrt{3}) = 0$: in $[0, \\pi)$, $\\tan x = 0 \\implies x = 0$ and $\\tan x = \\sqrt{3} \\implies x = \\frac{\\pi}{3}$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 29: GENERAL SOLUTIONS OF TRIGONOMETRIC EQUATIONS
     ======================================================================== */
  {
    id: "ch-29-general-solutions",
    grade: "Ch 29",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "29. General Solutions of Trigonometric Equations",
    subtitle: "Prove every infinite solution family ($n \\in \\mathbb{Z}$) for $\\sin\\theta = \\sin\\alpha$, $\\cos\\theta = \\cos\\alpha$, $\\tan\\theta = \\tan\\alpha$, squared equations $\\sin^2\\theta = \\sin^2\\alpha$, simultaneous equations, and unit-circle set merging.",
    prerequisites: ["Chapter 26: Sum-to-Product", "Chapter 28: Principal Solutions"],
    tags: ["nπ + (-1)ⁿα Proof", "2nπ ± α & nπ + α", "Squared Equations nπ ± α", "Simultaneous Equations"],
    sandboxType: "trigEqInverseLab",
    intuition: `Listing solutions one by one is impossible when a wave crosses a horizontal line infinitely many times from $-\\infty$ to $+\\infty$! **General Solutions** pack all infinitely many crossings into one single sleek formula parameterized by an integer $n \\in \\mathbb{Z}$ ($n = 0, \\pm 1, \\pm 2, \\dots$). Even cooler: notice how $(-1)^n$ acts as an algebraic toggle switch—turning $+\\alpha$ on even $n$ ($2k\\pi + \\alpha$ in Q-I) into $-\\alpha$ on odd $n$ ($(2k+1)\\pi - \\alpha$ in Q-II)!`,
    theoryHtml: `
      <h3>29.1 Rigorous Proofs of the Three Fundamental General Solution Theorems ($n \\in \\mathbb{Z}$)</h3>
      <ul>
        <li>
          <strong>1. Proof for $\\sin\\theta = \\sin\\alpha$:</strong><br/>
          $\\sin\\theta - \\sin\\alpha = 0 \\iff 2\\cos\\!\\left(\\frac{\\theta + \\alpha}{2}\\right)\\sin\\!\\left(\\frac{\\theta - \\alpha}{2}\\right) = 0$. Either $\\cos\\frac{\\theta + \\alpha}{2} = 0 \\implies \\frac{\\theta + \\alpha}{2} = (2k+1)\\frac{\\pi}{2} \\implies \\theta = (2k+1)\\pi - \\alpha$ (odd multiples of $\\pi$ minus $\\alpha$), OR $\\sin\\frac{\\theta - \\alpha}{2} = 0 \\implies \\frac{\\theta - \\alpha}{2} = k\\pi \\implies \\theta = 2k\\pi + \\alpha$ (even multiples of $\\pi$ plus $\\alpha$). Uniting even and odd integers into a single integer $n \\in \\mathbb{Z}$ gives $\\theta = n\\pi + (-1)^n\\alpha$!
        </li>
        <li>
          <strong>2. Proof for $\\cos\\theta = \\cos\\alpha$:</strong><br/>
          $\\cos\\theta - \\cos\\alpha = 0 \\iff -2\\sin\\!\\left(\\frac{\\theta + \\alpha}{2}\\right)\\sin\\!\\left(\\frac{\\theta - \\alpha}{2}\\right) = 0 \\iff \\frac{\\theta \\pm \\alpha}{2} = n\\pi \\iff \\theta = 2n\\pi \\pm \\alpha$.
        </li>
        <li>
          <strong>3. Proof for $\\tan\\theta = \\tan\\alpha$ ($\\theta, \\alpha \\neq (2k+1)\\frac{\\pi}{2}$):</strong><br/>
          $\\frac{\\sin\\theta}{\\cos\\theta} - \\frac{\\sin\\alpha}{\\cos\\alpha} = 0 \\iff \\frac{\\sin(\\theta - \\alpha)}{\\cos\\theta\\cos\\alpha} = 0 \\iff \\sin(\\theta - \\alpha) = 0 \\iff \\theta - \\alpha = n\\pi \\iff \\theta = n\\pi + \\alpha$.
        </li>
      </ul>

      <div class="math-box">
        <div class="math-box-title">Complete Master Table of General Solutions ($n \\in \\mathbb{Z}$)</div>
        $$\\sin\\theta = 0 \\iff \\theta = n\\pi, \\qquad \\cos\\theta = 0 \\iff \\theta = (2n + 1)\\frac{\\pi}{2}, \\qquad \\tan\\theta = 0 \\iff \\theta = n\\pi$$
        $$\\sin\\theta = 1 \\iff \\theta = 2n\\pi + \\frac{\\pi}{2}, \\qquad \\sin\\theta = -1 \\iff \\theta = 2n\\pi - \\frac{\\pi}{2}, \\qquad \\cos\\theta = 1 \\iff \\theta = 2n\\pi, \\qquad \\cos\\theta = -1 \\iff \\theta = (2n+1)\\pi$$
        $$\\sin\\theta = \\sin\\alpha \\iff \\theta = n\\pi + (-1)^n\\alpha, \\qquad \\cos\\theta = \\cos\\alpha \\iff \\theta = 2n\\pi \\pm \\alpha, \\qquad \\tan\\theta = \\tan\\alpha \\iff \\theta = n\\pi + \\alpha$$
        $$\\sin^2\\theta = \\sin^2\\alpha \\;\\Longleftrightarrow\\; \\cos^2\\theta = \\cos^2\\alpha \\;\\Longleftrightarrow\\; \\tan^2\\theta = \\tan^2\\alpha \\;\\Longleftrightarrow\\; \\theta = n\\pi \\pm \\alpha$$
      </div>
      <p><em>Why ALL THREE Squared Equations Share $\\theta = n\\pi \\pm \\alpha$:</em> Because $\\sin^2\\theta = \\sin^2\\alpha \\iff \\frac{1 - \\cos 2\\theta}{2} = \\frac{1 - \\cos 2\\alpha}{2} \\iff \\cos 2\\theta = \\cos 2\\alpha \\iff 2\\theta = 2n\\pi \\pm 2\\alpha \\iff \\theta = n\\pi \\pm \\alpha$!</p>

      <h3>29.2 Simultaneous Equations & Co-Function Equations</h3>
      <ul>
        <li><strong>Simultaneous System (e.g., $\\sin\\theta = k_1$ AND $\\cos\\theta = k_2$ simultaneously):</strong> Because <em>both</em> conditions must hold at once, find the <strong>single unique angle $\\theta_0 \\in [0, 2\\pi)$</strong> satisfying both signs, and add full revolutions: $\\theta = 2n\\pi + \\theta_0\\;(n \\in \\mathbb{Z})$! (NEVER write $n\\pi + (-1)^n\\theta_0$, which includes wrong quadrants!)</li>
        <li><strong>Co-Function Equations ($\\sin A = \\cos B$ or $\\tan A = \\cot B$):</strong> Convert to the SAME function first: $\\cos A = \\cos\\!\\left(\\frac{\\pi}{2} - B\\right) \\implies A = 2n\\pi \\pm \\left(\\frac{\\pi}{2} - B\\right)$, and $\\tan A = \\tan\\!\\left(\\frac{\\pi}{2} - B\\right) \\implies A = n\\pi + \\frac{\\pi}{2} - B$!</li>
      </ul>
    `,
    pitfalls: [
      "Using $\\theta = n\\pi + (-1)^n\\frac{\\pi}{2}$ for $\\sin\\theta = 1$: While algebraically valid (for $n=0 \\to \\frac{\\pi}{2}$, $n=1 \\to \\pi - \\frac{\\pi}{2} = \\frac{\\pi}{2}$—it double-counts every point!), standard exam answers always write the clean non-redundant form $\\theta = 2n\\pi + \\frac{\\pi}{2}$!",
      "Solving $\\sin\\theta = -\\frac{1}{2}$ AND $\\cos\\theta = -\\frac{\\sqrt{3}}{2}$ with $n\\pi$: Both are negative ONLY in Quadrant III ($\\theta_0 = \\frac{7\\pi}{6}$), so the general solution is $\\theta = 2n\\pi + \\frac{7\\pi}{6}$ (period $2\\pi$)."
    ],
    examples: [
      {
        q: "Example 1: Find the general solution of $\\cos 4x = \\cos 2x$.",
        sol: "Directly apply $\\cos\\theta = \\cos\\alpha$: $4x = 2n\\pi \\pm 2x\\;(n \\in \\mathbb{Z})$. Case $(+)$: $4x - 2x = 2n\\pi \\implies 2x = 2n\\pi \\implies x = n\\pi$. Case $(-)$: $4x + 2x = 2n\\pi \\implies 6x = 2n\\pi \\implies x = \\frac{n\\pi}{3}$. Notice every multiple of $\\pi$ ($n\\pi = \\frac{3n\\pi}{3}$) is ALREADY contained inside $\\frac{k\\pi}{3}$! Thus the merged general solution is simply $x = \\frac{n\\pi}{3},\\; n \\in \\mathbb{Z}$."
      },
      {
        q: "Example 2: Find the general solution of $4\\sin^2\\theta = 3$.",
        sol: "Rewrite as $\\sin^2\\theta = \\frac{3}{4} = \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\sin^2\\!\\left(\\frac{\\pi}{3}\\right)$. Using the squared-equation law $\\sin^2\\theta = \\sin^2\\alpha \\iff \\theta = n\\pi \\pm \\alpha$: $\\theta = n\\pi \\pm \\frac{\\pi}{3},\\; n \\in \\mathbb{Z}$!"
      },
      {
        q: "Example 3: Find the general value of $\\theta$ satisfying BOTH $\\sin\\theta = -\\frac{1}{\\sqrt{2}}$ and $\\tan\\theta = 1$.",
        sol: "$\\sin\\theta < 0$ (Q-III or Q-IV) and $\\tan\\theta > 0$ (Q-I or Q-III) $\\implies$ $\\theta$ lies uniquely in **Quadrant III** with reference angle $\\frac{\\pi}{4}$, so $\\theta_0 = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}$. Adding $2n\\pi$ gives $\\theta = 2n\\pi + \\frac{5\\pi}{4},\\; n \\in \\mathbb{Z}$."
      }
    ],
    quiz: [
      {
        q: "What is the general solution of $\\tan 3x = -1$ ($n \\in \\mathbb{Z}$)?",
        options: [
          "$x = n\\pi - \\frac{\\pi}{4}$",
          "$x = \\frac{n\\pi}{3} - \\frac{\\pi}{12}$",
          "$x = \\frac{2n\\pi}{3} \\pm \\frac{\\pi}{12}$",
          "$x = \\frac{n\\pi}{3} + \\frac{\\pi}{12}$"
        ],
        answer: 1,
        explanation: "$\\tan 3x = \\tan(-\\frac{\\pi}{4}) \\implies 3x = n\\pi - \\frac{\\pi}{4} \\implies x = \\frac{n\\pi}{3} - \\frac{\\pi}{12}$ (equivalently $\\frac{n\\pi}{3} + \\frac{\\pi}{4}$)."
      },
      {
        q: "The general solution of $\\cos^2\\theta = \\frac{1}{2}$ ($n \\in \\mathbb{Z}$) is:",
        options: [
          "$2n\\pi \\pm \\frac{\\pi}{4}$",
          "$n\\pi \\pm \\frac{\\pi}{4}$",
          "$n\\pi + \\frac{\\pi}{4}$",
          "$2n\\pi + \\frac{\\pi}{4}$"
        ],
        answer: 1,
        explanation: "$\\cos^2\\theta = \\cos^2(\\frac{\\pi}{4}) \\iff \\theta = n\\pi \\pm \\frac{\\pi}{4}$ (or $\\frac{(2n+1)\\pi}{4}$)."
      },
      {
        q: "Solve $\\sin 2\\theta = \\cos 3\\theta$ for the general value of $\\theta$ ($n \\in \\mathbb{Z}$): which branch gives acute $\\theta$ at $n = 0$?",
        options: ["$\\frac{\\pi}{10}$ ($18^\\circ$)", "$\\frac{\\pi}{5}$ ($36^\\circ$)", "$\\frac{\\pi}{6}$ ($30^\\circ$)", "$\\frac{\\pi}{4}$ ($45^\\circ$)"],
        answer: 0,
        explanation: "Write $\\cos 3\\theta = \\cos(\\frac{\\pi}{2} - 2\\theta) \\implies 3\\theta = 2n\\pi \\pm (\\frac{\\pi}{2} - 2\\theta)$. Taking $(+)$ at $n=0$ gives $5\\theta = \\frac{\\pi}{2} \\implies \\theta = \\frac{\\pi}{10} = 18^\\circ$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 30: LAWS OF SINES, COSINES & OBLIQUE TRIANGLES
     ======================================================================== */
  {
    id: "ch-30-oblique-laws",
    grade: "Ch 30",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "30. Laws of Sines, Cosines & Oblique Triangles",
    subtitle: "Solve ANY non-right triangle $\\triangle ABC$ using the Extended Law of Sines ($2R$), Law of Cosines, Projection Law, Napier's Analogy, Ambiguous SSA Case, Heron's Area, and Inradius $r$.",
    prerequisites: ["Chapter 9–10: Right Triangle Solving", "Chapters 22–25: Compound & Half-Angle Formulas"],
    tags: ["Sine Rule a/sin A = 2R", "Cosine & Projection Laws", "SSA Ambiguous Case", "Heron, Circumradius R & Inradius r"],
    sandboxType: "rightTriangle",
    intuition: `Real-world land parcels, satellite orbits, and mechanical trusses rarely cooperate by forming $90^\\circ$ corners! Dropping a single altitude inside *any* oblique triangle $\\triangle ABC$ generalizes SOH-CAH-TOA into the **Law of Sines** ($\\frac{a}{\\sin A} = 2R$) and generalizes Pythagoras into the **Law of Cosines** ($c^2 = a^2 + b^2 - 2ab\\cos C$)—unlocking every side, angle, area, inscribed circle, and circumscribed circle!`,
    theoryHtml: `
      <h3>30.1 Extended Law of Sines, Law of Cosines, Projection & Napier's Laws</h3>
      <div class="math-box">
        <div class="math-box-title">Complete Properties-of-Triangles Master Toolkit</div>
        $$\\textbf{Extended Sine Rule:}\\quad \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R \\quad (R = \\text{Circumradius})$$
        $$\\textbf{Cosine Rule:}\\quad a^2 = b^2 + c^2 - 2bc\\cos A \\quad \\Longleftrightarrow \\quad \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$
        $$\\textbf{Projection Formula:}\\quad a = b\\cos C + c\\cos B, \\qquad b = c\\cos A + a\\cos C, \\qquad c = a\\cos B + b\\cos A$$
        $$\\textbf{Napier's Analogy (Law of Tangents):}\\quad \\tan\\!\\left(\\frac{B - C}{2}\\right) = \\frac{b - c}{b + c}\\cot\\frac{A}{2}$$
      </div>

      <h3>30.2 The SSA Ambiguous Case (Given $a, b,$ and Acute Angle $A$)</h3>
      <p>Compare opposite side $a$ against altitude $h = b\\sin A$:</p>
      <ul>
        <li>$a < b\\sin A \\implies$ **0 triangles** (too short to reach the base!).</li>
        <li>$a = b\\sin A \\implies$ **1 right-angled triangle** ($\\angle B = 90^\\circ$).</li>
        <li>$b\\sin A < a < b \\implies$ **2 distinct triangles** ($B_1$ acute and $B_2 = 180^\\circ - B_1$ obtuse!).</li>
        <li>$a \\ge b \\implies$ **1 unique triangle**.</li>
      </ul>

      <h3>30.3 Five Formulas for Triangle Area $\\Delta$, Circumradius $R$, and Inradius $r$</h3>
      <div class="math-box">
        <div class="math-box-title">Area, Circumcircle & Incircle Relations ($s = \\frac{a+b+c}{2}$)</div>
        $$\\Delta = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ca\\sin B = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}$$
        $$R = \\frac{abc}{4\\Delta}, \\qquad r = \\frac{\\Delta}{s} = (s - a)\\tan\\frac{A}{2} = 4R\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}$$
      </div>
    `,
    pitfalls: [
      "Using the Law of Sines first to find the LARGEST angle in SSS/SAS: Because $\\sin(120^\\circ) = \\sin(60^\\circ) = \\frac{\\sqrt{3}}{2}$, $\\sin^{-1}$ always returns the acute angle ($60^\\circ$) and misses obtuse angles! Always find the largest angle with the **Law of Cosines** ($\\cos C < 0$ uniquely flags an obtuse angle!)."
    ],
    examples: [
      {
        q: "Example 1: In $\\triangle ABC$, sides are $a = 7, b = 8, c = 13$. Find the largest angle and the area $\\Delta$.",
        sol: "Largest angle $C$ is opposite longest side $c = 13$: $\\cos C = \\frac{7^2 + 8^2 - 13^2}{2(7)(8)} = \\frac{49 + 64 - 169}{112} = \\frac{-56}{112} = -\\frac{1}{2} \\implies C = 120^\\circ$! Area $\\Delta = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(7)(8)\\sin 120^\\circ = 28 \\cdot \\frac{\\sqrt{3}}{2} = 14\\sqrt{3}$."
      },
      {
        q: "Example 2: Find the circumradius $R$ and inradius $r$ of a triangle with sides $13, 14, 15$.",
        sol: "$s = \\frac{13+14+15}{2} = 21$. Heron's formula: $\\Delta = \\sqrt{21(8)(7)(6)} = \\sqrt{7056} = 84$. Then $R = \\frac{abc}{4\\Delta} = \\frac{13 \\times 14 \\times 15}{4 \\times 84} = \\frac{2730}{336} = \\frac{65}{8} = 8.125$, and $r = \\frac{\\Delta}{s} = \\frac{84}{21} = 4$!"
      }
    ],
    quiz: [
      {
        q: "In $\\triangle ABC$, if $a = 10$ and $A = 30^\\circ$, what is the circumradius $R$?",
        options: ["$5$", "$10$", "$20$", "$10\\sqrt{3}$"],
        answer: 1,
        explanation: "By the Extended Sine Rule $2R = \\frac{a}{\\sin A} = \\frac{10}{1/2} = 20 \\implies R = 10$."
      },
      {
        q: "In $\\triangle ABC$, if $a = 6, b = 10,$ and $A = 30^\\circ$, how many distinct triangles exist?",
        options: ["$0$", "$1$", "$2$", "Infinitely many"],
        answer: 2,
        explanation: "Altitude $h = b\\sin A = 10\\sin 30^\\circ = 5$. Since $5 < 6 < 10$ ($b\\sin A < a < b$), there are 2 distinct triangles!"
      },
      {
        q: "Simplify $b\\cos C + c\\cos B$ in any $\\triangle ABC$.",
        options: ["$a$", "$2a$", "$a\\cos A$", "$b + c$"],
        answer: 0,
        explanation: "By the Projection Law, $b\\cos C + c\\cos B = a$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 31: INVERSE TRIGONOMETRIC FUNCTIONS
     ======================================================================== */
  {
    id: "ch-31-inverse-trig",
    grade: "Ch 31",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "31. Inverse Trigonometric Functions",
    subtitle: "Ultra-detailed mastery of Principal Value Branches, domain/range tables, sawtooth composition graphs $\\sin^{-1}(\\sin x)$, negative/reciprocal/co-function laws, piecewise $\\tan^{-1}x + \\tan^{-1}y$, and trig substitutions.",
    prerequisites: ["Chapters 19–21: Domain, Range & Graphs", "Bijective (One-to-One & Onto) Functions"],
    tags: ["Principal Value Branches", "sin⁻¹(sin x) Sawtooth", "tan⁻¹x + tan⁻¹y All Cases", "Algebraic Simplification"],
    sandboxType: "trigEqInverseLab",
    intuition: `A periodic wave like $y = \\sin x$ fails the **Horizontal Line Test** spectacularly—infinitely many angles have $\\sin x = \\frac{1}{2}$! To make an inverse function return **one single unambiguous angle**, mathematicians snip out one central monotonic slice around the origin where the wave climbs from $-1$ to $+1$ without ever turning back: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ for $\\sin^{-1}$ and $[0, \\pi]$ for $\\cos^{-1}$!`,
    theoryHtml: `
      <h3>31.1 Why Restrict Domains? Complete Principal Value Branch Table</h3>
      <p>Notice the two natural families: the <strong>"$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ Family"</strong> ($\\sin^{-1}, \\tan^{-1}, \\operatorname{cosec}^{-1}$) centered at $0$, and the <strong>"$[0, \\pi]$ Family"</strong> ($\\cos^{-1}, \\cot^{-1}, \\sec^{-1}$) centered at $\\frac{\\pi}{2}$!</p>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Inverse Function</th>
              <th>Domain ($x$)</th>
              <th>Principal Value Range ($y$)</th>
              <th>Monotonicity</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>$y = \\sin^{-1} x$ ($\\arcsin x$)</strong></td><td>$[-1, 1]$</td><td>$\\left[-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right]$</td><td>Strictly Increasing</td></tr>
            <tr><td><strong>$y = \\cos^{-1} x$ ($\\arccos x$)</strong></td><td>$[-1, 1]$</td><td>$[0,\\; \\pi]$</td><td>Strictly Decreasing</td></tr>
            <tr><td><strong>$y = \\tan^{-1} x$ ($\\arctan x$)</strong></td><td>$\\mathbb{R} = (-\\infty, \\infty)$</td><td>$\\left(-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right)$</td><td>Strictly Increasing</td></tr>
            <tr><td><strong>$y = \\cot^{-1} x$ ($\\operatorname{arccot} x$)</strong></td><td>$\\mathbb{R} = (-\\infty, \\infty)$</td><td>$(0,\\; \\pi)$</td><td>Strictly Decreasing</td></tr>
            <tr><td><strong>$y = \\sec^{-1} x$ ($\\operatorname{arcsec} x$)</strong></td><td>$(-\\infty, -1] \\cup [1, \\infty)$</td><td>$[0,\\; \\pi] \\setminus \\left\\{\\frac{\\pi}{2}\\right\\}$</td><td>Increasing on each ray</td></tr>
            <tr><td><strong>$y = \\operatorname{cosec}^{-1} x$ ($\\operatorname{arccosec} x$)</strong></td><td>$(-\\infty, -1] \\cup [1, \\infty)$</td><td>$\\left[-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right] \\setminus \\{0\\}$</td><td>Decreasing on each ray</td></tr>
          </tbody>
        </table>
      </div>

      <h3>31.2 Negative-Input, Reciprocal & Co-Function Sum Identities</h3>
      <div class="math-box">
        <div class="math-box-title">Core Inverse Trigonometric Laws</div>
        $$\\textbf{Odd Family:}\\quad \\sin^{-1}(-x) = -\\sin^{-1}x, \\qquad \\tan^{-1}(-x) = -\\tan^{-1}x, \\qquad \\operatorname{cosec}^{-1}(-x) = -\\operatorname{cosec}^{-1}x$$
        $$\\textbf{\\pi-Shift Family:}\\quad \\cos^{-1}(-x) = \\pi - \\cos^{-1}x, \\qquad \\cot^{-1}(-x) = \\pi - \\cot^{-1}x, \\qquad \\sec^{-1}(-x) = \\pi - \\sec^{-1}x$$
        $$\\textbf{Co-Function Sums:}\\quad \\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2} \\;(|x|\\le 1), \\quad \\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2} \\;(x\\in\\mathbb{R}), \\quad \\sec^{-1}x + \\operatorname{cosec}^{-1}x = \\frac{\\pi}{2} \\;(|x|\\ge 1)$$
        $$\\textbf{Reciprocals:}\\quad \\sin^{-1}\\!\\left(\\frac{1}{x}\\right) = \\operatorname{cosec}^{-1}x,\\; \\cos^{-1}\\!\\left(\\frac{1}{x}\\right) = \\sec^{-1}x, \\quad \\tan^{-1}\\!\\left(\\frac{1}{x}\\right) = \\begin{cases} \\cot^{-1}x & (x > 0) \\\\ \\cot^{-1}x - \\pi & (x < 0) \\end{cases}$$
      </div>

      <h3>31.3 Composition Traps: $f(f^{-1}(x))$ vs $f^{-1}(f(x))$ Sawtooth Waves</h3>
      <ul>
        <li><strong>Outer Trig, Inner Inverse:</strong> $\\sin(\\sin^{-1} x) = x$ for ALL $x \\in [-1, 1]$ (always safe on the domain!).</li>
        <li><strong>Outer Inverse, Inner Trig (THE FOLDING TRAP!):</strong> $\\sin^{-1}(\\sin x) = x$ <strong>ONLY when $x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$</strong>! Outside $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $y = \\sin^{-1}(\\sin x)$ forms a $2\\pi$-periodic **Triangular Sawtooth Wave**:
          <br/>• On $[\\frac{\\pi}{2}, \\frac{3\\pi}{2}]$: $\\sin^{-1}(\\sin x) = \\pi - x$. &nbsp; • On $[\\frac{3\\pi}{2}, \\frac{5\\pi}{2}]$: $\\sin^{-1}(\\sin x) = x - 2\\pi$.
          <br/>• Similarly, $y = \\cos^{-1}(\\cos x)$ equals $x$ on $[0, \\pi]$ and $2\\pi - x$ on $[\\pi, 2\\pi]$!
        </li>
      </ul>

      <h3>31.4 Piecewise $\\tan^{-1} x \\pm \\tan^{-1} y$ and $2\\tan^{-1} x$ Formulas</h3>
      <div class="math-box">
        <div class="math-box-title">Complete Addition & Double Formulas for $\\tan^{-1}$</div>
        $$\\tan^{-1}x + \\tan^{-1}y = \\begin{cases} \\tan^{-1}\\!\\left(\\dfrac{x+y}{1-xy}\\right), & xy < 1 \\\\[8pt] \\pi + \\tan^{-1}\\!\\left(\\dfrac{x+y}{1-xy}\\right), & x > 0,\\; y > 0,\\; xy > 1 \\\\[8pt] -\\pi + \\tan^{-1}\\!\\left(\\dfrac{x+y}{1-xy}\\right), & x < 0,\\; y < 0,\\; xy > 1 \\end{cases}$$
        $$\\text{For } |x| \\le 1:\\quad 2\\tan^{-1}x = \\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right); \\qquad \\text{For } x \\ge 0:\\quad 2\\tan^{-1}x = \\cos^{-1}\\!\\left(\\frac{1-x^2}{1+x^2}\\right); \\qquad \\text{For } |x| < 1:\\quad 2\\tan^{-1}x = \\tan^{-1}\\!\\left(\\frac{2x}{1-x^2}\\right)$$
      </div>

      <h3>31.5 Substitution Guide for Simplifying Inverse Expressions</h3>
      <ul>
        <li>Contains $\\sqrt{a^2 - x^2}$ $\\implies$ Put $x = a\\sin\\theta$ or $x = a\\cos\\theta$.</li>
        <li>Contains $\\sqrt{a^2 + x^2}$ or $a^2 + x^2$ $\\implies$ Put $x = a\\tan\\theta$.</li>
        <li>Contains $\\sqrt{x^2 - a^2}$ $\\implies$ Put $x = a\\sec\\theta$.</li>
        <li>Contains $\\sqrt{\\frac{a - x}{a + x}}$ $\\implies$ Put $x = a\\cos 2\\theta$!</li>
      </ul>
    `,
    pitfalls: [
      "Writing $\\cos^{-1}(-\\frac{1}{2}) = -\\frac{\\pi}{3}$: NEVER! The range of $\\cos^{-1}$ is $[0, \\pi]$ (no negative angles allowed!), so $\\cos^{-1}(-\\frac{1}{2}) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$!",
      "Using $\\tan^{-1}2 + \\tan^{-1}3 = \\tan^{-1}\\!\\left(\\frac{2+3}{1-6}\\right) = \\tan^{-1}(-1) = -\\frac{\\pi}{4}$: IMPOSSIBLE—two positive acute angles cannot add to a negative angle! Since $xy = 6 > 1$ with $x, y > 0$, you MUST add $\\pi$: $\\pi + (-\\frac{\\pi}{4}) = \\frac{3\\pi}{4}$!"
    ],
    examples: [
      {
        q: "Example 1: Find the exact principal values of (a) $\\sin^{-1}\\!\\left(\\sin\\frac{3\\pi}{5}\\right)$ and (b) $\\cos^{-1}(\\cos 10)$ (where $10$ is in radians).",
        sol: "(a) $\\frac{3\\pi}{5} = 108^\\circ \\notin [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, but $\\pi - \\frac{3\\pi}{5} = \\frac{2\\pi}{5} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ and $\\sin(\\frac{2\\pi}{5}) = \\sin(\\frac{3\\pi}{5})$. Answer: $\\frac{2\\pi}{5}$! (b) Note $3\\pi \\approx 9.42 < 10 < 12.57 \\approx 4\\pi$. On $[3\\pi, 4\\pi]$, fold into $[0, \\pi]$ via $4\\pi - 10 \\approx 2.566 \\in [0, \\pi]$, where $\\cos(4\\pi - 10) = \\cos 10$. Answer: $4\\pi - 10$!"
      },
      {
        q: "Example 2: Evaluate $\\tan^{-1}1 + \\tan^{-1}2 + \\tan^{-1}3$.",
        sol: "$\\tan^{-1}1 = \\frac{\\pi}{4}$. For $\\tan^{-1}2 + \\tan^{-1}3$, notice $xy = 2 \\times 3 = 6 > 1$ with $x, y > 0$, so use the $\\pi + \\tan^{-1}$ branch: $\\pi + \\tan^{-1}\\!\\left(\\frac{2+3}{1-6}\\right) = \\pi + \\tan^{-1}(-1) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. Total sum $= \\frac{\\pi}{4} + \\frac{3\\pi}{4} = \\pi$!"
      },
      {
        q: "Example 3: Simplify $\\tan^{-1}\\!\\left(\\frac{\\sqrt{1 + x^2} - 1}{x}\\right)$ ($x \\neq 0$).",
        sol: "Since $\\sqrt{1 + x^2}$ appears, substitute $x = \\tan\\theta$ with $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2}) \\setminus \\{0\\}$ (so $\\sec\\theta > 0$!): $\\frac{\\sqrt{1+\\tan^2\\theta} - 1}{\\tan\\theta} = \\frac{\\sec\\theta - 1}{\\tan\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\tan\\frac{\\theta}{2}$. Since $\\frac{\\theta}{2} \\in (-\\frac{\\pi}{4}, \\frac{\\pi}{4}) \\subset (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\tan^{-1}(\\tan\\frac{\\theta}{2}) = \\frac{\\theta}{2} = \\frac{1}{2}\\tan^{-1}x$!"
      }
    ],
    quiz: [
      {
        q: "What is the exact principal value of $\\cos^{-1}\\!\\left(-\\frac{\\sqrt{3}}{2}\\right)$?",
        options: ["$-\\frac{\\pi}{6}$", "$\\frac{5\\pi}{6}$", "$\\frac{7\\pi}{6}$", "$\\frac{\\pi}{6}$"],
        answer: 1,
        explanation: "$\\cos^{-1}(-\\frac{\\sqrt{3}}{2}) = \\pi - \\cos^{-1}(\\frac{\\sqrt{3}}{2}) = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6} \\in [0, \\pi]$."
      },
      {
        q: "Evaluate $\\sin\\!\\left(\\frac{\\pi}{3} - \\sin^{-1}\\!\\left(-\\frac{1}{2}\\right)\\right)$.",
        options: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$1$", "$0$"],
        answer: 2,
        explanation: "$\\sin^{-1}(-\\frac{1}{2}) = -\\frac{\\pi}{6}$, so $\\sin(\\frac{\\pi}{3} - (-\\frac{\\pi}{6})) = \\sin(\\frac{\\pi}{2}) = 1$."
      },
      {
        q: "If $\\sin^{-1} x + \\sin^{-1} y + \\sin^{-1} z = \\frac{3\\pi}{2}$, what is $x^{100} + y^{100} + z^{100}$?",
        options: ["$0$", "$1$", "$3$", "$-3$"],
        answer: 2,
        explanation: "The maximum possible value of each $\\sin^{-1}$ is $\\frac{\\pi}{2}$, so their sum can reach $\\frac{3\\pi}{2}$ ONLY if $\\sin^{-1} x = \\sin^{-1} y = \\sin^{-1} z = \\frac{\\pi}{2} \\implies x = y = z = 1 \\implies 1 + 1 + 1 = 3$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 32: TRIGONOMETRIC LIMITS, DERIVATIVES & INTEGRALS (CALCULUS)
     ======================================================================== */
  {
    id: "ch-32-trig-calculus",
    grade: "Ch 32",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "32. Trigonometric Limits, Derivatives & Integrals",
    subtitle: "Geometric Squeeze Theorem proof of $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, derivatives of all 12 trig & inverse trig functions, power-reduction integrals, and Trigonometric Substitution.",
    prerequisites: ["Chapter 3: Radian Sector Area", "Chapters 23 & 31: Double-Angle & Inverse Trig"],
    tags: ["Squeeze Proof lim sin(x)/x = 1", "All 12 Trig Derivatives", "Power & Product Integrals", "Trig Substitution"],
    sandboxType: "waveLab",
    intuition: `Why did mathematicians invent **Radians**? Because ONLY when $x$ is measured in radians does the chord $\\sin x$, the arc $x$, and the tangent $\\tan x$ squeeze together at a $1:1:1$ ratio as $x \\to 0$! That single limit $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$ makes $(\\sin x)' = \\cos x$ free of messy $\\frac{\\pi}{180}$ constants—unlocking differential equations, physics oscillations, and the integration of circles and hyperbolas!`,
    theoryHtml: `
      <h3>32.1 Geometric Squeeze Proof of $\\lim_{x \\to 0}\\frac{\\sin x}{x} = 1$ ($x$ in Radians!)</h3>
      <p>For $0 < x < \\frac{\\pi}{2}$ on the unit circle, compare three nested areas: Inscribed $\\triangle OAP$ ($\\frac{1}{2}\\sin x$) $<$ Circular Sector $OAP$ ($\\frac{1}{2}x$) $<$ Tangent $\\triangle OAT$ ($\\frac{1}{2}\\tan x$). Multiply by $\\frac{2}{\\sin x} > 0$: $1 < \\frac{x}{\\sin x} < \\frac{1}{\\cos x} \\implies \\cos x < \\frac{\\sin x}{x} < 1$. As $x \\to 0$, $\\cos x \\to 1$, so by the **Squeeze Theorem**, $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$!</p>
      <div class="math-box">
        <div class="math-box-title">Standard Trigonometric Limits ($x \\to 0$, in Radians)</div>
        $$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1, \\qquad \\lim_{x\\to 0}\\frac{\\tan x}{x} = 1, \\qquad \\lim_{x\\to 0}\\frac{\\sin^{-1} x}{x} = 1, \\qquad \\lim_{x\\to 0}\\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$
      </div>

      <h3>32.2 Derivatives of All 6 Trig & All 6 Inverse Trig Functions</h3>
      <div class="math-box">
        <div class="math-box-title">Complete Differentiation Table (Notice EVERY "Co-" Derivative is Negative!)</div>
        $$(\\sin x)' = \\cos x, \\qquad (\\cos x)' = -\\sin x, \\qquad (\\tan x)' = \\sec^2 x$$
        $$(\\cot x)' = -\\operatorname{cosec}^2 x, \\qquad (\\sec x)' = \\sec x\\tan x, \\qquad (\\operatorname{cosec} x)' = -\\operatorname{cosec} x\\cot x$$
        $$(\\sin^{-1} x)' = \\frac{1}{\\sqrt{1-x^2}}, \\quad (\\cos^{-1} x)' = -\\frac{1}{\\sqrt{1-x^2}}, \\quad (\\tan^{-1} x)' = \\frac{1}{1+x^2}, \\quad (\\cot^{-1} x)' = -\\frac{1}{1+x^2}, \\quad (\\sec^{-1} x)' = \\frac{1}{|x|\\sqrt{x^2-1}}$$
      </div>

      <h3>32.3 Trigonometric Integration & Radical Substitutions</h3>
      <div class="math-box">
        <div class="math-box-title">Core Antiderivatives & Trig Substitution Blueprint</div>
        $$\\int \\tan x\\,dx = \\ln|\\sec x| + C, \\qquad \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C$$
        $$\\sqrt{a^2 - x^2} \\implies x = a\\sin\\theta; \\qquad \\sqrt{a^2 + x^2} \\implies x = a\\tan\\theta; \\qquad \\sqrt{x^2 - a^2} \\implies x = a\\sec\\theta$$
        $$\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\!\\left(\\frac{x}{a}\\right) + C, \\qquad \\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\tan^{-1}\\!\\left(\\frac{x}{a}\\right) + C$$
      </div>
    `,
    pitfalls: [
      "Differentiating $\\sin(x^\\circ)$ as $\\cos(x^\\circ)$: Because $x^\\circ = \\frac{\\pi x}{180}\\text{ rad}$, the Chain Rule adds a factor of $\\frac{\\pi}{180}$: $\\frac{d}{dx}[\\sin(x^\\circ)] = \\frac{\\pi}{180}\\cos(x^\\circ)$!"
    ],
    examples: [
      {
        q: "Example 1: Evaluate $\\lim_{x \\to 0}\\frac{1 - \\cos 4x}{x\\sin 3x}$.",
        sol: "Use $1 - \\cos 4x = 2\\sin^2(2x)$: $\\lim_{x\\to 0}\\frac{2\\sin^2(2x)}{x\\sin 3x} = \\lim_{x\\to 0} 2 \\cdot \\frac{4x^2}{3x^2} \\cdot \\left(\\frac{\\sin 2x}{2x}\\right)^2 \\cdot \\frac{3x}{\\sin 3x} = \\frac{8}{3}$!"
      },
      {
        q: "Example 2: Prove via trigonometric substitution that the area of a circle $x^2 + y^2 = r^2$ is $\\pi r^2$.",
        sol: "Area $= 4\\int_0^r \\sqrt{r^2 - x^2}\\,dx$. Substitute $x = r\\sin\\theta,\\; dx = r\\cos\\theta\\,d\\theta$ ($0 \\to \\frac{\\pi}{2}$): $4r^2\\int_0^{\\pi/2}\\cos^2\\theta\\,d\\theta = 2r^2\\int_0^{\\pi/2}(1 + \\cos 2\\theta)\\,d\\theta = 2r^2\\left[\\theta + \\frac{\\sin 2\\theta}{2}\\right]_0^{\\pi/2} = 2r^2\\left(\\frac{\\pi}{2}\\right) = \\pi r^2$!"
      }
    ],
    quiz: [
      {
        q: "Evaluate $\\lim_{x\\to 0}\\frac{1 - \\cos 6x}{x^2}$.",
        options: ["$6$", "$18$", "$36$", "$12$"],
        answer: 1,
        explanation: "$\\frac{2\\sin^2(3x)}{x^2} = 2 \\cdot 9 \\cdot \\left(\\frac{\\sin 3x}{3x}\\right)^2 \\to 18$."
      },
      {
        q: "What is $\\frac{d}{dx}\\big[\\sin^{-1} x + \\cos^{-1} x\\big]$ for $x \\in (-1, 1)$?",
        options: ["$\\frac{2}{\\sqrt{1-x^2}}$", "$0$", "$1$", "$\\frac{\\pi}{2}$"],
        answer: 1,
        explanation: "Since $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$ is constant on $[-1, 1]$, its derivative is $0$!"
      },
      {
        q: "Evaluate $\\int_0^{\\sqrt{3}} \\frac{1}{1 + x^2}\\,dx$.",
        options: ["$\\frac{\\pi}{6}$", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{4}$", "$\\sqrt{3}$"],
        answer: 1,
        explanation: "$[\\tan^{-1} x]_0^{\\sqrt{3}} = \\tan^{-1}(\\sqrt{3}) - 0 = \\frac{\\pi}{3}$."
      }
    ]
  }
];
