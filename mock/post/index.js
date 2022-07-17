const { md_1, md_2 } = require("./markdown");

/**
 * 文章模拟数据
 * @param class_name {String} 文章分类名
 * @param art_id {String} 文章ID
 * @param art_title {String} 文章标题
 * @param art_intro {String} 文章简介
 * @param art_content {String} 文章正文内容
 * @param art_user_id {String} 文章发布者ID
 * @param user_name {String} 文章发布者名称
 * @param art_classify {String} 文章分类ID
 * @param art_tag {String} 文章标签
 * @param art_img {String} 文章配图
 * @param art_time {String} 文章发布时间
 */
const article_detials = 
[
  {
    "class_name|1": ["前端", "后端", "Java", "Python", "C++"],
    "art_id|1": ["20201213", "20210103", "20201106"],
    "art_title|1": ["JavaScript进阶", "CSS禅意花园", "HTML权威指南"],
    "art_intro|1": ["努力学习哟~", "看完这篇文章，你会发现原来如此简单", "快来围观呀"],
    "art_content|1": [md_1, md_2],
    "art_user_id|1": ["5f6efee7003f0000e70025fb", "6f6efee7052f0000e70025fb", "7f6efee7003f6006e70025fb"],
    "user_name|1": ["Greatiga", "鹿鹿" , "念念", "Tzw"],
    "art_classify|1": ["TD1", "SD1", "SD2"],
    "art_tag|1": [
      "JavaScript;Vue;Css",
      "Java;Python;C++",
      "HTML;React;Next"
    ],
    "art_img|1": [
      "https://static.greatiga.cn/classify/TD1/2021723142339153891.jpeg",
      "https://static.greatiga.cn/article/2021912155317165295/2021912155317165850.jpeg",
      "https://static.greatiga.cn/article/2021723142144717128/2021723142326585697.jpeg",
      "https://static.greatiga.cn/article/13002/317202.jpg"
    ],
    "art_time|1": '@datetime',
    "art_like|20-100": 30,
    "art_view|200-1000": 300,
    "art_comment_count|0-10": 1,
    "art_priority|1-5": 1,
    "art_check|1": [-1, 0, 1],
    "art_display|1-2": true
  }
]

export {
  article_detials
}