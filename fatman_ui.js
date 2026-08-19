// Fatman Special UI Injector
(function() {
    // 1. Inject the Floating Action Button
    const fab = document.createElement('div');
    fab.innerHTML = `
        <div id="fatman-fab" style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%);
            color: white;
            padding: 12px 20px;
            border-radius: 30px;
            font-family: 'Outfit', sans-serif;
            font-weight: bold;
            font-size: 14px;
            box-shadow: 0 4px 15px rgba(255, 65, 108, 0.4);
            cursor: pointer;
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: transform 0.2s;
        ">
            <span>🔥</span> Fatman Special
        </div>
    `;
    document.body.appendChild(fab);

    // 2. Inject the Modal UI
    const modal = document.createElement('div');
    modal.id = 'fatman-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(15, 23, 42, 0.95);
        z-index: 10000;
        display: none;
        flex-direction: column;
        color: white;
        font-family: 'Inter', sans-serif;
    `;
    modal.innerHTML = `
        <div style="padding: 20px; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; background: #0F172A;">
            <h2 style="margin:0; font-family:'Outfit'; color:#FF4B2B;">🔥 Fatman Module: Geography</h2>
            <button id="fatman-close" style="background:none; border:none; color:white; font-size:24px; cursor:pointer;">&times;</button>
        </div>
        <div style="display:flex; gap: 10px; padding: 15px 20px; background: #1E293B; overflow-x: auto;">
            <button class="fatman-tab active" data-target="fatman-notes" style="padding: 8px 16px; border-radius: 20px; border:none; background:#FF4B2B; color:white; font-weight:bold; cursor:pointer;">📖 Bite-Sized Notes</button>
            <button class="fatman-tab" data-target="fatman-flashcards" style="padding: 8px 16px; border-radius: 20px; border:1px solid #475569; background:transparent; color:white; font-weight:bold; cursor:pointer;">🃏 Flashcards</button>
            <button class="fatman-tab" data-target="fatman-mcqs" style="padding: 8px 16px; border-radius: 20px; border:1px solid #475569; background:transparent; color:white; font-weight:bold; cursor:pointer;">🎯 GS Drills (MCQs)</button>
        </div>
        <div id="fatman-content" style="flex: 1; overflow-y: auto; padding: 20px;">
            <!-- Content injects here -->
        </div>
    `;
    document.body.appendChild(modal);

    // 3. Logic & Events
    document.getElementById('fatman-fab').onclick = () => {
        modal.style.display = 'flex';
        renderFatmanNotes(); // Default view
    };
    document.getElementById('fatman-close').onclick = () => modal.style.display = 'none';

    const tabs = document.querySelectorAll('.fatman-tab');
    tabs.forEach(tab => {
        tab.onclick = (e) => {
            tabs.forEach(t => { t.style.background = 'transparent'; t.style.border = '1px solid #475569'; t.classList.remove('active'); });
            e.target.style.background = '#FF4B2B';
            e.target.style.border = 'none';
            e.target.classList.add('active');
            
            const target = e.target.getAttribute('data-target');
            if (target === 'fatman-notes') renderFatmanNotes();
            if (target === 'fatman-flashcards') renderFatmanFlashcards();
            if (target === 'fatman-mcqs') renderFatmanMCQs();
        };
    });

    function renderFatmanNotes() {
        const content = document.getElementById('fatman-content');
        if(!window.fatmanGeography) {
            content.innerHTML = "<p>Data not found. Did fatman_data.js load?</p>";
            return;
        }
        content.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto; background: #1E293B; padding: 20px; border-radius: 12px; line-height: 1.6;">
                <h1 style="color:#38BDF8; margin-top:0;">${window.fatmanGeography.chapter}</h1>
                ${window.fatmanGeography.notes}
            </div>
        `;
    }

    function renderFatmanFlashcards() {
        const content = document.getElementById('fatman-content');
        const cards = window.fatmanGeography.flashcards;
        let html = '<div style="max-width:600px; margin: 0 auto; text-align:center;">';
        html += '<h3 style="color:#94A3B8; margin-bottom: 20px;">Tap a card to flip it.</h3>';
        
        cards.forEach((c, idx) => {
            html += `
                <div class="fatman-card-container" style="perspective: 1000px; margin-bottom: 20px; height: 150px; cursor: pointer;" onclick="this.querySelector('.fatman-card').classList.toggle('flipped')">
                    <div class="fatman-card" style="width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; position: relative;">
                        <div style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #334155; border-radius: 12px; display:flex; align-items:center; justify-content:center; padding: 20px; box-sizing: border-box; font-size: 18px; border: 1px solid #475569;">
                            ${c.front}
                        </div>
                        <div style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #10B981; color: white; border-radius: 12px; display:flex; align-items:center; justify-content:center; padding: 20px; box-sizing: border-box; font-size: 18px; font-weight: bold; transform: rotateY(180deg);">
                            ${c.back}
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        content.innerHTML = html;
        
        // Add CSS for flip animation
        if(!document.getElementById('fatman-css')) {
            const style = document.createElement('style');
            style.id = 'fatman-css';
            style.textContent = `
                .fatman-card.flipped { transform: rotateY(180deg); }
                #fatman-content ul { padding-left: 20px; }
                #fatman-content li { margin-bottom: 10px; color: #CBD5E1; }
                #fatman-content h3 { color: #F87171; margin-top: 25px; border-bottom: 1px solid #334155; padding-bottom: 8px;}
            `;
            document.head.appendChild(style);
        }
    }

    function renderFatmanMCQs() {
        const content = document.getElementById('fatman-content');
        const mcqs = window.fatmanGeography.mcqs;
        let html = '<div style="max-width:800px; margin: 0 auto;">';
        
        mcqs.forEach((q, qidx) => {
            html += `
                <div style="background: #1E293B; margin-bottom: 20px; padding: 20px; border-radius: 12px; border: 1px solid #334155;">
                    <h3 style="margin-top:0; color:#F1F5F9; font-size: 16px; font-weight:600;">Q${qidx+1}: ${q.question}</h3>
                    <div style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
            `;
            q.options.forEach((opt, optidx) => {
                const isCorrect = (optidx === q.correct);
                html += `
                    <button onclick="this.parentElement.nextElementSibling.style.display='block'; this.style.background='${isCorrect ? '#10B981' : '#EF4444'}'; this.style.color='white';" style="padding: 12px; text-align: left; background: #334155; color: #CBD5E1; border: none; border-radius: 8px; cursor: pointer; transition: 0.2s;">
                        ${String.fromCharCode(65+optidx)}. ${opt}
                    </button>
                `;
            });
            html += `
                    </div>
                    <div style="display:none; margin-top: 15px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10B981; color: #A7F3D0; font-size: 14px; border-radius: 0 8px 8px 0;">
                        <strong>Explanation:</strong> ${q.explanation}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        content.innerHTML = html;
    }
})();
