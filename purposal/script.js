const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

document.querySelectorAll('.proposal-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

const pageLinks = [...document.querySelectorAll('.proposal-links a')];
const pageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-38% 0px -54% 0px', threshold: 0 });

document.querySelectorAll('.proposal-page[id]').forEach((page) => pageObserver.observe(page));
