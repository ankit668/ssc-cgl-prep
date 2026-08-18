let englishDrillQuestions = [];
let currentEnglishDrillIndex = 0;
let englishDrillScore = 0;
let activeEnglishDrillMode = '';
let englishDrillTimerInterval;
let englishDrillTimeLeft = 600;

// Normalize a question object to the standard format used by the drill renderer.
// New MCQ generators use: q, opts, ans, exp
// Old questions.js uses: question, options, answer, explanation
function normalizeQ(q) {
    return {
        id: q.id,
        subject: q.subject,
        cls: q.cls,
        topic: q.topic,
        year: q.year || q.examYear || '',
        examShift: q.examShift || '',
        question: q.question || q.q || '',
        options: q.options || q.opts || [],
        answer: (q.answer !== undefined) ? q.answer : (q.ans !== undefined ? q.ans : 0),
        explanation: q.explanation || q.exp || ''
    };
}

function startEnglishDrill(mode) {
    activeEnglishDrillMode = mode;
    englishDrillScore = 0;
    currentEnglishDrillIndex = 0;
    englishDrillQuestions = [];

    // Filter questions based on mode
    let allEnglish = QUESTIONS_DB.filter(q => q.subject && q.subject.toLowerCase() === 'english');

    if (mode === 'cloze') {
        // Find questions containing "Comprehension:" or "passage"
        englishDrillQuestions = allEnglish.filter(q => 
            (q.question || '').toLowerCase().includes('comprehension:') || 
            (q.question || '').toLowerCase().includes('deleted. read the passage')
        ).map(normalizeQ);
    } else if (mode === 'pqrs') {
        // Find questions mentioning "jumbled" or "order"
        englishDrillQuestions = allEnglish.filter(q => 
            (q.question || '').toLowerCase().includes('jumbled order') ||
            (q.question || '').toLowerCase().includes('arrange the sentences') ||
            (q.question || '').toLowerCase().includes('correct order')
        ).map(normalizeQ);
    } else if (mode === 'spotting') {
        // Find the grammar rules questions
        englishDrillQuestions = allEnglish.filter(q => q.topic === 'english_drills' && q.cls === 'Grammar').map(normalizeQ);
    } else if (mode === 'roots') {
        // Find the Etymology / Root word questions
        englishDrillQuestions = allEnglish.filter(q => q.cls === 'Etymology').map(normalizeQ);
    } else if (mode === 'ows') {
        // Find the OWS questions
        englishDrillQuestions = allEnglish.filter(q => q.cls === 'OWS').map(normalizeQ);
    } else if (mode === 'affixes') {
        // Find the Affixes questions
        englishDrillQuestions = allEnglish.filter(q => q.cls === 'Affixes').map(normalizeQ);
    }

    if (englishDrillQuestions.length === 0) {
        alert("No questions found for this mode yet. Please try another or wait for the database update.");
        return;
    }

    // Shuffle questions
    englishDrillQuestions.sort(() => Math.random() - 0.5);
    // Limit to 10 for a rapid drill
    englishDrillQuestions = englishDrillQuestions.slice(0, 10);

    // Switch UI
    document.getElementById('english-drills-select-screen').classList.add('hidden');
    document.getElementById('english-drills-results-screen').classList.add('hidden');
    document.getElementById('english-drills-active-screen').classList.remove('hidden');

    if (mode === 'cloze') {
        document.getElementById('english-drill-passage-panel').classList.remove('hidden');
    } else {
        document.getElementById('english-drill-passage-panel').classList.add('hidden');
    }

    clearInterval(englishDrillTimerInterval);
    englishDrillTimeLeft = 600; // 10 minutes
    document.getElementById('english-drill-timer').textContent = '10:00';
    englishDrillTimerInterval = setInterval(() => {
        englishDrillTimeLeft--;
        if (englishDrillTimeLeft <= 0) {
            clearInterval(englishDrillTimerInterval);
            document.getElementById('english-drill-timer').textContent = '00:00';
            endEnglishDrill();
            return;
        }
        let m = Math.floor(englishDrillTimeLeft / 60);
        let s = englishDrillTimeLeft % 60;
        document.getElementById('english-drill-timer').textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }, 1000);

    renderEnglishDrillQuestion();
}

function renderEnglishDrillQuestion() {
    if (currentEnglishDrillIndex >= englishDrillQuestions.length) {
        endEnglishDrill();
        return;
    }

    let q = englishDrillQuestions[currentEnglishDrillIndex];
    document.getElementById('english-drill-current-q').textContent = (currentEnglishDrillIndex + 1);
    document.getElementById('english-drill-score').textContent = englishDrillScore;
    
    let nextBtn = document.getElementById('english-drill-next-btn');
    let explanationDiv = document.getElementById('english-drill-explanation');
    let qTextDiv = document.getElementById('english-drill-q-text');
    let passageDiv = document.getElementById('english-drill-passage-text');
    
    nextBtn.classList.add('hidden');
    explanationDiv.classList.add('hidden');
    const resultBanner = document.getElementById('english-drill-result-banner');
    if (resultBanner) { resultBanner.classList.add('hidden'); resultBanner.textContent = ''; }
    
    // Parse Passage vs Question if Cloze
    if (activeEnglishDrillMode === 'cloze') {
        // Usually, SSC Cloze looks like: 
        // "Comprehension:\nIn the following passage... is\nmanaged.\nQ.21 Select the most appropriate option..."
        // We can split by "\nQ."
        let splitText = q.question.split(/\nQ\.\d+/);
        if (splitText.length > 1) {
            let passage = splitText[0].replace('Comprehension:\n', '').trim();
            let subQ = splitText[1].trim();
            passageDiv.textContent = passage;
            qTextDiv.innerHTML = subQ.replace(/\n/g, '<br>');
        } else {
            // Fallback
            passageDiv.textContent = "Passage embedded in question below.";
            qTextDiv.innerHTML = q.question.replace(/\n/g, '<br>');
        }
    } else {
        qTextDiv.innerHTML = q.question.replace(/\n/g, '<br>');
    }

    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
        optionsHtml += `<div class="ncert-option" onclick="checkEnglishDrillAnswer(${idx})" style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:10px;cursor:pointer;font-size:0.95rem;color:#cbd5e1;margin-bottom:8px;transition:all 0.2s;">
            <strong style="color:#94a3b8;">${String.fromCharCode(65+idx)}.</strong> ${opt}
        </div>`;
    });
    
    document.getElementById('english-drill-options').innerHTML = optionsHtml;
}

function checkEnglishDrillAnswer(selectedIdx) {
    let q = englishDrillQuestions[currentEnglishDrillIndex];
    let options = document.querySelectorAll('#english-drill-options .ncert-option');
    
    // Disable further clicks on all options
    options.forEach(opt => opt.onclick = null);

    // Get or create the result banner dynamically
    let resultBanner = document.getElementById('english-drill-result-banner');
    if (!resultBanner) {
        resultBanner = document.createElement('div');
        resultBanner.id = 'english-drill-result-banner';
        resultBanner.style.cssText = 'margin-top:14px;padding:12px 16px;border-radius:10px;font-size:1rem;font-weight:700;text-align:center;';
        document.getElementById('english-drill-options').after(resultBanner);
    }
    resultBanner.style.display = 'block';

    if (selectedIdx === q.answer) {
        // Color the correct option GREEN with inline styles
        options[selectedIdx].style.background = 'rgba(16, 185, 129, 0.2)';
        options[selectedIdx].style.borderColor = '#10b981';
        options[selectedIdx].style.color = '#34d399';
        options[selectedIdx].style.fontWeight = '700';
        englishDrillScore++;
        document.getElementById('english-drill-score').textContent = englishDrillScore;
        // Show green banner
        resultBanner.textContent = '✅ Correct!';
        resultBanner.style.background = 'rgba(16, 185, 129, 0.15)';
        resultBanner.style.color = '#34d399';
        resultBanner.style.border = '1px solid #10b981';
        if(typeof playSound === 'function') playSound('correct');
    } else {
        // Color the wrong option RED
        options[selectedIdx].style.background = 'rgba(239, 68, 68, 0.15)';
        options[selectedIdx].style.borderColor = '#ef4444';
        options[selectedIdx].style.color = '#fca5a5';
        options[selectedIdx].style.textDecoration = 'line-through';
        // Color the correct option GREEN
        options[q.answer].style.background = 'rgba(16, 185, 129, 0.2)';
        options[q.answer].style.borderColor = '#10b981';
        options[q.answer].style.color = '#34d399';
        options[q.answer].style.fontWeight = '700';
        // Show red banner
        resultBanner.textContent = `❌ Wrong! Correct: ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`;
        resultBanner.style.background = 'rgba(239, 68, 68, 0.12)';
        resultBanner.style.color = '#fca5a5';
        resultBanner.style.border = '1px solid #ef4444';
        if(typeof playSound === 'function') playSound('wrong');
    }
    
    let explanationDiv = document.getElementById('english-drill-explanation');
    let sourceHtml = (q.year || q.examShift) ? `<br><br><span style="font-size:12px;color:#94a3b8;">Source: ${q.year} ${q.examShift}</span>` : '';
    explanationDiv.innerHTML = `<strong>Explanation:</strong> ${q.explanation}${sourceHtml}`;
    explanationDiv.classList.remove('hidden');
    
    document.getElementById('english-drill-next-btn').classList.remove('hidden');
}

function nextEnglishDrillQ() {
    currentEnglishDrillIndex++;
    renderEnglishDrillQuestion();
}

function endEnglishDrill() {
    clearInterval(englishDrillTimerInterval);
    document.getElementById('english-drills-active-screen').classList.add('hidden');
    document.getElementById('english-drills-results-screen').classList.remove('hidden');
    document.getElementById('english-drill-final-score').textContent = `${englishDrillScore} / ${englishDrillQuestions.length}`;
}

function quitEnglishDrill() {
    clearInterval(englishDrillTimerInterval);
    document.getElementById('english-drills-active-screen').classList.add('hidden');
    document.getElementById('english-drills-results-screen').classList.add('hidden');
    document.getElementById('english-drills-select-screen').classList.remove('hidden');
}
