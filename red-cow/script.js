const posts = [
  {
    image: 'assets/instagram/01-before-one-gift.png',
    caption: '出發前，先把客製狗牌與紅布條的合作構想帶進迎新準備；實際品項與文字將於確認後發布。',
    label: '貼文方向一｜活動前',
  },
  {
    image: 'assets/instagram/02-during-one-gift.png',
    caption: '活動中以實體狗牌、執行官穿戴紅布條與大型文字紅布條，記錄校園客製物料的使用情境。',
    label: '貼文方向二｜活動中',
  },
  {
    image: 'assets/instagram/03-after-one-gift.png',
    caption: '活動後保留合作案例與導流摘要，讓下一個需要團服、周邊或活動用品的校園團隊也能找到灣仔客製化。',
    label: '貼文方向三｜活動後',
  },
];

let current = 0;
const image = document.querySelector('#instagram-image');
const caption = document.querySelector('#instagram-caption');
const date = document.querySelector('#instagram-date');
const dots = [...document.querySelectorAll('.ig-dots button')];

function render(index) {
  current = (index + posts.length) % posts.length;
  const post = posts[current];
  if (image) image.src = post.image;
  if (caption) caption.textContent = post.caption;
  if (date) date.textContent = post.label;
  dots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === current));
}

document.querySelectorAll('[data-direction]').forEach((button) => {
  button.addEventListener('click', () => render(current + Number(button.dataset.direction)));
});
dots.forEach((dot, dotIndex) => dot.addEventListener('click', () => render(dotIndex)));
