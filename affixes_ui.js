// Affixes Vault UI Logic
document.addEventListener("DOMContentLoaded", () => {
    const affixesContainer = document.getElementById("affixes-container");
    const affixesSearch = document.getElementById("affixes-search");

    if (!affixesContainer || typeof AFFIXES_DATA === 'undefined') return;

    function renderAffixes(data) {
        if(data.length === 0) {
            affixesContainer.innerHTML = "<p style='color: #cbd5e1; text-align: center; width: 100%;'>No results found.</p>";
            return;
        }

        let html = "";
        data.forEach(category => {
            if(category.affixes.length === 0) return;
            html += `
                <div class="ows-category-section">
                    <h2 style="color: #fff; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">${category.category}</h2>
                    <div class="vocab-grid">
                        ${category.affixes.map(a => `
                            <div class="topic-card" style="display: flex; flex-direction: column; text-align: left; align-items: flex-start; position: relative; height: auto; min-height: 150px;">
                                <div class="vocab-cat-tag" style="position: relative; top: 0; left: 0; margin-bottom: 10px; background: rgba(245, 158, 11, 0.1); color: #f59e0b;">PREFIX / SUFFIX</div>
                                <h3 style="margin-top: 0; font-size: 1.4rem; color: #fff; margin-bottom: 4px;">${a.affix}</h3>
                                <p style="font-size: 0.95rem; font-weight: bold; color: #10b981; margin-bottom: 8px;">Meaning: ${a.meaning}</p>
                                <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 8px;"><strong>Examples:</strong> ${a.examples}</p>
                                ${a.usage ? `<p style="font-size: 0.8rem; color: #94a3b8; font-style: italic;">Note: ${a.usage}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        affixesContainer.innerHTML = html;
    }

    renderAffixes(AFFIXES_DATA);

    affixesSearch.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        
        const filtered = AFFIXES_DATA.map(category => {
            if(category.category.toLowerCase().includes(query)) {
                return category;
            }
            
            const filteredAffixes = category.affixes.filter(a => 
                a.affix.toLowerCase().includes(query) || 
                a.meaning.toLowerCase().includes(query) ||
                a.examples.toLowerCase().includes(query)
            );
            
            return {
                category: category.category,
                affixes: filteredAffixes
            };
        }).filter(category => category.affixes.length > 0);

        renderAffixes(filtered);
    });
});

// Inject Affixes MCQs into the main QUESTIONS_DB
if (typeof AFFIXES_MCQS !== 'undefined' && typeof QUESTIONS_DB !== 'undefined') {
    QUESTIONS_DB.push(...AFFIXES_MCQS);
}
