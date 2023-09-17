<template><div><h2 id="typescript基础语法入门" tabindex="-1"><a class="header-anchor" href="#typescript基础语法入门" aria-hidden="true">#</a> TypeScript基础语法入门</h2>
<h3 id="typescript究竟是什么" tabindex="-1"><a class="header-anchor" href="#typescript究竟是什么" aria-hidden="true">#</a> TypeScript究竟是什么？</h3>
<p>他主要就是想把JavaScript里面不完美的一些语法来进行一个提升</p>
<p>就像官网中所说的</p>
<blockquote>
<p>TypeScript is <strong>JavaScript with syntax for types.</strong></p>
</blockquote>
<p>例如我们看下面的这段代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">""</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在JavaScript里面，会打印出来hello，因为在比较的时候，会进行类型转换。</p>
<p>下面在看一个更加诡异的</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;</span>x<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309121450488.png" alt="image-20230912145043418" loading="lazy"></p>
<p>这个很简单。首先是比较1是否小于41 之后会转换为true</p>
<p>true&lt;3这个会转换为1&lt;3 所以就会进行打印了</p>
<p>typescript就是在JavaScript的基础上。引入了<strong>类型</strong>的概念。做了一些优化</p>
<p>我们把之前写的代码放入到ts中</p>
<p>可以发现有明显的报错</p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309121455290.png" alt="image-20230912145520217" loading="lazy"></p>
<p>之后我们再看一个例子，首先看他的JavaScript版本</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>function getDistance(point1, point2) {
    return [point2.x - point1.x, point2.y - point1.y]
}

getDistance({
    x: 1,
    y: 1
}, {
    x: 2,
    y: 2
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面来看typescript</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span><span class="token operator">=</span><span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>y <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getDistance</span><span class="token punctuation">(</span>point1<span class="token operator">:</span>Point<span class="token punctuation">,</span> point2<span class="token operator">:</span>Point<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>point2<span class="token punctuation">.</span>x <span class="token operator">-</span> point1<span class="token punctuation">.</span>x<span class="token punctuation">,</span> point2<span class="token punctuation">.</span>y <span class="token operator">-</span> point1<span class="token punctuation">.</span>y<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token function">getDistance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们再JavaScript里面，传了一个字符串。一个错误的参数，JavaScript里面是无法校验的。</p>
<p>但是在ts里面</p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309121503366.png" alt="image-20230912150326304" loading="lazy"></p>
<p>就会直接报错了</p>
<p>所以我们来进行一个总结，对于typescript他的特点：</p>
<ul>
<li>更容易帮助我们发现程序里的问题</li>
<li>语法提示更加完善，有了类型之后，写代码非常爽</li>
<li>语义更强，代码可读性更高</li>
</ul>
<h3 id="从静态类型校验的角度理解" tabindex="-1"><a class="header-anchor" href="#从静态类型校验的角度理解" aria-hidden="true">#</a> 从静态类型校验的角度理解</h3>
<p>在官网中。写的这门语言的一个特点</p>
<p>Static Type Checker 静态类型校验能力</p>
<p>一门语言，在代码执行之前。就能做错误预警，那么我们就说这个语言具有静态校验能力</p>
<p><strong>TS 约等于  JS+ Static Type  Checker</strong></p>
<h3 id="基础类型快速入门" tabindex="-1"><a class="header-anchor" href="#基础类型快速入门" aria-hidden="true">#</a> 基础类型快速入门</h3>
<p>首先看几个基础的类型的定义</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//基础类型 String number boolean</span>
<span class="token keyword">const</span> teachName<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">=</span><span class="token string">"zhang san"</span>
<span class="token keyword">const</span> teachAge<span class="token operator">:</span><span class="token builtin">number</span><span class="token operator">=</span><span class="token number">28</span>
<span class="token keyword">const</span> isMale<span class="token operator">:</span><span class="token builtin">boolean</span><span class="token operator">=</span><span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们来看数组类型如何定义</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//数组类型</span>
<span class="token keyword">const</span> numberArr<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> stringArr<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> booleanArr<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">]</span> <span class="token comment">//泛型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后我们再来看看对象类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//对象类型</span>
<span class="token keyword">const</span> user<span class="token operator">:</span><span class="token punctuation">{</span>
    name <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age <span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span><span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">'zhangsan'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> userOne<span class="token operator">:</span><span class="token punctuation">{</span>
    name <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">?</span> <span class="token operator">:</span> <span class="token builtin">number</span><span class="token comment">//添加问号代表着age可选</span>
<span class="token punctuation">}</span><span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">'dell'</span><span class="token punctuation">,</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以及联合类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//联合类型</span>
<span class="token keyword">function</span> <span class="token function">union</span><span class="token punctuation">(</span>id<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//id既可以是string也可以是number</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//类型收窄 Narrowing</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了这些之外，还有一些代码上的快捷。</p>
<p>例如类型别名</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age <span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> userTwo<span class="token operator">:</span>User<span class="token operator">=</span><span class="token punctuation">{</span>name <span class="token operator">:</span> <span class="token string">'dell'</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> userThree<span class="token operator">:</span>User<span class="token operator">=</span><span class="token punctuation">{</span>name <span class="token operator">:</span> <span class="token string">'dell'</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是为了解决类型复用所产生的一个用法</p>
<p>下面我们来看any类型 如果不写any类型的话，默认也会推断成any类型的，但是最好也是手动的去写上。这样有利于代码的可读性</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">showMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//any代表什么类型都可以</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后我们来看函数类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//函数类型</span>
<span class="token keyword">function</span> <span class="token function">abc</span><span class="token punctuation">(</span>message<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">123</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个就是约定了返回值。</p>
<p>还可以用箭头函数这样写</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">def</span><span class="token operator">:</span><span class="token punctuation">(</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token function-variable function">number</span><span class="token operator">=</span><span class="token punctuation">(</span>age <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">//接受一个number类型的age参数，返回值必须是number</span>
   <span class="token keyword">return</span> age
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们来讲接口类型 interface</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//接口类型 Interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Stu</span><span class="token punctuation">{</span>
    age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    sex<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> stu<span class="token operator">:</span>Stu <span class="token operator">=</span> <span class="token punctuation">{</span>age <span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>sex <span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有点像刚才的对象类型其实很类似。包括和类型别名也很相似。</p>
<p>但是接口有一个特点就是可以<strong>继承</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">OldStudent</span> <span class="token keyword">extends</span> <span class="token class-name">Stu</span><span class="token punctuation">{</span>
    name <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面来看交叉类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//交叉类型</span>
<span class="token keyword">type</span> <span class="token class-name">Employee</span><span class="token operator">=</span>User<span class="token operator">&amp;</span><span class="token punctuation">{</span>salary<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> employee<span class="token operator">:</span>Employee <span class="token operator">=</span> <span class="token punctuation">{</span>age <span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>name <span class="token operator">:</span> <span class="token string">'zhangsan'</span><span class="token punctuation">,</span>salary<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后来看断言</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//断言 Assersion</span>
<span class="token keyword">const</span> dom<span class="token operator">:</span><span class="token keyword">undefined</span><span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#root'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">undefined</span>
<span class="token keyword">const</span> testString<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">=</span><span class="token number">123</span> <span class="token keyword">as</span> <span class="token builtin">any</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dom1<span class="token operator">:</span><span class="token keyword">undefined</span><span class="token operator">=</span><span class="token operator">&lt;</span><span class="token keyword">undefined</span><span class="token operator">></span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">' #root'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后来看字面量类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//字面量类型</span>
<span class="token keyword">const</span> str<span class="token operator">:</span><span class="token string">'asd'</span><span class="token operator">=</span><span class="token string">'asd'</span>
<span class="token keyword">const</span> truthy<span class="token operator">:</span><span class="token boolean">true</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token keyword">function</span> <span class="token function">getPosition</span><span class="token punctuation">(</span>position<span class="token operator">:</span><span class="token string">'left'</span><span class="token operator">|</span><span class="token string">'right'</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> position
<span class="token punctuation">}</span>
<span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token string">'left'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个类型很有意思。我们来看一个练习题。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>method <span class="token operator">:</span> <span class="token string">'GET'</span><span class="token operator">|</span><span class="token string">'POST'</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'sending request'</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> params<span class="token operator">:</span><span class="token punctuation">{</span>url <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>method <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">}</span><span class="token operator">=</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span><span class="token string">'immoc.com'</span><span class="token punctuation">,</span>
    method <span class="token operator">:</span> <span class="token string">'GET'</span>

<span class="token punctuation">}</span>
<span class="token function">request</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>url<span class="token punctuation">,</span>params<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如是这样写的话，虽然说params.method是GET，但是因为在定义的时候method是string类型的。所以就会报错。</p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309130910709.png" alt="image-20230913091018618" loading="lazy"></p>
<p>如果修改method的类型定义，就不会报错了</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>method <span class="token operator">:</span> <span class="token string">'GET'</span><span class="token operator">|</span><span class="token string">'POST'</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'sending request'</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> params<span class="token operator">:</span><span class="token punctuation">{</span>url <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>method <span class="token operator">:</span> <span class="token string">'GET'</span><span class="token operator">|</span><span class="token string">'POST'</span><span class="token punctuation">}</span><span class="token operator">=</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span><span class="token string">'immoc.com'</span><span class="token punctuation">,</span>
    method <span class="token operator">:</span> <span class="token string">'GET'</span>

<span class="token punctuation">}</span>
<span class="token function">request</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>url<span class="token punctuation">,</span>params<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种我们可以用断言语法</p>
<div class="language-TS line-numbers-mode" data-ext="TS"><pre v-pre class="language-TS"><code>request(params.url,params.method as 'GET')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面我们来看null和undefined</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//null undefined</span>
<span class="token keyword">const</span> testobject<span class="token operator">:</span><span class="token keyword">null</span><span class="token operator">=</span><span class="token keyword">null</span>
<span class="token keyword">const</span> test2object<span class="token operator">:</span><span class="token keyword">null</span><span class="token operator">=</span><span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下null和undefined是可以转换的。</p>
<p>之后来看void</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//void</span>
<span class="token keyword">function</span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是这个函数是一个无返回值</p>
<h3 id="类型注解和类型判断" tabindex="-1"><a class="header-anchor" href="#类型注解和类型判断" aria-hidden="true">#</a> 类型注解和类型判断</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//TS开发准则:只要是变量，或者对象属性，都应该有一个明确的类型</span>


<span class="token comment">//类型注解 人工的告诉TS 变量或者对象的明确属性类型</span>
<span class="token keyword">const</span> userName<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">=</span><span class="token string">'123'</span>


<span class="token comment">//类型推断</span>
<span class="token keyword">const</span> userAge<span class="token operator">=</span><span class="token number">18</span>

<span class="token comment">//如果类型推断能够自动推断出来类型，就没有必要手写类型注解</span>
<span class="token keyword">const</span> userNick<span class="token operator">=</span><span class="token string">'deel'</span>


<span class="token keyword">function</span> <span class="token function">getTotal</span><span class="token punctuation">(</span>paramOne<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>paramTwo<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> paramOne<span class="token operator">+</span>paramTwo
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


