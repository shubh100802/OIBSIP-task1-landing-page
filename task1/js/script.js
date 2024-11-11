function toggleMenu() {
    const menu = document.querySelector('header nav ul.mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const burgerMenu = document.getElementById('burger-menu');

    if (menu.style.right === '0px') {
        menu.style.right = '-100%';
        closeMenu.style.display = 'none';
        burgerMenu.querySelectorAll('div')[0].classList.remove('open-top');
        burgerMenu.querySelectorAll('div')[2].classList.remove('open-bottom');
    } else {
        menu.style.right = '0';
        closeMenu.style.display = 'block';
        burgerMenu.querySelectorAll('div')[0].classList.add('open-top');
        burgerMenu.querySelectorAll('div')[2].classList.add('open-bottom');
    }
}

function showCustomPopup() {
    const popup = document.getElementById('popupMessage');
    popup.style.display = 'block';
    return false; // Prevents form submission for demonstration
}

function closePopup() {
    const popup = document.getElementById('popupMessage');
    popup.style.display = 'none';
}
