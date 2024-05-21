import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero Section
const heroTitleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "80% center",
    end: "bottom center",
    scrub: 1,
    pin: false,
    //markers: true,
  },
});

heroTitleTl.to(".staic-title-box_hero, .introtext", { 
  opacity: 0.11,
  ease: "power1.inOut"
});


