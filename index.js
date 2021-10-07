const hamburger = document.querySelector('.menu-bars');
const mobileMenu = document.querySelector('.mobile-nav');
const closeButton = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('change');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('closed');
});