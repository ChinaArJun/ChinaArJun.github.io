(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{439:function(t,s,n){t.exports=n.p+"assets/img/1542507931357.01c6e308.png"},440:function(t,s,n){t.exports=n.p+"assets/img/1548385080493.cefc378d.png"},441:function(t,s,n){t.exports=n.p+"assets/img/1548385098599.f2720b54.png"},745:function(t,s,n){"use strict";n.r(s);var e=n(44),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("img",{attrs:{src:n(439),alt:"1542507931357"}})]),t._v(" "),e("h1",{attrs:{id:"微服务（microservices）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微服务（microservices）"}},[t._v("#")]),t._v(" 微服务（microservices）")]),t._v(" "),e("p",[t._v("​\t近几年,微服这个词闯入了我们的视线范围。在百度与谷歌中随便搜一搜也有几千万条的结果。那么，什么是微服务呢？微服务的概念是怎么产生的呢？\n我们就来了解一下Go语言与微服务的千丝万缕与来龙去脉。")]),t._v(" "),e("h1",{attrs:{id:"项目展示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目展示"}},[t._v("#")]),t._v(" 项目展示")]),t._v(" "),e("p",[t._v("机器信息")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("机器")]),t._v(" "),e("th",[t._v("主机一")]),t._v(" "),e("th",[t._v("主机二")]),t._v(" "),e("th",[t._v("主机三")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ip")]),t._v(" "),e("td",[t._v("192.168.110.155")]),t._v(" "),e("td",[t._v("192.168.110.169")]),t._v(" "),e("td",[t._v("192.168.110.157")])]),t._v(" "),e("tr",[e("td",[t._v("web服务")]),t._v(" "),e("td",[t._v("开启")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("地区服务")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("开启")]),t._v(" "),e("td",[t._v("开启")])]),t._v(" "),e("tr",[e("td",[t._v("验证码服务")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("开启")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("搜索服务")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[t._v("开启")])])])]),t._v(" "),e("p",[t._v("服务发现启动命令")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主机1")]),t._v("\n$ consul agent -server -bootstrap-expect "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -data-dir /tmp/consul -node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n1 -bind"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155 -ui  -config-dir /etc/consul.d -rejoin -join "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155 -client "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主机2")]),t._v("\n$ consul agent -server -bootstrap-expect "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -data-dir /tmp/consul -node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n2 -bind"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.169 -ui  -rejoin -join "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主机3")]),t._v("\n$ consul agent  -data-dir /tmp/consul -node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n3 -bind"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.157 -config-dir /etc/consul.d -rejoin -join "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#打开文件文件夹不存在")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/consul.d\n")])])]),e("p",[t._v("在主机1或主机2打开 127.0.0.1可以查看到服务只有consul2个")]),t._v(" "),e("p",[e("img",{attrs:{src:n(440),alt:"1548385080493"}})]),t._v(" "),e("p",[t._v("结点有三个分别是n1-n3")]),t._v(" "),e("p",[e("img",{attrs:{src:n(441),alt:"1548385098599"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);