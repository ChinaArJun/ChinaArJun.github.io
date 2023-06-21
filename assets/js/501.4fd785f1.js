(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{1095:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"给-api-增加启动脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#给-api-增加启动脚本"}},[t._v("#")]),t._v(" 给 API 增加启动脚本")]),t._v(" "),s("h2",{attrs:{id:"本节核心内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节核心内容"}},[t._v("#")]),t._v(" 本节核心内容")]),t._v(" "),s("ul",[s("li",[t._v("如何管理 apiserver 启动命令，包括启动、重启、停止和查看运行状态")])]),t._v(" "),s("blockquote",[s("p",[t._v("本小节源码下载路径："),s("a",{attrs:{href:"https://github.com/lexkong/apiserver_demos/tree/master/demo13",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo13"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("可先下载源码到本地，结合源码理解后续内容，边学边练。")]),t._v(" "),s("p",[t._v("本小节的代码是基于 "),s("a",{attrs:{href:"https://github.com/lexkong/apiserver_demos/tree/master/demo12",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo12"),s("OutboundLink")],1),t._v(" 来开发的。")])]),t._v(" "),s("h2",{attrs:{id:"为什么要添加启动脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要添加启动脚本"}},[t._v("#")]),t._v(" 为什么要添加启动脚本")]),t._v(" "),s("p",[t._v("通过添加服务器启动脚本可以很方便地启动、重启、停止和查看服务的状态。一些监控系统、发布系统需要有方法告诉它怎么启停和查看服务状态，这时候如果有个服务控制脚本就可以很方便地添加，要不然输入一堆启动参数不仅烦琐还容易出错。")]),t._v(" "),s("h2",{attrs:{id:"添加启动脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加启动脚本"}},[t._v("#")]),t._v(" 添加启动脚本")]),t._v(" "),s("p",[t._v("apiserver 是通过 "),s("code",[t._v("admin.sh")]),t._v(" 脚本来实现服务启动、重启、停止和查看服务状态操作的（详见 "),s("a",{attrs:{href:"https://github.com/lexkong/apiserver_demos/blob/master/demo13/admin.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo13/admin.sh"),s("OutboundLink")],1),t._v("），源码为：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#!/bin/bash\n\nSERVER="apiserver"\nBASE_DIR=$PWD\nINTERVAL=2\n\n# 命令行参数，需要手动指定\nARGS=""\n\nfunction start()\n{\n\tif [ "`pgrep $SERVER -u $UID`" != "" ];then\n\t\techo "$SERVER already running"\n\t\texit 1\n\tfi\n\n\tnohup $BASE_DIR/$SERVER $ARGS  server &>/dev/null &\n\n\techo "sleeping..." &&  sleep $INTERVAL\n\n\t# check status\n\tif [ "`pgrep $SERVER -u $UID`" == "" ];then\n\t\techo "$SERVER start failed"\n\t\texit 1\n\tfi\n}\n\nfunction status() \n{\n\tif [ "`pgrep $SERVER -u $UID`" != "" ];then\n\t\techo $SERVER is running\n\telse\n\t\techo $SERVER is not running\n\tfi\n}\n\nfunction stop() \n{\n\tif [ "`pgrep $SERVER -u $UID`" != "" ];then\n\t\tkill -9 `pgrep $SERVER -u $UID`\n\tfi\n\n\techo "sleeping..." &&  sleep $INTERVAL\n\n\tif [ "`pgrep $SERVER -u $UID`" != "" ];then\n\t\techo "$SERVER stop failed"\n\t\texit 1\n\tfi\n}\n\ncase "$1" in\n\t\'start\')\n\tstart\n\t;;  \n\t\'stop\')\n\tstop\n\t;;  \n\t\'status\')\n\tstatus\n\t;;  \n\t\'restart\')\n\tstop && start\n\t;;  \n\t*)  \n\techo "usage: $0 {start|stop|restart|status}"\n\texit 1\n\t;;  \nesac\n')])])]),s("blockquote",[s("p",[t._v("看 shell 源码发现在 start 和 stop 时会 sleep 几秒，这是因为 API 服务器的启动需要时间去做准备工作，停止也需要时间去做清理工作。")])]),t._v(" "),s("h2",{attrs:{id:"编译并测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译并测试"}},[t._v("#")]),t._v(" 编译并测试")]),t._v(" "),s("ol",[s("li",[t._v("下载 apiserver_demos 源码包（如前面已经下载过，请忽略此步骤）")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ git clone https://github.com/lexkong/apiserver_demos\n")])])]),s("ol",[s("li",[t._v("将 "),s("code",[t._v("apiserver_demos/demo13")]),t._v(" 复制为 "),s("code",[t._v("$GOPATH/src/apiserver")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cp -a apiserver_demos/demo13/ $GOPATH/src/apiserver\n")])])]),s("ol",[s("li",[t._v("在 apiserver 目录下编译源码")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cd $GOPATH/src/apiserver\n$ make\n")])])]),s("p",[s("strong",[t._v("查看 "),s("code",[t._v("admin.sh")]),t._v(" 用法")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./admin.sh -h\nusage: ./admin.sh {start|stop|restart|status}\n")])])]),s("p",[s("strong",[t._v("查看 "),s("code",[t._v("apiserver")]),t._v(" 运行状态")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./admin.sh status\napiserver is not running\n")])])]),s("p",[s("strong",[t._v("启动 "),s("code",[t._v("apiserver")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./admin.sh start\nsleeping...\n")])])]),s("p",[s("strong",[t._v("查看 "),s("code",[t._v("apiserver")]),t._v(" 状态")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./admin.sh status\napiserver is running\n")])])]),s("p",[s("strong",[t._v("重启 "),s("code",[t._v("apiserver")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./admin.sh restart\nsleeping...\nsleeping...\n")])])]),s("p",[s("strong",[t._v("停止 "),s("code",[t._v("apiserver")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./admin.sh stop\nsleeping...\n")])])]),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("本小结展示了如何用 "),s("code",[t._v("admin.sh")]),t._v(" 去管理 API 服务器：启动、重启、停止和查看状态。该 "),s("code",[t._v("admin.sh")]),t._v(" 命令在进行 start、stop、restart 和 status 操作时做了很多检查工作，以确保运行结果是正确的。")])])}),[],!1,null,null,null);e.default=n.exports}}]);