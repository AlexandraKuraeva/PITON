function glightBoxImgInit() {
   const nextBtn = document.querySelector(".slider-documents-images__nav.swiper-btn-next");
   const prevBtn = document.querySelector(".slider-documents-images__nav.swiper-btn-prev");
   if (nextBtn && prevBtn) {
      const closeBtn = `<div class="btn-close">
		<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.9351 0.935547L10.4351 10.4355M10.4351 10.4355L0.935059 19.9355M10.4351 10.4355L19.9351 19.9355M10.4351 10.4355L0.935059 0.935547" stroke="white"/>
		</svg>
		</div>
		`;

      const customLightboxHTML = `
		<div id="glightbox-body" class="glightbox-container glightbox-img-popup">
		<div class="gloader visible"></div>
		<div class="goverlay green-overlay"></div>
		<div class="gcontainer">
			 <div class="glightbox__wrapper">
			 <div class="glightbox__body">
					<div id="glightbox-slider" class="gslider"></div>
					  <div class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">
					  ${nextBtn.outerHTML}
					  </div>
					  <div class="gprev gbtn" tabindex="1" aria-label="Previous">${prevBtn.outerHTML}</div>
					  <div class="gclose gbtn" tabindex="2" aria-label="Close">${closeBtn}</div>
			 </div>
			 </div>
		</div>
		</div>`;

      const glightbox = GLightbox({
         lightboxHTML: customLightboxHTML,
         skin: "supercool",
	
      });
   }
}

export { glightBoxImgInit };
