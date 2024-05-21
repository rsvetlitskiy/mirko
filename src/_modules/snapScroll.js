import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

import { dom } from "../js/domElements";

let animating = false; // Animation in progress
let worksSnapComplete = false; // Works snap animation complete
let viewportH = window.innerHeight; // Viewpor height
let worksContentPos = 0; // Works y-Possition
let currentIndex = 1; // Current snap index
let currentWorksIndex = 1; // Current snap works index
let totalSnap = dom.snapSections.length; // Total snap sections
let totalWorks = dom.worksSections.length; // Total works sections

/**
 * Set default value
 */
gsap.set(dom.about, {

});

/**
 * Main timeline
 */
let tl = gsap.timeline({
  defaults: {
    duration: 1.8,
    ease: "power4.inOut",
  }
});

/**
 * Hero timeline
 */
let tlHero = gsap.timeline({
  defaults: {
    duration: 1.8,
    delay: .1,
    ease: "power4.inOut",
  }
});

/**
 *  Works timeline
 */
let tlWorks = gsap.timeline({
  defaults: {
    duration: 1.8,
    ease: "power4.inOut",
  }
});

/**
 * Hide hero section
 */
const hideHero = () => {
  tlHero.to(dom.hero, {
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
 * Show works section
 */
const showWorks = () => {
  tl.to(dom.works, {
    y: -viewportH,

    onStart: () => {

    },

    onComplete: () => {
      // Update index
      currentIndex++;

      // Enabled events
      animating = false;
    }
  });
}

/**
 * Snap works
 */

 // Check current works index
let checkIndex = () => {
  if (currentWorksIndex >= 1) {
    return false;
  }
}

const snapWorks = (direction) => {
  // Snap prev
  if (direction == "prev" && checkIndex()) {
    worksContentPos += viewportH;
  }

  // Snap next
  if (direction == "next") {
    worksContentPos -= viewportH;
  }

  tlWorks.to(dom.worksContent, {
    // Set works content possition
    y: worksContentPos,

    // On start
    onStart: () => {
      
    },

    // On completed
    onComplete: () => {
      // Update works index
      if (direction == "prev") {
        currentWorksIndex--;
      }

      if (direction == "next") {
        currentWorksIndex++;
      }

      // Enabled events
      animating = false;
    }});
}

/**
 *  Snap to next section
 */
const snapNext = () => {
  // Desabled events
  animating = true;

  // Show works section
  if (currentIndex === 1) {
    hideHero();
    showWorks();
  }

  // Snap works sections
  if (currentIndex === 2) {
    snapWorks("next");
  }
}

/**
 * Snap to prev section
 */
const snapPrev = () => {

}