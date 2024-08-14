import { header } from "./header.js";


class CatalogFilter {
   constructor() {
      this.filter = document.querySelector('.catalog-filter');
      this.triggers = document.querySelectorAll('.js-catalog-filter-trigger');

      this.initHandlers();

   }

   initHandlers() {
      this.triggers.forEach(trigger => {
         trigger.addEventListener('click', this.triggerBtnClickHandler.bind(this, trigger));
      });
   }



   /**
    * Description
    * @param {HTMLElement} trigger
    * @returns {any}
    */
   triggerBtnClickHandler(trigger) {
      this.filter.classList.toggle('active');
      this.filter.style.top = header.headerHeight + 'px';
   }
}

export { CatalogFilter };