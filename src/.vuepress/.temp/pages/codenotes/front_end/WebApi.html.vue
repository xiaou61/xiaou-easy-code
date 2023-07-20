<template><div><h2 id="webapi" tabindex="-1"><a class="header-anchor" href="#webapi" aria-hidden="true">#</a> WebApi</h2>
<p>这个只作为一个了解就可以了</p>
<h2 id="canvas-api" tabindex="-1"><a class="header-anchor" href="#canvas-api" aria-hidden="true">#</a> Canvas API</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<p><code v-pre>&lt;canvas&gt;</code>元素用于生成图像。它本身就像一个画布，JavaScript 通过操作它的 API，在上面生成图像。它的底层是一个个像素，基本上<code v-pre>&lt;canvas&gt;</code>是一个可以用 JavaScript 操作的位图（bitmap）。</p>
<p>它与 SVG 图像的区别在于，<code v-pre>&lt;canvas&gt;</code>是脚本调用各种方法生成图像，SVG 则是一个 XML 文件，通过各种子元素生成图像。</p>
<p>使用 Canvas API 之前，需要在网页里面新建一个<code v-pre>&lt;canvas&gt;</code>元素。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCanvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  您的浏览器不支持 Canvas
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果浏览器不支持这个 API，就会显示<code v-pre>&lt;canvas&gt;</code>标签中间的文字：“您的浏览器不支持 Canvas”。</p>
<p>每个<code v-pre>&lt;canvas&gt;</code>元素都有一个对应的<code v-pre>CanvasRenderingContext2D</code>对象（上下文对象）。Canvas API 就定义在这个对象上面。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;canvas&gt;</code>元素节点对象的<code v-pre>getContext()</code>方法，返回的就是<code v-pre>CanvasRenderingContext2D</code>对象。</p>
<p>注意，Canvas API 需要<code v-pre>getContext</code>方法指定参数<code v-pre>2d</code>，表示该<code v-pre>&lt;canvas&gt;</code>节点生成 2D 的平面图像。如果参数是<code v-pre>webgl</code>，就表示用于生成 3D 的立体图案，这部分属于 WebGL API。</p>
<p>按照用途，Canvas API 分成两大部分：绘制图形和图像处理。</p>
<h3 id="canvas-api-绘制图形" tabindex="-1"><a class="header-anchor" href="#canvas-api-绘制图形" aria-hidden="true">#</a> Canvas API：绘制图形</h3>
<p>Canvas 画布提供了一个作图的平面空间，该空间的每个点都有自己的坐标。原点<code v-pre>(0, 0)</code>位于图像左上角，<code v-pre>x</code>轴的正向是原点向右，<code v-pre>y</code>轴的正向是原点向下。</p>
<h4 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h4>
<p>以下方法和属性用来绘制路径。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.beginPath()</code>：开始绘制路径。</li>
<li><code v-pre>CanvasRenderingContext2D.closePath()</code>：结束路径，返回到当前路径的起始点，会从当前点到起始点绘制一条直线。如果图形已经封闭，或者只有一个点，那么此方法不会产生任何效果。</li>
<li><code v-pre>CanvasRenderingContext2D.moveTo()</code>：设置路径的起点，即将一个新路径的起始点移动到<code v-pre>(x，y)</code>坐标。</li>
<li><code v-pre>CanvasRenderingContext2D.lineTo()</code>：使用直线从当前点连接到<code v-pre>(x, y)</code>坐标。</li>
<li><code v-pre>CanvasRenderingContext2D.fill()</code>：在路径内部填充颜色（默认为黑色）。</li>
<li><code v-pre>CanvasRenderingContext2D.stroke()</code>：路径线条着色（默认为黑色）。</li>
<li><code v-pre>CanvasRenderingContext2D.fillStyle</code>：指定路径填充的颜色和样式（默认为黑色）。</li>
<li><code v-pre>CanvasRenderingContext2D.strokeStyle</code>：指定路径线条的颜色和样式（默认为黑色）。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码只是确定了路径的形状，画布上还看不出来，因为没有颜色。所以还需要着色。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 或者</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，这两个方法都可以使得路径可见。<code v-pre>fill()</code>在路径内部填充颜色，使之变成一个实心的图形；<code v-pre>stroke()</code>只对路径线条着色。</p>
<p>这两个方法默认都是使用黑色，可以使用<code v-pre>fillStyle</code>和<code v-pre>strokeStyle</code>属性指定其他颜色。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'red'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">'red'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将填充和线条的颜色指定为红色。</p>
<h4 id="线型" tabindex="-1"><a class="header-anchor" href="#线型" aria-hidden="true">#</a> 线型</h4>
<p>以下的方法和属性控制线条的视觉特征。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.lineWidth</code>：指定线条的宽度，默认为1.0。</li>
<li><code v-pre>CanvasRenderingContext2D.lineCap</code>：指定线条末端的样式，有三个可能的值：<code v-pre>butt</code>（默认值，末端为矩形）、<code v-pre>round</code>（末端为圆形）、<code v-pre>square</code>（末端为突出的矩形，矩形宽度不变，高度为线条宽度的一半）。</li>
<li><code v-pre>CanvasRenderingContext2D.lineJoin</code>：指定线段交点的样式，有三个可能的值：<code v-pre>round</code>（交点为扇形）、<code v-pre>bevel</code>（交点为三角形底边）、<code v-pre>miter</code>（默认值，交点为菱形)。</li>
<li><code v-pre>CanvasRenderingContext2D.miterLimit</code>：指定交点菱形的长度，默认为10。该属性只在<code v-pre>lineJoin</code>属性的值等于<code v-pre>miter</code>时有效。</li>
<li><code v-pre>CanvasRenderingContext2D.getLineDash()</code>：返回一个数组，表示虚线里面线段和间距的长度。</li>
<li><code v-pre>CanvasRenderingContext2D.setLineDash()</code>：数组，用于指定虚线里面线段和间距的长度。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>lineCap <span class="token operator">=</span> <span class="token string">'round'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>lineJoin <span class="token operator">=</span> <span class="token string">'round'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，线条的宽度为3，线条的末端和交点都改成圆角，并且设置为虚线。</p>
<h4 id="矩形" tabindex="-1"><a class="header-anchor" href="#矩形" aria-hidden="true">#</a> 矩形</h4>
<p>以下方法用来绘制矩形。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.rect()</code>：绘制矩形路径。</li>
<li><code v-pre>CanvasRenderingContext2D.fillRect()</code>：填充一个矩形。</li>
<li><code v-pre>CanvasRenderingContext2D.strokeRect()</code>：绘制矩形边框。</li>
<li><code v-pre>CanvasRenderingContext2D.clearRect()</code>：指定矩形区域的像素都变成透明。</li>
</ul>
<p>上面四个方法的格式都一样，都接受四个参数，分别是矩形左上角的横坐标和纵坐标、矩形的宽和高。</p>
<p><code v-pre>CanvasRenderingContext2D.rect()</code>方法用于绘制矩形路径。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码绘制一个正方形，左上角坐标为<code v-pre>(10, 10)</code>，宽和高都为100。</p>
<p><code v-pre>CanvasRenderingContext2D.fillRect()</code>用来向一个矩形区域填充颜色。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'green'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码绘制一个绿色的正方形，左上角坐标为<code v-pre>(10, 10)</code>，宽和高都为100。</p>
<p><code v-pre>CanvasRenderingContext2D.strokeRect()</code>用来绘制一个矩形区域的边框。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">'green'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码绘制一个绿色的空心正方形，左上角坐标为<code v-pre>(10, 10)</code>，宽和高都为100。</p>
<p><code v-pre>CanvasRenderingContext2D.clearRect()</code>用于擦除指定矩形区域的像素颜色，等同于把早先的绘制效果都去除。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码先绘制一个 100 x 100 的正方形，然后在它的内部擦除 90 x 90 的区域，等同于形成了一个5像素宽度的边框。</p>
<h4 id="弧线" tabindex="-1"><a class="header-anchor" href="#弧线" aria-hidden="true">#</a> 弧线</h4>
<p>以下方法用于绘制弧形。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.arc()</code>：通过指定圆心和半径绘制弧形。</li>
<li><code v-pre>CanvasRenderingContext2D.arcTo()</code>：通过指定两根切线和半径绘制弧形。</li>
</ul>
<p><code v-pre>CanvasRenderingContext2D.arc()</code>主要用来绘制圆形或扇形。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 格式</span>
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> radius<span class="token punctuation">,</span> startAngle<span class="token punctuation">,</span> endAngle<span class="token punctuation">,</span> anticlockwise<span class="token punctuation">)</span>

<span class="token comment">// 实例</span>
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>arc()</code>方法的<code v-pre>x</code>和<code v-pre>y</code>参数是圆心坐标，<code v-pre>radius</code>是半径，<code v-pre>startAngle</code>和<code v-pre>endAngle</code>则是扇形的起始角度和终止角度（以弧度表示），<code v-pre>anticlockwise</code>表示做图时应该逆时针画（<code v-pre>true</code>）还是顺时针画（<code v-pre>false</code>），这个参数用来控制扇形的方向（比如上半圆还是下半圆）。</p>
<p>下面是绘制实心圆形的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码绘制了一个半径50，起始角度为0，终止角度为 2 * PI 的完整的圆。</p>
<p>绘制空心半圆的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>CanvasRenderingContext2D.arcTo()</code>方法主要用来绘制圆弧，需要给出两个点的坐标，当前点与第一个点形成一条直线，第一个点与第二个点形成另一条直线，然后画出与这两根直线相切的弧线。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">arcTo</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>arcTo()</code>有5个参数，前两个参数是第一个点的坐标，第三个参数和第四个参数是第二个点的坐标，第五个参数是半径。然后，<code v-pre>(0, 0)</code>与<code v-pre>(50, 50)</code>形成一条直线，然后<code v-pre>(50, 50)</code>与<code v-pre>(100, 0)</code>形成第二条直线。弧线就是与这两根直线相切的部分。</p>
<h4 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本</h4>
<p>以下方法和属性用于绘制文本。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.fillText()</code>：在指定位置绘制实心字符。</li>
<li><code v-pre>CanvasRenderingContext2D.strokeText()</code>：在指定位置绘制空心字符。</li>
<li><code v-pre>CanvasRenderingContext2D.measureText()</code>：返回一个 TextMetrics 对象。</li>
<li><code v-pre>CanvasRenderingContext2D.font</code>：指定字型大小和字体，默认值为<code v-pre>10px sans-serif</code>。</li>
<li><code v-pre>CanvasRenderingContext2D.textAlign</code>：文本的对齐方式，默认值为<code v-pre>start</code>。</li>
<li><code v-pre>CanvasRenderingContext2D.direction</code>：文本的方向，默认值为<code v-pre>inherit</code>。</li>
<li><code v-pre>CanvasRenderingContext2D.textBaseline</code>：文本的垂直位置，默认值为<code v-pre>alphabetic</code>。</li>
</ul>
<p><code v-pre>fillText()</code>方法用来在指定位置绘制实心字符。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>CanvasRenderingContext2D<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">[</span><span class="token punctuation">,</span> maxWidth<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法接受四个参数。</p>
<ul>
<li><code v-pre>text</code>：所要填充的字符串。</li>
<li><code v-pre>x</code>：文字起点的横坐标，单位像素。</li>
<li><code v-pre>y</code>：文字起点的纵坐标，单位像素。</li>
<li><code v-pre>maxWidth</code>：文本的最大像素宽度。该参数可选，如果省略，则表示宽度没有限制。如果文本实际长度超过这个参数指定的值，那么浏览器将尝试用较小的字体填充。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在<code v-pre>(50, 50)</code>位置写入字符串<code v-pre>Hello world</code>。</p>
<p>注意，<code v-pre>fillText()</code>方法不支持文本断行，所有文本一定出现在一行内。如果要生成多行文本，只有调用多次<code v-pre>fillText()</code>方法。</p>
<p><code v-pre>strokeText()</code>方法用来添加空心字符，它的参数与<code v-pre>fillText()</code>一致。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这两种方法绘制的文本，默认都是<code v-pre>10px</code>大小、<code v-pre>sans-serif</code>字体，<code v-pre>font</code>属性可以改变字体设置。该属性的值是一个字符串，使用 CSS 的<code v-pre>font</code>属性即可。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">'Bold 20px Arial'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>textAlign</code>属性用来指定文本的对齐方式。它可以取以下几个值。</p>
<ul>
<li><code v-pre>left</code>：左对齐</li>
<li><code v-pre>right</code>：右对齐</li>
<li><code v-pre>center</code>：居中</li>
<li><code v-pre>start</code>：默认值，起点对齐（从左到右的文本为左对齐，从右到左的文本为右对齐）。</li>
<li><code v-pre>end</code>：结尾对齐（从左到右的文本为右对齐，从右到左的文本为左对齐）。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">'Bold 20px Arial'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>direction</code>属性指定文本的方向，默认值为<code v-pre>inherit</code>，表示继承<code v-pre>&lt;canvas&gt;</code>或<code v-pre>document</code>的设置。其他值包括<code v-pre>ltr</code>（从左到右）和<code v-pre>rtl</code>（从右到左）。</p>
<p><code v-pre>textBaseline</code>属性指定文本的垂直位置，可以取以下值。</p>
<ul>
<li><code v-pre>top</code>：上部对齐（字母的基线是整体上移）。</li>
<li><code v-pre>hanging</code>：悬挂对齐（字母的上沿在一根直线上），适用于印度文和藏文。</li>
<li><code v-pre>middle</code>：中部对齐（字母的中线在一根直线上）。</li>
<li><code v-pre>alphabetic</code>：默认值，表示字母位于字母表的正常位置（四线格的第三根线）。</li>
<li><code v-pre>ideographic</code>：下沿对齐（字母的下沿在一根直线上），使用于东亚文字。</li>
<li><code v-pre>bottom</code>：底部对齐（字母的基线下移）。对于英文字母，这个设置与<code v-pre>ideographic</code>没有差异。</li>
</ul>
<p><code v-pre>measureText()</code>方法接受一个字符串作为参数，返回一个 TextMetrics 对象，可以从这个对象上面获取参数字符串的信息，目前主要是文本渲染后的宽度（<code v-pre>width</code>）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> text1 <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
text1<span class="token punctuation">.</span>width <span class="token comment">// 49.46</span>

ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">'Bold 20px Arial'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> text2 <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
text2<span class="token punctuation">.</span>width <span class="token comment">// 107.78</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>10px</code>大小的字符串<code v-pre>Hello world</code>，渲染后宽度为<code v-pre>49.46</code>。放大到<code v-pre>20px</code>以后，宽度为<code v-pre>107.78</code>。</p>
<h4 id="渐变色和图像填充" tabindex="-1"><a class="header-anchor" href="#渐变色和图像填充" aria-hidden="true">#</a> 渐变色和图像填充</h4>
<p>以下方法用于设置渐变效果和图像填充效果。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.createLinearGradient()</code>：定义线性渐变样式。</li>
<li><code v-pre>CanvasRenderingContext2D.createRadialGradient()</code>：定义辐射渐变样式。</li>
<li><code v-pre>CanvasRenderingContext2D.createPattern()</code>：定义图像填充样式。</li>
</ul>
<p><code v-pre>createLinearGradient()</code>方法按照给定直线，生成线性渐变的样式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span>x0<span class="token punctuation">,</span> y0<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>ctx.createLinearGradient(x0, y0, x1, y1)</code>方法接受四个参数：<code v-pre>x0</code>和<code v-pre>y0</code>是起点的横坐标和纵坐标，<code v-pre>x1</code>和<code v-pre>y1</code>是终点的横坐标和纵坐标。通过不同的坐标值，可以生成从上至下、从左到右的渐变等等。</p>
<p>该方法的返回值是一个<code v-pre>CanvasGradient</code>对象，该对象只有一个<code v-pre>addColorStop()</code>方向，用来指定渐变点的颜色。<code v-pre>addColorStop()</code>方法接受两个参数，第一个参数是0到1之间的一个位置量，0表示起点，1表示终点，第二个参数是一个字符串，表示 CSS 颜色。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'green'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'white'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，定义了渐变样式<code v-pre>gradient</code>以后，将这个样式指定给<code v-pre>fillStyle</code>属性，然后<code v-pre>fillRect()</code>就会生成以这个样式填充的矩形区域。</p>
<p><code v-pre>createRadialGradient()</code>方法定义一个辐射渐变，需要指定两个圆。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">createRadialGradient</span><span class="token punctuation">(</span>x0<span class="token punctuation">,</span> y0<span class="token punctuation">,</span> r0<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> r1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>createRadialGradient()</code>方法接受六个参数，<code v-pre>x0</code>和<code v-pre>y0</code>是辐射起始的圆的圆心坐标，<code v-pre>r0</code>是起始圆的半径，<code v-pre>x1</code>和<code v-pre>y1</code>是辐射终止的圆的圆心坐标，<code v-pre>r1</code>是终止圆的半径。</p>
<p>该方法的返回值也是一个<code v-pre>CanvasGradient</code>对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createRadialGradient</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'white'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'green'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，生成辐射样式以后，用这个样式填充一个矩形。</p>
<p><code v-pre>createPattern()</code>方法定义一个图像填充样式，在指定方向上不断重复该图像，填充指定的区域。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">createPattern</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> repetition<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法接受两个参数，第一个参数是图像数据，它可以是<code v-pre>&lt;img&gt;</code>元素，也可以是另一个<code v-pre>&lt;canvas&gt;</code>元素，或者一个表示图像的 Blob 对象。第二个参数是一个字符串，有四个可能的值，分别是<code v-pre>repeat</code>（双向重复）、<code v-pre>repeat-x</code>(水平重复)、<code v-pre>repeat-y</code>(垂直重复)、<code v-pre>no-repeat</code>(不重复)。如果第二个参数是空字符串或<code v-pre>null</code>，则等同于<code v-pre>null</code>。</p>
<p>该方法的返回值是一个<code v-pre>CanvasPattern</code>对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'https://example.com/pattern.png'</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> pattern <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createPattern</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token string">'repeat'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> pattern<span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，图像加载成功以后，使用<code v-pre>createPattern()</code>生成图像样式，然后使用这个样式填充指定区域。</p>
<h4 id="阴影" tabindex="-1"><a class="header-anchor" href="#阴影" aria-hidden="true">#</a> 阴影</h4>
<p>以下属性用于设置阴影。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.shadowBlur</code>：阴影的模糊程度，默认为<code v-pre>0</code>。</li>
<li><code v-pre>CanvasRenderingContext2D.shadowColor</code>：阴影的颜色，默认为<code v-pre>black</code>。</li>
<li><code v-pre>CanvasRenderingContext2D.shadowOffsetX</code>：阴影的水平位移，默认为<code v-pre>0</code>。</li>
<li><code v-pre>CanvasRenderingContext2D.shadowOffsetY</code>：阴影的垂直位移，默认为<code v-pre>0</code>。</li>
</ul>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>shadowOffsetX <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>shadowOffsetY <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>shadowBlur <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token string">'rgba(0,0,0,0.5)'</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'green'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="canvas-api-图像处理" tabindex="-1"><a class="header-anchor" href="#canvas-api-图像处理" aria-hidden="true">#</a> Canvas API：图像处理</h3>
<h4 id="canvasrenderingcontext2d-drawimage" tabindex="-1"><a class="header-anchor" href="#canvasrenderingcontext2d-drawimage" aria-hidden="true">#</a> CanvasRenderingContext2D.drawImage()</h4>
<p>Canvas API 允许将图像文件写入画布，做法是读取图片后，使用<code v-pre>drawImage()</code>方法将这张图片放上画布。</p>
<p><code v-pre>CanvasRenderingContext2D.drawImage()</code>有三种使用格式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> dWidth<span class="token punctuation">,</span> dHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> sx<span class="token punctuation">,</span> sy<span class="token punctuation">,</span> sWidth<span class="token punctuation">,</span> sHeight<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> dWidth<span class="token punctuation">,</span> dHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各个参数的含义如下。</p>
<ul>
<li>image：图像元素</li>
<li>sx：图像内部的横坐标，用于映射到画布的放置点上。</li>
<li>sy：图像内部的纵坐标，用于映射到画布的放置点上。</li>
<li>sWidth：图像在画布上的宽度，会产生缩放效果。如果未指定，则图像不会缩放，按照实际大小占据画布的宽度。</li>
<li>sHeight：图像在画布上的高度，会产生缩放效果。如果未指定，则图像不会缩放，按照实际大小占据画布的高度。</li>
<li>dx：画布内部的横坐标，用于放置图像的左上角</li>
<li>dy：画布内部的纵坐标，用于放置图像的右上角</li>
<li>dWidth：图像在画布内部的宽度，会产生缩放效果。</li>
<li>dHeight：图像在画布内部的高度，会产生缩放效果。</li>
</ul>
<p>下面是最简单的使用场景，将图像放在画布上，两者左上角对齐。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'image.png'</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将一个 PNG 图像放入画布。这时，图像将是原始大小，如果画布小于图像，就会只显示出图像左上角，正好等于画布大小的那一块。</p>
<p>如果要显示完整的图片，可以用图像的宽和高，设置成画布的宽和高。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
image<span class="token punctuation">.</span>onload <span class="token operator">=</span> drawImageActualSize<span class="token punctuation">;</span>
image<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'https://example.com/image.jpg'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">drawImageActualSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>naturalWidth<span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>naturalHeight<span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>naturalWidth<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>naturalHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;canvas&gt;</code>元素的大小设置成图像的本来大小，就能保证完整展示图像。由于图像的本来大小，只有图像加载成功以后才能拿到，因此调整画布的大小，必须放在<code v-pre>image.onload</code>这个监听函数里面。</p>
<h4 id="像素读写" tabindex="-1"><a class="header-anchor" href="#像素读写" aria-hidden="true">#</a> 像素读写</h4>
<p>以下三个方法与像素读写相关。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.getImageData()</code>：将画布读取成一个 ImageData 对象</li>
<li><code v-pre>CanvasRenderingContext2D.putImageData()</code>：将 ImageData 对象写入画布</li>
<li><code v-pre>CanvasRenderingContext2D.createImageData()</code>：生成 ImageData 对象</li>
</ul>
<p><strong>（1）getImageData()</strong></p>
<p><code v-pre>CanvasRenderingContext2D.getImageData()</code>方法用来读取<code v-pre>&lt;canvas&gt;</code>的内容，返回一个 ImageData 对象，包含了每个像素的信息。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span>sx<span class="token punctuation">,</span> sy<span class="token punctuation">,</span> sw<span class="token punctuation">,</span> sh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>getImageData()</code>方法接受四个参数。<code v-pre>sx</code>和<code v-pre>sy</code>是读取区域的左上角坐标，<code v-pre>sw</code>和<code v-pre>sh</code>是读取区域的宽度和高度。如果想要读取整个<code v-pre>&lt;canvas&gt;</code>区域，可以写成下面这样。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> imageData <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>getImageData()</code>方法返回的是一个<code v-pre>ImageData</code>对象。该对象有三个属性。</p>
<ul>
<li>ImageData.data：一个一维数组。该数组的值，依次是每个像素的红、绿、蓝、alpha 通道值（每个值的范围是 0～255），因此该数组的长度等于<code v-pre>图像的像素宽度 x 图像的像素高度 x 4</code>。这个数组不仅可读，而且可写，因此通过操作这个数组，就可以达到操作图像的目的。</li>
<li>ImageData.width：浮点数，表示 ImageData 的像素宽度。</li>
<li>ImageData.height：浮点数，表示 ImageData 的像素高度。</li>
</ul>
<p><strong>（2）putImageData()</strong></p>
<p><code v-pre>CanvasRenderingContext2D.putImageData()</code>方法将<code v-pre>ImageData</code>对象的像素绘制在<code v-pre>&lt;canvas&gt;</code>画布上。该方法有两种使用格式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imagedata<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imagedata<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> dirtyX<span class="token punctuation">,</span> dirtyY<span class="token punctuation">,</span> dirtyWidth<span class="token punctuation">,</span> dirtyHeight<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法有如下参数。</p>
<ul>
<li>imagedata：包含像素信息的 ImageData 对象。</li>
<li>dx：<code v-pre>&lt;canvas&gt;</code>元素内部的横坐标，用于放置 ImageData 图像的左上角。</li>
<li>dy：<code v-pre>&lt;canvas&gt;</code>元素内部的纵坐标，用于放置 ImageData 图像的左上角。</li>
<li>dirtyX：ImageData 图像内部的横坐标，用于作为放置到<code v-pre>&lt;canvas&gt;</code>的矩形区域的左上角的横坐标，默认为0。</li>
<li>dirtyY：ImageData 图像内部的纵坐标，用于作为放置到<code v-pre>&lt;canvas&gt;</code>的矩形区域的左上角的纵坐标，默认为0。</li>
<li>dirtyWidth：放置到<code v-pre>&lt;canvas&gt;</code>的矩形区域的宽度，默认为 ImageData 图像的宽度。</li>
<li>dirtyHeight：放置到<code v-pre>&lt;canvas&gt;</code>的矩形区域的高度，默认为 ImageData 图像的高度。</li>
</ul>
<p>下面是将 ImageData 对象绘制到<code v-pre>&lt;canvas&gt;</code>的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（3）createImageData()</strong></p>
<p><code v-pre>CanvasRenderingContext2D.createImageData()</code>方法用于生成一个空的<code v-pre>ImageData</code>对象，所有像素都是透明的黑色（即每个值都是<code v-pre>0</code>）。该方法有两种使用格式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">createImageData</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">createImageData</span><span class="token punctuation">(</span>imagedata<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>createImageData()</code>方法的参数如下。</p>
<ul>
<li>width：ImageData 对象的宽度，单位为像素。</li>
<li>height：ImageData 对象的高度，单位为像素。</li>
<li>imagedata：一个现有的 ImageData 对象，返回值将是这个对象的拷贝。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> imageData <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createImageData</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>imageData</code>是一个 100 x 100 的像素区域，其中每个像素都是透明的黑色。</p>
<h4 id="canvasrenderingcontext2d-save-canvasrenderingcontext2d-restore" tabindex="-1"><a class="header-anchor" href="#canvasrenderingcontext2d-save-canvasrenderingcontext2d-restore" aria-hidden="true">#</a> CanvasRenderingContext2D.save()，CanvasRenderingContext2D.restore()</h4>
<p><code v-pre>CanvasRenderingContext2D.save()</code>方法用于将画布的当前样式保存到堆栈，相当于在内存之中产生一个样式快照。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>save()</code>会为画布的默认样式产生一个快照。</p>
<p><code v-pre>CanvasRenderingContext2D.restore()</code>方法将画布的样式恢复到上一个保存的快照，如果没有已保存的快照，则不产生任何效果。</p>
<p>上下文环境，restore方法用于恢复到上一次保存的上下文环境。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'green'</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码画一个矩形。矩形的填充色本来设为绿色，但是<code v-pre>restore()</code>方法撤销了这个设置，将样式恢复上一次保存的状态（即默认样式），所以实际的填充色是黑色（默认颜色）。</p>
<h4 id="canvasrenderingcontext2d-canvas" tabindex="-1"><a class="header-anchor" href="#canvasrenderingcontext2d-canvas" aria-hidden="true">#</a> CanvasRenderingContext2D.canvas</h4>
<p><code v-pre>CanvasRenderingContext2D.canvas</code>属性指向当前<code v-pre>CanvasRenderingContext2D</code>对象所在的<code v-pre>&lt;canvas&gt;</code>元素。该属性只读。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>canvas <span class="token operator">===</span> canvas <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图像变换" tabindex="-1"><a class="header-anchor" href="#图像变换" aria-hidden="true">#</a> 图像变换</h4>
<p>以下方法用于图像变换。</p>
<ul>
<li><code v-pre>CanvasRenderingContext2D.rotate()</code>：图像旋转</li>
<li><code v-pre>CanvasRenderingContext2D.scale()</code>：图像缩放</li>
<li><code v-pre>CanvasRenderingContext2D.translate()</code>：图像平移</li>
<li><code v-pre>CanvasRenderingContext2D.transform()</code>：通过一个变换矩阵完成图像变换</li>
<li><code v-pre>CanvasRenderingContext2D.setTransform()</code>：取消前面的图像变换</li>
</ul>
<p><strong>（1）rotate()</strong></p>
<p><code v-pre>CanvasRenderingContext2D.rotate()</code>方法用于图像旋转。它接受一个弧度值作为参数，表示顺时针旋转的度数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">45</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会显示一个顺时针倾斜45度的矩形。注意，<code v-pre>rotate()</code>方法必须在<code v-pre>fillRect()</code>方法之前调用，否则是不起作用的。</p>
<p>旋转中心点始终是画布左上角的原点。如果要更改中心点，需要使用<code v-pre>translate()</code>方法移动画布。</p>
<p><strong>（2）scale()</strong></p>
<p><code v-pre>CanvasRenderingContext2D.scale()</code>方法用于缩放图像。它接受两个参数，分别是<code v-pre>x</code>轴方向的缩放因子和<code v-pre>y</code>轴方向的缩放因子。默认情况下，一个单位就是一个像素，缩放因子可以缩放单位，比如缩放因子<code v-pre>0.5</code>表示将大小缩小为原来的50%，缩放因子<code v-pre>10</code>表示放大十倍。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，原来的矩形是 10 x 10，缩放后展示出来是 100 x 30。</p>
<p>如果缩放因子为1，就表示图像没有任何缩放。如果为-1，则表示方向翻转。<code v-pre>ctx.scale(-1, 1)</code>为水平翻转，<code v-pre>ctx.scale(1, -1)</code>表示垂直翻转。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"16px serif"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">'Hello world!'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会显示一个水平倒转的、高度放大2倍的<code v-pre>Hello World!</code>。</p>
<p>注意，负向缩放本质是坐标翻转，所针对的坐标轴就是画布左上角原点的坐标轴。</p>
<p><strong>（3）translate()</strong></p>
<p><code v-pre>CanvasRenderingContext2D.translate()</code>方法用于平移图像。它接受两个参数，分别是 x 轴和 y 轴移动的距离（单位像素）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）transform()</strong></p>
<p><code v-pre>CanvasRenderingContext2D.transform()</code>方法接受一个变换矩阵的六个元素作为参数，完成缩放、旋转、移动和倾斜等变形。</p>
<p>它的使用格式如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
a:水平缩放(默认值1，单位倍数)
b:水平倾斜(默认值0，单位弧度)
c:垂直倾斜(默认值0，单位弧度)
d:垂直缩放(默认值1，单位倍数)
e:水平位移(默认值0，单位像素)
f:垂直位移(默认值0，单位像素)
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，原始图形是 100 x 100 的矩形，结果缩放成 200 x 100 的矩形，并且左上角从<code v-pre>(0, 0)</code>移动到<code v-pre>(50, 50)</code>。</p>
<p>注意，多个<code v-pre>transform()</code>方法具有叠加效果。</p>
<p><strong>（5）setTransform()</strong></p>
<p><code v-pre>CanvasRenderingContext2D.setTransform()</code>方法取消前面的图形变换，将画布恢复到该方法指定的状态。该方法的参数与<code v-pre>transform()</code>方法完全一致。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">setTransform</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第一个<code v-pre>fillRect()</code>方法绘制的矩形，左上角从<code v-pre>(0, 0)</code>平移到<code v-pre>(50, 50)</code>。<code v-pre>setTransform()</code>方法取消了这个变换（已绘制的图形不受影响），将画布恢复到默认状态（变换矩形<code v-pre>1, 0, 0, 1, 0, 0</code>），所以第二个矩形的左上角回到<code v-pre>(0, 0)</code>。</p>
<h3 id="canvas-元素的方法" tabindex="-1"><a class="header-anchor" href="#canvas-元素的方法" aria-hidden="true">#</a> <code v-pre>&lt;canvas&gt;</code> 元素的方法</h3>
<p>除了<code v-pre>CanvasRenderingContext2D</code>对象提供的方法，<code v-pre>&lt;canvas&gt;</code>元素本身也有自己的方法。</p>
<h4 id="htmlcanvaselement-todataurl" tabindex="-1"><a class="header-anchor" href="#htmlcanvaselement-todataurl" aria-hidden="true">#</a> HTMLCanvasElement.toDataURL()</h4>
<p><code v-pre>&lt;canvas&gt;</code>元素的<code v-pre>toDataURL()</code>方法，可以将 Canvas 数据转为 Data URI 格式的图像。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> quality<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>toDataURL()</code>方法接受两个参数。</p>
<ul>
<li>type：字符串，表示图像的格式。默认为<code v-pre>image/png</code>，另一个可用的值是<code v-pre>image/jpeg</code>，Chrome 浏览器还可以使用<code v-pre>image/webp</code>。</li>
<li>quality：浮点数，0到1之间，表示 JPEG 和 WebP 图像的质量系数，默认值为0.92。</li>
</ul>
<p>该方法的返回值是一个 Data URI 格式的字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">convertCanvasToImage</span><span class="token punctuation">(</span><span class="token parameter">canvas</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  image<span class="token punctuation">.</span>src <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> image<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码将<code v-pre>&lt;canvas&gt;</code>元素，转化成PNG Data URI。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fullQuality <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/jpeg'</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> mediumQuality <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/jpeg'</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> lowQuality <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/jpeg'</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将<code v-pre>&lt;canvas&gt;</code>元素转成高画质、中画质、低画质三种 JPEG 图像。</p>
<h4 id="htmlcanvaselement-toblob" tabindex="-1"><a class="header-anchor" href="#htmlcanvaselement-toblob" aria-hidden="true">#</a> HTMLCanvasElement.toBlob()</h4>
<p><code v-pre>HTMLCanvasElement.toBlob()</code>方法用于将<code v-pre>&lt;canvas&gt;</code>图像转成一个 Blob 对象，默认类型是<code v-pre>image/png</code>。它的使用格式如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 格式</span>
canvas<span class="token punctuation">.</span><span class="token function">toBlob</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> mimeType<span class="token punctuation">,</span> quality<span class="token punctuation">)</span>

<span class="token comment">// 示例</span>
canvas<span class="token punctuation">.</span><span class="token function">toBlob</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">blob</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'image/jpeg'</span><span class="token punctuation">,</span> <span class="token number">0.95</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>toBlob()</code>方法可以接受三个参数。</p>
<ul>
<li>callback：回调函数。它接受生成的 Blob 对象作为参数。</li>
<li>mimeType：字符串，图像的 MIMEType 类型，默认是<code v-pre>image/png</code>。</li>
<li>quality：浮点数，0到1之间，表示图像的质量，只对<code v-pre>image/jpeg</code>和<code v-pre>image/webp</code>类型的图像有效。</li>
</ul>
<p>注意，该方法没有返回值。</p>
<p>下面的例子将<code v-pre>&lt;canvas&gt;</code>图像复制成<code v-pre>&lt;img&gt;</code>图像。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">blobToImg</span><span class="token punctuation">(</span><span class="token parameter">blob</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> newImg <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>

  newImg<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用完毕，释放 URL 对象</span>
    <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  newImg<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newImg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

canvas<span class="token punctuation">.</span><span class="token function">toBlob</span><span class="token punctuation">(</span>blobToImg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="canvas-使用实例" tabindex="-1"><a class="header-anchor" href="#canvas-使用实例" aria-hidden="true">#</a> Canvas 使用实例</h3>
<h4 id="动画效果" tabindex="-1"><a class="header-anchor" href="#动画效果" aria-hidden="true">#</a> 动画效果</h4>
<p>通过改变坐标，很容易在画布 Canvas 元素上产生动画效果。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myCanvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> posX <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> posY <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'black'</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

  posX <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  posY <span class="token operator">+=</span> <span class="token number">0.25</span><span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'white'</span><span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>posX<span class="token punctuation">,</span> posY<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会产生一个小圆点，每隔30毫秒就向右下方移动的效果。<code v-pre>setInterval()</code>函数的一开始，之所以要将画布重新渲染黑色底色，是为了抹去上一步的小圆点。</p>
<p>在这个例子的基础上，通过设置圆心坐标，可以产生各种运动轨迹。下面是先上升后下降的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> vx <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> vy <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> gravity <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  posX <span class="token operator">+=</span> vx<span class="token punctuation">;</span>
  posY <span class="token operator">+=</span> vy<span class="token punctuation">;</span>
  vy <span class="token operator">+=</span> gravity<span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>x</code>坐标始终增大，表示持续向右运动。<code v-pre>y</code>坐标先变小，然后在重力作用下，不断增大，表示先上升后下降。</p>
<h4 id="像素处理" tabindex="-1"><a class="header-anchor" href="#像素处理" aria-hidden="true">#</a> 像素处理</h4>
<p>通过<code v-pre>getImageData()</code>方法和<code v-pre>putImageData()</code>方法，可以处理每个像素，进而操作图像内容，因此可以改写图像。</p>
<p>下面是图像处理的通用写法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>width <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> canvas<span class="token punctuation">.</span>height <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> imageData <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">filter</span><span class="token punctuation">(</span>imageData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  context<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>filter</code>是一个处理像素的函数。以下是几种常见的<code v-pre>filter</code>。</p>
<p><strong>（1）灰度效果</strong></p>
<p>灰度图（grayscale）就是取红、绿、蓝三个像素值的算术平均值，这实际上将图像转成了黑白形式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">grayscale</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pixels</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> pixels<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> d<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> r <span class="token operator">=</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> g <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>r <span class="token operator">+</span> g <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pixels<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>d[i]</code>是红色值，<code v-pre>d[i+1]</code>是绿色值，<code v-pre>d[i+2]</code>是蓝色值，<code v-pre>d[i+3]</code>是 alpha 通道值。转成灰度的算法，就是将红、绿、蓝三个值相加后除以3，再将结果写回数组。</p>
<p><strong>（2）复古效果</strong></p>
<p>复古效果（sepia）是将红、绿、蓝三种值，分别取这三个值的某种加权平均值，使得图像有一种古旧的效果。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">sepia</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pixels</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> d <span class="token operator">=</span> pixels<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> d<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> r <span class="token operator">=</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> g <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> b <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      d<span class="token punctuation">[</span>i<span class="token punctuation">]</span>     <span class="token operator">=</span> <span class="token punctuation">(</span>r <span class="token operator">*</span> <span class="token number">0.393</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">*</span> <span class="token number">0.769</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>b <span class="token operator">*</span> <span class="token number">0.189</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// red</span>
      d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>r <span class="token operator">*</span> <span class="token number">0.349</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">*</span> <span class="token number">0.686</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>b <span class="token operator">*</span> <span class="token number">0.168</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// green</span>
      d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>r <span class="token operator">*</span> <span class="token number">0.272</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">*</span> <span class="token number">0.534</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>b <span class="token operator">*</span> <span class="token number">0.131</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// blue</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pixels<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）红色蒙版效果</strong></p>
<p>红色蒙版指的是，让图像呈现一种偏红的效果。算法是将红色通道设为红、绿、蓝三个值的平均值，而将绿色通道和蓝色通道都设为0。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">red</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pixels</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> pixels<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> d<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> r <span class="token operator">=</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> g <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>r <span class="token operator">+</span> g <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">;</span>        <span class="token comment">// 红色通道取平均值</span>
    d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 绿色通道和蓝色通道都设为0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pixels<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）亮度效果</strong></p>
<p>亮度效果（brightness）是指让图像变得更亮或更暗。算法将红色通道、绿色通道、蓝色通道，同时加上一个正值或负值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">brightness</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pixels<span class="token punctuation">,</span> delta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> pixels<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> d<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> delta<span class="token punctuation">;</span>     <span class="token comment">// red</span>
    d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> delta<span class="token punctuation">;</span> <span class="token comment">// green</span>
    d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+=</span> delta<span class="token punctuation">;</span> <span class="token comment">// blue</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pixels<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（5）反转效果</strong></p>
<p>反转效果（invert）是指图片呈现一种色彩颠倒的效果。算法为红、绿、蓝通道都取各自的相反值（<code v-pre>255 - 原值</code>）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function-variable function">invert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pixels</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> pixels<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> d<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span> <span class="token operator">-</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span> <span class="token operator">-</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span> <span class="token operator">-</span> d<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pixels<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li>David Walsh, <a href="http://davidwalsh.name/convert-canvas-image" target="_blank" rel="noopener noreferrer">JavaScript Canvas Image Conversion<ExternalLinkIcon/></a></li>
<li>Matt West, <a href="http://blog.teamtreehouse.com/getting-started-with-the-canvas-api" target="_blank" rel="noopener noreferrer">Getting Started With The Canvas API<ExternalLinkIcon/></a></li>
<li>John Robinson, <a href="http://www.storminthecastle.com/2013/04/06/how-you-can-do-cool-image-effects-using-html5-canvas/" target="_blank" rel="noopener noreferrer">How You Can Do Cool Image Effects Using HTML5 Canvas<ExternalLinkIcon/></a></li>
<li>Ivaylo Gerchev, <a href="http://www.sitepoint.com/html5-canvas-tutorial-introduction/" target="_blank" rel="noopener noreferrer">HTML5 Canvas Tutorial: An Introduction<ExternalLinkIcon/></a></li>
<li>Donovan Hutchinson, <a href="http://hop.ie/blog/particles/" target="_blank" rel="noopener noreferrer">Particles in canvas<ExternalLinkIcon/></a></li>
</ul>
<h2 id="剪贴板操作-clipboard-api-教程" tabindex="-1"><a class="header-anchor" href="#剪贴板操作-clipboard-api-教程" aria-hidden="true">#</a> 剪贴板操作 Clipboard API 教程</h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<p>浏览器允许 JavaScript 脚本读写剪贴板，自动复制或粘贴内容。</p>
<p>一般来说，脚本不应该改动用户的剪贴板，以免不符合用户的预期。但是，有些时候这样做确实能够带来方便，比如“一键复制”功能，用户点击一下按钮，指定的内容就自动进入剪贴板。</p>
<p>目前，一共有三种方法可以实现剪贴板操作。</p>
<ul>
<li><code v-pre>Document.execCommand()</code>方法</li>
<li>异步的 Clipboard API</li>
<li><code v-pre>copy</code>事件和<code v-pre>paste</code>事件</li>
</ul>
<p>本文逐一介绍这三种方法。</p>
<h3 id="document-execcommand-方法" tabindex="-1"><a class="header-anchor" href="#document-execcommand-方法" aria-hidden="true">#</a> Document.execCommand() 方法</h3>
<p><code v-pre>Document.execCommand()</code>是操作剪贴板的传统方法，各种浏览器都支持。</p>
<p>它支持复制、剪切和粘贴这三个操作。</p>
<ul>
<li><code v-pre>document.execCommand('copy')</code>（复制）</li>
<li><code v-pre>document.execCommand('cut')</code>（剪切）</li>
<li><code v-pre>document.execCommand('paste')</code>（粘贴）</li>
</ul>
<p>（1）复制操作</p>
<p>复制时，先选中文本，然后调用<code v-pre>document.execCommand('copy')</code>，选中的文本就会进入剪贴板。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> inputElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'##input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inputElement<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">'copy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，脚本先选中输入框<code v-pre>inputElement</code>里面的文字（<code v-pre>inputElement.select()</code>），然后<code v-pre>document.execCommand('copy')</code>将其复制到剪贴板。</p>
<p>注意，复制操作最好放在事件监听函数里面，由用户触发（比如用户点击按钮）。如果脚本自主执行，某些浏览器可能会报错。</p>
<p>（2）粘贴操作</p>
<p>粘贴时，调用<code v-pre>document.execCommand('paste')</code>，就会将剪贴板里面的内容，输出到当前的焦点元素中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pasteText <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'##output'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pasteText<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">'paste'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）缺点</p>
<p><code v-pre>Document.execCommand()</code>方法虽然方便，但是有一些缺点。</p>
<p>首先，它只能将选中的内容复制到剪贴板，无法向剪贴板任意写入内容。</p>
<p>其次，它是同步操作，如果复制/粘贴大量数据，页面会出现卡顿。有些浏览器还会跳出提示框，要求用户许可，这时在用户做出选择前，页面会失去响应。</p>
<p>为了解决这些问题，浏览器厂商提出了异步的 Clipboard API。</p>
<h3 id="异步-clipboard-api" tabindex="-1"><a class="header-anchor" href="#异步-clipboard-api" aria-hidden="true">#</a> 异步 Clipboard API</h3>
<p>Clipboard API 是下一代的剪贴板操作方法，比传统的<code v-pre>document.execCommand()</code>方法更强大、更合理。</p>
<p>它的所有操作都是异步的，返回 Promise 对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板。</p>
<p><code v-pre>navigator.clipboard</code>属性返回 Clipboard 对象，所有操作都通过这个对象进行。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> clipboardObj <span class="token operator">=</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果<code v-pre>navigator.clipboard</code>属性返回<code v-pre>undefined</code>，就说明当前浏览器不支持这个 API。</p>
<p>由于用户可能把敏感数据（比如密码）放在剪贴板，允许脚本任意读取会产生安全风险，所以这个 API 的安全限制比较多。</p>
<p>首先，Chrome 浏览器规定，只有 HTTPS 协议的页面才能使用这个 API。不过，开发环境（<code v-pre>localhost</code>）允许使用非加密协议。</p>
<p>其次，调用时需要明确获得用户的许可。权限的具体实现使用了 Permissions API，跟剪贴板相关的有两个权限：<code v-pre>clipboard-write</code>（写权限）和<code v-pre>clipboard-read</code>（读权限）。“写权限”自动授予脚本，而“读权限”必须用户明确同意给予。也就是说，写入剪贴板，脚本可以自动完成，但是读取剪贴板时，浏览器会弹出一个对话框，询问用户是否同意读取。</p>
<p><img src="/images/front_end/bg2021012004.jpg" alt=""></p>
<p>另外，需要注意的是，脚本读取的总是当前页面的剪贴板。这带来的一个问题是，如果把相关的代码粘贴到开发者工具中直接运行，可能会报错，因为这时的当前页面是开发者工具的窗口，而不是网页页面。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你把上面的代码，粘贴到开发者工具里面运行，就会报错。因为代码运行的时候，开发者工具窗口是当前页，这个页面不存在 Clipboard API 依赖的 DOM 接口。一个解决方法就是，相关代码放到<code v-pre>setTimeout()</code>里面延迟运行，在调用函数之前快速点击浏览器的页面窗口，将其变成当前页。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码粘贴到开发者工具运行后，快速点击一下网页的页面窗口，使其变为当前页，这样就不会报错了。</p>
<h3 id="clipboard-对象" tabindex="-1"><a class="header-anchor" href="#clipboard-对象" aria-hidden="true">#</a> Clipboard 对象</h3>
<p>Clipboard 对象提供了四个方法，用来读写剪贴板。它们都是异步方法，返回 Promise 对象。</p>
<h4 id="clipboard-readtext" tabindex="-1"><a class="header-anchor" href="#clipboard-readtext" aria-hidden="true">#</a> Clipboard.readText()</h4>
<p><code v-pre>Clipboard.readText()</code>方法用于复制剪贴板里面的文本数据。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">'click'</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，用户点击页面后，就会输出剪贴板里面的文本。注意，浏览器这时会跳出一个对话框，询问用户是否同意脚本读取剪贴板。</p>
<p>如果用户不同意，脚本就会报错。这时，可以使用<code v-pre>try...catch</code>结构，处理报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getClipboardContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Pasted content: '</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to read clipboard contents: '</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="clipboard-read" tabindex="-1"><a class="header-anchor" href="#clipboard-read" aria-hidden="true">#</a> Clipboard.read()</h4>
<p><code v-pre>Clipboard.read()</code>方法用于复制剪贴板里面的数据，可以是文本数据，也可以是二进制数据（比如图片）。该方法需要用户明确给予许可。</p>
<p>该方法返回一个 Promise 对象。一旦该对象的状态变为 resolved，就可以获得一个数组，每个数组成员都是 ClipboardItem 对象的实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getClipboardContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> clipboardItems <span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> clipboardItem <span class="token keyword">of</span> clipboardItems<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> type <span class="token keyword">of</span> clipboardItem<span class="token punctuation">.</span>types<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">await</span> clipboardItem<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>name<span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ClipboardItem 对象表示一个单独的剪贴项，每个剪贴项都拥有<code v-pre>ClipboardItem.types</code>属性和<code v-pre>ClipboardItem.getType()</code>方法。</p>
<p><code v-pre>ClipboardItem.types</code>属性返回一个数组，里面的成员是该剪贴项可用的 MIME 类型，比如某个剪贴项可以用 HTML 格式粘贴，也可以用纯文本格式粘贴，那么它就有两个 MIME 类型（<code v-pre>text/html</code>和<code v-pre>text/plain</code>）。</p>
<p><code v-pre>ClipboardItem.getType(type)</code>方法用于读取剪贴项的数据，返回一个 Promise 对象。该方法接受剪贴项的 MIME 类型作为参数，返回该类型的数据，该参数是必需的，否则会报错。</p>
<h4 id="clipboard-writetext" tabindex="-1"><a class="header-anchor" href="#clipboard-writetext" aria-hidden="true">#</a> Clipboard.writeText()</h4>
<p><code v-pre>Clipboard.writeText()</code>方法用于将文本内容写入剪贴板。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">'click'</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span><span class="token string">'Yo'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例是用户在网页点击后，脚本向剪贴板写入文本数据。</p>
<p>该方法不需要用户许可，但是最好也放在<code v-pre>try...catch</code>里面防止报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">copyPageUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Page URL copied to clipboard'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to copy: '</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="clipboard-write" tabindex="-1"><a class="header-anchor" href="#clipboard-write" aria-hidden="true">#</a> Clipboard.write()</h4>
<p><code v-pre>Clipboard.write()</code>方法用于将任意数据写入剪贴板，可以是文本数据，也可以是二进制数据。</p>
<p>该方法接受一个 ClipboardItem 实例作为参数，表示写入剪贴板的数据。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> imgURL <span class="token operator">=</span> <span class="token string">'https://dummyimage.com/300.png'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>imgURL<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">await</span> data<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ClipboardItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span>blob<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token operator">:</span> blob
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Image copied.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>name<span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，脚本向剪贴板写入了一张图片。注意，Chrome 浏览器目前只支持写入 PNG 格式的图片。</p>
<p><code v-pre>ClipboardItem()</code>是浏览器原生提供的构造函数，用来生成<code v-pre>ClipboardItem</code>实例，它接受一个对象作为参数，该对象的键名是数据的 MIME 类型，键值就是数据本身。</p>
<p>下面的例子是将同一个剪贴项的多种格式的值，写入剪贴板，一种是文本数据，另一种是二进制数据，供不同的场合粘贴使用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'kitten.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Cute sleeping kitten'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text/plain'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClipboardItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">'text/plain'</span><span class="token operator">:</span> text<span class="token punctuation">,</span>
    <span class="token string-property property">'image/png'</span><span class="token operator">:</span> image
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="copy-事件-cut-事件" tabindex="-1"><a class="header-anchor" href="#copy-事件-cut-事件" aria-hidden="true">#</a> copy 事件，cut 事件</h3>
<p>用户向剪贴板放入数据时，将触发<code v-pre>copy</code>事件。</p>
<p>下面的示例是将用户放入剪贴板的文本，转为大写。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.source'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'copy'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> selection <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  event<span class="token punctuation">.</span>clipboardData<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">'text/plain'</span><span class="token punctuation">,</span> selection<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，事件对象的<code v-pre>clipboardData</code>属性包含了剪贴板数据。它是一个对象，有以下属性和方法。</p>
<ul>
<li><code v-pre>Event.clipboardData.setData(type, data)</code>：修改剪贴板数据，需要指定数据类型。</li>
<li><code v-pre>Event.clipboardData.getData(type)</code>：获取剪贴板数据，需要指定数据类型。</li>
<li><code v-pre>Event.clipboardData.clearData([type])</code>：清除剪贴板数据，可以指定数据类型。如果不指定类型，将清除所有类型的数据。</li>
<li><code v-pre>Event.clipboardData.items</code>：一个类似数组的对象，包含了所有剪贴项，不过通常只有一个剪贴项。</li>
</ul>
<p>下面的示例是拦截用户的复制操作，将指定内容放入剪贴板。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> clipboardItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'copy'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> clipboardItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> e<span class="token punctuation">.</span>clipboardData<span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>item<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'image/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      clipboardItems<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">ClipboardItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token punctuation">[</span>item<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>clipboardItems<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Image copied.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>name<span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，先使用<code v-pre>e.preventDefault()</code>取消了剪贴板的默认操作，然后由脚本接管复制操作。</p>
<p><code v-pre>cut</code>事件则是在用户进行剪切操作时触发，它的处理跟<code v-pre>copy</code>事件完全一样，也是从<code v-pre>Event.clipboardData</code>属性拿到剪切的数据。</p>
<h3 id="paste-事件" tabindex="-1"><a class="header-anchor" href="#paste-事件" aria-hidden="true">#</a> paste 事件</h3>
<p>用户使用剪贴板数据，进行粘贴操作时，会触发<code v-pre>paste</code>事件。</p>
<p>下面的示例是拦截粘贴操作，由脚本将剪贴板里面的数据取出来。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'paste'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Pasted text: '</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接-1" tabindex="-1"><a class="header-anchor" href="#参考链接-1" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://web.dev/async-clipboard/" target="_blank" rel="noopener noreferrer">Unblocking clipboard access<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard" target="_blank" rel="noopener noreferrer">Interact with the clipboard<ExternalLinkIcon/></a></li>
<li><a href="https://blog.tomayac.com/2020/03/20/multi-mime-type-copying-with-the-async-clipboard-api/" target="_blank" rel="noopener noreferrer">Multi-MIME Type Copying with the Async Clipboard API<ExternalLinkIcon/></a></li>
</ul>
<h2 id="fetch-api-教程" tabindex="-1"><a class="header-anchor" href="#fetch-api-教程" aria-hidden="true">#</a> Fetch API 教程</h2>
<p><code v-pre>fetch()</code>是 XMLHttpRequest 的升级版，用于在 JavaScript 脚本里面发出 HTTP 请求。</p>
<p>浏览器原生提供这个对象。本章详细介绍它的用法。</p>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>
<p><code v-pre>fetch()</code>的功能与 XMLHttpRequest 基本相同，但有三个主要的差异。</p>
<p>（1）<code v-pre>fetch()</code>使用 Promise，不使用回调函数，因此大大简化了写法，写起来更简洁。</p>
<p>（2）<code v-pre>fetch()</code>采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象），更合理一些；相比之下，XMLHttpRequest 的 API 设计并不是很好，输入、输出、状态都在同一个接口管理，容易写出非常混乱的代码。</p>
<p>（3）<code v-pre>fetch()</code>通过数据流（Stream 对象）处理数据，可以分块读取，有利于提高网站性能表现，减少内存占用，对于请求大文件或者网速慢的场景相当有用。XMLHTTPRequest 对象不支持数据流，所有的数据必须放在缓存里，不支持分块读取，必须等待全部拿到后，再一次性吐出来。</p>
<p>在用法上，<code v-pre>fetch()</code>接受一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象。它的基本用法如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个例子，从服务器获取 JSON 数据。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.github.com/users/ruanyf'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">json</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request Failed'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>fetch()</code>接收到的<code v-pre>response</code>是一个 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Streams_API" target="_blank" rel="noopener noreferrer">Stream 对象<ExternalLinkIcon/></a>，<code v-pre>response.json()</code>是一个异步操作，取出所有内容，并将其转为 JSON 对象。</p>
<p>Promise 可以使用 await 语法改写，使得语义更清晰。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">'https://api.github.com/users/ruanyf'</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request Failed'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>await</code>语句必须放在<code v-pre>try...catch</code>里面，这样才能捕捉异步操作中可能发生的错误。</p>
<p>后文都采用<code v-pre>await</code>的写法，不使用<code v-pre>.then()</code>的写法。</p>
<h3 id="response-对象-处理-http-回应" tabindex="-1"><a class="header-anchor" href="#response-对象-处理-http-回应" aria-hidden="true">#</a> Response 对象：处理 HTTP 回应</h3>
<h4 id="response-对象的同步属性" tabindex="-1"><a class="header-anchor" href="#response-对象的同步属性" aria-hidden="true">#</a> Response 对象的同步属性</h4>
<p><code v-pre>fetch()</code>请求成功以后，得到的是一个 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Response" target="_blank" rel="noopener noreferrer">Response 对象<ExternalLinkIcon/></a>。它对应服务器的 HTTP 回应。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>前面说过，Response 包含的数据通过 Stream 接口异步读取，但是它还包含一些同步属性，对应 HTTP 回应的标头信息（Headers），可以立即读取。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/readme.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>response.status</code>和<code v-pre>response.statusText</code>就是 Response 的同步属性，可以立即读取。</p>
<p>标头信息属性有下面这些。</p>
<p><strong>Response.ok</strong></p>
<p><code v-pre>Response.ok</code>属性返回一个布尔值，表示请求是否成功，<code v-pre>true</code>对应 HTTP 请求的状态码 200 到 299，<code v-pre>false</code>对应其他的状态码。</p>
<p><strong>Response.status</strong></p>
<p><code v-pre>Response.status</code>属性返回一个数字，表示 HTTP 回应的状态码（例如200，表示成功请求）。</p>
<p><strong>Response.statusText</strong></p>
<p><code v-pre>Response.statusText</code>属性返回一个字符串，表示 HTTP 回应的状态信息（例如请求成功以后，服务器返回“OK”）。</p>
<p><strong>Response.url</strong></p>
<p><code v-pre>Response.url</code>属性返回请求的 URL。如果 URL 存在跳转，该属性返回的是最终 URL。</p>
<p><strong>Response.type</strong></p>
<p><code v-pre>Response.type</code>属性返回请求的类型。可能的值如下：</p>
<ul>
<li><code v-pre>basic</code>：普通请求，即同源请求。</li>
<li><code v-pre>cors</code>：跨源请求。</li>
<li><code v-pre>error</code>：网络错误，主要用于 Service Worker。</li>
<li><code v-pre>opaque</code>：如果<code v-pre>fetch()</code>请求的<code v-pre>type</code>属性设为<code v-pre>no-cors</code>，就会返回这个值，详见请求部分。表示发出的是简单的跨源请求，类似<code v-pre>&lt;form&gt;</code>表单的那种跨源请求。</li>
<li><code v-pre>opaqueredirect</code>：如果<code v-pre>fetch()</code>请求的<code v-pre>redirect</code>属性设为<code v-pre>manual</code>，就会返回这个值，详见请求部分。</li>
</ul>
<p><strong>Response.redirected</strong></p>
<p><code v-pre>Response.redirected</code>属性返回一个布尔值，表示请求是否发生过跳转。</p>
<h4 id="判断请求是否成功" tabindex="-1"><a class="header-anchor" href="#判断请求是否成功" aria-hidden="true">#</a> 判断请求是否成功</h4>
<p><code v-pre>fetch()</code>发出请求以后，有一个很重要的注意点：只有网络错误，或者无法连接时，<code v-pre>fetch()</code>才会报错，其他情况都不会报错，而是认为请求成功。</p>
<p>这就是说，即使服务器返回的状态码是 4xx 或 5xx，<code v-pre>fetch()</code>也不会报错（即 Promise 不会变为 <code v-pre>rejected</code>状态）。</p>
<p>只有通过<code v-pre>Response.status</code>属性，得到 HTTP 回应的真实状态码，才能判断请求是否成功。请看下面的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/readme.txt'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>response.status</code>属性只有等于 2xx （200~299），才能认定请求成功。这里不用考虑网址跳转（状态码为 3xx），因为<code v-pre>fetch()</code>会将跳转的状态码自动转为 200。</p>
<p>另一种方法是判断<code v-pre>response.ok</code>是否为<code v-pre>true</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求成功</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求失败</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="response-headers-属性" tabindex="-1"><a class="header-anchor" href="#response-headers-属性" aria-hidden="true">#</a> Response.headers 属性</h4>
<p>Response 对象还有一个<code v-pre>Response.headers</code>属性，指向一个 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Headers" target="_blank" rel="noopener noreferrer">Headers 对象<ExternalLinkIcon/></a>，对应 HTTP 回应的所有标头。</p>
<p>Headers 对象可以使用<code v-pre>for...of</code>循环进行遍历。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 或者</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Headers 对象提供了以下方法，用来操作标头。</p>
<blockquote>
<ul>
<li><code v-pre>Headers.get()</code>：根据指定的键名，返回键值。</li>
<li><code v-pre>Headers.has()</code>： 返回一个布尔值，表示是否包含某个标头。</li>
<li><code v-pre>Headers.set()</code>：将指定的键名设置为新的键值，如果该键名不存在则会添加。</li>
<li><code v-pre>Headers.append()</code>：添加标头。</li>
<li><code v-pre>Headers.delete()</code>：删除标头。</li>
<li><code v-pre>Headers.keys()</code>：返回一个遍历器，可以依次遍历所有键名。</li>
<li><code v-pre>Headers.values()</code>：返回一个遍历器，可以依次遍历所有键值。</li>
<li><code v-pre>Headers.entries()</code>：返回一个遍历器，可以依次遍历所有键值对（<code v-pre>[key, value]</code>）。</li>
<li><code v-pre>Headers.forEach()</code>：依次遍历标头，每个标头都会执行一次参数函数。</li>
</ul>
</blockquote>
<p>上面的有些方法可以修改标头，那是因为继承自 Headers 接口。对于 HTTP 回应来说，修改标头意义不大，况且很多标头是只读的，浏览器不允许修改。</p>
<p>这些方法中，最常用的是<code v-pre>response.headers.get()</code>，用于读取某个标头的值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> response <span class="token operator">=</span>  <span class="token keyword">await</span>  <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">)</span>
<span class="token comment">// application/json; charset=utf-8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Headers.keys()</code>和<code v-pre>Headers.values()</code>方法用来分别遍历标头的键名和键值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 键名</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> myHeaders<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 键值</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> myHeaders<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Headers.forEach()</code>方法也可以遍历所有的键值和键名。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">':'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读取内容的方法" tabindex="-1"><a class="header-anchor" href="#读取内容的方法" aria-hidden="true">#</a> 读取内容的方法</h4>
<p><code v-pre>Response</code>对象根据服务器返回的不同类型的数据，提供了不同的读取方法。</p>
<blockquote>
<ul>
<li><code v-pre>response.text()</code>：得到文本字符串。</li>
<li><code v-pre>response.json()</code>：得到 JSON 对象。</li>
<li><code v-pre>response.blob()</code>：得到二进制 Blob 对象。</li>
<li><code v-pre>response.formData()</code>：得到 FormData 表单对象。</li>
<li><code v-pre>response.arrayBuffer()</code>：得到二进制 ArrayBuffer 对象。</li>
</ul>
</blockquote>
<p>上面5个读取方法都是异步的，返回的都是 Promise 对象。必须等到异步操作结束，才能得到服务器返回的完整数据。</p>
<p><strong>response.text()</strong></p>
<p><code v-pre>response.text()</code>可以用于获取文本数据，比如 HTML 文件。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/users.html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> body
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>response.json()</strong></p>
<p><code v-pre>response.json()</code>主要用于获取服务器返回的 JSON 数据，前面已经举过例子了。</p>
<p><strong>response.formData()</strong></p>
<p><code v-pre>response.formData()</code>主要用在 Service Worker 里面，拦截用户提交的表单，修改某些数据以后，再提交给服务器。</p>
<p><strong>response.blob()</strong></p>
<p><code v-pre>response.blob()</code>用于获取二进制文件。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'flower.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myBlob <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> objectURL <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myImage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myImage<span class="token punctuation">.</span>src <span class="token operator">=</span> objectURL<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例读取图片文件<code v-pre>flower.jpg</code>，显示在网页上。</p>
<p><strong>response.arrayBuffer()</strong></p>
<p><code v-pre>response.arrayBuffer()</code>主要用于获取流媒体文件。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> audioCtx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>AudioContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source <span class="token operator">=</span> audioCtx<span class="token punctuation">.</span><span class="token function">createBufferSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'song.ogg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> buffer <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> decodeData <span class="token operator">=</span> <span class="token keyword">await</span> audioCtx<span class="token punctuation">.</span><span class="token function">decodeAudioData</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
source<span class="token punctuation">.</span>buffer <span class="token operator">=</span> buffer<span class="token punctuation">;</span>
source<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>audioCtx<span class="token punctuation">.</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
source<span class="token punctuation">.</span>loop <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例是<code v-pre>response.arrayBuffer()</code>获取音频文件<code v-pre>song.ogg</code>，然后在线播放的例子。</p>
<h4 id="response-clone" tabindex="-1"><a class="header-anchor" href="#response-clone" aria-hidden="true">#</a> Response.clone()</h4>
<p>Stream 对象只能读取一次，读取完就没了。这意味着，前一节的五个读取方法，只能使用一个，否则会报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> text <span class="token operator">=</span>  <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> json <span class="token operator">=</span>  <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例先使用了<code v-pre>response.text()</code>，就把 Stream 读完了。后面再调用<code v-pre>response.json()</code>，就没有内容可读了，所以报错。</p>
<p>Response 对象提供<code v-pre>Response.clone()</code>方法，创建<code v-pre>Response</code>对象的副本，实现多次读取。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'flowers.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> response2 <span class="token operator">=</span> response1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myBlob1 <span class="token operator">=</span> <span class="token keyword">await</span> response1<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myBlob2 <span class="token operator">=</span> <span class="token keyword">await</span> response2<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

image1<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>myBlob1<span class="token punctuation">)</span><span class="token punctuation">;</span>
image2<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>myBlob2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>response.clone()</code>复制了一份 Response 对象，然后将同一张图片读取了两次。</p>
<p>Response 对象还有一个<code v-pre>Response.redirect()</code>方法，用于将 Response 结果重定向到指定的 URL。该方法一般只用在 Service Worker 里面，这里就不介绍了。</p>
<h4 id="response-body-属性" tabindex="-1"><a class="header-anchor" href="#response-body-属性" aria-hidden="true">#</a> Response.body 属性</h4>
<p><code v-pre>Response.body</code>属性是 Response 对象暴露出的底层接口，返回一个 ReadableStream 对象，供用户操作。</p>
<p>它可以用来分块读取内容，应用之一就是显示下载的进度。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'flower.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> reader <span class="token operator">=</span> response<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>done<span class="token punctuation">,</span> value<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Received </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> bytes</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>response.body.getReader()</code>方法返回一个遍历器。这个遍历器的<code v-pre>read()</code>方法每次返回一个对象，表示本次读取的内容块。</p>
<p>这个对象的<code v-pre>done</code>属性是一个布尔值，用来判断有没有读完；<code v-pre>value</code>属性是一个 arrayBuffer 数组，表示内容块的内容，而<code v-pre>value.length</code>属性是当前块的大小。</p>
<h3 id="fetch-的第二个参数-定制-http-请求" tabindex="-1"><a class="header-anchor" href="#fetch-的第二个参数-定制-http-请求" aria-hidden="true">#</a> <code v-pre>fetch()</code>的第二个参数：定制 HTTP 请求</h3>
<p><code v-pre>fetch()</code>的第一个参数是 URL，还可以接受第二个参数，作为配置对象，定制发出的 HTTP 请求。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> optionObj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令的<code v-pre>optionObj</code>就是第二个参数。</p>
<p>HTTP 请求的方法、标头、数据体都在这个对象里面设置。下面是一些示例。</p>
<p><strong>（1）POST 请求</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"Content-type"</span><span class="token operator">:</span> <span class="token string">"application/x-www-form-urlencoded; charset=UTF-8"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'foo=bar&amp;lorem=ipsum'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，配置对象用到了三个属性。</p>
<blockquote>
<ul>
<li><code v-pre>method</code>：HTTP 请求的方法，<code v-pre>POST</code>、<code v-pre>DELETE</code>、<code v-pre>PUT</code>都在这个属性设置。</li>
<li><code v-pre>headers</code>：一个对象，用来定制 HTTP 请求的标头。</li>
<li><code v-pre>body</code>：POST 请求的数据体。</li>
</ul>
</blockquote>
<p>注意，有些标头不能通过<code v-pre>headers</code>属性设置，比如<code v-pre>Content-Length</code>、<code v-pre>Cookie</code>、<code v-pre>Host</code>等等。它们是由浏览器自动生成，无法修改。</p>
<p><strong>（2）提交 JSON 数据</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span>  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span>  <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">surname</span><span class="token operator">:</span>  <span class="token string">'Smith'</span>  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/article/fetch/post/user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json;charset=utf-8'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，标头<code v-pre>Content-Type</code>要设成<code v-pre>'application/json;charset=utf-8'</code>。因为默认发送的是纯文本，<code v-pre>Content-Type</code>的默认值是<code v-pre>'text/plain;charset=UTF-8'</code>。</p>
<p><strong>（3）提交表单</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）文件上传</strong></p>
<p>如果表单里面有文件选择器，可以用前一个例子的写法，上传的文件包含在整个表单里面，一起提交。</p>
<p>另一种方法是用脚本添加文件，构造出一个表单，进行上传，请看下面的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input[type="file"]'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'file'</span><span class="token punctuation">,</span> input<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
data<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/avatars'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> data
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传二进制文件时，不用修改标头的<code v-pre>Content-Type</code>，浏览器会自动设置。</p>
<p><strong>（5）直接上传二进制数据</strong></p>
<p><code v-pre>fetch()</code>也可以直接上传二进制数据，将 Blob 或 arrayBuffer 数据放在<code v-pre>body</code>属性里面。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span>
  canvasElem<span class="token punctuation">.</span><span class="token function">toBlob</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>  <span class="token string">'image/png'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/article/fetch/post/image'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span>  <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> blob
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fetch-配置对象的完整-api" tabindex="-1"><a class="header-anchor" href="#fetch-配置对象的完整-api" aria-hidden="true">#</a> <code v-pre>fetch()</code>配置对象的完整 API</h3>
<p><code v-pre>fetch()</code>第二个参数的完整 API 如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"text/plain;charset=UTF-8"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">referrer</span><span class="token operator">:</span> <span class="token string">"about:client"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">referrerPolicy</span><span class="token operator">:</span> <span class="token string">"no-referrer-when-downgrade"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"cors"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">"same-origin"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">"default"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">"follow"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">integrity</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">signal</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>fetch()</code>请求的底层用的是 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Request/Request" target="_blank" rel="noopener noreferrer">Request() 对象<ExternalLinkIcon/></a>的接口，参数完全一样，因此上面的 API 也是<code v-pre>Request()</code>的 API。</p>
<p>这些属性里面，<code v-pre>headers</code>、<code v-pre>body</code>、<code v-pre>method</code>前面已经给过示例了，下面是其他属性的介绍。</p>
<p><strong>cache</strong></p>
<p><code v-pre>cache</code>属性指定如何处理缓存。可能的取值如下：</p>
<ul>
<li><code v-pre>default</code>：默认值，先在缓存里面寻找匹配的请求。</li>
<li><code v-pre>no-store</code>：直接请求远程服务器，并且不更新缓存。</li>
<li><code v-pre>reload</code>：直接请求远程服务器，并且更新缓存。</li>
<li><code v-pre>no-cache</code>：将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存。</li>
<li><code v-pre>force-cache</code>：缓存优先，只有不存在缓存的情况下，才请求远程服务器。</li>
<li><code v-pre>only-if-cached</code>：只检查缓存，如果缓存里面不存在，将返回504错误。</li>
</ul>
<p><strong>mode</strong></p>
<p><code v-pre>mode</code>属性指定请求的模式。可能的取值如下：</p>
<ul>
<li><code v-pre>cors</code>：默认值，允许跨源请求。</li>
<li><code v-pre>same-origin</code>：只允许同源请求。</li>
<li><code v-pre>no-cors</code>：请求方法只限于 GET、POST 和 HEAD，并且只能使用有限的几个简单标头，不能添加跨源的复杂标头，相当于提交表单、<code v-pre>&lt;script&gt;</code>加载脚本、<code v-pre>&lt;img&gt;</code>加载图片等传统的跨源请求方法。</li>
</ul>
<p><strong>credentials</strong></p>
<p><code v-pre>credentials</code>属性指定是否发送 Cookie。可能的取值如下：</p>
<ul>
<li><code v-pre>same-origin</code>：默认值，同源请求时发送 Cookie，跨源请求时不发送。</li>
<li><code v-pre>include</code>：不管同源请求，还是跨源请求，一律发送 Cookie。</li>
<li><code v-pre>omit</code>：一律不发送。</li>
</ul>
<p>跨源请求发送 Cookie，需要将<code v-pre>credentials</code>属性设为<code v-pre>include</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://another.com'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">"include"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>signal</strong></p>
<p><code v-pre>signal</code>属性指定一个 AbortSignal 实例，用于取消<code v-pre>fetch()</code>请求，详见下一节。</p>
<p><strong>keepalive</strong></p>
<p><code v-pre>keepalive</code>属性用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据。</p>
<p>一个典型的场景就是，用户离开网页时，脚本向服务器提交一些用户行为的统计信息。这时，如果不用<code v-pre>keepalive</code>属性，数据可能无法发送，因为浏览器已经把页面卸载了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onunload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/analytics'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">'data'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>redirect</strong></p>
<p><code v-pre>redirect</code>属性指定 HTTP 跳转的处理方法。可能的取值如下：</p>
<ul>
<li><code v-pre>follow</code>：默认值，<code v-pre>fetch()</code>跟随 HTTP 跳转。</li>
<li><code v-pre>error</code>：如果发生跳转，<code v-pre>fetch()</code>就报错。</li>
<li><code v-pre>manual</code>：<code v-pre>fetch()</code>不跟随 HTTP 跳转，但是<code v-pre>response.url</code>属性会指向新的 URL，<code v-pre>response.redirected</code>属性会变为<code v-pre>true</code>，由开发者自己决定后续如何处理跳转。</li>
</ul>
<p><strong>integrity</strong></p>
<p><code v-pre>integrity</code>属性指定一个哈希值，用于检查 HTTP 回应传回的数据是否等于这个预先设定的哈希值。</p>
<p>比如，下载文件时，检查文件的 SHA-256 哈希值是否相符，确保没有被篡改。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://site.com/file'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">integrity</span><span class="token operator">:</span> <span class="token string">'sha256-abcdef'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>referrer</strong></p>
<p><code v-pre>referrer</code>属性用于设定<code v-pre>fetch()</code>请求的<code v-pre>referer</code>标头。</p>
<p>这个属性可以为任意字符串，也可以设为空字符串（即不发送<code v-pre>referer</code>标头）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/page'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">referrer</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>referrerPolicy</strong></p>
<p><code v-pre>referrerPolicy</code>属性用于设定<code v-pre>Referer</code>标头的规则。可能的取值如下：</p>
<ul>
<li><code v-pre>no-referrer-when-downgrade</code>：默认值，总是发送<code v-pre>Referer</code>标头，除非从 HTTPS 页面请求 HTTP 资源时不发送。</li>
<li><code v-pre>no-referrer</code>：不发送<code v-pre>Referer</code>标头。</li>
<li><code v-pre>origin</code>：<code v-pre>Referer</code>标头只包含域名，不包含完整的路径。</li>
<li><code v-pre>origin-when-cross-origin</code>：同源请求<code v-pre>Referer</code>标头包含完整的路径，跨源请求只包含域名。</li>
<li><code v-pre>same-origin</code>：跨源请求不发送<code v-pre>Referer</code>，同源请求发送。</li>
<li><code v-pre>strict-origin</code>：<code v-pre>Referer</code>标头只包含域名，HTTPS 页面请求 HTTP 资源时不发送<code v-pre>Referer</code>标头。</li>
<li><code v-pre>strict-origin-when-cross-origin</code>：同源请求时<code v-pre>Referer</code>标头包含完整路径，跨源请求时只包含域名，HTTPS 页面请求 HTTP 资源时不发送该标头。</li>
<li><code v-pre>unsafe-url</code>：不管什么情况，总是发送<code v-pre>Referer</code>标头。</li>
</ul>
<h3 id="取消fetch-请求" tabindex="-1"><a class="header-anchor" href="#取消fetch-请求" aria-hidden="true">#</a> 取消<code v-pre>fetch()</code>请求</h3>
<p><code v-pre>fetch()</code>请求发送以后，如果中途想要取消，需要使用<code v-pre>AbortController</code>对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> signal <span class="token operator">=</span> controller<span class="token punctuation">.</span>signal<span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

signal<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'abort'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'abort!'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取消</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>signal<span class="token punctuation">.</span>aborted<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，首先新建 AbortController 实例，然后发送<code v-pre>fetch()</code>请求，配置对象的<code v-pre>signal</code>属性必须指定接收 AbortController 实例发送的信号<code v-pre>controller.signal</code>。</p>
<p><code v-pre>controller.abort()</code>方法用于发出取消信号。这时会触发<code v-pre>abort</code>事件，这个事件可以监听，也可以通过<code v-pre>controller.signal.aborted</code>属性判断取消信号是否已经发出。</p>
<p>下面是一个1秒后自动取消请求的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/long-operation'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Aborted!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接-2" tabindex="-1"><a class="header-anchor" href="#参考链接-2" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://javascript.info/fetch" target="_blank" rel="noopener noreferrer">Network requests: Fetch<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/node-fetch/node-fetch" target="_blank" rel="noopener noreferrer">node-fetch<ExternalLinkIcon/></a></li>
<li><a href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch" target="_blank" rel="noopener noreferrer">Introduction to fetch()<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noopener noreferrer">Using Fetch<ExternalLinkIcon/></a></li>
<li><a href="https://developerhowto.com/2019/09/14/javascript-fetch-api/" target="_blank" rel="noopener noreferrer">Javascript Fetch API: The XMLHttpRequest evolution<ExternalLinkIcon/></a></li>
<li><a href="https://www.sitepen.com/blog/2017/10/02/a-guide-to-faster-web-app-io-and-data-operations-with-streams/" target="_blank" rel="noopener noreferrer">A Guide to Faster Web App I/O and Data Operations with Streams<ExternalLinkIcon/></a></li>
</ul>
<h2 id="fontface-api" tabindex="-1"><a class="header-anchor" href="#fontface-api" aria-hidden="true">#</a> FontFace API</h2>
<p>FontFace API 用来控制字体加载。</p>
<p>这个 API 提供一个构造函数<code v-pre>FontFace()</code>，返回一个字体对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">FontFace</span><span class="token punctuation">(</span>family<span class="token punctuation">,</span> source<span class="token punctuation">,</span> descriptors<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>FontFace()</code>构造函数接受三个参数。</p>
<ul>
<li><code v-pre>family</code>：字符串，表示字体名，写法与 CSS 的<code v-pre>@font-face</code>的<code v-pre>font-family</code>属性相同。</li>
<li><code v-pre>source</code>：字体文件的 URL（必须包括 CSS 的<code v-pre>url()</code>方法），或者是一个字体的 ArrayBuffer 对象。</li>
<li><code v-pre>descriptors</code>：对象，用来定制字体文件。该参数可选。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> fontFace <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FontFace</span><span class="token punctuation">(</span>
  <span class="token string">'Roboto'</span><span class="token punctuation">,</span>
  <span class="token string">'url(https://fonts.example.com/roboto.woff2)'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

fontFace<span class="token punctuation">.</span>family <span class="token comment">// "Roboto"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>FontFace()</code>返回的是一个字体对象，这个对象包含字体信息。注意，这时字体文件还没有开始加载。</p>
<p>字体对象包含以下属性。</p>
<ul>
<li><code v-pre>FontFace.family</code>：字符串，表示字体的名字，等同于 CSS 的<code v-pre>font-family</code>属性。</li>
<li><code v-pre>FontFace.display</code>：字符串，指定字体加载期间如何展示，等同于 CSS 的<code v-pre>font-display</code>属性。它有五个可能的值：<code v-pre>auto</code>（由浏览器决定）、<code v-pre>block</code>（字体加载期间，前3秒会显示不出内容，然后只要还没完成加载，就一直显示后备字体）、<code v-pre>fallback</code>（前100毫秒显示不出内容，后3秒显示后备字体，然后只要字体还没完成加载，就一直显示后备字体）、<code v-pre>optional</code>（前100毫秒显示不出内容，然后只要字体还没有完成加载，就一直显示后备字体），<code v-pre>swap</code>（只要字体没有完成加载，就一直显示后备字体）。</li>
<li><code v-pre>FontFace.style</code>：字符串，等同于 CSS 的<code v-pre>font-style</code>属性。</li>
<li><code v-pre>FontFace.weight</code>：字符串，等同于 CSS 的<code v-pre>font-weight</code>属性。</li>
<li><code v-pre>FontFace.stretch</code>：字符串，等同于 CSS 的<code v-pre>font-strentch</code>属性。</li>
<li><code v-pre>FontFace.unicodeRange</code>：字符串，等同于<code v-pre>descriptors</code>对象的同名属性。</li>
<li><code v-pre>FontFace.variant</code>：字符串，等同于<code v-pre>descriptors</code>对象的同名属性。</li>
<li><code v-pre>FontFace.featureSettings</code>：字符串，等同于<code v-pre>descriptors</code>对象的同名属性。</li>
<li><code v-pre>FontFace.status</code>：字符串，表示字体的加载状态，有四个可能的值：<code v-pre>unloaded</code>、<code v-pre>loading</code>、<code v-pre>loaded</code>、<code v-pre>error</code>。该属性只读。</li>
<li><code v-pre>FontFace.loaded</code>：返回一个 Promise 对象，字体加载成功或失败，会导致该 Promise 状态改变。该属性只读。</li>
</ul>
<p>字体对象的方法，只有一个<code v-pre>FontFace.load()</code>，该方法会真正开始加载字体。它返回一个 Promise 对象，状态由字体加载的结果决定。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FontFace</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token string">'url(x)'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

f<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 网页可以开始使用该字体</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="geolocation-api" tabindex="-1"><a class="header-anchor" href="#geolocation-api" aria-hidden="true">#</a> Geolocation API</h2>
<p>Geolocation API 用于获取用户的地理位置。</p>
<p>由于该功能涉及用户隐私，所以浏览器会提示用户，是否同意给出地理位置，用户可能会拒绝。另外，这个 API 只能在 HTTPS 环境使用。</p>
<p>浏览器通过<code v-pre>navigator.geolocation</code>属性提供该 API。</p>
<h3 id="geolocation-对象" tabindex="-1"><a class="header-anchor" href="#geolocation-对象" aria-hidden="true">#</a> Geolocation 对象</h3>
<p><code v-pre>navigator.geolocation</code>属性返回一个 Geolocation 对象。该对象具有以下三个方法。</p>
<ul>
<li><code v-pre>Geolocation.getCurrentPosition()</code>：返回一个 Position 对象，表示用户的当前位置。</li>
<li><code v-pre>Geolocation.watchPosition()</code>：指定一个监听函数，每当用户的位置发生变化，就执行该监听函数。</li>
<li><code v-pre>Geolocation.clearWatch()</code>：取消<code v-pre>watchPosition()</code>方法指定的监听函数。</li>
</ul>
<h4 id="geolocation-getcurrentposition" tabindex="-1"><a class="header-anchor" href="#geolocation-getcurrentposition" aria-hidden="true">#</a> Geolocation.getCurrentPosition()</h4>
<p><code v-pre>Geolocation.getCurrentPosition()</code>方法用于获取用户的位置。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> error<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法接受三个参数。</p>
<ul>
<li><code v-pre>success</code>：用户同意给出位置时的回调函数，它的参数是一个 Position 对象。</li>
<li><code v-pre>error</code>：用户拒绝给出位置时的回调函数，它的参数是一个 PositionError 对象。该参数可选。</li>
<li><code v-pre>options</code>：参数对象，该参数可选。</li>
</ul>
<p>Position 对象有两个属性。</p>
<ul>
<li><code v-pre>Position.coords</code>：返回一个 Coordinates 对象，表示当前位置的坐标。</li>
<li><code v-pre>Position.timestamp</code>：返回一个对象，代表当前时间戳。</li>
</ul>
<p>PositionError 对象主要有两个属性。</p>
<ul>
<li><code v-pre>PositionError.code</code>：整数，表示发生错误的原因。<code v-pre>1</code>表示无权限，有可能是用户拒绝授权；<code v-pre>2</code>表示无法获得位置，可能设备有故障；<code v-pre>3</code>表示超时。</li>
<li><code v-pre>PositionError.message</code>：字符串，表示错误的描述。</li>
</ul>
<p>参数对象<code v-pre>option</code>可以指定三个属性。</p>
<ul>
<li><code v-pre>enableHighAccuracy</code>：布尔值，是否返回高精度结果。如果设为<code v-pre>true</code>，可能导致响应时间变慢或（移动设备的）功耗增加；反之，如果设为<code v-pre>false</code>，设备可以更快速地响应。默认值为<code v-pre>false</code>。</li>
<li><code v-pre>timeout</code>：正整数，表示等待查询的最长时间，单位为毫秒。默认值为<code v-pre>Infinity</code>。</li>
<li><code v-pre>maximumAge</code>：正整数，表示可接受的缓存最长时间，单位为毫秒。如果设为<code v-pre>0</code>，表示不返回缓存值，必须查询当前的实际位置；如果设为<code v-pre>Infinity</code>，必须返回缓存值，不管缓存了多少时间。默认值为<code v-pre>0</code>。</li>
</ul>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enableHighAccuracy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maximumAge</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">pos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> crd <span class="token operator">=</span> pos<span class="token punctuation">.</span>coords<span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">经度：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>crd<span class="token punctuation">.</span>latitude<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">纬度：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>crd<span class="token punctuation">.</span>longitude<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">误差：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>crd<span class="token punctuation">.</span>accuracy<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 米</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ERROR(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>err<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>err<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> error<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="geolocation-watchposition" tabindex="-1"><a class="header-anchor" href="#geolocation-watchposition" aria-hidden="true">#</a> Geolocation.watchPosition()</h4>
<p><code v-pre>Geolocation.watchPosition()</code>对象指定一个监听函数，每当用户的位置发生变化，就是自动执行这个函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">watchPosition</span><span class="token punctuation">(</span>success<span class="token punctuation">[</span><span class="token punctuation">,</span> error<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法接受三个参数。</p>
<ul>
<li><code v-pre>success</code>：监听成功的回调函数，该函数的参数为一个 Position 对象。</li>
<li><code v-pre>error</code>：该参数可选，表示监听失败的回调函数，该函数的参数是一个 PositionError 对象。</li>
<li><code v-pre>options</code>：该参数可选，表示监听的参数配置对象。</li>
</ul>
<p>该方法返回一个整数值，表示监听函数的编号。该整数用来供<code v-pre>Geolocation.clearWatch()</code>方法取消监听。</p>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> id<span class="token punctuation">;</span>

<span class="token keyword">var</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">latitude</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enableHighAccuracy</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maximumAge</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">pos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> crd <span class="token operator">=</span> pos<span class="token punctuation">.</span>coords<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>latitude <span class="token operator">===</span> crd<span class="token punctuation">.</span>latitude <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">.</span>longitude <span class="token operator">===</span> crd<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'恭喜，你已经到达了指定位置。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">clearWatch</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'ERROR('</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>code <span class="token operator">+</span> <span class="token string">'): '</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

id <span class="token operator">=</span> navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">watchPosition</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> error<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="geolocation-clearwatch" tabindex="-1"><a class="header-anchor" href="#geolocation-clearwatch" aria-hidden="true">#</a> Geolocation.clearWatch()</h4>
<p><code v-pre>Geolocation.clearWatch()</code>方法用来取消<code v-pre>watchPosition()</code>方法指定的监听函数。它的参数是<code v-pre>watchPosition()</code>返回的监听函数的编号。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">clearWatch</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用方法的例子见上一节。</p>
<h3 id="coordinates-对象" tabindex="-1"><a class="header-anchor" href="#coordinates-对象" aria-hidden="true">#</a> Coordinates 对象</h3>
<p>Coordinates 对象是地理位置的坐标接口，<code v-pre>Position.coords</code>属性返回的就是这个对象。</p>
<p>它有以下属性，全部为只读属性。</p>
<ul>
<li><code v-pre>Coordinates.latitude</code>：浮点数，表示纬度。</li>
<li><code v-pre>Coordinates.longitude</code>：浮点数，表示经度。</li>
<li><code v-pre>Coordinates.altitude</code>：浮点数，表示海拔（单位：米）。如果不可得，返回<code v-pre>null</code>。</li>
<li><code v-pre>Coordinates.accuracy</code>：浮点数，表示经度和纬度的精度（单位：米）。</li>
<li><code v-pre>Coordinates.altitudeAccuracy</code>：浮点数，表示海拔的精度（单位：米）。返回<code v-pre>null</code>。</li>
<li><code v-pre>Coordinates.speed</code>：浮点数，表示设备的速度（单位：米/秒）。如果不可得，返回<code v-pre>null</code>。</li>
<li><code v-pre>Coordinates.heading</code>：浮点数，表示设备前进的方向（单位：度）。方向按照顺时针，北方是0度，东方是90度，西方是270度。如果<code v-pre>Coordinates.speed</code>为0，<code v-pre>heading</code>属性返回<code v-pre>NaN</code>。如果设备无法提供方向信息，该属性返回<code v-pre>null</code>。</li>
</ul>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lat <span class="token operator">=</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span>
  <span class="token keyword">let</span> long <span class="token operator">=</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">纬度：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>lat<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">经度：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>long<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接-3" tabindex="-1"><a class="header-anchor" href="#参考链接-3" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" target="_blank" rel="noopener noreferrer">Geolocation API<ExternalLinkIcon/></a>, by MDN</li>
</ul>
<h2 id="intersectionobserver" tabindex="-1"><a class="header-anchor" href="#intersectionobserver" aria-hidden="true">#</a> IntersectionObserver</h2>
<p>网页开发时，常常需要了解某个元素是否进入了“视口”（viewport），即用户能不能看到它。</p>
<p><img src="/images/front_end/bg2016110201.gif" alt=""></p>
<p>上图的绿色方块不断滚动，顶部会提示它的可见性。</p>
<p>传统的实现方法是，监听到<code v-pre>scroll</code>事件后，调用目标元素（绿色方块）的<a href="https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect" target="_blank" rel="noopener noreferrer"><code v-pre>getBoundingClientRect()</code><ExternalLinkIcon/></a>方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于<code v-pre>scroll</code>事件密集发生，计算量很大，容易造成<a href="http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html" target="_blank" rel="noopener noreferrer">性能问题<ExternalLinkIcon/></a>。</p>
<p><a href="https://wicg.github.io/IntersectionObserver/" target="_blank" rel="noopener noreferrer">IntersectionObserver API<ExternalLinkIcon/></a>，可以自动“观察”元素是否可见，Chrome 51+ 已经支持。由于可见（visible）的本质是，目标元素与视口产生一个交叉区，所以这个 API 叫做“交叉观察器”（intersection oberserver）。</p>
<h3 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1" aria-hidden="true">#</a> 简介</h3>
<p>IntersectionObserver API 的用法，简单来说就是两行。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>IntersectionObserver</code>是浏览器原生提供的构造函数，接受两个参数：<code v-pre>callback</code>是可见性变化时的回调函数，<code v-pre>option</code>是配置对象（该参数可选）。</p>
<p><code v-pre>IntersectionObserver()</code>的返回值是一个观察器实例。实例的<code v-pre>observe()</code>方法可以指定观察哪个 DOM 节点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 开始观察</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'example'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 停止观察</span>
observer<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 关闭观察器</span>
observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>observe()</code>的参数是一个 DOM 节点对象。如果要观察多个节点，就要多次调用这个方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>elementA<span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>elementB<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，IntersectionObserver API 是异步的，不随着目标元素的滚动同步触发。规格写明，<code v-pre>IntersectionObserver</code>的实现，应该采用<code v-pre>requestIdleCallback()</code>，即只有线程空闲下来，才会执行观察器。这意味着，这个观察器的优先级非常低，只在其他任务执行完，浏览器有了空闲才会执行。</p>
<h3 id="intersectionobserver-observe" tabindex="-1"><a class="header-anchor" href="#intersectionobserver-observe" aria-hidden="true">#</a> IntersectionObserver.observe()</h3>
<p>IntersectionObserver 实例的<code v-pre>observe()</code>方法用来启动对一个 DOM 元素的观察。该方法接受两个参数：回调函数<code v-pre>callback</code>和配置对象<code v-pre>options</code>。</p>
<h4 id="callback-参数" tabindex="-1"><a class="header-anchor" href="#callback-参数" aria-hidden="true">#</a> callback 参数</h4>
<p>目标元素的可见性变化时，就会调用观察器的回调函数<code v-pre>callback</code>。</p>
<p><code v-pre>callback</code>会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是完全离开视口（开始不可见）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entries<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，回调函数采用的是<a href="http://es6.ruanyifeng.com/##docs/function##%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">箭头函数<ExternalLinkIcon/></a>的写法。<code v-pre>callback</code>函数的参数（<code v-pre>entries</code>）是一个数组，每个成员都是一个<a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry" target="_blank" rel="noopener noreferrer"><code v-pre>IntersectionObserverEntry</code><ExternalLinkIcon/></a>对象（详见下文）。举例来说，如果同时有两个被观察的对象的可见性发生变化，<code v-pre>entries</code>数组就会有两个成员。</p>
<h4 id="intersectionobserverentry-对象" tabindex="-1"><a class="header-anchor" href="#intersectionobserverentry-对象" aria-hidden="true">#</a> IntersectionObserverEntry 对象</h4>
<p><code v-pre>IntersectionObserverEntry</code>对象提供目标元素的信息，一共有六个属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">3893.92</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rootBounds</span><span class="token operator">:</span> ClientRect <span class="token punctuation">{</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">920</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">920</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boundingClientRect</span><span class="token operator">:</span> ClientRect <span class="token punctuation">{</span>
     <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intersectionRect</span><span class="token operator">:</span> ClientRect <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intersectionRatio</span><span class="token operator">:</span> <span class="token number">0.54</span><span class="token punctuation">,</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> element
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个属性的含义如下。</p>
<blockquote>
<ul>
<li><code v-pre>time</code>：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒</li>
<li><code v-pre>target</code>：被观察的目标元素，是一个 DOM 节点对象</li>
<li><code v-pre>rootBounds</code>：容器元素的矩形区域的信息，<code v-pre>getBoundingClientRect()</code>方法的返回值，如果没有容器元素（即直接相对于视口滚动），则返回<code v-pre>null</code></li>
<li><code v-pre>boundingClientRect</code>：目标元素的矩形区域的信息</li>
<li><code v-pre>intersectionRect</code>：目标元素与视口（或容器元素）的交叉区域的信息</li>
<li><code v-pre>intersectionRatio</code>：目标元素的可见比例，即<code v-pre>intersectionRect</code>占<code v-pre>boundingClientRect</code>的比例，完全可见时为<code v-pre>1</code>，完全不可见时小于等于<code v-pre>0</code></li>
</ul>
</blockquote>
<p><img src="/images/front_end/bg2016110202.png" alt=""></p>
<p>上图中，灰色的水平方框代表视口，深红色的区域代表四个被观察的目标元素。它们各自的<code v-pre>intersectionRatio</code>图中都已经注明。</p>
<p>我写了一个 <a href="http://jsbin.com/canuze/edit?js,console,output" target="_blank" rel="noopener noreferrer">Demo<ExternalLinkIcon/></a>，演示<code v-pre>IntersectionObserverEntry</code>对象。注意，这个 Demo 只能在 Chrome 51+ 运行。</p>
<h4 id="option-对象" tabindex="-1"><a class="header-anchor" href="#option-对象" aria-hidden="true">#</a> Option 对象</h4>
<p><code v-pre>IntersectionObserver</code>构造函数的第二个参数是一个配置对象。它可以设置以下属性。</p>
<p><strong>（1）threshold 属性</strong></p>
<p><code v-pre>threshold</code>属性决定了什么时候触发回调函数，即元素进入视口（或者容器元素）多少比例时，执行回调函数。它是一个数组，每个成员都是一个门槛值，默认为<code v-pre>[0]</code>，即交叉比例（<code v-pre>intersectionRatio</code>）达到<code v-pre>0</code>时触发回调函数。</p>
<p>如果<code v-pre>threshold</code>属性是0.5，当元素进入视口50%时，触发回调函数。如果值为<code v-pre>[0.3, 0.6]</code>，则当元素进入30％和60％是触发回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  <span class="token parameter">entries</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/* … */</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户可以自定义这个数组。比如，上例的<code v-pre>[0, 0.25, 0.5, 0.75, 1]</code>就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。</p>
<p><img src="/images/front_end/bg2016110202.gif" alt=""></p>
<p><strong>（2）root 属性，rootMargin 属性</strong></p>
<p><code v-pre>IntersectionObserver</code>不仅可以观察元素相对于视口的可见性，还可以观察元素相对于其所在容器的可见性。容器内滚动也会影响目标元素的可见性，参见本文开始时的那张示意图。</p>
<p>IntersectionObserver API 支持容器内滚动。<code v-pre>root</code>属性指定目标元素所在的容器节点。注意，容器元素必须是目标元素的祖先节点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.container'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rootMargin</span><span class="token operator">:</span> <span class="token string">'0px 0px -200px 0px'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  callback<span class="token punctuation">,</span>
  opts
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，除了<code v-pre>root</code>属性，还有<a href="https://wicg.github.io/IntersectionObserver/##dom-intersectionobserverinit-rootmargin" target="_blank" rel="noopener noreferrer"><code v-pre>rootMargin</code><ExternalLinkIcon/></a>属性。该属性用来扩展或缩小<code v-pre>rootBounds</code>这个矩形的大小，从而影响<code v-pre>intersectionRect</code>交叉区域的大小。它的写法类似于 CSS 的<code v-pre>margin</code>属性，比如<code v-pre>0px 0px 0px 0px</code>，依次表示 top、right、bottom 和 left 四个方向的值。</p>
<p>上例的<code v-pre>0px 0px -200px 0px</code>，表示容器的下边缘向上收缩200像素，导致页面向下滚动时，目标元素的顶部进入可视区域200像素以后，才会触发回调函数。</p>
<p>这样设置以后，不管是窗口滚动或者容器内滚动，只要目标元素可见性变化，都会触发观察器。</p>
<h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3>
<h4 id="惰性加载-lazy-load" tabindex="-1"><a class="header-anchor" href="#惰性加载-lazy-load" aria-hidden="true">#</a> 惰性加载（lazy load）</h4>
<p>有时，我们希望某些静态资源（比如图片），只有用户向下滚动，它们进入视口时才加载，这样可以节省带宽，提高网页性能。这就叫做“惰性加载”。</p>
<p>有了 IntersectionObserver API，实现起来就很容易了。图像的 HTML 代码可以写成下面这样。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder.png<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder.png<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-2.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder.png<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-3.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，图像默认显示一个占位符，<code v-pre>data-src</code>属性是惰性加载的真正图像。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src <span class="token operator">=</span> entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src<span class="token punctuation">;</span>
      observer<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'.lazy-loaded'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，只有图像开始可见时，才会加载真正的图像文件。</p>
<h4 id="无限滚动" tabindex="-1"><a class="header-anchor" href="#无限滚动" aria-hidden="true">#</a> 无限滚动</h4>
<p>无限滚动（infinite scroll）指的是，随着网页滚动到底部，不断加载新的内容到页面，它的实现也很简单。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> intersectionObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果不可见，就返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entries<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>intersectionRatio <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token function">loadItems</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Loaded new items'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 开始观察</span>
intersectionObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.scrollerFooter'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无限滚动时，最好像上例那样，页面底部有一个页尾栏（又称<a href="sentinels">sentinels</a>，上例是<code v-pre>.scrollerFooter</code>）。一旦页尾栏可见，就表示用户到达了页面底部，从而加载新的条目放在页尾栏前面。否则就需要每一次页面加入新内容时，都调用<code v-pre>observe()</code>方法，对新增内容的底部建立观察。</p>
<h4 id="视频自动播放" tabindex="-1"><a class="header-anchor" href="#视频自动播放" aria-hidden="true">#</a> 视频自动播放</h4>
<p>下面是一个视频元素，希望它完全进入视口的时候自动播放，离开视口的时候自动暂停。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是 JS 代码。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> video <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'video'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isPaused <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>intersectionRatio <span class="token operator">!=</span> <span class="token number">1</span>  <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>video<span class="token punctuation">.</span>paused<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      video<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      isPaused <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isPaused<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      video<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      isPaused<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>video<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>IntersectionObserver()</code>的第二个参数是配置对象，它的<code v-pre>threshold</code>属性等于<code v-pre>1</code>，即目标元素完全可见时触发回调函数。</p>
<h3 id="参考链接-4" tabindex="-1"><a class="header-anchor" href="#参考链接-4" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://developers.google.com/web/updates/2016/04/intersectionobserver" target="_blank" rel="noopener noreferrer">IntersectionObserver’s Coming into View<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/WICG/IntersectionObserver/blob/gh-pages/explainer.md" target="_blank" rel="noopener noreferrer">Intersection Observers Explained<ExternalLinkIcon/></a></li>
<li><a href="https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/" target="_blank" rel="noopener noreferrer">A Few Functional Uses for Intersection Observer to Know When an Element is in View<ExternalLinkIcon/></a>, Preethi</li>
</ul>
<h2 id="intl-relativetimeformat" tabindex="-1"><a class="header-anchor" href="#intl-relativetimeformat" aria-hidden="true">#</a> Intl.RelativeTimeFormat</h2>
<p>很多日期库支持显示相对时间，比如“昨天”、“五分钟前”、“两个月之前”等等。由于不同的语言，日期显示的格式和相关词语都不同，造成这些库的体积非常大。</p>
<p>现在，浏览器提供内置的 Intl.RelativeTimeFormat API，可以不使用这些库，直接显示相对时间。</p>
<h3 id="基本用法-1" tabindex="-1"><a class="header-anchor" href="#基本用法-1" aria-hidden="true">#</a> 基本用法</h3>
<p><code v-pre>Intl.RelativeTimeFormat()</code>是一个构造函数，接受一个语言代码作为参数，返回一个相对时间的实例对象。如果省略参数，则默认传入当前运行时的语言代码。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> rtf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>RelativeTimeFormat</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token string">'second'</span><span class="token punctuation">)</span> <span class="token comment">// "in 3.14 seconds"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token string">'minute'</span><span class="token punctuation">)</span> <span class="token comment">// "15 minutes ago"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">'hour'</span><span class="token punctuation">)</span> <span class="token comment">// "in 8 hours"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token comment">// "2 days ago"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span> <span class="token comment">// "in 3 weeks"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'month'</span><span class="token punctuation">)</span> <span class="token comment">// "5 months ago"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'quarter'</span><span class="token punctuation">)</span> <span class="token comment">// "in 2 quarters"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">'year'</span><span class="token punctuation">)</span> <span class="token comment">// "42 years ago"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码指定使用英语显示相对时间。</p>
<p>下面是使用西班牙语显示相对时间的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> rtf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>RelativeTimeFormat</span><span class="token punctuation">(</span><span class="token string">'es'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token string">'second'</span><span class="token punctuation">)</span> <span class="token comment">// "dentro de 3,14 segundos"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token string">'minute'</span><span class="token punctuation">)</span> <span class="token comment">// "hace 15 minutos"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">'hour'</span><span class="token punctuation">)</span> <span class="token comment">// "dentro de 8 horas"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token comment">// "hace 2 días"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span> <span class="token comment">// "dentro de 3 semanas"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'month'</span><span class="token punctuation">)</span> <span class="token comment">// "hace 5 meses"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'quarter'</span><span class="token punctuation">)</span> <span class="token comment">// "dentro de 2 trimestres"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token string">'year'</span><span class="token punctuation">)</span> <span class="token comment">// "hace 42 años"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Intl.RelativeTimeFormat()</code>还可以接受一个配置对象，作为第二个参数，用来精确指定相对时间实例的行为。配置对象共有下面这些属性。</p>
<ul>
<li>options.style：表示返回字符串的风格，可能的值有<code v-pre>long</code>（默认值，比如“in 1 month”）、<code v-pre>short</code>（比如“in 1 mo.”）、<code v-pre>narrow</code>（比如“in 1 mo.”）。对于一部分语言来说，<code v-pre>narrow</code>风格和<code v-pre>short</code>风格是类似的。</li>
<li>options.localeMatcher：表示匹配语言参数的算法，可能的值有<code v-pre>best fit</code>（默认值）和<code v-pre>lookup</code>。</li>
<li>options.numeric：表示返回字符串是数字显示，还是文字显示，可能的值有<code v-pre>always</code>（默认值，总是文字显示）和<code v-pre>auto</code>（自动转换）。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 下面的配置对象，传入的都是默认值</span>
<span class="token keyword">const</span> rtf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>RelativeTimeFormat</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">localeMatcher</span><span class="token operator">:</span> <span class="token string">'best fit'</span><span class="token punctuation">,</span> <span class="token comment">// 其他值：'lookup'</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span> <span class="token comment">// 其他值：'short' or 'narrow'</span>
  <span class="token literal-property property">numeric</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span> <span class="token comment">// 其他值：'auto'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Now, let’s try some special cases!</span>

rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token comment">// "1 day ago"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token comment">// "in 0 days"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token comment">// "in 1 day"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span> <span class="token comment">// "1 week ago"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span> <span class="token comment">// "in 0 weeks"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span> <span class="token comment">// "in 1 week"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，显示的是“1 day ago”，而不是“yesterday”；显示的是“in 0 weeks”，而不是“this week”。这是因为默认情况下，相对时间显示的是数值形式，而不是文字形式。</p>
<p>改变这个行为，可以把配置对象的<code v-pre>numeric</code>属性改成<code v-pre>auto</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> rtf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>RelativeTimeFormat</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">numeric</span><span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token comment">// "yesterday"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token comment">// "today"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> <span class="token comment">// "tomorrow"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span> <span class="token comment">// "last week"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span> <span class="token comment">// "this week"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span> <span class="token comment">// "next week"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intl-relativetimeformat-prototype-format" tabindex="-1"><a class="header-anchor" href="#intl-relativetimeformat-prototype-format" aria-hidden="true">#</a> Intl.RelativeTimeFormat.prototype.format()</h3>
<p>相对时间实例对象的<code v-pre>format</code>方法，接受两个参数，依次为时间间隔的数值和单位。其中，“单位”是一个字符串，可以接受以下八个值。</p>
<ul>
<li>year</li>
<li>quarter</li>
<li>month</li>
<li>week</li>
<li>day</li>
<li>hour</li>
<li>minute</li>
<li>second</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> rtf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>RelativeTimeFormat</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"day"</span><span class="token punctuation">)</span> <span class="token comment">// "yesterday"</span>
rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">2.15</span><span class="token punctuation">,</span> <span class="token string">"day"</span><span class="token punctuation">)</span> <span class="token comment">// "in 2.15 days</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intl-relativetimeformat-prototype-formattoparts" tabindex="-1"><a class="header-anchor" href="#intl-relativetimeformat-prototype-formattoparts" aria-hidden="true">#</a> Intl.RelativeTimeFormat.prototype.formatToParts()</h3>
<p>相对时间实例对象的<code v-pre>formatToParts()</code>方法的参数跟<code v-pre>format()</code>方法一样，但是返回的是一个数组，用来精确控制相对时间的每个部分。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> rtf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>RelativeTimeFormat</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">numeric</span><span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span> 
<span class="token comment">// "yesterday"</span>
rtf<span class="token punctuation">.</span><span class="token function">formatToParts</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'day'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [{ type: "literal", value: "yesterday" }]</span>

rtf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// "in 3 weeks"</span>
rtf<span class="token punctuation">.</span><span class="token function">formatToParts</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'week'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [</span>
<span class="token comment">//   { type: 'literal', value: 'in ' },</span>
<span class="token comment">//   { type: 'integer', value: '3', unit: 'week' },</span>
<span class="token comment">//   { type: 'literal', value: ' weeks' }</span>
<span class="token comment">// ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回数组的每个成员都是一个对象，拥有两个属性。</p>
<ul>
<li>type：字符串，表示输出值的类型。</li>
<li>value：字符串，表示输出的内容。</li>
<li>unit：如果输出内容表示一个数值（即<code v-pre>type</code>属性不是<code v-pre>literal</code>），那么还会有<code v-pre>unit</code>属性，表示数值的单位。</li>
</ul>
<h3 id="参考链接-5" tabindex="-1"><a class="header-anchor" href="#参考链接-5" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://developers.google.com/web/updates/2018/10/intl-relativetimeformat" target="_blank" rel="noopener noreferrer">The Intl.RelativeTimeFormat API<ExternalLinkIcon/></a>, Mathias Bynens</li>
<li><a href="https://github.com/tc39/proposal-intl-relative-time##api" target="_blank" rel="noopener noreferrer">Intl.RelativeTimeFormat API Specification<ExternalLinkIcon/></a>, TC39</li>
</ul>
<h2 id="offline-应用" tabindex="-1"><a class="header-anchor" href="#offline-应用" aria-hidden="true">#</a> Offline 应用</h2>
<p>Web 应用不仅可以在浏览器缓存资源文件（HTML、CSS、JS 脚本、图片等），还可以把应用本身储存到浏览器。</p>
<p>缓存的资源文件必须在线使用，只有先从服务器加载网页，然后才能使用本地缓存；但是，应用一旦储存，就可以离线使用。另外，用户常规性地清除浏览器缓存，并不会清除储存的应用，除非用户显式地卸载或删除它们。</p>
<p>为了开启离线储存，必须创建一个 manifest 文件。该文件列出了所有需要储存的文件。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>CACHE MANIFEST
myapp.html
myapp.js
myapp.css
/images/front_end/background.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Manifest 文件的第一行必须是<code v-pre>CACHE MANIFEST</code>。然后，每一行列出一个需要储存的文件，它们的位置都是相对于 Manifest 文件的位置。空行会被忽略，以<code v-pre>##</code>开头的行是注释，也会被忽略。</p>
<p>这个文件的后缀名一般是<code v-pre>.appcache</code>。它的 MIME 类型必须是<code v-pre>text/cache-manifest</code>，如果服务器将其设为其他类型，就不会被浏览器缓存。</p>
<p>编写完这个文件以后，要将<code v-pre>&lt;html&gt;</code>元素的<code v-pre>manifest</code>属性指向它。浏览器加载这个网页的时候，就会读取这个 Manifest 文件，离线储存这个网页和相关的资源。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">manifest</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myapp.appcache<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个 Web 应用有多个网页需要离线储存，那么每个网页都应该将<code v-pre>manifest</code>属性指向这个文件。一旦被储存，以后加载该网页的时候，就会从缓存里面加载。这时，只有 Manifest 文件里面列出的文件会被加载，其他文件不会。如果这时浏览器在线，浏览器就会去检查 Manifest 文件是否有新版本，如果有新版本，就会重新储存和更新该文件列出的资源。最方便的办法是在 Manifest 文件里面用注释列出版本号。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>CACHE MANIFEST
## MyApp version 1
MyApp.html
MyApp.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要删除离线储存，只要删除 Manifest 文件，让其返回 404 状态码即可。</p>
<p>离线储存更新完成，会触发浏览器的<code v-pre>updateready</code>事件，可以对这个事件指定监听函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>applicationCache<span class="token punctuation">.</span><span class="token function-variable function">onupdateready</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> reload <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'新版本下载完成。是否需要重新加载？'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>reload<span class="token punctuation">)</span> location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本可以注册<code v-pre>online</code>和<code v-pre>offline</code>事件的监听函数，通过<code v-pre>navigator.onLine</code>属性，判断浏览器是否在线从而进行数据同步。</p>
<p>每次浏览器加载一个具有<code v-pre>manifest</code>属性的网页，浏览器就会触发一个<code v-pre>checking</code>事件，然后去加载 Manifest 文件。</p>
<ul>
<li>如果应用已经储存，并且 Manifest 文件没有变化，那么触发<code v-pre>noupdate</code>事件。</li>
<li>如果应用已经储存，并且 Manifest 文件有变化，那么触发<code v-pre>downloading</code>事件，浏览器重新下载所有离线资源。下载过程中，触发<code v-pre>progress</code>事件，下载结束触发<code v-pre>updateready</code>事件。</li>
<li>如果应用没有储存，下载结束将触发<code v-pre>cached</code>事件。</li>
<li>如果离线，无法检查 Manifest 文件，浏览器会触发一个<code v-pre>error</code>事件。</li>
<li>如果浏览器在线，而且应用已经储存，但是 Manifest 文件返回 404，浏览器触发<code v-pre>obsolete</code>事件，将储存的应用移除。</li>
</ul>
<p>所有这些事件都是可以取消的。监听函数可以返回<code v-pre>false</code>，取消这些事件的默认动作。</p>
<p><code v-pre>applicationCache. status</code>属性返回离线储存的状态。</p>
<ul>
<li>ApplicationCache.UNCACHED (0)
This application does not have a manifest attribute: it is not cached.</li>
<li>ApplicationCache.IDLE (1)
The manifest has been checked and this application is cached and up to date.</li>
<li>ApplicationCache.CHECKING (2)
The browser is checking the manifest file.</li>
<li>ApplicationCache.DOWNLOADING (3)
The browser is downloading and caching files listed in the manifest.</li>
<li>ApplicationCache.UPDATEREADY (4)
A new version of the application has been downloaded and cached.</li>
<li>ApplicationCache.OBSOLETE (5)
The manifest no longer exists and the cache will be deleted.</li>
</ul>
<h2 id="page-lifecycle-api" tabindex="-1"><a class="header-anchor" href="#page-lifecycle-api" aria-hidden="true">#</a> Page Lifecycle API</h2>
<p>Android、iOS 和最新的 Windows 系统可以随时自主地停止后台进程，及时释放系统资源。也就是说，网页可能随时被系统丢弃掉。以前的浏览器 API 完全没有考虑到这种情况，导致开发者根本没有办法监听到系统丢弃页面。</p>
<p>为了解决这个问题，W3C 新制定了一个 Page Lifecycle API，统一了网页从诞生到卸载的行为模式，并且定义了新的事件，允许开发者响应网页状态的各种转换。</p>
<p>有了这个 API，开发者就可以预测网页下一步的状态，从而进行各种针对性的处理。Chrome 68 支持这个 API，对于老式浏览器可以使用谷歌开发的兼容库 <a href="https://github.com/GoogleChromeLabs/page-lifecycle" target="_blank" rel="noopener noreferrer">PageLifecycle.js<ExternalLinkIcon/></a>。</p>
<h3 id="生命周期阶段" tabindex="-1"><a class="header-anchor" href="#生命周期阶段" aria-hidden="true">#</a> 生命周期阶段</h3>
<p>网页的生命周期分成六个阶段，每个时刻只可能处于其中一个阶段。</p>
<p><img src="/images/front_end/bg2018110401.png" alt=""></p>
<p><strong>（1）Active 阶段</strong></p>
<p>在 Active 阶段，网页处于可见状态，且拥有输入焦点。</p>
<p><strong>（2）Passive 阶段</strong></p>
<p>在 Passive 阶段，网页可见，但没有输入焦点，无法接受输入。UI 更新（比如动画）仍然在执行。该阶段只可能发生在桌面同时有多个窗口的情况。</p>
<p><strong>（3）Hidden 阶段</strong></p>
<p>在 Hidden 阶段，用户的桌面被其他窗口占据，网页不可见，但尚未冻结。UI 更新不再执行。</p>
<p><strong>（4）Terminated 阶段</strong></p>
<p>在 Terminated 阶段，由于用户主动关闭窗口，或者在同一个窗口前往其他页面，导致当前页面开始被浏览器卸载并从内存中清除。注意，这个阶段总是在 Hidden 阶段之后发生，也就是说，用户主动离开当前页面，总是先进入 Hidden 阶段，再进入 Terminated 阶段。</p>
<p>这个阶段会导致网页卸载，任何新任务都不会在这个阶段启动，并且如果运行时间太长，正在进行的任务可能会被终止。</p>
<p><strong>（5）Frozen 阶段</strong></p>
<p>如果网页处于 Hidden 阶段的时间过久，用户又不关闭网页，浏览器就有可能冻结网页，使其进入 Frozen 阶段。不过，也有可能，处于可见状态的页面长时间没有操作，也会进入 Frozen 阶段。</p>
<p>这个阶段的特征是，网页不会再被分配 CPU 计算资源。定时器、回调函数、网络请求、DOM 操作都不会执行，不过正在运行的任务会执行完。浏览器可能会允许 Frozen 阶段的页面，周期性复苏一小段时间，短暂变回 Hidden 状态，允许一小部分任务执行。</p>
<p><strong>（6）Discarded 阶段</strong></p>
<p>如果网页长时间处于 Frozen 阶段，用户又不唤醒页面，那么就会进入 Discarded 阶段，即浏览器自动卸载网页，清除该网页的内存占用。不过，Passive 阶段的网页如果长时间没有互动，也可能直接进入 Discarded 阶段。</p>
<p>这一般是在用户没有介入的情况下，由系统强制执行。任何类型的新任务或 JavaScript 代码，都不能在此阶段执行，因为这时通常处在资源限制的状况下。</p>
<p>网页被浏览器自动 Discarded 以后，它的 Tab 窗口还是在的。如果用户重新访问这个 Tab 页，浏览器将会重新向服务器发出请求，再一次重新加载网页，回到 Active 阶段。</p>
<h3 id="常见场景" tabindex="-1"><a class="header-anchor" href="#常见场景" aria-hidden="true">#</a> 常见场景</h3>
<p>以下是几个常见场景的网页生命周期变化。</p>
<p>（1）用户打开网页后，又切换到其他 App，但只过了一会又回到网页。</p>
<p>网页由 Active 变成 Hidden，又变回 Active。</p>
<p>（2）用户打开网页后，又切换到其他 App，并且长时候使用后者，导致系统自动丢弃网页。</p>
<p>网页由 Active 变成 Hidden，再变成 Frozen，最后 Discarded。</p>
<p>（3）用户打开网页后，又切换到其他 App，然后从任务管理器里面将浏览器进程清除。</p>
<p>网页由 Active 变成 Hidden，然后 Terminated。</p>
<p>（4）系统丢弃了某个 Tab 里面的页面后，用户重新打开这个 Tab。</p>
<p>网页由 Discarded 变成 Active。</p>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<p>生命周期的各个阶段都有自己的事件，以供开发者指定监听函数。这些事件里面，只有两个是新定义的（<code v-pre>freeze</code>事件和<code v-pre>resume</code>事件），其它都是现有的。</p>
<p>注意，网页的生命周期事件是在所有帧（frame）触发，不管是底层的帧，还是内嵌的帧。也就是说，内嵌的<code v-pre>&lt;iframe&gt;</code>网页跟顶层网页一样，都会同时监听到下面的事件。</p>
<h4 id="focus-事件" tabindex="-1"><a class="header-anchor" href="#focus-事件" aria-hidden="true">#</a> focus 事件</h4>
<p><code v-pre>focus</code>事件在页面获得输入焦点时触发，比如网页从 Passive 阶段变为 Active 阶段。</p>
<h4 id="blur-事件" tabindex="-1"><a class="header-anchor" href="#blur-事件" aria-hidden="true">#</a> blur 事件</h4>
<p><code v-pre>blur</code>事件在页面失去输入焦点时触发，比如网页从 Active 阶段变为 Passive 阶段。</p>
<h4 id="visibilitychange-事件" tabindex="-1"><a class="header-anchor" href="#visibilitychange-事件" aria-hidden="true">#</a> visibilitychange 事件</h4>
<p><code v-pre>visibilitychange</code>事件在网页可见状态发生变化时触发，一般发生在以下几种场景。</p>
<blockquote>
<ul>
<li>用户隐藏页面（切换 Tab、最小化浏览器），页面由 Active 阶段变成 Hidden 阶段。</li>
<li>用户重新访问隐藏的页面，页面由 Hidden 阶段变成 Active 阶段。</li>
<li>用户关闭页面，页面会先进入 Hidden 阶段，然后进入 Terminated 阶段。</li>
</ul>
</blockquote>
<p>可以通过<code v-pre>document.onvisibilitychange</code>属性指定这个事件的回调函数。</p>
<h4 id="freeze-事件" tabindex="-1"><a class="header-anchor" href="#freeze-事件" aria-hidden="true">#</a> freeze 事件</h4>
<p><code v-pre>freeze</code>事件在网页进入 Frozen 阶段时触发。</p>
<p>可以通过<code v-pre>document.onfreeze</code>属性指定在进入 Frozen 阶段时调用的回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handleFreeze</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Handle transition to FROZEN</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'freeze'</span><span class="token punctuation">,</span> handleFreeze<span class="token punctuation">)</span><span class="token punctuation">;</span>

## 或者
document<span class="token punctuation">.</span><span class="token function-variable function">onfreeze</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个事件的监听函数，最长只能运行500毫秒。并且只能复用已经打开的网络连接，不能发起新的网络请求。</p>
<p>注意，从 Frozen 阶段进入 Discarded 阶段，不会触发任何事件，无法指定回调函数，只能在进入 Frozen 阶段时指定回调函数。</p>
<h4 id="resume-事件" tabindex="-1"><a class="header-anchor" href="#resume-事件" aria-hidden="true">#</a> resume 事件</h4>
<p><code v-pre>resume</code>事件在网页离开 Frozen 阶段，变为 Active / Passive / Hidden 阶段时触发。</p>
<p><code v-pre>document.onresume</code>属性指的是页面离开 Frozen 阶段、进入可用状态时调用的回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handleResume</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle state transition FROZEN -> ACTIVE</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resume"</span><span class="token punctuation">,</span> handleResume<span class="token punctuation">)</span><span class="token punctuation">;</span>

## 或者
document<span class="token punctuation">.</span><span class="token function-variable function">onresume</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> … <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pageshow-事件" tabindex="-1"><a class="header-anchor" href="#pageshow-事件" aria-hidden="true">#</a> pageshow 事件</h4>
<p><code v-pre>pageshow</code>事件在用户加载网页时触发。这时，有可能是全新的页面加载，也可能是从缓存中获取的页面。如果是从缓存中获取，则该事件对象的<code v-pre>event.persisted</code>属性为<code v-pre>true</code>，否则为<code v-pre>false</code>。</p>
<p>这个事件的名字有点误导，它跟页面的可见性其实毫无关系，只跟浏览器的 History 记录的变化有关。</p>
<h4 id="pagehide-事件" tabindex="-1"><a class="header-anchor" href="#pagehide-事件" aria-hidden="true">#</a> pagehide 事件</h4>
<p><code v-pre>pagehide</code>事件在用户离开当前网页、进入另一个网页时触发。它的前提是浏览器的 History 记录必须发生变化，跟网页是否可见无关。</p>
<p>如果浏览器能够将当前页面添加到缓存以供稍后重用，则事件对象的<code v-pre>event.persisted</code>属性为<code v-pre>true</code>。 如果为<code v-pre>true</code>。如果页面添加到了缓存，则页面进入 Frozen 状态，否则进入 Terminatied 状态。</p>
<h4 id="beforeunload-事件" tabindex="-1"><a class="header-anchor" href="#beforeunload-事件" aria-hidden="true">#</a> beforeunload 事件</h4>
<p><code v-pre>beforeunload</code>事件在窗口或文档即将卸载时触发。该事件发生时，文档仍然可见，此时卸载仍可取消。经过这个事件，网页进入 Terminated 状态。</p>
<h4 id="unload-事件" tabindex="-1"><a class="header-anchor" href="#unload-事件" aria-hidden="true">#</a> unload 事件</h4>
<p><code v-pre>unload</code>事件在页面正在卸载时触发。经过这个事件，网页进入 Terminated 状态。</p>
<h3 id="获取当前阶段" tabindex="-1"><a class="header-anchor" href="#获取当前阶段" aria-hidden="true">#</a> 获取当前阶段</h3>
<p>如果网页处于 Active、Passive 或 Hidden 阶段，可以通过下面的代码，获得网页当前的状态。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">'hidden'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hidden'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">hasFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'active'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">'passive'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果网页处于 Frozen 和 Terminated 状态，由于定时器代码不会执行，只能通过事件监听判断状态。进入 Frozen 阶段，可以监听<code v-pre>freeze</code>事件；进入 Terminated 阶段，可以监听<code v-pre>pagehide</code>事件。</p>
<h3 id="document-wasdiscarded" tabindex="-1"><a class="header-anchor" href="#document-wasdiscarded" aria-hidden="true">#</a> document.wasDiscarded</h3>
<p>如果某个选项卡处于 Frozen 阶段，就随时有可能被系统丢弃，进入 Discarded 阶段。如果后来用户再次点击该选项卡，浏览器会重新加载该页面。</p>
<p>这时，开发者可以通过判断<code v-pre>document.wasDiscarded</code>属性，了解先前的网页是否被丢弃了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>wasDiscarded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 该网页已经不是原来的状态了，曾经被浏览器丢弃过</span>
  <span class="token comment">// 恢复以前的状态</span>
  <span class="token function">getPersistedState</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>discardedClientId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，<code v-pre>window</code>对象上会新增<code v-pre>window.clientId</code>和<code v-pre>window.discardedClientId</code>两个属性，用来恢复丢弃前的状态。</p>
<h3 id="参考链接-6" tabindex="-1"><a class="header-anchor" href="#参考链接-6" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://developers.google.com/web/updates/2018/07/page-lifecycle-api" target="_blank" rel="noopener noreferrer">Page Lifecycle API<ExternalLinkIcon/></a>, Philip Walton</li>
<li><a href="https://github.com/WICG/page-lifecycle" target="_blank" rel="noopener noreferrer">Lifecycle API for Web Pages<ExternalLinkIcon/></a>, W3C</li>
<li><a href="https://wicg.github.io/page-lifecycle/spec.html" target="_blank" rel="noopener noreferrer">Page Lifecycle 1 Editor’s Draft<ExternalLinkIcon/></a>, W3C</li>
</ul>
<h2 id="page-visibility-api" tabindex="-1"><a class="header-anchor" href="#page-visibility-api" aria-hidden="true">#</a> Page Visibility API</h2>
<h3 id="简介-2" tabindex="-1"><a class="header-anchor" href="#简介-2" aria-hidden="true">#</a> 简介</h3>
<p>有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件。</p>
<blockquote>
<ul>
<li><code v-pre>pagehide</code></li>
<li><code v-pre>beforeunload</code></li>
<li><code v-pre>unload</code></li>
</ul>
</blockquote>
<p>但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。</p>
<blockquote>
<ul>
<li>用户点击了一条系统通知，切换到另一个 App。</li>
<li>用户进入任务切换窗口，切换到另一个 App。</li>
<li>用户点击了 Home 按钮，切换回主屏幕。</li>
<li>操作系统自动切换到另一个 App（比如，收到一个电话）。</li>
</ul>
</blockquote>
<p>上面这些情况，都会导致手机将浏览器进程切换到后台，然后为了节省资源，可能就会杀死浏览器进程。</p>
<p>以前，页面被系统切换，以及系统清除浏览器进程，是无法监听到的。开发者想要指定，任何一种页面卸载情况下都会执行的代码，也是无法做到的。为了解决这个问题，就诞生了 Page Visibility API。不管手机或桌面电脑，所有情况下，这个 API 都会监听到页面的可见性发生变化。</p>
<p>这个新的 API 的意义在于，通过监听网页的可见性，可以预判网页的卸载，还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页，下面这些网页行为都是可以暂停的。</p>
<blockquote>
<ul>
<li>对服务器的轮询</li>
<li>网页动画</li>
<li>正在播放的音频或视频</li>
</ul>
</blockquote>
<h3 id="document-visibilitystate" tabindex="-1"><a class="header-anchor" href="#document-visibilitystate" aria-hidden="true">#</a> document.visibilityState</h3>
<p>这个 API 主要在<code v-pre>document</code>对象上，新增了一个<code v-pre>document.visibilityState</code>属性。该属性返回一个字符串，表示页面当前的可见性状态，共有三个可能的值。</p>
<blockquote>
<ul>
<li><code v-pre>hidden</code>：页面彻底不可见。</li>
<li><code v-pre>visible</code>：页面至少一部分可见。</li>
<li><code v-pre>prerender</code>：页面即将或正在渲染，处于不可见状态。</li>
</ul>
</blockquote>
<p>其中，<code v-pre>hidden</code>状态和<code v-pre>visible</code>状态是所有浏览器都必须支持的。<code v-pre>prerender</code>状态只在支持“预渲染”的浏览器上才会出现，比如 Chrome 浏览器就有预渲染功能，可以在用户不可见的状态下，预先把页面渲染出来，等到用户要浏览的时候，直接展示渲染好的网页。</p>
<p>只要页面可见，哪怕只露出一个角，<code v-pre>document.visibilityState</code>属性就返回<code v-pre>visible</code>。只有以下四种情况，才会返回<code v-pre>hidden</code>。</p>
<blockquote>
<ul>
<li>浏览器最小化。</li>
<li>浏览器没有最小化，但是当前页面切换成了背景页。</li>
<li>浏览器将要卸载（unload）页面。</li>
<li>操作系统触发锁屏屏幕。</li>
</ul>
</blockquote>
<p>可以看到，上面四种场景涵盖了页面可能被卸载的所有情况。也就是说，页面卸载之前，<code v-pre>document.visibilityState</code>属性一定会变成<code v-pre>hidden</code>。事实上，这也是设计这个 API 的主要目的。</p>
<p>另外，早期版本的 API，这个属性还有第四个值<code v-pre>unloaded</code>，表示页面即将卸载，现在已经被废弃了。</p>
<p>注意，<code v-pre>document.visibilityState</code>属性只针对顶层窗口，内嵌的<code v-pre>&lt;iframe&gt;</code>页面的<code v-pre>document.visibilityState</code>属性由顶层窗口决定。使用 CSS 属性隐藏<code v-pre>&lt;iframe&gt;</code>页面（比如<code v-pre>display: none;</code>），并不会影响内嵌页面的可见性。</p>
<h3 id="document-hidden" tabindex="-1"><a class="header-anchor" href="#document-hidden" aria-hidden="true">#</a> document.hidden</h3>
<p>由于历史原因，这个 API 还定义了<code v-pre>document.hidden</code>属性。该属性只读，返回一个布尔值，表示当前页面是否可见。</p>
<p>当<code v-pre>document.visibilityState</code>属性返回<code v-pre>visible</code>时，<code v-pre>document.hidden</code>属性返回<code v-pre>false</code>；其他情况下，都返回<code v-pre>true</code>。</p>
<p>该属性只是出于历史原因而保留的，只要有可能，都应该使用<code v-pre>document.visibilityState</code>属性，而不是使用这个属性。</p>
<h3 id="visibilitychange-事件-1" tabindex="-1"><a class="header-anchor" href="#visibilitychange-事件-1" aria-hidden="true">#</a> visibilitychange 事件</h3>
<p>只要<code v-pre>document.visibilityState</code>属性发生变化，就会触发<code v-pre>visibilitychange</code>事件。因此，可以通过监听这个事件（通过<code v-pre>document.addEventListener()</code>方法或<code v-pre>document.onvisibilitychange</code>属性），跟踪页面可见性的变化。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'visibilitychange'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 用户离开了当前页面</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">'hidden'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'页面不可见'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 用户打开或回到页面</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">'visible'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">'页面可见'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码是 Page Visibility API 的最基本用法，可以监听可见性变化。</p>
<p>下面是另一个例子，一旦页面不可见，就暂停视频播放。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> vidElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'video-demo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'visibilitychange'</span><span class="token punctuation">,</span> startStopVideo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">startStopVideo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">'hidden'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vidElem<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">'visible'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vidElem<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面卸载" tabindex="-1"><a class="header-anchor" href="#页面卸载" aria-hidden="true">#</a> 页面卸载</h3>
<p>下面专门讨论一下，如何正确监听页面卸载。</p>
<p>页面卸载可以分成三种情况。</p>
<blockquote>
<ul>
<li>页面可见时，用户关闭 Tab 页或浏览器窗口。</li>
<li>页面可见时，用户在当前窗口前往另一个页面。</li>
<li>页面不可见时，用户或系统关闭浏览器窗口。</li>
</ul>
</blockquote>
<p>这三种情况，都会触发<code v-pre>visibilitychange</code>事件。前两种情况，该事件在用户离开页面时触发；最后一种情况，该事件在页面从可见状态变为不可见状态时触发。</p>
<p>由此可见，<code v-pre>visibilitychange</code>事件比<code v-pre>pagehide</code>、<code v-pre>beforeunload</code>、<code v-pre>unload</code>事件更可靠，所有情况下都会触发（从<code v-pre>visible</code>变为<code v-pre>hidden</code>）。因此，可以只监听这个事件，运行页面卸载时需要运行的代码，不用监听后面那三个事件。</p>
<p>甚至可以这样说，<code v-pre>unload</code>事件在任何情况下都不必监听，<code v-pre>beforeunload</code>事件只有一种适用场景，就是用户修改了表单，没有提交就离开当前页面。另一方面，指定了这两个事件的监听函数，浏览器就不会缓存当前页面。</p>
<h3 id="参考链接-7" tabindex="-1"><a class="header-anchor" href="#参考链接-7" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://w3c.github.io/page-visibility/" target="_blank" rel="noopener noreferrer">Page Visibility Level 2<ExternalLinkIcon/></a>, W3C</li>
<li><a href="http://davidwalsh.name/page-visibility" target="_blank" rel="noopener noreferrer">Page Visibility API<ExternalLinkIcon/></a>, David Walsh</li>
<li><a href="http://www.html5rocks.com/en/tutorials/pagevisibility/intro/" target="_blank" rel="noopener noreferrer">Using the pageVisbility API<ExternalLinkIcon/></a>, Joe Marini</li>
<li><a href="http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx" target="_blank" rel="noopener noreferrer">Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 2<ExternalLinkIcon/></a>, Jatinder Mann</li>
<li><a href="https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/" target="_blank" rel="noopener noreferrer">Don't lose user and app state, use Page Visibility<ExternalLinkIcon/></a>, Ilya Grigorik</li>
</ul>
<h2 id="point-lock-api" tabindex="-1"><a class="header-anchor" href="#point-lock-api" aria-hidden="true">#</a> Point lock API</h2>
<p>不用释放按钮，就锁定鼠标。</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API<ExternalLinkIcon/></a></p>
<h2 id="server-sent-events" tabindex="-1"><a class="header-anchor" href="#server-sent-events" aria-hidden="true">#</a> Server-Sent Events</h2>
<h3 id="简介-3" tabindex="-1"><a class="header-anchor" href="#简介-3" aria-hidden="true">#</a> 简介</h3>
<p>服务器向客户端推送数据，有很多解决方案。除了“轮询” 和 WebSocket，HTML 5 还提供了 Server-Sent Events（以下简称 SSE）。</p>
<p>一般来说，HTTP 协议只能客户端向服务器发起请求，服务器不能主动向客户端推送。但是有一种特殊情况，就是服务器向客户端声明，接下来要发送的是流信息（streaming）。也就是说，发送的不是一次性的数据包，而是一个数据流，会连续不断地发送过来。这时，客户端不会关闭连接，会一直等着服务器发过来的新的数据流。本质上，这种通信就是以流信息的方式，完成一次用时很长的下载。</p>
<p>SSE 就是利用这种机制，使用流信息向浏览器推送信息。它基于 HTTP 协议，目前除了 IE/Edge，其他浏览器都支持。</p>
<h3 id="与-websocket-的比较" tabindex="-1"><a class="header-anchor" href="#与-websocket-的比较" aria-hidden="true">#</a> 与 WebSocket 的比较</h3>
<p>SSE 与 WebSocket 作用相似，都是建立浏览器与服务器之间的通信渠道，然后服务器向浏览器推送信息。</p>
<p>总体来说，WebSocket 更强大和灵活。因为它是全双工通道，可以双向通信；SSE 是单向通道，只能服务器向浏览器发送，因为 streaming 本质上就是下载。如果浏览器向服务器发送信息，就变成了另一次 HTTP 请求。</p>
<p>但是，SSE 也有自己的优点。</p>
<ul>
<li>SSE 使用 HTTP 协议，现有的服务器软件都支持。WebSocket 是一个独立协议。</li>
<li>SSE 属于轻量级，使用简单；WebSocket 协议相对复杂。</li>
<li>SSE 默认支持断线重连，WebSocket 需要自己实现断线重连。</li>
<li>SSE 一般只用来传送文本，二进制数据需要编码后传送，WebSocket 默认支持传送二进制数据。</li>
<li>SSE 支持自定义发送的消息类型。</li>
</ul>
<p>因此，两者各有特点，适合不同的场合。</p>
<h3 id="客户端-api" tabindex="-1"><a class="header-anchor" href="#客户端-api" aria-hidden="true">#</a> 客户端 API</h3>
<h4 id="eventsource-对象" tabindex="-1"><a class="header-anchor" href="#eventsource-对象" aria-hidden="true">#</a> EventSource 对象</h4>
<p>SSE 的客户端 API 部署在<code v-pre>EventSource</code>对象上。下面的代码可以检测浏览器是否支持 SSE。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'EventSource'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 SSE 时，浏览器首先生成一个<code v-pre>EventSource</code>实例，向服务器发起连接。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的<code v-pre>url</code>可以与当前网址同域，也可以跨域。跨域时，可以指定第二个参数，打开<code v-pre>withCredentials</code>属性，表示是否一起发送 Cookie。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="readystate-属性" tabindex="-1"><a class="header-anchor" href="#readystate-属性" aria-hidden="true">#</a> readyState 属性</h4>
<p><code v-pre>EventSource</code>实例的<code v-pre>readyState</code>属性，表明连接的当前状态。该属性只读，可以取以下值。</p>
<ul>
<li>0：相当于常量<code v-pre>EventSource.CONNECTING</code>，表示连接还未建立，或者断线正在重连。</li>
<li>1：相当于常量<code v-pre>EventSource.OPEN</code>，表示连接已经建立，可以接受数据。</li>
<li>2：相当于常量<code v-pre>EventSource.CLOSED</code>，表示连接已断，且不会重连。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="url-属性" tabindex="-1"><a class="header-anchor" href="#url-属性" aria-hidden="true">#</a> url 属性</h4>
<p><code v-pre>EventSource</code>实例的<code v-pre>url</code>属性返回连接的网址，该属性只读。</p>
<h4 id="withcredentials-属性" tabindex="-1"><a class="header-anchor" href="#withcredentials-属性" aria-hidden="true">#</a> withCredentials 属性</h4>
<p><code v-pre>EventSource</code>实例的<code v-pre>withCredentials</code>属性返回一个布尔值，表示当前实例是否开启 CORS 的<code v-pre>withCredentials</code>。该属性只读，默认是<code v-pre>false</code>。</p>
<h4 id="onopen-属性" tabindex="-1"><a class="header-anchor" href="#onopen-属性" aria-hidden="true">#</a> onopen 属性</h4>
<p>连接一旦建立，就会触发<code v-pre>open</code>事件，可以在<code v-pre>onopen</code>属性定义回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 另一种写法</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'open'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="onmessage-属性" tabindex="-1"><a class="header-anchor" href="#onmessage-属性" aria-hidden="true">#</a> onmessage 属性</h4>
<p>客户端收到服务器发来的数据，就会触发<code v-pre>message</code>事件，可以在<code v-pre>onmessage</code>属性定义回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 另一种写法</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，参数对象<code v-pre>event</code>有如下属性。</p>
<ul>
<li><code v-pre>data</code>：服务器端传回的数据（文本格式）。</li>
<li><code v-pre>origin</code>： 服务器 URL 的域名部分，即协议、域名和端口，表示消息的来源。</li>
<li><code v-pre>lastEventId</code>：数据的编号，由服务器端发送。如果没有编号，这个属性为空。</li>
</ul>
<h4 id="onerror-属性" tabindex="-1"><a class="header-anchor" href="#onerror-属性" aria-hidden="true">#</a> onerror 属性</h4>
<p>如果发生通信错误（比如连接中断），就会触发<code v-pre>error</code>事件，可以在<code v-pre>onerror</code>属性定义回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle error event</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 另一种写法</span>
source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle error event</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h4>
<p>默认情况下，服务器发来的数据，总是触发浏览器<code v-pre>EventSource</code>实例的<code v-pre>message</code>事件。开发者还可以自定义 SSE 事件，这种情况下，发送回来的数据不会触发<code v-pre>message</code>事件。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">var</span> origin <span class="token operator">=</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">;</span>
  <span class="token keyword">var</span> lastEventId <span class="token operator">=</span> event<span class="token punctuation">.</span>lastEventId<span class="token punctuation">;</span>
  <span class="token comment">// handle message</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，浏览器对 SSE 的<code v-pre>foo</code>事件进行监听。如何实现服务器发送<code v-pre>foo</code>事件，请看下文。</p>
<h4 id="close-方法" tabindex="-1"><a class="header-anchor" href="#close-方法" aria-hidden="true">#</a> close() 方法</h4>
<p><code v-pre>close</code>方法用于关闭 SSE 连接。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>source<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="服务器实现" tabindex="-1"><a class="header-anchor" href="#服务器实现" aria-hidden="true">#</a> 服务器实现</h3>
<h4 id="数据格式" tabindex="-1"><a class="header-anchor" href="#数据格式" aria-hidden="true">#</a> 数据格式</h4>
<p>服务器向浏览器发送的 SSE 数据，必须是 UTF-8 编码的文本，具有如下的 HTTP 头信息。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面三行之中，第一行的<code v-pre>Content-Type</code>必须指定 MIME 类型为<code v-pre>event-steam</code>。</p>
<p>每一次发送的信息，由若干个<code v-pre>message</code>组成，每个<code v-pre>message</code>之间用<code v-pre>\n\n</code>分隔。每个<code v-pre>message</code>内部由若干行组成，每一行都是如下格式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>[field]: value\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的<code v-pre>field</code>可以取四个值。</p>
<ul>
<li>data</li>
<li>event</li>
<li>id</li>
<li>retry</li>
</ul>
<p>此外，还可以有冒号开头的行，表示注释。通常，服务器每隔一段时间就会向浏览器发送一个注释，保持连接不中断。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>: This is a comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是一个例子。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>: this is a test stream\n\n

data: some text\n\n

data: another message\n
data: with two lines \n\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="data-字段" tabindex="-1"><a class="header-anchor" href="#data-字段" aria-hidden="true">#</a> data 字段</h4>
<p>数据内容用<code v-pre>data</code>字段表示。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>data:  message\n\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果数据很长，可以分成多行，最后一行用<code v-pre>\n\n</code>结尾，前面行都用<code v-pre>\n</code>结尾。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>data: begin message\n
data: continue message\n\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个发送 JSON 数据的例子。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>data: {\n
data: "foo": "bar",\n
data: "baz", 555\n
data: }\n\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="id-字段" tabindex="-1"><a class="header-anchor" href="#id-字段" aria-hidden="true">#</a> id 字段</h4>
<p>数据标识符用<code v-pre>id</code>字段表示，相当于每一条数据的编号。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>id: msg1\n
data: message\n\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器用<code v-pre>lastEventId</code>属性读取这个值。一旦连接断线，浏览器会发送一个 HTTP 头，里面包含一个特殊的<code v-pre>Last-Event-ID</code>头信息，将这个值发送回来，用来帮助服务器端重建连接。因此，这个头信息可以被视为一种同步机制。</p>
<h4 id="event-字段" tabindex="-1"><a class="header-anchor" href="#event-字段" aria-hidden="true">#</a> event 字段</h4>
<p><code v-pre>event</code>字段表示自定义的事件类型，默认是<code v-pre>message</code>事件。浏览器可以用<code v-pre>addEventListener()</code>监听该事件。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>event: foo\n
data: a foo event\n\n

data: an unnamed event\n\n

event: bar\n
data: a bar event\n\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创造了三条信息。第一条的名字是<code v-pre>foo</code>，触发浏览器的<code v-pre>foo</code>事件；第二条未取名，表示默认类型，触发浏览器的<code v-pre>message</code>事件；第三条是<code v-pre>bar</code>，触发浏览器的<code v-pre>bar</code>事件。</p>
<p>下面是另一个例子。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="retry-字段" tabindex="-1"><a class="header-anchor" href="#retry-字段" aria-hidden="true">#</a> retry 字段</h4>
<p>服务器可以用<code v-pre>retry</code>字段，指定浏览器重新发起连接的时间间隔。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>retry: 10000\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>两种情况会导致浏览器重新发起连接：一种是时间间隔到期，二是由于网络错误等原因，导致连接出错。</p>
<h3 id="node-服务器实例" tabindex="-1"><a class="header-anchor" href="#node-服务器实例" aria-hidden="true">#</a> Node 服务器实例</h3>
<p>SSE 要求服务器与浏览器保持连接。对于不同的服务器软件来说，所消耗的资源是不一样的。Apache 服务器，每个连接就是一个线程，如果要维持大量连接，势必要消耗大量资源。Node 则是所有连接都使用同一个线程，因此消耗的资源会小得多，但是这要求每个连接不能包含很耗时的操作，比如磁盘的 IO 读写。</p>
<p>下面是 Node 的 SSE 服务器<a href="http://cjihrig.com/blog/server-sent-events-in-node-js/" target="_blank" rel="noopener noreferrer">实例<ExternalLinkIcon/></a>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> fileName <span class="token operator">=</span> <span class="token string">"."</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>url<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName <span class="token operator">===</span> <span class="token string">"./stream"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span><span class="token string">"text/event-stream"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"Cache-Control"</span><span class="token operator">:</span><span class="token string">"no-cache"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"Connection"</span><span class="token operator">:</span><span class="token string">"keep-alive"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"Access-Control-Allow-Origin"</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"retry: 10000\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"event: connecttime\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"data: "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\n\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"data: "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\n\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"data: "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\n\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    req<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">"close"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8844</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接-8" tabindex="-1"><a class="header-anchor" href="#参考链接-8" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li>Colin Ihrig, <a href="http://jspro.com/apis/implementing-push-technology-using-server-sent-events/" target="_blank" rel="noopener noreferrer">Implementing Push Technology Using Server-Sent Events<ExternalLinkIcon/></a></li>
<li>Colin Ihrig，<a href="http://cjihrig.com/blog/the-server-side-of-server-sent-events/" target="_blank" rel="noopener noreferrer">The Server Side of Server-Sent Events<ExternalLinkIcon/></a></li>
<li>Eric Bidelman, <a href="http://www.html5rocks.com/en/tutorials/eventsource/basics/" target="_blank" rel="noopener noreferrer">Stream Updates with Server-Sent Events<ExternalLinkIcon/></a></li>
<li>MDN，<a href="https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events" target="_blank" rel="noopener noreferrer">Using server-sent events<ExternalLinkIcon/></a></li>
<li><a href="http://Segment.io" target="_blank" rel="noopener noreferrer">Segment.io<ExternalLinkIcon/></a>, <a href="https://segment.io/blog/2014-04-03-server-sent-events-the-simplest-realtime-browser-spec/" target="_blank" rel="noopener noreferrer">Server-Sent Events: The simplest realtime browser spec<ExternalLinkIcon/></a></li>
</ul>
<h2 id="service-worker" tabindex="-1"><a class="header-anchor" href="#service-worker" aria-hidden="true">#</a> Service Worker</h2>
<h3 id="含义" tabindex="-1"><a class="header-anchor" href="#含义" aria-hidden="true">#</a> 含义</h3>
<p>Service Worker 首先是一个运行在后台的 Worker 线程，然后它会长期运行，充当一个服务，很适合那些不需要网页或用户互动的功能。它的最常见用途就是拦截和处理网络请求。</p>
<p>Service Worker 是一个后台运行的脚本，充当一个代理服务器，拦截用户发出的网络请求，比如加载脚本和图片。Service Worker 可以修改用户的请求，或者直接向用户发出回应，不用联系服务器，这使得用户可以在离线情况下使用网络应用。它还可以在本地缓存资源文件，直接从缓存加载文件，因此可以加快访问速度。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'serviceWorker'</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'/service-worker.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码确认浏览器支持 Service Worker 以后，会注册一个 Service Worker。</p>
<p>为了节省内存，Service worker 在不使用的时候是休眠的。它也不会保存数据，所以重新启动的时候，为了拿到数据，最好把数据放在 IndexedDb 里面。</p>
<p>Service Worker 是事件驱动的。</p>
<p>下面是拦截请求的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'fetch'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'/product'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> productId <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">.</span>productId
      <span class="token keyword">let</span> productCount <span class="token operator">=</span> <span class="token function">getProductData</span><span class="token punctuation">(</span>productId<span class="token punctuation">)</span>
      indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'store'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">db</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> productStore <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span><span class="token string">'products'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyPath</span><span class="token operator">:</span> <span class="token string">'id'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        productStore<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> productId<span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token operator">++</span>productCount <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Service Worker 不能直接操作 DOM。</p>
<h3 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h3>
<h4 id="登记" tabindex="-1"><a class="header-anchor" href="#登记" aria-hidden="true">#</a> 登记</h4>
<p>使用 service worker 的第一步，就是告诉浏览器，需要注册一个 service worker 脚本。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'sw.js'</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'注册成功'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'注册失败'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的<code v-pre>sw.js</code>就是需要浏览器注册的 service worker 脚本。注意，这个脚本必须与当前网址同域，service worker 不支持跨域脚本。另外，<code v-pre>sw.js</code>必须是从 HTTPS 协议加载的。</p>
<p>默认情况下，Service worker 只对根目录<code v-pre>/</code>生效，如果要改变生效范围，可以运行下面的代码。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>
  <span class="token string">'/service-worker.js'</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">'/products/fashion'</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<p>一旦登记成功，接下来都是 service worker 脚本的工作。下面的代码都是写在 service worker 脚本里面的。</p>
<p>登记后，就会触发<code v-pre>install</code>事件。service worker 脚本需要监听这个事件。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'install'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'安装完成'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>event.waitUntil()</code>方法为事件完成后指定回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'install'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token constant">CACHE_NAME</span> <span class="token operator">=</span> <span class="token string">'xyz-cache'</span>
    <span class="token keyword">let</span> urlsToCache <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">'/'</span><span class="token punctuation">,</span>
        <span class="token string">'/styles/main.css'</span><span class="token punctuation">,</span>
        <span class="token string">'/scripts/bundle.js'</span>
    <span class="token punctuation">]</span>
    event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
        caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span> <span class="token punctuation">(</span><span class="token parameter">cache</span> <span class="token operator">=></span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>urlsToCache<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="激活" tabindex="-1"><a class="header-anchor" href="#激活" aria-hidden="true">#</a> 激活</h4>
<p>安装完成后，service worker 就会等待激活。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'activate'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cacheWhitelist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'products-v2'</span><span class="token punctuation">]</span>

    event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
        caches<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span> <span class="token punctuation">(</span><span class="token parameter">cacheNames</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
                cacheNames<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token parameter">cacheName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheWhitelist<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>cacheName<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>cacheName<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-worker-与网页的通信" tabindex="-1"><a class="header-anchor" href="#service-worker-与网页的通信" aria-hidden="true">#</a> Service Worker 与网页的通信</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'activate'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
        self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            client<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'Hey, from service worker! I\'m listening to your fetch requests.'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">'service-worker'</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，Service Worker 监听<code v-pre>activate</code>事件，然后向客户端发送一条信息。</p>
<p>客户端需要部署消息监听代码。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>source <span class="token operator">==</span> <span class="token string">'service-worker'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接-9" tabindex="-1"><a class="header-anchor" href="#参考链接-9" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://frontendian.co/service-workers" target="_blank" rel="noopener noreferrer">Service Workers<ExternalLinkIcon/></a>, by Ryan Miller</li>
</ul>
<h2 id="svg-图像" tabindex="-1"><a class="header-anchor" href="#svg-图像" aria-hidden="true">#</a> SVG 图像</h2>
<h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h3>
<p>SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。</p>
<p>SVG 文件可以直接插入网页，成为 DOM 的一部分，然后用 JavaScript 和 CSS 进行操作。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mysvg<span class="token punctuation">"</span></span>
  <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span>
  <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 800 600<span class="token punctuation">"</span></span>
  <span class="token attr-name">preserveAspectRatio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xMidYMid meet<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mycircle<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是 SVG 代码直接插入网页的例子。</p>
<p>SVG 代码也可以写在一个独立文件中，然后用<code v-pre>&lt;img&gt;</code>、<code v-pre>&lt;object&gt;</code>、<code v-pre>&lt;embed&gt;</code>、<code v-pre>&lt;iframe&gt;</code>等标签插入网页。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>object<span class="token punctuation">"</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle.svg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/svg+xml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>embed<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon.svg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/svg+xml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iframe<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon.svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS 也可以使用 SVG 文件。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>icon.svg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SVG 文件还可以转为 BASE64 编码，然后作为 Data URI 写入网页。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data:image/svg+xml;base64,[data]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<h4 id="svg-标签" tabindex="-1"><a class="header-anchor" href="#svg-标签" aria-hidden="true">#</a> <code v-pre>&lt;svg&gt;</code>标签</h4>
<p>SVG 代码都放在顶层标签<code v-pre>&lt;svg&gt;</code>之中。下面是一个例子。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mycircle<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;svg&gt;</code>的<code v-pre>width</code>属性和<code v-pre>height</code>属性，指定了 SVG 图像在 HTML 元素中所占据的宽度和高度。除了相对单位，也可以采用绝对单位（单位：像素）。如果不指定这两个属性，SVG 图像的大小默认为300像素（宽）x 150像素（高）。</p>
<p>如果只想展示 SVG 图像的一部分，就要指定<code v-pre>viewBox</code>属性。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50 50 50 50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mycircle<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;viewBox&gt;</code>属性的值有四个数字，分别是左上角的横坐标和纵坐标、视口的宽度和高度。上面代码中，SVG 图像是100像素宽 x 100像素高，<code v-pre>viewBox</code>属性指定视口从<code v-pre>(50, 50)</code>这个点开始。所以，实际看到的是右下角的四分之一圆。</p>
<p>注意，视口必须适配所在的空间。上面代码中，视口的大小是 50 x 50，由于 SVG 图像的大小是 100 x 100，所以视口会放大去适配 SVG 图像的大小，即放大了四倍。</p>
<p>如果不指定<code v-pre>width</code>属性和<code v-pre>height</code>属性，只指定<code v-pre>viewBox</code>属性，则相当于只给定 SVG 图像的长宽比。这时，SVG 图像的大小默认是所在的 HTML 元素的大小。</p>
<h4 id="circle-标签" tabindex="-1"><a class="header-anchor" href="#circle-标签" aria-hidden="true">#</a> <code v-pre>&lt;circle&gt;</code>标签</h4>
<p><code v-pre>&lt;circle&gt;</code>标签代表圆形。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span>  <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90<span class="token punctuation">"</span></span>  <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fancy<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了三个圆。<code v-pre>&lt;circle&gt;</code>标签的<code v-pre>cx</code>、<code v-pre>cy</code>、<code v-pre>r</code>属性分别为横坐标、纵坐标和半径，单位为像素。坐标都是相对于<code v-pre>&lt;svg&gt;</code>画布的左上角原点。</p>
<p><code v-pre>class</code>属性用来指定对应的 CSS 类。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.red</span> <span class="token punctuation">{</span>
  <span class="token property">fill</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.fancy</span> <span class="token punctuation">{</span>
  <span class="token property">fill</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">stroke</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">stroke-width</span><span class="token punctuation">:</span> 3pt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SVG 的 CSS 属性与网页元素有所不同。</p>
<blockquote>
<ul>
<li>fill：填充色</li>
<li>stroke：描边色</li>
<li>stroke-width：边框宽度</li>
</ul>
</blockquote>
<h4 id="line-标签" tabindex="-1"><a class="header-anchor" href="#line-标签" aria-hidden="true">#</a> <code v-pre>&lt;line&gt;</code>标签</h4>
<p><code v-pre>&lt;line&gt;</code>标签用来绘制直线。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stroke:rgb(0,0,0);stroke-width:5<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;line&gt;</code>标签的<code v-pre>x1</code>属性和<code v-pre>y1</code>属性，表示线段起点的横坐标和纵坐标；<code v-pre>x2</code>属性和<code v-pre>y2</code>属性，表示线段终点的横坐标和纵坐标；<code v-pre>style</code>属性表示线段的样式。</p>
<h4 id="polyline-标签" tabindex="-1"><a class="header-anchor" href="#polyline-标签" aria-hidden="true">#</a> <code v-pre>&lt;polyline&gt;</code>标签</h4>
<p><code v-pre>&lt;polyline&gt;</code>标签用于绘制一根折线。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3,3 30,28 3,53<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;polyline&gt;</code>的<code v-pre>points</code>属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔。</p>
<h4 id="rect-标签" tabindex="-1"><a class="header-anchor" href="#rect-标签" aria-hidden="true">#</a> <code v-pre>&lt;rect&gt;</code>标签</h4>
<p><code v-pre>&lt;rect&gt;</code>标签用于绘制矩形。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stroke: ##70d5dd; fill: ##dd524b<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;rect&gt;</code>的<code v-pre>x</code>属性和<code v-pre>y</code>属性，指定了矩形左上角端点的横坐标和纵坐标；<code v-pre>width</code>属性和<code v-pre>height</code>属性指定了矩形的宽度和高度（单位像素）。</p>
<h4 id="ellipse-标签" tabindex="-1"><a class="header-anchor" href="#ellipse-标签" aria-hidden="true">#</a> <code v-pre>&lt;ellipse&gt;</code>标签</h4>
<p><code v-pre>&lt;ellipse&gt;</code>标签用于绘制椭圆。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ellipse</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>silver<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;ellipse&gt;</code>的<code v-pre>cx</code>属性和<code v-pre>cy</code>属性，指定了椭圆中心的横坐标和纵坐标（单位像素）；<code v-pre>rx</code>属性和<code v-pre>ry</code>属性，指定了椭圆横向轴和纵向轴的半径（单位像素）。</p>
<h4 id="polygon-标签" tabindex="-1"><a class="header-anchor" href="#polygon-标签" aria-hidden="true">#</a> <code v-pre>&lt;polygon&gt;</code>标签</h4>
<p><code v-pre>&lt;polygon&gt;</code>标签用于绘制多边形。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orange<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0,0 100,0 100,100 0,100 0,0<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;polygon&gt;</code>的<code v-pre>points</code>属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔。</p>
<h4 id="path-标签" tabindex="-1"><a class="header-anchor" href="#path-标签" aria-hidden="true">#</a> <code v-pre>&lt;path&gt;</code>标签</h4>
<p><code v-pre>&lt;path&gt;</code>标签用于制路径。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
  M 18,3
  L 46,3
  L 46,40
  L 61,40
  L 32,68
  L 3,40
  L 18,40
  Z
<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;path&gt;</code>的<code v-pre>d</code>属性表示绘制顺序，它的值是一个长字符串，每个字母表示一个绘制动作，后面跟着坐标。</p>
<blockquote>
<ul>
<li>M：移动到（moveto）</li>
<li>L：画直线到（lineto）</li>
<li>Z：闭合路径</li>
</ul>
</blockquote>
<h4 id="text-标签" tabindex="-1"><a class="header-anchor" href="#text-标签" aria-hidden="true">#</a> <code v-pre>&lt;text&gt;</code>标签</h4>
<p><code v-pre>&lt;text&gt;</code>标签用于绘制文本。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;text&gt;</code>的<code v-pre>x</code>属性和<code v-pre>y</code>属性，表示文本区块基线（baseline）起点的横坐标和纵坐标。文字的样式可以用<code v-pre>class</code>或<code v-pre>style</code>属性指定。</p>
<h4 id="use-标签" tabindex="-1"><a class="header-anchor" href="#use-标签" aria-hidden="true">#</a> <code v-pre>&lt;use&gt;</code>标签</h4>
<p><code v-pre>&lt;use&gt;</code>标签用于复制一个形状。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 30 10<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;use&gt;</code>的<code v-pre>href</code>属性指定所要复制的节点，<code v-pre>x</code>属性和<code v-pre>y</code>属性是<code v-pre>&lt;use&gt;</code>左上角的坐标。另外，还可以指定<code v-pre>width</code>和<code v-pre>height</code>坐标。</p>
<h4 id="g-标签" tabindex="-1"><a class="header-anchor" href="#g-标签" aria-hidden="true">#</a> <code v-pre>&lt;g&gt;</code>标签</h4>
<p><code v-pre>&lt;g&gt;</code>标签用于将多个形状组成一个组（group），方便复用。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCircle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>圆形<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="defs-标签" tabindex="-1"><a class="header-anchor" href="#defs-标签" aria-hidden="true">#</a> <code v-pre>&lt;defs&gt;</code>标签</h4>
<p><code v-pre>&lt;defs&gt;</code>标签用于自定义形状，它内部的代码不会显示，仅供引用。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCircle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>圆形<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pattern-标签" tabindex="-1"><a class="header-anchor" href="#pattern-标签" aria-hidden="true">#</a> <code v-pre>&lt;pattern&gt;</code>标签</h4>
<p><code v-pre>&lt;pattern&gt;</code>标签用于自定义一个形状，该形状可以被引用来平铺一个区域。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dots<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">patternUnits</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userSpaceOnUse<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##bee9e8<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>35<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(##dots)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;pattern&gt;</code>标签将一个圆形定义为<code v-pre>dots</code>模式。<code v-pre>patternUnits=&quot;userSpaceOnUse&quot;</code>表示<code v-pre>&lt;pattern&gt;</code>的宽度和长度是实际的像素值。然后，指定这个模式去填充下面的矩形。</p>
<h4 id="image-标签" tabindex="-1"><a class="header-anchor" href="#image-标签" aria-hidden="true">#</a> <code v-pre>&lt;image&gt;</code>标签</h4>
<p><code v-pre>&lt;image&gt;</code>标签用于插入图片文件。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 100 100<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;image&gt;</code>的<code v-pre>xlink:href</code>属性表示图像的来源。</p>
<h4 id="animate-标签" tabindex="-1"><a class="header-anchor" href="#animate-标签" aria-hidden="true">#</a> <code v-pre>&lt;animate&gt;</code>标签</h4>
<p><code v-pre>&lt;animate&gt;</code>标签用于产生动画效果。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##feac5e<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>animate</span> <span class="token attr-name">attributeName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>x<span class="token punctuation">"</span></span> <span class="token attr-name">from</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">dur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2s<span class="token punctuation">"</span></span> <span class="token attr-name">repeatCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indefinite<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rect</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，矩形会不断移动，产生动画效果。</p>
<p><code v-pre>&lt;animate&gt;</code>的属性含义如下。</p>
<blockquote>
<ul>
<li>attributeName：发生动画效果的属性名。</li>
<li>from：单次动画的初始值。</li>
<li>to：单次动画的结束值。</li>
<li>dur：单次动画的持续时间。</li>
<li>repeatCount：动画的循环模式。</li>
</ul>
</blockquote>
<p>可以在多个属性上面定义动画。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>animate</span> <span class="token attr-name">attributeName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>x<span class="token punctuation">"</span></span> <span class="token attr-name">from</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">dur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2s<span class="token punctuation">"</span></span> <span class="token attr-name">repeatCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indefinite<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>animate</span> <span class="token attr-name">attributeName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">dur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2s<span class="token punctuation">"</span></span> <span class="token attr-name">repeatCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indefinite<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="animatetransform-标签" tabindex="-1"><a class="header-anchor" href="#animatetransform-标签" aria-hidden="true">#</a> <code v-pre>&lt;animateTransform&gt;</code>标签</h4>
<p><code v-pre>&lt;animate&gt;</code>标签对 CSS 的<code v-pre>transform</code>属性不起作用，如果需要变形，就要使用<code v-pre>&lt;animateTransform&gt;</code>标签。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>##4bc0c8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>animateTransform</span> <span class="token attr-name">attributeName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transform<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rotate<span class="token punctuation">"</span></span> <span class="token attr-name">begin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0s<span class="token punctuation">"</span></span> <span class="token attr-name">dur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10s<span class="token punctuation">"</span></span> <span class="token attr-name">from</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 200 200<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>360 400 400<span class="token punctuation">"</span></span> <span class="token attr-name">repeatCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>indefinite<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rect</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;animateTransform&gt;</code>的效果为旋转（<code v-pre>rotate</code>），这时<code v-pre>from</code>和<code v-pre>to</code>属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转中心的坐标。<code v-pre>from=&quot;0 200 200&quot;</code>表示开始时，角度为0，围绕<code v-pre>(200, 200)</code>开始旋转；<code v-pre>to=&quot;360 400 400&quot;</code>表示结束时，角度为360，围绕<code v-pre>(400, 400)</code>旋转。</p>
<h3 id="javascript-操作" tabindex="-1"><a class="header-anchor" href="#javascript-操作" aria-hidden="true">#</a> JavaScript 操作</h3>
<h4 id="dom-操作" tabindex="-1"><a class="header-anchor" href="#dom-操作" aria-hidden="true">#</a> DOM 操作</h4>
<p>如果 SVG 代码直接写在 HTML 网页之中，它就成为网页 DOM 的一部分，可以直接用 DOM 操作。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mysvg<span class="token punctuation">"</span></span>
  <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span>
  <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 800 600<span class="token punctuation">"</span></span>
  <span class="token attr-name">preserveAspectRatio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xMidYMid meet<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mycircle<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码插入网页之后，就可以用 CSS 定制样式。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">circle</span> <span class="token punctuation">{</span>
  <span class="token property">stroke-width</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property">stroke</span><span class="token punctuation">:</span> ##f00<span class="token punctuation">;</span>
  <span class="token property">fill</span><span class="token punctuation">:</span> ##ff0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">circle:hover</span> <span class="token punctuation">{</span>
  <span class="token property">stroke</span><span class="token punctuation">:</span> ##090<span class="token punctuation">;</span>
  <span class="token property">fill</span><span class="token punctuation">:</span> ##fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，可以用 JavaScript 代码操作 SVG。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mycircle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'mycircle'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mycircle<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'circle clicked - enlarging'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  mycircle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码指定，如果点击图形，就改写<code v-pre>circle</code>元素的<code v-pre>r</code>属性。</p>
<h4 id="获取-svg-dom" tabindex="-1"><a class="header-anchor" href="#获取-svg-dom" aria-hidden="true">#</a> 获取 SVG DOM</h4>
<p>使用<code v-pre>&lt;object&gt;</code>、<code v-pre>&lt;iframe&gt;</code>、<code v-pre>&lt;embed&gt;</code>标签插入 SVG 文件，可以获取 SVG DOM。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> svgObject <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'object'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>contentDocument<span class="token punctuation">;</span>
<span class="token keyword">var</span> svgIframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'iframe'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>contentDocument<span class="token punctuation">;</span>
<span class="token keyword">var</span> svgEmbed <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'embed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSVGDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果使用<code v-pre>&lt;img&gt;</code>标签插入 SVG 文件，就无法获取 SVG DOM。</p>
<h4 id="读取-svg-源码" tabindex="-1"><a class="header-anchor" href="#读取-svg-源码" aria-hidden="true">#</a> 读取 SVG 源码</h4>
<p>由于 SVG 文件就是一段 XML 文本，因此可以通过读取 XML 代码的方式，读取 SVG 源码。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
    <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>xlink</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/1999/xlink<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xml:</span>space</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preserve<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>440<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- svg code --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>XMLSerializer</code>实例的<code v-pre>serializeToString()</code>方法，获取 SVG 元素的代码。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> svgString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">serializeToString</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="svg-图像转为-canvas-图像" tabindex="-1"><a class="header-anchor" href="#svg-图像转为-canvas-图像" aria-hidden="true">#</a> SVG 图像转为 Canvas 图像</h4>
<p>首先，需要新建一个<code v-pre>Image</code>对象，将 SVG 图像指定到该<code v-pre>Image</code>对象的<code v-pre>src</code>属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> svg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>svgString<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"image/svg+xml;charset=utf-8"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token constant">DOMURL</span> <span class="token operator">=</span> self<span class="token punctuation">.</span><span class="token constant">URL</span> <span class="token operator">||</span> self<span class="token punctuation">.</span>webkitURL <span class="token operator">||</span> self<span class="token punctuation">;</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token constant">DOMURL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>svg<span class="token punctuation">)</span><span class="token punctuation">;</span>

img<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，当图像加载完成后，再将它绘制到<code v-pre>&lt;canvas&gt;</code>元素。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例-折线图" tabindex="-1"><a class="header-anchor" href="#实例-折线图" aria-hidden="true">#</a> 实例：折线图</h3>
<p>下面将一张数据表格画成折线图。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>Date |Amount
-----|------
2014-01-01 | $10
2014-02-01 | $20
2014-03-01 | $40
2014-04-01 | $80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的图形，可以画成一个坐标系，<code v-pre>Date</code>作为横轴，<code v-pre>Amount</code>作为纵轴，四行数据画成一个数据点。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>350<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layer<span class="token punctuation">"</span></span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translate(60,10)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>   <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>105<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90<span class="token punctuation">"</span></span>  <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90<span class="token punctuation">"</span></span>  <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span>  <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>270<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>   <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>y axis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-40<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>105<span class="token punctuation">"</span></span> <span class="token attr-name">dy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>$10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-40<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>   <span class="token attr-name">dy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>$80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>x axis<span class="token punctuation">"</span></span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translate(0, 120)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>270<span class="token punctuation">"</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-30<span class="token punctuation">"</span></span>   <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>January 2014<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>April<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接-10" tabindex="-1"><a class="header-anchor" href="#参考链接-10" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li>Jon McPartland, <a href="http://bigbitecreative.com/introduction-svg-animation/" target="_blank" rel="noopener noreferrer">An introduction to SVG animation<ExternalLinkIcon/></a></li>
<li>Alexander Goedde, <a href="http://tavendo.com/blog/post/super-vector-graphics/" target="_blank" rel="noopener noreferrer">SVG - Super Vector Graphics<ExternalLinkIcon/></a></li>
<li>Joseph Wegner, <a href="http://flippinawesome.org/2014/02/03/learning-svg/" target="_blank" rel="noopener noreferrer">Learning SVG<ExternalLinkIcon/></a></li>
<li>biovisualize, <a href="http://bl.ocks.org/biovisualize/8187844" target="_blank" rel="noopener noreferrer">Direct svg to canvas to png conversion<ExternalLinkIcon/></a></li>
<li>Tyler Sticka, <a href="https://cloudfour.com/thinks/cropping-image-thumbnails-with-svg/" target="_blank" rel="noopener noreferrer">Cropping Image Thumbnails with SVG<ExternalLinkIcon/></a></li>
<li>Adi Purdila, <a href="https://webdesign.tutsplus.com/tutorials/how-to-create-a-loader-icon-with-svg-animations--cms-31542" target="_blank" rel="noopener noreferrer">How to Create a Loader Icon With SVG Animations<ExternalLinkIcon/></a></li>
</ul>
<h2 id="web-share-api" tabindex="-1"><a class="header-anchor" href="#web-share-api" aria-hidden="true">#</a> Web Share API</h2>
<h3 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2" aria-hidden="true">#</a> 概述</h3>
<p>网页内容如果要分享到其他应用，通常要自己实现分享接口，逐一给出目标应用的连接方式。这样很麻烦，也对网页性能有一定影响。Web Share API 就是为了解决这个问题而提出的，允许网页调用操作系统的分享接口，实质是 Web App 与本机的应用程序交换信息的一种方式。</p>
<p>这个 API 不仅可以改善网页性能，而且不限制分享目标的数量和类型。社交媒体应用、电子邮件、即时消息、以及本地系统安装的、且接受分享的应用，都会出现在系统的分享弹窗，这对手机网页尤其有用。另外，使用这个接口只需要一个分享按钮，而传统的网页分享有多个分享目标，就有多少个分享按钮。</p>
<p>目前，桌面的 Safari 浏览器，手机的安卓 Chrome 浏览器和 iOS Safari 浏览器，支持这个 API。</p>
<p>这个 API 要求网站必须启用 HTTPS 协议，但是本地 Localhost 开发可以使用 HTTP 协议。另外，这个 API 不能直接调用，只能用来响应用户的操作（比如<code v-pre>click</code>事件）。</p>
<h3 id="接口细节" tabindex="-1"><a class="header-anchor" href="#接口细节" aria-hidden="true">#</a> 接口细节</h3>
<p>该接口部署在<code v-pre>navigator.share</code>，可以用下面的代码检查本机是否支持该接口。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>share<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 支持</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不支持</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>navigator.share</code>是一个函数方法，接受一个配置对象作为参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>navigator<span class="token punctuation">.</span><span class="token function">share</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'WebShare API Demo'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://codepen.io/ayoisaiah/pen/YbNazJ'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'我正在看《Web Share API》'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置对象有三个属性，都是可选的，但至少必须指定一个。</p>
<ul>
<li><code v-pre>title</code>：分享文档的标题。</li>
<li><code v-pre>url</code>：分享的 URL。</li>
<li><code v-pre>text</code>：分享的内容。</li>
</ul>
<p>一般来说，<code v-pre>url</code>是当前网页的网址，<code v-pre>title</code>是当前网页的标题，可以采用下面的写法获取。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> title <span class="token operator">=</span> document<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'link[rel=canonical]'</span><span class="token punctuation">)</span> <span class="token operator">?</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'link[rel=canonical]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>href <span class="token operator">:</span>
  document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>navigator.share</code>的返回值是一个 Promise 对象。这个方法调用之后，会立刻弹出系统的分享弹窗，用户操作完毕之后，Promise 对象就会变为<code v-pre>resolved</code>状态。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>navigator<span class="token punctuation">.</span><span class="token function">share</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'WebShare API Demo'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://codepen.io/ayoisaiah/pen/YbNazJ'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Thanks for sharing!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Sharing error'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于返回值是 Promise 对象，所以也可以使用<code v-pre>await</code>命令。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>shareButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> navigator<span class="token punctuation">.</span><span class="token function">share</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Example Page'</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Data was shared successfully'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Share failed:'</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分享文件" tabindex="-1"><a class="header-anchor" href="#分享文件" aria-hidden="true">#</a> 分享文件</h3>
<p>这个 API 还可以分享文件，先使用<code v-pre>navigator.canShare()</code>方法，判断一下目标文件是否可以分享。因为不是所有文件都允许分享的，目前图像，视频，音频和文本文件可以分享2。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>canShare <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span><span class="token function">canShare</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">files</span><span class="token operator">:</span> filesArray <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>navigator.canShare()</code>方法的参数对象，就是<code v-pre>navigator.share()</code>方法的参数对象。这里的关键是<code v-pre>files</code>属性，它的值是一个<code v-pre>FileList</code>实例对象。</p>
<p><code v-pre>navigator.canShare()</code>方法返回一个布尔值，如果为<code v-pre>true</code>，就可以使用<code v-pre>navigator.share()</code>方法分享文件了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>canShare <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span><span class="token function">canShare</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">files</span><span class="token operator">:</span> filesArray <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  navigator<span class="token punctuation">.</span><span class="token function">share</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">files</span><span class="token operator">:</span> filesArray<span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Vacation Pictures'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Photos from September 27 to October 14.'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Share was successful.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Sharing failed'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接-11" tabindex="-1"><a class="header-anchor" href="#参考链接-11" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://css-tricks.com/how-to-use-the-web-share-api/" target="_blank" rel="noopener noreferrer">How to Use the Web Share API<ExternalLinkIcon/></a>, Ayooluwa Isaiah</li>
<li><a href="https://wicg.github.io/web-share/" target="_blank" rel="noopener noreferrer">Web Share API - Level 1<ExternalLinkIcon/></a>, W3C</li>
<li><a href="https://developers.google.com/web/updates/2016/09/navigator-share" target="_blank" rel="noopener noreferrer">Introducing the Web Share API<ExternalLinkIcon/></a>, Paul Kinlan, Sam Thorogood</li>
<li><a href="https://web.dev/web-share/" target="_blank" rel="noopener noreferrer">Share like a native app with the Web Share API<ExternalLinkIcon/></a>, Joe Medley</li>
</ul>
<h2 id="web-audio-api" tabindex="-1"><a class="header-anchor" href="#web-audio-api" aria-hidden="true">#</a> Web Audio API</h2>
<p>Web Audio API 用于操作声音。这个 API 可以让网页发出声音。</p>
<h3 id="基本用法-2" tabindex="-1"><a class="header-anchor" href="#基本用法-2" aria-hidden="true">#</a> 基本用法</h3>
<p>浏览器原生提供<code v-pre>AudioContext</code>对象，该对象用于生成一个声音的上下文，与扬声器相连。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> audioContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AudioContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，获取音源文件，将其在内存中解码，就可以播放声音了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AudioContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'sound.mp4'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">arrayBuffer</span> <span class="token operator">=></span> context<span class="token punctuation">.</span><span class="token function">decodeAudioData</span><span class="token punctuation">(</span>arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">audioBuffer</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 播放声音</span>
    <span class="token keyword">const</span> source <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createBufferSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    source<span class="token punctuation">.</span>buffer <span class="token operator">=</span> audioBuffer<span class="token punctuation">;</span>
    source<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
    source<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="context-createbuffer" tabindex="-1"><a class="header-anchor" href="#context-createbuffer" aria-hidden="true">#</a> context.createBuffer()</h3>
<p><code v-pre>context.createBuffer()</code>方法生成一个内存的操作视图，用于存放数据。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> buffer <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createBuffer</span><span class="token punctuation">(</span>channels<span class="token punctuation">,</span> signalLength<span class="token punctuation">,</span> sampleRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>createBuffer</code>方法接受三个参数。</p>
<ul>
<li>channels：整数，表示声道。创建单声道的声音，该值为 1。</li>
<li>signalLength：整数，表示声音数组的长度。</li>
<li>sampleRate：浮点数，表示取样率，即一秒取样多少次。</li>
</ul>
<p><code v-pre>signalLength</code>和<code v-pre>sampleRate</code>这两个参数决定了声音的长度。比如，如果取样率是<code v-pre>1/3000</code>（每秒取样3000次），声音数组长度是6000，那么播放的声音是2秒长度。</p>
<p>接着，使用<code v-pre>buffer.getChannelData</code>方法取出一个声道。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> buffer<span class="token punctuation">.</span><span class="token function">getChannelData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>buffer.getChannelData</code>的参数<code v-pre>0</code>表示取出第一个声道。</p>
<p>下一步，将声音数组放入这个声道。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> buffer<span class="token punctuation">.</span><span class="token function">getChannelData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// singal 是一个声音数组</span>
<span class="token comment">// singalLengal 是该数组的长度</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> signalLength<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> signal<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，使用<code v-pre>context.createBufferSource</code>方法生成一个声音节点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 生成一个声音节点</span>
<span class="token keyword">const</span> node <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createBufferSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 将声音数组的内存对象，放入这个节点</span>
node<span class="token punctuation">.</span>buffer <span class="token operator">=</span> buffer<span class="token punctuation">;</span>
<span class="token comment">// 将声音上下文与节点连接</span>
node<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>audioContext<span class="token punctuation">.</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 开始播放声音</span>
node<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>audioContext<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，播放一次后就将停止播放。如果需要循环播放，可以将节点对象的<code v-pre>looping</code>属性设为<code v-pre>true</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>node<span class="token punctuation">.</span>looping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h3>
<p>Web Audio API 原生提供了一些过滤器（filter），用来处理声音。</p>
<p>首先，使用<code v-pre>context.createBiquadFilter</code>方法建立过滤器实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> filter <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createBiquadFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，通过<code v-pre>filter.type</code>属性指定过滤器的类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>filter<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'lowpass'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目前，过滤器有以下这些类型。</p>
<ul>
<li>lowpass</li>
<li>highpass</li>
<li>bandpass</li>
<li>lowshelf</li>
<li>highshelf</li>
<li>peaking</li>
<li>notch</li>
<li>allpass</li>
</ul>
<p>然后指定过滤器的频率（frequency）属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>filter<span class="token punctuation">.</span>frequency<span class="token punctuation">.</span>value <span class="token operator">=</span> frequency
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，过滤器实例连接节点实例，就可以生效了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>sourceNode<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="web-components" tabindex="-1"><a class="header-anchor" href="#web-components" aria-hidden="true">#</a> Web Components</h2>
<h3 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3" aria-hidden="true">#</a> 概述</h3>
<p>各种网站往往需要一些相同的模块，比如日历、调色板等等，这种模块就被称为“组件”（component）。Web Components 就是浏览器原生的组件规范。</p>
<p>采用组件开发，有很多优点。</p>
<p>（1）有利于代码复用。组件是模块化编程思想的体现，可以跨平台、跨框架使用，构建、部署和与其他 UI 元素互动都有统一做法。</p>
<p>（2）使用非常容易。加载或卸载组件，只要添加或删除一行代码就可以了。</p>
<p>（3）开发和定制很方便。组件开发不需要使用框架，只要用原生的语法就可以了。开发好的组件往往留出接口，供使用者设置常见属性，比如上面代码的<code v-pre>heading</code>属性，就是用来设置对话框的标题。</p>
<p>（4）组件提供了 HTML、CSS、JavaScript 封装的方法，实现了与同一页面上其他代码的隔离。</p>
<p>未来的网站开发，可以像搭积木一样，把组件合在一起，就组成了一个网站。这种前景是非常诱人的。</p>
<p>Web Components 不是单一的规范，而是一系列的技术组成，以下是它的四个构成。</p>
<ul>
<li>Custom Elements</li>
<li>Template</li>
<li>Shadow DOM</li>
<li>HTML Import</li>
</ul>
<p>使用时，并不一定上面四种 API 都要用到。其中，Custom Element 和 Shadow DOM 比较重要，Template 和 HTML Import 只起到辅助作用。</p>
<h3 id="custom-element" tabindex="-1"><a class="header-anchor" href="#custom-element" aria-hidden="true">#</a> Custom Element</h3>
<h4 id="简介-4" tabindex="-1"><a class="header-anchor" href="#简介-4" aria-hidden="true">#</a> 简介</h4>
<p>HTML 标准定义的网页元素，有时并不符合我们的需要，这时浏览器允许用户自定义网页元素，这就叫做 Custom Element。简单说，它就是用户自定义的网页元素，是 Web components 技术的核心。</p>
<p>举例来说，你可以自定义一个叫做<code v-pre>&lt;my-element&gt;</code>的网页元素。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-element</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-element</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，自定义网页元素的标签名必须含有连字符<code v-pre>-</code>，一个或多个连字符都可以。这是因为浏览器内置的的 HTML 元素标签名，都不含有连字符，这样可以做到有效区分。</p>
<p>下面的代码先定义一个自定义元素的类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'open'</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;style>
        /* scoped styles */
      &lt;/style>
      &lt;slot>&lt;/slot>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">get</span> <span class="token function">observedAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Return list of attributes to watch.</span>
  <span class="token punctuation">}</span>

  <span class="token function">attributeChangedCallback</span><span class="token punctuation">(</span> <span class="token parameter">name<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Run functionality when one of these attributes is changed.</span>
  <span class="token punctuation">}</span>

  <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Run functionality when an instance of this element is inserted into the DOM.</span>
  <span class="token punctuation">}</span>

  <span class="token function">disconnectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Run functionality when an instance of this element is removed from the DOM.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码有几个注意点。</p>
<ul>
<li>自定义元素类的基类是<code v-pre>HTMLElement</code>。当然也可以根据需要，基于<code v-pre>HTMLElement</code>的子类，比如<code v-pre>HTMLButtonElement</code>。</li>
<li>构造函数内部定义了 Shadow DOM。所谓<code v-pre>Shadow DOM</code>指的是，这部分的 HTML 代码和样式，不直接暴露给用户。</li>
<li>类可以定义生命周期方法，比如<code v-pre>connectedCallback()</code>。</li>
</ul>
<p>然后，<code v-pre>window.customElements.define()</code>方法，用来登记自定义元素与这个类之间的映射。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'my-element'</span><span class="token punctuation">,</span> MyElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登记以后，页面上的每一个<code v-pre>&lt;my-element&gt;</code>元素都是一个<code v-pre>MyElement</code>类的实例。只要浏览器解析到<code v-pre>&lt;my-element&gt;</code>元素，就会运行<code v-pre>MyElement</code>的构造函数。</p>
<p>注意，如果没有登记就使用 Custom Element，浏览器会认为这是一个不认识的元素，会当做空的 div 元素处理。</p>
<p><code v-pre>window.customElements.define()</code>方法定义了 Custom Element 以后，可以使用<code v-pre>window.customeElements.get()</code>方法获取该元素的构造方法。这使得除了直接插入 HTML 网页，Custom Element 也能使用脚本插入网页。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span>
  <span class="token string">'my-element'</span><span class="token punctuation">,</span>
  <span class="token keyword">class</span> <span class="token class-name">extends</span> HTMLElement <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> el <span class="token operator">=</span> window<span class="token punctuation">.</span>customElements<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'my-element'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myElement <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">el</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>myElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想扩展现有的 HTML 元素（比如<code v-pre>&lt;button&gt;</code>）也是可以的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">GreetingElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLButtonElement</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登记的时候，需要提供扩展的元素。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'hey-there'</span><span class="token punctuation">,</span> GreetingElement<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">'button'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用的时候，为元素加上<code v-pre>is</code>属性就可以了。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hey-there<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>World<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Howdy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="生命周期方法" tabindex="-1"><a class="header-anchor" href="#生命周期方法" aria-hidden="true">#</a> 生命周期方法</h4>
<p>Custom Element 提供一些生命周期方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// here the element has been inserted into the DOM</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>connectedCallback()</code>方法就是<code v-pre>MyElement</code>元素的生命周期方法。每次，该元素插入 DOM，就会自动执行该方法。</p>
<ul>
<li><code v-pre>connectedCallback()</code>：插入 DOM 时调用。这可能不止一次发生，比如元素被移除后又重新添加。类的设置应该尽量放到这个方法里面执行，因为这时各种属性和子元素都可用。</li>
<li><code v-pre>disconnectedCallback()</code>：移出 DOM 时执行。</li>
<li><code v-pre>attributeChangedCallback(attrName, oldVal, newVal)</code>：添加、删除、更新或替换属性时调用。元素创建或升级时，也会调用。注意：只有加入<code v-pre>observedAttributes</code>的属性才会执行这个方法。</li>
<li><code v-pre>adoptedCallback()</code>：自定义元素移动到新的 document 时调用，比如执行<code v-pre>document.adoptNode(element)</code>时。</li>
</ul>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">GreetingElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token string">'Stranger'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">attributeChangedCallback</span><span class="token punctuation">(</span><span class="token parameter">attrName<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>attrName <span class="token operator">===</span> <span class="token string">'name'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token string">'Stranger'</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
GreetingElement<span class="token punctuation">.</span>observedAttributes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'hey-there'</span><span class="token punctuation">,</span> GreetingElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>GreetingElement.observedAttributes</code>属性用来指定白名单里面的属性，上例是<code v-pre>name</code>属性。只要这个属性的值发生变化，就会自动调用<code v-pre>attributeChangedCallback</code>方法。</p>
<p>使用上面这个类的方法如下。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hey-there</span><span class="token punctuation">></span></span>Greeting<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hey-there</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hey-there</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Potch<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Personalized Greeting<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hey-there</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>attributeChangedCallback</code>方法主要用于外部传入的属性，就像上面例子中<code v-pre>name=&quot;Potch&quot;</code>。</p>
<p>生命周期方法调用的顺序如下：<code v-pre>constructor</code> -&gt; <code v-pre>attributeChangedCallback</code> -&gt; <code v-pre>connectedCallback</code>，即<code v-pre>attributeChangedCallback</code>早于<code v-pre>connectedCallback</code>执行。这是因为<code v-pre>attributeChangedCallback</code>相当于调整配置，应该在插入 DOM 之前完成。</p>
<p>下面的例子能够更明显地看出这一点，在插入 DOM 前修改 Custome Element 的颜色。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'##container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">attributeChangedCallback</span><span class="token punctuation">(</span><span class="token parameter">attr<span class="token punctuation">,</span> oldVal<span class="token punctuation">,</span> newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>attr <span class="token operator">===</span> <span class="token string">'disabled'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">'##808080'</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">'##ffffff'</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义属性和方法" tabindex="-1"><a class="header-anchor" href="#自定义属性和方法" aria-hidden="true">#</a> 自定义属性和方法</h4>
<p>Custom Element 允许自定义属性或方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>

  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something in this method</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>doSomething()</code>就是<code v-pre>MyElement</code>的自定义方法，使用方法如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'my-element'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义属性可以使用 JavaScript class 的所有语法，因此也可以设置取值器和赋值器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>

  <span class="token keyword">set</span> <span class="token function">disabled</span><span class="token punctuation">(</span><span class="token parameter">isDisabled</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>isDisabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">disabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中的取值器和赋值器，可用于<code v-pre>&lt;my-input name=&quot;name&quot; disabled&gt;</code>这样的用法。</p>
<h4 id="window-customelements-whendefined" tabindex="-1"><a class="header-anchor" href="#window-customelements-whendefined" aria-hidden="true">#</a> window.customElements.whenDefined()</h4>
<p><code v-pre>window.customElements.whenDefined()</code>方法在一个 Custom Element 被<code v-pre>customElements.define()</code>方法定义以后执行，用于“升级”一个元素。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>customElements<span class="token punctuation">.</span><span class="token function">whenDefined</span><span class="token punctuation">(</span><span class="token string">'my-element'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// my-element is now defined</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果某个属性值发生变化时，需要做出反应，可以将它放入<code v-pre>observedAttributes</code>数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">get</span> <span class="token function">observedAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'disabled'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> shadowRoot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'open'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shadowRoot<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;style>
        .disabled {
          opacity: 0.4;
        }
      &lt;/style>

      &lt;div id="container">&lt;/div>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shadowRoot</span><span class="token punctuation">(</span><span class="token string">'##container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">attributeChangedCallback</span><span class="token punctuation">(</span><span class="token parameter">attr<span class="token punctuation">,</span> oldVal<span class="token punctuation">,</span> newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>attr <span class="token operator">===</span> <span class="token string">'disabled'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h4>
<p>自定义元素的原型有一些属性，用来指定回调函数，在特定事件发生时触发。</p>
<ul>
<li><strong>createdCallback</strong>：实例生成时触发</li>
<li><strong>attachedCallback</strong>：实例插入HTML文档时触发</li>
<li><strong>detachedCallback</strong>：实例从HTML文档移除时触发</li>
<li><strong>attributeChangedCallback(attrName, oldVal, newVal)</strong>：实例的属性发生改变时（添加、移除、更新）触发</li>
</ul>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">HTMLElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

proto<span class="token punctuation">.</span><span class="token function-variable function">createdCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'created'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'This is a my-demo element!'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

proto<span class="token punctuation">.</span><span class="token function-variable function">attachedCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'attached'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> XFoo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">'x-foo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">prototype</span><span class="token operator">:</span> proto<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用回调函数，可以方便地在自定义元素中插入HTML语句。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> XFooProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">HTMLElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

XFooProto<span class="token punctuation">.</span><span class="token function-variable function">createdCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"&lt;b>I'm an x-foo-with-markup!&lt;/b>"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> XFoo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">'x-foo-with-markup'</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">prototype</span><span class="token operator">:</span> XFooProto<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码定义了createdCallback回调函数，生成实例时，该函数运行，插入如下的HTML语句。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-foo-with-markup</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>I'm an x-foo-with-markup!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-foo-with-markup</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="custom-element-的子元素" tabindex="-1"><a class="header-anchor" href="#custom-element-的子元素" aria-hidden="true">#</a> Custom Element 的子元素</h4>
<p>用户使用 Custom Element 时候，可以在内部放置子元素。Custom Element 提供<code v-pre>&lt;slot&gt;</code>用来引用内部内容。</p>
<p>下面的<code v-pre>&lt;image-gallery&gt;</code>是一个 Custom Element。用户在里面放置了子元素。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image-gallery</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bar.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image-gallery</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;image-gallery&gt;</code>内部的模板如下。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>images<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终合成的代码如下。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>images<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bar.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="template-标签" tabindex="-1"><a class="header-anchor" href="#template-标签" aria-hidden="true">#</a> <code v-pre>&lt;template&gt;</code>标签</h3>
<h4 id="基本用法-3" tabindex="-1"><a class="header-anchor" href="#基本用法-3" aria-hidden="true">#</a> 基本用法</h4>
<p><code v-pre>&lt;template&gt;</code>标签表示组件的 HTML 代码模板。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>This won't display!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"this won't alert!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;template&gt;</code>内部就是正常的 HTML 代码，浏览器不会将这些代码加入 DOM。</p>
<p>下面的代码会将模板内部的代码插入 DOM。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> template <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'template'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，模板内部的代码只能插入一次，如果第二次执行上面的代码就会报错。</p>
<p>如果需要多次插入模板，可以复制<code v-pre>&lt;template&gt;</code>内部代码，然后再插入。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>cloneNode()</code>方法的参数<code v-pre>true</code>表示复制包含所有子节点。</p>
<p>接受<code v-pre>&lt;template&gt;</code>插入的元素，叫做宿主元素（host）。在<code v-pre>&lt;template&gt;</code>之中，可以对宿主元素设置样式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">:host</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> ##f8f8f8<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">:host(:hover)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> ##ccc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="document-importnode" tabindex="-1"><a class="header-anchor" href="#document-importnode" aria-hidden="true">#</a> document.importNode()</h4>
<p>document.importNode方法用于克隆外部文档的DOM节点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"iframe"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> oldNode <span class="token operator">=</span> iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myNode"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">importNode</span><span class="token punctuation">(</span>oldNode<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"container"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子是将iframe窗口之中的节点oldNode，克隆进入当前文档。</p>
<p>注意，克隆节点之后，还必须用appendChild方法将其加入当前文档，否则不会显示。换个角度说，这意味着插入外部文档节点之前，必须用document.importNode方法先将这个节点准备好。</p>
<p>document.importNode方法接受两个参数，第一个参数是外部文档的DOM节点，第二个参数是一个布尔值，表示是否连同子节点一起克隆，默认为false。大多数情况下，必须显式地将第二个参数设为true。</p>
<h3 id="shadow-dom" tabindex="-1"><a class="header-anchor" href="#shadow-dom" aria-hidden="true">#</a> Shadow DOM</h3>
<p>所谓 Shadow DOM 指的是，浏览器将模板、样式表、属性、JavaScript 码等，封装成一个独立的 DOM 元素。外部的设置无法影响到其内部，而内部的设置也不会影响到外部，与浏览器处理原生网页元素（比如<code v-pre>&lt;video&gt;</code>元素）的方式很像。</p>
<p>Shadow DOM 最大的好处有两个，一是可以向用户隐藏细节，直接提供组件，二是可以封装内部样式表，不会影响到外部。</p>
<p>Custom Element 内部有一个 Shadow Root。它就是接入外部 DOM 的根元素。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// attachShadow() creates a shadow root.</span>
<span class="token keyword">let</span> shadow <span class="token operator">=</span> div<span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'open'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> inner <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inner<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">'Hiding in the shadows'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// shadow root supports the normal appendChild method.</span>
shadow<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>inner<span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// empty</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>&lt;div&gt;</code>包含<code v-pre>&lt;b&gt;</code>，但是 DOM 方法无法看到它，而且页面的样式也影响不到它。</p>
<p><code v-pre>mode: 'open'</code>表示开发者工具里面，可以看到 Custom HTML 内部的 DOM，并与之互动。<code v-pre>mode: closed</code>将不允许 Custom Element 的使用者与内部代码互动。</p>
<p>Shadow root 内部通过指定<code v-pre>innerHTML</code>属性或使用<code v-pre>&lt;template&gt;</code>元素，指定 HTML 代码。</p>
<p>Shadow DOM 内部可以通过向根添加<code v-pre>&lt;style&gt;</code>（或<code v-pre>&lt;link&gt;</code>）来设置样式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> style <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'style'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
style<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'b { font-weight: bolder; color: red; }'</span><span class="token punctuation">;</span>
shadowRoot<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> inner <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inner<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"I'm bolder in the shadows"</span><span class="token punctuation">;</span>
shadowRoot<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>inner<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码添加的样式，只会影响 Shadow DOM 内的元素。</p>
<p>Custom Element 的 CSS 样式内部，<code v-pre>:root</code>表示这个根元素。比如，Custom Element 默认是行内元素，下面代码可以改成块级元素。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">:host</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:host([disabled])</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，外部样式会覆盖掉<code v-pre>:host</code>的设置，比如下面的样式会覆盖<code v-pre>:host</code>。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">my-element</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 CSS 的自定义属性，可以为 Custom Element 可以被覆盖的默认样式。下面是外部样式，<code v-pre>my-element</code>是 Custom Element。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">my-element</span> <span class="token punctuation">{</span>
  <span class="token property">--background-color</span><span class="token punctuation">:</span> ##ff0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，内部可以指定默认样式，用于用户没有指定颜色的情况。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">:host</span> <span class="token punctuation">{</span>
  <span class="token property">--background-color</span><span class="token punctuation">:</span> ##ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">##container</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子是为 Shadow DOM 加上独立的模板。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nameTag<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nameTagTemplate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.outer</span> <span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 2px solid brown<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>boilerplate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Hi! My name is
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Bob
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码是一个<code v-pre>div</code>元素和模板。接下来，就是要把模板应用到<code v-pre>div</code>元素上。</p>
<h3 id="html-import" tabindex="-1"><a class="header-anchor" href="#html-import" aria-hidden="true">#</a> HTML Import</h3>
<h4 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h4>
<p>长久以来，网页可以加载外部的样式表、脚本、图片、多媒体，却无法方便地加载其他网页，iframe和ajax都只能提供部分的解决方案，且有很大的局限。HTML Import就是为了解决加载外部网页这个问题，而提出来的。</p>
<p>下面代码用于测试当前浏览器是否支持HTML Import。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">supportsImports</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'import'</span> <span class="token keyword">in</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'link'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">supportsImports</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 支持</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不支持</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML Import用于将外部的HTML文档加载进当前文档。我们可以将组件的HTML、CSS、JavaScript封装在一个文件里，然后使用下面的代码插入需要使用该组件的网页。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>import<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在网页中插入一个对话框组件，该组建封装在<code v-pre>dialog.html</code>文件。注意，dialog.html文件中的样式和JavaScript脚本，都对所插入的整个网页有效。</p>
<p>假定A网页通过HTML Import加载了B网页，即B是一个组件，那么B网页的样式表和脚本，对A网页也有效（准确得说，只有style标签中的样式对A网页有效，link标签加载的样式表对A网页无效）。所以可以把多个样式表和脚本，都放在B网页中，都从那里加载。这对大型的框架，是很方便的加载方法。</p>
<p>如果B与A不在同一个域，那么A所在的域必须打开CORS。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- example.com必须打开CORS --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>import<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://example.com/elements.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了用link标签，也可以用JavaScript调用link元素，完成HTML Import。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'link'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
link<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">'import'</span><span class="token punctuation">;</span>
link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'file.html'</span>
link<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
link<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML Import加载成功时，会在link元素上触发load事件，加载失败时（比如404错误）会触发error事件，可以对这两个事件指定回调函数。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">handleLoad</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Loaded import: '</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">handleError</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Error loading import: '</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>import<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file.html<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">handleLoad</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token special-attr"><span class="token attr-name">onerror</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">handleError</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，handleLoad和handleError函数的定义，必须在link元素的前面。因为浏览器元素遇到link元素时，立刻解析并加载外部网页（同步操作），如果这时没有对这两个函数定义，就会报错。</p>
<p>HTML Import是同步加载，会阻塞当前网页的渲染，这主要是为了样式表的考虑，因为外部网页的样式表对当前网页也有效。如果想避免这一点，可以为link元素加上async属性。当然，这也意味着，如果外部网页定义了组件，就不能立即使用了，必须等HTML Import完成，才能使用。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>import<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/path/to/import_that_takes_5secs.html<span class="token punctuation">"</span></span> <span class="token attr-name">async</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，HTML Import不会阻塞当前网页的解析和脚本执行（即阻塞渲染）。这意味着在加载的同时，主页面的脚本会继续执行。</p>
<p>最后，HTML Import支持多重加载，即被加载的网页同时又加载其他网页。如果这些网页都重复加载同一个外部脚本，浏览器只会抓取并执行一次该脚本。比如，A网页加载了B网页，它们各自都需要加载jQuery，浏览器只会加载一次jQuery。</p>
<h4 id="脚本的执行" tabindex="-1"><a class="header-anchor" href="#脚本的执行" aria-hidden="true">#</a> 脚本的执行</h4>
<p>外部网页的内容，并不会自动显示在当前网页中，它只是储存在浏览器中，等到被调用的时候才加载进入当前网页。为了加载网页网页，必须用DOM操作获取加载的内容。具体来说，就是使用link元素的import属性，来获取加载的内容。这一点与iframe完全不同。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'link[rel="import"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>import<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>发生以下情况时，link.import属性为null。</p>
<ul>
<li>浏览器不支持HTML Import</li>
<li>link元素没有声明<code v-pre>rel=&quot;import&quot;</code></li>
<li>link元素没有被加入DOM</li>
<li>link元素已经从DOM中移除</li>
<li>对方域名没有打开CORS</li>
</ul>
<p>下面代码用于从加载的外部网页选取id为template的元素，然后将其克隆后加入当前网页的DOM。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> el <span class="token operator">=</span> linkElement<span class="token punctuation">.</span>import<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'##template'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前网页可以获取外部网页，反过来也一样，外部网页中的脚本，不仅可以获取本身的DOM，还可以获取link元素所在的当前网页的DOM。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 以下代码位于被加载（import）的外部网页</span>

<span class="token comment">// importDoc指向被加载的DOM</span>
<span class="token keyword">var</span> importDoc <span class="token operator">=</span> document<span class="token punctuation">.</span>currentScript<span class="token punctuation">.</span>ownerDocument<span class="token punctuation">;</span>

<span class="token comment">// mainDoc指向主文档的DOM</span>
<span class="token keyword">var</span> mainDoc <span class="token operator">=</span> document<span class="token punctuation">;</span>

<span class="token comment">// 将子页面的样式表添加主文档</span>
<span class="token keyword">var</span> styles <span class="token operator">=</span> importDoc<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'link[rel="stylesheet"]'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mainDoc<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>styles<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将所加载的外部网页的样式表，添加进当前网页。</p>
<p>被加载的外部网页的脚本是直接在当前网页的上下文执行，因为它的<code v-pre>window.document</code>指的是当前网页的document，而且它定义的函数可以被当前网页的脚本直接引用。</p>
<h4 id="web-component的封装" tabindex="-1"><a class="header-anchor" href="#web-component的封装" aria-hidden="true">#</a> Web Component的封装</h4>
<p>对于Web Component来说，HTML Import的一个重要应用是在所加载的网页中，自动登记Custom Element。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 定义并登记&lt;say-hi></span>
  <span class="token keyword">var</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">HTMLElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

  proto<span class="token punctuation">.</span><span class="token function-variable function">createdCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'Hello, &lt;b>'</span> <span class="token operator">+</span>
                     <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'?'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'&lt;/b>'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  document<span class="token punctuation">.</span><span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">'say-hi'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">prototype</span><span class="token operator">:</span> proto<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>t<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">::content > *</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>I'm a shadow-element using Shadow DOM!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>content</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>content</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> importDoc <span class="token operator">=</span> document<span class="token punctuation">.</span>currentScript<span class="token punctuation">.</span>ownerDocument<span class="token punctuation">;</span> <span class="token comment">//指向被加载的网页</span>

    <span class="token comment">// 定义并登记&lt;shadow-element></span>
    <span class="token keyword">var</span> proto2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">HTMLElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

    proto2<span class="token punctuation">.</span><span class="token function-variable function">createdCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> template <span class="token operator">=</span> importDoc<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'##t'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> clone <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">importNode</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span>content<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> root <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createShadowRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    document<span class="token punctuation">.</span><span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">'shadow-element'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">prototype</span><span class="token operator">:</span> proto2<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码定义并登记了两个元素：&lt;say-hi&gt;和&lt;shadow-element&gt;。在主页面使用这两个元素，非常简单。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>import<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>elements.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>say-hi</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Eric<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>say-hi</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shadow-element</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>( I'm in the light dom )<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>shadow-element</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不难想到，这意味着HTML Import使得Web Component变得可分享了，其他人只要拷贝<code v-pre>elements.html</code>，就可以在自己的页面中使用了。</p>
<h3 id="polymer-js" tabindex="-1"><a class="header-anchor" href="#polymer-js" aria-hidden="true">#</a> Polymer.js</h3>
<p>Web Components是非常新的技术，为了让老式浏览器也能使用，Google推出了一个函数库<a href="http://www.polymer-project.org/" target="_blank" rel="noopener noreferrer">Polymer.js<ExternalLinkIcon/></a>。这个库不仅可以帮助开发者，定义自己的网页元素，还提供许多预先制作好的组件，可以直接使用。</p>
<h4 id="直接使用的组件" tabindex="-1"><a class="header-anchor" href="#直接使用的组件" aria-hidden="true">#</a> 直接使用的组件</h4>
<p>Polymer.js提供的组件，可以直接插入网页，比如下面的google-map。。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>components/platform/platform.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>import<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>google-map.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>google-map</span> <span class="token attr-name">lat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>37.790<span class="token punctuation">"</span></span> <span class="token attr-name">long</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-122.390<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>google-map</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再比如，在网页中插入一个时钟，可以直接使用下面的标签。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polymer-ui-clock</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>polymer-ui-clock</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义标签与其他标签的用法完全相同，也可以使用CSS指定它的样式。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">polymer-ui-clock</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 320px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../assets/glass.png"</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 4px solid <span class="token function">rgba</span><span class="token punctuation">(</span>32<span class="token punctuation">,</span> 32<span class="token punctuation">,</span> 32<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h4>
<p>如果使用bower安装，至少需要安装platform和core components这两个核心部分。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bower <span class="token function">install</span> <span class="token parameter variable">--save</span> Polymer/platform
bower <span class="token function">install</span> <span class="token parameter variable">--save</span> Polymer/polymer

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以安装所有预先定义的界面组件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bower <span class="token function">install</span> Polymer/core-elements
bower <span class="token function">install</span> Polymer/polymer-ui-elements

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以只安装单个组件。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>bower <span class="token function">install</span> Polymer/polymer-ui-accordion

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这时，组件根目录下的bower.json，会指明该组件的依赖的模块，这些模块会被自动安装。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"polymer-ui-accordion"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"polymer"</span><span class="token operator">:</span> <span class="token string">"Polymer/polymer##0.2.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"polymer-selector"</span><span class="token operator">:</span> <span class="token string">"Polymer/polymer-selector##0.2.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"polymer-ui-collapsible"</span><span class="token operator">:</span> <span class="token string">"Polymer/polymer-ui-collapsible##0.2.0"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"0.2.0"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a> 自定义组件</h4>
<p>下面是一个最简单的自定义组件的例子。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>import<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../bower_components/polymer/polymer.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polymer-element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lorem-element<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>polymer-element</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码定义了lorem-element组件。它分成三个部分。</p>
<p><strong>（1）import命令</strong></p>
<p>import命令表示载入核心模块</p>
<p><strong>（2）polymer-element标签</strong></p>
<p>polymer-element标签定义了组件的名称（注意，组件名称中必须包含连字符）。它还可以使用extends属性，表示组件基于某种网页元素。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polymer-element</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w3c-disclosure<span class="token punctuation">"</span></span> <span class="token attr-name">extends</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）template标签</strong></p>
<p>template标签定义了网页元素的模板。</p>
<h4 id="组件的使用方法" tabindex="-1"><a class="header-anchor" href="#组件的使用方法" aria-hidden="true">#</a> 组件的使用方法</h4>
<p>在调用组件的网页中，首先加载polymer.js库和组件文件。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>components/platform/platform.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>import<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w3c-disclosure.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，分成两种情况。如果组件不基于任何现有的HTML网页元素（即定义的时候没有使用extends属性），则可以直接使用组件。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lorem-element</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lorem-element</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这时网页上就会显示一行字“Lorem ipsum”。</p>
<p>如果组件是基于（extends）现有的网页元素，则必须在该种元素上使用is属性指定组件。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;button is="w3c-disclosure">Expand section 1&lt;/button>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考链接-12" tabindex="-1"><a class="header-anchor" href="#参考链接-12" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li><a href="https://hacks.mozilla.org/2018/11/the-power-of-web-components/" target="_blank" rel="noopener noreferrer">The Power of Web Components<ExternalLinkIcon/></a>, Potch</li>
<li>Todd Motto, <a href="http://toddmotto.com/web-components-concepts-shadow-dom-imports-templates-custom-elements/" target="_blank" rel="noopener noreferrer">Web Components and concepts, ShadowDOM, imports, templates, custom elements<ExternalLinkIcon/></a></li>
<li>Dominic Cooney, <a href="http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/" target="_blank" rel="noopener noreferrer">Shadow DOM 101<ExternalLinkIcon/></a></li>
<li>Eric Bidelman, <a href="http://www.html5rocks.com/en/tutorials/webcomponents/template/" target="_blank" rel="noopener noreferrer">HTML's New Template Tag<ExternalLinkIcon/></a></li>
<li>Rey Bango, <a href="http://code.tutsplus.com/tutorials/using-polymer-to-create-web-components--cms-20475" target="_blank" rel="noopener noreferrer">Using Polymer to Create Web Components<ExternalLinkIcon/></a></li>
<li>Cédric Trévisan, Building an Accessible Disclosure Button – using Web Components](<a href="http://blog.paciellogroup.com/2014/06/accessible-disclosure-button-using-web-components/" target="_blank" rel="noopener noreferrer">http://blog.paciellogroup.com/2014/06/accessible-disclosure-button-using-web-components/<ExternalLinkIcon/></a>)</li>
<li>Eric Bidelman, <a href="http://www.html5rocks.com/en/tutorials/webcomponents/customelements/" target="_blank" rel="noopener noreferrer">Custom Elements: defining new elements in HTML<ExternalLinkIcon/></a></li>
<li>Eric Bidelman, <a href="http://www.html5rocks.com/en/tutorials/webcomponents/imports/" target="_blank" rel="noopener noreferrer">HTML Imports<ExternalLinkIcon/></a></li>
<li>TJ VanToll, <a href="http://developer.telerik.com/featured/web-components-ready-production/" target="_blank" rel="noopener noreferrer">Why Web Components Are Ready For Production<ExternalLinkIcon/></a></li>
<li>Chris Bateman, <a href="http://cbateman.com/blog/a-no-nonsense-guide-to-web-components-part-1-the-specs/" target="_blank" rel="noopener noreferrer">A No-Nonsense Guide to Web Components, Part 1: The Specs<ExternalLinkIcon/></a></li>
<li><a href="https://blog.usejournal.com/web-components-will-replace-your-frontend-framework-3b17a580831c" target="_blank" rel="noopener noreferrer">Web Components will replace your frontend framework<ExternalLinkIcon/></a>, Danny Moerkerke</li>
<li><a href="https://developers.google.com/web/fundamentals/web-components/customelements##extend" target="_blank" rel="noopener noreferrer">Custom Elements v1: Reusable Web Components<ExternalLinkIcon/></a>, Eric Bidelman</li>
</ul>
<h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2>
<p>WebSocket 是一种网络通信协议，很多高级功能都需要它。</p>
<p>初次接触 WebSocket 的人，都会问同样的问题：我们已经有了 HTTP 协议，为什么还需要另一个协议？它能带来什么好处？</p>
<p>答案很简单，因为 HTTP 协议有一个缺陷：通信只能由客户端发起。举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。HTTP 协议的这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用“轮询”：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。</p>
<p>轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）。因此，工程师们一直在思考，有没有更好的方法。WebSocket 就是这样发明的。</p>
<h3 id="简介-5" tabindex="-1"><a class="header-anchor" href="#简介-5" aria-hidden="true">#</a> 简介</h3>
<p>WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。</p>
<p>它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。WebSocket 允许服务器端与客户端进行全双工（full-duplex）的通信。举例来说，HTTP 协议有点像发电子邮件，发出后必须等待对方回信；WebSocket 则是像打电话，服务器端和客户端可以同时向对方发送数据，它们之间存着一条持续打开的数据通道。</p>
<p>其他特点包括：</p>
<p>（1）建立在 TCP 协议之上，服务器端的实现比较容易。</p>
<p>（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。</p>
<p>（3）数据格式比较轻量，性能开销小，通信高效。</p>
<p>（4）可以发送文本，也可以发送二进制数据。</p>
<p>（5）没有同源限制，客户端可以与任意服务器通信，完全可以取代 Ajax。</p>
<p>（6）协议标识符是<code v-pre>ws</code>（如果加密，则为<code v-pre>wss</code>，对应 HTTPS 协议），服务器网址就是 URL。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>ws://example.com:80/some/path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="websocket-握手" tabindex="-1"><a class="header-anchor" href="#websocket-握手" aria-hidden="true">#</a> WebSocket 握手</h3>
<p>浏览器发出的 WebSocket 握手请求类似于下面的样子：</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Upgrade</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">example.com</span></span>
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">null</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Key</span><span class="token punctuation">:</span> <span class="token header-value">sN9cRrP/n9NdMgdcy2VJFQ==</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Version</span><span class="token punctuation">:</span> <span class="token header-value">13</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的头信息之中，有一个 HTTP 头是<code v-pre>Upgrade</code>。HTTP1.1 协议规定，<code v-pre>Upgrade</code>字段表示将通信协议从<code v-pre>HTTP/1.1</code>转向该字段指定的协议。<code v-pre>Connection</code>字段表示浏览器通知服务器，如果可以的话，就升级到 WebSocket 协议。<code v-pre>Origin</code>字段用于提供请求发出的域名，供服务器验证是否许可的范围内（服务器也可以不验证）。<code v-pre>Sec-WebSocket-Key</code>则是用于握手协议的密钥，是 Base64 编码的16字节随机字符串。</p>
<p>服务器的 WebSocket 回应如下。</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">101</span> <span class="token reason-phrase string">Switching Protocols</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Upgrade</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Accept</span><span class="token punctuation">:</span> <span class="token header-value">fFBooB7FAkLlXgRSz0BT3v4hq5s=</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Origin</span><span class="token punctuation">:</span> <span class="token header-value">null</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Location</span><span class="token punctuation">:</span> <span class="token header-value">ws://example.com/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，服务器同样用<code v-pre>Connection</code>字段通知浏览器，需要改变协议。<code v-pre>Sec-WebSocket-Accept</code>字段是服务器在浏览器提供的<code v-pre>Sec-WebSocket-Key</code>字符串后面，添加 <a href="http://tools.ietf.org/html/rfc6455" target="_blank" rel="noopener noreferrer">RFC6456<ExternalLinkIcon/></a> 标准规定的“258EAFA5-E914-47DA-95CA-C5AB0DC85B11”字符串，然后再取 SHA-1 的哈希值。浏览器将对这个值进行验证，以证明确实是目标服务器回应了 WebSocket 请求。<code v-pre>Sec-WebSocket-Location</code>字段表示进行通信的 WebSocket 网址。</p>
<p>完成握手以后，WebSocket 协议就在 TCP 协议之上，开始传送数据。</p>
<h3 id="客户端的简单示例" tabindex="-1"><a class="header-anchor" href="#客户端的简单示例" aria-hidden="true">#</a> 客户端的简单示例</h3>
<p>WebSocket 的用法相当简单。</p>
<p>下面是一个网页脚本的例子，基本上一眼就能明白。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">'wss://echo.websocket.org'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Connection open ...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello WebSockets!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received Message: '</span> <span class="token operator">+</span> evt<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Connection closed.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端-api-1" tabindex="-1"><a class="header-anchor" href="#客户端-api-1" aria-hidden="true">#</a> 客户端 API</h3>
<p>浏览器对 WebSocket 协议的处理，无非就是三件事。</p>
<ul>
<li>建立连接和断开连接</li>
<li>发送数据和接收数据</li>
<li>处理错误</li>
</ul>
<h4 id="构造函数-websocket" tabindex="-1"><a class="header-anchor" href="#构造函数-websocket" aria-hidden="true">#</a> 构造函数 WebSocket</h4>
<p><code v-pre>WebSocket</code>对象作为一个构造函数，用于新建<code v-pre>WebSocket</code>实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">'ws://localhost:8080'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面语句之后，客户端就会与服务器进行连接。</p>
<h4 id="websocket-readystate" tabindex="-1"><a class="header-anchor" href="#websocket-readystate" aria-hidden="true">#</a> webSocket.readyState</h4>
<p><code v-pre>readyState</code>属性返回实例对象的当前状态，共有四种。</p>
<ul>
<li>CONNECTING：值为0，表示正在连接。</li>
<li>OPEN：值为1，表示连接成功，可以通信了。</li>
<li>CLOSING：值为2，表示连接正在关闭。</li>
<li>CLOSED：值为3，表示连接已经关闭，或者打开连接失败。</li>
</ul>
<p>下面是一个示例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>ws<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CONNECTING</span><span class="token operator">:</span>
    <span class="token comment">// do something</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">OPEN</span><span class="token operator">:</span>
    <span class="token comment">// do something</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CLOSING</span><span class="token operator">:</span>
    <span class="token comment">// do something</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> WebSocket<span class="token punctuation">.</span><span class="token constant">CLOSED</span><span class="token operator">:</span>
    <span class="token comment">// do something</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token comment">// this never happens</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="websocket-onopen" tabindex="-1"><a class="header-anchor" href="#websocket-onopen" aria-hidden="true">#</a> webSocket.onopen</h4>
<p>实例对象的<code v-pre>onopen</code>属性，用于指定连接成功后的回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello Server!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要指定多个回调函数，可以使用<code v-pre>addEventListener</code>方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'open'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello Server!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="websocket-onclose" tabindex="-1"><a class="header-anchor" href="#websocket-onclose" aria-hidden="true">#</a> webSocket.onclose</h4>
<p>实例对象的<code v-pre>onclose</code>属性，用于指定连接关闭后的回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> code <span class="token operator">=</span> event<span class="token punctuation">.</span>code<span class="token punctuation">;</span>
  <span class="token keyword">var</span> reason <span class="token operator">=</span> event<span class="token punctuation">.</span>reason<span class="token punctuation">;</span>
  <span class="token keyword">var</span> wasClean <span class="token operator">=</span> event<span class="token punctuation">.</span>wasClean<span class="token punctuation">;</span>
  <span class="token comment">// handle close event</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"close"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> code <span class="token operator">=</span> event<span class="token punctuation">.</span>code<span class="token punctuation">;</span>
  <span class="token keyword">var</span> reason <span class="token operator">=</span> event<span class="token punctuation">.</span>reason<span class="token punctuation">;</span>
  <span class="token keyword">var</span> wasClean <span class="token operator">=</span> event<span class="token punctuation">.</span>wasClean<span class="token punctuation">;</span>
  <span class="token comment">// handle close event</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="websocket-onmessage" tabindex="-1"><a class="header-anchor" href="#websocket-onmessage" aria-hidden="true">#</a> webSocket.onmessage</h4>
<p>实例对象的<code v-pre>onmessage</code>属性，用于指定收到服务器数据后的回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token comment">// 处理数据</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ws<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token comment">// 处理数据</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，服务器数据可能是文本，也可能是二进制数据（<code v-pre>blob</code>对象或<code v-pre>Arraybuffer</code>对象）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>typeOf event<span class="token punctuation">.</span>data <span class="token operator">===</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Received data string"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data <span class="token keyword">instanceof</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> buffer <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Received arraybuffer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了动态判断收到的数据类型，也可以使用<code v-pre>binaryType</code>属性，显式指定收到的二进制数据类型。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 收到的是 blob 数据</span>
ws<span class="token punctuation">.</span>binaryType <span class="token operator">=</span> <span class="token string">"blob"</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 收到的是 ArrayBuffer 数据</span>
ws<span class="token punctuation">.</span>binaryType <span class="token operator">=</span> <span class="token string">"arraybuffer"</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">.</span>byteLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="websocket-send" tabindex="-1"><a class="header-anchor" href="#websocket-send" aria-hidden="true">#</a> webSocket.send()</h4>
<p>实例对象的<code v-pre>send()</code>方法用于向服务器发送数据。</p>
<p>发送文本的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'your message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发送 Blob 对象的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> file <span class="token operator">=</span> document
  <span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input[type="file"]'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发送 ArrayBuffer 对象的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Sending canvas ImageData as ArrayBuffer</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> canvas_context<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> binary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> img<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  binary<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> img<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>binary<span class="token punctuation">.</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="websocket-bufferedamount" tabindex="-1"><a class="header-anchor" href="#websocket-bufferedamount" aria-hidden="true">#</a> webSocket.bufferedAmount</h4>
<p>实例对象的<code v-pre>bufferedAmount</code>属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">10000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>socket<span class="token punctuation">.</span>bufferedAmount <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 发送完毕</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 发送还没结束</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="websocket-onerror" tabindex="-1"><a class="header-anchor" href="#websocket-onerror" aria-hidden="true">#</a> webSocket.onerror</h4>
<p>实例对象的<code v-pre>onerror</code>属性，用于指定报错时的回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>socket<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle error event</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle error event</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="websocket-服务器" tabindex="-1"><a class="header-anchor" href="#websocket-服务器" aria-hidden="true">#</a> WebSocket 服务器</h3>
<p>WebSocket 协议需要服务器支持。各种服务器的实现，可以查看维基百科的<a href="https://en.wikipedia.org/wiki/Comparison_of_WebSocket_implementations" target="_blank" rel="noopener noreferrer">列表<ExternalLinkIcon/></a>。</p>
<p>常用的 Node 实现有以下三种。</p>
<ul>
<li><a href="https://github.com/uWebSockets/uWebSockets" target="_blank" rel="noopener noreferrer">µWebSockets<ExternalLinkIcon/></a></li>
<li><a href="http://socket.io/" target="_blank" rel="noopener noreferrer">Socket.IO<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/theturtle32/WebSocket-Node" target="_blank" rel="noopener noreferrer">WebSocket-Node<ExternalLinkIcon/></a></li>
</ul>
<p>具体的用法请查看它们的文档，本教程不详细介绍了。</p>
<h3 id="参考链接-13" tabindex="-1"><a class="header-anchor" href="#参考链接-13" aria-hidden="true">#</a> 参考链接</h3>
<ul>
<li>Ryan Stewart, <a href="http://www.adobe.com/devnet/html5/articles/real-time-data-exchange-in-html5-with-websockets.html" target="_blank" rel="noopener noreferrer">Real-time data exchange in HTML5 with WebSockets<ExternalLinkIcon/></a></li>
<li>Malte Ubl &amp; Eiji Kitamura，<a href="https://www.html5rocks.com/en/tutorials/websockets/basics/" target="_blank" rel="noopener noreferrer">Introducing WebSockets: Bringing Sockets to the Web<ExternalLinkIcon/></a></li>
<li>Jack Lawson, <a href="http://buildnewgames.com/websockets/" target="_blank" rel="noopener noreferrer">WebSockets: A Guide<ExternalLinkIcon/></a></li>
<li>Michael W., <a href="http://codular.com/node-web-sockets" target="_blank" rel="noopener noreferrer">Starting with Node and Web Sockets<ExternalLinkIcon/></a></li>
<li>Jesse Cravens, <a href="http://tech.pro/tutorial/1167/introduction-to-websockets" target="_blank" rel="noopener noreferrer">Introduction to WebSockets<ExternalLinkIcon/></a></li>
<li>Matt West, <a href="http://blog.teamtreehouse.com/an-introduction-to-websockets" target="_blank" rel="noopener noreferrer">An Introduction to WebSockets<ExternalLinkIcon/></a></li>
<li>Maciej Sopyło, <a href="http://net.tutsplus.com/tutorials/javascript-ajax/node-js-better-performance-with-socket-io-and-dot/" target="_blank" rel="noopener noreferrer">Node.js: Better Performance With Socket.IO and doT<ExternalLinkIcon/></a></li>
<li>Jos Dirksen, <a href="http://www.smartjava.org/content/capture-canvas-and-webgl-output-video-using-websockets" target="_blank" rel="noopener noreferrer">Capture Canvas and WebGL output as video using websockets<ExternalLinkIcon/></a></li>
<li>Fionn Kellehe, <a href="https://nodesource.com/blog/understanding-socketio" target="_blank" rel="noopener noreferrer">Understanding Socket.IO<ExternalLinkIcon/></a></li>
<li><a href="http://cjihrig.com/blog/how-to-use-websockets/" target="_blank" rel="noopener noreferrer">How to Use WebSockets<ExternalLinkIcon/></a></li>
<li><a href="https://www.tutorialspoint.com/websockets/websockets_send_receive_messages.htm" target="_blank" rel="noopener noreferrer">WebSockets - Send &amp; Receive Messages<ExternalLinkIcon/></a></li>
</ul>
</div></template>


