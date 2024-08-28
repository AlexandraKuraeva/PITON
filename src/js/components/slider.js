import { sliders } from "../config/sliders.js";
import { isNodeList } from "../utils/utils.js";

function prepareOption(sliderField, slider) {
   let resultOptions = JSON.parse(JSON.stringify(slider.options));

   if (slider.hasOwnProperty("parentWrapperForActions")) {
      const wrapper = sliderField.closest(slider.parentWrapperForActions);

      if (slider.options.hasOwnProperty("navigation")) {
         const navigationOption = slider.options.navigation ? slider.options.navigation : null;
         const navigationLeftSelector = navigationOption ? navigationOption.prevEl : null;
         const navigationRightSelector = navigationOption ? navigationOption.nextEl : null;

         if (navigationLeftSelector && navigationRightSelector) {
            const prevField = sliderField.querySelector(navigationLeftSelector);
            const nextField = sliderField.querySelector(navigationRightSelector);
            resultOptions.navigation.prevEl = prevField ? prevField : wrapper.querySelector(navigationLeftSelector);
            resultOptions.navigation.nextEl = nextField ? nextField : wrapper.querySelector(navigationRightSelector);
         }
      }

      if (slider.options.hasOwnProperty("pagination")) {
         const paginationSelector = slider.options.pagination.el;

         if (paginationSelector) {
            const paginationField = sliderField.querySelector(paginationSelector);
            resultOptions.pagination.el = paginationField ? paginationField : wrapper.querySelector(paginationSelector);
         }
      }
   }

   return resultOptions;
}

function initSlider(sliderField, slider, allSliders) {
   if (slider.hasOwnProperty("conditionActive")) {
      if (slider.conditionActive) {
         const resulOptions = prepareOption(sliderField, slider);
         const swiper = new Swiper(sliderField, resulOptions);
         allSliders.push(swiper);
      }
   } else {
      const resulOptions = prepareOption(sliderField, slider);
      //console.log(resulOptions);

      const swiper = new Swiper(sliderField, resulOptions);
      allSliders.push(swiper);
   }
}

function initSliders() {
   const allSliders = [];

   sliders.forEach((slider) => {
      console.log(slider);
      //console.log(isNodeList(slider.field));

      if (isNodeList(slider.field)) {
         slider.field.forEach((f) => {
            initSlider(f, slider, allSliders);
         });
      } else {
         initSlider(slider.field, slider, allSliders);
      }
   });

   return allSliders;
}

export { initSliders };
