const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before-asus.png', alt: '華碩 ASUS RT-BE58 Go 活動前合作貼文', caption: '新生集合前，先把連線需求想清楚。RT-BE58 Go 的抽獎合作示意，聚焦多人多裝置的宿舍日常。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during-asus.png', alt: '華碩 ASUS RT-BE58 Go 活動中合作貼文', caption: '闖關告一段落，現場的 RT-BE58 Go 體驗展示也吸引不少同學停下來看看。商品資訊與露出方式都會依華碩最終確認執行。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after-asus.png', alt: '華碩 ASUS RT-BE58 Go 活動後合作貼文', caption: '三天兩夜結束，晚會抽獎的好心情還在延續。謝謝華碩評估支持新生的連線日常，讓實用的數位工具成為新生活的一份驚喜。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.asusShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
