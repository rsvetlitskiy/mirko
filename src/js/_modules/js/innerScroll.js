import { gsap } from "gsap";
import { utils } from "./utils";

//import { currentPage } from "./router";



export class InnerScroll {
  /**
   * Flag to detect if an animation is running.
   * @type {boolean}
   */
  isAnimating = false;

  scrollProgress = 0

  constructor(options) {
    this.container = options.container;
    this.containerHeight = this.container.offsetHeight;
    this.visibleHeight = Math.min(utils.vieportHeight, this.containerHeight);
    this.maxY = utils.vieportHeight - this.visibleHeight;
  }

  /**
   * Inner scroll.
   * @param {string} direction scroll-down or scroll-top.
   */
  scroll(direction){
    const isDown = direction === "scroll-down";
    const isTop = direction === "scroll-top";

    console.log(`${this.containerHeight}, ${this.visibleHeight}, ${this.maxY}`);

    //if ((isNext && this.currentIndex === this.tatalSnaps)) return;

    //this.currentY += isNext ? -124 : isPrev ? 124 : 0;

    gsap.to(this.container, { 
      y: this.scrollProgress -= 10,
      ease: "none",
    });
  }
}