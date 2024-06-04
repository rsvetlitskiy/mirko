import Init from "./Init";
import { DOM } from "./dom";
import AppState from "./AppState";
import { Router } from "./Router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Canvas } from "./Canvas";
import Nav from "./Nav";
import Showcase from "./Showcase";
//import { Overlay } from "./PageTransition";

gsap.registerPlugin(ScrollTrigger);

// Init
window.addEventListener("load", (event) => {
  Init.app();

  const canvas = new Canvas();
  canvas.curtains.disableDrawing();

  // Routing
  const router = new Router({
    mode: "hash",
    root: "/",
  });

  router.add(/works\/(.*)/, (slug) => {
    AppState.set("showcase");
    lenisHome.stop();
    Showcase.showFavorite(slug);
  });

  router.add(/home/, () => {
    AppState.set("home");
    Showcase.hideFavorite();
    lenisHome.start();
  });

  router.add(/about/, () => {
    AppState.set("about");
  });

  router.add(/contact/, () => {
    AppState.set("contact");
  });

  router.add(/works/, () => {
    AppState.set("works");
    //lenisHome.stop();
  });

  // Hide showcase
  DOM.closeShowcaseBtn.addEventListener("click", (e) => {
    router.navigate("home");
  });


  const lenisHome = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: true,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
  });

  lenisHome.on("scroll", ({ scroll }) => {
    canvas.curtains.updateScrollValues(0, scroll);
    canvas.curtains.needRender();
    console.log(scroll);
  });
  
  gsap.ticker.add((time) => {
    lenisHome.raf(time * 1000);
  });

  const homeTl = gsap.timeline({});

  homeTl.to(DOM.heroImage, {
    opacity: 0,
    scrollTrigger: {
      trigger: DOM.hero,
      scrub: 1,
      // markers: 1,
      start: "top top",
      end: "bottom 50%",
    },
  });

  // Showcases
  const lenisShowcase = new Lenis({
    wrapper: DOM.showcases,
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: true,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    //infinite: true,
  });

  function onRaf(time) {
    lenisShowcase.raf(time);
    requestAnimationFrame(onRaf);
  }

  requestAnimationFrame(onRaf);

  lenisShowcase.on("scroll", (e) => {
    //console.log(e)
  });


});