export function lightboxVideo() {
   const lightBoxVideo = GLightbox({
      touchNavigation: true,
      autoplayVideos: false,
      selector: ".glightbox-video",
   });
   return lightBoxVideo;
}
