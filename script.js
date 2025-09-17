document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // MOBILE NAVIGATION (HAMBURGER MENU)
    // ============================================
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // ============================================
    // STICKY HEADER
    // ============================================
    const header = document.getElementById('header');
    const stickyPos = header.offsetTop + 50;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > stickyPos) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // ============================================
    // FADE-IN ANIMATIONS ON SCROLL
    // ============================================
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
    // Trigger hero animation on page load
    const heroElements = document.querySelectorAll('.hero-content .fade-in');
    heroElements.forEach(el => el.classList.add('visible'));


    // ============================================
    // DYNAMIC COPYRIGHT YEAR
    // ============================================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ============================================
    // CONTACT FORM TO WHATSAPP
    // ============================================
    const whatsappForm = document.getElementById('whatsapp-form');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get the values from the form fields
            const name = document.getElementById('contact-name').value;
            const message = document.getElementById('contact-message').value;
            
            // Your WhatsApp number (without '+' or '00')
            const phoneNumber = '94719228571';

            // Create the pre-filled message
            const whatsappMessage = `Hello NC Enterprises, my name is ${name}. I have a query:\n\n"${message}"`;

            // Encode the message for the URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Create the final WhatsApp URL
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Open the URL in a new tab
            window.open(whatsappURL, '_blank');
        });
    }
});