import { gsap } from "gsap";

class Nav {
  /**
   * Display mod for showcases close btn. 
   * @param {any} action - "show" or "hide"
   */

  constructor() {
    this.navItemsContainer = ".header__nav";
    this.closeBtn = ".header__close-btn";
  }

  /**
   * Show close button
   */
  showCloseBtn() {
    let tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power2.inOut",
      }
    });

    tl.to(this.navItemsContainer, {
      xPercent: 100,
      opacity: 0,
    }, "lb");

    tl.add("lb", 0.2);

    tl.to(this.closeBtn, {
      translateX: 0,
      opacity: 1,
    }, "lb");
  }

  /**
   * Hide close button
   */
  hideCloseBtn() {
    let tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power2.inOut",
      }
    });

    tl.to(this.closeBtn, {
      translateX: 100,
      opacity: 0,
    }, "lb");

    tl.add("lb", 0.2);

    tl.to(this.navItemsContainer, {
      xPercent: 0,
      opacity: 1,
    }, "lb");
  }
}

export default new Nav();