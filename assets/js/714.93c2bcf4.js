(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{1315:function(t,e,r){"use strict";r.r(e);var a=r(44),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("你需要在 github 上找到 "),r("code",[t._v("certbot-auto")]),t._v(" 并下载安装")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/certbot/certbot",target:"_blank",rel:"noopener noreferrer"}},[t._v("certbot-auto"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"手动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手动"}},[t._v("#")]),t._v(" 手动")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("./certbot-auto certonly  -d *.xiange.tech -d *.blog.zhequtao.com -d blog.zhequtao.com -d xiange.tech --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory\n")])])]),r("h2",{attrs:{id:"dns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),r("p",[t._v("在 "),r("a",{attrs:{href:"https://certbot.eff.org/docs/using.html#dns-plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("dns-plugins"),r("OutboundLink")],1),t._v(" 中选择 "),r("code",[t._v("cloudflare")]),t._v("。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://certbot-dns-cloudflare.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://certbot-dns-cloudflare.readthedocs.io/en/stable/"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://dash.cloudflare.com/sign-up",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dash.cloudflare.com/sign-up"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"自动续期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动续期"}},[t._v("#")]),t._v(" 自动续期")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("./certbot-auto  renew\n")])])]),r("h2",{attrs:{id:"列出证书列表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#列出证书列表"}},[t._v("#")]),t._v(" 列出证书列表")]),t._v(" "),r("p",[t._v("./certbot-auto certificates")]),t._v(" "),r("h2",{attrs:{id:"删除证书"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除证书"}},[t._v("#")]),t._v(" 删除证书")]),t._v(" "),r("p",[t._v("./certbt-auto delete")])])}),[],!1,null,null,null);e.default=s.exports}}]);