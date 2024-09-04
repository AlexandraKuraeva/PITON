class CatalogDetail {
   constructor() {
      this.mainSliderField = document.querySelector(".catalog-detail-slider__main");
      this.thumbsSliderField = document.querySelector(".detail-slider-thumbs__swiper");

      this.inistSliders();
   }

   inistSliders() {
      this.thumbSlider = new Swiper(this.thumbsSliderField, {
         slidesPerView: 3,
         spaceBetween: 21,

         breakpoints: {
            768: {
               slidesPerView: 4,
               spaceBetween: 14,
            },
            992: {
               spaceBetween: 18,
            },
            1200: {},
         },
      });

      this.mainSlider = new Swiper(this.mainSliderField, {
         slidesPerView: 1,
         spaceBetween: 20,
         navigation: {
            nextEl: ".catalog-detail-slider__next",
            prevEl: ".catalog-detail-slider__prev",
         },
         thumbs: {
            swiper: this.thumbSlider,
         },
      });
   }
}

export { CatalogDetail };
