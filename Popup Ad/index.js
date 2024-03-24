const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
const ageInputEl = document.querySelector(".input");
const popupBtnEl = document.querySelector(".popup-btn");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.style.visibility = "visible";
    popupContainerEl.style.opacity = "1";
});

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.style.visibility = "hidden";
    popupContainerEl.style.opacity = "0";
});

// Handle age verification
popupBtnEl.addEventListener("click", () => {
    const age = ageInputEl.value;
    if (age && parseInt(age, 10) >= 18) {
        alert("You are allowed to enter.");
        popupContainerEl.style.visibility = "hidden";
        popupContainerEl.style.opacity = "0";
        containerEl.classList.remove("active");
    } else if (age && parseInt(age, 10) < 18) {
        alert("Sorry, you must be at least 18 years old.");
        ageInputEl.value = ""; // Reset the input field
    } else {
        alert("Please enter your age.");
    }
});

