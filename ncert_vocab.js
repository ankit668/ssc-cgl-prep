
// ───────────────────────────────────────────────────────────
// 11. NCERT GA VAULT
// ───────────────────────────────────────────────────────────
let ncertFilters = { subject: 'all', cls: 'all' };

function renderNCERTVault() {
    const data = typeof NCERT_QS !== 'undefined' ? NCERT_QS : [];
    const filtered = data.filter(q =>
        (ncertFilters.subject === 'all' || q.subject === ncertFilters.subject) &&
        (ncertFilters.cls === 'all' || q.cls === ncertFilters.cls)
    );

    const countEl = document.getElementById('ncert-question-count');
    if (countEl) countEl.innerText = `Showing ${filtered.length} of ${data.length} questions`;

    const container = document.getElementById('ncert-cards-container');
    if (!container) return;
    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:40px;">No questions match the selected filters.</p>`;
        return;
    }

    filtered.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'ncert-card';
        card.innerHTML = `
            <div class="ncert-card-header">
                <span class="ncert-tag">${q.subject}</span>
                <span class="ncert-tag ncert-tag-cls">${q.cls}</span>
                <span style="font-size:11px;color:var(--text-muted);">${q.topic}</span>
            </div>
            <div class="ncert-question">Q${idx + 1}. ${q.q}</div>
            <div class="ncert-options" id="ncert-opts-${q.id}">
                ${q.opts.map((opt, i) => `
                    <div class="ncert-opt" id="ncert-opt-${q.id}-${i}" onclick="selectNCERTAnswer('${q.id}', ${i}, ${q.ans})">
                        <span class="ncert-opt-label">${String.fromCharCode(65+i)}.</span>
                        <span>${opt}</span>
                    </div>`).join('')}
            </div>
            <div class="ncert-explanation hidden" id="ncert-exp-${q.id}">
                <strong>&#128161; Explanation:</strong> ${q.exp}
            </div>`;
        container.appendChild(card);
    });
}

function selectNCERTAnswer(qId, selectedIdx, correctIdx) {
    const opts = document.querySelectorAll(`#ncert-opts-${qId} .ncert-opt`);
    opts.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === correctIdx) opt.classList.add('ncert-correct');
        else if (i === selectedIdx) opt.classList.add('ncert-wrong');
    });
    const expEl = document.getElementById(`ncert-exp-${qId}`);
    if (expEl) expEl.classList.remove('hidden');
}

function initNCERTFilters() {
    document.querySelectorAll('[data-filter]').forEach(pill => {
        pill.addEventListener('click', () => {
            const filterType = pill.dataset.filter;
            const val = pill.dataset.val;
            ncertFilters[filterType] = val;
            document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderNCERTVault();
        });
    });
}

// ───────────────────────────────────────────────────────────
// 12. VOCAB FLASHCARD VAULT (3D Flip)
// ───────────────────────────────────────────────────────────
let activeVocabCat = 'all';

function renderVocabCards() {
    const data = typeof VOCAB_DATA !== 'undefined' ? VOCAB_DATA : [];
    const filtered = activeVocabCat === 'all' ? data : data.filter(v => v.cat === activeVocabCat);

    const countEl = document.getElementById('vocab-card-count');
    if (countEl) countEl.innerText = `${filtered.length} cards`;

    const container = document.getElementById('vocab-cards-container');
    if (!container) return;
    container.innerHTML = '';

    filtered.forEach((v, idx) => {
        const card = document.createElement('div');
        card.className = 'vocab-flip-wrapper';
        card.innerHTML = `
            <div class="vocab-flip-inner" id="vcard-${idx}">
                <div class="vocab-front">
                    <div class="vocab-cat-tag">${v.cat === 'ows' ? 'One-Word Sub' : v.cat === 'idioms' ? 'Idiom/Phrase' : 'Spelling'}</div>
                    <div class="vocab-front-text">${v.front}</div>
                    <div class="vocab-flip-hint">&#128070; Tap to reveal answer</div>
                </div>
                <div class="vocab-back">
                    <div class="vocab-answer">${v.back}</div>
                    <div class="vocab-example">&#128221; ${v.ex}</div>
                </div>
            </div>`;
        card.addEventListener('click', () => {
            const inner = document.getElementById(`vcard-${idx}`);
            inner.classList.toggle('flipped');
        });
        container.appendChild(card);
    });
}

function initVocabFilters() {
    document.querySelectorAll('[data-vocab-cat]').forEach(pill => {
        pill.addEventListener('click', () => {
            activeVocabCat = pill.dataset.vocabCat;
            document.querySelectorAll('[data-vocab-cat]').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderVocabCards();
        });
    });
}

// Wire NCERT + Vocab to nav tab clicks
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initNCERTFilters();
        initVocabFilters();
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.dataset.tab === 'ncert') renderNCERTVault();
                if (btn.dataset.tab === 'vocab') renderVocabCards();
            });
        });
    }, 700);
});
