(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1048:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"day12课上笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#day12课上笔记"}},[t._v("#")]),t._v(" day12课上笔记")]),t._v(" "),n("h1",{attrs:{id:"内容回顾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容回顾"}},[t._v("#")]),t._v(" 内容回顾")]),t._v(" "),n("h2",{attrs:{id:"go-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go-module"}},[t._v("#")]),t._v(" go module")]),t._v(" "),n("p",[t._v("依赖管理工具。")]),t._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" context")]),t._v(" "),n("p",[t._v("goroutine管理。")]),t._v(" "),n("p",[n("code",[t._v("context.Context")])]),t._v(" "),n("p",[t._v("两个根节点："),n("code",[t._v("context.Background()")]),t._v("、"),n("code",[t._v("context.TODO()")])]),t._v(" "),n("p",[t._v("四个方法："),n("code",[t._v("context.WithCancel()")]),t._v("、"),n("code",[t._v("context.WithTimeout()")]),t._v("、"),n("code",[t._v("context.WithDeadline()")]),t._v("、"),n("code",[t._v("context.WithValue()")])]),t._v(" "),n("h2",{attrs:{id:"日志收集项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志收集项目"}},[t._v("#")]),t._v(" 日志收集项目")]),t._v(" "),n("h3",{attrs:{id:"为什么要自己写不用elk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要自己写不用elk"}},[t._v("#")]),t._v(" 为什么要自己写不用ELK?")]),t._v(" "),n("p",[t._v("ELK: 部署的时候麻烦每一个filebeat都需要配置一个配置文件")]),t._v(" "),n("p",[t._v("使用etcd来管理被收集的日志项。")]),t._v(" "),n("h3",{attrs:{id:"项目的架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目的架构"}},[t._v("#")]),t._v(" 项目的架构")]),t._v(" "),n("p",[n("img",{attrs:{src:a(320),alt:"1569030448232"}})]),t._v(" "),n("h3",{attrs:{id:"上节课项目进度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上节课项目进度"}},[t._v("#")]),t._v(" 上节课项目进度")]),t._v(" "),n("ol",[n("li",[t._v("kafka：消息队列")]),t._v(" "),n("li",[t._v("tailf：从文件里读日志")]),t._v(" "),n("li",[t._v("go-ini：解析配置文件")])]),t._v(" "),n("h1",{attrs:{id:"今日内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#今日内容"}},[t._v("#")]),t._v(" 今日内容")]),t._v(" "),n("h2",{attrs:{id:"etcd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#etcd"}},[t._v("#")]),t._v(" etcd")]),t._v(" "),n("h3",{attrs:{id:"etcd介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#etcd介绍"}},[t._v("#")]),t._v(" etcd介绍")]),t._v(" "),n("p",[t._v("详见群文件：etcd.pdf")]),t._v(" "),n("h3",{attrs:{id:"安装etcd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装etcd"}},[t._v("#")]),t._v(" 安装etcd")]),t._v(" "),n("p",[t._v("详见：https://docs.qq.com/doc/DTndrQXdXYUxUU09O")]),t._v(" "),n("h3",{attrs:{id:"go操作etcd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go操作etcd"}},[t._v("#")]),t._v(" go操作etcd")]),t._v(" "),n("p",[t._v("命令行操作：使用自带的"),n("code",[t._v("etcdctl")])]),t._v(" "),n("p",[t._v("注意一定要使用V3版本的API")]),t._v(" "),n("p",[t._v("先设置环境变量：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("SET "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" // Windows\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" // Mac"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Linux\n")])])]),n("p",[t._v("PUT：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("etcdctl.exe --endpoints"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:2379 put key value\n")])])]),n("p",[t._v("GET：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("etcdctl.exe --endpoints"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:2379 GET key\n")])])]),n("p",[t._v("DEL:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("etcdctl.exe --endpoints"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:2379 DEL key\n")])])]),n("p",[t._v("go mod设置代理：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("SET "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPROXY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://goproxy.cn // Windows\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPROXY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://goproxy.cn // Mac"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Linux\n")])])]),n("h4",{attrs:{id:"put-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#put-get"}},[t._v("#")]),t._v(" PUT/GET")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"context"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.etcd.io/etcd/clientv3"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// etcd client put/get demo")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use etcd/clientv3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" clientv3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientv3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tEndpoints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:2379"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tDialTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle error!")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect to etcd failed, err:%v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect to etcd success"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" cli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// put")]),t._v("\n\tctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cancel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baodelu"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dsb"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"put to etcd failed, err:%v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get")]),t._v("\n\tctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cancel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tresp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baodelu"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get from etcd failed, err:%v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ev "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" resp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Kvs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s:%s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"watch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),n("p",[t._v("非常重要")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"context"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.etcd.io/etcd/clientv3"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// etcd watch")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" clientv3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientv3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tEndpoints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:2379"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tDialTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle error!")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect to etcd failed, err:%v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"connect to etcd success"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" cli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// watch")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 派一个哨兵 一直监视着 luminghui 这个key的变化（新增、修改、删除）")]),t._v("\n\tch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Watch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"luminghui"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从通道尝试取值(监视的信息)")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" wresp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" ch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" evt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" wresp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Type:%v key:%v value:%v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" evt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Kv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Kv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"使用etcd优化日志收集项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用etcd优化日志收集项目"}},[t._v("#")]),t._v(" 使用etcd优化日志收集项目")]),t._v(" "),n("h1",{attrs:{id:"本周任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本周任务"}},[t._v("#")]),t._v(" 本周任务")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Raft协议")]),t._v(" "),n("ol",[n("li",[t._v("选举")]),t._v(" "),n("li",[t._v("日志复制机制")]),t._v(" "),n("li",[t._v("异常处理（脑裂）")]),t._v(" "),n("li",[t._v("zookeeper的zad协议的区别")])])])])])}),[],!1,null,null,null);s.default=e.exports},320:function(t,s,a){t.exports=a.p+"assets/img/1569030448232.81825831.png"}}]);