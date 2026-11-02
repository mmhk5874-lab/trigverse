/* ==========================================================================
   TrigVerse Complete Bilingual Lecture Hall — English & Urdu (اردو)
   Covers all 7 Quest Levels (Realms) + all 44 Trigonometry Chapters
   Zero school-class labels • Full KaTeX Math + Web Speech Voice Scripts
   ========================================================================== */

window.TRIG_BILINGUAL_LECTURES = {
  realms: {
    "tier-1": {
      tierId: "tier-1",
      levelNum: 1,
      enBadge: "Level 1 Master Lecture • Chapters 1–3",
      urBadge: "لیول 1 جامع لیکچر • ابواب 1 تا 3",
      enTitle: "Angle & Radian Genesis — Rotation, DMS & Circular Measure",
      urTitle: "زاویہ اور ریڈین کی بنیاد — گردش، درجہ اور دائرہ وی پیمائش",
      duration: "15 Min Bilingual Lecture",
      boardTex: "$$\\pi\\text{ rad} = 180^\\circ, \\qquad 1\\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57.2958^\\circ, \\qquad l = r\\theta, \\qquad A = \\frac{1}{2}r^2\\theta$$",
      enSteps: [
        "<strong>1. What is Trigonometry & Dynamic Angles?</strong> Trigonometry comes from Greek <em>trigonon</em> (triangle) + <em>metron</em> (measure). Unlike static geometry where angles stay between $0^\\circ$ and $180^\\circ$, trigonometry treats an angle as a <strong>dynamic rotation</strong> of a ray from an initial side to a terminal side: counter-clockwise is positive ($+\\theta$) and clockwise is negative ($-\\theta$).",
        "<strong>2. Right-Triangle Anatomy & Pythagoras:</strong> Relative to acute angle $\\theta$, the side across the $90^\\circ$ corner is always the <strong>Hypotenuse ($H$)</strong>, the side facing $\\theta$ is the <strong>Opposite ($O$)</strong>, and the side touching $\\theta$ is the <strong>Adjacent ($A$)</strong>, governed by $O^2 + A^2 = H^2$.",
        "<strong>3. Sexagesimal (DMS) vs. Circular (Radian) System:</strong> In the DMS system, $1^\\circ = 60'$ (minutes) and $1' = 60''$ (seconds). In advanced mathematics and calculus, we use the natural <strong>Radian</strong>: the central angle subtended when arc length $l$ equals radius $r$ ($\\theta = \\frac{l}{r}$).",
        "<strong>4. Arc Length & Sector Area Mastery:</strong> Once $\\theta$ is converted into radians via $\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180^\\circ}$, curved arc length is $l = r\\theta$ and sector area is $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}lr$."
      ],
      urSteps: [
        "<strong>1۔ ٹرگنومیٹری اور متحرک زاویہ (Dynamic Angle) کا تصور:</strong> عزیز طلبہ! ٹرگنومیٹری مثلث کے اضلاع اور زاویوں کے درمیان تعلق کا علم ہے۔ یہاں زاویہ صرف ایک جامد کونا نہیں بلکہ ایک شعاع (Ray) کی <strong>گردش (Rotation)</strong> ہے: گھڑی کی مخالف سمت (Counter-clockwise) گردش مثبت ($+\\theta$) اور گھڑی کی سمت (Clockwise) گردش منفی ($-\\theta$) کہلاتی ہے۔",
        "<strong>2۔ قائمۃ الزاویہ مثلث اور مسئلہ فیثاغورث:</strong> زاویہ $90^\\circ$ کے سامنے والا سب سے لمبا ضلع ہمیشہ <strong>وتر (Hypotenuse $H$)</strong> ہوتا ہے، زیرِ غور زاویہ $\\theta$ کے سامنے والا ضلع <strong>عمود (Opposite $O$)</strong> اور ساتھ جڑا ضلع <strong>قاعدہ (Adjacent $A$)</strong> کہلاتا ہے، جہاں $O^2 + A^2 = H^2$ ہمیشہ درست رہتا ہے۔",
        "<strong>3۔ درجہ، منٹ، سیکنڈ (DMS) اور ریڈین (Radian):</strong> اکائی درجہ میں $1^\\circ = 60'$ اور $1' = 60''$ ہوتے ہیں۔ جبکہ دائرہ وی نظام میں جب قوس کی لمبائی $l$ رداس $r$ کے برابر ہو جائے تو مرکز پر بننے والا زاویہ <strong>ایک ریڈین ($1\\text{ rad} \\approx 57.3^\\circ$)</strong> کہلاتا ہے، اور بنیادی پل $\\pi\\text{ rad} = 180^\\circ$ ہے۔",
        "<strong>4۔ قوس کی لمبائی اور سیکٹر کا رقبہ:</strong> یاد رکھیں کہ فارمولے $l = r\\theta$ اور $A = \\frac{1}{2}r^2\\theta$ استعمال کرنے سے پہلے زاویہ $\\theta$ کو لازمی طور پر ریڈین میں تبدیل کریں ورنہ جواب غلط ہو جائے گا!"
      ],
      enTip: "Never plug degrees directly into $l = r\\theta$ or $A = \\frac{1}{2}r^2\\theta$! Always multiply degrees by $\\frac{\\pi}{180}$ first.",
      urTip: "سنہری اصول: فارمولہ $l = r\\theta$ یا $A = \\frac{1}{2}r^2\\theta$ میں کبھی ڈگری درج نہ کریں؛ پہلے $\\frac{\\pi}{180}$ سے ضرب دے کر ریڈین بنائیں!",
      enVoice: "Welcome to Level 1: Angle and Radian Genesis. In trigonometry, an angle measures dynamic rotation: counter-clockwise is positive and clockwise is negative. Across the ninety degree corner sits the hypotenuse H, facing theta is the opposite side O, and beside theta is the adjacent side A. To bridge degrees and radians, remember pi radians equals 180 degrees. Whenever you compute arc length l equals r theta or sector area one half r squared theta, always convert theta into radians first!",
      urVoice: "لیول ون کے لیکچر میں خوش آمدید۔ ٹرگنومیٹری میں زاویہ ایک شعاع کی گردش کو ظاہر کرتا ہے۔ گھڑی کی مخالف سمت گردش مثبت اور گھڑی کی سمت گردش منفی ہوتی ہے۔ قائمۃ الزاویہ مثلث میں نوے درجے کے سامنے وتر، تھیٹا کے سامنے عمود اور ساتھ والا ضلع قاعدہ کہلاتا ہے۔ پائی ریڈین ایک سو اسی درجے کے برابر ہوتا ہے۔ قوس کی لمبائی ایل برابر آر تھیٹا نکالتے وقت تھیٹا کو ہمیشہ ریڈین میں رکھیں۔"
    },

    "tier-2": {
      tierId: "tier-2",
      levelNum: 2,
      enBadge: "Level 2 Master Lecture • Chapters 4–8",
      urBadge: "لیول 2 جامع لیکچر • ابواب 4 تا 8",
      enTitle: "Right-Triangle Ratio Forge — SOH-CAH-TOA, Reciprocals & Standard Angles",
      urTitle: "تکونیاتی نسبتیں — بنیادی، معکوس، معیاری اور تکمیلی زاویے",
      duration: "18 Min Bilingual Lecture",
      boardTex: "$$\\sin\\theta=\\frac{O}{H},\\; \\cos\\theta=\\frac{A}{H},\\; \\tan\\theta=\\frac{O}{A}, \\qquad \\sin(90^\\circ-\\theta)=\\cos\\theta, \\qquad \\sec\\theta+\\tan\\theta=p \\implies \\sec\\theta-\\tan\\theta=\\frac{1}{p}$$",
      enSteps: [
        "<strong>1. Scale-Invariance & SOH-CAH-TOA:</strong> By similar triangles, zooming a right triangle up or down scales all sides equally, so their fractions depend <em>only</em> on angle $\\theta$: $\\sin\\theta = \\frac{O}{H}$, $\\cos\\theta = \\frac{A}{H}$, and $\\tan\\theta = \\frac{O}{A} = \\frac{\\sin\\theta}{\\cos\\theta}$.",
        "<strong>2. The Single-'Co' Reciprocal Pairing Rule:</strong> Flipping the three primary ratios gives $\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, and $\\cot\\theta = \\frac{1}{\\tan\\theta}$. Notice every reciprocal pair contains <em>exactly one</em> 'co-'! Because $H \\ge O, A$, $|\\sin\\theta| \\le 1$, $|\\cos\\theta| \\le 1$, while $|\\sec\\theta| \\ge 1$ and $|\\operatorname{cosec}\\theta| \\ge 1$.",
        "<strong>3. Exact Standard Table ($0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$):</strong> Write $\\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$ to get $\\sin$ instantly, reverse the row for $\\cos$, and divide $\\frac{\\sin}{\\cos}$ for $\\tan$!",
        "<strong>4. Complementary Co-Functions & Unknown Ratios:</strong> Since acute angles in a right triangle sum to $90^\\circ$, $\\sin(90^\\circ-\\theta)=\\cos\\theta$, $\\tan(90^\\circ-\\theta)=\\cot\\theta$, and $\\sec(90^\\circ-\\theta)=\\operatorname{cosec}\\theta$. Given one ratio, build a $k$-scaled Pythagoras triangle to unlock all other five!"
      ],
      urSteps: [
        "<strong>1۔ متشابہ مثلثیں اور SOH-CAH-TOA کی منطق:</strong> قائمۃ الزاویہ مثلث کو بڑا یا چھوٹا کرنے سے اضلاع کی لمبائیاں بدلتی ہیں مگر ان کی نسبت صرف زاویہ $\\theta$ پر منحصر رہتی ہے: $\\sin\\theta = \\frac{O}{H}$ (عمود بٹا وتر)، $\\cos\\theta = \\frac{A}{H}$ (قاعدہ بٹا وتر)، اور $\\tan\\theta = \\frac{O}{A} = \\frac{\\sin\\theta}{\\cos\\theta}$۔",
        "<strong>2۔ معکوس نسبتیں (Reciprocal Ratios) اور Single-'Co' اصول:</strong> بنیادی نسبتوں کو الٹانے سے $\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta}$، $\\sec\\theta = \\frac{1}{\\cos\\theta}$ اور $\\cot\\theta = \\frac{1}{\\tan\\theta}$ حاصل ہوتے ہیں۔ یاد رکھنے کا آسان طریقہ: ہر معکوس جوڑے میں صرف ایک بار <em>co</em> آتا ہے! نیز وتر سب سے بڑا ضلع ہونے کی وجہ سے $|\\sin\\theta| \\le 1$ اور $|\\sec\\theta| \\ge 1$ ہوتا ہے۔",
        "<strong>3۔ معیاری زاویوں ($0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$) کی جدول:</strong> ترتیب سے $\\frac{\\sqrt{0}}{2}$ سے $\\frac{\\sqrt{4}}{2}$ تک لکھیں تو $\\sin$ کی تمام قدریں بن جاتی ہیں؛ اس قطار کو الٹا لکھیں تو $\\cos$ اور دونوں کو تقسیم کریں تو $\\tan$ مل جاتا ہے!",
        "<strong>4۔ تکمیلی زاویے ($90^\\circ-\\theta$) اور نامعلوم نسبتیں معلوم کرنا:</strong> قائمۃ الزاویہ مثلث میں دونوں حادہ زاویوں کا مجموعہ $90^\\circ$ ہوتا ہے، اس لیے $\\sin(90^\\circ-\\theta)=\\cos\\theta$ اور $\\tan(90^\\circ-\\theta)=\\cot\\theta$۔ اگر ایک نسبت معلوم ہو تو فیثاغورث مثلث یا $\\sec\\theta+\\tan\\theta=p \\implies \\sec\\theta-\\tan\\theta=\\frac{1}{p}$ سے باقی تمام نسبتیں نکل آتی ہیں۔"
      ],
      enTip: "Never confuse $\\sec\\theta$ with $\\frac{1}{\\sin\\theta}$! Every reciprocal pair has one 'co': $(\\sin, \\operatorname{cosec})$ and $(\\cos, \\sec)$.",
      urTip: "اہم ٹپ: کبھی بھی $\\sec\\theta$ کو $\\sin\\theta$ کا الٹ نہ سمجھیں! ہر جوڑے میں ایک ہی 'co' ہوتا ہے: $\\sec\\theta = \\frac{1}{\\cos\\theta}$۔",
      enVoice: "Welcome to Level 2: Right-Triangle Ratio Forge. Because similar right triangles preserve side ratios, sine theta equals opposite over hypotenuse, cosine theta equals adjacent over hypotenuse, and tangent theta equals opposite over adjacent. Flipping them gives cosecant, secant, and cotangent—remember each reciprocal pair has exactly one co! Use the square root zero-to-four over two trick for standard angles, and use complementary co-function laws whenever two angles add up to 90 degrees.",
      urVoice: "لیول ٹو کے لیکچر میں خوش آمدید۔ قائمۃ الزاویہ مثلث میں سائن تھیٹا عمود بٹا وتر، کوسائن تھیٹا قاعدہ بٹا وتر، اور ٹینجنٹ تھیٹا عمود بٹا قاعدہ کے برابر ہوتا ہے۔ ان کے معکوس بالترتیب کوسیکنٹ، سیکنٹ اور کوٹینجنٹ ہیں۔ معیاری زاویوں کی قدریں زیرو سے چار تک جزر بٹا دو کی مدد سے باآسانی یاد رکھی جا سکتی ہیں، اور تکمیلی زاویوں میں سائن نوے منفی تھیٹا کوسائن تھیٹا بن جاتا ہے۔"
    },

    "tier-3": {
      tierId: "tier-3",
      levelNum: 3,
      enBadge: "Level 3 Master Lecture • Chapters 9–15",
      urBadge: "لیول 3 جامع لیکچر • ابواب 9 تا 15",
      enTitle: "Identity Citadel & Surveyor Peaks — Identities, Simplification, Proofs & Heights",
      urTitle: "تکونیاتی متماثلات، اختصار، ثبوت اور بلندی و فاصلہ",
      duration: "20 Min Bilingual Lecture",
      boardTex: "$$\\sin^2\\theta + \\cos^2\\theta = 1, \\qquad 1 + \\tan^2\\theta = \\sec^2\\theta, \\qquad 1 + \\cot^2\\theta = \\operatorname{cosec}^2\\theta, \\qquad d = h(\\cot\\alpha - \\cot\\beta)$$",
      enSteps: [
        "<strong>1. Solving Right Triangles (Sides & Angles):</strong> Given one side and one acute angle, isolate the unknown side cleanly ($O = H\\sin\\theta, A = H\\cos\\theta, O = A\\tan\\theta$). Given two sides, recover the angle using inverse keys ($\\theta = \\tan^{-1}(O/A)$).",
        "<strong>2. The Three Pythagorean Identities:</strong> Dividing $O^2 + A^2 = H^2$ by $H^2$, $A^2$, and $O^2$ births the three master identities: $\\sin^2\\theta+\\cos^2\\theta=1$, $1+\\tan^2\\theta=\\sec^2\\theta$, and $1+\\cot^2\\theta=\\operatorname{cosec}^2\\theta$.",
        "<strong>3. Simplification & Identity Proof Blueprint:</strong> Never cross-multiply across an unproven '$=$'! Start with the more complex side, convert $\\tan, \\cot, \\sec, \\operatorname{cosec}$ into $s=\\sin\\theta$ and $c=\\cos\\theta$, use $s^4+c^4 = 1-2s^2c^2$ and $s^6+c^6 = 1-3s^2c^2$, and rationalize $\\sqrt{\\frac{1\\pm\\sin\\theta}{1\\mp\\sin\\theta}}$ via conjugates.",
        "<strong>4. Heights & Distances (Elevation & Depression):</strong> Draw the horizontal eye-level line first! By alternate interior angles, Angle of Depression equals Angle of Elevation. For two observation points on the same side of a tower of height $h$, the walk distance is $d = h(\\cot\\alpha - \\cot\\beta)$."
      ],
      urSteps: [
        "<strong>1۔ نامعلوم اضلاع اور زاویوں کی پیمائش:</strong> اگر قائمۃ الزاویہ مثلث میں ایک ضلع اور ایک زاویہ معلوم ہو تو $O = H\\sin\\theta$ یا $O = A\\tan\\theta$ سے باقی اضلاع نکل آتے ہیں، اور اگر دو اضلاع معلوم ہوں تو معکوس فنکشن $\\theta = \\tan^{-1}(O/A)$ سے زاویہ معلوم کیا جاتا ہے۔",
        "<strong>2۔ تین بنیادی فیثاغورثی متماثلات (Pythagorean Identities):</strong> مساوات $O^2 + A^2 = H^2$ کو بالترتیب $H^2$، $A^2$ اور $O^2$ پر تقسیم کرنے سے تین عظیم کلیے ملتے ہیں: $\\sin^2\\theta+\\cos^2\\theta=1$، $1+\\tan^2\\theta=\\sec^2\\theta$ اور $1+\\cot^2\\theta=\\operatorname{cosec}^2\\theta$۔",
        "<strong>3۔ عبارات کا اختصار (Simplification) اور متماثلات کا ثبوت (Proofs):</strong> ثبوت کے سوالات میں کبھی دونوں اطراف کو آمنے سامنے ضرب نہ دیں! پیچیدہ طرف (مثلاً LHS) منتخب کریں، تمام نسبتوں کو $\\sin\\theta$ اور $\\cos\\theta$ میں بدلیں، کسر کا ذواضعاف اقل (LCM) لیں، اور $1\\pm\\sin\\theta$ والے جزر کو زوجی جملے (Conjugate) سے ضرب دیں۔",
        "<strong>4۔ بلندی اور فاصلہ (Heights & Distances):</strong> زاویۂ فراز (Angle of Elevation) افقی نظر سے اوپر کی طرف اور زاویۂ نشیب (Angle of Depression) افقی لکیر سے نیچے کی طرف بنتا ہے، اور متبادلہ زاویوں کی رو سے دونوں برابر ہوتے ہیں! مینار کے ایک ہی طرف دو نقاط کا درمیانی فاصلہ $d = h(\\cot\\alpha - \\cot\\beta)$ سے فوراً نکل آتا ہے۔"
      ],
      enTip: "Memorize the power-killers $\\sin^4\\theta+\\cos^4\\theta = 1-2\\sin^2\\theta\\cos^2\\theta$ and $\\sin^6\\theta+\\cos^6\\theta = 1-3\\sin^2\\theta\\cos^2\\theta$—they collapse giant expressions to $1$ in seconds!",
      urTip: "امتحانی راز: $3(\\sin^4\\theta+\\cos^4\\theta) - 2(\\sin^6\\theta+\\cos^6\\theta) = 1$ ہمیشہ ذہن میں رکھیں، اور زاویۂ نشیب ہمیشہ افقی خط (Horizontal) سے ناپیں، عمودی دیوار سے نہیں!",
      enVoice: "Welcome to Level 3: Identity Citadel and Surveyor Peaks. Dividing Pythagoras by hypotenuse squared, adjacent squared, and opposite squared yields the three fundamental identities: sine squared plus cosine squared equals one, one plus tangent squared equals secant squared, and one plus cotangent squared equals cosecant squared. To prove any identity, work strictly from one side, convert into sine and cosine, merge fractions, or multiply by conjugates. In heights and distances, always measure elevation and depression from the horizontal line!",
      urVoice: "لیول تھری کے لیکچر میں خوش آمدید۔ مسئلہ فیثاغورث کی مدد سے ہمیں تین بنیادی متماثلات حاصل ہوتی ہیں جن میں سائن اسکوائر جمع کوسائن اسکوائر برابر ایک سب سے اہم ہے۔ کسی بھی متماثلہ کو ثابت کرتے وقت صرف ایک سائیڈ لے کر حل کریں اور عبارات کو سائن اور کوسائن میں تبدیل کریں۔ بلندی اور فاصلے کے سوالات میں زاویۂ فراز اور زاویۂ نشیب ہمیشہ افقی لکیر سے ناپے جاتے ہیں۔"
    },

    "tier-4": {
      tierId: "tier-4",
      levelNum: 4,
      enBadge: "Level 4 Master Lecture • Chapters 16–21",
      urBadge: "لیول 4 جامع لیکچر • ابواب 16 تا 21",
      enTitle: "Unit-Circle & Wave Observatory — Any Angle, ASTC, Domain, Periodicity & Graphs",
      urTitle: "اکائی دائرہ اور موجی فنکشنز — ہر زاویہ، ربعی علامات، ڈومین، دوریت اور گراف",
      duration: "19 Min Bilingual Lecture",
      boardTex: "$$P(\\cos t, \\sin t) \\in x^2+y^2=1, \\qquad \\text{ASTC Signs}, \\qquad y = A\\sin(Bx - C) + D \\implies T = \\frac{2\\pi}{|B|}$$",
      enSteps: [
        "<strong>1. Unit Circle Extension to All Real Numbers:</strong> Placing angle $t \\in \\mathbb{R}$ on the unit circle $x^2+y^2=1$ defines $\\cos t = x$ and $\\sin t = y$ for <em>every</em> real number! Cosine and secant are <strong>even</strong> ($\\cos(-t)=\\cos t$); the other four are <strong>odd</strong> ($\\sin(-t)=-\\sin t$).",
        "<strong>2. ASTC Quadrant Signs & Allied Angle Reductions:</strong> By signs of $(x,y)$, <strong>A</strong>ll are positive in Q-I, <strong>S</strong>in/$\\operatorname{cosec}$ in Q-II, <strong>T</strong>an/$\\cot$ in Q-III, and <strong>C</strong>os/$\\sec$ in Q-IV. Multiples of $\\pi$ ($180^\\circ$) keep the function; odd multiples of $\\frac{\\pi}{2}$ ($90^\\circ, 270^\\circ$) flip to the co-function!",
        "<strong>3. Domain & Range Bounds:</strong> $\\sin, \\cos$ map $\\mathbb{R} \\to [-1,1]$; $\\tan, \\cot$ cover $(-\\infty,\\infty)$ excluding vertical asymptotes; $\\sec, \\operatorname{cosec}$ have range $(-\\infty,-1]\\cup[1,\\infty)$. Crucially, $a\\cos x + b\\sin x \\in [-\\sqrt{a^2+b^2}, +\\sqrt{a^2+b^2}]$.",
        "<strong>4. Periodicity & 4-Parameter Wave Graphs:</strong> Fundamental period is $2\\pi$ for $\\sin, \\cos, \\sec, \\operatorname{cosec}$ and $\\pi$ for $\\tan, \\cot$. In $y = A\\sin(Bx - C) + D$, $|A|$ is Amplitude, $T = \\frac{2\\pi}{|B|}$ is Period, $\\frac{C}{B}$ is Phase Shift, and $y=D$ is Midline."
      ],
      urSteps: [
        "<strong>1۔ اکائی دائرہ (Unit Circle) اور حقیقی اعداد پر توسیع:</strong> جب ہم رداس $r=1$ والے اکائی دائرے $x^2+y^2=1$ پر نقطہ $P(x,y)$ لیتے ہیں تو ہر حقیقی زاویہ $t$ کے لیے $\\cos t = x$ اور $\\sin t = y$ بن جاتا ہے۔ صرف $\\cos$ اور $\\sec$ جفت فنکشنز (Even: $\\cos(-t)=\\cos t$) ہیں جبکہ باقی چاروں طاق (Odd) ہیں۔",
        "<strong>2۔ چاروں ربعوں میں علامات (ASTC) اور متعلقہ زاویے (Allied Angles):</strong> پہلے ربع (Q-I) میں تمام نسبتیں مثبت، دوسرے میں $\\sin,\\operatorname{cosec}$، تیسرے میں $\\tan,\\cot$ اور چوتھے ربع میں $\\cos,\\sec$ مثبت ہوتے ہیں۔ یاد رکھیں: $180^\\circ, 360^\\circ$ پر فنکشن تبدیل نہیں ہوتا، لیکن $90^\\circ, 270^\\circ$ پر Co-function میں بدل جاتا ہے!",
        "<strong>3۔ ڈومین اور رینج (Domain & Range):</strong> $\\sin x$ اور $\\cos x$ کی رینج $[-1,1]$ ہے، جبکہ $\\sec x$ اور $\\operatorname{cosec} x$ کی قدریں کبھی $(-1,1)$ کے درمیان نہیں آ سکتیں۔ لکیری مجموعہ $a\\cos x + b\\sin x$ کی زیادہ سے زیادہ قدر $+\\sqrt{a^2+b^2}$ اور کم سے کم قدر $-\\sqrt{a^2+b^2}$ ہوتی ہے۔",
        "<strong>4۔ دوریت (Periodicity) اور موجی گراف:</strong> $\\sin, \\cos, \\sec, \\operatorname{cosec}$ کا بنیادی دورانیہ (Period) $2\\pi$ ہے جبکہ $\\tan$ اور $\\cot$ کا دورانیہ $\\pi$ ہے۔ موجی مساوات $y = A\\sin(Bx - C) + D$ میں حیطہ (Amplitude) $|A|$ اور نیا دورانیہ $T = \\frac{2\\pi}{|B|}$ ہوتا ہے۔"
      ],
      enTip: "Even powers or modulus $|\\sin x|, \\sin^2 x$ halve the period of sine/cosine from $2\\pi$ down to $\\pi$!",
      urTip: "خبردار: $\\sin^2 x$ یا $|\\sin x|$ لینے سے منفی حصے مثبت ہو جاتے ہیں، اس لیے دورانیہ $2\\pi$ سے گھٹ کر آدھا یعنی $\\pi$ رہ جاتا ہے!",
      enVoice: "Welcome to Level 4: Unit-Circle and Wave Observatory. On the unit circle x squared plus y squared equals one, cosine is the horizontal coordinate x and sine is the vertical coordinate y. Remember A S T C for quadrant signs: All in quadrant one, Sine in two, Tangent in three, and Cosine in four. Multiples of pi keep the function name, while odd multiples of pi over two switch to the co-function. Finally, a sinusoidal wave y equals A sine of B x minus C plus D has amplitude absolute A and period two pi over absolute B.",
      urVoice: "لیول فور کے لیکچر میں خوش آمدید۔ اکائی دائرے پر ایکس محدد کوسائن تھیٹا اور وائی محدد سائن تھیٹا کو ظاہر کرتا ہے۔ چاروں ربعوں میں علامات کے لیے اے ایس ٹی سی کا قاعدہ یاد رکھیں۔ نوے اور دو سو ستر درجے پر ٹرگنومیٹرک فنکشن اپنے کو فنکشن میں بدل جاتا ہے جبکہ ایک سو اسی اور تین سو ساٹھ درجے پر برقرار رہتا ہے۔ سائن اور کوسائن کا بنیادی دورانیہ ٹو پائی اور ٹینجنٹ کا پائی ہوتا ہے۔"
    },

    "tier-5": {
      tierId: "tier-5",
      levelNum: 5,
      enBadge: "Level 5 Master Lecture • Chapters 22–32",
      urBadge: "لیول 5 جامع لیکچر • ابواب 22 تا 32",
      enTitle: "Multi-Angle Alchemy & Trigonometric Equations — Compound, Multiple, Sum/Product & General Solutions",
      urTitle: "مرکب و مضاعف زاویے، حاصلِ جمع تا ضرب اور تکونیاتی مساواتوں کے عمومی حل",
      duration: "22 Min Bilingual Lecture",
      boardTex: "$$\\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B, \\quad \\cos 2A=2\\cos^2 A-1=1-2\\sin^2 A, \\quad \\sin\\theta=\\sin\\alpha \\iff \\theta=n\\pi+(-1)^n\\alpha$$",
      enSteps: [
        "<strong>1. Compound, Double, Triple & Half-Angle Cascade:</strong> From the master law $\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$, setting $B=A$ gives $\\sin 2A=2\\sin A\\cos A$ and the '1-Killer' twins $1+\\cos 2A=2\\cos^2 A$, $1-\\cos 2A=2\\sin^2 A$. Triple angles give $\\sin 3A=3\\sin A-4\\sin^3 A$ and $\\cos 3A=4\\cos^3 A-3\\cos A$, while $t = \\tan(\\theta/2)$ turns $\\sin\\theta = \\frac{2t}{1+t^2}$ and $\\cos\\theta = \\frac{1-t^2}{1+t^2}$ into pure rational algebra!",
        "<strong>2. Sum-to-Product & Product-to-Sum Bridges:</strong> Adding/subtracting compound formulas converts sums like $\\sin C + \\sin D = 2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}$ into factorable products (crucial for solving $=0$ equations), while Product-to-Sum linearizes products for integration and telescoping series.",
        "<strong>3. Harmonic $R$-Alpha & Triangle Conditional Identities:</strong> Any linear wave $a\\cos\\theta + b\\sin\\theta$ compresses into $R\\cos(\\theta-\\alpha)$ with $R=\\sqrt{a^2+b^2}$. When $A+B+C=\\pi$, $\\tan A+\\tan B+\\tan C = \\tan A\\tan B\\tan C$.",
        "<strong>4. General Solutions &Oblique Triangle Laws:</strong> Never divide out a variable factor (factor $=0$ instead!) and never square an equation without checking extraneous roots. Master $\\theta = n\\pi + (-1)^n\\alpha$ ($\\sin$), $\\theta = 2n\\pi \\pm \\alpha$ ($\\cos$), $\\theta = n\\pi + \\alpha$ ($\\tan$), plus the Sine Rule $\\frac{a}{\\sin A}=2R$ and Cosine Rule $c^2=a^2+b^2-2ab\\cos C$."
      ],
      urSteps: [
        "<strong>1۔ مرکب، دگنے، تگنے اور نصف زاویے کے فارمولے:</strong> مرکب زاویوں کے بنیادی کلیے $\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$ میں $B=A$ رکھنے سے دگنے زاویے کے کلیے ملتے ہیں، جن میں سب سے طاقتور '1-Killers' ہیں: $1+\\cos 2A=2\\cos^2 A$ اور $1-\\cos 2A=2\\sin^2 A$۔ اسی طرح نصف زاویہ متبادل $t=\\tan(\\theta/2)$ پوری ٹرگنومیٹری کو الجبرائی کسروں $\\sin\\theta=\\frac{2t}{1+t^2}$ میں بدل دیتا ہے!",
        "<strong>2۔ جمع سے ضرب (Sum-to-Product) اور ضرب سے جمع کے پل:</strong> مساوات حل کرتے وقت مجموعے کو اجزائے ضربی بنانے کے لیے $\\sin C+\\sin D = 2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}$ استعمال کریں، اور انٹیگریشن یا سلسلہ وار جمع کے لیے ضرب کو جمع میں بدلیں۔",
        "<strong>3۔ ہارمونک شکل $R\\cos(\\theta-\\alpha)$ اور مشروط متماثلات:</strong> کسی بھی لکیری عبارت $a\\cos\\theta+b\\sin\\theta$ کو $R=\\sqrt{a^2+b^2}$ کی مدد سے واحد موج میں بدلا جا سکتا ہے۔ اور اگر مثلث میں $A+B+C=\\pi$ ہو تو $\\tan A+\\tan B+\\tan C = \\tan A\\tan B\\tan C$ ہوتا ہے۔",
        "<strong>4۔ تکونیاتی مساواتیں، عمومی حل اور مائل مثلث کے قوانین:</strong> مساوات حل کرتے وقت کبھی بھی مشترک جزو (مثلاً $\\sin x$) سے دونوں طرف تقسیم نہ کریں ورنہ حل ضائع ہو جائیں گے—ہمیشہ مشترک نکالیں! عمومی حل کے تین ستون یاد رکھیں: سائن کے لیے $n\\pi+(-1)^n\\alpha$، کوسائن کے لیے $2n\\pi\\pm\\alpha$ اور ٹینجنٹ کے لیے $n\\pi+\\alpha$ ($n \\in \\mathbb{Z}$)۔"
      ],
      enTip: "Every squared equation $\\sin^2\\theta = \\sin^2\\alpha$, $\\cos^2\\theta = \\cos^2\\alpha$, or $\\tan^2\\theta = \\tan^2\\alpha$ shares the SAME universal general solution: $\\theta = n\\pi \\pm \\alpha$!",
      urTip: "زبردست شارٹ کٹ: مربع والی تینوں مساواتوں $\\sin^2\\theta=\\sin^2\\alpha$، $\\cos^2\\theta=\\cos^2\\alpha$ اور $\\tan^2\\theta=\\tan^2\\alpha$ کا عمومی حل ایک ہی ہے: $\\theta = n\\pi \\pm \\alpha$!",
      enVoice: "Welcome to Level 5: Multi-Angle Alchemy and Trigonometric Equations. Compound angle formulas unlock double, triple, and half-angle identities, especially the one-killer pair: one plus cosine two A equals two cosine squared A, and one minus cosine two A equals two sine squared A. Sum-to-product turns additions into factors so you can solve equations cleanly without ever dividing out a variable. Memorize the three general solution families over all integers n, and use the Laws of Sines and Cosines for any oblique triangle!",
      urVoice: "لیول فائیو کے لیکچر میں خوش آمدید۔ مرکب زاویوں کے فارمولوں سے دگنے، تگنے اور نصف زاویے کے تمام کلیے اخذ ہوتے ہیں، خصوصاً ون پلس کوسائن ٹو اے برابر ٹو کوسائن اسکوائر اے بے حد مفید ہے۔ تکونیاتی مساوات حل کرتے وقت کسی متغیر سے تقسیم نہ کریں بلکہ اس کو مشترک نکالیں تاکہ کوئی حل ضائع نہ ہو۔ سائن، کوسائن اور ٹینجنٹ کے عمومی حل این پائی کی مدد سے تمام حقیقی حل فراہم کرتے ہیں۔"
    },

    "tier-6": {
      tierId: "tier-6",
      levelNum: 6,
      enBadge: "Level 6 Master Lecture • Chapters 33–43",
      urBadge: "لیول 6 جامع لیکچر • ابواب 33 تا 43",
      enTitle: "Inverse Arcana, Calculus & Fourier Summit — ITF Branches, Proofs, Euler & Harmonics",
      urTitle: "معکوس تکونیاتی فنکشنز، کیلکولس، آئلسر فارمولا اور فوریئر تجزیہ",
      duration: "24 Min Bilingual Lecture",
      boardTex: "$$\\sin^{-1}x+\\cos^{-1}x=\\frac{\\pi}{2}, \\qquad \\lim_{x\\to 0}\\frac{\\sin x}{x}=1, \\qquad e^{i\\theta}=\\cos\\theta+i\\sin\\theta$$",
      enSteps: [
        "<strong>1. Inverse Trig Functions, Domains & Principal Branches:</strong> Because trig functions are periodic, we restrict them to bijective principal branches: Family A ($\\sin^{-1}, \\tan^{-1}, \\operatorname{cosec}^{-1}$) lives around $0$ in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ and satisfies $f^{-1}(-x) = -f^{-1}(x)$; Family B ($\\cos^{-1}, \\cot^{-1}, \\sec^{-1}$) lives in $[0, \\pi]$ and satisfies $f^{-1}(-x) = \\pi - f^{-1}(x)$!",
        "<strong>2. ITF Properties, Simplification & Proofs:</strong> Master $\\sin^{-1}x+\\cos^{-1}x=\\frac{\\pi}{2}$ ($|x|\\le 1$), piecewise $\\tan^{-1}x+\\tan^{-1}y$ (adding $+\\pi$ when $x,y>0$ and $xy>1$!), sawtooth folding of $\\sin^{-1}(\\sin x)$, canonical substitutions ($\\sqrt{a^2-x^2}\\to x=a\\sin\\theta$), and telescoping $\\sum \\tan^{-1}\\frac{1}{1+n+n^2}$.",
        "<strong>3. Trigonometric Calculus:</strong> Radian measure makes $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$ true, unlocking $\\frac{d}{dx}(\\sin x)=\\cos x$, $\\frac{d}{dx}(\\tan x)=\\sec^2 x$, and $\\frac{d}{dx}(\\tan^{-1}x)=\\frac{1}{1+x^2}$.",
        "<strong>4. Euler's Bridge, Fourier Harmonics & Lie Groups:</strong> Taylor series prove $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$ ($e^{i\\pi}+1=0$), orthogonality decomposes arbitrary periodic signals into Fourier waves, and $2\\times 2$ rotation matrices form the continuous Lie group $SO(2)$!"
      ],
      urSteps: [
        "<strong>1۔ معکوس تکونیاتی فنکشنز (ITF) اور پرنسپل ویلیو شاخیں:</strong> دوری ہونے کی وجہ سے ٹرگنومیٹرک فنکشنز کا معکوس لینے کے لیے ڈومین کو محدود کیا جاتا ہے: پہلے خاندان ($\\sin^{-1}, \\tan^{-1}, \\operatorname{cosec}^{-1}$) کی رینج $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ کے گرد ہوتی ہے جہاں منفی علامت باہر آ جاتی ہے ($\\sin^{-1}(-x)=-\\sin^{-1}x$)، جبکہ دوسرے خاندان ($\\cos^{-1}, \\cot^{-1}, \\sec^{-1}$) کی رینج $[0,\\pi]$ میں ہوتی ہے جہاں $\\cos^{-1}(-x)=\\pi-\\cos^{-1}x$ بنتا ہے!",
        "<strong>2۔ خصوصیات، اختصار اور اعلیٰ ثبوت:</strong> ہمیشہ یاد رکھیں کہ $|x|\\le 1$ کے لیے $\\sin^{-1}x+\\cos^{-1}x=\\frac{\\pi}{2}$، اور $\\tan^{-1}x+\\tan^{-1}y$ میں جب $x,y>0$ اور $xy>1$ ہو تو فارمولے میں $+\\pi$ جمع کرنا لازمی ہے! جزر $\\sqrt{1-x^2}$ کو سادہ کرنے کے لیے $x=\\sin\\theta$ یا $x=\\cos 2\\theta$ درج کریں۔",
        "<strong>3۔ ٹرگنومیٹرک کیلکولس:</strong> ریڈین اکائی کی بدولت بنیادی حد $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$ بنتی ہے، جس سے $\\sin x$ کا مشتق $\\cos x$ اور $\\tan^{-1}x$ کا مشتق $\\frac{1}{1+x^2}$ حاصل ہوتا ہے۔",
        "<strong>4۔ آئلسر فارمولا، فوریئر سیریز اور لائی گروپس:</strong> ٹیلر سیریز سے کائنات کی خوبصورت ترین مساوات $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$ ثابت ہوتی ہے، فوریئر تجزیہ ہر پیچیدہ لہر کو خالص سائن اور کوسائن موجوں میں توڑ دیتا ہے، اور گردش کے میٹرکس $SO(2)$ لائی گروپ بناتے ہیں!"
      ],
      enTip: "Never write $\\sin^{-1}x = \\frac{1}{\\sin x}$! $\\sin^{-1}x$ is an angle (arcsine), whereas $(\\sin x)^{-1} = \\operatorname{cosec} x$. And check $xy < 1$ vs $xy > 1$ in every $\\tan^{-1}x + \\tan^{-1}y$ sum!",
      urTip: "انتہائی اہم فرق: $\\sin^{-1}x$ ایک زاویہ ہے، یہ ہرگز $\\frac{1}{\\sin x}$ کے برابر نہیں! نیز $\\tan^{-1}x + \\tan^{-1}y$ میں پہلے ہمیشہ $xy$ کا $1$ سے موازنہ چیک کریں!",
      enVoice: "Welcome to Level 6: Inverse Arcana, Calculus, and Fourier Summit. Restricting periodic waves creates two families of inverse trig functions: the negative pi over two to pi over two family for arcsine, arctangent, and arccosecant, and the zero to pi family for arccosine, arccotangent, and arcsecant where negative inputs subtract from pi! Master piecewise arctangent addition, trigonometric substitutions, calculus limits in radians, Euler's complex exponential formula, and Fourier harmonic series!",
      urVoice: "لیول سکس کے لیکچر میں خوش آمدید۔ معکوس ٹرگنومیٹرک فنکشنز کو دو خاندانوں میں تقسیم کیا جاتا ہے: آرک سائن اور آرک ٹینجنٹ منفی پائی بائی ٹو سے مثبت پائی بائی ٹو میں رہتے ہیں، جبکہ آرک کوسائن زیرو سے پائی کی شاخ میں رہتا ہے جہاں منفی عدد درج کرنے پر پائی مائنس آتا ہے۔ آرک ٹینجنٹ جمع کرتے وقت ایکس ضرب وائی کی شرط ضرور چیک کریں، اور کیلکولس میں تمام زاویے ریڈین میں رکھیں۔"
    },

    "tier-7": {
      tierId: "tier-7",
      levelNum: 7,
      enBadge: "Level 7 Grandmaster Lecture • Chapter 44",
      urBadge: "لیول 7 گرینڈ ماسٹر لیکچر • باب 44",
      enTitle: "Grandmaster Synthesis Citadel — Unifying All 4 Trigonometry Groups",
      urTitle: "گرینڈ ماسٹر خلاصہ — ٹرگنومیٹری کے چاروں گروپس کا مکمل نچوڑ",
      duration: "16 Min Bilingual Synthesis",
      boardTex: "$$\\text{Ratios } (O,A,H) \\longrightarrow \\text{Identities & Heights} \\longrightarrow \\text{Unit Circle & Multi-Angles} \\longrightarrow \\text{Inverse Branches & Equations}$$",
      enSteps: [
        "<strong>1. Group I Synthesis (9 Right-Triangle Foundations):</strong> Everything begins with dynamic rotation, $\\pi\\text{ rad}=180^\\circ$, the 6 ratios ($\\sin,\\cos,\\tan,\\operatorname{cosec},\\sec,\\cot$), the exact $0^\\circ\\text{–}90^\\circ$ table, and right-triangle side/angle solving.",
        "<strong>2. Group II Synthesis (7 Identity, Proof & Surveying Pillars):</strong> Complementary co-functions ($90^\\circ-\\theta$), the 3 Pythagorean identities, power-reduction simplification ($s^4+c^4, s^6+c^6$), strict one-side proof tactics, and elevation/depression tower formulas.",
        "<strong>3. Group III Synthesis (16 Circular & Multi-Angle Pillars):</strong> Unit circle $(x,y)=(\\cos t,\\sin t)$, ASTC signs, domain/range/periodicity, wave graphs, compound/double/triple/half angles, sum-product bridges, and general solutions over $n\\in\\mathbb{Z}$.",
        "<strong>4. Group IV Synthesis (9 Inverse & Advanced Equation Pillars):</strong> Bijective principal value branches ($[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ vs $[0,\\pi]$), piecewise $\\tan^{-1}$ laws, canonical substitutions, telescoping inverse sums, and verification of roots against domain bounds."
      ],
      urSteps: [
        "<strong>1۔ گروپ اول کا خلاصہ (9 بنیادی ستون):</strong> سفر کا آغاز گردش کے تصور، $\\pi\\text{ rad}=180^\\circ$، چھ تکونیاتی نسبتوں، معیاری زاویوں ($0^\\circ$ تا $90^\\circ$) اور قائمۃ الزاویہ مثلث کے اضلاع و زاویے معلوم کرنے سے ہوتا ہے۔",
        "<strong>2۔ گروپ دوم کا خلاصہ (7 متماثلات، ثبوت اور بلندی کے ستون):</strong> تکمیلی زاویے ($90^\\circ-\\theta$)، تین فیثاغورثی متماثلات، بڑی طاقتوں کا اختصار، متماثلات ثابت کرنے کے یک طرفہ اصول، اور زاویۂ فراز و نشیب کے عملی مسائل۔",
        "<strong>3۔ گروپ سوم کا خلاصہ (16 دائروی و مضاعف زاویہ ستون):</strong> اکائی دائرہ، ASTC علامات، ڈومین، رینج، دوریت، موجی گراف، مرکب، دگنے، تگنے اور نصف زاویے، جمع و ضرب کے تبادلے اور تکونیاتی مساواتوں کے عمومی حل۔",
        "<strong>4۔ گروپ چہارم کا خلاصہ (9 معکوس فنکشنز اور مساواتوں کے ستون):</strong> معکوس ٹرگنومیٹرک فنکشنز کی پرنسپل شاخیں، منفی مقداروں کے قوانین، مشروط $\\tan^{-1}$ جمع، مثلثی متبادلات کے ذریعے اختصار و ثبوت اور مساواتوں میں اصل حل کی پڑتال۔"
      ],
      enTip: "When stuck on ANY trigonometry problem: (1) Check domain & quadrant signs, (2) Look for 1-killers $1\\pm\\cos 2\\theta$ or Pythagorean pairs, (3) Verify final roots!",
      urTip: "گرینڈ ماسٹر اصول: کسی بھی مشکل سوال میں (1) پہلے ڈومین اور ربع کی علامت دیکھیں، (2) $1\\pm\\cos 2\\theta$ یا فیثاغورثی جوڑا تلاش کریں، اور (3) آخر میں جواب کو اصل مساوات میں رکھ کر ضرور پرکھیں!",
      enVoice: "Congratulations on reaching Level 7: The Grandmaster Synthesis Citadel! Here all 41 core pillars across four groups unite into one crystal-clear architecture: from right-triangle ratios and radian measure, through Pythagorean proofs and heights, across the unit circle, wave graphs, and multi-angle formulas, all the way to inverse principal branches and general solutions!",
      urVoice: "لیول سیون گرینڈ ماسٹر خلاصے میں خوش آمدید! یہاں ٹرگنومیٹری کے چاروں گروپس ایک مکمل نقشے کی صورت میں یکجا ہوتے ہیں: قائمۃ الزاویہ مثلث کی نسبتوں اور ریڈین سے لے کر متماثلات کے ثبوت، اکائی دائرہ، مرکب زاویوں کے فارمولے، عمومی حل اور معکوس فنکشنز تک مکمل مہارت آپ کے سامنے ہے۔"
    }
  },

  chapters: {
    "ch-1-intro": {
      enTitle: "Lecture 1: Introduction to Trigonometry & Right-Triangle Anatomy",
      urTitle: "لیکچر 1: ٹرگنومیٹری کا تعارف اور قائمۃ الزاویہ مثلث کی ساخت",
      boardTex: "$$O^2 + A^2 = H^2 \\qquad (\\text{e.g., } 3^2+4^2=5^2,\\; 5^2+12^2=13^2)$$",
      enLecture: [
        "Trigonometry bridges <strong>angles</strong> and <strong>lengths</strong> so we can measure stars, mountains, and waves without touching them.",
        "In a right-angled triangle, the side opposite $90^\\circ$ is fixed as the <strong>Hypotenuse ($H$)</strong>, while <strong>Opposite ($O$)</strong> and <strong>Adjacent ($A$)</strong> swap roles depending on which acute angle $\\theta$ you look from!",
        "Memorize primitive Pythagorean triples $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, and $(7,24,25)$ to compute missing sides mentally in one second."
      ],
      urLecture: [
        "ٹرگنومیٹری زاویوں اور لمبائیوں کے درمیان پل بناتی ہے جس سے پہاڑوں، ستاروں اور لہروں کی پیمائش ممکن ہوتی ہے۔",
        "قائمۃ الزاویہ مثلث میں $90^\\circ$ کے سامنے ہمیشہ <strong>وتر ($H$)</strong> ہوتا ہے، لیکن <strong>عمود ($O$)</strong> اور <strong>قاعدہ ($A$)</strong> زیرِ غور زاویہ $\\theta$ کے بدلنے سے اپنی جگہ بدل لیتے ہیں!",
        "تیز رفتار حساب کے لیے مشہور فیثاغورثی ثلاثیاں $(3,4,5)$، $(5,12,13)$، $(8,15,17)$ اور $(7,24,25)$ زبانی یاد رکھیں۔"
      ],
      enTip: "Always label $H$ first (across $90^\\circ$), then $O$ (across $\\theta$), and $A$ last!",
      urTip: "پہلے $90^\\circ$ کے سامنے وتر $H$ لکھیں، پھر $\\theta$ کے سامنے عمود $O$، اور بچ جانے والا ضلع قاعدہ $A$ ہوگا!",
      enVoice: "Lecture 1: Introduction to Trigonometry. Always locate the 90 degree angle first to mark the hypotenuse H. The side facing your chosen acute angle theta is Opposite O, and the remaining side touching theta is Adjacent A, linked by O squared plus A squared equals H squared.",
      urVoice: "لیکچر نمبر ایک: ٹرگنومیٹری کا تعارف۔ قائمۃ الزاویہ مثلث میں نوے درجے کے سامنے والا ضلع ہمیشہ وتر ہوتا ہے۔ زاویہ تھیٹا کے سامنے والا ضلع عمود اور ساتھ والا ضلع قاعدہ کہلاتا ہے، جن پر مسئلہ فیثاغورث لاگو ہوتا ہے۔"
    },

    "ch-2-angles": {
      enTitle: "Lecture 2: Dynamic Angles, DMS System & Coterminal Rotations",
      urTitle: "لیکچر 2: زاویوں کی پیمائش، DMS نظام اور ہم انجام زاویے",
      boardTex: "$$1^\\circ = 60', \\quad 1' = 60'', \\qquad \\theta_{\\text{coterminal}} = \\theta + 360^\\circ k \\; (k \\in \\mathbb{Z})$$",
      enLecture: [
        "An angle in standard position has its vertex at $(0,0)$ and initial ray along the $+x$-axis; anti-clockwise rotation is positive ($+\\theta$) and clockwise is negative ($-\\theta$).",
        "To convert decimal degrees like $42.375^\\circ$ to DMS, multiply the fractional part by $60$ repeatedly ($0.375\\times 60 = 22.5' \\to 22'30''$).",
        "Angles differing by full $360^\\circ$ turns (such as $50^\\circ$, $410^\\circ$, and $-310^\\circ$) are <strong>coterminal</strong> and land on the exact same terminal ray!"
      ],
      urLecture: [
        "معیاری حالت میں زاویے کا راس مبدا $(0,0)$ پر اور ابتدائی شعاع مثبت $x$-محور پر ہوتی ہے؛ گھڑی کی مخالف سمت گردش مثبت اور گھڑی کی سمت منفی ہوتی ہے۔",
        "اعشاریہ درجے کو منٹ اور سیکنڈ (DMS) میں بدلنے کے لیے کسری حصے کو $60$ سے ضرب دیں ($1^\\circ = 60', 1' = 60''$)۔",
        "وہ زاویے جن میں $360^\\circ$ کے مکمل چکروں کا فرق ہو (جیسے $50^\\circ, 410^\\circ, -310^\\circ$) <strong>ہم انجام زاویے (Coterminal Angles)</strong> کہلاتے ہیں اور ایک ہی شعاع پر ختم ہوتے ہیں!"
      ],
      enTip: "For negative coterminal angles like $-750^\\circ$, add multiples of $360^\\circ$ until you land in $[0^\\circ, 360^\\circ)$: $-750^\\circ + 3(360^\\circ) = 330^\\circ$.",
      urTip: "منفی زاویے (مثلاً $-750^\\circ$) کا مثبت ہم انجام زاویہ نکالنے کے لیے اس میں $360^\\circ$ کے اضعاف جمع کریں: $-750^\\circ + 1080^\\circ = 330^\\circ$۔",
      enVoice: "Lecture 2: Angles and their measurement. Counter-clockwise rotation is positive and clockwise is negative. One degree splits into 60 minutes, and one minute into 60 seconds. Any two angles differing by an integer multiple of 360 degrees are coterminal!",
      urVoice: "لیکچر نمبر دو: زاویوں کی پیمائش۔ گھڑی کی مخالف سمت بننے والا زاویہ مثبت اور گھڑی کی سمت منفی ہوتا ہے۔ ایک درجے میں ساٹھ منٹ اور ایک منٹ میں ساٹھ سیکنڈ ہوتے ہیں۔ تین سو ساٹھ درجے کے فرق والے زاویے ہم انجام کہلاتے ہیں۔"
    },

    "ch-3-radian": {
      enTitle: "Lecture 3: Degree & Radian Conversion, Arc Length & Sector Area",
      urTitle: "لیکچر 3: درجہ اور ریڈین، قوس کی لمبائی اور سیکٹر کا رقبہ",
      boardTex: "$$\\theta_{\\text{rad}} = \\theta_{\\text{deg}}\\cdot\\frac{\\pi}{180^\\circ}, \\qquad l = r\\theta, \\qquad A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}lr$$",
      enLecture: [
        "One <strong>radian</strong> is the angle subtended at a circle's center by an arc equal in length to the radius $r$. Since full circumference is $2\\pi r$, a full turn is $2\\pi$ rad $= 360^\\circ$, so $\\pi\\text{ rad} = 180^\\circ$.",
        "Multiply by $\\frac{\\pi}{180^\\circ}$ to get radians (so $\\pi$ stays on top), and multiply by $\\frac{180^\\circ}{\\pi}$ to cancel $\\pi$ and get degrees.",
        "Linear speed on a spinning wheel of radius $r$ and angular speed $\\omega$ (in rad/s) is simply $v = r\\omega$."
      ],
      urLecture: [
        "جب دائرے کی قوس کی لمبائی رداس $r$ کے برابر ہو تو مرکز پر بننے والا زاویہ <strong>ایک ریڈین</strong> کہلاتا ہے۔ چوں کہ محیط $2\\pi r$ ہے، اس لیے $2\\pi\\text{ rad}=360^\\circ$ یعنی $\\pi\\text{ rad}=180^\\circ$۔",
        "ڈگری کو ریڈین میں بدلنے کے لیے $\\frac{\\pi}{180^\\circ}$ سے ضرب دیں اور ریڈین کو ڈگری میں بدلنے کے لیے $\\frac{180^\\circ}{\\pi}$ سے ضرب دیں۔",
        "گھومتے پہیے پر خطی رفتار $v = r\\omega$، قوس کی لمبائی $l = r\\theta$ اور سیکٹر کا رقبہ $A = \\frac{1}{2}r^2\\theta$ ہمیشہ ریڈین ہی میں درست کام کرتے ہیں۔"
      ],
      enTip: "Notice $1$ radian ($\\approx 57.3^\\circ$) is MUCH bigger than $1^\\circ$, so $\\sin 1 > \\sin 1^\\circ$!",
      urTip: "یاد رکھیں $1$ ریڈین تقریباً $57.3^\\circ$ کے برابر ہے، لہٰذا $\\sin 1$ کی قدر $\\sin 1^\\circ$ سے کہیں بڑی ہوتی ہے!",
      enVoice: "Lecture 3: Degrees and Radians. One radian is subtended when arc length equals radius, giving pi radians equals 180 degrees. Multiply degrees by pi over 180 to get radians, and always use radians in arc length l equals r theta and sector area one half r squared theta.",
      urVoice: "لیکچر نمبر تین: درجہ اور ریڈین۔ پائی ریڈین ایک سو اسی درجے کے برابر ہوتا ہے۔ ڈگری سے ریڈین بنانے کے لیے پائی بٹا ایک سو اسی سے ضرب دیں، اور قوس کی لمبائی ایل برابر آر تھیٹا میں تھیٹا ہمیشہ ریڈین میں رکھیں۔"
    },

    "ch-4-primary-ratios": {
      enTitle: "Lecture 4: Primary Trigonometric Ratios (sin, cos, tan)",
      urTitle: "لیکچر 4: بنیادی تکونیاتی نسبتیں (سائن، کوسائن، ٹینجنٹ)",
      boardTex: "$$\\sin\\theta = \\frac{O}{H}, \\qquad \\cos\\theta = \\frac{A}{H}, \\qquad \\tan\\theta = \\frac{O}{A} = \\frac{\\sin\\theta}{\\cos\\theta}$$",
      enLecture: [
        "By AA triangle similarity, if two right triangles share acute angle $\\theta$, their side ratios $\\frac{O}{H}, \\frac{A}{H}, \\frac{O}{A}$ are 100% identical regardless of triangle size.",
        "Because legs $O$ and $A$ are shorter than hypotenuse $H$, acute $\\sin\\theta$ and $\\cos\\theta$ always lie strictly between $0$ and $1$, whereas $\\tan\\theta = \\frac{O}{A}$ can be any positive number.",
        " Remember $\\sin\\theta$ is a single function evaluation, NOT '$\\sin \\times \\theta$', and $\\sin^2\\theta$ means $(\\sin\\theta)^2$!"
      ],
      urLecture: [
        "متشابہ مثلثوں کے اصول کی رو سے اگر زاویہ $\\theta$ یکساں ہو تو مثلث چھوٹی ہو یا بڑی، اضلاع کی نسبتیں $\\frac{O}{H}, \\frac{A}{H}, \\frac{O}{A}$ ہمیشہ مستقل رہتی ہیں۔",
        "چوں کہ وتر $H$ سب سے لمبا ضلع ہے، اس لیے حادہ زاویوں کے لیے $\\sin\\theta < 1$ اور $\\cos\\theta < 1$ ہوتا ہے، جبکہ $\\tan\\theta = \\frac{O}{A}$ ایک سے بڑا بھی ہو سکتا ہے۔",
        "یاد رکھیں $\\sin\\theta$ کا مطلب سائن اور تھیٹا کی ضرب ہرگز نہیں، اور $\\sin^2\\theta$ سے مراد $(\\sin\\theta)^2$ ہے!"
      ],
      enTip: "Use the quotient identity $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ to compute $\\tan\\theta$ instantly without redrawing the triangle!",
      urTip: "خارجِ قسمت کلیہ $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ کی مدد سے سائن اور کوسائن کو تقسیم کر کے فوراً ٹینجنٹ معلوم کریں!",
      enVoice: "Lecture 4: Primary Trigonometric Ratios. SOH CAH TOA defines sine as opposite over hypotenuse, cosine as adjacent over hypotenuse, and tangent as opposite over adjacent, which also equals sine divided by cosine.",
      urVoice: "لیکچر نمبر چار: بنیادی تکونیاتی نسبتیں۔ سائن تھیٹا عمود بٹا وتر، کوسائن تھیٹا قاعدہ بٹا وتر، اور ٹینجنٹ تھیٹا عمود بٹا قاعدہ یعنی سائن بٹا کوسائن کے برابر ہوتا ہے۔"
    },

    "ch-5-reciprocal-ratios": {
      enTitle: "Lecture 5: Reciprocal Trigonometric Ratios (cosec, sec, cot)",
      urTitle: "لیکچر 5: معکوس تکونیاتی نسبتیں (cosec, sec, cot)",
      boardTex: "$$\\operatorname{cosec}\\theta = \\frac{1}{\\sin\\theta} = \\frac{H}{O}, \\qquad \\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{H}{A}, \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{A}{O}$$",
      enLecture: [
        "Inverting the three primary ratios gives cosecant, secant, and cotangent. Use the <strong>Single-'Co' Rule</strong>: $(\\sin, \\operatorname{cosec})$, $(\\cos, \\sec)$, and $(\\tan, \\cot)$ each have one 'co-'.",
        "Since $H \\ge O$ and $H \\ge A$, we always have $|\\operatorname{cosec}\\theta| \\ge 1$ and $|\\sec\\theta| \\ge 1$—so $\\sec\\theta = 0.6$ is mathematically impossible!",
        "Define $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ at boundary angles so $\\cot 90^\\circ = \\frac{0}{1} = 0$ is cleanly defined."
      ],
      urLecture: [
        "بنیادی نسبتوں کو الٹانے سے کوسیکنٹ، سیکنٹ اور کوٹینجنٹ بنتے ہیں۔ یاد رکھنے کا سنہری اصول: ہر جوڑے میں صرف ایک بار <em>co</em> آتا ہے ($\\cos \\leftrightarrow \\sec$ اور $\\sin \\leftrightarrow \\operatorname{cosec}$)۔",
        "وتر بڑا ہونے کے سبب $|\\sec\\theta| \\ge 1$ اور $|\\operatorname{cosec}\\theta| \\ge 1$ ہوتا ہے؛ چنانچہ $\\sec\\theta = \\frac{3}{5}$ ناممکن ہے!",
        "حدودی زاویوں پر ہمیشہ $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ استعمال کریں تاکہ $\\cot 90^\\circ = \\frac{0}{1} = 0$ درست نکلے۔"
      ],
      enTip: "Multiplying any ratio by its reciprocal always gives $1$: $\\sin\\theta\\operatorname{cosec}\\theta = 1$, $\\cos\\theta\\sec\\theta = 1$, $\\tan\\theta\\cot\\theta = 1$.",
      urTip: "کسی بھی نسبت کو اس کے معکوس سے ضرب دینے پر جواب ہمیشہ $1$ آتا ہے، مثلاً $\\cos\\theta \\cdot \\sec\\theta = 1$۔",
      enVoice: "Lecture 5: Reciprocal Trigonometric Ratios. Cosecant flips sine, secant flips cosine, and cotangent flips tangent. Because the hypotenuse is longest, secant and cosecant magnitudes are always greater than or equal to one!",
      urVoice: "لیکچر نمبر پانچ: معکوس تکونیاتی نسبتیں۔ کوسیکنٹ سائن کا، سیکنٹ کوسائن کا، اور کوٹینجنٹ ٹینجنٹ کا الٹ ہے۔ سیکنٹ اور کوسیکنٹ کی مطلق قدر ہمیشہ ایک یا ایک سے بڑی ہوتی ہے۔"
    },

    "ch-6-standard-angles": {
      enTitle: "Lecture 6: Exact Trigonometric Ratios of Standard Angles (0°–90°)",
      urTitle: "لیکچر 6: معیاری زاویوں ($0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$) کی قدریں",
      boardTex: "$$\\sin(0^\\circ,30^\\circ,45^\\circ,60^\\circ,90^\\circ) = \\left(0,\\; \\frac{1}{2},\\; \\frac{1}{\\sqrt{2}},\\; \\frac{\\sqrt{3}}{2},\\; 1\\right)$$",
      enLecture: [
        "Geometrically, the $45^\\circ$-$45^\\circ$-$90^\\circ$ isosceles right triangle $(1,1,\\sqrt{2})$ gives $45^\\circ$ ratios, while splitting an equilateral triangle of side $2$ into $(1,\\sqrt{3},2)$ gives $30^\\circ$ and $60^\\circ$ ratios!",
        "Memory Finger Trick: $\\sin$ follows $\\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$, and $\\cos$ writes the exact same list backwards.",
        "Watch non-linearity: $\\sin(30^\\circ + 60^\\circ) = \\sin 90^\\circ = 1 \\neq \\sin 30^\\circ + \\sin 60^\\circ$!"
      ],
      urLecture: [
        "ہندسی طور پر متساوی الساقین قائمۃ الزاویہ مثلث $(1,1,\\sqrt{2})$ سے $45^\\circ$ کی نسبتیں، اور متساوی الاضلاع مثلث کو آدھا کرنے سے بننے والی مثلث $(1,\\sqrt{3},2)$ سے $30^\\circ$ اور $60^\\circ$ کی قدریں اخذ ہوتی ہیں!",
        "آسان ترین ٹرک: $\\frac{\\sqrt{0}}{2}$ سے $\\frac{\\sqrt{4}}{2}$ تک لکھنے سے $\\sin$ کی قطار بنتی ہے اور اسے الٹا لکھنے سے $\\cos$ کی قطار تیار ہو جاتی ہے۔",
        "یاد رکھیں کہ $\\sin(A+B)$ ہرگز $\\sin A + \\sin B$ کے برابر نہیں ہوتا!"
      ],
      enTip: "If $\\tan(A+B)=\\sqrt{3}$ and $\\tan(A-B)=\\frac{1}{\\sqrt{3}}$, equate angles immediately: $A+B=60^\\circ$ and $A-B=30^\\circ \\implies A=45^\\circ, B=15^\\circ$!",
      urTip: "اگر $\\tan(A+B)=\\sqrt{3}$ اور $\\tan(A-B)=\\frac{1}{\\sqrt{3}}$ دیا ہو تو فوراً $A+B=60^\\circ$ اور $A-B=30^\\circ$ لکھ کر $A=45^\\circ, B=15^\\circ$ نکالیں!",
      enVoice: "Lecture 6: Standard Angles. Isosceles and half-equilateral triangles prove the exact ratios at 30, 45, and 60 degrees. Use square root of zero through four divided by two for sine, reverse it for cosine, and divide sine by cosine for tangent.",
      urVoice: "لیکچر نمبر چھ: معیاری زاویے۔ زیرو سے چار تک جزر لے کر دو پر تقسیم کرنے سے زیرو، تیس، پینتالیس، ساٹھ اور نوے درجے کے سائن کی قدریں حاصل ہوتی ہیں، اور ترتیب الٹنے سے کوسائن مل جاتا ہے۔"
    },

    "ch-7-complementary": {
      enTitle: "Lecture 7: Trigonometric Ratios of Complementary Angles",
      urTitle: "لیکچر 7: تکمیلی زاویوں ($90^\\circ - \\theta$) کی تکونیاتی نسبتیں",
      boardTex: "$$\\sin(90^\\circ-\\theta)=\\cos\\theta, \\qquad \\tan(90^\\circ-\\theta)=\\cot\\theta, \\qquad \\sec(90^\\circ-\\theta)=\\operatorname{cosec}\\theta$$",
      enLecture: [
        "In right $\\triangle ABC$ ($\\angle B=90^\\circ$), $\\angle A + \\angle C = 90^\\circ$. What is Opposite to $A$ is Adjacent to $C = 90^\\circ - A$, which is literally why 'co-sine' means <em>sine of the complement</em>!",
        "In telescoping products like $\\tan 1^\\circ \\tan 2^\\circ \\cdots \\tan 89^\\circ$, pair symmetric ends $\\tan\\theta \\cdot \\tan(90^\\circ-\\theta) = \\tan\\theta\\cot\\theta = 1$, leaving $\\tan 45^\\circ = 1$.",
        "In any $\\triangle ABC$, $A+B+C=180^\\circ \\implies \\frac{B+C}{2} = 90^\\circ - \\frac{A}{2}$, so $\\sin\\left(\\frac{B+C}{2}\\right) = \\cos\\left(\\frac{A}{2}\\right)$!"
      ],
      urLecture: [
        "قائمۃ الزاویہ مثلث میں دونوں حادہ زاویوں کا مجموعہ $90^\\circ$ ہوتا ہے۔ جو ضلع زاویہ $\\theta$ کا عمود ہے وہی $(90^\\circ-\\theta)$ کا قاعدہ ہے؛ اسی لیے <em>cosine</em> کا لفظی مطلب ہی 'تکمیلی زاویے کا سائن' ہے!",
        "لمبے سلسلے $\\tan 1^\\circ \\tan 2^\\circ \\cdots \\tan 89^\\circ$ میں کناروں کے جوڑے بنائیں: $\\tan\\theta \\cdot \\tan(90^\\circ-\\theta)=1$، اور درمیان میں $\\tan 45^\\circ=1$ بچتا ہے۔",
        "کسی بھی مثلث $ABC$ میں $A+B+C=180^\\circ$ کی وجہ سے $\\sin\\left(\\frac{B+C}{2}\\right) = \\cos\\left(\\frac{A}{2}\\right)$ ہمیشہ درست ہوتا ہے!"
      ],
      enTip: "When simplifying $\\frac{\\sin 18^\\circ}{\\cos 72^\\circ}$, convert ONLY ONE of the two complementary angles ($\\sin 18^\\circ = \\cos 72^\\circ \\implies 1$), never both!",
      urTip: "کسر $\\frac{\\sin 18^\\circ}{\\cos 72^\\circ}$ حل کرتے وقت صرف ایک زاویے کو بدلیں، دونوں کو بیک وقت تبدیل کریں گے تو سوال وہیں واپس آ جائے گا!",
      enVoice: "Lecture 7: Complementary Angles. Two angles adding to 90 degrees swap opposite and adjacent legs, so sine of 90 minus theta equals cosine theta, tangent becomes cotangent, and secant becomes cosecant. When simplifying complementary pairs, convert only one side of the pair!",
      urVoice: "لیکچر نمبر سات: تکمیلی زاویے۔ جب دو زاویوں کا مجموعہ نوے درجہ ہو تو سائن کوسائن میں، ٹینجنٹ کوٹینجنٹ میں اور سیکنٹ کوسیکنٹ میں تبدیل ہو جاتا ہے۔ کسر حل کرتے وقت جوڑے میں سے صرف ایک رقم کو تبدیل کریں۔"
    },

    "ch-8-unknown-ratios": {
      enTitle: "Lecture 8: Finding Unknown Trigonometric Ratios",
      urTitle: "لیکچر 8: ایک نسبت سے باقی تمام تکونیاتی نسبتیں معلوم کرنا",
      boardTex: "$$\\sec\\theta + \\tan\\theta = p \\implies \\sec\\theta - \\tan\\theta = \\frac{1}{p} \\implies \\sec\\theta = \\frac{1}{2}\\!\\left(p + \\frac{1}{p}\\right)$$",
      enLecture: [
        "Given any single ratio like $\\tan\\theta = \\frac{a}{b}$, set $O = ak, A = bk$, compute $H = \\sqrt{a^2+b^2}\\,k$, and write down all 5 remaining ratios with $k$ cancelling cleanly.",
        "For homogeneous fractions in $\\sin\\theta$ and $\\cos\\theta$ (same degree top & bottom), divide numerator and denominator by $\\cos^n\\theta$ to turn everything into $\\tan\\theta$ immediately!",
        "Master the Conjugate Trick: since $\\sec^2\\theta - \\tan^2\\theta = 1$, $(\\sec\\theta+\\tan\\theta)(\\sec\\theta-\\tan\\theta)=1$, so knowing $\\sec\\theta+\\tan\\theta=p$ gives $\\sec\\theta-\\tan\\theta=\\frac{1}{p}$ without squaring!"
      ],
      urLecture: [
        "اگر ایک نسبت مثلاً $\\tan\\theta = \\frac{a}{b}$ معلوم ہو تو $O=ak$ اور $A=bk$ فرض کر کے فیثاغورث سے $H=\\sqrt{a^2+b^2}\\,k$ نکالیں؛ باقی پانچوں نسبتیں فوراً حاصل ہو جائیں گی۔",
        "ہم درجہ (Homogeneous) کسروں جیسے $\\frac{a\\sin\\theta+b\\cos\\theta}{c\\sin\\theta+d\\cos\\theta}$ میں شمار کنندہ اور مخرج کو $\\cos\\theta$ پر تقسیم کر کے براہِ راست $\\tan\\theta$ کی قدر درج کریں!",
        "زوجی ٹرک: چوں کہ $\\sec^2\\theta-\\tan^2\\theta=1$، اس لیے اگر $\\sec\\theta+\\tan\\theta=p$ ہو تو فوراً $\\sec\\theta-\\tan\\theta=\\frac{1}{p}$ لکھیں اور دونوں کو جمع کر کے $\\sec\\theta$ نکال لیں!"
      ],
      enTip: "In quadrant problems (e.g. $\\cos\\theta = -\\frac{3}{5}$ in Q-III), find side magnitudes first, then attach quadrant signs via ASTC!",
      urTip: "ربع والے سوالات میں پہلے اضلاع کی مثبت لمبائیاں نکالیں اور آخر میں ASTC قاعدے کے مطابق مثبت یا منفی علامت لگائیں!",
      enVoice: "Lecture 8: Finding Unknown Trigonometric Ratios. Build a k-scaled right triangle from any single ratio, divide homogeneous sine-cosine fractions by cosine to use tangent directly, and use secant plus tangent equals p implies secant minus tangent equals one over p!",
      urVoice: "لیکچر نمبر آٹھ: نامعلوم تکونیاتی نسبتیں معلوم کرنا۔ ایک نسبت سے کے مثلث بنا کر باقی پانچ نسبتیں نکالیں، ہم درجہ کسر کو کوسائن پر تقسیم کریں، اور سیکنٹ جمع ٹینجنٹ برابر پی ہو تو سیکنٹ منفی ٹینجنٹ ایک بٹا پی رکھ کر فوراً حل کریں۔"
    },

    "ch-8-unknown-sides": {
      enTitle: "Lecture 9: Finding Unknown Sides of Right-Angled Triangles",
      urTitle: "لیکچر 9: قائمۃ الزاویہ مثلث کے نامعلوم اضلاع معلوم کرنا",
      boardTex: "$$O = H\\sin\\theta, \\qquad A = H\\cos\\theta, \\qquad O = A\\tan\\theta, \\qquad H = \\frac{O}{\\sin\\theta}$$",
      enLecture: [
        "Given 1 side + 1 acute angle $\\theta$, pick the ONLY ratio among SOH-CAH-TOA that links the <strong>known side</strong> and the <strong>target side</strong>.",
        "Force vectors in physics use this every day: resolving hypotenuse magnitude $F$ into horizontal component $F\\cos\\theta$ and vertical component $F\\sin\\theta$.",
        "When the unknown is in the denominator (e.g. $\\sin 30^\\circ = \\frac{12}{H}$), swap denominator and ratio cleanly: $H = \\frac{12}{\\sin 30^\\circ} = 24$."
      ],
      urLecture: [
        "جب ایک ضلع اور ایک حادہ زاویہ $\\theta$ دیا ہو تو SOH-CAH-TOA میں سے وہ نسبت چنیں جو <strong>معلوم ضلع</strong> اور <strong>مطلوبہ ضلع</strong> کو آپس میں جوڑتی ہو۔",
        "فزکس میں قوت $F$ کے اجزا بنانا بالکل یہی عمل ہے: افقی جزو $F\\cos\\theta$ اور عمودی جزو $F\\sin\\theta$۔",
        "جب نامعلوم ضلع بٹے کے نیچے (مخرج میں) آئے، جیسے $\\sin 30^\\circ = \\frac{12}{H}$، تو جگہ بدل کر $H = \\frac{12}{\\sin 30^\\circ} = 24$ لکھیں۔"
      ],
      enTip: "Keep exact surds ($\\sqrt{2}, \\sqrt{3}$) until the final line so rounding errors never accumulate across multi-triangle figures!",
      urTip: "مشترکہ اشکال حل کرتے وقت جزر ($\\sqrt{2}, \\sqrt{3}$) کو آخری مرحلے تک برقرار رکھیں تاکہ اعشاریہ کی غلطی جمع نہ ہو!",
      enVoice: "Lecture 9: Finding Unknown Sides. Identify the given side and target side, pick the matching ratio from SOH CAH TOA, and isolate the unknown side cleanly.",
      urVoice: "لیکچر نمبر نو: نامعلوم اضلاع معلوم کرنا۔ معلوم اور مطلوبہ ضلع کے درمیان مناسب تکونیاتی نسبت منتخب کریں اور مساوات حل کر کے مطلوبہ لمبائی نکال لیں۔"
    },

    "ch-9-unknown-angles": {
      enTitle: "Lecture 10: Finding Unknown Angles via Inverse Ratios",
      urTitle: "لیکچر 10: مثلث کے نامعلوم زاویے معلوم کرنا",
      boardTex: "$$\\theta = \\sin^{-1}\\!\\left(\\frac{O}{H}\\right) = \\cos^{-1}\\!\\left(\\frac{A}{H}\\right) = \\tan^{-1}\\!\\left(\\frac{O}{A}\\right), \\qquad \\phi = 90^\\circ - \\theta$$",
      enLecture: [
        "While $\\sin$ takes an angle and outputs a side ratio, the inverse operation $\\sin^{-1}$ (arcsin) takes a side ratio and recovers the acute angle $\\theta$!",
        "Once you find $\\theta$, get the other acute angle instantaneously via $\\phi = 90^\\circ - \\theta$.",
        "In coordinate geometry, the inclination angle $\\theta$ of a line of slope $m$ with the $+x$-axis satisfies $m = \\tan\\theta \\implies \\theta = \\tan^{-1}(m)$."
      ],
      urLecture: [
        "عام فنکشن $\\sin$ زاویہ لے کر اضلاع کی نسبت بتاتا ہے، جبکہ معکوس عمل $\\sin^{-1}$ اضلاع کی نسبت لے کر واپس زاویہ $\\theta$ بتاتا ہے!",
        "ایک حادہ زاویہ $\\theta$ نکل آئے تو دوسرا حادہ زاویہ فوراً $\\phi = 90^\\circ - \\theta$ سے معلوم کر لیں۔",
        "کوآرڈینیٹ جیومیٹری میں کسی خط کی ڈھلوان (Slope) $m = \\tan\\theta$ ہوتی ہے، جہاں سے میلان کا زاویہ $\\theta = \\tan^{-1}(m)$ نکلتا ہے۔"
      ],
      enTip: "Check that your calculator is in <strong>DEG</strong> mode (not RAD) when asked for an angle in degrees and minutes!",
      urTip: "کیلکولیٹر استعمال کرتے وقت تسلی کر لیں کہ وہ <strong>DEG</strong> موڈ میں ہے، ورنہ جواب ڈگری کے بجائے ریڈین میں آئے گا!",
      enVoice: "Lecture 10: Finding Unknown Angles. Given any two sides of a right triangle, apply inverse sine, inverse cosine, or inverse tangent to recover the acute angle theta, then subtract from 90 degrees for the second angle.",
      urVoice: "لیکچر نمبر دس: نامعلوم زاویے معلوم کرنا۔ جب قائمۃ الزاویہ مثلث کے دو اضلاع معلوم ہوں تو آرک سائن، آرک کوسائن یا آرک ٹینجنٹ کی مدد سے زاویہ تھیٹا معلوم کریں، اور نوے میں سے تفریق کر کے دوسرا زاویہ نکالیں۔"
    },

    "ch-11-identities": {
      enTitle: "Lecture 11: Fundamental Trigonometric Identities",
      urTitle: "لیکچر 11: بنیادی تکونیاتی متماثلات (Fundamental Identities)",
      boardTex: "$$\\sin^2\\theta + \\cos^2\\theta = 1, \\qquad \\sec^2\\theta - \\tan^2\\theta = 1, \\qquad \\operatorname{cosec}^2\\theta - \\cot^2\\theta = 1$$",
      enLecture: [
        "An <strong>equation</strong> holds only for specific angles, whereas an <strong>identity</strong> holds for <em>every</em> angle where both sides are defined!",
        "Rearrange each Pythagorean law into Difference-of-Squares form: $1 - \\sin^2\\theta = (1-\\sin\\theta)(1+\\sin\\theta) = \\cos^2\\theta$ and $(\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta) = 1$.",
        "Any trigonometric function can be expressed purely in terms of any other single function (e.g., $\\sin\\theta = \\frac{\\tan\\theta}{\\pm\\sqrt{1+\\tan^2\\theta}}$)."
      ],
      urLecture: [
        "<strong>مساوات (Equation)</strong> صرف چند مخصوص زاویوں کے لیے درست ہوتی ہے، جبکہ <strong>متماثلہ (Identity)</strong> ہر اُس زاویے کے لیے سچ ہوتی ہے جس پر دونوں اطراف تعریف شدہ ہوں!",
        "تینوں فیثاغورثی متماثلات کو فرقِ مربعین (Difference of Squares) کی شکل میں بھی یاد رکھیں: $1-\\sin^2\\theta=\\cos^2\\theta$ اور $(\\sec\\theta-\\tan\\theta)(\\sec\\theta+\\tan\\theta)=1$۔",
        "ان کلیوں کی مدد سے چھ میں سے کسی بھی تکونیاتی فنکشن کو کسی ایک فنکشن (مثلاً صرف $\\tan\\theta$) کی شکل میں لکھا جا سکتا ہے۔"
      ],
      enTip: "Never write $\\sin\\theta + \\cos\\theta = 1$! Squares are mandatory: $\\sin^2\\theta + \\cos^2\\theta = 1$, while $(\\sin\\theta \\pm \\cos\\theta)^2 = 1 \\pm 2\\sin\\theta\\cos\\theta$.",
      urTip: "کبھی بھی مربع کے بغیر $\\sin\\theta + \\cos\\theta = 1$ نہ لکھیں! درست کلیہ $\\sin^2\\theta + \\cos^2\\theta = 1$ ہے، اور $(\\sin\\theta \\pm \\cos\\theta)^2 = 1 \\pm 2\\sin\\theta\\cos\\theta$ بنتا ہے۔",
      enVoice: "Lecture 11: Fundamental Trigonometric Identities. Master the three Pythagorean laws and their difference-of-squares rearrangements, especially secant squared minus tangent squared equals one and cosecant squared minus cotangent squared equals one.",
      urVoice: "لیکچر نمبر گیارہ: بنیادی تکونیاتی متماثلات۔ سائن اسکوائر جمع کوسائن اسکوائر برابر ایک، سیکنٹ اسکوائر منفی ٹینجنٹ اسکوائر برابر ایک، اور کوسیکنٹ اسکوائر منفی کوٹینجنٹ اسکوائر برابر ایک تمام الجبرائی تبدیلیوں کی بنیاد ہیں۔"
    },

    "ch-12-simplification": {
      enTitle: "Lecture 12: Simplification of Trigonometric Expressions",
      urTitle: "لیکچر 12: تکونیاتی عبارات کا اختصار (Simplification)",
      boardTex: "$$\\sin^4\\theta + \\cos^4\\theta = 1 - 2\\sin^2\\theta\\cos^2\\theta, \\qquad \\sin^6\\theta + \\cos^6\\theta = 1 - 3\\sin^2\\theta\\cos^2\\theta$$",
      enLecture: [
        "Set $s = \\sin\\theta$ and $c = \\cos\\theta$ to turn giant trigonometric tangles into clean polynomial algebra with $s^2+c^2=1$!",
        "Factor out common powers <em>before</em> expanding, and use $a^3 \\pm b^3 = (a\\pm b)(a^2 \\mp ab + b^2)$ on cubics like $\\frac{\\sin^3\\theta+\\cos^3\\theta}{\\sin\\theta+\\cos\\theta} = 1 - \\sin\\theta\\cos\\theta$.",
        "Rationalize $\\sqrt{\\frac{1+\\sin\\theta}{1-\\sin\\theta}}$ by multiplying top and bottom inside the root by $(1+\\sin\\theta)$ to get $\\frac{1+\\sin\\theta}{|\\cos\\theta|} = \\sec\\theta+\\tan\\theta$ (acute)."
      ],
      urLecture: [
        "پیچیدہ عبارات میں $\\tan, \\cot, \\sec, \\operatorname{cosec}$ کو $s=\\sin\\theta$ اور $c=\\cos\\theta$ میں بدل دیں تاکہ پورا سوال آسان الجبرا بن جائے!",
        "پھیلانے سے پہلے مشترک اجزا باہر نکالیں، اور مکعب کے کلیے $a^3\\pm b^3$ اور بڑی طاقتوں کے کلیے $s^4+c^4=1-2s^2c^2$ اور $s^6+c^6=1-3s^2c^2$ استعمال کریں۔",
        "جزر $\\sqrt{\\frac{1+\\sin\\theta}{1-\\sin\\theta}}$ کو سادہ کرنے کے لیے اندر ہی اندر $(1+\\sin\\theta)$ سے ضرب اور تقسیم کریں جس سے حادہ زاویے کے لیے $\\sec\\theta+\\tan\\theta$ حاصل ہوتا ہے۔"
      ],
      enTip: "Whenever you see a $1$ next to $\\sec\\theta+\\tan\\theta - 1$, replace ONLY that $1$ with $(\\sec^2\\theta-\\tan^2\\theta)$ and factor out $(\\sec\\theta+\\tan\\theta)$!",
      urTip: "جب عبارت میں $\\tan\\theta+\\sec\\theta-1$ نظر آئے تو صرف $1$ کی جگہ $(\\sec^2\\theta-\\tan^2\\theta)$ رکھ کر مشترک نکال لیں—پوری کسر ایک سطر میں مختصر ہو جائے گی!",
      enVoice: "Lecture 12: Simplification of Trigonometric Expressions. Convert everything to sine and cosine, factor common powers early, use fourth and sixth power reduction formulas, and multiply radical fractions by conjugates.",
      urVoice: "لیکچر نمبر بارہ: تکونیاتی عبارات کا اختصار۔ تمام نسبتوں کو سائن اور کوسائن میں بدلیں، مشترک اجزا باہر نکالیں، چوتھی اور چھٹی طاقت کے شارٹ کٹ فارمولے استعمال کریں اور جذری کسروں کو زوجی جملے سے ضرب دیں۔"
    },

    "ch-13-proving": {
      enTitle: "Lecture 13: Proving Trigonometric Identities (7 Master Techniques)",
      urTitle: "لیکچر 13: تکونیاتی متماثلات ثابت کرنے کے 7 ماسٹر طریقے",
      boardTex: "$$\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta, \\qquad \\sec^2\\theta + \\operatorname{cosec}^2\\theta = \\sec^2\\theta\\operatorname{cosec}^2\\theta$$",
      enLecture: [
        "Golden Law of Proofs: Start strictly from LHS (or RHS) and transform it into the other side—or reduce LHS and RHS independently to the same middle expression $M$.",
        "Master the two 'Difference/Sum Equals Product' gems: $\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta$ (by factoring out $\\sin^2\\theta$) and $\\sec^2\\theta + \\operatorname{cosec}^2\\theta = \\sec^2\\theta\\operatorname{cosec}^2\\theta$.",
        "In parameter elimination (e.g. $x=a\\cos\\theta+b\\sin\\theta,\\; y=a\\sin\\theta-b\\cos\\theta$), square and add so cross-terms $\\pm 2ab\\sin\\theta\\cos\\theta$ annihilate: $x^2+y^2 = a^2+b^2$!"
      ],
      urLecture: [
        "ثبوت کا بنیادی قانون: ہمیشہ ایک طرف (عموماً پیچیدہ سائیڈ LHS) سے آغاز کریں اور اسے دوسری طرف کے برابر لائیں، یا دونوں اطراف کو الگ الگ حل کر کے ایک ہی درمیانی مقدار $M$ پر پہنچائیں۔",
        "دو مشہور شاہکار یاد رکھیں: $\\tan^2\\theta - \\sin^2\\theta = \\tan^2\\theta\\sin^2\\theta$ اور $\\sec^2\\theta + \\operatorname{cosec}^2\\theta = \\sec^2\\theta\\operatorname{cosec}^2\\theta$۔",
        "زاویہ $\\theta$ کا اخراج (Parameter Elimination) کرتے وقت مربع لے کر جمع یا تفریق کریں، مثلاً $x^2+y^2 = a^2+b^2$!"
      ],
      enTip: "Keep one eye on the target RHS at every step—if RHS has $\\sec\\theta$ and $\\tan\\theta$, divide top and bottom of LHS by $\\cos\\theta$!",
      urTip: "ہر قدم پر دائیں طرف (RHS) کو ذہن میں رکھیں: اگر جواب $\\sec\\theta$ اور $\\tan\\theta$ میں چاہیے تو شمار کنندہ اور مخرج کو $\\cos\\theta$ پر تقسیم کر دیں!",
      enVoice: "Lecture 13: Proving Trigonometric Identities. Work strictly from one side, keep your eye on the target right-hand side, use conjugate multiplication for one-minus-cosine denominators, and square-and-add to eliminate theta.",
      urVoice: "لیکچر نمبر تیرہ: تکونیاتی متماثلات کا ثبوت۔ ہمیشہ ایک سائیڈ لے کر حل شروع کریں، مطلوبہ سائیڈ کو مدنظر رکھتے ہوئے تبدیلیاں کریں، اور تھیٹا خارج کرنے کے لیے مربع لے کر جمع یا تفریق کریں۔"
    },

    "ch-10-heights-distances": {
      enTitle: "Lecture 14: Applications of Trigonometry — Heights & Distances I",
      urTitle: "لیکچر 14: ٹرگنومیٹری کے عملی اطلاقات — بلندی اور فاصلہ (حصہ اول)",
      boardTex: "$$\\text{Elevation } \\alpha = \\text{Depression } \\alpha, \\qquad d_{\\text{same side}} = h(\\cot\\alpha - \\cot\\beta)$$",
      enLecture: [
        "Always sketch a clean right-triangle diagram first: draw the observer's horizontal eye-level line, the vertical object, and the slanted line of sight.",
        "When walking distance $d$ toward a tower increases elevation from $\\alpha$ to $\\beta$, tower height is $h = \\frac{d}{\\cot\\alpha - \\cot\\beta}$!",
        "Remember to add observer height $h_0$ at the very end if the theodolite or person is standing above ground level ($H_{\\text{total}} = h + h_0$)."
      ],
      urLecture: [
        "سب سے پہلے صاف شکل بنائیں: مشاہدہ کرنے والے کی آنکھ سے افقی خط کھینچیں، عمودی مینار بنائیں اور خطِ نظر ملائیں۔",
        "مینار کی طرف $d$ فاصلہ چلنے سے اگر زاویۂ فراز $\\alpha$ سے بڑھ کر $\\beta$ ہو جائے تو بلندی کا براہِ راست کلیہ $h = \\frac{d}{\\cot\\alpha - \\cot\\beta}$ ہے!",
        "اگر مشاہدہ کرنے والے کا اپنا قد $h_0$ دیا ہو تو آخر میں کل بلندی میں $h_0$ جمع کرنا ہرگز نہ بھولیں۔"
      ],
      enTip: "When shadow length equals tower height ($d = h$), $\\tan\\theta = 1$, so the sun's altitude is immediately $45^\\circ$!",
      urTip: "جب سائے کی لمبائی مینار کی بلندی کے برابر ہو ($d=h$) تو $\\tan\\theta=1$، یعنی سورج کا زاویۂ بلندی فوراً $45^\\circ$ ہوتا ہے!",
      enVoice: "Lecture 14: Heights and Distances Part 1. Draw the horizontal eye-level line first. Because horizontals are parallel, depression equals elevation. For two points on the same side of a tower, distance d equals h times cotangent alpha minus cotangent beta.",
      urVoice: "لیکچر نمبر چودہ: بلندی اور فاصلہ حصہ اول۔ ہمیشہ پہلے صاف شکل بنائیں اور افقی خط کھینچیں۔ مینار کی طرف چلنے والے سوالات میں فاصلہ ڈی برابر ایچ ضرب کوٹ الفا منفی کوٹ بیٹا استعمال کریں۔"
    },

    "ch-15-heights-advanced": {
      enTitle: "Lecture 15: Heights & Distances II — Cloud-in-Lake, 3D & Complementary Towers",
      urTitle: "لیکچر 15: بلندی اور فاصلہ (حصہ دوم — جھیل میں عکس، تکمیلی زاویے اور سہ جہتی مسائل)",
      boardTex: "$$h_{\\text{complementary}} = \\sqrt{ab}, \\qquad H_{\\text{cloud}} = h\\,\\frac{\\tan\\beta + \\tan\\alpha}{\\tan\\beta - \\tan\\alpha}, \\qquad h_{\\text{crossed}} = \\frac{ab}{a+b}$$",
      enLecture: [
        "<strong>Complementary Distances Theorem:</strong> If angles of elevation from distances $a$ and $b$ sum to $90^\\circ$, then $\\tan\\theta\\cdot\\cot\\theta = \\frac{h}{a}\\cdot\\frac{h}{b} = 1 \\implies h = \\sqrt{ab}$ (geometric mean)!",
        "<strong>Cloud Reflection in a Lake:</strong> By the law of reflection, a cloud at height $H$ above water forms its virtual image at depth $H$ <em>below</em> water, giving $H = h\\frac{\\tan\\beta+\\tan\\alpha}{\\tan\\beta-\\tan\\alpha}$.",
        "<strong>3D Bearing Towers:</strong> If due South gives elevation $\\alpha$ and due East gives $\\beta$ across distance $d$, Pythagoras on the ground $x_S^2 + x_E^2 = d^2$ yields $h = \\frac{d}{\\sqrt{\\cot^2\\alpha+\\cot^2\\beta}}$!"
      ],
      urLecture: [
        "<strong>تکمیلی زاویوں کا مسئلہ:</strong> اگر مینار کے قاعدے سے $a$ اور $b$ فاصلوں پر بننے والے زاویۂ فراز تکمیلی ہوں ($\\alpha+\\beta=90^\\circ$) تو مینار کی بلندی ہندسی اوسط $h = \\sqrt{ab}$ کے برابر ہوتی ہے!",
        "<strong>جھیل میں بادل کا عکس:</strong> انعکاس کے قانون کی رو سے پانی سے $H$ بلندی پر موجود بادل کا عکس پانی کی سطح سے $H$ گہرائی میں بنتا ہے، جس سے $H = h\\frac{\\tan\\beta+\\tan\\alpha}{\\tan\\beta-\\tan\\alpha}$ اخذ ہوتا ہے۔",
        "<strong>سہ جہتی (3D) مسائل:</strong> جنوب اور مشرق میں زاویے دیے ہوں تو زمین پر قائمۃ الزاویہ مثلث بنتی ہے جہاں $h = \\frac{d}{\\sqrt{\\cot^2\\alpha+\\cot^2\\beta}}$ استعمال ہوتا ہے۔"
      ],
      enTip: "Notice why depression $\\beta$ to a lake reflection is always steeper than elevation $\\alpha$ to the real cloud ($\\beta > \\alpha$): you look down at depth $H+h$ vs up at $H-h$!",
      urTip: "جھیل والے سوال میں عکس کا زاویۂ نشیب $\\beta$ ہمیشہ اصل بادل کے زاویۂ فراز $\\alpha$ سے بڑا ہوتا ہے کیوں کہ عکس کی گہرائی $H+h$ زیادہ ہوتی ہے!",
      enVoice: "Lecture 15: Advanced Heights and Distances. Complementary elevations from distances a and b give tower height square root of a b. For a cloud over a lake, its virtual image lies at equal depth H below the water surface!",
      urVoice: "لیکچر نمبر پندرہ: بلندی اور فاصلہ کے اعلیٰ مسائل۔ اگر فاصلہ اے اور بی سے زاویے تکمیلی ہوں تو بلندی جزر اے بی ہوتی ہے۔ جھیل میں بادل کا عکس پانی سے اتنی ہی گہرائی میں بنتا ہے جتنا بادل پانی سے بلند ہوتا ہے۔"
    },

    "ch-16-trig-functions": {
      enTitle: "Lecture 16: Circular Trigonometric Functions on the Unit Circle",
      urTitle: "لیکچر 16: اکائی دائرے پر دائروی تکونیاتی فنکشنز",
      boardTex: "$$P(\\cos t, \\sin t) \\in x^2+y^2=1, \\qquad \\cos(-t)=\\cos t, \\qquad \\sin(-t)=-\\sin t$$",
      enLecture: [
        "Wrapping the real number line $t \\in \\mathbb{R}$ around the unit circle $x^2+y^2=1$ starting at $(1,0)$ defines $\\cos t = x$ and $\\sin t = y$ for <em>all</em> real numbers.",
        "Quadrantal values read directly off $(1,0), (0,1), (-1,0), (0,-1)$: e.g. $\\cos\\pi = -1, \\sin\\pi = 0$ and $\\cos\\frac{3\\pi}{2} = 0, \\sin\\frac{3\\pi}{2} = -1$.",
        "Reflecting across the $x$-axis sends $(x,y) \\to (x,-y)$, proving $\\cos(-t)=\\cos t$ (even) and $\\sin(-t)=-\\sin t$ (odd) instantly!"
      ],
      urLecture: [
        "حقیقی اعداد کی لکیر $t \\in \\mathbb{R}$ کو اکائی دائرے $x^2+y^2=1$ کے گرد نقطہ $(1,0)$ سے لپیٹنے پر ہر حقیقی عدد کے لیے $\\cos t = x$ اور $\\sin t = y$ متعین ہو جاتا ہے۔",
        "محوری زاویوں ($0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$) کی قدریں براہِ راست نقاط $(1,0), (0,1), (-1,0), (0,-1)$ سے پڑھیں۔",
        "منفی زاویہ $-t$ لینے سے نقطہ $(x,-y)$ پر چلا جاتا ہے، جس سے فوراً ثابت ہوتا ہے کہ $\\cos(-t)=\\cos t$ (جفت) اور $\\sin(-t)=-\\sin t$ (طاق) ہے!"
      ],
      enTip: "$\\tan t$ is undefined at odd multiples of $\\frac{\\pi}{2}$ (where $x=0$), while $\\cot t$ is undefined at integer multiples of $\\pi$ (where $y=0$).",
      urTip: "$\\tan t$ اور $\\sec t$ اُن زاویوں $(2n+1)\\frac{\\pi}{2}$ پر غیر معین ہوتے ہیں جہاں $x=\\cos t=0$ ہو!",
      enVoice: "Lecture 16: Trigonometric Functions on the Unit Circle. Every real number t maps to a point cosine t comma sine t on x squared plus y squared equals one. Cosine and secant are even functions, while sine, tangent, cotangent, and cosecant are odd.",
      urVoice: "لیکچر نمبر سولہ: اکائی دائرے پر ٹرگنومیٹرک فنکشنز۔ اکائی دائرے کے نقطے کا ایکس محدد کوسائن اور وائی محدد سائن کہلاتا ہے۔ کوسائن اور سیکنٹ جفت فنکشنز ہیں جبکہ باقی چاروں طاق فنکشنز ہیں۔"
    },

    "ch-17-any-angle": {
      enTitle: "Lecture 17: Trigonometric Functions of Any Angle & Allied Reductions",
      urTitle: "لیکچر 17: کسی بھی زاویے کے فنکشنز، حوالہ جاتی اور متعلقہ زاویے",
      boardTex: "$$r = \\sqrt{x^2+y^2} > 0:\\quad \\sin\\theta = \\frac{y}{r},\\; \\cos\\theta = \\frac{x}{r},\\; \\tan\\theta = \\frac{y}{x}$$",
      enLecture: [
        "For any point $P(x,y) \\neq (0,0)$ on the terminal ray, distance $r = \\sqrt{x^2+y^2}$ is <strong>always positive</strong>, while $x$ and $y$ carry signs!",
        "The <strong>Reference Angle ($\\theta_r$)</strong> is always the acute angle between the terminal ray and the <em>horizontal $x$-axis</em>—never the $y$-axis.",
        "<strong>Allied-Angle Universal Algorithm:</strong> (1) Check the quadrant of $(n\\cdot 90^\\circ \\pm \\theta)$ to set the sign of the <em>original</em> function; (2) Even $n$ ($180^\\circ, 360^\\circ$) keeps the function, odd $n$ ($90^\\circ, 270^\\circ$) flips to the co-function!"
      ],
      urLecture: [
        "اختتامی شعاع پر واقع کسی بھی نقطے $P(x,y)$ کے لیے فاصلہ $r=\\sqrt{x^2+y^2}$ <strong>ہمیشہ مثبت</strong> ہوتا ہے، جبکہ علامت کا دارومدار $x$ اور $y$ پر ہوتا ہے!",
        "<strong>حوالہ جاتی زاویہ (Reference Angle $\\theta_r$)</strong> ہمیشہ اختتامی شعاع اور <em>افقی $x$-محور</em> کے درمیان حادہ زاویہ ہوتا ہے، عمودی $y$-محور کے ساتھ ہرگز نہیں۔",
        "<strong>متعلقہ زاویوں کا دو قدمی قاعدہ:</strong> (1) اصل فنکشن کی ربع میں علامت لگائیں؛ (2) اگر $90^\\circ$ کا جفت ضعف ($180^\\circ, 360^\\circ$) ہو تو فنکشن برقرار رکھیں، اور طاق ضعف ($90^\\circ, 270^\\circ$) ہو تو Co-function میں بدل دیں!"
      ],
      enTip: "Always decide the $\\pm$ sign using the <em>original</em> function BEFORE switching to the co-function! E.g. $\\sin(180^\\circ+\\theta) = -\\sin\\theta$, $\\cos(90^\\circ+\\theta) = -\\sin\\theta$.",
      urTip: "علامت کا فیصلہ ہمیشہ تبدیل ہونے والے نئے فنکشن کے بجائے <em>اصل دیے گئے فنکشن</em> کے لحاظ سے کریں، مثلاً دوسرے ربع میں $\\cos(90^\\circ+\\theta) = -\\sin\\theta$!",
      enVoice: "Lecture 17: Functions of Any Angle and Allied Reductions. Radius r equals square root of x squared plus y squared is always positive. Measure reference angles to the horizontal x-axis, set the sign from the original function's quadrant, and flip to the co-function only at odd multiples of 90 degrees!",
      urVoice: "لیکچر نمبر سترہ: کسی بھی زاویے کے فنکشنز۔ رداس آر ہمیشہ مثبت ہوتا ہے۔ حوالہ جاتی زاویہ ہمیشہ ایکس محور کے ساتھ بنائیں، اصل فنکشن کے ربع کے مطابق علامت لگائیں، اور صرف نوے یا دو سو ستر درجے پر کو فنکشن میں تبدیل کریں۔"
    },

    "ch-18-quadrant-signs": {
      enTitle: "Lecture 18: Signs of Trigonometric Functions in Quadrants (ASTC)",
      urTitle: "لیکچر 18: چاروں ربعوں میں تکونیاتی فنکشنز کی علامات (ASTC)",
      boardTex: "$$\\text{Q-I: All}+,\\quad \\text{Q-II: }\\sin,\\operatorname{cosec}+,\\quad \\text{Q-III: }\\tan,\\cot+,\\quad \\text{Q-IV: }\\cos,\\sec+$$",
      enLecture: [
        "Memorize <strong>ASTC</strong> (<em>Add Sugar To Coffee</em>): Q-I $(+,+)$ all positive; Q-II $(-,+)$ $\\sin,\\operatorname{cosec}>0$; Q-III $(-,-)$ $\\tan,\\cot>0$; Q-IV $(+,-)$ $\\cos,\\sec>0$.",
        "Intersecting two sign clues pinpoints a unique quadrant: e.g. $\\sin\\theta < 0$ (Q-III or Q-IV) AND $\\tan\\theta > 0$ (Q-I or Q-III) $\\implies$ <strong>Quadrant III</strong>!",
        "Beware half-angles: if $\\theta \\in (180^\\circ, 270^\\circ)$ (Q-III), dividing by $2$ puts $\\frac{\\theta}{2} \\in (90^\\circ, 135^\\circ)$, which is in <strong>Q-II</strong>, NOT Q-III!"
      ],
      urLecture: [
        "چاروں ربعوں کی علامات <strong>ASTC</strong> سے یاد رکھیں: پہلا ربع سب مثبت، دوسرا صرف $\\sin,\\operatorname{cosec}$ مثبت، تیسرا صرف $\\tan,\\cot}$ مثبت، اور چوتھا صرف $\\cos,\\sec$ مثبت۔",
        "دو شرائط کے ملاپ سے ربع متعین کریں: مثلاً اگر $\\sin\\theta < 0$ اور $\\tan\\theta > 0$ ہو تو مشترک ربع <strong>تیسرا ربع (Q-III)</strong> ہے!",
        "نصف زاویے کا دھوکہ: اگر $\\theta$ تیسرے ربع $(180^\\circ, 270^\\circ)$ میں ہو تو $\\frac{\\theta}{2}$ دوسرے ربع $(90^\\circ, 135^\\circ)$ میں چلا جاتا ہے!"
      ],
      enTip: "Always simplify $\\sqrt{\\cos^2\\theta} = |\\cos\\theta|$! In Q-II and Q-III where $\\cos\\theta < 0$, $\\sqrt{\\cos^2\\theta} = -\\cos\\theta$.",
      urTip: "یاد رکھیں $\\sqrt{\\cos^2\\theta} = |\\cos\\theta|$ ہوتا ہے! دوسرے اور تیسرے ربع میں کوسائن منفی ہونے کی وجہ سے جزر کھل کر $-\\cos\\theta$ بنتا ہے!",
      enVoice: "Lecture 18: Quadrant Signs. Add Sugar To Coffee tells you which functions are positive in Quadrants 1 through 4. Intersect two sign inequalities to pinpoint the exact quadrant, and always write square root of cosine squared as absolute value of cosine!",
      urVoice: "لیکچر نمبر اٹھارہ: ربعوں میں علامات۔ اے ایس ٹی سی قاعدے کی مدد سے پہلے ربع میں سب، دوسرے میں سائن، تیسرے میں ٹینجنٹ اور چوتھے ربع میں کوسائن مثبت ہوتا ہے۔ جزر کھولتے وقت ربع کی علامت کا خاص خیال رکھیں۔"
    },

    "ch-19-domain-range": {
      enTitle: "Lecture 19: Domain and Range of Trigonometric Functions",
      urTitle: "لیکچر 19: تکونیاتی فنکشنز کی ڈومین اور رینج",
      boardTex: "$$a\\cos x + b\\sin x + c \\in \\left[c - \\sqrt{a^2+b^2},\\; c + \\sqrt{a^2+b^2}\\right], \\qquad a^2\\tan^2 x + b^2\\cot^2 x \\ge 2|ab|$$",
      enLecture: [
        "<strong>Domains</strong> exclude division-by-zero angles: $\\tan x, \\sec x$ exclude $(2n+1)\\frac{\\pi}{2}$; $\\cot x, \\operatorname{cosec} x$ exclude $n\\pi$.",
        "<strong>Linear Wave Range:</strong> $a\\cos x + b\\sin x$ has exact minimum $-\\sqrt{a^2+b^2}$ and maximum $+\\sqrt{a^2+b^2}$.",
        "<strong>Quadratic & AM-GM Range:</strong> Complete the square on quadratics in $u=\\sin x \\in [-1,1]$, and apply AM-GM to $a^2\\tan^2 x + b^2\\cot^2 x \\ge 2|ab|$ (valid directly for $\\tan,\\cot$, while for $a^2\\sec^2 x + b^2\\operatorname{cosec}^2 x = (a^2+b^2) + a^2\\tan^2 x + b^2\\cot^2 x \\ge (|a|+|b|)^2$!)."
      ],
      urLecture: [
        "<strong>ڈومین (Domain):</strong> جہاں مخرج صفر ہو ان زاویوں کو نکال دیں: $\\tan x, \\sec x$ کی ڈومین $\\mathbb{R}\\setminus\\{(2n+1)\\frac{\\pi}{2}\\}$ اور $\\cot x, \\operatorname{cosec} x$ کی ڈومین $\\mathbb{R}\\setminus\\{n\\pi\\}$ ہے۔",
        "<strong>لکیری موج کی رینج:</strong> عبارت $a\\cos x + b\\sin x + c$ کی کم از کم قدر $c-\\sqrt{a^2+b^2}$ اور زیادہ سے زیادہ قدر $c+\\sqrt{a^2+b^2}$ ہوتی ہے۔",
        "<strong>AM-GM کلیہ:</strong> $a^2\\tan^2 x + b^2\\cot^2 x$ کی کم از کم قدر ہمیشہ $2|ab|$ ہوتی ہے، لیکن $\\sin^2 x$ اور $\\operatorname{cosec}^2 x$ پر براہِ راست AM-GM لگاتے وقت چیک کریں کہ برابری ممکن ہے یا نہیں!"
      ],
      enTip: "For $\\sin^2 x + 4\\operatorname{cosec}^2 x$, naive AM-GM says $4$, which requires $\\sin^2 x = 2$ (impossible)! Since $u+\\frac{4}{u}$ decreases on $(0,1]$, minimum is $1+4 = 5$!",
      urTip: "ہوشیار: $\\sin^2 x + 4\\operatorname{cosec}^2 x$ کی کم از کم قدر $4$ نہیں بلکہ $5$ ہے، کیوں کہ $\\sin^2 x = 2$ ناممکن ہے!",
      enVoice: "Lecture 19: Domain and Range. Exclude cosine-zero points for tangent and secant, and sine-zero points for cotangent and cosecant. Any linear combination a cosine x plus b sine x ranges from minus square root of a squared plus b squared to plus square root of a squared plus b squared.",
      urVoice: "لیکچر نمبر انیس: ڈومین اور رینج۔ ٹینجنٹ اور سیکنٹ میں جہاں کوسائن صفر ہو وہ زاویے ڈومین سے خارج ہوتے ہیں۔ اے کوسائن ایکس جمع بی سائن ایکس کی رینج منفی جزر اے اسکوائر جمع بی اسکوائر سے مثبت جزر اے اسکوائر جمع بی اسکوائر تک ہوتی ہے۔"
    },

    "ch-20-periodicity": {
      enTitle: "Lecture 20: Periodicity of Trigonometric Functions",
      urTitle: "لیکچر 20: تکونیاتی فنکشنز کی دوریت (Periodicity)",
      boardTex: "$$T\\!\\left(f(ax+b)\\right) = \\frac{T}{|a|}, \\qquad T(\\sin^2 x)=T(|\\sin x|)=\\pi, \\qquad T(|\\sin x|+|\\cos x|)=\\frac{\\pi}{2}$$",
      enLecture: [
        "The <strong>fundamental period</strong> $T > 0$ is the <em>smallest</em> positive shift with $f(x+T) = f(x)$ for all $x$: $2\\pi$ for $\\sin,\\cos,\\sec,\\operatorname{cosec}$, and $\\pi$ for $\\tan,\\cot$.",
        "Scaling $x \\to ax+b$ changes period to $\\frac{T}{|a|}$; phase shift $b$, vertical stretch $A$, and vertical shift $D$ do NOT change the period!",
        "For sums like $\\sin(2x)+\\cos(3x)$, take $\\operatorname{LCM}(T_1, T_2) = \\frac{\\operatorname{LCM}(\\text{numerators})}{\\operatorname{HCF}(\\text{denominators})}$, then check whether symmetry halves it (e.g. $|\\sin x|+|\\cos x|$ shrinks to $\\frac{\\pi}{2}$!)."
      ],
      urLecture: [
        "<strong>بنیادی دورانیہ (Fundamental Period $T>0$)</strong> وہ سب سے چھوٹا مثبت عدد ہے جس کے لیے $f(x+T)=f(x)$ ہو: $\\sin,\\cos,\\sec,\\operatorname{cosec}$ کے لیے $2\\pi$ اور $\\tan,\\cot$ کے لیے $\\pi$۔",
        "لیلکیری تبدیلی $f(ax+b)$ میں نیا دورانیہ صرف $\\frac{T}{|a|}$ بنتا ہے؛ جمع شدہ مستقل $b$ یا باہر ضرب کھاتے عدد سے دورانیے پر کوئی فرق نہیں پڑتا۔",
        "دو دوری فنکشنز کے مجموعے کا دورانیہ کسروں کے ذواضعاف اقل $\\frac{\\operatorname{LCM}(\\text{شمار کنندگان})}{\\operatorname{HCF}(\\text{مخرج})}$ سے نکلتا ہے، البتہ تشاکل کی صورت میں (جیسے $|\\sin x|+|\\cos x|$) دورانیہ مزید آدھا ہو کر $\\frac{\\pi}{2}$ رہ جاتا ہے!"
      ],
      enTip: "Functions like $\\sin(x^2)$ or $x + \\sin x$ are <strong>NOT periodic</strong> at all, whereas $\\sin x + \\sin(\\pi x)$ has irrational ratio and is aperiodic!",
      urTip: "یاد رکھیں $\\sin(x^2)$ اور $\\sin x + \\sin(\\pi x)$ دوری فنکشنز <strong>نہیں</strong> ہیں کیوں کہ پہلی صورت میں تعدد بدل رہا ہے اور دوسری میں نسبت غیر ناطق ہے!",
      enVoice: "Lecture 20: Periodicity. Sine and cosine have fundamental period 2 pi, while tangent and cotangent have period pi. Horizontal scaling by a divides the period by absolute a, even powers halve sine and cosine periods to pi, and rational period ratios combine via fraction LCM.",
      urVoice: "لیکچر نمبر بیس: دوریت۔ سائن اور کوسائن کا بنیادی دورانیہ ٹو پائی جبکہ ٹینجنٹ اور کوٹینجنٹ کا پائی ہے۔ ایکس کے ضریب اے سے دورانیہ تقسیم ہو جاتا ہے اور جفت طاقت لینے سے سائن یا کوسائن کا دورانیہ پائی رہ جاتا ہے۔"
    },

    "ch-21-trig-graphs": {
      enTitle: "Lecture 21: Graphs of All Six Trigonometric Functions",
      urTitle: "لیکچر 21: تمام چھ تکونیاتی فنکشنز کے گراف اور تبدیلیاں",
      boardTex: "$$y = A\\sin(Bx - C) + D:\\quad \\text{Amp}=|A|,\\quad T=\\frac{2\\pi}{|B|},\\quad \\text{Phase}=\\frac{C}{B},\\quad \\text{Midline } y=D$$",
      enLecture: [
        "Sketch any sinusoidal wave in seconds using the <strong>Quarter-Period 5-Point Method</strong>: divide $[x_0, x_0+T]$ into 4 equal steps of $\\frac{T}{4}$ giving Midline $\\to$ Crest $\\to$ Midline $\\to$ Trough $\\to$ Midline!",
        "$\\tan x$ strictly increases between vertical asymptotes $x=(2n+1)\\frac{\\pi}{2}$, while $\\cot x$ strictly decreases between $x=n\\pi$.",
        "Plot $\\sec x$ and $\\operatorname{cosec} x$ by sketching $\\cos x$ or $\\sin x$ lightly first—where the guide wave hits peaks $\\pm 1$, the reciprocal U-branches kiss it; where the guide wave crosses $0$, draw vertical asymptotes!"
      ],
      urLecture: [
        "کسی بھی سائن یا کوسائن لہر کا گراف بنانے کے لیے <strong>پانچ نکاتی چوتھائی دورانیہ طریقہ</strong> اپنائیں: دورانیہ $T$ کو $\\frac{T}{4}$ کے چار برابر حصوں میں بانٹ کر درمیانی خط، چوٹی، درمیانی خط، گہرائی اور واپسی کے نقاط لگائیں!",
        "$\\tan x$ کا گراف عمودی متقاربات $x=(2n+1)\\frac{\\pi}{2}$ کے درمیان ہمیشہ اوپر چڑھتا ہے، جبکہ $\\cot x$ ہمیشہ نیچے اترتا ہے۔",
        "$\\sec x$ اور $\\operatorname{cosec} x$ کا گراف بنانے کے لیے پہلے ہلکی پنسل سے $\\cos x$ یا $\\sin x$ بنائیں: چوٹیوں $\\pm 1$ سے U-شکل شاخیں الٹ دیں اور صفر کے نقاط پر عمودی متقارب کھینچ دیں!"
      ],
      enTip: "Always factor out $B$ inside $A\\sin(Bx - C) = A\\sin\\!\\left(B(x - \\frac{C}{B})\\right)$! The phase shift of $\\sin(2x - \\pi)$ is $+\\frac{\\pi}{2}$, NOT $\\pi$!",
      urTip: "فیز شفٹ نکالتے وقت ہمیشہ $B$ کو مشترک نکالیں: $\\sin(2x-\\pi) = \\sin 2(x-\\frac{\\pi}{2})$، لہٰذا شفٹ $\\pi$ نہیں بلکہ $\\frac{\\pi}{2}$ ہے!",
      enVoice: "Lecture 21: Trigonometric Graphs. Factor out B inside A sine of B x minus C plus D to read amplitude absolute A, period two pi over absolute B, phase shift C over B, and midline D. Use five quarter-period points to sketch any wave cleanly!",
      urVoice: "لیکچر نمبر اکیس: ٹرگنومیٹرک گراف۔ اے سائن بی ایکس منفی سی جمع ڈی میں حیطہ اے، دورانیہ ٹو پائی بٹا بی، اور فیز شفٹ سی بٹا بی ہوتا ہے۔ چوتھائی دورانیے کے پانچ نقاط کی مدد سے ہر لہر کا درست گراف منٹوں میں تیار ہو جاتا ہے۔"
    },
    "ch-22-compound-angles": {
      enTitle: "Lecture 22: Compound Angle Formulas (A ± B)",
      urTitle: "لیکچر 22: مرکب زاویوں ($A \\pm B$) کے فارمولے",
      boardTex: "$$\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B, \\quad \\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B, \\quad \\tan(A\\pm B)=\\frac{\\tan A\\pm\\tan B}{1\\mp\\tan A\\tan B}$$",
      enLecture: [
        "Sine mixes functions ($\\sin\\cos \\pm \\cos\\sin$) and <strong>keeps</strong> the sign; Cosine pairs like functions ($\\cos\\cos \\mp \\sin\\sin$) and <strong>flips</strong> the sign!",
        "Splitting $15^\\circ = 45^\\circ - 30^\\circ$ and $75^\\circ = 45^\\circ + 30^\\circ$ gives $\\sin 15^\\circ = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$ and $\\tan 15^\\circ = 2 - \\sqrt{3}$.",
        "Bonus gem: $\\sin(A+B)\\sin(A-B) = \\sin^2 A - \\sin^2 B$ and $\\tan(45^\\circ \\pm \\theta) = \\frac{1\\pm\\tan\\theta}{1\\mp\\tan\\theta}$!"
      ],
      urLecture: [
        "سائن کے مرکب کلیے میں $\\sin\\cos$ مل کر آتے ہیں اور درمیان کی علامت <strong>برقرار</strong> رہتی ہے؛ کوسائن میں ہم جنس جوڑے $\\cos\\cos, \\sin\\sin$ آتے ہیں اور درمیان کی علامت <strong>الٹ</strong> جاتی ہے!",
        "زاویوں کو $15^\\circ = 45^\\circ - 30^\\circ$ اور $75^\\circ = 45^\\circ + 30^\\circ$ میں توڑنے سے $\\sin 15^\\circ = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$ اور $\\tan 15^\\circ = 2-\\sqrt{3}$ کی قدریں ملتی ہیں۔",
        "یادگار کلیے: $\\sin(A+B)\\sin(A-B) = \\sin^2 A - \\sin^2 B$ اور $\\tan(45^\\circ\\pm\\theta) = \\frac{1\\pm\\tan\\theta}{1\\mp\\tan\\theta}$۔"
      ],
      enTip: "Whenever you see $\\tan A + \\tan B + \\tan A\\tan B\\tan(A+B)$ in an exam, expand $\\tan(A+B)(1-\\tan A\\tan B) = \\tan A + \\tan B$!",
      urTip: "جب سوال میں $A+B=45^\\circ$ دیا جائے تو فوراً $(1+\\tan A)(1+\\tan B) = 2$ استعمال کریں!",
      enVoice: "Lecture 22: Compound Angle Formulas. Sine of A plus or minus B mixes sine and cosine with the same sign, while cosine pairs cosine-cosine and sine-sine with the opposite sign. Use 45 minus 30 degrees to get exact values at 15 degrees!",
      urVoice: "لیکچر نمبر بائیس: مرکب زاویوں کے فارمولے۔ سائن میں سائن کوسائن ملتے ہیں اور علامت وہی رہتی ہے، جبکہ کوسائن میں کوسائن کوسائن اور سائن سائن آتے ہیں اور درمیان کی علامت بدل جاتی ہے۔"
    },

    "ch-23-double-angle": {
      enTitle: "Lecture 23: Double-Angle & Power-Reduction Formulas",
      urTitle: "لیکچر 23: دگنے زاویے ($2A$) اور طاقت کم کرنے کے فارمولے",
      boardTex: "$$\\sin 2A = 2\\sin A\\cos A = \\frac{2\\tan A}{1+\\tan^2 A}, \\qquad 1+\\cos 2A = 2\\cos^2 A, \\qquad 1-\\cos 2A = 2\\sin^2 A$$",
      enLecture: [
        "Setting $B=A$ in compound laws yields $\\sin 2A = 2\\sin A\\cos A$ and the three faces of $\\cos 2A$: $\\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A$.",
        "The <strong>'1-Killer' Twins</strong> $1+\\cos 2A = 2\\cos^2 A$ and $1-\\cos 2A = 2\\sin^2 A$ destroy constants inside square roots and integrals ($\\cos^2 A = \\frac{1+\\cos 2A}{2}$)!",
        "Notice the crucial sign distinction: $\\sin 2A = \\frac{2\\tan A}{1+\\tan^2 A}$ (with $+$, bounded by $1$) vs $\\tan 2A = \\frac{2\\tan A}{1-\\tan^2 A}$ (with $-$)."
      ],
      urLecture: [
        "مرکب فارمولوں میں $B=A$ رکھنے سے $\\sin 2A = 2\\sin A\\cos A$ اور $\\cos 2A$ کی تین شکلیں ملتی ہیں۔",
        "سب سے اہم <strong>'1-Killer' کلیے</strong> $1+\\cos 2A = 2\\cos^2 A$ اور $1-\\cos 2A = 2\\sin^2 A$ ہیں جو جزر اور انٹیگریشن میں $1$ کو فوراً ختم کر دیتے ہیں!",
        "نشان کا فرق یاد رکھیں: $\\sin 2A = \\frac{2\\tan A}{1+\\tan^2 A}$ کے مخرج میں جمع ($+$) ہے جبکہ $\\tan 2A = \\frac{2\\tan A}{1-\\tan^2 A}$ کے مخرج میں منفی ($-$) ہے!"
      ],
      enTip: "Divide the two 1-killers to get $\\frac{1-\\cos 2A}{1+\\cos 2A} = \\tan^2 A$ and $\\frac{\\sin 2A}{1+\\cos 2A} = \\tan A$ in one line!",
      urTip: "دونوں کلر کلیوں کو تقسیم کرنے سے فوراً $\\frac{1-\\cos 2A}{1+\\cos 2A} = \\tan^2 A$ اور $\\frac{\\sin 2A}{1+\\cos 2A} = \\tan A$ حاصل ہو جاتا ہے!",
      enVoice: "Lecture 23: Double-Angle Formulas. Memorize the one-killer identities: one plus cosine two A equals two cosine squared A, and one minus cosine two A equals two sine squared A. They linearize squares for calculus and collapse fractions immediately!",
      urVoice: "لیکچر نمبر تئیس: دگنے زاویے کے فارمولے۔ ون پلس کوسائن ٹو اے برابر ٹو کوسائن اسکوائر اے، اور ون مائنس کوسائن ٹو اے برابر ٹو سائن اسکوائر اے جزر اور کسروں کو پلک جھپکتے میں حل کر دیتے ہیں۔"
    },

    "ch-24-triple-angle": {
      enTitle: "Lecture 24: Triple-Angle Formulas, 60°±A Products & Golden 18°",
      urTitle: "لیکچر 24: تگنے زاویے ($3A$) کے فارمولے اور $18^\\circ$ کی سنہری قدر",
      boardTex: "$$\\sin 3A = 3\\sin A - 4\\sin^3 A, \\qquad \\cos 3A = 4\\cos^3 A - 3\\cos A, \\qquad \\sin 18^\\circ = \\frac{\\sqrt{5}-1}{4}$$",
      enLecture: [
        "Write $3A = 2A + A$ to prove $\\sin 3A = 3\\sin A - 4\\sin^3 A$, $\\cos 3A = 4\\cos^3 A - 3\\cos A$ (note the reversed $4$-$3$ order!), and $\\tan 3A = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}$.",
        "<strong>$60^\\circ \\pm A$ Product Miracle:</strong> $\\sin A\\sin(60^\\circ-A)\\sin(60^\\circ+A) = \\frac{1}{4}\\sin 3A$ (and same for $\\cos$, while $\\tan$ has NO $\\frac{1}{4}$: $\\tan A\\tan(60^\\circ-A)\\tan(60^\\circ+A) = \\tan 3A$!).",
        "Setting $\\theta=18^\\circ \\implies 2\\theta = 90^\\circ - 3\\theta \\implies \\sin 2\\theta = \\cos 3\\theta$ yields the golden ratio value $\\sin 18^\\circ = \\frac{\\sqrt{5}-1}{4}$."
      ],
      urLecture: [
        "$3A = 2A + A$ کھولنے سے $\\sin 3A = 3\\sin A - 4\\sin^3 A$ اور $\\cos 3A = 4\\cos^3 A - 3\\cos A$ ملتے ہیں (ترتیب $3\\text{-}4$ بمقابلہ $4\\text{-}3$ کا فرق نوٹ کریں!)۔",
        "<strong>شاندار ضربی کلیہ:</strong> $\\sin A\\sin(60^\\circ-A)\\sin(60^\\circ+A) = \\frac{1}{4}\\sin 3A$ (کوسائن میں بھی $\\frac{1}{4}\\cos 3A$، جبکہ ٹینجنٹ میں $\\frac{1}{4}$ نہیں آتا بلکہ سیدھا $\\tan 3A$ آتا ہے!)۔",
        "زاویہ $\\theta=18^\\circ$ رکھنے پر $\\sin 2\\theta = \\cos 3\\theta$ بنتا ہے جس سے سنہری قدر $\\sin 18^\\circ = \\frac{\\sqrt{5}-1}{4}$ نکلتی ہے۔"
      ],
      enTip: "Spot $\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ$ immediately as $A=20^\\circ$: it equals $\\frac{1}{4}\\cos 60^\\circ = \\frac{1}{8}$!",
      urTip: "امتحانی سوال $\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ$ میں $A=20^\\circ$ پہچانیں: جواب فوراً $\\frac{1}{4}\\cos 60^\\circ = \\frac{1}{8}$ نکل آتا ہے!",
      enVoice: "Lecture 24: Triple-Angle Formulas. Sine 3 A is 3 sine A minus 4 sine cubed A, whereas cosine 3 A flips to 4 cosine cubed A minus 3 cosine A. Also memorize the 60 minus A and 60 plus A product shortcut equal to one fourth sine or cosine of 3 A!",
      urVoice: "لیکچر نمبر چوبیس: تگنے زاویے کے فارمولے۔ سائن تھری اے برابر تین سائن اے منفی چار سائن کیوب اے، جبکہ کوسائن تھری اے برابر چار کوسائن کیوب اے منفی تین کوسائن اے ہوتا ہے۔ ساٹھ منفی اے اور ساٹھ جمع اے کی ضرب ایک بٹا چار ٹرپل زاویہ دیتی ہے۔"
    },

    "ch-25-half-angle": {
      enTitle: "Lecture 25: Half-Angle Formulas & Weierstrass Substitution",
      urTitle: "لیکچر 25: نصف زاویے ($\\frac{\\theta}{2}$) کے فارمولے اور وائرسٹراس متبادل",
      boardTex: "$$\\tan\\frac{\\theta}{2} = \\frac{1-\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1+\\cos\\theta}, \\qquad t=\\tan\\frac{\\theta}{2} \\implies \\sin\\theta=\\frac{2t}{1+t^2},\\; \\cos\\theta=\\frac{1-t^2}{1+t^2}$$",
      enLecture: [
        "Replacing $2A$ by $\\theta$ in double-angle laws gives $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}$ and $\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1+\\cos\\theta}{2}}$, where the $\\pm$ sign depends on the quadrant of $\\frac{\\theta}{2}$!",
        "The rational forms $\\tan\\frac{\\theta}{2} = \\frac{1-\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1+\\cos\\theta}$ have <strong>no $\\pm$ ambiguity</strong> at all!",
        "Letting $t = \\tan\\frac{\\theta}{2}$ converts every rational function of $\\sin\\theta$ and $\\cos\\theta$ into pure polynomial algebra—solving equations and calculus integrals effortlessly."
      ],
      urLecture: [
        "دگنے زاویے کے کلیوں میں $2A=\\theta$ رکھنے سے $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}$ اور $\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1+\\cos\\theta}{2}}$ ملتے ہیں، جہاں $\\pm$ کی علامت $\\frac{\\theta}{2}$ کے ربع کے مطابق لگتی ہے!",
        "جبکہ کسری فارمولے $\\tan\\frac{\\theta}{2} = \\frac{1-\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1+\\cos\\theta}$ بغیر کسی جزر یا علامت کی الجھن کے ہمیشہ درست علامت خود دیتے ہیں!",
        "متبادل $t = \\tan\\frac{\\theta}{2}$ رکھنے سے $\\sin\\theta = \\frac{2t}{1+t^2}$ اور $\\cos\\theta = \\frac{1-t^2}{1+t^2}$ بن جاتا ہے جو مشکل مساواتوں اور انٹیگریشن کا ماسٹر کی ہے!"
      ],
      enTip: "Using $\\tan 22.5^\\circ = \\frac{1-\\cos 45^\\circ}{\\sin 45^\\circ} = \\sqrt{2}-1$ avoids nested square roots completely!",
      urTip: "$\\tan 22.5^\\circ$ نکالنے کے لیے جزر والے کلیے کے بجائے $\\frac{1-\\cos 45^\\circ}{\\sin 45^\\circ} = \\sqrt{2}-1$ استعمال کریں—جواب ایک سطر میں ملے گا!",
      enVoice: "Lecture 25: Half-Angle Formulas. Choose the plus or minus sign on half-angle square roots using the quadrant of theta over two, not theta! Prefer the rational form tangent theta over two equals one minus cosine theta over sine theta, and use t equals tangent theta over two for universal rational substitution.",
      urVoice: "لیکچر نمبر پچیس: نصف زاویے کے فارمولے۔ جزر کی علامت کا فیصلہ تھیٹا نہیں بلکہ تھیٹا بٹا دو کے ربع سے کریں۔ ٹینجنٹ تھیٹا بٹا دو برابر ون مائنس کوسائن بٹا سائن بغیر جزر کے سیدھا جواب دیتا ہے۔"
    },

    "ch-26-sum-to-product": {
      enTitle: "Lecture 26: Sum-to-Product (C & D Factoring) Formulas",
      urTitle: "لیکچر 26: حاصلِ جمع و تفریق کو حاصلِ ضرب میں بدلنے کے فارمولے",
      boardTex: "$$\\sin C+\\sin D=2\\sin\\frac{C+D}{2}\\cos\\frac{C-D}{2}, \\qquad \\cos C-\\cos D = -2\\sin\\frac{C+D}{2}\\sin\\frac{C-D}{2}$$",
      enLecture: [
        "When solving $f(x)=0$ or simplifying a fraction of sums, addition blocks cancellation—<strong>Sum-to-Product</strong> factors sums into clean products!",
        "Memory rhyme: $S+S = 2SC$, $S-S = 2CS$, $C+C = 2CC$, and watch the <strong>minus trap</strong> in $C-C = -2SS$!",
        "Acoustic <strong>wave beats</strong> come directly from $\\sin(\\omega_1 t)+\\sin(\\omega_2 t) = 2\\cos\\!\\left(\\frac{\\omega_1-\\omega_2}{2}t\\right)\\sin\\!\\left(\\frac{\\omega_1+\\omega_2}{2}t\\right)$."
      ],
      urLecture: [
        "مساوات حل کرتے وقت یا کسر مختصر کرتے وقت جمع و تفریق کٹنے نہیں دیتے—ان فارمولوں سے مجموعہ ضرب میں بدل کر فوراً مشترک یا مختصر ہو جاتا ہے!",
        "چاروں کلیوں کا نچوڑ یاد رکھیں: $S+S=2SC$، $S-S=2CS$، $C+C=2CC$، اور چوتھے کلیے میں منفی علامت کا خاص دھیان رکھیں: $\\cos C - \\cos D = -2\\sin\\frac{C+D}{2}\\sin\\frac{C-D}{2}$!",
        "صوتی لہروں میں Beats کا مظہر بالکل اسی کلیے سے پیدا ہوتا ہے۔"
      ],
      enTip: "In 3-term sums like $\\sin x + \\sin 3x + \\sin 5x = 0$, pair the <strong>outer two angles</strong> $(x, 5x)$ first because $\\frac{x+5x}{2} = 3x$ matches the middle term!",
      urTip: "تین رقموں مثلاً $\\sin x + \\sin 3x + \\sin 5x = 0$ میں ہمیشہ پہلی اور تیسری رقم $(x, 5x)$ کا جوڑا بنائیں تاکہ اوسط $\\frac{x+5x}{2}=3x$ درمیانی رقم کے برابر آ جائے!",
      enVoice: "Lecture 26: Sum-to-Product Formulas. Convert sums into products using half-sum C plus D over 2 and half-difference C minus D over 2. Watch the negative sign in cosine C minus cosine D equals negative 2 sine half-sum sine half-difference!",
      urVoice: "لیکچر نمبر چھبیس: جمع سے ضرب کے فارمولے۔ سی جمع ڈی بٹا دو اور سی منفی ڈی بٹا دو کی مدد سے جمع کو ضرب میں بدلیں، اور کوسائن سی منفی کوسائن ڈی میں منفی دو سائن سائن کی علامت ضرور یاد رکھیں۔"
    },

    "ch-27-product-to-sum": {
      enTitle: "Lecture 27: Product-to-Sum Formulas & Doubling Cosine Cascades",
      urTitle: "لیکچر 27: حاصلِ ضرب کو جمع میں بدلنے کے فارمولے اور کوسائن سلسلے",
      boardTex: "$$2\\sin A\\cos B = \\sin(A+B)+\\sin(A-B), \\qquad \\prod_{k=0}^{n-1}\\cos(2^k\\theta) = \\frac{\\sin(2^n\\theta)}{2^n\\sin\\theta}$$",
      enLecture: [
        "Keep the factor of $2$ on the left ($2\\sin A\\cos B, 2\\cos A\\cos B, 2\\sin A\\sin B$) so you never drop a $\\frac{1}{2}$—especially $2\\sin A\\sin B = \\cos(A-B) - \\cos(A+B)$!",
        "In calculus, $\\int \\sin(5x)\\cos(3x)\\,dx$ cannot be integrated as a product, so rewrite it as $\\frac{1}{2}\\int(\\sin 8x + \\sin 2x)\\,dx$.",
        "<strong>Euler's Doubling Cosine Cascade:</strong> Multiply and divide $\\cos\\theta\\cos 2\\theta\\cos 4\\theta\\cdots$ by $2\\sin\\theta$ so $\\sin 2\\theta \\to \\sin 4\\theta \\to \\sin 8\\theta$ domino-collapses!"
      ],
      urLecture: [
        "ہمیشہ بائیں طرف $2$ کے ساتھ فارمولہ یاد رکھیں تاکہ $\\frac{1}{2}$ کی غلطی نہ ہو، بالخصوص $2\\sin A\\sin B = \\cos(A-B) - \\cos(A+B)$ میں پہلے $(A-B)$ آتا ہے!",
        "کیلکولس میں $\\int \\sin(5x)\\cos(3x)\\,dx$ جیسے حاصلِ ضرب کو جمع میں بدل کر باآسانی انٹیگریٹ کیا جاتا ہے۔",
        "<strong>کوسائن کا دگنا ہوتا سلسلہ:</strong> $\\cos\\theta\\cos 2\\theta\\cos 4\\theta\\cdots$ کو $2\\sin\\theta$ سے ضرب اور تقسیم کریں تو ڈومینو کی طرح تمام رقمیں سمٹ کر $\\frac{\\sin(2^n\\theta)}{2^n\\sin\\theta}$ بن جاتی ہیں!"
      ],
      enTip: "Always order the larger angle first ($A \\ge B$) before expanding $2\\sin A\\cos B$ so $(A-B)$ stays non-negative!",
      urTip: "ضرب کھولنے سے پہلے بڑا زاویہ آگے رکھیں ($A \\ge B$) تاکہ $(A-B)$ منفی نہ بنے اور علامت کی غلطی نہ ہو!",
      enVoice: "Lecture 27: Product-to-Sum Formulas. Keep the factor of 2 in front, remember 2 sine A sine B equals cosine A minus B minus cosine A plus B, and multiply doubling cosine chains by 2 sine theta to trigger the domino collapse!",
      urVoice: "لیکچر نمبر ستائیس: ضرب سے جمع کے فارمولے۔ ٹو سائن اے سائن بی برابر کوسائن اے منفی بی مائنس کوسائن اے جمع بی ہوتا ہے۔ دگنے ہوتے کوسائن سلسلے کو ٹو سائن تھیٹا سے ضرب و تقسیم کر کے حل کریں۔"
    },

    "ch-28-identities-transformations": {
      enTitle: "Lecture 28: Trigonometric Identities & Transformations (Harmonic & Triangle Laws)",
      urTitle: "لیکچر 28: تکونیاتی متماثلات و تحویلات (ہارمونک شکل اور مثلثی مشروط کلیے)",
      boardTex: "$$a\\cos\\theta+b\\sin\\theta = R\\cos(\\theta-\\alpha), \\qquad A+B+C=\\pi \\implies \\tan A+\\tan B+\\tan C = \\tan A\\tan B\\tan C$$",
      enLecture: [
        "<strong>Harmonic Transformation:</strong> Set $R=\\sqrt{a^2+b^2}$, $\\cos\\alpha=\\frac{a}{R}, \\sin\\alpha=\\frac{b}{R}$ to merge $a\\cos\\theta+b\\sin\\theta$ into a single shifted wave $R\\cos(\\theta-\\alpha)$.",
        "<strong>Conditional Triangle Identities ($A+B+C=\\pi$):</strong> Besides $\\sum \\tan A = \\prod \\tan A$, memorize $\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$ and $\\cos A + \\cos B + \\cos C = 1 + 4\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}$!",
        "<strong>Lagrange's Arithmetic-Progression Sum:</strong> Multiply AP series $\\sum \\sin(\\alpha+kd)$ by $2\\sin(d/2)$ so every term telescopes cleanly to $\\frac{\\sin(nd/2)}{\\sin(d/2)}\\sin(\\text{average angle})$."
      ],
      urLecture: [
        "<strong>ہارمونک تحویل:</strong> $R=\\sqrt{a^2+b^2}$ لے کر دو لہروں $a\\cos\\theta+b\\sin\\theta$ کو ایک واحد لہر $R\\cos(\\theta-\\alpha)$ میں سمویا جا سکتا ہے۔",
        "<strong>مثلث کی مشروط متماثلات ($A+B+C=\\pi$):</strong> مثلث میں $\\tan A+\\tan B+\\tan C = \\tan A\\tan B\\tan C$ اور $\\sin 2A+\\sin 2B+\\sin 2C = 4\\sin A\\sin B\\sin C$ بے حد مشہور کلیے ہیں!",
        "<strong>حسابی سلسلے (AP) والے زاویوں کا مجموعہ:</strong> یکساں فرق $d$ سے بڑھتے زاویوں کی سائن یا کوسائن سیریز کا مجموعہ $\\frac{\\sin(nd/2)}{\\sin(d/2)}$ ضرب درمیانی زاویے کی نسبت کے برابر ہوتا ہے۔"
      ],
      enTip: "In a triangle $A+B+C=\\pi$, half-angles satisfy $\\tan\\frac{A}{2}\\tan\\frac{B}{2} + \\tan\\frac{B}{2}\\tan\\frac{C}{2} + \\tan\\frac{C}{2}\\tan\\frac{A}{2} = 1$ always!",
      urTip: "کسی بھی مثلث میں نصف زاویوں کے لیے $\\sum \\tan\\frac{A}{2}\\tan\\frac{B}{2} = 1$ ہمیشہ سچ ہوتا ہے!",
      enVoice: "Lecture 28: Trigonometric Transformations. Compress a cosine theta plus b sine theta into R cosine theta minus alpha where R is square root of a squared plus b squared, and in any triangle A plus B plus C equals pi, the sum of tangents equals the product of tangents!",
      urVoice: "لیکچر نمبر اٹھائیس: تکونیاتی تحویلات۔ اے کوسائن جمع بی سائن کو آر کوسائن تھیٹا منفی الفا میں تبدیل کریں، اور کسی بھی مثلث میں ٹینجنٹ اے جمع ٹینجنٹ بی جمع ٹینجنٹ سی ان تینوں کے حاصلِ ضرب کے برابر ہوتا ہے۔"
    },

    "ch-28-trig-equations": {
      enTitle: "Lecture 29: Trigonometric Equations & Principal Interval Solutions",
      urTitle: "لیکچر 29: تکونیاتی مساواتیں اور بنیادی وقفے $[0, 2\\pi)$ میں حل",
      boardTex: "$$f(\\theta)g(\\theta)=0 \\iff f(\\theta)=0 \\text{ or } g(\\theta)=0, \\qquad |c| \\le \\sqrt{a^2+b^2} \\text{ for } a\\cos x+b\\sin x=c$$",
      enLecture: [
        "Every elementary equation $\\sin x = k$ ($|k|\\le 1$) or $\\cos x = k$ normally has <strong>two principal solutions</strong> inside $[0, 2\\pi)$—locate both quadrants via ASTC + reference angle $\\alpha$!",
        "<strong>Cardinal Rule:</strong> NEVER divide both sides of $\\sin 2x = \\sin x$ by $\\sin x$! Move everything left: $\\sin x(2\\cos x - 1)=0$ to capture both $\\sin x=0$ AND $\\cos x=\\frac{1}{2}$.",
        "For $a\\cos x + b\\sin x = c$, check solvability $|c| \\le \\sqrt{a^2+b^2}$ first; if $|c| > \\sqrt{a^2+b^2}$, declare 'No Real Solution' immediately!"
      ],
      urLecture: [
        "وقفہ $[0, 2\\pi)$ میں عام طور پر ہر بنیادی مساوات (جیسے $\\sin x = \\frac{1}{2}$) کے <strong>دو بنیادی حل</strong> ہوتے ہیں—ASTC سے دونوں ربع تلاش کریں!",
        "<strong>سخت اصول:</strong> مساوات $\\sin 2x = \\sin x$ کے دونوں اطراف کو کبھی $\\sin x$ پر تقسیم نہ کریں! سب ایک طرف لا کر مشترک نکالیں: $\\sin x(2\\cos x - 1)=0$ تاکہ کوئی حل ضائع نہ ہو۔",
        "مساوات $a\\cos x + b\\sin x = c$ کے حقیقی حل صرف تب ممکن ہیں جب $|c| \\le \\sqrt{a^2+b^2}$ ہو!"
      ],
      enTip: "Always discard candidate roots that make a denominator zero (e.g. $\\cos x = 0$ when $\\tan x$ or $\\sec x$ appears in the original equation)!",
      urTip: "ایسا ہر امیدوار حل مسترد کر دیں جو اصل مساوات میں $\\tan x$ یا $\\sec x$ کو غیر معین (مخرج صفر) بنا دے!",
      enVoice: "Lecture 29: Trigonometric Equations. Find both quadrant roots inside zero to 2 pi using ASTC, never divide out a trig factor, check solvability bound square root of a squared plus b squared, and reject undefined points!",
      urVoice: "لیکچر نمبر انتیس: تکونیاتی مساواتیں۔ زیرو سے ٹو پائی میں دونوں ربعوں کے حل نکالیں، کبھی مشترک جزو سے تقسیم نہ کریں، اور آخر میں غیر معین زاویوں کو خارج کر دیں۔"
    },

    "ch-29-general-solutions": {
      enTitle: "Lecture 30: General Solutions of Trigonometric Equations (n ∈ ℤ)",
      urTitle: "لیکچر 30: تکونیاتی مساواتوں کے عمومی حل ($n \\in \\mathbb{Z}$)",
      boardTex: "$$\\sin\\theta=\\sin\\alpha \\Rightarrow \\theta=n\\pi+(-1)^n\\alpha, \\quad \\cos\\theta=\\cos\\alpha \\Rightarrow \\theta=2n\\pi\\pm\\alpha, \\quad \\tan\\theta=\\tan\\alpha \\Rightarrow \\theta=n\\pi+\\alpha$$",
      enLecture: [
        "Zero-roots first: $\\sin\\theta=0 \\iff \\theta=n\\pi$, $\\cos\\theta=0 \\iff \\theta=(2n+1)\\frac{\\pi}{2}$, $\\tan\\theta=0 \\iff \\theta=n\\pi$ ($n \\in \\mathbb{Z}$).",
        "Master the 3 General Families: Sine alternates via $n\\pi + (-1)^n\\alpha$; Cosine mirrors via $2n\\pi \\pm \\alpha$; Tangent repeats cleanly every half-turn $n\\pi + \\alpha$.",
        "For simultaneous equations (e.g. $\\sin\\theta = -\\frac{1}{2}$ AND $\\cos\\theta = \\frac{\\sqrt{3}}{2}$), find the <strong>single common angle</strong> $\\theta_0 = \\frac{11\\pi}{6} \\in [0,2\\pi)$ and add $2n\\pi$!"
      ],
      urLecture: [
        "صفر کے عمومی حل یاد رکھیں: $\\sin\\theta=0 \\iff \\theta=n\\pi$، $\\cos\\theta=0 \\iff \\theta=(2n+1)\\frac{\\pi}{2}$، اور $\\tan\\theta=0 \\iff \\theta=n\\pi$ جہاں $n \\in \\mathbb{Z}$۔",
        "تین بنیادی عمومی خاندان: سائن کے لیے $\\theta = n\\pi + (-1)^n\\alpha$، کوسائن کے لیے $\\theta = 2n\\pi \\pm \\alpha$، اور ٹینجنٹ کے لیے $\\theta = n\\pi + \\alpha$۔",
        "ہم زاد مساواتوں میں جو زاویہ $\\theta_0$ دونوں مساواتوں کو بیک وقت درست کرے اُس میں $2n\\pi$ جمع کر دیں!"
      ],
      enTip: "All three squared equations $\\sin^2\\theta=\\sin^2\\alpha$, $\\cos^2\\theta=\\cos^2\\alpha$, and $\\tan^2\\theta=\\tan^2\\alpha$ collapse to $\\theta = n\\pi \\pm \\alpha$!",
      urTip: "مربع والی تینوں مساواتوں $\\sin^2\\theta=\\sin^2\\alpha$، $\\cos^2\\theta=\\cos^2\\alpha$ اور $\\tan^2\\theta=\\tan^2\\alpha$ کا ایک ہی مشترکہ حل $\\theta = n\\pi \\pm \\alpha$ ہے!",
      enVoice: "Lecture 30: General Solutions. Over all integers n, sine theta equals sine alpha gives n pi plus minus-one to the n alpha; cosine gives 2 n pi plus or minus alpha; tangent gives n pi plus alpha; and all squared equations give n pi plus or minus alpha!",
      urVoice: "لیکچر نمبر تیس: عمومی حل۔ تمام صحیح اعداد این کے لیے سائن کا عمومی حل این پائی جمع منفی ایک کی طاقت این الفا، کوسائن کا ٹو این پائی جمع منفی الفا، اور ٹینجنٹ کا این پائی جمع الفا ہوتا ہے۔"
    },

    "ch-31-solving-eq-identities": {
      enTitle: "Lecture 31: Solving Trigonometric Equations Using Identities",
      urTitle: "لیکچر 31: تکونیاتی متماثلات کی مدد سے مساواتوں کا حل",
      boardTex: "$$a\\cos^2 x + b\\sin x\\cos x + c\\sin^2 x = 0 \\xrightarrow{\\div\\cos^2 x} c\\tan^2 x + b\\tan x + a = 0$$",
      enLecture: [
        "<strong>Pythagorean Unification:</strong> Convert mixed equations like $2\\cos^2 x + 3\\sin x = 0$ into a single trig variable via $\\cos^2 x = 1 - \\sin^2 x$.",
        "<strong>Homogeneous Degree-2 Equations:</strong> Check if $\\cos x = 0$ is a root; if not, divide by $\\cos^2 x$ (replacing any constant $d$ on RHS with $d(\\sin^2 x + \\cos^2 x)$ first!) to get a quadratic in $\\tan x$.",
        "<strong>Symmetric $(s+c, sc)$ & Bounded Extremals:</strong> Let $u = \\sin x + \\cos x$ so $\\sin x\\cos x = \\frac{u^2-1}{2}$ ($|u|\\le\\sqrt{2}$); and for $\\sin^6 x + \\cos^6 x = 1$ or $\\sin x + \\sin y = 2$, equate each piece to its extreme bound!"
      ],
      urLecture: [
        "<strong>یکساں متغیر بنانا:</strong> مخلوط مساوات $2\\cos^2 x + 3\\sin x = 0$ میں $\\cos^2 x = 1-\\sin^2 x$ رکھ کر اسے ایک متغیر کی دو درجی مساوات بنا لیں۔",
        "<strong>ہم درجہ (Homogeneous) مساواتیں:</strong> کسی مستقل عدد $d$ کو $d(\\sin^2 x + \\cos^2 x)$ لکھ کر پوری مساوات کو $\\cos^2 x$ پر تقسیم کریں تاکہ $\\tan x$ میں دو درجی مساوات بن جائے۔",
        "<strong>متشاکل متبادل اور انتہائی قدریں:</strong> جہاں $(\\sin x+\\cos x)$ اور $\\sin x\\cos x$ اکٹھے ہوں وہاں $u=\\sin x+\\cos x$ فرض کریں ($\\sin x\\cos x = \\frac{u^2-1}{2}$)؛ اور اگر Weierstrass متبادل $t=\\tan(x/2)$ لگائیں تو $\\cos x = -1$ ($x=(2n+1)\\pi$) کو الگ سے ضرور چیک کریں!"
      ],
      enTip: "Wait! When using $t = \\tan(x/2)$ to solve $a\\cos x + b\\sin x = c$, ALWAYS check $x = (2n+1)\\pi$ separately (which happens whenever $c = -a$), because $\\tan(\\pi/2)$ is undefined!",
      urTip: "نصف زاویہ متبادل $t=\\tan(x/2)$ لگاتے وقت ہمیشہ $x=(2n+1)\\pi$ کو الگ چیک کریں کیوں کہ اگر $c=-a$ ہو تو یہ حقیقی حل کھو سکتا ہے!",
      enVoice: "Lecture 31: Solving Equations Using Identities. Unify squares with Pythagoras, divide homogeneous equations by cosine squared to get a quadratic in tangent, substitute u equals sine plus cosine for symmetric equations, and always check pi multiples when using Weierstrass t!",
      urVoice: "لیکچر نمبر اکتیس: متماثلات کی مدد سے مساواتوں کا حل۔ ہم درجہ مساوات کو کوسائن اسکوائر پر تقسیم کر کے ٹینجنٹ میں بدلیں، سائن جمع کوسائن کے لیے یو فرض کریں، اور نصف زاویہ متبادل استعمال کرتے وقت پائی کے طاق اضعاف الگ چیک کریں۔"
    },

    "ch-30-oblique-laws": {
      enTitle: "Lecture 32: Laws of Sines, Cosines, Heron's Area & Radii (R, r)",
      urTitle: "لیکچر 32: قانونِ سائن، قانونِ کوسائن، ہیرون کا فارمولا اور مثلث کے رداس",
      boardTex: "$$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R, \\qquad c^2=a^2+b^2-2ab\\cos C, \\qquad \\Delta=\\sqrt{s(s-a)(s-b)(s-c)}=rs$$",
      enLecture: [
        "Every non-right (oblique) triangle obeys the <strong>Law of Sines</strong> (use for AAS, ASA, and SSA—watching the two-triangle ambiguous case!) and the <strong>Law of Cosines</strong> (use for SAS and SSS).",
        "When $C=90^\\circ$, $\\cos 90^\\circ = 0$ reduces $c^2 = a^2+b^2-2ab\\cos C$ straight to Pythagoras!",
        "Triangle area has three faces: $\\Delta = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)} = \\frac{abc}{4R} = rs$, linking circumradius $R$ and inradius $r$!"
      ],
      urLecture: [
        "ہر عام (غیر قائمۃ الزاویہ) مثلث میں <strong>قانونِ سائن</strong> (دو زاویے و ایک ضلع، یا مبہم حالت SSA کے لیے) اور <strong>قانونِ کوسائن</strong> (تینوں اضلاع SSS یا دو اضلاع و درمیانی زاویہ SAS کے لیے) لاگو ہوتے ہیں۔",
        "غور کریں اگر $C=90^\\circ$ ہو تو $\\cos 90^\\circ=0$ ہونے سے قانونِ کوسائن خود بخود مسئلہ فیثاغورث $c^2=a^2+b^2$ بن جاتا ہے!",
        "مثلث کے رقبے کے عظیم روابط یاد رکھیں: $\\Delta = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)} = \\frac{abc}{4R} = rs$ جہاں $R$ محاصر رداس اور $r$ محصور رداس ہے۔"
      ],
      enTip: "In SSS triangles, find the <strong>largest angle</strong> (opposite the longest side) via Law of Cosines FIRST—because cosine uniquely distinguishes acute ($>0$) vs obtuse ($<0$), whereas sine cannot!",
      urTip: "تینوں اضلاع (SSS) دیے ہوں تو پہلے سب سے بڑے ضلع کے سامنے والا زاویہ <strong>قانونِ کوسائن</strong> سے نکالیں، کیوں کہ کوسائن منفی ہو کر منفرجہ زاویہ صاف بتا دیتا ہے جبکہ سائن نہیں بتاتا!",
      enVoice: "Lecture 32: Laws of Sines and Cosines. Use Law of Sines equal to 2 R for angle-side pairs, Law of Cosines for SAS and SSS, and link area Delta to Heron's formula, circumradius R, and inradius r via Delta equals r s!",
      urVoice: "لیکچر نمبر بتیس: قانونِ سائن اور قانونِ کوسائن۔ کسی بھی مثلث میں اے بٹا سائن اے محاصر قطر ٹو آر کے برابر ہوتا ہے، اور تینوں اضلاع معلوم ہوں تو قانونِ کوسائن اور ہیرون کے فارمولے سے زاویے اور رقبہ باآسانی نکلتے ہیں۔"
    },

    "ch-33-inverse-trig": {
      enTitle: "Lecture 33: Inverse Trigonometric Functions — Bijectivity & Graphs",
      urTitle: "لیکچر 33: معکوس تکونیاتی فنکشنز (Inverse Trig Functions) کی بنیاد اور گراف",
      boardTex: "$$y = \\sin^{-1}x \\iff x = \\sin y \\;\\text{ with } y \\in \\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right], \\qquad \\sin^{-1}x \\neq \\frac{1}{\\sin x}$$",
      enLecture: [
        "Periodic waves fail the Horizontal Line Test on $\\mathbb{R}$, so we slice each trig function onto a monotonic one-to-one <strong>Principal Branch</strong> to make its inverse a true single-valued function!",
        "Geometrically, the graph of $y = f^{-1}(x)$ is the mirror reflection of the restricted branch of $y = f(x)$ across the diagonal line $y = x$—swapping vertical asymptotes into horizontal asymptotes (like $y = \\pm\\frac{\\pi}{2}$ for $\\tan^{-1}x$).",
        "Always read $\\sin^{-1}x$ aloud as <em>'the angle in $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ whose sine is $x$'</em>!"
      ],
      urLecture: [
        "دوری ہونے کی وجہ سے عام ٹرگنومیٹرک فنکشنز افقی خط ٹیسٹ پاس نہیں کرتے؛ اس لیے ڈومین کو ایک یک طرفہ <strong>پرنسپل شاخ</strong> تک محدود کر کے معکوس فنکشن بنایا جاتا ہے!",
        "معکوس فنکشن $y=f^{-1}(x)$ کا گراف خط $y=x$ کے گرد عکس لینے سے حاصل ہوتا ہے، جس سے عمودی متقاربات افقی متقاربات (جیسے $\\tan^{-1}x$ میں $y=\\pm\\frac{\\pi}{2}$) بن جاتے ہیں۔",
        "$\\sin^{-1}x$ کو ہمیشہ یوں پڑھیں: <em>'وہ منفرد زاویہ جو $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ میں واقع ہو اور جس کا سائن $x$ ہو'</em>!"
      ],
      enTip: "While $\\sin(\\sin^{-1}x) = x$ holds for every $x \\in [-1,1]$, $\\sin^{-1}(\\sin\\theta) = \\theta$ holds <strong>ONLY</strong> if $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$!",
      urTip: "یاد رکھیں $\\sin(\\sin^{-1}x)=x$ تو $[-1,1]$ پر ہمیشہ درست ہے، مگر $\\sin^{-1}(\\sin\\theta)=\\theta$ <strong>صرف تب</strong> درست ہے جب $\\theta \\in [-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ ہو!",
      enVoice: "Lecture 33: Inverse Trigonometric Functions. Restricting periodic waves to monotonic principal branches creates true bijective inverses whose graphs reflect across y equals x. Always interpret inverse sine x as an angle, never as one over sine x!",
      urVoice: "لیکچر نمبر تینتیس: معکوس تکونیاتی فنکشنز۔ دوری فنکشنز کی ڈومین کو پرنسپل شاخ تک محدود کرنے سے ون ٹو ون معکوس فنکشن بنتا ہے۔ آرک سائن ایکس دراصل ایک زاویہ ہے، اسے کبھی بھی ایک بٹا سائن ایکس نہ سمجھیں۔"
    },

    "ch-34-inverse-domain-range": {
      enTitle: "Lecture 34: Domain and Range of Inverse Trigonometric Functions",
      urTitle: "لیکچر 34: معکوس تکونیاتی فنکشنز کی ڈومین اور رینج",
      boardTex: "$$\\sin^{-1},\\cos^{-1}: [-1,1], \\qquad \\tan^{-1},\\cot^{-1}: \\mathbb{R}, \\qquad \\sec^{-1},\\operatorname{cosec}^{-1}: (-\\infty,-1]\\cup[1,\\infty)$$",
      enLecture: [
        "Swapping inputs and outputs flips the trig ranges into ITF domains: $[-1,1]$ for $\\sin^{-1},\\cos^{-1}$; all reals $\\mathbb{R}$ for $\\tan^{-1},\\cot^{-1}$; and $|x|\\ge 1$ for $\\sec^{-1},\\operatorname{cosec}^{-1}$.",
        "Memorize the two Principal Range Families: <strong>Zero-Centered</strong> ($\\sin^{-1}: [-\\frac{\\pi}{2},\\frac{\\pi}{2}]$, $\\tan^{-1}: (-\\frac{\\pi}{2},\\frac{\\pi}{2})$, $\\operatorname{cosec}^{-1}: [-\\frac{\\pi}{2},\\frac{\\pi}{2}]\\setminus\\{0\\}$) vs <strong>$[0,\\pi]$ Family</strong> ($\\cos^{-1}: [0,\\pi]$, $\\cot^{-1}: (0,\\pi)$, $\\sec^{-1}: [0,\\pi]\\setminus\\{\\frac{\\pi}{2}\\}$).",
        "To find the domain of $\\sin^{-1}(g(x))$, solve the double inequality $-1 \\le g(x) \\le 1$!"
      ],
      urLecture: [
        "معکوس لینے پر اصل فنکشنز کی رینج اب ڈومین بن جاتی ہے: $\\sin^{-1},\\cos^{-1}$ کے لیے $[-1,1]$، $\\tan^{-1},\\cot^{-1}$ کے لیے تمام حقیقی اعداد $\\mathbb{R}$، اور $\\sec^{-1},\\operatorname{cosec}^{-1}$ کے لیے $|x|\\ge 1$۔",
        "پرنسپل رینج کے دو خاندان یاد رکھیں: <strong>پہلا خاندان</strong> $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ کے گرد ($\\sin^{-1}, \\tan^{-1}, \\operatorname{cosec}^{-1}$) اور <strong>دوسرا خاندان</strong> $[0,\\pi]$ کے اندر ($\\cos^{-1}, \\cot^{-1}, \\sec^{-1}$)۔",
        "مرکب فنکشن مثلاً $\\sin^{-1}(2x-3)$ کی ڈومین معلوم کرنے کے لیے ہمیشہ نامساوات $-1 \\le 2x-3 \\le 1$ حل کریں!"
      ],
      enTip: "Look closely at open vs closed brackets: $\\tan^{-1}x \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ and $\\cot^{-1}x \\in (0, \\pi)$ have <strong>open</strong> parentheses because of asymptotes!",
      urTip: "بریکٹس کا باریک فرق دیکھیں: $\\sin^{-1},\\cos^{-1}$ میں بند بریکٹ $[,]$ ہوتے ہیں جبکہ $\\tan^{-1}x \\in (-\\frac{\\pi}{2},\\frac{\\pi}{2})$ اور $\\cot^{-1}x \\in (0,\\pi)$ میں کھلے بریکٹ $(,)$ ہوتے ہیں!",
      enVoice: "Lecture 34: Domain and Range of Inverse Trig Functions. Memorize the two range families: negative pi over two to pi over two for arcsine, arctangent, and arccosecant; and zero to pi for arccosine, arccotangent, and arcsecant.",
      urVoice: "لیکچر نمبر چونتیس: معکوس فنکشنز کی ڈومین اور رینج۔ پرنسپل رینج کے دو خاندان ہیں: آرک سائن، آرک ٹینجنٹ اور آرک کوسیکنٹ منفی پائی بائی ٹو سے مثبت پائی بائی ٹو میں، جبکہ آرک کوسائن، آرک کوٹینجنٹ اور آرک سیکنٹ زیرو سے پائی میں رہتے ہیں۔"
    },

    "ch-35-inverse-principal-values": {
      enTitle: "Lecture 35: Principal Values of Inverse Trigonometric Functions",
      urTitle: "لیکچر 35: معکوس تکونیاتی فنکشنز کی پرنسپل قدریں (Principal Values)",
      boardTex: "$$\\sin^{-1}(-x)=-\\sin^{-1}x,\\quad \\tan^{-1}(-x)=-\\tan^{-1}x,\\qquad \\cos^{-1}(-x)=\\pi-\\cos^{-1}x,\\quad \\cot^{-1}(-x)=\\pi-\\cot^{-1}x$$",
      enLecture: [
        "<strong>Negative-Input Master Law:</strong> Family A ($\\sin^{-1}, \\tan^{-1}, \\operatorname{cosec}^{-1}$) is odd, pulling the minus sign straight out; Family B ($\\cos^{-1}, \\cot^{-1}, \\sec^{-1}$) has no negative angles in $[0,\\pi]$, so it outputs $\\pi - f^{-1}(x)$!",
        "Thus $\\sin^{-1}(-\\frac{1}{2}) = -\\frac{\\pi}{6}$ (Q-IV), whereas $\\cos^{-1}(-\\frac{1}{2}) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ (Q-II)—NEVER $-\\frac{2\\pi}{3}$ or $\\frac{4\\pi}{3}$!",
        "For large radian inputs like $\\sin^{-1}(\\sin 10)$ or $\\cos^{-1}(\\cos 5)$, fold the angle back into the principal interval using the sawtooth/triangle wave ($10 \\in [\\frac{5\\pi}{2}, \\frac{7\\pi}{2}] \\implies 3\\pi - 10$, and $5 \\in [\\pi, 2\\pi] \\implies 2\\pi - 5$)."
      ],
      urLecture: [
        "<strong>منفی عدد کا بنیادی قانون:</strong> پہلے خاندان ($\\sin^{-1},\\tan^{-1},\\operatorname{cosec}^{-1}$) میں منفی علامت سیدھی باہر آ جاتی ہے، لیکن دوسرے خاندان ($\\cos^{-1},\\cot^{-1},\\sec^{-1}$) میں جواب $\\pi - f^{-1}(x)$ بنتا ہے!",
        "چنانچہ $\\sin^{-1}(-\\frac{1}{2}) = -\\frac{\\pi}{6}$ ہوتا ہے، جبکہ $\\cos^{-1}(-\\frac{1}{2}) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ ہوتا ہے!",
        "بڑے زاویوں جیسے $\\sin^{-1}(\\sin 10)$ میں جواب $10$ ہرگز نہیں ہو سکتا کیوں کہ $10 \\notin [-1.57, 1.57]$؛ اسے مثلثی گراف سے موڑ کر $3\\pi - 10$ لکھیں!"
      ],
      enTip: "Sanity check every answer: Is $\\sin^{-1}(\\text{anything})$ inside $[-1.57, +1.57]$? Is $\\cos^{-1}(\\text{anything})$ inside $[0, 3.14]$? If not, fold it!",
      urTip: "آخری جواب پر ہمیشہ پرنسپل رینج چیک لگائیں: کیا جواب $[-1.57, 1.57]$ یا $[0, 3.14]$ کے اندر موجود ہے؟ اگر باہر ہے تو اسے متعلقہ زاویے سے موڑ لیں!",
      enVoice: "Lecture 35: Principal Values. Negative inputs pull out a minus sign for arcsine, arctangent, and arccosecant, but subtract from pi for arccosine, arccotangent, and arcsecant! And fold out-of-range compositions like arcsine of sine 10 into 3 pi minus 10.",
      urVoice: "لیکچر نمبر پینتیس: پرنسپل ویلیوز۔ منفی عدد آنے پر آرک سائن اور آرک ٹینجنٹ میں منفی باہر آ جاتا ہے، لیکن آرک کوسائن اور آرک کوٹینجنٹ میں پائی مائنس لکھا جاتا ہے۔ رینج سے باہر زاویوں کو ہمیشہ پرنسپل وقفے میں واپس موڑیں۔"
    },

    "ch-36-inverse-properties": {
      enTitle: "Lecture 36: Properties of Inverse Trigonometric Functions",
      urTitle: "لیکچر 36: معکوس تکونیاتی فنکشنز کی اہم خصوصیات (Properties of ITF)",
      boardTex: "$$\\sin^{-1}x+\\cos^{-1}x=\\frac{\\pi}{2}, \\qquad \\tan^{-1}x+\\tan^{-1}y = \\begin{cases}\\tan^{-1}\\!\\left(\\frac{x+y}{1-xy}\\right), & xy<1\\\\ \\pi+\\tan^{-1}\\!\\left(\\frac{x+y}{1-xy}\\right), & x>0,y>0,xy>1\\end{cases}$$",
      enLecture: [
        "<strong>Three Complementary $\\frac{\\pi}{2}$ Pairs:</strong> $\\sin^{-1}x+\\cos^{-1}x=\\frac{\\pi}{2}$ ($|x|\\le 1$), $\\tan^{-1}x+\\cot^{-1}x=\\frac{\\pi}{2}$ ($x\\in\\mathbb{R}$), and $\\sec^{-1}x+\\operatorname{cosec}^{-1}x=\\frac{\\pi}{2}$ ($|x|\\ge 1$).",
        "<strong>Reciprocal Flip Care:</strong> For $x>0$, $\\cot^{-1}x = \\tan^{-1}\\!\\left(\\frac{1}{x}\\right)$, MUST add $+\\pi$ when $x<0$: $\\cot^{-1}x = \\pi + \\tan^{-1}\\!\\left(\\frac{1}{x}\\right)$ because $\\cot^{-1}x \\in (0,\\pi)$ while $\\tan^{-1}(1/x) < 0$!",
        "<strong>Piecewise $\\tan^{-1}x + \\tan^{-1}y$:</strong> Always check $xy$ FIRST! When $x=2, y=3$, $xy = 6 > 1$, so $\\tan^{-1}2 + \\tan^{-1}3 = \\pi + \\tan^{-1}(-1) = \\frac{3\\pi}{4}$ (NOT $-\\frac{\\pi}{4}$)!"
      ],
      urLecture: [
        "<strong>تکمیلی جوڑوں کے تین کلیے:</strong> اپنی اپنی ڈومین میں $\\sin^{-1}x+\\cos^{-1}x=\\frac{\\pi}{2}$، $\\tan^{-1}x+\\cot^{-1}x=\\frac{\\pi}{2}$ اور $\\sec^{-1}x+\\operatorname{cosec}^{-1}x=\\frac{\\pi}{2}$ ہمیشہ برابر ہوتے ہیں۔",
        "<strong>معکوس تبدیلی کی احتیاط:</strong> مثبت $x>0$ کے لیے $\\cot^{-1}x = \\tan^{-1}(1/x)$ درست ہے، لیکن منفی $x<0$ کے لیے $\\cot^{-1}x = \\pi + \\tan^{-1}(1/x)$ لکھنا لازمی ہے!",
        "<strong>مشروط کلیہ $\\tan^{-1}x + \\tan^{-1}y$:</strong> پہلے ہمیشہ $xy$ چیک کریں! مثلاً $\\tan^{-1}2 + \\tan^{-1}3$ میں $xy=6>1$ ہے، اس لیے جواب $-\\frac{\\pi}{4}$ نہیں بلکہ $\\pi + (-\\frac{\\pi}{4}) = \\frac{3\\pi}{4}$ آئے گا!"
      ],
      enTip: "Notice why $\\tan^{-1}1 + \\tan^{-1}2 + \\tan^{-1}3 = \\pi$: $\\frac{\\pi}{4} + \\frac{3\\pi}{4} = \\pi$ cleanly!",
      urTip: "مشہور نتیجہ زبانی یاد رکھیں: $\\tan^{-1}1 + \\tan^{-1}2 + \\tan^{-1}3 = \\frac{\\pi}{4} + \\frac{3\\pi}{4} = \\pi$!",
      enVoice: "Lecture 36: Properties of Inverse Trigonometric Functions. Complementary inverse pairs always sum to pi over two on their domains. Most importantly, before applying arctangent x plus arctangent y, check whether x times y is less than 1 or greater than 1—when x and y are positive with product greater than 1, add pi!",
      urVoice: "لیکچر نمبر چھتیس: معکوس فنکشنز کی خصوصیات۔ آرک سائن جمع آرک کوسائن ہمیشہ پائی بائی ٹو کے برابر ہوتا ہے۔ آرک ٹینجنٹ ایکس جمع آرک ٹینجنٹ وائی کا فارمولا لگانے سے پہلے ایکس ضرب وائی ضرور چیک کریں، اگر حاصلِ ضرب ایک سے بڑا ہو تو پائی جمع کریں۔"
    },

    "ch-37-inverse-identities-equations": {
      enTitle: "Lecture 37: Inverse Trigonometric Identities & Equations",
      urTitle: "لیکچر 37: معکوس تکونیاتی متماثلات اور مساواتوں کا حل",
      boardTex: "$$\\tan^{-1}x+\\tan^{-1}y+\\tan^{-1}z=\\frac{\\pi}{2}\\implies xy+yz+zx=1, \\qquad =\\pi\\implies x+y+z=xyz$$",
      enLecture: [
        "<strong>Conditional Inverse Identities:</strong> If $\\sin^{-1}x+\\sin^{-1}y+\\sin^{-1}z = \\frac{3\\pi}{2}$, each term MUST hit its upper bound $\\frac{\\pi}{2}$, forcing $x=y=z=1$ immediately!",
        "<strong>Inter-Conversion Triangle Method:</strong> Let $\\theta = \\cos^{-1}\\!\\left(\\frac{4}{5}\\right)$, draw right triangle $(3,4,5)$, and read $\\tan\\theta = \\frac{3}{4} \\implies \\theta = \\tan^{-1}\\!\\left(\\frac{3}{4}\\right)$.",
        "<strong>Extraneous Root Check in ITF Equations:</strong> Taking $\\tan$ of both sides only enforces equality mod $\\pi$! Always plug candidate roots back into the original inverse equation to verify principal branch sums."
      ],
      urLecture: [
        "<strong>انتہائی قدروں والی مساواتیں:</strong> اگر $\\sin^{-1}x + \\sin^{-1}y + \\sin^{-1}z = \\frac{3\\pi}{2}$ ہو تو چوں کہ ہر رقم زیادہ سے زیادہ $\\frac{\\pi}{2}$ ہو سکتی ہے، اس لیے فوراً $x=y=z=1$ نکل آتا ہے!",
        "<strong>ایک معکوس فنکشن کو دوسرے میں بدلنا:</strong> زاویہ $\\theta$ فرض کر کے قائمۃ الزاویہ مثلث بنائیں، مثلاً $\\cos^{-1}(\\frac{4}{5}) = \\tan^{-1}(\\frac{3}{4}) = \\sin^{-1}(\\frac{3}{5})$۔",
        "<strong>اضافی (Extraneous) حل کی پڑتال:</strong> معکوس مساوات حل کرنے کے بعد نکلنے والی $x$ کی ہر قدر کو اصل مساوات میں واپس رکھ کر ضرور چیک کریں کیوں کہ اکثر منفی حل پرنسپل رینج توڑ دیتے ہیں!"
      ],
      enTip: "In $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\frac{\\pi}{4}$, the algebra $6x^2+5x-1=0$ gives $x=\\frac{1}{6}$ and $x=-1$, MUST reject $x=-1$ since LHS would be negative!",
      urTip: "مساوات $\\tan^{-1}(2x)+\\tan^{-1}(3x)=\\frac{\\pi}{4}$ میں $x=-1$ کو مسترد کرنا لازمی ہے کیوں کہ اس پر بائیں طرف منفی ہو جاتی ہے اور صرف $x=\\frac{1}{6}$ درست حل ہے!",
      enVoice: "Lecture 37: Inverse Identities and Equations. Convert between inverse functions by drawing a reference right triangle, spot extreme boundary equations immediately, and always substitute algebraic roots back into the original inverse equation to eliminate extraneous roots!",
      urVoice: "لیکچر نمبر سینتیس: معکوس متماثلات اور مساواتیں۔ مثلث بنا کر ایک معکوس فنکشن کو دوسرے میں بدلیں، اور مساوات سے نکلنے والے ہر جواب کو اصل سوال میں رکھ کر پڑتال ضرور کریں تاکہ غلط اضافی حل خارج ہو جائیں۔"
    },

    "ch-38-simplification-advanced": {
      enTitle: "Lecture 38: Simplification of Trigonometric & Inverse Expressions",
      urTitle: "لیکچر 38: اعلیٰ تکونیاتی اور معکوس عبارات کا اختصار (Substitutions)",
      boardTex: "$$\\sqrt{a^2-x^2}\\to x=a\\sin\\theta,\\quad \\sqrt{a^2+x^2}\\to x=a\\tan\\theta,\\quad \\tan^{-1}\\!\\left(\\frac{\\cos x-\\sin x}{\\cos x+\\sin x}\\right)=\\frac{\\pi}{4}-x$$",
      enLecture: [
        "<strong>Canonical Radical Substitutions:</strong> Match $\\sqrt{a^2-x^2}$ with $x=a\\sin\\theta$, $\\sqrt{a^2+x^2}$ with $x=a\\tan\\theta$, $\\sqrt{x^2-a^2}$ with $x=a\\sec\\theta$, and $\\sqrt{\\frac{a-x}{a+x}}$ with $x=a\\cos 2\\theta$!",
        "<strong>$45^\\circ$-Shift Collapse:</strong> Divide $\\frac{\\cos x \\mp \\sin x}{\\cos x \\pm \\sin x}$ top and bottom by $\\cos x$ to turn it into $\\frac{1 \\mp \\tan x}{1 \\pm \\tan x} = \\tan\\!\\left(\\frac{\\pi}{4} \\mp x\\right)$!",
        "Watch interval boundaries when simplifying $\\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right)$: it equals $2\\tan^{-1}x$ on $|x|\\le 1$, $\\pi - 2\\tan^{-1}x$ for $x > 1$, and $-\\pi - 2\\tan^{-1}x$ for $x < -1$."
      ],
      urLecture: [
        "<strong>معیاری مثلثی متبادلات:</strong> جزر ختم کرنے کے سنہری متبادلات یاد رکھیں: $\\sqrt{a^2-x^2}$ میں $x=a\\sin\\theta$، $\\sqrt{a^2+x^2}$ میں $x=a\\tan\\theta$، اور $\\sqrt{\\frac{a-x}{a+x}}$ میں $x=a\\cos 2\\theta$ درج کریں!",
        "<strong>$45^\\circ$ شفٹ شارٹ کٹ:</strong> کسر $\\frac{\\cos x - \\sin x}{\\cos x + \\sin x}$ کے شمار کنندہ اور مخرج کو $\\cos x$ پر تقسیم کریں تو فوراً $\\tan(\\frac{\\pi}{4}-x)$ بن جاتا ہے!",
        "خیال رکھیں: $\\sin^{-1}\\!\\left(\\frac{2x}{1+x^2}\\right) = 2\\tan^{-1}x$ صرف $|x|\\le 1$ کے لیے ہے؛ اگر $x>1$ ہو تو جواب $\\pi - 2\\tan^{-1}x$ بنتا ہے!"
      ],
      enTip: "Inside $\\sqrt{1 + \\sin 2x}$, write $1+\\sin 2x = (\\cos x + \\sin x)^2$, so $\\sqrt{1+\\sin 2x} = |\\cos x + \\sin x|$!",
      urTip: "جزر $\\sqrt{1+\\sin 2x}$ کو ہمیشہ $\\sqrt{(\\cos x + \\sin x)^2} = |\\cos x + \\sin x|$ لکھیں اور دیے گئے وقفے کے مطابق علامت کھولیں!",
      enVoice: "Lecture 38: Advanced and Inverse Simplification. Eliminate square roots with canonical substitutions: a sine theta, a tangent theta, a secant theta, or a cosine 2 theta. Divide cosine minus sine over cosine plus sine by cosine to collapse arctangent straight to pi over 4 minus x!",
      urVoice: "لیکچر نمبر اڑتیس: اعلیٰ اور معکوس عبارات کا اختصار۔ جزر ختم کرنے کے لیے معیاری متبادلات سائن تھیٹا، ٹینجنٹ تھیٹا یا کوسائن ٹو تھیٹا استعمال کریں، اور کوسائن منفی سائن بٹا کوسائن جمع سائن کو کوسائن پر تقسیم کر کے پائی بائی فور منفی ایکس بنائیں۔"
    },

    "ch-39-proof-identities-advanced": {
      enTitle: "Lecture 39: Proof of Trigonometric & Inverse Identities (Telescoping & Machin)",
      urTitle: "لیکچر 39: اعلیٰ تکونیاتی و معکوس متماثلات کا ثبوت (ٹیلی اسکوپک سلسلے اور ماچن کلیہ)",
      boardTex: "$$\\sum_{k=1}^{n}\\tan^{-1}\\!\\left(\\frac{1}{1+k+k^2}\\right)=\\tan^{-1}(n+1)-\\frac{\\pi}{4}, \\qquad 4\\tan^{-1}\\!\\left(\\frac{1}{5}\\right)-\\tan^{-1}\\!\\left(\\frac{1}{239}\\right)=\\frac{\\pi}{4}$$",
      enLecture: [
        "<strong>Inverse Telescoping Trick:</strong> Rewrite $\\frac{1}{1+k+k^2} = \\frac{(k+1)-k}{1+k(k+1)}$ so $\\tan^{-1}$ splits into $\\tan^{-1}(k+1) - \\tan^{-1}(k)$ and every interior term cancels!",
        "<strong>Split-Angle numerator trick:</strong> Prove $\\sum \\cot A\\cot B = 1$ (when $A+B+C=\\pi$) or $\\sum \\frac{\\sin(A-B)}{\\cos A\\cos B} = 0$ by splitting $\\sin(A-B) = \\sin A\\cos B - \\cos A\\sin B = \\cos A\\cos B(\\tan A - \\tan B)$.",
        "<strong>Machin's Celebrated $\\pi$ Identity:</strong> Apply $2\\tan^{-1}(1/5) = \\tan^{-1}(5/12) \\implies 4\\tan^{-1}(1/5) = \\tan^{-1}(120/119)$, then subtract $\\tan^{-1}(1/239)$ to get $\\tan^{-1}(1) = \\frac{\\pi}{4}$!"
      ],
      urLecture: [
        "<strong>ٹیلی اسکوپک سلسلہ (Telescoping Series):</strong> کسر $\\frac{1}{1+k+k^2}$ کو $\\frac{(k+1)-k}{1+k(k+1)}$ کی شکل دیں تاکہ وہ $\\tan^{-1}(k+1)-\\tan^{-1}(k)$ بن کر اندرونی تمام رقمیں کاٹ دے!",
        "<strong>شمار کنندہ توڑنے کا ہنر:</strong> $\\frac{\\sin(A-B)}{\\cos A\\cos B}$ کو کھولنے پر یہ سیدھا $\\tan A - \\tan B$ بن جاتا ہے جس سے دوری مجموعہ فوراً صفر ثابت ہو جاتا ہے۔",
        "<strong>ماچن کا مشہورِ زمانہ $\\pi$ کلیہ:</strong> پہلے $2\\tan^{-1}(1/5)=\\tan^{-1}(5/12)$ اور پھر $4\\tan^{-1}(1/5)=\\tan^{-1}(120/119)$ نکال کر $\\tan^{-1}(1/239)$ تفریق کریں تو $\\tan^{-1}(1)=\\frac{\\pi}{4}$ ثابت ہو جاتا ہے!"
      ],
      enTip: "Always look for $1 + (\\text{product of two pieces})$ in the denominator of $\\tan^{-1}$—the numerator is almost always their difference!",
      urTip: "جب بھی $\\tan^{-1}$ کے مخرج میں $1 + AB$ کی شکل نظر آئے، شمار کنندہ کو $(A-B)$ کی صورت میں لکھیں—پورا سلسلہ خود بخود کٹ جائے گا!",
      enVoice: "Lecture 39: Advanced Proofs of Trigonometric and Inverse Identities. Look for 1 plus A B in arctangent denominators so the numerator splits as A minus B into a telescoping difference, and apply double-arctangent twice to prove Machin's famous pi over 4 identity!",
      urVoice: "لیکچر نمبر انتالیس: اعلیٰ اور معکوس متماثلات کا ثبوت۔ آرک ٹینجنٹ کے مخرج میں ون پلس اے بی بنا کر شمار کنندہ کو اے منفی بی میں توڑیں تاکہ درمیانی تمام رقمیں کٹ جائیں، اور دگنے آرک ٹینجنٹ سے ماچن کا پائی بائی فور فارمولا ثابت کریں۔"
    },

    "ch-32-trig-calculus": {
      enTitle: "Lecture 40: Trigonometric Calculus — Limits, Derivatives & Integrals",
      urTitle: "لیکچر 40: ٹرگنومیٹرک کیلکولس — حدود، مشتقات اور انٹیگریشن",
      boardTex: "$$\\lim_{x\\to 0}\\frac{\\sin x}{x}=1, \\quad \\frac{d}{dx}(\\sin x)=\\cos x, \\quad \\frac{d}{dx}(\\tan x)=\\sec^2 x, \\quad \\int\\frac{dx}{1+x^2}=\\tan^{-1}x+C$$",
      enLecture: [
        "By the Unit-Circle Sector Squeeze $\\sin x < x < \\tan x$ (for small $x>0$ in <strong>radians</strong>), $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$ and $\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2} = \\frac{1}{2}$.",
        "<strong>Co-Derivative Minus Sign Rule:</strong> Every trig or inverse-trig function starting with <strong>'co-'</strong> ($\\cos, \\cot, \\operatorname{cosec}, \\cos^{-1}, \\cot^{-1}, \\operatorname{cosec}^{-1}$) has a <strong>negative</strong> derivative!",
        "To integrate even powers like $\\int \\sin^2 x\\,dx$, never use integration by parts first—just drop power via $\\sin^2 x = \\frac{1-\\cos 2x}{2}$!"
      ],
      urLecture: [
        "اکائی دائرے کے سینڈوچ مسئلے کی رو سے (جب $x$ <strong>ریڈین</strong> میں ہو) بنیادی حد $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$ اور $\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}=\\frac{1}{2}$ ہوتی ہے۔",
        "<strong>مشتق (Derivative) کی علامت کا سنہری اصول:</strong> جس فنکشن کا نام <strong>'co'</strong> سے شروع ہوتا ہے ($\\cos, \\cot, \\operatorname{cosec}, \\cos^{-1}$) اُس کے مشتق کے ساتھ ہمیشہ منفی ($-$) علامت آتی ہے!",
        "مربع والی انٹیگریشن جیسے $\\int \\sin^2 x\\,dx$ میں طاقت کم کرنے کا کلیہ $\\frac{1-\\cos 2x}{2}$ لگائیں—جواب دو سطروں میں آ جائے گا!"
      ],
      enTip: "Watch degrees in calculus! Since $x^\\circ = \\frac{\\pi x}{180}$ rad, $\\lim_{x\\to 0}\\frac{\\sin(x^\\circ)}{x} = \\frac{\\pi}{180}$ and $\\frac{d}{dx}(\\sin x^\\circ) = \\frac{\\pi}{180}\\cos x^\\circ$!",
      urTip: "کیلکولس میں ڈگری کا دھوکہ: $\\lim_{x\\to 0}\\frac{\\sin(x^\\circ)}{x}$ کا جواب $1$ نہیں بلکہ $\\frac{\\pi}{180}$ آتا ہے!",
      enVoice: "Lecture 40: Trigonometric Calculus. In radians, limit as x approaches zero of sine x over x equals 1, unlocking every derivative and integral. Remember every co-function has a negative derivative, and use double-angle power reduction to integrate sine squared or cosine squared!",
      urVoice: "لیکچر نمبر چالیس: ٹرگنومیٹرک کیلکولس۔ ریڈین میں سائن ایکس بٹا ایکس کی حد ایک ہوتی ہے۔ کو سے شروع ہونے والے ہر فنکشن کا مشتق منفی ہوتا ہے، اور سائن اسکوائر کی انٹیگریشن کے لیے ہاف اینگل پاور ریڈکشن فارمولا استعمال کریں۔"
    },

    "ch-14-euler-spherical": {
      enTitle: "Lecture 41: Euler's Formula, De Moivre, Hyperbolic & Spherical Trigonometry",
      urTitle: "لیکچر 41: آئلسر کا فارمولا، ڈی موائور مسئلہ، ہائپربولک اور کروی ٹرگنومیٹری",
      boardTex: "$$e^{i\\theta}=\\cos\\theta+i\\sin\\theta, \\quad (\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta, \\quad \\cos c=\\cos a\\cos b+\\sin a\\sin b\\cos C$$",
      enLecture: [
        "Matching Maclaurin series of $e^{i\\theta}$, $\\cos\\theta$, and $\\sin\\theta$ proves <strong>Euler's Formula</strong> $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, giving $\\cos\\theta = \\frac{e^{i\\theta}+e^{-i\\theta}}{2}$ and $\\sin\\theta = \\frac{e^{i\\theta}-e^{-i\\theta}}{2i}$.",
        "<strong>De Moivre's Theorem</strong> $(\\cos\\theta+i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$ extracts all $n$ roots of unity spaced around the unit circle and derives $\\cos n\\theta$ polynomials in seconds.",
        "On a sphere (Earth/celestial navigation), triangle angles sum to $A+B+C > \\pi$ (spherical excess equals area on unit sphere!) and obey the Spherical Law of Cosines."
      ],
      urLecture: [
        "ٹیلر سیریز کے موازنے سے <strong>آئلسر کا عظیم فارمولا</strong> $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ ثابت ہوتا ہے، جس میں $\\theta=\\pi$ رکھنے سے $e^{i\\pi}+1=0$ ملتا ہے!",
        "<strong>ڈی موائور کا مسئلہ</strong> $(\\cos\\theta+i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$ مختلط اعداد کی طاقتوں، اکائی کے $n$ جذور اور کثیر زاویہ فارمولوں کو نہایت آسان بنا دیتا ہے۔",
        "کرہ (زمین یا فلکیات) کی سطح پر بنی مثلث کے زاویوں کا مجموعہ $180^\\circ$ سے <em>بڑا</em> ہوتا ہے اور وہاں کروی قانونِ کوسائن لاگو ہوتا ہے۔"
      ],
      enTip: "Osborn's Rule links circular and hyperbolic identities: $\\cosh^2 x - \\sinh^2 x = 1$ flips the sign whenever a product of two sines occurs!",
      urTip: "ہائپربولک ٹرگنومیٹری میں دائرے کی نسبت فرقِ مربعین آتا ہے: $\\cosh^2 x - \\sinh^2 x = 1$!",
      enVoice: "Lecture 41: Euler's Formula, De Moivre, and Spherical Trigonometry. Taylor series unite exponentials and waves via e to the i theta equals cosine theta plus i sine theta, powering De Moivre's theorem, hyperbolic functions, and great-circle navigation on spheres!",
      urVoice: "لیکچر نمبر اکتالیس: آئلسر کا فارمولا اور ڈی موائور کا مسئلہ۔ ای کی طاقت آئی تھیٹا برابر کوسائن تھیٹا جمع آئی سائن تھیٹا مختلط اعداد اور موجوں کو یکجا کرتا ہے، اور کروی مثلث میں زاویوں کا مجموعہ ایک سو اسی درجے سے زیادہ ہوتا ہے۔"
    },

    "ch-15-fourier": {
      enTitle: "Lecture 42: Orthogonal Harmonics, ODEs & Fourier Series Analysis",
      urTitle: "لیکچر 42: آرتھوگونل ہارمونکس، تفرقی مساواتیں اور فوریئر سیریز",
      boardTex: "$$f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty}\\left(a_n\\cos nx + b_n\\sin nx\\right), \\qquad \\sum_{n=1}^{\\infty}\\frac{1}{n^2} = \\frac{\\pi^2}{6}$$",
      enLecture: [
        "Simple harmonic motion $x'' + \\omega^2 x = 0$ has general solution $A\\cos(\\omega t) + B\\sin(\\omega t)$—proving sinusoids are nature's fundamental eigenfunctions!",
        "<strong>Orthogonality</strong> ($\\int_{-\\pi}^{\\pi}\\sin mx\\cos nx\\,dx = 0$ and $\\int_{-\\pi}^{\\pi}\\sin mx\\sin nx\\,dx = \\pi\\delta_{mn}$) lets us isolate each harmonic coefficient $a_n, b_n$ cleanly.",
        "Parseval's Energy Theorem equates wave energy to harmonic energy, proving Euler's Basel sum $1 + \\frac{1}{4} + \\frac{1}{9} + \\cdots = \\frac{\\pi^2}{6}$!"
      ],
      urLecture: [
        "سادہ ہارمونک حرکت کی تفرقی مساوات $x'' + \\omega^2 x = 0$ کا حل سائن اور کوسائن میں نکلتا ہے، جو قدرت کی بنیادی لہریں ہیں۔",
        "<strong>آرتھوگونیلٹی (Orthogonality)</strong> کی خاصیت کی بدولت مختلف تعدد والی لہروں کا انٹیگرل صفر ہو جاتا ہے، جس سے فوریئر ضرائب $a_n$ اور $b_n$ الگ الگ نکل آتے ہیں۔",
        "فوریئر تجزیہ ہر مربع یا دندانے دار لہر کو خالص سائن موجوں کا مجموعہ بنا دیتا ہے اور پارسیول مسئلے سے $\\sum \\frac{1}{n^2} = \\frac{\\pi^2}{6}$ ثابت کرتا ہے!"
      ],
      enTip: "Exploit symmetry before integrating: if $f(x)$ is <strong>odd</strong>, all $a_n = 0$ automatically; if $f(x)$ is <strong>even</strong>, all $b_n = 0$!",
      urTip: "انٹیگریشن سے پہلے تشاکل چیک کریں: اگر فنکشن طاق (Odd) ہو تو تمام $a_n=0$ ہوتے ہیں، اور اگر جفت (Even) ہو تو تمام $b_n=0$ ہوتے ہیں!",
      enVoice: "Lecture 42: Fourier Series and Orthogonal Harmonics. Because sine and cosine harmonics are mutually orthogonal over minus pi to pi, any periodic wave decomposes into pure sinusoidal frequencies—powering MP3 audio, JPEG compression, and quantum physics!",
      urVoice: "لیکچر نمبر بیالیس: فوریئر سیریز۔ سائن اور کوسائن کی آرتھوگونیلٹی کی مدد سے کسی بھی پیچیدہ دوری لہر کو سادہ ہارمونک لہروں کے مجموعے میں توڑا جا سکتا ہے، جو جدید سگنل پروسیسنگ کی بنیاد ہے۔"
    },

    "ch-16-complex-lie": {
      enTitle: "Lecture 43: Complex Analytic Trig, Euler Infinite Product & Lie Group SO(2)",
      urTitle: "لیکچر 43: مختلط تحلیلی ٹرگنومیٹری، لامتناہی حاصلِ ضرب اور لائی گروپ SO(2)",
      boardTex: "$$\\frac{\\sin(\\pi z)}{\\pi z} = \\prod_{n=1}^{\\infty}\\left(1 - \\frac{z^2}{n^2}\\right), \\qquad R(\\theta)=\\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix} = e^{\\theta J} \\in SO(2)$$",
      enLecture: [
        "Over $\\mathbb{C}$, $\\sin z$ and $\\cos z$ are entire analytic functions and are <strong>no longer bounded by $1$</strong>! For example, $\\cos(iy) = \\cosh y \\to \\infty$, so $\\cos z = 2$ has exact complex roots!",
        "<strong>Euler–Weierstrass Infinite Product:</strong> Factoring $\\sin(\\pi z)$ by its integer zeros $z = \\pm n$ yields $\\frac{\\sin(\\pi z)}{\\pi z} = \\prod_{n=1}^{\\infty}(1 - \\frac{z^2}{n^2})$.",
        "<strong>Matrix Exponential & $SO(2)$:</strong> With generator $J = \\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ satisfying $J^2 = -I$ (just like $i^2=-1$!), the matrix exponential $e^{\\theta J} = (\\cos\\theta)I + (\\sin\\theta)J$ generates all 2D rotations—and multiplying $R(A)R(B)=R(A+B)$ proves compound angle formulas in one matrix product!"
      ],
      urLecture: [
        "مختلط مستوی $\\mathbb{C}$ میں $\\sin z$ اور $\\cos z$ کی قدریں $[-1,1]$ تک محدود <strong>نہیں رہتیں</strong>! مثلاً $\\cos(iy)=\\cosh y$ لامتناہی بڑھ سکتا ہے، اس لیے $\\cos z = 2$ کے مختلط حل موجود ہیں!",
        "<strong>آئلسر کا لامتناہی حاصلِ ضرب:</strong> سائن کے اصفار $z=\\pm n$ کی مدد سے اسے کثیر رقمی کی طرح اجزائے ضربی $\\frac{\\sin(\\pi z)}{\\pi z} = \\prod_{n=1}^{\\infty}(1-\\frac{z^2}{n^2})$ میں لکھا جاتا ہے۔",
        "<strong>گردشی میٹرکس اور لائی گروپ $SO(2)$:</strong> میٹرکس $J$ کے لیے $J^2=-I$ بالکل $i^2=-1$ کی طرح کام کرتا ہے، اور دو گردشی میٹرکسوں کی ضرب $R(A)R(B)=R(A+B)$ سے مرکب زاویوں کے فارمولے ایک ہی سطر میں ثابت ہو جاتے ہیں!"
      ],
      enTip: "Remember: $|\\sin x| \\le 1$ is strictly a <em>real-axis</em> property; off the real axis in $\\mathbb{C}$, Liouville's Theorem forces bounded entire functions to be constant, so $\\sin z$ MUST be unbounded!",
      urTip: "یاد رکھیں $|\\sin x|\\le 1$ صرف حقیقی اعداد کے لیے ہے؛ مختلط مستوی $\\mathbb{C}$ میں لیوویل کے مسئلے کے تحت $\\sin z$ غیر محدود ہوتا ہے!",
      enVoice: "Lecture 43: Complex Analytic Trigonometry and Lie Groups. Over complex numbers, sine z and cosine z become unbounded entire functions factored via Euler's infinite product, while 2 by 2 rotation matrices form the Lie group SO 2 via matrix exponential e to the theta J!",
      urVoice: "لیکچر نمبر تینتالیس: مختلط ٹرگنومیٹری اور لائی گروپ۔ مختلط اعداد میں سائن اور کوسائن ایک سے بڑے ہو سکتے ہیں، اور گردش کے ٹو بائی ٹو میٹرکس لائی گروپ ایس او ٹو بناتے ہیں جن کی ضرب سے مرکب زاویوں کے قوانین فوراً ثابت ہوتے ہیں۔"
    },

    "ch-44-grand-summary": {
      enTitle: "Lecture 44: Complete 4-Group Trigonometry Grandmaster Synthesis",
      urTitle: "لیکچر 44: ٹرگنومیٹری کے چاروں گروپس (41 ستونوں) کا جامع گرینڈ ماسٹر لیکچر",
      boardTex: "$$\\text{Group I (9)} \\;\\longrightarrow\\; \\text{Group II (7)} \\;\\longrightarrow\\; \\text{Group III (16)} \\;\\longrightarrow\\; \\text{Group IV (9)}$$",
      enLecture: [
        "<strong>Groups I & II (Right-Triangle & Identity Core):</strong> Master $\\pi\\text{ rad}=180^\\circ$, all 6 ratios, standard $0^\\circ\\text{–}90^\\circ$ table, complementary $90^\\circ-\\theta$ flips, the 3 Pythagorean identities, power-reduction simplification, 1-sided proofs, and elevation/depression surveying.",
        "<strong>Group III (Analytic & Multi-Angle Core):</strong> Unit circle $(x,y)=(\\cos t,\\sin t)$, ASTC signs, domain/range/periodicity, 4-parameter wave graphs, compound/double/triple/half angles, sum-product factoring, and general solutions over $n\\in\\mathbb{Z}$.",
        "<strong>Group IV (Inverse & Advanced Equation Core):</strong> Principal value branches ($[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ vs $[0,\\pi]$), negative-input laws, piecewise $\\tan^{-1}$ addition, canonical radical substitutions, telescoping proofs, and mandatory extraneous-root checks!"
      ],
      urLecture: [
        "<strong>گروپ اول اور دوم (بنیادی نسبتیں، متماثلات اور بلندی):</strong> $\\pi\\text{ rad}=180^\\circ$، چھ نسبتیں، معیاری زاویے، تکمیلی زاویے ($90^\\circ-\\theta$)، تین فیثاغورثی متماثلات، عبارات کا اختصار، ثبوت کے یک طرفہ طریقے اور بلندی و فاصلہ پر مکمل دسترس۔",
        "<strong>گروپ سوم (دائروی فنکشنز، مضاعف زاویے اور مساواتیں):</strong> اکائی دائرہ، ASTC علامات، ڈومین، رینج، دوریت، موجی گراف، مرکب، دگنے، تگنے اور نصف زاویے، جمع و ضرب کے کلیے اور مساواتوں کے عمومی حل ($n\\in\\mathbb{Z}$)۔",
        "<strong>گروپ چہارم (معکوس فنکشنز اور اعلیٰ ثبوت):</strong> پرنسپل شاخیں ($[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ بمقابلہ $[0,\\pi]$)، منفی عدد کے قوانین، مشروط $\\tan^{-1}$ جمع، جذری متبادلات، ٹیلی اسکوپک ثبوت اور اصل مساوات میں حل کی لازمی پڑتال!"
      ],
      enTip: "Congratulations! Use the 4-Group Summary cards and Voice Lectures anytime for a rapid 15-minute pre-exam full syllabus revision!",
      urTip: "مبارک ہو! امتحان سے پہلے تیز رفتار دہرائی کے لیے ان چاروں گروپس کے دو لسانی (انگلش + اردو) لیکچرز اور فارمولا کارڈز سے بھرپور فائدہ اٹھائیں!",
      enVoice: "Lecture 44: Grandmaster Synthesis. You have completed the entire 44-chapter journey across all 7 realms—uniting right-triangle geometry, identities, surveying, circular waves, multi-angle transformations, general solutions, inverse branches, calculus, Euler's formula, and Fourier harmonics!",
      urVoice: "لیکچر نمبر چوالیس: مکمل گرینڈ ماسٹر خلاصہ۔ مبارک ہو! آپ نے ٹرگنومیٹری کے تمام سات لیولز اور چوالیس ابواب مکمل کر لیے ہیں جن میں قائمۃ الزاویہ مثلث سے لے کر متماثلات، اکائی دائرہ، مرکب زاویے، عمومی حل اور معکوس فنکشنز سب شامل ہیں۔"
    }
  }
};

/* ==========================================================================
   Verified YouTube Video Lectures Catalog (English & Urdu / اردو)
   Every video ID verified live via YouTube oEmbed API
   ========================================================================== */
window.TRIG_YOUTUBE_LECTURES = {
  realms: {
    "tier-1": {
      enId: "JmLN3QxshlE",
      enTitle: "Angles, Degrees & Radians — Complete Visual Master Lecture",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Trigonometry angles degrees and radians arc length sector area lecture",
      urId: "s0JrcwGpEP8",
      urTitle: "زاویہ، ڈگری اور ریڈین پیمائش — مکمل اردو ویڈیو لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "measurement of angles radian and degree trigonometry lecture in urdu"
    },
    "tier-2": {
      enId: "PUB0TaZ7bhA",
      enTitle: "Right-Triangle Ratios, SOH-CAH-TOA, Reciprocals & Standard Angles",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Right triangle trigonometry SOH CAH TOA reciprocal ratios standard angles",
      urId: "Q6zuhtGpq-g",
      urTitle: "تکونیاتی نسبتیں (Sin, Cos, Tan) اور معیاری زاویے — اردو لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "trigonometric ratios sin cos tan standard angles lecture in urdu"
    },
    "tier-3": {
      enId: "Rf05H8ogHLg",
      enTitle: "Verifying & Proving Trigonometric Identities + Heights & Distances",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Verifying trigonometric identities simplification and angle of elevation",
      urId: "5xjPSkNFkL0",
      urTitle: "بنیادی تکونیاتی متماثلات کا ثبوت اور اختصار — اردو لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "fundamental trigonometric identities proof lecture in urdu"
    },
    "tier-4": {
      enId: "V5ArB_GFGYQ",
      enTitle: "Unit Circle, ASTC Quadrants, Domain/Range, Periodicity & Wave Graphs",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Unit circle trigonometry quadrants domain range graphing sine cosine",
      urId: "z-0sv8Ls70M",
      urTitle: "ٹرگنومیٹرک فنکشنز کی ڈومین، رینج، دوریت اور گراف — اردو لیکچر",
      urChannel: "Sir Shahzad Sair Maths (Urdu)",
      urQuery: "domain range periodicity and graphs of trigonometric functions in urdu"
    },
    "tier-5": {
      enId: "SE5SBTgrwH8",
      enTitle: "Compound, Double/Half Angles, Sum-to-Product & General Trig Equations",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Compound double half angle formulas and solving trigonometric equations",
      urId: "_vnTyLWRdyQ",
      urTitle: "مرکب، دگنے زاویے اور تکونیاتی مساواتوں کا حل — اردو لیکچر",
      urChannel: "Prof. Asad Ali Maths",
      urQuery: "fundamental law of trigonometry double angle formulas lecture in urdu"
    },
    "tier-6": {
      enId: "jt7p-mCC0ng",
      enTitle: "Inverse Trigonometric Functions, Principal Values, Calculus & Fourier",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Inverse trigonometric functions domain range principal values identities",
      urId: "BLoJiDVA4Es",
      urTitle: "معکوس تکونیاتی فنکشنز، ڈومین، رینج اور خصوصیات — اردو لیکچر",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "inverse trigonometric functions domain range properties lecture in urdu"
    },
    "tier-7": {
      enId: "g8VCHoSk5_o",
      enTitle: "Complete Trigonometry Full Synthesis Course (All 4 Groups Revision)",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Complete trigonometry full course all formulas revision",
      urId: "9VCD8q_FgPU",
      urTitle: "مکمل ٹرگنومیٹری فارمولا ریویژن اور ماسٹر خلاصہ — اردو / ہندی",
      urChannel: "Dear Sir Maths",
      urQuery: "complete trigonometry all formulas full revision lecture in urdu"
    }
  },

  chapters: {
    "ch-1-intro": {
      enId: "g8VCHoSk5_o",
      enTitle: "Introduction to Trigonometry — Right Triangles & Core Intuition",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Introduction to trigonometry right triangles basics lecture",
      urId: "Q6zuhtGpq-g",
      urTitle: "ٹرگنومیٹری کا مکمل تعارف اور قائمۃ الزاویہ مثلث",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "introduction to trigonometry lecture in urdu"
    },
    "ch-2-angles": {
      enId: "JmLN3QxshlE",
      enTitle: "Measurement of Angles — Standard Position, Coterminal & DMS",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Angles in standard position degrees minutes seconds coterminal angles",
      urId: "s0JrcwGpEP8",
      urTitle: "زاویوں کی پیمائش — ڈگری، منٹ اور سیکنڈ (DMS) اردو لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "sexagesimal system degree minute second trigonometry in urdu"
    },
    "ch-3-radian": {
      enId: "JmLN3QxshlE",
      enTitle: "Degrees ↔ Radians, Arc Length (l = rθ) & Sector Area",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Radians and degrees arc length and area of a sector trigonometry",
      urId: "s0JrcwGpEP8",
      urTitle: "ڈگری اور ریڈین میں تبدیلی، قوس کی لمبائی l = rθ — اردو لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "radian and degree l=r theta sector area lecture in urdu"
    },
    "ch-4-primary-ratios": {
      enId: "PUB0TaZ7bhA",
      enTitle: "Primary Trigonometric Ratios — Sine, Cosine & Tangent (SOH-CAH-TOA)",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Primary trigonometric ratios sine cosine tangent SOH CAH TOA",
      urId: "Q6zuhtGpq-g",
      urTitle: "بنیادی تکونیاتی نسبتیں — سائن، کوسائن اور ٹینجنٹ اردو لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "sin cos tan trigonometric ratios lecture in urdu"
    },
    "ch-5-reciprocal-ratios": {
      enId: "PUB0TaZ7bhA",
      enTitle: "Reciprocal Trigonometric Ratios — Cosecant, Secant & Cotangent",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Reciprocal trigonometric functions cosecant secant cotangent",
      urId: "Q6zuhtGpq-g",
      urTitle: "معکوس تکونیاتی نسبتیں — کوسیکنٹ، سیکنٹ اور کوٹینجنٹ",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "reciprocal trigonometric ratios cosec sec cot lecture in urdu"
    },
    "ch-6-standard-angles": {
      enId: "V5ArB_GFGYQ",
      enTitle: "Exact Ratios of Standard Angles (0°, 30°, 45°, 60°, 90°)",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Special right triangles 30 60 90 and 45 45 90 exact trig values",
      urId: "9VCD8q_FgPU",
      urTitle: "معیاری زاویوں (0°, 30°, 45°, 60°, 90°) کی جدول یاد رکھنے کا طریقہ",
      urChannel: "Dear Sir Maths",
      urQuery: "trigonometric table 0 30 45 60 90 trick in urdu"
    },
    "ch-7-complementary": {
      enId: "35fxto48HZY",
      enTitle: "Complementary Angles & Cofunction Identities (90° − θ)",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Cofunction identities complementary angles 90 minus theta trigonometry",
      urId: "8x9y0WQeguM",
      urTitle: "تکمیلی زاویے (90° − θ) اور کو فنکشن قوانین",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "trigonometric ratios of complementary angles 90 minus theta in urdu"
    },
    "ch-8-unknown-ratios": {
      enId: "PUB0TaZ7bhA",
      enTitle: "Finding All Unknown Trigonometric Ratios from One Given Ratio",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Find remaining trigonometric functions given one trig ratio",
      urId: "Q6zuhtGpq-g",
      urTitle: "ایک نسبت سے باقی تمام نامعلوم تکونیاتی نسبتیں معلوم کرنا",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "find remaining trigonometric ratios in urdu"
    },
    "ch-8-unknown-sides": {
      enId: "uyKvSe6Ltgs",
      enTitle: "Finding Unknown Sides in Right-Angled Triangles",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Finding missing sides of right triangles using trigonometry",
      urId: "GNRgz3AgkP8",
      urTitle: "قائمۃ الزاویہ مثلث کے نامعلوم اضلاع معلوم کرنا — اردو لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "finding unknown sides of right triangle trigonometry in urdu"
    },
    "ch-9-unknown-angles": {
      enId: "uyKvSe6Ltgs",
      enTitle: "Finding Unknown Angles Using Inverse Trig Keys",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Finding missing angles in right triangles inverse sin cos tan",
      urId: "GNRgz3AgkP8",
      urTitle: "قائمۃ الزاویہ مثلث کے نامعلوم زاویے معلوم کرنا",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "finding unknown angles right triangle trigonometry in urdu"
    },
    "ch-11-identities": {
      enId: "Rf05H8ogHLg",
      enTitle: "Fundamental Pythagorean Trigonometric Identities",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Fundamental pythagorean trigonometric identities sin2 + cos2 = 1",
      urId: "5xjPSkNFkL0",
      urTitle: "بنیادی فیثاغورثی متماثلات (sin²θ + cos²θ = 1) کا مکمل ثبوت",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "fundamental trigonometric identities sin2+cos2=1 proof in urdu"
    },
    "ch-12-simplification": {
      enId: "Rf05H8ogHLg",
      enTitle: "Simplification of Trigonometric Expressions Step-by-Step",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Simplifying trigonometric expressions using identities",
      urId: "5xjPSkNFkL0",
      urTitle: "تکونیاتی عبارات کا اختصار (Simplification) — مرحلہ وار لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "simplification of trigonometric expressions lecture in urdu"
    },
    "ch-13-proving": {
      enId: "Rf05H8ogHLg",
      enTitle: "Proof of Trigonometric Identities — Master Exam Strategies",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "How to prove and verify trigonometric identities hard examples",
      urId: "5xjPSkNFkL0",
      urTitle: "تکونیاتی متماثلات کو ثابت کرنے کے سنہری اصول (LHS = RHS)",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "proving trigonometric identities lhs rhs lecture in urdu"
    },
    "ch-10-heights-distances": {
      enId: "uyKvSe6Ltgs",
      enTitle: "Applications of Trigonometry — Angle of Elevation & Depression",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Angle of elevation and depression trigonometry word problems",
      urId: "GNRgz3AgkP8",
      urTitle: "بلندی اور فاصلہ — زاویۂ فراز اور زاویۂ نشیب اردو لیکچر",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "angle of elevation and depression heights and distances in urdu"
    },
    "ch-15-heights-advanced": {
      enId: "uyKvSe6Ltgs",
      enTitle: "Heights & Distances — Two-Triangle Surveying & 3D Bearings",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Two right triangle angle of elevation problems bearings trigonometry",
      urId: "yhRRV30Du4o",
      urTitle: "بلندی اور فاصلہ کے دو مثلثی سوالات کا حل",
      urChannel: "Dear Sir Maths",
      urQuery: "heights and distances two triangles problems in urdu"
    },
    "ch-16-trig-functions": {
      enId: "V5ArB_GFGYQ",
      enTitle: "Circular Trigonometric Functions on the Unit Circle",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Unit circle trigonometric functions of real numbers",
      urId: "z-0sv8Ls70M",
      urTitle: "اکائی دائرہ اور دائروی ٹرگنومیٹرک فنکشنز — اردو لیکچر",
      urChannel: "Sir Shahzad Sair Maths (Urdu)",
      urQuery: "unit circle trigonometric functions lecture in urdu"
    },
    "ch-17-any-angle": {
      enId: "V5ArB_GFGYQ",
      enTitle: "Trigonometric Functions of Any Angle & Reference Angles",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Trigonometric functions of any angle reference angles",
      urId: "8x9y0WQeguM",
      urTitle: "کسی بھی زاویے کی تکونیاتی نسبتیں اور Allied Angles",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "allied angles trigonometric ratios of any angle in urdu"
    },
    "ch-18-quadrant-signs": {
      enId: "V5ArB_GFGYQ",
      enTitle: "Signs of Trigonometric Ratios in All Four Quadrants (ASTC)",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Signs of trigonometric functions in quadrants ASTC rule",
      urId: "8x9y0WQeguM",
      urTitle: "چاروں ربعات (Quadrants) میں تکونیاتی نسبتوں کی علامات (ASTC)",
      urChannel: "Waqas Nasir Maths (Urdu)",
      urQuery: "signs of trigonometric ratios in quadrants astc rule in urdu"
    },
    "ch-19-domain-range": {
      enId: "Vw-RwPBWS8g",
      enTitle: "Domain and Range of All Six Trigonometric Functions",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Domain and range of all 6 trigonometric functions",
      urId: "z-0sv8Ls70M",
      urTitle: "تمام چھ تکونیاتی فنکشنز کی ڈومین اور رینج — اردو لیکچر",
      urChannel: "Sir Shahzad Sair Maths (Urdu)",
      urQuery: "domain and range of trigonometric functions lecture in urdu"
    },
    "ch-20-periodicity": {
      enId: "Vw-RwPBWS8g",
      enTitle: "Periodicity, Fundamental Periods & Even/Odd Symmetry",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Periodicity of trigonometric functions finding the period",
      urId: "ZxAMGcUstMw",
      urTitle: "تکونیاتی فنکشنز کی دوریت (Periodicity) — اردو لیکچر",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "periodicity of trigonometric functions lecture in urdu"
    },
    "ch-21-trig-graphs": {
      enId: "Vw-RwPBWS8g",
      enTitle: "Graphs of Trigonometric Functions, Amplitude & Phase Shift",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Graphing sine cosine tangent secant cosecant amplitude phase shift",
      urId: "3nzxhwned0Q",
      urTitle: "سائن، کوسائن اور ٹینجنٹ کے گراف اور موجی تبدیلیاں",
      urChannel: "Mohit Tyagi Maths",
      urQuery: "graphs of trigonometric functions sin cos tan in urdu"
    },
    "ch-22-compound-angles": {
      enId: "sU2pyMR8GZ4",
      enTitle: "Compound-Angle (Sum & Difference) Formulas: sin(A±B), cos(A±B), tan(A±B)",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Sum and difference identities sin(A+B) cos(A-B) tan(A+B)",
      urId: "_vnTyLWRdyQ",
      urTitle: "مرکب زاویوں کے فارمولے اور ٹرگنومیٹری کا بنیادی قانون",
      urChannel: "Prof. Asad Ali Maths",
      urQuery: "fundamental law of trigonometry compound angles cos(a-b) in urdu"
    },
    "ch-23-double-angle": {
      enId: "SE5SBTgrwH8",
      enTitle: "Double-Angle Formulas, Power-Reduction & Tangent Half-Angle",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Double angle identities sin 2x cos 2x tan 2x power reducing",
      urId: "xs-wlKt_yT8",
      urTitle: "دگنے زاویے (Double-Angle: 2θ) کے فارمولے اور سوالات",
      urChannel: "Sir Shahzad Sair Maths (Urdu)",
      urQuery: "double angle identities sin 2theta cos 2theta lecture in urdu"
    },
    "ch-24-triple-angle": {
      enId: "SE5SBTgrwH8",
      enTitle: "Triple-Angle Formulas: sin 3θ, cos 3θ & tan 3θ",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Triple angle formulas sin 3x cos 3x tan 3x derivation",
      urId: "xs-wlKt_yT8",
      urTitle: "تگنے زاویے (Triple-Angle: 3θ) کے کلیے اور اطلاقات",
      urChannel: "Sir Shahzad Sair Maths (Urdu)",
      urQuery: "triple angle identities sin 3theta cos 3theta lecture in urdu"
    },
    "ch-25-half-angle": {
      enId: "9YI69okba3c",
      enTitle: "Half-Angle Formulas & Quadrant Sign Determination",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Half angle formulas sin(x/2) cos(x/2) tan(x/2) trigonometry",
      urId: "xs-wlKt_yT8",
      urTitle: "نصف زاویے (Half-Angle: θ/2) کے فارمولے — اردو لیکچر",
      urChannel: "Sir Shahzad Sair Maths (Urdu)",
      urQuery: "half angle identities sin theta/2 cos theta/2 lecture in urdu"
    },
    "ch-26-sum-to-product": {
      enId: "8Prc7VGt40w",
      enTitle: "Sum-to-Product (C-D Factoring) Formulas",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Sum to product formulas trigonometry sin C + sin D",
      urId: "Js5bw3sJ2zg",
      urTitle: "مجموعے کو حاصلِ ضرب (Sum-to-Product) میں بدلنے کے کلیے",
      urChannel: "Saad Latif Maths (Urdu)",
      urQuery: "sum or difference into product trigonometry lecture in urdu"
    },
    "ch-27-product-to-sum": {
      enId: "8Prc7VGt40w",
      enTitle: "Product-to-Sum (Defactorization) Formulas",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Product to sum identities 2 sin A cos B trigonometry",
      urId: "Js5bw3sJ2zg",
      urTitle: "حاصلِ ضرب کو مجموعے (Product-to-Sum) میں بدلنے کے کلیے",
      urChannel: "Saad Latif Maths (Urdu)",
      urQuery: "product into sum or difference trigonometry lecture in urdu"
    },
    "ch-28-identities-transformations": {
      enId: "Rf05H8ogHLg",
      enTitle: "Conditional Triangle Identities (A + B + C = π) & Transformations",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Conditional trigonometric identities A+B+C=180",
      urId: "Js5bw3sJ2zg",
      urTitle: "مشروط مثلثی متماثلات (A + B + C = 180°) اور تحویلات",
      urChannel: "Saad Latif Maths (Urdu)",
      urQuery: "conditional trigonometric identities A+B+C=180 in urdu"
    },
    "ch-28-trig-equations": {
      enId: "VMAMARmmDac",
      enTitle: "Trigonometric Equations & Principal Solutions in [0, 2π)",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Solving trigonometric equations principal solutions",
      urId: "ZxAMGcUstMw",
      urTitle: "تکونیاتی مساواتیں اور بنیادی حل — اردو ویڈیو لیکچر",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "solution of trigonometric equations lecture in urdu"
    },
    "ch-29-general-solutions": {
      enId: "VMAMARmmDac",
      enTitle: "General Solutions of Trigonometric Equations over All Integers n ∈ ℤ",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "General solution of trigonometric equations n pi",
      urId: "ZxAMGcUstMw",
      urTitle: "تکونیاتی مساواتوں کے عمومی حل (General Solutions) — اردو لیکچر",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "general solution of trigonometric equations lecture in urdu"
    },
    "ch-31-solving-eq-identities": {
      enId: "VMAMARmmDac",
      enTitle: "Solving Advanced Trigonometric Equations via R-Method & Identities",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Solving a cos x + b sin x = c trigonometric equations",
      urId: "ZxAMGcUstMw",
      urTitle: "متماثلات اور R-طریقے سے تکونیاتی مساواتوں کا حل",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "a cos theta + b sin theta = c trigonometric equations in urdu"
    },
    "ch-30-oblique-laws": {
      enId: "9CGY0s-uCUE",
      enTitle: "Solution of Oblique Triangles — Law of Sines, Cosines & Heron's Area",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Law of sines law of cosines heron formula area of triangle",
      urId: "9VCD8q_FgPU",
      urTitle: "عام مثلث کا حل — قانونِ سائن، قانونِ کوسائن اور ہیرو کا فارمولا",
      urChannel: "Dear Sir Maths",
      urQuery: "law of sines law of cosines hero formula in urdu"
    },
    "ch-33-inverse-trig": {
      enId: "jt7p-mCC0ng",
      enTitle: "Inverse Trigonometric Functions — Bijection & Arc-Functions",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Introduction to inverse trigonometric functions arcsin arccos arctan",
      urId: "BLoJiDVA4Es",
      urTitle: "معکوس تکونیاتی فنکشنز کا مکمل تعارف — اردو ویڈیو لیکچر",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "inverse trigonometric functions introduction lecture in urdu"
    },
    "ch-34-inverse-domain-range": {
      enId: "jt7p-mCC0ng",
      enTitle: "Domain & Range of All Six Inverse Trigonometric Functions",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Domain and range of inverse trigonometric functions",
      urId: "BLoJiDVA4Es",
      urTitle: "معکوس تکونیاتی فنکشنز کی ڈومین اور پرنسپل رینج — اردو لیکچر",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "domain and range of inverse trigonometric functions in urdu"
    },
    "ch-35-inverse-principal-values": {
      enId: "jt7p-mCC0ng",
      enTitle: "Evaluating Principal Values & Folding sin⁻¹(sin x)",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Evaluating inverse trigonometric functions principal values sin^-1(sin x)",
      urId: "BLoJiDVA4Es",
      urTitle: "معکوس فنکشنز کی پرنسپل قدریں (Principal Values) معلوم کرنا",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "principal values of inverse trigonometric functions in urdu"
    },
    "ch-36-inverse-properties": {
      enId: "jt7p-mCC0ng",
      enTitle: "Properties of Inverse Trigonometric Functions & tan⁻¹ Addition",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Properties of inverse trigonometric functions tan^-1 x + tan^-1 y",
      urId: "BLoJiDVA4Es",
      urTitle: "معکوس تکونیاتی فنکشنز کی اہم خصوصیات اور جمعی فارمولے",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "properties of inverse trigonometric functions tan-1 x + tan-1 y in urdu"
    },
    "ch-37-inverse-identities-equations": {
      enId: "jt7p-mCC0ng",
      enTitle: "Inverse Trigonometric Identities, Machin's π Formula & Equations",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Solving inverse trigonometric equations and proving identities",
      urId: "BLoJiDVA4Es",
      urTitle: "معکوس تکونیاتی متماثلات اور مساواتوں کا حل — اردو لیکچر",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "inverse trigonometric identities and equations lecture in urdu"
    },
    "ch-38-simplification-advanced": {
      enId: "jt7p-mCC0ng",
      enTitle: "Advanced Simplification by Trigonometric Substitutions",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Simplifying inverse trigonometric expressions by substitution",
      urId: "BLoJiDVA4Es",
      urTitle: "تکونیاتی متبادلات کے ذریعے معکوس عبارات کا اختصار",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "simplification of inverse trigonometric expressions in urdu"
    },
    "ch-39-proof-identities-advanced": {
      enId: "Rf05H8ogHLg",
      enTitle: "Advanced Proofs, Telescoping Series & Multi-Term Identities",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Telescoping trigonometric series and hard identity proofs",
      urId: "BLoJiDVA4Es",
      urTitle: "اعلیٰ تکونیاتی و معکوس متماثلات کے جامع ثبوت",
      urChannel: "Prof. Iqbal Haider Bhatti (Urdu)",
      urQuery: "proving inverse trigonometric identities lecture in urdu"
    },
    "ch-32-trig-calculus": {
      enId: "PEqCa0U77mc",
      enTitle: "Trigonometric Limits, Derivatives, Integrals & Taylor Series",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Derivatives and integrals of trigonometric functions sin x over x",
      urId: "9VCD8q_FgPU",
      urTitle: "ٹرگنومیٹرک فنکشنز کی تفریق (Derivatives) اور تکملہ (Integration)",
      urChannel: "Dear Sir Maths",
      urQuery: "derivatives and integration of trigonometric functions in urdu"
    },
    "ch-14-euler-spherical": {
      enId: "mvmuCPvRoWQ",
      enTitle: "Euler's Formula e^(iθ), De Moivre's Theorem & Roots of Unity",
      enChannel: "3Blue1Brown",
      enQuery: "Euler formula e^ix de moivre theorem complex trigonometry",
      urId: "Js5bw3sJ2zg",
      urTitle: "آئلسر کا فارمولا، ڈی موائیور کا مسئلہ اور مختلط زاویے",
      urChannel: "Saad Latif Maths (Urdu)",
      urQuery: "de moivre theorem and euler formula lecture in urdu"
    },
    "ch-15-fourier": {
      enId: "spUNpyF58BY",
      enTitle: "Visual Introduction to Fourier Series & Harmonic Waves",
      enChannel: "3Blue1Brown",
      enQuery: "Fourier series and Fourier transform visual introduction",
      urId: "3nzxhwned0Q",
      urTitle: "فوریئر سیریز اور ہارمونک لہروں کا بصری تصور",
      urChannel: "Mohit Tyagi Maths",
      urQuery: "fourier series trigonometry waves lecture in urdu"
    },
    "ch-16-complex-lie": {
      enId: "mvmuCPvRoWQ",
      enTitle: "Complex Analytic Trigonometry & Rotation Group SO(2)",
      enChannel: "3Blue1Brown",
      enQuery: "Euler formula rotation matrices group theory SO(2)",
      urId: "Js5bw3sJ2zg",
      urTitle: "مختلط ٹرگنومیٹری اور گردشی میٹرکس (SO(2))",
      urChannel: "Saad Latif Maths (Urdu)",
      urQuery: "hyperbolic and complex trigonometric functions in urdu"
    },
    "ch-44-grand-summary": {
      enId: "g8VCHoSk5_o",
      enTitle: "Complete Trigonometry Grandmaster Course — Full 4-Group Synthesis",
      enChannel: "The Organic Chemistry Tutor",
      enQuery: "Complete trigonometry full course review all formulas",
      urId: "9VCD8q_FgPU",
      urTitle: "مکمل ٹرگنومیٹری کے چاروں گروپس کا جامع خلاصہ لیکچر",
      urChannel: "Dear Sir Maths",
      urQuery: "complete trigonometry full revision lecture in urdu"
    }
  }
};
