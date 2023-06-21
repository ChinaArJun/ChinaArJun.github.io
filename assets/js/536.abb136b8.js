(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1133:function(n,t,a){"use strict";a.r(t);var e=a(44),l=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("从一个有缓冲的 channel 里读数据，当 channel 被关闭，依然能读出有效值。只有当返回的 ok 为 false 时，读出的数据才是无效的。")]),n._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('func main() {\n\tch := make(chan int, 5)\n\tch <- 18\n\tclose(ch)\n\tx, ok := <-ch\n\tif ok {\n\t\tfmt.Println("received: ", x)\n\t}\n\n\tx, ok = <-ch\n\tif !ok {\n\t\tfmt.Println("channel closed, data invalid.")\n\t}\n}\n')])])]),a("p",[n._v("运行结果：")]),n._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("received:  18\nchannel closed, data invalid.\n")])])]),a("p",[n._v("先创建了一个有缓冲的 channel，向其发送一个元素，然后关闭此 channel。之后两次尝试从 channel 中读取数据，第一次仍然能正常读出值。第二次返回的 ok 为 false，说明 channel 已关闭，且通道里没有数据。")]),n._v(" "),a("p",[n._v("具体过程可以参考“从 channel 接收数据的过程是怎样的”一节。")])])}),[],!1,null,null,null);t.default=l.exports}}]);