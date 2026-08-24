
window.currentFatmanSubject = "geography";
window.getFatmanData = function() {
    return window.currentFatmanSubject === "history" ? window.fatmanHistory : window.fatmanGeography;
};
window.switchFatmanSubject = function(subject) {
window.currentFatmanSubject = subject;
window.currentFatmanTopic = 'All'; // Reset topic filter

const timelineBtn = document.getElementById('fatman-tab-timeline');
if (timelineBtn) {
    if (subject === 'history') {
        timelineBtn.style.display = 'inline-block';
    } else {
        timelineBtn.style.display = 'none';
        if (timelineBtn.classList.contains('active')) {
            timelineBtn.classList.remove('active');
            document.querySelector('.fatman-tab[data-target="fatman-notes"]').classList.add('active');
        }
    }
}

// Re-render the current tab
const tabs = document.querySelectorAll('.fatman-tab');
let activeTarget = 'fatman-notes';
tabs.forEach(t => { if(t.classList.contains('active')) activeTarget = t.getAttribute('data-target'); });
if (activeTarget === 'fatman-notes') { if(typeof window.renderFatmanNotes === 'function') window.renderFatmanNotes(); }
if (activeTarget === 'fatman-flashcards') { if(typeof window.renderFatmanFlashcards === 'function') window.renderFatmanFlashcards(); }
if (activeTarget === 'fatman-mcqs') { if(typeof window.renderFatmanMCQMenu === 'function') window.renderFatmanMCQMenu(); }
if (activeTarget === 'fatman-timeline') { if(typeof window.renderFatmanTimeline === 'function') window.renderFatmanTimeline(); }
};
// Fatman Special UI Injector
(function() {
    // 1. Inject the Floating Action Button
    const fab = document.createElement('div');
    fab.innerHTML = `
        <div id="fatman-fab">
            <span>🔥</span> Fatman Special
        </div>
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
    <div style="display:flex; align-items:center; gap: 15px;">
        <h2 style="margin:0; font-family:'Outfit'; color:#FF4B2B;">Fatman Module</h2>
        <select id="fatman-subject-select" onchange="window.switchFatmanSubject(this.value)" style="background:#1E293B; color:white; border:1px solid #475569; padding:5px 10px; border-radius:5px; font-family:'Inter'; outline:none; cursor:pointer;">
            <option value="geography">Geography</option>
            <option value="history">Ancient History</option>
        </select>
    </div>
    <button id="fatman-close" style="background:none; border:none; color:white; font-size:24px; cursor:pointer;">&times;</button>
</div>
        <div style="display:flex; gap: 10px; padding: 15px 20px; background: #1E293B; overflow-x: auto;">
            <button class="fatman-tab active" data-target="fatman-notes" style="padding: 8px 16px; border-radius: 20px; border:none; background:#FF4B2B; color:white; font-weight:bold; cursor:pointer;">📖 Bite-Sized Notes</button>
            <button class="fatman-tab" data-target="fatman-flashcards" style="padding: 8px 16px; border-radius: 20px; border:1px solid #475569; background:transparent; color:white; font-weight:bold; cursor:pointer;">🃏 Flashcards</button>
            <button class="fatman-tab" data-target="fatman-mcqs" style="padding: 8px 16px; border-radius: 20px; border:1px solid #475569; background:transparent; color:white; font-weight:bold; cursor:pointer;">🎯 GS Drills (MCQs)</button>
                            <button class="fatman-tab" id="fatman-tab-timeline" data-target="fatman-timeline" style="padding: 8px 16px; border-radius: 20px; border:1px solid #475569; background:transparent; color:white; font-weight:bold; cursor:pointer; display:none;">&#8987; Timeline</button>
        </div>
        <div id="fatman-content" style="flex: 1; overflow-y: auto; padding: 20px;">
            <!-- Content injects here -->
        </div>
    `;
    document.body.appendChild(modal);

    // Ensure CSS is loaded once
    if(!document.getElementById('fatman-css')) {
        const style = document.createElement('style');
        style.id = 'fatman-css';
        style.textContent = `
            .fatman-card.flipped { transform: rotateY(180deg); }
            #fatman-content ul { padding-left: 20px; }
            #fatman-content li { margin-bottom: 10px; color: #CBD5E1; }
            #fatman-content h3 { color: #F87171; margin-top: 25px; border-bottom: 1px solid #334155; padding-bottom: 8px;}
            .mock-opt.selected { background: #38BDF8 !important; color: white !important; border-color: #38BDF8 !important; }
            .mock-opt.correct { background: #10B981 !important; color: white !important; border-color: #10B981 !important; }
            .mock-opt.wrong { background: #EF4444 !important; color: white !important; border-color: #EF4444 !important; }
            #fatman-fab {
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
                transition: transform 0.2s, bottom 0.3s;
            }
            #fatman-fab:active {
                transform: scale(0.95);
            }
            @media (max-width: 768px) {
                #fatman-fab {
                    bottom: 85px; /* Floats above the mobile bottom nav bar */
                    right: 15px;
                    padding: 10px 16px;
                    font-size: 13px;
                }
            }

        `;
        document.head.appendChild(style);
    }

    // 3. Logic & Events
    document.getElementById('fatman-fab').onclick = () => {
        modal.style.display = 'flex';
        renderFatmanNotes(); // Default view
    };
    document.getElementById('fatman-close').onclick = () => {
        modal.style.display = 'none';
        if (window.mockTimerInterval) clearInterval(window.mockTimerInterval);
    };

    const tabs = document.querySelectorAll('.fatman-tab');
    tabs.forEach(tab => {
        tab.onclick = (e) => {
            tabs.forEach(t => { t.style.background = 'transparent'; t.style.border = '1px solid #475569'; t.classList.remove('active'); });
            e.target.style.background = '#FF4B2B';
            e.target.style.border = 'none';
            e.target.classList.add('active');
            
            if (window.mockTimerInterval) clearInterval(window.mockTimerInterval); // clear timer if leaving tab
            
            const target = e.target.getAttribute('data-target');
            if (target === 'fatman-notes') renderFatmanNotes();
            if (target === 'fatman-flashcards') renderFatmanFlashcards();
            if (target === 'fatman-mcqs') renderFatmanMCQMenu();
            if (target === 'fatman-timeline') { if(typeof window.renderFatmanTimeline === 'function') window.renderFatmanTimeline(); }
        };
    });

    window.renderFatmanNotes = renderFatmanNotes;
function renderFatmanNotes() {
        const content = document.getElementById('fatman-content');
        window.currentFatmanTopic = window.currentFatmanTopic || 'All';
        if(!window.fatmanGeography) {
            content.innerHTML = "<p>Data not found. Did fatman_data.js load?</p>";
            return;
        }
        content.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto; background: #1E293B; padding: 20px; border-radius: 12px; line-height: 1.6;">
                <h1 style="color:#38BDF8; margin-top:0;">${window.getFatmanData().chapter}</h1>
                ${window.getFatmanData().notes}
            </div>
        `;
    }

    window.renderFatmanFlashcards = renderFatmanFlashcards;
    function renderFatmanFlashcards() {
    const content = document.getElementById('fatman-content');
        window.currentFatmanTopic = window.currentFatmanTopic || 'All';
    const allCards = window.getFatmanData().flashcards;
    let uniqueTopics = ['All', ...new Set(allCards.map(c => c.topic))];
    
    // Load mastered cards from localStorage
    let masteredStr = localStorage.getItem(`fatman_mastered_cards_${window.currentFatmanSubject}`);
    let mastered = masteredStr ? JSON.parse(masteredStr) : [];
    
    // Filter to get only unmastered cards
    let deck = [];
    allCards.forEach((c, idx) => {
        if (!mastered.includes(idx)) {
            if (window.currentFatmanTopic === 'All' || c.topic === window.currentFatmanTopic) {
                deck.push({ card: c, originalIndex: idx });
            }
        }
    });

    if (deck.length === 0) {
        content.innerHTML = `
            <div style="max-width:600px; margin: 40px auto; text-align:center; background:#1E293B; padding:30px; border-radius:12px; border:1px solid #334155;">
                <h2 style="color:#10B981; font-family:'Outfit';">🎉 Deck Conquered!</h2>
                <p style="color:#CBD5E1; margin-bottom:20px;">You have successfully mastered all ${allCards.length} facts in this section.</p>
                <button onclick="window.resetFatmanDeck()" style="background:#38BDF8; color:white; border:none; padding:12px 24px; border-radius:8px; font-weight:bold; cursor:pointer;">🔄 Reset Deck & Practice Again</button>
            </div>
        `;
        return;
    }

    // Shuffle deck for varied practice
    deck.sort(() => 0.5 - Math.random());
    
    // Render the first card in the deck
    const activeCard = deck[0];
    const totalLeft = deck.length;
    const progress = Math.round((mastered.length / allCards.length) * 100);

    let html = `
        <div style="max-width:600px; margin: 0 auto; text-align:center;">
            
            
            <!-- Topic Filter -->
            <div style="margin-bottom: 20px; text-align: left;">
                <label style="color:#94A3B8; font-size:14px; margin-right:10px;">Filter Topic:</label>
                <select id="fc-topic-filter" onchange="window.currentFatmanTopic = this.value; window.renderFatmanFlashcards()" style="background:#334155; color:white; border:1px solid #475569; padding:8px; border-radius:8px; outline:none; font-family:'Inter'; width:200px;">
                    ${uniqueTopics.map(t => `<option value="${t}" ${window.currentFatmanTopic === t ? 'selected' : ''}>${t}</option>`).join('')}
                </select>
            </div>
            
            <!-- Progress Bar -->

            <div style="display:flex; justify-content:space-between; color:#94A3B8; font-size:14px; margin-bottom:8px;">
                <span>Mastered: ${mastered.length} / ${allCards.length}</span>
                <span>Remaining: ${totalLeft}</span>
            </div>
            <div style="width:100%; background:#334155; border-radius:10px; height:8px; margin-bottom: 25px; overflow:hidden;">
                <div style="width:${progress}%; background:#10B981; height:100%; transition: width 0.3s;"></div>
            </div>

            <!-- The Card -->
            <div id="active-fc-container" style="perspective: 1000px; height: 250px; cursor: pointer;" onclick="this.querySelector('.fatman-card').classList.toggle('flipped'); document.getElementById('fc-actions').style.display='flex';">
                <div class="fatman-card" style="width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; position: relative;">
                    <!-- FRONT -->
                    <div style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #1E293B; border-radius: 16px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 30px; box-sizing: border-box; font-size: 22px; border: 2px solid #475569; color: white;">
                        <span style="font-size:12px; color:#94A3B8; position:absolute; top:15px;">Tap to Flip</span>
                        ${activeCard.card.front}
                    </div>
                    <!-- BACK -->
                    <div style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #38BDF8; color: white; border-radius: 16px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 30px; box-sizing: border-box; font-size: 22px; font-weight: bold; transform: rotateY(180deg); box-shadow: 0 10px 25px rgba(56,189,248,0.3);">
                        ${activeCard.card.back}
                    </div>
                </div>
            </div>

            <!-- Action Buttons (Hidden until flipped) -->
            <div id="fc-actions" style="display:none; justify-content:space-between; gap:15px; margin-top:30px;">
                <button onclick="event.stopPropagation(); window.markFatmanReview()" style="flex:1; background:#EF4444; color:white; border:none; padding:15px; border-radius:10px; font-size:16px; font-weight:bold; cursor:pointer; box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);">
                    ❌ Needs Review
                </button>
                <button onclick="event.stopPropagation(); window.markFatmanGotIt(${activeCard.originalIndex})" style="flex:1; background:#10B981; color:white; border:none; padding:15px; border-radius:10px; font-size:16px; font-weight:bold; cursor:pointer; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);">
                    ✅ Got It!
                </button>
            </div>
            
            <button onclick="window.resetFatmanDeck()" style="margin-top:40px; background:transparent; color:#94A3B8; border:1px solid #475569; padding:8px 16px; border-radius:8px; cursor:pointer; font-size:12px;">Reset Deck Progress</button>

        </div>
    `;
    content.innerHTML = html;
}

window.markFatmanGotIt = function(originalIndex) {
    let masteredStr = localStorage.getItem(`fatman_mastered_cards_${window.currentFatmanSubject}`);
    let mastered = masteredStr ? JSON.parse(masteredStr) : [];
    
    if(!mastered.includes(originalIndex)) {
        mastered.push(originalIndex);
        localStorage.setItem(`fatman_mastered_cards_${window.currentFatmanSubject}`, JSON.stringify(mastered));
    }
    
    // Re-render to show next card
    renderFatmanFlashcards();
};

window.markFatmanReview = function() {
    // Doesn't add to mastered list. Just re-renders to pull another random unmastered card.
    renderFatmanFlashcards();
};

window.resetFatmanDeck = function() {
    if(confirm("Are you sure you want to reset your flashcard progress?")) {
        localStorage.removeItem(`fatman_mastered_cards_${window.currentFatmanSubject}`);
        renderFatmanFlashcards();
    }
};

window.renderFatmanMCQMenu = renderFatmanMCQMenu;
    function renderFatmanMCQMenu() {
        const content = document.getElementById('fatman-content');
        window.currentFatmanTopic = window.currentFatmanTopic || 'All';
        content.innerHTML = `
            <div style="max-width:800px; margin: 0 auto; text-align:center; margin-top: 40px;">
                <h2 style="color:white; margin-bottom:10px;">Select Drill Mode</h2>
                <p style="color:#94A3B8; margin-bottom: 30px;">Choose how you want to conquer the ${window.getFatmanData().mcqs.length} questions.</p>
                
                <button onclick="window.startFatmanPractice()" style="background:#334155; border:1px solid #475569; color:white; padding: 15px 30px; font-size:18px; border-radius:12px; width: 100%; max-width: 400px; margin-bottom:15px; cursor:pointer; font-family:'Outfit';">
                    📚 Practice Mode (All Qs)
                </button>
                <br>
                <button onclick="window.startFatmanMock()" style="background: linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%); border:none; color:white; padding: 15px 30px; font-size:18px; font-weight:bold; border-radius:12px; width: 100%; max-width: 400px; cursor:pointer; font-family:'Outfit'; box-shadow: 0 4px 15px rgba(255, 65, 108, 0.4);">
                    ⏱️ Fatman Grand Test (25 Qs, 5 Mins)
                </button>
            </div>
        `;
    }

    window.startFatmanPractice = function() {
        const content = document.getElementById('fatman-content');
        window.currentFatmanTopic = window.currentFatmanTopic || 'All';
        const mcqs = window.getFatmanData().mcqs;
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
    };

    window.startFatmanMock = function() {
        // Randomly select 20 questions
        let allQs = [...window.getFatmanData().mcqs];
        allQs.sort(() => 0.5 - Math.random());
        window.mockQs = allQs.slice(0, 25);
        window.mockAnswers = new Array(25).fill(-1); // -1 means unattempted
        
        const content = document.getElementById('fatman-content');
        window.currentFatmanTopic = window.currentFatmanTopic || 'All';
        let html = `
            <div id="mock-header" style="position: sticky; top: -20px; background: #0F172A; padding: 15px; border-bottom: 2px solid #334155; z-index: 10; display:flex; justify-content: space-between; align-items:center; border-radius: 0 0 12px 12px; margin-bottom:20px;">
                <div style="font-weight:bold; color: #F87171; font-size: 18px;">Grand Test</div>
                <div id="mock-timer" style="font-weight:bold; color: #10B981; font-size: 20px; font-family: monospace;">05:00</div>
                <button onclick="window.submitFatmanMock()" style="background:#38BDF8; color:white; border:none; padding:8px 16px; border-radius:8px; font-weight:bold; cursor:pointer;">Submit</button>
            </div>
            <div style="max-width:800px; margin: 0 auto;" id="mock-questions-container">
        `;
        
        window.mockQs.forEach((q, qidx) => {
            html += `
                <div class="mock-q-card" id="mock-q-${qidx}" style="background: #1E293B; margin-bottom: 20px; padding: 20px; border-radius: 12px; border: 1px solid #334155;">
                    <h3 style="margin-top:0; color:#F1F5F9; font-size: 16px; font-weight:600;">Q${qidx+1}: ${q.question}</h3>
                    <div style="display:flex; flex-direction:column; gap:10px; margin-top:15px;">
            `;
            q.options.forEach((opt, optidx) => {
                html += `
                    <button class="mock-opt mock-opt-${qidx}" onclick="window.selectMockAnswer(${qidx}, ${optidx})" style="padding: 12px; text-align: left; background: #334155; color: #CBD5E1; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: 0.2s;">
                        ${String.fromCharCode(65+optidx)}. ${opt}
                    </button>
                `;
            });
            html += `
                    </div>
                    <div class="mock-exp" id="mock-exp-${qidx}" style="display:none; margin-top: 15px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10B981; color: #A7F3D0; font-size: 14px; border-radius: 0 8px 8px 0;">
                        <strong>Explanation:</strong> ${q.explanation}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        content.innerHTML = html;

        // Start Timer
        let timeRemaining = 300; // 5 minutes in seconds
        window.mockTimerInterval = setInterval(() => {
            timeRemaining--;
            let m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
            let s = (timeRemaining % 60).toString().padStart(2, '0');
            document.getElementById('mock-timer').innerText = `${m}:${s}`;
            
            if(timeRemaining <= 60) document.getElementById('mock-timer').style.color = '#EF4444';
            
            if(timeRemaining <= 0) {
                clearInterval(window.mockTimerInterval);
                window.submitFatmanMock();
            }
        }, 1000);
    };

    window.selectMockAnswer = function(qidx, optidx) {
        // Unselect others
        const btns = document.querySelectorAll(`.mock-opt-${qidx}`);
        btns.forEach(b => b.classList.remove('selected'));
        
        // Select current
        btns[optidx].classList.add('selected');
        window.mockAnswers[qidx] = optidx;
    };

    window.submitFatmanMock = function() {
        if(window.mockTimerInterval) clearInterval(window.mockTimerInterval);
        document.getElementById('mock-timer').innerText = "TEST OVER";
        
        let correct = 0;
        let incorrect = 0;
        let unattempted = 0;

        window.mockQs.forEach((q, qidx) => {
            const btns = document.querySelectorAll(`.mock-opt-${qidx}`);
            const userAns = window.mockAnswers[qidx];
            
            // Show correct answer explicitly
            btns[q.correct].classList.add('correct');
            
            if(userAns === -1) {
                unattempted++;
            } else if(userAns === q.correct) {
                correct++;
            } else {
                incorrect++;
                btns[userAns].classList.add('wrong');
            }
            
            // Show explanation
            document.getElementById(`mock-exp-${qidx}`).style.display = 'block';
            
            // Disable buttons
            btns.forEach(b => { b.style.pointerEvents = 'none'; });
        });

        // SSC CGL Marking: +2 for correct, -0.5 for wrong
        let score = (correct * 2) - (incorrect * 0.5);
        let maxScore = 50;
        let accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;

        const resultHtml = `
            <div style="background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%); padding: 30px; border-radius: 12px; border: 2px solid #38BDF8; margin-bottom: 30px; text-align: center;">
                <h2 style="color:white; margin:0 0 10px 0;">Test Results</h2>
                <div style="font-size: 36px; font-weight: 800; color: #38BDF8; margin-bottom: 20px;">Score: ${score} / ${maxScore}</div>
                <div style="display:flex; justify-content: center; gap: 20px; font-size: 14px; color: #CBD5E1;">
                    <div>✅ Correct: <span style="color:#10B981; font-weight:bold;">${correct}</span></div>
                    <div>❌ Wrong: <span style="color:#EF4444; font-weight:bold;">${incorrect}</span></div>
                    <div>⚪ Skipped: <span style="font-weight:bold;">${unattempted}</span></div>
                </div>
                <div style="margin-top: 15px; font-size: 14px; color: #94A3B8;">Accuracy: ${accuracy}%</div>
            </div>
        `;
        
        document.getElementById('mock-questions-container').insertAdjacentHTML('afterbegin', resultHtml);
        document.getElementById('fatman-content').scrollTo(0, 0);
    };

})();


window.renderFatmanTimeline = function() {
    if (window.currentFatmanSubject !== 'history') return;
    
    let html = `
        <div style="max-width:800px; margin: 0 auto; color: white;">
            <h3 style="color:#F59E0B; text-align:center; margin-bottom: 30px; font-size: 1.8rem; font-family: 'Outfit';">Ancient India Chronology</h3>
            <div class="timeline-container" style="padding-bottom: 50px;">
    `;

    const timelineData = [
        { period: "2500 BC - 1750 BC", title: "Indus Valley Civilization", desc: "Bronze Age civilization. Major sites: Harappa, Mohenjo-Daro, Lothal, Dholavira. Known for urban planning and drainage." },
        { period: "1500 BC - 1000 BC", title: "Early Vedic Age", desc: "Rig Veda composed. Pastoral society. Sapta Sindhu region." },
        { period: "1000 BC - 600 BC", title: "Later Vedic Age", desc: "Sama, Yajur, Atharva Vedas. Iron discovered. Shift to Gangetic plains. Varna system rigidifies." },
        { period: "6th Century BC", title: "Age of Mahajanapadas & Religious Reforms", desc: "16 Mahajanapadas emerge (Magadha most powerful). Birth of Buddhism (Gautama Buddha) and Jainism (Mahavira)." },
        { period: "544 BC - 412 BC", title: "Haryanka Dynasty", desc: "Bimbisara, Ajatashatru, Udayin. Capital shifted from Rajgir to Pataliputra." },
        { period: "412 BC - 344 BC", title: "Shishunaga Dynasty", desc: "Shishunaga and Kalashoka. 2nd Buddhist Council held." },
        { period: "344 BC - 322 BC", title: "Nanda Dynasty", desc: "Founded by Mahapadma Nanda. Alexander's invasion (326 BC) during Dhana Nanda's reign." },
        { period: "322 BC - 185 BC", title: "Mauryan Empire", desc: "Founded by Chandragupta Maurya (defeated Seleucus Nicator). Ashoka (268-232 BC) embraces Buddhism after Kalinga War." },
        { period: "300 BC - 300 AD", title: "Sangam Age", desc: "Three early kingdoms in South India: Cheras (Kerala), Cholas (Tamil Nadu), Pandyas (Madurai)." },
        { period: "185 BC - 300 AD", title: "Post-Mauryan & Foreign Invasions", desc: "Shungas, Kanvas, Satavahanas (Deccan). Indo-Greeks (Menander), Shakas (Rudradaman), Parthians, Kushanas (Kanishka)." },
        { period: "319 AD - 540 AD", title: "Gupta Empire (Golden Age)", desc: "Founded by Sri Gupta. Chandragupta I (started Gupta Era). Samudragupta (Napoleon of India). Chandragupta II (Navaratnas, Fa-Hien). Kalidasa, Aryabhata." },
        { period: "550 AD - 750 AD", title: "Chalukyas & Pallavas", desc: "Chalukyas of Badami (Pulakesin II). Pallavas of Kanchi (Narasimhavarman). Dravidian temple architecture begins." },
        { period: "606 AD - 647 AD", title: "Harshavardhana (Pushyabhuti)", desc: "Capital at Kannauj. Hiuen Tsang visits India. Defeated by Pulakesin II on Narmada banks." }
    ];

    timelineData.forEach((item, index) => {
        const isLast = index === timelineData.length - 1;
        html += `
            <div style="display:flex; margin-bottom: 0px; position: relative; min-height: 80px;">
                <div style="width: 150px; text-align: right; padding-right: 20px; font-weight: bold; color: #38BDF8; font-size: 1.1rem; flex-shrink: 0;">${item.period}</div>
                <div style="width: 16px; height: 16px; border-radius: 50%; background: #F59E0B; position: relative; z-index: 2; margin-top: 3px; flex-shrink: 0; box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);"></div>
                ${!isLast ? '<div style="border-left: 2px dashed #475569; position: absolute; left: 157px; top: 19px; bottom: -3px; z-index: 1;"></div>' : ''}
                <div style="flex: 1; padding-left: 30px; padding-bottom: 30px; margin-top: -3px;">
                    <h4 style="margin: 0 0 8px 0; color: #F1F5F9; font-size: 1.25rem;">${item.title}</h4>
                    <p style="margin: 0; color: #94A3B8; font-size: 1rem; line-height: 1.5;">${item.desc}</p>
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;
    
    document.getElementById("fatman-content").innerHTML = html;
};
