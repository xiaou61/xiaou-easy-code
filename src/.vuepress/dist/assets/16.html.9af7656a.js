import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as a,e as c}from"./app.c5b3201b.js";const i={},d=c('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>开源这件事情在软件开发领域一直是一个高频话题，我们工作中不管是使用到的工具还是第三方库都离不开开源的支持。</p><p>近期由于工作的原因，我需要经常和 <code>Apache Pulsar</code> 社区沟通，同时也会将日常碰到的问题反馈给社区，包括一些 <code>bug</code> ，一些我能修的也是顺带就提了一些 <code>PR</code>。</p><p>之前或多或少我也参与过其他的开源社区，但和现在的还是有些许的不同：</p><ul><li>以前我更多的是个人开源项目，偶尔也会有其他开发者向我的仓库贡献代码。</li><li>也参与过其他个人作者或者是社区性质的项目，但流程上没有那么正规或者是<code>标准</code>。</li></ul><p>简单来说就是以前就是小打小闹，<code>Pulsar</code> 毕竟是 <code>Apache</code> 社区的顶级项目，参与的整个流程要求也会比较复杂，当然学到的知识也会更多。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730712.png" alt="image.png" loading="lazy"></p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730326.png" alt="image.png" loading="lazy"> 这半年时间大大小小提了十几个 PR ，也逐渐捋清楚了一些上手的方法和套路，所以如果你也想参与开源，但苦于不知道如何入门，看完后希望对你有所帮助。</p><h2 id="为什么参与开源" tabindex="-1"><a class="header-anchor" href="#为什么参与开源" aria-hidden="true">#</a> 为什么参与开源</h2><p>首先还是来聊聊参与开源的好处，了解之后也许会让你有路转粉。</p><p>首先最明显的一点就是让你对贡献的这个项目更加深入的了解，我们常常都在面试的时候被问到对 XX 框架的熟悉程度，哪怕你在简历里写的天花乱坠也没有是这个项目 <code>Contributor</code> 更具有说服力。</p><p>其次是沟通交流能力也会得到锻炼，开源社区往往都是以 <code>github issue/PR</code>，或者是 <code>Mailing List</code> 的方式沟通交流，这样的沟通方式和我们常用的微信、QQ 这类及时通讯工具有着本质的区别。</p><p>往往需要我们有了冷静的思考加上清晰的描述才会将自己的观点发布出去，这样不自觉的就会养成自己的总结能力，这个能力对于<code>内容创意内容工作者</code>来说非常重要。</p><p>还有一个更明显的好处就是对个人的能力背书，大家常说的 <code>show me the code</code>，而 <code>GitHub</code> 就是最好的方式。</p><p>当你是某个知名开源项目的 <code>Contributor</code> 甚至是 <code>Committer/PMC</code> 就已经足够证明自己的能力了。</p><h2 id="如何参与" tabindex="-1"><a class="header-anchor" href="#如何参与" aria-hidden="true">#</a> 如何参与</h2><p>如何参与呢，其实也很简单，不外乎有以下几种方式（由易到难）：</p><ul><li>一些 <code>typo</code> 类的修复。</li><li>回答社区中用户的问题。</li><li>使用过程中遇到 <code>bug</code>，直接反馈，有兴趣的话最好是自己能修复。</li><li>修复现有 <code>issue</code> 列表中未解决的 <code>bug</code>。</li><li>软件不具备自己需要的功能时提交 <code>feature</code> 提案并实现。</li></ul><p>不管是哪种方式我的建议是在准备贡献之前都应该先看看官方提供的贡献指南，通常在官网就能查看。</p><blockquote><p>即便是最简单的修复 typo，因为越是专业的项目每个 PR 的合并都是严谨的，提前了解后可以避免犯一些基本错误从而影响积极性。</p></blockquote><p>这里我以 <code>Pulsar</code> 为例： <img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730308.png" alt="image.png" loading="lazy"> 官网有着详细的贡献指南，包括环境搭建、代码约定、<code>PR/git commit</code> 语义等各种规范。</p><p>这里我重点强调 PR 的语义，一个好的 PR 规范更容易引起社区成员的注意，毕竟我们每一次提交都需要 <code>Committer</code> 的同意才能合并。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730653.png" alt="image.png" loading="lazy"> 还是以 <code>Pulsar</code> 为例，在提交 PR 前一定得先看看这里的规范要求，不然很可能第一步就会吃瘪。</p><h2 id="可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#可能遇到的问题" aria-hidden="true">#</a> 可能遇到的问题</h2><p>下面讲讲贡献过程中可能会碰到的问题。</p><p>在上面讲到的难度排序中将修复个人 issue 排在了其他 issue 之前了，这是因为往往对自己提交的 bug 更熟悉，而社区其他人反馈的问题大概率会被老手认领。</p><p>加上自己也不熟悉，可能在自己研究复现的过程中就把自己劝退了。</p><h3 id="认领-issue" tabindex="-1"><a class="header-anchor" href="#认领-issue" aria-hidden="true">#</a> 认领 issue</h3><p>这里还有个小技巧，当我们准备修复一个不是自己提交的 issue 时，最好是在评论区让 <code>Committer</code> 将这个任务分配给你，这样社区成员就不会做重复工作了。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730097.png" alt="image.png" loading="lazy"> 类似于这样。</p><p>同时我们在查找可以修复的 <code>issue</code> 时也要注意这个 issue 有没有被认领以及是否有 PR 关联。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730442.png" alt="image.png" loading="lazy"></p><p>有时候 <code>issue</code> 并没有被指定但也有相关 <code>PR</code> 在处理该问题了，这时我们就可以过滤掉这个 <code>issue</code>。</p><h3 id="help-want" tabindex="-1"><a class="header-anchor" href="#help-want" aria-hidden="true">#</a> help want</h3><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730853.png" alt="image.png" loading="lazy"> 也可以找找带有 <code>help want</code> 标签的 <code>issue</code>，这类问题往往会相对简单，修复起来也更容易。</p><h3 id="社区反馈较慢" tabindex="-1"><a class="header-anchor" href="#社区反馈较慢" aria-hidden="true">#</a> 社区反馈较慢</h3><p>还有一个比较常见的问题是自己提交的 issue 或者是 PR 迟迟没有人处理。</p><p>我们可以先看看这个 issue 对应的代码最近主要是哪些人在维护，这个在 IDE 中配合 <code>GitToolBox</code> 插件就很容易看出来。</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730744.png" alt="image.png" loading="lazy"> 后面的 ID 往往是 <code>PR</code> 号，我们可以通过这个 <code>PR</code> 找到对应的作者，然后尝试在 <code>issue</code> 评论区艾特对方。</p><p>如果依然没有回复，那我们也可以给开发组发送邮件。 <img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730885.png" alt="image.png" loading="lazy"> 如果还是没有回复，比如我这个😂</p><p>那也还有一个办法，就是尝试在社交媒体（GitHub 首页、技术群）上找到 Committer 的微信，直接私聊的方式让对方帮忙推进。 <img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308150730174.png" alt="image.png" loading="lazy"></p><p>当然也有一些项目长期没有维护了，这种 PR 要做好心里准备，很有可能对方不会理你；这点在国内某个企业的开源项目中比较常见。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>总的来说想要做好开源得有耐心和长期坚持，同时给自己带来的好处也是物超所值的，<code>Apache</code> 这类专业的社区我也才参与了半年，后续也会长期坚持下去，也希望哪天可以积累到成为 <code>Committer</code> 后再和大家分享。</p>',44),p=[d];function n(s,t){return o(),a("div",null,p)}const g=e(i,[["render",n],["__file","16.html.vue"]]);export{g as default};