const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];
navToggle?.addEventListener('click', () => { const open = navMenu?.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', String(Boolean(open))); });
pageLinks.forEach((link) => link.addEventListener('click', () => { navMenu?.classList.remove('is-open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`)); }, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: 'assets/instagram/01-before.svg', alt: "蔡氏釀酒 Tsai's Actual Brewing 合作貼文範例一", caption: '活動前，把山林、農產與創意風味的故事先放進期待裡。若合作成案，蔡氏釀酒的周邊素材將依核可方式露出。', label: '貼文方向一｜活動前' },
  { image: 'assets/instagram/02-during.svg', alt: "蔡氏釀酒 Tsai's Actual Brewing 合作貼文範例二", caption: '一場好的晚會不需要勸酒，也能有很多話題。現場將以年齡確認、非酒精飲品與安全原則照顧每一位參與者。', label: '貼文方向二｜活動中' },
  { image: 'assets/instagram/03-after.svg', alt: "蔡氏釀酒 Tsai's Actual Brewing 合作貼文範例三", caption: '三天兩夜結束，新的校園故事才剛開始。謝謝蔡氏釀酒評估與我們一起留下有趣、也有分寸的合作記憶。', label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) { currentPost = (index + posts.length) % posts.length; const post = posts[currentPost]; if (postImage) { postImage.src = post.image; postImage.alt = post.alt; } if (postCaption) postCaption.textContent = post.caption; if (postDate) postDate.textContent = post.label; dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost)); }
window.tsaisBrewingShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
