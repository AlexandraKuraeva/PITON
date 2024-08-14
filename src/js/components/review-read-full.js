function reviewReadFullInit() {
  

   const reviewsList = document.querySelectorAll(".reviews-text__item");
   reviewsList.forEach((item) => {
      const reviewContent = item.querySelector(".review__overflow-body");
      const reviewWrapper = item.querySelector(".review__overflow");
      const readFullBtn = item.querySelector(".review__read-full");

      const heightContent = reviewContent.offsetHeight;
      const heightWrapper = reviewWrapper.offsetHeight;

      if (heightContent > heightWrapper) {
         readFullBtn.style.display = "inline-block";
         reviewWrapper.classList.add("overlay");
      } else {
         readFullBtn.style.display = "none";
         reviewWrapper.classList.remove("overlay");
      }
   });
}

export default reviewReadFullInit;
