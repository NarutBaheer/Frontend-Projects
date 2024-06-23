document.addEventListener("DOMContentLoaded", function() {
    const navbarEl = document.querySelector(".navbar");
    const svgBackground = document.querySelector("svg rect"); // Selects the SVG rectangle for background
    const triggerElement = document.querySelector(".top-container"); // Element after which the navbar should change

    // Function to adjust navbar and SVG styling based on scroll position
    function adjustNavbarOnScroll() {
        const triggerPosition = triggerElement.getBoundingClientRect().bottom + window.scrollY;
        const navbarHeight = navbarEl.offsetHeight;

        // Calculate when to add 'active' class based on when you scroll past the triggerElement
        if (window.scrollY > triggerPosition - navbarHeight) {
            navbarEl.classList.add("active");
            svgBackground.setAttribute("fill", "#000000"); // Changes SVG background to black
        } else {
            navbarEl.classList.remove("active");
            svgBackground.setAttribute("fill", "#f0f4f8"); // Revert SVG background to original color
        }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", adjustNavbarOnScroll);
});
