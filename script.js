const burger = document.querySelector('.header-nav__menu'),
        menu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
})