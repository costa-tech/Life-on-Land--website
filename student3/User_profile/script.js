let currentStep = 0;

const prompts = [
    [
        { question: "Please enter your Full Name: ", key: "Full name: " },
        { question: "Please enter your Email Address:", key: "Email Address: " },
        { question: "Please enter your Phone Number:", key: "Phone Number: " },
        { question: "Please enter your Date of birth:", key: "Date of Birth:  " }
    ],
    [
        { question: "Your Occupation:", key: "Occupation: " },
        { question: "What is the highest academic qualification you have?", key: "Highest Academic Qualification: " },
        { question: "What is your current area of expertise or specialization?", key: "Current Expertise: " },
        { question: "What motivated you to pursue your current area of study or expertise?", key: "Motivation for Study: " },
    ],
       
    [
        { question: "What outdoor activity do you enjoy the most, and why?", key: "Favorite Outdoor Activity: " },
        { question: "If you could visit any natural landmark in the world, where would you go?", key: "Dream Natural Landmark: " },
        { question: "How do you contribute to environmental conservation?", key: "Environmental Contribution: " },
        { question: "What should humans do to protect the environment?", key: "Message for protect nature: " }
    ]
];

const profile = {};

function updateProgress() {
    const progress = ((currentStep + 1) / prompts.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function updateProfileOutput() {
    const profileOutput = document.getElementById('profile-output');
    profileOutput.innerHTML = '';
    for (let key in profile) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${profile[key]}`;
        profileOutput.appendChild(p);
    }
}


function showPrompt() {
    const stepPrompts = prompts[currentStep];
    stepPrompts.forEach((prompt) => {
        const response = window.prompt(prompt.question, profile[prompt.key] || '');
        if (response !== null) {
            profile[prompt.key] = response;
            updateProfileOutput();
        }
    });

    if (currentStep === prompts.length - 1) {
        document.getElementById('save-btn').style.display = 'inline-block';
    } else {
        document.getElementById('save-btn').style.display = 'none';
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showPrompt();
        updateProgress();
    }
    updateButtons();
}

function nextStep() {
    if (currentStep < prompts.length - 1) {
        currentStep++;
        showPrompt();
        updateProgress();
    }
    updateButtons();
}

function saveProfile() {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile saved successfully!');
}

function loadProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        Object.assign(profile, JSON.parse(savedProfile));
        updateProfileOutput();
    }
}

function updateButtons() {
    document.getElementById('prev-btn').disabled = currentStep === 0;
    document.getElementById('next-btn').disabled = currentStep === prompts.length - 1;
}

document.addEventListener('DOMContentLoaded', () => {
    showPrompt();
    updateProgress();
    updateButtons();
});
