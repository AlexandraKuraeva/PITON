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
   const lightBoxImgReview = GLightbox({
      selector: ".review-glightbox-img",
      closeButton: true,
   });
   return { lightBoxOverview, lightBoxImgProduct, lightBoxImgReview };
}
