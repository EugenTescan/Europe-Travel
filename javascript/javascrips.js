// Carousel script strat here
var containers = document.getElementsByClassName('tips-boxes');
var currentContainer = 0;
var prevArrow = document.querySelector('.prev-arrow');
var nextArrow = document.querySelector('.next-arrow');
var interval;

function showContainer(index) {
  containers[index].classList.add('active');
}

function hideContainer(index) {
  containers[index].classList.remove('active');
}

function goToPrevContainer() {
  hideContainer(currentContainer);
  currentContainer = (currentContainer - 1 + containers.length) % containers.length;
  showContainer(currentContainer);
}

function goToNextContainer() {
  hideContainer(currentContainer);
  currentContainer = (currentContainer + 1) % containers.length;
  showContainer(currentContainer);
}

prevArrow.addEventListener('click', goToPrevContainer);
nextArrow.addEventListener('click', goToNextContainer);

function startAutoplay() {
  interval = setInterval(goToNextContainer, 2500);
}

function stopAutoplay() {
  clearInterval(interval);
}

startAutoplay();

var slider = document.querySelector('.tips');
slider.addEventListener('mouseenter', stopAutoplay);
slider.addEventListener('mouseleave', startAutoplay);

showContainer(currentContainer);

// End of carousel script


function toggleMenu() {
  var navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
  var navMedia = document.getElementById("navMedia");
  navMedia.classList.toggle("hide");  
}

