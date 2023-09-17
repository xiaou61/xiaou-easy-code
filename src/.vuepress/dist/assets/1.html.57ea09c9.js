import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.c5b3201b.js";const p={},t=e(`<h2 id="_1-封装的概述、原则、步骤" tabindex="-1"><a class="header-anchor" href="#_1-封装的概述、原则、步骤" aria-hidden="true">#</a> 1 封装的概述、原则、步骤</h2><p>概述：封装可以被认为是一个保护屏障，防止该类的代码和数据被其他类随意访问。要访问该类的数据，必须通过指定的方式。适当的封装可以让代码更容易理解与维护，也加强了代码的安全性。 原则：将属性隐藏起来，若需要访问某个属性，提供公共方法对其访问。 步骤： 1） 使用 private 关键字来修饰成员变量。 2） 对需要访问的成员变量，提供对应的一对 getXxx 方法 、 setXxx方法。</p><h2 id="_2-封装的操作——private关键字" tabindex="-1"><a class="header-anchor" href="#_2-封装的操作——private关键字" aria-hidden="true">#</a> 2 封装的操作——private关键字</h2><p>private的含义：private是一个权限修饰符，代表最小权限。 可以修饰成员变量和成员方法。被private修饰后的成员变量和成员方法，只在本类中才能访问。 使用格式：private 数据类型 变量名 ； 举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    age <span class="token operator">=</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-封装优化" tabindex="-1"><a class="header-anchor" href="#_3-封装优化" aria-hidden="true">#</a> <strong>3 封装优化</strong></h2><p>通过上面使用private的代码我们发现 setXxx 方法中的形参名字并不符合我们想要的，那么如果修改与成员变量名一致，是否就符合我们要的呢？代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过修改和测试，我们发现新的问题，成员变量赋值失败了。也就是说，在修改了 setXxx() 的形参变量名后，方法并没有给成员变量赋值！这是由于形参变量名与成员变量名重名，导致成员变量名被隐藏，方法中的变量名，无法访问到成员变量，从而赋值失败。所以，我们需要优化，来解决这个重名问题。 封装优化1——this关键字 this的含义：this代表所在类的当前对象的引用（地址值），即对象自己的引用。 （记住 ：方法被哪个对象调用，方法中的this就代表那个对象。即谁在调用，this就代表谁。） this使用格式：this.成员变量名； 使用 this 修饰方法中的变量，解决成员变量被隐藏的问题，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//name = name;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//age = age;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>封装优化2——构造方法</strong> 当一个对象被创建时候，构造方法用来初始化该对象，给对象的成员变量赋初始值。 <em>（无论你与否自定义构造方法，所有的类都有构造方法，因为Java自动提供了一个无参数构造方法，一旦自己定义了构造方法，Java自动提供的默认无参数构造方法就会失效。）</em></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//构造方法的定义格式</span>
修饰符 构造方法名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">// 方法体    </span>
<span class="token punctuation">}</span>
<span class="token comment">//构造方法的写法上，方法名与它所在的类名相同。它没有返回值，所以不需要返回值类型，甚至不需要void。使用构造方法后，代码如下：</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token comment">// 无参数构造方法</span>
  <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 有参数构造方法</span>
  <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项</p><p>如果你不提供构造方法，系统会给出无参数构造方法。 如果你提供了构造方法，系统将不再提供无参数构造方法。 构造方法是可以重载的，既可以定义参数，也可以不定义参数。</p><h2 id="_4-标准代码——javabean" tabindex="-1"><a class="header-anchor" href="#_4-标准代码——javabean" aria-hidden="true">#</a> 4 标准代码——JavaBean</h2><p>JavaBean 是 Java语言编写类的一种标准规范。符合 JavaBean 的类，要求类必须是具体的和公共的，并且具有无参数的构造方法，提供用来操作成员变量的 set 和 get 方法。</p><p>正如 Java 是咖啡的一种，不是所有的咖啡都是 Java 一样。并非所有的类都是 Java Bean，其是一种特殊的类，具有以下特征：</p><ul><li>提供一个默认的无参构造函数。</li><li>需要被序列化并且实现了 Serializable 接口。</li><li>可能有一系列可读写属性，并且一般是 private 的。</li><li>可能有一系列的 getter 或 setter 方法。</li></ul><h3 id="java-bean-的作用" tabindex="-1"><a class="header-anchor" href="#java-bean-的作用" aria-hidden="true">#</a> <strong>Java Bean 的作用</strong></h3><p>仔细观察 Java Bean 可发现，其最大的特征是私有的属性，getter 和 setter 方法也都是绕着这些属性来设计的。</p><p>想象一下存在这样一个箱子，其内部被分割成几个格子，每个格子用来存放特定的物品，工人取出或者放入物品后封箱，然后叫了个快递把箱子发出去了。这个箱子就是 Java Bean 啊，取出、放入就是getter、setter，物品就是属性，封箱发出就是序列化和传输。</p><p>那么 Java Bean 的作用也就是把一组数据组合成一个特殊的类便于传输。 Java Bean 可以用在图形界面的可视化设计、JSP 封装数据保存到数据库、Android AIDL 跨进程通信，Spring框架等场景中。</p><p>根据封装的思想，我们使用 get 和 set 方法封装 private 的属性，并且根据属性是否可读写来选择封装方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//格式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token punctuation">{</span>
  <span class="token comment">//成员变量</span>
  <span class="token comment">//构造方法</span>
  <span class="token comment">//无参构造方法【必须】</span>
  <span class="token comment">//有参构造方法【建议】</span>
  <span class="token comment">//成员方法   </span>
  <span class="token comment">//getXxx()</span>
  <span class="token comment">//setXxx()</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以学生类为例，编写符合 JavaBean规范的类的标准代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token comment">//成员变量</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token comment">//构造方法</span>
  <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//成员方法</span>
  publicvoid <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  publicvoid <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  publicint <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-封装和javabean的关系" tabindex="-1"><a class="header-anchor" href="#_5-封装和javabean的关系" aria-hidden="true">#</a> 5 封装和JavaBean的关系</h2><p>封装（Encapsulation）和JavaBean是面向对象编程中两个相关但不完全相同的概念。</p><ol><li>封装（Encapsulation）： 封装是面向对象编程的一项重要原则，它指的是将对象的状态（数据）和行为（方法）进行封装在一起，以隐藏对象内部的实现细节，只暴露必要的接口供外部使用。通过封装，我们可以实现信息隐藏和安全性，并且可以对对象的内部进行良好的管理和控制。在Java中，封装通常通过使用访问修饰符（如public、private、protected等）来实现，以控制属性和方法的可见性。</li><li>JavaBean： JavaBean是Java语言中的一种特定规范，它是一种可重用组件的编程模型。JavaBean是一个符合以下标准的Java类： <ul><li>类必须是公共的（public）。</li><li>类必须具有一个无参的公共构造方法（默认构造方法）。</li><li>类的属性必须通过getters和setters方法来访问。</li><li>类必须实现Serializable接口（可序列化）。</li></ul></li></ol><p>JavaBean通常被用于数据封装和传输，例如在图形用户界面（GUI）编程中，我们可以创建JavaBean来表示用户输入的数据，并通过getters和setters方法对数据进行访问和修改。这样做的好处是可以将数据和操作进行分离，使代码更加清晰和易于维护。</p><p>关系： 封装和JavaBean之间有一定的关联，封装是一种面向对象编程的原则，而JavaBean是一种符合封装原则的特定实现。通过JavaBean规范，我们将封装的概念应用到类的设计中，将属性私有化（private），并通过公共的getters和setters方法来访问和修改属性，从而实现了信息隐藏和数据封装。 JavaBean的设计符合封装的思想，并在很多场景下被广泛应用。</p>`,31),i=[t];function c(l,o){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","1.html.vue"]]);export{r as default};
