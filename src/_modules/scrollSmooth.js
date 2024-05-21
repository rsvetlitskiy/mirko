import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

// Normalize Scroll
//ScrollTrigger.normalizeScroll(true);

// Scroll Smooth
ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
});
