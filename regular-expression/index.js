document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const mobileNumberInput = document.getElementById('mobileNumber');
    const emailInput = document.getElementById('email');

    // Define validation functions for each field
    function validateField(input, regex, errorMsg) {
        if (!regex.test(input.value)) {
            input.setCustomValidity(errorMsg);
            input.reportValidity();
        } else {
            input.setCustomValidity(''); // Reset the custom message
        }
    }

    // Attach real-time validation listeners
    usernameInput.addEventListener('input', function() {
        const regex = /^[a-zA-Z0-9_]{3,15}$/;
        validateField(usernameInput, regex, 'Username must be 3-15 characters long and can contain letters, numbers, and underscores.');
    });

    passwordInput.addEventListener('input', function() {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        validateField(passwordInput, regex, 'Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special character.');
    });

    mobileNumberInput.addEventListener('input', function() {
        const regex = /^\d{10}$/;
        validateField(mobileNumberInput, regex, 'Mobile number must be 10 digits long.');
    });

    emailInput.addEventListener('input', function() {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        validateField(emailInput, regex, 'Enter a valid email address.');
    });
});

// regular expressions taken from https://dzone.com/articles/use-regex-test-password
// Baheer Noori