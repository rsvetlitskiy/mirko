class WorksItem {
  /**
   * 
   */
  transform() {
    let tl = gsap.timeline({
      defaults: {
        duration: 0.2,
        ease: "power4.inOut",
      },
      onComplete: () => {},
    });

    tl.to(DOM.worksContent, {
      translateY: 2,
    });
  }
}