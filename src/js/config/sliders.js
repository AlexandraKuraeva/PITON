const sliders = [
   {
      field: document.querySelectorAll(".hero-swiper"),

      options: {
         speed: 300,
         loop: true,
         effect: "creative",
         creativeEffect: {
            prev: {
               opacity: 0,
            },
            next: {
               opacity: 0,
            },
         },
         navigation: {
            nextEl: ".hero-swiper__next",
            prevEl: ".hero-swiper__prev",
         },

         breakpoints: {
            768: {
               speed: 800,
            },
         },
      },
   },
   {
      field: document.querySelectorAll(".catalog-hero-swiper"),

      options: {
         speed: 300,
         loop: true,

         navigation: {
            nextEl: ".catalog-hero-button__next",
            prevEl: ".catalog-hero-button__prev",
         },
      },
   },
   {
      field: document.querySelectorAll(".catalog-categories-swiper"),
      parentWrapperForActions: ".s-catalog-categories__wrapper",
      options: {
         speed: 300,
         loop: true,
         slidesPerView: "1",
         spaceBetween: 30,

         navigation: {
            prevEl: ".catalog-categories-swiper__prev",
            nextEl: ".catalog-categories-swiper__next",
         },

         pagination: {
            el: ".catalog-categories-swiper__pagination",
         },

         breakpoints: {
            768: {
               slidesPerView: "2",
            },

            992: {
               speed: 800,
               slidesPerView: "3",
            },

            1200: {
               slidesPerView: "4",
            },
         },
      },
   },
   {
      field: document.querySelectorAll(".overview-product-swiper"),
      //parentWrapperForActions: ".s-catalog-categories__wrapper",
      options: {
         speed: 300,
         loop: true,
         slidesPerView: "1",
         spaceBetween: 30,

         navigation: {
            prevEl: ".overview-product-swiper__prev",
            nextEl: ".overview-product-swiper__next",
         },

         pagination: {
            el: ".overview-product-swiper__pagination",
         },

         breakpoints: {
            768: {},

            992: {
               speed: 800,
            },

            1200: {},
         },
      },
   },
];

export { sliders };
