(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1042:function(t,s,a){"use strict";a.r(s);var n=a(44),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"day07课上笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#day07课上笔记"}},[t._v("#")]),t._v(" day07课上笔记")]),t._v(" "),n("h1",{attrs:{id:"内容回顾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容回顾"}},[t._v("#")]),t._v(" 内容回顾")]),t._v(" "),n("h2",{attrs:{id:"time"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#time"}},[t._v("#")]),t._v(" time")]),t._v(" "),n("p",[n("code",[t._v("2006-01-02 15:04:05.000")])]),t._v(" "),n("h3",{attrs:{id:"时间类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间类型"}},[t._v("#")]),t._v(" 时间类型")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("time.Time")]),t._v("  : "),n("code",[t._v("time.Now()")])]),t._v(" "),n("li",[t._v("时间戳：\n"),n("ul",[n("li",[n("code",[t._v("time.Now().Unix()")]),t._v(" ：1970.1.1到现在的秒数")]),t._v(" "),n("li",[n("code",[t._v("time.Now().UnixNano()")]),t._v(" :1970.1.1到现在的纳秒数")])])])]),t._v(" "),n("h3",{attrs:{id:"时间间隔类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间间隔类型"}},[t._v("#")]),t._v(" 时间间隔类型")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("time.Duration")]),t._v(":  时间间隔类型，\n"),n("ul",[n("li",[n("code",[t._v("time.Second")])])])])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tNanosecond  Duration "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\tMicrosecond          "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Nanosecond\n\tMillisecond          "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Microsecond\n\tSecond               "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Millisecond\n\tMinute               "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Second\n\tHour                 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Minute\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"时间操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间操作"}},[t._v("#")]),t._v(" 时间操作")]),t._v(" "),n("p",[t._v("时间对象+/-一个时间间隔对象")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now + 24小时")]),t._v("\nfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hour"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sub 两个时间相减")]),t._v("\nnextYear"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2006-01-02 15:04:05"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-08-04 12:25:00"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parse time failed, err:%v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nnow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UTC")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" nextYear"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("after/before")]),t._v(" "),n("h3",{attrs:{id:"时间格式化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间格式化"}},[t._v("#")]),t._v(" 时间格式化")]),t._v(" "),n("p",[t._v("2006-01-02 15:04:05.000")]),t._v(" "),n("h3",{attrs:{id:"定时器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定时器"}},[t._v("#")]),t._v(" 定时器")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("timer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Tick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" timer "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1秒钟执行一次")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"解析字符串格式的时间-时区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解析字符串格式的时间-时区"}},[t._v("#")]),t._v(" 解析字符串格式的时间(时区)")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按照指定格式取解析一个字符串格式的时间")]),t._v("\ntime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2006-01-02 15:04:05"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-08-04 14:41:50"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按照东八区的时区和格式取解析一个字符串格式的时间")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据字符串加载时区")]),t._v("\nloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadLocation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Asia/Shanghai"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load loc failed, err:%v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按照指定时区解析时间")]),t._v("\ntimeObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseInLocation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2006-01-02 15:04:05"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-08-04 14:41:50"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parse time failed, err:%v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"日志库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志库"}},[t._v("#")]),t._v(" 日志库")]),t._v(" "),n("p",[t._v("time")]),t._v(" "),n("p",[t._v("文件操作")]),t._v(" "),n("p",[n("code",[t._v("runtime.Caller()")])]),t._v(" "),n("p",[t._v("之前学的内容的整合")]),t._v(" "),n("h2",{attrs:{id:"反射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[t._v("#")]),t._v(" 反射")]),t._v(" "),n("p",[t._v("接口类型的变量底层是分为两部分:动态类型和动态值.")]),t._v(" "),n("p",[t._v("反射的应用:"),n("code",[t._v("json")]),t._v("等数据解析\\ORM等工具...")]),t._v(" "),n("h3",{attrs:{id:"反射的两个方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反射的两个方法"}},[t._v("#")]),t._v(" 反射的两个方法:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("reflect.TypeOf()")])]),t._v(" "),n("li",[n("code",[t._v("reflect.ValueOf()")])])]),t._v(" "),n("h2",{attrs:{id:"ini解析作业"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ini解析作业"}},[t._v("#")]),t._v(" ini解析作业")]),t._v(" "),n("p",[t._v("了解原理为主。")]),t._v(" "),n("p",[t._v("详见今日课上代码"),n("code",[t._v("ini_demo")])]),t._v(" "),n("h1",{attrs:{id:"今日内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#今日内容"}},[t._v("#")]),t._v(" 今日内容")]),t._v(" "),n("h2",{attrs:{id:"strconv标准库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#strconv标准库"}},[t._v("#")]),t._v(" strconv标准库")]),t._v(" "),n("h2",{attrs:{id:"并发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#并发"}},[t._v("#")]),t._v(" 并发")]),t._v(" "),n("p",[t._v("记住并发和并行的区别")]),t._v(" "),n("h2",{attrs:{id:"goroutine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#goroutine"}},[t._v("#")]),t._v(" goroutine")]),t._v(" "),n("p",[n("code",[t._v("goroutine")]),t._v("是用户态的线程，比内核态线程更轻量级，是由Go语言的运行时(runtime)调度的。")]),t._v(" "),n("h3",{attrs:{id:"启动goroutine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动goroutine"}},[t._v("#")]),t._v(" 启动goroutine")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// goroutine")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 程序启动之后会创建一个主goroutine去执行")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启一个单独的goroutine去执行hello函数（任务）")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main函数结束了 由main函数启动的goroutine也都结束了")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"goroutine什么结束"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#goroutine什么结束"}},[t._v("#")]),t._v(" "),n("code",[t._v("goroutine")]),t._v("什么结束?")]),t._v(" "),n("p",[t._v("goroutine 对应的函数结束了，goroutine结束了。")]),t._v(" "),n("p",[n("code",[t._v("main")]),t._v("函数执行完了，由"),n("code",[t._v("main")]),t._v("函数创建的那些"),n("code",[t._v("goroutine")]),t._v("都结束了。")]),t._v(" "),n("h3",{attrs:{id:"math-rand"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#math-rand"}},[t._v("#")]),t._v(" math/rand")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\trand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Seed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnixNano")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保证每次执行的时候都有点不一样")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tr1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// int64")]),t._v("\n\t\tr2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Intn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0<= x < 10")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"goroutine调度模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#goroutine调度模型"}},[t._v("#")]),t._v(" "),n("code",[t._v("goroutine")]),t._v("调度模型")]),t._v(" "),n("p",[n("code",[t._v("GMP")])]),t._v(" "),n("p",[n("code",[t._v("M:N")]),t._v(":把m个goroutine分配给n个操作系统线程去执行.")]),t._v(" "),n("p",[t._v("goroutine初始栈的大小是2k.")]),t._v(" "),n("h2",{attrs:{id:"channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[t._v("#")]),t._v(" channel")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要指定通道中元素的类型")]),t._v("\n")])])]),n("p",[n("strong",[t._v("通道必须使用make函数初始化才能使用!!!")])]),t._v(" "),n("h3",{attrs:{id:"通道的操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通道的操作"}},[t._v("#")]),t._v(" 通道的操作")]),t._v(" "),n("p",[n("code",[t._v("<-")])]),t._v(" "),n("ol",[n("li",[t._v("发送 : "),n("code",[t._v("ch1 <- 1")])]),t._v(" "),n("li",[t._v("接收: "),n("code",[t._v("<- ch1")])]),t._v(" "),n("li",[t._v("关闭:"),n("code",[t._v("close()")])])]),t._v(" "),n("h3",{attrs:{id:"带缓冲的通道和无缓冲的通道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带缓冲的通道和无缓冲的通道"}},[t._v("#")]),t._v(" 带缓冲的通道和无缓冲的通道")]),t._v(" "),n("p",[t._v("无缓冲的通道要想发送值，必须有人接收。--》4x100接力传接棒")]),t._v(" "),n("h3",{attrs:{id:"单向通道"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单向通道"}},[t._v("#")]),t._v(" 单向通道")]),t._v(" "),n("p",[t._v("多用于函数传参，限制函数中通道的操作。")]),t._v(" "),n("h3",{attrs:{id:"work-pool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#work-pool"}},[t._v("#")]),t._v(" work pool")]),t._v(" "),n("p",[n("code",[t._v("goroutine")]),t._v("池")]),t._v(" "),n("p",[n("img",{attrs:{src:a(532),alt:"1565433376430"}})]),t._v(" "),n("h3",{attrs:{id:"select多路复用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#select多路复用"}},[t._v("#")]),t._v(" select多路复用")]),t._v(" "),n("h1",{attrs:{id:"作业"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作业"}},[t._v("#")]),t._v(" 作业")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("为了保证业务代码的执行性能将之前写的日志库改写为异步记录日志方式。")]),t._v(" "),n("p",[t._v("业务代码记日志先存放到通道中，然后起一个后台goroutine专门从通道中取日志网文件里写。")]),t._v(" "),n("ol",[n("li",[t._v("日志库中channel怎么用？")]),t._v(" "),n("li",[t._v("什么时候起后台的goroutine去写日志到文件中")])])])])])}),[],!1,null,null,null);s.default=r.exports},532:function(t,s,a){t.exports=a.p+"assets/img/1565433376430.7348ee7b.png"}}]);