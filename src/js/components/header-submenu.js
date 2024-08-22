class HeaderSubMenu {
   constructor() {
      this.menuLinks = document.querySelectorAll(".header-menu__link");

      this.menuItems = document.querySelectorAll(".has-sub-menu");

      this.catalogBtn = document.querySelector(".js-header-menu-catalog");
      this.catalogPopUp = document.querySelector(".js-header-menu-catalog-popup");

      this.inithandlers();
   }

   inithandlers() {
      this.initTriggerClickHadler();
      this.initCatalogClickHadler();
      this.closeMenuOnOutsideClick();
   }

   initTriggerClickHadler() {
      this.menuLinks.forEach((el) => {
         el.addEventListener("click", (event) => {
            const clickedElement = event.target.closest("a");
            const parentElement = event.target.closest(".has-sub-menu");

            if (parentElement) {
               if (clickedElement && clickedElement.querySelector(".svg-arrow")) {
                  event.preventDefault();
                  parentElement.classList.toggle("active-sub-menu");
               }
            }

            this.menuLinks.forEach((link) => {
               const parentCurrentLink = link.closest(".has-sub-menu");
               if (link !== clickedElement && parentCurrentLink?.classList.contains("active-sub-menu")) {
                  parentCurrentLink?.classList.remove("active-sub-menu");
               }
            });
         });
      });
   }

   initCatalogClickHadler() {
      if (this.catalogBtn) {
         this.catalogBtn.addEventListener("click", (event) => {
            event.preventDefault();

            this.catalogBtn.classList.toggle("active");
            this.catalogPopUp.classList.toggle("active");
         });
      }
   }

   closeMenuOnOutsideClick() {
      document.querySelector("body").addEventListener("click", (event) => {
         if (!event.target.closest(".main-nav__body")) {
            this.menuItems.forEach((el) => {
               el.classList.remove("active-sub-menu");
               el.classList.remove("active");
               this.catalogPopUp.classList.remove("active");
            });
         }
      });
   }
}

export { HeaderSubMenu };
