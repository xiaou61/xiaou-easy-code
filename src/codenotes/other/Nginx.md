---
# 当前页面内容标题
title: Nginx
# 当前页面图标
icon: nginx
# 分类
category:
- Nginx
# 标签
tag:
- Nginx
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---


- 高性能的 HTTP 和**反向代理**服务器，同时也是电子邮件（IMAP/POP3/SMTP）代理服务器
- Nginx 分为主进程（master process）和工作进程（worker process），每个进程中只有一个线程（也可以配置线程池），通过 IO 多路复用（底层使用 epoll/kqueue 等技术）和事件循环达到高并发。主进程负责总体协调工作，比如在配置文件更新后重新应用配置、协调哪个 worker process 应该退役等等。工作进程的个数一般设置为 CPU 的个数。

## Nginx 的启动和停止

- start nginx.exe：启动
- nginx [-c /etc/nginx/nginx.conf]：启动，可同时指定主配置文件
- nginx -h
- nginx -s 信号：向正在运行的 nginx 进程发送信号，信号包括：
    - stop：立即关闭
    - quit：正常关闭（等待工作进程处理完当前的请求才停止 nginx 进程）
    - reload：重新加载配置文件
    - reopen：重新打开日志文件，实现日志分隔的效果
- nginx -t：检查配置文件是否存在语法错误
- nginx -v：查看当前 nginx 的版本信息
- nginx -V：查看当前 nginx 的编译信息，如安装的模块、安装目录、各种文件的目录、编译器选项等

## Nginx 的配置文件

- 默认情况下，配置文件名为 nginx.conf，并放在目录 `/usr/local/nginx/conf`，`/etc/nginx` 或 `/usr/local/etc/nginx` 中
- [Nginx 配置生成器(opens new window)](https://github.com/digitalocean/nginxconfig.io)

```nginx
user  nginx; # 指定工作进程使用的用户和组
worker_processes  auto; # 工作进程的数量，通常设置成和 CPU 的数量相等（auto 表示自动绑定工作进程到可用的 CPU），默认 1

error_log  logs/error.log warn;; # 全局错误日志
pid        run/nginx.pid; # PID 文件--存放进程号的文件

#工作模式及连接数上限
events {
    worker_connections  1024; # 每个工作进程可以同时打开的最大连接数（包括与客户端、代理服务器的连接等）
    # 并发总数是 worker_processes 和 worker_connections 的乘积
}

# Nginx 基于 TCP/UDP 端口的四层负载均衡
#server {
#    listen 12345;
#    proxy_connect_timeout 1s;
#    proxy_timeout 1m;
#    proxy_pass example.com:12345;
#}

# Nginx 对 HTTP 服务器相关属性的配置
http {
    include       mime.types;
    default_type  application/octet-stream; # 设定默认类型为二进制流

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  75s; # 设置 keep-alive 客户端连接在服务器端保持开启的超时值（默认 75s）；值为 0 会禁用 keep-alive 客户端连接
    keepalive_requests 100; # 设置一个 keep-alive 连接上可以服务的请求的最大数量，当最大请求数量达到时，连接被关闭（默认 100）
    
    underscores_in_headers off; # 禁用在客户端请求头字段中使用下划线（名称中包含下划线的请求头字段将被标记为无效），默认 off。如果没有显式地设置 `underscores_in_headers on;`，Nginx 将删除包含下划线的请求头字段。This is done in order to prevent ambiguities when mapping headers to CGI variables as both dashes and underscores are mapped to underscores during that process.
    ignore_invalid_headers on; # 忽略具有无效名称的头字段。有效名称由英文字母、数字、连字符或下划线组成（由 underscores_in_headers 指令控制）

    #gzip  on;

    include vhost/*.conf;

    # 设定 localhost 对应的虚拟主机
    server {
        listen       80; # 监听 80 端口
        server_name  example.org  www.example.org  *.example.org; # 定义虚拟主机名称
        
        #root D:\code; # 定义服务器的默认网站根目录位置

        #charset koi8-r; # 设置编码

        #access_log  logs/host.access.log  main; # 设定本虚拟主机的访问日志

        # 主要用于匹配网页位置，设置不同的功能特征
        location / {
            root   html; # 定义当前 location 的文档根目录为 html 目录
            index  index.html index.htm; # 定义首页索引文件的名称
        }

        #error_page  404  /404.html;

        # redirect server error pages to the static page /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}

# stream 模块配置和 http 模块在相同级别
stream {
    server {
        listen 16379;
        proxy_connect_timeout 1s;
        proxy_timeout 1m;
        proxy_pass 127.0.0.1:6379;
    }
}
```

> 默认情况下，nginx 已经自动开启了对 client 连接的 keep alive 支持（同时 client 发送的 HTTP 请求要求 keep alive）
> 默认 nginx 访问后端 server（nginx 称为 upstream）都是用的**短连接**（HTTP/1.0），一个请求来了，nginx **新开一个端口和后端建立连接**，后端处理完成后主动关闭该连接

### location

- location 语法：`location [ = | ~ | ~* | ^~ ] uri { ... };` 或 `location @name { ... };`
- location 的定义方式
    - `= uri`：使 URI 和 location 匹配精确
    - `^~ uri`：由前缀字符串定义
    - `~ uri`：由正则表达式定义（匹配时区分大小写）
    - `~* uri`：由正则表达式定义（匹配时不区分大小写）
    - `@name`：定义一个命名的 location，在内部定向时使用，例如 error_page, try_files
- 如果有几个匹配上的 location 块指令，nginx 将选择具有最长前缀的 location 块

```nginx
location = / {
    # 仅允许 IPv4 网络 10.1.1.0/16 和 192.168.1.0/24 与 IPv6 网络 2001:0db8::/ 32 访问，不包括地址 192.168.1.1
    deny  192.168.1.1;
    allow 192.168.1.0/24;
    allow 10.1.1.0/16;
    allow 2001:0db8::/32;
    deny  all;
}

location / {
}

location /documents/ {
}

location ^~ /images/ {
}

# 防盗链
location ~* \.(gif|jpg|jpeg)$ {
    # 只允许 192.168.0.1 请求资源
    valid_referers none blocked 192.168.0.1;
    if ($invalid_referer) {
       rewrite ^/ http://$host/logo.png;
    }
}

location = /XDFyle6tNA.txt {
    default_type text/plain;
    return 200 'd6296a84657eb275c05c31b10924f6ea';
}

# root 不做替换，匹配结果为：/var/www/app/static/static
location /static/ {
    root /var/www/app/static/;
    autoindex off;
}

# alias 会做替换，匹配结果为：/var/www/app/static
location /static/ {
    alias /var/www/app/static/;
    autoindex off;
}
```



### [#](https://sdky.gitee.io/5 DevOps/04 Nginx.html#try-files)try_files

- 语法：`try_files file ... uri;` 或 `try_files file ... =code;`
- 按指定的 file 顺序查找存在的文件，并使用第一个找到的文件进行请求处理
- 查找路径是按照给定的 root（不做替换） 或 **alias**（会做替换） 为根路径来查找的
- 如果最后一个参数是 `uri`，若给出的 file 都没有匹配到，则重新请求最后一个参数给定的 uri，就是新的 location 匹配（如果 uri 不是命名的 location，那么 `$args` 不会自动传递，如果要保留 `$args`，必须明确声明参数；如果这个路径不存在，将会返回 500 错误）
- 如果最后一个参数是 `= 404`，若给出的 file 都没有匹配到，则最后返回 404 响应码

```nginx
# 比如请求 127.0.0.1/images/test.gif 会依次查找：
# 1. 文件 /opt/html/images/test.gif；
# 2. 文件夹 /opt/html/images/test.gif/ 下的 index 文件；
# 3. 请求 127.0.0.1/images/default.gif
location /images/ {
    root /opt/html/;
    try_files $uri $uri/ /images/default.gif?$args;
}
```

1
2
3
4
5
6
7
8

> try-files 如果不写上 `$uri/`，当直接访问一个目录路径时，并不会去匹配目录下的索引页，即访问 127.0.0.1/images/ 不会去访问 127.0.0.1/images/index.html

### 常见内置预定义变量

- ngx_http_core_module `$host`：按照以下优先顺序：来自请求行的主机名，来自 Host 请求头字段的主机名，或与请求匹配的服务器名
  `$hostname`：主机名
  `$arg_name`：请求行中的 name 参数
  `$args`、`$query_string`：请求行中的参数
  `$cookie_name`：名称为 name 的 cookie
  `$http_name`：任意请求头字段，变量名称的最后一部分是将字段名称转换为小写，并用破折号替换为下划线，如 `$http_host`
  `$msec`：当前时间以毫秒为单位
  `$remote_addr`：客户端地址
  `$remote_port`：客户端端口
  `$remote_user`：基本身份验证提供的用户名
  `$request`：完整的原始请求行
  `$request_body`：请求正文
  `$request_id`：由 16 个随机字节生成的唯一请求标识符，以十六进制表示
  `$request_method`：请求方法
  `$request_time`：请求处理时间以毫秒为单位
  `$request_uri`：完整的原始请求 URI
  `$scheme`：请求模式，http 或 https
  `$sent_http_name`：任意响应头字段。变量名称的最后一部分是将字段名称转换为小写，并用破折号替换为下划线
  `$status`：响应状态
- ngx_http_proxy_module `$proxy_host`：proxy_pass 指令中指定的代理服务器的名称和端口
  `$proxy_port`：proxy_pass 指令中指定的代理服务器的端口或协议的默认端口
  `$proxy_add_x_forwarded_for`：X-Forwarded-For 客户端请求头字段，其中附加了 `$remote_addr` 变量，以逗号分割。如果客户端请求头中不存在 X-Forwarded-For 字段，则 `$proxy_add_x_forwarded_for` 变量等于 `$remote_addr` 变量

## Nginx 的虚拟主机

- 虚拟主机是用来**映射**网站目录和网站代码文件夹的关系
- 可以通过 server 配置，每个 server 表示一个虚拟机主机
- nginx 首先根据 server 块的 listen 指令检验请求的 IP 和端口，之后根据与 IP 和端口相匹配的 `server` 块的 `server_name` 项对请求的“Host” header 域进行检验
- 如果找不到服务器的名称（server_name），请求将由 `default_server` 处理

### 服务器名称

- 当通过名称搜索虚拟服务器时，如果名称与多个指定的变体匹配，例如通配符和正则表达式，则将按照优先顺序选择第一个匹配的变体：
    1. 精确的名称
    2. 以 `*` 开头的最长的通配符名称，例如 `*.example.org`
    3. 以 `*` 结尾的最长的通配符名称，例如 `mail.*`
    4. 第一个匹配的正则表达式（按照在配置文件中出现的顺序）
- 通配符名称：
    - 通配符名称只能在名称的开头或者结尾包含一个 `*`，且只能在点的边界上包含 `*`
    - `*` 可以匹配多个名称部分，例如 `*.example.org` 可以匹配 www.example.org、www.sub.example.org
    - 可以使用 `.example.org` 形式的特殊通配符名称来匹配确切的名称 `example.org` 和通配符 `*.example.org`
- 正则表达式名称：nginx 使用的正则表达式与 Perl 编程语言（PCRE）使用的正则表达式兼容，要使用正则表达式，服务器名称必须以 `~` 开头

> 搜索通配符哈希表比搜索确切名称的哈希表要慢
> 由于正则表达式是按顺序验证的，因此是最慢的方法，并且是不可扩展的
> 由于这些原因，最好是**尽可能使用确切的名称**

## 动静分离

- 当用户请求 js、css 等静态资源时有当前 Nginx 服务器处理，请求 php 动态脚本代码时由其他的服务器处理（反向代理）

```nginx
# 配置 Nginx 动静分离，定义的静态页面直接从 Nginx 发布目录读取
location ~ .*\.(gif|jpg|jpeg|bmp|png|ico|txt|js|css)$ {
    root /data/www/wugk;
    #expires 定义用户浏览器缓存的时间为 3 天
    expires      3d;
} 
# 动态页面交给其他服务器处理
location ~ .*\.(php|jsp|cgi)?$ {
   # 发送给其他服务器处理
}
```



## Nginx 的反向代理

- 反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连的客户端，此时代理服务器对外就表现为一个服务器
- 代理服务器可以作为前端服务器处理静态资源
- proxy_pass
    - 语法：`proxy_pass URL;`
    - 设置代理服务器的协议（http 或 https）、地址（域名或 IP，以及一个可选端口号）、应映射位置的 URI（可选）
- proxy_set_header
    - 语法：`proxy_set_header filed value;`
    - 用于将字段重新定义或附加到传递给代理服务器的请求 header。该值可以包含文本、变量及其组合
    - 当且仅当**在当前级别上没有定义** `proxy_set_header` 指令时，这些指令才**从上层级别继承**
    - 默认情况下，只重新定义了两个字段：`proxy_set_header Host $proxy_host;` `proxy_set_header Connection close;`

```nginx
server {
    # 侦听 192.168.8.x 的 80 端口
    listen       80;
    server_name    www.example.org;

    # 反向代理时获取客户端真实 IP、域名、协议、端口
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # 对 php 后缀的进行请求（正则表达式之前应该是 ~）
    location ~ .*\.php$ {
        # 定义服务器的默认网站根目录位置
        root     /root;
        # 定义首页索引文件的名称
        index index.php index.html index.htm;

        # 请求转发到指定的代理服务器
        proxy_pass    http://localhost:81;
    }
    
    location /api1/ {
        # proxy_pass 中不带 URI 时，nginx 将会保留 location 中路径部分
        # http://localhost/api1/xxx -> http://localhost:8080/api1/xxx
        proxy_pass    http://localhost:8080;
    }
    
    location /api2/ {
        # proxy_pass 中带 URI 时，nginx 将使用例如 alias 的替换方式对 URL 进行替换
        # http://localhost/api2/xxx -> http://localhost:8080/xxx
        proxy_pass    http://localhost:8080/;
    }
}
```



## Nginx 的负载均衡

- 优点：分散后端服务器的压力；自动去掉不可用的后端服务器；缓存后端服务器响应内容

- 负载均衡的分配策略：

    - 轮询（默认）
    - least_conn：最少连接，下一个请求被分配给具有最少数量活动连接的服务器
    - weight
    - ip_hash
    - fair（第三方，按后端服务器的响应时间来分配请求，响应时间短的优先分配）、url_hash（第三方）

- [负载均衡**配置**(opens new window)](https://nginx.org/en/docs/http/ngx_http_upstream_module.html)

  ```nginx
  http {
      # 在 http 节点中定义负载均衡设备的 ip 及设备状态 
      upstream backend {
          # ip_hash;
          # least_conn; # 加权最少连接
          # down 表示将当前的 server 标记为永久不可用
          server 127.0.0.1:9090 down;
          # weight 默认为 1，weight 越大，负载的权重就越大，被分配到的几率就越大
          server 127.0.0.1:8080 weight=2;
          server 127.0.0.1:6060 max_fails=1 fail_timeout=10s;
          # 其它所有的非 backup 机器 down 或者忙的时候，请求 backup 机器
          server 127.0.0.1:7070 backup;
          [ip_hash | fair | url_hash]
      }
  
      server {
          listen 80;
  
          location / {
              # 在需要使用负载的 server 节点下添加
              proxy_pass http://backend;
          }
      } 
  }
  ```



- 健康检查

    - Nginx 是基于连接探测的，如果在单位周期为 fail_timeout 设置的时间内与服务器通信的失败次数达到 max_fails 次，那么就将把该服务器标记为不可用，并等待下一个周期（同样时长为 fail_timeout）再一次去请求，判断是否连接是否成功，如果探测成功，则将服务器标记为活动
    - 默认情况下，`max_fails=1 fail_timeout=10s`，当 max_fails 设置为 0 时，该服务器的健康检查将被禁用（即认为该服务器是一直可用的）

## Nginx 的 WebSocket 代理

- 使用 HTTP/1.1 中的**协议切换**机制，将客户端与服务器之间的连接从 HTTP/1.1 转换为 WebSocket
- 如果代理服务器返回一个 101 响应码（交换协议），则客户机和代理服务器之间将建立隧道，客户端通过请求中的 `Upgrade` 头来请求协议交换
- 默认情况下，如果代理务器在 60 秒内没有传输任何数据，连接将被关闭（这个超时可以通过 proxy_read_timeout指令来增加， 或者代理服务器可以配置为定期发送 WebSocket ping 帧以重置超时并检查连接是否仍然活跃）

```nginx
location /chat/ {
    proxy_pass http://backend;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```
