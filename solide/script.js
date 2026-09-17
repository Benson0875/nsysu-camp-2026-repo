const posts = [
  { image: "../assets/images/partner-group-01.png", label: "貼文方向一｜活動前", caption: "開學前，先把最常用的行動電力準備好。若合作成案，SOLiDE Gemini 雙子座 5000mAh Type-C 便攜式充電行動電源將作為晚會抽獎品，陪新生為宿舍與課堂生活做好準備。" },
  { image: "../assets/images/partner-group-02.png", label: "貼文方向二｜活動中", caption: "活動現場的抽獎與品牌介紹，將依 SOLiDE 最終核可內容執行。Gemini 雙子座的商品資訊與素材也會在上線前確認。" },
  { image: "../assets/images/partner-group-03.png", label: "貼文方向三｜活動後", caption: "三天兩夜結束，實用的準備會延續到新生的每一天。感謝 SOLiDE 評估支持新生的行動電力日常；所有合作露出均以最終確認為準。" }
];
let current = 0;
function showPost(value, absolute = false) {
  current = absolute ? value : (current + value + posts.length) % posts.length;
  const post = posts[current];
  const image = document.querySelector('#instagram-image');
  const caption = document.querySelector('#instagram-caption');
  const date = document.querySelector('#instagram-date');
  if (image) image.src = post.image;
  if (caption) caption.textContent = post.caption;
  if (date) date.textContent = post.label;
  document.querySelectorAll('.ig-dots button').forEach((dot, index) => dot.classList.toggle('is-current', index === current));
}
window.solideShowPost = showPost;
document.querySelector('.nav-toggle')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  document.querySelector('.proposal-links')?.classList.toggle('is-open', !open);
});
