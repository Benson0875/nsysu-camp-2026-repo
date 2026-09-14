const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before.png', alt: 'ReTissue 植樹環保款 活動前實體合作物置入照片', caption: '出發前，把植樹環保款放進每位學員的福袋。旅程的第一份日用品，也可以是一個更少浪費的選擇。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during.png', alt: 'ReTissue 植樹環保款 活動中實體合作物置入照片', caption: '跑關後的補給桌，除了補水，也準備好隨手可用的再生衛生紙。謝謝 ReTissue 評估支持這次活動。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after.png', alt: 'ReTissue 植樹環保款 活動後實體合作物置入照片', caption: '三天兩夜收進回憶，也把好好使用資源的習慣帶回校園。合作呈現方式將依 ReTissue 最終確認執行。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.reTissueShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
renderPost(0);
