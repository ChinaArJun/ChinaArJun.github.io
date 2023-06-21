(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{859:function(a,e,t){"use strict";t.r(e);var r=t(44),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-8-简单围观一下有趣的-go-指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-简单围观一下有趣的-go-指令"}},[a._v("#")]),a._v(" 1.8 简单围观一下有趣的 //go: 指令")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://wx2.sinaimg.cn/large/006fVPCvly1g1m1bplu3mj30xc0m8myg.jpg",alt:"image"}})]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("如果你平时有翻看源码的习惯，你肯定会发现。咦，怎么有的方法上面总是写着 "),t("code",[a._v("//go:")]),a._v("  这类指令呢。他们到底是干嘛用的？")]),a._v(" "),t("p",[a._v("今天我们一同揭开他们的面纱，我将简单给你介绍一下，它们都负责些什么")]),a._v(" "),t("h2",{attrs:{id:"go-linkname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-linkname"}},[a._v("#")]),a._v(" go:linkname")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:linkname localname importpath.name\n")])])]),t("p",[a._v("该指令指示编译器使用 "),t("code",[a._v("importpath.name")]),a._v(" 作为源代码中声明为 "),t("code",[a._v("localname")]),a._v(" 的变量或函数的目标文件符号名称。但是由于这个伪指令，可以破坏类型系统和包模块化。因此只有引用了 unsafe 包才可以使用")]),a._v(" "),t("p",[a._v("简单来讲，就是 "),t("code",[a._v("importpath.name")]),a._v(" 是 "),t("code",[a._v("localname")]),a._v(" 的符号别名，编译器实际上会调用 "),t("code",[a._v("localname")]),a._v(" 。但前提是使用了 "),t("code",[a._v("unsafe")]),a._v(" 包才能使用")]),a._v(" "),t("h3",{attrs:{id:"案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),t("h4",{attrs:{id:"time-time-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-time-go"}},[a._v("#")]),a._v(" time/time.go")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("...\nfunc now() (sec int64, nsec int32, mono int64)\n")])])]),t("h4",{attrs:{id:"runtime-timestub-go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtime-timestub-go"}},[a._v("#")]),a._v(" runtime/timestub.go")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('import _ "unsafe" // for go:linkname\n\n//go:linkname time_now time.now\nfunc time_now() (sec int64, nsec int32, mono int64) {\n\tsec, nsec = walltime()\n\treturn sec, nsec, nanotime() - startNano\n}\n')])])]),t("p",[a._v("在这个案例中可以看到 "),t("code",[a._v("time.now")]),a._v("，它并没有具体的实现。如果你初看可能会懵逼。这时候建议你全局搜索一下源码，你就会发现其实现在 "),t("code",[a._v("runtime.time_now")]),a._v(" 中")]),a._v(" "),t("p",[a._v("配合先前的用法解释，可得知在 runtime 包中，我们声明了 "),t("code",[a._v("time_now")]),a._v(" 方法是 "),t("code",[a._v("time.now")]),a._v(" 的符号别名。并且在文件头引入了 "),t("code",[a._v("unsafe")]),a._v(" 达成前提条件")]),a._v(" "),t("h2",{attrs:{id:"go-noescape"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-noescape"}},[a._v("#")]),a._v(" go:noescape")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:noescape\n")])])]),t("p",[a._v("该指令指定下一个有声明但没有主体（意味着实现有可能不是 Go）的函数，不允许编译器对其做逃逸分析")]),a._v(" "),t("p",[a._v("一般情况下，该指令用于内存分配优化。因为编译器默认会进行逃逸分析，会通过规则判定一个变量是分配到堆上还是栈上。但凡事有意外，一些函数虽然逃逸分析其是存放到堆上。但是对于我们来说，它是特别的。我们就可以使用 "),t("code",[a._v("go:noescape")]),a._v(" 指令强制要求编译器将其分配到函数栈上")]),a._v(" "),t("h3",{attrs:{id:"案例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-2"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// memmove copies n bytes from "from" to "to".\n// in memmove_*.s\n//go:noescape\nfunc memmove(to, from unsafe.Pointer, n uintptr)\n')])])]),t("p",[a._v("我们观察一下这个案例，它满足了该指令的常见特性。如下：")]),a._v(" "),t("ul",[t("li",[a._v("memmove_*.s：只有声明，没有主体。其主体是由底层汇编实现的")]),a._v(" "),t("li",[a._v("memmove：函数功能，在栈上处理性能会更好")])]),a._v(" "),t("h2",{attrs:{id:"go-nosplit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-nosplit"}},[a._v("#")]),a._v(" go:nosplit")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:nosplit\n")])])]),t("p",[a._v("该指令指定文件中声明的下一个函数不得包含堆栈溢出检查。简单来讲，就是这个函数跳过堆栈溢出的检查")]),a._v(" "),t("h3",{attrs:{id:"案例-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-3"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:nosplit\nfunc key32(p *uintptr) *uint32 {\n\treturn (*uint32)(unsafe.Pointer(p))\n}\n")])])]),t("h2",{attrs:{id:"go-nowritebarrierrec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-nowritebarrierrec"}},[a._v("#")]),a._v(" go:nowritebarrierrec")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:nowritebarrierrec\n")])])]),t("p",[a._v("该指令表示编译器遇到写屏障时就会产生一个错误，并且允许递归。也就是这个函数调用的其他函数如果有写屏障也会报错。简单来讲，就是针对写屏障的处理，防止其死循环")]),a._v(" "),t("h3",{attrs:{id:"案例-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-4"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:nowritebarrierrec\nfunc gcFlushBgCredit(scanWork int64) {\n    ...\n}\n")])])]),t("h2",{attrs:{id:"go-yeswritebarrierrec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-yeswritebarrierrec"}},[a._v("#")]),a._v(" go:yeswritebarrierrec")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:yeswritebarrierrec\n")])])]),t("p",[a._v("该指令与 "),t("code",[a._v("go:nowritebarrierrec")]),a._v(" 相对，在标注 "),t("code",[a._v("go:nowritebarrierrec")]),a._v(" 指令的函数上，遇到写屏障会产生错误。而当编译器遇到 "),t("code",[a._v("go:yeswritebarrierrec")]),a._v(" 指令时将会停止")]),a._v(" "),t("h3",{attrs:{id:"案例-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-5"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:yeswritebarrierrec\nfunc gchelper() {\n\t...\n}\n")])])]),t("h2",{attrs:{id:"go-noinline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-noinline"}},[a._v("#")]),a._v(" go:noinline")]),a._v(" "),t("p",[a._v("该指令表示该函数禁止进行内联")]),a._v(" "),t("h3",{attrs:{id:"案例-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-6"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:noinline\nfunc unexportedPanicForTesting(b []byte, i int) byte {\n\treturn b[i]\n}\n")])])]),t("p",[a._v("我们观察一下这个案例，是直接通过索引取值，逻辑比较简单。如果不加上 "),t("code",[a._v("go:noinline")]),a._v(" 的话，就会出现编译器对其进行内联优化")]),a._v(" "),t("p",[a._v("显然，内联有好有坏。该指令就是提供这一特殊处理")]),a._v(" "),t("h2",{attrs:{id:"go-norace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-norace"}},[a._v("#")]),a._v(" go:norace")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:norace\n")])])]),t("p",[a._v("该指令表示禁止进行竞态检测。而另外一种常见的形式就是在启动时执行 "),t("code",[a._v("go run -race")]),a._v("，能够检测应用程序中是否存在双向的数据竞争。非常有用")]),a._v(" "),t("h3",{attrs:{id:"案例-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-7"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:norace\nfunc forkAndExecInChild(argv0 *byte, argv, envv []*byte, chroot, dir *byte, attr *ProcAttr, sys *SysProcAttr, pipe int) (pid int, err Errno) {\n    ...\n}\n")])])]),t("h2",{attrs:{id:"go-notinheap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-notinheap"}},[a._v("#")]),a._v(" go:notinheap")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//go:notinheap\n")])])]),t("p",[a._v("该指令常用于类型声明，它表示这个类型不允许从 GC 堆上进行申请内存。在运行时中常用其来做较低层次的内部结构，避免调度器和内存分配中的写屏障。能够提高性能")]),a._v(" "),t("h3",{attrs:{id:"案例-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-8"}},[a._v("#")]),a._v(" 案例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// notInHeap is off-heap memory allocated by a lower-level allocator\n// like sysAlloc or persistentAlloc.\n//\n// In general, it's better to use real types marked as go:notinheap,\n// but this serves as a generic type for situations where that isn't\n// possible (like in the allocators).\n//\n//go:notinheap\ntype notInHeap struct{}\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("在本文我们简单介绍了一些常见的指令集，我建议仅供了解。一般我们是用不到的，因为你的瓶颈可能更多的在自身应用上")]),a._v(" "),t("p",[a._v("但是了解这一些，对你了解底层源码和运行机制会更有帮助。如果想再深入些，可阅读我给出的参考链接 ：）")]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/golang/go/blob/master/src/runtime/HACKING.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("HACKING"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://golang.org/cmd/compile/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Command compile"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);