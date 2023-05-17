/*login form  */

// Get the element with the class ".login-form-container" and save it to a variable
var loginForm = document.querySelector('.login-form-container');

// When the form login button is clicked, toggle the "fa-user" class on the menu element
// and the "active" class on the navbar element
document.querySelector('#login-btn').onclick = () =>{

    loginForm.classList.toggle('active');
}
// When the foorm close button is clicked, toggle the "fa-time" class on the form element
// and the "active" class on the form element
document.querySelector('#close-login-btn').onclick = () =>{

    loginForm.classList.remove('active');
}



/*Responsive menu button  */

// Get the element with the ID "menu-btn" and save it to a variable
let menu = document.querySelector('#menu-btn');

// Get the element with the class "navbar" and save it to a variable
let navbar = document.querySelector('.navbar');

// When the menu button is clicked, toggle the "fa-times" class on the menu element
// and the "active" class on the navbar element
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// When the user scrolls, remove the "fa-times" class from the menu element
// and the "active" class from the navbar element
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// For each image inside an element with the class "image-slider", set up an onclick
// event handler that updates the src attribute of an element with the class "main-home-image"
document.querySelectorAll('.small-image img').forEach(images => {
  images.onclick = () => {
    var src = images.getAttribute('src');
    document.querySelector('.main-home-image').src = src;
  };
});

// Initialize a new Swiper instance with the class "review-slider" and the given options
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20, // Set the space between slides to 20 pixels
  pagination: {
    el: ".swiper-pagination", // Set the pagination element to use the class "swiper-pagination"
    clickable: true, // Make the pagination clickable
  },
  loop : true, // Enable looping of the slides
  grabCursor: true, // Show a grab cursor when hovering over the swiper container
  autoplay: {
    delay: 7500, // Set the delay between automatic slides to 7500ms 
    disableOnInteraction: false, // Don't stop the autoplay when the user interacts with the swiper
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // On screens smaller than 768px, show only one slide at a time
    },
    768: {
      slidesPerView: 2, // On screens 768px or larger, show two slides at a time
    },
  },
});