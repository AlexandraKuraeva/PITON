export function lightboxImg() {
   const lightBoxOverview = GLightbox({
      selector: ".overview-glightbox-img",
      closeButton: true,
      loop: false,
   });
   const lightBoxImgProduct = GLightbox({
      selector: ".product-glightbox-img",
      closeButton: true,
      loop: false,
   });
   return { lightBoxOverview, lightBoxImgProduct };
}
