import { initAccordion } from "./components/accordion.js";
// import { CatalogDetail } from './components/catalog-detail.js';
// import { CatalogFilter } from "./components/catalog-filter.js";
// import { Dropdown } from "./components/dropdown.js";
// import { Example } from "./components/example.js";
// import { FooterMenuMasonry } from "./components/footer-menu-masonry.js";
import { lightboxVideo } from "./components/g-lightbox/glightbox-video.js";
// import { glightBoxReviewInit } from "./components/g-lightbox/glightbox-review.js";
import { HeaderMenu } from "./components/header-menu.js";
import { HeaderSubMenu } from "./components/header-submenu.js";
// import { initMap } from "./components/map.js";
// import { ProductCard } from "./components/product-card.js";
// import reviewReadFullInit from "./components/review-read-full.js";
// import { ServicesMenu } from "./components/services-menu.js";
import { header } from "./components/header.js";
import { initSliders } from "./components/slider.js";
import { initTabs } from "./components/tabs.js";
// import { mapsInfo } from "./config/maps-info.js";

function app() {
   console.log(header);
   //    const example = new Example();
   //    example.sayHi();
   //    const footerMenuMasonry = new FooterMenuMasonry();
   const headerMenu = new HeaderMenu();
   const headerSubMenu = new HeaderSubMenu();
   //    new ServicesMenu();
   const allSliders = initSliders();
   //    console.log(allSliders);
   initAccordion();
   initTabs();
   //    const productCards = document.querySelectorAll(".product-card");
   //    productCards.forEach((card) => {
   //       const productCard = new ProductCard(card);
   //    });
   //    mapsInfo.forEach((map) => {
   //       if (map) {
   //          initMap(map.container, map.location);
   //       }
   //    });
   //    const dropdownElements = document.querySelectorAll(".dropdown-list");
   //    dropdownElements.forEach((dropdownElement) => {
   //       new Dropdown(dropdownElement);
   //    });
   //    reviewReadFullInit();
   lightboxVideo();
   //    glightBoxReviewInit();
   //    // Header
   //    //const header = new Header();
   //    const filter = new CatalogFilter();
   //    const catalofDetail = new CatalogDetail();
}

export { app };
