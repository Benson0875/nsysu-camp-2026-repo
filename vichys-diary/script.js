const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before-vichys-diary.png', alt: '唯白 Vichy’s Diary 合作貼文範例一', caption: '集合前整理女生福袋，為需要的時刻先留下一份貼心。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during-vichys-diary.png', alt: '唯白 Vichy’s Diary 合作貼文範例二', caption: '大地遊戲進行中，救護站備妥所需用品，讓大家放心投入活動。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after-vichys-diary.png', alt: '唯白 Vichy’s Diary 合作貼文範例三', caption: '旅程結束後，把被照顧的感受留在回憶裡，謝謝唯白評估支持。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.vichysDiaryShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
