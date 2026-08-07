// reasoning_generator.js

const REASONING_SYLLOGISMS = [
    {
        statements: ["All cats are dogs.", "Some dogs are birds."],
        conclusions: ["I. Some cats are birds.", "II. Some birds are dogs."],
        options: ["Only I follows", "Only II follows", "Both follow", "None follows"],
        answer: "Only II follows",
        explanation: "Since some dogs are birds, it directly implies some birds are dogs. No direct relation is given between cats and birds, so I does not necessarily follow."
    },
    {
        statements: ["No book is a pen.", "All pens are pencils."],
        conclusions: ["I. No book is a pencil.", "II. Some pencils are pens."],
        options: ["Only I follows", "Only II follows", "Both follow", "None follows"],
        answer: "Only II follows",
        explanation: "All pens are pencils means some pencils are pens. However, just because no book is a pen doesn't mean no book is a pencil (pencils is a larger set). So only II follows."
    },
    {
        statements: ["All A are B.", "All B are C."],
        conclusions: ["I. All A are C.", "II. Some C are A."],
        options: ["Only I follows", "Only II follows", "Both follow", "None follows"],
        answer: "Both follow",
        explanation: "A is a subset of B, which is a subset of C. Therefore, A is a subset of C (I follows). Since A is inside C, at least some C must be A (II follows)."
    },
    {
        statements: ["Some men are good.", "Some good are wise."],
        conclusions: ["I. Some wise are men.", "II. All good are men."],
        options: ["Only I follows", "Only II follows", "Both follow", "None follows"],
        answer: "None follows",
        explanation: "Two 'Some' statements rarely lead to a definitive positive conclusion combining the subjects. No direct relation is established between wise and men."
    },
    {
        statements: ["All lions are tigers.", "No tiger is an elephant."],
        conclusions: ["I. No lion is an elephant.", "II. Some tigers are lions."],
        options: ["Only I follows", "Only II follows", "Both follow", "None follows"],
        answer: "Both follow",
        explanation: "Lions are inside tigers, and tigers are disjoint from elephants, so lions are disjoint from elephants (I follows). Since all lions are tigers, at least some tigers are lions (II follows)."
    }
];

function generateReasoningSeries() {
    // Generate a number series
    const type = Math.floor(Math.random() * 4); // 0: squares, 1: difference in AP, 2: alternating, 3: simple AP
    let series = [];
    let nextNum = 0;
    let explanation = "";

    if (type === 0) { // Squares + constant
        const start = Math.floor(Math.random() * 5) + 2;
        const add = Math.floor(Math.random() * 5);
        for(let i=0; i<4; i++) {
            series.push(Math.pow(start+i, 2) + add);
        }
        nextNum = Math.pow(start+4, 2) + add;
        explanation = `Logic: n² + ${add} (where n = ${start}, ${start+1}, ${start+2}...)`;
    } else if (type === 1) { // Difference is AP
        let current = Math.floor(Math.random() * 20) + 10;
        let diff = Math.floor(Math.random() * 5) + 2;
        const diffAdd = Math.floor(Math.random() * 3) + 1;
        
        for(let i=0; i<4; i++) {
            series.push(current);
            current += diff;
            diff += diffAdd;
        }
        nextNum = current;
        explanation = `Logic: Differences are increasing by ${diffAdd} at each step.`;
    } else if (type === 2) { // Alternating
        const start1 = Math.floor(Math.random() * 10) + 5;
        const add1 = Math.floor(Math.random() * 5) + 2;
        const start2 = Math.floor(Math.random() * 20) + 10;
        const add2 = Math.floor(Math.random() * 5) + 2;

        series = [start1, start2, start1+add1, start2+add2, start1+add1*2, start2+add2*2];
        nextNum = start1+add1*3;
        explanation = `Logic: Two alternating series. One is increasing by ${add1}, the other by ${add2}.`;
    } else { // Simple AP
        const start = Math.floor(Math.random() * 50) + 10;
        const diff = Math.floor(Math.random() * 10) + 3;
        for(let i=0; i<4; i++) {
            series.push(start + (i*diff));
        }
        nextNum = start + (4*diff);
        explanation = `Logic: Arithmetic progression with a common difference of ${diff}.`;
    }

    const question = `Find the missing number in the series: ${series.join(", ")}, ?`;
    let options = [String(nextNum)];
    
    // Generate distractors
    while(options.length < 4) {
        const offset = (Math.floor(Math.random() * 10) + 1) * (Math.random() > 0.5 ? 1 : -1);
        const dist = String(nextNum + offset);
        if(!options.includes(dist) && parseInt(dist) > 0) {
            options.push(dist);
        }
    }
    
    return {
        question: question,
        options: options.sort(() => 0.5 - Math.random()),
        answer: String(nextNum),
        explanation: explanation
    };
}

function generateReasoningCoding() {
    const words = ["WATER", "TRAIN", "PLANT", "EARTH", "CHAIR", "TABLE", "LIGHT", "HOUSE", "PAPER", "BREAD"];
    const word1 = words[Math.floor(Math.random() * words.length)];
    let word2 = words[Math.floor(Math.random() * words.length)];
    while(word1 === word2) word2 = words[Math.floor(Math.random() * words.length)];

    const shift = (Math.floor(Math.random() * 4) + 1) * (Math.random() > 0.5 ? 1 : -1); // -4 to +4 (except 0)
    
    const encode = (str, s) => {
        let res = "";
        for(let i=0; i<str.length; i++) {
            let code = str.charCodeAt(i) + s;
            if(code > 90) code -= 26;
            if(code < 65) code += 26;
            res += String.fromCharCode(code);
        }
        return res;
    };

    const encoded1 = encode(word1, shift);
    const correctAns = encode(word2, shift);
    
    const question = `If in a certain code language, "${word1}" is written as "${encoded1}", how will "${word2}" be written in that language?`;
    
    let options = [correctAns];
    while(options.length < 4) {
        const badShift = shift + (Math.floor(Math.random() * 3) + 1) * (Math.random() > 0.5 ? 1 : -1);
        const dist = encode(word2, badShift);
        if(!options.includes(dist)) options.push(dist);
    }
    
    const shiftStr = shift > 0 ? `+${shift}` : `${shift}`;
    return {
        question: question,
        options: options.sort(() => 0.5 - Math.random()),
        answer: correctAns,
        explanation: `Logic: Each letter is shifted by ${shiftStr} positions in the English alphabet.`
    };
}

function generateReasoningMatrix() {
    // 3x3 matrix logic
    const logicType = Math.floor(Math.random() * 2); // 0: r1 + r2 = r3, 1: r1 * r2 = r3
    
    let m = [];
    if (logicType === 0) {
        for(let i=0; i<3; i++) {
            let c1 = Math.floor(Math.random() * 20) + 5;
            let c2 = Math.floor(Math.random() * 20) + 5;
            let c3 = c1 + c2;
            m.push([c1, c2, c3]);
        }
    } else {
        for(let i=0; i<3; i++) {
            let c1 = Math.floor(Math.random() * 10) + 2;
            let c2 = Math.floor(Math.random() * 10) + 2;
            let c3 = c1 * c2;
            m.push([c1, c2, c3]);
        }
    }
    
    const answer = m[2][2];
    m[2][2] = "?";
    
    const question = `Find the missing number:<br>
    <table style="width:120px; border-collapse:collapse; margin-top:10px; background:var(--bg-card); color:var(--text-primary); text-align:center;">
        <tr><td style="border:1px solid #4b5563; padding:5px;">${m[0][0]}</td><td style="border:1px solid #4b5563; padding:5px;">${m[0][1]}</td><td style="border:1px solid #4b5563; padding:5px;">${m[0][2]}</td></tr>
        <tr><td style="border:1px solid #4b5563; padding:5px;">${m[1][0]}</td><td style="border:1px solid #4b5563; padding:5px;">${m[1][1]}</td><td style="border:1px solid #4b5563; padding:5px;">${m[1][2]}</td></tr>
        <tr><td style="border:1px solid #4b5563; padding:5px;">${m[2][0]}</td><td style="border:1px solid #4b5563; padding:5px;">${m[2][1]}</td><td style="border:1px solid #4b5563; padding:5px; font-weight:bold; color:var(--primary-light);">${m[2][2]}</td></tr>
    </table>`;
    
    let options = [String(answer)];
    while(options.length < 4) {
        const offset = (Math.floor(Math.random() * 10) + 1) * (Math.random() > 0.5 ? 1 : -1);
        const dist = String(answer + offset);
        if(!options.includes(dist) && parseInt(dist) > 0) options.push(dist);
    }
    
    const exp = logicType === 0 ? "Column 1 + Column 2 = Column 3" : "Column 1 × Column 2 = Column 3";
    
    return {
        question: question,
        options: options.sort(() => 0.5 - Math.random()),
        answer: String(answer),
        explanation: `Logic: Pattern operates row-wise. ${exp}.`
    };
}

function generateReasoningSyllogism() {
    const q = REASONING_SYLLOGISMS[Math.floor(Math.random() * REASONING_SYLLOGISMS.length)];
    const question = `<strong>Statements:</strong><br>${q.statements.join("<br>")}<br><br><strong>Conclusions:</strong><br>${q.conclusions.join("<br>")}`;
    
    return {
        question: question,
        options: q.options.sort(() => 0.5 - Math.random()),
        answer: q.answer,
        explanation: q.explanation
    };
}

// Main entry for the UI
function getNextReasoningDrill(mode) {
    if (mode === 'series') return generateReasoningSeries();
    if (mode === 'coding') return generateReasoningCoding();
    if (mode === 'matrix') return generateReasoningMatrix();
    if (mode === 'syllogism') return generateReasoningSyllogism();
    return generateReasoningSeries();
}

// Add these logic functions so app.js can access them globally
window.getNextReasoningDrill = getNextReasoningDrill;
