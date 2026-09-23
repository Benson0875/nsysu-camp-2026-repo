const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before-fenchifu.png', alt: '奮起福 Fenchifu 原味米餅合作貼文範例一', caption: '活動前，我們先把晚會的交流規劃好。若合作成案，奮起福的品牌素材將在核可後，以合適方式陪伴這場新生相遇的時刻。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during.png', alt: '奮起福 Fenchifu 合作貼文範例二', caption: '活動進行中，我們把安全與選擇放在第一位。感謝奮起福支持指定商品合作的交流方向；現場依活動需求配置飲水與基本補給。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after.png', alt: '奮起福 Fenchifu 合作貼文範例三', caption: '活動結束後，留下的不只是照片，也是一段對在地風味的認識。所有合作露出皆以奮起福最終確認內容為準。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.sponsorShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
