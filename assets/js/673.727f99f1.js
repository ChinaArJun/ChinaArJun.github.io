(window.webpackJsonp=window.webpackJsonp||[]).push([[673],{1273:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("懒加载，顾名思义，在当前网页，滑动页面到能看到图片的时候再加载图片")]),t._v(" "),s("p",[t._v("故问题拆分成两个：")]),t._v(" "),s("ol",[s("li",[t._v("如何判断图片出现在了当前视口 （即如何判断我们能够看到图片）")]),t._v(" "),s("li",[t._v("如何控制图片的加载")])]),t._v(" "),s("p",[t._v("本篇文章原文地址: "),s("a",{attrs:{href:"https://blog.zhequtao.com/post/image-lazy-load",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何实现图片懒加载"),s("OutboundLink")],1),t._v("，另存到 "),s("a",{attrs:{href:"https://github.com/ChinaArJun/Daily-Question/issues/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的每日一题"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"方案一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),s("h3",{attrs:{id:"如何判断图片出现在了当前视口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何判断图片出现在了当前视口"}},[t._v("#")]),t._v(" 如何判断图片出现在了当前视口")]),t._v(" "),s("p",[s("code",[t._v("clientTop")]),t._v("，"),s("code",[t._v("offsetTop")]),t._v("，"),s("code",[t._v("clientHeight")]),t._v(" 以及 "),s("code",[t._v("scrollTop")]),t._v(" 各种关于图片的高度作比对")]),t._v(" "),s("p",[t._v("这些高度都代表了什么意思？")]),t._v(" "),s("p",[t._v("这我以前有可能是知道的，那时候我比较单纯，喜欢死磕。我现在想通了，背不过的东西就不要背了")]),t._v(" "),s("p",[s("strong",[t._v("所以它有一个问题：复杂琐碎不好理解！")])]),t._v(" "),s("p",[t._v("仅仅知道它静态的高度还不够，我们还需要知道动态的")]),t._v(" "),s("p",[s("strong",[t._v("如何动态？监听 "),s("code",[t._v("window.scroll")]),t._v(" 事件")])]),t._v(" "),s("h3",{attrs:{id:"如何控制图片的加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何控制图片的加载"}},[t._v("#")]),t._v(" 如何控制图片的加载")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("shanyue.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("首先设置一个临时属性 "),s("code",[t._v("data-src")]),t._v("，控制加载时使用 "),s("code",[t._v("src")]),t._v(" 代替 "),s("code",[t._v("data-src")])]),t._v(" "),s("h2",{attrs:{id:"方案二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" 方案二")]),t._v(" "),s("p",[t._v("改进一下")]),t._v(" "),s("h3",{attrs:{id:"如何判断图片出现在了当前视口-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何判断图片出现在了当前视口-2"}},[t._v("#")]),t._v(" 如何判断图片出现在了当前视口")]),t._v(" "),s("p",[t._v("引入一个新的 API， "),s("strong",[s("code",[t._v("Element.getBoundingClientRect()")]),t._v(" 方法返回元素的大小及其相对于视口的位置。")])]),t._v(" "),s("img",{attrs:{alt:"getBoundingClientRect示例图",src:"https://mdn.mozillademos.org/files/15087/rect.png"}}),t._v(" "),s("p",[t._v("那如何判断图片出现在了当前视口呢，根据示例图示意，代码如下，这个就比较好理解了，就可以很容易地背会(就可以愉快地去面试了)。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// clientHeight 代表当前视口的高度")]),t._v("\nimg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight\n")])])]),s("p",[s("strong",[t._v("监听 "),s("code",[t._v("window.scroll")]),t._v(" 事件也优化一下")])]),t._v(" "),s("p",[t._v("加个节流器，提高性能。工作中一般使用 "),s("code",[t._v("lodash.throttle")]),t._v(" 就可以了，万能的 "),s("code",[t._v("lodash")]),t._v(" 啊！")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("参考 "),s("a",{attrs:{href:"https://github.com/ChinaArJun/Daily-Question/issues/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是防抖和节流，他们的应用场景有哪些"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"方案三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[t._v("#")]),t._v(" 方案三")]),t._v(" "),s("p",[t._v("再改进一下")]),t._v(" "),s("h3",{attrs:{id:"如何判断图片出现在了当前视口-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何判断图片出现在了当前视口-3"}},[t._v("#")]),t._v(" 如何判断图片出现在了当前视口")]),t._v(" "),s("p",[s("strong",[t._v("方案二使用的方法是: "),s("code",[t._v("window.scroll")]),t._v(" 监听 "),s("code",[t._v("Element.getBoundingClientRect()")]),t._v(" 并使用 "),s("code",[t._v("_.throttle")]),t._v(" 节流")])]),t._v(" "),s("p",[s("strong",[t._v("一系列组合动作太复杂了，于是浏览器出了一个三合一事件: "),s("code",[t._v("IntersectionObserver")]),t._v(" API，一个能够监听元素是否到了当前视口的事件，一步到位！")])]),t._v(" "),s("p",[t._v("事件回调的参数是 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntersectionObserverEntry"),s("OutboundLink")],1),t._v(" 的集合，代表关于是否在可见视口的一系列值")]),t._v(" "),s("p",[t._v("其中，"),s("code",[t._v("entry.isIntersecting")]),t._v(" 代表目标元素可见")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("changes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// changes: 目标元素集合")]),t._v("\n  changes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// intersectionRatio")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isIntersecting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n      img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src\n      observer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unobserve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("当然，"),s("code",[t._v("IntersectionObserver")]),t._v(" 除了给图片做懒加载外，还可以对单页应用资源做预加载。")])]),t._v(" "),s("p",[t._v("如在 "),s("code",[t._v("next.js v9")]),t._v(" 中，会对视口内的资源做预加载，可以参考 "),s("a",{attrs:{href:"https://nextjs.org/blog/next-9#production-optimizations",target:"_blank",rel:"noopener noreferrer"}},[t._v("next 9 production optimizations"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Link")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/about"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("关于")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Link")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"方案四"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案四"}},[t._v("#")]),t._v(" 方案四")]),t._v(" "),s("p",[t._v("浏览器觉得懒加载这事可以交给自己做，你们开发者加个属性就好了。实在是...！")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("shanyue.jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loading")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("不过目前浏览器兼容性不太好，关于 "),s("code",[t._v("loading")]),t._v(" 属性的文章也可以查看 "),s("a",{attrs:{href:"https://addyosmani.com/blog/lazy-loading/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Native image lazy-loading for the web!"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("总结一下")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("window.scroll")]),t._v(" 监听各种 "),s("code",[t._v("top")]),t._v(" 与 "),s("code",[t._v("height")]),t._v(" 并使用 "),s("code",[t._v("_.throttle")]),t._v(" 节流，但是不好理解各种 "),s("code",[t._v("top")]),t._v(" 与 "),s("code",[t._v("hegith")])]),t._v(" "),s("li",[s("code",[t._v("window.scroll")]),t._v(" 监听 "),s("code",[t._v("getBoundingClientRect")]),t._v(" 并使用 "),s("code",[t._v("_.throttle")]),t._v(" 节流，没有一个统一事件，相对复杂")]),t._v(" "),s("li",[s("code",[t._v("IntersectionObserver")]),t._v("，浏览器推出了一个事件，方便简单")]),t._v(" "),s("li",[s("code",[t._v("img.loading=lazy")]),t._v("，浏览器直接给你解决，开发者直接标注属性")])])])}),[],!1,null,null,null);a.default=e.exports}}]);