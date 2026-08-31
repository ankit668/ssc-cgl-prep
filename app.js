// SSC CGL Prep App JavaScript Logic

// --- 2. OFFLINE FORMULA DATABASE ---
const FORMULAS_DB = [
    {
        category: "Percentage Conversions",
        items: [
            { label: "1/2 to Percentage", formula: "50%" },
            { label: "1/3 to Percentage", formula: "33.33%" },
            { label: "1/4 to Percentage", formula: "25%" },
            { label: "1/5 to Percentage", formula: "20%" },
            { label: "1/6 to Percentage", formula: "16.66%" },
            { label: "1/7 to Percentage", formula: "14.28%" },
            { label: "1/8 to Percentage", formula: "12.5%" },
            { label: "1/9 to Percentage", formula: "11.11%" },
            { label: "1/11 to Percentage", formula: "9.09%" },
            { label: "1/12 to Percentage", formula: "8.33%" }
        ]
    },
    {
        category: "Algebraic Identities",
        items: [
            { label: "(a + b)²", formula: "a² + b² + 2ab" },
            { label: "(a - b)²", formula: "a² + b² - 2ab" },
            { label: "a² - b²", formula: "(a - b)(a + b)" },
            { label: "(a + b)³", formula: "a³ + b³ + 3ab(a + b)" },
            { label: "a³ + b³", formula: "(a + b)(a² - ab + b²)" },
            { label: "a³ - b³", formula: "(a - b)(a² + ab + b²)" },
            { label: "a³ + b³ + c³ - 3abc", formula: "(a + b + c)(a² + b² + c² - ab - bc - ca)" },
            { label: "If a + b + c = 0", formula: "a³ + b³ + c³ = 3abc" },
            { label: "If x + 1/x = k, x² + 1/x²", formula: "k² - 2" },
            { label: "If x + 1/x = k, x³ + 1/x³", formula: "k³ - 3k" }
        ]
    },
    {
        category: "Mensuration Formulas (2D & 3D)",
        items: [
            { label: "Circle Area", formula: "π × r²" },
            { label: "Circle Circumference", formula: "2 × π × r" },
            { label: "Cylinder Volume", formula: "π × r² × h" },
            { label: "Cylinder Curved Surface Area (CSA)", formula: "2 × π × r × h" },
            { label: "Cylinder Total Surface Area (TSA)", formula: "2 × π × r × (r + h)" },
            { label: "Cone Volume", formula: "(1/3) × π × r² × h" },
            { label: "Cone Curved Surface Area (CSA)", formula: "π × r × l   (l = slant height = √(r² + h²))" },
            { label: "Sphere Volume", formula: "(4/3) × π × r³" },
            { label: "Sphere Surface Area", formula: "4 × π × r²" },
            { label: "Hemisphere Volume", formula: "(2/3) × π × r³" }
        ]
    },
    {
        category: "Trigonometric Formulas",
        items: [
            { label: "Basic Pythagoras Identity", formula: "sin² θ + cos² θ = 1" },
            { label: "Secant-Tangent Identity", formula: "sec² θ - tan² θ = 1" },
            { label: "Cosecant-Cotangent Identity", formula: "cosec² θ - cot² θ = 1" },
            { label: "tan θ", formula: "sin θ / cos θ" },
            { label: "Trig Values: sin 30° / cos 60°", formula: "1/2" },
            { label: "Trig Values: sin 45° / cos 45°", formula: "1/√2" },
            { label: "Trig Values: sin 60° / cos 30°", formula: "√3 / 2" },
            { label: "Trig Values: tan 30° / cot 60°", formula: "1/√3" },
            { label: "Trig Values: tan 60° / cot 30°", formula: "√3" },
            { label: "Height & Distances: 30° base ratio", formula: "Base = √3 × Height" }
        ]
    }
];

// --- 3. WEEKLY STUDY PLAN TASKS (WEEK 1 SPECIFIC) ---
const WEEK_TASKS = [
    { id: "wt1", text: "Memorize Fraction-to-Percentage tables (1/2 up to 1/12)", completed: false },
    { id: "wt2", text: "Study basics of Percentages (Concept videos + examples)", completed: false },
    { id: "wt3", text: "Solve 20 CGL PYQs on Percentages", completed: false },
    { id: "wt4", text: "Study Ratio & Proportion concepts (Mean/Third proportional)", completed: false },
    { id: "wt5", text: "Solve 20 CGL PYQs on Ratios & Proportions", completed: false }
];

// --- 4. STATE MANAGEMENT & LOCAL STORAGE ---
let appState = {
    solvedCount: 0,
    correctCount: 0,
    accuracy: 0,
    trainerHighScore: 0,
    studyStreak: 0,
    lastStudyDate: null,
    completedTasks: [],
    quizHistory: [],  // { date, label, score, total, pct, timeSecs }
    mistakeBook: {},  // keyed by question id: { q, userAnswer, addedAt }
    editorialHistory: [] // { date, wpm, acc, mistakes }
};

// Load state from localStorage on init
function loadState() {
    const saved = localStorage.getItem('ssc_cgl_prep_state');
    if (saved) {
        appState = JSON.parse(saved);
    } else {
        // First-time user setup
        appState = {
            solvedCount: 0,
            correctCount: 0,
            accuracy: 0,
            trainerHighScore: 0,
            studyStreak: 1, // Start streak at 1
            lastStudyDate: new Date().toDateString(),
            completedTasks: [],
            quizHistory: [],
            mistakeBook: {}
        };
        saveState();
    }
    updateStreak();
}

function saveState() {
    localStorage.setItem('ssc_cgl_prep_state', JSON.stringify(appState));
}

// Track study streak
function updateStreak() {
    const today = new Date().toDateString();
    if (appState.lastStudyDate) {
        const lastDate = new Date(appState.lastStudyDate);
        const difference = Math.floor((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));
        
        if (difference === 1) {
            appState.studyStreak += 1;
            appState.lastStudyDate = today;
            saveState();
        } else if (difference > 1) {
            appState.studyStreak = 1;
            appState.lastStudyDate = today;
            saveState();
        }
    } else {
        appState.lastStudyDate = today;
        appState.studyStreak = 1;
        saveState();
    }
    document.getElementById('streak-days').innerText = appState.studyStreak;
}

// --- 5. INITIALIZATION & VIEW MANAGEMENT ---
document.addEventListener("DOMContentLoaded", () => {
    // Integrate NCERT MCQs into main Quiz database
    if (typeof NCERT_QS !== 'undefined') {
        NCERT_QS.forEach(nq => {
            QUESTIONS_DB.push({
                id: nq.id,
                subject: 'ncert',
                topic: nq.topic || 'mixed',
                question: `[${nq.cls}] ${nq.q}`,
                options: nq.opts,
                answer: nq.ans,
                explanation: nq.exp,
                shortcut: `Difficulty: ${nq.difficulty}`,
                year: 'NCERT',
                examYear: 'NCERT',
                examShift: 'NA',
                examDate: 'NA'
            });
        });
    }

    loadState();
    setupNavigation();
    renderDashboard();
    renderQuizTopics();
    renderFormulasList();
    setupQuizListeners();
    setupFormulaSearch();
    setupTypingTest();
    renderEditorialView(); // Populate editorial reading mode and history
    // Migrate old state
    if (!appState.quizHistory) appState.quizHistory = [];
    if (!appState.mistakeBook) appState.mistakeBook = {};
    if (!appState.editorialHistory) appState.editorialHistory = [];
    
    // Check Daily Streak
    updateStreak(); 
    renderMistakeBookBadge();

    // Apply saved theme
    if (localStorage.getItem('ssc_theme') === 'light') {
        document.body.classList.add('light-mode');
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) btn.textContent = '☀️';
    }
});

// Theme toggle
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        btn.textContent = isLight ? '☀️' : '🌙';
        btn.style.transform = 'rotate(360deg)';
        setTimeout(() => btn.style.transform = '', 400);
    }
    localStorage.setItem('ssc_theme', isLight ? 'light' : 'dark');
}

// Navigation logic
function setupNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    const panels = document.querySelectorAll(".tab-panel");
    const title = document.getElementById("current-tab-title");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active states
            navItems.forEach(n => n.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Add active state to clicked
            item.classList.add("active");
            const tabId = item.getAttribute("data-tab");
            const targetPanel = document.getElementById(`${tabId}-view`);
            if (!targetPanel) return;
            targetPanel.classList.add("active");

            // Change header title
            let label = tabId.charAt(0).toUpperCase() + tabId.slice(1);
            if (tabId === "quiz") label = "PYQ Quizzes";
            if (tabId === "trainer") label = "Calculation Speed Trainer";
            if (tabId === "typing") label = "CGL Typing Test";
            if (tabId === "jjatyping") label = "Delhi HC JJA Typing";
            if (tabId === "editorial") label = "Daily Editorial";
            if (tabId === "mistakes") label = "Mistake Book";
            if (tabId === "vocab") label = "Vocab Flashcards";
            if (tabId === "ncert") label = "NCERT GA Vault";
            if (tabId === "study") label = "Study Notes";
            if (tabId === "reasoning") label = "Reasoning Drills";
            if (tabId === "english-drills") label = "English Drills";
            if (tabId === "grammar") label = "120 Grammar Rules";
            if (tabId === "roots") label = "Etymology Vault";
            if (tabId === "ows") label = "One Word Substitutions";
            if (tabId === "affixes") label = "Prefixes & Suffixes";
            if (tabId === "quant-drills") label = "Quant Drills";
            title.innerText = label;

            // Trigger conditional renders
            if (tabId === "dashboard") {
                renderDashboard();
            } else if (tabId === "mistakes") {
                renderMistakeBook();
            } else if (tabId === "trainer") {
                quitTrainerGame();
            } else if (tabId === "typing" || tabId === "jjatyping" || tabId === "editorial") {
                if (typeof quitTypingTest === 'function') quitTypingTest();
            } else if (tabId === "vocab") {
                if (typeof renderVocabCards === 'function') renderVocabCards();
            } else if (tabId === "ncert") {
                if (typeof renderNCERTVault === 'function') renderNCERTVault();
            } else if (tabId === "study") {
                if (typeof renderStudyNotes === 'function') renderStudyNotes();
            } else if (tabId === "reasoning") {
                if (typeof quitReasoningDrill === 'function') quitReasoningDrill();
            } else if (tabId === "english-drills") {
                if (typeof quitEnglishDrill === 'function') quitEnglishDrill();
            }
        });
    });
}

// --- 6. DASHBOARD MANAGER ---
function renderDashboard() {
    document.getElementById('stats-solved').innerText = appState.solvedCount;
    document.getElementById('stats-accuracy').innerText = appState.solvedCount > 0 ? `${Math.round((appState.correctCount / appState.solvedCount) * 100)}%` : '0%';
    document.getElementById('stats-trainer-score').innerText = appState.trainerHighScore;
    document.getElementById('streak-days').innerText = appState.studyStreak;

    // Render score history chart
    renderScoreChart();
}

// --- Score History Chart ---
function renderScoreChart() {
    const chartEl = document.getElementById('score-history-chart');
    if (!chartEl) return;

    const history = (appState.quizHistory || []).slice(-15); // Last 15 quizzes

    if (history.length === 0) {
        chartEl.innerHTML = `
            <div class="chart-empty">
                <span style="font-size:2rem;">📊</span>
                <p>Complete your first quiz to see your score history chart here!</p>
            </div>`;
        return;
    }

    const W = chartEl.offsetWidth || 600;
    const H = 180;
    const PADDING = { top: 20, right: 20, bottom: 50, left: 40 };
    const chartW = W - PADDING.left - PADDING.right;
    const chartH = H - PADDING.top - PADDING.bottom;

    const maxPct = 100;
    const points = history.map((h, i) => {
        const x = PADDING.left + (i / Math.max(history.length - 1, 1)) * chartW;
        const y = PADDING.top + chartH - (h.pct / maxPct) * chartH;
        return { x, y, h };
    });

    // Build SVG path
    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
    const areaD = `${pathD} L ${points[points.length-1].x.toFixed(1)} ${(PADDING.top + chartH).toFixed(1)} L ${points[0].x.toFixed(1)} ${(PADDING.top + chartH).toFixed(1)} Z`;

    // Y-axis lines at 0, 25, 50, 75, 100%
    const yLines = [0, 25, 50, 75, 100].map(pct => {
        const y = PADDING.top + chartH - (pct / 100) * chartH;
        const isPass = pct === 50;
        return `
            <line x1="${PADDING.left}" y1="${y.toFixed(1)}" x2="${W - PADDING.right}" y2="${y.toFixed(1)}" 
                  stroke="${isPass ? 'rgba(99,202,183,0.4)' : 'rgba(255,255,255,0.06)'}" 
                  stroke-width="${isPass ? 1.5 : 1}" stroke-dasharray="${isPass ? '4,3' : 'none'}"/>
            <text x="${PADDING.left - 6}" y="${(y + 4).toFixed(1)}" fill="rgba(255,255,255,0.35)" 
                  font-size="10" text-anchor="end">${pct}%</text>
        `;
    }).join('');

    // X-axis labels
    const xLabels = points.map((p, i) => {
        if (points.length > 8 && i % 2 !== 0) return ''; // skip alternates if crowded
        const d = new Date(p.h.date);
        const label = `${d.getDate()}/${d.getMonth()+1}`;
        return `<text x="${p.x.toFixed(1)}" y="${(H - 6).toFixed(1)}" fill="rgba(255,255,255,0.35)" font-size="9" text-anchor="middle">${label}</text>`;
    }).join('');

    // Dots with tooltip title
    const dots = points.map(p => {
        const color = p.h.pct >= 80 ? '#4ade80' : p.h.pct >= 50 ? '#facc15' : '#f87171';
        return `
            <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5" fill="${color}" stroke="#1e293b" stroke-width="2">
                <title>${p.h.label}: ${p.h.score}/${p.h.total} (${p.h.pct}%)</title>
            </circle>`;
    }).join('');

    chartEl.innerHTML = `
        <svg width="100%" height="${H}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="overflow:visible">
            <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="#7c3aed" stop-opacity="0.0"/>
                </linearGradient>
            </defs>
            ${yLines}
            <path d="${areaD}" fill="url(#chartGrad)"/>
            <path d="${pathD}" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
            ${dots}
            ${xLabels}
        </svg>
        <div class="chart-legend">
            <span><span class="legend-dot" style="background:#4ade80"></span> ≥80% Excellent</span>
            <span><span class="legend-dot" style="background:#facc15"></span> ≥50% Passing</span>
            <span><span class="legend-dot" style="background:#f87171"></span> &lt;50% Needs Work</span>
            <span style="margin-left:auto; opacity:0.5; font-size:11px;">Last ${history.length} quizzes</span>
        </div>
    `;
}

function toggleTask(taskId, isChecked) {
    if (isChecked) {
        if (!appState.completedTasks.includes(taskId)) {
            appState.completedTasks.push(taskId);
        }
    } else {
        appState.completedTasks = appState.completedTasks.filter(id => id !== taskId);
    }
    saveState();
    renderDashboard();
}

function startBooster(type) {
    document.querySelector('[data-tab=trainer]').click();
    startTrainerMode(type);
}

// --- 7. PYQ QUIZ ENGINE ---
let activeQuiz = {
    category: "",
    questions: [],
    currentIndex: 0,
    score: 0,
    timer: null,
    secondsElapsed: 0,
    totalSecondsRemaining: 20 * 60,
    questionSecondsElapsed: 0,
    userAnswers: [],
    isReviewMode: false
};

const TOPIC_LABELS = {
    all_mixed: "🔀 Mixed Practice (All Topics)",
    ncert_mixed: "📚 Complete NCERT Practice",
    // Maths
    percentage: "📊 Percentages",
    ratio: "⚖️ Ratio & Proportion",
    profit_loss: "💰 Profit & Loss",
    time_work: "⏱️ Time & Work",
    time_distance: "🚂 Time, Speed & Distance",
    si_ci: "🏦 Simple & Compound Interest",
    algebra: "🔣 Algebra",
    trigonometry: "📐 Trigonometry",
    mensuration: "📏 Mensuration",
    number_system: "🔢 Number System",
    average: "📈 Average & Ages",
    mixture: "🧪 Mixture & Alligation",
    geometry: "📐 Geometry",
    general: "🔀 Miscellaneous (Maths)",
    // GK
    history: "🏛️ History",
    polity: "⚖️ Polity & Constitution",
    geography: "🌏 Geography",
    economy: "💹 Economy",
    science: "🔬 Science & Technology",
    current: "📰 Current Affairs",
    culture: "🎭 Art & Culture",
    environment: "🌿 Environment",
    general_awareness: "🌍 General Awareness",
    // English
    vocabulary: "📚 Vocabulary",
    grammar: "✏️ Grammar",
    reading_comprehension: "📖 Reading Comprehension",
    idioms_phrases: "💬 Idioms & Phrases",
    sentence_improvement: "🔧 Sentence Improvement",
    cloze_test: "🧩 Cloze Test",
    english_misc: "📝 English Miscellaneous",
    // Reasoning
    analogy: "🔗 Analogy",
    series: "🔢 Series & Patterns",
    coding_decoding: "💻 Coding-Decoding",
    blood_relation: "👨‍👩‍👧 Blood Relations",
    direction: "🦭 Direction & Distance",
    syllogism: "⚖️ Syllogism",
    odd_one_out: "🔍 Odd One Out",
    ranking: "🏆 Ranking & Order",
    mathematical_ops: "➕ Mathematical Operations",
    venn_diagram: "🔵 Venn Diagram",
    matrix: "📊 Matrix",
    mirror_image: "🧐 Mirror & Water Image",
    paper_folding: "📄 Paper Folding",
    assumption: "💭 Assumption",
    statement_conclusion: "💬 Statement & Conclusion",
    puzzle: "🧩 Puzzles & Arrangements",
    reasoning_misc: "🧠 Reasoning Miscellaneous"
};

const SUBJECT_TOPICS = {
    maths: ["percentage","ratio","profit_loss","time_work","time_distance","si_ci","algebra","trigonometry","mensuration","number_system","average","mixture","geometry","general"],
    gk:    ["history","polity","geography","economy","science","current","culture","environment","general_awareness"],
    english: ["vocabulary","grammar","reading_comprehension","idioms_phrases","sentence_improvement","cloze_test","english_misc"],
    ncert: ["ncert_mixed"],
    reasoning: ["analogy","series","coding_decoding","blood_relation","direction","syllogism","odd_one_out","ranking","mathematical_ops","venn_diagram","matrix","mirror_image","paper_folding","assumption","statement_conclusion","puzzle","reasoning_misc"]
};

let activeSubjectFilter = 'maths'; // default

function setSubjectFilter(subject) {
    activeSubjectFilter = subject;
    // Update button styles
    ['maths','reasoning','gk','english','all','ncert'].forEach(s => {
        const btn = document.getElementById(`filter-subject-${s}`);
        if (btn) btn.classList.toggle('active', s === subject);
    });
    // Re-render the currently visible grid
    const topicGrid = document.getElementById('quiz-topic-grid');
    const yearGrid = document.getElementById('quiz-year-grid');
    if (topicGrid && !topicGrid.classList.contains('hidden')) {
        renderQuizTopics();
    } else {
        renderQuizYears();
    }
}

function renderQuizTopics() {
    const grid = document.getElementById("quiz-topic-grid");
    grid.innerHTML = "";

    // Determine which topics to show based on activeSubjectFilter
    let topicsToShow;
    if (activeSubjectFilter === 'all') {
        topicsToShow = ['all_mixed', ...Object.keys(TOPIC_LABELS).filter(k => k !== 'all_mixed' && k !== 'ncert_mixed')];
    } else {
        topicsToShow = SUBJECT_TOPICS[activeSubjectFilter] || Object.keys(TOPIC_LABELS);
    }

    topicsToShow.forEach(topicKey => {
        const totalInDb = QUESTIONS_DB.filter(q => q.topic === topicKey).length;
        if (totalInDb === 0) return; // Hide empty topics

        const card = document.createElement('div');
        card.className = "topic-card";
        card.onclick = () => startQuiz(topicKey);
        card.innerHTML = `
            <div class="topic-meta">
                <span class="topic-badge">Topic Quiz</span>
                <h3>${TOPIC_LABELS[topicKey]}</h3>
                <span class="topic-questions-count">${totalInDb} Questions available</span>
            </div>
            <div class="topic-card-footer">
                <span class="topic-card-progress">Tap to practice →</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function startQuiz(topicKey) {
    // Filter questions by topic
    let pool = [];
    if (topicKey === 'all_mixed') {
        pool = QUESTIONS_DB.filter(q => q.subject !== 'ncert'); // All standard SSC questions
        // Shuffle pool for mixed practice
        pool = pool.sort(() => Math.random() - 0.5);
    } else if (topicKey === 'ncert_mixed') {
        pool = QUESTIONS_DB.filter(q => q.subject === 'ncert');
        pool = pool.sort(() => Math.random() - 0.5);
    } else {
        pool = QUESTIONS_DB.filter(q => q.topic === topicKey);
    }
    if (pool.length === 0) return alert("No questions available for this topic yet!");

    activeQuiz.category = topicKey;
    activeQuiz.questions = pool;
    activeQuiz.currentIndex = 0;
    activeQuiz.score = 0;
    activeQuiz.secondsElapsed = 0;
    activeQuiz.userAnswers = new Array(pool.length).fill(null);
    activeQuiz.isReviewMode = false;

    // Switch Screens
    document.getElementById("quiz-select-screen").classList.add("hidden");
    document.getElementById("quiz-results-screen").classList.add("hidden");
    document.getElementById("quiz-active-screen").classList.remove("hidden");

    // Start Timer
    activeQuiz.totalSecondsRemaining = 20 * 60;
    activeQuiz.questionSecondsElapsed = 0;
    document.getElementById("quiz-timer-display").innerText = "20:00";
    if (document.getElementById("quiz-question-timer-display")) {
        document.getElementById("quiz-question-timer-display").innerText = "00:00";
    }
    clearInterval(activeQuiz.timer);
    activeQuiz.timer = setInterval(() => {
        activeQuiz.secondsElapsed++;
        if (activeQuiz.totalSecondsRemaining > 0) activeQuiz.totalSecondsRemaining--;
        if (activeQuiz.selectedOptionIdx === null) activeQuiz.questionSecondsElapsed++;
        
        const tMins = String(Math.floor(activeQuiz.totalSecondsRemaining / 60)).padStart(2, '0');
        const tSecs = String(activeQuiz.totalSecondsRemaining % 60).padStart(2, '0');
        document.getElementById("quiz-timer-display").innerText = `${tMins}:${tSecs}`;
        
        if (document.getElementById("quiz-question-timer-display")) {
            const qMins = String(Math.floor(activeQuiz.questionSecondsElapsed / 60)).padStart(2, '0');
            const qSecs = String(activeQuiz.questionSecondsElapsed % 60).padStart(2, '0');
            document.getElementById("quiz-question-timer-display").innerText = `${qMins}:${qSecs}`;
        }
        
        if (activeQuiz.totalSecondsRemaining <= 0) {
            clearInterval(activeQuiz.timer);
            finishQuiz();
        }
    }, 1000);

    loadQuestion();
}

function loadQuestion() {
    const q = activeQuiz.questions[activeQuiz.currentIndex];
    const savedAnswer = activeQuiz.userAnswers[activeQuiz.currentIndex];
    
    // Only reset question timer if it's the first time seeing this question
    if (savedAnswer === null && !activeQuiz.isReviewMode) {
        activeQuiz.questionSecondsElapsed = 0;
    }

    // Update Progress labels
    document.getElementById("quiz-current-num").innerText = activeQuiz.currentIndex + 1;
    const totalNumEl = document.getElementById("quiz-total-num");
    if (totalNumEl) totalNumEl.innerText = activeQuiz.questions.length;
    const progressPercent = ((activeQuiz.currentIndex) / activeQuiz.questions.length) * 100;
    const progressFillEl = document.getElementById("quiz-progress-fill");
    if (progressFillEl) progressFillEl.style.width = `${progressPercent}%`;

    // Render Question & Tags
    document.getElementById("question-year-tag").innerText = q.year;
    document.getElementById("quiz-question-text").innerHTML = q.question;

    // Render Options
    const optionsContainer = document.getElementById("quiz-options-container");
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerHTML = `
            <span>${opt}</span>
            <div class="option-marker">${String.fromCharCode(65 + idx)}</div>
        `;
        
        // Restore visual state
        if (activeQuiz.isReviewMode) {
            btn.classList.add("disabled");
            if (idx === q.answer) {
                btn.classList.add("correct");
            } else if (idx === savedAnswer) {
                btn.classList.add("incorrect");
            }
        } else {
            if (idx === savedAnswer) {
                btn.classList.add("selected");
            }
            btn.onclick = () => selectOption(idx);
        }
        
        optionsContainer.appendChild(btn);
    });

    // Handle Review Mode Solution Display
    const solContainer = document.getElementById("quiz-solution-container");
    if (activeQuiz.isReviewMode) {
        solContainer.classList.remove("hidden");
        const solTitle = document.getElementById("solution-banner-title");
        if (savedAnswer === q.answer) {
            solTitle.innerText = "✓ Correct Answer!";
            solTitle.className = "solution-banner is-correct";
        } else if (savedAnswer === null) {
            solTitle.innerText = "Unanswered";
            solTitle.className = "solution-banner is-incorrect";
        } else {
            solTitle.innerText = "✗ Incorrect Answer";
            solTitle.className = "solution-banner is-incorrect";
        }
        document.getElementById("solution-steps-text").innerHTML = q.explanation;
        document.getElementById("solution-shortcut-text").innerHTML = q.shortcut;
        
        // Hide timers in review mode
        document.getElementById("quiz-timer-display").parentElement.style.display = "none";
    } else {
        solContainer.classList.add("hidden");
        document.getElementById("quiz-timer-display").parentElement.style.display = "flex";
    }

    // Navigation Buttons State
    document.getElementById("btn-prev-question").disabled = (activeQuiz.currentIndex === 0);
    document.getElementById("btn-next-question").innerText = activeQuiz.currentIndex === activeQuiz.questions.length - 1 ? "Finish Quiz" : "Next Question →";
}

function selectOption(index) {
    if (activeQuiz.isReviewMode) return;

    activeQuiz.userAnswers[activeQuiz.currentIndex] = index;

    // Mark visual feedback (just select it, no correct/incorrect yet)
    const options = document.querySelectorAll(".option-btn");
    options.forEach((opt, idx) => {
        opt.classList.remove("selected");
        if (idx === index) {
            opt.classList.add("selected");
        }
    });
}

function renderQuizYears() {
    const container = document.getElementById("quiz-year-grid");
    container.innerHTML = "";
    container.className = "";

    const subjectLabels = { maths: 'Maths', reasoning: 'Reasoning', gk: 'GK', english: 'English', all: 'All Subjects' };
    const activeLabel = subjectLabels[activeSubjectFilter] || 'All';

    // Build a map of shifts, counting only questions matching the active subject filter
    const shiftsMap = {};
    QUESTIONS_DB.forEach(q => {
        if (!q.examYear || !q.examShift) return;

        // Check subject match
        const matchesSubject = activeSubjectFilter === 'all' ||
            q.subject === activeSubjectFilter ||
            (activeSubjectFilter === 'maths' && (!q.subject || q.subject === 'maths'));

        if (!matchesSubject) return;

        const key = `${q.examYear}_${q.examShift}_${q.examDate}`;
        if (!shiftsMap[key]) {
            shiftsMap[key] = { year: q.examYear, shift: q.examShift, date: q.examDate, count: 0 };
        }
        shiftsMap[key].count++;
    });

    // Group by year
    const yearGroups = {};
    Object.values(shiftsMap).forEach(s => {
        if (s.count === 0) return; // skip shifts with no questions for this subject
        if (!yearGroups[s.year]) yearGroups[s.year] = [];
        yearGroups[s.year].push(s);
    });

    const sortedYears = Object.keys(yearGroups).sort((a, b) => b - a);

    if (sortedYears.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:30px 0;">No shift mocks available for <strong>${activeLabel}</strong> yet.<br><small>Try switching to a different subject above.</small></p>`;
        return;
    }

    sortedYears.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.style.marginBottom = "30px";

        const yearHeader = document.createElement('h3');
        yearHeader.innerHTML = `SSC CGL ${year} &nbsp;<span style="font-size:0.8rem; font-weight:400; color:var(--text-muted);">${activeLabel} Mocks</span>`;
        yearHeader.style.cssText = "color: var(--primary-light); margin-bottom: 15px; font-size: 1.2rem; border-bottom: 1px solid var(--border-card); padding-bottom: 8px;";
        yearSection.appendChild(yearHeader);

        const grid = document.createElement('div');
        grid.className = "topic-grid";

        const shifts = yearGroups[year].sort((a, b) => a.date.localeCompare(b.date) || a.shift.localeCompare(b.shift));

        shifts.forEach(s => {
            const card = document.createElement('div');
            card.className = "topic-card";
            card.onclick = () => startQuizByShift(s.year, s.shift);
            card.innerHTML = `
                <div class="topic-meta">
                    <span class="topic-badge">${activeLabel} Mock</span>
                    <h3>${s.date}</h3>
                    <span class="topic-questions-count">${s.shift} &nbsp;·&nbsp; ${s.count} Qs</span>
                </div>
                <div class="topic-card-footer">
                    <span class="topic-card-progress">Start Mock →</span>
                </div>
            `;
            grid.appendChild(card);
        });

        yearSection.appendChild(grid);
        container.appendChild(yearSection);
    });

}

function startQuizByShift(year, shift) {
    let pool = QUESTIONS_DB.filter(q => q.examYear === year && q.examShift === shift);
    
    // Filter by subject if not 'all'
    if (activeSubjectFilter !== 'all') {
        pool = pool.filter(q => q.subject === activeSubjectFilter ||
            (activeSubjectFilter === 'maths' && (!q.subject || q.subject === 'maths')));
    }
    
    if (pool.length === 0) return alert("No questions available for this subject/shift combination!");

    activeQuiz.category = `cgl_${year}_${shift.replace(/\s+/g, '_').toLowerCase()}`;
    activeQuiz.questions = pool;
    activeQuiz.currentIndex = 0;
    activeQuiz.score = 0;
    activeQuiz.secondsElapsed = 0;
    activeQuiz.userAnswers = new Array(pool.length).fill(null);
    activeQuiz.isReviewMode = false;

    // Switch Screens
    document.getElementById("quiz-select-screen").classList.add("hidden");
    document.getElementById("quiz-results-screen").classList.add("hidden");
    document.getElementById("quiz-active-screen").classList.remove("hidden");

    // Start Timer
    activeQuiz.totalSecondsRemaining = 20 * 60;
    activeQuiz.questionSecondsElapsed = 0;
    document.getElementById("quiz-timer-display").innerText = "20:00";
    if (document.getElementById("quiz-question-timer-display")) {
        document.getElementById("quiz-question-timer-display").innerText = "00:00";
    }
    clearInterval(activeQuiz.timer);
    activeQuiz.timer = setInterval(() => {
        activeQuiz.secondsElapsed++;
        if (activeQuiz.totalSecondsRemaining > 0) activeQuiz.totalSecondsRemaining--;
        if (activeQuiz.selectedOptionIdx === null) activeQuiz.questionSecondsElapsed++;
        
        const tMins = String(Math.floor(activeQuiz.totalSecondsRemaining / 60)).padStart(2, '0');
        const tSecs = String(activeQuiz.totalSecondsRemaining % 60).padStart(2, '0');
        document.getElementById("quiz-timer-display").innerText = `${tMins}:${tSecs}`;
        
        if (document.getElementById("quiz-question-timer-display")) {
            const qMins = String(Math.floor(activeQuiz.questionSecondsElapsed / 60)).padStart(2, '0');
            const qSecs = String(activeQuiz.questionSecondsElapsed % 60).padStart(2, '0');
            document.getElementById("quiz-question-timer-display").innerText = `${qMins}:${qSecs}`;
        }
        
        if (activeQuiz.totalSecondsRemaining <= 0) {
            clearInterval(activeQuiz.timer);
            finishQuiz();
        }
    }, 1000);

    loadQuestion();
}

function setupQuizListeners() {
    document.getElementById("btn-prev-question").addEventListener("click", () => {
        if (activeQuiz.currentIndex > 0) {
            activeQuiz.currentIndex--;
            loadQuestion();
        }
    });

    document.getElementById("btn-next-question").addEventListener("click", () => {
        if (activeQuiz.currentIndex < activeQuiz.questions.length - 1) {
            activeQuiz.currentIndex++;
            loadQuestion();
        } else {
            if (activeQuiz.isReviewMode) {
                // Return to results
                document.getElementById("quiz-active-screen").classList.add("hidden");
                document.getElementById("quiz-results-screen").classList.remove("hidden");
            } else {
                finishQuiz();
            }
        }
    });

    document.getElementById("btn-quit-quiz").addEventListener("click", () => {
        if (confirm("Are you sure you want to quit the quiz? Current progress won't be saved in your mock history.")) {
            clearInterval(activeQuiz.timer);
            resetToTopicSelection();
        }
    });

    // Topic vs. Year selection toggles
    const btnTopic = document.getElementById("btn-mode-topic");
    const btnYear = document.getElementById("btn-mode-year");
    const gridTopic = document.getElementById("quiz-topic-grid");
    const gridYear = document.getElementById("quiz-year-grid");

    btnTopic.addEventListener("click", () => {
        btnTopic.classList.add("active");
        btnYear.classList.remove("active");
        gridTopic.classList.remove("hidden");
        gridYear.classList.add("hidden");
    });

    btnYear.addEventListener("click", () => {
        btnYear.classList.add("active");
        btnTopic.classList.remove("active");
        gridTopic.classList.add("hidden");
        gridYear.classList.remove("hidden");
        renderQuizYears();
    });
}

function updateSectionTabsUI() {
    if (!activeQuiz.isSectionalMock) {
        document.getElementById('quiz-section-tabs').style.display = 'none';
        return;
    }
    document.getElementById('quiz-section-tabs').style.display = 'flex';
    
    const tabIds    = ['tab-reasoning', 'tab-gk', 'tab-maths', 'tab-english'];
    const tabLabels = ['General Intelligence', 'General Awareness', 'Quantitative Aptitude', 'English Comprehension'];
    
    tabIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
            if (idx === activeQuiz.currentSectionIndex) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    });

    // Keep sidebar palette title in sync with active section
    const paletteTitleEl = document.getElementById('palette-section-title');
    if (paletteTitleEl) {
        paletteTitleEl.innerText = tabLabels[activeQuiz.currentSectionIndex] || '';
    }
}

function startFullMock() {
    const REASONING_TOPICS = new Set(['analogy','blood_relation','coding_decoding','direction','mathematical_ops','odd_one_out','paper_folding','puzzle','ranking','reasoning_misc','series','syllogism']);
    const GK_TOPICS       = new Set(['culture','current','economy','environment','general','general_awareness','geography','history','polity','science']);
    const MATHS_TOPICS    = new Set(['algebra','average','geometry','mensuration','mixture','number_system','percentage','profit_loss','ratio','si_ci','time_distance','time_work','trigonometry']);
    const ENGLISH_TOPICS  = new Set(['english_misc','grammar','idioms_phrases','reading_comprehension','sentence_improvement','vocabulary']);

    let reasoning = QUESTIONS_DB.filter(q => q.subject === 'reasoning' || REASONING_TOPICS.has(q.topic)).sort(() => 0.5 - Math.random()).slice(0, 25);
    let gk        = QUESTIONS_DB.filter(q => q.subject === 'gk'        || GK_TOPICS.has(q.topic)).sort(() => 0.5 - Math.random()).slice(0, 25);
    let maths     = QUESTIONS_DB.filter(q => q.subject === 'maths'     || MATHS_TOPICS.has(q.topic)).sort(() => 0.5 - Math.random()).slice(0, 25);
    let english   = QUESTIONS_DB.filter(q => q.subject === 'english'   || ENGLISH_TOPICS.has(q.topic)).sort(() => 0.5 - Math.random()).slice(0, 25);

    // Safety: if any section is empty, alert and stop
    if (!reasoning.length || !gk.length || !maths.length || !english.length) {
        alert('Not enough questions in the database for a full mock. Please check back later.');
        return;
    }
    
    activeQuiz.category = `full_mock_60_mins`;
    activeQuiz.isFullMock = true;
    activeQuiz.isSectionalMock = true;
    activeQuiz.sections = [
        { name: "Reasoning", questions: reasoning, userAnswers: new Array(reasoning.length).fill(null), qStatus: null },
        { name: "GK", questions: gk, userAnswers: new Array(gk.length).fill(null), qStatus: null },
        { name: "Maths", questions: maths, userAnswers: new Array(maths.length).fill(null), qStatus: null },
        { name: "English", questions: english, userAnswers: new Array(english.length).fill(null), qStatus: null }
    ];
    activeQuiz.currentSectionIndex = 0;

    // Load first section
    activeQuiz.questions = activeQuiz.sections[0].questions;
    activeQuiz.userAnswers = activeQuiz.sections[0].userAnswers;
    activeQuiz.currentIndex = 0;
    activeQuiz.score = 0;
    activeQuiz.secondsElapsed = 0;
    activeQuiz.isReviewMode = false;

    // Switch Screens
    document.getElementById("quiz-select-screen").classList.add("hidden");
    document.getElementById("quiz-results-screen").classList.add("hidden");
    document.getElementById("quiz-active-screen").classList.remove("hidden");
    updateSectionTabsUI();

    // Start Timer (15 minutes for Section 1)
    activeQuiz.totalSecondsRemaining = 15 * 60;
    activeQuiz.questionSecondsElapsed = 0;
    document.getElementById("quiz-timer-display").innerText = "15:00";
    if (document.getElementById("quiz-question-timer-display")) {
        document.getElementById("quiz-question-timer-display").innerText = "00:00";
    }
    
    clearInterval(activeQuiz.timer);
    activeQuiz.timer = setInterval(() => {
        activeQuiz.secondsElapsed++;
        activeQuiz.questionSecondsElapsed++;
        if (activeQuiz.totalSecondsRemaining > 0) {
            activeQuiz.totalSecondsRemaining--;
            let m = Math.floor(activeQuiz.totalSecondsRemaining / 60);
            let s = activeQuiz.totalSecondsRemaining % 60;
            document.getElementById("quiz-timer-display").innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

            let qm = Math.floor(activeQuiz.questionSecondsElapsed / 60);
            let qs = activeQuiz.questionSecondsElapsed % 60;
            if (document.getElementById("quiz-question-timer-display")) {
                document.getElementById("quiz-question-timer-display").innerText = `${qm < 10 ? '0' : ''}${qm}:${qs < 10 ? '0' : ''}${qs}`;
            }
        } else {
            advanceToNextSection();
        }
    }, 1000);

    // Initial Render
    if (typeof initEduqityState === 'function') {
        initEduqityState();
    }
    loadQuestion();
}

function advanceToNextSection() {
    // Save current section state
    activeQuiz.sections[activeQuiz.currentSectionIndex].userAnswers = activeQuiz.userAnswers;
    if (activeQuiz.qStatus) {
        activeQuiz.sections[activeQuiz.currentSectionIndex].qStatus = [...activeQuiz.qStatus];
    }
    
    activeQuiz.currentSectionIndex++;
    
    if (activeQuiz.currentSectionIndex >= activeQuiz.sections.length) {
        finishQuiz();
        return;
    }
    
    alert(`Time's up for this section! Moving to ${activeQuiz.sections[activeQuiz.currentSectionIndex].name}`);
    
    // Load next section
    activeQuiz.questions = activeQuiz.sections[activeQuiz.currentSectionIndex].questions;
    activeQuiz.userAnswers = activeQuiz.sections[activeQuiz.currentSectionIndex].userAnswers;
    activeQuiz.currentIndex = 0;
    
    if (typeof initEduqityState === 'function') {
        initEduqityState();
        if (activeQuiz.sections[activeQuiz.currentSectionIndex].qStatus) {
             activeQuiz.qStatus = activeQuiz.sections[activeQuiz.currentSectionIndex].qStatus;
        }
    }
    
    updateSectionTabsUI();
    loadQuestion();
    
    // Reset timer to 15 mins
    activeQuiz.totalSecondsRemaining = 15 * 60;
    activeQuiz.questionSecondsElapsed = 0;
}



function finishQuiz() {
    clearInterval(activeQuiz.timer);

    if (activeQuiz.isSectionalMock && activeQuiz.sections) {
        // Save current section state one last time
        activeQuiz.sections[activeQuiz.currentSectionIndex].userAnswers = activeQuiz.userAnswers;
        
        let allQs = [];
        let allAns = [];
        activeQuiz.sections.forEach(sec => {
            allQs = allQs.concat(sec.questions);
            allAns = allAns.concat(sec.userAnswers);
        });
        activeQuiz.questions = allQs;
        activeQuiz.userAnswers = allAns;
    }

    // Calculate Score
    activeQuiz.score = 0;
    let fullMockScore = 0;
    let totalQuestions = activeQuiz.questions.length;

    activeQuiz.questions.forEach((q, idx) => {
        const userAnswer = activeQuiz.userAnswers[idx];
        if (userAnswer !== null) {
            appState.solvedCount++;
            if (userAnswer === q.answer) {
                activeQuiz.score++;
                appState.correctCount++;
                if (activeQuiz.isFullMock) fullMockScore += 2;
            } else {
                if (activeQuiz.isFullMock) fullMockScore -= 0.5;
            }
        }
    });

    const finalScore = activeQuiz.isFullMock ? fullMockScore : activeQuiz.score;
    const maxScore = activeQuiz.isFullMock ? totalQuestions * 2 : totalQuestions;

    // --- SAVE TO HISTORY ---
    const totalTimeLimit = activeQuiz.isFullMock ? (60 * 60) : (20 * 60);
    const totalTimeTaken = totalTimeLimit - activeQuiz.totalSecondsRemaining;
    const pct = Math.round((activeQuiz.score / totalQuestions) * 100); // Raw accuracy %
    const historyEntry = {
        date: new Date().toISOString(),
        label: activeQuiz.category.replace(/_/g, ' '),
        score: finalScore,
        total: maxScore,
        pct: pct,
        timeSecs: totalTimeTaken
    };
    if (!appState.quizHistory) appState.quizHistory = [];
    appState.quizHistory.push(historyEntry);
    // Cap history at 100 entries
    if (appState.quizHistory.length > 100) appState.quizHistory.shift();

    // --- SAVE TO MISTAKE BOOK ---
    if (!appState.mistakeBook) appState.mistakeBook = {};
    activeQuiz.questions.forEach((q, idx) => {
        const userAnswer = activeQuiz.userAnswers[idx];
        const isWrong = userAnswer !== q.answer; // includes skipped (null)
        if (isWrong) {
            appState.mistakeBook[q.id] = {
                q: q,
                userAnswer: userAnswer,
                addedAt: new Date().toISOString(),
                quizLabel: activeQuiz.category.replace(/_/g, ' ')
            };
        } else {
            // Remove from mistake book if they got it right this time!
            delete appState.mistakeBook[q.id];
        }
    });
    saveState();
    renderMistakeBookBadge();

    // Update Progress bar to 100%
    document.getElementById("quiz-progress-fill").style.width = "100%";

    // Switch view to Result Screen
    document.getElementById("quiz-active-screen").classList.add("hidden");
    document.getElementById("quiz-results-screen").classList.remove("hidden");

    // Render metrics
    const scoreVal = document.getElementById("result-score-value");
    scoreVal.innerText = `${finalScore} / ${maxScore}`;

    // Timer formatted
    const mins = Math.floor(totalTimeTaken / 60);
    const secs = totalTimeTaken % 60;
    document.getElementById("result-time-taken").innerText = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    document.getElementById("result-accuracy-pct").innerText = `${pct}%`;

    // Feedback copy
    const feedback = document.getElementById("result-feedback-message");
    if (activeQuiz.isFullMock) {
        if (finalScore >= 160) {
            feedback.innerText = "🏆 AIR 1 Zone! 160+ is elite territory. This is the score that wins the top rank. Perfect your speed now.";
        } else if (finalScore >= 140) {
            feedback.innerText = "⚡ Very close to AIR 1. Push past 160 with tighter accuracy and faster mental math. Analyze every lost mark.";
        } else if (finalScore >= 120) {
            feedback.innerText = "⚠️ Clearance level, but far from AIR 1. You need 30-40 more marks. Identify and eliminate weak spots immediately.";
        } else {
            feedback.innerText = "❌ Below AIR 1 requirement. Serious revision needed. Focus on high-weightage topics and rebuild accuracy from scratch.";
        }
    } else {
        if (pct >= 90) {
            feedback.innerText = "🏆 AIR 1 Standard! 90%+ accuracy is exactly where a rank 1 candidate operates. Now focus on speed — solve 20% faster.";
        } else if (pct >= 75) {
            feedback.innerText = "⚡ Good, but not AIR 1 yet. 75% means you are losing 1 in 4 — that's too many for the top rank. Drill your weak topics harder.";
        } else {
            feedback.innerText = "❌ Below AIR 1 threshold. Review formulas, shortcuts and reattempt until accuracy is consistently above 90%.";
        }
    }

    const breakdownEl = document.getElementById("result-subject-breakdown");
    if (activeQuiz.isFullMock && breakdownEl) {
        breakdownEl.style.display = 'block';
        breakdownEl.innerHTML = `
            <h4 style="margin-bottom:12px; font-size:0.95rem; color:var(--text-primary); border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">Subject-wise Breakdown</h4>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; font-size:0.85rem; color:var(--text-secondary);">
                <div><strong>Maths:</strong> ${subjectStats['maths'].score} / 50 <br><span style="font-size:0.75rem; color:var(--text-muted);">(${subjectStats['maths'].correct}✅ ${subjectStats['maths'].wrong}❌)</span></div>
                <div><strong>Reasoning:</strong> ${subjectStats['reasoning'].score} / 50 <br><span style="font-size:0.75rem; color:var(--text-muted);">(${subjectStats['reasoning'].correct}✅ ${subjectStats['reasoning'].wrong}❌)</span></div>
                <div><strong>English:</strong> ${subjectStats['english'].score} / 50 <br><span style="font-size:0.75rem; color:var(--text-muted);">(${subjectStats['english'].correct}✅ ${subjectStats['english'].wrong}❌)</span></div>
                <div><strong>GK:</strong> ${subjectStats['gk'].score} / 50 <br><span style="font-size:0.75rem; color:var(--text-muted);">(${subjectStats['gk'].correct}✅ ${subjectStats['gk'].wrong}❌)</span></div>
            </div>
        `;
    } else if (breakdownEl) {
        breakdownEl.style.display = 'none';
    }

    // Show personal best badge if it's the highest score ever
    const allPcts = appState.quizHistory.map(h => h.pct);
    const isPersonalBest = pct === Math.max(...allPcts);
    const pbBadge = document.getElementById('result-personal-best');
    if (pbBadge) pbBadge.style.display = isPersonalBest && appState.quizHistory.length > 1 ? 'block' : 'none';
}

// --- MISTAKE BOOK BADGE ---
function renderMistakeBookBadge() {
    const count = Object.keys(appState.mistakeBook || {}).length;
    const badge = document.getElementById('mistake-book-badge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
}

// --- MISTAKE BOOK RENDERER ---
function renderMistakeBook() {
    const container = document.getElementById('mistake-book-list');
    const countEl = document.getElementById('mistake-book-count');
    if (!container) return;

    const mistakes = Object.values(appState.mistakeBook || {});
    // Sort newest first
    mistakes.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));

    if (countEl) countEl.textContent = mistakes.length;

    if (mistakes.length === 0) {
        container.innerHTML = `
            <div class="mistake-empty">
                <span style="font-size:3rem">🎉</span>
                <h3>Mistake Book is Empty!</h3>
                <p>Great job! Your mistake book will automatically fill up when you answer questions incorrectly during a quiz. Come back here to practice them.</p>
            </div>`;
        return;
    }

    container.innerHTML = '';
    mistakes.forEach(entry => {
        const q = entry.q;
        const userAns = entry.userAnswer;
        const d = new Date(entry.addedAt);
        const dateStr = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

        const card = document.createElement('div');
        card.className = 'mistake-card';
        card.innerHTML = `
            <div class="mistake-card-header">
                <div class="mistake-tags">
                    <span class="mistake-tag year">${q.year || 'PYQ'}</span>
                    <span class="mistake-tag date">${q.examDate || ''} ${q.examShift || ''}</span>
                </div>
                <div class="mistake-card-meta">
                    <span class="mistake-added">Added ${dateStr}</span>
                    <button class="btn-remove-mistake" onclick="removeMistake('${q.id}')" title="Remove from Mistake Book">&times;</button>
                </div>
            </div>
            <p class="mistake-question">${q.question}</p>
            <div class="mistake-options">
                ${q.options.map((opt, idx) => {
                    let cls = 'mistake-opt';
                    if (idx === q.answer) cls += ' correct';
                    else if (idx === userAns) cls += ' wrong';
                    const prefix = String.fromCharCode(65 + idx);
                    return `<div class="${cls}"><span class="opt-prefix">${prefix}</span> ${opt}</div>`;
                }).join('')}
            </div>
            <div class="mistake-you-answered">
                ${userAns === null
                    ? '<span class="skipped-tag">⏭ You skipped this question</span>'
                    : `<span class="wrong-tag">✗ You chose: ${String.fromCharCode(65 + userAns)}) ${q.options[userAns]}</span>`
                }
            </div>
            <div class="mistake-shortcut">
                <strong>⚡ Shortcut:</strong> ${q.shortcut || q.explanation || 'Study the official solution.'}
            </div>
        `;
        container.appendChild(card);
    });
}

function removeMistake(qId) {
    if (!appState.mistakeBook) return;
    delete appState.mistakeBook[qId];
    saveState();
    renderMistakeBook();
    renderMistakeBookBadge();
}

function clearAllMistakes() {
    if (!confirm('Clear all mistakes from your Mistake Book? This cannot be undone.')) return;
    appState.mistakeBook = {};
    saveState();
    renderMistakeBook();
    renderMistakeBookBadge();
}

function startMistakeQuiz() {
    const mistakes = Object.values(appState.mistakeBook || {});
    if (mistakes.length === 0) return alert('Your Mistake Book is empty! Complete a quiz first.');

    const pool = mistakes.map(m => m.q);

    activeQuiz.category = 'mistake_book_review';
    activeQuiz.questions = pool;
    activeQuiz.currentIndex = 0;
    activeQuiz.score = 0;
    activeQuiz.secondsElapsed = 0;
    activeQuiz.totalSecondsRemaining = pool.length * 90; // 90s per question
    activeQuiz.questionSecondsElapsed = 0;
    activeQuiz.userAnswers = new Array(pool.length).fill(null);
    activeQuiz.isReviewMode = false;

    // Switch to quiz view
    document.querySelector('[data-tab="quiz"]').click();

    document.getElementById('quiz-select-screen').classList.add('hidden');
    document.getElementById('quiz-results-screen').classList.add('hidden');
    document.getElementById('quiz-active-screen').classList.remove('hidden');

    const totalSecs = activeQuiz.totalSecondsRemaining;
    const tMins = String(Math.floor(totalSecs / 60)).padStart(2, '0');
    const tSecs = String(totalSecs % 60).padStart(2, '0');
    document.getElementById('quiz-timer-display').innerText = `${tMins}:${tSecs}`;

    clearInterval(activeQuiz.timer);
    activeQuiz.timer = setInterval(() => {
        activeQuiz.secondsElapsed++;
        if (activeQuiz.totalSecondsRemaining > 0) activeQuiz.totalSecondsRemaining--;
        const m = String(Math.floor(activeQuiz.totalSecondsRemaining / 60)).padStart(2, '0');
        const s = String(activeQuiz.totalSecondsRemaining % 60).padStart(2, '0');
        document.getElementById('quiz-timer-display').innerText = `${m}:${s}`;
        if (activeQuiz.totalSecondsRemaining <= 0) {
            clearInterval(activeQuiz.timer);
            finishQuiz();
        }
    }, 1000);

    loadQuestion();
}

function startReviewMode() {
    activeQuiz.isReviewMode = true;
    activeQuiz.currentIndex = 0;
    document.getElementById("quiz-results-screen").classList.add("hidden");
    document.getElementById("quiz-active-screen").classList.remove("hidden");
    loadQuestion();
}

function resetToTopicSelection() {
    document.getElementById("quiz-results-screen").classList.add("hidden");
    document.getElementById("quiz-active-screen").classList.add("hidden");
    document.getElementById("quiz-select-screen").classList.remove("hidden");
    
    const btnYear = document.getElementById("btn-mode-year");
    if (btnYear.classList.contains("active")) {
        renderQuizYears();
    } else {
        renderQuizTopics();
    }
}

// --- 8. SPEED CALCULATION GAME ---
let trainerState = {
    mode: "",
    currentQuestion: null,
    score: 0,
    streak: 0,
    timer: null,
    timeLeft: 100 // Out of 100%
};

function startTrainerMode(mode) {
    trainerState.mode = mode;
    trainerState.score = 0;
    trainerState.streak = 0;

    document.getElementById("trainer-select-screen").classList.add("hidden");
    document.getElementById("trainer-gameover-screen").classList.add("hidden");
    document.getElementById("trainer-active-screen").classList.remove("hidden");

    generateDrillQuestion();
}

function generateDrillQuestion() {
    let questionText = "";
    let correctAnswer = "";
    let options = [];

    if (trainerState.mode === "squares") {
        const num = Math.floor(Math.random() * 20) + 11; // 11 to 30
        questionText = `${num}² = ?`;
        correctAnswer = String(num * num);

        // Generate distractors close to answer
        options.push(correctAnswer);
        while (options.length < 4) {
            const offset = (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1) * (num > 20 ? 10 : 2);
            const dist = String(num * num + offset);
            if (!options.includes(dist) && parseInt(dist) > 0) options.push(dist);
        }

    } else if (trainerState.mode === "cubes") {
        const num = Math.floor(Math.random() * 14) + 2; // 2 to 15
        questionText = `${num}³ = ?`;
        correctAnswer = String(num * num * num);

        options.push(correctAnswer);
        while (options.length < 4) {
            const offset = (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1) * 5;
            const dist = String(num * num * num + offset);
            if (!options.includes(dist) && parseInt(dist) > 0) options.push(dist);
        }

    } else if (trainerState.mode === "fractions") {
        const list = [
            { f: "1/2", p: "50%" },
            { f: "1/3", p: "33.33%" },
            { f: "1/4", p: "25%" },
            { f: "1/5", p: "20%" },
            { f: "1/6", p: "16.66%" },
            { f: "1/7", p: "14.28%" },
            { f: "1/8", p: "12.5%" },
            { f: "1/9", p: "11.11%" },
            { f: "1/11", p: "9.09%" },
            { f: "1/12", p: "8.33%" },
            { f: "3/8", p: "37.5%" },
            { f: "5/8", p: "62.5%" }
        ];
        const selected = list[Math.floor(Math.random() * list.length)];
        questionText = `Convert ${selected.f} to %`;
        correctAnswer = selected.p;

        options.push(correctAnswer);
        while (options.length < 4) {
            const randomP = list[Math.floor(Math.random() * list.length)].p;
            if (!options.includes(randomP)) options.push(randomP);
        }

    } else if (trainerState.mode === "triplets") {
        const triplets = [
            [3, 4, 5], [5, 12, 13], [7, 24, 25], [8, 15, 17],
            [9, 40, 41], [11, 60, 61], [12, 35, 37], [16, 63, 65], [20, 21, 29]
        ];
        const t = triplets[Math.floor(Math.random() * triplets.length)];
        // Randomly hide one of the three sides
        const hideIdx = Math.floor(Math.random() * 3);
        const labels = ['a', 'b', 'c (Hypotenuse)'];
        const parts = [t[0], t[1], t[2]];
        correctAnswer = String(parts[hideIdx]);
        questionText = `Triplet: ${parts.map((v, i) => i === hideIdx ? '?' : v).join(' , ')}  →  Find ${labels[hideIdx]}`;

        options.push(correctAnswer);
        const allVals = triplets.flat().filter(v => v !== parseInt(correctAnswer));
        while (options.length < 4) {
            const pick = String(allVals[Math.floor(Math.random() * allVals.length)]);
            if (!options.includes(pick)) options.push(pick);
        }
    } else if (trainerState.mode === "addition") {
        const a = Math.floor(Math.random() * 90) + 10;
        const b = Math.floor(Math.random() * 90) + 10;
        const c = Math.floor(Math.random() * 90) + 10;
        const op = Math.random() > 0.5 ? '+' : '-';
        questionText = `${a} + ${b} ${op} ${c} = ?`;
        const ans = op === '+' ? (a + b + c) : (a + b - c);
        correctAnswer = String(ans);
        
        options.push(correctAnswer);
        while (options.length < 4) {
            const dist = String(ans + (Math.floor(Math.random() * 20) + 1) * (Math.random() > 0.5 ? 1 : -1));
            if (!options.includes(dist)) options.push(dist);
        }
    } else if (trainerState.mode === "multiplication") {
        const a = Math.floor(Math.random() * 19) + 12; // 12 to 30
        const b = Math.floor(Math.random() * 19) + 12;
        questionText = `${a} × ${b} = ?`;
        const ans = a * b;
        correctAnswer = String(ans);
        
        options.push(correctAnswer);
        while (options.length < 4) {
            const dist = String(ans + (Math.floor(Math.random() * 10) + 1) * 10 * (Math.random() > 0.5 ? 1 : -1));
            if (!options.includes(dist)) options.push(dist);
        }
    } else if (trainerState.mode === "percentages") {
        const percents = [10, 15, 20, 25, 30, 40, 50, 60, 75];
        const p = percents[Math.floor(Math.random() * percents.length)];
        const base = (Math.floor(Math.random() * 20) + 5) * 20; 
        questionText = `${p}% of ${base} = ?`;
        const ans = (p * base) / 100;
        correctAnswer = String(ans);
        
        options.push(correctAnswer);
        while (options.length < 4) {
            const dist = String(ans + (Math.floor(Math.random() * 5) + 1) * 5 * (Math.random() > 0.5 ? 1 : -1));
            if (!options.includes(dist) && parseInt(dist) > 0) options.push(dist);
        }
    } else if (trainerState.mode === "roots") {
        const isSquare = Math.random() > 0.5;
        if (isSquare) {
            const num = Math.floor(Math.random() * 20) + 11;
            questionText = `√${num * num} = ?`;
            correctAnswer = String(num);
        } else {
            const num = Math.floor(Math.random() * 10) + 5; 
            questionText = `∛${num * num * num} = ?`;
            correctAnswer = String(num);
        }
        
        options.push(correctAnswer);
        while (options.length < 4) {
            const dist = String(parseInt(correctAnswer) + (Math.floor(Math.random() * 4) + 1) * (Math.random() > 0.5 ? 1 : -1));
            if (!options.includes(dist) && parseInt(dist) > 0) options.push(dist);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Save current question context
    trainerState.currentQuestion = {
        questionText,
        correctAnswer,
        options
    };

    // Render Question & Options
    document.getElementById("drill-question-display").innerText = questionText;
    const container = document.getElementById("drill-options-container");
    container.innerHTML = "";

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerHTML = `<span>${opt}</span>`;
        btn.onclick = () => submitDrillAnswer(opt);
        container.appendChild(btn);
    });

    document.getElementById("trainer-current-score").innerText = trainerState.score;
    document.getElementById("trainer-streak").innerText = trainerState.streak;

    // Reset and start countdown timer (10 seconds)
    startDrillCountdown();
}

function startDrillCountdown() {
    clearInterval(trainerState.timer);
    trainerState.timeLeft = 100; // start with full bar
    const bar = document.getElementById("trainer-timer-fill");
    bar.style.width = "100%";

    const tickMs = 100;
    const totalDurationMs = 10000; // 10 seconds
    const decrementPct = (tickMs / totalDurationMs) * 100;

    trainerState.timer = setInterval(() => {
        trainerState.timeLeft -= decrementPct;
        if (trainerState.timeLeft <= 0) {
            bar.style.width = "0%";
            clearInterval(trainerState.timer);
            endTrainerGame();
        } else {
            bar.style.width = `${trainerState.timeLeft}%`;
        }
    }, tickMs);
}

function submitDrillAnswer(selectedText) {
    clearInterval(trainerState.timer);
    const correct = (selectedText === trainerState.currentQuestion.correctAnswer);

    const buttons = document.querySelectorAll("#drill-options-container .option-btn");
    buttons.forEach(btn => {
        btn.classList.add("disabled");
        if (btn.innerText.trim() === trainerState.currentQuestion.correctAnswer) {
            btn.classList.add("correct");
        } else if (btn.innerText.trim() === selectedText && !correct) {
            btn.classList.add("incorrect");
        }
    });

    if (correct) {
        trainerState.score += 10;
        trainerState.streak += 1;
        // Load next question in 0.6 seconds
        setTimeout(() => {
            generateDrillQuestion();
        }, 600);
    } else {
        setTimeout(() => {
            endTrainerGame();
        }, 600);
    }
}

function endTrainerGame() {
    clearInterval(trainerState.timer);

    document.getElementById("trainer-active-screen").classList.add("hidden");
    document.getElementById("trainer-gameover-screen").classList.remove("hidden");

    // Render results
    document.getElementById("trainer-final-score").innerText = trainerState.score;

    // Check if new High Score
    const isNewHigh = (trainerState.score > appState.trainerHighScore);
    const hsAnnouncement = document.getElementById("trainer-new-highscore");
    if (isNewHigh) {
        appState.trainerHighScore = trainerState.score;
        saveState();
        hsAnnouncement.classList.remove("hidden");
    } else {
        hsAnnouncement.classList.add("hidden");
    }

    // Set listener to replay
    document.getElementById("btn-restart-trainer").onclick = () => {
        startTrainerMode(trainerState.mode);
    };
}

function quitTrainerGame() {
    clearInterval(trainerState.timer);
    document.getElementById("trainer-active-screen").classList.add("hidden");
    document.getElementById("trainer-gameover-screen").classList.add("hidden");
    document.getElementById("trainer-select-screen").classList.remove("hidden");
}

// --- 9. FORMULA SHEET VIEW ---
function renderFormulasList(filterQuery = "") {
    const container = document.getElementById("formula-list-container");
    container.innerHTML = "";

    const query = filterQuery.toLowerCase().trim();

    FORMULAS_DB.forEach((sect, sectIdx) => {
        // Filter items
        const matchedItems = sect.items.filter(item => {
            return item.label.toLowerCase().includes(query) || 
                   item.formula.toLowerCase().includes(query) ||
                   sect.category.toLowerCase().includes(query);
        });

        // Skip section if query is set and no items matched
        if (query && matchedItems.length === 0) return;

        const sectionCard = document.createElement('div');
        sectionCard.className = "formula-section";

        // Accordion header
        const header = document.createElement('div');
        header.className = "formula-section-header";
        header.innerHTML = `
            <h3>${sect.category}</h3>
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
        `;

        // Content panel
        const content = document.createElement('div');
        content.className = "formula-section-content";

        // If query is set, auto-expand. Otherwise keep first collapsed or expanded.
        const isCollapsed = !query; // Auto expanded when searching
        if (isCollapsed) content.classList.add("hidden");

        matchedItems.forEach(item => {
            const row = document.createElement('div');
            row.className = "formula-item";
            row.innerHTML = `
                <div class="formula-label">${item.label}</div>
                <div class="formula-math">${item.formula}</div>
            `;
            content.appendChild(row);
        });

        // Toggle logic
        header.addEventListener('click', () => {
            const isHidden = content.classList.toggle('hidden');
            const chevron = header.querySelector('.chevron');
            if (isHidden) {
                chevron.style.transform = "rotate(0deg)";
            } else {
                chevron.style.transform = "rotate(180deg)";
            }
        });

        // Rotate chevron based on initial state
        const chevron = header.querySelector('.chevron');
        if (!isCollapsed) {
            chevron.style.transform = "rotate(180deg)";
        }

        sectionCard.appendChild(header);
        sectionCard.appendChild(content);
        container.appendChild(sectionCard);
    });

    if (container.innerHTML === "") {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No matching formulas found.</div>`;
    }
}

function setupFormulaSearch() {
    const input = document.getElementById("formula-search-input");
    input.addEventListener("input", (e) => {
        renderFormulasList(e.target.value);
    });
}

// --- 10. TYPING TEST MODULE ---
let DAILY_EDITORIAL = "A bird is merely a bird until it is spotted outside its natural range. Then it becomes a sign to be decoded. A photograph taken in Brazil of a red-winged blackbird, which is native to North and Central America, was recently posted on an online forum, leading to much speculation among scientists about what its unusual presence could possibly mean. Was it a vagrant, blown off course by some miscalculation of its internal GPS? Or an indicator of how greater forces — climate change, habitat destruction, etc. — were impacting the behaviour of different species? A little detective work helped uncover the truth: The photographer who had submitted the image had captured an epaulet oriole, common in Brazil, and asked an AI platform to make the picture “look better”, resulting in a single modified detail — and a false sighting. A recent article in Nature argues that this is precisely the kind of “AI slop” that is making life difficult for scientists who rely on public tracking platforms to study wildlife: Not the obviously fake images of tigers in the savannah or parakeets in the Arctic, but the subtly manipulated ones that just might — and often do — pass for documentary evidence. The study of nature is not merely about pretty pictures or awe-inspiring vistas. It is about understanding ecological shifts that often portend changes in the world humans inhabit, from warming temperatures and disappearing habitats to the spread of disease and invasive species. While many wildlife photographers use technology to tweak certain parts of a photograph in order to get the “perfect” image, AI tools, with their tendency to add or “hallucinate” details, can, literally and figuratively, lead researchers on a wild-goose chase. Because in science, even the smallest fabrication can end up obscuring a larger truth."; // DAILY_EDITORIAL_MARKER

const TYPING_PASSAGES = {
    'CGL': [
        "The Staff Selection Commission will hold the Combined Graduate Level Examination for filling up of various Group B and Group C posts in different Ministries and Departments. It is important to practice calculation speed and typing accuracy to clear the Tier II examination successfully. Candidates must ensure they meet the essential qualifications.",
        "Data Entry Speed Test (DEST) will be conducted for a passage of about 2000 key depressions for a duration of 15 minutes. This test will be of qualifying nature. Computers for the test will be provided by the Commission at the Centre. The skill test will be held on the same day as the main examination. Regular practice is the key to passing this module.",
        "The history of India is one of the most fascinating and complex in the world. From the ancient Indus Valley Civilization to the vibrant democracy of today, the subcontinent has seen the rise and fall of great empires. The Maurya and Gupta dynasties contributed significantly to art, architecture, and administrative systems that influenced later generations.",
        "Economic development is a crucial aspect of a nation's progress. It encompasses not only the growth in Gross Domestic Product but also improvements in education, healthcare, and infrastructure. Developing nations often face challenges such as inflation and unemployment, which require robust fiscal and monetary policies to ensure sustainable growth.",
        "Climate change poses a severe threat to global stability and ecological balance. Rising temperatures, melting glaciers, and extreme weather events are clear indicators of this crisis. International agreements and national initiatives are being implemented to reduce carbon emissions and transition towards renewable energy sources like solar and wind power.",
        "The Indian Constitution is the supreme law of the land, providing a comprehensive framework for the governance of the country. It establishes a parliamentary system of government with a federal structure. The fundamental rights and duties enlisted in the constitution serve as the guiding principles for both the state and its citizens.",
        "Information technology has revolutionized the way we live and work. The advent of the internet, smartphones, and artificial intelligence has brought unprecedented convenience and connectivity. However, it also raises concerns about data privacy, cybersecurity, and the digital divide between urban and rural populations.",
        "Agriculture remains the backbone of the Indian economy, employing a significant portion of the workforce. The Green Revolution introduced high-yielding varieties of seeds and modern farming techniques, dramatically increasing food production. Today, sustainable farming practices and technological interventions are essential to address the challenges of water scarcity and soil degradation.",
        "Space exploration has always captured human imagination. The Indian Space Research Organisation has made remarkable strides with missions like Chandrayaan and Mangalyaan, showcasing the nation's technological prowess on a global stage. Satellite technology also plays a vital role in communication, weather forecasting, and disaster management.",
        "Effective public administration is vital for the successful implementation of government policies and programs. Civil servants are expected to act with integrity, transparency, and impartiality. Continuous administrative reforms and the adoption of e-governance initiatives aim to make the system more responsive and citizen-centric.",
        "Tourism in India offers a diverse range of experiences, from the snow-capped Himalayas in the north to the sun-kissed beaches in the south. The rich cultural heritage, ancient monuments, and diverse flora and fauna attract millions of domestic and international tourists every year, significantly contributing to the national economy.",
        "Education is the most powerful weapon which you can use to change the world. The National Education Policy aims to transform the educational landscape by promoting holistic, multidisciplinary, and flexible learning. Emphasizing early childhood care and integrating vocational education are key components of this new vision.",
        "Public health infrastructure is essential for managing disease outbreaks and ensuring the well-being of the population. Preventive healthcare, sanitation drives, and vaccination programs have successfully eradicated many infectious diseases. Continued investment in medical research and healthcare facilities is necessary to build a resilient health system.",
        "The financial sector, comprising banks, stock markets, and insurance companies, facilitates capital formation and economic growth. Regulatory bodies play a crucial role in maintaining market stability and protecting investor interests. Financial inclusion initiatives aim to bring unbanked populations into the formal economic system.",
        "Biodervation is critical for maintaining ecological balance. India is home to several biodiversity hotspots, housing unique species of flora and fauna. Wildlife sanctuaries and national parks are established to protect endangered species and their natural habitats from deforestation and poaching.",
        "The role of media in a democratic society cannot be overstated. It acts as the fourth pillar, informing the public and holding authorities accountable. While the rise of digital media has democratized information dissemination, it also necessitates media literacy to combat the spread of fake news and misinformation.",
        "Infrastructure development, including roads, railways, and ports, is a prerequisite for rapid economic progress. Improved connectivity reduces transportation costs and boosts trade and commerce. Public-private partnerships are increasingly being utilized to fund and execute large-scale infrastructure projects efficiently.",
        "Women empowerment is central to achieving inclusive and sustainable development. Ensuring equal access to education, healthcare, and economic opportunities is a fundamental human right. Various legislative measures and social campaigns have been launched to promote gender equality and combat discrimination in all its forms.",
        "The manufacturing sector is a key driver of employment generation and economic self-reliance. Initiatives like Make in India seek to boost domestic manufacturing capabilities and attract foreign investment. Fostering a conducive business environment and improving the ease of doing business are critical to this objective.",
        "Disaster management involves preparedness, response, and recovery strategies to mitigate the impact of natural and human-made disasters. Early warning systems and community awareness programs are vital components of effective disaster risk reduction. Coordination among various agencies ensures timely relief and rehabilitation efforts."
    ],
    'JJA': [
        "IN THE HIGH COURT OF DELHI AT NEW DELHI. The writ petition filed under Article 226 of the Constitution of India seeking issuance of a writ of mandamus directing the respondents to consider the representation of the petitioner. The Junior Judicial Assistant plays a crucial role in maintaining court records, drafting orders, and ensuring smooth administrative functioning.",
        "The appellant has challenged the impugned judgment and decree passed by the learned Trial Court. The respondent submits that the suit is barred by limitation and there is no merit in the present appeal. The court directs the registry to list the matter for final hearing on the next date. Affidavits of evidence must be filed within four weeks.",
        "This is an application under Section 439 of the Code of Criminal Procedure seeking regular bail in connection with the FIR registered under Section 420 and 406 of the Indian Penal Code. The learned counsel for the applicant contends that the applicant has been falsely implicated and the entire case is based on documentary evidence which is already in custody.",
        "Having heard the learned counsel for the parties and perusing the material placed on record, it is evident that a prima facie case is made out in favor of the plaintiff. Balance of convenience also lies in granting the ad-interim injunction. The defendants are hereby restrained from alienating or creating any third-party rights over the suit property.",
        "The present revision petition has been preferred against the order framing charges against the accused. It is a settled principle of law that at the stage of framing charge, the court is not required to meticulously evaluate the evidence but only to see whether a grave suspicion exists against the accused. The petition is accordingly dismissed.",
        "The dispute essentially relates to the specific performance of an agreement to sell. The plaintiff asserts that he was always ready and willing to perform his part of the contract, whereas the defendant alleges breach of trust. The trial court correctly appreciated the evidentiary value of the documents exhibited during the cross-examination of the witnesses.",
        "Notice was issued to the respondents, who have entered appearance through their respective counsel. Let the counter affidavit be filed within four weeks. Rejoinder, if any, be filed within two weeks thereafter. Interim order passed on the previous date of hearing shall continue to operate till the next date of hearing. List on the specified date.",
        "The grievance of the petitioner is that despite repeated representations, the statutory authority has failed to exercise its jurisdiction vested in it by law. The principles of natural justice mandate that an opportunity of hearing must be afforded before passing any adverse order. The impugned order is set aside, and the matter is remanded back for fresh adjudication.",
        "This appeal under Section 374 of the Cr.P.C. is directed against the judgment of conviction and order of sentence passed by the Additional Sessions Judge. The prosecution examined fifteen witnesses to prove its case beyond reasonable doubt. However, the defense pointed out glaring contradictions in the testimonies of the star witnesses which strike at the root of the prosecution case.",
        "The fundamental right to freedom of speech and expression is subject to reasonable restrictions under Article 19(2) of the Constitution. The restrictions must be proximate and have a direct nexus with the object sought to be achieved. The state cannot impose arbitrary restrictions under the guise of maintaining public order without substantial justification.",
        "An application for execution of the arbitral award has been filed. The judgment debtor has filed objections under Section 34 of the Arbitration and Conciliation Act, arguing that the award is patently illegal and against the public policy of India. The scope of interference with an arbitral award is extremely limited and circumscribed by the statutory provisions.",
        "The controversy revolves around the interpretation of a taxation statute. It is a well-established rule of statutory interpretation that in case of ambiguity in a taxing statute, the benefit of the doubt must go to the assessee. The assessing officer erred in applying a retrospective interpretation to a substantive provision of the law.",
        "The present suit for defamation seeks damages and a permanent injunction against the publication of allegedly libelous articles. The defendants invoke the defense of truth and fair comment in the public interest. The court must balance the right to reputation of the individual against the freedom of the press guaranteed by the Constitution.",
        "Under the provisions of the Hindu Marriage Act, a petition for dissolution of marriage by a decree of divorce has been filed on the grounds of cruelty and desertion. The Family Court recorded the finding that the matrimonial bond is irretrievably broken and reconciliation is impossible. The court grants the decree of divorce as prayed for.",
        "The public interest litigation highlights the severe environmental degradation caused by illegal sand mining in the riverbed. The National Green Tribunal has issued strict guidelines which are allegedly being flouted by the contractors with the connivance of local authorities. The court takes suo motu cognizance and directs the filing of a status report.",
        "The concept of res judicata is based on public policy to ensure finality of litigation and prevent individuals from being vexed twice for the same cause. Since the issues raised in the present suit were directly and substantially in issue in the previously instituted suit which was finally decided, the present suit is barred by res judicata.",
        "The anticipatory bail application is strongly opposed by the prosecution on the ground that custodial interrogation is necessary for the recovery of the misappropriated funds. The court observes that granting anticipatory bail in economic offences of this magnitude would hamper the investigation. The application is therefore rejected.",
        "The doctrine of legitimate expectation cannot be invoked to override statutory provisions or policy decisions taken in the larger public interest. The petitioners do not have a vested right to claim continuation of a specific policy unless promissory estoppel is conclusively established. The executive authorities are empowered to amend policies reasonably.",
        "In a suit for partition and separate possession of joint family properties, the preliminary decree was passed declaring the shares of the respective coparceners. The appointment of a local commissioner is sought to suggest the mode of partition by metes and bounds. The final decree proceedings shall commence upon receipt of the commissioner's report.",
        "The constitutional validity of the amended legislation has been challenged on the touchstone of Article 14. The classification made by the legislature must have a rational nexus to the object sought to be achieved. The court presumes the constitutionality of a statute unless it is demonstrably shown to be manifestly arbitrary or discriminatory."
    ]
};

let typingState = {
    passageText: "",
    startTime: null,
    timer: null,
    durationSecs: 0,
    timeRemaining: 0,
    activeMode: 1,
    examType: 'CGL', // 'CGL' or 'JJA'
    highlightEnabled: false
};

function setupTypingTest() {
    const typingInput = document.getElementById("tcs-typing-box");
    if(typingInput) {
        // Start timer on first keystroke
        typingInput.addEventListener("input", (e) => {
            if (!typingState.startTime) {
                typingState.startTime = new Date();
                clearInterval(typingState.timer);
                typingState.timer = setInterval(typingTimerTick, 1000);
            }
            
            const val = e.target.value;
            
            // Live word highlighting logic (if enabled)
            if (typingState.highlightEnabled) {
                const typedWords = val.trim().split(/\s+/);
                const refWords = typingState.passageText.split(/\s+/);
                
                // If they just started and haven't typed a full word, don't mark wrong yet unless space is pressed
                // A simple approach: Compare word by word. If typedWord[i] !== refWord[i] and they have moved past it, mark it red.
                // We'll re-render the reference box.
                let html = "";
                for(let i = 0; i < refWords.length; i++) {
                    // Only evaluate words they have completely passed (i < typedWords.length - 1)
                    // Or if they are on the current word, we can choose not to mark it yet until they hit space.
                    // For immediate strict feedback, we evaluate all words they've typed so far.
                    if (i < typedWords.length && typedWords[i] !== "") {
                        if (typedWords[i] !== refWords[i]) {
                            // Only mark it red if it's not the last word they are actively typing (unless they hit space)
                            const isLastWord = (i === typedWords.length - 1);
                            const endsWithSpace = val.endsWith(" ") || val.endsWith("\n");
                            
                            if (!isLastWord || endsWithSpace || (typedWords[i].length >= refWords[i].length && typedWords[i] !== refWords[i])) {
                                html += `<span class="tcs-word-error">${refWords[i]}</span> `;
                            } else {
                                html += `${refWords[i]} `; // Actively typing, don't mark yet
                            }
                        } else {
                            html += `${refWords[i]} `;
                        }
                    } else {
                        html += `${refWords[i]} `;
                    }
                }
                document.getElementById("tcs-reference-box").innerHTML = html.trim();
            }
        });
    }
}

function startTypingTest(modeMins, examType = 'CGL') {
    typingState.activeMode = modeMins;
    typingState.durationSecs = modeMins * 60;
    typingState.timeRemaining = typingState.durationSecs;
    typingState.startTime = null;
    typingState.examType = examType;
    
    // Check highlight toggle
    const toggleId = examType === 'EDITORIAL' ? 'tcs-highlight-toggle-editorial' : (examType === 'CGL' ? 'tcs-highlight-toggle-cgl' : 'tcs-highlight-toggle-jja');
    const toggleCheckbox = document.getElementById(toggleId);
    typingState.highlightEnabled = toggleCheckbox ? toggleCheckbox.checked : false;

    if (examType === 'EDITORIAL') {
        typingState.passageText = DAILY_EDITORIAL;
    } else {
        // Pick random passages to form a sufficiently long text without repeating
        const pool = TYPING_PASSAGES[examType];
        // Shuffle the pool of 20 paragraphs
        let shuffledPool = [...pool].sort(() => 0.5 - Math.random());
        let fullText = shuffledPool.join(" ");
        
        // Ensure it's long enough for 15 mins (aiming for >3000 chars just in case)
        if (fullText.length < 3000) {
            let moreShuffled = [...pool].sort(() => 0.5 - Math.random());
            fullText += " " + moreShuffled.join(" ");
        }
        typingState.passageText = fullText;
    }

    // Switch UI context to the active screen which resides in typing-view
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    document.getElementById("typing-view").classList.add("active");
    
    document.getElementById("typing-setup-screen").classList.add("hidden");
    const jjaSetup = document.getElementById("jjatyping-setup-screen");
    if (jjaSetup) jjaSetup.classList.add("hidden");
    const edSetup = document.getElementById("editorial-setup-screen");
    if (edSetup) edSetup.classList.add("hidden");
    
    // Hide mistake diff on restart
    const diffContainer = document.getElementById("typing-mistake-display");
    if (diffContainer) diffContainer.classList.add("hidden");
    
    document.getElementById("typing-result-screen").classList.add("hidden");
    document.getElementById("typing-active-screen").classList.remove("hidden");
    
    // Set dynamic exam title
    const examLabel = document.querySelector(".exam-label");
    if (examLabel) {
        if (examType === 'JJA') examLabel.innerText = "📝 Delhi HC JJA Mock Test";
        else if (examType === 'EDITORIAL') examLabel.innerText = "📰 Daily Editorial Typing Practice";
        else examLabel.innerText = "📝 SSC CGL DEST Mock Test";
    }
    
    const mins = String(Math.floor(typingState.durationSecs / 60)).padStart(2, '0');
    const secs = String(typingState.durationSecs % 60).padStart(2, '0');
    
    const timerEl = document.getElementById("typing-timer-display");
    timerEl.innerText = `${mins}:${secs}`;
    timerEl.classList.remove('warning');
    
    document.getElementById("typing-progress-fill").style.width = "100%";
    
    // Setup Split Screen Boxes
    document.getElementById("tcs-reference-box").innerText = typingState.passageText;
    
    const input = document.getElementById("tcs-typing-box");
    input.value = "";
    input.disabled = false;
    
    // Focus the text area immediately
    setTimeout(() => input.focus(), 100);
}

function renderTypingPassage() {
    // Deprecated in TCS iON mode. Logic moved to startTypingTest & setupTypingTest.
}

function focusTypingInput() {
    // Deprecated.
}

function typingTimerTick() {
    typingState.timeRemaining--;
    
    const mins = String(Math.floor(typingState.timeRemaining / 60)).padStart(2, '0');
    const secs = String(typingState.timeRemaining % 60).padStart(2, '0');
    const timerEl = document.getElementById("typing-timer-display");
    timerEl.innerText = `${mins}:${secs}`;

    // Turn amber when 5 mins or less remain
    if (typingState.timeRemaining <= 300) {
        timerEl.classList.add('warning');
    } else {
        timerEl.classList.remove('warning');
    }
    
    const pct = (typingState.timeRemaining / typingState.durationSecs) * 100;
    document.getElementById("typing-progress-fill").style.width = `${pct}%`;
    
    if (typingState.timeRemaining <= 0) {
        finishTypingTest();
    }
}

function finishTypingTest() {
    clearInterval(typingState.timer);
    
    const inputArea = document.getElementById("tcs-typing-box");
    inputArea.disabled = true; // Lock the text box
    const typedString = inputArea.value;
    
    document.getElementById("typing-active-screen").classList.add("hidden");
    document.getElementById("typing-result-screen").classList.remove("hidden");
    
    const totalTyped = typedString.length;
    let correctChars = 0;
    
    // Character by character diff for Accuracy
    for(let i = 0; i < totalTyped; i++) {
        if(typedString[i] === typingState.passageText[i]) correctChars++;
    }
    
    // Word by word diff for Mistake calculation
    const typedWords = typedString.trim().split(/\s+/).filter(w => w.length > 0);
    const refWords = typingState.passageText.split(/\s+/);
    let wordMistakes = 0;
    for(let i = 0; i < typedWords.length; i++) {
        if (typedWords[i] !== refWords[i]) wordMistakes++;
    }
    
    const elapsedMins = Math.max((typingState.durationSecs - typingState.timeRemaining) / 60, 0.01);
    const grossWpm = Math.round((totalTyped / 5) / elapsedMins);
    const netWpm = Math.max(0, Math.round(grossWpm - (wordMistakes / elapsedMins)));
    const acc = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100;
    const mistakePct = typedWords.length > 0 ? ((wordMistakes / typedWords.length) * 100).toFixed(1) : '0.0';
    const netWords = Math.max(0, typedWords.length - wordMistakes);
    
    // Generate Mistake Diff UI
    let diffHtml = "<h4 style='margin-bottom:10px;'>📋 Word-by-Word Review:</h4><p style='font-size:0.85rem; color:var(--text-muted); margin-bottom:14px;'>🔴 struck = what you typed &nbsp;|&nbsp; 🟢 = correct word</p>";
    let hasMistakes = false;
    for(let i = 0; i < refWords.length; i++) {
        if (i < typedWords.length) {
            if (typedWords[i] !== refWords[i]) {
                hasMistakes = true;
                diffHtml += `<span style="background:rgba(239,68,68,0.18); color:#fca5a5; padding:1px 5px; border-radius:4px; text-decoration:line-through; margin:0 2px;">${typedWords[i]}</span>`;
                diffHtml += `<span style="background:rgba(16,185,129,0.18); color:#6ee7b7; padding:1px 5px; border-radius:4px; margin:0 2px;">${refWords[i]}</span> `;
            } else {
                diffHtml += `${refWords[i]} `;
            }
        } else {
            diffHtml += `<span style="color:var(--text-muted); opacity:0.3;">${refWords[i]}</span> `;
        }
    }
    
    const diffContainer = document.getElementById("typing-mistake-display");
    if (diffContainer) {
        diffContainer.innerHTML = diffHtml;
        diffContainer.classList.remove("hidden");
    }
    
    // Populate all result fields
    document.getElementById("result-typing-wpm").innerText = grossWpm;
    document.getElementById("result-typing-acc").innerText = `${acc}%`;
    document.getElementById("result-typing-keys").innerText = totalTyped;
    document.getElementById("result-typing-time").innerText = `${typingState.activeMode}m`;
    if (document.getElementById("result-typing-net-words")) document.getElementById("result-typing-net-words").innerText = netWords;
    if (document.getElementById("result-typing-mistakes")) document.getElementById("result-typing-mistakes").innerText = wordMistakes;
    
    // Verdict badge + feedback
    const feedback = document.getElementById("result-typing-feedback");
    const verdictEl = document.getElementById("result-typing-verdict");
    
    if (typingState.examType === 'EDITORIAL') {
        if (verdictEl) { verdictEl.textContent = '📖 Editorial Complete'; verdictEl.style.cssText = 'background:rgba(99,102,241,0.2); color:#a78bfa; border:1px solid rgba(167,139,250,0.3); margin:8px auto 16px; padding:6px 20px; border-radius:20px; font-size:13px; font-weight:700; display:inline-block;'; }
        feedback.innerHTML = `Speed: <strong>${grossWpm} WPM</strong> &nbsp;|&nbsp; Accuracy: <strong>${acc}%</strong> &nbsp;|&nbsp; Mistakes: <strong>${wordMistakes} words</strong>`;
        feedback.style.color = "var(--primary-light)";
        
        // Save to editorial history
        appState.editorialHistory.push({
            date: new Date().toISOString(),
            wpm: grossWpm,
            acc: acc,
            mistakes: wordMistakes
        });
        saveState();
        renderEditorialView(); // Refresh the list in the background
    } else if (typingState.examType === 'JJA') {
        const passed = grossWpm >= 35 && parseFloat(mistakePct) <= 3.0;
        if (verdictEl) {
            verdictEl.textContent = passed ? '✅ JJA QUALIFIED!' : '❌ Not Qualified Yet';
            verdictEl.style.cssText = `background:${passed ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.12)'}; color:${passed ? '#6ee7b7' : '#fca5a5'}; border:1px solid ${passed ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.25)'}; margin:8px auto 16px; padding:6px 20px; border-radius:20px; font-size:13px; font-weight:700; display:inline-block;`;
        }
        if (passed) {
            feedback.innerHTML = `<strong>JJA Qualified!</strong> Speed: ${grossWpm} WPM ✓ (need 35) | Mistakes: ${mistakePct}% ✓ (max 3%)`;
            feedback.style.color = "var(--success)";
        } else if (grossWpm >= 35) {
            feedback.innerHTML = `Speed OK (${grossWpm} WPM), but word mistakes too high: <strong>${mistakePct}%</strong> (max allowed is 3%). Focus on accuracy!`;
            feedback.style.color = "var(--accent)";
        } else {
            feedback.innerHTML = `Need 35 WPM, you typed <strong>${grossWpm} WPM</strong>. Word mistakes: ${mistakePct}%. Keep practicing daily!`;
            feedback.style.color = "var(--danger)";
        }
    } else { // CGL DEST
        const passed = grossWpm >= 27 && acc >= 95 && typingState.activeMode === 15;
        const goodSpeed = grossWpm >= 27;
        if (verdictEl) {
            verdictEl.textContent = passed ? '✅ CGL DEST READY!' : (goodSpeed ? '⚠️ Almost There' : '📚 Keep Practicing');
            verdictEl.style.cssText = `background:${passed ? 'rgba(16,185,129,0.15)' : goodSpeed ? 'rgba(245,158,11,0.12)' : 'rgba(239,68,68,0.1)'}; color:${passed ? '#6ee7b7' : goodSpeed ? '#fbbf24' : '#fca5a5'}; border:1px solid ${passed ? 'rgba(16,185,129,0.3)' : goodSpeed ? 'rgba(245,158,11,0.25)' : 'rgba(239,68,68,0.2)'}; margin:8px auto 16px; padding:6px 20px; border-radius:20px; font-size:13px; font-weight:700; display:inline-block;`;
        }
        if (passed) {
            feedback.innerText = `Excellent! CGL DEST ready. ${grossWpm} WPM at ${acc}% accuracy. Maintain this consistency!`;
            feedback.style.color = "var(--success)";
        } else if (goodSpeed) {
            feedback.innerText = `Good speed (${grossWpm} WPM), but accuracy is ${acc}% — need 95%+. Slow down slightly and type more carefully.`;
            feedback.style.color = "var(--accent)";
        } else {
            feedback.innerText = `Aim for 27+ WPM. You typed at ${grossWpm} WPM. Try the 1-minute warmup mode daily to build finger memory.`;
            feedback.style.color = "var(--danger)";
        }
    }
}

function quitTypingTest() {
    clearInterval(typingState.timer);
    document.getElementById("typing-active-screen").classList.add("hidden");
    document.getElementById("typing-result-screen").classList.add("hidden");
    
    // Return to correct setup screen
    if (typingState.examType === 'JJA') {
        document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
        const jjaView = document.getElementById("jjatyping-view");
        if (jjaView) {
            jjaView.classList.add("active");
            document.getElementById("jjatyping-setup-screen").classList.remove("hidden");
        }
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        document.querySelector('[data-tab="jjatyping"]').classList.add("active");
        document.getElementById("current-tab-title").innerText = "Delhi HC JJA Typing";
    } else if (typingState.examType === 'EDITORIAL') {
        document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
        const edView = document.getElementById("editorial-view");
        if (edView) {
            edView.classList.add("active");
            document.getElementById("editorial-setup-screen").classList.remove("hidden");
        }
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        document.querySelector('[data-tab="editorial"]').classList.add("active");
        document.getElementById("current-tab-title").innerText = "Daily Editorial";
    } else {
        document.getElementById("typing-setup-screen").classList.remove("hidden");
    }
}

// --- 11. EDITORIAL VIEW ---
function renderEditorialView() {
    const readerBox = document.getElementById("editorial-reader-box");
    if (readerBox) {
        readerBox.innerHTML = `
            <div style="font-family: var(--font-heading); font-size: 1.1rem; line-height: 1.8; color: var(--text-primary); text-align: justify; padding: 10px;">
                ${DAILY_EDITORIAL}
            </div>
        `;
    }

    const historyList = document.getElementById("editorial-history-list");
    if (historyList) {
        const history = appState.editorialHistory || [];
        if (history.length === 0) {
            historyList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">Complete your first Editorial Typing Test to see your history here.</p>`;
        } else {
            // Sort newest first
            const sortedHistory = [...history].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5); // show top 5 recent
            
            historyList.innerHTML = sortedHistory.map(entry => {
                const d = new Date(entry.date);
                const dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
                return `
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-card); padding: 12px; border-radius: 8px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
                        <span style="color: var(--text-muted); font-size: 0.85rem;">${dateStr}</span>
                        <div style="display: flex; gap: 15px;">
                            <span style="color: var(--primary-light); font-weight: 600;">${entry.wpm} WPM</span>
                            <span style="color: ${entry.acc >= 95 ? 'var(--success)' : 'var(--accent)'};">${entry.acc}% Acc</span>
                            <span style="color: ${entry.mistakes === 0 ? 'var(--success)' : 'var(--danger)'};">${entry.mistakes} Mistakes</span>
                        </div>
                    </div>
                `;
            }).join("");
        }
    }
}

// ───────────────────────────────────────────────────────────
// 12. BACKUP & RESTORE DATA
// ───────────────────────────────────────────────────────────
function downloadProgressJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    const dateStr = new Date().toISOString().split('T')[0];
    dlAnchorElem.setAttribute("download", `ssc_cgl_app_backup_${dateStr}.json`);
    dlAnchorElem.click();
}

function uploadProgressJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedState = JSON.parse(e.target.result);
            if (importedState && typeof importedState === 'object') {
                appState = { ...appState, ...importedState };
                saveState();
                alert('✅ Backup restored successfully! Refreshing app...');
                window.location.reload();
            } else {
                alert('❌ Invalid backup file format.');
            }
        } catch (err) {
            alert('❌ Failed to parse backup file.');
            console.error(err);
        }
    };
    reader.readAsText(file);
}


// ───────────────────────────────────────────────────────────
// 13. REASONING DRILLS LOGIC

// ───────────────────────────────────────────────────────────
// 13. REASONING DRILLS LOGIC
// ───────────────────────────────────────────────────────────
let activeReasoningMode = '';
let reasoningState = {
    score: 0,
    questionCount: 0,
    timer: null,
    timeLeft: 300,
    currentQ: null
};

function startReasoningDrill(mode) {
    activeReasoningMode = mode;
    reasoningState.score = 0;
    reasoningState.questionCount = 0;
    reasoningState.timeLeft = 900; // 15 mins - real SSC CGL section time

    document.getElementById('reasoning-select-screen').classList.add('hidden');
    document.getElementById('reasoning-results-screen').classList.add('hidden');
    document.getElementById('reasoning-active-screen').classList.remove('hidden');

    document.getElementById('reasoning-current-score').innerText = '0';
    document.getElementById('reasoning-timer').innerText = '15:00';
    
    clearInterval(reasoningState.timer);
    reasoningState.timer = setInterval(() => {
        reasoningState.timeLeft--;
        if (reasoningState.timeLeft <= 0) {
            endReasoningDrill();
        } else {
            let m = Math.floor(reasoningState.timeLeft / 60);
            let s = reasoningState.timeLeft % 60;
            document.getElementById('reasoning-timer').innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
        }
    }, 1000);

    renderReasoningQuestion();
}

function renderReasoningQuestion() {
    if (reasoningState.questionCount >= 25) {
        endReasoningDrill();
        return;
    }
    
    reasoningState.currentQ = window.getNextReasoningDrill(activeReasoningMode);
    
    document.getElementById('reasoning-q-text').innerHTML = reasoningState.currentQ.question;
    const optsContainer = document.getElementById('reasoning-options');
    optsContainer.innerHTML = '';
    
    reasoningState.currentQ.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'ncert-opt';
        btn.innerHTML = `<span class="ncert-opt-label">${opt}</span>`;
        btn.onclick = () => checkReasoningAnswer(opt, btn);
        optsContainer.appendChild(btn);
    });
    
    document.getElementById('reasoning-explanation').classList.add('hidden');
    document.getElementById('reasoning-next-btn').classList.add('hidden');
}

function checkReasoningAnswer(selectedOpt, btnElement) {
    if (document.getElementById('reasoning-explanation').classList.contains('hidden') === false) return; // already answered

    const isCorrect = selectedOpt === reasoningState.currentQ.answer;
    
    const allOpts = document.getElementById('reasoning-options').children;
    for (let el of allOpts) {
        if (el.innerText === reasoningState.currentQ.answer) {
            el.classList.add('ncert-correct');
        } else if (el === btnElement && !isCorrect) {
            el.classList.add('ncert-wrong');
        }
        el.style.pointerEvents = 'none';
    }

    if (isCorrect) {
        reasoningState.score++;
        document.getElementById('reasoning-current-score').innerText = reasoningState.score;
    }

    reasoningState.questionCount++;
    
    const expEl = document.getElementById('reasoning-explanation');
    expEl.innerHTML = `<strong>Correct Answer:</strong> ${reasoningState.currentQ.answer}<br><br>${reasoningState.currentQ.explanation}`;
    expEl.classList.remove('hidden');
    
    document.getElementById('reasoning-next-btn').classList.remove('hidden');
}

function nextReasoningQ() {
    renderReasoningQuestion();
}

function endReasoningDrill() {
    clearInterval(reasoningState.timer);
    document.getElementById('reasoning-active-screen').classList.add('hidden');
    document.getElementById('reasoning-results-screen').classList.remove('hidden');
    document.getElementById('reasoning-final-score').innerText = reasoningState.score;
    const s = reasoningState.score;
    const msg = document.getElementById('reasoning-result-msg');
    if (msg) {
        if (s >= 23) msg.innerHTML = "🏆 <strong>AIR 1 Standard!</strong> 23+/25 in Reasoning is elite. Maintain this accuracy at full speed.";
        else if (s >= 20) msg.innerHTML = "⚡ <strong>Close, not AIR 1 yet.</strong> Need 23+ consistently. Identify the pattern in questions you're losing.";
        else if (s >= 15) msg.innerHTML = "⚠️ <strong>Danger Zone for AIR 1.</strong> This score will clear the cutoff but won't win the top rank. Zero errors is the goal.";
        else msg.innerHTML = "❌ <strong>Critical weak area.</strong> Reasoning must be a strength for AIR 1. Reattempt immediately and focus on logic pattern recognition.";
    }
}

function quitReasoningDrill() {
    clearInterval(reasoningState.timer);
    document.getElementById('reasoning-active-screen').classList.add('hidden');
    document.getElementById('reasoning-results-screen').classList.add('hidden');
    document.getElementById('reasoning-select-screen').classList.remove('hidden');
}
