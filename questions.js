const questionBank = [
  // ==================== MATEMATIKA SAVOLLARI (900 TA SAVOL, 30 TA VARIANT) ====================
  {

    id: "v1_q1",

    variant: 1,

    text: "\\(a, b, c\\) — turli raqamlar bo'lsa, \\(100a + 10b + c\\) ning eng katta qiymatini toping.",

    options: ["897", "987", "999", "988"],

    correctAnswer: 1,

    difficulty: -1.5,

    category: "Sonlar va amallar"

  },
  {

    id: "v1_q2",

    variant: 1,

    text: "Hisoblang: \\(\\left(2022 - \\frac{1}{2022}\\right) : \\frac{2021}{2022} \\cdot \\frac{1}{2023}\\)",

    options: ["1", "2022", "\\(\\frac{1}{2023}\\)", "2023"],

    correctAnswer: 0,

    difficulty: -0.8,

    category: "Sonlar va amallar"

  },
  {

    id: "v1_q3",

    variant: 1,

    text: "2 va 3 ga bo'linmaydigan barcha ikki xonali natural sonlar yig'indisini toping.",

    options: ["1620", "1800", "1960", "3080"],

    correctAnswer: 0,

    difficulty: 0.2,

    category: "Sonlar va amallar (Arifmetika)"

  },
  {

    id: "v1_q4",

    variant: 1,

    text: "A shahardan B shaharga ikkita mashina yo'lga chiqdi. Birinchi mashina tezligi \\(v_1\\), ikkinchi mashina tezligi \\(v_2\\) \\((v_1 > v_2)\\). Birinchi mashina B shaharga borib shu zahoti qaytib ikkinchi mashina bilan uchrashdi. Ikkinchi mashina bosib o'tgan masofa A va B shaharlar orasidagi masofaning necha foizini tashkil etadi?",

    options: ["\\(\\frac{2v_2}{v_1 + v_2} \\cdot 100\\%\\)", "\\(\\frac{v_2}{v_1 + v_2} \\cdot 100\\%\\)", "\\(\\frac{2v_1}{v_1 - v_2} \\cdot 100\\%\\)", "\\(\\frac{v_1}{v_1 - v_2} \\cdot 100\\%\\)"],

    correctAnswer: 0,

    difficulty: 1.2,

    category: "Matematik modellashtirish (Harakat)"

  },
  {

    id: "v1_q5",

    variant: 1,

    text: "3 ta quvur berilgan. 1-quvur yolg'iz o'zi basseynni 5 soatda to'ldiradi, 2-quvur yolg'iz o'zi 3 soatda to'ldiradi, 3-quvur yolg'iz o'zi 2 soatda bo'shatadi. 3 ta quvur bir vaqtda ochilsa, basseyn necha soatda to'ladi?",

    options: ["20 soatda", "30 soatda", "40 soatda", "15 soatda"],

    correctAnswer: 1,

    difficulty: -0.2,

    category: "Matematik modellashtirish (Ish)"

  },
  {

    id: "v1_q6",

    variant: 1,

    text: "Hisoblang: \\(\\sqrt{\\frac{12}{25} \\cdot \\sqrt[3]{\\frac{244}{15 \\cdot (38^2 - 23^2)}}}\\)",

    options: ["0.8", "0.6", "0.2", "0.4"],

    correctAnswer: 3,

    difficulty: 0.6,

    category: "Sonlar va amallar"

  },
  {

    id: "v1_q7",

    variant: 1,

    text: "Ishorasi almashinuvchi geometrik progressiyada \\(b_1 = a - 5\\), \\(b_2 = a + 4\\), \\(b_3 = 5a + 8\\) bo'lsa, \\(b_4\\) ni toping.",

    options: ["\\(\\frac{1}{4}\\)", "\\(-\\frac{1}{4}\\)", "4", "-4"],

    correctAnswer: 0,

    difficulty: 0.9,

    category: "Progressiyalar"

  },
  {

    id: "v1_q8",

    variant: 1,

    text: "Soddalashtiring: \\(\\frac{1}{(x+y)^2} \\cdot \\left(\\frac{1}{x^2} + \\frac{1}{y^2}\\right) + \\frac{2}{(x+y)^3} \\cdot \\left(\\frac{1}{x} + \\frac{1}{y}\\right)\\)",

    options: ["\\(\\frac{1}{xy}\\)", "\\(\\frac{1}{x^2 y^2}\\)", "1", "\\(x + y\\)"],

    correctAnswer: 1,

    difficulty: 0.8,

    category: "Algebraik shakl almashtirishlar"

  },
  {

    id: "v1_q9",

    variant: 1,

    text: "Tenglama nechta haqiqiy ildizga ega: \\(2x^2 - 5x + 4 = 0\\)",

    options: ["Haqiqiy ildizga ega emas", "1 ta", "2 ta", "Cheksiz ko'p yechimga ega"],

    correctAnswer: 0,

    difficulty: -1.2,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v1_q10",

    variant: 1,

    text: "Hisoblang: \\(2 \\sin \\frac{7\\pi}{6} + \\cos^2 \\frac{7\\pi}{4}\\)",

    options: ["\\(-\\frac{1}{4}\\)", "\\(-\\frac{1}{2}\\)", "0", "\\(\\frac{1}{2}\\)"],

    correctAnswer: 1,

    difficulty: -0.4,

    category: "Trigonometriya"

  },
  {

    id: "v1_q11",

    variant: 1,

    text: "Agar \\(a > 5\\) bo'lsa, \\(\\sqrt{(3 - a)^2} - \\sqrt{(a - 5)^2}\\) ni hisoblang.",

    options: ["1", "\\(-2a + 8\\)", "2", "Aniqlab bo'lmaydi"],

    correctAnswer: 2,

    difficulty: -0.6,

    category: "Algebraik shakl almashtirishlar"

  },
  {

    id: "v1_q12",

    variant: 1,

    text: "Agar \\(\\frac{a}{b} = 4\\) va \\(\\frac{b}{c} = 10\\) bo'lsa, \\(\\frac{a^2 + b^2 + c^2}{ac} + \\frac{a}{c}\\) ni hisoblang.",

    options: ["\\(81 \\frac{21}{40}\\)", "\\(82 \\frac{21}{40}\\)", "\\(80 \\frac{21}{40}\\)", "\\(81 \\frac{21}{34}\\)"],

    correctAnswer: 1,

    difficulty: 0.7,

    category: "Algebraik shakl almashtirishlar"

  },
  {

    id: "v1_q13",

    variant: 1,

    text: "Soddalashtiring: \\(\\frac{2\\cos\\alpha + \\cos 3\\alpha + \\cos 5\\alpha}{\\cos 3\\alpha + \\sin\\alpha \\sin 2\\alpha}\\)",

    options: ["\\(\\cos 2\\alpha\\)", "\\(4\\cos^2\\alpha\\)", "\\(4\\sin^2\\alpha\\)", "\\(\\cos\\alpha\\)"],

    correctAnswer: 1,

    difficulty: 1.0,

    category: "Trigonometriya"

  },
  {

    id: "v1_q14",

    variant: 1,

    text: "Tenglama nechta haqiqiy ildizga ega: \\(3 \\cdot 4^x + 2 \\cdot 25^x = 5 \\cdot 10^x\\)",

    options: ["Haqiqiy ildizga ega emas", "1 ta", "2 ta", "Cheksiz ko'p"],

    correctAnswer: 2,

    difficulty: 1.1,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v1_q15",

    variant: 1,

    text: "Quyidagilardan toq funksiyani toping.",

    options: [

      "\\(f(x) = \\frac{\\sin x + x^3}{\\cos x - 1}\\)",

      "\\(f(x) = \\frac{\\cos x + x^3}{\\sin x - 1}\\)",

      "\\(f(x) = \\frac{\\tan x + x^3}{\\sin x - 1}\\)",

      "\\(f(x) = \\frac{\\cot x + x^2}{\\cos x - 1}\\)"

    ],

    correctAnswer: 0,

    difficulty: 0.5,

    category: "Funksiyalar"

  },
  {

    id: "v1_q16",

    variant: 1,

    text: "Tenglamaning haqiqiy ildizlari yig'indisini toping: \\(x^2 + 4x + 1 = 2\\sqrt{x^2 + 4x + 4}\\)",

    options: ["-4", "4", "-2", "-6"],

    correctAnswer: 0,

    difficulty: 0.8,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v1_q17",

    variant: 1,

    text: "Tengsizlikni qanoatlantiradigan butun yechimlari nechta: \\(||2x - 1| - 7| \\le 5\\)",

    options: ["20 ta", "12 ta", "10 ta", "8 ta"],

    correctAnswer: 2,

    difficulty: 0.4,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v1_q18",

    variant: 1,

    text: "Tengsizlikni yeching: \\(\\frac{\\sqrt{4 - x^2}}{x + 1} \\ge 0\\)",

    options: ["\\([-2; 2]\\)", "\\((-1; 2]\\)", "\\((-1; \\infty)\\)", "\\(\\{-2\\} \\cup (-1; 2]\\)"],

    correctAnswer: 3,

    difficulty: 0.7,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v1_q19",

    variant: 1,

    text: "Hisoblang: \\(32^3 \\cdot 8^{12} \\cdot 125^{17}\\) ko'paytma necha xonali son bo'ladi?",

    options: ["52", "51", "50", "17"],

    correctAnswer: 0,

    difficulty: -0.2,

    category: "Sonlar va amallar"

  },
  {

    id: "v1_q20",

    variant: 1,

    text: "Tengsizlikni yeching: \\(\\log_{\\cos 2x}(\\sin 2x) \\le 1\\)",

    options: [

      "\\(\\left[\\frac{\\pi}{8} + \\pi k; \\frac{\\pi}{4} + \\pi k\\right], k \\in Z\\)",

      "\\(\\left[\\frac{\\pi}{8} + \\pi k; \\frac{5\\pi}{8} + \\pi k\\right], k \\in Z\\)",

      "\\(\\left[\\frac{\\pi}{8} + \\pi k; \\frac{\\pi}{4} + \\pi k\\right), k \\in Z\\)",

      "\\(\\left[\\frac{\\pi}{4} + 2\\pi k; \\frac{5\\pi}{4} + 2\\pi k\\right), k \\in Z\\)"

    ],

    correctAnswer: 2,

    difficulty: 1.8,

    category: "Tenglama va tengsizliklar (Logarifm)"

  },
  {

    id: "v1_q21",

    variant: 1,

    text: "Funksiya berilgan: \\(f(g^{-1}(g(x)) + 1) = x^2 + 5x + 6\\). Bu yerda \\(g^{-1}(x)\\) — \\(g(x)\\) ning teskarisi. \\(f(-1)\\) ning qiymatini toping.",

    options: ["-1", "2", "1", "0"],

    correctAnswer: 3,

    difficulty: 0.9,

    category: "Funksiyalar"

  },
  {

    id: "v1_q22",

    variant: 1,

    text: "Funksiya berilgan: \\(f(x) = \\sin^2 5x - |\\cos 2x + x|\\). Hosila \\(f'\\left(-\\frac{\\pi}{6}\\right)\\) ning qiymatini toping.",

    options: ["\\(\\frac{7\\sqrt{3} + 2}{2}\\)", "\\(-\\sqrt{3} + 1\\)", "\\(\\frac{3\\sqrt{3} + 4}{2}\\)", "\\(\\frac{3\\sqrt{3} - 2}{2}\\)"],

    correctAnswer: 2,

    difficulty: 1.5,

    category: "Matematik analiz asoslari (Hosila)"

  },
  {

    id: "v1_q23",

    variant: 1,

    text: "Chizmadagi ma'lumotlardan foydalanib \\(x\\) ni toping. \\((AB \\parallel EF)\\)<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='240' height='160' viewBox='0 0 240 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><polygon points='20,130 110,20 220,130' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='165' y1='75' x2='120' y2='130' stroke='#22d3ee' stroke-width='2'/><text x='110' y='15' fill='#f3f4f6' font-size='12' text-anchor='middle'>B</text><text x='12' y='140' fill='#f3f4f6' font-size='12'>A</text><text x='222' y='140' fill='#f3f4f6' font-size='12'>C</text><text x='170' y='70' fill='#22d3ee' font-size='12'>E</text><text x='120' y='145' fill='#22d3ee' font-size='12'>F</text><text x='60' y='75' fill='#9ca3af' font-size='11'>16</text><text x='140' y='95' fill='#9ca3af' font-size='11'>12</text><text x='170' y='125' fill='#22d3ee' font-size='11'>x</text><line x1='20' y1='150' x2='220' y2='150' stroke='#f87171' stroke-width='1.5'/><text x='120' y='148' fill='#f87171' font-size='11' text-anchor='middle'>20</text></svg></div>",

    options: ["10", "15", "12", "8"],

    correctAnswer: 2,

    difficulty: 0.3,

    category: "Geometriya (O'xshashlik)"

  },
  {

    id: "v1_q24",

    variant: 1,

    text: "Tekislikka ikkita \\(AB\\) va \\(BC\\) og'ma va \\(BH\\) perpendikulyar tushirilgan. Bunda \\(BH = HC\\), \\(AB = 2HC\\), \\(\\angle AHC = 90^\\circ\\) bo'lsa, \\(\\angle BAC\\) ni toping.",

    options: ["\\(\\frac{3}{4}\\) (cos qiymati)", "\\(\\frac{3}{5}\\)", "\\(\\frac{2}{3}\\)", "\\(\\frac{1}{2}\\)"],

    correctAnswer: 0,

    difficulty: 1.3,

    category: "Geometriya (Stereometriya)"

  },
  {

    id: "v1_q25",

    variant: 1,

    text: "Tomoni 4 ga teng bo'lgan kvadratga doira ichki chizilgan. Doiraning yuzini toping.",

    options: ["\\(16\\pi\\)", "\\(\\pi\\)", "\\(2\\pi\\)", "\\(4\\pi\\)"],

    correctAnswer: 3,

    difficulty: -0.8,

    category: "Geometriya (Doira)"

  },
  {

    id: "v1_q26",

    variant: 1,

    text: "ABC uchburchakda \\(\\angle BAC = 90^\\circ\\) va \\(\\angle BCA = 30^\\circ\\) bo'lib, \\(BD\\) bissektrisa \\(2\\sqrt{2}\\) ga teng bo'lsa, ABC uchburchak yuzini toping.",

    options: ["\\(2\\sqrt{3}\\)", "\\(2\\sqrt{2}\\)", "\\(3\\sqrt{2}\\)", "\\(3\\sqrt{3}\\)"],

    correctAnswer: 3,

    difficulty: 0.9,

    category: "Geometriya (Planimetriya)"

  },
  {

    id: "v1_q27",

    variant: 1,

    text: "Diagonallar soni tomonlar sonidan 6 marta ko'p bo'lgan ko'pburchakning ichki burchaklar yig'indisini toping.",

    options: ["2700°", "1800°", "2340°", "2400°"],

    correctAnswer: 2,

    difficulty: 0.4,

    category: "Geometriya (Planimetriya)"

  },
  {

    id: "v1_q28",

    variant: 1,

    text: "Rombning katta diagonali \\(10\\sqrt{4 + 2\\sqrt{2}}\\) ga teng. O'tkir burchagi 45° bo'lsa, diagonallari kesishish nuqtasidan tomonlarigacha bo'lgan eng qisqa masofalar yig'indisini toping.",

    options: ["10", "20", "15", "25"],

    correctAnswer: 1,

    difficulty: 1.6,

    category: "Geometriya (Planimetriya)"

  },
  {

    id: "v1_q29",

    variant: 1,

    text: "Hisoblang: \\(\\int_{-3}^{4} 2x^2 |2x| dx\\)",

    options: ["187", "175", "337", "222"],

    correctAnswer: 2,

    difficulty: 1.4,

    category: "Matematik analiz asoslari (Integral)"

  },
  {

    id: "v1_q30",

    variant: 1,

    text: "Ushbu chizmadagi Venn diagrammasidan foydalanib \\((A \\cap B) \\cup (A \\cup B)'\\) to'plam elementlar sonini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='260' height='160' viewBox='0 0 260 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><circle cx='120' cy='80' r='40' fill='none' stroke='#a78bfa' stroke-width='2'/><circle cx='170' cy='80' r='40' fill='none' stroke='#22d3ee' stroke-width='2'/><text x='110' y='35' fill='#a78bfa' font-size='12' font-weight='bold'>A</text><text x='180' y='35' fill='#22d3ee' font-size='12' font-weight='bold'>B</text><rect x='10' y='10' width='240' height='140' fill='none' stroke='#9ca3af' stroke-width='1'/><text x='235' y='140' fill='#9ca3af' font-size='12'>U</text><text x='30' y='40' fill='#f3f4f6' font-size='11'>10</text><text x='25' y='75' fill='#f3f4f6' font-size='11'>11</text><text x='35' y='105' fill='#f3f4f6' font-size='11'>4</text><text x='20' y='135' fill='#f3f4f6' font-size='11'>9</text><text x='95' y='55' fill='#f3f4f6' font-size='11'>12</text><text x='90' y='85' fill='#f3f4f6' font-size='11'>1</text><text x='100' y='115' fill='#f3f4f6' font-size='11'>8</text><text x='145' y='55' fill='#fbbf24' font-size='11'>3</text><text x='145' y='85' fill='#fbbf24' font-size='11'>5</text><text x='145' y='115' fill='#fbbf24' font-size='11'>7</text><text x='185' y='55' fill='#f3f4f6' font-size='11'>8</text><text x='190' y='85' fill='#f3f4f6' font-size='11'>14</text><text x='180' y='115' fill='#f3f4f6' font-size='11'>17</text></svg></div>",

    options: ["5", "7", "6", "9"],

    correctAnswer: 1,

    difficulty: 0.5,

    category: "To'plamlar"

  },
  {

    id: "v2_q1",

    variant: 2,

    text: "Natural \\(a\\) va \\(b\\) sonlar uchun \\(a + b = 111\\) tenglik bajarilsa, \\(ab - 1\\) ayirmaning eng katta qiymatini toping.",

    options: ["2555", "3079", "110", "1"],

    correctAnswer: 1,

    difficulty: -0.8,

    category: "Sonlar va amallar"

  },
  {

    id: "v2_q2",

    variant: 2,

    text: "Hisoblang: \\(\\frac{1-3+5-7+9-11+\\dots+2021-2023}{1-2+3-4+5-6+\\dots+2021-2022}\\)",

    options: ["1", "-1", "\\(-\\frac{1012}{1011}\\)", "\\(\\frac{1012}{1011}\\)"],

    correctAnswer: 3,

    difficulty: 0.4,

    category: "Sonlar va amallar (Keltirish)"

  },
  {

    id: "v2_q3",

    variant: 2,

    text: "Hisoblang: \\(\\frac{10^{55} + 10^{54} + 10^{50}}{10^{49} + 10^{53} + 10^{54}}\\)",

    options: ["100", "1", "10", "1000"],

    correctAnswer: 2,

    difficulty: -0.6,

    category: "Sonlar va amallar"

  },
  {

    id: "v2_q4",

    variant: 2,

    text: "Ikki ishchi bir ishning \\(\\frac{2}{3}\\) qismini 4 kunda bajara oladi. Agar ular alohida ishlasa, birinchi ishchi ishni ikkinchisidan 5 kun oldinroq bajarib tugatadi. Yolg'iz ishlaganda birinchi ishchi ishni necha kunda tugatadi?",

    options: ["10", "12", "15", "20"],

    correctAnswer: 0,

    difficulty: 0.8,

    category: "Matematik modellashtirish (Ish)"

  },
  {

    id: "v2_q5",

    variant: 2,

    text: "500 kg ruda tarkibidan 12.5% temir bo'lgan 200 kg ruda ajratib olindi. Qolgan rudada temir ulushi dastlabkidan 20% ga ortdi. Dastlab ruda tarkibida necha kg temir bo'lgan?",

    options: ["212.5 kg", "202.5 kg", "45 kg", "205 kg"],

    correctAnswer: 1,

    difficulty: 1.2,

    category: "Matematik modellashtirish (Foizlar)"

  },
  {

    id: "v2_q6",

    variant: 2,

    text: "Hisoblang: \\(\\sqrt{\\frac{2022 \\cdot 2024 + 1}{2024 \\cdot 2030 + 9} \\cdot \\frac{2026 \\cdot 2028 + 1}{2020 \\cdot 2026 + 9}} - 1 + \\sqrt{25}\\)",

    options: ["2021", "2022", "6", "5"],

    correctAnswer: 3,

    difficulty: 0.5,

    category: "Sonlar va amallar"

  },
  {

    id: "v2_q7",

    variant: 2,

    text: "Arifmetik progressiyada \\(a_5 + a_{n-4} = 24\\) va \\(S_n = 96\\) bo'lsa, \\(n\\) ni toping.",

    options: ["7", "9", "4", "8"],

    correctAnswer: 3,

    difficulty: -0.3,

    category: "Progressiyalar"

  },
  {

    id: "v2_q8",

    variant: 2,

    text: "Birinchi hadi 5 dan katta bo'lgan geometrik progressiyada \\(b_1 + b_2 + b_3 = 21\\) va \\(b_3 + b_4 + b_5 = 84\\) bo'lsa, uning dastlabki olti hadi yig'indisini toping.",

    options: ["25", "-174", "20", "-147"],

    correctAnswer: 3,

    difficulty: 1.0,

    category: "Progressiyalar"

  },
  {

    id: "v2_q9",

    variant: 2,

    text: "Soddalashtiring: \\(\\frac{a^2 + b^2}{a + b} : \\left(\\frac{a^2 + b^2}{ab} + \\frac{b^2}{a^2 - ab} - \\frac{a^2}{ab + b^2}\\right)\\)",

    options: ["1", "\\(a^2 + b^2\\)", "\\(a + b\\)", "\\(a - b\\)"],

    correctAnswer: 3,

    difficulty: 0.9,

    category: "Algebraik shakl almashtirishlar"

  },
  {

    id: "v2_q10",

    variant: 2,

    text: "Tenglamani yeching: \\(x + \\frac{x}{1 + 2} + \\frac{x}{1 + 2 + 3} + \\dots + \\frac{x}{1 + 2 + 3 + \\dots + 7} = 7\\)",

    options: ["5", "4", "3", "2"],

    correctAnswer: 3,

    difficulty: 0.6,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v2_q11",

    variant: 2,

    text: "Agar \\(a < a^3 < a^2\\), \\(b^3 < b < b^2\\), \\(c^3 < c^2 < c\\) bo'lsa, \\(\\frac{ab|b-c-1|}{|ab|} + \\frac{bc|a+c+1|}{|bc|} + \\frac{ac|a+1+b|}{|ac|}\\) ni soddalashtiring.",

    options: ["1", "-1", "\\(-2a - 2b - 2c - 3\\)", "\\(a + b\\)"],

    correctAnswer: 2,

    difficulty: 1.7,

    category: "Algebraik shakl almashtirishlar"

  },
  {

    id: "v2_q12",

    variant: 2,

    text: "Soddalashtiring: \\(2 \\tan 53^\\circ \\left(\\frac{1}{\\sin 106^\\circ} + \\frac{1}{\\tan 106^\\circ}\\right)\\)",

    options: ["\\(\\tan^2 53^\\circ\\)", "1", "2", "\\(\\tan 53^\\circ\\)"],

    correctAnswer: 2,

    difficulty: 0.8,

    category: "Trigonometriya"

  },
  {

    id: "v2_q13",

    variant: 2,

    text: "Agar \\(a - b = 4\\) bo'lsa, \\(\\frac{a^2 - b^2 + 3a - 3b}{a^2 - b^2 + 6a + 9}\\) ni hisoblang.",

    options: ["\\(\\frac{1}{4}\\)", "\\(\\frac{7}{4}\\)", "1", "\\(\\frac{4}{7}\\)"],

    correctAnswer: 3,

    difficulty: -0.1,

    category: "Algebraik shakl almashtirishlar"

  },
  {

    id: "v2_q14",

    variant: 2,

    text: "Tengsizlikning \\([2; 2023]\\) oraliqda nechta natural yechimi bor: \\(2^x + 3^x + 4^x + 5^x > 54\\)",

    options: ["2021", "2023", "0", "2022"],

    correctAnswer: 3,

    difficulty: -0.5,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v2_q15",

    variant: 2,

    text: "Quyidagi funksiyalardan nechtasi toq?<br>1) \\(y = 2^x + 2^{-x}\\)<br>2) \\(y = x\\sqrt{1 + x^2}\\)<br>3) \\(y = 1 + \\sin 2x\\)<br>4) \\(y = \\log_2(x + \\sqrt{1 + x^2})\\)",

    options: ["1 tasi", "2 tasi", "3 tasi", "4 tasi"],

    correctAnswer: 1,

    difficulty: 0.4,

    category: "Funksiyalar"

  },
  {

    id: "v2_q16",

    variant: 2,

    text: "Tenglamaning haqiqiy ildizlari sonini toping: \\(x^2 + \\frac{4x^2}{(5x + 2)^2} = \\frac{9}{5}\\)",

    options: ["4", "3", "2", "1"],

    correctAnswer: 2,

    difficulty: 1.9,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v2_q17",

    variant: 2,

    text: "Tenglama ildizlari \\(x\\) va \\(y\\) bo'lsa, \\(x \\cdot y\\) ni toping: \\(|x + y - 12| + (x - y - 2)^2 = 0\\)",

    options: ["25", "28", "35", "30"],

    correctAnswer: 2,

    difficulty: -0.7,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v2_q18",

    variant: 2,

    text: "Tengsizlikning \\([1; 2023]\\) kesmada nechta natural yechimi bor: \\(\\frac{\\pi x - \\sqrt{10}}{\\pi - \\sqrt{10}} < 0\\)",

    options: ["2023", "2021", "1", "2022"],

    correctAnswer: 2,

    difficulty: -0.9,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v2_q19",

    variant: 2,

    text: "Aholining elektr energiyasiga bo'lgan talabi har yili 2.5% ortsa, necha yilda 9 marta ortadi?",

    options: ["\\(\\log_9 1.025\\)", "\\(\\log_9 0.025\\)", "\\(\\log_{1.025} 9\\)", "\\(\\log_{0.025} 9\\)"],

    correctAnswer: 2,

    difficulty: 1.1,

    category: "Logarifm"

  },
  {

    id: "v2_q20",

    variant: 2,

    text: "Tengsizlikning butun yechimlari nechta: \\(3^{\\log_3\\sqrt{x - 6}} > 3^{\\log_3(x - 4)}\\)",

    options: ["3", "2", "4", "0"],

    correctAnswer: 3,

    difficulty: 0.8,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v2_q21",

    variant: 2,

    text: "Tengsizlikning \\([-4; 5]\\) oraliqdagi butun yechimlari yig'indisini toping: \\((2x + 3)(x^2 + 3x) - \\frac{16(2x + 3)}{x^2 + 3x} \\ge 0\\)",

    options: ["15", "9", "8", "10"],

    correctAnswer: 1,

    difficulty: 1.5,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v2_q22",

    variant: 2,

    text: "Agar \\(y = \\cos^n x \\cdot \\cos nx\\) bo'lsa, hosilasi \\(y'(x)\\) ni toping.",

    options: [

      "\\(n \\cdot \\cos^{n-1} x \\cdot \\sin(nx - x)\\)",

      "\\(-n \\cdot \\cos^{n-1} x \\cdot \\cos(nx + x)\\)",

      "\\(-n \\cdot \\cos^{n-1} x \\cdot \\sin(nx + x)\\)",

      "\\(n \\cdot \\cos^{n-1} x \\cdot \\sin(nx + x)\\)"

    ],

    correctAnswer: 2,

    difficulty: 2.0,

    category: "Matematik analiz asoslari (Hosila)"

  },
  {

    id: "v2_q23",

    variant: 2,

    text: "Soddalashtiring: \\(\\frac{1}{\\cos x \\cos 2x} + \\frac{1}{\\cos 2x \\cos 3x} + \\frac{1}{\\cos 3x \\cos 4x} + \\dots + \\frac{1}{\\cos 2022x \\cos 2023x}\\)",

    options: [

      "\\(\\frac{\\sin 2022x}{\\sin 2x \\cos 2023x}\\)",

      "\\(\\frac{\\sin 2023x}{\\cos x \\cos 2022x}\\)",

      "\\(\\frac{2\\sin 2022x}{\\sin 2x \\cos 2023x}\\)",

      "\\(\\frac{2\\sin 2022x}{\\cos x \\cos 2023x}\\)"

    ],

    correctAnswer: 3,

    difficulty: 2.2,

    category: "Trigonometriya"

  },
  {

    id: "v2_q24",

    variant: 2,

    text: "Aylanada A, B, C, D nuqtalar olingan. O — aylana markazi. A va D nuqtalar bilan bir to'g'ri chiziqda yotadi. Agar \\(\\angle ABC = 30^\\circ\\) va \\(OD = 3\\) bo'lsa, CD ni toping.",

    options: ["3", "4", "\\(\\sqrt{3}\\)", "3\\(\\sqrt{3}\\)"],

    correctAnswer: 0,

    difficulty: 0.7,

    category: "Geometriya (Aylana)"

  },
  {

    id: "v2_q25",

    variant: 2,

    text: "ABC uchburchakda AD, BN, CM medianalar kesishgan nuqtasi G nuqta bo'lsin. Agar ABC uchburchak yuzasi 48 ga teng bo'lsa, GDN uchburchak yuzini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='240' height='160' viewBox='0 0 240 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><polygon points='30,130 120,20 210,130' fill='none' stroke='#a78bfa' stroke-width='2'/><polygon points='120,130 165,75 120,93' fill='rgba(34,211,238,0.25)' stroke='#22d3ee' stroke-width='1.5'/><line x1='30' y1='130' x2='165' y2='75' stroke='#9ca3af' stroke-dasharray='2'/><line x1='120' y1='20' x2='120' y2='130' stroke='#9ca3af' stroke-dasharray='2'/><line x1='210' y1='130' x2='75' y2='75' stroke='#9ca3af' stroke-dasharray='2'/><text x='120' y='15' fill='#f3f4f6' font-size='11' text-anchor='middle'>B</text><text x='20' y='140' fill='#f3f4f6' font-size='11'>A</text><text x='215' y='140' fill='#f3f4f6' font-size='11'>C</text><text x='168' y='71' fill='#9ca3af' font-size='10'>D</text><text x='120' y='143' fill='#9ca3af' font-size='10' text-anchor='middle'>N</text><text x='68' y='71' fill='#9ca3af' font-size='10'>M</text><text x='112' y='92' fill='#fbbf24' font-size='10'>G</text></svg></div>",

    options: ["5", "4", "3", "12"],

    correctAnswer: 1,

    difficulty: 0.6,

    category: "Geometriya (Planimetriya)"

  },
  {

    id: "v2_q26",

    variant: 2,

    text: "A(-10; -3), B(-4; 5), C(5; 5) va D(11; -3) nuqtalardan o'tuvchi aylana radiusini toping.",

    options: ["10 5/8", "11 5/8", "8 6/7", "7 6/7"],

    correctAnswer: 0,

    difficulty: 1.4,

    category: "Geometriya (Koordinatalar)"

  },
  {

    id: "v2_q27",

    variant: 2,

    text: "Tomoni 4 bo'lgan muntazam oltiburchakning uchta tomonining o'rtalarini tutashtirib muntazam uchburchak yasalgan. Hosil bo'lgan bo'yalgan soha yuzini toping.",

    options: ["1", "6\\(\\sqrt{3}\\)", "2\\(\\sqrt{3}\\)", "\\(\\sqrt{3}\\)"],

    correctAnswer: 2,

    difficulty: 1.6,

    category: "Geometriya (Planimetriya)"

  },
  {

    id: "v2_q28",

    variant: 2,

    text: "Tekis burchagi 60° bo'lgan ikki yoqli burchakning qirrasida A va B nuqtalar olingan. Ikki yoqli burchakning turli yoqlarida A1, B1 nuqtalardan qirraga perpendikulyar tushirilib, AA1=16 va BB1=13 hosil qilingan. Agar A1B1 = 17 bo'lsa, AB masofani toping.",

    options: ["\\(\\sqrt{202}\\)", "\\(\\sqrt{53}\\)", "6\\(\\sqrt{2}\\)", "\\(\\sqrt{506}\\)"],

    correctAnswer: 3,

    difficulty: 1.8,

    category: "Geometriya (Stereometriya)"

  },
  {

    id: "v2_q29",

    variant: 2,

    text: "Agar \\(y = ax^2 + bx + c\\) funksiya uchun \\(f'(1) = 0\\), \\(f(2) - f'(2) = 1\\) va \\(\\int_0^1 f(x)dx = \\frac{2}{3}\\) bo'lsa, \\(b - a - c\\) ning qiymatini toping.",

    options: ["\\(\\frac{1}{4}\\)", "\\(\\frac{3}{4}\\)", "1", "0"],

    correctAnswer: 0,

    difficulty: 1.3,

    category: "Matematik analiz asoslari"

  },
  {

    id: "v2_q30",

    variant: 2,

    text: "\\(ABCDA_1B_1C_1D_1\\) kubda \\(\\vec{BC} + \\vec{CD}\\) va \\(\\vec{D_1A_1} + \\vec{A_1B}\\) vektorlar orasidagi burchak kosinusini toping.",

    options: ["\\(\\frac{\\sqrt{6}}{3}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{\\sqrt{3}}{4}\\)", "\\(-\\frac{\\sqrt{6}}{3}\\)"],

    correctAnswer: 3,

    difficulty: 1.1,

    category: "Geometriya (Vektorlar)"

  },
  {

    id: "v3_q1",

    variant: 3,

    text: "A to'plamning elementlar soni 9 ta, B to'plamning elementlar soni 7 ta, U universal to'plam elementlar soni 16 ta. \\((A \\cup B)'\\) to'plam elementlar soni eng ko'pi bilan nechaga teng bo'la oladi?",

    options: ["7", "13", "17", "11"],

    correctAnswer: 0,

    difficulty: -0.3,

    category: "To'plamlar"

  },
  {

    id: "v3_q2",

    variant: 3,

    text: "10 kishidan 1 ta boshliq, 2 ta yordamchi va 2 ta mutaxassisni necha xil usulda tanlash mumkin?",

    options: ["7850", "7560", "3780", "3840"],

    correctAnswer: 1,

    difficulty: 0.9,

    category: "Kombinatorika"

  },
  {

    id: "v3_q3",

    variant: 3,

    text: "Gipotenuzasi \\(4\\sqrt{2}\\) bo'lgan to'g'ri burchakli uchburchakning to'g'ri burchagi bissektrisasi uni ikkita teng yonli uchburchakka ajratadi. Ushbu uchburchak gipotenuza atrofida 360° ga aylantirildi. Hosil bo'lgan jismning to'la sirti yuzini toping. \\((\\pi \\approx 3)\\)",

    options: ["\\(16\\sqrt{2}\\)", "32", "\\(32\\sqrt{2}\\)", "\\(48\\sqrt{2}\\)"],

    correctAnswer: 3,

    difficulty: 1.7,

    category: "Geometriya (Stereometriya)"

  },
  {

    id: "v3_q4",

    variant: 3,

    text: "Tenglamani yeching: \\((x^2 - x - 1)^3 + (x^2 - 3x + 2)^3 = (2x^2 - 4x + 1)^3\\)",

    options: ["3 ta haqiqiy ildizga ega", "4 ta haqiqiy ildizga ega", "5 ta", "Ildizga ega emas"],

    correctAnswer: 1,

    difficulty: 1.4,

    category: "Tenglama va tengsizliklar"

  },
  {

    id: "v3_q5",

    variant: 3,

    text: "Tenglamani yeching: \\(\\frac{\\sin 2^x}{\\sin 2^{x-2} \\cos 2^{x-2}} = 2\\sqrt{3}\\)",

    options: ["(0; 5) oraliqda 2 ta ildizga ega", "(0; 5) oraliqda 3 ta ildizga ega", "(0; 5) oraliqda ildizi yo'q", "Cheksiz ko'p"],

    correctAnswer: 0,

    difficulty: 1.6,

    category: "Trigonometriya"

  },
  {

    id: "v3_q6",

    variant: 3,

    text: "Parabola \\(y = g'(x)\\) funksiya grafigi bo'lib, (2;7), (4; 3) va (6; -9) nuqtalardan o'tishi ma'lum. \\(y = g(x)\\) funksiya grafigining \\(x_0 = -2\\) nuqtasiga o'tkazilgan urinmaning burchak koeffitsientini toping.",

    options: ["-9", "9", "-12", "-25"],

    correctAnswer: 3,

    difficulty: 1.5,

    category: "Matematik analiz asoslari (Urinma)"

  },
  {

    id: "v3_q7",

    variant: 3,

    text: "ABCD kvadrat. \\(BD\\) diagonalning D uchi davomida E nuqta olingan va \\(DE = 3\\). Agar kvadratning diagonali 18 bo'lsa, \\(CE\\) kesma uzunligini toping.",

    options: ["\\(3\\sqrt{7}\\)", "15", "\\(3\\sqrt{37}\\)", "21"],

    correctAnswer: 2,

    difficulty: 0.9,

    category: "Geometriya (Planimetriya)"

  },
  {

    id: "v3_q8",

    variant: 3,

    text: "Grafigi OY o'qiga nisbatan simmetrik bo'lgan \\(y = n\\sqrt[3]{x^2 + m} + d\\) funksiya grafigi (0; 4) va (1; 3) nuqtalardan o'tadi. \\(n + m + d\\) ning qiymatini toping.",

    options: ["4", "5", "6", "3"],

    correctAnswer: 0,

    difficulty: 1.2,

    category: "Funksiyalar"

  },
  {

    id: "v3_q9",

    variant: 3,

    text: "O'tkir burchakli ABC uchburchakning BH va AD balandliklari mos ravishda F va E nuqtalarni \\(\\angle EFC = \\angle BEC = 90^\\circ\\) bo'ladigan qilib kesib o'tadi. Agar \\(AH = 5\\), \\(HC = 3\\) va \\(BD = 2\\) bo'lsa, CE kesma uzunligini toping.",

    options: ["4", "\\(\\sqrt{15}\\)", "3", "5"],

    correctAnswer: 1,

    difficulty: 1.8,

    category: "Geometriya (Planimetriya)"

  },
  {

    id: "v3_q10",

    variant: 3,

    text: "Qirrasi \\(6\\sqrt{2}\\) bo'lgan muntazam tetraedrga shar ichki chizilgan. Tetraedrning hajmini toping.",

    options: ["72", "36", "\\(72\\sqrt{2}\\)", "\\(36\\sqrt{2}\\)"],

    correctAnswer: 0,

    difficulty: 1.1,

    category: "Geometriya (Stereometriya)"

  },
  { id: "v3_q11", variant: 3, text: "Uchburchak tomonlari 5, 6, 7 sm bo'lsa, uning eng kichik burchagi kosinusini toping.", options: ["\\(\\frac{5}{7}\\)", "\\(\\frac{19}{35}\\)", "\\(\\frac{25}{35}\\)", "\\(\\frac{9}{14}\\)"], correctAnswer: 0, difficulty: 0.2, category: "Geometriya (Planimetriya)" },
  { id: "v3_q12", variant: 3, text: "Tenglamani yeching: \\(2^{x+2} - 2^x = 12\\)", options: ["2", "3", "1", "0"], correctAnswer: 0, difficulty: -0.9, category: "Algebra (Tenglamalar)" },
  { id: "v3_q13", variant: 3, text: "Hisoblang: \\(\\int_{0}^{\\pi/2} \\cos x dx\\)", options: ["1", "0", "\\(\\pi\\)", "0.5"], correctAnswer: 0, difficulty: -0.4, category: "Matematik tahlil (Integral)" },
  { id: "v3_q14", variant: 3, text: "Aylana uzunligi \\(10\\pi\\) sm bo'lsa, uning yuzi necha sm² bo'ladi?", options: ["\\(25\\pi\\)", "\\(100\\pi\\)", "\\(50\\pi\\)", "\\(20\\pi\\)"], correctAnswer: 0, difficulty: -1.4, category: "Geometriya (Planimetriya)" },
  { id: "v3_q15", variant: 3, text: "Hosilani toping: \\(f(x) = \\ln(3x - 2)\\)", options: ["\\(\\frac{3}{3x - 2}\\)", "\\(\\frac{1}{3x - 2}\\)", "\\(\\frac{3x}{3x - 2}\\)", "\\(3 \\ln(3x-2)\\)"], correctAnswer: 0, difficulty: -0.2, category: "Matematik tahlil (Hosila)" },
  { id: "v3_q16", variant: 3, text: "Determinantni hisoblang: \\(\\begin{vmatrix} 4 & 2 \\\\ 5 & 3 \\end{vmatrix}\\)", options: ["2", "4", "6", "0"], correctAnswer: 0, difficulty: -1.1, category: "Algebra (Matrisalar)" },
  { id: "v3_q17", variant: 3, text: "Tenglamani yeching: \\(|x - 4| = 5\\)", options: ["9 va -1", "9", "-1", "Yechimga ega emas"], correctAnswer: 0, difficulty: -1.3, category: "Algebra (Tenglamalar)" },
  { id: "v3_q18", variant: 3, text: "Progressiya uchun \\(a_1 = 3\\), \\(d = 2\\) bo'lsa, \\(a_{15}\\) ni toping.", options: ["31", "29", "33", "30"], correctAnswer: 0, difficulty: -1.5, category: "Progressiyalar" },
  { id: "v3_q19", variant: 3, text: "Vektor uzunligini toping: \\(\\vec{a}(3; 4)\\)", options: ["5", "7", "25", "4.5"], correctAnswer: 0, difficulty: -1.8, category: "Geometriya (Vektorlar)" },
  { id: "v3_q20", variant: 3, text: "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 3}\\)", options: ["\\([3; \\infty)\\)", "\\((3; \\infty)\\)", "\\((-\\infty; 3]\\)", "\\([0; \\infty)\\)"], correctAnswer: 0, difficulty: -1.6, category: "Algebra (Funksiyalar)" },
  { id: "v3_q21", variant: 3, text: "Doiradagi vatarning uzunligi 8, aylana radiusi 5. Vatardan markazgacha bo'lgan masofani toping.", options: ["3", "4", "2", "2.5"], correctAnswer: 0, difficulty: -0.8, category: "Geometriya (Planimetriya)" },
  { id: "v3_q22", variant: 3, text: "Hisoblang: \\(\\log_2 32 + \\log_3 27\\)", options: ["8", "6", "15", "5"], correctAnswer: 0, difficulty: -1.2, category: "Algebra (Logarifm)" },
  { id: "v3_q23", variant: 3, text: "Ikki tanga tashlanganda kamida bitta gerb tushish ehtimolini toping.", options: ["0.75", "0.5", "0.25", "0.66"], correctAnswer: 0, difficulty: -0.9, category: "Ehtimollar nazariyasi" },
  { id: "v3_q24", variant: 3, text: "Tenglamani yeching: \\(3^x = 243\\)", options: ["5", "4", "6", "3"], correctAnswer: 0, difficulty: -1.9, category: "Algebra (Tenglamalar)" },
  { id: "v3_q25", variant: 3, text: "Qutida 5 ta qizil va 3 ta ko'k to'p bor. Tavakkal olingan to'pning qizil bo'lish ehtimolini toping.", options: ["0.625", "0.375", "0.5", "0.6"], correctAnswer: 0, difficulty: -1.0, category: "Ehtimollar nazariyasi" },
  { id: "v3_q26", variant: 3, text: "Hosilani toping: \\(f(x) = \\sin(2x)\\)", options: ["\\(2 \\cos(2x)\\)", "\\(\\cos(2x)\\)", "\\(-2 \\cos(2x)\\)", "\\(2\\sin(x)\\)"], correctAnswer: 0, difficulty: -0.7, category: "Matematik tahlil (Hosila)" },
  { id: "v3_q27", variant: 3, text: "Funksiyaning eng kichik qiymatini toping: \\(y = x^2 - 4x + 7\\)", options: ["3", "7", "4", "2"], correctAnswer: 0, difficulty: -0.5, category: "Algebra (Funksiyalar)" },
  { id: "v3_q28", variant: 3, text: "Prizmaning asosi tomoni 6 sm bo'lgan kvadrat. Balandligi 10 sm bo'lsa, yon sirtini toping.", options: ["240 sm²", "360 sm²", "120 sm²", "180 sm²"], correctAnswer: 0, difficulty: -1.0, category: "Geometriya (Stereometriya)" },
  { id: "v3_q29", variant: 3, text: "Burchak bissektrisasi uni 20° li burchakka ajratdi. Burchakning o'zini toping.", options: ["40°", "20°", "80°", "10°"], correctAnswer: 0, difficulty: -2.0, category: "Geometriya (Burchaklar)" },
  { id: "v3_q30", variant: 3, text: "Hisoblang: \\(C_5^2\\)", options: ["10", "20", "5", "15"], correctAnswer: 0, difficulty: -1.3, category: "Kombinatorika" },
  { id: "v4_q1", variant: 4, text: "Hisoblang: \\(\\frac{\\text{EKUK}(12;6) + \\text{EKUB}(6;12)}{\\sqrt{\\text{EKUK}(12;3) \\cdot \\text{EKUB}(3;12)}}\\)", options: ["3", "9", "6", "1"], correctAnswer: 0, difficulty: -0.6, category: "Sonlar va amallar" },
  { id: "v4_q2", variant: 4, text: "Hisoblang: \\(\\frac{18}{65} \\cdot \\left(\\frac{41}{18} - \\frac{17}{36}\\right) + \\frac{7}{6} + \\left(\\frac{4}{7} + \\frac{5}{49}\\right) : \\frac{99}{49}\\)", options: ["\\(\\frac{16}{3}\\)", "6", "2", "\\(\\frac{5}{6}\\)"], correctAnswer: 2, difficulty: 0.4, category: "Sonlar va amallar" },
  { id: "v4_q3", variant: 4, text: "Oltin va kumush qotishmasining massasi 1.06 kg. Qotishmani suvga solganda 70 gr massasini yo'qotdi. Oltin suvda o'z massasining \\(\\frac{1}{19}\\) qismini, kumush esa \\(\\frac{1}{10}\\) qismini yo'qotsa, oltin va kumushning dastlabki massalarini aniqlang.", options: ["Oltin 760g, kumush 300g", "Oltin 490g, kumush 570g", "Oltin 630g, kumush 430g", "Oltin 570g, kumush 490g"], correctAnswer: 0, difficulty: 1.2, category: "Matematik modellashtirish" },
  { id: "v4_q4", variant: 4, text: "O'qishga qabul qilish uchun 5000 nafar talabaga kvota ajratilgan. Ketma-ket uch yil bir xil foizga qabul kvotasi oshirildi va kvota soni 6655 taga yetdi. Qabul kvotasi har yili necha foizga oshirilgan?", options: ["11%", "10%", "12%", "15%"], correctAnswer: 1, difficulty: 0.9, category: "Matematik modellashtirish" },
  { id: "v4_q5", variant: 4, text: "Hisoblang: \\(\\sqrt{\\sqrt{47} - \\sqrt{31}} \\cdot \\sqrt{\\sqrt{47} + \\sqrt{31}}\\)", options: ["7", "5", "6", "4"], correctAnswer: 3, difficulty: -0.3, category: "Algebraik shakl almashtirishlar" },
  { id: "v4_q6", variant: 4, text: "Agar \\(m, n \\in N\\) uchun \\(3^8 \\cdot 2^{10} \\cdot 3^{-4} \\cdot 2^{-4} = 2^m \\cdot 3^n\\) bo'lsa, \\(m+n\\) ni toping.", options: ["11", "9", "10", "8"], correctAnswer: 2, difficulty: -0.5, category: "Algebraik shakl almashtirishlar" },
  { id: "v4_q7", variant: 4, text: "Arifmetik progressiyaning birinchi hadi 8, oxirgi hadi esa 74 ga teng. Ayirmasi butun son bo'lib u 3 va 9 sonlari orasida yotsa, progressiya yig'indisini toping.", options: ["462", "492", "512", "382"], correctAnswer: 1, difficulty: 0.8, category: "Progressiyalar" },
  { id: "v4_q8", variant: 4, text: "Ketma-ketlik berilgan: \\(b_n = \\frac{2^n}{3^{n-1}}\\). Ushbu ketma-ketlikning barcha hadlari yig'indisini toping.", options: ["6", "1", "2", "3"], options: ["6", "1", "2", "3"], correctAnswer: 0, difficulty: 1.1, category: "Progressiyalar" },
  { id: "v4_q9", variant: 4, text: "Agar \\(x > 3\\) bo'lsa, \\(\\frac{\\sqrt{9+6x+x^2} - \\sqrt{9-6x+x^2}}{\\sqrt{9+6x+x^2} + \\sqrt{9-6x+x^2}}\\) ni hisoblang.", options: ["\\(-\\frac{3}{x}\\)", "\\(\\frac{x}{3}\\)", "\\(\\frac{3}{x}\\)", "1"], correctAnswer: 2, difficulty: 0.7, category: "Algebraik shakl almashtirishlar" },
  { id: "v4_q10", variant: 4, text: "Hisoblang: \\(\\arccos\\left(-\\frac{1}{2}\\right) + \\arcsin\\left(-\\frac{1}{2}\\right)\\)", options: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "1"], correctAnswer: 1, difficulty: 0.2, category: "Trigonometriya" },
  { id: "v4_q11", variant: 4, text: "Soddalashtiring: \\(\\frac{2\cos^2 2\alpha + \cos 6\alpha - 1}{0.5\sin 6\alpha + \sin 2\alpha \cos 2\alpha}\\)", options: ["2ctg5\\(\\alpha\\)", "2tg5\\(\\alpha\\)", "ctg5\\(\\alpha\\)", "tg5\\(\\alpha\\)"], correctAnswer: 0, difficulty: 1.3, category: "Trigonometriya" },
  { id: "v4_q12", variant: 4, text: "Soddalashtiring: \\(\\frac{r^2 + 5r}{r^3 - 27} - \\frac{2r - 9}{r^3 - 27}\\)", options: ["\\(\\frac{1}{3-r}\\)", "\\(\\frac{1}{r+3}\\)", "\\(\\frac{r}{r-3}\\)", "\\(\\frac{1}{r-3}\\)"], correctAnswer: 3, difficulty: 0.3, category: "Algebraik shakl almashtirishlar" },
  { id: "v4_q13", variant: 4, text: "Agar \\(2^a = 5\\), \\(2^b = 3\\) bo'lsa, \\(\\left(\\frac{25}{3}\\right)^c = 405\\) tenglikdan foydalanib \\(c\\) ni \\(a\\) va \\(b\\) orqali ifodalang.", options: ["\\(\\frac{b+4a}{2a-b}\\)", "\\(\\frac{4b+a}{2a+b}\\)", "\\(\\frac{2a+b}{4b+a}\\)", "\\(\\frac{2a-b}{4b-a}\\)"], correctAnswer: 0, difficulty: 1.6, category: "Algebraic Expressions" },
  { id: "v4_q14", variant: 4, text: "Tengsizlikni qanoatlantiradigan butun sonlar nechta: \\(x^2 - 6|x| + 5 \\le 0\\)", options: ["8", "9", "10", "11"], correctAnswer: 0, difficulty: 0.4, category: "Tenglama va tengsizliklar" },
  { id: "v4_q15", variant: 4, text: "Tenglama nechta haqiqiy ildizga ega: \\(5^{\\frac{x}{x-3}} - 5 \\cdot 5^{\\frac{3}{x-3}} = 0\\)", options: ["0", "1", "2", "Cheksiz ko'p"], correctAnswer: 1, difficulty: 0.5, category: "Tenglama va tengsizliklar" },
  { id: "v4_q16", variant: 4, text: "Tenglama ildizlari yig'indisini toping: \\(2x^2 - 4x - 6 = 0\\)", options: ["-4", "2", "4", "-2"], correctAnswer: 1, difficulty: -0.8, category: "Tenglama va tengsizliklar" },
  { id: "v4_q17", variant: 4, text: "Tenglama ildizlari ko'paytmasini toping: \\(\\left(\\frac{1}{\\sqrt{3+2\\sqrt{2}}}\\right)^x + \\left(\\frac{1}{\\sqrt{3-2\\sqrt{2}}}\\right)^x = 6\\)", options: ["-4", "4", "-2", "2"], correctAnswer: 2, difficulty: 1.5, category: "Tenglama va tengsizliklar" },
  { id: "v4_q18", variant: 4, text: "Tengsizlikning natural yechimlari nechta: \\(\\frac{25 - 4x}{\\sqrt[3]{10} - 2} \\ge 0\\)", options: ["10", "4", "8", "6"], correctAnswer: 3, difficulty: -0.4, category: "Tenglama va tengsizliklar" },
  { id: "v4_q19", variant: 4, text: "Tenglamaning ildizlari yig'indisini toping: \\(\\sqrt{\\log_3(36 - 12x + x^2)^8} + 6\\log_9\\sqrt{18 - 3x} = 7\\)", options: ["-3", "3", "17", "-7"], correctAnswer: 1, difficulty: 1.7, category: "Tenglama va tengsizliklar" },
  { id: "v4_q20", variant: 4, text: "Quyidagi funksiyalardan nechtasi toq emas, juft ham emas?<br>a) \\(\\frac{x^4+x^2+1}{(x+1)^2+1}\\)<br>b) \\(\\frac{x \\sin x}{x^2+1}\\)<br>c) \\(\\frac{\\cos x}{x + \\tan x}\\)<br>d) \\(\\frac{(x+1)^3+1}{\\sin x + x}\\)", options: ["1", "2", "3", "4"], correctAnswer: 1, difficulty: 0.9, category: "Funksiyalar" },
  { id: "v4_q21", variant: 4, text: "Funksiyaning eng kichik musbat davrini toping: \\(f(x) = 2\\cos^2 x + \\sin \\frac{x}{2} + \\tan \\frac{x}{3}\\)", options: ["\\(12\\pi\\)", "\\(6\\pi\\)", "\\(4\\pi\\)", "\\(9\\pi\\)"], correctAnswer: 0, difficulty: 0.8, category: "Trigonometriya" },
  { id: "v4_q22", variant: 4, text: "Funksiyaning (1; 0) nuqtadan o'tuvchi boshlang'ich funksiyasini toping: \\(f(x) = \\frac{1}{x^2 + 3}\\)", options: ["\\(\\frac{3}{\\sqrt{3}}\\left(\\arctan\\frac{x}{\\sqrt{3}} - \\frac{\\pi}{6}\\right)\\)", "\\(\\frac{1}{3\\sqrt{3}}\\left(\\arctan\\frac{x}{\\sqrt{3}} + \\frac{\\pi}{6}\\right)\\)", "\\(\\frac{1}{\\sqrt{3}}\\left(\\arctan\\frac{x}{\\sqrt{3}} - \\frac{\\pi}{6}\\right)\\)", "\\(\\frac{\\sqrt{3}}{3}\\left(\\arctan\\frac{x}{\\sqrt{3}} + \\frac{\\pi}{6}\\right)\\)"], correctAnswer: 2, difficulty: 1.2, category: "Matematik analiz asoslari" },
  { id: "v4_q23", variant: 4, text: "Funksiya berilgan: \\(f(x) = |x - \\sin^2 x - \\cos x|\\). Hosila \\(f'\\left(\\frac{\\pi}{3}\\right)\\) ni hisoblang.", options: ["-1", "1", "0", "Mavjud emas"], correctAnswer: 0, difficulty: 1.4, category: "Matematik analiz asoslari" },
  { id: "v4_q24", variant: 4, text: "Aylana uzunligi 12 sm. Uzunligi 3 sm bo'lgan yoyning burchak o'lchovini toping.", options: ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)"], correctAnswer: 1, difficulty: -0.6, category: "Geometriya (Planimetriya)" },
  { id: "v4_q25", variant: 4, text: "Rasmda AB || ED bo'lsa, x burchak qiymatini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='240' height='160' viewBox='0 0 240 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><line x1='30' y1='120' x2='120' y2='20' stroke='#a78bfa' stroke-width='2'/><line x1='120' y1='20' x2='210' y2='120' stroke='#a78bfa' stroke-width='2'/><line x1='120' y1='40' x2='180' y2='140' stroke='#22d3ee' stroke-width='2'/><text x='115' y='18' fill='#f3f4f6' font-size='11'>A</text><text x='140' y='35' fill='#f3f4f6' font-size='11'>D</text><text x='215' y='125' fill='#f3f4f6' font-size='11'>C</text><text x='25' y='125' fill='#f3f4f6' font-size='11'>B</text><text x='138' y='75' fill='#fbbf24' font-size='10'>x</text></svg></div>",

  options: ["50°", "30°", "35°", "20°"],

  correctAnswer: 3,

  difficulty: 0.6,

  category: "Geometriya (Burchaklar)"

  },
  { id: "v4_q26", variant: 4, text: "Muntazam beshburchak berilgan. Bunga ko'ra alpha burchak qiymatini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='200' height='160' viewBox='0 0 200 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><polygon points='100,10 190,75 155,150 45,150 10,75' fill='none' stroke='#a78bfa' stroke-width='2'/><line x1='100' y1='10' x2='120' y2='130' stroke='#f87171' stroke-width='1.5'/><line x1='45' y1='150' x2='120' y2='130' stroke='#f87171' stroke-width='1.5'/><text x='48' y='142' fill='#fbbf24' font-size='12'>α</text></svg></div>", options: ["45°", "55°", "35°", "40°"], correctAnswer: 2, difficulty: 0.9, category: "Geometriya (Burchaklar)" },
  { id: "v4_q27", variant: 4, text: "ABC uchburchak yuzi 60 ga teng. \\(\\vec{BE} = -\\frac{1}{2} \\vec{BA}\\) bo'lsa, BEC uchburchak yuzini toping.", options: ["60", "120", "30", "90"], correctAnswer: 2, difficulty: 0.5, category: "Geometriya (Planimetriya)" },
  { id: "v4_q28", variant: 4, text: "ABC teng yonli AB=AC uchburchakka aylana ichki chizilgan va yon tomonini urinish nuqtasidan 2 va 5 ga teng kesmalarga ajratgan. AB < BC bo'lsa, uchburchak yuzini toping.", options: ["\\(10\\sqrt{3}\\)", "\\(5\\sqrt{6}\\)", "\\(5\\sqrt{3}\\)", "\\(10\\sqrt{6}\\)"], correctAnswer: 1, difficulty: 1.4, category: "Geometriya (Planimetriya)" },
  { id: "v4_q29", variant: 4, text: "ABCD to'g'ri burchakli trapetsiyaning asoslari BC = 8 va AD = 24. Diagonallar kesishgan nuqtadan kichik yon tomonigacha bo'lgan eng qisqa masofani toping.", options: ["3", "6", "4.5", "5.8"], correctAnswer: 1, difficulty: 1.1, category: "Geometriya (Planimetriya)" },
  { id: "v4_q30", variant: 4, text: "Tekislikda yotmagan O nuqtadan tekislikka ikkita OA va OB og'malar tushirilgan. OA og'ma uzunligi OB og'madan 14 sm ga ortiq. Ularning proyeksiyalari mos ravishda 36 va 20 bo'lsa, O nuqtadan tekislikkacha bo'lgan eng qisqa masofani toping.", options: ["25", "20", "15", "12"], correctAnswer: 2, difficulty: 1.2, category: "Geometriya (Stereometriya)" },
  { id: "v5_q1", variant: 5, text: "Natural \\(x, y, z\\) sonlar uchun \\(\\frac{2x+3y}{6} = z\\) bo'lsa, \\(x\\) quyidagi sonlardan qaysi biriga qoldiqsiz bo'linadi?", options: ["2", "3", "4", "6"], correctAnswer: 1, difficulty: -0.5, category: "Sonlar va amallar" },
  { id: "v5_q2", variant: 5, text: "Hisoblang: \\((1 - (1 - (1 - (1 - 2^{-2})^{-1})^{-3})^{-1})^{-1}\\)", options: ["27", "28", "\\(\\frac{28}{27}\\)", "\\(\\frac{27}{28}\\)"], correctAnswer: 2, difficulty: 0.8, category: "Sonlar va amallar" },
  { id: "v5_q3", variant: 5, text: "Oltin va kumush qotishmasi massasi 1.06 kg. Qotishmani suvga solganda 70 gr yo'qotdi. Oltin suvda o'z massasining \\(\\frac{1}{19}\\) qismini, kumush esa \\(\\frac{1}{10}\\) qismini yo'qotsa, oltin va kumushning dastlabki massalarini toping.", options: ["Oltin 760 gr, kumush 300 gr", "Oltin 560 gr, kumush 500 gr", "Oltin 300 gr, kumush 760 gr", "Oltin 500 gr, kumush 560 gr"], correctAnswer: 0, difficulty: 1.1, category: "Matematik modellashtirish" },
  { id: "v5_q4", variant: 5, text: "Avtomobilning narxi 10000$ edi. Narxi ketma-ket ikki marta 15% ga oshirilgandan keyin qancha bo'ladi?", options: ["12000$", "11500$", "12225$", "13225$"], correctAnswer: 2, difficulty: -0.3, category: "Foizlar" },
  { id: "v5_q5", variant: 5, text: "Agar \\(3^8 \\cdot 3^{-2} \\cdot 2^{-4} \\cdot 2^8 = 2^m \\cdot 3^n\\) bo'lsa, \\(m + n\\) ni toping.", options: ["6", "8", "10", "12"], correctAnswer: 2, difficulty: -0.6, category: "Algebraik shakl almashtirishlar" },
  { id: "v5_q6", variant: 5, text: "Hisoblang: \\(\\sqrt{22 - 30\\sqrt{4 - 2\\sqrt{3}}} + 5 + 3\\sqrt{3}\\)", options: ["10", "6\\(\\sqrt{3}\\)", "12", "5 - 3\\(\\sqrt{3}\\)"], correctAnswer: 1, difficulty: 0.9, category: "Sonlar va amallar" },
  { id: "v5_q7", variant: 5, text: "Hisoblang: \\(\\frac{3}{2\\sqrt[3]{2} + 2\\sqrt[3]{4}} - \\frac{3}{2\\sqrt[3]{2} - 2\\sqrt[3]{4}} + \\sqrt[3]{4}\\)", options: ["\\(\\sqrt[3]{4} + 1\\)", "\\(\\sqrt[3]{16} + 1\\)", "\\((\\sqrt[3]{4} + 1)^2\\)", "\\(-(\\sqrt[3]{4} + 1)^2\\)"], correctAnswer: 2, difficulty: 1.4, category: "Sonlar va amallar" },
  { id: "v5_q8", variant: 5, text: "Agar \\(a = 1.9\\), \\(b = 0.55\\) bo'lsa, \\(\\frac{a^2 - 4b^2 - 5a + 10b}{(a+2b)^2 - 25}\\) ning qiymatini toping.", options: ["10", "0.1", "0.01", "1"], correctAnswer: 1, difficulty: 0.5, category: "Algebraik shakl almashtirishlar" },
  { id: "v5_q9", variant: 5, text: "Kamayuvchi arifmetik progressiyada \\(a_3 = 1\\) va \\(a_5^2 = 25\\) bo'lsa, \\(a_1 \\cdot d\\) ni toping.", options: ["-14", "-21", "-6", "4"], correctAnswer: 0, difficulty: 1.0, category: "Progressiyalar" },
  { id: "v5_q10", variant: 5, text: "Ushbu ketma-ketlikning barcha hadlari yig'indisini toping: \\(b_n = \\frac{2^n}{3^{n-1}}\\)", options: ["2", "4", "6", "8"], correctAnswer: 2, difficulty: 0.2, category: "Progressiyalar" },
  { id: "v5_q11", variant: 5, text: "Tenglama nechta haqiqiy ildizga ega: \\(\\sqrt{x - 2} + \\sqrt{1 - x} = 2\\)", options: ["1 ta", "2 ta", "Cheksiz ko'p", "Yechimga ega emas"], correctAnswer: 3, difficulty: 0.5, category: "Tenglama va tengsizliklar" },
  { id: "v5_q12", variant: 5, text: "Tengsizlikning musbat butun yechimlari nechta: \\((\\sqrt{5} + 2)^{x-1} \\le (\\sqrt{5} - 2)^{\\frac{x-1}{x+1}}\\)", options: ["1 ta", "2 ta", "3 ta", "4 ta"], correctAnswer: 0, difficulty: 1.3, category: "Tenglama va tengsizliklar" },
  { id: "v5_q13", variant: 5, text: "Tenglama nechta ildizga ega: \\(2^{\\ln x} - 3^{\\frac{1}{2}\\ln x} = 1\\)", options: ["Cheksiz ko'p", "1 ta", "2 ta", "Yechimga ega emas"], correctAnswer: 1, difficulty: 1.2, category: "Tenglama va tengsizliklar" },
  { id: "v5_q14", variant: 5, text: "Nechta natural son \\(|x^2 - x - 6| > 0\\) tengsizlikning yechimi bo'la olmaydi?", options: ["0", "1", "2", "3"], correctAnswer: 1, difficulty: 0.3, category: "Tenglama va tengsizliklar" },
  { id: "v5_q15", variant: 5, text: "Agar \\(2^a = 3\\), \\(2^b = 5\\) bo'lsa, \\(\\left(\\frac{25}{3}\\right)^c = 405\\) bo'lsa, \\(c\\) ni \\(a\\) va \\(b\\) orqali ifodalang.", options: ["\\(\\frac{2a-b}{2b-a}\\)", "\\(\\frac{4a-b}{2b+a}\\)", "\\(\\frac{2b+a}{4b+a}\\)", "\\(\\frac{2b-a}{4a-2b}\\)"], correctAnswer: 0, difficulty: 1.6, category: "Algebraik shakl almashtirishlar" },
  { id: "v5_q16", variant: 5, text: "Ifodani soddalashtiring: \\(\\frac{(\\sin x - \\cos x)^2}{\\sin^2\\left(\\frac{\\pi}{4} - x\\right)}\\)", options: ["2", "\\(\\frac{1-\\sin 2x}{1+\\sin 2x}\\)", "\\(\\frac{2(1-\\sin 2x)}{1-\\cos 2x}\\)", "1"], correctAnswer: 0, difficulty: 0.8, category: "Trigonometriya" },
  { id: "v5_q17", variant: 5, text: "Tenglama \\((0; 5\\pi)\\) oraliqda nechta ildizga ega: \\(\\sqrt{3}\\sin 2x - \\cos 2x = \\sqrt{3}\\)", options: ["20 ta", "18 ta", "10 ta", "8 ta"], correctAnswer: 2, difficulty: 1.4, category: "Trigonometriya" },
  { id: "v5_q18", variant: 5, text: "Tengsizlikni qanoatlantiruvchi butun yechimlar sonini toping: \\(\\frac{-2}{|x|+1} \\ge |x| - 2\\)", options: ["0", "1", "2", "3"], correctAnswer: 3, difficulty: 0.6, category: "Tenglama va tengsizliklar" },
  { id: "v5_q19", variant: 5, text: "Agar \\(g(x) = 3x^3 - x^2 - x + 4\\) bo'lsa, \\(g\\left(\\frac{1+\\sqrt{13}}{6}\right)\\) ning qiymatini toping.", options: ["0", "3", "4", "5"], correctAnswer: 3, difficulty: 1.5, category: "Funksiyalar" },
  { id: "v5_q20", variant: 5, text: "Chizmadagi grafiklardan foydalanib \\(f'(x) \\cdot g(x) \\ge 0\\) tengsizlik \\(x_1, x_2, x_3, x_4, x_5, x_6\\) nuqtalarning nechtasida o'rinli bo'lishini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='240' height='160' viewBox='0 0 240 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><line x1='20' y1='80' x2='220' y2='80' stroke='#9ca3af' stroke-width='1.5'/><line x1='120' y1='10' x2='120' y2='150' stroke='#9ca3af' stroke-width='1.5'/><path d='M30,100 C50,20 80,140 120,20 C160,140 190,20 210,100' fill='none' stroke='#f87171' stroke-width='2'/><line x1='20' y1='40' x2='220' y2='120' stroke='#22d3ee' stroke-width='2'/></svg></div>", options: ["5 ta", "3 ta", "4 ta", "6 ta"], correctAnswer: 2, difficulty: 1.7, category: "Matematik analiz asoslari" },
  { id: "v5_q21", variant: 5, text: "Aniq integralni hisoblang: \\(\\int_{\\pi/3}^{2\\pi/3} x \\cdot \\sin x dx\\)", options: ["0", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\pi\\)"], correctAnswer: 1, difficulty: 1.5, category: "Matematik analiz asoslari" },
  { id: "v5_q22", variant: 5, text: "Tenglamaning haqiqiy ildizlari ko'paytmasini toping: \\(\\sqrt{3x - 2} + 15\\sqrt[4]{3x - 2} = 16\\)", options: ["1", "2", "4", "16"], correctAnswer: 0, difficulty: 0.9, category: "Tenglama va tengsizliklar" },
  { id: "v5_q23", variant: 5, text: "Kvadrat funksiya \\(f(x) = ax^2 + bx + c\\) berilgan. Agar \\(|a| \\cdot f(1) < 0\\), \\(f(1) \\cdot f(2) < 0\\) va \\(a \\cdot f(2) > 0\\) bo'lsa, uning ildizlari \\(x_1\\) va \\(x_2\\) uchun qaysi munosabat to'g'ri?", options: ["\\(x_1 < 1 < x_2 < 2\\)", "\\(1 < x_1 < 2 < x_2\\)", "\\(1 < x_1 < x_2 < 2\\)", "\\(x_1 < x_2 < 1 < 2\\)"], correctAnswer: 1, difficulty: 1.8, category: "Funksiyalar" },
  { id: "v5_q24", variant: 5, text: "Aylananing uzunligi 12. Ushbu aylananing uzunligi 3 ga teng bo'lgan yoyining gradus o'lchovini toping.", options: ["90°", "60°", "45°", "30°"], correctAnswer: 0, difficulty: -0.4, category: "Geometriya (Planimetriya)" },
  { id: "v5_q25", variant: 5, text: "Muntazam sakkizburchak ABCDEFGH berilgan. GHCD to'rtburchak yuzi 12 bo'lsa, sakkizburchak yuzini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='180' height='160' viewBox='0 0 180 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><polygon points='35,57 67,25 113,25 145,57 145,103 113,135 67,135 35,103' fill='none' stroke='#a78bfa' stroke-width='2'/><rect x='35' y='57' width='110' height='46' fill='rgba(34,211,238,0.2)' stroke='#22d3ee' stroke-width='1.5'/><text x='67' y='147' fill='#f3f4f6' font-size='10' text-anchor='middle'>A</text><text x='113' y='147' fill='#f3f4f6' font-size='10' text-anchor='middle'>B</text><text x='153' y='107' fill='#f3f4f6' font-size='10'>C</text><text x='153' y='61' fill='#f3f4f6' font-size='10'>D</text><text x='113' y='20' fill='#f3f4f6' font-size='10' text-anchor='middle'>E</text><text x='67' y='20' fill='#f3f4f6' font-size='10' text-anchor='middle'>F</text><text x='25' y='61' fill='#f3f4f6' font-size='10'>G</text><text x='25' y='107' fill='#f3f4f6' font-size='10'>H</text></svg></div>", options: ["18", "24", "28", "36"], correctAnswer: 1, difficulty: 1.1, category: "Geometriya (Planimetriya)" },
  { id: "v5_q26", variant: 5, text: "Uchburchak tomonlari \\(x\\), 5 va \\(3x - 5\\). \\(x\\) ning qabul qilishi mumkin bo'lgan eng katta natural qiymatini toping.", options: ["5", "4", "3", "2"], correctAnswer: 1, difficulty: 0.6, category: "Geometriya (Uchburchak)" },
  { id: "v5_q27", variant: 5, text: "Aylana vatar kesmalari berilgan: \\(CF = 6\\), \\(CG = 7\\), \\(GE = 5\\) va \\(ED = 6\\) bo'lsa, FG kesma uzunligini toping.", options: ["2", "3", "4", "5"], correctAnswer: 1, difficulty: 1.0, category: "Geometriya (Aylana)" },
  { id: "v5_q28", variant: 5, text: "ABC to'g'ri burchakli uchburchakning katetlaridan kvadratlar hosil qilingan. M nuqta AC ning o'rtasi. Agar katetlar 2 va 4 bo'lsa, MN kesma uzunligini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='200' height='160' viewBox='0 0 200 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><polygon points='60,60 60,20 140,60' fill='none' stroke='#a78bfa' stroke-width='2'/><rect x='20' y='20' width='40' height='40' fill='none' stroke='#9ca3af'/><rect x='60' y='60' width='80' height='80' fill='none' stroke='#9ca3af'/><line x1='20' y1='60' x2='100' y2='60' stroke='#f87171' stroke-width='1.5'/><text x='63' y='57' fill='#f3f4f6' font-size='10'>C</text><text x='63' y='18' fill='#f3f4f6' font-size='10'>B</text><text x='142' y='57' fill='#f3f4f6' font-size='10'>A</text><text x='98' y='54' fill='#fbbf24' font-size='10'>M</text><text x='10' y='64' fill='#f3f4f6' font-size='10'>N</text></svg></div>", options: ["\\(\\frac{2}{\\sqrt{5}}\\)", "\\(\\frac{3}{\\sqrt{5}}\\)", "\\(\\frac{9}{\\sqrt{5}}\\)", "\\(\\frac{7}{\\sqrt{5}}\\)"], correctAnswer: 2, difficulty: 1.5, category: "Geometriya (Planimetriya)" },
  { id: "v5_q29", variant: 5, text: "Chizmada tomoni 4 bo'lgan muntazam oltiburchak berilgan. \\(\\vec{AB} + (\\vec{FE} + \\vec{ED})\\) vektorning qiymatini toping.", options: ["8", "8\\(\\sqrt{7}\\)", "4", "4\\(\\sqrt{7}\\)"], correctAnswer: 1, difficulty: 1.3, category: "Geometriya (Vektorlar)" },
  { id: "v5_q30", variant: 5, text: "ABC to'g'ri burchakli uchburchakning C to'g'ri burchak uchidan AB gipotenuzaga parallel tekislik o'tkazilgan. Tekislikdan gipotenuzagacha masofa 12 ga teng. Katetlarning tekislikdagi proyeksiyalari 16 va 9 bo'lsa, AB gipotenuza uzunligini toping.", options: ["25", "30", "24", "32"], correctAnswer: 0, difficulty: 1.2, category: "Geometriya (Planimetriya)" },
  {"id": "v6_q1", "variant": 6, "text": "Hisoblang: \\(34 + 97\\)", "options": ["141", "131", "127", "130"], "correctAnswer": 1, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v6_q2", "variant": 6, "text": "Hisoblang: \\(61 \\cdot 7\\)", "options": ["433", "437", "427", "422"], "correctAnswer": 0, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v6_q3", "variant": 6, "text": "Soddalashtiring: \\(\\left(\\frac{1}{31} + \\frac{1}{80}\\right) \\cdot 2480\\)", "options": ["116", "111", "109", "222"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v6_q4", "variant": 6, "text": "\\(180\\) ning \\(8\\%\\) ini toping.", "options": ["16", "13", "14", "19"], "correctAnswer": 0, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v6_q5", "variant": 6, "text": "Tenglamani yeching: \\(x + 32 = 83\\)", "options": ["57", "48", "51", "102"], "correctAnswer": 2, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v6_q6", "variant": 6, "text": "Soddalashtiring: \\((2x + 7y)^2 - 28xy\\)", "options": ["\\(4x^2 - 49y^2\\)", "\\(4x^2 + 49y^2\\)", "\\(2x^2 + 7y^2\\)", "\\(4x^2 + 28xy + 49y^2\\)"], "correctAnswer": 0, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v6_q7", "variant": 6, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 9\\)", "options": ["\\((x + 3)^2\\)", "\\((x - 3)(x + 3)\\)", "\\(x(x - 9)\\)", "\\((x - 3)^2\\)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v6_q8", "variant": 6, "text": "Hisoblang: \\(\\sqrt{16 \\cdot 25}\\)", "options": ["18", "23", "20", "40"], "correctAnswer": 0, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v6_q9", "variant": 6, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{6} = \\frac{6}{3}\\)", "options": ["12", "24", "13", "9"], "correctAnswer": 2, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v6_q10", "variant": 6, "text": "Ifodani qiymatini toping: \\(9a + 8b\\), bunda \\(a=3, b=2\\)", "options": ["43", "44", "41", "47"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v6_q11", "variant": 6, "text": "Tengsizlikni yeching: \\(x + 4 < 15\\)", "options": ["\\((11; \\infty)\\)", "\\([11; \\infty)\\)", "\\((-\\infty; 11]\\)", "\\((-\\infty; 11\\)\\)"], "correctAnswer": 0, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v6_q12", "variant": 6, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 10x + 21 = 0\\)", "options": ["3", "7", "21", "10"], "correctAnswer": 2, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v6_q13", "variant": 6, "text": "Arifmetik progressiyada \\(a_1 = 4\\), \\(d = 7\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["64", "39", "32", "25"], "correctAnswer": 3, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v6_q14", "variant": 6, "text": "Geometrik progressiyada \\(b_1 = 4\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["32", "20", "16", "14"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v6_q15", "variant": 6, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 12 \\\\ x - y = -6 \\end{cases}\\)", "options": ["27", "37", "22", "29"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v6_q16", "variant": 6, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(\\frac{1 - \\sqrt{3}}{2}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(1\\)", "\\(\\sqrt{3}\\)"], "correctAnswer": 1, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v6_q17", "variant": 6, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\sin^2 x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\cos^2 x\\)"], "correctAnswer": 0, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v6_q18", "variant": 6, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["20", "14", "32", "16"], "correctAnswer": 1, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v6_q19", "variant": 6, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["3", "4", "6", "2"], "correctAnswer": 1, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v6_q20", "variant": 6, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\((0; 9)\\)", "\\((9; \\infty)\\)", "\\([0; 9]\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v6_q21", "variant": 6, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{4}\\)", "options": ["\\(x^{3}\\)", "\\(\\frac{x^{5}}{5}\\)", "\\(4x^{4}\\)", "\\(4x^{3}\\)"], "correctAnswer": 0, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v6_q22", "variant": 6, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 4x^{3} dx\\)", "options": ["8", "32", "16", "14"], "correctAnswer": 3, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v6_q23", "variant": 6, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 2}\\)", "options": ["\\((-\\infty; 2]\\)", "\\([2; \\infty)\\)", "\\((2; \\infty)\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 2, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v6_q24", "variant": 6, "text": "Funksiya berilgan: \\(f(x) = 3x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["8", "16", "22", "11"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v6_q25", "variant": 6, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(-\\sin x + C\\)", "\\(\\tan x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 1, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v6_q26", "variant": 6, "text": "To'g'ri burchakli uchburchakning katetlari 5 va 10 ga teng. Uning yuzini toping.", "options": ["50", "22", "30", "25"], "correctAnswer": 3, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v6_q27", "variant": 6, "text": "To'g'ri to'rtburchakning tomonlari 5 va 9 ga teng. Uning perimetrini toping.", "options": ["30", "28", "56", "24"], "correctAnswer": 3, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v6_q28", "variant": 6, "text": "Kubning qirrasi 6 ga teng. Uning hajmini toping.", "options": ["236", "36", "216", "206"], "correctAnswer": 3, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v6_q29", "variant": 6, "text": "Radiusi 3 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(9\\pi\\)", "\\(6\\pi\\)", "\\(27\\pi\\)", "\\(3\\pi\\)"], "correctAnswer": 1, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v6_q30", "variant": 6, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 6 ga teng. Uning hajmini toping.", "options": ["\\(36\\pi\\)", "\\(24\\pi\\)", "\\(48\\pi\\)", "\\(12\\pi\\)"], "correctAnswer": 3, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v7_q1", "variant": 7, "text": "Hisoblang: \\(45 + 73\\)", "options": ["124", "118", "117", "114"], "correctAnswer": 1, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v7_q2", "variant": 7, "text": "Hisoblang: \\(23 \\cdot 2\\)", "options": ["56", "46", "54", "41"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v7_q3", "variant": 7, "text": "Soddalashtiring: \\(\\left(\\frac{1}{16} + \\frac{1}{50}\\right) \\cdot 800\\)", "options": ["71", "64", "66", "132"], "correctAnswer": 1, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v7_q4", "variant": 7, "text": "\\(890\\) ning \\(6\\%\\) ini toping.", "options": ["58", "55", "52", "53"], "correctAnswer": 1, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v7_q5", "variant": 7, "text": "Tenglamani yeching: \\(x + 43 = 11\\)", "options": ["-32", "-35", "-28", "-64"], "correctAnswer": 0, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v7_q6", "variant": 7, "text": "Soddalashtiring: \\((6x + 9y)^2 - 108xy\\)", "options": ["\\(36x^2 + 108xy + 81y^2\\)", "\\(36x^2 + 81y^2\\)", "\\(6x^2 + 9y^2\\)", "\\(36x^2 - 81y^2\\)"], "correctAnswer": 3, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v7_q7", "variant": 7, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 4\\)", "options": ["\\((x - 2)^2\\)", "\\((x - 2)(x + 2)\\)", "\\((x + 2)^2\\)", "\\(x(x - 4)\\)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v7_q8", "variant": 7, "text": "Hisoblang: \\(\\sqrt{9 \\cdot 49}\\)", "options": ["42", "24", "19", "21"], "correctAnswer": 2, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v7_q9", "variant": 7, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{6} = \\frac{6}{3}\\)", "options": ["9", "24", "12", "13"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v7_q10", "variant": 7, "text": "Ifodani qiymatini toping: \\(8a + 9b\\), bunda \\(a=3, b=2\\)", "options": ["42", "46", "43", "40"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v7_q11", "variant": 7, "text": "Tengsizlikni yeching: \\(x + 5 < 14\\)", "options": ["\\((-\\infty; 9]\\)", "\\((9; \\infty)\\)", "\\((-\\infty; 9\\)\\)", "\\([9; \\infty)\\)"], "correctAnswer": 1, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v7_q12", "variant": 7, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 14x + 40 = 0\\)", "options": ["4", "40", "14", "10"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v7_q13", "variant": 7, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 11\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["38", "98", "60", "49"], "correctAnswer": 0, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v7_q14", "variant": 7, "text": "Geometrik progressiyada \\(b_1 = 2\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "6", "8", "12"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v7_q15", "variant": 7, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 9 \\\\ x - y = -5 \\end{cases}\\)", "options": ["24", "9", "16", "14"], "correctAnswer": 2, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v7_q16", "variant": 7, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(\\frac{1 - \\sqrt{3}}{2}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(1\\)", "\\(\\sqrt{3}\\)"], "correctAnswer": 1, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v7_q17", "variant": 7, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)", "\\(0\\)", "\\(1\\)"], "correctAnswer": 1, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v7_q18", "variant": 7, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["14", "20", "32", "16"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v7_q19", "variant": 7, "text": "Tenglamani yeching: \\(2^x = 32\\)", "options": ["4", "10", "5", "6"], "correctAnswer": 3, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v7_q20", "variant": 7, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\([0; 9]\\)", "\\((9; \\infty)\\)", "\\((-\\infty; 9)\\)", "\\((0; 9)\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v7_q21", "variant": 7, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{3}\\)", "options": ["\\(3x^{2}\\)", "\\(3x^{3}\\)", "\\(x^{2}\\)", "\\(\\frac{x^{4}}{4}\\)"], "correctAnswer": 2, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v7_q22", "variant": 7, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 3x^{2} dx\\)", "options": ["6", "16", "6", "8"], "correctAnswer": 0, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v7_q23", "variant": 7, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 3}\\)", "options": ["\\([3; \\infty)\\)", "\\((3; \\infty)\\)", "\\((-\\infty; \\infty)\\)", "\\((-\\infty; 3]\\)"], "correctAnswer": 1, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v7_q24", "variant": 7, "text": "Funksiya berilgan: \\(f(x) = 4x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["10", "26", "18", "13"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v7_q25", "variant": 7, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(\\sin x + C\\)", "\\(-\\sin x + C\\)", "\\(\\tan x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v7_q26", "variant": 7, "text": "To'g'ri burchakli uchburchakning katetlari 5 va 10 ga teng. Uning yuzini toping.", "options": ["30", "25", "50", "22"], "correctAnswer": 1, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v7_q27", "variant": 7, "text": "To'g'ri to'rtburchakning tomonlari 7 va 5 ga teng. Uning perimetrini toping.", "options": ["48", "26", "24", "20"], "correctAnswer": 3, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v7_q28", "variant": 7, "text": "Kubning qirrasi 3 ga teng. Uning hajmini toping.", "options": ["27", "9", "47", "17"], "correctAnswer": 3, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v7_q29", "variant": 7, "text": "Radiusi 8 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(64\\pi\\)", "\\(16\\pi\\)", "\\(8\\pi\\)", "\\(512\\pi\\)"], "correctAnswer": 1, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v7_q30", "variant": 7, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 5 ga teng. Uning hajmini toping.", "options": ["\\(10\\pi\\)", "\\(20\\pi\\)", "\\(25\\pi\\)", "\\(40\\pi\\)"], "correctAnswer": 0, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v8_q1", "variant": 8, "text": "Hisoblang: \\(23 + 36\\)", "options": ["69", "58", "55", "59"], "correctAnswer": 3, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v8_q2", "variant": 8, "text": "Hisoblang: \\(80 \\cdot 7\\)", "options": ["570", "560", "564", "555"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v8_q3", "variant": 8, "text": "Soddalashtiring: \\(\\left(\\frac{1}{23} + \\frac{1}{33}\\right) \\cdot 759\\)", "options": ["61", "56", "54", "112"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v8_q4", "variant": 8, "text": "\\(710\\) ning \\(9\\%\\) ini toping.", "options": ["68", "63", "62", "65"], "correctAnswer": 3, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v8_q5", "variant": 8, "text": "Tenglamani yeching: \\(x + 73 = 38\\)", "options": ["-70", "-38", "-31", "-35"], "correctAnswer": 3, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v8_q6", "variant": 8, "text": "Soddalashtiring: \\((9x + 2y)^2 - 36xy\\)", "options": ["\\(81x^2 - 4y^2\\)", "\\(81x^2 + 4y^2\\)", "\\(81x^2 + 36xy + 4y^2\\)", "\\(9x^2 + 2y^2\\)"], "correctAnswer": 0, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v8_q7", "variant": 8, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 49\\)", "options": ["\\((x + 7)^2\\)", "\\(x(x - 49)\\)", "\\((x - 7)(x + 7)\\)", "\\((x - 7)^2\\)"], "correctAnswer": 2, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v8_q8", "variant": 8, "text": "Hisoblang: \\(\\sqrt{49 \\cdot 81}\\)", "options": ["66", "61", "126", "63"], "correctAnswer": 1, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v8_q9", "variant": 8, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{2} = \\frac{24}{3}\\)", "options": ["17", "13", "16", "32"], "correctAnswer": 0, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v8_q10", "variant": 8, "text": "Ifodani qiymatini toping: \\(9a + 2b\\), bunda \\(a=3, b=2\\)", "options": ["31", "32", "35", "29"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v8_q11", "variant": 8, "text": "Tengsizlikni yeching: \\(x + 2 < 9\\)", "options": ["\\((-\\infty; 7\\)\\)", "\\((-\\infty; 7]\\)", "\\((7; \\infty)\\)", "\\([7; \\infty)\\)"], "correctAnswer": 2, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v8_q12", "variant": 8, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 11x + 18 = 0\\)", "options": ["18", "9", "11", "2"], "correctAnswer": 0, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v8_q13", "variant": 8, "text": "Arifmetik progressiyada \\(a_1 = 3\\), \\(d = 6\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["21", "27", "33", "54"], "correctAnswer": 0, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v8_q14", "variant": 8, "text": "Geometrik progressiyada \\(b_1 = 3\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["24", "16", "12", "10"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v8_q15", "variant": 8, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 10 \\\\ x - y = -6 \\end{cases}\\)", "options": ["26", "16", "11", "18"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v8_q16", "variant": 8, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(\\sqrt{3}\\)", "\\(1\\)", "\\(\\frac{1 - \\sqrt{3}}{2}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)"], "correctAnswer": 3, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v8_q17", "variant": 8, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)", "\\(1\\)", "\\(0\\)"], "correctAnswer": 1, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v8_q18", "variant": 8, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["14", "16", "32", "20"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v8_q19", "variant": 8, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["4", "3", "6", "2"], "correctAnswer": 0, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v8_q20", "variant": 8, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\((0; 9)\\)", "\\([0; 9]\\)", "\\((9; \\infty)\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v8_q21", "variant": 8, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{5}\\)", "options": ["\\(\\frac{x^{6}}{6}\\)", "\\(x^{4}\\)", "\\(5x^{5}\\)", "\\(5x^{4}\\)"], "correctAnswer": 1, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v8_q22", "variant": 8, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 2x^{1} dx\\)", "options": ["8", "2", "4", "4"], "correctAnswer": 1, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v8_q23", "variant": 8, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 4}\\)", "options": ["\\((-\\infty; \\infty)\\)", "\\([4; \\infty)\\)", "\\((4; \\infty)\\)", "\\((-\\infty; 4]\\)"], "correctAnswer": 2, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v8_q24", "variant": 8, "text": "Funksiya berilgan: \\(f(x) = 3x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["8", "22", "11", "16"], "correctAnswer": 2, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v8_q25", "variant": 8, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(-\\sin x + C\\)", "\\(\\tan x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 1, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v8_q26", "variant": 8, "text": "To'g'ri burchakli uchburchakning katetlari 7 va 10 ga teng. Uning yuzini toping.", "options": ["35", "40", "70", "32"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v8_q27", "variant": 8, "text": "To'g'ri to'rtburchakning tomonlari 5 va 10 ga teng. Uning perimetrini toping.", "options": ["60", "26", "32", "30"], "correctAnswer": 1, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v8_q28", "variant": 8, "text": "Kubning qirrasi 4 ga teng. Uning hajmini toping.", "options": ["64", "84", "16", "54"], "correctAnswer": 3, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v8_q29", "variant": 8, "text": "Radiusi 4 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(16\\pi\\)", "\\(64\\pi\\)", "\\(8\\pi\\)", "\\(4\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v8_q30", "variant": 8, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 3 ga teng. Uning hajmini toping.", "options": ["\\(6\\pi\\)", "\\(24\\pi\\)", "\\(9\\pi\\)", "\\(12\\pi\\)"], "correctAnswer": 0, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v9_q1", "variant": 9, "text": "Hisoblang: \\(65 + 94\\)", "options": ["159", "164", "155", "158"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v9_q2", "variant": 9, "text": "Hisoblang: \\(44 \\cdot 8\\)", "options": ["352", "362", "347", "357"], "correctAnswer": 3, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v9_q3", "variant": 9, "text": "Soddalashtiring: \\(\\left(\\frac{1}{15} + \\frac{1}{96}\\right) \\cdot 1440\\)", "options": ["222", "109", "116", "111"], "correctAnswer": 1, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v9_q4", "variant": 9, "text": "\\(870\\) ning \\(8\\%\\) ini toping.", "options": ["69", "74", "68", "71"], "correctAnswer": 3, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v9_q5", "variant": 9, "text": "Tenglamani yeching: \\(x + 97 = 54\\)", "options": ["-37", "-43", "-46", "-86"], "correctAnswer": 1, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v9_q6", "variant": 9, "text": "Soddalashtiring: \\((2x + 6y)^2 - 24xy\\)", "options": ["\\(4x^2 + 24xy + 36y^2\\)", "\\(4x^2 + 36y^2\\)", "\\(4x^2 - 36y^2\\)", "\\(2x^2 + 6y^2\\)"], "correctAnswer": 2, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v9_q7", "variant": 9, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 64\\)", "options": ["\\((x - 8)(x + 8)\\)", "\\((x + 8)^2\\)", "\\(x(x - 64)\\)", "\\((x - 8)^2\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v9_q8", "variant": 9, "text": "Hisoblang: \\(\\sqrt{4 \\cdot 64}\\)", "options": ["16", "32", "14", "19"], "correctAnswer": 2, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v9_q9", "variant": 9, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{5} = \\frac{24}{3}\\)", "options": ["80", "40", "41", "37"], "correctAnswer": 2, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v9_q10", "variant": 9, "text": "Ifodani qiymatini toping: \\(9a + 3b\\), bunda \\(a=3, b=2\\)", "options": ["34", "33", "31", "37"], "correctAnswer": 1, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v9_q11", "variant": 9, "text": "Tengsizlikni yeching: \\(x + 5 < 14\\)", "options": ["\\((-\\infty; 9\\)\\)", "\\((-\\infty; 9]\\)", "\\((9; \\infty)\\)", "\\([9; \\infty)\\)"], "correctAnswer": 2, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v9_q12", "variant": 9, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 11x + 28 = 0\\)", "options": ["11", "28", "4", "7"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v9_q13", "variant": 9, "text": "Arifmetik progressiyada \\(a_1 = 2\\), \\(d = 6\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["20", "32", "26", "52"], "correctAnswer": 0, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v9_q14", "variant": 9, "text": "Geometrik progressiyada \\(b_1 = 2\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["6", "16", "12", "8"], "correctAnswer": 3, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v9_q15", "variant": 9, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 11 \\\\ x - y = -5 \\end{cases}\\)", "options": ["34", "26", "24", "19"], "correctAnswer": 1, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v9_q16", "variant": 9, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(0\\)", "\\(\\sqrt{3}\\)", "\\(1\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)"], "correctAnswer": 1, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v9_q17", "variant": 9, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(1\\)", "\\(0\\)", "\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)"], "correctAnswer": 3, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v9_q18", "variant": 9, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["16", "14", "20", "32"], "correctAnswer": 1, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v9_q19", "variant": 9, "text": "Tenglamani yeching: \\(2^x = 32\\)", "options": ["10", "6", "4", "5"], "correctAnswer": 1, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v9_q20", "variant": 9, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\([0; 9]\\)", "\\((-\\infty; 9)\\)", "\\((0; 9)\\)", "\\((9; \\infty)\\)"], "correctAnswer": 1, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v9_q21", "variant": 9, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{4}\\)", "options": ["\\(\\frac{x^{5}}{5}\\)", "\\(x^{3}\\)", "\\(4x^{4}\\)", "\\(4x^{3}\\)"], "correctAnswer": 1, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v9_q22", "variant": 9, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 2x^{1} dx\\)", "options": ["4", "8", "2", "4"], "correctAnswer": 2, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v9_q23", "variant": 9, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\((5; \\infty)\\)", "\\((-\\infty; \\infty)\\)", "\\([5; \\infty)\\)", "\\((-\\infty; 5]\\)"], "correctAnswer": 0, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v9_q24", "variant": 9, "text": "Funksiya berilgan: \\(f(x) = 4x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["18", "10", "13", "26"], "correctAnswer": 2, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v9_q25", "variant": 9, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\tan x + C\\)", "\\(\\cos x + C\\)", "\\(\\sin x + C\\)", "\\(-\\sin x + C\\)"], "correctAnswer": 3, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v9_q26", "variant": 9, "text": "To'g'ri burchakli uchburchakning katetlari 8 va 7 ga teng. Uning yuzini toping.", "options": ["28", "33", "25", "56"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v9_q27", "variant": 9, "text": "To'g'ri to'rtburchakning tomonlari 8 va 5 ga teng. Uning perimetrini toping.", "options": ["28", "26", "52", "22"], "correctAnswer": 3, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v9_q28", "variant": 9, "text": "Kubning qirrasi 5 ga teng. Uning hajmini toping.", "options": ["145", "25", "115", "125"], "correctAnswer": 2, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v9_q29", "variant": 9, "text": "Radiusi 4 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(64\\pi\\)", "\\(4\\pi\\)", "\\(16\\pi\\)", "\\(8\\pi\\)"], "correctAnswer": 3, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v9_q30", "variant": 9, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 7 ga teng. Uning hajmini toping.", "options": ["\\(49\\pi\\)", "\\(56\\pi\\)", "\\(28\\pi\\)", "\\(14\\pi\\)"], "correctAnswer": 3, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v10_q1", "variant": 10, "text": "Hisoblang: \\(17 + 35\\)", "options": ["52", "43", "57", "51"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v10_q2", "variant": 10, "text": "Hisoblang: \\(76 \\cdot 8\\)", "options": ["603", "618", "611", "608"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v10_q3", "variant": 10, "text": "Soddalashtiring: \\(\\left(\\frac{1}{73} + \\frac{1}{81}\\right) \\cdot 5913\\)", "options": ["152", "308", "154", "159"], "correctAnswer": 0, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v10_q4", "variant": 10, "text": "\\(630\\) ning \\(5\\%\\) ini toping.", "options": ["36", "33", "31", "30"], "correctAnswer": 1, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v10_q5", "variant": 10, "text": "Tenglamani yeching: \\(x + 71 = 61\\)", "options": ["-20", "-10", "-4", "-13"], "correctAnswer": 1, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v10_q6", "variant": 10, "text": "Soddalashtiring: \\((7x + 2y)^2 - 28xy\\)", "options": ["\\(7x^2 + 2y^2\\)", "\\(49x^2 - 4y^2\\)", "\\(49x^2 + 28xy + 4y^2\\)", "\\(49x^2 + 4y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v10_q7", "variant": 10, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 4\\)", "options": ["\\((x - 2)^2\\)", "\\((x - 2)(x + 2)\\)", "\\(x(x - 4)\\)", "\\((x + 2)^2\\)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v10_q8", "variant": 10, "text": "Hisoblang: \\(\\sqrt{81 \\cdot 49}\\)", "options": ["66", "126", "63", "61"], "correctAnswer": 3, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v10_q9", "variant": 10, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{4} = \\frac{10}{5}\\)", "options": ["8", "5", "16", "9"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v10_q10", "variant": 10, "text": "Ifodani qiymatini toping: \\(5a + 3b\\), bunda \\(a=3, b=2\\)", "options": ["21", "25", "19", "22"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v10_q11", "variant": 10, "text": "Tengsizlikni yeching: \\(x + 4 < 12\\)", "options": ["\\((-\\infty; 8]\\)", "\\([8; \\infty)\\)", "\\((-\\infty; 8\\)\\)", "\\((8; \\infty)\\)"], "correctAnswer": 3, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v10_q12", "variant": 10, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 11x + 28 = 0\\)", "options": ["4", "28", "7", "11"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v10_q13", "variant": 10, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 12\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["65", "41", "106", "53"], "correctAnswer": 1, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v10_q14", "variant": 10, "text": "Geometrik progressiyada \\(b_1 = 2\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "6", "8", "12"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v10_q15", "variant": 10, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 14 \\\\ x - y = -10 \\end{cases}\\)", "options": ["26", "34", "24", "19"], "correctAnswer": 0, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v10_q16", "variant": 10, "text": "Hisoblang: \\(\\sin 45^\\circ + \\cos 45^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(\\frac{\\sqrt{2}}{2}\\)", "\\(\\sqrt{2}\\)", "\\(2\\)"], "correctAnswer": 0, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v10_q17", "variant": 10, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(1\\)", "\\(0\\)", "\\(2\\sin^2 x\\)", "\\(2\\cos^2 x\\)"], "correctAnswer": 2, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v10_q18", "variant": 10, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["16", "14", "20", "32"], "correctAnswer": 1, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v10_q19", "variant": 10, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["8", "4", "5", "3"], "correctAnswer": 2, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v10_q20", "variant": 10, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\([0; 9]\\)", "\\((9; \\infty)\\)", "\\((0; 9)\\)", "\\((-\\infty; 9)\\)"], "correctAnswer": 3, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v10_q21", "variant": 10, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{3}\\)", "options": ["\\(x^{2}\\)", "\\(3x^{2}\\)", "\\(\\frac{x^{4}}{4}\\)", "\\(3x^{3}\\)"], "correctAnswer": 0, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v10_q22", "variant": 10, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 3x^{2} dx\\)", "options": ["6", "8", "16", "6"], "correctAnswer": 0, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v10_q23", "variant": 10, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\([5; \\infty)\\)", "\\((5; \\infty)\\)", "\\((-\\infty; 5]\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 1, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v10_q24", "variant": 10, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["9", "14", "6", "18"], "correctAnswer": 0, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v10_q25", "variant": 10, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(\\sin x + C\\)", "\\(\\tan x + C\\)", "\\(-\\sin x + C\\)"], "correctAnswer": 3, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v10_q26", "variant": 10, "text": "To'g'ri burchakli uchburchakning katetlari 3 va 7 ga teng. Uning yuzini toping.", "options": ["10", "15", "20", "7"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v10_q27", "variant": 10, "text": "To'g'ri to'rtburchakning tomonlari 3 va 4 ga teng. Uning perimetrini toping.", "options": ["28", "16", "14", "10"], "correctAnswer": 3, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v10_q28", "variant": 10, "text": "Kubning qirrasi 6 ga teng. Uning hajmini toping.", "options": ["206", "216", "236", "36"], "correctAnswer": 0, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v10_q29", "variant": 10, "text": "Radiusi 7 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(14\\pi\\)", "\\(7\\pi\\)", "\\(343\\pi\\)", "\\(49\\pi\\)"], "correctAnswer": 0, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v10_q30", "variant": 10, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 3 ga teng. Uning hajmini toping.", "options": ["\\(9\\pi\\)", "\\(6\\pi\\)", "\\(24\\pi\\)", "\\(12\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v11_q1", "variant": 11, "text": "Hisoblang: \\(55 + 62\\)", "options": ["116", "122", "117", "111"], "correctAnswer": 2, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v11_q2", "variant": 11, "text": "Hisoblang: \\(56 \\cdot 8\\)", "options": ["443", "458", "453", "448"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v11_q3", "variant": 11, "text": "Soddalashtiring: \\(\\left(\\frac{1}{61} + \\frac{1}{94}\\right) \\cdot 5734\\)", "options": ["160", "155", "153", "310"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v11_q4", "variant": 11, "text": "\\(420\\) ning \\(7\\%\\) ini toping.", "options": ["29", "34", "28", "31"], "correctAnswer": 3, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v11_q5", "variant": 11, "text": "Tenglamani yeching: \\(x + 12 = 21\\)", "options": ["15", "6", "18", "9"], "correctAnswer": 3, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v11_q6", "variant": 11, "text": "Soddalashtiring: \\((9x + 8y)^2 - 144xy\\)", "options": ["\\(81x^2 + 144xy + 64y^2\\)", "\\(81x^2 + 64y^2\\)", "\\(81x^2 - 64y^2\\)", "\\(9x^2 + 8y^2\\)"], "correctAnswer": 2, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v11_q7", "variant": 11, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 16\\)", "options": ["\\((x - 4)^2\\)", "\\((x - 4)(x + 4)\\)", "\\(x(x - 16)\\)", "\\((x + 4)^2\\)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v11_q8", "variant": 11, "text": "Hisoblang: \\(\\sqrt{25 \\cdot 36}\\)", "options": ["33", "28", "30", "60"], "correctAnswer": 1, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v11_q9", "variant": 11, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{8} = \\frac{15}{5}\\)", "options": ["21", "24", "48", "25"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v11_q10", "variant": 11, "text": "Ifodani qiymatini toping: \\(9a + 5b\\), bunda \\(a=3, b=2\\)", "options": ["41", "35", "38", "37"], "correctAnswer": 3, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v11_q11", "variant": 11, "text": "Tengsizlikni yeching: \\(x + 3 < 10\\)", "options": ["\\((-\\infty; 7\\)\\)", "\\((7; \\infty)\\)", "\\([7; \\infty)\\)", "\\((-\\infty; 7]\\)"], "correctAnswer": 1, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v11_q12", "variant": 11, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 10x + 24 = 0\\)", "options": ["10", "24", "6", "4"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v11_q13", "variant": 11, "text": "Arifmetik progressiyada \\(a_1 = 2\\), \\(d = 6\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["52", "26", "20", "32"], "correctAnswer": 2, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v11_q14", "variant": 11, "text": "Geometrik progressiyada \\(b_1 = 4\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "14", "20", "32"], "correctAnswer": 0, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v11_q15", "variant": 11, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 12 \\\\ x - y = -4 \\end{cases}\\)", "options": ["32", "27", "42", "34"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v11_q16", "variant": 11, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(\\sqrt{3}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(0\\)"], "correctAnswer": 1, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v11_q17", "variant": 11, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\cos^2 x\\)", "\\(1\\)", "\\(0\\)", "\\(2\\sin^2 x\\)"], "correctAnswer": 3, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v11_q18", "variant": 11, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["16", "20", "32", "14"], "correctAnswer": 3, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v11_q19", "variant": 11, "text": "Tenglamani yeching: \\(2^x = 32\\)", "options": ["5", "10", "4", "6"], "correctAnswer": 3, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v11_q20", "variant": 11, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((9; \\infty)\\)", "\\([0; 9]\\)", "\\((0; 9)\\)", "\\((-\\infty; 9)\\)"], "correctAnswer": 3, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v11_q21", "variant": 11, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{3}\\)", "options": ["\\(3x^{2}\\)", "\\(\\frac{x^{4}}{4}\\)", "\\(3x^{3}\\)", "\\(x^{2}\\)"], "correctAnswer": 3, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v11_q22", "variant": 11, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["10", "32", "64", "30"], "correctAnswer": 3, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v11_q23", "variant": 11, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 4}\\)", "options": ["\\((-\\infty; 4]\\)", "\\((4; \\infty)\\)", "\\((-\\infty; \\infty)\\)", "\\([4; \\infty)\\)"], "correctAnswer": 1, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v11_q24", "variant": 11, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["9", "6", "18", "14"], "correctAnswer": 0, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v11_q25", "variant": 11, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\tan x + C\\)", "\\(-\\sin x + C\\)", "\\(\\cos x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 1, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v11_q26", "variant": 11, "text": "To'g'ri burchakli uchburchakning katetlari 5 va 4 ga teng. Uning yuzini toping.", "options": ["7", "15", "10", "20"], "correctAnswer": 2, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v11_q27", "variant": 11, "text": "To'g'ri to'rtburchakning tomonlari 6 va 5 ga teng. Uning perimetrini toping.", "options": ["24", "44", "18", "22"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v11_q28", "variant": 11, "text": "Kubning qirrasi 3 ga teng. Uning hajmini toping.", "options": ["47", "17", "9", "27"], "correctAnswer": 1, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v11_q29", "variant": 11, "text": "Radiusi 8 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(64\\pi\\)", "\\(8\\pi\\)", "\\(16\\pi\\)", "\\(512\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v11_q30", "variant": 11, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 7 ga teng. Uning hajmini toping.", "options": ["\\(14\\pi\\)", "\\(56\\pi\\)", "\\(28\\pi\\)", "\\(49\\pi\\)"], "correctAnswer": 0, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v12_q1", "variant": 12, "text": "Hisoblang: \\(34 + 33\\)", "options": ["76", "62", "67", "66"], "correctAnswer": 2, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v12_q2", "variant": 12, "text": "Hisoblang: \\(49 \\cdot 8\\)", "options": ["387", "402", "399", "392"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v12_q3", "variant": 12, "text": "Soddalashtiring: \\(\\left(\\frac{1}{36} + \\frac{1}{56}\\right) \\cdot 2016\\)", "options": ["90", "184", "97", "92"], "correctAnswer": 0, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v12_q4", "variant": 12, "text": "\\(580\\) ning \\(8\\%\\) ini toping.", "options": ["46", "45", "48", "51"], "correctAnswer": 2, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v12_q5", "variant": 12, "text": "Tenglamani yeching: \\(x + 93 = 62\\)", "options": ["-62", "-26", "-31", "-34"], "correctAnswer": 2, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v12_q6", "variant": 12, "text": "Soddalashtiring: \\((7x + 9y)^2 - 126xy\\)", "options": ["\\(49x^2 + 126xy + 81y^2\\)", "\\(49x^2 - 81y^2\\)", "\\(49x^2 + 81y^2\\)", "\\(7x^2 + 9y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v12_q7", "variant": 12, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 4\\)", "options": ["\\((x - 2)^2\\)", "\\(x(x - 4)\\)", "\\((x - 2)(x + 2)\\)", "\\((x + 2)^2\\)"], "correctAnswer": 2, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v12_q8", "variant": 12, "text": "Hisoblang: \\(\\sqrt{4 \\cdot 9}\\)", "options": ["4", "6", "9", "12"], "correctAnswer": 0, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v12_q9", "variant": 12, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{2} = \\frac{24}{4}\\)", "options": ["24", "13", "9", "12"], "correctAnswer": 1, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v12_q10", "variant": 12, "text": "Ifodani qiymatini toping: \\(3a + 9b\\), bunda \\(a=3, b=2\\)", "options": ["31", "25", "28", "27"], "correctAnswer": 3, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v12_q11", "variant": 12, "text": "Tengsizlikni yeching: \\(x + 4 < 15\\)", "options": ["\\((11; \\infty)\\)", "\\((-\\infty; 11]\\)", "\\((-\\infty; 11\\)\\)", "\\([11; \\infty)\\)"], "correctAnswer": 0, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v12_q12", "variant": 12, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 16x + 48 = 0\\)", "options": ["48", "16", "12", "4"], "correctAnswer": 0, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v12_q13", "variant": 12, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 10\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["35", "45", "90", "55"], "correctAnswer": 0, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v12_q14", "variant": 12, "text": "Geometrik progressiyada \\(b_1 = 4\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["20", "14", "32", "16"], "correctAnswer": 3, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v12_q15", "variant": 12, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 16 \\\\ x - y = -6 \\end{cases}\\)", "options": ["50", "55", "57", "65"], "correctAnswer": 2, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v12_q16", "variant": 12, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(1\\)", "\\(0\\)", "\\(\\sqrt{3}\\)"], "correctAnswer": 3, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v12_q17", "variant": 12, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)", "\\(0\\)", "\\(1\\)"], "correctAnswer": 1, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v12_q18", "variant": 12, "text": "Tenglamani yeching: \\(\\log_2 x = 2\\)", "options": ["4", "8", "8", "2"], "correctAnswer": 3, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v12_q19", "variant": 12, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["4", "5", "8", "3"], "correctAnswer": 1, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v12_q20", "variant": 12, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\([0; 9]\\)", "\\((0; 9)\\)", "\\((-\\infty; 9)\\)", "\\((9; \\infty)\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v12_q21", "variant": 12, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{2}\\)", "options": ["\\(2x^{1}\\)", "\\(x^{1}\\)", "\\(2x^{2}\\)", "\\(\\frac{x^{3}}{3}\\)"], "correctAnswer": 1, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v12_q22", "variant": 12, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["32", "30", "64", "10"], "correctAnswer": 1, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v12_q23", "variant": 12, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\([5; \\infty)\\)", "\\((-\\infty; 5]\\)", "\\((5; \\infty)\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 2, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v12_q24", "variant": 12, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["9", "18", "14", "6"], "correctAnswer": 0, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v12_q25", "variant": 12, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(-\\sin x + C\\)", "\\(\\cos x + C\\)", "\\(\\tan x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 0, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v12_q26", "variant": 12, "text": "To'g'ri burchakli uchburchakning katetlari 6 va 10 ga teng. Uning yuzini toping.", "options": ["30", "27", "35", "60"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v12_q27", "variant": 12, "text": "To'g'ri to'rtburchakning tomonlari 7 va 10 ga teng. Uning perimetrini toping.", "options": ["36", "34", "68", "30"], "correctAnswer": 3, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v12_q28", "variant": 12, "text": "Kubning qirrasi 3 ga teng. Uning hajmini toping.", "options": ["17", "47", "9", "27"], "correctAnswer": 0, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v12_q29", "variant": 12, "text": "Radiusi 4 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(4\\pi\\)", "\\(64\\pi\\)", "\\(16\\pi\\)", "\\(8\\pi\\)"], "correctAnswer": 3, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v12_q30", "variant": 12, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 7 ga teng. Uning hajmini toping.", "options": ["\\(56\\pi\\)", "\\(28\\pi\\)", "\\(14\\pi\\)", "\\(49\\pi\\)"], "correctAnswer": 2, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v13_q1", "variant": 13, "text": "Hisoblang: \\(64 + 73\\)", "options": ["136", "137", "133", "140"], "correctAnswer": 1, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v13_q2", "variant": 13, "text": "Hisoblang: \\(71 \\cdot 9\\)", "options": ["649", "644", "634", "639"], "correctAnswer": 1, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v13_q3", "variant": 13, "text": "Soddalashtiring: \\(\\left(\\frac{1}{56} + \\frac{1}{46}\\right) \\cdot 2576\\)", "options": ["107", "102", "204", "100"], "correctAnswer": 3, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v13_q4", "variant": 13, "text": "\\(600\\) ning \\(2\\%\\) ini toping.", "options": ["14", "11", "17", "12"], "correctAnswer": 0, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v13_q5", "variant": 13, "text": "Tenglamani yeching: \\(x + 31 = 70\\)", "options": ["39", "36", "43", "78"], "correctAnswer": 0, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v13_q6", "variant": 13, "text": "Soddalashtiring: \\((9x + 3y)^2 - 54xy\\)", "options": ["\\(81x^2 - 9y^2\\)", "\\(9x^2 + 3y^2\\)", "\\(81x^2 + 54xy + 9y^2\\)", "\\(81x^2 + 9y^2\\)"], "correctAnswer": 0, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v13_q7", "variant": 13, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 16\\)", "options": ["\\((x - 4)(x + 4)\\)", "\\(x(x - 16)\\)", "\\((x - 4)^2\\)", "\\((x + 4)^2\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v13_q8", "variant": 13, "text": "Hisoblang: \\(\\sqrt{81 \\cdot 16}\\)", "options": ["72", "34", "36", "39"], "correctAnswer": 1, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v13_q9", "variant": 13, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{9} = \\frac{36}{4}\\)", "options": ["81", "82", "162", "78"], "correctAnswer": 1, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v13_q10", "variant": 13, "text": "Ifodani qiymatini toping: \\(5a + 6b\\), bunda \\(a=3, b=2\\)", "options": ["28", "25", "31", "27"], "correctAnswer": 3, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v13_q11", "variant": 13, "text": "Tengsizlikni yeching: \\(x + 3 < 11\\)", "options": ["\\([8; \\infty)\\)", "\\((-\\infty; 8\\)\\)", "\\((8; \\infty)\\)", "\\((-\\infty; 8]\\)"], "correctAnswer": 2, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v13_q12", "variant": 13, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 16x + 48 = 0\\)", "options": ["12", "48", "4", "16"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v13_q13", "variant": 13, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 7\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["26", "66", "40", "33"], "correctAnswer": 0, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v13_q14", "variant": 13, "text": "Geometrik progressiyada \\(b_1 = 5\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["20", "18", "24", "40"], "correctAnswer": 0, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v13_q15", "variant": 13, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 13 \\\\ x - y = -3 \\end{cases}\\)", "options": ["40", "42", "35", "50"], "correctAnswer": 1, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v13_q16", "variant": 13, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(\\sqrt{3}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(1\\)", "\\(\\frac{1 - \\sqrt{3}}{2}\\)"], "correctAnswer": 1, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v13_q17", "variant": 13, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)", "\\(1\\)", "\\(0\\)"], "correctAnswer": 1, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v13_q18", "variant": 13, "text": "Tenglamani yeching: \\(\\log_2 x = 3\\)", "options": ["6", "8", "12", "16"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v13_q19", "variant": 13, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["4", "3", "5", "8"], "correctAnswer": 2, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v13_q20", "variant": 13, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\([0; 9]\\)", "\\((-\\infty; 9)\\)", "\\((9; \\infty)\\)", "\\((0; 9)\\)"], "correctAnswer": 1, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v13_q21", "variant": 13, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{5}\\)", "options": ["\\(5x^{4}\\)", "\\(\\frac{x^{6}}{6}\\)", "\\(x^{4}\\)", "\\(5x^{5}\\)"], "correctAnswer": 2, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v13_q22", "variant": 13, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["10", "30", "32", "64"], "correctAnswer": 1, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v13_q23", "variant": 13, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\([5; \\infty)\\)", "\\((5; \\infty)\\)", "\\((-\\infty; 5]\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 1, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v13_q24", "variant": 13, "text": "Funksiya berilgan: \\(f(x) = 5x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["15", "20", "12", "30"], "correctAnswer": 0, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v13_q25", "variant": 13, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\tan x + C\\)", "\\(\\cos x + C\\)", "\\(-\\sin x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v13_q26", "variant": 13, "text": "To'g'ri burchakli uchburchakning katetlari 6 va 4 ga teng. Uning yuzini toping.", "options": ["24", "17", "9", "12"], "correctAnswer": 3, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v13_q27", "variant": 13, "text": "To'g'ri to'rtburchakning tomonlari 4 va 8 ga teng. Uning perimetrini toping.", "options": ["26", "20", "48", "24"], "correctAnswer": 1, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v13_q28", "variant": 13, "text": "Kubning qirrasi 4 ga teng. Uning hajmini toping.", "options": ["54", "84", "64", "16"], "correctAnswer": 0, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v13_q29", "variant": 13, "text": "Radiusi 6 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(12\\pi\\)", "\\(6\\pi\\)", "\\(216\\pi\\)", "\\(36\\pi\\)"], "correctAnswer": 0, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v13_q30", "variant": 13, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 5 ga teng. Uning hajmini toping.", "options": ["\\(40\\pi\\)", "\\(25\\pi\\)", "\\(10\\pi\\)", "\\(20\\pi\\)"], "correctAnswer": 2, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v14_q1", "variant": 14, "text": "Hisoblang: \\(66 + 15\\)", "options": ["81", "90", "80", "71"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v14_q2", "variant": 14, "text": "Hisoblang: \\(89 \\cdot 2\\)", "options": ["173", "188", "178", "184"], "correctAnswer": 3, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v14_q3", "variant": 14, "text": "Soddalashtiring: \\(\\left(\\frac{1}{50} + \\frac{1}{67}\\right) \\cdot 3350\\)", "options": ["115", "117", "234", "122"], "correctAnswer": 0, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v14_q4", "variant": 14, "text": "\\(250\\) ning \\(3\\%\\) ini toping.", "options": ["7", "9", "6", "12"], "correctAnswer": 1, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v14_q5", "variant": 14, "text": "Tenglamani yeching: \\(x + 64 = 40\\)", "options": ["-27", "-48", "-24", "-21"], "correctAnswer": 2, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v14_q6", "variant": 14, "text": "Soddalashtiring: \\((4x + 9y)^2 - 72xy\\)", "options": ["\\(4x^2 + 9y^2\\)", "\\(16x^2 - 81y^2\\)", "\\(16x^2 + 81y^2\\)", "\\(16x^2 + 72xy + 81y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v14_q7", "variant": 14, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 9\\)", "options": ["\\((x - 3)^2\\)", "\\(x(x - 9)\\)", "\\((x + 3)^2\\)", "\\((x - 3)(x + 3)\\)"], "correctAnswer": 3, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v14_q8", "variant": 14, "text": "Hisoblang: \\(\\sqrt{81 \\cdot 36}\\)", "options": ["54", "57", "108", "52"], "correctAnswer": 3, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v14_q9", "variant": 14, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{2} = \\frac{10}{5}\\)", "options": ["5", "1", "8", "4"], "correctAnswer": 0, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v14_q10", "variant": 14, "text": "Ifodani qiymatini toping: \\(6a + 7b\\), bunda \\(a=3, b=2\\)", "options": ["30", "32", "36", "33"], "correctAnswer": 1, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v14_q11", "variant": 14, "text": "Tengsizlikni yeching: \\(x + 2 < 13\\)", "options": ["\\((-\\infty; 11]\\)", "\\([11; \\infty)\\)", "\\((-\\infty; 11\\)\\)", "\\((11; \\infty)\\)"], "correctAnswer": 3, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v14_q12", "variant": 14, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 11x + 30 = 0\\)", "options": ["6", "11", "30", "5"], "correctAnswer": 2, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v14_q13", "variant": 14, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 9\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["82", "50", "41", "32"], "correctAnswer": 3, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v14_q14", "variant": 14, "text": "Geometrik progressiyada \\(b_1 = 3\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "24", "12", "10"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v14_q15", "variant": 14, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 16 \\\\ x - y = -6 \\end{cases}\\)", "options": ["55", "57", "65", "50"], "correctAnswer": 1, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v14_q16", "variant": 14, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(\\frac{1 - \\sqrt{3}}{2}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)"], "correctAnswer": 2, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v14_q17", "variant": 14, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(0\\)", "\\(2\\cos^2 x\\)", "\\(1\\)", "\\(2\\sin^2 x\\)"], "correctAnswer": 3, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v14_q18", "variant": 14, "text": "Tenglamani yeching: \\(\\log_2 x = 3\\)", "options": ["6", "8", "12", "16"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v14_q19", "variant": 14, "text": "Tenglamani yeching: \\(2^x = 32\\)", "options": ["4", "5", "10", "6"], "correctAnswer": 3, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v14_q20", "variant": 14, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((9; \\infty)\\)", "\\((-\\infty; 9)\\)", "\\((0; 9)\\)", "\\([0; 9]\\)"], "correctAnswer": 1, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v14_q21", "variant": 14, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{2}\\)", "options": ["\\(2x^{1}\\)", "\\(\\frac{x^{3}}{3}\\)", "\\(x^{1}\\)", "\\(2x^{2}\\)"], "correctAnswer": 2, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v14_q22", "variant": 14, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 3x^{2} dx\\)", "options": ["6", "16", "8", "6"], "correctAnswer": 0, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v14_q23", "variant": 14, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\((-\\infty; 5]\\)", "\\([5; \\infty)\\)", "\\((5; \\infty)\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 2, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v14_q24", "variant": 14, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["9", "6", "14", "18"], "correctAnswer": 0, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v14_q25", "variant": 14, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\sin x + C\\)", "\\(\\tan x + C\\)", "\\(\\cos x + C\\)", "\\(-\\sin x + C\\)"], "correctAnswer": 3, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v14_q26", "variant": 14, "text": "To'g'ri burchakli uchburchakning katetlari 3 va 10 ga teng. Uning yuzini toping.", "options": ["20", "12", "15", "30"], "correctAnswer": 2, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v14_q27", "variant": 14, "text": "To'g'ri to'rtburchakning tomonlari 3 va 5 ga teng. Uning perimetrini toping.", "options": ["12", "18", "16", "32"], "correctAnswer": 0, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v14_q28", "variant": 14, "text": "Kubning qirrasi 7 ga teng. Uning hajmini toping.", "options": ["363", "49", "333", "343"], "correctAnswer": 2, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v14_q29", "variant": 14, "text": "Radiusi 3 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(3\\pi\\)", "\\(27\\pi\\)", "\\(6\\pi\\)", "\\(9\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v14_q30", "variant": 14, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 5 ga teng. Uning hajmini toping.", "options": ["\\(20\\pi\\)", "\\(10\\pi\\)", "\\(40\\pi\\)", "\\(25\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v15_q1", "variant": 15, "text": "Hisoblang: \\(91 + 38\\)", "options": ["129", "128", "124", "132"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v15_q2", "variant": 15, "text": "Hisoblang: \\(31 \\cdot 9\\)", "options": ["283", "279", "274", "289"], "correctAnswer": 0, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v15_q3", "variant": 15, "text": "Soddalashtiring: \\(\\left(\\frac{1}{69} + \\frac{1}{26}\\right) \\cdot 1794\\)", "options": ["190", "95", "100", "93"], "correctAnswer": 3, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v15_q4", "variant": 15, "text": "\\(630\\) ning \\(4\\%\\) ini toping.", "options": ["27", "24", "30", "25"], "correctAnswer": 0, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v15_q5", "variant": 15, "text": "Tenglamani yeching: \\(x + 25 = 90\\)", "options": ["62", "71", "65", "130"], "correctAnswer": 2, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v15_q6", "variant": 15, "text": "Soddalashtiring: \\((4x + 9y)^2 - 72xy\\)", "options": ["\\(16x^2 + 81y^2\\)", "\\(4x^2 + 9y^2\\)", "\\(16x^2 + 72xy + 81y^2\\)", "\\(16x^2 - 81y^2\\)"], "correctAnswer": 3, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v15_q7", "variant": 15, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 4\\)", "options": ["\\((x + 2)^2\\)", "\\((x - 2)(x + 2)\\)", "\\(x(x - 4)\\)", "\\((x - 2)^2\\)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v15_q8", "variant": 15, "text": "Hisoblang: \\(\\sqrt{36 \\cdot 25}\\)", "options": ["28", "60", "30", "33"], "correctAnswer": 0, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v15_q9", "variant": 15, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{6} = \\frac{16}{4}\\)", "options": ["21", "48", "24", "25"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v15_q10", "variant": 15, "text": "Ifodani qiymatini toping: \\(8a + 9b\\), bunda \\(a=3, b=2\\)", "options": ["42", "40", "46", "43"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v15_q11", "variant": 15, "text": "Tengsizlikni yeching: \\(x + 3 < 14\\)", "options": ["\\((-\\infty; 11\\)\\)", "\\((11; \\infty)\\)", "\\((-\\infty; 11]\\)", "\\([11; \\infty)\\)"], "correctAnswer": 1, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v15_q12", "variant": 15, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 15x + 50 = 0\\)", "options": ["5", "10", "50", "15"], "correctAnswer": 2, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v15_q13", "variant": 15, "text": "Arifmetik progressiyada \\(a_1 = 4\\), \\(d = 6\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["28", "22", "56", "34"], "correctAnswer": 1, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v15_q14", "variant": 15, "text": "Geometrik progressiyada \\(b_1 = 2\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["8", "12", "6", "16"], "correctAnswer": 0, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v15_q15", "variant": 15, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 10 \\\\ x - y = -2 \\end{cases}\\)", "options": ["26", "24", "19", "34"], "correctAnswer": 0, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v15_q16", "variant": 15, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(\\frac{1 - \\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)"], "correctAnswer": 3, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v15_q17", "variant": 15, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(0\\)", "\\(1\\)", "\\(2\\sin^2 x\\)", "\\(2\\cos^2 x\\)"], "correctAnswer": 2, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v15_q18", "variant": 15, "text": "Tenglamani yeching: \\(\\log_2 x = 3\\)", "options": ["8", "16", "6", "12"], "correctAnswer": 2, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v15_q19", "variant": 15, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["4", "5", "3", "8"], "correctAnswer": 1, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v15_q20", "variant": 15, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\([0; 9]\\)", "\\((9; \\infty)\\)", "\\((-\\infty; 9)\\)", "\\((0; 9)\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v15_q21", "variant": 15, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{2}\\)", "options": ["\\(\\frac{x^{3}}{3}\\)", "\\(x^{1}\\)", "\\(2x^{2}\\)", "\\(2x^{1}\\)"], "correctAnswer": 1, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v15_q22", "variant": 15, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 3x^{2} dx\\)", "options": ["6", "16", "6", "8"], "correctAnswer": 0, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v15_q23", "variant": 15, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 3}\\)", "options": ["\\((-\\infty; 3]\\)", "\\((3; \\infty)\\)", "\\([3; \\infty)\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 1, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v15_q24", "variant": 15, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["6", "18", "9", "14"], "correctAnswer": 2, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v15_q25", "variant": 15, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(\\tan x + C\\)", "\\(-\\sin x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v15_q26", "variant": 15, "text": "To'g'ri burchakli uchburchakning katetlari 7 va 8 ga teng. Uning yuzini toping.", "options": ["33", "28", "25", "56"], "correctAnswer": 1, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v15_q27", "variant": 15, "text": "To'g'ri to'rtburchakning tomonlari 7 va 8 ga teng. Uning perimetrini toping.", "options": ["26", "60", "32", "30"], "correctAnswer": 0, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v15_q28", "variant": 15, "text": "Kubning qirrasi 5 ga teng. Uning hajmini toping.", "options": ["115", "145", "25", "125"], "correctAnswer": 0, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v15_q29", "variant": 15, "text": "Radiusi 5 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(10\\pi\\)", "\\(125\\pi\\)", "\\(5\\pi\\)", "\\(25\\pi\\)"], "correctAnswer": 0, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v15_q30", "variant": 15, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 3 ga teng. Uning hajmini toping.", "options": ["\\(9\\pi\\)", "\\(6\\pi\\)", "\\(12\\pi\\)", "\\(24\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v16_q1", "variant": 16, "text": "Hisoblang: \\(60 + 72\\)", "options": ["132", "131", "127", "137"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v16_q2", "variant": 16, "text": "Hisoblang: \\(44 \\cdot 9\\)", "options": ["391", "406", "403", "396"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v16_q3", "variant": 16, "text": "Soddalashtiring: \\(\\left(\\frac{1}{76} + \\frac{1}{16}\\right) \\cdot 1216\\)", "options": ["184", "97", "92", "90"], "correctAnswer": 3, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v16_q4", "variant": 16, "text": "\\(130\\) ning \\(9\\%\\) ini toping.", "options": ["11", "10", "13", "16"], "correctAnswer": 2, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v16_q5", "variant": 16, "text": "Tenglamani yeching: \\(x + 27 = 20\\)", "options": ["-10", "-4", "-14", "-7"], "correctAnswer": 3, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v16_q6", "variant": 16, "text": "Soddalashtiring: \\((9x + 3y)^2 - 54xy\\)", "options": ["\\(81x^2 + 54xy + 9y^2\\)", "\\(81x^2 - 9y^2\\)", "\\(9x^2 + 3y^2\\)", "\\(81x^2 + 9y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v16_q7", "variant": 16, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 9\\)", "options": ["\\((x - 3)^2\\)", "\\((x + 3)^2\\)", "\\((x - 3)(x + 3)\\)", "\\(x(x - 9)\\)"], "correctAnswer": 2, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v16_q8", "variant": 16, "text": "Hisoblang: \\(\\sqrt{16 \\cdot 49}\\)", "options": ["31", "56", "26", "28"], "correctAnswer": 2, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v16_q9", "variant": 16, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{8} = \\frac{10}{2}\\)", "options": ["41", "40", "80", "37"], "correctAnswer": 0, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v16_q10", "variant": 16, "text": "Ifodani qiymatini toping: \\(6a + 8b\\), bunda \\(a=3, b=2\\)", "options": ["38", "34", "35", "32"], "correctAnswer": 1, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v16_q11", "variant": 16, "text": "Tengsizlikni yeching: \\(x + 4 < 14\\)", "options": ["\\((10; \\infty)\\)", "\\((-\\infty; 10\\)\\)", "\\([10; \\infty)\\)", "\\((-\\infty; 10]\\)"], "correctAnswer": 0, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v16_q12", "variant": 16, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 12x + 27 = 0\\)", "options": ["27", "9", "3", "12"], "correctAnswer": 0, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v16_q13", "variant": 16, "text": "Arifmetik progressiyada \\(a_1 = 4\\), \\(d = 11\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["48", "96", "59", "37"], "correctAnswer": 3, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v16_q14", "variant": 16, "text": "Geometrik progressiyada \\(b_1 = 3\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "12", "24", "10"], "correctAnswer": 1, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v16_q15", "variant": 16, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 15 \\\\ x - y = -7 \\end{cases}\\)", "options": ["46", "44", "54", "39"], "correctAnswer": 0, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v16_q16", "variant": 16, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(0\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)", "\\(1\\)"], "correctAnswer": 2, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v16_q17", "variant": 16, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(0\\)", "\\(2\\sin^2 x\\)", "\\(2\\cos^2 x\\)", "\\(1\\)"], "correctAnswer": 1, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v16_q18", "variant": 16, "text": "Tenglamani yeching: \\(\\log_2 x = 2\\)", "options": ["2", "4", "8", "8"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v16_q19", "variant": 16, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["6", "4", "2", "3"], "correctAnswer": 1, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v16_q20", "variant": 16, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((9; \\infty)\\)", "\\([0; 9]\\)", "\\((-\\infty; 9)\\)", "\\((0; 9)\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v16_q21", "variant": 16, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{3}\\)", "options": ["\\(3x^{3}\\)", "\\(\\frac{x^{4}}{4}\\)", "\\(x^{2}\\)", "\\(3x^{2}\\)"], "correctAnswer": 2, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v16_q22", "variant": 16, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["64", "30", "32", "10"], "correctAnswer": 1, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v16_q23", "variant": 16, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 3}\\)", "options": ["\\((-\\infty; 3]\\)", "\\((3; \\infty)\\)", "\\([3; \\infty)\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 1, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v16_q24", "variant": 16, "text": "Funksiya berilgan: \\(f(x) = 3x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["22", "16", "8", "11"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v16_q25", "variant": 16, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(-\\sin x + C\\)", "\\(\\cos x + C\\)", "\\(\\tan x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 0, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v16_q26", "variant": 16, "text": "To'g'ri burchakli uchburchakning katetlari 5 va 5 ga teng. Uning yuzini toping.", "options": ["9", "17", "12", "24"], "correctAnswer": 2, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v16_q27", "variant": 16, "text": "To'g'ri to'rtburchakning tomonlari 5 va 7 ga teng. Uning perimetrini toping.", "options": ["48", "20", "26", "24"], "correctAnswer": 1, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v16_q28", "variant": 16, "text": "Kubning qirrasi 3 ga teng. Uning hajmini toping.", "options": ["9", "27", "17", "47"], "correctAnswer": 2, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v16_q29", "variant": 16, "text": "Radiusi 7 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(49\\pi\\)", "\\(343\\pi\\)", "\\(7\\pi\\)", "\\(14\\pi\\)"], "correctAnswer": 3, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v16_q30", "variant": 16, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 3 ga teng. Uning hajmini toping.", "options": ["\\(12\\pi\\)", "\\(6\\pi\\)", "\\(9\\pi\\)", "\\(24\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v17_q1", "variant": 17, "text": "Hisoblang: \\(72 + 58\\)", "options": ["129", "134", "130", "120"], "correctAnswer": 2, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v17_q2", "variant": 17, "text": "Hisoblang: \\(63 \\cdot 6\\)", "options": ["373", "388", "381", "378"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v17_q3", "variant": 17, "text": "Soddalashtiring: \\(\\left(\\frac{1}{76} + \\frac{1}{61}\\right) \\cdot 4636\\)", "options": ["274", "137", "135", "142"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v17_q4", "variant": 17, "text": "\\(770\\) ning \\(5\\%\\) ini toping.", "options": ["38", "37", "43", "40"], "correctAnswer": 3, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v17_q5", "variant": 17, "text": "Tenglamani yeching: \\(x + 87 = 22\\)", "options": ["-68", "-60", "-130", "-65"], "correctAnswer": 3, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v17_q6", "variant": 17, "text": "Soddalashtiring: \\((9x + 9y)^2 - 162xy\\)", "options": ["\\(81x^2 + 162xy + 81y^2\\)", "\\(9x^2 + 9y^2\\)", "\\(81x^2 + 81y^2\\)", "\\(81x^2 - 81y^2\\)"], "correctAnswer": 3, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v17_q7", "variant": 17, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 16\\)", "options": ["\\((x - 4)^2\\)", "\\(x(x - 16)\\)", "\\((x + 4)^2\\)", "\\((x - 4)(x + 4)\\)"], "correctAnswer": 3, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v17_q8", "variant": 17, "text": "Hisoblang: \\(\\sqrt{49 \\cdot 9}\\)", "options": ["21", "24", "19", "42"], "correctAnswer": 2, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v17_q9", "variant": 17, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{2} = \\frac{18}{2}\\)", "options": ["15", "18", "36", "19"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v17_q10", "variant": 17, "text": "Ifodani qiymatini toping: \\(8a + 2b\\), bunda \\(a=3, b=2\\)", "options": ["28", "29", "32", "26"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v17_q11", "variant": 17, "text": "Tengsizlikni yeching: \\(x + 5 < 13\\)", "options": ["\\((-\\infty; 8]\\)", "\\((-\\infty; 8\\)\\)", "\\([8; \\infty)\\)", "\\((8; \\infty)\\)"], "correctAnswer": 3, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v17_q12", "variant": 17, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 12x + 35 = 0\\)", "options": ["7", "35", "5", "12"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v17_q13", "variant": 17, "text": "Arifmetik progressiyada \\(a_1 = 4\\), \\(d = 7\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["32", "64", "25", "39"], "correctAnswer": 2, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v17_q14", "variant": 17, "text": "Geometrik progressiyada \\(b_1 = 5\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["40", "18", "24", "20"], "correctAnswer": 3, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v17_q15", "variant": 17, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 13 \\\\ x - y = -7 \\end{cases}\\)", "options": ["30", "25", "40", "32"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v17_q16", "variant": 17, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(\\frac{1 - \\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)"], "correctAnswer": 3, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v17_q17", "variant": 17, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\cos^2 x\\)", "\\(0\\)", "\\(2\\sin^2 x\\)", "\\(1\\)"], "correctAnswer": 2, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v17_q18", "variant": 17, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["20", "32", "14", "16"], "correctAnswer": 2, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v17_q19", "variant": 17, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["8", "3", "4", "5"], "correctAnswer": 3, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v17_q20", "variant": 17, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\((0; 9)\\)", "\\((9; \\infty)\\)", "\\([0; 9]\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v17_q21", "variant": 17, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{3}\\)", "options": ["\\(x^{2}\\)", "\\(3x^{3}\\)", "\\(3x^{2}\\)", "\\(\\frac{x^{4}}{4}\\)"], "correctAnswer": 0, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v17_q22", "variant": 17, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["30", "32", "64", "10"], "correctAnswer": 0, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v17_q23", "variant": 17, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 4}\\)", "options": ["\\((-\\infty; \\infty)\\)", "\\([4; \\infty)\\)", "\\((4; \\infty)\\)", "\\((-\\infty; 4]\\)"], "correctAnswer": 2, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v17_q24", "variant": 17, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["14", "9", "6", "18"], "correctAnswer": 1, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v17_q25", "variant": 17, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(\\sin x + C\\)", "\\(\\tan x + C\\)", "\\(-\\sin x + C\\)"], "correctAnswer": 3, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v17_q26", "variant": 17, "text": "To'g'ri burchakli uchburchakning katetlari 4 va 6 ga teng. Uning yuzini toping.", "options": ["12", "9", "24", "17"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v17_q27", "variant": 17, "text": "To'g'ri to'rtburchakning tomonlari 8 va 4 ga teng. Uning perimetrini toping.", "options": ["20", "48", "24", "26"], "correctAnswer": 0, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v17_q28", "variant": 17, "text": "Kubning qirrasi 6 ga teng. Uning hajmini toping.", "options": ["206", "216", "236", "36"], "correctAnswer": 0, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v17_q29", "variant": 17, "text": "Radiusi 8 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(16\\pi\\)", "\\(64\\pi\\)", "\\(512\\pi\\)", "\\(8\\pi\\)"], "correctAnswer": 0, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v17_q30", "variant": 17, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 4 ga teng. Uning hajmini toping.", "options": ["\\(16\\pi\\)", "\\(16\\pi\\)", "\\(8\\pi\\)", "\\(32\\pi\\)"], "correctAnswer": 2, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v18_q1", "variant": 18, "text": "Hisoblang: \\(23 + 93\\)", "options": ["123", "113", "116", "115"], "correctAnswer": 2, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v18_q2", "variant": 18, "text": "Hisoblang: \\(95 \\cdot 8\\)", "options": ["755", "765", "760", "770"], "correctAnswer": 1, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v18_q3", "variant": 18, "text": "Soddalashtiring: \\(\\left(\\frac{1}{76} + \\frac{1}{48}\\right) \\cdot 3648\\)", "options": ["129", "124", "248", "122"], "correctAnswer": 3, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v18_q4", "variant": 18, "text": "\\(910\\) ning \\(7\\%\\) ini toping.", "options": ["68", "63", "65", "62"], "correctAnswer": 2, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v18_q5", "variant": 18, "text": "Tenglamani yeching: \\(x + 52 = 83\\)", "options": ["31", "37", "28", "62"], "correctAnswer": 0, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v18_q6", "variant": 18, "text": "Soddalashtiring: \\((3x + 6y)^2 - 36xy\\)", "options": ["\\(9x^2 + 36xy + 36y^2\\)", "\\(9x^2 + 36y^2\\)", "\\(9x^2 - 36y^2\\)", "\\(3x^2 + 6y^2\\)"], "correctAnswer": 2, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v18_q7", "variant": 18, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 16\\)", "options": ["\\((x + 4)^2\\)", "\\((x - 4)^2\\)", "\\(x(x - 16)\\)", "\\((x - 4)(x + 4)\\)"], "correctAnswer": 3, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v18_q8", "variant": 18, "text": "Hisoblang: \\(\\sqrt{4 \\cdot 4}\\)", "options": ["2", "4", "8", "7"], "correctAnswer": 0, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v18_q9", "variant": 18, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{6} = \\frac{9}{3}\\)", "options": ["18", "15", "19", "36"], "correctAnswer": 2, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v18_q10", "variant": 18, "text": "Ifodani qiymatini toping: \\(3a + 2b\\), bunda \\(a=3, b=2\\)", "options": ["14", "17", "13", "11"], "correctAnswer": 2, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v18_q11", "variant": 18, "text": "Tengsizlikni yeching: \\(x + 4 < 16\\)", "options": ["\\((-\\infty; 12\\)\\)", "\\((-\\infty; 12]\\)", "\\([12; \\infty)\\)", "\\((12; \\infty)\\)"], "correctAnswer": 3, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v18_q12", "variant": 18, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 16x + 48 = 0\\)", "options": ["48", "4", "16", "12"], "correctAnswer": 0, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v18_q13", "variant": 18, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 11\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["60", "49", "38", "98"], "correctAnswer": 2, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v18_q14", "variant": 18, "text": "Geometrik progressiyada \\(b_1 = 3\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "10", "12", "24"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v18_q15", "variant": 18, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 9 \\\\ x - y = -5 \\end{cases}\\)", "options": ["16", "24", "9", "14"], "correctAnswer": 0, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v18_q16", "variant": 18, "text": "Hisoblang: \\(\\sin 45^\\circ + \\cos 45^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(2\\)", "\\(\\sqrt{2}\\)", "\\(\\frac{\\sqrt{2}}{2}\\)"], "correctAnswer": 0, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v18_q17", "variant": 18, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\sin^2 x\\)", "\\(1\\)", "\\(0\\)", "\\(2\\cos^2 x\\)"], "correctAnswer": 0, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v18_q18", "variant": 18, "text": "Tenglamani yeching: \\(\\log_2 x = 3\\)", "options": ["16", "12", "6", "8"], "correctAnswer": 2, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v18_q19", "variant": 18, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["4", "2", "6", "3"], "correctAnswer": 0, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v18_q20", "variant": 18, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\([0; 9]\\)", "\\((9; \\infty)\\)", "\\((0; 9)\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v18_q21", "variant": 18, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{4}\\)", "options": ["\\(4x^{4}\\)", "\\(x^{3}\\)", "\\(\\frac{x^{5}}{5}\\)", "\\(4x^{3}\\)"], "correctAnswer": 1, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v18_q22", "variant": 18, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 4x^{3} dx\\)", "options": ["8", "32", "14", "16"], "correctAnswer": 2, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v18_q23", "variant": 18, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 4}\\)", "options": ["\\((-\\infty; 4]\\)", "\\((-\\infty; \\infty)\\)", "\\((4; \\infty)\\)", "\\([4; \\infty)\\)"], "correctAnswer": 2, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v18_q24", "variant": 18, "text": "Funksiya berilgan: \\(f(x) = 3x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["16", "22", "8", "11"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v18_q25", "variant": 18, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(\\tan x + C\\)", "\\(-\\sin x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v18_q26", "variant": 18, "text": "To'g'ri burchakli uchburchakning katetlari 8 va 5 ga teng. Uning yuzini toping.", "options": ["20", "40", "17", "25"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v18_q27", "variant": 18, "text": "To'g'ri to'rtburchakning tomonlari 5 va 10 ga teng. Uning perimetrini toping.", "options": ["26", "60", "30", "32"], "correctAnswer": 0, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v18_q28", "variant": 18, "text": "Kubning qirrasi 8 ga teng. Uning hajmini toping.", "options": ["512", "64", "532", "502"], "correctAnswer": 3, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v18_q29", "variant": 18, "text": "Radiusi 5 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(125\\pi\\)", "\\(5\\pi\\)", "\\(10\\pi\\)", "\\(25\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v18_q30", "variant": 18, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 7 ga teng. Uning hajmini toping.", "options": ["\\(14\\pi\\)", "\\(56\\pi\\)", "\\(28\\pi\\)", "\\(49\\pi\\)"], "correctAnswer": 0, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v19_q1", "variant": 19, "text": "Hisoblang: \\(77 + 23\\)", "options": ["108", "99", "90", "100"], "correctAnswer": 3, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v19_q2", "variant": 19, "text": "Hisoblang: \\(13 \\cdot 9\\)", "options": ["112", "117", "123", "127"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v19_q3", "variant": 19, "text": "Soddalashtiring: \\(\\left(\\frac{1}{98} + \\frac{1}{33}\\right) \\cdot 3234\\)", "options": ["131", "262", "129", "136"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v19_q4", "variant": 19, "text": "\\(710\\) ning \\(4\\%\\) ini toping.", "options": ["30", "28", "33", "27"], "correctAnswer": 0, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v19_q5", "variant": 19, "text": "Tenglamani yeching: \\(x + 23 = 96\\)", "options": ["70", "146", "73", "75"], "correctAnswer": 2, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v19_q6", "variant": 19, "text": "Soddalashtiring: \\((5x + 8y)^2 - 80xy\\)", "options": ["\\(5x^2 + 8y^2\\)", "\\(25x^2 - 64y^2\\)", "\\(25x^2 + 80xy + 64y^2\\)", "\\(25x^2 + 64y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v19_q7", "variant": 19, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 25\\)", "options": ["\\((x - 5)(x + 5)\\)", "\\((x - 5)^2\\)", "\\((x + 5)^2\\)", "\\(x(x - 25)\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v19_q8", "variant": 19, "text": "Hisoblang: \\(\\sqrt{25 \\cdot 81}\\)", "options": ["90", "43", "45", "48"], "correctAnswer": 1, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v19_q9", "variant": 19, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{6} = \\frac{12}{3}\\)", "options": ["25", "24", "48", "21"], "correctAnswer": 0, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v19_q10", "variant": 19, "text": "Ifodani qiymatini toping: \\(2a + 9b\\), bunda \\(a=3, b=2\\)", "options": ["25", "28", "24", "22"], "correctAnswer": 2, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v19_q11", "variant": 19, "text": "Tengsizlikni yeching: \\(x + 4 < 15\\)", "options": ["\\((-\\infty; 11]\\)", "\\([11; \\infty)\\)", "\\((-\\infty; 11\\)\\)", "\\((11; \\infty)\\)"], "correctAnswer": 3, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v19_q12", "variant": 19, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 13x + 22 = 0\\)", "options": ["13", "22", "11", "2"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v19_q13", "variant": 19, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 7\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["26", "33", "66", "40"], "correctAnswer": 0, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v19_q14", "variant": 19, "text": "Geometrik progressiyada \\(b_1 = 2\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["6", "8", "16", "12"], "correctAnswer": 1, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v19_q15", "variant": 19, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 10 \\\\ x - y = -6 \\end{cases}\\)", "options": ["26", "11", "16", "18"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v19_q16", "variant": 19, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(\\frac{1 - \\sqrt{3}}{2}\\)", "\\(1\\)", "\\(\\sqrt{3}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)"], "correctAnswer": 3, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v19_q17", "variant": 19, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(1\\)", "\\(0\\)", "\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)"], "correctAnswer": 3, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v19_q18", "variant": 19, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["14", "32", "20", "16"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v19_q19", "variant": 19, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["3", "2", "4", "6"], "correctAnswer": 2, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v19_q20", "variant": 19, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\((9; \\infty)\\)", "\\([0; 9]\\)", "\\((0; 9)\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v19_q21", "variant": 19, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{2}\\)", "options": ["\\(2x^{1}\\)", "\\(2x^{2}\\)", "\\(x^{1}\\)", "\\(\\frac{x^{3}}{3}\\)"], "correctAnswer": 2, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v19_q22", "variant": 19, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 2x^{1} dx\\)", "options": ["4", "8", "4", "2"], "correctAnswer": 3, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v19_q23", "variant": 19, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\([5; \\infty)\\)", "\\((5; \\infty)\\)", "\\((-\\infty; 5]\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 1, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v19_q24", "variant": 19, "text": "Funksiya berilgan: \\(f(x) = 4x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["26", "10", "13", "18"], "correctAnswer": 2, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v19_q25", "variant": 19, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\tan x + C\\)", "\\(\\sin x + C\\)", "\\(-\\sin x + C\\)", "\\(\\cos x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v19_q26", "variant": 19, "text": "To'g'ri burchakli uchburchakning katetlari 8 va 9 ga teng. Uning yuzini toping.", "options": ["36", "41", "72", "33"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v19_q27", "variant": 19, "text": "To'g'ri to'rtburchakning tomonlari 8 va 9 ga teng. Uning perimetrini toping.", "options": ["30", "68", "36", "34"], "correctAnswer": 0, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v19_q28", "variant": 19, "text": "Kubning qirrasi 4 ga teng. Uning hajmini toping.", "options": ["64", "54", "84", "16"], "correctAnswer": 1, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v19_q29", "variant": 19, "text": "Radiusi 7 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(7\\pi\\)", "\\(49\\pi\\)", "\\(343\\pi\\)", "\\(14\\pi\\)"], "correctAnswer": 3, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v19_q30", "variant": 19, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 4 ga teng. Uning hajmini toping.", "options": ["\\(16\\pi\\)", "\\(8\\pi\\)", "\\(32\\pi\\)", "\\(16\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v20_q1", "variant": 20, "text": "Hisoblang: \\(85 + 12\\)", "options": ["94", "96", "101", "97"], "correctAnswer": 3, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v20_q2", "variant": 20, "text": "Hisoblang: \\(10 \\cdot 7\\)", "options": ["80", "65", "70", "78"], "correctAnswer": 3, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v20_q3", "variant": 20, "text": "Soddalashtiring: \\(\\left(\\frac{1}{24} + \\frac{1}{81}\\right) \\cdot 1944\\)", "options": ["103", "210", "110", "105"], "correctAnswer": 0, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v20_q4", "variant": 20, "text": "\\(770\\) ning \\(5\\%\\) ini toping.", "options": ["37", "38", "40", "43"], "correctAnswer": 2, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v20_q5", "variant": 20, "text": "Tenglamani yeching: \\(x + 67 = 11\\)", "options": ["-56", "-59", "-112", "-51"], "correctAnswer": 0, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v20_q6", "variant": 20, "text": "Soddalashtiring: \\((8x + 3y)^2 - 48xy\\)", "options": ["\\(8x^2 + 3y^2\\)", "\\(64x^2 + 48xy + 9y^2\\)", "\\(64x^2 + 9y^2\\)", "\\(64x^2 - 9y^2\\)"], "correctAnswer": 3, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v20_q7", "variant": 20, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 25\\)", "options": ["\\((x - 5)(x + 5)\\)", "\\((x - 5)^2\\)", "\\((x + 5)^2\\)", "\\(x(x - 25)\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v20_q8", "variant": 20, "text": "Hisoblang: \\(\\sqrt{16 \\cdot 64}\\)", "options": ["32", "35", "64", "30"], "correctAnswer": 3, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v20_q9", "variant": 20, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{6} = \\frac{20}{5}\\)", "options": ["24", "21", "48", "25"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v20_q10", "variant": 20, "text": "Ifodani qiymatini toping: \\(4a + 9b\\), bunda \\(a=3, b=2\\)", "options": ["34", "28", "30", "31"], "correctAnswer": 2, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v20_q11", "variant": 20, "text": "Tengsizlikni yeching: \\(x + 3 < 15\\)", "options": ["\\([12; \\infty)\\)", "\\((-\\infty; 12\\)\\)", "\\((12; \\infty)\\)", "\\((-\\infty; 12]\\)"], "correctAnswer": 2, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v20_q12", "variant": 20, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 11x + 18 = 0\\)", "options": ["9", "11", "18", "2"], "correctAnswer": 2, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v20_q13", "variant": 20, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 12\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["106", "53", "65", "41"], "correctAnswer": 3, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v20_q14", "variant": 20, "text": "Geometrik progressiyada \\(b_1 = 4\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["20", "14", "16", "32"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v20_q15", "variant": 20, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 13 \\\\ x - y = -9 \\end{cases}\\)", "options": ["22", "17", "32", "24"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v20_q16", "variant": 20, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(\\sqrt{3}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(1\\)", "\\(0\\)"], "correctAnswer": 0, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v20_q17", "variant": 20, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\sin^2 x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\cos^2 x\\)"], "correctAnswer": 0, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v20_q18", "variant": 20, "text": "Tenglamani yeching: \\(\\log_2 x = 2\\)", "options": ["8", "8", "4", "2"], "correctAnswer": 3, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v20_q19", "variant": 20, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["2", "3", "4", "6"], "correctAnswer": 2, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v20_q20", "variant": 20, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\([0; 9]\\)", "\\((9; \\infty)\\)", "\\((0; 9)\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v20_q21", "variant": 20, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{5}\\)", "options": ["\\(5x^{5}\\)", "\\(\\frac{x^{6}}{6}\\)", "\\(x^{4}\\)", "\\(5x^{4}\\)"], "correctAnswer": 2, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v20_q22", "variant": 20, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 4x^{3} dx\\)", "options": ["14", "16", "32", "8"], "correctAnswer": 0, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v20_q23", "variant": 20, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\((5; \\infty)\\)", "\\([5; \\infty)\\)", "\\((-\\infty; 5]\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 0, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v20_q24", "variant": 20, "text": "Funksiya berilgan: \\(f(x) = 5x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["15", "30", "20", "12"], "correctAnswer": 0, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v20_q25", "variant": 20, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(\\sin x + C\\)", "\\(-\\sin x + C\\)", "\\(\\tan x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v20_q26", "variant": 20, "text": "To'g'ri burchakli uchburchakning katetlari 3 va 6 ga teng. Uning yuzini toping.", "options": ["6", "18", "14", "9"], "correctAnswer": 3, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v20_q27", "variant": 20, "text": "To'g'ri to'rtburchakning tomonlari 3 va 7 ga teng. Uning perimetrini toping.", "options": ["20", "22", "40", "16"], "correctAnswer": 3, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v20_q28", "variant": 20, "text": "Kubning qirrasi 5 ga teng. Uning hajmini toping.", "options": ["25", "115", "145", "125"], "correctAnswer": 1, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v20_q29", "variant": 20, "text": "Radiusi 8 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(64\\pi\\)", "\\(512\\pi\\)", "\\(16\\pi\\)", "\\(8\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v20_q30", "variant": 20, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 5 ga teng. Uning hajmini toping.", "options": ["\\(20\\pi\\)", "\\(10\\pi\\)", "\\(25\\pi\\)", "\\(40\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v21_q1", "variant": 21, "text": "Hisoblang: \\(99 + 56\\)", "options": ["154", "155", "162", "152"], "correctAnswer": 1, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v21_q2", "variant": 21, "text": "Hisoblang: \\(48 \\cdot 3\\)", "options": ["149", "144", "154", "139"], "correctAnswer": 0, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v21_q3", "variant": 21, "text": "Soddalashtiring: \\(\\left(\\frac{1}{20} + \\frac{1}{75}\\right) \\cdot 1500\\)", "options": ["190", "100", "95", "93"], "correctAnswer": 3, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v21_q4", "variant": 21, "text": "\\(330\\) ning \\(5\\%\\) ini toping.", "options": ["18", "15", "21", "16"], "correctAnswer": 0, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v21_q5", "variant": 21, "text": "Tenglamani yeching: \\(x + 28 = 87\\)", "options": ["59", "61", "56", "118"], "correctAnswer": 0, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v21_q6", "variant": 21, "text": "Soddalashtiring: \\((8x + 5y)^2 - 80xy\\)", "options": ["\\(64x^2 + 25y^2\\)", "\\(64x^2 + 80xy + 25y^2\\)", "\\(64x^2 - 25y^2\\)", "\\(8x^2 + 5y^2\\)"], "correctAnswer": 2, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v21_q7", "variant": 21, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 4\\)", "options": ["\\(x(x - 4)\\)", "\\((x - 2)(x + 2)\\)", "\\((x - 2)^2\\)", "\\((x + 2)^2\\)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v21_q8", "variant": 21, "text": "Hisoblang: \\(\\sqrt{36 \\cdot 16}\\)", "options": ["27", "48", "22", "24"], "correctAnswer": 2, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v21_q9", "variant": 21, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{8} = \\frac{32}{4}\\)", "options": ["64", "128", "61", "65"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v21_q10", "variant": 21, "text": "Ifodani qiymatini toping: \\(3a + 5b\\), bunda \\(a=3, b=2\\)", "options": ["19", "17", "23", "20"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v21_q11", "variant": 21, "text": "Tengsizlikni yeching: \\(x + 4 < 13\\)", "options": ["\\([9; \\infty)\\)", "\\((9; \\infty)\\)", "\\((-\\infty; 9\\)\\)", "\\((-\\infty; 9]\\)"], "correctAnswer": 1, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v21_q12", "variant": 21, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 11x + 18 = 0\\)", "options": ["9", "18", "11", "2"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v21_q13", "variant": 21, "text": "Arifmetik progressiyada \\(a_1 = 2\\), \\(d = 8\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["42", "26", "68", "34"], "correctAnswer": 1, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v21_q14", "variant": 21, "text": "Geometrik progressiyada \\(b_1 = 3\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "10", "12", "24"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v21_q15", "variant": 21, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 14 \\\\ x - y = -6 \\end{cases}\\)", "options": ["50", "42", "40", "35"], "correctAnswer": 1, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v21_q16", "variant": 21, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(0\\)", "\\(\\sqrt{3}\\)", "\\(1\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)"], "correctAnswer": 1, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v21_q17", "variant": 21, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(0\\)", "\\(2\\sin^2 x\\)", "\\(1\\)", "\\(2\\cos^2 x\\)"], "correctAnswer": 1, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v21_q18", "variant": 21, "text": "Tenglamani yeching: \\(\\log_2 x = 3\\)", "options": ["16", "6", "12", "8"], "correctAnswer": 1, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v21_q19", "variant": 21, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["8", "3", "4", "5"], "correctAnswer": 3, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v21_q20", "variant": 21, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((0; 9)\\)", "\\((9; \\infty)\\)", "\\((-\\infty; 9)\\)", "\\([0; 9]\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v21_q21", "variant": 21, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{3}\\)", "options": ["\\(\\frac{x^{4}}{4}\\)", "\\(3x^{2}\\)", "\\(3x^{3}\\)", "\\(x^{2}\\)"], "correctAnswer": 3, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v21_q22", "variant": 21, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["32", "64", "30", "10"], "correctAnswer": 2, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v21_q23", "variant": 21, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\([5; \\infty)\\)", "\\((-\\infty; \\infty)\\)", "\\((-\\infty; 5]\\)", "\\((5; \\infty)\\)"], "correctAnswer": 3, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v21_q24", "variant": 21, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["14", "6", "18", "9"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v21_q25", "variant": 21, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\sin x + C\\)", "\\(\\tan x + C\\)", "\\(\\cos x + C\\)", "\\(-\\sin x + C\\)"], "correctAnswer": 3, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v21_q26", "variant": 21, "text": "To'g'ri burchakli uchburchakning katetlari 4 va 4 ga teng. Uning yuzini toping.", "options": ["13", "8", "16", "5"], "correctAnswer": 1, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v21_q27", "variant": 21, "text": "To'g'ri to'rtburchakning tomonlari 3 va 8 ga teng. Uning perimetrini toping.", "options": ["24", "44", "18", "22"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v21_q28", "variant": 21, "text": "Kubning qirrasi 3 ga teng. Uning hajmini toping.", "options": ["27", "17", "47", "9"], "correctAnswer": 1, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v21_q29", "variant": 21, "text": "Radiusi 4 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(8\\pi\\)", "\\(16\\pi\\)", "\\(4\\pi\\)", "\\(64\\pi\\)"], "correctAnswer": 0, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v21_q30", "variant": 21, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 4 ga teng. Uning hajmini toping.", "options": ["\\(16\\pi\\)", "\\(16\\pi\\)", "\\(8\\pi\\)", "\\(32\\pi\\)"], "correctAnswer": 2, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v22_q1", "variant": 22, "text": "Hisoblang: \\(30 + 63\\)", "options": ["102", "88", "92", "93"], "correctAnswer": 3, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v22_q2", "variant": 22, "text": "Hisoblang: \\(12 \\cdot 4\\)", "options": ["58", "43", "56", "48"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v22_q3", "variant": 22, "text": "Soddalashtiring: \\(\\left(\\frac{1}{78} + \\frac{1}{76}\\right) \\cdot 5928\\)", "options": ["159", "154", "152", "308"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v22_q4", "variant": 22, "text": "\\(160\\) ning \\(6\\%\\) ini toping.", "options": ["14", "11", "9", "8"], "correctAnswer": 1, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v22_q5", "variant": 22, "text": "Tenglamani yeching: \\(x + 82 = 25\\)", "options": ["-60", "-54", "-57", "-114"], "correctAnswer": 2, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v22_q6", "variant": 22, "text": "Soddalashtiring: \\((9x + 8y)^2 - 144xy\\)", "options": ["\\(9x^2 + 8y^2\\)", "\\(81x^2 - 64y^2\\)", "\\(81x^2 + 144xy + 64y^2\\)", "\\(81x^2 + 64y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v22_q7", "variant": 22, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 36\\)", "options": ["\\((x - 6)(x + 6)\\)", "\\(x(x - 36)\\)", "\\((x + 6)^2\\)", "\\((x - 6)^2\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v22_q8", "variant": 22, "text": "Hisoblang: \\(\\sqrt{9 \\cdot 25}\\)", "options": ["15", "18", "30", "13"], "correctAnswer": 3, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v22_q9", "variant": 22, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{3} = \\frac{45}{5}\\)", "options": ["27", "54", "28", "24"], "correctAnswer": 2, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v22_q10", "variant": 22, "text": "Ifodani qiymatini toping: \\(3a + 7b\\), bunda \\(a=3, b=2\\)", "options": ["23", "27", "21", "24"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v22_q11", "variant": 22, "text": "Tengsizlikni yeching: \\(x + 2 < 13\\)", "options": ["\\([11; \\infty)\\)", "\\((-\\infty; 11\\)\\)", "\\((11; \\infty)\\)", "\\((-\\infty; 11]\\)"], "correctAnswer": 2, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v22_q12", "variant": 22, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 10x + 21 = 0\\)", "options": ["3", "21", "10", "7"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v22_q13", "variant": 22, "text": "Arifmetik progressiyada \\(a_1 = 4\\), \\(d = 12\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["52", "64", "40", "104"], "correctAnswer": 2, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v22_q14", "variant": 22, "text": "Geometrik progressiyada \\(b_1 = 4\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["20", "14", "16", "32"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v22_q15", "variant": 22, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 14 \\\\ x - y = -8 \\end{cases}\\)", "options": ["35", "28", "43", "33"], "correctAnswer": 0, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v22_q16", "variant": 22, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(0\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)", "\\(1\\)"], "correctAnswer": 2, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v22_q17", "variant": 22, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(1\\)", "\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)", "\\(0\\)"], "correctAnswer": 2, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v22_q18", "variant": 22, "text": "Tenglamani yeching: \\(\\log_2 x = 3\\)", "options": ["16", "6", "8", "12"], "correctAnswer": 1, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v22_q19", "variant": 22, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["3", "6", "4", "2"], "correctAnswer": 2, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v22_q20", "variant": 22, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((9; \\infty)\\)", "\\((0; 9)\\)", "\\((-\\infty; 9)\\)", "\\([0; 9]\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v22_q21", "variant": 22, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{5}\\)", "options": ["\\(\\frac{x^{6}}{6}\\)", "\\(5x^{4}\\)", "\\(5x^{5}\\)", "\\(x^{4}\\)"], "correctAnswer": 3, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v22_q22", "variant": 22, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 3x^{2} dx\\)", "options": ["8", "6", "6", "16"], "correctAnswer": 1, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v22_q23", "variant": 22, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 4}\\)", "options": ["\\([4; \\infty)\\)", "\\((-\\infty; \\infty)\\)", "\\((-\\infty; 4]\\)", "\\((4; \\infty)\\)"], "correctAnswer": 3, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v22_q24", "variant": 22, "text": "Funksiya berilgan: \\(f(x) = 3x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["22", "8", "16", "11"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v22_q25", "variant": 22, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\tan x + C\\)", "\\(\\cos x + C\\)", "\\(-\\sin x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v22_q26", "variant": 22, "text": "To'g'ri burchakli uchburchakning katetlari 3 va 8 ga teng. Uning yuzini toping.", "options": ["17", "9", "24", "12"], "correctAnswer": 3, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v22_q27", "variant": 22, "text": "To'g'ri to'rtburchakning tomonlari 8 va 6 ga teng. Uning perimetrini toping.", "options": ["56", "24", "30", "28"], "correctAnswer": 1, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v22_q28", "variant": 22, "text": "Kubning qirrasi 5 ga teng. Uning hajmini toping.", "options": ["25", "125", "115", "145"], "correctAnswer": 2, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v22_q29", "variant": 22, "text": "Radiusi 6 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(216\\pi\\)", "\\(6\\pi\\)", "\\(12\\pi\\)", "\\(36\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v22_q30", "variant": 22, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 4 ga teng. Uning hajmini toping.", "options": ["\\(32\\pi\\)", "\\(8\\pi\\)", "\\(16\\pi\\)", "\\(16\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v23_q1", "variant": 23, "text": "Hisoblang: \\(48 + 38\\)", "options": ["80", "86", "92", "85"], "correctAnswer": 1, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v23_q2", "variant": 23, "text": "Hisoblang: \\(19 \\cdot 7\\)", "options": ["133", "128", "137", "143"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v23_q3", "variant": 23, "text": "Soddalashtiring: \\(\\left(\\frac{1}{25} + \\frac{1}{17}\\right) \\cdot 425\\)", "options": ["84", "42", "47", "40"], "correctAnswer": 3, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v23_q4", "variant": 23, "text": "\\(800\\) ning \\(9\\%\\) ini toping.", "options": ["71", "77", "74", "72"], "correctAnswer": 2, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v23_q5", "variant": 23, "text": "Tenglamani yeching: \\(x + 33 = 59\\)", "options": ["31", "23", "52", "26"], "correctAnswer": 3, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v23_q6", "variant": 23, "text": "Soddalashtiring: \\((9x + 3y)^2 - 54xy\\)", "options": ["\\(81x^2 + 54xy + 9y^2\\)", "\\(9x^2 + 3y^2\\)", "\\(81x^2 + 9y^2\\)", "\\(81x^2 - 9y^2\\)"], "correctAnswer": 3, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v23_q7", "variant": 23, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 36\\)", "options": ["\\((x - 6)(x + 6)\\)", "\\(x(x - 36)\\)", "\\((x - 6)^2\\)", "\\((x + 6)^2\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v23_q8", "variant": 23, "text": "Hisoblang: \\(\\sqrt{81 \\cdot 4}\\)", "options": ["36", "21", "18", "16"], "correctAnswer": 3, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v23_q9", "variant": 23, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{6} = \\frac{28}{4}\\)", "options": ["84", "42", "43", "39"], "correctAnswer": 2, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v23_q10", "variant": 23, "text": "Ifodani qiymatini toping: \\(6a + 8b\\), bunda \\(a=3, b=2\\)", "options": ["32", "38", "34", "35"], "correctAnswer": 2, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v23_q11", "variant": 23, "text": "Tengsizlikni yeching: \\(x + 3 < 12\\)", "options": ["\\((9; \\infty)\\)", "\\((-\\infty; 9\\)\\)", "\\([9; \\infty)\\)", "\\((-\\infty; 9]\\)"], "correctAnswer": 0, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v23_q12", "variant": 23, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 11x + 30 = 0\\)", "options": ["6", "11", "30", "5"], "correctAnswer": 2, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v23_q13", "variant": 23, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 9\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["82", "41", "50", "32"], "correctAnswer": 3, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v23_q14", "variant": 23, "text": "Geometrik progressiyada \\(b_1 = 3\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["12", "16", "10", "24"], "correctAnswer": 0, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v23_q15", "variant": 23, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 11 \\\\ x - y = -3 \\end{cases}\\)", "options": ["38", "23", "28", "30"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v23_q16", "variant": 23, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(\\sqrt{3}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(1\\)", "\\(0\\)"], "correctAnswer": 0, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v23_q17", "variant": 23, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(0\\)", "\\(1\\)", "\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)"], "correctAnswer": 3, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v23_q18", "variant": 23, "text": "Tenglamani yeching: \\(\\log_2 x = 3\\)", "options": ["8", "16", "12", "6"], "correctAnswer": 3, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v23_q19", "variant": 23, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["6", "3", "2", "4"], "correctAnswer": 3, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v23_q20", "variant": 23, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\((9; \\infty)\\)", "\\((0; 9)\\)", "\\([0; 9]\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v23_q21", "variant": 23, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{4}\\)", "options": ["\\(\\frac{x^{5}}{5}\\)", "\\(4x^{4}\\)", "\\(x^{3}\\)", "\\(4x^{3}\\)"], "correctAnswer": 2, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v23_q22", "variant": 23, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 2x^{1} dx\\)", "options": ["2", "8", "4", "4"], "correctAnswer": 0, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v23_q23", "variant": 23, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\([5; \\infty)\\)", "\\((-\\infty; 5]\\)", "\\((-\\infty; \\infty)\\)", "\\((5; \\infty)\\)"], "correctAnswer": 3, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v23_q24", "variant": 23, "text": "Funksiya berilgan: \\(f(x) = 5x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["30", "12", "15", "20"], "correctAnswer": 2, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v23_q25", "variant": 23, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\sin x + C\\)", "\\(\\cos x + C\\)", "\\(-\\sin x + C\\)", "\\(\\tan x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v23_q26", "variant": 23, "text": "To'g'ri burchakli uchburchakning katetlari 6 va 9 ga teng. Uning yuzini toping.", "options": ["54", "27", "24", "32"], "correctAnswer": 1, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v23_q27", "variant": 23, "text": "To'g'ri to'rtburchakning tomonlari 4 va 4 ga teng. Uning perimetrini toping.", "options": ["18", "32", "12", "16"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v23_q28", "variant": 23, "text": "Kubning qirrasi 4 ga teng. Uning hajmini toping.", "options": ["84", "54", "64", "16"], "correctAnswer": 1, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v23_q29", "variant": 23, "text": "Radiusi 7 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(49\\pi\\)", "\\(343\\pi\\)", "\\(14\\pi\\)", "\\(7\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v23_q30", "variant": 23, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 5 ga teng. Uning hajmini toping.", "options": ["\\(40\\pi\\)", "\\(10\\pi\\)", "\\(25\\pi\\)", "\\(20\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v24_q1", "variant": 24, "text": "Hisoblang: \\(16 + 36\\)", "options": ["52", "61", "43", "51"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v24_q2", "variant": 24, "text": "Hisoblang: \\(96 \\cdot 6\\)", "options": ["581", "586", "576", "571"], "correctAnswer": 0, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v24_q3", "variant": 24, "text": "Soddalashtiring: \\(\\left(\\frac{1}{20} + \\frac{1}{73}\\right) \\cdot 1460\\)", "options": ["186", "93", "91", "98"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v24_q4", "variant": 24, "text": "\\(650\\) ning \\(3\\%\\) ini toping.", "options": ["18", "19", "24", "21"], "correctAnswer": 3, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v24_q5", "variant": 24, "text": "Tenglamani yeching: \\(x + 41 = 71\\)", "options": ["60", "30", "27", "35"], "correctAnswer": 1, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v24_q6", "variant": 24, "text": "Soddalashtiring: \\((8x + 7y)^2 - 112xy\\)", "options": ["\\(64x^2 - 49y^2\\)", "\\(64x^2 + 49y^2\\)", "\\(64x^2 + 112xy + 49y^2\\)", "\\(8x^2 + 7y^2\\)"], "correctAnswer": 0, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v24_q7", "variant": 24, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 64\\)", "options": ["\\((x - 8)(x + 8)\\)", "\\(x(x - 64)\\)", "\\((x - 8)^2\\)", "\\((x + 8)^2\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v24_q8", "variant": 24, "text": "Hisoblang: \\(\\sqrt{64 \\cdot 4}\\)", "options": ["32", "14", "19", "16"], "correctAnswer": 1, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v24_q9", "variant": 24, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{8} = \\frac{24}{4}\\)", "options": ["45", "48", "49", "96"], "correctAnswer": 2, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v24_q10", "variant": 24, "text": "Ifodani qiymatini toping: \\(3a + 4b\\), bunda \\(a=3, b=2\\)", "options": ["17", "18", "15", "21"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v24_q11", "variant": 24, "text": "Tengsizlikni yeching: \\(x + 2 < 12\\)", "options": ["\\([10; \\infty)\\)", "\\((10; \\infty)\\)", "\\((-\\infty; 10]\\)", "\\((-\\infty; 10\\)\\)"], "correctAnswer": 1, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v24_q12", "variant": 24, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 13x + 36 = 0\\)", "options": ["13", "9", "4", "36"], "correctAnswer": 3, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v24_q13", "variant": 24, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 11\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["49", "38", "98", "60"], "correctAnswer": 1, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v24_q14", "variant": 24, "text": "Geometrik progressiyada \\(b_1 = 3\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "10", "12", "24"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v24_q15", "variant": 24, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 10 \\\\ x - y = -4 \\end{cases}\\)", "options": ["16", "23", "31", "21"], "correctAnswer": 1, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v24_q16", "variant": 24, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(0\\)", "\\(\\sqrt{3}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(1\\)"], "correctAnswer": 1, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v24_q17", "variant": 24, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\cos^2 x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\sin^2 x\\)"], "correctAnswer": 3, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v24_q18", "variant": 24, "text": "Tenglamani yeching: \\(\\log_2 x = 4\\)", "options": ["14", "20", "32", "16"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v24_q19", "variant": 24, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["6", "3", "2", "4"], "correctAnswer": 3, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v24_q20", "variant": 24, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\((9; \\infty)\\)", "\\([0; 9]\\)", "\\((0; 9)\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v24_q21", "variant": 24, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{2}\\)", "options": ["\\(2x^{2}\\)", "\\(2x^{1}\\)", "\\(\\frac{x^{3}}{3}\\)", "\\(x^{1}\\)"], "correctAnswer": 3, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v24_q22", "variant": 24, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["10", "64", "32", "30"], "correctAnswer": 3, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v24_q23", "variant": 24, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 3}\\)", "options": ["\\((-\\infty; 3]\\)", "\\((-\\infty; \\infty)\\)", "\\([3; \\infty)\\)", "\\((3; \\infty)\\)"], "correctAnswer": 3, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v24_q24", "variant": 24, "text": "Funksiya berilgan: \\(f(x) = 4x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["18", "26", "10", "13"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v24_q25", "variant": 24, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(\\tan x + C\\)", "\\(-\\sin x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v24_q26", "variant": 24, "text": "To'g'ri burchakli uchburchakning katetlari 7 va 10 ga teng. Uning yuzini toping.", "options": ["70", "32", "35", "40"], "correctAnswer": 2, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v24_q27", "variant": 24, "text": "To'g'ri to'rtburchakning tomonlari 8 va 9 ga teng. Uning perimetrini toping.", "options": ["36", "34", "30", "68"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v24_q28", "variant": 24, "text": "Kubning qirrasi 5 ga teng. Uning hajmini toping.", "options": ["125", "145", "25", "115"], "correctAnswer": 3, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v24_q29", "variant": 24, "text": "Radiusi 5 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(5\\pi\\)", "\\(125\\pi\\)", "\\(25\\pi\\)", "\\(10\\pi\\)"], "correctAnswer": 3, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v24_q30", "variant": 24, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 3 ga teng. Uning hajmini toping.", "options": ["\\(24\\pi\\)", "\\(9\\pi\\)", "\\(6\\pi\\)", "\\(12\\pi\\)"], "correctAnswer": 2, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v25_q1", "variant": 25, "text": "Hisoblang: \\(32 + 50\\)", "options": ["79", "85", "81", "82"], "correctAnswer": 3, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v25_q2", "variant": 25, "text": "Hisoblang: \\(28 \\cdot 3\\)", "options": ["94", "92", "84", "79"], "correctAnswer": 1, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v25_q3", "variant": 25, "text": "Soddalashtiring: \\(\\left(\\frac{1}{50} + \\frac{1}{76}\\right) \\cdot 3800\\)", "options": ["252", "126", "124", "131"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v25_q4", "variant": 25, "text": "\\(250\\) ning \\(4\\%\\) ini toping.", "options": ["10", "15", "12", "9"], "correctAnswer": 2, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v25_q5", "variant": 25, "text": "Tenglamani yeching: \\(x + 48 = 72\\)", "options": ["30", "48", "21", "24"], "correctAnswer": 3, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v25_q6", "variant": 25, "text": "Soddalashtiring: \\((9x + 7y)^2 - 126xy\\)", "options": ["\\(9x^2 + 7y^2\\)", "\\(81x^2 - 49y^2\\)", "\\(81x^2 + 126xy + 49y^2\\)", "\\(81x^2 + 49y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v25_q7", "variant": 25, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 9\\)", "options": ["\\((x - 3)(x + 3)\\)", "\\((x - 3)^2\\)", "\\(x(x - 9)\\)", "\\((x + 3)^2\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v25_q8", "variant": 25, "text": "Hisoblang: \\(\\sqrt{16 \\cdot 4}\\)", "options": ["8", "6", "16", "11"], "correctAnswer": 1, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v25_q9", "variant": 25, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{9} = \\frac{4}{2}\\)", "options": ["15", "36", "18", "19"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v25_q10", "variant": 25, "text": "Ifodani qiymatini toping: \\(6a + 8b\\), bunda \\(a=3, b=2\\)", "options": ["35", "38", "34", "32"], "correctAnswer": 2, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v25_q11", "variant": 25, "text": "Tengsizlikni yeching: \\(x + 5 < 17\\)", "options": ["\\([12; \\infty)\\)", "\\((12; \\infty)\\)", "\\((-\\infty; 12]\\)", "\\((-\\infty; 12\\)\\)"], "correctAnswer": 1, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v25_q12", "variant": 25, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 10x + 16 = 0\\)", "options": ["16", "10", "2", "8"], "correctAnswer": 0, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v25_q13", "variant": 25, "text": "Arifmetik progressiyada \\(a_1 = 4\\), \\(d = 7\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["25", "32", "39", "64"], "correctAnswer": 0, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v25_q14", "variant": 25, "text": "Geometrik progressiyada \\(b_1 = 2\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "12", "6", "8"], "correctAnswer": 3, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v25_q15", "variant": 25, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 9 \\\\ x - y = -3 \\end{cases}\\)", "options": ["28", "20", "18", "13"], "correctAnswer": 1, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v25_q16", "variant": 25, "text": "Hisoblang: \\(\\sin 45^\\circ + \\cos 45^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(\\frac{\\sqrt{2}}{2}\\)", "\\(2\\)", "\\(\\sqrt{2}\\)"], "correctAnswer": 0, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v25_q17", "variant": 25, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\sin^2 x\\)", "\\(2\\cos^2 x\\)", "\\(1\\)", "\\(0\\)"], "correctAnswer": 0, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v25_q18", "variant": 25, "text": "Tenglamani yeching: \\(\\log_2 x = 2\\)", "options": ["2", "8", "4", "8"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v25_q19", "variant": 25, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["5", "8", "3", "4"], "correctAnswer": 0, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v25_q20", "variant": 25, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((0; 9)\\)", "\\((9; \\infty)\\)", "\\((-\\infty; 9)\\)", "\\([0; 9]\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v25_q21", "variant": 25, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{4}\\)", "options": ["\\(\\frac{x^{5}}{5}\\)", "\\(x^{3}\\)", "\\(4x^{3}\\)", "\\(4x^{4}\\)"], "correctAnswer": 1, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v25_q22", "variant": 25, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 4x^{3} dx\\)", "options": ["32", "8", "16", "14"], "correctAnswer": 3, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v25_q23", "variant": 25, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 2}\\)", "options": ["\\((2; \\infty)\\)", "\\((-\\infty; 2]\\)", "\\((-\\infty; \\infty)\\)", "\\([2; \\infty)\\)"], "correctAnswer": 0, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v25_q24", "variant": 25, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["6", "14", "18", "9"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v25_q25", "variant": 25, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(-\\sin x + C\\)", "\\(\\tan x + C\\)", "\\(\\sin x + C\\)", "\\(\\cos x + C\\)"], "correctAnswer": 0, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v25_q26", "variant": 25, "text": "To'g'ri burchakli uchburchakning katetlari 4 va 7 ga teng. Uning yuzini toping.", "options": ["28", "11", "14", "19"], "correctAnswer": 2, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v25_q27", "variant": 25, "text": "To'g'ri to'rtburchakning tomonlari 8 va 9 ga teng. Uning perimetrini toping.", "options": ["30", "34", "68", "36"], "correctAnswer": 0, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v25_q28", "variant": 25, "text": "Kubning qirrasi 5 ga teng. Uning hajmini toping.", "options": ["145", "115", "25", "125"], "correctAnswer": 1, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v25_q29", "variant": 25, "text": "Radiusi 5 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(5\\pi\\)", "\\(25\\pi\\)", "\\(10\\pi\\)", "\\(125\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v25_q30", "variant": 25, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 7 ga teng. Uning hajmini toping.", "options": ["\\(14\\pi\\)", "\\(49\\pi\\)", "\\(56\\pi\\)", "\\(28\\pi\\)"], "correctAnswer": 0, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v26_q1", "variant": 26, "text": "Hisoblang: \\(98 + 10\\)", "options": ["113", "99", "108", "107"], "correctAnswer": 2, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v26_q2", "variant": 26, "text": "Hisoblang: \\(21 \\cdot 8\\)", "options": ["178", "163", "168", "173"], "correctAnswer": 3, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v26_q3", "variant": 26, "text": "Soddalashtiring: \\(\\left(\\frac{1}{48} + \\frac{1}{45}\\right) \\cdot 2160\\)", "options": ["93", "186", "98", "91"], "correctAnswer": 3, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v26_q4", "variant": 26, "text": "\\(100\\) ning \\(3\\%\\) ini toping.", "options": ["2", "5", "3", "8"], "correctAnswer": 1, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v26_q5", "variant": 26, "text": "Tenglamani yeching: \\(x + 77 = 10\\)", "options": ["-62", "-134", "-70", "-67"], "correctAnswer": 3, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v26_q6", "variant": 26, "text": "Soddalashtiring: \\((8x + 2y)^2 - 32xy\\)", "options": ["\\(8x^2 + 2y^2\\)", "\\(64x^2 - 4y^2\\)", "\\(64x^2 + 4y^2\\)", "\\(64x^2 + 32xy + 4y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v26_q7", "variant": 26, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 25\\)", "options": ["\\((x - 5)(x + 5)\\)", "\\((x + 5)^2\\)", "\\(x(x - 25)\\)", "\\((x - 5)^2\\)"], "correctAnswer": 0, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v26_q8", "variant": 26, "text": "Hisoblang: \\(\\sqrt{36 \\cdot 25}\\)", "options": ["28", "33", "30", "60"], "correctAnswer": 0, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v26_q9", "variant": 26, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{2} = \\frac{45}{5}\\)", "options": ["15", "19", "36", "18"], "correctAnswer": 1, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v26_q10", "variant": 26, "text": "Ifodani qiymatini toping: \\(9a + 8b\\), bunda \\(a=3, b=2\\)", "options": ["44", "41", "47", "43"], "correctAnswer": 3, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v26_q11", "variant": 26, "text": "Tengsizlikni yeching: \\(x + 5 < 13\\)", "options": ["\\([8; \\infty)\\)", "\\((-\\infty; 8\\)\\)", "\\((-\\infty; 8]\\)", "\\((8; \\infty)\\)"], "correctAnswer": 3, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v26_q12", "variant": 26, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 14x + 33 = 0\\)", "options": ["14", "3", "33", "11"], "correctAnswer": 2, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v26_q13", "variant": 26, "text": "Arifmetik progressiyada \\(a_1 = 4\\), \\(d = 9\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["40", "31", "80", "49"], "correctAnswer": 1, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v26_q14", "variant": 26, "text": "Geometrik progressiyada \\(b_1 = 3\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "24", "12", "10"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v26_q15", "variant": 26, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 13 \\\\ x - y = -5 \\end{cases}\\)", "options": ["46", "36", "31", "38"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v26_q16", "variant": 26, "text": "Hisoblang: \\(\\sin 45^\\circ + \\cos 45^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(2\\)", "\\(\\frac{\\sqrt{2}}{2}\\)", "\\(\\sqrt{2}\\)", "\\(1\\)"], "correctAnswer": 3, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v26_q17", "variant": 26, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(0\\)", "\\(2\\cos^2 x\\)", "\\(2\\sin^2 x\\)", "\\(1\\)"], "correctAnswer": 2, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v26_q18", "variant": 26, "text": "Tenglamani yeching: \\(\\log_2 x = 3\\)", "options": ["6", "12", "16", "8"], "correctAnswer": 0, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v26_q19", "variant": 26, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["5", "3", "4", "8"], "correctAnswer": 0, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v26_q20", "variant": 26, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((9; \\infty)\\)", "\\((0; 9)\\)", "\\((-\\infty; 9)\\)", "\\([0; 9]\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v26_q21", "variant": 26, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{5}\\)", "options": ["\\(5x^{5}\\)", "\\(\\frac{x^{6}}{6}\\)", "\\(x^{4}\\)", "\\(5x^{4}\\)"], "correctAnswer": 2, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v26_q22", "variant": 26, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 4x^{3} dx\\)", "options": ["8", "16", "14", "32"], "correctAnswer": 2, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v26_q23", "variant": 26, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 2}\\)", "options": ["\\((2; \\infty)\\)", "\\([2; \\infty)\\)", "\\((-\\infty; \\infty)\\)", "\\((-\\infty; 2]\\)"], "correctAnswer": 0, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v26_q24", "variant": 26, "text": "Funksiya berilgan: \\(f(x) = 2x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["18", "6", "14", "9"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v26_q25", "variant": 26, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\tan x + C\\)", "\\(\\sin x + C\\)", "\\(-\\sin x + C\\)", "\\(\\cos x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v26_q26", "variant": 26, "text": "To'g'ri burchakli uchburchakning katetlari 8 va 6 ga teng. Uning yuzini toping.", "options": ["24", "29", "48", "21"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v26_q27", "variant": 26, "text": "To'g'ri to'rtburchakning tomonlari 8 va 7 ga teng. Uning perimetrini toping.", "options": ["30", "60", "26", "32"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v26_q28", "variant": 26, "text": "Kubning qirrasi 5 ga teng. Uning hajmini toping.", "options": ["25", "125", "145", "115"], "correctAnswer": 3, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v26_q29", "variant": 26, "text": "Radiusi 6 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(36\\pi\\)", "\\(216\\pi\\)", "\\(12\\pi\\)", "\\(6\\pi\\)"], "correctAnswer": 2, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v26_q30", "variant": 26, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 4 ga teng. Uning hajmini toping.", "options": ["\\(16\\pi\\)", "\\(32\\pi\\)", "\\(16\\pi\\)", "\\(8\\pi\\)"], "correctAnswer": 3, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v27_q1", "variant": 27, "text": "Hisoblang: \\(72 + 92\\)", "options": ["163", "154", "164", "173"], "correctAnswer": 2, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v27_q2", "variant": 27, "text": "Hisoblang: \\(31 \\cdot 9\\)", "options": ["274", "279", "283", "289"], "correctAnswer": 2, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v27_q3", "variant": 27, "text": "Soddalashtiring: \\(\\left(\\frac{1}{62} + \\frac{1}{59}\\right) \\cdot 3658\\)", "options": ["121", "242", "119", "126"], "correctAnswer": 2, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v27_q4", "variant": 27, "text": "\\(840\\) ning \\(3\\%\\) ini toping.", "options": ["27", "24", "25", "30"], "correctAnswer": 0, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v27_q5", "variant": 27, "text": "Tenglamani yeching: \\(x + 32 = 68\\)", "options": ["40", "36", "33", "72"], "correctAnswer": 1, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v27_q6", "variant": 27, "text": "Soddalashtiring: \\((5x + 7y)^2 - 70xy\\)", "options": ["\\(25x^2 + 49y^2\\)", "\\(25x^2 + 70xy + 49y^2\\)", "\\(5x^2 + 7y^2\\)", "\\(25x^2 - 49y^2\\)"], "correctAnswer": 3, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v27_q7", "variant": 27, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 49\\)", "options": ["\\(x(x - 49)\\)", "\\((x - 7)(x + 7)\\)", "\\((x + 7)^2\\)", "\\((x - 7)^2\\)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v27_q8", "variant": 27, "text": "Hisoblang: \\(\\sqrt{25 \\cdot 4}\\)", "options": ["20", "8", "13", "10"], "correctAnswer": 1, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v27_q9", "variant": 27, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{4} = \\frac{14}{2}\\)", "options": ["56", "28", "25", "29"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v27_q10", "variant": 27, "text": "Ifodani qiymatini toping: \\(5a + 9b\\), bunda \\(a=3, b=2\\)", "options": ["33", "31", "34", "37"], "correctAnswer": 0, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v27_q11", "variant": 27, "text": "Tengsizlikni yeching: \\(x + 4 < 12\\)", "options": ["\\([8; \\infty)\\)", "\\((-\\infty; 8\\)\\)", "\\((8; \\infty)\\)", "\\((-\\infty; 8]\\)"], "correctAnswer": 2, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v27_q12", "variant": 27, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 12x + 32 = 0\\)", "options": ["12", "8", "32", "4"], "correctAnswer": 2, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v27_q13", "variant": 27, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 7\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["66", "40", "26", "33"], "correctAnswer": 2, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v27_q14", "variant": 27, "text": "Geometrik progressiyada \\(b_1 = 5\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["40", "18", "24", "20"], "correctAnswer": 3, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v27_q15", "variant": 27, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 12 \\\\ x - y = -2 \\end{cases}\\)", "options": ["35", "30", "45", "37"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v27_q16", "variant": 27, "text": "Hisoblang: \\(\\sin 30^\\circ + \\cos 30^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(\\frac{1 - \\sqrt{3}}{2}\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)"], "correctAnswer": 2, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v27_q17", "variant": 27, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\cos^2 x\\)", "\\(0\\)", "\\(2\\sin^2 x\\)", "\\(1\\)"], "correctAnswer": 2, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v27_q18", "variant": 27, "text": "Tenglamani yeching: \\(\\log_2 x = 2\\)", "options": ["8", "2", "4", "8"], "correctAnswer": 1, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v27_q19", "variant": 27, "text": "Tenglamani yeching: \\(2^x = 32\\)", "options": ["5", "10", "6", "4"], "correctAnswer": 2, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v27_q20", "variant": 27, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((-\\infty; 9)\\)", "\\([0; 9]\\)", "\\((9; \\infty)\\)", "\\((0; 9)\\)"], "correctAnswer": 0, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v27_q21", "variant": 27, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{5}\\)", "options": ["\\(5x^{4}\\)", "\\(x^{4}\\)", "\\(\\frac{x^{6}}{6}\\)", "\\(5x^{5}\\)"], "correctAnswer": 1, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v27_q22", "variant": 27, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 4x^{3} dx\\)", "options": ["16", "14", "8", "32"], "correctAnswer": 1, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v27_q23", "variant": 27, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 2}\\)", "options": ["\\((2; \\infty)\\)", "\\((-\\infty; \\infty)\\)", "\\((-\\infty; 2]\\)", "\\([2; \\infty)\\)"], "correctAnswer": 0, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v27_q24", "variant": 27, "text": "Funksiya berilgan: \\(f(x) = 5x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["12", "20", "15", "30"], "correctAnswer": 2, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v27_q25", "variant": 27, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\cos x + C\\)", "\\(-\\sin x + C\\)", "\\(\\sin x + C\\)", "\\(\\tan x + C\\)"], "correctAnswer": 1, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v27_q26", "variant": 27, "text": "To'g'ri burchakli uchburchakning katetlari 4 va 4 ga teng. Uning yuzini toping.", "options": ["16", "13", "8", "5"], "correctAnswer": 2, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v27_q27", "variant": 27, "text": "To'g'ri to'rtburchakning tomonlari 5 va 7 ga teng. Uning perimetrini toping.", "options": ["26", "24", "20", "48"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v27_q28", "variant": 27, "text": "Kubning qirrasi 3 ga teng. Uning hajmini toping.", "options": ["17", "27", "9", "47"], "correctAnswer": 0, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v27_q29", "variant": 27, "text": "Radiusi 4 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(4\\pi\\)", "\\(16\\pi\\)", "\\(64\\pi\\)", "\\(8\\pi\\)"], "correctAnswer": 3, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v27_q30", "variant": 27, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 3 ga teng. Uning hajmini toping.", "options": ["\\(24\\pi\\)", "\\(9\\pi\\)", "\\(6\\pi\\)", "\\(12\\pi\\)"], "correctAnswer": 2, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v28_q1", "variant": 28, "text": "Hisoblang: \\(69 + 14\\)", "options": ["83", "74", "92", "82"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v28_q2", "variant": 28, "text": "Hisoblang: \\(51 \\cdot 5\\)", "options": ["257", "265", "255", "250"], "correctAnswer": 0, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v28_q3", "variant": 28, "text": "Soddalashtiring: \\(\\left(\\frac{1}{48} + \\frac{1}{19}\\right) \\cdot 912\\)", "options": ["72", "134", "67", "65"], "correctAnswer": 3, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v28_q4", "variant": 28, "text": "\\(470\\) ning \\(2\\%\\) ini toping.", "options": ["9", "11", "14", "8"], "correctAnswer": 1, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v28_q5", "variant": 28, "text": "Tenglamani yeching: \\(x + 27 = 56\\)", "options": ["34", "29", "58", "26"], "correctAnswer": 1, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v28_q6", "variant": 28, "text": "Soddalashtiring: \\((2x + 2y)^2 - 8xy\\)", "options": ["\\(4x^2 + 4y^2\\)", "\\(4x^2 - 4y^2\\)", "\\(4x^2 + 8xy + 4y^2\\)", "\\(2x^2 + 2y^2\\)"], "correctAnswer": 1, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v28_q7", "variant": 28, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 4\\)", "options": ["\\((x + 2)^2\\)", "\\(x(x - 4)\\)", "\\((x - 2)^2\\)", "\\((x - 2)(x + 2)\\)"], "correctAnswer": 3, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v28_q8", "variant": 28, "text": "Hisoblang: \\(\\sqrt{16 \\cdot 4}\\)", "options": ["11", "16", "8", "6"], "correctAnswer": 3, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v28_q9", "variant": 28, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{3} = \\frac{30}{5}\\)", "options": ["36", "19", "18", "15"], "correctAnswer": 1, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v28_q10", "variant": 28, "text": "Ifodani qiymatini toping: \\(8a + 4b\\), bunda \\(a=3, b=2\\)", "options": ["33", "30", "36", "32"], "correctAnswer": 3, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v28_q11", "variant": 28, "text": "Tengsizlikni yeching: \\(x + 2 < 10\\)", "options": ["\\([8; \\infty)\\)", "\\((-\\infty; 8]\\)", "\\((8; \\infty)\\)", "\\((-\\infty; 8\\)\\)"], "correctAnswer": 2, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v28_q12", "variant": 28, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 13x + 22 = 0\\)", "options": ["11", "2", "13", "22"], "correctAnswer": 3, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v28_q13", "variant": 28, "text": "Arifmetik progressiyada \\(a_1 = 2\\), \\(d = 6\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["32", "20", "26", "52"], "correctAnswer": 1, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v28_q14", "variant": 28, "text": "Geometrik progressiyada \\(b_1 = 5\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["18", "40", "20", "24"], "correctAnswer": 2, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v28_q15", "variant": 28, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 15 \\\\ x - y = -5 \\end{cases}\\)", "options": ["45", "50", "60", "52"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v28_q16", "variant": 28, "text": "Hisoblang: \\(\\sin 45^\\circ + \\cos 45^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(1\\)", "\\(\\sqrt{2}\\)", "\\(2\\)", "\\(\\frac{\\sqrt{2}}{2}\\)"], "correctAnswer": 0, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v28_q17", "variant": 28, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(2\\sin^2 x\\)", "\\(1\\)", "\\(2\\cos^2 x\\)", "\\(0\\)"], "correctAnswer": 0, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v28_q18", "variant": 28, "text": "Tenglamani yeching: \\(\\log_2 x = 2\\)", "options": ["4", "8", "2", "8"], "correctAnswer": 2, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v28_q19", "variant": 28, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["8", "5", "3", "4"], "correctAnswer": 1, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v28_q20", "variant": 28, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((9; \\infty)\\)", "\\((-\\infty; 9)\\)", "\\([0; 9]\\)", "\\((0; 9)\\)"], "correctAnswer": 1, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v28_q21", "variant": 28, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{5}\\)", "options": ["\\(x^{4}\\)", "\\(5x^{4}\\)", "\\(\\frac{x^{6}}{6}\\)", "\\(5x^{5}\\)"], "correctAnswer": 0, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v28_q22", "variant": 28, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["10", "64", "32", "30"], "correctAnswer": 3, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v28_q23", "variant": 28, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 4}\\)", "options": ["\\([4; \\infty)\\)", "\\((-\\infty; \\infty)\\)", "\\((-\\infty; 4]\\)", "\\((4; \\infty)\\)"], "correctAnswer": 3, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v28_q24", "variant": 28, "text": "Funksiya berilgan: \\(f(x) = 3x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["8", "16", "11", "22"], "correctAnswer": 2, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v28_q25", "variant": 28, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(-\\sin x + C\\)", "\\(\\sin x + C\\)", "\\(\\tan x + C\\)", "\\(\\cos x + C\\)"], "correctAnswer": 0, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v28_q26", "variant": 28, "text": "To'g'ri burchakli uchburchakning katetlari 4 va 9 ga teng. Uning yuzini toping.", "options": ["18", "15", "36", "23"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v28_q27", "variant": 28, "text": "To'g'ri to'rtburchakning tomonlari 3 va 10 ga teng. Uning perimetrini toping.", "options": ["28", "26", "22", "52"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v28_q28", "variant": 28, "text": "Kubning qirrasi 6 ga teng. Uning hajmini toping.", "options": ["36", "236", "216", "206"], "correctAnswer": 3, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v28_q29", "variant": 28, "text": "Radiusi 5 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(125\\pi\\)", "\\(25\\pi\\)", "\\(5\\pi\\)", "\\(10\\pi\\)"], "correctAnswer": 3, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v28_q30", "variant": 28, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 8 ga teng. Uning hajmini toping.", "options": ["\\(64\\pi\\)", "\\(16\\pi\\)", "\\(32\\pi\\)", "\\(64\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v29_q1", "variant": 29, "text": "Hisoblang: \\(23 + 51\\)", "options": ["74", "73", "82", "70"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v29_q2", "variant": 29, "text": "Hisoblang: \\(87 \\cdot 5\\)", "options": ["442", "430", "445", "435"], "correctAnswer": 0, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v29_q3", "variant": 29, "text": "Soddalashtiring: \\(\\left(\\frac{1}{23} + \\frac{1}{75}\\right) \\cdot 1725\\)", "options": ["103", "96", "196", "98"], "correctAnswer": 1, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v29_q4", "variant": 29, "text": "\\(980\\) ning \\(6\\%\\) ini toping.", "options": ["58", "63", "57", "60"], "correctAnswer": 3, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v29_q5", "variant": 29, "text": "Tenglamani yeching: \\(x + 95 = 31\\)", "options": ["-128", "-64", "-61", "-67"], "correctAnswer": 1, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v29_q6", "variant": 29, "text": "Soddalashtiring: \\((3x + 6y)^2 - 36xy\\)", "options": ["\\(9x^2 - 36y^2\\)", "\\(9x^2 + 36y^2\\)", "\\(9x^2 + 36xy + 36y^2\\)", "\\(3x^2 + 6y^2\\)"], "correctAnswer": 0, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v29_q7", "variant": 29, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 25\\)", "options": ["\\((x + 5)^2\\)", "\\(x(x - 25)\\)", "\\((x - 5)(x + 5)\\)", "\\((x - 5)^2\\)"], "correctAnswer": 2, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v29_q8", "variant": 29, "text": "Hisoblang: \\(\\sqrt{64 \\cdot 49}\\)", "options": ["59", "112", "56", "54"], "correctAnswer": 3, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v29_q9", "variant": 29, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{5} = \\frac{24}{3}\\)", "options": ["40", "80", "37", "41"], "correctAnswer": 3, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v29_q10", "variant": 29, "text": "Ifodani qiymatini toping: \\(2a + 6b\\), bunda \\(a=3, b=2\\)", "options": ["19", "22", "18", "16"], "correctAnswer": 2, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v29_q11", "variant": 29, "text": "Tengsizlikni yeching: \\(x + 5 < 16\\)", "options": ["\\((-\\infty; 11]\\)", "\\((11; \\infty)\\)", "\\((-\\infty; 11\\)\\)", "\\([11; \\infty)\\)"], "correctAnswer": 1, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v29_q12", "variant": 29, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 9x + 14 = 0\\)", "options": ["2", "14", "9", "7"], "correctAnswer": 1, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v29_q13", "variant": 29, "text": "Arifmetik progressiyada \\(a_1 = 4\\), \\(d = 6\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["56", "28", "22", "34"], "correctAnswer": 2, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v29_q14", "variant": 29, "text": "Geometrik progressiyada \\(b_1 = 2\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "12", "6", "8"], "correctAnswer": 3, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v29_q15", "variant": 29, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 14 \\\\ x - y = -4 \\end{cases}\\)", "options": ["55", "45", "40", "47"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v29_q16", "variant": 29, "text": "Hisoblang: \\(\\sin 45^\\circ + \\cos 45^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(2\\)", "\\(\\sqrt{2}\\)", "\\(1\\)", "\\(\\frac{\\sqrt{2}}{2}\\)"], "correctAnswer": 2, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v29_q17", "variant": 29, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(0\\)", "\\(1\\)", "\\(2\\sin^2 x\\)", "\\(2\\cos^2 x\\)"], "correctAnswer": 2, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v29_q18", "variant": 29, "text": "Tenglamani yeching: \\(\\log_2 x = 2\\)", "options": ["4", "8", "2", "8"], "correctAnswer": 2, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v29_q19", "variant": 29, "text": "Tenglamani yeching: \\(2^x = 8\\)", "options": ["2", "3", "4", "6"], "correctAnswer": 2, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v29_q20", "variant": 29, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((9; \\infty)\\)", "\\((0; 9)\\)", "\\((-\\infty; 9)\\)", "\\([0; 9]\\)"], "correctAnswer": 2, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v29_q21", "variant": 29, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{2}\\)", "options": ["\\(2x^{2}\\)", "\\(x^{1}\\)", "\\(2x^{1}\\)", "\\(\\frac{x^{3}}{3}\\)"], "correctAnswer": 1, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v29_q22", "variant": 29, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 2x^{1} dx\\)", "options": ["4", "4", "8", "2"], "correctAnswer": 3, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v29_q23", "variant": 29, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 2}\\)", "options": ["\\((2; \\infty)\\)", "\\((-\\infty; 2]\\)", "\\([2; \\infty)\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 0, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v29_q24", "variant": 29, "text": "Funksiya berilgan: \\(f(x) = 5x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["12", "20", "15", "30"], "correctAnswer": 2, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v29_q25", "variant": 29, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(-\\sin x + C\\)", "\\(\\cos x + C\\)", "\\(\\sin x + C\\)", "\\(\\tan x + C\\)"], "correctAnswer": 0, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v29_q26", "variant": 29, "text": "To'g'ri burchakli uchburchakning katetlari 8 va 7 ga teng. Uning yuzini toping.", "options": ["33", "56", "28", "25"], "correctAnswer": 2, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v29_q27", "variant": 29, "text": "To'g'ri to'rtburchakning tomonlari 7 va 4 ga teng. Uning perimetrini toping.", "options": ["22", "44", "18", "24"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v29_q28", "variant": 29, "text": "Kubning qirrasi 5 ga teng. Uning hajmini toping.", "options": ["25", "115", "145", "125"], "correctAnswer": 1, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v29_q29", "variant": 29, "text": "Radiusi 5 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(25\\pi\\)", "\\(10\\pi\\)", "\\(5\\pi\\)", "\\(125\\pi\\)"], "correctAnswer": 1, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v29_q30", "variant": 29, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 6 ga teng. Uning hajmini toping.", "options": ["\\(24\\pi\\)", "\\(12\\pi\\)", "\\(48\\pi\\)", "\\(36\\pi\\)"], "correctAnswer": 1, "difficulty": 1.9, "category": "Geometriya"},
  {"id": "v30_q1", "variant": 30, "text": "Hisoblang: \\(47 + 99\\)", "options": ["146", "154", "145", "141"], "correctAnswer": 0, "difficulty": -1.35, "category": "Sonlar va amallar"},
  {"id": "v30_q2", "variant": 30, "text": "Hisoblang: \\(35 \\cdot 8\\)", "options": ["290", "280", "275", "282"], "correctAnswer": 3, "difficulty": -1.2, "category": "Sonlar va amallar"},
  {"id": "v30_q3", "variant": 30, "text": "Soddalashtiring: \\(\\left(\\frac{1}{81} + \\frac{1}{69}\\right) \\cdot 5589\\)", "options": ["155", "148", "300", "150"], "correctAnswer": 1, "difficulty": -1.05, "category": "Sonlar va amallar"},
  {"id": "v30_q4", "variant": 30, "text": "\\(730\\) ning \\(5\\%\\) ini toping.", "options": ["35", "36", "41", "38"], "correctAnswer": 3, "difficulty": -0.9, "category": "Sonlar va amallar"},
  {"id": "v30_q5", "variant": 30, "text": "Tenglamani yeching: \\(x + 17 = 60\\)", "options": ["86", "40", "43", "48"], "correctAnswer": 2, "difficulty": -0.75, "category": "Sonlar va amallar"},
  {"id": "v30_q6", "variant": 30, "text": "Soddalashtiring: \\((3x + 6y)^2 - 36xy\\)", "options": ["\\(9x^2 + 36xy + 36y^2\\)", "\\(9x^2 + 36y^2\\)", "\\(9x^2 - 36y^2\\)", "\\(3x^2 + 6y^2\\)"], "correctAnswer": 2, "difficulty": -0.48, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v30_q7", "variant": 30, "text": "Ko'paytuvchilarga ajrating: \\(x^2 - 49\\)", "options": ["\\((x + 7)^2\\)", "\\((x - 7)(x + 7)\\)", "\\((x - 7)^2\\)", "\\(x(x - 49)\\)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v30_q8", "variant": 30, "text": "Hisoblang: \\(\\sqrt{36 \\cdot 81}\\)", "options": ["54", "57", "108", "52"], "correctAnswer": 3, "difficulty": -0.24, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v30_q9", "variant": 30, "text": "Proportsiyadan \\(x\\) ni toping: \\(\\frac{x}{9} = \\frac{14}{2}\\)", "options": ["64", "126", "60", "63"], "correctAnswer": 0, "difficulty": -0.12, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v30_q10", "variant": 30, "text": "Ifodani qiymatini toping: \\(7a + 7b\\), bunda \\(a=3, b=2\\)", "options": ["39", "33", "36", "35"], "correctAnswer": 3, "difficulty": 0.0, "category": "Algebraik shakl almashtirishlar"},
  {"id": "v30_q11", "variant": 30, "text": "Tengsizlikni yeching: \\(x + 3 < 13\\)", "options": ["\\([10; \\infty)\\)", "\\((10; \\infty)\\)", "\\((-\\infty; 10]\\)", "\\((-\\infty; 10\\)\\)"], "correctAnswer": 1, "difficulty": 0.2, "category": "Tenglama va tengsizliklar"},
  {"id": "v30_q12", "variant": 30, "text": "Tenglamaning ildizlari yig'indisini toping: \\(x^2 - 11x + 28 = 0\\)", "options": ["4", "11", "28", "7"], "correctAnswer": 2, "difficulty": 0.3, "category": "Tenglama va tengsizliklar"},
  {"id": "v30_q13", "variant": 30, "text": "Arifmetik progressiyada \\(a_1 = 5\\), \\(d = 11\\) bo'lsa, \\(a_5\\) ni toping.", "options": ["60", "49", "98", "38"], "correctAnswer": 3, "difficulty": 0.4, "category": "Tenglama va tengsizliklar"},
  {"id": "v30_q14", "variant": 30, "text": "Geometrik progressiyada \\(b_1 = 2\\), \\(q = 2\\) bo'lsa, \\(b_3\\) ni toping.", "options": ["16", "8", "12", "6"], "correctAnswer": 1, "difficulty": 0.5, "category": "Tenglama va tengsizliklar"},
  {"id": "v30_q15", "variant": 30, "text": "Tenglamalar sistemasini yeching va \\(x \\cdot y\\) ni toping: \\(\\begin{cases} x + y = 10 \\\\ x - y = -2 \\end{cases}\\)", "options": ["34", "19", "24", "26"], "correctAnswer": 3, "difficulty": 0.6, "category": "Tenglama va tengsizliklar"},
  {"id": "v30_q16", "variant": 30, "text": "Hisoblang: \\(\\sin 60^\\circ + \\cos 60^\\circ\\) ifodaning qiymati qaysi qatorda to'g'ri berilgan?", "options": ["\\(0\\)", "\\(\\frac{1 + \\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)", "\\(1\\)"], "correctAnswer": 2, "difficulty": 0.7, "category": "Trigonometriya"},
  {"id": "v30_q17", "variant": 30, "text": "Soddalashtiring: \\(1 - \\sin^2 x + \\cos^2 x\\)", "options": ["\\(1\\)", "\\(0\\)", "\\(2\\sin^2 x\\)", "\\(2\\cos^2 x\\)"], "correctAnswer": 2, "difficulty": 0.8, "category": "Trigonometriya"},
  {"id": "v30_q18", "variant": 30, "text": "Tenglamani yeching: \\(\\log_2 x = 2\\)", "options": ["4", "2", "8", "8"], "correctAnswer": 1, "difficulty": 0.9, "category": "Tenglama va tengsizliklar"},
  {"id": "v30_q19", "variant": 30, "text": "Tenglamani yeching: \\(2^x = 16\\)", "options": ["8", "5", "4", "3"], "correctAnswer": 1, "difficulty": 1.0, "category": "Tenglama va tengsizliklar"},
  {"id": "v30_q20", "variant": 30, "text": "Tengsizlikni yeching: \\(\\log_3 x < 2\\)", "options": ["\\((9; \\infty)\\)", "\\((-\\infty; 9)\\)", "\\((0; 9)\\)", "\\([0; 9]\\)"], "correctAnswer": 1, "difficulty": 1.1, "category": "Tenglama va tengsizliklar"},
  {"id": "v30_q21", "variant": 30, "text": "Funksiyaning hosilasini toping: \\(f(x) = x^{2}\\)", "options": ["\\(2x^{1}\\)", "\\(2x^{2}\\)", "\\(\\frac{x^{3}}{3}\\)", "\\(x^{1}\\)"], "correctAnswer": 3, "difficulty": 1.18, "category": "Matematik analiz asoslari"},
  {"id": "v30_q22", "variant": 30, "text": "Integralni hisoblang: \\(\\int_{0}^{2} 5x^{4} dx\\)", "options": ["64", "10", "30", "32"], "correctAnswer": 2, "difficulty": 1.26, "category": "Matematik analiz asoslari"},
  {"id": "v30_q23", "variant": 30, "text": "Funksiyaning aniqlanish sohasini toping: \\(y = \\sqrt{x - 5}\\)", "options": ["\\([5; \\infty)\\)", "\\((-\\infty; 5]\\)", "\\((5; \\infty)\\)", "\\((-\\infty; \\infty)\\)"], "correctAnswer": 2, "difficulty": 1.34, "category": "Funksiyalar"},
  {"id": "v30_q24", "variant": 30, "text": "Funksiya berilgan: \\(f(x) = 3x^2 + 5x\\). Hosila \\(f'(1)\\) ning qiymatini toping.", "options": ["22", "16", "8", "11"], "correctAnswer": 3, "difficulty": 1.42, "category": "Matematik analiz asoslari"},
  {"id": "v30_q25", "variant": 30, "text": "Boshlang'ich funksiyasini toping: \\(f(x) = \\cos x\\)", "options": ["\\(\\tan x + C\\)", "\\(\\cos x + C\\)", "\\(-\\sin x + C\\)", "\\(\\sin x + C\\)"], "correctAnswer": 2, "difficulty": 1.5, "category": "Matematik analiz asoslari"},
  {"id": "v30_q26", "variant": 30, "text": "To'g'ri burchakli uchburchakning katetlari 7 va 9 ga teng. Uning yuzini toping.", "options": ["31", "36", "28", "62"], "correctAnswer": 0, "difficulty": 1.58, "category": "Geometriya"},
  {"id": "v30_q27", "variant": 30, "text": "To'g'ri to'rtburchakning tomonlari 4 va 9 ga teng. Uning perimetrini toping.", "options": ["28", "26", "22", "52"], "correctAnswer": 2, "difficulty": 1.66, "category": "Geometriya"},
  {"id": "v30_q28", "variant": 30, "text": "Kubning qirrasi 8 ga teng. Uning hajmini toping.", "options": ["532", "64", "502", "512"], "correctAnswer": 2, "difficulty": 1.74, "category": "Geometriya"},
  {"id": "v30_q29", "variant": 30, "text": "Radiusi 7 ga teng bo'lgan doiraning yuzini toping.", "options": ["\\(343\\pi\\)", "\\(14\\pi\\)", "\\(7\\pi\\)", "\\(49\\pi\\)"], "correctAnswer": 1, "difficulty": 1.82, "category": "Geometriya"},
  {"id": "v30_q30", "variant": 30, "text": "Tsilindrning asosi radiusi 2 ga, balandligi 4 ga teng. Uning hajmini toping.", "options": ["\\(32\\pi\\)", "\\(16\\pi\\)", "\\(16\\pi\\)", "\\(8\\pi\\)"], "correctAnswer": 3, "difficulty": 1.9, "category": "Geometriya"},

  // ==================== ONA TILI VA ADABIYOT SAVOLLARI (900 TA SAVOL, 30 TA VARIANT, TUZATILGAN) ====================
  {"id": "v1_lang_q1", "variant": 1, "subject": "lang", "text": "Quyidagi gaplarning qaysi birida ham affiksatsiya, ham kompozitsiya usulida yasalgan sifatlar ishtirok etgan?", "options": ["Samig’ aka elliklardan oshgan, tarvuzdek yum-yumaloq, hazilkash, shirinso’z odam.", "Milliy mafkuramizda milliylik umumbashariy g’oyalar bilan uyg’unlashib ketgan.", "Hulkarning och jigarrang yanoqlarida ajib bir qizillik o’ynaydi.", "Osmono’par koshonalar, yangi libos kiygan cho’l-u sahrolar tasviri qo’shiq parvoziga esh bo’ladi."], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q2", "variant": 1, "subject": "lang", "text": "Qaysi javobda tarkibida faqat unli va jarangli undosh tovushlar ishtirok etgan sifat yasovchi qo‘shimchalar keltirilgan?", "options": ["-ma, -siz, -kor, -chan", "-ildoq, -bad, -bob, -don", "-zor, -g‘ich, -lab, -dor", "-don, be-, -bad, -mand"], "correctAnswer": 1, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q3", "variant": 1, "subject": "lang", "text": "Yarimjon, chalajon. Berilgan so'zlar haqidagi qaysi fikr xato?", "options": ["ushbu so‘zlar tuzilishiga ko‘ra qo‘shma so'zlar sanaladi", "ushbu so‘ zlar shakl va ma’no munosabatiga ko‘ra ma’nodosh so‘zlardir", "ushbu so‘zlarning tarkibi sifat + ot dan tashkil topgan", "ushbu so'zlar kompozitsiya usulida yasalgan yasama so‘zlardir"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q4", "variant": 1, "subject": "lang", "text": "Qaysi qatorda shakl yasovchi qo‘shimcha bilan omonim bo‘la oladigan sifat yasovchi qo‘shimcha berilgan?", "options": ["-ma, -siz, -q", "-ma, -an, -k", "-chak,-choq, -ch", "-qin, -in, -i"], "correctAnswer": 3, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q5", "variant": 1, "subject": "lang", "text": "Qaysi javobda keltirilgan gapda tarkibida faqat til oldi undoshlari bo‘lgan qo‘shma sifat mavjud?", "options": ["Orzu mullatga hayotbaxsh ruh bag‘ishlaydi.", "U juda shirinsuxan odam ekan.", "Qo'shiqning diltortar navolari hammani o‘ziga rom qildi.", "Milliy mafkuramizda milliylik umumbashariy g'oyalar bilan uyg‘unlashib ketgan."], "correctAnswer": 2, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q6", "variant": 1, "subject": "lang", "text": "Qaysi javobda keltirilgan gapda tarkibida faqat til oldi undoshlari bo‘lgan qo‘shma sifat mavjud?", "options": ["Orzu mullatga hayotbaxsh ruh bag‘ishlaydi.", "U juda shirinsuxan odam ekan.", "Qo'shiqning diltortar navolari hammani o‘ziga rom qildi.", "Milliy mafkuramizda milliylik umumbashariy g'oyalar bilan uyg‘unlashib ketgan."], "correctAnswer": 2, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q7", "variant": 1, "subject": "lang", "text": "Hayot go‘zal, hayot maroqli, shuning uchun erka ko‘ngil shod. Ushbu she’riy parchadagi sifatlar haqidagi qaysi fikr to‘g’ri emas?", "options": ["tub va yasama sifat bor", "sifatlar kesim va aniqlovchi vazifasida qollangan", "ot turkumidan yasalgan asliy sifatlar ishtirok etgan", "otlashgan sifat ishtirok etgan"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q8", "variant": 1, "subject": "lang", "text": "Qaysi gapda kompozitsion usul bilan yasalgan sifat yasama so'zga tobelangan?", "options": ["Siyrak daraxtli ikkinchi bir tepalikda bir necha kishilarning: ayol va erkaklarning qorasi ko'rindi.", "Tog’ etaklarida ko‘m-ko‘k maysalar uzra nafis gullar, turli xushbo'y o‘simliklarning hidlari anqiydi.", "Nodon, kaltafahm odamdan yaxshi gap chiqmaydi.", "Toshbag'ir insonlardan yaxshilik kutmang."], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q9", "variant": 1, "subject": "lang", "text": "Qaysi javobda otlashgan yasama sifatlar ishtirok etgan?", "options": ["Bu o'rmonda odamsimon maymunlar yashaydi.", "Yoshroqlari olovga yaqinroq, keksalari bo‘lsa olovdan uzoqroq o'tirishar edi.", "Bilimli biladi bilim hurmatin, Bilimsiz ne bilgay bilim qiymatin.", "Yaxshining yaxshiligi tegar har yerda, yomonning yomonligi tegar tor yerda."], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q10", "variant": 1, "subject": "lang", "text": "Qaysi javobda otlashgan yasama sifat mavjud emas?", "options": ["Yomon-u yaxshini xulqidin anglag'il, Yomonni yomon, yaxshini yaxshi bil.", "Dono, aqllilar hech qachon yo'ldan adashmaydi.", "Bilimli biladi bilim hurmatin, Bilimsiz ne bilgay bilim qiymatin.", "Shu aniqki, hunarli o'lmas, hunari yo‘q kun ko‘rmas."], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q11", "variant": 1, "subject": "lang", "text": "Qaysi javobdagi har ikki gapda yasama sifat ajratib ko‘rsatilgan?", "options": ["Soat tungi uchlarda eshik qo‘ng’irog‘I qattiq jiringladi. Ha, sezgisi uni aldamagan ekan, bugun bolasi shahardan keldi.", "Hammani tushki taomga chaqirib kelishni buyurdi. Tog’da ko‘chki ko'chish xavfi borligini radiodan e’lon qilishdi.", "Akam institutning sirtqi bo‘limiga o‘qishga kirdi. Ezma va vaysaqi kishilarning insonlarorasida obro‘si bo‘lmaydi.", "Men kechki smenaga ishga o‘tishga majbur bo‘ldim. Bu gapdan ko‘ra bir tepki yegan yaxshiroq edi-da, jo‘ra."], "correctAnswer": 2, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q12", "variant": 1, "subject": "lang", "text": "Qaysi javobdagi har ikki gapda yasama sifat ajratib ko‘rsatilgan?", "options": ["Soat tungi uchlarda eshik qo‘ng’irog‘I qattiq jiringladi. Ha, sezgisi uni aldamagan ekan, bugun bolasi shahardan keldi.", "Hammani tushki taomga chaqirib kelishni buyurdi. Tog’da ko‘chki ko'chish xavfi borligini radiodan e’lon qilishdi.", "Akam institutning sirtqi bo‘limiga o‘qishga kirdi. Ezma va vaysaqi kishilarning insonlarorasida obro‘si bo‘lmaydi.", "Men kechki smenaga ishga o‘tishga majbur bo‘ldim. Bu gapdan ko‘ra bir tepki yegan yaxshiroq edi-da, jo‘ra."], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q13", "variant": 1, "subject": "lang", "text": "Qaysi javobda yasama sifat va yasama ot ajratib ko‘rsatilgan?", "options": ["Hamma yoq, qumloq, toshloq bo‘lib ketibdimi, amaki? Bo‘taloq tuyaning bolasi bo'ladi, bolam, otning emas.", "Dangasa va erinchoqlarga oramizda o‘rin yo‘q. Maqtanchoq va dangasa kishilar qo‘rqoq bo‘ladi.", "Men kechki smenaga ishga o‘tishga majbur bo'ldim. Ot tepkisini ot ko‘taradi.", "Ekin ekish ishlari bu yil barvaqt boshlandi. Yig'in tushdan keyin belgilandi, hammaga aytib qo'ying."], "correctAnswer": 1, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q14", "variant": 1, "subject": "lang", "text": "Qaysi javobda yasama sifat va yasama ot ajratib ko‘rsatilgan?", "options": ["Hamma yoq, qumloq, toshloq bo‘lib ketibdimi, amaki? Bo‘taloq tuyaning bolasi bo'ladi, bolam, otning emas.", "Dangasa va erinchoqlarga oramizda o‘rin yo‘q. Maqtanchoq va dangasa kishilar qo‘rqoq bo‘ladi.", "Men kechki smenaga ishga o‘tishga majbur bo'ldim. Ot tepkisini ot ko‘taradi.", "Ekin ekish ishlari bu yil barvaqt boshlandi. Yig'in tushdan keyin belgilandi, hammaga aytib qo'ying."], "correctAnswer": 2, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q15", "variant": 1, "subject": "lang", "text": "Kinoya tashbih deb nimaga aytiladi?", "options": ["asos va vositaning qo’llanish yoki qo’llanimasligidan qati nazar o’xshamish bilan o’xshatilmish ishtirok etgan o’xshatish san’ati", "o’xshtilmishning o’zi saqlanib, o’xshamishga ishora qiladigan o’xshatish san’ati", "asos qo’llanilmaydigan, lekin vosita orqali bilib olishimiz mumkin bo’lgan o’xshatish san’ati", "vosita qo’llanilmaydigan asos qo’llanishi shart bo’lgan o’xshatish san’ati"], "correctAnswer": 1, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v1_lang_q16", "variant": 1, "subject": "lang", "text": "A.Qahhorning “O’g’ri” hikoyasida uchraydigan xalq maqollarini aniqlab chiqing. 1) Tekinga mushuk oftobga chiqmaydi; 2) Quruq qoshiq og’iz yirtadi; 3) Berganga bitta ham ko’p, olganga o’nta ham oz; 4) Begim deguncha kishining beli sinadi; 5) O’ynashmagil arbob bilan – seni urar har bob bilan;", "options": ["1,3,5", "1,2,3,5", "2,3,4", "1,2,3,4,5 _"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v1_lang_q17", "variant": 1, "subject": "lang", "text": "Navoiyning “Mehr va Suhayl” dostonida quyidagi qaysi xalq maqoli keltirilgan? a", "options": ["Aybsiz do’st qidirgan, do’stsiz qolar", "Tilgan kishi tilagiga erishadi v", "Oyning o’n beshi yorug’, O’n beshi qorong’u", "Kimki birovga qazg’ay choh, U chohga o’zi _ tushar nogoh i"], "correctAnswer": 3, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v1_lang_q18", "variant": 1, "subject": "lang", "text": "Ch.Aytmatovning “Oq kema” qissasida l quyidagi fikrlar qaysi qahramon tilidan aytilgan? i Odamlar hayvonlargagina emas, hatto o’z- t o’zlariga ham rahm-shafqat qilishmaydi.", "options": ["Qo’lchi botir _", "Mo’min chol", "bola", "Baymoq kampir a"], "correctAnswer": 2, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v1_lang_q19", "variant": 1, "subject": "lang", "text": "Jamoli chillaning tingjirab, yaltirab n o’tirgan qahramon qaysi javobda to’g’ri ko’rsatilgan?", "options": ["O Zulxumor", "Ra’no", "Ma’suma", "Mehr"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v1_lang_q20", "variant": 1, "subject": "lang", "text": "“Mashrab” hamda “Zilzila” asarlarining o’rtasida qanday o’xshashliklar mavjud?", "options": ["Shoir", "injener", "dehqon", "Bog’bon"], "correctAnswer": 3, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v1_lang_q21", "variant": 1, "subject": "lang", "text": "Rasul Hamzatovning dadasining kasbi nima edi? 23. Hamzaning “Dardiga darmon istamas” 1", "options": ["Shoir", "injener", "dehqon", "Bog’bon she’rida “hech nomusilmon” nimani istamaydi? N"], "correctAnswer": 0, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v1_lang_q22", "variant": 1, "subject": "lang", "text": "Kurashsiz, mehnatsiz shodlik, kulguni, O’g’rilik mol deyman, qilaman hazar. Qalbimning parchasi sinmasa agar, Rozimasman, birov hadya etsa zar. She’riy parcha muallifini toping.", "options": ["R.Hamzatov", "S. Ahmad", "Uvaysiy", "S.Zunnunova"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v1_lang_q23", "variant": 1, "subject": "lang", "text": "Asqad Muxtor “Yo’l” she’rida cheksiz umr ertagi deganda nimani nazarda tutgan edi?", "options": ["daryo", "yulduz", "quyosh nuri", "ijod"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v1_lang_q24", "variant": 1, "subject": "lang", "text": ". Mirmuhsinning chet elliklardagi kishilar hayotini ko’rsatishga bag’ishlangan asar qaysi?", "options": ["“Me’mor”", "“Jannat qidirganlar”", "“Chodrali ayol”", "“Jamila”"], "correctAnswer": 2, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v1_lang_q25", "variant": 1, "subject": "lang", "text": "Quyidagilardan qaysi biri Asqad Muxtorning she’riy kitoblarga mansub emas? 1) “99 miniatura”; 2) “Quyosh belanchagi”; 3_) “Buloqlar qaynaganda”; 4) “Karvon a qo’ng’irog’i”; 5) “Hamshaharlarim”; 6) “Kumush tola”. v", "options": ["1,2,3", "3,5,6", "3,6", "2,3,6"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v1_lang_q26", "variant": 1, "subject": "lang", "text": "Doktor Ross qalamiga mans_ub kitobni aniqlang. i", "options": ["“Yovvoyi hayvonlar haqida”", "“Kanada qushlari” l", "“Atlantik Monsli” jurinalida Ernestni tanqid qilib maqola bitgan ijdokor t", "“Shimoliy hayvonalar” _"], "correctAnswer": 1, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v1_lang_q27", "variant": 1, "subject": "lang", "text": "“Majnuntol” she’ri vaznning qaysi turiga a kiradi va mu allifi kim?", "options": ["qo’shma vazn, Erkin Vohidov", "soddan vazn, Erkin Vohidov", "mutlaq vazn, Mirtemir", "O qo’shma vazn, Mirtemir"], "correctAnswer": 3, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v1_lang_q28", "variant": 1, "subject": "lang", "text": "Ernest Seton-Tompsonning qaysi kitobi qo’lma-qo’l o’qiladi, tik turib o’qiladi, ovoz qo’yib o’qiladi, kecha- yu kunduz o’qiladi?", "options": ["“Yovvoyi hayvonlar”", "“Men bilagan jonivorlar”", "“Shimoliy hayvonlar”", "“Jonivorlar haqida hikoyalar”"], "correctAnswer": 2, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v1_lang_q29", "variant": 1, "subject": "lang", "text": "Qaysi asarda “Ilgimdan kelganicha, - deb yozadi Navoiy, - zulm tig’in ushotib (sindirib), 1 mazlum jarohatig’a intiqom marhamini (qasos malhamini) qo’ydum” N", "options": ["durbin", "ko’lob o", "portfe’l", "Bug’uning shoxi"], "correctAnswer": 3, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v1_lang_q30", "variant": 1, "subject": "lang", "text": "O’.Umarbekovning birinchi romani bu …?", "options": ["“Fotima va Zuhra”", "“Opa-singillar”", "“Odam bo’lish qiyin”", "“Xatingni kutaman”"], "correctAnswer": 3, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v2_lang_q1", "variant": 2, "subject": "lang", "text": "O’.Umarbekovning “Odam bo’lish qiyin” romanining qahramonlarini toping.", "options": ["Temirbulat va Fayro’za", "Gulchehra va Abdulla", "Qoplonbek va Oydin", "Ikromjon va Zebi"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v2_lang_q2", "variant": 2, "subject": "lang", "text": "“…Hech kim o’z-o’zidan yozuvchi bo’lib qolmaydi: Yillar sabog’i, qilingan mehnat, badiiy adabiyotga bo’lgan qiziqish va e’tiqod orqali bunga erishish mumkin”.", "options": ["Ch.Aytmatov", "Mirtemir", "T.Murod", "A.Qahhor _"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v2_lang_q3", "variant": 2, "subject": "lang", "text": "Umarbekov “Shoshma quyosh”, “Kuzni ng birinchi kuni” kabi asarlar quyidagi qaysi a janrda yozilgan?", "options": ["drama", "hikoya", "roman", "qissa v"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v2_lang_q4", "variant": 2, "subject": "lang", "text": "Ravshan” dostonida Ravshanga ko’ngli _ ketgan, lekin e’tiborini qozona olmagan qahramon nomi quyidagi qaysi qatorda to’g’ri i berilgan? l", "options": ["Zulxumor", "Gula nor", "Oqqiz", "Biahragul t"], "correctAnswer": 3, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v2_lang_q5", "variant": 2, "subject": "lang", "text": "Quyidagi qaysi asarda muhabbat uchun chekilgan iztirob_, iymon yo’lidagi azobga aylanadi? a", "options": ["“Me’mor”", "“Ravshan”", "“Yovvoyi yo’rg’a”", "“Qiyomat qarz” n"], "correctAnswer": 2, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v2_lang_q6", "variant": 2, "subject": "lang", "text": "Ravshan” dostonida “devona” sifatida ham ucOhraydigan obrazni toping.", "options": ["Hasanxon", "Ravshan", "Aynoq kal", "Go’ro’g’li"], "correctAnswer": 0, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q7", "variant": 2, "subject": "lang", "text": "Asarda tasvir etilayotgan voqea yo harakat sur’ati tezlashgan holatlarda necha bo’g’inli she’rlar qo’llaniladi?", "options": ["olti", "sakkiz", "yetti", "o’n bir"], "correctAnswer": 2, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v2_lang_q8", "variant": 2, "subject": "lang", "text": "Zavqiyning “Ajab ermas” she’rini to’liq holatga keltirib, uni matbuotda e’lon qilgan olimni toping.", "options": ["Xodi Zaripov", "Akmal Shoahmedov", "Rustamjon Tojiboyev", "Nasimjon Karimov"], "correctAnswer": 2, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v2_lang_q9", "variant": 2, "subject": "lang", "text": "Quyidagi qaysi g’azalda oshiqning zohid bilan o’zaro bahsga kirishishadi?", "options": ["“Sog’indim”", "“Dog’ o’ldi, dog’ o’ldi”", "“Uvaysiman”", "“Tor ko’ngullik beklar”"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v2_lang_q10", "variant": 2, "subject": "lang", "text": "Quyidagi qaysi shoirning ijodida Yassaviyning ta’siri, Navoiyga izdoshlik chizgilari yaqqol ko’zga tashlanadi?", "options": ["Zavqiy", "Maxtumuli", "Muqumiy", "Fuzuliy"], "correctAnswer": 2, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v2_lang_q11", "variant": 2, "subject": "lang", "text": "Maxtumqulining qaysi she’rida Go`ro`g`li obrazi uchraydi?", "options": ["“Adolat yaxshi”", "“Turkman binosi”", "“Namasan?”", "“Ko’ngil” _“sig’magan”qofiydosh a"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q12", "variant": 2, "subject": "lang", "text": "Maxtumquli “Adolat yaxshi” she’rida kimlarni ko’rganda kular yuz bo’lgin deb v yozadi", "options": ["yetimlarni", "chorasiz qullarni", "g’amginlarni", "bolalarni _ i"], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q13", "variant": 2, "subject": "lang", "text": "“Bir onadan bir necha xil bola tug’iladi” iqrori quyidagi qaysi asardla uchraydi?", "options": ["“Oq kema”", "“Mehriobdan chayon”", "“Me’mor”", "“Dahshat” t"], "correctAnswer": 1, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v2_lang_q14", "variant": 2, "subject": "lang", "text": "“Mehrobdan_ chayon” romanida “Qush tilini qush biladi” maqoli quyidagi qaysi a holatda ishlatilgan", "options": ["Solih maxdum va Muhammad Rajabbek bilan bo’lgan nmunosbati", "Abdurahmon, Kalonshoh va Shahodat muOftiylarning o’zaro suhbatlashishi", "Anvar hamda Sultonalining o’zaro do’stligi", "Nodira hamda Mohlaroyimning munosabati"], "correctAnswer": 2, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v2_lang_q15", "variant": 2, "subject": "lang", "text": "Cho’lponning qaysi she’rida “Qulog’ingga o’tganlardan ertak to’qiy” misrasi uchraydi?", "options": ["“Binafsha”", "“Go’zal”", "“Buzilgan o’lka”", "“Xalq”"], "correctAnswer": 2, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v2_lang_q16", "variant": 2, "subject": "lang", "text": "Xato yozilgan so'zni toping.", "options": ["ertalabgi", "kubogi", "dastlabgi", "koleydoskop"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q17", "variant": 2, "subject": "lang", "text": "Qaysi javobda o‘z paronimi bilan o‘zaro bir xil so‘z turkumiga mansub bo‘ladigan so‘zlar berilgan?", "options": ["sut, yarog‘, adl, adip, asr", "lahm, qarz, tars, hol, amr", "adip, tanbur, surat, a’lam, burch", "ravon, amr, ariq, arpa, ganj"], "correctAnswer": 2, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v2_lang_q18", "variant": 2, "subject": "lang", "text": "Kumushbibi endi o‘n yettini qo‘yib, o‘n sakkizga qadam bosganida bo'yi ham onasiga yetayozgan, ammo jussasi onasidan ko‘ra to‘laroq ko'rinar edi. Ushbu gapda qanday ma’no ko'chishi kuzatiladi?", "options": ["metafora", "sinekdoxa", "metonimiya", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q19", "variant": 2, "subject": "lang", "text": "Garchi tutqinman-ku erkin sehringga, Unda sobit turar maqsudmanzilim. Qolib ketmasaydim sening mehringdan, Qolib ketmasaydim yo'lda uzilib. She’riy parchadagi nechta so‘z fonetik o'zgarish asosida yozilgan?", "options": ["3 ta", "4 ta", "5 ta", "1 ta"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q20", "variant": 2, "subject": "lang", "text": "Qaysi javobda yasama o‘rinjoy otlari qatori berilgan?", "options": ["sharqiy, g‘arbiy", "olmazor, o‘tloq", "do‘koncha, o‘yingoh", "guzar, mahalla"], "correctAnswer": 1, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v2_lang_q21", "variant": 2, "subject": "lang", "text": "0‘shanda his-hayajonga bandi bo‘lgan Erman qasam zaminidagi o‘ta og'ir, o‘ta zalvarli yukni dastlab to‘la his etmagan, guldor kigiz ustida bamisoli baqadek tosh qotib o'tirgan, hayratdan tosh qotgan Itolmasning behad quturishini va uning g‘azabkor bo'kirishidan tog'lar boshi ko'chib, olam ostin-ustin bo'lib ketishini kutgan. Parchada qaysi turdagi ma’no ko‘chishi kuzatiladi?", "options": ["metafora", "metonimiya", "sinekdoxa", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q22", "variant": 2, "subject": "lang", "text": "Qush negadir bo'ynini cho‘zib tumshug‘ini osmonga qaratib silkitar, shunda «tarak-tarak≫ degan ovoz 15. Quyidagi qaysi gaplarda kelishik qo‘shimchasining eshitilardi. adabiy til me’yorlariga amal qilinmasdan xato Ushbu gapda so'zlar imlosida nechta tovush tushgan? qo‘llanishi kuzatiladi?", "options": ["2 ta В) 1 ta C) 4 ta D) 3 ta 1) Biz sizni gazeta sharhi bilan tanishtiramiz; 2) Ularga fikrining ravon so'zlamoqni o'rgatish kerak;", "", "4 ta", "3 ta 1) Biz sizni gazeta sharhi bilan tanishtiramiz; 2) Ularga fikrining ravon so'zlamoqni o'rgatish kerak;"], "correctAnswer": 0, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q23", "variant": 2, "subject": "lang", "text": "Qaysi qatordagi juftliklarda shakldosh qo'shimchalar qatnashgan.", "options": ["qaram-onam, to‘lat-ishlat, changi-boyi, javobing-keling", "to‘plam-bolam, uxlat-to‘lat, jannati-chapani, chiqing- imkoning", "orzum-ko'rdim, tarqat-ko'payt, chiqim-so‘lim, dilin- ko‘rin", "baxtim-tilim, bo'yoq-taroq, sensiz-imkonsiz"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q24", "variant": 2, "subject": "lang", "text": "Qaysi qatorda tarixiy so'zlar berilgan?", "options": ["vasiqa, vaqf, botmon, o'kush, dudoq", "tanob,vasiqa, vaqf, chachvon, botmon", "vasiqa, paranji, vaqf, chachvon, botmon", "jallod, vaqf, botmon, talim, o‘kush"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q25", "variant": 2, "subject": "lang", "text": "Qaysi javobda o‘z shakldashi bilan o'zaro bir xil turkumga oid bo‘la oladigan omonim so‘z berilgan?", "options": ["qon", "taxt", "qovoq", "ko‘z"], "correctAnswer": 2, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v2_lang_q26", "variant": 2, "subject": "lang", "text": "Qaysi javobda egalik qo'shimchasi qo'shilganda tovush o’zgarishi bilan yoziladigan yasama so'zlar qatori berilgan?", "options": ["tirnoq, chelak, qiliq", "yaltiroq, qiyna, sovi", "bo‘yoq, ittifoq, qiziq", "buzuq, tilak, g'ildirak"], "correctAnswer": 3, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q27", "variant": 2, "subject": "lang", "text": "Qaysi asar qahramonining otasi ko'katfurush edi?", "options": ["«Dahshat≫", "«Mehrobdan chayon≫", "«Hellados≫", "«Mening o‘g‘rigina bolam≫"], "correctAnswer": 2, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q28", "variant": 2, "subject": "lang", "text": "Tarkibida jarangli va jarangsiz undoshlar bir bo‘g‘inda yonmayon kelgan so'zlarni toping. 1) kilometr; 2) fransuz; 3) sinfdosh; 4) mehribon; 5) fragment; 6) berkitmoq; 7) hamfikr; 8) harsillamoq.", "options": ["1, 2, 3, 4 , 6, 7", "2, 3, 5, 6, 7, 8", "1, 2, 3, 5, 6, 7, 8", "1, 2, 3, 5, 7"], "correctAnswer": 0, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q29", "variant": 2, "subject": "lang", "text": "Qaysi gapda qism orqali butun yoki butun orqali qismni ifodalash asosidagi ma’no ko‘chishi kuzatiladi?", "options": ["Uyda meni uchta qorako‘z kutib o‘tiribdi.", "«Е, sizlar hukumat emasmi?≫ - dedi chol.", "Beodob farzandning so‘zlarini sho‘rlik ona silliqlab turdi.", "Madina o‘n birinchini bu yil bitirdi."], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v2_lang_q30", "variant": 2, "subject": "lang", "text": "Qaysi javobda Mirkarim Osimning «Zulmat ichra nur≫ asari bilan bir xil janrda yozilgan asarlar berilgan?", "options": ["«Oltin vodiydan shabadalar≫ Oybek, «Tengdoshlar” (O. Yoqubov)", "«Er boshiga ish tushsa≫ (O.Yoqutov) «Netay≫ (G‘. G‘ulom)", "«Kasandra tamg'asi≫ (Ch. Aytmatov) «0‘ch≫ (Oybek)", "«Jamila≫ (Ch. Aytmatov) «Yodgor≫ (G‘. G‘ulom)"], "correctAnswer": 2, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v3_lang_q1", "variant": 3, "subject": "lang", "text": "Kampirchaning so‘rog‘iga aravakash hazillashib javob berdi: - Shahardan bir arava mehmon olib keldim, ena! Berilgan gapda nechta yasama so‘z ishtirok etgan?", "options": ["4 ta", "5 ta", "6 ta", "7 ta"], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q2", "variant": 3, "subject": "lang", "text": "Qo'shimcha qo'shilishi natijasida bir tor unli boshqa tor unliga almashinishi kuzatilgan so‘z qaratqich aniqlovchi vazifasida kelgan gap berilgan qatorni aniqlang.", "options": ["Har qanday nutq ifodalanmoqchi bo'lgan axborotning mazmuni, tinglovchi yoki o'quvchining yoshi, ijtimoiy maqomi, nutqning yozma yoki og‘zaki ekanligi, nutq vaziyatiga to'la mos kelishi zarur.", "Qishloqning kiraverishida adil teraklar saf tortib turgan uzun ko'cha bor ekan.", "Yo'lchi birinchi boqishdayoq u qizning chehrasida Gulnorning ruhini ko'rdi.", "Gapning qisqasi, madaniyatli bo'lish uchun odamga faqat bilim, kiyim, taqinchoq, yaxshi ro‘zg‘orning o'zigina kifoya emas."], "correctAnswer": 2, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q3", "variant": 3, "subject": "lang", "text": "Qaynona, qontalash, qasamyod, qat`i nazar, qaqshatgich, qizg’onchiq so’zlaridan nechtasi to’g’ri yozilgan?", "options": ["3", "5", "2", "1"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v3_lang_q4", "variant": 3, "subject": "lang", "text": "Keltirilgan xususiyatlardan qaysi biri nutqqa emas, tilga xos?", "options": ["aloqa shakli", "o’zgaruvchan", "hajmi noaniq", "dialog, monolog va matn shaklida bo’lishi"], "correctAnswer": 1, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q5", "variant": 3, "subject": "lang", "text": "Qalam, dovot va qalamdon uning qadrdonlariga aylanib", "options": ["Ko’kka boqma, ko’pga boq qolgan edi", "Ko’z bo’lmasa, peshina", "", ""], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v3_lang_q6", "variant": 3, "subject": "lang", "text": "Antonimlar berilmagan qatorni aniqlang", "options": ["minatdorlik—ko’rnamaklik", "mast--hushyor", "qo’rs—muloyim", "nojo’ya—o’rinsiz"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v3_lang_q7", "variant": 3, "subject": "lang", "text": "1-tovushi til oldi, sof portlovchi, shovqinli, jarangsiz, 2-tovushi til orqa, lablangan, quyi keng unli, 3-tovushi sayoz til orqa, portlovchi-sirg’aluvchi, burun tovushi, ovozdor, jarangli bo’lgan so’zni belgilang.", "options": ["tor", "dor", "tong", "tom"], "correctAnswer": 2, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q8", "variant": 3, "subject": "lang", "text": "–ba 2. Ser- 3. –dor 4. –kor 5. –zor 6. –bar 7. –chil", "options": ["1, 2, 3, 4, 6, 7", "1, 2, 3, 5, 6, 7", "2, 3, 4, 5, 6", "1, 2, 3, 6"], "correctAnswer": 1, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v3_lang_q9", "variant": 3, "subject": "lang", "text": "Qaysi gapda tinchlik so’zining asosdoshi qo’llanmagan?", "options": ["Qarigan chog’da halovat istasang, yoshlikda tinimsiz ilm o’rganish payida bo’l", "ilm ishtiyoqida betininm bo’lgan tolibning ko’ziga mol- dunyo ko’rinmas", "Tinim bilam kitob o’qigan kishi bir kuni farog’at topadi", "Tinchligimiz abadiy bo’lsin"], "correctAnswer": 2, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q10", "variant": 3, "subject": "lang", "text": "Tadbiq etmoq 6. orzungiz", "options": ["2 ta", "4 ta", "1 ta", "3 ta"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v3_lang_q11", "variant": 3, "subject": "lang", "text": "Har kimniki o’ziga, oy ko’rinar ko’ziga. maqolidagi morfemalar soni?", "options": ["14", "11", "12", "13"], "correctAnswer": 3, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v3_lang_q12", "variant": 3, "subject": "lang", "text": "Yasalish va morfem tuzilish bir xil bo’lgan so’zni toping.", "options": ["tepkila", "yugurgila 25", "tepkini", "ishoraviy 18. Tarkibida bitta so’z yasovchi qo’shimcha mavjud bo’lgan qo’shma so’zlarni aniqlang. 1. bilaguzuk 2. Achchiqtosh 3. Kamunum 4. Tinchlikparvar"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v3_lang_q13", "variant": 3, "subject": "lang", "text": "tekintomoq 6. olibsotar", "options": ["2, 3", "1, 2, 3, 4", "1, 3, 4", "1, 2, 3, 4, 5, 6"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v3_lang_q14", "variant": 3, "subject": "lang", "text": "Qaysi so’zning yasovchi asosi shaxsga munosabatni ifodalaydigan qismni qabul qilsa, bir so’zda ikki shakldosh o’zgaruvchi qismning ketma-ket kelganiga guvoh bo’lishimiz mumkin?", "options": ["manmansiramoq", "sizsizlik", "bilimdon", "qaysinisi"], "correctAnswer": 3, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q15", "variant": 3, "subject": "lang", "text": "Yuzungni oftobini ko’rub hayron bo’lub qoldim Falakg’a qo’l uzotib shamsi anvarni olib bo’lmas Necha sintaktik shakl yasovchi qo’shimcha bellgili qo’llangan?", "options": ["9 ta", "8 ta", "7 ta", "10 ta 21. Qaysi gapda –la so’z yasovchi qo’shimchasinjng shakldoshi qo’llangan? 1. Oygulni oldi-da, olib-la ketdi 2. Men-la topasan, baxt –la quvonchni 3. So’zlasan jo’yali so’zla, yo’qsa so’zlama"], "correctAnswer": 1, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q16", "variant": 3, "subject": "lang", "text": "Men-la topasan, baxt –la quvonchni", "options": ["4 ta so’z yasovchi, 3 ta sintaktik shakl yasovchi", "", "", ""], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v3_lang_q17", "variant": 3, "subject": "lang", "text": "Ertalabdan beri O’sha oy bilan quvlashmachoq o’ynayman", "options": ["1, 2, 3", "2, 3, 4", "1, 4", "1, 2, 4 22. Yasalish tuzilish bo’yicha ham, morfemik tahlilda ham bir xil bo’ladigan so’zni belgilang. 1. suvchechak 2. O’zgarish 3. Bodroqqa 4. Osmono’par"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v3_lang_q18", "variant": 3, "subject": "lang", "text": "Og’riqli 6. Yog’ingarchilik", "options": ["2, 5, 6", "1, 4, 5, 6", "faqat 2", "1, 2, 3, 4, 5, 6"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v3_lang_q19", "variant": 3, "subject": "lang", "text": "Bir g’aribning ko’nglini shod aylasang Yo’l bosib Ka`ba sari bormoq abas Yasama so’zlar soni nechta?", "options": ["2", "1", "3", "yasama so’z mavjud emas"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v3_lang_q20", "variant": 3, "subject": "lang", "text": "Bilmam, nima eding maqsading, Menga bir juft guling asrading Birin otin Kumush atading Birin otin Zaynab atading Berilgan bandda birgina tovushdan iborat qo’shimchalar soni?", "options": ["13", "15", "11", "10"], "correctAnswer": 1, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q21", "variant": 3, "subject": "lang", "text": "Qaysi qatordagi so’zlarning qo’shimchalari shakldosh hisoblanadi?", "options": ["kelin, yig’in, so’kin", "ekin, sog’in, kiyin", "ishla, quvla, so’zla", "yopin, yuvin, ilin"], "correctAnswer": 1, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v3_lang_q22", "variant": 3, "subject": "lang", "text": "Qaysi qatordagi gapda tarkibi so’z yasovchi qo’shimchaniki bilan birxil (shakldosh) bo’lgan so’z qo’llangan?", "options": ["Qani,, yo’q deb ko’rgin-chi", "Oz so’zla, ko’p o’yla", "Akam bu xabarni iliq kutib oldi", "Oy borib omon qayt"], "correctAnswer": 2, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q23", "variant": 3, "subject": "lang", "text": "U holda biz yashaydigan xona devorlarini tog’ ungurida o’ynab yurgan ohular emas, seryomg’ir kelgan bulturgi bahorning tomdan sizib o’tgan chakka dog’lari “bezagan” Soda yasama so’zlar soni nechta?", "options": ["3", "4", "5", "6 3. Tarkibida so’z yasovchi qo’shimcha mavjud bo’lgan qo’shma so’zlarni belgilang. 1. bilaguzuk 2. Achchiqtosh 3. Kamunum"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q24", "variant": 3, "subject": "lang", "text": "Qaysi gap tarkibida so’z yasovchi shakldosh qo’shimcha qo’shilishi natijasida hosil bo’lgan shakldosh so’z bor?", "options": ["Ot ustidagi yopiqlarni olib yerdagi egar ustiga tashladi", "Daraxtdagi olmalar yetilishiga hali biroz vaqt bor", "Yoshlik eng murakkab qiziqqon va tez o’tuvchi fasl", "Yangilik bu unitilgan eskilik"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v3_lang_q25", "variant": 3, "subject": "lang", "text": "tekintomoq 6. olibsotar", "options": ["2, 3", "1, 2, 3, 4", "1, 3, 4", "1, 2, 3, 4, 5, 6"], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q26", "variant": 3, "subject": "lang", "text": "Asraylik o’simlik xillarin tayin Asraylik hayvonlar noyob zotini Qo’shimchalr sonini aniqlang.", "options": ["11", "13", "9", "12"], "correctAnswer": 2, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v3_lang_q27", "variant": 3, "subject": "lang", "text": "Urg’usi ochiq bo’g’inga tushgan yasam so’z qatnashgan gap berilgan javobni toping", "options": ["Badiy adabiyotning asosiy ish quroli so’zdir", "Bu tushuncha Rashidaning ongiga yetmadi", "Iroda qirqdan ortiq dostonlarni yod bilgan", "Qiyat yurtiga, Sartol qishlog’iga yo’l boshlab boraversin"], "correctAnswer": 1, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q28", "variant": 3, "subject": "lang", "text": "Qaysi gapda ikkita so’z yasovchi qo’shhimcha qo’llangan?", "options": ["Bundan o’ttiz yil burun men u kishining 22 tomlik to’plamini qo’lim-dan qo’ymay o’qib chiqdim", "Qaysi vazir g’iybat gaplarni aytsa, uydirma gaplarga quloq tutsa jabr-zulm qilsa, o’ziga yoqmagan kishilarni yo’qotish payiga tushsa, uni vazirlikdan tushirish zarur", "Savodxonlik darajasini tekshirishning sinalgan ussullaridan biri insho sanaladi", "Yer yuzida hamma joyning o’z atamasi bor"], "correctAnswer": 2, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q29", "variant": 3, "subject": "lang", "text": "Qaysi gapda shakldosh qo’shimchalar uchramaydi?", "options": ["ko’rasan, seni ishqida jizza qiladi", "Ikkalasi ham shahrimizdagi o’zgarishlarni ko’rib lol qolishdi", "Quvlab yeta olmasligini shunda ham anglamadi 27", "O’nlab yigit-qizlar yomg’ir suvi loy qilgan ko’chalardan avaylab yutib borishardi"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v3_lang_q30", "variant": 3, "subject": "lang", "text": "Yasovchi asosi uch morfemadan iborat so’zni belgilang.", "options": ["uyqusizlikdan", "bosqinchilik", "bezakdor", "yog’ingarchilik"], "correctAnswer": 1, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q1", "variant": 4, "subject": "lang", "text": "Har bitta darxtda bir dil yashaydi, Tikilganim sari o’sadi ko’nglim. Ularga quloq sol, ularni tushun, Daraxtlar aldashni bilmaydi, o’g’lim Fonetik yozuvda yozilgan yasama so’zlar soni nechta?", "options": ["1", "2", "3", "4"], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q2", "variant": 4, "subject": "lang", "text": "Ularning g’amini hamisha yeb, ustini butlab, qornini to’qlab kelgan sulton endi o’zining g’amini yemoqda edi. Ushbu gapda qo’shimchalar soni nechta?", "options": ["21", "18", "20", "19"], "correctAnswer": 2, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q3", "variant": 4, "subject": "lang", "text": "Ocharchilik, odamlarning kunjara yeganlarini ko’p ko’rganman. Ushbu gapda nechta qo’shimcha o’zi alohida bir bo’g’inni tashkil qilmoqda?", "options": ["8", "7", "6", "5"], "correctAnswer": 1, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q4", "variant": 4, "subject": "lang", "text": "Cholning xotini elliginchi yillarning oxirida o’lib ketgan, faqat istarasi o’zinikidan ham sovuq yolg’iz o’g’li boridi. Berilgan gapda asoslarga qanday qo’shimcha qo’shilishi natijasida fonetik hodisa ro’y bermoqda?", "options": ["so’z va sintaktik shakl yasovchi", "so’z va lug’aviy shakl yasovchi", "lug’aviy va sintaktik shakl yasovchilar", "so’z, sintaktik va lug’aviy shakl yasovchilar"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q5", "variant": 4, "subject": "lang", "text": "Og’zaki nutq oqimi bo’linuvchanlik xususiyatiga ega bo’lgan tovushlar ketma-ketligidan iborat. Ushbu gapda nechta yasama so’z bor?", "options": ["6", "5", "4", "7"], "correctAnswer": 0, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q6", "variant": 4, "subject": "lang", "text": "Ezgu niyatimizning ro’yobga chiqishi uchun taraqqiy topgan marifatli dunyo bilan birga yashaymiz, hamkorlikni kuchaytirishimiz, hamdo’stlik rishtalarini mustahkamlashimizni hayotning o’zi taqozo etmmoqda Ushbu gapda nechta yasama so’z qo’llangan?", "options": ["9", "10", "7", "8"], "correctAnswer": 1, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q7", "variant": 4, "subject": "lang", "text": "Ezgu niyatimizning ro’yobga chiqishi uchun taraqqiy topgan marifatli dunyo bilan birga yashaymiz, hamkorlikni kuchaytirishimiz, hamdo’stlik rishtalarini mustahkamlashimizni hayotning o’zi taqozo etmmoqda Ushbu gapda nechta yasama so’z qo’llangan?", "options": ["9", "10", "7", "8"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v4_lang_q8", "variant": 4, "subject": "lang", "text": "Qaysi gapda yasama so’z qatnashgan?", "options": ["Kim ota onasini hurmat qilmasa, farzandlaridan ham shuni kutsin", "Kimki birovni xatolarini ko’rib tuzatmasa, unga do’st emas ekan", "Tunga yaqin shaharga yetib keldik", "Kitob bilan o’sgan bola hamda kitobdan uzoq yurgan bolaning o’rtasida farqni sezish qiyin emas"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q9", "variant": 4, "subject": "lang", "text": "Qaysi gapda poronimlarni qo’llash bilan bog’liq xato bor?", "options": ["Har kuni bir xil savollar: “Sutga oqliq soldingmi?”, “Ovqat quyulib qolmadimi?”", "Sizni kutdik, mahtal bo’lib kutdik, qariyb uch yil kutdik", "Mavzularni bazo’r o’zlashtiryapman, bundan qat`iy nazar, a`lo baho olishga harakat qilaman", "Ko’p kuyunma, bolam, qo’ylaring ko’chada qolmaydi, yangi qo’ra quramiz 10. 1. O’ynoqi 2. Mo’jiza 3. Shovullamoq 4. Orzung 5. Qushqo’nmas 6. Qirg’iyko’z"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q10", "variant": 4, "subject": "lang", "text": "Tilimizda nekbin tuyg’ular iborasi bor ushbu iboraning ma`nosini toping.", "options": ["pok va samimiy", "eng oliy", "umuminsoniy", "an`anaviy"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q11", "variant": 4, "subject": "lang", "text": "Toqqaychi 8. Kiryuvdi(marosim) 9. 5-, 7-, 8- sinflar 10. Obroyi Nechta so’zning imlosida xatolik mavjud?", "options": ["5", "2", "3", "1"], "correctAnswer": 2, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q12", "variant": 4, "subject": "lang", "text": "Fonetik yozuv qoidasi bo’yicha yoziladigan qaysi so’zning asosiga egalik qo’shimchasini qo’shsak, asosda tovush o’zgarishi yuz beradi?", "options": ["quruqlikka", "barmoqni", "yoshligi", "yo’qligi"], "correctAnswer": 1, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q13", "variant": 4, "subject": "lang", "text": "Qaysi qatordagi so’zlarda bitta ko’makchi morfema mavjud?", "options": ["isrofgarchilik, egrilik", "muzlatgich, loygarchilik", "simirgan, surishtirdi", "ata, o’ynoqi"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q14", "variant": 4, "subject": "lang", "text": "Ikki xil munosabat shakli vazifasini bajara oladigan shakldosh qo’shimchani belgilang.", "options": ["–m, -ng", "–di, -sa", "–dir, -di, -sa", "–I, -ish"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v4_lang_q15", "variant": 4, "subject": "lang", "text": "Anor, sening yuzlaring suluv, Xumor, sening ko’zlaring suluv Yodda qolmas so’zlaring suluv, Mehr qolur, muhabbat qolur. Qanday fonetik o’zgarishlar sodir bo’lgan.", "options": ["tovush tushishi", "tovush almashishi va tushishi", "tovush ortishi va almashishi", "tovush o’zgarishi sodir bo’lmagan"], "correctAnswer": 2, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v4_lang_q16", "variant": 4, "subject": "lang", "text": "Bo’g’inlari va ma`noli qismlari teng bo’lgan so’zni belgilang.", "options": ["bajardik", "beshtacha", "yugurgancha", "fonetik"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q17", "variant": 4, "subject": "lang", "text": "1. Qo’llar 2. Tinglar 3. Suvlar 4. Ishlar 5. Ko’zlar 6. Qo’llar Urg’u ma`no farqlaydigan so’zlarni belgilang.", "options": ["1, 4, 5,", "1, 2, 4,", "1, 2, 3, 4, 5, 6", "1, 3, 4, 5, 6"], "correctAnswer": 3, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v4_lang_q18", "variant": 4, "subject": "lang", "text": "Qo’shimcha qo’shilishi bilan hosil bo’lgan shakldosh so’zlarni belgilang", "options": ["atlas", "changni", "mayda", "lolalar"], "correctAnswer": 2, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q19", "variant": 4, "subject": "lang", "text": "Bir qoshiqqa kim ham to’yardi. Ma`no ko’chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoxa", "vazifadoshlik"], "correctAnswer": 1, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v4_lang_q20", "variant": 4, "subject": "lang", "text": "Kutib tur ustimni almashtirib chiqay", "options": ["metafora", "metonimiya", "sinekdoxa", "vazifadoshlik"], "correctAnswer": 1, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v4_lang_q21", "variant": 4, "subject": "lang", "text": "Amaliy imlo qoidalariga ko’ra qaysi so’z noto’g’ri yozilgan?", "options": ["uniter-ofetser", "damba-dam", "maishat", "alyuminiy"], "correctAnswer": 1, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q22", "variant": 4, "subject": "lang", "text": "Quvlashmachoq o’ynar edik, bog’lar aro, betinim. Yasama so’zlar miqdori nechta?", "options": ["3", "4", "5", "6"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v4_lang_q23", "variant": 4, "subject": "lang", "text": "Qo’shimcha qo’shilishidan hosil bo’lgan hosil bo’lgan ommonim so’zlarni belgilang.", "options": ["oting", "tanga", "gap", "changni"], "correctAnswer": 1, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q24", "variant": 4, "subject": "lang", "text": "Qaysi banda berilgan antonimlar ayni paytda shakldoshligiga ham ega?", "options": ["ol-olma", "yoq-o’ch", "sur-tort", "oq-qora 23. Noto’g’ri yozilgan so’zlar soni nechta? 1. Badqavoq 2. Avzoyi 3. Ur to’qmoq 4. Milyard"], "correctAnswer": 1, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v4_lang_q25", "variant": 4, "subject": "lang", "text": "Chirmoviq 6. sovuqmijoz", "options": ["2", "3", "1", "5"], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q26", "variant": 4, "subject": "lang", "text": "Qaysi gapda imloviy xatoga yo’l qo’yilgan?", "options": ["Bu ne razillik, bu ne istibdod", "Sizday “xayrli” ishlarga bosh qo’shadigan “oliyjanob” toyifalar “ko’payaversin”", "Bizni muyulishda bir kishi anchadan beri kutib turardi", "Barcha javoblarda imloviy xatoga yo’l qo’yilgan 30 Morfemika 4"], "correctAnswer": 1, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q27", "variant": 4, "subject": "lang", "text": "Nomardlarda yolgizlik, yomonlik, ojizlik, makkorlik, hasad, adovat, tubanlik, noinsoflik kabi sifatlarni uchratish mumkin So’z yasovchi qo’shimchalar soni", "options": ["7", "9", "8", "6"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q28", "variant": 4, "subject": "lang", "text": "Muallim va muallif so’zidagi fonemalarning birlashtiruvchi belgilari qaysi qatorda to’g’ri tasnif qilingan?", "options": ["hosil bo’lish o’rni", "hosil bo’lish usuli", "jarangli yoki jarangsizligi", "ovozdor yoki shovqinliligi"], "correctAnswer": 1, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v4_lang_q29", "variant": 4, "subject": "lang", "text": "Qaysi gapda yasama so’zlar miqdori nisbatan ko’proq?", "options": ["Savol bering—javob beramiz", "Insonni so’z ayladi judo hayvondin, Biliki guhari sharifroq yo’q ondin", "Intizomsizlik barcha kulfatlarga sababmikan?", "Xudo asragan ekan pichoq qor ichida, naq uning yelkasi tushgan joyda yotardi"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v4_lang_q30", "variant": 4, "subject": "lang", "text": "Qaysi so’zda tilning vertikal holatiga ko’ra bir guruhga mansub unlilar ishtirok etgan?", "options": ["vodiy", "kurash", "yetuk", "samo"], "correctAnswer": 3, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v5_lang_q1", "variant": 5, "subject": "lang", "text": "Qaysi qatorda so’zning ma`noli qismlari odatdagi tartibda joylashmagan?", "options": ["o’chirg’ichlarni", "kitobxonlardan", "tepaliklarda", "uzumzorgacha"], "correctAnswer": 1, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v5_lang_q2", "variant": 5, "subject": "lang", "text": "“Olim bo’lsang olam seniki” deydi xalqimiz Ushbu gapda qanday qo’shimchalar bor?", "options": ["1 ta so’z yasovchi, 2 ta lug’aviy, 2 ta sintaktik shakl yasovchi", "1 ta so’z yasovchi, 3 ta lug’aviy, 2 ta sintaktik shakl yasovchi", "3 ta lug’aviy, 3 ta sintaktik shakl yasovchi", "1 ta lug’aviy, 5 ta sintakti shakl yasovchi"], "correctAnswer": 0, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q3", "variant": 5, "subject": "lang", "text": "Yangi yilda uyimizga baxsh etib zavq-u safo, kirib keldi Qorbobo Yasama so’zlar soni?", "options": ["4", "5", "2", "3"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v5_lang_q4", "variant": 5, "subject": "lang", "text": "G’azapdan o’zingni asra, chunki g’azap tufayli inson o’z ishlarini, ezgu maxsatlarini unitadi. Ushbu gapda nechta imloviy xatolikka yo’l qo’yilgan?", "options": ["3", "4", "2", "5"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q5", "variant": 5, "subject": "lang", "text": "Qaysi qatordagi so’z marfemalarga ajraladi", "options": ["ko’rpa", "biror", "g’ijjak", "qattiq"], "correctAnswer": 1, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v5_lang_q6", "variant": 5, "subject": "lang", "text": "Yosh iqtidorlarni qo’llab-quvvatlash markazi ochildi Ma`no ko’chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoxa", "vazifadoshlik 31"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v5_lang_q7", "variant": 5, "subject": "lang", "text": "Qaysi qatorda asosdosh so’zlar berilgan?", "options": ["gulzor, gulxan", "gulchi, gulchilar", "gulni, gulga", "gul, gulchi"], "correctAnswer": 3, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q8", "variant": 5, "subject": "lang", "text": "Qaysi qatorda tarixiy so’z berilgan?", "options": ["mingboshi", "oblast", "riyoziyot", "uzor"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q9", "variant": 5, "subject": "lang", "text": "uncha-muncha 2. Osh-posh 3. Irim-sirim 4. Yonma-yon 5. qadam-baqadam 6. Adi-badi 7. Bilib-bilmay 8. Dum-dumaloq", "options": ["4, 5, 6, 7", "1, 2, 4, 5", "1, 2, 3, 4, 5, 7, 8", "4, 5, 6, 8"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q10", "variant": 5, "subject": "lang", "text": "Bunday olmoshi qaysi yozuv tamoili bo’yicha yoziladi?", "options": ["shakliy", "morfologik", "tarixiy", "fonetik"], "correctAnswer": 1, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v5_lang_q11", "variant": 5, "subject": "lang", "text": "Oqarinqiramoq so’zi tarkibida qanday qo’shimchalar mavjud?", "options": ["3 ta lug’aviy shakl yasovchi", "1 ta so’z yasovchi, 2 ta lug’aviy shakl yasovchi", "1 ta so’z yasovchi va 3 ta lug’aviy shakl yasovchi", "3 ta lug’aviy shakl yasovchi va 1 ta sintaktik shakl yasovchi"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v5_lang_q12", "variant": 5, "subject": "lang", "text": "Yangi imlo qoidasiga asoslanib, so’zlarga egalik qo’shimchalari qo’shilishi bilan bog’liq xato javobni belgilang.", "options": ["ko’pchilik so’zlarga egalik qo’shimchalari-m, -ng, -si, -miz, -ngiz, --si(yoki –lari) shaklida qo’shiladi", "parva, obro, mavqe, mavzu, avzo so’zlariga I, II shaxs egalik qo’shimchalari bir y tovushi qo’shib aytiladi va shunday yoziladi", "III shaxs egalik qo’shimchasi parvo, avzo, obro, mavqe so’zlariga –yi shaklida qo’shiladi", "III shaxs egalik qo’shimchasi xudo, mavzu so’zlariga –yi shaklida qo’shiladi"], "correctAnswer": 1, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q13", "variant": 5, "subject": "lang", "text": "“Abulfayzxon” dramasi Fitrat qalamiga mansub. Ma`no ko’chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoxa", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v5_lang_q14", "variant": 5, "subject": "lang", "text": "Tub so’z berilgan qatorni aniqlang", "options": ["musuqiy", "ilmiy", "doimiy", "oilaviy"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v5_lang_q15", "variant": 5, "subject": "lang", "text": "Berilgan qaysi so’zning tarkibi asosga qo’shimcha qo’shilganda tushib qolishi mumkin bo’gan tovushlardan tuzilmagan?", "options": ["umida", "mutant", "antenna", "tun"], "correctAnswer": 2, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q16", "variant": 5, "subject": "lang", "text": "Qaysi qatorda ham fonetik, ham morfologik usulda yozilgan so’zlar bor?", "options": ["qalamkash, o’quvchi, logarifm", "ikkovlon, bitta, so’zlovchi", "sanoq, qiymala, hamkasb", "reyting, trolleybus, a`lochi"], "correctAnswer": 1, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v5_lang_q17", "variant": 5, "subject": "lang", "text": "Fonetik yozuvda yozuluvchi, tarkibida unli va faqat shovqindan iborat undoshlar qatnashgan so’zni belgilang", "options": ["qishloqi", "kurakka", "chiqqach", "yig’lama"], "correctAnswer": 1, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q18", "variant": 5, "subject": "lang", "text": "Qisqartma so’zlarga qo’shilgan kelishik qo’shimchalari qanday yoziladi?", "options": ["qo’shib", "ajratib", "chiziqcha bilan", "bazan qo’shib, bazan ajratib"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q19", "variant": 5, "subject": "lang", "text": "Nutqda bozor so’zi yakshanba so’ziga nisbatan qo’llanadi. Bu qaysi ma`no ko’chish turiga asos bo’ladi?", "options": ["metafora", "metonimiya", "sinekdoxa", "vazifadoshlik"], "correctAnswer": 1, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v5_lang_q20", "variant": 5, "subject": "lang", "text": "Qaysi gapda barcha so’zlarning asosi shakldoshlik xususiyatiga ega?", "options": ["Boshingga tushgani peshonangga bitgani— o’zingni qo’lga ol", "Gul to’la bog’dan yoqimli is taralmoqda edi", "O’zingdan kechma, adashma—tilga kirdi esib turgan yel", "Molim, qo’yim, uyimni—borimni tikdim, biroq yutuqqa erisha olmadim"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q21", "variant": 5, "subject": "lang", "text": "Qaysi qatordagi so’zlar alifbo tartibida yozilmagan?", "options": ["agrotexnika, anjir, anor", "Kattaqo’rg’on, kishmish, kuz", "telegraf, tipografiya, teploxod", "mayiz, mashina, mosh"], "correctAnswer": 2, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v5_lang_q22", "variant": 5, "subject": "lang", "text": "Qaysi gapda poranimlar bilan bog’liq xatolik bor?", "options": ["Go’sht olsang, lahm ol", "Asilning bahosi kata, asalning shifosi", "Ta`na yo’li—to’yg’anoq", "Urish qurbonsiz bo’lmaydi"], "correctAnswer": 3, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q23", "variant": 5, "subject": "lang", "text": "Bilurmisan, ayt menga, kinyaz Movut ko’zli anov xonim kim? Turur ispan elchisi birlan Oneginga qarar u birdan. 33 Sheriy parchada mustaqil lug’aviy ma’noga ega bo’lmagan so’zlar soni nechta?", "options": ["3", "4", "5", "6"], "correctAnswer": 1, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v5_lang_q24", "variant": 5, "subject": "lang", "text": "Qaysi gapda so’z yasovchi qo’shimchalar soni nisbatan ko’proq?", "options": ["Zargar firibgar bo’lsa, oltin ham zanglaydi", "Ochiq til osh yedirar, achchiq til bosh yedirar", "Tirishganning labi yog’li, erinchoqning boshi qonli", "Elning yirtig’iga yamoq bo’l, uzug’iga uloq bo’l"], "correctAnswer": 2, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q25", "variant": 5, "subject": "lang", "text": "Qaysi gapda asosdosh so’zlar qo’llangan?", "options": ["Boshim og’rib ketdi, anaving kerak-nokerak so’zlar bilan miyamni qoqib yotibdi", "Odobsiz bo’lma, odobsizlarga bunday davralarning eshigi doim yopiq", "Bu yerda yashay boshlabmanki, kundan-kunga yosharib boryapman", "O’quvchilar tatil davomida o’qib kelgan ertaklari haqida matn yozib berishi lozim"], "correctAnswer": 1, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q26", "variant": 5, "subject": "lang", "text": "Bugungi qaqroq butazorlar chanqog’ini qondirish ertangi kunning muhim vazifasidir. Fonetik hodisalar soni nechta?", "options": ["4", "6", "3", "5 20. Qaysi so’zlarning ikkinchi bo’g’inidagi u tovushi I tovushiga moyilroq talafuz qilinadi?"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v5_lang_q27", "variant": 5, "subject": "lang", "text": "qovun, sovuq 2. Yulduz, yumush 3. Bug’u, uyqu", "options": ["1, 2, 3", "faqat 1", "1, 3", "2, 3 21. Yuqoridagi so’zlardan to’g’ri yozilganlarini aniqlang."], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v5_lang_q28", "variant": 5, "subject": "lang", "text": "Obihayot, no’xat, nuqtai nazar, odamzod, olam johon, omuxta Berilgan so’zlardan nechtasi to’g’ri yozilgan?", "options": ["3", "4", "5", "2"], "correctAnswer": 2, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v5_lang_q29", "variant": 5, "subject": "lang", "text": "boyaqish 2. Monelik 3. Narda 4. Noshut 5. Taqozo 6. fontomima", "options": ["1, 2, 5, 6", "2, 5", "1, 5", "2, 3, 4"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v5_lang_q30", "variant": 5, "subject": "lang", "text": "Morfemalari va bo’g’inlari soni teng kelgan yasama so’zni aniqlang", "options": ["beriladi", "qiynog’ingiz", "noodatiy", "bog’landi"], "correctAnswer": 1, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v6_lang_q1", "variant": 6, "subject": "lang", "text": "Qaysi gapda yasama so’z qatnashgan?", "options": ["Kim ota onasini hurmat qilmasa, farzandlaridan ham shuni kutsin", "Kimki birovni xatolarini ko’rib tuzatmasa, unga do’st emas ekan", "Tunga yaqin shaharga yetib keldik", "Kitob bilan o’sgan bola hamda kitobdan uzoq yurgan bolaning o’rtasida farqni sezish qiyin emas"], "correctAnswer": 3, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q2", "variant": 6, "subject": "lang", "text": "Qaysi javobda kuzatilgan so’zning tasviriy ifodasida manodoshlik kuzatiladi?", "options": ["bokschilar", "shaxmat", "bahor", "neft"], "correctAnswer": 2, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v6_lang_q3", "variant": 6, "subject": "lang", "text": "Obihayot, no’xat, nuqtai nazar, odamzod, olam johon, omuxta Berilgan so’zlardan nechtasi to’g’ri yozilgan?", "options": ["3", "4", "5", "2"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v6_lang_q4", "variant": 6, "subject": "lang", "text": "Keng yaylovga o’tmi, ketdi “Madaniyat” istagiga qondimi? Ma`no ko’chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 1, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v6_lang_q5", "variant": 6, "subject": "lang", "text": "Qaysi javobda so’z yasovchi va lug’aviy shakl yasovchi qo’shimchalar orasida shakldoshlik yuzaga kelmagan?", "options": ["shovqin-chiqish", "o’zgar-so’rar", "belanchak-kelinchak", "savala-o'yla"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v6_lang_q6", "variant": 6, "subject": "lang", "text": "Qaysi javobda yasama so’z asosida bir necha so’zning shaklan tengligi kuzatiladi?", "options": ["U jiyron otning ochligini payqagan va uni o’tga qo’ygach o’zi biroz mizg’igan edi", "Talaba bo’lgach bilarkansan haqiqiy hayot mashaqatlarini", "Ishdan so’ng yangi va qiziqarli filmlarni ko’rishni odat qilgan edi", "Ovqat pishirish unga yoqmasa-da, chiroyli pishiriqlar uning joni-dili edi"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v6_lang_q7", "variant": 6, "subject": "lang", "text": "Og’izining tanobi qochdi iborasiga zid ma`noli bo’lgan iborani belgilang.", "options": ["boshi ko’kka yetmoq", "qovog’i osilmoq", "xafa", "og’ziga talqon solmoq"], "correctAnswer": 1, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q8", "variant": 6, "subject": "lang", "text": "Imloviy xato mavjud bo’lgan qatorni aniqlang.", "options": ["Tabiatda har xil hasharot mavjud", "ingiliz tilini bilish—davr talabi", "Mol-dunyoga hirs qo’yma", "Ruhan yengil tortdi"], "correctAnswer": 1, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v6_lang_q9", "variant": 6, "subject": "lang", "text": "Qaysi javobdagi so’zning ma`noli qismlari boshqalardan ko’p?", "options": ["yog’ingarchilik", "kosibchilik", "insofgarchilik", "atalgan"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v6_lang_q10", "variant": 6, "subject": "lang", "text": "Sho’rvaning tuzi o’tkiroq bo’lib qoldi? Ma`no ko’chish turini aniqlang.", "options": ["metafora, metonimiya", "metonimiya, vazifadoshlik", "sinekdoha, vazifadoshlik", "vazifadoshlik, metafora 35"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v6_lang_q11", "variant": 6, "subject": "lang", "text": "Qaysi so’zda lablanmagan o’rta keng unli ochiq bo’g’inda ishtirok etadi?", "options": ["peshayvon", "mo’jiza", "tengsiz", "ongingiz"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v6_lang_q12", "variant": 6, "subject": "lang", "text": "Tenchliksevarlik so’zining yasalish asosida nechta jarangli undosh bor?", "options": ["5", "4", "3", "2"], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q13", "variant": 6, "subject": "lang", "text": "Endi mening ham zo’r ruchkam bor, uni hech kimga bermayman. Bu--sovg’a. Atash ma`nosi yo’q so’zlarda nechta jarangsiz jufti yo’q til undoshi qatnashgan", "options": ["5", "4", "3", "2"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q14", "variant": 6, "subject": "lang", "text": "To’g’ri hukmni aniqlang.", "options": ["O’z qatlamga oid so’zlar talafuzda tovush o’zgarishiga uchraydi", "o’z qatlamga oid so’zlar asosan ikki-uch bo’g’inli bo’ladi", "barcha fe`l va taqlid so’zlar o’z qatlamga mansub", "DJ tovushi bo’lgan so’zlar bizga arab tilidan o’zlashgan"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q15", "variant": 6, "subject": "lang", "text": "Ukalariningga ko’z-quloq bo’lib tur. Ma’no ko’chish turini aniqlang.", "options": ["metofora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 3, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q16", "variant": 6, "subject": "lang", "text": "Qaysi javobda yasama so’zlar boshqalarinikidan ko’proq?", "options": ["Xullas, Javoxir har kuni bitta yangi, qiziqarli va ibratli hikoya o’ylab topib buvisiga so’zlab beradigan bo’libdi", "Uning gapirish ohangida qanday o’zgarish bo’layotganing aniqlashga urining", "To’g’ri, qishloq tomonga bir ikki qadam bosdim. Lekin chamasi, kursdoshlar orasida yolg’izlanib qolish, ming bir ta`nalarni eshitishdan hamqo’rqdim, shekilli", "Yomg’ir yog’yapdi shekilli, deb o’ylab, boshini ichiga tiqib, yotaveradi, keyin bitta-bitta hiqildog’idan tutib xaltaga solaveraman"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q17", "variant": 6, "subject": "lang", "text": "Ushbu gapda nechta so’z imlosida xatolikka yo’l qo’yilgan? Respublika Oliy Kengashining XII chaqiriq navbatdan tashqari oltinchi sessiyasida O’zbekiston Respublikasining Mustaqillik kuni deb e`lon qilindi", "options": ["3", "2", "1", "barchasi to’g’ri"], "correctAnswer": 0, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q18", "variant": 6, "subject": "lang", "text": "Nilufar ikkovini ham taniyolmadi va yig’laganicha narigi uyga kirib ketdi. Fonetik yozuvda yozilgan so’zlar tarkibida nechta ochiq bo’g’in bor?", "options": ["7", "5", "8", "11"], "correctAnswer": 1, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v6_lang_q19", "variant": 6, "subject": "lang", "text": "Qirimizi 6. qizil", "options": ["3, 1, 2, 6, 4, 5", "1, 3, 4, 2, 5, 6", "6, 4, 2, 5, 3, 1", "2, 4, 1, 5, 6, 3"], "correctAnswer": 1, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v6_lang_q20", "variant": 6, "subject": "lang", "text": "Qirimizi 6. qizil", "options": ["3, 1, 2, 6, 4, 5", "1, 3, 4, 2, 5, 6", "6, 4, 2, 5, 3, 1", "2, 4, 1, 5, 6, 3"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v6_lang_q21", "variant": 6, "subject": "lang", "text": "suzgich 2. Oyog’im 3. Dardkash 4. O’yna", "options": ["1, 2, 3", "1, 2, 3, 4", "faqat 1, 3", "1, 3, 4"], "correctAnswer": 0, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v6_lang_q22", "variant": 6, "subject": "lang", "text": "Qaysi qatorda birdan ortiq ma`no ko’chish kuzatiladi?", "options": ["Qatorda noring bo’lsa, yoking yerda qolmaydi", "Agar yashasang baland tog’da yasha, agar ishlasang shahri azimda ishla", "Yo’lda do’sti bilan ketayotgan g’ilay dedi—“shu ketayotgan yo’limizdan qaysibiri to’g’ri", "“cho’qintirga ota” qanchadan ketyabdi, do’konda bormi 11. Berilgan so’zlarning yasovchi asosi qaysi turkumga mansub? 1. yaqinlashmoq 2. Oqsoqlanmoq"], "correctAnswer": 3, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v6_lang_q23", "variant": 6, "subject": "lang", "text": "Egrimi-to’g’rimi, o’tkirmi-o’tmasmi-pichoqchiga pichoqning bori yaxshi. Yasama so’zning yasovchi asosi(yasalish asosi) qaysi turkumga oidligini belgilang.", "options": ["ot va fel", "faqat ot", "ot, fel va sifat", "ot va sifat"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v6_lang_q24", "variant": 6, "subject": "lang", "text": "qiynalmaslik", "options": ["1-ravish, 2-sifat, 3- sifat", "1-fel, 2-fel, 3-fel", "1-ravish, 2-fel, 3-sifat", "1-sifat, 2-fel, 3-sifat"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q25", "variant": 6, "subject": "lang", "text": "Uslubiy betaraf so’zlarni toping", "options": ["tuxum, bola, tog’", "obbo, jiyda, mazza", "jadal, fidokorona, shodiyona", "tarranum, mujgon, his etmoq"], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q26", "variant": 6, "subject": "lang", "text": "kompyuterlashtirmoq so’zi nechta havo zarbi bilan aytiladi?", "options": ["6", "7", "5", "8"], "correctAnswer": 1, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v6_lang_q27", "variant": 6, "subject": "lang", "text": "Imloviy xatolik kuzatilgan so’zlar qatorini aniqlang.", "options": ["tatabu, taajub", "ta`naomuz, taassub", "talafot, tanovar", "tadqiqot, tatbiq"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v6_lang_q28", "variant": 6, "subject": "lang", "text": "O’zbek tilining gramatik terminlarininng qisacha izohli lug’ati qaysi tilshunos olimlar nomi bilan bog’liq?", "options": ["A. Hojiyev,L. Reshatov", "B. Ibrohimov, M. Rahmonov", "S. Ibrohimov, E. Begmatov", "R. Qo’ng’arov, Sh. Rahmatullayev"], "correctAnswer": 3, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v6_lang_q29", "variant": 6, "subject": "lang", "text": "Bosh so’zi bilan bog’liq Navoiy asarlari lug’atidan keltirilgan qaysi birlik esidan chiqarmoq, yodidan chiqmoq ma`nosini beradi?", "options": ["bosh chiqarmoq", "boshdin quymoq", "boshidin quymoq", "bosh o’ynamoq"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v6_lang_q30", "variant": 6, "subject": "lang", "text": "Qaysi gapda ham yetakchi, ham ko’makchi felning asos va qo’shimchalarida shakldoshlik kuzatilgan?", "options": ["Kechga yaqin shaharga borib keldik", "Hirotdan olib kelingan kitoblarni birma-bir ko’zdan kechirgach, o’g’liga kutbxona eshigini ochishni buyurdi", "Men ularga qoyil qolmasligimga sabab—ular allakimlarga suyanib qolgandek edi", "Yo’l shu ketishda torayib borsa, otlar bilan yurib bo’lmaydi"], "correctAnswer": 1, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q1", "variant": 7, "subject": "lang", "text": "Qaysi qatordagi gap tarkibida imloviy xatolik kuzatiladi?", "options": ["Ko’chatlar qurib qolmasin uchun ularni hovli etagiga vaqtincha o’tqazdik", "O’sha yigitchaga chol bir paytlar shunday degan ekan: “Menga o’g’il tutun”", "U sutga oqlik solib qo’ymaganini esladi va yugirib oshxonaga kirib ketdi", "Ovqat quyilib ketgan ketgan ko’rinadi, tezroq olovni pasaytirish kerak"], "correctAnswer": 3, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q2", "variant": 7, "subject": "lang", "text": "Qaysi so’zga qo’shimcha qo’shilganda ham omonimligini saqlaysdi?", "options": ["is", "o’ta", "qazi", "tom"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v7_lang_q3", "variant": 7, "subject": "lang", "text": "Qaysi javobda yasama so’zga tobelangan urg’u ko’cishi bilan turkumida o’zgarish bo’ladigan birlik berilgan?", "options": ["kaftdekkina bog’cha", "sehrli qo’llar", "purma`no so’zlar", "yangi tomorqa"], "correctAnswer": 3, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q4", "variant": 7, "subject": "lang", "text": "Qaysi javobda bir so’zning turli ma`nolarini ifodolovchi so’z qo’llangan?", "options": ["oq yo’l—oq farzand", "jo’shqin daryo—jo’shqin fikr", "bo’sh g’oya—bo’sh chelak", "ishning oqibati—oralaridagi oqibat"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q5", "variant": 7, "subject": "lang", "text": "Yopiq bo’g’inda qatnashgan, omonimlik xususiyatiga ega til oldi, sirg’aluvchi, jarangli undoshlar soni nechta? Shundan beri inson tinmayin, Shu yer uzra ter to’kar hamon. Yerni go’zal qilgani sayin Go’zal bo’lar o’zi ham.", "options": ["9 ta", "bunday undosh yo’q", "10 ta", "1 ta"], "correctAnswer": 0, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q6", "variant": 7, "subject": "lang", "text": "Mazkur so’zlardan nechtasida qo’shimcha qo’shilsa ommonimlik saqlanib qoladi? Bod, og’iz, oyoq, o’tamoq, bo’sh, qazi, tom, oqibat", "options": ["5", "4", "6", "3"], "correctAnswer": 2, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v7_lang_q7", "variant": 7, "subject": "lang", "text": "Ukasi epchillik bilan to’plangan axlat uyumini yeg’ishtirib chelakka soldi Nechta so’z yasovchi ishtirok etgan va yasalish asoslarini aniqlang.", "options": ["3 ta: ot, sifat", "4 ta: sifat, fel, ot", "3 ta : ot, fel", "4 ta: ot, fel"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q8", "variant": 7, "subject": "lang", "text": "Ichki cho’ntagidagi zaharni olib, titroq qo’llari bilan Fonetik hodisalar soni nechta? oshga soldi.", "options": ["2", "4", "", ""], "correctAnswer": 1, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v7_lang_q9", "variant": 7, "subject": "lang", "text": "Meni ko’rganda uning zahri ancha tarqaladi.", "options": ["1, 3", "1, 2, 3", "3", "1, 2"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v7_lang_q10", "variant": 7, "subject": "lang", "text": "Qarorim yo’q, turay desam, Madorim yo’q, yuray desam, Uyim yo’qdir, boray desam, Vatanim yo’q, kiray desam, Yorim yo’qdir, ko’ray desam, Qo’zim yo’qdir. Erkalay desam, Ajal yetmas, o’lay desam, Cho’pon boshim sarson bo’ldi. Munosabat shakllari soni nechta?", "options": ["30", "31", "32", "33"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v7_lang_q11", "variant": 7, "subject": "lang", "text": "Bir tovuqqa ham don kerak, ham suv suv kerak. Ma`no ko’chish turini aniqlang.", "options": ["metofora", "metonimiya", "sinekdoha", "ma`no ko’chishi yo’q"], "correctAnswer": 2, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v7_lang_q12", "variant": 7, "subject": "lang", "text": "Ishlar qalay, brachika. Parchada qo’llangan olmoshning shakldoshligi qaysi so’z turkum(lar)ida bo’ladi?", "options": ["ot va fel", "shakldoshi yo’q", "sifat, ot", "faqat ot"], "correctAnswer": 2, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q13", "variant": 7, "subject": "lang", "text": "Mashal 6. mashum 7. masul", "options": ["1, 2, 3, 4, 5, 6, 7", "2, 4, 5, 6, 7", "3, 5, 6, 7", "3, 4, 5, 6, 7"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q14", "variant": 7, "subject": "lang", "text": "Qaysi javobdagi shakl munosabat shakli emas?", "options": ["son, qarashlilik", "bog’lama", "zamon", "mayl"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v7_lang_q15", "variant": 7, "subject": "lang", "text": "Ikkita ma`noli qismdan iborat yasama so’zni toping. 39", "options": ["tilanchi", "zo’riqish", "ivirsiq", "o’ziga"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q16", "variant": 7, "subject": "lang", "text": "Tilimizda jarangli juftiga ega jarangsiz til undoshlaridan nechtasi sirg’aluvchi?", "options": ["3", "1", "2", "4"], "correctAnswer": 2, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q17", "variant": 7, "subject": "lang", "text": "Yasama so’zlar miqdori nisbatan ko’p bo’lgan gap berilgan javobni aniqlang.", "options": ["Shuni mamnuniyat bilan elon qilamizki, tarraqiyot yo’lida amalga oshirgan ishlarimiz zoya ketgani yo’q", "Bugundan kechikkanim uchun ortig’I bilan to’lab beraman, faqat guruhdan meni olib tashlamasligingizni iltimos qilaman", "Uy to’riga yotqizilgan gilamlar uzra shippak kiygan ozg’in xonimcha noz bilan yurib borardi", "Bu shohona dasturxon atrofida tizilgan kishilardan ayrimlari izdoshlar, ba`zilari hamkasblar edi"], "correctAnswer": 0, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q18", "variant": 7, "subject": "lang", "text": "Qo’shib yoziladigan so’zlar qatorini toping.", "options": ["xom/semiz, shu/yerga", "g’ayrat/qilmoq, otash/qalb", "oq/podsho, yetim/masjid", "jiqqa/ho’l, kino/yulduz 27. Qaysi javobda urg’usi oxirgi bo’g’inga tushadigan so’zlar berilgan?"], "correctAnswer": 2, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v7_lang_q19", "variant": 7, "subject": "lang", "text": "Qaysi gapda so’z qo’llash bilan bog’liq xatolik bor?", "options": ["Do’stlarim orasida asili ham shu yigit bo’ladi", "Asl basharangni boshqalar ham ko’rib qo’ysin", "Bizda faqat asil molar bilan savdo qilinadi", "Asl maqsading shu ekanda, seni ,yolmog’iz"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q20", "variant": 7, "subject": "lang", "text": "Qaysi gapda faqat yasama so’zlar qo’llangan?", "options": ["O’kinchlaringdan, ovunchlaringdan, sog’inchlaringdan bezorman", "Sevimli qo’shiqchimiz hamma-hammamizga sog’inchli solom yo’llabdi", "Bulturgi xatoliklardan xulosa chiqarib, kamchiliklarni bartaraf etishga va`da beramiz", "Qiliqlaring o’xshovsiz, kiyimlaring yarashmagan, gapirganingda duduqlanasan"], "correctAnswer": 2, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q21", "variant": 7, "subject": "lang", "text": "Quyidagi gapda nechta yopiq bo’g’in mavjud? Quyidagi gapda yopiq bo’g’inlari soni nechta?", "options": ["6", "5", "4", "7 21. Unlilar imlosida xatolikka yo’l qo’yilgan so’zlari toping."], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q22", "variant": 7, "subject": "lang", "text": "ta`qiqlash 2. Avf 3. Muomila 4. Burushuq 5. talofat", "options": ["3, 4, 5", "1, 2, 3, 4, 5", "3, 5", "4, 5"], "correctAnswer": 2, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v7_lang_q23", "variant": 7, "subject": "lang", "text": "Qaysi javobda ham imloviy ham paronimlarni qo’llash bilan bog’liq xato bor?", "options": ["Yoshini ikki yilga kichraytirgan-u, urishka jo’nab yuborgan", "Asl yigit shunday bo’larkan", "Oy tiniq, oydin-da oydin oq yuzaing", "Sherimni o’qib bergandim, xushidan ketib qoldi"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v7_lang_q24", "variant": 7, "subject": "lang", "text": "Yugurgilagancha so’zinechta havo zarbi bilan aytiladi?", "options": ["5", "4", "7", "6"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v7_lang_q25", "variant": 7, "subject": "lang", "text": "Otliq 5. barmog’i 6. Tirnog’i 7. keragicha", "options": ["3, 4, 5, 6", "1, 2 til", "1, 2, 6", "1, 2, 5, 6, 7"], "correctAnswer": 1, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v7_lang_q26", "variant": 7, "subject": "lang", "text": "Qaysi so’zdagi undoshlar barchasi jarangsiz undoshlari hisoblanadi?", "options": ["safsata", "shohista", "iqtisod", "qoshiqcha"], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q27", "variant": 7, "subject": "lang", "text": "Faqat shakldosh qo’shimchalar ishtirok etgan qatorni belgilang.", "options": ["–gich, -kash, -iy(-viy), -la", "–don, -dor, -an, -ni", "–i, a, -simon, -ik", "–iq, -kor, -moq, -sa"], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v7_lang_q28", "variant": 7, "subject": "lang", "text": "Qaysi gapda fonetik hodisa uchramaydi?", "options": ["Ikkalasi ham bukchayib, yerga tikkilib qoldi", "Ular oqsoqlanib soyga tomon tushib borardilar", "Orqada kelayotgan yo’lovchi silliq toshgan tiyg’anib yeqilishiga oz qoldi", "Uning yuzi avvalgidekhech narsani ifoda qilmasa- da ko’zlarida yaralangan bug’uniki singari chuqur qayg’u ifodasi aks etdi"], "correctAnswer": 3, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v7_lang_q29", "variant": 7, "subject": "lang", "text": "Qaysi qatarda so’zlar shaklan tenglik hosil qilmagan", "options": ["ipni toblamoq--shashlikni toblamoq", "quyuq ovqat—quyuq salom", "ro’za tutmoq—parda tutmoq", "bo’sh arqon—bo’sh tiynat"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v7_lang_q30", "variant": 7, "subject": "lang", "text": "Ssenariy, suiste`mol, sujet, suflor, subekt, sunbul so’zlaridan nechtasi xato yozilgan?", "options": ["barchasi to’g’ri", "1 tasi", "3 tasi", "2 tasi"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v8_lang_q1", "variant": 8, "subject": "lang", "text": "Bir qarasam, har shevangda ming jilolar Har novdangda , har mevangda ming jilolar Ikkita jarangli til undoshi qatnashgan bo’g’inlar soni nechta?", "options": ["13", "5", "9", "3"], "correctAnswer": 2, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q2", "variant": 8, "subject": "lang", "text": "Qizilda to’xtaysan, yashilda yurasan. Ma`no ko’chish turini aniqlang.", "options": ["metofora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v8_lang_q3", "variant": 8, "subject": "lang", "text": "Qo’shib yoziladigan so’zlarni toping", "options": ["xom//semiz, shu//yerga", "g’ayrat//qilmoq, otash//qalb", "oq//podsho, yetim//masjid", "jiqqa//ho’l, kino//yulduz 41"], "correctAnswer": 1, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v8_lang_q4", "variant": 8, "subject": "lang", "text": "Shakldoshi, ma`nodoshi, ziddoshi ammo paronimi yo’q so’zni belgilang.", "options": ["qari", "yuvindi", "yuvundi", "qalin 17. Asos va qo’shimcha o’rtasida shakldoshlik qaysi so’zlarda kuzatiladi? 1. manmanlik 2. Ishlatishdi 3. Ildirilgan 4. Sizsiz"], "correctAnswer": 3, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v8_lang_q5", "variant": 8, "subject": "lang", "text": "Qaysi gapda yasama so’z qatnashgan?", "options": ["Kim ota onasini hurmat qilmasa, farzandlaridan ham shuni kutsin", "Kimki birovni xatolarini ko’rib tuzatmasa, unga do’st emas ekan", "Tunga yaqin shaharga yetib keldik", "Kitob bilan o’sgan bola hamda kitobdan uzoq yurgan bolaning o’rtasida farqni sezish qiyin emas"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v8_lang_q6", "variant": 8, "subject": "lang", "text": "oqizmoq", "options": ["1, 2, 3, 4, 5", "2, 3, 5", "1, 4", "2, 3, 4,"], "correctAnswer": 0, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q7", "variant": 8, "subject": "lang", "text": "Ey dil, seni nima qilay Nima qilsam, og’rimaysan Ey dil, seni nima qilay Nima qilsam yig’lamaysan? Berilgan parchada tovush o’zgarish turlarinining necha turi ishtirok etgan?", "options": ["1", "2", "3", "eshshak"], "correctAnswer": 1, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q8", "variant": 8, "subject": "lang", "text": "Qaysi so’zning ochiq bo’g’inida lab ishtirokiga ko’ra a unlisi bilan bir gurihga kiruvchi undosh qatnashgan?", "options": ["peshayvon", "mukarram", "mo’jaz", "chirmovuq"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q9", "variant": 8, "subject": "lang", "text": "Qaysi bandda o’zoro ommonim so’zlar berilmagan", "options": ["uch boho, qalamning uchi", "chaqmoq chaqdi, yong’oq chaqmoq", "bo’yi uzun, muattar bo’y taratmoq", "boringni chiqar, menda pul bor 21. Qaysi so’zlar o’z paronimlari bilan bir turkumga mansub?"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v8_lang_q10", "variant": 8, "subject": "lang", "text": "Yasama sifatlar qatorini toping.", "options": ["giyohlarni, bog‘bon, ajratildi", "adolatli, kulrang, mevazor", "dorishunos, mehnatkash, ziyoli", "ibratli, ko'ngilchan, mevali"], "correctAnswer": 1, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v8_lang_q11", "variant": 8, "subject": "lang", "text": "shoh 2. Yuvundi 3. Urush 4. Yoqilg’I 5. xush", "options": ["1, 3, 4, 5", "2, 4", "1, 4", "1, 4, 5"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v8_lang_q12", "variant": 8, "subject": "lang", "text": "Paronimiga ega, fonetik yozuvda yoziluvchi yasama so’zni toping.", "options": ["qishlog’i", "yoqilg’i", "burishgan", "zoriqqan"], "correctAnswer": 3, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v8_lang_q13", "variant": 8, "subject": "lang", "text": "Qaysi gapda ham imloviy ham paronimlar qo’llash bilan bog’liq xatolik bor?", "options": ["Yoshini ikki yilga qisqartirgan-u urishka jo’nagan", "Yakshanba kuni chaqirdiyu, o’zi kelmadi", "Adl teraklar ko’chamizda ko’p", "Yuvindini axlatga to’kip keldi"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q14", "variant": 8, "subject": "lang", "text": "Qaysi qatorda so’z yasovchi va lug’aviy shakl yasovchi o’rtasida shakldoshlik kuzatiladi?", "options": ["qoraydi—o’qiy boshladi", "bilim--ilmim", "kelsa--suvsa", "suvsiz--borasiz"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v8_lang_q15", "variant": 8, "subject": "lang", "text": "Tomog’i-ku yengil, kiyimi og’irroq, --kiyimini opasining yelkasiga qo’ymabsizda Ma`no ko’chish turini aniqlang.", "options": ["metofora, sinekdoha", "metonimiya, sinekdoha", "metofora, metonimiya", "metofora"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v8_lang_q16", "variant": 8, "subject": "lang", "text": "Dastlabgi bo’shatib berilgan shunga o’xshash bir necha yukxonalar hali to’la foydalanilgani yo’q. Yasama so’zlar sonini toping.", "options": ["7", "6", "5", "4 3. Juftlashish natijasida yangi ma`noga ega bo’lgan (a) va umumlashtirish ma`nosini ifodalaydigan (b) so’zlarni belgilang."], "correctAnswer": 3, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v8_lang_q17", "variant": 8, "subject": "lang", "text": "yod 2. Yondosh 3. Bud 4. G’oz", "options": ["1, 2, 3", "2", "1, 2, 4", "1, 3"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v8_lang_q18", "variant": 8, "subject": "lang", "text": "Oyog’imiz qirq ikki, egnimiz qirq sakkiz. Ma`no ko’chish turini aniqlang.", "options": ["metofora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 3, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v8_lang_q19", "variant": 8, "subject": "lang", "text": "Qaysi javobda birgina tovushdan iborat ko’makchi marfemasi fonetik hodisaga uchragan so’zlar soni birdan ortiq?", "options": ["Og’iz va tilning bezagi to’g’ri so’zdir, to’g’ri so’zla tilingni beza", "Suvning sofligi unga bezak bergani kabi, insonning nomusi ham unga qadr keltiradi", "Nafasi sovuqning tilagi sovuq", "G’amlab qo’yilgan o’tinlarning qurug’i oxirlab qolgandi, baxtimizga qishning ham sanoqli kunlar qolgan edi"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q20", "variant": 8, "subject": "lang", "text": "Urg’u ma`no farqlash fazifasini bajaradigan qaysi so’zning asosi shakldoshlik xususiyatiga ega?", "options": ["suzdi", "yasama", "qushcha", "sozlar"], "correctAnswer": 1, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v8_lang_q21", "variant": 8, "subject": "lang", "text": "Bu dunyoda oy tanho, quyosh tanho, Shu go’zal qizlar ichida shu egma qosh tanho Ma`no ko’chish turini aniqlang.", "options": ["metofora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 1, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v8_lang_q22", "variant": 8, "subject": "lang", "text": "Yuragingga kirgandim, chiqolmay qolib ketdim Bu dunyoning dardida o’tinday yonib ketdim She`riy parchada jarangsiz juftiga ega bo’lmagan undosh bilan boshlanuvchi ochiq bo’g’in soni nechta?", "options": ["1", "2", "3", "4"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v8_lang_q23", "variant": 8, "subject": "lang", "text": "U qo’shiq qo’yishga qo’yib, uni behurmat qilganligini bilib ham qiq etmasdi Fonetik hodisalar soni nechta ?", "options": ["2", "4", "3", "5 43"], "correctAnswer": 1, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q24", "variant": 8, "subject": "lang", "text": "Qaysi gapda asosidagi bitta undoshni ikkilantirsa yangi ma`no hosil qiladigan yasama so’z qo’llangan?", "options": ["Oqibatli do’st oqibatsiz qarindoshdan yaxshi", "Nilufar charchagan, butun vujudi changga belangan edi", "Uning barcha tilaklari ijobat bo’libdi va murod maqsadiga yetibdi", "Akalaridan qo’rqib dilidagini aytishga qo’rqayotgan deb o’ylagan edi, shekilli"], "correctAnswer": 2, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q25", "variant": 8, "subject": "lang", "text": "Qaysi gapda asosida fonetik hodisaga uchragan so’zlar soni nisbatan ko’proq?", "options": ["Shu payt darvoza ochilib tarvuzi qo’ltig’idan tushib o’sha kirib keldi", "Ikkalasi ham og’zini ochmay, qovog’ini solib jim o’tirdi", "Jo’jalarning sanog’ini bilmadi shekilli, indamay qo’ydi", "Uning tarog’i sinib qolgan edi"], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q26", "variant": 8, "subject": "lang", "text": "Qaysi gapdagi qaatqich kelishgi shaklini qarashlilik shakli bilan almashtirish mumkin?", "options": ["O'zbekiston-Vataninim manim", "Bu vatan manimdur", "Bu gullar sega", "Yuraging emas, buyuragingning rizqi bu"], "correctAnswer": 1, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q27", "variant": 8, "subject": "lang", "text": "Qaysi gapda o'z shakldoshiga ega bo'lgan so'z qaralmish vazifasida qo'llanmagan?", "options": ["Urushning urushdan farqi bor", "Yurtimizning o'g'il qizlarining dunyo yoshlari o'rtasida o'tkaziladigantatbirlarda ishtirok etishi odatiy holga aylanmoqda", "O'zimning ishim boshimdan oshib yotibdi", "Notovon qulingizni boshidan mundoq savdolar ham o'tgan"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q28", "variant": 8, "subject": "lang", "text": "So'zlarni turkumlarga ajratishda nima asosiy tayanch nuqta bo'lib hizmat qiladi?", "options": ["umumiy gramatik ma`no", "umumiy atash ma`no", "umumiy gramatik shakl", "so'roq"], "correctAnswer": 0, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q29", "variant": 8, "subject": "lang", "text": "Qaysi gapda ot turkumiga mansub so'zlarning undalma va ega bo'lishiga misol berilgan?", "options": ["To'xtanglar, bolalar, quyon sal nafasini rastlasin", "Kitob, sen mening doimiy do'stimsan", "O'g'lim, senga do'q urish kerakmi", "O'g'lim, qo'zichog'im, orom olyapti 22. Qaysi gaplarda otlar tarkibidagi egalik va kelishik qo'shimchalari shakldoshlik hosil qilgan?"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v8_lang_q30", "variant": 8, "subject": "lang", "text": "Atoqli otlar qanday gap bo'lagi vazifasida kelgan?", "options": ["ega", "to'ldiruvchi", "hol", "aniqlovchi va hol 11. Qaysi kelishik qo'shimchasi shaxs, narsa va o'rin-joy otlariga qo'shilganda ular gapda to'ldiruvchi vazifasida keladi?"], "correctAnswer": 1, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q1", "variant": 9, "subject": "lang", "text": "Yaxshi so'z bilan ilon inidan chiqar. Ushbu gapdagi qo'shimchalar haqidagi to'g'ri ma’lumotlarni aniqlang. 1 ) ismning munosabat shakli 2 o'rinda qatnashgan; 2) fe’l nisbati shaklini hosil qiluvchi qo'shimcha 1 o'rinda qatnashgan; 3) belgisiz tushum kelishigi 1 o'rinda qatnashgan; 4) fe’lning munosabat shakli 1 o'rinda qatnashgan", "options": ["1, 2", "3, 4", "2, 3", "1 ,4"], "correctAnswer": 1, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v9_lang_q2", "variant": 9, "subject": "lang", "text": "tobe so'z chiqish kelishigida bo'lganda qiyos manosi anglashiladi", "options": ["barchasi to'g'ri", "3, 4", "2, 3, 5", "1 3. Ismlar berilgan qatorni belgilang. 1. yozish, barcha, gulzor 2.kech, ravish, so'zladi"], "correctAnswer": 1, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q3", "variant": 9, "subject": "lang", "text": "yozish, barcha, gulzor 2.kech, ravish, so'zladi", "options": ["2", "1", "3", "bunday so'z yo'q"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q4", "variant": 9, "subject": "lang", "text": "o'qigan, a`lochi, ertalab", "options": ["1, 2 3", "1, 2", "2, 3", "1"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v9_lang_q5", "variant": 9, "subject": "lang", "text": "Mahallada duv-duv gap tarqaldi. Mahalla orqali", "options": ["Borganimni singlisi bilmasin duv-duv gap tarqatdi", "O'qiganimiz, o'rganganimiz o'zimizga foyda", "", ""], "correctAnswer": 0, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q6", "variant": 9, "subject": "lang", "text": "Ashulalarida Vatanni madh etdi. Ashullari orqali Vatan madhini baralla kuyladi", "options": ["1, 2, 3", "2, 3", "faqat 2", "xatolik yo'q"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v9_lang_q7", "variant": 9, "subject": "lang", "text": "Ogohiy, xiyonatkor sultonlarning qochishi Boysung'ur Mirzo lashkarining soniga unchalik tasir qilmagan bo'lsa-da ruxiga jiddiy zarar yetkazgani shak-shubxasiz edi Ushbu gapda bosh kelishik shaklidagi nechta so'z bor?", "options": ["2", "1", "yo'q", "4 15. Kelishik qo'shimchasi asos qismiga mustahkam birikib, hozirgi kunda ajralmas bo'lib qolgan ravishlarni belgilang. 1. tubdan 2. To'satdan 3. Rostdan 4. Birdan"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v9_lang_q8", "variant": 9, "subject": "lang", "text": "Qaysi gapda so'z yasovchi –siz qo'shimchasi ot bo'lmaagan so'zga qo'shilgan?.", "options": ["Qorako'z kampirning ovozi kelayotgan bolxona tomonga yuzini burgancha jonsiz yotardi", "Siz bizga keraksiz", "Kiprigimday azizlarim, nechog'lik ham suyuksiz. Armonimday buyuksiz", "Tengsiz tonglar falsafasin tashna yutgan ko'zlarim"], "correctAnswer": 3, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q9", "variant": 9, "subject": "lang", "text": "Ko'makchilar oldidan kelgan ismlar qanday kelishk shakllarida bo'lmaydi?", "options": ["bosh va qaratqich", "tushum va jo'nalish", "chiqish va qaratqich", "o'rin payt va tushum"], "correctAnswer": 1, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v9_lang_q10", "variant": 9, "subject": "lang", "text": "Qaysi gapda qaratqich qo'llanmagan", "options": ["Gapingizga tushuna olmayapman", "O'zbekiston-Vatanim manim", "Odam olasi ichida bo'ladi", "Keting bu yerdan, shayton malaylari"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q11", "variant": 9, "subject": "lang", "text": "Shuni unitmangki, vatanning istiqboli sizning qo'lingizda. Ushbu gapda nechta ot turlangan?", "options": ["3", "6", "5", "2"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q12", "variant": 9, "subject": "lang", "text": "Mingga kirmasak ham, Kirardik yuzga, Dunyoda bo'lmasa dilozorlik. Nechta so'z bosh kelishik shaklida kelgan?", "options": ["1", "2", "3", "bunday so'z yo'q"], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q13", "variant": 9, "subject": "lang", "text": "Oy yorug'ida kitob o'qirdi. Gap haqidagi noto'g'ri mulohazani aniqlang.", "options": ["tushum kelishigi belgisiz qo'llangan", "qaratqich qo'shimchasi belgisiz qo'llangan", "fonetik yozuv qoidasi asosida yozilgan so'z bor", "bir undosh qo'shimcha qo'shilish natijasida boshqasiga aylangan"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q14", "variant": 9, "subject": "lang", "text": "Hayotiy tajribalar va olimlarning xulosalari shundan dalolat bermoqdaki, odomzod dunyoga kelib neki topgan bo'lsa, hayo va ibo tufayli, neki yo'qotgan bo'lsa, hayosizlik va ibosizlik tufaylidir Berilgan gapda nechta ot turkumiga mansub so'z qtnashgan?", "options": ["9", "8", "10", "7"], "correctAnswer": 1, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q15", "variant": 9, "subject": "lang", "text": "Qaysi qatordagi ot munosabat shaklini olgan?", "options": ["qizgina", "bolacha", "foyton", "akam"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v9_lang_q16", "variant": 9, "subject": "lang", "text": "Qaysi gapda bosh kelishikdagi ot bilan ifodalanmagan undalma mavjud emas?", "options": ["Qo'shni, yordam kerak emasmi?", "Men ukangni chaqirgandim, o'g'lim, ukangni.", "Senimi, shoshmay tur, bir adabingni bermasammi?", "Gulim, go'zalim, asalim, sizga bir narsa bo'lsa, meni o'ldi deyavering."], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q17", "variant": 9, "subject": "lang", "text": "Shaxsni boshqacha nom bilan atash qaysi gapda qo'llangan?", "options": ["Kamina usta qodirni ham ogoh etdik", "Yaxshining yaxshiligi tegar har joyda, yomonning yomonligi tegar tor joyda", "Bizning eshon-kabobpazlarning piri", "Biz boy otangizga Yormatning qizini olib bermoqchi edik 25. Qaysi kelishik shaklidagi so'z doim bir xil vazifada keladi? 1.bosh kelishik 2. Tushum kelishigi 3. Chiqish kelishigi 4. Qaratqich kelishigi"], "correctAnswer": 2, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q18", "variant": 9, "subject": "lang", "text": "Qaysi kelishik qo’shimchasi(qisqarmaganda) lug’aviy shakl yasovchi bilan shakldoshlik hosil qiladi?", "options": ["jo’nalish", "bunday shakl yo’q", "qaratqich", "tushum"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q19", "variant": 9, "subject": "lang", "text": "U o’z qalbida kechayotgan tuyg’ularning nomini bilmas, shu daqiqadagi holatni o’rtoqlariga ham izohlab berolmas edi. Mavhum otlar tarkibida jarangsiz juftiga ega bo’lmagan til undoshlari soni qaysi qatorda berilgan?", "options": ["9", "10", "11", "8"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q20", "variant": 9, "subject": "lang", "text": "Muyilish so’zining turkumini aniqlang", "options": ["sifat", "ot", "fel", "ravish"], "correctAnswer": 1, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q21", "variant": 9, "subject": "lang", "text": "Ajoyib milliy urf-odatlarimiz odamlarni hamjihatlikka, birodarlikka va samimiyatga chorlaydi. Mavhum otlar soni nechta?", "options": ["3", "4", "5", "6"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q22", "variant": 9, "subject": "lang", "text": "Kampirning katalakday hovlisi misoli tandir: quyosh lovullab qizdiradi-yu, atrof uylar bilan o’ralgani uchun qilt etgan shabada yurmaydi. Mustaqil lug’aviy ma`noga ega bo’lmagan so’zlar soni nechta?", "options": ["2", "4", "5", "3"], "correctAnswer": 2, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v9_lang_q23", "variant": 9, "subject": "lang", "text": "Kampirning katalakday hovlisi misoli tandir: quyosh lovullab qizdiradi-yu, atrof uylar bilan o’ralgani uchun qilt etgan shabada yurmaydi. Mavhum otlar soni nechta?", "options": ["yo’q", "1", "2", "3"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q24", "variant": 9, "subject": "lang", "text": "Tuproq to’shagida yotgan ko’p ko’rdim, Yer qaro bag’riga botgan ko’p ko’rdim, Yo’qlik olamiga ko’z tashlaganda Kelmagan ko’p ko’rdim, ketgan ko’p ko’rdim She`rda tushum kelishigi belgisiz qo’llangan?", "options": ["3", "4", "2", "5"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v9_lang_q25", "variant": 9, "subject": "lang", "text": "Hali sevishmoqdan shumidi ma`no Faqat azob border qismatda, nahot? Nohotki, sevgiga shudir tamonno? Nahot, go’zal uchun faqat, faqat dod!.. Mustaqil so’z turkumlariga oid bo’lmagan birliklar soni qaysi variantda to’g’ri ko’rsatilgan?", "options": ["10", "13", "11", "9"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v9_lang_q26", "variant": 9, "subject": "lang", "text": "Saidiy o’zining ish bo’lmasiga kirib, deraza yonidagi kresloga o’tirdi-da, stol ustidagi kitobni oldi Belgili qo’llangan kelishiklar soni?", "options": ["3", "4", "7", "6"], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q27", "variant": 9, "subject": "lang", "text": "–ni va –da 2. –ga va –da 3. –ga va –dan 4. –ni va ning", "options": ["1, 3, 4", "barchasida kuzatiladi", "2, 4", "4"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v9_lang_q28", "variant": 9, "subject": "lang", "text": "Qaratqich qaysi shaxsdagi olmosh bilan ifodalanganda qaralmish belgisiz qo’llanishi mumkin?", "options": ["I shaxs birlik", "II shaxs ko’plik", "belgisiz qo’llanmaydi", "I shaxs ko’plik"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v9_lang_q29", "variant": 9, "subject": "lang", "text": "Ayb dengiz chuqurligida emas ko’ngil qashshoqligidadir Nechta turlangan ism bor?", "options": ["5", "4", "2", "6"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v9_lang_q30", "variant": 9, "subject": "lang", "text": "Ey oy, agar samoda porloq nursen, Yorim yuzicha ravshan emas, benursen Ey nargis, agarchi toza-yu maxmursen Yorim ko’zicha xumor emas, ma`zursen Ismlarning munosabat shakllari nechta o’rinda qo’llangan?", "options": ["7", "8", "9", "10 22. Morfologiya bo’limiga tegishli bo’lgan atamalar berilgan javobni toping. 1. kirish so’z 2. Barqaror birikmalar 3. Sifatdoshli qurilma 4. urg’u 5. Ismlar"], "correctAnswer": 1, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q1", "variant": 10, "subject": "lang", "text": "Sifatdoshli qurilma 4. urg’u 5. Ismlar", "options": ["Ishni nazorat qilmaslik—ishchilarga hamyonni ochib", "", "", ""], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q2", "variant": 10, "subject": "lang", "text": "Otli birikma", "options": ["1, 3, 5, 6", "3, 5, 6", "5", "5, 6"], "correctAnswer": 0, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q3", "variant": 10, "subject": "lang", "text": "Sen o’z xilqingni tuzgil, bo’lma el axloqidin xursand Kishiga chun kishi farzandi hargiz bo’lmadi farzand Kelishik qo’shimchalari haqida to’g’ri javobni belgilang.", "options": ["2 ta belgili, 3 ta belgisiz", "3 ta belgili, 2 ta belgisiz", "3 ta belgili, 3 ta belgisiz", "4 ta belgili, 2 ta belgisiz"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q4", "variant": 10, "subject": "lang", "text": "Men ketgan so’ng uydan chiqib o’tirma, Do’st yig’latib, dushmanimni kuldirma Parchada ham belgili ham belgisiz qo’llangan kelishik qo’shimcha qaysi?", "options": ["chiqish kelishigi", "tushum va qaratqich kelishigi", "jo’nalish kelishigi", "tushum va chiqish kelishigi"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q5", "variant": 10, "subject": "lang", "text": "Qaysi gapda so’z qo’llash bilan bog’liq xatolik bor?", "options": ["Do’stlarim orasida asili ham shu yigit bo’ladi", "Asl basharangni boshqalar ham ko’rib qo’ysin", "Bizda faqat asil molar bilan savdo qilinadi", "Asl maqsading shu ekanda, seni ,yolmog’iz"], "correctAnswer": 0, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q6", "variant": 10, "subject": "lang", "text": "Olaverasizmi so’zi nechta ma’noli qismga C)Endi hiyla-nayranglaring menga o’tmaydi ajraladi? D)Bolalarning shirinlikka ruju qo’yishi turli", "options": ["4", "5", "6", "3 kasalliklarni chaqirishi mumkin"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v10_lang_q7", "variant": 10, "subject": "lang", "text": "Qaysi qatorda paronimlarni qo’llash bilan bog’liq uslubiy xatolik bor?", "options": ["Yo'q yo'q men boshqa narsa demoqchi edim.", "Agar hamma o’zini tirikchilikka qurbin qilaversa, buyuk kashfiyotlarni kim qiladi?", "Mening mantiqli gaplarimni oliftagarchilikka yo’ymagin", "Kechiktirilgan o’yin bugun o’tkazildi"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v10_lang_q8", "variant": 10, "subject": "lang", "text": "Yasovchi asosi uch morfemadan iborat so’zni belgilang.", "options": ["uyqusizlikdan", "bosqinchilik", "bezakdor", "yog’ingarchilik"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q9", "variant": 10, "subject": "lang", "text": "Qaysi qatorda paronim so’zlarni yanglish qo’llash bilan bilan bog’liq xatolik mavjud?", "options": ["Bizni xoli qoldiring", "Qo’lga tushdim, bandi bo’ldim", "Palovning kiftini keltirib yuboribsiz lekin", "Umumiy qimmati 1000 dolarga teng ekan"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v10_lang_q10", "variant": 10, "subject": "lang", "text": "Noto’g’ri yozilgan so’zni aniqlang.", "options": ["Yangi yil", "qorbobo", "qorbo’ron", "qoryog’di 27. Oshiqlaring qasdlashgan-o, Sira chidab bo’lmaydi. Sevaman deb aytmasang, O’ksik dilim to’lmaydi. Ushbu misralardagi soda yasama so’zlarning asoslari tarkibida qanday til undoshlari mavjud? 1. til orqa 2. Chuqur til orqa 3. Til oldi"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v10_lang_q11", "variant": 10, "subject": "lang", "text": "Qaysi qatordagi so’zlarning qo’shimchalari shakldosh hisoblanadi?", "options": ["kelin, yig’in, so’kin", "ekin, sog’in, kiyin", "ishla, quvla, so’zla", "yopin, yuvin, ilin"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v10_lang_q12", "variant": 10, "subject": "lang", "text": "Asosi va yasalish asosi teng kelib qolgan so’zni aniqlang.", "options": ["temirchilik", "yog’ingarchilik", "ko’plab", "tovuqlar"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v10_lang_q13", "variant": 10, "subject": "lang", "text": "Qaysi gapda poranimlar bilan bog’liq xatolik bor?", "options": ["Go’sht olsang, lahm ol", "Asilning bahosi kata, asalning shifosi", "Ta`na yo’li—to’yg’anoq", "Urish qurbonsiz bo’lmaydi"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q14", "variant": 10, "subject": "lang", "text": "So’zning morfemik tuzilishi va yasalish tuzilishi B)Bundan qat’i nazar, biz orqaga chekinmaymiz teng kelgan javobni toping C)Kecha kechqurun kimni to’nadinglar", "options": ["bag’rikenglik", "ma’naviyatli D)U o’rnidan azot tortdi-da, gap boshladi", "ustachilik", "U o’rnidan azot tortdi-da, gap boshladi C)ustachilik D)keskinlashmoq"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q15", "variant": 10, "subject": "lang", "text": "Qaysi gapda yasama so’z qatnashgan?", "options": ["Kim ota onasini hurmat qilmasa, farzandlaridan ham shuni kutsin", "Kimki birovni xatolarini ko’rib tuzatmasa, unga do’st emas ekan", "Tunga yaqin shaharga yetib keldik", "Kitob bilan o’sgan bola hamda kitobdan uzoq yurgan bolaning o’rtasida farqni sezish qiyin emas"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q16", "variant": 10, "subject": "lang", "text": "Qaysi qatorda ma`nodosh so’zlar ma`noni kuchytirishga hizmat qilgan?", "options": ["gulshanda gullarni tebratar sabo, Adashgan yo’lchiday daydib yurar yel", "Minglab gulistonga, minglab chamanga, Bahuzur ko’rk bo’lur undagi chiroy", "Yig’latdi demaki, siqtatdi meni", "Bir shirin tabbasum odamga asal bo’lib tuyular"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v10_lang_q17", "variant": 10, "subject": "lang", "text": "Ko’z va lab so’zlariga qo’shilgan –lar C)xosiyat, hosiyat D)shuba, shu’ba qo’shimchasi qanday ma’noni ifodalaydi?", "options": ["ko’plik", "hurmat 49", "", ""], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v10_lang_q18", "variant": 10, "subject": "lang", "text": "”Havolanib uchgan zarra va qumlar, tuzga yetib", "options": ["6 ta", "4 ta", "5 ta", "3 ta kelgach, seldan ham qolar”,-deydi xalqimiz. Ushbu gapda qanday qo’shimchalar mavjud? 26.Qaysi gapda asosining tarkibi fe’l yasovchi A)1 ta so’z yasovchi, 2 ta lug’aviy shakl yasovchi va qo’shimchalarga teng bo’lgan tovushlardan iborat 2 ta sintaktik shakl yasovchi so’z ishtirok etgan? B)1 ta so’z yasovchi, 8 ta lug’aviy shakl yasovchi va A)Garchi jafo emaskan, Oshiq “Kuydim”, demaskan. 3 ta sintaktik shakl yasovchi B)Taqdir mendan yuz burma, Sevganimdan ayirma C)3 ta lug’aviy shakl yasovchi va 3 ta sintaktik shakl C)Laylim, sado bergin, izlaring qayda? yasovchi D)Qalbim jo’shqinligi jo’shqin soyda bor D)4 ta lug’aviy shakl yasovchi va 2 ta sintaktik shakl yasovchi 27.Qaysi gapda fonetik jihatdan ham alohida tovush, ham alohida bo’g’in, morfemik jihatdan"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q19", "variant": 10, "subject": "lang", "text": "Ba’zilar badiiy asarlarning ta’sirchanligiga sabab esa alohida morfema sanaladigan birlik bor? sifatida ularda qiziqarli voqealarning tasvirlanganligi", "options": ["Aql pinhon hamda zohir olam u deb o’ylashadi.", "Hasadchi o’z hasadi ta’siridan bir kun o’zi halokat Ushbu matnda nechta so’z yasovchi qo’shimcha chuquriga yiqiladi mavjud?", "O’g’lim, qo’zichog’im , senga nima olib kelay? A)4 ta B)5 ta C)6 ta", "2 ta D)Mehr qolur, muhabbat qolur"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q20", "variant": 10, "subject": "lang", "text": "Qaysi qatordagi so’zlarda bitta ko’makchi morfema mavjud?", "options": ["isrofgarchilik, egrilik", "muzlatgich, loygarchilik", "simirgan, surishtirdi", "ata, o’ynoqi"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q21", "variant": 10, "subject": "lang", "text": "Vatan tuyg’usi — bu ozod xalqning munosib farzandi, mustaqil mamlakatning fidoyi fuqarosi bo’lmoqqa intilish tuyg’usidir. Qo’shimchalarni tasniflang.", "options": ["3 ta so’z yasovchi, 2 ta lug’aviy, 8 ta sintaktik shakl yasovchi", "3 ta so’z yasovchi, 2 ta lug’aviy, 6 ta sintaktik shakl yasovchi", "2 ta so’z yasovchi, 1 ta lug’aviy, 7 ta sintaktik shakl yasovchi", "2 ta so’z yasovchi, 1 ta lug’aviy shakl yasovchi"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q22", "variant": 10, "subject": "lang", "text": "To’g’ri hukmni aniqlang.", "options": ["O’z qatlamga oid so’zlar talafuzda tovush o’zgarishiga uchraydi", "o’z qatlamga oid so’zlar asosan ikki-uch bo’g’inli bo’ladi", "barcha fe`l va taqlid so’zlar o’z qatlamga mansub", "DJ tovushi bo’lgan so’zlar bizga arab tilidan o’zlashgan"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v10_lang_q23", "variant": 10, "subject": "lang", "text": "so’z yasovchi va lug’aviy shakl yasovchilar o’rtasida", "options": ["barchasida kuzatiladi", "2, 4", "faqat 5", "1, 4 26 Morfemika 2"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v10_lang_q24", "variant": 10, "subject": "lang", "text": "Qaysi qatorda birdan ortiq ma`no ko’chish kuzatiladi?", "options": ["Qatorda noring bo’lsa, yoking yerda qolmaydi", "Agar yashasang baland tog’da yasha, agar ishlasang shahri azimda ishla", "Yo’lda do’sti bilan ketayotgan g’ilay dedi—“shu ketayotgan yo’limizdan qaysibiri to’g’ri", "“cho’qintirga ota” qanchadan ketyabdi, do’konda bormi 11. Berilgan so’zlarning yasovchi asosi qaysi turkumga mansub? 1. yaqinlashmoq 2. Oqsoqlanmoq"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q25", "variant": 10, "subject": "lang", "text": "Bu quvonchli xabarni xonadoshlariga yetkazish uchun yotoqxona tomon jo'nashdi. Ushbu gapda omonimlik xususiyatiga ega ko’makchi morfema(lar) qatnashgarr nechta so'z bor?", "options": ["5ta", "8ra", "6ta", "7ta"], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q26", "variant": 10, "subject": "lang", "text": "Qaysi gap imlosida olti o'rinda fonetik o'zgarish yuz bergan", "options": ["6 ta so`zda: 2 ta tovush almashinishi, 2 ta tovush ortishi, 2 ta tovush tushishi", "7 ta so`zda: 3 ta tovush almashinishi, 2 ta tovush ortishi, 2 ta tovush tushishi", "8 ta so`zda: 2 ta tovush almashinishi, 3 ta tovush ortishi, 3 ta tovush tushishi", "8 ta so`zda: 3 ta tovush almashinishi, 3 ta tovush ortishi, 2 ta tovush tushishi"], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q27", "variant": 10, "subject": "lang", "text": "Nosfurushlar ochiqchasiga gaplashib olishdi C)Bu falokatga yo'liqqan odamning jon Ushbu gapda ko’makchi morfemalar nechta? achchig'idagi", "options": ["7 ta", "8 ta", "10 ta", "6 ta qichqirig'i edi, ammo Bill qayrilib ham qaramadi. D)Keyinroq ham ko'zimiz tushib turardi, biroq endi"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q28", "variant": 10, "subject": "lang", "text": "Qaysi gapda so’z qo’llash bilan bog’liq xatolik bor?", "options": ["Do’stlarim orasida asili ham shu yigit bo’ladi", "Asl basharangni boshqalar ham ko’rib qo’ysin", "Bizda faqat asil molar bilan savdo qilinadi", "Asl maqsading shu ekanda, seni ,yolmog’iz"], "correctAnswer": 0, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v10_lang_q29", "variant": 10, "subject": "lang", "text": "Mening shodligimsan, bolaligimsan, mo`ralaydi, kerak bo`lsa, beso`roq kirib keladi. Mening g’ussam o’zing, o’zing armonim. Mabodo dil qulfing ochiq bo`lmasa, ochib kiradi va Seni osmonimga olib ketaman, hatto, buzib kiradi. Bu tuyg`ular, bu sezimlar ismsiz Yerda bizga kun yo’q, kun yo’qdir jonim. emas, balki uning nomi bisyor: muhabbat deydilar Ushbu parchada nechta ko’makchi morfema uni, ishq, sevgi deb ataydilar ba`zan… qo’llangan? Matn tarkibidagi nechta so`z tarkibida qanday", "options": ["22 ta", "23 ta", "20 ta", "25 ta fonetik o`zgarish yuz bergan?"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v10_lang_q30", "variant": 10, "subject": "lang", "text": "Dunyoda faqat yaxshi bo’lishning, odobli, itoatli,", "options": ["6 ta so`zda: 2 ta tovush almashinishi, 2 ta tovush yumshoqtabiat bo’lishning o’zi yetmasligini uqtirdi. ortishi, 2 ta tovush tushishi Yuqoridagi gapda qo’llangan ko’makchi", "7 ta so`zda: 3 ta tovush almashinishi, 2 ta tovush morfemalar miqdorini aniqlang. ortishi, 2 ta tovush tushishi A)12 ta B)16 ta", "17 ta", "15 ta C) 8 ta so`zda: 2 ta tovush almashinishi, 3 ta tovush ortishi, 3 ta tovush tushishi"], "correctAnswer": 0, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q1", "variant": 11, "subject": "lang", "text": "„Domlaning o’ng qo’li menman“—dedi Laylo. Gapdagi Ma’no ko’chish turini aniqlang.", "options": ["metofara", "metonimiya", "sinekdoxa", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q2", "variant": 11, "subject": "lang", "text": "Qaysi qatorda kuchli so’ziga ma’nodosh bo’lgan frazeologik birlik berilgan?", "options": ["oyog’idan o’t chaqnaydi", "tog’ni ursa tolqon qiladi", "tekkanga tegib,tegmaganga tosh otadi", "do’ppisini osmonga otadi"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v11_lang_q3", "variant": 11, "subject": "lang", "text": "Qaysi gapda shakldosh qo’shimchalar uchramaydi?", "options": ["ko’rasan, seni ishqida jizza qiladi", "Ikkalasi ham shahrimizdagi o’zgarishlarni ko’rib lol qolishdi", "Quvlab yeta olmasligini shunda ham anglamadi 27", "O’nlab yigit-qizlar yomg’ir suvi loy qilgan ko’chalardan avaylab yutib borishardi"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q4", "variant": 11, "subject": "lang", "text": "Tengdoshini sevgan bo‘lar teng tentak, To‘yda bildim, ancha ekan deng tentak. O‘sha kuni sal yig‘labman men tentak… Tugunchagin tugib qo‘ygan tayyor qiz, Yolg‘on yig‘lab, erga borar ayyor qiz. Ushbu parchadagi yasama so’zlar tarkibida qo’llangan ko’makchi morfemalar sonini toping", "options": ["10 ta", "12 ta", "14 ta", "15 ta"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q5", "variant": 11, "subject": "lang", "text": "Ey bolam, yot yurtga borsang, usulda ko’chgan? “Ne atalur eling?”- derlar.", "options": ["metafora", "metonimiya Qay millatning vakilisan?", "sinekdoxa", "vazifadoshlik “Bormi ona tiling?” – derlar. Ushbu parchada qo‘shimchalar haqida bildirilgan 21. Qaysi gapda tarkibida lug'aviy shakl yashovchi fikrlarning nechtasi qo'shimcha mavjud sifatlanmish qatnashgan? to‘g‘ri ? A) Sizsiz kelajak yo'q, siz axir xalqning Ming yilni 1) ko‘plik qo‘shimchasi bilan omonim bo‘la oladigan ko'rajak qarog'larisiz. sintaktik shakl yasovchi qo‘shimcha qo‘llangan; B) Shahidlarning qirmiz qonidan, Alvon bo'ldi qora 2) so‘z yasovchi qo‘shimchalarning soni birdan ortiq; tunlaring. 3) bog‘lama ishtirok etmagan; C) Qo'chqor bo'laturgan qo'zichoqning manglayi 4) undalma tarkibida kelib yaqinlik ma’nosini tug'ilgan chog'da do'ng bo'lur. ifodalovchi grammatik shakl qo‘llangan; D) Uzoqlarda zalvorli tog'lar xayolimni keldilar bosib 5) kelasi zamonning uslubiy xoslangan shakli ishtirok etmagan; 22. Yetakchi morfemasi ot bo'lgan yasama so'z 6) xoslik va umumdan ajratilgan ma’nosini qatnashgan gapni aniqlang. ifodalovchi birikma qo‘llangan. A) Tani sog'lik - tuman boylik. A) 2 ta B) 4 ta c) 5 ta D) 3 ta B) Bilimi zo'r mingni yiqar. C) Odami el ko'kartirdi."], "correctAnswer": 0, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q6", "variant": 11, "subject": "lang", "text": "Dunyo tillariga kirib ulgurgan, tarkibidagi har bitta tovush grammatik shakl vazifasini bajara oladigan o‘zbekcha so‘z qaysi qatorda to‘g‘ri ko‘rsatilgan?", "options": ["halol", "yonbosh", "chala", "chevar"], "correctAnswer": 0, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q7", "variant": 11, "subject": "lang", "text": "Sof o‘zbekcha so‘zlarda va so‘z boshida kelmaydi, arab - fors tilidan o‘zlashgan so‘zlarda esa turli o‘rinlarda kela oladi deya ta’riflangan undosh qaysi qatorda yopiq bo‘g‘inlar tarkibida kelgan?", "options": ["fasl, safar, futbol", "vaqt, tavsif, sovun", "bargga, tuggin, tugma", "do‘stlik, daraxt, Toshkent"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q8", "variant": 11, "subject": "lang", "text": "Qaysi gapda aniqlovchi vazifasini bajargan tarkibida nisbat qo'shimchasi qo'llangan?", "options": ["Poyonsiz dalalaringni, olamdagi bor go'zallikni bag'rida yashirib yotgan bog'laringni sevamiz, jonajon Vatan!", "Amu bilan Sirdan suv ichgan, Zarafshonni loylatib kechgan Chavandozlar bordir bu elda.", "Yaqin borib qarasa, qoraygan yerda bolalar ko'ylagiga qadaladigan o'no'n beshta tugma sochilib yotibdi.", "Yomg'irdan keyin paydo bo'ladigan kamalak jahondagi jamiki ranglarni yettita ipga tortib tuzganga o'xshaydi."], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q9", "variant": 11, "subject": "lang", "text": "Shoirlik g‘irt bekorchiga ish, Yumushim shu – xayol suraman. Nima haqda? Noqulay aytish... Sizni hamon yaxshi ko‘raman. Ushbu she’rda omonimlik xarakteriga ega qo’shimchalar nechta?", "options": ["Qani, yo’q deb ko’rsin-chi!", "Oz so’zla, ko’p o’yla", "Akam bu xabarni iliq qarshi oldi", "Oy borib, omon qayt"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q10", "variant": 11, "subject": "lang", "text": ". Ana shunday tarixiy vaziyatda mazkur xalqlar zarur vaqtda to’kib yashab, zarur vaqtda yig’ib, ko’chiga ortib ketishiga qulay bo’lganko’chma uylardan foydalangan. Ushbu gapda nechta birgina ko’makchi morfemadan iborat so’z qo’llangan?", "options": ["10", "9", "12", "11"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q11", "variant": 11, "subject": "lang", "text": ". To'tini o'z ismini aytishga o'rgatishadi, ismini ko'k takrorlashadi. Keyin bir kuni , ehtimol, behosdanmi yoki o'z kayfiyatini bildirish uchunmi, talab qilinayotgan so'zni aytib yuboradi va shu ondayoq mukofot oladi. Berilgan gapda nechta gap tarkibida nisbat qo'shimchasi qo'llangan ?", "options": ["4", "5", "7", "6"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q12", "variant": 11, "subject": "lang", "text": "Istagin istagin ro’yobin.", "options": ["Qani, yo’q deb ko’rsin-chi! Ushbu gapdagi ko’makchi morfemalar soni", "Oz so’zla, ko’p o’yla nechta?", "Akam bu xabarni iliq qarshi oldi A)7 ta B)9 ta C)8 ta", "6 ta D)Oy borib, omon qayt"], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q13", "variant": 11, "subject": "lang", "text": "Osmonga oy, yigitga ot yarashar – Tuyoqlari yulduz sochsin yelganda. Yigit bo‘lsin- kirsa davra yorishar, Qiz-juvonning aqli shoshsin kulganda. Ushbu she’riy parchada qo’llangan lug’aviy shakl yasovchilar tarkibida nechta sirg’aluvchi undosh qatnashgan?", "options": ["8 ta", "7 ta", "9 ta", "10 ta"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q14", "variant": 11, "subject": "lang", "text": "O‘qtin-o‘qtin g‘azab otiga minib, Vahshat solar telba Qo‘qon shamoli. Ko‘zlaring qisilib, qulog‘ing tinib, Ajrata bilmaysan yerdan samoni. Berilgan parchadagi ko’makchi morfemalar sonini aniqlang", "options": ["17", "19", "21", "23"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v11_lang_q15", "variant": 11, "subject": "lang", "text": "1)Ey xudoyim, bizni o’zing qo’lla", "options": ["17", "19", "21", "23 2)Fursat g’animatdir, shoh satrlar-la, Bezamoq chog’idir umr daftarin."], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v11_lang_q16", "variant": 11, "subject": "lang", "text": "Qaysi javobda keltirilgan so’zlar tarkibida ikkita so’z yasovchi ishtirok etgan?", "options": ["changitmoq, tinchimoq, qiynoq", "eslaganlik, yamoqchilik, yig’loqi", "yarqiroq, atama, qiynoq", "sanoqsiz, o’ynoqi, tinimsiz"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q17", "variant": 11, "subject": "lang", "text": "Qaysi gapda shakldosh qo’shimchalar uchramaydi?", "options": ["ko’rasan, seni ishqida jizza qiladi", "Ikkalasi ham shahrimizdagi o’zgarishlarni ko’rib lol qolishdi", "Quvlab yeta olmasligini shunda ham anglamadi 27", "O’nlab yigit-qizlar yomg’ir suvi loy qilgan ko’chalardan avaylab yutib borishardi"], "correctAnswer": 0, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q18", "variant": 11, "subject": "lang", "text": "Sezgilarni uyg'otuvchi hidli gullar to'planib: <<Biz ham yo'lga chiqdik!>> deya yuborganlar bir chopar. Ushbu gapda qo'llangan sodda yasama otlardan nechtasining yasovchi asosi shakldoshlik xususiyatiga ega?", "options": ["2", "3", "1", "bunday so'z mavjud emas 30. Qaratqich va tushum kelishiklari belgisiz qo’llanganda qanday ma`no anglashiladi? 1. umumiylik 2. Xususiylik 3. Aniqlik"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q19", "variant": 11, "subject": "lang", "text": "Qaysi gapda shakldosh qo’shimchalar uchramaydi?", "options": ["ko’rasan, seni ishqida jizza qiladi", "Ikkalasi ham shahrimizdagi o’zgarishlarni ko’rib lol qolishdi", "Quvlab yeta olmasligini shunda ham anglamadi 27", "O’nlab yigit-qizlar yomg’ir suvi loy qilgan ko’chalardan avaylab yutib borishardi"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q20", "variant": 11, "subject": "lang", "text": "Shoirlik urf emas hozir, bilaman, Ne qilay, ko‘ngilni qo‘ymaydi havas. Bugun savdogarning davri gullagan: Pesi bo‘lsa hamki “Mers”i bo‘lsa bas! Berilgan parchadagi nechta qo’shimcha o’z shakldoshiga ega?", "options": ["8 ta", "9 ta", "10 ta", "7 ta"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v11_lang_q21", "variant": 11, "subject": "lang", "text": "Sevgi yomg‘ir emas, ko‘kdan sochilmaydi, Ishqsizlarga samodan gap ochilmaydi. Endi sendan o‘zgaga lab ochilmaydi, Lablarimda lablaringning mazasi bor. Nechta so’z tarkibida omonim qo’shimchalar qatnashganini toping", "options": ["quyosh, tosh, temir", "tun-kun, issiq-sovuq, achchiq-chuchuk", "xola-xola, mingoyoq, tog’olcha", "toshloq, tinimsiz, boylik"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q22", "variant": 11, "subject": "lang", "text": "Qaysi javobda keltirilgan gapda birgalik nisbatdagi fe’l ishtirok etgan?", "options": ["Berilgan barcha gapda birgalik nisbatdagi fe’l ishtirok etgan.", "Vodil qishlog‘ining choyxonasi yo‘l boshidagi ikkita kata keksa chinorning soyasida joylashgan.", "Bir burchakda katta stol atrofida yoshlar o‘tirib gazeta, jurnal va kitob o‘qishadi, bir burchakda radiodan so‘nggi xabar eshitdilar.", "O‘tgan yili qishloq jamoasi choyxonani ta’mirlashdi."], "correctAnswer": 0, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q23", "variant": 11, "subject": "lang", "text": "Quyidagilardan qaysi biri dramma?", "options": ["“Mardlik afsonasi”", "“Temir xotin”", "“Yulduzlar mangu yonadi”", "“Palatkada yozilgan doston”"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v11_lang_q24", "variant": 11, "subject": "lang", "text": "Qaysi gapda ham yetakchi, ham ko’makchi felning asos va qo’shimchalarida shakldoshlik kuzatilgan?", "options": ["Kechga yaqin shaharga borib keldik", "Hirotdan olib kelingan kitoblarni birma-bir ko’zdan kechirgach, o’g’liga kutbxona eshigini ochishni buyurdi", "Men ularga qoyil qolmasligimga sabab—ular allakimlarga suyanib qolgandek edi", "Yo’l shu ketishda torayib borsa, otlar bilan yurib bo’lmaydi"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q25", "variant": 11, "subject": "lang", "text": "Yarim aylana minbarda turib tinimsiz so’zlardi. Ushbu gapdagi qo’shimchalar miqdorini aniqlang.", "options": ["4 ta so’z yasovchi, 1 ta sintaktik shakl yasovchi, 3 ta lug’aviy shakl yasovchi", "3 ta so’z yasovchi, 3 ta sintaktik shakl yasovchi, 2 ta lug’aviy shakl yasovchi 55", "1 ta so’z yasovchi, 4 ta sintaktik shakl yasovchi, ta lug’aviy shakl yasovchi", "2 ta so’z yasovchi, 3 ta sintaktik shakl yasovchi, ta lug’aviy shakl yasovchi"], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v11_lang_q26", "variant": 11, "subject": "lang", "text": "-moq, -sa, -ma qo’shimchalaridan qaysilari ham so’z yasovchi, ham lug’aviy shakl yasovchi qo’shimcha hisoblanadi?", "options": ["-ma", "-ma, -sa", "-moq, -ma", "-moq, -sa, -ma"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v11_lang_q27", "variant": 11, "subject": "lang", "text": "Fe’l nisbatlarini hosil qiluvchi qo’shimchalar vazifasiga ko’ra qo’shimchalarning qaysi turiga kiradi?", "options": ["so’z yasovchi qo’shimcha", "sintaktik shakl yasovchi qo’shimcha", "shaxs-son qo’shimchasi", "lug’aviy shakl yasovchi qo’shimcha"], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v11_lang_q28", "variant": 11, "subject": "lang", "text": "Qaysi tillar turkiy tillar oilasiga mansub emas?", "options": ["qaraim, qoraqalpoq", "uyg'ur, boshqird", "bolqor, qoraqalpoq", "tojik, urdu"], "correctAnswer": 3, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v11_lang_q29", "variant": 11, "subject": "lang", "text": "o'pka 2. Tog'aylar 3. Tishlar 4. Bo'g'iz", "options": ["barchasi ishtirok etadi", "2", "1, 2,", "2, 3"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v11_lang_q30", "variant": 11, "subject": "lang", "text": "Qaysi qatordagi so'zlar alifbo tartibida yozilmagan?", "options": ["agrotexnika, anjir, anor", "kattaqo'rg'on, kishmish, kuz 6.", "telegraf, tipografiya, teploxod", "mayiz, mashina, mosh"], "correctAnswer": 0, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q1", "variant": 12, "subject": "lang", "text": "Hind 11. Arab 12. koreys", "options": ["hammasi", "3, 4, 5, 6, 7, 8, 9, 11", "3, 5, 6, 7, 9", "1, 4, 5,7, 9"], "correctAnswer": 1, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v12_lang_q2", "variant": 12, "subject": "lang", "text": "Tovush tarkibi bi xil bo'lgan so'zlarni belgilang.", "options": ["tong, dong", "guldon, gulchi", "olma, mola", "yor, ayyor"], "correctAnswer": 0, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q3", "variant": 12, "subject": "lang", "text": "Turkiy tilning qarluq guruhiga kiruvchi tilni belgilang.", "options": ["uyg'ur", "turkman", "boshqird", "tatar"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v12_lang_q4", "variant": 12, "subject": "lang", "text": "Muallim va muallif so'zlaridagi fonemalarnig birlashtiruvci belgisi qaysi bandda ko'rsatilgan?", "options": ["hosil bo'lish o'rni", "hosil bo'lish usuli", "ovozdor yoki shovqinliligi", "ovoz va shovqin ishtiroki"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q5", "variant": 12, "subject": "lang", "text": "''Tafsir'' asarini etirof etgan olimni belgilag.", "options": ["Palivanov", "Borokov", "SH. Rahmatullayev", "Q. O'rozboyev"], "correctAnswer": 1, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v12_lang_q6", "variant": 12, "subject": "lang", "text": "Keltirilgan xususiyatlarda qaysi biri nutqqa emas, balki tilga xos", "options": ["aloqa shakli", "o'zgaruvchan", "dialog, manolog shaklda bo'lishi", "hajmi noaniq"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v12_lang_q7", "variant": 12, "subject": "lang", "text": "A. Jomiy 2. A. Navoiy 3. A. Pushkin", "options": ["jarangli undoshlar", "sonorlar", "", ""], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q8", "variant": 12, "subject": "lang", "text": "L tovushining artikulatsion belgisi berilgan qatorni belgilang.", "options": ["til oldi", "jarangli", "sonor", "portlovchi"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q9", "variant": 12, "subject": "lang", "text": "Bog'u 7. Ko'ni", "options": ["1, 2, 3, 4, 5, 6, 7", "2, 5, 6", "5, 6, 7", "1, 3, 5, 7"], "correctAnswer": 1, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v12_lang_q10", "variant": 12, "subject": "lang", "text": "Qaysi bandda asosiy vazifasi so'z ma`nolarini farqlash bo'lgan birlik haqida mulohaza keltirilgan", "options": ["so'z bo'g'inlaridan birini kuchliroq aytilishini taminlaydi", "unlini cho'zish yoki undoshni ajratish vazifasini bajaradi", "ochiq yoki yopiq bo'ladi", "fziologik, akustik va ligvistik tomonlari bo'ladi"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q11", "variant": 12, "subject": "lang", "text": "tarkibidagi x undoshini bo'g'iz undoshiga alishtirganimizda yangi leksik birlik hosil bo'ladigan so'zlarni belgilang", "options": ["xil-xil", "xas-cho'p", "xayr-sadaqa", "xola-xola"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q12", "variant": 12, "subject": "lang", "text": "Qaysi so'zda tilning vertikal holatiga ko'ra guruhga kiruvchi unlilar ishtirok etgan?", "options": ["vodiy", "kurash", "yetuk", "samo"], "correctAnswer": 3, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q13", "variant": 12, "subject": "lang", "text": "unli va sirg'aluvchilar ishtirok etgan so'zni belgilang.", "options": ["sichqon", "vazifa", "ashula", "lazgi"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q14", "variant": 12, "subject": "lang", "text": "i ulisi qaysi undoshlardan oldin bilinear- bilinmas talafuz qilinadi", "options": ["r, l", "m, n, ng", "x, h", "z, s"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q15", "variant": 12, "subject": "lang", "text": "Piruet so'zidagi ochiq bo'g'inlardagi unlilar qaysi jihatlarga ko'ra bir jihatdan o'rin oladi?", "options": ["tilning gorizantal holatiga", "tilning vertikal holatiga", "lablar ishtirokiga ko'ra", "bu tovushlar bir tasnifdan joy olmaydi"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q16", "variant": 12, "subject": "lang", "text": "Ona haykal… yog'd..,lar ich..da …ftbday tur..bdi. Nuqtalar o'rniga qo'yiladigan unlilardan nechtasi old qator.", "options": ["4", "3", "2", "5"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v12_lang_q17", "variant": 12, "subject": "lang", "text": "Yaxshidir achchiq haqiqat Berilga gapda nechta chuqur til orqa qator ishtirok etgan", "options": ["2", "3", "4", "5"], "correctAnswer": 0, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q18", "variant": 12, "subject": "lang", "text": "Qaysi so'zda hosil bo'lish o'rniga ko'ra bir guruhga kiruvchi undoshlar qatnashgan?", "options": ["romonlar", "Havoyi", "norasida", "mamlakat"], "correctAnswer": 2, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q19", "variant": 12, "subject": "lang", "text": "Saxiy bilan baxil bir buloqdan suv ichmas. Tilning qayerida hosil bo'lishigako'ra farqlanuvchi undoslar ishtirok etgan yopiq bo'g'inlar sonini aniqlang.", "options": ["1", "2", "3", "4 11. O'zbekcha so'zlarning oxirida qanday qator undoshlar kelishi mimkin."], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v12_lang_q20", "variant": 12, "subject": "lang", "text": "ng tovushiga xos bo'lmagan jihatni ko'rsating.", "options": ["sonor", "burun tovushi", "sirg'aluvchi", "til orqa"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q21", "variant": 12, "subject": "lang", "text": "1-tovushi chuqur til orqa, portlovchi, jarangsiz; 2-tovushi lablangan, til orta unlisi 3-tovushi portlovchi-sirg'aluvchi, jarangli so'zni toping", "options": ["gul", "go'r", "qo'l", "qum"], "correctAnswer": 1, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q22", "variant": 12, "subject": "lang", "text": "1-tovushi jarangli, qorishiq; 2-tovushi old qator, quyi keng 3-jarangsizi, bo'g'iz undoshi 4-sonor, yon tovushi. Yashiringan so'zni toping.", "options": ["charm", "jazo", "mayl", "jahl"], "correctAnswer": 3, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q23", "variant": 12, "subject": "lang", "text": "Kuy avjida uzilmasin tor, she`r yarmida sinmasin qalam. Faqat jarangli undoshlardan tashkil topgan yopiq bo'g'inlar miqdori nechta?", "options": ["4", "3", "2", "5"], "correctAnswer": 3, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q24", "variant": 12, "subject": "lang", "text": "O'zbek tilida sirg'aluvchi til undoshlari nechta?", "options": ["12", "10", "8", "7"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q25", "variant": 12, "subject": "lang", "text": "Yer ochganning baxti ochilar. Til undoshlarini tasniflang", "options": ["1 ta til o'rta, 7 ta til oldi, 3 ta til orqa", "1 ta til o'rta, 8 ta til oldi, 2 ta til orqa, 1 ta chuqur orqa", "1 ta til o'rta, 9 ta tiloldi, 1 ta til orqa, 1 ta chuqur orqa", "2 ta til o'rta, 7 ta til oldi, 4 ta til orqa"], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q26", "variant": 12, "subject": "lang", "text": "Sevgi dardi yurak uchun yomon ekan-ku til Misrada ochiq bo'g'inlarda qo'llangan undoshlarning birlashtiruvchi belgisi nima? til", "options": ["un paychalari ishtiroki", "hosil bo'lish o'rni", "hosil bo'lish usuli", "tining qayerida hosil bo'lishi"], "correctAnswer": 1, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q27", "variant": 12, "subject": "lang", "text": "Hammaga bir yangilikni yetkazish lozim. Ushbu parchada kelishik qo'shimchasini olgan otning asosi tarkibida nechta jarangli undosh bor?", "options": ["2", "1 3", "3", "4"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q28", "variant": 12, "subject": "lang", "text": "Hammaga bir yangilikni yetkazish lozim. Ushbu parchada yopiq bo'g'inda qantashgan, omonimli xusisiyatiga ega til oldi, sirg'aluvchi, jarangli undoshlar soni nechta?", "options": ["9", "bunday undosh yo'q", "10 ta", "2 ta 18. yopiq bo'g'inlaridan birida faqat sirg'aluvchi til oldi undoshlar ishtirok etgan so'zlarni belgilang. 1. avzoyi 2. Arjumand 3. Mahtal"], "correctAnswer": 1, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v12_lang_q29", "variant": 12, "subject": "lang", "text": "Vatanparvar 5. ilhombaxsh", "options": ["2, 3, 4, 5", "1, 3, 4", "2, 5", "1, 4, 5"], "correctAnswer": 1, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v12_lang_q30", "variant": 12, "subject": "lang", "text": "Qaysi javobda til orqa jarangsiz undoshini jarangli jufti bilan almashtirsa, ma`no o'zgaradigan so'zlarni belgilang.", "options": ["gilam, qaynoq, bol", "ko'r, ekilgan, tuk", "tut, ko'cha, pop", "chala, sal, fayyoz"], "correctAnswer": 1, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q1", "variant": 13, "subject": "lang", "text": "Qo'lidagi jurnalda ajdodlarining mehnati singan yerlar toptalgani yaqqol ko'rinib turardi. Ushbu jumlada nechta portlovchi, jarangli til undoshlari bor?", "options": ["12", "14", "16", "8"], "correctAnswer": 1, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q2", "variant": 13, "subject": "lang", "text": "Qaysi so'zlarda qo'shimcha qo'shilishi bilan birinchi bo'g'indagi undosh ikkinchi bo'g'inga o'tib qolgan?", "options": ["rektorlar, ilmli", "teatrga, klubni", "fidoyilik, kurashchi", "qalbim, sulhi"], "correctAnswer": 0, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q3", "variant": 13, "subject": "lang", "text": "Yopiq bo'g'inlaridan birida faqat lab-lab tovushi ishtirok etgan so'zni belgilang.", "options": ["murabbo", "Oripov", "ommobop", "muftiy"], "correctAnswer": 1, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q4", "variant": 13, "subject": "lang", "text": "ochiq bo'g'inda ovozdor, til orqa undoshi qatnashgan so'z qaysi qatorda berilgan?", "options": ["haqorat", "xaloyiq", "yangi", "xonaki"], "correctAnswer": 2, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q5", "variant": 13, "subject": "lang", "text": "Bizim beklar kitob mutolaa qilmoqqa, majlislarni she`r nuri bilan yoritmoqqa g'ayrat qilmaslar. Berilgan parchani belgisiz qo'llangan qo'shimchalarni belgili holda o'qisak ochiq bo'g'inlar soni nechta bo'ladi?", "options": ["14", "18", "15", "16"], "correctAnswer": 1, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q6", "variant": 13, "subject": "lang", "text": "Sen botir, u esa qo'rqoq", "options": ["1, 3", "2, 3", "1, 4", "2, 4 9. Urg'u ma`no farqlash vazifasini bajaradigan so'zlarni belgilang."], "correctAnswer": 0, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q7", "variant": 13, "subject": "lang", "text": "birdan 2. Kattamiz 3. Banda 4. Shuncha 5 akademiya", "options": ["1, 2, 4, 5", "2, 4, 5", "2, 3", "1, 2"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q8", "variant": 13, "subject": "lang", "text": "Urg'u ochiq bo'g'inga tushgan yasama so'z qatnashgan gapni belgliang.", "options": ["Badiiy adabiyotning asosiy ish quroli so'zdir", "Bu tushuncha keng qamrovli ekanligi bilan ajralib tudi", "Fozil Yo'ldosh qirqdan ortiq xalq dostonlarini yod bilgan", "Qalmoq yurtiga, Kashal eliga qaab yura bersin"], "correctAnswer": 1, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q9", "variant": 13, "subject": "lang", "text": "Qaysi javobda yopiq bo'g'inlari jarangsiz juftiga ega bo'lmagan jaranglilardan iborat so'zlar ishtirokida tuzilgan gap berilgan?", "options": ["Mayram marmar maymunni minora tepasida kuzatadi", "Qo'sh qo'lqop, qo'shovi ham bo'sh qo'lqop", "Dam oladi kunduzi, xonadonning yulduzi", "Mashaqatsiz topilgan non, mazalimas unutma inson"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q10", "variant": 13, "subject": "lang", "text": "Yangi va akademik so'zlari sifat bo'lsa urg'u qaysi bo'g'inga tushadi?", "options": ["2, 4", "1, 3", "2, 3", "1, 4"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q11", "variant": 13, "subject": "lang", "text": "Qaysi gapda vosiali to'ldiruvchining so'ngi bo'g'ini urg'uli ekani toping.", "options": ["Bu malumotni internedangina topish mumkin", "Biz sen bilan faxrlanamiz", "Toyni kuzga qoldirdik", "Sendan buni kutmagan edim"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q12", "variant": 13, "subject": "lang", "text": "Urg'u ma`no farqlash vazifasini bajaradigan qaysi so'zning asosi shakldoshlik xususiyaiga ega?", "options": ["sozlar", "suzdi", "yasama", "qushcha"], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q13", "variant": 13, "subject": "lang", "text": "Qaysi qatordagi so'zlarda urg'u ikkinchi bo'g'inga tushadigan so'zlar berilgan?", "options": ["albatta, shamolday,hamisha", "allakim, atom, mudir", "doim, qaysi, muhit", "auditoriya, ammo, lekin"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q14", "variant": 13, "subject": "lang", "text": "Gul ekkandim senga rango-rang, Uzmoqlikka qo'l bormas hargis. O'zi tersin degandim, attang. Sen unda-yu, men bunda yolg'iz. Fonetik yozuvda yozilgan so'zlarda nechta jarangli til undoshi bilan boshlanuvchi bo'g'in bor?", "options": ["6 ta", "7 ta", "4 t", "5 ta"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q15", "variant": 13, "subject": "lang", "text": "Qaytdi kuzda ketgan qaldirg'och, Sen qaytmading, sevgilim, essiz. Topolmayin chora-yu iloj, Sen unda-yu, men bunda yolg'iz. Sheriy parchada ega vazifasida kelgan so'zlarda jami nechta jarangsiz undosh bilan boshlanuvchi ochiq bo'g'in bor?", "options": ["1", "2", "3", "bunday bo'g'in qatnashmagan"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q16", "variant": 13, "subject": "lang", "text": "Barcha bizni qilardi havas, Ko'kda oy ham , hattoki yulduz. Ko'z tegdimi bizlarga behol, Sen unda-yu, men bunda yolg'iz. Atash ma`nosi yo'q so'zlarda nechta ochiq bor?", "options": ["6 ta", "7 ta", "4 t", "5 ta"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q17", "variant": 13, "subject": "lang", "text": "Umid guli so'ndi noiloj, Ko'y ishqida qoldi qo'sha iz. Kimlar baxti topoldi rivoj, Sen unda-yu, men bunda yolg'iz. Ismlar tarkibida nechta jarangsiz jufti yo'q undoshlar qatnashgan ?", "options": ["15", "16", "13", "14"], "correctAnswer": 0, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q18", "variant": 13, "subject": "lang", "text": "Ko'kdagi quyosh emas, u mening otash qalbimdir, yonmoqda, Yog'gan yomg'ir emas, u mening ezilgan yuragimdir, yig'lamoqda. Bir bahona bilan hammasi bo'ldi tomom, Endi xor bo'lgan men emas, toptalgan visol, sevgi aza tutmoqda. Yasama so'zlarda nechta yopiq bo'g'in bor?", "options": ["6 ta", "12 ta", "10 ta", "11"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q19", "variant": 13, "subject": "lang", "text": "Qaysi gapda yasama so'z fonetik yozuvda yozilgan?", "options": ["Qulupnay pushtlari orasida suv yaltiraydi", "Goho miriqib gaplashib, oy surib ham olamiz", "Dalada mashinalar ko'paymoqda", "Salimjon qo'ylarini birma-bir erinmay sanadi 6"], "correctAnswer": 3, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q20", "variant": 13, "subject": "lang", "text": "To'liqsiz fel qaysi gapda fonetik yozuvda yozilgan?", "options": ["Alisherning qalbiga kirmoqchiday tikilib qarardi tog'asi", "Fors shoiri teran fikrlar, ajib hislar ila ajib sherlar yaratmishlar", "Turkuston o'lkamiz vodiylari, sahrolari keng, tog'lari buyuk, aholisi turk—o'zbekdur.", "Viqor-la o'qshaygan qoya labida mayus chayqaladi bir tup namatak"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q21", "variant": 13, "subject": "lang", "text": "Mening o'g'lim unaqalardan emas, bag'rimda turib meni xafa qilmaydi, Fonetik hodisalar soni nechta?", "options": ["4", "3", "5", "6"], "correctAnswer": 2, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v13_lang_q22", "variant": 13, "subject": "lang", "text": "Qaysi gapda bir asosning o'zida ikkita fonetik hodisa kuzatilgan so'z mavjud kuzatilmoqda?", "options": ["Undan-bundan gaplashib o'tiribmiz", "Qaynoqqina habarlar sizni kutmoqda", "Haqqingga duo qilgum", "Uning bunaqangi qilig'i borligini bilmasdim 7 Fonetika 4"], "correctAnswer": 3, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q23", "variant": 13, "subject": "lang", "text": "Devol ustida muchicha turipti. Imlo qoidasiga nomuvofiq yozilgan undoshlarning brlashtiruvchi belgisini ko'rsating.", "options": ["jarangli", "portlovchi", "til undoshi", "sof undosh"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q24", "variant": 13, "subject": "lang", "text": "Shu payt ko'rpani qayirib ushlagan oq nozik qo'llari bilan latif burnining o'ng tomonida, tabiatning nihoyatda nozik qo'li bilan qo'ndirilgan qora xolini qashidi va boshini yostiqdan olib o'lturdi. Ushbu parchada fonetik tamoyil asosida yozuluvchi so'zlar taribida qaysi undosh turi ishtiroketmagan", "options": ["til oldi undosi", "til orqa undoshi", "sonor", "lab-tish undoshi"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q25", "variant": 13, "subject": "lang", "text": "Talaffuzda assimilatsiya yuz beradigan so'zlarni ishtiroketmagan belgilang", "options": ["til oldi undosi", "til orqa undoshi", "", ""], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q26", "variant": 13, "subject": "lang", "text": "ishga 2. Iqtidor 3. Taqchil 4. Taqsim 5. adabiyotchi", "options": ["1, 2, 3, 4", "1, 4, 5", "1, 3, 4, 5", "3, 4, 5 4. Fonetik yozuvda yoziladigan so'zlar bilan fonetik hodialar teng bo'lmagan gaplarni belgilang. 1. Kap-katta bo'lib shunga ham vaj topolmaysanmi 2. Hijron quvonchimni ayovsiz quvar, Jonim ayriliqqa chidolmas yurak"], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q27", "variant": 13, "subject": "lang", "text": "Qo’shib yoziladigan so’zlarni toping", "options": ["xom//semiz, shu//yerga", "g’ayrat//qilmoq, otash//qalb", "oq//podsho, yetim//masjid", "jiqqa//ho’l, kino//yulduz 41"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q28", "variant": 13, "subject": "lang", "text": "Yashash uchun foydali mehnat qilish kerakligini aglab yetish insoniylikning birinchi shartidir", "options": ["1, 2, 3, 4", "1, 2", "1, 3", "faqat 2"], "correctAnswer": 0, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q29", "variant": 13, "subject": "lang", "text": "Quyidagi qaysi shakldosh so'zga lug'aviy shakl yasovchi qo'shimcha qo'shilsa fonetik yozuv asosida yoziladi?", "options": ["oyoq", "bag'ir", "shahar", "ko'nik 13. Qo'shimcha qo'shilish natijasida ham yetakchi marfemasida ham yasalish asosida fonetik o'zgarish yuz bergan javobni belgilang. 1. so'rog'ini 2. Qiynalmay 3. gaplashguncha"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v13_lang_q30", "variant": 13, "subject": "lang", "text": "otliq 5. Barmog'i 6. Tirmog'i 7. keragicha", "options": ["3, 4, 5, 6", "1, 2", "1, 2, 6, 7", "1, 2, 5, 6, 7"], "correctAnswer": 0, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q1", "variant": 14, "subject": "lang", "text": "Payshanba kuni uyga ketdi: tuzsiz ovqatlardan bezor bo'lgan edi. Berilgan gapda nechta so'zda assimilatsiya kuzatiladi?", "options": ["2", "3", "4", "1"], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q2", "variant": 14, "subject": "lang", "text": "Fonetik hodisa eng ko'p sodir bo'lgan gap berilgan javobni toping.", "options": ["Ustalar devor rangini sarg'aytirmaslikka shuncha urinishmasin, baribir ijobiy natijaga erisholmadilar.", "O'zi yemas, birovga ham bermas insonlarga tegishli.", "Agar davlat mening qo'limda bo'lganda, inson farzandini tuzatib bo'lmaydi degan odamning tilini kesib tashlardim.", "Qiynalganda ishlataman deb yostiq tagiga uch-to'rt so'm tashlab qo'ygandim."], "correctAnswer": 0, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q3", "variant": 14, "subject": "lang", "text": "Qysi gapda imloviy xatolikka yo'l qo'yilgan?", "options": ["1-oktabr—Ustozlar va murabbiylar kuni.", "''Bu sirni faqat senga aytyapman''—dedi u.", "Ko'kcha, qirqma, shakarpalak, obinovvot— barchasi yaxshi qovunlardir.", "Berilgan gapda imloviy xatoga yo'l qo'yilmagan"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q4", "variant": 14, "subject": "lang", "text": "Imloviy xato yozilgan so'zni aniqlang.", "options": ["keldi-yev", "kutaman-a", "ko'rgan-ov", "yashang-e"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q5", "variant": 14, "subject": "lang", "text": "Noto'g'ri yozilgan so'zlarni aniqlang.", "options": ["pedagogga, bug'ga", "sig'guncha, suiiste`mol", "lovilla, burushuq", "masxaraboz, chirmovuq"], "correctAnswer": 2, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q6", "variant": 14, "subject": "lang", "text": "Noto'g'ri yozilgan so'zni aniqlang.", "options": ["ta`magir", "ta`na-dashnoq", "taqiqlangan", "afv etmoq"], "correctAnswer": 0, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q7", "variant": 14, "subject": "lang", "text": "Chirmoviq 6. sovuqmijoz", "options": ["2", "3", "1", "5"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q8", "variant": 14, "subject": "lang", "text": "Qaysi gapda imloviy xatoga yo'l qo'yilgan.", "options": ["Bu ne razillik, bu ne istibdot.", "Sizday ''xayrli'' ishlarga bosh qo'shadigan ''oliyjanob'' toyifalar ''ko'payaversin''.", "Bizni muyulishda bir necha kishi anchadan beri kutib turardi.", "Barchasida imloviy xatolik bor."], "correctAnswer": 1, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q9", "variant": 14, "subject": "lang", "text": "Orfoepik meyorlarga amal qilmaslik natijasida yuzaga kelgan birliklarni belgilang.", "options": ["xat, maktub", "kaptar, kabutar", "tarif, ta`rif", "atlas(mato), atlas(xarita)"], "correctAnswer": 1, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v14_lang_q10", "variant": 14, "subject": "lang", "text": "Shlapa, shirguruch, shan-shavkat, shavqat, shapko'r, shalpang-quloq so'zlaridan nechtasi to'g'ri yozilgan?", "options": ["2", "1", "4", "3"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q11", "variant": 14, "subject": "lang", "text": "xayr ..ohlik 2. …o'rak 3. …avola 4. Hoyu- …avas 5. …ijolat 6. Ma..fiy", "options": ["3, 4", "1, 2, 5", "3, 4, 6", "3, 4, 5"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q12", "variant": 14, "subject": "lang", "text": "O'zbek tuprog'iga kuzning hazin nafasi kelib kirishi bilan daraxtlar za`faron libosga burkanadi. Berilgan gapda qaysi turkumga oid so'z xato yozilgan?", "options": ["fe`l", "sifat", "ot", "barcha so'zlar to'g'ri yozilgan"], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q13", "variant": 14, "subject": "lang", "text": "Quyidagi hukmlardan qaysi biri xato?", "options": ["Hurmat ma`nosini ifodalagan siz va o'zingiz so'zlari bosh harf bilan yoziladi", "So'zlarning birinchi harflaridan tuzilgan qisqartma otlar bosh harflar bilan yoziladi", "Bayramlar va tarixiy sanalar nomini ifodalagan so'zlarning har bir so'zi bosh harf bilan yoziladi", "Oliy tashkilotlar va oliy faxriy unvonlarning har bir so'zi bosh harf bilan yoziladi 13. 1. Boyaqish 2. Monelik 3. Narda 4. Noshut"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v14_lang_q14", "variant": 14, "subject": "lang", "text": "Qaysi qatorda imloviy xato yozilgan birlik mavjud?", "options": ["O, hayot, sendan ko'p narsa so'radimmi?", "Vo ajab, ko'zlarimga tor bo'ldi bu dunyo sening so'zlaringni eshitib", "Begunoh sevgim farishtasi yig'lar ko'zlarini bekitib", "Mening eng gullagan orzularim sen bilan ketdi"], "correctAnswer": 2, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q15", "variant": 14, "subject": "lang", "text": "Taqozo 6. Fontomima so'zlaridan to'g'ri yozilganlarini belgilang.", "options": ["1, 2, 3, 5, 6", "2, 5", "1, 5", "2, 3, 4 14. To'g'ri yozilgan so'zlarni aniqlang. 1. xarxasha 2. Xujjat 3. Hartum 4. Xilvat"], "correctAnswer": 2, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q16", "variant": 14, "subject": "lang", "text": "hulosa", "options": ["1, 2, 3", "1, 3, 5", "3, 4", "1, 4"], "correctAnswer": 1, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q17", "variant": 14, "subject": "lang", "text": "Qo'shib yoziladigan so'zlar qatorini aniqlang.", "options": ["xom//semiz, shu//yerga", "g'ayrat//qilmoq, otash//qalb", "oq//podsho, Yetim//masjid", "jiqqa//ho'l, kino//yulduz"], "correctAnswer": 2, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q18", "variant": 14, "subject": "lang", "text": "Qaysi qatordagi gapda imloviy xato yozilgan so'z mavjud?", "options": ["Suv toshqini shaharga sezilarli talofat yetkazdi.", "Qani, naqarotni birgalikda ijro etamiz.", "Bu yerda chekish taqiqlanadi.", "Uydagilarga ko'pdan ko'p salom ayt."], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q19", "variant": 14, "subject": "lang", "text": "Qaysi qatorda birdan ortiq so'z imlo qoidasiga ko'ra xato yozilgan?", "options": ["Nonishta chog'ida tonggi xabarlarni naridan-beri tingladim", "Aqlli odam har bir xatosidan to'g'ri hulosa chiqara oladi 10", "Ichimizdagi ko'rinmas nozir, ya`ni vijdonimiz bizni nojo'ya hatti-harakatlardan saqlaydi", "Yangi inshoatlar shahrimiz ko'rkiga ko'rk qo'shdi"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q20", "variant": 14, "subject": "lang", "text": "Noto'g'ri yozilgan so'zni toping.", "options": ["hammavaqt", "hammabop", "qo'yko'z", "suvilon"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q21", "variant": 14, "subject": "lang", "text": "Unlilar qo'sholoq kelgan qo'sh undoshli tub so'zni aniqlang.", "options": ["taalluqli", "inshoot", "raund", "taassuf"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q22", "variant": 14, "subject": "lang", "text": "Lotin yozuviga asoslangan qaysi harfni o'zidan keyingi harf bilan qo'shsak bir so'z hosil bo'ladi?", "options": ["d", "l", "s", "z"], "correctAnswer": 1, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q23", "variant": 14, "subject": "lang", "text": "1.parvo; 2. Avzo; 3. Mavzu; 4. Obro' ; 5. Xudo; 6. Dohiy Berilgan so'zlarga III shaxs birlik sondagi egalik qo'shimchasini qo'shsak qanday holatda qo'shiladi?", "options": ["1, 2, 4- so'zlarga –yi shaklda, 3, 5, 6 – so'zlarga shaklda", "1, 2, 3, 4- yi, 5, 6- -si shaklda", "1, 2, 3, 6- so'zlarga- yi shaklda, 4, 5 - -si shaklda", "2, 3- so'zlarga –yi shaklda, 1, 3, 4, 5, 6- so'zlarga si shaklda"], "correctAnswer": 2, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q24", "variant": 14, "subject": "lang", "text": "Qaysi so'zning tovush tarkibi undoshlar va asosga qo'shimcha qo'shilganda tushib qolishi mumkin bo'lgan unlilardan iborat?", "options": ["musibat", "shijoat", "qomusiy", "serhosil 21. So'zlarga egalik qo'shimchasi qo'shilganda qanday fonetik hodisa ro'y berishi mumkin?"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q25", "variant": 14, "subject": "lang", "text": "tovush tushishi 2. Tovush ortish 3. Tovush almashishi", "options": ["1, 2, 3", "1, 3", "1", "2, 3"], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q26", "variant": 14, "subject": "lang", "text": "Fonetik qoida asosida yoziluvchi qaysi so'zning asosiga egalik qo'simchasi qo'shilsa so'zning asosida fonetik hodisa kuzatiladi?", "options": ["quruqlikka", "barmoqni", "yoshligi", "yo'qiligi"], "correctAnswer": 3, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v14_lang_q27", "variant": 14, "subject": "lang", "text": "Birinchi qismi chiqish kelishigida, ikinchi qismi jo'nalish kelishigida bo'lgan birlikmalar qanday yoziladi?", "options": ["ajratib", "qo'shib", "chiziqcha bilan", "eshakman 24. Qaysi gaplarda chiziqcha no'rin qo'llangan? 1. Yigitning ukasi kelib, qo'yarda-qo'ymay pul so'radi 2. Yaqinda tumanimizdagi 54 ta bolalar bog'chasida ko'rik-tanlov o'tkazildi 3. O'qituvchiga paydar-pay savollar berila boshladi"], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v14_lang_q28", "variant": 14, "subject": "lang", "text": "S.Zunnunovaning ilk she’ri qanday nom ostida chop etilgan?", "options": ["“Salom senga”", "“Qizingiz yozdi”", "“Hayot varaqalar”", "“Bizning she’rimiz”"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v14_lang_q29", "variant": 14, "subject": "lang", "text": "Saida Zunnunovaning birinchi kitobini oqib, “Qizingiz yozdi” deb nom qo’ygan shoir?", "options": ["Said Ahmad", "G’.G’ulom", "Oybek", "A.Qahhor"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v14_lang_q30", "variant": 14, "subject": "lang", "text": "Saida Zunnunovaning she’riy to’plamlari qaysi qatorda to’g’ri berilgan? 1) “Gullar vodiysi”; 2) “Yangi she’rlar”; 3) “Qizlarjon”; 4) “Bir yil o’ylari”; 5) “Nilufar”; 6) “Ko’chalar charag’on”.", "options": ["1,2,3,4,5,6", "1,2,3,4,5", "1,2,3,4", "1,3,4,5,6"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v15_lang_q1", "variant": 15, "subject": "lang", "text": "Hamzaning “Dardiga darmon istamas” she’rida “hech nomusilmon” nimani istamaydi?", "options": ["Millati xor bo’lishini", "ilmli bo’lishni", "taraqqiyotga erishishni", "qul bo’lib yashashni"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v15_lang_q2", "variant": 15, "subject": "lang", "text": "Hamza yoshligida qaysi ma’rifatparvar bilan muloqotda bo’lgan?", "options": ["Ismoil G’aspirali", "Abdulla To’qmullin", "O’ljas Sulaymon", "javagirlal Neru"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v15_lang_q3", "variant": 15, "subject": "lang", "text": "Hamzaning necha yoshida savodi chiqadi?", "options": ["10", "16", "14", "15"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v15_lang_q4", "variant": 15, "subject": "lang", "text": "Saida Zunnunovaning qaysi dostonida onaning urush tufayli ota mehridan benasib bo’lgan, ne mashaqqatlar bilan o’stirgan o’g’lining nikoh kechasidan keyingi iztirobli o’y-xotiralari tasvirlanadi?", "options": ["“Sodiq va Anor”", "“Surat bilan suhbat”", "“Ona”", "“Ko’zlar”"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v15_lang_q5", "variant": 15, "subject": "lang", "text": "Hamza qancha muddatada arab tilini arab tilini tasvirlanadi? o’zlashtiradi?", "options": ["“Sodiq va Anor”", "“Surat bilan suhbat” A)1 yilda B)1 oyda", "3 oyda", "3 haftada C) “Ona” D) “Ko’zlar”"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v15_lang_q6", "variant": 15, "subject": "lang", "text": "Saida Zunnunovaning “Ona” va “Ko’zlar” asarlari qaysi janrda bitilgan?", "options": ["doston", "pyesa", "ballada", "she’riy to’plam"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v15_lang_q7", "variant": 15, "subject": "lang", "text": "Saida Zunnunovaning quyidagi qaysi she’ri “Jahon mening bag’rimdami yo men jahon bag’rida”, - misrasi bilan boshlanadi?", "options": ["“Mening Vatanim”", "“Onajon”", "“Qizimga”", "“Nevara”"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v15_lang_q8", "variant": 15, "subject": "lang", "text": "“Gulbahor”, “Povest va hikoyalar”, “Do’stlik”, “Qanot” kabi kitobchalar muallifini toping.", "options": ["U.O’marbekov", "S.Zunnunova", "Shuhrat", "A.Muxtor"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v15_lang_q9", "variant": 15, "subject": "lang", "text": "Ezgulik, adolat uchun kurashni, halol mehnatni o’zining hayotiy maslagi deb bilgan ijodkorni toping.", "options": ["R.Hamzatov", "Turdi", "Uvaysiy", "S.Zunnunova 3"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v15_lang_q10", "variant": 15, "subject": "lang", "text": "Kimning ilk she’ri “Paxta fronti” gazetasida chop etilgan?", "options": ["G’.G’ulom", "Shuhrat", "H.Olimjon", "S.Zunnunova"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v15_lang_q11", "variant": 15, "subject": "lang", "text": "S. Zunnunovaning qaysi she’ri “Yuz umr ko’rsam, yuz yil she’r yozsam, Yuz yil ta’rifingni aytsam muttasil”, - misralari bilan boshlanadi?", "options": ["“Mening Vatanim”", "“Onajon”", "“Qizimga”", "“Nevara”"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v15_lang_q12", "variant": 15, "subject": "lang", "text": "S.Zunnunovaning she’rlarining birida “Mehnatda, rohatda jonim payvandi, Sen mening sevganim, sen maqtaganim !”, - deganda nimani nazarda tutgan?", "options": ["turmush o’rtog’ini", "onasini", "ayol va qizlarni", "Vatanni"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v15_lang_q13", "variant": 15, "subject": "lang", "text": "Veytnamda borayotgan urushga qarshi turgan fransuz qizi jasorati quyida qaysi balladada aks ettirilgan?", "options": ["“Ona va farzand”", "“Jamila”", "“Raymonda”", "“Uch qiz afsonasi”"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v15_lang_q14", "variant": 15, "subject": "lang", "text": "O’zini “chamanda tentirab yurgan rassom”ga o’xshatgan ijodkor kim?", "options": ["Rasul Hamzatov", "Shuhrat", "S.Zunnunova", "A.Muxtor"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v15_lang_q15", "variant": 15, "subject": "lang", "text": "“Ona va farzand” balladasida nima aks ettirilgan", "options": ["Veytnamda borayotgan urushga qarshi turgan fransuz qizi jasorati", "arab qizining fransuzlarga qarshi kurashi", "chet eldagi o’zbeklarning hayoti", "sho’ro yerlarida bo’lgan urush voqesi aks ettirilgan"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v15_lang_q16", "variant": 15, "subject": "lang", "text": "O’zbek adabiyotida birinchi bo’lib, chet eldagi o’zbeklar hayotini o’z asarida aks ettirgan shoirni toping.", "options": ["Mirmuhsin", "Shuhrat", "Hamza", "A.Qodiriy"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v15_lang_q17", "variant": 15, "subject": "lang", "text": "Uch qiz afsonasi”, “Qora va oq aravacha haqida ertak” asarlarining janrini toping.", "options": ["doston", "ballada", "roman", "pyesa"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v15_lang_q18", "variant": 15, "subject": "lang", "text": "Shuhrat qalamiga mansub birinchi roman qaysi?", "options": ["“Oltin zanglamas”", "“Shinelli yillar”", "“Orzu va qasos”", "“So’lmas chechaklar”"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v15_lang_q19", "variant": 15, "subject": "lang", "text": "Shuhratni elga mashhur qilgan romani qaysi javobda to’g’ri berilgan?", "options": ["“Oltin zanglamas”", "“Shinelli yillar”", "“Jannat qidirganlar”", "“Mashrab”"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v15_lang_q20", "variant": 15, "subject": "lang", "text": "Shuhrat “Oltin zanglamas” romanida nima tasvirlangan?", "options": ["urush davri", "qatag’on davri", "ijodkor va shoirlarning hayot yo’li", "oddiy odamlarning hayot tarsi"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v15_lang_q21", "variant": 15, "subject": "lang", "text": "Shuhrat qaysi romani haqida fikr bildirib, ”Men hayotning atrofida emas, naq ichida bo’lganman” degan edi?", "options": ["“Oltin zanglamas”", "“Shinelli yillar”", "“Jannat qidirganlar”", "“Mashrab”"], "correctAnswer": 0, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v15_lang_q22", "variant": 15, "subject": "lang", "text": "Shuhratning “Mehrol” asarining janrini toping.", "options": ["hikoya", "she’riy to’plam", "roman", "ertak-doston"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v15_lang_q23", "variant": 15, "subject": "lang", "text": "Shuhratning tugallanmay qolgan romanini aniqlang.", "options": ["“Oltin zanglamas”", "“Shinelli yillar”", "“Jannat qidirganlar”", "“Mashrab”"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v15_lang_q24", "variant": 15, "subject": "lang", "text": "“Mashrab” hamda “Zilzila” asarlarining o’rtasida qanday o’xshashliklar mavjud?", "options": ["Shoir", "injener", "dehqon", "Bog’bon"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v15_lang_q25", "variant": 15, "subject": "lang", "text": "Shuhratning “Mardlik afsonasi” balladasida qaysi podshohning niyati yer-suv, mulk, qiron…?", "options": ["To’maris", "Kayxusrav", "Iskandar Zulqarnayn", "Shiroq"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v15_lang_q26", "variant": 15, "subject": "lang", "text": "Shuhratning “Mardlik afsonasi” balladasida to’qqiz marta qo’llangan jumlani toping.", "options": ["Bosh eg", "qon yig’ladi", "g’azab bilan", "Qasam"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v15_lang_q27", "variant": 15, "subject": "lang", "text": "Shuhratning “Mardlik afsonasi” balladasida To’marisning aqlini nimaga o’xshatadi?", "options": ["Shoir", "injener", "dehqon", "Bog’bon"], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v15_lang_q28", "variant": 15, "subject": "lang", "text": "“Chinor” romani muallifi kim?", "options": ["Usmon Nosir", "Asqad Muhtor", "Odil Yoqubov", "Erkin Vohidov"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v15_lang_q29", "variant": 15, "subject": "lang", "text": "Rasul Hamzatovning dadasining kasbi nima edi? etilgan?", "options": ["Shoir", "injener A) “Bizning avlod” B) “She’rlar”", "dehqon", "Bog’bon C) “Kamalak” D) “Rahmat, mehribonlarim"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v15_lang_q30", "variant": 15, "subject": "lang", "text": "Asqad Muxtor qaysi asari orqali katta ijodkorlar O’g’rilik mol deyman, qilaman hazar. nazariga tushib qoladi? Qalbimning parchasi sinmasa agar,", "options": ["“Daryolar tutashgan joyda” Rozimasman, birov hadya etsa zar.", "“Birinchi kitob” She’riy parcha muallifini toping.", "“Opa-singillar” A) R.Hamzatov B) S. Ahmad", "“Po’lat quyuvchi” C) Uvaysiy D) S.Zunnunova"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v16_lang_q1", "variant": 16, "subject": "lang", "text": "Rasul Hamzatov qaysi xalq farzandi hisoblandi?", "options": ["turk", "ozarbayjon", "avar", "guruzin"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v16_lang_q2", "variant": 16, "subject": "lang", "text": "Asqad Muxtorning birinchi qissasi qaysi javobda to’g’ri berilgan?", "options": ["“Daryolar tutashgan joyda”", "“Opa-singillar”", "“Qoraqalpoq qissasi”", "“Buxoroning jin ko’chalari”"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v16_lang_q3", "variant": 16, "subject": "lang", "text": "Asqad Muxtorning birinchi romani qaysi?", "options": ["“Kumush tola”", "“Davr mening taqdirimda”", "“Opa-singillar”", "“Chinor”"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v16_lang_q4", "variant": 16, "subject": "lang", "text": "Asqad Muxtor tarjima qilgan asarni toping?", "options": ["”Manas”", "“Shoh Edip”", "“Faust”", "“Iblis”"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v16_lang_q5", "variant": 16, "subject": "lang", "text": "Asqad Muxtorning “Kumush tolasi” asari qaysi janrda bitilgan?", "options": ["roman", "hikoyalar to’plami", "drama", "qissa"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v16_lang_q6", "variant": 16, "subject": "lang", "text": "Asqad Muxtor “Yo’l” she’rida cheksiz umr ertagi deganda nimani nazarda tutgan edi?", "options": ["daryo", "yulduz", "quyosh nuri", "ijod"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v16_lang_q7", "variant": 16, "subject": "lang", "text": "Asqad Muxtorning quyida bir xil nom bilan ataladigan she’r hamda romanni mavjud?", "options": ["“Davr mening taqdirimda”", "“Yo’l”", "“Chinor”", "“Tug’ilish”"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v16_lang_q8", "variant": 16, "subject": "lang", "text": "Asqad Muxtorning pyesalari qaysi qatorda to’g’ri berilgan?", "options": ["“Muqqana”, “Jinoyat”, “Istanbul fojiasi”", "“Yaxshilikka yaxshilik”, “Samandar”, “Maqrdlik cho’qqisi”", "“Kumush tola”, “Jar yoqasidgi chaqmoq”", "“Inson taqdiri”, “Zar qadri”, “To’ylar muborak”"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v16_lang_q9", "variant": 16, "subject": "lang", "text": "Sofoklning “Shoh Edip” asarni kim o’zbek tiliga tarjima qilgan?", "options": ["Asqad Muxtor", "Cho’lpon", "G’.G’ulom", "Oybek"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v16_lang_q10", "variant": 16, "subject": "lang", "text": "Asqad Muxtorning so’nggi kitobini toping. (eski)", "options": ["“Insongga quluq quladurmen”", "“Tug’ilish”", "“Davr mening taqdirimda”", "“Uyqu qochganda”"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v16_lang_q11", "variant": 16, "subject": "lang", "text": "“Oq choyshabda jilmayib yotgan jahonning udisi” tasviri qaysi she’rda berilgan?", "options": ["Tug’ilish", "Yo’l", "Yulduzim", "Bahor"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v16_lang_q12", "variant": 16, "subject": "lang", "text": "“Farzand” va “So’lmas chechaklar” dostonlarining muallifi?", "options": ["X.Solih", "Shuhrat", "Mirtemir", "Mirmuhsin"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v16_lang_q13", "variant": 16, "subject": "lang", "text": "Mirmuhsining “Me’mor” romanida “Do’zax” deb xalq tomonidan qo’yilgan cho’l nomini aniqlang.", "options": ["Mirzacho’l", "Sahroyi Kabir", "Qizilqum", "Sirdaryo"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v16_lang_q14", "variant": 16, "subject": "lang", "text": "Mirmuhsinning “Me’mor” romanida Me’mor tomonidan “rutubat”li deb qaysi shaharni aytadi", "options": ["Buxoro", "Hirot", "Samarqand", "Marv"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v16_lang_q15", "variant": 16, "subject": "lang", "text": "Quyidagi qaysi shoir kulol oilasida dunyoga kelgan?", "options": ["Mirmuhsin", "Oybek", "A.Qodiriy", "Ch.Aytmatov"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v16_lang_q16", "variant": 16, "subject": "lang", "text": "Mirmuhsinning ilk dostoni nomi qaysi javbda to’g’ri berilgan?", "options": ["“Sheralining bolaligi”", "“Mehrol”", "“Qamar”", "“Qadrdon do’stlar”"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v16_lang_q17", "variant": 16, "subject": "lang", "text": "Mirmuhsinning ilk she’riy romanni toping.", "options": ["“Sodiq va Anor”", "“Ziyod va Adiba”", "“Chodrali ayol”", "“Ovchi bolalar”"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v16_lang_q18", "variant": 16, "subject": "lang", "text": "Mirmuhsin ijodiga tegishli to’g’ri javobni belgilang.", "options": ["“Irmoqlar”", "“Vafo”", "“Qadrdon do’stlar”", "“Yashil qishloq”"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v16_lang_q19", "variant": 16, "subject": "lang", "text": "Mirmuhsinning ilk qissasini toping.", "options": ["“Jamila”", "“Oq marmar”", "“Cho’ri”", "“Qamar”"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v16_lang_q20", "variant": 16, "subject": "lang", "text": "Tungi chaqmoqlar” asari qaysi janrda bitilgan", "options": ["roman", "she’riy roman", "qissa", "hikoya"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v16_lang_q21", "variant": 16, "subject": "lang", "text": ". Mirmuhsinning chet elliklardagi kishilar hayotini ko’rsatishga bag’ishlangan asar qaysi?", "options": ["“Me’mor”", "“Jannat qidirganlar”", "“Chodrali ayol”", "“Jamila”"], "correctAnswer": 0, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v16_lang_q22", "variant": 16, "subject": "lang", "text": "Quyidagilardan Mirmuhsin qalamiga mansub bo’lgan romanlarni toping. 1) “Umid”; 2) “Chiniqish”; 3) “Turon malikasi”; 4) “Ilon o’chi” ; 5) “Chotqol yo’lbarsi”.", "options": ["Xalach", "Karki", "Saqar", "Tollimarjon"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v16_lang_q23", "variant": 16, "subject": "lang", "text": "Mirmuhsinning “Me’mor” romanida yo’l azobiga chiday olmay og’ziga kelgan haqoratli so’zlarni ishlatgan obrazni aniqlang.", "options": ["Zulfiqor", "Zavrak", "G’avvoz Muhammad", "Badia"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v16_lang_q24", "variant": 16, "subject": "lang", "text": "O’.Umarbekovning “Urush farzandi” asari qaysi janrda bitilgan?", "options": ["roman", "hikoya", "pyesa", "qissa"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v16_lang_q25", "variant": 16, "subject": "lang", "text": "Abdulla Avloniy asos solgan 40-maktabda o’qigan va keyinchalik shoir bolib yetishib chiqqan ijodkorni aniqlang", "options": ["O’.Umarbekov", "Shuhrat", "Mirmuhsin", "X.Solih"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v16_lang_q26", "variant": 16, "subject": "lang", "text": "O’.Umarbekov o’z ijodini qaysi janr bilan boshlagan?", "options": ["qissa", "hikoya", "roman", "she’r"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v16_lang_q27", "variant": 16, "subject": "lang", "text": "Birinchi asariyoq “Yilning eng yaxshi hikoyasi” bilan taqdirlangan ijodkor?", "options": ["O’.Umarbekov", "X.Solih", "Mirmuhsin", "Mirtemir"], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v16_lang_q28", "variant": 16, "subject": "lang", "text": "O’.Umarbekovning birinchi asar bu …?", "options": ["“Hikoyalar”", "“Xat tashuvchi”", "“Oltin yaproqlar”", "“Xatingni kutaman”"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v16_lang_q29", "variant": 16, "subject": "lang", "text": "O’.Umarbekovning qalamiga mansub bo’lgan qissa janrdagi asarlarni belgilang. 1) “Yer yonganda”; 2) “Kimnig tashvishi yo’q”; 3) “Cho’li iroq”; 4) Urush farzandi”; 5) “Oq qaldirg’och”", "options": ["1,2,3,4,5", "2,4,5", "1,3,4,5", "2,3,4,5"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v16_lang_q30", "variant": 16, "subject": "lang", "text": "Umarbekovning ko’plab bahslarga sabab bo’lgan asarini toping.", "options": ["“Yoz yomg’iri”", "“Kimning tashvishi yo’q”", "“Sevgim, sevgilim”", "“Odam bo’lish qiyin”"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v17_lang_q1", "variant": 17, "subject": "lang", "text": "Umarbekovning “Sevgim, sevgilim” asari qaysi janrda bitilgan?", "options": ["roman", "hikoya", "qissa", "she’riy to’plam"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v17_lang_q2", "variant": 17, "subject": "lang", "text": "Umarbekov “Shoshma quyosh”, “Kuzning birinchi kuni” kabi asarlar quyidagi qaysi janrda yozilgan?", "options": ["drama", "hikoya", "roman", "qissa"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v17_lang_q3", "variant": 17, "subject": "lang", "text": "Quyidagi qaysi asarda qimor o’yinni tufayli fojia ro’y beradi? iz", "options": ["“Odam bo’lish qiyin”", "“Yoz yomg’iri”", "“Sevgim, segilim”", "“Fotima va Zuhra”"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v17_lang_q4", "variant": 17, "subject": "lang", "text": "Umarbekovning “Sevgim, sevgilim” asari qaysi janrda bitilgan?", "options": ["roman", "hikoya", "qissa", "she’riy to’plam"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v17_lang_q5", "variant": 17, "subject": "lang", "text": "Umarbekovning “Qiyomat qarz” asaridan olingan quyidagi parcha kimga tegishli? “Kutgandan yomon narsa yo’q”", "options": ["Haydarali", "Zebi", "Madumar", "Sarsonboy"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v17_lang_q6", "variant": 17, "subject": "lang", "text": "Umarbekovning “Qiyomat qarz” asarida Sarsonboy otaning ermagi bo’lib kelgan narsa nima edi?", "options": ["nevarasi", "oti", "bozor", "choyxona"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v17_lang_q7", "variant": 17, "subject": "lang", "text": "Umarbekovning “Qiyomat qarz” asarida Sarsonboy otaning o’g’ilini ismi qaysi javobda to’g’ri berilgan?", "options": ["Haydarali", "Ikromjon", "G’ulomjon", "G’ofirjon"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v17_lang_q8", "variant": 17, "subject": "lang", "text": "O’lmas Umarbekovning “Qiyomat qarz” asarida G’ofurjoning qabri quyidagi qayi shaharda?", "options": ["Budapeshda", "Brestda", "Stalingradda", "Moskvada"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v17_lang_q9", "variant": 17, "subject": "lang", "text": "Ermagi choyxona bo’lgan asar qahramoni quyidagi qaysi asarda uchraydi?", "options": ["“Qiyomat qarz”", "“Me’mor”", "“Mehrobdan chayon”", "“Oq kema”"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v17_lang_q10", "variant": 17, "subject": "lang", "text": "Ch.Aytmatovning “Oq kema” qissasida uchraydigan xalq maqolini aniqlang.", "options": ["qarg’a qarg’ani ko’zini cho’qimaydi", "olmaning tagiga olma tushadi", "aytilgan gap otilgan o’q", "qush tilini qush biladi"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v17_lang_q11", "variant": 17, "subject": "lang", "text": "Chingiz Atmatov necha yoshida kotiblikka tayinlanadi?", "options": ["10", "14", "12", "15"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v17_lang_q12", "variant": 17, "subject": "lang", "text": "“…Hech kim o’z-o’zidan yozuvchi bo’lib qolmaydi: Yillar sabog’i, qilingan mehnat, badiiy adabiyotga bo’lgan qiziqish va e’tiqod orqali bunga erishish mumkin”.", "options": ["Ch.Aytmatov", "Mirtemir", "T.Murod", "A.Qahhor _"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v17_lang_q13", "variant": 17, "subject": "lang", "text": "O’n yoshida barcha dehqon zahmatini tatigan ijodkor kim?", "options": ["O’.Umarbekov", "Ch. Aytmatov", "Mirmuhsin", "Mirtemir"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v17_lang_q14", "variant": 17, "subject": "lang", "text": "Ch.Aytmatovning “Oq kema” qissasida bolaning yoshi necha yoshda edi?", "options": ["olti", "yetti", "sakkiz", "to’qqiz"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v17_lang_q15", "variant": 17, "subject": "lang", "text": "Chingiz Aytmatov quyidagi fikrlarni kimga nisbatan aytgan? “U men uchun ertak, doston, qadimiy qo’shiqlarining bitmas-tuganmas xazinasi edi”.", "options": ["otasi", "onasi", "bobosi", "buvasi"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v17_lang_q16", "variant": 17, "subject": "lang", "text": "Ch.Aytmatovning “Oq kema” qissasida bolaning birinchi ertagini kim aytib bergan edi?", "options": ["Mo’min chol", "Baymoq kampir", "Bo’key xola", "bola o’zi to’qib chiqargan"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v17_lang_q17", "variant": 17, "subject": "lang", "text": "Oppoq qayindan yasalgan, bandida kumush qo’ng’iroqcha jaranglab turardi”. Yuqoridagi parcha quyidagi qaysi asardan olingan", "options": ["shaharda", "Jilisoyda", "Shakar ovulida", "Talasda"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v17_lang_q18", "variant": 17, "subject": "lang", "text": "”Oq kema” asarida maktab qayerda joylashgandi?", "options": ["shaharda", "Jilisoyda", "Shakar ovulida", "Talasda"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v17_lang_q19", "variant": 17, "subject": "lang", "text": "Jumlani davom ettiring: “Endi biz uchtamiz: sen, men va…..”?", "options": ["Enasoy", "Issiqko’l", "o’rmon", "Sibir"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v17_lang_q20", "variant": 17, "subject": "lang", "text": "Jamoli chillaning tingjirab, yaltirab n o’tirgan qahramon qaysi javobda to’g’ri ko’rsatilgan?", "options": ["O Zulxumor", "Ra’no", "Ma’suma", "Mehr"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v17_lang_q21", "variant": 17, "subject": "lang", "text": "”Oq kema”asaridagi “chumchuqning iniday “Aziz boshing oyog’imga teng emas…” keladi”gan narsa nima?", "options": ["Go’ro’g’li Avazxonga A)durbin", "ko’lob", "portfe’l", "Bug’uning shoxi B) Avazxon Hasanxonga C) Ravshan Qoraxonga"], "correctAnswer": 0, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v17_lang_q22", "variant": 17, "subject": "lang", "text": "Oq kema” asaridagi osmon bilan yer tutashib D) Hasanxon Qoraxonga ketadigan joy qayer?", "options": ["Enasoy", "Issiqko’l", "o’rmon", "Sibir 3. “Ravshan” dostonida Go’ro’g’li o’g’li Avaznini necha yoshida Xunxordan olib keladi?"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v17_lang_q23", "variant": 17, "subject": "lang", "text": "Oq kema” asarida Sibirga otda qanch amuddatda yetib boorish mumkinligi aytilgan?", "options": ["uni baliqqa aylantirishni", "Bo’key va O’rozqulga beshik olib kelishni", "Oq kemada dadasi bilan uchrashtirishni", "oilasini baxtli qilishni"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v17_lang_q24", "variant": 17, "subject": "lang", "text": "”Oq kema” asaridagi bola va qiz nechanchi kuni", "options": ["og’ir yuk ko’tarmagan", "sovuqda qolmagan dushman qarorgohiga yetib borishdi?", "og’ir gap eshitmagan", "yig’lamagan A)3-kuni B) 5-kuni C)2-kuni D)o’sha kuniyoq"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v17_lang_q25", "variant": 17, "subject": "lang", "text": "Quyidagi xalq maqoli qaysi asarda uchraydi Qizi borning nozi bor.", "options": ["“Ravshan”", "“Mehrobdan chayon”", "“Qiyomat qarz”", "“Me’mor”"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v17_lang_q26", "variant": 17, "subject": "lang", "text": "”Oq kema” asarida bola xayolan Ona bug’udan nimani so’rgan edi? 6. “Ravshan” dostonida quyidagi ta’rif qaysi ot", "options": ["uni baliqqa aylantirishni haqida?", "Bo’key va O’rozqulga beshik olib kelishni 10", "", ""], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v17_lang_q27", "variant": 17, "subject": "lang", "text": "“Ravshan” dostonida sher haybatli, yo’lbars kelbatli, qoplon yurakli, arslon bilakli yigitlar sifatida quyidagi qaysi qahramonlar uchraydi?", "options": ["Go’ro’g’li va Avaz", "Aynoq va Jaynoq", "Avazxon va Hasanxon", "Ersak va Tersak"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v17_lang_q28", "variant": 17, "subject": "lang", "text": "“Ravshan” dostonida Gulanorga sovchi bo’lib Avazxonni oldiga kim borgan edi?", "options": ["Yunus pari", "Misqol pari", "Xon Dalli", "Go’ro’g’li"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v17_lang_q29", "variant": 17, "subject": "lang", "text": "“Ravshan” dostonida yaxshi suratli, shirin so’zli, uralay ko’zli, zehni tez, serfahm qiz sifatida quyidagilardan qaysi biri uchraydi?", "options": ["Zulxumor", "Oqqiz", "Xolbeka", "Gulanor"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v17_lang_q30", "variant": 17, "subject": "lang", "text": "Ravshan” dostonida Shirvon eliga qancha vaqtda yetib borilar edi?", "options": ["ikki oyda", "bir oyda", "uch oyda", "to’rt oyda"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v18_lang_q1", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida Rashan Zulxumorni qaysi bozordan qidiradi?", "options": ["qolpoq", "un-qop", "zargarlik", "gilam"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v18_lang_q2", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida Ravshanni Zulxumorni topshirishda yordam bergan obrazni toping.", "options": ["nashavand", "baxshi kampir", "o’g’illikka olgan kampir", "qushnochlardan biri"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v18_lang_q3", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida bu yog’ida to’qson besh, bu yog’ida to’qson besh – o’n kam ikki yuz kokili bor sifatida ta’riflangan obrazni toping.", "options": ["Oqqiz", "Gulanor", "Zulxumor", "Gulnora"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v18_lang_q4", "variant": 18, "subject": "lang", "text": "Ravshan” dostonida Ravshanga ko’ngli _ ketgan, lekin e’tiborini qozona olmagan qahramon nomi quyidagi qaysi qatorda to’g’ri i berilgan? l", "options": ["Zulxumor", "Gula nor", "Oqqiz", "Biahragul t"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v18_lang_q5", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida Zulxumorni Ravshan bilan yashayotganligi haqidagi ma’lumotini kim Qoraxonga yetkazadi?", "options": ["Oqqiz", "soqchilardan biri", "kanizlaridan biri", "Oqqizning onasi"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v18_lang_q6", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida Zulxumor nima orqali Ravshanni ota-onasiga xabar yetkazadi?", "options": ["kaptar orqali", "mayna orqali", "elchi orqali", "sandiqqa solib yuboradi"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v18_lang_q7", "variant": 18, "subject": "lang", "text": "Asarda tasvir etilayotgan voqea yo harakat sur’ati tezlashgan holatlarda necha bo’g’inli she’rlar qo’llaniladi?", "options": ["olti", "sakkiz", "yetti", "o’n bir"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v18_lang_q8", "variant": 18, "subject": "lang", "text": "Quyidagi qaysi dostonda podshoh darvozabon bilan do’stlashadi?", "options": ["“Mehr va Suhayl”", "“Mardlik afsonasi”", "“Ravshan”", "“Sabayi Sayyor”"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v18_lang_q9", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida Ravshan Shirvon elida otlanganda belida taqib olgan qilichini qayerda yasatgan edi?", "options": ["Isfihonda", "Sherozda", "Turkistonda", "Rumda"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v18_lang_q10", "variant": 18, "subject": "lang", "text": "“Yolg’iz bola yovdan yomon” xalq maqoli quyidagi qaysi asardan olingan?", "options": ["“Mehrobdan chayon”", "“Ravshan”", "“Qiyomat qarz”", "“Mardlik afsonasi”"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v18_lang_q11", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida kampirning katta o’g’lining nonxo’r polvoni qaysi qatorda to’g’ri berilgan?", "options": ["Aynoq kal", "Tersak kal", "Ersak kal", "Jaynoq kal"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v18_lang_q12", "variant": 18, "subject": "lang", "text": "Ravshan” dostonida Ravshanga ko’ngli _ ketgan, lekin e’tiborini qozona olmagan qahramon nomi quyidagi qaysi qatorda to’g’ri i berilgan? l", "options": ["Zulxumor", "Gula nor", "Oqqiz", "Biahragul t"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v18_lang_q13", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida keltirilgan kallar nomi va qilinadigan ishlar bilan joylashtirib chiqing. a) mergan; b) sinchi; s) masxaraboz; d) kallarnig zo’ri; 1) Aynoq; 2) Jaynoq; 3) Ersak; 4) Tersak.", "options": ["1-a; 2-s; 3-b; 4-d", "1-s; 2-b; 3-a; 4-d", "1-d; 2-s; 3-a; 4-b", "1-d; 2-s; 3-b; 4-a"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v18_lang_q14", "variant": 18, "subject": "lang", "text": "“Ravshan” dostonida Shirvon elidagi choyxonaga kirib kelgan Xasanxonni tanigan obraz qaysi qatorda to’g’ri berilgan?", "options": ["Aynoq kal", "Tersak kal", "Ersak kal", "Jaynoq kal"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v18_lang_q15", "variant": 18, "subject": "lang", "text": "Ravshan” dostonida Ishrat devonaning otidan ham yomon ot sifatida uchraydigan otni toping.", "options": ["G’irot", "G’irko’k", "Jiyronqush", "Saman"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v18_lang_q16", "variant": 18, "subject": "lang", "text": "“Qadam og’och” xalq o’yini quyidagi qaysi asarda uchraydi?", "options": ["“Bu – men tug’ilgan tuproq”", "“Mardlik afsonasi”", "“Me’mor”", "“Ravshan”"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v18_lang_q17", "variant": 18, "subject": "lang", "text": "Alisher Navoiy yaratgan devonlarni tartib bilan joyalashtirib chiqing. 1) “Ilk devon”; 2) “Navodir un-nihoya”; 3) “Xazoyin ul-maoniy”; 4) “Badoe ul-bidoya”.", "options": ["1,2,3,4", "1,3,2,4", "1,4,2,3", "1,4,3,2"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v18_lang_q18", "variant": 18, "subject": "lang", "text": "Alisher Navoiy qaysi asarida Husayn Boyqaroni Shoh G’oziy deb ataydi?", "options": ["“Lison ut-tayr”", "“Vaqfiya”", "“Sadi Iskandariy”", "“Hayrat ul-abror”"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v18_lang_q19", "variant": 18, "subject": "lang", "text": "Alisher Navoiyning “Majolis un-nafois” asari nima haqida?", "options": ["tarixda o’tib ketgan shayx va so’filarning hayoti haqida", "aruz vazni haqida", "tazkirachilikka oid", "lug’atshunoslikka oid"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v18_lang_q20", "variant": 18, "subject": "lang", "text": "Alisher Navoiyning turkiy tilda yozgan deyarli barcha lirik she’rlarini qamrab olgan to’plamini aniqlang.", "options": ["“Badoe ul-bidoya”", "“Xazoyin ul-maoniy”", "“Xamsa”", "“Muhokamat ul-lug’atayn”"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v18_lang_q21", "variant": 18, "subject": "lang", "text": "Qaysi asarda “Ilgimdan kelganicha, - deb yozadi Navoiy, - zulm tig’in ushotib (sindirib), 1 mazlum jarohatig’a intiqom marhamini (qasos malhamini) qo’ydum” N", "options": ["durbin", "ko’lob o", "portfe’l", "Bug’uning shoxi"], "correctAnswer": 0, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v18_lang_q22", "variant": 18, "subject": "lang", "text": "Alisher Navoiyning “Xamsa”siga kim yuksak baho beradi?", "options": ["Hasan Ardasher", "Abdurahmon Jomiy", "Lutfiy", "Sharafiddin Ali Yazdiy"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v18_lang_q23", "variant": 18, "subject": "lang", "text": "Alisher Navoiyni aruzga oid asari?", "options": ["“Majolis un-nafois”", "“Muxtasar”", "“Mezon ul-avzon”", "“Muhokamat ul-lug’atayn”"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v18_lang_q24", "variant": 18, "subject": "lang", "text": "Husayn Boyqaro taxtga chiqib davlat ishlarini yuritganida Navoiyni dastlab quyidagi qaysi mansabga tayinlaydi?", "options": ["vazir", "hudaychi", "muhrdor", "mirza"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v18_lang_q25", "variant": 18, "subject": "lang", "text": "Navoiy quyidagi qaysi asarida o’zining yoshlik chog’ida o’zbek va fors shoirlari nazmida 50 ming bayt she’rni yod bilganini yozadi?", "options": ["“Lison ut-tayr”", "“Mahbub ul-qulub”", "“Muhokamat ul-lug’atayn”", "“Vaqfiya”"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v18_lang_q26", "variant": 18, "subject": "lang", "text": "Navoiyning “Mehr va Suhayl” dostonida nima uchun Jobir Suhaylni o’ldirmasdan asir sifatida saqlab turgan?", "options": ["undan qo’rqqanligi uchun", "Suhayldagi jur’at", "Mehrni yaxshi ko’rganligi uchun", "o’ziga do’st qilib olmoqchi bo’lgan edi"], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v18_lang_q27", "variant": 18, "subject": "lang", "text": "Navoiyning “Mehr va Suhayl” dostonidan olingan quyidagi parchada kimning holati tasvirlangan? Ikki muhlik ajab g’am o’ldi anga, Motam ustiga motam o’ldi anga.", "options": ["Suhayl", "Nu’mon", "Navdarshoh", "Mehr"], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v18_lang_q28", "variant": 18, "subject": "lang", "text": "Navoiyning “Mehr va Suhayl” dostonidan olingan quyidagi satirlar kim haqida bitilgan? Kech kelur fikridin eduk g’amnok, Yetmagan anda, bizni etti halok.", "options": ["Mehr", "Jobir", "Suhayl", "Nu’mon"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v18_lang_q29", "variant": 18, "subject": "lang", "text": "Navoiyning “Mehr va Suhayl” dostonidan olingan quyidagi parcha kimning holati haqida? Sayd yetgach ko’zini asrar edi, Ko’rmayin deb o’zini asrar edi.", "options": ["Nu’mon", "Suhayl", "Jobir", "Navdar"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v18_lang_q30", "variant": 18, "subject": "lang", "text": "O’zining bu dunyoda vaqtinchalik mehmon ekanligini anglab, faqat ezgu ishlarni ko’zlovchi ma’nosini bildirgan taxallusni toping.", "options": ["Foniy", "Navoiy", "Uvaysiy", "Maxmur"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v19_lang_q1", "variant": 19, "subject": "lang", "text": "Ilohiy ishqdan mast bo’lgan darvesh ma’nosini bildirgan taxallusni toping.", "options": ["Foniy", "Navoiy", "Uvaysiy", "Maxmur"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v19_lang_q2", "variant": 19, "subject": "lang", "text": "Hofiz unvoni bilan el ichida tanilgan Oxunjon quyidagi qaysi ijodkorning akasi hisoblangan?", "options": ["Maxtumquli", "Uvaysiy", "Saida Zunnunova", "Shuhrat"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v19_lang_q3", "variant": 19, "subject": "lang", "text": "Navoiy aruz bo’yicha ilmini kimdan o’rganadi?", "options": ["Davlatshoh Samarqandiy", "Darvesh Mansur", "Qosim Anvor", "Sayyid Hasan Ardasher"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v19_lang_q4", "variant": 19, "subject": "lang", "text": "Haq va haqiqat, adolat yo’lida navo qiluvchi ma’nosini bildiruvchi taxallusni toping.", "options": ["Farog’iy", "Navoiy", "Uvaysiy", "Maxmur"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v19_lang_q5", "variant": 19, "subject": "lang", "text": "A.Navoiyning “Sab’at-u abhur” asari nima haqida?", "options": ["tilshunoslikka oid", "lug’atshunoslikka oid", "tarixshunoslikka oid", "tazkirachilikka oid"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v19_lang_q6", "variant": 19, "subject": "lang", "text": "Navoiy “Mantiq ut-tayr” asariga javoban “Lison ut-tayr” asarini quyidagi qaysi davrda yaratgan?", "options": ["hayotining so’nggi davrlarida", "ijodining boshida", "ijodining ayni gullagan davrida", "Samarqandda yurgan vaqtida"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v19_lang_q7", "variant": 19, "subject": "lang", "text": "Quyidagi qaysi g’azalda oshiqning zohid bilan o’zaro bahsga kirishishadi?", "options": ["“Sog’indim”", "“Dog’ o’ldi, dog’ o’ldi”", "“Uvaysiman”", "“Tor ko’ngullik beklar”"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v19_lang_q8", "variant": 19, "subject": "lang", "text": "Uvaysiy g’azallarning birida Tilimning zikri-yu, ko’nglimni fikri, azizim, yolg’izim, davlatli sultonim degan jumlalari kim haqida edi", "options": ["Amir Umarxon", "Alloh", "o’g’li", "Nodira"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v19_lang_q9", "variant": 19, "subject": "lang", "text": "O’z she’rlarining birida quyidagi qaysi shoir o’zi yashab turgan kunlarni bir sahob (bulut), davlatni suv yuzidagi hubob (pufakcha) bo’lishni istaydi?", "options": ["Qosim", "Oxundjon", "Nusrat", "Shohaziz"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v19_lang_q10", "variant": 19, "subject": "lang", "text": "Zavqiy taxallusi bilan ijod qilgan shoirning asl ismi nima bo’lgan?", "options": ["Ibrohim", "Ubaydulloh", "Zokirjon", "Furqat"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v19_lang_q11", "variant": 19, "subject": "lang", "text": "”Hajvi ahli rasta”she’rida kim varrakka o’xshatilgan?", "options": ["Qori sumalak", "Shokir qora", "Nazirbek", "Ortuqbacha"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v19_lang_q12", "variant": 19, "subject": "lang", "text": "Zavqiy “Hajv ahli rasta” she’rida Qo’qonlik nechta savdogarni tilga oladi?", "options": ["23 nafar", "42 nafar", "46 nafar", "100 nafar"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v19_lang_q13", "variant": 19, "subject": "lang", "text": "”Hajvi ahli rasta”she’rida kim varrakka o’xshatilgan?", "options": ["Qori sumalak", "Shokir qora", "Nazirbek", "Ortuqbacha"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v19_lang_q14", "variant": 19, "subject": "lang", "text": "Zavqiy she’rlarini, maqolalarini quyidagi qaysi jurnalida chop etilib borgan?", "options": ["“Al Isloh”", "“Al Izhor”", "“Sadoi Farg’ona”", "“Turkiston”"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v19_lang_q15", "variant": 19, "subject": "lang", "text": "Zavqiyning “Ajab ermas” she’rining musammatning qaysi shaklida bitilgan?", "options": ["masnaviy", "muxammas", "musaddas", "muraba"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v19_lang_q16", "variant": 19, "subject": "lang", "text": "Zavqiyning qaysi she’ri asli yetti banddan iborat bo’lsa-da, sho’rolar davrda mustabid tuzum mafkurasiga moslab, to’rt banddan iborat she’r tarzida taqim etiladi?", "options": ["“Ajab ermas”", "“Hajvi ahli rasta”", "“Zamona kimniki”", "“Mo’ncha ko’p”"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v19_lang_q17", "variant": 19, "subject": "lang", "text": "Zavqiyning “Ajab ermas” she’rini to’liq holatga keltirib, uni matbuotda e’lon qilgan olimni toping.", "options": ["Xodi Zaripov", "Akmal Shoahmedov", "Rustamjon Tojiboyev", "Nasimjon Karimov"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v19_lang_q18", "variant": 19, "subject": "lang", "text": "Boshlar uzra soya solsun, Humo yetkur”- parchasi Zavqiyning qaysi she’ridan olingan", "options": ["“Ajab ermas”", "“Ajab zamona”", "“Hajvi ahli rasta”", "“Kajrav zamona”"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v19_lang_q19", "variant": 19, "subject": "lang", "text": "Zavqiy “Ajab ermas” she’rida uchraydigan islom atamasi qanday ijtimoiy tushunchani qamrab olgan?", "options": ["tinchlik, adolat", "poklik, ozodalik", "zamondosh, yurtdosh", "birlik, birdamlik"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v19_lang_q20", "variant": 19, "subject": "lang", "text": "Quyidagi qaysi shoir maktabda Niyozsolih mulla qo’lida ta’lim oladi?", "options": ["Zavqiy", "Turdi", "Maxtumquli", "Muqumiy"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v19_lang_q21", "variant": 19, "subject": "lang", "text": "Qaysi shoirning bobosini ismi ham o’zi ismi bilan bir xil bo’lgan?", "options": ["Zavqiy", "Muqumiy", "Turdi", "Maxtumquli"], "correctAnswer": 0, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v19_lang_q22", "variant": 19, "subject": "lang", "text": "“Va’zi Ozod” deb ataladigan yirik ilmiy risola- doston muallifi kim?", "options": ["Davlatmamad", "Maxtumquli", "Turbat", "Zavqiy"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v19_lang_q23", "variant": 19, "subject": "lang", "text": "Quyidagi qaysi shoirning ijodida Yassaviyning ta’siri, Navoiyga izdoshlik chizgilari yaqqol ko’zga tashlanadi?", "options": ["Zavqiy", "Maxtumuli", "Muqumiy", "Fuzuliy"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v19_lang_q24", "variant": 19, "subject": "lang", "text": "“Qush tilini qush biladi !” xalq maqoli quyidagi qaysi asarda uchraydi?", "options": ["“Mardlik afsonasi”", "“Qiyomat qarz”", "“Oq kema”", "“Mehrobdan chayon”"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v19_lang_q25", "variant": 19, "subject": "lang", "text": "“Mehrobdan chayon” romanida Anvarning otasini qaysi kasb bilan shug’ullanardi?", "options": ["kosibchilik", "bo’yoqchilik", "temirchilik", "bo’zchilik"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v19_lang_q26", "variant": 19, "subject": "lang", "text": "Maxtumquli “Adolat yaxshi” she’rida kimlarni ko’rganda kular yuz bo’lgin deb v yozadi", "options": ["yetimlarni", "chorasiz qullarni", "g’amginlarni", "bolalarni _ i"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v19_lang_q27", "variant": 19, "subject": "lang", "text": "Mehrobdan chayon” romanida “Chillasi charog’ ko’rmagan” iborasi quyidagi qaysi qahramonga nisbatan ishlatiladi?", "options": ["Anvar", "Maxdum", "Nodira", "Salim bo’yoqchi"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v19_lang_q28", "variant": 19, "subject": "lang", "text": "Maxtumquli tasvirlagan “Odam yutar joni yo’q” C) Nodira D) Salim bo’yoqchi nima?", "options": ["Kafan", "Yer", "qabr", "Dunyo"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v19_lang_q29", "variant": 19, "subject": "lang", "text": "Maxtumquli tasvirlagan “Hech bir to’nga", "options": ["Salim bo’yoqchi", "Anorbibi burkanmas” nima?", "Solih Maxdum", "Nodira A)haqiqat B)yolg’on C)ibodat D)o’lim"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v19_lang_q30", "variant": 19, "subject": "lang", "text": "Maxtumqulining qaysi she’rida Go`ro`g`li obrazi uchraydi?", "options": ["“Adolat yaxshi”", "“Turkman binosi”", "“Namasan?”", "“Ko’ngil” _“sig’magan”qofiydosh a"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v20_lang_q1", "variant": 20, "subject": "lang", "text": "“Mehrobdan_ chayon” romanida “Qush tilini qush biladi” maqoli quyidagi qaysi a holatda ishlatilgan", "options": ["Solih maxdum va Muhammad Rajabbek bilan bo’lgan nmunosbati", "Abdurahmon, Kalonshoh va Shahodat muOftiylarning o’zaro suhbatlashishi", "Anvar hamda Sultonalining o’zaro do’stligi", "Nodira hamda Mohlaroyimning munosabati"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v20_lang_q2", "variant": 20, "subject": "lang", "text": "G’ariblik bir darddir, odam o’ldirmas, hayotda lekin kuldirmas” Yuqoridagi parcha quyidagi qaysi asardan olingan?", "options": ["“Adolat yaxshi”", "“Yulduzlar afsonasi”", "“Buzligan o’lkaga”", "“Ravshan” Mehrobdan chayon"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v20_lang_q3", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanida Anvar necha yoshida uchinchi oilani ko’radi?", "options": ["12 yoshida", "8 yoshida", "10 yoshida", "11 yoshida"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v20_lang_q4", "variant": 20, "subject": "lang", "text": "“Bir onadan bir necha xil bola tug’iladi” iqrori quyidagi qaysi asarda uchraydi?", "options": ["“Oq kema”", "“Mehrobdan chayon”", "“Me’mor”", "“Dahshat”"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v20_lang_q5", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanida quyidagi qaysi voqeadan so’ng Maxdum Anvar haqida ichida “Sen odam bo’ladirg’an ko’rinasan”, - deb o’yladi?", "options": ["birinchi maoshini olib kelgandan so’ng", "Muhammad Rajabek tomonidan berilgan sarpo marosimidan so’ng", "xon saroyiga mirzaboshi bo’lganidan so’ng", "maxdumning o’rniga maktab ishlarini to’la qo’lga olgandan"], "correctAnswer": 0, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v20_lang_q6", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanida Anvarning xon saroyiga kelganligi haqida Xudoyorxonga kim xabar beradi?", "options": ["otaliq", "xudaychi", "saroy og’asi", "parvonachi"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v20_lang_q7", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanida uchraydigan “Dunyoda hayotidan qo’l yuvguvchidek tili uzun kishi bo’lmas“ iborasi muallifini toping.", "options": ["Navoiy", "S.Sheroziy", "Yasavviy", "Xudoyorxon"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v20_lang_q8", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanida Anvar qancha vaqt davomida hisobni o’rganadi?", "options": ["olti oy", "bir yil", "ikki yil", "uch oy"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v20_lang_q9", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanida Anvar nomini qo’ygan Nodira necha yoshda edi?", "options": ["10 yoshda", "12 yoshda", "14 yoshda", "16 yoshda"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v20_lang_q10", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanida Anvarning akasining do’stlari qayerlik edi?", "options": ["qo’qonlik", "buxorolik", "namanganlik", "toshkentlik"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v20_lang_q11", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanidan olingan quyidagi parcha qaysi qahramon tilidan aytilgan? “Suygan yorim sen bo’lsang, ko’rgan kunim ne bo’lg’ay”.", "options": ["Anvar", "Abdurahmon", "Ra’no", "Shohodat mufti"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v20_lang_q12", "variant": 20, "subject": "lang", "text": "“Mehrobdan chayon” romanida “Qordan qochilib, yomg’irga tutildi” o’zbek xalq maqoli qaysi qahramon tilidan aytilgan?", "options": ["Sultonali", "Safar bo’zchi", "Shahodat mufti", "Abdurahmon"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v20_lang_q13", "variant": 20, "subject": "lang", "text": "Birinchi kitob “Kecha” egamanlik yillarda qaytadan nashr qilindi. Tagiga chizilgan so’zning izohini toping.", "options": ["mustaqillik", "tinchlik", "qiyinchilik", "sovet tuzumi"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v20_lang_q14", "variant": 20, "subject": "lang", "text": "Cho’lpon “Go’zal” she’rida yorning go’zalligini nimalardan so’raydi? 1) shamoldan; 2) oydan; 3) quyosh; 4) yulduz.", "options": ["1,2,3,4", "1,3,4", "1,2", "1,2,4"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v20_lang_q15", "variant": 20, "subject": "lang", "text": "Cho’lpon “Go’zal” she’rida quyidagi so’zlar qaysi qahramon tilidan aytilgan? Uchradim tushimda, ko’milgan oqqa.", "options": ["yulduz", "shamol", "quyosh", "oy"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v20_lang_q16", "variant": 20, "subject": "lang", "text": "Cho’lpon “Go’zal” she’rida quyidagi so’zlar qaysi qahramon tilidan aytilgan? Uchradim tushimda, ko’milgan oqqa.", "options": ["yulduz", "shamol", "quyosh", "oy"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v20_lang_q17", "variant": 20, "subject": "lang", "text": "Boshimni zo’r ishga berib qo’ybman iborasi Cho’lponning qaysi she’rida uchraydi?", "options": ["“Binafsha”", "“Go’zal”", "“Buzilgan o’lkaga”", "“Xalq”"], "correctAnswer": 0, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v20_lang_q18", "variant": 20, "subject": "lang", "text": "Cho’lponning she’rlarining birida dengizdir, to’lqindir, kuchdir deganda nimani nazarda tutgan", "options": ["xalqni", "ijodni", "gazetani", "maktabni"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v20_lang_q19", "variant": 20, "subject": "lang", "text": "Cho’lponning she’rlarining birida nimani ko’chada pulga sotilganligini aytadi?", "options": ["Binafsha", "mehr", "Vatan", "Or-nomus"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v20_lang_q20", "variant": 20, "subject": "lang", "text": "“Haq yo’li, albatta, bir o’tilgusi… Yuqoridagi parcha qaysi ijdokorga tegishli?", "options": ["A.Qahhor", "A.Qodiriy", "Cho’lpon", "R.Hamzatov"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v20_lang_q21", "variant": 20, "subject": "lang", "text": "Cho’lponning “Go’zal” she’rida yorning go’zalligini tushida ko’rgan timsol?", "options": ["shamol", "quyosh", "yulduz", "oy"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v20_lang_q22", "variant": 20, "subject": "lang", "text": "Cho’lponning qaysi she’rida “Qulog’ingga o’tganlardan ertak to’qiy” misrasi uchraydi?", "options": ["“Binafsha”", "“Go’zal”", "“Buzilgan o’lka”", "“Xalq”"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v20_lang_q23", "variant": 20, "subject": "lang", "text": "Abdulla Qahhorning “Dahshat” hikoyasida Unsin “Koshki arziydigan narsa bo’lsa!...”, - deganda nimani nazarda tutgan edi?", "options": ["bitta qo’yni", "o’limni", "pulni", "mol-u davlatni"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v20_lang_q24", "variant": 20, "subject": "lang", "text": "Abdulla Qahhorning “Dahshat” hikoyasida Unsin uchun bir odamchalik uchun quvvat bo’lgan jumla quyidagi qaysi qatorda to’g’ri berilgan?", "options": ["Ko’pi ketib, ozi qoldi", "Ganjiravonga qaytaman", "o’liklarning joni yo’q", "hammasi yaxshi bo’ladi"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v20_lang_q25", "variant": 20, "subject": "lang", "text": "Abdulla Qahhorning “Dahshat” hikoyasida Unsin “Koshki arziydigan narsa bo’lsa!...”, - deganda nimani nazarda tutgan edi?", "options": ["bitta qo’yni", "o’limni", "pulni", "mol-u davlatni"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v20_lang_q26", "variant": 20, "subject": "lang", "text": "“Begim deguncha bel sinar ekan” o’zbek xalq maqoli quyidagi qaysi asarda uchraydi?", "options": ["“Mehrobdan chayon”", "“Qiyomat qarz”", "“Ahli rasta”", "“O’g’ri”"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v20_lang_q27", "variant": 20, "subject": "lang", "text": "A.Qahhorning “O’g’ri” hikoyasida kimning “tepa sochi tikka bo’ldi”?", "options": ["Mehrobdan chayon", "Dahshat", "O’g’ri", "Kecha va kunduz"], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v20_lang_q28", "variant": 20, "subject": "lang", "text": "Duo bilan qulf ochasigan a’zayimxon obrazi qaysi asiarda berilgan?", "options": ["Mehrobdan chayon", "Dahshat b", "O’g’ri", "Kecha va kunduz a"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v20_lang_q29", "variant": 20, "subject": "lang", "text": "Yo’ldosh Oxunboboyevga shaxsiy kotib bo’lib ishlagan shoir nomini aniqlang.", "options": ["X.Solih", "Hamza", "A.Oripov", "Mirtemir"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v20_lang_q30", "variant": 20, "subject": "lang", "text": "Mirtemir qaysi Samarqandda qaysi ijodkor bilan do’stlashadi?", "options": ["Oybek", "Homil Yoqubov", "Maqsud Shayxzoda", "Hamid Olimjon"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v21_lang_q1", "variant": 21, "subject": "lang", "text": "Mirtemir o’zining qaysi she’rida “Shu kungacha C) Maqsud Shayxzoda D) Hamid Olimjon o’zni cheklab bo’ldim”, - degan iqrorga keladi?", "options": ["“Bu – men tug’ilgan tuproq”", "“Qishloq” 12. Quyidagi qaysi shoir qamoqni Belamorkanal", "“Betobligimda” qurilishida o’tkazgan? A) Shuhrat B) A.Qodiriy", "“Onaginam” C) Mirtemir D) S.Ahmad"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v21_lang_q2", "variant": 21, "subject": "lang", "text": "Mirtemir o’zining “Bu – men tug’ilgan tuproq” she’rida quyidagi qaysi tarixiy podsho nomi berilmagan?", "options": ["oqpodsho", "Amir Temur", "Kayxusrav", "Chingizxon"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v21_lang_q3", "variant": 21, "subject": "lang", "text": "Mirtemir o’zining “Bu – men tug’ilgan tuproq” she’rida yetti ranglik, yarqiroq sifatida ta’riflaydi?", "options": ["kamalakni", "qorako’l terisini", "qishlog’ini tabiatini", "tog’larni"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v21_lang_q4", "variant": 21, "subject": "lang", "text": "Mirtemirning “Toshbu” she’rida Toshbuning nechta farzandi bor edi?", "options": ["1 ta", "2 ta", "3 ta", "farzandi yo’q"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v21_lang_q5", "variant": 21, "subject": "lang", "text": "Quyidagi fikrlarni Seton-Tompsonga kimga aytgan? Ana ko’rdingizmi, qandayulkan hayotiy manbalarga tayanib asar yaratganingizni hech kim bilmaydi?", "options": ["Jon Berrous", "T.Murod", "oshnalaridan biri", "Teodor Ruzvelt"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v21_lang_q6", "variant": 21, "subject": "lang", "text": "Ernest Seton-Tompsonning “Yovvoyi yo’rg’a” asarida zaharli o’t nomi?", "options": ["pechakgul", "loko", "chaqirtikanak", "shiroljin"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v21_lang_q7", "variant": 21, "subject": "lang", "text": "X.Saloh, Erkin Vohidov, Yusuf Shomansur kabi ijodkorlar quyidagi qaysi shoir tomonidan tashkil qilgan adabiyot to’garakka qatnashganlar?", "options": ["G’ayratiy", "A.Qahhor", "Mirtemir", "Turbatiy"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v21_lang_q8", "variant": 21, "subject": "lang", "text": "Xayriddin Saloh qalamiga mansub dostonlarning nomi qaysi qatorda to’g’ri berilgan? 1) “Orzu chashmasi”; 2) “Toshkent bilan suhbat”; 3) “Yangroq hayot”; 4) “Laylo”; 5) “Qasos”.", "options": ["1,3,5", "2,3,4", "1,2,3", "1,2,3,4,5"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v21_lang_q9", "variant": 21, "subject": "lang", "text": "Ernest Seton-Tompsonning “Yovvoyi yo’rg’a” asarida zaharli o’t nomi?", "options": ["pechakgul", "loko", "chaqirtikanak", "shiroljin"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v21_lang_q10", "variant": 21, "subject": "lang", "text": "Montegomer chol qaysi fermadan edi?", "options": ["uchburchak", "jayron", "g’arbiy", "janub sohili"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v21_lang_q11", "variant": 21, "subject": "lang", "text": "X.Saloh “Yulduzlar afsonasi” she’rida quyidagi qaysi yulduz haqida afsona mavjud?", "options": ["Zuhro", "Surayyo", "Mirrix", "Hulkar"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v21_lang_q12", "variant": 21, "subject": "lang", "text": "Ernest Seton-Tompson Jon Berrous bilan suhbatda qaysi hayvon haqida bir necha savollar beriladi?", "options": ["arslon", "tulki", "qushlar", "bo’ri"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v21_lang_q13", "variant": 21, "subject": "lang", "text": "Quyidagi qaysi shoir “Atlantik Monsli” jurnalida Ernest Seton-Tompsonni tanqid qilib, keyinchalik aynan shu jurnalda uni maqtab chiqadi?", "options": ["T.Ruzvelt", "doktor Ross", "Jek London", "Jon Berrous 20"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v21_lang_q14", "variant": 21, "subject": "lang", "text": "Ernest Seton-Tompsonning muzeyida topilgan kundalik necha jilddan iborat bo’lgan?", "options": ["10 jild", "20 jild", "30 jild", "25 jild"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v21_lang_q15", "variant": 21, "subject": "lang", "text": "Doktor Ross qalamiga mansub kitobni aniqlang.", "options": ["“Yovvoyi hayvonlar haqida”", "“Kanada qushlari”", "“Atlantik Monsli” jurnalida Ernestni tanqid qilib maqola bitgan ijdokor", "“Shimoliy hayvonalar”"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v21_lang_q16", "variant": 21, "subject": "lang", "text": "Ernest Seton-Tompsonning qaysi asari uchun “Alanga medali” oltin mukofotini olgan?", "options": ["“Jonivorlar haqida hikoyalar”", "“Yavvoyi hayvonlar haqida”", "“Shimoliy hayvonlar hayoti”", "“Men bilgan jonivorlar”"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v21_lang_q17", "variant": 21, "subject": "lang", "text": "Barmoq vazniga oida quyidagi qaysi hukmda xatolik mavjud?", "options": ["barmoq vaznidagi she’rlarda misralardagi bo’g’inlar miqdori asosiy o’lchov birligi b hisoblanadi", "barmoq she’r tizimida misralarda bo’g’inlar soni bir xil miqdorda takrorlanadi a", "barmoq vaznidagi she’rlar o’zbek adabiyotida ko’p o’rinni egallaydi d", "barmoq she’r tizimida misralarda bo’g’inlarning sifati, ya’ni ochiq-yopiqligi, uzun a qisqaligi muhim hisoblanadi"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v21_lang_q18", "variant": 21, "subject": "lang", "text": "Ernest Seton-Tompson qaysi kitobi uchun “Eliot” oliy darajali oltin medaliga sazovor bo’ldi?", "options": ["“Jonivorlar haqida hikoyalar”", "“Yavvoyi hayvonlar haqida”", "“Shimoliy hayvonlar hayoti”", "“Men bilgan jonivorlar”"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v21_lang_q19", "variant": 21, "subject": "lang", "text": "Ernest Seton - Tompsonning qaysi asari to’rt jilddan iborat?", "options": ["“Jonivorlar haqida hikoyalar”", "“Yavvoyi hayvonlar haqida”", "“Shimoliy hayvonlar hayoti”", "“Men bilgan jonivorlar”"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v21_lang_q20", "variant": 21, "subject": "lang", "text": "She’riy tizimlarda qolipga solingan nutqda nimaga qarab bir-biridan farq qiladi", "options": ["hajmiga qarab", "bo’g’inlar miqdoriga qarab", "nimaning asos sifatida olayotganiga qarab", "qancha davrni o’z ichiga olganiga qarab"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v21_lang_q21", "variant": 21, "subject": "lang", "text": "Ernest Seton - Tompsonning “Shimoliy hayvonlar hayoti” kitobi necha jilddan iborat?", "options": ["2 jild", "4 jild", "3 jild", "5 jild"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v21_lang_q22", "variant": 21, "subject": "lang", "text": "Ernest Seton-Tompsonning hayoti haqidagi ma’lumotlar quyidagi qaysi ijodkor tomonidan tarjima qilingan?", "options": ["A.Oripov", "T.Murod", "Mirtemir", "A.Muxtor"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v21_lang_q23", "variant": 21, "subject": "lang", "text": "Qaysi she’riy vaznda na bo’g’inlar miqdoriga, na turoqlar sonining bir xilligiga rioya qilinadi?", "options": ["erkin", "barmoq", "aruz", "nasriy"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v21_lang_q24", "variant": 21, "subject": "lang", "text": "Agar she’rning boshidan oxirigacha misralardagi bo’g’inlar miqdori bir xil bo’lsa bunday vaznga …?", "options": ["qo’shma vazn deyiladi", "mutlaq vazn deyiladi", "keng vazn deyiladi", "sodda vazn deyiladi"], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v21_lang_q25", "variant": 21, "subject": "lang", "text": "Ernest Seton-Tompsonning “Yovvoyi yo’rg’a” asarida zaharli o’t nomi?", "options": ["pechakgul", "loko", "chaqirtikanak", "shiroljin"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v21_lang_q26", "variant": 21, "subject": "lang", "text": "Quyidagi qaysi asarda shamol och bo’riga yoki changalga tushgan mushukka o’xshatilgan?", "options": ["“Yovvoyi yo’rg’a”", "“Dahshat”", "“Mehrobdan chayon”", "“O’g’ri”"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v21_lang_q27", "variant": 21, "subject": "lang", "text": "Garchi shuncha mag’rur tursa ham Piyolaga egilar choynak, Shunday ekan manmanlik nechun Kibr-u havo nimaga kerak? To’rtlikni turoqini aniqlalng.", "options": ["4+5=9", "6+5=11", "3+8=11", "5+5=10"], "correctAnswer": 3, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v21_lang_q28", "variant": 21, "subject": "lang", "text": "She’rdagi turoqlar, misralar yoki bandlar orasidagi to’xtalishga nima deyiladi?", "options": ["pauza", "ritm", "sitata", "hijo"], "correctAnswer": 3, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v21_lang_q29", "variant": 21, "subject": "lang", "text": "She’riyatda katta pauza quyidagilarning qaysi biri orasida bo’ladi?", "options": ["turoq", "misra", "band", "bayt ROMAN VA UNING TURLARI"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v21_lang_q30", "variant": 21, "subject": "lang", "text": "Quyidagilardan qaysi biri roman-diologiyaga kirmaydi?", "options": ["“Ota”", "“Qon va ter”", "“Yulduzli tunlar”", "“Farg’ona tong otguncha”"], "correctAnswer": 3, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v22_lang_q1", "variant": 22, "subject": "lang", "text": "Muhammad Alining “Ulug’ saltanat” asari roman turining qaysi biriga kiradi?", "options": ["roman-dilogiya", "epopeya", "tetralogiya", "trilogiya"], "correctAnswer": 1, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v22_lang_q2", "variant": 22, "subject": "lang", "text": "Said Ahmadning “Ufq” asaridagi romanlarning nomi qaysi javobda xato berilgan?", "options": ["“Umr daryosi”", "“Qirq besh kun”", "“Hijron kunlarida”", "“Ufq bo’sag’asida”"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v22_lang_q3", "variant": 22, "subject": "lang", "text": "“Farg’ona tong otguncha” asarining muallifi qaysi qatorda to’g’ri berilgan?", "options": ["M.Ismoiliy", "H.Nu’mon", "A.Shorahmedov", "A.Serafimovich"], "correctAnswer": 1, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v22_lang_q4", "variant": 22, "subject": "lang", "text": "S.Ahmadning “Ufq” trilogiyasining barcha kitoblarda qaysi obraz voqealar markazida turadi?", "options": ["Akbarali", "Temur", "G’ulomjon", "Ikromjon"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v22_lang_q5", "variant": 22, "subject": "lang", "text": "“Abay” asarining muallifi qaysi qatorda to’g’ri ko’rsatilgan?", "options": ["M. Avezov", "M.Sholoxov", "L.Tolstoy", "A. Nurpeisov BALLADA"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v22_lang_q6", "variant": 22, "subject": "lang", "text": "Fransuzcha “raqs qo’shig’i” ma’nosini bildiruvchi janr bu…?", "options": ["doston", "ballada", "qasida", "tragediya"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v22_lang_q7", "variant": 22, "subject": "lang", "text": "O’zbek adabiyotida balladalar ko’proq qaysi yo’nalishda bitiladi? d", "options": ["tarixiy-fontastik", "qahramonlik", "sarguzasht", "A va B a"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q8", "variant": 22, "subject": "lang", "text": "Ul ulus jondin ayru yel yanglig’, Sayr etib suv yuzida yel yanglig’. Baytda vosita sifatida quyidagilardan qaysi biri qo’llanilgan?", "options": ["jondin", "sayr etib", "yel", "yanglig’"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q9", "variant": 22, "subject": "lang", "text": "Asos va vositaning qo’llanish yoki qo’llanmasligidan qat’i nazar o’xshamish bilan o’xshatilmish ishtirok etgan o’xshatmish san’atI qanday nomlanadi?", "options": ["kinoya tashbih", "mutlaq tashbih", "muqqayad tashbih", "tanosub"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q10", "variant": 22, "subject": "lang", "text": "Kinoya tashbih deb nimaga aytiladi?", "options": ["asos va vositaning qo’llanish yoki qo’llanimasligidan qati nazar o’xshamish bilan o’xshatilmish ishtirok etgan o’xshatish san’ati", "o’xshtilmishning o’zi saqlanib, o’xshamishga ishora qiladigan o’xshatish san’ati", "asos qo’llanilmaydigan, lekin vosita orqali bilib olishimiz mumkin bo’lgan o’xshatish san’ati", "vosita qo’llanilmaydigan asos qo’llanishi shart bo’lgan o’xshatish san’ati"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q11", "variant": 22, "subject": "lang", "text": "Quyidagi qaysi baytda kinoya tashbih ishlatilgan?", "options": ["Har kishikim birovga qozg’ay choh, Tushgay ul choh aro o’zi nogoh.", "Bo’rini dag’i galadin dur qil, Suv beribon bog’ni ma’mur qil.", "Anda bir shoh hokim-u voliy, Mulki ma’mur-u himmati oliy.", "Ermas alar tufrog’-u, sen nuri pok, Xilqat alarg’a – u sanga – tiyra xok"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v22_lang_q12", "variant": 22, "subject": "lang", "text": "Bo’rini dag’i galadin dur qil, Suv beribon bog’ni ma’mur qil. Baytda nechta kinoya tashbih qo’llanilgan?", "options": ["3 ta", "6 ta", "2 ta", "4 ta CHISTON, QOFIYA VA RADIF"], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q13", "variant": 22, "subject": "lang", "text": "Chiston fors-tojik adabiyotida qanday nom bilan atalgan?", "options": ["bulug’", "ifrot", "g’ulu", "lug’z"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v22_lang_q14", "variant": 22, "subject": "lang", "text": "“Yong’oq” chistonidagi “boshida”,”qoshida” so’zlarida qofiyadagi so’zlarida qaysi tovush raviy bo’la oladi?", "options": ["a unlisi", "d undoshi", "I unlisi", "sh undoshi"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q15", "variant": 22, "subject": "lang", "text": "Qaysi javobda boshqaruvli birikma berilgan?", "options": ["she’r yodlamoq", "qizargan olma", "g‘ishtli imorat", "olcha guli"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q16", "variant": 22, "subject": "lang", "text": "Otli birikma", "options": ["1, 3, 5, 6", "3, 5, 6", "5", "5, 6"], "correctAnswer": 1, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q17", "variant": 22, "subject": "lang", "text": "Kelgusi avlod zakovati va shijoatiga ishonmagan jamiyatning ichi mo’rtdir. Ushbu gapda nechta so’z hokim qismga moslashuv usulida bog’langan?", "options": ["3 ta", "4 ta", "2 ta", "1 ta"], "correctAnswer": 0, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q18", "variant": 22, "subject": "lang", "text": "Moslashuvli so‘z birikmasi berilgan qatorni toping.", "options": ["Navro‘z bayrami", "anketadagi savol", "gap bo‘lagi", "rasm tomosha qilmoq"], "correctAnswer": 2, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q19", "variant": 22, "subject": "lang", "text": "Qaysi gapda so‘z birikmalarining birikish usuliga ko‘ra barcha turi ishtirok etgan?", "options": ["Polvonning qo‘li kuchliroq o‘ziga tortadi.", "Men ular bilan to‘rt marta gaplashdim.", "Ajoyib milliy urf-odatlarimiz odamlarni samimiyatga chorlaydi.", "Shavkatlarning kattagina uzumzor bog‘i bor."], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q20", "variant": 22, "subject": "lang", "text": "Chaqimchining tilidan ilon zahar oladi. Ushbu gapda qanday munosabatli so‘z birikmalari qo‘llangan?", "options": ["1 ta moslashuv, 1 ta boshqaruv, 1 ta bitishuv", "1 ta moslashuv, 2 ta boshqaruv, 1 ta bitishuv", "1 ta moslashuv, 2 ta boshqaruv", "1 ta moslashuv, 1 ta boshqaruv"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q21", "variant": 22, "subject": "lang", "text": "Ikki tomonlama bog‘lanish ro‘y bergan birikmani toping.", "options": ["tezda kelmoq", "o‘z uyim", "choynakdan kattaroq", "diqqat bilan o‘qish"], "correctAnswer": 1, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v22_lang_q22", "variant": 22, "subject": "lang", "text": "Bir kun ko‘zlarimdan qochdi uyqular, Bir kun yuragini ochdi tuyg‘ular. . . Men seni esladim entikib, yonib, Men seni izladim baridan tonib. . . (Nazira as- Salom) Ushbu she’riy parchada qanday munosabatli so‘z birikmalari qo‘llangan? 1) boshqaruv; 2) moslashuv; 3) bitishuv", "options": ["2, 3", "1, 2", "1, 3", "1, 2, 3"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v22_lang_q23", "variant": 22, "subject": "lang", "text": "Bermoq uchun dunyoga sayqal Olam aro odam yaralgan. Ushbu she’riy parchadagi so’z birikmalari necha xil yo'l bilan xosil qilingan?", "options": ["2", "1", "3", "4"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q24", "variant": 22, "subject": "lang", "text": "Hozir ayni damda shu zulm va adovat tikanlari o’zining ilk mevasini berdi. Ushbu gapda nechta moslashuvli so’z birikmalari mavjud?", "options": ["4 ta", "3 ta", "2 ta", "5 ta"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q25", "variant": 22, "subject": "lang", "text": "Moslashuv yo‘li bilan hosil qilingan so‘z birikmasi berilgan qatorni aniqlang.", "options": ["g‘alaba uchun kurashmoq", "tirishqoq o‘quvchi", "do‘stlarni hurmatlash", "mening onam"], "correctAnswer": 1, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v22_lang_q26", "variant": 22, "subject": "lang", "text": "Qaysi javobda bitishuvli birikma berilgan?", "options": ["qizargan olma", "quyosh nuri", "she’r yodlamoq", "tarvuz yemoq"], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q27", "variant": 22, "subject": "lang", "text": "Qaysi javobda bitishuvli birikmalar berilgan?", "options": ["zavqli mehnat, oqilona ish, to‘satdan kelmoq", "oqilona ish, diqqat bilan tinglamoq, maktab hovlisi", "Samarqand ko‘chalari, devor soat, kechki sayohat", "bog‘ga kirmoq, uydan chiqmoq, oqilona ish"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q28", "variant": 22, "subject": "lang", "text": "Jahonda nimaiki oq, unga ona suti timsol; nimaiki jo‘shqin, unga ham ona mehri timsol; nimaiki chidamli, sabr-toqatli, unga ham ona irodasi timsol; kimki pok muhabbat da’vo qilsa, onaning pok qalbi timsol. Berilgan gapda nechta bitishuvli birikma mavjud?", "options": ["3", "4", "5", "2"], "correctAnswer": 0, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q29", "variant": 22, "subject": "lang", "text": "Koinotdagi barcha narsa muayyan va ma’lum qonunga bo‘ysunadi. Ushbu gapda nechta boshqaruvli birikma bor?", "options": ["2 ta", "3 ta", "1 ta", "4 ta"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v22_lang_q30", "variant": 22, "subject": "lang", "text": "Koinotdagi barcha narsa muayyan vama’lum qonunga bo‘ysunadi. Ushbu gapda olmosh qaysi turdagi so‘z birikmasi tarkibida kelgan?", "options": ["boshqaruv", "bitishuv", "moslashuv", "bu gapda olmosh qo‘llanmagan"], "correctAnswer": 1, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q1", "variant": 23, "subject": "lang", "text": "Quyidagi so‘z birikmalarida so‘zlar o‘zaro qanday usul(lar) bilan birikkan? daliliy ma’lumot, ilmiy xulosa, fikrning aniqligi, mantiqiy izchillik", "options": ["bitishuv, moslashuv", "bitishuv", "moslashuv, boshqaruv", "bitishuv, boshqaruv"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v23_lang_q2", "variant": 23, "subject": "lang", "text": "Noto'g'ri mulohazani aniqlang.", "options": ["Barcha so'zlar gramatik ma`noga ega", "Faqat mustaqil so'zlar leksik va gramatik ma`noga ega", "Gramatik ma`no gramatik shakl orqali ifodalanadi", "Xato javob yo'q"], "correctAnswer": 0, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q3", "variant": 23, "subject": "lang", "text": "Uyga oyog'ini yechmasdan ham kirib ketdi. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v23_lang_q4", "variant": 23, "subject": "lang", "text": "XIli-xil va hil-hil so'zlarini manosini toping", "options": ["xil-xil saralangan; hil-hil ezilib pishgan", "xil-xil ezilib pishgan; hil-hil saralangan", "xil-xil bolalar o'yini; hil-hil hijolat bo'lgan", "xil-xil yo'l-yo'l mato; hil-hil ezilib pishgan"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q5", "variant": 23, "subject": "lang", "text": "Taxt uchun kurashish davom etmoqda. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v23_lang_q6", "variant": 23, "subject": "lang", "text": "Nega ustingni kir qilding. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v23_lang_q7", "variant": 23, "subject": "lang", "text": "Aravanin o'qi birikmasida ma`no ko'chishning qaysi turi qo'llagan?", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v23_lang_q8", "variant": 23, "subject": "lang", "text": "Kecha oshda ko'rinmadiz? Ma`no ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v23_lang_q9", "variant": 23, "subject": "lang", "text": "Nutqda bozor so'zi yakshanba kuni o'rnida qo'llanilishi mano ko'chishning qaysi turiga asos bo'ladi?", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q10", "variant": 23, "subject": "lang", "text": "Kasalni yashirsang istimasi oshkor qiladi. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v23_lang_q11", "variant": 23, "subject": "lang", "text": "Ertaga Javoxirlarnikidi o'tirish bo'ladi. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v23_lang_q12", "variant": 23, "subject": "lang", "text": "Qaysi so'zda d tovushining jarangsiz jufti qo'llanishi kerak.", "options": ["fikrni qayd etmoq", "shaharni zabd etmoq", "borishga ahd qilmoq", "joyni band etmoq"], "correctAnswer": 1, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q13", "variant": 23, "subject": "lang", "text": "Toyimiz olma gulida bo'ladi. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v23_lang_q14", "variant": 23, "subject": "lang", "text": "Ting'ir-ting'iringni yeg'ishtir. Ma`no ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v23_lang_q15", "variant": 23, "subject": "lang", "text": "Bu voqea yanvarning oyoqlarida bo'lgan edi. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v23_lang_q16", "variant": 23, "subject": "lang", "text": "Ko'ksimda qo'rg'oshin, yotibman quyosh tig'ida. Ma`no ko'shishning qaysi turi qo'llangan?", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v23_lang_q17", "variant": 23, "subject": "lang", "text": "O'sha Nilufar kuf-suf bilan shug'ullanmaydi. Mano ko'chishning qaysi turi qo'llangan?", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v23_lang_q18", "variant": 23, "subject": "lang", "text": "Keng yaylovga o't ketdimi yondi, yondimi? ''Madaniyat'' istagiga qondimi? Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v23_lang_q19", "variant": 23, "subject": "lang", "text": "Sho'rvoni tuzi o'tkorroq bo'lib qolibdi. Mano ko'chish turini aniqlang.", "options": ["metafora, metonimiya", "metonimiya", "sinekdoha, metafora", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v23_lang_q20", "variant": 23, "subject": "lang", "text": "Ukalaringga ko'z-quloq bo'lgin. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v23_lang_q21", "variant": 23, "subject": "lang", "text": "Sho'rvoni tuzi o'tkirroq bo'lib qolibdi. Mano ko'chish turini aniqlang.", "options": ["metafora, metonimiya", "metonimiya", "sinekdoha, metafora", "vazifadoshlik"], "correctAnswer": 1, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v23_lang_q22", "variant": 23, "subject": "lang", "text": "BU qasidam senga, xalqim. Oq sut-u tuz hurmati. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q23", "variant": 23, "subject": "lang", "text": "O'zaro munosabati jihatidan faqat bir so'z", "options": ["metafora", "metonimiya turkumi doirasida vujudga keluvchi birliklarni", "sinekdoha", "vazifadoshlik belgilang."], "correctAnswer": 1, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q24", "variant": 23, "subject": "lang", "text": "shakldoshlar 5. Uyadosh so'zlar", "options": ["1, 2, 5", "1, 3, 5", "1, 2, 3, 4, 5", "1, 3, 4"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q25", "variant": 23, "subject": "lang", "text": "''Mehr'' hikoyasi Nodir hamidov qalamiga mansub. Mano ko'chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 1, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q26", "variant": 23, "subject": "lang", "text": "Qo'l so'zida metonimik ma`no ko'chgan javobni belgilang.", "options": ["Bu mehribon qo'llar bizni ham chetlab o'tmadi", "Qanday o'g'rilik bo'lsa hammasida sening qo'ling bor", "Shamol darahtlarning qo'llaridan ushlab, uni silkitiardi", "Faqirlarga yordam qo'lini cho'zdim."], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q27", "variant": 23, "subject": "lang", "text": "Ham sinonimi, ham antonimi, ham paronimi ham ommonimi bo'lgan so'zni belgilang.", "options": ["yot", "unim", "dars", "urush"], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q28", "variant": 23, "subject": "lang", "text": "Qaysi qatorda metonimik ma`no ko'chish avval nomi bor narsani qayta nomlagan?", "options": ["tushlik uchun samovarga ketdi", "Kecha marhumning qirqini o'tkazishdi", "Soatimuyda qolib ketibdi", "Men eshshakman shekilli."], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v23_lang_q29", "variant": 23, "subject": "lang", "text": "Shakldoshi, manodoshi bor ammo paronimi yo'q so'zni belgilang.", "options": ["qari", "yuvindi", "yuvundi", "qalin"], "correctAnswer": 1, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v23_lang_q30", "variant": 23, "subject": "lang", "text": "Sifat bilan shakldoshlik qiladigan ravish qaysi gap tarkibida qo'llangan?", "options": ["Hamma chiqishga hozir, birgina ishorangiz kifoya", "U yozganda ham ravon, chiroyli yozadi", "Ertaga o'rtoqlarimga toza maqtanadigan bo'ldim-da", "Vodiylarni yayov kezganda, bir ajib his bor edi manda"], "correctAnswer": 1, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q1", "variant": 24, "subject": "lang", "text": "Misollardan sinekdoha usulida ma`no ko'chgan gapni belgilang.", "options": ["Tungi chiroqlar ko'chalarni kunduzgiday qilib yoritib turubdi.", "Bu gal g'oliblikni Beshariqqa bermaymiz.", "Butun mahalla uning og'ziga qaradi.", "Rayhon gulin taqsam chakkamda turmas"], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q2", "variant": 24, "subject": "lang", "text": "Qaysi gapda qo'llangan ot boshqa ot va sifat bilan shakldoshlik hosil qila oladi?", "options": ["Zoir eng oldin onasi bilan xayrlashib, xayr- xo'shladi", "Dehqonchilik sirini bizga professorlar o'rgatgan emas", "Kampir uning boshini silab, peshonisini yuziga bosib sekin dedi: --qayoqlarda yurgan edingiz", "Zoirjonning ko'zlaridan yosh quyilib kelaverdi"], "correctAnswer": 1, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q3", "variant": 24, "subject": "lang", "text": "Qays gapning kesimi shakldosh so'z bilan ifodalangan?", "options": ["Aslida, do'st ham dushmanning bir turi", "Dasturxon to'rida sharbat totdilar", "Dilim og'ritdi dilimdagilar", "Allohim mehringdan bir xilvat bergin"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q4", "variant": 24, "subject": "lang", "text": "Qaysi gapda o'zi ham, asosi ham, qo'shimchasi ham shakldoshlik hususiyatiga ega bo'lgan so'z qaralmish vazifasida kelgan?", "options": ["Urushdan urushning farqi bor", "Yurtimiz bokschilari doim birinchi bo'lib kelmoqda", "O'zimning ishim boshimdan oshib yotibdi", "Mening shakldoshlarni anglamaganim halaqit beryaptida"], "correctAnswer": 0, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q5", "variant": 24, "subject": "lang", "text": "Qaysi gapda yasama so’z qatnashgan?", "options": ["Kim ota onasini hurmat qilmasa, farzandlaridan ham shuni kutsin", "Kimki birovni xatolarini ko’rib tuzatmasa, unga do’st emas ekan", "Tunga yaqin shaharga yetib keldik", "Kitob bilan o’sgan bola hamda kitobdan uzoq yurgan bolaning o’rtasida farqni sezish qiyin emas"], "correctAnswer": 1, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q6", "variant": 24, "subject": "lang", "text": "Qaysi qatorda bir xil qo'shimchalar qo'shilsa shakldoshligini saqlaydigan so'zlar berilgan?", "options": ["savat, osha, qiy", "palla, bo'sh, ivimoq", "do'l, istak, tutash", "uchuq, soz, qiyiq"], "correctAnswer": 1, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q7", "variant": 24, "subject": "lang", "text": "Qaysi qatordagi gaplarda barcha so'zlarning asosi shakldoshlik xusisiyatiga ega?", "options": ["Boshingga tushgani—peshonnga bitiligani, o'zingni qo'lga ol", "Gul to'la bog'dan yoqimli hid taralardi", "O'zligingdan kechma, adashma—tilga kirdi esib turgan yel.", "Molim, qo'yim, uyim—borimni tikdim, biroq yutuqqa erisha olmadim"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q8", "variant": 24, "subject": "lang", "text": "1. Boshdin quymoq; 2. Boshidin quymoq; Navoiy asarlaridan keltirilgan ushbu birikmalarni ma`nosini aniqlashtiring.", "options": ["1-esidan, yodidan chiqarmoq. 2bahridan o'tmoq, kechmoq", "1-esidan, yodidan chiqmoq. 2- uylanmoq", "1-bahridan o'tmoq, kechmoq, tark etmoq. 2- esidan yodidan chiqmoq", "1- boshidan boshlamoq. 2- boshidan ayirmoq, o'ldirmoq"], "correctAnswer": 0, "difficulty": -0.44, "category": "Adabiyot"},
  {"id": "v24_lang_q9", "variant": 24, "subject": "lang", "text": "Qizartib chehra mayidan oshiqi zoringni kuydirma, Yuzingga bodadin o't solma, gul uzoringni kuydirma. Baytda nechta manodoshlik uyasi qo'llangan?", "options": ["2", "3", "4", "5"], "correctAnswer": 1, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v24_lang_q10", "variant": 24, "subject": "lang", "text": "Sinonim so'zlarga sinonim qo'shimchalar qo'shib yangi hosil qilingan sinonimlarni aniqlang", "options": ["husndor, ko'rkli", "gapdon, so'zamol", "toldi charchagan", "tilchi, tilshunos"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q11", "variant": 24, "subject": "lang", "text": "kiyim boshi qurama, maqsadi bittadir. Qurama so'zining manosini toping.", "options": ["har xil", "shohona", "oddiy", "juldir, eski"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q12", "variant": 24, "subject": "lang", "text": "Dominant so’zning xususiyatlari xato berilgan javobni toping.", "options": ["boshqalarga nisbatan ko’proq ishlatiladi", "ko’proq ilmiy uslubda ishlatiladi", "boshqasiga erkin alamasha oladi", "hissiy boyoqsiz bo’ladi"], "correctAnswer": 1, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v24_lang_q13", "variant": 24, "subject": "lang", "text": "Qaysi qatorda berilgan juftlik o'zaro zid manoli hisoblanmaydi?", "options": ["bahor—kuz", "aqlli—aqlsiz", "tong—shom", "landavur—mehnatkash"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v24_lang_q14", "variant": 24, "subject": "lang", "text": "O’zora sinonim so’zlardan qaysi birlari yaqin so’ziga sinonim bo’ladi?", "options": ["darrov", "jadal", "tez", "shaxdam 6. Quyidagi sinonimlarni o'sib borish tartibida joylashtiring."], "correctAnswer": 2, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v24_lang_q15", "variant": 24, "subject": "lang", "text": "Quyidagi sinonimlarni o'sib borish tartibida", "options": ["ilg'or", "do'st joylashtiring.", "xushqat", "sayoz"], "correctAnswer": 0, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v24_lang_q16", "variant": 24, "subject": "lang", "text": "Qaysi banddada paronimlarni qo’llash bilan bog’liq xatolikka yo’l qo’yilgan?", "options": ["Tushda ko’rsang ganch debdilar ilonni", "Hushda ko’rsang yanch debdilar ilonni", "Rahmon aytur o’ldir, sindir, ol jonin", "Shayton aytur qo’rib yotar o’ljani"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v24_lang_q17", "variant": 24, "subject": "lang", "text": "Qaysi qatorda manodosh so'zlar manoni kuchaytirish vazifasini bajargan?", "options": ["yig'latdi demaki, siqtadi meni", "Gulshanda gullarni tebratar sabo, Adashgan yo'lchiday kezib yurar yel", "bir shirin so'z odamga asalday shirin tuyular 17", "Minglab gulistonga, chamanga,bahuzur ko'rk bo'lur bu Zuhraxon."], "correctAnswer": 0, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q18", "variant": 24, "subject": "lang", "text": "Qaysi maqolda poronimlar bilan bog’liq xatolik bor?", "options": ["o’zingdan chiqqan baloga, qayga borarsan da`voga", "O’zga yurtda sulton bo’lguncha, o’z yurtingda cho’pon bo’l", "Asl aynimas, aynisa ham chirimas", "Tekinning sho’rvasi tatimaydi"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q19", "variant": 24, "subject": "lang", "text": "Qaysi javobda paremologik birlik qo’llangan?", "options": ["kuch adolatdadir", "avval o’yla, keyin so’yla", "tulki qiziga to’y berdi", "etalab turib, tezda darsingni qilgin"], "correctAnswer": 2, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v24_lang_q20", "variant": 24, "subject": "lang", "text": "Faqat argo so’zlar berilgan javobni belgilang.", "options": ["qaychi(taftishchi), jondor (bo’ri)", "loy(pul), olamponoh (shoh)", "yakan(pul), manzirat(mulozamat)", "kolxo’z(chiptasiz yo’lovchi), novcha(aroq)"], "correctAnswer": 3, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q21", "variant": 24, "subject": "lang", "text": "Qaysi gapda so’z qo’llash bilan bog’liq xatolik bor?", "options": ["Do’stlarim orasida asili ham shu yigit bo’ladi", "Asl basharangni boshqalar ham ko’rib qo’ysin", "Bizda faqat asil molar bilan savdo qilinadi", "Asl maqsading shu ekanda, seni ,yolmog’iz"], "correctAnswer": 1, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q22", "variant": 24, "subject": "lang", "text": "Ro’molimni olibsan, olib dorga slibsan Ro’molimni berolmay, uvolimga qolibsan Ushbu parchada dor so’zining ma`nosi qaysi variantda to’g’ri ko’rsatilgan?", "options": ["arqon va yog’ochlardan iborat dorvozlik qurilmasi", "kishini osib o’dirish uchun o’rnatiladigan maxsus qurilma", "kiyi quritish uchun tortiladigan arqon", "kiyim ilish uchun shiftga parallel tortiladigan arqon"], "correctAnswer": 0, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q23", "variant": 24, "subject": "lang", "text": "Mening kasalligimda Oysha issiq-sovig’imdan xabar olmadi? Ma`no ko’chshining qaysi turi qo’llangan", "options": ["metafora", "metonimiya", "vazifadoshlik", "snekdoha"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v24_lang_q24", "variant": 24, "subject": "lang", "text": "Paronimlarni qo’llash bilan bog’liq xatlik qaysi gapda kuzatiladi?", "options": ["U baland bolaxonali uyda istiqomat qiladi", "Nabijon ham lomni azot ko’tardi-da, chorbog’ sari yura ketdi", "Iskandar aka, bir qo’lida latta, bir qo’lida bo’r, angrayib qoldi", "Dilgir dilni shod etish, nohaq yiqilganni suyash— mardning ishi"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q25", "variant": 24, "subject": "lang", "text": "Tekin yegan—ko’zga tikan . Ostiga chizilgan so’zning manosini belgilang", "options": ["ko’zga yamon ko’rinadi", "ko’zga yaqin", "ko’zidan ayriladi", "ko’zga cho’p suqadi"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v24_lang_q26", "variant": 24, "subject": "lang", "text": "Yuklama bilan shakldoshlik hosil qilmaydigan qo’shimcha ishtirok etgan so’zni belgilang.", "options": ["gullagan", "suvsadingmi", "qo’rqoqlik", "bolaginam"], "correctAnswer": 1, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v24_lang_q27", "variant": 24, "subject": "lang", "text": "Bugun menga kechki ovqat olib qo’ymang Iroda meni choyga taklif qilgan. Ma`no ko’chishning qaysi turi qo’llangan?", "options": ["metafora", "sinekdoha", "metonimiya", "vazifadoshlik"], "correctAnswer": 1, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v24_lang_q28", "variant": 24, "subject": "lang", "text": "Ot va fel so’z turkumlari doirasida shakldoshlik hosil qiluvchi so’z berilgan javob qaysi?", "options": ["yanglish", "erish", "tutash", "qayish"], "correctAnswer": 1, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v24_lang_q29", "variant": 24, "subject": "lang", "text": "Qaysi banddada paronimlarni qo’llash bilan bog’liq xatolikka yo’l qo’yilgan?", "options": ["Tushda ko’rsang ganch debdilar ilonni", "Hushda ko’rsang yanch debdilar ilonni", "Rahmon aytur o’ldir, sindir, ol jonin", "Shayton aytur qo’rib yotar o’ljani"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v24_lang_q30", "variant": 24, "subject": "lang", "text": "Asil nusxa 5. Asil shoyi 6. Asil sabab", "options": ["1, 4, 6", "1, 2, 3, 4, 5, 6", "1, 2, 3, 5", "1, 5"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v25_lang_q1", "variant": 25, "subject": "lang", "text": "Qaysi qatordagi metonimik ma`no ko’chishi avval nomi bor narsani yana qayta nomlagan?", "options": ["Otam tushlik uchun samovorga ketdi", "Kecha marhumning qirqini o’tkazdik", "rengen nurlari xam juda zararli", "sigir suvda suza oladimi"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v25_lang_q2", "variant": 25, "subject": "lang", "text": "Izohli lug’atlar so’zning tanlaishiga ko’ra qanday turlarga bo’linadi?", "options": ["izohli va izohsiz", "umumiy va tarmoqli", "bir tilli va ko’p tilli", "ilmiy va kasbiy"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v25_lang_q3", "variant": 25, "subject": "lang", "text": "Iroda, aftidan, shuni aytmoqchi emas edi, shekilli, noiloj ha dedi. Atash ma`nosi yo’q nechta so’z qo’llangan?", "options": ["6", "2", "4", "3"], "correctAnswer": 1, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v25_lang_q4", "variant": 25, "subject": "lang", "text": "Qulog’ing tom bitganmi? Qaysi qatordagi tom so’zi berilgan gapdagi tom so’ziga shakldosh hisoblanmaydi?", "options": ["Tuyaga qanot bitsa, tomingni buzadi", "Lug’atning ikkinchi tomi juziy kamchiliklarga bag’ishlangan", "Zoir tom ma`noda “superqahromon” bo’lishni orzu qilari", "Sevgini xor qilganni ko’zlaridan tinmay yosh tomar"], "correctAnswer": 2, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q5", "variant": 25, "subject": "lang", "text": "Umumlashtirish ma`nosini ifodalagan juft so’zni topng.", "options": ["qishin-yozin", "idish-tovoq", "bugun-erta", "tez-tez 20. Qaysi qatorda iboralarning manolari to’g’ri izohlangan? 1. oyog’I tortmadi 2. Oyog’idan tortdi"], "correctAnswer": 1, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v25_lang_q6", "variant": 25, "subject": "lang", "text": "Oyog’ini tortdi a. umuman bormay qo’ydi b. borishga ko’ngli bo’lmadi d. yomon ishga jalb qildi", "options": ["1-b, 2-d, 3-a", "1-a, 2-d, 3-b", "1-b, 2-a, 3-d", "1-d, 2-b, 3-a"], "correctAnswer": 0, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q7", "variant": 25, "subject": "lang", "text": "Qaysi banddagi so’zlarning barchasi shakldoshlik xususiyatiga ega?", "options": ["qazi, qo’zi, qori", "sur, qur, yur", "burama, qaytarma, qazilma", "to’la, tuna, toza"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q8", "variant": 25, "subject": "lang", "text": "Issiqda uzoq yo’l yurib, …. Nuqtalar o’rniga mos iborani qo’ying.", "options": ["yuragim kuydi", "yuragim tutday to’kildi", "yuragim to’kildi", "yuragim chopdi 23. 1. Hazilning tagi zil"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q9", "variant": 25, "subject": "lang", "text": "Zil yukni bir o’zi ko’tardi Ushbu gapladagi zil so’ziga to’g’ri tasnif berilgan javobni belgilang.", "options": ["ikki so’zning shaklan teng kelishi", "ikki so’zning shaklan va ma`noda teng kelishi", "bir so’zning o’z va ko’chma ma`nolari", "bir so’zning ikki xil bosh ma`nosi"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q10", "variant": 25, "subject": "lang", "text": "Lo’y bo’lmoq iborasining ma`nosini ko’rsating.", "options": ["Uyatdan mulzam bo’lmoq", "qora bo’lmoq, yomon otliqqa chiqmoq", "erib ketmoq, himmati jo’shmoq", "yemagan somsaga pul to’lamoq"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q11", "variant": 25, "subject": "lang", "text": "Bir qarasam har shevangda ming jilolar, Har novdangda har mevangda ming jilolar Ikkita jarangli tovush qatnashgan bo’g’inlar soni nechta?", "options": ["13", "5", "9", "3"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q12", "variant": 25, "subject": "lang", "text": "O’zbek tilida sirg’aluvchi til undoshlari nechta?", "options": ["12 ta", "10 ta", "9 ta", "7 ta"], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q13", "variant": 25, "subject": "lang", "text": "Bizning mahallada internet yo’q. Bizning “internet” mahalla—ayollari. Ma`no ko’chish turini aniqlang.", "options": ["metafora", "metonimiya", "sinekdoha", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v25_lang_q14", "variant": 25, "subject": "lang", "text": "Qaysi gapda asosiga –q qo’shimchasini qo’shib ot yasalganda fonetik hodisa kuzatiladigan so’z qatnashgan?", "options": ["Minnatli to’shingdan sovigan oshim yaxshi", "Onasi qimizak yesa qizining tishi qamashadi", "Isinmadim olovingga, ko’r bo’ldim tutuningga", "Eskisini yamaguningcha esing ketadi"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q15", "variant": 25, "subject": "lang", "text": "Qaysi so’zlardagi barcha undoshlar jarangli til undoshlari hisoblanadi?", "options": ["bambuk", "g’amgin", "dabir", "jarayon"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q16", "variant": 25, "subject": "lang", "text": "Mahmud Koshg’ariy haqida noto’g’ri mulohazani belgilang.", "options": ["U turkiy til gramatikasini ishlab chiqqan birinchi olim hisoblanadi", "Turkcha-arabcha lug’atning birinchi namunasi uning nomi bilan bog’liq", "O’z asarida turkiy tildagi so’zlarni ma`nosini arab tilida izohlaydi", "“Devoni lug’ati turk” asarida XI asrgacha yashagan turkey va forsiy ijodkorlar to’g’risada malumot beradi"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v25_lang_q17", "variant": 25, "subject": "lang", "text": "Qaysi qatorda poronimlar qo’llash bilan bog’liq xatolik bor?", "options": ["Bilagi zo’r birni yiqar", "Tongi va tungi seanslar yo’lga qo’yilgan", "Xo’b ish qilibsiz lekin", "U soy tomonga ketti"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v25_lang_q18", "variant": 25, "subject": "lang", "text": "dab-durustdan, dar-badar, dam-badam, diqqi- nafas, dasturul-amal so’zlaridan nectasi to’g’ri yozilgan?", "options": ["1 ta", "4 ta", "2 ta", "3 ta 21"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v25_lang_q19", "variant": 25, "subject": "lang", "text": "To’g’ri yozilgan so’zni aniqlang.", "options": ["AQShdan", "AQSh dan", "AQSHdan", "AQSH dan"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v25_lang_q20", "variant": 25, "subject": "lang", "text": "ssenariy, suiiste`mol, sujet, suflor, subekt so’zlaridan nechtasi to’g’ri yozilgan?", "options": ["barchasi", "1", "2", "3"], "correctAnswer": 1, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v25_lang_q21", "variant": 25, "subject": "lang", "text": "Qaysi qatorda paronim so’zlarni yanglish qo’llash bilan bilan bog’liq xatolik mavjud?", "options": ["Bizni xoli qoldiring", "Qo’lga tushdim, bandi bo’ldim", "Palovning kiftini keltirib yuboribsiz lekin", "Umumiy qimmati 1000 dolarga teng ekan"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q22", "variant": 25, "subject": "lang", "text": "Qaysi gapda fonetik yozuv qoidasi asosida yoziluvchi yasama ot mavjud?", "options": ["Yuragingni menga och: dardingni olay.", "Ko’zlarini ishqalab yotog’iga kirib ketdimi?", "Keragida suvga otasan, qimirlashin kutib o’tirasan", "Qishning sovig’iga chidab bo’lmayabdi"], "correctAnswer": 0, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q23", "variant": 25, "subject": "lang", "text": "O’zbek alifbosidagi nechta undosh yakka holatda qo’shimcha bo’lib kela oladi?", "options": ["13 ta", "12 ta", "14 ta", "10 ta"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q24", "variant": 25, "subject": "lang", "text": "Malika dunyodan o’tgach, unga bag’ishlab shoh “Tojmahal”ni qurdirdi. Ammo Shohjahonni xavotirga solgan hodisalar ro’y berib, o’z o’g’li Avrangzeb otaga qarshi isyon ko’tardi. Taxtni egallagach, otasini qamoqqa, erksizlikka mahkum etdi. Fonetik hodisalar soni nechta?", "options": ["6 ta", "4 ta", "7 ta", "5 ta"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q25", "variant": 25, "subject": "lang", "text": "To’rt farzand ko’rdi, birin otin Layli atadi? Fonetik hodisalar soni nechta?", "options": ["1", "2", "3", "yo’q"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v25_lang_q26", "variant": 25, "subject": "lang", "text": "Buxgalter, bug’u, boyoqish, birtalay, birato’la, biryo’la so’zlaridan nechtasi imloviy xato yozilgan?", "options": ["1", "2", "3", "barchasi to’g’ri yozilgan"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v25_lang_q27", "variant": 25, "subject": "lang", "text": "juziy, jonajon, jo’jaxo’roz, jingirdob, jangovor, jigar rang so’zlaridan nechtasi to’g’ri yozilgan?", "options": ["4", "3", "1", "2"], "correctAnswer": 0, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v25_lang_q28", "variant": 25, "subject": "lang", "text": "Ishtoni yo’q tizzasi yirtiqqa kulibdi Ma`no ko’chish turini aniqlang", "options": ["metafora", "sinekdoha", "metonimiya", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v25_lang_q29", "variant": 25, "subject": "lang", "text": "Qaysi gapda qo’llangan undoshlarning barchsi qo’shimchalar bila shaklan tenglik hosil qiladi?", "options": ["Nachora, mat ohm nasiya bo’ldi", "Saloming bo’lmaganda yamlamay yutardim", "Bo’lar bola boshidan malum", "Shunchalik qiyinmi qanoat qilish"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v25_lang_q30", "variant": 25, "subject": "lang", "text": "Qulog’ing tom bitganmi? Man` ko’chish turini aniqlang.", "options": ["metafora", "sinekdoha", "ko’chish yo’q", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v26_lang_q1", "variant": 26, "subject": "lang", "text": "Ochiq bo’g’inida chuqur til orqa, jarangli undosh qo’llangan yasama so’zni aniqlang.", "options": ["serg’avla", "qaramlik", "beg’araz", "xavotir"], "correctAnswer": 2, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q2", "variant": 26, "subject": "lang", "text": "Eskirgan erik so’zining ma`nosini aniqlang.", "options": ["mehnat, mashaqqat", "kasb, hunar", "mard, botir", "yov, dushman 14. Asosga qo’shimcha qo’shilganda asos tarkibida tovush o’zgarishlari kuzatiladi?"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v26_lang_q3", "variant": 26, "subject": "lang", "text": "Berilgan qaysi so’zning tarkibi asosga qo’shimcha qo’shilganda tushib qolishi mumkin bo’gan tovushlardan tuzilmagan?", "options": ["umida", "mutant", "antenna", "tun"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q4", "variant": 26, "subject": "lang", "text": "–v 2. –illa 3. –ar 4. –la 5. ay", "options": ["1, 2, 3, 4, 5", "1, 5", "1, 4, 5", "1, 3, 4, 5 I"], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v26_lang_q5", "variant": 26, "subject": "lang", "text": "Menga bir burda non bo’lsa bas degan so’zi haman yodimda. Ma`no ko’chish turini aniqlang.", "options": ["metafora", "sinekdoha", "metonimiya", "vazifadoshlik"], "correctAnswer": 1, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q6", "variant": 26, "subject": "lang", "text": "Boshing egib, ta`zim ayla, shukrona ayt. Seni guldek erkalagan chama uchun. Osmonlarda yurgan bo’lsang, tuproqqa qayt, Aytgil do’stim nima qildik vatan uchun Yozuv tamoillari bo’yicha tahlil qiling.", "options": ["2 ta fonetik, 2 ta tarixiy yozuv", "1 ta fonetik 1ta tarixiy", "1 ta fonetik 2 tarixiy", "2 ta fonetik, 1 ta tarixiy"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v26_lang_q7", "variant": 26, "subject": "lang", "text": "Men vattanni na kitob, na Jaridan o’rganganman. Mamolarim yuzidagi Xaritadan o’rganganman. Ma`no ko’chish turini aniqlang", "options": ["metafora", "sinekdoha", "metonimiya", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v26_lang_q8", "variant": 26, "subject": "lang", "text": "Yuklama bilan shakldoshlik hosil qiladigan qo’shimchali so’zni toping.", "options": ["gullagan", "qaltiroq", "keltiringlar", "suvsadingmi"], "correctAnswer": 1, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q9", "variant": 26, "subject": "lang", "text": "To’g’ri yozilgan so’zni aniqlang.", "options": ["AQShdan", "AQSh dan", "AQSHdan", "AQSH dan"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v26_lang_q10", "variant": 26, "subject": "lang", "text": "Dukullamoq 4. Jixoz 5. notovon", "options": ["1, 2, 3", "3, 4, 5", "2, 3", "2, 3, 4"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v26_lang_q11", "variant": 26, "subject": "lang", "text": "Qarg’a aslo kaklikka teng kelolmas, Arslongina kuchli fildan yengilmas Fonetik hodisalar sonini aniqlang", "options": ["4", "3", "5", "1"], "correctAnswer": 0, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q12", "variant": 26, "subject": "lang", "text": "Kasal deydigan joyi ham qolmagan, o’rnidan turib ham yuradi, lekin doktorlar negadir javob bermay ushlab turishibdi. Fonetk yozuvda yozilgan so’zlar soni?", "options": ["2", "1", "3", "yo’q"], "correctAnswer": 1, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v26_lang_q13", "variant": 26, "subject": "lang", "text": "Javohirning xonasidan chiqdi, rangi devor edi Ma`no ko’chish turini aniqlang.", "options": ["metafora", "sinekdoha", "metonimiya", "vazifadoshlik"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q14", "variant": 26, "subject": "lang", "text": "U hozirgi bir necha shoirlarning eski shaklda, bachkana mazmuni she`rlaridan misollar ko’rsatib, majlisni tugatdi Ma`no ko’chish turini aniqlang.", "options": ["metafora va metonimiya", "sinekdoha", "metonimiya", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v26_lang_q15", "variant": 26, "subject": "lang", "text": "Shu payt ko’rpani qayirib ushlagan oq nozik qo’llari bilan latif burning o’ng tomonida, tabiatning nihoyatda usta qo’li bilan qo’ndirilg’an xolini qashidi va boshini yostiqdan olib o’lturdi Fonetik yozuvda yozilgan so’zlarda qaysi undosh turi ishtirok etmagan?", "options": ["til oldi undoshi", "til orqa undoshi", "sonor", "lab-tish undoshi"], "correctAnswer": 3, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q16", "variant": 26, "subject": "lang", "text": "Bay-bay-bay, yaxshi sharbat ekan-da, siz tomoq yedingizmi? Ma`no ko’chish turini aniqlang.", "options": ["metafora", "sinekdoha", "metonimiya", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v26_lang_q17", "variant": 26, "subject": "lang", "text": "Tor unlilar bilan farqlanuvchi shakldosh so’zlarni aniqlang.", "options": ["bot, but", "burushgan, burishgan", "oxir, oxur", "sur, sir"], "correctAnswer": 3, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v26_lang_q18", "variant": 26, "subject": "lang", "text": "Qaysi gapda sifatdosh ishtirok etgan?", "options": ["Zinapoyalar bo‘ladi, juda istagan odam o‘shalardan yurib suv bo‘yigacha tushaveradi. (P.Qodirov)", "Tong xo‘rozi qichqirgach mehmon qo‘zg‘aldi. (G‘.G‘ulom)", "Uning maqsadi Yo‘lchi bilan uchrashuv, albatta. (Oybek)", "Ixtiyorsiz oldinga intildi-yu, bir nima demoqqa chog‘landi, lekin maxdum o‘ng qo‘lini ko‘tardi. (M.Ismoiliy)"], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q19", "variant": 26, "subject": "lang", "text": "Qaysi javobda bog‘lovchi, ko'makchi, yuklamalarga ikkitadan misol keltirilgan?", "options": ["ammo, hatto, sayin, ya’ni, tufayli, uzra", "sari, hatto, qadar, lekin, tufayli, uzra", "va, basharti, qadar, chunki, hatto, faqat", "biroq, chunki, faqat, naq, uchun, kabi"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q20", "variant": 26, "subject": "lang", "text": "Qaysi javobda tarkibidagi kelishik qo‘shimchalarini ko‘makchilar bilan almashtirish mumkin bo‘lgan so‘z birikmalari to‘g‘ri ko‘rsatilgan? 1) olchaning guli; 2) shoshmasdan yurmoq; 3) chapga burilmoq; 4) mashinada kelmoq; 5) ukasiga olmoq; 6) uyalganidan kelmoq", "options": ["naq, negaki, sayin, atigi, hamda, uzra", "nahotki, basharti, qadar, balki, hatto, faqat", "nahotki, hatto, sayin, ya’ni, tufayli, uzra", "atigi, hatto, naq, mabodo, tufayli, uzra"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q21", "variant": 26, "subject": "lang", "text": "Ushbu misollarda qo'llangan avval so‘zi qaysi qatorda to‘g ‘ri izohlangan? 1) Bu keng xonaga G‘ulomjon avvallari ham ko‘p kelgan edi. 2) Bundan to‘rt yil avval u yerlar cho‘l edi. 3) Mana so‘nggi xotira: ikki yarim yil avval mehribon ona uni shaharga uzatgandi. 4) Tirikchiligimiz avval qanday bo‘lgan bo‘lsa, hozir ham shunday.", "options": ["1, 3 - mustaqil so‘z; 2, 4 - , vazifadosh ko‘makchi", "2, 3 - mustaqil so‘z; 1, 4 - vazifadosh ko‘makchi", "1, 4 - mustaqil so‘z; 2, 3 - vazifadosh ko‘makchi", "2, 3, 4 - mustaqil so‘z; 1 - vazifadosh ko'makchi"], "correctAnswer": 1, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q22", "variant": 26, "subject": "lang", "text": "Qaysi gapda qaratqich qo'llanmagan", "options": ["Gapingizga tushuna olmayapman", "O'zbekiston-Vatanim manim", "Odam olasi ichida bo'ladi", "Keting bu yerdan, shayton malaylari"], "correctAnswer": 3, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q23", "variant": 26, "subject": "lang", "text": "Jo‘nalish kelishigidagi ismlar bilan birga qo‘llana oladigan ko'makchilar berilgan qatorni toping.", "options": ["ko'ra, qaramay, yarasha, bo'ylab, muvofiq", "qaramay, asosan, doir, tomon,, uzra ’", "ko‘ra, yarasha, asosan, qarab,' sari", "tomon, yarasha, muvofiq, doir, asosan"], "correctAnswer": 2, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q24", "variant": 26, "subject": "lang", "text": "Ko‘makchilar bilan birga kelgan so'zlar odatda qaysi kelishik shakllarida bo‘lmaydi?", "options": ["qaratqich va tushum", "tushum va o‘rin-payt", "bosh va qaratqich", "jo'nalish va chiqish"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q25", "variant": 26, "subject": "lang", "text": "Donolar deydi: «Soy qanchalik tez oqsa, u shunchalik sayoz bo'ladi≫. Qaysi gapda yasama otga birikib kelgan sof ko'makchi mavjud?", "options": ["Halollik buyuklik sari dastlabki qadamgina bo'lib qolmay, buyuklikning ayni o'zidir.", "Bitmas-tuganmas bilimning tagida mashaqqatli mehnat yotadi.", "Nigora yaxshi xulqi, chiroyli muomalasi uchun ham obro‘ga erishishi mumkin edi-ku!", "Imonli kishi aql-zakovat sohibi bo'lish bilan birga insoniy, ijtimoiy muammolarni hal etishda faol ishtirok etadi."], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q26", "variant": 26, "subject": "lang", "text": "jo'nalish kelishigi", "options": ["1, 2, 3, 5", "faqat 2", "2, 4", "3, 5"], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q27", "variant": 26, "subject": "lang", "text": "Qaysi gapda vazifadosh ko‘makchi otlashgan sifatga birikib kelgan?", "options": ["Pokiza kishi hamisha shodlik ustida, gunohkor esa g‘am va qayg‘u ostida bo'ladi.", "Yomonlarning qoshida yalinish yaxshilar ishi emas.", "Donolar uchun har bir sinov yangi yutuqlarning ibtidosidir.", "Insonning fe’l-atvoriga qarab unga baho berishadi."], "correctAnswer": 1, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q28", "variant": 26, "subject": "lang", "text": "Qaysi gapda chegara ma’nosini ifodalab kelgan ko'makchi qatnashgan?", "options": ["Shu yilning oxiriga qadar korxonaga yana beshta dastgoh keltiriladi.", "Axir baliq ham suvga intiladi ko'kat yorug'lik sari bo‘y cho'zadi.", "Bu olimning dong'i xon saroyigacha yetib borgan edi.", "Ustoz bir necha soniyalik mulohazalardan so'ng gap boshladi."], "correctAnswer": 0, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v26_lang_q29", "variant": 26, "subject": "lang", "text": "Jo‘nalish kelishigi bilan qo‘llanadigan ko‘makchi qaysi qatorda?", "options": ["yang‘lig‘", "uchun", "yarasha", "tufayli"], "correctAnswer": 2, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v26_lang_q30", "variant": 26, "subject": "lang", "text": "Ismlar guruhiga mansub quyidagi qaysi ko'makchi vazifasida qo'llana oladi?", "options": ["muvofiq, qarshi, sababli, tomon", "avval, boshida, qadar, maqsadida", "sababli, oldida, ustida, qarab", "uzra, orqa, ko‘ra, o‘rtada"], "correctAnswer": 0, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v27_lang_q1", "variant": 27, "subject": "lang", "text": "Qaysi qatordagi gapda vazifadosh ko'makchi ishtirok etgan?", "options": ["Bu kitobni qo'liga olgandan keyin, bosh ko’tarmay o‘qish kerak.", "Avval o‘yla, keyin so‘yla.", "Xalqimiz jisman, ham ruhan uyg‘oq bo‘lmog‘i", "Ish bilan ovvora bo‘lib, kunning o‘tganini ham qolibman."], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q2", "variant": 27, "subject": "lang", "text": "Qaysi gap tarkibida vazifadosh ko‘makchi", "options": ["Kitob ustida uzoq ishladi.", "Osmon uzra qaldirg‘ochlarning yoqimli parvozi xushnud qildi.", "Ajdodlari bilan faxrlana oladigan millatning buyukdir.", "Bahor kelishi bilan daraxtlar oq kiyimini kiya boshlaydi."], "correctAnswer": 0, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q3", "variant": 27, "subject": "lang", "text": "Qaysi gap tarkibida ko‘makchi qatnashmagan?", "options": ["Avval o‘yla, keyin so‘yla.", "Bu kitob qoiiga tushgandan keyin, osh ko'tarmay", "Siz bilan hamsuhbat bo‘lmasdan avval boshqacha xayolda edim.", "Sen singari o'quvchilar bizning faxrimiz."], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q4", "variant": 27, "subject": "lang", "text": "Qaysi gapda ko‘makchini unga ma’nodosh kelishik qo‘shimchasi bilan almashtirish mumkin?", "options": ["U do'stining gaplarini diqqat bilan eshit di.", "Xatni olib, ko'k qalam bilan ostiga chizilgan o‘qidi.", "U mumtoz qo'shiqlarni zavq bilan kuylardi.", "Men ham sizlar bilan shahar aylanishga boraman."], "correctAnswer": 1, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q5", "variant": 27, "subject": "lang", "text": "Ko‘makchiga xos xususiyat noto‘g’ ri izohlangan javobni toping.", "options": ["Ko‘makchi sifatdoshdan keyin kelib, uni hokim tobe bog‘laydi.", "Ko‘makchi harakat nomidan keyin kelib, uni so‘zga tobe bog‘laydi.", "Ko‘makchi olmoshdan keyin kelib uni keyingi tobe bog'laydi.", "Ko‘makchilar ravishdoshdan keyin kelib, uni so‘zga tobe bog‘laydi. so‘zlar lozim. sezmay bor? dillarni kelajagi o‘qidi. bo‘lgan satrlarni qismga hokim so’zga hokim Ona tili va adabiyot"], "correctAnswer": 3, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q6", "variant": 27, "subject": "lang", "text": "Ko’chma ma’nodagi so’z qatnashgan javobni toping?", "options": ["Aqlli qiz", "Og’ir gunoh", "Paxta gulli chinni piyola", "Mehribon ustoz"], "correctAnswer": 0, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v27_lang_q7", "variant": 27, "subject": "lang", "text": "Sofoklning \"Shoh Edip\" fojiasini kim o'zbek tiliga tarjima qilgan?", "options": ["Usmon Nosir", "Asqad Muhtor", "Odil Yoqubov", "Erkin Vohidov"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q8", "variant": 27, "subject": "lang", "text": "Bunda har bir jonzot yashab qolish uchun kurashadi. Ajratib ko’rsatilgan so’z qaysi gap bo’lagi bo’lib kelgan?", "options": ["To’ldiruvchi", "Kesim", "Aniqlovchi", "Ega"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q9", "variant": 27, "subject": "lang", "text": "Bir qiz dasturxonga ikkita non va mayiz olib kelib qo'ydi, chol uchchala mexmonga tabassum bilan choy uzatar ekan, ularning yuzidagi homushlikni ham ilg'ab oldi. Ushbu gapda necha o'rinda imloviy xatolikka yo'l qo'yilgan?", "options": ["3 o'rinda", "5 o'rinda", "2 o'rinda", "4 o'rinda"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q10", "variant": 27, "subject": "lang", "text": "Qaysi javobda tushum kelishigi belgisiz qo’llanilgan?", "options": ["Maktab darvozasi tomon borar edim.", "Suv ichib, o’ynab kulib, ertak eshitib o’tdi ajib bolaligim", "Adib asarlari vafot etgandan so’ng chop etilgan.", "Onam aytgan so’zlari haligacha qulog’im ostida jaranglar edi."], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v27_lang_q11", "variant": 27, "subject": "lang", "text": "Harbiy romanlarga misol qaysi?", "options": ["“Shinelli yillar”", "“Badarg’a”", "“O‘tkan kunlar”", "“Ufq”"], "correctAnswer": 0, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v27_lang_q12", "variant": 27, "subject": "lang", "text": "Qaysi javobdagi gapda ajratib ko‘rsatilgan so‘zning ma'nosi sinekdoxa usulida ko‘chgan?", "options": ["Qayerlarda eding, umr bahori, Men seni bir umr ko‘rmay sevdim-ku...", "Qorasochni ko‘rganidan beri halovati yo‘q, ichini nimadir tirnaydi.", "Ishning ko‘zini biladiganlar aytadiki, tejalgan bir so‘m, ishlab topilgan bir so‘mga tengdir.", "Navbahor chempion bo‘lishga bu yil ham harakat qilib ko‘radi."], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q13", "variant": 27, "subject": "lang", "text": "Ayollar va onalarga o’ziga xos madhiya sifatidagi \"Surat bilan suhbat\" asari muallifini aniqlang.", "options": ["Halima Xudoyberdiyeva", "Saida Zunnunova", "Zulfiya", "Oydin Hojiyeva"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q14", "variant": 27, "subject": "lang", "text": "Shakldoshlik hosil qila oladigan so’zni qaysi javobda berilgan?", "options": ["Qovoq", "Tovush", "Xona", "Nafas"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q15", "variant": 27, "subject": "lang", "text": "Qaysi gapdagi tortmoq so‘zi “ozaytirmoq” ma’nosida qo‘llangan?", "options": ["Mol degani iymasa, tanasi yayramaydi, tanasi yayramasa, sutini tortadi.", "Kanaldan ariq tortib kelishga odam yubormasa, ishimiz chatoq bo‘ladi.", "Olib kirilgan choy ham sovib qolar, allaqanday o‘lchovlar – uchburchaklar xayolini tortar edi.", "Nishonov papirosini tutatib, yaxshilab tortib oldi-da, stol ustiga engashdi."], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q16", "variant": 27, "subject": "lang", "text": "Qaysi javobda yordamchi so‘z turkumlaridan faqat yuklama qatnashgan?", "options": ["Kishi boshqalarga dushmanlik nazari va salbiy fikr bilan qaramasa, uning uchun bu dunyo quvonchga to‘la.", "Agar vaqti kelgan bo‘lsa, kishi bir cho‘pdan ham vafot etishi mumkin.", "Chunki bu so‘z eng hurkak odamga ham jasorat bag‘ishlaydi.", "Ehtimol, buni senga aytishni unutgandir, balki, yana bir marta so‘rab ko‘rarsan."], "correctAnswer": 0, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v27_lang_q17", "variant": 27, "subject": "lang", "text": "\"Yulduzli tunlar\" asaridagi Marg'ilon dorug'asi kim edi?", "options": ["Ahmad Tanbal", "Ali Do'stbek", "Qosimbek", "Tohir"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v27_lang_q18", "variant": 27, "subject": "lang", "text": "Qaysi javobda matn mazmuniga to‘g‘ri kelmaydigan xulosa berilgan?", "options": ["Bir hududda ishlatiladigan so‘z boshqa bir hududda ham o’z ma’nosida qo‘llanadi.", "So‘zning adabiy tildagi mazmuni yetakchi hisoblanadi.", "Bir so‘z shevalarda yoki qardosh tillarda turli tushunchalarda qo‘llanmaydi", "Qardosh tillar boshqa tilning faqat adabiy tiligagina ta’sir o‘tkazishi mumkin."], "correctAnswer": 0, "difficulty": 0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q19", "variant": 27, "subject": "lang", "text": "Raqamlab ko‘rsatilgan qaysi gapda imloviy xatolik uchraydi?", "options": ["1", "2", "3", "4"], "correctAnswer": 0, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q20", "variant": 27, "subject": "lang", "text": "Otlashgan so‘z bilan ifodalangan qaratqich aniqlovchi qatnashgan zidlov munosabatli bog‘langan qo‘shma gapni toping.", "options": ["Do‘st yomon kuningda asqatadi, biroq qo‘rqoq do‘st yaxshi kuningda ham dushmandan xavflidir,", "Har kimning zari bo‘lmasa-da, lekin hunari bo‘lsin.", "Adashish har bir insonga xosdir, ammo adashganlarning qaysarlik bilan o‘z yo‘llarida davom etishlari g‘irt aqlsizlikdir.", "Aqchalining qo‘li o‘ynar, aqchasizning – ko‘zi."], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q21", "variant": 27, "subject": "lang", "text": "U o’z qalbida kechayotgan tuyg’ularning nomini bilmas, shu daqiqadagi holatni o’rtoqlariga ham izohlab berolmas edi. Mavhum otlar tarkibida jarangsiz juftiga ega bo’lmagan til undoshlari soni qaysi qatorda berilgan?", "options": ["9", "10", "11", "8"], "correctAnswer": 0, "difficulty": 0.6, "category": "Adabiyot"},
  {"id": "v27_lang_q22", "variant": 27, "subject": "lang", "text": "Quyida berilganlardan qaysilari modal so‘z hisoblanmaydi? 1) xullas; 2) faqat; 3) darhaqiqat; 4) xayriyat; 5) chunki; 6) biroq.", "options": ["1, 3, 4", "2, 5, 6", "3, 4, 5, 6", "1, 2, 4, 5"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v27_lang_q23", "variant": 27, "subject": "lang", "text": "Nigoraning qop-qora ko‘zlari doimo chaqnab turadi, lablaridan tabassum arimaydi. Ushbu gapda lab undoshi necha o‘rinda qatnashgan?", "options": ["4 ta", "5 ta", "6 ta", "7 ta"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q24", "variant": 27, "subject": "lang", "text": "Ajratilgan ikkinchi darajali bo‘lak mavjud bo‘lmagan gapni belgilang.", "options": ["Bu ariqlarning suvlari allaqachon, aniqrog‘i, bundan to‘rt yillarcha oldin qurib qolgandi.", "Ayniqsa, hech narsa o‘qimaydigan, johil kimsalar faqat bugunini o‘ylab, hayotdan orqada qoladilar.", "O‘z hollariga qo‘yib berishganda, bu yerlarga majburan ko‘chirib kelishmaganda, qanday soz bo‘lardi-ya!", "To‘g‘ri, endi uni – o‘ng qo‘limni oz-oz ishlatyapman-u, ammo tuzukroq ishga yaramaydi."], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q25", "variant": 27, "subject": "lang", "text": "“Mening Vatanim” she’ri muallifini belgilang.", "options": ["Saida Zunnunova", "Mirtemir", "Omon Matjon", "H. Xudoyberdiyeva"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v27_lang_q26", "variant": 27, "subject": "lang", "text": "“Ulug‘bek xazinasi” asari qaysi turdagi roman?", "options": ["Harbiy roman", "Fantastik roman", "Tarixiy roman", "Ijtimoiy-falsafiy roman"], "correctAnswer": 0, "difficulty": 1.0, "category": "Adabiyot"},
  {"id": "v27_lang_q27", "variant": 27, "subject": "lang", "text": "Qaysi gapda sabab holi uyushgan?", "options": ["Shanbada to‘y keladigan, el-yurtga osh beriladigan bo‘lgani uchun erta tongdanoq hovli gavjum edi.", "Yuz-qo‘llarini yuvish, bir-ikki qultum suv ichish uchun daryo bo‘yiga bordi.", "O‘z nafsiga qul bo‘lgan, insoniylikni qo‘ldan boy bergan insonlar uchun muqaddas tuyg‘uning o‘zi yo‘q.", "Xolida hovlidagi gulzorga chopib chiqib kelayotgan edi, oyisi to‘xtatdi."], "correctAnswer": 0, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q28", "variant": 27, "subject": "lang", "text": "Bunda har bir jonzot yashab qolish uchun kurashadi. Ajratib ko’rsatilgan so’z qaysi gap bo’lagi bo’lib kelgan?", "options": ["To’ldiruvchi", "Kesim", "Aniqlovchi", "Ega"], "correctAnswer": 0, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q29", "variant": 27, "subject": "lang", "text": "Jamoling vasfini qildim chamanda, Qizordi gul uyottin anjumanda. Ushbu baytdan qanday she'riy san'at qo'llangan?", "options": ["Tashbeh, iyhom", "Husni talil, tashxis", "Tashbeh, tajnis", "Takror, tanosub"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v27_lang_q30", "variant": 27, "subject": "lang", "text": "Qaysi javobdagi gapda tovush tushishi va almashishi bilan bog‘liq fonetik hodisalar yuz bergan?", "options": ["Mening fikrimni bo‘lma, – deya muallimning gapini cho‘rt kesdi u.", "Do‘stlardan ayrilganni yeydigan ayiqlar bor.", "O‘g‘li yolvoruvchan ovoz bilan yaltoqlanib Tazkiraning oldida tiz cho‘kkan edi.", "Undan keyin sizning dasturxoningizni solib, qizingizning choklarini tikishib, xizmatingizni qilib yotardim!"], "correctAnswer": 0, "difficulty": 1.32, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q1", "variant": 28, "subject": "lang", "text": "Ernest Seton-Tompsonning \"Yovvoyi yo'rg'a\" asarini kim o'zbek tiliga tarjima qilgan?", "options": ["Usmon Nosir", "Asqad Muhtor", "Odil Yoqubov", "Tog'ay Murod"], "correctAnswer": 0, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v28_lang_q2", "variant": 28, "subject": "lang", "text": "Quyida keltirilgan qo‘shma gapninig turini aniqlang. Bolalarim uch kundan buyon hech bir taom yemas edilar, shuning uchun kechasi bilan mijja qoqmadim.", "options": ["bog‘langan qo‘shma gap", "bog‘lovchisiz qo‘shma gap", "ergashgan qo‘shma gap", "ko‘chirma gapli qo‘shma gap"], "correctAnswer": 0, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q3", "variant": 28, "subject": "lang", "text": "Qaysi javobda keltirilgan gapda birgalik nisbatdagi fe’l ishtirok etgan?", "options": ["Berilgan barcha gapda birgalik nisbatdagi fe’l ishtirok etgan.", "Vodil qishlog‘ining choyxonasi yo‘l boshidagi ikkita kata keksa chinorning soyasida joylashgan.", "Bir burchakda katta stol atrofida yoshlar o‘tirib gazeta, jurnal va kitob o‘qishadi, bir burchakda radiodan so‘nggi xabar eshitdilar.", "O‘tgan yili qishloq jamoasi choyxonani ta’mirlashdi."], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q4", "variant": 28, "subject": "lang", "text": "Qaysi javobda imloviy xatolik bilan yozilgan soʻz ishtirok etgan?", "options": ["Bobomiz faqat turkiy emas, forsiy, arabiy, urdu, xitoy, moʻgʻul va boshqa tillardagi soʻzlardan ham mahorat bilan foydalangan.", "Sizni ovqat ustida bezovta qilayotganim uchun uzur soʻrayman, – dedi qoʻlini koʻksiga qoʻyib.", "Fursat gʻanimatdir, shoh satrlar-la, Bezamoq chogʻidir umr daftarin.", "Juda soz! Albatta, kiyib birini, safarga doʻstlar-la men ham chiqaman."], "correctAnswer": 0, "difficulty": -0.76, "category": "Adabiyot"},
  {"id": "v28_lang_q5", "variant": 28, "subject": "lang", "text": "Qaysi javobda matn mazmuniga to‘g‘ri kelmaydigan xulosa berilgan?", "options": ["Bir hududda ishlatiladigan so‘z boshqa bir hududda ham o’z ma’nosida qo‘llanadi.", "So‘zning adabiy tildagi mazmuni yetakchi hisoblanadi.", "Bir so‘z shevalarda yoki qardosh tillarda turli tushunchalarda qo‘llanmaydi", "Qardosh tillar boshqa tilning faqat adabiy tiligagina ta’sir o‘tkazishi mumkin."], "correctAnswer": 0, "difficulty": -0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q6", "variant": 28, "subject": "lang", "text": "Raqamlab ko‘rsatilgan qaysi gapda imloviy xatolik uchraydi?", "options": ["1", "2", "3", "4"], "correctAnswer": 0, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q7", "variant": 28, "subject": "lang", "text": "Ma'nodoshlik hosil qiladigan so'zlarni aniqlang.", "options": ["tor, ixcham, kichik.", "mazmun, fikr, mohiyat", "ranj, ozor, alam", "qasoskor, qasd, o'ch"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q8", "variant": 28, "subject": "lang", "text": "Qaysi gapdagi yurmoq soʻzi “kezmoq, aylanmoq” maʼnosida qoʻllangan?", "options": ["Kampir yurganda yech qanaqa ovoz chiqmasdi, oyogʻi xuddi pardek yerga tegardi.", "Poyezd bir necha soat yoʻl yurgandan keyin ana shunday bekatchalardan biriga kelib toʻxtadi.", "Men dalada har kuni qizlar, kelinchaklar orasida yurardim, yosh boʻlsam ham sevganim bor edi.", "Yoʻl bilmasang, soʻragin yurgandan, Gap bilmasang, gap soʻragin bilgandan."], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q9", "variant": 28, "subject": "lang", "text": "Shakldoshlik hosil qila oladigan so’zni qaysi javobda berilgan?", "options": ["Qovoq", "Tovush", "Xona", "Nafas"], "correctAnswer": 0, "difficulty": -0.36, "category": "Adabiyot"},
  {"id": "v28_lang_q10", "variant": 28, "subject": "lang", "text": "Ko’chma ma’nodagi so’z qatnashgan javobni toping?", "options": ["Aqlli qiz", "Og’ir gunoh", "Paxta gulli chinni piyola", "Mehribon ustoz"], "correctAnswer": 0, "difficulty": -0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q11", "variant": 28, "subject": "lang", "text": "Qaysi javobda bo‘g‘inlari faqat yopiq bo‘g‘indan iborat so‘zlar qatnashgan?", "options": ["dengiz, singil, bulbul", "stress, shtanga, qalb", "kalxoz, jannat, muzqaymoq", "paxta, jayron, qoplon"], "correctAnswer": 2, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q12", "variant": 28, "subject": "lang", "text": "Qaysi qatordagi barcha so‘zlar imloviy jihatdan to‘g‘ri yozilgan?", "options": ["xushmuomala, xayrixoh, xushfe'l", "xush muomala, xayrxoh, xushfel", "umumilliy, xayrixoh, xushfe'l", "umum milliy, xayrhoh, xushfe'l"], "correctAnswer": 0, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v28_lang_q13", "variant": 28, "subject": "lang", "text": "Tarixiy romanlarga misol qaysi?", "options": ["“Shinelli yillar”", "“Navoiy”", "“O‘tkan kunlar”", "“Ufq”"], "correctAnswer": 1, "difficulty": -0.04, "category": "Adabiyot"},
  {"id": "v28_lang_q14", "variant": 28, "subject": "lang", "text": "\"kelmadi\" radifli g’azali kimga tegishli?", "options": ["Lutfiy", "Atoiy", "Alisher Navoiy", "Bobur Mirzo"], "correctAnswer": 1, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v28_lang_q15", "variant": 28, "subject": "lang", "text": "Qaysi javobda sifat yasovchi qo‘shimcha qatnashgan?", "options": ["-li", "-chi", "-la", "-moq"], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q16", "variant": 28, "subject": "lang", "text": "\"Qutlug‘ qon\" romanining muallifi kim?", "options": ["Oybek", "Hamid Olimjon", "Cho‘lpon", "Mirtemir"], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q17", "variant": 28, "subject": "lang", "text": "“Chinor” romani muallifi kim?", "options": ["Usmon Nosir", "Asqad Muhtor", "Odil Yoqubov", "Erkin Vohidov"], "correctAnswer": 1, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v28_lang_q18", "variant": 28, "subject": "lang", "text": "Qaysi biri ham ot ham fe’l bo’la olmaydi?", "options": ["Tut", "Yoz", "Yuz", "Tuz"], "correctAnswer": 2, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v28_lang_q19", "variant": 28, "subject": "lang", "text": "Yosh o‘qituvchi bugun maktabda o‘quvchilarga qiziqarli darsni katta ishtiyoq bilan tushuntirdi. Ushbu gapda mustaqil so’z turkumlaridan qaysi biri eng ko’p qatnashgan", "options": ["Ravish", "Ega", "Sifat", "Ot"], "correctAnswer": 2, "difficulty": 0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q20", "variant": 28, "subject": "lang", "text": "Qaysi javobda bitishuvli birikma berilgan?", "options": ["qizargan olma", "quyosh nuri", "she’r yodlamoq", "tarvuz yemoq"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q21", "variant": 28, "subject": "lang", "text": "“Gap bilan kerilma, ish bilan keril” Ushbu maqolni inkor etgan, ya’ni ziddi qaysi javobda berilgan?", "options": ["Sizdan ugina, bizdan bugina.", "Ish bilganga bir tanga, gap bilganga ming tanga.", "Ko’p gap – eshakka yuk.", "Gapni gapir uqqanga"], "correctAnswer": 1, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q22", "variant": 28, "subject": "lang", "text": "Qaysi javobda qismlari qo‘shib yoziladigan so‘zlar berilgan?", "options": ["shirin//so’z, ketma//ket", "yilma//yil, kun//tun", "taklif//noma, xush//xabar", "ot//quloq, ochiqdan//ochiq"], "correctAnswer": 2, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v28_lang_q23", "variant": 28, "subject": "lang", "text": "Iboraning noo‘rin qo‘llanishi qaysi gapda uchraydi?", "options": ["Avvaliga bu ishga yuragi dovlamay kirishdi, keyinchalik ishning ancha hadisini oldi va shu muvaffaqiyatlarga erishdi.", "Tag‘in ham bu ayolning yuragi keng ekan, shuncha dardga uncha-muncha odam bardosh berolmaydi.", "Bugun Zebixonning yuragiga qil sig‘maydi, hamma narsa, hamma odamga o‘z quvonchini aytgisi, hamma bilan raqs tushgisi keladi.", "Shundan keyin uzoq yashay olmadi, chunki bechoraning yuragi bu g‘amni ko‘tara olmadi"], "correctAnswer": 0, "difficulty": 0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q24", "variant": 28, "subject": "lang", "text": "“Daryolar tutashgan joyda” asari kimning qalamiga mansub?", "options": ["Mirmuhsin", "Shuhrat", "Sayid Ahmad", "Asqad Muxtor"], "correctAnswer": 3, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v28_lang_q25", "variant": 28, "subject": "lang", "text": "Qaysi maqolda tub so‘z mavjud emas?", "options": ["Tekinxo‘r mehnatsiz tishlar, Mehnatkash armonsiz yashar.", "Har kungi va’dabozlikdan bugungi jonbozlik yaxshi", "Yig‘lab-yig‘lab marza olsang, O‘ynab-o‘ynab sug‘orasan.", "Aqlliga gapirsang anglaydi, Aqlsizga gapirsang, qaynaydi."], "correctAnswer": 0, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q26", "variant": 28, "subject": "lang", "text": "Quyida berilgan gapdagi ajratib ko‘rsatilgan so‘z ma’nosi qaysi usulda ko‘chgan? Havoda ananas hidi aralash yong‘oq xazonlarining o‘tkir hidi gurkiradi.", "options": ["Metafora", "metonimiya", "sinekdoxa", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q27", "variant": 28, "subject": "lang", "text": "“Boshginam og’riydi” xalq qo’shig’ida qizning bo’yni nimga o’g’riydi?", "options": ["Tillaqoshni deb", "Oltin isirg’a", "Bo’yintumor", "Onasi urgani uchun [3] Ona tili va adabiyot"], "correctAnswer": 2, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v28_lang_q28", "variant": 28, "subject": "lang", "text": "Tashqi o’xshashlik asosidagi metaforani toping?", "options": ["Biz sinfimiz bilan samo lochinlarini bayram bilan tabrikladik", "Uzukning ko’zi ko’zlarimni qamashtirib yubordi", "Bu gapni eshitib, oyog’ini qo’liga olib chopdi", "Qozonning qulog’idan ko’tarib o’choqqa joylashtirdilar"], "correctAnswer": 2, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q29", "variant": 28, "subject": "lang", "text": "Qaysi gapda vergul qo‘shma gap qismlari orasida qo‘llangan?", "options": ["Avestoda yigitlar kurash tushishni, chavandoz bo‘lishni, mol boqa olishni, chorvani yirtqich hayvon va qaroqchilardan muhofaza qila olishni o‘rganishlari shartligi aytilgan.", "U to‘qayzorda sassiq alaflarning, qamishlarning, gulni payhon qiluvchi to‘ng‘izlarning ko‘pligidan ajablanmadi.", "Maktablarda, oliy o‘quv yurtlarida kadrlar tayyorlash masalasiga katta e’tibor berilmoqda.", "Bu gaplarimdan cho‘chimang, qo‘rqmang, hali boshingizda ne savdolar bordir."], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v28_lang_q30", "variant": 28, "subject": "lang", "text": "Qaysi qatordagi barcha so‘zlar imloviy jihatdan xato yozilgan?", "options": ["tavsiya, mas’uliyat, sahna", "xush muomala, xayrixoh, xush fe’l", "umummilliy, ham ohang, mushohada", "tafsiya, xayrxoh, xushfel"], "correctAnswer": 2, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v29_lang_q1", "variant": 29, "subject": "lang", "text": "Quyidagilardan qaysi biri dramma?", "options": ["“Mardlik afsonasi”", "“Temir xotin”", "“Yulduzlar mangu yonadi”", "“Palatkada yozilgan doston”"], "correctAnswer": 1, "difficulty": -1.0, "category": "Adabiyot"},
  {"id": "v29_lang_q2", "variant": 29, "subject": "lang", "text": "\"Ustina\" radifli g’azali kimga tegishli?", "options": ["Lutfiy", "Atoiy", "Ogahiy", "Bobur Mirzo"], "correctAnswer": 0, "difficulty": -0.92, "category": "Adabiyot"},
  {"id": "v29_lang_q3", "variant": 29, "subject": "lang", "text": "Qaysi javobdagi so’zlarda qo’shimcha(lar) qo’shilganda ikkita fonetik hodisalar yuz beradi?", "options": ["pichoq, tarmoq, yosh", "son, kon, to’n", "bo’yamoq, tirnamoq, ulamoq", "tirnamoq, taramoq, buloq"], "correctAnswer": 0, "difficulty": -0.84, "category": "Adabiyot"},
  {"id": "v29_lang_q4", "variant": 29, "subject": "lang", "text": "Qaysi javobda nuqtalar o’rnida bo’g’iz undoshi ishtiroq etishi kerak?", "options": ["…oin", "sha…mat [1]", "ta…lam", "su…bat"], "correctAnswer": 2, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q5", "variant": 29, "subject": "lang", "text": "“Jimjitlik” romani muallifi kim?", "options": ["O’tkir Hoshimov", "Asqad Muhtor", "Odil Yoqubov", "Sayid Ahmad"], "correctAnswer": 3, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v29_lang_q6", "variant": 29, "subject": "lang", "text": "Qaysi biri ham ot ham son bo’la oladi?", "options": ["Tut", "Yoz", "Yuz", "Tuz"], "correctAnswer": 2, "difficulty": -0.6, "category": "Adabiyot"},
  {"id": "v29_lang_q7", "variant": 29, "subject": "lang", "text": "Berilgan qaysi so‘zlar qatori imloviy jihatdan xato yozilgan?", "options": ["juz’iy, zahm", "qurulla, supra", "tafsiya, taasuf", "zahil, immunitet"], "correctAnswer": 2, "difficulty": -0.52, "category": "Adabiyot"},
  {"id": "v29_lang_q8", "variant": 29, "subject": "lang", "text": "Paronimlarni qo'llash bilan bog'liq xatolik mavjud bo'lgan gapni aniqlang.", "options": ["Kechalar uyqusiz she'r yot olganim Tonggi ufqdagi yolqinlar aytsin.", "O'zga yurtda shoh bo'lguncha, o'z yurtingda gado bo'l.", "Yillar o'tur, o'tur asrlar qator. Dunyoga keladi yangi avlotlar.", "O'qiyotgan kitobimning uch bobini tugatdim."], "correctAnswer": 1, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q9", "variant": 29, "subject": "lang", "text": "“Gap bilan kerilma, ish bilan keril” Ushbu maqolni inkor etgan, ya’ni ziddi qaysi javobda berilgan?", "options": ["Sizdan ugina, bizdan bugina.", "Ish bilganga bir tanga, gap bilganga ming tanga.", "Ko’p gap – eshakka yuk.", "Gapni gapir uqqanga"], "correctAnswer": 1, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q10", "variant": 29, "subject": "lang", "text": "Qaysi javobda qismlari qo‘shib yoziladigan so‘zlar berilgan?", "options": ["shirin//so’z, ketma//ket", "yilma//yil, kun//tun", "taklif//noma, xush//xabar", "ot//quloq, ochiqdan//ochiq"], "correctAnswer": 2, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v29_lang_q11", "variant": 29, "subject": "lang", "text": "Kimning dastlabki she’ri “Qushcha” edi?", "options": ["Usmon Nosir", "Abdulla Oripov", "Shuhrat", "Musa Jalil"], "correctAnswer": 1, "difficulty": -0.2, "category": "Adabiyot"},
  {"id": "v29_lang_q12", "variant": 29, "subject": "lang", "text": "“Po’lat quyuvchi” poemasi kimning qalamiga mansub?", "options": ["Mirmuhsin", "Shuhrat", "Sayid Ahmad", "Asqad Muxtor"], "correctAnswer": 3, "difficulty": -0.12, "category": "Adabiyot"},
  {"id": "v29_lang_q13", "variant": 29, "subject": "lang", "text": "Qaysi maqolda barcha so’zlar yasama so’z?", "options": ["Tekinxo‘r mehnatsiz tishlar, Mehnatkash armonsiz yashar.", "Har kungi va’dabozlikdan bugungi jonbozlik yaxshi", "Yig‘lab-yig‘lab marza olsang, O‘ynab-o‘ynab sug‘orasan.", "Aqlliga gapirsang anglaydi, Aqlsizga gapirsang, qaynaydi."], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q14", "variant": 29, "subject": "lang", "text": "Quyida berilgan gapdagi ajratib ko‘rsatilgan so‘z ma’nosi qaysi usulda ko‘chgan? Havoda ananas hidi aralash yong‘oq xazonlarining o‘tkir hidi gurkiradi.", "options": ["Metafora", "metonimiya", "sinekdoxa", "vazifadoshlik"], "correctAnswer": 0, "difficulty": 0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q15", "variant": 29, "subject": "lang", "text": "Qaysi gapda o‘timsiz fe’lning o‘timliga aylanish hodisasi kuzatiladi?", "options": ["Qizlar ham, bolalar ham - hammasi meni yaxshi ko‘rishadi.", "Tanaffus bo‘ldi deguncha do‘mbirasini chalib, hammani o‘ziga qaratardi, goh kuldirardi, goh yig‘latardi.", "Maktabgayam o‘sha duldulini o‘ynatib, xurjuniga do‘mbirasini solib keladi.", "Hamma uni \"Suyun burgut\" deydi."], "correctAnswer": 0, "difficulty": 0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q16", "variant": 29, "subject": "lang", "text": "Qaysi javobda jismoniy holat fe’llari berilgan?", "options": ["qaradi, ming‘irladi", "imo qildi, ter to‘kdi", "og‘ridi, xastalandi", "kashf qildi, sog‘aydi"], "correctAnswer": 1, "difficulty": 0.2, "category": "Adabiyot"},
  {"id": "v29_lang_q17", "variant": 29, "subject": "lang", "text": "Yumush fe’llarini belgilang.", "options": ["qaradi, ming‘irladi", "imo qildi, ter to‘kdi", "og‘ridi, xastalandi", "ter to‘kdi, mehnat qildi 3. To‘ng‘illаmоq, g‘udrаnmоq so‘zlаri fе’lning qаysi mа’nоviy guruhigа xоs? A nutq fе’llаri B аqliy fаоliyat fе’llаri C jismоniy fаоliyat fе’llаri D hоlаt fе’llаri"], "correctAnswer": 0, "difficulty": 0.28, "category": "Adabiyot"},
  {"id": "v29_lang_q18", "variant": 29, "subject": "lang", "text": "Qаysi nisbаt shаkllаrini оlgаndа o‘timli fе’llаr o‘timsizlаshаdi?", "options": ["оrttirmа nisbаt shаkllаrini", "o‘zlik vа mаjhul nisbаt shаkllаrini", "birgаlik nisbаt shаkllаrini", "birgаlik vа оrttirmа nisbаt shаkllаrini"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v29_lang_q19", "variant": 29, "subject": "lang", "text": "1) qochirmoq; 2) qaytarmoq; 3) yedirmoq; 4) keltirmoq; 5) bo'shatmoq Fel asosida ifodalangna o'timli-o'timsizlik ma'nosi qo'shimchasi ta'sirida o'zgargan fe'llarni aniqlang.", "options": ["1, 2, 4, 5", "1, 2, 3, 5", "2, 3, 4", "1, 3, 5"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v29_lang_q20", "variant": 29, "subject": "lang", "text": "Аqliy fаоliyat fе’llаri to‘g‘ri ko‘rsаtilgаn jаvоbni tоping.", "options": ["tаsаvvur etmоq, xаyol surmоq, hukm chiqаrmоq", "tаfаkkur qilmоq, yozmоq, chaqirmoq", "ko‘z оldigа kеltirmоq, o‘qimоq, pichirlamoq", "fikrlаmоq, eshitmоq, yugurmoq"], "correctAnswer": 0, "difficulty": 0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q21", "variant": 29, "subject": "lang", "text": "Omonlik tilasang, agar sen o‘zing, Tilingdan chiqarma yaroqsiz so‘zing. (Yu.X.Hojib) Ushbu baytdagi tilasang (a) hamda chiqarma (b) fe’llariga to‘g‘ri izoh berilgan javobni toping. 1) bo‘lishli; 2) bo‘lishsiz; 3) o‘timli; 4) o‘timsiz; 5) xabar mayli; 6) shart mayli; 7) buyruq-istak mayli; 8) tub so‘z; 9) yasama so‘z", "options": ["a - 1, 3, 6, 8; b - 2, 3, 7, 8", "a - 1, 3, 7, 9; b - 2, 4, 6, 8", "a - 2, 4, 6, 8; b - 1, 3, 5, 9", "a - 1, 4, 6, 9; b - 2, 3, 7, 9"], "correctAnswer": 2, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q22", "variant": 29, "subject": "lang", "text": "Quyida berilgan qaysi fe’llarning asosida ifodalangan o‘timli-o‘timsizlik ma’nosi nisbat qo‘shimchasi ta’sirida o‘zgargan? 1) ko‘rsatmoq; 2) ajratmoq; 3) qiynalmoq; 4) o‘qitmoq; 5) tomizmoq; 6) supurishmoq", "options": ["1, 4, 5, 6", "2, 3, 4, 5", "2, 3, 5", "1, 4, 6 13. Berilgan fe’llarning o‘timli-o‘timsizligi haqidagi qaysi hukm to‘g‘ri? 1. pishirmoq 2. uchmoq 3. o'tirmoq 4. to'g'ramoq 5. eritmoq"], "correctAnswer": 2, "difficulty": 0.68, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q23", "variant": 29, "subject": "lang", "text": "Quyida berilgan qaysi fe’llarning asosida ifodalangan o‘timli-o‘timsizlik ma’nosi nisbat qo‘shimchasi ta’sirida o‘zgargan? 1) ko‘rsatmoq; 2) ajratmoq; 3) qiynalmoq; 4) o‘qitmoq; 5) tomizmoq; 6) supurishmoq", "options": ["1, 4, 5, 6", "2, 3, 4, 5", "2, 3, 5", "1, 4, 6 13. Berilgan fe’llarning o‘timli-o‘timsizligi haqidagi qaysi hukm to‘g‘ri? 1. pishirmoq 2. uchmoq 3. o'tirmoq 4. to'g'ramoq 5. eritmoq"], "correctAnswer": 1, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v29_lang_q24", "variant": 29, "subject": "lang", "text": "o'tirmoq", "options": ["Yomonga yondashgan yiqilmay qolmas, oxiri chuqurga tiqilmay qolmas.", "O‘quvchilar asosiy mavzuni o‘qimay qo‘ydi.", "", ""], "correctAnswer": 0, "difficulty": 0.84, "category": "Adabiyot"},
  {"id": "v29_lang_q25", "variant": 29, "subject": "lang", "text": "to'xtamoq", "options": ["1, 4, 5 - o‘timli, 2, 3, 6 - o‘timsiz", "1, 2, 4 - o‘timli, 3, 5, 6 - o‘timsiz", "2, 3, 6 - o‘timli, 1, 4, 5 - o‘timsiz", "1, 5, 6 - o‘timli, 2, 3, 4 - o‘timsiz"], "correctAnswer": 0, "difficulty": 0.92, "category": "Adabiyot"},
  {"id": "v29_lang_q26", "variant": 29, "subject": "lang", "text": "Senga ola qarabdi kim, ko‘r bo‘lmay qolmas. Ushbu gapda -ma bo‘lishsizlik shakli qanday ma’noni ifodalaydi?", "options": ["Yomonga yondashgan yiqilmay qolmas, oxiri chuqurga tiqilmay qolmas.", "Salima uyga berilgan inshoni yozib qo‘ymadi.", "Nodirbek mashg‘ulot zaliga bormay qo‘yganiga ancha bo‘ldi.", "O‘quvchilar asosiy mavzuni o‘qimay qo‘ydi."], "correctAnswer": 0, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q27", "variant": 29, "subject": "lang", "text": "Bo‘lishli fe’llar qatorini aniqlang.", "options": ["ayta ko‘rma, bormay qolma, o‘qigani yo‘q", "o‘qimoq, aytgan emas, yozmagan", "kelmay qolma, aytmay turma, indamay qolma", "o‘qidim, yozdim, ko‘rdi, yozgani yo‘q"], "correctAnswer": 2, "difficulty": 1.08, "category": "Adabiyot"},
  {"id": "v29_lang_q28", "variant": 29, "subject": "lang", "text": "Bo’lishsizlik shakli orqali tasdiq ma’nosi ifodalangan gapni aniqlang.", "options": ["Oyqizning yuzlari qizarib ketdi, uyalganidan boshini quyi solib, indamay qoldi.", "Sizlar boyligingizga, kuch-quvvatingizga mag’rur bo’lib, aysh-ishrat bilan mashg’ulsiz.", "Ha, men u odamni baholaganimda yanglishmadim, to’g’ri so’zladim.", "Yomonga yondoshgan yiqilmay qolmas, oxiri chuqurga tiqilmay qolmas."], "correctAnswer": 0, "difficulty": 1.16, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q29", "variant": 29, "subject": "lang", "text": "Gul bargini nasim tildi − to‘kildi, Saboga hikoyat qildi − to‘kildi. Falak ishiga boq: bir haftada gul Chiqdi, g‘unchaladi, kuldi − to‘kildi. Ushbu parchada nechta fe’l so‘z turkmiga oid so‘z ishtirok etgan?", "options": ["7 ta", "8 ta", "9 ta", "10 ta"], "correctAnswer": 0, "difficulty": 1.24, "category": "Ona tili (Grammatika)"},
  {"id": "v29_lang_q30", "variant": 29, "subject": "lang", "text": "Fonetik yozuv asosida yozilgan fe’l ishtirok etgan qatorni aniqlang.", "options": ["Qarindoshingni yomonlab, Qaydan tug‘gan toparsan?", "Aqlliga aytdim, angladi − bildi, Aqlsizga aytdim, shaqillab kuldi.", "Sipohning tarqoqligi saltanatning kuchsizlanishiga olib keladi.", "Chin do‘st uldirkim, do‘stidan hech qachon ranjimaydi, agar ranjisa ham uzrini qabul qiladi. 27. Quyida berilgan gaplardagi qirq so‘zi haqidagi to‘g‘ri hukmni aniqlang. 1. Andozani aniq qilib qirq. 2. Go‘ro‘g‘lining qirq yigiti bor edi."], "correctAnswer": 1, "difficulty": 1.32, "category": "Adabiyot"},
  {"id": "v30_lang_q1", "variant": 30, "subject": "lang", "text": "Motam marosimlari uch, yetti, qirq, yil kabi turlarga bo‘linadi.", "options": ["1-gapda fe’l, 2-gapda son, 3-gapda ot", "1-gapda fe’l, 2-3-gapda son", "gaplarda qirq so‘zining ko‘chma ma’nolari qo‘llangan", "1-gapdagi so‘z 2-gapdagiga shakldosh, 3- gapdagiga esa ma’nodosh"], "correctAnswer": 0, "difficulty": -1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q2", "variant": 30, "subject": "lang", "text": "Davomiy bo'lishsizlik ma'nosini ifodalagan ko'makchi fe'lli so'z qo'shilmasini qatnashgan gapni aniqlang.", "options": ["Yomonga yondashgan yiqilmay qolmas, oxiri chuqurga tiqilmay qolmas.", "Shundan so'ng bu haqda hech kimga gapirmay qo'ydi.", "Sizlar el-yurt ahvolidan xabar olmaysiz, faqat o'z manfaatingizni o'ylaysiz, el-yurt manfaatini ko'zlamaysiz.", "Men u odamni baholaganimda yanglishmadim, to'g'ri so'zladim."], "correctAnswer": 3, "difficulty": -0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q3", "variant": 30, "subject": "lang", "text": "Bo’lishsizlik shakli bir martalik harakat inkorini ifodalagan ko’makchi fe’lli so’z qo’shilmasi qatnashgan gapni aniqlang.", "options": ["Oyqizning yuzlari qizarib ketdi, uyalganidan boshini quyi solib, indamay qoldi.", "Adolat hech kimga zarar keltirmaslik, adolatsizlik q i l m as li k v a z i mmadagi ezgu ishlarni bajarmay q o ’ ym a s li k d i r .", "Buyurgan ishlarini bajarib qo’magani uchun onasi uni qattiq koyidi.", "Bo’lib o’tgan bu noxush hodisa kelgusida bundan- da salbiy oqibatlarga olilb kelmasligiga kim kafolat bera oladi?"], "correctAnswer": 0, "difficulty": -0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q4", "variant": 30, "subject": "lang", "text": "Qaysi qatоrda hоlat fе’llari bеrilgan?", "options": ["gapirmоq, ko‘tarmоq", "ijоd qilmоq, o‘qimоq", "isitmalamоq, tеrlamоq", "tоshmоq, yurmoq 24 2"], "correctAnswer": 2, "difficulty": -0.76, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q5", "variant": 30, "subject": "lang", "text": "Qaysi javobda ma’noli qismlari asos + so‘z yasovchi + lug‘aviy shakl yasovchi + sintaktik shakl yasovchi tartibida joylashgan fe’l turkumiga oid so‘z qatnashgan?", "options": ["U chidamsizligi sababli bu mashaqqatga bardosh berolmaydi.", "Ota-bobolarimiz behuda so‘zlarni so‘zlashdan tilni tiyish kerakligini aytishgan.", "Sardor Baxtiyorning ehtiyotsizligidan qo'rqardi.", "Bolalar bayram uchun bir hafta davomida sahnani bezatishdi."], "correctAnswer": 1, "difficulty": -0.68, "category": "Adabiyot"},
  {"id": "v30_lang_q6", "variant": 30, "subject": "lang", "text": "Qaysi gapda sifatdosh ishtirok etgan?", "options": ["Zinapoyalar bo‘ladi, juda istagan odam o‘shalardan yurib suv bo‘yigacha tushaveradi. (P.Qodirov)", "Tong xo‘rozi qichqirgach mehmon qo‘zg‘aldi. (G‘.G‘ulom)", "Uning maqsadi Yo‘lchi bilan uchrashuv, albatta. (Oybek)", "Ixtiyorsiz oldinga intildi-yu, bir nima demoqqa chog‘landi, lekin maxdum o‘ng qo‘lini ko‘tardi. (M.Ismoiliy)"], "correctAnswer": 0, "difficulty": -0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q7", "variant": 30, "subject": "lang", "text": "Vaqtida aytiladigan so'zni asrama, aytmas so‘z tevaragiga Gap haqidagi berilgan noto‘g‘ri hukmlarni aniqlang. 1) Gapda bitta o‘tgan, bitta kelasi zamon 2) Gapda otdan yasalgan soda yasama 3) Fonetik yozuv asosida yozilgan 4) Fe’l turkumiga mansub so‘zlarning 5) Gapdagi so‘zlarning barchasi 6) Gapdagi sifatdoshlarning barchasi 7) Gapdagi barcha fe’llar buyruq-istak", "options": ["1, 4, 5, 7,", "2, 3, 6, 7", "2, 6", "3, 5, 6"], "correctAnswer": 0, "difficulty": -0.52, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q8", "variant": 30, "subject": "lang", "text": "Tarixan tarkib topgan, qat’iy me’yorlarga qat’iy tne’yorlarga amal qilishi, uslubning bo‘ysunuvchi, so'zlashuvchilarning qaysi hududda rivojlanganligi bilan xarakterlanadi. yashashidan qat’i nazar, barchasi uchun umumiy Ushbu matndagi soda yasama fe’llarning nechtasi bo‘lgan til adabiy til sanaladi. Adabiy til har qanday ot turkumidan yasalgan? tilning oliy shakli sanaladi va lug‘at tarkibining", "options": ["6 tasi", "5 tasi", "4 tasi", "3 tasi boyligi, grammatik qurilishining tartibga solinganligi, 25"], "correctAnswer": 0, "difficulty": -0.44, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q9", "variant": 30, "subject": "lang", "text": "Qaysi gapda imloviy xato yozilgan fe’l turkumiga oid so‘z qatnashgan?", "options": ["chiqish", "qaratqich", "tushum", "o‘rin-payt"], "correctAnswer": 0, "difficulty": -0.36, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q10", "variant": 30, "subject": "lang", "text": "O‘timli fe’llar qatorini aniqlang.", "options": ["ko‘rdi, jonlandi, kuldi, qaradi", "ichdi, ko‘rdi, almashdi, quvontirdi", "so‘rattirdi, joylashdi, o‘xshadi, yuzlandi", "terildi, ko‘rishdi, qaradi, quvondi"], "correctAnswer": 0, "difficulty": -0.28, "category": "Adabiyot"},
  {"id": "v30_lang_q11", "variant": 30, "subject": "lang", "text": "Qaysi gapda bo’lishsizlik ma’nosi faqat ohang yordamida hosil qilingan?", "options": ["Hech kim bilmay qolmaydi.", "Bir kuni egarga o‘ngarib, opqochaman-ketaman, - dedi o‘tni tizzasiga bosib. - Topib bo‘ptilar keyin!", "Otabek na Yusufbek hojiga, na 0 ‘zbek oyimga va na Hasanaliga Marg‘ilondan tez qaytib kelish sababini aytmagan.", "Hamroyev hech qachon majlisga borgan emas, ammo fursati bo‘lganda, bir tayyorlanib bormoqchi."], "correctAnswer": 1, "difficulty": -0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q12", "variant": 30, "subject": "lang", "text": "Qaysi gapda 2 o‘rinda buyruq-istak maylidagi o‘timsiz fe’l qatnashgan?", "options": ["\"Qani, qo‘lni bering, bir tabriklab qo‘yay\",− dedi zavqi oshib.", "Akangni chaqir, bugungi ishi uchun javob bersin.", "Yomg‘ir tezroq tinsa edi, qishloqqa qiynalmay yetib olardik.", "\"O‘rningdan tura qol, do‘stim, tashqariga chiqaylik\", −dedi u."], "correctAnswer": 0, "difficulty": -0.12, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q13", "variant": 30, "subject": "lang", "text": "Qaysi javobda yasama holat fe’li berilgan?", "options": ["U eshik oldida hech narsa bo‘lmaganday,gerdayib turardi", "Qaysidir voqea sabab Karimaga qasddan turxmat qildi", "Kechga yaqin charchab, arang yetib kelishdi", "Uyiga kelib biroz toliqqanini his qildi"], "correctAnswer": 0, "difficulty": -0.04, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q14", "variant": 30, "subject": "lang", "text": "Qaysi qatorda holat ravishi o‘timsiz fe’lga bog’langan?", "options": ["U eshik oldida hech narsa bo‘lmaganday,gerdayib", "", "", ""], "correctAnswer": 0, "difficulty": 0.04, "category": "Adabiyot"},
  {"id": "v30_lang_q15", "variant": 30, "subject": "lang", "text": "Qaysi qatorda faqat fe’l so’z turkumiga oid so’zlar keltirilgan?", "options": ["", "chopmadi sovimadi", "supurdi", "esdi"], "correctAnswer": 3, "difficulty": 0.12, "category": "Adabiyot"},
  {"id": "v30_lang_q16", "variant": 30, "subject": "lang", "text": "Qaysi javobda imloviy xato yozilgan fe’l turkumiga oid so‘z qatnashgan?", "options": ["U juda bepisanlik bilan gapirardi.", "Yolg‘on bo‘lsa, boq-chi ko‘zimga? 26", "O‘quvchilar yo‘l bo‘ylarida ko‘chat ekishayapti.", "Yigitning otasi kasmonavt edi. U bu bilan faxrlanardi."], "correctAnswer": 0, "difficulty": 0.2, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q17", "variant": 30, "subject": "lang", "text": "Qaysi gapda asosi fe’l bilan shakldosh bo‘la oladigan sodda yasama so‘z qatnashgan?", "options": ["Inson sog‘lig‘i hamma narsadan qimmat turadi.", "Rashid oqimga qarshi suzolmay qiynaldi.", "Faqat bir tilim handalak yedi-yu, issiq-issiq choy ichdi.", "Bu bo‘ychan yigit Karima xolaning o‘g‘li ekan."], "correctAnswer": 1, "difficulty": 0.28, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q18", "variant": 30, "subject": "lang", "text": "Qaysi javobdagi so‘z birikmasida fe’l bilan shakldosh bo‘la oladigan so‘z qatnashgan?", "options": ["uzun bo‘y", "shirin o‘y", "bugungi yumush", "yomon so‘z"], "correctAnswer": 0, "difficulty": 0.36, "category": "Adabiyot"},
  {"id": "v30_lang_q19", "variant": 30, "subject": "lang", "text": "Qaysi javobdagi so‘z birikmasida fe’l bilan shakldosh bo‘la oladigan so‘z qatnashgan?", "options": ["uzun bo‘y", "shirin o‘y", "bugungi yumush", "yomon so‘z"], "correctAnswer": 0, "difficulty": 0.44, "category": "Adabiyot"},
  {"id": "v30_lang_q20", "variant": 30, "subject": "lang", "text": "Fe’lning zamon shakllaridan uslubiy betaraflari qaysi javobda to‘g‘ri berilgan?", "options": ["-di, -gan, -yapti, -ar", "-moqda, -gan, -gay, -yotir", "-di, -yotir, -ar, -gay", "-ur, -gusi, -jak, -gay"], "correctAnswer": 0, "difficulty": 0.52, "category": "Adabiyot"},
  {"id": "v30_lang_q21", "variant": 30, "subject": "lang", "text": "Fe’lning kelasi zamon shaklini hosil qiluvchi quyidagi qo‘shimchalar haqidagi qaysi hukm to‘g‘ri? 1) -ar; 2) -jak; 3) -gay; 4) -ur", "options": ["1, 2, 3 - uslubiy betaraf, 4 - uslubiy xoslangan", "1, 2 - uslubiy betaraf, 3, 4 - uslubiy xoslangan", "1 - uslubiy betaraf, 2, 3, 4 - uslubiy xoslangan", "1, 4 - uslubiy betaraf, 2, 3 - uslubiy xoslangan"], "correctAnswer": 0, "difficulty": 0.6, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q22", "variant": 30, "subject": "lang", "text": "Qaysi fe’llar fe’ldan anglashilgan harakatning nutq momentiga nisbatan bajarilish yoki bajarilmaslik paytini bildirishiga ko‘ra farqlanadi?", "options": ["o‘qidim, o‘qiding, o‘qidi", "o‘qiy, o‘qisa, o‘qisin", "o‘qiyapman, o‘qibman, o‘qimoqchiman", "o‘qidi, o‘qitdi, o‘qildi"], "correctAnswer": 0, "difficulty": 0.68, "category": "Adabiyot"},
  {"id": "v30_lang_q23", "variant": 30, "subject": "lang", "text": "Qaysi fe’llar fe’ldan anglashilgan harakatning nutq momentiga nisbatan bajarilish yoki bajarilmaslik paytini bildirishiga ko‘ra farqlanadi?", "options": ["o‘qidim, o‘qiding, o‘qidi", "o‘qiy, o‘qisa, o‘qisin", "o‘qiyapman, o‘qibman, o‘qimoqchiman", "o‘qidi, o‘qitdi, o‘qildi"], "correctAnswer": 0, "difficulty": 0.76, "category": "Adabiyot"},
  {"id": "v30_lang_q24", "variant": 30, "subject": "lang", "text": "Omonlik tilasang, agar sen o‘zing, Tilingdan chiqarma yaroqsiz so‘zing. (Yu.X.Hojib) Ushbu baytdagi tilasang (a) hamda chiqarma (b) fe’llariga to‘g‘ri izoh berilgan javobni toping. 1) bo‘lishli; 2) bo‘lishsiz; 3) o‘timli; 4) o‘timsiz; 5) xabar mayli; 6) shart mayli; 7) buyruq-istak mayli; 8) tub so‘z; 9) yasama so‘z", "options": ["a - 1, 3, 6, 8; b - 2, 3, 7, 8", "a - 1, 3, 7, 9; b - 2, 4, 6, 8", "a - 2, 4, 6, 8; b - 1, 3, 5, 9", "a - 1, 4, 6, 9; b - 2, 3, 7, 9"], "correctAnswer": 0, "difficulty": 0.84, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q25", "variant": 30, "subject": "lang", "text": "Yozma nutq uslubiga xos bo‘lgan fe’lning hozirgi zamon qo‘shimchalarini aniqlang.", "options": ["-yapti, -moqchi", "-moqda, -yotir", "-yotir, -jak", "-yapti, -jak, -moqda"], "correctAnswer": 1, "difficulty": 0.92, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q26", "variant": 30, "subject": "lang", "text": "Qaysi gapning kesimi o‘tgan zamon ijro (xabar) maylidagi fe’l bilan ifodalangan?", "options": ["16 asr oldin toshga o‘yib bitilgan O‘rxun bitiklarini o‘qing.", "Har holda menga o‘xshagan o‘yinqaroq bolalar uchun bu yerda ermak topiladi.", "O‘rtog‘ingni quruq jo‘natmaylik, qizim!", "Tushimda qayerlargadir borib qolibman."], "correctAnswer": 2, "difficulty": 1.0, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q27", "variant": 30, "subject": "lang", "text": "Qaysi gapda hozirgi zamon qo‘shimchasini olgan fe’l ko‘makchi fe’lli so‘z qo‘shilmasi bo‘lib, yetakchi fe’l tarkibidagi so‘z yasovchi morfema, ko‘makchi fe’l tarkibidagi asos morfema omonimlik xarakteriga ega?", "options": ["Men baxtli yashayapman.", "Barglar sarg‘ayib to‘kildi.", "Yomg‘ir tobora kuchayib boryapti.", "O‘rtog‘iga bugungi topshiriqni aytib yubordi."], "correctAnswer": 2, "difficulty": 1.08, "category": "Ona tili (Grammatika)"},
  {"id": "v30_lang_q28", "variant": 30, "subject": "lang", "text": "Qaysi zamon shakli ba’zan harakatning doimiy, har uch zamonga oidligini ham ifodalaydi?", "options": ["kelasi zamon", "o‘tgan zamon", "hozirgi zamon", "hozirgi va kelasi zamon"], "correctAnswer": 0, "difficulty": 1.16, "category": "Adabiyot"},
  {"id": "v30_lang_q29", "variant": 30, "subject": "lang", "text": "Qaysi fe’l mayl(lar)i har uchala zamon ma’nosini bildira oladi? 1) xabar mayli; 2) buyruq-istak mayli; 3) shart mayli", "options": ["1, 2", "1", "2", "2, 3"], "correctAnswer": 0, "difficulty": 1.24, "category": "Adabiyot"},
  {"id": "v30_lang_q30", "variant": 30, "subject": "lang", "text": "Ushbu gaplarning qaysilarida boshqa bir ma’nosini ifodalagan? harakat va holatning bajarilishi yoki", "options": ["Avvalo, bu so‘zni o‘zgalar aytsin, aytsinlar bajarilmasligi uchun shart bo‘lgan harakat-holatni ko’zlari quvonchaa to'lib. Elning baxti uchun umrini bildiruvchi fe’l bor? tikkan shoirlar aytmasin birinchi bo‘lib.", "Tomirimda qaynar qon Tulporidan saylab ber. Yeldiray misli bo‘ron, Ostin-ustin bo’lsin yer.", "", ""], "correctAnswer": 0, "difficulty": 1.32, "category": "Ona tili (Grammatika)"}
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionBank };
}
