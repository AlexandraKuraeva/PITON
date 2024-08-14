function initAccordion() {
   const accordion = document.querySelector(".accordion") || null;

   if (accordion) {
      const accordionItems = accordion.querySelectorAll(".accordion__f-a-q");

      accordionItems.forEach((item) => {
         const question = item.querySelector(".accordion__question");

         question.addEventListener("click", () => {
            const question = item.querySelector(".accordion__question");
            if (question.classList.contains("is-open")) {
               question.classList.remove("is-open");
               return;
            }
            accordionItems.forEach((item) => {
               const question = item.querySelector(".accordion__question");
               question.classList.remove("is-open");
            });

            question.classList.add("is-open");
         });
      });
   }
}

export { initAccordion };
