/* ==========================================================================
   TrigVerse fx-991CW CLASSWIZ — Full Multi-Mode Scientific Calculator Engine
   Modes:
     1: COMP      — Full Natural Textbook Scientific & Trig Evaluator + S⇔D + DMS
     2: CMPLX     — Complex Numbers (a + bi ⇔ r ∠ θ, De Moivre, Euler)
     3: EQN       — Quadratic, Cubic, 2×2 System & Linear Trig Equation Solver
     4: TABLE     — Dual Function Table Generator f(x) & g(x)
     5: BASE-N    — Programmer DEC / HEX / BIN / OCT + Bitwise Logic
     6: VECT·STAT — 3D Vector Algebra (Dot, Cross, ∠) & 1-Var Statistics
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. Exact Symbolic Surd / Fraction / Pi / DMS Recognition (S⇔D Engine)
     ------------------------------------------------------------------------ */
  function gcdInt(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  function approxFraction(val, maxDen = 4096, tol = 1e-10) {
    if (!Number.isFinite(val)) return null;
    const sign = val < 0 ? -1 : 1;
    const x = Math.abs(val);
    if (Math.abs(x - Math.round(x)) < tol) {
      return { num: sign * Math.round(x), den: 1 };
    }
    let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
    let b = x;
    for (let iter = 0; iter < 28; iter++) {
      const a = Math.floor(b);
      const h = a * h1 + h2;
      const k = a * k1 + k2;
      if (k > maxDen) break;
      if (Math.abs(x - h / k) < tol) {
        const g = gcdInt(h, k);
        return { num: sign * (h / g), den: k / g };
      }
      h2 = h1; h1 = h;
      k2 = k1; k1 = k;
      const rem = b - a;
      if (Math.abs(rem) < 1e-13) break;
      b = 1 / rem;
    }
    return null;
  }

  const SPECIAL_EXACT_CONSTS = [
    [(Math.sqrt(6) - Math.sqrt(2)) / 4, "(√6−√2)/4"],
    [(Math.sqrt(6) + Math.sqrt(2)) / 4, "(√6+√2)/4"],
    [Math.sqrt(6) - Math.sqrt(2), "√6−√2"],
    [Math.sqrt(6) + Math.sqrt(2), "√6+√2"],
    [2 - Math.sqrt(3), "2−√3"],
    [2 + Math.sqrt(3), "2+√3"],
    [Math.sqrt(2) - 1, "√2−1"],
    [Math.sqrt(2) + 1, "√2+1"],
    [(1 + Math.sqrt(5)) / 2, "(1+√5)/2"]
  ];

  function detectExactSymbolic(val) {
    if (!Number.isFinite(val)) return null;
    if (Math.abs(val) < 1e-12) return null;
    if (Math.abs(val - Math.round(val)) < 1e-11) return null;

    // 1. Simple rational fraction p/q
    const frac = approxFraction(val, 2500, 1e-10);
    if (frac && frac.den > 1 && Math.abs(frac.num) <= 99999) {
      const signStr = frac.num < 0 ? "−" : "";
      const absN = Math.abs(frac.num);
      if (absN > frac.den && frac.den <= 64) {
        const whole = Math.floor(absN / frac.den);
        const rem = absN % frac.den;
        return `${signStr}${frac.num < 0 ? absN : frac.num}/${frac.den}  (${signStr}${whole} ${rem}/${frac.den})`;
      }
      return `${signStr}${absN}/${frac.den}`;
    }

    // 2. Special compound surds (15°/75°/golden ratio)
    for (const [target, label] of SPECIAL_EXACT_CONSTS) {
      if (Math.abs(Math.abs(val) - target) < 1e-9) {
        return val < 0 ? `−(${label})` : label;
      }
    }

    // 3. Single surd multiples (p/q) * √r for r in {2, 3, 5, 6, 7, 10}
    for (const r of [2, 3, 5, 6, 7, 10]) {
      const root = Math.sqrt(r);
      const f = approxFraction(val / root, 64, 1e-9);
      if (f && Math.abs(f.num) <= 64 && f.den <= 64) {
        const sg = f.num < 0 ? "−" : "";
        const an = Math.abs(f.num);
        const coeff = an === 1 ? "" : String(an);
        return f.den === 1 ? `${sg}${coeff}√${r}` : `${sg}${coeff}√${r}/${f.den}`;
      }
    }

    // 4. Rational multiples of π: (p/q) * π
    const fPi = approxFraction(val / Math.PI, 180, 1e-9);
    if (fPi && Math.abs(fPi.num) <= 180 && fPi.den <= 180) {
      const sg = fPi.num < 0 ? "−" : "";
      const an = Math.abs(fPi.num);
      const coeff = an === 1 ? "" : String(an);
      return fPi.den === 1 ? `${sg}${coeff}π` : `${sg}${coeff}π/${fPi.den}`;
    }

    return null;
  }

  function formatDMS(val) {
    if (!Number.isFinite(val)) return "Math Error";
    const sign = val < 0 ? "−" : "";
    let abs = Math.abs(val);
    let deg = Math.floor(abs + 1e-11);
    let remMin = (abs - deg) * 60;
    let min = Math.floor(remMin + 1e-9);
    let sec = (remMin - min) * 60;
    if (sec >= 59.995) {
      sec = 0;
      min += 1;
    }
    if (min >= 60) {
      min -= 60;
      deg += 1;
    }
    return `${sign}${deg}° ${min}′ ${sec.toFixed(2)}″`;
  }

  function formatNumberByMode(val, fmtMode) {
    if (!Number.isFinite(val)) return Number.isNaN(val) ? "Math Error" : (val > 0 ? "+∞" : "−∞");
    const v = Math.abs(val) < 1e-13 ? 0 : val;
    if (fmtMode === "FIX") return v.toFixed(4);
    if (fmtMode === "SCI") {
      const [m, e] = v.toExponential(5).split("e");
      return `${m}×10^(${Number(e)})`;
    }
    if (fmtMode === "ENG") {
      if (v === 0) return "0";
      const exp = Math.floor(Math.log10(Math.abs(v)));
      const engExp = Math.floor(exp / 3) * 3;
      const mant = v / Math.pow(10, engExp);
      return `${Number(mant.toPrecision(6))}×10^(${engExp})`;
    }
    // NORM: clean 10-significant-digit natural display
    if (v !== 0 && (Math.abs(v) >= 1e10 || Math.abs(v) < 1e-7)) {
      const [m, e] = v.toExponential(6).split("e");
      return `${Number(m)}×10^(${Number(e)})`;
    }
    return String(Number(v.toPrecision(10))).replace(/-/g, "−");
  }

  /* ------------------------------------------------------------------------
     2. Angle Conversion & Safe Real Expression Evaluator (1: COMP & 4: TABLE)
     ------------------------------------------------------------------------ */
  function toRad(val, angleMode) {
    if (angleMode === "RAD") return val;
    if (angleMode === "GRAD") return (val * Math.PI) / 200;
    return (val * Math.PI) / 180;
  }

  function fromRad(rad, angleMode) {
    if (angleMode === "RAD") return rad;
    if (angleMode === "GRAD") return (rad * 200) / Math.PI;
    return (rad * 180) / Math.PI;
  }

  function factorialReal(n) {
    if (!Number.isFinite(n) || n < 0 || Math.abs(n - Math.round(n)) > 1e-9) {
      throw new Error("Factorial requires non-negative integer n");
    }
    const k = Math.round(n);
    if (k > 170) throw new Error("Overflow (n > 170)");
    let r = 1;
    for (let i = 2; i <= k; i++) r *= i;
    return r;
  }

  function nPrReal(n, r) {
    n = Math.round(n); r = Math.round(r);
    if (n < 0 || r < 0 || r > n) throw new Error("Domain Error in nPr");
    let res = 1;
    for (let i = 0; i < r; i++) res *= (n - i);
    return res;
  }

  function nCrReal(n, r) {
    n = Math.round(n); r = Math.round(r);
    if (n < 0 || r < 0 || r > n) throw new Error("Domain Error in nCr");
    r = Math.min(r, n - r);
    let res = 1;
    for (let i = 1; i <= r; i++) res = (res * (n - r + i)) / i;
    return Math.round(res);
  }

  function normalizeDisplayExpr(raw) {
    let s = String(raw || "").trim();
    if (!s) return "0";
    s = s
      .replace(/−/g, "-")
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/sin⁻¹/g, "asin")
      .replace(/cos⁻¹/g, "acos")
      .replace(/tan⁻¹/g, "atan")
      .replace(/csc⁻¹/g, "acsc")
      .replace(/sec⁻¹/g, "asec")
      .replace(/cot⁻¹/g, "acot")
      .replace(/sinh⁻¹/g, "asinh")
      .replace(/cosh⁻¹/g, "acosh")
      .replace(/tanh⁻¹/g, "atanh")
      .replace(/³√\(/g, "cbrt(")
      .replace(/√\(/g, "sqrt(")
      .replace(/√([0-9.]+)/g, "sqrt($1)");

    // Balance trailing open parentheses automatically
    let depth = 0;
    for (const ch of s) {
      if (ch === "(") depth++;
      else if (ch === ")" && depth > 0) depth--;
    }
    if (depth > 0) s += ")".repeat(depth);
    return s;
  }

  function tokenizeMath(expr, allowImag = false) {
    const s = normalizeDisplayExpr(expr);
    const rawTokens = [];
    let i = 0;
    while (i < s.length) {
      const ch = s[i];
      if (/\s/.test(ch)) {
        i++;
        continue;
      }
      if (/[0-9.]/.test(ch)) {
        let numStr = "";
        while (i < s.length && /[0-9.]/.test(s[i])) numStr += s[i++];
        if (i < s.length && (s[i] === "e" || s[i] === "E") && /[0-9+-]/.test(s[i + 1] || "")) {
          // Disambiguate scientific notation 1.5e-3 from 2*e constant
          if (/[0-9]/.test(s[i + 1]) || ((s[i + 1] === "+" || s[i + 1] === "-") && /[0-9]/.test(s[i + 2] || ""))) {
            numStr += s[i++];
            if (s[i] === "+" || s[i] === "-") numStr += s[i++];
            while (i < s.length && /[0-9]/.test(s[i])) numStr += s[i++];
          }
        }
        const val = Number(numStr);
        if (Number.isNaN(val)) throw new Error("Syntax Error");
        rawTokens.push({ type: "NUM", val });
        continue;
      }
      if (ch === "π" || ch === "φ" || ch === "∠") {
        if (ch === "∠") rawTokens.push({ type: "OP", val: "∠" });
        else rawTokens.push({ type: "CONST", val: ch });
        i++;
        continue;
      }
      if (ch === "²" || ch === "³") {
        rawTokens.push({ type: "POST", val: ch });
        i++;
        continue;
      }
      if (s.slice(i, i + 2) === "⁻¹") {
        rawTokens.push({ type: "POST", val: "⁻¹" });
        i += 2;
        continue;
      }
      if (/[a-zA-Z_]/.test(ch)) {
        let id = "";
        while (i < s.length && /[a-zA-Z_#]/.test(s[i])) id += s[i++];
        if (id === "log" && s[i] === "2" && s[i + 1] === "(") {
          id = "log2";
          i++;
        }
        if (id === "mod" || id === "P" || id === "C") {
          rawTokens.push({ type: "OP", val: id });
        } else if (id === "pi" || id === "e" || id === "Ans" || id === "M" || id === "x" || id === "Ran#" || (allowImag && id === "i")) {
          rawTokens.push({ type: "CONST", val: id });
        } else {
          rawTokens.push({ type: "FUNC", val: id });
        }
        continue;
      }
      if ("+-*/^(),!%".includes(ch)) {
        if (ch === "(") rawTokens.push({ type: "LPAREN" });
        else if (ch === ")") rawTokens.push({ type: "RPAREN" });
        else if (ch === ",") rawTokens.push({ type: "COMMA" });
        else if (ch === "!" || ch === "%") rawTokens.push({ type: "POST", val: ch });
        else rawTokens.push({ type: "OP", val: ch });
        i++;
        continue;
      }
      throw new Error(`Unexpected symbol '${ch}'`);
    }

    // Insert implicit multiplication tokens
    const tokens = [];
    for (let k = 0; k < rawTokens.length; k++) {
      const cur = rawTokens[k];
      tokens.push(cur);
      const nxt = rawTokens[k + 1];
      if (!nxt) continue;
      const curEndsVal =
        cur.type === "NUM" || cur.type === "CONST" || cur.type === "RPAREN" || cur.type === "POST";
      const nxtStartsVal =
        nxt.type === "CONST" || nxt.type === "FUNC" || nxt.type === "LPAREN" ||
        (nxt.type === "NUM" && (cur.type === "CONST" || cur.type === "RPAREN" || cur.type === "POST"));
      if (curEndsVal && nxtStartsVal) {
        tokens.push({ type: "OP", val: "*" });
      }
    }
    return tokens;
  }

  function evaluateRealExpression(exprStr, ctx) {
    const tokens = tokenizeMath(exprStr, false);
    let pos = 0;
    let extraNote = "";

    const peek = () => tokens[pos];
    const consume = () => tokens[pos++];

    function parseExpr() {
      let left = parseMulDiv();
      while (peek() && peek().type === "OP" && (peek().val === "+" || peek().val === "-")) {
        const op = consume().val;
        const right = parseMulDiv();
        left = op === "+" ? left + right : left - right;
      }
      return left;
    }

    function parseMulDiv() {
      let left = parseCombinatorics();
      while (peek() && peek().type === "OP" && ["*", "/", "mod"].includes(peek().val)) {
        const op = consume().val;
        const right = parseCombinatorics();
        if (op === "*") left *= right;
        else if (op === "/") {
          if (Math.abs(right) < 1e-15) throw new Error("Division by Zero");
          left /= right;
        } else if (op === "mod") {
          if (Math.abs(right) < 1e-15) throw new Error("Division by Zero");
          left = ((left % right) + right) % right;
        }
      }
      return left;
    }

    function parseCombinatorics() {
      let left = parseUnary();
      while (peek() && peek().type === "OP" && (peek().val === "P" || peek().val === "C")) {
        const op = consume().val;
        const right = parseUnary();
        left = op === "P" ? nPrReal(left, right) : nCrReal(left, right);
      }
      return left;
    }

    function parseUnary() {
      if (peek() && peek().type === "OP" && (peek().val === "-" || peek().val === "+")) {
        const op = consume().val;
        const v = parseUnary();
        return op === "-" ? -v : v;
      }
      return parsePower();
    }

    function parsePower() {
      let base = parsePostfix();
      if (peek() && peek().type === "OP" && peek().val === "^") {
        consume();
        const exp = parseUnary();
        base = Math.pow(base, exp);
        if (Number.isNaN(base)) throw new Error("Math Domain Error");
      }
      return base;
    }

    function parsePostfix() {
      let val = parsePrimary();
      while (peek() && peek().type === "POST") {
        const p = consume().val;
        if (p === "!") val = factorialReal(val);
        else if (p === "%") val *= 0.01;
        else if (p === "²") val = val * val;
        else if (p === "³") val = val * val * val;
        else if (p === "⁻¹") {
          if (Math.abs(val) < 1e-15) throw new Error("Division by Zero");
          val = 1 / val;
        }
      }
      return val;
    }

    function parsePrimary() {
      const t = peek();
      if (!t) throw new Error("Incomplete Expression");
      if (t.type === "NUM") {
        consume();
        return t.val;
      }
      if (t.type === "CONST") {
        consume();
        if (t.val === "π" || t.val === "pi") return Math.PI;
        if (t.val === "e") return Math.E;
        if (t.val === "φ") return (1 + Math.sqrt(5)) / 2;
        if (t.val === "Ans") return ctx.ans || 0;
        if (t.val === "M") return ctx.mem || 0;
        if (t.val === "x") return ctx.xVal ?? 0;
        if (t.val === "Ran#") return Math.floor(Math.random() * 1000) / 1000;
        return 0;
      }
      if (t.type === "LPAREN") {
        consume();
        const v = parseExpr();
        if (!peek() || peek().type !== "RPAREN") throw new Error("Missing ')'");
        consume();
        return v;
      }
      if (t.type === "FUNC") {
        const fn = consume().val.toLowerCase();
        let args = [];
        if (peek() && peek().type === "LPAREN") {
          consume();
          if (!peek() || peek().type !== "RPAREN") {
            args.push(parseExpr());
            while (peek() && peek().type === "COMMA") {
              consume();
              args.push(parseExpr());
            }
          }
          if (!peek() || peek().type !== "RPAREN") throw new Error("Missing ')'");
          consume();
        } else {
          args.push(parseUnary());
        }
        const a0 = args[0] ?? 0;
        const a1 = args[1] ?? 0;
        const am = ctx.angleMode || "DEG";

        switch (fn) {
          case "sin": {
            const s = Math.sin(toRad(a0, am));
            return Math.abs(s) < 1e-14 ? 0 : s;
          }
          case "cos": {
            const c = Math.cos(toRad(a0, am));
            return Math.abs(c) < 1e-14 ? 0 : c;
          }
          case "tan": {
            const r = toRad(a0, am);
            const c = Math.cos(r);
            if (Math.abs(c) < 1e-12) throw new Error("Undefined (tan asymptote)");
            const s = Math.sin(r);
            return Math.abs(s) < 1e-14 ? 0 : s / c;
          }
          case "csc":
          case "cosec": {
            const s = Math.sin(toRad(a0, am));
            if (Math.abs(s) < 1e-12) throw new Error("Undefined (csc asymptote)");
            return 1 / s;
          }
          case "sec": {
            const c = Math.cos(toRad(a0, am));
            if (Math.abs(c) < 1e-12) throw new Error("Undefined (sec asymptote)");
            return 1 / c;
          }
          case "cot": {
            const r = toRad(a0, am);
            const s = Math.sin(r);
            if (Math.abs(s) < 1e-12) throw new Error("Undefined (cot asymptote)");
            const c = Math.cos(r);
            return Math.abs(c) < 1e-14 ? 0 : c / s;
          }
          case "asin":
            if (Math.abs(a0) > 1 + 1e-11) throw new Error("Domain Error (|x| ≤ 1)");
            return fromRad(Math.asin(Math.max(-1, Math.min(1, a0))), am);
          case "acos":
            if (Math.abs(a0) > 1 + 1e-11) throw new Error("Domain Error (|x| ≤ 1)");
            return fromRad(Math.acos(Math.max(-1, Math.min(1, a0))), am);
          case "atan":
            return fromRad(Math.atan(a0), am);
          case "acsc":
            if (Math.abs(a0) < 1 - 1e-11) throw new Error("Domain Error (|x| ≥ 1)");
            return fromRad(Math.asin(Math.max(-1, Math.min(1, 1 / a0))), am);
          case "asec":
            if (Math.abs(a0) < 1 - 1e-11) throw new Error("Domain Error (|x| ≥ 1)");
            return fromRad(Math.acos(Math.max(-1, Math.min(1, 1 / a0))), am);
          case "acot":
            return fromRad(Math.PI / 2 - Math.atan(a0), am);
          case "sinh": return Math.sinh(a0);
          case "cosh": return Math.cosh(a0);
          case "tanh": return Math.tanh(a0);
          case "asinh": return Math.asinh(a0);
          case "acosh":
            if (a0 < 1) throw new Error("Domain Error (x ≥ 1)");
            return Math.acosh(a0);
          case "atanh":
            if (Math.abs(a0) >= 1) throw new Error("Domain Error (|x| < 1)");
            return Math.atanh(a0);
          case "ln":
            if (a0 <= 0) throw new Error("Domain Error (x > 0)");
            return Math.log(a0);
          case "log":
            if (a0 <= 0) throw new Error("Domain Error (x > 0)");
            return args.length >= 2 ? Math.log(a1) / Math.log(a0) : Math.log10(a0);
          case "log2":
            if (a0 <= 0) throw new Error("Domain Error (x > 0)");
            return Math.log2(a0);
          case "exp": return Math.exp(a0);
          case "sqrt":
            if (a0 < 0) throw new Error("Real Domain Error (use CMPLX mode for √−x)");
            return Math.sqrt(a0);
          case "cbrt": return Math.cbrt(a0);
          case "abs": return Math.abs(a0);
          case "ncr": return nCrReal(a0, a1);
          case "npr": return nPrReal(a0, a1);
          case "gcd": return gcdInt(a0, a1);
          case "lcm": return Math.abs(Math.round(a0 * a1)) / gcdInt(a0, a1);
          case "pol": {
            const r = Math.hypot(a0, a1);
            const th = fromRad(Math.atan2(a1, a0), am);
            extraNote = `Pol: r = ${Number(r.toFixed(6))}, θ = ${Number(th.toFixed(4))}`;
            return r;
          }
          case "rec": {
            const rad = toRad(a1, am);
            const rx = a0 * Math.cos(rad);
            const ry = a0 * Math.sin(rad);
            extraNote = `Rec: x = ${Number(rx.toFixed(6))}, y = ${Number(ry.toFixed(6))}`;
            return rx;
          }
          default:
            throw new Error(`Unknown function '${fn}'`);
        }
      }
      throw new Error("Syntax Error");
    }

    const value = parseExpr();
    if (pos < tokens.length) throw new Error("Syntax Error");
    return { value, extraNote };
  }

  /* ------------------------------------------------------------------------
     3. Complex Numbers Evaluator (2: CMPLX Mode — Rectangular & Polar/Euler)
     ------------------------------------------------------------------------ */
  const C = {
    make: (re, im = 0) => ({ re: Math.abs(re) < 1e-13 ? 0 : re, im: Math.abs(im) < 1e-13 ? 0 : im }),
    add: (a, b) => C.make(a.re + b.re, a.im + b.im),
    sub: (a, b) => C.make(a.re - b.re, a.im - b.im),
    mul: (a, b) => C.make(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re),
    div: (a, b) => {
      const d = b.re * b.re + b.im * b.im;
      if (d < 1e-24) throw new Error("Complex Division by Zero");
      return C.make((a.re * b.re + a.im * b.im) / d, (a.im * b.re - a.re * b.im) / d);
    },
    abs: (a) => Math.hypot(a.re, a.im),
    arg: (a) => Math.atan2(a.im, a.re),
    exp: (a) => {
      const er = Math.exp(a.re);
      return C.make(er * Math.cos(a.im), er * Math.sin(a.im));
    },
    ln: (a) => {
      const r = C.abs(a);
      if (r < 1e-15) throw new Error("ln(0) Undefined");
      return C.make(Math.log(r), C.arg(a));
    },
    pow: (a, b) => {
      if (a.re === 0 && a.im === 0) return C.make(0, 0);
      if (b.im === 0 && Number.isInteger(b.re) && Math.abs(b.re) <= 64) {
        let res = C.make(1, 0);
        let base = b.re < 0 ? C.div(C.make(1, 0), a) : a;
        for (let k = 0; k < Math.abs(b.re); k++) res = C.mul(res, base);
        return res;
      }
      return C.exp(C.mul(b, C.ln(a)));
    },
    sqrt: (a) => C.pow(a, C.make(0.5, 0))
  };

  function evaluateComplexExpression(exprStr, ctx) {
    const tokens = tokenizeMath(exprStr, true);
    let pos = 0;
    const am = ctx.angleMode || "DEG";
    const peek = () => tokens[pos];
    const consume = () => tokens[pos++];

    function parseExpr() {
      let left = parseMulDiv();
      while (peek() && peek().type === "OP" && (peek().val === "+" || peek().val === "-")) {
        const op = consume().val;
        const right = parseMulDiv();
        left = op === "+" ? C.add(left, right) : C.sub(left, right);
      }
      return left;
    }

    function parseMulDiv() {
      let left = parsePhasor();
      while (peek() && peek().type === "OP" && (peek().val === "*" || peek().val === "/")) {
        const op = consume().val;
        const right = parsePhasor();
        left = op === "*" ? C.mul(left, right) : C.div(left, right);
      }
      return left;
    }

    function parsePhasor() {
      let left = parseUnary();
      while (peek() && peek().type === "OP" && peek().val === "∠") {
        consume();
        const ang = parseUnary();
        const rad = toRad(ang.re, am);
        left = C.mul(left, C.make(Math.cos(rad), Math.sin(rad)));
      }
      return left;
    }

    function parseUnary() {
      if (peek() && peek().type === "OP" && (peek().val === "-" || peek().val === "+")) {
        const op = consume().val;
        const v = parseUnary();
        return op === "-" ? C.make(-v.re, -v.im) : v;
      }
      return parsePower();
    }

    function parsePower() {
      let base = parsePostfix();
      if (peek() && peek().type === "OP" && peek().val === "^") {
        consume();
        const exp = parseUnary();
        base = C.pow(base, exp);
      }
      return base;
    }

    function parsePostfix() {
      let val = parsePrimary();
      while (peek() && peek().type === "POST") {
        const p = consume().val;
        if (p === "²") val = C.mul(val, val);
        else if (p === "³") val = C.mul(C.mul(val, val), val);
        else if (p === "⁻¹") val = C.div(C.make(1, 0), val);
        else if (p === "%") val = C.make(val.re * 0.01, val.im * 0.01);
      }
      return val;
    }

    function parsePrimary() {
      const t = peek();
      if (!t) throw new Error("Incomplete Expression");
      if (t.type === "NUM") {
        consume();
        return C.make(t.val, 0);
      }
      if (t.type === "CONST") {
        consume();
        if (t.val === "i") return C.make(0, 1);
        if (t.val === "π" || t.val === "pi") return C.make(Math.PI, 0);
        if (t.val === "e") return C.make(Math.E, 0);
        if (t.val === "Ans") return ctx.ansComplex || C.make(ctx.ans || 0, 0);
        if (t.val === "M") return C.make(ctx.mem || 0, 0);
        return C.make(0, 0);
      }
      if (t.type === "LPAREN") {
        consume();
        const v = parseExpr();
        if (!peek() || peek().type !== "RPAREN") throw new Error("Missing ')'");
        consume();
        return v;
      }
      if (t.type === "FUNC") {
        const fn = consume().val.toLowerCase();
        let arg;
        if (peek() && peek().type === "LPAREN") {
          consume();
          arg = parseExpr();
          if (!peek() || peek().type !== "RPAREN") throw new Error("Missing ')'");
          consume();
        } else {
          arg = parseUnary();
        }
        if (fn === "sqrt") return C.sqrt(arg);
        if (fn === "conj") return C.make(arg.re, -arg.im);
        if (fn === "abs") return C.make(C.abs(arg), 0);
        if (fn === "arg") return C.make(fromRad(C.arg(arg), am), 0);
        if (fn === "re") return C.make(arg.re, 0);
        if (fn === "im") return C.make(arg.im, 0);
        if (fn === "exp") return C.exp(arg);
        if (fn === "ln") return C.ln(arg);
        if (fn === "sin") {
          const iz = C.mul(C.make(0, 1), arg);
          const miz = C.mul(C.make(0, -1), arg);
          return C.div(C.sub(C.exp(iz), C.exp(miz)), C.make(0, 2));
        }
        if (fn === "cos") {
          const iz = C.mul(C.make(0, 1), arg);
          const miz = C.mul(C.make(0, -1), arg);
          return C.div(C.add(C.exp(iz), C.exp(miz)), C.make(2, 0));
        }
        throw new Error(`Unsupported complex function '${fn}'`);
      }
      throw new Error("Syntax Error");
    }

    const z = parseExpr();
    if (pos < tokens.length) throw new Error("Syntax Error");
    return z;
  }

  function formatComplexRect(z, fmtMode) {
    const re = Math.abs(z.re) < 1e-12 ? 0 : z.re;
    const im = Math.abs(z.im) < 1e-12 ? 0 : z.im;
    if (im === 0) return formatNumberByMode(re, fmtMode);
    const absIm = Math.abs(im);
    const imPart = Math.abs(absIm - 1) < 1e-12 ? "i" : `${formatNumberByMode(absIm, fmtMode)}i`;
    if (re === 0) return im < 0 ? `−${imPart}` : imPart;
    return `${formatNumberByMode(re, fmtMode)} ${im < 0 ? "−" : "+"} ${imPart}`;
  }

  function formatComplexPolar(z, angleMode) {
    const r = C.abs(z);
    const th = fromRad(C.arg(z), angleMode);
    const sym = angleMode === "DEG" ? "°" : angleMode === "GRAD" ? " gon" : " rad";
    return `${Number(r.toFixed(6))} ∠ ${Number(th.toFixed(4))}${sym}`;
  }

  /* ------------------------------------------------------------------------
     4. Equation Solvers (3: EQN Mode)
     ------------------------------------------------------------------------ */
  function solveQuadratic(a, b, c) {
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) < 1e-12) return { err: "Degenerate equation (a = 0, b = 0)." };
      return { lines: [`Linear Root: x = ${Number((-c / b).toFixed(6))}`] };
    }
    const disc = b * b - 4 * a * c;
    const vx = -b / (2 * a);
    const vy = a * vx * vx + b * vx + c;
    if (disc >= -1e-12) {
      const sd = Math.sqrt(Math.max(0, disc));
      const x1 = (-b + sd) / (2 * a);
      const x2 = (-b - sd) / (2 * a);
      const ex1 = detectExactSymbolic(x1);
      const ex2 = detectExactSymbolic(x2);
      return {
        lines: [
          `Δ = ${Number(disc.toFixed(6))} (${Math.abs(disc) < 1e-10 ? "Repeated Real Root" : "2 Distinct Real Roots"})`,
          `x₁ = ${Number(x1.toFixed(6))}${ex1 ? `  [${ex1}]` : ""}`,
          `x₂ = ${Number(x2.toFixed(6))}${ex2 ? `  [${ex2}]` : ""}`,
          `Vertex: (${Number(vx.toFixed(4))}, ${Number(vy.toFixed(4))})`
        ]
      };
    }
    const re = -b / (2 * a);
    const im = Math.sqrt(-disc) / Math.abs(2 * a);
    return {
      lines: [
        `Δ = ${Number(disc.toFixed(6))} < 0 (Complex Conjugate Roots)`,
        `x₁ = ${Number(re.toFixed(5))} + ${Number(im.toFixed(5))}i`,
        `x₂ = ${Number(re.toFixed(5))} − ${Number(im.toFixed(5))}i`,
        `Vertex: (${Number(vx.toFixed(4))}, ${Number(vy.toFixed(4))})`
      ]
    };
  }

  function solveCubic(a, b, c, d) {
    if (Math.abs(a) < 1e-12) return solveQuadratic(b, c, d);
    const A = b / a, B = c / a, D = d / a;
    const p = B - (A * A) / 3;
    const q = (2 * A * A * A) / 27 - (A * B) / 3 + D;
    const disc = (q * q) / 4 + (p * p * p) / 27;
    const shift = -A / 3;
    if (disc > 1e-11) {
      const sd = Math.sqrt(disc);
      const u = Math.cbrt(-q / 2 + sd);
      const v = Math.cbrt(-q / 2 - sd);
      const x1 = u + v + shift;
      const re = -(u + v) / 2 + shift;
      const im = ((Math.sqrt(3) / 2) * Math.abs(u - v));
      return {
        lines: [
          `x₁ = ${Number(x1.toFixed(6))} (Real)`,
          `x₂ = ${Number(re.toFixed(5))} + ${Number(im.toFixed(5))}i`,
          `x₃ = ${Number(re.toFixed(5))} − ${Number(im.toFixed(5))}i`
        ]
      };
    }
    const r = Math.sqrt(Math.max(0, -(p * p * p) / 27));
    const phi = r < 1e-14 ? 0 : Math.acos(Math.max(-1, Math.min(1, -q / (2 * r))));
    const m = 2 * Math.cbrt(r);
    const x1 = m * Math.cos(phi / 3) + shift;
    const x2 = m * Math.cos((phi + 2 * Math.PI) / 3) + shift;
    const x3 = m * Math.cos((phi + 4 * Math.PI) / 3) + shift;
    return {
      lines: [
        `x₁ = ${Number(x1.toFixed(6))}`,
        `x₂ = ${Number(x2.toFixed(6))}`,
        `x₃ = ${Number(x3.toFixed(6))}`
      ]
    };
  }

  function solveLinear2x2(a1, b1, c1, a2, b2, c2) {
    const det = a1 * b2 - a2 * b1;
    const dx = c1 * b2 - c2 * b1;
    const dy = a1 * c2 - a2 * c1;
    if (Math.abs(det) < 1e-12) {
      return {
        err: Math.abs(dx) < 1e-11 && Math.abs(dy) < 1e-11
          ? "Infinite Solutions (Coincident Lines, det = 0)."
          : "No Solution (Parallel Lines, det = 0)."
      };
    }
    const x = dx / det;
    const y = dy / det;
    const ex = detectExactSymbolic(x);
    const ey = detectExactSymbolic(y);
    return {
      lines: [
        `Determinant Δ = ${Number(det.toFixed(6))}`,
        `x = ${Number(x.toFixed(6))}${ex ? `  [${ex}]` : ""}`,
        `y = ${Number(y.toFixed(6))}${ey ? `  [${ey}]` : ""}`
      ]
    };
  }

  function solveLinearTrig(a, b, c, angleMode) {
    const R = Math.hypot(a, b);
    if (R < 1e-12) return { err: "Coefficients a and b cannot both be 0." };
    if (Math.abs(c) > R + 1e-10) {
      return { err: `No Real Solution: |c| = ${Math.abs(c)} exceeds R = √(a²+b²) = ${Number(R.toFixed(5))}!` };
    }
    // Rewrite a sin θ + b cos θ = R cos(θ − α) where cos α = b/R, sin α = a/R
    const alpha = Math.atan2(a, b);
    const gamma = Math.acos(Math.max(-1, Math.min(1, c / R)));
    const rootsRad = [];
    [alpha + gamma, alpha - gamma].forEach((r) => {
      const norm = ((r % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      if (!rootsRad.some((u) => Math.abs(u - norm) < 1e-5)) rootsRad.push(norm);
    });
    rootsRad.sort((u, v) => u - v);
    const sym = angleMode === "DEG" ? "°" : angleMode === "GRAD" ? "g" : " rad";
    return {
      lines: [
        `Auxiliary Form: R = √(a²+b²) = ${Number(R.toFixed(5))},  cos(θ − ${Number(fromRad(alpha, angleMode).toFixed(2))}${sym}) = ${Number((c / R).toFixed(5))}`,
        `Principal Roots: ${rootsRad.map((r) => `${Number(fromRad(r, angleMode).toFixed(3))}${sym}`).join(" ,  ")}`,
        `General (rad): θ = 2nπ + ${Number(alpha.toFixed(4))} ± ${Number(gamma.toFixed(4))},  n ∈ ℤ`
      ]
    };
  }

  /* ------------------------------------------------------------------------
     5. BASE-N Programmer Evaluator (5: BASE-N Mode)
     ------------------------------------------------------------------------ */
  function evalBaseN(exprStr, base) {
    const clean = String(exprStr || "0")
      .trim()
      .toUpperCase()
      .replace(/−/g, "-")
      .replace(/×/g, "*")
      .replace(/÷/g, "/");
    if (!clean) return 0;

    const radix = { DEC: 10, HEX: 16, BIN: 2, OCT: 8 }[base] || 10;
    const validDigit = {
      10: /^[0-9]+$/,
      16: /^[0-9A-F]+$/,
      2: /^[01]+$/,
      8: /^[0-7]+$/
    }[radix];

    // Tokenize words/hex numbers and bitwise operators
    const jsExpr = clean
      .replace(/\bAND\b/g, "&")
      .replace(/\bOR\b/g, "|")
      .replace(/\bXOR\b/g, "^")
      .replace(/\bNOT\b/g, "~")
      .replace(/[0-9A-Z]+/g, (tok) => {
        if (!validDigit.test(tok)) {
          throw new Error(`Invalid ${base} digit '${tok}'`);
        }
        return String(parseInt(tok, radix));
      });

    if (!/^[0-9+\-*/%&|^~<>()\s]+$/.test(jsExpr)) {
      throw new Error("Invalid BASE-N Expression");
    }
    // Safe integer arithmetic via Function on strictly whitelisted integer/bitwise chars
    const raw = Function(`"use strict"; return (${jsExpr});`)();
    if (!Number.isFinite(raw)) throw new Error("Division by Zero");
    return Math.trunc(raw) | 0; // 32-bit signed integer just like Casio BASE-N
  }

  /* ------------------------------------------------------------------------
     6. Reusable Scientific Calculator Widget Class
     ------------------------------------------------------------------------ */
  class TrigScientificCalculator {
    constructor(mountEl, opts = {}) {
      this.mountEl = mountEl;
      this.compact = Boolean(opts.compact);
      this.mode = "COMP";         // COMP | CMPLX | EQN | TABLE | BASEN | VECT
      this.angleMode = "DEG";     // DEG | RAD | GRAD
      this.fmtMode = "NORM";      // NORM | FIX | SCI | ENG
      this.shift = false;
      this.hyp = false;
      this.preferDecimal = false;
      this.dmsActive = false;

      // COMP / CMPLX state
      this.expr = "sin(30)+cos(60)^2";
      this.ans = 0.75;
      this.ansComplex = { re: 0.75, im: 0 };
      this.mem = 0;
      this.history = [{ expr: "sin(30)+cos(60)^2", res: "0.75", exact: "3/4" }];
      this.histIdx = -1;
      this.freshResult = true;

      // EQN state
      this.eqnType = "QUAD"; // QUAD | CUBIC | SYS2 | TRIG
      this.eqnVals = { QUAD: ["1", "-5", "6"], CUBIC: ["1", "-6", "11", "-6"], SYS2: ["2", "3", "13", "1", "-1", "1"], TRIG: ["1", "1", "1"] };
      this.eqnSlot = 0;

      // TABLE state
      this.tblF = "sin(x)";
      this.tblG = "cos(x)";
      this.tblStart = "0";
      this.tblEnd = "180";
      this.tblStep = "30";
      this.tblActiveField = "tblF";

      // BASE-N state
      this.baseMode = "DEC"; // DEC | HEX | BIN | OCT
      this.baseExpr = "42";

      // VECT / STAT state
      this.vsType = "VECT"; // VECT | STAT
      this.vectVals = ["1", "2", "2", "2", "1", "-2"];
      this.vectSlot = 0;
      this.statData = "12, 15, 18, 22, 25, 30";

      this.renderShell();
      this.evaluateCurrent();
    }

    renderShell() {
      this.mountEl.innerHTML = `
        <article class="calc-device sci-master-device ${this.compact ? "is-floating-compact" : ""}" aria-label="Full Multi-Mode Scientific Calculator">
          <div class="calc-chassis-screws" aria-hidden="true"><span></span><span></span></div>

          <header class="calc-brand-bar">
            <div class="calc-brand-left">
              <div class="calc-maker-row">
                <span class="calc-maker">TRIGVERSE</span>
                <span class="calc-model">fx-991CW CLASSWIZ</span>
              </div>
              <div class="calc-submodel">FULL SCIENTIFIC CALCULATOR • ALL 6 MODES</div>
            </div>
            <div class="calc-solar-wrap" aria-hidden="true">
              <div class="calc-solar-panel">
                <span></span><span></span><span></span><span></span>
              </div>
              <span class="calc-solar-label">NATURAL-V.P.A.M. • 2-WAY</span>
            </div>
          </header>

          <!-- 6-Mode Hardware Selector Bar -->
          <div class="sci-mode-strip" role="tablist" aria-label="Scientific Calculator Modes">
            <button type="button" class="sci-mode-pill active" data-sci-mode="COMP">1:COMP</button>
            <button type="button" class="sci-mode-pill" data-sci-mode="CMPLX">2:CMPLX</button>
            <button type="button" class="sci-mode-pill" data-sci-mode="EQN">3:EQN</button>
            <button type="button" class="sci-mode-pill" data-sci-mode="TABLE">4:TABLE</button>
            <button type="button" class="sci-mode-pill" data-sci-mode="BASEN">5:BASE-N</button>
            <button type="button" class="sci-mode-pill" data-sci-mode="VECT">6:VECT·STAT</button>
          </div>

          <div class="sci-master-body">
            <!-- Recessed Multi-Line Natural Textbook LCD -->
            <div class="calc-screen-bezel sci-screen-bezel">
              <div class="calc-lcd sci-lcd">
                <div class="calc-lcd-status sci-lcd-status">
                  <div class="sci-flag-group">
                    <span class="sci-flag" data-flag="shift">S</span>
                    <span class="sci-flag" data-flag="hyp">HYP</span>
                    <span class="sci-flag" data-flag="mem">M</span>
                  </div>
                  <div class="calc-lcd-modes" data-role="angle-pills">
                    <span class="active" data-set-ang="DEG">DEG</span>
                    <span data-set-ang="RAD">RAD</span>
                    <span data-set-ang="GRAD">GRAD</span>
                  </div>
                  <span class="sci-fmt-pill" data-role="fmt-badge" title="Click to cycle NORM / FIX / SCI / ENG">NORM</span>
                  <span class="calc-lcd-quad" data-role="mode-badge">MODE: COMP</span>
                </div>

                <!-- Dynamic Mode Viewport inside LCD -->
                <div class="sci-lcd-viewport" data-role="viewport"></div>
              </div>
            </div>

            <!-- Authentic Casio fx-991CW Tactile Keypad -->
            <div class="calc-keypad sci-keypad">
              <!-- Context Strip for BASE-N Hex/Bitwise when in Mode 5 -->
              <div class="sci-basen-pad" data-role="basen-pad" hidden>
                <div class="calc-key-row calc-row-4" style="margin-bottom:0.38rem;">
                  <button type="button" class="calc-key key-mode active" data-base-sel="DEC">DEC (10)</button>
                  <button type="button" class="calc-key key-mode" data-base-sel="HEX">HEX (16)</button>
                  <button type="button" class="calc-key key-mode" data-base-sel="BIN">BIN (2)</button>
                  <button type="button" class="calc-key key-mode" data-base-sel="OCT">OCT (8)</button>
                </div>
                <div class="calc-key-row calc-row-6" style="margin-bottom:0.38rem;">
                  <button type="button" class="calc-key key-const" data-ins="A">A</button>
                  <button type="button" class="calc-key key-const" data-ins="B">B</button>
                  <button type="button" class="calc-key key-const" data-ins="C">C</button>
                  <button type="button" class="calc-key key-const" data-ins="D">D</button>
                  <button type="button" class="calc-key key-const" data-ins="E">E</button>
                  <button type="button" class="calc-key key-const" data-ins="F">F</button>
                </div>
                <div class="calc-key-row calc-row-6" style="margin-bottom:0.38rem;">
                  <button type="button" class="calc-key key-const" data-ins=" AND ">AND</button>
                  <button type="button" class="calc-key key-const" data-ins=" OR ">OR</button>
                  <button type="button" class="calc-key key-const" data-ins=" XOR ">XOR</button>
                  <button type="button" class="calc-key key-const" data-ins="NOT(">NOT</button>
                  <button type="button" class="calc-key key-const" data-ins="<<">&lt;&lt;</button>
                  <button type="button" class="calc-key key-const" data-ins=">>">&gt;&gt;</button>
                </div>
              </div>

              <!-- Row 1: Shift / Hyp / Angle / Format / History Replay -->
              <div class="calc-key-row calc-row-6">
                <button type="button" class="calc-key key-shift" data-act="shift" title="Toggle 2nd Functions">SHIFT</button>
                <button type="button" class="calc-key key-hyp" data-act="hyp" title="Hyperbolic Functions">HYP</button>
                <button type="button" class="calc-key key-mode" data-act="drg" title="Cycle DEG / RAD / GRAD">DRG▸</button>
                <button type="button" class="calc-key key-mode" data-act="fmt" title="Cycle NORM / FIX / SCI / ENG">FMT</button>
                <button type="button" class="calc-key key-const" data-act="hist-prev" title="Previous Calculation">▲</button>
                <button type="button" class="calc-key key-const" data-act="hist-next" title="Next Calculation">▼</button>
              </div>

              <!-- Row 2: Memory Registers, DMS & Exact S⇔D -->
              <div class="calc-key-row calc-row-6">
                <button type="button" class="calc-key key-const" data-act="mc" title="Memory Clear">MC</button>
                <button type="button" class="calc-key key-const" data-act="mr" title="Memory Recall">MR</button>
                <button type="button" class="calc-key key-const" data-act="m-" title="Memory Subtract">M−</button>
                <button type="button" class="calc-key key-const" data-act="m+" title="Memory Add">M+</button>
                <button type="button" class="calc-key key-fn-alt" data-act="dms" title="Degrees-Minutes-Seconds (° ′ ″)">° ′ ″</button>
                <button type="button" class="calc-key key-sd" data-act="sd" title="Toggle Exact Symbolic ⇔ Decimal">S⇔D</button>
              </div>

              <!-- Row 3: Trigonometric & Inverse/Hyperbolic Keys -->
              <div class="calc-key-row calc-row-6" data-role="trig-row">
                <button type="button" class="calc-key key-sci" data-fn-pair="sin(|sin⁻¹("><span class="key-legend">sin⁻¹</span><span class="key-main" data-trig-cap="sin">sin</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="cos(|cos⁻¹("><span class="key-legend">cos⁻¹</span><span class="key-main" data-trig-cap="cos">cos</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="tan(|tan⁻¹("><span class="key-legend">tan⁻¹</span><span class="key-main" data-trig-cap="tan">tan</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="csc(|csc⁻¹("><span class="key-legend">csc⁻¹</span><span class="key-main">csc</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="sec(|sec⁻¹("><span class="key-legend">sec⁻¹</span><span class="key-main">sec</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="cot(|cot⁻¹("><span class="key-legend">cot⁻¹</span><span class="key-main">cot</span></button>
              </div>

              <!-- Row 4: Powers, Roots, Logs & Exponentials -->
              <div class="calc-key-row calc-row-6">
                <button type="button" class="calc-key key-sci" data-fn-pair="²|³"><span class="key-legend">x³</span><span class="key-main">x²</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="^|^(1/"><span class="key-legend">ˣ√y</span><span class="key-main">xʸ</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="√(|³√("><span class="key-legend">³√</span><span class="key-main">√</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="⁻¹|!"><span class="key-legend">n!</span><span class="key-main">x⁻¹</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="ln(|exp("><span class="key-legend">eˣ</span><span class="key-main">ln</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="log(|10^("><span class="key-legend">10ˣ</span><span class="key-main">log</span></button>
              </div>

              <!-- Row 5: Parentheses, Combinatorics, Constants & Complex i/∠ -->
              <div class="calc-key-row calc-row-6">
                <button type="button" class="calc-key key-sci" data-fn-pair="(|Pol("><span class="key-legend">Pol(</span><span class="key-main">(</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair=")|Rec("><span class="key-legend">Rec(</span><span class="key-main">)</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="C|P"><span class="key-legend">nPr</span><span class="key-main">nCr</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="abs(|,"><span class="key-legend">,</span><span class="key-main">|x|</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="π|e"><span class="key-legend">e</span><span class="key-main">π</span></button>
                <button type="button" class="calc-key key-sci" data-fn-pair="i|∠"><span class="key-legend">∠ θ</span><span class="key-main">i / x</span></button>
              </div>

              <!-- Rows 6–9: Classic 5-Column Casio Numeric & Arithmetic Deck -->
              <div class="calc-key-row calc-row-5">
                <button type="button" class="calc-key key-num" data-ins="7">7</button>
                <button type="button" class="calc-key key-num" data-ins="8">8</button>
                <button type="button" class="calc-key key-num" data-ins="9">9</button>
                <button type="button" class="calc-key key-del" data-act="del">DEL</button>
                <button type="button" class="calc-key key-ac" data-act="ac">AC</button>
              </div>
              <div class="calc-key-row calc-row-5">
                <button type="button" class="calc-key key-num" data-ins="4">4</button>
                <button type="button" class="calc-key key-num" data-ins="5">5</button>
                <button type="button" class="calc-key key-num" data-ins="6">6</button>
                <button type="button" class="calc-key key-fn-alt" data-ins="×">×</button>
                <button type="button" class="calc-key key-fn-alt" data-ins="÷">÷</button>
              </div>
              <div class="calc-key-row calc-row-5">
                <button type="button" class="calc-key key-num" data-ins="1">1</button>
                <button type="button" class="calc-key key-num" data-ins="2">2</button>
                <button type="button" class="calc-key key-num" data-ins="3">3</button>
                <button type="button" class="calc-key key-fn-alt" data-ins="+">+</button>
                <button type="button" class="calc-key key-fn-alt" data-ins="−">−</button>
              </div>
              <div class="calc-key-row calc-row-5">
                <button type="button" class="calc-key key-num" data-ins="0">0</button>
                <button type="button" class="calc-key key-num" data-fn-pair=".|Ran#">.</button>
                <button type="button" class="calc-key key-fn-alt" data-fn-pair="*10^(|%">×10ˣ</button>
                <button type="button" class="calc-key key-fn-alt" data-act="ans">Ans</button>
                <button type="button" class="calc-key key-eq" data-act="eval">=</button>
              </div>
            </div>
          </div>
        </article>
      `;

      this.bindEvents();
    }

    syncIndicators() {
      const root = this.mountEl;
      root.querySelector('[data-flag="shift"]')?.classList.toggle("on", this.shift);
      root.querySelector('[data-flag="hyp"]')?.classList.toggle("on", this.hyp);
      root.querySelector('[data-flag="mem"]')?.classList.toggle("on", Math.abs(this.mem) > 1e-14);
      root.querySelector('[data-act="shift"]')?.classList.toggle("active", this.shift);
      root.querySelector('[data-act="hyp"]')?.classList.toggle("active", this.hyp);

      root.querySelectorAll("[data-sci-mode]").forEach((b) => {
        b.classList.toggle("active", b.dataset.sciMode === this.mode);
      });
      root.querySelectorAll("[data-set-ang]").forEach((s) => {
        s.classList.toggle("active", s.dataset.setAng === this.angleMode);
      });

      const fmtEl = root.querySelector('[data-role="fmt-badge"]');
      if (fmtEl) fmtEl.textContent = this.fmtMode;
      const modeEl = root.querySelector('[data-role="mode-badge"]');
      if (modeEl) modeEl.textContent = `MODE: ${this.mode === "BASEN" ? `BASE-${this.baseMode}` : this.mode}`;

      const basenPad = root.querySelector('[data-role="basen-pad"]');
      if (basenPad) {
        basenPad.hidden = this.mode !== "BASEN";
        basenPad.querySelectorAll("[data-base-sel]").forEach((b) => {
          b.classList.toggle("active", b.dataset.baseSel === this.baseMode);
        });
      }

      // Update sin/cos/tan captions when HYP or SHIFT is toggled
      ["sin", "cos", "tan"].forEach((fn) => {
        const cap = root.querySelector(`[data-trig-cap="${fn}"]`);
        if (cap) {
          const base = this.hyp ? `${fn}h` : fn;
          cap.textContent = this.shift ? `${base}⁻¹` : base;
        }
      });
    }

    getActiveInputTarget() {
      if (this.mode === "COMP" || this.mode === "CMPLX") return { get: () => this.expr, set: (v) => { this.expr = v; } };
      if (this.mode === "BASEN") return { get: () => this.baseExpr, set: (v) => { this.baseExpr = v; } };
      if (this.mode === "EQN") {
        const arr = this.eqnVals[this.eqnType];
        return { get: () => arr[this.eqnSlot] || "", set: (v) => { arr[this.eqnSlot] = v; } };
      }
      if (this.mode === "TABLE") {
        return { get: () => this[this.tblActiveField] || "", set: (v) => { this[this.tblActiveField] = v; } };
      }
      if (this.mode === "VECT") {
        if (this.vsType === "STAT") {
          return { get: () => this.statData, set: (v) => { this.statData = v; } };
        }
        return { get: () => this.vectVals[this.vectSlot] || "", set: (v) => { this.vectVals[this.vectSlot] = v; } };
      }
      return { get: () => "", set: () => {} };
    }

    insertToken(tok) {
      const target = this.getActiveInputTarget();
      let cur = String(target.get() || "");
      const isBinaryOp = ["+", "−", "×", "÷", "^", "^(1/", "²", "³", "⁻¹", "!", "%", "C", "P", "∠"].includes(tok);
      if ((this.mode === "COMP" || this.mode === "CMPLX") && this.freshResult) {
        cur = isBinaryOp ? `Ans${tok}` : tok;
        this.freshResult = false;
      } else {
        cur = cur === "0" && !isBinaryOp && tok !== "." ? tok : cur + tok;
      }
      this.dmsActive = false;
      target.set(cur);
      this.shift = false;
      this.hyp = false;
      this.renderViewportOnly();
    }

    bindEvents() {
      const root = this.mountEl;

      root.querySelectorAll("[data-sci-mode]").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.mode = btn.dataset.sciMode;
          if (this.mode === "CMPLX" && this.expr === "sin(30)+cos(60)^2") {
            this.expr = "(3+4i)*(1−2i)";
          }
          this.shift = false;
          this.hyp = false;
          this.evaluateCurrent();
        });
      });

      root.querySelectorAll("[data-set-ang]").forEach((sp) => {
        sp.addEventListener("click", () => {
          this.angleMode = sp.dataset.setAng;
          this.evaluateCurrent();
        });
      });

      root.querySelector('[data-role="fmt-badge"]')?.addEventListener("click", () => {
        const order = ["NORM", "FIX", "SCI", "ENG"];
        this.fmtMode = order[(order.indexOf(this.fmtMode) + 1) % order.length];
        this.evaluateCurrent();
      });

      root.querySelectorAll("[data-base-sel]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const nextBase = btn.dataset.baseSel;
          try {
            const val = evalBaseN(this.baseExpr, this.baseMode);
            const radix = { DEC: 10, HEX: 16, BIN: 2, OCT: 8 }[nextBase];
            this.baseExpr = nextBase === "DEC" ? String(val) : (val >>> 0).toString(radix).toUpperCase();
          } catch (_) {
            this.baseExpr = "0";
          }
          this.baseMode = nextBase;
          this.evaluateCurrent();
        });
      });

      root.querySelectorAll("[data-ins]").forEach((btn) => {
        btn.addEventListener("click", () => this.insertToken(btn.dataset.ins));
      });

      root.querySelectorAll("[data-fn-pair]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const [primary, shifted] = btn.dataset.fnPair.split("|");
          // Special handling for sin/cos/tan with HYP mode + i/x key in TABLE mode
          if (["sin(", "cos(", "tan("].includes(primary) && this.hyp) {
            const base = primary.slice(0, 3) + "h";
            this.insertToken(this.shift ? `${base}⁻¹(` : `${base}(`);
            return;
          }
          if (primary === "i" && !this.shift && this.mode === "TABLE") {
            this.insertToken("x");
            return;
          }
          this.insertToken(this.shift ? shifted : primary);
        });
      });

      root.querySelectorAll("[data-act]").forEach((btn) => {
        btn.addEventListener("click", () => this.handleAction(btn.dataset.act));
      });
    }

    handleAction(act) {
      if (act === "shift") {
        this.shift = !this.shift;
        this.syncIndicators();
        return;
      }
      if (act === "hyp") {
        this.hyp = !this.hyp;
        this.syncIndicators();
        return;
      }
      if (act === "drg") {
        const order = ["DEG", "RAD", "GRAD"];
        this.angleMode = order[(order.indexOf(this.angleMode) + 1) % order.length];
        this.evaluateCurrent();
        return;
      }
      if (act === "fmt") {
        const order = ["NORM", "FIX", "SCI", "ENG"];
        this.fmtMode = order[(order.indexOf(this.fmtMode) + 1) % order.length];
        this.evaluateCurrent();
        return;
      }
      if (act === "sd") {
        this.dmsActive = false;
        this.preferDecimal = !this.preferDecimal;
        this.evaluateCurrent();
        return;
      }
      if (act === "dms") {
        this.dmsActive = !this.dmsActive;
        this.evaluateCurrent();
        return;
      }
      if (act === "mc") {
        this.mem = 0;
        this.syncIndicators();
        return;
      }
      if (act === "mr") {
        this.insertToken("M");
        return;
      }
      if (act === "m+" || act === "m-") {
        this.evaluateCurrent();
        if (Number.isFinite(this.ans)) {
          this.mem += act === "m+" ? this.ans : -this.ans;
        }
        this.syncIndicators();
        return;
      }
      if (act === "hist-prev" && this.history.length > 0) {
        this.histIdx = this.histIdx <= 0 ? this.history.length - 1 : this.histIdx - 1;
        this.expr = this.history[this.histIdx].expr;
        this.freshResult = false;
        this.evaluateCurrent(false);
        return;
      }
      if (act === "hist-next" && this.history.length > 0) {
        this.histIdx = (this.histIdx + 1) % this.history.length;
        this.expr = this.history[this.histIdx].expr;
        this.freshResult = false;
        this.evaluateCurrent(false);
        return;
      }
      if (act === "ans") {
        this.insertToken("Ans");
        return;
      }
      if (act === "del") {
        const target = this.getActiveInputTarget();
        const cur = String(target.get() || "");
        target.set(cur.length <= 1 ? "0" : cur.slice(0, -1));
        this.freshResult = false;
        this.renderViewportOnly();
        return;
      }
      if (act === "ac") {
        const target = this.getActiveInputTarget();
        target.set("0");
        this.freshResult = true;
        this.dmsActive = false;
        this.evaluateCurrent(false);
        return;
      }
      if (act === "eval") {
        if (this.mode === "EQN") {
          const len = this.eqnVals[this.eqnType].length;
          this.eqnSlot = (this.eqnSlot + 1) % len;
        }
        this.freshResult = true;
        this.evaluateCurrent(true);
      }
    }

    renderViewportOnly() {
      this.evaluateCurrent(false);
    }

    evaluateCurrent(recordHistory = false) {
      this.syncIndicators();
      const vp = this.mountEl.querySelector('[data-role="viewport"]');
      if (!vp) return;

      if (this.mode === "COMP") {
        this.renderCompViewport(vp, recordHistory);
      } else if (this.mode === "CMPLX") {
        this.renderCmplxViewport(vp, recordHistory);
      } else if (this.mode === "EQN") {
        this.renderEqnViewport(vp);
      } else if (this.mode === "TABLE") {
        this.renderTableViewport(vp);
      } else if (this.mode === "BASEN") {
        this.renderBaseNViewport(vp);
      } else if (this.mode === "VECT") {
        this.renderVectStatViewport(vp);
      }
    }

    renderCompViewport(vp, recordHistory) {
      let resStr = "";
      let exactBadge = "";
      let noteBadge = "";
      let isErr = false;

      try {
        const { value, extraNote } = evaluateRealExpression(this.expr, {
          angleMode: this.angleMode,
          ans: this.ans,
          mem: this.mem
        });
        if (!Number.isFinite(value)) throw new Error("Math Overflow");
        if (recordHistory) {
          this.ans = value;
          this.ansComplex = { re: value, im: 0 };
        }
        const exact = detectExactSymbolic(value);
        const decStr = formatNumberByMode(value, this.fmtMode);
        if (this.dmsActive) {
          resStr = formatDMS(value);
          exactBadge = `DEC: ${decStr}`;
        } else if (exact && !this.preferDecimal) {
          resStr = exact;
          exactBadge = `≈ ${decStr}`;
        } else {
          resStr = decStr;
          if (exact) exactBadge = `EXACT: ${exact}`;
        }
        noteBadge = extraNote;
        if (recordHistory && this.expr.trim() && this.expr !== "0") {
          const last = this.history[this.history.length - 1];
          if (!last || last.expr !== this.expr) {
            this.history.push({ expr: this.expr, res: decStr, exact: exact || "" });
            if (this.history.length > 15) this.history.shift();
          }
          this.histIdx = this.history.length - 1;
        }
      } catch (err) {
        isErr = true;
        resStr = err.message || "Syntax Error";
      }

      const lastHist = this.history[this.history.length - 1];
      vp.innerHTML = `
        <div class="sci-hist-line">
          <span>${lastHist ? `Ans = ${lastHist.res}${lastHist.exact ? ` (${lastHist.exact})` : ""}` : "Ready"}</span>
          <span>M = ${Number(this.mem.toFixed(4))}</span>
        </div>
        <div class="calc-lcd-entry-row sci-expr-row">
          <input type="text" name="sci-comp-expr" class="calc-lcd-input sci-expr-input" data-role="comp-input" value="${this.expr.replace(/"/g, "&quot;")}" aria-label="Scientific Expression Input" spellcheck="false" autocomplete="off" />
        </div>
        <div class="calc-lcd-spotlight sci-main-out ${isErr ? "is-err" : ""}">
          <div class="calc-lcd-spot-expr">
            ${exactBadge ? `<span class="calc-lcd-exact-pill">${exactBadge}</span>` : ""}
            ${noteBadge ? `<span class="calc-lcd-exact-pill">${noteBadge}</span>` : ""}
          </div>
          <div class="calc-lcd-spot-val">${resStr}</div>
        </div>
      `;

      const inp = vp.querySelector('[data-role="comp-input"]');
      inp?.addEventListener("input", () => {
        this.expr = inp.value;
        this.freshResult = false;
        this.updateCompLivePreview(vp);
      });
      inp?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.freshResult = true;
          this.evaluateCurrent(true);
        } else if (e.key === "Escape") {
          e.preventDefault();
          this.handleAction("ac");
        }
      });
    }

    updateCompLivePreview(vp) {
      const outBox = vp.querySelector(".sci-main-out");
      if (!outBox) return;
      try {
        const { value, extraNote } = evaluateRealExpression(this.expr, {
          angleMode: this.angleMode,
          ans: this.ans,
          mem: this.mem
        });
        const exact = detectExactSymbolic(value);
        const decStr = formatNumberByMode(value, this.fmtMode);
        outBox.classList.remove("is-err");
        outBox.innerHTML = `
          <div class="calc-lcd-spot-expr">
            ${exact ? `<span class="calc-lcd-exact-pill">EXACT: ${exact}</span>` : ""}
            ${extraNote ? `<span class="calc-lcd-exact-pill">${extraNote}</span>` : ""}
          </div>
          <div class="calc-lcd-spot-val">${this.preferDecimal || !exact ? decStr : exact}</div>
        `;
      } catch (err) {
        outBox.classList.add("is-err");
        outBox.innerHTML = `<div class="calc-lcd-spot-expr">PREVIEW</div><div class="calc-lcd-spot-val" style="font-size:0.9rem;">${err.message}</div>`;
      }
    }

    renderCmplxViewport(vp, recordHistory) {
      let rectStr = "";
      let polarStr = "";
      let isErr = false;
      try {
        const z = evaluateComplexExpression(this.expr, {
          angleMode: this.angleMode,
          ans: this.ans,
          ansComplex: this.ansComplex,
          mem: this.mem
        });
        if (recordHistory) this.ansComplex = z;
        rectStr = formatComplexRect(z, this.fmtMode);
        polarStr = formatComplexPolar(z, this.angleMode);
      } catch (err) {
        isErr = true;
        rectStr = err.message || "Complex Syntax Error";
      }

      vp.innerHTML = `
        <div class="sci-hist-line">
          <span>CMPLX: Use 'i' or '∠' (e.g. (3+4i)/(1−2i) or 5∠53.13)</span>
        </div>
        <div class="calc-lcd-entry-row sci-expr-row">
          <input type="text" name="sci-cmplx-expr" class="calc-lcd-input sci-expr-input" data-role="cmplx-input" value="${this.expr.replace(/"/g, "&quot;")}" aria-label="Complex Expression Input" spellcheck="false" autocomplete="off" />
        </div>
        <div class="calc-lcd-spotlight sci-main-out ${isErr ? "is-err" : ""}">
          <div class="calc-lcd-spot-expr">
            ${!isErr ? `<span class="calc-lcd-exact-pill">POLAR: ${polarStr}</span>` : ""}
          </div>
          <div class="calc-lcd-spot-val">${this.preferDecimal && !isErr ? polarStr : rectStr}</div>
        </div>
      `;

      const inp = vp.querySelector('[data-role="cmplx-input"]');
      inp?.addEventListener("input", () => {
        this.expr = inp.value;
        this.freshResult = false;
      });
      inp?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.freshResult = true;
          this.evaluateCurrent(true);
        }
      });
    }

    renderEqnViewport(vp) {
      const labels = {
        QUAD: ["a (x²)", "b (x)", "c (const)"],
        CUBIC: ["a (x³)", "b (x²)", "c (x)", "d"],
        SYS2: ["a₁", "b₁", "c₁", "a₂", "b₂", "c₂"],
        TRIG: ["a (sin θ)", "b (cos θ)", "c (RHS)"]
      }[this.eqnType];
      const vals = this.eqnVals[this.eqnType].map((s) => {
        try { return evaluateRealExpression(s, { angleMode: this.angleMode, ans: this.ans, mem: this.mem }).value; }
        catch (_) { return Number(s) || 0; }
      });

      let sol;
      if (this.eqnType === "QUAD") sol = solveQuadratic(vals[0], vals[1], vals[2]);
      else if (this.eqnType === "CUBIC") sol = solveCubic(vals[0], vals[1], vals[2], vals[3]);
      else if (this.eqnType === "SYS2") sol = solveLinear2x2(vals[0], vals[1], vals[2], vals[3], vals[4], vals[5]);
      else sol = solveLinearTrig(vals[0], vals[1], vals[2], this.angleMode);

      vp.innerHTML = `
        <div class="sci-subtabs">
          <button type="button" class="${this.eqnType === "QUAD" ? "active" : ""}" data-eqn-t="QUAD">ax²+bx+c=0</button>
          <button type="button" class="${this.eqnType === "CUBIC" ? "active" : ""}" data-eqn-t="CUBIC">ax³+bx²+cx+d=0</button>
          <button type="button" class="${this.eqnType === "SYS2" ? "active" : ""}" data-eqn-t="SYS2">2×2 System</button>
          <button type="button" class="${this.eqnType === "TRIG" ? "active" : ""}" data-eqn-t="TRIG">a·sinθ+b·cosθ=c</button>
        </div>
        <div class="sci-coeff-grid">
          ${labels.map((lbl, idx) => `
            <label class="sci-coeff-cell ${idx === this.eqnSlot ? "active" : ""}" data-eqn-slot="${idx}">
              <span>${lbl}</span>
              <input type="text" value="${this.eqnVals[this.eqnType][idx]}" data-eqn-in="${idx}" />
            </label>
          `).join("")}
        </div>
        ${sol.err
          ? `<div class="calc-lcd-error">${sol.err}</div>`
          : `<div class="calc-inv-lcd-lines">${sol.lines.map((l) => `<div class="calc-inv-line"><span class="calc-inv-v">${l}</span></div>`).join("")}</div>`
        }
      `;

      vp.querySelectorAll("[data-eqn-t]").forEach((b) => {
        b.addEventListener("click", () => {
          this.eqnType = b.dataset.eqnT;
          this.eqnSlot = 0;
          this.evaluateCurrent();
        });
      });
      vp.querySelectorAll("[data-eqn-in]").forEach((inp) => {
        const idx = Number(inp.dataset.eqnIn);
        inp.addEventListener("focus", () => { this.eqnSlot = idx; });
        inp.addEventListener("input", () => {
          this.eqnVals[this.eqnType][idx] = inp.value;
          this.evaluateCurrent();
          const ref = this.mountEl.querySelector(`[data-eqn-in="${idx}"]`);
          if (ref) { ref.focus(); ref.setSelectionRange(ref.value.length, ref.value.length); }
        });
      });
    }

    renderTableViewport(vp) {
      const start = Number(this.tblStart) || 0;
      const end = Number(this.tblEnd) || 180;
      const rawStep = Math.abs(Number(this.tblStep) || 30);
      const step = Math.max(rawStep, Math.abs(end - start) / 40 || 1);
      const rows = [];

      if (start <= end) {
        for (let x = start, count = 0; x <= end + 1e-9 && count < 45; x += step, count++) {
          let fv = "Err", gv = "—";
          try {
            const r1 = evaluateRealExpression(this.tblF, { angleMode: this.angleMode, ans: this.ans, mem: this.mem, xVal: x }).value;
            fv = formatNumberByMode(r1, "NORM");
          } catch (_) { fv = "Undef"; }
          if (this.tblG.trim()) {
            try {
              const r2 = evaluateRealExpression(this.tblG, { angleMode: this.angleMode, ans: this.ans, mem: this.mem, xVal: x }).value;
              gv = formatNumberByMode(r2, "NORM");
            } catch (_) { gv = "Undef"; }
          }
          rows.push({ x: Number(x.toFixed(4)), fv, gv });
        }
      }

      vp.innerHTML = `
        <div class="sci-coeff-grid sci-tbl-inputs">
          <label class="sci-coeff-cell ${this.tblActiveField === "tblF" ? "active" : ""}"><span style="color:#fde047;">f(x) =</span><input type="text" data-tbl-f="tblF" value="${this.tblF}" /></label>
          <label class="sci-coeff-cell ${this.tblActiveField === "tblG" ? "active" : ""}"><span style="color:#6ee7b7;">g(x) =</span><input type="text" data-tbl-f="tblG" value="${this.tblG}" /></label>
          <label class="sci-coeff-cell ${this.tblActiveField === "tblStart" ? "active" : ""}"><span>Start</span><input type="text" data-tbl-f="tblStart" value="${this.tblStart}" /></label>
          <label class="sci-coeff-cell ${this.tblActiveField === "tblEnd" ? "active" : ""}"><span>End</span><input type="text" data-tbl-f="tblEnd" value="${this.tblEnd}" /></label>
          <label class="sci-coeff-cell ${this.tblActiveField === "tblStep" ? "active" : ""}"><span>Step</span><input type="text" data-tbl-f="tblStep" value="${this.tblStep}" /></label>
        </div>
        <div class="sci-table-scroll">
          <table class="sci-lcd-table">
            <thead><tr><th>x</th><th>f(x)</th><th>g(x)</th></tr></thead>
            <tbody>
              ${rows.map((r) => `<tr><td>${r.x}</td><td>${r.fv}</td><td>${r.gv}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      `;

      vp.querySelectorAll("[data-tbl-f]").forEach((inp) => {
        const key = inp.dataset.tblF;
        inp.addEventListener("focus", () => { this.tblActiveField = key; });
        inp.addEventListener("input", () => {
          this[key] = inp.value;
          this.evaluateCurrent();
          const ref = this.mountEl.querySelector(`[data-tbl-f="${key}"]`);
          if (ref) { ref.focus(); ref.setSelectionRange(ref.value.length, ref.value.length); }
        });
      });
    }

    renderBaseNViewport(vp) {
      let val = 0;
      let errMsg = "";
      try {
        val = evalBaseN(this.baseExpr, this.baseMode);
      } catch (err) {
        errMsg = err.message;
      }
      const u32 = val >>> 0;
      const hexStr = u32.toString(16).toUpperCase();
      const octStr = u32.toString(8);
      const binRaw = (val >= 0 && val < 65536 ? val.toString(2).padStart(8, "0") : u32.toString(2));
      const binGrouped = binRaw.replace(/\B(?=(\d{4})+(?!\d))/g, " ");

      vp.innerHTML = `
        <div class="calc-lcd-entry-row sci-expr-row">
          <span class="calc-lcd-prompt">${this.baseMode} ▸</span>
          <input type="text" name="sci-base-expr" class="calc-lcd-input sci-expr-input" data-role="base-input" value="${this.baseExpr}" spellcheck="false" autocomplete="off" />
        </div>
        ${errMsg
          ? `<div class="calc-lcd-error">${errMsg}</div>`
          : `<div class="calc-inv-lcd-lines">
               <div class="calc-inv-line"><span class="calc-inv-k">DEC</span><span class="calc-inv-v">${val}</span></div>
               <div class="calc-inv-line"><span class="calc-inv-k">HEX</span><span class="calc-inv-v">0x${hexStr}</span></div>
               <div class="calc-inv-line"><span class="calc-inv-k">BIN</span><span class="calc-inv-v">${binGrouped}</span></div>
               <div class="calc-inv-line"><span class="calc-inv-k">OCT</span><span class="calc-inv-v">0o${octStr}</span></div>
             </div>`
        }
      `;

      const inp = vp.querySelector('[data-role="base-input"]');
      inp?.addEventListener("input", () => {
        this.baseExpr = inp.value;
        this.evaluateCurrent();
        const ref = this.mountEl.querySelector('[data-role="base-input"]');
        if (ref) { ref.focus(); ref.setSelectionRange(ref.value.length, ref.value.length); }
      });
    }

    renderVectStatViewport(vp) {
      if (this.vsType === "VECT") {
        const v = this.vectVals.map((s) => Number(s) || 0);
        const [u1, u2, u3, v1, v2, v3] = v;
        const magU = Math.hypot(u1, u2, u3);
        const magV = Math.hypot(v1, v2, v3);
        const dot = u1 * v1 + u2 * v2 + u3 * v3;
        const cx = u2 * v3 - u3 * v2;
        const cy = u3 * v1 - u1 * v3;
        const cz = u1 * v2 - u2 * v1;
        const ang = magU > 1e-12 && magV > 1e-12
          ? `${Number(fromRad(Math.acos(Math.max(-1, Math.min(1, dot / (magU * magV)))), this.angleMode).toFixed(3))}${this.angleMode === "DEG" ? "°" : this.angleMode === "GRAD" ? "g" : " rad"}`
          : "Undefined (Zero Vector)";

        const names = ["uₓ", "uᵧ", "u_z", "vₓ", "vᵧ", "v_z"];
        vp.innerHTML = `
          <div class="sci-subtabs">
            <button type="button" class="active" data-vs-t="VECT">3D Vectors (u, v)</button>
            <button type="button" data-vs-t="STAT">1-Var Statistics</button>
          </div>
          <div class="sci-coeff-grid">
            ${names.map((nm, idx) => `
              <label class="sci-coeff-cell ${idx === this.vectSlot ? "active" : ""}">
                <span>${nm}</span>
                <input type="text" data-vect-in="${idx}" value="${this.vectVals[idx]}" />
              </label>
            `).join("")}
          </div>
          <div class="calc-inv-lcd-lines">
            <div class="calc-inv-line"><span class="calc-inv-k">|u|, |v|</span><span class="calc-inv-v">|u| = ${Number(magU.toFixed(5))}  •  |v| = ${Number(magV.toFixed(5))}</span></div>
            <div class="calc-inv-line"><span class="calc-inv-k">DOT u·v</span><span class="calc-inv-v">${Number(dot.toFixed(5))}   •   Angle θ = ${ang}</span></div>
            <div class="calc-inv-line"><span class="calc-inv-k">u × v</span><span class="calc-inv-v">(${Number(cx.toFixed(4))}, ${Number(cy.toFixed(4))}, ${Number(cz.toFixed(4))})</span></div>
          </div>
        `;
      } else {
        const nums = this.statData
          .split(/[\s,;]+/)
          .map((t) => Number(t.replace(/−/g, "-")))
          .filter((n) => Number.isFinite(n));
        let statHtml = "";
        if (nums.length === 0) {
          statHtml = `<div class="calc-lcd-error">Enter comma-separated numbers above.</div>`;
        } else {
          const n = nums.length;
          const sum = nums.reduce((a, b) => a + b, 0);
          const sumSq = nums.reduce((a, b) => a + b * b, 0);
          const mean = sum / n;
          const popVar = nums.reduce((a, b) => a + (b - mean) ** 2, 0) / n;
          const popSd = Math.sqrt(popVar);
          const sampSd = n > 1 ? Math.sqrt((popVar * n) / (n - 1)) : 0;
          const sorted = [...nums].sort((a, b) => a - b);
          const med = n % 2 === 1 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
          statHtml = `
            <div class="calc-inv-lcd-lines">
              <div class="calc-inv-line"><span class="calc-inv-k">COUNT / Σ</span><span class="calc-inv-v">n = ${n}  •  Σx = ${Number(sum.toFixed(5))}  •  Σx² = ${Number(sumSq.toFixed(5))}</span></div>
              <div class="calc-inv-line"><span class="calc-inv-k">MEAN / SD</span><span class="calc-inv-v">x̄ = ${Number(mean.toFixed(5))}  •  σx = ${Number(popSd.toFixed(5))}  •  sx = ${Number(sampSd.toFixed(5))}</span></div>
              <div class="calc-inv-line"><span class="calc-inv-k">5-NUM</span><span class="calc-inv-v">Min = ${sorted[0]}  •  Med = ${Number(med.toFixed(5))}  •  Max = ${sorted[n - 1]}</span></div>
            </div>
          `;
        }
        vp.innerHTML = `
          <div class="sci-subtabs">
            <button type="button" data-vs-t="VECT">3D Vectors (u, v)</button>
            <button type="button" class="active" data-vs-t="STAT">1-Var Statistics</button>
          </div>
          <div class="calc-lcd-entry-row sci-expr-row">
            <span class="calc-lcd-prompt">DATA ▸</span>
            <input type="text" class="calc-lcd-input sci-expr-input" style="text-align:left;font-size:0.9rem;" data-role="stat-input" value="${this.statData}" />
          </div>
          ${statHtml}
        `;
      }

      vp.querySelectorAll("[data-vs-t]").forEach((b) => {
        b.addEventListener("click", () => {
          this.vsType = b.dataset.vsT;
          this.evaluateCurrent();
        });
      });
      vp.querySelectorAll("[data-vect-in]").forEach((inp) => {
        const idx = Number(inp.dataset.vectIn);
        inp.addEventListener("focus", () => { this.vectSlot = idx; });
        inp.addEventListener("input", () => {
          this.vectVals[idx] = inp.value;
          this.evaluateCurrent();
          const ref = this.mountEl.querySelector(`[data-vect-in="${idx}"]`);
          if (ref) { ref.focus(); ref.setSelectionRange(ref.value.length, ref.value.length); }
        });
      });
      const statIn = vp.querySelector('[data-role="stat-input"]');
      statIn?.addEventListener("input", () => {
        this.statData = statIn.value;
        this.evaluateCurrent();
        const ref = this.mountEl.querySelector('[data-role="stat-input"]');
        if (ref) { ref.focus(); ref.setSelectionRange(ref.value.length, ref.value.length); }
      });
    }
  }

  /* ------------------------------------------------------------------------
     7. Auto-Mount Master Solver Unit + All-Mode Global Floating Calculator
     ------------------------------------------------------------------------ */
  function initAllModeScientificCalculators() {
    const pageMount = document.getElementById("master-sci-calc-mount");
    if (pageMount) {
      window.TrigMasterSciCalc = new TrigScientificCalculator(pageMount, { compact: false });
    }

    const floatDrawer = document.getElementById("floating-sci-calc-drawer");
    const floatMount = document.getElementById("floating-sci-calc-mount");
    let floatInstance = null;

    const toggleFloatingCalc = (forceOpen) => {
      if (!floatDrawer || !floatMount) return;
      const willOpen = typeof forceOpen === "boolean" ? forceOpen : floatDrawer.hidden;
      floatDrawer.hidden = !willOpen;
      document.querySelectorAll("[data-toggle-floating-calc]").forEach((b) => {
        b.classList.toggle("active", willOpen);
      });
      if (willOpen && !floatInstance) {
        floatInstance = new TrigScientificCalculator(floatMount, { compact: true });
      }
    };

    document.querySelectorAll("[data-toggle-floating-calc]").forEach((btn) => {
      btn.addEventListener("click", () => toggleFloatingCalc());
    });
    document.getElementById("btn-close-floating-calc")?.addEventListener("click", () => toggleFloatingCalc(false));
    document.getElementById("btn-dock-full-solver")?.addEventListener("click", () => {
      toggleFloatingCalc(false);
      document.querySelector('.nav-tab[data-view="solver"]')?.click();
    });

    // Global keyboard shortcut Alt+C when floating drawer is present
    if (floatDrawer && floatMount) {
      window.addEventListener("keydown", (e) => {
        if (e.altKey && (e.key === "c" || e.key === "C")) {
          e.preventDefault();
          toggleFloatingCalc();
        }
      });
    }
  }

  window.TrigScientificEngine = {
    evaluateRealExpression,
    evaluateComplexExpression,
    detectExactSymbolic,
    formatDMS,
    evalBaseN
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initAllModeScientificCalculators);
  } else {
    initAllModeScientificCalculators();
  }
})();
