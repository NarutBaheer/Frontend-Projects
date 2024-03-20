document.addEventListener("DOMContentLoaded", function() {
    updateCalendar();
});

function updateCalendar() {
    const date = new Date();
    const monthNameEl = document.getElementById("month-name");
    const dayNameEl = document.getElementById("day-name");
    const dayNumEl = document.getElementById("day-number");
    const yearEl = document.getElementById("year");

    monthNameEl.innerText = date.toLocaleString("en", { month: "long" });
    dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });
    dayNumEl.innerText = date.getDate();
    yearEl.innerText = date.getFullYear();
}
