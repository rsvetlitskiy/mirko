import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { DOM } from "./domElements";

import App from "./App";

gsap.registerPlugin(Observer);

export class ShowcaseList {

  /**
   * Display or hide showcase
   * @param { string } option 
   */
  display(option) {
    const isShow = option === "show";
    const isHide = option === "hide";

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
      
      onComplete: () => {}, 
    });

    if (isShow) {
      tl.to(DOM.showcases, { 
        height: "100svh",
      });
    }

    if (isHide) {
      tl.to(DOM.showcases, { 
        height: "0svh",
      });
    }
  }

  /**
   * Showcases snapscroll
   * @param {*} direction 
   * @returns 
   */
  snap(direction) {
    const isNext = direction === "next";
    const isPrev = direction === "prev";

    console.log(this.showcaseTotal);

    if ((this.isAnimating)) return;

    //if ((isNext && this.worksIndex === this.worksTotal) || (isPrev && this.worksIndex === 1)) return;

    this.isAnimating = true;

    this.curentY += isNext ? -50 : isPrev ? 50 : 0;

    let tl = gsap.timeline({
      defaults: {
        duration: 1.1,
        ease: "power2.inOut",
      },
      onComplete: () => {
        this.isAnimating = false;
        this.curentIndex += isNext ? 1 : isPrev ? -1 : 0;
      },
    });

    tl.to(DOM.showcasesContent, { 
      y: `${this.curentY}svh`,
    });
  }
}