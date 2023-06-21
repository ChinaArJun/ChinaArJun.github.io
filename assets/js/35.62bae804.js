(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1300:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("前段时间，我使用了 jwt 来实现邮箱验证码的校验与用户认证与登录，还特别写了"),n("a",{attrs:{href:"https://juejin.im/post/5cc459976fb9a032212cc73b",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇文章"),n("OutboundLink")],1),t._v("作为总结。")]),t._v(" "),n("p",[t._v("在那篇文章中，提到了一个点，如何限速。")]),t._v(" "),n("p",[t._v("在短信验证码和邮箱验证码，如果不限速，被恶意攻击造成大量的 QPS，不仅拖垮了服务，也会心疼如水的资费。鉴于君子固穷的原则，在我的邮箱服务里加上限速。")]),t._v(" "),n("p",[t._v("关于如何限速，有两个比较出名的算法，漏桶算法与令牌桶算法，这里对其简单介绍一下，最后再实践在我发邮件的API中")]),t._v(" "),n("p",[t._v("以下是发送邮件的 API，已限制为一分钟两次，你可以通过修改 "),n("code",[t._v("email")]),t._v(" 进行试验。你也可以在"),n("a",{attrs:{href:"https://shici.xiange.tech/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的站点"),n("OutboundLink")],1),t._v("直接试验")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://graphql.xiange.tech/graphql'")]),t._v(" -H "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" --data-binary "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"query":"mutation SEND('),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),t._v(": String!) {"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("  sendEmailVerifyCode (email: "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),t._v(")"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('}","variables":{"email":"xxxxxx@qq.com"}}\'')]),t._v("\n")])])]),n("p",[t._v("以下是我关于登录实践的系列文章")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5cc2d983f265da03a436d6b7",target:"_blank",rel:"noopener noreferrer"}},[t._v("【登录那些事】实现 Material Design 的登录样式"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5cc459976fb9a032212cc73b",target:"_blank",rel:"noopener noreferrer"}},[t._v("【登录那些事】使用 jwt 登录与校验验证码"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5cceafe5f265da039d32966d",target:"_blank",rel:"noopener noreferrer"}},[t._v("【登录那些事】邮件发送，限流，漏桶与令牌桶"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("本文地址："),n("a",{attrs:{href:"https://blog.zhequtao.com/post/rate-limit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.zhequtao.com/post/rate-limit/"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"leaky-bucket-漏桶算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leaky-bucket-漏桶算法"}},[t._v("#")]),t._v(" Leaky Bucket (漏桶算法)")]),t._v(" "),n("p",[n("img",{attrs:{src:a(603),alt:"漏桶算法"}})]),t._v(" "),n("p",[t._v("漏桶算法表示水滴（请求）先进入到漏桶里，漏桶（bucket）以一定的速度出水，当漏桶中水满时，无法再加水。")]),t._v(" "),n("ul",[n("li",[t._v("维护一个计数器作为 bucket，计数器的上限为 bucket 的大小")]),t._v(" "),n("li",[t._v("计数器满时拒绝请求")]),t._v(" "),n("li",[t._v("每隔一段时间清空计数器")])]),t._v(" "),n("p",[t._v("用 "),n("code",[t._v("option")]),t._v(" 代表在 "),n("code",[t._v("option.window")]),t._v(" 的窗口时间内最多可以通过 "),n("code",[t._v("option.max")]),t._v(" 次请求")]),t._v(" "),n("p",[t._v("以下是使用 redis 的计数器实现限流的伪代码")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" option "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  max"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window 时间内限速10个请求")]),t._v("\n  window"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1s")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("access")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据请求生成唯一标志")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("identity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计数器自增")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" counter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("incr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是当前时间窗口的第一个请求，设置过期时间")]),t._v("\n    redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("expire")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("这里有 Redis 官方使用 INCR 实现限流的文档 https://redis.io/commands/INCR")])]),t._v(" "),n("p",[t._v("此时有一个不算问题的问题，就是它的时间窗口并不是滑动窗口那样在桶里出去一个球，就可以再进来一个球。而更像是一个固定时间窗口，从桶里出去一群球，再开始进球。正因为如此，它可能在固定窗口的后一半时间收到 "),n("code",[t._v("max-1")]),t._v(" 次请求，又在下一个固定窗口内打来 "),n("code",[t._v("max")]),t._v(" 次请求，此时在一个随机的窗口时间内最多会有 "),n("code",[t._v("2 * max - 1")]),t._v(" 次请求。")]),t._v(" "),n("p",[t._v("另外还有一个redis的 "),n("code",[t._v("INCR")]),t._v(" 与 "),n("code",[t._v("EXPIRE")]),t._v(" 的原子性问题，容易造成 "),n("code",[t._v("Race Condition")]),t._v("，可以通过 "),n("code",[t._v("SETNX")]),t._v(" 来解决")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EX'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NX'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("另外也可以通过一个 "),n("code",[t._v("LUA")]),t._v(" 脚本来搞定，显然还是 "),n("code",[t._v("SETNX")]),t._v(" 简单些")]),t._v(" "),n("div",{staticClass:"language-lua extra-class"},[n("pre",{pre:!0,attrs:{class:"language-lua"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" current\ncurrent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"incr"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("KEYS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tonumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expire"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("KEYS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),n("p",[t._v("为了解决 2N 的问题，可以由维护一个计数器，更改为维护一个队列。代价是内存占用空间过高，且更难解决 "),n("code",[t._v("Race Condition")])]),t._v(" "),n("p",[t._v("以下是使用 redis 的 set/get string 实现的限流")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" option "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  max"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window 时间内限速10个请求")]),t._v("\n  window"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1s")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("access")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据请求生成唯一标志")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("identity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" current "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cache 视为缓存对象")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 筛选出当前时间窗口的请求个数，每个请求标志为时间戳的格式")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为了简单这里不做 json 的序列化和反序列化了...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timestamps "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timestamps'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ts")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ts "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时读写不同步，会有 Race Condition 问题")]),t._v("\n  redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timestamps'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestamps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EX'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这里再使用一个 LUA 脚本解决 "),n("code",[t._v("Race Condition")]),t._v(" 的问题")]),t._v(" "),n("p",[t._v("TODO")]),t._v(" "),n("h2",{attrs:{id:"token-bucket-令牌桶算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#token-bucket-令牌桶算法"}},[t._v("#")]),t._v(" Token Bucket (令牌桶算法)")]),t._v(" "),n("p",[n("img",{attrs:{src:a(604),alt:"令牌算法"}})]),t._v(" "),n("p",[t._v("由图先看一看令牌桶与漏桶的不同")]),t._v(" "),n("ol",[n("li",[t._v("令牌桶初始状态 bucket 是满的，漏桶初始状态 bucket 是空的")]),t._v(" "),n("li",[t._v("令牌桶在 bucket 空的时候拒绝新的请求，漏桶在 bucket 满的时候拒绝新的请求")]),t._v(" "),n("li",[t._v("当一个请求来临时，假设一个请求消耗一个token，令牌桶的 bucket 减少一个 token，漏桶增加一个 token")])]),t._v(" "),n("p",[t._v("以下使用 redis 实现令牌桶")]),t._v(" "),n("p",[t._v("TODO")])])}),[],!1,null,null,null);s.default=e.exports},603:function(t,s,a){t.exports=a.p+"assets/img/leaky-bucket.f8cb8f08.png"},604:function(t,s,a){t.exports=a.p+"assets/img/token-bucket.ccc8a747.png"}}]);