(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{1097:function(e,n,t){"use strict";t.r(n);var s=t(44),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"基于-nginx-的-api-部署方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于-nginx-的-api-部署方案"}},[e._v("#")]),e._v(" 基于 Nginx 的 API 部署方案")]),e._v(" "),t("h2",{attrs:{id:"本节核心内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节核心内容"}},[e._v("#")]),e._v(" 本节核心内容")]),e._v(" "),t("ul",[t("li",[e._v("介绍 Nginx")]),e._v(" "),t("li",[e._v("介绍如何安装 Nginx")]),e._v(" "),t("li",[e._v("介绍如何配置 Nginx")])]),e._v(" "),t("blockquote",[t("p",[e._v("本小节源码下载路径："),t("a",{attrs:{href:"https://github.com/lexkong/apiserver_demos/tree/master/demo14",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo14"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("可先下载源码到本地，结合源码理解后续内容，边学边练。")]),e._v(" "),t("p",[e._v("本小节的代码是基于 "),t("a",{attrs:{href:"https://github.com/lexkong/apiserver_demos/tree/master/demo13",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo13"),t("OutboundLink")],1),e._v(" 来开发的。")])]),e._v(" "),t("h2",{attrs:{id:"nginx-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-介绍"}},[e._v("#")]),e._v(" Nginx 介绍")]),e._v(" "),t("p",[e._v("Nginx 是一个自由、开源、高性能及轻量级的 HTTP 服务器和反向代理服务器，它有很多功能，主要功能为：")]),e._v(" "),t("ol",[t("li",[e._v("正向代理")]),e._v(" "),t("li",[e._v("反向代理")]),e._v(" "),t("li",[e._v("负载均衡")]),e._v(" "),t("li",[e._v("HTTP 服务器（包含动静分离）")])]),e._v(" "),t("p",[e._v("本小册使用了 Nginx 反向代理和负载均衡的功能。")]),e._v(" "),t("blockquote",[t("p",[e._v("Nginx 的更详细介绍可以参考 "),t("a",{attrs:{href:"https://www.cnblogs.com/jingmoxukong/p/5945200.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx简易教程"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"nginx-反向代理功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理功能"}},[e._v("#")]),e._v(" Nginx 反向代理功能")]),e._v(" "),t("p",[e._v("Nginx 最常用的功能之一是作为一个反向代理服务器。反向代理（Reverse Proxy）是指以代理服务器来接收 Internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器（摘自百度百科）。")]),e._v(" "),t("p",[e._v("为什么需要反向代理呢？在实际的生产环境中，服务部署的网络（内网）跟外部网络（外网）通常是不通的，需要通过一台既能够访问内网又能够访问外网的服务器来做中转，这种服务器就是反向代理服务器。Nginx 作为反向代理服务器，简单的配置如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    server {                     \n        listen      80;           \n        server_name  apiserver.com;    \n        client_max_body_size 1024M;\n                                 \n        location / {             \n            proxy_set_header Host $http_host;\n            proxy_set_header X-Forwarded-Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass  http://127.0.0.1:8080/;\n            client_max_body_size 100m;\n        }                        \n    }                            \n")])])]),t("p",[e._v("Nginx 在做反向代理服务器时，能够根据不同的配置规则转发到后端不同的服务器上。")]),e._v(" "),t("h2",{attrs:{id:"nginx-负载均衡功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-负载均衡功能"}},[e._v("#")]),e._v(" Nginx 负载均衡功能")]),e._v(" "),t("p",[e._v("Nginx 另一个常用的功能是负载均衡，所谓的负载均衡就是指当 Nginx 收到一个 HTTP 请求后，会根据负载策略将请求转发到不同的后端服务器上。比如，apiserver 部署在两台服务器 A 和 B 上，当请求到达 Nginx 后，Nginx 会根据 A 和 B 服务器上的负载情况，将请求转发到负载较小的那台服务器上。这里要求 apiserver 是无状态的服务。")]),e._v(" "),t("h2",{attrs:{id:"安装和启动-nginx（需要切换到-root-用户）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装和启动-nginx（需要切换到-root-用户）"}},[e._v("#")]),e._v(" 安装和启动 Nginx（需要切换到 root 用户）")]),e._v(" "),t("ol",[t("li",[e._v("安装 Nginx（CentOS 7.x 安装流程）")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ yum -y install nginx\n")])])]),t("ol",[t("li",[e._v("确认 Nginx 安装成功")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ nginx -v\n")])])]),t("ol",[t("li",[e._v("启动 Nginx")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ systemctl start nginx\n")])])]),t("ol",[t("li",[e._v("设置开机启动")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ systemctl enable nginx\n")])])]),t("ol",[t("li",[e._v("查看 Nginx 启动状态")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ systemctl status nginx\n")])])]),t("p",[t("strong",[e._v("Nginx 常用命令")])]),e._v(" "),t("p",[e._v("Nginx 常用命令如下（执行 "),t("code",[e._v("which nginx")]),e._v(" 可以找到 Nginx 命令所在的路径）：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("nginx -s stop       快速关闭 Nginx，可能不保存相关信息，并迅速终止 Web 服务\nnginx -s quit       平稳关闭 Nginx，保存相关信息，有安排的结束 Web 服务\nnginx -s reload     因改变了 Nginx 相关配置，需要重新加载配置而重载\nnginx -s reopen     重新打开日志文件\nnginx -c filename   为 Nginx 指定一个配置文件，来代替默认的\nnginx -t            不运行，而仅仅测试配置文件。Nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件\nnginx -v            显示 Nginx 的版本\nnginx -V            显示 Nginx 的版本、编译器版本和配置参数\n")])])]),t("blockquote",[t("p",[e._v("Nginx 默认监听 80 端口，启动 Nginx 前要确保 80 端口没有被占用。当然你也可以通过修改 Nginx 配置文件 "),t("code",[e._v("/etc/nginx/nginx.conf")]),e._v(" 改 Nginx 监听端口。")])]),e._v(" "),t("h2",{attrs:{id:"配置-nginx-作为反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-作为反向代理"}},[e._v("#")]),e._v(" 配置 Nginx 作为反向代理")]),e._v(" "),t("p",[e._v("假定要访问的 API 服务器域名为 "),t("code",[e._v("apiserver.com")]),e._v("，在 "),t("code",[e._v("/etc/nginx/nginx.conf")]),e._v(" 配置 API 服务器的 "),t("code",[e._v("server")]),e._v(" 入口：")]),e._v(" "),t("p",[t("img",{attrs:{src:"/Users/arjun/AJ的个人资料相关/myblog/go-project/restfulGo/assets/WX20200116-114800.png",alt:"img"}})]),e._v(" "),t("p",[e._v("完成 nginx.conf 内容如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('user  nginx;\nworker_processes  1;\n\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    include /etc/nginx/conf.d/*.conf;\n\n    server {  \n        listen      80;                                                        \n        server_name  apiserver.com;                                              \n        client_max_body_size 1024M;\n\n        location / {\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Forwarded-Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass  http://127.0.0.1:8080/;\n            client_max_body_size 5m;\n        }\n    } \n}\n')])])]),t("p",[t("strong",[e._v("配置说明")])]),e._v(" "),t("ul",[t("li",[e._v("由于 Nginx 默认允许客户端请求的最大单文件字节数为 1MB，实际生产环境中可能太小，所以这里将此限制改为 5MB（"),t("code",[e._v("client_max_body_size 5m")]),e._v("）")]),e._v(" "),t("li",[t("code",[e._v("server_name")]),e._v("：说明使用哪个域名来访问")]),e._v(" "),t("li",[t("code",[e._v("proxy_pass")]),e._v("：反向代理的路径（这里是本机的 API 服务，所以IP为 127.0.0.1。端口要和 API 服务端口一致：8080）")])]),e._v(" "),t("blockquote",[t("p",[e._v("如果需要上传图片之类的，可能需要设置成更大的值，比如 50m。")]),e._v(" "),t("p",[e._v("因为 Nginx 配置选项比较多，跟实际需求和环境有关，所以这里的配置是基础的、未经优化的配置，在实际生产环境中，需要读者再做调节。")])]),e._v(" "),t("p",[t("strong",[e._v("测试")])]),e._v(" "),t("ol",[t("li",[e._v("配置完 Nginx 后重启 Nginx")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ systemctl restart nginx\n")])])]),t("ol",[t("li",[e._v("在编译完 apiserver 后，启动 API 服务器")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ./apiserver\n")])])]),t("ol",[t("li",[e._v("在 "),t("code",[e._v("/etc/hosts")]),e._v(" 中添加一行："),t("code",[e._v("127.0.0.1 apiserver.com")])]),e._v(" "),t("li",[e._v("发送 HTTP 请求")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ curl -XGET -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjgwMTY5MjIsImlkIjowLCJuYmYiOjE1MjgwMTY5MjIsInVzZXJuYW1lIjoiYWRtaW4ifQ.LjxrK9DuAwAzUD8-9v43NzWBN7HXsSLfebw92DKd1JQ" http://apiserver.com/v1/user \n\n{\n  "code": 0,\n  "message": "OK",\n  "data": {\n    "totalCount": 1,\n    "userList": [\n      {\n        "id": 0,\n        "username": "admin",\n        "sayHello": "Hello Jypl3DSig",\n        "password": "$2a$10$veGcArz47VGj7l9xN7g2iuT9TF21jLI1YGXarGzvARNdnt4inC9PG",\n        "createdAt": "2018-05-28 00:25:33",\n        "updatedAt": "2018-05-28 00:25:33"\n      }\n    ]\n  }\n}\n')])])]),t("p",[e._v("可以看到成功通过代理访问后端的 API 服务。")]),e._v(" "),t("p",[t("strong",[e._v("请求流程说明")])]),e._v(" "),t("p",[e._v("在用 "),t("code",[e._v("curl")]),e._v(" 请求 "),t("code",[e._v("http://apiserver.com/v1/user")]),e._v(" 后，后端的请求流程实际上是这样的：")]),e._v(" "),t("ol",[t("li",[e._v("因为在 "),t("code",[e._v("/etc/hosts")]),e._v(" 中配置了 "),t("code",[e._v("127.0.0.1 apiserver.com")]),e._v("，所以请求 "),t("code",[e._v("http://apiserver.com/v1/use")]),e._v(" 实际上是请求本机的 Nginx 端口（"),t("code",[e._v("127.0.0.1:80")]),e._v("）")]),e._v(" "),t("li",[e._v("Nginx 在收到请求后，解析到请求域名为 "),t("code",[e._v("apiserver.com")]),e._v("，根据请求域名去匹配 Nginx 的 server 配置，匹配到 "),t("code",[e._v("server_name apiserver.com")]),e._v(" 配置")]),e._v(" "),t("li",[e._v("匹配到 server 后，把请求转发到该 server 的 "),t("code",[e._v("proxy_pass")]),e._v(" 路径")]),e._v(" "),t("li",[e._v("等待 API 服务器返回结果，并返回客户端")])]),e._v(" "),t("h2",{attrs:{id:"配置-nginx-作为负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-作为负载均衡"}},[e._v("#")]),e._v(" 配置 Nginx 作为负载均衡")]),e._v(" "),t("p",[e._v("负载均衡的演示需要多个后端服务，为此我们在同一个服务器上启动多个 apiserver，配置不同的端口（8080、8082），并采用 Nginx 默认的轮询转发策略（轮询：每个请求按时间顺序逐一分配到不同的后端服务器）。")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("/etc/nginx/nginx.conf")]),e._v(" 中添加 "),t("code",[e._v("upstream")]),e._v(" 配置：")]),e._v(" "),t("p",[t("img",{attrs:{src:"/Users/arjun/AJ的个人资料相关/myblog/go-project/restfulGo/assets/WX20200116-114801.png",alt:"img"}})]),e._v(" "),t("p",[t("strong",[e._v("配置说明")])]),e._v(" "),t("ul",[t("li",[e._v("因为有多个后端，所以需要将之前固定的后端 "),t("code",[e._v("proxy_pass http://127.0.0.1:8080/")]),e._v(" 换成具有多个后端的 "),t("code",[e._v("apiserver.com")]),e._v("（通过 "),t("code",[e._v("upstream")]),e._v("）")]),e._v(" "),t("li",[t("code",[e._v("upstream")]),e._v(" 配置中配置多个后端（ip:port）")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    upstream apiserver.com {\n        server 127.0.0.1:8080;\n        server 127.0.0.1:8082;\n    }   \n")])])]),t("p",[t("strong",[e._v("测试")])]),e._v(" "),t("ol",[t("li",[e._v("配置完 Nginx 后重启 Nginx")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ systemctl restart nginx\n")])])]),t("ol",[t("li",[e._v("这里需要构建并发请求，编写测试脚本 "),t("code",[e._v("test.sh")]),e._v("，内容为：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('#!/bin/bash\n\n\nfor n in $(seq 1 1 10)\ndo\n    nohup curl -XGET -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjgwMTY5MjIsImlkIjowLCJuYmYiOjE1MjgwMTY5MjIsInVzZXJuYW1lIjoiYWRtaW4ifQ.LjxrK9DuAwAzUD8-9v43NzWBN7HXsSLfebw92DKd1JQ" http://apiserver.com/v1/user &>/dev/null\ndone\n')])])]),t("ol",[t("li",[e._v("为了展示哪个 API 被调用，需要在查询用户列表的入口函数（"),t("code",[e._v("handler/user/list.go")]),e._v("文件中的 "),t("code",[e._v("List()")]),e._v(" 函数）中添加日志打印信息：")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/Users/arjun/AJ的个人资料相关/myblog/go-project/restfulGo/assets/WX20200116-114825.png",alt:"img"}})]),e._v(" "),t("ol",[t("li",[e._v("在相同服务器上启动两个不同的 HTTP 端口：8080 和 8082")]),e._v(" "),t("li",[e._v("执行 test.sh 脚本")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ./test.sh\n")])])]),t("p",[e._v("观察 API 日志，可以看到请求被均衡地转发到后端的两个服务：")]),e._v(" "),t("p",[e._v("apiserver1（8080 端口）：")]),e._v(" "),t("p",[t("img",{attrs:{src:"/Users/arjun/AJ的个人资料相关/myblog/go-project/restfulGo/assets/WX20200116-114834.png",alt:"img"}})]),e._v(" "),t("p",[e._v("apiserver2（8082 端口）:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/Users/arjun/AJ的个人资料相关/myblog/go-project/restfulGo/assets/WX20200116-114844.png",alt:"img"}})]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("在生产环境中，API 服务器所在的网络通常不能直接通过外网访问，需要通过可从外网访问的 Nginx 服务器，将请求转发到内网的 API 服务器。并且随着业务规模越来越大，请求量也会越来越大，这时候需要将 API 横向扩容，也需要 Nginx。所以在实际的 API 服务部署中 Nginx 经常能派上用场。通过本小节的学习，读者可以了解到如何在实际生产环境中部署 API 服务。")])])}),[],!1,null,null,null);n.default=a.exports}}]);