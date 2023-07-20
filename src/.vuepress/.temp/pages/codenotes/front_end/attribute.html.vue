<template><div><h1 id="网页元素的属性" tabindex="-1"><a class="header-anchor" href="#网页元素的属性" aria-hidden="true">#</a> 网页元素的属性</h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>网页元素的属性（attribute）可以定制元素的行为，不同的属性会导致元素有不同的行为。元素属性的写法是 HTML 标签内部的“键值对”。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;html&gt;</code>标签内部的键值对<code v-pre>lang=&quot;en&quot;</code>，就称为<code v-pre>html</code>元素的属性。属性名为<code v-pre>lang</code>，属性值为<code v-pre>en</code>。</p>
<p>属性名与标签名一样，不区分大小写，<code v-pre>lang</code>和<code v-pre>LANG</code>是同一个属性。</p>
<p>属性名与属性值之间，通过等号<code v-pre>=</code>连接。属性值可以放在单引号或双引号之中，建议统一使用双引号。某些属性值可以不使用引号，但是建议不要这样写。</p>
<p>有些属性是布尔属性，即属性值是一个布尔值，只有“打开”和“关闭”两种情况。这时属性值可以省略，只要添加了属性名，就表示打开该属性。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>required</code>就是<code v-pre>&lt;input&gt;</code>标签的布尔属性。如果加上这个属性，就表示打开，没有就是关闭。</p>
<h2 id="全局属性" tabindex="-1"><a class="header-anchor" href="#全局属性" aria-hidden="true">#</a> 全局属性</h2>
<p>全局属性（global attributes）是所有元素都可以使用的属性。也就是说，你可以把下面的属性，加在任意一个网页元素上面，不过有些属性对某些元素可能不产生意义。</p>
<p>下面是一些常见的全局属性。</p>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3>
<p><code v-pre>id</code>属性是元素在网页内的唯一标识符。比如，网页可能包含多个<code v-pre>&lt;p&gt;</code>标签，<code v-pre>id</code>属性可以指定每个<code v-pre>&lt;p&gt;</code>标签的唯一标识符。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，三个<code v-pre>&lt;p&gt;</code>标签具有不同的<code v-pre>id</code>属性，因此可以区分。</p>
<p><code v-pre>id</code>属性的值必须是全局唯一的，同一个页面不能有两个相同的<code v-pre>id</code>属性。另外，<code v-pre>id</code>属性的值不得包含空格。</p>
<p><code v-pre>id</code>属性的值还可以在最前面加上<code v-pre>#</code>，放到 URL 中作为锚点，定位到该元素在网页内部的位置。比如，用户访问网址<code v-pre>https://foo.com/index.html#bar</code>的时候，浏览器会自动将页面滚动到<code v-pre>bar</code>的位置，让用户第一眼就看到这部分内容。</p>
<h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h3>
<p><code v-pre>class</code>属性用来对网页元素进行分类。如果不同元素的<code v-pre>class</code>属性值相同，就表示它们是一类的。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>para<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>para<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第一个<code v-pre>&lt;p&gt;</code>和第三个<code v-pre>&lt;p&gt;</code>是一类，因为它们的<code v-pre>class</code>属性相同。</p>
<p>元素可以同时具有多个 class，它们之间使用空格分隔。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p1 p2 p3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的<code v-pre>p</code>元素同时具有<code v-pre>p1</code>、<code v-pre>p2</code>、<code v-pre>p3</code>三个 class。</p>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<p><code v-pre>title</code>属性用来为元素添加附加说明。大多数浏览器中，鼠标悬浮在元素上面时，会将<code v-pre>title</code>属性值作为浮动提示，显示出来。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>版权说明<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>本站内容使用创意共享许可证，可以自由使用。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>title</code>属性解释了这一块内容的目的。鼠标悬停在上面时，浏览器会显示一个浮动提示。一旦鼠标移开，提示就会消失。</p>
<h3 id="tabindex" tabindex="-1"><a class="header-anchor" href="#tabindex" aria-hidden="true">#</a> tabindex</h3>
<p>网页通常使用鼠标操作，但是某些情况下，用户可能希望使用键盘，或者只有键盘可以用。因此，浏览器允许使用 Tab 键，遍历网页元素。也就是说，只要不停按下 Tab 键，网页的焦点就会从一个元素转移到另一个元素，选定焦点元素以后，就可以进行下一步操作，比如按下回车键访问某个链接，或者直接在某个输入框输入文字。</p>
<p>这里就有一个问题，按下 Tab 键的时候，浏览器怎么知道跳到哪一个元素。HTML 提供了<code v-pre>tabindex</code>属性，解决这个问题。它的名字的含义，就是 Tab 的顺序（index）。</p>
<p><code v-pre>tabindex</code>属性的值是一个整数，表示用户按下 Tab 键的时候，网页焦点转移的顺序。不同的属性值有不同的含义。</p>
<ul>
<li>负整数：该元素可以获得焦点（比如使用 JavaScript 的<code v-pre>focus()</code>方法），但不参与 Tab 键对网页元素的遍历。这个值通常是<code v-pre>-1</code>。</li>
<li><code v-pre>0</code>：该元素参与 Tab 键的遍历，顺序由浏览器指定，通常是按照其在网页里面出现的位置。</li>
<li>正整数：网页元素按照从小到大的顺序（1、2、3、……），参与 Tab 键的遍历。如果多个元素的<code v-pre>tabindex</code>属性相同，则按照在网页源码里面出现的顺序遍历。</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这段文字可以获得焦点。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;p&gt;</code>标签的<code v-pre>tabindex</code>为<code v-pre>0</code>，意味着该元素可以获得焦点，并且也可以被 Tab 键遍历，顺序由其在源码里面的位置决定。</p>
<p>一般来说，<code v-pre>tabindex</code>属性最好都设成<code v-pre>0</code>，按照自然顺序进行遍历，这样比较符合用户的预期，除非网页有特殊布局。如果网页所有元素都没有设置<code v-pre>tabindex</code>，那么只有那些默认可以遍历的元素（比如链接、输入框等）才能参与 Tab 键的遍历，顺序由其在源码的位置决定。因此实际上，只有那些无法获得焦点的元素（比如<code v-pre>&lt;span&gt;</code>、<code v-pre>&lt;div&gt;</code>）需要参与遍历，才有必要设置<code v-pre>tabindex</code>属性。</p>
<h3 id="accesskey" tabindex="-1"><a class="header-anchor" href="#accesskey" aria-hidden="true">#</a> accesskey</h3>
<p><code v-pre>accesskey</code>属性指定网页元素获得焦点的快捷键，该属性的值必须是单个的可打印字符。只要按下快捷键，该元素就会得到焦点。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>s<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;button&gt;</code>的快捷键是<code v-pre>s</code>，按下快捷键，该元素就得到了焦点。</p>
<p><code v-pre>accesskey</code>属性的字符键，必须配合功能键，一起按下才会生效。也就是说，快捷键是“功能键 + 字符键”的组合。不同的浏览器与不同的操作系统，功能键都不一样。比如，Chrome 浏览器在 Windows 系统和 Linux 系统的快捷键是<code v-pre>Alt + 字符键</code>，在 Mac 系统的快捷键是<code v-pre>Ctrl + Alt + 字符键</code>。</p>
<p>注意，<code v-pre>accesskey</code>如果跟操作系统或浏览器级别的快捷键有冲突，这时不会生效。</p>
<h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h3>
<p><code v-pre>style</code>属性用来指定当前元素的 CSS 样式。具体的设置，请看 CSS 教程。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码指定文字颜色为红色。</p>
<h3 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> hidden</h3>
<p><code v-pre>hidden</code>是一个布尔属性，表示当前的网页元素不再跟页面相关，因此浏览器不会渲染这个元素，所以就不会在网页中看到它。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">hidden</span><span class="token punctuation">></span></span>本句不会显示在页面上。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，这个<code v-pre>p</code>元素不会出现在网页上。</p>
<p>注意，CSS 的可见性设置，高于<code v-pre>hidden</code>属性。如果 CSS 设为该元素可见，<code v-pre>hidden</code>属性将无效。</p>
<h3 id="lang-dir" tabindex="-1"><a class="header-anchor" href="#lang-dir" aria-hidden="true">#</a> lang，dir</h3>
<p><code v-pre>lang</code>属性指定网页元素使用的语言。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第一个<code v-pre>&lt;p&gt;</code>的<code v-pre>lang</code>属性，表示使用英语，第二个<code v-pre>&lt;p&gt;</code>的<code v-pre>lang</code>属性，表示使用中文。</p>
<p><code v-pre>lang</code>属性的值，必须符合 <a href="https://www.ietf.org/rfc/bcp/bcp47.txt" target="_blank" rel="noopener noreferrer">BCP47<ExternalLinkIcon/></a> 的标准。下面是一些常见的语言代码。</p>
<ul>
<li>zh：中文</li>
<li>zh-Hans：简体中文</li>
<li>zh-Hant：繁体中文</li>
<li>en：英语</li>
<li>en-US：美国英语</li>
<li>en-GB：英国英语</li>
<li>es：西班牙语</li>
<li>fr：法语</li>
</ul>
<p><code v-pre>dir</code>属性表示文字的阅读方向，有三个可能的值。</p>
<ul>
<li><code v-pre>ltr</code>：从左到右阅读，比如英语。</li>
<li><code v-pre>rtl</code>：从右到左阅读，阿拉伯语、波斯语、希伯来语都属于这一类。</li>
<li><code v-pre>auto</code>：浏览器根据内容的解析结果，自行决定。</li>
</ul>
<h3 id="contenteditable" tabindex="-1"><a class="header-anchor" href="#contenteditable" aria-hidden="true">#</a> contenteditable</h3>
<p>HTML 网页的内容默认是用户不能编辑，<code v-pre>contenteditable</code>属性允许用户修改内容。它有两个可能的值。</p>
<ul>
<li><code v-pre>true</code>或空字符串：内容可以编辑</li>
<li><code v-pre>false</code>：不可以编辑</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
鼠标点击，本句内容可修改。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，鼠标单击句子，就可以进入编辑状态，用户可以改变句子的内容。当然，除非提交到服务器，否则刷新页面还是显示原来的内容。</p>
<p>该属性是枚举属性，不是布尔属性，规范的写法是最好带上属性值。</p>
<h3 id="spellcheck" tabindex="-1"><a class="header-anchor" href="#spellcheck" aria-hidden="true">#</a> spellcheck</h3>
<p>浏览器一般会自带拼写检查功能，编辑内容时，拼错的单词下面会显示红色的波浪线。<code v-pre>spellcheck</code>属性就表示，是否打开拼写检查。</p>
<p>它有两个可能的值。</p>
<ul>
<li><code v-pre>true</code>：打开拼写检查</li>
<li><code v-pre>false</code>：关闭拼写检查</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">spellcheck</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
英语单词 separate 容易写错成 seperate。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>seperate</code>下面会有提示，表示拼错了。</p>
<p>注意，由于该属性只在编辑时生效，所以这个例子必须加上<code v-pre>contenteditable</code>属性，表示本段内容可编辑。鼠标单击就可以进入编辑状态，这时才会看到拼写提示。不可编辑的状态下，拼写错误是不提示显示的。对于那些不可编辑的元素，该属性无效。</p>
<p>这个属性看上去像布尔属性，但是其实是枚举属性，所以最好不要省略它的值。如果没有指定这个属性，浏览器将自行决定是否打开拼写检查。</p>
<h3 id="data-属性" tabindex="-1"><a class="header-anchor" href="#data-属性" aria-hidden="true">#</a> <code v-pre>data-</code>属性</h3>
<p><code v-pre>data-</code>属性用于放置自定义数据。如果没有其他属性或元素合适放置数据，就可以放在<code v-pre>data-</code>属性。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip<span class="token punctuation">"</span></span> <span class="token attr-name">data-tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this is the tip!<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>data-tip</code>用于放置链接的提示文字。</p>
<p>由于<code v-pre>data-</code>属性只能通过 CSS 或 JavaScript 利用，所以这里不做详细介绍了。下面是 CSS 的例子。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/* HTML 代码如下
&lt;div data-role="mobile">
Mobile only content
&lt;/div>
*/</span>
<span class="token selector">div[data-role="mobile"]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* HTML 代码如下
&lt;div class="test" data-content="This is the div content">test&lt;/div>​
*/</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件处理属性" tabindex="-1"><a class="header-anchor" href="#事件处理属性" aria-hidden="true">#</a> 事件处理属性</h3>
<p>除了上面这些属性，全局属性还包括事件处理属性（event handler），用来响应用户的动作。这些属性的值都是 JavaScript 代码，请参考 JavaScript 教程，这里只列出这些属性的名单。</p>
<blockquote>
<p>onabort, onautocomplete, onautocompleteerror, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragexit, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onshow, onsort, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting</p>
</blockquote>
</div></template>


