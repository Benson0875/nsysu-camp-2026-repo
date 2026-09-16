const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before-doga-chili.png', alt: 'DoGa 香酥脆椒 合作貼文範例一', caption: '活動前，先把香酥脆椒獨享包放進新生的行李清單。商品、畫面與標記帳號均於發布前送交 DoGa 香酥脆椒確認。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during-doga-chili.png', alt: 'DoGa 香酥脆椒 合作貼文範例二', caption: '活動進行中，香酥脆椒獨享包將依大地遊戲節奏，作為特殊獎勵與嗜辣學員分享的驚喜。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after-doga-chili.png', alt: 'DoGa 香酥脆椒 合作貼文範例三', caption: '三天兩夜結束後，謝謝 DoGa 香酥脆椒 成為新生旅程裡的一位夥伴。所有合作露出均以品牌最終確認內容為準。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.dogaChiliShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
