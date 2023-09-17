import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,e as l}from"./app.c5b3201b.js";const a={},d=l(`<h2 id="分支命名" tabindex="-1"><a class="header-anchor" href="#分支命名" aria-hidden="true">#</a> 分支命名</h2><h3 id="master-分支" tabindex="-1"><a class="header-anchor" href="#master-分支" aria-hidden="true">#</a> master 分支</h3><p>master 为主分支，也是用于部署生产环境的分支，需要确保master分支稳定性。master 分支一般由 release 以及 hotfix 分支合并，任何时间都不能直接修改代码。</p><h3 id="develop-分支" tabindex="-1"><a class="header-anchor" href="#develop-分支" aria-hidden="true">#</a> develop 分支</h3><p>develop 为开发环境分支，始终保持最新完成以及bug修复后的代码，用于前后端联调。一般开发的新功能时，feature分支都是基于develop分支创建的。</p><h3 id="feature-分支" tabindex="-1"><a class="header-anchor" href="#feature-分支" aria-hidden="true">#</a> feature 分支</h3><p>开发新功能时，以develop为基础创建feature分支。</p><p>分支命名时以 <code>feature/</code> 开头，后面可以加上开发的功能模块， 命名示例：<code>feature/user_module</code>、<code>feature/cart_module</code></p><h3 id="test分支" tabindex="-1"><a class="header-anchor" href="#test分支" aria-hidden="true">#</a> test分支</h3><p>test为测试环境分支，外部用户无法访问，专门给测试人员使用，版本相对稳定。</p><h3 id="release分支" tabindex="-1"><a class="header-anchor" href="#release分支" aria-hidden="true">#</a> release分支</h3><p>release 为预上线分支（预发布分支），UAT测试阶段使用。一般由 test 或 hotfix 分支合并，不建议直接在 release 分支上直接修改代码。</p><h3 id="hotfix-分支" tabindex="-1"><a class="header-anchor" href="#hotfix-分支" aria-hidden="true">#</a> hotfix 分支</h3><p>线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支。修复完成后，需要合并到 master 分支和 develop 分支。</p><p>分支命名以<code>hotfix/</code> 开头的为修复分支，它的命名规则与 feature 分支类似。</p><h2 id="分支与环境对应关系" tabindex="-1"><a class="header-anchor" href="#分支与环境对应关系" aria-hidden="true">#</a> 分支与环境对应关系</h2><p>在系统开发过程中常用的环境：</p><ul><li>DEV 环境（Development environment）：用于开发者调试使用</li><li>FAT环境（Feature Acceptance Test environment）：功能验收测试环境，用于测试环境下的软件测试者测试使用</li><li>UAT环境 （User Acceptance Test environment）：用户验收测试环境，用于生产环境下的软件测试者测试使用</li><li>PRO 环境（Production environment）：生产环境</li></ul><p>对应关系：</p><table><thead><tr><th style="text-align:left;">分支</th><th style="text-align:left;">功能</th><th style="text-align:left;">环境</th><th style="text-align:left;">可访问</th></tr></thead><tbody><tr><td style="text-align:left;">master</td><td style="text-align:left;">主分支，稳定版本</td><td style="text-align:left;">PRO</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">develop</td><td style="text-align:left;">开发分支，最新版本</td><td style="text-align:left;">DEV</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">feature</td><td style="text-align:left;">开发分支，实现新特性</td><td style="text-align:left;"></td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">测试分支，功能测试</td><td style="text-align:left;">FAT</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">release</td><td style="text-align:left;">预上线分支，发布新版本</td><td style="text-align:left;">UAT</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">hotfix</td><td style="text-align:left;">紧急修复分支，修复线上bug</td><td style="text-align:left;"></td><td style="text-align:left;">否</td></tr></tbody></table><h3 id="分支合并流程规范" tabindex="-1"><a class="header-anchor" href="#分支合并流程规范" aria-hidden="true">#</a> 分支合并流程规范</h3><p>业界常见的两大主分支（master、develop）、三个辅助分支（feature、release、hotfix）的生命周期：</p><p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309041937158.png" alt="图片" loading="lazy"></p><p>以上生命周期仅作参考，不同开发团队可能有不同的规范，可自行灵活定义。</p><p>例如我们团队在开发时，至少需要保证以下流程：</p><ul><li>develop 分支和 hotfix 分支，必须从 master 分支检出</li><li>由 develop 分支合并到 test 分支</li><li>功能测试无误后，由 test 分支合并到 release 分支</li><li>UAT测试通过后，由 release 分支合并到 master分支</li><li>对于工作量小的功能开发（工时小于1天），可以直接在devolop 分支进行开发，否则由 develop 分支检出 feature 分支进行开发，开发完后合并到develop 分支</li></ul><h2 id="git-commit-message规范" tabindex="-1"><a class="header-anchor" href="#git-commit-message规范" aria-hidden="true">#</a> Git Commit Message规范</h2><p>Git commit message规范指提交代码时编写的规范注释，编写良好的Commit messages可以达到3个重要的目的：</p><ul><li>加快代码review的流程</li><li>帮助我们编写良好的版本发布日志</li><li>让之后的维护者了解代码里出现特定变化和feature被添加的原因</li></ul><h3 id="angular-git-commit-guidelines" tabindex="-1"><a class="header-anchor" href="#angular-git-commit-guidelines" aria-hidden="true">#</a> Angular Git Commit Guidelines</h3><p>业界应用的比较广泛的是Angular Git Commit Guidelines：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
&lt;BLANK LINE&gt;
&lt;body&gt;
&lt;BLANK LINE&gt;
&lt;footer&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>type：提交类型</li><li>scope：可选项，本次 commit 波及的范围</li><li>subject：简明扼要的阐述下本次 commit 的主旨，在<code>Angular Git Commit Guidelines</code>中强调了三点。使用祈使句，首字母不要大写，结尾无需添加标点</li><li>body: 同样使用祈使句，在主体内容中我们需要把本次 commit 详细的描述一下，比如此次变更的动机</li><li>footer: 描述下与之关联的 issue 或 break change</li></ul><h3 id="简易版" tabindex="-1"><a class="header-anchor" href="#简易版" aria-hidden="true">#</a> 简易版</h3><p>项目中实际可以采用简易版规范：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;):&lt;subject&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="type规范" tabindex="-1"><a class="header-anchor" href="#type规范" aria-hidden="true">#</a> type规范</h3><p><code>Angular Git Commit Guidelines</code>中推荐的type类型如下：</p><ul><li>feat: 新增功能</li><li>fix: 修复bug</li><li>docs: 仅文档更改</li><li>style: 不影响代码含义的更改（空白、格式设置、缺失 分号等）</li><li>refactor: 既不修复bug也不添加特性的代码更改</li><li>perf: 改进性能的代码更改</li><li>test: 添加缺少的测试或更正现有测试</li><li>chore: 对构建过程或辅助工具和库（如文档）的更改</li></ul><p>除此之外，还有一些常用的类型：</p><ul><li>delete：删除功能或文件</li><li>modify：修改功能</li><li>build：改变构建流程，新增依赖库、工具等（例如webpack、gulp、npm修改）</li><li>test：测试用例的新增、修改</li><li>ci：自动化流程配置修改</li><li>revert：回滚到上一个版本</li></ul><h3 id="单次提交注意事项" tabindex="-1"><a class="header-anchor" href="#单次提交注意事项" aria-hidden="true">#</a> 单次提交注意事项</h3><ul><li>提交问题必须为同一类别</li><li>提交问题不要超过3个</li><li>提交的commit发现不符合规范，<code>git commit --amend -m &quot;新的提交信息&quot;</code>或 <code>git reset --hard HEAD</code> 重新提交一次</li></ul><h2 id="配置-gitignore文件" tabindex="-1"><a class="header-anchor" href="#配置-gitignore文件" aria-hidden="true">#</a> 配置.gitignore文件</h2><p><code>.gitignore</code>是一份用于忽略不必提交的文件的列表，项目中可以根据实际需求统一<code>.gitignore</code>文件，减少不必要的文件提交和冲突，净化代码库环境。</p><p>通用文件示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HELP.md
target/
!.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### NetBeans ###
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/
!**/src/main/**/build/
!**/src/test/**/build/

### VS Code ###
.vscode/

# Log file
*.log
/logs*

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.ear
*.zip
*.tar.gz
*.rar
*.cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>此外，还有一些其他建议：</p><ul><li>master 分支的每一次更新，都建议打 tag 添加标签，通常为对应版本号，便于管理</li><li>feature分支、hotfix分支在合并后可以删除，避免分支过多管理混乱</li><li>每次 pull 代码前，提交本地代码到本地库中，否则可能回出现合并代码出错，导致代码丢失</li></ul>`,50),n=[d];function s(r,c){return i(),t("div",null,n)}const o=e(a,[["render",s],["__file","5.html.vue"]]);export{o as default};
