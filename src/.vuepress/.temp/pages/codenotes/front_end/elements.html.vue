<template><div><h1 id="其他标签" tabindex="-1"><a class="header-anchor" href="#其他标签" aria-hidden="true">#</a> 其他标签</h1>
<p>本章介绍一些最新引入标准的标签。</p>
<h2 id="dialog" tabindex="-1"><a class="header-anchor" href="#dialog" aria-hidden="true">#</a> <code v-pre>&lt;dialog&gt;</code></h2>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>
<p><code v-pre>&lt;dialog&gt;</code>标签表示一个可以关闭的对话框。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dialog</span><span class="token punctuation">></span></span>
  Hello world
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dialog</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面就是一个最简单的对话框。</p>
<p>默认情况下，对话框是隐藏的，不会在网页上显示。如果要让对话框显示，必须加上<code v-pre>open</code>属性。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dialog</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>
  Hello world
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dialog</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会在网页显示一个方框，内容是<code v-pre>Hello world</code>。</p>
<p><code v-pre>&lt;dialog&gt;</code>元素里面，可以放入其他 HTML 元素。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dialog</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dialog</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的对话框里面，有一个输入框和提交按钮。</p>
<p>注意，上例中<code v-pre>&lt;form&gt;</code>的<code v-pre>method</code>属性设为<code v-pre>dialog</code>，这时点击提交按钮，对话框就会消失。但是，表单不会提交到服务器，浏览器会将表单元素的<code v-pre>returnValue</code>属性设为 Submit 按钮的<code v-pre>value</code>属性（上例是<code v-pre>foo</code>）。</p>
<h3 id="javascript-api" tabindex="-1"><a class="header-anchor" href="#javascript-api" aria-hidden="true">#</a> JavaScript API</h3>
<p><code v-pre>&lt;dialog&gt;</code>元素的 JavaScript API 提供<code v-pre>Dialog.showModal()</code>和<code v-pre>Dialog.close()</code>两个方法，用于打开/关闭对话框。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> modal <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'dialog'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对话框显示，相当于增加 open 属性</span>
modal<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对话框关闭，相当于移除 open 属性</span>
modal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发者可以提供关闭按钮，让其调用<code v-pre>Dialog.close()</code>方法，关闭对话框。</p>
<p><code v-pre>Dialog.close()</code>方法可以接受一个字符串作为参数，用于传递信息。<code v-pre>&lt;dialog&gt;</code>接口的<code v-pre>returnValue</code>属性可以读取这个字符串，否则<code v-pre>returnValue</code>属性等于提交按钮的<code v-pre>value</code>属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>modal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token string">'Accepted'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
modal<span class="token punctuation">.</span>returnValue <span class="token comment">// "Accepted"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Dialog.showModal()</code>方法唤起对话框时，会有一个透明层，阻止用户与对话框外部的内容互动。CSS 提供了一个 Dialog 元素的<code v-pre>::backdrop</code>伪类，用于选中这个透明层，因此可以编写样式让透明层变得可见。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">dialog</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.6rem<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1em black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">dialog::backdrop</span> <span class="token punctuation">{</span>
  <span class="token comment">/* make the backdrop a semi-transparent black */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码不仅为<code v-pre>&lt;dialog&gt;</code>指定了样式，还将对话框的透明层变成了灰色透明。</p>
<p><code v-pre>&lt;dialog&gt;</code>元素还有一个<code v-pre>Dialog.show()</code>方法，也能唤起对话框，但是没有透明层，用户可以与对话框外部的内容互动。</p>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<p><code v-pre>&lt;dialog&gt;</code>元素有两个事件，可以监听。</p>
<ul>
<li><code v-pre>close</code>：对话框关闭时触发</li>
<li><code v-pre>cancel</code>：用户按下<code v-pre>esc</code>键关闭对话框时触发</li>
</ul>
<p>如果希望用户点击透明层，就关闭对话框，可以用下面的代码。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>modal<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token operator">===</span> modal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    modal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token string">'cancelled'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="details-summary" tabindex="-1"><a class="header-anchor" href="#details-summary" aria-hidden="true">#</a> <code v-pre>&lt;details&gt;</code>，<code v-pre>&lt;summary&gt;</code></h2>
<h3 id="基本用法-1" tabindex="-1"><a class="header-anchor" href="#基本用法-1" aria-hidden="true">#</a> 基本用法</h3>
<p><code v-pre>&lt;details&gt;</code>标签用来折叠内容，浏览器会折叠显示该标签的内容。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
这是一段解释文本。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码在浏览器里面，会折叠起来，显示<code v-pre>Details</code>，前面有一个三角形，就像下面这样。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>▶ Details
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用户点击这段文本，折叠的文本就会展开，显示详细内容。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>▼ Details
这是一段解释文本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再点击一下，展开的文本又会重新折叠起来。</p>
<p><code v-pre>&lt;details&gt;</code>标签的<code v-pre>open</code>属性，用于默认打开折叠。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>
这是一段解释文本。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码默认打开折叠。</p>
<p><code v-pre>&lt;summary&gt;</code>标签用来定制折叠内容的标题。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>这是标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
  这是一段解释文本。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码显示结果如下。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>▶ 这是标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>点击后，展示的效果如下。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>▼ 这是标题
这是一段解释文本。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 CSS 设置<code v-pre>summary::-webkit-details-marker</code>，可以改变标题前面的三角箭头。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">summary::-webkit-details-marker</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://example.com/foo.svg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的样式是另一种替换箭头的方法。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">summary::-webkit-details-marker</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">summary:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"\2714"</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #696f7c<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript-api-1" tabindex="-1"><a class="header-anchor" href="#javascript-api-1" aria-hidden="true">#</a> JavaScript API</h3>
<p><code v-pre>Details</code>元素的<code v-pre>open</code>属性返回<code v-pre>&lt;details&gt;</code>当前是打开还是关闭。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> details <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'details'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>detail<span class="token punctuation">.</span>open <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 展开状态</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 折叠状态</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Details</code>元素有一个<code v-pre>toggle</code>事件，打开或关闭折叠时，都会触发这个事件。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>details<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'toggle'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>details<span class="token punctuation">.</span>open<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 展开状况 */</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 折叠状态 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>
<ul>
<li><a href="https://keithjgrant.com/posts/2018/meet-the-new-dialog-element/" target="_blank" rel="noopener noreferrer">Meet the New Dialog Element<ExternalLinkIcon/></a>, Keith J. Grant</li>
<li><a href="https://blog.logrocket.com/the-dialog-element-the-way-to-create-tomorrows-modal-windows-f1d4ab14380b" target="_blank" rel="noopener noreferrer">The dialog element: The way to create tomorrow’s modal windows<ExternalLinkIcon/></a>, Abhishek Jakhar</li>
<li><a href="https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion/" target="_blank" rel="noopener noreferrer">Details/Summary is the Easiest Way Ever to Make an Accordion<ExternalLinkIcon/></a>, Chris Coyier</li>
</ul>
</div></template>


