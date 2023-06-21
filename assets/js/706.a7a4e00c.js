(window.webpackJsonp=window.webpackJsonp||[]).push([[706],{1307:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/sequelize/sequelize",target:"_blank",rel:"noopener noreferrer"}},[t._v("sequelize"),a("OutboundLink")],1),t._v(" 是 Node 中使用比较多的一个 ORM 库，最近计划将项目中的 "),a("code",[t._v("sequelize")]),t._v(" 升级至 V5 版本。")]),t._v(" "),a("p",[t._v("根据 "),a("a",{attrs:{href:"http://docs.sequelizejs.com/manual/upgrade-to-v5.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("升级文档"),a("OutboundLink")],1),t._v("，其中一项是即将禁用 "),a("code",[t._v("String based operators")]),t._v("，使用 Sequelize.Op 等 Symbol operators 来代替。")]),t._v(" "),a("p",[t._v("而 "),a("code",[t._v("operator")]),t._v(" 主要用在查询条件中，用以生成查询条件，如")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" where "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $lte"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换为")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" replaceWhere "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" operatorsAliases "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $eq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  $ne"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  $gte"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  $all"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  $"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("moreAliase\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("简而言之，需要把本项目中的所有查询条件， 从 "),a("code",[t._v("operatorsAliases")]),t._v(" 左边的替换为右边的。这也是本篇文章的主要内容")]),t._v(" "),a("p",[t._v("本文链接: "),a("a",{attrs:{href:"https://blog.zhequtao.com/post/sequelize-op-replacement-and-sed/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.zhequtao.com/post/sequelize-op-replacement-and-sed/"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("p",[t._v("在开始工作之前，需要先把 git 的工作区和暂存区清理干净，避免替换过程中造成无法回退的尴尬局面。")]),t._v(" "),a("p",[t._v("把工作区和暂存区清理干净的意思就是，先把能 commit 的 commit 掉，不能 commit 的 stash 掉，当然切个新分支就更好了。")]),t._v(" "),a("h2",{attrs:{id:"vs-code-全局替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-全局替换"}},[t._v("#")]),t._v(" VS Code 全局替换")]),t._v(" "),a("p",[t._v("在刚开始随手手动替换了几个之后，觉得这样也不是办法，决定开始使用 "),a("code",[t._v("VS Code")]),t._v(" 的全局替换。")]),t._v(" "),a("p",[t._v("首先思考一个查询的 operator 会出现的位置，无外乎以下几种")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("where"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $lte"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwhere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$lte "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nwhere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$lte'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),a("p",[t._v("另外，顺序很重要，从最具体到抽象的顺序如下")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$lte'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.$lte'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$lte'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("然后，按照顺序挨个替换就好了，但替换了几个知乎，我发现...我的耐心实在有限")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("operatorsAliases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),t._v("\n")])])]),a("p",[t._v("我需要替换 "),a("code",[t._v("34 * 3 = 102")]),t._v(" 次，这也不能怪我烦啊，搁谁谁都没有耐心")]),t._v(" "),a("h2",{attrs:{id:"使用-sed-命令替换文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-sed-命令替换文件"}},[t._v("#")]),t._v(" 使用 sed 命令替换文件")]),t._v(" "),a("blockquote",[a("p",[t._v("多掌握一个命令是多么重要")])]),t._v(" "),a("p",[t._v("先来一个 "),a("code",[t._v("hello, world")]),t._v(" 版的 sed 命令，以下命令把 "),a("code",[t._v("hello")]),t._v(" 替换成 "),a("code",[t._v("word")])]),t._v(" "),a("p",[t._v("恩，"),a("code",[t._v("sed")]),t._v(" 替换的语法和 "),a("code",[t._v("vim")]),t._v(" 简直一模一样，这告诉我们掌握 "),a("code",[t._v("vim")]),t._v(" 多么重要...")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s/hello/world/g"')]),t._v("\nworld\n")])])]),a("p",[t._v("根据上一部分所讲的规则，写一个 sed 文件 (replace.sed)，对示例(test.js)做一个测试")]),t._v(" "),a("div",{staticClass:"language-sed extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# replace.sed\ns/'$lte'/Op.lte/g\ns/.$lte/[Op.lte]/g\ns/$lte/[Op.lte]/g\n")])])]),a("div",{staticClass:"language-test.js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("where.age = { $lte: 10 }\nwhere.age.$lte = 10\nwhere.age['$lte'] = 10\n")])])]),a("p",[t._v("做了简单的测试，输入以下命令，看起来工作地还不错")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -f replace.sed test.js\nwhere.age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op.lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwhere.age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op.lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nwhere.age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op.lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),a("p",[t._v("但是有 34 个 alias 需要替换，利用浏览器的控制台生成 sed 文件")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("operatorsAliases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("op")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flatMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("op")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("s/'\\$")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\b'/Op.")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/g")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("s/\\.\\$")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\b/[Op.")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("]/g")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("s/\\$")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\b/[Op.")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("]/g")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$eq'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$eq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$eq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$ne'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ne"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$ne"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$ne"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("虽然生成的命令有些简单粗暴...，不过简单粗暴的东西就是好用")]),t._v(" "),a("h2",{attrs:{id:"替换项目下所有文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换项目下所有文件"}},[t._v("#")]),t._v(" 替换项目下所有文件")]),t._v(" "),a("p",[t._v("只剩下一个问题，如何列出当前路径下的所有文件")]),t._v(" "),a("blockquote",[a("p",[t._v("多掌握一个命令是多么重要")])]),t._v(" "),a("p",[t._v("我把所有我能想到的命令给列下来")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("find .")]),t._v(" 应该可以排除掉 .gitignores 所列文件，但好像有点麻烦，我从来没用过。")]),t._v(" "),a("li",[a("code",[t._v("ls -R")]),t._v(" 格式不够友好")]),t._v(" "),a("li",[a("code",[t._v("tree")]),t._v(" 可读性不错，但机器可读性太差了")])]),t._v(" "),a("blockquote",[a("p",[t._v("如何排除文件夹可以参考 "),a("a",{attrs:{href:"https://stackoverflow.com/questions/4210042/how-to-exclude-a-directory-in-find-command",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to exclude a directory in find . command"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("以上三个命令都不太好用。柳暗花明又一村，这里有一个更简单而又恰到好处的命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-files\n")])])]),a("p",[t._v("关于 git 的更多命令，可以参考 "),a("a",{attrs:{href:"https://ChinaArJun.github.io/cheat-sheets/git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Cheat Sheets"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("此时，shell 命令如下，-i 代表直接替换文件，"),a("code",[t._v('-i ""')]),t._v(" 代表替换时文件名不添加后缀，为啥一定要写个空字符串，因为 MAC 下的 sed 命令就是如此丧心病狂。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" -f replace.sed "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-files"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),a("p",[t._v("不过，这时候有新的问题产生了，在 "),a("code",[t._v("git diff")]),t._v(" 时发现有一些模板中带有 "),a("code",[t._v("$index")]),t._v(" ，也会被替换成 "),a("code",[t._v("[Op.in]dex")]),t._v("，这是不期望的结果")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用正则匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用正则匹配"}},[t._v("#")]),t._v(" 使用正则匹配")]),t._v(" "),a("p",[t._v("使用 \\b 匹配单词，完美解决问题。")]),t._v(" "),a("div",{staticClass:"language-sed extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("s/'\\$eq\\b'/Op.eq/g\ns/\\.\\$eq\\b/[Op.eq]/g\ns/\\$eq\\b/[Op.eq]/g\n")])])]),a("p",[t._v("不过，在 MAC 下并不支持 "),a("code",[t._v("\\b")]),t._v("，可以拿以下命令做个试验。这时候在 MAC 下需要安装 "),a("code",[t._v("gnu-sed")]),t._v("，终于把 MAC 下的 "),a("code",[t._v("sed")]),t._v(" 命令替换掉了")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s/'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v('/world/g"')]),t._v("\nhello\n$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gnu-sed\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" gsed "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s/'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v('/world/g"')]),t._v("\nworld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一定一定要用双引号括起来")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" gsed s/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bhello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("b/world/g\nhello\n")])])]),a("p",[a("strong",[t._v("这里有一个很重要的点，即sed命令一定要用双引号给括起来")])]),t._v(" "),a("p",[t._v("使用 js 生成新的 sed 命令")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("operatorsAliases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("op")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flatMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("op")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("s/'\\\\$")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\\\b'/Op.")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/g")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("s/\\\\.\\\\$")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\\\b/[Op.")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("]/g")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("s/\\\\$")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\\\b/[Op.")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("]/g")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("最后执行命令，成功替换全部字符")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -i 代表直接替换文件，-r 代表支持扩展的正则表达式")]),t._v("\n$ gsed -i -r -f r.sed "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-files"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -v src/data"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --shortstat\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("63")]),t._v(" files changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("293")]),t._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("293")]),t._v(" deletions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),a("p",[t._v("项目使用的 "),a("code",[t._v("typescript")]),t._v("，最后编译出错。还有类似以下一种情况，手动改掉")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $or "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" where "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $or\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"附录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),a("p",[t._v("sed 文件如下")]),t._v(" "),a("div",{staticClass:"language-sed extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("s/'\\$eq\\b'/Op.eq/g\ns/\\.\\$eq\\b/[Op.eq]/g\ns/\\$eq\\b/[Op.eq]/g\ns/'\\$ne\\b'/Op.ne/g\ns/\\.\\$ne\\b/[Op.ne]/g\ns/\\$ne\\b/[Op.ne]/g\ns/'\\$gte\\b'/Op.gte/g\ns/\\.\\$gte\\b/[Op.gte]/g\ns/\\$gte\\b/[Op.gte]/g\ns/'\\$gt\\b'/Op.gt/g\ns/\\.\\$gt\\b/[Op.gt]/g\ns/\\$gt\\b/[Op.gt]/g\ns/'\\$lte\\b'/Op.lte/g\ns/\\.\\$lte\\b/[Op.lte]/g\ns/\\$lte\\b/[Op.lte]/g\ns/'\\$lt\\b'/Op.lt/g\ns/\\.\\$lt\\b/[Op.lt]/g\ns/\\$lt\\b/[Op.lt]/g\ns/'\\$not\\b'/Op.not/g\ns/\\.\\$not\\b/[Op.not]/g\ns/\\$not\\b/[Op.not]/g\ns/'\\$in\\b'/Op.in/g\ns/\\.\\$in\\b/[Op.in]/g\ns/\\$in\\b/[Op.in]/g\ns/'\\$notIn\\b'/Op.notIn/g\ns/\\.\\$notIn\\b/[Op.notIn]/g\ns/\\$notIn\\b/[Op.notIn]/g\ns/'\\$is\\b'/Op.is/g\ns/\\.\\$is\\b/[Op.is]/g\ns/\\$is\\b/[Op.is]/g\ns/'\\$like\\b'/Op.like/g\ns/\\.\\$like\\b/[Op.like]/g\ns/\\$like\\b/[Op.like]/g\ns/'\\$notLike\\b'/Op.notLike/g\ns/\\.\\$notLike\\b/[Op.notLike]/g\ns/\\$notLike\\b/[Op.notLike]/g\ns/'\\$iLike\\b'/Op.iLike/g\ns/\\.\\$iLike\\b/[Op.iLike]/g\ns/\\$iLike\\b/[Op.iLike]/g\ns/'\\$notILike\\b'/Op.notILike/g\ns/\\.\\$notILike\\b/[Op.notILike]/g\ns/\\$notILike\\b/[Op.notILike]/g\ns/'\\$regexp\\b'/Op.regexp/g\ns/\\.\\$regexp\\b/[Op.regexp]/g\ns/\\$regexp\\b/[Op.regexp]/g\ns/'\\$notRegexp\\b'/Op.notRegexp/g\ns/\\.\\$notRegexp\\b/[Op.notRegexp]/g\ns/\\$notRegexp\\b/[Op.notRegexp]/g\ns/'\\$iRegexp\\b'/Op.iRegexp/g\ns/\\.\\$iRegexp\\b/[Op.iRegexp]/g\ns/\\$iRegexp\\b/[Op.iRegexp]/g\ns/'\\$notIRegexp\\b'/Op.notIRegexp/g\ns/\\.\\$notIRegexp\\b/[Op.notIRegexp]/g\ns/\\$notIRegexp\\b/[Op.notIRegexp]/g\ns/'\\$between\\b'/Op.between/g\ns/\\.\\$between\\b/[Op.between]/g\ns/\\$between\\b/[Op.between]/g\ns/'\\$notBetween\\b'/Op.notBetween/g\ns/\\.\\$notBetween\\b/[Op.notBetween]/g\ns/\\$notBetween\\b/[Op.notBetween]/g\ns/'\\$overlap\\b'/Op.overlap/g\ns/\\.\\$overlap\\b/[Op.overlap]/g\ns/\\$overlap\\b/[Op.overlap]/g\ns/'\\$contains\\b'/Op.contains/g\ns/\\.\\$contains\\b/[Op.contains]/g\ns/\\$contains\\b/[Op.contains]/g\ns/'\\$contained\\b'/Op.contained/g\ns/\\.\\$contained\\b/[Op.contained]/g\ns/\\$contained\\b/[Op.contained]/g\ns/'\\$adjacent\\b'/Op.adjacent/g\ns/\\.\\$adjacent\\b/[Op.adjacent]/g\ns/\\$adjacent\\b/[Op.adjacent]/g\ns/'\\$strictLeft\\b'/Op.strictLeft/g\ns/\\.\\$strictLeft\\b/[Op.strictLeft]/g\ns/\\$strictLeft\\b/[Op.strictLeft]/g\ns/'\\$strictRight\\b'/Op.strictRight/g\ns/\\.\\$strictRight\\b/[Op.strictRight]/g\ns/\\$strictRight\\b/[Op.strictRight]/g\ns/'\\$noExtendRight\\b'/Op.noExtendRight/g\ns/\\.\\$noExtendRight\\b/[Op.noExtendRight]/g\ns/\\$noExtendRight\\b/[Op.noExtendRight]/g\ns/'\\$noExtendLeft\\b'/Op.noExtendLeft/g\ns/\\.\\$noExtendLeft\\b/[Op.noExtendLeft]/g\ns/\\$noExtendLeft\\b/[Op.noExtendLeft]/g\ns/'\\$and\\b'/Op.and/g\ns/\\.\\$and\\b/[Op.and]/g\ns/\\$and\\b/[Op.and]/g\ns/'\\$or\\b'/Op.or/g\ns/\\.\\$or\\b/[Op.or]/g\ns/\\$or\\b/[Op.or]/g\ns/'\\$any\\b'/Op.any/g\ns/\\.\\$any\\b/[Op.any]/g\ns/\\$any\\b/[Op.any]/g\ns/'\\$all\\b'/Op.all/g\ns/\\.\\$all\\b/[Op.all]/g\ns/\\$all\\b/[Op.all]/g\ns/'\\$values\\b'/Op.values/g\ns/\\.\\$values\\b/[Op.values]/g\ns/\\$values\\b/[Op.values]/g\ns/'\\$col\\b'/Op.col/g\ns/\\.\\$col\\b/[Op.col]/g\ns/\\$col\\b/[Op.col]/g\n")])])]),a("hr"),t._v(" "),a("p",[t._v("欢迎关注我的公众号"),a("strong",[t._v("中关村程序员")]),t._v("，我会定期分享一些前后端以及运维的文章，并且会有技术与生活上的每日回顾，欢迎关注交流")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog.zhequtao.com/qrcode.jpg",alt:"欢迎关注公众号中关村程序员，在这里记录我的技术成长，欢迎交流"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);