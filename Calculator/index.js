function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}

// Existing functions...

// New function to update the history display
function updateHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const historyEntry = document.createElement('li');
    historyEntry.textContent = `${expression} = ${result}`;
    historyList.appendChild(historyEntry);
}

// Modify the calculateResult function to include history
function calculateResult() {
    try {
        const display = document.getElementById('display');
        const result = eval(display.value);
        updateHistory(display.value, result); // Update history with the calculation
        display.value = result;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}

// New function to clear the history
function clearHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Clear the history list
}

// You can call clearHistory() to clear the history, perhaps with a button in your HTML
