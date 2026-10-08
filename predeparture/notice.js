'use strict';
(() => {
  const key = 'nsysu-camp-2026-packing-v1';
  const boxes = [...document.querySelectorAll('[data-pack]')];
  let saved = [];
  try {
    const value = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(value)) saved = value;
  } catch { /* The checklist also works when storage is unavailable. */ }
  boxes.forEach(box => { box.checked = saved.includes(box.dataset.pack); });
  const status = document.querySelector('#packing-status');
  const progress = document.querySelector('#packing-progress');
  function update() {
    const selected = boxes.filter(box => box.checked).map(box => box.dataset.pack);
    status.textContent = `已準備 ${selected.length} / ${boxes.length} 項`;
    progress.value = selected.length;
    return selected;
  }
  update();
  boxes.forEach(box => box.addEventListener('change', () => {
    const selected = update();
    try { localStorage.setItem(key, JSON.stringify(selected)); } catch {
      status.textContent += '（此瀏覽器無法儲存進度）';
    }
  }));
  const input = document.querySelector('#name-search');
  const groups = [...document.querySelectorAll('.group')];
  document.querySelector('.group-search').hidden = false;
  input.addEventListener('input', () => {
    const query = input.value.trim().replace(/\s+/g, '');
    let count = 0;
    groups.forEach(group => {
      const match = group.dataset.search.replace(/\s+/g, '').includes(query);
      group.hidden = !match;
      if (match) count++;
    });
    document.querySelector('#search-status').textContent = query
      ? `找到 ${count} 個小組` : '顯示全部 10 個小組';
    document.querySelector('#no-results').hidden = count !== 0;
  });
})();
