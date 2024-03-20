document.addEventListener("DOMContentLoaded", function() {
    const textareaEl = document.getElementById("textarea");
    const totalCounterEl = document.getElementById("total-counter");
    const remainingCounterEl = document.getElementById("remaining-counter");
    const maxCounterEl = document.getElementById("max-counter");
    
    maxCounterEl.textContent = textareaEl.maxLength;

    textareaEl.addEventListener("input", updateCounter);

    function updateCounter() {
        const length = textareaEl.value.length;
        totalCounterEl.textContent = length;
        remainingCounterEl.textContent = textareaEl.maxLength - length;
    }
    updateCounter(); // Initialize counter on page load
});
