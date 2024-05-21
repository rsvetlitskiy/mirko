/**
 * Homepage hero section
 */

import { gsap } from "gsap"; // GSAP Core
import { dom } from "../domElements" // Define dom elements

/**
 * Timeline config
 */
let tl = gsap.timeline({
  defaults: {
    duration: 1.8,
    delay: .1,
    ease: "power4.inOut",
  }
});

/**
 * Hide hero section
 */
const heroSectionHide = () => {
  tl.to(dom.hero, {
    opacity: 0,

    onStart: () => {
      console.log("Start hide hero");
    },

    onComplete: () => {
      console.log("Complete hide hero");
    }
  });
}

/**
 * Show hero section
 */
const heroSectionShow = () => {
  tl.to(dom.hero, {
    opacity: 1,

    onStart: () => {
      console.log("Start hide hero");
    },

    onComplete: () => {
      console.log("Complete hide hero");
    }
  });
}