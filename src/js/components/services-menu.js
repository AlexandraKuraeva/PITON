class ServicesMenu {
   constructor() {
      this.menuBtns = document.querySelectorAll(".services-btn");
      this.initHandlers();
   }

   initHandlers() {
      this.clickHandler();
   }

   clickHandler() {
      this.menuBtns.forEach((btn) => {
         btn.addEventListener("click", () => {
            console.log("test");
         });
      });
   }
}

export { ServicesMenu };
