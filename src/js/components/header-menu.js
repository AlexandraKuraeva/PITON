// длина строки общей у элементов меню
//  необходимо для обпеределния ограничения вывод пунктов меню
// если больше этой цифры, то выносим за кнопку "more"
const maxDlina = 103;

class HeaderMenu {
   constructor() {
      this.headerMenu = document.querySelector(".header-menu");
      this.triggers = document.querySelectorAll(".js-header-menu-trigger");

      this.inithandlers();
   }

   inithandlers() {
      this.initTriggerClickHadler();
   }

   initTriggerClickHadler() {
      this.triggers.forEach((el) => {
         el.addEventListener("click", (event) => {
            el.classList.toggle("active");
            this.headerMenu.classList.toggle("active");
         });
      });
   }
}

export { HeaderMenu };
