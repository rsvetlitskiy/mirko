import { DOM } from "./domElements";

export const setShowcasesUrl = () => {
  const showcaseItems = DOM.showcaseItem;

  showcaseItems.forEach(item => {
    const slug = item.getAttribute("data-slug");
    item.innerHTML += `<a class="showcase-link" href="#works/${slug}"></a>`;
  });
}
