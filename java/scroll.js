const revealElements = document.querySelectorAll('.reveal');

const listReveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach((el) => listReveal.observe(el));