import { gsap } from "gsap";

class ShowcaseNav {
  constructor() {
    this.nextBtn = document.querySelector(".nav-btn_next");
    this.prevBtn = document.querySelector(".nav-btn_prev");
  }

  /**
   * Show nav
   */
  show() {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      }
    }, "label");

    tl.add("label", 1);
    
    tl.to(this.nextBtn, {
      xPercent: 0,
      opacity: 1,
    }, "label");

    tl.to(this.prevBtn, {
      xPercent: 0,
      opacity: 1,
    }, "label");
  }

  /**
   * Hide nav
   */
  hide() {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      }
    }, "label");

    tl.add("label", 1);
    
    tl.to(this.nextBtn, {
      xPercent: 120,
      opacity: 0,
    }, "label");

    tl.to(this.prevBtn, {
      xPercent: -120,
      opacity: 0,
    }, "label");
  }
}

export default new ShowcaseNav();