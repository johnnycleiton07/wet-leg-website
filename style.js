document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerMenu = document.querySelector('.header-menu');
    const menuLinks = document.querySelectorAll('.header-menu a');

    menuToggle.addEventListener('click', function() {
        headerMenu.classList.toggle('open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            headerMenu.classList.remove('open');
        });
    });
});