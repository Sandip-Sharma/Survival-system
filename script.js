const quizFlow = {
    start: {
        question: "Which path do you want to take?",
        choices: ["Survival", "Doctor Bot", "Survey based health usage solution", "AI-analytic with past history"],
        next: ["pathA", "pathB", "pathC","pathD"]
    },
    // pathD: {
    //     question: "You've chosen Path D. What is your next step?",
    //     choices: ["Step 1", "Step 2", "Finish"],
    //     next: ["step1A", "step2A", "finishA"]
    // },
    pathA: {
        question: "Whats The Conditions Of Patient",
        choices: ["Concious", "Un-Concious", "Somewhere Between"],
        next: ["step1A", "uc100", "finishA"]
    },
    pathB: {
        question: 'COmming Up But U can visit that via  /Chataidoctor.html',
        choices: ["Left", "Right", "Finish"],
        next: ["leftB", "rightB", "finishB"],
        // action: function() { window.location.href = 'h.html'; 
        }
    ,
    // pathC: {
    //     question: "Path C is tricky. Pick wisely.",
    //     choices: ["Option X", "Option Y", "Finish"],
    //     next: ["optionX", "optionY", "finishC"]
    // },

    // document.getElementById('pathB').addEventListener('click', pathB.action);
    // main questions for consious YES

    step1A: {
        question: "Do he/she is having Chest Pain or Discomfort",
        choices: ["Yes", "No"],
        next: ["hetat", "hetatB1"]
    },
    hetat: {
        question: "Do they are facing Shortness of Breath",
        choices: ["Yes", "No"],
        next: ["hetatA", "hetatA1"]
    },

    hetatA: {
        question: "Do they are facing Nausea or Vomiting",
        choices: ["Yes", "No"],
        next: ["hetatA1", "hetat"]
    },
    hetatA1: {
        question: "Do they are facing Dizziness or Lightheadedness",
        choices: ["Yes", "No"],
        next: ["hetatB1", "hetatA"]
    },
    hetatB1: {
        question: "Do they are facing Anxiety",
        choices: ["Yes", "No"],
        next: ["Finish", "Finish"]
    },
    Finish: {
        question: "Result : Its An Heart Attack",
        choices: ["Leave", "Retin"],
        next: ["Finish", "Finish"]
    },


    // Uncomsious

    uc100: {
        question: "Do he/she is having Unresponsiveness",
        choices: ["Yes", "No"],
        next: ["uc101", "uc104"]
    },
    uc101: {
        question: "Do they are facing No Breathing or Abnormal Breathing",
        choices: ["Yes", "No"],
        next: ["uc102", "uc103"]
    },

    uc102: {
        question: "Do they are facing No Pulse",
        choices: ["Yes", "No"],
        next: ["uc103", "uc102"]
    },
    uc103: {
        question: "Does they Sudden Collapse",
        choices: ["Yes", "No"],
        next: ["uc104", "uc101"]
    },
    uc104: {
        question: "Pale or Blue Skin",
        choices: ["Yes", "No"],
        next: ["UCFinish", "UCFinish"]
    },
    UCFinish: {
        question: "Result : Need To Perform CPR",
        choices: ["Leave", "Retin"],
        next: ["Finish", "Finish"]
    },
    


    // step2A: {
    //     question: "Step 2 of Path A. Continue?",
    //     choices: ["Yes", "No"],
    //     next: ["finishA", "start"]
    // },
    finishA: {
        question: "You completed Path A!",
        choices: ["Restart"],
        next: ["start"]
    },
    leftB: {
        question: "You went left on Path B.",
        choices: ["Continue", "Finish"],
        next: ["rightB", "finishB"]
    },
    rightB: {
        question: "You went right on Path B.",
        choices: ["Go back", "Finish"],
        next: ["leftB", "finishB"]
    },
    finishB: {
        question: "You completed Path B!",
        choices: ["Restart"],
        next: ["start"]
    },
    optionX: {
        question: "Option X on Path C. What's next?",
        choices: ["Finish"],
        next: ["finishC"]
    },
    optionY: {
        question: "Option Y on Path C. What's next?",
        choices: ["Finish"],
        next: ["finishC"]
    },
    finishC: {
        question: "You completed Path C!",
        choices: ["Restart"],
        next: ["start"]
    }
};

let currentStep = "start";

function showQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQuiz = quizFlow[currentStep];

    questionElement.innerText = currentQuiz.question;

    for (let i = 0; i < currentQuiz.choices.length; i++) {
        choicesElement.children[i].children[0].innerText = currentQuiz.choices[i];
        choicesElement.children[i].style.display = "block";
    }

    // Hide any unused buttons
    for (let i = currentQuiz.choices.length; i < choicesElement.children.length; i++) {
        choicesElement.children[i].style.display = "none";
    }
}

function selectAnswer(selectedIndex) {
    currentStep = quizFlow[currentStep].next[selectedIndex];
    showQuestion();
}

showQuestion();
