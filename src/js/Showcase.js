import AppState from "./AppState";
import { gsap } from "gsap";
import Nav from "./Nav";
import ShowcaseNav from "./ShowcaseNav";
import { Overlay } from "./PageTransition";
import { DOM } from "./dom";

const overlayEl = document.querySelector('.overlay');

const overlay = new Overlay(overlayEl, {
  rows: 24,
  columns: 1,
  duration: 0.7,
  each: 0.02
});

export class Showcase {
  constructor() {
    this.activeShowcase;
    this.activeShowcaseSlug;
    this.activeClassName = "showcase_active";
  }

  /**
   * Set active showcase
   * @param {any} slug
   * @returns {any}
   */
  setActive(slug) {
    this.activeShowcaseSlug = slug;
    this.activeShowcase = DOM.showcaseList.querySelector(`[data-slug="${this.activeShowcaseSlug}"]`);
    this.activeShowcase.classList.toggle(this.activeClassName);
  }

  /**
   * Reset active showcase
   * @returns {any}
   */
  resetActive() {
    DOM.showcaseItem.forEach(e => e.classList.toggle(this.activeClassName));
  }

  /**
   * Disable moving to the no active showcase.
   */
  disableLinks() {
    const links = document.querySelectorAll(".showcase-link");
    gsap.set(links, {
      height: 0,
    });
  }

  /**
   * Enable moving to the no active showcases.
   */
  enableLinks() {
    const links = document.querySelectorAll(".showcase-link");
    gsap.set(links, {
      height: "100%",
    });
  }

  /**
   * Show featured showcase
   * @param {any} slug - data-slug of active showcase
   * @returns {any}
   */
  showFeatured(slug) {
    this.setActive(slug);
    this.disableLinks();
    overlay.show();
    Nav.showCloseBtn();

    // Animation timeline
    const tl = gsap.timeline({delay: 1.3});

    // Display showcase
    tl.set(this.activeShowcase, {
      height: "auto",
      display: "flex",
      marginBottom: 0,
    });

    // Display list
    tl.set(DOM.showcaseList, {height: "100svh"});
  }

  /**
   * Hide featured showcase
   */
  hideFeatured() {
    this.resetActive();
    this.enableLinks();

    overlay.show();
    Nav.hideCloseBtn();

    // Animation timeline
    const tl = gsap.timeline({delay: 1.2});

    // Hide showcase
    tl.set(DOM.showcaseItem, {
      height: "0",
      display: "none",
      marginBottom: "8svh",
    });

    // Hide list 
    tl.set(DOM.showcaseList, {height: "0"});
  }
}