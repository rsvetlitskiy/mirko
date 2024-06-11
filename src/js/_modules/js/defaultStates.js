import { gsap } from "gsap";
import { DOM } from "../../../../mirko/mirko/src/js/dom";

/**
 * Set defauilt states for UI-elements 
 */
export const setDefault = () => {
  // Show introtext on hero section
  const offset = DOM.introtext.offsetHeight;

  gsap.set(DOM.about, { 
    y: -offset,
  });
}