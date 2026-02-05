document.addEventListener('DOMContentLoaded', () => {

    console.log('Script loaded'); // for debugging

    const yearSpan = document.getElementById('year');
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

    // --- MODAL SCRIPT ---
    const modal = document.getElementById('productModal');
    const closeButton = document.querySelector('.close-button');
    const productCards = document.querySelectorAll('.product-card');

    console.log(productCards); // for debugging

    // Function to open the modal and populate it with data
    const openModal = (name, description, image) => {
        const modalImage = document.querySelector('.modal-image');
        const modalProductName = document.getElementById('modalProductName');
        const modalProductDescription = document.getElementById('modalProductDescription');

        if (modalProductName) {
            modalProductName.textContent = name;
        }
        if (modalProductDescription) {
            modalProductDescription.textContent = description;
        }
        if (modalImage) {
            modalImage.src = image;
        }
        if (modal) {
            modal.style.display = 'block';
        }
    };

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Add click event to all product cards
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Card clicked!'); // for debugging
            const name = card.dataset.name;
            const description = card.dataset.description;
            const image = card.dataset.image;
            openModal(name, description, image);
        });
    });

    // Add click event to the close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Add click event to the window to close the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Footer actual year
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
