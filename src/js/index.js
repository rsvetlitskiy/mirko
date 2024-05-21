import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { Router } from "./Router";
import { Snap } from "./snapscroll";
import App from "./App";
import { ShowcaseList } from "./ShowcaseList";
import { Showcase } from "./Showcase";

import {setDefault} from "./defaultStates";
import {setShowcasesUrl} from "./showcaseUrls";

gsap.registerPlugin(Observer);

const showcaseList = new ShowcaseList;
const showcase = new Showcase;

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
  App.setState("works");

  console.log(`Showcase: ${slug}`);
});

// Showcases list
router.add(/works/, () => {
  showcaseList.display("show");
  App.setState("works");

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
    snap.prev(); 
  },
  onUp: () => { 
    snap.next(); 
  },
});