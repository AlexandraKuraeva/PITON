function initTabs() {
   const tabs = document.querySelectorAll(".tab-js-btn");
   const tabsContent = document.querySelectorAll(".tab-js-content");

   tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
         const tabBtn = this.dataset.tab;
         const tabContent = document.querySelector(`[data-tab-content="${tabBtn}"]`);

         tabsContent.forEach((tab) => {
            tab.classList.remove("active");
         });
         tabs.forEach((tab) => {
            tab.classList.remove("active");
         });

         tabContent.classList.add("active");
         this.classList.add("active");
      });
   });
}

export { initTabs };
