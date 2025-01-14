const allQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
        answer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        answer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        answer: 2
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Everest", "Kangchenjunga", "Makalu"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

function getRandomQuestions(numQuestions) {
    // Shuffle the questions array and pick the first numQuestions questions
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numQuestions);
}

function loadQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const questionData = selectedQuestions[index];

    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul class="answers">
            ${questionData.options.map((option, i) => `
                <li onclick="checkAnswer(${i}, ${index})">${option}</li>
            `).join('')}
        </ul>
    `;
}

function checkAnswer(selectedIndex, questionIndex) {
    const correctAnswer = selectedQuestions[questionIndex].answer;
    const resultDisplay = document.getElementById('result');

    if (selectedIndex === correctAnswer) {
        score++;
        document.getElementById('score').innerText = score;
        resultDisplay.innerHTML = `<p>Correct!</p><p>Your score: ${score}</p>`;
    } else {
        resultDisplay.innerHTML = `<p>Wrong! The correct answer is: ${selectedQuestions[questionIndex].options[correctAnswer]}</p><p>Your score: ${score}</p>`;
    }

    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion(currentQuestionIndex);
        document.getElementById('result').innerHTML = `<p>Your score: ${score}</p>`;
        document.getElementById('next-button').style.display = 'none';
    } else {
        document.getElementById('result').innerHTML = `<p>Quiz complete! Final score: ${score}/${selectedQuestions.length}</p>`;
        document.getElementById('next-button').style.display = 'none';
    }
}

window.onload = () => {
    selectedQuestions = getRandomQuestions(5); // Select 5 random questions
    loadQuestion(currentQuestionIndex);
    document.getElementById('next-button').style.display = 'none';
};
