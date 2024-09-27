function initMap() {
   ymaps.ready(init);
   function init() {
      let center = JSON.parse('["55.860691", "37.655158"]');
      const map = new ymaps.Map("map", {
         center: center,
         zoom: 16,
      });

      let placemarRkschool = new ymaps.Placemark(
         center,
         {},
         {
            iconLayout: "default#image" /* говорим что будем отображать на карте в качестве геометки  */,
            iconImageHref: "../../icons/map-pin.svg" /* указываем пусть к картинке на нашем сайте  */,
            iconImageSize: [25, 30] /* размеры картинки  */,
         }
      );
      map.controls.remove("geolocationControl"); // удаляем геолокацию
      map.controls.remove("searchControl"); // удаляем поиск
      map.controls.remove("trafficControl"); // удаляем контроль трафика
      map.controls.remove("typeSelector"); // удаляем тип
      map.controls.remove("rulerControl"); // удаляем контрол правил
      map.geoObjects.add(placemarRkschool);
   }
}

export default initMap;
