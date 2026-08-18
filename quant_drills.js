let quantDrillQuestions = [];
let currentQuantDrillIndex = 0;
let quantDrillScore = 0;
let quantDrillTarget = 20;
let quantDrillTimerInterval;
let quantDrillTimeLeft = 1500;

function startQuantDrill() {
    quantDrillScore = 0;
    currentQuantDrillIndex = 0;
    quantDrillQuestions = [];

    // The high-yield topics to secure 15-20 marks effortlessly
    const targetTopics = [
        'percentage', 'ratio', 'profit_loss', 'time_work', 
        'algebra', 'mensuration', 'trigonometry', 'average', 'number_system'
    ];

    // Filter questions based on the target topics and subject maths (or quant)
    // Note: Some questions in DB might have subject 'maths' or 'quant'
    let allMaths = QUESTIONS_DB.filter(q => 
        (q.subject === 'maths' || q.subject === 'quant') && 
        targetTopics.includes(q.topic)
    );

    if (allMaths.length === 0) {
        alert("No target quant questions found. Please check database.");
        return;
    }

    // Shuffle questions
    allMaths.sort(() => Math.random() - 0.5);
    // Limit to 25 questions (Target is to score 15 to 20 out of 25)
    quantDrillQuestions = allMaths.slice(0, 25);

    // Switch UI
    document.getElementById('quant-drills-start-screen').classList.add('hidden');
    document.getElementById('quant-drills-results-screen').classList.add('hidden');
    document.getElementById('quant-drills-active-screen').classList.remove('hidden');

    clearInterval(quantDrillTimerInterval);
    quantDrillTimeLeft = 1500; // 25 minutes
    document.getElementById('quant-drill-timer').textContent = '25:00';
    quantDrillTimerInterval = setInterval(() => {
        quantDrillTimeLeft--;
        if (quantDrillTimeLeft <= 0) {
            clearInterval(quantDrillTimerInterval);
            document.getElementById('quant-drill-timer').textContent = '00:00';
            endQuantDrill();
            return;
        }
        let m = Math.floor(quantDrillTimeLeft / 60);
        let s = quantDrillTimeLeft % 60;
        document.getElementById('quant-drill-timer').textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }, 1000);

    updateQuantDrillMilestone();
    renderQuantDrillQuestion();
}

function renderQuantDrillQuestion() {
    let q = quantDrillQuestions[currentQuantDrillIndex];
    document.getElementById('quant-drill-q-text').innerHTML = q.question.replace(/\n/g, '<br>');
    document.getElementById('quant-drill-progress').innerText = `Question ${currentQuantDrillIndex + 1} of ${quantDrillQuestions.length}`;
    
    // Add visual indicator of the topic
    document.getElementById('quant-drill-topic-badge').innerText = q.topic.replace('_', ' ').toUpperCase();

    let optsHtml = "";
    for(let i = 0; i < q.options.length; i++) {
        optsHtml += `<div class="ncert-opt" onclick="checkQuantDrillAnswer(${i})">
            <strong>${String.fromCharCode(65+i)}.</strong> ${q.options[i]}
        </div>`;
    }
    document.getElementById('quant-drill-options').innerHTML = optsHtml;
    document.getElementById('quant-drill-exp').classList.add('hidden');
    document.getElementById('quant-drill-next-btn').classList.add('hidden');
}

function checkQuantDrillAnswer(selectedIdx) {
    let q = quantDrillQuestions[currentQuantDrillIndex];
    let optsDivs = document.getElementById('quant-drill-options').children;
    
    // Disable further clicks
    for(let div of optsDivs) {
        div.onclick = null;
        div.style.cursor = 'default';
    }

    if (selectedIdx === q.answer) {
        optsDivs[selectedIdx].classList.add('correct');
        quantDrillScore++;
        updateQuantDrillMilestone();
    } else {
        optsDivs[selectedIdx].classList.add('wrong');
        optsDivs[q.answer].classList.add('correct');
        
        // Add to mistakes
        let isMistakeExists = MISTAKES_DB.some(m => m.id === q.id);
        if(!isMistakeExists) {
            MISTAKES_DB.push(q);
            saveMistakes();
        }
    }

    // Show explanation and next button
    let expDiv = document.getElementById('quant-drill-exp');
    expDiv.innerHTML = `<strong>Explanation:</strong><br>${q.explanation}`;
    expDiv.classList.remove('hidden');
    document.getElementById('quant-drill-next-btn').classList.remove('hidden');
}

function updateQuantDrillMilestone() {
    let tracker = document.getElementById('quant-drill-milestone-tracker');
    let targetEl = document.getElementById('quant-drill-target');
    
    targetEl.innerText = `${quantDrillScore} / ${quantDrillTarget} Target Correct`;
    
    if (quantDrillScore >= 15 && quantDrillScore < quantDrillTarget) {
        tracker.className = 'milestone-tracker milestone-safe';
    } else if (quantDrillScore >= quantDrillTarget) {
        tracker.className = 'milestone-tracker milestone-achieved';
    } else {
        tracker.className = 'milestone-tracker milestone-normal';
    }
}

function nextQuantDrillQuestion() {
    currentQuantDrillIndex++;
    if (currentQuantDrillIndex < quantDrillQuestions.length) {
        renderQuantDrillQuestion();
    } else {
        endQuantDrill();
    }
}

function endQuantDrill() {
    clearInterval(quantDrillTimerInterval);
    document.getElementById('quant-drills-active-screen').classList.add('hidden');
    document.getElementById('quant-drills-results-screen').classList.remove('hidden');
    
    let resultText = document.getElementById('quant-drills-final-score');
    resultText.innerHTML = `You scored <strong>${quantDrillScore}</strong> out of ${quantDrillQuestions.length}!`;
    
    let analysisText = document.getElementById('quant-drills-analysis');
    if (quantDrillScore >= 20) {
        analysisText.innerHTML = "🔥 <strong>Outstanding!</strong> You are well past the qualifying safe zone! Your strategy is working perfectly.";
    } else if (quantDrillScore >= 15) {
        analysisText.innerHTML = "✅ <strong>Safe Zone Secured!</strong> You've hit the 15+ mark on high-yield topics. You are ready to clear Tier-1!";
    } else if (quantDrillScore >= 12) {
        analysisText.innerHTML = "⚠️ <strong>Almost there.</strong> You hit the bare minimum cutoff zone, but you should push for a few more to be safe.";
    } else {
        analysisText.innerHTML = "❌ <strong>Below Qualifying Target.</strong> Keep practicing these high-yield topics. Do not waste time on complex geometry until you master these!";
    }
}
