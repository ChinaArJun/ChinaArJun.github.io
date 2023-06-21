(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{1176:function(e,t,n){"use strict";n.r(t);var a=n(44),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("code",[e._v("interface")]),e._v("，它是 Go 语言实现抽象的一个非常强大的工具。当向接口变量赋予一个实体类型的时候，接口会存储实体的类型信息，反射就是通过接口的类型信息实现的，反射建立在类型的基础上。")]),e._v(" "),n("p",[e._v("Go 语言在 reflect 包里定义了各种类型，实现了反射的各种函数，通过它们可以在运行时检测类型的信息、改变类型的值。")]),e._v(" "),n("h1",{attrs:{id:"types-和-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#types-和-interface"}},[e._v("#")]),e._v(" types 和 interface")]),e._v(" "),n("p",[e._v("Go 语言中，每个变量都有一个静态类型，在编译阶段就确定了的，比如 "),n("code",[e._v("int, float64, []int")]),e._v(" 等等。注意，这个类型是声明时候的类型，不是底层数据类型。")]),e._v(" "),n("p",[e._v("Go 官方博客里就举了一个例子：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type MyInt int\n\nvar i int\nvar j MyInt\n")])])]),n("p",[e._v("尽管 i，j 的底层类型都是 int，但我们知道，他们是不同的静态类型，除非进行类型转换，否则，i 和 j 不能同时出现在等号两侧。j 的静态类型就是 "),n("code",[e._v("MyInt")]),e._v("。")]),e._v(" "),n("p",[e._v("反射主要与 interface{} 类型相关。关于 interface 的底层结构，可以参考前面有关 interface 章节的内容，这里复习一下。")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type iface struct {\n\ttab  *itab\n\tdata unsafe.Pointer\n}\n\ntype itab struct {\n\tinter  *interfacetype\n\t_type  *_type\n\tlink   *itab\n\thash   uint32\n\tbad    bool\n\tinhash bool\n\tunused [2]byte\n\tfun    [1]uintptr\n}\n")])])]),n("p",[e._v("其中 "),n("code",[e._v("itab")]),e._v(" 由具体类型 "),n("code",[e._v("_type")]),e._v(" 以及 "),n("code",[e._v("interfacetype")]),e._v(" 组成。"),n("code",[e._v("_type")]),e._v(" 表示具体类型，而 "),n("code",[e._v("interfacetype")]),e._v(" 则表示具体类型实现的接口类型。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/56564826-82527600-65e1-11e9-956d-d98a212bc863.png",alt:"iface 结构体全景"}})]),e._v(" "),n("p",[e._v("实际上，iface 描述的是非空接口，它包含方法；与之相对的是 "),n("code",[e._v("eface")]),e._v("，描述的是空接口，不包含任何方法，Go 语言里有的类型都 "),n("code",[e._v("“实现了”")]),e._v(" 空接口。")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type eface struct {\n    _type *_type\n    data  unsafe.Pointer\n}\n")])])]),n("p",[e._v("相比 "),n("code",[e._v("iface")]),e._v("，"),n("code",[e._v("eface")]),e._v(" 就比较简单了。只维护了一个 "),n("code",[e._v("_type")]),e._v(" 字段，表示空接口所承载的具体的实体类型。"),n("code",[e._v("data")]),e._v(" 描述了具体的值。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/56565105-318f4d00-65e2-11e9-96bd-4b2e192791dc.png",alt:"eface 结构体全景"}})]),e._v(" "),n("p",[e._v("还是用 Go 官方关于反射的博客里的例子，当然，我会用图形来详细解释，结合两者来看会更清楚。顺便提一下，搞技术的不要害怕英文资料，要想成为技术专家，读英文原始资料是技术提高的一条必经之路。")]),e._v(" "),n("p",[e._v("先明确一点：接口变量可以存储任何实现了接口定义的所有方法的变量。")]),e._v(" "),n("p",[e._v("Go 语言中最常见的就是 "),n("code",[e._v("Reader")]),e._v(" 和 "),n("code",[e._v("Writer")]),e._v(" 接口：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type Reader interface {\n    Read(p []byte) (n int, err error)\n}\n\ntype Writer interface {\n    Write(p []byte) (n int, err error)\n}\n")])])]),n("p",[e._v("接下来，就是接口之间的各种转换和赋值了：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('var r io.Reader\ntty, err := os.OpenFile("/Users/qcrao/Desktop/test", os.O_RDWR, 0)\nif err != nil {\n    return nil, err\n}\nr = tty\n')])])]),n("p",[e._v("首先声明 "),n("code",[e._v("r")]),e._v(" 的类型是 "),n("code",[e._v("io.Reader")]),e._v("，注意，这是 "),n("code",[e._v("r")]),e._v(" 的静态类型，此时它的动态类型为 "),n("code",[e._v("nil")]),e._v("，并且它的动态值也是 "),n("code",[e._v("nil")]),e._v("。")]),e._v(" "),n("p",[e._v("之后，"),n("code",[e._v("r = tty")]),e._v(" 这一语句，将 "),n("code",[e._v("r")]),e._v(" 的动态类型变成 "),n("code",[e._v("*os.File")]),e._v("，动态值则变成非空，表示打开的文件对象。这时，r 可以用"),n("code",[e._v("<value, type>")]),e._v("对来表示为： "),n("code",[e._v("<tty, *os.File>")]),e._v("。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/56844299-b29b5c80-68e0-11e9-8211-d227448806b7.png",alt:"r=tty"}})]),e._v(" "),n("p",[e._v("注意看上图，此时虽然 "),n("code",[e._v("fun")]),e._v(" 所指向的函数只有一个 "),n("code",[e._v("Read")]),e._v(" 函数，其实 "),n("code",[e._v("*os.File")]),e._v(" 还包含 "),n("code",[e._v("Write")]),e._v(" 函数，也就是说 "),n("code",[e._v("*os.File")]),e._v(" 其实还实现了 "),n("code",[e._v("io.Writer")]),e._v(" 接口。因此下面的断言语句可以执行：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var w io.Writer\nw = r.(io.Writer)\n")])])]),n("p",[e._v("之所以用断言，而不能直接赋值，是因为 "),n("code",[e._v("r")]),e._v(" 的静态类型是 "),n("code",[e._v("io.Reader")]),e._v("，并没有实现 "),n("code",[e._v("io.Writer")]),e._v(" 接口。断言能否成功，看 "),n("code",[e._v("r")]),e._v(" 的动态类型是否符合要求。")]),e._v(" "),n("p",[e._v("这样，w 也可以表示成 "),n("code",[e._v("<tty, *os.File>")]),e._v("，仅管它和 "),n("code",[e._v("r")]),e._v(" 一样，但是 w 可调用的函数取决于它的静态类型 "),n("code",[e._v("io.Writer")]),e._v("，也就是说它只能有这样的调用形式： "),n("code",[e._v("w.Write()")]),e._v(" 。"),n("code",[e._v("w")]),e._v(" 的内存形式如下图：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/57341967-09215a00-716f-11e9-99cc-cfaa0f312b54.png",alt:"w = r.(io.Writer)"}})]),e._v(" "),n("p",[e._v("和 "),n("code",[e._v("r")]),e._v(" 相比，仅仅是 "),n("code",[e._v("fun")]),e._v(" 对应的函数变了："),n("code",[e._v("Read -> Write")]),e._v("。")]),e._v(" "),n("p",[e._v("最后，再来一个赋值：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var empty interface{}\nempty = w\n")])])]),n("p",[e._v("由于 "),n("code",[e._v("empty")]),e._v(" 是一个空接口，因此所有的类型都实现了它，w 可以直接赋给它，不需要执行断言操作。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/56844669-9b5f6d80-68e6-11e9-8a31-8d38951c7742.png",alt:"empty=w"}})]),e._v(" "),n("p",[e._v("从上面的三张图可以看到，interface 包含三部分信息："),n("code",[e._v("_type")]),e._v(" 是类型信息，"),n("code",[e._v("*data")]),e._v(" 指向实际类型的实际值，"),n("code",[e._v("itab")]),e._v(" 包含实际类型的信息，包括大小、包路径，还包含绑定在类型上的各种方法（图上没有画出方法），补充一下关于 os.File 结构体的图：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/56946658-4bd6a700-6b5d-11e9-9a3d-0e781957be31.png",alt:"struct_type"}})]),e._v(" "),n("p",[e._v("这一节的最后，展示一个技巧：")]),e._v(" "),n("p",[e._v("先参考源码，分别定义一个"),n("code",[e._v("“伪装”")]),e._v("的 iface 和 eface 结构体。")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type iface struct {\n\ttab  *itab\n\tdata unsafe.Pointer\n}\ntype itab struct {\n\tinter uintptr\n\t_type uintptr\n\tlink uintptr\n\thash  uint32\n\t_     [4]byte\n\tfun   [1]uintptr\n}\n\ntype eface struct {\n\t_type uintptr\n\tdata unsafe.Pointer\n}\n")])])]),n("p",[e._v("接着，将接口变量占据的内存内容强制解释成上面定义的类型，再打印出来：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package main\n\nimport (\n\t"os"\n\t"fmt"\n\t"io"\n\t"unsafe"\n)\n\nfunc main() {\n\tvar r io.Reader\n\tfmt.Printf("initial r: %T, %v\\n", r, r)\n\n\ttty, _ := os.OpenFile("/Users/qcrao/Desktop/test", os.O_RDWR, 0)\n\tfmt.Printf("tty: %T, %v\\n", tty, tty)\n\n\t// 给 r 赋值\n\tr = tty\n\tfmt.Printf("r: %T, %v\\n", r, r)\n\n\trIface := (*iface)(unsafe.Pointer(&r))\n\tfmt.Printf("r: iface.tab._type = %#x, iface.data = %#x\\n", rIface.tab._type, rIface.data)\n\n\t// 给 w 赋值\n\tvar w io.Writer\n\tw = r.(io.Writer)\n\tfmt.Printf("w: %T, %v\\n", w, w)\n\n\twIface := (*iface)(unsafe.Pointer(&w))\n\tfmt.Printf("w: iface.tab._type = %#x, iface.data = %#x\\n", wIface.tab._type, wIface.data)\n\n\t// 给 empty 赋值\n\tvar empty interface{}\n\tempty = w\n\tfmt.Printf("empty: %T, %v\\n", empty, empty)\n\n\temptyEface := (*eface)(unsafe.Pointer(&empty))\n\tfmt.Printf("empty: eface._type = %#x, eface.data = %#x\\n", emptyEface._type, emptyEface.data)\n}\n')])])]),n("p",[e._v("运行结果：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("initial r: <nil>, <nil>\ntty: *os.File, &{0xc4200820f0}\nr: *os.File, &{0xc4200820f0}\nr: iface.tab._type = 0x10bfcc0, iface.data = 0xc420080020\nw: *os.File, &{0xc4200820f0}\nw: iface.tab._type = 0x10bfcc0, iface.data = 0xc420080020\nempty: *os.File, &{0xc4200820f0}\nempty: eface._type = 0x10bfcc0, eface.data = 0xc420080020\n")])])]),n("p",[n("code",[e._v("r，w，empty")]),e._v(" 的动态类型和动态值都一样。不再详细解释了，结合前面的图可以看得非常清晰。")]),e._v(" "),n("h1",{attrs:{id:"反射的基本函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反射的基本函数"}},[e._v("#")]),e._v(" 反射的基本函数")]),e._v(" "),n("p",[e._v("reflect 包里定义了一个接口和一个结构体，即 "),n("code",[e._v("reflect.Type")]),e._v(" 和 "),n("code",[e._v("reflect.Value")]),e._v("，它们提供很多函数来获取存储在接口里的类型信息。")]),e._v(" "),n("p",[n("code",[e._v("reflect.Type")]),e._v(" 主要提供关于类型相关的信息，所以它和 "),n("code",[e._v("_type")]),e._v(" 关联比较紧密；"),n("code",[e._v("reflect.Value")]),e._v(" 则结合 "),n("code",[e._v("_type")]),e._v(" 和 "),n("code",[e._v("data")]),e._v(" 两者，因此程序员可以获取甚至改变类型的值。")]),e._v(" "),n("p",[e._v("reflect 包中提供了两个基础的关于反射的函数来获取上述的接口和结构体：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func TypeOf(i interface{}) Type \nfunc ValueOf(i interface{}) Value\n")])])]),n("p",[n("code",[e._v("TypeOf")]),e._v(" 函数用来提取一个接口中值的类型信息。由于它的输入参数是一个空的 "),n("code",[e._v("interface{}")]),e._v("，调用此函数时，实参会先被转化为 "),n("code",[e._v("interface{}")]),e._v("类型。这样，实参的类型信息、方法集、值信息都存储到 "),n("code",[e._v("interface{}")]),e._v(" 变量里了。")]),e._v(" "),n("p",[e._v("看下源码：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func TypeOf(i interface{}) Type {\n\teface := *(*emptyInterface)(unsafe.Pointer(&i))\n\treturn toType(eface.typ)\n}\n")])])]),n("p",[e._v("这里的 "),n("code",[e._v("emptyInterface")]),e._v(" 和上面提到的 "),n("code",[e._v("eface")]),e._v(" 是一回事（字段名略有差异，字段是相同的），并且在不同的源码包：前者在 "),n("code",[e._v("reflect")]),e._v(" 包，后者在 "),n("code",[e._v("runtime")]),e._v(" 包。 "),n("code",[e._v("eface.typ")]),e._v(" 就是动态类型。")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type emptyInterface struct {\n\ttyp  *rtype\n\tword unsafe.Pointer\n}\n")])])]),n("p",[e._v("至于 "),n("code",[e._v("toType")]),e._v(" 函数，只是做了一个类型转换：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func toType(t *rtype) Type {\n\tif t == nil {\n\t\treturn nil\n\t}\n\treturn t\n}\n")])])]),n("p",[e._v("注意，返回值 "),n("code",[e._v("Type")]),e._v(" 实际上是一个接口，定义了很多方法，用来获取类型相关的各种信息，而 "),n("code",[e._v("*rtype")]),e._v(" 实现了 "),n("code",[e._v("Type")]),e._v(" 接口。")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type Type interface {\n    // 所有的类型都可以调用下面这些函数\n\n\t// 此类型的变量对齐后所占用的字节数\n\tAlign() int\n\t\n\t// 如果是 struct 的字段，对齐后占用的字节数\n\tFieldAlign() int\n\n\t// 返回类型方法集里的第 `i` (传入的参数)个方法\n\tMethod(int) Method\n\n\t// 通过名称获取方法\n\tMethodByName(string) (Method, bool)\n\n\t// 获取类型方法集里导出的方法个数\n\tNumMethod() int\n\n\t// 类型名称\n\tName() string\n\n\t// 返回类型所在的路径，如：encoding/base64\n\tPkgPath() string\n\n\t// 返回类型的大小，和 unsafe.Sizeof 功能类似\n\tSize() uintptr\n\n\t// 返回类型的字符串表示形式\n\tString() string\n\n\t// 返回类型的类型值\n\tKind() Kind\n\n\t// 类型是否实现了接口 u\n\tImplements(u Type) bool\n\n\t// 是否可以赋值给 u\n\tAssignableTo(u Type) bool\n\n\t// 是否可以类型转换成 u\n\tConvertibleTo(u Type) bool\n\n\t// 类型是否可以比较\n\tComparable() bool\n\n\t// 下面这些函数只有特定类型可以调用\n\t// 如：Key, Elem 两个方法就只能是 Map 类型才能调用\n\t\n\t// 类型所占据的位数\n\tBits() int\n\n\t// 返回通道的方向，只能是 chan 类型调用\n\tChanDir() ChanDir\n\n\t// 返回类型是否是可变参数，只能是 func 类型调用\n\t// 比如 t 是类型 func(x int, y ... float64)\n\t// 那么 t.IsVariadic() == true\n\tIsVariadic() bool\n\n\t// 返回内部子元素类型，只能由类型 Array, Chan, Map, Ptr, or Slice 调用\n\tElem() Type\n\n\t// 返回结构体类型的第 i 个字段，只能是结构体类型调用\n\t// 如果 i 超过了总字段数，就会 panic\n\tField(i int) StructField\n\n\t// 返回嵌套的结构体的字段\n\tFieldByIndex(index []int) StructField\n\n\t// 通过字段名称获取字段\n\tFieldByName(name string) (StructField, bool)\n\n\t// FieldByNameFunc returns the struct field with a name\n\t// 返回名称符合 func 函数的字段\n\tFieldByNameFunc(match func(string) bool) (StructField, bool)\n\n\t// 获取函数类型的第 i 个参数的类型\n\tIn(i int) Type\n\n\t// 返回 map 的 key 类型，只能由类型 map 调用\n\tKey() Type\n\n\t// 返回 Array 的长度，只能由类型 Array 调用\n\tLen() int\n\n\t// 返回类型字段的数量，只能由类型 Struct 调用\n\tNumField() int\n\n\t// 返回函数类型的输入参数个数\n\tNumIn() int\n\n\t// 返回函数类型的返回值个数\n\tNumOut() int\n\n\t// 返回函数类型的第 i 个值的类型\n\tOut(i int) Type\n\n    // 返回类型结构体的相同部分\n\tcommon() *rtype\n\t\n\t// 返回类型结构体的不同部分\n\tuncommon() *uncommonType\n}\n")])])]),n("p",[e._v("可见 "),n("code",[e._v("Type")]),e._v(" 定义了非常多的方法，通过它们可以获取类型的一切信息，大家一定要完整的过一遍上面所有的方法。")]),e._v(" "),n("p",[e._v("注意到 "),n("code",[e._v("Type")]),e._v(" 方法集的倒数第二个方法 "),n("code",[e._v("common")]),e._v("\n返回的 "),n("code",[e._v("rtype")]),e._v("类型，它和上一篇文章讲到的 "),n("code",[e._v("_type")]),e._v(" 是一回事，而且源代码里也注释了：两边要保持同步：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" // rtype must be kept in sync with ../runtime/type.go:/^type._type.\n")])])]),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type rtype struct {\n\tsize       uintptr\n\tptrdata    uintptr\n\thash       uint32\n\ttflag      tflag\n\talign      uint8\n\tfieldAlign uint8\n\tkind       uint8\n\talg        *typeAlg\n\tgcdata     *byte\n\tstr        nameOff\n\tptrToThis  typeOff\n}\n")])])]),n("p",[e._v("所有的类型都会包含 "),n("code",[e._v("rtype")]),e._v(" 这个字段，表示各种类型的公共信息；另外，不同类型包含自己的一些独特的部分。")]),e._v(" "),n("p",[e._v("比如下面的 "),n("code",[e._v("arrayType")]),e._v(" 和 "),n("code",[e._v("chanType")]),e._v(" 都包含 "),n("code",[e._v("rytpe")]),e._v("，而前者还包含 slice，len 等和数组相关的信息；后者则包含 "),n("code",[e._v("dir")]),e._v(" 表示通道方向的信息。")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// arrayType represents a fixed array type.\ntype arrayType struct {\n\trtype `reflect:"array"`\n\telem  *rtype // array element type\n\tslice *rtype // slice type\n\tlen   uintptr\n}\n\n// chanType represents a channel type.\ntype chanType struct {\n\trtype `reflect:"chan"`\n\telem  *rtype  // channel element type\n\tdir   uintptr // channel direction (ChanDir)\n}\n')])])]),n("p",[e._v("注意到，"),n("code",[e._v("Type")]),e._v(" 接口实现了 "),n("code",[e._v("String()")]),e._v(" 函数，满足 "),n("code",[e._v("fmt.Stringer")]),e._v(" 接口，因此使用 "),n("code",[e._v("fmt.Println")]),e._v(" 打印的时候，输出的是 "),n("code",[e._v("String()")]),e._v(" 的结果。另外，"),n("code",[e._v("fmt.Printf()")]),e._v(" 函数，如果使用 "),n("code",[e._v("%T")]),e._v(" 来作为格式参数，输出的是 "),n("code",[e._v("reflect.TypeOf")]),e._v(" 的结果，也就是动态类型。例如：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('fmt.Printf("%T", 3) // int\n')])])]),n("hr"),e._v(" "),n("p",[e._v("讲完了 "),n("code",[e._v("TypeOf")]),e._v(" 函数，再来看一下 "),n("code",[e._v("ValueOf")]),e._v(" 函数。返回值 "),n("code",[e._v("reflect.Value")]),e._v(" 表示 "),n("code",[e._v("interface{}")]),e._v(" 里存储的实际变量，它能提供实际变量的各种信息。相关的方法常常是需要结合类型信息和值信息。例如，如果要提取一个结构体的字段信息，那就需要用到 _type (具体到这里是指 structType) 类型持有的关于结构体的字段信息、偏移信息，以及 "),n("code",[e._v("*data")]),e._v(" 所指向的内容 —— 结构体的实际值。")]),e._v(" "),n("p",[e._v("源码如下：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func ValueOf(i interface{}) Value {\n\tif i == nil {\n\t\treturn Value{}\n\t}\n\t\n   // ……\n\treturn unpackEface(i)\n}\n\n// 分解 eface\nfunc unpackEface(i interface{}) Value {\n\te := (*emptyInterface)(unsafe.Pointer(&i))\n\n\tt := e.typ\n\tif t == nil {\n\t\treturn Value{}\n\t}\n\t\n\tf := flag(t.Kind())\n\tif ifaceIndir(t) {\n\t\tf |= flagIndir\n\t}\n\treturn Value{t, e.word, f}\n}\n")])])]),n("p",[e._v("从源码看，比较简单：将先将 "),n("code",[e._v("i")]),e._v(" 转换成 "),n("code",[e._v("*emptyInterface")]),e._v(" 类型， 再将它的 "),n("code",[e._v("typ")]),e._v(" 字段和 "),n("code",[e._v("word")]),e._v(" 字段以及一个标志位字段组装成一个 "),n("code",[e._v("Value")]),e._v(" 结构体，而这就是 "),n("code",[e._v("ValueOf")]),e._v(" 函数的返回值，它包含类型结构体指针、真实数据的地址、标志位。")]),e._v(" "),n("p",[e._v("Value 结构体定义了很多方法，通过这些方法可以直接操作 Value 字段 ptr 所指向的实际数据：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 设置切片的 len 字段，如果类型不是切片，就会panic\n func (v Value) SetLen(n int)\n \n // 设置切片的 cap 字段\n func (v Value) SetCap(n int)\n \n // 设置字典的 kv\n func (v Value) SetMapIndex(key, val Value)\n\n // 返回切片、字符串、数组的索引 i 处的值\n func (v Value) Index(i int) Value\n \n // 根据名称获取结构体的内部字段值\n func (v Value) FieldByName(name string) Value\n \n // ……\n")])])]),n("p",[n("code",[e._v("Value")]),e._v(" 字段还有很多其他的方法。例如：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 用来获取 int 类型的值\nfunc (v Value) Int() int64\n\n// 用来获取结构体字段（成员）数量\nfunc (v Value) NumField() int\n\n// 尝试向通道发送数据（不会阻塞）\nfunc (v Value) TrySend(x reflect.Value) bool\n\n// 通过参数列表 in 调用 v 值所代表的函数（或方法\nfunc (v Value) Call(in []Value) (r []Value) \n\n// 调用变参长度可变的函数\nfunc (v Value) CallSlice(in []Value) []Value \n")])])]),n("p",[e._v("不一一列举了，反正是非常多。可以去 "),n("code",[e._v("src/reflect/value.go")]),e._v(" 去看看源码，搜索 "),n("code",[e._v("func (v Value)")]),e._v(" 就能看到。")]),e._v(" "),n("p",[e._v("另外，通过 "),n("code",[e._v("Type()")]),e._v(" 方法和 "),n("code",[e._v("Interface()")]),e._v(" 方法可以打通 "),n("code",[e._v("interface")]),e._v("、"),n("code",[e._v("Type")]),e._v("、"),n("code",[e._v("Value")]),e._v(" 三者。Type() 方法也可以返回变量的类型信息，与 reflect.TypeOf() 函数等价。Interface() 方法可以将 Value 还原成原来的 interface。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/57130652-bb060280-6dcc-11e9-9c63-6e2bc4e33509.png",alt:"三者关系"}})]),e._v(" "),n("p",[e._v("总结一下："),n("code",[e._v("TypeOf()")]),e._v(" 函数返回一个接口，这个接口定义了一系列方法，利用这些方法可以获取关于类型的所有信息； "),n("code",[e._v("ValueOf()")]),e._v(" 函数返回一个结构体变量，包含类型信息以及实际值。")]),e._v(" "),n("p",[e._v("用一张图来串一下：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/56848267-6f111480-6919-11e9-826f-a809093d17ea.png",alt:"value rtype"}})]),e._v(" "),n("p",[e._v("上图中，"),n("code",[e._v("rtye")]),e._v(" 实现了 "),n("code",[e._v("Type")]),e._v(" 接口，是所有类型的公共部分。emptyface 结构体和 eface 其实是一个东西，而 rtype 其实和 _type 是一个东西，只是一些字段稍微有点差别，比如 emptyface 的 word 字段和 eface 的 data 字段名称不同，但是数据型是一样的。")]),e._v(" "),n("h1",{attrs:{id:"反射的三大定律"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反射的三大定律"}},[e._v("#")]),e._v(" 反射的三大定律")]),e._v(" "),n("p",[e._v("根据 Go 官方关于反射的博客，反射有三大定律：")]),e._v(" "),n("blockquote",[n("ol",[n("li",[e._v("Reflection goes from interface value to reflection object.")])])]),e._v(" "),n("blockquote",[n("ol",{attrs:{start:"2"}},[n("li",[e._v("Reflection goes from reflection object to interface value.")])])]),e._v(" "),n("blockquote",[n("ol",{attrs:{start:"3"}},[n("li",[e._v("To modify a reflection object, the value must be settable.")])])]),e._v(" "),n("p",[e._v("第一条是最基本的：反射是一种检测存储在 "),n("code",[e._v("interface")]),e._v(" 中的类型和值机制。这可以通过 "),n("code",[e._v("TypeOf")]),e._v(" 函数和 "),n("code",[e._v("ValueOf")]),e._v(" 函数得到。")]),e._v(" "),n("p",[e._v("第二条实际上和第一条是相反的机制，它将 "),n("code",[e._v("ValueOf")]),e._v(" 的返回值通过 "),n("code",[e._v("Interface()")]),e._v(" 函数反向转变成 "),n("code",[e._v("interface")]),e._v(" 变量。")]),e._v(" "),n("p",[e._v("前两条就是说 "),n("code",[e._v("接口型变量")]),e._v(" 和 "),n("code",[e._v("反射类型对象")]),e._v(" 可以相互转化，反射类型对象实际上就是指的前面说的 "),n("code",[e._v("reflect.Type")]),e._v(" 和 "),n("code",[e._v("reflect.Value")]),e._v("。")]),e._v(" "),n("p",[e._v("第三条不太好懂：如果需要操作一个反射变量，那么它必须是可设置的。反射变量可设置的本质是它存储了原变量本身，这样对反射变量的操作，就会反映到原变量本身；反之，如果反射变量不能代表原变量，那么操作了反射变量，不会对原变量产生任何影响，这会给使用者带来疑惑。所以第二种情况在语言层面是不被允许的。")]),e._v(" "),n("p",[e._v("举一个经典例子：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var x float64 = 3.4\nv := reflect.ValueOf(x)\nv.SetFloat(7.1) // Error: will panic.\n")])])]),n("p",[e._v("执行上面的代码会产生 panic，原因是反射变量 "),n("code",[e._v("v")]),e._v(" 不能代表 "),n("code",[e._v("x")]),e._v(" 本身，为什么？因为调用 "),n("code",[e._v("reflect.ValueOf(x)")]),e._v(" 这一行代码的时候，传入的参数在函数内部只是一个拷贝，是值传递，所以 "),n("code",[e._v("v")]),e._v(" 代表的只是 "),n("code",[e._v("x")]),e._v(" 的一个拷贝，因此对 "),n("code",[e._v("v")]),e._v(" 进行操作是被禁止的。")]),e._v(" "),n("p",[e._v("可设置是反射变量 "),n("code",[e._v("Value")]),e._v(" 的一个性质，但不是所有的 "),n("code",[e._v("Value")]),e._v(" 都是可被设置的。")]),e._v(" "),n("p",[e._v("就像在一般的函数里那样，当我们想改变传入的变量时，使用指针就可以解决了。")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('var x float64 = 3.4\np := reflect.ValueOf(&x)\nfmt.Println("type of p:", p.Type())\nfmt.Println("settability of p:", p.CanSet())\n')])])]),n("p",[e._v("输出是这样的：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type of p: *float64\nsettability of p: false\n")])])]),n("p",[n("code",[e._v("p")]),e._v(" 还不是代表 "),n("code",[e._v("x")]),e._v("，"),n("code",[e._v("p.Elem()")]),e._v(" 才真正代表 "),n("code",[e._v("x")]),e._v("，这样就可以真正操作 "),n("code",[e._v("x")]),e._v(" 了：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("v := p.Elem()\nv.SetFloat(7.1)\nfmt.Println(v.Interface()) // 7.1\nfmt.Println(x) // 7.1\n")])])]),n("p",[e._v("关于第三条，记住一句话：如果想要操作原变量，反射变量 "),n("code",[e._v("Value")]),e._v(" 必须要 hold 住原变量的地址才行。")])])}),[],!1,null,null,null);t.default=v.exports}}]);