const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.mobile-nav-menu');
const navLinks = document.querySelectorAll('.mobile-nav-item');
const welcome = document.querySelector('.welcome');

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  welcome.classList.toggle('active');
}

hamburger.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  welcome.classList.remove('active');
}

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function afterClick() {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
}

navLinks.forEach((n) => n.addEventListener('click', afterClick));