export function lightboxVideo() {
   const lightBoxVideo = GLightbox({
      touchNavigation: true,
      autoplayVideos: false,
      selector: ".glightbox-video",
   });
   return lightBoxVideo;
}

export function lightboxImg() {
   const lightBoxVideo = GLightbox({
      selector: ".glightbox-img",
      loop: false,
   });
   return lightBoxVideo;
}
