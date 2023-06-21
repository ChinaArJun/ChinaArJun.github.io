(window.webpackJsonp=window.webpackJsonp||[]).push([[645],{1245:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("grid")]),t._v(" 布局是W3C提出的一个二维布局系统，通过 "),s("code",[t._v("display: grid")]),t._v(" 来设置使用，对于以前一些复杂的布局能够得到更简单的解决。本篇文章通过几个布局来对对 "),s("code",[t._v("grid")]),t._v(" 布局进行一个简单的了解。目前，"),s("code",[t._v("grid")]),t._v(" 仅仅只有 "),s("code",[t._v("Edge")]),t._v("使用前缀能够支持，为了更好地体验，可以使用 Chrome 浏览器，在 "),s("code",[t._v("chrome://flags")]),t._v(" 开启 "),s("code",[t._v("#enable-experimental-web-platform-features")]),t._v(" 选项。")]),t._v(" "),s("p",[t._v("另外，更多的例子可以前往 "),s("a",{attrs:{href:"http://gridbyexample.com/examples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grid by examples"),s("OutboundLink")],1),t._v(", 更多的用法可以前往 "),s("a",{attrs:{href:"https://www.w3.org/TR/css3-grid-layout/",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3 Specification"),s("OutboundLink")],1),t._v(",也可以前往 "),s("a",{attrs:{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Complete Guide to Grid"),s("OutboundLink")],1),t._v(" 以及 "),s("a",{attrs:{href:"https://blog.zhequtao.com/post/grid-guide/readme/",target:"_blank",rel:"noopener noreferrer"}},[t._v("译文"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("2019年2月注：目前 Grid 已被所有主流浏览器所支持")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.zhequtao.com/post/grid-layout-common-usage/demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("布局代码示例"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("原文链接见: "),s("a",{attrs:{href:"https://blog.zhequtao.com/post/grid-layout-common-usage/readme/",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"左右固定中间自适应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左右固定中间自适应"}},[t._v("#")]),t._v(" 左右固定中间自适应")]),t._v(" "),s("p",[t._v("以前，这需要使用 "),s("code",[t._v("negative margin")]),t._v("，"),s("code",[t._v("float")]),t._v(", "),s("code",[t._v("position")]),t._v(" 解决，圣杯布局是一个比较好的解决方案。后来，"),s("code",[t._v("flex")]),t._v("横空出世，使用 "),s("code",[t._v("flex-grow")]),t._v(" 与 "),s("code",[t._v("flex-basis")]),t._v(" 完成自适应布局。"),s("code",[t._v("grid")]),t._v(" 布局相比 "),s("code",[t._v("flex")]),t._v(" 布局更加简单，只需要在 "),s("code",[t._v("container")]),t._v(" 上设置 "),s("code",[t._v("grid-template-columns: 100px auto 100px")]),t._v("。\n"),s("img",{attrs:{src:"https://blog.zhequtao.com/post/Grid-Layout-Common-Usage/images/1.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px auto 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"三等分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三等分"}},[t._v("#")]),t._v(" 三等分")]),t._v(" "),s("p",[t._v("以前的方法可以设置 "),s("code",[t._v("float: left; width: 33.33333333")]),t._v("，使用 "),s("code",[t._v("flex")]),t._v(" 可以设置 "),s("code",[t._v("flex-basis: 33.33333333")]),t._v("。在 grid 中只需要设置 "),s("code",[t._v("grid-template-columns: 1fr 1fr 1fr")]),t._v(" "),s("img",{attrs:{src:"https://blog.zhequtao.com/post/Grid-Layout-Common-Usage/images/2.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #feb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"三七分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三七分"}},[t._v("#")]),t._v(" 三七分")]),t._v(" "),s("p",[t._v("在 grid 中设置 container 为十等分，可以使用 "),s("code",[t._v("grid-template-columns: repeat(10, 1fr)")]),t._v("。\n"),s("code",[t._v("repeat")]),t._v(" 为重复10次 "),s("code",[t._v("1fr")]),t._v("。"),s("code",[t._v("grid-column")]),t._v(" 为 "),s("code",[t._v("grid-column-start")]),t._v(" 与 "),s("code",[t._v("grid-column-end")]),t._v(" 的缩写，表示起止的 "),s("code",[t._v("line")]),t._v("。使用 grid 进行栅格系统的布局也是很简单。\n"),s("img",{attrs:{src:"https://blog.zhequtao.com/post/Grid-Layout-Common-Usage/images/3.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".column-3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 / 4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".column-7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4 / 11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"复杂布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复杂布局"}},[t._v("#")]),t._v(" 复杂布局")]),t._v(" "),s("p",[t._v("以上几个例子，均是单向布局，"),s("code",[t._v("flex")]),t._v(" 就能很好的解决，而如下几个布局，均是二维布局，传统布局有些困难。以下示例图，可以在 "),s("code",[t._v("container")]),t._v(" 上使用 "),s("code",[t._v("grid-template-areas")]),t._v("，在 "),s("code",[t._v("item")]),t._v(" 上设置 "),s("code",[t._v("grid-area")]),t._v(" 属性来设置复杂布局。\n"),s("img",{attrs:{src:"https://blog.zhequtao.com/post/Grid-Layout-Common-Usage/images/4.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("grid-layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("header"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("left"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("main"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("right"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("footer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("footer"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px auto 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px 300px 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"header header header"')]),t._v("\n                       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left main right"')]),t._v("\n                       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer footer footer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container .header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container .footer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" footer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container .left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container .right")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container .main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"九宫格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九宫格"}},[t._v("#")]),t._v(" 九宫格")]),t._v(" "),s("p",[t._v("在传统布局中就比较有困难。在 grid 中设置三行三列等宽，并使用 "),s("code",[t._v("grid-gap")]),t._v(" 设置间隙。\n"),s("img",{attrs:{src:"https://blog.zhequtao.com/post/Grid-Layout-Common-Usage/images/5.png",width:"300",height:"300"}})]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-gap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #fac"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Complete Guide to Grid"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.w3.org/TR/css3-grid-layout/",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3 Specification"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://gridbyexample.com/examples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grid by examples"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("caniuse"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/FremyCompany/css-grid-polyfill/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grid polyfill"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);