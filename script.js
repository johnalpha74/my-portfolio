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
                        <button class="see-more" id="see-more">See More</button>
                    
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
    popupWindow.innerHTML = `  <!--POPUP SECTION-->
JDBAJSLDBS 
`
  main.appendChild(popupWindow);
  projectsSection.appendChild(main);

  const closeWindow= document.querySelector('.close');
  closeWindow.addEventListener('click', () => {
    projectsSection.removeChild(main);
  })

});
