import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initMap} from './modules/init-map';
import {executeBurgerMenu} from './modules/burger-menu';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    executeBurgerMenu();

    const map = document.getElementById('map-canvas');
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        initMap({
          id: 'map-canvas',
          initials: {
            center: [59.938803, 30.323026],
            controls: [],
            zoom: 16,
          },
          placemark: [
            {
              hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
            },
            {
              iconImageHref: 'img/svg/map-pin.svg',
              iconImageSize: [18, 22],
              iconLayout: 'default#image',
              iconShadow: false,
            }
          ],
        });

        observer.unobserve(map);
      }
    }, {
      rootMargin: '0px',
      threshold: 0,
    });

    observer.observe(map);
  });
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
