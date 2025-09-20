// --- Mobile Navigation Menu Toggle ---

// Select the hamburger menu button and the navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on both the hamburger and the nav menu
    // This will trigger the CSS changes to show/hide the menu and animate the icon
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// --- Close Menu When a Link is Clicked ---

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each link
navLinks.forEach(link => link.addEventListener('click', () => {
    // If the menu is open, close it when a link is clicked
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));