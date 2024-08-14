class ProductCard {
   /**
    * Assign the project to an employee.
    * @param {HTMLElement} card - The employee who is responsible for the project.
    */
   constructor(card) {
      this.card = card;
      this.initFields();
      this.initHandlers();
   }

   initFields() {
      this.favouriteBtn = this.card.querySelector(".product-card__favourite");
      this.countIncrease = this.card.querySelector(".product-card__count-increase");
      this.countField = this.card.querySelector(".product-card__count-value input");
      this.countDecrease = this.card.querySelector(".product-card__count-decrease");
      this.cartBtn = this.card.querySelector(".product-card__btn");
   }

   initHandlers() {
      this.favouriteBtnClickHandler();
      this.incrementHandler();
      this.decrementHandler();
      // this.cartBtnhandler();
   }

   favouriteBtnClickHandler() {
      this.favouriteBtn.addEventListener("click", () => {
         // запрос
         this.favouriteBtn.classList.toggle("active");
      });
   }

   incrementHandler() {
      this.countIncrease.addEventListener("click", () => {
         // request
         this.countField.value = +this.countField.value + 1;
      });
   }

   cartBtnhandler() {
      this.cartBtn.addEventListener("click", () => {
         // request
         if (this.cartBtn.classList.contains("active")) {
            this.cartBtn.classList.remove("active");
            this.cartBtn.innerHTML = "В корзину";
         } else {
            this.cartBtn.classList.add("active");
            this.cartBtn.innerHTML = `
               <svg style="margin-right: 10px;" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 6L5.36364 10L13 3" stroke="white" stroke-width="1.00001"/>
               </svg>Просмот корзины
            `;
         }
      });
   }

   decrementHandler() {
      this.countDecrease.addEventListener("click", () => {
         // request
         if (this.countField.value > 0) {
            this.countField.value = +this.countField.value - 1;
         }
      });
   }
}

export { ProductCard };
