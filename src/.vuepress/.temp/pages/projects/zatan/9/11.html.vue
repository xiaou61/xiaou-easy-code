<template><div><blockquote>
<p>Vercel使用有不少需要仔细配置的地方，可惜的是，自定义Vercel缓存时间，Vercel重定向等使用方法略复杂，不是开箱即用，有一定使用门槛，故这里单独列一篇文章详细说明Vercel的一些高级使用方法！</p>
</blockquote>
<h2 id="为什么使用-vercel" tabindex="-1"><a class="header-anchor" href="#为什么使用-vercel" aria-hidden="true">#</a> 为什么使用 vercel</h2>
<ul>
<li>国内 <code v-pre>Github Pages</code> 速度较慢。</li>
<li><code v-pre>vercel</code> 速度快且能够自定义域名，能实现和 <code v-pre>Github Pages</code> 一样的效果</li>
</ul>
<blockquote>
<p>vercel 官方地址：<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">vercel.com/<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h2>
<ul>
<li>首先注册一个账号 <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">https://vercel.com/<ExternalLinkIcon/></a></li>
<li>注册成功后进入页面，点击 <code v-pre>News Project</code></li>
</ul>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158883.webp" alt="img" loading="lazy"></p>
<p><strong>img</strong></p>
<ul>
<li>然后通过绑定的 <code v-pre>github</code> 或者 <code v-pre>gitlab</code> 导入需要部署的项目</li>
</ul>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158427.webp" alt="img" loading="lazy"></p>
<p><strong>img</strong></p>
<ul>
<li>如果导入的项目是打包好的静态页，<code v-pre>FRAMEWORK PRESET</code> 选择 <code v-pre>Other</code> 。</li>
</ul>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158246.webp" alt="img" loading="lazy"></p>
<p><strong>img</strong></p>
<ul>
<li>点击 <code v-pre>deployed</code> 进行部署，如果部署失败可以查看报错信息是不是上一步的某些选项没有覆盖。部署成功后会进入如图所示的界面</li>
</ul>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158011.webp" alt="img" loading="lazy"></p>
<p><strong>img</strong></p>
<h2 id="如何自定义域名" tabindex="-1"><a class="header-anchor" href="#如何自定义域名" aria-hidden="true">#</a> 如何自定义域名</h2>
<ul>
<li>腾讯云域名地址：<a href="https://console.cloud.tencent.com/domain" target="_blank" rel="noopener noreferrer">console.cloud.tencent.com/domain<ExternalLinkIcon/></a></li>
<li><code v-pre>vercel</code> 静态页挂载地址：</li>
<li>进入到 setting 中可对项目进行一些设置，如项目名称</li>
</ul>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158196.webp" alt="vercel 自定义域名" loading="lazy"></p>
<p><strong>vercel 自定义域名</strong></p>
<ul>
<li>下面演示如何自定义域名，默认情况下部署成功后 <code v-pre>vercel</code> 会给你生成一个默认的域名，如果想要修改成自己的域名可将域名名称修改成自己的。</li>
<li>当选择修改成自己的域名名称后，<code v-pre>vercel</code> 会检查域名指向的 <code v-pre>DNS</code> 对不对，如果不对的话会提示你域名的 DNS 应该如何配置，按照 <code v-pre>vercel</code> 提示的 <code v-pre>DNS</code> 信息</li>
</ul>
<p>在自己的域名的 <code v-pre>DNS</code> 配置中进行配置，如图</p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158920.webp" alt="img" loading="lazy"></p>
<p><strong>img</strong></p>
<h2 id="配置多个域名" tabindex="-1"><a class="header-anchor" href="#配置多个域名" aria-hidden="true">#</a> 配置多个域名</h2>
<p>对其他新增的域名选择重定向到自己的主域名即可</p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158035.webp" alt="vercel 多域名配置" loading="lazy"></p>
<p><strong>vercel 多域名配置</strong></p>
<h2 id="自定义vercel服务器位置" tabindex="-1"><a class="header-anchor" href="#自定义vercel服务器位置" aria-hidden="true">#</a> 自定义Vercel服务器位置</h2>
<blockquote>
<p>Vercel线路已经很快了，但是可以通过选择Vercel部署服务器位置，更进一步加快中国大陆，亚洲区域的访问速度！</p>
</blockquote>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158929.webp" alt="Vercel服务器选择" loading="lazy"></p>
<p><strong>Vercel服务器选择</strong></p>
<p>香港服务器虽然没有严格测试，但是中国大陆速度应该是最快的！</p>
<h2 id="自定义header缓存时间" tabindex="-1"><a class="header-anchor" href="#自定义header缓存时间" aria-hidden="true">#</a> 自定义Header缓存时间</h2>
<blockquote>
<p><a href="https://vercel.com/docs/project-configuration#project-configuration/headers" target="_blank" rel="noopener noreferrer">vercel.com/docs<ExternalLinkIcon/></a></p>
<p><strong>使用Vercel必备配置，本地缓存加速访问！</strong></p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>vercel.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>json</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/sw.js"</span><span class="token punctuation">,</span>
      <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, max-age=0, must-revalidate"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"(.*)"</span><span class="token punctuation">,</span>
      <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
          <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=86400, max-age=86400"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vercel自定义404" tabindex="-1"><a class="header-anchor" href="#vercel自定义404" aria-hidden="true">#</a> Vercel自定义404</h2>
<blockquote>
<p><a href="https://vercel.com/guides/custom-404-page" target="_blank" rel="noopener noreferrer">learn how to customize the 404 page<ExternalLinkIcon/></a>.</p>
</blockquote>
<h2 id="vercel流量超标怎么办" tabindex="-1"><a class="header-anchor" href="#vercel流量超标怎么办" aria-hidden="true">#</a> Vercel流量超标怎么办？</h2>
<blockquote>
<p>最近查看了一下Vercel流量使用情况，发现RSS订阅流量太大了，占了30GB流量！</p>
<p>免费Vercel账户每月只有100G免费流量，怎么办？</p>
</blockquote>
<p>有两种解决方法：</p>
<ol>
<li>使用 DNS 多线路分流，例如<a href="https://blog.17lai.site/posts/5311b619/#DNSPOD-%E5%A4%9A%E7%BA%BF%E8%B7%AF%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1" target="_blank" rel="noopener noreferrer">DNSPOD 多线路负载均衡<ExternalLinkIcon/></a></li>
<li>使用 Vercel 提供的 <a href="https://vercel.com/docs/project-configuration#project-configuration/redirects" target="_blank" rel="noopener noreferrer">redirects<ExternalLinkIcon/></a> 或者 <a href="https://vercel.com/docs/project-configuration#project-configuration/rewrites" target="_blank" rel="noopener noreferrer">rewrites<ExternalLinkIcon/></a>功能，把rss访问重定向到其它部署方式，例如Cloudflare</li>
</ol>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158874.webp" alt="Vercel 流量" loading="lazy"></p>
<p><strong>Vercel 流量</strong></p>
<p>查看方法：<a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer">dashboard<ExternalLinkIcon/></a> -&gt; <a href="https://vercel.com/dashboard/usage" target="_blank" rel="noopener noreferrer">usage<ExternalLinkIcon/></a></p>
<p>由于个人blog也部署到Cloudflare上面了，<a href="https://cfblog.17lai.site/" target="_blank" rel="noopener noreferrer">https://cfblog.17lai.site<ExternalLinkIcon/></a>，Cloudflare的流量目前看着没限制，如是，可以使用如下重定向方法</p>
<p>json</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"redirects"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span> <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/atom.xml"</span><span class="token punctuation">,</span> <span class="token property">"destination"</span><span class="token operator">:</span> <span class="token string">"https://cfblog.17lai.site/atom.xml"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span> <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/rss.xml"</span><span class="token punctuation">,</span> <span class="token property">"destination"</span><span class="token operator">:</span> <span class="token string">"https://cfblog.17lai.site/rss.xml"</span> <span class="token punctuation">}</span>
  	<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细 Cloudflare 部署方法，戳 <a href="https://blog.17lai.site/posts/5311b619/#cloudflare-Pages-%E9%83%A8%E7%BD%B2" target="_blank" rel="noopener noreferrer">cloudflare Pages 部署<ExternalLinkIcon/></a></p>
<p>个人使用最终版本如下，各位使用修改对应部分即可。文件路径 <code v-pre>[hexo]/source/vercel.json</code></p>
<p>json</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/sw.js"</span><span class="token punctuation">,</span>
            <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, max-age=0, must-revalidate"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"(.*)"</span><span class="token punctuation">,</span>
            <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=86400, max-age=86400"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/medias/(.*)"</span><span class="token punctuation">,</span>
            <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=2592000, max-age=2592000"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/medias_webp/(.*)"</span><span class="token punctuation">,</span>
            <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=2592000, max-age=2592000"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"(.*).html"</span><span class="token punctuation">,</span>
            <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=1800, max-age=1800"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"(.*).js"</span><span class="token punctuation">,</span>
            <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=2592000, max-age=2592000"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"(.*).css"</span><span class="token punctuation">,</span>
            <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=2592000, max-age=2592000"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"(.*).json"</span><span class="token punctuation">,</span>
            <span class="token property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span>
                    <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"public, s-maxage=2592000, max-age=2592000"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"regions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"hkg1"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"redirects"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/gtag/js"</span><span class="token punctuation">,</span>
            <span class="token property">"destination"</span><span class="token operator">:</span> <span class="token string">"https://www.googletagmanager.com/gtag/js"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/atom.xml"</span><span class="token punctuation">,</span>
            <span class="token property">"destination"</span><span class="token operator">:</span> <span class="token string">"https://cfblog.17lai.site/atom.xml"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"/rss.xml"</span><span class="token punctuation">,</span>
            <span class="token property">"destination"</span><span class="token operator">:</span> <span class="token string">"https://cfblog.17lai.site/rss.xml"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vercel-账号被禁怎么办" tabindex="-1"><a class="header-anchor" href="#vercel-账号被禁怎么办" aria-hidden="true">#</a> Vercel 账号被禁怎么办？</h2>
<blockquote>
<p>Your Personal Account was automatically blocked because its usage exceeds the fair use policy</p>
</blockquote>
<p>最近某个 vercel app 流量超标了！ 程序可能被攻击了，或者程序存在某个bug。发现的时候，账号已经被禁用了。</p>
<p>等了一个月后，账号没有自动解禁！</p>
<p>怎么解封了？ 在这里 <a href="https://vercel.com/help#issues" target="_blank" rel="noopener noreferrer">https://vercel.com/help#issues<ExternalLinkIcon/></a> 点击 【Create a case】，然后邮件联系解封！邮件回复说：</p>
<blockquote>
<p>accounts will not auto-unblock after they’ve been blocked for exceeded limits. I can do that manually, but I must first be sure that the underlying issue has been resolved.</p>
</blockquote>
<p>技术支持要求解决掉超出限制的原因，然后再回复邮件！应该就可以解禁了。</p>
<p>删除了被攻击或者出bug的 vercel app 之后再次回复邮件，得到回复：</p>
<blockquote>
<p>After review, I have unblocked your account. Please note that this is a one-time consideration, and future usage overages may require purchasing a Pro team subscription to unblock your account.</p>
</blockquote>
<p>账号终于解禁了，但是再次超出限制就得交钱解禁？ <a href="https://vercel.com/pricing" target="_blank" rel="noopener noreferrer">20$每月<ExternalLinkIcon/></a>的价格太高了！</p>
<h2 id="乒乓部署" tabindex="-1"><a class="header-anchor" href="#乒乓部署" aria-hidden="true">#</a> 乒乓部署</h2>
<blockquote>
<p>也可以叫旋转门部署。</p>
<p>解决调试博客插件，修改半成品文章时部署到云端会影响正在查阅博客的用户的问题！</p>
<p>使用Docker版本本地预览是很不错，但是 jsdelivr 版本发布需要在 Github 生成新 release 这时本地就不行了。乒乓部署可以解决这个问题！</p>
</blockquote>
<p>具体方法就是同时部署到两个地方A和B，博客域名在两个服务器之间切换。这里以 Vercel 为例</p>
<h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作：</h3>
<ul>
<li>创建2个Github仓库，对应服务器A和B的部署</li>
<li>建立两个服务器A和B，分别关联两个 Github 仓库</li>
<li>把调试完毕的代码上传到两个仓库</li>
<li>这时通过服务器A和B都是可以正常浏览的</li>
</ul>
<h3 id="要调试的时候" tabindex="-1"><a class="header-anchor" href="#要调试的时候" aria-hidden="true">#</a> 要调试的时候：</h3>
<ul>
<li>发布到A之前，把博客域名转移到服务器B</li>
<li>在服务A做一些调试，在线 debug 工作</li>
<li>特别是在线 <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">pageseed<ExternalLinkIcon/></a> 测试调优，这种事必备方法。简单不需要新的 jsdelivr 版本调试本地 <a href="https://github.com/appotry/docker-hexo" target="_blank" rel="noopener noreferrer">docker-hexo<ExternalLinkIcon/></a> 调试即可！</li>
</ul>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158133.webp" alt="输入想转移的域名" loading="lazy"></p>
<p><strong>输入想转移的域名</strong></p>
<p><img src="https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309221158170.webp" alt="点击确认转移域名" loading="lazy"></p>
<p><strong>点击确认转移域名</strong></p>
<h3 id="调试完毕后" tabindex="-1"><a class="header-anchor" href="#调试完毕后" aria-hidden="true">#</a> 调试完毕后：</h3>
<ul>
<li>把域名切换到服务器A</li>
<li>同时部署到服务器B，服务器B同步A的部署内容，以便下次备用</li>
</ul>
<blockquote>
<p>总结就是服务器A现行，服务器B做后备，调试发布使用A，调试A的时候B就顶上前台！</p>
<p>这样，调试和正常部署网络服务两不误。是不是感觉自己是个大聪明！</p>
</blockquote>
</div></template>


