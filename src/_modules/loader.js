
// let tl = gsap.timeline({
//   delay: 0.3,
//   defaults: { duration: 0.3, ease: "power1.inOut" }
// });

// function progressUpdate() {
//   let progress = Math.round(this.progress() * 100);
//   $(".loader_number").text(progress + "%");
// }

// tl.to(".loader_layout", {
//   opacity: 1
// })
//   .from(".loader_photo_wrap", {
//     opacity: 0,
//     duration: 0.5,
//     stagger: {
//       each: 0.8
//     }
//   })
//   .from(
//     ".loader_photo_img",
//     {
//       scale: 1.1,
//       duration: 1.2,
//       stagger: {
//         each: 0.8
//       }
//     },
//     "<"
//   )
//   .from(
//     ".loader_bottom",
//     {
//       opacity: 0
//     },
//     "<"
//   )
//   .to(
//     ".loader_bottom_bar",
//     {
//       width: "100%",
//       duration: 5,
//       onUpdate: progressUpdate
//     },
//     "<"
//   )
//   .to(".loader", {
//     duration: 0.4,
//     ease: "power2.Out",
//     opacity: 0,
//     delay: 1
//   })
//   .set(".loader", {
//     display: "none"
//   });

// // SECOND PART
// gsap.registerPlugin(ScrollTrigger);

// let gridTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".home-sticky_section",
//     markers: false,
//     scrub: 1,
//     start: "top bottom",
//     end: "bottom top"
//   }
// });

// gridTl
//   .to(".home-sticky_column.is-1", { yPercent: -10 })
//   .to(".home-sticky_column.is-2", { yPercent: 10 }, "<")
//   .to(".home-sticky_column.is-3", { yPercent: -10 }, "<")
//   .to(".home-sticky_layout", { scale: 1, rotate: -1 }, "<");

// let opacityTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".home-sticky_section",
//     start: "top bottom",
//     end: "center center",
//     scrub: 1
//   }
// });

// let opacityTlreverse = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".home-sticky_section",
//     start: "center center",
//     end: "bottom top",
//     scrub: 1
//   }
// });

// opacityTl.fromTo(".home-sticky_layout", { opacity: 0 }, { opacity: 1 });
// opacityTlreverse.fromTo(".home-sticky_layout", { opacity: 1 }, { opacity: 0 });
