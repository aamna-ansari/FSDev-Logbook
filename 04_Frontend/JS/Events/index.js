
const thumbnails = document.querySelectorAll('.thumbnail');
const background = document.querySelector('.background');

// Set initial background
background.style.backgroundImage = `url(${thumbnails[0].dataset.bg})`;

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('mouseover', () => {
    background.style.backgroundImage = `url(${thumbnail.dataset.bg})`;
  });
});