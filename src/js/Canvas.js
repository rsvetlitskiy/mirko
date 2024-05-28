import { Curtains, Plane, Vec2 } from "curtainsjs";
import fragment from '../shaders/fragmentShader.glsl'
import vertex from '../shaders/vertexShader.glsl'

export class Canvas {
  curtains
  planes = []
  scrollEffect = 0

  DOM = {
    h1: document.querySelector('h1'),
    planeElements: [...document.querySelectorAll('.work-item__cover')],
    heroImage: document.querySelector('.project_header_img'),
    heroWebGlPlane: null,
    wheel: document.querySelector('.wheel_icon'),
    wheelWrapper: document.querySelector('.wheel_wrapper'),
    pageWrap: document.querySelector('.page-wrapper'),
  }

  animationState = {}

  constructor() {
    this.init()
  }

  async init() {
    this.createCurtains()
    this.setupCurtains()
    this.createPlanes()
  }


  createCurtains() {
    this.curtains = new Curtains({
      container: 'canvas',
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
      watchScroll: false,
    })
  }

  setupCurtains() {
    this.curtains
      .onRender(() => {
        // update our planes deformation
        this.scrollEffect = this.curtains.lerp(this.scrollEffect, 0, 0.085)
      })
      .onScroll(() => {
        const delta = this.curtains.getScrollDeltas()
        delta.y = -delta.y

        // threshold
        if (delta.y > 60) {
          delta.y = 60
        } else if (delta.y < -60) {
          delta.y = -60
        }

        if (Math.abs(delta.y) > Math.abs(this.scrollEffect)) {
          this.scrollEffect = this.curtains.lerp(
            this.scrollEffect,
            delta.y,
            0.5
          )
        }
      })
      .onContextLost(() => {
        this.curtains.restoreContext()
      })
  }

  createPlanes() {
    const params = {
      vertexShader: vertex,
      fragmentShader: fragment,
      widthSegments: 20,
      heightSegments: 20,
      uniforms: {
        scrollEffect: {
          name: 'uScrollEffect',
          type: '1f',
          value: 0.0,
        },
      },
    }

    // add our planes and handle them
    for (let i = 0; i < this.DOM.planeElements.length; i++) {
      const plane = new Plane(this.curtains, this.DOM.planeElements[i], params)
      this.planes.push(plane)
      this.handlePlanes(plane)
    }

    this.DOM.heroWebGlPlane = this.planes[0]
  }

  handlePlanes(plane) {
    plane.setRenderOrder(-10)
    plane
      .onReady(() => {
        if (plane === this.planes[this.planes.length - 1]) {
          document.body.classList.add('planes-loaded')
        }
      })
      .onRender(() => {
        plane.uniforms.scrollEffect.value = this.scrollEffect
      });
  }
}