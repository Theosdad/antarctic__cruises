const burgerMenu = document.querySelector('[data-burger-menu]');
const burgerButton = document.querySelector('[data-burger-button]');
const burgerMenuClosers = document.querySelectorAll('[data-burger-close]');
let viewportWidth = window.innerWidth;

function openMenu() {
  burgerMenu.classList.add('shown');
  document.body.classList.add('scroll-lock');
}

function closeMenu() {
  burgerMenu.classList.remove('shown');
  document.body.classList.remove('scroll-lock');
}

function initBurgerMenu() {
  if (burgerMenu.classList.contains('shown')) {
    closeMenu();
  } else {
    openMenu();
  }
}

burgerButton.addEventListener('click', initBurgerMenu);
burgerMenuClosers.forEach((closer) => closer.addEventListener('click', closeMenu));

window.addEventListener('resize', () => {
  viewportWidth = window.innerWidth;
  if (viewportWidth >= 768) {
    if (burgerMenu.classList.contains('shown')) {
      burgerMenu.classList.remove('shown');
      document.body.classList.remove('scroll-lock');
    }
  }
});
