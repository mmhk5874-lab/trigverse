/* ==========================================================================
   ArithVerse — Complete Beginning-to-Highest-Level Arithmetic Curriculum
   7 Progressive Realms • 36 Chapters • Formula Vault • Dynamic 15-MCQ Engine
   ========================================================================== */

(function () {
  const ARITH_TIERS = [
    {
      id: "arith-tier-1",
      name: "Realm 1: Number Genesis & Core Operations (Very Beginning)",
      animal: "Blossom Ant",
      shortTag: "Number Genesis",
      img: "animals/ant.png",
      side: "side-left",
      quote: "Every mathematical skyscraper begins with digits 0–9, place value, and the four core operations!"
    },
    {
      id: "arith-tier-2",
      name: "Realm 2: BODMAS, Integers, Primes & GCD/LCM",
      animal: "Rose-Flame Fox",
      shortTag: "Integers & Primes",
      img: "animals/fox.png",
      side: "side-right",
      quote: "Master order of operations, negative numbers, divisibility hacks, primes, HCF & LCM!"
    },
    {
      id: "arith-tier-3",
      name: "Realm 3: Fractions, Decimals & Error Bounds",
      animal: "Sakura Panda",
      shortTag: "Fraction Forge",
      img: "animals/panda.png",
      side: "side-left",
      quote: "Turn fractions, recurring decimals, significant figures & estimation bounds into pure intuition!"
    },
    {
      id: "arith-tier-4",
      name: "Realm 4: Ratios, Proportions, Percentages & Finance",
      animal: "Crimson Sky Eagle",
      shortTag: "Ratio & Percent",
      img: "animals/eagle.png",
      side: "side-right",
      quote: "Conquer ratios, direct/inverse proportions, work-time rates, percentages, profit/loss & compound interest!"
    },
    {
      id: "arith-tier-5",
      name: "Realm 5: Exponents, Roots, Surds & Logarithms",
      animal: "Neon-Pink Tiger",
      shortTag: "Powers & Surds",
      img: "animals/tiger.png",
      side: "side-left",
      quote: "Command index laws, scientific notation, fractional roots, surd denesting & logarithmic arithmetic!"
    },
    {
      id: "arith-tier-6",
      name: "Realm 6: Means, Mixtures, Progressions, Bases & Moduli",
      animal: "Magenta Shadow Wolf",
      shortTag: "Bases & Moduli",
      img: "animals/wolf.png",
      side: "side-right",
      quote: "AM-GM-HM, alligation mixtures, power series, binary/hex bases & modular remainder cyclicity!"
    },
    {
      id: "arith-tier-7",
      name: "Realm 7: Olympiad & Grandmaster Arithmetic Synthesis",
      animal: "Mr.mmhk Pink Crest",
      shortTag: "Olympiad Apex",
      img: "logo.png?v=44",
      side: "side-left",
      quote: "Highest Pinnacle! Telescoping sums/products, continued fractions, Vedic speed & Grandmaster Synthesis!"
    }
  ];

  const RAW_CHAPTERS = [
    // ==================== REALM 1 (Ch 1–5) ====================
    {
      id: "ar-ch-1",
      tierId: "arith-tier-1",
      title: "Counting, Place Value & The Number Line",
      subtitle: "Digits 0–9, Base-10 positional weights, expanded form, and ordering whole numbers.",
      theory:
        "All numbers in our everyday decimal system are built from ten digits ($0,1,2,3,4,5,6,7,8,9$). Every shift one place to the left multiplies a digit's value by $10$. On the horizontal number line, numbers always increase from left to right.",
      formulas: [
        { name: "Base-10 Expanded Form", tex: "$$\\overline{d_3 d_2 d_1 d_0} = d_3\\cdot 10^3 + d_2\\cdot 10^2 + d_1\\cdot 10^1 + d_0\\cdot 10^0$$" },
        { name: "Face vs Place Value", tex: "$$\\text{Place Value of digit } d \\text{ at position } k = d \\times 10^k$$" }
      ],
      example: {
        q: "Find the place value difference of the two 7s in $74,072$.",
        steps: "Left $7$ is in the ten-thousands place ($70,000$). Right $7$ is in the tens place ($70$). Difference $= 70,000 - 70 = 69,930$."
      },
      quiz: [
        { q: "What is the place value of 6 in $46,829$?", opts: ["$6,000$", "$600$", "$60,000$", "$6$"], ans: 0 },
        { q: "Write $5\\times 10^3 + 4\\times 10^1 + 9$ in standard form:", opts: ["$5,049$", "$5,409$", "$549$", "$50,049$"], ans: 0 },
        { q: "Which symbol makes $30,908 \\;\\square\\; 30,899$ true?", opts: ["$>$", "$<$", "$=$", "$\\le$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-2",
      tierId: "arith-tier-1",
      title: "Addition, Carrying & Mental Compensation",
      subtitle: "Column addition with carrying, commutative/associative laws, and fast left-to-right mental sums.",
      theory:
        "Addition combines quantities together. Whenever a column sum reaches $10$ or more, we keep the units digit and **carry** the tens digit into the next column. For ultra-fast mental addition, round numbers near $100$ (e.g. $+98 = +100 - 2$).",
      formulas: [
        { name: "Commutative & Associative Laws", tex: "$$a + b = b + a, \\qquad (a + b) + c = a + (b + c)$$" },
        { name: "Compensation Trick", tex: "$$N + 98 = (N + 100) - 2, \\qquad N + 199 = (N + 200) - 1$$" }
      ],
      example: {
        q: "Compute $467 + 298$ mentally in two seconds.",
        steps: "Replace $+298$ with $+300 - 2$: $467 + 300 = 767$, then $767 - 2 = 765$."
      },
      quiz: [
        { q: "Calculate $584 + 399$ mentally:", opts: ["$983$", "$985$", "$883$", "$973$"], ans: 0 },
        { q: "Which property states $(17 + 65) + 35 = 17 + (65 + 35)$?", opts: ["Associative Law", "Distributive Law", "Inverse Law", "Zero Law"], ans: 0 },
        { q: "Find $1,476 + 2,859$:", opts: ["$4,335$", "$4,235$", "$4,325$", "$4,435$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-3",
      tierId: "arith-tier-1",
      title: "Subtraction, Borrowing & 10s Complements",
      subtitle: "Regrouping across zeros, constant-difference shifting, and All-from-9-Last-from-10.",
      theory:
        "Subtraction finds the gap or distance between two numbers. Shifting both numbers by the same amount keeps their difference identical ($a - b = (a+k) - (b+k)$)—making borrowing across zeros effortless!",
      formulas: [
        { name: "Constant-Difference Shift", tex: "$$a - b = (a + k) - (b + k) \\quad \\text{e.g. } 1000 - 463 = 999 - 462 = 537$$" },
        { name: "Addition Verification", tex: "$$a - b = c \\iff c + b = a$$" }
      ],
      example: {
        q: "Evaluate $10,000 - 3,748$ instantly without borrowing.",
        steps: "Subtract $1$ from both: $9,999 - 3,747 = 6,252$ (All from 9, last digit from 10!)."
      },
      quiz: [
        { q: "Compute $1,000 - 647$:", opts: ["$353$", "$363$", "$453$", "$343$"], ans: 0 },
        { q: "If $x - 245 = 580$, what is $x$?", opts: ["$825$", "$335$", "$725$", "$815$"], ans: 0 },
        { q: "Find $5,002 - 1,997$ using constant shift ($+3$):", opts: ["$3,005$", "$2,995$", "$3,015$", "$3,009$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-4",
      tierId: "arith-tier-1",
      title: "Multiplication Tables, Area Model & Speed Hacks",
      subtitle: "Distributive box model, powers of 10, and instant tricks for ×5, ×9, ×11, and ×25.",
      theory:
        "Multiplication is repeated scaling and geometric rectangle area. By splitting numbers using the Distributive Law $a(b+c) = ab + ac$, large products turn into tiny mental pieces!",
      formulas: [
        { name: "Distributive Law", tex: "$$a(b + c) = ab + ac, \\qquad (a+b)(c+d) = ac + ad + bc + bd$$" },
        { name: "Speed Multipliers", tex: "$$N\\times 5 = \\frac{10N}{2}, \\qquad N\\times 25 = \\frac{100N}{4}, \\qquad \\overline{ab}\\times 11 = a\\; (a+b)\\; b$$" }
      ],
      example: {
        q: "Calculate $36 \\times 25$ and $43 \\times 11$ mentally.",
        steps: "$36 \\times 25 = (36 \\div 4) \\times 100 = 900$. And $43 \\times 11$: put $4+3=7$ in the middle $\\implies 473$."
      },
      quiz: [
        { q: "What is $48 \\times 25$?", opts: ["$1,200$", "$1,100$", "$1,250$", "$960$"], ans: 0 },
        { q: "What is $54 \\times 11$?", opts: ["$594$", "$544$", "$604$", "$584$"], ans: 0 },
        { q: "Evaluate $18 \\times 15$ using $18\\times(10+5)$:", opts: ["$270$", "$260$", "$280$", "$240$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-5",
      tierId: "arith-tier-1",
      title: "Division, Remainders & Euclidean Quotient Law",
      subtitle: "Equal sharing, long division, zero-division ban, and Dividend = Divisor × Quotient + Remainder.",
      theory:
        "Every integer division of $N$ by a positive divisor $d$ produces a unique integer quotient $q$ and remainder $r$ strictly smaller than $d$. Division by $0$ is undefined because no number multiplied by $0$ can recover a non-zero dividend.",
      formulas: [
        { name: "Euclidean Division Identity", tex: "$$N = d \\cdot q + r \\qquad \\text{with } 0 \\le r < d$$" },
        { name: "Halving Chain", tex: "$$\\div 4 = (\\div 2 \\text{ twice}), \\qquad \\div 8 = (\\div 2 \\text{ three times})$$" }
      ],
      example: {
        q: "When $N$ is divided by $14$, the quotient is $12$ and remainder is $9$. Find $N$.",
        steps: "$N = 14 \\times 12 + 9 = 168 + 9 = 177$."
      },
      quiz: [
        { q: "Find the remainder when $125$ is divided by $9$:", opts: ["$8$", "$7$", "$6$", "$1$"], ans: 0 },
        { q: "If $N = 17q + 11$ and $q = 6$, what is $N$?", opts: ["$113$", "$102$", "$119$", "$108$"], ans: 0 },
        { q: "What is the largest possible remainder when dividing by $23$?", opts: ["$22$", "$23$", "$21$", "$1$"], ans: 0 }
      ]
    },

    // ==================== REALM 2 (Ch 6–10) ====================
    {
      id: "ar-ch-6",
      tierId: "arith-tier-2",
      title: "BODMAS / PEMDAS & Nested Brackets",
      subtitle: "Brackets, Orders/Exponents, Division & Multiplication (left-to-right), Addition & Subtraction (left-to-right).",
      theory:
        "To guarantee everyone in the world gets the exact same value for an expression, we evaluate innermost brackets first, then powers/roots, then multiplication & division **equally from left to right**, and finally addition & subtraction **from left to right**.",
      formulas: [
        { name: "Priority Hierarchy", tex: "$$\\text{Brackets } ()[]\\{\\} \\longrightarrow \\text{Orders } x^n,\\sqrt{x} \\longrightarrow \\times,\\div \\text{ (L}\\to\\text{R)} \\longrightarrow +,- \\text{ (L}\\to\\text{R)}$$" }
      ],
      example: {
        q: "Evaluate $24 \\div 4 \\times 3 + 2^3 - (9 - 5)$.",
        steps: "Bracket: $(9-5)=4$. Power: $2^3=8$. Left-to-right $\\div,\\times$: $24\\div 4 = 6$, then $6\\times 3 = 18$. Finally $18 + 8 - 4 = 22$."
      },
      quiz: [
        { q: "Evaluate $18 \\div 3 \\times 2$:", opts: ["$12$", "$3$", "$9$", "$6$"], ans: 0 },
        { q: "Evaluate $40 - 3 \\times (2 + 3^2)$:", opts: ["$7$", "$25$", "$13$", "$407$"], ans: 0 },
        { q: "Evaluate $5 + [16 - (4 \\times 3 - 2)] \\div 2$:", opts: ["$8$", "$11$", "$7$", "$6$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-7",
      tierId: "arith-tier-2",
      title: "Negative Numbers, Directed Integers & Absolute Value",
      subtitle: "Adding, subtracting, multiplying, and dividing signed integers in $\\mathbb{Z}$.",
      theory:
        "Negative integers extend the number line below zero for temperatures, debts, and elevations. Subtracting a negative is moving right ($a - (-b) = a + b$), and multiplying two negatives flips direction twice back to positive!",
      formulas: [
        { name: "Sign Rules & Modulus", tex: "$$(-a)(-b) = +ab, \\qquad a - (-b) = a + b, \\qquad |x| = \\begin{cases}x & x\\ge 0\\\\ -x & x<0\\end{cases}$$" }
      ],
      example: {
        q: "Compute $(-12) - (-19) + (-4)\\times(-3)$.",
        steps: "$(-12) + 19 = 7$, and $(-4)\\times(-3) = +12$. Sum $= 7 + 12 = 19$."
      },
      quiz: [
        { q: "Evaluate $-15 - (-23)$:", opts: ["$8$", "$-38$", "$-8$", "$38$"], ans: 0 },
        { q: "Evaluate $(-3)^3 + (-2)^4$:", opts: ["$-11$", "$43$", "$-43$", "$11$"], ans: 0 },
        { q: "What is $|-18 + 5| - |4 - 11|$?", opts: ["$6$", "$-6$", "$20$", "$-20$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-8",
      tierId: "arith-tier-2",
      title: "Divisibility Rules (2 to 13) & Digital Roots",
      subtitle: "Instant mental divisibility tests for 2, 3, 4, 5, 6, 8, 9, 11, and casting out nines.",
      theory:
        "Because $10 \\equiv 1 \\pmod 9$, a number leaves the exact same remainder mod $9$ (and mod $3$) as the **sum of its digits**! And because $10 \\equiv -1 \\pmod{11}$, divisibility by $11$ checks the alternating sum of digits.",
      formulas: [
        { name: "Core Divisibility Tests", tex: "$$3,9:\\; \\sum d_i; \\qquad 4:\\text{ last }2\\text{ digits}; \\qquad 8:\\text{ last }3\\text{ digits}; \\qquad 11:\\; d_0 - d_1 + d_2 - \\cdots$$" }
      ],
      example: {
        q: "Find digit $k$ so that $52k4$ is divisible by $9$.",
        steps: "Digit sum $= 5 + 2 + k + 4 = 11 + k$. Nearest multiple of $9$ is $18 \\implies k = 7$."
      },
      quiz: [
        { q: "For what digit $x$ is $73x2$ divisible by $9$?", opts: ["$6$", "$5$", "$4$", "$7$"], ans: 0 },
        { q: "Which of these numbers is divisible by $11$?", opts: ["$8,294$", "$8,295$", "$7,132$", "$5,413$"], ans: 0 },
        { q: "A number is divisible by $6$ if and only if it is divisible by:", opts: ["$2$ and $3$", "$3$ and $4$", "$2$ and $4$", "$6$ and $9$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-9",
      tierId: "arith-tier-2",
      title: "Prime Numbers, Factor Trees & Counting Divisors",
      subtitle: "Fundamental Theorem of Arithmetic and the exact formula $\\tau(N)$ for total factors.",
      theory:
        "Prime numbers ($2, 3, 5, 7, 11, 13, \\dots$) have exactly two positive divisors ($1$ and themselves; note $1$ is neither prime nor composite, and $2$ is the only even prime). Every integer $N > 1$ factors uniquely into prime powers!",
      formulas: [
        { name: "Prime Factorization & Divisor Count", tex: "$$N = p_1^{a_1} p_2^{a_2}\\cdots p_k^{a_k} \\implies \\tau(N) = (a_1+1)(a_2+1)\\cdots(a_k+1)$$" }
      ],
      example: {
        q: "How many positive divisors does $360$ have?",
        steps: "$360 = 2^3 \\times 3^2 \\times 5^1 \\implies \\tau(360) = (3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$ divisors."
      },
      quiz: [
        { q: "How many positive factors does $72 = 2^3 \\times 3^2$ have?", opts: ["$12$", "$6$", "$9$", "$18$"], ans: 0 },
        { q: "How many prime numbers exist between $1$ and $20$?", opts: ["$8$", "$9$", "$7$", "$10$"], ans: 0 },
        { q: "Which class of positive integers always has an ODD number of divisors?", opts: ["Perfect squares", "Prime numbers", "Multiples of 4", "Cubes"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-10",
      tierId: "arith-tier-2",
      title: "HCF (GCD), LCM & Synchronized Cycle Problems",
      subtitle: "Euclidean GCD algorithm, prime-exponent min/max rules, and GCD × LCM = a × b.",
      theory:
        "The **GCD (HCF)** takes minimum prime exponents (splitting into largest equal groups), while **LCM** takes maximum prime exponents (finding when cycles repeat together). By Euclid's algorithm, $\\gcd(a,b) = \\gcd(b, a \\bmod b)$!",
      formulas: [
        { name: "Golden GCD–LCM Identity", tex: "$$\\gcd(a, b) \\times \\operatorname{lcm}(a, b) = a \\times b \\quad (a,b > 0)$$" },
        { name: "Euclidean Step", tex: "$$\\gcd(a, b) = \\gcd(b,\\; a \\bmod b)$$" }
      ],
      example: {
        q: "Two bells toll every $18$s and $24$s. If they toll together at $t=0$, when next?",
        steps: "$\\operatorname{lcm}(18, 24) = \\operatorname{lcm}(2\\cdot 3^2,\\; 2^3\\cdot 3) = 2^3\\cdot 3^2 = 72$ seconds."
      },
      quiz: [
        { q: "If $\\gcd(a,b)=12$ and $\\operatorname{lcm}(a,b)=180$, and $a=36$, find $b$:", opts: ["$60$", "$48$", "$72$", "$45$"], ans: 0 },
        { q: "Find $\\gcd(84, 126)$:", opts: ["$42$", "$21$", "$14$", "$63$"], ans: 0 },
        { q: "Find $\\operatorname{lcm}(12, 15, 20)$:", opts: ["$60$", "$120$", "$30$", "$180$"], ans: 0 }
      ]
    },

    // ==================== REALM 3 (Ch 11–16) ====================
    {
      id: "ar-ch-11",
      tierId: "arith-tier-3",
      title: "Proper, Improper & Mixed Fractions + Cross-Comparison",
      subtitle: "Simplifying to lowest terms via GCD, mixed ↔ improper conversion, and instant size comparison.",
      theory:
        "A fraction $\\frac{a}{b}$ ($b \\neq 0$) represents $a$ parts of size $\\frac{1}{b}$. Dividing top and bottom by $\\gcd(a,b)$ puts it in lowest terms. To compare two positive fractions instantly, cross-multiply!",
      formulas: [
        { name: "Mixed ↔ Improper & Cross-Compare", tex: "$$q\\frac{r}{b} = \\frac{qb+r}{b}, \\qquad \\frac{a}{b} > \\frac{c}{d} \\iff ad > bc \\quad (b,d>0)$$" }
      ],
      example: {
        q: "Which is larger: $\\frac{7}{11}$ or $\\frac{9}{14}$?",
        steps: "Cross-multiply: $7\\times 14 = 98$ vs $9\\times 11 = 99$. Since $98 < 99$, $\\frac{9}{14}$ is larger!"
      },
      quiz: [
        { q: "Convert $4\\frac{5}{7}$ to an improper fraction:", opts: ["$\\frac{33}{7}$", "$\\frac{29}{7}$", "$\\frac{27}{7}$", "$\\frac{35}{7}$"], ans: 0 },
        { q: "Simplify $\\frac{84}{126}$ to lowest terms:", opts: ["$\\frac{2}{3}$", "$\\frac{3}{4}$", "$\\frac{4}{7}$", "$\\frac{6}{9}$"], ans: 0 },
        { q: "Which fraction is greatest?", opts: ["$\\frac{5}{7}$", "$\\frac{7}{10}$", "$\\frac{2}{3}$", "$\\frac{13}{20}$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-12",
      tierId: "arith-tier-3",
      title: "Adding & Subtracting Fractions (LCD & Butterfly)",
      subtitle: "Least Common Denominator mastery and rapid two-fraction butterfly addition.",
      theory:
        "You can only add or subtract slices of the **same size** (common denominator). Using $L = \\operatorname{lcm}(b, d)$ keeps numbers as small and clean as possible!",
      formulas: [
        { name: "Butterfly & LCD Formula", tex: "$$\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}, \\qquad \\text{Best Denominator} = \\operatorname{lcm}(b,d)$$" }
      ],
      example: {
        q: "Compute $\\frac{5}{12} + \\frac{7}{18}$.",
        steps: "$\\operatorname{lcm}(12,18)=36$: $\\frac{5\\times 3}{36} + \\frac{7\\times 2}{36} = \\frac{15+14}{36} = \\frac{29}{36}$."
      },
      quiz: [
        { q: "Compute $\\frac{3}{8} + \\frac{5}{12}$:", opts: ["$\\frac{19}{24}$", "$\\frac{8}{20}$", "$\\frac{17}{24}$", "$\\frac{11}{12}$"], ans: 0 },
        { q: "Compute $3\\frac{1}{4} - 1\\frac{2}{3}$:", opts: ["$1\\frac{7}{12}$", "$2\\frac{5}{12}$", "$1\\frac{5}{12}$", "$1\\frac{1}{12}$"], ans: 0 },
        { q: "Evaluate $1 - \\frac{1}{2} - \\frac{1}{3} - \\frac{1}{6}$:", opts: ["$0$", "$\\frac{1}{6}$", "$\\frac{1}{12}$", "$\\frac{1}{3}$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-13",
      tierId: "arith-tier-3",
      title: "Multiplying, Dividing & Compound Fractions",
      subtitle: "Cross-cancelling before multiplying, Keep-Change-Flip reciprocals, and stacked fractions.",
      theory:
        "Always **cross-cancel common factors** diagonally before multiplying numerators and denominators! Dividing by $\\frac{c}{d}$ is identical to multiplying by its reciprocal $\\frac{d}{c}$.",
      formulas: [
        { name: "Product & Reciprocal Division", tex: "$$\\frac{a}{b}\\times\\frac{c}{d} = \\frac{ac}{bd}, \\qquad \\frac{a}{b}\\div\\frac{c}{d} = \\frac{a}{b}\\times\\frac{d}{c} = \\frac{ad}{bc}$$" }
      ],
      example: {
        q: "Simplify $\\frac{14}{15} \\div \\frac{21}{25}$.",
        steps: "$\\frac{14}{15} \\times \\frac{25}{21} = \\frac{2}{3} \\times \\frac{5}{3} = \\frac{10}{9}$ (cancelled $7$ and $5$)."
      },
      quiz: [
        { q: "Evaluate $\\frac{9}{16} \\times \\frac{24}{27}$:", opts: ["$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{2}{3}$", "$\\frac{3}{8}$"], ans: 0 },
        { q: "Evaluate $\\frac{5}{6} \\div \\frac{15}{18}$:", opts: ["$1$", "$\\frac{25}{36}$", "$\\frac{3}{2}$", "$\\frac{2}{3}$"], ans: 0 },
        { q: "Simplify $\\dfrac{1 + \\frac{1}{3}}{1 - \\frac{1}{3}}$:", opts: ["$2$", "$\\frac{4}{3}$", "$\\frac{1}{2}$", "$3$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-14",
      tierId: "arith-tier-3",
      title: "Decimal Place Value & All Four Operations",
      subtitle: "Tenths to millionths, decimal alignment, decimal products, and whole-divisor shifting.",
      theory:
        "Decimals are fractions whose denominators are powers of $10$ ($0.37 = \\frac{37}{100}$). When multiplying decimals, sum the count of decimal places; when dividing, multiply both numbers by $10^k$ so the divisor becomes an integer!",
      formulas: [
        { name: "Decimal Shift Rule", tex: "$$\\frac{a}{0.04} = \\frac{100a}{4} = 25a, \\qquad 10^{-k} = \\underbrace{0.00\\dots 01}_{k\\text{ places}}$$" }
      ],
      example: {
        q: "Compute $3.6 \\div 0.09$ and $0.12 \\times 0.04$.",
        steps: "$3.6 \\div 0.09 = 360 \\div 9 = 40$. And $12\\times 4 = 48$ with $2+2=4$ decimal places $\\implies 0.0048$."
      },
      quiz: [
        { q: "Compute $0.15 \\times 0.06$:", opts: ["$0.009$", "$0.09$", "$0.9$", "$0.0009$"], ans: 0 },
        { q: "Compute $7.2 \\div 0.08$:", opts: ["$90$", "$9$", "$0.9$", "$900$"], ans: 0 },
        { q: "Evaluate $12.4 + 0.87 - 3.09$:", opts: ["$10.18$", "$10.28$", "$9.18$", "$10.08$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-15",
      tierId: "arith-tier-3",
      title: "Terminating vs Recurring Decimals ($0.\\overline{ab}$)",
      subtitle: "Prime denominator test $2^m 5^n$ and instant $9$s/$90$s fraction conversion formulas.",
      theory:
        "A reduced fraction $\\frac{p}{q}$ terminates **if and only if** the prime factors of $q$ are solely $2$s and $5$s ($q = 2^m 5^n$). Otherwise it repeats forever! Pure repeating blocks divide by $99\\dots9$.",
      formulas: [
        { name: "Recurring Decimal Shortcut", tex: "$$0.\\overline{d_1 d_2\\dots d_k} = \\frac{\\overline{d_1 d_2\\dots d_k}}{\\underbrace{99\\dots 9}_{k}}, \\qquad 0.a\\overline{bc} = \\frac{abc - a}{990}$$" }
      ],
      example: {
        q: "Convert $0.\\overline{27}$ and $0.1\\overline{6}$ into simplified fractions.",
        steps: "$0.\\overline{27} = \\frac{27}{99} = \\frac{3}{11}$. And $0.1\\overline{6} = \\frac{16-1}{90} = \\frac{15}{90} = \\frac{1}{6}$."
      },
      quiz: [
        { q: "Express $0.\\overline{36}$ as a simplified fraction:", opts: ["$\\frac{4}{11}$", "$\\frac{9}{25}$", "$\\frac{12}{33}$", "$\\frac{36}{100}$"], ans: 0 },
        { q: "Express $0.2\\overline{7}$ as a simplified fraction:", opts: ["$\\frac{5}{18}$", "$\\frac{27}{99}$", "$\\frac{7}{25}$", "$\\frac{13}{45}$"], ans: 0 },
        { q: "Which fraction produces a terminating decimal?", opts: ["$\\frac{13}{40}$", "$\\frac{7}{12}$", "$\\frac{5}{14}$", "$\\frac{11}{30}$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-16",
      tierId: "arith-tier-3",
      title: "Significant Figures, Rounding & Error Bounds",
      subtitle: "Upper/lower bounds $x \\pm \\frac{1}{2}\\text{unit}$ and worst-case interval arithmetic.",
      theory:
        "If a measurement $x$ is rounded to the nearest unit $u$, its true value lies in $[x - \\frac{u}{2},\\; x + \\frac{u}{2})$. For the maximum bound of $A / B$, divide Upper$(A)$ by Lower$(B)$!",
      formulas: [
        { name: "Measurement Error Interval", tex: "$$x_{\\text{lower}} \\le x_{\\text{true}} < x_{\\text{upper}}, \\qquad \\max\\left(\\frac{A}{B}\\right) = \\frac{A_{\\text{upper}}}{B_{\\text{lower}}}$$" }
      ],
      example: {
        q: "Round $0.004786$ to $3$ significant figures.",
        steps: "Leading zeros don't count; the first three sig figs are $4,7,8$, followed by $6 \\ge 5 \\implies 0.00479$."
      },
      quiz: [
        { q: "Round $0.05086$ to $3$ significant figures:", opts: ["$0.0509$", "$0.051$", "$0.0508$", "$0.050$"], ans: 0 },
        { q: "A length is $12\\text{ cm}$ to the nearest $\\text{cm}$. Its lower bound is:", opts: ["$11.5\\text{ cm}$", "$11.9\\text{ cm}$", "$11\\text{ cm}$", "$12.5\\text{ cm}$"], ans: 0 },
        { q: "How many significant figures are in $40.070$?", opts: ["$5$", "$4$", "$3$", "$2$"], ans: 0 }
      ]
    },

    // ==================== REALM 4 (Ch 17–22) ====================
    {
      id: "ar-ch-17",
      tierId: "arith-tier-4",
      title: "Ratios, Chaining $a:b:c$ & Proportional Sharing",
      subtitle: "Unifying multi-part ratios and splitting totals into exact shares.",
      theory:
        "To divide a total $T$ in the ratio $a : b : c$, count total parts $S = a+b+c$. Each single part is worth $\\frac{T}{S}$! To link $a:b$ with $b:c$, make the bridge variable $b$ equal in both.",
      formulas: [
        { name: "Ratio Partition Formula", tex: "$$\\text{Share}_a = \\frac{a}{a+b+c}\\times T$$" }
      ],
      example: {
        q: "If $A:B = 2:3$ and $B:C = 4:5$, find $A:B:C$.",
        steps: "Match $B$ to $\\operatorname{lcm}(3,4)=12$: $A:B = 8:12$ and $B:C = 12:15 \\implies A:B:C = 8:12:15$."
      },
      quiz: [
        { q: "Divide $\\$350$ in the ratio $2 : 5$. The larger share is:", opts: ["$\\$250$", "$\\$100$", "$\\$280$", "$\\$200$"], ans: 0 },
        { q: "If $x:y = 3:4$ and $y:z = 6:7$, then $x:y:z =$ ?", opts: ["$9:12:14$", "$3:6:7$", "$18:24:21$", "$9:12:7$"], ans: 0 },
        { q: "Two numbers are in ratio $5:8$ and differ by $27$. The smaller number is:", opts: ["$45$", "$72$", "$35$", "$40$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-18",
      tierId: "arith-tier-4",
      title: "Direct, Inverse & Joint Proportions (MDH Rule)",
      subtitle: "Scaling laws $y=kx$, $xy=k$, and the universal Workers–Days–Hours–Work formula.",
      theory:
        "In **Direct Proportion**, $\\frac{y}{x} = k$ (more items $\\implies$ more cost). In **Inverse Proportion**, $x\\cdot y = k$ (more workers $\\implies$ fewer days!).",
      formulas: [
        { name: "Universal MDH / W Chain Rule", tex: "$$\\frac{M_1 \\times D_1 \\times H_1}{W_1} = \\frac{M_2 \\times D_2 \\times H_2}{W_2}$$" }
      ],
      example: {
        q: "$12$ workers build a wall in $15$ days. How long do $20$ workers take?",
        steps: "Inverse proportion: $12 \\times 15 = 20 \\times D_2 \\implies D_2 = \\frac{180}{20} = 9$ days."
      },
      quiz: [
        { q: "If $15$ men finish a job in $8$ days, how many days will $10$ men take?", opts: ["$12$", "$6$", "$10$", "$15$"], ans: 0 },
        { q: "If $y$ is inversely proportional to $x$, and $y=6$ when $x=8$, find $y$ when $x=12$:", opts: ["$4$", "$9$", "$3$", "$16$"], ans: 0 },
        { q: "$6$ pumps fill $2$ tanks in $4$ hours. How many hours for $8$ pumps to fill $4$ tanks?", opts: ["$6$", "$4$", "$8$", "$3$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-19",
      tierId: "arith-tier-4",
      title: "Work Rates, Pipes & Average Speed Traps",
      subtitle: "Reciprocal work rates $\\frac{1}{A}+\\frac{1}{B}$, inlet/outlet cisterns, and equal-distance harmonic speed.",
      theory:
        "Never average speeds arithmetically over equal distances! Round-trip average speed is the **Harmonic Mean** $\\frac{2v_1 v_2}{v_1 + v_2}$. For combined work, add **rates** ($\\frac{1}{t_1} + \\frac{1}{t_2} = \\frac{1}{T}$), not times!",
      formulas: [
        { name: "Combined Work & Round-Trip Speed", tex: "$$T_{\\text{both}} = \\frac{AB}{A+B}, \\qquad v_{\\text{avg (equal dist)}} = \\frac{2v_1 v_2}{v_1 + v_2}$$" }
      ],
      example: {
        q: "A car goes A→B at $40\\text{ km/h}$ and returns B→A at $60\\text{ km/h}$. Find average speed.",
        steps: "$v_{\\text{avg}} = \\frac{2(40)(60)}{40+60} = \\frac{4800}{100} = 48\\text{ km/h}$ (not $50$!)."
      },
      quiz: [
        { q: "Ali finishes a job in $6$h and Sara in $12$h. Working together, they take:", opts: ["$4\\text{ h}$", "$4.5\\text{ h}$", "$9\\text{ h}$", "$3\\text{ h}$"], ans: 0 },
        { q: "Going at $30\\text{ km/h}$ and returning the same distance at $60\\text{ km/h}$ gives average speed:", opts: ["$40\\text{ km/h}$", "$45\\text{ km/h}$", "$42\\text{ km/h}$", "$36\\text{ km/h}$"], ans: 0 },
        { q: "Pipe A fills a tank in $10$h; leak B empties it in $15$h. Together they fill it in:", opts: ["$30\\text{ h}$", "$25\\text{ h}$", "$6\\text{ h}$", "$12\\text{ h}$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-20",
      tierId: "arith-tier-4",
      title: "Percentages, Symmetry Trick & Successive Changes",
      subtitle: "Symmetry $x\\%\\text{ of }y = y\\%\\text{ of }x$, reverse percentages, and net $+a\\%, +b\\%$ formula.",
      theory:
        "Percent means 'per hundred' ($\\% = /100$). Remember the viral mental hack: **$16\\%$ of $25$ equals $25\\%$ of $16 = 4$**! And two successive percentage changes $a\\%$ and $b\\%$ yield $a + b + \\frac{ab}{100}\\%$.",
      formulas: [
        { name: "Symmetry & Net Successive Change", tex: "$$x\\%\\text{ of }y = y\\%\\text{ of }x, \\qquad \\text{Net }\\% = \\left(a + b + \\frac{ab}{100}\\right)\\%$$" }
      ],
      example: {
        q: "A price rises by $20\\%$ then drops by $20\\%$. What is the net percentage change?",
        steps: "$20 + (-20) + \\frac{20(-20)}{100} = -4\\%$ (a $4\\%$ decrease!)."
      },
      quiz: [
        { q: "Compute $28\\%$ of $25$ mentally:", opts: ["$7$", "$6.5$", "$8$", "$7.5$"], ans: 0 },
        { q: "After a $20\\%$ increase, a salary is $\\$720$. What was the original salary?", opts: ["$\\$600$", "$\\$576$", "$\\$620$", "$\\$580$"], ans: 0 },
        { q: "Two successive increases of $10\\%$ and $20\\%$ equal a single increase of:", opts: ["$32\\%$", "$30\\%$", "$31\\%$", "$28\\%$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-21",
      tierId: "arith-tier-4",
      title: "Profit, Loss, Markup & Successive Discounts",
      subtitle: "Cost Price (CP), Selling Price (SP), Marked Price (MP), and merchant margin equations.",
      theory:
        "Profit and Loss percentages are always measured on **Cost Price (CP)**, whereas Discount percentage is always measured on **Marked/List Price (MP)**!",
      formulas: [
        { name: "Merchant Bridge Formula", tex: "$$SP = CP\\left(1 + \\frac{P\\%}{100}\\right) = MP\\left(1 - \\frac{D\\%}{100}\\right)$$" }
      ],
      example: {
        q: "A shopkeeper marks goods $40\\%$ above CP and gives a $10\\%$ discount. Find Profit%.",
        steps: "Multiplier $= 1.40 \\times 0.90 = 1.26 \\implies 26\\%$ profit!"
      },
      quiz: [
        { q: "Bought for $\\$80$, sold for $\\$100$. What is the profit percentage?", opts: ["$25\\%$", "$20\\%$", "$15\\%$", "$30\\%$"], ans: 0 },
        { q: "Successive discounts of $20\\%$ and $10\\%$ equal a single discount of:", opts: ["$28\\%$", "$30\\%$", "$29\\%$", "$26\\%$"], ans: 0 },
        { q: "Selling an item for $\\$450$ incurs a $10\\%$ loss. What is its Cost Price?", opts: ["$\\$500$", "$\\$495$", "$\\$510$", "$\\$480$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-22",
      tierId: "arith-tier-4",
      title: "Simple, Compound & Continuous Interest",
      subtitle: "Linear vs exponential growth, compounding periods, CI−SI shortcut, and Rule of 72.",
      theory:
        "Simple interest grows linearly on original principal $P$, while Compound Interest earns **interest on interest** exponentially! Over $2$ years, $CI - SI = P(r/100)^2$.",
      formulas: [
        { name: "SI, CI & 2-Year Difference", tex: "$$SI = \\frac{Prt}{100}, \\qquad A = P\\left(1 + \\frac{r}{100n}\\right)^{nt}, \\qquad (CI-SI)_{2\\text{ yr}} = P\\left(\\frac{r}{100}\\right)^2$$" }
      ],
      example: {
        q: "Find the 2-year Compound Interest on $\\$1,000$ at $10\\%$ p.a. compounded annually.",
        steps: "$A = 1000(1.1)^2 = 1210 \\implies CI = \\$210$."
      },
      quiz: [
        { q: "Find Simple Interest on $\\$2,500$ at $8\\%$ per year for $3$ years:", opts: ["$\\$600$", "$\\$500$", "$\\$640$", "$\\$750$"], ans: 0 },
        { q: "Find 2-year $CI - SI$ on $\\$5,000$ at $10\\%$ per annum:", opts: ["$\\$50$", "$\\$100$", "$\\$25$", "$\\$500$"], ans: 0 },
        { q: "At $20\\%$ compound interest, $\\$1,000$ becomes how much in $2$ years?", opts: ["$\\$1,440$", "$\\$1,400$", "$\\$1,200$", "$\\$1,420$"], ans: 0 }
      ]
    },

    // ==================== REALM 5 (Ch 23–27) ====================
    {
      id: "ar-ch-23",
      tierId: "arith-tier-5",
      title: "Laws of Exponents, Zero & Negative Powers",
      subtitle: "Product, quotient, power-of-power laws, $a^0 = 1$, and reciprocal negative indices.",
      theory:
        "Exponents count repeated multiplication. Stepping down the exponent ladder divides by the base each time, proving naturally why $a^0 = 1$ ($a \\neq 0$) and $a^{-n} = \\frac{1}{a^n}$!",
      formulas: [
        { name: "Complete Index Laws", tex: "$$a^m a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}, \\quad (a^m)^n = a^{mn}, \\quad a^0 = 1, \\quad a^{-n} = \\frac{1}{a^n}$$" }
      ],
      example: {
        q: "Evaluate $\\left(\\frac{2}{3}\\right)^{-3} \\times 9^0$.",
        steps: "Flip fraction for negative exponent: $\\left(\\frac{3}{2}\\right)^3 \\times 1 = \\frac{27}{8}$."
      },
      quiz: [
        { q: "Evaluate $2^{-4} \\times 2^7$:", opts: ["$8$", "$16$", "$4$", "$\\frac{1}{8}$"], ans: 0 },
        { q: "Simplify $\\frac{(3^4)^2}{3^5}$:", opts: ["$27$", "$9$", "$81$", "$3$"], ans: 0 },
        { q: "Evaluate $5^0 + 4^{-1}$:", opts: ["$\\frac{5}{4}$", "$\\frac{1}{4}$", "$5$", "$0$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-24",
      tierId: "arith-tier-5",
      title: "Scientific Notation & Orders of Magnitude",
      subtitle: "Standard form $M \\times 10^n$ ($1 \\le M < 10$) for cosmic and subatomic calculations.",
      theory:
        "Scientific notation separates scale ($10^n$) from precision ($M$). When multiplying or dividing in standard form, handle mantissas and powers of $10$ separately, then re-normalize so $1 \\le M < 10$.",
      formulas: [
        { name: "Standard Form Arithmetic", tex: "$$(A\\times 10^m)(B\\times 10^n) = (AB)\\times 10^{m+n} \\quad (1 \\le M < 10)$$" }
      ],
      example: {
        q: "Express $(4\\times 10^7) \\times (5\\times 10^{-3})$ in standard scientific notation.",
        steps: "$20 \\times 10^4 = 2.0 \\times 10^5$."
      },
      quiz: [
        { q: "Write $0.000064$ in scientific notation:", opts: ["$6.4 \\times 10^{-5}$", "$6.4 \\times 10^{-4}$", "$64 \\times 10^{-6}$", "$0.64 \\times 10^{-4}$"], ans: 0 },
        { q: "Evaluate $(6 \\times 10^8) \\div (1.5 \\times 10^3)$:", opts: ["$4 \\times 10^5$", "$4 \\times 10^{11}$", "$4.5 \\times 10^5$", "$9 \\times 10^5$"], ans: 0 },
        { q: "How many digits does $2^{10} \\times 5^{12}$ have?", opts: ["$12$", "$10$", "$11$", "$13$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-25",
      tierId: "arith-tier-5",
      title: "Square Roots, Cube Roots & Rational Exponents",
      subtitle: "Fractional indices $a^{p/q} = (\\sqrt[q]{a})^p$ and mental root extraction.",
      theory:
        "Taking the $q$-th root first before raising to the $p$-th power keeps numbers tiny! For example, $27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$ without ever computing $27^2 = 729$.",
      formulas: [
        { name: "Fractional Power Law", tex: "$$a^{p/q} = \\left(\\sqrt[q]{a}\\right)^p = \\sqrt[q]{a^p}, \\qquad \\sqrt{ab} = \\sqrt{a}\\sqrt{b}\\quad(a,b\\ge 0)$$" }
      ],
      example: {
        q: "Evaluate $64^{-2/3}$ without a calculator.",
        steps: "$\\sqrt[3]{64} = 4 \\implies 4^{-2} = \\frac{1}{16}$."
      },
      quiz: [
        { q: "Evaluate $81^{3/4}$:", opts: ["$27$", "$9$", "$64$", "$243$"], ans: 0 },
        { q: "Evaluate $32^{-2/5}$:", opts: ["$\\frac{1}{4}$", "$4$", "$\\frac{1}{8}$", "$\\frac{1}{16}$"], ans: 0 },
        { q: "Simplify $\\sqrt{75} - \\sqrt{12}$:", opts: ["$3\\sqrt{3}$", "$\\sqrt{63}$", "$2\\sqrt{3}$", "$5\\sqrt{3}$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-26",
      tierId: "arith-tier-5",
      title: "Surds, Conjugates & Denesting $\\sqrt{a \\pm 2\\sqrt{b}}$",
      subtitle: "Rationalizing denominators via difference of squares and nested radical denesting.",
      theory:
        "Multiplying $(\\sqrt{a}+\\sqrt{b})$ by its **conjugate** $(\\sqrt{a}-\\sqrt{b})$ clears all square roots into $a - b$! Better yet, $\\sqrt{(x+y) \\pm 2\\sqrt{xy}} = \\sqrt{x} \\pm \\sqrt{y}$ ($x \\ge y > 0$).",
      formulas: [
        { name: "Conjugate & Denesting Identity", tex: "$$\\frac{1}{\\sqrt{a}+\\sqrt{b}} = \\frac{\\sqrt{a}-\\sqrt{b}}{a-b}, \\qquad \\sqrt{(x+y) + 2\\sqrt{xy}} = \\sqrt{x} + \\sqrt{y}$$" }
      ],
      example: {
        q: "Simplify $\\sqrt{7 + 2\\sqrt{12}}$.",
        steps: "Find $x+y=7$ and $xy=12 \\implies x=4, y=3$. Thus $\\sqrt{4}+\\sqrt{3} = 2 + \\sqrt{3}$!"
      },
      quiz: [
        { q: "Rationalize $\\frac{6}{\\sqrt{5} - \\sqrt{2}}$:", opts: ["$2(\\sqrt{5}+\\sqrt{2})$", "$3(\\sqrt{5}+\\sqrt{2})$", "$2(\\sqrt{5}-\\sqrt{2})$", "$\\sqrt{5}+\\sqrt{2}$"], ans: 0 },
        { q: "Denest $\\sqrt{8 - 2\\sqrt{15}}$:", opts: ["$\\sqrt{5} - \\sqrt{3}$", "$\\sqrt{5} + \\sqrt{3}$", "$\\sqrt{6} - \\sqrt{2}$", "$3 - \\sqrt{5}$"], ans: 0 },
        { q: "If $x = 2 + \\sqrt{3}$, find $x + \\frac{1}{x}$:", opts: ["$4$", "$2\\sqrt{3}$", "$2$", "$6$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-27",
      tierId: "arith-tier-5",
      title: "Logarithmic Arithmetic & Base-Change Chains",
      subtitle: "Log product/quotient/power rules and telescoping chain products $\\log_a b \\cdot \\log_b c = \\log_a c$.",
      theory:
        "A logarithm asks: *'What exponent turns base $b$ into $x$?'* ($b^y = x \\iff \\log_b x = y$). Logarithms convert multiplication into addition and powers into simple multipliers!",
      formulas: [
        { name: "Logarithm Master Laws", tex: "$$\\log_b(xy)=\\log_b x+\\log_b y, \\quad \\log_b(x^k)=k\\log_b x, \\quad \\log_a b\\cdot\\log_b c = \\log_a c$$" }
      ],
      example: {
        q: "Evaluate $\\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 8$.",
        steps: "By chain cancellation: $\\log_2 8 = \\log_2(2^3) = 3$."
      },
      quiz: [
        { q: "Evaluate $\\log_2 24 - \\log_2 3$:", opts: ["$3$", "$4$", "$8$", "$2$"], ans: 0 },
        { q: "Evaluate $\\log_3 5 \\times \\log_5 27$:", opts: ["$3$", "$9$", "$5$", "$1$"], ans: 0 },
        { q: "Find $\\log_{8} 32$:", opts: ["$\\frac{5}{3}$", "$\\frac{3}{5}$", "$4$", "$\\frac{5}{2}$"], ans: 0 }
      ]
    },

    // ==================== REALM 6 (Ch 28–32) ====================
    {
      id: "ar-ch-28",
      tierId: "arith-tier-6",
      title: "Arithmetic, Geometric & Harmonic Means ($AM \\ge GM \\ge HM$)",
      subtitle: "Weighted averages, classical mean inequality, and $GM^2 = AM \\cdot HM$.",
      theory:
        "For any positive numbers, the Arithmetic Mean is at least the Geometric Mean, which is at least the Harmonic Mean—with equality **if and only if** all numbers are equal! This unlocks instant min/max optimization without calculus.",
      formulas: [
        { name: "Classical Means & Inequality", tex: "$$AM = \\frac{a+b}{2} \\ge GM = \\sqrt{ab} \\ge HM = \\frac{2ab}{a+b}, \\qquad GM^2 = AM\\cdot HM$$" }
      ],
      example: {
        q: "Find the minimum value of $x + \\frac{9}{x}$ for $x > 0$.",
        steps: "By $AM \\ge GM$: $x + \\frac{9}{x} \\ge 2\\sqrt{x \\cdot \\frac{9}{x}} = 2(3) = 6$ (attained at $x=3$)."
      },
      quiz: [
        { q: "Find the Geometric Mean of $4$ and $16$:", opts: ["$8$", "$10$", "$6.4$", "$12$"], ans: 0 },
        { q: "For $x > 0$, what is the minimum possible value of $x + \\frac{25}{x}$?", opts: ["$10$", "$5$", "$25$", "$12.5$"], ans: 0 },
        { q: "If $AM = 9$ and $GM = 6$ for two positive numbers, their $HM$ is:", opts: ["$4$", "$3$", "$5$", "$6$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-29",
      tierId: "arith-tier-6",
      title: "Alligation, Mixtures & Repeated Replacement",
      subtitle: "Criss-cross concentration blending and repeated draw-and-replace exponential purity.",
      theory:
        "When mixing cheaper concentration $L$ with higher concentration $H$ to achieve target $M$, mix them in the inverse gap ratio $(H - M) : (M - L)$! For repeated replacement of volume $x$ from $V$, pure fraction decays by $(1 - x/V)^n$.",
      formulas: [
        { name: "Alligation & Dilution Laws", tex: "$$\\frac{Q_{\\text{low}}}{Q_{\\text{high}}} = \\frac{H - M}{M - L}, \\qquad V_{\\text{pure}} = V\\left(1 - \\frac{x}{V}\\right)^n$$" }
      ],
      example: {
        q: "$10\\text{ L}$ of milk is drawn from a $100\\text{ L}$ cask and replaced by water, repeated twice. Pure milk left?",
        steps: "$100(1 - 10/100)^2 = 100(0.9)^2 = 81\\text{ L}$."
      },
      quiz: [
        { q: "In what ratio must $20\\%$ acid and $50\\%$ acid be mixed to get $30\\%$ acid?", opts: ["$2 : 1$", "$1 : 2$", "$3 : 2$", "$1 : 1$"], ans: 0 },
        { q: "From $50\\text{ L}$ pure milk, $5\\text{ L}$ is replaced with water twice. Pure milk left:", opts: ["$40.5\\text{ L}$", "$40\\text{ L}$", "$45\\text{ L}$", "$38.5\\text{ L}$"], ans: 0 },
        { q: "Tea at $\\$12/\\text{kg}$ and $\\$20/\\text{kg}$ mixed $3:1$ gives mean price:", opts: ["$\\$14/\\text{kg}$", "$\\$16/\\text{kg}$", "$\\$15/\\text{kg}$", "$\\$18/\\text{kg}$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-30",
      tierId: "arith-tier-6",
      title: "AP, GP & Faulhaber Power Sums ($\\sum k, \\sum k^2, \\sum k^3$)",
      subtitle: "Gauss's pairing sum, geometric finite/infinite series, and sum of cubes = square of sum!",
      theory:
        "Remarkably, $1^3 + 2^3 + \\cdots + n^3 = (1 + 2 + \\cdots + n)^2$! Mastering AP, GP, and power sums turns thousand-term additions into 3-second evaluations.",
      formulas: [
        { name: "Natural Power Sums & Infinite GP", tex: "$$\\sum_{k=1}^n k = \\frac{n(n+1)}{2}, \\quad \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{k=1}^n k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$$" }
      ],
      example: {
        q: "Compute $1^3 + 2^3 + 3^3 + \\cdots + 10^3$.",
        steps: "$\\sum_{k=1}^{10} k = \\frac{10\\times 11}{2} = 55 \\implies \\sum k^3 = 55^2 = 3,025$."
      },
      quiz: [
        { q: "Find $1 + 2 + 3 + \\cdots + 40$:", opts: ["$820$", "$800$", "$840$", "$780$"], ans: 0 },
        { q: "Find the infinite geometric sum $12 + 6 + 3 + 1.5 + \\cdots$:", opts: ["$24$", "$22$", "$36$", "$18$"], ans: 0 },
        { q: "Evaluate $1^2 + 2^2 + 3^2 + \\cdots + 6^2$:", opts: ["$91$", "$77$", "$105$", "$84$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-31",
      tierId: "arith-tier-6",
      title: "Number Bases: Binary ($2$), Octal ($8$), Hex ($16$) & Base-$b$",
      subtitle: "Positional base expansion, repeated remainder conversion, and base-$b$ arithmetic.",
      theory:
        "Computers think in Base $2$ (bits $0,1$) and Base $16$ ($0\\text{–}9, A\\text{–}F$). Because $16 = 2^4$ and $8 = 2^3$, every hexadecimal digit maps directly to a $4$-bit binary nibble!",
      formulas: [
        { name: "General Positional Base-$b$ Value", tex: "$$(d_k\\dots d_1 d_0)_b = \\sum_{i=0}^{k} d_i\\, b^i \\qquad (0 \\le d_i < b)$$" }
      ],
      example: {
        q: "Convert binary $(101101)_2$ to decimal and hexadecimal.",
        steps: "$32 + 0 + 8 + 4 + 0 + 1 = 45_{10}$. In 4-bit nibbles: $0010\\;1101_2 = 2D_{16}$."
      },
      quiz: [
        { q: "Convert $(11011)_2$ to Base $10$:", opts: ["$27$", "$25$", "$29$", "$23$"], ans: 0 },
        { q: "Convert $45_{10}$ to Base $2$:", opts: ["$101101_2$", "$110101_2$", "$101011_2$", "$100111_2$"], ans: 0 },
        { q: "What is hexadecimal $(2F)_{16}$ in Base $10$?", opts: ["$47$", "$45$", "$37$", "$63$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-32",
      tierId: "arith-tier-6",
      title: "Modular Arithmetic, Last-Digit Cyclicity & Trailing Zeros ($v_p(n!)$)",
      subtitle: "Power remainder cycles, Euler/Fermat shortcuts, and Legendre's factorial prime-power formula.",
      theory:
        "Unit digits of powers repeat in cycles of $1, 2,$ or $4$! And the number of trailing zeros at the end of $n!$ equals the exponent of $5$ in $n!$: $\\lfloor n/5\\rfloor + \\lfloor n/25\\rfloor + \\lfloor n/125\\rfloor + \\cdots$.",
      formulas: [
        { name: "Legendre's Factorial Formula", tex: "$$v_p(n!) = \\sum_{k=1}^{\\infty} \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor, \\qquad \\text{Zeros in } n! = v_5(n!)$$" }
      ],
      example: {
        q: "How many trailing zeros are at the end of $100!$?",
        steps: "$\\lfloor 100/5\\rfloor + \\lfloor 100/25\\rfloor = 20 + 4 = 24$ trailing zeros."
      },
      quiz: [
        { q: "How many trailing zeros are at the end of $125!$?", opts: ["$31$", "$30$", "$25$", "$29$"], ans: 0 },
        { q: "What is the units (last) digit of $7^{2026}$?", opts: ["$9$", "$3$", "$7$", "$1$"], ans: 0 },
        { q: "Find the remainder when $2^{100}$ is divided by $7$ (since $2^3 \\equiv 1 \\pmod 7$):", opts: ["$2$", "$1$", "$4$", "$6$"], ans: 0 }
      ]
    },

    // ==================== REALM 7 (Ch 33–36: HIGHEST OLYMPIAD LEVEL) ====================
    {
      id: "ar-ch-33",
      tierId: "arith-tier-7",
      title: "Telescoping Sums, Products & Partial Fraction Splitting",
      subtitle: "Collapsing thousand-term Olympiad series via $\\frac{1}{k(k+d)} = \\frac{1}{d}(\\frac{1}{k} - \\frac{1}{k+d})$.",
      theory:
        "When every interior term cancels with its neighbour, a giant sum or product collapses down to just its boundary terms! Factor $1 - \\frac{1}{k^2} = \\frac{k-1}{k}\\cdot\\frac{k+1}{k}$ for telescoping products.",
      formulas: [
        { name: "Telescoping Series & Product", tex: "$$\\sum_{k=1}^{n}\\frac{1}{k(k+1)} = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}, \\qquad \\prod_{k=2}^{n}\\left(1 - \\frac{1}{k^2}\\right) = \\frac{n+1}{2n}$$" }
      ],
      example: {
        q: "Evaluate $\\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\cdots + \\frac{1}{99\\cdot 100}$.",
        steps: "$(1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + \\cdots + (\\frac{1}{99} - \\frac{1}{100}) = 1 - \\frac{1}{100} = \\frac{99}{100}$."
      },
      quiz: [
        { q: "Evaluate $\\sum_{k=1}^{49} \\frac{1}{k(k+1)}$:", opts: ["$\\frac{49}{50}$", "$\\frac{48}{49}$", "$\\frac{50}{51}$", "$\\frac{1}{50}$"], ans: 0 },
        { q: "Evaluate $\\prod_{k=2}^{10} \\left(1 - \\frac{1}{k^2}\\right)$:", opts: ["$\\frac{11}{20}$", "$\\frac{9}{10}$", "$\\frac{1}{2}$", "$\\frac{19}{20}$"], ans: 0 },
        { q: "Evaluate $\\sum_{k=1}^{24} \\frac{1}{\\sqrt{k} + \\sqrt{k+1}}$ (rationalize first!):", opts: ["$4$", "$5$", "$6$", "$3$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-34",
      tierId: "arith-tier-7",
      title: "Continued Fractions, Egyptian & Farey Fractions",
      subtitle: "Euclidean continued fraction expansions $[a_0; a_1, a_2, \\dots]$, Pell convergents & mediants.",
      theory:
        "Every rational number has a finite simple continued fraction whose partial quotients are literally the quotients of Euclid's GCD algorithm! Quadratic irrationals like $\\sqrt{2} = [1; \\overline{2}]$ have periodic continued fractions.",
      formulas: [
        { name: "Continued Fraction & Golden Ratio", tex: "$$[a_0; a_1, a_2] = a_0 + \\cfrac{1}{a_1 + \\cfrac{1}{a_2}}, \\qquad \\varphi = [1;1,1,\\dots] = \\frac{1+\\sqrt{5}}{2}$$" }
      ],
      example: {
        q: "Evaluate the continued fraction $[2; 3, 4] = 2 + \\frac{1}{3 + \\frac{1}{4}}$.",
        steps: "$3 + \\frac{1}{4} = \\frac{13}{4} \\implies 2 + \\frac{4}{13} = \\frac{30}{13}$."
      },
      quiz: [
        { q: "Evaluate $[1; 2, 3] = 1 + \\dfrac{1}{2 + \\frac{1}{3}}$:", opts: ["$\\frac{10}{7}$", "$\\frac{7}{5}$", "$\\frac{11}{7}$", "$\\frac{9}{7}$"], ans: 0 },
        { q: "What is the exact value of the infinite continued fraction $1 + \\cfrac{1}{2 + \\cfrac{1}{2 + \\cdots}}$?", opts: ["$\\sqrt{2}$", "$\\frac{1+\\sqrt{5}}{2}$", "$\\sqrt{3}$", "$\\frac{3}{2}$"], ans: 0 },
        { q: "Expand $\\frac{19}{7}$ as a simple continued fraction:", opts: ["$[2; 1, 2, 2]$", "$[2; 3, 2]$", "$[2; 1, 3]$", "$[3; 1, 2]$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-35",
      tierId: "arith-tier-7",
      title: "Vedic & Olympiad High-Speed Mental Arithmetic",
      subtitle: "Nikhilam base multiplication ($97\\times 94$), $(n5)^2$ rule, difference-of-squares products & rapid cube roots.",
      theory:
        "Near a power-of-$10$ base $B$, $(B+d_1)(B+d_2) = B(B+d_1+d_2) + d_1 d_2$! And any number ending in $5$ squares instantly: $(\\overline{n5})^2 = n(n+1)\\text{ followed by }25$.",
      formulas: [
        { name: "Base Product & Ending-in-5 Square", tex: "$$(B+d_1)(B+d_2) = B(B+d_1+d_2) + d_1 d_2, \\qquad (10n+5)^2 = 100n(n+1) + 25$$" }
      ],
      example: {
        q: "Compute $97 \\times 94$ and $85^2$ in 3 seconds.",
        steps: "Deficits from $100$: $-3$ and $-6$. Left: $97-6=91$; Right: $(-3)(-6)=18 \\implies 9,118$. And $85^2$: $8\\times 9 = 72 \\implies 7,225$!"
      },
      quiz: [
        { q: "Compute $96 \\times 93$ mentally:", opts: ["$8,928$", "$8,918$", "$8,828$", "$9,028$"], ans: 0 },
        { q: "Compute $75^2$ instantly:", opts: ["$5,625$", "$5,225$", "$4,925$", "$6,025$"], ans: 0 },
        { q: "Compute $104 \\times 107$ using Base $100$:", opts: ["$11,128$", "$11,028$", "$11,228$", "$10,928$"], ans: 0 }
      ]
    },
    {
      id: "ar-ch-36",
      tierId: "arith-tier-7",
      title: "Grandmaster Arithmetic Synthesis — Beginning to Olympiad",
      subtitle: "The Ultimate Boss Citadel uniting Place Value, Primes, Fractions, Finance, Surds, Bases & Olympiad Series!",
      theory:
        "Congratulations on reaching Chapter 36—the Grandmaster Citadel of ArithVerse! Here every tool from Realm 1 to Realm 7 works in harmony: factorization simplifies surds, modular cyclicity tames giant exponents, and telescoping algebra collapses impossible sums.",
      formulas: [
        { name: "Grandmaster Crown Identities", tex: "$$\\gcd(a,b)\\operatorname{lcm}(a,b)=ab, \\quad AM\\ge GM\\ge HM, \\quad v_p(n!)=\\sum_{k\\ge 1}\\left\\lfloor\\frac{n}{p^k}\\right\\rfloor$$" }
      ],
      example: {
        q: "Find $\\gcd(2^{30}-1,\\; 2^{45}-1)$.",
        steps: "Grandmaster theorem: $\\gcd(a^m - 1, a^n - 1) = a^{\\gcd(m,n)} - 1 = 2^{\\gcd(30,45)} - 1 = 2^{15} - 1 = 32,767$!"
      },
      quiz: [
        { q: "Evaluate $\\gcd(2^{12}-1,\\; 2^{18}-1)$:", opts: ["$63$", "$31$", "$127$", "$15$"], ans: 0 },
        { q: "If $S = \\sum_{k=1}^{99} \\frac{1}{\\sqrt{k}+\\sqrt{k+1}}$, what is $S$?", opts: ["$9$", "$10$", "$8$", "$11$"], ans: 0 },
        { q: "What is $995^2$ using Base $1000$?", opts: ["$990,025$", "$995,025$", "$985,025$", "$990,225$"], ans: 0 }
      ]
    }
  ];

  const ARITH_MODULES = RAW_CHAPTERS.map((ch, idx) => {
    const num = idx + 1;
    const tierObj = ARITH_TIERS.find((t) => t.id === ch.tierId) || ARITH_TIERS[0];
    return {
      ...ch,
      num,
      title: `${num}. ${ch.title}`,
      grade: `Ch ${num} • ${tierObj.shortTag}`
    };
  });

  // Generate 15 Rich Chapter-Specific MCQs for any Arithmetic Chapter
  function generateArith15Mcqs(mod) {
    const pool = [...(mod.quiz || [])];
    const n = mod.num || 1;
    const tierNum = Number((mod.tierId || "arith-tier-1").split("-").pop()) || 1;

    const dynamicGenerators = [
      () => {
        const a = 120 + n * 7;
        const b = 99;
        const ans = a + b;
        return { q: `Mental compensation: What is $${a} + 99$?`, opts: [`$${ans}$`, `$${ans + 2}$`, `$${ans - 10}$`, `$${ans + 1}$`], ans: 0 };
      },
      () => {
        const k = 4 + (n % 9);
        const ans = k * 25;
        return { q: `Speed multiplier: Evaluate $${k * 4} \\times 25 \\div 4$:`, opts: [`$${ans}$`, `$${ans + 25}$`, `$${ans - 15}$`, `$${ans * 2}$`], ans: 0 };
      },
      () => {
        const q = 5 + (n % 7);
        const r = 3;
        const d = 8;
        const N = d * q + r;
        return { q: `Find the remainder when $${N}$ is divided by $${d}$:`, opts: [`$${r}$`, `$${r + 1}$`, `$${r - 1}$`, `$0$`], ans: 0 };
      },
      () => {
        const m = 3 + (n % 6);
        const sq = (10 * m + 5) * (10 * m + 5);
        return { q: `Instant ending-in-5 square: What is $${10 * m + 5}^2$?`, opts: [`$${sq}$`, `$${sq - 100}$`, `$${sq + 100}$`, `$${sq + 50}$`], ans: 0 };
      },
      () => {
        const p = 2 + (n % 5);
        const tot = 12 * (p + (p + 1));
        const share1 = 12 * p;
        return { q: `Divide $${tot}$ in the ratio $${p} : ${p + 1}$. Smaller part = ?`, opts: [`$${share1}$`, `$${share1 + 12}$`, `$${share1 - 6}$`, `$${tot / 2}$`], ans: 0 };
      },
      () => {
        const pct = (n % 4 + 1) * 10;
        const base = 250;
        const val = (pct * base) / 100;
        return { q: `Calculate $${pct}\\%$ of $${base}$:`, opts: [`$${val}$`, `$${val + 15}$`, `$${val - 10}$`, `$${val * 2}$`], ans: 0 };
      },
      () => {
        const k = 5 + (n % 12);
        const sum = (k * (k + 1)) / 2;
        return { q: `Gauss sum: Evaluate $1 + 2 + 3 + \\cdots + ${k}$:`, opts: [`$${sum}$`, `$${sum + k}$`, `$${sum - 3}$`, `$${k * k}$`], ans: 0 };
      },
      () => {
        const a = 2 + (n % 4);
        const b = 3;
        const prod = Math.pow(2, a + b);
        return { q: `Index law: Evaluate $2^{${a}} \\times 2^{${b}}$:`, opts: [`$${prod}$`, `$${prod / 2}$`, `$${prod * 2}$`, `$${2 * a * b}$`], ans: 0 };
      },
      () => {
        const v1 = 30;
        const v2 = 60;
        return { q: `Round-trip harmonic speed for $${v1}\\text{ km/h}$ out and $${v2}\\text{ km/h}$ back:`, opts: [`$40\\text{ km/h}$`, `$45\\text{ km/h}$`, `$42\\text{ km/h}$`, `$38\\text{ km/h}$`], ans: 0 };
      },
      () => {
        const c = 4 + (n % 5);
        const minVal = 2 * c;
        return { q: `By $AM \\ge GM$, minimum of $x + \\frac{${c * c}}{x}$ for $x > 0$ is:`, opts: [`$${minVal}$`, `$${c}$`, `$${c * c}$`, `$${minVal + 2}$`], ans: 0 };
      },
      () => {
        const numTerms = 9 + (n % 10);
        return {
          q: `Telescoping sum $\\sum_{k=1}^{${numTerms}} \\frac{1}{k(k+1)}$ equals:`,
          opts: [`$\\frac{${numTerms}}{${numTerms + 1}}$`, `$\\frac{${numTerms - 1}}{${numTerms}}$`, `$\\frac{1}{${numTerms + 1}}$`, `$1$`],
          ans: 0
        };
      },
      () => {
        const dec = 8 + (n % 15);
        const bin = dec.toString(2);
        const wrong1 = (dec + 1).toString(2);
        const wrong2 = (dec + 2).toString(2);
        const wrong3 = Math.max(1, dec - 1).toString(2);
        return { q: `Base conversion: Write decimal $${dec}_{10}$ in binary (Base $2$):`, opts: [`$${bin}_2$`, `$${wrong1}_2$`, `$${wrong2}_2$`, `$${wrong3}_2$`], ans: 0 };
      }
    ];

    let idx = (tierNum * 3) % dynamicGenerators.length;
    while (pool.length < 15) {
      pool.push(dynamicGenerators[idx % dynamicGenerators.length]());
      idx += 1;
    }

    // Shuffle options deterministically/freshly while tracking correct answer index
    return pool.slice(0, 15).map((item) => {
      const tagged = item.opts.map((text, i) => ({ text, isCorrect: i === item.ans }));
      for (let i = tagged.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tagged[i], tagged[j]] = [tagged[j], tagged[i]];
      }
      return {
        q: item.q,
        opts: tagged.map((t) => t.text),
        ans: tagged.findIndex((t) => t.isCorrect)
      };
    });
  }

  window.ARITH_CURRICULUM = {
    tiers: ARITH_TIERS,
    modules: ARITH_MODULES,
    generate15Mcqs: generateArith15Mcqs
  };
})();
