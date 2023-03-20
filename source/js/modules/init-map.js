let apiLoaded = false;

const createMap = ({id, initials, placemark}) => {
  const map = new window.ymaps.Map(id, initials);
  map.geoObjects.add(new window.ymaps.Placemark(map.getCenter(), ...placemark));
  map.behaviors.disable('scrollZoom');
};

export function initMap(mapData) {
  if (apiLoaded) {
    createMap(mapData);

    return;
  }

  const scriptElement = document.createElement('script');
  scriptElement.async = true;
  scriptElement.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  scriptElement.addEventListener('load', () => {
    window.ymaps.ready(() => {
      createMap(mapData);
      apiLoaded = true;
    });
  });
  document.body.append(scriptElement);
}