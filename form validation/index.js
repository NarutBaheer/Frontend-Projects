document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
    } else {
        errorMessage.textContent = "";
        console.log("Login successful for user:", username);
        alert("Login successful for user: " + username);
    }
});
