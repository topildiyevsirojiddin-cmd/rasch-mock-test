// Rasch Matematika Platformasi UI & Ilova Logikasi (app.js)

// 1. Dasturiy holat (Application State)
let state = {
  user: {
    // Matematika
    tier: 'free', // 'free', 'starter' (5k), 'standard' (9k), 'premium' (15k)
    attemptsLeft: 1,
    unlockedVariants: [1],
    // Ona tili va adabiyot
    langTier: 'free', // 'free', 'premium' (20k)
    langAttemptsLeft: 2,
    langUnlockedVariants: [1, 2],
    
    displayName: 'Nomzod',
    isAdmin: false
  },
  currentSubject: 'math', // 'math' or 'lang'
  currentTest: {
    active: false,
    isAdaptive: false,
    variantId: null,
    questions: [],
    currentIndex: 0,
    answers: {}, // questionId -> selectedOptionIndex
    responses: [], // array of 1 (correct) and 0 (incorrect) in order of questions solved
    difficulties: [], // array of item difficulties solved
    thetaHistory: [0.0], // CAT uchun theta rivojlanishi
    timer: null,
    timeLeft: 1200 // 20 daqiqa (soniyalarda)
  },
  paymentTemp: {
    targetTier: '',
    cost: 0
  },
  salesHistory: []
};

// Karta ma'lumotlari (Direct P2P To'lov uchun)
const ADMIN_CARD = "5614 6812 7158 4975";
const ADMIN_CARD_HOLDER = "TOPILDIYEV SIROJIDDIN";

// 2. LocalStorage dan foydalanuvchi holatini yuklash
function initUser() {
  // Programmatik versiya nazorati — eski brauzer xotirasini avtomat tozalaydi
  const CURRENT_VERSION = "1.7"; // Bumping to 1.7 for subject selector
  const storedVersion = localStorage.getItem('rasch_app_version');
  if (storedVersion !== CURRENT_VERSION) {
    localStorage.clear();
    localStorage.setItem('rasch_app_version', CURRENT_VERSION);
  }

  loadCustomVariants();
  const saved = localStorage.getItem('rasch_user_state');
  if (saved) {
    state.user = JSON.parse(saved);
  } else {
    saveUserState();
  }

  // To'lov tarixi va bepul foydalanish statistikasi (noldan boshlanadi)
  const savedSales = localStorage.getItem('rasch_sales_history');
  if (savedSales) {
    state.salesHistory = JSON.parse(savedSales);
  } else {
    state.salesHistory = [];
    localStorage.setItem('rasch_sales_history', JSON.stringify(state.salesHistory));
  }

  if (!state.user.displayName) {
    state.user.displayName = 'Nomzod';
  }

  // Telegram WebApp integratsiyasi
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.enableClosingConfirmation();

    // Telegram foydalanuvchi ismini o'qish
    const tgUser = tg.initDataUnsafe ? tg.initDataUnsafe.user : null;
    if (tgUser) {
      const displayName = tgUser.first_name + (tgUser.last_name ? ' ' + tgUser.last_name : '');
      state.user.displayName = displayName;
      saveUserState();
      setTimeout(() => {
        const welcomeEl = document.querySelector('.profile-name');
        if (welcomeEl) {
          welcomeEl.innerText = `Xush kelibsiz, ${displayName}!`;
        }
      }, 100);
    }
  }

  updateUIProfile();
  renderVariantsList();
}

function saveUserState() {
  localStorage.setItem('rasch_user_state', JSON.stringify(state.user));
}

// Dastur fanini o'zgartirish
function setSubject(subject) {
  state.currentSubject = subject;
  
  const btnMath = document.getElementById('btn-sub-math');
  const btnLang = document.getElementById('btn-sub-lang');
  const logoIcon = document.getElementById('logo-icon');
  const logoText = document.getElementById('logo-text');
  const welcomeDesc = document.getElementById('lbl-welcome-desc');
  const raschDesc = document.getElementById('lbl-rasch-desc');
  const pricingContainer = document.getElementById('pricing-tiers-container');
  
  if (subject === 'math') {
    if (btnMath) btnMath.className = 'btn btn-accent';
    if (btnLang) btnLang.className = 'btn btn-outline';
    if (logoIcon) logoIcon.innerText = '📐';
    if (logoText) logoText.innerText = 'Rasch Math';
    if (welcomeDesc) welcomeDesc.innerText = 'Matematika fani milliy sertifikat testlariga Rasch modeli bilan tayyorlaning.';
    if (raschDesc) raschDesc.innerHTML = 'Bizning platformada Matematika variantlarini yechish orqali siz o\'z bilimingizning haqiqiy <strong>logit (θ)</strong> shkalasidagi o\'lchovini bilib olasiz va milliy sertifikatga tayyorgarligingizni aniqlashtirasiz.';
    
    if (pricingContainer) {
      pricingContainer.innerHTML = `
        <button class="btn btn-outline btn-sm btn-block" onclick="openPaymentModal('starter', 5000)">Starter Tarif (2 ta variant) - 5 000 so'm</button>
        <button class="btn btn-outline btn-sm btn-block" onclick="openPaymentModal('standard', 9000)">Standard Tarif (5 ta variant) - 9 000 so'm</button>
        <button class="btn btn-accent btn-sm btn-block" onclick="openPaymentModal('premium', 15000)">Premium Tarif (Cheksiz) - 15 000 so'm</button>
      `;
    }
  } else {
    if (btnMath) btnMath.className = 'btn btn-outline';
    if (btnLang) btnLang.className = 'btn btn-accent';
    if (logoIcon) logoIcon.innerText = '📚';
    if (logoText) logoText.innerText = 'Rasch Ona Tili';
    if (welcomeDesc) welcomeDesc.innerText = 'Ona tili va Adabiyot fani milliy sertifikat testlariga Rasch modeli bilan tayyorlaning.';
    if (raschDesc) raschDesc.innerHTML = 'Bizning platformada Ona tili va Adabiyot variantlarini yechish orqali siz o\'z bilimingizning haqiqiy <strong>logit (θ)</strong> shkalasidagi o\'lchovini bilib olasiz va milliy sertifikatga tayyorgarligingizni aniqlashtirasiz.';
    
    if (pricingContainer) {
      pricingContainer.innerHTML = `
        <button class="btn btn-outline btn-sm btn-block" style="pointer-events: none; opacity: 0.8; border-color: var(--success); color: var(--success);">Tekin Variantlar (1-2 Variantlar) - BEPUL</button>
        <button class="btn btn-accent btn-sm btn-block" onclick="openPaymentModal('premium', 20000)">Premium Tarif (Hammasini ochish) - 20 000 so'm</button>
      `;
    }
  }
  
  updateUIProfile();
  renderVariantsList();
}

function selectSubjectFromLanding(subject) {
  setSubject(subject);
  document.body.classList.remove('landing-active');
  document.getElementById('landing-page').style.display = 'none';
  switchTab('dashboard');
}

function showLandingPage() {
  if (state.currentTest.active) {
    if (!confirm("Diqqat! Test hali tugamadi. Sahifadan chiqsangiz natijalar saqlanmaydi. Chiqasizmi?")) {
      return;
    }
    resetTestState();
  }
  document.body.classList.add('landing-active');
  document.getElementById('landing-page').style.display = 'flex';
}

// 3. UI yangilash (Profil va balans)
function updateUIProfile() {
  const isMath = state.currentSubject === 'math';
  const statusLabel = document.getElementById('profile-status-badge');
  statusLabel.className = 'profile-status';

  if (isMath) {
    document.getElementById('lbl-tier').innerText = state.user.tier.toUpperCase();
    document.getElementById('lbl-attempts').innerText = state.user.attemptsLeft;
    
    if (state.user.tier === 'premium') {
      statusLabel.classList.add('premium');
      statusLabel.innerHTML = '✨ Premium A\'zo';
      document.getElementById('lbl-attempts-container').style.display = 'none';
    } else {
      statusLabel.innerHTML = '👤 Oddiy foydalanuvchi';
      document.getElementById('lbl-attempts-container').style.display = 'block';
    }
  } else {
    // Ona tili va adabiyot
    const attempts = state.user.langAttemptsLeft !== undefined ? state.user.langAttemptsLeft : 2;
    const tier = state.user.langTier !== undefined ? state.user.langTier : 'free';
    
    document.getElementById('lbl-tier').innerText = tier.toUpperCase();
    document.getElementById('lbl-attempts').innerText = attempts;
    
    if (tier === 'premium') {
      statusLabel.classList.add('premium');
      statusLabel.innerHTML = '✨ Premium A\'zo (Ona tili)';
      document.getElementById('lbl-attempts-container').style.display = 'none';
    } else {
      statusLabel.innerHTML = '👤 Oddiy foydalanuvchi';
      document.getElementById('lbl-attempts-container').style.display = 'block';
    }
  }
}

// 4. Tablarni almashtirish logikasi
function switchTab(tabId) {
  // O'qituvchilar paneliga kirishni parol bilan himoyalash
  if (tabId === 'analyzer' && !state.user.isAdmin) {
    const pwd = prompt("O'qituvchilar paneli uchun parolni kiriting:");
    if (pwd === 'onajonim') {
      state.user.isAdmin = true;
      saveUserState();
      showToast("Ustoz paneli muvaffaqiyatli ochildi! Xush kelibsiz!", false);
    } else {
      if (pwd !== null) {
        showToast("Xato parol! O'qituvchilar paneliga kirish taqiqlanadi.", true);
      }
      return;
    }
  }

  // Agar faol test ketayotgan bo'lsa va chiqmoqchi bo'lsa tasdiqlash so'raymiz
  if (state.currentTest.active && tabId !== 'mocktest') {
    if (!confirm("Diqqat! Test hali tugamadi. Sahifadan chiqsangiz natijalar saqlanmaydi. Chiqasizmi?")) {
      return;
    }
    resetTestState();
  }

  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-links li').forEach(el => el.classList.remove('active'));

  const targetTab = document.getElementById(tabId);
  if (targetTab) targetTab.classList.add('active');

  const navLink = document.querySelector(`.nav-links li a[onclick="switchTab('${tabId}')"]`);
  if (navLink) navLink.parentElement.classList.add('active');

  // Har bir tab yuklanganda bajariladigan maxsus vazifalar
  if (tabId === 'analyzer') {
    initTeacherDashboard();
  }
}

// 5. Variantlar ro'yxatini render qilish
function renderVariantsList() {
  const container = document.getElementById('variants-grid');
  container.innerHTML = '';
  
  const isMath = state.currentSubject === 'math';

  // Moslashuvchan test (CAT) kartasi
  const catCard = document.createElement('div');
  catCard.className = 'card variant-card';
  catCard.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
      <h3>Moslashuvchan Test (Rasch CAT)</h3>
      <span class="variant-tag" style="background:rgba(34, 211, 238, 0.2); color:var(--accent);">Adaptiv</span>
    </div>
    <p class="variant-meta">Savollar qiyinchiligi sizning bilim darajangizga mos ravishda real vaqtda o'zgarib boradi.</p>
    <div class="variant-actions">
      <span style="font-weight:700; color:var(--success);">Bepul (Urinish sarflanadi)</span>
      <button class="btn btn-sm btn-accent" onclick="startAdaptiveTest()">Boshlash</button>
    </div>
  `;
  container.appendChild(catCard);

  // 30 ta standart variant
  for (let v = 1; v <= 30; v++) {
    let isUnlocked = false;
    if (isMath) {
      isUnlocked = v === 1 || state.user.unlockedVariants.includes(v) || state.user.tier === 'premium';
    } else {
      const unlockedList = state.user.langUnlockedVariants || [1, 2];
      const tier = state.user.langTier || 'free';
      isUnlocked = v === 1 || v === 2 || unlockedList.includes(v) || tier === 'premium';
    }

    const card = document.createElement('div');
    card.className = 'card variant-card';

    let actionHTML = '';
    let lockHTML = '';

    if (isUnlocked) {
      actionHTML = `
        <span style="color:var(--text-muted); font-size:0.85rem;">30 ta milliy sertifikat savollari</span>
        <button class="btn btn-sm" onclick="startStandardTest(${v})">Boshlash</button>
      `;
    } else {
      let cost = 0;
      let packName = '';
      if (isMath) {
        if (v <= 3) {
          cost = 5000;
          packName = "Starter Tarif (Variant 2-3)";
        } else if (v <= 8) {
          cost = 9000;
          packName = "Standard Tarif (Variant 4-8)";
        } else {
          cost = 15000;
          packName = "Premium Tarif (Variant 9-30)";
        }
      } else {
        cost = 20000;
        packName = "Ona Tili Premium (Variant 3-30)";
      }

      lockHTML = `
        <div class="locked-overlay">
          <div class="locked-icon">🔒</div>
          <div style="font-weight:600; font-size:0.85rem; color:var(--accent); margin-bottom:0.2rem;">${packName}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">Variant ${v} qulflangan</div>
          <button class="btn btn-sm btn-accent" onclick="triggerUnlockFlow(${v})" style="padding:0.4rem 0.8rem; font-size:0.75rem;">Tarifni ochish</button>
        </div>
      `;
    }

    const subjectPrefix = isMath ? 'Matematika' : 'Ona tili';
    const tagText = isMath ? (v === 1 ? 'Bepul' : 'A\'lo') : (v <= 2 ? 'Bepul' : 'A\'lo');
    const metaText = isMath 
      ? 'Algebra, geometriya va Progressiyalarga oid milliy sertifikat namunalari.'
      : 'Fonetika, sintaksis, leksikologiya va adabiyot bo\'yicha milliy sertifikat namunalari.';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <h3>${subjectPrefix} - Variant ${v}</h3>
        <span class="variant-tag" style="background:rgba(167, 139, 250, 0.2); color:var(--primary);">${tagText}</span>
      </div>
      <p class="variant-meta">${metaText}</p>
      <div class="variant-actions">
        ${actionHTML}
      </div>
      ${lockHTML}
    `;
    container.appendChild(card);
  }
}

// 6. To'lov tizimi oqimi (Unlock Flow)
function triggerUnlockFlow(variantId) {
  const isMath = state.currentSubject === 'math';
  let cost = 0;
  let tierName = '';

  if (isMath) {
    if (variantId <= 3) {
      cost = 5000;
      tierName = 'starter';
    } else if (variantId <= 8) {
      cost = 9000;
      tierName = 'standard';
    } else {
      cost = 15000;
      tierName = 'premium';
    }
  } else {
    cost = 20000;
    tierName = 'lang_premium';
  }

  openPaymentModal(tierName, cost);
}

function triggerPremiumUnlock() {
  if (state.currentSubject === 'math') {
    openPaymentModal('premium', 15000);
  } else {
    openPaymentModal('lang_premium', 20000);
  }
}

function openPaymentModal(tierName, cost) {
  state.paymentTemp.targetTier = tierName;
  state.paymentTemp.cost = cost;

  document.getElementById('modal-cost').innerText = cost.toLocaleString('uz-UZ') + " so'm";
  document.getElementById('admin-card-number').innerText = ADMIN_CARD;
  document.getElementById('admin-card-holder').innerText = ADMIN_CARD_HOLDER;

  const modal = document.getElementById('payment-modal');
  modal.classList.add('active');
}

function closePaymentModal() {
  const modal = document.getElementById('payment-modal');
  modal.classList.remove('active');
  const receiptInput = document.getElementById('payment-receipt');
  if (receiptInput) receiptInput.value = ''; // To'lov chekini tozalash
}

// Karta raqamini nusxalash
function copyCardNumber() {
  navigator.clipboard.writeText(ADMIN_CARD.replace(/\s+/g, '')).then(() => {
    showToast("Karta raqami nusxalandi!", false);
  });
}

function confirmPayment() {
  const receiptInput = document.getElementById('payment-receipt');
  if (!receiptInput.files || receiptInput.files.length === 0) {
    showToast("Iltimos, avval to'lov cheki (skrinshot yoki PDF) faylini yuklang!", true);
    return;
  }

  const tier = state.paymentTemp.targetTier;
  const cost = state.paymentTemp.cost;

  if (tier === 'starter') {
    state.user.tier = 'starter';
    for (let v = 2; v <= 3; v++) {
      if (!state.user.unlockedVariants.includes(v)) state.user.unlockedVariants.push(v);
    }
    state.user.attemptsLeft += 2;
  } else if (tier === 'standard') {
    state.user.tier = 'standard';
    for (let v = 2; v <= 8; v++) {
      if (!state.user.unlockedVariants.includes(v)) state.user.unlockedVariants.push(v);
    }
    state.user.attemptsLeft += 5;
  } else if (tier === 'premium') {
    state.user.tier = 'premium';
    for (let v = 2; v <= 30; v++) {
      if (!state.user.unlockedVariants.includes(v)) state.user.unlockedVariants.push(v);
    }
    state.user.attemptsLeft = 99999; // cheksiz
  } else if (tier === 'lang_premium') {
    state.user.langTier = 'premium';
    if (!state.user.langUnlockedVariants) state.user.langUnlockedVariants = [1, 2];
    for (let v = 3; v <= 30; v++) {
      if (!state.user.langUnlockedVariants.includes(v)) state.user.langUnlockedVariants.push(v);
    }
    state.user.langAttemptsLeft = 99999; // cheksiz
  }

  // Sotuv statistikasiga yozish
  logUsage(tier, cost);

  saveUserState();
  updateUIProfile();
  renderVariantsList();
  closePaymentModal();
  showToast("To'lov muvaffaqiyatli qabul qilindi va urinishlar qo'shildi! Rahmat!", false);
}

// 7. Toast Xabar ko'rsatish
function showToast(message, isError = false) {
  const toast = document.getElementById('payment-toast');
  const icon = toast.querySelector('.toast-icon');
  const text = toast.querySelector('.toast-text');

  text.innerText = message;
  if (isError) {
    toast.classList.add('error');
    icon.innerHTML = '❌';
  } else {
    toast.classList.remove('error');
    icon.innerHTML = '✓';
  }

  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}

// 8. Test topshirish jarayoni
// Helper: Savol variantlarini tasodifiy chalkashtirish (shuffling) va to'g'ri javob indeksini yangilash
function shuffleQuestionOptions(question) {
  if (!question) return null;
  const qClone = JSON.parse(JSON.stringify(question));
  const options = qClone.options;
  const correctText = options[qClone.correctAnswer];

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  qClone.correctAnswer = options.indexOf(correctText);
  return qClone;
}

// 8. Test topshirish jarayoni
function startStandardTest(variantId) {
  try {
    const isMath = state.currentSubject === 'math';
    const isFree = isMath ? (variantId === 1) : (variantId === 1 || variantId === 2);
    
    // Urinishlarni tekshirish
    if (!isFree) {
      if (isMath) {
        if (state.user.attemptsLeft <= 0 && state.user.tier !== 'premium') {
          showToast("Urinishlaringiz tugagan. Yangi variant sotib oling.", true);
          return;
        }
      } else {
        const attempts = state.user.langAttemptsLeft !== undefined ? state.user.langAttemptsLeft : 2;
        const tier = state.user.langTier || 'free';
        if (attempts <= 0 && tier !== 'premium') {
          showToast("Urinishlaringiz tugagan. Yangi variant sotib oling.", true);
          return;
        }
      }
    }

    // Bepul test topshirilganini statistikaga yozish
    if (isFree) {
      logUsage('free', 0);
    }

    // Savollarni fan bo'yicha filterlash
    let rawQuestions = questionBank.filter(q => q.variant === variantId && (q.subject || 'math') === state.currentSubject);
    if (rawQuestions.length === 0) {
      const pool = questionBank.filter(q => (q.subject || 'math') === state.currentSubject);
      if (pool.length === 0) {
        showToast("Ushbu fan uchun savollar yaqin orada qo'shiladi!", true);
        return;
      }
      const shuffledPool = pool.sort(() => 0.5 - Math.random());
      rawQuestions = shuffledPool.slice(0, 30).map((q, idx) => ({
        ...q,
        id: `v${variantId}_q${idx + 1}`,
        variant: variantId
      }));
    }

    // Variantlar chalkashtiriladi
    const questions = rawQuestions.map(shuffleQuestionOptions);

    // Urinishni kamaytirish (faqat bepul bo'lmagan variantlar uchun)
    if (!isFree) {
      if (isMath) {
        if (state.user.tier !== 'premium') {
          state.user.attemptsLeft--;
        }
      } else {
        const tier = state.user.langTier || 'free';
        if (tier !== 'premium') {
          state.user.langAttemptsLeft = (state.user.langAttemptsLeft !== undefined ? state.user.langAttemptsLeft : 2) - 1;
        }
      }
      saveUserState();
      updateUIProfile();
    }

    resetTestState();
    state.currentTest.active = true;
    state.currentTest.isAdaptive = false;
    state.currentTest.variantId = variantId;
    state.currentTest.questions = questions;
    state.currentTest.timeLeft = 5400; // 90 daqiqa (30 ta savol uchun)

    document.getElementById('test-title').innerText = `${isMath ? 'Matematika' : 'Ona tili'} - Variant ${variantId} testi`;
    showTestContainer();
  } catch (err) {
    showToast("Xatolik: " + err.message, true);
    console.error(err);
  }
}

function startAdaptiveTest() {
  const isMath = state.currentSubject === 'math';
  
  if (isMath) {
    if (state.user.attemptsLeft <= 0 && state.user.tier !== 'premium') {
      showToast("Urinishlaringiz tugagan. Yangi variant sotib oling.", true);
      return;
    }
    if (state.user.tier !== 'premium') {
      state.user.attemptsLeft--;
    }
  } else {
    const attempts = state.user.langAttemptsLeft !== undefined ? state.user.langAttemptsLeft : 2;
    const tier = state.user.langTier || 'free';
    if (attempts <= 0 && tier !== 'premium') {
      showToast("Urinishlaringiz tugagan. Yangi variant sotib oling.", true);
      return;
    }
    if (tier !== 'premium') {
      state.user.langAttemptsLeft = (state.user.langAttemptsLeft !== undefined ? state.user.langAttemptsLeft : 2) - 1;
    }
  }

  saveUserState();
  updateUIProfile();

  resetTestState();
  state.currentTest.active = true;
  state.currentTest.isAdaptive = true;
  state.currentTest.questions = []; // CAT dinamik yuklanadi
  state.currentTest.timeLeft = 1200; // 20 daqiqa (10 ta savol uchun)

  document.getElementById('test-title').innerText = `Rasch Moslashuvchan Test (${isMath ? 'Matematika' : 'Ona tili'})`;
  
  // Dastlabki savolni tanlash va uning javoblarini chalkashtirish
  const remaining = questionBank.filter(q => (q.subject || 'math') === state.currentSubject);
  if (remaining.length === 0) {
    showToast("Ushbu fan uchun savollar bazasi yuklanmoqda...", true);
    return;
  }
  const initialTheta = 0.0;
  const rawFirstQuestion = Rasch.selectAdaptiveItem(initialTheta, remaining);
  const firstQuestion = shuffleQuestionOptions(rawFirstQuestion);
  state.currentTest.questions.push(firstQuestion);

  showTestContainer();
}

function resetTestState() {
  clearInterval(state.currentTest.timer);
  state.currentTest = {
    active: false,
    isAdaptive: false,
    variantId: null,
    questions: [],
    currentIndex: 0,
    answers: {},
    responses: [],
    difficulties: [],
    thetaHistory: [0.0],
    timer: null,
    timeLeft: 1200
  };
  document.getElementById('test-results-view').style.display = 'none';
}

function showTestContainer() {
  document.getElementById('test-setup-view').style.display = 'none';
  document.getElementById('test-active-view').style.display = 'block';
  renderQuestion();
  startTimer();
}

function renderQuestion() {
  const index = state.currentTest.currentIndex;
  const question = state.currentTest.questions[index];
  if (!question) return;

  // Savol raqami
  document.getElementById('lbl-question-num').innerText = index + 1;
  document.getElementById('question-category').innerText = question.category;

  // Savol matni
  document.getElementById('question-text').innerHTML = question.text;

  // Javoblar variantlari
  const optionsContainer = document.getElementById('options-list');
  optionsContainer.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  question.options.forEach((opt, idx) => {
    const isSelected = state.currentTest.answers[question.id] === idx;
    const optionDiv = document.createElement('div');
    optionDiv.className = `option-item ${isSelected ? 'selected' : ''}`;
    optionDiv.innerHTML = `
      <span class="option-letter">${letters[idx]}</span>
      <span>${opt}</span>
    `;
    optionDiv.onclick = () => selectOption(question.id, idx);
    optionsContainer.appendChild(optionDiv);
  });

  // Navigatsiya tugmalari va nuqtalarini yangilash
  renderNavigationDots();

  // Orqaga tugmasini yoqish/o'chirish
  const btnPrev = document.getElementById('btn-prev');
  if (index === 0 || state.currentTest.isAdaptive) {
    btnPrev.style.display = 'none'; // CAT da orqaga qaytish mumkin emas
  } else {
    btnPrev.style.display = 'flex';
  }

  // Keyingi/Tugatish tugmasi
  const btnNext = document.getElementById('btn-next');
  const isLastQuestion = state.currentTest.isAdaptive ? (index === 9) : (index === state.currentTest.questions.length - 1);
  if (isLastQuestion) {
    btnNext.innerHTML = 'Testni Yakunlash 🏁';
  } else {
    btnNext.innerHTML = 'Keyingi savol ➔';
  }

  // LaTeX formulalarini render qilish
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.getElementById('test-active-view'), {
      delimiters: [
        {left: "\\(", right: "\\)", display: false},
        {left: "\\[", right: "\\]", display: true}
      ]
    });
  }
}

function renderNavigationDots() {
  const container = document.getElementById('navigation-dots');
  container.innerHTML = '';
  
  const totalCount = state.currentTest.isAdaptive ? 10 : state.currentTest.questions.length;

  for (let i = 0; i < totalCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'nav-dot';
    dot.innerText = i + 1;

    // CAT da kelajak savollarini bosib bo'lmaydi
    if (state.currentTest.isAdaptive) {
      if (i === state.currentTest.currentIndex) {
        dot.classList.add('active');
      } else if (i < state.currentTest.currentIndex) {
        dot.classList.add('answered');
      }
    } else {
      const qId = state.currentTest.questions[i] ? state.currentTest.questions[i].id : undefined;
      const isAnswered = state.currentTest.answers[qId] !== undefined;

      if (i === state.currentTest.currentIndex) {
        dot.classList.add('active');
      } else if (isAnswered) {
        dot.classList.add('answered');
      }
      dot.onclick = () => {
        state.currentTest.currentIndex = i;
        renderQuestion();
      };
    }
    container.appendChild(dot);
  }
}

function selectOption(questionId, optionIndex) {
  state.currentTest.answers[questionId] = optionIndex;
  renderQuestion();
}

function prevQuestion() {
  if (state.currentTest.currentIndex > 0) {
    state.currentTest.currentIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  const index = state.currentTest.currentIndex;
  const question = state.currentTest.questions[index];

  // Tanlangan javobni tekshirish
  if (state.currentTest.answers[question.id] === undefined) {
    alert("Iltimos, oldin savolga javob bering!");
    return;
  }

  const isCorrect = state.currentTest.answers[question.id] === question.correctAnswer ? 1 : 0;

  // CAT (Moslashuvchan) Test Yo'nalishi
  if (state.currentTest.isAdaptive) {
    state.currentTest.responses.push(isCorrect);
    state.currentTest.difficulties.push(question.difficulty);

    // Qobiliyatni hisoblash
    const est = Rasch.estimatePersonAbility(state.currentTest.responses, state.currentTest.difficulties);
    state.currentTest.thetaHistory.push(est.theta);

    if (index === 9) {
      // 10 ta savoldan keyin yakunlaymiz
      finishTest();
    } else {
      // Keyingi eng mos savolni tanlaymiz
      const solvedIds = state.currentTest.questions.map(q => q.id);
      const remaining = questionBank.filter(q => !solvedIds.includes(q.id));
      const rawNextQ = Rasch.selectAdaptiveItem(est.theta, remaining);
      const nextQ = shuffleQuestionOptions(rawNextQ);
      
      state.currentTest.questions.push(nextQ);
      state.currentTest.currentIndex++;
      renderQuestion();
    }
  } 
  // Standart Test Yo'nalishi
  else {
    const isLast = index === state.currentTest.questions.length - 1;
    if (isLast) {
      finishTest();
    } else {
      state.currentTest.currentIndex++;
      renderQuestion();
    }
  }
}

// 9. Taymer
function startTimer() {
  const timerElement = document.getElementById('timer-val');
  state.currentTest.timer = setInterval(() => {
    state.currentTest.timeLeft--;
    
    const minutes = Math.floor(state.currentTest.timeLeft / 60);
    const seconds = state.currentTest.timeLeft % 60;
    
    timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (state.currentTest.timeLeft <= 0) {
      clearInterval(state.currentTest.timer);
      alert("Vaqt tugadi!");
      finishTest();
    }
  }, 1000);
}

// 10. Testni yakunlash va natijalar
function finishTest() {
  clearInterval(state.currentTest.timer);
  state.currentTest.active = false;

  let responses = [];
  let difficulties = [];

  if (state.currentTest.isAdaptive) {
    responses = state.currentTest.responses;
    difficulties = state.currentTest.difficulties;
  } else {
    state.currentTest.questions.forEach(q => {
      const isCorrect = state.currentTest.answers[q.id] === q.correctAnswer ? 1 : 0;
      responses.push(isCorrect);
      difficulties.push(q.difficulty);
    });
  }

  // Rasch modeli bo'yicha baholash
  const result = Rasch.estimatePersonAbility(responses, difficulties);

  document.getElementById('test-active-view').style.display = 'none';
  document.getElementById('test-results-view').style.display = 'block';

  // Natijalarni ko'rsatish
  const correctCount = responses.filter(r => r === 1).length;
  document.getElementById('lbl-res-score').innerText = `${correctCount}/${responses.length}`;
  document.getElementById('lbl-res-percent').innerText = `${result.percentage}%`;
  document.getElementById('lbl-res-theta').innerText = `${result.theta > 0 ? '+' : ''}${result.theta} logit`;
  document.getElementById('lbl-res-sem').innerText = `±${result.sem} logit`;

  // 1. Qobiliyat bahosi (A+, A, B+, B, C+, C, F) ni hisoblash va ko'rsatish
  let grade = 'F';
  const isMath = state.currentSubject === 'math';

  if (isMath) {
    if (result.theta >= 2.0) grade = 'A+ 🥇 (90%+ ball) - MUKAMMAL!';
    else if (result.theta >= 1.2) grade = 'A 🥈 (80%-89% ball) - JUDA YAXSHI!';
    else if (result.theta >= 0.5) grade = 'B+ 🥉 (70%-79% ball) - YAXSHI!';
    else if (result.theta >= 0.0) grade = 'B 🎖️ (60%-69% ball) - QONIQARLI!';
    else if (result.theta >= -0.5) grade = 'C+ 📈 (50%-59% ball) - CHEGARAVIY QONIQARLI!';
    else if (result.theta >= -1.2) grade = 'C 📉 (40%-49% ball) - PAST DARAJA!';
    else grade = 'F ❌ (40% dan past) - SERTIFIKAT BERILMAYDI';
  } else {
    // Ona tili va adabiyot (BMB / DTM Milliy sertifikat baholash tizimi)
    const percentage = result.percentage;
    if (percentage >= 70) grade = 'A+ 🥇 (70 ball va undan yuqori) - MUKAMMAL!';
    else if (percentage >= 65) grade = 'A 🥈 (65 - 69.9 ball) - JUDA YAXSHI!';
    else if (percentage >= 60) grade = 'B+ 🥉 (60 - 64.9 ball) - YAXSHI!';
    else if (percentage >= 55) grade = 'B 🎖️ (55 - 59.9 ball) - QONIQARLI!';
    else if (percentage >= 50) grade = 'C+ 📈 (50 - 54.9 ball) - CHEGARAVIY QONIQARLI!';
    else if (percentage >= 46) grade = 'C 📉 (46 - 49.9 ball) - PAST DARAJA!';
    else grade = 'F ❌ (46 ball dan past) - SERTIFIKAT BERILMAYDI';
  }

  const gradeEl = document.getElementById('lbl-res-sertifikat-grade');
  if (gradeEl) {
    gradeEl.innerText = grade;
    if (grade.startsWith('F')) {
      gradeEl.style.color = '#ef4444';
    } else if (grade.startsWith('C')) {
      gradeEl.style.color = '#fbbf24';
    } else {
      gradeEl.style.color = '#10b981';
    }
  }

  // 2. Bo'limlar bo'yicha kamchiliklar va tahlillar
  const categoryStats = {};
  state.currentTest.questions.forEach((q, idx) => {
    const isCorrect = state.currentTest.isAdaptive 
      ? state.currentTest.responses[idx] 
      : (state.currentTest.answers[q.id] === q.correctAnswer ? 1 : 0);
    
    const cat = q.category || 'Boshqa';
    if (!categoryStats[cat]) {
      categoryStats[cat] = { total: 0, correct: 0 };
    }
    categoryStats[cat].total++;
    if (isCorrect) categoryStats[cat].correct++;
  });

  const weaknessesEl = document.getElementById('lbl-res-weaknesses');
  if (weaknessesEl) {
    let weakHTML = '';
    let hasWeaknesses = false;

    for (const [cat, stats] of Object.entries(categoryStats)) {
      const accuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
      if (accuracy < 60) {
        hasWeaknesses = true;
        let advice = '';
        if (isMath) {
          if (cat.includes('Geometriya')) advice = "Geometrik chizmalar, burchaklar va yuzalarni hisoblash formulalarini takrorlang.";
          else if (cat.includes('Trigonometriya')) advice = "Trigonometrik ayniyatlar, keltirish formulalari va tenglamalarni qayta ko'rib chiqing.";
          else if (cat.includes('Analiz')) advice = "Hosilalar, integrallar va ularning geometrik ma'nolariga ko'proq e'tibor qarating.";
          else if (cat.includes('Tenglama') || cat.includes('tengsizlik')) advice = "Kvadrat, ko'rsatkichli va logarifmik tenglama/tengsizliklarni yechish usullarini mustahkamlang.";
          else if (cat.includes('Sonlar')) advice = "Tub bo'luvchilar, sonli ketma-ketliklar va amallarni bajarish qoidalarini takrorlang.";
          else advice = "Ushbu mavzuda ko'proq amaliy mashg'ulotlar bajaring.";
        } else {
          if (cat.includes('Fonetika') || cat.includes('imlo')) advice = "Fonetika qoidalari va imlo lug'atiga ko'proq e'tibor qarating.";
          else if (cat.includes('Leksikologiya') || cat.includes('frazeologiya')) advice = "So'z ma'nolari, sinonimlar va iboralar tahlilini mustahkamlang.";
          else if (cat.includes('Morfologiya')) advice = "Mustaqil va yordamchi so'z turkumlari, ularning turlanish hamda tuslanish qoidalarini takrorlang.";
          else if (cat.includes('Sintaksis')) advice = "Gap bo'laklari, sodda va qo'shma gaplar tahlilini qayta ko'rib chiqing.";
          else if (cat.includes('Adabiyot')) advice = "Adabiy asarlar, dostonlar va ijodkorlar tarjimai holini chuqurroq takrorlang.";
          else advice = "Ushbu ona tili mavzusi bo'yicha qoidalarni qayta o'qing.";
        }

        weakHTML += `
          <div style="background:rgba(251,191,36,0.04); border-left: 3px solid #fbbf24; padding:0.6rem; border-radius:6px; margin-bottom: 6px; font-size:0.8rem; line-height:1.4;">
            <strong>📌 ${cat}:</strong> ${stats.correct}/${stats.total} to'g'ri (${Math.round(accuracy)}%). <span style="color:var(--text-muted);">${advice}</span>
          </div>
        `;
      }
    }

    if (hasWeaknesses) {
      weaknessesEl.innerHTML = weakHTML;
    } else {
      weaknessesEl.innerHTML = `<div style="color:#10b981; font-weight:600; font-size:0.85rem;">🎉 Ajoyib! Barcha bo'limlardan yuqori natija ko'rsatdingiz. Kamchiliklar aniqlanmadi!</div>`;
    }
  }

  // 3. Savollar bo'yicha batafsil ro'yxat (xatolarni qizil bilan belgilash)
  const listEl = document.getElementById('div-res-questions-list');
  if (listEl) {
    let listHTML = '';
    state.currentTest.questions.forEach((q, idx) => {
      const userAnswerIdx = state.currentTest.isAdaptive 
        ? (state.currentTest.responses[idx] ? q.correctAnswer : -1)
        : state.currentTest.answers[q.id];
      
      const isCorrect = state.currentTest.isAdaptive
        ? state.currentTest.responses[idx] === 1
        : (userAnswerIdx === q.correctAnswer);

      const statusIcon = isCorrect ? '✅ TO\'G\'RI' : '❌ NOTO\'G\'RI (XATO)';
      const statusColor = isCorrect ? '#10b981' : '#ef4444';
      const bgColor = isCorrect ? 'rgba(16,185,129,0.02)' : 'rgba(239,68,68,0.02)';
      const borderColor = isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.15)';

      let optionsHTML = '';
      q.options.forEach((opt, optIdx) => {
        let optBg = 'transparent';
        let optBorder = '1px solid var(--panel-border)';
        let optColor = 'var(--text-main)';
        
        if (optIdx === q.correctAnswer) {
          optBg = 'rgba(16,185,129,0.12)';
          optBorder = '1px solid #10b981';
          optColor = '#10b981';
        } else if (optIdx === userAnswerIdx && !isCorrect) {
          optBg = 'rgba(239,68,68,0.12)';
          optBorder = '1px solid #ef4444';
          optColor = '#ef4444';
        }

        optionsHTML += `
          <div style="background:${optBg}; border:${optBorder}; color:${optColor}; padding:0.5rem; border-radius:6px; margin-top:4px; font-size:0.8rem; line-height:1.3;">
            ${String.fromCharCode(65 + optIdx)}) ${opt}
          </div>
        `;
      });

      listHTML += `
        <div style="background:${bgColor}; border:1px solid ${borderColor}; padding:1rem; border-radius:8px; display:flex; flex-direction:column; gap:0.5rem; text-align:left;">
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; margin-bottom: 4px;">
            <span style="color:var(--text-muted);">Mavzu: <strong>${q.category || 'Boshqa'}</strong></span>
            <span style="color:${statusColor}; font-weight:bold; font-size:0.8rem;">${statusIcon}</span>
          </div>
          <div style="font-size:0.85rem; font-weight:600; line-height:1.4; color:var(--text-main);">
            ${idx + 1}. ${q.text}
          </div>
          <div style="display:grid; grid-template-columns:1fr; gap:4px; margin-top:8px;">
            ${optionsHTML}
          </div>
        </div>
      `;
    });
    listEl.innerHTML = listHTML;

    // Matematik formulalarni qayta render qilish
    if (window.MathJax) {
      setTimeout(() => {
        MathJax.typesetPromise([listEl]).catch(err => console.log(err));
      }, 200);
    }
  }

  // Izoh yozish (Feedback)
  let feedback = '';
  if (result.theta >= 1.5) feedback = "Ajoyib natija! Sizning qobiliyatingiz Milliy Sertifikat A+ darajasiga to'liq mos keladi. Yuqori darajadagi matematik masalalarni ham oson bajarasiz.";
  else if (result.theta >= 0.5) feedback = "Yaxshi natija! Sizda A yoki B darajadagi sertifikatni olish uchun imkoniyatlar yuqori. Qiyinroq integrallar va geometriya ustida biroz ishlang.";
  else if (result.theta >= -0.5) feedback = "O'rtacha natija. Qobiliyatingiz B yoki C darajaga yetadi. Progressiyalar va trigonometriyaga oid mavzularni takrorlashingizni tavsiya qilamiz.";
  else feedback = "Qoniqarsiz. Qobiliyat darajangiz o'rtachadan past. Algebraik shakl almashtirishlar va arifmetikadan boshlab tayyorlanish tavsiya qilinadi.";
  
  document.getElementById('lbl-res-feedback').innerText = feedback;

  // Chart.js grafigini chizish
  drawResultChart();
}

function drawResultChart() {
  const ctx = document.getElementById('theta-chart').getContext('2d');
  
  // Eskisini o'chirish
  if (window.myResultChart) {
    window.myResultChart.destroy();
  }

  let labels = [];
  let data = [];

  if (state.currentTest.isAdaptive) {
    labels = state.currentTest.thetaHistory.map((_, idx) => idx === 0 ? "Boshlang'ich" : `${idx}-savol`);
    data = state.currentTest.thetaHistory;
  } else {
    // Standart testda shunchaki to'g'ri/noto'g'ri chizig'ini chiqaramiz
    labels = state.currentTest.questions.map((_, idx) => `${idx + 1}-savol`);
    let cumulativeCorrect = 0;
    state.currentTest.questions.forEach((q, idx) => {
      const isCorrect = state.currentTest.answers[q.id] === q.correctAnswer ? 1 : 0;
      cumulativeCorrect += isCorrect;
      data.push(cumulativeCorrect);
    });
  }

  window.myResultChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: state.currentTest.isAdaptive ? "Qobiliyat darajangiz (Logit, θ)" : "To'g'ri javoblar yig'indisi",
        data: data,
        borderColor: '#a78bfa',
        backgroundColor: 'rgba(167, 139, 250, 0.1)',
        tension: 0.3,
        fill: true,
        borderWidth: 3,
        pointBackgroundColor: '#22d3ee',
        pointBorderColor: '#ffffff',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#f3f4f6', font: { family: 'Outfit' } }
        }
      },
      scales: {
        y: {
          grid: { color: 'rgba(255,255,255,0.1)' },
          ticks: { color: '#9ca3af', font: { family: 'Outfit' } }
        },
        x: {
          grid: { color: 'rgba(255,255,255,0.1)' },
          ticks: { color: '#9ca3af', font: { family: 'Outfit' } }
        }
      }
    }
  });
}

function quitTest() {
  resetTestState();
  
  // Clear result and analysis DOM elements to prevent leftover text in new tests
  const weaknessesEl = document.getElementById('lbl-res-weaknesses');
  if (weaknessesEl) weaknessesEl.innerHTML = '';
  const listEl = document.getElementById('div-res-questions-list');
  if (listEl) listEl.innerHTML = '';
  const gradeEl = document.getElementById('lbl-res-sertifikat-grade');
  if (gradeEl) gradeEl.innerText = '-';
  const scoreEl = document.getElementById('lbl-res-score');
  if (scoreEl) scoreEl.innerText = '0/0';
  const percentEl = document.getElementById('lbl-res-percent');
  if (percentEl) percentEl.innerText = '0%';
  const feedbackEl = document.getElementById('lbl-res-feedback');
  if (feedbackEl) feedbackEl.innerText = '';

  document.getElementById('test-setup-view').style.display = 'block';
  document.getElementById('test-active-view').style.display = 'none';
  document.getElementById('test-results-view').style.display = 'none';
  
  renderVariantsList();
  switchTab('mocktest'); // Srazi testlar bolimiga o'tadi
}

// 11. O'qituvchi/Admin Paneli Logikasi
// Haqiqiy JMLE kalibrlashni namoyish qilish uchun pre-populated model
const SAMPLE_MATRIX = [
  // 15 ta talabaning 8 ta matematika savoliga javoblari
  [1, 1, 1, 1, 1, 0, 0, 0], // S1: kuchli talaba
  [1, 1, 1, 1, 0, 1, 0, 0], // S2
  [1, 1, 1, 0, 0, 1, 0, 0], // S3
  [1, 1, 1, 1, 1, 1, 1, 0], // S4: juda kuchli
  [1, 1, 1, 1, 0, 0, 0, 0], // S5
  [1, 1, 0, 1, 0, 0, 0, 0], // S6
  [1, 0, 1, 0, 0, 0, 0, 0], // S7: o'rta-past
  [0, 1, 1, 0, 1, 0, 0, 0], // S8
  [1, 1, 0, 1, 1, 0, 0, 0], // S9
  [1, 0, 0, 0, 0, 0, 0, 0], // S10: zaif talaba
  [1, 1, 1, 1, 1, 0, 1, 1], // S11: a'lochi
  [1, 1, 0, 0, 0, 1, 0, 0], // S12
  [1, 0, 1, 1, 0, 0, 0, 0], // S13
  [0, 1, 0, 0, 0, 0, 0, 0], // S14
  [0, 0, 0, 0, 0, 0, 0, 0]  // S15: juda zaif
];

const SAMPLE_ITEMS = [
  "Tenglama (Oson)", "Progressiya (Oson)", "Sodda Geometriya", "Logarifm (O'rtacha)",
  "Hosila (Qiyin)", "Integral (Qiyin)", "Kombinatorika", "Kosinuslar teoremasi (Juda qiyin)"
];

function initTeacherDashboard() {
  renderSalesStats();
  const tableHead = document.getElementById('tbl-matrix-head');
  const tableBody = document.getElementById('tbl-matrix-body');

  tableHead.innerHTML = '';
  tableBody.innerHTML = '';

  // Sarlavha yozish
  let headRow = '<tr><th>Talaba / Savol</th>';
  for (let i = 0; i < SAMPLE_ITEMS.length; i++) {
    headRow += `<th title="${SAMPLE_ITEMS[i]}">S${i + 1}</th>`;
  }
  headRow += '<th>Umumiy ball</th></tr>';
  tableHead.innerHTML = headRow;

  // Matritsani chizish
  SAMPLE_MATRIX.forEach((row, sIdx) => {
    let tr = document.createElement('tr');
    let rowHTML = `<td><strong>Talaba ${sIdx + 1}</strong></td>`;
    let total = 0;
    
    row.forEach(val => {
      total += val;
      rowHTML += `<td class="matrix-val ${val === 1 ? 'correct' : 'incorrect'}">${val}</td>`;
    });

    rowHTML += `<td><strong>${total} / ${row.length}</strong></td>`;
    tr.innerHTML = rowHTML;
    tableBody.appendChild(tr);
  });
}

function runRaschCalibration() {
  // JMLE algoritmini chaqiramiz
  const result = Rasch.estimateJMLE(SAMPLE_MATRIX);
  if (!result) return;

  // Wright Map chizish
  drawWrightMap(result.personAbilities, result.itemDifficulties);

  // ICC (Item Characteristic Curve) chizish
  drawICCChart(result.itemDifficulties);

  // Kalibrlash natijalarini ko'rsatish
  const container = document.getElementById('calibration-results-container');
  container.style.display = 'block';
  showToast("Kalibrlash yakunlandi! Wright Map va grafiklar chizildi.", false);
}

// 12. Wright Map rendering (HTML/CSS yordamida chiroyli solishtirish)
function drawWrightMap(abilities, difficulties) {
  const mapContainer = document.getElementById('wright-map-view');
  mapContainer.innerHTML = '';

  // Logitlar bo'yicha guruhlash (-3.0 dan +3.0 gacha, qadam: 0.5)
  const steps = [3.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.0, -0.5, -1.0, -1.5, -2.0, -2.5, -3.0];
  
  let html = `
    <div style="display:grid; grid-template-columns: 2fr 1fr 2fr; gap:10px; width:100%; border:1px solid var(--panel-border); border-radius:12px; padding:1.2rem; background:rgba(0,0,0,0.1);">
      <div style="text-align:center; font-weight:700; border-bottom:1px solid var(--panel-border); padding-bottom:5px; color:var(--primary);">Nomzodlar Qobiliyati (θ)</div>
      <div style="text-align:center; font-weight:700; border-bottom:1px solid var(--panel-border); padding-bottom:5px;">Logit</div>
      <div style="text-align:center; font-weight:700; border-bottom:1px solid var(--panel-border); padding-bottom:5px; color:var(--accent);">Savollar Qiyinchiligi (β)</div>
  `;

  steps.forEach(logit => {
    // Ushbu oraliqqa tushgan talabalarni aniqlash
    const matchedStudents = abilities.filter(a => a >= logit - 0.25 && a < logit + 0.25);
    const studentIcons = matchedStudents.map((_, i) => '👤').join(' ');

    // Ushbu oraliqqa tushgan savollarni aniqlash
    const matchedItems = [];
    difficulties.forEach((d, idx) => {
      if (d >= logit - 0.25 && d < logit + 0.25) {
        matchedItems.push(`Savol ${idx + 1}`);
      }
    });
    const itemsText = matchedItems.join(', ');

    html += `
      <div style="text-align:right; font-size:0.9rem; color:var(--text-main); font-family: monospace; min-height:30px; display:flex; align-items:center; justify-content:flex-end; padding-right:10px; border-right:1px dashed var(--panel-border);">
        ${studentIcons} <span style="color:var(--text-muted); font-size:0.75rem; margin-left:5px;">(${matchedStudents.length})</span>
      </div>
      <div style="text-align:center; font-weight:700; color:var(--warning); display:flex; align-items:center; justify-content:center; font-family:monospace;">
        ${logit > 0 ? '+' : ''}${logit.toFixed(1)}
      </div>
      <div style="text-align:left; font-size:0.85rem; color:var(--accent); font-weight:600; display:flex; align-items:center; padding-left:10px; border-left:1px dashed var(--panel-border);">
        ${itemsText || '<span style="color:rgba(255,255,255,0.05); font-weight:normal;">—</span>'}
      </div>
    `;
  });

  html += `</div>`;
  mapContainer.innerHTML = html;
}

// 13. ICC (Item Characteristic Curve) chizish
function drawICCChart(difficulties) {
  const ctx = document.getElementById('icc-chart').getContext('2d');
  
  if (window.myICCChart) {
    window.myICCChart.destroy();
  }

  // -4.0 dan +4.0 gacha bo'lgan theta shkalasi uchun egrilik chizish
  const thetaScale = [];
  for (let t = -4.0; t <= 4.0; t += 0.2) {
    thetaScale.push(parseFloat(t.toFixed(1)));
  }

  // Savol 4 (Logarifm) va Savol 6 (Integral) uchun chizamiz
  const beta4 = difficulties[3]; // logarifm
  const beta6 = difficulties[5]; // integral

  const p4 = thetaScale.map(theta => Rasch.getProbability(theta, beta4));
  const p6 = thetaScale.map(theta => Rasch.getProbability(theta, beta6));

  window.myICCChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: thetaScale,
      datasets: [
        {
          label: `Savol 4: Logarifm (qiyinchilik: ${beta4 > 0 ? '+' : ''}${beta4} logit)`,
          data: p4,
          borderColor: '#22d3ee',
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          tension: 0.1
        },
        {
          label: `Savol 6: Integral (qiyinchilik: ${beta6 > 0 ? '+' : ''}${beta6} logit)`,
          data: p6,
          borderColor: '#f87171',
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          tension: 0.1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#f3f4f6', font: { family: 'Outfit' } } }
      },
      scales: {
        y: {
          title: { display: true, text: 'To\'g\'ri javob berish ehtimolligi (P)', color: '#9ca3af' },
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#9ca3af' },
          min: 0,
          max: 1
        },
        x: {
          title: { display: true, text: 'Qobiliyat (θ logit)', color: '#9ca3af' },
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#9ca3af' }
        }
      }
    }
  });
}

// 14. Sahifani yuklash (On load)
// 15. Custom Variantlarni yuklash va boshqarish (Admin import)
function importCustomVariant() {
  const jsonText = document.getElementById('txt-import-json').value.trim();
  const variantId = parseInt(document.getElementById('num-import-variant').value);
  
  if (!jsonText) {
    showToast("Iltimos, JSON matnini kiriting!", true);
    return;
  }
  
  try {
    const list = JSON.parse(jsonText);
    if (!Array.isArray(list) || list.length === 0) {
      throw new Error("JSON massiv (Array) formatida bo'lishi kerak!");
    }
    
    const valid = list.every(q => q.text && Array.isArray(q.options) && q.options.length === 4 && typeof q.correctAnswer === 'number');
    if (!valid) {
      throw new Error("Savollar formati noto'g'ri (text, options[4] va correctAnswer bo'lishi shart)!");
    }
    
    const saved = localStorage.getItem('rasch_custom_variants') ? JSON.parse(localStorage.getItem('rasch_custom_variants')) : {};
    saved[variantId] = list.map((q, idx) => ({ 
      ...q, 
      id: q.id || `v${variantId}_q${idx + 1}`,
      variant: variantId,
      difficulty: typeof q.difficulty === 'number' ? q.difficulty : 0.0,
      category: q.category || 'Algebra'
    }));
    localStorage.setItem('rasch_custom_variants', JSON.stringify(saved));
    
    // Qayta yuklash va ko'rsatish
    loadCustomVariants();
    
    showToast(`Variant ${variantId} yuklandi (Jami ${list.length} ta savol)!`, false);
    document.getElementById('txt-import-json').value = '';
    renderVariantsList();
  } catch (err) {
    showToast("Yuklashda xatolik: " + err.message, true);
  }
}

function loadCustomVariants() {
  const saved = localStorage.getItem('rasch_custom_variants');
  if (saved) {
    const custom = JSON.parse(saved);
    Object.keys(custom).forEach(vId => {
      const variantId = parseInt(vId);
      // Eski variant savollarini tozalaymiz
      for (let i = questionBank.length - 1; i >= 0; i--) {
        if (questionBank[i].variant === variantId) {
          questionBank.splice(i, 1);
        }
      }
      // Yangi yuklangan savollarni qo'shamiz
      questionBank.push(...custom[vId]);
    });
  }
}

window.onload = function() {
  initUser();
  switchTab('dashboard');
};

// 16. PDF nusxalangan matnidan savollarni avtomatik import qilish
function importFromPDFText() {
  const text = document.getElementById('txt-import-pdf').value.trim();
  const variantId = parseInt(document.getElementById('num-import-variant').value);
  
  if (!text) {
    showToast("Iltimos, PDF dan nusxalangan matnni kiriting!", true);
    return;
  }
  
  try {
    // Regex for DTM format: [son]. [Savol matni] A) [A] B) [B] C) [C] D) [D]
    // A) B) C) D) va A. B. C. D. ko'rinishlarini ham qo'llab-quvvatlaydi
    const pattern = /(\d+)\.\s*([\s\S]*?)\s*(?:A[)\.]\s*([\s\S]*?))\s*(?:B[)\.]\s*([\s\S]*?))\s*(?:C[)\.]\s*([\s\S]*?))\s*(?:D[)\.]\s*([\s\S]*?))(?=\s*\d+\.|\s*$)/g;
    
    let match;
    const list = [];
    let idx = 1;
    
    while ((match = pattern.exec(text)) !== null) {
      const qText = match[2].trim();
      const optA = match[3].trim();
      const optB = match[4].trim();
      const optC = match[5].trim();
      const optD = match[6].trim();
      
      list.push({
        id: `v${variantId}_q${idx}`,
        variant: variantId,
        text: qText.replace(/\n+/g, ' '),
        options: [
          optA.replace(/\n+/g, ' '),
          optB.replace(/\n+/g, ' '),
          optC.replace(/\n+/g, ' '),
          optD.replace(/\n+/g, ' ')
        ],
        correctAnswer: 0, // Standart ravishda birinchi javob to'g'ri (baribir aralashtiriladi)
        difficulty: 0.0,
        category: "Algebra"
      });
      idx++;
    }
    
    if (list.length === 0) {
      throw new Error("Matndan savollar ajratib olinmadi. Iltimos, nusxalangan matn formatini tekshiring (masalan: '1. Savol... A) Javob B) Javob...').");
    }
    
    const saved = localStorage.getItem('rasch_custom_variants') ? JSON.parse(localStorage.getItem('rasch_custom_variants')) : {};
    saved[variantId] = list;
    localStorage.setItem('rasch_custom_variants', JSON.stringify(saved));
    
    // Yangi custom variantlarni yuklaymiz
    loadCustomVariants();
    
    showToast(`Muvaffaqiyatli! Matndan ${list.length} ta savol ajratib olindi va Variant ${variantId} ga yuklandi!`, false);
    document.getElementById('txt-import-pdf').value = '';
    renderVariantsList();
  } catch (err) {
    showToast("Importda xatolik: " + err.message, true);
  }
}

// 17. Sotuvlar statistikasini hisoblash va render qilish
// Helper: Foydalanish yoki sotib olish voqeasini statistikaga yozish
function logUsage(tier, cost = 0) {
  const now = new Date();
  const dateStr = now.getFullYear() + "-" + 
                  String(now.getMonth() + 1).padStart(2, '0') + "-" + 
                  String(now.getDate()).padStart(2, '0') + " " + 
                  String(now.getHours()).padStart(2, '0') + ":" + 
                  String(now.getMinutes()).padStart(2, '0');
  
  if (!state.salesHistory) state.salesHistory = [];
  
  // Capturing the current user's name
  const userName = state.user.displayName || 'Nomzod';
  
  state.salesHistory.push({
    date: dateStr,
    user: userName,
    tier: tier,
    cost: cost
  });
  localStorage.setItem('rasch_sales_history', JSON.stringify(state.salesHistory));
}

// 17. Sotuvlar hamda bepul foydalanish statistikasini hisoblash va render qilish
function renderSalesStats() {
  const history = state.salesHistory || [];
  
  let totalRevenue = 0;
  let countFree = 0;
  let countStarter = 0;
  let countStandard = 0;
  let countPremium = 0;
  
  history.forEach(item => {
    totalRevenue += (item.cost || 0);
    if (item.tier === 'free') countFree++;
    else if (item.tier === 'starter') countStarter++;
    else if (item.tier === 'standard') countStandard++;
    else if (item.tier === 'premium') countPremium++;
  });
  
  const totalCount = history.length;
  const paidCount = countStarter + countStandard + countPremium;
  
  // DOM elementlarni yangilash
  const revEl = document.getElementById('lbl-stats-revenue');
  const cntEl = document.getElementById('lbl-stats-count');
  const freeUsrEl = document.getElementById('lbl-stats-free-users');
  const paidUsrEl = document.getElementById('lbl-stats-paid-users');
  
  if (revEl) revEl.innerText = totalRevenue.toLocaleString('uz-UZ') + " so'm";
  if (cntEl) cntEl.innerText = totalCount + " ta";
  if (freeUsrEl) freeUsrEl.innerText = countFree + " ta";
  if (paidUsrEl) paidUsrEl.innerText = paidCount + " ta";
  
  // Foizlarni hisoblash
  const pctFree = totalCount > 0 ? Math.round((countFree / totalCount) * 100) : 0;
  const pctStarter = totalCount > 0 ? Math.round((countStarter / totalCount) * 100) : 0;
  const pctStandard = totalCount > 0 ? Math.round((countStandard / totalCount) * 100) : 0;
  const pctPremium = totalCount > 0 ? Math.round((countPremium / totalCount) * 100) : 0;
  
  const lblFree = document.getElementById('lbl-stats-free');
  const barFree = document.getElementById('bar-stats-free');
  if (lblFree) lblFree.innerText = `${countFree} ta (${pctFree}%)`;
  if (barFree) barFree.style.width = `${pctFree}%`;

  const lblStarter = document.getElementById('lbl-stats-starter');
  const barStarter = document.getElementById('bar-stats-starter');
  if (lblStarter) lblStarter.innerText = `${countStarter} ta (${pctStarter}%)`;
  if (barStarter) barStarter.style.width = `${pctStarter}%`;
  
  const lblStandard = document.getElementById('lbl-stats-standard');
  const barStandard = document.getElementById('bar-stats-standard');
  if (lblStandard) lblStandard.innerText = `${countStandard} ta (${pctStandard}%)`;
  if (barStandard) barStandard.style.width = `${pctStandard}%`;
  
  const lblPremium = document.getElementById('lbl-stats-premium');
  const barPremium = document.getElementById('bar-stats-premium');
  if (lblPremium) lblPremium.innerText = `${countPremium} ta (${pctPremium}%)`;
  if (barPremium) barPremium.style.width = `${pctPremium}%`;

  // Tranzaksiyalar tarixi jadvalini render qilish
  const tbody = document.getElementById('tbl-stats-history-body');
  if (tbody) {
    if (history.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:1.5rem;">Hozircha tranzaksiya yoki faollik yo'q</td></tr>`;
    } else {
      let rowsHTML = '';
      // Eng so'nggisini eng tepada ko'rsatamiz
      [...history].reverse().forEach(item => {
        let actionText = '';
        let costText = '0 so\'m';
        let statusText = '';
        
        if (item.tier === 'free') {
          actionText = '🆓 Bepul Variant 1 ni yechdi';
          costText = '0 so\'m';
          statusText = '<span style="color:#fbbf24; font-weight:600;">✓ Faol</span>';
        } else {
          let tierLabel = item.tier === 'starter' ? 'Starter' : (item.tier === 'standard' ? 'Standard' : 'Premium');
          actionText = `🔑 ${tierLabel} Tarifini sotib oldi`;
          costText = `${(item.cost || 0).toLocaleString('uz-UZ')} so'm`;
          statusText = '<span style="color:var(--success); font-weight:600;">✓ Tasdiqlangan</span>';
        }
        
        rowsHTML += `
          <tr>
            <td>${item.date}</td>
            <td><strong>${item.user || 'Nomzod'}</strong></td>
            <td>${actionText}</td>
            <td>${costText}</td>
            <td>${statusText}</td>
          </tr>
        `;
      });
      tbody.innerHTML = rowsHTML;
    }
  }
}
