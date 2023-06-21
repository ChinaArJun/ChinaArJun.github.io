(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{860:function(t,v,_){"use strict";_.r(v);var a=_(44),n=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_1-5-在-go-中恰到好处的内存对齐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-在-go-中恰到好处的内存对齐"}},[t._v("#")]),t._v(" 1.5 在 Go 中恰到好处的内存对齐")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.imgur.com/SyctY6Q.png",alt:"image"}})]),t._v(" "),_("h2",{attrs:{id:"问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("type Part1 struct {\n\ta bool\n\tb int32\n\tc int8\n\td int64\n\te byte\n}\n")])])]),_("p",[t._v("在开始之前，希望你计算一下 "),_("code",[t._v("Part1")]),t._v(" 共占用的大小是多少呢？")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('func main() {\n\tfmt.Printf("bool size: %d\\n", unsafe.Sizeof(bool(true)))\n\tfmt.Printf("int32 size: %d\\n", unsafe.Sizeof(int32(0)))\n\tfmt.Printf("int8 size: %d\\n", unsafe.Sizeof(int8(0)))\n\tfmt.Printf("int64 size: %d\\n", unsafe.Sizeof(int64(0)))\n\tfmt.Printf("byte size: %d\\n", unsafe.Sizeof(byte(0)))\n\tfmt.Printf("string size: %d\\n", unsafe.Sizeof("EDDYCJY"))\n}\n')])])]),_("p",[t._v("输出结果：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("bool size: 1\nint32 size: 4\nint8 size: 1\nint64 size: 8\nbyte size: 1\nstring size: 16\n")])])]),_("p",[t._v("这么一算，"),_("code",[t._v("Part1")]),t._v(" 这一个结构体的占用内存大小为 1+4+1+8+1 = 15 个字节。相信有的小伙伴是这么算的，看上去也没什么毛病")]),t._v(" "),_("p",[t._v("真实情况是怎么样的呢？我们实际调用看看，如下：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('type Part1 struct {\n\ta bool\n\tb int32\n\tc int8\n\td int64\n\te byte\n}\n\nfunc main() {\n\tpart1 := Part1{}\n\t\n\tfmt.Printf("part1 size: %d, align: %d\\n", unsafe.Sizeof(part1), unsafe.Alignof(part1))\n}\n')])])]),_("p",[t._v("输出结果：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("part1 size: 32, align: 8\n")])])]),_("p",[t._v("最终输出为占用 32 个字节。这与前面所预期的结果完全不一样。这充分地说明了先前的计算方式是错误的。为什么呢？")]),t._v(" "),_("p",[t._v("在这里要提到 “内存对齐” 这一概念，才能够用正确的姿势去计算，接下来我们详细的讲讲它是什么")]),t._v(" "),_("h2",{attrs:{id:"内存对齐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存对齐"}},[t._v("#")]),t._v(" 内存对齐")]),t._v(" "),_("p",[t._v("有的小伙伴可能会认为内存读取，就是一个简单的字节数组摆放")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.imgur.com/SZHQJK7.png",alt:"image"}})]),t._v(" "),_("p",[t._v("上图表示一个坑一个萝卜的内存读取方式。但实际上 CPU 并不会以一个一个字节去读取和写入内存。相反 CPU 读取内存是"),_("strong",[t._v("一块一块读取")]),t._v("的，块的大小可以为 2、4、6、8、16 字节等大小。块大小我们称其为"),_("strong",[t._v("内存访问粒度")]),t._v("。如下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.imgur.com/mCFZWe8.png",alt:"image"}})]),t._v(" "),_("p",[t._v("在样例中，假设访问粒度为 4。 CPU 是以每 4 个字节大小的访问粒度去读取和写入内存的。这才是正确的姿势")]),t._v(" "),_("h3",{attrs:{id:"为什么要关心对齐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要关心对齐"}},[t._v("#")]),t._v(" 为什么要关心对齐")]),t._v(" "),_("ul",[_("li",[t._v("你正在编写的代码在性能（CPU、Memory）方面有一定的要求")]),t._v(" "),_("li",[t._v("你正在处理向量方面的指令")]),t._v(" "),_("li",[t._v("某些硬件平台（ARM）体系不支持未对齐的内存访问")])]),t._v(" "),_("p",[t._v("另外作为一个工程师，你也很有必要学习这块知识点哦 😃")]),t._v(" "),_("h3",{attrs:{id:"为什么要做对齐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要做对齐"}},[t._v("#")]),t._v(" 为什么要做对齐")]),t._v(" "),_("ul",[_("li",[t._v("平台（移植性）原因：不是所有的硬件平台都能够访问任意地址上的任意数据。例如：特定的硬件平台只允许在特定地址获取特定类型的数据，否则会导致异常情况")]),t._v(" "),_("li",[t._v("性能原因：若访问未对齐的内存，将会导致 CPU 进行两次内存访问，并且要花费额外的时钟周期来处理对齐及运算。而本身就对齐的内存仅需要一次访问就可以完成读取动作")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.imgur.com/g1RxUTz.png",alt:"image"}})]),t._v(" "),_("p",[t._v("在上图中，假设从 Index 1 开始读取，将会出现很崩溃的问题。因为它的内存访问边界是不对齐的。因此 CPU 会做一些额外的处理工作。如下：")]),t._v(" "),_("ol",[_("li",[t._v("CPU "),_("strong",[t._v("首次")]),t._v("读取未对齐地址的第一个内存块，读取 0-3 字节。并移除不需要的字节 0")]),t._v(" "),_("li",[t._v("CPU "),_("strong",[t._v("再次")]),t._v("读取未对齐地址的第二个内存块，读取 4-7 字节。并移除不需要的字节 5、6、7 字节")]),t._v(" "),_("li",[t._v("合并 1-4 字节的数据")]),t._v(" "),_("li",[t._v("合并后放入寄存器")])]),t._v(" "),_("p",[t._v('从上述流程可得出，不做 “内存对齐” 是一件有点 "麻烦" 的事。因为它会增加许多耗费时间的动作')]),t._v(" "),_("p",[t._v("而假设做了内存对齐，从 Index 0 开始读取 4 个字节，只需要读取一次，也不需要额外的运算。这显然高效很多，是标准的"),_("strong",[t._v("空间换时间")]),t._v("做法")]),t._v(" "),_("h3",{attrs:{id:"默认系数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#默认系数"}},[t._v("#")]),t._v(" 默认系数")]),t._v(" "),_("p",[t._v("在不同平台上的编译器都有自己默认的 “对齐系数”，可通过预编译命令 "),_("code",[t._v("#pragma pack(n)")]),t._v(" 进行变更，n 就是代指 “对齐系数”。一般来讲，我们常用的平台的系数如下：")]),t._v(" "),_("ul",[_("li",[t._v("32 位：4")]),t._v(" "),_("li",[t._v("64 位：8")])]),t._v(" "),_("p",[t._v("另外要注意，不同硬件平台占用的大小和对齐值都可能是不一样的。因此本文的值不是唯一的，调试的时候需按本机的实际情况考虑")]),t._v(" "),_("h3",{attrs:{id:"成员对齐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#成员对齐"}},[t._v("#")]),t._v(" 成员对齐")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('func main() {\n\tfmt.Printf("bool align: %d\\n", unsafe.Alignof(bool(true)))\n\tfmt.Printf("int32 align: %d\\n", unsafe.Alignof(int32(0)))\n\tfmt.Printf("int8 align: %d\\n", unsafe.Alignof(int8(0)))\n\tfmt.Printf("int64 align: %d\\n", unsafe.Alignof(int64(0)))\n\tfmt.Printf("byte align: %d\\n", unsafe.Alignof(byte(0)))\n\tfmt.Printf("string align: %d\\n", unsafe.Alignof("EDDYCJY"))\n\tfmt.Printf("map align: %d\\n", unsafe.Alignof(map[string]string{}))\n}\n')])])]),_("p",[t._v("输出结果：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("bool align: 1\nint32 align: 4\nint8 align: 1\nint64 align: 8\nbyte align: 1\nstring align: 8\nmap align: 8\n")])])]),_("p",[t._v("在 Go 中可以调用 "),_("code",[t._v("unsafe.Alignof")]),t._v(" 来返回相应类型的对齐系数。通过观察输出结果，可得知基本都是 "),_("code",[t._v("2^n")]),t._v("，最大也不会超过 8。这是因为我手提（64 位）编译器默认对齐系数是 8，因此最大值不会超过这个数")]),t._v(" "),_("h3",{attrs:{id:"整体对齐"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#整体对齐"}},[t._v("#")]),t._v(" 整体对齐")]),t._v(" "),_("p",[t._v("在上小节中，提到了结构体中的成员变量要做字节对齐。那么想当然身为最终结果的结构体，也是需要做字节对齐的")]),t._v(" "),_("h3",{attrs:{id:"对齐规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对齐规则"}},[t._v("#")]),t._v(" 对齐规则")]),t._v(" "),_("ul",[_("li",[t._v("结构体的成员变量，第一个成员变量的偏移量为 0。往后的每个成员变量的对齐值必须为"),_("strong",[t._v("编译器默认对齐长度")]),t._v("（"),_("code",[t._v("#pragma pack(n)")]),t._v("）或"),_("strong",[t._v("当前成员变量类型的长度")]),t._v("（"),_("code",[t._v("unsafe.Sizeof")]),t._v("），取"),_("strong",[t._v("最小值作为当前类型的对齐值")]),t._v("。其偏移量必须为对齐值的整数倍")]),t._v(" "),_("li",[t._v("结构体本身，对齐值必须为"),_("strong",[t._v("编译器默认对齐长度")]),t._v("（"),_("code",[t._v("#pragma pack(n)")]),t._v("）或"),_("strong",[t._v("结构体的所有成员变量类型中的最大长度")]),t._v("，取"),_("strong",[t._v("最大数的最小整数倍")]),t._v("作为对齐值")]),t._v(" "),_("li",[t._v("结合以上两点，可得知若"),_("strong",[t._v("编译器默认对齐长度")]),t._v("（"),_("code",[t._v("#pragma pack(n)")]),t._v("）超过结构体内成员变量的类型最大长度时，默认对齐长度是没有任何意义的")])]),t._v(" "),_("h2",{attrs:{id:"分析流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析流程"}},[t._v("#")]),t._v(" 分析流程")]),t._v(" "),_("p",[t._v("接下来我们一起分析一下，“它” 到底经历了些什么，影响了 “预期” 结果")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("成员变量")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("偏移量")]),t._v(" "),_("th",[t._v("自身占用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("a")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("字节对齐")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("3")])]),t._v(" "),_("tr",[_("td",[t._v("b")]),t._v(" "),_("td",[t._v("int32")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("4")])]),t._v(" "),_("tr",[_("td",[t._v("c")]),t._v(" "),_("td",[t._v("int8")]),t._v(" "),_("td",[t._v("8")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("字节对齐")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("9")]),t._v(" "),_("td",[t._v("7")])]),t._v(" "),_("tr",[_("td",[t._v("d")]),t._v(" "),_("td",[t._v("int64")]),t._v(" "),_("td",[t._v("16")]),t._v(" "),_("td",[t._v("8")])]),t._v(" "),_("tr",[_("td",[t._v("e")]),t._v(" "),_("td",[t._v("byte")]),t._v(" "),_("td",[t._v("24")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("字节对齐")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("25")]),t._v(" "),_("td",[t._v("7")])]),t._v(" "),_("tr",[_("td",[t._v("总占用大小")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("32")])])])]),t._v(" "),_("h3",{attrs:{id:"成员对齐-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#成员对齐-2"}},[t._v("#")]),t._v(" 成员对齐")]),t._v(" "),_("ul",[_("li",[t._v("第一个成员 a\n"),_("ul",[_("li",[t._v("类型为 bool")]),t._v(" "),_("li",[t._v("大小/对齐值为 1 字节")]),t._v(" "),_("li",[t._v("初始地址，偏移量为 0。占用了第 1 位")])])]),t._v(" "),_("li",[t._v("第二个成员 b\n"),_("ul",[_("li",[t._v("类型为 int32")]),t._v(" "),_("li",[t._v("大小/对齐值为 4 字节")]),t._v(" "),_("li",[t._v("根据规则 1，其偏移量必须为 4 的整数倍。确定偏移量为 4，因此 2-4 位为 Padding。而当前数值从第 5 位开始填充，到第 8 位。如下：axxx|bbbb")])])]),t._v(" "),_("li",[t._v("第三个成员 c\n"),_("ul",[_("li",[t._v("类型为 int8")]),t._v(" "),_("li",[t._v("大小/对齐值为 1 字节")]),t._v(" "),_("li",[t._v("根据规则1，其偏移量必须为 1 的整数倍。当前偏移量为 8。不需要额外对齐，填充 1 个字节到第 9 位。如下：axxx|bbbb|c...")])])]),t._v(" "),_("li",[t._v("第四个成员 d\n"),_("ul",[_("li",[t._v("类型为 int64")]),t._v(" "),_("li",[t._v("大小/对齐值为 8 字节")]),t._v(" "),_("li",[t._v("根据规则 1，其偏移量必须为 8 的整数倍。确定偏移量为 16，因此\n9-16 位为 Padding。而当前数值从第 17 位开始写入，到第 24 位。如下：axxx|bbbb|cxxx|xxxx|dddd|dddd")])])]),t._v(" "),_("li",[t._v("第五个成员 e\n"),_("ul",[_("li",[t._v("类型为 byte")]),t._v(" "),_("li",[t._v("大小/对齐值为 1 字节")]),t._v(" "),_("li",[t._v("根据规则 1，其偏移量必须为 1 的整数倍。当前偏移量为 24。不需要额外对齐，填充 1 个字节到第 25 位。如下：axxx|bbbb|cxxx|xxxx|dddd|dddd|e...")])])])]),t._v(" "),_("h3",{attrs:{id:"整体对齐-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#整体对齐-2"}},[t._v("#")]),t._v(" 整体对齐")]),t._v(" "),_("p",[t._v("在每个成员变量进行对齐后，根据规则 2，整个结构体本身也要进行字节对齐，因为可发现它可能并不是 "),_("code",[t._v("2^n")]),t._v("，不是偶数倍。显然不符合对齐的规则")]),t._v(" "),_("p",[t._v("根据规则 2，可得出对齐值为 8。现在的偏移量为 25，不是 8 的整倍数。因此确定偏移量为 32。对结构体进行对齐")]),t._v(" "),_("h3",{attrs:{id:"结果"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),_("p",[t._v("Part1 内存布局：axxx|bbbb|cxxx|xxxx|dddd|dddd|exxx|xxxx")]),t._v(" "),_("h3",{attrs:{id:"小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),_("p",[t._v("通过本节的分析，可得知先前的 “推算” 为什么错误？")]),t._v(" "),_("p",[t._v("是因为实际内存管理并非 “一个萝卜一个坑” 的思想。而是一块一块。通过空间换时间（效率）的思想来完成这块读取、写入。另外也需要兼顾不同平台的内存操作情况")]),t._v(" "),_("h2",{attrs:{id:"巧妙的结构体"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#巧妙的结构体"}},[t._v("#")]),t._v(" 巧妙的结构体")]),t._v(" "),_("p",[t._v("在上一小节，可得知根据成员变量的类型不同，其结构体的内存会产生对齐等动作。那假设字段顺序不同，会不会有什么变化呢？我们一起来试试吧 😃")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('type Part1 struct {\n\ta bool\n\tb int32\n\tc int8\n\td int64\n\te byte\n}\n\ntype Part2 struct {\n\te byte\n\tc int8\n\ta bool\n\tb int32\n\td int64\n}\n\nfunc main() {\n\tpart1 := Part1{}\n\tpart2 := Part2{}\n\n\tfmt.Printf("part1 size: %d, align: %d\\n", unsafe.Sizeof(part1), unsafe.Alignof(part1))\n\tfmt.Printf("part2 size: %d, align: %d\\n", unsafe.Sizeof(part2), unsafe.Alignof(part2))\n}\n')])])]),_("p",[t._v("输出结果：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("part1 size: 32, align: 8\npart2 size: 16, align: 8\n")])])]),_("p",[t._v("通过结果可以惊喜的发现，只是 “简单” 对成员变量的字段顺序进行改变，就改变了结构体占用大小")]),t._v(" "),_("p",[t._v("接下来我们一起剖析一下 "),_("code",[t._v("Part2")]),t._v("，看看它的内部到底和上一位之间有什么区别，才导致了这样的结果？")]),t._v(" "),_("h3",{attrs:{id:"分析流程-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分析流程-2"}},[t._v("#")]),t._v(" 分析流程")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("成员变量")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("偏移量")]),t._v(" "),_("th",[t._v("自身占用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("e")]),t._v(" "),_("td",[t._v("byte")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("c")]),t._v(" "),_("td",[t._v("int8")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("a")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("字节对齐")]),t._v(" "),_("td",[t._v("无")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("b")]),t._v(" "),_("td",[t._v("int32")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("4")])]),t._v(" "),_("tr",[_("td",[t._v("d")]),t._v(" "),_("td",[t._v("int64")]),t._v(" "),_("td",[t._v("8")]),t._v(" "),_("td",[t._v("8")])]),t._v(" "),_("tr",[_("td",[t._v("总占用大小")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("16")])])])]),t._v(" "),_("h4",{attrs:{id:"成员对齐-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#成员对齐-3"}},[t._v("#")]),t._v(" 成员对齐")]),t._v(" "),_("ul",[_("li",[t._v("第一个成员 e\n"),_("ul",[_("li",[t._v("类型为 byte")]),t._v(" "),_("li",[t._v("大小/对齐值为 1 字节")]),t._v(" "),_("li",[t._v("初始地址，偏移量为 0。占用了第 1 位")])])]),t._v(" "),_("li",[t._v("第二个成员 c\n"),_("ul",[_("li",[t._v("类型为 int8")]),t._v(" "),_("li",[t._v("大小/对齐值为 1 字节")]),t._v(" "),_("li",[t._v("根据规则1，其偏移量必须为 1 的整数倍。当前偏移量为 2。不需要额外对齐")])])]),t._v(" "),_("li",[t._v("第三个成员 a\n"),_("ul",[_("li",[t._v("类型为 bool")]),t._v(" "),_("li",[t._v("大小/对齐值为 1 字节")]),t._v(" "),_("li",[t._v("根据规则1，其偏移量必须为 1 的整数倍。当前偏移量为 3。不需要额外对齐")])])]),t._v(" "),_("li",[t._v("第四个成员 b\n"),_("ul",[_("li",[t._v("类型为 int32")]),t._v(" "),_("li",[t._v("大小/对齐值为 4 字节")]),t._v(" "),_("li",[t._v("根据规则1，其偏移量必须为 4 的整数倍。确定偏移量为 4，因此第 3 位为 Padding。而当前数值从第 4 位开始填充，到第 8 位。如下：ecax|bbbb")])])]),t._v(" "),_("li",[t._v("第五个成员 d\n"),_("ul",[_("li",[t._v("类型为 int64")]),t._v(" "),_("li",[t._v("大小/对齐值为 8 字节")]),t._v(" "),_("li",[t._v("根据规则1，其偏移量必须为 8 的整数倍。当前偏移量为 8。不需要额外对齐，从 9-16 位填充 8 个字节。如下：ecax|bbbb|dddd|dddd")])])])]),t._v(" "),_("h4",{attrs:{id:"整体对齐-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#整体对齐-3"}},[t._v("#")]),t._v(" 整体对齐")]),t._v(" "),_("p",[t._v("符合规则 2，不需要额外对齐")]),t._v(" "),_("h4",{attrs:{id:"结果-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结果-2"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),_("p",[t._v("Part2 内存布局：ecax|bbbb|dddd|dddd")]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("通过对比 "),_("code",[t._v("Part1")]),t._v(" 和 "),_("code",[t._v("Part2")]),t._v(" 的内存布局，你会发现两者有很大的不同。如下：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Part1：axxx|bbbb|cxxx|xxxx|dddd|dddd|exxx|xxxx")])]),t._v(" "),_("li",[_("p",[t._v("Part2：ecax|bbbb|dddd|dddd")])])]),t._v(" "),_("p",[t._v("仔细一看，"),_("code",[t._v("Part1")]),t._v(" 存在许多 Padding。显然它占据了不少空间，那么 Padding 是怎么出现的呢？")]),t._v(" "),_("p",[t._v("通过本文的介绍，可得知是由于不同类型导致需要进行字节对齐，以此保证内存的访问边界")]),t._v(" "),_("p",[t._v("那么也不难理解，为什么"),_("strong",[t._v("调整结构体内成员变量的字段顺序")]),t._v("就能达到缩小结构体占用大小的疑问了，是因为巧妙地减少了 Padding 的存在。让它们更 “紧凑” 了。这一点对于加深 Go 的内存布局印象和大对象的优化非常有帮")]),t._v(" "),_("p",[t._v("当然了，没什么特殊问题，你可以不关注这一块。但你要知道这块知识点 😄")]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://en.wikipedia.org/wiki/Data_structure_alignment",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data structure alignment"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.ibm.com/developerworks/library/pa-dalign/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data alignment"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=n.exports}}]);