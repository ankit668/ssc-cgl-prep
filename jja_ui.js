
// ============================================================
//  JJA MAINS UI  —  jja_ui.js
//  Tabs: Essay | Letter | Translation | Legal GK | Typing Test
// ============================================================

(function () {

    // ── helpers ──────────────────────────────────────────────
    function el(id) { return document.getElementById(id); }

    // ── Typing Test State ────────────────────────────────────
    let typingTimer = null;
    let typingStartTime = null;
    let typingRunning = false;
    let typingDuration = 10 * 60; // 10 minutes in seconds
    let typingTimeLeft = typingDuration;
    let currentPassageText = '';
    let typedChars = 0;
    let correctChars = 0;

    // ── Main render ──────────────────────────────────────────
    function renderJJAPanel() {
        const container = el('jja-view');
        if (!container) return;

        container.innerHTML = `
        <div style="padding:0 8px 24px 8px; width:100%; box-sizing:border-box;">
            <div style="text-align:center; margin-bottom:20px;">
                <h2 style="color:#F59E0B; font-size:1.4em; margin:0;">⚖️ JJA Mains Prep Centre</h2>
                <p style="color:#94A3B8; margin:4px 0 0 0; font-size:0.9em;">Delhi High Court · Mains Exam: October 4, 2026</p>
            </div>

            <!-- Tab Bar -->
            <div id="jja-tab-bar" style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:20px; background:#0F172A; padding:8px; border-radius:12px;">
                <button onclick="jjaTab('essay')" id="jja-tab-essay" class="jja-tab-btn jja-active">✍️ Essay</button>
                <button onclick="jjaTab('letter')" id="jja-tab-letter" class="jja-tab-btn">✉️ Letter</button>
                <button onclick="jjaTab('grammar')" id="jja-tab-grammar" class="jja-tab-btn">📝 Grammar</button>
                <button onclick="jjaTab('translation')" id="jja-tab-translation" class="jja-tab-btn">🔄 Translation</button>
                <button onclick="jjaTab('legal')" id="jja-tab-legal" class="jja-tab-btn">⚖️ Legal GK</button>
                <button onclick="jjaTab('typing')" id="jja-tab-typing" class="jja-tab-btn">⌨️ Typing Test</button>
            </div>

            <!-- Content Area -->
            <div id="jja-content"></div>
        </div>

        <style>
        .jja-tab-btn {
            flex:none; padding:10px 18px; border:none; border-radius:8px;
            background:#1E293B; color:#94A3B8; cursor:pointer; font-size:0.85em;
            font-weight:600; transition:all 0.2s; text-align:center; white-space:nowrap;
        }
        .jja-tab-btn.jja-active {
            background:linear-gradient(135deg,#F59E0B,#D97706); color:#000; 
        }
        .jja-tab-btn:hover:not(.jja-active) { background:#334155; color:#E2E8F0; }
        .jja-card {
            background:#1E293B; border-radius:12px; padding:16px; margin-bottom:14px;
            border-left:4px solid #F59E0B;
        }
        .jja-card.legal-card { border-left-color:#A855F7; }
        .jja-card.letter-card { border-left-color:#34D399; }
        .jja-card.trans-card { border-left-color:#38BDF8; }
        .jja-reveal-btn {
            background:#334155; color:#94A3B8; border:1px solid #475569;
            padding:6px 14px; border-radius:6px; cursor:pointer; font-size:0.82em;
            margin-top:10px; margin-right:8px; transition:all 0.2s;
        }
        .jja-reveal-btn:hover { background:#F59E0B; color:#000; border-color:#F59E0B; }
        .jja-hidden { display:none; }
        .jja-badge {
            display:inline-block; padding:2px 8px; border-radius:10px; font-size:0.72em;
            font-weight:700; margin-left:8px;
        }
        .badge-social { background:#1E3A5F; color:#38BDF8; }
        .badge-legal { background:#3B1D6E; color:#A855F7; }
        .badge-tech { background:#064E3B; color:#34D399; }
        .badge-env { background:#1E3A1E; color:#4ADE80; }
        .badge-gov { background:#78350F; color:#FBBF24; }
        .badge-easy { background:#064E3B; color:#34D399; }
        .badge-medium { background:#78350F; color:#FBBF24; }
        .badge-hard { background:#4C0519; color:#F87171; }

        /* Typing Test Styles */
        #jja-typing-display {
            background:#0F172A; border-radius:10px; padding:16px;
            font-size:1.05em; line-height:1.9em; letter-spacing:0.03em;
            font-family:'Courier New', monospace; color:#475569;
            min-height:140px; user-select:none; border:2px solid #1E293B;
        }
        #jja-typing-display span.correct { color:#34D399; }
        #jja-typing-display span.wrong { color:#F87171; background:#4C0519; border-radius:2px; }
        #jja-typing-display span.current { border-bottom:2px solid #F59E0B; color:#E2E8F0; }
        #jja-typing-input {
            width:100%; margin-top:14px; padding:12px 16px; border-radius:8px;
            background:#0F172A; border:2px solid #334155; color:#E2E8F0;
            font-size:1em; font-family:'Courier New', monospace; resize:none;
            outline:none; transition:border-color 0.2s;
            box-sizing: border-box;
        }
        #jja-typing-input:focus { border-color:#F59E0B; }
        #jja-typing-input:disabled { opacity:0.5; cursor:not-allowed; }
        .jja-stat-box {
            background:#0F172A; border-radius:8px; padding:12px; text-align:center;
            border:1px solid #334155;
        }
        .jja-stat-box .stat-val { font-size:1.8em; font-weight:800; color:#F59E0B; display:block; }
        .jja-stat-box .stat-lbl { font-size:0.72em; color:#64748B; text-transform:uppercase; letter-spacing:0.05em; }

        /* Flashcard for Legal GK */
        .jja-flashcard {
            background:#1E293B; border-radius:14px; padding:24px;
            min-height:160px; display:flex; flex-direction:column;
            align-items:center; justify-content:center; text-align:center;
            cursor:pointer; transition:all 0.3s; border:2px solid #334155;
            margin-bottom:12px;
        }
        .jja-flashcard:hover { border-color:#A855F7; }
        .jja-fc-front { font-size:1.1em; font-weight:700; color:#E2E8F0; }
        .jja-fc-back { font-size:0.9em; color:#94A3B8; margin-top:12px; line-height:1.6; display:none; }
        .jja-fc-topic { font-size:0.72em; color:#A855F7; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:8px; }
        </style>
        `;

        // Render essay tab by default
        jjaTab('essay');
    }

    // ── Tab switcher ──────────────────────────────────────────
    window.jjaTab = function (tab) {
        document.querySelectorAll('.jja-tab-btn').forEach(b => b.classList.remove('jja-active'));
        const btn = el('jja-tab-' + tab);
        if (btn) btn.classList.add('jja-active');
        const content = el('jja-content');
        if (!content) return;

        if (tab === 'essay') renderEssays(content);
        else if (tab === 'letter') renderLetters(content);
        else if (tab === 'grammar') renderGrammar(content);
        else if (tab === 'translation') renderTranslations(content);
        else if (tab === 'legal') renderLegalGK(content);
        else if (tab === 'typing') renderTypingTest(content);
    };

    // ── ESSAY TAB ─────────────────────────────────────────────
    function renderEssays(container) {
        if (!window.jjaData || !window.jjaData.essays) {
            container.innerHTML = '<p style="color:#94A3B8; text-align:center; padding:30px;">Essay content loading...</p>';
            return;
        }
        const essays = window.jjaData.essays;
        const catColors = { 'Social Issues': 'badge-social', 'Legal/Constitutional': 'badge-legal', 'Technology': 'badge-tech', 'Environment': 'badge-env', 'Governance': 'badge-gov' };
        const diffColors = { 'Easy': 'badge-easy', 'Medium': 'badge-medium', 'Hard': 'badge-hard' };

        let html = `
        <div style="background:#1C1917; border:2px solid #F59E0B; border-radius:10px; padding:14px; margin-bottom:16px;">
            <b style="color:#F59E0B;">✍️ How to Write the Perfect Essay (Exam Pattern)</b><br>
            <div style="color:#CBD5E1; font-size:0.88em; margin-top:8px; line-height:1.7;">
                <b>Structure:</b> Introduction (30-40 words) → Body Para 1 (80 words) → Body Para 2 (80 words) → Conclusion (40-50 words)<br>
                <b>Tips:</b> Start with a quote or fact. Use headings if needed. End on an optimistic note. Avoid bullet points.
            </div>
        </div>
        `;

        essays.forEach((e, i) => {
            const catClass = catColors[e.category] || 'badge-gov';
            const diffClass = diffColors[e.difficulty] || 'badge-medium';
            const outline = e.outline;
            html += `
            <div class="jja-card">
                <div style="display:flex; align-items:center; flex-wrap:wrap; gap:6px;">
                    <span style="color:#94A3B8; font-size:0.8em; font-weight:700;">${i + 1}.</span>
                    <b style="color:#E2E8F0; flex:1;">${e.topic}</b>
                    <span class="jja-badge ${catClass}">${e.category}</span>
                    <span class="jja-badge ${diffClass}">${e.difficulty}</span>
                </div>
                <div id="outline-${e.id}" class="jja-hidden" style="margin-top:12px; background:#0F172A; padding:12px; border-radius:8px; color:#CBD5E1; font-size:0.88em; line-height:1.7;">
                    <b style="color:#38BDF8;">📋 Outline</b><br>
                    <b>Intro:</b> ${outline.intro}<br><br>
                    <b>Body 1 — ${outline.body1_heading}:</b><br>
                    ${outline.body1_points.map(p => '• ' + p).join('<br>')}<br><br>
                    <b>Body 2 — ${outline.body2_heading}:</b><br>
                    ${outline.body2_points.map(p => '• ' + p).join('<br>')}<br><br>
                    <b>Conclusion:</b> ${outline.conclusion}
                </div>
                <div id="essay-${e.id}" class="jja-hidden" style="margin-top:12px; background:#0F172A; padding:14px; border-radius:8px; color:#CBD5E1; font-size:0.88em; line-height:1.8; white-space:pre-wrap;">${e.modelEssay}</div>
                <div>
                    <button class="jja-reveal-btn" onclick="jjaToggle('outline-${e.id}', this)" data-open="0">📋 Show Outline</button>
                    <button class="jja-reveal-btn" onclick="jjaToggle('essay-${e.id}', this)" data-open="0">📖 Show Model Essay</button>
                </div>
            </div>
            `;
        });

        container.innerHTML = html;
    }

    // ── LETTER TAB ────────────────────────────────────────────
    function renderLetters(container) {
        if (!window.jjaData || !window.jjaData.letters) {
            container.innerHTML = '<p style="color:#94A3B8; text-align:center; padding:30px;">Letter content loading...</p>';
            return;
        }

        let html = `
        <div class="jja-card letter-card" style="margin-bottom:16px;">
            <b style="color:#34D399;">✉️ Standard Formal Letter Format</b>
            <div style="margin-top:10px; background:#0F172A; padding:12px; border-radius:8px; font-size:0.85em; color:#CBD5E1; font-family:'Courier New', monospace; line-height:1.8;">
[Your Name]<br>
[Your Address]<br>
[City, PIN]<br>
<br>
Date: [DD Month YYYY]<br>
<br>
To,<br>
[Designation of Recipient]<br>
[Department / Organisation]<br>
[City]<br>
<br>
Subject: [Brief Subject in Bold]<br>
<br>
Sir/Madam,<br>
<br>
[Para 1 — State the purpose / problem clearly]<br>
<br>
[Para 2 — Details, facts, extent of the problem]<br>
<br>
[Para 3 — Requested action / what you want done]<br>
<br>
Thanking you,<br>
Yours faithfully,<br>
[Your Signature]<br>
[Your Name]
            </div>
        </div>
        `;

        window.jjaData.letters.forEach((l, i) => {
            html += `
            <div class="jja-card letter-card">
                <div style="display:flex; align-items:flex-start; gap:8px;">
                    <span style="color:#94A3B8; font-size:0.8em; font-weight:700; padding-top:2px;">${i + 1}.</span>
                    <div style="flex:1;">
                        <b style="color:#E2E8F0;">${l.prompt}</b>
                        <div style="color:#64748B; font-size:0.8em; margin-top:3px;">To: ${l.addressee}</div>
                    </div>
                </div>
                <div id="letter-${l.id}" class="jja-hidden" style="margin-top:12px; background:#0F172A; padding:14px; border-radius:8px; color:#CBD5E1; font-size:0.85em; line-height:1.9; white-space:pre-wrap; font-family:'Courier New', monospace;">${l.modelAnswer}</div>
                <button class="jja-reveal-btn" onclick="jjaToggle('letter-${l.id}', this)" data-open="0">📖 Show Model Letter</button>
            </div>
            `;
        });
        container.innerHTML = html;
    }

    // ── GRAMMAR TAB ───────────────────────────────────────────
    function renderGrammar(container) {
        if (!window.jjaData || !window.jjaData.grammar) {
            container.innerHTML = '<p style="color:#94A3B8; text-align:center; padding:30px;">Grammar content loading...</p>';
            return;
        }

        let html = `
        <div class="jja-card" style="margin-bottom:16px; border-left-color:#F43F5E;">
            <b style="color:#F43F5E;">📝 Descriptive Grammar Transformations</b>
            <p style="margin-top:6px; font-size:0.85em; color:#94A3B8;">Practicing 'Do as directed' (Voice, Narration, Synthesis). Click to reveal answers and rules.</p>
        </div>
        `;

        window.jjaData.grammar.forEach((g, i) => {
            html += `
            <div class="jja-card" style="border-left-color:#F43F5E;">
                <div style="display:flex; align-items:flex-start; gap:8px;">
                    <span style="color:#94A3B8; font-size:0.8em; font-weight:700; padding-top:2px;">${i + 1}.</span>
                    <div style="flex:1;">
                        <span class="jja-badge" style="background:#4C0519; color:#F43F5E; margin:0 0 8px 0; display:inline-block;">${g.category}</span>
                        <b style="color:#E2E8F0; display:block;">${g.question}</b>
                    </div>
                </div>
                <div id="gram-${g.id}" class="jja-hidden" style="margin-top:12px; background:#0F172A; padding:14px; border-radius:8px; border:1px solid #334155;">
                    <div style="color:#34D399; font-weight:600; font-size:0.95em; margin-bottom:8px;">Ans: ${g.answer}</div>
                    <div style="color:#94A3B8; font-size:0.82em;"><i>Rule: ${g.rule}</i></div>
                </div>
                <button class="jja-reveal-btn" onclick="jjaToggle('gram-${g.id}', this)" data-open="0">👁️ Show Answer</button>
            </div>
            `;
        });

        container.innerHTML = html;
    }

    // ── TRANSLATION TAB ───────────────────────────────────────
    function renderTranslations(container) {
        if (!window.jjaData || !window.jjaData.translations) {
            container.innerHTML = '<p style="color:#94A3B8; text-align:center; padding:30px;">Translation content loading...</p>';
            return;
        }

        let html = `
        <div style="background:#1C1917; border:2px solid #38BDF8; border-radius:10px; padding:14px; margin-bottom:16px;">
            <b style="color:#38BDF8;">🔄 Translation Tips for JJA Mains</b>
            <div style="color:#CBD5E1; font-size:0.88em; margin-top:8px; line-height:1.7;">
                • Read the full passage first before starting to translate.<br>
                • Translate the <b>meaning</b>, not word-for-word.<br>
                • Keep tenses consistent throughout. Pay attention to <b>formal tone</b>.<br>
                • Avoid using Hindi/Hinglish words in your English translation.
            </div>
        </div>
        `;

        window.jjaData.translations.forEach((t, i) => {
            const arrow = t.type === 'Hindi to English' ? 'हिंदी → English' : 'English → हिंदी';
            html += `
            <div class="jja-card trans-card">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
                    <span style="background:#0C4A6E; color:#38BDF8; padding:3px 10px; border-radius:10px; font-size:0.75em; font-weight:700;">${arrow}</span>
                    <span style="background:#1E293B; color:#94A3B8; padding:3px 10px; border-radius:10px; font-size:0.75em;">${t.context}</span>
                </div>
                <div style="background:#0F172A; padding:12px; border-radius:8px; color:#E2E8F0; font-size:0.92em; line-height:1.8; margin-bottom:10px;">${t.sourceText}</div>
                <div style="background:#064E3B; border-radius:6px; padding:8px 12px; color:#94A3B8; font-size:0.8em; margin-bottom:10px;">💡 <b>Tip:</b> ${t.tip}</div>
                <div id="trans-${t.id}" class="jja-hidden" style="background:#0F172A; padding:12px; border-radius:8px; color:#34D399; font-size:0.92em; line-height:1.8; border:1px solid #34D399;">${t.modelTranslation}</div>
                <button class="jja-reveal-btn" onclick="jjaToggle('trans-${t.id}', this)" data-open="0">👁️ Show Translation</button>
            </div>
            `;
        });

        container.innerHTML = html;
    }

    // ── LEGAL GK TAB ──────────────────────────────────────────
    let legalIdx = 0;
    function renderLegalGK(container) {
        if (!window.jjaData || !window.jjaData.legalGK) {
            container.innerHTML = '<p style="color:#94A3B8; text-align:center; padding:30px;">Legal GK content loading...</p>';
            return;
        }
        const cards = window.jjaData.legalGK;
        legalIdx = 0;

        container.innerHTML = `
        <div style="background:linear-gradient(135deg,#3B1D6E,#0F172A); border-left:4px solid #A855F7; padding:12px 16px; border-radius:8px; margin-bottom:16px;">
            <b style="color:#A855F7;">⚖️ Legal GK — Interview Ready!</b><br>
            <span style="color:#94A3B8; font-size:0.85em;">Click any card to reveal the answer. Study these before your interview.</span>
        </div>

        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;" id="jja-legal-filter">
            <button onclick="jjaLegalFilter('')" class="jja-reveal-btn" style="margin:0;">All</button>
            <button onclick="jjaLegalFilter('Court Hierarchy')" class="jja-reveal-btn" style="margin:0;">🏛️ Courts</button>
            <button onclick="jjaLegalFilter('Types of Writs')" class="jja-reveal-btn" style="margin:0;">📜 Writs</button>
            <button onclick="jjaLegalFilter('Legal Terms')" class="jja-reveal-btn" style="margin:0;">⚖️ Terms</button>
            <button onclick="jjaLegalFilter('PIL and Bail')" class="jja-reveal-btn" style="margin:0;">🙋 PIL</button>
            <button onclick="jjaLegalFilter('Constitutional Bodies')" class="jja-reveal-btn" style="margin:0;">🏢 Bodies</button>
            <button onclick="jjaLegalFilter('Fundamental Rights')" class="jja-reveal-btn" style="margin:0;">🔐 FR</button>
        </div>

        <div id="jja-legal-cards">
        ${cards.map((c, i) => `
            <div class="jja-flashcard" id="legal-fc-${i}" data-topic="${c.topic}" onclick="jjaToggleLegal(${i})">
                <div class="jja-fc-topic">${c.topic}</div>
                <div class="jja-fc-front">${c.front}</div>
                <div class="jja-fc-back" id="legal-back-${i}">${c.back}</div>
            </div>
        `).join('')}
        </div>
        `;
    }

    window.jjaLegalFilter = function (topic) {
        const cards = document.querySelectorAll('#jja-legal-cards .jja-flashcard');
        cards.forEach(c => {
            if (!topic || c.dataset.topic === topic) {
                c.style.display = 'flex';
            } else {
                c.style.display = 'none';
            }
        });
    };

    window.jjaToggleLegal = function (i) {
        const back = el('legal-back-' + i);
        if (!back) return;
        const isOpen = back.style.display === 'block';
        back.style.display = isOpen ? 'none' : 'block';
        const card = el('legal-fc-' + i);
        if (card) card.style.borderColor = isOpen ? '#334155' : '#A855F7';
    };

    // ── TYPING TEST TAB ───────────────────────────────────────
    function renderTypingTest(container) {
        const passages = window.jjaData && window.jjaData.typingPassages ? window.jjaData.typingPassages : [];
        const passageOptions = passages.map((p, i) =>
            `<option value="${i}">Passage ${i + 1} — ${p.difficulty}</option>`
        ).join('') || '<option value="0">Legal Passage 1</option>';

        container.innerHTML = `
        <div style="background:#1C1917; border:2px solid #F59E0B; border-radius:10px; padding:14px; margin-bottom:16px;">
            <b style="color:#F59E0B;">⌨️ Typing Test — Rules</b>
            <div style="color:#CBD5E1; font-size:0.85em; margin-top:8px; line-height:1.7;">
                • Duration: <b>10 minutes</b> | Target: <b>35 WPM minimum</b> (aim for 45+ WPM)<br>
                • Type the passage exactly as shown. Case and punctuation matter.<br>
                • Your WPM is calculated as <b>correct characters ÷ 5 ÷ minutes elapsed</b>.
            </div>
        </div>

        <!-- Stats Bar -->
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:10px; margin-bottom:16px;">
            <div class="jja-stat-box"><span class="stat-val" id="jja-wpm">0</span><span class="stat-lbl">WPM</span></div>
            <div class="jja-stat-box"><span class="stat-val" id="jja-acc">100%</span><span class="stat-lbl">Accuracy</span></div>
            <div class="jja-stat-box"><span class="stat-val" id="jja-timer">10:00</span><span class="stat-lbl">Time Left</span></div>
            <div class="jja-stat-box"><span class="stat-val" id="jja-errors">0</span><span class="stat-lbl">Errors</span></div>
        </div>

        <!-- Controls -->
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:14px;">
            <select id="jja-passage-select" onchange="jjaLoadPassage()" style="flex:1; background:#1E293B; color:#E2E8F0; border:1px solid #334155; border-radius:6px; padding:8px 12px; font-size:0.9em;">
                ${passageOptions}
            </select>
            <button onclick="jjaStartTyping()" id="jja-start-btn" style="background:linear-gradient(135deg,#10B981,#059669); color:#fff; border:none; border-radius:8px; padding:10px 20px; font-weight:700; cursor:pointer; font-size:0.9em;">▶ Start</button>
            <button onclick="jjaResetTyping()" style="background:#334155; color:#94A3B8; border:none; border-radius:8px; padding:10px 16px; font-weight:600; cursor:pointer; font-size:0.9em;">↺ Reset</button>
        </div>

        <!-- Passage Display -->
        <div id="jja-typing-display">Click Start to begin the typing test...</div>

        <!-- Input Box -->
        <textarea id="jja-typing-input" rows="4" placeholder="Your typed text will appear here after you click Start..." disabled oninput="jjaProcessTyping()"></textarea>

        <!-- Result -->
        <div id="jja-result" class="jja-hidden" style="margin-top:16px; background:#0F172A; border-radius:10px; padding:20px; text-align:center;">
            <div style="font-size:1.3em; font-weight:800; color:#F59E0B; margin-bottom:12px;">⏱️ Test Complete!</div>
            <div id="jja-result-details" style="color:#CBD5E1; font-size:0.9em; line-height:2;"></div>
        </div>
        `;

        // Load first passage
        if (passages.length > 0) jjaLoadPassage();
    }

    window.jjaLoadPassage = function () {
        const sel = el('jja-passage-select');
        if (!sel || !window.jjaData) return;
        const idx = parseInt(sel.value) || 0;
        const passages = window.jjaData.typingPassages || [];
        if (passages[idx]) {
            currentPassageText = passages[idx].text;
            jjaResetTyping();
        }
    };

    function buildPassageDisplay() {
        const display = el('jja-typing-display');
        if (!display || !currentPassageText) return;
        display.innerHTML = currentPassageText
            .split('')
            .map((ch, i) => `<span id="char-${i}">${ch === '\n' ? '\n' : ch === ' ' ? '&nbsp;' : ch}</span>`)
            .join('');
        // Highlight first char
        const first = el('char-0');
        if (first) first.classList.add('current');
    }

    window.jjaStartTyping = function () {
        if (!currentPassageText) return;
        typingRunning = true;
        typingStartTime = Date.now();
        typingTimeLeft = typingDuration;
        typedChars = 0;
        correctChars = 0;

        buildPassageDisplay();
        const input = el('jja-typing-input');
        input.disabled = false;
        input.value = '';
        input.focus();
        el('jja-result').classList.add('jja-hidden');

        if (typingTimer) clearInterval(typingTimer);
        typingTimer = setInterval(() => {
            typingTimeLeft--;
            updateTimerDisplay();
            updateWPM();
            if (typingTimeLeft <= 0) jjaFinishTyping();
        }, 1000);
    };

    window.jjaResetTyping = function () {
        typingRunning = false;
        if (typingTimer) clearInterval(typingTimer);
        typingTimer = null;
        typingTimeLeft = typingDuration;
        typedChars = 0;
        correctChars = 0;

        const input = el('jja-typing-input');
        if (input) { input.value = ''; input.disabled = true; }
        const display = el('jja-typing-display');
        if (display) display.innerHTML = currentPassageText || 'Select a passage and click Start.';
        if (el('jja-wpm')) el('jja-wpm').textContent = '0';
        if (el('jja-acc')) el('jja-acc').textContent = '100%';
        if (el('jja-timer')) el('jja-timer').textContent = '10:00';
        if (el('jja-errors')) el('jja-errors').textContent = '0';
        const result = el('jja-result');
        if (result) result.classList.add('jja-hidden');
    };

    window.jjaProcessTyping = function () {
        if (!typingRunning) return;
        const input = el('jja-typing-input');
        if (!input) return;
        const typed = input.value;
        typedChars = typed.length;
        correctChars = 0;
        let errors = 0;

        // Update display
        const chars = currentPassageText.split('');
        chars.forEach((ch, i) => {
            const span = el('char-' + i);
            if (!span) return;
            span.className = '';
            if (i < typedChars) {
                if (typed[i] === ch) { span.classList.add('correct'); correctChars++; }
                else { span.classList.add('wrong'); errors++; }
            } else if (i === typedChars) {
                span.classList.add('current');
            }
        });

        if (el('jja-errors')) el('jja-errors').textContent = errors;
        const acc = typedChars > 0 ? Math.round((correctChars / typedChars) * 100) : 100;
        if (el('jja-acc')) el('jja-acc').textContent = acc + '%';
        updateWPM();

        // Auto-finish if complete
        if (typedChars >= currentPassageText.length) jjaFinishTyping();
    };

    function updateTimerDisplay() {
        const m = Math.floor(typingTimeLeft / 60);
        const s = typingTimeLeft % 60;
        if (el('jja-timer')) el('jja-timer').textContent = `${m}:${s.toString().padStart(2, '0')}`;
    }

    function updateWPM() {
        if (!typingStartTime) return;
        const elapsed = (Date.now() - typingStartTime) / 1000 / 60;
        if (elapsed > 0) {
            const wpm = Math.round(correctChars / 5 / elapsed);
            if (el('jja-wpm')) el('jja-wpm').textContent = wpm;
        }
    }

    window.jjaFinishTyping = function () {
        if (!typingRunning) return;
        typingRunning = false;
        if (typingTimer) clearInterval(typingTimer);
        typingTimer = null;

        const input = el('jja-typing-input');
        if (input) input.disabled = true;

        const elapsed = (Date.now() - typingStartTime) / 1000 / 60;
        const wpm = Math.round(correctChars / 5 / elapsed);
        const typed = input ? input.value.length : 0;
        const acc = typed > 0 ? Math.round((correctChars / typed) * 100) : 0;
        const errors = typed - correctChars;
        const passed = wpm >= 35 && acc >= 85;

        const result = el('jja-result');
        const details = el('jja-result-details');
        if (result && details) {
            result.classList.remove('jja-hidden');
            result.style.borderLeft = `4px solid ${passed ? '#34D399' : '#F87171'}`;
            details.innerHTML = `
                <div style="font-size:1.8em; margin-bottom:8px;">${passed ? '✅ PASS' : '❌ Below Threshold'}</div>
                <div>WPM: <b style="color:#F59E0B;">${wpm}</b> (Required: 35)</div>
                <div>Accuracy: <b style="color:#F59E0B;">${acc}%</b></div>
                <div>Correct Characters: <b>${correctChars}</b> | Errors: <b style="color:#F87171;">${errors}</b></div>
                <div style="margin-top:12px; color:${passed ? '#34D399' : '#F87171'}; font-weight:700;">
                    ${passed ? '🎉 Great work! Keep practising to improve your WPM further!' : '⚠️ Practise daily. Aim for 45 WPM to comfortably clear the test.'}
                </div>
            `;
        }
    };

    // ── Toggle helper ─────────────────────────────────────────
    window.jjaToggle = function (id, btn) {
        const el2 = el(id);
        if (!el2) return;
        const isOpen = btn.getAttribute('data-open') === '1';
        el2.classList.toggle('jja-hidden', isOpen);
        btn.setAttribute('data-open', isOpen ? '0' : '1');
        const labels = {
            'outline': ['📋 Show Outline', '📋 Hide Outline'],
            'essay': ['📖 Show Model Essay', '📖 Hide Model Essay'],
            'letter': ['📖 Show Model Letter', '📖 Hide Model Letter'],
            'trans': ['👁️ Show Translation', '👁️ Hide Translation'],
            'gram': ['👁️ Show Answer', '👁️ Hide Answer']
        };
        const prefix = id.split('-')[0];
        if (labels[prefix]) btn.textContent = isOpen ? labels[prefix][0] : labels[prefix][1];
    };

    // ── Expose ONLY — app.js calls this when tab is clicked ──
    window.renderJJAPanel = renderJJAPanel;

})();
