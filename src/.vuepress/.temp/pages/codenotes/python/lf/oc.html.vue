<template><div><h1 id="第一节-python基础内容回顾" tabindex="-1"><a class="header-anchor" href="#第一节-python基础内容回顾" aria-hidden="true">#</a> 第一节,  python基础内容回顾</h1>
<h2 id="二-关于爬虫的特殊性" tabindex="-1"><a class="header-anchor" href="#二-关于爬虫的特殊性" aria-hidden="true">#</a> 二. 关于爬虫的特殊性</h2>
<p>爬虫是一个很蛋疼的东西, 可能今天讲解的案例. 明天就失效了. 所以, 不要死盯着一个网站干.  要学会见招拆招(爬虫的灵魂)
爬虫程序如果编写的不够完善. 访问频率过高. 很有可能会对服务器造成毁灭性打击, 所以, 不要死盯着一个网站干. 请放慢你爬取的速度. 为你好, 也为网站好.</p>
<p>腾讯, 阿里, 字节的网站, 反爬手段很残忍. 新手不要去挑战这种大厂. 等你有实力了. 慢慢研究(哪个都要研究很久....)</p>
<p>gov的网站, 非必要, 不爬取. 非要爬取. 请一定降低访问频率. 为你好....</p>
<p>不要以为gov的网站好欺负. 那是地方性的网站. 中央的很多重要网站都有非常强力的防护措施(瑞数等...) 这种. 愿意搞的. 自己研究. 樵夫搞不定....</p>
<p>爬虫只能爬 你看得见的东西!!!!!</p>
<p>网站的多变性: 这个是爬虫的魅力. 我们要全方位的去思考. 就像找漏洞一样. 思维逻辑不可能是固定的. 达到目的即可. 不要死磕牛角尖. 要不然, 你会死的很惨.... 要学会见招拆招.</p>
<p>关于憋代码这个事.  要憋. 一定要憋. 让你憋主要有两个原因.</p>
<ol>
<li><strong>简单的语法使用错误. 不憋记不住</strong></li>
<li><strong>复杂的程序逻辑. 不憋培养不出来独立思考能力.</strong></li>
</ol>
<h2 id="三-必须要掌握的py基础" tabindex="-1"><a class="header-anchor" href="#三-必须要掌握的py基础" aria-hidden="true">#</a> 三. 必须要掌握的py基础</h2>
<h3 id="_3-1-基础语法相关" tabindex="-1"><a class="header-anchor" href="#_3-1-基础语法相关" aria-hidden="true">#</a> 3.1 基础语法相关</h3>
<ol>
<li>
<p>if条件判断</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">if</span> 条件<span class="token punctuation">:</span>
    <span class="token comment"># 事情1</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># 事情2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面就是if的最基础的语法规则. 含义是, 如果条件为真, 去执行<code v-pre>事情1</code>, 如果条件不真, 去执行<code v-pre>事情2</code>. 这东西. 我就不拆开聊了. 关于if. 你要记住的事情是, <code v-pre>它是用来做条件判断的</code>. 以后你的程序里,  如果需要条件判断了. 就用它....</p>
<p>举例,</p>
<p>在写爬虫的时候. 我们会遇到这样的两种情况</p>
<p>情况一, 数据里有一些我们并不需要的内容</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>data <span class="token operator">=</span> <span class="token string">"10,英雄本色,1500万"</span>   <span class="token comment"># 正常你需要的数据</span>
data <span class="token operator">=</span> <span class="token string">"11,-,-"</span>  <span class="token comment"># 你不需要的数据</span>

<span class="token comment"># 伪代码, 理解含义(思路)</span>
<span class="token keyword">if</span> data里有你不需要的数据<span class="token punctuation">:</span>
	再见
<span class="token keyword">else</span><span class="token punctuation">:</span>
 	保留

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>情况二, 页面结构不统一, 会有两种页面结构</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 伪代码, 理解含义(思路)</span>
提取器<span class="token number">1</span> <span class="token operator">=</span> xxxx  <span class="token comment">#  用来提取页面中内容的</span>
提取器<span class="token number">2</span> <span class="token operator">=</span> xxxxxx

<span class="token comment"># 页面有可能是不规则的。 张飞， 潘长江 </span>
结果<span class="token number">1</span> <span class="token operator">=</span> 提取器<span class="token number">1.</span>提取<span class="token punctuation">(</span>页面<span class="token punctuation">)</span>
<span class="token keyword">if</span> 结果<span class="token number">1</span><span class="token punctuation">:</span>
    有结果<span class="token punctuation">.</span> 存起来
<span class="token keyword">else</span><span class="token punctuation">:</span>
    没有结果<span class="token punctuation">.</span> 
    结果<span class="token number">2</span> <span class="token operator">=</span> 提取器<span class="token number">2.</span>提取<span class="token punctuation">(</span>页面<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相信我, 上面的逻辑并不难. 但是, 到了后面很多小伙伴容易踩坑. 我们完全没必要用一个提取器获取所有的数据. 完全没必要.....</p>
</li>
<li>
<p>while循环
关于循环, 我们必须要知道一个事情.</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> 条件<span class="token punctuation">:</span>
    循环体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果条件为真, 就执行循环体, 然后再次判断条件.....直到条件为假. 结束循环.</p>
<p>反复的执行一段代码</p>
</li>
<li>
<p>关于True和False</p>
<p>True, 是真的意思. 翻译成人话:  对的, OK, 没毛病. 确定</p>
<p>False, 是假的意思. 翻译成人话: 不对劲, 错误, No. 有瑕疵. 不对劲</p>
<p>这个应该都能看懂.</p>
<p>但是下面这个, 需要各位去记住</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 几乎所有能表示为空的东西. 都可以认为是False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token builtin">tuple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 上面这一坨全是False, 相反的. 都是真. 利用这个特性. 我们可以有以下的一些写法</span>

<span class="token comment"># 伪代码, 理解逻辑. </span>
结果 <span class="token operator">=</span> 提取器<span class="token punctuation">.</span>提取<span class="token punctuation">(</span>页面<span class="token punctuation">)</span>
<span class="token keyword">if</span> 结果<span class="token punctuation">:</span>
    有结果<span class="token punctuation">.</span> 我要保存结果
<span class="token keyword">else</span><span class="token punctuation">:</span>
    没结果<span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-2-字符串" tabindex="-1"><a class="header-anchor" href="#_3-2-字符串" aria-hidden="true">#</a> 3.2  字符串</h3>
<p>​	字符串在<code v-pre>爬虫</code>里. 必须要知道的几个操作:</p>
<ol>
<li>
<p>索引和切片
索引, 就是第几个字符. 它从0开始.
切片, 从字符串中提取n个字符.</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"我爱黎明,黎明爱我"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  从第<span class="token number">2</span>个<span class="token punctuation">,</span> 到第<span class="token number">4</span>个<span class="token punctuation">(</span>取不到<span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>strip()</p>
<p>我们从网页上提取的数据. 很多都是带有一些杂质的(换行, 空格),怎么去掉?</p>
<p>strip()可以去掉字符串<code v-pre>左右两端</code>的空白(空格, 换行\n, 回车\r, 制表符\t)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"    \t\t\t我的天哪\r\r      \n\n  "</span>  <span class="token comment"># 够乱的字符串</span>
s1 <span class="token operator">=</span> s<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>  <span class="token comment"># 好了 `我的天哪`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>split()</p>
<p>split,  做切割的.</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"10,男人本色,100000万"</span>  <span class="token comment"># 你在网页上提取到这样的一段数据. 现在我需要电影名称</span>
tmps <span class="token operator">=</span> s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span>
name <span class="token operator">=</span> tmps<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>  <span class="token comment"># 男人本色</span>

<span class="token builtin">id</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> money <span class="token operator">=</span> s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span>  <span class="token comment"># 切割后. 把三个结果直接怼给三个变量</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>replace()</p>
<p>replace, 字符串替换</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"我      \t\t\n\n爱   黎       明    "</span>   <span class="token comment"># 这是你从网页上拿到的东西</span>
s1 <span class="token operator">=</span> replace<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">"\t"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>  <span class="token comment"># 干掉空格, \t, \n</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>  <span class="token comment"># 我爱黎明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>join()</p>
<p>join, 将列表拼接为一个完整的字符串</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"我妈"</span><span class="token punctuation">,</span> <span class="token string">"不喜欢"</span><span class="token punctuation">,</span> <span class="token string">"黎明"</span><span class="token punctuation">]</span>  <span class="token comment"># 有时,由于网页结构的不规则, 导致获取的数据是这样的. </span>
s1 <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>lst<span class="token punctuation">)</span>  <span class="token comment"># 用空字符串把lst中的每一项拼接起来</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>  <span class="token comment"># 我妈不喜欢黎明</span>

lst2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"\n\r"</span><span class="token punctuation">,</span><span class="token string">"\n\r"</span><span class="token punctuation">,</span><span class="token string">"周杰伦\n\r"</span><span class="token punctuation">,</span> <span class="token string">"\n不认识我\r"</span><span class="token punctuation">]</span> 


s2 <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>lst2<span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">"\r"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># 周杰伦不认识我</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>f-string</p>
<p>格式化字符串的一种方案</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"周杰伦"</span>
s1 <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f"我喜欢</span><span class="token interpolation"><span class="token punctuation">{</span>s<span class="token punctuation">}</span></span><span class="token string">"</span></span>  <span class="token comment">#  它会把一个变量塞入一个字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>  <span class="token comment"># 我喜欢周杰伦</span>

k <span class="token operator">=</span> <span class="token number">10085</span>
s2 <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f"我的电话号是</span><span class="token interpolation"><span class="token punctuation">{</span>k<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token string">"</span></span> <span class="token comment"># 它会把计算结果赛入一个字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>  <span class="token comment"># 我的电话号是10086</span>

<span class="token comment"># 综上, f-string的大括号里, 其实是一段表达式.能计算出结果即可</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-3-列表" tabindex="-1"><a class="header-anchor" href="#_3-3-列表" aria-hidden="true">#</a> 3.3  列表</h3>
<p>列表, 我们未来遇见的仅次于字符串的一种数据类型. 它主要是能承载大量的数据. 理论上. 你的内存不炸. 它就能一直存</p>
<ol>
<li>
<p>索引, 切片</p>
<p>列表的索引和切片逻辑与字符串完全一致</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"赵本山"</span><span class="token punctuation">,</span> <span class="token string">"王大陆"</span><span class="token punctuation">,</span> <span class="token string">"大嘴猴"</span><span class="token punctuation">,</span> <span class="token string">"马后炮"</span><span class="token punctuation">]</span>
item1 <span class="token operator">=</span> lst<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>  <span class="token comment"># 大嘴猴</span>
item2 <span class="token operator">=</span> lst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment"># 王大陆</span>

lst2 <span class="token operator">=</span> lst<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst2<span class="token punctuation">)</span>  <span class="token comment"># ["大嘴猴", "马后炮"]</span>

<span class="token comment"># 注意, 如果列表中没有数据. 取0会报错</span>
lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 报错, Index out of bounds</span>

<span class="token comment"># 注意, 如果给出的索引下标超过了列表的最大索引. 依然会报错</span>
lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"123"</span><span class="token punctuation">,</span> <span class="token string">"456"</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token number">9999</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 报错, Index out of bounds</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>增加</p>
<p>给列表添加数据.</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">]</span>
lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span>
lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">44</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>  <span class="token comment"># [11,22,33,44]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>删除</p>
<p>删除数据(不常用, 好不容易爬到的数据. 为什么要删)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">"周润发"</span><span class="token punctuation">)</span>  <span class="token comment">#  把周润发删掉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>修改</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"赵本山"</span><span class="token punctuation">,</span> <span class="token string">"王大陆"</span><span class="token punctuation">,</span> <span class="token string">"大嘴猴"</span><span class="token punctuation">,</span> <span class="token string">"马后炮"</span><span class="token punctuation">]</span>
lst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"周杰伦"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>  <span class="token comment"># ["赵本山", "周杰伦", "大嘴猴", "马后炮"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>range</p>
<p>用for循环数数的一个东西</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>   <span class="token comment"># 从0数到9</span>
   
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>  <span class="token comment"># 从5 数到 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查询(必会!!!!)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"赵本山"</span><span class="token punctuation">,</span> <span class="token string">"周杰伦"</span><span class="token punctuation">,</span> <span class="token string">"大嘴猴"</span><span class="token punctuation">,</span> <span class="token string">"马后炮"</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 循环列表的索引</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 循环列表的内容</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> lst<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-4-字典" tabindex="-1"><a class="header-anchor" href="#_3-4-字典" aria-hidden="true">#</a> 3.4  字典</h3>
<p>字典可以成对儿的保存数据.</p>
<ol>
<li>
<p>增加</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
dic<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'樵夫'</span>
dic<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">18</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span>  <span class="token comment"># {"name": "樵夫", "age": 18}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"樵夫"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
dic<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">19</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span>  <span class="token comment"># {"name": "樵夫", "age": 19}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>删除(不常用)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"樵夫"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
dic<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span>  <span class="token comment"># {'name': '樵夫'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查询(重点)</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"樵夫"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>

a <span class="token operator">=</span> dic<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span>  <span class="token comment"># 查询'name'的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment"># 樵夫</span>

b <span class="token operator">=</span> dic<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span>  <span class="token comment"># 拿到dic中age对应的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment"># 18</span>

c <span class="token operator">=</span> dic<span class="token punctuation">[</span><span class="token string">'哈拉少'</span><span class="token punctuation">]</span>   <span class="token comment"># 没有哈拉少. 报错</span>
d <span class="token operator">=</span> dic<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"哈拉少"</span><span class="token punctuation">)</span>  <span class="token comment"># 没有哈拉少, 不报错. 返回None. 它好. 它不报错</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>循环</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"樵夫"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> k <span class="token keyword">in</span> dic<span class="token punctuation">:</span>  <span class="token comment"># 循环出所有的key</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>  
    <span class="token keyword">print</span><span class="token punctuation">(</span>dic<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 获取到所有的value并打印</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌套</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>dic <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"王峰"</span><span class="token punctuation">,</span>
    <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token string">"wife"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"章子怡"</span><span class="token punctuation">,</span>
        <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"children"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">'name'</span><span class="token punctuation">:</span><span class="token string">"胡一菲"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">'name'</span><span class="token punctuation">:</span><span class="token string">"胡二菲"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">'name'</span><span class="token punctuation">:</span><span class="token string">"胡三菲"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">17</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 王峰的第二个孩子的名字</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dic<span class="token punctuation">[</span><span class="token string">'children'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 王峰所有孩子的名称和年龄</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> dic<span class="token punctuation">[</span><span class="token string">'children'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-5-字符集和bytes" tabindex="-1"><a class="header-anchor" href="#_3-5-字符集和bytes" aria-hidden="true">#</a> 3.5  字符集和bytes</h3>
<p>字符集, 记住两个字符集就够了. 一个是utf-8, 一个是gbk. 都是支持中文的. 但是utf-8的编码数量远大于gbk. 我们平时使用的最多的是utf-8</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 把字符串转化成字节</span>
bs <span class="token operator">=</span> <span class="token string">"我的天哪abcdef"</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>bs<span class="token punctuation">)</span>  <span class="token comment">#  b'\xe6\x88\x91\xe7\x9a\x84\xe5\xa4\xa9\xe5\x93\xaaabcdef'</span>
<span class="token comment"># 一个中文在utf-8里是3个字节. 一个英文是一个字节. 所以英文字母是正常显示的</span>

<span class="token comment"># 把字节还原回字符串</span>
bs <span class="token operator">=</span> <span class="token string">b'\xe6\x88\x91\xe7\x9a\x84\xe5\xa4\xa9\xe5\x93\xaaabcdef'</span>
s <span class="token operator">=</span> bs<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记住, bytes不是给人看的. 是给机器看的. 我们遇到的所有文字, 图片, 音频, 视频. 所有所有的东西到了计算机里都是字节.</p>
<h3 id="_3-6-文件操作" tabindex="-1"><a class="header-anchor" href="#_3-6-文件操作" aria-hidden="true">#</a> 3.6 文件操作</h3>
<p>python中. 想要处理一个文件. 必须用open()先打开一个文件</p>
<p>语法规则</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>文件名<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">"模式"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">'文件编码'</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">|</span>f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件名就不解释了.</p>
<p>模式:
我们需要知道的主要有4个. 分别是: r, w, a, b</p>
<ol>
<li>r  只读模式. 含义是, 当前这一次open的目的是读取数据. 所以, 只能读. 不能写</li>
<li>w 只写模式. 含义是, 当前这一次open的目的是写入数据. 所以, 只能写, 不能读</li>
<li>a 追加模式. 含义是, 当前这一次open的目的是向后追加. 所以, 只能写, 不能读</li>
<li>b 字节模式. 可以和上面三种模式进行混合搭配. 目的是. 写入的内容或读取的内容是字节.</li>
</ol>
<p>问:</p>
<ol>
<li>如果我想保存一张图片. 应该用哪种模式?</li>
<li>我想读取txt文件, 用哪种模式?</li>
<li>我想复制一个文件. 应该用哪种模式?</li>
</ol>
<p>encoding: 文件编码. 只有处理的文件是文本的时候才能使用. 并且mode不可以是<code v-pre>b</code>.   99%的时候我们用的是<code v-pre>utf-8</code></p>
<p>另一种写法:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>文件名<span class="token punctuation">,</span> mode<span class="token operator">=</span>模式<span class="token punctuation">,</span> encoding<span class="token operator">=</span>编码<span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法的好处是, 不需要我们手动去关闭<code v-pre>f</code></p>
<p>读取一个文本文件:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"躺尸一摆手.txt"</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">"r"</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>  <span class="token comment"># for循环可以逐行的进行循环文件中的内容</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-关于函数" tabindex="-1"><a class="header-anchor" href="#_3-7-关于函数" aria-hidden="true">#</a> 3.7  关于函数</h3>
<p>在代码量很少的时候, 我们并不需要函数. 但是一旦代码量大了. 一次写个几百行代码. 调试起来就很困难. 此时, 建议把程序改写成一个一个具有特定功能的函数. 方便调试. 也方便代码的重用</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> 函数名<span class="token punctuation">(</span>形式参数<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 函数体</span>
    <span class="token keyword">return</span> 返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是编写一个函数的固定逻辑. 但是, 编写好的函数是不会自己运行的. 必须有人调用才可以</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>函数名<span class="token punctuation">(</span>实际参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写一个试试:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_page_source</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我要发送请求了. 我要获取到页面源代码啊"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">"页面源代码"</span>

pg_one <span class="token operator">=</span> get_page_source<span class="token punctuation">(</span><span class="token string">"baidu.com"</span><span class="token punctuation">)</span>
pg_two <span class="token operator">=</span> get_page_source<span class="token punctuation">(</span><span class="token string">"koukou.com"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来一个</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">download_image</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> save_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"我要下载图片</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">了"</span></span><span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f"保存在</span><span class="token interpolation"><span class="token punctuation">{</span>save_path<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

donwload_image<span class="token punctuation">(</span><span class="token string">"http://www.baidu.com/abc/huyifei.jpg"</span><span class="token punctuation">,</span> <span class="token string">"胡二飞.jpg"</span><span class="token punctuation">)</span>
donwload_image<span class="token punctuation">(</span><span class="token string">"http://www.baidu.com/aaa/dagedagefeifeifei.jpg"</span><span class="token punctuation">,</span> <span class="token string">"大哥大哥飞飞飞.jpg"</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结, 函数的好处就是, 以后需要该功能. 不用再写重复代码了.</p>
<h3 id="_3-8-关于模块" tabindex="-1"><a class="header-anchor" href="#_3-8-关于模块" aria-hidden="true">#</a> 3.8 关于模块</h3>
<p>模块是啥? 模块就是已经有人帮我们写好了的一些代码, 这些代码被保存在一个py文件或者一个文件夹里. 我们可以拿来直接用</p>
<p>在python中有三种模块.</p>
<p>第一种, python内置模块</p>
<p>​	不用安装. 直接导入就能用</p>
<p>第二种, 第三方模块</p>
<p>​	需要安装. 安装后. 导入就可以用了</p>
<p>第三种, 自定义模块(新手先别自己定义模块)</p>
<p>​	直接导入就能用</p>
<p>导入模块的语法</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> 模块
<span class="token keyword">from</span> 模块 <span class="token keyword">import</span> 功能
<span class="token keyword">from</span> 模块<span class="token punctuation">.</span>子模块 <span class="token keyword">import</span> 功能

举例子<span class="token punctuation">,</span> 
<span class="token keyword">import</span> os
<span class="token keyword">import</span> sys
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>parse <span class="token keyword">import</span> urljoin
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搞爬虫.必须要了解的一些python内置模块</p>
<ol>
<li>
<p>time模块</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 这个是获取到时间戳</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">)</span>  <span class="token comment"># 让程序暂停999秒</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>os模块</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token comment"># 判断文件是否存在</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#  判断文件或者文件夹是否存在</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 路径拼接</span>
os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># 创建文件夹</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>json模块(重中之重)</p>
<p>现在的网站不同于从前了. 习惯性用json来传递数据. 所以, 我们必须要知道json是啥, 以及python如何处理json.</p>
<p>json是一种类似字典一样的东西.  对于python而言, json是字符串.</p>
<p>例如,</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">'{"name": "jay", "age": 18}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你看. 这破玩意就是<code v-pre>json</code></p>
<p>如何来转化它.</p>
<p><strong><span style="background-color:yellow;color:red;">json字符串 =&gt; python字典</span></strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
s <span class="token operator">=</span> <span class="token string">'{"name": "jay", "age": 18}'</span>
dic <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><span style="background-color:yellow;color:red;">python字典 =&gt; json字符串</span></strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"jay"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
s <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>dic<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>random模块</p>
<p>随机. 没别的用处.生成随机数</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> random
i <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment"># 1~10的随机数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>   <span class="token comment"># 多跑两次.效果更加</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>异常处理</p>
<p>这个是重点. 我们在写爬虫的时候. 非常容易遇到问题. 但这些问题本身并不是我们程序的问题.</p>
<p>比如, 你在抓取某网站的时候. 由于网络波动或者他服务器本身压力太大. 导致本次请求失败. 这种现象太常见了. 此时, 我们程序这边就会崩溃. 打印一堆红色的文字. 让你难受的一P.  怎么办?</p>
<p>我们要清楚一个事情. 我们平时在打开一个网址的时候. 如果长时间没有反应, 或者加载很慢的时候. 我们习惯性的会刷新网页. 对吧. 这个逻辑就像: <code v-pre>程序如果本次请求失败了. 能不能重新来一次</code>. OK, 我们接下来聊的这个异常处理. 就是干这个事儿的.</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span> <span class="token comment"># 尝试...</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"假如, 我是一段爬虫代码, 请求到对方服务器"</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我得出事儿啊"</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># 出事儿了</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>  <span class="token comment"># 出错了. 我给你兜着</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>  <span class="token comment"># 怎么兜?  打印一下. 就过去了</span>
    
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"不论上面是否出错. 我这里, 依然可以执行"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看懂了么? 程序执行的时候. 如果<code v-pre>try</code>中的代码出现错误. 则自动跳到<code v-pre>except</code>中. 并执行<code v-pre>except</code>中的代码. 然后程序正常的, 继续执行</p>
<p>有了这玩意. 我们就可以写出一段很漂亮的代码逻辑:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        我要发送请求了<span class="token punctuation">.</span> 我要干美国CIA的总部<span class="token punctuation">.</span> 我要上天
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我成功了!!"</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>  <span class="token comment"># 成功了.就跳出循环</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"失败了"</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我不怕失败"</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"再来"</span><span class="token punctuation">)</span>
       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改良版:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        我要发送请求了<span class="token punctuation">.</span> 我要干美国CIA的总部<span class="token punctuation">.</span> 我要上天
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我成功了!!"</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>  <span class="token comment"># 成功了.就跳出循环</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"失败了"</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我不怕失败"</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"再来"</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>i <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h1 id="第二节-正则" tabindex="-1"><a class="header-anchor" href="#第二节-正则" aria-hidden="true">#</a> 第二节 正则</h1>
<h2 id="一、正则基础" tabindex="-1"><a class="header-anchor" href="#一、正则基础" aria-hidden="true">#</a> 一、正则基础</h2>
<h3 id="_1、为什么使用正则" tabindex="-1"><a class="header-anchor" href="#_1、为什么使用正则" aria-hidden="true">#</a> 1、为什么使用正则</h3>
<ul>
<li>
<p>需求</p>
<p>判断一个字符串是否是手机号</p>
</li>
<li>
<p>解决</p>
<p>编写一个函数，给函数一个字符串，如果是手机号则返回True，否则返回False</p>
</li>
<li>
<p>代码</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">isPhone</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 长度为11</span>
    <span class="token comment"># 全部都是数字字符</span>
    <span class="token comment"># 以1开头</span>
    <span class="token keyword">pass</span>

<span class="token keyword">if</span> isPhone<span class="token punctuation">(</span><span class="token string">"13812345678"</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"是手机号"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"不是手机号"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注意</p>
<p>如果使用正则会让这个问题变得简单</p>
</li>
</ul>
<h3 id="_2、正则与re模块简介" tabindex="-1"><a class="header-anchor" href="#_2、正则与re模块简介" aria-hidden="true">#</a> 2、正则与re模块简介</h3>
<p><strong>概述：</strong> <strong>正则表达式</strong>，又称规则表达式</p>
<p>正则表达式(regular expression)描述了一种字符串匹配的模式（pattern）</p>
<p>正则匹配是一个 模糊的匹配(不是精确匹配)</p>
<p>**re：**python自1.5版本开始增加了re模块，该模块提供了perl风格的正则表达式模式，re模块是python语言拥有了所有正则表达式的功能</p>
<ul>
<li>如下四个方法经常使用
<ul>
<li>match()</li>
<li>search()</li>
<li>findall()</li>
<li>finditer()</li>
</ul>
</li>
</ul>
<h2 id="二、正则表达式" tabindex="-1"><a class="header-anchor" href="#二、正则表达式" aria-hidden="true">#</a> 二、正则表达式</h2>
<h3 id="_1、匹配单个字符与数字" tabindex="-1"><a class="header-anchor" href="#_1、匹配单个字符与数字" aria-hidden="true">#</a> 1、匹配单个字符与数字</h3>
<table>
<thead>
<tr>
<th>匹配</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>.</td>
<td>匹配除换行符以外的任意字符，当flags被设置为re.S时，可以匹配包含换行符以内的所有字符</td>
</tr>
<tr>
<td>[]</td>
<td>里面是字符集合，匹配[]里任意一个字符</td>
</tr>
<tr>
<td>[0123456789]</td>
<td>匹配任意一个数字字符</td>
</tr>
<tr>
<td>[0-9]</td>
<td>匹配任意一个数字字符</td>
</tr>
<tr>
<td>[a-z]</td>
<td>匹配任意一个小写英文字母字符</td>
</tr>
<tr>
<td>[A-Z]</td>
<td>匹配任意一个大写英文字母字符</td>
</tr>
<tr>
<td>[A-Za-z]</td>
<td>匹配任意一个英文字母字符</td>
</tr>
<tr>
<td>[A-Za-z0-9]</td>
<td>匹配任意一个数字或英文字母字符</td>
</tr>
<tr>
<td>[^lucky]</td>
<td>[]里的^称为脱字符，表示非，匹配不在[]内的任意一个字符</td>
</tr>
<tr>
<td><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></td>
<td>以[]中内的某一个字符作为开头</td>
</tr>
<tr>
<td>\d</td>
<td>匹配任意一个数字字符，相当于[0-9]</td>
</tr>
<tr>
<td>\D</td>
<td>匹配任意一个非数字字符，相当于<code v-pre>[^0-9]</code></td>
</tr>
<tr>
<td>\w</td>
<td>匹配字母、下划线、数字中的任意一个字符，相当于[0-9A-Za-z_]</td>
</tr>
<tr>
<td>\W</td>
<td>匹配非字母、下划线、数字中的任意一个字符，相当于<code v-pre>[^0-9A-Za-z_]</code></td>
</tr>
<tr>
<td>\s</td>
<td>匹配空白符(空格、换页、换行、回车、制表)，相当于[ \f\n\r\t]</td>
</tr>
<tr>
<td>\S</td>
<td>匹配非空白符(空格、换页、换行、回车、制表)，相当于<code v-pre>[^ \f\n\r\t]</code></td>
</tr>
</tbody>
</table>
<h3 id="_2、匹配锚字符" tabindex="-1"><a class="header-anchor" href="#_2、匹配锚字符" aria-hidden="true">#</a> 2、匹配锚字符</h3>
<p>锚字符:用来判定是否按照规定开始或者结尾</p>
<table>
<thead>
<tr>
<th>匹配</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>^</td>
<td>行首匹配，和[]里的^不是一个意思</td>
</tr>
<tr>
<td>$</td>
<td>行尾匹配</td>
</tr>
</tbody>
</table>
<h3 id="_3、限定符" tabindex="-1"><a class="header-anchor" href="#_3、限定符" aria-hidden="true">#</a> 3、限定符</h3>
<p>限定符用来指定正则表达式的一个给定组件必须要出现多少次才能满足匹配。有 * 或 + 或 ? 或 大括号n大括号 或 {n,} 或 {n,m} 共6种。</p>
<table>
<thead>
<tr>
<th>匹配</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>(xyz)</td>
<td>匹配括号内的xyz，作为一个整体去匹配  一个单元 子存储</td>
</tr>
<tr>
<td>x?</td>
<td>匹配0个或者1个x，非贪婪匹配</td>
</tr>
<tr>
<td>x*</td>
<td>匹配0个或任意多个x</td>
</tr>
<tr>
<td>x+</td>
<td>匹配至少一个x</td>
</tr>
<tr>
<td>x n}</td>
<td>确定匹配n个x，n是非负数</td>
</tr>
<tr>
<td>x n,}</td>
<td>至少匹配n个x</td>
</tr>
<tr>
<td>x n,m}</td>
<td>匹配至少n个最多m个x</td>
</tr>
<tr>
<td>x\</td>
<td>y</td>
</tr>
</tbody>
</table>
<h2 id="三、re模块中常用函数" tabindex="-1"><a class="header-anchor" href="#三、re模块中常用函数" aria-hidden="true">#</a> 三、re模块中常用函数</h2>
<p><strong>通用flags（修正符）</strong></p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>re.I</td>
<td>是匹配对大小写不敏感</td>
</tr>
<tr>
<td>re.S</td>
<td>使.匹配包括换行符在内的所有字符</td>
</tr>
</tbody>
</table>
<p><strong>通用函数</strong></p>
<ul>
<li>
<p>获取匹配结果</p>
<ul>
<li>
<p>使用group()方法 获取到匹配的值</p>
</li>
<li>
<p>groups()    返回一个包含所有小组字符串的元组(也就是自存储的值)，从 1 到 所含的小组号。</p>
</li>
</ul>
</li>
</ul>
<h3 id="_1、match-函数" tabindex="-1"><a class="header-anchor" href="#_1、match-函数" aria-hidden="true">#</a> 1、match()函数</h3>
<ul>
<li>
<p>原型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>def match(pattern, string, flags=0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>功能</p>
<p>匹配成功返回 匹配的对象</p>
<p>匹配失败 返回 None</p>
</li>
</ul>
<ul>
<li>
<p>获取匹配结果</p>
<ul>
<li>
<p>使用group()方法 获取到匹配的值</p>
</li>
<li>
<p>groups()    返回一个包含所有小组字符串的元组，从 1 到 所含的小组号。</p>
</li>
</ul>
</li>
<li>
<p>注意：从第一位开始匹配  只匹配一次</p>
</li>
</ul>
<ul>
<li>
<p>参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pattern</td>
<td>匹配的正则表达式(一种字符串的模式)</td>
</tr>
<tr>
<td>string</td>
<td>要匹配的字符串</td>
</tr>
<tr>
<td>flags</td>
<td>标识位，用于控制正则表达式的匹配方式</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>代码</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

res <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">'\d{2}'</span><span class="token punctuation">,</span><span class="token string">'123'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">#给当前匹配到的结果起别名</span>
s <span class="token operator">=</span> <span class="token string">'3G4HFD567'</span>
re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"(?P&lt;value>\d+)"</span><span class="token punctuation">,</span>s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2、searce-函数" tabindex="-1"><a class="header-anchor" href="#_2、searce-函数" aria-hidden="true">#</a> 2、searce()函数</h3>
<ul>
<li>
<p>原型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>def search(pattern, string, flags=0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>功能</p>
<p>扫描整个字符串string，并返回第一个pattern模式成功的匹配</p>
<p>匹配失败 返回 None</p>
</li>
<li>
<p>参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pattern</td>
<td>匹配的正则表达式(一种字符串的模式)</td>
</tr>
<tr>
<td>string</td>
<td>要匹配的字符串</td>
</tr>
<tr>
<td>flags</td>
<td>标识位，用于控制正则表达式的匹配方式</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>注意：</p>
<p>只要字符串包含就可以</p>
<p>只匹配一次</p>
</li>
<li>
<p>示例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

res <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">'[a-z]'</span><span class="token punctuation">,</span> <span class="token string">'131A3ab889s'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<ul>
<li>
<p>注意</p>
<p>与search的区别</p>
<p>相同点：</p>
<p>都只匹配一次</p>
<p>不同点：</p>
<ul>
<li>search是在要匹配的字符串中  包含正则表达式的内容就可以</li>
<li>match 必须第一位就开始匹配  否则匹配失败</li>
</ul>
</li>
</ul>
<h3 id="_3、findall-函数-返回列表" tabindex="-1"><a class="header-anchor" href="#_3、findall-函数-返回列表" aria-hidden="true">#</a> 3、findall()函数（返回列表）</h3>
<ul>
<li>
<p>原型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>def findall(pattern, string, flags=0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>功能</p>
<p>扫描整个字符串string，并返回所有匹配的pattern模式结果的字符串列表</p>
</li>
<li>
<p>参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pattern</td>
<td>匹配的正则表达式(一种字符串的模式)</td>
</tr>
<tr>
<td>string</td>
<td>要匹配的字符串</td>
</tr>
<tr>
<td>flags</td>
<td>标识位，用于控制正则表达式的匹配方式</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>示例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>myStr <span class="token operator">=</span> <span class="token triple-quoted-string string">"""
&lt;a href="http://www.baidu.com">百度&lt;/a>
&lt;A href="http://www.taobao.com">淘宝&lt;/A>
&lt;a href="http://www.id97.com">电
影网站&lt;/a>
&lt;i>我是倾斜1&lt;/i>
&lt;i>我是倾斜2&lt;/i>
&lt;em>我是倾斜2&lt;/em>
"""</span>
<span class="token comment"># html里是不区分大小写</span>
<span class="token comment"># （1）给正则里面匹配的 加上圆括号 会将括号里面的内容进行 单独的返回</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"(&lt;a href=\"http://www\.(.*?)\.com\">(.*?)&lt;/a>)"</span><span class="token punctuation">,</span>myStr<span class="token punctuation">)</span> <span class="token comment">#[('&lt;a href="http://www.baidu.com">百度&lt;/a>', 'baidu', '百度')]</span>

<span class="token comment"># 括号的区别</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"&lt;a href=\"http://www\..*?\.com\">.*?&lt;/a>"</span><span class="token punctuation">,</span>myStr<span class="token punctuation">)</span> <span class="token comment">#['&lt;a href="http://www.baidu.com">百度&lt;/a>']</span>

<span class="token comment">#(2) 不区分大小写的匹配</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"&lt;a href=\"http://www\..*?\.com\">.*?&lt;/a>"</span><span class="token punctuation">,</span>myStr<span class="token punctuation">,</span>re<span class="token punctuation">.</span>I<span class="token punctuation">)</span> <span class="token comment">#['&lt;a href="http://www.baidu.com">百度&lt;/a>', '&lt;A href="http://www.taobao.com">淘宝&lt;/A>']</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"&lt;[aA] href=\"http://www\..*?\.com\">.*?&lt;/[aA]>"</span><span class="token punctuation">,</span>myStr<span class="token punctuation">)</span> <span class="token comment">#['&lt;a href="http://www.baidu.com">百度&lt;/a>']</span>
<span class="token comment"># (3) 使.支持换行匹配</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"&lt;a href="</span>http<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span><span class="token punctuation">.</span>?<span class="token punctuation">.</span>com<span class="token string">">.?&lt;/a>"</span><span class="token punctuation">,</span>myStr<span class="token punctuation">,</span>re<span class="token punctuation">.</span>S<span class="token punctuation">)</span> <span class="token comment">#</span>
<span class="token comment"># (4) 支持换行 支持不区分大小写匹配</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">"&lt;a href="</span>http<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token punctuation">.</span><span class="token punctuation">.</span>?<span class="token punctuation">.</span>com<span class="token string">">.?&lt;/a>"</span><span class="token punctuation">,</span>myStr<span class="token punctuation">,</span>re<span class="token punctuation">.</span>S<span class="token operator">|</span>re<span class="token punctuation">.</span>I<span class="token punctuation">)</span> <span class="token comment">#</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_4、finditer-函数" tabindex="-1"><a class="header-anchor" href="#_4、finditer-函数" aria-hidden="true">#</a> 4、finditer()函数</h3>
<ul>
<li>
<p>原型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>def finditer(pattern, string, flags=0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>功能</p>
<p>与findall()类似，返回一个迭代器</p>
</li>
<li>
<p>参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pattern</td>
<td>匹配的正则表达式(一种字符串的模式)</td>
</tr>
<tr>
<td>string</td>
<td>要匹配的字符串</td>
</tr>
<tr>
<td>flags</td>
<td>标识位，用于控制正则表达式的匹配方式</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>代码</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

res <span class="token operator">=</span> re<span class="token punctuation">.</span>finditer<span class="token punctuation">(</span><span class="token string">'\w'</span><span class="token punctuation">,</span> <span class="token string">'12hsakda1'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> res<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_5、split-函数" tabindex="-1"><a class="header-anchor" href="#_5、split-函数" aria-hidden="true">#</a> 5、split()函数</h3>
<ul>
<li>
<p>作用：切割字符串</p>
</li>
<li>
<p>原型：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>def split(patter, string, maxsplit=0, flags=0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>参数</p>
<p>pattern   正则表达式</p>
<p>string      要拆分的字符串</p>
<p>maxsplit   最大拆分次数  默认拆分全部</p>
<p>flags          修正符</p>
</li>
<li>
<p>示例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
myStr <span class="token operator">=</span> <span class="token string">"asdas\rd&amp;a\ts12d\n*a3sd@a_1sd"</span>
<span class="token comment">#通过特殊字符 对其进行拆分 成列表</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">"[^a-z]"</span><span class="token punctuation">,</span>myStr<span class="token punctuation">)</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">"\W"</span><span class="token punctuation">,</span>myStr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_6、修正符" tabindex="-1"><a class="header-anchor" href="#_6、修正符" aria-hidden="true">#</a> 6、修正符</h3>
<ul>
<li>
<p>作用</p>
<p>对正则进行修正</p>
</li>
<li>
<p>使用</p>
<p>search/match/findall/finditer 等函数 flags参数的使用</p>
</li>
<li>
<p>修正符</p>
<p>re.I   不区分大小写匹配</p>
<p>re.S    使.可以匹配换行符   匹配任意字符</p>
</li>
<li>
<p>使用</p>
<p>re.I</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'[a-z]'</span><span class="token punctuation">,</span><span class="token string">'AaBb'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'[a-z]'</span><span class="token punctuation">,</span><span class="token string">'AaBb'</span><span class="token punctuation">,</span> flags<span class="token operator">=</span>re<span class="token punctuation">.</span>I<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>re.S</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'&lt;b>.*?&lt;/b>'</span><span class="token punctuation">,</span><span class="token string">'&lt;b>b标签&lt;/b>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'&lt;b>.*?&lt;/b>'</span><span class="token punctuation">,</span><span class="token string">'&lt;b>b标\n签&lt;/b>'</span><span class="token punctuation">,</span> flags<span class="token operator">=</span>re<span class="token punctuation">.</span>S<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="四、正则高级" tabindex="-1"><a class="header-anchor" href="#四、正则高级" aria-hidden="true">#</a> 四、正则高级</h2>
<h3 id="_1、分组-起名称" tabindex="-1"><a class="header-anchor" href="#_1、分组-起名称" aria-hidden="true">#</a> 1、分组&amp;起名称</h3>
<ul>
<li>
<p>概念</p>
<p>处理简单的判断是否匹配之外，正则表达式还有提取子串的功能，用()表示的就是要提取的分组</p>
</li>
<li>
<p>代码</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment">#给当前匹配到的结果起别名</span>
s <span class="token operator">=</span> <span class="token string">'3G4HFD567'</span>
re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">"(?P&lt;value>\d+)"</span><span class="token punctuation">,</span>s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>说明</p>
<ul>
<li>正则表达式中定义了组，就可以在Match对象上用group()方法提取出子串来</li>
<li>group(0)永远是原始字符串，group(1)、group(2)……表示第1、2、……个子串</li>
</ul>
</li>
</ul>
<h3 id="_2、编译" tabindex="-1"><a class="header-anchor" href="#_2、编译" aria-hidden="true">#</a> 2、编译</h3>
<ul>
<li>
<p>概念</p>
<p>当在python中使用正则表达式时，re模块会做两件事，一件是编译正则表达式，如果表达式的字符串本身不合法，会报错。另一件是用编译好的正则表达式提取匹配字符串</p>
</li>
<li>
<p>编译优点</p>
<p>如果一个正则表达式要使用几千遍，每一次都会编译，出于效率的考虑进行正则表达式的编译，就不需要每次都编译了，节省了编译的时间，从而提升效率</p>
</li>
<li>
<p>compile()函数</p>
<ul>
<li>
<p>原型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>def compile(pattern, flags=0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>作用</p>
<p>将pattern模式编译成正则对象</p>
</li>
<li>
<p>参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pattern</td>
<td>匹配的正则表达式(一种字符串的模式)</td>
</tr>
<tr>
<td>flags</td>
<td>标识位，用于控制正则表达式的匹配方式</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>flags</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>re.I</td>
<td>是匹配对大小写不敏感</td>
</tr>
<tr>
<td>re.S</td>
<td>使.匹配包括换行符在内的所有字符</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>返回值</p>
<p>编译好的正则对象</p>
</li>
<li>
<p>示例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

re_phone <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r"(0\d{2,3}-\d{7,8})"</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>re_phone<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>re_phone<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>编译后其他方法的使用</p>
<p>原型</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>def match(self, string, pos=0, endpos=-1)
def search(self, string, pos=0, endpos=-1)
def findall(self, string, pos=0, endpos=-1)
def finditer(self, string, pos=0, endpos=-1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>string</td>
<td>待匹配的字符串</td>
</tr>
<tr>
<td>pos</td>
<td>从string字符串pos下标开始</td>
</tr>
<tr>
<td>endpos</td>
<td>结束下标</td>
</tr>
</tbody>
</table>
<p>示例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">"lucky's phone is 010-88888888"</span>
s2 <span class="token operator">=</span> <span class="token string">"kaige's phone is 010-99999999"</span>
ret1 <span class="token operator">=</span> re_phone<span class="token punctuation">.</span>search<span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret1<span class="token punctuation">,</span> ret1<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
ret2 <span class="token operator">=</span> re_phone<span class="token punctuation">.</span>search<span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret2<span class="token punctuation">,</span> ret2<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3、贪婪与非贪婪" tabindex="-1"><a class="header-anchor" href="#_3、贪婪与非贪婪" aria-hidden="true">#</a> 3、贪婪与非贪婪</h3>
<ul>
<li>
<p>贪婪模式</p>
<p>贪婪概念：匹配尽可能多的字符</p>
<ul>
<li>.+  匹配换行符以外的字符至少一次</li>
<li>.*  匹配换行符以外的字符任意次</li>
</ul>
<p>实例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>res <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">'&lt;b>.+&lt;/b>'</span><span class="token punctuation">,</span> <span class="token string">'&lt;b>&lt;/b>&lt;b>b标签&lt;/b>'</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">'&lt;b>.*&lt;/b>'</span><span class="token punctuation">,</span> <span class="token string">'&lt;b>b标签&lt;/b>&lt;b>b标签&lt;/b>&lt;b>b标签&lt;/b>&lt;b>b标签&lt;/b>'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>非贪婪模式</p>
<p>非贪婪概念：尽可能少的匹配称为非贪婪匹配，*?、+?即可</p>
</li>
<li>
<p>.+?  匹配换行符以外的字符至少一次  拒绝贪婪</p>
<ul>
<li>.*?   匹配换行符以外的字符任意次      拒绝贪婪</li>
</ul>
<p>实例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>res <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">'&lt;b>.+?&lt;/b>'</span><span class="token punctuation">,</span> <span class="token string">'&lt;b>b标签&lt;/b>&lt;b>b标签&lt;/b>'</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">'&lt;b>.*?&lt;/b>'</span><span class="token punctuation">,</span> <span class="token string">'&lt;b>b标签&lt;/b>&lt;b>b标签&lt;/b>&lt;b>b标签&lt;/b>&lt;b>b标签&lt;/b>'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>练习：</p>
<ol>
<li>
<p>中信证券</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 将产品名称管理人  风险评级 认购金额 起点公示  信息  全部抓到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>练习抓取股票  每一行数据</p>
</li>
<li>
<p>豆瓣</p>
<p>抓取标题和图片img标签</p>
</li>
</ol>
<h1 id="第三节-beautifulsoup" tabindex="-1"><a class="header-anchor" href="#第三节-beautifulsoup" aria-hidden="true">#</a> 第三节 beautifulsoup</h1>
<h2 id="一、beautifulsoup的简单使用" tabindex="-1"><a class="header-anchor" href="#一、beautifulsoup的简单使用" aria-hidden="true">#</a> 一、beautifulsoup的简单使用</h2>
<p>简单来说，Beautiful Soup是python的一个库，最主要的功能是从网页抓取数据。官方解释如下：</p>
<p>Beautiful Soup提供一些简单的、python式的函数用来处理导航、搜索、修改分析树等功能。
它是一个工具箱，通过解析文档为用户提供需要抓取的数据，因为简单，所以不需要多少代码就可以写出一个完整的应用程序。</p>
<h3 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pip install beautifulsoup4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-1解析器" tabindex="-1"><a class="header-anchor" href="#_1-1解析器" aria-hidden="true">#</a> <strong>1.1解析器</strong></h4>
<p>Beautiful Soup支持Python标准库中的HTML解析器,还支持一些第三方的解析器，如果我们不安装它，则 Python 会使用 Python默认的解析器，lxml 解析器更加强大，速度更快，推荐安装。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>pip install lxml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2-解析器对比" tabindex="-1"><a class="header-anchor" href="#_1-2-解析器对比" aria-hidden="true">#</a> 1.2 解析器对比</h4>
<p><a href="http://beautifulsoup.readthedocs.io/zh_CN/latest/" target="_blank" rel="noopener noreferrer">官网文档<ExternalLinkIcon/></a></p>
<h3 id="_2、快速开始" tabindex="-1"><a class="header-anchor" href="#_2、快速开始" aria-hidden="true">#</a> 2、快速开始</h3>
<p>下面的一段HTML代码将作为例子被多次用到.这是 <em>爱丽丝梦游仙境的</em> 的一段内容(以后内容中简称为 <em>爱丽丝</em> 的文档):</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>html_doc <span class="token operator">=</span> <span class="token triple-quoted-string string">"""
&lt;html>&lt;head>&lt;title>The Dormouse's story&lt;/title>&lt;/head>
&lt;body>
&lt;p class="title">&lt;b>The Dormouse's story&lt;/b>&lt;/p>

&lt;p class="story">Once upon a time there were three little sisters; and their names were
&lt;a href="http://example.com/elsie" class="sister" id="link1">Elsie&lt;/a>,
&lt;a href="http://example.com/lacie" class="sister" id="link2">Lacie&lt;/a> and
&lt;a href="http://example.com/tillie" class="sister" id="link3">Tillie&lt;/a>;
and they lived at the bottom of a well.&lt;/p>

&lt;p class="story">...&lt;/p>
"""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用BeautifulSoup解析这段代码,能够得到一个 <code v-pre>BeautifulSoup</code> 的对象,并能按照标准的缩进格式的结构输出:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_doc<span class="token punctuation">,</span> <span class="token string">'lxml'</span><span class="token punctuation">)</span>
<span class="token comment"># html进行美化</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>prettify<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配代码</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span>html<span class="token operator">></span>
 <span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>
   The Dormouse's story
  <span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
 <span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>
   <span class="token operator">&lt;</span>b<span class="token operator">></span>
    The Dormouse's story
   <span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"story"</span><span class="token operator">></span>
   Once upon a time there were three little sisters<span class="token punctuation">;</span> <span class="token keyword">and</span> their names were
   <span class="token operator">&lt;</span>a <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sister"</span> href<span class="token operator">=</span><span class="token string">"http://example.com/elsie"</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token string">"link1"</span><span class="token operator">></span>
    Elsie
   <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
   <span class="token punctuation">,</span>
   <span class="token operator">&lt;</span>a <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sister"</span> href<span class="token operator">=</span><span class="token string">"http://example.com/lacie"</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token string">"link2"</span><span class="token operator">></span>
    Lacie
   <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
   <span class="token keyword">and</span>
   <span class="token operator">&lt;</span>a <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sister"</span> href<span class="token operator">=</span><span class="token string">"http://example.com/tillie"</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token string">"link3"</span><span class="token operator">></span>
    Tillie
   <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
   <span class="token punctuation">;</span>
<span class="token keyword">and</span> they lived at the bottom of a well<span class="token punctuation">.</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"story"</span><span class="token operator">></span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>几个简单的浏览结构化数据的方法:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>title  <span class="token comment"># 获取标签title</span>
<span class="token comment"># &lt;title>The Dormouse's story&lt;/title></span>

soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>name   <span class="token comment"># 获取标签名称</span>
<span class="token comment"># 'title'</span>

soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>string   <span class="token comment"># 获取标签title内的内容</span>
<span class="token comment"># 'The Dormouse's story'</span>

soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>parent  <span class="token comment"># 获取父级标签</span>

soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>name  <span class="token comment"># 获取父级标签名称</span>
<span class="token comment"># 'head'</span>

soup<span class="token punctuation">.</span>p
<span class="token comment"># &lt;p class="title">&lt;b>The Dormouse's story&lt;/b>&lt;/p></span>

soup<span class="token punctuation">.</span>p<span class="token punctuation">[</span><span class="token string">'class'</span><span class="token punctuation">]</span>  <span class="token comment"># 获取p的class属性值</span>
<span class="token comment"># 'title'</span>

soup<span class="token punctuation">.</span>a
<span class="token comment"># &lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a></span>

soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/tillie" id="link3">Tillie&lt;/a>]</span>

soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token string">"link3"</span><span class="token punctuation">)</span>  <span class="token comment"># 获取id为link3的标签</span>
<span class="token comment"># &lt;a class="sister" href="http://example.com/tillie" id="link3">Tillie&lt;/a></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从文档中找到所有&lt;a&gt;标签的链接:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> link <span class="token keyword">in</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'href'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># http://example.com/elsie</span>
    <span class="token comment"># http://example.com/lacie</span>
    <span class="token comment"># http://example.com/tillie</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从文档中获取所有文字内容:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、如何使用" tabindex="-1"><a class="header-anchor" href="#_3、如何使用" aria-hidden="true">#</a> 3、如何使用</h3>
<p>将一段文档传入BeautifulSoup 的构造方法,就能得到一个文档的对象, 可以传入一段字符串或一个文件句柄.</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"index.html"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span><span class="token string">"&lt;html>data&lt;/html>"</span><span class="token punctuation">,</span> <span class="token string">'lxml'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后,Beautiful Soup选择最合适的解析器来解析这段文档,如果手动指定解析器那么Beautiful Soup会选择指定的解析器来解析文档。</p>
<h2 id="二、beautifulsoup的遍历文档树" tabindex="-1"><a class="header-anchor" href="#二、beautifulsoup的遍历文档树" aria-hidden="true">#</a> 二、beautifulsoup的遍历文档树</h2>
<p>还拿”爱丽丝梦游仙境”的文档来做例子:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>html_doc <span class="token operator">=</span> <span class="token triple-quoted-string string">"""
&lt;html>&lt;head>&lt;title>The Dormouse's story&lt;/title>&lt;/head>
    &lt;body>
&lt;p class="title">&lt;b>The Dormouse's story&lt;/b>&lt;/p>

&lt;p class="story">Once upon a time there were three little sisters; and their names were
&lt;a href="http://example.com/elsie" class="sister" id="link1">Elsie&lt;/a>,
&lt;a href="http://example.com/lacie" class="sister" id="link2">Lacie&lt;/a> and
&lt;a href="http://example.com/tillie" class="sister" id="link3">Tillie&lt;/a>;
and they lived at the bottom of a well.&lt;/p>

&lt;p class="story">...&lt;/p>
"""</span>

<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
<span class="token comment"># lxml和html.parser解析的有时候会根据html是否完整而有解析不同的问题，需要注意</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_doc<span class="token punctuation">,</span> <span class="token string">'html.parser'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这段例子来演示怎样从文档的一段内容找到另一段内容</p>
<h3 id="_1、子节点" tabindex="-1"><a class="header-anchor" href="#_1、子节点" aria-hidden="true">#</a> 1、子节点</h3>
<p>一个Tag可能包含多个字符串或其它的Tag,这些都是这个Tag的子节点.Beautiful Soup提供了许多操作和遍历子节点的属性.</p>
<p>注意: Beautiful Soup中字符串节点不支持这些属性,因为字符串没有子节点。</p>
<h4 id="_1-1-contents" tabindex="-1"><a class="header-anchor" href="#_1-1-contents" aria-hidden="true">#</a> 1.1 .contents</h4>
<p>tag的 <code v-pre>.contents</code> 属性可以将tag的子节点以列表的方式输出:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>head_tag <span class="token operator">=</span> soup<span class="token punctuation">.</span>head
head_tag
<span class="token comment"># &lt;head>&lt;title>The Dormouse's story&lt;/title>&lt;/head></span>

head_tag<span class="token punctuation">.</span>contents
<span class="token punctuation">[</span><span class="token operator">&lt;</span>title<span class="token operator">></span>The Dormouse's story<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span><span class="token punctuation">]</span>

title_tag <span class="token operator">=</span> head_tag<span class="token punctuation">.</span>contents<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
title_tag
<span class="token comment"># &lt;title>The Dormouse's story&lt;/title></span>
title_tag<span class="token punctuation">.</span>contents
<span class="token comment"># [u'The Dormouse's story']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串没有 <code v-pre>.contents</code> 属性,因为字符串没有子节点:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>text <span class="token operator">=</span> title_tag<span class="token punctuation">.</span>contents<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
text<span class="token punctuation">.</span>contents
<span class="token comment"># AttributeError: 'NavigableString' object has no attribute 'contents'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、-节点内容" tabindex="-1"><a class="header-anchor" href="#_2、-节点内容" aria-hidden="true">#</a> 2、 节点内容</h3>
<h4 id="_2-1-string" tabindex="-1"><a class="header-anchor" href="#_2-1-string" aria-hidden="true">#</a> 2.1 .string</h4>
<p>如果tag只有一个 <code v-pre>NavigableString</code> 类型子节点,那么这个tag可以使用 <code v-pre>.string</code> 得到子节点。如果一个tag仅有一个子节点,那么这个tag也可以使用 <code v-pre>.string</code> 方法,输出结果与当前唯一子节点的 <code v-pre>.string</code> 结果相同。</p>
<p>通俗点说就是：如果一个标签里面没有标签了，那么 .string 就会返回标签里面的内容。如果标签里面只有唯一的一个标签了，那么 .string 也会返回最里面的内容。例如：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span> <span class="token punctuation">(</span>soup<span class="token punctuation">.</span>head<span class="token punctuation">.</span>string<span class="token punctuation">)</span>
<span class="token comment">#The Dormouse's story</span>
<span class="token comment"># &lt;title>&lt;b>The Dormouse's story&lt;/b>&lt;/title></span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>string<span class="token punctuation">)</span>
<span class="token comment">#The Dormouse's story</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果tag包含了多个子节点,tag就无法确定，string 方法应该调用哪个子节点的内容, .string 的输出结果是 None</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span> <span class="token punctuation">(</span>soup<span class="token punctuation">.</span>html<span class="token punctuation">.</span>string<span class="token punctuation">)</span>
<span class="token comment">#None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-text" tabindex="-1"><a class="header-anchor" href="#_2-2-text" aria-hidden="true">#</a> 2.2 .text</h4>
<p>如果tag包含了多个子节点, text则会返回内部所有文本内容</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>print (soup.html.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<p>strings和text都可以返回所有文本内容</p>
<p>区别：text返回内容为字符串类型  strings为生成器generator</p>
<h3 id="_3、-多个内容" tabindex="-1"><a class="header-anchor" href="#_3、-多个内容" aria-hidden="true">#</a> 3、 <strong>多个内容</strong></h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.strings .stripped_strings 属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-1-strings" tabindex="-1"><a class="header-anchor" href="#_3-1-strings" aria-hidden="true">#</a> 3.1**.strings**</h4>
<p>获取多个内容，不过需要遍历获取，比如下面的例子：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> string <span class="token keyword">in</span> soup<span class="token punctuation">.</span>strings<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">repr</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    
<span class="token triple-quoted-string string">'''
  '\n'
"The Dormouse's story"
'\n'
'\n'
"The Dormouse's story"
'\n'
'Once upon a time there were three little sisters; and their names were\n'
'Elsie'
',\n'
'Lacie'
' and\n'
'Tillie'
';\nand they lived at the bottom of a well.'
'\n'
'...'
'\n'  
    
'''</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-stripped-strings" tabindex="-1"><a class="header-anchor" href="#_3-2-stripped-strings" aria-hidden="true">#</a> 3.2 <strong>.stripped_strings</strong></h4>
<p>输出的字符串中可能包含了很多空格或空行,使用 <code v-pre>.stripped_strings</code> 可以去除多余空白内容</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> string <span class="token keyword">in</span> soup<span class="token punctuation">.</span>stripped_strings<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">repr</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token triple-quoted-string string">'''

"The Dormouse's story"
"The Dormouse's story"
'Once upon a time there were three little sisters; and their names were'
'Elsie'
','
'Lacie'
'and'
'Tillie'
';\nand they lived at the bottom of a well.'
'...'

'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、-父节点" tabindex="-1"><a class="header-anchor" href="#_4、-父节点" aria-hidden="true">#</a> 4、 父节点</h3>
<p>继续分析文档树,每个tag或字符串都有父节点:被包含在某个tag中</p>
<h4 id="_4-1-parent" tabindex="-1"><a class="header-anchor" href="#_4-1-parent" aria-hidden="true">#</a> 4.1 .parent</h4>
<p>通过 <code v-pre>.parent</code> 属性来获取某个元素的父节点.在例子“爱丽丝”的文档中,&lt;head&gt;标签是&lt;title&gt;标签的父节点:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>title_tag <span class="token operator">=</span> soup<span class="token punctuation">.</span>title
title_tag
<span class="token comment"># &lt;title>The Dormouse's story&lt;/title></span>
title_tag<span class="token punctuation">.</span>parent
<span class="token comment"># &lt;head>&lt;title>The Dormouse's story&lt;/title>&lt;/head></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文档的顶层节点比如&lt;html&gt;的父节点是 <code v-pre>BeautifulSoup</code> 对象:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>html_tag <span class="token operator">=</span> soup<span class="token punctuation">.</span>html
<span class="token builtin">type</span><span class="token punctuation">(</span>html_tag<span class="token punctuation">.</span>parent<span class="token punctuation">)</span>
<span class="token comment"># &lt;class 'bs4.BeautifulSoup'></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、beautifulsoup的搜索文档树" tabindex="-1"><a class="header-anchor" href="#三、beautifulsoup的搜索文档树" aria-hidden="true">#</a> 三、beautifulsoup的搜索文档树</h2>
<h3 id="_1、find-all" tabindex="-1"><a class="header-anchor" href="#_1、find-all" aria-hidden="true">#</a> 1、find_all</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>find_all<span class="token punctuation">(</span> name <span class="token punctuation">,</span> attrs <span class="token punctuation">,</span> recursive <span class="token punctuation">,</span> string <span class="token punctuation">,</span> <span class="token operator">**</span>kwargs <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>find_all()</code> 方法搜索当前tag的所有tag子节点,并判断是否符合过滤器的条件:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;title>The Dormouse's story&lt;/title>]</span>

soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">,</span> <span class="token string">"title"</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;p class="title">&lt;b>The Dormouse's story&lt;/b>&lt;/p>]</span>

soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/tillie" id="link3">Tillie&lt;/a>]</span>

soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token string">"link2"</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>]</span>

<span class="token keyword">import</span> re
<span class="token comment"># 模糊查询 包含sisters的就可以</span>
soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span>string<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">"sisters"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 'Once upon a time there were three little sisters; and their names were\n'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有几个方法很相似,还有几个方法是新的,参数中的 <code v-pre>string</code> 和 <code v-pre>id</code> 是什么含义? 为什么 <code v-pre>find_all(&quot;p&quot;, &quot;title&quot;)</code> 返回的是CSS Class为”title”的&lt;p&gt;标签? 我们来仔细看一下 <code v-pre>find_all()</code> 的参数.</p>
<h4 id="_1-1-name-参数" tabindex="-1"><a class="header-anchor" href="#_1-1-name-参数" aria-hidden="true">#</a> 1.1 name 参数</h4>
<p><code v-pre>name</code> 参数可以查找所有名字为 <code v-pre>name</code> 的tag,字符串对象会被自动忽略掉.</p>
<p>简单的用法如下:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;title>The Dormouse's story&lt;/title>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索 <code v-pre>name</code> 参数的值可以使任一类型的 过滤器 ,字符串,正则表达式,列表,方法或是 <code v-pre>True</code> .</p>
<p><strong>&lt;1&gt; 传字符串</strong></p>
<p>最简单的过滤器是字符串.在搜索方法中传入一个字符串参数,Beautiful Soup会查找与字符串完整匹配的内容,下面的例子用于查找文档中所有的<code v-pre>&lt;b&gt;</code>标签</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;b>The Dormouse's story&lt;/b>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>&lt;2&gt; 传正则表达式</strong></p>
<p>如果传入正则表达式作为参数,Beautiful Soup会通过正则表达式的 <code v-pre>match()</code> 来匹配内容.下面例子中找出所有以b开头的标签,这表示&lt;body&gt;和&lt;b&gt;标签都应该被找到</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re
<span class="token keyword">for</span> tag <span class="token keyword">in</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">"^b"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>tag<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment"># body</span>
<span class="token comment"># b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>&lt;3&gt; 传列表</strong></p>
<p>如果传入列表参数,Beautiful Soup会将与列表中任一元素匹配的内容返回.下面代码找到文档中所有&lt;a&gt;标签和&lt;b&gt;标签</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;b>The Dormouse's story&lt;/b>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/tillie" id="link3">Tillie&lt;/a>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-keyword-参数" tabindex="-1"><a class="header-anchor" href="#_1-2-keyword-参数" aria-hidden="true">#</a> 1.2 <strong>keyword 参数</strong></h4>
<p>如果一个指定名字的参数不是搜索内置的参数名,搜索时会把该参数当作指定名字tag的属性来搜索,如果包含一个名字为 <code v-pre>id</code> 的参数,Beautiful Soup会搜索每个tag的”id”属性.</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token string">'link2'</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>]</span>

<span class="token keyword">import</span> re
<span class="token comment"># 超链接包含elsie标签</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>href<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">"elsie"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>]</span>
<span class="token comment"># 以The作为开头的字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>text<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">"^The"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment"># ["The Dormouse's story", "The Dormouse's story"]</span>
<span class="token comment"># class选择器包含st的节点</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>class_<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">"st"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索指定名字的属性时可以使用的参数值包括 字符串 , 正则表达式 , 列表, True .</p>
<p>下面的例子在文档树中查找所有包含 <code v-pre>id</code> 属性的tag,无论 <code v-pre>id</code> 的值是什么:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>,</span>
<span class="token comment">#  &lt;a class="sister" href="http://example.com/tillie" id="link3">Tillie&lt;/a>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用多个指定名字的参数可以同时过滤tag的多个属性:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>href<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">"elsie"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token string">'link1'</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/elsie" id="link1">three&lt;/a>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里我们想用 class 过滤，不过 class 是 python 的关键词，这怎么办？加个下划线就可以</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">"sister"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">'''
[&lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>,
&lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>,
&lt;a class="sister" href="http://example.com/tillie" id="link3">Tillie&lt;/a>
]

'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>find_all()</code> 方法的 <code v-pre>attrs</code> 参数定义一个字典参数来搜索包含特殊属性的tag:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>data_soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"data-foo"</span><span class="token punctuation">:</span> <span class="token string">"value"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;div data-foo="value">foo!&lt;/div>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：如何查看条件id和class同时存在时的写法</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">"story"</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token string">"x"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">,</span> attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"class"</span><span class="token punctuation">:</span><span class="token string">"story"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">:</span><span class="token string">"x"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-text-参数" tabindex="-1"><a class="header-anchor" href="#_1-3-text-参数" aria-hidden="true">#</a> 1.3  <strong>text 参数</strong></h4>
<p>通过 <code v-pre>text</code> 参数可以搜搜文档中的字符串内容.与 <code v-pre>name</code> 参数的可选值一样, <code v-pre>text</code> 参数接受 字符串 , 正则表达式 , 列表, True</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> re

<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">"Elsie"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># ['Elsie']</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"Tillie"</span><span class="token punctuation">,</span> <span class="token string">"Elsie"</span><span class="token punctuation">,</span> <span class="token string">"Lacie"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># ['Elsie', 'Lacie', 'Tillie']</span>

<span class="token comment"># 只要包含Dormouse就可以</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>text<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">"Dormouse"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># ["The Dormouse's story", "The Dormouse's story"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-limit-参数" tabindex="-1"><a class="header-anchor" href="#_1-4-limit-参数" aria-hidden="true">#</a> 1.4 <strong>limit 参数</strong></h4>
<p><code v-pre>find_all()</code> 方法返回全部的搜索结构,如果文档树很大那么搜索会很慢.如果我们不需要全部结果,可以使用 <code v-pre>limit</code> 参数限制返回结果的数量.效果与SQL中的limit关键字类似,当搜索到的结果数量达到 <code v-pre>limit</code> 的限制时,就停止搜索返回结果.</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span>limit<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">'''
[&lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>, 
&lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>]
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、find" tabindex="-1"><a class="header-anchor" href="#_2、find" aria-hidden="true">#</a> 2、find()</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>find<span class="token punctuation">(</span> name <span class="token punctuation">,</span> attrs <span class="token punctuation">,</span> recursive <span class="token punctuation">,</span> string <span class="token punctuation">,</span> <span class="token operator">**</span>kwargs <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>find_all()</code> 方法将返回文档中符合条件的所有tag,尽管有时候我们只想得到一个结果.比如文档中只有一个&lt;body&gt;标签,那么使用 <code v-pre>find_all()</code> 方法来查找&lt;body&gt;标签就不太合适, 使用 <code v-pre>find_all</code> 方法并设置 <code v-pre>limit=1</code> 参数不如直接使用 <code v-pre>find()</code> 方法.下面两行代码是等价的:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">,</span> limit<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;title>The Dormouse's story&lt;/title>]</span>

soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">)</span>
<span class="token comment"># &lt;title>The Dormouse's story&lt;/title></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>唯一的区别是 <code v-pre>find_all()</code> 方法的返回结果是值包含一个元素的列表,而 <code v-pre>find()</code> 方法直接返回结果.</p>
<p><code v-pre>find_all()</code> 方法没有找到目标是返回空列表, <code v-pre>find()</code> 方法找不到目标时,返回 <code v-pre>None</code> .</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">"nosuchtag"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>soup.head.title</code> 是 tag的名字 方法的简写.这个简写的原理就是多次调用当前tag的 <code v-pre>find()</code> 方法:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>soup<span class="token punctuation">.</span>head<span class="token punctuation">.</span>title
<span class="token comment"># &lt;title>The Dormouse's story&lt;/title></span>

soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span>
<span class="token comment"># &lt;title>The Dormouse's story&lt;/title></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、beautifulsoup的css选择器" tabindex="-1"><a class="header-anchor" href="#四、beautifulsoup的css选择器" aria-hidden="true">#</a> 四、beautifulsoup的css选择器</h2>
<p>我们在写 CSS 时，标签名不加任何修饰，类名前加点，id名前加 #，在这里我们也可以利用类似的方法来筛选元素，用到的方法是 **soup.select()，**返回类型是 <strong>list</strong></p>
<h3 id="_1、通过标签名查找" tabindex="-1"><a class="header-anchor" href="#_1、通过标签名查找" aria-hidden="true">#</a> 1、通过标签名查找</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#[&lt;title>The Dormouse's story&lt;/title>]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">#[&lt;b>The Dormouse's story&lt;/b>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、通过类名查找" tabindex="-1"><a class="header-anchor" href="#_2、通过类名查找" aria-hidden="true">#</a> 2、通过类名查找</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">".sister"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 

<span class="token triple-quoted-string string">'''
[&lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>, 
&lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>, 
&lt;a class="sister" href="http://example.com/tillie" id="link3">Tillie&lt;/a>]

'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、id名查找" tabindex="-1"><a class="header-anchor" href="#_3、id名查找" aria-hidden="true">#</a> 3、id名查找</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">"#link1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/elsie" id="link1">Elsie&lt;/a>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、组合查找" tabindex="-1"><a class="header-anchor" href="#_4、组合查找" aria-hidden="true">#</a> 4、组合查找</h3>
<p>组合查找即和写 class 文件时，标签名与类名、id名进行的组合原理是一样的，例如查找 p 标签中，id 等于 link1的内容，二者需要用空格分开</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">"p #link2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">#[&lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接子标签查找</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">"p > #link2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># [&lt;a class="sister" href="http://example.com/lacie" id="link2">Lacie&lt;/a>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查找既有class也有id选择器的标签</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a_string = soup.select(".story#test")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找有多个class选择器的标签</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a_string = soup.select(".story.test")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找有多个class选择器和一个id选择器的标签</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a_string = soup.select(".story.test#book")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、属性查找" tabindex="-1"><a class="header-anchor" href="#_5、属性查找" aria-hidden="true">#</a> 5、属性查找</h3>
<p>查找时还可以加入属性元素，属性需要用中括号括起来，注意属性和标签属于同一节点，所以中间不能加空格，否则会无法匹配到。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">"a[href='http://example.com/tillie']"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#[&lt;a class="sister" href="http://example.com/tillie" id="link3">Tillie&lt;/a>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>select 方法返回的结果都是列表形式，可以遍历形式输出，然后用 get_text() 方法来获取它的内容：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">for</span> title <span class="token keyword">in</span> soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span>title<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">'''
Elsie
Lacie
Tillie
'''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>lucky <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


