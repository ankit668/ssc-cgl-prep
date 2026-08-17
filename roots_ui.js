// Etymology Vault UI Logic
document.addEventListener("DOMContentLoaded", () => {
    const rootsContainer = document.getElementById("roots-container");
    const rootsSearch = document.getElementById("roots-search");

    if (!rootsContainer || typeof ROOT_WORDS === 'undefined') return;

    function renderRoots(roots) {
        rootsContainer.innerHTML = roots.map(root => `
            <div class="topic-card" style="display: flex; flex-direction: column; text-align: left; align-items: flex-start; position: relative; height: auto; min-height: 180px;">
                <div class="vocab-cat-tag" style="position: relative; top: 0; left: 0; margin-bottom: 10px; background: rgba(59, 130, 246, 0.1); color: #3b82f6;">ROOT WORD</div>
                <h3 style="margin-top: 0; font-size: 1.5rem; color: #fff; margin-bottom: 4px;">${root.root}</h3>
                <p style="font-size: 1rem; font-weight: bold; color: #fbbf24; margin-bottom: 12px;">Meaning: ${root.meaning}</p>
                
                <div style="width: 100%; display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
                    ${root.examples.map(ex => `
                        <div style="background: rgba(255, 255, 255, 0.05); padding: 8px; border-radius: 4px;">
                            <strong style="color: #60a5fa;">${ex.word}:</strong> <span style="color: #cbd5e1;">${ex.definition}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    renderRoots(ROOT_WORDS);

    rootsSearch.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = ROOT_WORDS.filter(root => 
            root.root.toLowerCase().includes(query) || 
            root.meaning.toLowerCase().includes(query) ||
            root.examples.some(ex => ex.word.toLowerCase().includes(query))
        );
        renderRoots(filtered);
    });
});

// Inject Root MCQs into the main QUESTIONS_DB
if (typeof ROOT_MCQS !== 'undefined' && typeof QUESTIONS_DB !== 'undefined') {
    QUESTIONS_DB.push(...ROOT_MCQS);
}
