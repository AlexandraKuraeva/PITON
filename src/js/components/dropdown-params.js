function initDropdownParams() {
   const dropdownElement = document.querySelector(".params-list-dropdown");
   const dropdownBtn = document.querySelector(".params-list-dropdown-btn");
   const dropdownBody = document.querySelector(".params-list-dropdown-body");

   if (dropdownBtn) {
      dropdownBtn.addEventListener("click", function () {
         if (isOpen(this)) {
            closeDropdown(this);
         } else {
            openDropdown(this);
         }
      });
   }

   function isOpen() {
      return dropdownBtn.classList.contains("open");
   }

   function closeDropdown() {
      dropdownBody.classList.remove("show");
      dropdownBtn.classList.remove("open");
   }

   function openDropdown() {
      dropdownBody.classList.add("show");
      dropdownBtn.classList.add("open");
   }
}

export default initDropdownParams;
