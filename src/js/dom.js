/**
 * Define DOM elements
 */

import { update } from "three/examples/jsm/libs/tween.module.js"

export const DOM = {
  // Nav
  navItemHome: document.querySelector(".nav-item_home"),
  navItemAbout: document.querySelector(".nav-item_about"),
  navItemContact: document.querySelector(".nav-item_contact"),
  navItemWorks: document.querySelector(".nav-item_works"),

  // Snap sections
  snapSections: document.querySelectorAll(".snap-section"),

  // Hero
  hero: document.querySelector(".hero"),
  heroContent: document.querySelector(".hero-content"),
  heroImage: document.querySelector(".hero__bg"),

  // Works
  works: document.querySelector(".works"),
  worksContent: document.querySelector(".works-content"),
  worksSections: document.querySelectorAll(".works-section"),
  workItem: document.querySelectorAll(".work-item"),

  // About
  about: document.querySelector(".about"),
  aboutContent: document.querySelector(".about-content"),
  introtext: document.querySelector(".about__introtext"),
  
  // Contacts
  coantacts: document.querySelector(".contacts"),
  coantactsContent: document.querySelector(".contacts-content"),

  // Titles
  heroTitle: document.querySelector(".staic-title-box_hero"),
  coantactsContent: document.querySelector(".contacts-content"),
  worksItemCover: document.querySelectorAll(".work-item__cover"),

  // Showcases list container
  showcases: document.querySelector(".showcases"), // Wrapper
  showcasesContent: document.querySelector(".showcases-content"), // Inner wrapper
  showcasesCollection: document.querySelector(".showcases-collection"), //?????

  // Showcase
  showcaseItem: document.querySelectorAll(".showcase"),
  showcaseDetails: document.querySelectorAll(".showcase-details"),
  showcaseDetailsInfo: document.querySelectorAll(".showcase-details-info"),
  showcaseGallery: document.querySelectorAll(".showcase-gallery"),
  showcaseLink: ".showcase-link",

  closeShowcaseBtn: document.querySelector(`[data-action="close-showcase"]`),
}