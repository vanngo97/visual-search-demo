const imageData = [
  { src: 'https://source.unsplash.com/400x300/?thai-food', tag: 'popular' },
  { src: 'https://source.unsplash.com/400x300/?street-food', tag: 'spicy' },
  { src: 'https://source.unsplash.com/400x300/?bangkok', tag: 'popular' },
  { src: 'https://source.unsplash.com/400x300/?vegan-food', tag: 'vegan' },
  { src: 'https://source.unsplash.com/400x300/?noodles', tag: 'spicy' },
  { src: 'https://source.unsplash.com/400x300/?mango-sticky-rice', tag: 'popular' }
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