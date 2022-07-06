const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

if(menuLinks) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', () => {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        })
    })
}

if (iconMenu) {
    iconMenu.addEventListener('click', e => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}