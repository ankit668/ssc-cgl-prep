let englishDrillQuestions = [];
let currentEnglishDrillIndex = 0;
let englishDrillScore = 0;
let activeEnglishDrillMode = '';

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
            q.question.toLowerCase().includes('comprehension:') || 
            q.question.toLowerCase().includes('deleted. read the passage')
        );
    } else if (mode === 'pqrs') {
        // Find questions mentioning "jumbled" or "order"
        englishDrillQuestions = allEnglish.filter(q => 
            q.question.toLowerCase().includes('jumbled order') ||
            q.question.toLowerCase().includes('arrange the sentences') ||
            q.question.toLowerCase().includes('correct order')
        );
    } else if (mode === 'spotting') {
        // Find the newly generated grammar rules questions
        englishDrillQuestions = allEnglish.filter(q => q.topic === 'english_drills' && q.cls === 'Grammar');
    } else if (mode === 'roots') {
        // Find the newly generated Etymology / Root word questions
        englishDrillQuestions = allEnglish.filter(q => q.cls === 'Etymology');
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
        optionsHtml += `<div class="ncert-option" onclick="checkEnglishDrillAnswer(${idx})">
            ${String.fromCharCode(65+idx)}. ${opt}
        </div>`;
    });
    
    document.getElementById('english-drill-options').innerHTML = optionsHtml;
}

function checkEnglishDrillAnswer(selectedIdx) {
    let q = englishDrillQuestions[currentEnglishDrillIndex];
    let options = document.querySelectorAll('#english-drill-options .ncert-option');
    
    // Disable further clicks
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (selectedIdx === q.answer) {
        options[selectedIdx].classList.add('correct');
        englishDrillScore++;
        document.getElementById('english-drill-score').textContent = englishDrillScore;
        if(typeof playSound === 'function') playSound('correct');
    } else {
        options[selectedIdx].classList.add('wrong');
        options[q.answer].classList.add('correct');
        if(typeof playSound === 'function') playSound('wrong');
    }
    
    let explanationDiv = document.getElementById('english-drill-explanation');
    explanationDiv.innerHTML = `<strong>Explanation:</strong> ${q.explanation}<br><br><span style="font-size:12px; color:var(--text-muted);">Source: ${q.year} - ${q.examShift}</span>`;
    explanationDiv.classList.remove('hidden');
    
    document.getElementById('english-drill-next-btn').classList.remove('hidden');
}

function nextEnglishDrillQ() {
    currentEnglishDrillIndex++;
    renderEnglishDrillQuestion();
}

function endEnglishDrill() {
    document.getElementById('english-drills-active-screen').classList.add('hidden');
    document.getElementById('english-drills-results-screen').classList.remove('hidden');
    document.getElementById('english-drill-final-score').textContent = `${englishDrillScore} / ${englishDrillQuestions.length}`;
}

function quitEnglishDrill() {
    document.getElementById('english-drills-active-screen').classList.add('hidden');
    document.getElementById('english-drills-results-screen').classList.add('hidden');
    document.getElementById('english-drills-select-screen').classList.remove('hidden');
}
