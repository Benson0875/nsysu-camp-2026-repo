const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before.png', alt: '妮維雅 NIVEA 合作貼文範例一', caption: '活動前，把防護也收進行李。集合前會提醒大家補水、戴帽子，並依個人需求預留補擦防曬的時間。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during.png', alt: '妮維雅 NIVEA 合作貼文範例二', caption: '闖關流汗後，先到陰涼處喝水、稍作休息，再依個人需求補擦防曬。妮維雅戶外防護合作提案，陪大家把照顧自己放進活動節奏。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after.png', alt: '妮維雅 NIVEA 合作貼文範例三', caption: '三天兩夜的照片整理好了。謝謝每一位一起闖關、也記得照顧自己的夥伴；所有合作品項與露出均以妮維雅最終確認為準。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.niveaShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
