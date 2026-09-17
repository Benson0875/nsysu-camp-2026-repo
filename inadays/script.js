const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];

navToggle?.addEventListener('click', () => {
  const open = navMenu?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(open)));
});
pageLinks.forEach((link) => link.addEventListener('click', () => {
  navMenu?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (current) pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.target.id}`));
}, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });
pages.forEach((page) => observer.observe(page));

const posts = [
  { image: '../assets/images/partner-group-01.png', alt: "迎新團體合照與中性迎新道具", caption: "出發前，先把一份便利防護放進行李清單。若合作成案，inaday's 閃充電蚊拍將以品牌核可的方式，陪新生準備戶外活動。", label: '貼文方向一｜活動前' },
  { image: '../assets/images/partner-group-02.png', alt: "迎新活動互動合照與中性迎新道具", caption: "活動進行中，我們在合適環節記錄抽獎互動。商品呈現、使用說明與品牌素材，皆以 inaday's 捕蚊達人最終確認內容為準。", label: '貼文方向二｜活動中' },
  { image: '../assets/images/partner-group-03.png', alt: "迎新團體合照與中性迎新道具", caption: "活動結束後，留下的不只是照片，也是一份帶回校園日常的實用準備。謝謝 inaday's 捕蚊達人參與這段新生旅程。", label: '貼文方向三｜活動後' },
];
let currentPost = 0;
const postImage = document.querySelector('#instagram-image');
const postCaption = document.querySelector('#instagram-caption');
const postDate = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];
function renderPost(index) {
  currentPost = (index + posts.length) % posts.length;
  const post = posts[currentPost];
  if (postImage) { postImage.src = post.image; postImage.alt = post.alt; }
  if (postCaption) postCaption.textContent = post.caption;
  if (postDate) postDate.textContent = post.label;
  dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === currentPost));
}
window.inadaysShowPost = (value, absolute = false) => renderPost(absolute ? value : currentPost + value);
