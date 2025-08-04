// Smooth logo fade-in on page load
window.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('main img');
    logo.style.opacity = 0;
    logo.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        logo.style.opacity = 1;
    }, 200);
});

// Highlight nav items on hover
const navLinks = document.querySelectorAll('header ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ffcccc';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = 'white';
    });
});
