const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];

pages.forEach((page) => page.removeAttribute('hidden'));

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

pageLinks.forEach((link) => link.addEventListener('click', () => {
  navMenu?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

const pageObserver = new IntersectionObserver((entries) => {
  const visiblePage = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visiblePage) return;
  pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visiblePage.target.id}`));
}, { rootMargin: '-35% 0px -52% 0px', threshold: [0, .2, .5] });

pages.forEach((page) => pageObserver.observe(page));

const posts = [
  { image: 'assets/instagram/01-before.png', alt: '舒跑合作貼文範例一', caption: '新生營前的準備，除了行李，也別忘了補水。舒跑陪大家一起出發，迎接第一段大學共同回憶。', label: '範例貼文一' },
  { image: 'assets/instagram/02-during.png', alt: '舒跑合作貼文範例二', caption: '在高活動量的行程裡，補水是每個人都需要的環節。這一刻，舒跑陪著大家繼續向前。', label: '範例貼文二' },
  { image: 'assets/instagram/03-after.png', alt: '舒跑合作貼文範例三', caption: '三天兩夜的故事留下來了。謝謝每一位夥伴，也謝謝舒跑參與這段共同回憶。', label: '範例貼文三' },
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

document.querySelector('.ig-arrow.previous')?.addEventListener('click', () => renderPost(currentPost - 1));
document.querySelector('.ig-arrow.next')?.addEventListener('click', () => renderPost(currentPost + 1));
dots.forEach((dot, index) => dot.addEventListener('click', () => renderPost(index)));
