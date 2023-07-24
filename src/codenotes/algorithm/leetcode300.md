---
# 当前页面内容标题
title: Leetcode&拉钩刷题秘籍
# 当前页面图标
icon: code
# 分类
category:
- 算法
# 标签
tag:
- 算法
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---




这门课是leetcode联合拉钩开展的一个300分钟搞定数据结构，主讲老师是一位来自谷歌的。

![image-20230722143929885](https://cdn.jsdelivr.net/gh/xiaou61/pictures/image-20230722143929885.png)

## 常用数据结构

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">数据结构是算法的基石，如果没有扎实的数据结构基础，想要把算法学好甚至融会贯通是非常困难的，而优秀的算法又往往取决于你采用哪种数据结构。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">所以，接下来两节课的主题是，在算法面试中经常会被用到的数据结构以及一些实用技巧。同时穿插一些经典的题目，加深理解。这节课主要讲：</span></p> 
<ul style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">数组、字符串</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">链表</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">栈</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">队列</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">双端队列</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">树</span></p></li> 
</ul> 
<h1 style="white-space: normal; background-color: rgb(255, 255, 255);"></h1> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">数组、字符串（Array &amp; String）</span></h6> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">字符串转化</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">数组和字符串是最基本的数据结构，在很多编程语言中都有着十分相似的性质，而围绕着它们的算法面试题也是最多的。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">很多时候，在分析字符串相关面试题的过程中，我们往往要针对字符串当中的每一个字符进行分析和处理，甚至有时候我们得先把给定的字符串转换成字符数组之后再进行分析和处理。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>举例：</strong>翻转字符串“algorithm”。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); line-height: 16.8667px; font-size: 11pt; color: rgb(73, 73, 73);">&nbsp;</p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); line-height: 16.8667px; font-size: 11pt; color: rgb(73, 73, 73);"><img src="http://s0.lgstatic.com/i/image2/M01/90/CA/CgoB5l2IRiCATj5LAGJa69BtQRA357.gif"></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); line-height: 16.8667px; font-size: 11pt; color: rgb(73, 73, 73);">&nbsp; &nbsp; &nbsp;&nbsp;</p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>解法：</strong>用两个指针，一个指向字符串的第一个字符 a，一个指向它的最后一个字符 m，然后互相交换。交换之后，两个指针向中央一步步地靠拢并相互交换字符，直到两个指针相遇。这是一种比较快速和直观的方法。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>注意：</strong>由于无法直接修改字符串里的字符，所以必须先把字符串变换为数组，然后再运用这个算法。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>数组的优缺点</strong></span></p></h2> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">要掌握一种数据结构，就必须要懂得分析它的优点和缺点。数组的优点在于：</span></p> 
<ul style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">构建非常简单</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">能在 O(1) 的时间里根据数组的下标（index）查询某个元素</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">而数组的缺点在于：</span></p> 
<ul style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">构建时必须分配一段连续的空间</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">查询某个元素是否存在时需要遍历整个数组，耗费 O(n) 的时间（其中，n 是元素的个数）</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">删除和添加某个元素时，同样需要耗费 O(n) 的时间</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">所以，当你在考虑是否应当采用数组去辅助你的算法时，请务必考虑它的优缺点，看看它的缺点是否会阻碍你的算法复杂度以及空间复杂度。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong style="font-size: 12pt;">例题分析</strong></span></p></h2> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 第 242 题：给定两个字符串 s 和 t，编写一个函数来判断 t 是否是 s 的字母异位词。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">说明：你可以假设字符串只包含小写字母。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例&nbsp;1</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入: s = "anagram", t = "nagaram"</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出: true</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入: s = "rat", t = "car"</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出: false</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">字母异位词，也就是两个字符串中的相同字符的数量要对应相等。例如，s 等于 “anagram”，t 等于 “nagaram”，s 和 t 就互为字母异位词。因为它们都包含有三个字符 a，一个字符 g，一个字符 m，一个字符 n，以及一个字符 r。而当 s 为 “rat”，t 为 “car”的时候，s 和 t 不互为字母异位词。</span></p> 
<h3 style="white-space: normal; background-color: rgb(255, 255, 255);"><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>解题思路</strong></span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">一个重要的前提“假设两个字符串只包含小写字母”，小写字母一共也就 26 个，因此：</span></p> 
<ol style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">可以利用两个长度都为 26 的字符数组来统计每个字符串中小写字母出现的次数，然后再对比是否相等；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">可以只利用一个长度为 26 的字符数组，将出现在字符串 s 里的字符个数加 1，而出现在字符串 t 里的字符个数减 1，最后判断每个小写字母的个数是否都为 0。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">按上述操作，可得出结论：s 和 t 互为字母异位词。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>建议</strong>：限于篇幅不对此题进行代码剖析，但是这道题非常经典，建议大家到 LeetCode 上试试。</span></p> 
<h1 style="white-space: normal; background-color: rgb(255, 255, 255);"></h1> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">链表（LinkedList）</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 16px;"><span style="color: rgb(67, 67, 67);">单链表：</span>链表中的每个元素实际上是一个单独的对象，而所有对象都通过每个元素中的引用字段链接在一起。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">双链表：与单链表不同的是，双链表的每个结点中都含有两个引用字段。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">链表的优缺点</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">链表的优点如下：</span></p> 
<ul style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">链表能灵活地分配内存空间；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">能在 O(1) 时间内删除或者添加元素，前提是该元素的前一个元素已知，当然也取决于是单链表还是双链表，在双链表中，如果已知该元素的后一个元素，同样可以在 O(1) 时间内删除或者添加该元素。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">链表的缺点是：</span></p> 
<ul style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">不像数组能通过下标迅速读取元素，每次都要从链表头开始一个一个读取；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">查询第 k 个元素需要 O(k) 时间。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>应用场景</strong>：如果要解决的问题里面需要很多快速查询，链表可能并不适合；如果遇到的问题中，数据的元素个数不确定，而且需要经常进行数据的添加和删除，那么链表会比较合适。而如果数据元素大小确定，删除插入的操作并不多，那么数组可能更适合。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">经典解法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">链表是实现很多复杂数据结构的基础，经典解法如下。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 利用快慢指针（有时候需要用到三个指针）</span></strong></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">典型题目例如：链表的翻转，寻找倒数第 k 个元素，寻找链表中间位置的元素，判断链表是否有环等等。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">2. 构建一个虚假的链表头</span></strong></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">一般用在要返回新的链表的题目中，比如，给定两个排好序的链表，要求将它们整合在一起并排好序。又比如，将一个链表中的奇数和偶数按照原定的顺序分开后重新组合成一个新的链表，链表的头一半是奇数，后一半是偶数。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在这类问题里，如果不用一个虚假的链表头，那么在创建新链表的第一个元素时，我们都得要判断一下链表的头指针是否为空，也就是要多写一条 if else 语句。比较简洁的写法是创建一个空的链表头，直接往其后面添加元素即可，最后返回这个空的链表头的下一个节点即可。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>建议：</strong>在解决链表的题目时，可以在纸上或者白板上画出节点之间的相互关系，然后画出修改的方法，既可以帮助你分析问题，又可以在面试的时候，帮助面试官清楚地看到你的思路。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 第 25 题：给你一个链表，每&nbsp;k&nbsp;个节点一组进行翻转，请你返回翻转后的链表。k&nbsp;是一个正整数，它的值小于或等于链表的长度。如果节点总数不是&nbsp;k&nbsp;的整数倍，那么请将最后剩余的节点保持原有顺序。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">说明：</span></p> 
<ul style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">你的算法只能使用常数的额外空间。</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong><br></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">给定这个链表：1-&gt;2-&gt;3-&gt;4-&gt;5</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当&nbsp;k=2 时，应当返回：2-&gt;1-&gt;4-&gt;3-&gt;5</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当&nbsp;k=3 时，应当返回：3-&gt;2-&gt;1-&gt;4-&gt;5</span></p> 
<h3 style="white-space: normal; background-color: rgb(255, 255, 255);"><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这道题考察了两个知识点：</span></p> 
<ol style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对链表翻转算法是否熟悉</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对递归算法的理解是否清晰</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在翻转链表的时候，可以借助三个指针：prev、curr、next，分别代表前一个节点、当前节点和下一个节点，实现过程如下所示。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://s0.lgstatic.com/i/image2/M01/90/E9/CgotOV2IRJ2AYlnUACToKJcAldQ867.gif">&nbsp; &nbsp; &nbsp;</span></p> 
<ol style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">将 curr 指向的下一节点保存到 next 指针；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">curr 指向 prev，一起前进一步；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">重复之前步骤，直到 k 个元素翻转完毕；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当完成了局部的翻转后，prev 就是最终的新的链表头，curr 指向了下一个要被处理的局部，而原来的头指针 head 成为了链表的尾巴。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>注意</strong>：这道题是“LeetCode 第 24 题，两个一组翻转链表“的扩展，即当 k 等于 2 时，第 25 题就变成了第 24 题。</span></p> 
<h1 style="white-space: normal; background-color: rgb(255, 255, 255);"></h1> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">栈（Stack）</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">特点：栈的最大特点就是后进先出（LIFO）。对于栈中的数据来说，所有操作都是在栈的顶部完成的，只可以查看栈顶部的元素，只能够向栈的顶部压⼊数据，也只能从栈的顶部弹出数据。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">实现：利用一个单链表来实现栈的数据结构。而且，因为我们都只针对栈顶元素进行操作，所以借用单链表的头就能让所有栈的操作在 O(1) 的时间内完成。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">应用场景：在解决某个问题的时候，只要求关心最近一次的操作，并且在操作完成了之后，需要向前查找到更前一次的操作。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如果打算用一个数组外加一个指针来实现相似的效果，那么，一旦数组的长度发生了改变，哪怕只是在最后添加一个新的元素，时间复杂度都不再是 O(1)，而且，空间复杂度也得不到优化。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>注意</strong>：栈是许多 LeetCode 中等难度偏上的题目里面经常需要用到的数据结构，掌握好它是十分必要的。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong style="font-size: 12pt;">例题分析一</strong></span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 第 20 题：给定一个只包括&nbsp;'('，')'，'{'，'}'，'['，']'&nbsp;的字符串，判断字符串是否有效。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">有效字符串需满足：</span></p> 
<ol style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">左括号必须用相同类型的右括号闭合。</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">左括号必须以正确的顺序闭合。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>注意</strong>：空字符串可被认为是有效字符串。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例 1</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入: "()"</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出: true</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入: "(]"</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出: false</span></p> 
<h3 style="white-space: normal; background-color: rgb(255, 255, 255);"><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">利用一个栈，不断地往里压左括号，一旦遇上了一个右括号，我们就把栈顶的左括号弹出来，表示这是一个合法的组合，以此类推，直到最后判断栈里还有没有左括号剩余。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><img src="http://s0.lgstatic.com/i/image2/M01/90/C9/CgoB5l2IRLSATKk3AMg-Ag7s3RA865.gif"></span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong style="font-size: 12pt;">例题分析二</strong></span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 第 739 题：根据每日气温列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用&nbsp;0&nbsp;来代替。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">提示：气温列表 temperatures 长度的范围是&nbsp;[1, 30000]。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例</strong>：给定一个数组 T 代表了未来几天里每天的温度值，要求返回一个新的数组 D，D 中的每个元素表示需要经过多少天才能等来温度的升高。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">给定 T：[23, 25, 21, 19, 22, 26, 23]</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">返回 D: &nbsp;[ &nbsp;1, &nbsp; 4, &nbsp;&nbsp;2, &nbsp; 1, &nbsp; 1, &nbsp;&nbsp;0, &nbsp; 0]</span></p> 
<h3 style="white-space: normal; background-color: rgb(255, 255, 255);"><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第一个温度值是 23 摄氏度，它要经过 1 天才能等到温度的升高，也就是在第二天的时候，温度升高到 24 摄氏度，所以对应的结果是 1。接下来，从 25 度到下一次温度的升高需要等待 4 天的时间，那时温度会变为 26 度。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>思路 1</strong>：最直观的做法就是针对每个温度值向后进行依次搜索，找到比当前温度更高的值，这样的计算复杂度就是<span style="color: rgb(0, 0, 0); font-size: 14px;">&nbsp;O(n<sup>2</sup>)。</span></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">但是，在这样的搜索过程中，产生了很多重复的对比。例如，从 25 度开始往后面寻找一个比 25 度更高的温度的过程中，经历了 21 度、19 度和 22 度，而这是一个温度由低到高的过程，也就是说在这个过程中已经找到了 19 度以及 21 度的答案，它就是 22 度。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>思路 2</strong>：可以运用一个堆栈 stack 来快速地知道需要经过多少天就能等到温度升高。从头到尾扫描一遍给定的数组 T，如果当天的温度比堆栈 stack 顶端所记录的那天温度还要高，那么就能得到结果。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><img src="http://s0.lgstatic.com/i/image2/M01/90/C9/CgoB5l2IRMSAYv0mAJhTnwV5DmQ777.gif">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p> 
<ol style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对第一个温度 23 度，堆栈为空，把它的下标压入堆栈；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">下一个温度 24 度，高于 23 度高，因此 23 度温度升高只需 1 天时间，把 23 度下标从堆栈里弹出，把 24 度下标压入；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">同样，从 24 度只需要 1 天时间升高到 25 度；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">21 度低于 25 度，直接把 21 度下标压入堆栈；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">19 度低于 21 度，压入堆栈；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">22 度高于 19 度，从 19 度升温只需 1 天，从 21 度升温需要 2 天；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">由于堆栈里保存的是下标，能很快计算天数；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">22 度低于 25 度，意味着尚未找到 25 度之后的升温，直接把 22 度下标压入堆栈顶端；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">后面的温度与此同理。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">该方法只需要对数组进行一次遍历，每个元素最多被压入和弹出堆栈一次，算法复杂度是 O(n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">利用堆栈，还可以解决如下常见问题：</span></p> 
<ul style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">求解算术表达式的结果（LeetCode 224、227、772、770)</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">求解直方图里最大的矩形区域（LeetCode 84）</span></p></li> 
</ul> 
<h1 style="white-space: normal; background-color: rgb(255, 255, 255);"></h1> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">队列（Queue）</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">特点：和栈不同，队列的最大特点是先进先出（FIFO），就好像按顺序排队一样。对于队列的数据来说，我们只允许在队尾查看和添加数据，在队头查看和删除数据。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">实现：可以借助双链表来实现队列。双链表的头指针允许在队头查看和删除数据，而双链表的尾指针允许我们在队尾查看和添加数据。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">应用场景：直观来看，当我们需要按照一定的顺序来处理数据，而该数据的数据量在不断地变化的时候，则需要队列来帮助解题。在算法面试题当中，广度优先搜索（Breadth-First Search）是运用队列最多的地方，我们将在第 06 课时中详细介绍。</span></p> 
<h1 style="white-space: normal; background-color: rgb(255, 255, 255);"></h1> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">双端队列（Deque）</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">特点：双端队列和普通队列最大的不同在于，它允许我们在队列的头尾两端都能在 O(1) 的时间内进行数据的查看、添加和删除。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">实现：与队列相似，我们可以利用一个双链表实现双端队列。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">应用场景：双端队列最常用的地方就是实现一个长度动态变化的窗口或者连续区间，而动态窗口这种数据结构在很多题目里都有运用。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 第 239 题：给定一个数组&nbsp;nums，有一个大小为&nbsp;k&nbsp;的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口&nbsp;k 内的数字，滑动窗口每次只向右移动一位。返回滑动窗口最大值。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>注意：</strong>你可以假设&nbsp;k&nbsp;总是有效的，1 ≤ k ≤&nbsp;输入数组的大小，且输入数组不为空。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例：</strong>给定一个数组以及一个窗口的长度 k，现在移动这个窗口，要求打印出一个数组，数组里的每个元素是当前窗口当中最大的那个数。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入：nums = [1, 3, -1, -3, 5, 3, 6, 7]，k = 3</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出：[3, 3, 5, 5, 6, 7]</span></p> 
<h3 style="white-space: normal; background-color: rgb(255, 255, 255);"></h3> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>思路 1</strong>：移动窗口，扫描，获得最大值。假设数组里有 n 个元素，算法复杂度就是 O(n)。这是最直观的做法。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>思路 2</strong>：利用一个双端队列来保存当前窗口中最大那个数在数组里的下标，双端队列新的头就是当前窗口中最大的那个数。通过该下标，可以很快地知道新的窗口是否仍包含原来那个最大的数。如果不再包含，我们就把旧的数从双端队列的头删除。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因为双端队列能让上面的这两种操作都能在 O(1) 的时间里完成，所以整个算法的复杂度能控制在 O(n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><img src="http://s0.lgstatic.com/i/image2/M01/90/E9/CgotOV2IRR6AHz-iADMO9EtKhbI610.gif">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<ol style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">初始化窗口 k=3，包含 1，3，-1，把 1 的下标压入双端队列的尾部；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">把 3 和双端队列的队尾的数据逐个比较，3 &gt;1，把 1 的下标弹出，把 3 的下标压入队尾；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">-1&lt;3，-1 压入双端队列队尾保留到下一窗口进行比较；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3 为当前窗口的最大值；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">窗口移动，-3 与队尾数据逐个比较，-3&lt;-1，-3 压入双端队列队尾保留；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3 为当前窗口的最大值；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">窗口继续移动，5&gt;-3，-3 从双端队列队尾弹出；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">5&gt;-1，-1 从队尾弹出；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3 超出当前窗口，从队列头部弹出；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">5 压入队列头部，成为当前窗口最大值；</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">继续移动窗口，操作与上述同理。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">窗口最大值只需读取双端队列头部元素。</span></p> 
<h1 style="white-space: normal; background-color: rgb(255, 255, 255);"></h1> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">树（Tree）</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">树的结构十分直观，而树的很多概念定义都有一个相同的特点：递归，也就是说，一棵树要满足某种性质，往往要求每个节点都必须满足。例如，在定义一棵二叉搜索树时，每个节点也都必须是一棵二叉搜索树。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">正因为树有这样的性质，大部分关于树的面试题都与递归有关，换句话说，面试官希望通过一道关于树的问题来考察你对于递归算法掌握的熟练程度。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">树的形状</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在面试中常考的树的形状有：普通二叉树、平衡二叉树、完全二叉树、二叉搜索树、四叉树（Quadtree）、多叉树（N-ary Tree）。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">对于一些特殊的树，例如红黑树（Red-Black Tree）、自平衡二叉搜索树（AVL Tree），一般在面试中不会被问到，除非你所涉及的研究领域跟它们相关或者你十分感兴趣，否则不需要特别着重准备。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">关于树的考题，无非就是要考查树的遍历以及序列化（serialization)。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">树的遍历</span></h6> 
<p style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>1. 前序遍历（Preorder Traversal）</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">方法：先访问根节点，然后访问左子树，最后访问右子树。在访问左、右子树的时候，同样，先访问子树的根节点，再访问子树根节点的左子树和右子树，这是一个不断递归的过程。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/E9/CgotOV2IRUqAYTBNAHdENl7o0CI095.gif"></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">应用场景：运用最多的场合包括在树里进行搜索以及创建一棵新的树。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>2. 中序遍历（Inorder Traversal）</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">方法：先访问左子树，然后访问根节点，最后访问右子树，在访问左、右子树的时候，同样，先访问子树的左边，再访问子树的根节点，最后再访问子树的右边。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><img src="http://s0.lgstatic.com/i/image2/M01/90/E9/CgotOV2IRWCAF4adALLk-4fku-E775.gif">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">应用场景：最常见的是二叉搜索树，由于二叉搜索树的性质就是左孩子小于根节点，根节点小于右孩子，对二叉搜索树进行中序遍历的时候，被访问到的节点大小是按顺序进行的。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. 后序遍历（Postorder Traversal）</span></strong></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">方法：先访问左子树，然后访问右子树，最后访问根节点。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><img src="http://s0.lgstatic.com/i/image2/M01/90/CA/CgoB5l2IRW6AKLrvAL5-qvzxLkw345.gif">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">应用场景：在对某个节点进行分析的时候，需要来自左子树和右子树的信息。收集信息的操作是从树的底部不断地往上进行，好比你在修剪一棵树的叶子，修剪的方法是从外面不断地往根部将叶子一片片地修剪掉。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>注意</strong>：</span></p> 
<ul style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">掌握好这三种遍历的递归写法和非递归写法是非常重要的，懂得分析各种写法的时间复杂度和空间复杂度同样重要。</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">无论是前端工程师，还是后端工程师，在准备面试的时候，树这个数据结构都是最应该花时间学习的，既能证明你对递归有很好的认识，又能帮助你学习图论（关于图论，我们将在下一节课一起讨论）。树的许多性质都是面试的热门考点，尤其是二叉搜索树（BST）。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong><br></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>建议</strong>：练习一道经典的 LeetCode 第 250 题，在一棵二叉树里，统计有多少棵子树，要求子树里面的元素拥有相同的数字。</span></p> 
<h2 style="white-space: normal; background-color: rgb(255, 255, 255);"></h2> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 第 230 题：给定一个二叉搜索树，编写一个函数&nbsp;kthSmallest&nbsp;来查找其中第&nbsp;k&nbsp;个最小的元素。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">说明：你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。</span></p> 
<h3 style="white-space: normal; background-color: rgb(255, 255, 255);"><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这道题考察了两个知识点：</span></p> 
<ol style=" white-space: normal; background-color: rgb(255, 255, 255);"> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">二叉搜索树的性质</span></p></li> 
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">二叉搜索树的遍历</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二叉搜索树的性质：对于每个节点来说，该节点的值比左孩子大，比右孩子小，而且一般来说，二叉搜索树里不出现重复的值。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二叉搜索树的中序遍历是高频考察点，节点被遍历到的顺序是按照节点数值大小的顺序排列好的。即，中序遍历当中遇到的元素都是按照从小到大的顺序出现。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因此，我们只需要对这棵树进行中序遍历的操作，当访问到第 k 个元素的时候返回结果就好。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><img src="http://s0.lgstatic.com/i/image2/M01/90/CA/CgoB5l2IRaOAag5tAHlWAofWh6A551.gif">&nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>注意</strong>：这道题可以变成求解第 K 大的元素，方法就是对这个二叉搜索树进行反向的中序遍历，那么数据的被访问顺序就是由大到小了。</span></p> 
<h1 style="white-space: normal; background-color: rgb(255, 255, 255);"></h1> 
<h6 style="white-space: normal; background-color: rgb(255, 255, 255); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">总结</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这节课主要讲解算法面试中常用的基本数据结构。掌握好这些数据结构是基础，绝大部分的算法面试题都得靠它们来帮忙，因此，一定要花功夫勤练题目来深入理解它们。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; background-color: rgb(255, 255, 255); font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">下一节课将讲解相对高级的数据结构，对应解决的是许多中等难度以上的面试题目。</span></p> 





## 高级数据结构

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">上一课时主要讲解了一些常用的数据结构和它们的使用技巧，以及一些经典的例题。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">然而，仅仅掌握好它们不足以应付大厂的算法面试的。为了达到对时间和空间复杂度的理想要求，本节课探究高级数据结构，它们的实现要比那些常用的数据结构要复杂得多。其中重点介绍：</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">优先队列</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">图</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">前缀树</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">线段树</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">树状数组</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">掌握好高级数据结构的性质以及所适用的场合，在分析问题的时候回归本质，很多题目都能迎刃而解。</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">优先队列（Priority Queue）</span></h6> 
<h3></h3> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">特点</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">能保证每次取出的元素都是队列中优先级别最高的。优先级别可以是自定义的，例如，数据的数值越大，优先级越高；或者数据的数值越小，优先级越高。优先级别甚至可以通过各种复杂的计算得到。</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">应用场景</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">从一堆杂乱无章的数据当中按照一定的顺序（或者优先级）逐步地筛选出部分乃至全部的数据。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>举例</strong>：任意一个数组，找出前&nbsp;k&nbsp;大的数。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法 1</strong>：先对这个数组进行排序，然后依次输出前&nbsp;k&nbsp;大的数，复杂度将会是&nbsp;O(nlogn)，其中，n&nbsp;是数组的元素个数。这是一种直接的办法。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法 2</strong>：使用优先队列，复杂度优化成&nbsp;O(k + nlogk)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当数据量很大（即&nbsp;n&nbsp;很大），而&nbsp;k&nbsp;相对较小的时候，显然，利用优先队列能有效地降低算法复杂度。因为要找出前&nbsp;k&nbsp;大的数，并不需要对所有的数进行排序。</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">实现</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">优先队列的本质是一个二叉堆结构。堆在英文里叫&nbsp;Binary Heap，它是利用一个数组结构来实现的完全二叉树。换句话说，优先队列的本质是一个数组，数组里的每个元素既有可能是其他元素的父节点，也有可能是其他元素的子节点，而且，每个父节点只能有两个子节点，很像一棵二叉树的结构。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">牢记下面优先队列有三个重要的性质。</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1. 数组里的第一个元素&nbsp;array[0]&nbsp;拥有最高的优先级别。</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2. 给定一个下标 i，那么对于元素 array[i] 而言：</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">它的父节点所对应的元素下标是 (i-1)/2</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">它的左孩子所对应的元素下标是 2×i + 1</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">它的右孩子所对应的元素下标是 2×i + 2</span></p></li> 
</ul> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">3. 数组里每个元素的优先级别都要高于它两个孩子的优先级别。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">优先队列最基本的操作有两个。</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1. 向上筛选（sift&nbsp;up / bubble up）</span></strong></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当有新的数据加入到优先队列中，新的数据首先被放置在二叉堆的底部。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">不断进行向上筛选的操作，即如果发现该数据的优先级别比父节点的优先级别还要高，那么就和父节点的元素相互交换，再接着往上进行比较，直到无法再继续交换为止。</span></p><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://s0.lgstatic.com/i/image2/M01/90/EC/CgotOV2ISXaAJ9iGACXUNreouXo038.gif"></span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">时间复杂度：由于二叉堆是一棵完全二叉树，并假设堆的大小为&nbsp;k，因此整个过程其实就是沿着树的高度往上爬，所以只需要&nbsp;O(logk)&nbsp;的时间。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2. 向下筛选（sift down / bubble down）</span></strong></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当堆顶的元素被取出时，要更新堆顶的元素来作为下一次按照优先级顺序被取出的对象，需要将堆底部的元素放置到堆顶，然后不断地对它执行向下筛选的操作。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">将该元素和它的两个孩子节点对比优先级，如果优先级最高的是其中一个孩子，就将该元素和那个孩子进行交换，然后反复进行下去，直到无法继续交换为止。</span></p><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://s0.lgstatic.com/i/image2/M01/90/CC/CgoB5l2ISa-Af-7tAB97MaSBBWo211.gif"></span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">时间复杂度：整个过程就是沿着树的高度往下爬，所以时间复杂度也是&nbsp;O(logk)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">因此，无论是添加新的数据还是取出堆顶的元素，都需要&nbsp;O(logk)&nbsp;的时间。</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">初始化</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">优先队列的初始化是一个最重要的时间复杂度，是分析运用优先队列性能时必不可少的，也是经常容易弄错的地方。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>举例</strong>：有&nbsp;n&nbsp;个数据，需要创建一个大小为&nbsp;n&nbsp;的堆。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>误区</strong>：每当把一个数据加入到堆里，都要对其执行向上筛选的操作，这样一来就是&nbsp;O(nlogn)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法</strong>：在创建这个堆的过程中，二叉树的大小是从&nbsp;1&nbsp;逐渐增长到&nbsp;n&nbsp;的，所以整个算法的复杂度经过推导，最终的结果是 O(n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/B0/CgoB5l2ILXuAYVN6AAAwD4S9aDs940.png">&nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>注意</strong>：算法面试中是不要求推导的，你只需要记住，初始化一个大小为&nbsp;n&nbsp;的堆，所需要的时间是&nbsp;O(n)&nbsp;即可。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">例题分析</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">LeetCode 第&nbsp;347&nbsp;题：给定一个非空的整数数组，返回其中出现频率前&nbsp;k<strong><em>&nbsp;</em></strong>高的元素。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">说明：</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">你可以假设给定的&nbsp;k<em>&nbsp;</em>总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">你的算法的时间复杂度必须优于&nbsp;O(nlogn) ，n&nbsp;是数组的大小</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>示例：</strong>car，car，book，desk，desk，desk</span></p> 
<h3><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">这道题的输入是一个字符串数组，数组里的元素可能会重复一次甚至多次，要求按顺序输出前&nbsp;k&nbsp;个出现次数最多的字符串。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解这类求"前 k 个"的题目，关键是看如何定义优先级以及优先队列中元素的数据结构。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">题目中有”前&nbsp;k&nbsp;个“这样的字眼，应该很自然地联想到优先队列。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">优先级别可以由字符串出现的次数来决定，出现的次数越多，优先级别越高，反之越低。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">统计词频的最佳数据结构就是哈希表（Hash&nbsp;Map），利用一个哈希表，就能快速地知道每个单词出现的次数。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">将单词和其出现的次数作为一个新的对象来构建一个优先队列，那么这个问题就很轻而易举地解决了。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">建议</span></strong><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">：这道题是利用优先队列处理问题的典型，建议好好练习。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desk (3)</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp; &nbsp;\</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>&nbsp;&nbsp;</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;car(2) &nbsp; book(1)</strong><strong>&nbsp;</strong><strong>&nbsp; &nbsp; &nbsp; &nbsp;</strong>&nbsp;&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">图（Graph）</span></h6> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">基本知识点</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">图可以说是所有数据结构里面知识点最丰富的一个，最基本的知识点如下。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">阶（Order）、度：出度（Out-Degree）、入度（In-Degree）</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">树（Tree）、森林（Forest）、环（Loop）</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">有向图（Directed Graph）、无向图（Undirected Graph）、完全有向图、完全无向图</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">连通图（Connected Graph）、连通分量（Connected Component）</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">存储和表达方式：邻接矩阵（Adjacency Matrix）、邻接链表（Adjacency List）</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">围绕图的算法也是五花八门。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">图的遍历：深度优先、广度优先</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">环的检测：有向图、无向图</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">拓扑排序</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">最短路径算法：Dijkstra、Bellman-Ford、Floyd Warshall</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">连通性相关算法：Kosaraju、Tarjan、求解孤岛的数量、判断是否为树</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">图的着色、旅行商问题等</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">以上的知识点只是图论里的冰山一角，对于算法面试而言，完全不需要对每个知识点都一一掌握，而应该有的放矢地进行准备。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">必会知识点</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">根据长期的经验总结，以下的知识点是必须充分掌握并反复练习的。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">图的存储和表达方式：邻接矩阵（Adjacency Matrix）、邻接链表（Adjacency List）</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">图的遍历：深度优先、广度优先</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">二部图的检测（Bipartite）、树的检测、环的检测：有向图、无向图</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">拓扑排序</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">联合-查找算法（Union-Find）</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">最短路径：Dijkstra、Bellman-Ford</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">其中，环的检测、二部图的检测、树的检测以及拓扑排序都是基于图的遍历，尤其是深度优先方式的遍历。而遍历可以在邻接矩阵或者邻接链表上进行，所以掌握好图的遍历是重中之重！因为它是所有其他图论算法的基础。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">至于最短路径算法，能区分它们的不同特点，知道在什么情况下用哪种算法就很好了。对于有充足时间准备的面试者，能熟练掌握它们的写法当然是最好的。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>建议</strong>：LeetCode 里边有许多关于图论的算法题，而且都是非常经典的题目，可以通过练习解题来熟练掌握必备知识。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">例题分析</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">LeetCode 第&nbsp;785&nbsp;题：给定一个无向图 graph，当这个图为二部图时返回 true。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">提示：如果能将一个图的节点集合分割成两个独立的子集 A 和 B，并使图中的每一条边的两个节点一个来自 A 集合，一个来自 B 集合，就将这个图称为二部图。</span></p> 
<h3><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">判断一个给定的任意图是否为二部图，就必须要对该图进行一次遍历：</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">深度优先</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">广度优先</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">（关于深度优先和广度优先算法，将在第&nbsp;06&nbsp;节课进行详细讨论）。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">二部图，图的所有顶点可以分成两个子集 U 和 V，子集里的顶点互不直接相连，图里面所有的边，一头连着子集 U 里的顶点，一头连着子集 V 里的顶点。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><img src="http://s0.lgstatic.com/i/image2/M01/90/EC/CgotOV2ISc-ADjNDAK_6wbp-nzI430.gif"></span><br></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">给图里的顶点涂上颜色，子集&nbsp;U&nbsp;里的顶点都涂上红色，子集&nbsp;V&nbsp;里的顶点都涂上蓝色。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">开始遍历这个图的所有顶点，想象一下手里握有红色和蓝色的画笔，每次交替地给遍历当中遇到的顶点涂上颜色。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果这个顶点还没有颜色，那就给它涂上颜色，然后换成另外一支画笔。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">下一个顶点，如果发现这个顶点已经涂上了颜色，而且颜色跟我手里画笔的颜色不同，那么表示这个顶点它既能在子集&nbsp;U&nbsp;里，也能在子集&nbsp;V&nbsp;里。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">所以，它不是一个二部图。</span></p></li> 
</ol> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">前缀树（Trie）</span></h6> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">应用场景</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">前缀树被广泛地运用在字典查找当中，也被称为字典树。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>举例</strong>：给定一系列字符串，这些字符串构成了一种字典，要求你在这个字典当中找出所有以“ABC”开头的字符串。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法 1</strong>：暴力搜索</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">直接遍历一遍字典，然后逐个判断每个字符串是否由“ABC”开头。假设字典很大，有&nbsp;N&nbsp;个单词，要对比的不是“ABC”，而是任意的，那不妨假设所要对比的开头平均长度为&nbsp;M，那么时间复杂度是&nbsp;O(M×N)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法 2</strong>：前缀树</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果用前缀树头帮助对字典的存储进行优化，那么可以把搜索的时间复杂度下降为&nbsp;O(M)，其中&nbsp;M&nbsp;表示字典里最长的那个单词的字符个数，在很多情况下，字典里的单词个数&nbsp;N&nbsp;是远远大于&nbsp;M&nbsp;的。因此，前缀树在这种场合中是非常高效的。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">经典应用</span></h6> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">网站上的搜索框会罗列出以搜索文字作为开头的相关搜索信息，这里运用了前缀树进行后端的快速检索。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">汉字拼音输入法的联想输出功能也运用了前缀树。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">举例</span></strong><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">：假如有一个字典，字典里面有如下词："A"，"to"，"tea"，"ted"，"ten"，"i"，"in"，"inn"，每个单词还能有自己的一些权重值，那么用前缀树来构建这个字典将会是如下的样子：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/D0/CgotOV2ILXyAAbuPAAHuMjoQ0_M307.png">&nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">性质</span></h6> 
<p style="text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1.&nbsp;每个节点至少包含两个基本属性。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">children：数组或者集合，罗列出每个分支当中包含的所有字符</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">isEnd：布尔值，表示该节点是否为某字符串的结尾</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2. 前缀树的根节点是空的</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">所谓空，即只利用到这个节点的&nbsp;children&nbsp;属性，即只关心在这个字典里，有哪些打头的字符。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">3. 除了根节点，其他所有节点都有可能是单词的结尾，叶子节点一定都是单词的结尾。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">实现</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">前缀树最基本的操作就是两个：创建和搜索。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 创建</span></strong></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">遍历一遍输入的字符串，对每个字符串的字符进行遍历</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">从前缀树的根节点开始，将每个字符加入到节点的&nbsp;children&nbsp;字符集当中。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果字符集已经包含了这个字符，则跳过。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果当前字符是字符串的最后一个，则把当前节点的&nbsp;isEnd&nbsp;标记为真。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">由上，创建的方法很直观。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">前缀树真正强大的地方在于，每个节点还能用来保存额外的信息，比如可以用来记录拥有相同前缀的所有字符串。因此，当用户输入某个前缀时，就能在&nbsp;O(1)&nbsp;的时间内给出对应的推荐字符串。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2. 搜索</span></strong></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">与创建方法类似，从前缀树的根节点出发，逐个匹配输入的前缀字符，如果遇到了就继续往下一层搜索，如果没遇到，就立即返回。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<h2><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">例题分析</span></p></h2> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">LeetCode 第&nbsp;212&nbsp;题：给定一个二维网格&nbsp;board&nbsp;和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 1.7; font-size: 11pt; color: rgb(73, 73, 73); text-align: center;"><span style="font-size: 11pt;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="font-size: 11pt;" src="http://s0.lgstatic.com/i/image2/M01/90/B0/CgoB5l2ILXyAYLwPAAAO6ajgsHk324.png"><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">说明：你可以假设所有输入都由小写字母&nbsp;a-z&nbsp;组成。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<h3><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">这是一道出现较为频繁的难题，题目给出了一个二维的字符矩阵，然后还给出了一个字典，现在要求在这个字符矩阵中找到出现在字典里的单词。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">由于字符矩阵的每个点都能作为一个字符串的开头，所以必须得尝试从矩阵中的所有字符出发，上下左右一步步地走，然后去和字典进行匹配，如果发现那些经过的字符能组成字典里的单词，就把它记录下来。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">可以借用深度优先的算法来实现（关于深度优先算法，将在第 06 节课深入探讨），如果你对它不熟悉，可以把它想象成走迷宫。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><img src="http://s0.lgstatic.com/i/image2/M01/90/CD/CgoB5l2IShaAfIDFAAElACD4d7I232.png"></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><strong style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">字典匹配的解法 1</strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">：每次都循环遍历字典，看看是否存在字典里面，如果把输入的字典变为哈希集合的话，似乎只需要&nbsp;O(1)&nbsp;的时间就能完成匹配。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">但是，这样并不能进行前缀的对比，即，必须每次都要进行一次全面的深度优先搜索，或者搜索的长度为字典里最长的字符串长度，这样还是不够高效。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>字典匹配的解法 2</strong>：对比字符串的前缀，借助前缀树来重新构建字典。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">假如在矩阵里遇到了一个字符”V”，而字典里根本就没有以“V”开头的字符串，则不需要将深度优先搜索进行下去，可以大大地提高搜索效率。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">构建好了前缀树之后，每次从矩阵里的某个字符出发进行搜索的时候，同步地对前缀树进行对比，如果发现字符一直能被找到，就继续进行下去，一步一步地匹配，直到在前缀树里发现一个完整的字符串，把它输出即可。</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">线段树（Segment Tree）</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>举例</strong>：假设有一个数组&nbsp;array[0 … n-1]， 里面有&nbsp;n&nbsp;个元素，现在要经常对这个数组做两件事。</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">更新数组元素的数值</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">求数组任意一段区间里元素的总和（或者平均值）</span></p><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span></p></li> 
</ol> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong><br></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法 1</strong>：遍历一遍数组。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">时间复杂度&nbsp;O(n)。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong><br></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法 2</strong>：线段树。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">线段树，就是一种按照二叉树的形式存储数据的结构，每个节点保存的都是数组里某一段的总和。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">适用于数据很多，而且需要频繁更新并求和的操作。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">时间复杂度 O(logn)。</span></p></li> 
</ul> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">实现</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>举例</strong>：数组是&nbsp;[1, 3, 5, 7, 9,&nbsp;11]，那么它的线段树如下。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 1.7; font-size: 11pt; color: rgb(73, 73, 73); text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/D0/CgotOV2ILX2AB5E_AABPrKDb2WM573.png"></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">根节点保存的是从下标&nbsp;0&nbsp;到下标&nbsp;5&nbsp;的所有元素的总和，即&nbsp;36。左右两个子节点分别保存左右两半元素的总和。按照这样的逻辑不断地切分下去，最终的叶子节点保存的就是每个元素的数值。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法</strong>：</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1. 更新数组里某个元素的数值</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">从线段树的根节点出发，更新节点的数值，它保存的是数组元素的总和。修改的元素有可能会落在线段树里一些区间里，至少叶子节点是肯定需要更新的，所以，要做的是从根节点往下，判断元素的下标是否在左边还是右边，然后更新分支里的节点大小。因此，复杂度就是遍历树的高度，即&nbsp;O(logn)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2. 对数组某个区间段里的元素进行求和</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">方法和更新操作类似，首先从根节点出发，判断所求的区间是否落在节点所代表的区间中。如果所要求的区间完全包含了节点所代表的区间，那么就得加上该节点的数值，意味着该节点所记录的区间总和只是所要求解总和的一部分。接下来，不断地往下寻找其他的子区间，最终得出所要求的总和。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>建议</strong>：线段树的实现书写起来有些繁琐，需要不断地练习。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p> 
<h6 style="margin-bottom: 0pt; margin-top: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(0, 0, 0); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析</span><br></h6> 
<h6 style="margin-bottom: 0pt; margin-top: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(0, 0, 0);"><br></span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">LeetCode 第&nbsp;315&nbsp;题：给定一个整数数组 nums，按要求返回一个新数组 counts，使得数组 counts 有该性质——counts[i] 的值是 nums[i] 右侧小于&nbsp;nums[i] 的元素的数量。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>示例</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">输入：[5, 2, 6, 1]</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">输出：[2, 1, 1, 0]&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解释</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">5 的右侧有 2 个更小的元素（2 和 1）</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2 的右侧仅有 1 个更小的元素（1）</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">6 的右侧有 1 个更小的元素（1）</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1 的右侧有 0 个更小的元素</span></p> 
<h3><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">给定一个数组&nbsp;nums，里面都是一些整数，现在要求打印输出一个新的数组&nbsp;counts，counts&nbsp;数组的每个元素&nbsp;counts[i]&nbsp;表示&nbsp;nums&nbsp;中第&nbsp;i&nbsp;个元素右边有多少个数小于&nbsp;nums[i]。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">例如，输入数组是&nbsp;[5, 2,&nbsp;6, 1]，应该输出的结果是&nbsp;[2, 1, 1, 0]。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">因为，对于&nbsp;5，右边有两个数比它小，分别是&nbsp;2&nbsp;和&nbsp;1，所以输出的结果中，第一个元素是&nbsp;2；对于&nbsp;2，右边只有&nbsp;1&nbsp;比它小，所以第二个元素是&nbsp;1，类推。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果使用线段树解法，需要理清线段树的每个节点应该需要包含什么样的信息。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">线段树每个节点记录的区间是数组下标所形成的区间，然而对于这道题，因为要统计的是比某个数还要小的数的总和，如果把分段的区间设计成按照数值的大小来划分，并记录下在这个区间中的数的总和，就能快速地知道比当前数还要小的数有多少个。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><img src="http://s0.lgstatic.com/i/image2/M01/90/ED/CgotOV2IStmAJxNFAHcB4XzkqCg286.gif">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">1. 首先，让从线段树的根节点开始，根节点记录的是数组里最小值到最大值之间的所有元素的总和，然后分割根节点成左区间和右区间，不断地分割下去。</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2. 初始化，每个节点记录的在此区间内的元素数量是&nbsp;0，接下来从数组的最后一位开始往前遍历，每次遍历，判断这个数落在哪个区间，那么那个区间的数量加一。</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">3. 遇到&nbsp;1，把它加入到线段树里，此时线段树里各个节点所统计的数量会发生变化。</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">4. 当前所遇到的最小值就是&nbsp;1。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">5.&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">把&nbsp;6&nbsp;加入到线段树里。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">6. 求比&nbsp;6&nbsp;小的数有多少个，即查询线段树，从&nbsp;1&nbsp;到&nbsp;5&nbsp;之间有多少个数。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">7. 从根节点开始查询。由于所要查询的区间是&nbsp;1&nbsp;到&nbsp;5，无法包含根节点的区间&nbsp;1&nbsp;到&nbsp;6，所以继续往下查询。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">8. 左边，区间&nbsp;1&nbsp;到&nbsp;3&nbsp;被完全包含在&nbsp;1&nbsp;到&nbsp;5&nbsp;之间，把该节点所统计好的数返回。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">9. 右边，区间&nbsp;1&nbsp;到&nbsp;5&nbsp;跟区间&nbsp;4&nbsp;到&nbsp;6&nbsp;有交叉，继续往下看，区间&nbsp;4&nbsp;到&nbsp;5&nbsp;完全被包含在&nbsp;1&nbsp;到&nbsp;5&nbsp;之间，所以可以马上返回，并把统计的数量相加。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">10. 最后得出，在当前位置，在&nbsp;6&nbsp;的右边比&nbsp;6&nbsp;小的数只有一个。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">通过这样的方法，每次把当前的数用线段树进行个数统计，然后再计算出比它小的数即可。算法复杂度是&nbsp;O(nlogm)。</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">树状数组（Fenwick Tree / Binary Indexed Tree）</span></h6> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">实现</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>举例</strong>：假设有一个数组&nbsp;array[0 … n-1]， 里面有&nbsp;n&nbsp;个元素，现在要经常对这个数组做两件事。</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">更新数组元素的数值</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">求数组前&nbsp;k&nbsp;个元素的总和（或者平均值）</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法 1</strong>：线段树。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">线段树能在&nbsp;O(logn)&nbsp;的时间里更新和求解前&nbsp;k&nbsp;个元素的总和。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>解法 2</strong>：树状数组。</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">该问题只要求求解前 k 个元素的总和，并不要求任意一个区间。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">树状数组可以在&nbsp;O(logn)&nbsp;的时间里完成上述的操作。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">相对于线段树的实现，树状数组显得更简单。</span></p></li> 
</ul> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">特点</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">树状数组的数据结构有以下几个重要的基本特征。</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">它是利用数组来表示多叉树的结构，在这一点上和优先队列有些类似，只不过，优先队列是用数组来表示完全二叉树，而树状数组是多叉树。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">树状数组的第一个元素是空节点。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果节点&nbsp;tree[y]&nbsp;是&nbsp;tree[x]&nbsp;的父节点，那么需要满足条件：y =&nbsp;x&nbsp;- (x &amp; (-x))。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><strong>建议</strong>：由于树状数组所解决的问题跟线段树有些类似，所以不花篇幅进行问题的讨论。LeetCode&nbsp;上有很多经典的题目可以用树状数组来解决，比如&nbsp;LeetCode&nbsp;第&nbsp;308&nbsp;题，求一个动态变化的二维矩阵里，任意子矩阵里的数的总和。</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">总结</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">这节课讲解了一些高级的数据结构。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1. 优先队列</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">经常出现在考题里的，它的实现过程比较繁琐，但是很多编程语言里都有它的实现，所以在解决面试中的问题时，实行“拿来主义”即可。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">鼓励你自己练习实现一个优先队列，在实现它的过程中更好地去了解它的结构和特点。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2. 图</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">被广泛运用的数据结构，很多涉及大数据的问题都得运用到图论的知识。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">比如在社交网络里，每个人可以用图的顶点表示，人与人直接的关系可以用图的边表示；再比如，在地图上，要求解从起始点到目的地，如何行驶会更快捷，需要运用图论里的最短路径算法。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">3. 前缀树</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">出现在许多面试的难题当中。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">因为很多时候你得自己实现一棵前缀树，所以你要能熟练地书写它的实现以及运用它。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">4. 线段树和树状数组</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">应用场合比较明确。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">例如，问题变为在一幅图片当中修改像素的颜色，然后求解任意矩形区间的灰度平均值，那么可以考虑采用二维的线段树了。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">建议</span></strong><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">：LeetCode 平台上，针对上面的这些高级数据结构都有丰富的题目，希望你能用功学习。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">下节课的主题是“面试中常用的算法”。</span></p> 
<p><br style="white-space: normal;"></p> 
<p><br style="white-space: normal;"></p> 
<p><br></p>

## 排序

<p>在前两节课里，我们学习了面试中常用的以及几个较为复杂的数据结构，它们是学好算法的基石。</p> 
<p>算法学习其实是一种提高思维能力的过程。无论是学习算法，还是在面试或实际的工作、生活中，我们都会碰见一些从没遇到过的问题。解决方法也类似，先推敲最直观的解法，再对某个步骤进行优化。例如，讲前缀树的例题时，我们正是为了要提高匹配字符串的速度才借用了前缀树的。</p> 
<p>从这节课开始，我们会将宝贵的时间、精力针对性地去学习面试中最常考的、最核心的算法。而这节课要学习的是排序算法，包括：</p> 
<p>1. 基本的排序算法</p> 
<ul> 
 <li><p>冒泡排序（Bubble Sort）</p></li> 
 <li><p>插入排序（Insertion Sort）</p></li> 
</ul> 
<p>2. 常考的排序算法</p> 
<ul> 
 <li><p>归并排序（Merge Sort）</p></li> 
 <li><p>快速排序（Quick Sort）</p></li> 
 <li><p>拓扑排序（Topological Sort）</p></li> 
</ul> 
<p>3. 其他排序算法</p> 
<ul> 
 <li><p>堆排序（Heap Sort）</p></li> 
 <li><p>桶排序（Bucket Sort)</p></li>
</ul> 
<p><strong>注意</strong>：</p> 
<ol> 
 <li><p>冒泡排序和插入排序是最基础的，面试官有时候喜欢拿它们来考察你的基础知识，并且看看你能不能快速地写出没有 bug 的代码。</p></li> 
 <li><p>归并排序、快速排序和拓扑排序的思想是解决绝大部分涉及排序问题的关键，我们将在这节课里重点介绍它们。</p></li> 
 <li><p>堆排序和桶排序，本节课不作深入研究，但有时间的话一定要看看，尤其是桶排序，在一定的场合中（例如知道所有元素出现的范围时），能在线性的时间复杂度里解决战斗，掌握好它的解题思想能开阔解题思路。</p></li> 
</ol> 
<h1></h1> 
<h3>冒泡排序（Bubble Sort）</h3> 
<h2></h2> 
<h4>基本思想</h4> 
<p>给定一个数组，我们把数组里的元素通通倒入到水池中，这些元素将通过相互之间的比较，按照大小顺序一个一个地像气泡一样浮出水面。</p> 
<h2></h2> 
<h4>实现</h4> 
<p>每一轮，从杂乱无章的数组头部开始，每两个元素比较大小并进行交换，直到这一轮当中最大或最小的元素被放置在数组的尾部，然后不断地重复这个过程，直到所有元素都排好位置。其中，核心操作就是元素相互比较。</p> 
<h2></h2> 
<h4>例题分析</h4> 
<p>给定数组 [2, 1, 7, 9, 5, 8]，要求按照从左到右、从小到大的顺序进行排序。&nbsp;</p> 
<h3></h3>
<h4>解题思路</h4> 
<p>从左到右依次冒泡，把较大的数往右边挪动即可。</p> 
<p><img src="http://s0.lgstatic.com/i/image2/M01/91/0B/CgoB5l2IiW2AUgXzAEVU1vdS3ek726.gif">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</p> 
<ol> 
 <li><p>首先指针指向第一个数，比较第一个数和第二个数的大小，由于 2 比 1 大，所以两两交换，[1, 2, 7, 9, 5, 8]。</p></li> 
 <li><p>接下来指针往前移动一步，比较 2 和 7，由于 2 比 7 小，两者保持不动，[1, 2, 7, 9, 5, 8]。到目前为止，7 是最大的那个数。</p></li> 
 <li><p>指针继续往前移动，比较 7 和 9，由于 7 比 9 小，两者保持不动，[1, 2, 7, 9, 5, 8]。现在，9 变成了最大的那个数。</p></li> 
 <li><p>再往后，比较 9 和 5，很明显，9 比 5 大，交换它们的位置，[1, 2, 7, 5, 9, 8]。</p></li> 
 <li><p>最后，比较 9 和 8，9 比 8 大，交换它们的位置，[1, 2, 7, 5, 8, 9]。经过第一轮的两两比较，9 这个最大的数就像冒泡一样冒到了数组的最后面。</p></li>
</ol> 
<p>接下来进行第二轮的比较，把指针重新指向第一个元素，重复上面的操作，最后，数组变成了：[1, 2, 5, 7, 8, 9]。</p> 
<p>在进行新一轮的比较中，判断一下在上一轮比较的过程中有没有发生两两交换，如果一次交换都没有发生，就证明其实数组已经排好序了。</p> 
<h2></h2> 
<h4>代码示例</h4> 
<pre>void&nbsp;sort(int[]&nbsp;nums)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//定义一个布尔变量&nbsp;hasChange，用来标记每轮遍历中是否发生了交换
&nbsp;&nbsp;&nbsp;&nbsp;boolean&nbsp;hasChange&nbsp;=&nbsp;true;&nbsp;


&nbsp;&nbsp;&nbsp;&nbsp;//每轮遍历开始，将&nbsp;hasChange&nbsp;设置为&nbsp;false
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;nums.length&nbsp;-&nbsp;1&nbsp;&amp;&amp;&nbsp;hasChange;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hasChange&nbsp;=&nbsp;false;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//进行两两比较，如果发现当前的数比下一个数还大，那么就交换这两个数，同时记录一下有交换发生
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;0;&nbsp;j&nbsp;&lt;&nbsp;nums.length&nbsp;-&nbsp;1&nbsp;-&nbsp;i;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[j]&nbsp;&gt;&nbsp;nums[j&nbsp;+&nbsp;1])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;j,&nbsp;j&nbsp;+&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hasChange&nbsp;=&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;}</pre>

<h3></h3>
<h3>算法分析</h3>
<h3></h3>
<h4><strong>空间复杂度</strong></h4>
<p>假设数组的元素个数是 n，由于在整个排序的过程中，我们是直接在给定的数组里面进行元素的两两交换，所以空间复杂度是 O(1)。</p> 
<h3></h3>
<h4>时间复杂度</h4> 
<p>1. 给定的数组按照顺序已经排好</p> 
<p>在这种情况下，我们只需要进行 n−1 次的比较，两两交换次数为 0，时间复杂度是 O(n)。这是最好的情况。</p> 
<p>2. 给定的数组按照逆序排列</p> 
<p>在这种情况下，我们需要进行 n(n-1)/2 次比较，时间复杂度是 O(n<sup>2</sup>)。这是最坏的情况。</p> 
<p>3. 给定的数组杂乱无章</p> 
<p>在这种情况下，平均时间复杂度是 O(n<sup>2</sup>)。</p> 
<p>由此可见，冒泡排序的时间复杂度是 O(n<sup>2</sup>)。它是一种稳定的排序算法。（稳定是指如果数组里两个相等的数，那么排序前后这两个相等的数的相对位置保持不变。）</p> 
<h1></h1> 
<h3>插入排序（Insertion Sort）</h3> 
<h2></h2> 
<h4>基本思想</h4> 
<p>不断地将尚未排好序的数插入到已经排好序的部分。</p> 
<h2></h2> 
<h4>特点</h4> 
<p>在冒泡排序中，经过每一轮的排序处理后，数组后端的数是排好序的；而对于插入排序来说，经过每一轮的排序处理后，数组前端的数都是排好序的。</p> 
<h2></h2>
<h4>例题分析</h4> 
<p>对数组 [2, 1, 7, 9, 5, 8] 进行插入排序。</p> 
<h3></h3>
<h4>解题思路</h4> 
<p>首先将数组分成左右两个部分，左边是已经排好序的部分，右边是还没有排好序的部分，刚开始，左边已排好序的部分只有第一个元素 2。接下来，我们对右边的元素一个一个进行处理，将它们放到左边。</p> 
<p>&nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/0B/CgoB5l2IiW-AJFICAFSirGa8QjY019.gif">&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</p> 
<ol> 
 <li><p>先来看 1，由于 1 比 2 小，需要将 1 插入到 2 的前面，做法很简单，两两交换位置即可，[1, 2, 7, 9, 5, 8]。</p></li> 
 <li><p>然后，我们要把 7 插入到左边的部分，由于 7 已经比 2 大了，表明它是目前最大的元素，保持位置不变，[1, 2, 7, 9, 5, 8]。</p></li> 
 <li><p>同理，9 也不需要做位置变动，[1, 2, 7, 9, 5, 8]。</p></li> 
 <li><p>接下来，如何把 5 插入到合适的位置。首先比较 5 和 9，由于 5 比 9 小，两两交换，[1, 2, 7, 5, 9, 8]，继续，由于 5 比 7 小，两两交换，[1, 2, 5, 7, 9, 8]，最后，由于 5 比 2 大，此轮结束。</p></li> 
 <li><p>最后一个数是 8，由于 8 比 9 小，两两交换，[1, 2, 5, 7, 8, 9]，再比较 7 和 8，发现 8 比 7 大，此轮结束。到此，插入排序完毕。</p></li> 
</ol> 
<h2></h2> 
<h4>代码示例</h4> 
<pre>void&nbsp;sort(int[]&nbsp;nums)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;将数组的第一个元素当作已经排好序的，从第二个元素，即&nbsp;i&nbsp;从&nbsp;1&nbsp;开始遍历数组
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;1,&nbsp;j,&nbsp;current;&nbsp;i&nbsp;&lt;&nbsp;nums.length;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;外围循环开始，把当前&nbsp;i&nbsp;指向的值用&nbsp;current&nbsp;保存
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current&nbsp;=&nbsp;nums[i];


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;指针&nbsp;j&nbsp;内循环，和&nbsp;current&nbsp;值比较，若&nbsp;j&nbsp;所指向的值比&nbsp;current&nbsp;值大，则该数右移一位
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(j&nbsp;=&nbsp;i&nbsp;-&nbsp;1;&nbsp;j&nbsp;&gt;=&nbsp;0&nbsp;&amp;&amp;&nbsp;nums[j]&nbsp;&gt;&nbsp;current;&nbsp;j--)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[j&nbsp;+&nbsp;1]&nbsp;=&nbsp;nums[j];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;内循环结束，j+1&nbsp;所指向的位置就是&nbsp;current&nbsp;值插入的位置
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[j&nbsp;+&nbsp;1]&nbsp;=&nbsp;current;
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<h3></h3>
<h3>算法分析</h3>
<h3></h3>
<h4>空间复杂度</h4>
<p>假设数组的元素个数是 n，由于在整个排序的过程中，是直接在给定的数组里面进行元素的两两交换，空间复杂度是 O(1)。</p> 
<h3></h3>
<h4>时间复杂度</h4> 
<p>1. 给定的数组按照顺序已经排好</p> 
<p>只需要进行 n-1 次的比较，两两交换次数为 0，时间复杂度是 O(n)。这是最好的情况。</p> 
<p>2. 给定的数组按照逆序排列</p> 
<p>在这种情况下，我们需要进行 n(n-1)/2 次比较，时间复杂度是&nbsp;O(n<sup>2</sup>)。这是最坏的情况。</p> 
<p>3. 给定的数组杂乱无章</p> 
<p>在这种情况下，平均时间复杂度是&nbsp;O(n<sup>2</sup>)。</p> 
<p>由此可见，和冒泡排序一样，插入排序的时间复杂度是&nbsp;O(n<sup>2</sup>)，并且它也是一种稳定的排序算法。</p> 
<p><strong>建议</strong>：LeetCode 第 147 题，要求对一个链表进行插入排序，希望大家去试一试。</p> 
<h1></h1> 
<h3>归并排序（Merge Sort）</h3> 
<h2></h2> 
<h4>基本思想</h4> 
<p>核心是分治，就是把一个复杂的问题分成两个或多个相同或相似的子问题，然后把子问题分成更小的子问题，直到子问题可以简单的直接求解，最原问题的解就是子问题解的合并。归并排序将分治的思想体现得淋漓尽致。</p> 
<h2></h2> 
<h4>实现</h4> 
<p>一开始先把数组从中间划分成两个子数组，一直递归地把子数组划分成更小的子数组，直到子数组里面只有一个元素，才开始排序。</p> 
<p>排序的方法就是按照大小顺序合并两个元素，接着依次按照递归的返回顺序，不断地合并排好序的子数组，直到最后把整个数组的顺序排好。</p> 
<h2></h2> 
<h4>代码示例</h4> 
<p>主体函数的代码实现如下。</p> 
<pre>void&nbsp;sort(int[]&nbsp;A,&nbsp;int&nbsp;lo,&nbsp;int&nbsp;hi)&nbsp;{
&nbsp;&nbsp;//&nbsp;判断是否只剩下最后一个元素
&nbsp;&nbsp;if&nbsp;(lo&nbsp;&gt;=&nbsp;hi)&nbsp;return;
&nbsp;&nbsp;
&nbsp;&nbsp;//&nbsp;从中间将数组分成两个部分
&nbsp;&nbsp;int&nbsp;mid&nbsp;=&nbsp;lo&nbsp;+&nbsp;(hi&nbsp;-&nbsp;lo)&nbsp;/&nbsp;2;
&nbsp;&nbsp;
&nbsp;&nbsp;//&nbsp;分别递归地将左右两半排好序
&nbsp;&nbsp;sort(A,&nbsp;lo,&nbsp;mid);
&nbsp;&nbsp;sort(A,&nbsp;mid&nbsp;+&nbsp;1,&nbsp;hi);


&nbsp;&nbsp;//&nbsp;将排好序的左右两半合并&nbsp;&nbsp;
&nbsp;&nbsp;merge(A,&nbsp;lo,&nbsp;mid,&nbsp;hi);
}</pre>

<p>归并操作的代码实现如下。</p> 
<pre>void&nbsp;merge(int[]&nbsp;nums,&nbsp;int&nbsp;lo,&nbsp;int&nbsp;mid,&nbsp;int&nbsp;hi)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;复制一份原来的数组
&nbsp;&nbsp;&nbsp;&nbsp;int[]&nbsp;copy&nbsp;=&nbsp;nums.clone();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个&nbsp;k&nbsp;指针表示从什么位置开始修改原来的数组，i&nbsp;指针表示左半边的起始位置，j&nbsp;表示右半边的起始位置
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;k&nbsp;=&nbsp;lo,&nbsp;i&nbsp;=&nbsp;lo,&nbsp;j&nbsp;=&nbsp;mid&nbsp;+&nbsp;1;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(k&nbsp;&lt;=&nbsp;hi)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(i&nbsp;&gt;&nbsp;mid)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[k++]&nbsp;=&nbsp;copy[j++];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(j&nbsp;&gt;&nbsp;hi)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[k++]&nbsp;=&nbsp;copy[i++];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(copy[j]&nbsp;&lt;&nbsp;copy[i])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[k++]&nbsp;=&nbsp;copy[j++];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[k++]&nbsp;=&nbsp;copy[i++];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre> 
<p>其中，While 语句比较，一共可能会出现四种情况。</p> 
<ul> 
 <li><p>左半边的数都处理完毕，只剩下右半边的数，只需要将右半边的数逐个拷贝过去。</p></li> 
 <li><p>右半边的数都处理完毕，只剩下左半边的数，只需要将左半边的数逐个拷贝过去就好。</p></li> 
 <li><p>右边的数小于左边的数，将右边的数拷贝到合适的位置，j 指针往前移动一位。</p></li> 
 <li><p>左边的数小于右边的数，将左边的数拷贝到合适的位置，i 指针往前移动一位。</p></li> 
</ul> 
<h2></h2>
<h4>例题分析</h4> 
<p>例题：利用归并排序算法对数组 [2, 1, 7, 9, 5, 8] 进行排序。</p> 
<h3></h3>
<h4>解题思路</h4> 
<p><img src="http://s0.lgstatic.com/i/image2/M01/91/0B/CgoB5l2IiXKAR7hcAFhCcVK5jAM221.gif">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</p> 
<p>首先不断地对数组进行切分，直到各个子数组里只包含一个元素。</p> 
<p>接下来递归地按照大小顺序合并切分开的子数组，递归的顺序和二叉树里的前向遍历类似。</p> 
<ol> 
 <li><p>合并 [2] 和 [1] 为 [1, 2]。</p></li> 
 <li><p>子数组 [1, 2] 和 [7] 合并。</p></li> 
 <li><p>右边，合并 [9] 和 [5]。</p></li> 
 <li><p>然后合并 [5, 9] 和 [8]。</p></li> 
 <li><p>最后合并 [1, 2, 7] 和 [5, 8, 9] 成 [1, 2, 5, 8, 9]，就可以把整个数组排好序了。</p></li>
</ol> 
<p>合并数组 [1, 2, 7] 和 [5, 8, 9] 的操作步骤如下。</p> 
<p><img src="http://s0.lgstatic.com/i/image2/M01/91/2B/CgotOV2IiXSAfGJAAF-ZK14qZ9Q978.gif"></p> 
<p>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</p> 
<ol> 
 <li><p>把数组 [1, 2, 7] 用 L 表示，[5, 8, 9] 用 R 表示。</p></li> 
 <li><p>合并的时候，开辟分配一个新数组 T 保存结果，数组大小应该是两个子数组长度的总和</p></li> 
 <li><p>然后下标 i、j、k 分别指向每个数组的起始点。</p></li> 
 <li><p>接下来，比较下标i和j所指向的元素 L[i] 和 R[j]，按照大小顺序放入到下标 k 指向的地方，1 小于 5。</p></li> 
 <li><p>移动 i 和 k，继续比较 L[i] 和 R[j]，2 比 5 小。</p></li> 
 <li><p>i 和 k 继续往前移动，5 比 7 小。</p></li> 
 <li><p>移动 j 和 k，继续比较 L[i] 和 R[j]，7 比 8 小。</p></li> 
 <li><p>这时候，左边的数组已经处理完毕，直接将右边数组剩余的元素放到结果数组里就好。</p></li>
</ol> 
<p>合并之所以能成功，先决条件必须是两个子数组都已经分别排好序了。</p> 
<h2></h2>
<h3>算法分析</h3> 
<h3></h3>
<h4>空间复杂度</h4> 
<p>由于合并 n 个元素需要分配一个大小为 n 的额外数组，合并完成之后，这个数组的空间就会被释放，所以算法的空间复杂度就是 O(n)。归并排序也是稳定的排序算法。</p> 
<h3></h3>
<h4>时间复杂度</h4> 
<p>归并算法是一个不断递归的过程。</p> 
<p><strong>举例</strong>：数组的元素个数是 n，时间复杂度是 T(n) 的函数。</p> 
<p><strong>解法</strong>：把这个规模为 n 的问题分成两个规模分别为 n/2 的子问题，每个子问题的时间复杂度就是 T(n/2)，那么两个子问题的复杂度就是 2×T(n/2)。当两个子问题都得到了解决，即两个子数组都排好了序，需要将它们合并，一共有 n 个元素，每次都要进行最多 n-1 次的比较，所以合并的复杂度是 O(n)。由此我们得到了递归复杂度公式：T(n) = 2×T(n/2) + O(n)。</p> 
<p>对于公式求解，不断地把一个规模为 n 的问题分解成规模为 n/2 的问题，一直分解到规模大小为 1。如果 n 等于 2，只需要分一次；如果 n 等于 4，需要分 2 次。这里的次数是按照规模大小的变化分类的。</p> 
<p>以此类推，对于规模为 n 的问题，一共要进行 log(n) 层的大小切分。在每一层里，我们都要进行合并，所涉及到的元素其实就是数组里的所有元素，因此，每一层的合并复杂度都是 O(n)，所以整体的复杂度就是&nbsp;O(nlogn)。</p> 
<p><strong>建议</strong>：归并算法的思想很重要，其中对两个有序数组合并的操作，在很多面试题里都有用到，建议大家一定要把这个算法练熟。</p> 
<h1></h1>
<h3>快速排序（Quick Sort）</h3> 
<h2></h2>
<h4>基本思想</h4> 
<p>快速排序也采用了分治的思想。</p> 
<h2></h2>
<h4>实现</h4> 
<p>把原始的数组筛选成较小和较大的两个子数组，然后递归地排序两个子数组。</p> 
<p><strong>举例</strong>：把班里的所有同学按照高矮顺序排成一排。</p> 
<p><strong>解法</strong>：老师先随机地挑选了同学 A，让所有其他同学和 A 比高矮，比 A 矮的都站在 A 的左边，比 A 高的都站在 A 的右边。接下来，老师分别从左边和右边的同学里选择了同学 B 和 C，然后不断地筛选和排列下去。</p> 
<p>在分成较小和较大的两个子数组过程中，如何选定一个基准值（也就是同学 A、B、C 等）尤为关键。</p> 
<h2></h2>
<h4>例题分析</h4> 
<p>对数组 [2, 1, 7, 9, 5, 8] 进行排序。</p> 
<h3></h3>
<h4>解题思路</h4> 
<p><img src="http://s0.lgstatic.com/i/image2/M01/91/2B/CgotOV2IiXaAXXBaADUbuSK_xc4506.gif">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;</p> 
<ol> 
 <li><p>按照快速排序的思想，首先把数组筛选成较小和较大的两个子数组。</p></li> 
 <li><p>随机从数组里选取一个数作为基准值，比如 7，于是原始的数组就被分成了两个子数组。注意：快速排序是直接在原始数组里进行各种交换操作，所以当子数组被分割出来的时候，原始数组里的排列也被改变了。</p></li> 
 <li><p>接下来，在较小的子数组里选 2 作为基准值，在较大的子数组里选 8 作为基准值，继续分割子数组。</p></li> 
 <li><p>继续将元素个数大于 1 的子数组进行划分，当所有子数组里的元素个数都为 1 的时候，原始数组也被排好序了。</p></li> 
</ol> 
<h2></h2>
<h4>代码示例</h4> 
<p>主体函数代码如下。</p> 
<pre>void&nbsp;sort(int[]&nbsp;nums,&nbsp;int&nbsp;lo,&nbsp;int&nbsp;hi)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(lo&nbsp;&gt;=&nbsp;hi)&nbsp;return;&nbsp;//&nbsp;判断是否只剩下一个元素，是，则直接返回
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;利用&nbsp;partition&nbsp;函数找到一个随机的基准点
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;p&nbsp;=&nbsp;partition(nums,&nbsp;lo,&nbsp;hi);
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;递归地对基准点左半边和右半边的数进行排序
&nbsp;&nbsp;&nbsp;&nbsp;sort(nums,&nbsp;lo,&nbsp;p&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;sort(nums,&nbsp;p&nbsp;+&nbsp;1,&nbsp;hi);
}</pre> 
<p>下面用代码实现 partition 函数获得基准值。</p> 
<pre>int&nbsp;partition(int[]&nbsp;nums,&nbsp;int&nbsp;lo,&nbsp;int&nbsp;hi)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;随机选择一个数作为基准值，nums[hi]&nbsp;就是基准值
&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;randRange(lo,&nbsp;hi),&nbsp;hi);


&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i,&nbsp;j;

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从左到右用每个数和基准值比较，若比基准值小，则放到指针&nbsp;i&nbsp;所指向的位置。循环完毕后，i&nbsp;指针之前的数都比基准值小
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(i&nbsp;=&nbsp;lo,&nbsp;j&nbsp;=&nbsp;lo;&nbsp;j&nbsp;&lt;&nbsp;hi;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[j]&nbsp;&lt;=&nbsp;nums[hi])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;i++,&nbsp;j);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;末尾的基准值放置到指针&nbsp;i&nbsp;的位置，i&nbsp;指针之后的数都比基准值大
&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;i,&nbsp;j);

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;返回指针&nbsp;i，作为基准点的位置
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;i;
}</pre>

<h3></h3>
<h3>算法分析</h3>
<h3></h3>
<h4>时间复杂度</h4>
<p>1. 最优情况：被选出来的基准值都是当前子数组的中间数。</p> 
<p>这样的分割，能保证对于一个规模大小为 n 的问题，能被均匀分解成两个规模大小为 n/2 的子问题（归并排序也采用了相同的划分方法），时间复杂度就是：T(n) = 2×T(n/2) + O(n)。</p> 
<p>把规模大小为 n 的问题分解成 n/2 的两个子问题时，和基准值进行了 n-1 次比较，复杂度就是 O(n)。很显然，在最优情况下，快速排序的复杂度也是&nbsp;O(nlogn)。</p> 
<p>2. 最坏情况：基准值选择了子数组里的最大或者最小值</p> 
<p>每次都把子数组分成了两个更小的子数组，其中一个的长度为 1，另外一个的长度只比原子数组少 1。</p> 
<p><strong>举例</strong>：对于数组来说，每次挑选的基准值分别是 9、8、7、5、2。</p> 
<p><strong>解法</strong>：划分过程和冒泡排序的过程类似。</p> 
<p>算法复杂度为&nbsp;O(n<sup>2</sup>)。</p> 
<p>提示：可以通过随机地选取基准值来避免出现最坏的情况。</p> 
<h3></h3>
<h4>空间复杂度</h4> 
<p>和归并排序不同，快速排序在每次递归的过程中，只需要开辟 O(1) 的存储空间来完成交换操作实现直接对数组的修改，又因为递归次数为 logn，所以它的整体空间复杂度完全取决于压堆栈的次数，因此它的空间复杂度是 O(logn)。</p> 
<p><strong>举例</strong>：LeetCode 第 215 题，给定一个尚未排好序的数组，要求找出第 k 大的数。</p> 
<p><strong>解法 1</strong>：直接将数组进行排序，然后得出结果。</p> 
<p><strong>解法 2</strong>：快速排序。</p> 
<p>每次随机选取一个基准值，将数组分成较小的一半和较大的一半，然后检查这个基准值最后所在的下标是不是 k，算法复杂度只需要 O(n)。</p> 
<h1></h1> 
<h3>拓扑排序（Topological Sort）</h3> 
<h2></h2> 
<h4>基本思想</h4> 
<p>和前面介绍的几种排序不同，拓扑排序应用的场合不再是一个简单的数组，而是研究图论里面顶点和顶点连线之间的性质。拓扑排序就是要将这些顶点按照相连的性质进行排序。</p> 
<p>要能实现拓扑排序，得有几个前提：</p> 
<ol> 
 <li><p>图必须是有向图</p></li> 
 <li><p>图里面没有环</p></li>
</ol> 
<p>拓扑排序一般用来理清具有依赖关系的任务。</p> 
<p><strong>举例</strong>：假设有三门课程 A、B、C，如果想要学习课程 C 就必须先把课程 B 学完，要学习课程 B，还得先学习课程 A，所以得出课程的学习顺序应该是 A -&gt; B -&gt; C。</p> 
<h2></h2> 
<h6>实现</h6> 
<ol> 
 <li><p>将问题用一个有向无环图（DAG, Directed Acyclic Graph）进行抽象表达，定义出哪些是图的顶点，顶点之间如何互相关联。</p></li> 
 <li><p>可以利用广度优先搜索或深度优先搜索来进行拓扑排序。</p></li> 
</ol> 
<h2></h2> 
<h4>例题分析</h4> 
<p>有一个学生想要修完 5 门课程的学分，这 5 门课程分别用 1、2、3、4、5 来表示，现在已知学习这些课程有如下的要求：</p> 
<ul> 
 <li><p>课程 2 和 4 依赖于课程 &nbsp;1</p></li> 
 <li><p>课程 3 依赖于课程 2 和 4</p></li> 
 <li><p>课程 4 依赖于课程 1 和 2</p></li> 
 <li><p>课程 5 依赖于课程 3 和 4</p></li>
</ul> 
<p>那么这个学生应该按照怎样的顺序来学习这 5 门课程呢？</p> 
<h3></h3>
<h4>解题思路</h4> 
<p>可以把 5 门课程看成是一个图里的 5 个顶点，用有向线段按照它们的相互关系连起来，于是得出下面的有向图。</p> 
<p>首先可以看到，这个有向图里没有环，无论从哪个顶点出发，都不会再回到那个顶点。并且，这个图里并没有孤岛的出现，因此，我们可以对它进行拓扑排序。</p> 
<p>方法就是，一开始的时候，对每个顶点统计它们各自的前驱（也就是入度）：1(0)，2(1)，3(2)，4(2)，5(2)。</p> 
<p><img src="http://s0.lgstatic.com/plat-home-fed/vue/scripts/libraries/UEditor/themes/default/images/spacer.gif">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/2B/CgotOV2IiXqAM6cFAFNa8qMI_JU260.gif">&nbsp; &nbsp; &nbsp;</p> 
<p>&nbsp;</p> 
<ol> 
 <li><p>选择其中一个没有前驱（也就是入度为 0）的顶点，在这道题里面，顶点 1 就是我们要找的那个点，将它作为结果输出。同时删除掉该顶点和所有以它作为起始点的有向边，更新顶点的入度表。</p></li> 
 <li><p>接下来，顶点 2 就是下一个没有前驱的顶点，输出顶点 2，并将以它作为起点的有向边删除，同时更新入度表。</p></li> 
 <li><p>再来，顶点 4 成为了没有前驱的顶点，输出顶点 4，删除掉它和顶点 3 和 5 的有向边。</p></li> 
 <li><p>然后，顶点 3 没有了前驱，输出它，并删除它与 5 的有向边。</p></li> 
 <li><p>最后，顶点 5 没有前驱，输出它，于是得出最后的结果为：1，2，4，3，5。</p></li>
</ol> 
<p>一般来说，一个有向无环图可以有一个或多个拓扑排序的序列。</p> 
<h2></h2> 
<h4>代码示例</h4> 
<p>运用广度优先搜索的方法对这个图的结构进行遍历。在构建这个图的过程中，用一个链接矩阵 adj 来表示这个图的结构，用一个 indegree 的数组统计每个顶点的入度，重点看如何实现拓扑排序。</p> 
<pre>void&nbsp;sort()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;Queue&lt;Integer&gt;&nbsp;q&nbsp;=&nbsp;new&nbsp;LinkedList();&nbsp;//&nbsp;定义一个队列&nbsp;q


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;将所有入度为&nbsp;0&nbsp;的顶点加入到队列&nbsp;q
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;v&nbsp;=&nbsp;0;&nbsp;v&nbsp;&lt;&nbsp;V;&nbsp;v++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(indegree[v]&nbsp;==&nbsp;0)&nbsp;q.add(v);
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;循环，直到队列为空
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!q.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;v&nbsp;=&nbsp;q.poll();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;每次循环中，从队列中取出顶点，即为按照入度数目排序中最小的那个顶点
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(v);

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;将跟这个顶点相连的其他顶点的入度减&nbsp;1，如果发现那个顶点的入度变成了&nbsp;0，将其加入到队列的末尾
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;u&nbsp;=&nbsp;0;&nbsp;u&nbsp;&lt;&nbsp;adj[v].length;&nbsp;u++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(--indegree[u]&nbsp;==&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;q.add(u);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<h2></h2>
<h4>算法分析</h4>
<h3><p><span style="font-weight: bold;">时间复杂度</span></p></h3>
<p>统计顶点的入度需要 O(n) 的时间，接下来每个顶点被遍历一次，同样需要 O(n) 的时间，所以拓扑排序的时间复杂度是 O(n)。</p> 
<p><strong>建议</strong>：利用深度优先搜索的方法对这道题实现拓扑排序。</p> 
<h1></h1>
<h3>结语</h3> 
<p>这节课复习了面试中经常会被考到的排序算法，最重点内容是归并排序和快速排序。除了要好好理解它们的思路，还必须要能写出没有 bug 的代码，因此建议多做 LeetCode 里面的经典题目。</p> 
<p>&nbsp;</p> 
<p>下一节课，将深入讲解递归算法和回溯算法，它们在算法面试中出现的概率是最高的。</p>

---



## 递归与回溯

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">前一节课讲解了几种经典的排序算法。面试主要考察的是分析和处理问题的能力，而排序算法的一些思想是非常常用的，例如归并排序和快速排序采用的分治法就是高效的算法思想。这节课将介绍：递归和回溯。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">递归和回溯的关系密不可分：</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">递归的基本性质就是函数调用，在处理问题的时候，递归往往是把一个大规模的问题不断地变小然后进行推导的过程。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">回溯则是利用递归的性质，从问题的起始点出发，不断地进行尝试，回头一步甚至多步再做选择，直到最终抵达终点的过程。</span></p></li> 
</ul> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">递归（Recursion）</span></h6> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">算法思想</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">递归算法是一种调用自身函数的算法（二叉树的许多性质在定义上就满足递归）。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>举例</strong>：（汉诺塔问题）有三个塔 A、B、C，一开始的时候，在塔 A 上放着 n 个盘子，它们自底向上按照从大到小的顺序叠放。现在要求将塔 A 中所有的盘子搬到塔 C 上，让你打印出搬运的步骤。在搬运的过程中，每次只能搬运一个盘子，另外，任何时候，无论在哪个塔上，大盘子不能放在小盘子的上面。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>解法</strong>：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/12/CgoB5l2IjneAd7CsALPFsWgB1rw332.gif"></span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">从最终的结果出发，要把 n 个盘子按照大小顺序叠放在塔 C 上，就需要将塔 A 的底部最大的盘子搬到塔 C；</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">为了实现步骤 1，需要将除了这个最大盘子之外的其余盘子都放到塔 B 上。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">由上可知，将原来的问题规模从 n 个盘子变成了 n-1 个盘子，即将 n-1 个盘子转移到塔 B 上。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">如果一个函数，能将 n 个盘子从塔 A，借助塔 B，搬到塔 C。那么，也可以利用该函数将 n-1 个盘子从塔 A，借助塔 C，搬到塔 B。同理，不断地把问题规模变小，当 n 为 1，也就是只有 1 个盘子的时候，直接打印出步骤。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>代码</strong>：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 22px; font-size: 11pt; color: rgb(73, 73, 73);"><br></p> 
<pre>void&nbsp;hano(char&nbsp;A,&nbsp;char&nbsp;B,&nbsp;char&nbsp;C,&nbsp;int&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;&gt;&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hano(A,&nbsp;C,&nbsp;B,&nbsp;n&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;move(A,&nbsp;C);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hano(B,&nbsp;A,&nbsp;C,&nbsp;n&nbsp;-&nbsp;1);
&nbsp;&nbsp;}
}</pre> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">由上述总结出递归的算法思想，将一个问题的规模变小，然后再利用从小规模问题中得出的结果，结合当前的值或者情况，得出最终的结果。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">通俗来说，把要实现的递归函数看成是已经实现好的， 直接利用解决一些子问题，然后需要考虑的就是如何根据子问题的解以及当前面对的情况得出答案。这种算法也被称为自顶向下（Top-Down）的算法。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析一</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">LeetCode 第 91 题，解码的方法。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">一条包含字母&nbsp;A-Z&nbsp;的消息通过以下方式进行了编码：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">'A' -&gt; 1</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">'B' -&gt; 2</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">…</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">'Z' -&gt; 26</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">给定一个只包含数字的非空字符串，请计算解码方法的总数。</span></p> 
<h3><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路</span></p></h3> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">就例题中的第二个例子，给定编码后的消息是字符串“226”，如果对其中“22”的解码有 m 种可能，那么，加多一个“6”在最后，相当于在最终解密出来的字符串里多了一个“F”字符而已，总体的解码还是只有 m 种。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">对于“6”而言，如果它的前面是”1”或者“2”，那么它就有可能是“16”，“26”，所以还可以再往前看一个字符，发现它是“26”。而前面的解码组合是 k 个，那么在这 k 个解出的编码里，添加一个“Z”，所以总的解码个数就是 m+k。</span></p></li> 
</ol> 
<p style="line-height: 1.75em; text-align: justify;"><br></p> 
<h6 style="white-space: normal; line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</span></h6> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span></p> 
<pre>int&nbsp;numDecodings(String&nbsp;s)&nbsp;{


&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(s.charAt(0)&nbsp;==&nbsp;'0')&nbsp;return&nbsp;0;

&nbsp;&nbsp;&nbsp;&nbsp;char[]&nbsp;chars&nbsp;=&nbsp;s.toCharArray();
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;decode(chars,&nbsp;chars.length&nbsp;-&nbsp;1);
}

//&nbsp;字符串转换成字符数组，利用递归函数&nbsp;decode，从最后一个字符向前递归
int&nbsp;decode(char[]&nbsp;chars,&nbsp;int&nbsp;index)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;处理到了第一个字符,只能有一种解码方法，返回&nbsp;1
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(index&nbsp;&lt;=&nbsp;0)&nbsp;return&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;count&nbsp;=&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;curr&nbsp;=&nbsp;chars[index];
&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;prev&nbsp;=&nbsp;chars[index&nbsp;-&nbsp;1];
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;当前字符比&nbsp;“0”&nbsp;大，则直接利用它之前的字符串所求得的结果&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(curr&nbsp;&gt;&nbsp;'0')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count&nbsp;=&nbsp;decode(chars,&nbsp;index&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;由前一个字符和当前字符所构成的数字，值必须要在&nbsp;1&nbsp;到&nbsp;26&nbsp;之间，否则无法进行解码&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(prev&nbsp;==&nbsp;'1'&nbsp;||&nbsp;(prev&nbsp;==&nbsp;'2'&nbsp;&amp;&amp;&nbsp;curr&nbsp;&lt;=&nbsp;'6'))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count&nbsp;+=&nbsp;decode(chars,&nbsp;index&nbsp;-&nbsp;2);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;count;
}</pre>

<h2></h2>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题模板</span><br></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">通过上述例题，来归纳总结一下递归函数的解题模版。</span></p> 
<h3><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>解题步骤</strong></span></p></h3> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">判断当前情况是否非法，如果非法就立即返回，这一步也被称为完整性检查（Sanity Check）。例如，看看当前处理的情况是否越界，是否出现了不满足条件的情况。通常，这一部分代码都是写在最前面的。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">判断是否满足结束递归的条件。在这一步当中，处理的基本上都是一些推导过程当中所定义的初始情况。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">将问题的规模缩小，递归调用。在归并排序和快速排序中，我们将问题的规模缩小了一半，而在汉诺塔和解码的例子中，我们将问题的规模缩小了一个。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">利用在小规模问题中的答案，结合当前的数据进行整合，得出最终的答案。</span></p></li> 
</ol> 
<p style="line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">代码实现</span></strong></p> 
<pre>function&nbsp;fn(n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第一步：判断输入或者状态是否非法？
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(input/state&nbsp;is&nbsp;invalid)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;
&nbsp;&nbsp;&nbsp;&nbsp;}


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第二步：判读递归是否应当结束?
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(match&nbsp;condition)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;some&nbsp;value;
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第三步：缩小问题规模
&nbsp;&nbsp;&nbsp;&nbsp;result1&nbsp;=&nbsp;fn(n1)
&nbsp;&nbsp;&nbsp;&nbsp;result2&nbsp;=&nbsp;fn(n2)
&nbsp;&nbsp;&nbsp;&nbsp;...

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第四步:&nbsp;整合结果
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;combine(result1,&nbsp;result2)
}</pre>

<h2></h2>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析二</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">LeetCode 第 247 题：找到所有长度为 n 的中心对称数。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>示例</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">输入:&nbsp; n = 2</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">输出: ["11","69","88","96"]</span></p> 
<h3><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/32/CgotOV2IjniAGk33AEvgAuHp84Y570.gif"></span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当 n=0 的时候，应该输出空字符串：“ ”。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当 n=1 的时候，也就是长度为 1 的中心对称数有：0，1，8。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当 n=2 的时候，长度为 2 的中心对称数有：11， 69，88，96。注意：00 并不是一个合法的结果。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当 n=3 的时候，只需要在长度为 1 的合法中心对称数的基础上，不断地在两边添加 11，69，88，96 就可以了。</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">[101, 609, 808, 906, &nbsp; &nbsp; 111, 619, 818, 916, &nbsp; &nbsp; 181, 689, 888, 986]</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">随着 n 不断地增长，我们只需要在长度为 n-2 的中心对称数两边添加 11，69，88，96 即可。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"></span></p> 
<h2 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</span></p></h2> 
<pre>List&lt;String&gt;&nbsp;helper(int&nbsp;n,&nbsp;int&nbsp;m)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第一步：判断输入或者状态是否非法？
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;&lt;&nbsp;0&nbsp;||&nbsp;m&nbsp;&lt;&nbsp;0&nbsp;||&nbsp;n&nbsp;&gt;&nbsp;m)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw&nbsp;new&nbsp;IllegalArgumentException("invalid&nbsp;input");
&nbsp;&nbsp;}


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第二步：判读递归是否应当结束?
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;==&nbsp;0)&nbsp;return&nbsp;new&nbsp;ArrayList&lt;String&gt;(Arrays.asList(""));
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;==&nbsp;1)&nbsp;return&nbsp;new&nbsp;ArrayList&lt;String&gt;(Arrays.asList("0",&nbsp;"1",&nbsp;"8"));
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第三步：缩小问题规模
&nbsp;&nbsp;&nbsp;&nbsp;List&lt;String&gt;&nbsp;list&nbsp;=&nbsp;helper(n&nbsp;-&nbsp;2,&nbsp;m);&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第四步:&nbsp;整合结果
&nbsp;&nbsp;&nbsp;&nbsp;List&lt;String&gt;&nbsp;res&nbsp;=&nbsp;new&nbsp;ArrayList&lt;String&gt;();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;list.size();&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String&nbsp;s&nbsp;=&nbsp;list.get(i);
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;!=&nbsp;m)&nbsp;res.add("0"&nbsp;+&nbsp;s&nbsp;+&nbsp;"0");
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.add("1"&nbsp;+&nbsp;s&nbsp;+&nbsp;"1");
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.add("6"&nbsp;+&nbsp;s&nbsp;+&nbsp;"9");
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.add("8"&nbsp;+&nbsp;s&nbsp;+&nbsp;"8");
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.add("9"&nbsp;+&nbsp;s&nbsp;+&nbsp;"6");
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;res;
}</pre>

<h2><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">算法分析</span><br></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">分析非递归算法的时间复杂度非常直接，例如，前一节课里分析过冒泡排序以及插入排序的时间复杂度，分析方法就是数有多少层循环，由于每层循环里面执行的操作都是对比和交换，时间复杂度是 O(1)，所以，最终的时间复杂度就是将每层循环的长度相乘。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">分析递归算法推荐两种方法：</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">迭代法</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">公式法</span></p></li> 
</ul> 
<h3></h3> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">迭代法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">举例</span></strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">：分析汉诺塔递归函数的时间复杂度。</span></p> 
<pre>void&nbsp;hano(char&nbsp;A,&nbsp;char&nbsp;B,&nbsp;char&nbsp;C,&nbsp;int&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;&gt;&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hano(A,&nbsp;C,&nbsp;B,&nbsp;n&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;move(A,&nbsp;C);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hano(B,&nbsp;A,&nbsp;C,&nbsp;n&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">假设这个递归函数的运行时间是 T(n)。</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1. if 语句（一般取 if 块或 else 块之间最大的时间复杂度）中，比较和判断 n 的大小，CPU 的执行时间为 1 个单位。</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><br></span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2. 两次调用递归函数，每次都使问题的规模减少 1 个，得到两倍的 T(n-1)。打印输出的语句，CPU 的执行时间也为 1 个单位。因此得出：</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">T(n) = 1 + 2×T(n - 1) + 1。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">此处 if 语句和打印输出语句的执行时间与问题规模 n 无关，因此它们的算法时间复杂度可以记为 O(1)，表达式变为：</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">T(n) = 2×T(n - 1) + O(1)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">当 n=0 的时候，T(0) = 1，因为当没有盘子的时候，if 语句也要进行一次比较，判断 n 是否大于 0。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">3. 用迭代法将 T(n) 进行展开。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n - 1) = 2×T(n - 2) + 1，以此类推，不断地代入到 T(n) 的表达式当中，得到如下关系：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = 2× (2×T(n - 2) + 1) + 1 = 2<sup>2</sup>×T(n - 2) + (2 + 1)</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = 2×(2× (2×T(n - 3) + 1) + 1) + 1 = 2<sup>3</sup>×T(n - 3) + (4 + 2 + 1)</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = 2×(2×(2×(2×T(n - 4) + 1) + 1) + 1) + 1 = 2<sup>4</sup>×T(n - 4) + (8 + 4 + 2 + 1)</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">…</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = 2<sup>k</sup>×T(n - k) + (2<sup>k</sup>&nbsp;- 1)</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">其中，1 + 2 + 4 + 8 + … 是一个等比数列，由求和公式得到 2<sup>k</sup>&nbsp;- 1。当 k 等于 n 的时候，T(n) = 2<sup>n</sup>×T(0) + (2<sup>n</sup>&nbsp;- 1)，由于 T(0) 等于 1，所以最终 T(n) = 2×2<sup>n</sup>&nbsp;- 1。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">对 T(n) 求 O 的值得到：O(n) = O(T(n)) = O(2×2<sup>n</sup>&nbsp;- 1) ，忽略掉常量和系数，O(n) = O(2<sup>n</sup>)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">所以，整个算法的时间复杂度就是 O(2<sup>n</sup>)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">而很难通过迭代法推导出比较复杂的时间复杂度的时候，可以借用公式法。</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">公式法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">公式法可以说是计算递归函数复杂度最方便的工具，当递归函数的时间执行函数满足如下的关系式时，我们可以利用公式法：</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">T(n) = a×T(n/b) + f(n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">其中，f(n) 是每次递归完毕之后额外的计算执行时间。例如，在归并排序中，每次递归处理完两边的数组后，我们需要执行合并的操作，那么这个操作的执行时间就是 f(n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">当参数 a、b 都确定的时候，光看递归的部分，它的时间复杂度就是：O(n^log<sub>b</sub>a)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">由于时间复杂度求的是上界（upper bound)，通过对比递归部分的时间复杂度和 f(n) 的大小关系，得出最后的整体时间复杂度。牢记以下三种情况和相应公式：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当递归部分的执行时间 nlog(b)a 大于 f(n) 的时候，最终的时间复杂度就是&nbsp;O(n^log<sub style="white-space: normal;">b</sub>a)。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当递归部分的执行时间 nlog(b)a 小于 f(n) 的时候，最终的时间复杂度就是 f(n)。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当递归部分的执行时间 nlog(b)a 等于 f(n) 的时候，最终的时间复杂度就是&nbsp;O(n^log<sub style="white-space: normal;">b</sub>a)logn。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>举例 1</strong>：分析归并排序的时间复杂度。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = 2T(n/2) + n</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">a = 2，b = 2，f(n) = n</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">log<sub>b</sub>a = 1，n<sup>1</sup>&nbsp;= n</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">符合第三种情况，最终的时间复杂度就是 O(nlogn)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>举例 2</strong>：分析下面函数的时间复杂度。</span></p> 
<pre>int&nbsp;recursiveFn(int&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;==&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;recursiveFn(n&nbsp;/&nbsp;4)&nbsp;+&nbsp;recursiveFn(n&nbsp;/&nbsp;4);
}</pre> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">得出时间执行函数：T(n) =&nbsp; 2×T(n/4) + 1，a = 2，b = 4，f(n) = 1。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代入公式得到：n^log<sub>4</sub>2 = n<sup>0.5</sup>，当 n&gt;1 的时候，n<sup style="white-space: normal;">0.5</sup>&gt;1，因此，时间复杂度就是 &nbsp;O(n<sup style="white-space: normal;">0.5</sup>)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>举例 3</strong>：已知时间执行函数如下，分析时间复杂度。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = 3×T(n/2) + n<sup>2</sup></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">a = 3，b = 2，f(n) = n<sup>2</sup></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">最复杂的操作发生在递归完成之后，符合第二种情况。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代入公式得到：n^log<sub>2</sub>3 = n<sup>1.48</sup>&lt;n<sup>2</sup>，最后递归的时间复杂度是 O(n<sup>2</sup>)。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">小结</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">对于时间复杂度的分析是算法面试中非常重要的一环，掌握好迭代法和公式法，对于分析大多数面试题都有非常重要的帮助，需要通过不断地练习，来熟练运用它们。</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">回溯（Backtracking）</span></h6> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">算法思想</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">回溯实际上是一种试探算法，这种算法跟暴力搜索最大的不同在于，在回溯算法里，是一步一步地小心翼翼地进行向前试探，会对每一步探测到的情况进行评估，如果当前的情况已经无法满足要求，那么就没有必要继续进行下去，也就是说，它可以帮助我们避免走很多的弯路。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">回溯算法的特点在于，当出现非法的情况时，算法可以回退到之前的情景，可以是返回一步，有时候甚至可以返回多步，然后再去尝试别的路径和办法。这也就意味着，想要采用回溯算法，就必须保证，每次都有多种尝试的可能。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"></span></p> 
<h2 style="white-space: normal;"></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题模板</span></h6> 
<p><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: justify;">解题步骤</span><br></strong></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">判断当前情况是否非法，如果非法就立即返回；</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当前情况是否已经满足递归结束条件，如果是就将当前结果保存起来并返回；</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当前情况下，遍历所有可能出现的情况并进行下一步的尝试；</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">递归完毕后，立即回溯，回溯的方法就是取消前一步进行的尝试。</span></p></li> 
</ol> 
<h3></h3> 
<p style="line-height: 1.75em; text-align: justify;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码模板</span></strong></p> 
<pre>function&nbsp;fn(n)&nbsp;{


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第一步：判断输入或者状态是否非法？
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(input/state&nbsp;is&nbsp;invalid)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;
&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第二步：判读递归是否应当结束?
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(match&nbsp;condition)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;some&nbsp;value;
&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;遍历所有可能出现的情况
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(all&nbsp;possible&nbsp;cases)&nbsp;{
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第三步:&nbsp;尝试下一步的可能性
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solution.push(case)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;递归
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;=&nbsp;fn(m)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第四步：回溯到上一步
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solution.pop(case)
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
}</pre>

<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析一</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">LeetCode 第 39 题：给定一个无重复元素的数组&nbsp;candidates&nbsp;和一个目标数&nbsp;target&nbsp;，找出&nbsp;candidates&nbsp;中所有可以使数字和为&nbsp;target&nbsp;的组合。candidates&nbsp;中的数字可以无限制重复被选取。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">说明：</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">所有数字（包括&nbsp;target）都是正整数。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解集不能包含重复的组合。&nbsp;</span></p></li> 
</ul> 
<h3></h3> 
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63);"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路</span></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">题目要求的是所有不重复的子集，而且子集里的元素的值的总和等于一个给定的目标。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>思路 1</strong>：暴力法。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">罗列出所有的子集组合，然后逐个判断它们的总和是否为给定的目标值。解法非常慢。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>思路 2</strong>：回溯法。</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">从一个空的集合开始，小心翼翼地往里面添加元素。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">每次添加，检查一下当前的总和是否等于给定的目标。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果总和已经超出了目标，说明没有必要再尝试其他的元素了，返回并尝试其他的元素；</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果总和等于目标，就把当前的组合添加到结果当中，表明我们找到了一种满足要求的组合，同时返回，并试图寻找其他的集合。</span></p></li> 
</ol> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</span></h6> 
<pre>int[][]&nbsp;combinationSum(int[]&nbsp;candidates,&nbsp;int&nbsp;target)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int[][]&nbsp;results;
&nbsp;&nbsp;&nbsp;&nbsp;backtracking(candidates,&nbsp;target,&nbsp;0,&nbsp;[],&nbsp;results&nbsp;-&nbsp;换另外一种颜色高亮);
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;results;
}


void&nbsp;backtracking&nbsp;=&nbsp;(int[]&nbsp;candidates,&nbsp;int&nbsp;target,&nbsp;int&nbsp;start,&nbsp;int[]&nbsp;solution,&nbsp;int[][]&nbsp;results)&nbsp;=&gt;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(target&nbsp;&lt;&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;
&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(target&nbsp;===&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results.push(solution);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;
&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;start;&nbsp;i&nbsp;&lt;&nbsp;candidates.length;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solution.push(candidates[i]);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backtracking(candidates,&nbsp;target&nbsp;-&nbsp;candidates[i],&nbsp;i,&nbsp;solution,&nbsp;results);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solution.pop();
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
}</pre>

<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">在主函数里：</span><br><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span></p> 
<h2></h2> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">定义一个 results 数组用来保存最终的结果；</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">调用函数 backtracking，并将初始的情况以及 results 传递进去，这里的初始情况就是从第一个元素开始尝试，而且初始的子集为空。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">在 backtracking 函数里：</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">检查当前的元素总和是否已经超出了目标给定的值，每添加进一个新的元素时，就将它从目标总和中减去；</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果总和已经超出了目标给定值，就立即返回，去尝试其他的数值；</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果总和刚好等于目标值，就把当前的子集添加到结果中。</span></p><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span></p></li> 
</ol> 
<p style="line-height: 1.75em; text-align: justify;"><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">在循环体内：</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">每次添加了一个新的元素，立即递归调用 backtracking，看是否找到了合适的子集</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">递归完毕后，要把上次尝试的元素从子集里删除，这是最重要的。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">以上，就完成了回溯。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">提示：这是一个最经典的回溯的题目，麻雀虽小，但五脏俱全。它完整地体现了回溯算法的各个阶段。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析二</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">LeetCode 第 51 题， 在一个 N×N 的国际象棋棋盘上放置 N 个皇后，每行一个并使她们不能互相攻击。给定一个整数 N，返回 N 皇后不同的的解决方案的数量。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<h3><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路</span></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解决 N 皇后问题的关键就是如何判断当前各个皇后的摆放是否合法。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="background-color: rgb(249, 237, 166); color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 16.8667px; font-size: 11pt; color: rgb(73, 73, 73);"><img src="http://s0.lgstatic.com/i/image2/M01/91/12/CgoB5l2IjnmALbFsAC7XEvsRn6M912.gif"></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">利用一个数组 columns[] 来记录每一行里皇后所在的列。例如，第一行的皇后如果放置在第 5 列的位置上，那么 columns[0] = 6。从第一行开始放置皇后，每行只放置一个，假设之前的摆放都不会产生冲突，现在将皇后放在第 row 行第 col 列上，检查一下这样的摆放是否合理。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-indent: 29.3333px;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-indent: 29.3333px;">方法就是沿着两个方向检查是否存在冲突就可以了。</span></p> 
<h2><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</span></p></h2> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">首先，从第一行开始直到第 row 行的前一行为止，看那一行所放置的皇后是否在 col 列上，或者是不是在它的对角线上，代码如下。</span></p> 
<pre>boolean&nbsp;check(int&nbsp;row,&nbsp;int&nbsp;col,&nbsp;int[]&nbsp;columns)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;r&nbsp;=&nbsp;0;&nbsp;r&nbsp;&lt;&nbsp;row;&nbsp;r++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(columns[r]&nbsp;==&nbsp;col&nbsp;||&nbsp;row&nbsp;-&nbsp;r&nbsp;==&nbsp;Math.abs(columns[r]&nbsp;-&nbsp;col))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;false;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;
}</pre> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"></span><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">然后进行回溯的操作，代码如下。</span></p> 
<pre>int&nbsp;count;


int&nbsp;totalNQueens(int&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;count&nbsp;=&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;backtracking(n,&nbsp;0,&nbsp;new&nbsp;int[n]);
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;count;
}

void&nbsp;backtracking(int&nbsp;n,&nbsp;int&nbsp;row,&nbsp;int[]&nbsp;columns)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;是否在所有n行里都摆放好了皇后？
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(row&nbsp;==&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;&nbsp;//&nbsp;找到了新的摆放方法
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;
&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;尝试着将皇后放置在当前行中的每一列&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;col&nbsp;=&nbsp;0;&nbsp;col&nbsp;&lt;&nbsp;n;&nbsp;col++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns[row]&nbsp;=&nbsp;col;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;检查是否合法，如果合法就继续到下一行
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(check(row,&nbsp;col,&nbsp;columns))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backtracking(n,&nbsp;row&nbsp;+&nbsp;1,&nbsp;columns);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果不合法，就不要把皇后放在这列中（回溯）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;columns[row]&nbsp;=&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<h2></h2>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">算法分析</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">回溯其实是用递归实现的，因此我们在分析回溯的时间复杂度时，其实就是在对递归函数进行分析，方法和之前介绍的一样。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>举例</strong>：分析一下 N 皇后的时间复杂度。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">假设 backtracking 函数的执行时间是 T(n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><strong>解法</strong>：</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">每次都必须遍历所有的列，一共有 n 列。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">在每次遍历中，先要利用 check 函数检查当前的摆放方法会不会产生冲突，检查的时间复杂度由当前所在的行决定，上限是 n，所以总时间复杂度就是&nbsp;O(n<sup>2</sup>)。</span></p></li> 
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">递归地尝试着每种摆放，当我们放好了第一个皇后，剩下要处理的之后 n-1 个皇后，问题的规模减少了一个，于是执行时间变成了 T(n - 1)。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">最终得到了 T(n) 的表达式：T(n) = n×T(n - 1) +&nbsp;O(n<sup style="white-space: normal;">2</sup>)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">利用迭代法将 T(n) 展开得到：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = n×((n - 1)×T(n - 2) +&nbsp;&nbsp;(n - 1)<sup style="white-space: normal;">2</sup>&nbsp;+&nbsp;n<sup style="white-space: normal;">2</sup></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">…</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = n×(n - 1)×(n - 2)× … ×1 + 1 + 2<sup>2</sup>&nbsp;+ 3<sup>2</sup>&nbsp;+ … (n - 1)<sup>2</sup>&nbsp;+ n<sup>2</sup></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">前面一部分是阶乘，后面一部分是平方求和，根据公式最后得到：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">T(n) = n! + n(n+1)(2n+1)/6</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">O(T(n)) = n! + O(n<sup>3</sup>)</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">由于 n!&gt;n<sup>3</sup>，因此，它的上界就是 n!，即：O(T(n)) = n!</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">结语</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">递归和回溯可以说是算法面试中最重要的算法考察点之一，很多其他算法都有它们的影子。例如，二叉树的定义和遍历就利用到了递归的性质；归并排序、快速排序的时候也运用了递归；我们将在第 6 课介绍动态规划，它其实是对递归的一种优化；还有第 7 课里的二分搜索，也可以利用递归去实现。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">注意：要能熟练掌握好分析递归复杂度的方法，必须得有比较扎实的数学基础，比如对等差数列、等比数列等求和公式要牢记。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">建议：LeetCode 上对递归和回溯的题目分类做得很好，有丰富的题库，建议大家多做。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p><br></p>

## 深度与广度优先搜索

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这节课重点学习深度优先搜索算法（简称为 DFS）和广度优先搜索算法（简称为 BFS）。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">DFS 和 BFS 经常在算法面试题当中出现，在整个算法面试知识点中所占的比重非常大。应用最多的地方就是对图进行遍历，树也是图的一种。</span></p>
<h1 style="white-space: normal; text-align: justify;"></h1>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">深度优先搜索（Depth-First Search / DFS）</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">深度优先搜索，从起点出发，从规定的方向中选择其中一个不断地向前走，直到无法继续为止，然后尝试另外一种方向，直到最后走到终点。就像走迷宫一样，尽量往深处走。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">DFS 解决的是连通性的问题，即，给定两个点，一个是起始点，一个是终点，判断是不是有一条路径能从起点连接到终点。起点和终点，也可以指的是某种起始状态和最终的状态。问题的要求并不在乎路径是长还是短，只在乎有还是没有。有时候题目也会要求把找到的路径完整的打印出来。</span></p>
<h2 style="white-space: normal; text-align: justify;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">DFS 遍历</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：假设我们有这么一个图，里面有A、B、C、D、E、F、G、H 8 个顶点，点和点之间的联系如下图所示，对这个图进行深度优先的遍历。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkYuANIhxAAB2CBZsYLQ484.png">&nbsp; &nbsp; &nbsp;</span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">必须依赖栈（Stack），特点是后进先出（LIFO）。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第一步，选择一个起始顶点，例如从顶点 A 开始。把 A 压入栈，标记它为访问过（用红色标记），并输出到结果中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/23/CgoB5l2IkYyAAZhkABsNRVtft9s555.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第二步，寻找与 A 相连并且还没有被访问过的顶点，顶点 A 与 B、D、G 相连，而且它们都还没有被访问过，我们按照字母顺序处理，所以将 B 压入栈，标记它为访问过，并输出到结果中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp;&nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/23/CgoB5l2IkYyAHhJWACv4GjTZRBQ760.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第三步，现在我们在顶点 B 上，重复上面的操作，由于 B 与 A、E、F 相连，如果按照字母顺序处理的话，A 应该是要被访问的，但是 A 已经被访问了，所以我们访问顶点 E，将 E 压入栈，标记它为访问过，并输出到结果中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkYyAO9LVACEhHBdbKfc149.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第四步，从 E 开始，E 与 B、G 相连，但是B刚刚被访问过了，所以下一个被访问的将是G，把G压入栈，标记它为访问过，并输出到结果中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/23/CgoB5l2IkYyAc3T6ACUuR_5lcvw842.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第五步，现在我们在顶点 G 的位置，由于与 G 相连的顶点都被访问过了，类似于我们走到了一个死胡同，必须尝试其他的路口了。所以我们这里要做的就是简单地将 G 从栈里弹出，表示我们从 G 这里已经无法继续走下去了，看看能不能从前一个路口找到出路。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkYyAYBQ4AA7A5yscltI499.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">可以看到，每次我们在考虑下一个要被访问的点是什么的时候，如果发现周围的顶点都被访问了，就把当前的顶点弹出。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第六步，现在栈的顶部记录的是顶点 E，我们来看看与 E 相连的顶点中有没有还没被访问到的，发现它们都被访问了，所以把 E 也弹出去。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/23/CgoB5l2IkYyAe__KABAUImf6ENE708.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第七步，当前栈的顶点是 B，看看它周围有没有还没被访问的顶点，有，是顶点 F，于是把 F 压入栈，标记它为访问过，并输出到结果中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkY2ACNi3AEWj2_BWcsM296.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第八步，当前顶点是 F，与 F 相连并且还未被访问到的点是 C 和 D，按照字母顺序来，下一个被访问的点是 C，将 C 压入栈，标记为访问过，输出到结果中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkY2ABY_CAD5yLy-V6CM016.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第九步，当前顶点为 C，与 C 相连并尚未被访问到的顶点是 H，将 H 压入栈，标记为访问过，输出到结果中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/23/CgoB5l2IkY2AHiebAEZJ2pzOuiQ289.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第十步，当前顶点是 H，由于和它相连的点都被访问过了，将它弹出栈。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkY6AMrbOAC9gCtQSDyg193.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第十一步，当前顶点是 C，与 C 相连的点都被访问过了，将 C 弹出栈。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkZCAb7O6ACq7mfesvtU046.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第十二步，当前顶点是 F，与 F 相连的并且尚未访问的点是 D，将 D 压入栈，输出到结果中，并标记为访问过。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/23/CgoB5l2IkZGAcNsZACm2oC7I53I299.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第十三步，当前顶点是 D，与它相连的点都被访问过了，将它弹出栈。以此类推，顶点 F，B，A 的邻居都被访问过了，将它们依次弹出栈就好了。最后，当栈里已经没有顶点需要处理了，我们的整个遍历结束。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/23/CgoB5l2IkZKAUYofADryI0IEla8177.gif">&nbsp; &nbsp; &nbsp;</span></p>
<h2 style="white-space: normal; text-align: justify;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析一</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">给定一个二维矩阵代表一个迷宫，迷宫里面有通道，也有墙壁，通道由数字 0 表示，而墙壁由 -1 表示，有墙壁的地方不能通过，那么，能不能从 A 点走到 B 点。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/23/CgoB5l2IkZOAZAaTAAEnEYY55UA254.png">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">从 A 开始走的话，有很多条路径通往 B，例如下面两种。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkZmAUAsQAOl9ssa2zxE177.gif">&nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkZ6AEp2BAOF4o1jndN0409.gif"></span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">根据例题，来看实现代码，如下。</span></p>
<pre>boolean&nbsp;dfs(int&nbsp;maze[][],&nbsp;int&nbsp;x,&nbsp;int&nbsp;y)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第一步：判断是否找到了B
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(x&nbsp;==&nbsp;B[0]&nbsp;&amp;&amp;&nbsp;y&nbsp;==&nbsp;B[1])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第二步：标记当前的点已经被访问过
&nbsp;&nbsp;&nbsp;&nbsp;maze[x][y]&nbsp;=&nbsp;-1;

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第三步：在四个方向上尝试
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;d&nbsp;=&nbsp;0;&nbsp;d&nbsp;&lt;&nbsp;4;&nbsp;d++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i&nbsp;=&nbsp;x&nbsp;+&nbsp;dx[d],&nbsp;j&nbsp;=&nbsp;y&nbsp;+&nbsp;dy[d];

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第四步：如果有一条路径被找到了，返回true
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(isSafe(maze,&nbsp;i,&nbsp;j)&nbsp;&amp;&amp;&nbsp;dfs(maze,&nbsp;i,&nbsp;j))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;付出了所有的努力还是没能找到B，返回false
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;false;
&nbsp;&nbsp;
}</pre>

<h2 style="white-space: normal; text-align: justify;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">非递归实现</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">递归实现：</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码看上去很简洁；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实际应用中，递归需要压入和弹出栈，栈深的时候会造成运行效率低下。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">非递归实现：</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">栈支持压入和弹出；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">栈能提高效率。</span></p></li>
</ul>
<p style="line-height: 1.75em;"><strong><span style="">代码实现</span></strong></p>
<p style="line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></strong></p>
<p style="line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></strong></p>
<pre>boolean&nbsp;dfs(int&nbsp;maze[][],&nbsp;int&nbsp;x,&nbsp;int&nbsp;y)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;创建一个Stack
&nbsp;&nbsp;&nbsp;&nbsp;Stack&lt;Integer[]&gt;&nbsp;stack&nbsp;=&nbsp;new&nbsp;Stack&lt;&gt;();


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;将起始点压入栈，标记它访问过
&nbsp;&nbsp;&nbsp;&nbsp;stack.push(new&nbsp;Integer[]&nbsp;{x,&nbsp;y});
&nbsp;&nbsp;&nbsp;&nbsp;maze[x][y]&nbsp;=&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!stack.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;取出当前点
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integer[]&nbsp;pos&nbsp;=&nbsp;stack.pop();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;pos[0];&nbsp;y&nbsp;=&nbsp;pos[1];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;判断是否找到了目的地
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(x&nbsp;==&nbsp;B[0]&nbsp;&amp;&amp;&nbsp;y&nbsp;==&nbsp;B[1])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;在四个方向上尝试&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;d&nbsp;=&nbsp;0;&nbsp;d&nbsp;&lt;&nbsp;4;&nbsp;d++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i&nbsp;=&nbsp;x&nbsp;+&nbsp;dx[d],&nbsp;j&nbsp;=&nbsp;y&nbsp;+&nbsp;dy[d];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(isSafe(maze,&nbsp;i,&nbsp;j))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(new&nbsp;Integer[]&nbsp;{i,&nbsp;j});
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maze[i][j]&nbsp;=&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;false;
}</pre>

<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">算法分析</span><br></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">DFS 是图论里的算法，分析利用 DFS 解题的复杂度时，应当借用图论的思想。图有两种表示方式：邻接表、邻接矩阵。假设图里有 V 个顶点，E 条边。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px;">时间复杂度：</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">邻接表</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">访问所有顶点的时间为 O(V)，而查找所有顶点的邻居一共需要 O(E) 的时间，所以总的时间复杂度是 O(V + E)。</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">邻接矩阵</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">查找每个顶点的邻居需要 O(V) 的时间，所以查找整个矩阵的时候需要&nbsp;O(V<sup>2</sup>)&nbsp;的时间。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例：利用 DFS 在迷宫里找一条路径的复杂度。迷宫是用矩阵表示。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法：把迷宫看成是邻接矩阵。假设矩阵有 M 行 N 列，那么一共有 M × N 个顶点，因此时间复杂度就是 O(M × N)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">空间复杂度：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">DFS 需要堆栈来辅助，在最坏情况下，得把所有顶点都压入堆栈里，所以它的空间复杂度是 O(V)，即 O(M × N)。</span></p>
<h2 style="white-space: normal; text-align: justify;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析二</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：利用 DFS 去寻找最短的路径。</span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">思路 1：暴力法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">寻找出所有的路径，然后比较它们的长短，找出最短的那个。此时必须尝试所有的可能。因为 DFS 解决的只是连通性问题，不是用来求解最短路径问题的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">思路 2：优化法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">一边寻找目的地，一边记录它和起始点的距离（也就是步数）。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">从某方向到达该点所需要的步数更少，则更新。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkaSAJZTIAOVn4eGgEXc393.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从各方向到达该点所需要的步数都更多，则不再尝试。<span style="background-color: rgb(249, 237, 166);"></span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/43/CgotOV2IkamAazS1ANB4kNxFNT4453.gif">&nbsp; &nbsp; &nbsp;</span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>void&nbsp;solve(int&nbsp;maze[][])&nbsp;{


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第一步.&nbsp;除了A之外，将其他等于0的地方用MAX_VALUE替换
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;maze.length;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;0;&nbsp;j&nbsp;&lt;&nbsp;maze[0].length;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;	&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(maze[i][j]&nbsp;==&nbsp;0&nbsp;&amp;&amp;&nbsp;!(i&nbsp;==&nbsp;A[0]&nbsp;&amp;&amp;&nbsp;j&nbsp;==&nbsp;A[1]))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maze[i][j]&nbsp;=&nbsp;Integer.MAX_VALUE;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第二步.&nbsp;进行优化的DFS操作
&nbsp;&nbsp;&nbsp;&nbsp;dfs(maze,&nbsp;A[0],&nbsp;A[1]);

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第三步.&nbsp;看看是否找到了目的地
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(maze[B[0]][B[1]]&nbsp;&lt;&nbsp;Integer.MAX_VALUE)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Shortest&nbsp;path&nbsp;count&nbsp;is:&nbsp;"&nbsp;+&nbsp;maze[B[0]][B[1]]);
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Cannot&nbsp;find&nbsp;B!");
&nbsp;&nbsp;&nbsp;&nbsp;}
}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;void&nbsp;dfs(int&nbsp;maze[][],&nbsp;int&nbsp;x,&nbsp;int&nbsp;y)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第一步.&nbsp;判断是否找到了B
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(x&nbsp;==&nbsp;B[0]&nbsp;&amp;&amp;&nbsp;y&nbsp;==&nbsp;B[1])&nbsp;return;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;第二步.&nbsp;在四个方向上尝试
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;d&nbsp;=&nbsp;0;&nbsp;d&nbsp;&lt;&nbsp;4;&nbsp;d++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i&nbsp;=&nbsp;x&nbsp;+&nbsp;dx[d],&nbsp;j&nbsp;=&nbsp;y&nbsp;+&nbsp;dy[d];

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;判断下一个点的步数是否比目前的步数+1还要大
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(isSafe(maze,&nbsp;i,&nbsp;j)&nbsp;&amp;&amp;&nbsp;maze[i][j]&nbsp;&gt;&nbsp;maze[x][y]&nbsp;+&nbsp;1)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果是，就更新下一个点的步数，并继续DFS下去
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maze[i][j]&nbsp;=&nbsp;maze[x][y]&nbsp;+&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dfs(maze,&nbsp;i,&nbsp;j);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：之前的题目只要找到了一个路径就返回，这里我们必须尽可能多的去尝试，直到找到最短路径。</span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">运行结果</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当程序运行完毕之后，矩阵的最终结果如下。</span></p>
<pre>2,&nbsp;&nbsp;1,&nbsp;&nbsp;A,&nbsp;&nbsp;1,&nbsp;&nbsp;2,&nbsp;&nbsp;3
3,&nbsp;&nbsp;2,&nbsp;-1,&nbsp;&nbsp;2,&nbsp;&nbsp;3,&nbsp;&nbsp;4&nbsp;
4,&nbsp;&nbsp;3,&nbsp;-1,&nbsp;&nbsp;3,&nbsp;&nbsp;4,&nbsp;&nbsp;5&nbsp;
5,&nbsp;&nbsp;4,&nbsp;-1,&nbsp;-1,&nbsp;&nbsp;5,&nbsp;&nbsp;6&nbsp;
6,&nbsp;-1,&nbsp;&nbsp;8,&nbsp;&nbsp;7,&nbsp;&nbsp;6,&nbsp;&nbsp;7&nbsp;
7,&nbsp;&nbsp;8,&nbsp;&nbsp;9,&nbsp;&nbsp;8,&nbsp;&nbsp;7,&nbsp;-1</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">可以看到，矩阵中每个点的数值代表着它离 A 点最近的步数。</span></p>
<h1 style="white-space: normal; text-align: justify;"></h1>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">广度优先搜索（Breadth-First Search / BFS）</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">广度优先搜索，一般用来解决最短路径的问题。和深度优先搜索不同，广度优先的搜索是从起始点出发，一层一层地进行，每层当中的点距离起始点的步数都是相同的，当找到了目的地之后就可以立即结束。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">广度优先的搜索可以同时从起始点和终点开始进行，称之为双端 BFS。这种算法往往可以大大地提高搜索的效率。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例：在社交应用程序中，两个人之间需要经过多少个朋友的介绍才能互相认识对方。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法：</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">只从一个方向进行 BFS，有时候这个人认识的朋友特别多，那么会导致搜索起来非常慢；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果另外一方认识的人比较少，从这一方进行搜索，就能极大地减少搜索的次数；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">每次在决定从哪一边进行搜索的时候，要判断一下哪边认识的人比较少，然后从那边进行搜索。</span></p></li>
</ul>
<h2 style="white-space: normal; text-align: justify;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">BFS 遍历</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：假设我们有这么一个图，里面有A、B、C、D、E、F、G、H 8 个顶点，点和点之间的联系如下图所示，对这个图进行深度优先的遍历。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/24/CgoB5l2IkamAcHHCAAB2vDyOBsk961.png">&nbsp; &nbsp; &nbsp;</span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">依赖队列（Queue），先进先出（FIFO）。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">一层一层地把与某个点相连的点放入队列中，处理节点的时候正好按照它们进入队列的顺序进行。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第一步，选择一个起始顶点，让我们从顶点 A 开始。把 A 压入队列，标记它为访问过（用红色标记）。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/24/CgoB5l2IkaqAMe91ACG_XqSE0yA958.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第二步，从队列的头取出顶点 A，打印输出到结果中，同时将与它相连的尚未被访问过的点按照字母大小顺序压入队列，同时把它们都标记为访问过，防止它们被重复地添加到队列中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/24/CgoB5l2IkayAaGfVAETtH2VWV-A751.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第三步，从队列的头取出顶点 B，打印输出它，同时将与它相连的尚未被访问过的点（也就是 E 和 F）压入队列，同时把它们都标记为访问过。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/24/CgoB5l2Ika-AOPRWAHRFIVXcPQI792.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第四步，继续从队列的头取出顶点 D，打印输出它，此时我们发现，与 D 相连的顶点 A 和 F 都被标记访问过了，所以就不要把它们压入队列里。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/24/CgoB5l2IkbGAMV2kAC8Ltvwuc5g827.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第五步，接下来，队列的头是顶点 G，打印输出它，同样的，G 周围的点都被标记访问过了。我们不做任何处理。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/44/CgotOV2IkbKAceIeADfsJWqxiZA916.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第六步，队列的头是 E，打印输出它，它周围的点也都被标记为访问过了，我们不做任何处理。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/24/CgoB5l2IkbOACo8JABbKDt0EN50653.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第七步，接下来轮到顶点 F，打印输出它，将 C 压入队列，并标记 C 为访问过。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/44/CgotOV2IkbWATgK5ACuDZM3dEJw749.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第八步，将 C 从队列中移出，打印输出它，与它相连的 H 还没被访问到，将 H 压入队列，将它标记为访问过。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/44/CgotOV2IkbaAW9IfACOEixVhbyA516.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">第九步，队列里只剩下 H 了，将它移出，打印输出它，发现它的邻居都被访问过了，不做任何事情。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/44/CgotOV2IkbeAHpX6AB3ZQSZ7XbM801.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第十步，队列为空，表示所有的点都被处理完毕了，程序结束。</span></p>
<h2 style="white-space: normal; text-align: justify;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析一</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">运用广度优先搜索的算法在迷宫中寻找最短的路径。</span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">搜索的过程如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/44/CgotOV2IkbuAIX0lAHdOXp_zsxE546.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">从起始点 A 出发，类似于涟漪，一层一层地扫描，避开墙壁，同时把每个点与 A 的距离或者步数标记上。当找到目的地的时候返回步数，这个步数保证是最短的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>void&nbsp;bfs(int[][]&nbsp;maze,&nbsp;int&nbsp;x,&nbsp;int&nbsp;y)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;创建一个队列queue，将起始点A加入队列中
&nbsp;&nbsp;&nbsp;&nbsp;Queue&lt;Integer[]&gt;&nbsp;queue&nbsp;=&nbsp;new&nbsp;LinkedList&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;queue.add(new&nbsp;Integer[]&nbsp;{x,&nbsp;y});
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;只要队列不为空就一直循环下去&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从队列的头取出当前点
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integer[]&nbsp;pos&nbsp;=&nbsp;queue.poll();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;pos[0];&nbsp;y&nbsp;=&nbsp;pos[1];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从四个方向进行BFS
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;d&nbsp;=&nbsp;0;&nbsp;d&nbsp;&lt;&nbsp;4;&nbsp;d++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i&nbsp;=&nbsp;x&nbsp;+&nbsp;dx[d],&nbsp;j&nbsp;=&nbsp;y&nbsp;+&nbsp;dy[d];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(isSafe(maze,&nbsp;i,&nbsp;j))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;记录步数（标记访问过）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maze[i][j]&nbsp;=&nbsp;maze[x][y]&nbsp;+&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;然后添加到队列中&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.add(new&nbsp;Integer[]&nbsp;{i,&nbsp;j});
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果发现了目的地就返回&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(i&nbsp;==&nbsp;B[0]&nbsp;&amp;&amp;&nbsp;j&nbsp;==&nbsp;B[1])&nbsp;return;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>
<h2 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">算法分析</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">同样借助图论的分析方法，假设有 V 个顶点，E 条边。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度：</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">邻接表</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">每个顶点都需要被访问一次，时间复杂度是 O(V)；相连的顶点（也就是每条边）也都要被访问一次，加起来就是 O(E)。因此整体时间复杂度就是 O(V+E)。</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">邻接矩阵</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">V 个顶点，每次都要检查每个顶点与其他顶点是否有联系，因此时间复杂度是&nbsp;O(V<sup>2</sup>)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例：在迷宫里进行 BFS 搜索。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法：用邻接矩阵。假设矩阵有 M 行 N 列，那么一共有 M×N 个顶点，时间复杂度就是 O(M×N)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">空间复杂度：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">需要借助一个队列，所有顶点都要进入队列一次，从队列弹出一次。在最坏的情况下，空间复杂度是 O(V)，即 O(M×N)。</span></p>
<h2 style="white-space: normal; text-align: justify;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析二</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：假设从起始点 A 走到目的地 B 的过程中，最多允许打通 3 堵墙，求最短的路径的步数。（这个题目可以扩展到允许打通任意数目的墙。）</span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">思路 1：暴力法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">1. 首先枚举出所有拆墙的方法.</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设一共有 K 堵墙在当前的迷宫里，最多允许拆 3 堵墙，有四种情况：不拆，只拆一堵墙、两堵墙、三堵墙。组合方式如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">C(K, 0) + C(K, 1) + C(K, 2) + C(K, 3) = 1 + K + K ×(K - 1) / 2 + K× (K - 1) ×(K - 2) / 6</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">上式复杂度为 K 的 3 次方，如果允许打通墙的数量是 w，那么就是 K 的 w 次方。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 分别进行 BFS，整体的时间复杂度就是&nbsp;O(n<sup>2</sup>×K<sup>w</sup>)，从中找到最短的那条路径。</span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">很显然，该方法非常没有效率。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">思路 2：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 将 BFS 的数量减少。</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在不允许打通墙的情况下，只有一个人进行 BFS 搜索，时间复杂度是&nbsp;n<sup>2</sup>；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">允许打通一堵墙的情况下，分身为两个人进行 BFS 搜索，时间复杂度是 2×n<sup>2</sup>；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">允许打通两堵墙的情况下，分身为三个人进行 BFS 搜索，时间复杂度是 3×n<sup>2</sup>；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">允许打通三堵墙的情况下，分身为四个人进行 BFS 搜索，时间复杂度是 4×n<sup>2</sup>。&nbsp;</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 解决关键问题。</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果第一个人又遇到了一堵墙，那么他是否需要再次分身呢？不能。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">第一个人怎么告诉第二个人可以去访问这个点？把这个点放入到队列中。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如何让 4 个人在独立的平面里搜索？利用一个三维矩阵记录每个层面里的点。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/24/CgoB5l2IkcCAWjRjALszKfUEV7A310.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/24/CgoB5l2IkcOAd-giAItzJVPUNUM375.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/44/CgotOV2IkcaAI78RAHjv2Tul3JY991.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">只需要 4 个人去做 BFS，整体的时间复杂度就是 4 倍的 BFS。</span></p>
<h3 style="white-space: normal; text-align: justify;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>int&nbsp;bfs(int[][]&nbsp;maze,&nbsp;int&nbsp;x,&nbsp;int&nbsp;y,&nbsp;int&nbsp;w)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;初始化
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;steps&nbsp;=&nbsp;0,&nbsp;z&nbsp;=&nbsp;0;


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;利用队列来辅助BFS
&nbsp;&nbsp;&nbsp;&nbsp;Queue&lt;Integer[]&gt;&nbsp;queue&nbsp;=&nbsp;new&nbsp;LinkedList&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;queue.add(new&nbsp;Integer[]&nbsp;{x,&nbsp;y,&nbsp;z});
&nbsp;&nbsp;&nbsp;&nbsp;queue.add(null);

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;三维的visited记录各层平面中每个点是否被访问过
&nbsp;&nbsp;&nbsp;&nbsp;boolean[][][]&nbsp;visited&nbsp;=&nbsp;new&nbsp;boolean[N][N][w&nbsp;+&nbsp;1];
&nbsp;&nbsp;&nbsp;&nbsp;visited[x][y][z]&nbsp;=&nbsp;true;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;只要队列不为空就一直循环
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integer[]&nbsp;pos&nbsp;=&nbsp;queue.poll();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(pos&nbsp;!=&nbsp;null)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;取出当前点
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;pos[0];&nbsp;y&nbsp;=&nbsp;pos[1];&nbsp;z&nbsp;=&nbsp;pos[2];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果遇到了目的地就立即返回步数
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(x&nbsp;==&nbsp;B[0]&nbsp;&amp;&amp;&nbsp;y&nbsp;==&nbsp;B[1])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;steps;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;朝四个方向尝试
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;d&nbsp;=&nbsp;0;&nbsp;d&nbsp;&lt;&nbsp;4;&nbsp;d++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i&nbsp;=&nbsp;x&nbsp;+&nbsp;dx[d],&nbsp;j&nbsp;=&nbsp;y&nbsp;+&nbsp;dy[d];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!isSafe(maze,&nbsp;i,&nbsp;j,&nbsp;z,&nbsp;visited))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果在当前层遇到了墙，尝试打通它
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;k&nbsp;=&nbsp;getLayer(maze,&nbsp;w,&nbsp;i,&nbsp;j,&nbsp;z);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(k&nbsp;&gt;=&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果能打通墙，就在下一层尝试
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visited[i][j][k]&nbsp;=&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.add(new&nbsp;Integer[]&nbsp;{i,&nbsp;j,&nbsp;k});
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;steps++;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.add(null);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;-1;
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：</span></p>
<ul style=" white-space: normal; text-align: justify;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">初始化队列的时候，除了把在第一层里的起始点 A 加入到队列中，还加入了一个 null，这是使用 BFS 的一个小技巧，用来帮助我们计算当前遍历了多少步数。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">其中，利用 getLayer 函数判断是否遇到了墙壁，以及是否能打通墙壁到下一层。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最后，如果当前点是 null，表明已经处理完当前的步数，继续下一步。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">getLayer 函数的代码实现如下。</span></p>
<pre>int&nbsp;getLayer(int[][]&nbsp;maze,&nbsp;int&nbsp;w,&nbsp;int&nbsp;x,&nbsp;int&nbsp;y,&nbsp;int&nbsp;z)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(maze[x][y]&nbsp;==&nbsp;-1)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;z&nbsp;&lt;&nbsp;w&nbsp;?&nbsp;z&nbsp;+&nbsp;1&nbsp;:&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;z;
}</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">getLayer 的思想很简单，如果当前遇到的是一堵墙，那么看打通的墙壁个数是否已经超出了规定，如果没有，就继续打通它，否则返回 -1。另外，如果当前遇到的不是一堵墙，就继续在当前的平面里进行 BFS。</span></p>
<h1 style="white-space: normal; text-align: justify;"></h1>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 18px;">结语</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这节课学习了深度优先和广度优先这两种搜索算法。它们都是算法面试中常考的知识点。建议对二者比较学习。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 上对 DFS 以及 BFS 有非常好的分类和题库，而且对于时间复杂度和空间复杂度都有考察，是很好的练手的平台，希望大家多多练习。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p><br></p>

## 动态规划

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">动态规划可以说是很多准备算法面试者的梦魇，大家都非常怕面试官会出动态规划的题目，如果遇到一些做过的题目还好，但要是遇到了根本就没有做过的，就无从下手了。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">本节课从动态规划的基本属性，题目分类，解题思想，以及算法复杂度等方面来详解动态规划。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">判断动态规划</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">Wikipedia 定义：它既是一种数学优化的方法，同时也是编程的方法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 是数学优化的方法——最优子结构</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">动态规划是数学优化的方法指，动态规划要解决的都是问题的最优解。而一个问题的最优解是由它的各个子问题的最优解决定的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">由此引出动态规划的第一个重要的属性：最优子结构（Optimal Substructure)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">一般由最优子结构，推导出一个状态转移方程 f(n)，就能很快写出问题的递归实现方法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/EF/CgoB5l2IcqKAT-iFAAvZ0mB2w9o185.gif">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;2. 是</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">编程的方法——重叠子问题</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<p style="white-space: normal;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">动态规划是编程的方法指，可以借助编程的技巧去保证每个重叠的子问题只会被求解一次。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; line-height: 22.5px; font-size: 11pt; color: rgb(73, 73, 73);"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">引出了动态规划的第二个重要的属性：重叠子问题（Overlapping Sub-problems）。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/0F/CgotOV2IcqKAee79ADIs6KpFExY310.gif">&nbsp;&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">下面通过几个小例题来判断其方法是否符合动态规划。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>举例 1</strong>：斐波那契数列问题。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法：为了求出第 5 个斐波那契数，得先求出第 4 个和第 3 个数，但是在求第 4 个数的时候，又得重复计算一次第 3 个数，同样，对于第 2 个数的计算也出现了重复。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因此，判断一个问题能不能称得上是动态规划的问题，需要看它是否同时满足这两个重要的属性：最优子结构（Optimal Substructure）和重叠子问题（Overlapping Sub-problems）</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>举例 2</strong>：给定如下的一个有向图，求出从顶点 A 到 C 的最长的路径。要求路径中的点只能出现一次。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/EF/CgoB5l2IcqOAXphFAA-GWGuo2C0144.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">按照题目的要求，可以看到，从 A 通往 C 有两条最长的路径：A -&gt; B -&gt; C 和&nbsp;A -&gt; D -&gt; C。</span></p>
<p style="white-space: normal;"><br></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对于&nbsp;<span style="color: rgb(73, 73, 73); font-size: 14.6667px;">A -&gt; B -&gt; C，</span><span style="color: rgb(73, 73, 73); font-size: 11pt;">A 到 B 的最长距离是：A -&gt; D -&gt; C -&gt; B</span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/0F/CgotOV2IcqSAeVmBABezjz1sSV0529.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">B 到 C 的最长距离是：B -&gt; A -&gt; D -&gt; C</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/EF/CgoB5l2IcqSAb1L3ABPxU8fyZuk520.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">组合路径：A -&gt; D -&gt; C -&gt; B -&gt; A -&gt; D -&gt; C</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/0F/CgotOV2IcqWAfxMeABZ4L440D5c286.gif">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">上述答案并不满足题目的要求。该题并没有一个最优子结构，不是动态规划问题。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>举例 3</strong>：归并排序和快速排序是否属于动态规划？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法：</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">将要排序的数组分成两半，然后递归地进行处理，满足最优子结构的属性；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">不断地对待排序的数组进行对半分的时候，两半边的数据并不重叠，不会遇到重复的子数组，不满足重叠子问题的属性。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因此这两种算法不是动态规划的方法。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 第 300 题：给定一个无序的整数数组，找到其中最长子序列长度。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">说明：</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">你算法的时间复杂度应该为 O(n<sup>2</sup>） 。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>注意：</strong>子序列和子数组不同，它并不要求元素是连续的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入：[ 10, 9, 2, 5, 3, 7, 101, 18 ]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出：4&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">即，最长的上升子序列是 [2, 3, 7, 101]，它的长度是 4。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在给定的数组里，有很多的上升子序列，例如：[10, 101]，[9, 101]，[2, 5, 7, 101]，以及 [2, 3, 7, 101]，只需要找出其中一个最长的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>思路 1</strong>：暴力法</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">找出所有的子序列，然后从中返回一个最长的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">从一个数组中罗列出所有的非空子数组有： n×(n + 1)/2 种，即 O(n<sup>2</sup>)，那么罗列出所有的非空子序列有 2<sup>n−1</sup>&nbsp;种。复杂度将是 O(2<sup>n</sup>)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>思路 2</strong>：缩小问题规模</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 找最优子结构：输入规模对半分</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/EF/CgoB5l2IcqWAfAX8ACiK5xevrOI755.gif">&nbsp;&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">[10, 9, 2, 5] 最长的子序列应该是 [2, 5]，而 [3, 7, 101, 4] 最长的子序列是 [3, 7, 101]，由于 3 比 5 小，无法简单地组合在一起。即该方法下，总问题的解无法直观地通过子问题的最优解求得。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 找最优子结构：每次减一个</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设 f(n) 表示的是数组 nums[0，…，n−1] 中最长的子序列，那么 f(n−1) 就是数组 nums[0，…，n−2] 中最长的子序列，依此类推，f(1) 就是 nums[0] 的最长子序列。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设已经解决了 f(1)，f(2)，… f(n−1) 的问题，考虑最后一个数 nums[n−1]，也必然考虑到倒数第二个数 nums[n−2]，所以 f(n) 指：如果包含了最后的数，那么最长的子序列应该是什么。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：最后这个数必须包含在子序列当中的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如何通过 f(1)，f(2)，…f(n−1) 推导出 f(n) 呢？由于最后一个数是 4，我们只需要在前面的 f(1)，f(2)，…f(n−1) 当中，找出一个以小于 4 的数作为结尾的最长的子序列，然后把 4 添加到最后，那么 f(n) 就一定是以 4 作为结尾的最长的子序列了。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/0F/CgotOV2IcqWAdiFJACpjs_86OCY252.gif">&nbsp;&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">最长的子序列并不一定会包含 4，遍历 f(1)，f(2)，…f(n−1) ，找出最长的。例如，以 101 结尾的最长的上升子序列是什么。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/EF/CgoB5l2IcqaAZ_nOADpppdMvQp0237.gif">&nbsp;&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">总结解决动态规划问题的两个难点。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">（1）如何定义 f(n)</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">对于这道题而言，f(n) 是以 nums[n−1] 结尾的最长的上升子序列的长度</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">（2）如何通过 f(1)，f(2)，…f(n−1) 推导出 f(n)，即状态转移方程</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">本题中，nums[n−1] 和比它小的每一个值 nums[i] 进行比较，其中 1&lt;=i&lt;n，加 1 即可。因此状态转移方程就是：</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">f(n)=max (1 &lt;= i &lt; n−1, nums[i−1] &lt; nums[n−1]) { f(i) } + 1</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">以上证明了这个问题有一个最优的子结构。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. 找重叠子问题</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在分析最后一个数 4 的时候，以 3 结尾的最长的上升子序列长度就是 f(5)，因为 3 是第 5 个数。把问题规模缩小 2 个，当前的数变成 101 的时候，找比它小的数，又发现了 3，这个时候又会去重复计算一遍 f(5)，说明该题有重叠的子问题。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因此，可以运用动态规划的方法来解决这个问题。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">递归（Recursion）</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">用递归的方法求解状态转移方程式 f(n)=max (1 &lt;= i &lt; n−1, nums[i−1] &lt; nums[n−1]) { f(i) } + 1。</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对于每个 n，要从 0 开始遍历</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在 n 之前，找出比 nums[n−1] 小的数</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">递归地调用 f 函数，找出最大的，最后加上 1</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 i 等于 0 的时候，应该返回 0；当 i 等于 1 的时候应该返回 1。</span></p></li>
</ul>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">下面就是递归的代码实现。</span></p>
<pre>class&nbsp;LISRecursion&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个静态变量&nbsp;max，用来保存最终的最长的上升子序列的长度
&nbsp;&nbsp;&nbsp;&nbsp;static&nbsp;int&nbsp;max;


&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;f(int[]&nbsp;nums,&nbsp;int&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;&lt;=&nbsp;1)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;n;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;result=0,&nbsp;maxEndingHere=1;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从头遍历数组，递归求出以每个点为结尾的子数组中最长上升序列的长度
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i=1;&nbsp;i&nbsp;&lt;&nbsp;n;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result=f(nums,&nbsp;i);

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[i−1]&nbsp;&lt;&nbsp;nums[n−1]&nbsp;&amp;&amp;&nbsp;result&nbsp;+&nbsp;1&nbsp;&gt;&nbsp;maxEndingHere)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxEndingHere=result&nbsp;+&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;判断一下，如果那个数比目前最后一个数要小，那么就能构成一个新的上升子序列&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(max&nbsp;&lt;&nbsp;maxEndingHere)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max=maxEndingHere;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;返回以当前数结尾的上升子序列的最长长度
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;maxEndingHere;
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;LIS(int[]&nbsp;nums)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max=1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f(nums,&nbsp;nums.length);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;max;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">其中，实现</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">状态转移方程，即 f 函数。</span><br></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最基本的情况，当数组的长度为 0 时，没有上升子序列，当数组长度为 1 时，最长的上升子序列长度是 1。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">maxEndingHere 变量的含义就是包含当前最后一个元素的情况下，最长的上升子序列长度。</span></p></li>
</ul>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 12pt;">时间复杂度</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">用公式法解决该递归问题的时间复杂度，如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当 n=1 的时候，递归直接返回 1，执行时间为 O(1)，即 T(1)=O(1)</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当 n=2 的时候，内部调用了一次递归求解 T(1)，所以 T(2)=T(1)</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">当 n=3 的时候，T(3)=T(1) + T(2)</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">…</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">以此类推，</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">T(n−1)=T(1) + T(2) + … + T(n−2)</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">T(n)=T(1) + T(2) + … + T(n−1)</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">通过观察，我们得到：T(n)=2×T(n−1)，这并不满足 T(n)=a×T(n / b) + f(n) 的关系式。但是 T(n) 等于两倍的 T(n−1)，表明，我们的计算是成指数增长的，每次的计算都是先前的两倍。所以 O(n)=O(2<sup>n</sup>)。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">记忆化（Memoization）</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">由于递归的解法需要耗费非常多的重复计算，而且很多计算都是重叠的，避免重叠计算的一种办法就是记忆化。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">记忆化，就是将已经计算出来的结果保存起来，那么下次遇到相同的输入时，直接返回保存好的结果，能够有效节省了大量的计算时间。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在之前递归实现的基础上实现记忆化，代码如下。</span></p>
<pre><p style="line-height: 1.75em;">class LISMemoization {<br> &nbsp; &nbsp;static int max;<br> &nbsp; &nbsp;// 定义哈希表 cache，用来保存计算结果<br> &nbsp; &nbsp;static HashMap&lt;Integer, Integer&gt; cache;<br> &nbsp; &nbsp;<br> &nbsp; &nbsp;// 调用递归函数的时候，判断 cache 里是否已经保留了这个值。是，则返回；不是，继续递归调用<br> &nbsp; &nbsp;public int f(int[] nums, int n) {<br> &nbsp; &nbsp; &nbsp; &nbsp;if (cache.containsKey(n)) {<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;return cache.get(n);<br> &nbsp; &nbsp; &nbsp; &nbsp;}<br> &nbsp; &nbsp; &nbsp; &nbsp;if (n &lt;= 1) {<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;return n;<br> &nbsp; &nbsp; &nbsp; &nbsp;}<br><br> &nbsp; &nbsp; &nbsp; &nbsp;int result=0, maxEndingHere=1;&nbsp;<br> &nbsp; &nbsp; &nbsp; &nbsp;for (int i=1; i &lt; n; i++) {<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;...<br> &nbsp; &nbsp; &nbsp; &nbsp;}<br> &nbsp; &nbsp;<br> &nbsp; &nbsp; &nbsp; &nbsp;if (max &lt; maxEndingHere) {<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;max=maxEndingHere;<br> &nbsp; &nbsp; &nbsp; &nbsp;}<br> &nbsp; &nbsp;<br> &nbsp; &nbsp; &nbsp; &nbsp;// 在返回当前结果前，保存到 cache<br> &nbsp; &nbsp; &nbsp; &nbsp;cache.put(n, maxEndingHere);<br> &nbsp; &nbsp; &nbsp; &nbsp;return maxEndingHere;<br> &nbsp; &nbsp;}<br>}</p></pre>
<h2 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">分析递归+记忆化的时间复杂度，如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/0F/CgotOV2IcqaAZ_YzABSfIxvIih8411.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">函数 f 按序传递n，n−1，n−2 … 最后是 1，把结果缓存并返回；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">递归返回到输入 n；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">缓存里已经保存了 n−1 个结果；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">for 循环调用递归函数 n−1 次，从 cache 里直接返回结果。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">上述过程的时间复杂度是 O(1)。即将问题的规模大小从 n 逐渐减小到 1 的时候，通过将各个结果保存起来，可以将 T(1)，T(2)，….T(n−1) 的复杂度降低到线性的复杂度。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">现在，回到 T(n)，在 for 循环里，尝试着从 T(1)，T(2)….T(n−1) 里取出最大值，因此&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">O(T(n))=O(T(1) + T(2) + … + T(n−1))=O(1 + 2 + …. + n−1)=O(n×(n−1)/2)=O(n</span><sup style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">2</sup><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">最后加上构建缓存 cache 的时间，整体的时间复杂度就是&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">O(f(n))=O(n) + O(n^2)=O(n</span><sup style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">2</sup><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">通过记忆化的操作，我们把时间复杂度从 O(2<sup>n</sup>) 降低到了 O(n<sup>2</sup>)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这种将问题规模不断减少的做法，被称为自顶向下的方法。但是，由于有了递归的存在，程序运行时对堆栈的消耗以及处理是很慢的，在实际工作中并不推荐。更好的办法是自底向上。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">自底向上（Bottom-Up）</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">自底向上指，通过状态转移方程，从最小的问题规模入手，不断地增加问题规模，直到所要求的问题规模为止。依然使用记忆化避免重复的计算，不需要递归。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">建议：在面试的时候，如果能最终给出一个自底向上的方案和代码，则比较完美。</span></p>
<pre>class&nbsp;LISDP&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;LIS(int[]&nbsp;nums,&nbsp;int&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int[]&nbsp;dp=new&nbsp;int[n];&nbsp;//&nbsp;一维数组&nbsp;dp&nbsp;存储计算结果
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i,&nbsp;j,&nbsp;max=0;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;初始化&nbsp;dp&nbsp;数组里的每个元素的值为&nbsp;1，即以每个元素作为结尾的最长子序列的长度初始化为&nbsp;1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(i=0;&nbsp;i&nbsp;&lt;&nbsp;n;&nbsp;i++)&nbsp;dp[i]=1;


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;自底向上地求解每个子问题的最优解
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(i=0;&nbsp;i&nbsp;&lt;&nbsp;n;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;遍历中遇到的每个元素&nbsp;nums[j]&nbsp;与&nbsp;nums[i]&nbsp;比较，若&nbsp;nums[j]&nbsp;&lt;&nbsp;nums[i]，说明&nbsp;nums[i]&nbsp;有机会构成上升序列，若新的上升序列比之前计算过的还要长，更新一下，保存到&nbsp;cache&nbsp;数组
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(j=0;&nbsp;j&nbsp;&lt;&nbsp;i;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[j]&nbsp;&lt;&nbsp;nums[i]&nbsp;&amp;&amp;&nbsp;dp[i]&nbsp;&lt;&nbsp;dp[j]&nbsp;+&nbsp;1)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i]=dp[j]&nbsp;+&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;用当前计算好的长度与全局的最大值进行比较&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max=Math.max(max,&nbsp;dp[i]);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;最后得出最长的上升序列的长度
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;max;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
}</pre>

<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">时间复杂度</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">由上可知，这一个双重循环。当 i=0 的时候，内循环执行 &nbsp;0 次；当 i=1 的时候，内循环执行 1 次……以此类推，当 i=n−1 的时候，内循环执行了 n−1 次，因此，总体的时间复杂度是&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">O(1 + 2 + .. + n−1)=O(n×(n−1) / 2)=O(n<sup>2</sup>)。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 18px;">动态规划面试题分类</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">运用动态规划去解决问题，最难的地方有两个：</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">应当采用什么样的数据结构来保存什么样的计算结果</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如何利用保存下来的计算结果推导出状态转移方程</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第一个难点，不仅是为了避免重复的计算，也是推导状态转移方程的关键。这一难点往往是在把问题规模缩小的过程中进行的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解决技巧：假设已经把所有子问题的最佳结果都计算出来了，那么只需要考虑，如何根据这些子问题的结果来得出最终的答案。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">根据动态规划问题的难易程度，把常见的动态规划面试题分成如下三大类。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">线性规划</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">面试题中最常见也是最简单的一种。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">线性，就是说各个子问题的规模以线性的方式分布，并且子问题的最佳状态或结果可以存储在一维线性的数据结构里，例如一维数组，哈希表等。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法中，经常会用 dp[i] 去表示第 i 个位置的结果，或者从 0 开始到第 i 个位置为止的最佳状态或结果。例如，最长上升子序列。dp[i] 表示从数组第 0 个元素开始到第i个元素为止的最长的上升子序列。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">求解 dp[i] 的复杂程度取决于题目的要求，但是基本上有两种形式。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="color: rgb(63, 63, 63);"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">求解 dp[i] 形式一</span></strong></span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第一种形式，当前所求的值仅仅依赖于有限个先前计算好的值，也就是说，dp[i] 仅仅依赖于有限个 dp[j]，其中 j &lt; i。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>举例 1</strong>：斐波那契数列。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法：dp[i]=dp[i−1] + dp[i−2]，可以看到，当前值只依赖于前面两个计算好的值。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">建议：LeetCode 第 70 题（爬楼梯）就是一道求解斐波那契数列的题目。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>举例2</strong>：LeetCode第 198 题，给定一个数组，不能选择相邻的数，求如何选才能使总数最大。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法：这道题需要运用经典的 0-1 思想，简单说就是：“选还是不选”。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设 dp[i] 表示到第 i 个元素为止我们所能收获到的最大总数。</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果选择了第 i 个数，则不能选它的前一个数，因此，收获的最大总数就是 dp[i−2] + nums[i]。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">不选，则直接考虑它的前一个数 dp[i−1]。因此，可以推导出它的递归公式&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">dp[i]=max(nums[i] + dp[i−2], dp[i−1])，</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-indent: 29.3333px;">可以看到，dp[i] 仅仅依赖于有限个 dp[j]，其中 j=i−1，i−2。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong><br></strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>代码实现</strong></span></p>
<pre>public&nbsp;int&nbsp;rob(int[]&nbsp;nums)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;nums.length;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;处理当数组为空或者数组只有一个元素的情况
&nbsp;&nbsp;&nbsp;&nbsp;if(n&nbsp;==&nbsp;0)&nbsp;return&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;if(n&nbsp;==&nbsp;1)&nbsp;return&nbsp;nums[0];


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个&nbsp;dp&nbsp;数组，dp[i]&nbsp;表示到第&nbsp;i&nbsp;个元素为止我们所能收获到的最大总数
&nbsp;&nbsp;&nbsp;&nbsp;int[]&nbsp;dp&nbsp;=&nbsp;new&nbsp;int[n];

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;初始化&nbsp;dp[0]，dp[1]
&nbsp;&nbsp;&nbsp;&nbsp;dp[0]&nbsp;=&nbsp;nums[0];
&nbsp;&nbsp;&nbsp;&nbsp;dp[1]&nbsp;=&nbsp;Math.max(nums[0],&nbsp;nums[1]);

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;对于每个&nbsp;nums[i]，考虑两种情况，选还是不选，然后取最大值
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;2;&nbsp;i&nbsp;&lt;&nbsp;n;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i]&nbsp;=&nbsp;Math.max(nums[i]&nbsp;+&nbsp;dp[i&nbsp;-&nbsp;2],&nbsp;dp[i&nbsp;-&nbsp;1]);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;dp[n&nbsp;-&nbsp;1];
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>举例3</strong>：一个机器人位于一个 网格的左上角（起始点在下图中标记为“Start”）。机器人每次只能向下或向右移动一步。机器人试图到达网格的右下角（在下图中标记为“Finish”）。问总共有多少条不同的路径？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">说明： 和的值均不超过100。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 46px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/EF/CgoB5l2IcqeAQlJTAAAkWU86cG8012.png">&nbsp;&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法 1：从起点考虑，暴力法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法 2：减小问题规模。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">分别计算走到它上面的格子以及左边的格子的步数，相加。递推公式为&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">dp[i][j]=dp[i−1][j] + dp[i][j−1]。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">虽然利用一个二维数组去保存计算的结果，但是 dp[i][j] 所表达的意思仍然是线性的，dp[i][j] 表示从起点到 (i, j) 的总走法。本题不再讨论具体实现。可以看到，dp[i][j] 仅仅依赖于两个先前的状态。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">求解 dp[i] 形式二</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">第二种求解 dp[i] 的形式，当前所求的值依赖于所有先前计算好的值，也就是说，dp[i] 是各个 dp[j] 的某种组合，其中 j 由 0 遍历到 i−1。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例：求解最长上升子序列。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法：dp[i]=max(dp[j]) + 1，0 &lt;= j &lt; i。可以看到，当前值依赖于前面所有计算好的值。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">区间规划</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">区间规划，就是说各个子问题的规模由不同的区间来定义，一般子问题的最佳状态或结果存储在二维数组里。一般用 dp[i][j] 代表从第 i 个位置到第 j 个位置之间的最佳状态或结果。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解这类问题的时间复杂度一般为多项式时间，对于一个大小为 n 的问题，时间复杂度不会超过 n 的多项式倍数。例如，O(n)=n^k，k 是一个常数，根据题目的不同而定。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例：LeetCode 第 516 题，在一个字符串 S 中求最长的回文子序列。例如给定字符串为 dccac，最长回文就是 ccc。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法 1：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">对于回文来说，必须保证两头的字符都相同。用 dp[i][j] 表示从字符串第 i 个字符到第 j 个字符之间的最长回文，比较这段区间外的两个字符，如果发现它们相等，它们就肯定能构成新的最长回文。而最长的回文长度会保存在 dp[0][n−1] 里。因此，可以推导出如下的递推公式。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当首尾的两个字符相等的时候&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">dp[0][n−1]=dp[1][n−2] + 2，</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">否则，</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">dp[0][n−1]=max(dp[1][n−1], dp[0][n−2])。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>代码实现</strong></span></p>
<pre>public&nbsp;static&nbsp;int&nbsp;LPS(String&nbsp;s)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;s.length();
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义&nbsp;dp&nbsp;矩阵，dp[i][j]&nbsp;表示从字符串第&nbsp;i&nbsp;个字符到第&nbsp;j&nbsp;个字符之间的最长回文
&nbsp;&nbsp;&nbsp;&nbsp;int[][]&nbsp;dp&nbsp;=&nbsp;new&nbsp;int[n][n];
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;初始化&nbsp;dp&nbsp;矩阵，将对角线元素设为&nbsp;1，即单个字符的回文长度为&nbsp;1
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;n;&nbsp;i++)&nbsp;dp[i][i]&nbsp;=&nbsp;1;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从长度为&nbsp;2&nbsp;开始，尝试将区间扩大，一直扩大到&nbsp;n
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;len&nbsp;=&nbsp;2;&nbsp;len&nbsp;&lt;=&nbsp;n;&nbsp;len++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;在扩大的过程中，每次都得出区间的其实位置i和结束位置j
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;n&nbsp;-&nbsp;len&nbsp;+&nbsp;1;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;j&nbsp;=&nbsp;i&nbsp;+&nbsp;len&nbsp;-&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;比较一下区间首尾的字符是否相等，如果相等，就加2；如果不等，从规模更小的字符串中得出最长的回文长度
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(s.charAt(i)&nbsp;==&nbsp;s.charAt(j))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j]&nbsp;=&nbsp;2&nbsp;+&nbsp;(len&nbsp;==&nbsp;2&nbsp;?&nbsp;0:&nbsp;dp[i&nbsp;+&nbsp;1][j&nbsp;-&nbsp;1]);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j]&nbsp;=&nbsp;Math.max(dp[i&nbsp;+&nbsp;1][j],&nbsp;dp[i][j&nbsp;-&nbsp;1]);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;dp[0][n&nbsp;-&nbsp;1];
}</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法 2：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如果用线性规划的方法来解，假设已经把 S[0]，S[0, 1]，S[0… n−2] 中所有最长的回文子序列都找出来了，把最后一个字符加入到 S 中，能不能成为一个新的最长的回文呢？方法是有的，建议同学们自己尝试一下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">关于区间规划，还有很多题目都有用到，例如给定一系列矩阵，求矩阵相乘的总次数最少的相乘方法。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">约束规划</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在普通的线性规划和区间规划里，一般题目有两种需求：统计和最优解。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这些题目不会对输出结果中的元素有什么限制，只要满足最终的一个条件就好了。但是在很多情况下，题目会对输出结果的元素添加一定的限制或约束条件，增加了解题的难度。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例：0-1 背包问题。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">给定 n 个物品，每个物品都有各自的价值 vi 和重量 wi，现在给你一个背包，背包所能承受的最大重量是 W，那么往这个背包里装物品，问怎么装能使被带走的物品的价值总和最大。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因为很多人都熟悉这道经典题目，因此不去详细讲解，但是建议大家好好去做一下这道题。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">NP 完全问题</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">该例题为 NP 完全问题。NP 是 Non-deterministic Polynomial 的缩写，中文是非決定性多项式。通俗一点来说，对于这类问题，我们无法在多项式时间内解答。这个概念很难，但是理解好它能帮助你很好的分析时间复杂度。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度并不是表示程序解决问题需要花费的具体时间，而是说程序运行的时间随着问题规模扩大增长的有多快。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如果程序具有 O(1) 的时间复杂度，那么，无论问题规模有多大，运行时间都是固定不变的，这个程序就是一个好程序。如果程序运行的时间随着问题规模的扩大线性增长，复杂度是 O(n)，也很不错。还有一些平方数 O(n<sup>2</sup>)、立方数 O(n<sup>3</sup>) 的复杂度等，比如冒泡排序。另外还有指数级的复杂度，例如 O(2<sup>n</sup>)，O(3<sup>n</sup>) 等。还有甚至 O(n!) 阶乘级的复杂度，例如全排列算法。分类如下：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">多项式级别时间复杂度</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">O(1)、O(n)、O(n×logn)、O(n<sup>2</sup>)、O(n<sup>3</sup>) 等，可以表示为 n 的多项式的组合</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">非多项式级别时间复杂度</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">O(2<sup>n</sup>)，O(3<sup>n</sup>) 等指数级别和 O(n!) 等阶乘级别 。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题分析</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; line-height: 22.5px; font-size: 11pt; color: rgb(73, 73, 73);"><span style="font-size: 16px; color: rgb(63, 63, 63);">回到 0-1 背包问题，</span><span style="color: rgb(63, 63, 63); font-size: 16px;">经典的解法就是利用动态规划求解，时间复杂度是 O(n×W)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; line-height: 22.5px; font-size: 11pt; color: rgb(73, 73, 73);"><span style="font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="white-space: normal;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因为物体的重量 W 是有精度的，如果假设背包的重量是 21.17008，物品的重量精确到了小数点后 5 位，解题的时候，必须对每一个 0.00001 的重量单位分配一个记忆单元，从 0.00000，0.00001，0.00002 一直分配到 21.17008，虽然背包大小只有不到 22，但是一共分配了 210 多万个单元，这是很可怕的计算量和存储量。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/0F/CgotOV2IcqeARptuAAAixqNCom0540.png">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">而计算机都是用二进制来表示一个数，假设涵盖从 0 到 W 的区间需要 m 位的二进制数，那么 W 就能写成 2<sup>m</sup>。因此 0-1 背包问题的复杂度就成为了&nbsp;<span style="font-size: 11pt; text-align: center;">O(n×2<sup>m</sup>)。</span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">现在问题的规模取决于物品的个数以及需要用多少位二进制数来表示背包的重量，很明显，它是一个指数级的计算量，是一个非多项式级别的复杂度。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">结语</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这节课后，大家应该能对动态规划有了比较清晰的认识。学习动态规划没有什么捷径，除了掌握好本节课的知识点，更重要的是多练。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p><br></p>

## 二分搜索与贪婪

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这节课我们将重点介绍二分搜索算法，并且介绍一下贪婪算法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二分搜索算法看似简单，写对很难，而且变形很多。所以最容易被拿来在面试中考察大家写 code 的能力。本节课可以总结出解决二分搜索题目的常用套路。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">贪婪算法虽然是一种比较直观的算法，但是比较难的地方在于证明它的正确性。换句话说，有时候它会让你误以为得到的答案是正确的解，其实不然。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<h1></h1>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">二分搜索（Binary Search）</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二分搜索（折半搜索）的 Wikipedia 定义：是一种在有序数组中查找某一特定元素的搜索算法。从定义可知，运用二分搜索的前提是数组必须是排好序的。另外，输入并不一定是数组，也有可能是给定一个区间的起始和终止的位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>优点</strong>：时间复杂度是 O(lgn)，非常高效。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因此也称为对数搜索。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>缺点</strong>：要求待查找的数组或者区间是排好序的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">对数组进行动态的删除和插入操作并完成查找，平均复杂度会变为 O(n)。此时应当考虑采取自平衡的二叉查找树：</span></p>
<ul style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在 O(nlogn) 的时间内用给定的数据构建出一棵二叉查找树；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在 O(logn) 的时间里对目标数据进行搜索；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在 O(logn) 的时间里完成删除和插入的操作。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因此，当输入的数组或者区间是排好序的，同时又不会经常变动，而要求从里面找出一个满足条件的元素的时候，二分搜索就是最好的选择。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二分搜索一般化的解题思路如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/2E/CgoB5l2Im2uAakC4AJXD2o1RZv4579.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<ol style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从已经排好序的数组或区间中取出中间位置的元素，判断该元素是否满足要搜索的条件，如果满足，停止搜索，程序结束。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果正中间的元素不满足条件，则从它两边的区域进行搜索。由于数组是排好序的，可以利用排除法，确定接下来应该从这两个区间中的哪一个去搜索。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">通过判断，如果发现真正要找的元素在左半区间的话，就继续在左半区间里进行二分搜索。反之，就在右半区间里进行二分搜索。</span></p></li>
</ol>
<h2></h2>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">递归解法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">优点：简洁；缺点：执行消耗大</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：假设我们要从一个排好序的数组里 {1, 3, 4, 6, 7, 8, 10, 13, 14} 查看一下数字 7 是否在里面，如果在，返回它的下标，否则返回 -1。</span></p>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">递归写法的代码模板如下。</span></p>
<pre><p style="line-height: 1.75em;">// 二分搜索函数的定义里，除了要指定数组 nums 和目标查找数 target 之外，还要指定查找区间的起点和终点位置，分别用 low 和 high 去表示。<br>int&nbsp;binarySearch(int[]&nbsp;nums,&nbsp;int&nbsp;target,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{<br><span style="font-family: sans-serif;"> &nbsp; &nbsp; &nbsp; &nbsp;// 为了避免无限循环，先判断，如果起点位置大于终点位置，表明这是一个非法的区间，已经尝试了所有的搜索区间还是没能找到结果，返回 -1。</span><span style="font-family: sans-serif;"> </span></p><p style="line-height: 1.75em;">if&nbsp;(low&nbsp;&gt;&nbsp;high)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;return&nbsp;-1;<br> &nbsp; &nbsp;}<br> &nbsp; &nbsp;// 取正中间那个数的下标 middle。<br> &nbsp; &nbsp;int&nbsp;middle&nbsp;=&nbsp;low&nbsp;+&nbsp;(high&nbsp;-&nbsp;low)&nbsp;/&nbsp;2;<br> &nbsp; &nbsp;<br> &nbsp; &nbsp;// 判断一下正中间的那个数是不是要找的目标数 target，是，就返回下标 middle。 &nbsp; &nbsp;<br>&nbsp;&nbsp; &nbsp;if&nbsp;(nums[middle]&nbsp;==&nbsp;target)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;return&nbsp;middle;<br> &nbsp; &nbsp;}<br>&nbsp; &nbsp; <br>&nbsp; &nbsp; // 如果发现目标数在左边，就递归地从左半边进行二分搜索。<br> &nbsp; &nbsp;if&nbsp;(target&nbsp;&lt;&nbsp;nums[middle])&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;return&nbsp;binarySearch(nums,&nbsp;target,&nbsp;low,&nbsp;middle&nbsp;-&nbsp;1);<br>&nbsp;&nbsp; &nbsp; &nbsp;}&nbsp;else&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;return&nbsp;binarySearch(nums,&nbsp;target,&nbsp;middle&nbsp;+&nbsp;1,&nbsp;high);<br> &nbsp; &nbsp;}//否则从右半边递归地进行二分搜索。<br>}<br></p></pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：</span></p>
<ol style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在计算 middle 下标的时候，不能简单地用 (low + hight) / 2，可能会导致溢出。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在取左半边以及右半边的区间时，左半边是 [low, middle - 1]，右半边是 [middle + 1, high]，这是两个闭区间。因为已经确定了 middle 那个点不是我们要找的，就没有必要再把它加入到左、右半边了。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对于一个长度为奇数的数组，例如：{1, 2, 3, 4, 5}，按照 low + (high - low) / 2 来计算，middle 就是正中间的那个位置，对于一个长度为偶数的数组，例如 {1, 2, 3, 4}，middle 就是正中间靠左边的一个位置。</span></p></li>
</ol>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设我们要对长度为 n 的数组进行二分搜索，T(n) 是执行时间函数，我们可以得到</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">T(n) = T(n/2) + 1</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代入公式法得：a = 1，b = 2，f(n) = 1，因此：O(nlog(b)a) = O(n0) = 1 等于 O(f(n))，时间复杂度就是 O(nlog(b)alogn) = O(logn)。</span></p>
<h2></h2>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">非递归解法</span></h6>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">非递归写法的代码模板如下。</span></p>
<pre><p style="line-height: 1.75em;">int&nbsp;binarySearch(int[]&nbsp;nums,&nbsp;int&nbsp;target,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{<br> &nbsp; &nbsp;//&nbsp;在&nbsp;while&nbsp;循环里，判断搜索的区间范围是否有效<br> &nbsp; &nbsp;while&nbsp;(low&nbsp;&lt;=&nbsp;high)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;//&nbsp;计算正中间的数的下标<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;int&nbsp;middle&nbsp;=&nbsp;low&nbsp;+&nbsp;(high&nbsp;-&nbsp;low)&nbsp;/&nbsp;2;<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;判断正中间的那个数是不是要找的目标数&nbsp;target。如果是，就返回下标&nbsp;middle<br>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[middle]&nbsp;==&nbsp;target)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;return&nbsp;middle;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果发现目标数在左边，调整搜索区间的终点为&nbsp;middle&nbsp;-&nbsp;1；否则，调整搜索区间的起点为&nbsp;middle&nbsp;+&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(target&nbsp;&lt;&nbsp;nums[middle])&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;high&nbsp;=&nbsp;middle&nbsp;-&nbsp;1;<br>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;}&nbsp;else&nbsp;{<br> &nbsp; &nbsp; &nbsp; &nbsp;low&nbsp;=&nbsp;middle&nbsp;+&nbsp;1;<br> &nbsp; &nbsp; &nbsp;}<br> &nbsp; &nbsp;}<br><br> &nbsp; &nbsp;//&nbsp;如果超出了搜索区间，表明无法找到目标数，返回&nbsp;-1&nbsp;&nbsp;<br> &nbsp; &nbsp;return&nbsp;-1;<br>}</p></pre>
<h2></h2>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">核心步骤</span></h6>
<ol style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">确定搜索的范围和区间</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">取中间的数判断是否满足条件</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果不满足条件，判定应该往哪个半边继续进行搜索</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二分搜索看起来简单，但是&nbsp;<em>Programming Pearls&nbsp;</em>这本书的作者 Jon Bentley 提到，只有 10% 的程序员能正确地写出二分搜索的代码。面试题经常是经典二分搜索的变形，但万变不离其中，需要把握好二分搜索的核心。</span></p>
<h2></h2>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="font-size: 12pt;">例题分析一：</span>找确定的边界</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">边界分上边界和下边界，有时候也被成为右边界和左边界。确定的边界指边界的数值等于要找的目标数。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：LeetCode 第 34 题，在一个排好序的数组中找出某个数第一次出现和最后一次出现的下标位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例：输入的数组是：{5, 7, 7, 8, 8, 10}，目标数是 8，那么返回 {3, 4}，其中 3 是 8 第一次出现的下标位置，4 是 8 最后一次出现的下标位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/2E/CgoB5l2Im3GAdPWdANoBwqIsGSM491.gif">&nbsp; &nbsp; &nbsp;</span></p>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在二分搜索里，比较难的是判断逻辑，对这道题来说，什么时候知道这个位置是不是 8 第一次以及最后出现的地方呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">把第一次出现的地方叫下边界（lower bound），把最后一次出现的地方叫上边界（upper bound）。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">那么成为 8 的下边界的条件应该有两个。</span></p>
<ol style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">该数必须是 8；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">该数的左边一个数必须不是 8：</span></p></li>
</ol>
<ul style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">8 的左边有数，那么该数必须小于 8；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">8 的左边没有数，即 8 是数组的第一个数。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">而成为 8 的上边界的条件也应该有两个。</span></p>
<ol style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">该数必须是 8；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">该数的右边一个数必须不是 8：</span></p></li>
</ol>
<ul style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">8 的右边有数，那么该数必须大于8；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">8 的右边没有数，即 8 是数组的最后一个数。</span></p></li>
</ul>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">用递归的方法来寻找下边界，代码如下。</span></p>
<pre>int&nbsp;searchLowerBound(int[]&nbsp;nums,&nbsp;int&nbsp;target,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(low&nbsp;&gt;&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;middle&nbsp;=&nbsp;low&nbsp;+&nbsp;(high&nbsp;-&nbsp;low)&nbsp;/&nbsp;2;
&nbsp;&nbsp;&nbsp;&nbsp;//判断是否是下边界时，先看看&nbsp;middle&nbsp;的数是否为&nbsp;target，并判断该数是否已为数组的第一个数，或者，它左边的一个数是不是已经比它小，如果都满足，即为下边界。
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[middle]&nbsp;==&nbsp;target&nbsp;&amp;&amp;&nbsp;(middle&nbsp;==&nbsp;0&nbsp;||&nbsp;nums[middle&nbsp;-&nbsp;1]&nbsp;&lt;&nbsp;target))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;middle;
&nbsp;&nbsp;&nbsp;&nbsp;}


&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(target&nbsp;&lt;=&nbsp;nums[middle])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;searchLowerBound(nums,&nbsp;target,&nbsp;low,&nbsp;middle&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;searchLowerBound(nums,&nbsp;target,&nbsp;middle&nbsp;+&nbsp;1,&nbsp;high);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;//不满足，如果这个数等于&nbsp;target，那么就得往左边继续查找。
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">其他的写法都和经典的二分搜索的写法相同，不再赘述。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">查找上边界的代码如下。</span></p>
<pre>int&nbsp;searchUpperBound(int[]&nbsp;nums,&nbsp;int&nbsp;target,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(low&nbsp;&gt;&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;middle&nbsp;=&nbsp;low&nbsp;+&nbsp;(high&nbsp;-&nbsp;low)&nbsp;/&nbsp;2;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//判断是否是上边界时，先看看&nbsp;middle&nbsp;的数是否为&nbsp;target，并判断该数是否已为数组的最后一个数，或者，它右边的数是不是比它大，如果都满足，即为上边界。&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[middle]&nbsp;==&nbsp;target&nbsp;&amp;&amp;&nbsp;(middle&nbsp;==&nbsp;nums.length&nbsp;-&nbsp;1&nbsp;||&nbsp;nums[middle&nbsp;+&nbsp;1]&nbsp;&gt;&nbsp;target))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;middle;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(target&nbsp;&lt;&nbsp;nums[middle])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;searchUpperBound(nums,&nbsp;target,&nbsp;low,&nbsp;middle&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;searchUpperBound(nums,&nbsp;target,&nbsp;middle&nbsp;+&nbsp;1,&nbsp;high);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;//不满足时，需判断搜索方向。
}</pre>
<h2></h2>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析二：找模糊的边界</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二分搜索可以用来查找一些模糊的边界。模糊的边界指，边界的值并不等于目标的值，而是大于或者小于目标的值。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：从数组 {-2, 0, 1, 4, 7, 9, 10} 中找到第一个大于 6 的数。</span></p>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在一个排好序的数组里，判断一个数是不是第一个大于 6 的数，只要它满足如下的条件：</span></p>
<ol style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">该数要大于 6；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">该数有可能是数组里的第一个数，或者它之前的一个数比 6 小。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">只要满足了上面的条件就是第一个大于 6 的数。</span></p>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>Integer&nbsp;firstGreaterThan(int[]&nbsp;nums,&nbsp;int&nbsp;target,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(low&nbsp;&gt;&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;null;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;middle&nbsp;=&nbsp;low&nbsp;+&nbsp;(high&nbsp;-&nbsp;low)&nbsp;/&nbsp;2;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//判断&nbsp;middle&nbsp;指向的数是否为第一个比&nbsp;target&nbsp;大的数时，须同时满足两个条件：middle&nbsp;这个数必须大于&nbsp;target；middle&nbsp;要么是第一个数，要么它之前的数小于或者等于&nbsp;target。&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[middle]&nbsp;&gt;&nbsp;target&nbsp;&amp;&amp;&nbsp;(middle&nbsp;==&nbsp;0&nbsp;||&nbsp;nums[middle&nbsp;-&nbsp;1]&nbsp;&lt;=&nbsp;target))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;middle;
&nbsp;&nbsp;&nbsp;&nbsp;}



&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(target&nbsp;&lt;&nbsp;nums[middle])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;firstGreaterThan(nums,&nbsp;target,&nbsp;low,&nbsp;middle&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;firstGreaterThan(nums,&nbsp;target,&nbsp;middle&nbsp;+&nbsp;1,&nbsp;high);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">对于这道题，当不满足条件，而 middle 的数等于 target 的时候怎么办？举例说明，如果要求的是第一个大于 6 的数，而数组中有多个 6 挨在一起，而此时的 middle 指向其中的一个 6，程序必须得在右半边搜索。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/4E/CgotOV2Im3WAelpCAFuvvFr9ZL8086.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">找模糊边界的题，还有在给定数组里，找最后一个比目标数小的数。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/4E/CgotOV2Im3iANsA9AE-IXo7x7Ns309.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例：在 {-2, 0, 1, 4, 7, 9, 10} 中，求最后一个比 6 小的数。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">答案是 4，方法是类似的。</span></p>
<h2></h2>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析三：旋转过的排序数组</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二分搜索也能在经过旋转了的排序数组中进行。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：LeetCode 第 33 题，给定一个经过旋转了的排序数组，判断一下某个数是否在里面。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例：给定数组为 {4, 5, 6, 7, 0, 1, 2}，target 等于 0，答案是 4，即 0 所在的位置下标是 4。</span></p>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">对于这道题，输入数组不是完整排好序，还能运用二分搜索吗？思路如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">一开始，中位数是 7，并不是我们要找的 0，如何判断往左边还是右边搜索呢？这个数组是经过旋转的，即，从数组中的某个位置开始划分，左边和右边都是排好序的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如何判断左边是不是排好序的那个部分呢？只要比较 nums[low] 和 nums[middle]。nums[low] &lt;= nums[middle] 时，能判定左边这部分一定是排好序的，否则，右边部分一定是排好序的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/4E/CgotOV2Im3mAMogQACRtykBbh7Q848.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">为什么要判断 nums[low] = nums[middle] 的情况呢？因为计算 middle 的公式是 int middle = low + (high - low) / 2。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当只有一个数的时候，low=high，middle=ow，同样认为这一边是排好序的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">判定某一边是排好序的，有什么用处呢？能准确地判断目标值是否在这个区间里。如果 nums[low] &lt;= target &amp;&amp; target &lt; nums[middle]，则应该在这个区间里搜索目标值。反之，目标值肯定在另外一边。</span></p>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>int&nbsp;binarySearch(int[]&nbsp;nums,&nbsp;int&nbsp;target,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(low&nbsp;&gt;&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;//判断是否已超出了搜索范围，是则返回-1。
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;middle&nbsp;=&nbsp;low&nbsp;+&nbsp;(high&nbsp;-&nbsp;low)&nbsp;/&nbsp;2;&nbsp;//取中位数。


&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[middle]&nbsp;==&nbsp;target)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;middle;
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;//判断中位数是否为要找的数


&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[low]&nbsp;&lt;=&nbsp;nums[middle])&nbsp;{&nbsp;//判断左半边是不是排好序的。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[low]&nbsp;&lt;=&nbsp;target&nbsp;&amp;&amp;&nbsp;target&nbsp;&lt;&nbsp;nums[middle])&nbsp;{&nbsp;//是，则判断目标值是否在左半边。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;binarySearch(nums,&nbsp;target,&nbsp;low,&nbsp;middle&nbsp;-&nbsp;1);&nbsp;//是，则在左半边继续进行二分搜索。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;binarySearch(nums,&nbsp;target,&nbsp;middle&nbsp;+&nbsp;1,&nbsp;high);&nbsp;//否，在右半边进行二分搜索。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[middle]&nbsp;&lt;&nbsp;target&nbsp;&amp;&amp;&nbsp;target&nbsp;&lt;=&nbsp;nums[high])&nbsp;{&nbsp;//若右半边是排好序的那一半，判断目标值是否在右边。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;binarySearch(nums,&nbsp;target,&nbsp;middle&nbsp;+&nbsp;1,&nbsp;high);&nbsp;//是，则在右半边继续进行二分搜索。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;binarySearch(nums,&nbsp;target,&nbsp;low,&nbsp;middle&nbsp;-&nbsp;1);&nbsp;//否，在左半边进行二分搜索。
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在决定在哪一边进行二分搜索的时候，利用了旋转数组的性质，这就是这道题的巧妙之处。</span></p>
<h2><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题分析四：不定长的边界</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">前面介绍的二分搜索的例题都给定了一个具体范围或者区间，那么对于没有给定明确区间的问题能不能运用二分搜索呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：有一段不知道具体长度的日志文件，里面记录了每次登录的时间戳，已知日志是按顺序从头到尾记录的，没有记录日志的地方为空，要求当前日志的长度。</span></p>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">可以把这个问题看成是不知道长度的数组，数组从头开始记录都是时间戳，到了某个位置就成为了空：{2019-01-14, 2019-01-17, … , 2019-08-04, …. , null, null, null ...}。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">思路 1：顺序遍历该数组，一直遍历下去，当发现第一个 null 的时候，就知道了日志的总数量。很显然，这是很低效的办法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">思路 2：借用二分搜索的思想，反着进行搜索。</span></p>
<ol style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">一开始设置 low = 0，high = 1</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">只要 logs[high] 不为 null，high *= 2</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 logs[high] 为 null 的时候，可以在区间 [0, high] 进行普通的二分搜索</span></p></li>
</ol>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>//&nbsp;先通过getUpperBound函数不断地去试探在什么位置会出现空的日志。
int&nbsp;getUpperBound(String[]&nbsp;logs,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(logs[high]&nbsp;==&nbsp;null)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;high;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;getUpperBound(logs,&nbsp;high&nbsp;*&nbsp;2);
}


//&nbsp;再运用二分搜索的方法去寻找日志的长度。
int&nbsp;binarySearch(String[]&nbsp;logs,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(low&nbsp;&gt;&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;middle&nbsp;=&nbsp;low&nbsp;+&nbsp;(high&nbsp;-&nbsp;low)&nbsp;/&nbsp;2;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(logs[middle]&nbsp;==&nbsp;null&nbsp;&amp;&amp;&nbsp;logs[middle&nbsp;-&nbsp;1]&nbsp;!=&nbsp;null)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;middle;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(logs[middle]&nbsp;==&nbsp;null)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;binarySearch(logs,&nbsp;low,&nbsp;middle&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;binarySearch(logs,&nbsp;middle&nbsp;+&nbsp;1,&nbsp;high);
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">判断是否是日志的结尾很简单，只要当前的日志为空，而前一个日志不为空即可。</span></p>
<h1></h1>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">贪婪（Greedy）</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">贪婪算法的 Wikipedia 定义：是一种在每一步选中都采取在当前状态下最好或最优的选择，从而希望导致结果是最好或最优的算法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">优点：对于一些问题，非常直观有效。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">缺点：</span></p>
<ul style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">并不是所有问题都能用它去解决；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">得到的结果并一定不是正确的，因为这种算法容易过早地做出决定，从而没有办法达到最优解。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">下面通过例题来加深对贪婪算法的认识。例题：0-1 背包问题，能不能运用贪婪算法去解决。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">有三种策略：</span></p>
<ol style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">选取价值最大的物品</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">选择重量最轻的物品</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">选取价值/重量比最大的物品</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>策略 1</strong>：每次尽可能选择价值最大的，行不通。举例说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">物品有：A B C</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">重量分别是：25, 10, 10</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">价值分别是：100，80，80</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">根据策略，首先选取物品 A，接下来就不能再去选其他物品，但是，如果选取 B 和 C，结果会更好。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>策略 2</strong>：每次尽可能选择轻的物品，行不通。举例说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">物品有：A B C</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">重量分别为：25, 10, 10</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">价值分别为：100, 5, 5</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">根据策略，首先选取物品 B 和 C，接下来就不能选 A，但是，如果选 A，价值更大。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>策略 3</strong>：每次尽可能选价值/重量比最大的，行不通。举例说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">物品有：A B C</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">重量是：25, 10, 10</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">价值是：25, 10, 10</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">根据策略，三种物品的价值/重量比都是一样，如果选 A，答案不对，应该选 B 和 C。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">由上，贪婪算法总是做出在当前看来是最好的选择。即，它不从整体的角度去考虑，仅仅对局部的最优解感兴趣。因此，只有当那些局部最优策略能产生全局最优策略的时候，才能用贪婪算法。</span></p>
<h2></h2>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">例题分析</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LeetCode 第 253 题，会议室II，给定一系列会议的起始时间和结束时间，求最少需要多少个会议室就可以让这些会议顺利召开。</span></p>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>思路 1</strong>：暴力法。</span></p>
<ul style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">把所有的会议组合找出来；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从最长的组合开始检查，看看各个会议之间有没有冲突；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">直到发现一组会议没有冲突，那么它就是答案。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">很明显，这样的解法是非常没有效率的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>思路 2</strong>：贪婪算法</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span></p>
<ul style="">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">会议按照起始时间顺序进行；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">要给新的即将开始的会议找会议室时，先看当前有无空会议室；</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">有则在空会议室开会，无则开设一间新会议室。</span></p></li>
</ul>
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>int&nbsp;minMeetingRooms(Interval[]&nbsp;intervals)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(intervals&nbsp;==&nbsp;null&nbsp;||&nbsp;intervals.length&nbsp;==&nbsp;0)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;将输入的一系列会议按照会议的起始时间排序。
&nbsp;&nbsp;&nbsp;&nbsp;Arrays.sort(intervals,&nbsp;new&nbsp;Comparator&lt;Interval&gt;()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;compare(Interval&nbsp;a,&nbsp;Interval&nbsp;b)&nbsp;{&nbsp;return&nbsp;a.start&nbsp;-&nbsp;b.start;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;});
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;用一个最小堆来维护目前开辟的所有会议室，最小堆里的会议室按照会议的结束时间排序。
&nbsp;&nbsp;&nbsp;&nbsp;PriorityQueue&lt;Interval&gt;&nbsp;heap&nbsp;=&nbsp;new&nbsp;PriorityQueue&lt;Interval&gt;(intervals.length,&nbsp;new&nbsp;Comparator&lt;Interval&gt;()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;compare(Interval&nbsp;a,&nbsp;Interval&nbsp;b)&nbsp;{&nbsp;return&nbsp;a.end&nbsp;-&nbsp;b.end;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;});
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;让第一个会议在第一个会议室里举行。
&nbsp;&nbsp;&nbsp;&nbsp;heap.offer(intervals[0]);
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;1;&nbsp;i&nbsp;&lt;&nbsp;intervals.length;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从第二个会议开始，对于每个会议，我们都从最小堆里取出一个会议室，那么这个会议室里的会议一定是最早结束的。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interval&nbsp;interval&nbsp;=&nbsp;heap.poll();
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(intervals[i].start&nbsp;&gt;=&nbsp;interval.end)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;若当前要开的会议可以等会议室被腾出才开始，那么就可以重复利用这个会议室。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interval.end&nbsp;=&nbsp;intervals[i].end;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;否则，开一个新的会议室。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heap.offer(intervals[i]);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;把旧的会议室也放入到最小堆里。
&nbsp;&nbsp;&nbsp;&nbsp;heap.offer(interval);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;最小堆里的会议室个数就是要求的答案，即最少的会议个数。
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;heap.size();
}</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">为什么贪婪算法能在这里成立？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">每当遇到一个新的会议时，总是贪婪地从所有会议室里找出最先结束会议的那个。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">为什么这样可以产生最优的结果？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">若选择的会议室中会议未结束，则意味着需要开辟一个新会议室，这已经不是当前的最优解了</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 1.7; font-size: 11pt; color: rgb(73, 73, 73);"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">建议</span></strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">：贪婪算法考点在面试中相对于其他算法而言是比较轻的，大家只需要把常见的一些利用贪婪算法解题的题目多加练习即可。</span></p>
<h1></h1>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">结语</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这节课讲解了二分搜索算法和贪婪算法。其中，二分搜索算法是重中之重，因为它看似简单，但要写对却不那么容易。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">建议：LeetCode 上对二分搜索算法和贪婪算法的相关题目都做了很好的筛选，大家要多加练习。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">从下节课开始，我们将运用之前学到的数据结构和算法知识来解决一些高频算法面试题以及难题。</span></p>
<p><br></p>

---

## 高频真题讲解I

<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从这节课开始，我们将一起分析 LeetCode 里面的高频</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">题。这些题目都非常具有代表性，是各大公司面试的高频题，因为它们可以考察大家对问题的剖析能力，解决问题的方案是否完善，以及代码的书写功底。</span><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这节课主要介绍的解题方法是：</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">线性法及优化线性法</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">切分法</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">快速选择算法</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最小堆法</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">分治法</span></p></li> 
</ul> 
<h1></h1> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析一</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode 第 03 题：</span>给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例 1</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入："abcabcbb"</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出：3</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解释：因为无重复字符的最长子串是"abc"，其长度为3。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例 2</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入："bbbbb"</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出：1</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解释：因为无重复字符的最长子串是 "b"，其长度为 1。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例 3</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入："pwwkew"</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出：3</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解释：因为无重复字符的最长子串是 "wke"，其长度为 3。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：答案必须是子串的长度，"pwke" 是一个子序列，不是子串。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路一：暴力法</span></h6> 
<h6 style="line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpGAXYErAIDbacLXGUw574.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">找出所有的子串，然后一个一个地去判断每个子串里是否包含有重复的字符。假设字符串的长度为 n，那么有 n×(n + 1) / 2 个非空子串。计算过程如下。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">长度为 1 的子串，有 n 个</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">长度为 2 的子串，每两个每两个相邻地取，一共有 n - 1 个</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">长度为 3 的子串，每三个每三个相邻地取，一共有 n - 2 个</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">……</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">以此类推，长度为 k 的子串，有 n - k + 1 个。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当 k 等于 n 的时候，n - k + 1=1，即长度为 n 的子串有 1 个。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">所有情况相加，得到所有子串的长度为：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">n + (n - 1) + (n - 2) + (n - 3) + … + 2 + 1 = n×(n + 1) / 2</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">算上空字符串，那么就一共有 n×(n + 1) / 2 + 1 个。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">拓展一下，对于一个长度为 n 的字符串，一共有多少个子序列呢？和子串不一样，子序列里的元素不需要相互挨着。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">同理分析，长度为 1 的子序列有 n 个，即 Cn<sup>1</sup>，长度为 2 的子序列个数为 Cn<sup>2</sup>，以此类推，长度为 k 的子序列有&nbsp;<span style="color: rgb(0, 0, 0);">Cn<sup>k</sup></span>，那么所有子序列的个数（包括空序列）是&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">Cn</span><sup style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">0</sup><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">&nbsp;+ Cn</span><sup style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">1</sup><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">&nbsp;+ Cn</span><sup style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">2</sup><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">&nbsp;+ … Cn</span><sup style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">n</sup><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">&nbsp;= 2</span><sup style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">n</sup></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：对于统计子串和子序列个数的方法和结果，大家务必记下来，对于在分析各种问题时会有很大帮助。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">回到本来问题，如果对所有的子串进行判断，从每个子串里寻找出最长的那个并且没有重复字符的，那么复杂度就是：</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">O(n×(n + 1)/2×n) = O(n</span><sup style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; text-align: center;">3</sup><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">)。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路二：线性法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题 1：给定的字符串里有一段是没有重复字符的，如下，能不能把下一个字符 a 加进来？</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpOAH6lGAE1uzx5xDe0090.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">要看当前的子串”abc”是否已经包含了字符 a。</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">扫描一遍“abc”，当发现某个字符与 a 相同，可以得出结论。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">把“abc“三个字符放入到一个哈希集合里，那么就能在 O(1) 的时间里作出判断，提高速度。</span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p></li> 
</ol> 
<p style="line-height: 1.75em;"><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">使用定义一个哈希集合 set 的方法，从给定字符串的头开始，每次检查一下当前字符是不是在集合里边，如果不在，说明这个字符不会造成重复和冲突，把它加入到集合里，并统计一下当前集合的长度，可能它就是最长的那个子串。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题 2：如果发现新的字符已经在集合里已经出现了，怎么办？</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpOAdm0bAAA91_bKAZI920.png" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">deabc 是目前为止没有重复字符的最长子串，当我们遇到下一个字符a的时候，以这个字符结尾的没有重复的子串是“bca”，而此时集合里的字符有：d，e，a，b，c。首先，必须把 a 删除，因为这样才能把新的 a 加入到集合里，那么如何判断要把 d 和 e 也都删除呢？</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpSAJ2NcAEb7BX-6f9k727.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">可以定义两个指针 i 和 j。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">i 是慢指针，j 是快指针，当 j 遇到了一个重复出现的字符时，从慢指针开始一个一个地将 i 指针指向的字符从集合里删除，然后判断一下是否可以把新字符加入到集合里而不会产生重复。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">把字符 d 删除后，i 指针向前移动一步，此时集合里还剩下：e, a, b, c，很明显，字符 a 还在集合里，仍然要继续删除。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">把字符 e 删除后，集合里还剩 a，b，c，字符 a 还在集合里，继续删除慢指针 i 指向的字符 a。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">集合里剩 b，c，可以放心地把新的字符 a 放入到集合里，然后快指针 j 往前移动一步。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">通过这样不断尝试，每当新的字符加入到集合里的时候，统计一下当前集合里的元素个数，最后记录下最长的那个。</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em;"><strong style="color: rgb(73, 73, 73); font-size: 11pt;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度</span></strong><br></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">由于采用的是快慢指针的策略，字符串最多被遍历两次，快指针遇到的字符会被添加到哈希集合，而慢指针遇到的字符会从哈希集合里删除，对哈希集合的操作都是 O(1) 的时间复杂度，因此，整个算法的时间复杂度就是&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">n×O(1) + n×O(1) = O(n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>空间复杂度</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">由于用到了一个哈希集合，在最坏的情况下，给定的字符串没有任何重复的字符，需要把每个字符都加入到哈希集合里，因此空间复杂度是 O(n)。</span></p> 
<h3><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</span></p></h3> 
<pre><p>// 定义一个哈希集合 set，初始化结果 max 为 0<br>int lengthOfLongestSubstring(String s) {<br> &nbsp; &nbsp;Set&lt;Character&gt; set = new HashSet&lt;&gt;();<br> &nbsp; &nbsp;int max = 0;<br><br> &nbsp; &nbsp;// 用快慢指针 i 和 j 扫描一遍字符串，如果快指针所指向的字符已经出现在哈希集合里，不断地尝试将慢指针所指向的字符从哈希集合里删除<br> &nbsp; &nbsp;for (int i = 0, j = 0; j &lt; s.length(); j++) {<br> &nbsp; &nbsp; &nbsp; &nbsp;while (set.contains(s.charAt(j))) {<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;set.remove(s.charAt(i));<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;i++;<br> &nbsp; &nbsp; &nbsp; &nbsp;}<br> &nbsp; &nbsp; &nbsp; &nbsp;<br> &nbsp; &nbsp; &nbsp; &nbsp;// 当快指针的字符加入到哈希集合后，更新一下结果 max<br> &nbsp; &nbsp; &nbsp; &nbsp;set.add(s.charAt(j));<br> &nbsp; &nbsp; &nbsp; &nbsp;max = Math.max(max, set.size());<br> &nbsp; &nbsp;}<br> &nbsp; &nbsp;return max;<br>}</p></pre> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路三：优化的线性法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在上述例题中，能否让慢指针不再一步一步地挪动，而是迅速地跳到字符 b 的位置？</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">可以用哈希表来记录每个字符以及它出现的位置，当遇到了字符 a 的时候，就知道跟它重复的前一个字符出现的位置，只需要让慢指针指向那个位置的下一个即可。（如果题目说所有字符都是字母的话，也可以用一个数组去记录。）</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">遇到字符 a，此时哈希表的记录 {d: 0, e: 1, a: 2, b: 3: c: 4}，a 的位置是 2，把 2 加上 1 等于 3，就能让慢指针 i 指向下标为 3 的位置，即 b 字符的地方。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpWAAnvyAFQgtLp9Xgg419.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：在运用这个算法的时候，不能去数哈希集合的元素个数来作为子串的长度，所以得额外维护一个变量来保存最后的结果。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">但是在一些情况下，我们不能简单地将取出来的重复位置加 1，如下：快指针 j 指向的字符是 e，而 e 在哈希表里记录的位置是 1。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpaABE_PAACvFYyHH4E185.png">&nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在这种情况下，没有必要让 i 重新指向 e 后面的 a。此时，i 应该保留在原地不动。因此，i 被移动到的新位置应该等于 max(i，重复字符出现位置 + 1）。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"></span></p> 
<p><strong><span style="color: rgb(63, 63, 63);">代码实现</span></strong></p> 
<p><br></p> 
<pre>//&nbsp;定义一个哈希表用来记录上一次某个字符出现的位置，并初始化结果&nbsp;max&nbsp;为&nbsp;0
int&nbsp;lengthOfLongestSubstring(String&nbsp;s)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;Character,&nbsp;Integer&gt;&nbsp;map&nbsp;=&nbsp;new&nbsp;HashMap&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;max&nbsp;=&nbsp;0;


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;用快慢指针&nbsp;i&nbsp;和&nbsp;j&nbsp;扫描一遍字符串，若快指针所对应的字符已经出现过，则慢指针跳跃
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0,&nbsp;j&nbsp;=&nbsp;0;&nbsp;j&nbsp;&lt;&nbsp;s.length();&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(map.containsKey(s.charAt(j)))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i&nbsp;=&nbsp;Math.max(i,&nbsp;map.get(s.charAt(j))&nbsp;+&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map.put(s.charAt(j),&nbsp;j);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max&nbsp;=&nbsp;Math.max(max,&nbsp;j&nbsp;-&nbsp;i&nbsp;+&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;max;
}</pre>

<h1></h1> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析二</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode&nbsp;</span><span style="color: rgb(67, 67, 67); text-decoration-line: underline;"></span><span style="color: rgb(67, 67, 67);">第 04 题：</span>给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m+n))。你可以假设 nums1 和 nums2 不会同时为空。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例1</span></strong></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">nums1 = [1, 3]</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">nums2 = [2]</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">则中位数是 2.0</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">示例2</span></strong></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">nums1 = [1, 2]</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">nums2 = [3, 4]</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">则中位数是 (2 + 3)/2 = 2.5</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路一：暴力法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因为两个数组都是排好序的，可以利用归并排序将它们合并成一个长度为 m+n 的有序数组，合并的时间复杂度是 m+n，然后从中选取中位数，整体的时间复杂度就是 O(m+n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这是比较直观的解法，但是比题目要求的 O(log(m+n)) 慢了许多，并不适合。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路二：切分法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设 m+n = L，若 L 为奇数，即两个数组的元素总个数为奇数，那么它们的中位数就是第 int(L / 2) + 1 小的数。例如，数组 { 1, 2, 3 } 的中位数是 2，2 就是第二小的数 2 = int(3/2) + 1。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如果 L 是偶数，那么中位数就是第 int(L/2) 小与第 int(L/2)+1 小的数的和的平均值。例如，数组 {1, 2, 3, 4} 的中位数是 (2 + 3) / 2 = 2.5，其中，2 = int(4/2)，3 = int(4/2) + 1。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因此这个问题就转变为在两个有序数组中寻找第 k 小的数 f(k)，当 L 是奇数的时候，另 k = L/2，结果为 f(k + 1)；而当 L 是偶数的时候，结果为 f(k) + f(k + 1) / 2。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如何从两个排好序的数组里找出第 k 小的数？</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设我们从第一个数组里前面 k<sub>1</sub>&nbsp;个数，从第二个数组里取出前面 k<sub>2</sub>&nbsp;个数，如下图。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpaAZ6lZAAC7LqjZWnU769.png" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设 k = 5，<span style="color: rgb(0, 0, 0);">k</span><sub><span style="color: rgb(0, 0, 0); font-size: 16px;">1</span>&nbsp;</sub>= 3，<span style="color: rgb(0, 0, 0);">k<sub>2</sub></span>&nbsp;= 2，有下面几种情况。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 当 a<sub>2</sub>&nbsp;= b<sub>1&nbsp;</sub>时，可以肯定&nbsp;<span style="text-align: justify;">&nbsp;a</span><sub style="text-align: justify; white-space: normal;">2</sub>&nbsp;和&nbsp;<span style="text-align: justify;">b</span><sub style="text-align: justify; white-space: normal;">1</sub>&nbsp;就是第 5 小的数。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因为当把 a<sub>0</sub>、a<sub>1</sub>、<span style="text-align: justify;">a</span><sub style="text-align: justify; white-space: normal;">2</sub>&nbsp;以及 b<sub>0</sub>、<span style="text-align: justify;">b</span><sub style="text-align: justify; white-space: normal;">1</sub><span style="text-align: justify;"></span>&nbsp;按照大小顺序合并在一起的时候，<span style="text-align: justify;">&nbsp;a</span><sub style="text-align: justify; white-space: normal;">2</sub>&nbsp;和&nbsp;<span style="text-align: justify;">b</span><sub style="text-align: justify; white-space: normal;">1</sub><span style="text-align: justify;"></span>&nbsp;一定排在最后面，完全不需要考虑 a<sub>0</sub>、a<sub>1</sub>&nbsp;和 b<sub>0</sub>&nbsp;的大小关系。其中一种可能的排列如下。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpaAAPVqAADiT5r6EoE952.png" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 当 a<sub>2</sub>&nbsp;&lt; b<sub>1</sub>&nbsp;的时候，无法肯定 a<sub>2</sub>&nbsp;和 b<sub>1</sub>&nbsp;是不是第 5 小的数。举例如下。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpaAdWQTAACcO4jiikI797.png" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">而最终第 5 小的数是 a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">3</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;5 这个数。因此，在这种情况下，我们不能得出第 5 小的数是哪个。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">但是，在这种情况下，至少我们可以肯定的是，我们要找的结果肯定不会在 a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">0</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">，a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">，a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;之间，即不会出现在 nums1 数组的前半段里。为什么呢？很简单，因为如果第 5 小的数是 a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">0</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">，a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">，a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;其中一个的话，意味着 k</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">+k</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;必然大于 5，这就跟我们的假设不符了。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">那么结果会不会在 nums2 的后半段呢？不可能，加入第 5 小的数在 nums2 的后半段，那么意味着，这个数要大于 b</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">（即 &nbsp;7），也会大于 a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">（即 3），但是 k</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">1</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;+ k</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">2</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;已经等于 5了，所以就和假设冲突了。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpiANLV4AGB7zVnr6UQ076.gif">&nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">在这样的情况下，我们可以把搜索的范围缩小，从 nums1 的后半段以及 nums2 的前半段中继续寻找。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 a<sub>2</sub>&nbsp;&gt; b<sub>1</sub>&nbsp;的时候，无法肯定 a<sub>2</sub>&nbsp;和 b<sub>1</sub>&nbsp;是不是第 5 小的数。举例如下。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">nums1[] = {5, 6,&nbsp;<strong style="color: rgb(255, 153, 0);">7</strong>, 8, 9}</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">nums2[] = {1,&nbsp;<strong style="color: rgb(56, 118, 29);">2</strong>, 3, 4}</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">a<sub>2</sub>&nbsp;= 7，b<sub>1</sub>&nbsp;= 2</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">而最终第 5 小的数是 a</span><sub style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">0</sub><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;5 这个数。因此，在这种情况下，我们也不能得出第 5 小的数是哪个。</span><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">但是，在这种情况下，至少我们可以肯定的是，我们要找的结果肯定不会是 b0，或者</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">nums2 数组的前半段里。为什么呢？因为如果第 5 小的数是 b0 的话，意味着 k1+k2 必然大</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">于 5，这也跟我们的假设不符了。同样的，结果也不可能在 nums1 的后半段里。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">在这样的情况下，我们可以把搜索的范围缩小，从 nums2 的后半段以及 nums1 中继续寻找。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpmAHlttACt9vWodiQU791.gif"></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</span><br></strong></p> 
<pre>double&nbsp;findMedianSortedArrays(int&nbsp;nums1[],&nbsp;int&nbsp;nums2[])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;m&nbsp;=&nbsp;nums1.length;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;nums2.length;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;k&nbsp;=&nbsp;(m&nbsp;+&nbsp;n)&nbsp;/&nbsp;2;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;((m&nbsp;+&nbsp;n)&nbsp;%&nbsp;2&nbsp;==&nbsp;1)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;findKth(nums1,&nbsp;0,&nbsp;m&nbsp;-&nbsp;1,&nbsp;nums2,&nbsp;0,&nbsp;n&nbsp;-&nbsp;1,&nbsp;k&nbsp;+&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;findKth(nums1,&nbsp;0,&nbsp;m&nbsp;-&nbsp;1,&nbsp;nums2,&nbsp;0,&nbsp;n&nbsp;-&nbsp;1,&nbsp;k)&nbsp;+&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;findKth(nums1,&nbsp;0,&nbsp;m&nbsp;-&nbsp;1,&nbsp;nums2,&nbsp;0,&nbsp;n&nbsp;-&nbsp;1,&nbsp;k&nbsp;+&nbsp;1)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;/&nbsp;2.0;
&nbsp;&nbsp;&nbsp;&nbsp;}
}


double&nbsp;findKth(int[]&nbsp;nums1,&nbsp;int&nbsp;l1,&nbsp;int&nbsp;h1,&nbsp;int[]&nbsp;nums2,&nbsp;int&nbsp;l2,&nbsp;int&nbsp;h2,&nbsp;int&nbsp;k)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;m&nbsp;=&nbsp;h1&nbsp;-&nbsp;l1&nbsp;+&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;h2&nbsp;-&nbsp;l2&nbsp;+&nbsp;1;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(m&nbsp;&gt;&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;findKth(nums2,&nbsp;l2,&nbsp;h2,&nbsp;nums1,&nbsp;l1,&nbsp;h1,&nbsp;k);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(m&nbsp;==&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;nums2[l2&nbsp;+&nbsp;k&nbsp;-&nbsp;1];
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(k&nbsp;==&nbsp;1)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;Math.min(nums1[l1],&nbsp;nums2[l2]);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;na&nbsp;=&nbsp;Math.min(k/2,&nbsp;m);
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;nb&nbsp;=&nbsp;k&nbsp;-&nbsp;na;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;va&nbsp;=&nbsp;nums1[l1&nbsp;+&nbsp;na&nbsp;-&nbsp;1];
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;vb&nbsp;=&nbsp;nums2[l2&nbsp;+&nbsp;nb&nbsp;-&nbsp;1];
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(va&nbsp;==&nbsp;vb)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;va;
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(va&nbsp;&lt;&nbsp;vb)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;findKth(nums1,&nbsp;l1&nbsp;+&nbsp;na,&nbsp;h1,&nbsp;nums2,&nbsp;l2,&nbsp;l2&nbsp;+&nbsp;nb&nbsp;-&nbsp;1,&nbsp;k&nbsp;-&nbsp;na);
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;findKth(nums1,&nbsp;l1,&nbsp;l1&nbsp;+&nbsp;na&nbsp;-&nbsp;1,&nbsp;nums2,&nbsp;l2&nbsp;+&nbsp;nb,&nbsp;h2,&nbsp;k&nbsp;-&nbsp;nb);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
}</pre>

<ol style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">主体函数其实就是根据两个字符串长度的总和进行判断，看看如何调用递归函数以及返回结果。当总长度是奇数的时候，返回正中间的那个数；当总长度是偶数的时候，返回中间两个数的平均值。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">进入 findkth 函数，这个函数的目的是寻找第 k 小的元素。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果 nums1 数组的长度大于 nums2 数组的长度，我们将它们互换一下，这样可以让程序结束得快一些。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 nums1 的长度为 0 时，直接返回 nums2 数组里第 k 小的数。当 k 等于 1 的时候，返回两个数组中的最小值。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">接下来，分别选两个数组的中间数。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">比较一下两者的大小，如果相等，表明我们找到了中位数，返回它；如果不等的话，我们进行剪枝处理。</span></p></li> 
</ol> 
<h3><p style="line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">算法分析</span></strong></p></h3> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">由于要求中位数，即 k = (m+n) / 2，k1 = k / 2，k2 = k / 2，每次都能将一半的数排除，即问题的规模减小一半，因此，算法复杂度就类似二分搜索，复杂度就是 log(k)，即&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">O(log((m+n) / 2))。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">扩展一</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：如果给定的两个数组是没有经过排序处理的，应该怎么找出中位数呢？</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpmAMCH-AACt9UBVjdM117.png" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解法 1：直观方法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">先将两个数组合并在一起，然后排序，再选出中位数。时间复杂度是：O((m+n)× og(m+n))。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InpqADa6YACUXrW-nt7c325.gif">&nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解法 2：快速选择算法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">快速选择算法，可以在 O(n) 的时间内从长度为 n 的没有排序的数组中取出第 k 小的数，运用了快速排序的思想。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假如将 nums1[] 与 nums2[] 数组组合成一个数组变成 nums[]：{2, 5, 3, 1, 6, 8, 9, 7, 4}，那么如何在这个没有排好序的数组中找到第 k 小的数呢？</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 随机地从数组中选择一个数作为基准值，比如 7。一般而言，随机地选择基准值可以避免最坏的情况出现。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpuAQV-WAB7LzfFC6cc207.gif">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">&nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 将数组排列成两个部分，以基准值作为分界点，左边的数都小于基准值，右边的都大于基准值。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InpyAWKEsACyLx0hVqIg915.gif">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-align: center;">&nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. 判断一下基准值所在位置 p：</span></p> 
<ol style=""> 
 <ol style="list-style-type: lower-alpha;"> 
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果 p 刚好等于 k，那么基准值就是所求数，直接返回。</span></p></li> 
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果 k &lt; p，即基准值太大，搜索的范围应该缩小到基准值的左边。</span></p></li> 
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果 k &gt; p，即基准值太小，搜索的范围应该缩小到基准值的右边。此时需要找的应该是第 k - p 小的数，因为前 p 个数被淘汰。</span></p></li> 
 </ol> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2Inp-ANdNWAFfawadYn4g058.gif"></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">4. 重复第一步，直到基准值的位置 p 刚好就是要找的 k。</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p> 
<p style="line-height: 1.75em;"><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><strong><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></strong></p> 
<pre>public&nbsp;int&nbsp;findKthLargest(int[]&nbsp;nums,&nbsp;int&nbsp;k)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;quickSelect(nums,&nbsp;0,&nbsp;nums.length&nbsp;-&nbsp;1,&nbsp;k);
}


//&nbsp;随机取一个基准值，这里取最后一个数作为基准值
int&nbsp;quickSelect(int[]&nbsp;nums,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high,&nbsp;int&nbsp;k)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;pivot&nbsp;=&nbsp;low;

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;比基准值小的数放左边，把比基准值大的数放右边
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;low;&nbsp;j&nbsp;&lt;&nbsp;high;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[j]&nbsp;&lt;=&nbsp;nums[high])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;pivot++,&nbsp;j);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;pivot,&nbsp;high);
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;判断基准值的位置是不是第&nbsp;k&nbsp;大的元素
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;count&nbsp;=&nbsp;high&nbsp;-&nbsp;pivot&nbsp;+&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果是，就返回结果。
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(count&nbsp;==&nbsp;k)&nbsp;return&nbsp;nums[pivot];
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果发现基准值小了，继续往右边搜索
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(count&nbsp;&gt;&nbsp;k)&nbsp;return&nbsp;quickSelect(nums,&nbsp;pivot&nbsp;+&nbsp;1,&nbsp;high,&nbsp;k);
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果发现基准值大了，就往左边搜索
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;quickSelect(nums,&nbsp;low,&nbsp;pivot&nbsp;-&nbsp;1,&nbsp;k&nbsp;-&nbsp;count);
&nbsp;&nbsp;
}</pre>

<p style="line-height: 1.75em;"><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>时间复杂度</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong><br></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度为什么是 O(n)。分析如下。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">为了方便推算，假设每次都选择中间的那个数作为基准值。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">设函数的时间执行函数为 T(n)，第一次运行的时候，把基准值和所有的 n 个元素进行比较，然后将输入规模减半并递归，所以 T(n) = T(n/2) + n。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当规模减半后，新的基准值只和 n/2 个元素进行比较，因此 T(n/2) = T(n/4) + n/2。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">以此类推：</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">T(n/4) = T(n/8) + n/4</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">…</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">T(2) = T(1) + 2</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: center; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">T(1) = 1</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">将上面的公式逐个代入后得到 T(n) = 1 + 2 + … + n/8 + n/4 + n/2 + n = 2×n，所以 &nbsp;O(T(n)) = O(n)。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>空间复杂度</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong><br></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如果不考虑递归对栈的开销，那么算法并没有使用额外的空间，swap 操作都是直接在数组里完成，因此空间复杂度为 O(1)。</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解法 3：数组“组合”</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">把这两个数组“虚拟”地组合在一起，即它们是分开的，但是在访问它们的元素时，把它们看成是一个数组。那么就能运用快速选择的算法。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>代码实现</strong></span></p> 
<pre>double&nbsp;findMedianArrays(int[]&nbsp;nums1,&nbsp;int[]&nbsp;nums2)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;m&nbsp;=&nbsp;nums1.length;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;nums2.length;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;k&nbsp;=&nbsp;(m&nbsp;+&nbsp;n)&nbsp;/&nbsp;2;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(m&nbsp;+&nbsp;n)&nbsp;%&nbsp;2&nbsp;==&nbsp;1&nbsp;?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;findKthLargest(nums1,&nbsp;nums2,&nbsp;k&nbsp;+&nbsp;1)&nbsp;:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(findKthLargest(nums1,&nbsp;nums2,&nbsp;k)&nbsp;+&nbsp;findKthLargest(nums1,&nbsp;nums2,&nbsp;k&nbsp;+&nbsp;1))&nbsp;/&nbsp;2.0;
}


double&nbsp;findKthLargest(int[]&nbsp;nums1,&nbsp;int[]&nbsp;nums2,&nbsp;int&nbsp;k)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;quickSelect(nums1,&nbsp;nums2,&nbsp;0,&nbsp;nums1.length&nbsp;+&nbsp;nums2.length&nbsp;-&nbsp;1,&nbsp;k);
}

double&nbsp;quickSelect(int[]&nbsp;nums1,&nbsp;int[]&nbsp;nums2,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high,&nbsp;int&nbsp;k)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;pivot&nbsp;=&nbsp;low;

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;use&nbsp;quick&nbsp;sort's&nbsp;idea
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;put&nbsp;nums&nbsp;that&nbsp;are&nbsp;&lt;=&nbsp;pivot&nbsp;to&nbsp;the&nbsp;left
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;put&nbsp;nums&nbsp;that&nbsp;are&nbsp;&nbsp;&gt;&nbsp;pivot&nbsp;to&nbsp;the&nbsp;right
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;low;&nbsp;j&nbsp;&lt;&nbsp;high;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(getNum(nums1,&nbsp;nums2,&nbsp;j)&nbsp;&lt;=&nbsp;getNum(nums1,&nbsp;nums2,&nbsp;high))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(nums1,&nbsp;nums2,&nbsp;pivot++,&nbsp;j);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;swap(nums1,&nbsp;nums2,&nbsp;pivot,&nbsp;high);
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;count&nbsp;the&nbsp;nums&nbsp;that&nbsp;are&nbsp;&gt;&nbsp;pivot&nbsp;from&nbsp;high
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;count&nbsp;=&nbsp;high&nbsp;-&nbsp;pivot&nbsp;+&nbsp;1;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;pivot&nbsp;is&nbsp;the&nbsp;one!
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(count&nbsp;==&nbsp;k)&nbsp;return&nbsp;getNum(nums1,&nbsp;nums2,&nbsp;pivot);
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;pivot&nbsp;is&nbsp;too&nbsp;small,&nbsp;so&nbsp;it&nbsp;must&nbsp;be&nbsp;on&nbsp;the&nbsp;right
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(count&nbsp;&gt;&nbsp;k)&nbsp;return&nbsp;quickSelect(nums1,&nbsp;nums2,&nbsp;pivot&nbsp;+&nbsp;1,&nbsp;high,&nbsp;k);
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;pivot&nbsp;is&nbsp;too&nbsp;big,&nbsp;so&nbsp;it&nbsp;must&nbsp;be&nbsp;on&nbsp;the&nbsp;left
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;quickSelect(nums1,&nbsp;nums2,&nbsp;low,&nbsp;pivot&nbsp;-&nbsp;1,&nbsp;k&nbsp;-&nbsp;count);
}

int&nbsp;getNum(int[]&nbsp;nums1,&nbsp;int[]&nbsp;nums2,&nbsp;int&nbsp;index)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(index&nbsp;&lt;&nbsp;nums1.length)&nbsp;?&nbsp;nums1[index]&nbsp;:&nbsp;nums2[index&nbsp;-&nbsp;nums1.length];
}

void&nbsp;swap(int[]&nbsp;nums1,&nbsp;int[]&nbsp;nums2,&nbsp;int&nbsp;i,&nbsp;int&nbsp;j)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;m&nbsp;=&nbsp;nums1.length;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(i&nbsp;&lt;&nbsp;m&nbsp;&amp;&amp;&nbsp;j&nbsp;&lt;&nbsp;m)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(nums1,&nbsp;i,&nbsp;j);
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(i&nbsp;&gt;=&nbsp;m&nbsp;&amp;&amp;&nbsp;j&nbsp;&gt;=&nbsp;m)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(nums2,&nbsp;i&nbsp;-&nbsp;m,&nbsp;j&nbsp;-&nbsp;m);
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(i&nbsp;&lt;&nbsp;m&nbsp;&amp;&amp;&nbsp;j&nbsp;&gt;=&nbsp;m)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;temp&nbsp;=&nbsp;nums1[i];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums1[i]&nbsp;=&nbsp;nums2[j&nbsp;-&nbsp;m];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums2[j&nbsp;-&nbsp;m]&nbsp;=&nbsp;temp;
&nbsp;&nbsp;&nbsp;&nbsp;}
}

void&nbsp;swap(int[]&nbsp;nums,&nbsp;int&nbsp;i,&nbsp;int&nbsp;j)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;temp&nbsp;=&nbsp;nums[i];
&nbsp;&nbsp;&nbsp;&nbsp;nums[i]&nbsp;=&nbsp;nums[j];
&nbsp;&nbsp;&nbsp;&nbsp;nums[j]&nbsp;=&nbsp;temp;
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因为这道题的解法与之前讲的快速选择算法非常类似，差别在于将两个数组合在一起考虑。因此大家可以自己分析一下代码。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度是 O(m+n)，空间复杂度 O(1)。</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">扩展二</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：有一万个服务器，每个服务器上存储了十亿个没有排好序的数，现在要找所有数当中的中位数，怎么找？</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">对于分布式地大数据处理，应当考虑两个方面的限制：</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">每台服务器进行算法计算的复杂度限制，包括时间和空间复杂度</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">服务器与服务器之间进行通信时的网络带宽限制</span></p></li> 
</ol> 
<h3></h3> 
<h5 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">限制 1：空间复杂度</span></h5> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设存储的数都是 32 位整型，即 4 个字节，那么 10 亿个数需占用 40 亿字节，大约 4GB</span></p> 
<ul style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">归并排序至少得需要 4GB 的内存</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">快速排序的空间复杂度为 log(n)，即大约 30 次堆栈压入</span></p></li> 
</ul> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">用非递归的方法去实现快速排序，代码如下。</span></p> 
<pre>//&nbsp;每次只需将数组中的某个起始点和终点，即一个范围，压入堆栈中，压入&nbsp;30&nbsp;个范围的大小约为&nbsp;30×2×4=240&nbsp;字节
class&nbsp;Range&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;low;
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;high;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;Range(int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.low&nbsp;=&nbsp;low;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.high&nbsp;=&nbsp;high;
&nbsp;&nbsp;&nbsp;&nbsp;}
}


//&nbsp;不使用递归写法，压入堆栈的还包括程序中的其他变量等，假设需要&nbsp;100&nbsp;字节，总共需要&nbsp;30×100=3K&nbsp;字节
void&nbsp;quickSort(int[]&nbsp;nums)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;Stack&lt;Range&gt;&nbsp;stack&nbsp;=&nbsp;new&nbsp;Stack&lt;&gt;();

&nbsp;&nbsp;&nbsp;&nbsp;Range&nbsp;range&nbsp;=&nbsp;new&nbsp;Range(0,&nbsp;nums.length&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;stack.push(range);
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!stack.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;range&nbsp;=&nbsp;stack.pop();
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;pivot&nbsp;=&nbsp;partition(nums,&nbsp;range.low,&nbsp;range.high);
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(pivot&nbsp;-&nbsp;1&nbsp;&gt;&nbsp;range.low)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(new&nbsp;Range(range.low,&nbsp;pivot&nbsp;-&nbsp;1));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(pivot&nbsp;+&nbsp;1&nbsp;&lt;&nbsp;range.high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(new&nbsp;Range(pivot&nbsp;+&nbsp;1,&nbsp;range.high));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
}

//&nbsp;快速排序对内存的开销非常小
int&nbsp;partition(int[]&nbsp;nums,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;pivot&nbsp;=&nbsp;randRange(low,&nbsp;high),&nbsp;i&nbsp;=&nbsp;low;
&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;pivot,&nbsp;high);
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;low;&nbsp;j&nbsp;&lt;&nbsp;high;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nums[j]&nbsp;&lt;=&nbsp;nums[high])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;i++,&nbsp;j);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;swap(nums,&nbsp;i,&nbsp;high);
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;i;
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如上，利用一个栈 stack 来记录每次进行快速排序时的范围。一旦发现基准值左边还有未处理完的数，就将左边的范围区间压入到栈里；如果发现基准值右边还有未处理完的数，就将右边的范围区间压入到栈里。其中，处理基准值的 partition 函数非常重要，之前已经介绍过。</span></p> 
<h3></h3> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">限制 2：网络带宽</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在实际应用中，这是最重要的考量因素，很多大型的云服务器都是按照流量来进行收费，如何有效地限制流量，避免过多的服务器之间的通信，就是要考量的重点，并且，实际上它与算法的时间复杂度有很大的关系。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>解决方案</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong><br></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">借助扩展一的思路。</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 从 1万 个服务器中选择一个作为主机（master server）。这台主机将扮演主导快速选择算法的角色。</span><img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2Inp-ADWduAACy1HlNYdU966.png" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; &nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 在主机上随机选择一个基准值，然后广播到其他各个服务器上。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InqCADiJBADbDhpQ_g34352.gif">&nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. 每台服务器都必须记录下最后小于、等于或大于基准值数字的数量：less count，equal count，greater count。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InqOAW68SAEJNyDb5D5o855.gif">&nbsp;&nbsp; &nbsp; &nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">4. 每台服务器将 less count，equal count 以及 greater count 发送回主机。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">5. 主机统计所有的 less count，equal count 以及 greater count，得出所有比基准值小的数的总和 total less count，等于基准值的总和 total equal count，以及大于基准值的总和 total greater count。进行如下判断。</span></p> 
<ol style=""> 
 <ol style="list-style-type: lower-alpha;"> 
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果 total less count &gt;= total count / 2，表明基准值太大。</span></p></li> 
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果total less count + total equal count &gt;= total count / 2，表明基准值即为所求结果。</span></p></li> 
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">否则，total less count + total equal count &lt; total count / 2 表明基准值太小。</span></p></li> 
 </ol> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">6. 后面两种情况，主机会把新的基准值广播给各个服务器，服务器根据新的基准值的大小判断往左半边或者右半边继续进行快速选择。直到最后找到中位数。</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>时间复杂度</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong><br></strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">整体的时间复杂度是 O(nlog(n))，主机和各个其他服务器之间的通信总共也需要 nlog(n)次，每次通信需要传递一个基准值以及三个计数值。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如果用一些组播网络（Multicast Network)，可以有效地节省更多的带宽。</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析三</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode 第 23 题：</span>合并 k 个排好序的链表，返回合并后的排序链表。分析和描述算法的复杂度。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例</strong></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入：</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">[</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;&nbsp;1 -&gt; 4 -&gt; 5,</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;&nbsp;1 -&gt; 3 -&gt; 4,</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;&nbsp;2 -&gt; 6</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">]</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出：1 -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 4 -&gt; 5 -&gt; 6</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路一：暴力法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">用一个数组保存所有链表中的数，然后对这个数组进行排序，再从头到尾将数组遍历一遍，生成一个排好序的链表。假设每个链表的平均长度为 n，整体的时间复杂度就是 O(nk×log(nk))。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p> 
<h2></h2> 
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路二：最小堆法</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">面对 k 个排好序的链表时，最小的那个数肯定是从这 k 个链表的头里面选出来。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">那么，第二小的如何选择？例如，有下面 k 个链表。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/30/CgoB5l2InqSAHLY0ACSlxIOkYh0731.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">把最小的 1 从所有的 k 个链表头里选出来之后，把 1 从链表里删掉。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">下一个最小的数，还是从所有的 k 个链表头里选出来。</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">以此类推，每一轮都比较 k 个新的链表头的大小，得出最后的结果。</span></p></li> 
</ol> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">上述操作的时间复杂度是 O(k)。而针对找出最小的数，可以使用最小堆来提高效率。时间复杂度计算如下。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<ol style=""> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对 k 个链表头创建一个大小为 k 的最小堆，在第 2 课中提到创建一个大小为 k 的最小堆所需的时间是 O(k)；</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从堆里取出最小的数，都是 O(lg(k))；</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若每个链表的平均长度为 n，一共有 nk 个元素，即用大小为 k 的最小堆去过滤 nk 个元素；</span></p></li> 
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">整体的时间复杂度就是 O(nk×log(k))。</span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p></li> 
</ol> 
<p style="line-height: 1.75em;"><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">维护这个大小为 k 的最小堆，直到遍历完所有 k 个链表里的所有元素。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>代码实现</strong></span></p> 
<pre>public&nbsp;ListNode&nbsp;mergeKLists(ListNode[]&nbsp;lists)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//空测试用例处理</pre>
<pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(lists==null || lists.length==0){</pre>
<pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return null;</pre>
<pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</pre> 
<pre>&nbsp;&nbsp;&nbsp;&nbsp;//利用一个空的链表头方便插入节点。&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;ListNode&nbsp;fakeHead&nbsp;=&nbsp;new&nbsp;ListNode(0),&nbsp;p&nbsp;=&nbsp;fakeHead;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;k&nbsp;=&nbsp;lists.length;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个最小堆来保存&nbsp;k&nbsp;个链表节点；将&nbsp;k&nbsp;个链表的头放入到最小堆里。
&nbsp;&nbsp;&nbsp;&nbsp;PriorityQueue&lt;ListNode&gt;&nbsp;heap&nbsp;=&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new&nbsp;PriorityQueue&lt;&gt;(k,&nbsp;new&nbsp;Comparator&lt;ListNode&gt;()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;compare(ListNode&nbsp;a,&nbsp;ListNode&nbsp;b)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;a.val&nbsp;-&nbsp;b.val;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从最小堆里将当前最小的节点取出，插入到结果链表中。
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;k;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(lists[i]&nbsp;!=&nbsp;null)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heap.offer(lists[i]);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!heap.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ListNode&nbsp;node&nbsp;=&nbsp;heap.poll();
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p.next&nbsp;=&nbsp;node;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p&nbsp;=&nbsp;p.next;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果发现该节点后面还有后续节点，将后续节点加入到最小堆里。&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(node.next&nbsp;!=&nbsp;null)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heap.offer(node.next);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;fakeHead.next;
&nbsp;&nbsp;
}</pre>

<h2></h2>
<h6 style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路三：分治法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当 k=1 的时候，直接返回结果；当 k=2 的时候，把这两个链表归并。当 k=3 的时候，我们可以把它们分成两组，分别归并完毕后再进行最后的归并操作，如下。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/50/CgotOV2InqWAExguACYe_inhacY345.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">上述做法运用了典型的分治思想，非常类似归并排序操作。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>代码实现</strong></span></p> 
<pre>public&nbsp;ListNode&nbsp;mergeKLists(ListNode[]&nbsp;lists,&nbsp;int&nbsp;low,&nbsp;int&nbsp;high)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(low&nbsp;==&nbsp;high)&nbsp;return&nbsp;lists[low];
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;middle&nbsp;=&nbsp;low&nbsp;+&nbsp;(high&nbsp;-&nbsp;low)&nbsp;/&nbsp;2;&nbsp;//&nbsp;从中间切一刀
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mergeTwoLists(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mergeKLists(lists,&nbsp;low,&nbsp;middle),
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mergeKLists(lists,&nbsp;middle&nbsp;+&nbsp;1,&nbsp;high)
&nbsp;&nbsp;&nbsp;&nbsp;);&nbsp;//&nbsp;递归地处理左边和右边的链表，最后合并
}

public&nbsp;ListNode&nbsp;mergeTwoLists(ListNode&nbsp;a,&nbsp;ListNode&nbsp;b)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(a&nbsp;==&nbsp;null)&nbsp;return&nbsp;b;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(b&nbsp;==&nbsp;null)&nbsp;return&nbsp;a;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(a.val&nbsp;&lt;=&nbsp;b.val)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.next&nbsp;=&nbsp;mergeTwoLists(a.next,&nbsp;b);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;a;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;b.next&nbsp;=&nbsp;mergeTwoLists(a,&nbsp;b.next);
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;b;
}</pre>

<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">合并两个排好序的链表非常简单，此处使用递归函数，可以尝试非递归写法。</span></p> 
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>时间复杂度</strong>：O(nk×log(k))。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>空间复杂度</strong>：O(1)。因为不像最小堆解法那样需要维护一个额外的数据结构。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">提示：因为这道题针对的是链表，所以很多操作都直接在链表上进行。</span></p> 
<h1></h1> 
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 18px;">结语</span></h6> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这节课剖析了三道非常经典的高频题，从不同的角度考虑解决问题的方案，并回顾了经典的快速选择算法。下节课将讨论另外三道经典的高频题。</span></p> 
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><br></p> 
<p><br></p>

## 高频真题讲解II

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这节课继续学习另外三种高频题：</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">合并区间和无重叠区间</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">火星字典</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">基本计算器</span></p></li>
</ul>
<h1 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析一</span></p></h1>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode 第 56 题：</span>给出一个区间的集合，请合并所有重叠的区间。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 1</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: [[1,3], [2,6], [8,10], [15,18]]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: [[1,6], [8,10], [15,18]]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 区间 [1,3] 和 [2,6] 重叠，将它们合并为 [1,6]。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: [[1,4], [4,5]]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: [[1,5]]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路：贪婪法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在分析一些比较复杂的问题时，可以从比较简单的情况着手来寻找突破口，先来看看两个区间会出现多少种情况。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">假设有区间 a 和 b，区间 a 的起始时间要早于 b 的起始时间。那么它们之间有如下 3 种可能会出现的情况。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2IeoeAXmexAABQeDb1BWQ016.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">情况一：两个区间没有任何重叠的部分，因此区间不会发生融合。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">情况二和三：区间有重叠。</span></p></li>
 <ol style="list-style-type: lower-alpha;">
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">新区间的起始时间是 a 的起始时间，这个不变；</span></p></li>
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">新区间的终止时间是 a 的终止时间和 b 的终止时间的最大值，这个就是融合两个区间的最基本的思想。</span></p></li>
 </ol>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">给定了 n 个区间，如何有效地融合它们呢？以下是一种很直观也是非常有效的做法。</span><span style="font-size: 11pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="font-size: 11pt; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;" src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2IeomAZY5oAFqba-5PZJc045.gif"></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">先将所有的区间按照起始时间的先后顺序排序，从头到尾扫描一遍</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">定义两个变量 previous 和 current，分别表示前一个区间和当前的区间</span></p></li>
 <ol style="list-style-type: lower-alpha;">
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果没有融合，那么当前区间就变成了新的前一个区间，下一个区间成为新的当前区间</span></p></li>
  <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果发生了融合，更新前一个区间的结束时间。</span></p></li>
 </ol>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这个就是贪婪算法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><strong><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></strong></p>
<pre>int[][]&nbsp;merge(int[][]&nbsp;intervals)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;将所有的区间按照起始时间的先后顺序排序
&nbsp;&nbsp;&nbsp;&nbsp;Arrays.sort(intervals,&nbsp;(i1,&nbsp;i2)&nbsp;-&gt;&nbsp;Integer.compare(i1[0],&nbsp;i2[0]));
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个&nbsp;previous&nbsp;变量，初始化为&nbsp;null&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int[]&nbsp;previous&nbsp;=&nbsp;null;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个&nbsp;result&nbsp;变量，用来保存最终的区间结果
&nbsp;&nbsp;&nbsp;&nbsp;List&lt;int[]&gt;&nbsp;result&nbsp;=&nbsp;new&nbsp;ArrayList&lt;&gt;();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从头开始遍历给定的所有区间
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int[]&nbsp;current&nbsp;:&nbsp;intervals)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果这是第一个区间，或者当前区间和前一个区间没有重叠，那么将当前区间加入到结果中
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(previous&nbsp;==&nbsp;null&nbsp;||&nbsp;current[0]&nbsp;&gt;&nbsp;previous[1])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.add(previous&nbsp;=&nbsp;current);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{&nbsp;//&nbsp;否则，两个区间发生了重叠，更新前一个区间的结束时间
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prev[1]&nbsp;=&nbsp;Math.max(previous[1],&nbsp;current[1]);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;result.toArray(new&nbsp;int[result.size()][]);&nbsp;
&nbsp;}</pre>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">算法分析</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">时间复杂度 O(nlog(n))，因为一开始要对数组进行排序。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">空间复杂度为 O(n)，因为用了一个额外的 result 数组来保存结果。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">注意：和区间相关的问题，有非常多的变化，融合区间可以说是最基本也是最常考的一个。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析二</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode 第 435 题：</span>给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">注意:</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">可以认为区间的终点总是大于它的起点。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 1</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: [ [1,2], [2,3], [3,4], [1,3] ]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: 1</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>解释</strong>: 移除 [1,3] 后，剩下的区间没有重叠。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: [ [1,2], [1,2], [1,2] ]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: 2</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>解释</strong>: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 3</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: [ [1,2], [2,3] ]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: 0</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>解释</strong>: 你不需要移除任何区间，因为它们已经是无重叠的了。</span></p>
<h2 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解题思路一： 暴力法</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这道题是上一道题的一种变形，暴力法就是将各个区间按照起始时间的先后顺序排序，然后找出所有的组合，最后对每种组合分别判断各个区间有没有互相重叠。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">算法分析</span></p></h3>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">排序需要 O(nlog(n)) 的时间复杂度。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">找出所有组合，按照前一节课里提到的从一个字符串里找出所有子序列的组合个数的方法，取出 n 个区间，有 Cnn 种，算上空的集合，那么一共有&nbsp;Cn0 + Cn1 + Cn2 + … Cnn = 2n。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对每种组合进行判断是否重叠，k 个区间，需要 O(k) 的时间复杂度。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">总体时间复杂度为&nbsp;Cn0 x 0 + Cn1×1 + Cn2×2 + … + Cnk * k + … + Cnn×n = n×2n-1。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">由于 n×2n-1 已经远大于 nlog(n)，所以排序的时间复杂度就可以忽略不计，整体的时间复杂度就是 O(n×2n)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">建议：一定要记一些常见的时间复杂度计算公式，对于在面试中能准确快速地分析复杂度是非常有帮助的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路二：另一种暴力法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对于暴力法，还有另外的分析方法。用两个变量 prev 和 curr 分别表示前一个区间和当前区间。</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果当前区间和前一个区间没有发生重叠，则尝试保留当前区间，表明此处不需要删除操作。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">题目要求最少的删除个数，只有在这样的情况下，才不需要做任何删除操作。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在这种情况下，虽然两个区间没有重叠，但是也要考虑尝试删除当前区间的情况。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对比哪种情况所需要删除的区间最少。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：有如下的几个区间 A、B、C，其中 A 是前一个区间，B 是当前区间，A 和 B 没有重叠。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/90/FB/CgoB5l2IeomAJypIAAA1_CqUqGA909.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果只考虑保留 B 的情况，而不考虑把 B 删除的情况，那么就会错过一个答案，因为在这个情况下，把 B 删除，只剩下 A 和 C，它们互不重叠，也能得到最优的解。</span></p><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">遇到 A 和 B 相互重叠的情况时，必须要考虑把 B 删除掉。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2IeomAasCyABO9nAPnBLM742.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">为什么不把 A 删除呢？因为如果把 A 删了，B 和 C 还是可能会重叠，则需要删除掉更多的区间，不满足题目要求。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/90/FB/CgoB5l2IeoqAMYGUAB4TTFLJ7aA153.gif"><br></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<h2 style="white-space: normal;"></h2>
<pre>//&nbsp;在主体函数里，先将区间按照起始时间的先后顺序排序，然后调用递归函数
int&nbsp;eraseOverlapIntervals(int[][]&nbsp;intervals)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;Arrays.sort(intervals,&nbsp;(i1,&nbsp;i2)&nbsp;-&gt;&nbsp;Integer.compare(i1[0],&nbsp;i2[0]));
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;eraseOverlapIntervals(-1,&nbsp;0,&nbsp;intervals);
}


//&nbsp;递归函数里，先检查是否已经处理完所有的区间，是，表明不需要删除操作，直接返回
int&nbsp;eraseOverlapIntervals(int&nbsp;prev,&nbsp;int&nbsp;curr,&nbsp;int[][]&nbsp;intervals)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(curr&nbsp;==&nbsp;intervals.length)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;taken&nbsp;=&nbsp;Integer.MAX_VALUE,&nbsp;nottaken;

&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(prev&nbsp;==&nbsp;-1&nbsp;||&nbsp;intervals[prev][1]&nbsp;&lt;=&nbsp;intervals[curr][0])&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;只有当prev,&nbsp;curr没有发生重叠的时候，才可以选择保留当前的区间curr
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taken&nbsp;=&nbsp;eraseOverlapIntervals(curr,&nbsp;curr&nbsp;+&nbsp;1,&nbsp;intervals);
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;其他情况，可以考虑删除掉curr区间，看看删除了它之后会不会产生最好的结果
&nbsp;&nbsp;&nbsp;&nbsp;nottaken&nbsp;=&nbsp;eraseOverlapIntervals(prev,&nbsp;curr&nbsp;+&nbsp;1,&nbsp;intervals)&nbsp;+&nbsp;1;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;Math.min(taken,&nbsp;nottaken);

}</pre>

<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路二：贪婪法</span></h6>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">按照起始时间排序</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>举例</strong>：有四个区间 A，B，C，D，A 跨度很大，B 和 C 重叠，C 和 D 重叠，而 B 和 D 不重叠。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>解法</strong>：要尽可能少得删除区间，那么当遇到了重叠的时候，应该把区间跨度大，即结束比较晚的那个区间删除。因为如果不删除它，它会和剩下的其他区间发生重叠的可能性非常大。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当发现 A 和 B 重叠，如果不删除 A，就得牺牲 B，C，D，而正确的答案是只需要删除 A 和 C 即可。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">按照上述思想求解，实现过程如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">1. A 和 B 重叠，由于 A 结束得比较晚，此时删除区间 A，保留区间 B。</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/FB/CgoB5l2IeouALsHDACoIa6RqiFk139.gif">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">2. B 和 C 重叠，由于 C 结束得晚，把区间 C 删除，保留区间 B。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2IeouAVgkTACrf8XPAR8o811.gif">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">3. B 和 D 不重叠，结束，一共只删除了 2 个区间。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/FB/CgoB5l2IeoyAS7VEABGI5Z_ovpM719.gif">&nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>代码实现</strong></span></p>
<pre>int&nbsp;eraseOverlapIntervals(int[][]&nbsp;intervals)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(intervals.length&nbsp;==&nbsp;0)&nbsp;return&nbsp;0;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;将所有区间按照起始时间排序
&nbsp;&nbsp;&nbsp;&nbsp;Arrays.sort(intervals,&nbsp;(i1,&nbsp;i2)&nbsp;-&gt;&nbsp;Integer.compare(i1[0],&nbsp;i2[0]));


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;用一个变量&nbsp;end&nbsp;记录当前的最小结束时间点，以及一个&nbsp;count&nbsp;变量记录到目前为止删除掉了多少区间
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;end&nbsp;=&nbsp;intervals[0][1],&nbsp;count&nbsp;=&nbsp;0;

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从第二个区间开始，判断一下当前区间和前一个区间的结束时间
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;1;&nbsp;i&nbsp;&lt;&nbsp;intervals.length;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;当前区间和前一个区间有重叠，即当前区间的起始时间小于上一个区间的结束时间，end记录下两个结束时间的最小值，把结束时间晚的区间删除，计数加1。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(intervals[i][0]&nbsp;&lt;&nbsp;end)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end&nbsp;=&nbsp;Math.min(end,&nbsp;intervals[i][1]);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end&nbsp;=&nbsp;intervals[i][1];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果没有发生重叠，根据贪婪法，更新&nbsp;end&nbsp;变量为当前区间的结束时间
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;count;
&nbsp;&nbsp;
}</pre>

<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">按照结束时间排序</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>题目演变</strong>：在给定的区间中，最多有多少个区间相互之间是没有重叠的？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">思路：假如求出了最多有 m 个区间是互相之间没有重叠的，则最少需要将 n−m 个区间删除才行。即，删掉“害群之马”，则剩下的就不会互相冲突了。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">为什么按照结束时间排序会有助于我们统计出没有重叠的区间最大个数呢？举例说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">假设今天有很多活动要举行，每个活动都有固定的时间，选择哪些活动，才能使参加的活动最多，然后在时间上不会互相重叠呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果我们按照活动的起始时间去挑选，某个活动虽然开始得早，但是很有可能会持续一整天，就没有时间去参加其他活动了。如果按照活动的结束时间选，先挑那些最早结束的，就会尽可能节省出更多的时间来参加更多的活动。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">根据这个思路，这道题也可以按照结束时间排序处理，于是，区间的顺序就是 {B, C, D, A}。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2IeoyAMCcNAABEWLc4h90512.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现：目标就是统计有多少个没有重叠的情况发生。若当前的区间和前一个区间没有重叠的时候，计数器加 1，同时，用当前的区间去和下一个区间比较。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>代码实现</strong></span></p>
<pre>int&nbsp;eraseOverlapIntervals(int[][]&nbsp;intervals)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(intervals.length&nbsp;==&nbsp;0)&nbsp;return&nbsp;0;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;按照结束时间将所有区间进行排序
&nbsp;&nbsp;&nbsp;&nbsp;Arrays.sort(intervals,&nbsp;(i1,&nbsp;i2)&nbsp;-&gt;&nbsp;Integer.compare(i1[1],&nbsp;i2[1]));
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个变量&nbsp;end&nbsp;用来记录当前的结束时间，count&nbsp;变量用来记录有多少个没有重叠的区间&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;end&nbsp;=&nbsp;intervals[0][1],&nbsp;count&nbsp;=&nbsp;1;
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从第二个区间开始遍历剩下的区间&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;1;&nbsp;i&nbsp;&lt;&nbsp;intervals.length;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;当前区间和前一个结束时间没有重叠，那么计数加&nbsp;1，同时更新一下新的结束时间
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(intervals[i][0]&nbsp;&gt;=&nbsp;end)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end&nbsp;=&nbsp;intervals[i][1];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;用总区间的个数减去没有重叠的区间个数，即为最少要删除掉的区间个数
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;intervals.length&nbsp;-&nbsp;count;&nbsp;
}</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">关于区间的问题，LeetCode 上还有很多类似的题目，大家一定要去做做。</span></p>
<h1 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">例题分析三</span></p></h1>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode &nbsp;第 269 题，火星字典：</span>现有一种使用字母的全新语言，这门语言的字母顺序与英语顺序不同。假设，您并不知道其中字母之间的先后顺序。但是，会收到词典中获得一个不为空的单词列表。因为是从词典中获得的，所以该单词列表内的单词已经按这门新语言的字母顺序进行了排序。您需要根据这个输入的列表，还原出此语言中已知的字母顺序。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 1</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">[&nbsp;"wrt",&nbsp;"wrf","er","ett",&nbsp;"rftt"]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: "wertf"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">[&nbsp;"z",&nbsp;"x"]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: "zx"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 3</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">[&nbsp;"z",&nbsp;&nbsp;"x","z"]&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: ""&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 此顺序是非法的，因此返回 ""。</span></p>
<h2 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解题思路</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; line-height: 22px; font-size: 11pt; color: rgb(73, 73, 73);"><span style="color: rgb(63, 63, 63); font-size: 12pt; font-family: &quot;Microsoft YaHei&quot;, sans-serif;">首先，确定字符串排序方法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; line-height: 22px; font-size: 11pt; color: rgb(73, 73, 73);"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">理解题意，关键是搞清楚给定的输入字符串是怎么排序的？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：假如我们有这些单词 bar，bat，algorithm，cook，cog，那么按照字符顺序，应该怎么排呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">正确的排序应该是：algorithm bat bar cog cook。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法：</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">逐位地比较两个相邻的字符串</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">第一个字母出现的顺序越早，排位越靠前</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">第一个字母相同时，比较第二字母，以此类推</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">注意：两个字符串某个相同的位置出现了不同，就立即能得出它们的顺序，无需继续比较字符串剩余字母。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>求解示例 1</strong></span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入是：</span></p>
<pre>wrt
wrf
er
ett
rftt</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong><br></strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法：</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 比较以 w 开头的字符串，它们是 wrt 和 wrf，之所以 wrt 会排在 wrf 之前，是因为 t 比 f 在火星字典里出现的顺序要早。此时将这两个字母的关系表达为 t -&gt; f。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2Ieo2AUKzRAB96MtWjhn0834.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 比较 wrf 和 er，第一个字母开始不同，因此，得出 w 排在 e 之前，记为 w -&gt; e。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/FB/CgoB5l2Ieo2AHp2gABsjRhdqs-o833.gif">&nbsp; &nbsp;</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. 比较 er 和 ett，从第二个字母开始不一样，因此，得出 r 排在 t 之前，记为 r -&gt; t。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2Ieo6AGzbmABkoJlXVd6Q543.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">4. 比较 ett 和 rftt，从第一个字母开始不一样，得出 e 排在 r 之前，记为 e -&gt; r。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/FB/CgoB5l2Ieo-AQsABACwHvWpfLUM265.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">梳理上述关系，得 t -&gt; f，w -&gt; e，r -&gt; t，e -&gt; r</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">拓扑排序得到正确顺序：将每个字母看成是图里的顶点，它们之间的关系就好比是连接顶点与顶点的变，而且是有向边，所以这个图是一个有向图。最后对这个有向图进行拓扑排序，就可以得出最终的结果。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;&nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2Ieo-AL2rOAAA-SDWivvo697.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span><strong style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">代码实现</strong></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><strong style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></strong></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">包括两大步骤，第一步是根据输入构建一个有向图；第二步是对这个有向图进行拓扑排序。</span></p>
<pre>//&nbsp;基本情况处理，比如输入为空，或者输入的字符串只有一个
String&nbsp;alienOrder(String[]&nbsp;words)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(words&nbsp;==&nbsp;null&nbsp;||&nbsp;words.length&nbsp;==&nbsp;0)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;null;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(words.length&nbsp;==&nbsp;1)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;words[0];
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;构建有向图：定义一个邻接链表&nbsp;adjList，也可以用邻接矩阵
&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;Character,&nbsp;List&lt;Character&gt;&gt;&nbsp;adjList&nbsp;=&nbsp;new&nbsp;HashMap&lt;&gt;();


&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;words.length&nbsp;-&nbsp;1;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String&nbsp;w1&nbsp;=&nbsp;words[i],&nbsp;w2&nbsp;=&nbsp;words[i&nbsp;+&nbsp;1];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n1&nbsp;=&nbsp;w1.length(),&nbsp;n2&nbsp;=&nbsp;w2.length();

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boolean&nbsp;found&nbsp;=&nbsp;false;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;0;&nbsp;j&nbsp;&lt;&nbsp;Math.max(w1.length(),&nbsp;w2.length());&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Character&nbsp;c1&nbsp;=&nbsp;j&nbsp;&lt;&nbsp;n1&nbsp;?&nbsp;w1.charAt(j)&nbsp;:&nbsp;null;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Character&nbsp;c2&nbsp;=&nbsp;j&nbsp;&lt;&nbsp;n2&nbsp;?&nbsp;w2.charAt(j)&nbsp;:&nbsp;null;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(c1&nbsp;!=&nbsp;null&nbsp;&amp;&amp;&nbsp;!adjList.containsKey(c1))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adjList.put(c1,&nbsp;new&nbsp;ArrayList&lt;Character&gt;());
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(c2&nbsp;!=&nbsp;null&nbsp;&amp;&amp;&nbsp;!adjList.containsKey(c2))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adjList.put(c2,&nbsp;new&nbsp;ArrayList&lt;Character&gt;());
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(c1&nbsp;!=&nbsp;null&nbsp;&amp;&amp;&nbsp;c2&nbsp;!=&nbsp;null&nbsp;&amp;&amp;&nbsp;c1&nbsp;!=&nbsp;c2&nbsp;&amp;&amp;&nbsp;!found)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adjList.get(c1).add(c2);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;found&nbsp;=&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;Set&lt;Character&gt;&nbsp;visited&nbsp;=&nbsp;new&nbsp;HashSet&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;Set&lt;Character&gt;&nbsp;loop&nbsp;=&nbsp;new&nbsp;HashSet&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;Stack&lt;Character&gt;&nbsp;stack&nbsp;=&nbsp;new&nbsp;Stack&lt;Character&gt;();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(Character&nbsp;key&nbsp;:&nbsp;adjList.keySet())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!visited.contains(key))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!topologicalSort(adjList,&nbsp;key,&nbsp;visited,&nbsp;loop,&nbsp;stack))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;"";
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;StringBuilder&nbsp;sb&nbsp;=&nbsp;new&nbsp;StringBuilder();

&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!stack.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.append(stack.pop());
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;sb.toString（）；
&nbsp;&nbsp;
}</pre>

<pre>//&nbsp;将当前节点&nbsp;u&nbsp;加入到&nbsp;visited&nbsp;集合以及&nbsp;loop&nbsp;集合中。
boolean&nbsp;topologicalSort(Map&lt;Character,&nbsp;List&lt;Character&gt;&gt;&nbsp;adjList,&nbsp;char&nbsp;u,&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set&lt;Character&gt;&nbsp;visited,&nbsp;Set&lt;Character&gt;&nbsp;loop,&nbsp;Stack&lt;Character&gt;&nbsp;stack)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;visited.add(u);
&nbsp;&nbsp;&nbsp;&nbsp;loop.add(u);


&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(adjList.containsKey(u))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;adjList.get(u).size();&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;v&nbsp;=&nbsp;adjList.get(u).get(i);
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(loop.contains(v))
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;false;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!visited.contains(v))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!topologicalSort(adjList,&nbsp;v,&nbsp;visited,&nbsp;loop,&nbsp;stack))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;false;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}


&nbsp;&nbsp;&nbsp;&nbsp;loop.remove(u);
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;stack.push(u);

&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用深度优先的方法进行拓扑排序，一定要借用下面三者。</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">visited 集合，用来记录哪些顶点已经被访问过。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">stack 堆栈，从某个顶点出发，访问完了所有其他顶点，最后才把当前的这个顶点加入到堆栈里。即，若要该点加入到 stack 里，必须先把跟它有联系的顶点都处理完。举例说明，如果我要学习课程 A，得先把课程 B，C 以及 D 都看完。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">loop 集合，为了有效防止有向图里出现环的情况。举例说明如下。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-indent: 29.3333px;">假如我们有这么一个有向图。</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-indent: 29.3333px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-indent: 29.3333px;" src="http://s0.lgstatic.com/i/image2/M01/90/FB/CgoB5l2Ieo-AfXiGAB41ZU6ORu4144.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-indent: 29.3333px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从 A 开始对这个图进行深度优先的遍历，那么当访问到顶点 D 的时候，visited 集合以及 loop 集合都是 {A, B, C, D}。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当从 D 继续遍历到 B 的时候，发现 B 已经在 loop 集合里。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">因此得出结论，在这一轮遍历中，出现了环。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">为什么不能单单用 visited 集合来帮助判断呢？例如下面情况。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2IepCADkCaAAA9qnc1K_8002.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从 D 访问 B 的时候，如果判断因为 B 已经被访问过了，于是得出这里就有一个环，显然判断错误。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当每一轮访问结束后，都必须要把 loop 集合清空，才能把其他顶点也加入到堆栈里。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">否则，当 D 遇到 B 的时候，也会认为这里有环出现，而提前终止程序，无法将它加入到堆栈中。</span></p></li>
</ul>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析四</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode 第 772 题，基本计算器：</span>实现一个基本的计算器来计算简单的表达式字符串。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">说明：</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">表达式字符串可以包含左括号 ( 和右括号 )，加号 + 和减号 -，非负整数和空格。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">表达式字符串只包含非负整数， + &nbsp;- &nbsp;* &nbsp;/ 操作符，左括号 ( ，右括号 ) 和空格。整数除法需要向下截断。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 1</strong>：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">"1 + 1" = 2</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">" 6-4 / 2 " = 4</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">"2×(5+5×2)/3+(6/2+8)" = 21</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">"(2+6×3+5- (3×14/7+2)×5)+3" = -12</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 16px;">解题思路一：只有加号</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">例题：若表达式里只有数字和加法符号，没有减法，也没有空格，并且输入的表达式一定合法，那么应该如何处理？例如：1+2+10。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法：一旦遇到了数字就不断地相加。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>//&nbsp;转换，将字符串的字符放入到一个优先队列中
int&nbsp;calculate(String&nbsp;s)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;Queue&lt;Character&gt;&nbsp;queue&nbsp;=&nbsp;new&nbsp;LinkedList&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(char&nbsp;c&nbsp;:&nbsp;s.toCharArray())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.offer(c);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义两个变量，num&nbsp;用来表示当前的数字，sum&nbsp;用来记录最后的和&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;num&nbsp;=&nbsp;0,&nbsp;sum&nbsp;=&nbsp;0;
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;遍历优先队列，从队列中一个一个取出字符&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;c&nbsp;=&nbsp;queue.poll();


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;如果当前字符是数字，那么就更新&nbsp;num&nbsp;变量，如果遇到了加号，就把当前的&nbsp;num&nbsp;加入到&nbsp;sum&nbsp;里，num&nbsp;清零
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(Character.isDigit(c))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;10&nbsp;*&nbsp;num&nbsp;+&nbsp;c&nbsp;-&nbsp;'0';
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;+=&nbsp;num;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;+=&nbsp;num;&nbsp;//&nbsp;最后没有加号，再加一次

&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;sum;
&nbsp;&nbsp;
}</pre>

<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码扩展一</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如上，在返回 sum 之前，我们还进行了一次额外的操作：sum += num，就是为了要处理结束时的特殊情况。若在表达式的最后添加上一个”+”，也能实现同样的效果，代码实现如下。</span></p>
<pre>int&nbsp;calculate(String&nbsp;s)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;Queue&lt;Character&gt;&nbsp;queue&nbsp;=&nbsp;new&nbsp;LinkedList&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(char&nbsp;c&nbsp;:&nbsp;s.toCharArray())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.offer(c);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;queue.add('+');&nbsp;//&nbsp;在末尾添加一个加号
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;}


&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;sum;
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如上，在优先队列的最后添加一个加号。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码扩展二</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若输入的时候允许空格，如何处理？代码实现如下。</span></p>
<pre>int&nbsp;calculate(String&nbsp;s)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(char&nbsp;c&nbsp;:&nbsp;s.toCharArray())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(c&nbsp;!=&nbsp;'&nbsp;')&nbsp;queue.offer(c);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;...
}</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如上，在添加到优先队列的时候，过滤到那些空格就好了。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路二：引入减号</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">例题：若表达式支持减法，应该怎么处理？例如：1 + 2 - 10。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法 1：借助两个 stack，一个 stack 专门用来放数字；一个 stack 专门用来放符号。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法 2：将表达式看作 1 + 2 + (-10)，把 -10 看成一个整体，同时，利用一个变量 sign 来表示该数字前的符号，这样即可沿用解法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法 2 的具体操作如下。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/91/1B/CgotOV2IepKAGgQSAIKuyG7w9pk329.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>int&nbsp;calculate(String&nbsp;s)&nbsp;{&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;Queue&lt;Character&gt;&nbsp;queue&nbsp;=&nbsp;new&nbsp;LinkedList&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(char&nbsp;c&nbsp;:&nbsp;s.toCharArray())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(c&nbsp;!=&nbsp;'&nbsp;')&nbsp;queue.offer(c);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;queue.add('+');
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;sign&nbsp;=&nbsp;'+';&nbsp;//&nbsp;添加一个符号标志变量


&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;num&nbsp;=&nbsp;0,&nbsp;sum&nbsp;=&nbsp;0;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;c&nbsp;=&nbsp;queue.poll();

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(Character.isDigit(c))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;10&nbsp;*&nbsp;num&nbsp;+&nbsp;c&nbsp;-&nbsp;'0';
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;遇到了符号，表明我们要开始统计一下当前的结果了
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'+')&nbsp;{&nbsp;//数字的符号是&nbsp;+
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;+=&nbsp;num;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'-')&nbsp;{&nbsp;//&nbsp;数字的符号是&nbsp;-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;-=&nbsp;num;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sign&nbsp;=&nbsp;c;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;sum;
}</pre>

<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 16px;">解题思路三：引入乘除</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">例题：若引入乘法和除法，如何处理？举个例子：1 + 2 x 10。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法：要考虑符号的优先级问题，不能再简单得对 sum 进行单向的操作。当遇到乘号的时候：sum = 1，num = 2，而乘法的优先级比较高，得先处理 2 x 10 才能加 1。对此，就把它们暂时记录下来，具体操作如下。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;" src="http://s0.lgstatic.com/i/image2/M01/90/FB/CgoB5l2IepSAeUhVAFLy8rXwn-M290.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>int&nbsp;calculate(String&nbsp;s)&nbsp;{&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;Queue&lt;Character&gt;&nbsp;queue&nbsp;=&nbsp;new&nbsp;LinkedList&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(char&nbsp;c&nbsp;:&nbsp;s.toCharArray())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(c&nbsp;!=&nbsp;'&nbsp;')&nbsp;queue.offer(c);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;queue.add('+');
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;sign&nbsp;=&nbsp;'+';
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;num&nbsp;=&nbsp;0;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个新的变量&nbsp;stack，用来记录要被处理的数
&nbsp;&nbsp;&nbsp;&nbsp;Stack&lt;Integer&gt;&nbsp;stack&nbsp;=&nbsp;new&nbsp;Stack&lt;&gt;();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;c&nbsp;=&nbsp;queue.poll();


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(Character.isDigit(c))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;10&nbsp;*&nbsp;num&nbsp;+&nbsp;c&nbsp;-&nbsp;'0';
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'+')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(num);&nbsp;//&nbsp;遇到加号，把当前的数压入到堆栈中
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'-')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(-num);&nbsp;//&nbsp;减号，把当前数的相反数压入到堆栈中
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'*')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(stack.pop()&nbsp;*&nbsp;num);&nbsp;//&nbsp;乘号，把前一个数从堆栈中取出，然后和当前的数相乘，再放回堆栈
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'/')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(stack.pop()&nbsp;/&nbsp;num);&nbsp;//&nbsp;除号，把前一个数从堆栈中取出，然后除以当前的数，再把结果放回堆栈
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sign&nbsp;=&nbsp;c;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}


&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;sum&nbsp;=&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;堆栈里存储的都是各个需要相加起来的结果，把它们加起来，返回总和即可
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!stack.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;+=&nbsp;stack.pop();
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;sum;
&nbsp;&nbsp;
}</pre>

<p style="white-space: normal; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路四：引入小括号</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">例题：如何支持小括号？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法：小括号里的表达式优先计算。</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">先利用上面的方法计算小括号里面的表达式。</span></p></li>
 <li><p style="line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当遇到一个左括号的时候，可以递归地处理；当遇到了右括号，表明小括号里面的处理完毕，递归应该返回。</span></p></li>
</ol>
<h3 style="white-space: normal;"><p style="line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>//&nbsp;在主函数里调用一个递归函数
int&nbsp;calculate(String&nbsp;s)&nbsp;{&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;Queue&lt;Character&gt;&nbsp;queue&nbsp;=&nbsp;new&nbsp;LinkedList&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(char&nbsp;c&nbsp;:&nbsp;s.toCharArray())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(c&nbsp;!=&nbsp;'&nbsp;')&nbsp;queue.offer(c);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;queue.offer('+');
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;calculate(queue);
}


int&nbsp;calculate(Queue&lt;Character&gt;&nbsp;queue)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;sign&nbsp;=&nbsp;'+';
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;num&nbsp;=&nbsp;0;

&nbsp;&nbsp;&nbsp;&nbsp;Stack&lt;Integer&gt;&nbsp;stack&nbsp;=&nbsp;new&nbsp;Stack&lt;&gt;();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;c&nbsp;=&nbsp;queue.poll();

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(Character.isDigit(c))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;10&nbsp;*&nbsp;num&nbsp;+&nbsp;c&nbsp;-&nbsp;'0';
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;遇到一个左括号，开始递归调用，求得括号里的计算结果，将它赋给当前的&nbsp;num&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&nbsp;if&nbsp;(c&nbsp;==&nbsp;'(')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;calculate(queue);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'+')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(num);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'-')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(-num);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'*')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(stack.pop()&nbsp;*&nbsp;num);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(sign&nbsp;==&nbsp;'/')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(stack.pop()&nbsp;/&nbsp;num);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sign&nbsp;=&nbsp;c;
&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;遇到右括号，就可以结束循环，直接返回当前的总和&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(c&nbsp;==&nbsp;')')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;sum&nbsp;=&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!stack.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;+=&nbsp;stack.pop();
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;sum;
&nbsp;&nbsp;
}</pre>

<h6 style="white-space: normal; line-height: 1.75em;"><span style="font-size: 18px;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">结语</span><br><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span></span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这节课讲解了一些解决区间问题的方法，以及拓扑排序算法，最后实现了一个基本的计算器。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">注意：这些问题都是面试高频题，但不要死记硬背，要通过理解其思想来达到融会贯通。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">下一节课将讨论几道难度比较高的题目。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><br></p>

## 高频真题讲解III

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这节课将分析三道比较难的题目，希望能帮助大家拓宽解题的思路。主要内容包括：</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">正则表达式匹配</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">柱状图中的最大矩形</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现 strStr() 函数</span></p></li>
</ul>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析一</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode 第 10 题，正则表达式匹配：</span>给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">'.' 匹配任意单个字符</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">'*' 匹配零个或多个前面的那一个元素</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">注意：所谓匹配，是要涵盖整个字符串 s 的，而不是部分字符串。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">说明：</span></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s 可能为空，且只包含从 a-z 的小写字母。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 1</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s = "aa"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p = "a"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: false</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: "a" 无法匹配 "aa" 整个字符串。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s = "aa"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p = "a*"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: true</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 3</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s = "ab"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p = ".*"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: true</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 4</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s = "aab"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p = "c*a*b"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: true</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 5</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s = "mississippi"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p = "mis*is*p*."</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: false</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释：'p'与'i'无法匹配。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">不要害怕，这道题只要求实现正则表达式里的两个小功能。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">判断 s 和 p 匹配</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：给定两个字符串 s 和 p，判断 s 和 p 是否匹配。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法：s 和 p 必须要相等。定义两个指针 i 和 j，分别指向 s 和 p 的第一个字符，然后逐个去比较，一旦发现不相等，就立即知道 s 和 p 不匹配。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie1iAL3rjAFNmGn6rmB8556.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">此时，假设 s 字符串的长度为 m，p 字符串的长度为 n，s 和 p 匹配的条件就是 s 和 p 从头到尾一直匹配，即 i == m 同时 j == n 是 s 和 p 匹配的唯一条件。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">点匹配符 '.'</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">'.' 匹配任意单个字符，首先要明确的是，它是一一对应关系，和 '*' 匹配符不一样。举例说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s = "leetcode"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p = "l..tc..e"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: true</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">因为 '.' 可以匹配任何字符，即，一旦遇上了 '.' 匹配符，可以让 i 指针和 j 指针同时跳到下一个位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/FC/CgoB5l2Ie1mAHiTeAFyyE_vrAho862.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><strong><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">星匹配符&nbsp;'*'&nbsp;</span></strong></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><strong><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></strong></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">'*' 匹配符较难，先要理解这个星匹配符的定义。题目“ '*' 匹配零个或多个前面的那一个元素”中包含三个重要的信息：</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">它匹配的是 p 字符串中，该 '*' 前面的那个字符。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">它可以匹配零个或多个。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">'*' 匹配符前面必须有一个非星的字符。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">因此，在分析 '*' 匹配符的时候，一定要把 '*' 以及它前面的一个字符看作为一个整体， '*' 不能单独作为一个个体来看（例如点匹配符）。例如，p 字符串是 a *，则把 (a*) 当作一个整体来看。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie1qAJ0yjABmVlo21Z_k078.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对 p 字符串说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/FC/CgoB5l2Ie1uAfvGOAFXqP1fgpyo624.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<ul style=" white-space: normal;">
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p 可以表示空字符串，因为 '*' 可以匹配 0 个前面的字符，即当有 0 个 a 的时候，为空字符串。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">a* 还能匹配一个 a，两个 a，三个 a，一直到无穷个 a。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 p 等于 '.*' 的时候，可以表示一个空字符串，也可以表示一个点，两个点，三个点，一直到无穷个点。即它可以表示任何长度的一段字符串，包括空串。</span></p></li>
</ul>
<h3 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例说明</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s = "aaabcd"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p = "ac*a*b.."</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 用两个指针 i 和 j 分别指向 s 和 p 的开头。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie1uAWy3YACOzTjqASVU474.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 在 p 字符串里，a 的下一个字符是 c，不是 '*'，比较 s[i] 和 p[j]。因为它们都是字符 a，所以这个位置匹配正确，i 和 j 同时指向下一个。此时 j 的下一个字符是 '*'，要将 c* 当作一个整体去看待。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp;&nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/FC/CgoB5l2Ie1uAQkfIAD7sMK4b0q0916.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; &nbsp;</span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">3. 将 c* 看成是空字符，p 如下所示。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie1yATZ7aACaSPwysGtw610.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">4. 若匹配中不一致即 c* 不能当作空字符串，则当作一个 c 字符，此时 p 如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie1yAYdqYACtak4duJdY791.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">5. 若不行，则看作两个 c。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">以此类推，应用了回溯的思想。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">对于将 c* 作为空字符串的情况。每一次，都要看看当前 j 指向的字符的下一个是不是 '*'。如果是 '*'，就要作为整体考虑。很明显，a 的下一个字符是 '*'。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/FC/CgoB5l2Ie12AJf14ACHySIotppY330.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">同样，先将 a* 作为空字符串看待。此时，a != b，两个字符串不匹配，因此回溯.现在将 a* 看成是一个 a，此时 a = a，两个位置的字符匹配。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie16AEWe2AGU2311QM54850.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">j 的下一个字符不是 '*'，而是点号，比较 s[i] 和 p[j]，发现 a != b。于是再次回溯，将 a* 看成是两个 a，回到刚才的位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/FC/CgoB5l2Ie1-AAfhyAMUVWpoQPio071.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最后遇到了两个点号，由于点号可以匹配任何字符，因此可以直接忽略。i 和 j 同时往前一步，再次遇到了点号。i 和 j 继续往前一步。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie1-AAKtMAGRVK2beFJI055.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">此时，i 和 j 都已经同时结束了各自的遍历，表明 s 和 p 是匹配的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">提示：重点是把这种回溯的思想掌握好。对于这道题，可以采用递归的写法，也可以采用动态规划的写法。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">递归法一</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">一开始，用两个指针 i 和 j 分别指向字符串 s 和 p 的第一个字符，当我们发现它们指向的字符相同时，我们同时往前一步移动指针 i 和 j。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">接下来重复进行相同的操作，即，若将函数定义为 isMatch(String s, int i, String p, int j) 的话，通过传递 i 和 j，就能实现重复利用匹配逻辑的效果。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当遇到点匹配符的时候，方法类似。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">来看看当遇到星匹配符的情况，举例说明如下。要不断地用 a* 去表示一个空字符串，一个 a，两个 a，一直到多个 a……</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/FC/CgoB5l2Ie1-AJzGVAACAxM7kNrk693.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 a* 表示空字符串的时候，i 和 j 应该如何调整呢？此时 i 保持不变，j+2，递归调用函数的时候，变成 isMatch(s, i, p, j + 2)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie2CAAZ6aAEk53IJKbK4406.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">此时，指向的字符和 j 指向的字符不匹配，于是回溯，回到原来的位置。11:57</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用 a* 去表示一个 a，i 指向的字符与 a 匹配，那么 i+1。指针 j，已经完成了用 a* 去表示一个 a 的任务，接下来要指向 b，调用的时候应该是 isMatch(s, i + 1, p, j + 2)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/FC/CgoB5l2Ie2CARkM9AD_zVAmy1eI036.gif"></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">i 指向的字符和 j 指向的字符不匹配，又进行回溯，但是不用回到最开始的位置。已知用 a* 去表示空字符串不行，表示一个 a 也不行，那么尝试两个 a 字符，于是，i 再往前一步，用 a* 去匹配两个 a，i 就到了 b 的位置上，调用的时候就是 isMatch(s, i + 2, p, j + 2)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie2GALJKxAEMDpEqq9pU613.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">不断地这样操作，一旦遇到了 '*' 组合，就不断地尝试，直到最后满足匹配；或者尝试过所有的可能还是不行则表示 s 和 p 无法匹配。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">根据上面的思路，一起来写递归的实现。主体函数如下。</span></p>
<pre>boolean&nbsp;isMatch(String&nbsp;s,&nbsp;String&nbsp;p)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(s&nbsp;==&nbsp;null&nbsp;||&nbsp;p&nbsp;==&nbsp;null)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;false;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;isMatch(s,&nbsp;0,&nbsp;p,&nbsp;0);
}</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">主体函数非常简单，一开始做简单的判断，只要 s 和 p 有一个为 null，就表示不匹配。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">注意：面试的时候，一定要注意对这些基本情况的考量，千万不要认为输入的值都是有效的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">接下来实现递归函数。</span></p>
<pre>boolean&nbsp;isMatch(String&nbsp;s,&nbsp;int&nbsp;i,&nbsp;String&nbsp;p,&nbsp;int&nbsp;j)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;m&nbsp;=&nbsp;s.length();
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;p.length();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;看看pattern和字符串是否都扫描完毕
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(j&nbsp;==&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;i&nbsp;==&nbsp;m;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;next&nbsp;char&nbsp;is&nbsp;not&nbsp;'*':&nbsp;必须满足当前字符并递归到下一层
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(j&nbsp;==&nbsp;n&nbsp;-&nbsp;1&nbsp;||&nbsp;p.charAt(j&nbsp;+&nbsp;1)&nbsp;!=&nbsp;'*')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(i&nbsp;&lt;&nbsp;m)&nbsp;&amp;&amp;&nbsp;


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(p.charAt(j)&nbsp;==&nbsp;'.'&nbsp;||&nbsp;s.charAt(i)&nbsp;==&nbsp;p.charAt(j))&nbsp;&amp;&amp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isMatch(s,&nbsp;i&nbsp;+&nbsp;1,&nbsp;p,&nbsp;j&nbsp;+&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;next&nbsp;char&nbsp;is&nbsp;'*',&nbsp;如果有连续的s[i]出现并且都等于p[j]，一直尝试下去
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(j&nbsp;&lt;&nbsp;n&nbsp;-&nbsp;1&nbsp;&amp;&amp;&nbsp;p.charAt(j&nbsp;+&nbsp;1)&nbsp;==&nbsp;'*')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;((i&nbsp;&lt;&nbsp;m)&nbsp;&amp;&amp;&nbsp;(p.charAt(j)&nbsp;==&nbsp;'.'&nbsp;||&nbsp;s.charAt(i)&nbsp;==&nbsp;p.charAt(j)))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(isMatch(s,&nbsp;i,&nbsp;p,&nbsp;j&nbsp;+&nbsp;2))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;接着继续下去
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;isMatch(s,&nbsp;i,&nbsp;p,&nbsp;j&nbsp;+&nbsp;2);
}</pre>

<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">函数接受四个输入参数，s 字符串，p 字符串，i 指针，j 指针。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">开始时计算 s 字符串和 p 字符串的长度，分别记为 m 和 n。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 j 指针遍历完了 p 字符串后，可以跳出递归，而 i 也刚好遍历完，说明 s 和 p 完全匹配。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">判断 j 字符的下一个是不是 '*'，不是，则递归地调用 isMatch 函数，i + 1，j + 1。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若是，则不断地将它和 '*' 作为一个整体，分别去表示空字符串，一个字符，两个字符，依此类推。如果其中一种情况能出现 s 和 p 的匹配，就返回 true。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">while 循环是整个递归算法的核心，前提条件如下。</span></p></li>
 <ol style="list-style-type: lower-alpha;">
  <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">i 指向的字符必须要能和 j 指向的字符匹配，其中 j 指向的可能是点匹配符。</span></p></li>
  <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若无法匹配，i++，即用 '*' 组合去匹配更长的一段字符串。</span></p></li>
 </ol>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 i 字符和 j 字符不相同，或者 i 已经遍历完了 s 字符串，同时 j 字符后面跟着一个 '*'的情况，只能用 '*'组合去表示一个空字符串，然后递归下去。</span></p></li>
</ol>
<h2 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">递归法二</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="color: rgb(102, 102, 102); font-size: 12pt;">上法是</span>从前往后进行递归地调用，现在从后往前地分析这个问题。例如：</span></p>
<pre><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s = "aaabcd"<br>p = "a*b.d"</span></p></pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp;&nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/FC/CgoB5l2Ie2GAFb2VAAB2VFYCpQA482.png">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现过程如下所示。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/1C/CgotOV2Ie2GAA1bPAGMu3IFkH1Y793.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p 字符串的最后一个字符 d 必须要和 s 字符串的最后一个字符相同，才能使 p 有可能与 s 匹配，那么当它们都相同的时候，问题规模也缩小。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p 字符串的最后一个字符不是 '*'，而是点号。它可以匹配 s 字符串里的任意一个字符，且它是最后一个，所以对应的就是 s 字符串里的 c，很明显互相匹配，继续缩小问题规模。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">同样，b 不是 '*'，比较它与 s 字符串的最后一个字符是否相同，是，则继续缩小问题规模。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">遇到 '*'，'*'可以表示一个空字符串，与前一个字符表示空字符串的时候，将问题变成了判断两个字符串是否匹配，其中，s 等于 aaa，而 p 是空字符串，很明显不能匹配。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用 a* 去表示一个 a。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p 的最后一个还是 '*'，用同样的策略。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">继续用 a* 去表示一个 a。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用 a* 去表示空字符串。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最后 s 和 p 都变成了空字符串，互相匹配。</span></p></li>
</ol>
<h3 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">主函数代码如下。</span></p>
<pre>boolean&nbsp;isMatch(String&nbsp;s,&nbsp;String&nbsp;p)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(s&nbsp;==&nbsp;null&nbsp;||&nbsp;p&nbsp;==&nbsp;null)&nbsp;return&nbsp;false;


&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;isMatch(s,&nbsp;s.length(),&nbsp;p,&nbsp;p.length());
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在主函数里，进行一些简单基础的判断，如果 s 和 p 有一个是 null，则返回 false。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">递归函数代码如下。</span></p>
<pre>boolean&nbsp;isMatch(String&nbsp;s,&nbsp;int&nbsp;i,&nbsp;String&nbsp;p,&nbsp;int&nbsp;j)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(j&nbsp;==&nbsp;0)&nbsp;return&nbsp;i&nbsp;==&nbsp;0;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(i&nbsp;==&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;j&nbsp;&gt;&nbsp;1&nbsp;&amp;&amp;&nbsp;p.charAt(j&nbsp;-&nbsp;1)&nbsp;==&nbsp;'*'&nbsp;&amp;&amp;&nbsp;isMatch(s,&nbsp;i,&nbsp;p,&nbsp;j&nbsp;-&nbsp;2);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(p.charAt(j&nbsp;-&nbsp;1)&nbsp;!=&nbsp;'*')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;isMatch(s.charAt(i&nbsp;-&nbsp;1),&nbsp;p.charAt(j&nbsp;-&nbsp;1))&nbsp;&amp;&amp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isMatch(s,&nbsp;i&nbsp;-&nbsp;1,&nbsp;p,&nbsp;j&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;&nbsp;isMatch(s,&nbsp;i,&nbsp;p,&nbsp;j&nbsp;-&nbsp;2)&nbsp;||&nbsp;isMatch(s,&nbsp;i&nbsp;-&nbsp;1,&nbsp;p,&nbsp;j)&nbsp;&amp;&amp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isMatch(s.charAt(i&nbsp;-&nbsp;1),&nbsp;p.charAt(j&nbsp;-&nbsp;2));
}


boolean&nbsp;isMatch(char&nbsp;a,&nbsp;char&nbsp;b)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;a&nbsp;==&nbsp;b&nbsp;||&nbsp;b&nbsp;==&nbsp;'.';
}</pre>

<ol style=" white-space: normal;">
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">递归函数的输入参数有四个，分别是字符串 s，当前字符串 s 的下标，字符串 p，以及字符串 p 的当前下标。由主函数可以看到，两个字符串的下标都是从最后一位开始。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若 p 字符串为空，并且如果 s 字符串也为空，就表示匹配。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 p 字符串不为空，而 s 字符串为空，如上例所示，当 s 为空字符串，而 p 等于 a*，此时只要 p 总是由 '*'组合构成，一定能满足匹配，否则不行。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若 p 的当前字符不是 '*'，判断当前的两个字符是否相等，如果相等，就递归地看前面的字符。</span></p></li>
 <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">否则，如果 p 的当前字符是 '*'：</span></p></li>
 <ol style="list-style-type: lower-alpha;">
  <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用 '*' 组合表示空字符串，看看是否能匹配；</span></p></li>
  <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用 '*' 组合表示一个字符，看看能否匹配。</span></p></li>
 </ol>
</ol>
<h2 style="white-space: normal;"></h2>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">动态规划法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">递归的方法比较好理解，但是容易造成重叠计算。为了避免重叠计算，可以用动态规划，自底向上地实现刚才的策略。</span></p>
<h3 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<ol style=" white-space: normal;">
 <ol style="list-style-type: lower-alpha;">
  <li><p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p></li>
 </ol>
</ol>
<pre>//&nbsp;分别用&nbsp;m&nbsp;和&nbsp;n&nbsp;表示&nbsp;s&nbsp;字符串和&nbsp;p&nbsp;字符串的长度
boolean&nbsp;isMatch(String&nbsp;s,&nbsp;String&nbsp;p)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;m&nbsp;=&nbsp;s.length(),&nbsp;n&nbsp;=&nbsp;p.length();


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个二维布尔矩阵&nbsp;dp
&nbsp;&nbsp;&nbsp;&nbsp;boolean[][]&nbsp;dp&nbsp;=&nbsp;new&nbsp;boolean[m&nbsp;+&nbsp;1][n + 1];

&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;当两个字符串的长度都为&nbsp;0，也就是空字符串的时候，它们互相匹配
&nbsp;&nbsp;&nbsp;&nbsp;dp[0][0]&nbsp;=&nbsp;true;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;1;&nbsp;j&nbsp;&lt;=&nbsp;n;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[0][j]&nbsp;=&nbsp;j&nbsp;&gt;&nbsp;1&nbsp;&amp;&amp;&nbsp;p.charAt(j&nbsp;-&nbsp;1)&nbsp;==&nbsp;'*'&nbsp;&amp;&amp;&nbsp;dp[0][j - 2];
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;1;&nbsp;i&nbsp;&lt;=&nbsp;m;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;1;&nbsp;j&nbsp;&lt;=&nbsp;n;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;p&nbsp;的当前字符不是&nbsp;'*'，判断当前的两个字符是否相等，如果相等，就看&nbsp;dp[i-1][j-1]&nbsp;的值，因为它保存了前一个匹配的结果
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(p.charAt(j&nbsp;-&nbsp;1)&nbsp;!=&nbsp;'*')&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j]&nbsp;=&nbsp;dp[i&nbsp;-&nbsp;1][j - 1]&nbsp;&amp;&amp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isMatch(s.charAt(i&nbsp;-&nbsp;1),&nbsp;p.charAt(j&nbsp;-&nbsp;1));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j]&nbsp;=&nbsp;dp[i][j - 2]&nbsp;||&nbsp;dp[i&nbsp;-&nbsp;1][j]&nbsp;&amp;&amp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isMatch(s.charAt(i&nbsp;-&nbsp;1),&nbsp;p.charAt(j&nbsp;-&nbsp;2));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;dp[m][n];
}

boolean&nbsp;isMatch(char&nbsp;a,&nbsp;char&nbsp;b)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;a&nbsp;==&nbsp;b&nbsp;||&nbsp;b&nbsp;==&nbsp;'.';
&nbsp;
}</pre>

<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; line-height: 1.7; font-size: 11pt; color: rgb(73, 73, 73);"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">注意：</span></p>
<ul style="">
 <li><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">初始化二维矩阵第一行的所有值时，当 s 字符串为空，对于 p 字符串的任何一个位置，要使到这个位置的子串能和空字符串匹配，要求该子串都是由一系列的 '*' 组合构成。</span></p></li>
 <li><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对二维矩阵填表，运用到的逻辑跟递归一摸一样。</span></p></li>
 <li><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">p 的当前字符不是 '*'，判断当前的两个字符是否相等。如果相等，就看&nbsp;dp[i-1][j-1]&nbsp;的值，因为它保存了前一个匹配的结果。</span></p></li>
 <li><p><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果 p 的当前字符是 '*'：</span></p></li>
 <ul style="list-style-type: square;">
  <li><p><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">用 '*' 组合表示空字符串，能否匹配，也就是</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;dp[i][j - 2]</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">；</span></p></li>
  <li><p><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">用 '*' 组合表示一个字符，能否匹配，也就是</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp;dp[i - 1][j]</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">。</span></p></li>
 </ul>
</ul>
<h3 style="white-space: normal;"><p style="line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">复杂度分析</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">运用动态规划，把时间复杂度控制在 O(n<sup>2</sup>)，而空间复杂度也是 O(n<sup>2</sup>)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">建议：LeetCode 上有一道跟这题十分类似的题目，第 44 题，通配符匹配。分析例题的思路，所运用的策略，以及代码的实现，都有很多非常相似的地方。大家一定要去做做看，举一反三才能加深印象。</span></p>
<p><br style="white-space: normal;"></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><br></p>

<h6 style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析二</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode 第 84 题：</span>给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1。求在该柱状图中，能够勾勒出来的矩形的最大面积。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">说明：下图是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: center; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaBmANhiBAAAvRVLSdAM365.png">&nbsp;&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入: [2,1,5,6,2,3]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出: 1</span></p>
<h2></h2>
<h6 style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路一：暴力法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">从暴力法开始寻找思路。既然要找出最大的面积，就把所有可能的面积都找出来，然后从中比较出最大的那个。如何找出所有的面积呢？</span></p>
<ol style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从左到右扫描一遍输入的数组。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">遇到每根柱子的时候，以它的高度作为当前矩形的高度。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">矩形的宽度从当前柱子出发一直延伸到左边和右边。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">一旦遇到了低于当前高度的柱子就停止。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">计算面积，统计所有面积里的最大值。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">具体的实现步骤如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaBqAT7fLAHGVT_G-HGE157.gif">&nbsp; &nbsp; &nbsp;</span></p>
<ol style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">第一根柱子高度是 2，当往右边扩展的时候，发现第二根柱子的高度为 1，要低于当前的高度，于是扩展结束，即以第一根柱子高度作为矩形高度，得到矩形面积是 2。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">第二根柱子，它的高度为 1，以它作为高度的矩形面积是 6。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">以 5 为高度的矩形面积是 10。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">以 6 为高度的矩形面积是 6。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">以 2 为高度的矩形面积是 8。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">以 3 作为高度的矩形面积为 3。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">由此，得到最大的面积是 10。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">该算法的时间复杂度是 O(n2)。</span></p>
<h2></h2>
<h6 style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路二：解法优化</span>&nbsp;</h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">以两个柱子的情况为例进行分析。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 不必急于计算以 2 为高度的矩形面积，把 2 暂时保存起来备用，因为一旦从开始就计算矩形面积的话，就是暴力法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaBqAXPBJAA5Vx5kRvrI712.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 遇到 1 的时候，由于 1 的高度低，造成以 2 为高度的矩形无法延伸到高度为 1 的柱子，即，可以计算高度为 2 的矩形面积。每当遇到一个下降的高度时，就可以开始计算以之前高度作为矩形高度的面积。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaBuAQ_G7AB8iyyFhsP8537.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. 遇到更高的高度时，也不急计算以 1 为高度的矩形面积，因为 5 的下一个是 6，面积还能继续扩大。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaBuAanh5ABOPEuDQKbE900.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">4. 再次遇到 2 时，按照之前的策略，可以计算以 6 为高度的矩形面积。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaByAHgaZABWZDxwJlTo840.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">5. 是否要计算以 5 作为高度的矩形面积呢？是的，因为 2 比 5 低，以 5 作为高度的矩形无法包含 2 这个点。该宽度如何计算呢？是不是就是 2 的下标减去 5 的下标就可以呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaByAQjMCAByIrvLjjAM248.gif">&nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">6. 当计算完高度为 6 的矩形面积时，立即知道下一个高度是 5，以及 5 所对应的下标，可以利用一个 stack 来帮助记录。（注意：此处在整个算法里都很重要。）</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; &nbsp;&nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaByAfZyzAABI-qF4lwQ735.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">7. 计算完了以 5 作为高度的矩形面积后，还剩下 1，由于 2 比 1 高，表明后面可能还有更高的点，而以 1 为高度的矩形还能扩展。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaB2ACxD_AC1iHvcGTv8971.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">8. 下一个比 2 还高，于是继续保留它在 stack 里。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaB2AS6txACaMXIPm9-I299.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">到这里，所有的柱子都遍历完了，如何处理剩下的 3 根柱子呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">以新的柱子高度为 0，由于 0 低于任何一根柱子的高度，那么对剩下的柱子计算，以它们的高度作为边的矩形的面积。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaB6AZDoqAB3_QEbtXrY350.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<ul style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">指针停留在下标为 6 的地方，堆栈里记录的是三根柱子的下标：5，4，1。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">跟之前计算其他柱子的情况一样，先将堆栈里的下标弹出，第一个弹出的是 5。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">然后比它矮的那根柱子的下标一定是堆栈目前顶端的那个，也就是 4。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">因此以 3 作为高度的矩形的宽度就是：i - 1 - 4 = 6 - 1 - 4 = 1，那么面积就是 3 x 1 = 3。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">剩下的 2 根柱子，方法同样，目前 stack 里的值是：4，1。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaB6AWUQNACIE9DZQPyI414.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">把下标 4 弹出，得知比这根柱子还要矮的柱子的下标一定是 stack 顶端的值，也就是 1。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">那么以高度 2 作为矩形高度的矩形宽度就是：i - 1 - 1 = 6 - 1 - 1 = 4，面积就是 2 x 4 = 8。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">最后处理剩下 1 的柱子。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaB6AMiybAByyazYRVgg510.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">将它弹出，发现此时堆栈为空。那以 1 作为高度的矩形的宽度是多少呢？很简单，就是 i，也就是 6。因为它一定是最矮的那个才会留到最后，那么它的宽度就应该是横跨整个区间。所以求得面积就是 6。</span></p>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<ol style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">一旦我们发现当前的高度要比堆栈顶端所记录的高度要矮，就可以开始对堆栈顶端记录的高度计算面积了。在这里，我们巧妙地处理了当 i 等于 n 时的情况。同时在这一步里，我们判断一下当前的面积是不是最大值。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">如果当前的高度比堆栈顶端所记录的高度要高，就压入堆栈。</span></p><p style="text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span></p><p style="text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"></span></p></li>
</ol>
<pre>//&nbsp;将输入数组的长度记为&nbsp;n，初始化最大面积&nbsp;max&nbsp;为&nbsp;0
int&nbsp;largestRectangleArea(int[]&nbsp;heights)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;heights.length,&nbsp;max&nbsp;=&nbsp;0;


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;定义一个堆栈&nbsp;stack&nbsp;用来辅助计算
&nbsp;&nbsp;&nbsp;&nbsp;Stack&lt;Integer&gt;&nbsp;stack&nbsp;=&nbsp;new&nbsp;Stack&lt;&gt;();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;从头开始扫描输入数组
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;=&nbsp;n;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!stack.isEmpty()&nbsp;&amp;&amp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(i&nbsp;==&nbsp;n&nbsp;||&nbsp;heights[i]&nbsp;&lt;&nbsp;heights[stack.peek()])
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;height&nbsp;=&nbsp;heights[stack.pop()];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;width&nbsp;=&nbsp;stack.isEmpty()&nbsp;?&nbsp;i&nbsp;:&nbsp;i&nbsp;-&nbsp;1&nbsp;-&nbsp;stack.peek();

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max&nbsp;=&nbsp;Math.max(max,&nbsp;width&nbsp;*&nbsp;height);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.push(i);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;返回面积最大值
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;max;
}</pre>

<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">复杂度分析</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度是 O(n)，因为从头到尾扫描了一遍数组，每个元素都被压入堆栈一次，弹出一次。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">空间复杂度是 O(n)，因为用了一个堆栈来保存各个元素的下标，最坏的情况就是各个高度按照从矮到高的顺序排列，需要将它们都压入堆栈。</span></p>
<h1></h1>
<h6 style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析三</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><span style="color: rgb(67, 67, 67);">LeetCode 第 28 题：</span>实现 strStr() 函数。给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回&nbsp;-1。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例 1</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入: haystack = "hello", needle = "ll"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出: 2</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解释："ll"出现在 haystack 第 2 个位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入: haystack = "aaaaa", needle = "bba"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输出: -1</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解释："bba"并不出现在 "aaaaa"里</span></p>
<h2></h2>
<h6 style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路一：暴力法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">实现：在一个字符串中找出某个字符串出现的位置，用暴力法来做是非常简单的，从头遍历一遍 haystack 字符串，每遍历到一个位置，就扫描一下，看看是不是等于 needle 字符串。举例说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">输入：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">haystack = "iloveleetcode"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">needle &nbsp; = "leetcode"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaB-AZrqFAIWMuevJfbs428.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">不断移动 needle，来对比是否在 haystack 中，一旦找到就返回它的位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：当 needle 是空字符串时，应当返回什么值呢？这是一个在面试中很好的问题。对于本题而言，当 needle 是空字符串时应当返回 0 。这与 C 语言的 strstr() 以及 &nbsp;Java 的 indexOf() 定义相符。</span></p>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">暴力法的代码实现比较简单，如下。</span></p>
<pre>int&nbsp;strStr(String&nbsp;haystack,&nbsp;String&nbsp;needle)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;0;&nbsp;;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(j&nbsp;==&nbsp;needle.length())&nbsp;return&nbsp;i;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(i&nbsp;+&nbsp;j&nbsp;==&nbsp;haystack.length())&nbsp;return&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(needle.charAt(j)&nbsp;!=&nbsp;haystack.charAt(i&nbsp;+&nbsp;j))&nbsp;break;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">复杂度分析</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假设 haystack 的字符串长度为 m，needle 字符串的长度为 n，那么暴力法的时间复杂度是 O(m×n)。</span></p>
<h2></h2>
<h6 style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">解题思路二：KMP</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">KMP（Knuth-Morris-Pratt）是由三人联合发表的一个算法，目的就是为了在一个字符串 haystack 中找出另外一个字符串 needle 出现的所有位置。它的核心思想是避免暴力法当中出现的不必要的比较。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">用维基百科中的例题说明。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">haystack = "ABC ABCDAB ABCDABCDABDE"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">needle &nbsp; = "ABCDABD"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaCCAEy-TABNB_IdI3Eg442.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法 1：暴力法，当比较到上图所示位置的时候，发现 D 和空格不一样。接下来，needle 往前挪动一小步，然后继续和 haystack 比较。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解法 2：KMP，直接让 needle 挪动到如上图所示的位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">此处有两个常见的问题：</span></p>
<ol style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">为什么 KMP 无需慢慢移动比较，可以跳跃式比较呢？不会错过一些可能性吗？</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如何能知道 needle 跳跃的位置呢？</span></p></li>
</ol>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LPS</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">为了说明这两个问题，必须先讲解 KMP 里的一个重要数据结构——最长的公共前缀和后缀，英文是 Longest Prefix and Suffix，简称 LPS。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LPS 其实是一个数组，记录了字符串从头开始到某个位置结束的一段字符串当中，公共前缀和后缀的最大长度。所谓公共前缀和后缀，就是说字符串的前缀等于后缀，并且，前缀和后缀不能是同一段字符串。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">以上题中 needle 字符串，它的 LPS 数组就是：{0, 0, 0, 0, 1, 2, 0}。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><span style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, sans-serif;">needle = "</span><span style="font-family: &quot;Microsoft YaHei&quot;, sans-serif;">ABCDABD</span><span style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, sans-serif;">"</span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LPS&nbsp; &nbsp; = {0000120}</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">LPS[0] = 0，表示字符串"A"的最长公共前缀和后缀的长度为 0。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">注意：虽然"A"的前缀和后缀都等于 A，但前缀和后缀不能是同一段字符串，因此，”A”的 LPS 为 0。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">LPS[1] = 0，表示字符串”AB”的最长公共前缀和后缀长度为 0。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因为它只有一个前缀 A 和后缀 B，并且它们不相等，因此 LPS 为 0。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">LPS[4] = 1，表示字符串 ABCDA 的最长公共前缀和后缀的长度为 1。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">该字符串有很多前缀和后缀，前缀有：A，AB，ABC，ABCD，后缀有：BCDA，CDA，DA，A，其中两个相同并且长度最长的就是 A ，所以 LPS 为 1。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">LPS[5] = 2，表示字符串 ABCDAB 的最长公共前缀和后缀的长度为 2。</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">该字符串有很多前缀和后缀，前缀有：A，AB，ABC，ABCD，ABCDA，后缀有：BCDAB，CDAB，DAB，AB，B，其中两个相同并且长度最长的就是 AB，所以 LPS 为 2。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">LPS 实现跳跃比较</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">那么，LPS 数组如何实现跳跃比较 haystack 和 needle 字符串呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaCCAJ39aAERYoGxb1p0088.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ol style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">haystack 里面的空格和 needle 里的 D 不相等时，在 needle 里，D 前面的字符串 ABCDAB 与 haystack 中对应的字符串是相等的。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">ABCDAB 的 LPS 为 2，即，对于 ABCDAB ，它最后两个字符一定与它最前面两个字符相等。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若把最前面的两个字符挪到最后两个字符的位置，可以保证 AB 位置绝对能和 haystack 配对。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">那么，为什么不需要去比较前面的位置？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例如：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaCGAZUF4AAAhUwmoEAc094.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例如：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaCGAJrCpAAAk60Qcsyw360.png"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因为没有必要。下面通过反证法来证明。将下图所示情况用抽象成为方块图形来表示。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaCGACDXcAB5wm3NTrb4729.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">其中红色的方块表示不相同的字符，分别对应 haystack 中的空格以及 needle 当中的 D 字符；而绿色的方块表示相同的最大前缀和后缀，对应字符串里的 AB。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; text-indent: 29.3333px;">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">现在，假设向右挪动了，使得 needle 能与 haystack 完美地匹配，如下所示，可以标出 haystack 与 needle 完美匹配时的关系。即，在 haystack 和 needle 里，有一段区间 A，它们是相同的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaCKAeEE4AI6KeO453eY927.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">那么，needle 里，红色方块前的一段区间其实和 needle 开头的一段区间是相同的，它们都是 A，如下所示。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaCOAJzQ0ACMA3QOrN2A725.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">即，红色方块前的 needle 字符串，A 是共同的前缀和后缀。而它比两个绿色的方块要长得多，这与之前定义的“两个绿色方块是最长的公共前缀和后缀”相互矛盾。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">因此，当知道两个绿色的方块就是最大的公共前缀和后缀时，可以放心地进行跳跃操作，而不必担心会错过完全匹配的情况发生。完美匹配不可能在跳跃的区间内发生。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">那么，具体在算法上如何进行跳跃操作呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaCOAcfWEAHw9WU7AYQY830.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<ol style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">j 指针指向红色方块的位置，needle 的字符与 haystack 的字符不一样。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">LPS[j - 1] = 2，即 j 指针前一个字符作为结尾时的最长公共前缀和后缀长度是 2，因此，只需要将 j 移动到 2 的位置即可，也就是 j = LPS[j - 1]。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; text-indent: 29.3333px; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">以上就是 KMP 算法的核心思想，下面来看代码如何实现。</span></p>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">假如已经求出了 LPS 数组，如何实现上述跳跃策略？代码实现如下。</span></p>
<pre>int&nbsp;strStr(String&nbsp;haystack,&nbsp;String&nbsp;needle)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;m&nbsp;=&nbsp;haystack.length();
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;needle.length();
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(n&nbsp;==&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int[]&nbsp;lps&nbsp;=&nbsp;getLPS(needle);
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i&nbsp;=&nbsp;0,&nbsp;j&nbsp;=&nbsp;0;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(i&nbsp;&lt;&nbsp;m)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(haystack.charAt(i)&nbsp;==&nbsp;needle.charAt(j))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;&nbsp;j++;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(j&nbsp;==&nbsp;n)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;i&nbsp;-&nbsp;n;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(j&nbsp;&gt;&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j&nbsp;=&nbsp;lps[j&nbsp;-&nbsp;1];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;-1;
}</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>代码解释</strong>：</span></p>
<ol style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">分别用变量 m 和 n 记录 haystack 字符串和 needle 字符串的长度。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若 n=0，返回 0，符合题目要求。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">求出 needle 的 LPS，即最长的公共前缀和后缀数组。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">分别定义两个指针 i 和 j，i 扫描 haystack，j 扫描 needle。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">进入循环体，直到 i 扫描完整个 haystack，若扫描完还没有发现 needle 在里面，就跳出循环。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在循环体里面，当发现 i 指针指向的字符与 j 指针指向的字符相等的时候，两个指针一起向前走一步，i++，j++。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若 j 已经扫描完了 needle 字符串，说明在 haystack 中找到了 needle，立即返回它在 haystack 中的起始位置。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若 i 指针指向的字符和 j 指针指向的字符不相同，进行跳跃操作，j = LPS[j - 1]，此处必须要判断 j 是否大于 0。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">j=0，表明此时 needle 的第一个字符就已经和 haystack 的字符不同，则对比 haystack 的下一个字符，所以 i++。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若没有在 haystack 中找到 needle，返回 -1。</span></p></li>
</ol>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">复杂度分析</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">KMP 算法需要 O(n) 的时间计算 LPS 数组，还需要 O(m) 的时间扫描一遍 haystack 字符串，整体的时间复杂度为 O(m + n)。这比暴力法快了很多。</span></p>
<h1></h1>
<h6 style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题三扩展</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如何求出 needle 字符串的最长公共前缀和后缀数组？</span></p>
<h2><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路一：暴力法</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>解法</strong>：检查字符串的每个位置。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>举例</strong>：若字符串长度为 m，先尝试比较长度为 m−1 的前缀的后缀，如果两者一样，就记录下来；如果不一样，就尝试长度为 m−2 的前缀和后缀。以此类推。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>复杂度</strong>：O(n2)。</span></p>
<h2><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">解题思路二</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>解法</strong>：对于给定的字符串 needle，用一个 i 指针从头到尾扫描一遍字符串，并且用一个叫 len 的变量来记录当前的最长公共前缀和后缀的长度。举例说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaCSATVZPACdhTz792dg446.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当 i 扫描到这个位置的时候，len=4，表明在 i 之前的字符串里，最长的前缀和后缀长度是 4，也就是那 4 个绿色的方块。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">现在 needle[i] 不等于 needle[4]，怎么计算 LPS[i] 呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">既然无法构成长度为5的最长前缀和后缀，那便尝试构成长度为 4，3，或者 2 的前缀和后缀，但做法并非像暴力法一样逐个尝试比较，而是通过 LPS[len - 1] 得知下一个最长的前缀和后缀的长度是什么。举例说明如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaCSAVpIQAFEf-VyP6-A314.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<ul style="">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">LPS[len - 1] 记录的是橘色字符串的最长的前缀和后缀，假如 LPS[len - 1]=3，那么前面 3 个字符和后面的 3 个字符相等</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">绿色的部分其实和橘色的部分相同。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">LPS[len - 1] 记录的其实是 i 指针之前的字符串里的第二长的公共前缀和后缀（最关键点）。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">更新 len = LPS[len - 1]，继续比较 needle[i] 和 &nbsp;needle[len]。</span></p></li>
</ul>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">代码实现</span></p></h3>
<pre>int[]&nbsp;getLPS(String&nbsp;str)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;初始化一个&nbsp;lps&nbsp;数组用来保存最终的结果
&nbsp;&nbsp;&nbsp;&nbsp;int[]&nbsp;lps&nbsp;=&nbsp;new&nbsp;int[str.length()];
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;lps&nbsp;的第一个值一定是&nbsp;0，即长度为&nbsp;1&nbsp;的字符串的最长公共前缀后缀的长度为&nbsp;0，直接从第二个位置遍历。并且，初始化当前最长的&nbsp;lps&nbsp;长度为&nbsp;0，用&nbsp;len&nbsp;变量记录下
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i&nbsp;=&nbsp;1,&nbsp;len&nbsp;=&nbsp;0;


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;指针&nbsp;i&nbsp;遍历整个输入字符串
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(i&nbsp;&lt;&nbsp;str.length())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;若&nbsp;i&nbsp;指针能延续前缀和后缀，则更新&nbsp;lps&nbsp;值为&nbsp;len+1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(str.charAt(i)&nbsp;==&nbsp;str.charAt(len))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lps[i++]&nbsp;=&nbsp;++len;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;否则，判断&nbsp;len&nbsp;是否大于&nbsp;0，尝试第二长的前缀和后缀，是否能继续延续下去/
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(len&nbsp;&gt;&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;len&nbsp;=&nbsp;lps[len&nbsp;-&nbsp;1];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;所有的前缀和后缀都不符合，则当前的&nbsp;lps&nbsp;为&nbsp;0，i++
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;return&nbsp;lps;
&nbsp;&nbsp;
}</pre>

<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">复杂度分析</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">时间复杂度为 O(n) ，这是一种比较高效的做法。</span></p>
<h3><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">举例说明</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">下面通过举例来加深印象。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">例题：needle 是 ADCADBADCADC。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaCWAYemSAGbI_2HuWFE739.gif"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 一开始，初始化 LPS 数组全部为 0。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">规定前缀和后缀不能是同一个字符串，所以从第二个字符开始扫描，此时 len = 0，i = 1。AD 字符串的最长公共前缀和后缀为 0，因为 A 不等于 D，所以 LPS[1] = 0。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaCaATxS8ABYXnYXhN1Y816.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 移动到 C。同样，对于 ADC ，最长的公共前缀和后缀也是 0，所以 LPS[2] = 0，此时，len 变量一直是 0。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaCaAEnHyACFGv5D5WL4879.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. 移动到 A，此时 i=3。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">对于字符串 ADCA，因为 needle[len] = needle[3]，所以执行代码 lps[i++] = ++len，也就是把 len+1 赋给 lps[i]，然后 i + 1，len + 1，表明对于字符串 ADCA，最长的公共前缀和后缀的长度为 1。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/04/CgotOV2IaCaAPe83ACKGclsUKCA865.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">4. 接下来到 D，此时 i = 4，len = 1。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">同样，由于 needle[len] 等于 needle[i]，都是字符 D，所以再次执行代码 lps[i++] = ++len，这样一来，lps[4] 就等于 2，表明对于字符串 ADCAD，最长的公共前缀和后缀长度是 2。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/90/E4/CgoB5l2IaCeAW6P4AEhZHBJ_UJQ849.gif">&nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">5. 接下来是 B，此时 i = 5，len = 2。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">needle[len] ='C'，而 needle[i] ='B'，两者不相等，同时，len 大于 0，将 len 修改为 lps[len - 1]，取出字符串 AD 的最长公共前缀和后缀的长度，也就是 0。当循环再次进行，needle[len] 仍不等于 neele[i]，因此对于 ADCADB ，最长的公共前缀后缀长度为 0。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><strong>建议</strong>：以上基本概括了 KMP 的算法思想和精髓，其实 KMP 的代码实现是很精妙的，建议大家不要去死记硬背，通过理解去帮助记忆。</span></p>
<h1></h1>
<h6 style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">结语</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这节课讲解了三道比较难的题目，其中正规表达式以及 KMP 算法是重中之重。</span></p>
<p><br></p>



## 高频真题讲解IV

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这节课继续来看几道面试中的难题：</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">回文对</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">至多包含 K 个不同字符的最长子串</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">接雨水 II</span></p></li>
</ul>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析一</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 16px;"><span style="color: rgb(67, 67, 67);">LeetCode &nbsp;第 336 题，回文对：</span>给定一组唯一的单词， 找出所有不同的索引对 (i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 1</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: ["abcd","dcba","lls","s","sssll"]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: [[0,1],[1,0],[3,2],[2,4]]&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: ["bat","tab","cat"]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: [[0,1],[1,0]]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 可拼接成的回文串为 ["battab","tabbat"]</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;"><span style="font-size: 12pt;">解题思路：</span>暴力法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">所谓回文，就是正读和反读都一样的字符串，例如"leetteel"。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">检查一个字符串是否是回文，方法如下。</span></p>
<ol style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">将给定的字符串翻转，然后跟原字符串对比，看是否相等。但空间复杂度为 O(n) 。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">定义两个指针 i、j，一个指向字符串的头，一个指向字符串的尾巴，同时从两头进行检查，一旦发现不相等就表明不是回文，一直检查到两个指针相遇为止。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">将上述方法 2 用代码实现如下。</span></p>
<pre>boolean&nbsp;isPalindrome(String&nbsp;word,&nbsp;int&nbsp;i,&nbsp;int&nbsp;j)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(i&nbsp;&lt;&nbsp;j)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(word.charAt(i++)&nbsp;!=&nbsp;word.charAt(j--))&nbsp;return&nbsp;false;
&nbsp;&nbsp;&nbsp;&nbsp;}


&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;
&nbsp;&nbsp;
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">代码非常简单，因此不作过多讲解。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">回到例题本身，用暴力法怎么解。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现方法：</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">先找出所有的两两组合</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对每种组合进行排查，看看哪种组合可以构成回文。</span></p><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p></li>
</ul>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">时间复杂度：</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">假设一共有 n 个单词，每个单词的平均长度为 k，两两组合，有 P(n, 2) = n×(n - 1) 种；</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对组合的字符串进行回文检查，需要 2k 的时间复杂度；</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最终的时间复杂度是：O(n2×k)。</span></p></li>
</ul>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">暴力法优化</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">暴力法需要检查哪些情况？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">进行回文检查的时候，根据两个字符串的长度不同的程度，假设组合字符串的长度分别为 k1、k2，那么会出现以下三种情况。</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">k1 = k2</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：字符串 s1 = "abcd"，字符串 s2 = "dcba"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4Q2AHWZiAAA5qCvSGLk571.png">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现：同时从两边进行检查，看看它们能否构成回文，构成回文的条件就是两个指针相遇，或者同时扫描完两个字符串。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">k1 &gt; k2</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：s1 = "abcdefe"，s2 = "dcba"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4Q2ATkxxAABJBdsgXhA725.png">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现：同时从两头进行检查，由于 s2 的长度短，那么 s2 首先会被遍历完毕，此时 s1 还剩下的部分必须要满足回文。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">k1 &lt; k2</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：s1 = "abcd"，s2 = "efedcba"</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4Q2AEHAWAABJfYeVV4k708.png">&nbsp; &nbsp; &nbsp; &nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; margin-left: 26px; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现：跟第二种情况类似，同时从两头进行检查，由于 s1 的长度短，s1 首先会被遍历完毕，此时 s2 还剩下的部分必须满足回文。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">暴力法如何优化？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">暴力法之所以那么慢，是因为它要对所有情况进行检查。而对于 s1 = "abcd" ，s1 + s2 的组合构成回文的一个条件就是，s2 的最后一个字符必须是 a，如果 k2&gt;=2，它最后两个字符一定是 ba。不满足条件的字符串，不需要理会。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">那么，如何能快速地知道哪些字符串以 a 结尾，哪些字符串以 ba 结尾呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果反看 s2 ，这个问题相当于，怎么能快速地找出所有以 a 开头或者以 ab 开头的字符串？第 2 节课里介绍的 Trie，正是快速查找以某个字符串开头的数据结构。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">注意：此处要对每个字符串反着构建 Trie。</span></p>
<h3 style="white-space: normal;"><p style="text-align: justify; line-height: 1.75em;"><strong><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">Trie</span></strong></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">一个 Trie 一般都是由很多个 TrieNode 节点构成的，最普通的 TrieNode 节点一般有以下的结构。</span></p>
<pre>class&nbsp;TrieNode&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;boolean&nbsp;isEnd;
&nbsp;&nbsp;&nbsp;&nbsp;HashMap&lt;Character,&nbsp;TrieNode&gt;&nbsp;children;


&nbsp;&nbsp;&nbsp;&nbsp;TrieNode()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isEnd&nbsp;=&nbsp;false;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;children&nbsp;=&nbsp;new&nbsp;HashMap&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">其中，</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">children：数组或者集合，罗列出每个分支当中包含的所有字符</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">isEnd：布尔值，表示该节点是否为某字符串的结尾</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">由上可知，Trie 是一种通过字符链接起来的树状结构，且 Trie 一定有一个根节点 root，它的 children 集合包含了所有字符串的开头那个字符。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：给定一系列字符串："ab”, "abc”, “abde", “bcd"，用 Trie 表示的结构如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4Q2AHbOfAABrqvMxUVU130.png">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">其中，</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">字符作为链接每个节点的边，这些字符也是哈希表里的 key。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这些 key 对应的 value 是节点，绿色的节点表示节点里的 isEnd 布尔值为 true，也就是这个节点表示了一个字符串的结束。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">要利用这个 Trie 来查找所有以 b 字符开头的字符串时，可以避开左边三个以 a 字母开头的字符串。</span></p></li>
</ul>
<h3 style="white-space: normal;"><p style="text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">构建 Tire</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">将给定的字符串变成 "ba”，"cba”，“edba"，“dcb"，它们其实就是之前的字符串的翻转。对它们逆序进行 Trie 的构建，也得出了相同的结构。为了能让给定的字符串能组合成回文，再添加两个字符串：”a“，”abc“，同时，把”dcb” 删除，Trie 变成了下面的结构。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp;</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; text-align: justify; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4Q2AGNocAABw4HvSobY774.png">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">就之前提到的三种情况来分析如何利用 Trie 判断合并两个字符串能否构成回文。基本上是同时遍历字符串和Trie。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">k1 = k2，即两个字符串的长度相同并且能够构成回文</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：s1 = “abc”，s2 = “cba”，s1+s2 = “abccba”。</span></p>
<ol style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从 s1 的第一个字符 a 开始，Trie 里有记录以 a 结尾的字符串，其他那些不是以 a 结尾的字符串不予考虑。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">第二个字符 b，那么从 a 节点开始，看看有没有以 b 作为键值 key 的节点，有，继续。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">第三个字符 c，在 Trie 里，从 b 指向的节点开始，看看有没有以 c 作为键值的节点，有，继续。那些不是以 c 作为键值的分支可以不必考虑。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">字符串遍历结束，在 Trie 里，当前节点是 c 指向的节点。由于该节点恰好表示字符串“cba”的结束，因此，得出两个字符串合在一起可以构成回文串。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">k1 &gt; k2</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4Q-AFUARAFdBFfNwj4s416.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px; text-align: justify; white-space: normal;"><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：s1 = “abc”，s2 = “ba” ，s1+s2 =“abcba“。</span></p>
<ol style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从 s1 的第一个字符 a 开始，能从 Trie 里找到 a，于是继续。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">字符 b，也能找到，并且 b 指向的节点是一个绿色节点，即从 Trie 里找到了字符”ba“。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">要能使 s1 + s2 构成回文，条件就是 s1 里剩下的部分也是回文，此时 s1 剩下的是字符 c，而字符 c 是回文，因此，”abc” 和 “ba”能构成回文串。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">k1 &lt; k2</span></p></li>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4RGAdPAxAGKOo26J4J8733.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px; text-align: justify; white-space: normal;"><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：s1 = “a”，s2 = “ba”，s1+s2 =”aba”。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">当 s1 遍历完毕后，Trie 来到了 b 节点，由于 b 也是回文，因此它们两个也能构成回文串。</span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对于情况一、三：</span></p>
<ol style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">s1 字符串一定会被遍历完毕</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">遍历完毕后，在 Trie 里所对应的节点</span></p></li>
</ol>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">是 s2 中的最后一个字符；</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">是 s2 的剩余字符</span></p></li>
 <ul style="list-style-type: square;">
  <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">只要该剩余字符本身是回文，就可以给这个节点添加一个数组，用来记录从该节点向后所有剩余能构成回文的字符串的下标即可。</span></p></li>
 </ul>
</ul>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">对于情况二：</span></p>
<ol style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">在 Trie 里，当遇到某个绿色节点，而它表示了某个字符串的结束，只要 s1 剩下的字符能构成回文即可。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">修改 isEnd，用 index 替代，来得到 Trie 里 s2 的下标。</span></p></li>
 <ol style="list-style-type: lower-alpha;">
  <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 index 为 -1 时，表示不是字符串的结束位置。</span></p></li>
  <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当是字符串的结束时，用 index 来记录输入字符串的下标即可。</span></p></li>
 </ol>
</ol>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">代码实现</span></h6>
<pre>//&nbsp;修改&nbsp;TrieNode&nbsp;结构，用&nbsp;index&nbsp;替换&nbsp;isEnd
class&nbsp;TrieNode&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;index;
&nbsp;&nbsp;&nbsp;&nbsp;List&lt;Integer&gt;&nbsp;palindromes;
&nbsp;&nbsp;&nbsp;&nbsp;HashMap&lt;Character,&nbsp;TrieNode&gt;&nbsp;children;


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;添加一个&nbsp;palindromes&nbsp;列表，用来记录从该节点往下的能构成回文的所有输入字符串的下标
&nbsp;&nbsp;&nbsp;&nbsp;TrieNode()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;-1;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;children&nbsp;=&nbsp;new&nbsp;HashMap&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;palindromes&nbsp;=&nbsp;new&nbsp;ArrayList&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">主函数代码如下。</span></p>
<pre>List&lt;List&lt;Integer&gt;&gt;&nbsp;palindromePairs(String[]&nbsp;words)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;List&lt;List&lt;Integer&gt;&gt;&nbsp;res&nbsp;=&nbsp;new&nbsp;ArrayList&lt;&gt;();&nbsp;//&nbsp;定义一个空的列表，用来记录找到的配对
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;TrieNode&nbsp;root&nbsp;=&nbsp;new&nbsp;TrieNode();&nbsp;//&nbsp;定义一个&nbsp;Trie&nbsp;的根节点&nbsp;root
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;words.length;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;addWord(root,&nbsp;words[i],&nbsp;i);
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;//&nbsp;创建&nbsp;Trie
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;words.length;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;search(words,&nbsp;i,&nbsp;root,&nbsp;res);
&nbsp;&nbsp;&nbsp;&nbsp;}//&nbsp;利用&nbsp;Trie，找出所有的配对


&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;res;
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">创建 Tire 如下。</span></p>
<pre>//&nbsp;创建&nbsp;Trie&nbsp;的时候，从每个字符串的末尾开始遍历
void&nbsp;addWord(TrieNode&nbsp;root,&nbsp;String&nbsp;word,&nbsp;int&nbsp;index)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;word.length()&nbsp;-&nbsp;1;&nbsp;i&nbsp;&gt;=&nbsp;0;&nbsp;i--)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;ch&nbsp;=&nbsp;word.charAt(i);


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;对于每个当前字符，如果它还没有被添加到&nbsp;children&nbsp;哈希表里，就创建一个新的节点&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!root.children.containsKey(ch))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;root.children.put(ch,&nbsp;new&nbsp;TrieNode());
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;若该字符串从头开始到当前位置能成为回文的话，把这个字符串的下标添加到这个&nbsp;Trie&nbsp;节点的回文列表里&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(isPalindrome(word,&nbsp;0,&nbsp;i))&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;root.palindromes.add(index);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;root&nbsp;=&nbsp;root.children.get(ch);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;当对该字符串创建完&nbsp;Trie&nbsp;之后，将字符串的下标添加到回文列表里，并且将它赋给&nbsp;index
&nbsp;&nbsp;&nbsp;&nbsp;root.palindromes.add(index);
&nbsp;&nbsp;&nbsp;&nbsp;root.index&nbsp;=&nbsp;index;
&nbsp;&nbsp;
}</pre>

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">若该字符串从头开始到当前位置能成为回文的话，把这个字符串的下标添加到这个 Trie 节点的回文列表里。例如，如果字符串是“aaaba”，由于我们从后面往前面遍历，当遍历到字符 b 的时候，发现 aaa 是回文，于是更新 b 所指向的那个节点，说该节点往下有一个字符串能构成回文。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">处理查找如下。</span></p>
<pre>//&nbsp;处理查找，从头遍历每个字符串，然后从&nbsp;Trie&nbsp;里寻找匹配的字符串
void&nbsp;search(String[]&nbsp;words,&nbsp;int&nbsp;i,&nbsp;TrieNode&nbsp;root,&nbsp;List&lt;List&lt;Integer&gt;&gt;&nbsp;res)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;k1&nbsp;&gt;&nbsp;k2，且&nbsp;s1&nbsp;剩下的字符能构成回文，就把这对组合添加到结果中
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;k1=k2&nbsp;或&nbsp;k1&lt;k2，只需要把回文列表里的字符串都和&nbsp;s1&nbsp;组合即可&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;0;&nbsp;j&nbsp;&lt;&nbsp;words[i].length();&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(root.index&nbsp;&gt;=&nbsp;0&nbsp;&amp;&amp;&nbsp;root.index&nbsp;!=&nbsp;i&nbsp;&amp;&amp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isPalindrome(words[i],&nbsp;j,&nbsp;words[i].length()&nbsp;-&nbsp;1))&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.add(Arrays.asList(i,&nbsp;root.index));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;root&nbsp;=&nbsp;root.children.get(words[i].charAt(j));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(root&nbsp;==&nbsp;null)&nbsp;return;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;:&nbsp;root.palindromes)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(i&nbsp;==&nbsp;j)&nbsp;continue;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.add(Arrays.asList(i,&nbsp;j));
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">复杂度分析</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">利用 Trie，在创建和查找的过程中，最多会遇到 n×k 个节点，而且会进行回文检查，所以整体的时间复杂度是：O(n×k×k)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果字符串的字符个数是在一定范围之内的，那么这个问题就可以优化成一个近乎于线性问题了。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析二</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="font-size: 18px; color: rgb(67, 67, 67);">LeetCode 第 340 题：</span>给定一个字符串 s ，找出至多包含 k 个不同字符的最长子串 T。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 1</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: s = "eceba", k = 2</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: 3</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 则 T 为 "ece"，所以长度为 3。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><strong>示例 2</strong></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输入: s = "aa", k = 1</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">输出: 2</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解释: 则 T 为 "aa"，所以长度为 2。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路：暴力法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">思路：找出所有的子串，然后逐一检查是否最多包含 k 个不同的字符。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现：用一个哈希表或者哈希集合去统计。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">复杂度：O(n^2)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">第 8 课讲解了一道 LeetCode 的题目，给定一个字符串，找出无重复字符的最长子串。当时提出了一种比较聪明的办法，能够在 O(n) 的时间里找到答案。上述例题其实是它的另外一种扩展，可以运用相似的策略来进行。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：s = “eceba”，k = 2。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">实现过程如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4RGActCuAACWTDVjmS4562.png">&nbsp; &nbsp; &nbsp; &nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用两个快慢指针：i 和 j，i 是慢指针，j 是快指针。一开始，两个指针都指向字符串的开头。另外，还需要一个哈希表来统计每个字符出现的个数，同时用来统计不同字符的个数。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4RGAIz3YAACUEV4BZ10058.png">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 每次将快指针指向的字符添加到哈希表中，统计它出现的次数。第一个字符是 e，加入到 map 中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4RKAYjhXAA248QeqTy0883.gif">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. map 的大小为 1，表明到目前为止出现了一个字符。由于 map 的大小还没有超过 k，快指针向前移动一步。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4RKAB20KAA0Y_xJpZGc219.gif">&nbsp; &nbsp; &nbsp; &nbsp;</span></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">3.&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">j 指向的字符是 c，同样统计到 map 中，此时 map 的大小为 2，也没有超过 k，快指针继续移动。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4RKAQZMoAACUJa2fTUI207.png">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">4. 当前 j 指向的字符是 e，现在 e 出现了 2 次，但是 map 的大小还是 2，表明到目前为止只看到两个不同的字符，即 e 和 c。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4ROAXs2mABP3Qvxxwgc796.gif">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">5. 继续移动 j 指针，出现了新的字符 b，加入到 map 中。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4ROABmg9ACHl6sZ0cUE027.gif" style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px; text-align: justify; white-space: normal;"><span style="font-size: 18px;">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">6. 此时 map 的大小为 3，已经超过了 2，于是慢指针开始删除字符，目的是为了控制住 map 的大小不超过 2。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4RSAS2V0AAwyhXeaga4800.gif">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">7. 当把第一个字符删除的时候，在 map 里更新 e 字符的计数，但是整个 map 的大小还是等于 3，继续相同的操作。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4RSAP5kkABVxWpINXZU330.gif">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">8. c 的个数只有一个，直接把它从 map 里删除掉。现在 map 的大小恢复正常，继续移动快指针。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4RWAEvZNAB6BcQzB1BA923.gif">&nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">9. 当把 a 添加到 map 里后，map 的大小又超过了 2，于是移动慢指针，把它指向的字符从 map 中删除掉。</span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">10. 结束循环。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">代码实现</span></h6>
<ul style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">初始化一个哈希表 map，用来统计所出现了的不同字符。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用 max 变量记录最长的子串，其中子串最多包含 k 个不同的字符。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">用快慢指针遍历字符串。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">将快指针指向的字符加入到 map 中，统计字符出现的次数。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">如果发现 map 的大小超过了 k，那么就得开始不断地将慢指针所指向的字符从 map 里清除掉。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">首先获取当前慢指针指向的字符。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">将它在map中的计数减一。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">一旦它的统计次数变成了 0，就可以把它从 map 中删掉了。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">接下来，慢指针继续往前走。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当 map 的大小恢复正常了，统计一下当前子串的长度。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最后返回最大的子串长度。</span></p></li>
</ul>
<pre>int&nbsp;lengthOfLongestSubstringKDistinct(String&nbsp;s,&nbsp;int&nbsp;k)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;HashMap&lt;Character,&nbsp;Integer&gt;&nbsp;map&nbsp;=&nbsp;new&nbsp;HashMap&lt;&gt;();
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;max&nbsp;=&nbsp;0;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0,&nbsp;j&nbsp;=&nbsp;0;&nbsp;j&nbsp;&lt;&nbsp;s.length();&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;cj&nbsp;=&nbsp;s.charAt(j);
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Step&nbsp;1.&nbsp;count&nbsp;the&nbsp;character
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map.put(cj,&nbsp;map.getOrDefault(cj,&nbsp;0)&nbsp;+&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Step&nbsp;2.&nbsp;clean&nbsp;up&nbsp;the&nbsp;map&nbsp;if&nbsp;condition&nbsp;doesn't&nbsp;match
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(map.size()&nbsp;&gt;&nbsp;k)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char&nbsp;ci&nbsp;=&nbsp;s.charAt(i);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map.put(ci,&nbsp;map.get(ci)&nbsp;-&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(map.get(ci)&nbsp;==&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map.remove(ci);&nbsp;//&nbsp;that&nbsp;character&nbsp;count&nbsp;has&nbsp;become&nbsp;0
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;
&nbsp;&nbsp;&nbsp;&nbsp;}


&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Step&nbsp;3.&nbsp;condition&nbsp;matched,&nbsp;now&nbsp;update&nbsp;the&nbsp;result
&nbsp;&nbsp;&nbsp;&nbsp;max&nbsp;=&nbsp;Math.max(max,&nbsp;j&nbsp;-&nbsp;i&nbsp;+&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;max;
}</pre>

<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">复杂度分析</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">快慢指针遍历字符串一遍，时间复杂度为 O(n)。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">运用了一个 map来作统计，空间复杂度为 O(n)。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">例题分析三</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 16px;"><span style="color: rgb(67, 67, 67);">LeetCode 第 407 题：</span>给定一个 m x n 的矩阵，其中的值均为正整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">说明：m 和 n 都是小于 110 的整数。每一个单位的高度都大于 0 且小于 20000。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">示例：</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">给出如下 3x6 的高度图:</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">[</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;&nbsp;[1,4,3,1,3,2],</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;&nbsp;[3,2,1,3,2,4],</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;&nbsp;[2,3,3,2,3,1]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">]</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">返回 4。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4ReAeHXlAIqi3-dedKM816.gif">&nbsp; &nbsp; &nbsp;</span></span></p>
<ol style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">下雨前的高度图 [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">下雨后，雨水将会被存储在这些方块中，总的接雨水量是 4。</span></p></li>
</ol>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">解题思路一：从内向外</span></h6>
<h3 style="white-space: normal;"><p style="text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">基本情况</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：假如有一个点高度是 0，而它四周的柱子的高度分别是 1，2，3，4。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4ReAKOakAABLZGpg3no849.png"></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解法：中间的那个位置最多能接高度为 1 的水，因为它的四周最矮的柱子是 1。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<h3 style="white-space: normal;"><p style="text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">扩展情况</span></p></h3>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">举例：假设现在 0 的周围是如下情况，那么 0 那个位置能接水的高度还是 1 吗？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4RiAE6xSAABpFZMq9Kc568.png">&nbsp; &nbsp;&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">答案应该是 4。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">总结思路：对于每个点，都要不断地往外去寻找那个高过自己的最矮的柱子。假设在平面上，一共有 n 个点，按照这样的算法去计算所有的点的接水高度，复杂度是 O(n^3)。</span></p>
<h2 style="white-space: normal;"><p style="text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">解题思路二：从外向内</span></p></h2>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">为了提高效率，采用“农村包围城市”的策略，从外面往里面进行计算。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">者是因为，每个点都必须找到最外围的高度，否则无法确定它能接多少雨水。既然如此，为什么不从最外面开始呢？即，每一次我们都从外面最矮的开始，慢慢地往里面计算。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">以上述例子说明。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/51/CgoB5l2I4RiAR15vAACREQ7D-94461.png">&nbsp; &nbsp; &nbsp; &nbsp;</span></span></p>
<p style="white-space: normal;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 18px;"><img src="http://s0.lgstatic.com/i/image2/M01/91/71/CgotOV2I4RmAE6UaADwhl85qEAo165.gif">&nbsp;&nbsp;</span></span></p>
<ol style=" white-space: normal;">
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最外围开始，而最外围的方块无法承载雨水。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">从最外围的高度中选择最矮的柱子，先对它的邻居进行处理。这是因为决定能够接多少雨水并不是由周围最高的柱子决定，而是由最矮的决定。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">高度 4 是最矮的，于是对其做 BFS，它的邻居是高度为 2 的方块。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">由于 2 小于 4，2 的位置能够接纳高度为 2 的雨水，于是这个位置上的高度就变成了 4。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">还是从最矮的点出发，还是 4，它的邻居是 0，于是 0 所能接的雨水高度就是 4。</span></p></li>
 <li><p style="text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">还是 4 是最矮，可以更新它周围的点在接了雨水后的高度。</span></p></li>
</ol>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">那么，如何快速知道接下来哪个高度最矮呢？可以用优先队列来提高速度。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">代码实现</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"><span style="color: rgb(102, 102, 102); font-size: 12pt;">代码实现如下，</span>为了配合优先队列的操作，定义一个 Cell 类，用来保存每个方块的坐标以及接了雨水后的高度。</span></p>
<pre>class&nbsp;Cell&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;row;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;col;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;height;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;Cell(int&nbsp;row,&nbsp;int&nbsp;col,&nbsp;int&nbsp;height)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.row&nbsp;=&nbsp;row;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.col&nbsp;=&nbsp;col;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.height&nbsp;=&nbsp;height;
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">首先对输入进行一些基本的判断。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">用变量 m 和 n 分别表示输入矩阵的行数和列数。定义一个优先队列或者最小堆，按照每个方块接雨水后的高度排列。初始化优先队列的时候，把矩形的外围四个边上的方块都加入到优先队列中。</span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">进入 while 循环，开始进行 BFS。</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">每次，从优先队列中取出高度最矮的方块。从四个方向扩散。该方向上的邻居方块能接多少雨水，取决于它是否低于当前的方块了。同时，将新方块加入到优先队列中。</span></p>
<p style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">最后返回承接雨水的总量。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);"></span></p>
<pre>public&nbsp;int&nbsp;trapRainWater(int[][]&nbsp;heights)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Sanity&nbsp;check
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(heights&nbsp;==&nbsp;null&nbsp;||&nbsp;heights.length&nbsp;==&nbsp;0&nbsp;||&nbsp;heights[0].length&nbsp;==&nbsp;0)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;m&nbsp;=&nbsp;heights.length;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;n&nbsp;=&nbsp;heights[0].length;
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;PriorityQueue&lt;Cell&gt;&nbsp;queue&nbsp;=&nbsp;new&nbsp;PriorityQueue(new&nbsp;Comparator&lt;Cell&gt;()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;int&nbsp;compare(Cell&nbsp;a,&nbsp;Cell&nbsp;b)&nbsp;{&nbsp;return&nbsp;a.height&nbsp;-&nbsp;b.height;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;});
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;boolean[][]&nbsp;visited&nbsp;=&nbsp;new&nbsp;boolean[m][n];
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Initially,&nbsp;add&nbsp;all&nbsp;the&nbsp;Cells&nbsp;which&nbsp;are&nbsp;on&nbsp;borders&nbsp;to&nbsp;the&nbsp;queue.
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;m;&nbsp;i++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visited[i][0]&nbsp;=&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visited[i][n&nbsp;-&nbsp;1]&nbsp;=&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.offer(new&nbsp;Cell(i,&nbsp;0,&nbsp;heights[i][0]));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.offer(new&nbsp;Cell(i,&nbsp;n&nbsp;-&nbsp;1,&nbsp;heights[i][n&nbsp;-&nbsp;1]));
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;j&nbsp;=&nbsp;0;&nbsp;j&nbsp;&lt;&nbsp;n;&nbsp;j++)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visited[0][j]&nbsp;=&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visited[m&nbsp;-&nbsp;1][j]&nbsp;=&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.offer(new&nbsp;Cell(0,&nbsp;j,&nbsp;heights[0][j]));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.offer(new&nbsp;Cell(m&nbsp;-&nbsp;1,&nbsp;j,&nbsp;heights[m&nbsp;-&nbsp;1][j]));
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;From&nbsp;the&nbsp;borders,&nbsp;pick&nbsp;the&nbsp;shortest&nbsp;cell&nbsp;visited&nbsp;and&nbsp;check&nbsp;its&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;neighbors:
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;If&nbsp;the&nbsp;neighbor&nbsp;is&nbsp;shorter,&nbsp;collect&nbsp;the&nbsp;water&nbsp;it&nbsp;can&nbsp;trap&nbsp;and&nbsp;update&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;its&nbsp;height&nbsp;as&nbsp;its&nbsp;height&nbsp;plus&nbsp;the&nbsp;water&nbsp;trapped.
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Add&nbsp;all&nbsp;its&nbsp;neighbors&nbsp;to&nbsp;the&nbsp;queue.
&nbsp;&nbsp;&nbsp;&nbsp;int[][]&nbsp;dirs&nbsp;=&nbsp;{{-1,&nbsp;0},&nbsp;{1,&nbsp;0},&nbsp;{0,&nbsp;-1},&nbsp;{0,&nbsp;1}};
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;total&nbsp;=&nbsp;0;


&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;(!queue.isEmpty())&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cell&nbsp;cell&nbsp;=&nbsp;queue.poll();

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int[]&nbsp;dir&nbsp;:&nbsp;dirs)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;row&nbsp;=&nbsp;cell.row&nbsp;+&nbsp;dir[0];
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;col&nbsp;=&nbsp;cell.col&nbsp;+&nbsp;dir[1];

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(row&nbsp;&gt;=&nbsp;0&nbsp;&amp;&amp;&nbsp;row&nbsp;&lt;&nbsp;m&nbsp;&amp;&amp;&nbsp;col&nbsp;&gt;=&nbsp;0&nbsp;&amp;&amp;&nbsp;col&nbsp;&lt;&nbsp;n&nbsp;&amp;&amp;&nbsp;!visited[row][col])
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visited[row][col]&nbsp;=&nbsp;true;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;+=&nbsp;Math.max(0,&nbsp;cell.height&nbsp;-&nbsp;heights[row][col]);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.offer(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new&nbsp;Cell(row,&nbsp;col,&nbsp;Math.max(heights[row][col],&nbsp;cell.height))
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;total;
&nbsp;&nbsp;
}</pre>

<h2 style="white-space: normal;"></h2>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">复杂度分析</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">假设一共有 m 行 n 列，那么一共有 m×n 个方块。对于每个方块，都有可能会进行优先队列的操作，而优先队列的大小为 m + n，加上初始化优先队列的操作时间，因此，整体的时间复杂度为&nbsp;</span><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">O(m + n) + O(m×n×log(m + n)) = O(m×n×log(m + n))。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">由上可知，将复杂度下降了一个维度。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">建议：对于这种在 BFS 中运用“农村包围城市”的策略，LeetCode 上还有一道题，第 417 题，太平洋大西洋水流问题，建议大家课后去试试。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="white-space: normal; text-align: justify; line-height: 1.75em;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">结语</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">这节课讲了三道比较难想的题目，至此已经把所有关于数据结构、算法、以及相关的题目做了讲解，掌握好我们课上讲过的知识点，一定会对你的面试准备有很大的帮助。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">当然，要能在面试中取得理想的发挥，还是要看平时的练习是否足够，不光在数量上，更要在质量上严格要求自己。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">下节课将会分享一些面试准备中的方法和技巧。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); text-align: justify; line-height: 1.75em;"><span style="font-size: 16px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p><br></p>

## 彩蛋

<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在这节课里，我想通过对刷题、简历、面试这几方面的探讨，跟大家分享自己在面试准备过程中的切身体会和经验总结，希望能对大家有所帮助。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">刷题</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">刷题是必不可少的环节。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">无论你是刚刚毕业的计算机系的学生，还是已经有了很多年工作经验的工程师，你即将要面对的是高强度的面试。每个公司平均都有好几轮技术面试，包括电话面试和现场面试，每轮面试的时间是 45 分钟到 1 个小时，除去聊天谈话的时间，每一轮留给你的时间大概就是 30 分钟，要能拿到优秀的结果，一般都必须解答出两个算法题，而你要面试的公司可能不止一家。那么，要让自己始终保持良好的水准，没有一个强化训练的辅助，你是很难过关的，因此刷题就是必不可少的环节。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">但是在刷题之前，必须要先弄清楚一个问题：你要选择什么编程语言？</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">选择编程语言</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">这往往取决于你的求职岗位是什么。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如果你要做一名前端的网络工程师，那么你必须要能熟练地用 JavaScript 去解算法题。如果你要做一名后端的工程师，那么可以选择的就很多了，其中 Java，Python 和 C++ 都是首选。如果你想要做一名数据分析工程师或者涉及机器学习和人工智能方向的，Pyhton 是不二选择。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">我个人在刚开始刷题的时候用的是 Java，虽然我平时的工作并不用它，但是我发现，用 Java 刷题有几个好处。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. Java 是强类型语言，它能帮助我更好地理解输入输出的要求，对于每个变量的类型我都要清楚。</span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. Java 提供丰富的类库，比如 Deque、PriorityQueue、LinkedList、Stack 等，有了这些，我可以更加专注于对算法本身的思考，而不用考虑如何去实现这些数据结构。这些库拿来用就好，节省了我很多时间。</span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. LeetCode 上的很多题目都有 Java 的解法，如果一道题目我做不出来，就会看看 LeetCode 的解法，比较方便。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">后来我明确地知道自己要做一名前端的网络工程师，在决定跳槽去大厂的时候，不得不用 JavaScript 去重新刷题，这样一来，我浪费了不少时间。所以在选择语言的时候，多考虑自己的求职方向和岗位要求。我的方法是大量联系大厂的招聘专员，获取专业的建议。</span></p>
<h2 style="white-space: normal;"></h2>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">刷题方法</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">选择好了编程语言后，接下来要考虑的就是怎么合理地刷题了。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">现在 LeetCode 上面有上千道题目，究竟要刷多少道题才行呢？其实最关键的不是量的问题，而是质的问题，而且由时间决定。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">首先，根据自己平时的刷题速度，预留足够的刷题时间。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">我在刷题的时候，会给自己至少三个月的时间专心刷题，周一到周五每晚分配 2 个小时，周末也会刷。有时候由于要兼顾工作，平时晚上没有太多时间，我就会多留点时间到周末，把平时没有刷的题在周末补回来。根据平时的刷题速度，我可以计算出在这三个月的时间内，自己能一共做多少题。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">然后，刷题时可以有选择性地分类做题。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">接下来，我按照 LeetCode 的题目分类去做。先做树的题目，然后是图论，因为图论可以看作是树的一种扩展，然后是递归、回溯，之后是 DFS、BFS，然后是动态规划，最后是字符串和数组。分类刷题有如下几个好处。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">1. 能有效地巩固知识点。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">2. 帮助整理解题的思路和归纳方法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">3. 能有效地提高解题的速度。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">另外，要练习如何在白板上写代码。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">很多大厂都要求你在白板上写代码，大家不要小看了这点，很多人都认为用电脑做了几百道题之后，还怕在白板上写代码么？在白板上写代码的感觉跟敲键盘是完全不同的，有几点需要注意。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">1. 字迹要清晰。这样一来面试官才能很好地跟你探讨代码，更重要的是，面试官要记录下你写的代码，然后原封不动地递交给招聘委员会的成员或者其他人审核，如果因为字迹不清导致记录失真就很不好了。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">2. 间距要把握好。有些白板并不大，要能够在一块小白板上挤下很多代码是不可能的，这就要看你如何规划代码的书写了，这些都要通过不断地练习。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">3. 思路清晰。写白板，是你和面试官沟通的一个重要环节，你的任务是要清晰地展现自己的思路，将它们转变为代码，并且，你要确保面试官能跟上你的节奏。如果你东写一点函数，西写一点结构定义，那就会很凌乱。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">锻炼写白板的能力，最好的方法就是找一块白板，在它上面练习。一般这个可以在你拥有了一定的刷题量的基础上进行，不必一开始就这样练习。另外，也可以在纸上练习，把纸想象成白板，也能达到很不错的效果，尤其对锻炼清晰的笔迹有很大的帮助。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">为了避免遗忘，养成整理回顾的习惯。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">刷题的时候，会出现一种情况，之前刷过的题目一下就忘记了。要克服这种情况的出现，我用下面的办法。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">1. 周末的时候回顾一下这一周做过的题目，主要是整理思路。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">2. 把这周里出现的难啃的题目单独拿出来，记录到难题笔记里，反复看。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">3. 刷题的时候，尽量把思路理清，而不是记代码。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">最后，一定要把自己刷过的题目和最好的解法写下来。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">我的方法是写到 GitHub 上，这样可以帮助我反复查阅。如果大家有兴趣，可以到我的 GitHub 上看看我的 JavaScript 刷题详解，链接如下。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><br></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><a>https://github.com/jeantimex/javascript-problems-and-solutions</a></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">以上就是我对刷题的一些经验。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 18px;">简历</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">简历就是你的门面，好的简历能让你在众多的求职者中脱颖而出。很多公司的职位都是很有限的，如果招聘人员能够快速准确地从你的简历里找出他们想要的东西，比如你的技术，经验，或者研究成果等，那么你就会有更大地机会进入到面试的环节，另外，最重要的一点，想一想你为了能面试这家公司，付出了那么多的心血去刷题，最后因为简历没能被看上而与机会失之交臂，那是多么多么的不应该啊！可以说，好的简历是打开面试机会的大门。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">怎么样去写好一份简历呢？</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">一、要有针对性</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">你的简历必须要凸显出你才是适合这个职务的不二人选。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">每个职务的招聘一般都会有一些基本的要求，比如某个职务要招的是前端网络工程师，要求有 5 年以上的工作经验，精通 JavaScript，HTML5，CSS3，熟悉 React 框架等，那么你的简历必须要想办法体现出你能满足上面的基本要求。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">可以通过你的工作履历表来体现出你有 5 年以上的工作经验，通过罗列出与前端相关的技术名词作为你所拥有和掌握的技术来体现你适合这个岗位的技术需求。有些人既懂得 Java，SQL，也懂得 JavaScript，但是在简历当中却把 JavaScript 罗列在了后面，有时候会让人觉得 JavaScript 也许并不是你的强项，也许你更适合做后端的工程师。换句话说，你的简历必须要能投其所好。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">二、写好工作履历</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">招聘人员会把大部分时间花在阅读你的工作履历上。对于一个要谋求软件工程师职务的人的简历，必须要做到以下几点。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">1. 对于以往的每一份工作，都必须写明公司的名称，起始时间和终止时间。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">2. 针对每份工作，言简意赅地罗列出自己做过的项目，以及你在项目中扮演的角色。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="color: rgb(63, 63, 63); font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px;">3. 最好能体现出每个项目最终的结果以及所带来的影响。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">在罗列项目的时候，最好能写明，你在这个项目中扮演的角色是什么，采用了什么样架构，使用了什么编程语言，解决了什么问题，达到了什么效果或者产生了什么样的影响。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">三、控制页数</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">大厂的招聘人员，一般都会在每天分配出固定的时间来审阅大量的简历，你的简历一般都是以电子版的形式存储在系统中，招聘人员通过关键字搜索来找出合适的简历，然后加以阅读。通常，你的简历最好不要超过两页，最好能控制在一页。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63); font-size: 18px;">面试</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当你拿到面试通知的时候，离成功就差最后一步了，只需要你在面试中好好表现，发挥出你的水平。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">面试不光是脑力活，同时也是体力活，如何让你的脑力和体力都能跟上高强度的大厂技术面试呢？一种比较行之有效的方法就是多拿一些中小型公司练手。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">中小型公司有时候比较倾向于考察你的经验，这是一个锻炼你跟面试官交流经验的绝佳机会，更重要的是，通过这些练手，能让你更好地梳理自己的技术经验，总结出适合你自己的交谈风格，这样，当你在大厂里被问到工作经验相关的问题时，就能脱口而出，而且条理清晰，这些其实跟刷题一样，都是要通过不断地练习的。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">另外，中小型公司也会考察算法题，但是难度一般来说不会特别难，这是一个检验你算法和数据结构知识水平以及能不能写出高质量代码的难得的训练机会。有些中小型公司的技术面试也是出了名的难，如果你在这些面试中失败了，这是好事，你要从中吸取教训，把答得不好的题反复思考一下，在哪里跌倒就在哪里爬起来。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">总之，通过一些真刀真枪地实战，可以帮助你迅速地调整面试的状态，记住，你的最终目标是你心仪的公司，不要被中间的一两个失利的战斗影响到自己，找出问题所在，为下一个面试做好准备。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">下面我想说一下现场面试，现场面试真正要考察的是下面几个方面。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">1. 你的技术水平够不够硬。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">也就是说，你能不能在 30 分钟之类写出一道简单的题目以及一道中等甚至更难的题目。如果你的知识点不够牢固，写题的速度不够快，是非常难过这关的。但是，只要你努力刷题，一定会有好的结果。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">2. 你分析问题的能力。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">当面试官给你出问题的时候，他最希望的，并不是看到你拿到题目立即写出答案，而是希望你能跟他交流，把你的想法说明白。就好比你和面试官是同事，你们在一起讨论问题一样，只不过他对这个问题早已有了自己的想法，他想听听你的意见，说不定你的方法更好。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">3. 你将思想变为代码的能力。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">如果你和面试官的交流过程中，能始终呈现出一种状态，迅速地将自己的思考转变为代码，然后清晰地写在白板上。就算你不能完美地写出一道题目的答案，我相信面试官也一定会满意的，因为这要比那些只能夸夸其谈而写不出代码的人要强太多。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);"><br></span></p>
<p style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(63, 63, 63);">4. 检查和分析代码的能力。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">一般在你写出了代码后，面试官会让你举几种情况来考虑看看你的算法是否行得通。最好的做法就是你自己要主动地提出来，然后给出几个比较有代表性的测试输入，然后过一遍你的程序，分析出结果。最后，一定要去分析一下时间和空间复杂度。</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">以上就是我的一些面试经验。</span></p>
<h1 style="white-space: normal;"></h1>
<h6 style="line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; color: rgb(0, 0, 0); font-size: 18px;">结语</span></h6>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">到这里，我们的算法课正式结束。老话说，“书山有路勤为径，学海无涯苦作舟“，衷心地祝大家都能如愿以偿，找到自己最喜欢的工作！</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">谢谢对这门课的支持，再见!</span></p>
<p style="margin-top: 0pt; margin-bottom: 0pt; white-space: normal; font-size: 11pt; color: rgb(73, 73, 73); line-height: 1.75em; text-align: justify;"><span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;; font-size: 16px; color: rgb(63, 63, 63);">&nbsp;</span></p>
<p><br style="white-space: normal;"></p>
<p><br></p>

