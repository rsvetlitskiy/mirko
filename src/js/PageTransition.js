import { gsap } from "gsap";
// Cell class definition
class Cell {
  DOM = {
    el: null,
  };
  row;
  column;

  constructor(row, column) {
    this.DOM.el = document.createElement("div");
    gsap.set(this.DOM.el, { willChange: "opacity, transform" });
    this.row = row;
    this.column = column;
  }
}

// Overlay class definition
export class Overlay {
  
  DOM = {
    el: null,
  };
  cells = [];

  options = {
    rows: 2,
    columns: 2,
    duration: 1,
    each: 0.03,
  };

  constructor(DOM_el, customOptions) {
    this.DOM.el = DOM_el;

    this.options = Object.assign({}, this.options, customOptions);

    this.DOM.el.style.setProperty("--columns", this.options.columns);

    this.cells = new Array(this.options.rows);
    for (let i = 0; i < this.options.rows; ++i) {
      this.cells[i] = new Array(this.options.columns);
    }

    for (let i = 0; i < this.options.rows; ++i) {
      for (let j = 0; j < this.options.columns; ++j) {
        const cell = new Cell(i, j);
        this.cells[i][j] = cell;
        this.DOM.el.appendChild(cell.DOM.el);
      }
    }
  }

  show(customConfig = {}) {
    return new Promise((resolve) => {
      const defaultConfig = {
        transformOrigin: "50% 50%",
        duration: this.options.duration,
        ease: "power2.in",
        stagger: {
          grid: [this.options.rows, this.options.columns],
          from: 0,
          each: this.options.each,
          ease: "power2.in",
        },
      };
      const config = Object.assign({}, defaultConfig, customConfig);

      gsap.set(this.DOM.el, { opacity: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          this.hide()
        }
      });
      
      tl.fromTo(
        this.cells.flat().map((cell) => cell.DOM.el),
        {
          scaleX: 0,
          //opacity: 0,
          //backgroundColor: "#f8f8f8",
          transformOrigin: config.transformOrigin,
        },
        {
          duration: config.duration,
          ease: config.ease,
          scale: 1.01,
          //backgroundColor: "#fff",
          //opacity: 1,
          stagger: config.stagger,
          onComplete: resolve,
        }
      );
    });
  }
  // Hide the overlay and animate the cells out
  hide(customConfig = {}) {
    return new Promise((resolve) => {
      // Default animation configuration
      const defaultConfig = {
        transformOrigin: "100% 0%",
        // Duration for each cell animation
        duration: this.options.duration,
        // Ease for each cell animation
        ease: "power2.inOut",
        // Stagger object
        stagger: {
          grid: [this.options.rows, this.options.columns],
          from: 0,
          each: this.options.each,
          ease: "power2.inOut",
        },
      };
      const config = Object.assign({}, defaultConfig, customConfig);

      gsap.fromTo(
        this.cells.flat().map((cell) => cell.DOM.el),
        {
          transformOrigin: config.transformOrigin,
        },
        {
          duration: config.duration,
          ease: config.ease,
          scaleX: 0,
          //opacity: 0,
          //backgroundColor: "#f8f8f8",
          stagger: config.stagger,
          onComplete: resolve,
        }
      );
    });
  }
}
