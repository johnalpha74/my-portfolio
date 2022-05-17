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

/* POPUP SCRIPT*/

/* Create dynamic projects section */

const projectsSection = document.getElementById('projects-section');
const section = document.createElement('section');
projectsSection.appendChild(section);
section.innerHTML = `
<!-- PROJECTS -->
<section class="section" id="portfolio">
    <div class="projects container">
        <div>
            <h2 class="projects-heading">
                My Recent Works
            </h2>
            <div class="collection grid">
                <div class="collection-item">
                    <div class="collection-img">
                        <img class="collection-img" src="https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="project image">
                    </div>
                    <div class="collection-info">
                        <h4 class="project-name">
                            Multi-Post Stories Gain+Glory
                        </h4>
                        <div class="tags">
                            <span class="tag">
                                Ruby on rails
                            </span>
                            <span class="tag">
                                css
                            </span>
                            <span class="tag">
                                JavaScript
                            </span>
                            <span class="tag">
                                html
                            </span>
                        </div>
                        <a href="" id="see-more" class="project-details">See Project</a>
                    
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-img">
                        <img class="collection-img" src="https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="project image">
                    </div>
                    <div class="collection-info">
                        <h4 class="project-name">
                            Multi-Post Stories Gain+Glory
                        </h4>
                        <div class="tags">
                            <span class="tag">
                                Ruby on rails
                            </span>
                            <span class="tag">
                                css
                            </span>
                            <span class="tag">
                                JavaScript
                            </span>
                            <span class="tag">
                                html
                            </span>
                        </div>
                        <a href="#" class="project-details">See Project</a>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-img">
                        <img class="collection-img" src="https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="project image">
                    </div>
                    <div class="collection-info">
                        <h4 class="project-name">
                            Multi-Post Stories Gain+Glory
                        </h4>
                        <div class="tags">
                            <span class="tag">
                                Ruby on rails
                            </span>
                            <span class="tag">
                                css
                            </span>
                            <span class="tag">
                                JavaScript
                            </span>
                            <span class="tag">
                                html
                            </span>
                        </div>
                        <a href="#" class="project-details">See Project</a>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-img">
                        <img class="collection-img" src="https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="project image">
                    </div>
                    <div class="collection-info">
                        <h4 class="project-name">
                            Multi-Post Stories Gain+Glory
                        </h4>
                        <div class="tags">
                            <span class="tag">
                                Ruby on rails
                            </span>
                            <span class="tag">
                                css
                            </span>
                            <span class="tag">
                                JavaScript
                            </span>
                            <span class="tag">
                                html
                            </span>
                        </div>
                        <a href="#" class="project-details">See Project</a>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-img">
                        <img class="collection-img" src="https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="project image">
                    </div>
                    <div class="collection-info">
                        <h4 class="project-name">
                            Multi-Post Stories Gain+Glory
                        </h4>
                        <div class="tags">
                            <span class="tag">
                                Ruby on rails
                            </span>
                            <span class="tag">
                                css
                            </span>
                            <span class="tag">
                                JavaScript
                            </span>
                            <span class="tag">
                                html
                            </span>
                        </div>
                        <a href="#" class="project-details">See Project</a>
                    </div>
                </div>
                <div class="collection-item">
                    <div class="collection-img">
                        <img class="collection-img" src="https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="project image">
                    </div>
                    <div class="collection-info">
                        <h4 class="project-name">
                            Multi-Post Stories Gain+Glory
                        </h4>
                        <div class="tags">
                            <span class="tag">
                                Ruby on rails
                            </span>
                            <span class="tag">
                                css
                            </span>
                            <span class="tag">
                                JavaScript
                            </span>
                            <span class="tag">
                                html
                            </span>
                        </div>
                        <a href="#" class="project-details">See Project</a>
                    </div>
                </div>
            </div>
           
</section>
`
/* POPUP WINDOW */

    const openWindow = document.getElementById('see-more');
    openWindow.addEventListener('click', () => {  
    const main = document.createElement('div');
    
    main.className = 'main';
    const popupWindow = document.createElement('div');
    
    popupWindow.className = 'popupWindow';
    section.innerHTML = `  <!--POPUP SECTION-->
    
    <body style="background-color: #414141;">

    <div class="popup-overlay">
        <div class="popup-wrapper">
            <div class="closeBtn-wrapper">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g style="mix-blend-mode:multiply">
                    <rect width="40" height="40" rx="8" fill="#EBECF0"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#67798E"/>
                    </g>
                    </svg>                    
            </div>

            <div class="image-wrapper">
                <img class="popup-img" src="/assets/components.png" alt="">

                <div class="closeBtn-mobile">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="white"/>
                    </svg>
                </div>

            </div>

            <div class="title-links">
                <div class="title">
                    Keeping track of hundreds of components
                </div>

                <div class="links-desktop">
                    <a class="popup-button" href="">See Live
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/>
                            </svg>
                        </span>
                    </a>
                    <a class="popup-button" href="">See Source 
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_48_2223)">
                                <path d="M20.9992 9.46114C20.9992 8.32124 20.6332 7.25043 19.9345 6.31779C20.2007 5.41969 20.2672 4.27979 20.2007 2.96718C20.1674 2.41451 19.7349 2 19.2025 2C18.9031 2 16.3744 2.03454 14.9105 3.38169C13.6461 3.1399 12.3153 3.1399 11.0177 3.38169C9.58698 2.03454 7.05833 2 6.72561 2C6.19326 2 5.76073 2.41451 5.72746 2.96718C5.62764 4.27979 5.72746 5.41969 5.99363 6.31779C5.29492 7.28497 4.92894 8.35579 4.92894 9.46114C4.92894 11.8791 6.72561 14.0553 9.45389 15.0915C9.35407 15.2988 9.28753 15.5406 9.22099 15.7824C6.32635 15.4715 4.96221 12.7427 4.89566 12.639C4.66276 12.1209 4.06387 11.9136 3.5648 12.19C3.06572 12.4318 2.86609 13.0535 3.13226 13.5717C3.19881 13.7444 5.02875 17.4404 9.05463 17.8549V20.9637C9.05463 21.5509 9.48716 22 10.0528 22H15.8753C16.441 22 16.8735 21.5509 16.8735 20.9637V16.8532C16.8735 16.2314 16.7404 15.6442 16.5075 15.1261C19.2025 14.0553 20.9992 11.9136 20.9992 9.46114Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_48_2223">
                                <rect width="18" height="20" fill="white" transform="translate(3 2)"/>
                                </clipPath>
                                </defs>
                            </svg>                                
                        </span>
                    </a>
                </div>
            </div>

            <ul class="popupTags-wrapper">
                <li class="popupTags">Codekit</li>
                <li class="popupTags">GitHub</li>
                <li class="popupTags">Javasript</li>
                <li class="popupTags">Javasript</li>
                <li class="popupTags">Terminal</li>
                <li class="popupTags">Codepen</li>
            </ul>

            <p class="popupDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
            </p>

           

            <div class="links-mobile">
                <a class="popup-button" href="">See Live
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/>
                        </svg>
                    </span>
                </a>
                <a class="popup-button" href="" id="seeSource">See Source 
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_48_2223)">
                            <path d="M20.9992 9.46114C20.9992 8.32124 20.6332 7.25043 19.9345 6.31779C20.2007 5.41969 20.2672 4.27979 20.2007 2.96718C20.1674 2.41451 19.7349 2 19.2025 2C18.9031 2 16.3744 2.03454 14.9105 3.38169C13.6461 3.1399 12.3153 3.1399 11.0177 3.38169C9.58698 2.03454 7.05833 2 6.72561 2C6.19326 2 5.76073 2.41451 5.72746 2.96718C5.62764 4.27979 5.72746 5.41969 5.99363 6.31779C5.29492 7.28497 4.92894 8.35579 4.92894 9.46114C4.92894 11.8791 6.72561 14.0553 9.45389 15.0915C9.35407 15.2988 9.28753 15.5406 9.22099 15.7824C6.32635 15.4715 4.96221 12.7427 4.89566 12.639C4.66276 12.1209 4.06387 11.9136 3.5648 12.19C3.06572 12.4318 2.86609 13.0535 3.13226 13.5717C3.19881 13.7444 5.02875 17.4404 9.05463 17.8549V20.9637C9.05463 21.5509 9.48716 22 10.0528 22H15.8753C16.441 22 16.8735 21.5509 16.8735 20.9637V16.8532C16.8735 16.2314 16.7404 15.6442 16.5075 15.1261C19.2025 14.0553 20.9992 11.9136 20.9992 9.46114Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_48_2223">
                            <rect width="18" height="20" fill="white" transform="translate(3 2)"/>
                            </clipPath>
                            </defs>
                        </svg>                                
                    </span>
                </a>
            </div>
        </div>
    </div>
</body>
`
  main.appendChild(popupWindow);
  projectsSection.appendChild(main);

  const closeWindow= document.querySelector('.close');
  closeWindow.addEventListener('click', () => {
    projectsSection.removeChild(main);
  })

});