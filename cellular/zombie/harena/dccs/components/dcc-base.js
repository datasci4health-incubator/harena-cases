/**
 * DCC which is the basis of all components
 */

class DCCBase extends HTMLElement {
   constructor() {
      super();
      this.edit = this.edit.bind(this);
   }

   static get observedAttributes() {
      return ["id", "author"];
   }

   get id() {
      return this.getAttribute("id");
   }
   
   set id(newValue) {
      this.setAttribute("id", newValue);
   }
   
   get author() {
      return this.hasAttribute("author");
   }

   set author(isAuthor) {
      if (isAuthor)
         this.setAttribute("author", "");
      else
         this.removeAttribute("author");
   }

   edit() {
      /* nothing */
   }

   // serializes the component in HTML
   toHTML() {
      return this.outerHTML();
   }
}