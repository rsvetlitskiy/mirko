import Router from "./router";

// Routing
// ------------------

const router = new Router({
  mode: "hash",
  root: "/",
});

router
  .add(/works/, () => {
    alert("Welcome to the work");
  })
  .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
    alert(`products: ${id} specification: ${specification}`);
  })
  .add("", () => {
    console.log("welcome in catch all controller");
  });

  const dom = {
    worksSections: document.querySelectorAll(".works-section"),
    worksContainer: document.querySelector(".works-content"),
  }
  



// Work section snap scroll
// ----------------------------------

// Get all work sections
const works = document.querySelectorAll(".works-section");

// Scrollable inner container
const worksContent = document.querySelector(".works-content");

// Wrapping the index within the range
const worksWrap = gsap.utils.wrap(0, works.length);

// Screen height
window.innerHeight

// Initialize variables
let worksIndex = 0;
let worksContentPosY = 0;
let worksIsScrolling = false;


// Tl
let worksSnapTl = gsap.timeline({
  defaults: { 
    duration: .25, 
    ease: "power1.inOut" 
  },
  onComplete: () => worksIsScrolling = false
});


const nextWSnap = () => {
  worksContentPosY = worksContentPosY + 100;

  worksSnapTl.to(worksContent, {
    y: worksContentPosY,
  });

  console.log("next")
}

const prevWSnap = () => {
  worksContentPosY = worksContentPosY - 100;

  worksSnapTl.to(worksContent, {
    y: worksContentPosY,
  });

  console.log("prev")
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => !worksIsScrolling && prevWSnap(),
  onUp: () => !worksIsScrolling && nextWSnap(),
  tolerance: 10,
  preventDefault: true
});




// Routing
// ------------------

const router = new Router({
  mode: "hash",
  root: "/",
});

router
  .add(/works/, () => {
    alert("Welcome to the work");
  })
  .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
    alert(`products: ${id} specification: ${specification}`);
  })
  .add("", () => {
    console.log("welcome in catch all controller");
  });



  // Section snap-scroll 

import { gsap } from "gsap";
import { Observer } from "gsap/Observer"; 

// Register plugins
gsap.registerPlugin(Observer);

// DOM elements
const dom = {
  // Hero

  // About
  aboutSection: document.querySelector(".about"),
  aboutContainer: document.querySelector(".about-contant"),
  aboutIntrotext: document.querySelector(".introtext"),

  // Works
  worksSection: document.querySelectorAll(".works"),
  worksItem: document.querySelectorAll(".works-section"),
  worksContainer: document.querySelector(".works-container"),
}

// Total sections
const totalSections = dom.worksItem.length;

// Screen height
let screenH = window.innerHeight;

// Offset
let offset = 320;

// Current index 
let currentIndex = 1;

// Possition 
let posY = 0;

// Animating flag
let isAnimating = false;

// Timeline
let tl = gsap.timeline({
  defaults: {
    duration: 1.8,
    ease: "power4.inOut",
  }
});

// Set default poss
// gsap.set(dom.section, {
//   yPercent: 100,
// });

// Next section
const next = () => {
  if (currentIndex <= totalSections - 1) {
    // Poused events
    isAnimating = true;

    // New position
    posY -= screenH + offset;

    // Update index
    currentIndex++

    // Snap animation
    tl.to(dom.worksContainer, {
      y: posY,
      // Callback
      onComplete: () => {
        isAnimating = false;
      }
    });
  }

  // Test
  console.log(currentIndex);
}

 
// Prev section
const prev = () => {
  if (currentIndex > 1) {
    // Poused events
    isAnimating = true;

    // New position
    posY += screenH + offset;

    // Update index
    currentIndex--
    
    // Snap animation
    tl.to(dom.worksContainer, {
      y: posY,

      // Callback
      onComplete: () => {
        isAnimating = false;
      }
    });
  }
  
  // Test
  console.log(currentIndex);
}


// Observer options
const observerOptions = {
  type: "wheel, touch, pointer",
  wheelSpeed: -1,
  tolerance: 10,
  preventDefault: true,
  onDown: () => {
    if (!isAnimating) {
      prev();
    }

    
  },
  onUp: () => {
    if (!isAnimating) {
      next();
    }
  }
};

// X
Observer.create(observerOptions);