// Selecting the HTML elements for displaying the month, full date, and days
const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

// Getting the current month index, last day of the current month, and the first day of the month
const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// Setting the displayed month and full date
monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();

// Generating HTML for days in the month
let days = "";

// Adding empty placeholders for days before the first day of the month
for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}

// Adding HTML for each day in the month
for (let i = 1; i <= lastDay; i++) {
    // Highlighting the current day with a specific class
    if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
    } else {
    days += `<div>${i}</div>`;
}
}

// Updating the days container in the HTML with the generated content
daysEl.innerHTML = days;