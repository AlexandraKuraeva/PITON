// import { debounce } from "./utils/utils.js";

import { debounce } from "../utils/utils.js";


class FooterMenuMasonry {
   constructor() {
      this.masonryFields = document.querySelectorAll(".footer-menu__list");
      this.massonryArr = [];

      console.log(this.masonryFields);

      this.dRemove = debounce(this.disableMasonryFields.bind(this), 1000);
      this.dActive = debounce(this.initMasonry.bind(this), 1000);

      if (window.innerWidth > 991) {
         this.dActive();
      }

      this.resizeHandler();
   }

   initMasonry() {
      console.log("init masonry");
      this.masonryFields.forEach((field) => {
         const msnry = new Masonry(field, {
            columnWidth: ".grid-sizer",
            itemSelector: ".footer-menu__item",
            percentPosition: true,
            horizontalOrder: true,
         });

         this.massonryArr.push(msnry);
      });
   }

   disableMasonryFields() {
      console.log("disable masonry");
      this.massonryArr.forEach((msr) => {
         msr.destroy();
      });
      this.massonryArr = [];
   }

   resizeHandler() {
      window.addEventListener("resize", () => {
         if (window.innerWidth > 991) {
            this.dActive();
         } else {
            this.dRemove();
         }
      });
   }
}

export { FooterMenuMasonry };
