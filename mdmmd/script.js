const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before-mdmmd.png', alt: 'Mdmmd. 明洞國際 合作貼文範例一', caption: '出發前整理女生福袋，把實用小物留給每一位需要的同學。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during-mdmmd.png', alt: 'Mdmmd. 明洞國際 合作貼文範例二', caption: '南部活動節奏緊湊，補給站準備好貼心用品，讓大家自在投入。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after-mdmmd.png', alt: 'Mdmmd. 明洞國際 合作貼文範例三', caption: '三天兩夜收尾，把關心放進帶走的紀念，謝謝 Mdmmd. 明洞國際評估支持。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.mdmmdShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
