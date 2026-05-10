const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const zh = JSON.parse(fs.readFileSync('messages/zh.json', 'utf8'));

// Map PDFs page to student photos (0-indexed page numbers)
const studentPhotos = {
  russel: { page: 1, img: 'page_02.png', label: 'Russel' },
  linda:  { page: 5, img: 'page_06.png', label: 'Linda' },
  anna:   { page: 6, img: 'page_07.png', label: 'Anna' },
  james:  { page: 7, img: 'page_08.png', label: 'James' },
  sue:    { page: 10, img: 'page_11.png', label: 'Sue' },
  yvonne: { page: 11, img: 'page_12.png', label: 'Yvonne' },
  derrick:{ page: 13, img: 'page_14.png', label: 'Derrick' },
  kate:   { page: 23, img: 'page_24.png', label: 'Kate' },
};

// Video thumbnails
const videoThumbs = {
  russel: '/images/students/yt_russel.jpg',
  linda:  '/images/students/yt_linda.jpg',
  anna:   '/images/students/yt_anna.jpg',
  james:  '/images/students/yt_james.jpg',
  sue:    '/images/students/yt_sue.jpg',
  coco:   '/images/students/page_25.png',  // COCO video page
  landon: '/images/students/page_09.png',  // Landon video page
};

// Add thumbnails to video entries
const videoNames = ['russel', 'linda', 'anna', 'james', 'sue', 'coco', 'landon'];
en.success.videos = en.success.videos.map((v, i) => {
  const name = v.name.toLowerCase().replace(' ', '');
  return { ...v, thumbnail: videoThumbs[name] || videoThumbs[videoNames[i]] || '' };
});

// Add photo to story entries
const storyPhotos = {
  'Yvonne': '/images/students/page_12.png',
  'Derrick': '/images/students/page_14.png',
  'Rui': '/images/students/page_14.png',
  '小吴': '/images/students/page_14.png',
  'Kate': '/images/students/page_24.png',
  'UBC Math Graduate': '/images/students/page_24.png',
  'Landon': '/images/students/page_09.png',
  'Tech Support Hire': '/images/students/page_14.png',
};
en.success.stories = en.success.stories.map((s) => ({
  ...s,
  photo: storyPhotos[s.name] || '',
}));

// Same for zh
zh.success.videos = en.success.videos; // same order
zh.success.stories = en.success.stories.map((s, i) => ({
  ...s,
  photo: storyPhotos[s.name] || '',
}));

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync('messages/zh.json', JSON.stringify(zh, null, 2), 'utf8');

// Verify
const en2 = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
console.log('Videos with thumbs:');
en2.success.videos.forEach(v => console.log(`  ${v.name}: ${v.thumbnail}`));
console.log('Stories with photos:');
en2.success.stories.forEach(s => console.log(`  ${s.name}: ${s.photo}`));
console.log('DONE');