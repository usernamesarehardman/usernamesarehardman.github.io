// Smooth Scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const linkUrl = new URL(this.href, window.location.href); // Get absolute URL
        const currentPageUrl = new URL(window.location.href); // Get current page URL

        if (linkUrl.origin === currentPageUrl.origin && linkUrl.pathname === currentPageUrl.pathname && linkUrl.hash) {
            e.preventDefault(); // Stop default link behavior

            const section = document.querySelector(linkUrl.hash); // Select section
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
            } else {
                console.warn('Section not found for hash:', linkUrl.hash);
            }
        } else {
            // Allow default behavior for different page links
            console.log(`Navigating to different page: ${linkUrl.href}`);
        }
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

// Nav bar hide on scroll down, show on scroll up
let lastScrollPosition = 0;
const header = document.querySelector('header');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > lastScrollPosition) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScrollPosition = currentScrollPosition;
            ticking = false;
        });

        ticking = true;
    }
});