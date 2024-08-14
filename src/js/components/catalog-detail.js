import { removeSelector } from "../utils/utils.js";

class CatalogDetail {

   constructor() {
      this.mainSliderField = document.querySelector('.catalog-detail-slider__main');
      this.thumbsSliderField = document.querySelector('.detail-slider-thumbs__swiper');
      this.initFields();
      this.inistSliders();
      this.initHandlers();
   }

   initHandlers() {
      this.favouriteClickHandler();
      this.initTabs()
   }

   initFields() {
      this.favouriteField = document.querySelector('.catalog-detail__favourite');
   }


   favouriteClickHandler() {
      this.favouriteField.addEventListener('click', () => {
         this.favouriteField.classList.toggle('active');
      })
   }

   initTabs() {
      this.tabs = document.querySelectorAll('.catalog-detail-tabs__item');
      this.tabsContents = document.querySelectorAll('.catalog-detail-tabs__content-item');

      this.tabs.forEach((tab, idx) => {
         tab.addEventListener('click', () => {
            removeSelector(this.tabs);
            removeSelector(this.tabsContents);

            tab.classList.add('active');
            this.tabsContents[idx].classList.add('active');
         });
      })
   }

   inistSliders() {

      this.thumbSlider = new Swiper(this.thumbsSliderField, {
         slidesPerView: 4,
         spaceBetween: 7,
         // freeMode: true,
         // autoHeight: true,

         breakpoints: {
            // when window width is >= 640px
            768: {
               direction: 'vertical',
               slidesPerView: 4,
               spaceBetween: 14,

            },
            992: {
               direction: 'vertical',
               slidesPerView: 'auto',
               spaceBetween: 20,

            },
            1200: {
               direction: 'horizontal',
               slidesPerView: 'auto',
               spaceBetween: 20,

            }
         }

      });

      this.mainSlider = new Swiper(this.mainSliderField, {
         slidesPerView: 1,
         // freeMode: true,
         spaceBetween: 20,
         thumbs: {
            swiper: this.thumbSlider,
         },

      });


   }
}

export { CatalogDetail };