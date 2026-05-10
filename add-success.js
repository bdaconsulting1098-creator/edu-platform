const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const zh = JSON.parse(fs.readFileSync('messages/zh.json', 'utf8'));
console.log('en keys:', Object.keys(en).slice(-5));
console.log('success in en:', 'success' in en);

const enSuccess = {
  eyebrow: 'Student Success Stories',
  headline: 'From Zero to Data Pro — Real Career Transformations',
  subheadline: 'Watch and read how real students went from no Canadian experience to landing coveted data jobs.',
  videoSection: 'Video Testimonials',
  storiesSection: 'Success Stories',
  watchVideo: 'Watch Story',
  viewOffer: 'View Offer',
  videos: [
    { name: 'Russel', platform: 'youtube', videoId: 'xzROxVN3GcI', result: 'Data Analyst', note: 'Victoria Success Story' },
    { name: 'Linda', platform: 'youtube', videoId: 'QaNCyE6GOig', result: 'Data Analyst', note: 'Victoria Class' },
    { name: 'Anna', platform: 'youtube', videoId: 'aq0i5swhoCI', result: 'Data Analyst', note: 'Victoria Class' },
    { name: 'James', platform: 'youtube', videoId: 'yCCGk5tCHZM', result: 'Data Analyst', note: 'Victoria Class' },
    { name: 'Sue', platform: 'youtube', videoId: 'EysRopcGQIk', result: 'Data Analyst', note: '10 Years US → $80K USD/yr' },
    { name: 'COCO', platform: 'vimeo', videoId: '1146668304', result: 'Data Analyst', note: '01:07:45 in Video' },
    { name: 'Landon', platform: 'vimeo', videoId: '1161169519', result: 'Data Scientist', note: '$100K+ / yr Physics → DS' }
  ],
  stories: [
    {
      name: 'Yvonne',
      from: '10-Year Nurse',
      to: 'BDA',
      salary: '$100K+ USD/yr',
      location: 'Silicon Valley',
      quote: "For beginners, Professor Zhu's course is really excellent.",
      tag: 'Career Pivot'
    },
    {
      name: 'Derrick',
      from: 'Convenience Store Worker',
      to: 'Bank Data Analyst',
      salary: '2 Months',
      location: 'Canada',
      quote: 'One interview and I got the job. Skills were exactly what employers wanted.',
      tag: 'Fast Track'
    },
    {
      name: 'Rui',
      from: 'Business Major, Zero Data',
      to: 'Budget Analyst',
      salary: '$85K USD/yr',
      location: 'USA',
      quote: '5 rounds of interviews, every one coached by Professor Zhu personally.',
      tag: '5 Interviews'
    },
    {
      name: 'Xiao Wu',
      from: 'Engineering Background',
      to: 'Gov Data Analyst',
      salary: '$100K/yr',
      location: 'Canada',
      quote: 'SQL, Tableau, AI — three months and I landed the government job.',
      tag: 'Government Role'
    },
    {
      name: 'Kate',
      from: 'UBC Statistics Grad',
      to: 'Data Operations Associate',
      salary: 'US Investment Firm',
      location: 'USA',
      quote: 'The internship program was huge for resume screening and background checks.',
      tag: 'New Grad'
    },
    {
      name: 'UBC Math Graduate',
      from: 'Math Major',
      to: 'Big 5 Bank BDA',
      salary: '10 Months',
      location: 'Canada',
      quote: 'Projects on resume were the main reason I got selected. Applied to 100+ jobs.',
      tag: 'Big 5 Bank'
    },
    {
      name: 'Landon',
      from: 'Physics Major',
      to: 'Data Scientist',
      salary: '$100K+/yr',
      location: 'Automotive Tier 1',
      quote: 'Physics to DS. Predictive maintenance with Python and databases.',
      tag: 'Data Scientist'
    },
    {
      name: 'Tech Support Hire',
      from: 'Course Graduate',
      to: 'Technical Support Analyst',
      salary: 'Job Offer',
      location: 'Canada',
      quote: 'Mock interview practice made all the difference.',
      tag: 'New Offer'
    }
  ]
};

const zhSuccess = {
  eyebrow: '成功学员故事',
  headline: '从零基础到数据专家——真实的职业蜕变',
  subheadline: '观看和阅读真实学员如何从零加拿大经验到拿下心仪的数据岗位。',
  videoSection: '视频分享',
  storiesSection: '成功案例',
  watchVideo: '观看分享',
  viewOffer: '查看Offer',
  videos: [
    { name: 'Russel', platform: 'youtube', videoId: 'xzROxVN3GcI', result: '数据分析师', note: '维多利亚分享会' },
    { name: 'Linda', platform: 'youtube', videoId: 'QaNCyE6GOig', result: '数据分析师', note: '维多利亚班学员' },
    { name: 'Anna', platform: 'youtube', videoId: 'aq0i5swhoCI', result: '数据分析师', note: '维多利亚班学员' },
    { name: 'James', platform: 'youtube', videoId: 'yCCGk5tCHZM', result: '数据分析师', note: '维多利亚班学员' },
    { name: 'Sue', platform: 'youtube', videoId: 'EysRopcGQIk', result: '数据分析师', note: '来美十年 → 年薪8万美金' },
    { name: 'COCO', platform: 'vimeo', videoId: '1146668304', result: '数据分析师', note: '01:07:45 视频分享' },
    { name: 'Landon', platform: 'vimeo', videoId: '1161169519', result: '数据科学家', note: '物理专业 → DS 年薪10万+' }
  ],
  stories: [
    {
      name: 'Yvonne',
      from: '十年护士',
      to: 'BDA数据分析师',
      salary: '年薪10万+美金',
      location: '硅谷',
      quote: '对于小白，朱老师的课实在太好了。',
      tag: '华丽转身'
    },
    {
      name: 'Derrick',
      from: '食品店打工',
      to: '银行数据分析师',
      salary: '仅用两个月',
      location: '加拿大',
      quote: '面试一次通过，技能正是雇主需要的。',
      tag: '快速就业'
    },
    {
      name: 'Rui',
      from: '商科零基础',
      to: 'Budget Analyst',
      salary: '年薪8.5万美金',
      location: '美国',
      quote: '经过5轮面试，每次都是朱老师一对一辅导的简历和面试。',
      tag: '5轮面试'
    },
    {
      name: '小吴',
      from: '理工科背景',
      to: '政府数据分析师',
      salary: '年薪10万',
      location: '加拿大',
      quote: 'SQL、Tableau、AI，三月内找到政府财务部门工作。',
      tag: '政府内推'
    },
    {
      name: 'Kate',
      from: 'UBC统计毕业生',
      to: 'Data Operations Associate',
      salary: '美国投资公司',
      location: '美国',
      quote: '实习班帮助极大，简历筛选和背调都顺利通过。',
      tag: '本地应届'
    },
    {
      name: 'UBC数学毕业生',
      from: '数学专业',
      to: '五大行BDA',
      salary: '10个月入职',
      location: '加拿大',
      quote: '简历上的项目经验是被选中的主要原因，大学毕业后投了100多份简历。',
      tag: '五大行'
    },
    {
      name: 'Landon',
      from: '纯物理专业',
      to: '数据科学家',
      salary: '年薪10万+',
      location: '汽车供应链Tier 1',
      quote: '物理 → 数据科学家。用Python和数据库做预测性维护。',
      tag: '数据科学家'
    },
    {
      name: '技术岗学员',
      from: '课程毕业生',
      to: 'Technical Support Analyst',
      salary: '收到Offer',
      location: '加拿大',
      quote: '面试模拟器演练让面试变得轻松。',
      tag: '新Offer'
    }
  ]
};

en.success = enSuccess;
zh.success = zhSuccess;

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync('messages/zh.json', JSON.stringify(zh, null, 2), 'utf8');
console.log('DONE! en.success:', 'success' in en);