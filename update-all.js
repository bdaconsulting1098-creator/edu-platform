const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const zh = JSON.parse(fs.readFileSync('messages/zh.json', 'utf8'));

// 1. Add WeChat to contact section
en.contact.wechat = {
  title: 'WeChat / 微信',
  name: 'Charlene 二四 休',
  qrLabel: 'Scan to Add on WeChat',
  qrLabelZh: '扫二维码，添加我为朋友',
};
zh.contact.wechat = {
  title: '微信联系',
  name: 'Charlene 二四 休',
  qrLabel: 'Scan to Add on WeChat',
  qrLabelZh: '扫二维码，添加我为朋友',
};

// 2. Fix success stories - use YouTube thumbs for videos, PDF pages for stories
//    Also add wechat images for stories where available
en.success.videos = en.success.videos.map((v, i) => {
  const thumbs = [
    '/images/students/yt_russel.jpg',
    '/images/students/yt_linda.jpg',
    '/images/students/yt_anna.jpg',
    '/images/students/yt_james.jpg',
    '/images/students/yt_sue.jpg',
    '/images/students/page_25.png',
    '/images/students/page_09.png',
  ];
  return { ...v, thumbnail: thumbs[i] || '' };
});

// Story photos - use PDF extracted pages
const storyMap = {
  'Yvonne': '/images/students/page_12.png',
  'Derrick': '/images/students/page_14.png',
  'Rui': '/images/students/page_14.png',
  'Xiao Wu': '/images/students/page_10.png',
  'Kate': '/images/students/page_24.png',
  'UBC Math Graduate': '/images/students/page_24.png',
  'Landon': '/images/students/page_09.png',
  'Tech Support Hire': '/images/students/page_14.png',
};
en.success.stories = en.success.stories.map(s => ({
  ...s,
  photo: storyMap[s.name] || '',
}));

// zh - same structure
zh.success.videos = en.success.videos;
zh.success.stories = zh.success.stories.map((s, i) => ({
  ...s,
  photo: storyMap[s.name] || en.success.stories[i]?.photo || '',
}));

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync('messages/zh.json', JSON.stringify(zh, null, 2), 'utf8');

console.log('JSON updated. Verifying...');
const v = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
console.log('WeChat:', v.contact.wechat.title);
console.log('Video thumbs:', v.success.videos.map(x => x.name + ':' + (x.thumbnail?'YES':'NO')).join(', '));
console.log('Story photos:', v.success.stories.filter(x=>x.photo).map(x => x.name).join(', '));
console.log('DONE');