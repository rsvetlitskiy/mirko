import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// About Section
//---------------------

let introtext = document.querySelector(".introtext"); // Introtext 
let introtextHeight = introtext.offsetHeight; // Introtext div height
let introtextMarginTop = `-${introtextHeight - 6}`; // Pin offset 

// gsap.set(".about-contant", {
//   y: "100svh",
//   marginTop: introtextMarginTop,
// });


// Pin About Section
// const aboutPin = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".intro-section",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 1,
//     pin: ".about",

//     snap: {
//       snapTo: 0.33,
//       duration: 0.01,
//       ease: "none"
//     },
//     //markers: true,
//   },
// });


let sections = gsap.utils.toArray(".screen");

gsap.to(sections, {
  yPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".intro-section",
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      directional: false,
      delay: 0,
      duration: 0.1,
      ease: "power4.in",
    },
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3000"
  }
});


// ScrollTrigger.create({
//   trigger: ".trigger",
//   start: "top center",
//   end: "+=500",
//   onUpdate: (self) => console.log("direction:", self.direction),
// });





// Show about section
// const aboutShow = gsap.timeline({
//   scrollTrigger: {                                 
//     trigger: ".trigger-about-show",
//     start: "top center",
//     end: "bottom center",
//     scrub: 1,
//     //markers: true,
//   },
// });

// gsap.to(".about", {
//   scrollTrigger: ".trigger-about-show",
//   top: "-90svh",
//   duration: 1.5,
//   ease: "power4.inOut",
// });