const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const carousel = document.querySelector('.sponsor-carousel');
const themeSelect = document.querySelector('.theme-picker select');

function setTheme(theme) { document.documentElement.dataset.theme = theme; localStorage.setItem('camp-theme', theme); if (themeSelect) themeSelect.value = theme; }
setTheme(localStorage.getItem('camp-theme') || 'rose');
themeSelect?.addEventListener('change', (event) => setTheme(event.target.value));
window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 12), { passive: true });
navToggle?.addEventListener('click', () => { const open = navLinks?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
document.querySelector('.carousel-prev')?.addEventListener('click', () => carousel?.scrollBy({ left: -300, behavior: 'smooth' }));
document.querySelector('.carousel-next')?.addEventListener('click', () => carousel?.scrollBy({ left: 300, behavior: 'smooth' }));
