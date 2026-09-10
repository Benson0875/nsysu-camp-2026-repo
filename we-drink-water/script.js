const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before.svg', alt: '沃隼釀造 WE DRINK WATER 合作貼文範例一', caption: '晚會前的準備，從尊重每個人的選擇開始。若合作成案，沃隼釀造的潮流貼紙可成為迎新福袋裡的一份小驚喜。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during.svg', alt: '沃隼釀造 WE DRINK WATER 合作貼文範例二', caption: '音樂與朋友都在場，安全也不能缺席。成年參與者專屬安排將完成年齡確認，並提供非酒精飲品選項。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after.svg', alt: '沃隼釀造 WE DRINK WATER 合作貼文範例三', caption: '謝謝沃隼釀造讓我們把品味與分寸一起放進這次合作想像裡。實際素材、文案與發布時程均於上線前確認。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.weDrinkWaterShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
