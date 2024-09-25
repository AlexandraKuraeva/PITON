class Dropdown {
   constructor(dropdownElement) {
      this.dropdownElement = dropdownElement;
      this.buttonElement = dropdownElement.querySelector(".dropdown-list-btn");
      this.bodyElement = dropdownElement.querySelector(".dropdown-list-body");

      this.buttonElement.addEventListener("click", () => {
         this.toggleDropdown();
      });
   }

   toggleDropdown() {
      if (this.isOpen()) {
         this.closeDropdown();
      } else {
         this.openDropdown();
      }
   }

   isOpen() {
      return this.buttonElement.classList.contains("open");
   }

   openDropdown() {
      this.bodyElement.classList.add("show");
      this.buttonElement.classList.add("open");
   }

   closeDropdown() {
      this.bodyElement.classList.remove("show");
      this.buttonElement.classList.remove("open");
   }
}

export { Dropdown };
