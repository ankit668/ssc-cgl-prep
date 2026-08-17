// Grammar Vault UI Logic
document.addEventListener("DOMContentLoaded", () => {
    const grammarContainer = document.getElementById("grammar-container");
    const grammarSearch = document.getElementById("grammar-search");

    if (!grammarContainer || typeof GRAMMAR_RULES === 'undefined') return;

    function renderGrammarRules(rules) {
        grammarContainer.innerHTML = rules.map(rule => `
            <div class="topic-card" style="display: flex; flex-direction: column; text-align: left; align-items: flex-start; position: relative; height: auto; min-height: 180px;">
                <div class="vocab-cat-tag" style="position: relative; top: 0; left: 0; margin-bottom: 10px; background: rgba(16, 185, 129, 0.1); color: #10b981;">GRAMMAR RULE</div>
                <h3 style="margin-top: 0; font-size: 1.1rem; color: #fff; margin-bottom: 8px;">${rule.rule_name}</h3>
                <p style="font-size: 0.9rem; color: #cbd5e1; margin-bottom: 12px; line-height: 1.5;">${rule.explanation}</p>
                <div style="width: 100%; display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
                    <div style="background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; padding: 8px; border-radius: 4px;">
                        <strong style="color: #ef4444;">Incorrect:</strong> <span style="color: #cbd5e1;">${rule.incorrect_example}</span>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981; padding: 8px; border-radius: 4px;">
                        <strong style="color: #10b981;">Correct:</strong> <span style="color: #cbd5e1;">${rule.correct_example}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderGrammarRules(GRAMMAR_RULES);

    grammarSearch.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = GRAMMAR_RULES.filter(rule => 
            rule.rule_name.toLowerCase().includes(query) || 
            rule.explanation.toLowerCase().includes(query)
        );
        renderGrammarRules(filtered);
    });
});

// Inject Grammar MCQs into the main QUESTIONS_DB
if (typeof GRAMMAR_MCQS !== 'undefined' && typeof QUESTIONS_DB !== 'undefined') {
    QUESTIONS_DB.push(...GRAMMAR_MCQS);
}
