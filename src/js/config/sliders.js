const sliders = [
   {
      field: document.querySelectorAll(".slider-images__swiper"),
      parentWrapperForActions: '.row-slider-text__slider',
      options: {
         navigation: {
            clickable: true,

            prevEl: ".swiper-btn-prev",
            nextEl: ".swiper-btn-next",
         },
         loop: true,
         slidesPerView: 1,
         spaceBetween: 20,
      }
   },
   {
      field: document.querySelectorAll(".slider-documents-images__swiper"),
      parentWrapperForActions: '.slider-documents-images__wrapper',
      options: {
         navigation: {
            clickable: true,

            prevEl: ".swiper-btn-prev",
            nextEl: ".swiper-btn-next",
         },
         loop: true,
         slidesPerView: 1,
         spaceBetween: 20,
         breakpoints: {
            576: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },

            1200: {
               slidesPerView: 4,
            },
         },
      }
   },
   {
      field: document.querySelectorAll(".popular-products__swiper"),
      parentWrapperForActions: '.popular-products__wrapper',
      conditionActive: window.innerWidth < 1200,
      options: {
         pagination: {
            el: '.swiper-default__pagination',
            clickable: true,
         },
         navigation: {
            nextEl: '.swiper-default__prev',
            prevEl: '.swiper-default__next',
         },
         autoHeight: true,

         slidesPerView: 1.2,
         spaceBetween: 20,

         breakpoints: {
            768: {
               slidesPerView: 3,
            },
         },
      }
   },
   {
      field: document.querySelectorAll(".catalog-sections__swiper"),
      parentWrapperForActions: '.catalog-sections',
      conditionActive: window.innerWidth < 992,
      options: {
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },

         slidesPerView: 1.6,
         spaceBetween: 20,

         breakpoints: {
            768: {
               slidesPerView: 4,
            },
         },
      }
   },
   {
      field: document.querySelectorAll(".catalog-sections-top__swiper"),
      parentWrapperForActions: '.catalog-sections-top',
      // conditionActive: window.innerWidth < 992,
      options: {
         // pagination: {
         //    el: ".swiper-pagination",
         //    clickable: true,
         // },

         slidesPerView: 1.6,
         spaceBetween: 20,

         breakpoints: {
            768: {
               slidesPerView: 4,
            },
            992: {
               slidesPerView: 5,
               spaceBetween: 30,
            },
            1600: {
               slidesPerView: 6,
            },
         },
      }
   },

];

export { sliders };