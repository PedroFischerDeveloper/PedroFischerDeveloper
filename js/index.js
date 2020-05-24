function openMenu() {
    var menuElement = document.querySelector('.header > nav > .menu');

    if(menuElement.className === 'menu') {
        menuElement.classList.add('menu-mobile');
    } else {
        menuElement.classList.remove('menu-mobile');
    }
}