const posts = [
  {
    image: 'assets/instagram/01-before-one-gift.png',
    caption: '中山同學辦活動要做團服、周邊或禮贈品嗎？從校門口出發就能找到灣仔客製化，這次迎新也把客製狗牌與紅布條帶進現場。',
    label: '貼文方向一｜活動前',
  },
  {
    image: 'assets/instagram/02-during-one-gift.png',
    caption: '130 個客製狗牌、執行官紅布條與大型文字紅布條都在現場上陣，讓每一位新生和執行團隊留下清楚又好看的共同識別。',
    label: '貼文方向二｜活動中',
  },
  {
    image: 'assets/instagram/03-after-one-gift.png',
    caption: '謝謝灣仔客製化 One Gift 陪我們完成這趟迎新旅程。下一次想做團服、周邊或活動用品時，也歡迎中山的團隊直接到校門口外聊聊。',
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
