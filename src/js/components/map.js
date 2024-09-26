function initMap() {
   ymaps.ready(init);
   function init() {
      let center = JSON.parse('["45.034118702375","39.015654392062"]');
      const smallMap = new ymaps.Map("map", {
         center: center,
         zoom: 17,
      });

      let placemarRkschool = new ymaps.Placemark(
         center,
         {},
         {
            iconLayout: "default#image" /* говорим что будем отображать на карте в качестве геометки  */,
            iconImageHref: "../../icons/map-pin.svg" /* указываем пусть к картинке на нашем сайте  */,
            iconImageSize: [32, 46] /* размеры картинки  */,
            iconImageOffset: [-19, -44] /* отступ от центра  */,
         }
      );
      smallMap.controls.remove("geolocationControl"); // удаляем геолокацию
      smallMap.controls.remove("searchControl"); // удаляем поиск
      smallMap.controls.remove("trafficControl"); // удаляем контроль трафика
      smallMap.controls.remove("typeSelector"); // удаляем тип
      smallMap.controls.remove("rulerControl"); // удаляем контрол правил
      smallMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

      smallMap.geoObjects.add(placemarRkschool);
   }
}

export default initMap;
