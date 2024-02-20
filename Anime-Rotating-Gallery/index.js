// Selecting the image container element
const imageContainerEl = document.querySelector(".image-container");

// Selecting the "Previous" and "Next" buttons
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

// Initial rotation angle
let x = 0;

// Variable to store the timeout ID for rotation
let timer;

// Event listener for the "Previous" button
prevEl.addEventListener("click", () => {
    // Incrementing the rotation angle by 45 degrees
    x = x + 45;
    // Clearing any existing timeout to avoid overlapping rotations
    clearTimeout(timer);
    // Updating the gallery with the new rotation angle
    updateGallery();
});

// Event listener for the "Next" button
nextEl.addEventListener("click", () => {
    // Decrementing the rotation angle by 45 degrees
    x = x - 45;
    // Clearing any existing timeout to avoid overlapping rotations
    clearTimeout(timer);
    // Updating the gallery with the new rotation angle
    updateGallery();
});


// Function to update the gallery rotation
function updateGallery() {
    // Applying the rotation to the image container
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    // Setting a timeout for automatic rotation after 3 seconds
    timer = setTimeout(() => {
    // Incrementing the rotation angle by 45 degrees
        x = x - 45;
    // Recursively calling the updateGallery function
        updateGallery();
    }, 3000);
}


// Initial call to updateGallery to start the rotation
updateGallery();