(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{1154:function(t,a,e){"use strict";e.r(a);var s=e(44),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("先直接来看维基百科里的定义：")]),t._v(" "),e("blockquote",[e("p",[t._v("If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.")])]),t._v(" "),e("p",[t._v("翻译过来就是：如果某个东西长得像鸭子，像鸭子一样游泳，像鸭子一样嘎嘎叫，那它就可以被看成是一只鸭子。")]),t._v(" "),e("p",[e("code",[t._v("Duck Typing")]),t._v("，鸭子类型，是动态编程语言的一种对象推断策略，它更关注对象能如何被使用，而不是对象的类型本身。Go 语言作为一门静态语言，它通过通过接口的方式完美支持鸭子类型。")]),t._v(" "),e("p",[t._v("例如，在动态语言 python 中，定义一个这样的函数：")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    coder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say_hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("当调用此函数的时候，可以传入任意类型，只要它实现了 "),e("code",[t._v("say_hello()")]),t._v(" 函数就可以。如果没有实现，运行过程中会出现错误。")]),t._v(" "),e("p",[t._v("而在静态语言如 Java, C++ 中，必须要显示地声明实现了某个接口，之后，才能用在任何需要这个接口的地方。如果你在程序中调用 "),e("code",[t._v("hello_world")]),t._v(" 函数，却传入了一个根本就没有实现 "),e("code",[t._v("say_hello()")]),t._v(" 的类型，那在编译阶段就不会通过。这也是静态语言比动态语言更安全的原因。")]),t._v(" "),e("p",[t._v("动态语言和静态语言的差别在此就有所体现。静态语言在编译期间就能发现类型不匹配的错误，不像动态语言，必须要运行到那一行代码才会报错。插一句，这也是我不喜欢用 "),e("code",[t._v("python")]),t._v(" 的一个原因。当然，静态语言要求程序员在编码阶段就要按照规定来编写程序，为每个变量规定数据类型，这在某种程度上，加大了工作量，也加长了代码量。动态语言则没有这些要求，可以让人更专注在业务上，代码也更短，写起来更快，这一点，写 python 的同学比较清楚。")]),t._v(" "),e("p",[t._v("Go 语言作为一门现代静态语言，是有后发优势的。它引入了动态语言的便利，同时又会进行静态语言的类型检查，写起来是非常 Happy 的。Go 采用了折中的做法：不要求类型显示地声明实现了某个接口，只要实现了相关的方法即可，编译器就能检测到。")]),t._v(" "),e("p",[t._v("来看个例子：")]),t._v(" "),e("p",[t._v("先定义一个接口，和使用此接口作为参数的函数：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("type IGreeting interface {\n\tsayHello()\n}\n\nfunc sayHello(i IGreeting) {\n\ti.sayHello()\n}\n")])])]),e("p",[t._v("再来定义两个结构体：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('type Go struct {}\nfunc (g Go) sayHello() {\n\tfmt.Println("Hi, I am GO!")\n}\n\ntype PHP struct {}\nfunc (p PHP) sayHello() {\n\tfmt.Println("Hi, I am PHP!")\n}\n')])])]),e("p",[t._v("最后，在 main 函数里调用 sayHello() 函数：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("func main() {\n\tgolang := Go{}\n\tphp := PHP{}\n\n\tsayHello(golang)\n\tsayHello(php)\n}\n")])])]),e("p",[t._v("程序输出：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("Hi, I am GO"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nHi, I am PHP"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),e("p",[t._v("在 main 函数中，调用调用 sayHello() 函数时，传入了 "),e("code",[t._v("golang, php")]),t._v(" 对象，它们并没有显式地声明实现了 IGreeting 类型，只是实现了接口所规定的 sayHello() 函数。实际上，编译器在调用 sayHello() 函数时，会隐式地将 "),e("code",[t._v("golang, php")]),t._v(" 对象转换成 IGreeting 类型，这也是静态语言的类型检查功能。")]),t._v(" "),e("p",[t._v("顺带再提一下动态语言的特点：")]),t._v(" "),e("blockquote",[e("p",[t._v("变量绑定的类型是不确定的，在运行期间才能确定\n函数和方法可以接收任何类型的参数，且调用时不检查参数类型\n不需要实现接口")])]),t._v(" "),e("p",[t._v('总结一下，鸭子类型是一种动态语言的风格，在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由它"当前方法和属性的集合"决定。Go 作为一种静态语言，通过接口实现了 '),e("code",[t._v("鸭子类型")]),t._v("，实际上是 Go 的编译器在其中作了隐匿的转换工作。")]),t._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[t._v("【wikipedia】https://en.wikipedia.org/wiki/Duck_test")]),t._v(" "),e("p",[t._v("【Golang 与鸭子类型，讲得比较好】https://blog.csdn.net/cszhouwei/article/details/33741731")]),t._v(" "),e("p",[t._v("【各种面向对象的名词】https://cyent.github.io/golang/other/oo/")]),t._v(" "),e("p",[t._v("【多态、鸭子类型特性】https://www.jb51.net/article/116025.htm")]),t._v(" "),e("p",[t._v("【鸭子类型、动态静态语言】https://www.jianshu.com/p/650485b78d11")])])}),[],!1,null,null,null);a.default=n.exports}}]);