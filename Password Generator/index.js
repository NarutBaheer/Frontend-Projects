document.addEventListener("DOMContentLoaded", () => {
    const btnEl = document.querySelector(".btn");
    const inputEl = document.getElementById("input");
    const copyIconEl = document.querySelector(".fa-copy");
    const alertContainerEl = document.querySelector(".alert-container");
    const lengthSlider = document.getElementById("lengthSlider");
    const lengthValue = document.getElementById("lengthValue");
    const includeUppercase = document.getElementById("includeUppercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");

    // Display the initial value of the password length slider next to it
    lengthValue.textContent = lengthSlider.value;

    // Update displayed length value when slider value changes
    lengthSlider.oninput = () => {
        lengthValue.textContent = lengthSlider.value;
    };

    btnEl.addEventListener("click", createPassword);

    copyIconEl.addEventListener("click", () => {
        if (inputEl.value) {
            copyPassword();
            showAlert("Password copied!");
        }
    });

    function createPassword() {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        if (includeUppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeNumbers.checked) chars += "0123456789";
        if (includeSymbols.checked) chars += "!@#$%^&*()_+?:{}[]";
    
        const passwordLength = parseInt(lengthSlider.value);
        let password = "";
        for (let index = 0; index < passwordLength; index++) {
            const randomNum = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNum, randomNum + 1);
        }
        inputEl.value = password;
    }

    function copyPassword() {
        navigator.clipboard.writeText(inputEl.value).then(() => {
            showAlert("Password copied to clipboard!");
        }).catch(err => {
            console.error('Error copying password to clipboard', err);
            showAlert("Failed to copy password. Please copy manually.");
        });
    }

    function showAlert(message) {
        alertContainerEl.textContent = message;
        alertContainerEl.classList.remove("active");
        setTimeout(() => {
            alertContainerEl.classList.add("active");
        }, 2000);
    }
});