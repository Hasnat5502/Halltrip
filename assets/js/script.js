'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
const images = [
  "./assets/images/Hero-11.jpg",
  "./assets/images/Hero-22.jpg",
  "./assets/images/Hero-33.jpg",
  "./assets/images/Hero-44.jpg",
  "./assets/images/Hero-55.jpg"
];

let currentIndex = 0;
const slideshow = document.querySelector(".slideshow");
const slideElements = document.querySelectorAll(".slide");

// Set initial slides: first slide is the current image, second is the next image
slideElements[0].style.backgroundImage = `url(${images[currentIndex]})`;
slideElements[1].style.backgroundImage = `url(${images[(currentIndex + 1) % images.length]})`;

function slideNext() {
  slideshow.style.transform = "translateX(-50%)";

  setTimeout(() => {
    slideshow.style.transition = "none";
    slideshow.style.transform = "translateX(0)";

    currentIndex = (currentIndex + 1) % images.length;
    
    slideElements[0].style.backgroundImage = `url(${images[currentIndex]})`;
    slideElements[1].style.backgroundImage = `url(${images[(currentIndex + 1) % images.length]})`;

    void slideshow.offsetWidth; // Forces reflow
    slideshow.style.transition = "transform 3s ease-in-out";
  }, 3000); 
}

// Start the slideshow
setInterval(slideNext, 6000);
