import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { DOM } from "./domElements";

//import App from "./app";

gsap.registerPlugin(Observer);

/**
 *
 * @param {*} option 
 */
export class Showcase {
  constructor() {
    this.showcaseItem = null;
  }

  /**
   * 
   * @param {*} option 
   */
  getTargetShowcase = (showcase) => {
    this.targetItem = document.querySelector(showcase);
  }

  /**
   * 
   * @param {*} option 
   */
  display(option) {
    const isShow = option === "show";
    const isHide = option === "hide";

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
      
      onComplete: () => {console.log(App.currentState)},
    });

    if (isShow) {
      tl.to(DOM.showcaseItem, { 
        height: "100svh",
      });
    }

    if (isHide) {
      tl.to(DOM.showcaseItem, { 
        height: "0svh",
      });
    }
  }
}