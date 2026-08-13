// Study Notes UI Logic
function renderStudyNotes() {
    const container = document.getElementById('study-cards-container');
    const pills = document.querySelectorAll('#study-subject-pills .pill');
    if (!container) return;

    let activeSub = 'science_physics';
    pills.forEach(p => {
        if (p.classList.contains('active')) {
            activeSub = p.getAttribute('data-val');
        }
    });

    pills.forEach(pill => {
        pill.onclick = (e) => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderStudyNotes();
        };
    });

    container.innerHTML = '';
    const topics = typeof NCERT_NOTES !== 'undefined' ? NCERT_NOTES[activeSub] : [];
    if (!topics || topics.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:30px; color:var(--text-muted);">No notes available for this subject yet.</div>';
        return;
    }

    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'ncert-card';
        card.style.marginBottom = '15px';
        
        let factsHtml = '';
        if (topic.facts && topic.facts.length > 0) {
            factsHtml = '<ul style="margin: 15px 0 0 20px; color: var(--text-color); font-size: 14px; line-height: 1.6;">' +
                topic.facts.map(f => {
                    let formattedFact = f.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    return '<li style="margin-bottom: 8px;">' + formattedFact + '</li>';
                }).join('') +
                '</ul>';
        }

        card.innerHTML = `
            <div class="ncert-card-header" style="cursor: pointer;" onclick="this.nextElementSibling.classList.toggle('hidden')">
                <div class="ncert-card-title">
                    <span class="ncert-topic-tag">${topic.cls}</span>
                    <h4 style="margin: 5px 0 0 0; color: var(--primary-light);">${topic.title}</h4>
                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">${topic.chapter || ''}</div>
                </div>
                <div class="ncert-expand-icon" style="color:var(--text-muted); font-size: 12px;">▼ EXPAND</div>
            </div>
            <div class="ncert-card-body hidden">
                ${factsHtml}
                <div style="margin-top: 15px; text-align: right;">
                    <button class="btn btn-primary btn-sm" onclick="practiceNCERTTopic('${topic.topic_tag}')">Practice MCQs →</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function practiceNCERTTopic(topicTag) {
    document.querySelector('[data-tab=quiz]').click();
    if (typeof setSubjectFilter === 'function') {
        setSubjectFilter('ncert');
    }
}

const style = document.createElement('style');
style.textContent = `
    .ncert-card-body.hidden { display: none; }
    .ncert-card-header { display: flex; justify-content: space-between; align-items: center; padding: 15px; background: var(--bg-card); border-radius: 8px; transition: background 0.2s; border: 1px solid var(--border-card); }
    .ncert-card-header:hover { background: var(--border-card); }
    .ncert-card-body { padding: 0 15px 15px 15px; border: 1px solid var(--border-card); border-top: none; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }
`;
document.head.appendChild(style);
