const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const carousel = document.querySelector('.sponsor-carousel');
const sponsorPreview = document.body?.dataset.sponsorPreview || new URLSearchParams(window.location.search).get('sponsor');
const sponsorProfiles = {
  koso: { name: 'KOSO', label: 'KOSO｜騎乘科技夥伴', logo: 'koso/assets/images/koso-logo.png', url: 'https://www.koso.com.tw/zh-tw/' },
  apexx: { name: 'APEXX', label: 'APEXX｜騎乘風格夥伴', logo: 'apexx/assets/images/apexx-logo.png', url: 'https://www.apexxmoto.com/' },
};

if (sponsorProfiles[sponsorPreview]) {
  const sponsor = sponsorProfiles[sponsorPreview];
  document.querySelectorAll('a[href]').forEach((link) => {
    const destination = new URL(link.getAttribute('href'), window.location.href);
    if (destination.origin !== window.location.origin) return;
    destination.searchParams.set('sponsor', sponsorPreview);
    link.href = destination.toString();
  });

  document.querySelectorAll('.sponsor-ribbon-card--supau-campaign').forEach((card) => {
    card.className = 'sponsor-ribbon-card sponsor-ribbon-card--brand-mockup';
    card.href = sponsor.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `前往 ${sponsor.name} 官方網站，另開新分頁`);
    card.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name} 標誌" /><span>${sponsor.label}</span>`;
  });

  document.querySelectorAll('.sponsor-logo-card--koso, .sponsor-logo-card--apexx').forEach((card) => {
    card.className = `sponsor-logo-card sponsor-logo-card--${sponsorPreview}`;
    card.href = sponsor.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `前往 ${sponsor.name} 官方網站，另開新分頁`);
    card.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name} 官方商標" /><strong>${sponsor.name}</strong><span>${sponsor.label.split('｜')[1]}</span>`;
  });
}

window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 12), { passive: true });
navToggle?.addEventListener('click', () => { const open = navLinks?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
document.querySelector('.carousel-prev')?.addEventListener('click', () => carousel?.scrollBy({ left: -300, behavior: 'smooth' }));
document.querySelector('.carousel-next')?.addEventListener('click', () => carousel?.scrollBy({ left: 300, behavior: 'smooth' }));
