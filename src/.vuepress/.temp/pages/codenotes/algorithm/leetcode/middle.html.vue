<template><div><h2 id="中等题目" tabindex="-1"><a class="header-anchor" href="#中等题目" aria-hidden="true">#</a> 中等题目</h2>
<h2 id="_2-两数相加" tabindex="-1"><a class="header-anchor" href="#_2-两数相加" aria-hidden="true">#</a> 2.两数相加</h2>
<p>给你两个 <strong>非空</strong> 的链表，表示两个非负的整数。它们每位数字都是按照 <strong>逆序</strong> 的方式存储的，并且每个节点只能存储 <strong>一位</strong> 数字。</p>
<p>请你将两个数相加，并以相同形式返回一个表示和的链表。</p>
<p>你可以假设除了数字 0 之外，这两个数都不会以 0 开头。</p>
<p><img src="/images/algorithm/addtwonumber1.jpg" alt="img"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：l1 = [0], l2 = [0]
输出：[0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<ul>
<li>每个链表中的节点数在范围 <code v-pre>[1, 100]</code> 内</li>
<li><code v-pre>0 &lt;= Node.val &lt;= 9</code></li>
<li>题目数据保证列表表示的数字不含前导零</li>
</ul>
<p><strong>方法一：模拟</strong></p>
<p>我们同时遍历两个链表 l1和l2，并使用变量 <code v-pre>carry</code> 表示当前是否有进位。</p>
<p>每次遍历时，我们取出对应链表的当前位，计算它们与进位 <code v-pre>carry</code> 的和，然后更新进位的值，最后将当前位的值加入答案链表。如果两个链表都遍历完了，并且进位为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 时，遍历结束。</p>
<p>最后我们返回答案链表的头节点即可。</p>
<p>时间复杂度 O(max(m, n))，其中 <code v-pre>m</code> 和 <code v-pre>n</code>分别为两个链表的长度。我们需要遍历两个链表的全部位置，而处理每个位置只需要 <code v-pre>O(1)</code> 的时间。忽略答案的空间消耗，空间复杂度 <code v-pre>O(1)</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">addTwoNumbers</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> l2 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> carry <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token punctuation">(</span>l1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> l1<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>l2 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">+</span> carry<span class="token punctuation">;</span>
            carry <span class="token operator">=</span> s <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>s <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            l1 <span class="token operator">=</span> l1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            l2 <span class="token operator">=</span> l2 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> cur<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>s <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用的非常的巧妙。如果是大于10的数字，那么就会返回其去掉十位后的数组，如果小于10的数字，就会返回其本身。</p>
<h2 id="_3-无重复字符的最长字串" tabindex="-1"><a class="header-anchor" href="#_3-无重复字符的最长字串" aria-hidden="true">#</a> 3.无重复字符的最长字串</h2>
<p>给定一个字符串 <code v-pre>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p>
<p><strong>示例 1:</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<ul>
<li><code v-pre>0 &lt;= s.length &lt;= 5 * 104</code></li>
<li><code v-pre>s</code> 由英文字母、数字、符号和空格组成</li>
</ul>
<p><strong>方法一：双指针 + 哈希表</strong></p>
<p>定义一个哈希表记录当前窗口内出现的字符，记 <code v-pre>i</code> 和 <code v-pre>j</code> 分别表示不重复子串的开始位置和结束位置，无重复字符子串的最大长度记为 <code v-pre>ans</code>。</p>
<p>遍历字符串 <code v-pre>s</code> 的每个字符 <code v-pre>s[j]</code>，我们记为 <code v-pre>c</code>。若 <code v-pre>s[i..j−1]</code> 窗口内存在 <code v-pre>c</code>，则 <code v-pre>i</code> 循环向右移动，更新哈希表，直至  <code v-pre>s[i..j−1]</code> 窗口不存在 <code v-pre>c</code>，循环结束。将 <code v-pre>c</code> 加入哈希表中，此时  <code v-pre>s[i..j−1]</code> 窗口内不含重复元素，更新 <code v-pre>ans</code> 的最大值。</p>
<p>最后返回 <code v-pre>ans</code> 即可。</p>
<p>时间复杂度 <code v-pre>O(n)</code>，其中 <code v-pre>n</code> 表示字符串 <code v-pre>s</code> 的长度。</p>
<p>双指针算法模板：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">++</span>j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 具体问题的逻辑</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">></span></span> ss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>ss<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ss<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            ss<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            ans <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> j <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


