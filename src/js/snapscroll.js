import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { DOM } from "./domElements";
import { utils } from "./utils";
import { Hero } from "./Hero";

gsap.registerPlugin(Observer);

const hero = new Hero();

/**
 * Snap class - Navigation functionality including snap-scroll, routing, and animations.
 * @export
 */
export class Snap {

  /**
   * Flag to detect if an animation is running.
   * @type {boolean}
   */
  isAnimating = false;

  /**
   * Flag to detect if the current slide is the first one.
   * @type {boolean}

  /**
   * Total number of snap sections.
   * @type {number}
   */
  snapsTotal = DOM.snapSections.length;

  /**
   * Index of the current slide being displayed.
   * @type {number}
   */
  currentSnapIndex = 1;

  /**
   * Current Y position of the snap sections.
   * @type {number}
   */
  worksCurrentY = 0;

  /**
   * Total number of works sections.
   * @type {number}
   */
  worksTotal = DOM.worksSections.length;

  /**
   * Index of the current works section index.
   * @type {number}
   */
  worksIndex = 1;

  /**
   * Change the opacity of a given DOM object based on its state.
   * @param {HTMLElement} element - The DOM element to change.
   * @param {string} state - Can be either "active" or "inactive".
   * @param {number} activeOpacity - The opacity level for the "active" state.
   * @param {number} inactiveOpacity - The opacity level for the "inactive" state.
   */
  changeOpacity(element, state, activeOpacity = 1, inactiveOpacity = 0.08) {
    const isActive = state === "active";
    const isInactive = state === "inactive";

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
    });

    if (isActive) {
      tl.to(element, { opacity: activeOpacity });
    }

    if (isInactive) {
      tl.to(element, { opacity: inactiveOpacity });
    }
  }

  // Hero Section 
  // --------------------------------------

  /**
   * Change introtext DOM-object state.
   * @param {string} state - Can be either "active" or "inactive".
   */
  introtextState(state) {
    this.changeOpacity(DOM.introtext, state);
  }

  /**
   * Change hero-title DOM-object state.
   * @param {string} state - Can be either "active" or "inactive".
   */
  heroTitleState(state) {
    this.changeOpacity(DOM.heroTitle, state);
  }

  // Works Section 
  // --------------------------------------

  /**
   * Show or hide the works section.
   * @param {string} action - Can be either "show" or "hide".
   */
  worksDisplay(action) {
    const isShow = action === "show";
    const isHide = action === "hide";
    this.isAnimating = true;

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
      onStart: () => {
        if (isHide) {
          this.introtextState("active");
          this.heroTitleState("active");
        }

        if (isShow) {
          this.introtextState("inactive");
          this.heroTitleState("inactive");
        }
      },
      onComplete: () => {
        this.isAnimating = false;
        this.currentSnapIndex += isShow ? 1 : isHide ? -1 : 0;
      },
    });

    if (isShow) {
      tl.to(DOM.works, { y: "-100svh" });
    }

    if (isHide && this.currentSnapIndex === 2) {
      tl.to(DOM.works, { y: 0 });
    }
  }

  /**
   * Show or hide the works section after works snaps is completed
   * @param {string} action - Can be either "show" or "hide".
   */
  worksReverse(action) {
    const isShow = action === "show";
    const isHide = action === "hide";
    this.isAnimating = true;

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
      onStart: () => {},
      onComplete: () => {
        this.isAnimating = false;
      },
    });

    if (isShow) {
      tl.to(DOM.works, { y: "-100svh" });
    }

    if (isHide) {
      tl.to(DOM.works, { y: "-200svh" });
    }
  }

  /**
   * Snap works sections.
   * This method is used to handle the animation of the works sections.
   * @param {string} direction - Can be either "next" or "prev".
   */
  snapWorks(direction) {
    const isNext = direction === "next";
    const isPrev = direction === "prev";

    if ((isNext && this.worksIndex === this.worksTotal) || (isPrev && this.worksIndex === 1)) return;

    this.isAnimating = true;

    this.worksCurrentY += isNext ? -124 : isPrev ? 124 : 0;

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
      onComplete: () => {
        this.isAnimating = false;
        this.worksIndex += isNext ? 1 : isPrev ? -1 : 0;
      },
    });

    tl.to(DOM.worksContent, { 
      y: `${this.worksCurrentY}svh`,
    });
  }
  
  // About Section 
  // --------------------------------------

  /**
   * Show or hide about section.
   * @param {string} action - Can be either "show" or "hide".
   */
  aboutDisplay(action) {
    const isShow = action === "show";
    const isHide = action === "hide";
    this.isAnimating = true;

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
      onStart: () => {},
      onComplete: () => {
        this.isAnimating = false;
        this.currentSnapIndex += isShow ? 1 : isHide ? -1 : 0;
      },
    });

    if (isShow) {
      tl.to(DOM.about, { y: "-100svh" });
    }

    if (isHide) {
      tl.to(DOM.about, { y: 0 });
    }
  }

  /**
   * Index of the current about section index.
   * @type {number}
   */
  aboutSnapIndex = 1;
  
  /**
   * Snap about inner content.
   * This method is used to handle the animation of the inner content in about section.
   * @param {string} direction - Can be either "next" or "prev".
   */
  snapAbout(direction) {
    const isNext = direction === "next";
    const isPrev = direction === "prev";
    const snapHeight = DOM.aboutContent.offsetHeight - utils.vieportHeight;
    let newY = 0;
  
    if ((isNext && this.aboutSnapIndex === 2) || (isPrev && this.aboutSnapIndex === 1)) return;

    this.isAnimating = true;

    newY += isNext ? -snapHeight : isPrev ? snapHeight : 0;

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
      
      onComplete: () => {
        this.isAnimating = false;
        this.aboutSnapIndex += isNext ? 1 : isPrev ? -1 : 0;
      },
    });

    tl.to(DOM.aboutContent, { 
      y: newY,
    });
  }

  // Snap routing
  // --------------------------------------

  /**
   * Handle the next snap action.
   */
  onSnapNext() {
    // Hide hero and show works
    if (this.currentSnapIndex === 1) {
      this.worksDisplay("show");
      hero.display("hide");
    }

    // Snap works
    if (this.currentSnapIndex === 2) {
      this.snapWorks("next");
    }

    // Show about
    if (this.currentSnapIndex === 2 && this.worksIndex === this.worksTotal) {
      this.aboutDisplay("show");
    }

    // About inner snap
    if (this.currentSnapIndex === 3) {
      this.snapAbout("next");
    }
  }

  /**
   * Handle the previous snap action.
   */
  onSnapPrev() {
    // Hide works and show hiro
    if (this.currentSnapIndex === 2 && this.worksIndex === 1) {
      this.worksDisplay("hide");
      hero.display("show");
    } 

    // Snap works reverse
    if (this.currentSnapIndex === 2) {
      this.snapWorks("prev");
    }

     // Hide about and hide (complete) works
    if (this.currentSnapIndex === 3) {
      this.aboutDisplay("hide");
    }
  }

  /**
   * Move to the next screen.
   */
  next() {
    if ((this.isAnimating)) return;
    this.onSnapNext();
  }

  /**
   * Move to the previous screen.
   */
  prev() {
    if ((this.isAnimating)) return;
    this.onSnapPrev();
  }
}