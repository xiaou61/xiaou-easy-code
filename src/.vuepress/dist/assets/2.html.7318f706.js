import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as o,o as i,c as l,a as n,b as s,d as e,e as a}from"./app.c5b3201b.js";const c={},u=a(`<h2 id="第二模块-函数-模块" tabindex="-1"><a class="header-anchor" href="#第二模块-函数-模块" aria-hidden="true">#</a> 第二模块 函数&amp;模块</h2><p>从今天开始，我们将进入系列课程第二模块的的学习。从今天开始，我们将进入系列课程第二模块的的学习。从今天开始，我们将进入系列课程第二模块的的学习。从今天开始，我们将进入系列课程第二模块的的学习。从今天开始，我们将进入系列课程第二模块的的学习。</p><p>第一模块主要是学习python基础知识，从第二模块开始就可以通过程序去解决工作中实际的问题。</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307272031572.png" alt="image-20201216140222926" loading="lazy"></p><p>从今天开始，我们将进入第二模块的学习，此模块主要包含两大部分：</p><ul><li><p>函数，一个用于专门实现某个功能的代码块（可重用）。</p><ul><li><p>内置函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>len、bin、oct、hex 等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>自定义函数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">send_email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">## 写了10行代码，实现了发送邮件。</span>
    <span class="token keyword">pass</span>

send_email<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 定义了一个函数，功能代码块</span>
<span class="token keyword">def</span> <span class="token function">send_email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">## 写了10行代码，实现了发送邮件。</span>
    <span class="token keyword">pass</span>

goods <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;电脑&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">:</span> <span class="token number">1999</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;鼠标&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;游艇&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;美女&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">:</span> <span class="token number">998</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">for</span> index <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    item <span class="token operator">=</span> goods<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> item<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">[</span><span class="token string">&#39;price&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">## 调用并执行函数</span>
send_email<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    num <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入要选择的商品序号(Q/q)：&quot;</span><span class="token punctuation">)</span>  <span class="token comment">## &quot;1&quot;</span>
    <span class="token keyword">if</span> num<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> num<span class="token punctuation">.</span>isdecimal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;用输入的格式错误&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    send_email<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token keyword">or</span> num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;范围选择错误&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    target_index <span class="token operator">=</span> num <span class="token operator">-</span> <span class="token number">1</span>
    choice_item <span class="token operator">=</span> goods<span class="token punctuation">[</span>target_index<span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>choice_item<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> choice_item<span class="token punctuation">[</span><span class="token string">&#39;price&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    send_email<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>模块，集成了很多功能的函数集合。</p><ul><li><p>内置模块，Python内部帮助我们提供好的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random

num <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> decimal

v1 <span class="token operator">=</span> decimal<span class="token punctuation">.</span>Decimal<span class="token punctuation">(</span><span class="token string">&quot;0.1&quot;</span><span class="token punctuation">)</span>
v2 <span class="token operator">=</span> decimal<span class="token punctuation">.</span>Decimal<span class="token punctuation">(</span><span class="token string">&quot;0.2&quot;</span><span class="token punctuation">)</span>
v3 <span class="token operator">=</span> v1 <span class="token operator">+</span> v2
<span class="token keyword">print</span><span class="token punctuation">(</span>v3<span class="token punctuation">)</span> <span class="token comment">## 0.3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第三方模块，网上下载别人写好的模块（功能集合）。</p></li><li><p>自定义模块</p></li></ul></li></ul><h2 id="day09-文件操作相关" tabindex="-1"><a class="header-anchor" href="#day09-文件操作相关" aria-hidden="true">#</a> day09 文件操作相关</h2><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307272031574.png" alt="image-20201216175307239" loading="lazy"></p><p>课程目标：掌握基于Python对文件相关操作。</p><p>课程概要：</p><ul><li>文件操作</li><li>文件夹和路径</li><li>csv格式文件</li><li>ini格式文件</li><li>xml格式文件</li><li>excel文件</li><li>压缩文件</li></ul><p>注意：每种格式包含很多相关操作，大家在学习的过程中只要掌握知识点的用法，参考笔记可以实现相关的练习即可，不必背会（在企业开发过程中也是边搜边实现。</p><h3 id="_1-文件操作" tabindex="-1"><a class="header-anchor" href="#_1-文件操作" aria-hidden="true">#</a> 1. 文件操作</h3><p>在学习文件操作之前，先来回顾一下编码的相关以及先关数据类型的知识。</p><ul><li><p>字符串类型（str），在程序中用于表示文字信息，本质上是unicode编码中的二进制。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;武沛齐&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>字节类型（bytes）</p><ul><li><p>可表示文字信息，本质上是utf-8/gbk等编码的二进制（对unicode进行压缩，方便文件存储和网络传输。）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;武沛齐&quot;</span>
data <span class="token operator">=</span> name<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">## b&#39;\\xe6\\xad\\xa6\\xe6\\xb2\\x9b\\xe9\\xbd\\x90&#39;</span>

result <span class="token operator">=</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">## &quot;武沛齐&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可表示原始二进制（图片、文件等信息）</p></li></ul></li></ul><h4 id="_1-1-读文件" tabindex="-1"><a class="header-anchor" href="#_1-1-读文件" aria-hidden="true">#</a> 1.1 读文件</h4><ul><li><p>读文本文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 1.打开文件</span>
<span class="token comment">##	- 路径：</span>
<span class="token comment">##		相对路径：&#39;info.txt&#39;</span>
<span class="token comment">##		绝对路径：&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/info.txt&#39;</span>
<span class="token comment">## 	- 模式</span>
<span class="token comment">## 		rb，表示读取文件原始的二进制（r, 读 read；b, 二进制 binary；）</span>
<span class="token comment">## 1.打开文件</span>
file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 2.读取文件内容，并赋值给data</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 3.关闭文件</span>
file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">## b&#39;alex-123\\n\\xe6\\xad\\xa6\\xe6\\xb2\\x9b\\xe9\\xbd\\x90-123&#39;</span>
text <span class="token operator">=</span> data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 1.打开文件</span>
file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rt&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 2.读取文件内容，并赋值给data</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## 3.关闭文件</span>
file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读图片等非文本内容文件。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;a1.png&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">## \\x91\\xf6\\xf2\\x83\\x8aQFfv\\x8b7\\xcc\\xed\\xc3}\\x7fT\\x9d{.3.\\xf1{\\xe8\\...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>注意事项：</p><ul><li><p>路径</p><ul><li><p>相对路径，你的程序到底在哪里运行的？</p><p><img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307272031578.png" alt="image-20201217140130973" loading="lazy"></p><p>![image-20201217140237160](E:/360Downloads/后端/路飞学城 新版 Python全栈开发（中级） 140GB/资料课件/模块2/day09 文件操作相关/笔记/assets/image-20201217140237160.png)</p></li></ul></li><li><p>绝对路径</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 1.打开文件</span>
file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rt&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 2.读取文件内容，并赋值给data</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 3.关闭文件</span>
file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>windows系统中写绝对路径容易出问题：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## file_object = open(&#39;C:\\\\new\\\\info.txt&#39;, mode=&#39;rt&#39;, encoding=&#39;utf-8&#39;)</span>

file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">r&#39;C:\\new\\info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rt&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读文件时，文件不存在程序会报错。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/2.读文件.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;infower.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rt&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
FileNotFoundError<span class="token punctuation">:</span> <span class="token punctuation">[</span>Errno <span class="token number">2</span><span class="token punctuation">]</span> No such <span class="token builtin">file</span> <span class="token keyword">or</span> directory<span class="token punctuation">:</span> <span class="token string">&#39;infower.txt&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 判断路径是否存在？</span>
<span class="token keyword">import</span> os

file_path <span class="token operator">=</span> <span class="token string">&quot;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/info.txt&quot;</span>
exists <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
<span class="token keyword">if</span> exists<span class="token punctuation">:</span>
    <span class="token comment">## 1.打开文件</span>
    file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;infower.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rt&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">## 2.读取文件内容，并赋值给data</span>
    data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">## 3.关闭文件</span>
    file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;文件不存在&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_1-2-写文件" tabindex="-1"><a class="header-anchor" href="#_1-2-写文件" aria-hidden="true">#</a> 1.2 写文件</h4><ul><li><p>写文本文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 1.打开文件</span>
<span class="token comment">## 路径：t1.txt</span>
<span class="token comment">## 模式：wb（要求写入的内容需要是字节类型）</span>
file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;t1.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 2.写入内容</span>
file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span>    <span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>    <span class="token punctuation">)</span>

<span class="token comment">## 3.文件关闭</span>
file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;t1.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wt&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">)</span>

file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>写图片等文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f1 <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;a1.png&#39;</span><span class="token punctuation">,</span>mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
content <span class="token operator">=</span> f1<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
f1<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

f2 <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;a2.png&#39;</span><span class="token punctuation">,</span>mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>
f2<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
f2<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>基础案例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 案例1：用户注册</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
user = input(&quot;请输入用户名：&quot;)
pwd = input(&quot;请输入密码：&quot;)
data = &quot;{}-{}&quot;.format(user, pwd)
file_object = open(&quot;files/info.txt&quot;, mode=&#39;wt&#39;, encoding=&#39;utf-8&#39;)
file_object.write(data)
file_object.close()
&quot;&quot;&quot;</span>

<span class="token comment">## 案例2：多用户注册</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
## w写入文件，先清空文件；再在文件中写入内容。
file_object = open(&quot;files/info.txt&quot;, mode=&#39;wt&#39;, encoding=&#39;utf-8&#39;)
while True:
    user = input(&quot;请输入用户名：&quot;)
    if user.upper() == &quot;Q&quot;:
        break
    pwd = input(&quot;请输入密码：&quot;)
    data = &quot;{}-{}\\n&quot;.format(user, pwd)

    file_object.write(data)
file_object.close()
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小高级案例：（超前）</p><blockquote><p>利用Python想某个网址发送请求并获取结果（利用第三方的模块）</p><ul><li><p>下载第三方模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install requests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/Library/Frameworks/Python.framework/Versions/3.9/bin/pip3 install requests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![image-20201217152358142](E:/360Downloads/后端/路飞学城 新版 Python全栈开发（中级） 140GB/资料课件/模块2/day09 文件操作相关/笔记/assets/image-20201217152358142.png)</p></li><li><p>使用第三方模块</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token string">&quot;网址&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 案例1：去网上下载一点文本，文本信息写入文件。</span>
<span class="token keyword">import</span> requests

res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
    url<span class="token operator">=</span><span class="token string">&quot;https://movie.douban.com/j/search_subjects?type=movie&amp;tag=%E7%83%AD%E9%97%A8&amp;sort=recommend&amp;page_limit=20&amp;page_start=20&quot;</span><span class="token punctuation">,</span>
    headers<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">## 网络传输的原始二进制信息（bytes）</span>
<span class="token comment">## res.content</span>

file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;files/log1.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>
file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span>res<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>



<span class="token comment">## 案例2：去网上下载一张图片，图片写入本地文件。</span>
<span class="token keyword">import</span> requests

res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
    url<span class="token operator">=</span><span class="token string">&quot;https://hbimg.huabanimg.com/c7e1461e4b15735fbe625c4dc85bd19904d96daf6de9fb-tosv1r_fw1200&quot;</span><span class="token punctuation">,</span>
    headers<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">## 网络传输的原始二进制信息（bytes）</span>
<span class="token comment">## res.content</span>

file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;files/美女.png&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>
file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span>res<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><ul><li>路径 <ul><li>绝对路径</li><li>相对路径</li></ul></li><li>文件不存在时，w模式会新建然后再写入内容；文件存在时，w模式会清空文件再写入内容。</li></ul><h4 id="_1-3-文件打开模式" tabindex="-1"><a class="header-anchor" href="#_1-3-文件打开模式" aria-hidden="true">#</a> 1.3 文件打开模式</h4><p>上文我们基于文件操作基本实现了读、写的功能，其中涉及的文件操作模式：rt、rb、wt、wb，其实在文件操作中还有其他的很多模式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>========= ===============================================================
Character Meaning
--------- ---------------------------------------------------------------
&#39;r&#39;       open for reading (default)
&#39;w&#39;       open for writing, truncating the file first
&#39;x&#39;       create a new file and open it for writing
&#39;a&#39;       open for writing, appending to the end of the file if it exists

&#39;b&#39;       binary mode
&#39;t&#39;       text mode (default)

&#39;+&#39;       open a disk file for updating (reading and writing)

The default mode is &#39;rt&#39; (open for reading text).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于文件的打开模式常见应用有：</p><ul><li><p>只读：<code>r</code>、<code>rt</code>、<code>rb</code> （用）</p><ul><li>存在，读</li><li>不存在，报错</li></ul></li><li><p>只写：<code>w</code>、<code>wt</code>、<code>wb</code>（用）</p><ul><li>存在，清空再写</li><li>不存在，创建再写</li></ul></li><li><p>只写：<code>x</code>、<code>xt</code>、<code>xb</code></p><ul><li>存在，报错</li><li>不存在，创建再写。</li></ul></li><li><p>只写：<code>a</code>、<code>at</code>、<code>ab</code>【尾部追加】（用）</p><ul><li>存在，尾部追加。</li><li>不存在，创建再写。</li></ul></li><li><p>读写</p><ul><li><p>r+、rt+、rb+，默认光标位置：起始位置</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rt+&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 读取内容</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">## 写入内容</span>
file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;你好呀&quot;</span><span class="token punctuation">)</span>

file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rt+&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 写入内容</span>
file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;alex&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 读取内容</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>  <span class="token comment">## -123</span>

file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>w+、wt+、wb+，默认光标位置：起始位置（清空文件）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wt+&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 读取内容</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">## 写入内容</span>
file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;你好呀&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 将光标位置重置起始</span>
file_object<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">## 读取内容</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>x+、xt+、xb+，默认光标位置：起始位置（新文件）</p></li><li><p>a+、at+、ab+，默认光标位置：末尾</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;at+&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 写入内容</span>
file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 将光标位置重置起始</span>
file_object<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">## 读取内容</span>
data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p>多用户注册案例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;用户名：&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> user<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    pwd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;密码：&quot;</span><span class="token punctuation">)</span>

    data <span class="token operator">=</span> <span class="token string">&quot;{}-{}\\n&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>

    file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;files/account.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;files/account.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;用户名：&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> user<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    pwd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;密码：&quot;</span><span class="token punctuation">)</span>
    data <span class="token operator">=</span> <span class="token string">&quot;{}-{}\\n&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>
    file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-常见功能" tabindex="-1"><a class="header-anchor" href="#_1-4-常见功能" aria-hidden="true">#</a> 1.4 常见功能</h4><p>在上述对文件的操作中，我们只使用了write和read来对文件进行读写，其实在文件操作中还有很多其他的功能来辅助实现更好的读写文件的内容。</p><ul><li><p>read，读</p><ul><li><p>读所有【常用】</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读n个字符（字节）【会用到】</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 读1个字符</span>
data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">## 武</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 读1个字符</span>
chunk1 <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
chunk2 <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>chunk1<span class="token punctuation">,</span>chunk2<span class="token punctuation">)</span>

f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 读1个字节</span>
data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">## b&#39;\\xe6\\xad\\xa6&#39; &lt;class &#39;bytes&#39;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 读1个字节</span>
chunk1 <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
chunk2 <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
chunk3 <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>chunk1<span class="token punctuation">,</span>chunk2<span class="token punctuation">,</span>chunk3<span class="token punctuation">)</span>

f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>readline，读一行</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

v1 <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span>

v2 <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span>

f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
v1 <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
v2 <span class="token operator">=</span> f<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>readlines，读所有行，每行作为列表的一个元素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>

data_list <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>

f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>data_list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>循环，读大文件（readline加强版）【常见】</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>write，写</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span> <span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>flush，刷到硬盘</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment">## 不是写到了硬盘，而是写在缓冲区，系统会将缓冲区的内容刷到硬盘。</span>
	f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>

f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;files/account.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;用户名：&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> user<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    pwd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;密码：&quot;</span><span class="token punctuation">)</span>
    data <span class="token operator">=</span> <span class="token string">&quot;{}-{}\\n&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> pwd<span class="token punctuation">)</span>
    file_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    file_object<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>

file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>移动光标位置（字节）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r+&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment">## 移动到指定字节的位置</span>
f<span class="token punctuation">.</span>seek<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;武沛齐&quot;</span><span class="token punctuation">)</span>

f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：在a模式下，调用write在文件中写入内容时，永远只能将内容写入到尾部，不会写到光标的位置。</p></li><li><p>获取当前光标位置</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

p1 <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span>  <span class="token comment">## 0</span>

f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">## 读3个字符 3*3=9字节</span>

p2 <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span>  <span class="token comment">## 9</span>

f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>

p1 <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span>  <span class="token comment">## 0</span>

f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">## 读3个字节</span>

p2 <span class="token operator">=</span> f<span class="token punctuation">.</span>tell<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span>  <span class="token comment">## 3</span>

f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_1-5-上下文管理" tabindex="-1"><a class="header-anchor" href="#_1-5-上下文管理" aria-hidden="true">#</a> 1.5 上下文管理</h4><p>之前对文件进行操作时，每次都要打开和关闭文件，比较繁琐且容易忘记关闭文件。</p><p>以后再进行文件操作时，推荐大家使用with上下文管理，它可以自动实现关闭文件。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;xxxx.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> file_object<span class="token punctuation">:</span>
    data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Python 2.7 后，with又支持同时对多个文件的上下文进行管理，即：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;xxxx.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f1<span class="token punctuation">,</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;xxxx.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f2<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习题" tabindex="-1"><a class="header-anchor" href="#练习题" aria-hidden="true">#</a> 练习题</h4><ol><li><p>补充代码：实现下载视频并保存到本地</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
    url<span class="token operator">=</span><span class="token string">&quot;https://f.video.weibocdn.com/000pTZJLgx07IQgaH7HW010412066BJV0E030.mp4?label=mp4_720p&amp;template=1280x720.25.0&amp;trans_finger=1f0da16358befad33323e3a1b7f95fc9&amp;media_id=4583105541898354&amp;tp=8x8A3El:YTkl0eM8&amp;us=0&amp;ori=1&amp;bf=2&amp;ot=h&amp;ps=3lckmu&amp;uid=3ZoTIp&amp;ab=3915-g1,966-g1,3370-g1,3601-g0,3601-g0,3601-g0,1493-g0,1192-g0,1191-g0,1258-g0&amp;Expires=1608204895&amp;ssig=NdYpDIEXSS&amp;KID=unistore,video&quot;</span><span class="token punctuation">,</span>
    headers<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">## 视频的文件内容</span>
res<span class="token punctuation">.</span>content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>日志分析，计算某用户<code>223.73.89.192</code>访问次数。日志文件如下：<code>access.log</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>49.89.167.91 - - [17/Dec/2020:03:43:50 +0800] &quot;GET /wiki/detail/3/40 HTTP/1.1&quot; 301 0 &quot;-&quot; &quot;Mozilla/5.0(Linux;Android 5.1.1;OPPO A33 Build/LMY47V;wv) AppleWebKit/537.36(KHTML,link Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 LieBaoFast/4.51.3&quot; &quot;-&quot;
49.89.167.91 - - [17/Dec/2020:03:44:11 +0800] &quot;GET /wiki/detail/3/40/ HTTP/1.1&quot; 200 8033 &quot;-&quot; &quot;Mozilla/5.0(Linux;Android 5.1.1;OPPO A33 Build/LMY47V;wv) AppleWebKit/537.36(KHTML,link Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 LieBaoFast/4.51.3&quot; &quot;-&quot;
203.208.60.66 - - [17/Dec/2020:03:47:58 +0800] &quot;GET /media/uploads/2019/11/17/pic/s1.png HTTP/1.1&quot; 200 710728 &quot;-&quot; &quot;Googlebot-Image/1.0&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:26 +0800] &quot;GET /wiki/detail/3/40/ HTTP/1.1&quot; 200 8033 &quot;-&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:26 +0800] &quot;GET /static/stark/plugins/font-awesome/css/font-awesome.css HTTP/1.1&quot; 200 37414 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:26 +0800] &quot;GET /static/stark/plugins/bootstrap/css/bootstrap.css HTTP/1.1&quot; 200 146010 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:26 +0800] &quot;GET /static/web/css/commons.css HTTP/1.1&quot; 200 3674 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:26 +0800] &quot;GET /static/mdeditor/editormd/css/editormd.preview.css HTTP/1.1&quot; 200 60230 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:26 +0800] &quot;GET /static/stark/js/jquery-3.3.1.min.js HTTP/1.1&quot; 200 86927 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:26 +0800] &quot;GET /static/stark/plugins/bootstrap/js/bootstrap.min.js HTTP/1.1&quot; 200 37045 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:26 +0800] &quot;GET /static/mdeditor/editormd/lib/marked.min.js HTTP/1.1&quot; 200 19608 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:27 +0800] &quot;GET /static/mdeditor/editormd/lib/prettify.min.js HTTP/1.1&quot; 200 17973 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:27 +0800] &quot;GET /static/mdeditor/editormd/fonts/fontawesome-webfont.woff2?v=4.3.0 HTTP/1.1&quot; 200 56780 &quot;https://pythonav.com/static/mdeditor/editormd/css/editormd.preview.css&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:27 +0800] &quot;GET /static/mdeditor/editormd/editormd.js HTTP/1.1&quot; 200 163262 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:28 +0800] &quot;GET /static/mdeditor/mdeditor-preview-init.js HTTP/1.1&quot; 200 261 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:29 +0800] &quot;GET /static/stark/plugins/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 HTTP/1.1&quot; 200 77160 &quot;https://pythonav.com/static/stark/plugins/font-awesome/css/font-awesome.css&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
223.73.89.192 - - [17/Dec/2020:03:48:29 +0800] &quot;GET /media/uploads/2019/02/22/Gobook/_book/ssl2.png HTTP/1.1&quot; 200 203535 &quot;https://pythonav.com/wiki/detail/3/40/&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.60&quot; &quot;-&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>日志分析升级，计算所有用户的访问次数。</p></li><li><p>筛选出股票 当前价大于 20 的所有股票数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>股票代码,股票名称,当前价,涨跌额,涨跌幅,年初至今,成交量,成交额,换手率,市盈率(TTM),股息率,市值
SH601778,N晶科,6.29,+1.92,+43.94%,+43.94%,259.66万,1625.52万,0.44%,22.32,-,173.95亿
SH688566,吉贝尔,52.66,+6.96,+15.23%,+122.29%,1626.58万,8.09亿,42.29%,89.34,-,98.44亿
SH688268,华特气体,88.80,+11.72,+15.20%,+102.51%,622.60万,5.13亿,22.87%,150.47,-,106.56亿
SH600734,实达集团,2.60,+0.24,+10.17%,-61.71%,1340.27万,3391.14万,2.58%,亏损,0.00%,16.18亿
SH900957,凌云B股,0.36,+0.033,+10.09%,-35.25%,119.15万,42.10万,0.65%,44.65,0.00%,1.26亿
SZ000584,哈工智能,6.01,+0.55,+10.07%,-4.15%,2610.86万,1.53亿,4.36%,199.33,0.26%,36.86亿
SH600599,熊猫金控,6.78,+0.62,+10.06%,-35.55%,599.64万,3900.23万,3.61%,亏损,0.00%,11.25亿
SH600520,文一科技,8.21,+0.75,+10.05%,-24.05%,552.34万,4464.69万,3.49%,亏损,0.00%,13.01亿
SH603682,锦和商业,11.73,+1.07,+10.04%,+48.29%,2746.63万,3.15亿,29.06%,29.62,-,55.42亿
SZ300831,派瑞股份,12.27,+1.12,+10.04%,+208.29%,25.38万,311.41万,0.32%,60.59,-,39.26亿
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>根据要求修改文件的内容，原文件内容如下：<code>ha.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>global       
        log 127.0.0.1 local2
        daemon
        maxconn 256
        log 127.0.0.1 local2 info
defaults
        log global
        mode http
        timeout connect 5000ms
        timeout client 50000ms
        timeout server 50000ms
        option  dontlognull

listen stats :8888
        stats enable
        stats uri       /admin
        stats auth      admin:1234

frontend oldboy.org
        bind 0.0.0.0:80
        option httplog
        option httpclose
        option  forwardfor
        log global
        acl www hdr_reg(host) -i www.luffycity.org
        use_backend www.luffycity.com if www

backend www.luffycity.com
        server 100.1.7.9 100.1.7.9 weight 20 maxconn 3000
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请将文件中的 <code>luffycity</code>修改为 <code>pythonav</code> 。</p></li></ol><h3 id="_2-csv格式文件" tabindex="-1"><a class="header-anchor" href="#_2-csv格式文件" aria-hidden="true">#</a> 2.csv格式文件</h3><p><strong>逗号分隔值</strong>（Comma-Separated Values，<strong>CSV</strong>，有时也称为<strong>字符分隔值</strong>，因为分隔字符也可以不是逗号），其文件以纯文本形式存储表格数据（数字和文本）。</p><p>对于这种格式的数据，我们需要利用open函数来读取文件并根据逗号分隔的特点来进行处理。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>股票代码,股票名称,当前价,涨跌额,涨跌幅,年初至今
SH601778,N晶科,6.29,+1.92,-43.94%,+43.94%
SH688566,吉贝尔,52.66,+6.96,+15.23%,+122.29%
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习题案例：下载文档中的所有图片且以用户名为图片名称存储。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ID<span class="token punctuation">,</span>用户名<span class="token punctuation">,</span>头像
<span class="token number">26044585</span><span class="token punctuation">,</span>Hush<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>51d46dc32abe7ac7f83b94c67bb88cacc46869954f478<span class="token operator">-</span>aP4Q3V
<span class="token number">19318369</span><span class="token punctuation">,</span>柒十一<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>703fdb063bdc37b11033ef794f9b3a7adfa01fd21a6d1<span class="token operator">-</span>wTFbnO
<span class="token number">15529690</span><span class="token punctuation">,</span>Law344<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>b438d8c61ed2abf50ca94e00f257ca7a223e3b364b471<span class="token operator">-</span>xrzoQd
<span class="token number">18311394</span><span class="token punctuation">,</span>Jennah·<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>4edba1ed6a71797f52355aa1de5af961b85bf824cb71<span class="token operator">-</span>px1nZz
<span class="token number">18009711</span><span class="token punctuation">,</span>可洛爱画画<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>03331ef39b5c7687f5cc47dbcbafd974403c962ae88ce<span class="token operator">-</span>Co8AUI
<span class="token number">30574436</span><span class="token punctuation">,</span>花姑凉<span class="token operator">~</span><span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>2f5b657edb9497ff8c41132e18000edb082d158c2404<span class="token operator">-</span>8rYHbw
<span class="token number">17740339</span><span class="token punctuation">,</span>小巫師<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>dbc6fd49f1915545cc42c1a1492a418dbaebd2c21bb9<span class="token operator">-</span>9aDqgl
<span class="token number">18741964</span><span class="token punctuation">,</span>桐末tonmo<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>b60cee303f62aaa592292f45a1ed8d5be9873b2ed5c<span class="token operator">-</span>gAJehO
<span class="token number">30535005</span><span class="token punctuation">,</span>TANGZHIQI<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>bbd08ee168d54665bf9b07899a5c4a4d6bc1eb8af77a4<span class="token operator">-</span>8Gz3K1
<span class="token number">31078743</span><span class="token punctuation">,</span>你的老杨<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>c46fbc3c9a01db37b8e786cbd7174bbd475e4cda220f4<span class="token operator">-</span>F1u7MX
<span class="token number">25519376</span><span class="token punctuation">,</span>尺尺寸<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>ee29ee198efb98f970e3dc2b24c40d89bfb6f911126b6<span class="token operator">-</span>KGvKes
<span class="token number">21113978</span><span class="token punctuation">,</span>C<span class="token operator">-</span>CLong<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>7fa6b2a0d570e67246b34840a87d57c16a875dba9100<span class="token operator">-</span>SXsSeY
<span class="token number">24674102</span><span class="token punctuation">,</span>szaa<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>0716687b0df93e8c3a8e0925b6d2e4135449cd27597c4<span class="token operator">-</span>gWdv24
<span class="token number">30508507</span><span class="token punctuation">,</span>爱起床的小灰灰<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>4eafdbfa21b2f300a7becd8863f948e5e92ef789b5a5<span class="token operator">-</span>1ozTKq
<span class="token number">12593664</span><span class="token punctuation">,</span>yokozen<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>cd07bbaf052b752ed5c287602404ea719d7dd8161321b<span class="token operator">-</span>cJtHss
<span class="token number">16899164</span><span class="token punctuation">,</span>一阵疯<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>0940b557b28892658c3bcaf52f5ba8dc8402100e130b2<span class="token operator">-</span>G966Uz
<span class="token number">847937</span><span class="token punctuation">,</span>卩丬My㊊伴er彎<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>e2d6bb5bc8498c6f607492a8f96164aa2366b104e7a<span class="token operator">-</span>kWaH68
<span class="token number">31010628</span><span class="token punctuation">,</span>慢慢即漫漫<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>c4fb6718907a22f202e8dd14d52f0c369685e59cfea7<span class="token operator">-</span>82FdsK
<span class="token number">13438168</span><span class="token punctuation">,</span>海贼玩跑跑<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>1edae3ce6fe0f6e95b67b4f8b57c4cebf19c501b397e<span class="token operator">-</span>BXwiW6
<span class="token number">28593155</span><span class="token punctuation">,</span>源稚生<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>626cfd89ca4c10e6f875f3dfe1005331e4c0fd7fd429<span class="token operator">-</span>9SeJeQ
<span class="token number">28201821</span><span class="token punctuation">,</span>合伙哼哼<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>f59d4780531aa1892b80e0ec94d4ec78dcba08ff18c416<span class="token operator">-</span>769X6a
<span class="token number">28255146</span><span class="token punctuation">,</span>漫步AAA<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>3c034c520594e38353a039d7e7a5fd5e74fb53eb1086<span class="token operator">-</span>KnpLaL
<span class="token number">30537613</span><span class="token punctuation">,</span>配䦹<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>efd81d22c1b1a2de77a0e0d8e853282b83b6bbc590fd<span class="token operator">-</span>y3d4GJ
<span class="token number">22665880</span><span class="token punctuation">,</span>日后必火<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>69f0f959979a4fada9e9e55f565989544be88164d2b<span class="token operator">-</span>INWbaF
<span class="token number">16748980</span><span class="token punctuation">,</span>keer521521<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>654953460733026a7ef6e101404055627ad51784a95c<span class="token operator">-</span>B6OFs4
<span class="token number">30536510</span><span class="token punctuation">,</span>“西辞”<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>61cfffca6b2507bf51a507e8319d68a8b8c3a96968f<span class="token operator">-</span>6IvMSk
<span class="token number">30986577</span><span class="token punctuation">,</span>艺成背锅王<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>c381ecc43d6c69758a86a30ebf72976906ae6c53291f9<span class="token operator">-</span>9zroHF
<span class="token number">26409800</span><span class="token punctuation">,</span>CsysADk7<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>bf1d22092c2070d68ade012c588f2e410caaab1f58051<span class="token operator">-</span>ahlgLm
<span class="token number">30469116</span><span class="token punctuation">,</span><span class="token number">18</span>啊全阿<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>654953460733026a7ef6e101404055627ad51784a95c<span class="token operator">-</span>B6OFs4
<span class="token number">15514336</span><span class="token punctuation">,</span>W<span class="token operator">/</span>小哥<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>a30f5967fc0acf81421dd49650397de63c105b9ead1c<span class="token operator">-</span>nVRrNl
<span class="token number">17473505</span><span class="token punctuation">,</span>椿の花<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>0e38d810e5a24f91ebb251fd3aaaed8bb37655b14844c<span class="token operator">-</span>pgNJBP
<span class="token number">19165177</span><span class="token punctuation">,</span>っ思忆゜♪<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>4815ea0e4905d0f3bb82a654b481811dadbfe5ce2673<span class="token operator">-</span>vMVr0B
<span class="token number">16059616</span><span class="token punctuation">,</span>格林熊丶<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>8760a2b08d87e6ed4b7a9715b1a668176dbf84fec5b<span class="token operator">-</span>jx14tZ
<span class="token number">30734152</span><span class="token punctuation">,</span>sCWVkJDG<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>f31a5305d1b8717bbfb897723f267d316e58e7b7dc40<span class="token operator">-</span>GD3e22
<span class="token number">24019677</span><span class="token punctuation">,</span>虚无本心<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>6fdfa9834abe362e978b517275b06e7f0d5926aa650<span class="token operator">-</span>N1xCXE
<span class="token number">16670283</span><span class="token punctuation">,</span>Y<span class="token operator">-</span>雨后天空<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>a3bbb0045b536fc27a6d2effa64a0d43f9f5193c177f<span class="token operator">-</span>I2vHaI
<span class="token number">21512483</span><span class="token punctuation">,</span>汤姆<span class="token number">2</span><span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>98cc50a61a7cc9b49a8af754ffb26bd15764a82f1133<span class="token operator">-</span>AkiU7D
<span class="token number">16441049</span><span class="token punctuation">,</span>笑潇啸逍小鱼<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>ae8a70cd85aff3a8587ff6578d5cf7620f3691df13e46<span class="token operator">-</span>lmrIi9
<span class="token number">24795603</span><span class="token punctuation">,</span>⁢⁢⁢⁢⁢v<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>a7183cc3a933aa129d7b3230bf1378fd8f5857846cc5<span class="token operator">-</span>3tDtx3
<span class="token number">29819152</span><span class="token punctuation">,</span>妮玛士珍多<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>ca4ecb573bf1ff0415c7a873d64470dedc465ea1213c6<span class="token operator">-</span>RAkArS
<span class="token number">19101282</span><span class="token punctuation">,</span>陈勇敢❤<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>ab6d04ebaff3176e3570139a65155856871241b58bc6<span class="token operator">-</span>Qklj2E
<span class="token number">28337572</span><span class="token punctuation">,</span>爱意随风散<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>117ad8b6eeda57a562ac6ab2861111a793ca3d1d5543<span class="token operator">-</span>SjWlk2
<span class="token number">17342758</span><span class="token punctuation">,</span>幸运instant<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>72b5f9042ec297ae57b83431123bc1c066cca90fa23<span class="token operator">-</span>3MoJNj
<span class="token number">18483372</span><span class="token punctuation">,</span>Beau染<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>077115cb622b1ff3907ec6932e1b575393d5aae720487<span class="token operator">-</span>d1cdT9
<span class="token number">22127102</span><span class="token punctuation">,</span>栽花的小蜻蜓<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>6c3cbf9f27e17898083186fc51985e43269018cc1e1df<span class="token operator">-</span>QfOIBG
<span class="token number">13802024</span><span class="token punctuation">,</span>LoveHsu<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>f720a15f8b49b86a7c1ee4951263a8dbecfe3e43d2d<span class="token operator">-</span>GPEauV
<span class="token number">22558931</span><span class="token punctuation">,</span>白驹过隙丶梨花泪う<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>e49e1341dfe5144da5c71bd15f1052ef07ba7a0e1296b<span class="token operator">-</span>jfyfDJ
<span class="token number">11762339</span><span class="token punctuation">,</span>cojoy<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>5b27f876d5d391e7c4889bc5e8ba214419eb72b56822<span class="token operator">-</span>83gYmB
<span class="token number">30711623</span><span class="token punctuation">,</span>雪碧学长呀<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>2c288a1535048b05537ba523b3fc9eacc1e81273212d1<span class="token operator">-</span>nr8M4t
<span class="token number">18906718</span><span class="token punctuation">,</span>西霸王<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>7b02ad5e01bd8c0a29817e362814666a7800831c154a6<span class="token operator">-</span>AvBDaG
<span class="token number">31037856</span><span class="token punctuation">,</span>邵阳的小哥哥<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>654953460733026a7ef6e101404055627ad51784a95c<span class="token operator">-</span>B6OFs4
<span class="token number">26830711</span><span class="token punctuation">,</span>稳健谭<span class="token punctuation">,</span>https<span class="token punctuation">:</span><span class="token operator">//</span>hbimg<span class="token punctuation">.</span>huabanimg<span class="token punctuation">.</span>com<span class="token operator">/</span>51547ade3f0aef134e8d268cfd4ad61110925aefec8a<span class="token operator">-</span>NKPEYX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> requests

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;files/mv.csv&#39;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> file_object<span class="token punctuation">:</span>
    file_object<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> file_object<span class="token punctuation">:</span>
        user_id<span class="token punctuation">,</span> username<span class="token punctuation">,</span> url <span class="token operator">=</span> line<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
        <span class="token comment">## 1.根据URL下载图片</span>
        res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
            url<span class="token operator">=</span>url<span class="token punctuation">,</span>
            headers<span class="token operator">=</span><span class="token punctuation">{</span>
                <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
        <span class="token comment">## 检查images目录是否存在？不存在，则创建images目录</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;images&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment">## 创建images目录</span>
            os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span><span class="token string">&quot;images&quot;</span><span class="token punctuation">)</span>

        <span class="token comment">## 2.将图片的内容写入到文件</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;images/{}.png&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> img_object<span class="token punctuation">:</span>
            img_object<span class="token punctuation">.</span>write<span class="token punctuation">(</span>res<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-ini格式文件" tabindex="-1"><a class="header-anchor" href="#_3-ini格式文件" aria-hidden="true">#</a> 3.ini格式文件</h3><p>ini文件是Initialization File的缩写，平时用于存储软件的的配置文件。例如：MySQL数据库的配置文件。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql</span>
<span class="token key attr-name">socket</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token key attr-name">log-bin</span><span class="token punctuation">=</span><span class="token value attr-value">py-mysql-bin</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token key attr-name">collation-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8_general_ci</span>
<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/mysqld.log</span>
<span class="token comment">## Disabling symbolic-links is recommended to prevent assorted security risks</span>
<span class="token key attr-name">symbolic-links</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld_safe</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/mariadb/mariadb.log</span>
<span class="token key attr-name">pid-file</span><span class="token punctuation">=</span><span class="token value attr-value">/var/run/mariadb/mariadb.pid</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种格式是可以直接使用open来出来，考虑到自己处理比较麻烦，所以Python为我们提供了更为方便的方式。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&#39;files/my.ini&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## config.read(&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/files/my.ini&#39;, encoding=&#39;utf-8&#39;)</span>

<span class="token comment">## 1.获取所有的节点</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
result = config.sections()
print(result)  ## [&#39;mysqld&#39;, &#39;mysqld_safe&#39;, &#39;client&#39;]
&quot;&quot;&quot;</span>

<span class="token comment">## 2.获取节点下的键值</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
result = config.items(&quot;mysqld_safe&quot;)
print(result)  ## [(&#39;log-error&#39;, &#39;/var/log/mariadb/mariadb.log&#39;), (&#39;pid-file&#39;, &#39;/var/run/mariadb/mariadb.pid&#39;)]

for key, value in config.items(&quot;mysqld_safe&quot;):
    print(key, value)
&quot;&quot;&quot;</span>

<span class="token comment">## 3.获取某个节点下的键对应的值</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
result = config.get(&quot;mysqld&quot;,&quot;collation-server&quot;)
print(result)
&quot;&quot;&quot;</span>

<span class="token comment">## 4.其他</span>

<span class="token comment">## 4.1 是否存在节点</span>
<span class="token comment">## v1 = config.has_section(&quot;client&quot;)</span>
<span class="token comment">## print(v1)</span>

<span class="token comment">## 4.2 添加一个节点</span>
<span class="token comment">## config.add_section(&quot;group&quot;)</span>
<span class="token comment">## config.set(&#39;group&#39;,&#39;name&#39;,&#39;wupeiqi&#39;)</span>
<span class="token comment">## config.set(&#39;client&#39;,&#39;name&#39;,&#39;wupeiqi&#39;)</span>
<span class="token comment">## config.write(open(&#39;files/new.ini&#39;, mode=&#39;w&#39;, encoding=&#39;utf-8&#39;))</span>

<span class="token comment">## 4.3 删除</span>
<span class="token comment">## config.remove_section(&#39;client&#39;)</span>
<span class="token comment">## config.remove_option(&quot;mysqld&quot;, &quot;datadir&quot;)</span>
<span class="token comment">## config.write(open(&#39;files/new.ini&#39;, mode=&#39;w&#39;, encoding=&#39;utf-8&#39;))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>读取所有节点</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/files/my.conf&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## config.read(&#39;my.conf&#39;, encoding=&#39;utf-8&#39;)</span>
ret <span class="token operator">=</span> config<span class="token punctuation">.</span>sections<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span> 

<span class="token operator">&gt;&gt;</span>输出
<span class="token punctuation">[</span><span class="token string">&#39;mysqld&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mysqld_safe&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;client&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读取节点下的键值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/files/my.conf&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## config.read(&#39;my.conf&#39;, encoding=&#39;utf-8&#39;)</span>
item_list <span class="token operator">=</span> config<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token string">&quot;mysqld_safe&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>item_list<span class="token punctuation">)</span> 

<span class="token operator">&gt;&gt;</span>输出
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;log-error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/var/log/mariadb/mariadb.log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;pid-file&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/var/run/mariadb/mariadb.pid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读取节点下值（根据 节点+键 ）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/files/my.conf&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

value <span class="token operator">=</span> config<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;mysqld&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;log-bin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span>输出
py<span class="token operator">-</span>mysql<span class="token operator">-</span><span class="token builtin">bin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检查、删除、添加节点</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> configparser

config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/files/my.conf&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## config.read(&#39;my.conf&#39;, encoding=&#39;utf-8&#39;)</span>


<span class="token comment">## 检查</span>
has_sec <span class="token operator">=</span> config<span class="token punctuation">.</span>has_section<span class="token punctuation">(</span><span class="token string">&#39;mysqld&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>has_sec<span class="token punctuation">)</span>

<span class="token comment">## 添加节点</span>
config<span class="token punctuation">.</span>add_section<span class="token punctuation">(</span><span class="token string">&quot;SEC_1&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 节点中设置键值</span>
config<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;SEC_1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k10&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;SEC_1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;哈哈哈哈哈&quot;</span><span class="token punctuation">)</span>

config<span class="token punctuation">.</span>add_section<span class="token punctuation">(</span><span class="token string">&quot;SEC_2&quot;</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;SEC_2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k10&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 内容写入新文件</span>
config<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/files/xxoo.conf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">## 删除节点</span>
config<span class="token punctuation">.</span>remove_section<span class="token punctuation">(</span><span class="token string">&quot;SEC_2&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 删除节点中的键值</span>
config<span class="token punctuation">.</span>remove_option<span class="token punctuation">(</span><span class="token string">&#39;SEC_1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k10&#39;</span><span class="token punctuation">)</span>
config<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;/Users/wupeiqi/PycharmProjects/luffyCourse/day09/files/new.conf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_4-xml格式文件" tabindex="-1"><a class="header-anchor" href="#_4-xml格式文件" aria-hidden="true">#</a> 4.XML格式文件</h3>`,61),r={href:"https://baike.baidu.com/item/%E5%8F%AF%E6%89%A9%E5%B1%95%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80/2885849",target:"_blank",rel:"noopener noreferrer"},d=a(`<ul><li>存储，可用来存放配置文件，例如：java的配置文件。</li><li>传输，网络传输时以这种格式存在，例如：早期ajax传输的数据、soap协议等。</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>country</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Liechtenstein<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rank</span> <span class="token attr-name">updated</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rank</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>year</span><span class="token punctuation">&gt;</span></span>2023<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>year</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gdppc</span><span class="token punctuation">&gt;</span></span>141100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>gdppc</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>neighbor</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>E<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Austria<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>neighbor</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>W<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Switzerland<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>country</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>country</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Singapore<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rank</span> <span class="token attr-name">updated</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rank</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>year</span><span class="token punctuation">&gt;</span></span>2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>year</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gdppc</span><span class="token punctuation">&gt;</span></span>59900<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>gdppc</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>neighbor</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>N<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Malaysia<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>country</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>country</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Panama<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rank</span> <span class="token attr-name">updated</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>69<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rank</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>year</span><span class="token punctuation">&gt;</span></span>2026<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>year</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gdppc</span><span class="token punctuation">&gt;</span></span>13600<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>gdppc</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>neighbor</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>W<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Costa Rica<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>neighbor</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>E<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Colombia<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>country</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>data</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：在Python开发中用的相对来比较少，大家作为了解即可（后期课程在讲解微信支付、微信公众号消息处理 时会用到基于xml传输数据）。</p>`,3),k={href:"https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<h4 id="_4-1-读取文件和内容" tabindex="-1"><a class="header-anchor" href="#_4-1-读取文件和内容" aria-hidden="true">#</a> 4.1 读取文件和内容</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

<span class="token comment">## ET去打开xml文件</span>
tree <span class="token operator">=</span> ET<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&quot;files/xo.xml&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 获取根标签</span>
root <span class="token operator">=</span> tree<span class="token punctuation">.</span>getroot<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token comment">## &lt;Element &#39;data&#39; at 0x7f94e02763b0&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
&lt;data&gt;
    &lt;country name=&quot;Liechtenstein&quot;&gt;
        &lt;rank updated=&quot;yes&quot;&gt;2&lt;/rank&gt;
        &lt;year&gt;2023&lt;/year&gt;
        &lt;gdppc&gt;141100&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Austria&quot; /&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Switzerland&quot; /&gt;
    &lt;/country&gt;
     &lt;country name=&quot;Panama&quot;&gt;
        &lt;rank updated=&quot;yes&quot;&gt;69&lt;/rank&gt;
        &lt;year&gt;2026&lt;/year&gt;
        &lt;gdppc&gt;13600&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Costa Rica&quot; /&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Colombia&quot; /&gt;
    &lt;/country&gt;
&lt;/data&gt;
&quot;&quot;&quot;</span>

root <span class="token operator">=</span> ET<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>  <span class="token comment">## &lt;Element &#39;data&#39; at 0x7fdaa019cea0&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-读取节点数据" tabindex="-1"><a class="header-anchor" href="#_4-2-读取节点数据" aria-hidden="true">#</a> 4.2 读取节点数据</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
&lt;data&gt;
    &lt;country name=&quot;Liechtenstein&quot; id=&quot;999&quot; &gt;
        &lt;rank&gt;2&lt;/rank&gt;
        &lt;year&gt;2023&lt;/year&gt;
        &lt;gdppc&gt;141100&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Austria&quot; /&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Switzerland&quot; /&gt;
    &lt;/country&gt;
     &lt;country name=&quot;Panama&quot;&gt;
        &lt;rank&gt;69&lt;/rank&gt;
        &lt;year&gt;2026&lt;/year&gt;
        &lt;gdppc&gt;13600&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Costa Rica&quot; /&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Colombia&quot; /&gt;
    &lt;/country&gt;
&lt;/data&gt;
&quot;&quot;&quot;</span>

<span class="token comment">## 获取根标签 data</span>
root <span class="token operator">=</span> ET<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

country_object <span class="token operator">=</span> root<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;country&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>country_object<span class="token punctuation">.</span>tag<span class="token punctuation">,</span> country_object<span class="token punctuation">.</span>attrib<span class="token punctuation">)</span>
gdppc_object <span class="token operator">=</span> country_object<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;gdppc&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>gdppc_object<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>gdppc_object<span class="token punctuation">.</span>attrib<span class="token punctuation">,</span>gdppc_object<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
&lt;data&gt;
    &lt;country name=&quot;Liechtenstein&quot;&gt;
        &lt;rank&gt;2&lt;/rank&gt;
        &lt;year&gt;2023&lt;/year&gt;
        &lt;gdppc&gt;141100&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Austria&quot; /&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Switzerland&quot; /&gt;
    &lt;/country&gt;
     &lt;country name=&quot;Panama&quot;&gt;
        &lt;rank&gt;69&lt;/rank&gt;
        &lt;year&gt;2026&lt;/year&gt;
        &lt;gdppc&gt;13600&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Costa Rica&quot; /&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Colombia&quot; /&gt;
    &lt;/country&gt;
&lt;/data&gt;
&quot;&quot;&quot;</span>

<span class="token comment">## 获取根标签 data</span>
root <span class="token operator">=</span> ET<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token comment">## 获取data标签的孩子标签</span>
<span class="token keyword">for</span> child <span class="token keyword">in</span> root<span class="token punctuation">:</span>
    <span class="token comment">## child.tag = conntry</span>
    <span class="token comment">## child.attrib = {&quot;name&quot;:&quot;Liechtenstein&quot;}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>tag<span class="token punctuation">,</span> child<span class="token punctuation">.</span>attrib<span class="token punctuation">)</span>
    <span class="token keyword">for</span> node <span class="token keyword">in</span> child<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag<span class="token punctuation">,</span> node<span class="token punctuation">.</span>attrib<span class="token punctuation">,</span> node<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
&lt;data&gt;
    &lt;country name=&quot;Liechtenstein&quot;&gt;
        &lt;rank&gt;2&lt;/rank&gt;
        &lt;year&gt;2023&lt;/year&gt;
        &lt;gdppc&gt;141100&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Austria&quot; /&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Switzerland&quot; /&gt;
    &lt;/country&gt;
     &lt;country name=&quot;Panama&quot;&gt;
        &lt;rank&gt;69&lt;/rank&gt;
        &lt;year&gt;2026&lt;/year&gt;
        &lt;gdppc&gt;13600&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Costa Rica&quot; /&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Colombia&quot; /&gt;
    &lt;/country&gt;
&lt;/data&gt;
&quot;&quot;&quot;</span>

root <span class="token operator">=</span> ET<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token keyword">for</span> child <span class="token keyword">in</span> root<span class="token punctuation">.</span><span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token string">&#39;year&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>tag<span class="token punctuation">,</span> child<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
&lt;data&gt;
    &lt;country name=&quot;Liechtenstein&quot;&gt;
        &lt;rank&gt;2&lt;/rank&gt;
        &lt;year&gt;2023&lt;/year&gt;
        &lt;gdppc&gt;141100&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Austria&quot; /&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Switzerland&quot; /&gt;
    &lt;/country&gt;
     &lt;country name=&quot;Panama&quot;&gt;
        &lt;rank&gt;69&lt;/rank&gt;
        &lt;year&gt;2026&lt;/year&gt;
        &lt;gdppc&gt;13600&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Costa Rica&quot; /&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Colombia&quot; /&gt;
    &lt;/country&gt;
&lt;/data&gt;
&quot;&quot;&quot;</span>

root <span class="token operator">=</span> ET<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
v1 <span class="token operator">=</span> root<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;country&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span>

v2 <span class="token operator">=</span> root<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;country&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;rank&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v2<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-修改和删除节点" tabindex="-1"><a class="header-anchor" href="#_4-3-修改和删除节点" aria-hidden="true">#</a> 4.3 修改和删除节点</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
&lt;data&gt;
    &lt;country name=&quot;Liechtenstein&quot;&gt;
        &lt;rank&gt;2&lt;/rank&gt;
        &lt;year&gt;2023&lt;/year&gt;
        &lt;gdppc&gt;141100&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Austria&quot; /&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Switzerland&quot; /&gt;
    &lt;/country&gt;
     &lt;country name=&quot;Panama&quot;&gt;
        &lt;rank&gt;69&lt;/rank&gt;
        &lt;year&gt;2026&lt;/year&gt;
        &lt;gdppc&gt;13600&lt;/gdppc&gt;
        &lt;neighbor direction=&quot;W&quot; name=&quot;Costa Rica&quot; /&gt;
        &lt;neighbor direction=&quot;E&quot; name=&quot;Colombia&quot; /&gt;
    &lt;/country&gt;
&lt;/data&gt;
&quot;&quot;&quot;</span>

root <span class="token operator">=</span> ET<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token comment">## 修改节点内容和属性</span>
rank <span class="token operator">=</span> root<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;country&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;rank&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rank<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
rank<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&quot;999&quot;</span>
rank<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2020-11-11&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>rank<span class="token punctuation">.</span>text<span class="token punctuation">,</span> rank<span class="token punctuation">.</span>attrib<span class="token punctuation">)</span>
<span class="token comment">############ 保存文件 ############</span>
tree <span class="token operator">=</span> ET<span class="token punctuation">.</span>ElementTree<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;new.xml&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>


<span class="token comment">## 删除节点</span>
root<span class="token punctuation">.</span>remove<span class="token punctuation">(</span> root<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;country&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;country&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">############ 保存文件 ############</span>
tree <span class="token operator">=</span> ET<span class="token punctuation">.</span>ElementTree<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;newnew.xml&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-构建文档" tabindex="-1"><a class="header-anchor" href="#_4-4-构建文档" aria-hidden="true">#</a> 4.4 构建文档</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>home</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grandson</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grandson</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grandson</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grandson</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>home</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

<span class="token comment">## 创建根标签</span>
root <span class="token operator">=</span> ET<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 创建节点大儿子</span>
son1 <span class="token operator">=</span> ET<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&#39;son&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">## 创建小儿子</span>
son2 <span class="token operator">=</span> ET<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&#39;son&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿2&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## 在大儿子中创建两个孙子</span>
grandson1 <span class="token operator">=</span> ET<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&#39;grandson&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿11&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
grandson2 <span class="token operator">=</span> ET<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&#39;grandson&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿12&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
son1<span class="token punctuation">.</span>append<span class="token punctuation">(</span>grandson1<span class="token punctuation">)</span>
son1<span class="token punctuation">.</span>append<span class="token punctuation">(</span>grandson2<span class="token punctuation">)</span>

<span class="token comment">## 把儿子添加到根节点中</span>
root<span class="token punctuation">.</span>append<span class="token punctuation">(</span>son1<span class="token punctuation">)</span>
root<span class="token punctuation">.</span>append<span class="token punctuation">(</span>son2<span class="token punctuation">)</span>

tree <span class="token operator">=</span> ET<span class="token punctuation">.</span>ElementTree<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;oooo.xml&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> short_empty_elements<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>famliy</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grandson</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grandson</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grandson</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grandson</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>famliy</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

<span class="token comment">## 创建根节点</span>
root <span class="token operator">=</span> ET<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&quot;famliy&quot;</span><span class="token punctuation">)</span>


<span class="token comment">## 创建大儿子</span>
son1 <span class="token operator">=</span> root<span class="token punctuation">.</span>makeelement<span class="token punctuation">(</span><span class="token string">&#39;son&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">## 创建小儿子</span>
son2 <span class="token operator">=</span> root<span class="token punctuation">.</span>makeelement<span class="token punctuation">(</span><span class="token string">&#39;son&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿2&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## 在大儿子中创建两个孙子</span>
grandson1 <span class="token operator">=</span> son1<span class="token punctuation">.</span>makeelement<span class="token punctuation">(</span><span class="token string">&#39;grandson&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿11&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
grandson2 <span class="token operator">=</span> son1<span class="token punctuation">.</span>makeelement<span class="token punctuation">(</span><span class="token string">&#39;grandson&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿12&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

son1<span class="token punctuation">.</span>append<span class="token punctuation">(</span>grandson1<span class="token punctuation">)</span>
son1<span class="token punctuation">.</span>append<span class="token punctuation">(</span>grandson2<span class="token punctuation">)</span>


<span class="token comment">## 把儿子添加到根节点中</span>
root<span class="token punctuation">.</span>append<span class="token punctuation">(</span>son1<span class="token punctuation">)</span>
root<span class="token punctuation">.</span>append<span class="token punctuation">(</span>son2<span class="token punctuation">)</span>

tree <span class="token operator">=</span> ET<span class="token punctuation">.</span>ElementTree<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;oooo.xml&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>famliy</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>孙子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>儿2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>famliy</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET


<span class="token comment">## 创建根节点</span>
root <span class="token operator">=</span> ET<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&quot;famliy&quot;</span><span class="token punctuation">)</span>


<span class="token comment">## 创建节点大儿子</span>
son1 <span class="token operator">=</span> ET<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&quot;son&quot;</span><span class="token punctuation">,</span> attrib<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">## 创建小儿子</span>
son2 <span class="token operator">=</span> ET<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&quot;son&quot;</span><span class="token punctuation">,</span> attrib<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;儿2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## 在大儿子中创建一个孙子</span>
grandson1 <span class="token operator">=</span> ET<span class="token punctuation">.</span>SubElement<span class="token punctuation">(</span>son1<span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> attrib<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;儿11&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
grandson1<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;孙子&#39;</span>


et <span class="token operator">=</span> ET<span class="token punctuation">.</span>ElementTree<span class="token punctuation">(</span>root<span class="token punctuation">)</span>  <span class="token comment">##生成文档对象</span>
et<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;test.xml&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user</span><span class="token punctuation">&gt;</span></span>&lt;![CDATA[你好呀]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

<span class="token comment">## 创建根节点</span>
root <span class="token operator">=</span> ET<span class="token punctuation">.</span>Element<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
root<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&quot;&lt;![CDATA[你好呀]]&quot;</span>

et <span class="token operator">=</span> ET<span class="token punctuation">.</span>ElementTree<span class="token punctuation">(</span>root<span class="token punctuation">)</span>  <span class="token comment">## 生成文档对象</span>
et<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;test.xml&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>content <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;&lt;xml&gt;
    &lt;ToUserName&gt;&lt;![CDATA[gh_7f083739789a]]&gt;&lt;/ToUserName&gt;
    &lt;FromUserName&gt;&lt;![CDATA[oia2TjuEGTNoeX76QEjQNrcURxG8]]&gt;&lt;/FromUserName&gt;
    &lt;CreateTime&gt;1395658920&lt;/CreateTime&gt;
    &lt;MsgType&gt;&lt;![CDATA[event]]&gt;&lt;/MsgType&gt;
    &lt;Event&gt;&lt;![CDATA[TEMPLATESENDJOBFINISH]]&gt;&lt;/Event&gt;
    &lt;MsgID&gt;200163836&lt;/MsgID&gt;
    &lt;Status&gt;&lt;![CDATA[success]]&gt;&lt;/Status&gt;
&lt;/xml&gt;&quot;&quot;&quot;</span>

<span class="token keyword">from</span> xml<span class="token punctuation">.</span>etree <span class="token keyword">import</span> ElementTree <span class="token keyword">as</span> ET

info <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
root <span class="token operator">=</span> ET<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
<span class="token keyword">for</span> node <span class="token keyword">in</span> root<span class="token punctuation">:</span>
    <span class="token comment">## print(node.tag,node.text)</span>
    info<span class="token punctuation">[</span>node<span class="token punctuation">.</span>tag<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">.</span>text
<span class="token keyword">print</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-excel格式文件" tabindex="-1"><a class="header-anchor" href="#_5-excel格式文件" aria-hidden="true">#</a> 5.Excel格式文件</h3><p>Python内部未提供处理Excel文件的功能，想要在Python中操作Excel需要按照第三方的模块。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install openpyxl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此模块中集成了Python操作Excel的相关功能，接下来我们就需要去学习该模块提供的相关功能即可。</p><p>![image-20201218012118097](E:/360Downloads/后端/路飞学城 新版 Python全栈开发（中级） 140GB/资料课件/模块2/day09 文件操作相关/笔记/assets/image-20201218012118097.png)</p><h4 id="_5-1-读excel" tabindex="-1"><a class="header-anchor" href="#_5-1-读excel" aria-hidden="true">#</a> 5.1 读Excel</h4><ul><li><p>读sheet</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> load_workbook

wb <span class="token operator">=</span> load_workbook<span class="token punctuation">(</span><span class="token string">&quot;files/p1.xlsx&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## sheet相关操作</span>

<span class="token comment">## 1.获取excel文件中的所有sheet名称</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
print(wb.sheetnames) ## [&#39;数据导出&#39;, &#39;用户列表&#39;, &#39;Sheet1&#39;, &#39;Sheet2&#39;]
&quot;&quot;&quot;</span>

<span class="token comment">## 2.选择sheet，基于sheet名称</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb[&quot;数据导出&quot;]
cell = sheet.cell(1, 2)
print(cell.value)
&quot;&quot;&quot;</span>

<span class="token comment">## 3.选择sheet，基于索引位置</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb.worksheets[0]
cell = sheet.cell(1,2)
print(cell.value)
&quot;&quot;&quot;</span>

<span class="token comment">## 4.循环所有的sheet</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
for name in wb.sheetnames:
    sheet = wb[name]
    cell = sheet.cell(1, 1)
    print(cell.value)
&quot;&quot;&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
for sheet in wb.worksheets:
    cell = sheet.cell(1, 1)
    print(cell.value)
&quot;&quot;&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
for sheet in wb:
    cell = sheet.cell(1, 1)
    print(cell.value)
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读sheet中单元格的数据</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> load_workbook

wb <span class="token operator">=</span> load_workbook<span class="token punctuation">(</span><span class="token string">&quot;files/p1.xlsx&quot;</span><span class="token punctuation">)</span>
sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>worksheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token comment">## 1.获取第N行第N列的单元格(位置是从1开始）</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
cell = sheet.cell(1, 1)

print(cell.value)
print(cell.style)
print(cell.font)
print(cell.alignment)
&quot;&quot;&quot;</span>

<span class="token comment">## 2.获取某个单元格</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
c1 = sheet[&quot;A2&quot;]
print(c1.value)

c2 = sheet[&#39;D4&#39;]
print(c2.value)
&quot;&quot;&quot;</span>

<span class="token comment">## 3.第N行所有的单元格</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
for cell in sheet[1]:
    print(cell.value)
&quot;&quot;&quot;</span>

<span class="token comment">## 4.所有行的数据（获取某一列数据）</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
for row in sheet.rows:
    print(row[0].value, row[1].value)
&quot;&quot;&quot;</span>

<span class="token comment">## 5.获取所有列的数据</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
for col in sheet.columns:
    print(col[1].value)
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读合并的单元格</p><p>![image-20201218011732755](E:/360Downloads/后端/路飞学城 新版 Python全栈开发（中级） 140GB/资料课件/模块2/day09 文件操作相关/笔记/assets/image-20201218011732755.png)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> load_workbook

wb <span class="token operator">=</span> load_workbook<span class="token punctuation">(</span><span class="token string">&quot;files/p1.xlsx&quot;</span><span class="token punctuation">)</span>
sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>worksheets<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">## 获取第N行第N列的单元格(位置是从1开始）</span>
c1 <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span>  <span class="token comment">## &lt;Cell &#39;Sheet1&#39;.A1&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">## 用户信息</span>

c2 <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span>  <span class="token comment">## &lt;MergedCell &#39;Sheet1&#39;.B1&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c2<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">## None</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> load_workbook

wb <span class="token operator">=</span> load_workbook<span class="token punctuation">(</span><span class="token string">&#39;files/p1.xlsx&#39;</span><span class="token punctuation">)</span>
sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>worksheets<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> sheet<span class="token punctuation">.</span>rows<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; 输出结果
(&lt;Cell &#39;Sheet1&#39;.A1&gt;, &lt;MergedCell &#39;Sheet1&#39;.B1&gt;, &lt;Cell &#39;Sheet1&#39;.C1&gt;)
(&lt;Cell &#39;Sheet1&#39;.A2&gt;, &lt;Cell &#39;Sheet1&#39;.B2&gt;, &lt;Cell &#39;Sheet1&#39;.C2&gt;)
(&lt;Cell &#39;Sheet1&#39;.A3&gt;, &lt;Cell &#39;Sheet1&#39;.B3&gt;, &lt;Cell &#39;Sheet1&#39;.C3&gt;)
(&lt;MergedCell &#39;Sheet1&#39;.A4&gt;, &lt;Cell &#39;Sheet1&#39;.B4&gt;, &lt;Cell &#39;Sheet1&#39;.C4&gt;)
(&lt;Cell &#39;Sheet1&#39;.A5&gt;, &lt;Cell &#39;Sheet1&#39;.B5&gt;, &lt;Cell &#39;Sheet1&#39;.C5&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_5-1-写excel" tabindex="-1"><a class="header-anchor" href="#_5-1-写excel" aria-hidden="true">#</a> 5.1 写Excel</h4><p>在Excel中想要写文件，大致要分为在：</p><ul><li><p>原Excel文件基础上写内容。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> load_workbook

wb <span class="token operator">=</span> load_workbook<span class="token punctuation">(</span><span class="token string">&#39;files/p1.xlsx&#39;</span><span class="token punctuation">)</span>
sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>worksheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token comment">## 找到单元格，并修改单元格的内容</span>
cell <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
cell<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;新的开始&quot;</span>

<span class="token comment">## 将excel文件保存到p2.xlsx文件中</span>
wb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;files/p2.xlsx&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新创建Excel文件写内容。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> workbook

<span class="token comment">## 创建excel且默认会创建一个sheet（名称为Sheet）</span>
wb <span class="token operator">=</span> workbook<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token punctuation">)</span>

sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>worksheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">## 或 sheet = wb[&quot;Sheet&quot;]</span>

<span class="token comment">## 找到单元格，并修改单元格的内容</span>
cell <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
cell<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;新的开始&quot;</span>

<span class="token comment">## 将excel文件保存到p2.xlsx文件中</span>
wb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;files/p2.xlsx&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>在了解了如何读取Excel和创建Excel之后，后续对于Excel中的sheet和cell操作基本上都相同。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> workbook

wb <span class="token operator">=</span> workbook<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">## Sheet</span>

<span class="token comment">## 1. 修改sheet名称</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb.worksheets[0]
sheet.title = &quot;数据集&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 2. 创建sheet并设置sheet颜色</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb.create_sheet(&quot;工作计划&quot;, 0)
sheet.sheet_properties.tabColor = &quot;1072BA&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 3. 默认打开的sheet</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
wb.active = 0
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 4. 拷贝sheet</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb.create_sheet(&quot;工作计划&quot;)
sheet.sheet_properties.tabColor = &quot;1072BA&quot;

new_sheet = wb.copy_worksheet(wb[&quot;Sheet&quot;])
new_sheet.title = &quot;新的计划&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 5.删除sheet</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
del wb[&quot;用户列表&quot;]
wb.save(&#39;files/p2.xlsx&#39;)
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openpyxl <span class="token keyword">import</span> load_workbook
<span class="token keyword">from</span> openpyxl<span class="token punctuation">.</span>styles <span class="token keyword">import</span> Alignment<span class="token punctuation">,</span> Border<span class="token punctuation">,</span> Side<span class="token punctuation">,</span> Font<span class="token punctuation">,</span> PatternFill<span class="token punctuation">,</span> GradientFill


wb <span class="token operator">=</span> load_workbook<span class="token punctuation">(</span><span class="token string">&#39;files/p1.xlsx&#39;</span><span class="token punctuation">)</span>

sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>worksheets<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment">## 1. 获取某个单元格，修改值</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
cell = sheet.cell(1, 1)
cell.value = &quot;开始&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 2.  获取某个单元格，修改值</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet[&quot;B3&quot;] = &quot;Alex&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 3. 获取某些单元格，修改值</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
cell_list = sheet[&quot;B2&quot;:&quot;C3&quot;]
for row in cell_list:
    for cell in row:
        cell.value = &quot;新的值&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 4. 对齐方式</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
cell = sheet.cell(1, 1)

## horizontal，水平方向对齐方式：&quot;general&quot;, &quot;left&quot;, &quot;center&quot;, &quot;right&quot;, &quot;fill&quot;, &quot;justify&quot;, &quot;centerContinuous&quot;, &quot;distributed&quot;
## vertical，垂直方向对齐方式：&quot;top&quot;, &quot;center&quot;, &quot;bottom&quot;, &quot;justify&quot;, &quot;distributed&quot;
## text_rotation，旋转角度。
## wrap_text，是否自动换行。
cell.alignment = Alignment(horizontal=&#39;center&#39;, vertical=&#39;distributed&#39;, text_rotation=45, wrap_text=True)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 5. 边框</span>
<span class="token comment">## side的style有如下：dashDot&#39;,&#39;dashDotDot&#39;, &#39;dashed&#39;,&#39;dotted&#39;,&#39;double&#39;,&#39;hair&#39;, &#39;medium&#39;, &#39;mediumDashDot&#39;, &#39;mediumDashDotDot&#39;,&#39;mediumDashed&#39;, &#39;slantDashDot&#39;, &#39;thick&#39;, &#39;thin&#39;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
cell = sheet.cell(9, 2)
cell.border = Border(
    top=Side(style=&quot;thin&quot;, color=&quot;FFB6C1&quot;), 
    bottom=Side(style=&quot;dashed&quot;, color=&quot;FFB6C1&quot;),
    left=Side(style=&quot;dashed&quot;, color=&quot;FFB6C1&quot;),
    right=Side(style=&quot;dashed&quot;, color=&quot;9932CC&quot;),
    diagonal=Side(style=&quot;thin&quot;, color=&quot;483D8B&quot;),  ## 对角线
    diagonalUp=True,  ## 左下 ~ 右上
    diagonalDown=True  ## 左上 ~ 右下
)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 6.字体</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
cell = sheet.cell(5, 1)
cell.font = Font(name=&quot;微软雅黑&quot;, size=45, color=&quot;ff0000&quot;, underline=&quot;single&quot;)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 7.背景色</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
cell = sheet.cell(5, 3)
cell.fill = PatternFill(&quot;solid&quot;, fgColor=&quot;99ccff&quot;)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 8.渐变背景色</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
cell = sheet.cell(5, 5)
cell.fill = GradientFill(&quot;linear&quot;, stop=(&quot;FFFFFF&quot;, &quot;99ccff&quot;, &quot;000000&quot;))
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 9.宽高（索引从1开始）</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet.row_dimensions[1].height = 50
sheet.column_dimensions[&quot;E&quot;].width = 100
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 10.合并单元格</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet.merge_cells(&quot;B2:D8&quot;)
sheet.merge_cells(start_row=15, start_column=3, end_row=18, end_column=8)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet.unmerge_cells(&quot;B2:D8&quot;)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 11.写入公式</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb.worksheets[3]
sheet[&quot;D1&quot;] = &quot;合计&quot;
sheet[&quot;D2&quot;] = &quot;=B2*C2&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb.worksheets[3]
sheet[&quot;D3&quot;] = &quot;=SUM(B3,C3)&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 12.删除</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
## idx，要删除的索引位置
## amount，从索引位置开始要删除的个数（默认为1）
sheet.delete_rows(idx=1, amount=20)
sheet.delete_cols(idx=1, amount=3)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 13.插入</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet.insert_rows(idx=5, amount=10)
sheet.insert_cols(idx=3, amount=2)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 14.循环写内容</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb[&quot;Sheet&quot;]
cell_range = sheet[&#39;A1:C2&#39;]
for row in cell_range:
    for cell in row:
        cell.value = &quot;xx&quot;

for row in sheet.iter_rows(min_row=5, min_col=1, max_col=7, max_row=10):
    for cell in row:
        cell.value = &quot;oo&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 15.移动</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
## 将H2:J10范围的数据，向右移动15个位置、向上移动1个位置
sheet.move_range(&quot;H2:J10&quot;,rows=1, cols=15)
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet = wb.worksheets[3]
sheet[&quot;D1&quot;] = &quot;合计&quot;
sheet[&quot;D2&quot;] = &quot;=B2*C2&quot;
sheet[&quot;D3&quot;] = &quot;=SUM(B3,C3)&quot;
sheet.move_range(&quot;B1:D3&quot;,cols=10, translate=True) ## 自动翻译公式
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 16.打印区域</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet.print_area = &quot;A1:D200&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 17.打印时，每个页面的固定表头</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
sheet.print_title_cols = &quot;A:D&quot;
sheet.print_title_rows = &quot;1:3&quot;
wb.save(&quot;p2.xlsx&quot;)
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-压缩文件" tabindex="-1"><a class="header-anchor" href="#_6-压缩文件" aria-hidden="true">#</a> 6.压缩文件</h3><p>基于Python内置的shutil模块可以实现对压缩文件的操作。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> shutil

<span class="token comment">## 1. 压缩文件</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
## base_name，压缩后的压缩包文件
## format，压缩的格式，例如：&quot;zip&quot;, &quot;tar&quot;, &quot;gztar&quot;, &quot;bztar&quot;, or &quot;xztar&quot;.
## root_dir，要压缩的文件夹路径
&quot;&quot;&quot;</span>
<span class="token comment">## shutil.make_archive(base_name=r&#39;datafile&#39;,format=&#39;zip&#39;,root_dir=r&#39;files&#39;)</span>


<span class="token comment">## 2. 解压文件</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
## filename，要解压的压缩包文件
## extract_dir，解压的路径
## format，压缩文件格式
&quot;&quot;&quot;</span>
<span class="token comment">## shutil.unpack_archive(filename=r&#39;datafile.zip&#39;, extract_dir=r&#39;xxxxxx/xo&#39;, format=&#39;zip&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-路径相关" tabindex="-1"><a class="header-anchor" href="#_7-路径相关" aria-hidden="true">#</a> 7.路径相关</h3><h4 id="_7-1-转义" tabindex="-1"><a class="header-anchor" href="#_7-1-转义" aria-hidden="true">#</a> 7.1 转义</h4><p>windows路径使用的是\\，linux路径使用的是/。</p><p>特别的，在windows系统中如果有这样的一个路径 <code>D:\\nxxx\\txxx\\x1</code>，程序会报错。因为在路径中存在特殊符 <code>\\n</code>（换行符）和<code>\\t</code>（制表符），Python解释器无法自动区分。</p><p>所以，在windows中编写路径时，一般有两种方式：</p><ul><li>加转义符，例如：<code>&quot;D:\\\\nxxx\\\\txxx\\\\x1&quot;</code></li><li>路径前加r，例如：<code>r&quot;D:\\\\nxxx\\\\txxx\\\\x1&quot;</code></li></ul><h4 id="_7-2-程序当前路径" tabindex="-1"><a class="header-anchor" href="#_7-2-程序当前路径" aria-hidden="true">#</a> 7.2 程序当前路径</h4><p>项目中如果使用了相对路径，那么一定要注意当前所在的位置。</p><p>例如：在<code>/Users/wupeiqi/PycharmProjects/CodeRepository/</code>路径下编写 <code>demo.py</code>文件</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;a1.txt&quot;</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;你好呀&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用以下两种方式去运行：</p><ul><li><p>方式1，文件会创建在 <code>/Users/wupeiqi/PycharmProjects/CodeRepository/</code> 目录下。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>cd <span class="token operator">/</span>Users<span class="token operator">/</span>wupeiqi<span class="token operator">/</span>PycharmProjects<span class="token operator">/</span>CodeRepository<span class="token operator">/</span>
python demo<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式2，文件会创建在 <code>/Users/wupeiqi</code>目录下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /Users/wupeiqi
python /Users/wupeiqi/PycharmProjects/CodeRepository/demo.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token triple-quoted-string string">&quot;&quot;&quot;
## 1.获取当前运行的py脚本所在路径
abs = os.path.abspath(__file__)
print(abs) ## /Users/wupeiqi/PycharmProjects/luffyCourse/day09/20.路径相关.py
path = os.path.dirname(abs)
print(path) ## /Users/wupeiqi/PycharmProjects/luffyCourse/day09
&quot;&quot;&quot;</span>
base_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span>
file_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>base_dir<span class="token punctuation">,</span> <span class="token string">&#39;files&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    file_object <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    data <span class="token operator">=</span> file_object<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    file_object<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;文件路径不存在&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-文件和路径相关" tabindex="-1"><a class="header-anchor" href="#_7-3-文件和路径相关" aria-hidden="true">#</a> 7.3 文件和路径相关</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> shutil
<span class="token keyword">import</span> os

<span class="token comment">## 1. 获取当前脚本绝对路径</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
abs_path = os.path.abspath(__file__)
print(abs_path)
&quot;&quot;&quot;</span>

<span class="token comment">## 2. 获取当前文件的上级目录</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
base_path = os.path.dirname( os.path.dirname(路径) ）
print(base_path)
&quot;&quot;&quot;</span>

<span class="token comment">## 3. 路径拼接</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
p1 = os.path.join(base_path, &#39;xx&#39;)
print(p1)

p2 = os.path.join(base_path, &#39;xx&#39;, &#39;oo&#39;, &#39;a1.png&#39;)
print(p2)
&quot;&quot;&quot;</span>

<span class="token comment">## 4. 判断路径是否存在</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
exists = os.path.exists(p1)
print(exists)
&quot;&quot;&quot;</span>

<span class="token comment">## 5. 创建文件夹</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
os.makedirs(路径)
&quot;&quot;&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
path = os.path.join(base_path, &#39;xx&#39;, &#39;oo&#39;, &#39;uuuu&#39;)
if not os.path.exists(path):
    os.makedirs(path)
&quot;&quot;&quot;</span>

<span class="token comment">## 6. 是否是文件夹</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
file_path = os.path.join(base_path, &#39;xx&#39;, &#39;oo&#39;, &#39;uuuu.png&#39;)
is_dir = os.path.isdir(file_path)
print(is_dir) ## False

folder_path = os.path.join(base_path, &#39;xx&#39;, &#39;oo&#39;, &#39;uuuu&#39;)
is_dir = os.path.isdir(folder_path)
print(is_dir) ## True

&quot;&quot;&quot;</span>

<span class="token comment">## 7. 删除文件或文件夹</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
os.remove(&quot;文件路径&quot;)
&quot;&quot;&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
path = os.path.join(base_path, &#39;xx&#39;)
shutil.rmtree(path)
&quot;&quot;&quot;</span>

<span class="token comment">## 8. 拷贝文件夹</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
shutil.copytree(&quot;/Users/wupeiqi/Desktop/图/csdn/&quot;,&quot;/Users/wupeiqi/PycharmProjects/CodeRepository/files&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 9.拷贝文件</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
shutil.copy(&quot;/Users/wupeiqi/Desktop/图/csdn/WX20201123-112406@2x.png&quot;,&quot;/Users/wupeiqi/PycharmProjects/CodeRepository/&quot;)
shutil.copy(&quot;/Users/wupeiqi/Desktop/图/csdn/WX20201123-112406@2x.png&quot;,&quot;/Users/wupeiqi/PycharmProjects/CodeRepository/x.png&quot;)
&quot;&quot;&quot;</span>

<span class="token comment">## 10.文件或文件夹重命名</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
shutil.move(&quot;/Users/wupeiqi/PycharmProjects/CodeRepository/x.png&quot;,&quot;/Users/wupeiqi/PycharmProjects/CodeRepository/xxxx.png&quot;)
shutil.move(&quot;/Users/wupeiqi/PycharmProjects/CodeRepository/files&quot;,&quot;/Users/wupeiqi/PycharmProjects/CodeRepository/images&quot;)
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>今天我们主要围绕着<code>文件</code> 相关的操作来展开进行讲解，让大家能够基于Python处理不同格式的文件。由于涉及的知识点比较多，所以今日的内容学起来会比较耗时，但都比较简单，只需要理解并编写好相关笔记以便后期开发时翻阅。</p><ol><li><p>文件相对路径，在使用相对路径时可能会执行程序的目录不同，导致路径出问题。所以，如若使用相对路径请务必清楚当前运行程序所在目录。</p></li><li><p>文件绝对路径（推荐），不要将文件路径写死，而是基于 os 模块中的相关功能自动化获取绝对路径，以方便项目移动到其他文件或电脑上。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
base_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span>
file_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>base_dir<span class="token punctuation">,</span> <span class="token string">&#39;files&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;info.txt&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>路径转义</p></li></ol><ul><li>手动写路径，需要自己在路径中添加 r 或 加入 \\ 来进行处理。</li><li>基于os.path.join拼接，内部自动处理，不需要手动处理。</li></ul><ol start="4"><li><p>内置函数、内置模块、第三方模块的区别？</p></li><li><p>如何去下载安装第三方模块？</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install 模块名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><ul><li>requests模块，可以用来发送网络请求。</li><li>openpyxl模块，处理Excel格式的文件。</li></ul><ol start="6"><li><p>基本文件的读写、打开模式、上下文管理。</p></li><li><p>其他格式：csv、ini、xml、excel格式的处理（无序记忆，做好笔记即可）。</p></li></ol><h3 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h3><ol><li>基于csv格式实现 用户的注册 &amp; 登录认证。详细需求如下：</li></ol><ul><li>用户注册时，新注册用户要写入文件csv文件中，输入Q或q则退出。</li><li>用户登录时，逐行读取csv文件中的用户信息并进行校验。</li><li>提示：文件路径须使用os模块构造的绝对路径的方式。</li></ul><ol start="2"><li><p>补充代码：实现去网上获取指定地区的天气信息，并写入到Excel中。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    city <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入城市（Q/q退出）：&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> city<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    url <span class="token operator">=</span> <span class="token string">&quot;http://ws.webxml.com.cn//WebServices/WeatherWebService.asmx/getWeatherbyCityName?theCityName={}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span>
    res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">)</span>
    <span class="token keyword">print</span>（res<span class="token punctuation">.</span>text）

    <span class="token comment">## 1.提取XML格式中的数据</span>
    <span class="token comment">## 2.为每个城市创建一个sheet，并将获取的xml格式中的数据写入到excel中。 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读取ini文件内容，按照规则写入到Excel中。</p></li></ol><ul><li><p>ini文件内容如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql</span>
<span class="token key attr-name">socket</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token key attr-name">log-bin</span><span class="token punctuation">=</span><span class="token value attr-value">py-mysql-bin</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token key attr-name">collation-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8_general_ci</span>
<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/mysqld.log</span>
<span class="token comment">## Disabling symbolic-links is recommended to prevent assorted security risks</span>
<span class="token key attr-name">symbolic-links</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld_safe</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/mariadb/mariadb.log</span>
<span class="token key attr-name">pid-file</span><span class="token punctuation">=</span><span class="token value attr-value">/var/run/mariadb/mariadb.pid</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>读取ini格式的文件，并创建一个excel文件，且为每个节点创建一个sheet，然后将节点下的键值写入到excel中，按照如下格式。 <img src="https://cdn.jsdelivr.net/gh/xiaou61/pictures/202307272031169.png" alt="image-20201218204922898" style="zoom:33%;"></p><ul><li>首行，字体白色 &amp; 单元格背景色蓝色。</li><li>内容均居中。</li><li>边框。</li></ul></li></ul><ol start="4"><li><p>补充代码，实现如下功能。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

<span class="token comment">## 1.下载文件</span>
file_url <span class="token operator">=</span> <span class="token string">&#39;https://files.cnblogs.com/files/wupeiqi/HtmlStore.zip&#39;</span>
res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>file_url<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>content<span class="token punctuation">)</span>

<span class="token comment">## 2.将下载的文件保存到当前执行脚本同级目录下 /files/package/ 目录下（且文件名为HtmlStore.zip）</span>

<span class="token comment">## 3.在将下载下来的文件解压到 /files/html/ 目录下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,65);function m(b,g){const t=o("ExternalLinkIcon");return i(),l("div",null,[u,n("p",null,[n("a",r,[s("可扩展标记语言"),e(t)]),s("，是一种简单的数据存储语言，XML 被设计用来传输和存储数据。")]),d,n("p",null,[s("例如："),n("a",k,[s("https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html"),e(t)])]),v])}const f=p(c,[["render",m],["__file","2.html.vue"]]);export{f as default};
