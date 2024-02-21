
// // Variant selection with variants
// class ProductCard extends HTMLElement {
//   constructor() {
//     super();

//     this.productHandle = this.dataset.productHandle;
//     this.sectionId = this.dataset.sectionId;
    
//     this.variantData = JSON.parse(this.querySelector('script').textContent);
//     this.addEventListener('change', this.onVariantChange);
//   }

//   onVariantChange() {
//     this.selectedVariant = this.querySelector('[name="id"]').value;
//     this.getCurrentVariant();
//   }

//   getCurrentVariant() {  
//     this.currentVariant = this.variantData.find(variant => variant.id == this.selectedVariant);
//     this.getUpdatedCard();
//   }

//   getUpdatedCard() {
//     const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;
//     console.log("section id: ",this.sectionId)
//     fetch(url)
//       .then((response) => response.text())
//       .then((responseText) => {
//         const html = new DOMParser().parseFromString(responseText, "text/html");
//         this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
//       });
//   }
// }

// // customElements.define('product-card', ProductCard);


// // Variant selection with options
// class ProductCard extends HTMLElement {
//   constructor() {
//     super();

//     this.productHandle = this.dataset.productHandle;
//     this.sectionId = this.dataset.sectionId;

//     this.variantData = JSON.parse(this.querySelector("script").textContent);
//     this.addEventListener("change", this.onOptionChange);
//   }

//   onOptionChange() {
//     console.log("started");
//     this.selectedOptions = Array.from(
//       this.querySelectorAll('input[type="radio"]:checked'),
//       (input) => input.value
//     );
//     this.currentVariant = this.variantData.find(
//       (item) =>
//         JSON.stringify(item.options) == JSON.stringify(this.selectedOptions)
//     );

//     this.getUpdatedCard();
//   }

//   getUpdatedCard() {
//     console.log(this.sectionId)
//     const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;

//     fetch(url)
//       .then((response) => response.text())
//       .then((responseText) => {
//         const html = new DOMParser().parseFromString(responseText, "text/html");
//         this.innerHTML = html.querySelector(
//           `[data-product-handle="${this.productHandle}"]`
//         ).innerHTML;
//       });
//     conosle.log("fetched");
//   }
// }

// customElements.define("product-card", ProductCard);



// // class ProductCard extends HTMLElement {
// //     constructor() {
// //       super();
  
// //       this.productHandle = this.dataset.productHandle;
// //       this.sectionId = this.dataset.sectionId;
  
// //       this.variantData = JSON.parse(this.querySelector("script").textContent);
// //       this.addEventListener("mouseover", this.onOptionHover.bind(this));
// //     }
  
// //     onOptionHover(event) {
// //       const hoveredInput = event.target.closest('input[type="radio"]');
// //       if (!hoveredInput) return;
  
// //       console.log("started");
// //       this.selectedOptions = Array.from(
// //         this.querySelectorAll('input[type="radio"]:checked'),
// //         (input) => input.value
// //       );
// //       this.selectedOptions[this.selectedOptions.indexOf(hoveredInput.value)] = hoveredInput.value; // Update the hovered input value
// //       this.currentVariant = this.variantData.find(
// //         (item) =>
// //           JSON.stringify(item.options) === JSON.stringify(this.selectedOptions)
// //       );
  
// //       this.getUpdatedCard();
// //     }
  
// //     getUpdatedCard() {
// //       console.log(this.sectionId)
// //       const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;
  
// //       fetch(url)
// //         .then((response) => response.text())
// //         .then((responseText) => {
// //           const html = new DOMParser().parseFromString(responseText, "text/html");
// //           this.innerHTML = html.querySelector(
// //             `[data-product-handle="${this.productHandle}"]`
// //           ).innerHTML;
// //         });
// //       console.log("fetched");
// //     }
// //   }
  
// //   customElements.define("product-card", ProductCard);
  
  