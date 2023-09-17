import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.c5b3201b.js";const t={},p=e(`<h2 id="自动装箱与拆箱了解吗-原理是什么" tabindex="-1"><a class="header-anchor" href="#自动装箱与拆箱了解吗-原理是什么" aria-hidden="true">#</a> 自动装箱与拆箱了解吗？原理是什么？</h2><p><strong>什么是自动拆装箱？</strong></p><ul><li><strong>装箱</strong>：将基本类型用它们对应的引用类型包装起来；</li><li><strong>拆箱</strong>：将包装类型转换为基本数据类型；</li></ul><p>举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">//装箱</span>
<span class="token keyword">int</span> n <span class="token operator">=</span> i<span class="token punctuation">;</span>   <span class="token comment">//拆箱</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这两行代码对应的字节码为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token constant">L1</span>

    <span class="token constant">LINENUMBER</span> <span class="token number">8</span> <span class="token constant">L1</span>

    <span class="token constant">ALOAD</span> <span class="token number">0</span>

    <span class="token constant">BIPUSH</span> <span class="token number">10</span>

    <span class="token constant">INVOKESTATIC</span> java<span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">.</span>valueOf <span class="token punctuation">(</span><span class="token class-name">I</span><span class="token punctuation">)</span><span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

    <span class="token constant">PUTFIELD</span> <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>i <span class="token operator">:</span> <span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

   <span class="token constant">L2</span>

    <span class="token constant">LINENUMBER</span> <span class="token number">9</span> <span class="token constant">L2</span>

    <span class="token constant">ALOAD</span> <span class="token number">0</span>

    <span class="token constant">ALOAD</span> <span class="token number">0</span>

    <span class="token constant">GETFIELD</span> <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>i <span class="token operator">:</span> <span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

    <span class="token constant">INVOKEVIRTUAL</span> java<span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">.</span>intValue <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">I</span>

    <span class="token constant">PUTFIELD</span> <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>n <span class="token operator">:</span> <span class="token class-name">I</span>

    <span class="token constant">RETURN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从字节码中，我们发现装箱其实就是调用了 包装类的<code>valueOf()</code>方法，拆箱其实就是调用了 <code>xxxValue()</code>方法。</p><p>因此，</p><ul><li><code>Integer i = 10</code> 等价于 <code>Integer i = Integer.valueOf(10)</code></li><li><code>int n = i</code> 等价于 <code>int n = i.intValue()</code>;</li></ul><p>注意：<strong>如果频繁拆装箱的话，也会严重影响系统的性能。我们应该尽量避免不必要的拆装箱操作。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 应该使用 long 而不是 Long</span>
    <span class="token class-name">Long</span> sum <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","16.html.vue"]]);export{d as default};
