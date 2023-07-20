<template><div><h1 id="url-简介" tabindex="-1"><a class="header-anchor" href="#url-简介" aria-hidden="true">#</a> URL 简介</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>URL 是“统一资源定位符”（Uniform Resource Locator）的首字母缩写，中文译为“网址”，表示各种资源的互联网地址。下面就是一个典型的 URL。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>https://www.example.com/path/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所谓资源，可以简单理解成各种可以通过互联网访问的文件，比如网页、图像、音频、视频、JavaScript 脚本等等。只有知道了它们的 URL，才能在互联网上获取它们。</p>
<p>只要资源可以通过互联网访问，它就必然有对应的 URL。一个 URL 对应一个资源，但是同一个资源可能对应多个 URL。</p>
<p>URL 是互联网的基础。互联网之所以“互联”，就是因为网页可以通过“链接”（link），包含其他 URL。用户只要点击，就可以从一个 URL 跳转到另一个 URL，前往不同的网站。</p>
<h2 id="网址的组成部分" tabindex="-1"><a class="header-anchor" href="#网址的组成部分" aria-hidden="true">#</a> 网址的组成部分</h2>
<p>URL 由多个部分组成。下面是一个比较复杂的 URL，实际的 URL 通常不会有这么多部分。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>https://www.example.com:80/path/to/myfile.html?key1=value1&amp;key2=value2#anchor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们看看，这个 URL 的各个部分。</p>
<h3 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h3>
<p>协议（scheme）是浏览器请求服务器资源的方法，上例是<code v-pre>https://</code>的部分，表示使用 HTTPS 协议。</p>
<p>互联网支持多种协议，必须指明网址使用哪一种协议，默认是 HTTP 协议。也就是说，如果省略协议，直接在浏览器地址栏输入<code v-pre>www.example.com</code>，那么浏览器默认会访问<code v-pre>http://www.example.com</code>。HTTPS 是 HTTP 的加密版本，出于安全考虑，越来越多的网站使用这个协议。</p>
<p>HTTP 和 HTTPS 的协议名称后面，紧跟着一个冒号和两个斜杠（<code v-pre>://</code>）。其他协议不一定如此，邮件地址协议<code v-pre>mailto:</code>的协议名后面只有一个冒号，比如<code v-pre>mailto:foo@example.com</code>。</p>
<h3 id="主机" tabindex="-1"><a class="header-anchor" href="#主机" aria-hidden="true">#</a> 主机</h3>
<p>主机（host）是资源所在的网站名或服务器的名字，又称为域名。上例的主机是<code v-pre>www.example.com</code>。</p>
<p>有些主机没有域名，只有 IP 地址，比如<code v-pre>192.168.2.15</code>。这种情况常常出现在局域网。</p>
<h3 id="端口" tabindex="-1"><a class="header-anchor" href="#端口" aria-hidden="true">#</a> 端口</h3>
<p>同一个域名下面可能同时包含多个网站，它们之间通过端口（port）区分。“端口”就是一个整数，可以简单理解成，访问者告诉服务器，想要访问哪一个网站。HTTP 协议的默认端口是80，如果省略了这个参数，服务器就会返回80端口的网站。</p>
<p>端口紧跟在域名后面，两者之间使用冒号分隔，比如<code v-pre>www.example.com:80</code>。</p>
<h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h3>
<p>路径（path）是资源在网站的位置。比如，<code v-pre>/path/index.html</code>这个路径，指向网站的<code v-pre>/path</code>子目录下面的网页文件<code v-pre>index.html</code>。</p>
<p>互联网的早期，路径是真实存在的物理位置。现在由于服务器可以模拟这些位置，所以路径只是虚拟位置。</p>
<p>路径可能只包含目录，不包含文件名，比如<code v-pre>/foo/</code>，甚至结尾的斜杠都可以省略。这时，服务器通常会默认跳转到该目录里面的<code v-pre>index.html</code>文件（即等同于请求<code v-pre>/foo/index.html</code>），但也可能有其他的处理（比如列出目录里面的所有文件），这取决于服务器的设置。一般来说，访问<code v-pre>www.example.com</code>这个网址，很可能返回的是网页文件<code v-pre>www.example.com/index.html</code>。</p>
<h3 id="查询参数" tabindex="-1"><a class="header-anchor" href="#查询参数" aria-hidden="true">#</a> 查询参数</h3>
<p>查询参数（parameter）是提供给服务器的额外信息。参数的位置是在路径后面，两者之间使用<code v-pre>?</code>分隔，上例是<code v-pre>?key1=value1&amp;key2=value2</code>。</p>
<p>查询参数可以有一组或多组。每组参数都是键值对（key-value pair）的形式，同时具有键名(key)和键值(value)，它们之间使用等号（<code v-pre>=</code>）连接。比如，<code v-pre>key1=value</code>就是一个键值对，<code v-pre>key1</code>是键名，<code v-pre>value1</code>是键值。</p>
<p>多组参数之间使用<code v-pre>&amp;</code>连接，比如<code v-pre>key1=value1&amp;key2=value2</code>。</p>
<h3 id="锚点" tabindex="-1"><a class="header-anchor" href="#锚点" aria-hidden="true">#</a> 锚点</h3>
<p>锚点（anchor）是网页内部的定位点，使用<code v-pre>#</code>加上锚点名称，放在网址的最后，比如<code v-pre>#anchor</code>。浏览器加载页面以后，会自动滚动到锚点所在的位置。</p>
<p>锚点名称通过网页元素的<code v-pre>id</code>属性命名，详见《元素的属性》一章。</p>
<h2 id="url-字符" tabindex="-1"><a class="header-anchor" href="#url-字符" aria-hidden="true">#</a> URL 字符</h2>
<p>URL 的各个组成部分，只能使用以下这些字符。</p>
<ul>
<li>26个英语字母（包括大写和小写）</li>
<li>10个阿拉伯数字</li>
<li>连词号（<code v-pre>-</code>）</li>
<li>句点（<code v-pre>.</code>）</li>
<li>下划线（<code v-pre>_</code>）</li>
</ul>
<p>此外，还有18个字符属于 URL 的保留字符，只能在给定的位置出现。比如，查询参数的开头是问号（<code v-pre>?</code>），也就是说，问号只能出现查询参数的开头，出现在其他位置就是非法的，会导致网址解析错误。网址的其他部分如果要使用这些保留字符，必须使用它们的转义形式。</p>
<p>URL 字符转义的方法是，在这些字符的十六进制 ASCII 码前面加上百分号（<code v-pre>%</code>）。下面是这18个字符及其转义形式。</p>
<ul>
<li><code v-pre>!</code>：%21</li>
<li><code v-pre>#</code>：%23</li>
<li><code v-pre>$</code>：%24</li>
<li><code v-pre>&amp;</code>：%26</li>
<li><code v-pre>'</code>：%27</li>
<li><code v-pre>(</code>：%28</li>
<li><code v-pre>)</code>：%29</li>
<li><code v-pre>*</code>：%2A</li>
<li><code v-pre>+</code>：%2B</li>
<li><code v-pre>,</code>：%2C</li>
<li><code v-pre>/</code>：%2F</li>
<li><code v-pre>:</code>：%3A</li>
<li><code v-pre>;</code>：%3B</li>
<li><code v-pre>=</code>：%3D</li>
<li><code v-pre>?</code>：%3F</li>
<li><code v-pre>@</code>：%40</li>
<li><code v-pre>[</code>：%5B</li>
<li><code v-pre>]</code>：%5D</li>
</ul>
<p>举例来说，有一个网页的 URL 是<code v-pre>foo?bar.html</code>，即文件里面包含一个问号，那么需要写成<code v-pre>foo%3Fbar.html</code>。</p>
<p>URL 的合法字符，其实也可以采用这种转义方法，但是不建议使用。比如，字母<code v-pre>a</code>的十六进制 ASCII 码是<code v-pre>61</code>，转义形式后就是<code v-pre>%61</code>。因此，<code v-pre>www.apple.com</code>又可以写成<code v-pre>www.%61pple.com</code>，浏览器一样识别。</p>
<p>值得注意的是，空格的转义形式是<code v-pre>%20</code>。对于那些包含空格的文件名，这个转义是必须的。</p>
<p>既不属于合法字符、也不属于保留字符的其他字符（比如汉字），理论上不需要手动转义，可以直接写在 URL 里面，比如<code v-pre>www.example.com/中国.html</code>，浏览器会自动将它们转义，发给服务器。转义方法是使用这些字符的十六进制 UTF-8 编码，每两位算作一组，然后每组头部添加百分号（<code v-pre>%</code>）。</p>
<p>举例来说，汉字<code v-pre>中</code>的 UTF-8 十六进制编码是<code v-pre>e4b8ad</code>，每两个字符一组，URL 转义后就为<code v-pre>%e4%b8%ad</code>。也就是说，URL 里面凡是有汉字<code v-pre>中</code>的地方，都要写成<code v-pre>%e4%b8%ad</code>。因此，访问<code v-pre>www.example.com/中国.html</code>这个网址，需要写成下面的样子。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>www.example.com/%e4%b8%ad%e5%9b%bd.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>中</code>的转义形式是<code v-pre>%e4%b8%ad</code>，<code v-pre>国</code>是<code v-pre>%e5%9b%bd</code>。</p>
<h2 id="绝对-url-和相对-url" tabindex="-1"><a class="header-anchor" href="#绝对-url-和相对-url" aria-hidden="true">#</a> 绝对 URL 和相对 URL</h2>
<p>URL 分成两种：绝对 URL 和相对 URL。</p>
<p>绝对 URL 指的是，只靠 URL 本身就能确定资源的位置。这意味着，URL 必须带有资源的完整信息，包含协议、主机、路径等部分。前面的例子都是绝对 URL。</p>
<p>相对 URL 指的是，URL 不包含资源位置的全部信息，必须结合当前网页的位置，才能定位资源。比如，当前网页的 URL 是<code v-pre>https://www.example.com/path/index.html</code>，该网页上面有一个资源，URL 指向<code v-pre>a.html</code>，这个就是相对 URL。因为只知道<code v-pre>a.html</code>，并不能定位资源。浏览器假定，<code v-pre>a.html</code>与当前网址在同一个子目录下面，从而得到绝对 URL <code v-pre>https://www.example.com/path/a.html</code>。</p>
<p>相对 URL 如果以斜杠（<code v-pre>/</code>）开头，就表示网站的根目录。否则，必须以当前目录为起点，推算资源的位置。比如，相对 URL <code v-pre>/foo/bar.html</code>表示网站根目录的子目录<code v-pre>foo</code>，<code v-pre>foo/bar.html</code>表示在当前目录的<code v-pre>foo</code>子目录。</p>
<p>URL 还可以使用两个特殊简写，表示特定位置。</p>
<ul>
<li><code v-pre>.</code>：表示当前目录，比如<code v-pre>./a.html</code>（当前目录下的<code v-pre>a.html</code>文件）</li>
<li><code v-pre>..</code>：表示上级目录，比如<code v-pre>../a.html</code>（上级目录下的<code v-pre>a.html</code>文件）</li>
</ul>
<p>这两种简写可以多个连用，比如<code v-pre>../../</code>表示上两级目录。</p>
<p>绝对 URL 也可以使用这两个简写，比如<code v-pre>www.example.com/./index.html</code>等同于<code v-pre>www.example.com/index.html</code>，这时<code v-pre>.</code>相当于根目录的当前目录，即根目录本身。</p>
<h2 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> <code v-pre>&lt;base&gt;</code></h2>
<p><code v-pre>&lt;base&gt;</code>标签指定网页内部的所有相对 URL 的计算基准。整张网页只能有一个<code v-pre>&lt;base&gt;</code>标签，而且只能放在<code v-pre>&lt;head&gt;</code>里面。它是单独使用的标签，没有闭合标签，下面是一个例子。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.example.com/files/<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;base&gt;</code>标签的<code v-pre>href</code>属性给出计算的基准网址，<code v-pre>target</code>属性给出如何打开链接的说明（参见《链接》一章）。已知计算基准是<code v-pre>https://www.example.com/files/</code>，那么相对 URL <code v-pre>foo.html</code>，就可以转成绝对 URL <code v-pre>https://www.example.com/files/foo.html</code>。</p>
<p>注意，<code v-pre>&lt;base&gt;</code>标签必须至少具有<code v-pre>href</code>属性或<code v-pre>target</code>属性之一。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://foo.com/app/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦设置了<code v-pre>&lt;base&gt;</code>，就对整个网页都有效。如果要改变某个链接的行为，只能用绝对链接替代相对链接。尤其需要注意锚点，这时锚点也是针对<code v-pre>&lt;base&gt;</code>计算的，而不是针对当前网页的 URL。</p>
</div></template>


