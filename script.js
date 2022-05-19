/* HAMBURGER MENU SCRIPT */
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

/* POPUP SCRIPT */

/* Create dynamic projects section */

/* POPUP WINDOW */

const projects = [{
  name: 'Multi-Post Stories Gain+Glory',
  image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  language: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
},
{
  name: 'Multi-Post Stories Gain+Glory',
  image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  language: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
},
{
  name: 'Multi-Post Stories Gain+Glory',
  image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  language: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
},
{
  name: 'Multi-Post Stories Gain+Glory',
  image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  language: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
},
{
  name: 'Multi-Post Stories Gain+Glory',
  image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  language: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
},
{
  name: 'Multi-Post Stories Gain+Glory',
  image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  language: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
},
];
const collection = document.getElementById('demo');
for (let i = 0; i < projects.length; i = 1 + i) {
  collection.innerHTML += `
    <div class="collection-item">
                            <div class="collection-img">
                                <img class="collection-img" src="${
  projects[i].image
}" alt="project image">
                            </div>
                            <div class="collection-info">
                                <h4 class="project-name">
                                ${projects[i].name}
                                </h4>
                                <div class="tags">
                                    
                                    ${projects[i].language
    .map(
      (l) => `<span class="tag">${l}</span>`,
    )
    .join('')}

                
                                </div>
                                
                                <button type ="button" class="see-project" open-data="popup-wrapper" id="popup-button">See Project</button>
                             
                            </div>

                        </div>
    `;
}

const popupWrapper = document.querySelector('#popup-wrapper');
const popupOverlay = document.querySelector('#popup-overlay');
const closeButton = document.querySelector('#close-button');
const btn = document.querySelectorAll('#popup-button');

closeButton.addEventListener('click', () => {
  popupWrapper.style.display = 'none';
  popupOverlay.style.display = 'none';
});

btn.forEach((b) => {
  b.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
    popupOverlay.style.display = 'block';
  });
});