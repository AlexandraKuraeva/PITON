function glightBoxReviewInit() {
   const tmSingleElements = document.querySelectorAll(".review__read-full");
   if (tmSingleElements.length > 0) {
      tmSingleElements.forEach((tmSingle) => {
         tmSingle.addEventListener("click", function () {
            const content = `
                  <div class="text-reviews-popup">
                     <div class="text-reviews-popup__wrapper">
                        <div class="text-reviews-popup__container">
                           <div class="text-reviews-popup__body">
                              <div class="text-reviews-popup__top">
                                 <div class="review__avatar">
                                    <img src="../../images/avatar.jpg" alt="" />
                                 </div>
                                 <div class="review__info">
                                    <div class="review__name">Александр Константинов</div>
                                    <div class="review__desc">HR-менеджер</div>
                                    
                                 </div>
                              </div>
                              <div class="text-reviews-popup__content">
                                 <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis, deleniti maiores dolorum
                                    sit esse architecto rerum dignissimos! Saepe incidunt neque voluptatibus illo, soluta odit ex porro
                                    corporis perferendis repellat, blanditiis veritatis. Odio praesentium deleniti totam labore natus
                                    omnis, ab iste. Iste nostrum vel alias assumenda eum, ipsa rerum at. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Earum blanditiis, deleniti maiores dolorum sit esse architecto rerum
                                    dignissimos! Saepe incidunt neque voluptatibus illo, soluta odit ex porro corporis perferendis
                                    repellat, blanditiis veritatis. Odio praesentium deleniti totam labore natus omnis, ab iste. Iste
                                    nostrum vel alias assumenda eum, ipsa rerum at.
                                 </p>
                              </div>
                              <div class="text-reviews-popup__button">
                                 <a href="##" class="review__company">
                                    <img src="../../images/review/logo.jpg" alt="" />
                                    <span>Мегафон</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               `;

            const lightBox = GLightbox({
               elements: [
                  {
                     content: content,
                  },
               ],
            });

            lightBox.open();
         });
      });
   }
}

export { glightBoxReviewInit };
