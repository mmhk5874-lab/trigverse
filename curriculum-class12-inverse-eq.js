/* ==========================================================================
   TrigVerse Ultra-Detailed Mastery Modules —
   1. Trigonometric Identities and Transformations
   2. Solving Trigonometric Equations Using Identities
   3. Inverse Trigonometric Functions (Foundations, Bijectivity & Graphs)
   4. Domain and Range of Inverse Trigonometric Functions
   5. Principal Values of Inverse Trigonometric Functions
   6. Properties of Inverse Trigonometric Functions
   ========================================================================== */

window.TRIG_CLASS12_INVERSE_EQ = {
  /* ========================================================================
     CHAPTER 28: TRIGONOMETRIC IDENTITIES AND TRANSFORMATIONS
     ======================================================================== */
  identitiesTransformations: {
    id: "ch-28-identities-transformations",
    grade: "Ch 28",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "28. Trigonometric Identities and Transformations",
    subtitle: "Master the 6 Bidirectional Transformation Bridges: Sum ↔ Product, Power ↔ Multiple-Angle, Harmonic R-Alpha Synthesis, Weierstrass Rational Map, and A + B + C = π Conditional Transformations.",
    prerequisites: ["Chapters 22–27: Compound, Multiple, Half & Sum/Product Formulas"],
    tags: ["6 Transformation Bridges", "Power Linearization", "R cos(θ - α) Synthesis", "A + B + C = π Conditional Laws"],
    sandboxType: "compoundWaveLab",
    intuition: `Individual trig formulas feel like dozens of separate rules until you see them as **Six Bidirectional Transformation Bridges**: need to solve $= 0$ or cancel fractions? Cross the **Sum $\\to$ Product Bridge**! Need to integrate or find a period? Cross the **Power $\\to$ Multiple-Angle Bridge**! Need max/min or phase? Cross the **Harmonic $R\\cos(\\theta - \\alpha)$ Bridge**! Knowing *which bridge to cross—and why*—turns hard Olympiad and JEE/University problems into routine 3-line calculations.`,
    theoryHtml: `
      <h3>28.1 The Six Bidirectional Transformation Bridges</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Transformation Bridge</th>
              <th>Forward &amp; Reverse Formula</th>
              <th>When to Deploy It</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Sum $\\longleftrightarrow$ Product</strong></td>
              <td>$\\sin C + \\sin D = 2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}$<br/>$2\\sin A\\cos B = \\sin(A+B) + \\sin(A-B)$</td>
              <td><strong>Forward:</strong> Factoring $= 0$, cancelling fraction ratios.<br/><strong>Reverse:</strong> Integration $\\int$, telescoping series.</td>
            </tr>
            <tr>
              <td><strong>2. Power $\\longleftrightarrow$ Multiple-Angle</strong></td>
              <td>$\\sin^2\\theta = \\frac{1-\\cos 2\\theta}{2},\\; \\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$<br/>$\\sin^3\\theta = \\frac{3\\sin\\theta - \\sin 3\\theta}{4},\\; \\cos^3\\theta = \\frac{3\\cos\\theta + \\cos 3\\theta}{4}$</td>
              <td><strong>Forward (Linearize):</strong> Calculus $\\int$, finding period &amp; range.<br/><strong>Reverse (Polynomialize):</strong> Solving in $u = \\cos\\theta$.</td>
            </tr>
            <tr>
              <td><strong>3. Harmonic $R$-$\\alpha$ Synthesis</strong></td>
              <td>$a\\cos\\theta + b\\sin\\theta = R\\cos(\\theta - \\alpha) = R\\sin(\\theta + \\beta)$<br/>where $R = \\sqrt{a^2 + b^2},\\; \\tan\\alpha = \\frac{b}{a}$</td>
              <td>Collapsing two out-of-phase waves of equal frequency into ONE pure sinusoid!</td>
            </tr>
            <tr>
              <td><strong>4. Weierstrass Rational Map</strong></td>
              <td>$t = \\tan\\frac{\\theta}{2} \\implies \\sin\\theta = \\frac{2t}{1+t^2},\\; \\cos\\theta = \\frac{1-t^2}{1+t^2}$</td>
              <td>Converting ANY rational trig expression or equation into pure polynomial algebra in $t$.</td>
            </tr>
            <tr>
              <td><strong>5. Symmetric $(u, v)$ Map</strong></td>
              <td>Let $u = \\sin\\theta + \\cos\\theta$: then $\\sin 2\\theta = u^2 - 1$<br/>Let $w = \\sin\\theta - \\cos\\theta$: then $\\sin 2\\theta = 1 - w^2$</td>
              <td>Expressions symmetric in $(\\sin\\theta \\pm \\cos\\theta)$ and $\\sin\\theta\\cos\\theta$.</td>
            </tr>
            <tr>
              <td><strong>6. "1-Annihilation" Bridge</strong></td>
              <td>$1 + \\cos 2\\theta = 2\\cos^2\\theta,\\quad 1 - \\cos 2\\theta = 2\\sin^2\\theta$<br/>$1 \\pm \\sin 2\\theta = (\\cos\\theta \\pm \\sin\\theta)^2$</td>
              <td>Clearing radicals $\\sqrt{1 \\pm \\cos\\theta}$ and simplifying half-angle ratios.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>28.2 Complete Conditional Transformations for Triangles ($A + B + C = \\pi$)</h3>
      <p>In any triangle $\\triangle ABC$, $A + B + C = \\pi \\implies A + B = \\pi - C$ and $\\frac{A + B}{2} = \\frac{\\pi}{2} - \\frac{C}{2}$. Applying sum-to-product to the first two terms and double/half-angle to the third term produces the **Master Conditional Transformation Suite**:</p>
      <div class="math-box">
        <div class="math-box-title">Conditional Identities When $A + B + C = \\pi$ ($180^\\circ$)</div>
        $$\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$$
        $$\\cos 2A + \\cos 2B + \\cos 2C = -1 - 4\\cos A\\cos B\\cos C$$
        $$\\sin A + \\sin B + \\sin C = 4\\cos\\frac{A}{2}\\cos\\frac{B}{2}\\cos\\frac{C}{2}, \\qquad \\cos A + \\cos B + \\cos C = 1 + 4\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}$$
        $$\\sin^2 A + \\sin^2 B + \\sin^2 C = 2 + 2\\cos A\\cos B\\cos C, \\qquad \\cos^2 A + \\cos^2 B + \\cos^2 C = 1 - 2\\cos A\\cos B\\cos C$$
        $$\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C, \\qquad \\cot\\frac{A}{2} + \\cot\\frac{B}{2} + \\cot\\frac{C}{2} = \\cot\\frac{A}{2}\\cot\\frac{B}{2}\\cot\\frac{C}{2}$$
        $$\\tan\\frac{A}{2}\\tan\\frac{B}{2} + \\tan\\frac{B}{2}\\tan\\frac{C}{2} + \\tan\\frac{C}{2}\\tan\\frac{A}{2} = 1, \\qquad \\cot A\\cot B + \\cot B\\cot C + \\cot C\\cot A = 1$$
      </div>
      <p><em>Proof Pattern for Tangent Pair-Products:</em> Since $\\frac{A}{2} + \\frac{B}{2} = \\frac{\\pi}{2} - \\frac{C}{2}$, take $\\tan$ of both sides: $\\frac{\\tan(A/2) + \\tan(B/2)}{1 - \\tan(A/2)\\tan(B/2)} = \\cot\\frac{C}{2} = \\frac{1}{\\tan(C/2)}$. Cross-multiplying immediately yields $\\sum \\tan\\frac{A}{2}\\tan\\frac{B}{2} = 1$!</p>

      <h3>28.3 Power-Linearization of Mixed Products ($\\sin^4 x + \\cos^4 x$ to $\\cos 4x$)</h3>
      <div class="math-box">
        <div class="math-box-title">Higher-Degree Linearizing Identities</div>
        $$\\sin^4 x + \\cos^4 x = 1 - \\frac{1}{2}\\sin^2 2x = \\frac{3 + \\cos 4x}{4}$$
        $$\\sin^6 x + \\cos^6 x = 1 - \\frac{3}{4}\\sin^2 2x = \\frac{5 + 3\\cos 4x}{8}$$
        $$\\sin^4 x = \\frac{3 - 4\\cos 2x + \\cos 4x}{8}, \\qquad \\cos^4 x = \\frac{3 + 4\\cos 2x + \\cos 4x}{8}$$
      </div>
    `,
    pitfalls: [
      "Using $\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$ for a right-angled triangle: If $C = 90^\\circ$, $\\tan 90^\\circ$ is UNDEFINED! The tangent conditional identity requires $A, B, C \\neq \\frac{\\pi}{2}$ (whereas the $\\tan\\frac{A}{2}\\tan\\frac{B}{2}$ identity holds for ALL triangles because $0 < \\frac{A}{2} < \\frac{\\pi}{2}$!).",
      "Forgetting $|u| \\le \\sqrt{2}$ in the symmetric substitution $u = \\sin\\theta + \\cos\\theta$: Because $\\sin\\theta + \\cos\\theta = \\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4})$, $u$ MUST lie in $[-\\sqrt{2}, \\sqrt{2}]$!"
    ],
    examples: [
      {
        q: "Example 1: Transform $f(\\theta) = 5\\cos\\theta - 12\\sin\\theta$ into the form $R\\cos(\\theta + \\alpha)$ with $R > 0$ and $0 < \\alpha < \\frac{\\pi}{2}$.",
        sol: "Expand $R\\cos(\\theta + \\alpha) = R\\cos\\theta\\cos\\alpha - R\\sin\\theta\\sin\\alpha$. Match coefficients: $R\\cos\\alpha = 5$ and $R\\sin\\alpha = 12$. Square and add: $R = \\sqrt{5^2 + 12^2} = 13$, and $\\tan\\alpha = \\frac{12}{5} \\implies \\alpha = \\tan^{-1}\\!\\left(\\frac{12}{5}\\right)$. Thus $f(\\theta) = 13\\cos\\!\\left(\\theta + \\tan^{-1}\\frac{12}{5}\\right)$."
      },
      {
        q: "Example 2: In any $\\triangle ABC$, prove $\\cos^2 A + \\cos^2 B + \\cos^2 C = 1 - 2\\cos A\\cos B\\cos C$.",
        sol: "Linearize the first two squares: $\\cos^2 A + \\cos^2 B = \\frac{1 + \\cos 2A}{2} + \\frac{1 + \\cos 2B}{2} = 1 + \\frac{\\cos 2A + \\cos 2B}{2} = 1 + \\cos(A+B)\\cos(A-B)$. Since $A + B = \\pi - C$, $\\cos(A+B) = -\\cos C$! Add $\\cos^2 C$: $1 - \\cos C\\cos(A-B) + \\cos^2 C = 1 - \\cos C[\\cos(A-B) + \\cos(A+B)]$ (since $-\\cos C = \\cos(A+B)$) $= 1 - \\cos C(2\\cos A\\cos B) = 1 - 2\\cos A\\cos B\\cos C$!"
      },
      {
        q: "Example 3: Simplify $E = \\sin^6 x + \\cos^6 x + 3\\sin^2 x\\cos^2 x$ and transform $\\cos^4 x - \\sin^4 x$.",
        sol: "First, $E = (\\sin^2 x + \\cos^2 x)^3 = 1^3 = 1$. Second, factor as a difference of squares: $\\cos^4 x - \\sin^4 x = (\\cos^2 x + \\sin^2 x)(\\cos^2 x - \\sin^2 x) = 1 \\cdot \\cos 2x = \\cos 2x$!"
      }
    ],
    quiz: [
      {
        q: "In $\\triangle ABC$ with $A = 50^\\circ, B = 60^\\circ, C = 70^\\circ$, what does $\\frac{\\tan 50^\\circ + \\tan 60^\\circ + \\tan 70^\\circ}{\\tan 50^\\circ \\tan 60^\\circ \\tan 70^\\circ}$ equal?",
        options: ["$0$", "$1$", "$\\sqrt{3}$", "$3$"],
        answer: 1,
        explanation: "Since $50^\\circ + 60^\\circ + 70^\\circ = 180^\\circ$, $\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$, making their ratio $1$!"
      },
      {
        q: "When $\\sin^4 x + \\cos^4 x$ is linearized into $\\frac{A + B\\cos 4x}{4}$, what are $(A, B)$?",
        options: ["$(1, 3)$", "$(3, 1)$", "$(2, 2)$", "$(3, -1)$"],
        answer: 1,
        explanation: "$1 - \\frac{1}{2}\\sin^2 2x = 1 - \\frac{1}{2}\\left(\\frac{1 - \\cos 4x}{2}\\right) = \\frac{3 + \\cos 4x}{4}$, so $(A, B) = (3, 1)$."
      },
      {
        q: "In any $\\triangle ABC$, what is the exact value of $\\tan\\frac{A}{2}\\tan\\frac{B}{2} + \\tan\\frac{B}{2}\\tan\\frac{C}{2} + \\tan\\frac{C}{2}\\tan\\frac{A}{2}$?",
        options: ["$0$", "$1$", "$\\frac{1}{2}$", "$\\sqrt{3}$"],
        answer: 1,
        explanation: "Because $\\frac{A}{2} + \\frac{B}{2} + \\frac{C}{2} = \\frac{\\pi}{2}$, the pairwise sum of tangents is identically $1$ for every triangle."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 31: SOLVING TRIGONOMETRIC EQUATIONS USING IDENTITIES
     ======================================================================== */
  solvingEqUsingIdentities: {
    id: "ch-31-solving-eq-identities",
    grade: "Ch 31",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "31. Solving Trigonometric Equations Using Identities",
    subtitle: "Conquer complex trigonometric equations by systematically deploying Pythagorean, Double/Triple-Angle, Sum-to-Product, Product-to-Sum, Symmetric (s±c), Weierstrass t = tan(x/2), and Extremal Range identities!",
    prerequisites: ["Chapter 28: Identities & Transformations", "Chapters 29–30: Principal & General Solutions"],
    tags: ["7 Identity-Equation Patterns", "Sum-to-Product 4-Term Roots", "Weierstrass t = tan(x/2) Solver", "Symmetric & Extremal Equations"],
    sandboxType: "trigEqInverseLab",
    intuition: `Most exam trigonometric equations cannot be solved directly because they mix different functions ($\\sec^2 x$ with $\\tan x$), different frequencies ($\\cos x + \\cos 2x + \\cos 3x = 0$), or products ($\\sin x\\sin 3x = \\frac{1}{2}$)! **Identities are the algebraic keys that unlock equations**: every equation structure maps to one specific identity transformation that collapses it into solvable elementary factors—provided you guard against **domain holes** and **extraneous roots**!`,
    theoryHtml: `
      <h3>31.1 Master Decision Map: Which Identity Unlocks Which Equation?</h3>
      <ol>
        <li>
          <strong>Pattern 1 — Mixed Functions, Same Angle ($\\sin^2 x$ with $\\cos x$, or $\\sec^2 x$ with $\\tan x$):</strong><br/>
          Use <strong>Pythagorean Identities</strong> ($\\sin^2 x = 1 - \\cos^2 x$, $\\sec^2 x = 1 + \\tan^2 x$, $\\operatorname{cosec}^2 x = 1 + \\cot^2 x$) to rewrite in terms of the <em>first-power</em> function so no square roots appear!
        </li>
        <li>
          <strong>Pattern 2 — Mixed Angles $x$ and $2x$ (or $3x$):</strong><br/>
          Use <strong>Double/Triple-Angle Identities</strong>: e.g., replace $\\cos 2x = 2\\cos^2 x - 1$ (if paired with $\\cos x$), $\\cos 2x = 1 - 2\\sin^2 x$ (if paired with $\\sin x$), or $\\sin 2x = 2\\sin x\\cos x$ and factor!
        </li>
        <li>
          <strong>Pattern 3 — Sum of 3 or 4 Sines/Cosines at AP Frequencies ($\\sin x + \\sin 2x + \\sin 3x = 0$):</strong><br/>
          Pair outer angles whose average matches the middle angle and apply <strong>Sum-to-Product</strong>: $(\\sin 3x + \\sin x) + \\sin 2x = 2\\sin 2x\\cos x + \\sin 2x = \\sin 2x(2\\cos x + 1) = 0$!
        </li>
        <li>
          <strong>Pattern 4 — Products of Sines/Cosines ($\\cos x\\cos 2x\\cos 3x = \\frac{1}{4}$ or $\\sin 5x\\cos 3x = \\sin 6x\\cos 2x$):</strong><br/>
          Multiply by $2$ and apply <strong>Product-to-Sum</strong> ($2\\sin A\\cos B = \\sin(A+B) + \\sin(A-B)$) so common terms cancel across both sides!
        </li>
        <li>
          <strong>Pattern 5 — Symmetric Equations in $(\\sin x \\pm \\cos x)$ and $\\sin x\\cos x$:</strong><br/>
          Given $a(\\sin x + \\cos x) + b\\sin x\\cos x + c = 0$, substitute $u = \\sin x + \\cos x$ (requiring $|u| \\le \\sqrt{2}$!). Since $u^2 = 1 + 2\\sin x\\cos x$, replace $\\sin x\\cos x = \\frac{u^2 - 1}{2}$, solve the quadratic in $u$, and finish with $\\cos\\!\\left(x - \\frac{\\pi}{4}\\right) = \\frac{u}{\\sqrt{2}}$!
        </li>
        <li>
          <strong>Pattern 6 — Universal Weierstrass Rational Method ($a\\cos x + b\\sin x = c$):</strong><br/>
          First test $x = (2n + 1)\\pi$ (check if $-a = c$!). Then set $t = \\tan\\frac{x}{2}$, substitute $\\cos x = \\frac{1-t^2}{1+t^2},\\; \\sin x = \\frac{2t}{1+t^2}$ to obtain the quadratic:
          $$(a + c)t^2 - 2bt + (c - a) = 0 \\implies \\frac{x}{2} = n\\pi + \\tan^{-1}(t) \\implies x = 2n\\pi + 2\\tan^{-1}(t)$$
        </li>
        <li>
          <strong>Pattern 7 — Extremal / Boundedness Method (When Algebra Looks Impossible!):</strong><br/>
          For equations like $\\sin^4 x + \\cos^6 x = 1$ or $\\sin x + \\sin 5x = 2$, compare ranges! Since $\\sin x \\le 1$ and $\\sin 5x \\le 1$, their sum equals $2$ <strong>if and only if BOTH $\\sin x = 1$ AND $\\sin 5x = 1$ simultaneously</strong>!
        </li>
      </ol>

      <h3>31.2 Domain Auditing Protocol (Zero-Denominator & Squaring Filter)</h3>
      <div class="math-box">
        <div class="math-box-title">Mandatory 3-Point Root Filter</div>
        <p style="margin:0;text-align:left;">
          1. If the original equation contains $\\tan x$ or $\\sec x$, <strong>ban $x = (2k+1)\\frac{\\pi}{2}$</strong> immediately!<br/>
          2. If the original equation contains $\\cot x$ or $\\operatorname{cosec} x$ (or $\\sin x$ in a denominator), <strong>ban $x = k\\pi$</strong> immediately!<br/>
          3. If you squared both sides at any step, check signs of LHS &amp; RHS before accepting roots!
        </p>
      </div>
    `,
    pitfalls: [
      "Accepting excluded roots in $\\tan x + \\tan 2x + \\tan x\\tan 2x = 1$: Wait—if a root gave $x = \\frac{\\pi}{4}$, $\\tan 2x = \\tan\\frac{\\pi}{2}$ is UNDEFINED! Always check that NO tangent in the original equation hits an odd multiple of $\\frac{\\pi}{2}$!",
      "Forgetting $|u| \\le \\sqrt{2}$ in $u = \\sin x + \\cos x$: Any quadratic root with $|u| > \\sqrt{2} \\approx 1.414$ yields no real angle $x$."
    ],
    examples: [
      {
        q: "Example 1 (Sum-to-Product 4-Term Equation): Find the general solution of $\\cos x + \\cos 2x + \\cos 3x + \\cos 4x = 0$.",
        sol: "Pair $(4x, x)$ and $(3x, 2x)$ so both share half-sum $\\frac{5x}{2}$: $(\\cos 4x + \\cos x) + (\\cos 3x + \\cos 2x) = 2\\cos\\frac{5x}{2}\\cos\\frac{3x}{2} + 2\\cos\\frac{5x}{2}\\cos\\frac{x}{2} = 2\\cos\\frac{5x}{2}\\!\\left(\\cos\\frac{3x}{2} + \\cos\\frac{x}{2}\\right) = 4\\cos\\frac{5x}{2}\\cos x\\cos\\frac{x}{2} = 0$. Setting each factor to $0$ ($n \\in \\mathbb{Z}$): $x = (2n+1)\\frac{\\pi}{5}$, or $x = (2n+1)\\frac{\\pi}{2}$, or $x = (2n+1)\\pi$ (note $(2n+1)\\pi$ is already a subset of $(2k+1)\\frac{\\pi}{5}$ when $2k+1 = 5(2n+1)$!)."
      },
      {
        q: "Example 2 (Symmetric Substitution): Solve $\\sin x + \\cos x - 2\\sqrt{2}\\sin x\\cos x = 0$.",
        sol: "Let $u = \\sin x + \\cos x$ ($|u| \\le \\sqrt{2}$), so $2\\sin x\\cos x = u^2 - 1$. Substitute: $u - \\sqrt{2}(u^2 - 1) = 0 \\implies \\sqrt{2}u^2 - u - \\sqrt{2} = 0 \\implies (\\sqrt{2}u + 1)(u - \\sqrt{2}) = 0$. Note if $u = \\sqrt{2}$? Wait: $(\\sqrt{2}u + 1)(u - \\sqrt{2}) = \\sqrt{2}u^2 - 2u + u - \\sqrt{2} = \\sqrt{2}u^2 - u - \\sqrt{2}$ ✓! Wait—check signs: if $u = \\sqrt{2}$, $u - \\sqrt{2}(2 - 1) = \\sqrt{2} - \\sqrt{2} = 0$ ✓! Both $|\\sqrt{2}| \\le \\sqrt{2}$ and $|-\\frac{1}{\\sqrt{2}}| \\le \\sqrt{2}$ are valid! Convert via $\\cos(x - \\frac{\\pi}{4}) = \\frac{u}{\\sqrt{2}}$: (i) $\\cos(x - \\frac{\\pi}{4}) = 1 \\implies x = 2n\\pi + \\frac{\\pi}{4}$; (ii) $\\cos(x - \\frac{\\pi}{4}) = -\\frac{1}{2} \\implies x = 2n\\pi + \\frac{\\pi}{4} \\pm \\frac{2\\pi}{3}$ ($n \\in \\mathbb{Z}$)."
      },
      {
        q: "Example 3 (Domain Exclusion Trap!): Solve $\\tan x + \\tan 2x + \\sqrt{3}\\tan x\\tan 2x = \\sqrt{3}$.",
        sol: "Domain restrictions FIRST: $x \\neq (2k+1)\\frac{\\pi}{2}$ and $2x \\neq (2k+1)\\frac{\\pi}{2} \\implies x \\neq (2k+1)\\frac{\\pi}{4}$! Rearrange: $\\tan x + \\tan 2x = \\sqrt{3}(1 - \\tan x\\tan 2x)$. Note $1 - \\tan x\\tan 2x \\neq 0$ (if it were $0$, LHS would be $0 \\implies \\tan 2x = -\\tan x \\implies -\\tan^2 x = 1$, impossible!). Divide: $\\frac{\\tan x + \\tan 2x}{1 - \\tan x\\tan 2x} = \\sqrt{3} \\implies \\tan 3x = \\tan\\frac{\\pi}{3} \\implies 3x = n\\pi + \\frac{\\pi}{3} \\implies x = \\frac{n\\pi}{3} + \\frac{\\pi}{9}\\;(n \\in \\mathbb{Z})$. None of $\\frac{3n+1}{9}\\pi$ equals an integer multiple of $\\frac{\\pi}{4}$ (since $4(3n+1) = 9m$ is impossible mod $3$!), so ALL roots are valid!"
      }
    ],
    quiz: [
      {
        q: "Find all real solutions of $\\sin^6 x + \\cos^6 x = 1$.",
        options: ["$x = n\\pi$", "$x = \\frac{n\\pi}{2}$", "$x = 2n\\pi$", "No solution"],
        answer: 1,
        explanation: "Use identity $\\sin^6 x + \\cos^6 x = 1 - \\frac{3}{4}\\sin^2(2x) = 1 \\iff \\sin(2x) = 0 \\iff 2x = n\\pi \\iff x = \\frac{n\\pi}{2}\\;(n \\in \\mathbb{Z})$."
      },
      {
        q: "When solving $\\frac{\\cos 2x}{1 + \\sin 2x} = 0$, what is the TRUE general solution after checking domain restrictions?",
        options: [
          "$x = (2n+1)\\frac{\\pi}{4}$ for ALL $n \\in \\mathbb{Z}$",
          "$x = n\\pi + \\frac{\\pi}{4}$ ONLY (since $n\\pi - \\frac{\\pi}{4}$ makes $1 + \\sin 2x = 0$!)",
          "$x = n\\pi - \\frac{\\pi}{4}$ ONLY",
          "No real solution"
        ],
        answer: 1,
        explanation: "Denominator $1 + \\sin 2x \\neq 0$ bans $\\sin 2x = -1$ ($x = n\\pi - \\frac{\\pi}{4}$)! Write $\\frac{\\cos^2 x - \\sin^2 x}{(\\cos x + \\sin x)^2} = \\frac{\\cos x - \\sin x}{\\cos x + \\sin x} = 0 \\implies \\tan x = 1 \\implies x = n\\pi + \\frac{\\pi}{4}$!"
      },
      {
        q: "How many real solutions does $\\sin x + \\cos x = 2$ have?",
        options: ["$0$", "$1$ per period", "$2$ per period", "Infinitely many"],
        answer: 0,
        explanation: "By Harmonic Synthesis, $\\sin x + \\cos x = \\sqrt{2}\\sin(x + \\frac{\\pi}{4}) \\le \\sqrt{2} \\approx 1.414 < 2$, so ZERO real solutions exist!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 33: INVERSE TRIGONOMETRIC FUNCTIONS (FOUNDATIONS, BIJECTIVITY & GRAPHS)
     ======================================================================== */
  inverseTrigFoundations: {
    id: "ch-33-inverse-trig",
    grade: "Ch 33",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "33. Inverse Trigonometric Functions",
    subtitle: "Why periodic functions fail invertibility, how Horizontal Line Test restrictions create bijections, exact $y = x$ mirror graphs of all 6 inverse functions, and notation rules.",
    prerequisites: ["Chapters 19–21: Domain, Range & Graphs of Trig Functions"],
    tags: ["Bijectivity & Horizontal Line Test", "arcsin ≠ 1/sin", "6 Mirror Graphs Across y = x", "Increasing vs Decreasing"],
    sandboxType: "inverseMasterLab",
    intuition: `If someone asks *"What is $\\sin(\\frac{\\pi}{6})$?"*, there is ONE answer: $\\frac{1}{2}$. If someone asks the reverse question—*"Whose sine is $\\frac{1}{2}$?"*—infinitely many angles raise their hands ($\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}, -\\frac{7\\pi}{6}, \\dots$)! Because a function MUST output **at most one value** per input, $y = \\sin x$ on $\\mathbb{R}$ has no inverse until we surgically trim its domain to a single one-to-one monotonic branch $[ -\\frac{\\pi}{2}, \\frac{\\pi}{2} ]$ and reflect its curve across the diagonal mirror $y = x$!`,
    theoryHtml: `
      <h3>33.1 Condition for Invertibility: Bijection (One-to-One & Onto)</h3>
      <p>A function $f: A \\to B$ possesses an inverse function $f^{-1}: B \\to A$ <strong>if and only if $f$ is Bijective</strong>:</p>
      <ul>
        <li><strong>One-to-One (Injective / Passes Horizontal Line Test):</strong> Every horizontal line $y = c$ intersects the graph of $f$ <em>at most once</em>. Because all 6 trigonometric functions are periodic ($f(x+T)=f(x)$), every horizontal line hits them infinitely many times on $\\mathbb{R}$—so <strong>none of the 6 trig functions is one-to-one on its full domain</strong>!</li>
        <li><strong>Onto (Surjective):</strong> The codomain $B$ must equal the exact range (e.g., $[-1, 1]$ for $\\sin$ and $\\cos$).</li>
        <li><strong>The Surgical Fix:</strong> Restrict each trig function to ONE standard central interval where it is strictly monotonic (one-to-one) AND achieves its entire range (onto). Then swap inputs and outputs:
          $$y = \\sin^{-1} x \\;\\Longleftrightarrow\\; x = \\sin y \\quad \\text{with } x \\in [-1, 1] \\text{ and } y \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$$
        </li>
      </ul>

      <h3>33.2 Notation & Crucial Algebraic Distinctions</h3>
      <div class="math-box">
        <div class="math-box-title">Inverse Function vs Reciprocal Exponent</div>
        $$\\sin^{-1} x = \\arcsin x = \\text{“the unique angle in } [-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}] \\text{ whose sine is } x\\text{”}$$
        $$\\sin^{-1} x \\;\\neq\\; (\\sin x)^{-1} = \\frac{1}{\\sin x} = \\operatorname{cosec} x \\qquad \\text{and} \\qquad \\sin^{-1} x \\;\\neq\\; \\frac{1}{\\sin^{-1} x}$$
      </div>

      <h3>33.3 Geometric Construction & Anatomy of All 6 Inverse Trig Graphs</h3>
      <p>Swapping $(x, y) \\mapsto (y, x)$ reflects each restricted trigonometric curve across the mirror line **$y = x$**—turning horizontal asymptotes into vertical asymptotes and vertical asymptotes into **horizontal asymptotes**!</p>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Inverse Function</th>
              <th>Endpoints / Asymptotes</th>
              <th>Monotonicity &amp; Symmetry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>$y = \\sin^{-1} x$</strong></td>
              <td>Starts at $(-1, -\\frac{\\pi}{2})$, passes $(0,0)$, ends at $(1, \\frac{\\pi}{2})$ with vertical tangents at $x = \\pm 1$</td>
              <td><strong>Strictly Increasing</strong>; Odd (origin symmetry)</td>
            </tr>
            <tr>
              <td><strong>$y = \\cos^{-1} x$</strong></td>
              <td>Starts at $(-1, \\pi)$, crosses $y$-axis at $(0, \\frac{\\pi}{2})$, ends at $(1, 0)$</td>
              <td><strong>Strictly Decreasing</strong>; Neither even nor odd!</td>
            </tr>
            <tr>
              <td><strong>$y = \\tan^{-1} x$</strong></td>
              <td>Bounded between <strong>Horizontal Asymptotes $y = -\\frac{\\pi}{2}$ and $y = +\\frac{\\pi}{2}$</strong>; passes $(0,0)$</td>
              <td><strong>Strictly Increasing</strong> on $\\mathbb{R}$; Odd</td>
            </tr>
            <tr>
              <td><strong>$y = \\cot^{-1} x$</strong></td>
              <td>Bounded between <strong>Horizontal Asymptotes $y = \\pi$ (as $x\\to -\\infty$) and $y = 0$ (as $x\\to +\\infty$)</strong>; passes $(0, \\frac{\\pi}{2})$</td>
              <td><strong>Strictly Decreasing</strong> on $\\mathbb{R}$; Neither even nor odd</td>
            </tr>
            <tr>
              <td><strong>$y = \\sec^{-1} x$</strong></td>
              <td>Two branches $(x \\le -1$ and $x \\ge 1)$ approaching <strong>Horizontal Asymptote $y = \\frac{\\pi}{2}$</strong></td>
              <td>Increasing on $(-\\infty, -1]$ and on $[1, \\infty)$</td>
            </tr>
            <tr>
              <td><strong>$y = \\operatorname{cosec}^{-1} x$</strong></td>
              <td>Two branches $(x \\le -1$ and $x \\ge 1)$ approaching <strong>Horizontal Asymptote $y = 0$</strong></td>
              <td>Decreasing on $(-\\infty, -1]$ and on $[1, \\infty)$; Odd</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    pitfalls: [
      "Thinking $\\cos^{-1} x$ is an even function because $\\cos x$ is even: Look at the graph! $\\cos^{-1}(-x) = \\pi - \\cos^{-1} x$, which is symmetric about the point $(0, \\frac{\\pi}{2})$, NOT symmetric about the $y$-axis!",
      "Forgetting that inequalities REVERSE when applying a decreasing inverse function: Since $\\cos^{-1} x$ and $\\cot^{-1} x$ are strictly DECREASING, $x_1 < x_2 \\iff \\cos^{-1} x_1 > \\cos^{-1} x_2$!"
    ],
    examples: [
      {
        q: "Example 1: Which is larger: $\\cos^{-1}(0.3)$ or $\\cos^{-1}(0.7)$? What about $\\sin^{-1}(0.3)$ vs $\\sin^{-1}(0.7)$?",
        sol: "Because $y = \\cos^{-1} x$ is **strictly decreasing** on $[-1, 1]$, $0.3 < 0.7 \\implies \\cos^{-1}(0.3) > \\cos^{-1}(0.7)$! Conversely, $y = \\sin^{-1} x$ is **strictly increasing**, so $\\sin^{-1}(0.3) < \\sin^{-1}(0.7)$."
      },
      {
        q: "Example 2: Solve the inequality $\\cot^{-1}(x^2 - 4x + 4) > \\frac{\\pi}{4}$ for real $x$.",
        sol: "Notice $\\frac{\\pi}{4} = \\cot^{-1}(1)$. Because $\\cot^{-1}$ is **strictly decreasing** on $\\mathbb{R}$ (with no domain restriction!), applying $\\cot$ REVERSES the inequality sign: $(x - 2)^2 < 1 \\iff -1 < x - 2 < 1 \\iff x \\in (1, 3)$!"
      },
      {
        q: "Example 3: What are the horizontal asymptotes of $f(x) = 3\\tan^{-1}(2x) + \\pi$ as $x \\to \\pm\\infty$?",
        sol: "As $x \\to +\\infty$, $\\tan^{-1}(2x) \\to +\\frac{\\pi}{2} \\implies f(x) \\to 3(\\frac{\\pi}{2}) + \\pi = \\frac{5\\pi}{2}$. As $x \\to -\\infty$, $\\tan^{-1}(2x) \\to -\\frac{\\pi}{2} \\implies f(x) \\to 3(-\\frac{\\pi}{2}) + \\pi = -\\frac{\\pi}{2}$. Horizontal asymptotes: $y = \\frac{5\\pi}{2}$ and $y = -\\frac{\\pi}{2}$."
      }
    ],
    quiz: [
      {
        q: "Why do $y = \\tan^{-1} x$ and $y = \\cot^{-1} x$ have HORIZONTAL asymptotes whereas $y = \\tan x$ and $y = \\cot x$ have VERTICAL asymptotes?",
        options: [
          "Because of periodicity",
          "Because inverting swaps $(x, y) \\mapsto (y, x)$, turning vertical lines $x = c$ into horizontal lines $y = c$",
          "Because $\\tan^{-1} x$ is periodic",
          "They do not have horizontal asymptotes"
        ],
        answer: 1,
        explanation: "Reflecting vertical asymptotes $x = \\pm\\frac{\\pi}{2}$ of $y = \\tan x$ across $y = x$ turns them into horizontal asymptotes $y = \\pm\\frac{\\pi}{2}$ of $y = \\tan^{-1} x$!"
      },
      {
        q: "Solve $\\sin^{-1}(2x - 1) \\le \\sin^{-1}(x)$ — wait: what MUST you enforce alongside monotonicity?",
        options: [
          "Only $2x - 1 \\le x \\implies x \\le 1$",
          "BOTH domain constraints ($2x-1 \\in [-1,1]$ AND $x \\in [-1,1]$) AND $2x - 1 \\le x$, giving $x \\in [0, 1]$",
          "$2x - 1 \\ge x$",
          "$x \\in [-1, 1]$"
        ],
        answer: 1,
        explanation: "Domain requires $-1 \\le 2x - 1 \\le 1 \\implies 0 \\le x \\le 1$, and $-1 \\le x \\le 1$. Since $\\sin^{-1}$ increases, $2x - 1 \\le x \\implies x \\le 1$. Intersection $= [0, 1]$!"
      },
      {
        q: "Which of the following inverse trigonometric functions is NOT an odd function?",
        options: ["$\\sin^{-1} x$", "$\\tan^{-1} x$", "$\\cos^{-1} x$", "$\\operatorname{cosec}^{-1} x$"],
        answer: 2,
        explanation: "$\\cos^{-1}(-x) = \\pi - \\cos^{-1} x \\neq -\\cos^{-1} x$, so $\\cos^{-1} x$ is neither even nor odd."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 34: DOMAIN AND RANGE OF INVERSE TRIGONOMETRIC FUNCTIONS
     ======================================================================== */
  inverseDomainRange: {
    id: "ch-34-inverse-domain-range",
    grade: "Ch 34",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "34. Domain and Range of Inverse Trigonometric Functions",
    subtitle: "Complete mastery of inverse domains & ranges, composite domain inequalities ($|g(x)| \\le 1$), quadratic inverse range optimization, and extremal boundary equations.",
    prerequisites: ["Chapter 19: Trig Domain & Range", "Chapter 33: Inverse Trig Foundations"],
    tags: ["6 Inverse Domain/Range Table", "Composite Domain |g(x)| ≤ 1", "(sin⁻¹x)² + (cos⁻¹x)² Range", "Extremal Boundary Sums"],
    sandboxType: "inverseMasterLab",
    intuition: `Notice the poetic symmetry between Chapter 19 and Chapter 34: **every Range from Chapter 19 becomes the exact Domain of Chapter 34**, and **every restricted Domain slice becomes the Range**! Mastering composite domains & ranges of inverse trig functions is one of the highest-scoring skills in Calculus and entrance exams—especially when $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$ collapses two variables into one!`,
    theoryHtml: `
      <h3>34.1 Complete Domain & Principal Range Reference Table</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Function</th>
              <th>Domain (Input $x$)</th>
              <th>Range (Principal Angle $y$)</th>
              <th>Midpoint of Range</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>$\\sin^{-1} x$</strong></td><td>$[-1,\\; 1]$ &nbsp;($|x| \\le 1$)</td><td>$\\left[-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right]$</td><td>$0$</td></tr>
            <tr><td><strong>$\\cos^{-1} x$</strong></td><td>$[-1,\\; 1]$ &nbsp;($|x| \\le 1$)</td><td>$[0,\\; \\pi]$</td><td>$\\frac{\\pi}{2}$</td></tr>
            <tr><td><strong>$\\tan^{-1} x$</strong></td><td>$\\mathbb{R} = (-\\infty,\\; \\infty)$</td><td>$\\left(-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right)$ &nbsp;(Open!)</td><td>$0$</td></tr>
            <tr><td><strong>$\\cot^{-1} x$</strong></td><td>$\\mathbb{R} = (-\\infty,\\; \\infty)$</td><td>$(0,\\; \\pi)$ &nbsp;(Open!)</td><td>$\\frac{\\pi}{2}$</td></tr>
            <tr><td><strong>$\\sec^{-1} x$</strong></td><td>$(-\\infty, -1] \\cup [1, \\infty)$ &nbsp;($|x| \\ge 1$)</td><td>$[0,\\; \\pi] \\setminus \\left\\{\\frac{\\pi}{2}\\right\\}$</td><td>Excludes $\\frac{\\pi}{2}$</td></tr>
            <tr><td><strong>$\\operatorname{cosec}^{-1} x$</strong></td><td>$(-\\infty, -1] \\cup [1, \\infty)$ &nbsp;($|x| \\ge 1$)</td><td>$\\left[-\\frac{\\pi}{2},\\; \\frac{\\pi}{2}\\right] \\setminus \\{0\\}$</td><td>Excludes $0$</td></tr>
          </tbody>
        </table>
      </div>

      <h3>34.2 Finding Domains of Composite Inverse Expressions</h3>
      <ul>
        <li><strong>Rule 1 ($\\sin^{-1}(g(x))$ or $\\cos^{-1}(g(x))$):</strong> Solve the double inequality $-1 \\le g(x) \\le 1$ (i.e., $|g(x)| \\le 1$).</li>
        <li><strong>Rule 2 ($\\sec^{-1}(g(x))$ or $\\operatorname{cosec}^{-1}(g(x))$):</strong> Solve $g(x) \\le -1$ OR $g(x) \\ge 1$ (i.e., $|g(x)| \\ge 1$).</li>
        <li><strong>Rule 3 (Sums/Products of Multiple Terms):</strong> Take the <strong>INTERSECTION ($D_1 \\cap D_2 \\cap \\cdots$)</strong> of all individual domains! Watch out for <em>single-point domains</em>: e.g., $f(x) = \\sin^{-1} x + \\sec^{-1} x$ has domain $[-1, 1] \\cap ((-\\infty, -1] \\cup [1, \\infty)) = \\{-1, 1\\}$ (ONLY TWO NUMBERS!)!</li>
      </ul>

      <h3>34.3 Finding Ranges of Composite Inverse Expressions</h3>
      <ol>
        <li>
          <strong>Monotonic Evaluation on Restricted Domain:</strong><br/>
          For $f(x) = \\sin^{-1} x + \\cos^{-1} x + \\tan^{-1} x$: first find domain $= [-1, 1] \\cap [-1, 1] \\cap \\mathbb{R} = [-1, 1]$! On $[-1, 1]$, replace $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$, leaving $f(x) = \\frac{\\pi}{2} + \\tan^{-1} x$ for $x \\in [-1, 1]$ (NOT all of $\\mathbb{R}$!). Since $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$ and $\\tan^{-1}(1) = \\frac{\\pi}{4}$, Range $= \\left[\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right]$!
        </li>
        <li>
          <strong>Quadratic Substitution ($t = \\cos^{-1} x \\in [0, \\pi]$ or $t = \\sin^{-1} x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$):</strong><br/>
          For $y = (\\sin^{-1} x)^2 + (\\cos^{-1} x)^2$, substitute $\\sin^{-1} x = \\frac{\\pi}{2} - t$ where $t = \\cos^{-1} x \\in [0, \\pi]$:
          $$y = \\left(\\frac{\\pi}{2} - t\\right)^2 + t^2 = 2t^2 - \\pi t + \\frac{\\pi^2}{4} = 2\\!\\left(t - \\frac{\\pi}{4}\\right)^2 + \\frac{\\pi^2}{8}$$
          Vertex at $t = \\frac{\\pi}{4} \\in [0, \\pi]$ gives $y_{\\min} = \\frac{\\pi^2}{8}$; farthest endpoint $t = \\pi$ gives $y_{\\max} = \\frac{5\\pi^2}{4}$!
        </li>
        <li>
          <strong>Extremal Sum Equations:</strong><br/>
          Because $\\sin^{-1} x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ and $\\cos^{-1} x \\in [0, \\pi]$:
          <br/>• $\\sum_{i=1}^n \\sin^{-1} x_i = \\frac{n\\pi}{2} \\iff x_1 = x_2 = \\cdots = x_n = 1$; &nbsp; $= -\\frac{n\\pi}{2} \\iff$ all $x_i = -1$.
          <br/>• $\\sum_{i=1}^n \\cos^{-1} x_i = n\\pi \\iff$ all $x_i = -1$; &nbsp; $= 0 \\iff$ all $x_i = +1$.
        </li>
      </ol>
    `,
    pitfalls: [
      "Saying the range of $f(x) = \\sin^{-1} x + \\cos^{-1} x + \\tan^{-1} x$ is $(0, \\pi)$: Students simplify to $\\frac{\\pi}{2} + \\tan^{-1} x$ and plug in $\\tan^{-1} x \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, FORGETTING that $\\sin^{-1} x$ restricts $x$ to $[-1, 1]$, where $\\tan^{-1} x \\in [-\\frac{\\pi}{4}, \\frac{\\pi}{4}]$! True range is $[\\frac{\\pi}{4}, \\frac{3\\pi}{4}]$!",
      "Confusing open vs closed brackets on $\\tan^{-1} x$ and $\\cot^{-1} x$: $\\tan^{-1} x \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ NEVER actually reaches $\\pm\\frac{\\pi}{2}$, whereas $\\sin^{-1} x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ DOES reach $\\pm\\frac{\\pi}{2}$ at $x = \\pm 1$!"
    ],
    examples: [
      {
        q: "Example 1: Find the domain of $f(x) = \\cos^{-1}(2x - 3) + \\sin^{-1}\\!\\left(\\frac{x - 1}{2}\\right)$.",
        sol: "Term 1 requires $-1 \\le 2x - 3 \\le 1 \\iff 2 \\le 2x \\le 4 \\iff x \\in [1, 2]$. Term 2 requires $-1 \\le \\frac{x - 1}{2} \\le 1 \\iff -2 \\le x - 1 \\le 2 \\iff x \\in [-1, 3]$. Intersect both intervals: $[1, 2] \\cap [-1, 3] = [1, 2]$."
      },
      {
        q: "Example 2: Find the domain and range of $f(x) = \\sin^{-1} x + \\sec^{-1} x$.",
        sol: "Domain $= [-1, 1] \\cap ((-\\infty, -1] \\cup [1, \\infty)) = \\{-1, 1\\}$ (just two discrete points!). Evaluate $f$ at both points: $f(1) = \\sin^{-1}(1) + \\sec^{-1}(1) = \\frac{\\pi}{2} + 0 = \\frac{\\pi}{2}$; $f(-1) = \\sin^{-1}(-1) + \\sec^{-1}(-1) = -\\frac{\\pi}{2} + \\pi = \\frac{\\pi}{2}$! Thus the Range is the single-element set $\\left\\{\\frac{\\pi}{2}\\right\\}$!"
      },
      {
        q: "Example 3: Find the range of $g(x) = \\cos^{-1}\\!\\left(\\frac{x^2}{1 + x^2}\\right)$ for $x \\in \\mathbb{R}$.",
        sol: "First find the range of inner function $u(x) = \\frac{x^2}{1 + x^2} = 1 - \\frac{1}{1 + x^2}$: since $x^2 \\ge 0$, $1 + x^2 \\in [1, \\infty) \\implies \\frac{1}{1+x^2} \\in (0, 1] \\implies u \\in [0, 1)$ (attains $0$ at $x=0$, approaches $1$ but NEVER reaches $1$!). Since $\\cos^{-1} u$ decreases from $\\cos^{-1}(0) = \\frac{\\pi}{2}$ down toward $\\cos^{-1}(1) = 0$: Range $= \\left(0, \\frac{\\pi}{2}\\right]$ (open at $0$, closed at $\\frac{\\pi}{2}$)!"
      }
    ],
    quiz: [
      {
        q: "What is the domain of $f(x) = \\sin^{-1}(\\log_2 x)$?",
        options: ["$[0, 2]$", "$\\left[\\frac{1}{2},\\; 2\\right]$", "$(0, 2]$", "$[-1, 1]$"],
        answer: 1,
        explanation: "We need $x > 0$ and $-1 \\le \\log_2 x \\le 1 \\iff 2^{-1} \\le x \\le 2^1 \\iff x \\in [\\frac{1}{2}, 2]$."
      },
      {
        q: "What is the minimum value of $(\\sin^{-1} x)^2 + (\\cos^{-1} x)^2$ for $x \\in [-1, 1]$?",
        options: ["$0$", "$\\frac{\\pi^2}{4}$", "$\\frac{\\pi^2}{8}$", "$\\frac{\\pi^2}{16}$"],
        answer: 2,
        explanation: "By AM-QM (or completing the square): $\\frac{A^2 + B^2}{2} \\ge \\left(\\frac{A + B}{2}\\right)^2 \\implies A^2 + B^2 \\ge \\frac{(\\pi/2)^2}{2} = \\frac{\\pi^2}{8}$, achieved at $x = \\frac{1}{\\sqrt{2}}$ ($A = B = \\frac{\\pi}{4}$)."
      },
      {
        q: "If $\\cos^{-1} x + \\cos^{-1} y + \\cos^{-1} z = 3\\pi$, what is the value of $xy + yz + zx$?",
        options: ["$-3$", "$0$", "$3$", "$1$"],
        answer: 2,
        explanation: "Since each $\\cos^{-1} \\le \\pi$, their sum hits $3\\pi$ ONLY when $\\cos^{-1} x = \\cos^{-1} y = \\cos^{-1} z = \\pi \\implies x = y = z = -1 \\implies (-1)(-1) + (-1)(-1) + (-1)(-1) = +3$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 35: PRINCIPAL VALUES OF INVERSE TRIGONOMETRIC FUNCTIONS
     ======================================================================== */
  inversePrincipalValues: {
    id: "ch-35-inverse-principal-values",
    grade: "Ch 35",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "35. Principal Values of Inverse Trigonometric Functions",
    subtitle: "Master the Two-Family Principal Branch System, instant evaluation of negative arguments, and exact Sawtooth/Triangle Folding of $\\sin^{-1}(\\sin x)$, $\\cos^{-1}(\\cos x)$, and $\\tan^{-1}(\\tan x)$ for ANY angle!",
    prerequisites: ["Chapters 33–34: Inverse Trig Foundations, Domain & Range"],
    tags: ["Odd vs π-Shift Families", "Principal Value Algorithm", "sin⁻¹(sin x) Sawtooth Formula", "Large-Radian Folding (10 rad)"],
    sandboxType: "trigEqInverseLab",
    intuition: `Why is $\\sin^{-1}(-\\frac{1}{2}) = -\\frac{\\pi}{6}$ (Quadrant IV), whereas $\\cos^{-1}(-\\frac{1}{2}) = +\\frac{2\\pi}{3}$ (Quadrant II)? Because in Quadrant IV cosine is *still positive* ($\\cos(-\\frac{\\pi}{6}) = +\\frac{\\sqrt{3}}{2}$), so $\\cos^{-1}$ MUST step into Quadrant II ($[0, \\pi]$) to find negative inputs! Once you split the 6 inverse functions into **two 3-member families**, every single principal value—including tricky folded expressions like $\\sin^{-1}(\\sin 10)$—becomes $100\\%$ mechanical!`,
    theoryHtml: `
      <h3>35.1 The Two-Family System for Computing Principal Values</h3>
      <p>Given $y = f^{-1}(k)$, first find the acute reference angle $\\alpha \\in [0, \\frac{\\pi}{2}]$ such that $f(\\alpha) = |k|$. If $k \\ge 0$, the principal value is **always $+\\alpha$** (Quadrant I)! If $k < 0$, use the two-family rule:</p>
      <div class="math-box">
        <div class="math-box-title">Two-Family Negative-Argument Principal Value Law ($k < 0$, $\\alpha$ acute)</div>
        $$\\textbf{Family A — Odd Q-IV Branch } \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]: \\qquad \\sin^{-1}(-|k|) = -\\alpha, \\quad \\tan^{-1}(-|k|) = -\\alpha, \\quad \\operatorname{cosec}^{-1}(-|k|) = -\\alpha$$
        $$\\textbf{Family B — Q-II } \\pi\\textbf{-Shift Branch } [0, \\pi]: \\qquad \\cos^{-1}(-|k|) = \\pi - \\alpha, \\quad \\cot^{-1}(-|k|) = \\pi - \\alpha, \\quad \\sec^{-1}(-|k|) = \\pi - \\alpha$$
      </div>
      <p><em>Unforgettable Check:</em> Family B outputs are **NEVER negative**! If you ever write a minus sign as the final answer to $\\cos^{-1}(\\cdot)$, $\\cot^{-1}(\\cdot)$, or $\\sec^{-1}(\\cdot)$, stop immediately—it MUST lie in $[0, \\pi]$!</p>

      <h3>35.2 Exact Folding Formulas for $f^{-1}(f(x))$ When $x$ Lies Outside the Principal Branch</h3>
      <p>When $x$ is outside the principal interval, $f^{-1}(f(x)) \\neq x$! Instead, fold $x$ into the principal interval using integer multiples of $\\pi$:</p>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Composite Function</th>
              <th>Piecewise Folding Rule ($n \\in \\mathbb{Z}$)</th>
              <th>Graph Shape</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>$y = \\sin^{-1}(\\sin x)$</strong></td>
              <td>Let $n$ be the integer closest to $\\frac{x}{\\pi}$ (so $x - n\\pi \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$):<br/>• If $n$ is <strong>EVEN</strong>: $y = x - n\\pi$<br/>• If $n$ is <strong>ODD</strong>: $y = n\\pi - x$</td>
              <td>Continuous $2\\pi$-periodic **Triangular Wave** of amplitude $\\frac{\\pi}{2}$, slopes $\\pm 1$</td>
            </tr>
            <tr>
              <td><strong>$y = \\cos^{-1}(\\cos x)$</strong></td>
              <td>• On $[2n\\pi,\\; (2n+1)\\pi]$: $y = x - 2n\\pi$<br/>• On $[(2n-1)\\pi,\\; 2n\\pi]$: $y = 2n\\pi - x$</td>
              <td>Continuous $2\\pi$-periodic **V-Bounce Wave** between $0$ and $\\pi$, slopes $\\pm 1$</td>
            </tr>
            <tr>
              <td><strong>$y = \\tan^{-1}(\\tan x)$</strong></td>
              <td>For $x \\in \\left(n\\pi - \\frac{\\pi}{2},\\; n\\pi + \\frac{\\pi}{2}\\right)$:<br/>$$y = x - n\\pi$$</td>
              <td>Discontinuous $\\pi$-periodic **Rising Sawtooth** of slope $+1$ with jumps at $(2n+1)\\frac{\\pi}{2}$</td>
            </tr>
            <tr>
              <td><strong>$y = \\cot^{-1}(\\cot x)$</strong></td>
              <td>For $x \\in (n\\pi,\\; (n+1)\\pi)$:<br/>$$y = x - n\\pi$$</td>
              <td>Discontinuous $\\pi$-periodic **Rising Sawtooth** on $(0, \\pi)$ with jumps at $n\\pi$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>35.3 Fast Trick for Integer Radian Inputs ($\\sin^{-1}(\\sin 5)$, $\\cos^{-1}(\\cos 12)$, $\\tan^{-1}(\\tan 10)$)</h3>
      <p>Memorize $\\pi \\approx 3.1416$, $\\frac{\\pi}{2} \\approx 1.57$, $2\\pi \\approx 6.283$, $3\\pi \\approx 9.425$, $4\\pi \\approx 12.566$! Locate which multiple $n\\pi$ sits closest to your integer (within $\\pm 1.57$), and apply the table above in 3 seconds!</p>
    `,
    pitfalls: [
      "Writing $\\cot^{-1}(-1) = -\\frac{\\pi}{4}$: WRONG! $\\cot^{-1}$ belongs to Family B $(0, \\pi)$, so $\\cot^{-1}(-1) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$! (Meanwhile $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$ belongs to Family A!)",
      "Writing $\\sin^{-1}(\\sin 5) = 5 - \\pi$: Check the range! $5 - \\pi \\approx 5 - 3.14 = 1.86 > 1.57 = \\frac{\\pi}{2}$ (OUTSIDE $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$!). The closest multiple of $\\pi$ to $5$ is $2\\pi \\approx 6.283$ ($n = 2$ even!), giving $5 - 2\\pi \\approx -1.283 \\in [-1.57, 1.57]$ ✓!"
    ],
    examples: [
      {
        q: "Example 1: Find the exact principal value of $\\tan^{-1}(\\sqrt{3}) - \\sec^{-1}(-2) + \\operatorname{cosec}^{-1}\\!\\left(-\\frac{2}{\\sqrt{3}}\\right)$.",
        sol: "Evaluate each term by its family: (1) $\\tan^{-1}(\\sqrt{3}) = \\frac{\\pi}{3}$. (2) $\\sec^{-1}(-2)$ is Family B ($[0,\\pi]$) with $\\alpha = \\frac{\\pi}{3} \\implies \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. (3) $\\operatorname{cosec}^{-1}(-\\frac{2}{\\sqrt{3}})$ is Family A ($[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$) with $\\alpha = \\frac{\\pi}{3} \\implies -\\frac{\\pi}{3}$. Combine: $\\frac{\\pi}{3} - \\frac{2\\pi}{3} + \\left(-\\frac{\\pi}{3}\\right) = -\\frac{2\\pi}{3}$."
      },
      {
        q: "Example 2: Find the exact principal values of $\\sin^{-1}(\\sin 10)$, $\\cos^{-1}(\\cos 10)$, and $\\tan^{-1}(\\tan 10)$.",
        sol: "Locate $10$ relative to multiples of $\\pi$: $3\\pi \\approx 9.425$, so $10 - 3\\pi \\approx +0.575 \\in (-1.57, 1.57)$! Thus the nearest multiple is $3\\pi$ ($n = 3$, ODD!). (a) For $\\sin^{-1}(\\sin 10)$ ($n=3$ odd): $3\\pi - 10 \\approx -0.575 \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. (b) For $\\cos^{-1}(\\cos 10)$, since $10 \\in [3\\pi, 4\\pi]$: $4\\pi - 10 \\approx 2.566 \\in [0, \\pi]$. (c) For $\\tan^{-1}(\\tan 10)$, since $10 \\in (3\\pi - \\frac{\\pi}{2}, 3\\pi + \\frac{\\pi}{2})$: $10 - 3\\pi \\approx +0.575 \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$!"
      },
      {
        q: "Example 3: Evaluate $\\cos^{-1}\\!\\left(\\sin\\left(-\\frac{\\pi}{7}\\right)\\right)$.",
        sol: "Convert inner $\\sin$ to $\\cos$ using $\\sin\\theta = \\cos\\!\\left(\\frac{\\pi}{2} - \\theta\\right)$: $\\sin\\!\\left(-\\frac{\\pi}{7}\\right) = \\cos\\!\\left(\\frac{\\pi}{2} + \\frac{\\pi}{7}\\right) = \\cos\\!\\left(\\frac{9\\pi}{14}\\right)$. Check range: $0 \\le \\frac{9\\pi}{14} \\le \\pi$ ✓! Thus $\\cos^{-1}\\!\\left(\\cos\\frac{9\\pi}{14}\\right) = \\frac{9\\pi}{14}$."
      }
    ],
    quiz: [
      {
        q: "What is the principal value of $\\cot^{-1}\\!\\left(-\\frac{1}{\\sqrt{3}}\\right)$?",
        options: ["$-\\frac{\\pi}{3}$", "$\\frac{2\\pi}{3}$", "$\\frac{\\pi}{3}$", "$\\frac{5\\pi}{6}$"],
        answer: 1,
        explanation: "Reference angle $\\alpha = \\frac{\\pi}{3}$ (since $\\cot\\frac{\\pi}{3} = \\frac{1}{\\sqrt{3}}$). Because $\\cot^{-1} \\in (0, \\pi)$ (Family B), $\\cot^{-1}(-\\frac{1}{\\sqrt{3}}) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$."
      },
      {
        q: "What is the exact value of $\\sin^{-1}(\\sin 4)$ (where $4$ is in radians)?",
        options: ["$4$", "$4 - \\pi$", "$\\pi - 4$", "$2\\pi - 4$"],
        answer: 2,
        explanation: "Closest multiple of $\\pi$ to $4$ is $1\\pi \\approx 3.1416$ ($n = 1$ ODD, since $4 - \\pi \\approx 0.858 < 1.57$). For odd $n = 1$, $\\sin^{-1}(\\sin 4) = \\pi - 4 \\approx -0.858 \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$!"
      },
      {
        q: "Evaluate $\\tan^{-1}\\!\\left(\\tan\\frac{7\\pi}{6}\\right)$.",
        options: ["$\\frac{7\\pi}{6}$", "$\\frac{\\pi}{6}$", "$-\\frac{\\pi}{6}$", "$\\frac{5\\pi}{6}$"],
        answer: 1,
        explanation: "Subtract $1\\pi$: $\\frac{7\\pi}{6} - \\pi = \\frac{\\pi}{6} \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, so $\\tan^{-1}(\\tan\\frac{7\\pi}{6}) = \\frac{\\pi}{6}$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 36: PROPERTIES OF INVERSE TRIGONOMETRIC FUNCTIONS
     ======================================================================== */
  inverseProperties: {
    id: "ch-36-inverse-properties",
    grade: "Ch 36",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "36. Properties of Inverse Trigonometric Functions",
    subtitle: "Ultra-detailed proofs & applications of all 7 Inverse Property Families: Reciprocals, Co-Functions, Inter-Conversion Triangle, Piecewise Addition ($\\tan^{-1}, \\sin^{-1}, \\cos^{-1}$), Double/Triple Formulas, Substitutions & Telescoping Series!",
    prerequisites: ["Chapters 33–35: Inverse Trig, Domain/Range & Principal Values"],
    tags: ["All 7 Property Groups", "sin⁻¹x ± sin⁻¹y & tan⁻¹x ± tan⁻¹y", "2 tan⁻¹x & 3 sin⁻¹x", "Telescoping ∑ tan⁻¹ Series"],
    sandboxType: "inverseMasterLab",
    intuition: `Every compound, double, and triple-angle identity from Chapters 22–24 has a twin **Inverse Trigonometric Property**—with one thrilling twist: **angle-range bookkeeping**! Whenever two principal angles add up to cross $\\frac{\\pi}{2}$, the output must be adjusted by $\\pm\\pi$ to land safely back inside the principal branch. Even better, $\\tan^{-1} A - \\tan^{-1} B = \\tan^{-1}\\!\\left(\\frac{A-B}{1+AB}\\right)$ unlocks magical **infinite telescoping series**!`,
    theoryHtml: `
      <h3>36.1 Reciprocal, Co-Function & Triangle Inter-Conversion Properties</h3>
      <div class="math-box">
        <div class="math-box-title">Reciprocal, Complementary & Right-Triangle Laws</div>
        $$\\sin^{-1}\\!\\left(\\frac{1}{x}\\right) = \\operatorname{cosec}^{-1}x \\;(|x|\\ge 1), \\qquad \\cos^{-1}\\!\\left(\\frac{1}{x}\\right) = \\sec^{-1}x \\;(|x|\\ge 1)$$
        $$\\tan^{-1}\\!\\left(\\frac{1}{x}\\right) = \\begin{cases} \\cot^{-1}x, & x > 0 \\\\ \\cot^{-1}x - \\pi, & x < 0 \\end{cases} \\qquad \\Big(\\text{Notice for } x < 0:\\; \\tan^{-1}(1/x) \\in (-\\tfrac{\\pi}{2},0) \\text{ while } \\cot^{-1}x \\in (\\tfrac{\\pi}{2},\\pi)!\\Big)$$
        $$\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2} \\;(|x|\\le 1), \\qquad \\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2} \\;(x\\in\\mathbb{R}), \\qquad \\sec^{-1}x + \\operatorname{cosec}^{-1}x = \\frac{\\pi}{2} \\;(|x|\\ge 1)$$
        $$\\text{For } x > 0:\\quad \\sin^{-1}\\!\\left(\\frac{p}{h}\\right) = \\cos^{-1}\\!\\left(\\frac{b}{h}\\right) = \\tan^{-1}\\!\\left(\\frac{p}{b}\\right) \\quad \\text{where } p^2 + b^2 = h^2$$
      </div>

      <h3>36.2 Complete Piecewise Addition & Subtraction Properties</h3>
      <div class="math-box">
        <div class="math-box-title">Addition & Subtraction of $\\tan^{-1}$, $\\sin^{-1}$, and $\\cos^{-1}$</div>
        $$\\tan^{-1}x + \\tan^{-1}y = \\begin{cases} \\tan^{-1}\\!\\left(\\dfrac{x+y}{1-xy}\\right), & xy < 1 \\\\[6pt] \\pi + \\tan^{-1}\\!\\left(\\dfrac{x+y}{1-xy}\\right), & x > 0,\\; y > 0,\\; xy > 1 \\\\[6pt] -\\pi + \\tan^{-1}\\!\\left(\\dfrac{x+y}{1-xy}\\right), & x < 0,\\; y < 0,\\; xy > 1 \\end{cases}$$
        $$\\tan^{-1}x - \\tan^{-1}y = \\tan^{-1}\\!\\left(\\frac{x - y}{1 + xy}\\right) \\qquad \\text{for ALL } x, y \\ge 0 \\;(\\text{more generally whenever } xy > -1!)$$
        $$\\text{For } x, y \\ge 0:\\quad \\sin^{-1}x + \\sin^{-1}y = \\begin{cases} \\sin^{-1}\\!\\left(x\\sqrt{1-y^2} + y\\sqrt{1-x^2}\\right), & x^2 + y^2 \\le 1 \\\\ \\pi - \\sin^{-1}\\!\\left(x\\sqrt{1-y^2} + y\\sqrt{1-x^2}\\right), & x^2 + y^2 > 1 \\end{cases}$$
        $$\\text{For } x, y \\ge 0:\\quad \\cos^{-1}x + \\cos^{-1}y = \\cos^{-1}\\!\\left(xy - \\sqrt{1-x^2}\\sqrt{1-y^2}\\right); \\quad \\cos^{-1}x - \\cos^{-1}y = \\cos^{-1}\\!\\left(xy + \\sqrt{1-x^2}\\sqrt{1-y^2}\\right)\\;(x \\le y)$$
      </div>

      <h3>36.3 Double & Triple Inverse Trigonometric Identities (With Exact Valid Intervals!)</h3>
      <div class="math-box">
        <div class="math-box-title">Multiple-Angle Inverse Formulas</div>
        $$2\\tan^{-1}x = \\begin{cases} \\sin^{-1}\\!\\left(\\dfrac{2x}{1+x^2}\\right), & |x| \\le 1 \\\\ \\pi - \\sin^{-1}\\!\\left(\\dfrac{2x}{1+x^2}\\right), & x > 1 \\\\ -\\pi - \\sin^{-1}\\!\\left(\\dfrac{2x}{1+x^2}\\right), & x < -1 \\end{cases} \\qquad 2\\tan^{-1}x = \\begin{cases} \\cos^{-1}\\!\\left(\\dfrac{1-x^2}{1+x^2}\\right), & x \\ge 0 \\\\ -\\cos^{-1}\\!\\left(\\dfrac{1-x^2}{1+x^2}\\right), & x < 0 \\end{cases}$$
        $$3\\sin^{-1}x = \\sin^{-1}(3x - 4x^3) \\;\\text{for } |x| \\le \\frac{1}{2}, \\qquad 3\\cos^{-1}x = \\cos^{-1}(4x^3 - 3x) \\;\\text{for } x \\in \\left[\\frac{1}{2}, 1\\right]$$
        $$3\\tan^{-1}x = \\tan^{-1}\\!\\left(\\frac{3x - x^3}{1 - 3x^2}\\right) \\;\\text{for } |x| < \\frac{1}{\\sqrt{3}}$$
      </div>

      <h3>36.4 Telescoping Inverse Tangent Series Blueprint</h3>
      <p>To sum $\\sum_{r=1}^n \\tan^{-1}(\\text{fraction})$, rewrite the fraction into the pattern $\\frac{A_r - A_{r-1}}{1 + A_r A_{r-1}}$ (always isolate **$1 +$** in the denominator FIRST!):</p>
      <div class="math-box">
        <div class="math-box-title">Telescoping $\\tan^{-1}$ Method ($A_r A_{r-1} > -1$)</div>
        $$\\sum_{r=1}^{n} \\tan^{-1}\\!\\left(\\frac{A_r - A_{r-1}}{1 + A_r A_{r-1}}\\right) = \\sum_{r=1}^{n}\\big(\\tan^{-1}A_r - \\tan^{-1}A_{r-1}\\big) = \\tan^{-1}A_n - \\tan^{-1}A_0$$
      </div>
    `,
    pitfalls: [
      "Writing $\\tan^{-1}(1/x) = \\cot^{-1} x$ when $x < 0$: Test $x = -1$! $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$, whereas $\\cot^{-1}(-1) = +\\frac{3\\pi}{4}$—they differ by $\\pi$!",
      "Using $\\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right) = 2\\tan^{-1} x$ when $x > 1$: Test $x = \\sqrt{3}$! $2\\tan^{-1}\\sqrt{3} = \\frac{2\\pi}{3} \\notin [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, so $\\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right) = \\pi - 2\\tan^{-1} x = \\frac{\\pi}{3}$ when $x > 1$!"
    ],
    examples: [
      {
        q: "Example 1: Prove $\\sin^{-1}\\!\\left(\\frac{3}{5}\\right) + \\sin^{-1}\\!\\left(\\frac{8}{17}\\right) = \\cos^{-1}\\!\\left(\\frac{36}{85}\\right)$.",
        sol: "Let $A = \\sin^{-1}\\frac{3}{5}$ and $B = \\sin^{-1}\\frac{8}{17}$ ($A, B \\in (0, \\frac{\\pi}{2})$). By right triangles, $\\cos A = \\frac{4}{5}$ and $\\cos B = \\frac{15}{17}$. Check $\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B = \\left(\\frac{4}{5}\\right)\\left(\\frac{15}{17}\\right) - \\left(\\frac{3}{5}\\right)\\left(\\frac{8}{17}\\right) = \\frac{60 - 24}{85} = \\frac{36}{85} > 0$. Since $A + B \\in (0, \\pi)$, $A + B = \\cos^{-1}\\!\\left(\\frac{36}{85}\\right)$!"
      },
      {
        q: "Example 2 (Telescoping Infinite Series): Find the exact sum $S_\\infty = \\sum_{r=1}^{\\infty} \\tan^{-1}\\!\\left(\\frac{1}{1 + r + r^2}\\right)$.",
        sol: "Isolate $1 +$ in the denominator: $1 + r + r^2 = 1 + r(r + 1)$, and rewrite numerator $1 = (r + 1) - r$! Thus the $r$-th term is $\\tan^{-1}\\!\\left(\\frac{(r+1) - r}{1 + (r+1)r}\\right) = \\tan^{-1}(r + 1) - \\tan^{-1}(r)$ (valid since $(r+1)r > 0 > -1$). Partial sum $S_n = (\\tan^{-1}2 - \\tan^{-1}1) + (\\tan^{-1}3 - \\tan^{-1}2) + \\cdots + (\\tan^{-1}(n+1) - \\tan^{-1}n) = \\tan^{-1}(n + 1) - \\frac{\\pi}{4}$. Taking $n \\to \\infty$: $\\tan^{-1}(\\infty) - \\frac{\\pi}{4} = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$!"
      },
      {
        q: "Example 3: Simplify $\\tan^{-1}\\!\\left(\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$ for $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$.",
        sol: "Divide numerator and denominator inside by $\\cos x$: $\\frac{1 - \\tan x}{1 + \\tan x} = \\tan\\!\\left(\\frac{\\pi}{4} - x\\right)$. Check principal range! Since $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$, we have $-\\frac{\\pi}{2} < \\frac{\\pi}{4} - x < \\frac{\\pi}{2}$—strictly inside $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$! Hence the expression simplifies cleanly to $\\frac{\\pi}{4} - x$."
      }
    ],
    quiz: [
      {
        q: "Evaluate $4\\tan^{-1}\\!\\left(\\frac{1}{5}\\right) - \\tan^{-1}\\!\\left(\\frac{1}{239}\\right)$ (Machin's famous $\\pi$ formula!).",
        options: ["$\\frac{\\pi}{6}$", "$\\frac{\\pi}{4}$", "$\\frac{\\pi}{2}$", "$\\pi$"],
        answer: 1,
        explanation: "$2\\tan^{-1}\\frac{1}{5} = \\tan^{-1}\\frac{2/5}{24/25} = \\tan^{-1}\\frac{5}{12}$, so $4\\tan^{-1}\\frac{1}{5} = \\tan^{-1}\\frac{10/12}{119/144} = \\tan^{-1}\\frac{120}{119}$. Subtract $\\tan^{-1}\\frac{1}{239}$: $\\tan^{-1}\\frac{120/119 - 1/239}{1 + 120/(119\\cdot 239)} = \\tan^{-1}\\frac{28561}{28561} = \\tan^{-1}(1) = \\frac{\\pi}{4}$!"
      },
      {
        q: "For $x = 2$, what does $\\sin^{-1}\\!\\left(\\frac{2x}{1 + x^2}\\right)$ equal in terms of $\\tan^{-1} 2$?",
        options: ["$2\\tan^{-1} 2$", "$\\pi - 2\\tan^{-1} 2$", "$2\\tan^{-1} 2 - \\pi$", "$\\frac{\\pi}{2} - \\tan^{-1} 2$"],
        answer: 1,
        explanation: "Because $x = 2 > 1$, $2\\tan^{-1} 2 > \\frac{\\pi}{2}$ exceeds $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, so $\\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right) = \\pi - 2\\tan^{-1} 2$."
      },
      {
        q: "Evaluate $\\tan\\!\\left(\\frac{1}{2}\\cos^{-1}\\frac{\\sqrt{5}}{3}\\right)$.",
        options: ["$\\frac{3 - \\sqrt{5}}{2}$", "$\\frac{3 + \\sqrt{5}}{2}$", "$\\frac{2}{3}$", "$\\frac{\\sqrt{5}}{2}$"],
        answer: 0,
        explanation: "Let $\\theta = \\cos^{-1}\\frac{\\sqrt{5}}{3} \\in (0, \\frac{\\pi}{2})$, so $\\cos\\theta = \\frac{\\sqrt{5}}{3}$ and $\\sin\\theta = \\frac{2}{3}$. Then $\\tan\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{1 - \\sqrt{5}/3}{2/3} = \\frac{3 - \\sqrt{5}}{2}$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 37: INVERSE TRIGONOMETRIC IDENTITIES & EQUATIONS
     ======================================================================== */
  inverseIdentitiesAndEquations: {
    id: "ch-37-inverse-identities-equations",
    grade: "Ch 37",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "37. Inverse Trigonometric Identities & Equations",
    subtitle: "Unite Inverse Properties, Conditional 3-Angle Identities, and Algebraic Equation Solving—with foolproof sign & branch checks against extraneous roots!",
    prerequisites: ["Chapters 33–36: Inverse Trig, Domain/Range, Principal Values & Properties"],
    tags: ["Conditional Inverse Identities", "tan⁻¹ Equation Branch Trap", "Co-Function Linear Systems", "Extraneous Root Verification"],
    sandboxType: "inverseMasterLab",
    intuition: `Why does solving $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\frac{\\pi}{4}$ produce quadratic roots $x = \\frac{1}{6}$ and $x = -1$, yet **$x = -1$ is completely FALSE**? Because taking $\\tan$ of both sides only checks that the sum equals $\\frac{\\pi}{4} + n\\pi$—at $x = -1$, the two negative angles actually sum to $-\\frac{3\\pi}{4}$! Mastering **Inverse Trigonometric Identities & Equations** bridges pure algebra with strict principal-value geometry.`,
    theoryHtml: `
      <h3>37.1 Classic Conditional Inverse Trigonometric Identities</h3>
      <p>By setting $A = f^{-1}(x),\\; B = f^{-1}(y),\\; C = f^{-1}(z)$ and applying Chapter 28's conditional triangle transformations, we obtain four celebrated algebraic-trigonometric bridges:</p>
      <div class="math-box">
        <div class="math-box-title">Four Golden 3-Variable Conditional Inverse Identities</div>
        $$1.\\; \\tan^{-1}x + \\tan^{-1}y + \\tan^{-1}z = \\pi \\implies x + y + z = xyz$$
        $$2.\\; \\tan^{-1}x + \\tan^{-1}y + \\tan^{-1}z = \\frac{\\pi}{2} \\implies xy + yz + zx = 1$$
        $$3.\\; \\cos^{-1}x + \\cos^{-1}y + \\cos^{-1}z = \\pi \\implies x^2 + y^2 + z^2 + 2xyz = 1$$
        $$4.\\; \\sin^{-1}x + \\sin^{-1}y + \\sin^{-1}z = \\pi \\implies x\\sqrt{1-x^2} + y\\sqrt{1-y^2} + z\\sqrt{1-z^2} = 2xyz$$
      </div>
      <p><em>Proof of #3 ($\\cos^{-1}x + \\cos^{-1}y + \\cos^{-1}z = \\pi$):</em> Move one term across: $\\cos^{-1}x + \\cos^{-1}y = \\pi - \\cos^{-1}z$. Take $\\cos$ of both sides: $xy - \\sqrt{1-x^2}\\sqrt{1-y^2} = \\cos(\\pi - \\cos^{-1}z) = -z$. Isolate the radical $xy + z = \\sqrt{(1-x^2)(1-y^2)}$ and square both sides: $x^2y^2 + 2xyz + z^2 = 1 - x^2 - y^2 + x^2y^2 \\implies x^2 + y^2 + z^2 + 2xyz = 1$!</p>

      <h3>37.2 Four Systematic Methods for Solving Inverse Trig Equations</h3>
      <ol>
        <li>
          <strong>Method 1 — Co-Function Linear Elimination ($\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$):</strong><br/>
          Whenever an equation contains $\\sin^{-1}x$ and $\\cos^{-1}x$ (or $\\tan^{-1}x$ and $\\cot^{-1}x$), pair it with $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$ to solve for $\\sin^{-1}x$ in one step—then verify $|x| \\le 1$!
        </li>
        <li>
          <strong>Method 2 — Applying $\\tan$, $\\sin$, or $\\cos$ to Both Sides (MANDATORY BACK-SUBSTITUTION!):</strong><br/>
          Because $\\tan(\\theta + \\pi) = \\tan\\theta$, applying $\\tan$ to $\\tan^{-1}u + \\tan^{-1}v = \\alpha$ can introduce roots whose true sum is $\\alpha - \\pi$ or $\\alpha + \\pi$! <strong>Always check $uv < 1$ (and signs of $u, v$) in the original equation!</strong>
        </li>
        <li>
          <strong>Method 3 — Angle Substitution ($\\theta = \\sin^{-1}x \\implies x = \\sin\\theta,\\; \\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$):</strong><br/>
          Converts messy mixed equations like $\\sin^{-1}(1 - x) - 2\\sin^{-1}x = \\frac{\\pi}{2}$ into clean trigonometric equations on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$!
        </li>
        <li>
          <strong>Method 4 — Monotonicity Argument (Proving Uniqueness of a Root!):</strong><br/>
          If $LHS(x)$ is strictly increasing (e.g., $\\sin^{-1}x + \\tan^{-1}x$) and $RHS$ is a constant, the equation can have **at most ONE real root**—spot it by inspection!
        </li>
      </ol>
    `,
    pitfalls: [
      "Keeping $x = -1$ in $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\frac{\\pi}{4}$: At $x = -1$, $\\tan^{-1}(-2) < 0$ and $\\tan^{-1}(-3) < 0$, so their sum is NEGATIVE ($-\\frac{3\\pi}{4} \\neq +\\frac{\\pi}{4}$)! Only $x = \\frac{1}{6}$ (where $2x\\cdot 3x = \\frac{1}{6} < 1$) is valid!",
      "Keeping $x = \\frac{1}{2}$ in $\\sin^{-1}(1 - x) - 2\\sin^{-1}x = \\frac{\\pi}{2}$: Plugging $x = \\frac{1}{2}$ gives $\\sin^{-1}(\\frac{1}{2}) - 2\\sin^{-1}(\\frac{1}{2}) = -\\frac{\\pi}{6} \\neq +\\frac{\\pi}{2}$! Only $x = 0$ works!"
    ],
    examples: [
      {
        q: "Example 1: Solve $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\frac{\\pi}{4}$ completely.",
        sol: "Since RHS $= +\\frac{\\pi}{4} > 0$ and $2x, 3x$ share the same sign, we MUST have $x > 0$ and $(2x)(3x) < 1$ (since if $6x^2 \\ge 1$ with $x > 0$, LHS $\\ge \\frac{\\pi}{2} > \\frac{\\pi}{4}$!). Apply $\\tan^{-1}$ addition: $\\frac{2x + 3x}{1 - 6x^2} = \\tan\\frac{\\pi}{4} = 1 \\implies 6x^2 + 5x - 1 = 0 \\implies (6x - 1)(x + 1) = 0$. Reject $x = -1$ (gives LHS $= -\\frac{3\\pi}{4}$); accept $x = \\frac{1}{6}$ (check: $6x^2 = \\frac{1}{6} < 1$ ✓)!"
      },
      {
        q: "Example 2: Solve $\\sin^{-1}(1 - x) - 2\\sin^{-1}x = \\frac{\\pi}{2}$.",
        sol: "Rearrange: $\\sin^{-1}(1 - x) = \\frac{\\pi}{2} + 2\\sin^{-1}x$. Take $\\sin$ of both sides: $1 - x = \\sin\\!\\left(\\frac{\\pi}{2} + 2\\sin^{-1}x\\right) = \\cos(2\\sin^{-1}x) = 1 - 2\\sin^2(\\sin^{-1}x) = 1 - 2x^2$! Thus $2x^2 - x = 0 \\implies x(2x - 1) = 0 \\implies x = 0$ or $x = \\frac{1}{2}$. Test BOTH in the original equation: For $x = 0$: $\\sin^{-1}(1) - 0 = \\frac{\\pi}{2}$ ✓! For $x = \\frac{1}{2}$: $\\frac{\\pi}{6} - 2(\\frac{\\pi}{6}) = -\\frac{\\pi}{6} \\neq \\frac{\\pi}{2}$ ✗! Unique solution: $x = 0$."
      },
      {
        q: "Example 3: Solve $\\sin^{-1}x - \\cos^{-1}x = \\frac{\\pi}{6}$.",
        sol: "Pair with the identity $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$! Add both equations: $2\\sin^{-1}x = \\frac{\\pi}{6} + \\frac{\\pi}{2} = \\frac{2\\pi}{3} \\implies \\sin^{-1}x = \\frac{\\pi}{3} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}] \\implies x = \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$ (which satisfies $|x| \\le 1$ ✓)."
      }
    ],
    quiz: [
      {
        q: "If $\\tan^{-1}x + \\tan^{-1}y + \\tan^{-1}z = \\frac{\\pi}{2}$, then $xy + yz + zx$ equals:",
        options: ["$0$", "$1$", "$xyz$", "$-1$"],
        answer: 1,
        explanation: "Write $\\tan^{-1}x + \\tan^{-1}y = \\frac{\\pi}{2} - \\tan^{-1}z = \\cot^{-1}z$, take $\\tan$ of both sides: $\\frac{x+y}{1-xy} = \\frac{1}{z} \\implies xz + yz = 1 - xy \\implies xy + yz + zx = 1$."
      },
      {
        q: "How many real solutions does $\\sin^{-1}x + \\tan^{-1}x = \\frac{\\pi}{2}$ have?",
        options: ["$0$", "Exactly $1$", "Exactly $2$", "Infinitely many"],
        answer: 1,
        explanation: "$f(x) = \\sin^{-1}x + \\tan^{-1}x$ is continuous and strictly increasing on $[-1, 1]$, ranging from $f(0) = 0$ up to $f(1) = \\frac{\\pi}{2} + \\frac{\\pi}{4} = \\frac{3\\pi}{4} > \\frac{\\pi}{2}$. By the Intermediate Value Theorem & strict monotonicity, it crosses $\\frac{\\pi}{2}$ at EXACTLY $1$ root ($x = \\sqrt{\\frac{\\sqrt{5}-1}{2}}$)!"
      },
      {
        q: "Solve $\\cos^{-1}x - \\sin^{-1}x = 0$.",
        options: ["$x = 0$", "$x = \\frac{1}{\\sqrt{2}}$", "$x = \\pm\\frac{1}{\\sqrt{2}}$", "$x = 1$"],
        answer: 1,
        explanation: "$\\cos^{-1}x = \\sin^{-1}x$ combined with $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$ gives $\\sin^{-1}x = \\frac{\\pi}{4} \\implies x = +\\frac{1}{\\sqrt{2}}$ ONLY (at $-\\frac{1}{\\sqrt{2}}$, $\\cos^{-1} = \\frac{3\\pi}{4} \\neq -\\frac{\\pi}{4}$!)."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 38: SIMPLIFICATION OF TRIGONOMETRIC & INVERSE EXPRESSIONS
     ======================================================================== */
  simplificationAdvancedInverse: {
    id: "ch-38-simplification-advanced",
    grade: "Ch 38",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "38. Simplification of Trigonometric & Inverse Expressions",
    subtitle: "Multi-angle rational reductions, quadrant-aware half-angle radical collapsing, and the 5 canonical trigonometric substitutions that reduce inverse expressions to linear angles.",
    prerequisites: ["Simplification of Trig Expressions (Ch 12)", "Half-Angle & Sum-to-Product (Ch 25–26)", "Properties of Inverse Trig Functions (Ch 36)"],
    tags: ["Simplification of Trig Expressions", "5 Canonical Substitutions", "Half-Angle Radical Collapse", "Branch-Aware Reduction"],
    sandboxType: "inverseMasterLab",
    intuition: `In Chapter 12, simplifying meant applying $\\sin^2\\theta + \\cos^2\\theta = 1$. At advanced &amp; Calculus level, **Simplification of Trigonometric &amp; Inverse Expressions** unlocks a superpower: turning monstrous square-root fractions like $\\tan^{-1}\\!\\left(\\frac{\\sqrt{1+x^2}-1}{x}\\right)$ into a tiny linear term $\\frac{1}{2}\\tan^{-1}x$ BEFORE you differentiate, integrate, or solve! One right substitution collapses five lines of nested radicals into two lines of clean angle arithmetic.`,
    theoryHtml: `
      <h3>38.1 Multi-Angle Rational Trigonometric Simplification</h3>
      <p>When an expression mixes $\\theta$, $2\\theta$, and $3\\theta$ inside a fraction, follow the <strong>3-Rule Multi-Angle Reduction Engine</strong>:</p>
      <ol>
        <li><strong>Kill Every "$1 \\pm \\cos(2k\\theta)$" Immediately:</strong> Replace $1 + \\cos 2A = 2\\cos^2 A$ and $1 - \\cos 2A = 2\\sin^2 A$. Those "$1$"s exist solely to be annihilated!</li>
        <li><strong>Pair Extreme Angles Around the Middle Angle:</strong> In $\\sin\\theta + \\sin 2\\theta + \\sin 3\\theta$, pair $(\\sin 3\\theta + \\sin\\theta) = 2\\sin 2\\theta\\cos\\theta$ so $\\sin 2\\theta$ factors right out!</li>
        <li><strong>Convert "$1 \\pm \\sin 2A$" Into a Perfect Square:</strong> Since $1 = \\cos^2 A + \\sin^2 A$ and $\\sin 2A = 2\\sin A\\cos A$:
          $$1 \\pm \\sin 2A = (\\cos A \\pm \\sin A)^2 \\implies \\sqrt{1 \\pm \\sin 2A} = |\\cos A \\pm \\sin A|$$
        </li>
      </ol>
      <div class="math-box">
        <div class="math-box-title">Signature Multi-Angle Simplification Templates</div>
        $$\\frac{\\sin\\theta + \\sin 2\\theta}{1 + \\cos\\theta + \\cos 2\\theta} = \\frac{\\sin\\theta(1 + 2\\cos\\theta)}{\\cos\\theta(1 + 2\\cos\\theta)} = \\tan\\theta$$
        $$\\frac{1 - \\cos 2\\theta + \\sin 2\\theta}{1 + \\cos 2\\theta + \\sin 2\\theta} = \\frac{2\\sin^2\\theta + 2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta + 2\\sin\\theta\\cos\\theta} = \\frac{2\\sin\\theta(\\sin\\theta + \\cos\\theta)}{2\\cos\\theta(\\cos\\theta + \\sin\\theta)} = \\tan\\theta$$
        $$\\frac{\\cos A - \\sin A}{\\cos A + \\sin A} = \\frac{1 - \\tan A}{1 + \\tan A} = \\tan\\!\\left(\\frac{\\pi}{4} - A\\right), \\qquad \\frac{\\cos A + \\sin A}{\\cos A - \\sin A} = \\tan\\!\\left(\\frac{\\pi}{4} + A\\right)$$
      </div>

      <h3>38.2 Quadrant-Aware Simplification of Radical Expressions</h3>
      <p>Whenever a square root $\\sqrt{(\\cdot)^2}$ collapses, it produces an <strong>absolute value $|\\cdot|$</strong> whose sign depends on the angle's interval:</p>
      <ul>
        <li>On $A \\in \\left(0, \\frac{\\pi}{4}\\right)$: $\\cos A > \\sin A > 0 \\implies |\\cos A - \\sin A| = \\cos A - \\sin A$.</li>
        <li>On $A \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$: $\\sin A > \\cos A > 0 \\implies |\\cos A - \\sin A| = \\sin A - \\cos A$!</li>
      </ul>
      <p>For example, simplifying $\\cot^{-1}\\!\\left(\\frac{\\sqrt{1+\\sin x} + \\sqrt{1-\\sin x}}{\\sqrt{1+\\sin x} - \\sqrt{1-\\sin x}}\\right)$ for $x \\in \\left(0, \\frac{\\pi}{2}\\right)$:</p>
      <ul>
        <li>Write $\\sqrt{1+\\sin x} = \\cos\\frac{x}{2} + \\sin\\frac{x}{2}$ and $\\sqrt{1-\\sin x} = \\cos\\frac{x}{2} - \\sin\\frac{x}{2}$ (since $\\frac{x}{2} \\in (0, \\frac{\\pi}{4}) \\implies \\cos\\frac{x}{2} > \\sin\\frac{x}{2}$!).</li>
        <li>Numerator $= 2\\cos\\frac{x}{2}$, Denominator $= 2\\sin\\frac{x}{2} \\implies$ Fraction $= \\cot\\frac{x}{2} \\implies \\cot^{-1}(\\cot\\frac{x}{2}) = \\frac{x}{2}$! (Whereas if $x \\in (\\frac{\\pi}{2}, \\pi)$, $\\sin\\frac{x}{2} > \\cos\\frac{x}{2}$, giving $\\cot^{-1}(\\tan\\frac{x}{2}) = \\frac{\\pi}{2} - \\frac{x}{2}$!)</li>
      </ul>

      <h3>38.3 The 5 Canonical Substitutions for Simplifying Inverse Trig Expressions</h3>
      <p>Match the algebraic pattern inside $\\sin^{-1}(\\cdot)$, $\\cos^{-1}(\\cdot)$, or $\\tan^{-1}(\\cdot)$ to eliminate the radical in one step:</p>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Algebraic Radical Pattern</th>
              <th>Canonical Substitution</th>
              <th>Principal Angle Interval</th>
              <th>Pythagorean / Half-Angle Collapse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$\\sqrt{a^2 - x^2}$</td>
              <td>$x = a\\sin\\theta$ (or $a\\cos\\theta$)</td>
              <td>$\\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$</td>
              <td>$\\sqrt{a^2 - a^2\\sin^2\\theta} = a|\\cos\\theta| = a\\cos\\theta$</td>
            </tr>
            <tr>
              <td>$\\sqrt{a^2 + x^2}$ or $a^2 + x^2$</td>
              <td>$x = a\\tan\\theta$</td>
              <td>$\\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$</td>
              <td>$\\sqrt{a^2 + a^2\\tan^2\\theta} = a|\\sec\\theta| = a\\sec\\theta$</td>
            </tr>
            <tr>
              <td>$\\sqrt{x^2 - a^2}$ ($|x| \\ge a$)</td>
              <td>$x = a\\sec\\theta$</td>
              <td>$\\theta \\in [0, \\pi]\\setminus\\{\\frac{\\pi}{2}\\}$</td>
              <td>$\\sqrt{a^2\\sec^2\\theta - a^2} = a|\\tan\\theta|$</td>
            </tr>
            <tr>
              <td>$\\sqrt{\\frac{a - x}{a + x}}$ or $\\sqrt{a \\pm x}$</td>
              <td>$x = a\\cos 2\\theta$ (or $a\\cos\\theta$)</td>
              <td>$2\\theta \\in [0, \\pi] \\Rightarrow \\theta \\in [0, \\frac{\\pi}{2}]$</td>
              <td>$\\sqrt{\\frac{a(1-\\cos 2\\theta)}{a(1+\\cos 2\\theta)}} = \\sqrt{\\tan^2\\theta} = \\tan\\theta$</td>
            </tr>
            <tr>
              <td>$\\tan^{-1}\\!\\left(\\frac{a\\cos x - b\\sin x}{b\\cos x + a\\sin x}\\right)$</td>
              <td>Divide top &amp; bottom by $b\\cos x$</td>
              <td>Check $\\frac{a}{b}\\tan x > -1$</td>
              <td>$\\tan^{-1}\\!\\left(\\frac{\\frac{a}{b} - \\tan x}{1 + \\frac{a}{b}\\tan x}\\right) = \\tan^{-1}\\frac{a}{b} - x$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>38.4 Branch-Checking Protocol After Substitution</h3>
      <p>After simplifying the inner expression to $\\operatorname{trig}(g(\\theta))$, <strong>never cancel $\\operatorname{trig}^{-1}(\\operatorname{trig}(g(\\theta))) = g(\\theta)$ blindly</strong>! Always verify whether $g(\\theta)$ lies inside the principal value branch:</p>
      <ul>
        <li>Example: Simplify $\\tan^{-1}\\!\\left(\\frac{3a^2x - x^3}{a^3 - 3ax^2}\\right)$ for $|x| < \\frac{a}{\\sqrt{3}}$ ($a > 0$). Put $x = a\\tan\\theta$:
          $$|x| < \\frac{a}{\\sqrt{3}} \\iff |\\tan\\theta| < \\frac{1}{\\sqrt{3}} \\iff \\theta \\in \\left(-\\frac{\\pi}{6}, \\frac{\\pi}{6}\\right) \\implies 3\\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)!$$
          Because $3\\theta$ lands strictly inside $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\tan^{-1}(\\tan 3\\theta) = 3\\theta = 3\\tan^{-1}\\!\\left(\\frac{x}{a}\\right)$! (If $\\frac{x}{a} > \\frac{1}{\\sqrt{3}}$, $3\\theta > \\frac{\\pi}{2}$, so it shifts to $3\\tan^{-1}(\\frac{x}{a}) - \\pi$!)</li>
      </ul>
    `,
    pitfalls: [
      "**Dropping $|\\cdot|$ in $\\sqrt{1 - \\sin 2x}$:** Many students write $\\sqrt{1 - \\sin 2x} = \\cos x - \\sin x$ everywhere. For $x = \\frac{\\pi}{3}$ ($60^\\circ$), $\\cos 60^\\circ - \\sin 60^\\circ = \\frac{1 - \\sqrt{3}}{2} < 0$, which CANNOT equal a principal square root! On $(\\frac{\\pi}{4}, \\frac{5\\pi}{4})$, $\\sqrt{1 - \\sin 2x} = \\sin x - \\cos x$.",
      "**Forgetting the $x = 0$ Removable Singularity Check:** In $\\tan^{-1}\\!\\left(\\frac{\\sqrt{1+x^2}-1}{x}\\right)$ ($x \\neq 0$), put $x = \\tan\\theta$ ($\\theta \\neq 0$): $\\frac{\\sec\\theta - 1}{\\tan\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\tan\\frac{\\theta}{2}$. Since $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2}) \\implies \\frac{\\theta}{2} \\in (-\\frac{\\pi}{4}, \\frac{\\pi}{4}) \\subset (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, it simplifies cleanly to $\\frac{1}{2}\\tan^{-1}x$!",
      "**Cancelling $\\sin^{-1}(\\sin 2\\theta) = 2\\theta$ Outside $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$:** In $\\sin^{-1}(2x\\sqrt{1-x^2})$ with $x = \\sin\\theta$: if $x \\in [\\frac{1}{\\sqrt{2}}, 1]$, then $\\theta \\in [\\frac{\\pi}{4}, \\frac{\\pi}{2}] \\implies 2\\theta \\in [\\frac{\\pi}{2}, \\pi]$, so $\\sin^{-1}(\\sin 2\\theta) = \\pi - 2\\theta = \\pi - 2\\sin^{-1}x$, NOT $2\\sin^{-1}x$!"
    ],
    examples: [
      {
        q: "Example 1: Simplify $\\tan^{-1}\\!\\left(\\frac{\\sqrt{1+x^2} - 1}{x}\\right)$ for all $x \\neq 0$.",
        sol: "Put $x = \\tan\\theta$ with $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2}) \\setminus \\{0\\}$. Since $\\sec\\theta > 0$ on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\sqrt{1 + \\tan^2\\theta} = \\sec\\theta$. Thus $\\frac{\\sec\\theta - 1}{\\tan\\theta} = \\frac{\\frac{1}{\\cos\\theta} - 1}{\\frac{\\sin\\theta}{\\cos\\theta}} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{2\\sin^2(\\theta/2)}{2\\sin(\\theta/2)\\cos(\\theta/2)} = \\tan\\!\\left(\\frac{\\theta}{2}\\right)$. Since $\\frac{\\theta}{2} \\in (-\\frac{\\pi}{4}, \\frac{\\pi}{4}) \\subset (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\tan^{-1}\\!\\left(\\tan\\frac{\\theta}{2}\\right) = \\frac{\\theta}{2} = \\frac{1}{2}\\tan^{-1}x$!"
      },
      {
        q: "Example 2: Simplify $\\tan^{-1}\\!\\left(\\sqrt{\\frac{1 - \\cos x}{1 + \\cos x}}\\right)$ for $x \\in (-\\pi, \\pi)$.",
        sol: "Apply half-angle identities: $\\sqrt{\\frac{2\\sin^2(x/2)}{2\\cos^2(x/2)}} = \\sqrt{\\tan^2\\!\\left(\\frac{x}{2}\\right)} = \\left|\\tan\\frac{x}{2}\\right|$! Since $x \\in (-\\pi, \\pi) \\implies \\frac{x}{2} \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$: for $x \\in [0, \\pi)$, $|\\tan\\frac{x}{2}| = \\tan\\frac{x}{2} \\implies \\tan^{-1}(\\tan\\frac{x}{2}) = \\frac{x}{2}$; for $x \\in (-\\pi, 0)$, $|\\tan\\frac{x}{2}| = -\\tan\\frac{x}{2} = \\tan(-\\frac{x}{2}) \\implies -\\frac{x}{2}$. Combined compact answer: $\\frac{|x|}{2}$!"
      },
      {
        q: "Example 3: Simplify $\\frac{\\sin A + \\sin 3A + \\sin 5A}{\\cos A + \\cos 3A + \\cos 5A}$.",
        sol: "Pair extreme angles $5A$ and $A$ around the middle angle $3A$: Numerator $= (\\sin 5A + \\sin A) + \\sin 3A = 2\\sin 3A\\cos 2A + \\sin 3A = \\sin 3A(2\\cos 2A + 1)$. Denominator $= (\\cos 5A + \\cos A) + \\cos 3A = 2\\cos 3A\\cos 2A + \\cos 3A = \\cos 3A(2\\cos 2A + 1)$. Cancel $(2\\cos 2A + 1)$ to obtain $\\frac{\\sin 3A}{\\cos 3A} = \\tan 3A$!"
      },
      {
        q: "Example 4: Simplify $\\tan^{-1}\\!\\left(\\frac{x}{\\sqrt{a^2 - x^2}}\\right)$ for $|x| < a$ ($a > 0$).",
        sol: "Pattern $\\sqrt{a^2 - x^2} \\implies$ put $x = a\\sin\\theta$ with $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. Then $\\cos\\theta > 0$, so $\\sqrt{a^2 - a^2\\sin^2\\theta} = a\\cos\\theta$. The fraction becomes $\\frac{a\\sin\\theta}{a\\cos\\theta} = \\tan\\theta$. Since $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, $\\tan^{-1}(\\tan\\theta) = \\theta = \\sin^{-1}\\!\\left(\\frac{x}{a}\\right)$!"
      }
    ],
    quiz: [
      {
        q: "For $x \\in (0, \\pi)$, what does $\\tan^{-1}\\!\\left(\\sqrt{\\frac{1 - \\cos x}{1 + \\cos x}}\\right)$ simplify to?",
        options: ["$x$", "$\\frac{x}{2}$", "$2x$", "$\\frac{\\pi - x}{2}$"],
        answer: 1,
        explanation: "On $x \\in (0, \\pi)$, $\\frac{x}{2} \\in (0, \\frac{\\pi}{2})$ where $\\tan\\frac{x}{2} > 0$, so $\\sqrt{\\frac{2\\sin^2(x/2)}{2\\cos^2(x/2)}} = \\tan\\frac{x}{2}$, and $\\tan^{-1}(\\tan\\frac{x}{2}) = \\frac{x}{2}$."
      },
      {
        q: "Which substitution simplifies $\\operatorname{sec}^{-1}\\!\\left(\\frac{1}{2x^2 - 1}\\right)$ on $x \\in \\left(\\frac{1}{\\sqrt{2}}, 1\\right)$ cleanly?",
        options: ["$x = \\tan\\theta$", "$x = \\cos\\theta$", "$x = \\sec\\theta$", "$x = \\cot\\theta$"],
        answer: 1,
        explanation: "Recognize $2\\cos^2\\theta - 1 = \\cos 2\\theta$! Putting $x = \\cos\\theta$ with $\\theta \\in (0, \\frac{\\pi}{4})$ gives $2\\theta \\in (0, \\frac{\\pi}{2})$, so $\\sec^{-1}(\\frac{1}{\\cos 2\\theta}) = \\sec^{-1}(\\sec 2\\theta) = 2\\theta = 2\\cos^{-1}x$."
      },
      {
        q: "Simplify $\\tan^{-1}\\!\\left(\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$ for $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$.",
        options: ["$\\frac{\\pi}{4} + x$", "$\\frac{\\pi}{4} - x$", "$x - \\frac{\\pi}{4}$", "$2x$"],
        answer: 1,
        explanation: "Divide numerator and denominator by $\\cos x$: $\\frac{1 - \\tan x}{1 + \\tan x} = \\tan\\!\\left(\\frac{\\pi}{4} - x\\right)$. Since $-\\frac{\\pi}{4} < x < \\frac{3\\pi}{4} \\implies -\\frac{\\pi}{2} < \\frac{\\pi}{4} - x < \\frac{\\pi}{2}$, $\\tan^{-1}\\!\\left(\\tan(\\frac{\\pi}{4} - x)\\right) = \\frac{\\pi}{4} - x$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 39: PROOF OF TRIGONOMETRIC & INVERSE IDENTITIES
     ======================================================================== */
  proofIdentitiesAdvancedInverse: {
    id: "ch-39-proof-identities-advanced",
    grade: "Ch 39",
    tierId: "tier-6",
    tierColor: "#a855f7",
    title: "39. Proof of Trigonometric & Inverse Identities",
    subtitle: "The 8-strategy advanced proof architecture: compound & multiple-angle proofs, conditional A+B+C=π proofs, mathematical induction cascades, and range-bounded proofs of inverse trigonometric identities.",
    prerequisites: ["Proving Identities I (Ch 13)", "Transformations & Conditional Laws (Ch 28)", "Inverse Properties & Identities (Ch 36–37)"],
    tags: ["Proof of Trigonometric Identities", "Range-Bounded Inverse Proof", "Mathematical Induction", "Conditional Proofs"],
    sandboxType: "inverseMasterLab",
    intuition: `In Chapter 13, proving an identity meant turning $\\sec$ and $\\tan$ into $\\sin$ and $\\cos$. At the advanced &amp; Olympiad level, **Proof of Trigonometric &amp; Inverse Identities** adds a crucial logical dimension: when proving an **Inverse Trigonometric Identity** $\\text{LHS} = \\text{RHS}$, taking $\\cos$ or $\\tan$ of both sides is **NOT sufficient on its own**—because periodic functions can agree even when angles differ by $2\\pi$! You must pair **Trig Equality** with **Principal Range Bounding** so bijectivity locks $\\text{LHS} \\equiv \\text{RHS}$ with $100\\%$ mathematical rigor!`,
    theoryHtml: `
      <h3>39.1 The 8-Strategy Master Architecture for Proving Trigonometric Identities</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Proof Strategy</th>
              <th>When to Deploy It</th>
              <th>Canonical Anchor Move</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1</strong></td>
              <td><strong>Conjugate &amp; Componendo–Dividendo</strong></td>
              <td>$\\frac{1 \\pm \\sin\\theta}{\\cos\\theta}$ or $\\frac{\\sin A + \\sin B}{\\sin A - \\sin B}$</td>
              <td>Multiply by conjugate OR apply $\\frac{N+D}{N-D}$ to isolate $\\frac{\\tan((A+B)/2)}{\\tan((A-B)/2)}$</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td><strong>Split-Angle Trick</strong></td>
              <td>Mixed angles like $2A = (A+B) + (A-B)$ or $3x - 2x = x$</td>
              <td>Expand $\\tan 3x = \\tan(2x + x) \\implies \\tan 3x - \\tan 2x - \\tan x = \\tan 3x\\tan 2x\\tan x$!</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td><strong>4-Term Sum-to-Product Pairing</strong></td>
              <td>$\\sin A + \\sin B + \\sin C - \\sin(A+B+C)$</td>
              <td>Pair $(\\sin A + \\sin B)$ and $(\\sin C - \\sin(A+B+C))$ to expose $\\sin\\frac{A+B}{2}$</td>
            </tr>
            <tr>
              <td><strong>4</strong></td>
              <td><strong>Power-Lowering Linearization</strong></td>
              <td>$\\cos^2 x + \\cos^2(x + \\frac{2\\pi}{3}) + \\cos^2(x - \\frac{2\\pi}{3}) = \\frac{3}{2}$</td>
              <td>Replace $\\cos^2\\phi = \\frac{1 + \\cos 2\\phi}{2}$ so the oscillating cosines cancel to $0$!</td>
            </tr>
            <tr>
              <td><strong>5</strong></td>
              <td><strong>Conditional $A + B + C = \\pi$ Substitution</strong></td>
              <td>Triangle identities for $\\sin 2A + \\sin 2B + \\sin 2C$</td>
              <td>Substitute $C = \\pi - (A+B)$ at the common-factor step to unlock $4\\sin A\\sin B\\sin C$</td>
            </tr>
            <tr>
              <td><strong>6</strong></td>
              <td><strong>Telescoping Multiplication / Difference</strong></td>
              <td>Products $\\prod \\cos(2^k\\theta)$ or sums $\\sum \\csc(2^k\\theta)$</td>
              <td>Multiply by $2\\sin\\theta$, or split $\\csc 2A = \\cot A - \\cot 2A$ so inner terms telescope!</td>
            </tr>
            <tr>
              <td><strong>7</strong></td>
              <td><strong>Mathematical Induction ($P(n)$)</strong></td>
              <td>$n$-term identities ($\\sum_{k=1}^n \\sin k\\theta$, De Moivre)</td>
              <td>Verify $n=1$, assume $P(m)$, add $(m+1)$-th term and collapse via Sum-to-Product</td>
            </tr>
            <tr>
              <td><strong>8</strong></td>
              <td><strong>Range-Bounded Inverse Proof</strong></td>
              <td>Proving $\\alpha + \\beta = \\gamma$ where $\\alpha,\\beta,\\gamma$ are inverse trig values</td>
              <td>Prove BOTH $\\operatorname{trig}(\\alpha+\\beta) = \\operatorname{trig}(\\gamma)$ AND $\\alpha+\\beta,\\, \\gamma \\in$ SAME monotonic interval!</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>39.2 The "Split-Angle Cross-Multiply" Proof Gem</h3>
      <p>One of the sleekest one-line proofs in all of trigonometry proves $\\tan 3x - \\tan 2x - \\tan x = \\tan 3x\\tan 2x\\tan x$:</p>
      <div class="math-box">
        <div class="math-box-title">Proof via $3x = 2x + x$</div>
        $$\\tan 3x = \\tan(2x + x) = \\frac{\\tan 2x + \\tan x}{1 - \\tan 2x\\tan x}$$
        $$\\implies \\tan 3x(1 - \\tan 2x\\tan x) = \\tan 2x + \\tan x$$
        $$\\implies \\tan 3x - \\tan 2x - \\tan x = \\tan 3x\\tan 2x\\tan x \\quad \\blacksquare$$
      </div>
      <p>Notice the exact twin for cotangents ($\\cot x - \\cot 2x = \\operatorname{cosec} 2x$ and $\\cot A\\cot B + \\cot B\\cot C + \\cot C\\cot A = 1$ when $A+B+C=\\pi$)!</p>

      <h3>39.3 The Formal Range-Bounded Proof Protocol for Inverse Trigonometric Identities</h3>
      <p>Suppose you must prove an inverse trigonometric identity such as:</p>
      $$\\cos^{-1}\\!\\left(\\frac{4}{5}\\right) + \\cos^{-1}\\!\\left(\\frac{12}{13}\\right) = \\cos^{-1}\\!\\left(\\frac{33}{65}\\right)$$
      <p>Follow the <strong>4-Step Rigorous Inverse Proof Protocol</strong>:</p>
      <ol>
        <li><strong>Name the Principal Angles &amp; State Their Exact Bounds:</strong> Let $\\alpha = \\cos^{-1}\\frac{4}{5}$ and $\\beta = \\cos^{-1}\\frac{12}{13}$. Because $\\frac{4}{5}, \\frac{12}{13} \\in (0, 1)$, BOTH $\\alpha, \\beta \\in \\left(0, \\frac{\\pi}{2}\\right)$! (In fact, since $\\frac{4}{5} > \\frac{1}{\\sqrt{2}}$ and $\\frac{12}{13} > \\frac{1}{\\sqrt{2}}$, $\\alpha, \\beta \\in (0, \\frac{\\pi}{4})$, so $\\alpha + \\beta \\in (0, \\frac{\\pi}{2}) \\subset [0, \\pi]$!)</li>
        <li><strong>Compute Remaining Ratios Using Quadrant Signs:</strong> Since $\\alpha, \\beta \\in (0, \\frac{\\pi}{2})$, $\\sin\\alpha = +\\sqrt{1 - \\frac{16}{25}} = \\frac{3}{5}$ and $\\sin\\beta = +\\sqrt{1 - \\frac{144}{169}} = \\frac{5}{13}$.</li>
        <li><strong>Apply the Compound-Angle Formula:</strong>
          $$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta = \\frac{4}{5}\\cdot\\frac{12}{13} - \\frac{3}{5}\\cdot\\frac{5}{13} = \\frac{48 - 15}{65} = \\frac{33}{65}$$
        </li>
        <li><strong>Invoke Bijectivity on the Principal Interval $[0, \\pi]$:</strong> Because $\\alpha + \\beta \\in (0, \\pi) \\subset [0, \\pi]$—where $\\cos$ is <em>strictly one-to-one</em>—taking $\\cos^{-1}$ gives $\\alpha + \\beta = \\cos^{-1}\\!\\left(\\frac{33}{65}\\right)$! $\\blacksquare$</li>
      </ol>

      <h3>39.4 Proving Piecewise Inverse Identities via Derivative Zero-Test (Calculus Bridge)</h3>
      <p>For functional inverse identities on a connected interval $I$—such as proving $2\\tan^{-1}x + \\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right) = \\pi\\,\\operatorname{sgn}(x)$ for $|x| > 1$—you can also prove them in 2 lines using differentiation (previewing Chapter 40):</p>
      <ul>
        <li>For $x > 1$, let $f(x) = 2\\tan^{-1}x + \\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right)$. On $x > 1$, $1 - x^2 < 0 \\implies |1 - x^2| = x^2 - 1$, so $f'(x) = \\frac{2}{1+x^2} + \\frac{2(1-x^2)}{(1+x^2)|1-x^2|} = \\frac{2}{1+x^2} - \\frac{2}{1+x^2} = 0$!</li>
        <li>Thus $f(x)$ is constant on $(1, \\infty)$; taking $x \\to 1^+$ gives $f(1) = 2(\\frac{\\pi}{4}) + \\frac{\\pi}{2} = \\pi$! $\\blacksquare$</li>
      </ul>
    `,
    pitfalls: [
      "**Skipping Step 4 (Range Bounding) in Inverse Proofs:** Suppose someone computes $\\tan(\\alpha + \\beta) = 1$ and immediately concludes $\\alpha + \\beta = \\frac{\\pi}{4}$. FLAW! If $\\alpha = \\tan^{-1}(2)$ and $\\beta = \\tan^{-1}(3)$, then $\\tan(\\alpha + \\beta) = \\frac{2+3}{1-6} = -1$, and because $\\alpha, \\beta \\in (\\frac{\\pi}{4}, \\frac{\\pi}{2}) \\implies \\alpha + \\beta \\in (\\frac{\\pi}{2}, \\pi)$, the sum is $\\frac{3\\pi}{4}$, NOT $-\\frac{\\pi}{4}$! Always bound $\\alpha + \\beta$ first!",
      "**Working on Both Sides Symmetrically Without Reversibility:** Never square both sides of a to-be-proved identity ($\\text{LHS} = \\text{RHS} \\not\\Leftarrow \\text{LHS}^2 = \\text{RHS}^2$) unless you explicitly prove both sides have the SAME sign! Always transform $\\text{LHS} \\to \\cdots \\to \\text{RHS}$ (or reduce $\\text{LHS}$ and $\\text{RHS}$ independently to the same expression $M$).",
      "**Ignoring Undefined Angles in Trig Identities:** An identity like $\\tan 3x - \\tan 2x - \\tan x = \\tan 3x\\tan 2x\\tan x$ holds for all $x$ in the domain where $\\cos x, \\cos 2x, \\cos 3x \\neq 0$."
    ],
    examples: [
      {
        q: "Example 1: Prove $\\cos^2 x + \\cos^2\\!\\left(x + \\frac{\\pi}{3}\\right) + \\cos^2\\!\\left(x - \\frac{\\pi}{3}\\right) = \\frac{3}{2}$.",
        sol: "Apply Power-Lowering $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$ to each term: $\\text{LHS} = \\frac{1}{2}\\!\\left[3 + \\cos 2x + \\cos\\!\\left(2x + \\frac{2\\pi}{3}\\right) + \\cos\\!\\left(2x - \\frac{2\\pi}{3}\\right)\\right]$. Apply Sum-to-Product to the last two cosines: $\\cos(2x + \\frac{2\\pi}{3}) + \\cos(2x - \\frac{2\\pi}{3}) = 2\\cos 2x\\cos\\frac{2\\pi}{3} = 2\\cos 2x\\left(-\\frac{1}{2}\\right) = -\\cos 2x$. Substitute back: $\\text{LHS} = \\frac{1}{2}[3 + \\cos 2x - \\cos 2x] = \\frac{3}{2} = \\text{RHS}$! $\\blacksquare$"
      },
      {
        q: "Example 2: Prove $\\sin^{-1}\\!\\left(\\frac{3}{5}\\right) - \\sin^{-1}\\!\\left(\\frac{8}{17}\\right) = \\cos^{-1}\\!\\left(\\frac{84}{85}\\right)$.",
        sol: "Let $\\alpha = \\sin^{-1}\\frac{3}{5}$ and $\\beta = \\sin^{-1}\\frac{8}{17}$. Since $\\frac{3}{5} = \\frac{51}{85} > \\frac{40}{85} = \\frac{8}{17} > 0$, we have $0 < \\beta < \\alpha < \\frac{\\pi}{2}$, which guarantees $\\alpha - \\beta \\in \\left(0, \\frac{\\pi}{2}\\right) \\subset [0, \\pi]$! Also $\\cos\\alpha = \\frac{4}{5}$ and $\\cos\\beta = \\frac{15}{17}$. Compute $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta = \\frac{4}{5}\\cdot\\frac{15}{17} + \\frac{3}{5}\\cdot\\frac{8}{17} = \\frac{60 + 24}{85} = \\frac{84}{85}$. Since $\\alpha - \\beta \\in [0, \\pi]$, $\\alpha - \\beta = \\cos^{-1}\\!\\left(\\frac{84}{85}\\right)$! $\\blacksquare$"
      },
      {
        q: "Example 3: Prove $4\\tan^{-1}\\!\\left(\\frac{1}{5}\\right) - \\tan^{-1}\\!\\left(\\frac{1}{239}\\right) = \\frac{\\pi}{4}$ (Machin's Famous $\\pi$ Identity, 1706!).",
        sol: "Step 1: Since $\\frac{1}{5} < 1$, $2\\tan^{-1}\\frac{1}{5} = \\tan^{-1}\\!\\left(\\frac{2/5}{1 - 1/25}\\right) = \\tan^{-1}\\!\\left(\\frac{10}{24}\\right) = \\tan^{-1}\\!\\left(\\frac{5}{12}\\right)$. Step 2: Double again! Since $\\frac{5}{12} < 1$, $4\\tan^{-1}\\frac{1}{5} = 2\\tan^{-1}\\frac{5}{12} = \\tan^{-1}\\!\\left(\\frac{10/12}{1 - 25/144}\\right) = \\tan^{-1}\\!\\left(\\frac{120}{119}\\right)$. Step 3: Subtract $\\tan^{-1}\\frac{1}{239}$: since $\\frac{120}{119}\\cdot\\frac{1}{239} > -1$, $\\tan^{-1}\\frac{120}{119} - \\tan^{-1}\\frac{1}{239} = \\tan^{-1}\\!\\left(\\frac{\\frac{120}{119} - \\frac{1}{239}}{1 + \\frac{120}{119\\cdot 239}}\\right) = \\tan^{-1}\\!\\left(\\frac{28680 - 119}{28441 + 120}\\right) = \\tan^{-1}\\!\\left(\\frac{28561}{28561}\\right) = \\tan^{-1}(1) = \\frac{\\pi}{4}$! $\\blacksquare$"
      },
      {
        q: "Example 4: Prove the telescoping sum $\\operatorname{cosec} 2x + \\operatorname{cosec} 4x + \\operatorname{cosec} 8x = \\cot x - \\cot 8x$.",
        sol: "First prove the telescoping lemma $\\cot A - \\cot 2A = \\frac{\\cos A}{\\sin A} - \\frac{\\cos 2A}{\\sin 2A} = \\frac{\\sin 2A\\cos A - \\cos 2A\\sin A}{\\sin A\\sin 2A} = \\frac{\\sin(2A - A)}{\\sin A\\sin 2A} = \\frac{1}{\\sin 2A} = \\operatorname{cosec} 2A$! Apply for $A = x, 2x, 4x$ and add: $(\\cot x - \\cot 2x) + (\\cot 2x - \\cot 4x) + (\\cot 4x - \\cot 8x) = \\cot x - \\cot 8x = \\text{RHS}$! $\\blacksquare$"
      }
    ],
    quiz: [
      {
        q: "Why must a rigorous proof of $\\sin^{-1}a + \\sin^{-1}b = \\sin^{-1}c$ verify that $\\sin^{-1}a + \\sin^{-1}b \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ in addition to computing $\\sin(\\alpha + \\beta) = c$?",
        options: [
          "Because $\\sin\\theta$ is undefined outside $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$",
          "Because $\\sin$ is NOT one-to-one on $[-\\pi, \\pi]$: if $\\alpha + \\beta > \\frac{\\pi}{2}$, $\\sin^{-1}(\\sin(\\alpha+\\beta))$ equals $\\pi - (\\alpha+\\beta)$, NOT $\\alpha + \\beta$!",
          "Because $\\cos^2\\theta + \\sin^2\\theta = 1$ fails in Quadrant II",
          "Range checking is optional and never affects the formula"
        ],
        answer: 1,
        explanation: "Two angles $\\theta$ and $\\pi - \\theta$ have the exact same sine! Only when $\\alpha + \\beta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ does $\\sin(\\alpha+\\beta) = c$ guarantee $\\alpha + \\beta = \\sin^{-1}c$."
      },
      {
        q: "Using $3x = 2x + x$, the expression $\\tan 3x - \\tan 2x - \\tan x$ is identically equal to:",
        options: ["$0$", "$1$", "$\\tan 3x\\tan 2x\\tan x$", "$\\cot 3x\\cot 2x\\cot x$"],
        answer: 2,
        explanation: "Cross-multiplying $\\tan 3x = \\frac{\\tan 2x + \\tan x}{1 - \\tan 2x\\tan x}$ gives $\\tan 3x - \\tan 3x\\tan 2x\\tan x = \\tan 2x + \\tan x \\iff \\tan 3x - \\tan 2x - \\tan x = \\tan 3x\\tan 2x\\tan x$."
      },
      {
        q: "In Machin's identity $4\\tan^{-1}\\!\\left(\\frac{1}{5}\\right) - \\tan^{-1}\\!\\left(\\frac{1}{239}\\right)$, what does $2\\tan^{-1}\\!\\left(\\frac{1}{5}\\right)$ simplify to in Step 1?",
        options: ["$\\tan^{-1}\\!\\left(\\frac{2}{5}\\right)$", "$\\tan^{-1}\\!\\left(\\frac{5}{12}\\right)$", "$\\tan^{-1}\\!\\left(\\frac{12}{13}\\right)$", "$\\frac{\\pi}{6}$"],
        answer: 1,
        explanation: "$2\\tan^{-1}(\\frac{1}{5}) = \\tan^{-1}\\!\\left(\\frac{2(1/5)}{1 - 1/25}\\right) = \\tan^{-1}\\!\\left(\\frac{2/5}{24/25}\\right) = \\tan^{-1}\\!\\left(\\frac{5}{12}\\right)$."
      }
    ]
  }
};
