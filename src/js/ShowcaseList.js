import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
// import { InertiaPlugin } from "gsap/InertiaPlugin";
import { DOM } from "./domElements";

import App from "./App";

gsap.registerPlugin(Observer);
// gsap.registerPlugin(InertiaPlugin);

export class ShowcaseList {
  constructor() {
    this.isAnimating = false;
    this.curentY = 1;
    this.curentIndex = 1;
    this.infiniteSnapIndex = 0;
    this.showcases = DOM.showcasesContent;
    this.showcaseTotal = document.querySelectorAll(".showcase").length;
    this.containerHeight = null;

    this.activeShowcase = document.querySelector("[data-slug='flow']");

    this.activeShowcaseRect = null;
  }

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
   * Initial setup infinite snap scroll
   * @param {*} direction 
   * @returns 
   */
  snapInit() {
    // const node = DOM.showcasesCollection;
    // const clone = node.cloneNode(true);

    // this.showcases.appendChild(clone);

    // gsap.set(this.showcases, { 
    //   yPercent: -50,
    // });

    this.containerHeight = DOM.showcasesContent.clientHeight;
  }

  /**
   * Infinite snap scroll
   * @param {*} direction 
   * @returns 
   */
  infiniteSnap(direction) {
    const isNext = direction === "next";
    const isPrev = direction === "prev";

    let parentElement = DOM.showcasesContent;
    let firstChild = parentElement.firstElementChild;

    // parentElement.appendChild(firstChild);

    parentElement.innerHTML += parentElement.innerHTML;
  }

  /**
   * Showcases snapscroll
   * @param {*} direction 
   * @returns 
   */
  snap(direction, self) {
    const isNext = direction === "next";
    const isPrev = direction === "prev";

    if ((this.isAnimating)) return;

    //if ((isNext && this.curentIndex === this.showcaseTotal) || (isPrev && this.curentIndex === 1)) return;
    //console.log(`Showcase Total: ${this.showcaseTotal}; Showcase Index: ${this.curentIndex};`);

    this.isAnimating = true;

    this.curentY += isNext ? -40 : isPrev ? 40 : 0;

    let tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power2.inOut",
      },
      onComplete: () => {
        this.isAnimating = false;
        this.curentIndex += isNext ? 1 : isPrev ? -1 : 0;

        this.activeShowcaseRect = this.activeShowcase.getBoundingClientRect();

        //console.log(this.containerHeight);
        console.log(this.activeShowcaseRect.top, this.activeShowcaseRect.right, this.activeShowcaseRect.bottom, this.activeShowcaseRect.left);

      },
    });

    tl.to(this.showcases, {
      y: `${this.curentY}svh`,
    });
  }
}