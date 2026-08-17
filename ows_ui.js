// One Word Substitution Vault UI Logic
document.addEventListener("DOMContentLoaded", () => {
    const owsContainer = document.getElementById("ows-container");
    const owsSearch = document.getElementById("ows-search");

    if (!owsContainer || typeof OWS_DATA === 'undefined') return;

    function renderOWS(data) {
        if(data.length === 0) {
            owsContainer.innerHTML = "<p style='color: #cbd5e1; text-align: center; width: 100%;'>No results found.</p>";
            return;
        }

        let html = "";
        data.forEach(category => {
            if(category.words.length === 0) return;
            html += `
                <div class="ows-category-section">
                    <h2 style="color: #fff; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">${category.category}</h2>
                    <div class="vocab-grid">
                        ${category.words.map(w => `
                            <div class="topic-card" style="display: flex; flex-direction: column; text-align: left; align-items: flex-start; position: relative; height: auto; min-height: 150px;">
                                <div class="vocab-cat-tag" style="position: relative; top: 0; left: 0; margin-bottom: 10px; background: rgba(168, 85, 247, 0.1); color: #a855f7;">ONE WORD SUB</div>
                                <h3 style="margin-top: 0; font-size: 1.4rem; color: #fff; margin-bottom: 4px;">${w.word}</h3>
                                <p style="font-size: 0.95rem; font-weight: bold; color: #fbbf24; margin-bottom: 8px;">${w.meaning}</p>
                                <p style="font-size: 0.8rem; color: #cbd5e1; font-style: italic;">${w.etymology}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        owsContainer.innerHTML = html;
    }

    renderOWS(OWS_DATA);

    owsSearch.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        
        // Filter the deeply nested data
        const filtered = OWS_DATA.map(category => {
            // Check if the category name matches
            if(category.category.toLowerCase().includes(query)) {
                return category; // return all words in this category
            }
            
            // Otherwise, filter the words inside the category
            const filteredWords = category.words.filter(w => 
                w.word.toLowerCase().includes(query) || 
                w.meaning.toLowerCase().includes(query) ||
                (w.etymology && w.etymology.toLowerCase().includes(query))
            );
            
            return {
                category: category.category,
                words: filteredWords
            };
        }).filter(category => category.words.length > 0);

        renderOWS(filtered);
    });
});

// Inject OWS MCQs into the main QUESTIONS_DB
if (typeof OWS_MCQS !== 'undefined' && typeof QUESTIONS_DB !== 'undefined') {
    QUESTIONS_DB.push(...OWS_MCQS);
}
