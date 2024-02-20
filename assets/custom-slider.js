class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideEl = this.querySelector(".splide");
    this.options = JSON.parse(this.splideEl.dataset.sliderOptions);
    this.mountSplider();
  }

  mountSplider() {
    new Splide(this.splideEl,this.options).mount();
  }
}

customElements.define("custom-slider", CustomSlider);