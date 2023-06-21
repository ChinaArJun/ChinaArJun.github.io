(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{999:function(s,t,e){"use strict";e.r(t);var a=e(44),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("slice 的底层数据是数组，slice 是对数组的封装，它描述一个数组的片段。两者都可以通过下标来访问单个元素。")]),s._v(" "),e("p",[s._v("数组是定长的，长度定义好之后，不能再更改。在 Go 中，数组是不常见的，因为其长度是类型的一部分，限制了它的表达能力，比如 [3]int 和 [4]int 就是不同的类型。")]),s._v(" "),e("p",[s._v("而切片则非常灵活，它可以动态地扩容。切片的类型和长度无关。")]),s._v(" "),e("p",[s._v("数组就是一片连续的内存， slice 实际上是一个结构体，包含三个字段：长度、容量、底层数组。")]),s._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// runtime/slice.go\ntype slice struct {\n\tarray unsafe.Pointer // 元素指针\n\tlen   int // 长度 \n\tcap   int // 容量\n}\n")])])]),e("p",[s._v("slice 的数据结构如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/55270142-876c2000-52d6-11e9-99e5-2e921fc2d430.png",alt:"切片数据结构"}})]),s._v(" "),e("p",[s._v("注意，底层数组是可以被多个 slice 同时指向的，因此对一个 slice 的元素进行操作是有可能影响到其他 slice 的。")]),s._v(" "),e("p",[s._v("【引申1】\n[3]int 和 [4]int 是同一个类型吗？")]),s._v(" "),e("p",[s._v("不是。因为数组的长度是类型的一部分，这是与 slice 不同的一点。")]),s._v(" "),e("p",[s._v("【引申2】\n下面的代码输出是什么？")]),s._v(" "),e("p",[s._v("说明：例子来自雨痕大佬《Go学习笔记》第四版，P43页。这里我会进行扩展，并会作图详细分析。")]),s._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package main\n\nimport "fmt"\n\nfunc main() {\n\tslice := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}\n\ts1 := slice[2:5]\n\ts2 := s1[2:6:7]\n\n\ts2 = append(s2, 100)\n\ts2 = append(s2, 200)\n\n\ts1[2] = 20\n\n\tfmt.Println(s1)\n\tfmt.Println(s2)\n\tfmt.Println(slice)\n}\n')])])]),e("p",[s._v("结果：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),e("p",[e("code",[s._v("s1")]),s._v(" 从 "),e("code",[s._v("slice")]),s._v(" 索引2（闭区间）到索引5（开区间，元素真正取到索引4），长度为3，容量默认到数组结尾，为8。\n"),e("code",[s._v("s2")]),s._v(" 从 "),e("code",[s._v("s1")]),s._v(" 的索引2（闭区间）到索引6（开区间，元素真正取到索引5），容量到索引7（开区间，真正到索引6），为5。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/54960948-c5490b80-4f99-11e9-8772-66d102caae8e.png",alt:"slice origin"}})]),s._v(" "),e("p",[s._v("接着，向 "),e("code",[s._v("s2")]),s._v(" 尾部追加一个元素 100：")]),s._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("s2 = append(s2, 100)\n")])])]),e("p",[e("code",[s._v("s2")]),s._v(" 容量刚好够，直接追加。不过，这会修改原始数组对应位置的元素。这一改动，数组和 "),e("code",[s._v("s1")]),s._v(" 都可以看得到。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/54960896-8ca93200-4f99-11e9-86de-df4d85cca135.png",alt:"append 100"}})]),s._v(" "),e("p",[s._v("再次向 "),e("code",[s._v("s2")]),s._v(" 追加元素200：")]),s._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("s2 = append(s2, 100)\n")])])]),e("p",[s._v("这时，"),e("code",[s._v("s2")]),s._v(" 的容量不够用，该扩容了。于是，"),e("code",[s._v("s2")]),s._v(" 另起炉灶，将原来的元素复制新的位置，扩大自己的容量。并且为了应对未来可能的 "),e("code",[s._v("append")]),s._v(" 带来的再一次扩容，"),e("code",[s._v("s2")]),s._v(" 会在此次扩容的时候多留一些 "),e("code",[s._v("buffer")]),s._v("，将新的容量将扩大为原始容量的2倍，也就是10了。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/54961368-4654d280-4f9b-11e9-9b00-de96c6eedea9.png",alt:"append 200"}})]),s._v(" "),e("p",[s._v("最后，修改 "),e("code",[s._v("s1")]),s._v(" 索引为2位置的元素：")]),s._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("s1[2] = 20\n")])])]),e("p",[s._v("这次只会影响原始数组相应位置的元素。它影响不到 "),e("code",[s._v("s2")]),s._v(" 了，人家已经远走高飞了。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/54961330-29200400-4f9b-11e9-88d0-a29308a818ae.png",alt:"s1[2]=20"}})]),s._v(" "),e("p",[s._v("再提一点，打印 "),e("code",[s._v("s1")]),s._v(" 的时候，只会打印出 "),e("code",[s._v("s1")]),s._v(" 长度以内的元素。所以，只会打印出3个元素，虽然它的底层数组不止3个元素。")])])}),[],!1,null,null,null);t.default=n.exports}}]);