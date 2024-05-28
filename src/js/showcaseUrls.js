import { DOM } from "./dom";


/**
 * Description
 * @param {any} item - elements 
 * @returns {any}
 */
const setUrl = (item) => {
  item.forEach(item => {
    const slug = item.getAttribute("data-slug");
    item.innerHTML += `<a class="showcase-link" href="#works/${slug}"></a>`;
  });
}

export const setShowcasesUrl = () => {
  const showcaseItems = DOM.showcaseItem;
  const workItems = DOM.worksItem;

  setUrl (DOM.showcaseItem);
  setUrl (DOM.worksItem);

  workItems.forEach(item => {
    const slug = item.getAttribute("data-slug");
    item.innerHTML += `<a class="showcase-link" href="#works/${slug}"></a>`;
  });

  showcaseItems.forEach(item => {
    const slug = item.getAttribute("data-slug");
    item.innerHTML += `<a class="showcase-link" href="#works/${slug}"></a>`;
  });

  console.log("Showcases URLs Completed");
}