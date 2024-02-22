class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.productHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;

    this.variantData = JSON.parse(this.querySelector("script").textContent);
   
    // Attach event listeners
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.querySelectorAll(".product-card__swatch").forEach(swatch => {
      swatch.addEventListener('mouseover', this.onHoverVariantChange.bind(this));
    });
  }

  onHoverVariantChange() {
    this.optionName = event.target.dataset.optionValue;
    this.currentVariant = this.variantData.find((item) => item.title === this.optionName);

    const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;

    console.log(url);

    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, "text/html");
        this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
        // Reattach event listeners after updating content
        setTimeout(() => {
          this.attachEventListeners();
        }, 100);
      });
  }
}