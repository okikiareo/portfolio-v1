// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }




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
