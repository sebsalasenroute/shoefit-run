// ============================================
// ShoeFit.run - Questionnaire Logic
// ============================================

const questions = [
    {
        id: 'weight',
        label: 'Required',
        title: 'What is your weight range?',
        required: true,
        options: [
            { value: 'light', text: 'Under 130 lbs', subtext: 'Under 59 kg' },
            { value: 'light-medium', text: '130-160 lbs', subtext: '59-73 kg' },
            { value: 'medium', text: '160-190 lbs', subtext: '73-86 kg' },
            { value: 'medium-heavy', text: '190-220 lbs', subtext: '86-100 kg' },
            { value: 'heavy', text: 'Over 220 lbs', subtext: 'Over 100 kg' }
        ]
    },
    {
        id: 'surface',
        label: 'Required',
        title: 'Where do you primarily run?',
        required: true,
        options: [
            { value: 'road', text: 'Road', subtext: 'Pavement, sidewalks, treadmill' },
            { value: 'trail', text: 'Trail', subtext: 'Dirt paths, technical terrain' },
            { value: 'mixed', text: 'Mixed', subtext: 'Both road and trail' }
        ]
    },
    {
        id: 'distance',
        label: 'Required',
        title: 'What distance do you typically run?',
        required: true,
        options: [
            { value: '5k', text: '5K or less', subtext: 'Short distance runs' },
            { value: '10k', text: '10K', subtext: 'Mid-distance runs' },
            { value: 'half', text: 'Half Marathon', subtext: '13.1 miles / 21.1 km' },
            { value: 'marathon', text: 'Marathon', subtext: '26.2 miles / 42.2 km' },
            { value: 'ultra', text: 'Ultra', subtext: '50K and beyond' },
            { value: 'fitness', text: 'Fitness running', subtext: 'General fitness, varied distances' }
        ]
    },
    {
        id: 'budget',
        label: 'Required',
        title: 'What\'s your budget?',
        required: true,
        options: [
            { value: 'budget', text: 'Under $150', subtext: 'Value-focused options' },
            { value: 'mid', text: '$150-200', subtext: 'Mid-range performance' },
            { value: 'premium', text: 'Over $200', subtext: 'Premium performance' }
        ]
    },
    {
        id: 'pronation',
        label: 'Optional',
        title: 'Do you know your pronation type?',
        required: false,
        options: [
            { value: 'neutral', text: 'Neutral', subtext: 'Foot rolls inward normally' },
            { value: 'over', text: 'Overpronation', subtext: 'Foot rolls inward too much' },
            { value: 'under', text: 'Underpronation (Supination)', subtext: 'Foot rolls outward' },
            { value: 'unknown', text: 'Not sure', subtext: 'I haven\'t had a gait analysis' }
        ]
    },
    {
        id: 'mileage',
        label: 'Optional',
        title: 'How many miles do you run per week?',
        required: false,
        options: [
            { value: 'low', text: 'Under 10 miles', subtext: 'Casual runner' },
            { value: 'moderate', text: '10-25 miles', subtext: 'Regular runner' },
            { value: 'high', text: '25-40 miles', subtext: 'Dedicated runner' },
            { value: 'very-high', text: '40-50 miles', subtext: 'Serious training' },
            { value: 'ultra-high', text: '50+ miles', subtext: 'High mileage runner' }
        ]
    },
    {
        id: 'injury',
        label: 'Optional',
        title: 'Any past running injuries?',
        required: false,
        options: [
            { value: 'none', text: 'None', subtext: 'No significant injuries' },
            { value: 'knee', text: 'Knee issues', subtext: 'Runner\'s knee, patella problems' },
            { value: 'shin', text: 'Shin splints', subtext: 'Pain along the shinbone' },
            { value: 'plantar', text: 'Plantar fasciitis', subtext: 'Heel/arch pain' },
            { value: 'itband', text: 'IT band syndrome', subtext: 'Outer knee/hip pain' },
            { value: 'other', text: 'Other', subtext: 'Different injury type' }
        ]
    },
    {
        id: 'strike',
        label: 'Optional',
        title: 'What\'s your foot strike pattern?',
        required: false,
        options: [
            { value: 'heel', text: 'Heel striker', subtext: 'Land on your heel first' },
            { value: 'midfoot', text: 'Midfoot striker', subtext: 'Land on the middle of your foot' },
            { value: 'forefoot', text: 'Forefoot striker', subtext: 'Land on the ball of your foot' },
            { value: 'unknown', text: 'Not sure', subtext: 'Haven\'t analyzed my gait' }
        ]
    }
];

let currentQuestion = 0;
let answers = {};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check if we have saved answers in URL params
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('answers')) {
        try {
            answers = JSON.parse(decodeURIComponent(urlParams.get('answers')));
        } catch (e) {
            answers = {};
        }
    }
});

// Start quiz
function startQuiz() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('questionnaire').classList.remove('hidden');
    renderQuestion();
}

// Go back to landing
function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    } else {
        document.getElementById('questionnaire').classList.add('hidden');
        document.getElementById('landing').classList.remove('hidden');
    }
}

// Render current question
function renderQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('questionContainer');
    
    // Update progress
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    
    // Generate options HTML
    const optionsHTML = question.options.map(option => {
        const isSelected = answers[question.id] === option.value;
        return `
            <button class="option-button ${isSelected ? 'selected' : ''}" 
                    onclick="selectOption('${question.id}', '${option.value}')">
                <div class="option-radio"></div>
                <div>
                    <div class="option-text">${option.text}</div>
                    ${option.subtext ? `<div class="option-subtext">${option.subtext}</div>` : ''}
                </div>
            </button>
        `;
    }).join('');
    
    // Generate skip button for optional questions
    const skipButton = !question.required ? `
        <button class="skip-button" onclick="skipQuestion()">
            Skip this question →
        </button>
    ` : '';
    
    // Generate navigation buttons
    const isLastQuestion = currentQuestion === questions.length - 1;
    const hasAnswer = answers[question.id] !== undefined;
    
    container.innerHTML = `
        <div class="question-label">${question.label}</div>
        <h2 class="question-title">${question.title}</h2>
        <div class="options-grid">
            ${optionsHTML}
        </div>
        ${skipButton}
        <div class="nav-buttons">
            ${currentQuestion > 0 ? `
                <button class="nav-btn nav-btn-back" onclick="goBack()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back
                </button>
            ` : '<div></div>'}
            <button class="nav-btn nav-btn-next" 
                    onclick="${isLastQuestion ? 'finishQuiz()' : 'nextQuestion()'}"
                    ${!hasAnswer && question.required ? 'disabled' : ''}>
                ${isLastQuestion ? 'See My Results' : 'Continue'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    `;
    
    // Animate in
    container.style.animation = 'none';
    container.offsetHeight; // Trigger reflow
    container.style.animation = 'fadeIn 0.3s ease';
}

// Select an option
function selectOption(questionId, value) {
    answers[questionId] = value;
    
    // Update UI to show selection
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Enable next button
    document.querySelector('.nav-btn-next').disabled = false;
    
    // Auto-advance after short delay
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            nextQuestion();
        }
    }, 300);
}

// Skip optional question
function skipQuestion() {
    const question = questions[currentQuestion];
    delete answers[question.id]; // Remove any previous answer
    
    if (currentQuestion < questions.length - 1) {
        nextQuestion();
    } else {
        finishQuiz();
    }
}

// Go to next question
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    }
}

// Finish quiz and go to results
function finishQuiz() {
    // Store answers in localStorage and URL
    localStorage.setItem('shoefitAnswers', JSON.stringify(answers));
    
    // Navigate to results page with answers in URL
    const encodedAnswers = encodeURIComponent(JSON.stringify(answers));
    window.location.href = `results.html?answers=${encodedAnswers}`;
}
