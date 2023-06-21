(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{748:function(t,s,a){"use strict";a.r(s);var n=a(44),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"protocol-buffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protocol-buffer"}},[t._v("#")]),t._v(" protocol buffer")]),t._v(" "),a("blockquote",[a("p",[t._v("![1538304025110]assets/1538304025110-1548584857308.png")])]),t._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[a("strong",[t._v("Google Protocol Buffer")]),t._v(" (简称 Protobuf)是google旗下的一款轻便高效的结构化数据存储格式，平台无关、语言无关、可扩展，可用于通讯协议和数据存储等领域。所以很适合用做数据存储和作为不同应用，不同语言之间相互通信的数据交换格式，只要实现相同的协议格式即同一 proto文件被编译成不同的语言版本，加入到各自的工程中去。这样不同语言就可以解析其他语言通过 protobuf序列化的数据。目前官网提供了 C++,Python,JAVA,GO等语言的支持。google在2008年7月7号将其作为开源项目对外公布。")]),t._v(" "),a("h3",{attrs:{id:"tips："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips："}},[t._v("#")]),t._v(" "),a("strong",[t._v("tips：")])]),t._v(" "),a("ol",[a("li",[t._v("啥叫平台无关？Linux、mac和Windows都可以用，32位系统，64位系统通吃")]),t._v(" "),a("li",[t._v("啥叫语言无关？C++、Java、Python、Golang语言编写的程序都可以用，而且可以相互通信")]),t._v(" "),a("li",[t._v("那啥叫可扩展呢？就是这个数据格式可以方便的增删一部分字段啦~")]),t._v(" "),a("li",[t._v("最后，啥叫序列化啊？解释得通俗点儿就是把复杂的结构体数据按照一定的规则编码成一个字节切片")])]),t._v(" "),a("h3",{attrs:{id:"数据交换格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据交换格式"}},[t._v("#")]),t._v(" 数据交换格式")]),t._v(" "),a("p",[t._v("常用的数据交换格式有三种：")]),t._v(" "),a("ol",[a("li",[t._v("json: 一般的web项目中，最流行的主要还是 json。因为浏览器对于json 数据支持非常好，有很多内建的函数支持。")]),t._v(" "),a("li",[t._v("xml: 在 webservice 中应用最为广泛，但是相比于 json，它的数据更加冗余，因为需要成对的闭合标签。json 使用了键值对的方式，不仅压缩了一定的数据空间，同时也具有可读性。")]),t._v(" "),a("li",[t._v("protobuf: 是后起之秀，是谷歌开源的一种数据格式，适合高性能，对响应速度有要求的数据传输场景。因为 profobuf 是二进制数据格式，需要编码和解码。数据本身不具有可读性。因此只能反序列化之后得到真正可读的数据。")])]),t._v(" "),a("h4",{attrs:{id:"protobuf的优势与劣势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf的优势与劣势"}},[t._v("#")]),t._v(" protobuf的优势与劣势")]),t._v(" "),a("h4",{attrs:{id:"优势："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势："}},[t._v("#")]),t._v(" 优势：")]),t._v(" "),a("p",[t._v("1：序列化后体积相比Json和XML很小，适合网络传输")]),t._v(" "),a("p",[t._v("2：支持跨平台多语言")]),t._v(" "),a("p",[t._v("3：消息格式升级和兼容性还不错")]),t._v(" "),a("p",[t._v("4：序列化反序列化速度很快，快于Json的处理速度")]),t._v(" "),a("h4",{attrs:{id:"劣势："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#劣势："}},[t._v("#")]),t._v(" 劣势：")]),t._v(" "),a("p",[t._v("1：应用不够广(相比xml和json)")]),t._v(" "),a("p",[t._v("2：二进制格式导致可读性差")]),t._v(" "),a("p",[t._v("3：缺乏自描述")]),t._v(" "),a("h3",{attrs:{id:"protobuf环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf环境安装"}},[t._v("#")]),t._v(" protobuf环境安装")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("protobuf 编译工具安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、下载 protoBuf：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/protocolbuffers/protobuf.git\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、或者直接将压缩包拖入后解压\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" protobuf.zip \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、安装依赖库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" autoconf  automake  libtool "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("  g++  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" libffi-dev -y\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("、进入目录\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" protobuf/ \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("、自动生成configure配置文件：\n./autogen.sh \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("、配置环境：\n./configure\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("、编译源代码"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("时间比较长"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("、安装\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("、刷新共享库 （很重要的一步啊）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ldconfig \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("、成功后需要使用命令测试\nprotoc -h  \n")])])])]),t._v(" "),a("li",[a("p",[t._v("protobuf 的 go 语言插件安装")]),t._v(" "),a("p",[t._v("由于protobuf并没直接支持go语言需要我们手动安装相关插件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("获取 proto包\nGo语言的proto API接口\ngo get  -v -u github.com/golang/protobuf/proto\ngo get  -v -u github.com/golang/protobuf/protoc-gen-go\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("编译\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GOPATH")]),t._v("/src/github.com/golang/protobuf/protoc-gen-go/\ngo build\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("将生成的 protoc-gen-go可执行文件，放在/bin目录下\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" protoc-gen-go /bin/\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"protobuf语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf语法"}},[t._v("#")]),t._v(" protobuf语法")]),t._v(" "),a("p",[t._v("protobuf 通常会把用户定义的结构体类型叫做一个消息，这里我们遵循惯例，统一称为消息。protobuf 消息的定义（或者称为描述）通常都写在一个以 .proto 结尾的文件中。")]),t._v(" "),a("h4",{attrs:{id:"消息类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息类型"}},[t._v("#")]),t._v(" 消息类型")]),t._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("syntax")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proto3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定版本信息，不指定会报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后期生成go文件的包名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//message为关键字，作用为定义一种消息类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    名字")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    年龄")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("  age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    邮箱")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" emalis "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    手机")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" phones "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// repeated为关键字，作用为重复使用 一般在go语言中用切片表示")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("消息格式说明")]),t._v(" "),a("p",[t._v("消息由至少一个字段组合而成，类似于Go语言中的结构体，每个字段都有一定的格式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//注释格式 注释尽量也写在内容上方\n（字段修饰符）数据类型 字段名称 = 唯一的编号标签值;\n\n")])])]),a("ul",[a("li",[t._v("字段名称：protobuf建议以下划线命名而非驼峰式")]),t._v(" "),a("li",[t._v("唯一的编号标签：代表每个字段的一个唯一的编号标签，在同一个消息里不可以重复。这些编号标签用与在消息二进制格式中标识你的字段，并且消息一旦定义就不能更改。需要说明的是标签在1到15范围的采用一个字节进行编码，所以通常将标签1到15用于频繁发生的消息字段。编号标签大小的范围是1到229")]),t._v(" "),a("li",[t._v("注释格式：向.proto文件添加注释，可以使用C/C++/java/Go风格的双斜杠（//） 语法格式")])]),t._v(" "),a("h4",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v(".proto类型")]),t._v(" "),a("th",[t._v("Go类型")]),t._v(" "),a("th",[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("double")]),t._v(" "),a("td",[t._v("float64")]),t._v(" "),a("td",[t._v("64位浮点数")])]),t._v(" "),a("tr",[a("td",[t._v("float")]),t._v(" "),a("td",[t._v("float32")]),t._v(" "),a("td",[t._v("32位浮点数")])]),t._v(" "),a("tr",[a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("使用可变长度编码。编码负数效率低下——如果你的字段可能有负值，请改用sint32。")])]),t._v(" "),a("tr",[a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("使用可变长度编码。编码负数效率低下——如果你的字段可能有负值，请改用sint64。")])]),t._v(" "),a("tr",[a("td",[t._v("uint32")]),t._v(" "),a("td",[t._v("uint32")]),t._v(" "),a("td",[t._v("使用可变长度编码。")])]),t._v(" "),a("tr",[a("td",[t._v("uint64")]),t._v(" "),a("td",[t._v("uint64")]),t._v(" "),a("td",[t._v("使用可变长度编码。")])]),t._v(" "),a("tr",[a("td",[t._v("sint32")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("使用可变长度编码。符号整型值。这些比常规int32s编码负数更有效。")])]),t._v(" "),a("tr",[a("td",[t._v("sint64")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("使用可变长度编码。符号整型值。这些比常规int64s编码负数更有效。")])]),t._v(" "),a("tr",[a("td",[t._v("fixed32")]),t._v(" "),a("td",[t._v("uint32")]),t._v(" "),a("td",[t._v("总是四字节。如果值通常大于228，则比uint 32更有效")])]),t._v(" "),a("tr",[a("td",[t._v("fixed64")]),t._v(" "),a("td",[t._v("uint64")]),t._v(" "),a("td",[t._v("总是八字节。如果值通常大于256，则比uint64更有效")])]),t._v(" "),a("tr",[a("td",[t._v("sfixed32")]),t._v(" "),a("td",[t._v("int32")]),t._v(" "),a("td",[t._v("总是四字节。")])]),t._v(" "),a("tr",[a("td",[t._v("sfixed64")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("总是八字节。")])]),t._v(" "),a("tr",[a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("布尔类型")])]),t._v(" "),a("tr",[a("td",[t._v("string")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("字符串必须始终包含UTF - 8编码或7位ASCII文本")])]),t._v(" "),a("tr",[a("td",[t._v("bytes")]),t._v(" "),a("td",[t._v("[]byte")]),t._v(" "),a("td",[t._v("可以包含任意字节序列")])])])]),t._v(" "),a("p",[t._v("更多详情请看："),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/encoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/protocol-buffers/docs/encoding"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"结构体嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体嵌套"}},[t._v("#")]),t._v(" 结构体嵌套")]),t._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("syntax")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proto3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定版本信息，不指定会报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后期生成go文件的包名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//message为关键字，作用为定义一种消息类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    名字")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    年龄")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("  age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    邮箱")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" emali "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    手机")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" PhoneNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// repeated为关键字，作用为重复使用 一般在go语言中用切片表示")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//message为关键字，作用为定义一种消息类型可以被另外的消息类型嵌套使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneNumber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"枚举类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举类型"}},[t._v("#")]),t._v(" 枚举类型")]),t._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("syntax")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proto3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定版本信息，不指定会报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后期生成go文件的包名")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//message为关键字，作用为定义一种消息类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\tname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//姓名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("\tage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//年龄")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" emails "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//电子邮件（repeated表示字段允许重复）")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[t._v("PhoneNumber")]),t._v(" phones "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//手机号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//enum为关键字，作用为定义一种枚举类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMOBILE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    HOME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    WORK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//message为关键字，作用为定义一种消息类型可以被另外的消息类型嵌套使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PhoneNumber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[t._v("PhoneType")]),t._v(" type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"默认缺省值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认缺省值"}},[t._v("#")]),t._v(" 默认缺省值")]),t._v(" "),a("p",[t._v("当一个消息被解析的时候，如果被编码的信息不包含一个特定的元素，被解析的对象锁对应的域被设置位一个默认值，对于不同类型指定如下：")]),t._v(" "),a("ul",[a("li",[t._v("对于strings，默认是一个空string")]),t._v(" "),a("li",[t._v("对于bytes，默认是一个空的bytes")]),t._v(" "),a("li",[t._v("对于bools，默认是false")]),t._v(" "),a("li",[t._v("对于数值类型，默认是0")])]),t._v(" "),a("h3",{attrs:{id:"基本编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本编译"}},[t._v("#")]),t._v(" 基本编译")]),t._v(" "),a("p",[t._v("​\t可以通过定义好的.proto文件来生成"),a("strong",[t._v("go")]),t._v(",Java,Python,C++, Ruby, JavaNano, Objective-C,或者C# 代码，需要基于.proto文件运行protocolbuffer编译器protoc。")]),t._v(" "),a("p",[t._v("通过如下方式调用protocol编译器：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" protoc --proto_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("IMPORT_PATH --go_out"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DST_DIR path/to/file.proto\n")])])]),a("p",[t._v("其中：")]),t._v(" "),a("ol",[a("li",[t._v("--proto_path=IMPORT_PATH，IMPORT_PATH指定了 .proto 文件导包时的路径，如果忽略则默认当前目录。如果有多个目录则可以多次调用--proto_path，它们将会顺序的被访问并执行导入。")]),t._v(" "),a("li",[t._v("--go_out=DST_DIR， 指定了生成的go语言代码文件放入的文件夹")]),t._v(" "),a("li",[t._v("允许使用 "),a("code",[t._v("protoc --go_out=./ *.proto")]),t._v(" 的方式一次性编译多个 .proto 文件")]),t._v(" "),a("li",[t._v("编译时，protobuf 编译器会把 .proto 文件编译成 .pd.go 文件")])]),t._v(" "),a("p",[t._v("我们可以通过以下命令对刚写好的proto文件进行编译")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("protoc --go_out=./ *.proto\n")])])]),a("h3",{attrs:{id:"编译的时候发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译的时候发生了什么"}},[t._v("#")]),t._v(" 编译的时候发生了什么?")]),t._v(" "),a("p",[t._v("当用protocol buffer编译器来运行.proto文件时，编译器将生成所选择语言的代码，这些代码可以操作在.proto文件中定义的消息类型，包括获取、设置字段值，将消息序列化到一个输出流中，以及从一个输入流中解析消息。")]),t._v(" "),a("p",[t._v("​       对go来说，编译器会为每个消息类型生成了一个.pd.go文件。")]),t._v(" "),a("h3",{attrs:{id:"利用protobuf生成的类来编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用protobuf生成的类来编码"}},[t._v("#")]),t._v(" 利用protobuf生成的类来编码")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/golang/protobuf/proto"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"protocolbuffer_excise/pb"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tperson "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XiaoYuer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tEmails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiao_yu_er@sina.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yu_er@sina.cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tPhones"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"13113111311"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneType_MOBILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"14141444144"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneType_HOME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"19191919191"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneType_WORK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" proto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Marshal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"marshal err:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tnewdata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\terr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" proto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unmarshal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unmarshal err:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);