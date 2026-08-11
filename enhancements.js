
// ═══════════════════════════════════════════════════════════
//  ENHANCEMENT PACK — Sound Engine, Confetti, Analytics, KaTeX, IndexedDB
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────
// 1. SOUND ENGINE (Web Audio API — no external dependency)
// ───────────────────────────────────────────────────────────
let soundEnabled = true;
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}

function playTone(freq, type, duration, volume = 0.3, delay = 0) {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        gain.gain.setValueAtTime(volume, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
    } catch(e) {}
}

const SFX = {
    correct() {
        playTone(523, 'sine', 0.12, 0.25);       // C5
        playTone(659, 'sine', 0.12, 0.25, 0.12); // E5
        playTone(784, 'sine', 0.18, 0.25, 0.24); // G5
    },
    wrong() {
        playTone(220, 'sawtooth', 0.15, 0.2);
        playTone(180, 'sawtooth', 0.2, 0.2, 0.15);
    },
    timerWarning() {
        playTone(880, 'square', 0.08, 0.15);
        playTone(880, 'square', 0.08, 0.15, 0.2);
    },
    victory() {
        const melody = [523, 659, 784, 1047];
        melody.forEach((f, i) => playTone(f, 'sine', 0.2, 0.3, i * 0.15));
    },
    fail() {
        playTone(350, 'sawtooth', 0.2, 0.25);
        playTone(280, 'sawtooth', 0.3, 0.25, 0.2);
    },
    click() {
        playTone(600, 'sine', 0.05, 0.1);
    }
};

function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
    SFX.click();
}

// Hook sounds into quiz answer selection
const _origSelectOption = window.selectOption;
// We'll patch after DOMContentLoaded

// ───────────────────────────────────────────────────────────
// 2. CONFETTI ENGINE
// ───────────────────────────────────────────────────────────
function launchConfetti(duration = 3000) {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    canvas.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const particles = [];
    const colors = ['#7c3aed', '#a78bfa', '#f59e0b', '#fbbf24', '#10b981', '#3b82f6', '#ec4899', '#f97316'];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -10 - Math.random() * 100,
            vx: (Math.random() - 0.5) * 6,
            vy: Math.random() * 4 + 2,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        });
    }

    const startTime = Date.now();

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const elapsed = Date.now() - startTime;
        const fadeStart = duration * 0.7;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // gravity
            p.rotation += p.rotSpeed;
            if (elapsed > fadeStart) {
                p.opacity = Math.max(0, 1 - (elapsed - fadeStart) / (duration * 0.3));
            }

            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
            ctx.restore();
        });

        if (elapsed < duration) {
            requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.display = 'none';
        }
    }
    render();
}

// ───────────────────────────────────────────────────────────
// 3. INDEXEDDB — Detailed Quiz Telemetry
// ───────────────────────────────────────────────────────────
const IDB_NAME = 'SSCCGLPrepDB';
const IDB_VERSION = 1;
let idb = null;

function initIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(IDB_NAME, IDB_VERSION);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('quiz_attempts')) {
                const store = db.createObjectStore('quiz_attempts', { keyPath: 'id', autoIncrement: true });
                store.createIndex('date', 'date', { unique: false });
                store.createIndex('category', 'category', { unique: false });
                store.createIndex('subject', 'subject', { unique: false });
            }
        };
        request.onsuccess = () => { idb = request.result; resolve(idb); };
        request.onerror = () => reject(request.error);
    });
}

function saveQuizAttemptIDB(attempt) {
    if (!idb) return;
    const tx = idb.transaction('quiz_attempts', 'readwrite');
    tx.objectStore('quiz_attempts').add(attempt);
}

function getAllAttemptsIDB() {
    return new Promise((resolve) => {
        if (!idb) { resolve([]); return; }
        const tx = idb.transaction('quiz_attempts', 'readonly');
        const req = tx.objectStore('quiz_attempts').getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
    });
}

// ───────────────────────────────────────────────────────────
// 4. KATEX RENDERER — Auto-render math in questions
// ───────────────────────────────────────────────────────────
function renderMathInElement(el) {
    if (!el || typeof renderMathInElement_KaTeX === 'undefined') return;
    try {
        renderMathInElement_KaTeX(el, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false
        });
    } catch(e) {}
}

// Alias the KaTeX auto-render function
window.addEventListener('load', () => {
    if (window.renderMathInElement) {
        window.renderMathInElement_KaTeX = window.renderMathInElement;
    }
});

// ───────────────────────────────────────────────────────────
// 5. ANALYTICS — Radar + Scatter + Topic Table
// ───────────────────────────────────────────────────────────
async function renderAnalyticsTab() {
    // Summary stats from appState
    const history = appState.quizHistory || [];
    const totalAttempted = appState.solvedCount || 0;
    const totalCorrect = appState.correctCount || 0;
    const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
    const bestScore = history.length > 0 ? Math.max(...history.map(h => h.pct)) : 0;

    document.getElementById('ast-total-attempted').textContent = totalAttempted;
    document.getElementById('ast-overall-accuracy').textContent = accuracy + '%';
    document.getElementById('ast-quizzes-taken').textContent = history.length;
    document.getElementById('ast-best-score').textContent = bestScore + '%';

    // Get detailed attempts from IDB
    const attempts = await getAllAttemptsIDB();

    // Build topic accuracy map
    const topicMap = {}; // topic -> { correct, total }
    attempts.forEach(attempt => {
        if (!attempt.questions) return;
        attempt.questions.forEach((q, i) => {
            const topic = q.topic || 'general';
            if (!topicMap[topic]) topicMap[topic] = { correct: 0, total: 0 };
            topicMap[topic].total++;
            if (attempt.userAnswers && attempt.userAnswers[i] === q.answer) {
                topicMap[topic].correct++;
            }
        });
    });

    drawRadarChart(topicMap);
    drawScatterChart(attempts);
    renderTopicTable(topicMap);
}

function drawRadarChart(topicMap) {
    const canvas = document.getElementById('radar-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;
    const R = Math.min(W, H) * 0.38;

    ctx.clearRect(0, 0, W, H);

    const topics = Object.keys(topicMap).slice(0, 8); // max 8 axes
    if (topics.length < 3) {
        ctx.fillStyle = '#a78bfa';
        ctx.font = '14px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Complete more quizzes to', cx, cy - 10);
        ctx.fillText('see your radar chart!', cx, cy + 14);
        return;
    }

    const n = topics.length;
    const angleStep = (Math.PI * 2) / n;

    // Draw background rings
    [0.2, 0.4, 0.6, 0.8, 1.0].forEach(scale => {
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = cx + R * scale * Math.cos(angle);
            const y = cy + R * scale * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(124,58,237,0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
    });

    // Draw axis lines
    topics.forEach((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
        ctx.strokeStyle = 'rgba(124,58,237,0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
    });

    // Draw data polygon
    ctx.beginPath();
    topics.forEach((topic, i) => {
        const data = topicMap[topic];
        const pct = data.total > 0 ? data.correct / data.total : 0;
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + R * pct * Math.cos(angle);
        const y = cy + R * pct * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(124,58,237,0.25)';
    ctx.fill();
    ctx.strokeStyle = '#a78bfa';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw data points
    topics.forEach((topic, i) => {
        const data = topicMap[topic];
        const pct = data.total > 0 ? data.correct / data.total : 0;
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + R * pct * Math.cos(angle);
        const y = cy + R * pct * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
    });

    // Draw topic labels
    ctx.font = '11px Inter';
    ctx.fillStyle = '#e2e8f0';
    ctx.textAlign = 'center';
    topics.forEach((topic, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const labelR = R + 22;
        const x = cx + labelR * Math.cos(angle);
        const y = cy + labelR * Math.sin(angle);
        const label = (TOPIC_LABELS[topic] || topic).replace(/[📊⚖️🏛️🌏💹🔬📰🎭🌿🌍📚✏️📖💬🔧🧩📝🔗🔢💻👨‍👩‍👧🦭➕🔵📄💭🧩🧠⏱️🚂🏦🔣📐📏📈🧪💰] /g, '').slice(0, 12);
        ctx.fillText(label, x, y + 4);
    });
}

function drawScatterChart(attempts) {
    const canvas = document.getElementById('scatter-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const PAD = 40;

    ctx.clearRect(0, 0, W, H);

    // Collect all question data points
    const points = [];
    const avgTimeSecs = 48; // 20 min / 25 questions

    attempts.forEach(attempt => {
        if (!attempt.questions || !attempt.questionTimes) return;
        attempt.questions.forEach((q, i) => {
            const timeSecs = attempt.questionTimes[i] || 0;
            const isCorrect = attempt.userAnswers && attempt.userAnswers[i] === q.answer;
            if (timeSecs > 0) points.push({ t: timeSecs, correct: isCorrect });
        });
    });

    // Draw axes
    ctx.strokeStyle = 'rgba(167,139,250,0.4)';
    ctx.lineWidth = 1;
    // X axis
    ctx.beginPath();
    ctx.moveTo(PAD, H - PAD);
    ctx.lineTo(W - PAD, H - PAD);
    ctx.stroke();
    // Y axis
    ctx.beginPath();
    ctx.moveTo(PAD, PAD);
    ctx.lineTo(PAD, H - PAD);
    ctx.stroke();

    // Midpoint lines
    const midX = (PAD + W - PAD) / 2;
    const midY = (PAD + H - PAD) / 2;
    ctx.strokeStyle = 'rgba(167,139,250,0.2)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(midX, PAD); ctx.lineTo(midX, H - PAD); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(PAD, midY); ctx.lineTo(W - PAD, midY); ctx.stroke();
    ctx.setLineDash([]);

    // Quadrant labels
    ctx.font = '10px Inter';
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.textAlign = 'center';
    ctx.fillText('Fast & Accurate', (PAD + midX) / 2, PAD + 12);
    ctx.fillText('Time Sink', (midX + W - PAD) / 2, PAD + 12);
    ctx.fillText('Blind Guess', (PAD + midX) / 2, H - PAD - 4);
    ctx.fillText('Hard Miss', (midX + W - PAD) / 2, H - PAD - 4);

    // Axis labels
    ctx.fillStyle = 'rgba(167,139,250,0.7)';
    ctx.fillText('Time →', W - PAD, H - PAD + 16);

    if (points.length === 0) {
        ctx.fillStyle = '#a78bfa';
        ctx.font = '13px Inter';
        ctx.fillText('No detailed data yet.', W / 2, H / 2 - 8);
        ctx.fillText('Data collects as you take quizzes.', W / 2, H / 2 + 12);
        return;
    }

    // Scale: max time = 120s
    const maxT = Math.min(120, Math.max(...points.map(p => p.t)));
    const chartW = W - 2 * PAD;
    const chartH = H - 2 * PAD;

    const COLORS = {
        fastAccurate: '#10b981',
        timeSink: '#3b82f6',
        blindGuess: '#f59e0b',
        hardMiss: '#ef4444'
    };

    points.forEach(p => {
        const x = PAD + Math.min(1, p.t / maxT) * chartW;
        // Y: correct = top half, wrong = bottom half + jitter
        const baseY = p.correct ? PAD + chartH * 0.25 : PAD + chartH * 0.75;
        const y = baseY + (Math.random() - 0.5) * chartH * 0.2;

        // Determine quadrant color
        const isFast = p.t < avgTimeSecs;
        let color;
        if (p.correct && isFast) color = COLORS.fastAccurate;
        else if (p.correct && !isFast) color = COLORS.timeSink;
        else if (!p.correct && isFast) color = COLORS.blindGuess;
        else color = COLORS.hardMiss;

        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;
    });
}

function renderTopicTable(topicMap) {
    const container = document.getElementById('topic-breakdown-table');
    if (!container) return;

    const rows = Object.entries(topicMap)
        .map(([topic, data]) => ({
            topic,
            label: (TOPIC_LABELS[topic] || topic).replace(/[\u{1F000}-\u{1FFFF}]/gu, '').trim(),
            correct: data.correct,
            total: data.total,
            pct: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
        }))
        .sort((a, b) => b.pct - a.pct);

    if (rows.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:20px;">Complete some quizzes to see your topic breakdown here!</p>`;
        return;
    }

    container.innerHTML = `
        <table style="width:100%; border-collapse:collapse; font-size:0.88rem;">
            <thead>
                <tr style="color:var(--text-muted); border-bottom: 1px solid var(--border-card);">
                    <th style="text-align:left; padding:8px 4px;">Topic</th>
                    <th style="text-align:center; padding:8px 4px;">Score</th>
                    <th style="text-align:left; padding:8px 4px; min-width:100px;">Accuracy</th>
                </tr>
            </thead>
            <tbody>
                ${rows.map(r => `
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <td style="padding:8px 4px; color:var(--text-primary);">${r.label}</td>
                        <td style="text-align:center; padding:8px 4px; color:var(--text-muted);">${r.correct}/${r.total}</td>
                        <td style="padding:8px 4px;">
                            <div style="display:flex; align-items:center; gap:8px;">
                                <div style="flex:1; height:6px; background:rgba(255,255,255,0.08); border-radius:3px;">
                                    <div style="width:${r.pct}%; height:100%; background:${r.pct >= 70 ? '#10b981' : r.pct >= 40 ? '#f59e0b' : '#ef4444'}; border-radius:3px;"></div>
                                </div>
                                <span style="color:${r.pct >= 70 ? '#10b981' : r.pct >= 40 ? '#f59e0b' : '#ef4444'}; font-weight:600; min-width:34px;">${r.pct}%</span>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// ───────────────────────────────────────────────────────────
// 6. HOOK INTO finishQuiz — Add sounds, confetti, IDB save
// ───────────────────────────────────────────────────────────
const _origFinishQuiz = window.finishQuiz;
// We'll monkey-patch in DOMContentLoaded

function patchFinishQuiz() {
    const originalFinish = typeof finishQuiz === 'function' ? finishQuiz : null;
    if (!originalFinish) return; // finishQuiz not available, skip patch
    window.finishQuiz = function() {
        originalFinish();

        // Re-read score from DOM (already rendered by originalFinish)
        const pctText = document.getElementById('result-accuracy-pct')?.innerText || '0%';
        const pct = parseInt(pctText);

        if (pct >= 60) {
            SFX.victory();
            setTimeout(() => launchConfetti(4000), 300);
        } else {
            SFX.fail();
        }

        // Save detailed attempt to IDB
        saveQuizAttemptIDB({
            date: new Date().toISOString(),
            category: activeQuiz.category,
            subject: activeQuiz.questions[0]?.subject || 'maths',
            score: activeQuiz.score,
            total: activeQuiz.questions.length,
            pct: pct,
            questions: activeQuiz.questions,
            userAnswers: [...activeQuiz.userAnswers],
            questionTimes: activeQuiz.questionTimes ? [...activeQuiz.questionTimes] : []
        });
    };
}

// ───────────────────────────────────────────────────────────
// 7. PATCH selectOption for sound feedback
// ───────────────────────────────────────────────────────────
function patchSelectOption() {
    const origSelect = window.selectOption;
    if (!origSelect) return;
    window.selectOption = function(index) {
        origSelect(index);
        // Play sound based on correctness
        const q = activeQuiz.questions[activeQuiz.currentIndex];
        if (q) {
            if (index === q.answer) {
                SFX.correct();
            } else {
                SFX.wrong();
            }
        }
    };
}

// ───────────────────────────────────────────────────────────
// 8. PATCH renderQuestion for KaTeX rendering
// ───────────────────────────────────────────────────────────
function patchRenderQuestion() {
    const origRender = window.renderQuestion;
    if (!origRender) return;
    window.renderQuestion = function() {
        origRender();
        // Auto-render KaTeX in the question and options
        const qEl = document.getElementById('quiz-question-text');
        const optsEl = document.getElementById('quiz-options-container');
        if (qEl && typeof renderMathInElement_KaTeX === 'function') {
            renderMathInElement_KaTeX(qEl, { delimiters: [{ left: '$', right: '$', display: false }], throwOnError: false });
            if (optsEl) renderMathInElement_KaTeX(optsEl, { delimiters: [{ left: '$', right: '$', display: false }], throwOnError: false });
        }
    };
}

// ───────────────────────────────────────────────────────────
// 9. INIT on DOMContentLoaded
// ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Init IndexedDB
    initIndexedDB().catch(() => {});

    // Patch functions after DOM + app.js is ready
    setTimeout(() => {
        patchFinishQuiz();
        patchSelectOption();
        patchRenderQuestion();
    }, 500);

    // Wire Analytics tab
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.tab === 'analytics') {
                renderAnalyticsTab();
            }
        });
    });
});

// ───────────────────────────────────────────────────────────
// 10. EDUQUITY (TCS iON) INTERFACE LOGIC
// ───────────────────────────────────────────────────────────

// Extend activeQuiz state
// status: 0=Not Visited, 1=Not Answered, 2=Answered, 3=Marked, 4=Ans+Marked
const STATUS_NOT_VISITED = 0;
const STATUS_NOT_ANSWERED = 1;
const STATUS_ANSWERED = 2;
const STATUS_MARKED = 3;
const STATUS_ANS_MARKED = 4;

function initEduqityState() {
    activeQuiz.qStatus = new Array(activeQuiz.questions.length).fill(STATUS_NOT_VISITED);
    activeQuiz.qStatus[0] = STATUS_NOT_ANSWERED; // First question visited immediately
    renderEduqityPalette();
}

function renderEduqityPalette() {
    const grid = document.getElementById('question-palette-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    let counts = [0, 0, 0, 0, 0];
    
    activeQuiz.qStatus.forEach((status, idx) => {
        counts[status]++;
        const btn = document.createElement('div');
        btn.className = 'badge q-badge';
        btn.innerText = idx + 1;
        
        if (status === STATUS_NOT_VISITED) btn.classList.add('badge-not-visited');
        else if (status === STATUS_NOT_ANSWERED) btn.classList.add('badge-not-answered');
        else if (status === STATUS_ANSWERED) btn.classList.add('badge-answered');
        else if (status === STATUS_MARKED) btn.classList.add('badge-marked');
        else if (status === STATUS_ANS_MARKED) btn.classList.add('badge-ans-marked');
        
        // Highlight current question
        if (idx === activeQuiz.currentIndex) {
            btn.style.boxShadow = '0 0 0 2px white, 0 0 0 4px #3b82f6';
        }
        
        btn.onclick = () => {
            jumpToQuestion(idx);
        };
        grid.appendChild(btn);
    });
    
    document.getElementById('count-not-visited').innerText = counts[STATUS_NOT_VISITED];
    document.getElementById('count-not-answered').innerText = counts[STATUS_NOT_ANSWERED];
    document.getElementById('count-answered').innerText = counts[STATUS_ANSWERED];
    document.getElementById('count-marked').innerText = counts[STATUS_MARKED];
    document.getElementById('count-ans-marked').innerText = counts[STATUS_ANS_MARKED];
}

function jumpToQuestion(index) {
    // Save current state if navigating away without explicit save
    // TCS iON generally preserves selected radio buttons if you just click away, 
    // but the status depends on if it was explicitly "Saved". 
    // We'll keep it simple: if they selected something but didn't click save, 
    // it stays as "Not Answered" but retains the radio selection in memory, 
    // or we can auto-save. Standard is NOT to auto-save.
    // Actually, in TCS, if you click another number, your current choice is NOT saved unless you hit Save & Next.
    
    // For simplicity, we just navigate.
    activeQuiz.currentIndex = index;
    if (activeQuiz.qStatus[index] === STATUS_NOT_VISITED) {
        activeQuiz.qStatus[index] = STATUS_NOT_ANSWERED;
    }
    loadQuestion();
    renderEduqityPalette();
}

function handleSaveAndNext() {
    const idx = activeQuiz.currentIndex;
    if (activeQuiz.userAnswers[idx] !== null) {
        activeQuiz.qStatus[idx] = STATUS_ANSWERED;
    } else {
        activeQuiz.qStatus[idx] = STATUS_NOT_ANSWERED;
    }
    
    if (idx < activeQuiz.questions.length - 1) {
        jumpToQuestion(idx + 1);
    } else {
        renderEduqityPalette();
    }
}

function handleMarkAndNext() {
    const idx = activeQuiz.currentIndex;
    if (activeQuiz.userAnswers[idx] !== null) {
        activeQuiz.qStatus[idx] = STATUS_ANS_MARKED;
    } else {
        activeQuiz.qStatus[idx] = STATUS_MARKED;
    }
    
    if (idx < activeQuiz.questions.length - 1) {
        jumpToQuestion(idx + 1);
    } else {
        renderEduqityPalette();
    }
}

function handleClearResponse() {
    const idx = activeQuiz.currentIndex;
    activeQuiz.userAnswers[idx] = null;
    activeQuiz.qStatus[idx] = STATUS_NOT_ANSWERED;
    
    // Deselect radio buttons in UI
    document.querySelectorAll('input[name="quiz-option"]').forEach(r => r.checked = false);
    document.querySelectorAll('.option-label').forEach(el => el.classList.remove('selected'));
    
    renderEduqityPalette();
}

// Hook into existing startQuiz to init palette
const _origStartQuizByShift = window.startQuizByShift;
if (_origStartQuizByShift) {
    window.startQuizByShift = function(y, s) {
        _origStartQuizByShift(y, s);
        initEduqityState();
        
        // Hide solution container during actual exam mode
        const solContainer = document.getElementById('quiz-solution-container');
        if (solContainer) solContainer.style.display = 'none';
    };
}

// Hook into loadQuestion to update Question Num display
const _origLoadQuestion = window.loadQuestion;
if (_origLoadQuestion) {
    window.loadQuestion = function() {
        _origLoadQuestion();
        document.getElementById('quiz-current-num').innerText = activeQuiz.currentIndex + 1;
        renderEduqityPalette(); // Ensure highlight updates
    };
}

// Hook buttons on DOM load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('btn-save-next')?.addEventListener('click', handleSaveAndNext);
        document.getElementById('btn-mark-review')?.addEventListener('click', handleMarkAndNext);
        document.getElementById('btn-clear-response')?.addEventListener('click', handleClearResponse);
        document.getElementById('btn-submit-exam')?.addEventListener('click', () => {
            if (confirm('Are you sure you want to submit the exam?')) {
                finishQuiz();
            }
        });
    }, 1000);
});
