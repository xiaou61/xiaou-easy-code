<template><div><h1 id="arraylist-源码分析" tabindex="-1"><a class="header-anchor" href="#arraylist-源码分析" aria-hidden="true">#</a> ArrayList 源码分析</h1>
<h2 id="arraylist-简介" tabindex="-1"><a class="header-anchor" href="#arraylist-简介" aria-hidden="true">#</a> ArrayList 简介</h2>
<p><code v-pre>ArrayList</code> 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用<code v-pre>ensureCapacity</code>操作来增加 <code v-pre>ArrayList</code> 实例的容量。这可以减少递增式再分配的数量。</p>
<p><code v-pre>ArrayList</code> 继承于 <code v-pre>AbstractList</code> ，实现了 <code v-pre>List</code>, <code v-pre>RandomAccess</code>, <code v-pre>Cloneable</code>, <code v-pre>java.io.Serializable</code> 这些接口。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
        <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>List</code> : 表明它是一个列表，支持添加、删除、查找等操作，并且可以通过下标进行访问。</li>
<li><code v-pre>RandomAccess</code> ：这是一个标志接口，表明实现这个接口的 <code v-pre>List</code> 集合是支持 <strong>快速随机访问</strong> 的。在 <code v-pre>ArrayList</code> 中，我们即可以通过元素的序号快速获取元素对象，这就是快速随机访问。</li>
<li><code v-pre>Cloneable</code> ：表明它具有拷贝能力，可以进行深拷贝或浅拷贝操作。</li>
<li><code v-pre>Serializable</code> : 表明它可以进行序列化操作，也就是可以将对象转换为字节流进行持久化存储或网络传输，非常方便。</li>
</ul>
<p><img src="https://oss.javaguide.cn/github/javaguide/java/collection/arraylist-class-diagram.png" alt="ArrayList 类图" loading="lazy"></p>
</div></template>


