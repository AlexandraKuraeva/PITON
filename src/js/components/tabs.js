function initTabs() {
   const tabsButtons = document.querySelectorAll(".js-tabs__button");

   tabsButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
         const prevActiveItem = document.querySelector(".js-tabs__item._active");

         const prevActiveButton = document.querySelector(".js-tabs__button._active");

         if (prevActiveButton) {
            prevActiveButton.classList.remove("_active");
         }
         if (prevActiveItem) {
            prevActiveItem.classList.remove("_active");
         }

         const nextActiveItemId = `#${btn.getAttribute("data-tab")}`;
         const nextActiveItem = document.querySelector(nextActiveItemId);

         btn.classList.add("_active");
         nextActiveItem.classList.add("_active");
      });
   });
}

export { initTabs };
