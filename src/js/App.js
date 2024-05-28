import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Canvas } from "./Canvas";
import { Router } from "./Router";
import {setShowcasesUrl} from "./showcaseUrls";

import { DOM } from "./dom";

gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", (event) => {
  setShowcasesUrl();
});

/**
 * Routing
 */
const router = new Router({
  mode: "hash",
  root: "/",
});

// About
router.add(/about/, () => {
  //App.setState("about");

});

// Contacts
router.add(/contact/, () => {
  //App.setState("contact");


});

// Showcase details
router.add(/works\/(.*)/, (slug) => {
  //App.setState("showcase");

  console.log(`Showcase: ${slug}`);
});

// Showcases list
router.add(/works/, () => {
  //showcaseList.display("show");
  //App.setState("showcaseList");

  console.log("Works");
});


const canvas = new Canvas();
canvas.curtains.disableDrawing();

const lenisHome = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  wheelMultiplier: 1,
  infinite: false,
});

lenisHome.on("scroll", ({ scroll }) => {
  canvas.curtains.updateScrollValues(0, scroll);
  canvas.curtains.needRender();
});

gsap.ticker.add((time) => {
  lenisHome.raf(time * 1000);
});

const homeTimeline = gsap.timeline({});

homeTimeline.to(DOM.heroImage, {
  opacity: 0,
  scrollTrigger: {
    trigger: DOM.hero,
    scrub: 1,
    markers: 1,
    start: "top top",
    end: "bottom 50%",
  },
});
