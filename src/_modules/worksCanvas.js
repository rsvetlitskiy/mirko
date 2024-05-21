import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Works canvas
//---------------------

// Pin works canvas container
const worksCanvasPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    pin: ".works-canvas",
    markers: true,
  },
});