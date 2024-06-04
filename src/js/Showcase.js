import AppState from "./AppState";
import { gsap } from "gsap";
import Nav from "./Nav";
import ShowcaseNav from "./ShowcaseNav";
import { Overlay } from "./PageTransition";


const overlayEl = document.querySelector('.overlay');



const overlay = new Overlay(overlayEl, {
    rows: 24,
    columns: 1
});

class Showcase {
  constructor() {
    this.showcaseList = document.querySelector(".showcases");
  }

  /**
   * Scroll to active showcase.
   * @param {any} slug - Target data-slug of active showcase
   * @returns {any}
   */
  moveToActive(slug) {
    const activeShowcase = this.showcaseList.querySelector(`[data-slug="${slug}"]`);
    activeShowcase.scrollIntoView();
  }

  showActive(slug) {
    const activeShowcase = this.showcaseList.querySelector(`[data-slug="${slug}"]`);
    
    gsap.set(activeShowcase, {
      height: "auto",
      visibility: "visible",
      display: "flex"
    });
  }

  

  /**
   * Disable moving to the no active showcases.
   */
  disableLinks() {
    const showcaseLink = ".showcase-link";
    const links = document.querySelectorAll(showcaseLink);
    gsap.set(links, {
      height: 0,
    });
  }

  /**
   * Enable moving to the no active showcases.
   */
  enableLinks() {
    const showcaseLink = ".showcase-link";
    const links = document.querySelectorAll(showcaseLink);
    gsap.set(links, {
      height: "100%",
    });
  }

  /**
   * Show favorite showcase.
   * @param {string} slug - Active showcase data-slug.
   * @returns {any}
   */
  showList() {
    gsap.set(this.showcaseList, { height: "100svh", });
  }

  /**
   * Hide favorite showcase.
   * @returns {any}
   */
  hideList() {
    gsap.set(this.showcaseList, { height: "0", });
  }

  /**
   * Animation before display showcase.
   * @returns {any}
   */
  proload(option) {
    const isNext= option === "next";
    const isBack= option === "back";

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power2.inOut",
        //rotate: "5deg"
      },
      onComplete: () => {},
    });

    if (isNext) {
      tl.to(".works-canvas", {
        opacity: 0,
        scaleY: 1.4,
        //rotate: "5deg"
      });
  
      gsap.to(".staic-title", {
        duration: 1.5,
        ease: "power2.inOut",
        opacity: 0,
        y: "20vh",
        scaleY: 1.4,
      });
    }

    if (isBack) {
      tl.to(".works-canvas", {
        opacity: 1,
        scaleY: 1,
        //rotate: "5deg"
      }, 1.4);
  
      gsap.to(".staic-title", {
        duration: 1.5,
        ease: "power2.inOut",
        opacity: 1,
        y: "20vh",
        scaleY: 1,
      }, 1.4);
    }
  }

  /**
   * Set default all shiwcases view.
   * @param {string} ption - "showcase"" or "preview".
   * @returns {any}
   */
  setViewForAll(option) {
    const isShowcase = option === "showcase";
    const isPreview = option === "preview";
    const showcaseDetails =  ".showcase-details";
    const showcaseInfo =  ".showcase-details-info";
    const showcaseGallery =  ".showcase-gallery";

    // Hide showcase details
    if (isPreview) {
      gsap.set(showcaseDetails, {
        height: "0svh",
      });

      gsap.set(showcaseInfo, {
        width: "0",
      });

      gsap.set(".showcase-gallery", {
        height: "30svh",
      });
    }

    // Show showcase details
    if (isShowcase) {
      gsap.set(showcaseDetails, {
        height: "40svh",
      });

      gsap.set(showcaseInfo, {
        width: "100%",
      });

      gsap.set(showcaseGallery, {
        height: "60svh",
      });
    }
  }

  /**
   * Show favorite showcase
   * @param {string} slug - showcase data-slug 
   */
  showFavorite(slug) {
    overlay.show();
    this.disableLinks(); // Disable links to all showcases

    setTimeout(() => {
      this.showList();  // Show list of showcase
      //this.moveToActive(slug); // Scroll to active showcase
      this.showActive(slug)
    }, 1200);

    Nav.showCloseBtn(); // Show close btn

    setTimeout(() => {
      ShowcaseNav.show();
    }, 1300);
  }

  /**
   * Hide favorite showcase
   */
  hideFavorite() {
    ShowcaseNav.hide();
    overlay.show();
    this.enableLinks();

    setTimeout(() => {
      Nav.hideCloseBtn();
      this.hideList();
    }, 1200);
  }
}

export default new Showcase();