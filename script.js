const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".mobile-nav-item");
const welcome = document.querySelector(".welcome"); 

hamburger.addEventListener("click", mobileMenu); 

function mobileMenu() {
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
    welcome.classList.toggle("active"); 
}

const navLink = document.querySelectorAll(".nav-link"); 

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active"); 
    navMenu.classList.remove("active"); 
    welcome.classList.remove("active");
}

navLinks.forEach(n => n.addEventListener("click", afterClick));

function afterClick() {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
}