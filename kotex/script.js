const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before-kotex.png', alt: '靠得住草本抑菌衛生棉合作貼文範例一', caption: '出發前的直接發放，我們想把日常照顧一起準備好。若合作成案，靠得住草本抑菌衛生棉將依品牌確認方式放入女同學。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during-kotex.png', alt: '靠得住草本抑菌衛生棉合作貼文範例二', caption: '闖關和水大地進行中，隊輔也會把個人需求與休息時間留在行程裡。謝謝靠得住支持新生以舒服的節奏參與每一段活動。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after-kotex.png', alt: '靠得住草本抑菌衛生棉合作貼文範例三', caption: '三天兩夜結束後，發放後留下的是實用的日常用品和認識新朋友的回憶。實際合作露出與商品資訊均以靠得住最終確認為準。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.kotexShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
