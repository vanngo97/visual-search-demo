{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const imageData = [\
  \{ src: 'https://source.unsplash.com/400x300/?thai-food', tag: 'popular' \},\
  \{ src: 'https://source.unsplash.com/400x300/?street-food', tag: 'spicy' \},\
  \{ src: 'https://source.unsplash.com/400x300/?bangkok', tag: 'popular' \},\
  \{ src: 'https://source.unsplash.com/400x300/?vegan-food', tag: 'vegan' \},\
  \{ src: 'https://source.unsplash.com/400x300/?noodles', tag: 'spicy' \},\
  \{ src: 'https://source.unsplash.com/400x300/?mango-sticky-rice', tag: 'popular' \}\
];\
\
function displayImages(filter = null) \{\
  const container = document.getElementById('imageGrid');\
  container.innerHTML = '';\
\
  imageData\
    .filter(img => !filter || img.tag === filter)\
    .forEach(img => \{\
      const el = document.createElement('img');\
      el.src = img.src;\
      container.appendChild(el);\
    \});\
\}\
\
function filterImages(tag) \{\
  displayImages(tag);\
  document.getElementById('aiSummary').innerText =\
    `You're exploring $\{tag\} dishes. These are commonly found in local night markets and known for authentic taste.`;\
\}\
\
document.getElementById('searchInput').addEventListener('keypress', function (e) \{\
  if (e.key === 'Enter') \{\
    const query = e.target.value;\
    document.getElementById('aiSummary').innerText =\
      `Great query! Based on '$\{query\}', we recommend starting with these visuals to explore further.`;\
    displayImages();\
  \}\
\});\
\
displayImages(); // Load default\
}