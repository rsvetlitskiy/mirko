// Hero section snap-scroll 
// -------------------------------------

import { gsap } from "gsap";
import { Observer } from "gsap/Observer"; 

// Register plugins
gsap.registerPlugin(Observer);


class Hero {
  constructor() {

  }

  // Next screen
  snapNext() {
    console.log("Class Hero")
  }
}

export default Hero;  