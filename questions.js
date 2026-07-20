// Matematika Milliy Sertifikat Savollar Bazasi (questions.js)
// Ushbu fayl 5 ta asosiy variantning 30 tadan (jami 150 ta) savollarini saqlaydi.
// Savollar DTM / Milliy sertifikat namunalaridan (PDF-dagi original savollardan) olingan.
// Savollarda geometrik chizmalar uchun chiroyli inline SVG elementlaridan foydalanilgan.

const questionBank = [
  // ==================== VARIANT 1 (BEPUL - 04.12.2022 original imtihon savollari) ====================
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
    text: "Ushbu chizmadagi Venn diagrammasidan foydalanib \\((A \\cap B) \\cup (A \\cup B)'\\) to'plam elementlar sonini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='260' height='160' viewBox='0 0 260 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><circle cx='100' cy='80' r='50' fill='none' stroke='#a78bfa' stroke-width='2'/><circle cx='160' cy='80' r='50' fill='none' stroke='#22d3ee' stroke-width='2'/><text x='70' y='45' fill='#a78bfa' font-size='14' font-weight='bold'>A</text><text x='190' y='45' fill='#22d3ee' font-size='14' font-weight='bold'>B</text><rect x='10' y='10' width='240' height='140' fill='none' stroke='#9ca3af' stroke-width='1'/><text x='235' y='140' fill='#9ca3af' font-size='12'>U</text><text x='70' y='75' fill='#f3f4f6' font-size='11'>10, 11</text><text x='80' y='95' fill='#f3f4f6' font-size='11'>4, 9</text><text x='130' y='70' fill='#f3f4f6' font-size='11'>12, 1</text><text x='130' y='95' fill='#f3f4f6' font-size='11'>8</text><text x='180' y='70' fill='#f3f4f6' font-size='11'>8, 14</text><text x='175' y='95' fill='#f3f4f6' font-size='11'>17</text><text x='120' y='35' fill='#fbbf24' font-size='11'>3, 5, 7</text></svg></div>",
    options: ["5", "7", "6", "9"],
    correctAnswer: 1,
    difficulty: 0.5,
    category: "To'plamlar"
  },

  // ==================== VARIANT 2 (QULFLANGAN - Starter Variant - 19.02.2023 original imtihon savollari) ====================
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
    text: "ABC uchburchakda AD, BN, CM medianalar kesishgan nuqtasi G nuqta bo'lsin. Agar ABC uchburchak yuzasi 48 ga teng bo'lsa, GDN uchburchak yuzini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='240' height='160' viewBox='0 0 240 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><polygon points='30,130 120,20 210,130' fill='none' stroke='#a78bfa' stroke-width='2'/><polygon points='120,130 75,75 165,75' fill='rgba(34,211,238,0.1)' stroke='#22d3ee' stroke-width='1.5'/><line x1='120' y1='20' x2='120' y2='130' stroke='#9ca3af' stroke-dasharray='3'/><text x='120' y='15' fill='#f3f4f6' font-size='11' text-anchor='middle'>B</text><text x='20' y='140' fill='#f3f4f6' font-size='11'>A</text><text x='215' y='140' fill='#f3f4f6' font-size='11'>C</text><text x='120' y='145' fill='#22d3ee' font-size='11' text-anchor='middle'>N</text><text x='110' y='70' fill='#fbbf24' font-size='11'>G</text></svg></div>",
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

  // ==================== VARIANT 3 (Starter - 5000 so'm - aralash original va yangi savollar) ====================
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

  // ==================== VARIANT 4 (QULFLANGAN - Standard Variant - 24.12.2023 original imtihon savollari) ====================
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

  // ==================== VARIANT 5 (QULFLANGAN - Premium Variant - 28.04.2024 original imtihon savollari) ====================
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
  { id: "v5_q25", variant: 5, text: "Muntazam sakkizburchak ABCDEFGH berilgan. GHCD to'rtburchak yuzi 12 bo'lsa, sakkizburchak yuzini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='180' height='160' viewBox='0 0 180 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><polygon points='90,10 145,35 170,90 145,145 90,170' fill='none' stroke='#a78bfa' stroke-width='2' transform='scale(0.8) translate(25, 20)'/><rect x='45' y='45' width='90' height='55' fill='rgba(34,211,238,0.2)' stroke='#22d3ee' stroke-width='1.5'/></svg></div>", options: ["18", "24", "28", "36"], correctAnswer: 1, difficulty: 1.1, category: "Geometriya (Planimetriya)" },
  { id: "v5_q26", variant: 5, text: "Uchburchak tomonlari \\(x\\), 5 va \\(3x - 5\\). \\(x\\) ning qabul qilishi mumkin bo'lgan eng katta natural qiymatini toping.", options: ["5", "4", "3", "2"], correctAnswer: 1, difficulty: 0.6, category: "Geometriya (Uchburchak)" },
  { id: "v5_q27", variant: 5, text: "Aylana vatar kesmalari berilgan: \\(CF = 6\\), \\(CG = 7\\), \\(GE = 5\\) va \\(ED = 6\\) bo'lsa, FG kesma uzunligini toping.", options: ["2", "3", "4", "5"], correctAnswer: 1, difficulty: 1.0, category: "Geometriya (Aylana)" },
  { id: "v5_q28", variant: 5, text: "ABC to'g'ri burchakli uchburchakning katetlaridan kvadratlar hosil qilingan. M nuqta AC ning o'rtasi. Agar katetlar 2 va 4 bo'lsa, MN kesma uzunligini toping.<br><div class='svg-container' style='display:flex; justify-content:center; margin:1rem 0;'><svg width='200' height='160' viewBox='0 0 200 160' style='background:rgba(255,255,255,0.02); border:1px solid var(--panel-border); border-radius:8px;'><polygon points='50,110 50,50 150,110' fill='none' stroke='#a78bfa' stroke-width='2'/><rect x='10' y='50' width='40' height='60' fill='none' stroke='#9ca3af'/><rect x='50' y='110' width='100' height='40' fill='none' stroke='#9ca3af'/><line x1='50' y1='50' x2='100' y2='80' stroke='#f87171' stroke-width='1.5'/><text x='48' y='42' fill='#f3f4f6' font-size='10'>C</text><text x='152' y='115' fill='#f3f4f6' font-size='10'>A</text><text x='100' y='75' fill='#fbbf24' font-size='10'>M</text></svg></div>", options: ["\\(\\frac{2}{\\sqrt{5}}\\)", "\\(\\frac{3}{\\sqrt{5}}\\)", "\\(\\frac{9}{\\sqrt{5}}\\)", "\\(\\frac{7}{\\sqrt{5}}\\)"], correctAnswer: 2, difficulty: 1.5, category: "Geometriya (Planimetriya)" },
  { id: "v5_q29", variant: 5, text: "Chizmada tomoni 4 bo'lgan muntazam oltiburchak berilgan. \\(\\vec{AB} + (\\vec{FE} + \\vec{ED})\\) vektorning qiymatini toping.", options: ["8", "8\\(\\sqrt{7}\\)", "4", "4\\(\\sqrt{7}\\)"], correctAnswer: 1, difficulty: 1.3, category: "Geometriya (Vektorlar)" },
  { id: "v5_q30", variant: 5, text: "ABC to'g'ri burchakli uchburchakning C to'g'ri burchak uchidan AB gipotenuzaga parallel tekislik o'tkazilgan. Tekislikdan gipotenuzagacha masofa 12 ga teng. Katetlarning tekislikdagi proyeksiyalari 16 va 9 bo'lsa, AB gipotenuza uzunligini toping.", options: ["25", "30", "24", "32"], correctAnswer: 0, difficulty: 1.2, category: "Geometriya (Planimetriya)" }
];

// Savollarni tashqi eksport qilish
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionBank };
}
