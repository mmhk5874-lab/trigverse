/* ==========================================================================
   TrigVerse Ultra-Detailed Core — Circular Functions,
   Any Angle, Quadrant Signs, Domain/Range, Periodicity, Graphs,
   Compound Angles & Double-Angle Formulas
   ========================================================================== */

window.TRIG_CLASS11A_MODULES = [
  /* ========================================================================
     CHAPTER 16: TRIGONOMETRIC FUNCTIONS (CIRCULAR FUNCTIONS ON THE UNIT CIRCLE)
     ======================================================================== */
  {
    id: "ch-16-trig-functions",
    grade: "Ch 16",
    tierId: "tier-4",
    tierColor: "#ea580c",
    title: "16. Trigonometric Functions",
    subtitle: "Transition from static right-triangle ratios ($0^\\circ < \\theta < 90^\\circ$) to true real-valued Circular Functions $f: \\mathbb{R} \\to \\mathbb{R}$ via the Unit Circle Wrapping Function.",
    prerequisites: ["Chapter 3: Radian Measure", "Chapters 4–5: All 6 Trig Ratios"],
    tags: ["Unit Circle x²+y²=1", "Wrapping Function W(t)", "Even & Odd Parity", "Zeros & Singularities"],
    sandboxType: "unitCircle",
    intuition: `In right-triangle geometry, $\\sin\\theta$ was a ratio of sides inside a right triangle—which trapped $\\theta$ strictly between $0^\\circ$ and $90^\\circ$! How could $\\sin(500)$ or $\\cos(-3.7)$ possibly make sense when no right triangle has a $-212^\\circ$ corner? The breakthrough of modern mathematics is the **Unit Circle Wrapping Machine**: take an infinite number line $\\mathbb{R}$, pin $0$ to $(1, 0)$ on the circle $x^2 + y^2 = 1$, and wrap the positive half counter-clockwise and the negative half clockwise. Every real number $t \\in \\mathbb{R}$ lands on a unique point $P(\\cos t, \\sin t)$—turning trigonometry into true **real-variable functions** powering waves, physics, and calculus!`,
    theoryHtml: `
      <h3>16.1 From Triangle Ratios to Real-Valued Circular Functions</h3>
      <p>Draw a <strong>Unit Circle</strong> of radius $r = 1$ centered at the origin $O(0,0)$, whose equation is $x^2 + y^2 = 1$. For <em>any real number</em> $t \\in \\mathbb{R}$, travel an arc of directed length $t$ starting from $A(1,0)$ (counter-clockwise if $t > 0$, clockwise if $t < 0$) to reach a unique terminal point $P(x, y)$ on the circle. Notice the central angle $\\angle AOP$ equals $t\\text{ radians}$ because $l = r\\theta = 1 \\cdot t = t$!</p>
      <div class="math-box">
        <div class="math-box-title">Universal Unit Circle Definitions ($t \\in \\mathbb{R}$)</div>
        $$\\cos t = x, \\qquad \\sin t = y, \\qquad \\tan t = \\frac{y}{x} \\;(x \\neq 0)$$
        $$\\operatorname{cosec} t = \\frac{1}{y} \\;(y \\neq 0), \\qquad \\sec t = \\frac{1}{x} \\;(x \\neq 0), \\qquad \\cot t = \\frac{x}{y} \\;(y \\neq 0)$$
      </div>
      <p>Because $P(x, y)$ lies on $x^2 + y^2 = 1$, we immediately obtain $\\cos^2 t + \\sin^2 t = 1$ for <strong>every real number $t \\in (-\\infty, \\infty)$</strong>—not just acute angles!</p>

      <h3>16.2 Why Acute Angles Agree with SOH-CAH-TOA</h3>
      <p>When $0 < t < \\frac{\\pi}{2}$, drop a perpendicular $PM \\perp OX$ from $P(x, y)$ to the positive $x$-axis. In right $\\triangle OMP$, Base $= x$, Perpendicular $= y$, and Hypotenuse $= OP = 1$. Thus $\\sin t = \\frac{O}{H} = \\frac{y}{1} = y$ and $\\cos t = \\frac{A}{H} = \\frac{x}{1} = x$. The circular definition seamlessly generalizes right-triangle trigonometry!</p>

      <h3>16.3 Exact Zeros & Undefined Points (Singularities)</h3>
      <p>Where do $x = \\cos t$ or $y = \\sin t$ hit zero on the unit circle ($n \\in \\mathbb{Z}$)?</p>
      <ul>
        <li><strong>$y = \\sin t = 0$:</strong> Happens on the $x$-axis at $(1,0)$ and $(-1,0)$, i.e., $t = n\\pi = 0, \\pm\\pi, \\pm 2\\pi, \\dots$ Therefore $\\operatorname{cosec} t = \\frac{1}{\\sin t}$ and $\\cot t = \\frac{\\cos t}{\\sin t}$ are <strong>undefined at $t = n\\pi$</strong>.</li>
        <li><strong>$x = \\cos t = 0$:</strong> Happens on the $y$-axis at $(0,1)$ and $(0,-1)$, i.e., $t = (2n + 1)\\frac{\\pi}{2} = \\pm\\frac{\\pi}{2}, \\pm\\frac{3\\pi}{2}, \\dots$ Therefore $\\tan t = \\frac{\\sin t}{\\cos t}$ and $\\sec t = \\frac{1}{\\cos t}$ are <strong>undefined at odd multiples of $\\frac{\\pi}{2}$</strong>.</li>
      </ul>

      <h3>16.4 Even & Odd Symmetry (Parity of Trigonometric Functions)</h3>
      <p>Rotating by $+t$ (counter-clockwise) and $-t$ (clockwise) produces mirror-image points across the $x$-axis: if $+t$ lands at $P(x, y)$, then $-t$ lands at $P'(x, -y)$! Comparing coordinates instantly proves:</p>
      <div class="math-box">
        <div class="math-box-title">Parity Laws (Reflection Symmetry)</div>
        $$\\textbf{Even Functions } f(-t) = f(t): \\qquad \\cos(-t) = \\cos t, \\qquad \\sec(-t) = \\sec t$$
        $$\\textbf{Odd Functions } f(-t) = -f(t): \\qquad \\sin(-t) = -\\sin t, \\quad \\operatorname{cosec}(-t) = -\\operatorname{cosec} t, \\quad \\tan(-t) = -\\tan t, \\quad \\cot(-t) = -\\cot t$$
      </div>
      <p><em>Memory Rule:</em> Only <strong>Cosine</strong> and its reciprocal <strong>Secant</strong> ("the $x$-coordinate twins") swallow negative signs; all other four functions spit the minus sign out in front!</p>
    `,
    pitfalls: [
      "Writing $\\cos(-60^\\circ) = -\\cos 60^\\circ$: WRONG! Cosine is an EVEN function ($x$-coordinate stays positive on the right side of the origin), so $\\cos(-60^\\circ) = +\\cos 60^\\circ = +\\frac{1}{2}$!",
      "Confusing $\\sin 1$ with $\\sin 1^\\circ$: When no degree symbol is written, the input to a trigonometric function is ALWAYS a pure real number (radians): $\\sin 1 = \\sin(1\\text{ rad}) \\approx \\sin(57.3^\\circ) \\approx 0.8415$, whereas $\\sin 1^\\circ \\approx 0.0175$!"
    ],
    examples: [
      {
        q: "Example 1: The terminal point on the unit circle for a real number $t$ is $P\\!\\left(-\\frac{5}{13}, \\frac{12}{13}\\right)$. Find all 6 trigonometric functions of $t$.",
        sol: "Check unit circle: $(-\\frac{5}{13})^2 + (\\frac{12}{13})^2 = \\frac{25+144}{169} = 1$. Directly read $x$ and $y$: $\\cos t = -\\frac{5}{13}$, $\\sin t = \\frac{12}{13}$, $\\tan t = \\frac{y}{x} = -\\frac{12}{5}$, $\\sec t = -\\frac{13}{5}$, $\\operatorname{cosec} t = \\frac{13}{12}$, $\\cot t = -\\frac{5}{12}$."
      },
      {
        q: "Example 2: Determine whether $f(x) = x\\sin x + \\cos x$ is an even function, an odd function, or neither.",
        sol: "Evaluate $f(-x) = (-x)\\sin(-x) + \\cos(-x) = (-x)(-\\sin x) + \\cos x = x\\sin x + \\cos x = f(x)$. Since $f(-x) = f(x)$ for all $x \\in \\mathbb{R}$, $f(x)$ is an **Even Function**!"
      },
      {
        q: "Example 3: Simplify $\\frac{\\sin(-\\theta)\\tan(-\\theta)\\sec(-\\theta)}{\\cos(-\\theta)\\cot(\\theta)\\operatorname{cosec}(-\\theta)}$.",
        sol: "Apply parity rules: Numerator $= (-\\sin\\theta)(-\\tan\\theta)(\\sec\\theta) = +\\sin\\theta\\tan\\theta\\sec\\theta$. Denominator $= (\\cos\\theta)(\\cot\\theta)(-\\operatorname{cosec}\\theta) = -\\cos\\theta \\cdot \\frac{\\cos\\theta}{\\sin\\theta} \\cdot \\frac{1}{\\sin\\theta}$. Converting all to $\\sin, \\cos$: $\\frac{\\sin\\theta(\\frac{\\sin\\theta}{\\cos\\theta})(\\frac{1}{\\cos\\theta})}{-\\frac{\\cos^2\\theta}{\\sin^2\\theta}} = -\\frac{\\sin^4\\theta}{\\cos^4\\theta} = -\\tan^4\\theta$."
      }
    ],
    quiz: [
      {
        q: "For which real values of $t$ ($n \\in \\mathbb{Z}$) is $\\tan t$ undefined?",
        options: ["$t = n\\pi$", "$t = 2n\\pi$", "$t = (2n + 1)\\frac{\\pi}{2}$", "$t = \\frac{n\\pi}{4}$"],
        answer: 2,
        explanation: "$\\tan t = \\frac{\\sin t}{\\cos t}$ is undefined wherever $\\cos t = 0$, which occurs at odd multiples of $\\frac{\\pi}{2}$: $t = (2n + 1)\\frac{\\pi}{2}$."
      },
      {
        q: "Which pair consists ONLY of even trigonometric functions?",
        options: ["$\\sin t$ and $\\operatorname{cosec} t$", "$\\cos t$ and $\\sec t$", "$\\tan t$ and $\\cot t$", "$\\sin t$ and $\\cos t$"],
        answer: 1,
        explanation: "Because $P(x, y)$ and $P'(x, -y)$ share the same $x$-coordinate, $\\cos(-t) = \\cos t$ and $\\sec(-t) = \\sec t$ are the only two basic even trig functions."
      },
      {
        q: "Which number is larger: $\\sin 2$ or $\\sin 2^\\circ$?",
        options: ["$\\sin 2^\\circ$", "$\\sin 2$", "They are equal", "$\\sin 2$ is negative"],
        answer: 1,
        explanation: "$2\\text{ rad} \\approx 114.6^\\circ$ (in Q-II with reference angle $\\approx 65.4^\\circ$), so $\\sin 2 \\approx 0.9093$, whereas $\\sin 2^\\circ \\approx 0.0349$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 17: TRIGONOMETRIC FUNCTIONS OF ANY ANGLE (REFERENCE & ALLIED ANGLES)
     ======================================================================== */
  {
    id: "ch-17-any-angle",
    grade: "Ch 17",
    tierId: "tier-4",
    tierColor: "#ea580c",
    title: "17. Trigonometric Functions of Any Angle",
    subtitle: "Evaluate trig functions at ANY angle—$135^\\circ$, $-1200^\\circ$, or $\\frac{19\\pi}{6}$—using general coordinate radius $r$, Reference Angles, and the Allied Angle Engine ($n\\cdot 90^\\circ \\pm \\theta$).",
    prerequisites: ["Chapter 2: Coterminal Angles", "Chapter 16: Circular Functions"],
    tags: ["P(x,y) & r = √(x²+y²)", "Reference Angle α", "Allied Angles n·90°±θ", "Reduction Formulas"],
    sandboxType: "unitCircle",
    intuition: `How do you compute $\\cos(1020^\\circ)$ or $\\tan\\!\\left(-\\frac{17\\pi}{3}\\right)$ in 5 seconds in your head? Every angle in the universe—no matter how huge or negative—is just a disguised version of an acute **Reference Angle** $\\alpha \\in [0^\\circ, 90^\\circ]$ measured to the nearest $x$-axis! Combine that with the **Even/Odd $90^\\circ$-Multiple Allied Angle Rule**, and all $36$ reduction formulas collapse into one effortless two-step algorithm.`,
    theoryHtml: `
      <h3>17.1 General Coordinate Definition for Any Point $P(x, y) \\neq (0, 0)$</h3>
      <p>Let the terminal ray of angle $\\theta$ in standard position pass through <em>any</em> point $P(x, y)$ at distance $r = \\sqrt{x^2 + y^2} > 0$ from the origin (note $r$ is <strong>always strictly positive</strong>!):</p>
      <div class="math-box">
        <div class="math-box-title">Any-Angle Coordinate Ratios ($r = \\sqrt{x^2 + y^2} > 0$)</div>
        $$\\sin\\theta = \\frac{y}{r}, \\qquad \\cos\\theta = \\frac{x}{r}, \\qquad \\tan\\theta = \\frac{y}{x} \\;(x \\neq 0)$$
        $$\\operatorname{cosec}\\theta = \\frac{r}{y} \\;(y \\neq 0), \\qquad \\sec\\theta = \\frac{r}{x} \\;(x \\neq 0), \\qquad \\cot\\theta = \\frac{x}{y} \\;(y \\neq 0)$$
      </div>

      <h3>17.2 Reference Angle ($\\theta_{\\text{ref}}$) Method</h3>
      <p>The <strong>Reference Angle</strong> $\\alpha$ of $\\theta$ is the <em>smallest positive acute angle</em> formed between the terminal side of $\\theta$ and the <strong>horizontal $x$-axis</strong> (NEVER the $y$-axis!). Once $\\theta$ is reduced modulo $360^\\circ$ into $[0^\\circ, 360^\\circ)$:</p>
      <ul>
        <li><strong>Quadrant I ($0^\\circ < \\theta < 90^\\circ$):</strong> $\\alpha = \\theta$</li>
        <li><strong>Quadrant II ($90^\\circ < \\theta < 180^\\circ$):</strong> $\\alpha = 180^\\circ - \\theta$ &nbsp;(or $\\pi - \\theta$)</li>
        <li><strong>Quadrant III ($180^\\circ < \\theta < 270^\\circ$):</strong> $\\alpha = \\theta - 180^\\circ$ &nbsp;(or $\\theta - \\pi$)</li>
        <li><strong>Quadrant IV ($270^\\circ < \\theta < 360^\\circ$):</strong> $\\alpha = 360^\\circ - \\theta$ &nbsp;(or $2\\pi - \\theta$)</li>
      </ul>
      <p><strong>Reduction Theorem:</strong> $|\\operatorname{trig}(\\theta)| = \\operatorname{trig}(\\alpha)$, with the $+$ or $-$ prefix determined by the quadrant of $\\theta$!</p>

      <h3>17.3 The Master Allied Angle Engine ($n \\cdot 90^\\circ \\pm \\theta$)</h3>
      <p>Two angles are called <strong>Allied Angles</strong> if their sum or difference is a multiple of $90^\\circ$ ($\\frac{\\pi}{2}$). To simplify ANY $\\operatorname{trig}(n \\cdot 90^\\circ \\pm \\theta)$ (treating $\\theta$ as a small acute angle for quadrant testing):</p>
      <div class="math-box">
        <div class="math-box-title">Two-Step Allied Angle Algorithm</div>
        <ol style="margin:0;padding-left:1.25rem;text-align:left;">
          <li><strong>Step 1 — Check Parity of $n$ (Function Name):</strong>
            <br/>• If $n$ is <strong>EVEN</strong> ($180^\\circ \\pm \\theta,\\; 360^\\circ \\pm \\theta$, i.e. $\\pi \\pm \\theta,\\; 2\\pi \\pm \\theta$): <strong>KEEP the same function</strong> ($\\sin \\to \\sin$, $\\cos \\to \\cos$, $\\tan \\to \\tan$).
            <br/>• If $n$ is <strong>ODD</strong> ($90^\\circ \\pm \\theta,\\; 270^\\circ \\pm \\theta$, i.e. $\\frac{\\pi}{2} \\pm \\theta,\\; \\frac{3\\pi}{2} \\pm \\theta$): <strong>SWITCH to Co-Function</strong> ($\\sin \\leftrightarrow \\cos$, $\\tan \\leftrightarrow \\cot$, $\\sec \\leftrightarrow \\operatorname{cosec}$).
          </li>
          <li><strong>Step 2 — Check Quadrant Sign of the ORIGINAL Function:</strong>
            <br/>Find which quadrant $(n \\cdot 90^\\circ \\pm \\theta)$ falls in (assuming $0^\\circ < \\theta < 90^\\circ$) and prefix the sign ($+$ or $-$) of the <strong>ORIGINAL left-hand function</strong> in that quadrant!
          </li>
        </ol>
      </div>

      <h3>17.4 Complete Allied Angles Summary Table</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Allied Angle (Quadrant)</th>
              <th>$\\sin(\\cdot)$</th>
              <th>$\\cos(\\cdot)$</th>
              <th>$\\tan(\\cdot)$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>$90^\\circ - \\theta$ (Q-I)</strong></td><td>$+\\cos\\theta$</td><td>$+\\sin\\theta$</td><td>$+\\cot\\theta$</td></tr>
            <tr><td><strong>$90^\\circ + \\theta$ (Q-II)</strong></td><td>$+\\cos\\theta$</td><td>$-\\sin\\theta$</td><td>$-\\cot\\theta$</td></tr>
            <tr><td><strong>$180^\\circ - \\theta$ (Q-II)</strong></td><td>$+\\sin\\theta$</td><td>$-\\cos\\theta$</td><td>$-\\tan\\theta$</td></tr>
            <tr><td><strong>$180^\\circ + \\theta$ (Q-III)</strong></td><td>$-\\sin\\theta$</td><td>$-\\cos\\theta$</td><td>$+\\tan\\theta$</td></tr>
            <tr><td><strong>$270^\\circ - \\theta$ (Q-III)</strong></td><td>$-\\cos\\theta$</td><td>$-\\sin\\theta$</td><td>$+\\cot\\theta$</td></tr>
            <tr><td><strong>$270^\\circ + \\theta$ (Q-IV)</strong></td><td>$-\\cos\\theta$</td><td>$+\\sin\\theta$</td><td>$-\\cot\\theta$</td></tr>
            <tr><td><strong>$360^\\circ - \\theta$ (Q-IV)</strong></td><td>$-\\sin\\theta$</td><td>$+\\cos\\theta$</td><td>$-\\tan\\theta$</td></tr>
          </tbody>
        </table>
      </div>
    `,
    pitfalls: [
      "Measuring the reference angle to the $y$-axis: For $210^\\circ$, the reference angle is $210^\\circ - 180^\\circ = 30^\\circ$ (to the $x$-axis), NEVER $270^\\circ - 210^\\circ = 60^\\circ$!",
      "Using the sign of the NEW co-function in allied angles: In $\\sin(90^\\circ + \\theta) = +\\cos\\theta$, the sign is $+$ because the ORIGINAL function $\\sin$ is positive in Q-II! Meanwhile $\\cos(90^\\circ + \\theta) = -\\sin\\theta$ because $\\cos$ is negative in Q-II!"
    ],
    examples: [
      {
        q: "Example 1: The terminal side of $\\theta$ passes through $P(-8, -15)$. Find $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$.",
        sol: "First compute positive radius $r = \\sqrt{(-8)^2 + (-15)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$. Then $\\sin\\theta = \\frac{y}{r} = -\\frac{15}{17}$, $\\cos\\theta = \\frac{x}{r} = -\\frac{8}{17}$, and $\\tan\\theta = \\frac{y}{x} = \\frac{-15}{-8} = +\\frac{15}{8}$."
      },
      {
        q: "Example 2: Find the exact values of (a) $\\operatorname{cosec}(-1410^\\circ)$ and (b) $\\tan\\!\\left(\\frac{19\\pi}{3}\\right)$.",
        sol: "(a) Add $4 \\times 360^\\circ = 1440^\\circ$: $-1410^\\circ + 1440^\\circ = +30^\\circ$, so $\\operatorname{cosec}(-1410^\\circ) = \\operatorname{cosec} 30^\\circ = 2$. (b) $\\frac{19\\pi}{3} = 6\\pi + \\frac{\\pi}{3} = 3(2\\pi) + \\frac{\\pi}{3}$, so $\\tan\\!\\left(\\frac{19\\pi}{3}\\right) = \\tan\\frac{\\pi}{3} = \\sqrt{3}$."
      },
      {
        q: "Example 3: Simplify $\\frac{\\cos(90^\\circ + \\theta)\\sec(-\\theta)\\tan(180^\\circ - \\theta)}{\\sec(360^\\circ - \\theta)\\sin(180^\\circ + \\theta)\\cot(90^\\circ - \\theta)}$.",
        sol: "Reduce piece by piece: $\\cos(90^\\circ+\\theta) = -\\sin\\theta$; $\\sec(-\\theta) = +\\sec\\theta$; $\\tan(180^\\circ-\\theta) = -\\tan\\theta$. Denominator: $\\sec(360^\\circ-\\theta) = +\\sec\\theta$; $\\sin(180^\\circ+\\theta) = -\\sin\\theta$; $\\cot(90^\\circ-\\theta) = +\\tan\\theta$. Substituting: $\\frac{(-\\sin\\theta)(\\sec\\theta)(-\\tan\\theta)}{(\\sec\\theta)(-\\sin\\theta)(\\tan\\theta)} = \\frac{+\\sin\\theta\\sec\\theta\\tan\\theta}{-\\sin\\theta\\sec\\theta\\tan\\theta} = -1$!"
      }
    ],
    quiz: [
      {
        q: "What is the exact value of $\\cos(570^\\circ)$?",
        options: ["$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$-\\frac{1}{2}$", "$\\frac{1}{2}$"],
        answer: 1,
        explanation: "$570^\\circ - 360^\\circ = 210^\\circ = 180^\\circ + 30^\\circ$ (Q-III, where $\\cos < 0$), so $\\cos 570^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$."
      },
      {
        q: "Simplify $\\tan(270^\\circ - \\theta)$.",
        options: ["$-\\cot\\theta$", "$+\\cot\\theta$", "$-\\tan\\theta$", "$+\\tan\\theta$"],
        answer: 1,
        explanation: "$270^\\circ = 3 \\times 90^\\circ$ ($n=3$ odd $\\implies$ switch $\\tan \\to \\cot$), and $270^\\circ - \\theta$ is in Q-III where $\\tan$ is POSITIVE $\\implies +\\cot\\theta$."
      },
      {
        q: "Evaluate $\\cos 1^\\circ + \\cos 2^\\circ + \\cos 3^\\circ + \\cdots + \\cos 180^\\circ$.",
        options: ["$0$", "$1$", "$-1$", "$90$"],
        answer: 2,
        explanation: "Since $\\cos(180^\\circ - \\theta) = -\\cos\\theta$, pairs $(\\cos 1^\\circ + \\cos 179^\\circ) = 0, \\dots, (\\cos 89^\\circ + \\cos 91^\\circ) = 0$, and $\\cos 90^\\circ = 0$, leaving ONLY $\\cos 180^\\circ = -1$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 18: SIGNS OF TRIGONOMETRIC FUNCTIONS IN QUADRANTS
     ======================================================================== */
  {
    id: "ch-18-quadrant-signs",
    grade: "Ch 18",
    tierId: "tier-4",
    tierColor: "#ea580c",
    title: "18. Signs of Trigonometric Functions in Quadrants",
    subtitle: "Geometric coordinate proof of the ASTC Quadrant Law, behavior on Quadrantal Boundaries, increasing/decreasing trends across Q-I to Q-IV, and multi-condition quadrant puzzles.",
    prerequisites: ["Chapter 2: Standard Position & Quadrants", "Chapter 17: Any-Angle Ratios"],
    tags: ["ASTC Quadrant Proof", "Quadrantal Boundaries", "Monotonicity by Quadrant", "Sign Logic Puzzles"],
    sandboxType: "identityExplorer",
    intuition: `Why is Tangent positive in Quadrant III when both $x$ and $y$ are negative? Because **negative divided by negative is positive** ($\\tan\\theta = \\frac{y}{x} = \\frac{-}{-} = +$), whereas $r = \\sqrt{x^2+y^2}$ is **always positive**, keeping $\\sin\\theta = \\frac{y}{r} < 0$ and $\\cos\\theta = \\frac{x}{r} < 0$! You never have to guess signs when you remember $\\cos = x$, $\\sin = y$, and $\\tan = y/x$.`,
    theoryHtml: `
      <h3>18.1 Geometric Proof of the ASTC Quadrant Rule</h3>
      <p>Since distance $r = \\sqrt{x^2 + y^2} > 0$ in every quadrant, the signs of all 6 trigonometric functions depend purely on the signs of coordinates $(x, y)$:</p>
      <ul>
        <li><strong>Quadrant I ($0 < \\theta < \\frac{\\pi}{2}$):</strong> $x > 0,\\; y > 0 \\implies$ <strong>A</strong>LL 6 functions ($\\sin, \\cos, \\tan, \\operatorname{cosec}, \\sec, \\cot$) are <strong>Positive ($+$)</strong>.</li>
        <li><strong>Quadrant II ($\\frac{\\pi}{2} < \\theta < \\pi$):</strong> $x < 0,\\; y > 0 \\implies$ Only <strong>S</strong>ine ($\\frac{y}{r} > 0$) and its reciprocal <strong>Cosecant</strong> ($\\frac{r}{y} > 0$) are <strong>Positive ($+$)</strong>; the other 4 are negative.</li>
        <li><strong>Quadrant III ($\\pi < \\theta < \\frac{3\\pi}{2}$):</strong> $x < 0,\\; y < 0 \\implies$ Only <strong>T</strong>angent ($\\frac{y}{x} > 0$) and its reciprocal <strong>Cotangent</strong> ($\\frac{x}{y} > 0$) are <strong>Positive ($+$)</strong>; the other 4 are negative.</li>
        <li><strong>Quadrant IV ($\\frac{3\\pi}{2} < \\theta < 2\\pi$):</strong> $x > 0,\\; y < 0 \\implies$ Only <strong>C</strong>osine ($\\frac{x}{r} > 0$) and its reciprocal <strong>Secant</strong> ($\\frac{r}{x} > 0$) are <strong>Positive ($+$)</strong>; the other 4 are negative.</li>
      </ul>
      <div class="math-box">
        <div class="math-box-title">Classic ASTC Mnemonics (Counter-Clockwise Q-I → Q-IV)</div>
        $$\\textbf{A}\\text{ll} \\longrightarrow \\textbf{S}\\text{ilver} \\longrightarrow \\textbf{T}\\text{ea} \\longrightarrow \\textbf{C}\\text{ups} \\qquad \\text{or} \\qquad \\textbf{A}\\text{dd } \\textbf{S}\\text{ugar } \\textbf{T}\\text{o } \\textbf{C}\\text{offee}$$
      </div>

      <h3>18.2 Complete Sign & Monotonicity (Growth) Chart Across Quadrants</h3>
      <p>Exam questions frequently ask not only for the <em>sign</em>, but also how $\\sin\\theta, \\cos\\theta, \\tan\\theta$ <strong>increase or decrease</strong> as $\\theta$ sweeps from $0$ to $2\\pi$:</p>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Function</th>
              <th>Quadrant I ($0 \\to \\frac{\\pi}{2}$)</th>
              <th>Quadrant II ($\\frac{\\pi}{2} \\to \\pi$)</th>
              <th>Quadrant III ($\\pi \\to \\frac{3\\pi}{2}$)</th>
              <th>Quadrant IV ($\\frac{3\\pi}{2} \\to 2\\pi$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>$\\sin\\theta$</strong></td>
              <td><strong>$+$</strong> (Increases $0 \\to 1$)</td>
              <td><strong>$+$</strong> (Decreases $1 \\to 0$)</td>
              <td><strong>$-$</strong> (Decreases $0 \\to -1$)</td>
              <td><strong>$-$</strong> (Increases $-1 \\to 0$)</td>
            </tr>
            <tr>
              <td><strong>$\\cos\\theta$</strong></td>
              <td><strong>$+$</strong> (Decreases $1 \\to 0$)</td>
              <td><strong>$-$</strong> (Decreases $0 \\to -1$)</td>
              <td><strong>$-$</strong> (Increases $-1 \\to 0$)</td>
              <td><strong>$+$</strong> (Increases $0 \\to 1$)</td>
            </tr>
            <tr>
              <td><strong>$\\tan\\theta$</strong></td>
              <td><strong>$+$</strong> (Increases $0 \\to +\\infty$)</td>
              <td><strong>$-$</strong> (Increases $-\\infty \\to 0$)</td>
              <td><strong>$+$</strong> (Increases $0 \\to +\\infty$)</td>
              <td><strong>$-$</strong> (Increases $-\\infty \\to 0$)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><em>Remarkable Calculus Insight:</em> Notice that $\\tan\\theta$ is <strong>strictly increasing inside every single quadrant</strong> (which matches $(\\tan\\theta)' = \\sec^2\\theta > 0$ everywhere it is defined)!</p>

      <h3>18.3 Quadrantal Angles ($0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$)</h3>
      <p>Quadrantal angles lie <strong>on the coordinate axes</strong>—they belong to <em>no quadrant</em>! Read their exact values directly from unit-circle intercepts $(1,0), (0,1), (-1,0), (0,-1)$:</p>
      <ul>
        <li>At $0$ and $2\\pi$ $\\to (1, 0)$: $\\cos = 1,\\; \\sin = 0,\\; \\tan = 0$.</li>
        <li>At $\\frac{\\pi}{2}$ ($90^\\circ$) $\\to (0, 1)$: $\\cos = 0,\\; \\sin = 1,\\; \\tan = \\text{Undefined}$.</li>
        <li>At $\\pi$ ($180^\\circ$) $\\to (-1, 0)$: $\\cos = -1,\\; \\sin = 0,\\; \\tan = 0$.</li>
        <li>At $\\frac{3\\pi}{2}$ ($270^\\circ$) $\\to (0, -1)$: $\\cos = 0,\\; \\sin = -1,\\; \\tan = \\text{Undefined}$.</li>
      </ul>
    `,
    pitfalls: [
      "Saying $-1$ is 'larger' than $-0.2$: In Quadrant II, as $\\cos\\theta$ goes from $0$ to $-1$, $\\cos\\theta$ is DECREASING (becoming more negative)!",
      "Simplifying $\\sqrt{1 - \\sin^2\\theta} = \\cos\\theta$ blindly: Remember $\\sqrt{u^2} = |u|$! So $\\sqrt{1 - \\sin^2\\theta} = |\\cos\\theta|$, which equals $-\\cos\\theta$ whenever $\\theta$ is in Quadrant II or Quadrant III!"
    ],
    examples: [
      {
        q: "Example 1: In which quadrant must $\\theta$ lie if $\\sin\\theta < 0$ and $\\sec\\theta > 0$?",
        sol: "$\\sin\\theta < 0$ restricts $\\theta$ to Quadrants III or IV. $\\sec\\theta > 0 \\iff \\cos\\theta > 0$, which restricts $\\theta$ to Quadrants I or IV. Their unique intersection is **Quadrant IV**."
      },
      {
        q: "Example 2: Find the sign of the product $\\sin(100^\\circ)\\cos(200^\\circ)\\tan(300^\\circ)$.",
        sol: "$100^\\circ \\in \\text{Q-II} \\implies \\sin(100^\\circ) > 0$ ($+$). $200^\\circ \\in \\text{Q-III} \\implies \\cos(200^\\circ) < 0$ ($-$). $300^\\circ \\in \\text{Q-IV} \\implies \\tan(300^\\circ) < 0$ ($-$). Multiplying signs: $(+) \\times (-) \\times (-) = +$ (**Positive**)."
      },
      {
        q: "Example 3: If $\\pi < \\theta < \\frac{3\\pi}{2}$, simplify $\\sqrt{\\frac{1 - \\sin\\theta}{1 + \\sin\\theta}}$ without absolute value bars.",
        sol: "Multiply inside by $\\frac{1-\\sin\\theta}{1-\\sin\\theta}$: $\\sqrt{\\frac{(1-\\sin\\theta)^2}{\\cos^2\\theta}} = \\frac{|1 - \\sin\\theta|}{|\\cos\\theta|}$. Since $\\sin\\theta \\le 1$, $1 - \\sin\\theta > 0$. In Q-III ($\\pi < \\theta < \\frac{3\\pi}{2}$), $\\cos\\theta < 0$, so $|\\cos\\theta| = -\\cos\\theta$! Thus the expression equals $\\frac{1 - \\sin\\theta}{-\\cos\\theta} = \\tan\\theta - \\sec\\theta$ (note the sign reversal!)."
      }
    ],
    quiz: [
      {
        q: "If $\\tan\\theta < 0$ and $\\operatorname{cosec}\\theta > 0$, in which quadrant does $\\theta$ lie?",
        options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
        answer: 1,
        explanation: "$\\operatorname{cosec}\\theta > 0 \\implies \\sin\\theta > 0$ (Q-I or Q-II), and $\\tan\\theta < 0$ (Q-II or Q-IV). The common quadrant is Quadrant II."
      },
      {
        q: "What is the sign of $\\sin 3 \\cdot \\cos 4$ (where $3$ and $4$ are in radians)?",
        options: ["Positive ($+$)", "Negative ($-$)", "Zero ($0$)", "Undefined"],
        answer: 1,
        explanation: "$\\frac{\\pi}{2} \\approx 1.57 < 3 < 3.14 \\approx \\pi$, so $3\\text{ rad} \\in \\text{Q-II} \\implies \\sin 3 > 0$. Meanwhile $\\pi \\approx 3.14 < 4 < 4.71 \\approx \\frac{3\\pi}{2}$, so $4\\text{ rad} \\in \\text{Q-III} \\implies \\cos 4 < 0$. Product is $(+)(-) = -$ (Negative)!"
      },
      {
        q: "In Quadrant III, as $\\theta$ increases from $\\pi$ to $\\frac{3\\pi}{2}$, how do $\\sin\\theta$ and $\\cos\\theta$ behave?",
        options: [
          "$\\sin\\theta$ increases, $\\cos\\theta$ decreases",
          "$\\sin\\theta$ decreases ($0 \\to -1$), $\\cos\\theta$ increases ($-1 \\to 0$)",
          "Both increase",
          "Both decrease"
        ],
        answer: 1,
        explanation: "Moving from $(-1, 0)$ at $\\pi$ down to $(0, -1)$ at $\\frac{3\\pi}{2}$, $y = \\sin\\theta$ drops from $0$ to $-1$ while $x = \\cos\\theta$ rises from $-1$ to $0$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 19: DOMAIN AND RANGE OF TRIGONOMETRIC FUNCTIONS
     ======================================================================== */
  {
    id: "ch-19-domain-range",
    grade: "Ch 19",
    tierId: "tier-4",
    tierColor: "#ea580c",
    title: "19. Domain and Range of Trigonometric Functions",
    subtitle: "Master exact set-builder domains and ranges of all 6 trig functions, plus powerful algebraic & inequality techniques to find max/min ranges of composite trig expressions.",
    prerequisites: ["Chapter 16: Circular Functions", "Completing the Square & AM-GM Inequality"],
    tags: ["6-Function Domain/Range Table", "a cos x + b sin x Bounds", "Completing the Square", "AM-GM Trig Minima"],
    sandboxType: "waveLab",
    intuition: `Think of a function as a machine: the **Domain** is the set of safe inputs that never blow up a denominator or square-root a negative number, and the **Range** is the exact span of heights the output wave actually reaches! Because $P(\\cos x, \\sin x)$ is chained to a circle of radius $1$, $\\sin x$ and $\\cos x$ are forever trapped inside $[-1, 1]$, while their reciprocals $\\operatorname{cosec} x$ and $\\sec x$ live *exclusively outside* $(-1, 1)$!`,
    theoryHtml: `
      <h3>19.1 Master Domain & Range Table of All 6 Trigonometric Functions</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Function</th>
              <th>Domain (Permissible $x \\in \\mathbb{R}$, with $n \\in \\mathbb{Z}$)</th>
              <th>Range (Output Set $y$)</th>
              <th>Bounded?</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>$y = \\sin x$</strong></td><td>$\\mathbb{R} = (-\\infty, \\infty)$</td><td>$[-1, 1]$</td><td>Yes ($|y| \\le 1$)</td></tr>
            <tr><td><strong>$y = \\cos x$</strong></td><td>$\\mathbb{R} = (-\\infty, \\infty)$</td><td>$[-1, 1]$</td><td>Yes ($|y| \\le 1$)</td></tr>
            <tr><td><strong>$y = \\tan x$</strong></td><td>$\\mathbb{R} \\setminus \\left\\{(2n+1)\\frac{\\pi}{2} : n \\in \\mathbb{Z}\\right\\}$</td><td>$\\mathbb{R} = (-\\infty, \\infty)$</td><td>Unbounded</td></tr>
            <tr><td><strong>$y = \\cot x$</strong></td><td>$\\mathbb{R} \\setminus \\{n\\pi : n \\in \\mathbb{Z}\\}$</td><td>$\\mathbb{R} = (-\\infty, \\infty)$</td><td>Unbounded</td></tr>
            <tr><td><strong>$y = \\sec x$</strong></td><td>$\\mathbb{R} \\setminus \\left\\{(2n+1)\\frac{\\pi}{2} : n \\in \\mathbb{Z}\\right\\}$</td><td>$(-\\infty, -1] \\cup [1, \\infty)$</td><td>Unbounded ($|y| \\ge 1$)</td></tr>
            <tr><td><strong>$y = \\operatorname{cosec} x$</strong></td><td>$\\mathbb{R} \\setminus \\{n\\pi : n \\in \\mathbb{Z}\\}$</td><td>$(-\\infty, -1] \\cup [1, \\infty)$</td><td>Unbounded ($|y| \\ge 1$)</td></tr>
          </tbody>
        </table>
      </div>

      <h3>19.2 Five Essential Techniques for Finding Composite Ranges</h3>
      <ol>
        <li>
          <strong>Technique 1 — Bounded Building Block ($u = \\sin(kx) \\in [-1, 1]$ or $u = \\sin^2 x \\in [0, 1]$):</strong><br/>
          For $f(x) = \\frac{1}{3 - 2\\sin 5x}$, start from $-1 \\le \\sin 5x \\le 1 \\implies -2 \\le -2\\sin 5x \\le 2 \\implies 1 \\le 3 - 2\\sin 5x \\le 5$. Since the denominator stays strictly positive on $[1, 5]$, take reciprocals: $\\text{Range} = \\left[\\frac{1}{5}, 1\\right]$.
        </li>
        <li>
          <strong>Technique 2 — Linear Harmonic Combination ($a\\cos x + b\\sin x + c$):</strong><br/>
          Write $R = \\sqrt{a^2 + b^2}$ and $\\cos\\alpha = \\frac{a}{R}, \\sin\\alpha = \\frac{b}{R}$. Then $a\\cos x + b\\sin x = R\\cos(x - \\alpha)$! Since $\\cos(x - \\alpha) \\in [-1, 1]$:
          $$c - \\sqrt{a^2 + b^2} \\;\\le\\; a\\cos x + b\\sin x + c \\;\\le\\; c + \\sqrt{a^2 + b^2}$$
        </li>
        <li>
          <strong>Technique 3 — Completing the Square in $t = \\sin x$ or $\\cos x$ (Restricted to $t \\in [-1, 1]$!):</strong><br/>
          Convert $\\cos^2 x = 1 - \\sin^2 x$, set $t = \\sin x \\in [-1, 1]$, complete the square $A(t - h)^2 + k$, and evaluate at the vertex (ONLY if $h \\in [-1, 1]$!) and endpoints $t = \\pm 1$.
        </li>
        <li>
          <strong>Technique 4 — Power Sums ($\\sin^2 x + \\cos^4 x$ and $\\sin^4 x + \\cos^4 x$):</strong><br/>
          Let $u = \\sin^2 x \\in [0, 1]$, so $\\cos^2 x = 1 - u$. Then:
          $$\\sin^2 x + \\cos^4 x = u + (1 - u)^2 = u^2 - u + 1 = \\left(u - \\frac{1}{2}\\right)^2 + \\frac{3}{4} \\in \\left[\\frac{3}{4}, 1\\right]$$
          Similarly, $\\sin^4 x + \\cos^4 x = 1 - \\frac{1}{2}\\sin^2(2x) \\in \\left[\\frac{1}{2}, 1\\right]$, and $\\sin^6 x + \\cos^6 x = 1 - \\frac{3}{4}\\sin^2(2x) \\in \\left[\\frac{1}{4}, 1\\right]$!
        </li>
        <li>
          <strong>Technique 5 — AM-GM Inequality for Reciprocal Squares ($a^2\\tan^2 x + b^2\\cot^2 x$):</strong><br/>
          For positive $a, b > 0$, by $\\text{AM} \\ge \\text{GM}$:
          $$a^2\\tan^2 x + b^2\\cot^2 x \\ge 2\\sqrt{a^2\\tan^2 x \\cdot b^2\\cot^2 x} = 2ab \\implies \\text{Range} = [2ab, \\infty)$$
          <em>Caution:</em> For $a^2\\sec^2 x + b^2\\operatorname{cosec}^2 x$, rewrite first as $(a^2+b^2) + a^2\\tan^2 x + b^2\\cot^2 x \\ge a^2 + b^2 + 2ab = (a + b)^2$!
        </li>
      </ol>
    `,
    pitfalls: [
      "Applying $a\\cos x + b\\sin x$ formula when the angles DON'T match: $\\sqrt{a^2+b^2}$ works ONLY when $\\cos$ and $\\sin$ have the EXACT SAME argument (e.g., $3\\cos 2x + 4\\sin 2x \\in [-5, 5]$, NOT $3\\cos x + 4\\sin 2x$!).",
      "Taking the vertex of a parabola outside $[-1, 1]$: For $g(t) = t^2 - 4t + 5$ with $t = \\sin x \\in [-1, 1]$, the vertex $t = 2$ is IMPOSSIBLE because $\\sin x \\le 1$! Instead evaluate at $t = 1$ (min $= 2$) and $t = -1$ (max $= 10$), giving Range $[2, 10]$."
    ],
    examples: [
      {
        q: "Example 1: Find the domain of $f(x) = \\frac{1}{\\sqrt{\\sin x - 1}}$.",
        sol: "We require $\\sin x - 1 > 0 \\iff \\sin x > 1$. Since $\\sin x \\le 1$ for all real $x$, NO real $x$ satisfies $\\sin x > 1$! Domain $= \\emptyset$ (empty set). By contrast, for $g(x) = \\sqrt{\\sin x - 1}$, we need $\\sin x - 1 \\ge 0 \\iff \\sin x = 1 \\iff x = 2n\\pi + \\frac{\\pi}{2}\\;(n \\in \\mathbb{Z})$."
      },
      {
        q: "Example 2: Find the minimum and maximum values of $y = 8\\cos x - 15\\sin x + 10$.",
        sol: "Here $a = 8, b = -15, c = 10$, so $R = \\sqrt{8^2 + (-15)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$. Thus $y_{\\min} = 10 - 17 = -7$ and $y_{\\max} = 10 + 17 = 27$. Range $= [-7, 27]$."
      },
      {
        q: "Example 3: Find the minimum value of $f(x) = 9\\sec^2 x + 16\\operatorname{cosec}^2 x$.",
        sol: "Substitute $\\sec^2 x = 1 + \\tan^2 x$ and $\\operatorname{cosec}^2 x = 1 + \\cot^2 x$: $f(x) = 25 + (9\\tan^2 x + 16\\cot^2 x)$. By AM-GM, $9\\tan^2 x + 16\\cot^2 x \\ge 2\\sqrt{9 \\cdot 16} = 24$ (achieved when $3|\\tan x| = 4|\\cot x| \\iff \\tan^2 x = \\frac{4}{3}$, which IS solvable!). Hence $f_{\\min} = 25 + 24 = 49 = (3 + 4)^2$!"
      }
    ],
    quiz: [
      {
        q: "What is the exact range of $f(x) = 5 - 3\\cos(4x)$?",
        options: ["$[2, 5]$", "$[2, 8]$", "$[-8, 8]$", "$[-3, 3]$"],
        answer: 1,
        explanation: "Since $\\cos(4x) \\in [-1, 1]$, $-3\\cos(4x) \\in [-3, 3]$, so $5 - 3\\cos(4x) \\in [5 - 3, 5 + 3] = [2, 8]$."
      },
      {
        q: "Find the range of $y = \\sin^2 x + \\cos^4 x$ for $x \\in \\mathbb{R}$.",
        options: ["$[0, 1]$", "$[\\frac{1}{2}, 1]$", "$[\\frac{3}{4}, 1]$", "$[\\frac{1}{4}, 1]$"],
        answer: 2,
        explanation: "With $u = \\sin^2 x \\in [0, 1]$, $y = u + (1-u)^2 = (u - \\frac{1}{2})^2 + \\frac{3}{4}$, which attains min $\\frac{3}{4}$ at $u = \\frac{1}{2}$ and max $1$ at $u = 0$ or $1$."
      },
      {
        q: "Which interval cannot contain any value of $\\sec x$ for real $x$?",
        options: ["$[1, 2]$", "$(-\\infty, -1]$", "$(-1, 1)$", "$[2, \\infty)$"],
        answer: 2,
        explanation: "Because $|\\cos x| \\le 1$, $|\\sec x| = \\frac{1}{|\\cos x|} \\ge 1$, so $\\sec x$ never enters the open interval $(-1, 1)$!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 20: PERIODICITY OF TRIGONOMETRIC FUNCTIONS
     ======================================================================== */
  {
    id: "ch-20-periodicity",
    grade: "Ch 20",
    tierId: "tier-4",
    tierColor: "#ea580c",
    title: "20. Periodicity of Trigonometric Functions",
    subtitle: "Rigorous definition of periodic functions $f(x+T)=f(x)$, fundamental period $T$, power/modulus shortcuts, LCM rules for sums, cancellation traps, and proving aperiodicity.",
    prerequisites: ["Chapter 16: Circular Functions", "Chapter 17: Allied Angles"],
    tags: ["Fundamental Period T", "Powers & Modulus Rules", "LCM Rule & Exceptions", "Aperiodic Functions"],
    sandboxType: "waveLab",
    intuition: `A heartbeat, an AC power grid ($50\\text{ Hz}$), the phases of the Moon, and musical pitch all share one defining mathematical property: **Periodicity**—repeating their exact pattern after a fixed interval $T$! Yet beware subtle traps: squaring $\\sin x$ cuts its period in half ($2\\pi \\to \\pi$), adding $|\\sin x| + |\\cos x|$ cuts it in half *again* to $\\frac{\\pi}{2}$, and feeding $x^2$ into $\\sin(x^2)$ destroys periodicity completely!`,
    theoryHtml: `
      <h3>20.1 Formal Definition of Period & Fundamental Period</h3>
      <p>A function $f: D \\to \\mathbb{R}$ is called <strong>Periodic</strong> if there exists a <em>strictly positive</em> constant $T > 0$ such that for all $x \\in D$, $(x + T) \\in D$ and:</p>
      <div class="math-box">
        <div class="math-box-title">Periodicity Condition & Fundamental Period</div>
        $$f(x + T) = f(x) \\qquad \\forall x \\in D$$
      </div>
      <p>Notice that if $T$ is a period, then $2T, 3T, 4T, \\dots$ are also periods! The <strong>smallest positive</strong> constant $T > 0$ satisfying $f(x + T) = f(x)$ for all $x \\in D$ is called the <strong>Fundamental Period</strong> (or simply "the period") of $f$.</p>
      <p><em>Note on Constant Functions:</em> A constant function $f(x) = c$ satisfies $f(x + T) = c = f(x)$ for <em>every</em> $T > 0$, so it is periodic with <strong>no fundamental period</strong>! Watch out for disguised constants like $f(x) = \\sin^2 x + \\cos^2 x = 1$ or $\\sec^2 x - \\tan^2 x = 1$.</p>

      <h3>20.2 Master Period Rules Table</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Function Family</th>
              <th>Fundamental Period $T$</th>
              <th>Why / Proof Idea</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>$\\sin x,\\; \\cos x,\\; \\sec x,\\; \\operatorname{cosec} x$</td><td>$2\\pi$</td><td>One full revolution on $x^2 + y^2 = 1$</td></tr>
            <tr><td>$\\tan x,\\; \\cot x$</td><td>$\\pi$</td><td>$\\tan(x + \\pi) = \\frac{-\\sin x}{-\\cos x} = \\tan x$ (antipodal slope!)</td></tr>
            <tr><td>$f(ax + b)$ where $f$ has period $T$ ($a \\neq 0$)</td><td>$\\dfrac{T}{|a|}$</td><td>Shift $b$ doesn't change period; horizontal stretch scales by $1/|a|$</td></tr>
            <tr><td>$\\sin^n x,\\; \\cos^n x,\\; \\sec^n x,\\; \\operatorname{cosec}^n x$ ($n \\in \\mathbb{N}$)</td><td>$\\pi$ if $n$ is <strong>Even</strong>;<br/>$2\\pi$ if $n$ is <strong>Odd</strong></td><td>$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$ has frequency $2 \\implies T = \\frac{2\\pi}{2} = \\pi$</td></tr>
            <tr><td>$\\tan^n x,\\; \\cot^n x$ ($n \\in \\mathbb{N}$)</td><td>$\\pi$ (for ALL $n$)</td><td>Already $\\pi$-periodic; squaring doesn't halve $\\pi$</td></tr>
            <tr><td>$|\\sin x|,\\; |\\cos x|,\\; |\\tan x|,\\; |\\cot x|,\\; |\\sec x|,\\; |\\operatorname{cosec} x|$</td><td>$\\pi$ (for ALL 6!)</td><td>Negative lobes flip upright to match positive lobes every $\\pi$!</td></tr>
            <tr><td>$|\\sin x| + |\\cos x|$ or $\\sin^4 x + \\cos^4 x$</td><td>$\\dfrac{\\pi}{2}$</td><td>Substituting $x \\mapsto x + \\frac{\\pi}{2}$ swaps $|\\sin|$ and $|\\cos|$ symmetrically!</td></tr>
          </tbody>
        </table>
      </div>

      <h3>20.3 The LCM Rule for Sums/Combinations & Its Famous Exception</h3>
      <p>Suppose $f_1(x)$ has fundamental period $T_1$ and $f_2(x)$ has fundamental period $T_2$. Then $F(x) = c_1 f_1(x) + c_2 f_2(x)$ is periodic <strong>if and only if $\\frac{T_1}{T_2} \\in \\mathbb{Q}$ (a rational number)</strong>! To compute $\\operatorname{LCM}$ of fractions:</p>
      <div class="math-box">
        <div class="math-box-title">Fractional LCM Formula & Sub-Multiple Check</div>
        $$\\operatorname{LCM}\\!\\left(\\frac{p_1}{q_1}, \\frac{p_2}{q_2}\\right) = \\frac{\\operatorname{LCM}(p_1, p_2)}{\\operatorname{HCF}(q_1, q_2)}$$
      </div>
      <ul>
        <li><strong>Irrational Ratio $\\implies$ APERIODIC:</strong> $f(x) = \\sin x + \\sin(\\pi x)$ has $T_1 = 2\\pi$ and $T_2 = 2$. Since $\\frac{2\\pi}{2} = \\pi \\notin \\mathbb{Q}$, $\\operatorname{LCM}$ does not exist and $f(x)$ is <strong>NOT periodic</strong>!</li>
        <li><strong>Co-Function Algebraic Symmetry Exception:</strong> The LCM gives an <em>upper bound</em>; if two even/modulus co-functions swap roles under $x + \\frac{T}{2}$, the true fundamental period can be <strong>half of the LCM</strong>! Always test $T/2$: for $f(x) = |\\sin x| + |\\cos x|$, $T_1 = \\pi, T_2 = \\pi \\implies \\operatorname{LCM} = \\pi$, yet $f(x + \\frac{\\pi}{2}) = |\\cos x| + |-\\sin x| = f(x)$, so the true fundamental period is $\\frac{\\pi}{2}$!</li>
        <li><strong>Non-Linear Inputs Are Aperiodic:</strong> Functions like $\\sin(x^2)$, $\\cos(\\sqrt{x})$, and $x + \\sin x$ are <strong>not periodic</strong> because the spacing between consecutive zeros changes ($\\sqrt{n\\pi}$ shrinks as $n \\to \\infty$ for $\\sin(x^2)$!).</li>
      </ul>
    `,
    pitfalls: [
      "Saying the period of $|\\sin x| + |\\cos x|$ is $\\pi$: Both terms have period $\\pi$, so $\\operatorname{LCM}(\\pi, \\pi) = \\pi$, BUT at $x + \\frac{\\pi}{2}$ the two terms swap places ($|\\sin(x+\\frac{\\pi}{2})| = |\\cos x|$ and $|\\cos(x+\\frac{\\pi}{2})| = |\\sin x|$), cutting the fundamental period to $\\frac{\\pi}{2}$!",
      "Thinking $f(x) = \\sin^2 x + \\cos^2 x$ has period $\\pi$: Always simplify identities FIRST! Since $\\sin^2 x + \\cos^2 x = 1$ (constant), it is periodic with NO fundamental period."
    ],
    examples: [
      {
        q: "Example 1: Find the fundamental period of $f(x) = 3\\sin\\!\\left(\\frac{2x}{3}\\right) - 5\\cos\\!\\left(\\frac{4x}{5}\\right)$.",
        sol: "Individual periods: $T_1 = \\frac{2\\pi}{2/3} = 3\\pi = \\frac{3\\pi}{1}$ and $T_2 = \\frac{2\\pi}{4/5} = \\frac{5\\pi}{2}$. Using fractional LCM: $T = \\frac{\\operatorname{LCM}(3\\pi, 5\\pi)}{\\operatorname{HCF}(1, 2)} = \\frac{15\\pi}{1} = 15\\pi$. (No symmetry halving occurs since coefficients $3 \\neq 5$ and frequencies differ.)"
      },
      {
        q: "Example 2: Find the fundamental period of $g(x) = \\tan(3x + 7) + \\cos^2(2x - 1)$.",
        sol: "Phase shifts $+7$ and $-1$ do NOT affect periods! For $\\tan(3x+7)$, $T_1 = \\frac{\\pi}{3}$. For $\\cos^2(2x-1)$ (even power $n=2$!), base period of $\\cos^2 u$ is $\\pi$, so $T_2 = \\frac{\\pi}{2}$. Thus $T = \\operatorname{LCM}\\!\\left(\\frac{\\pi}{3}, \\frac{\\pi}{2}\\right) = \\frac{\\operatorname{LCM}(\\pi, \\pi)}{\\operatorname{HCF}(3, 2)} = \\frac{\\pi}{1} = \\pi$."
      },
      {
        q: "Example 3: Prove rigorously that $h(x) = \\sin(x^2)$ is NOT periodic.",
        sol: "Suppose for contradiction there exists $T > 0$ such that $\\sin((x+T)^2) = \\sin(x^2)$ for all $x \\in \\mathbb{R}$. Plugging $x = 0$ gives $\\sin(T^2) = 0 \\implies T^2 = k\\pi$ for some integer $k \\ge 1$. Now plug $x = \\sqrt{\\pi}$: we need $\\sin((\\sqrt{\\pi} + \\sqrt{k\\pi})^2) = \\sin(\\pi) = 0$, so $(1 + \\sqrt{k})^2\\pi = m\\pi \\implies 1 + 2\\sqrt{k} + k = m$, forcing $\\sqrt{k} = \\frac{m - 1 - k}{2} \\in \\mathbb{Q}$. Even if $k$ is a square (say $k = n^2$), plugging $x = \\sqrt{2\\pi}$ forces $\\sqrt{2} \\in \\mathbb{Q}$, a contradiction! Thus $\\sin(x^2)$ is aperiodic."
      }
    ],
    quiz: [
      {
        q: "What is the fundamental period of $f(x) = \\tan\\!\\left(\\frac{5x}{2} - \\frac{\\pi}{7}\\right)$?",
        options: ["$\\frac{4\\pi}{5}$", "$\\frac{2\\pi}{5}$", "$\\frac{5\\pi}{2}$", "$2\\pi$"],
        answer: 1,
        explanation: "The base period of $\\tan u$ is $\\pi$, and the phase shift $-\\frac{\\pi}{7}$ has no effect, giving $T = \\frac{\\pi}{5/2} = \\frac{2\\pi}{5}$."
      },
      {
        q: "What is the fundamental period of $f(x) = \\sin^4 x + \\cos^4 x$?",
        options: ["$2\\pi$", "$\\pi$", "$\\frac{\\pi}{2}$", "$\\frac{\\pi}{4}$"],
        answer: 2,
        explanation: "Rewrite $\\sin^4 x + \\cos^4 x = 1 - \\frac{1}{2}\\sin^2(2x) = 1 - \\frac{1}{2}\\left(\\frac{1 - \\cos 4x}{2}\\right) = \\frac{3}{4} + \\frac{1}{4}\\cos(4x)$, whose fundamental period is $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$!"
      },
      {
        q: "Which of the following functions is NOT periodic?",
        options: ["$|\\operatorname{cosec} 3x|$", "$\\sin 2x + \\cos 3x$", "$\\cos x + \\cos(\\sqrt{2}\\,x)$", "$\\tan^3 x$"],
        answer: 2,
        explanation: "For $\\cos x + \\cos(\\sqrt{2}\\,x)$, $T_1 = 2\\pi$ and $T_2 = \\frac{2\\pi}{\\sqrt{2}}$, whose ratio $\\frac{T_1}{T_2} = \\sqrt{2}$ is irrational—so no common period exists!"
      }
    ]
  },

  /* ========================================================================
     CHAPTER 21: GRAPHS OF TRIGONOMETRIC FUNCTIONS
     ======================================================================== */
  {
    id: "ch-21-trig-graphs",
    grade: "Ch 21 • Core ",
    tierId: "tier-4",
    tierColor: "#ea580c",
    title: "21. Graphs of Trigonometric Functions",
    subtitle: "Complete visual anatomy of all 6 parent curves ($\\sin, \\cos, \\tan, \\cot, \\sec, \\operatorname{cosec}$), vertical asymptotes, symmetry, and the 4-Parameter Wave Transformation Blueprint.",
    prerequisites: ["Chapter 19: Domain & Range", "Chapter 20: Periodicity"],
    tags: ["All 6 Parent Graphs", "Vertical Asymptotes", "5-Quarter-Point Sketching", "y = A sin(Bx - C) + D"],
    sandboxType: "waveLab",
    intuition: `If you unroll the unit circle along a horizontal axis and plot the height $y = \\sin x$ as a point spins steadily around $(0,0)$, it traces a smooth, endless ocean wave! Every trigonometric graph tells its whole life story at a glance: cosine is just sine shifted $\\frac{\\pi}{2}$ left, secant and cosecant ride as U-shaped parabolas balanced on the crests and troughs of cosine and sine, and tangent shoots to $\\pm\\infty$ along vertical asymptote walls!`,
    theoryHtml: `
      <h3>21.1 Anatomy of All 6 Parent Trigonometric Graphs</h3>
      <div class="trig-table-wrap">
        <table class="trig-table">
          <thead>
            <tr>
              <th>Graph</th>
              <th>Key Anchor Points (One Cycle)</th>
              <th>Vertical Asymptotes</th>
              <th>Visual Shape & Symmetry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>$y = \\sin x$</strong></td>
              <td>$(0,0) \\to (\\frac{\\pi}{2},1) \\to (\\pi,0) \\to (\\frac{3\\pi}{2},-1) \\to (2\\pi,0)$</td>
              <td>None (continuous everywhere)</td>
              <td>Smooth wave starting at $(0,0)$ going UP; <strong>Origin symmetry</strong> (Odd)</td>
            </tr>
            <tr>
              <td><strong>$y = \\cos x$</strong></td>
              <td>$(0,1) \\to (\\frac{\\pi}{2},0) \\to (\\pi,-1) \\to (\\frac{3\\pi}{2},0) \\to (2\\pi,1)$</td>
              <td>None (continuous everywhere)</td>
              <td>Smooth wave starting at peak $(0,1)$ ($\\cos x = \\sin(x + \\frac{\\pi}{2})$); <strong>$y$-axis symmetry</strong> (Even)</td>
            </tr>
            <tr>
              <td><strong>$y = \\tan x$</strong></td>
              <td>$(-\\frac{\\pi}{4},-1) \\to (0,0) \\to (\\frac{\\pi}{4},1)$ inside $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$</td>
              <td>$x = (2n+1)\\frac{\\pi}{2}$</td>
              <td>Strictly <strong>increasing</strong> S-branches from $-\\infty$ to $+\\infty$ every $\\pi$; Odd</td>
            </tr>
            <tr>
              <td><strong>$y = \\cot x$</strong></td>
              <td>$(\\frac{\\pi}{4},1) \\to (\\frac{\\pi}{2},0) \\to (\\frac{3\\pi}{4},-1)$ inside $(0, \\pi)$</td>
              <td>$x = n\\pi$</td>
              <td>Strictly <strong>decreasing</strong> S-branches from $+\\infty$ to $-\\infty$ every $\\pi$; Odd</td>
            </tr>
            <tr>
              <td><strong>$y = \\sec x$</strong></td>
              <td>Touches $\\cos x$ peaks $(2n\\pi, 1)$ & troughs $((2n+1)\\pi, -1)$</td>
              <td>$x = (2n+1)\\frac{\\pi}{2}$ (zeros of $\\cos x$)</td>
              <td>Alternating upward ($y \\ge 1$) and downward ($y \\le -1$) U-branches; Even</td>
            </tr>
            <tr>
              <td><strong>$y = \\operatorname{cosec} x$</strong></td>
              <td>Touches $\\sin x$ peaks $(2n\\pi+\\frac{\\pi}{2}, 1)$ & troughs $(2n\\pi+\\frac{3\\pi}{2}, -1)$</td>
              <td>$x = n\\pi$ (zeros of $\\sin x$)</td>
              <td>Alternating upward ($y \\ge 1$) and downward ($y \\le -1$) U-branches; Odd</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>21.2 The 4-Parameter Sinusoidal Transformation Blueprint</h3>
      <p>Every transformed sine or cosine wave can be written in factored form by pulling $B$ out of the argument:</p>
      <div class="math-box">
        <div class="math-box-title">Standard Wave Form & Physical Meaning</div>
        $$y = A\\sin(Bx - C) + D = A\\sin\\!\\left[B\\left(x - \\frac{C}{B}\\right)\\right] + D$$
        $$\\text{1. Amplitude} = |A| = \\frac{y_{\\max} - y_{\\min}}{2} \\qquad (\\text{if } A < 0, \\text{ reflect vertically across midline})$$
        $$\\text{2. Period } T = \\frac{2\\pi}{|B|} \\;\\left(\\text{Frequency } f = \\frac{1}{T} = \\frac{|B|}{2\\pi}\\right), \\qquad \\text{For } \\tan/\\cot: T = \\frac{\\pi}{|B|}$$
        $$\\text{3. Horizontal Phase Shift} = \\frac{C}{B} \\;(\\text{shift RIGHT if } \\frac{C}{B} > 0,\\; \\text{LEFT if } \\frac{C}{B} < 0)$$
        $$\\text{4. Vertical Shift (Midline)} = y = D = \\frac{y_{\\max} + y_{\\min}}{2}, \\qquad \\text{Range} = [D - |A|,\\; D + |A|]$$
      </div>

      <h3>21.3 The 5-Quarter-Point Hand-Sketching Method</h3>
      <p>To sketch one crystal-clear cycle of $y = A\\sin(Bx - C) + D$ without a graphing calculator:</p>
      <ol>
        <li>Solve $0 \\le Bx - C \\le 2\\pi$ to find the <strong>Start $x_0 = \\frac{C}{B}$</strong> and <strong>End $x_4 = \\frac{C + 2\\pi}{B}$</strong> of one cycle.</li>
        <li>Divide the period $T = x_4 - x_0$ into <strong>$4$ equal quarter-steps</strong> of width $\\Delta x = \\frac{T}{4}$: $x_0,\\; x_1,\\; x_2,\\; x_3,\\; x_4$.</li>
        <li>Plot the 5 heights: for $+\\sin$, plot $(D, D+|A|, D, D-|A|, D)$; for $+\\cos$, plot $(D+|A|, D, D-|A|, D, D+|A|)$!</li>
      </ol>
      <p><em>Pro Trick for $\\sec$ & $\\operatorname{cosec}$:</em> Lightly dash the companion $y = A\\cos(Bx-C)+D$ or $A\\sin(Bx-C)+D$ guide wave first, draw vertical asymptotes wherever the guide wave crosses the midline $y = D$, and bounce U-curves outward from every crest and trough!</p>
    `,
    pitfalls: [
      "Reading the phase shift of $y = 3\\sin(2x - \\frac{\\pi}{2})$ as $\\frac{\\pi}{2}$: You MUST factor out $B = 2$ first! $2x - \\frac{\\pi}{2} = 2\\!\\left(x - \\frac{\\pi}{4}\\right)$, so the true horizontal phase shift is $\\frac{\\pi}{4}$ to the right (NOT $\\frac{\\pi}{2}$!).",
      "Saying $y = \\tan x$ has an 'amplitude': Only bounded waves ($\\sin, \\cos$) have an amplitude; for $y = A\\tan(Bx)$, $|A|$ is a vertical stretch factor (marking the height at quarter-points), NOT an amplitude!"
    ],
    examples: [
      {
        q: "Example 1: Find the amplitude, period, phase shift, midline, and 5 key quarter-points for $y = -2\\cos\\!\\left(3x + \\frac{\\pi}{2}\\right) + 1$.",
        sol: "Factor $3$: $y = -2\\cos\\!\\left[3\\!\\left(x + \\frac{\\pi}{6}\\right)\\right] + 1$. Amplitude $= |-2| = 2$ (reflected!). Period $T = \\frac{2\\pi}{3}$, quarter-step $\\Delta x = \\frac{\\pi}{6}$. Phase shift $= -\\frac{\\pi}{6}$ (left by $\\frac{\\pi}{6}$). Midline $y = 1$, Range $= [-1, 3]$. Because $A = -2 < 0$, $-\\cos$ starts at its MINIMUM: $(-\\frac{\\pi}{6}, -1) \\to (0, 1) \\to (\\frac{\\pi}{6}, 3) \\to (\\frac{\\pi}{3}, 1) \\to (\\frac{\\pi}{2}, -1)$."
      },
      {
        q: "Example 2: A tide gauge records high tide of $9\\text{ m}$ at $t = 2\\text{ hr}$ and the very next low tide of $3\\text{ m}$ at $t = 8\\text{ hr}$. Write a cosine equation $h(t)$ modeling water depth.",
        sol: "Max $= 9$, Min $= 3 \\implies$ Midline $D = \\frac{9+3}{2} = 6\\text{ m}$ and Amplitude $A = \\frac{9-3}{2} = 3\\text{ m}$. Peak-to-trough is HALF a period: $\\frac{T}{2} = 8 - 2 = 6\\text{ hr} \\implies T = 12\\text{ hr} \\implies B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$. Since cosine naturally peaks at its phase shift $t = 2$, $h(t) = 3\\cos\\!\\left[\\frac{\\pi}{6}(t - 2)\\right] + 6$!"
      },
      {
        q: "Example 3: Find the equations of all vertical asymptotes of $y = 4\\tan\\!\\left(2x - \\frac{\\pi}{3}\\right)$.",
        sol: "$\\tan u$ has vertical asymptotes at $u = (2n + 1)\\frac{\\pi}{2}$ ($n \\in \\mathbb{Z}$). Set $2x - \\frac{\\pi}{3} = (2n + 1)\\frac{\\pi}{2} \\implies 2x = \\frac{\\pi}{3} + \\frac{\\pi}{2} + n\\pi = \\frac{5\\pi}{6} + n\\pi \\implies x = \\frac{5\\pi}{12} + \\frac{n\\pi}{2}\\;(n \\in \\mathbb{Z})$."
      }
    ],
    quiz: [
      {
        q: "What is the horizontal phase shift of $y = 5\\sin(4x - \\pi) - 2$?",
        options: ["$\\pi$ to the right", "$\\frac{\\pi}{4}$ to the right", "$\\frac{\\pi}{4}$ to the left", "$4\\pi$ to the right"],
        answer: 1,
        explanation: "Factor out $B = 4$: $4x - \\pi = 4(x - \\frac{\\pi}{4})$, so the graph shifts $\\frac{\\pi}{4}$ units to the right."
      },
      {
        q: "How many times do the graphs of $y = \\sin x$ and $y = \\cos x$ intersect on $[0, 2\\pi]$?",
        options: ["$1$", "$2$", "$3$", "$4$"],
        answer: 1,
        explanation: "$\\sin x = \\cos x \\iff \\tan x = 1$, which occurs twice in $[0, 2\\pi]$: at $x = \\frac{\\pi}{4}$ (Q-I) and $x = \\frac{5\\pi}{4}$ (Q-III)."
      },
      {
        q: "Where do the vertical asymptotes of $y = \\operatorname{cosec}(2x)$ occur ($n \\in \\mathbb{Z}$)?",
        options: ["$x = n\\pi$", "$x = \\frac{n\\pi}{2}$", "$x = (2n+1)\\frac{\\pi}{4}$", "None"],
        answer: 1,
        explanation: "$\\operatorname{cosec}(2x) = \\frac{1}{\\sin(2x)}$ has vertical asymptotes wherever $\\sin(2x) = 0 \\iff 2x = n\\pi \\iff x = \\frac{n\\pi}{2}$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 22: COMPOUND ANGLE FORMULAS
     ======================================================================== */
  {
    id: "ch-22-compound-angles",
    grade: "Ch 22",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "22. Compound Angle Formulas",
    subtitle: "Geometric unit-circle chord proof of $\\cos(A-B)$, full derivations of $\\sin(A\\pm B)$, $\\cos(A\\pm B)$, $\\tan(A\\pm B)$, $\\cot(A\\pm B)$, product-of-sum-and-difference identities, and exact $15^\\circ / 75^\\circ$ surds.",
    prerequisites: ["Chapter 16: Unit Circle Coordinates", "Distance Formula in $(x,y)$ Plane"],
    tags: ["Unit Circle Chord Proof", "sin(A±B), cos(A±B), tan(A±B)", "sin²A - sin²B Theorem", "15°, 75°, 105° Exact Surds"],
    sandboxType: "compoundWaveLab",
    intuition: `Beginner students are always tempted to guess $\\sin(30^\\circ + 60^\\circ) = \\sin 30^\\circ + \\sin 60^\\circ$—which immediately fails because $1 \\neq 0.5 + 0.866$! Why? Because rotating by $A$ and then rotating by $B$ is a **2D matrix rotation**, mixing both horizontal ($\\cos$) and vertical ($\\sin$) components! One single geometric chord comparison on the unit circle unlocks $\\cos(A - B)$, and from that single seed **every compound, double, triple, half, and sum-to-product identity in trigonometry** grows automatically!`,
    theoryHtml: `
      <h3>22.1 Complete Geometric Proof of the Master Seed: $\\cos(A - B)$</h3>
      <p>On the unit circle $x^2 + y^2 = 1$, mark points $P_1(\\cos A, \\sin A)$ and $P_2(\\cos B, \\sin B)$. The angle between $OP_1$ and $OP_2$ is $(A - B)$. Now rotate the entire sector rigidly by $-B$ so $P_2$ lands on $(1, 0)$ and $P_1$ lands on $Q(\\cos(A-B), \\sin(A-B))$. Rigid rotation preserves chord length ($P_1 P_2^2 = Q(1,0)^2$):</p>
      <ul>
        <li>$P_1 P_2^2 = (\\cos A - \\cos B)^2 + (\\sin A - \\sin B)^2 = (\\cos^2 A + \\sin^2 A) + (\\cos^2 B + \\sin^2 B) - 2(\\cos A\\cos B + \\sin A\\sin B) = 2 - 2(\\cos A\\cos B + \\sin A\\sin B)$</li>
        <li>$Q(1,0)^2 = (\\cos(A-B) - 1)^2 + (\\sin(A-B) - 0)^2 = \\cos^2(A-B) - 2\\cos(A-B) + 1 + \\sin^2(A-B) = 2 - 2\\cos(A-B)$</li>
      </ul>
      <p>Equating the two expressions and cancelling $2$ and $-2$ proves $\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$ for ALL real $A, B$! Replacing $B \\mapsto -B$ gives $\\cos(A+B)$, and replacing $A \\mapsto \\frac{\\pi}{2} - A$ gives $\\sin(A \\pm B)$!</p>

      <h3>22.2 Complete Family of Compound Angle Identities</h3>
      <div class="math-box">
        <div class="math-box-title">Sine, Cosine, Tangent & Cotangent of $A \\pm B$</div>
        $$\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B, \\qquad \\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B$$
        $$\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B, \\qquad \\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$$
        $$\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}, \\qquad \\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A\\tan B}$$
        $$\\cot(A + B) = \\frac{\\cot A\\cot B - 1}{\\cot B + \\cot A}, \\qquad \\cot(A - B) = \\frac{\\cot A\\cot B + 1}{\\cot B - \\cot A}$$
      </div>
      <p><em>Sign-Memory Rhythm:</em> <strong>Sine is Friendly</strong> (mixes $\\sin\\cos$, keeps the SAME sign $\\pm \\to \\pm$); <strong>Cosine is Selfish & Stubborn</strong> (groups $\\cos\\cos$ together first, FLIPS the sign $\\pm \\to \\mp$)!</p>

      <h3>22.3 Golden Shortcuts, $45^\\circ \\pm A$ & Difference-of-Squares Identities</h3>
      <div class="math-box">
        <div class="math-box-title">High-Speed Exam Identities</div>
        $$\\tan(45^\\circ + A) = \\frac{1 + \\tan A}{1 - \\tan A} = \\frac{\\cos A + \\sin A}{\\cos A - \\sin A}, \\qquad \\tan(45^\\circ - A) = \\frac{1 - \\tan A}{1 + \\tan A} = \\frac{\\cos A - \\sin A}{\\cos A + \\sin A}$$
        $$\\sin(A + B)\\sin(A - B) = \\sin^2 A - \\sin^2 B = \\cos^2 B - \\cos^2 A$$
        $$\\cos(A + B)\\cos(A - B) = \\cos^2 A - \\sin^2 B = \\cos^2 B - \\sin^2 A$$
        $$\\tan(A + B + C) = \\frac{\\tan A + \\tan B + \\tan C - \\tan A\\tan B\\tan C}{1 - (\\tan A\\tan B + \\tan B\\tan C + \\tan C\\tan A)}$$
      </div>
      <p><em>Corollary for Triangles ($A + B + C = 180^\\circ$):</em> Since $\\tan 180^\\circ = 0$, the numerator of $\\tan(A+B+C)$ must vanish: <strong>$\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$</strong>!</p>

      <h3>22.4 Exact Values of $15^\\circ$ ($\\frac{\\pi}{12}$) and $75^\\circ$ ($\\frac{5\\pi}{12}$)</h3>
      <p>Using $15^\\circ = 45^\\circ - 30^\\circ$ and $75^\\circ = 45^\\circ + 30^\\circ$:</p>
      <ul>
        <li>$\\sin 15^\\circ = \\cos 75^\\circ = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$, &nbsp; $\\cos 15^\\circ = \\sin 75^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$</li>
        <li>$\\tan 15^\\circ = \\cot 75^\\circ = 2 - \\sqrt{3}$, &nbsp; $\\tan 75^\\circ = \\cot 15^\\circ = 2 + \\sqrt{3}$</li>
      </ul>
    `,
    pitfalls: [
      "Flipping the denominator order in $\\cot(A - B)$: Notice $\\cot(A - B) = \\frac{\\cot A\\cot B + 1}{\\cot B - \\cot A}$ has $\\cot B - \\cot A$ (B MINUS A!) in the denominator because $\\cot$ decreases in Q-I!",
      "Writing $\\cos(A+B)\\cos(A-B) = \\cos^2 A - \\cos^2 B$: WRONG! Expanding $(\\cos A\\cos B - \\sin A\\sin B)(\\cos A\\cos B + \\sin A\\sin B) = \\cos^2 A(1 - \\sin^2 B) - (1 - \\cos^2 A)\\sin^2 B = \\cos^2 A - \\sin^2 B$ (one $\\cos^2$, one $\\sin^2$!)."
    ],
    examples: [
      {
        q: "Example 1: Given $\\sin A = \\frac{3}{5}$ ($A$ in Q-II) and $\\cos B = -\\frac{12}{13}$ ($B$ in Q-III), find $\\sin(A + B)$ and $\\cos(A - B)$.",
        sol: "First find missing partners WITH QUADRANT SIGNS! In Q-II, $\\cos A = -\\sqrt{1 - 9/25} = -\\frac{4}{5}$. In Q-III, $\\sin B = -\\sqrt{1 - 144/169} = -\\frac{5}{13}$. Now plug in: $\\sin(A+B) = (\\frac{3}{5})(-\\frac{12}{13}) + (-\\frac{4}{5})(-\\frac{5}{13}) = \\frac{-36 + 20}{65} = -\\frac{16}{65}$. Next, $\\cos(A-B) = (-\\frac{4}{5})(-\\frac{12}{13}) + (\\frac{3}{5})(-\\frac{5}{13}) = \\frac{48 - 15}{65} = \\frac{33}{65}$."
      },
      {
        q: "Example 2: Prove $\\tan 70^\\circ = \\tan 20^\\circ + 2\\tan 50^\\circ$ without tables.",
        sol: "Write $70^\\circ = 50^\\circ + 20^\\circ$: $\\tan 70^\\circ = \\frac{\\tan 50^\\circ + \\tan 20^\\circ}{1 - \\tan 50^\\circ\\tan 20^\\circ}$. Cross-multiply: $\\tan 70^\\circ - \\tan 70^\\circ\\tan 50^\\circ\\tan 20^\\circ = \\tan 50^\\circ + \\tan 20^\\circ$. Notice $70^\\circ + 20^\\circ = 90^\\circ \\implies \\tan 70^\\circ\\tan 20^\\circ = \\cot 20^\\circ\\tan 20^\\circ = 1$! Thus $\\tan 70^\\circ - \\tan 50^\\circ = \\tan 50^\\circ + \\tan 20^\\circ \\implies \\tan 70^\\circ = \\tan 20^\\circ + 2\\tan 50^\\circ$!"
      },
      {
        q: "Example 3: If $A + B = \\frac{\\pi}{4}$, prove neatly that $(1 + \\tan A)(1 + \\tan B) = 2$, and hence find $\\tan 22.5^\\circ$.",
        sol: "Take $\\tan$ of both sides: $\\tan(A+B) = \\tan\\frac{\\pi}{4} = 1 \\implies \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B} = 1 \\implies \\tan A + \\tan B + \\tan A\\tan B = 1$. Add $1$ to both sides and factor: $(1 + \\tan A)(1 + \\tan B) = 2$! Setting $A = B = 22.5^\\circ$ gives $(1 + \\tan 22.5^\\circ)^2 = 2 \\implies \\tan 22.5^\\circ = \\sqrt{2} - 1$ (since $22.5^\\circ \\in \\text{Q-I}$)."
      }
    ],
    quiz: [
      {
        q: "Simplify $\\frac{\\cos 11^\\circ + \\sin 11^\\circ}{\\cos 11^\\circ - \\sin 11^\\circ}$.",
        options: ["$\\tan 34^\\circ$", "$\\tan 56^\\circ$", "$\\tan 22^\\circ$", "$1$"],
        answer: 1,
        explanation: "Divide top and bottom by $\\cos 11^\\circ$: $\\frac{1 + \\tan 11^\\circ}{1 - \\tan 11^\\circ} = \\tan(45^\\circ + 11^\\circ) = \\tan 56^\\circ$."
      },
      {
        q: "If $\\tan\\alpha = \\frac{1}{2}$ and $\\tan\\beta = \\frac{1}{3}$ for acute angles $\\alpha, \\beta$, what is $\\alpha + \\beta$?",
        options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$75^\\circ$"],
        answer: 1,
        explanation: "$\\tan(\\alpha + \\beta) = \\frac{1/2 + 1/3}{1 - (1/2)(1/3)} = \\frac{5/6}{5/6} = 1$. Since $0 < \\alpha, \\beta < 45^\\circ$, $\\alpha + \\beta = 45^\\circ$."
      },
      {
        q: "Evaluate $\\sin^2 75^\\circ - \\sin^2 15^\\circ$.",
        options: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{2}}$", "$1$"],
        answer: 1,
        explanation: "By $\\sin^2 A - \\sin^2 B = \\sin(A+B)\\sin(A-B)$: $\\sin(90^\\circ)\\sin(60^\\circ) = 1 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}$."
      }
    ]
  },

  /* ========================================================================
     CHAPTER 23: DOUBLE-ANGLE FORMULAS
     ======================================================================== */
  {
    id: "ch-23-double-angle",
    grade: "Ch 23",
    tierId: "tier-5",
    tierColor: "#fb7185",
    title: "23. Double-Angle Formulas",
    subtitle: "Set $B = A$ to derive $\\sin 2A$, all 4 forms of $\\cos 2A$, $\\tan 2A$, rational $\\tan A$ formulas, power-reduction (linearizing) laws for Calculus, and nested radical cascades.",
    prerequisites: ["Chapter 22: Compound Angle Formulas"],
    tags: ["4 Forms of cos 2A", "Rational tan A Parameterization", "Power-Reduction Laws", "1 ± cos 2A & 1 ± sin 2A"],
    sandboxType: "compoundWaveLab",
    intuition: `What happens when both angles in $\\sin(A+B)$ and $\\cos(A+B)$ are identical ($B = A$)? You unlock the **Double-Angle Engine**—arguably the hardest-working formulas in all of Calculus, Physics, and Engineering! Need to integrate $\\int \\cos^2 x\\,dx$? Use $\\cos 2x$ to drop the square down to power $1$! Need to annihilate $1 + \\cos 2\\theta$ or $1 - \\cos 2\\theta$ inside a fraction or square root? Double-angle turns them into single clean squares in one line!`,
    theoryHtml: `
      <h3>23.1 Complete Derivations of $\\sin 2A$, $\\cos 2A$ (4 Forms), and $\\tan 2A$</h3>
      <p>Substitute $B = A$ directly into $\\sin(A+B)$, $\\cos(A+B)$, and $\\tan(A+B)$:</p>
      <div class="math-box">
        <div class="math-box-title">Core Double-Angle Identities</div>
        $$\\sin 2A = 2\\sin A\\cos A = \\frac{2\\tan A}{1 + \\tan^2 A}$$
        $$\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A = \\frac{1 - \\tan^2 A}{1 + \\tan^2 A}$$
        $$\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}, \\qquad \\cot 2A = \\frac{\\cot^2 A - 1}{2\\cot A}$$
      </div>
      <p><em>Proof of the Rational $\\tan A$ Forms:</em> Divide numerator and denominator of $2\\sin A\\cos A = \\frac{2\\sin A\\cos A}{\\cos^2 A + \\sin^2 A}$ and $\\frac{\\cos^2 A - \\sin^2 A}{\\cos^2 A + \\sin^2 A}$ by $\\cos^2 A$! Notice the crucial denominator difference: $\\sin 2A$ and $\\cos 2A$ have $1 + \\tan^2 A$ (because $|\\sin 2A|, |\\cos 2A| \\le 1$), while $\\tan 2A$ has $1 - \\tan^2 A$!</p>

      <h3>23.2 The "1-Killer" & Power-Reduction (Linearizing) Formulas</h3>
      <p>Rearranging $2\\cos^2 A - 1 = \\cos 2A$ and $1 - 2\\sin^2 A = \\cos 2A$ gives the single most important algebraic trick in trigonometry—<strong>destroying the number $1$ next to $\\cos 2A$ or $\\sin 2A$</strong>:</p>
      <div class="math-box">
        <div class="math-box-title">1-Elimination & Power-Lowering Identities</div>
        $$1 + \\cos 2A = 2\\cos^2 A, \\qquad 1 - \\cos 2A = 2\\sin^2 A, \\qquad \\frac{1 - \\cos 2A}{1 + \\cos 2A} = \\tan^2 A$$
        $$\\cos^2 A = \\frac{1 + \\cos 2A}{2}, \\qquad \\sin^2 A = \\frac{1 - \\cos 2A}{2}$$
        $$1 + \\sin 2A = (\\sin A + \\cos A)^2, \\qquad 1 - \\sin 2A = (\\sin A - \\cos A)^2$$
      </div>
      <p><em>Why $1 \\pm \\sin 2A$ is a Perfect Square:</em> Replace $1$ with $\\sin^2 A + \\cos^2 A$ and $\\sin 2A$ with $2\\sin A\\cos A$ to get $\\sin^2 A + \\cos^2 A \\pm 2\\sin A\\cos A = (\\sin A \\pm \\cos A)^2$!</p>

      <h3>23.3 Useful Special Combinations</h3>
      <ul>
        <li>$\\cot A - \\tan A = \\frac{\\cos^2 A - \\sin^2 A}{\\sin A\\cos A} = \\frac{\\cos 2A}{\\frac{1}{2}\\sin 2A} = 2\\cot 2A$</li>
        <li>$\\cot A + \\tan A = \\frac{\\cos^2 A + \\sin^2 A}{\\sin A\\cos A} = \\frac{1}{\\frac{1}{2}\\sin 2A} = 2\\operatorname{cosec} 2A$</li>
        <li>$\\frac{1 + \\sin 2A}{\\cos 2A} = \\frac{(\\cos A + \\sin A)^2}{\\cos^2 A - \\sin^2 A} = \\frac{\\cos A + \\sin A}{\\cos A - \\sin A} = \\tan\\!\\left(\\frac{\\pi}{4} + A\\right)$</li>
      </ul>
    `,
    pitfalls: [
      "Confusing $\\frac{2\\tan A}{1 + \\tan^2 A}$ ($= \\sin 2A$) with $\\frac{2\\tan A}{1 - \\tan^2 A}$ ($= \\tan 2A$): Check $A = 45^\\circ$! $\\sin 90^\\circ = \\frac{2(1)}{1 + 1} = 1$, whereas $\\tan 90^\\circ = \\frac{2(1)}{1 - 1}$ is undefined!",
      "Dropping absolute values in nested square roots: $\\sqrt{2 + 2\\cos 2\\theta} = \\sqrt{4\\cos^2\\theta} = 2|\\cos\\theta|$—always check the quadrant of $\\theta$ before removing $|\\cdot|$!"
    ],
    examples: [
      {
        q: "Example 1: If $\\tan A = \\frac{3}{4}$, find the exact values of $\\sin 2A$, $\\cos 2A$, and $\\tan 2A$ without finding $A$ or drawing a triangle.",
        sol: "Use the rational $\\tan A$ formulas! $\\sin 2A = \\frac{2(3/4)}{1 + 9/16} = \\frac{3/2}{25/16} = \\frac{24}{25}$; $\\cos 2A = \\frac{1 - 9/16}{1 + 9/16} = \\frac{7}{25}$; $\\tan 2A = \\frac{2(3/4)}{1 - 9/16} = \\frac{3/2}{7/16} = \\frac{24}{7}$! (Notice $(7, 24, 25)$ is a Pythagorean triple!)"
      },
      {
        q: "Example 2: Prove that $\\sqrt{2 + \\sqrt{2 + \\sqrt{2 + 2\\cos 8\\theta}}} = 2\\cos\\theta$ for $0 < \\theta < \\frac{\\pi}{8}$.",
        sol: "Since $0 < 8\\theta < \\pi$, all intermediate angles $4\\theta, 2\\theta, \\theta \\in (0, \\frac{\\pi}{2})$ where cosine is positive! Peel from the inside out using $2 + 2\\cos(2u) = 4\\cos^2 u$: Innermost $\\sqrt{2 + 2\\cos 8\\theta} = \\sqrt{4\\cos^2 4\\theta} = 2\\cos 4\\theta$. Middle $\\sqrt{2 + 2\\cos 4\\theta} = 2\\cos 2\\theta$. Outermost $\\sqrt{2 + 2\\cos 2\\theta} = 2\\cos\\theta$!"
      },
      {
        q: "Example 3: Express $\\cos 4\\theta$ purely as a polynomial in $\\cos\\theta$ (the 4th Chebyshev Polynomial $T_4$).",
        sol: "Apply double-angle twice: $\\cos 4\\theta = 2\\cos^2(2\\theta) - 1 = 2(2\\cos^2\\theta - 1)^2 - 1 = 2(4\\cos^4\\theta - 4\\cos^2\\theta + 1) - 1 = 8\\cos^4\\theta - 8\\cos^2\\theta + 1$."
      }
    ],
    quiz: [
      {
        q: "Simplify $\\frac{\\sin 2\\theta}{1 + \\cos 2\\theta}$.",
        options: ["$\\cot\\theta$", "$\\tan\\theta$", "$\\tan 2\\theta$", "$\\sin\\theta$"],
        answer: 1,
        explanation: "Use $1 + \\cos 2\\theta = 2\\cos^2\\theta$ and $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$: $\\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta} = \\tan\\theta$."
      },
      {
        q: "Evaluate $2\\cos^2 15^\\circ - 1$.",
        options: ["$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{\\sqrt{2}}$", "$\\sqrt{3}$"],
        answer: 1,
        explanation: "By $\\cos 2A = 2\\cos^2 A - 1$, $2\\cos^2 15^\\circ - 1 = \\cos(30^\\circ) = \\frac{\\sqrt{3}}{2}$!"
      },
      {
        q: "If $\\sin\\theta + \\cos\\theta = \\frac{1}{5}$, what is $\\sin 2\\theta$?",
        options: ["$\\frac{24}{25}$", "$-\\frac{24}{25}$", "$-\\frac{12}{25}$", "$\\frac{1}{25}$"],
        answer: 1,
        explanation: "Square both sides: $(\\sin\\theta + \\cos\\theta)^2 = \\frac{1}{25} \\implies 1 + \\sin 2\\theta = \\frac{1}{25} \\implies \\sin 2\\theta = -\\frac{24}{25}$."
      }
    ]
  }
];
