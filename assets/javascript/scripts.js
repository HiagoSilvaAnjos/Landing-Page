const closeMenu = document.getElementById('items-menu');
const logo = document.getElementById('logo');

closeMenu.addEventListener('click', () => {
    const navMenu = document.getElementById('close-menu');
    navMenu.checked = false;
})

logo.addEventListener('click', () => {
    const navLogo = document.getElementById('close-menu');
    navLogo.checked = false;
})