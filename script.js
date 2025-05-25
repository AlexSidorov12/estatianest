// Select all sections that should be animated
const sections = document.querySelectorAll('section');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the section is in view
        if (entry.isIntersecting) {
            // Add the 'is-visible' class to trigger the animation
            entry.target.classList.add('is-visible');
            // Stop observing the section after it has been animated
            observer.unobserve(entry.target);
        }
    });
}, {
    // Options for the observer
    threshold: 0.1 // Trigger when 10% of the section is visible
});

// Add the 'animate-on-scroll' class initially and observe each section
sections.forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
});

// Back to Top Button functionality
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling down 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
}); 
