const containerEl = document.querySelector(".container");
const preferenceSelectEl = document.getElementById("colorPreference");
const generateButtonEl = document.getElementById("generateColors");

generateButtonEl.addEventListener("click", generateColors);

function generateColors() {
  containerEl.innerHTML = ''; // Clear existing colors
  for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
  }

  const colorContainerEls = document.querySelectorAll(".color-container");

  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor(preferenceSelectEl.value);
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

function randomColor(preference) {
  const chars = "0123456789ABCDEF";
  const colorCodeLength = 6;
  let colorCode = "";
  while (colorCode === "" || !isValidColor(colorCode, preference)) {
    colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
      const randomNum = Math.floor(Math.random() * chars.length);
      colorCode += chars.substring(randomNum, randomNum + 1);
    }
  }
  return colorCode;
}

function isValidColor(colorCode, preference) {
  const r = parseInt(colorCode.substr(0,2), 16);
  const g = parseInt(colorCode.substr(2,2), 16);
  const b = parseInt(colorCode.substr(4,2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  if (preference === "light") return brightness > 125;
  if (preference === "dark") return brightness <= 125;
  return true; // All colors are valid for 'all' preference
}
