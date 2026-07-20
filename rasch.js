// Rasch Modeli Matematik Kutubxonasi (rasch.js)
// Ushbu modulda shaxs qobiliyati, savol qiyinchiligi, moslashuvchan test algoritmi (CAT)
// va o'qituvchilar paneli uchun JMLE kalibrlash hisob-kitoblari joylashgan.

// 1. Rasch Logistik Funksiyasi
// Qobiliyat (theta) va qiyinchilik (beta) berilganda to'g'ri javob berish ehtimoli
function getProbability(theta, beta) {
  return 1 / (1 + Math.exp(-(theta - beta)));
}

// 2. Foydalanuvchi Qobiliyatini Baholash (Newton-Raphson Estimation)
// responses: [0, 1, 1, 0, ...] (savollarga berilgan javoblar)
// itemDifficulties: [-1.2, 0.5, 0.8, -0.4, ...] (savollarning qiyinchilik logitlari)
function estimatePersonAbility(responses, itemDifficulties) {
  const n = responses.length;
  if (n === 0) return 0.0;

  let correctCount = responses.filter(r => r === 1).length;

  // Ekstremal holatlar (barcha javoblar xato yoki to'g'ri bo'lganda cheksizlikning oldini olish)
  if (correctCount === 0) {
    // 0.5 ball yondashuvi (correction)
    correctCount = 0.5;
  } else if (correctCount === n) {
    // n - 0.5 ball yondashuvi
    correctCount = n - 0.5;
  }

  // Dastlabki yaqinlashish (initial logit guess)
  let theta = Math.log(correctCount / (n - correctCount));

  // Newton-Raphson iteratsiyasi (15 marta yaqinlashish)
  const maxIterations = 15;
  const tolerance = 0.001;

  for (let iter = 0; iter < maxIterations; iter++) {
    let scoreResidual = 0; // f(theta)
    let fisherInformation = 0; // f'(theta)

    for (let i = 0; i < n; i++) {
      const beta = itemDifficulties[i];
      const p = getProbability(theta, beta);
      scoreResidual += (responses[i] - p);
      fisherInformation += p * (1 - p);
    }

    if (fisherInformation === 0) break;

    const delta = scoreResidual / fisherInformation;
    theta += delta;

    if (Math.abs(delta) < tolerance) {
      break;
    }
  }

  // Standard Error of Measurement (SEM) hisoblash
  let sumVariance = 0;
  for (let i = 0; i < n; i++) {
    const p = getProbability(theta, itemDifficulties[i]);
    sumVariance += p * (1 - p);
  }
  const sem = sumVariance > 0 ? 1 / Math.sqrt(sumVariance) : 1.0;

  return {
    theta: parseFloat(theta.toFixed(3)),
    sem: parseFloat(sem.toFixed(3)),
    percentage: Math.round((responses.filter(r => r === 1).length / n) * 100)
  };
}

// 3. Moslashuvchan test (CAT) uchun navbatdagi savolni tanlash
// theta: foydalanuvchining ayni paytdagi qobiliyat logiti
// remainingItems: hali yechilmagan savollar ro'yxati
function selectAdaptiveItem(theta, remainingItems) {
  if (remainingItems.length === 0) return null;

  // Rasch modelida eng ko'p ma'lumot beradigan savol - qiyinchiligi (beta) 
  // shaxs qobiliyatiga (theta) eng yaqin bo'lgan savoldir.
  let bestItem = remainingItems[0];
  let minDifference = Math.abs(remainingItems[0].difficulty - theta);

  for (let i = 1; i < remainingItems.length; i++) {
    const diff = Math.abs(remainingItems[i].difficulty - theta);
    if (diff < minDifference) {
      minDifference = diff;
      bestItem = remainingItems[i];
    }
  }

  return bestItem;
}

// 4. JMLE (Joint Maximum Likelihood Estimation) Kalibrlash Algoritmi
// responseMatrix: [ [1,0,1,...], [0,1,1,...], ... ] 
// (Satrlar: talabalar, ustunlar: savollar)
function estimateJMLE(responseMatrix, maxIterations = 20) {
  const N = responseMatrix.length; // Talabalar soni
  if (N === 0) return null;
  const I = responseMatrix[0].length; // Savollar soni

  // 1. Qobiliyat va qiyinchiliklarni boshlang'ich qiymatlash (Logit transformatsiyasi)
  let thetas = new Array(N).fill(0.0);
  let betas = new Array(I).fill(0.0);

  // Talabalar umumiy ballari
  const personScores = responseMatrix.map(row => row.reduce((a, b) => a + b, 0));
  // Savollar umumiy to'g'ri javoblari
  const itemScores = new Array(I).fill(0);
  for (let i = 0; i < I; i++) {
    for (let n = 0; n < N; n++) {
      itemScores[i] += responseMatrix[n][i];
    }
  }

  // Dastlabki qiymatlarni aniqlash
  for (let n = 0; n < N; n++) {
    let score = personScores[n];
    if (score === 0) score = 0.5;
    if (score === I) score = I - 0.5;
    thetas[n] = Math.log(score / (I - score));
  }

  for (let i = 0; i < I; i++) {
    let score = itemScores[i];
    if (score === 0) score = 0.5;
    if (score === N) score = N - 0.5;
    // Oson savollarga yuqori ball beriladi, qiyinlariga past, shuning uchun logit teskari belgilanadi
    betas[i] = Math.log((N - score) / score);
  }

  // Iterativ kalibrlash
  for (let iter = 0; iter < maxIterations; iter++) {
    // A. Shaxslar (Person) parametrlarini yangilash
    for (let n = 0; n < N; n++) {
      let r = personScores[n];
      if (r === 0) r = 0.5;
      if (r === I) r = I - 0.5;

      let theta = thetas[n];
      let sumP = 0;
      let sumVar = 0;

      for (let i = 0; i < I; i++) {
        const p = getProbability(theta, betas[i]);
        sumP += p;
        sumVar += p * (1 - p);
      }

      if (sumVar > 0) {
        thetas[n] += (r - sumP) / sumVar;
      }
    }

    // B. Savollar (Item) parametrlarini yangilash
    for (let i = 0; i < I; i++) {
      let s = itemScores[i];
      if (s === 0) s = 0.5;
      if (s === N) s = N - 0.5;

      let beta = betas[i];
      let sumP = 0;
      let sumVar = 0;

      for (let n = 0; n < N; n++) {
        const p = getProbability(thetas[n], beta);
        sumP += p;
        sumVar += p * (1 - p);
      }

      if (sumVar > 0) {
        // Savol qiyinligi uchun ayirish kerak
        betas[i] -= (s - sumP) / sumVar;
      }
    }

    // C. Skalani markazlashtirish (Savollar o'rtacha qiyinchiligi = 0 logit bo'lishi kerak)
    const sumBetas = betas.reduce((a, b) => a + b, 0);
    const meanBeta = sumBetas / I;

    for (let i = 0; i < I; i++) {
      betas[i] -= meanBeta;
    }
    for (let n = 0; n < N; n++) {
      thetas[n] -= meanBeta;
    }
  }

  // 5. Fit Statistics (Infit/Outfit MNSQ) hisoblash
  let infitMNSQ = new Array(I).fill(0.0);
  let outfitMNSQ = new Array(I).fill(0.0);

  for (let i = 0; i < I; i++) {
    let sumResidualSq = 0;
    let sumVariance = 0;
    let sumStdResidualSq = 0;

    for (let n = 0; n < N; n++) {
      const p = getProbability(thetas[n], betas[i]);
      const res = responseMatrix[n][i] - p;
      const resSq = res * res;
      const variance = p * (1 - p);

      sumResidualSq += resSq;
      sumVariance += variance;

      if (variance > 0) {
        sumStdResidualSq += resSq / variance;
      }
    }

    infitMNSQ[i] = sumVariance > 0 ? sumResidualSq / sumVariance : 1.0;
    outfitMNSQ[i] = N > 0 ? sumStdResidualSq / N : 1.0;
  }

  return {
    personAbilities: thetas.map(t => parseFloat(t.toFixed(3))),
    itemDifficulties: betas.map(b => parseFloat(b.toFixed(3))),
    infit: infitMNSQ.map(f => parseFloat(f.toFixed(3))),
    outfit: outfitMNSQ.map(f => parseFloat(f.toFixed(3)))
  };
}

// Global scope-ga eksport qilish (brauzerda foydalanish uchun)
window.Rasch = {
  getProbability,
  estimatePersonAbility,
  selectAdaptiveItem,
  estimateJMLE
};
