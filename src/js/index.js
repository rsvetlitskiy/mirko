import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { Router } from "./Router";
import { Snap } from "./snapscroll";
import App from "./App";
import { ShowcaseList } from "./ShowcaseList";
import { ShowcaseDetails } from "./ShowcaseDetails";

import {setDefault} from "./defaultStates";
import {setShowcasesUrl} from "./showcaseUrls";

gsap.registerPlugin(Observer);

const showcaseList = new ShowcaseList;
const showcaseDetails = new ShowcaseDetails;

/**
 * Initialization
 */
window.onload = () => {
  setDefault();
  setShowcasesUrl();

  console.log(App.currentState);
  //router.navigate("works");
};

/**
 * Routing
 */
const router = new Router({
  mode: "hash",
  root: "/",
});

// About
router.add(/about/, () => {
  alert("about");
});

// Contacts
router.add(/contact/, () => {
  alert("contact");
});

// Showcase details
router.add(/works\/(.*)/, (slug) => {
  //showcaseDetails.display("show");

  console.log(`Showcase: ${slug}`);
});

// Showcases list
router.add(/works/, () => {
  showcaseList.display("show");
  App.setState("works");
});


/**
 * Reset default state
 */
// const resetAll = () => {
//   Showcases.display("hide");
// }

// Show works
// DOM.navItemWorks.addEventListener("click", (event) => {
//   //resetAll();

//   //Showcases.display("show");
//   //Router.setCurrentPage("works");

//   event.preventDefault();
// });

// Show work details
// DOM.showcaseItem.forEach(el => el.addEventListener('click', event => {
//   console.log(event.currentTarget.dataset.slug);
// }));

// Show home
// DOM.navItemHome.addEventListener("click", (event) => {
//   //resetAll();
//   //Router.setCurrentPage("home");
//   event.preventDefault();
// });


/**
 * Snap scroll
 */
const snap = new Snap();

Observer.create({
  type: "wheel, touch, pointer",
  wheelSpeed: -1,
  tolerance: 10,
  onDown: () => {
    //if (Router.currentPage === "home") {
      snap.prev();
    //}

    // if (Router.currentPage === "works") {
    //   Showcases.snap("prev");
    // }
  },
  onUp: () => {
    //if (Router.currentPage === "home") {
      snap.next();
    //}

    // if (Router.currentPage === "works") {
    //   showcaseList.snap("next");
    // }
  },
});