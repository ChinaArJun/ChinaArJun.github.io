(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{665:function(t,e,a){"use strict";a.r(e);var s=a(44),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dockerfile-最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-最佳实践"}},[t._v("#")]),t._v(" Dockerfile 最佳实践")]),t._v(" "),a("p",[t._v("Dockerfile 最佳实践已经出现在官方文档中，地址在 "),a("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Best practices for writing Dockerfiles"),a("OutboundLink")],1),t._v("。如果再写一份最佳实践，倒有点关公门前耍大刀之意。因此本篇文章是对官方文档的翻译，理解，扩展与示例补充")]),t._v(" "),a("ul",[a("li",[t._v("原文地址: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/dockerfile-practice.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("dockerfile 最佳实践"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("系列文章: "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人服务器运维指南"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("如果本篇文章能够对你有所帮助，可以帮我在 "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note",target:"_blank",rel:"noopener noreferrer"}},[t._v("ChinaArJun/op-note"),a("OutboundLink")],1),t._v(" 上点个 star")])]),t._v(" "),a("h2",{attrs:{id:"容器应该是短暂的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器应该是短暂的"}},[t._v("#")]),t._v(" 容器应该是短暂的")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("Dockerfile")]),t._v(" 构建的镜像所启动的容器应该尽可能短暂 (ephemeral)。短暂意味着可以很快地启动并且终止")]),t._v(" "),a("h2",{attrs:{id:"使用-dockerignore-排除构建无关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-dockerignore-排除构建无关文件"}},[t._v("#")]),t._v(" 使用 .dockerignore 排除构建无关文件")]),t._v(" "),a("p",[a("code",[t._v(".dockerignore")]),t._v(" 语法与 "),a("code",[t._v(".gitignore")]),t._v(" 语法一致。使用它排除构建无关的文件及目录，如 "),a("code",[t._v("node_modules")])]),t._v(" "),a("h2",{attrs:{id:"使用多阶段构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用多阶段构建"}},[t._v("#")]),t._v(" 使用多阶段构建")]),t._v(" "),a("p",[t._v("多阶段构建可以有效减小镜像体积，特别是对于需编译语言而言，一个应用的构建过程往往如下")]),t._v(" "),a("ol",[a("li",[t._v("安装编译工具")]),t._v(" "),a("li",[t._v("安装第三方库依赖")]),t._v(" "),a("li",[t._v("编译构建应用")])]),t._v(" "),a("p",[t._v("而在前两步会有大量的镜像体积冗余，使用多阶段构建可以避免这一问题")]),t._v(" "),a("p",[t._v("这是构建 "),a("code",[t._v("Go")]),t._v(" 应用的一个示例")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" golang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine AS build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install tools required for project")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run `docker build --no-cache .` to update dependencies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apk add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache git\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" go get github.com/golang/dep/cmd/dep\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List project dependencies with Gopkg.toml and Gopkg.lock")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# These layers are only re-built when Gopkg files are updated")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" Gopkg.lock Gopkg.toml /go/src/project/\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /go/src/project/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install library dependencies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" dep ensure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("only\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copy the entire project and build it")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This layer is rebuilt when a file changes in the project directory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . /go/src/project/\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" go build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("o /bin/project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This results in a single layer image")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" scratch\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=build /bin/project /bin/project\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/project"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--help"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("这是构建前端应用的一个示例，可以参考 "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/deploy-fe-with-docker.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用 docker 高效部署前端应用"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine as builder\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" PROJECT_ENV production\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http-server 不变动也可以利用缓存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" package.json /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("production\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择更小体积的基础镜像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=builder /code/public /usr/share/nginx/html\n")])])]),a("h2",{attrs:{id:"避免安装不必要的包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免安装不必要的包"}},[t._v("#")]),t._v(" 避免安装不必要的包")]),t._v(" "),a("p",[t._v("减小体积，减少构建时间。如前端应用使用 "),a("code",[t._v("npm install --production")]),t._v(" 只装生产环境所依赖的包。")]),t._v(" "),a("h2",{attrs:{id:"一个容器只做一件事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个容器只做一件事"}},[t._v("#")]),t._v(" 一个容器只做一件事")]),t._v(" "),a("p",[t._v("如一个web应用将会包含三个部分，web 服务，数据库与缓存。把他们解耦到多个容器中，方便横向扩展。如果你需要网络通信，则可以将他们至于一个网络下。")]),t._v(" "),a("p",[t._v("如在我的个人服务器中，我使用 "),a("code",[t._v("traefik")]),t._v(" 做负载均衡与服务发现，所有应用及数据库都在 "),a("code",[t._v("traefik_default")]),t._v(" 网络下，详情参考 "),a("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/traefik.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 traefik 做负载均衡与服务发现"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该镜像会暴露出自身的 `header` 信息")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("whoami")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" containous/whoami\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置Host 为 whoami.docker.localhost 进行域名访问")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.http.routers.whoami.rule=Host(`whoami.docker.localhost`)"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用已存在的 traefik 的 network")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik_default\n")])])]),a("h2",{attrs:{id:"减少镜像层数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少镜像层数"}},[t._v("#")]),t._v(" 减少镜像层数")]),t._v(" "),a("ul",[a("li",[t._v("只有 "),a("code",[t._v("RUN")]),t._v(", "),a("code",[t._v("COPY")]),t._v(", "),a("code",[t._v("ADD")]),t._v(" 会创建层数, 其它指令不会增加镜像的体积")]),t._v(" "),a("li",[t._v("尽可能使用多阶段构建")])]),t._v(" "),a("p",[t._v("使用以下方法安装依赖")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" yum install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y node python go\n")])])]),a("p",[t._v("错误的方法安装依赖，这将增加镜像层数")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" yum install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y node\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" yum install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y python\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" yum install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y go\n")])])]),a("h2",{attrs:{id:"将多行参数排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将多行参数排序"}},[t._v("#")]),t._v(" 将多行参数排序")]),t._v(" "),a("p",[t._v("便于可读性以及不小心地重复装包")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update && apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y \\\n  bzr \\\n  cvs \\\n  git \\\n  mercurial \\\n  subversion\n")])])]),a("h2",{attrs:{id:"充分利用构建缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#充分利用构建缓存"}},[t._v("#")]),t._v(" 充分利用构建缓存")]),t._v(" "),a("p",[t._v("在镜像的构建过程中 "),a("code",[t._v("docker")]),t._v(" 会遍历 "),a("code",[t._v("Dockerfile")]),t._v(" 文件中的所有指令，顺序执行。对于每一条指令，"),a("code",[t._v("docker")]),t._v(" 都会在缓存中查找是否已存在可重用的镜像，否则会创建一个新的镜像")]),t._v(" "),a("p",[t._v("我们可以使用 "),a("code",[t._v("docker build --no-cache")]),t._v(" 跳过缓存")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ADD")]),t._v(" 和 "),a("code",[t._v("COPY")]),t._v(" 将会计算文件的 "),a("code",[t._v("checksum")]),t._v(" 是否改变来决定是否利用缓存")]),t._v(" "),a("li",[a("code",[t._v("RUN")]),t._v(" 仅仅查看命令字符串是否命中缓存，如 "),a("code",[t._v("RUN apt-get -y update")]),t._v(" 可能会有问题")])]),t._v(" "),a("p",[t._v("如一个 "),a("code",[t._v("node")]),t._v(" 应用，可以先拷贝 "),a("code",[t._v("package.json")]),t._v(" 进行依赖安装，然后再添加整个目录，可以做到充分利用缓存的目的。")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine as builder\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" package.json /code\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此步将可以充分利用 node_modules 的缓存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("production\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build \n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);