(() => {
  const posts = [
    { image: 'assets/instagram/01-before-komax.png', alt: 'Komax 台灣合作貼文 活動前，學生手持碳纖維展示牌', caption: '活動前，先把裝備與安全提醒準備好。若合作成案，所有品牌素材會先送 Komax 台灣確認。', label: '貼文方向一｜活動前' },
    { image: 'assets/instagram/02-during-komax.png', alt: 'Komax 台灣合作貼文 活動中，學生手持品牌展示牌', caption: '闖關現場，我們用展示牌介紹 KOMAX B 套餐的合作方向；產品資訊與適用性以官方確認為準。', label: '貼文方向二｜活動中' },
    { image: 'assets/instagram/03-after-komax.png', alt: 'Komax 台灣合作貼文 活動後，學生展示碳纖維部品', caption: '三天結束後，把一起完成的回憶帶回日常。感謝 Komax 台灣評估支持新生的第一場挑戰。', label: '貼文方向三｜活動後' }
  ];
  let active=0;
  function show(index, absolute=false) { active = absolute ? index : (active + index + posts.length) % posts.length; const post=posts[active]; const image=document.querySelector('#instagram-image'); const caption=document.querySelector('#instagram-caption'); const date=document.querySelector('#instagram-date'); if(image){image.src=post.image; image.alt=post.alt;} if(caption) caption.textContent=post.caption; if(date) date.textContent=post.label; document.querySelectorAll('.ig-dots button').forEach((dot,i)=>dot.classList.toggle('is-current',i===active)); }
  window.komaxShowPost=show;
  document.querySelector('.nav-toggle')?.addEventListener('click',e=>{const b=e.currentTarget; const expanded=b.getAttribute('aria-expanded')==='true'; b.setAttribute('aria-expanded',String(!expanded)); document.querySelector('#proposal-menu')?.classList.toggle('is-open',!expanded);});
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('is-visible')),{threshold:.12}); document.querySelectorAll('.reveal, .proposal-page, .overview-grid, .proof-strip, .hydration-grid, .content-preview, .schedule-grid, .safety-grid').forEach(e=>observer.observe(e));
})();
