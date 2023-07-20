<template><div><h2 id="学习算法和刷题的框架思维" tabindex="-1"><a class="header-anchor" href="#学习算法和刷题的框架思维" aria-hidden="true">#</a> 学习算法和刷题的框架思维</h2>
<p>学习解决问题的<strong>思路、套路、框架</strong>，养成“框架思维”，<strong>不应该纠结于问题的细节</strong>，把握问题的共性和本质，做到举一反三。</p>
<h3 id="数据结构的存储方式" tabindex="-1"><a class="header-anchor" href="#数据结构的存储方式" aria-hidden="true">#</a> 数据结构的存储方式</h3>
<p>数据结构的底层存储方式只有两种：<code v-pre>数组（顺序存储）和链表（链式存储）</code>。</p>
<p>其他的数据结构，比如哈希表、栈、队列、堆、树、图等都是属于具体的上层建筑，都是在数组或者链表上的特殊操作，只是<code v-pre>API</code>特性不同而已。</p>
<div class="custom-container tip">
<p class="custom-container-title">数组</p>
<p>数组由于是紧凑连续存储，因此可以随机访问，通过索引快速找到对应的元素，而且相对节约存储空间。但正因为连续存储，内存空间必须一次性分配足，所以数组如果要扩容，需要先重新分配一块更大的空间，再把数据全部复制进去，时间复杂度为<code v-pre>O(N)</code>；而且如果想在数组中间和开始位置进行插入和删除操作，每次必须移动后面的所有数据以保持连续，时间复杂度为<code v-pre>O(N)</code>。</p>
<p><strong>数组在开始、中间、最后位置的增删改查分析如下：</strong></p>
<ul>
<li>开始位置：增加和删除都需要挪动元素，所以效率不高，但是查询和修改就比较高效。</li>
<li>中间位置：增加和删除都需要挪动元素，所以效率不高，但是查询和修改就比较高效。</li>
<li>最后位置：增加和删除位置不需要挪动元素，效率比较高，同时查询和修改效率也比较高。</li>
</ul>
</div>
<div class="custom-container tip">
<p class="custom-container-title">链表</p>
<p>链表因为元素不连续，靠指针指向下一个元素的位置，所以不存在数组的扩容问题；如果知道某一元素的前驱和后继，操作指针即可删除该元素或者插入新元素，时间复杂度为<code v-pre>O(1)</code>。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的地址，所以不能随机访问；而且由于每个元素必须存储指向前后元素位置的指针，因此会消耗相对更多的存储空间。</p>
<p><strong>链表在开始、中间、最后位置的增删改查分析如下：</strong></p>
<ul>
<li>开始位置：增加和删除元素只需要操作指针，效率较高，查询和修改元素就在头节点不需要进行遍历，所以效率也比较高。</li>
<li>中间位置：增加和删除元素只需要操作指针，效率较高，查询和修改元素需要从头节点开始进行遍历，时间复杂度为<code v-pre>O(N)</code>，所以效率不高。</li>
<li>最后位置：增加和删除元素只需要操作指针，效率较高，查询和修改元素需要从头节点开始进行遍历，时间复杂度为<code v-pre>O(N)</code>，所以效率不高。</li>
</ul>
</div>
<p>综上所述：</p>
<ul>
<li><strong>如果想要查询和修改比较高效，那就使用数组的底层结构。</strong></li>
<li><strong>如果想要插入和删除比较高效，那就使用链表的底层结构。</strong></li>
</ul>
<h3 id="数据结构的基本操作" tabindex="-1"><a class="header-anchor" href="#数据结构的基本操作" aria-hidden="true">#</a> 数据结构的基本操作</h3>
<p>任何的数据结构其基本操作就是<strong>遍历+访问</strong>，在详细一点就是：<strong>各种数据结构在不同的应用场景下尽可能高效地进行增删改查。</strong></p>
<p>各种数据结构的遍历+访问无非就是<strong>两种形式：</strong><code v-pre>线性（for/while迭代）和非线性（递归）</code>。</p>
<p><strong>数组遍历框架</strong>，是典型的线形结构：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//迭代访问arr[i]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>链表遍历框架</strong>，兼具迭代和递归结构：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">traverse1</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span> p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//迭代遍历p.val</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">traverse2</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//前序遍历head.val</span>
    <span class="token function">traverse2</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//后序遍历head.val</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二叉树具有前序遍历、中序遍历、后序遍历，其实链表也有前序遍历和后序遍历。如果在前序遍历的位置打印<code v-pre>head.val</code>，那么就是<strong>正序打印</strong>链表；如果在后序遍历的位置打印<code v-pre>head.val</code>，那么就是<strong>倒序打印</strong>链表。</p>
<p><strong>二叉树遍历框架</strong>，是典型的非线性递归遍历结构：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//前序遍历</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//中序遍历</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//后序遍历</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码可以看到二叉树的遍历与链表的遍历方式非常相似，所以可以将遍历方式扩展到<code v-pre>N</code>叉树。</p>
<p><strong><code v-pre>N</code>叉树的遍历框架</strong>如下所示：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> childrens<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span> children <span class="token operator">:</span> root<span class="token punctuation">.</span>childrens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>N</code>叉树的遍历又可以扩展到图的遍历</strong>，因为图就是好几个<code v-pre>N</code>叉树的结合体。但是图有可能出现环，这其实很好解决，使用布尔数组<code v-pre>visited</code>做标记就可以了。所谓的框架思维就是记住这些遍历框架，根据具体问题在框架上添加代码即可。</p>
<h3 id="算法刷题指南" tabindex="-1"><a class="header-anchor" href="#算法刷题指南" aria-hidden="true">#</a> 算法刷题指南</h3>
<div class="custom-container tip">
<p class="custom-container-title">数据结构和算法</p>
<p><strong>数据结构</strong>是工具，<strong>算法</strong>是通过合适的工具解决特定问题的方法。</p>
</div>
<ul>
<li>先刷<strong>二叉树</strong>，因为二叉树是最容易培养框架思维的，而且大部分的常考算法<strong>本质上都是树的遍历问题。</strong></li>
<li>试着<strong>从框架看问题</strong>，而不要纠结于细节。</li>
</ul>
<h2 id="动态规划解题套路框架" tabindex="-1"><a class="header-anchor" href="#动态规划解题套路框架" aria-hidden="true">#</a> 动态规划解题套路框架</h2>
<h2 id="回溯算法解题套路框架" tabindex="-1"><a class="header-anchor" href="#回溯算法解题套路框架" aria-hidden="true">#</a> 回溯算法解题套路框架</h2>
<h3 id="全排列问题" tabindex="-1"><a class="header-anchor" href="#全排列问题" aria-hidden="true">#</a> 全排列问题</h3>
<h3 id="n皇后问题" tabindex="-1"><a class="header-anchor" href="#n皇后问题" aria-hidden="true">#</a> N皇后问题</h3>
<h3 id="最后总结" tabindex="-1"><a class="header-anchor" href="#最后总结" aria-hidden="true">#</a> 最后总结</h3>
<h2 id="bfs算法套路框架" tabindex="-1"><a class="header-anchor" href="#bfs算法套路框架" aria-hidden="true">#</a> BFS算法套路框架</h2>
<ul>
<li>
<p><code v-pre>BFS（广度优先搜索-Broad First Search）</code>和<code v-pre>DFS（深度优先搜索-Depth First Search）</code>是两种特别常用的算法，其中<code v-pre>DFS</code>可被认为就是前面的回溯算法。</p>
</li>
<li>
<p><code v-pre>BFS</code>核心思想：<strong>把一些问题抽象成图，从一个点开始，向四周扩散，一般来说，<code v-pre>BFS</code>都是用队列这种数据结构，每次都是将一个节点周围的所有节点加入队列。</strong></p>
</li>
<li>
<p><code v-pre>BFS</code>和<code v-pre>DFS</code>的区别：<strong><code v-pre>BFS</code>找到的路径一定是最短的，但代价是空间复杂度要比<code v-pre>DFS</code>大很多。</strong></p>
</li>
</ul>
<h3 id="算法框架" tabindex="-1"><a class="header-anchor" href="#算法框架" aria-hidden="true">#</a> 算法框架</h3>
<p><code v-pre>BFS</code>出现的场景：问题的本质就是让你<strong>在一幅图中找到从起点到终点的最近距离</strong>。所谓的<code v-pre>BFS</code>本质就是解决该问题的，但是实际中很多题目的描述都是这个本质场景的各种变体，要把现实问题的场景抽象成一幅图，使用<code v-pre>BFS</code>的思想进行求解。</p>
<p>框架如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">BFS</span><span class="token punctuation">(</span><span class="token class-name">Node</span> start<span class="token punctuation">,</span> <span class="token class-name">Node</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//核心数据结构，节点类型的队列</span>
    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">></span></span> q<span class="token punctuation">;</span>
    <span class="token comment">//记录已经走过的节点，避免走回头路</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">></span></span> visited<span class="token punctuation">;</span>

    <span class="token comment">//将起点加入队列中</span>
    q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
    visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//记录扩散的步数</span>
    <span class="token keyword">int</span> step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">//队列非空执行</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>q not empty<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取队列长度</span>
        <span class="token keyword">int</span> sz <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//将当前队列中的所有节点向四周扩散</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sz<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//取出队列头元素</span>
            <span class="token class-name">Node</span> cur <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//划重点：这里判断是否达到终点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur is target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> step<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//将cur的相邻节点加入队列</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> x <span class="token operator">:</span> cur<span class="token punctuation">.</span><span class="token function">adj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//判断当前节点是否被访问过</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>x not in visited<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//加入相邻节点到队列中</span>
                    q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//划重点：队列中的数据已经更新为新的数据，在这里更新步数</span>
        step<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> step<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">变量解释</p>
<ul>
<li>
<p><code v-pre>q</code>就是核心的<code v-pre>队列</code>数据结构；</p>
</li>
<li>
<p><code v-pre>cur</code>就是当前节点，即队列的头元素；</p>
</li>
<li>
<p><code v-pre>cur.adj()</code>泛指与<code v-pre>cur</code>相邻的所有节点，比如在二维数组中，<code v-pre>cur</code>上下左右四面的位置就是相邻节点；</p>
</li>
<li>
<p><code v-pre>visited</code>的主要作用是防止走回头路，大部分时候都是必需的，但是<strong>像一般的二叉树结构，没有子节点到父节点的指针，不会走回头路就不需要<code v-pre>visited</code></strong>；</p>
</li>
</ul>
</div>
<h3 id="二叉树的最小高度" tabindex="-1"><a class="header-anchor" href="#二叉树的最小高度" aria-hidden="true">#</a> 二叉树的最小高度</h3>
<ul>
<li>
<p>需求：计算一棵二叉树的最小高度，输入一棵二叉树，计算它的最小高度，也就是根节点到叶子节点的最短距离。</p>
</li>
<li>
<p>分析：<strong>起点</strong>是什么？<code v-pre>root！</code><strong>终点</strong>是什么？<code v-pre>cur.left == null and cur.right == null!</code></p>
</li>
</ul>
<p>代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: 二叉树节点
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">class</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> left<span class="token punctuation">,</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/***
 * @Description: 二叉树的最小高度
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">int</span> <span class="token function">minDepth</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">></span></span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> depth <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//root本身就是一层</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//队列中所有节点向四周扩散</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//判断当前节点是不是终点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> depth<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//将当前节点相邻的所有节点放入队列</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//更新步数</span>
        depth<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> depth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">理解</p>
<p>整个算法过程<strong>通过画图</strong>可以很容易的理解，后面的几个<code v-pre>LeetCode</code>题目也建议通过<strong>画图</strong>的方式加深对<code v-pre>BFS</code>思想的理解。</p>
</div>
<ul>
<li>两个问题</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">为什么BFS可以找到最短距离，DFS不行吗？</p>
<ul>
<li><code v-pre>BFS</code>的逻辑是<code v-pre>depth</code>每增加一次，队列中所有节点都向前迈了一步，这个逻辑保证了一旦找到一个终点，走的步数是最少的，<code v-pre>BFS</code>的时间复杂度最坏情况是<code v-pre>O(N)</code>。</li>
<li><code v-pre>DFS</code>也是可以找到最短路径的，时间复杂度也是<code v-pre>O(N)</code>，但是实际上比<code v-pre>BFS</code>低效很多。这是因为DFS是靠递归的堆栈记录走过的路径的，如果要找到最短路径，肯定要把二叉树中的所有树杈都走完，然后才能对比得到最短路径，但是<code v-pre>BFS</code>借助队列可以做到一步一步“齐头并进”，是可以在还没遍历完整的一棵树的时候就可以找到最短距离。</li>
<li>总结一下：<code v-pre>DFS</code>是线，<code v-pre>BFS</code>是面，<code v-pre>DFS</code>是单打独斗，<code v-pre>BFS</code>是集体行动。</li>
</ul>
</div>
<div class="custom-container tip">
<p class="custom-container-title">既然BFS那么好，那么为什么还需要DFS？</p>
<ul>
<li><code v-pre>BFS</code>是可以找到最短路径，但是其空间复杂度高，而<code v-pre>DFS</code>的空间复杂度较低。</li>
<li>假设有一棵树是满二叉树，节点数为<code v-pre>N</code>，对于<code v-pre>DFS</code>算法来说，空间复杂度无非就是递归堆栈，在最坏情况下顶多就是树的高度，也就是<code v-pre>O(logN)</code>。但是对于<code v-pre>BFS</code>算法来说。队列中每次都会存储二叉树一层的节点，这样在最坏情况下空间复杂度应该是树的最下层节点的数量，也就是<code v-pre>N/2</code>，即<code v-pre>O(N)</code>。</li>
<li><code v-pre>BFS</code>还是有代价的，一般来说在找最短路径的时候用的是<code v-pre>BFS</code>，其他情况用的还是<code v-pre>DFS</code>多一些（递归代码好写）。</li>
</ul>
</div>
<ul>
<li><code v-pre>LeetCode</code>相关题目</li>
</ul>
<p><a href="https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/" target="_blank" rel="noopener noreferrer">二叉树的最小深度<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal/" target="_blank" rel="noopener noreferrer">二叉树的层序遍历<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/" target="_blank" rel="noopener noreferrer">二叉树的层序遍历2<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/" target="_blank" rel="noopener noreferrer">二叉树的最大深度<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/" target="_blank" rel="noopener noreferrer">N叉树的层序遍历<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/" target="_blank" rel="noopener noreferrer">二叉树的锯齿形层序遍历<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode-cn.com/problems/path-sum/" target="_blank" rel="noopener noreferrer">路径之和<ExternalLinkIcon/></a></p>
<div class="custom-container tip">
<p class="custom-container-title">小总结</p>
<p><code v-pre>BFS</code>是广度优先搜索，其抽象是以图的概念进行说明，但是<strong>在二叉树等数据结构中却频繁用到该算法</strong>，这是因为<strong>二叉树、二维数组等就是图的具体化</strong>。</p>
<p>图中某个节点向四周扩散具体到二叉树、二维数组等数据结构分别是：<strong>二叉树某个节点扩散到其左右子节点、二维数组某个节点扩散到其上下左右四个子节点</strong>。但是树结构一般不用<code v-pre>visited</code>来防止走回头路，因为根本就没有子节点到父节点的指针存在，所以不用担心会走回头路。</p>
</div>
<h3 id="解开密码锁的最少次数" tabindex="-1"><a class="header-anchor" href="#解开密码锁的最少次数" aria-hidden="true">#</a> 解开密码锁的最少次数</h3>
<ul>
<li>
<p>题目链接：<a href="https://leetcode.cn/problems/open-the-lock/" target="_blank" rel="noopener noreferrer">打开转盘锁<ExternalLinkIcon/></a></p>
</li>
<li>
<p>不管所有的限制条件，不管 <code v-pre>deadends</code> 和 <code v-pre>target</code> 的限制，就思考⼀个问题：如果让你设计⼀个算法，穷举所有可能的密码组合，你怎么做？</p>
<ul>
<li>
<p>穷举：总共有 4 个位置， 每个位置可以向上转，也可以向下转，也就是<strong>有 8 种可能</strong>，然后，<strong>再以这 8 种密码作为基础，对每个密码再转⼀下，穷举出所有可能。</strong></p>
</li>
<li>
<p>仔细想想，这就可以抽象成⼀幅图，每个节点有 8 个相邻的节点，⼜让求最短距离，这就是<strong>典型的 <code v-pre>BFS</code>。</strong></p>
</li>
</ul>
</li>
</ul>
<p><strong>穷举所有可能的密码组合</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 将 s[j] 向上拨动⼀次</span>
<span class="token class-name">String</span> <span class="token function">plusOne</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'9'</span><span class="token punctuation">)</span>
        ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'0'</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将 s[j] 向下拨动⼀次</span>
<span class="token class-name">String</span> <span class="token function">minusOne</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'0'</span><span class="token punctuation">)</span>
        ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'9'</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// BFS 框架，打印出所有可能的密码</span>
<span class="token keyword">void</span> <span class="token function">BFS</span><span class="token punctuation">(</span><span class="token class-name">String</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 核心数据结构-队列</span>
    <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加根节点</span>
    q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">"0000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sz <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 将当前队列中的所有节点向周围扩散 */</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sz<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> cur <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/* 判断是否到达终点 */</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/* 将⼀个节点的相邻节点加⼊队列 */</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> up <span class="token operator">=</span> <span class="token function">plusOne</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> down <span class="token operator">=</span> <span class="token function">minusOne</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">;</span>
                q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 队列中的数据已经更新完</span>
        <span class="token comment">/* 在这⾥增加步数 */</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1000 9000 0100 0900 0010 0090 0001 0009 -> 第一次更新数据</span>
<span class="token comment">// ... -> 以上面的八个数为基础进行第二次数据的更新，以此类推</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码可以穷举所有的密码组合，但是还存在如下问题：</p>
<ul>
<li>会走回头路。比如从<code v-pre>0000</code>转到<code v-pre>1000</code>之后，在转<code v-pre>1000</code>的时候还会转到<code v-pre>0000</code>，这样就产生了死循环。</li>
<li>没有终止条件。按照题目要求找到<code v-pre>target</code>就应该返回步数。</li>
<li>没有对<code v-pre>deadends</code>进行处理。这些死亡密码是不能出现的，所以在碰到这些密码的时候应该跳过。</li>
</ul>
<p>通过对上述代码进行修改：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 s[j] 向上拨动⼀次</span>
    <span class="token class-name">String</span> <span class="token function">plusOne</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'9'</span><span class="token punctuation">)</span>
            ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'0'</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将 s[j] 向下拨动⼀次</span>
    <span class="token class-name">String</span> <span class="token function">minusOne</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ch <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'0'</span><span class="token punctuation">)</span>
            ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'9'</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">openLock</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> deadends<span class="token punctuation">,</span> <span class="token class-name">String</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 记录需要跳过的死亡密码</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> deads <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> deadends<span class="token punctuation">)</span> deads<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 记录已经穷举过的密码，防⽌⾛回头路</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 从起点开始启动⼴度优先搜索</span>
        <span class="token keyword">int</span> step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">"0000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"0000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> sz <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/* 将当前队列中的所有节点向周围扩散 */</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sz<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> cur <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">/* 判断是否到达终点 */</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>deads<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token comment">// 出现死亡密码，直接跳过，开始下一个密码</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>
                  <span class="token comment">// 返回步数</span>
                    <span class="token keyword">return</span> step<span class="token punctuation">;</span>
                <span class="token comment">/* 将⼀个节点的未遍历相邻节点加⼊队列 */</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 向上转动</span>
                    <span class="token class-name">String</span> up <span class="token operator">=</span> <span class="token function">plusOne</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                    <span class="token comment">// 向下转动</span>
                    <span class="token class-name">String</span> down <span class="token operator">=</span> <span class="token function">minusOne</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        q<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">/* 在这⾥增加步数 */</span>
            step<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果穷举完都没找到⽬标密码，那就是找不到了</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">优化</p>
<p><code v-pre>deads</code>集合和<code v-pre>visited</code>集合都是记录不合法访问的集合，可以不需要 <code v-pre>visited</code> 这个哈希集合，直接将遍历过的元素加到<code v-pre>deads</code>集合中，效果是⼀样的，可能更加优雅⼀些。</p>
</div>
<p><code v-pre>BFS</code>算法还有一种稍微高级的优化思路：<code v-pre>双向BFS</code>，使用<code v-pre>双向BFS</code>可以进一步提高算法的效率。</p>
<div class="custom-container tip">
<p class="custom-container-title">传统的BFS和双向BFS的区别</p>
<p><code v-pre>传统的BFS框架</code>就是从起点开始向四周扩散，遇到终点时停⽌；⽽<code v-pre>双向BFS</code> 则是从起点和终点同时开始扩散，当两边有交集的时候停⽌。</p>
</div>
<p>从 <code v-pre>Big O</code> 表⽰法分析算法复杂度的话，它俩的最坏复杂度都是 <code v-pre>O(N)</code> ，但是实际上<code v-pre>双向BFS</code> 确实会快⼀些。</p>
<p>按照<code v-pre>传统BFS</code>算法的策略，会把整棵树的节点都搜索⼀遍，最后找到<code v-pre>target</code> ；⽽<code v-pre>双向BFS</code>其实只遍历了半棵树就出现了交集，也就是找到了最短距离，明显实现了效率上的提升。</p>
<div class="custom-container warning">
<p class="custom-container-title">双向BFS的局限性</p>
<ul>
<li><code v-pre>双向BFS</code>也有局限，因为必须要知道终点在哪⾥。</li>
<li>⽐如刚才讨论的⼆叉树最⼩⾼度的问题，⼀开始根本就不知道终点在哪⾥，也就⽆法使⽤<code v-pre>双向BFS</code>；但是第⼆个密码锁的问题，是可以使⽤<code v-pre>双向BFS</code>算法来提⾼效率。</li>
</ul>
</div>
<p>使用<code v-pre>双向BFS</code>进行优化：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">openLock</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> deadends<span class="token punctuation">,</span> <span class="token class-name">String</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录需要跳过的死亡密码</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> deads <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> deadends<span class="token punctuation">)</span> deads<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ⽤集合不⽤队列，可以快速判断元素是否存在</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> q1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> q2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    q1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"0000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    q2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q1<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>q2<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 哈希集合在遍历的过程中不能修改，⽤ temp 存储扩散结果</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 将 q1 中的所有节点向周围扩散 */</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> cur <span class="token operator">:</span> q1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 不能出现死亡密码</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>deads<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token comment">/* 判断是否到达终点 */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>q2<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> step<span class="token punctuation">;</span>
            visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/* 将⼀个节点的未遍历相邻节点加⼊集合 */</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> up <span class="token operator">=</span> <span class="token function">plusOne</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> down <span class="token operator">=</span> <span class="token function">minusOne</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* 在这⾥增加步数 */</span>
        step<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// temp 相当于 q1</span>
        <span class="token comment">// 这⾥交换 q1 q2，下⼀轮 while 就是扩散 q2</span>
        q1 <span class="token operator">=</span> q2<span class="token punctuation">;</span>
        q2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>不再使⽤队列，⽽是使⽤ <code v-pre>HashSet</code> ⽅便快速判断两个集合是否有交集。</li>
<li>另外的⼀个技巧点就是 <code v-pre>while</code> 循环的最后交换 <code v-pre>q1</code> 和 <code v-pre>q2</code> 的内容，所以只要默认扩散 <code v-pre>q1</code> 就相当于轮流扩散 <code v-pre>q1</code> 和 <code v-pre>q2</code> 。</li>
</ul>
<p><code v-pre>双向BFS</code>还有⼀个优化，就是每次将<strong>少的那个集合</strong>进行扩散，避免轮流扩散<code v-pre>q1</code>和<code v-pre>q2</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">openLock</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> deadends<span class="token punctuation">,</span> <span class="token class-name">String</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录需要跳过的死亡密码</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> deads <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> deadends<span class="token punctuation">)</span> deads<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ⽤集合不⽤队列，可以快速判断元素是否存在</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> q1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> q2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    q1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"0000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    q2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>q1<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>q2<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 哈希集合在遍历的过程中不能修改，⽤ temp 存储扩散结果</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 将 q1 中的所有节点向周围扩散 */</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> cur <span class="token operator">:</span> q1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 不能出现死亡密码</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>deads<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token comment">/* 判断是否到达终点 */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>q2<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> step<span class="token punctuation">;</span>
            visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/* 将⼀个节点的未遍历相邻节点加⼊集合 */</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> up <span class="token operator">=</span> <span class="token function">plusOne</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> down <span class="token operator">=</span> <span class="token function">minusOne</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    temp<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* 在这⾥增加步数 */</span>
        step<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// 下一轮进行扩散的时候，扩散较少的那个集合</span>
        <span class="token comment">// 对于temp和q2来说，将最小的那个给q1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> q2<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            q1 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            q1 <span class="token operator">=</span> q2<span class="token punctuation">;</span>
            q2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为按照 <code v-pre>BFS</code> 的逻辑，队列（集合）中的元素越多，扩散之后新的队列 （集合）中的元素就越多；在<code v-pre>双向BFS</code>算法中，如果我们每次都选择⼀个较⼩的集合进⾏扩散，那么占⽤的空间增⻓速度就会慢⼀些，效率就会⾼⼀ 些。</p>
<div class="custom-container tip">
<p class="custom-container-title">时间复杂度</p>
<p>⽆论<code v-pre>传统BFS</code>还是<code v-pre>双向BFS</code>，⽆论做不做优化，从<code v-pre>Big O</code>衡量标准来看，时间复杂度都是⼀样的。因为<code v-pre>双向BFS</code>的代码只是更换了返回结果的方式（哈希集合是否有交集），每次进行扩散的方式不是并行扩散的，而是轮流进行扩散。</p>
</div>
<ul>
<li><code v-pre>LeetCode</code>相关题目</li>
</ul>
<p><a href="https://leetcode.cn/problems/zlDJc7/description/" target="_blank" rel="noopener noreferrer">开密码锁<ExternalLinkIcon/></a></p>
<h2 id="双指针技巧套路框架" tabindex="-1"><a class="header-anchor" href="#双指针技巧套路框架" aria-hidden="true">#</a> 双指针技巧套路框架</h2>
<p>双指针技巧可以分为如下的两类：</p>
<ul>
<li>一类是“快慢指针”，主要解决链表中的问题，比如典型的判定链表中是否包含环。</li>
<li>一类事“左右指针”，主要解决数组（或者字符串）中的问题，比如二分搜索。</li>
</ul>
<h3 id="快慢指针的常用算法" tabindex="-1"><a class="header-anchor" href="#快慢指针的常用算法" aria-hidden="true">#</a> 快慢指针的常用算法</h3>
<p>快慢指针一般会初始化指向链表的头节点<code v-pre>head</code>，前进时快指针<code v-pre>fast</code>在前，慢指针<code v-pre>slow</code>在后。</p>
<h4 id="判定链表中是否含有环" tabindex="-1"><a class="header-anchor" href="#判定链表中是否含有环" aria-hidden="true">#</a> 判定链表中是否含有环</h4>
<p>链表的特点是每个节点只知道下一个节点，所以一个指针是无法判断链表中是否含有环的。</p>
<ul>
<li>如果链表中不含环，那么这个指针最终会遇到空指针<code v-pre>null</code>，表示链表到头了，可以判断当前链表是不含有环的。</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果链表中含有环，上述代码就会陷入死循环，因为环形链表中没有空指针<code v-pre>null</code>，无法判断当前链表含有环。</li>
</ul>
<p>判断单链表中是否有环，经典的算法就是使用双指针，一个跑得快，一个跑得慢。如果不含有环，跑得快的那个指针最终会遇到<code v-pre>null</code>，说明链表不含环；如果含有环，快指针最终会和慢指针相遇，说明链表含有环。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义快慢指针</span>
    <span class="token class-name">ListNode</span> fast<span class="token punctuation">,</span> slow<span class="token punctuation">;</span>
    <span class="token comment">//初始化快慢指针都指向头节点</span>
    fast <span class="token operator">=</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//快指针每次走两步</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">//慢指针每次走一步</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">//如果存在环，快慢指针必然会相遇</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//循环可以停止，说明单链表中不存在环</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="已知链表中含有环-返回这个环的起始位置" tabindex="-1"><a class="header-anchor" href="#已知链表中含有环-返回这个环的起始位置" aria-hidden="true">#</a> 已知链表中含有环，返回这个环的起始位置</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> fast<span class="token punctuation">,</span> slow<span class="token punctuation">;</span>
    <span class="token comment">//快慢指针初始化</span>
    fast <span class="token operator">=</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//上面的代码类似于hasCycle函数</span>
    <span class="token comment">//现在fast=slow，两者相遇，说明链表存在环，并且相遇点肯定是在环内部（包括环起点）的内部的某个节点</span>
    <span class="token comment">//相遇点不可能在环外部，因为fast虽然跑得快，但是跑不出环</span>
    <span class="token comment">//先把一个指针重新指向head</span>
    slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">//现在slow在fast后面，两者在以相同的速度跑，下一次相遇点就是环的起点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!=</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//两个指针以相同的速度向前跑</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//slow=fast的时候，跳出循环，两个指针再次相遇</span>
    <span class="token comment">//两个指针再次相遇的那个单链表节点就是环的起点</span>
    <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结论：当快慢指针相遇时，让其中任何一个指针指向头节点，然后让两个指针以相同的速度前进，再次相遇时所在的节点位置就是环的起点位置。</strong></p>
<h4 id="寻找无环单链表的中点" tabindex="-1"><a class="header-anchor" href="#寻找无环单链表的中点" aria-hidden="true">#</a> 寻找无环单链表的中点</h4>
<p>最直接的思路：先遍历一遍链表，算出链表的长度<code v-pre>n</code>，然后再一次遍历链表，走<code v-pre>n/2</code>步，这样就得到了链表的中点。</p>
<p>漂亮的思路：使用双指针，让快指针一次前进两步，慢指针一次前进一步，当快指针到达链表尽头的时候，慢指针就处于链表的中间位置。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">getMidNodeFromList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> fast<span class="token punctuation">,</span> slow<span class="token punctuation">;</span>
    <span class="token comment">//初始化快慢指针</span>
    fast <span class="token operator">=</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">注意</p>
<p>当链表长度为奇数的时候，<code v-pre>slow</code>恰巧停留在中间位置；当链表长度为偶数的时候，<code v-pre>slow</code>最终的位置是中间偏右。</p>
</div>
<div class="custom-container warning">
<p class="custom-container-title">寻找链表中点作用</p>
<p>寻找链表中点的一个重要作用是对链表进行归并排序，可以尝试参考数组的归并排序写出链表的归并排序。</p>
</div>
<h4 id="寻找单链表的倒数第k个元素" tabindex="-1"><a class="header-anchor" href="#寻找单链表的倒数第k个元素" aria-hidden="true">#</a> 寻找单链表的倒数第K个元素</h4>
<p>使用快慢指针，让快指针先走<code v-pre>k</code>步，然后快慢指针开始以相同速率前进，这样当快指针到链表末尾的时候，慢指针所在的位置就是链表倒数第<code v-pre>k</code>个节点（为了简化，假设<code v-pre>k</code>不会超过链表长度）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">findKNodeFromListEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> fast<span class="token punctuation">,</span> slow<span class="token punctuation">;</span>
    fast <span class="token operator">=</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">//快指针先走k步</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        k<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//快慢指针以相同的速率跑</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//此时slow所在的节点就是倒数第k个节点</span>
    <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LeetCode相关题目：</p>
<p><a href="https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/" target="_blank" rel="noopener noreferrer">剑指Offer22.链表中倒数第k个节点<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/" target="_blank" rel="noopener noreferrer">面试题02.02.返回倒数第k个节点<ExternalLinkIcon/></a></p>
<p><a href="https://leetcode-cn.com/problems/c32eOV/" target="_blank" rel="noopener noreferrer">剑指OfferII022.链表中环的入口节点<ExternalLinkIcon/></a></p>
<h3 id="左右指针的常用算法" tabindex="-1"><a class="header-anchor" href="#左右指针的常用算法" aria-hidden="true">#</a> 左右指针的常用算法</h3>
<p>左右指针一般运用在数组问题中，实际就是两个索引值，一般初始化规则如下：</p>
<p><code v-pre>left=0;</code></p>
<p><code v-pre>right=length(array)-1;</code></p>
<h4 id="二分搜索" tabindex="-1"><a class="header-anchor" href="#二分搜索" aria-hidden="true">#</a> 二分搜索</h4>
<p>后续会有二分搜索的细节描述，在此给出最简单的二分查找算法，旨在突出其双指针特性。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: 二分查找算法，默认nums数组升序
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//初始化左右指针</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid<span class="token punctuation">;</span><span class="token comment">//找到就返回其索引</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//找不到直接返回-1</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="两数之和" tabindex="-1"><a class="header-anchor" href="#两数之和" aria-hidden="true">#</a> 两数之和</h4>
<p>输入一个已按照升序排列的有序数组<code v-pre>nums</code>和一个目标值<code v-pre>target</code>，在<code v-pre>nums</code>中找到两个数使得它们相加之和等于<code v-pre>target</code>，请返回这两个数的索引（可以假设这两个数一定存在，索引从1开始）。</p>
<p><strong>只要数组有序，就应该想到使用双指针技巧，通过<code v-pre>sum</code>的大小来调节<code v-pre>left</code>和<code v-pre>right</code>的移动。</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: 两数之和
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//左右指针初始化</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//让sum小一点</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//让sum大一点</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//找不到</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="反转数组" tabindex="-1"><a class="header-anchor" href="#反转数组" aria-hidden="true">#</a> 反转数组</h4>
<p>虽然很多编程语言提供了原地反转数组的API，但是仍然要懂得其原理。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: 原地反转数据
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//初始化左右指针</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//交换左右两个指针指向的数据</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        <span class="token comment">//指针移动</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="滑动窗口算法" tabindex="-1"><a class="header-anchor" href="#滑动窗口算法" aria-hidden="true">#</a> 滑动窗口算法</h4>
<p>滑动窗口算法是双指针技巧的最高境界，<strong>严格讲，它是快慢指针在数组（字符串）上的应用</strong>。若掌握该算法，可以<strong>解决一大类字符串匹配问题</strong>。该部分比前面稍微复杂，可以查看后续的滑动窗口算法框架。</p>
<h2 id="二分搜索算法" tabindex="-1"><a class="header-anchor" href="#二分搜索算法" aria-hidden="true">#</a> 二分搜索算法</h2>
<div class="custom-container tip">
<p class="custom-container-title">一个笑话</p>
<p>有一天阿东到图书馆借了<code v-pre>N</code>本书，出图书馆的时候，警报响了，于是保安把阿东拦下，
要检查哪本书没有登记出借。阿东正准备把每一本书放在报警器下过一下，以找出引发警报的书，但是保安露出不屑的眼神：你连二分搜索都不会吗？</p>
<p>于是保安把书分成两堆，让第一堆过一下报警器，报警器响；于是再把这堆书分成
两堆。最终，检测了<code v-pre>logN</code>次之后，保安成功地找到了那本引起警报的书，露出了得意和嘲讽的笑容。于是阿东背着剩下的书走了。</p>
<p>从此，图书馆丢了<code v-pre>N-1</code>本书。</p>
</div>
<p>二分搜索并不简单，<code v-pre>Knuth</code>“大佬”（发明<code v-pre>KMP</code>算法的那位）是这么评价二分搜索的：</p>
<p><code v-pre>Although the basic idea of binary search is comparatively straightforward, the details canbe surprisingly tricky.</code></p>
<p><strong>说人话就是：思路很简单，细节是魔鬼。</strong></p>
<p><strong>其细节在于到底要给<code v-pre>mid</code>加1还是减1，<code v-pre>while</code>里面到底是<code v-pre>&lt;=</code>还是<code v-pre>&lt;</code>。</strong></p>
<h3 id="二分搜索框架" tabindex="-1"><a class="header-anchor" href="#二分搜索框架" aria-hidden="true">#</a> 二分搜索框架</h3>
<p>基础框架如下所示，后面的二分搜索的变形都是基于该框架。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/***
 * @Description: 二分搜索框架
 * @Author: Mr.Tong
 */</span>
<span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>不要出现<code v-pre>else</code>，而是使用<code v-pre>else-if</code>考虑到所有的情况，可以清楚展现细节。</li>
<li><code v-pre>...</code>标记的地方都是出现细节问题的地方。</li>
<li><code v-pre>int mid = left + (right - left) / 2</code>是为了防止溢出。</li>
</ul>
<h3 id="寻找一个数-基本的二分搜索" tabindex="-1"><a class="header-anchor" href="#寻找一个数-基本的二分搜索" aria-hidden="true">#</a> 寻找一个数（基本的二分搜索）</h3>
<p>需求：在一个有序数组中查找一个数，如果找到就返回其索引，如果找不到就返回-1。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//注意</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//注意</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//注意</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//注意</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//循环跳出，找不到就返回-1</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>问题一：为什么<code v-pre>while</code>循环的条件中是<code v-pre>&lt;=</code>，而不是<code v-pre>&lt;</code>？</p>
</li>
<li>
<p>问题二：为什么left = mid + 1和right = mid - 1？有的代码是right = mid或者left = mid，没有这些加加减减，到底是怎么回事？怎么判断？</p>
</li>
<li>
<p>问题三：该算法有什么缺陷？</p>
</li>
</ul>
<h3 id="寻找左侧边界的二分搜索" tabindex="-1"><a class="header-anchor" href="#寻找左侧边界的二分搜索" aria-hidden="true">#</a> 寻找左侧边界的二分搜索</h3>
<h3 id="寻找右侧边界的二分搜索" tabindex="-1"><a class="header-anchor" href="#寻找右侧边界的二分搜索" aria-hidden="true">#</a> 寻找右侧边界的二分搜索</h3>
<h3 id="逻辑统一" tabindex="-1"><a class="header-anchor" href="#逻辑统一" aria-hidden="true">#</a> 逻辑统一</h3>
<h2 id="滑动窗口算法变成默写题" tabindex="-1"><a class="header-anchor" href="#滑动窗口算法变成默写题" aria-hidden="true">#</a> 滑动窗口算法变成默写题</h2>
<h3 id="最小覆盖子串" tabindex="-1"><a class="header-anchor" href="#最小覆盖子串" aria-hidden="true">#</a> 最小覆盖子串</h3>
<h3 id="字符串排列" tabindex="-1"><a class="header-anchor" href="#字符串排列" aria-hidden="true">#</a> 字符串排列</h3>
<h3 id="找所有字母异位词" tabindex="-1"><a class="header-anchor" href="#找所有字母异位词" aria-hidden="true">#</a> 找所有字母异位词</h3>
<h3 id="最长无重复子串" tabindex="-1"><a class="header-anchor" href="#最长无重复子串" aria-hidden="true">#</a> 最长无重复子串</h3>
</div></template>


