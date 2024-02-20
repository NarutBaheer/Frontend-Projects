function submitAnswer() {
    // Use of variables
    let correctAnswer = 14;
    let userAnswer = document.getElementById("answer").value;
    userAnswer = parseInt(userAnswer); // Convert string to number

    // Use of conditional statement and comparison operator
    if (userAnswer === correctAnswer) {
        // Use of alert and console.log
        alert("Correct!");
        console.log("User answered correctly.");
        document.getElementById("feedback").innerText = "Congratulations! Your answer is correct.";
    } else {
        alert("Wrong answer. Try again.");
        console.log("User answered incorrectly.");
        document.getElementById("feedback").innerText = "Oops! That's not right. Please try again.";
    }

    // Use of arrays (simple example)
    let attempts = [userAnswer];

    // Use of loops (simple example)
    for (let i = 0; i < attempts.length; i++) {
        console.log("Attempt " + (i + 1) + ": " + attempts[i]);
    }
}

// Example of a function (already used above)
// Example of variables, conditionals, comparison operators, alert, and console.log (already included above)
