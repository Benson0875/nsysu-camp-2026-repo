const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before.svg', alt: '啤酒頭釀造 Taiwan Head Brewers 合作貼文範例一', caption: '迎新晚會前，我們想把節氣與在地食材的故事留一個位置給大家。若合作成案，品牌資訊將以核可內容呈現。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during.svg', alt: '啤酒頭釀造 Taiwan Head Brewers 合作貼文範例二', caption: '活動中，讓對話從風味、創作與地方開始。任何含酒精安排僅限完成年齡確認的成年人，且不作為遊戲或競飲內容。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after.svg', alt: '啤酒頭釀造 Taiwan Head Brewers 合作貼文範例三', caption: '這趟旅程結束後，秋日的記憶仍會延續。感謝啤酒頭釀造評估與新生團隊共創文化交流的可能。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.taiwanHeadBrewersShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
