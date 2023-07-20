<template><div><h2 id="如何高效寻找素数" tabindex="-1"><a class="header-anchor" href="#如何高效寻找素数" aria-hidden="true">#</a> 如何高效寻找素数</h2>
<div class="custom-container tip">
<p class="custom-container-title">素数</p>
<p>如果一个数只能被1和它本身整除，那么这个数就是素数。</p>
</div>
<p>实现一个函数，输入一个正整数<code v-pre>n</code>，函数返回区间<code v-pre>[2,n)</code>中素数的个数。</p>
<p>函数签名如下：<code v-pre>int countPrimes(int n)</code></p>
<h3 id="一般实现" tabindex="-1"><a class="header-anchor" href="#一般实现" aria-hidden="true">#</a> 一般实现</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: [2, n)素数的个数
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">int</span> <span class="token function">countPrimes</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPrime</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/***
 * @Description: 判断一个数是不是素数
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">boolean</span> <span class="token function">isPrime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析问题：该算法的时间复杂度为<code v-pre>O(n^2)</code>，使用<code v-pre>isPrime</code>函数一个一个的进行判断不是高效的做法，而且就算是使用<code v-pre>isPrime</code>函数，也是存在计算冗余的。</p>
<h3 id="稍加优化" tabindex="-1"><a class="header-anchor" href="#稍加优化" aria-hidden="true">#</a> 稍加优化</h3>
<p><code v-pre>isPrime</code>函数是可以进行优化的，优化代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: 判断一个数是不是素数
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">boolean</span> <span class="token function">isPrime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">*</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>i</code>不需要遍历到<code v-pre>n</code>，只需要遍历到<code v-pre>sqrt(n)</code>即可，这是因为<code v-pre>sqrt(n)</code>是反转临界点，一个数等于两个数相乘，中间的临界点就是<code v-pre>sqrt(n)*sqrt(n)</code>，<code v-pre>[2,sqrt(n)]</code>之间如果找不到可整除的因子，那么<code v-pre>[sqrt(n),n]</code>之间也肯定找不到可整除的因子了，因为是后半部分是前半部分的因子交换所得，这就叫做“乘法因子的交换性”。</p>
<h3 id="高效实现" tabindex="-1"><a class="header-anchor" href="#高效实现" aria-hidden="true">#</a> 高效实现</h3>
<p>使用“筛数法”进行实现，2是素数，那么在<code v-pre>n</code>的范围中，2的倍数就不再是素数了；3是素数，那么在<code v-pre>n</code>的范围中，3的倍数就不再是素数了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: 筛数法实现求解素数个数
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">int</span> <span class="token function">countPrimes</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//各个数的标记</span>
    <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> isPrime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//填充都为true</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>isPrime<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//从头开始，把所有n范围内的素数的倍数都标记为false</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果i为素数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isPrime<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//实际标记过程</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j <span class="token operator">+=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                isPrime<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//求解true的个数</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> isPrime<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isPrime<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//最后结果去掉两个，因为0和1也都是true</span>
    <span class="token keyword">return</span> count <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的过程仍然是可以进行优化的，优化的地方主要有两点：</p>
<ul>
<li>外层循环：因为乘法因子的对称性，遍历范围可以设置为<code v-pre>[2,sqrt(n)]</code>。</li>
<li>内层循环：<code v-pre>j</code>每次都从2开始存在冗余计算，只需要从<code v-pre>i</code>的平方开始标记即可。</li>
</ul>
<p>重新优化后的代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: 筛数法实现求解素数个数
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">int</span> <span class="token function">countPrimes</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//各个数的标记</span>
    <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> isPrime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//填充都为true</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>isPrime<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//从头开始，把所有n范围内的素数的倍数都标记为false</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">*</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果i为素数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isPrime<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//实际标记过程</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">*</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j <span class="token operator">+=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                isPrime<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//求解true的个数</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> isPrime<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isPrime<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//最后结果去掉两个，因为0和1也都是true</span>
    <span class="token keyword">return</span> count <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的算法有一个名字，叫做<code v-pre>Sieve of Eratosthenes</code>，该算法的时间复杂度为<code v-pre>O(NloglogN)</code>。</p>
<h2 id="如何高效进行模幂运算" tabindex="-1"><a class="header-anchor" href="#如何高效进行模幂运算" aria-hidden="true">#</a> 如何高效进行模幂运算</h2>
<h3 id="如何处理数组指数" tabindex="-1"><a class="header-anchor" href="#如何处理数组指数" aria-hidden="true">#</a> 如何处理数组指数</h3>
<h3 id="如何处理mod运算" tabindex="-1"><a class="header-anchor" href="#如何处理mod运算" aria-hidden="true">#</a> 如何处理mod运算</h3>
<h3 id="如何高效求幂" tabindex="-1"><a class="header-anchor" href="#如何高效求幂" aria-hidden="true">#</a> 如何高效求幂</h3>
<h2 id="如何运用二分搜索算法" tabindex="-1"><a class="header-anchor" href="#如何运用二分搜索算法" aria-hidden="true">#</a> 如何运用二分搜索算法</h2>
<h2 id="如何高效解决接雨水问题" tabindex="-1"><a class="header-anchor" href="#如何高效解决接雨水问题" aria-hidden="true">#</a> 如何高效解决接雨水问题</h2>
<h2 id="如何去除有序数组的重复元素" tabindex="-1"><a class="header-anchor" href="#如何去除有序数组的重复元素" aria-hidden="true">#</a> 如何去除有序数组的重复元素</h2>
<h2 id="如何寻找最长回文子串" tabindex="-1"><a class="header-anchor" href="#如何寻找最长回文子串" aria-hidden="true">#</a> 如何寻找最长回文子串</h2>
<h2 id="如何运用贪心思想玩跳跃游戏" tabindex="-1"><a class="header-anchor" href="#如何运用贪心思想玩跳跃游戏" aria-hidden="true">#</a> 如何运用贪心思想玩跳跃游戏</h2>
<h2 id="如何运用贪心算法做时间管理" tabindex="-1"><a class="header-anchor" href="#如何运用贪心算法做时间管理" aria-hidden="true">#</a> 如何运用贪心算法做时间管理</h2>
<h2 id="如何判定括号合法性" tabindex="-1"><a class="header-anchor" href="#如何判定括号合法性" aria-hidden="true">#</a> 如何判定括号合法性</h2>
<h2 id="如何调度考生的座位" tabindex="-1"><a class="header-anchor" href="#如何调度考生的座位" aria-hidden="true">#</a> 如何调度考生的座位</h2>
<h2 id="union-find算法详解" tabindex="-1"><a class="header-anchor" href="#union-find算法详解" aria-hidden="true">#</a> Union-Find算法详解</h2>
<h2 id="union-find算法应用" tabindex="-1"><a class="header-anchor" href="#union-find算法应用" aria-hidden="true">#</a> Union-Find算法应用</h2>
<h2 id="一行代码就能解决的算法题" tabindex="-1"><a class="header-anchor" href="#一行代码就能解决的算法题" aria-hidden="true">#</a> 一行代码就能解决的算法题</h2>
<h3 id="nim游戏" tabindex="-1"><a class="header-anchor" href="#nim游戏" aria-hidden="true">#</a> Nim游戏</h3>
<h3 id="石子游戏" tabindex="-1"><a class="header-anchor" href="#石子游戏" aria-hidden="true">#</a> 石子游戏</h3>
<h3 id="电灯开关问题" tabindex="-1"><a class="header-anchor" href="#电灯开关问题" aria-hidden="true">#</a> 电灯开关问题</h3>
</div></template>


