function initMask() {
   const inputsPhone = document.querySelectorAll("input[type=tel]");
   const maskOptions = {
      mask: "+7 (000) 000 00 00",
   };

   Array.from(inputsPhone).forEach((input) => {
      const mask = IMask(input, maskOptions);

      input.addEventListener("click", () => {
         if (input.value === "") {
            input.value = "+7 ";
         }
      });

      input.addEventListener("blur", () => {
         if (input.value === "+7 " || input.value === "+7" || input.value === "" || input.value === "+7 (") {
            input.value = "";
         }
      });
   });
}

export default initMask;
