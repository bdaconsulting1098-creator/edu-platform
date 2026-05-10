const fs = require('fs');

// Create new stories without tag and photo fields
const stories = [
  { name: "Yvonne", from: "十年护士", to: "商业数据分析师", salary: "年薪10万+美金", location: "硅谷", quote: "对初学者来说，朱老师的课真的非常棒。" },
  { name: "Derrick", from: "便利店打工", to: "银行数据分析师", salary: "两个月拿到Offer", location: "加拿大", quote: "一次面试就拿到了工作，学的技能正是雇主想要的。" },
  { name: "Rui", from: "商科零基础", to: "预算分析师", salary: "年薪8.5万美金", location: "美国", quote: "五轮面试，每一轮都有朱老师亲自辅导。" },
  { name: "小吴", from: "理工科背景", to: "政府数据分析师", salary: "年薪10万加币", location: "加拿大", quote: "SQL、Tableau、AI——三个月就拿到了政府职位。" },
  { name: "Kate", from: "UBC统计毕业", to: "数据运营专员", salary: "美国投资公司", location: "美国", quote: "实习项目对简历筛选和背景调查帮助非常大。" },
  { name: "UBC数学毕业生", from: "数学专业", to: "五大行商业数据分析师", salary: "10个月上岸", location: "加拿大", quote: "简历上的项目经验是拿到面试的主要原因，投了100+职位。" },
  { name: "Landon", from: "物理专业", to: "数据科学家", salary: "年薪10万+", location: "汽车行业Tier 1", quote: "物理转数据科学，用Python和数据库做预测性维护。" },
  { name: "技术支持岗", from: "课程毕业生", to: "技术支持分析师", salary: "已拿到Offer", location: "加拿大", quote: "模拟面试练习是最关键的。" }
];

// Write new zh.json with just the stories array
const newZh = {
  success: { stories: stories }
};

// Write as JSON with 2-space indent
const output = JSON.stringify(newZh, null, 2);
console.log(output);