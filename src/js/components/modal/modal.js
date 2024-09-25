// Как создать модалку - Обратный звонок
// Кнопке-триггеру добавляем id="trigger-callback-modal"
// Все!

function initModal() {
   const showFancybox = (id) => (e) => {
      e.preventDefault();

      Fancybox.show([
         {
            src: `#${id}`,
         },
      ]);
   };

   const closeFancybox = () => (e) => {
      console.log("close");
      e.preventDefault();

      Fancybox.close();

      Fancybox.show([
         {
            src: `#success-modal`,
         },
      ]);
   };

   Array.from(document.querySelectorAll('[id="trigger-callback-modal"]')).forEach((el) =>
      el.addEventListener("click", showFancybox("callback-modal"))
   );

   //Если при клике нужно отобразить модалку об успешной отправке - нужно кнопке-триггеру добавить id='show-success-modal'

   Array.from(document.querySelectorAll("[id='show-success-modal']")).forEach((el) =>
      el.addEventListener("click", closeFancybox())
   );

   //Вот так добавлять остальные попапы

   if (document.getElementById("trigger-success-modal")) {
      document.getElementById("trigger-success-modal").addEventListener("click", showFancybox("success-modal"));
   }
   if (document.getElementById("trigger-cart-modal")) {
      document.getElementById("trigger-cart-modal").addEventListener("click", showFancybox("cart-modal"));
   }
}

export { initModal };
