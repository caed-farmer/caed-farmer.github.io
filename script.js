const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.navlinks');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}