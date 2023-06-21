(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{1148:function(e,n,t){"use strict";t.r(n);var r=t(44),o=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("由于 Go 语言是协作式的调度，不会像线程那样，在时间片用完后，由 CPU 中断任务强行将其调度走。对于 Go 语言中运行时间过长的 goroutine，Go scheduler 有一个后台线程在持续监控，一旦发现 goroutine 运行超过 10 ms，会设置 goroutine 的“抢占标志位”，之后调度器会处理。但是设置标志位的时机只有在函数“序言”部分，对于没有函数调用的就没有办法了。")]),e._v(" "),t("blockquote",[t("p",[e._v("Golang implements a co-operative partially preemptive scheduler.")])]),e._v(" "),t("p",[e._v("所以在某些极端情况下，会掉进一些陷阱。下面这个例子来自参考资料【scheduler 的陷阱】。")]),e._v(" "),t("div",{staticClass:"language-golang extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('func main() {\n    var x int\n    threads := runtime.GOMAXPROCS(0)\n    for i := 0; i < threads; i++ {\n        go func() {\n            for { x++ }\n        }()\n    }\n    time.Sleep(time.Second)\n    fmt.Println("x =", x)\n}\n')])])]),t("p",[e._v("运行结果是：在死循环里出不来，不会输出最后的那条打印语句。")]),e._v(" "),t("p",[e._v("为什么？上面的例子会启动和机器的 CPU 核心数相等的 goroutine，每个 goroutine 都会执行一个无限循环。")]),e._v(" "),t("p",[e._v("创建完这些 goroutines 后，main 函数里执行一条 "),t("code",[e._v("time.Sleep(time.Second)")]),e._v(" 语句。Go scheduler 看到这条语句后，简直高兴坏了，要来活了。这是调度的好时机啊，于是主 goroutine 被调度走。先前创建的 "),t("code",[e._v("threads")]),e._v(" 个 goroutines，刚好“一个萝卜一个坑”，把 M 和 P 都占满了。")]),e._v(" "),t("p",[e._v("在这些 goroutine 内部，又没有调用一些诸如 "),t("code",[e._v("channel")]),e._v("，"),t("code",[e._v("time.sleep")]),e._v(" 这些会引发调度器工作的事情。麻烦了，只能任由这些无限循环执行下去了。")]),e._v(" "),t("p",[e._v("解决的办法也有，把 threads 减小 1：")]),e._v(" "),t("div",{staticClass:"language-golang extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('func main() {\n    var x int\n    threads := runtime.GOMAXPROCS(0) - 1\n    for i := 0; i < threads; i++ {\n        go func() {\n            for { x++ }\n        }()\n    }\n    time.Sleep(time.Second)\n    fmt.Println("x =", x)\n}\n')])])]),t("p",[e._v("运行结果：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])]),t("p",[e._v("不难理解了吧，主 goroutine 休眠一秒后，被 go schduler 重新唤醒，调度到 M 上继续执行，打印一行语句后，退出。主 goroutine 退出后，其他所有的 goroutine 都必须跟着退出。所谓“覆巢之下 焉有完卵”，一损俱损。")]),e._v(" "),t("p",[e._v("至于为什么最后打印出的 x 为 0，之前的文章"),t("a",{attrs:{href:"https://qcrao.com/2019/06/17/cch-says-memory-reorder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("《曹大谈内存重排》"),t("OutboundLink")],1),e._v("里有讲到过，这里不再深究了。")]),e._v(" "),t("p",[e._v("还有一种解决办法是在 for 循环里加一句：")]),e._v(" "),t("div",{staticClass:"language-golang extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go func() {\n    time.Sleep(time.Second)\n    for { x++ }\n}()\n")])])]),t("p",[e._v("同样可以让 main goroutine 有机会调度执行。")])])}),[],!1,null,null,null);n.default=o.exports}}]);