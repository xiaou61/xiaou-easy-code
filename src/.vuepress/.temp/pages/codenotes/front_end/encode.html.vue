<template><div><h1 id="html-字符编码" tabindex="-1"><a class="header-anchor" href="#html-字符编码" aria-hidden="true">#</a> HTML 字符编码</h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>网页包含了大量的文字，浏览器必须知道这些文字的编码方法，才能把文字还原出来。</p>
<p>一般情况下，服务器向浏览器发送 HTML 网页文件时，会通过 HTTP 头信息，声明网页的编码方式。</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=UTF-8</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，HTTP 头信息的<code v-pre>Content-Type</code>字段先声明，服务器发送的数据类型是<code v-pre>text/html</code>（即 HTML 网页），然后声明网页的文字编码是<code v-pre>UTF-8</code>。</p>
<p>网页内部也会再用<code v-pre>&lt;meta&gt;</code>标签，再次声明网页的编码。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="字符的数字表示法" tabindex="-1"><a class="header-anchor" href="#字符的数字表示法" aria-hidden="true">#</a> 字符的数字表示法</h2>
<p>网页可以使用不同语言的编码方式，但是最常用的编码是 UTF-8。UTF-8 编码是 Unicode 字符集的一种表达方式。这个字符集的设计目标是包含世界上的所有字符，目前已经收入了十多万个字符。</p>
<p>每个字符有一个 Unicode 号码，称为码点（code point）。如果知道码点，就能查到这是什么字符。举例来说，英文字母<code v-pre>a</code>的码点是十进制的<code v-pre>97</code>（十六进制的<code v-pre>61</code>），汉字“中”的码点是十进制的<code v-pre>20013</code>（十六进制的<code v-pre>4e2d</code>）。</p>
<p>由于下面的原因，不是每一个 Unicode 字符都能直接在 HTML 语言里面显示。</p>
<p>（1）不是每个 Unicode 字符都可以打印出来，有些没有可打印形式，比如换行符的码点是十进制的<code v-pre>10</code>（十六进制的<code v-pre>A</code>），就没有对应的字面形式。</p>
<p>（2）小于号（<code v-pre>&lt;</code>）和大于号（<code v-pre>&gt;</code>）用来定义 HTML 标签，其他需要用到这两个符号的场合，必须防止它们被解释成标签。</p>
<p>（3）由于 Unicode 字符太多，无法找到一种输入法，可以直接输入所有这些字符。换言之，没有一种键盘，有办法输入所有符号。</p>
<p>（4）网页不允许混合使用多种编码，如果使用 UTF-8 编码的同时，又想插入其他编码的字符，就会很困难。</p>
<p>HTML 为了解决上面这些问题，允许使用 Unicode 码点表示字符，浏览器会自动将码点转成对应的字符。</p>
<p>字符的码点表示法是<code v-pre>&amp;#N;</code>（十进制，<code v-pre>N</code>代表码点）或者<code v-pre>&amp;#xN;</code>（十六进制，<code v-pre>N</code>代表码点），比如，字符<code v-pre>a</code>可以写成<code v-pre>&amp;#97;</code>（十进制）或者<code v-pre>&amp;#x61;</code>（十六进制），字符<code v-pre>中</code>可以写成<code v-pre>&amp;#20013;</code>（十进制）或者<code v-pre>&amp;#x4e2d;</code>（十六进制），浏览器会自动转换它们。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 等同于 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity" title="&#104;">&amp;#104;</span><span class="token entity" title="&#101;">&amp;#101;</span><span class="token entity" title="&#108;">&amp;#108;</span><span class="token entity" title="&#108;">&amp;#108;</span><span class="token entity" title="&#111;">&amp;#111;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 等同于 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity" title="&#x68;">&amp;#x68;</span><span class="token entity" title="&#x65;">&amp;#x65;</span><span class="token entity" title="&#x6c;">&amp;#x6c;</span><span class="token entity" title="&#x6c;">&amp;#x6c;</span><span class="token entity" title="&#x6f;">&amp;#x6f;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，字符可以直接表示，也可以使用十进制码点或十六进制码点表示。</p>
<p>注意，HTML 标签本身不能使用码点表示，否则浏览器会认为这是所要显示的文本内容，而不是标签。比如，<code v-pre>&lt;p&gt;</code>一旦写成<code v-pre>&lt;&amp;#112;&gt;</code>或者<code v-pre>&amp;#60;&amp;#112;&amp;#62;</code>，浏览器就不再认为这是标签了，而会当作文本内容将其显示为<code v-pre>&lt;p&gt;</code>。</p>
<h2 id="字符的实体表示法" tabindex="-1"><a class="header-anchor" href="#字符的实体表示法" aria-hidden="true">#</a> 字符的实体表示法</h2>
<p>数字表示法的不方便之处，在于必须知道每个字符的码点，很难记忆。为了能够快速输入，HTML 为一些特殊字符，规定了容易记忆的名字，允许通过名字来表示它们，这称为实体表示法（entity）。</p>
<p>实体的写法是<code v-pre>&amp;name;</code>，其中的<code v-pre>name</code>是字符的名字。下面是其中一些特殊字符，及其对应的实体。</p>
<ul>
<li><code v-pre>&lt;</code>：<code v-pre>&amp;lt;</code></li>
<li><code v-pre>&gt;</code>：<code v-pre>&amp;gt;</code></li>
<li><code v-pre>&quot;</code>：<code v-pre>&amp;quot;</code></li>
<li><code v-pre>'</code>：<code v-pre>&amp;apos;</code></li>
<li><code v-pre>&amp;</code>：<code v-pre>&amp;amp;</code></li>
<li><code v-pre>©</code>：<code v-pre>&amp;copy;</code></li>
<li><code v-pre>#</code>：<code v-pre>&amp;num;</code></li>
<li><code v-pre>§</code>：<code v-pre>&amp;sect;</code></li>
<li><code v-pre>¥</code>：<code v-pre>&amp;yen;</code></li>
<li><code v-pre>$</code>：<code v-pre>&amp;dollar;</code></li>
<li><code v-pre>£</code>：<code v-pre>&amp;pound;</code></li>
<li><code v-pre>¢</code>：<code v-pre>&amp;cent;</code></li>
<li><code v-pre>%</code>：<code v-pre>&amp;percnt;</code></li>
<li><code v-pre>*</code>：<code v-pre>$ast;</code></li>
<li><code v-pre>@</code>：<code v-pre>&amp;commat;</code></li>
<li><code v-pre>^</code>：<code v-pre>&amp;Hat;</code></li>
<li><code v-pre>±</code>：<code v-pre>&amp;plusmn;</code></li>
<li>空格：<code v-pre>&amp;nbsp;</code></li>
</ul>
<p>注意，上面最后一个特殊字符是空格，它也有对应的实体表示法。</p>
<p>字符的数字表示法和实体表示法，都可以表示正常情况无法输入的字符，逃脱了浏览器的限制，所以英语里面称为“escape”，中文翻译为“字符的转义”。</p>
</div></template>


