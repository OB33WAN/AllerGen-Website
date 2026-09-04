'use strict';
// Progressive enhancement only: all pages and download links work without JavaScript.
const backToTop = document.querySelector('[data-back-top]');
if (backToTop) {
  backToTop.classList.add('enhanced');
  const updateVisibility = () => { backToTop.hidden = window.scrollY < 500; };
  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
}
