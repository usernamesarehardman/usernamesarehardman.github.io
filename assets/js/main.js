// Smooth Scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle visibility of the floating contact form
document.querySelector('.floating-contact-button').addEventListener('click', function() {
    var form = document.querySelector('.floating-contact-form');
    
    // Toggle form visibility
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';  // Show the form
    } else {
        form.style.display = 'none';  // Hide the form
    }
});

// Testing pannign nav bar
let lastScrollPosition = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // User is scrolling down, hide the navbar
        header.style.transform = `translateY(-100%)`;
    } else {
        // User is scrolling up, show the navbar
        header.style.transform = `translateY(0)`;
    }

    // Update lastScrollPosition for the next scroll event
    lastScrollPosition = currentScrollPosition;
});
