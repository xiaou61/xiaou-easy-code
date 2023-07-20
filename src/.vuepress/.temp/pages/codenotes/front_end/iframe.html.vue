<template><div><h1 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h1>
<p><code v-pre>&lt;iframe&gt;</code>标签用于在网页里面嵌入其他网页。</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<p><code v-pre>&lt;iframe&gt;</code>标签生成一个指定区域，在该区域中嵌入其他网页。它是一个容器元素，如果浏览器不支持<code v-pre>&lt;iframe&gt;</code>，就会显示内部的子元素。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.example.com<span class="token punctuation">"</span></span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
        <span class="token attr-name">allowfullscreen</span> <span class="token attr-name">sandbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击打开嵌入页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码在当前网页嵌入<code v-pre>https://www.example.com</code>，显示区域的宽度是<code v-pre>100%</code>，高度是<code v-pre>500</code>像素。如果当前浏览器不支持<code v-pre>&lt;iframe&gt;</code>，则会显示一个链接，让用户点击。</p>
<p>浏览器普遍支持<code v-pre>&lt;iframe&gt;</code>，所以内部的子元素可以不写。</p>
<p><code v-pre>&lt;iframe&gt;</code>的属性如下。</p>
<ul>
<li><code v-pre>allowfullscreen</code>：允许嵌入的网页全屏显示，需要全屏 API 的支持，请参考相关的 JavaScript 教程。</li>
<li><code v-pre>frameborder</code>：是否绘制边框，<code v-pre>0</code>为不绘制，<code v-pre>1</code>为绘制（默认值）。建议尽量少用这个属性，而是在 CSS 里面设置样式。</li>
<li><code v-pre>src</code>：嵌入的网页的 URL。</li>
<li><code v-pre>width</code>：显示区域的宽度。</li>
<li><code v-pre>height</code>：显示区域的高度。</li>
<li><code v-pre>sandbox</code>：设置嵌入的网页的权限，详见下文。</li>
<li><code v-pre>importance</code>：浏览器下载嵌入的网页的优先级，可以设置三个值。<code v-pre>high</code>表示高优先级，<code v-pre>low</code>表示低优先级，<code v-pre>auto</code>表示由浏览器自行决定。</li>
<li><code v-pre>name</code>：内嵌窗口的名称，可以用于<code v-pre>&lt;a&gt;</code>、<code v-pre>&lt;form&gt;</code>、<code v-pre>&lt;base&gt;</code>的<code v-pre>target</code>属性。</li>
<li><code v-pre>referrerpolicy</code>：请求嵌入网页时，HTTP 请求的<code v-pre>Referer</code>字段的设置。参见<code v-pre>&lt;a&gt;</code>标签的介绍。</li>
</ul>
<h2 id="sandbox-属性" tabindex="-1"><a class="header-anchor" href="#sandbox-属性" aria-hidden="true">#</a> sandbox 属性</h2>
<p>嵌入的网页默认具有正常权限，比如执行脚本、提交表单、弹出窗口等。如果嵌入的网页是其他网站的页面，你不了解对方会执行什么操作，因此就存在安全风险。为了限制<code v-pre>&lt;iframe&gt;</code>的风险，HTML 提供了<code v-pre>sandbox</code>属性，允许设置嵌入的网页的权限，等同于提供了一个隔离层，即“沙箱”。</p>
<p><code v-pre>sandbox</code>可以当作布尔属性使用，表示打开所有限制。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.example.com<span class="token punctuation">"</span></span> <span class="token attr-name">sandbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>sandbox</code>属性可以设置具体的值，表示逐项打开限制。未设置某一项，就表示不具有该权限。</p>
<ul>
<li><code v-pre>allow-forms</code>：允许提交表单。</li>
<li><code v-pre>allow-modals</code>：允许提示框，即允许执行<code v-pre>window.alert()</code>等会产生弹出提示框的 JavaScript 方法。</li>
<li><code v-pre>allow-popups</code>：允许嵌入的网页使用<code v-pre>window.open()</code>方法弹出窗口。</li>
<li><code v-pre>allow-popups-to-escape-sandbox</code>：允许弹出窗口不受沙箱的限制。</li>
<li><code v-pre>allow-orientation-lock</code>：允许嵌入的网页用脚本锁定屏幕的方向，即横屏或竖屏。</li>
<li><code v-pre>allow-pointer-lock</code>：允许嵌入的网页使用 Pointer Lock API，锁定鼠标的移动。</li>
<li><code v-pre>allow-presentation</code>：允许嵌入的网页使用 Presentation API。</li>
<li><code v-pre>allow-same-origin</code>：不打开该项限制，将使得所有加载的网页都视为跨域。</li>
<li><code v-pre>allow-scripts</code>：允许嵌入的网页运行脚本（但不创建弹出窗口）。</li>
<li><code v-pre>allow-storage-access-by-user-activation</code>：<code v-pre>sandbox</code>属性同时设置了这个值和<code v-pre>allow-same-origin</code>的情况下，允许<code v-pre>&lt;iframe&gt;</code>嵌入的第三方网页通过用户发起<code v-pre>document.requestStorageAccess()</code>请求，经由 Storage Access API 访问父窗口的 Cookie。</li>
<li><code v-pre>allow-top-navigation</code>：允许嵌入的网页对顶级窗口进行导航。</li>
<li><code v-pre>allow-top-navigation-by-user-activation</code>：允许嵌入的网页对顶级窗口进行导航，但必须由用户激活。</li>
<li><code v-pre>allow-downloads-without-user-activation</code>：允许在没有用户激活的情况下，嵌入的网页启动下载。</li>
</ul>
<p>注意，不要同时设置<code v-pre>allow-scripts</code>和<code v-pre>allow-same-origin</code>属性，这将使得嵌入的网页可以改变或删除<code v-pre>sandbox</code>属性。</p>
<h2 id="loading-属性" tabindex="-1"><a class="header-anchor" href="#loading-属性" aria-hidden="true">#</a> loading 属性</h2>
<p><code v-pre>&lt;iframe&gt;</code>指定的网页会立即加载，有时这不是希望的行为。<code v-pre>&lt;iframe&gt;</code>滚动进入视口以后再加载，这样会比较节省带宽。</p>
<p><code v-pre>loading</code>属性可以触发<code v-pre>&lt;iframe&gt;</code>网页的懒加载。该属性可以取以下三个值。</p>
<ul>
<li><code v-pre>auto</code>：浏览器的默认行为，与不使用<code v-pre>loading</code>属性效果相同。</li>
<li><code v-pre>lazy</code>：<code v-pre>&lt;iframe&gt;</code>的懒加载，即将滚动进入视口时开始加载。</li>
<li><code v-pre>eager</code>：立即加载资源，无论在页面上的位置如何。</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码会启用<code v-pre>&lt;iframe&gt;</code>的懒加载。</p>
<p>有一点需要注意，如果<code v-pre>&lt;iframe&gt;</code>是隐藏的，则<code v-pre>loading</code>属性无效，将会立即加载。只要满足以下任一个条件，Chrome 浏览器就会认为<code v-pre>&lt;iframe&gt;</code>是隐藏的。</p>
<blockquote>
<ul>
<li><code v-pre>&lt;iframe&gt;</code>的宽度和高度为4像素或更小。</li>
<li>样式设为<code v-pre>display: none</code>或<code v-pre>visibility: hidden</code>。</li>
<li>使用定位坐标为负<code v-pre>X</code>或负<code v-pre>Y</code>，将<code v-pre>&lt;iframe</code>&gt;放置在屏幕外。</li>
</ul>
</blockquote>
</div></template>


