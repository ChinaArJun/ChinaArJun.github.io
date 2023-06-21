(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{873:function(t,e,a){"use strict";a.r(e);var r=a(44),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cron定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cron定时任务"}},[t._v("#")]),t._v(" Cron定时任务")]),t._v(" "),a("p",[t._v("项目地址：https://github.com/EDDYCJY/go-gin-example")]),t._v(" "),a("h2",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),a("ul",[a("li",[t._v("完成定时任务的功能")])]),t._v(" "),a("h2",{attrs:{id:"本文目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[t._v("#")]),t._v(" 本文目标")]),t._v(" "),a("p",[t._v("在实际的应用项目中，定时任务的使用是很常见的。你是否有过 Golang 如何做定时任务的疑问，莫非是轮询，在本文中我们将结合我们的项目讲述 Cron。")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("我们将使用 "),a("a",{attrs:{href:"https://github.com/robfig/cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("cron"),a("OutboundLink")],1),t._v(" 这个包，它实现了 cron 规范解析器和任务运行器，简单来讲就是包含了定时任务所需的功能")]),t._v(" "),a("h3",{attrs:{id:"cron-表达式格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cron-表达式格式"}},[t._v("#")]),t._v(" Cron 表达式格式")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("是否必填")]),t._v(" "),a("th",[t._v("允许的值")]),t._v(" "),a("th",[t._v("允许的特殊字符")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("秒（Seconds）")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("0-59")]),t._v(" "),a("td",[t._v("* / , -")])]),t._v(" "),a("tr",[a("td",[t._v("分（Minutes）")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("0-59")]),t._v(" "),a("td",[t._v("* / , -")])]),t._v(" "),a("tr",[a("td",[t._v("时（Hours）")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("0-23")]),t._v(" "),a("td",[t._v("* / , -")])]),t._v(" "),a("tr",[a("td",[t._v("一个月中的某天（Day of month）")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1-31")]),t._v(" "),a("td",[t._v("* / , - ?")])]),t._v(" "),a("tr",[a("td",[t._v("月（Month）")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1-12 or JAN-DEC")]),t._v(" "),a("td",[t._v("* / , -")])]),t._v(" "),a("tr",[a("td",[t._v("星期几（Day of week）")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("0-6 or SUN-SAT")]),t._v(" "),a("td",[t._v("* / , - ?")])])])]),t._v(" "),a("p",[t._v("Cron表达式表示一组时间，使用 6 个空格分隔的字段")]),t._v(" "),a("p",[t._v("可以留意到 Golang 的 Cron 比 Crontab 多了一个秒级，以后遇到秒级要求的时候就省事了")]),t._v(" "),a("h3",{attrs:{id:"cron-特殊字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cron-特殊字符"}},[t._v("#")]),t._v(" Cron 特殊字符")]),t._v(" "),a("p",[t._v("1、星号 ( * )")]),t._v(" "),a("p",[t._v("星号表示将匹配字段的所有值")]),t._v(" "),a("p",[t._v("2、斜线 ( / )")]),t._v(" "),a("p",[t._v("斜线用户 描述范围的增量，表现为 “N-MAX/x”，first-last/x 的形式，例如 3-59/15 表示此时的第三分钟和此后的每 15 分钟，到59分钟为止。即从 N 开始，使用增量直到该特定范围结束。它不会重复")]),t._v(" "),a("p",[t._v("3、逗号 ( , )")]),t._v(" "),a("p",[t._v("逗号用于分隔列表中的项目。例如，在 Day of week 使用“MON，WED，FRI”将意味着星期一，星期三和星期五")]),t._v(" "),a("p",[t._v("4、连字符 ( - )")]),t._v(" "),a("p",[t._v("连字符用于定义范围。例如，9 - 17 表示从上午 9 点到下午 5 点的每个小时")]),t._v(" "),a("p",[t._v("5、问号 ( ? )")]),t._v(" "),a("p",[t._v("不指定值，用于代替 “ * ”，类似 “ _ ” 的存在，不难理解")]),t._v(" "),a("h3",{attrs:{id:"预定义的-cron-时间表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预定义的-cron-时间表"}},[t._v("#")]),t._v(" 预定义的 Cron 时间表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("输入")]),t._v(" "),a("th",[t._v("简述")]),t._v(" "),a("th",[t._v("相当于")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("@yearly (or @annually)")]),t._v(" "),a("td",[t._v("1月1日午夜运行一次")]),t._v(" "),a("td",[t._v("0 0 0 1 1 *")])]),t._v(" "),a("tr",[a("td",[t._v("@monthly")]),t._v(" "),a("td",[t._v("每个月的午夜，每个月的第一个月运行一次")]),t._v(" "),a("td",[t._v("0 0 0 1 * *")])]),t._v(" "),a("tr",[a("td",[t._v("@weekly")]),t._v(" "),a("td",[t._v("每周一次，周日午夜运行一次")]),t._v(" "),a("td",[t._v("0 0 0 * * 0")])]),t._v(" "),a("tr",[a("td",[t._v("@daily (or @midnight)")]),t._v(" "),a("td",[t._v("每天午夜运行一次")]),t._v(" "),a("td",[t._v("0 0 0 * * *")])]),t._v(" "),a("tr",[a("td",[t._v("@hourly")]),t._v(" "),a("td",[t._v("每小时运行一次")]),t._v(" "),a("td",[t._v("0 0 * * * *")])])])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ go get -u github.com/robfig/cron\n")])])]),a("h2",{attrs:{id:"实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),a("p",[t._v("在上一章节 "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000014393602",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gin实践 连载十 定制 GORM Callbacks"),a("OutboundLink")],1),t._v(" 中，我们使用了 GORM 的回调实现了软删除，同时也引入了另外一个问题")]),t._v(" "),a("p",[t._v("就是我怎么硬删除，我什么时候硬删除？这个往往与业务场景有关系，大致为")]),t._v(" "),a("ul",[a("li",[t._v("另外有一套硬删除接口")]),t._v(" "),a("li",[t._v("定时任务清理（或转移、backup）无效数据")])]),t._v(" "),a("p",[t._v("在这里我们选用第二种解决方案来进行实践")]),t._v(" "),a("h3",{attrs:{id:"编写硬删除代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写硬删除代码"}},[t._v("#")]),t._v(" 编写硬删除代码")]),t._v(" "),a("p",[t._v("打开 models 目录下的 tag.go、article.go文件，分别添加以下代码")]),t._v(" "),a("p",[t._v("1、tag.go")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('func CleanAllTag() bool {\n\tdb.Unscoped().Where("deleted_on != ? ", 0).Delete(&Tag{})\n\n\treturn true\n}\n')])])]),a("p",[t._v("2、article.go")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('func CleanAllArticle() bool {\n\tdb.Unscoped().Where("deleted_on != ? ", 0).Delete(&Article{})\n\n\treturn true\n}\n\n')])])]),a("p",[t._v("注意硬删除要使用 "),a("code",[t._v("Unscoped()")]),t._v("，这是 GORM 的约定")]),t._v(" "),a("h3",{attrs:{id:"编写cron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写cron"}},[t._v("#")]),t._v(" 编写Cron")]),t._v(" "),a("p",[t._v("在 项目根目录下新建 cron.go 文件，用于编写定时任务的代码，写入文件内容")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('package main\n\nimport (\n\t"time"\n\t"log"\n\n\t"github.com/robfig/cron"\n\n\t"github.com/EDDYCJY/go-gin-example/models"\n)\n\nfunc main() {\n\tlog.Println("Starting...")\n\n\tc := cron.New()\n\tc.AddFunc("* * * * * *", func() {\n\t\tlog.Println("Run models.CleanAllTag...")\n\t\tmodels.CleanAllTag()\n\t})\n\tc.AddFunc("* * * * * *", func() {\n\t\tlog.Println("Run models.CleanAllArticle...")\n\t\tmodels.CleanAllArticle()\n\t})\n\n\tc.Start()\n\n\tt1 := time.NewTimer(time.Second * 10)\n\tfor {\n\t\tselect {\n\t\tcase <-t1.C:\n\t\t\tt1.Reset(time.Second * 10)\n\t\t}\n\t}\n}\n')])])]),a("p",[t._v("在这段程序中，我们做了如下的事情")]),t._v(" "),a("h4",{attrs:{id:"cron-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cron-new"}},[t._v("#")]),t._v(" cron.New()")]),t._v(" "),a("p",[t._v("会根据本地时间创建一个新（空白）的 Cron job runner")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func New() *Cron {\n\treturn NewWithLocation(time.Now().Location())\n}\n\n// NewWithLocation returns a new Cron job runner.\nfunc NewWithLocation(location *time.Location) *Cron {\n\treturn &Cron{\n\t\tentries:  nil,\n\t\tadd:      make(chan *Entry),\n\t\tstop:     make(chan struct{}),\n\t\tsnapshot: make(chan []*Entry),\n\t\trunning:  false,\n\t\tErrorLog: nil,\n\t\tlocation: location,\n\t}\n}\n")])])]),a("h4",{attrs:{id:"c-addfunc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-addfunc"}},[t._v("#")]),t._v(" c.AddFunc()")]),t._v(" "),a("p",[t._v("AddFunc 会向 Cron job runner 添加一个 func ，以按给定的时间表运行")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func (c *Cron) AddJob(spec string, cmd Job) error {\n\tschedule, err := Parse(spec)\n\tif err != nil {\n\t\treturn err\n\t}\n\tc.Schedule(schedule, cmd)\n\treturn nil\n}\n")])])]),a("p",[t._v("会首先解析时间表，如果填写有问题会直接 err，无误则将 func 添加到 Schedule 队列中等待执行")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func (c *Cron) Schedule(schedule Schedule, cmd Job) {\n\tentry := &Entry{\n\t\tSchedule: schedule,\n\t\tJob:      cmd,\n\t}\n\tif !c.running {\n\t\tc.entries = append(c.entries, entry)\n\t\treturn\n\t}\n\n\tc.add <- entry\n}\n")])])]),a("p",[t._v("3、c.Start()")]),t._v(" "),a("p",[t._v("在当前执行的程序中启动 Cron 调度程序。其实这里的主体是 goroutine + for + select + timer 的调度控制哦")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func (c *Cron) Run() {\n\tif c.running {\n\t\treturn\n\t}\n\tc.running = true\n\tc.run()\n}\n")])])]),a("h4",{attrs:{id:"time-newtimer-for-select-t1-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-newtimer-for-select-t1-reset"}},[t._v("#")]),t._v(" time.NewTimer + for + select + t1.Reset")]),t._v(" "),a("p",[t._v("如果你是初学者，大概会有疑问，这是干嘛用的？")]),t._v(" "),a("p",[t._v("**（1）time.NewTimer **")]),t._v(" "),a("p",[t._v("会创建一个新的定时器，持续你设定的时间 d 后发送一个 channel 消息")]),t._v(" "),a("p",[a("strong",[t._v("（2）for + select")])]),t._v(" "),a("p",[t._v("阻塞 select 等待 channel")]),t._v(" "),a("p",[a("strong",[t._v("（3）t1.Reset")])]),t._v(" "),a("p",[t._v("会重置定时器，让它重新开始计时")]),t._v(" "),a("p",[t._v("注：本文适用于 “t.C已经取走，可直接使用 Reset”。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("总的来说，这段程序是为了阻塞主程序而编写的，希望你带着疑问来想，有没有别的办法呢？")]),t._v(" "),a("p",[t._v("有的，你直接 "),a("code",[t._v("select{}")]),t._v(" 也可以完成这个需求 😃")]),t._v(" "),a("h2",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ go run cron.go \n2018/04/29 17:03:34 [info] replacing callback `gorm:update_time_stamp` from /Users/eddycjy/go/src/github.com/EDDYCJY/go-gin-example/models/models.go:56\n2018/04/29 17:03:34 [info] replacing callback `gorm:update_time_stamp` from /Users/eddycjy/go/src/github.com/EDDYCJY/go-gin-example/models/models.go:57\n2018/04/29 17:03:34 [info] replacing callback `gorm:delete` from /Users/eddycjy/go/src/github.com/EDDYCJY/go-gin-example/models/models.go:58\n2018/04/29 17:03:34 Starting...\n2018/04/29 17:03:35 Run models.CleanAllArticle...\n2018/04/29 17:03:35 Run models.CleanAllTag...\n2018/04/29 17:03:36 Run models.CleanAllArticle...\n2018/04/29 17:03:36 Run models.CleanAllTag...\n2018/04/29 17:03:37 Run models.CleanAllTag...\n2018/04/29 17:03:37 Run models.CleanAllArticle...\n")])])]),a("p",[t._v("检查输出日志正常，模拟已软删除的数据，定时任务工作OK")]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("定时任务很常见，希望你通过本文能够熟知 Golang 怎么实现一个简单的定时任务调度管理")]),t._v(" "),a("p",[t._v("可以不依赖系统的 Crontab 设置，指不定哪一天就用上了呢")]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("如果你手动修改计算机的系统时间，是会导致定时任务错乱的，所以一般不要乱来。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("h3",{attrs:{id:"本系列示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[t._v("#")]),t._v(" 本系列示例代码")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-gin-example"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"关于"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),a("h3",{attrs:{id:"修改记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[t._v("#")]),t._v(" 修改记录")]),t._v(" "),a("ul",[a("li",[t._v("第一版：2018年02月16日发布文章")]),t._v(" "),a("li",[t._v("第二版：2019年10月02日修改文章")])]),t._v(" "),a("h2",{attrs:{id:"？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#？"}},[t._v("#")]),t._v(" ？")]),t._v(" "),a("p",[t._v("如果有任何疑问或错误，欢迎在 "),a("a",{attrs:{href:"https://github.com/EDDYCJY/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),a("OutboundLink")],1),t._v(" 进行提问或给予修正意见，如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进。")]),t._v(" "),a("h3",{attrs:{id:"我的公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[t._v("#")]),t._v(" 我的公众号")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.eddycjy.com/8d0b0c3a11e74efd5fdfd7910257e70b.jpg",alt:"image"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);