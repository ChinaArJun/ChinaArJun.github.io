(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{969:function(t,n,e){"use strict";e.r(n);var a=e(44),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("上一节我们说完了 GPM 结构体，这一讲，我们来研究 Go sheduler 结构体，以及整个调度器的初始化过程。")]),t._v(" "),e("p",[t._v("Go scheduler 在源码中的结构体为 "),e("code",[t._v("schedt")]),t._v("，保存调度器的状态信息、全局的可运行 G 队列等。源码如下：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 保存调度器的信息\ntype schedt struct {\n\t// accessed atomically. keep at top to ensure alignment on 32-bit systems.\n\t// 需以原子访问访问。\n\t// 保持在 struct 顶部，以使其在 32 位系统上可以对齐\n\tgoidgen  uint64\n\tlastpoll uint64\n\n\tlock mutex\n\n\t// 由空闲的工作线程组成的链表\n\tmidle        muintptr // idle m's waiting for work\n\t// 空闲的工作线程数量\n\tnmidle       int32    // number of idle m's waiting for work\n\t// 空闲的且被 lock 的 m 计数\n\tnmidlelocked int32    // number of locked m's waiting for work\n\t// 已经创建的工作线程数量\n\tmcount       int32    // number of m's that have been created\n\t// 表示最多所能创建的工作线程数量\n\tmaxmcount    int32    // maximum number of m's allowed (or die)\n\n\t// goroutine 的数量，自动更新\n\tngsys uint32 // number of system goroutines; updated atomically\n\n\t// 由空闲的 p 结构体对象组成的链表\n\tpidle      puintptr // idle p's\n\t// 空闲的 p 结构体对象的数量\n\tnpidle     uint32\n\tnmspinning uint32 // See \"Worker thread parking/unparking\" comment in proc.go.\n\n\t// Global runnable queue.\n\t// 全局可运行的 G队列\n\trunqhead guintptr // 队列头\n\trunqtail guintptr // 队列尾\n\trunqsize int32 // 元素数量\n\n\t// Global cache of dead G's.\n\t// dead G 的全局缓存\n\t// 已退出的 goroutine 对象，缓存下来\n\t// 避免每次创建 goroutine 时都重新分配内存\n\tgflock       mutex\n\tgfreeStack   *g\n\tgfreeNoStack *g\n\t// 空闲 g 的数量\n\tngfree       int32\n\n\t// Central cache of sudog structs.\n\t// sudog 结构的集中缓存\n\tsudoglock  mutex\n\tsudogcache *sudog\n\n\t// Central pool of available defer structs of different sizes.\n\t// 不同大小的可用的 defer struct 的集中缓存池\n\tdeferlock mutex\n\tdeferpool [5]*_defer\n\n\tgcwaiting  uint32 // gc is waiting to run\n\tstopwait   int32\n\tstopnote   note\n\tsysmonwait uint32\n\tsysmonnote note\n\n\t// safepointFn should be called on each P at the next GC\n\t// safepoint if p.runSafePointFn is set.\n\tsafePointFn   func(*p)\n\tsafePointWait int32\n\tsafePointNote note\n\n\tprofilehz int32 // cpu profiling rate\n\n\t// 上次修改 gomaxprocs 的纳秒时间\n\tprocresizetime int64 // nanotime() of last change to gomaxprocs\n\ttotaltime      int64 // ∫gomaxprocs dt up to procresizetime\n}\n")])])]),e("p",[t._v("在程序运行过程中，"),e("code",[t._v("schedt")]),t._v(" 对象只有一份实体，它维护了调度器的所有信息。")]),t._v(" "),e("p",[t._v("在 proc.go 和 runtime2.go 文件中，有一些很重要全局的变量，我们先列出来：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 所有 g 的长度\nallglen     uintptr\n\n// 保存所有的 g\nallgs    []*g\n\n// 保存所有的 m\nallm        *m\n\n// 保存所有的 p，_MaxGomaxprocs = 1024\nallp        [_MaxGomaxprocs + 1]*p\n\n// p 的最大值，默认等于 ncpu\ngomaxprocs  int32\n\n// 程序启动时，会调用 osinit 函数获得此值\nncpu        int32\n\n// 调度器结构体对象，记录了调度器的工作状态\nsched       schedt\n\n// 代表进程的主线程\nm0           m\n\n// m0 的 g0，即 m0.g0 = &g0\ng0           g\n")])])]),e("blockquote",[e("p",[t._v("在程序初始化时，这些全局变量都会被初始化为零值：指针被初始化为 nil 指针，切片被初始化为 nil 切片，int 被初始化为 0，结构体的所有成员变量按其类型被初始化为对应的零值。")])]),t._v(" "),e("blockquote",[e("p",[t._v("因此程序刚启动时 allgs，allm 和allp 都不包含任何 g，m 和 p。")])]),t._v(" "),e("p",[t._v("不仅是 Go 程序，系统加载可执行文件大概都会经过这几个阶段：")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("从磁盘上读取可执行文件，加载到内存")])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("创建进程和主线程")]),t._v(" "),e("li",[t._v("为主线程分配栈空间")]),t._v(" "),e("li",[t._v("把由用户在命令行输入的参数拷贝到主线程的栈")]),t._v(" "),e("li",[t._v("把主线程放入操作系统的运行队列等待被调度")])]),t._v(" "),e("p",[t._v("上面这段描述，来自公众号“ go语言核心编程技术”的调度系列教程。")]),t._v(" "),e("p",[t._v("我们从一个 "),e("code",[t._v("Hello World")]),t._v(" 的例子来回顾一下 Go 程序初始化的过程：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("hello world")\n}\n')])])]),e("p",[t._v("在项目根目录下执行：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("go build -gcflags "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-N -l"')]),t._v(" -o hello src/main.go\n")])])]),e("p",[e("code",[t._v('-gcflags "-N -l"')]),t._v(" 是为了关闭编译器优化和函数内联，防止后面在设置断点的时候找不到相对应的代码位置。")]),t._v(" "),e("p",[t._v("得到了可执行文件 "),e("code",[t._v("hello")]),t._v("，执行：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("qcrao@qcrao hello-world"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ gdb hello\n")])])]),e("p",[t._v("进入 gdb 调试模式，执行 "),e("code",[t._v("info files")]),t._v("，得到可执行文件的文件头，列出了各种段：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/60392813-db88d980-9b3d-11e9-8b0f-7c1d845a8191.png",alt:"gdb info"}})]),t._v(" "),e("p",[t._v("同时，我们也得到了入口地址：0x450e20。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" b *0x450e20\nBreakpoint "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" at 0x450e20: "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /usr/local/go/src/runtime/rt0_linux_amd64.s, line "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(".\n")])])]),e("p",[t._v("这就是 Go 程序的入口地址，我是在 linux 上运行的，所以入口文件为 "),e("code",[t._v("src/runtime/rt0_linux_amd64.s")]),t._v("，runtime 目录下有各种不同名称的程序入口文件，支持各种操作系统和架构，代码为：")]),t._v(" "),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("TEXT _rt0_amd64_linux(SB),NOSPLIT,$-8\n\tLEAQ\t8(SP), SI // argv\n\tMOVQ\t0(SP), DI // argc\n\tMOVQ\t$main(SB), AX\n\tJMP\tAX\n")])])]),e("p",[t._v("主要是把 argc，argv 从内存拉到了寄存器。这里 LEAQ 是计算内存地址，然后把内存地址本身放进寄存器里，也就是把 argv 的地址放到了 SI 寄存器中。最后跳转到：")]),t._v(" "),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("TEXT main(SB),NOSPLIT,$-8\n    MOVQ\t$runtime·rt0_go(SB), AX\n\tJMP\tAX\n")])])]),e("p",[t._v("继续跳转到 "),e("code",[t._v("runtime·rt0_go(SB)")]),t._v("，完成 go 启动时所有的初始化工作。位于 "),e("code",[t._v("/usr/local/go/src/runtime/asm_amd64.s")]),t._v("，代码：")]),t._v(" "),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('TEXT runtime·rt0_go(SB),NOSPLIT,$0\n    // copy arguments forward on an even stack\n    MOVQ    DI, AX      // argc\n    MOVQ    SI, BX      // argv\n    SUBQ    $(4*8+7), SP        // 2args 2auto\n    // 调整栈顶寄存器使其按 16 字节对齐\n    ANDQ    $~15, SP\n    // argc 放在 SP+16 字节处\n    MOVQ    AX, 16(SP)\n    // argv 放在 SP+24 字节处\n    MOVQ    BX, 24(SP)\n    \n    // create istack out of the given (operating system) stack.\n    // _cgo_init may update stackguard.\n    // 给 g0 分配栈空间\n\n    // 把 g0 的地址存入 DI\n    MOVQ    $runtime·g0(SB), DI\n    // BX = SP - 64*1024 + 104\n    LEAQ    (-64*1024+104)(SP), BX\n    // g0.stackguard0 = SP - 64*1024 + 104\n    MOVQ    BX, g_stackguard0(DI)\n    // g0.stackguard1 = SP - 64*1024 + 104\n    MOVQ    BX, g_stackguard1(DI)\n    // g0.stack.lo = SP - 64*1024 + 104\n    MOVQ    BX, (g_stack+stack_lo)(DI)\n    // g0.stack.hi = SP\n    MOVQ    SP, (g_stack+stack_hi)(DI)\n\n    // ……………………\n    // 省略了很多检测 CPU 信息的代码\n    // ……………………\n\n    \n    // 初始化 m 的 tls\n    // DI = &m0.tls，取 m0 的 tls 成员的地址到 DI 寄存器\n    LEAQ    runtime·m0+m_tls(SB), DI\n    // 调用 settls 设置线程本地存储，settls 函数的参数在 DI 寄存器中\n    // 之后，可通过 fs 段寄存器找到 m.tls\n    CALL    runtime·settls(SB)\n\n    // store through it, to make sure it works\n    // 获取 fs 段基址并放入 BX 寄存器，其实就是 m0.tls[1] 的地址，get_tls 的代码由编译器生成\n    get_tls(BX)\n    MOVQ    $0x123, g(BX)\n    MOVQ    runtime·m0+m_tls(SB), AX\n    CMPQ    AX, $0x123\n    JEQ 2(PC)\n    MOVL    AX, 0   // abort\nok:\n    // set the per-goroutine and per-mach "registers"\n    // 获取 fs 段基址到 BX 寄存器\n    get_tls(BX)\n    // 将 g0 的地址存储到 CX，CX = &g0\n    LEAQ    runtime·g0(SB), CX\n    // 把 g0 的地址保存在线程本地存储里面，也就是 m0.tls[0]=&g0\n    MOVQ    CX, g(BX)\n    // 将 m0 的地址存储到 AX，AX = &m0\n    LEAQ    runtime·m0(SB), AX\n\n    // save m->g0 = g0\n    // m0.g0 = &g0\n    MOVQ    CX, m_g0(AX)\n    // save m0 to g0->m\n    // g0.m = &m0\n    MOVQ    AX, g_m(CX)\n\n    CLD             // convention is D is always left cleared\n    CALL    runtime·check(SB)\n\n    MOVL    16(SP), AX      // copy argc\n    MOVL    AX, 0(SP)\n    MOVQ    24(SP), AX      // copy argv\n    MOVQ    AX, 8(SP)\n    CALL    runtime·args(SB)\n    \n    // 初始化系统核心数\n    CALL    runtime·osinit(SB)\n    // 调度器初始化\n    CALL    runtime·schedinit(SB)\n\n    // create a new goroutine to start program\n    MOVQ    $runtime·mainPC(SB), AX     // entry\n    // newproc 的第二个参数入栈，也就是新的 goroutine 需要执行的函数\n    // AX = &funcval{runtime·main},\n    PUSHQ   AX\n    // newproc 的第一个参数入栈，该参数表示 runtime.main 函数需要的参数大小，\n    // 因为 runtime.main 没有参数，所以这里是 0\n    PUSHQ   $0          // arg size\n    // 创建 main goroutine\n    CALL    runtime·newproc(SB)\n    POPQ    AX\n    POPQ    AX\n\n    // start this M\n    // 主线程进入调度循环，运行刚刚创建的 goroutine\n    CALL    runtime·mstart(SB)\n\n    // 永远不会返回，万一返回了，crash 掉\n    MOVL    $0xf1, 0xf1  // crash\n    RET\n')])])]),e("p",[t._v("这段代码完成之后，整个 Go 程序就可以跑起来了，是非常核心的代码。这一讲其实只讲到了第 80 行，也就是调度器初始化函数：")]),t._v(" "),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("CALL    runtime·schedinit(SB)\n")])])]),e("p",[e("code",[t._v("schedinit")]),t._v(" 函数返回后，调度器的相关参数都已经初始化好了，犹如盘古开天辟地，万事万物各就其位。接下来详细解释上面的汇编代码。")]),t._v(" "),e("h1",{attrs:{id:"调整-sp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调整-sp"}},[t._v("#")]),t._v(" 调整 SP")]),t._v(" "),e("p",[t._v("第一段代码，将 SP 调整到了一个地址是 16 的倍数的位置：")]),t._v(" "),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SUBQ\t$(4*8+7), SP\t\t// 2args 2auto\n// 调整栈顶寄存器使其按 16 个字节对齐\nANDQ\t$~15, SP\n")])])]),e("p",[t._v("先是将 SP 减掉 39，也就是向下移动了 39 个 Byte，再进行与运算。")]),t._v(" "),e("p",[e("code",[t._v("15")]),t._v(" 的二进制低四位是全 1："),e("code",[t._v("1111")]),t._v("，其他位都是 0；取反后，变成了 "),e("code",[t._v("0000")]),t._v("，高位则是全 1。这样，与 SP 进行了与运算后，低 4 位变成了全 0，高位则不变。因此 SP 继续向下移动，并且这回是在一个地址值为 16 的倍数的地方，16 字节对齐的地方。")]),t._v(" "),e("p",[t._v("为什么要这么做？画一张图就明白了。不过先得说明一点，前面 "),e("code",[t._v("_rt0_amd64_linux")]),t._v(" 函数里讲过，DI 里存的是 argc 的值，8 个字节，而 SI 里则存的是 argv 的地址，8 个字节。")]),t._v(" "),e("p",[t._v("![SP 内存对齐]](https://user-images.githubusercontent.com/7698088/64070957-8eda8f80-cca1-11e9-91c7-0b276d7769ea.png)")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/64070959-a0239c00-cca1-11e9-8ad9-c3aefc5093f8.png",alt:"SP 内存对齐"}})]),t._v(" "),e("p",[t._v("上面两张图中，左侧用箭头标注了 16 字节对齐的位置。第一步表示向下移动 39 B，第二步表示与 "),e("code",[t._v("~15")]),t._v(" 相与。")]),t._v(" "),e("p",[t._v("存在两种情况，这也是第一步将 SP 下移的时候，多移了 7 个 Byte 的原因。第一张图里，与 "),e("code",[t._v("~15")]),t._v(" 相与的时候，SP 值减少了 1，第二张图则减少了 9。最后都是移位到了 16 字节对齐的位置。")]),t._v(" "),e("p",[t._v("两张图的共同点是 SP 与 argc 中间多出了 16 个字节的空位。这个后面应该会用到，我们接着探索。")]),t._v(" "),e("p",[t._v("至于为什么进行 16 个字节对齐，就比较好理解了：因为 CPU 有一组 SSE 指令，这些指令中出现的内存地址必须是 16 的倍数。")]),t._v(" "),e("h1",{attrs:{id:"初始化-g0-栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化-g0-栈"}},[t._v("#")]),t._v(" 初始化 g0 栈")]),t._v(" "),e("p",[t._v("接着往后看，开始初始化 g0 的栈了。g0 栈的作用就是为运行 runtime 代码提供一个“环境”。")]),t._v(" "),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 把 g0 的地址存入 DI\nMOVQ\t$runtime·g0(SB), DI\n// BX = SP - 64*1024 + 104\nLEAQ\t(-64*1024+104)(SP), BX\n// g0.stackguard0 = SP - 64*1024 + 104\nMOVQ\tBX, g_stackguard0(DI)\n// g0.stackguard1 = SP - 64*1024 + 104\nMOVQ\tBX, g_stackguard1(DI)\n// g0.stack.lo = SP - 64*1024 + 104\nMOVQ\tBX, (g_stack+stack_lo)(DI)\n// g0.stack.hi = SP\nMOVQ\tSP, (g_stack+stack_hi)(DI)\n")])])]),e("p",[t._v("代码 L2 把 g0 的地址存入 DI 寄存器；L4 将 SP 下移 (64K-104)B，并将地址存入 BX 寄存器；L6 将 BX 里存储的地址赋给 g0.stackguard0；L8，L10，L12 分别 将 BX 里存储的地址赋给 g0.stackguard1， g0.stack.lo， g0.stack.hi。")]),t._v(" "),e("p",[t._v("这部分完成之后，g0 栈空间如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/64071133-d400c080-cca5-11e9-8563-d5f882e34e0a.png",alt:"g0 栈空间"}})]),t._v(" "),e("h1",{attrs:{id:"主线程绑定-m0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主线程绑定-m0"}},[t._v("#")]),t._v(" 主线程绑定 m0")]),t._v(" "),e("p",[t._v("接着往下看，中间我们省略了很多检查 CPU 相关的代码，直接看主线程绑定 m0 的部分：")]),t._v(" "),e("div",{staticClass:"language-asm extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 初始化 m 的 tls\n// DI = &m0.tls，取 m0 的 tls 成员的地址到 DI 寄存器\nLEAQ\truntime·m0+m_tls(SB), DI\n// 调用 settls 设置线程本地存储，settls 函数的参数在 DI 寄存器中\n// 之后，可通过 fs 段寄存器找到 m.tls\nCALL\truntime·settls(SB)\n\n// store through it, to make sure it works\n// 获取 fs 段基地址并放入 BX 寄存器，其实就是 m0.tls[1] 的地址，get_tls 的代码由编译器生成\nget_tls(BX)\nMOVQ\t$0x123, g(BX)\nMOVQ\truntime·m0+m_tls(SB), AX\nCMPQ\tAX, $0x123\nJEQ 2(PC)\nMOVL\tAX, 0\t// abort\n")])])]),e("p",[t._v("因为 m0 是全局变量，而 m0 又要绑定到工作线程才能执行。我们又知道，runtime 会启动多个工作线程，每个线程都会绑定一个 m0。而且，代码里还得保持一致，都是用 m0 来表示。这就要用到线程本地存储的知识了，也就是常说的 TLS（Thread Local Storage）。简单来说，TLS 就是线程本地的私有的全局变量。")]),t._v(" "),e("p",[t._v("一般而言，全局变量对进程中的多个线程同时可见。进程中的全局变量与函数内定义的静态（static）变量，是各个线程都可以访问的共享变量。一个线程修改了，其他线程就会“看见”。要想搞出一个线程私有的变量，就需要用到 TLS 技术。")]),t._v(" "),e("p",[t._v("如果需要在一个线程内部的各个函数调用都能访问、但其它线程不能访问的变量（被称为 static memory local to a thread，线程局部静态变量），就需要新的机制来实现。这就是 TLS。")]),t._v(" "),e("p",[t._v("继续来看源码，L3 将 m0.tls 地址存储到 DI 寄存器，再调用 settls 完成 tls 的设置，tls 是 m 结构体中的一个数组。")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// thread-local storage (for x86 extern register)\ntls [6]uintptr\n")])])]),e("p",[t._v("设置 tls 的函数 runtime·settls(SB) 位于源码 "),e("code",[t._v("src/runtime/sys_linux_amd64.s")]),t._v(" 处，主要内容就是通过一个系统调用将 fs 段基址设置成 m.tls[1] 的地址，而 fs 段基址又可以通过 CPU 里的寄存器 fs 来获取。")]),t._v(" "),e("blockquote",[e("p",[t._v("而每个线程都有自己的一组 CPU 寄存器值，操作系统在把线程调离 CPU 时会帮我们把所有寄存器中的值保存在内存中，调度线程来运行时又会从内存中把这些寄存器的值恢复到 CPU。")])]),t._v(" "),e("p",[t._v("这样，工作线程代码就可以通过 fs 寄存器来找到 m.tls。")]),t._v(" "),e("p",[t._v("关于 settls 这个函数的解析可以去看阿波张的教程第 12 篇，写得很详细。")]),t._v(" "),e("p",[t._v("设置完 tls 之后，又来了一段验证上面 settls 是否能正常工作。如果不能，会直接 crash。")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("get_tls(BX)\nMOVQ\t$0x123, g(BX)\nMOVQ\truntime·m0+m_tls(SB), AX\nCMPQ\tAX, $0x123\nJEQ 2(PC)\nMOVL\tAX, 0\t// abort\n")])])]),e("p",[t._v("第一行代码，获取 tls，"),e("code",[t._v("get_tls(BX)")]),t._v(" 的代码由编译器生成，源码中并没有看到，可以理解为将 "),e("code",[t._v("m.tls")]),t._v(" 的地址存入 BX 寄存器。")]),t._v(" "),e("p",[t._v("L2 将一个数 "),e("code",[t._v("0x123")]),t._v(" 放入 "),e("code",[t._v("m.tls[0]")]),t._v(" 处，L3 则将 "),e("code",[t._v("m.tls[0]")]),t._v(" 处的数据取出来放到 AX 寄存器，L4 则比较两者是否相等。如果相等，则跳过 L6 行的代码，否则执行 L6，程序 crash。")]),t._v(" "),e("p",[t._v("继续看代码：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// set the per-goroutine and per-mach "registers"\n// 获取 fs 段基址到 BX 寄存器\nget_tls(BX)\n// 将 g0 的地址存储到 CX，CX = &g0\nLEAQ\truntime·g0(SB), CX\n// 把 g0 的地址保存在线程本地存储里面，也就是 m0.tls[0]=&g0\nMOVQ\tCX, g(BX)\n// 将 m0 的地址存储到 AX，AX = &m0\nLEAQ\truntime·m0(SB), AX\n\n// save m->g0 = g0\n// m0.g0 = &g0\nMOVQ\tCX, m_g0(AX)\n// save m0 to g0->m\n// g0.m = &m0\nMOVQ\tAX, g_m(CX)\n')])])]),e("p",[t._v("L3 将 m.tls 地址存入 BX；L5 将 g0 的地址存入 CX；L7 将 CX，也就是 g0 的地址存入 m.tls[0]；L9 将 m0 的地址存入 AX；L13 将 g0 的地址存入 m0.g0；L16 将 m0 存入 g0.m。也就是：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("tls[0] = g0\nm0.g0 = &g0\ng0.m = &m0\n")])])]),e("p",[t._v("代码中寄存器前面的符号看着比较奇怪，其实它们最后会被链接器转化为偏移量。")]),t._v(" "),e("p",[t._v("看曹大 golang_notes 用 gobuf_sp(BX) 这个例子讲的：")]),t._v(" "),e("blockquote",[e("p",[t._v("这种写法在标准 plan9 汇编中只是个 symbol，没有任何偏移量的意思，但这里却用名字来代替了其偏移量，这是怎么回事呢？")])]),t._v(" "),e("blockquote",[e("p",[t._v("实际上这是 runtime 的特权，是需要链接器配合完成的，再来看看 gobuf 在 runtime 中的 struct 定义开头部分的注释:")])]),t._v(" "),e("blockquote",[e("p",[t._v("// The offsets of sp, pc, and g are known to (hard-coded in) libmach.")])]),t._v(" "),e("p",[t._v("对于我们而言，这种写法读起来比较容易。")]),t._v(" "),e("p",[t._v("这一段执行完之后，就把 m0，g0，m.tls[0] 串联起来了。通过 m.tls[0] 可以找到 g0，通过 g0 可以找到 m0（通过 g 结构体的 m 字段）。并且，通过 m 的字段 g0，m0 也可以找到 g0。于是，主线程和 m0，g0 就关联起来了。")]),t._v(" "),e("blockquote",[e("p",[t._v("从这里还可以看到，保存在主线程本地存储中的值是 g0 的地址，也就是说工作线程的私有全局变量其实是一个指向 g 的指针而不是指向 m 的指针。")])]),t._v(" "),e("blockquote",[e("p",[t._v("目前这个指针指向g0，表示代码正运行在 g0 栈。")])]),t._v(" "),e("p",[t._v("于是，前面的图又增加了新的玩伴 m0：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/64071132-bcc1d300-cca5-11e9-9d63-037cef865090.png",alt:"工作线程绑定 m0，g0"}})]),t._v(" "),e("h1",{attrs:{id:"初始化-m0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化-m0"}},[t._v("#")]),t._v(" 初始化 m0")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MOVL\t16(SP), AX\t\t// copy argc\nMOVL\tAX, 0(SP)\nMOVQ\t24(SP), AX\t\t// copy argv\nMOVQ\tAX, 8(SP)\nCALL\truntime·args(SB)\n// 初始化系统核心数\nCALL\truntime·osinit(SB)\n// 调度器初始化\nCALL\truntime·schedinit(SB)\n")])])]),e("p",[t._v("L1-L2 将 16(SP) 处的内容移动到 0(SP)，也就是栈顶，通过前面的图，16(SP) 处的内容为 argc；L3-L4 将 argv 存入 8(SP)，接下来调用 "),e("code",[t._v("runtime·args")]),t._v(" 函数，处理命令行参数。")]),t._v(" "),e("p",[t._v("接着，连续调用了两个 runtime 函数。osinit 函数初始化系统核心数，将全局变量 ncpu 初始化的核心数，schedinit 则是本文的核心：调度器的初始化。")]),t._v(" "),e("p",[t._v("下面，我们来重点看 schedinit 函数：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// src/runtime/proc.go\n\n// The bootstrap sequence is:\n//\n//\tcall osinit\n//\tcall schedinit\n//\tmake & queue new G\n//\tcall runtime·mstart\n//\n// The new G calls runtime·main.\nfunc schedinit() {\n\t// getg 由编译器实现\n\t// get_tls(CX)\n\t// MOVQ g(CX), BX; BX存器里面现在放的是当前g结构体对象的地址\n\t_g_ := getg()\n\tif raceenabled {\n\t\t_g_.racectx, raceprocctx0 = raceinit()\n\t}\n\n\t// 最多启动 10000 个工作线程\n\tsched.maxmcount = 10000\n\n\ttracebackinit()\n\tmoduledataverify()\n\n\t// 初始化栈空间复用管理链表\n\tstackinit()\n\tmallocinit()\n\n\t// 初始化 m0\n\tmcommoninit(_g_.m)\n\talginit()       // maps must not be used before this call\n\tmodulesinit()   // provides activeModules\n\ttypelinksinit() // uses maps, activeModules\n\titabsinit()     // uses activeModules\n\n\tmsigsave(_g_.m)\n\tinitSigmask = _g_.m.sigmask\n\n\tgoargs()\n\tgoenvs()\n\tparsedebugvars()\n\tgcinit()\n\n\tsched.lastpoll = uint64(nanotime())\n\n\t// 初始化 P 的个数\n\t// 系统中有多少核，就创建和初始化多少个 p 结构体对象\n\tprocs := ncpu\n\tif n, ok := atoi32(gogetenv("GOMAXPROCS")); ok && n > 0 {\n\t\tprocs = n\n\t}\n\tif procs > _MaxGomaxprocs {\n\t\tprocs = _MaxGomaxprocs\n\t}\n\n\t// 初始化所有的 P，正常情况下不会返回有本地任务的 P\n\tif procresize(procs) != nil {\n\t\tthrow("unknown runnable goroutine during bootstrap")\n\t}\n\n\t// ……………………\n}\n')])])]),e("p",[t._v("这个函数开头的注释很贴心地把 Go 程序初始化的过程又说了一遍：")]),t._v(" "),e("ol",[e("li",[t._v("call osinit。初始化系统核心数。")]),t._v(" "),e("li",[t._v("call schedinit。初始化调度器。")]),t._v(" "),e("li",[t._v("make & queue new G。创建新的 goroutine。")]),t._v(" "),e("li",[t._v("call runtime·mstart。调用 mstart，启动调度。")]),t._v(" "),e("li",[t._v("The new G calls runtime·main。在新的 goroutine 上运行 runtime.main 函数。")])]),t._v(" "),e("p",[t._v("函数首先调用 "),e("code",[t._v("getg()")]),t._v(" 函数获取当前正在运行的 "),e("code",[t._v("g")]),t._v("，"),e("code",[t._v("getg()")]),t._v(" 在 "),e("code",[t._v("src/runtime/stubs.go")]),t._v(" 中声明，真正的代码由编译器生成。")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// getg returns the pointer to the current g.\n// The compiler rewrites calls to this function into instructions\n// that fetch the g directly (from TLS or from the dedicated register).\nfunc getg() *g\n")])])]),e("p",[t._v("注释里也说了，getg 返回当前正在运行的 goroutine 的指针，它会从 tls 里取出 tls[0]，也就是当前运行的 goroutine 的地址。编译器插入类似下面的代码：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("get_tls(CX) \nMOVQ g(CX), BX; // BX存器里面现在放的是当前g结构体对象的地址\n")])])]),e("p",[t._v("继续往下看：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sched.maxmcount = 10000\n")])])]),e("p",[t._v("设置最多只能创建 10000 个工作线程。")]),t._v(" "),e("p",[t._v("然后，调用了一堆 init 函数，初始化各种配置，现在不去深究。只关心本小节的重点，m0 的初始化：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 初始化 m\nfunc mcommoninit(mp *m) {\n\t// 初始化过程中_g_ = g0\n\t_g_ := getg()\n\n\t// g0 stack won't make sense for user (and is not necessary unwindable).\n\tif _g_ != _g_.m.g0 {\n\t\tcallers(1, mp.createstack[:])\n\t}\n\n\t// random 初始化\n\tmp.fastrand = 0x49f6428a + uint32(mp.id) + uint32(cputicks())\n\tif mp.fastrand == 0 {\n\t\tmp.fastrand = 0x49f6428a\n\t}\n\n\tlock(&sched.lock)\n\t// 设置 m 的 id\n\tmp.id = sched.mcount\n\tsched.mcount++\n\t// 检查已创建系统线程是否超过了数量限制（10000）\n\tcheckmcount()\n\t\n\t// ………………省略了初始化 gsignal\n\n\t// Add to allm so garbage collector doesn't free g->m\n\t// when it is just in a register or thread-local storage.\n\tmp.alllink = allm\n\n\tatomicstorep(unsafe.Pointer(&allm), unsafe.Pointer(mp))\n\tunlock(&sched.lock)\n\n\t// ………………\n}\n")])])]),e("p",[t._v("因为 sched 是一个全局变量，多个线程同时操作 sched 会有并发问题，因此先要加锁，操作结束之后再解锁。")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mp.id = sched.mcount\nsched.mcount++\ncheckmcount()\n")])])]),e("p",[t._v("可以看到，m0 的 id 是 0，并且之后创建的 m 的 id 是递增的。"),e("code",[t._v("checkmcount()")]),t._v(" 函数检查已创建系统线程是否超过了数量限制（10000）。")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mp.alllink = allm\n")])])]),e("p",[t._v("将 m 挂到全局变量 allm 上，allm 是一个指向 m 的的指针。")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("atomicstorep(unsafe.Pointer(&allm), unsafe.Pointer(mp))\n")])])]),e("p",[t._v("这一行将 allm 变成 m 的地址，这样变成了一个循环链表。之后再新建 m 的时候，新 m 的 alllink 就会指向本次的 m，最后 allm 又会指向新创建的 m。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/63501720-bcd00f00-c4fe-11e9-9642-1757de67aaa1.png",alt:"m.alllink 形成链表"}})]),t._v(" "),e("p",[t._v("上图中，1 将 m0 挂在 allm 上。之后，若新创建 m，则 m1 会和 m0 相连。")]),t._v(" "),e("p",[t._v("完成这些操作后，大功告成！解锁。")]),t._v(" "),e("h1",{attrs:{id:"初始化-allp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化-allp"}},[t._v("#")]),t._v(" 初始化 allp")]),t._v(" "),e("p",[t._v("跳过一些其他的初始化代码，继续往后看：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('procs := ncpu\nif n, ok := atoi32(gogetenv("GOMAXPROCS")); ok && n > 0 {\n\tprocs = n\n}\nif procs > _MaxGomaxprocs {\n\tprocs = _MaxGomaxprocs\n}\n')])])]),e("p",[t._v("这里就是设置 procs，它决定创建 P 的数量。ncpu 这里已经被赋上了系统的核心数，因此代码里不设置 GOMAXPROCS 也是没问题的。这里还限制了 procs 的最大值，为 1024。")]),t._v(" "),e("p",[t._v("来看最后一个核心的函数：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// src/runtime/proc.go\n\nfunc procresize(nprocs int32) *p {\n\told := gomaxprocs\n\tif old < 0 || old > _MaxGomaxprocs || nprocs <= 0 || nprocs > _MaxGomaxprocs {\n\t\tthrow("procresize: invalid arg")\n\t}\n\t\n\t// ……………………\n\n\t// update statistics\n\t// 更新数据\n\tnow := nanotime()\n\tif sched.procresizetime != 0 {\n\t\tsched.totaltime += int64(old) * (now - sched.procresizetime)\n\t}\n\tsched.procresizetime = now\n\n\t// 初始化所有的 P\n\tfor i := int32(0); i < nprocs; i++ {\n\t\tpp := allp[i]\n\t\tif pp == nil {\n\t\t\t// 申请新对象\n\t\t\tpp = new(p)\n\t\t\tpp.id = i\n\t\t\t// pp 的初始状态为 stop\n\t\t\tpp.status = _Pgcstop\n\t\t\tpp.sudogcache = pp.sudogbuf[:0]\n\t\t\tfor i := range pp.deferpool {\n\t\t\t\tpp.deferpool[i] = pp.deferpoolbuf[i][:0]\n\t\t\t}\n\t\t\t// 将 pp 存放到 allp 处\n\t\t\tatomicstorep(unsafe.Pointer(&allp[i]), unsafe.Pointer(pp))\n\t\t}\n\n\t\t// ……………………\n\n\t}\n\n\t// 释放多余的 P。由于减少了旧的 procs 的数量，因此需要释放\n\t// ……………………\n\n\t// 获取当前正在运行的 g 指针，初始化时 _g_ = g0\n\t_g_ := getg()\n\tif _g_.m.p != 0 && _g_.m.p.ptr().id < nprocs {\n\t\t// continue to use the current P\n\t\t// 继续使用当前 P\n\t\t_g_.m.p.ptr().status = _Prunning\n\t} else {\n\t\t// 初始化时执行这个分支\n\n\t\t// ……………………\n\n\t\t_g_.m.p = 0\n\t\t_g_.m.mcache = nil\n\t\t// 取出第 0 号 p\n\t\tp := allp[0]\n\t\tp.m = 0\n\t\tp.status = _Pidle\n\t\t// 将 p0 和 m0 关联起来\n\t\tacquirep(p)\n\t\tif trace.enabled {\n\t\t\ttraceGoStart()\n\t\t}\n\t}\n\tvar runnablePs *p\n\t// 下面这个 for 循环把所有空闲的 p 放入空闲链表\n\tfor i := nprocs - 1; i >= 0; i-- {\n\t\tp := allp[i]\n\t\t// allp[0] 跟 m0 关联了，不会进行之后的“放入空闲链表”\n\t\tif _g_.m.p.ptr() == p {\n\t\t\tcontinue\n\t\t}\n\n\t\t// 状态转为 idle\n\t\tp.status = _Pidle\n\t\t// p 的 LRQ 里没有 G\n\t\tif runqempty(p) {\n\t\t\t// 放入全局空闲链表\n\t\t\tpidleput(p)\n\t\t} else {\n\t\t\tp.m.set(mget())\n\t\t\tp.link.set(runnablePs)\n\t\t\trunnablePs = p\n\t\t}\n\t}\n\tstealOrder.reset(uint32(nprocs))\n\tvar int32p *int32 = &gomaxprocs // make compiler check that gomaxprocs is an int32\n\tatomic.Store((*uint32)(unsafe.Pointer(int32p)), uint32(nprocs))\n\t// 返回有本地任务的 P 链表\n\treturn runnablePs\n}\n\n')])])]),e("p",[t._v("代码比较长，这个函数不仅是初始化的时候会执行到，在中途改变 procs 的值的时候，仍然会调用它。所有存在很多一般不用关心的代码，因为一般不会在中途重新设置 procs 的值。我把初始化无关的代码删掉了，这样会更清晰一些。")]),t._v(" "),e("p",[t._v("函数先是从堆上创建了 nproc 个 P，并且把 P 的状态设置为 "),e("code",[t._v("_Pgcstop")]),t._v("，现在全局变量 allp 里就维护了所有的 P。")]),t._v(" "),e("p",[t._v("接着，调用函数 "),e("code",[t._v("acquirep")]),t._v(" 将 p0 和 m0 关联起来。我们来详细看一下：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("func acquirep(_p_ *p) {\n\t// Do the part that isn't allowed to have write barriers.\n\tacquirep1(_p_)\n\n\t// have p; write barriers now allowed\n\t_g_ := getg()\n\t_g_.m.mcache = _p_.mcache\n\n\t// ……………………\n}\n")])])]),e("p",[t._v("先调用 "),e("code",[t._v("acquirep1")]),t._v(" 函数真正地进行关联，之后，将 p0 的 mcache 资源赋给 m0。再来看 "),e("code",[t._v("acquirep1")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("func acquirep1(_p_ *p) {\n\t_g_ := getg()\n\n\t// ……………………\n\n\t_g_.m.p.set(_p_)\n\t_p_.m.set(_g_.m)\n\t_p_.status = _Prunning\n}\n")])])]),e("p",[t._v("可以看到就是一些字段相互设置，执行完成后：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("g0.m.p = p0\np0.m = m0\n")])])]),e("p",[t._v("并且，p0 的状态变成了 "),e("code",[t._v("_Prunning")]),t._v("。")]),t._v(" "),e("p",[t._v("接下来是一个循环，它将除了 p0 的所有非空闲的 P，放入 P 链表 runnablePs，并返回给 procresize 函数的调用者，并由调用者来“调度”这些 P。")]),t._v(" "),e("p",[t._v("函数 "),e("code",[t._v("runqempty")]),t._v(" 用来判断一个 P 是否是空闲，依据是 P 的本地 run queue 队列里有没有 runnable 的 G，如果没有，那 P 就是空闲的。")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// src/runtime/proc.go\n\n// 如果 _p_ 的本地队列里没有待运行的 G，则返回 true\nfunc runqempty(_p_ *p) bool {\n\t// 这里涉及到一些数据竞争，并不是简单地判断 runqhead == runqtail 并且 runqnext == nil 就可以\n\t//\n\tfor {\n\t\thead := atomic.Load(&_p_.runqhead)\n\t\ttail := atomic.Load(&_p_.runqtail)\n\t\trunnext := atomic.Loaduintptr((*uintptr)(unsafe.Pointer(&_p_.runnext)))\n\t\tif tail == atomic.Load(&_p_.runqtail) {\n\t\t\treturn head == tail && runnext == 0\n\t\t}\n\t}\n}\n")])])]),e("p",[t._v("并不是简单地判断 head == tail 并且 runnext == nil 为真，就可以说明 runq 是空的。因为涉及到一些数据竞争，例如在比较 head == tail 时为真，但此时 runnext 上其实有一个 G，之后再去比较 runnext == nil 的时候，这个 G 又通过 runqput跑到了 runq 里去了或者通过 runqget 拿走了，runnext 也为真，于是函数就判断这个 P 是空闲的，这就会形成误判。")]),t._v(" "),e("p",[t._v("因此 runqempty 函数先是通过原子操作取出了 head，tail，runnext，然后再次确认 tail 没有发生变化，最后再比较 head == tail 以及 runnext == nil，保证了在观察三者都是在“同时”观察到的，因此，返回的结果就是正确的。")]),t._v(" "),e("p",[t._v("说明一下，runnext 上有时会绑定一个 G，这个 G 是被当前 G 唤醒的，相比其他 G 有更高的执行优先级，因此把它单独拿出来。")]),t._v(" "),e("p",[t._v("函数的最后，初始化了一个“随机分配器”：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("stealOrder.reset(uint32(nprocs))\n")])])]),e("p",[t._v("将来有些 m 去偷工作的时候，会遍历所有的 P，这时为了偷地随机一些，就会用到 stealOrder 来返回一个随机选择的 P，后面的文章会再讲。")]),t._v(" "),e("p",[t._v("这样，整个 procresize 函数就讲完了，这也意味着，调度器的初始化工作已经完成了。")]),t._v(" "),e("p",[t._v("还是引用阿波张公号文章里的总结，写得太好了，很简洁，很难再优化了：")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("使用 make([]*p, nprocs) 初始化全局变量 allp，即 allp = make([]*p, nprocs)")])])]),t._v(" "),e("blockquote",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("循环创建并初始化 nprocs 个 p 结构体对象并依次保存在 allp 切片之中")])])]),t._v(" "),e("blockquote",[e("ol",{attrs:{start:"3"}},[e("li",[t._v("把 m0 和 allp[0] 绑定在一起，即 m0.p = allp[0]，allp[0].m = m0")])])]),t._v(" "),e("blockquote",[e("ol",{attrs:{start:"4"}},[e("li",[t._v("把除了 allp[0] 之外的所有 p 放入到全局变量 sched 的 pidle 空闲队列之中")])])]),t._v(" "),e("p",[t._v("说明一下，最后一步，代码里是将所有空闲的 P 放入到调度器的全局空闲队列；对于非空闲的 P（本地队列里有 G 待执行），则是生成一个 P 链表，返回给 procresize 函数的调用者。")]),t._v(" "),e("p",[t._v("最后我们将 allp 和 allm 都添加到图上：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/64071128-97cd6000-cca5-11e9-95a9-344f2a0a6474.png",alt:"g0-p0-m0"}})]),t._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[t._v("【阿波张 goroutine 调度器初始化】https://mp.weixin.qq.com/s/W9D4Sl-6jYfcpczzdPfByQ")])])}),[],!1,null,null,null);n.default=s.exports}}]);