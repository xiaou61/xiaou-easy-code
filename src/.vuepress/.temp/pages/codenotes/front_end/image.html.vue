<template><div><h1 id="图像标签" tabindex="-1"><a class="header-anchor" href="#图像标签" aria-hidden="true">#</a> 图像标签</h1>
<p>图片是互联网的重要组成部分，让网页变得丰富多彩。本章介绍如何在网页插入图片。</p>
<h2 id="img" tabindex="-1"><a class="header-anchor" href="#img" aria-hidden="true">#</a> <code v-pre>&lt;img&gt;</code></h2>
<p><code v-pre>&lt;img&gt;</code>标签用于插入图片。它是单独使用的，没有闭合标签。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码在网页插入一张图片<code v-pre>foo.jpg</code>。<code v-pre>src</code>属性指定图片的网址，上例是相对 URL，表示图片与网页在同一个目录。</p>
<p><code v-pre>&lt;img&gt;</code>默认是一个行内元素，与前后的文字处在同一行。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码的渲染结果是，文字和图片在同一行显示。</p>
<p>图像默认以原始大小显示。如果图片很大，又与文字处在同一行，那么图片将把当前行的行高撑高，并且图片的底边与文字的底边在同一条水平线上。</p>
<p><code v-pre>&lt;img&gt;</code>可以放在<code v-pre>&lt;a&gt;</code>标签内部，使得图片变成一个可以点击的链接。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，图片可以像链接那样点击，点击后会产生跳转。</p>
<p><strong>（1）alt 属性</strong></p>
<p><code v-pre>alt</code>属性用来设定图片的文字说明。图片不显示时（比如下载失败，或用户关闭图片加载），图片的位置上会显示该文本。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>示例图片<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>alt</code>是图片的说明。图片下载失败时，浏览器会在图片位置，显示文字“示例图片”。</p>
<p><strong>（2）width 属性，height 属性</strong></p>
<p>图片默认以原始大小插入网页，<code v-pre>width</code>属性和<code v-pre>height</code>属性可以指定图片显示时的宽度和高度，单位是像素或百分比。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>width</code>属性指定图片显示的宽度为400像素，<code v-pre>height</code>属性指定显示高度为300像素。</p>
<p>注意，一旦设置了这两个属性，浏览器会在网页中预先留出这个大小的空间，不管图片有没有加载成功。不过，由于图片的显示大小可以用 CSS 设置，所以不建议使用这两个属性。</p>
<p>一种特殊情况是，<code v-pre>width</code>属性和<code v-pre>height</code>属性只设置了一个，另一个没有设置。这时，浏览器会根据图片的原始大小，自动设置对应比例的图片宽度或高度。举例来说，图片大小是 800像素 x 800像素，<code v-pre>width</code>属性设置成200，那么浏览器会自动将<code v-pre>height</code>设成200。</p>
<p><strong>（3）srcset，sizes</strong></p>
<p>详见下文的《响应式图像》部分。</p>
<p><strong>（4）referrerpolicy</strong></p>
<p><code v-pre>&lt;img&gt;</code>导致的图片加载的 HTTP 请求，默认会带有<code v-pre>Referer</code>的头信息。<code v-pre>referrerpolicy</code>属性对这个行为进行设置。</p>
<p><strong>（5）crossorigin</strong></p>
<p>有时，图片和网页属于不同的网站，网页加载图片就会导致跨域请求，对方服务器可能要求跨域认证。<code v-pre>crossorigin</code>属性用来告诉浏览器，是否采用跨域的形式下载图片，默认是不采用。</p>
<p>简单说，只要打开了这个属性，HTTP 请求的头信息里面，就会加入<code v-pre>origin</code>字段，给出请求发出的域名，不打开这个属性就不加。</p>
<p>一旦打开该属性，它可以设为两个值。</p>
<ul>
<li><code v-pre>anonymous</code>：跨域请求不带有用户凭证（通常是 Cookie）。</li>
<li><code v-pre>use-credentials</code>：跨域请求带有用户凭证。</li>
</ul>
<p>下面是一个例子。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>anonymous<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>crossorigin</code>属性如果省略值的部分，则等同于<code v-pre>anonymous</code>。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（6）loading</strong></p>
<p>浏览器的默认行为是，只要解析到<code v-pre>&lt;img&gt;</code>标签，就开始加载图片。对于很长的网页，这样做很浪费带宽，因为用户不一定会往下滚动，一直看到网页结束。用户很可能是点开网页，看了一会就关掉了，那些不在视口的图片加载的流量，就都浪费了。</p>
<p><code v-pre>loading</code>属性改变了这个行为，可以指定图片的懒加载，即图片默认不加载，只有即将滚动进入视口，变成用户可见时才会加载，这样就节省了带宽。</p>
<p><code v-pre>loading</code>属性可以取以下三个值。</p>
<blockquote>
<ul>
<li><code v-pre>auto</code>：浏览器默认行为，等同于不使用<code v-pre>loading</code>属性。</li>
<li><code v-pre>lazy</code>：启用懒加载。</li>
<li><code v-pre>eager</code>：立即加载资源，无论它在页面上的哪个位置。</li>
</ul>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image.png<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于行内图片的懒加载，可能会导致页面布局重排，所以使用这个属性的时候，最好指定图片的高和宽。</p>
<h2 id="figure-figcaption" tabindex="-1"><a class="header-anchor" href="#figure-figcaption" aria-hidden="true">#</a> <code v-pre>&lt;figure&gt;</code>，<code v-pre>&lt;figcaption&gt;</code></h2>
<p><code v-pre>&lt;figure&gt;</code>标签可以理解为一个图像区块，将图像和相关信息封装在一起。<code v-pre>&lt;figcaption&gt;</code>是它的可选子元素，表示图像的文本描述，通常用于放置标题，可以出现多个。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com/foo.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">></span></span>示例图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了图像，<code v-pre>&lt;figure&gt;</code>还可以封装引言、代码、诗歌等等。它等于是一个将主体内容与附加信息，封装在一起的语义容器。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">></span></span>JavaScript 代码示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>const foo = 'hello';<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式图像" tabindex="-1"><a class="header-anchor" href="#响应式图像" aria-hidden="true">#</a> 响应式图像</h2>
<p>网页在不同尺寸的设备上，都能产生良好的显示效果，叫做<a href="http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html" target="_blank" rel="noopener noreferrer">“响应式设计”<ExternalLinkIcon/></a>（responsive web design）。响应式设计的网页图像，就是“响应式图像”（responsive image）。</p>
<p>响应式图像的解决方案有很多，JavaScript 和 CSS 都可以实现。这里只介绍语义性最好的 HTML 方法，浏览器原生支持。</p>
<h3 id="问题的由来" tabindex="-1"><a class="header-anchor" href="#问题的由来" aria-hidden="true">#</a> 问题的由来</h3>
<p>我们知道，<code v-pre>&lt;img&gt;</code>标签用于插入网页图像，所有情况默认插入的都是同一张图像。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码在桌面端和手机上，插入的都是图像文件<code v-pre>foo.jpg</code>。</p>
<p>这种处理方法固然简单，但是有三大弊端。</p>
<p><strong>（1）体积</strong></p>
<p>一般来说，桌面端显示的是大尺寸的图像，文件体积较大。手机的屏幕较小，只需要小尺寸的图像，可以节省带宽，加速网页渲染。</p>
<p><strong>（2）像素密度</strong></p>
<p>桌面显示器一般是单倍像素密度，而手机的显示屏往往是多倍像素密度，即显示时多个像素合成为一个像素，这种屏幕称为 Retina 屏幕。图像文件很可能在桌面端很清晰，放到手机上会有点模糊，因为图像没有那么高的像素密度，浏览器自动把图像的每个像素复制到周围像素，满足像素密度的要求，导致图像的锐利度有所下降。</p>
<p><strong>（3）视觉风格</strong></p>
<p>桌面显示器的面积较大，图像可以容纳更多细节。手机的屏幕较小，许多细节是看不清的，需要突出重点。</p>
<p><img src="https://www.wangbase.com/blogimg/asset/201906/bg2019061002.jpg" alt=""></p>
<p><img src="https://www.wangbase.com/blogimg/asset/201906/bg2019061003.jpg" alt=""></p>
<p>上面两张图片，下方的手机图片经过裁剪以后，更突出图像重点，明显效果更好。</p>
<h3 id="srcset属性" tabindex="-1"><a class="header-anchor" href="#srcset属性" aria-hidden="true">#</a> <code v-pre>srcset</code>属性</h3>
<p>为了解决上面这些问题，HTML 语言提供了一套完整的解决方案。首先，<code v-pre>&lt;img&gt;</code>标签引入了<code v-pre>srcset</code>属性。</p>
<p><code v-pre>srcset</code>属性用来指定多张图像，适应不同像素密度的屏幕。它的值是一个逗号分隔的字符串，每个部分都是一张图像的 URL，后面接一个空格，然后是像素密度的描述符。请看下面的例子。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo-320w.jpg,
             foo-480w.jpg 1.5x,
             foo-640w.jpg 2x<span class="token punctuation">"</span></span>
     <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo-640w.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>srcset</code>属性给出了三个图像 URL，适应三种不同的像素密度。</p>
<p>图像 URL 后面的像素密度描述符，格式是像素密度倍数 + 字母<code v-pre>x</code>。<code v-pre>1x</code>表示单倍像素密度，可以省略。浏览器根据当前设备的像素密度，选择需要加载的图像。</p>
<p>如果<code v-pre>srcset</code>属性都不满足条件，那么就加载<code v-pre>src</code>属性指定的默认图像。</p>
<h3 id="sizes属性" tabindex="-1"><a class="header-anchor" href="#sizes属性" aria-hidden="true">#</a> <code v-pre>sizes</code>属性</h3>
<p>像素密度的适配，只适合显示区域一样大小的图像。如果希望不同尺寸的屏幕，显示不同大小的图像，<code v-pre>srcset</code>属性就不够用了，必须搭配<code v-pre>sizes</code>属性。</p>
<p>第一步，<code v-pre>srcset</code>属性列出所有可用的图像。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w<span class="token punctuation">"</span></span>
     <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo-1280.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>srcset</code>属性列出四张可用的图像，每张图像的 URL 后面是一个空格，再加上宽度描述符。</p>
<p>宽度描述符就是图像原始的宽度，加上字符<code v-pre>w</code>。上例的四种图片的原始宽度分别为160像素、320像素、640像素和1280像素。</p>
<p>第二步，<code v-pre>sizes</code>属性列出不同设备的图像显示宽度。</p>
<p><code v-pre>sizes</code>属性的值是一个逗号分隔的字符串，除了最后一部分，前面每个部分都是一个放在括号里面的媒体查询表达式，后面是一个空格，再加上图像的显示宽度。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w<span class="token punctuation">"</span></span>
     <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px<span class="token punctuation">"</span></span>
     <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo-1280.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>sizes</code>属性给出了三种屏幕条件，以及对应的图像显示宽度。宽度不超过440像素的设备，图像显示宽度为100%；宽度441像素到900像素的设备，图像显示宽度为33%；宽度900像素以上的设备，图像显示宽度为<code v-pre>254px</code>。</p>
<p>第三步，浏览器根据当前设备的宽度，从<code v-pre>sizes</code>属性获得图像的显示宽度，然后从<code v-pre>srcset</code>属性找出最接近该宽度的图像，进行加载。</p>
<p>假定当前设备的屏幕宽度是<code v-pre>480px</code>，浏览器从<code v-pre>sizes</code>属性查询得到，图片的显示宽度是<code v-pre>33vw</code>（即33%），等于<code v-pre>160px</code>。<code v-pre>srcset</code>属性里面，正好有宽度等于<code v-pre>160px</code>的图片，于是加载<code v-pre>foo-160.jpg</code>。</p>
<p>如果省略<code v-pre>sizes</code>属性，那么浏览器将根据实际的图像显示宽度，从<code v-pre>srcset</code>属性选择最接近的图片。一旦使用<code v-pre>sizes</code>属性，就必须与<code v-pre>srcset</code>属性搭配使用，单独使用<code v-pre>sizes</code>属性是无效的。</p>
<h2 id="picture" tabindex="-1"><a class="header-anchor" href="#picture" aria-hidden="true">#</a> <code v-pre>&lt;picture&gt;</code></h2>
<h3 id="响应式用法" tabindex="-1"><a class="header-anchor" href="#响应式用法" aria-hidden="true">#</a> 响应式用法</h3>
<p><code v-pre>&lt;img&gt;</code>标签的<code v-pre>srcset</code>属性和<code v-pre>sizes</code>属性分别解决了像素密度和屏幕大小的适配，但如果要同时适配不同像素密度、不同大小的屏幕，就要用到<code v-pre>&lt;picture&gt;</code>标签。</p>
<p><code v-pre>&lt;picture&gt;</code>是一个容器标签，内部使用<code v-pre>&lt;source&gt;</code>和<code v-pre>&lt;img&gt;</code>，指定不同情况下加载的图像。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 500px)<span class="token punctuation">"</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cat-vertical.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 501px)<span class="token punctuation">"</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cat-horizontal.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cat.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;picture&gt;</code>标签内部有两个<code v-pre>&lt;source&gt;</code>标签和一个<code v-pre>&lt;img&gt;</code>标签。</p>
<p><code v-pre>&lt;picture&gt;</code>内部的<code v-pre>&lt;source&gt;</code>标签，主要使用<code v-pre>media</code>属性和<code v-pre>srcset</code>属性。<code v-pre>media</code>属性给出媒体查询表达式，<code v-pre>srcset</code>属性就是<code v-pre>&lt;img&gt;</code>标签的<code v-pre>srcset</code>属性，给出加载的图像文件。<code v-pre>sizes</code>属性其实这里也可以用，但由于有了<code v-pre>media</code>属性，就没有必要了。</p>
<p>浏览器按照<code v-pre>&lt;source&gt;</code>标签出现的顺序，依次判断当前设备是否满足<code v-pre>media</code>属性的媒体查询表达式，如果满足就加载<code v-pre>srcset</code>属性指定的图片文件，并且不再执行后面的<code v-pre>&lt;source&gt;</code>标签和<code v-pre>&lt;img&gt;</code>标签。</p>
<p><code v-pre>&lt;img&gt;</code>标签是默认情况下加载的图像，用来满足上面所有<code v-pre>&lt;source&gt;</code>都不匹配的情况，或者不支持<code v-pre>&lt;picture&gt;</code>的老式浏览器。</p>
<p>上面例子中，设备宽度如果不超过<code v-pre>500px</code>，就加载竖屏的图像，否则加载横屏的图像。</p>
<p>下面给出一个例子，同时考虑屏幕尺寸和像素密度的适配。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>homepage-person@desktop.png,
                  homepage-person@desktop-2x.png 2x<span class="token punctuation">"</span></span>
          <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 990px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>homepage-person@tablet.png,
                  homepage-person@tablet-2x.png 2x<span class="token punctuation">"</span></span>
          <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 750px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>homepage-person@mobile.png,
               homepage-person@mobile-2x.png 2x<span class="token punctuation">"</span></span>
       <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Shopify Merchant, Corrine Anestopoulos<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;source&gt;</code>标签的<code v-pre>media</code>属性给出屏幕尺寸的适配条件，每个条件都用<code v-pre>srcset</code>属性，再给出两种像素密度的图像 URL。</p>
<h3 id="图像格式的选择" tabindex="-1"><a class="header-anchor" href="#图像格式的选择" aria-hidden="true">#</a> 图像格式的选择</h3>
<p>除了响应式图像，<code v-pre>&lt;picture&gt;</code>标签还可以用来选择不同格式的图像。比如，如果当前浏览器支持 Webp 格式，就加载这种格式的图像，否则加载 PNG 图像。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/svg+xml<span class="token punctuation">"</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo.xml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/webp<span class="token punctuation">"</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo.webp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ACME Corp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;source&gt;</code>标签的<code v-pre>type</code>属性给出图像的 MIME 类型，<code v-pre>srcset</code>是对应的图像 URL。</p>
<p>浏览器按照<code v-pre>&lt;source&gt;</code>标签出现的顺序，依次检查是否支持<code v-pre>type</code>属性指定的图像格式，如果支持就加载图像，并且不再检查后面的<code v-pre>&lt;source&gt;</code>标签了。上面例子中，图像加载优先顺序依次为 svg 格式、webp 格式和 png 格式。</p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>
<ul>
<li><a href="https://cloudfour.com/thinks/responsive-images-101-definitions/" target="_blank" rel="noopener noreferrer">Responsive Images 101<ExternalLinkIcon/></a>, Jason Grigsby</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" target="_blank" rel="noopener noreferrer">Responsive images<ExternalLinkIcon/></a>, MDN</li>
<li><a href="https://web.dev/native-lazy-loading" target="_blank" rel="noopener noreferrer">Native lazy-loading for the web<ExternalLinkIcon/></a>, Houssein Djirdeh</li>
</ul>
</div></template>


