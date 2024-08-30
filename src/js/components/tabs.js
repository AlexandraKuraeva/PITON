function initTabs() {
   const tabsButtons = document.querySelectorAll(".js-tabs__button");
   console.log(tabsButtons);

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

// export default function () {

//    let tabsWarp = document.getElementsByClassName('tabs');

//    Array.from(tabsWarp).forEach(function (currentTabsWarp) {

//        let Tabs = currentTabsWarp.getElementsByClassName('js-tab-links__link');

//        let Panes = currentTabsWarp.getElementsByClassName('tabs-content__item');

//        Array.from(Tabs).forEach(tab => tab.addEventListener('click', function(e){

//            let index = Array.from(Tabs).indexOf(this);

//            [].forEach.call(Tabs, function(el) {
//                el.classList.remove("is-active");
//            });

//            [].forEach.call(Panes, function(el) {
//                el.classList.remove("is-active");
//            });

//            this.classList.add('is-active');

//            Panes[index].classList.add('is-active');

//            e.preventDefault();
//        }));
//    });

// }
