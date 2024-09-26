import { btnClose, nextArrow, prevArrow } from "./html-fragments.js";

/* TODO: 
  На сайте есть два блока с отзывами. Оба блока должны иметь функционал попап.
  Тут описана логика для открытия текстового отзыва. 

  Нужно написать логику для блока с фоном на всю ширину.
  Можно конечно написать точно также, но с другими классами. Но это будет дублирование кода.
 */

function popupReviewInit() {
   const customLightboxHTML = `
	   <div id="glightbox-body" class="glightbox-container glightbox-reviews-popup">
	 		<div class="gloader visible"></div>
	 		<div class="goverlay grey-overlay"></div>
	 		<div class="gcontainer">
		
		      <div id="glightbox-slider" class="gslider"></div>
											
			   <div class="gprev gbtn swiper-button__prev image-slider__prev " tabindex="1" aria-label="Previous">${prevArrow}</div>
			   <div class="gnext gbtn  swiper-button__next image-slider__next " tabindex="0" aria-label="Next">${nextArrow}</div>					
            <div class="gclose gbtn reviews-popup__close" tabindex="2" aria-label="Close">${btnClose}</div>	
			   					
	 		</div>
	 	</div>`;

   const lightBox = GLightbox({
      skin: "reviews-popup",

      lightboxHTML: customLightboxHTML,
   });

   const listLinksReviews = document.getElementsByClassName("review-tile__more");

   const slides = [];

   Array.from(listLinksReviews).forEach((link, index) => {
      // Врапер для текстового отзыва
      const contentWrapper = link.closest(".review-tile");
      console.log(link);

      // Врапер для отзыва с фоном на всю ширину
      //

      if (contentWrapper) {
         const image = contentWrapper.querySelector(".review-tile__avatar img").src;
         const name = contentWrapper.querySelector(".review-tile__name").innerHTML;
         const date = contentWrapper.querySelector(".review-tile__date").innerHTML;
         const content = contentWrapper.querySelector(".review-tile__content").innerHTML;

         const contentPopup = `
				<div class="review-popup">
				
               <div class="review-popup__wrapper">
     
                  <div class="review-popup__body">
                     <div class="review-popup__top">
                        <div class="review-popup__img"><img src="../../../images/product-card/logo.png" /></div>

                        <div class="review-popup__info">
                           <div class="review-popup__name">${name}</div>
                           <div class="review-popup__subname">Директор по техническим решениям</div>
                        </div>
                     </div>
                     <div class="review-popup__main">
                        <div class="review-popup__footer">
                           <div class="review-popup__rating">
                              <span> <img src="../../images/product-card/star-red.svg" alt="" /></span>
                              <span> <img src="../../images/product-card/star-red.svg" alt="" /></span>
                              <span> <img src="../../images/product-card/star-red.svg" alt="" /></span>
                           </div>
                           <div class="review-popup__date">${date}</div>
                        </div>
                        <div class="review-popup__content">${content}</div>
                     </div>
                  </div>
               </div>
            </div>
			`;

         slides.push({ content: contentPopup });

         link.addEventListener("click", function () {
            lightBox.setElements([...slides]);

            lightBox.openAt(index);
         });
      } else if (true) {
         // Логика для отзыва с фоном на всю ширину
      }
   });
}

export { popupReviewInit };
