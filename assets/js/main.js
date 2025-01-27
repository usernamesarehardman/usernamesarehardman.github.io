// Smooth Scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
let backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Back to Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
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