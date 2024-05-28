import { gsap } from "gsap";
import { DOM } from "../../../../mirko/mirko/src/js/dom";
/**
 * Hero section display and animations
 * @export
 */
export class Hero {
  display(action) {
    const isShow = action == "show";
    const isHide = action == "hide";

    let tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 1,
        onComplete: () => {}
      }
    });

    if (isHide) {
      tl.to(DOM.heroImage, {
        opacity: 0,
      });
    }

    if (isShow) {
      tl.to(DOM.heroImage, {
        opacity: 1,
      });
    }
  }
}