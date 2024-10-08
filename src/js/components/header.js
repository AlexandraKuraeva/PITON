import { debounce } from "../utils/utils.js";

class Header {
   constructor() {
      this.header = document.querySelector(".header.margin-top");
      this.main = document.querySelector(".main");
      this.initHandlers();
   }

   adjustMainContentMargin() {
      if (this.header) {
         this.headerHeight = this.header.getBoundingClientRect().height;
         this.main.style.marginTop = this.headerHeight + "px";
      }
   }

   initHandlers() {
      this.adjustMainContentMargin();

      const d = debounce(this.adjustMainContentMargin.bind(this), 1000);
      window.addEventListener("resize", d);

      // const observer = new MutationObserver(adjustMainContentMargin);
      // observer.observe(header, { childList: true, subtree: true, characterData: true });
   }
}

export { Header };
