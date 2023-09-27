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
window.addEventListener('scroll', scrollActive)
let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);

function plusSlides(n) {
  pauseTimer(); // Pause the timer when the user clicks next or previous
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  pauseTimer(); // Pause the timer when the user interacts with the carousel
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  
  restartTimer(); // Restart the timer after showing the slide
}

// Add a timer that advances the slides every 2 seconds (2000 milliseconds)
function startTimer() {
  slideTimer = setInterval(function() {
    plusSlides(1); // Advance to the next slide
  }, 4000);
}

// Pause the timer
function pauseTimer() {
  clearInterval(slideTimer);
}

// Restart the timer
function restartTimer() {
  pauseTimer(); // Pause the timer if it's running
  startTimer(); // Restart the timer
}

// Add event listeners to stop and restart the timer when the user interacts with the carousel
let carousel = document.getElementById("move"); // Replace with your carousel's HTML element ID
carousel.addEventListener("mouseenter", pauseTimer);
carousel.addEventListener("click", pauseTimer);
carousel.addEventListener("mouseleave", restartTimer);


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

