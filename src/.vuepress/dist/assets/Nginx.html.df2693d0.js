import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as t,o,c,a as n,b as s,d as i,e as a}from"./app.c5b3201b.js";const p={},d=a('<ul><li>高性能的 HTTP 和<strong>反向代理</strong>服务器，同时也是电子邮件（IMAP/POP3/SMTP）代理服务器</li><li>Nginx 分为主进程（master process）和工作进程（worker process），每个进程中只有一个线程（也可以配置线程池），通过 IO 多路复用（底层使用 epoll/kqueue 等技术）和事件循环达到高并发。主进程负责总体协调工作，比如在配置文件更新后重新应用配置、协调哪个 worker process 应该退役等等。工作进程的个数一般设置为 CPU 的个数。</li></ul><h2 id="nginx-的启动和停止" tabindex="-1"><a class="header-anchor" href="#nginx-的启动和停止" aria-hidden="true">#</a> Nginx 的启动和停止</h2><ul><li>start nginx.exe：启动</li><li>nginx [-c /etc/nginx/nginx.conf]：启动，可同时指定主配置文件</li><li>nginx -h</li><li>nginx -s 信号：向正在运行的 nginx 进程发送信号，信号包括： <ul><li>stop：立即关闭</li><li>quit：正常关闭（等待工作进程处理完当前的请求才停止 nginx 进程）</li><li>reload：重新加载配置文件</li><li>reopen：重新打开日志文件，实现日志分隔的效果</li></ul></li><li>nginx -t：检查配置文件是否存在语法错误</li><li>nginx -v：查看当前 nginx 的版本信息</li><li>nginx -V：查看当前 nginx 的编译信息，如安装的模块、安装目录、各种文件的目录、编译器选项等</li></ul><h2 id="nginx-的配置文件" tabindex="-1"><a class="header-anchor" href="#nginx-的配置文件" aria-hidden="true">#</a> Nginx 的配置文件</h2>',4),r=n("li",null,[s("默认情况下，配置文件名为 nginx.conf，并放在目录 "),n("code",null,"/usr/local/nginx/conf"),s("，"),n("code",null,"/etc/nginx"),s(" 或 "),n("code",null,"/usr/local/etc/nginx"),s(" 中")],-1),u={href:"https://github.com/digitalocean/nginxconfig.io",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span>  nginx</span><span class="token punctuation">;</span> <span class="token comment"># 指定工作进程使用的用户和组</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  auto</span><span class="token punctuation">;</span> <span class="token comment"># 工作进程的数量，通常设置成和 CPU 的数量相等（auto 表示自动绑定工作进程到可用的 CPU），默认 1</span>

<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log warn</span><span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token comment"># 全局错误日志</span>
<span class="token directive"><span class="token keyword">pid</span>        run/nginx.pid</span><span class="token punctuation">;</span> <span class="token comment"># PID 文件--存放进程号的文件</span>

<span class="token comment">#工作模式及连接数上限</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span> <span class="token comment"># 每个工作进程可以同时打开的最大连接数（包括与客户端、代理服务器的连接等）</span>
    <span class="token comment"># 并发总数是 worker_processes 和 worker_connections 的乘积</span>
<span class="token punctuation">}</span>

<span class="token comment"># Nginx 基于 TCP/UDP 端口的四层负载均衡</span>
<span class="token comment">#server {</span>
<span class="token comment">#    listen 12345;</span>
<span class="token comment">#    proxy_connect_timeout 1s;</span>
<span class="token comment">#    proxy_timeout 1m;</span>
<span class="token comment">#    proxy_pass example.com:12345;</span>
<span class="token comment">#}</span>

<span class="token comment"># Nginx 对 HTTP 服务器相关属性的配置</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span> <span class="token comment"># 设定默认类型为二进制流</span>

    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">access_log</span>  logs/access.log  main</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">75s</span></span><span class="token punctuation">;</span> <span class="token comment"># 设置 keep-alive 客户端连接在服务器端保持开启的超时值（默认 75s）；值为 0 会禁用 keep-alive 客户端连接</span>
    <span class="token directive"><span class="token keyword">keepalive_requests</span> <span class="token number">100</span></span><span class="token punctuation">;</span> <span class="token comment"># 设置一个 keep-alive 连接上可以服务的请求的最大数量，当最大请求数量达到时，连接被关闭（默认 100）</span>
    
    <span class="token directive"><span class="token keyword">underscores_in_headers</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token comment"># 禁用在客户端请求头字段中使用下划线（名称中包含下划线的请求头字段将被标记为无效），默认 off。如果没有显式地设置 \`underscores_in_headers on;\`，Nginx 将删除包含下划线的请求头字段。This is done in order to prevent ambiguities when mapping headers to CGI variables as both dashes and underscores are mapped to underscores during that process.</span>
    <span class="token directive"><span class="token keyword">ignore_invalid_headers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment"># 忽略具有无效名称的头字段。有效名称由英文字母、数字、连字符或下划线组成（由 underscores_in_headers 指令控制）</span>

    <span class="token comment">#gzip  on;</span>

    <span class="token directive"><span class="token keyword">include</span> vhost/*.conf</span><span class="token punctuation">;</span>

    <span class="token comment"># 设定 localhost 对应的虚拟主机</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span> <span class="token comment"># 监听 80 端口</span>
        <span class="token directive"><span class="token keyword">server_name</span>  example.org  www.example.org  *.example.org</span><span class="token punctuation">;</span> <span class="token comment"># 定义虚拟主机名称</span>
        
        <span class="token comment">#root D:\\code; # 定义服务器的默认网站根目录位置</span>

        <span class="token comment">#charset koi8-r; # 设置编码</span>

        <span class="token comment">#access_log  logs/host.access.log  main; # 设定本虚拟主机的访问日志</span>

        <span class="token comment"># 主要用于匹配网页位置，设置不同的功能特征</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span> <span class="token comment"># 定义当前 location 的文档根目录为 html 目录</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span> <span class="token comment"># 定义首页索引文件的名称</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404  /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># stream 模块配置和 http 模块在相同级别</span>
<span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">16379</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_timeout</span> <span class="token number">1m</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> 127.0.0.1:6379</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>默认情况下，nginx 已经自动开启了对 client 连接的 keep alive 支持（同时 client 发送的 HTTP 请求要求 keep alive） 默认 nginx 访问后端 server（nginx 称为 upstream）都是用的<strong>短连接</strong>（HTTP/1.0），一个请求来了，nginx <strong>新开一个端口和后端建立连接</strong>，后端处理完成后主动关闭该连接</p></blockquote><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h3><ul><li>location 语法：<code>location [ = | ~ | ~* | ^~ ] uri { ... };</code> 或 <code>location @name { ... };</code></li><li>location 的定义方式 <ul><li><code>= uri</code>：使 URI 和 location 匹配精确</li><li><code>^~ uri</code>：由前缀字符串定义</li><li><code>~ uri</code>：由正则表达式定义（匹配时区分大小写）</li><li><code>~* uri</code>：由正则表达式定义（匹配时不区分大小写）</li><li><code>@name</code>：定义一个命名的 location，在内部定向时使用，例如 error_page, try_files</li></ul></li><li>如果有几个匹配上的 location 块指令，nginx 将选择具有最长前缀的 location 块</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /</span> <span class="token punctuation">{</span>
    <span class="token comment"># 仅允许 IPv4 网络 10.1.1.0/16 和 192.168.1.0/24 与 IPv6 网络 2001:0db8::/ 32 访问，不包括地址 192.168.1.1</span>
    <span class="token directive"><span class="token keyword">deny</span>  192.168.1.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">allow</span> 192.168.1.0/24</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">allow</span> 10.1.1.0/16</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">allow</span> 2001:0db8::/32</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">deny</span>  all</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> /documents/</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> ^~ /images/</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment"># 防盗链</span>
<span class="token directive"><span class="token keyword">location</span> ~* \\.(gif|jpg|jpeg)$</span> <span class="token punctuation">{</span>
    <span class="token comment"># 只允许 192.168.0.1 请求资源</span>
    <span class="token directive"><span class="token keyword">valid_referers</span> none blocked 192.168.0.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$invalid_referer</span>)</span> <span class="token punctuation">{</span>
       <span class="token directive"><span class="token keyword">rewrite</span> ^/ http://<span class="token variable">$host</span>/logo.png</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> = /XDFyle6tNA.txt</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">default_type</span> text/plain</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;d6296a84657eb275c05c31b10924f6ea&#39;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># root 不做替换，匹配结果为：/var/www/app/static/static</span>
<span class="token directive"><span class="token keyword">location</span> /static/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /var/www/app/static/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">autoindex</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># alias 会做替换，匹配结果为：/var/www/app/static</span>
<span class="token directive"><span class="token keyword">location</span> /static/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /var/www/app/static/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">autoindex</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),k={id:"https-sdky-gitee-io-5-devops-04-nginx-html-try-files-try-files",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#https-sdky-gitee-io-5-devops-04-nginx-html-try-files-try-files","aria-hidden":"true"},"#",-1),b={href:"https://sdky.gitee.io/5",target:"_blank",rel:"noopener noreferrer"},g=a(`<ul><li>语法：<code>try_files file ... uri;</code> 或 <code>try_files file ... =code;</code></li><li>按指定的 file 顺序查找存在的文件，并使用第一个找到的文件进行请求处理</li><li>查找路径是按照给定的 root（不做替换） 或 <strong>alias</strong>（会做替换） 为根路径来查找的</li><li>如果最后一个参数是 <code>uri</code>，若给出的 file 都没有匹配到，则重新请求最后一个参数给定的 uri，就是新的 location 匹配（如果 uri 不是命名的 location，那么 <code>$args</code> 不会自动传递，如果要保留 <code>$args</code>，必须明确声明参数；如果这个路径不存在，将会返回 500 错误）</li><li>如果最后一个参数是 <code>= 404</code>，若给出的 file 都没有匹配到，则最后返回 404 响应码</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 比如请求 127.0.0.1/images/test.gif 会依次查找：</span>
<span class="token comment"># 1. 文件 /opt/html/images/test.gif；</span>
<span class="token comment"># 2. 文件夹 /opt/html/images/test.gif/ 下的 index 文件；</span>
<span class="token comment"># 3. 请求 127.0.0.1/images/default.gif</span>
<span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /opt/html/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /images/default.gif?<span class="token variable">$args</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 2 3 4 5 6 7 8</p><blockquote><p>try-files 如果不写上 <code>$uri/</code>，当直接访问一个目录路径时，并不会去匹配目录下的索引页，即访问 127.0.0.1/images/ 不会去访问 127.0.0.1/images/index.html</p></blockquote><h3 id="常见内置预定义变量" tabindex="-1"><a class="header-anchor" href="#常见内置预定义变量" aria-hidden="true">#</a> 常见内置预定义变量</h3><ul><li>ngx_http_core_module <code>$host</code>：按照以下优先顺序：来自请求行的主机名，来自 Host 请求头字段的主机名，或与请求匹配的服务器名 <code>$hostname</code>：主机名 <code>$arg_name</code>：请求行中的 name 参数 <code>$args</code>、<code>$query_string</code>：请求行中的参数 <code>$cookie_name</code>：名称为 name 的 cookie <code>$http_name</code>：任意请求头字段，变量名称的最后一部分是将字段名称转换为小写，并用破折号替换为下划线，如 <code>$http_host</code><code>$msec</code>：当前时间以毫秒为单位 <code>$remote_addr</code>：客户端地址 <code>$remote_port</code>：客户端端口 <code>$remote_user</code>：基本身份验证提供的用户名 <code>$request</code>：完整的原始请求行 <code>$request_body</code>：请求正文 <code>$request_id</code>：由 16 个随机字节生成的唯一请求标识符，以十六进制表示 <code>$request_method</code>：请求方法 <code>$request_time</code>：请求处理时间以毫秒为单位 <code>$request_uri</code>：完整的原始请求 URI <code>$scheme</code>：请求模式，http 或 https <code>$sent_http_name</code>：任意响应头字段。变量名称的最后一部分是将字段名称转换为小写，并用破折号替换为下划线 <code>$status</code>：响应状态</li><li>ngx_http_proxy_module <code>$proxy_host</code>：proxy_pass 指令中指定的代理服务器的名称和端口 <code>$proxy_port</code>：proxy_pass 指令中指定的代理服务器的端口或协议的默认端口 <code>$proxy_add_x_forwarded_for</code>：X-Forwarded-For 客户端请求头字段，其中附加了 <code>$remote_addr</code> 变量，以逗号分割。如果客户端请求头中不存在 X-Forwarded-For 字段，则 <code>$proxy_add_x_forwarded_for</code> 变量等于 <code>$remote_addr</code> 变量</li></ul><h2 id="nginx-的虚拟主机" tabindex="-1"><a class="header-anchor" href="#nginx-的虚拟主机" aria-hidden="true">#</a> Nginx 的虚拟主机</h2><ul><li>虚拟主机是用来<strong>映射</strong>网站目录和网站代码文件夹的关系</li><li>可以通过 server 配置，每个 server 表示一个虚拟机主机</li><li>nginx 首先根据 server 块的 listen 指令检验请求的 IP 和端口，之后根据与 IP 和端口相匹配的 <code>server</code> 块的 <code>server_name</code> 项对请求的“Host” header 域进行检验</li><li>如果找不到服务器的名称（server_name），请求将由 <code>default_server</code> 处理</li></ul><h3 id="服务器名称" tabindex="-1"><a class="header-anchor" href="#服务器名称" aria-hidden="true">#</a> 服务器名称</h3>`,9),h=a("<li>当通过名称搜索虚拟服务器时，如果名称与多个指定的变体匹配，例如通配符和正则表达式，则将按照优先顺序选择第一个匹配的变体： <ol><li>精确的名称</li><li>以 <code>*</code> 开头的最长的通配符名称，例如 <code>*.example.org</code></li><li>以 <code>*</code> 结尾的最长的通配符名称，例如 <code>mail.*</code></li><li>第一个匹配的正则表达式（按照在配置文件中出现的顺序）</li></ol></li>",1),_=n("li",null,[s("通配符名称只能在名称的开头或者结尾包含一个 "),n("code",null,"*"),s("，且只能在点的边界上包含 "),n("code",null,"*")],-1),x=n("code",null,"*",-1),w=n("code",null,"*.example.org",-1),y={href:"http://www.example.org",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.sub.example.org",target:"_blank",rel:"noopener noreferrer"},$=n("li",null,[s("可以使用 "),n("code",null,".example.org"),s(" 形式的特殊通配符名称来匹配确切的名称 "),n("code",null,"example.org"),s(" 和通配符 "),n("code",null,"*.example.org")],-1),q=n("li",null,[s("正则表达式名称：nginx 使用的正则表达式与 Perl 编程语言（PCRE）使用的正则表达式兼容，要使用正则表达式，服务器名称必须以 "),n("code",null,"~"),s(" 开头")],-1),P=a(`<blockquote><p>搜索通配符哈希表比搜索确切名称的哈希表要慢 由于正则表达式是按顺序验证的，因此是最慢的方法，并且是不可扩展的 由于这些原因，最好是<strong>尽可能使用确切的名称</strong></p></blockquote><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2><ul><li>当用户请求 js、css 等静态资源时有当前 Nginx 服务器处理，请求 php 动态脚本代码时由其他的服务器处理（反向代理）</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 配置 Nginx 动静分离，定义的静态页面直接从 Nginx 发布目录读取</span>
<span class="token directive"><span class="token keyword">location</span> ~ .*\\.(gif|jpg|jpeg|bmp|png|ico|txt|js|css)$</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /data/www/wugk</span><span class="token punctuation">;</span>
    <span class="token comment">#expires 定义用户浏览器缓存的时间为 3 天</span>
    <span class="token directive"><span class="token keyword">expires</span>      <span class="token number">3d</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token comment"># 动态页面交给其他服务器处理</span>
<span class="token directive"><span class="token keyword">location</span> ~ .*\\.(php|jsp|cgi)?$</span> <span class="token punctuation">{</span>
   <span class="token comment"># 发送给其他服务器处理</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-的反向代理" tabindex="-1"><a class="header-anchor" href="#nginx-的反向代理" aria-hidden="true">#</a> Nginx 的反向代理</h2><ul><li>反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连的客户端，此时代理服务器对外就表现为一个服务器</li><li>代理服务器可以作为前端服务器处理静态资源</li><li>proxy_pass <ul><li>语法：<code>proxy_pass URL;</code></li><li>设置代理服务器的协议（http 或 https）、地址（域名或 IP，以及一个可选端口号）、应映射位置的 URI（可选）</li></ul></li><li>proxy_set_header <ul><li>语法：<code>proxy_set_header filed value;</code></li><li>用于将字段重新定义或附加到传递给代理服务器的请求 header。该值可以包含文本、变量及其组合</li><li>当且仅当<strong>在当前级别上没有定义</strong> <code>proxy_set_header</code> 指令时，这些指令才<strong>从上层级别继承</strong></li><li>默认情况下，只重新定义了两个字段：<code>proxy_set_header Host $proxy_host;</code> <code>proxy_set_header Connection close;</code></li></ul></li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 侦听 192.168.8.x 的 80 端口</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>    www.example.org</span><span class="token punctuation">;</span>

    <span class="token comment"># 反向代理时获取客户端真实 IP、域名、协议、端口</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 对 php 后缀的进行请求（正则表达式之前应该是 ~）</span>
    <span class="token directive"><span class="token keyword">location</span> ~ .*\\.php$</span> <span class="token punctuation">{</span>
        <span class="token comment"># 定义服务器的默认网站根目录位置</span>
        <span class="token directive"><span class="token keyword">root</span>     /root</span><span class="token punctuation">;</span>
        <span class="token comment"># 定义首页索引文件的名称</span>
        <span class="token directive"><span class="token keyword">index</span> index.php index.html index.htm</span><span class="token punctuation">;</span>

        <span class="token comment"># 请求转发到指定的代理服务器</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>    http://localhost:81</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token directive"><span class="token keyword">location</span> /api1/</span> <span class="token punctuation">{</span>
        <span class="token comment"># proxy_pass 中不带 URI 时，nginx 将会保留 location 中路径部分</span>
        <span class="token comment"># http://localhost/api1/xxx -&gt; http://localhost:8080/api1/xxx</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>    http://localhost:8080</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token directive"><span class="token keyword">location</span> /api2/</span> <span class="token punctuation">{</span>
        <span class="token comment"># proxy_pass 中带 URI 时，nginx 将使用例如 alias 的替换方式对 URL 进行替换</span>
        <span class="token comment"># http://localhost/api2/xxx -&gt; http://localhost:8080/xxx</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>    http://localhost:8080/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-的负载均衡" tabindex="-1"><a class="header-anchor" href="#nginx-的负载均衡" aria-hidden="true">#</a> Nginx 的负载均衡</h2>`,8),N=n("li",null,[n("p",null,"优点：分散后端服务器的压力；自动去掉不可用的后端服务器；缓存后端服务器响应内容")],-1),I=n("li",null,[n("p",null,"负载均衡的分配策略："),n("ul",null,[n("li",null,"轮询（默认）"),n("li",null,"least_conn：最少连接，下一个请求被分配给具有最少数量活动连接的服务器"),n("li",null,"weight"),n("li",null,"ip_hash"),n("li",null,"fair（第三方，按后端服务器的响应时间来分配请求，响应时间短的优先分配）、url_hash（第三方）")])],-1),T={href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html",target:"_blank",rel:"noopener noreferrer"},U=n("strong",null,"配置",-1),R=a(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 在 http 节点中定义负载均衡设备的 ip 及设备状态 </span>
    <span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
        <span class="token comment"># ip_hash;</span>
        <span class="token comment"># least_conn; # 加权最少连接</span>
        <span class="token comment"># down 表示将当前的 server 标记为永久不可用</span>
        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:9090 down</span><span class="token punctuation">;</span>
        <span class="token comment"># weight 默认为 1，weight 越大，负载的权重就越大，被分配到的几率就越大</span>
        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:8080 weight=2</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:6060 max_fails=1 fail_timeout=10s</span><span class="token punctuation">;</span>
        <span class="token comment"># 其它所有的非 backup 机器 down 或者忙的时候，请求 backup 机器</span>
        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:7070 backup</span><span class="token punctuation">;</span>
        [ip_hash | fair | url_hash]
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token comment"># 在需要使用负载的 server 节点下添加</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://backend</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C=n("li",null,[n("p",null,"健康检查"),n("ul",null,[n("li",null,"Nginx 是基于连接探测的，如果在单位周期为 fail_timeout 设置的时间内与服务器通信的失败次数达到 max_fails 次，那么就将把该服务器标记为不可用，并等待下一个周期（同样时长为 fail_timeout）再一次去请求，判断是否连接是否成功，如果探测成功，则将服务器标记为活动"),n("li",null,[s("默认情况下，"),n("code",null,"max_fails=1 fail_timeout=10s"),s("，当 max_fails 设置为 0 时，该服务器的健康检查将被禁用（即认为该服务器是一直可用的）")])])],-1),H=a(`<h2 id="nginx-的-websocket-代理" tabindex="-1"><a class="header-anchor" href="#nginx-的-websocket-代理" aria-hidden="true">#</a> Nginx 的 WebSocket 代理</h2><ul><li>使用 HTTP/1.1 中的<strong>协议切换</strong>机制，将客户端与服务器之间的连接从 HTTP/1.1 转换为 WebSocket</li><li>如果代理服务器返回一个 101 响应码（交换协议），则客户机和代理服务器之间将建立隧道，客户端通过请求中的 <code>Upgrade</code> 头来请求协议交换</li><li>默认情况下，如果代理务器在 60 秒内没有传输任何数据，连接将被关闭（这个超时可以通过 proxy_read_timeout指令来增加， 或者代理服务器可以配置为定期发送 WebSocket ping 帧以重置超时并检查连接是否仍然活跃）</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /chat/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://backend</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function F(j,X){const e=t("ExternalLinkIcon");return o(),c("div",null,[d,n("ul",null,[r,n("li",null,[n("a",u,[s("Nginx 配置生成器(opens new window)"),i(e)])])]),v,n("h3",k,[m,s(" [#]("),n("a",b,[s("https://sdky.gitee.io/5"),i(e)]),s(" DevOps/04 Nginx.html#try-files)try_files")]),g,n("ul",null,[h,n("li",null,[s("通配符名称： "),n("ul",null,[_,n("li",null,[x,s(" 可以匹配多个名称部分，例如 "),w,s(" 可以匹配 "),n("a",y,[s("www.example.org"),i(e)]),s("、"),n("a",f,[s("www.sub.example.org"),i(e)])]),$])]),q]),P,n("ul",null,[N,I,n("li",null,[n("p",null,[n("a",T,[s("负载均衡"),U,s("(opens new window)"),i(e)])]),R]),C]),H])}const V=l(p,[["render",F],["__file","Nginx.html.vue"]]);export{V as default};
