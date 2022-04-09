function toggleMenu() {
    const burgerIcon = document.getElementsByClassName('header__burger-icon')[0];
    if (burgerIcon) {
        burgerIcon.addEventListener('click', () => {
            burgerIcon.classList.toggle('header__burger-icon_active');
            const headerMenu = document.getElementsByClassName('header__main-nav')[0];
            headerMenu.classList.toggle('header__main-nav_active');
            document.body.classList.toggle('body_lock');
        })
    }
}

toggleMenu();