/* The full page and all store/language links work without JavaScript. */
(() => {
  const languageMenu = document.querySelector('.languages');
  document.addEventListener('click', (event) => {
    if (languageMenu && !languageMenu.contains(event.target)) languageMenu.open = false;
    const languageAnchor = event.target.closest('a[href="#languages"]');
    if (languageAnchor) document.getElementById('languages').open = true;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && languageMenu?.open) {
      languageMenu.open = false;
      languageMenu.querySelector('summary').focus();
    }
  });
  // Suggest a matching language without redirecting visitors or search engines.
  const primaryLanguage = navigator.language.toLowerCase();
  const links = [...document.querySelectorAll('.languages a[lang]')];
  const preferred = links.find(a => a.lang.toLowerCase() === primaryLanguage)
    || links.find(a => a.lang.toLowerCase().split('-')[0] === primaryLanguage.split('-')[0]);
  if (preferred && !preferred.hasAttribute('aria-current')) preferred.classList.add('suggested-language');
  const sticky = document.querySelector('.mobile-download');
  if ('IntersectionObserver' in window && sticky) {
    const observer = new IntersectionObserver(entries => {
      sticky.classList.toggle('is-visible', !entries[0].isIntersecting);
    }, { threshold: 0 });
    observer.observe(document.querySelector('.hero .store-button'));
  }
})();
