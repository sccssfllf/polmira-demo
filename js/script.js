document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a'); // Знаходимо всі посилання в навігації

    if (burger && nav) {
        burger.addEventListener('click', (e) => {

            e.preventDefault();

            // Тепер ми також додаємо/видаляємо клас на саму кнопку для її анімації
            burger.classList.toggle('burger-menu--active');
            nav.classList.toggle('nav--active');
        });

        // Додаємо обробник події на кожне посилання в меню
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // При кліку на посилання - закриваємо меню
                burger.classList.remove('burger-menu--active');
                nav.classList.remove('nav--active');
            });
        });
    }
});
