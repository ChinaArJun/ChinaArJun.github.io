(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{967:function(t,e,n){"use strict";n.r(e);var i=n(44),o=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("p",[this._v("我们都知道，Go runtime 会负责 goroutine 的生老病死，从创建到销毁，都一手包办。Runtime 会在程序启动的时候，创建 M 个线程（CPU 执行调度的单位），之后创建的 N 个 goroutine 都会依附在这 M 个线程上执行。这就是 M:N 模型：")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/61340362-8c001880-a874-11e9-9237-d97e6105cd62.png",alt:"M:N scheduling"}})]),this._v(" "),e("p",[this._v("在同一时刻，一个线程上只能跑一个 goroutine。当 goroutine 发生阻塞（例如上篇文章提到的向一个 channel 发送数据，被阻塞）时，runtime 会把当前 goroutine 调度走，让其他 goroutine 来执行。目的就是不让一个线程闲着，榨干 CPU 的每一滴油水。")])])}),[],!1,null,null,null);e.default=o.exports}}]);