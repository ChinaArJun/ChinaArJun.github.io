(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{1166:function(t,e,a){"use strict";a.r(e);var n=a(44),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("写操作底层的执行函数是 "),a("code",[t._v("mapdelete")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func mapdelete(t *maptype, h *hmap, key unsafe.Pointer) \n")])])]),a("p",[t._v("根据 key 类型的不同，删除操作会被优化成更具体的函数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key 类型")]),t._v(" "),a("th",[t._v("删除")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("uint32")]),t._v(" "),a("td",[t._v("mapdelete_fast32(t *maptype, h *hmap, key uint32)")])]),t._v(" "),a("tr",[a("td",[t._v("uint64")]),t._v(" "),a("td",[t._v("mapdelete_fast64(t *maptype, h *hmap, key uint64)")])]),t._v(" "),a("tr",[a("td",[t._v("string")]),t._v(" "),a("td",[t._v("mapdelete_faststr(t *maptype, h *hmap, ky string)")])])])]),t._v(" "),a("p",[t._v("当然，我们只关心 "),a("code",[t._v("mapdelete")]),t._v(" 函数。它首先会检查 h.flags 标志，如果发现写标位是 1，直接 panic，因为这表明有其他协程同时在进行写操作。")]),t._v(" "),a("p",[t._v("计算 key 的哈希，找到落入的 bucket。检查此 map 如果正在扩容的过程中，直接触发一次搬迁操作。")]),t._v(" "),a("p",[t._v("删除操作同样是两层循环，核心还是找到 key 的具体位置。寻找过程都是类似的，在 bucket 中挨个 cell 寻找。")]),t._v(" "),a("p",[t._v("找到对应位置后，对 key 或者 value 进行“清零”操作：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 对 key 清零\nif t.indirectkey {\n\t*(*unsafe.Pointer)(k) = nil\n} else {\n\ttypedmemclr(t.key, k)\n}\n\n// 对 value 清零\nif t.indirectvalue {\n\t*(*unsafe.Pointer)(v) = nil\n} else {\n\ttypedmemclr(t.elem, v)\n}\n")])])]),a("p",[t._v("最后，将 count 值减 1，将对应位置的 tophash 值置成 "),a("code",[t._v("Empty")]),t._v("。")]),t._v(" "),a("p",[t._v("这块源码同样比较简单，感兴起直接去看代码。")])])}),[],!1,null,null,null);e.default=v.exports}}]);