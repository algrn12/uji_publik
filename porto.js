// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});
// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
alert('Terima kasih atas pesan Anda!');
contactForm.reset();
});