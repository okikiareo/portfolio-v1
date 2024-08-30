/*=== MENU SHOW Y HIDDEN ===*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const main = document.querySelector(".main")
const footer = document.querySelector(".footer");

/*=== MENU SHOW ===*/

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.style.bottom = "0"
    })

/*== MENU HIDDEN ==*/

if(navClose) {
  navClose.addEventListener("click", () => {
      navMenu.style.bottom = "-100%"
  })
}
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link")

navLink.forEach((item) => {
    item.addEventListener("click", () => {
        navMenu.style.bottom = "-100%"
    })
})


// HIDE MENU IF IT'S OPEN AND USER CLICK ON THE BACKGROUND
const dropMenu = () => {
    navMenu.style.bottom = "-100%";
}

if(main) {
    main.addEventListener("click", dropMenu)
}

if(footer) {
    footer.addEventListener("click", dropMenu)
}
/*===== SCROLL SECTIONS ACTIVE LINK =======*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}


// Slider 1 - Webapp Slider
let slideIndexWebapp = 1;
let timerWebapp;

function showSlidesWebapp(n) {
  const slides = document.getElementsByClassName("webapp-mySlides");

  if (n > slides.length) { slideIndexWebapp = 1; }
  if (n < 1) { slideIndexWebapp = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexWebapp - 1].style.display = "block";
}

function plusSlidesWebapp(n) {
  pauseTimerWebapp();
  slideIndexWebapp += n;
  showSlidesWebapp(slideIndexWebapp);
  restartTimerWebapp();
}

function startTimerWebapp() {
  timerWebapp = setInterval(function() {
    plusSlidesWebapp(1);
  }, 4000); // 4 seconds interval
}

function pauseTimerWebapp() {
  clearInterval(timerWebapp);
}

function restartTimerWebapp() {
  pauseTimerWebapp();
  startTimerWebapp();
}

function setupEventListenersWebapp() {
  const container = document.querySelector(".webapp_container");
  const prevButton = container.querySelector(".prev-webapp");
  const nextButton = container.querySelector(".next-webapp");

  container.addEventListener("mouseenter", pauseTimerWebapp);
  container.addEventListener("mouseleave", restartTimerWebapp);

  if (prevButton) {
    prevButton.addEventListener("click", () => plusSlidesWebapp(-1));
  }
  if (nextButton) {
    nextButton.addEventListener("click", () => plusSlidesWebapp(1));
  }
}

// Initialize Webapp Slider
showSlidesWebapp(slideIndexWebapp);
startTimerWebapp();
setupEventListenersWebapp();

// Slider 2 - Portfolio Slider
let slideIndexPortfolio = 1;
let timerPortfolio;

function showSlidesPortfolio(n) {
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { slideIndexPortfolio = 1; }
  if (n < 1) { slideIndexPortfolio = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexPortfolio - 1].style.display = "block";
}

function plusSlidesPortfolio(n) {
  pauseTimerPortfolio();
  slideIndexPortfolio += n;
  showSlidesPortfolio(slideIndexPortfolio);
  restartTimerPortfolio();
}

function startTimerPortfolio() {
  timerPortfolio = setInterval(function() {
    plusSlidesPortfolio(1);
  }, 6000); // 6 seconds interval
}

function pauseTimerPortfolio() {
  clearInterval(timerPortfolio);
}

function restartTimerPortfolio() {
  pauseTimerPortfolio();
  startTimerPortfolio();
}

function setupEventListenersPortfolio() {
  const container = document.querySelector(".portfolio_container");
  const prevButton = container.querySelector(".prev");
  const nextButton = container.querySelector(".next");

  container.addEventListener("mouseenter", pauseTimerPortfolio);
  container.addEventListener("mouseleave", restartTimerPortfolio);

  if (prevButton) {
    prevButton.addEventListener("click", () => plusSlidesPortfolio(-1));
  }
  if (nextButton) {
    nextButton.addEventListener("click", () => plusSlidesPortfolio(1));
  }
}

// Initialize Portfolio Slider
showSlidesPortfolio(slideIndexPortfolio);
startTimerPortfolio();
setupEventListenersPortfolio();



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*====== FOOTER =====*/
const currentYear = document.querySelector("#current-year")

const yearText = new Date().getFullYear();

currentYear.textContent = yearText.toString()

