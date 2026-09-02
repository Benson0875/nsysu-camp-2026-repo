const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

pageLinks.forEach((link) => link.addEventListener('click', () => {
  navMenu?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

const pageObserver = new IntersectionObserver((entries) => {
  const visiblePage = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visiblePage) return;
  pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visiblePage.target.id}`));
}, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });

pages.forEach((page) => pageObserver.observe(page));
