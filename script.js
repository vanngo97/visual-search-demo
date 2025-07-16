const imageData = [
  { src: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?_gl=1*1mieakb*_ga*MTg1NDUwNzQyMS4xNzUyNjMwNTMz*_ga_8JE65Q40S6*czE3NTI2MzA1MzIkbzEkZzEkdDE3NTI2MzA1NzMkajE5JGwwJGgw', tag: 'popular' },
  { src: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?_gl=1*1mieakb*_ga*MTg1NDUwNzQyMS4xNzUyNjMwNTMz*_ga_8JE65Q40S6*czE3NTI2MzA1MzIkbzEkZzEkdDE3NTI2MzA1NzMkajE5JGwwJGgw', tag: 'spicy' },
  { src: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?_gl=1*1mieakb*_ga*MTg1NDUwNzQyMS4xNzUyNjMwNTMz*_ga_8JE65Q40S6*czE3NTI2MzA1MzIkbzEkZzEkdDE3NTI2MzA1NzMkajE5JGwwJGgw', tag: 'popular' },
  { src: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?_gl=1*1mieakb*_ga*MTg1NDUwNzQyMS4xNzUyNjMwNTMz*_ga_8JE65Q40S6*czE3NTI2MzA1MzIkbzEkZzEkdDE3NTI2MzA1NzMkajE5JGwwJGgw', tag: 'vegan' },
  { src: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?_gl=1*1mieakb*_ga*MTg1NDUwNzQyMS4xNzUyNjMwNTMz*_ga_8JE65Q40S6*czE3NTI2MzA1MzIkbzEkZzEkdDE3NTI2MzA1NzMkajE5JGwwJGgw', tag: 'spicy' },
  { src: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?_gl=1*1mieakb*_ga*MTg1NDUwNzQyMS4xNzUyNjMwNTMz*_ga_8JE65Q40S6*czE3NTI2MzA1MzIkbzEkZzEkdDE3NTI2MzA1NzMkajE5JGwwJGgw', tag: 'popular' }
];

function displayImages(filter = null) {
  const container = document.getElementById('imageGrid');
  container.innerHTML = '';

  imageData
    .filter(img => !filter || img.tag === filter)
    .forEach(img => {
      const el = document.createElement('img');
      el.src = img.src;
      container.appendChild(el);
    });
}

function filterImages(tag) {
  displayImages(tag);
  document.getElementById('aiSummary').innerText =
    `You're exploring ${tag} dishes. These are commonly found in local night markets and known for authentic taste.`;
}

document.getElementById('searchInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const query = e.target.value;
    document.getElementById('aiSummary').innerText =
      `Great query! Based on '${query}', we recommend starting with these visuals to explore further.`;
    displayImages();
  }
});

displayImages(); // Load default

/* --- Theme toggle --- */
const toggle = document.getElementById('themeToggle');
toggle.onclick = () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? '' : 'dark';
  localStorage.setItem('theme', dark ? '' : 'dark');
};
document.documentElement.dataset.theme = localStorage.getItem('theme') || '';

/* --- Sidebar on mobile --- */
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
sidebarToggle.onclick = () => sidebar.classList.toggle('open');

/* --- Smoother filter buttons --- */
document.querySelectorAll('.filters button').forEach(btn=>{
  btn.onclick = () => filterImages(btn.dataset.tag);
});
