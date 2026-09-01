const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.proposal-links');
const pages = [...document.querySelectorAll('.proposal-page')];
const pageLinks = [...document.querySelectorAll('.proposal-links a')];

function showPage(id, shouldFocus = false) {
  const page = document.getElementById(id);
  if (!page) return;
  pages.forEach((item) => {
    const active = item === page;
    item.hidden = !active;
    item.classList.toggle('is-active', active);
  });
  pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  navMenu?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (shouldFocus) page.focus({ preventScroll: true });
}

function showPageFromHash(shouldFocus = false) {
  const id = window.location.hash.replace('#', '');
  showPage(pages.some((page) => page.id === id) ? id : 'overview', shouldFocus);
}

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href')?.slice(1);
    if (!id || !pages.some((page) => page.id === id)) return;
    event.preventDefault();
    history.pushState(null, '', `#${id}`);
    showPage(id, true);
  });
});

window.addEventListener('popstate', () => showPageFromHash(true));
showPageFromHash(false);

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
