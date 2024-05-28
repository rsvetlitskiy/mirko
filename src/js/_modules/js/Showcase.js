import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { DOM } from "../../../../mirko/mirko/src/js/dom";


//import App from "./app";

gsap.registerPlugin(Observer);

/**
 * 
 * @param {*} option 
 */
export class Showcase {
  constructor() {
    this.showcaseItem = null;
  }
 
  /**
   *
   * @param {*} option 
   */
  getTargetShowcase = (showcase) => {
    this.targetItem = document.querySelector(showcase); 
  }

  /**
   * 
   * @param {*} option 
   */
  display(option) {
    const isShow = option === "show";
    const isHide = option === "hide";

    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "power4.inOut",
      },
      
      onComplete: () => {console.log(App.currentState)},
    });

    if (isShow) {
      tl.to(DOM.showcaseItem, { 
        height: "100svh",
      });
    }

    if (isHide) {
      tl.to(DOM.showcaseItem, { 
        height: "0svh",
      });
    }
  }
}





// const init = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   runLenis();
//   runAnimation();
// };

// const runLenis = () => {
//   const lenis = new Lenis({
//     infinite: true,
//   });

//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }

//   requestAnimationFrame(raf);
// };

// const runAnimation = () => {
//   // select all the elements with the attribute we want
//   const contentItems = document.querySelectorAll(
//     '[wb-animation="content-item"]'
//   );

//   // extract each item into its own variable
//   const baeLogo = contentItems[0];
//   const middleImage = contentItems[1];
//   const baeLogoDuplicate = contentItems[2];

//   // animate the first logo
//   gsap.set(baeLogo, { transformOrigin: "50% 100%", scaleY: 1 });
//   gsap.to(baeLogo, {
//     scaleY: 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: baeLogo,
//       start: "center center",
//       end: "bottom top",
//       scrub: true,
//       onLeave: () => {
//         // reset scale to 1 for next cycle.
//         gsap.set(baeLogo, { scaleY: 1 });
//       },
//     },
//   });

//   // animate the middle image
//   const middleImageTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: middleImage,
//       start: "top bottom",
//       endTrigger: baeLogoDuplicate,
//       end: "top top",
//       scrub: true,
//       ease: "none",
//     },
//   });
//   middleImageTl
//     .set(middleImage, { transformOrigin: "50% 0%", scale: 0 })
//     .to(middleImage, { scale: 1 })
//     .set(middleImage, { transformOrigin: "50% 100%" })
//     .to(middleImage, { scale: 0 });

//   // animate the duplicate logo
//   gsap.set(baeLogoDuplicate, { transformOrigin: "50% 0%" });
//   gsap.fromTo(
//     baeLogoDuplicate,
//     { scaleY: 0 },
//     {
//       scaleY: 1,
//       ease: "none",
//       scrollTrigger: {
//         trigger: baeLogoDuplicate,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//         onLeaveBack: () => {
//           gsap.set(baeLogoDuplicate, { scaleY: 1 });
//         },
//       },
//     }
//   );
// };