import { Header } from "./components/header.js";

import { initAccordion } from "./components/accordion.js";

import { CatalogDetail } from "./components/catalog-detail.js";

import { lightboxImg } from "./components/g-lightbox/popup-img.js";

import { popupReviewInit } from "./components/g-lightbox/popup-review.js";

import { lightboxVideo } from "./components/g-lightbox/popup-video.js";

import { HeaderMenu } from "./components/header-menu.js";

import { HeaderSubMenu } from "./components/header-submenu.js";

import { initSliders } from "./components/slider.js";

import { initTabs } from "./components/tabs.js";

import initMask from "./components/mask.js";

import { initModal } from "./components/modal/modal.js";

import { Dropdown } from "./components/dropdown.js";

import initDropdownParams from "./components/dropdown-params.js";

import initMap from "./components/map.js";

function app() {
   const header = new Header();

   const headerMenu = new HeaderMenu();

   const headerSubMenu = new HeaderSubMenu();

   const allSliders = initSliders();

   initAccordion();

   initTabs();

   lightboxVideo();

   lightboxImg();

   popupReviewInit();

   const catalofDetail = new CatalogDetail();

   initModal();

   initMask();

   initMap();

   const dropdownElements = document.querySelectorAll(".dropdown-list");

   dropdownElements.forEach((dropdownElement) => {
      console.log(dropdownElement);
      new Dropdown(dropdownElement);
   });

   initDropdownParams();
}

export { app };
