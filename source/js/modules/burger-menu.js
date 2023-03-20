const burgerMenu = document.querySelector('[data-burger-menu]');
const burgerMenuClosers = document.querySelectorAll('[data-burger-menu-close]');

function toggleMenu() {
  burgerMenu.classList.toggle('shown');
  document.body.classList.toggle('scroll-lock');
}

function onOutsideClick(event) {
  if (event.target.closest('[data-burger-menu]')) {
    return;
  }
  document.body.removeEventListener('click', onOutsideClick, true);
  toggleMenu();
}

function onMenuToggle() {
  if (burgerMenu.classList.contains('shown')) {
    document.body.removeEventListener('click', onOutsideClick, true);
    toggleMenu();
    return;
  }
  document.body.addEventListener('click', onOutsideClick, true);
  toggleMenu();
}

function executeBurgerMenu() {
  burgerMenuClosers.forEach((closer) => closer.addEventListener('click', onMenuToggle));
}

export {executeBurgerMenu};
