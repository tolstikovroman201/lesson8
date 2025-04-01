// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (name && email && message) {
            alert(`Спасибо, ${name}! Я скоро свяжусь с вами.`);
            form.reset();
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
});
