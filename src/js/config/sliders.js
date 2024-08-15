const sliders = [
   {
      field: document.querySelectorAll(".swiper"),

      options: {
         spaceBetween: 30,

         loop: true,

         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
      },
   },
];

export { sliders };
