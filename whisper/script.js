const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before-whisper.png', alt: '好自在液體衛生棉合作貼文範例一', caption: '集合前，我們先把迎新福袋和個人用品整理好。若合作成案，好自在經典款液體衛生棉將依品牌確認方式提供給女同學。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during-whisper.png', alt: '好自在液體衛生棉合作貼文範例二', caption: '跑跳闖關的下午，大家一起補水、休息，再回到小隊任務。謝謝好自在支持讓新生能更自在投入活動的合作方向。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after-whisper.png', alt: '好自在液體衛生棉合作貼文範例三', caption: '活動告一段落，把實用的日用品一起帶回日常。實際合作露出、商品規格與發放方式均以好自在最終確認為準。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.whisperShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
