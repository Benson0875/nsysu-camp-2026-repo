const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before-koso.png', alt: 'KOSO 合作貼文範例一', caption: '出發前，先把自己的風格準備好。KOSO 的貼紙與小物，陪五系新生把第一段校園騎行變得更有記憶點。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during-koso.png', alt: 'KOSO 合作貼文範例二', caption: '中山的山路很多，每一次集合、移動與回程，都是新生活的一部分。感謝 KOSO 為新生的騎乘日常加上一點風格。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after-koso.png', alt: 'KOSO 合作貼文範例三', caption: '三天兩夜結束了，新的校園生活才正要開始。期待 KOSO 陪五系新生騎出屬於自己的第一段路。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];

function renderPost(index) {
  currentPost = (index + posts.length) % posts.length;
  const post = posts[currentPost];
  if (postImage) { postImage.src = post.image; postImage.alt = post.alt; }
  if (postCaption) postCaption.textContent = post.caption;
  if (postDate) postDate.textContent = post.label;
  dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost));
}

document.querySelector('.ig-arrow.previous')?.addEventListener('click', () => renderPost(currentPost - 1));
document.querySelector('.ig-arrow.next')?.addEventListener('click', () => renderPost(currentPost + 1));
dots.forEach((dot, index) => dot.addEventListener('click', () => renderPost(index)));
