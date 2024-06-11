import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { Router } from "./Router";
import { Snap } from "./snapscroll";
import App from "./App";

import { ShowcaseList } from "./ShowcaseList";
import { Showcase } from "./Showcase";

import {setDefault} from "./defaultStates";
import {setShowcasesUrl} from "./showcaseUrls";
import Lenis from 'lenis'

import { DOM } from "../../../../mirko/mirko/src/js/dom";

gsap.registerPlugin(Observer);

const showcaseList = new ShowcaseList;
const showcase = new Showcase;

/**
 * Initialization
 */
window.onload = () => {
  setDefault();
  setShowcasesUrl();

  console.log(App.currentState); // !!!!!!!!
  //router.navigate("works");
};


const lenis = new Lenis({
  infinite: true,
  wrapper: DOM.showcases
})

lenis.on('scroll', (e) => {
  console.log(e)
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
};

requestAnimationFrame(raf)


/**
 * Routing
 */
const router = new Router({
  mode: "hash",
  root: "/",
});

// About
router.add(/about/, () => {
  App.setState("about");

  console.log(`App Stete: ${App.currentState}`);
});

// Contacts
router.add(/contact/, () => {
  App.setState("contact");

  console.log(`App Stete: ${App.currentState}`);
});

// Showcase details
router.add(/works\/(.*)/, (slug) => {
  App.setState("showcase");

  console.log(`Showcase: ${slug}`);
});

// Showcases list
router.add(/works/, () => {
  showcaseList.display("show");
  App.setState("showcaseList");

  console.log(`App Stete: ${App.currentState}`);
});

/**
 * Snap scroll
 */
const snap = new Snap();

Observer.create({
  type: "wheel, touch, pointer",
  wheelSpeed: -1,
  tolerance: 10,
  onDown: () => {
    // Home section
    if (App.currentState == "home") {
      snap.prev();
    }

    // Showcase list screen
    if (App.currentState == "showcaseList") {
      
    }
  },

  onUp: () => { 
    // Home section
    if (App.currentState == "home") {
      snap.next();
    }

    // Showcase list screen
    if (App.currentState == "showcaseList") {
     
    }
  },
});