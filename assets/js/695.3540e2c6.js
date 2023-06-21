(window.webpackJsonp=window.webpackJsonp||[]).push([[695],{1295:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"关于统计诗词字云中的解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于统计诗词字云中的解决方案"}},[t._v("#")]),t._v(" 关于统计诗词字云中的解决方案")]),t._v(" "),a("p",[t._v("周末写了两个脚本，用以统计诗词中的高频字，并抽取其中意象作为飞花令的令字。这两个脚本的地址以及所做如下")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/ChinaArJun/shici-server/blob/master/bin/charCloud.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("bin/charCloud.js"),a("OutboundLink")],1),t._v(": 把50万诗词按字、作者朝代、高频作者做关键字，使用 "),a("code",[t._v("redis.incr")]),t._v(" 计数，存入 "),a("code",[t._v("redis")]),t._v(" 中")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ChinaArJun/shici-server/blob/master/bin/charCloudStat.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("bin/charCloudStat.js"),a("OutboundLink")],1),t._v(": 根据以上脚本的计数结果，再把 "),a("code",[t._v("redis")]),t._v(" 中的数据迁移到 "),a("code",[t._v("postgres")]),t._v(" 中")])]),t._v(" "),a("blockquote",[a("p",[t._v("原文地址: "),a("a",{attrs:{href:"https://blog.zhequtao.com/post/poem-char-frequent-stat",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.zhequtao.com/post/poem-char-frequent-stat"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"why-redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-redis"}},[t._v("#")]),t._v(" why redis")]),t._v(" "),a("p",[t._v("那为什么不直接存到 "),a("code",[t._v("postgres")]),t._v(" 中，非要在 "),a("code",[t._v("redis")]),t._v(" 中走一遭呢？")]),t._v(" "),a("ol",[a("li",[t._v("原子性: "),a("code",[t._v("incr")]),t._v(" 保证原子性 (postgres 需要设置事务和隔离级 RR/ 或者 select for update / 或者加一个分布式锁)")]),t._v(" "),a("li",[t._v("性能: 快速定位 key (postgres 虽然也可以设置索引，但会在插入数据过程中大大降低速度)")])]),t._v(" "),a("p",[t._v("以下是两种方案的伪代码对比:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("key")]),t._v(" 根据字、朝代、作者生成")]),t._v(" "),a("li",[a("code",[t._v("count")]),t._v(" 代表该 "),a("code",[t._v("key")]),t._v(" 出现的次数")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 redis")]),t._v("\nredis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("incr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 postgres")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不仅需要额外保证原子性，而且代码也更复杂一些")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cloud "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'count'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"postgres-的原子性与隔离级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgres-的原子性与隔离级"}},[t._v("#")]),t._v(" postgres 的原子性与隔离级")]),t._v(" "),a("p",[a("strong",[t._v("虽然在我脚本中并没有使用 "),a("code",[t._v("postgres")]),t._v("，但我也把它拿出来分析一下")])]),t._v(" "),a("p",[t._v("当每来一个关键字时，所要执行的 "),a("code",[t._v("SQL")]),t._v(" 如下")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" cloud "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 如果存在")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Question 2: 此时的 count 如果在 R/W 之间刚好改变呢")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" cloud "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 如果不存在")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Question 1: 在判断为不存在的时候，此时确实不存在吗？如果恰好在 R/W 之间插入一条数据呢")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" cloud "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("select for update")]),t._v(" 加一个悲观锁解决问题")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 锁住该行，知道 commit/rollback")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" cloud "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" cloud "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" cloud "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"数据完整性重要吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据完整性重要吗"}},[t._v("#")]),t._v(" 数据完整性重要吗")]),t._v(" "),a("p",[t._v("不一定，特别是在这种求 TOP 的情况下，他只需要得出相对排序即可。也就是说，你即使不对 "),a("code",[t._v("postgres")]),t._v(" 做一些原子性保证的处理，最后得到的数据也会差不了多少。")]),t._v(" "),a("h2",{attrs:{id:"top-500"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top-500"}},[t._v("#")]),t._v(" TOP 500")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" array_to_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" char_cloud "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("写一个 SQL 查出来数据如下")]),t._v(" "),a("blockquote",[a("p",[t._v("不人一风山无有天云日来何花春中年生月如时自水上为相心此长我清江秋知君未雨归白得子千高三今空见青行里去明老下万是夜事寒谁玉在家可酒南客与声处东飞金已落流多门前新欲西烟成书道深更海古香出看诗开地重石作黄头光梦之能朝草尽世入几色游十同林城远从还当情气间回树名思意亦马红雪大愁平犹百难将然尘龙路似公过独阳旧身小到满衣歌莫华复好仙望应闻向分方后楼非起五笑问故安外岁文别真竹神醉须言初孤发阴留以坐边台幽霜松叶北吾岂影两半溪少所绿四语双传又晚先其正翠物湖随碧王野馀共九柳波枝惊吹露曾怀浮国河断轻乐鸟吟微暮芳堂舟残对眼离画手经苍关逢寻只久若尚数兮儿却居梅照怜听才木二兴曲窗临忽堪鱼汉星峰泉终官宫近疏且足者凉萧于闲喜绝乡鸣车太苦士依庭紫亭夕首鹤燕使往转连登丹常忆期动园遥灵节晴胜爱垂昔穷载至容倚学虚和晓送横泪寄度池识休雁沙州田桃病凤忘散隐夫群恨早尔悲六元斜荒觉遗女合静都珠解便灯易亲乱说信许待杯閒隔但功通火冷丝惟定令斗寂死论因会霞兰贤用立而细纷笔奇径景陵争颜面屋带翁吴罗锦力郎主结舞著观化佳点疑冰浪迹川阁岩虽楚赋迟薄交尺直帘目飘章欢食愿船忧桥鼓卧钟字魂念村消乃宁破本底图帝乘异悠那谷移饮翻步啼劳诸原端想皇素息蓬冠朱民尊")])]),t._v(" "),a("p",[t._v("只保留一些关于表意向的词，保留前"),a("s",[t._v("一百")]),t._v("20个表意向的字。春花秋月齐了，春江花月夜也齐了")]),t._v(" "),a("blockquote",[a("p",[t._v("人风山天云日花春月水心江秋君雨夜玉酒客声")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("最后，欢迎关注我的公众号"),a("strong",[t._v("中关村程序员")]),t._v("进行交流")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog.zhequtao.com/qrcode.jpg",alt:"欢迎关注公众号中关村程序员，在这里记录我的技术成长，欢迎交流"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);