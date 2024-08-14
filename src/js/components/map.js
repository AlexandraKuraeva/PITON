async function initMap(container, location) {
   await ymaps3.ready;

   const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

   if (container) {
      // Иницилиазируем карту
      const map = new YMap(container, {
         // Передаём параметры инициализации карты
         location: {
            center: location.center,
            zoom: location.zoom,
         },
      });

      // Стилизация карты
      const layer = new YMapDefaultSchemeLayer({
         customization: [
            {
               tags: {
                  all: ["water"],
               },
               elements: "geometry",
               stylers: [
                  {
                     opacity: 0,
                  },
               ],
            },

            {
               tags: {
                  any: ["road"],
               },
               elements: "geometry",
               stylers: [
                  {
                     color: "#c0c0c0",
                  },
               ],
            },
            {
               tags: {
                  any: ["landscape"],
               },
               elements: "geometry",
               stylers: [
                  {
                     color: "#ebe9e9",
                  },
               ],
            },

            {
               tags: {
                  any: ["poi", "transit"],
               },
               elements: "label.icon",
               stylers: [
                  {
                     color: "#949494",
                  },
               ],
            },
            {
               tags: {
                  any: ["poi", "transit_location"],
               },
               elements: "label.text.fill",
               stylers: [
                  {
                     color: "#000",
                  },
               ],
            },
         ],
      });

      // Создание маркера
      const markerElement = document.createElement("img");
      markerElement.className = "my-marker";
      markerElement.src = "../icons/marker.svg";

      // Контейнер для элементов маркера
      const imgContainer = document.createElement("div");
      imgContainer.appendChild(markerElement);

      const marker = new YMapMarker({ coordinates: location.center, mapFollowsOnDrag: true }, imgContainer);

      // Добавляем слой для отображения схематической карты
      map.addChild(layer);
      map.addChild(new YMapDefaultFeaturesLayer());
      map.addChild(marker);
   }
}

export { initMap };
