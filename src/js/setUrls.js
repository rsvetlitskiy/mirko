/**
 * Get urls from data-slug and create inner html-link with the slug.
 * @param {any} item - DOM elements with data-slug 
 * @param {any} link - Parrent URL Ex: #works 
 * @returns {html}
 */
export const setUrls = (item, link) => {
  item.forEach(item => {
    const slug = item.getAttribute("data-slug");
    item.innerHTML += `<a class="showcase-link" href="${link}/${slug}"></a>`;
  });
}