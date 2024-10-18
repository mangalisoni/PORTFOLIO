// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission
//     alert('Form submitted! Thank you for getting in touch.'); // Display alert
// });
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').replace('#', '');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
