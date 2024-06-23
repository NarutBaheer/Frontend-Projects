const operations = ['+', '-', '*', '/'];
let score = 0;
const maxNum = 10;
let currentOperation = '*';
let difficulty = 1;
const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const inputEl = document.getElementById('input');
const operationEl = document.getElementById('operation');
const difficultyEl = document.getElementById('difficulty');
let points = 1; // Points for each correct answer

operationEl.addEventListener('change', function() {
    currentOperation = this.value;
    correctAns = generateQuestion();
});

difficultyEl.addEventListener('change', function() {
    difficulty = parseInt(this.value);
    points = difficulty; // Points are now based on difficulty
    correctAns = generateQuestion();
});

function generateQuestion() {
    const num1 = Math.ceil(Math.random() * maxNum * difficulty);
    const num2 = Math.ceil(Math.random() * maxNum * difficulty);
    questionEl.innerText = `What is ${num1} ${currentOperation} ${num2}? [${points} Points]`;
    switch (currentOperation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return Math.floor(num1 / num2);
    }
}

let correctAns = generateQuestion();

document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score += points;
        alert('Correct!');
    } else {
        score -= points;
        alert(`Wrong! The correct answer was ${correctAns}`);
    }
    updateLocalStorage();
    correctAns = generateQuestion();
    inputEl.value = ''; // Clear the input after submission
});

document.getElementById('reset').addEventListener("click", () => {
    score = 0;
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
    scoreEl.innerText = `Score: ${score}`;
}

scoreEl.innerText = `Score: ${score || 0}`;
