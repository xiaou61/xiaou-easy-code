<template><div><h2 id="常用的位操作" tabindex="-1"><a class="header-anchor" href="#常用的位操作" aria-hidden="true">#</a> 常用的位操作</h2>
<h3 id="java中的位操作符" tabindex="-1"><a class="header-anchor" href="#java中的位操作符" aria-hidden="true">#</a> Java中的位操作符</h3>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<ul>
<li><code v-pre>Java</code>中位操作符的操作数只能是<strong>整型<code v-pre>（byte、short、int、long）</code>和字符型数据<code v-pre>（char）</code>。</strong></li>
<li><code v-pre>Java</code>中位操作符<strong>一共有7个，其中4个是位逻辑运算符，3个是移位运算符。</strong></li>
<li>使用按位操作符时要注意：相等<code v-pre>（==）</code>与不相等<code v-pre>（!=）</code>的优先级在按位操作符之上！这意味着，位运算符的<strong>优先级极小，所以使用位运算符时，最好加上括号。</strong></li>
</ul>
</div>
<h4 id="_4个位逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_4个位逻辑运算符" aria-hidden="true">#</a> 4个位逻辑运算符</h4>
<ul>
<li><strong>位逻辑运算符</strong>包括按位取反<code v-pre>（~）</code>、按位与<code v-pre>（&amp;）</code>、按位或<code v-pre>（|）</code>和按位异或<code v-pre>（^）</code>4种。
<ul>
<li>与操作符 <code v-pre>“&amp;”</code>，如果两个输入位都是 1，那么输出位是 1，否则输入位是 0。<strong>【对应位全都为1，则为1】</strong></li>
<li>或操作符 <code v-pre>“|”</code> ，如果两个输入位有一个是 1，那么输出位是 1，只有两个输入位都是 0，输出位才是 0。<strong>【对应位含有1，则为1】</strong></li>
<li>异或运算符 <code v-pre>“^”</code>，如果两个输入位都为 1 或者都为 0，那么输出位是 0，否则输出位是 1。<strong>【对应位相同，则为0，反之为1】</strong></li>
<li>非运算符 <code v-pre>“~”</code>，这个一元操作符，只能对一个数操作，规则是输出位与输入位相反。<strong>【一元操作符，输入1，则输出0；输入0，则输出1】</strong></li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//转化为二进制：0101</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token comment">//转化为二进制：1001</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
    <span class="token comment">//与运算，二进制结果为 0001，打印结果为 1</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1 <span class="token operator">&amp;</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//或运算，二进制结果为 1101，打印结果为 13</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1 <span class="token operator">|</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//异或运算，二进制结果为 1100，打印结果为 12</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1 <span class="token operator">^</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//非运算，打印结果 -6</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">~</span>num1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//非运算，二进制结果为 11111111 11111111 11111111 11111010</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toBinaryString</span><span class="token punctuation">(</span><span class="token operator">~</span>num1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">补充</p>
<ul>
<li>数字的二进制表现形式为 <strong>“有符号的二进制补码”。</strong>
<ul>
<li>原码：数字的二进制表示法，<strong>最高位为符号位，“ 0 ” 为正，“ 1 ” 为负。</strong></li>
<li>反码：正数的反码与原码相同，<strong>负数的反码对原码逐位取反，符号位除外。</strong></li>
<li>补码：正数的补码与原码相同，<strong>负数的补码在其反码末位加 1。</strong></li>
<li>负数的二进制算法（以 <code v-pre>-6</code> 为例，<code v-pre>int</code>类型占 <code v-pre>4</code> 个字节， <code v-pre>1</code> 个字节是 <code v-pre>8</code> 位）：
<ul>
<li>求<code v-pre>-6</code> 的原码，即：<code v-pre>10000000 00000000 00000000 00000110</code></li>
<li>求该二进制数的反码，即：<code v-pre>11111111 11111111 11111111 11111001</code></li>
<li>对以上求得的二进制数加 <code v-pre>1</code>，即：<code v-pre>11111111 11111111 11111111 11111010</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<div class="custom-container tip">
<p class="custom-container-title">说明</p>
<p><strong>位逻辑运算符</strong>用来操作整数的二进制位，会对两个参数中对应的位执行布尔代数运算，并最终生成一个结果。</p>
</div>
<h4 id="_3个移位运算符" tabindex="-1"><a class="header-anchor" href="#_3个移位运算符" aria-hidden="true">#</a> 3个移位运算符</h4>
<ul>
<li>移位运算符包括左移<code v-pre>（&lt;&lt;）</code>、右移<code v-pre>（&gt;&gt;）</code>和无符号右移<code v-pre>（&gt;&gt;&gt;）</code>3种。
<ul>
<li>左移位操作符 “<code v-pre>&lt;&lt;</code>” 按照操作符右侧指定的位数将操作符左边的操作数向左移动（低位补零）。【<strong>左移之后，低位补0</strong>】</li>
<li>“有符号”右移位操作符 “<code v-pre>&gt;&gt;</code>” 按照操作符右侧指定的位数将操作符左边的操作数向右移动。该操作符使用 “<strong>符号扩展</strong>”：若符号为正，则高位插入 0；若符号为负，则高位插入 1。【<strong>右移之后，高位进行符号扩展</strong>】</li>
<li>“无符号”右移位操作符 “<code v-pre>&gt;&gt;&gt;</code>”，该操作符使用 “<strong>零扩展</strong>”，无论正负，都在高位插入 0。【<strong>右移之后，高位进行零扩展</strong>】</li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//二进制 1111;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
    <span class="token comment">//向右边移动两位，二进制结果为 0011，打印结果为 3</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">>></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//向左边移动两位，二进制结果为 111100，打印结果为 60</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>移位运算符可以与等号组合使用（<code v-pre>&lt;&lt;=</code> 或 <code v-pre>&gt;&gt;=</code> 或 <code v-pre>&gt;&gt;&gt;=</code>），表示操作符左边的值会移动由右边数值指定的位数，再将得到的结果赋给左边的变量。</li>
<li>在数字没有溢出的前提下，对于正数和负数，<strong>左移一位都相当于乘以2的1次方，左移<code v-pre>n</code>位就相当于乘以2的<code v-pre>n</code>次方，右移一位相当于除2，右移<code v-pre>n</code>位相当于除以2的<code v-pre>n</code>次方。</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token comment">// 左移1位，相当于乘2的1次方</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 20</span>
    <span class="token comment">// 左移4位，相当于乘2的4次方</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 160</span>
    <span class="token comment">// 右移1位，相当于除2的1次方</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 5</span>
    <span class="token comment">// 左移3位，相当于除2的3次方</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">>></span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">说明</p>
<p><strong>移位操作符</strong>的运算对象也是二进制的 “位”，但是只能用来处理整数类型。</p>
</div>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<ul>
<li><strong>逻辑运算符</strong>包括逻辑与<code v-pre>（&amp;&amp;）</code>、逻辑或<code v-pre>（||）</code>和逻辑非<code v-pre>（!）</code>，前两个是<strong>二元运算符</strong>，后一个是<strong>一元运算符</strong>。</li>
</ul>
</div>
<blockquote>
<p>参考：<a href="https://www.cnblogs.com/blknemo/p/14141417.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/blknemo/p/14141417.html<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="几个有趣的位操作" tabindex="-1"><a class="header-anchor" href="#几个有趣的位操作" aria-hidden="true">#</a> 几个有趣的位操作</h3>
<ul>
<li><strong>利用或操作 <code v-pre>|</code> 和空格将英文字符转换为小写</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token punctuation">(</span><span class="token char">'a'</span> <span class="token operator">|</span> <span class="token char">' '</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">'a'</span>
<span class="token punctuation">(</span><span class="token char">'A'</span> <span class="token operator">|</span> <span class="token char">' '</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">'a'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>利用与操作 <code v-pre>&amp;</code> 和下划线将英文字符转换为大写</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token punctuation">(</span><span class="token char">'b'</span> <span class="token operator">&amp;</span> <span class="token char">'_'</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">'B'</span>
<span class="token punctuation">(</span><span class="token char">'B'</span> <span class="token operator">&amp;</span> <span class="token char">'_'</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">'B'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>利用异或操作 <code v-pre>^</code> 和空格进行英文字符大小写互换</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token punctuation">(</span><span class="token char">'d'</span> <span class="token operator">^</span> <span class="token char">' '</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">'D'</span>
<span class="token punctuation">(</span><span class="token char">'D'</span> <span class="token operator">^</span> <span class="token char">' '</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token char">'d'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上操作能够产生奇特效果的原因在于 <code v-pre>ASCII码</code>。<strong>字符的<code v-pre>ASCII码</code>其实就是数字</strong>，恰巧这些字符对应的数字通过位运算就能得到正确的结果。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 测试和空格进行按位或操作转为小写字母</span>
    <span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token char">'a'</span> <span class="token operator">|</span> <span class="token char">' '</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j1 <span class="token operator">=</span> <span class="token char">'A'</span> <span class="token operator">|</span> <span class="token char">' '</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"{},{}"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> i1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> j1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a,a</span>
    <span class="token comment">// 测试和下划线进行按位与操作转为大写字母</span>
    <span class="token keyword">int</span> i2 <span class="token operator">=</span> <span class="token char">'a'</span> <span class="token operator">&amp;</span> <span class="token char">'_'</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j2 <span class="token operator">=</span> <span class="token char">'A'</span> <span class="token operator">&amp;</span> <span class="token char">'_'</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"{},{}"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> i2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> j2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//A,A</span>
    <span class="token comment">// 测试和空格进行按位异或操作进行大小写转换</span>
    <span class="token keyword">int</span> i3 <span class="token operator">=</span> <span class="token char">'a'</span> <span class="token operator">^</span> <span class="token char">' '</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j3 <span class="token operator">=</span> <span class="token char">'A'</span> <span class="token operator">^</span> <span class="token char">' '</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"{},{}"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> i3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> j3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//A,a</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>判断两个数是否异号</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> f <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">^</span> y<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> f <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">^</span> y<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>不用临时变量交换两个数</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
a <span class="token operator">^=</span> b<span class="token punctuation">;</span>
b <span class="token operator">^=</span> a<span class="token punctuation">;</span>
a <span class="token operator">^=</span> b<span class="token punctuation">;</span>
<span class="token comment">// 现在 a = 2, b = 1</span>
<span class="token comment">// 或者</span>
b <span class="token operator">^=</span> a<span class="token punctuation">;</span>
a <span class="token operator">^=</span> b<span class="token punctuation">;</span>
b <span class="token operator">^=</span> a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>加一</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
n <span class="token operator">=</span> <span class="token operator">-</span><span class="token operator">~</span>n<span class="token punctuation">;</span>
<span class="token comment">// 现在 n = 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>减一</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
n <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">-</span>n<span class="token punctuation">;</span>
<span class="token comment">// 现在 n = 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">位操作的黑科技玩法</p>
<ul>
<li>有一个叫做<code v-pre>Bit Twiddling Hacks</code>的外国网站收集了几乎所有位操作的黑科技玩法。</li>
<li>网址：<a href="http://graphics.stanford.edu/~seander/bithacks.html#ReverseParallel" target="_blank" rel="noopener noreferrer">http://graphics.stanford.edu/~seander/bithacks.html#ReverseParallel<ExternalLinkIcon/></a></li>
</ul>
</div>
<h3 id="n-n-1-的运用" tabindex="-1"><a class="header-anchor" href="#n-n-1-的运用" aria-hidden="true">#</a> n&amp;(n-1)的运用</h3>
<ul>
<li>
<p><strong><code v-pre>n &amp; (n-1)</code> 是算法中常见的位操作，作用是消除数字 <code v-pre>n</code> 的二进制表示中的最后一个 1</strong>。</p>
</li>
<li>
<p>其核心逻辑就是，<code v-pre>n - 1</code> 一定可以消除最后一个 1，同时把其后的 0 都变成 1，这样再和 <code v-pre>n</code> 做一次 <code v-pre>&amp;</code> 运算，就可以仅仅把最后一个 1 变成 0 了。</p>
</li>
</ul>
<p><strong>1、计算汉明权重<code v-pre>（Hamming Weight）</code></strong></p>
<p><code v-pre>LeetCode</code>相关题目：<a href="https://leetcode.cn/problems/number-of-1-bits/" target="_blank" rel="noopener noreferrer">位1的个数<ExternalLinkIcon/></a></p>
<ul>
<li>就是让你返回 <code v-pre>n</code> 的二进制表示中有几个 1。因为 <code v-pre>n &amp; (n - 1)</code> 可以消除最后一个 1，所以可以用一个循环不停地消除 1 同时计数，直到 <code v-pre>n</code> 变成 0 为止。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hammingWeight</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">=</span> n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sum<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、判断一个数是不是 2 的指数</strong></p>
<p><code v-pre>LeetCode</code>相关题目：<a href="https://leetcode.cn/problems/power-of-two/" target="_blank" rel="noopener noreferrer">2的幂<ExternalLinkIcon/></a></p>
<p>一个数如果是 2 的指数，那么它的二进制表示一定只含有一个 1：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">2</span><span class="token operator">^</span><span class="token number">0</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0b0001</span>
<span class="token number">2</span><span class="token operator">^</span><span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0b0010</span>
<span class="token number">2</span><span class="token operator">^</span><span class="token number">2</span> <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">=</span> <span class="token number">0b0100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用 <code v-pre>n &amp; (n-1)</code> 的技巧就很简单了（注意运算符优先级，括号不可以省略）：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    n <span class="token operator">=</span> n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//或者</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一句代码解决问题</span>
    <span class="token keyword">return</span> n <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="a-a-0的运用" tabindex="-1"><a class="header-anchor" href="#a-a-0的运用" aria-hidden="true">#</a> a^a=0的运用</h3>
<div class="custom-container tip">
<p class="custom-container-title">异或运算的性质</p>
<ul>
<li>一个数和它本身做异或运算结果为 0，即 <code v-pre>a ^ a = 0</code>；一个数和 0 做异或运算的结果为它本身，即 <code v-pre>a ^ 0 = a</code>。</li>
<li>满足<strong>结合律和交换律。</strong></li>
<li>由于异或运算满足交换律和结合律，所以<strong>总是能把成对儿的数字消去，留下缺失的那个元素。</strong></li>
</ul>
</div>
<p><strong>1、查找只出现一次的元素</strong></p>
<p><code v-pre>LeetCode</code>相关题目：<a href="https://leetcode.cn/problems/single-number/" target="_blank" rel="noopener noreferrer">只出现一次的数字<ExternalLinkIcon/></a></p>
<ul>
<li>把所有数字进行异或，成对儿的数字就会变成 0，落单的数字和 0 做异或还是它本身，所以最后异或的结果就是只出现一次的元素。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 满足结合律和交换律</span>
<span class="token comment">// 以[4, 1, 2, 1, 2]为例</span>
<span class="token number">0</span> <span class="token operator">^</span> <span class="token number">4</span> <span class="token operator">^</span> <span class="token number">1</span> <span class="token operator">^</span> <span class="token number">2</span> <span class="token operator">^</span> <span class="token number">1</span> <span class="token operator">^</span> <span class="token number">2</span>
<span class="token number">0</span> <span class="token operator">^</span> <span class="token number">4</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">^</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">^</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token number">0</span> <span class="token operator">^</span> <span class="token number">4</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">^</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token number">0</span> <span class="token operator">^</span> <span class="token number">4</span> <span class="token operator">^</span> <span class="token number">0</span>
<span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">^</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token number">4</span>
<span class="token number">0</span> <span class="token operator">^</span> <span class="token number">4</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">^=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、寻找缺失的元素</strong></p>
<p><code v-pre>LeetCode</code>相关题目：<a href="https://leetcode.cn/problems/missing-number/" target="_blank" rel="noopener noreferrer">丢失的数字<ExternalLinkIcon/></a></p>
<ul>
<li>给一个长度为 <code v-pre>n</code> 的数组，其索引应该在 <code v-pre>[0,n)</code>，但是现在你要装进去 <code v-pre>n + 1</code> 个元素 <code v-pre>[0,n]</code>，那么肯定有一个元素装不下，请找出这个缺失的元素。</li>
<li>思路一：把这个数组排个序，然后遍历一遍，就可以很容易的找到缺失的那个元素</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>思路二：利用数据结构的特性，用一个 <code v-pre>HashSet</code> 把数组里出现的数字都储存下来，再遍历 <code v-pre>[0,n]</code> 之间的数字，去 <code v-pre>HashSet</code> 中查询，也可以很容易查出那个缺失的元素。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>思路三：利用等差数列求和公式，题目的意思可以这样理解：现在有个等差数列 <code v-pre>0, 1, 2,..., n</code>，其中少了某一个数字，那这个数字就是 <code v-pre>sum(0,1,..n) - sum(nums)</code> 。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">*</span> nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum2 <span class="token operator">+=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum1 <span class="token operator">-</span> sum2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>思路四：利用一个数和它本身做异或运算结果为 0，一个数和 0 做异或运算还是它本身的性质。</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">异或运算满足交换律和结合律</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">2</span> <span class="token operator">^</span> <span class="token number">3</span> <span class="token operator">^</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">^</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">^</span> <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<p>比如说 <code v-pre>nums = [0,3,1,4]</code>：</p>
<ul>
<li>
<p>假设先把索引补一位，然后让每个元素和自己相等的索引相对应：</p>
</li>
<li>
<p>通过上图可以发现：<strong>只要把所有的元素和索引做异或运算，成对儿的数字都会消为 0，只有这个落单的元素会剩下。</strong></p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 时间复杂度O(N)</span>
<span class="token comment">// 空间复杂度O(1)</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 把索引全都异或一遍，范围是[0,n]，左右都包括，即n+1个数</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">^=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 把nums中的值全都异或一遍，即n个数</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">^=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">missingNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 时间复杂度O(N)</span>
<span class="token comment">// 空间复杂度O(N)</span>
    <span class="token comment">// list放置索引和nums中的所有值，后续依次对list中的数据进行异或操作</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 把索引全都加入list</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 把nums中的值全都加入list</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 对list中的所有值进行异或操作</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> integer <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">^=</span> integer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 本思路直接将题目演变成了LeetCode的第136题目，即只出现一次的数字。</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两道常考的阶乘算法题" tabindex="-1"><a class="header-anchor" href="#两道常考的阶乘算法题" aria-hidden="true">#</a> 两道常考的阶乘算法题</h2>
<h3 id="题一" tabindex="-1"><a class="header-anchor" href="#题一" aria-hidden="true">#</a> 题一</h3>
<p><code v-pre>LeetCode</code>相关题目：<a href="https://leetcode.cn/problems/factorial-trailing-zeroes/" target="_blank" rel="noopener noreferrer">阶乘后的零<ExternalLinkIcon/></a></p>
<ul>
<li>
<p><strong>输入一个非负整数 <code v-pre>n</code>，请你计算阶乘 <code v-pre>n!</code> 的结果末尾有几个 0</strong>。</p>
</li>
<li>
<p>比如说输入 <code v-pre>n = 5</code>，算法返回 1，因为 <code v-pre>5! = 120</code>，末尾有一个 0。</p>
</li>
<li>
<p>两个数相乘结果末尾有 0，一定是因为两个数中有因子 2 和 5，因为 10 = 2 x 5。</p>
<ul>
<li><strong>问题转化为：<code v-pre>n!</code> 最多可以分解出多少个因子 2 和 5</strong>？</li>
<li>比如说 <code v-pre>n = 25</code>，那么 <code v-pre>25!</code> 最多可以分解出几个 2 和 5 相乘？这个主要取决于能分解出几个因子 5，因为每个偶数都能分解出因子 2，因子 2 肯定比因子 5 多得多。<code v-pre>25!</code> 中 5 可以提供一个，10 可以提供一个，15 可以提供一个，20 可以提供一个，25 可以提供两个，总共有 6 个因子 5，所以 <code v-pre>25!</code> 的结果末尾就有 6 个 0。</li>
<li><strong>问题转化为：<code v-pre>n!</code> 最多可以分解出多少个因子 5</strong>？</li>
<li>难点在于像 25，50，125 这样的数，可以提供不止一个因子 5，怎么才能不漏掉呢？</li>
</ul>
</li>
<li>
<p><strong>假设 <code v-pre>n = 125</code>，来算一算 <code v-pre>125!</code> 的结果末尾有几个 0：</strong></p>
<ul>
<li>首先，<strong>125 / 5 = 25</strong>，这一步就是计算有多少个像 5，15，20，25 这些 5 的倍数，它们一定可以提供一个因子 5。</li>
<li>然后，像 25，50，75 这些 25 的倍数，可以提供两个因子 5，那么我们再计算出 <code v-pre>125!</code> 中有 <strong>125 / 25 = 5</strong> 个 25 的倍数，它们每人可以额外再提供一个因子 5。</li>
<li>最后，我们发现 125 = 5 x 5 x 5，像 125，250 这些 125 的倍数，可以提供 3 个因子 5，那么我们还得再计算出 <code v-pre>125!</code> 中有 <strong>125 / 125 = 1</strong> 个 125 的倍数，它还可以额外再提供一个因子 5。</li>
<li><code v-pre>125!</code> 最多可以分解出 25 + 5 + 1 = 31 个因子 5，也就是说阶乘结果的末尾<strong>有 31 个 0。</strong></li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">trailingZeroes</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 
        n / 5
        n / 5 / 5
        n / 5 / 5 / 5
    */</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// d有可能越界</span>
    <span class="token keyword">long</span> d <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token comment">// n可以分解出多少个因子5</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>d <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        d <span class="token operator">*=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// d>n的时候退出循环，n如果是int的最大值，那么d使用int类型有可能越界，所以使用long类型</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">trailingZeroes</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
        n / 5
        n / 5 / 5
        n / 5 / 5 / 5
    */</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">trailingZeroes</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    n / 5
    n / 5 / 5
    n / 5 / 5 / 5
    */</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> d <span class="token operator">=</span> n<span class="token punctuation">;</span> d <span class="token operator">/</span> <span class="token number">5</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> d <span class="token operator">=</span> d <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">+=</span> d <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>时间复杂度是底数为 5 的对数，也就是 <code v-pre>O(logN)</code>。</li>
</ul>
<h3 id="题二" tabindex="-1"><a class="header-anchor" href="#题二" aria-hidden="true">#</a> 题二</h3>
<p><code v-pre>LeetCode</code>相关题目：<a href="https://leetcode.cn/problems/preimage-size-of-factorial-zeroes-function/" target="_blank" rel="noopener noreferrer">阶乘函数后K个零<ExternalLinkIcon/></a></p>
<ul>
<li>
<p><strong>输入一个非负整数 <code v-pre>K</code>，请你计算有多少个 <code v-pre>n</code>，满足 <code v-pre>n!</code> 的结果末尾恰好有 <code v-pre>K</code> 个 0</strong>。</p>
</li>
<li>
<p>比如说输入 <code v-pre>K = 1</code>，算法返回 5，因为 <code v-pre>5!,6!,7!,8!,9!</code> 这 5 个阶乘的结果最后只有一个 0，即有 5 个 <code v-pre>n</code> 满足条件。</p>
</li>
<li>
<p>一个直观地暴力解法就是穷举，<strong>因为随着 <code v-pre>n</code> 的增加，<code v-pre>n!</code> 肯定是递增的，<code v-pre>trailingZeroes(n!)</code> 肯定也是递增的</strong>，伪码逻辑如下：</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> <span class="token operator">+</span>inf<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> res<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>对于这种具有单调性的函数，用 <code v-pre>for</code> 循环遍历，可以用二分查找进行降维打击。</strong></li>
<li>搜索有多少个 <code v-pre>n</code> 满足 <code v-pre>trailingZeroes(n) == K</code>，其实就是在问，<strong>满足条件的 <code v-pre>n</code> 最小是多少，最大是多少，最大值和最小值一减，就可以算出来有多少个 <code v-pre>n</code> 满足条件</strong>，这就是二分查找中<strong>搜索左侧边界</strong>和<strong>搜索右侧边界</strong>。</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">寻找上界和下界</p>
<p>因为二分查找需要给一个<strong>搜索区间</strong>，也就是上界和下界，上述伪码中 <code v-pre>n</code> 的下界显然是 0，但上界是 <code v-pre>+inf</code>，这个正无穷应该如何表示出来呢？</p>
<ul>
<li>首先，数学上的正无穷肯定是无法编程表示出来的，我们一般的方法是用一个非常大的值，大到这个值一定不会被取到。比如说 <code v-pre>int</code> 类型的最大值 <code v-pre>INT_MAX</code>（<code v-pre>2^31 - 1</code>），还不够的话就 <code v-pre>long</code> 类型的最大值 <code v-pre>LONG_MAX</code>（<code v-pre>2^63 - 1</code>）。</li>
<li>需要多大才能<strong>一定不会被取到</strong>呢？<strong>这就需要认真读题，看看题目给的数据范围有多大</strong>。</li>
<li>这道题目实际上给了限制，<code v-pre>K</code> 是在 <code v-pre>[0, 10^9]</code> 区间内的整数，也就是说，<code v-pre>trailingZeroes(n)</code> 的结果最多可以达到 <code v-pre>10^9</code>。然后我们可以反推，当 <code v-pre>trailingZeroes(n)</code> 结果为 <code v-pre>10^9</code> 时，<code v-pre>n</code> 为多少？这个不需要你精确计算出来，你只要找到一个数 <code v-pre>hi</code>，使得 <code v-pre>trailingZeroes(hi)</code> 比 <code v-pre>10^9</code> 大，就可以把 <code v-pre>hi</code> 当做正无穷，作为搜索区间的上界。</li>
<li><code v-pre>trailingZeroes</code> 函数是单调函数，那可以先算一下 <code v-pre>trailingZeroes(INT_MAX)</code> 的结果，比 <code v-pre>10^9</code> 小一些，那再用 <code v-pre>LONG_MAX</code> 算一下，远超 <code v-pre>10^9</code> 了，所以 <strong><code v-pre>LONG_MAX</code> 可以作为搜索的上界。</strong></li>
</ul>
</div>
<ul>
<li><strong>在区间 <code v-pre>[0, LONG_MAX]</code> 中寻找满足 <code v-pre>trailingZeroes(n) == K</code> 的左侧边界和右侧边界</strong>。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">/* 主函数 */</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">preimageSizeFZF</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 左边界和右边界之差 + 1 就是答案</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">right_bound</span><span class="token punctuation">(</span><span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">left_bound</span><span class="token punctuation">(</span><span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 搜索 trailingZeroes(n) == K 的左侧边界 */</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">left_bound</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> lo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> hi <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>lo <span class="token operator">&lt;</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> mid <span class="token operator">=</span> lo <span class="token operator">+</span> <span class="token punctuation">(</span>hi <span class="token operator">-</span> lo<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lo <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            hi <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            hi <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> lo<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 搜索 trailingZeroes(n) == K 的右侧边界 */</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">right_bound</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> lo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> hi <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>lo <span class="token operator">&lt;</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> mid <span class="token operator">=</span> lo <span class="token operator">+</span> <span class="token punctuation">(</span>hi <span class="token operator">-</span> lo<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lo <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            hi <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            lo <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> lo <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 全都改成long类型，避免整型溢出</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">trailingZeroes</span><span class="token punctuation">(</span><span class="token keyword">long</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> d <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>d <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> n <span class="token operator">/</span> d<span class="token punctuation">;</span>
        d <span class="token operator">*=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>时间复杂度主要是二分搜索，从数值上来说 <code v-pre>LONG_MAX</code> 是 <code v-pre>2^63 - 1</code>，虽然大得离谱，但是二分搜索是对数级的复杂度，<code v-pre>log(LONG_MAX)</code> 是一个常数；</li>
<li>每次二分的时候都会调用一次 <code v-pre>trailingZeroes</code> 函数，复杂度 <code v-pre>O(logK)</code>；</li>
<li>所以总体的时间复杂度就是 <code v-pre>O(logK)</code>。</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">规律和优化</p>
<ul>
<li><strong>这个题的答案其实不是<code v-pre>0</code>就是<code v-pre>5</code>，所以其实只需要判断阶乘结果末尾恰好有 <code v-pre>K</code> 个 <code v-pre>0</code>的值是否存在即可，如果存在，那么我们直接<code v-pre>return 5</code>；如果不存在，则直接<code v-pre>return 0</code>即可。</strong></li>
<li>此优化<strong>效率提升明显。</strong></li>
</ul>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">preimageSizeFZF</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> lo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> hi <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>lo <span class="token operator">&lt;</span> hi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> mid <span class="token operator">=</span> lo <span class="token operator">+</span> <span class="token punctuation">(</span>hi <span class="token operator">-</span> lo<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lo <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">trailingZeroes</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token class-name">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            hi <span class="token operator">=</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 找到之后直接返回结果5</span>
            <span class="token keyword">return</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 全都改成long类型，避免整型溢出</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">trailingZeroes</span><span class="token punctuation">(</span><span class="token keyword">long</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> d <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>d <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> n <span class="token operator">/</span> d<span class="token punctuation">;</span>
        d <span class="token operator">*=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高效寻找素数" tabindex="-1"><a class="header-anchor" href="#高效寻找素数" aria-hidden="true">#</a> 高效寻找素数</h2>
<h2 id="高效进行模幂运算" tabindex="-1"><a class="header-anchor" href="#高效进行模幂运算" aria-hidden="true">#</a> 高效进行模幂运算</h2>
<p><code v-pre>LeetCode</code>相关题目：<a href="https://leetcode.cn/problems/super-pow/" target="_blank" rel="noopener noreferrer">超级次方<ExternalLinkIcon/></a></p>
<ul>
<li><strong>要求你的算法返回幂运算 <code v-pre>a^b</code> 的计算结果与 1337 取模（<code v-pre>mod</code>，也就是余数）后的结果</strong>，这个 <code v-pre>b</code> 是一个<strong>非常大的正整数且会以数组形式给出。</strong>
<ul>
<li><strong>一是如何处理用数组表示的指数</strong>。现在 <code v-pre>b</code> 是一个数组，也就是说 <code v-pre>b</code> 可以非常大，没办法直接转成整型，否则可能溢出。</li>
<li><strong>二是如何得到求模之后的结果</strong>。先把幂运算结果算出来，然后做 <code v-pre>% 1337</code> ，但指数运算的真实结果肯定会大得吓人，也就是说，算出来真实结果也没办法表示，早都溢出报错了。</li>
<li><strong>三是如何高效进行幂运算</strong>。</li>
</ul>
</li>
</ul>
<h3 id="如何处理数组指数" tabindex="-1"><a class="header-anchor" href="#如何处理数组指数" aria-hidden="true">#</a> 如何处理数组指数</h3>
<ul>
<li>
<p><strong>首先明确问题</strong>：现在 <code v-pre>b</code> 是一个数组，不能表示成整型，而且数组的特点是随机访问，删除最后一个元素比较高效。</p>
<ul>
<li>以 <code v-pre>b = [1,5,6,4]</code> 来举例，结合<strong>指数运算</strong>的法则，我们可以发现这样的一个规律：</li>
</ul>
</li>
<li>
<p>问题规模缩小，这是<strong>递归</strong>的标志。</p>
</li>
</ul>
<p><strong>先不考虑取模的情况：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 手动实现pow(a,b)-不使用递归</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//非法情况</span>
	  <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//不能丢掉，否则会遗漏b=0的情况【仔细分析，由于res的值为1，实际上可以丢掉】</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> b<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">*=</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 手动实现pow(a,b)-使用递归</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//非法情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//能丢掉，实际上走不到这</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token function">myPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 递归</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">superPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归终止条件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 将原问题化简，缩小规模递归求解</span>
    <span class="token comment">// 计算第一部分</span>
    <span class="token keyword">int</span> part1 <span class="token operator">=</span> <span class="token function">myPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">[</span>b<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 计算第二部分</span>
    <span class="token keyword">int</span> part2 <span class="token operator">=</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token function">superPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> b<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 合并结果</span>
    <span class="token keyword">return</span> part1 <span class="token operator">*</span> part2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何处理mod运算" tabindex="-1"><a class="header-anchor" href="#如何处理mod运算" aria-hidden="true">#</a> 如何处理mod运算</h3>
<ul>
<li><strong>首先明确问题</strong>：由于计算机的编码方式，形如 <code v-pre>(a * b) % base</code> 这样的运算，乘法的结果可能导致溢出，我们希望找到一种技巧，能够化简这种表达式，避免溢出同时得到结果。
<ul>
<li>比如在二分查找中，我们求中点索引时用 <code v-pre>(l+r)/2</code> 转化成 <code v-pre>l+(r-l)/2</code>，避免溢出的同时得到正确的结果。</li>
</ul>
</li>
<li>快速进行<code v-pre>mod</code>运算公式：<strong><code v-pre>(a * b) % k = [(a % k)(b % k)] % k</code></strong>
<ul>
<li><strong>对乘法的结果求模，等价于先对每个因子都求模，然后对因子相乘的结果再求模</strong>。</li>
</ul>
</li>
</ul>
<p><strong>完整代码：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> base <span class="token operator">=</span> <span class="token number">1337</span><span class="token punctuation">;</span>

<span class="token comment">// 手动实现pow(a,b)</span>
<span class="token comment">// 函数返回的是pow(a,b)取模之后的结果</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1*a*a*a*a...</span>
	  <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//非法情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//不能丢掉，否则会遗漏b=0的情况【仔细分析，由于res的值为1，实际上可以丢掉】</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    a <span class="token operator">%=</span> base<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> b<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">*=</span> a<span class="token punctuation">;</span>
        res <span class="token operator">%=</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 递归</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">superPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归终止条件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 将原问题化简，缩小规模递归求解</span>
    <span class="token comment">// 计算第一部分</span>
    <span class="token keyword">int</span> part1 <span class="token operator">=</span> <span class="token function">myPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">[</span>b<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 计算第二部分</span>
    <span class="token keyword">int</span> part2 <span class="token operator">=</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token function">superPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> b<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 合并结果</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>part1 <span class="token operator">*</span> part2<span class="token punctuation">)</span> <span class="token operator">%</span> base<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>myPow</code>函数先对因子 <code v-pre>a</code> 求模，然后每次都对乘法结果 <code v-pre>res</code> 求模</strong>，这样可以保证 <code v-pre>res *= a</code> 这句代码执行时两个因子都是小于 <code v-pre>base</code> 的，也就一定不会造成溢出，同时结果也是正确的。</p>
<ul>
<li><code v-pre>myPow</code>函数也可以通过<strong>递归方式</strong>进行优化，完整代码如下<code v-pre>（推荐使用高级的快速幂算法，时间复杂度可以达到O(logN)对数级别）</code>：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 手动实现pow(a,b)</span>
<span class="token comment">// 函数返回的是pow(a,b)取模之后的结果</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 以a^4为例，则b=4，该函数返回的是a^4取模之后的结果
     * 即：(a^4)%base
     * (a*a^3)%base
     * (a%base)((a^3)%base)%base
     * 其中：(a^3)%base是(a^4)%base规模缩小的问题
     * 所以可以使用递归进行求解
     */</span>
	  <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//非法情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//能丢掉，实际上走不到这</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a <span class="token operator">%</span> base<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">%</span> base<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token function">myPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> base<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 时间复杂度为O(N)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何高效求幂-快速幂" tabindex="-1"><a class="header-anchor" href="#如何高效求幂-快速幂" aria-hidden="true">#</a> 如何高效求幂（快速幂）</h3>
<ul>
<li>
<p><code v-pre>快速幂</code>（<strong>快速的进行幂运算</strong>）是一种简单而有效的小算法，它能够以<code v-pre>O(log⁡N)</code>的时间复杂度进行幂运算，快速幂不仅本身非常常见，而且后续很多算法也都会用到快速幂。</p>
</li>
<li>
<p>举个例子：<strong>7的10次方，怎样算比较快？</strong></p>
<ul>
<li>最朴素的想法：<code v-pre>7*7=49、49*7=343</code>，依次一步一步算，共进行了<strong>9次</strong>乘法。</li>
<li>先算7的5次方，即<code v-pre>7*7*7*7*7</code>，再算它的平方，共进行了<strong>5次</strong>乘法。</li>
<li>先算<code v-pre>7*7</code>得49，则7的5次方为<code v-pre>49*49*7</code>，再算它的平方，共进行了<strong>4次</strong>乘法。</li>
<li>模仿这样的过程，我们得到一个在 <code v-pre>O(log⁡N)</code> 时间内计算出幂的算法，也就是<strong>快速幂。</strong></li>
</ul>
</li>
<li>
<p><strong>递归快速幂</strong>【 <mark>重点掌握</mark> 】</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 递归快速幂</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">recursionPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 非法情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 0</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 相当于是递归的结束条件</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 奇数</span>
        <span class="token keyword">return</span> <span class="token function">recursionPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// 偶数</span>
        <span class="token comment">// tmp变量是必要的</span>
        <span class="token comment">// 如果写成recursionPow(a, b / 2)*recursionPow(a, b / 2)</span>
        <span class="token comment">// 则计算机会计算两次，那么算法退化成O(N)的时间复杂度</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> <span class="token function">recursionPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> tmp <span class="token operator">*</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">注意</p>
<ul>
<li>在实际问题中，题目常常会要求对一个<strong>大数取模</strong>，这是因为<strong>幂运算的计算结果可能会非常巨大。</strong></li>
<li>快速幂也应当进行取模，此时应当注意：<strong>三种情况都需要考虑取模</strong>，如果取模的<code v-pre>base</code>较大，还应当使用<code v-pre>long</code>类型进行定义。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 递归快速幂</span>
<span class="token comment">// 返回的是取模之后的结果</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">recursionPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 非法情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 0</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 相当于是递归的结束条件</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 奇数</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">recursionPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>a <span class="token operator">%</span> base<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// 偶数</span>
        <span class="token comment">// tmp变量是必要的</span>
        <span class="token comment">// 如果写成recursionPow(a, b / 2)*recursionPow(a, b / 2)</span>
        <span class="token comment">// 则计算机会计算两次，那么算法退化成O(N)的时间复杂度</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> <span class="token function">recursionPow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>tmp <span class="token operator">*</span> tmp<span class="token punctuation">)</span> <span class="token operator">%</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>递归虽然<strong>简洁且运算速度快</strong>，但会产生<strong>额外的空间开销</strong>，可以把递归<strong>改写为循环</strong>，来避免对栈空间的大量占用，也就是<strong>非递归快速幂</strong>。
<ul>
<li>时间复杂度：<code v-pre>O(log⁡N)</code>，即为递归的层数。</li>
<li>空间复杂度：<code v-pre>O(log⁡N)</code>，即为递归的层数。这是由于递归的函数调用会使用栈空间。</li>
</ul>
</li>
</ul>
</div>
<ul>
<li><strong>非递归快速幂</strong>【 <mark>重点掌握</mark> 】</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">引入</p>
<ul>
<li>换一个角度来引入<strong>非递归的快速幂</strong>，还是7的10次方，但这次，把10写成<strong>二进制</strong>的形式，也就是 <code v-pre>0b1010</code> 。</li>
<li>要计算 7<sup>0b1010</sup> ，可以怎么做？
<ul>
<li>很自然地想到可以把它拆分为 7<sup>0b1000</sup>*7<sup>0b10</sup> 。</li>
<li>实际上，对于任意的整数，都可以把它拆成若干个 7<sup>0b100...</sup>的形式相乘。</li>
<li>而这些7<sup>0b100...</sup>，恰好就是 7<sup>1</sup> 、7<sup>2</sup>、7<sup>4</sup>等等，我们只需<strong>不断把底数平方</strong>就可以算出它们。</li>
</ul>
</li>
</ul>
</div>
<p>不考虑取模的情况：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 非递归快速幂</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">unRecursionPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//非法情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//不能丢掉，否则会遗漏b=0的情况【仔细分析，由于res的值为1，实际上可以丢掉】</span>
    <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>        <span class="token comment">//如果n的当前末位为1</span>
            ans <span class="token operator">*=</span> a<span class="token punctuation">;</span>  <span class="token comment">//ans乘上当前的a</span>
        a <span class="token operator">*=</span> a<span class="token punctuation">;</span>        <span class="token comment">//a自乘</span>
        n <span class="token operator">>>=</span> <span class="token number">1</span><span class="token punctuation">;</span>       <span class="token comment">//n往右移一位</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考虑取模的情况：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 非递归快速幂</span>
<span class="token comment">// 返回的是取模之后的结果</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">unRecursionPow</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//非法情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//不能丢掉，否则会遗漏b=0的情况【仔细分析，由于res的值为1，实际上可以丢掉】</span>
    <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    a <span class="token operator">%=</span> base<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//如果n的当前末位为1</span>
            ans <span class="token operator">*=</span> a<span class="token punctuation">;</span>  <span class="token comment">//ans乘上当前的a</span>
            ans <span class="token operator">%=</span> base<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 潜在的整型溢出</span>
        a <span class="token operator">*=</span> a<span class="token punctuation">;</span>        <span class="token comment">//a自乘</span>
        a <span class="token operator">%=</span> base<span class="token punctuation">;</span>
        n <span class="token operator">>>=</span> <span class="token number">1</span><span class="token punctuation">;</span>       <span class="token comment">//n往右移一位</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>复杂度分析
<ul>
<li>时间复杂度：<code v-pre>O(log⁡N)</code>，即为对 <code v-pre>n</code> 进行二进制拆分的时间复杂度。</li>
<li>空间复杂度：<code v-pre>O(1)</code>。</li>
</ul>
</li>
<li>总结
<ul>
<li>空间复杂度要求的不是太高的话，建议还是使用<strong>递归快速幂。</strong></li>
</ul>
</li>
</ul>
<blockquote>
<p>参考：</p>
<p><a href="https://zhuanlan.zhihu.com/p/95902286" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/95902286<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode.cn/problems/powx-n/solutions/238559/powx-n-by-leetcode-solution/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/powx-n/solutions/238559/powx-n-by-leetcode-solution/<ExternalLinkIcon/></a></p>
</blockquote>
<ul>
<li><code v-pre>LeetCode</code>相关题目：</li>
</ul>
<p><a href="https://leetcode.cn/problems/powx-n/?show=1" target="_blank" rel="noopener noreferrer">Pow(x, n)<ExternalLinkIcon/></a>：考虑<strong>指数为负数</strong>的情况。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 主函数</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> <span class="token class-name">N</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">N</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">N</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token function">unRPow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token class-name">N</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">unRPow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token class-name">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 使用非递归快速幂</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">unRPow</span><span class="token punctuation">(</span><span class="token keyword">double</span> a<span class="token punctuation">,</span> <span class="token keyword">long</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">// 非法情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> res <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//末位是1</span>
            res <span class="token operator">*=</span> a<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        a <span class="token operator">*=</span> a<span class="token punctuation">;</span>
        b <span class="token operator">>>=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning">
<p class="custom-container-title">注意</p>
<ul>
<li><code v-pre>Java</code>中<code v-pre>int</code>类型的范围是<code v-pre>[-2147483648,2147483647]</code>，即最大值是2<sup>31</sup>-1，最小值是-2<sup>31</sup>。</li>
<li>所以在测试用例<code v-pre>x=1，n=-2147483648</code>运行时，使用下面的代码会出现问题：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 主函数</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">myPow</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> n <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token function">unRPow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token operator">-</span>n<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">unRPow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 当n=-2147483648时候，取相反数应该是2147483648，但int类型最大值才是2147483647，所以取相反数是不变的，还是原值-2147483648。</span>
  <span class="token comment">// 解决办法是将其转为long类型</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<p><a href="https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/?show=1" target="_blank" rel="noopener noreferrer">数值的整数次方<ExternalLinkIcon/></a></p>
<h2 id="同时寻找缺失和重复的元素" tabindex="-1"><a class="header-anchor" href="#同时寻找缺失和重复的元素" aria-hidden="true">#</a> 同时寻找缺失和重复的元素</h2>
<p><code v-pre>LeetCode</code>相关题目：<a href="https://leetcode.cn/problems/set-mismatch/" target="_blank" rel="noopener noreferrer">错误的集合<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>给一个长度为 <code v-pre>N</code> 的数组 <code v-pre>nums</code>，其中本来装着 <code v-pre>[1..N]</code> 这 <code v-pre>N</code> 个元素，无序。但是现在出现了一些错误，<code v-pre>nums</code> 中的一个元素出现了重复，也就同时导致了另一个元素的缺失。</p>
</li>
<li>
<p>正常思路：首先记录每一个元素出现的次数，找到重复的元素，然后在找缺失的元素。</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">findErrorNums</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 存储每一个元素出现的此次数</span>
        <span class="token class-name">Hashtable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> hashtable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hashtable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hashtable<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                hashtable<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                hashtable<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> hashtable<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> hashtable<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> integer <span class="token operator">:</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>hashtable<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span>
                res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> integer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">复杂度分析</p>
<ul>
<li>时间复杂度：<code v-pre>O(N)</code></li>
<li>空间复杂度：<code v-pre>O(N)</code></li>
<li><code v-pre>O(N)</code> 的时间复杂度遍历数组是无法避免的，所以可以想想办法如何降低空间复杂度，是否可以在 <code v-pre>O(1)</code> 的空间复杂度之下找到重复和缺失的元素？</li>
</ul>
</div>
<ul>
<li>思路分析（<strong>优化空间复杂度到<code v-pre>O(1)</code></strong>）
<ul>
<li>每个元素和数组索引有一定的对应关系。</li>
<li><strong>暂且将 <code v-pre>nums</code> 中的元素变为 <code v-pre>[0..N-1]</code>，这样每个元素就和一个数组索引完全对应了，这样方便理解一些</strong>。</li>
<li>如果说 <code v-pre>nums</code> 中不存在重复元素和缺失元素，那么每个元素就和唯一一个索引值对应。</li>
<li>有一个元素重复了，同时导致一个元素缺失了，<strong>会导致有两个元素对应到了同一个索引，而且会有一个索引没有元素对应过去。</strong></li>
<li>找到这个重复对应的索引，就找到了那个<strong>重复的元素</strong>；找到那个没有元素对应的索引，就找到了那个<strong>缺失的元素</strong>。</li>
</ul>
</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">思路分析</p>
<ul>
<li>用数组元素的绝对值做下标，然后让这个下标对应的元素置为负的，相当于<strong>把它标记为已访问过的元素</strong>，如果某个元素做下标时对应的元素值为负，则这个数是重复值。再次遍历数组<strong>寻找唯一没有置为负的那个元素</strong>，它的下标就是缺失的元素值。</li>
<li>假设元素是 <code v-pre>[0..N-1]</code>，但<strong>题目要求是 <code v-pre>[1..N]</code></strong>，所以需要修改部分的值才能得到正确结果。</li>
<li>时间复杂度：<code v-pre>O(N)</code></li>
<li>空间复杂度：<code v-pre>O(1)</code></li>
</ul>
</div>
<ul>
<li>
<p>原理图如下：</p>
</li>
<li>
<p>完整代码如下：</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">findErrorNums</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 寻找重复的元素</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 寻找缺失的元素</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>对于这种数组问题，<strong>关键点在于元素和索引是成对儿出现的，常用的方法是<code v-pre>排序</code>、<code v-pre>异或</code>、<code v-pre>映射</code></strong>。</li>
<li><code v-pre>LeetCode</code>相关题目：
<ul>
<li><a href="https://leetcode.cn/problems/find-all-duplicates-in-an-array/?show=1" target="_blank" rel="noopener noreferrer">数组中重复的数据<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/?show=1" target="_blank" rel="noopener noreferrer">找到所有数组中消失的数字<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h2 id="在无限序列中随机抽取元素" tabindex="-1"><a class="header-anchor" href="#在无限序列中随机抽取元素" aria-hidden="true">#</a> 在无限序列中随机抽取元素</h2>
<h2 id="游戏中的随机算法" tabindex="-1"><a class="header-anchor" href="#游戏中的随机算法" aria-hidden="true">#</a> 游戏中的随机算法</h2>
<h2 id="一行代码解决的算法题" tabindex="-1"><a class="header-anchor" href="#一行代码解决的算法题" aria-hidden="true">#</a> 一行代码解决的算法题</h2>
<h2 id="几个反直觉的概率问题" tabindex="-1"><a class="header-anchor" href="#几个反直觉的概率问题" aria-hidden="true">#</a> 几个反直觉的概率问题</h2>
</div></template>


