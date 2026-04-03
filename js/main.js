const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');
const menuIcon = menuToggle.querySelector('i');
const faqItems = document.querySelectorAll('.faq-item');

function setMenuState(isOpen) {
    navLinks.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menuIcon.classList.toggle('ph-list', !isOpen);
    menuIcon.classList.toggle('ph-x', isOpen);
}

menuToggle.addEventListener('click', () => {
    setMenuState(!navLinks.classList.contains('active'));
});

document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        setMenuState(false);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuState(false);
    }
});

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 48);
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

function reveal() {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .fade-in-up, .fade-in-right');

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const trigger = 110;

        if (elementTop < windowHeight - trigger) {
            element.classList.add('active');
        }
    });
}

faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');

    button.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        faqItems.forEach((faqItem) => {
            faqItem.classList.remove('open');
            faqItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            item.classList.add('open');
            button.setAttribute('aria-expanded', 'true');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    setMenuState(false);
    reveal();
});

window.addEventListener('scroll', reveal);

function openWhatsApp(event) {
    if (event) event.preventDefault();

    const message = 'Ol\u00e1 Doutor Celular! Gostaria de fazer um or\u00e7amento para meu aparelho.';
    const phone = '5511967122566';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener');
}
