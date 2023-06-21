(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{1337:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"第16章-协程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第16章-协程"}},[t._v("#")]),t._v(" 第16章 协程")]),t._v(" "),n("p",[t._v("[toc]")]),t._v(" "),n("h2",{attrs:{id:"进程-vs-线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进程-vs-线程"}},[t._v("#")]),t._v(" 进程 VS 线程")]),t._v(" "),n("p",[t._v("进程和线程说明")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("是程序在操作系统中的一次执行过程，是系统进行资源分配和调度的基本单位")])]),t._v(" "),n("li",[n("p",[t._v("线程是进程的一个执行实例，是程序执行的最小单位，它是比进程更小的能独立运行的基本单位")])]),t._v(" "),n("li",[n("p",[t._v("一个进程可以创建和销毁多个线程，同一个进程中的多个线程可以并发执行")])]),t._v(" "),n("li",[n("p",[t._v("一个程序至少有一个进程，一个进程至少有一个线程")])])]),t._v(" "),n("p",[t._v("可以联想\n打开迅雷.exe  就是打开进程\n多个任务 就是多个线程**")]),t._v(" "),n("h3",{attrs:{id:"进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),n("p",[t._v("进程：一个运行的程序（代码）就是一个进程，没有运行的代码叫程序，进程是系统资源分配的最小单位，进程拥有自己独立的内存空间，所有进程间数据不共享，开销大。")]),t._v(" "),n("p",[t._v("进程：\n1、操作系统进行资源分配和调度的基本单位，多个进程之间相互独立\n2、稳定性好，如果一个进程崩溃，不影响其他进程，但是进程消耗资源大，开启的进程数量有限制")]),t._v(" "),n("p",[n("strong",[t._v("进程拥有自己独立的堆和栈，既不共享堆，亦不共享栈，进程由操作系统调度。")])]),t._v(" "),n("p",[n("code",[t._v("怎么得出来这结论的？")])]),t._v(" "),n("h4",{attrs:{id:"堆栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#堆栈"}},[t._v("#")]),t._v(" 堆栈")]),t._v(" "),n("p",[t._v("什么是堆栈？在计算机中堆栈的概念分为："),n("strong",[t._v("数据结构的堆栈和内存分配中堆栈")]),t._v("。")]),t._v(" "),n("br"),t._v("\n#### 数据结构的堆栈\n"),n("p",[t._v("堆：堆可以被看成是一棵树，如："),n("strong",[t._v("堆排序")]),t._v("。在队列中，调度程序反复提取队列中第一个作业并运行，因为实际情况中某些时间较短的任务将等待很长时间才能结束，或者某些不短小，但具有重要性的作业，同样应当具有优先权。堆即为解决此类问题设计的一种数据结构。")]),t._v(" "),n("p",[t._v("栈：一种先进后出的数据结构。")]),t._v(" "),n("p",[t._v("####内存分配中的堆和栈\n内存分配中的堆和栈\n栈（操作系统）：由操作系统自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。")]),t._v(" "),n("p",[t._v("堆（操作系统）： 一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收，分配方式倒是类似于链表。")]),t._v(" "),n("p",[t._v("堆栈缓存方式\n栈使用的是一级缓存， 他们通常都是被调用时处于存储空间中，调用完毕立即释放。\n堆则是存放在二级缓存中，生命周期由虚拟机的垃圾回收算法来决定（并不是一旦成为孤儿对象就能被回收）。所以调用这些对象的速度要相对来得低一些。")]),t._v(" "),n("h3",{attrs:{id:"线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),n("p",[t._v("线程: cpu调度执行的最小单位，也叫执行路径，不能独立存在，依赖进程存在，一个进程至少有一个线程，叫主线程，而多个线程共享内存（数据共享，共享全局变量),从而极大地提高了程序的运行效率。")]),t._v(" "),n("p",[t._v("线程：\n1、CPU进行资源分配和调度的基本单位，线程是进程的一部分，是比进程更小的能独立运行的基本单位，一个进程下的多个线程可以共享该进程的所有资源\n2、如果IO操作密集，则可以多线程运行效率高，缺点是如果一个线程崩溃，都会造成进程的崩溃")]),t._v(" "),n("p",[t._v("线程拥有自己独立的栈和共享的堆，共享堆，不共享栈，线程亦由操作系统调度(标准线程是的)。")]),t._v(" "),n("h3",{attrs:{id:"线程安全"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程安全"}},[t._v("#")]),t._v(" 线程安全")]),t._v(" "),n("p",[t._v("因为线程间共享进程中的全局变量，所以当其他线程改变了共享的变量时，可能会对本线程产生影响。")]),t._v(" "),n("p",[t._v("所谓线程安全的约束是指一个函数被多个并发线程反复调用时，要一直产生正确的结果。要保证线程安全，主要是通过加锁的方式保证共享变量的正确访问。")]),t._v(" "),n("p",[t._v("换句话说, "),n("strong",[t._v("线程安全 是在多线程的环境下, 线程安全能够保证多个线程同时执行时程序依旧运行正确, 而且要保证对于共享的数据,可以由多个线程存取,但是同一时刻只能有一个线程进行存取")]),t._v(".")]),t._v(" "),n("p",[t._v("既然,多线程环境下必须存在资源的竞争,那么如何才能保证同一时刻只有一个线程对共享资源进行存取?")]),t._v(" "),n("p",[n("code",[t._v("加锁可以保证存取操作的唯一性, 从而保证同一时刻只有一个线程对共享数据存取")]),t._v(".")]),t._v(" "),n("p",[t._v("通常加锁也有2种不同的粒度的锁:")]),t._v(" "),n("blockquote",[n("ol",[n("li",[t._v("fine-grained(所谓的"),n("strong",[t._v("细粒度")]),t._v("), 那么程序员需要自行地加,解锁来保证线程安全")]),t._v(" "),n("li",[t._v("coarse-grained(所谓的"),n("strong",[t._v("粗粒度")]),t._v("), 那么语言层面本身维护着一个全局的锁机制,用来保证线程安全")])])]),t._v(" "),n("p",[t._v("前一种方式比较典型的是 java, Jython 等, 后一种方式比较典型的是 CPython (即Python).\n至于Python中的全局锁机制,也即 "),n("code",[t._v("GIL (Global Interpreter Lock)")])]),t._v(" "),n("h3",{attrs:{id:"互斥锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#互斥锁"}},[t._v("#")]),t._v(" 互斥锁")]),t._v(" "),n("p",[t._v("每个对象都对应于一个可称为’互斥锁‘的标记，这个标记用来保证在任一时刻，只能有一个线程访问该对象。")]),t._v(" "),n("p",[t._v("同一进程中的多线程之间是共享系统资源的，")]),t._v(" "),n("p",[t._v("多个线程同时对一个对象进行操作，一个线程操作尚未结束，另一线程已经对其进行操作，导致最终结果出现错误，此时需要对被操作对象添加互斥锁，保证每个线程对该对象的操作都得到正确的结果。")]),t._v(" "),n("h2",{attrs:{id:"阻塞vs非阻塞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阻塞vs非阻塞"}},[t._v("#")]),t._v(" 阻塞VS非阻塞")]),t._v(" "),n("h3",{attrs:{id:"阻塞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#阻塞"}},[t._v("#")]),t._v(" 阻塞")]),t._v(" "),n("p",[t._v("阻塞状态指程序未得到所需计算资源时被挂起的状态。程序在等待某个操作完成期间，自身无法继续干别的事情，则称该程序在该操作上是阻塞的。")]),t._v(" "),n("p",[t._v("常见的阻塞形式有：网络 I/O 阻塞、磁盘 I/O 阻塞、用户输入阻塞等。")]),t._v(" "),n("p",[t._v("阻塞是无处不在的，包括 CPU 切换上下文时，所有的进程都无法真正干事情，它们也会被阻塞。\n如果是多核 CPU 则正在执行上下文切换操作的核不可被利用。")]),t._v(" "),n("h3",{attrs:{id:"非阻塞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞"}},[t._v("#")]),t._v(" 非阻塞")]),t._v(" "),n("p",[t._v("程序在等待某操作过程中，自身不被阻塞，可以继续运行干别的事情，则称该程序在该操作上是非阻塞的。")]),t._v(" "),n("p",[t._v("非阻塞并不是在任何程序级别、任何情况下都可以存在的。")]),t._v(" "),n("p",[t._v("仅当程序封装的级别可以囊括独立的子程序单元时，它才可能存在非阻塞状态。")]),t._v(" "),n("p",[t._v("非阻塞的存在是因为阻塞存在，正因为某个操作阻塞导致的耗时与效率低下，我们才要把它变成非阻塞的。")]),t._v(" "),n("h2",{attrs:{id:"同步vs异步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同步vs异步"}},[t._v("#")]),t._v(" 同步VS异步")]),t._v(" "),n("h3",{attrs:{id:"同步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[t._v("#")]),t._v(" 同步")]),t._v(" "),n("p",[t._v("多个任务之间有先后顺序执行，一个执行完下个才能执行")]),t._v(" "),n("h3",{attrs:{id:"异步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[t._v("#")]),t._v(" 异步")]),t._v(" "),n("p",[t._v("多个任务之间没有先后顺序，可以同时执行，有时候一个任务可能要在必要的时候获取另一个同时执行的任务的结果，这个就叫回调")]),t._v(" "),n("h2",{attrs:{id:"区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),n("p",[t._v("同步异步相对于多任务而言，阻塞非阻塞相对于代码执行而言。")]),t._v(" "),n("h2",{attrs:{id:"并发-vs并行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#并发-vs并行"}},[t._v("#")]),t._v(" 并发 VS并行")]),t._v(" "),n("p",[t._v("1、多线程程序在单核上运行，就是并发"),n("br"),t._v("\n多线程，看起来一起执行，GIL在同一时刻限制了多个线程只能有一个线程被CPU执行")]),t._v(" "),n("p",[t._v("2、多线程程序在多核上运行，就是并行\n多进程，多个进程在同一时刻可以占用多个CPU")]),t._v(" "),n("br"),t._v("\n举个例子：\n1、并发： 因为是在一个cpu上，比如有十个线程，每个线程进行10毫秒（进行轮询操作）\n从人的角度看，好像这10个线程都在运行，但是从微观上看，在某个时间点看，\n其实只有一个线程在执行，这就是并发\n"),n("p",[t._v("2.并行：因为在多个CPU上(比如10个CPU)，比如有10个线程，每个线程执行10毫秒（各自在不同CPU上执行），\n从人的角度看，好像这10个线程都在运行，但是从微观上看，在某个时间点看，\n也同时有10个线程在执行，这就是并行")]),t._v(" "),n("h2",{attrs:{id:"协程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#协程"}},[t._v("#")]),t._v(" 协程")]),t._v(" "),n("p",[t._v("协程: 是一种用户态的轻量级线程，协程的调度完全由用户控制。")]),t._v(" "),n("p",[t._v("协程和线程一样共享堆，不共享栈，协程由程序员在协程的代码里显示调度。")]),t._v(" "),n("p",[t._v("协程拥有自己的寄存器上下文和栈。")]),t._v(" "),n("p",[t._v("协程调度时，将寄存器上下文和栈保存到其他地方，在切回来的时候，恢复先前保存的寄存器上下文和栈，直接操中栈则基本没有内核切换的开销，可以不加锁的访问全局变量，所以"),n("strong",[t._v("上下文的切换非常快。")])]),t._v(" "),n("p",[t._v("简单点说协程是进程和线程的升级版,进程和线程都面临着内核态和用户态的切换问题而耗费许多切换时间,而协程就是用户自己控制切换的时机,不再需要陷入系统的内核态.")]),t._v(" "),n("p",[t._v("能够在一个线程中实现并发的概念\n能够规避在一些任务中的IO操作\n在任务的执行过程中，检测到IO就切换到其他任务\n协程在一个线程上 提高CPU的利用率\n协程相比与多线程优势  切换的效率更快")]),t._v(" "),n("p",[t._v("应用场景：\n爬虫的例子，请求过程中的IO等待")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" gevent "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" monkey\nmonkey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("patch_all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gevent\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" urllib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" urlopen\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" urlopen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ng1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.baidu.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ng2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.taobao.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ng3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.hao123.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("joinall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("g1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("运行结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("156535\n133524\n298483\n")])])]),n("p",[t._v("可以看到结果是同时显示出来的")]),t._v(" "),n("br"),t._v(" "),n("p",[n("strong",[t._v("Python里最常见的yield就是协程的思想")])]),t._v(" "),n("p",[t._v("举个例子：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("threading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        threading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nthreadA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Thread"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nthreadB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Thread"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nthreadA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nthreadB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("返回结果是：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("A\nA\nA\nB\nB\nB\nB\nB\nB\nB\nB\nB\nBA\nA\nA\nA\nA\n\nA\nA\n")])])]),n("p",[t._v("那么总共发生了 20 次切换：主线程 -> A -> B -> A -> B …")]),t._v(" "),n("p",[t._v("使用协程方式：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" greenlet\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextGreenlets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" nextGreenlets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            nextGreenlets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("chr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextGreenlets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ngreenletA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" greenlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("greenlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngreenletB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" greenlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("greenlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngreenletA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("greenletB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("返回结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("A\nB\nB\nB\nB\nB\nB\nB\nB\nB\nB\n\n")])])]),n("p",[t._v("此时发生了 2 次切换：主协程 -> A -> B")]),t._v(" "),n("p",[t._v("yield例子：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"处理了数据:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("producer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    c "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"生产了数据:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nproducer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"greenlet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#greenlet"}},[t._v("#")]),t._v(" greenlet")]),t._v(" "),n("p",[t._v("greenlet 是一个轻量级的协程实现，使用的方法简单而清晰。创建 greenlet 实例执行方法，在方法内部可通过 "),n("strong",[n("code",[t._v("greenlet.switch()")])]),t._v(" 切换至其他 greenlet 实例进行执行")]),t._v(" "),n("p",[t._v("例子：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" greenlet "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" greenlet\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eating start"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    g2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eating end"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    g2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"playing start"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    g1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"playing end"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ng1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" greenlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ng2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" greenlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("play"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ng1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("运行结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("eating start\nplaying start\neating end\nplaying end\n\n")])])]),n("h3",{attrs:{id:"gevent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gevent"}},[t._v("#")]),t._v(" gevent")]),t._v(" "),n("p",[t._v("gevent 基于 greenlet 库进行了封装，基于 libev 和 libuv 提供了高效的同步API。")]),t._v(" "),n("p",[t._v("对 greenlet 在业务开发中的不便之处，提供了很好的解决方案：")]),t._v(" "),n("p",[t._v("对于 greenlet 实例的管理，不使用树形关系进行组织，隐藏不必要的复杂性")]),t._v(" "),n("p",[t._v("因为协程还是运行在一个OS进程中，所以协程不能跑阻塞任务，否则就要将整个OS进程阻塞住了。")]),t._v(" "),n("p",[t._v("采用 monkey patching 与第三方库协作，将阻塞任务变成非阻塞，也不需要手工通过greenlet.switch() 切换；")]),t._v(" "),n("p",[t._v("例子：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gevent\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Running in foo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Explicit context switch to foo again'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Explicit context to bar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Implicit context switch back to bar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ngevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("joinall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("运行结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Running in foo\nExplicit context to bar\nExplicit context switch to foo again\nImplicit context switch back to bar\n")])])]),n("p",[t._v("通过这个例子可以看到 两个上下文通过调用 gevent.sleep()来互相切换。")]),t._v(" "),n("p",[t._v("再看一个例子：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gevent\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    Some non-deterministic task\n    """')]),t._v("\n    gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Task'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'done'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("synchronous")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asynchronous")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    threads "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spawn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    gevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("joinall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("threads"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Synchronous:'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsynchronous"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asynchronous:'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nasynchronous"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("运行结果是：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Synchronous:\nTask 1 done\nTask 2 done\nTask 3 done\nTask 4 done\nTask 5 done\nTask 6 done\nTask 7 done\nTask 8 done\nTask 9 done\nAsynchronous:\nTask 0 done\nTask 4 done\nTask 5 done\nTask 1 done\nTask 3 done\nTask 7 done\nTask 2 done\nTask 6 done\nTask 8 done\nTask 9 done\n")])])]),n("p",[t._v("在同步的情况下，任务是按顺序执行的，在执行各个任务的时候会阻塞主线程。")]),t._v(" "),n("p",[t._v("而gevent.spawn 的重要功能就是封装了greenlet里面的函数。\n初始化的greenlet放在了threads这个list里面，被传递给了 gevent.joinall 这个函数，它会阻塞当前的程序来执行所有的greenlet。")]),t._v(" "),n("p",[t._v("在异步执行的情况下，所有任务的执行顺序是完全随机的。\n每一个greenlet的都不会阻塞其他greenlet的执行。")]),t._v(" "),n("h2",{attrs:{id:"协程vs子程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#协程vs子程序"}},[t._v("#")]),t._v(" 协程VS子程序")]),t._v(" "),n("p",[n("code",[t._v("协程是为了实现单线程的i/o密集型的任务并发（通过event loop） 如果子程序的话，永远是串行的")])]),t._v(" "),n("p",[t._v("什么是子程序？")]),t._v(" "),n("p",[t._v("协程比子程序的优势在哪里？")])])}),[],!1,null,null,null);s.default=e.exports}}]);