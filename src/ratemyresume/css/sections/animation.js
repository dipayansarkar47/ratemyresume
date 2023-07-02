// Get the hero image
const heroImage = document.querySelector('.hero-image img');

// Get the trending images
const trendingImages = document.querySelectorAll('.trending__image img');

// Function to add fade-in animation to the hero image
function addFadeInAnimation() {
  heroImage.classList.add('fade-in');
}

// Function to add left-right animation to img2.jpg
function addLeftRightAnimation() {
  trendingImages[0].classList.add('slide-left-right');
}

// Function to add right-to-left animation to img4.jpeg
function addRightToLeftAnimation() {
  trendingImages[1].classList.add('slide-right-left');
}

// Add the animations when the page finishes loading
window.addEventListener('load', () => {
  addFadeInAnimation();
  addLeftRightAnimation();
  addRightToLeftAnimation();
});
