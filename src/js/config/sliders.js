const sliders = [
   {
      field: document.querySelectorAll(".hero-slider-swiper"),

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
            nextEl: ".swiper-button__next",
            prevEl: ".swiper-button__prev",
         },

         breakpoints: {
            768: {
               speed: 800,
            },
         },
      },
   },
];

export { sliders };
