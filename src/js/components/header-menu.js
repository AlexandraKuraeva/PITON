class HeaderMenu {
   constructor() {
      this.headerMenu = document.querySelector(".header-menu");
      this.triggers = document.querySelectorAll(".js-header-menu-trigger");

      this.inithandlers();
   }

   inithandlers() {
      this.initTriggerClickHadler();
      this.closeMenuOnOutsideClick();
   }

   initTriggerClickHadler() {
      this.triggers.forEach((el) => {
         el.addEventListener("click", (event) => {
            el.classList.toggle("active");
            this.headerMenu.classList.toggle("active");
         });
      });
   }

   closeMenuOnOutsideClick() {
      document.querySelector("body").addEventListener("click", (event) => {
         if (!event.target.closest(".main-nav__body") && !event.target.closest(".js-header-menu-trigger")) {
            this.triggers.forEach((el) => {
               el.classList.remove("active");
               this.headerMenu.classList.remove("active");
            });
         }
      });
   }
}

export { HeaderMenu };
