const burger = document.querySelector('.header-nav__menu'),
        menu = document.querySelector('.burger-menu'),
        header = document.querySelector('header');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
       header.classList.add('shadow')
     } else {
        header.classList.remove('shadow')
     }
})