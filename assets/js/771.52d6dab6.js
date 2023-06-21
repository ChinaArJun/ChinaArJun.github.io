(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1372:function(t,_,a){"use strict";a.r(_);var v=a(44),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql高级知识-第3章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql高级知识-第3章"}},[t._v("#")]),t._v(" MySQL高级知识-第3章")]),t._v(" "),a("p",[t._v("[toc]")]),t._v(" "),a("h2",{attrs:{id:"索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),a("h3",{attrs:{id:"索引是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引是什么"}},[t._v("#")]),t._v(" 索引是什么")]),t._v(" "),a("ol",[a("li",[t._v("索引是数据结构")])]),t._v(" "),a("p",[t._v("Index-"),a("strong",[t._v("索引是帮助MySQL高效获取数据的"),a("code",[t._v("数据结构")])]),t._v("，可以理解为是"),a("strong",[t._v("排序好的快速查找数据结构")])]),t._v(" "),a("ul",[a("li",[t._v("这句话怎么理解呢？")])]),t._v(" "),a("p",[t._v("在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这种数据结构就是索引。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Syncma/Figurebed/master/img/1578113695132.png",alt:"Alt text"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("索引的目的")])]),t._v(" "),a("p",[t._v("索引的目标在于查询效率，可以类比字典")]),t._v(" "),a("p",[t._v("如果要查mysql这个单词，肯定需要首先定位m, 然后从上到下找到y字母，再找到剩下的s->q->l")]),t._v(" "),a("p",[t._v("如果没有索引，那么可能需要a-----z.....")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("一般来说索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储在磁盘上")])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("索引结构")])]),t._v(" "),a("p",[t._v("索引一般都是指B树")]),t._v(" "),a("p",[t._v("复合索引，前缀索引，唯一索引默认都是使用B+树")]),t._v(" "),a("p",[a("strong",[t._v("这两者有什么区别呢？")])]),t._v(" "),a("h3",{attrs:{id:"b树与b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b树与b-树"}},[t._v("#")]),t._v(" B树与B+树")]),t._v(" "),a("h4",{attrs:{id:"b树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b树"}},[t._v("#")]),t._v(" B树")]),t._v(" "),a("ol",[a("li",[t._v("二叉树")])]),t._v(" "),a("p",[t._v("要理解B树，必须从二叉查找树（Binary search tree）讲起")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Syncma/Figurebed/master/img/二叉树.png",alt:"Alt text"}})]),t._v(" "),a("p",[t._v("二叉查找树是一种查找效率非常高的数据结构，它有三个特点。")]),t._v(" "),a("blockquote",[a("p",[t._v("（1）每个节点最多只有两个子树。\n（2）左子树都为小于父节点的值，右子树都为大于父节点的值。\n（3）在n个节点中找到目标值，一般只需要log(n)次比较。")])]),t._v(" "),a("p",[t._v("二叉查找树的结构不适合数据库，因为它的查找效率与层数相关。")]),t._v(" "),a("p",[t._v("越处在下层的数据，就需要越多次比较。")]),t._v(" "),a("p",[t._v("极端情况下，n个数据需要n次比较才能找到目标值。")]),t._v(" "),a("p",[t._v("对于数据库来说，每进入一层，就要从硬盘读取一次数据，这非常致命，因为硬盘的读取时间远远大于数据处理时间，数据库读取硬盘的次数越少越好。")]),t._v(" "),a("br"),t._v("\n2. B树\n"),a("p",[t._v("B树是对二叉查找树的改进。")]),t._v(" "),a("p",[t._v("它的设计思想是，将相关数据尽量集中在一起，以便一次读取多个数据，减少硬盘操作次数。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Syncma/Figurebed/master/img/B树.png",alt:"Alt text"}})]),t._v(" "),a("p",[t._v("B树的特点也有三个。")]),t._v(" "),a("blockquote",[a("p",[t._v('（1）一个节点可以容纳多个值。比如上图中，最多的一个节点容纳了4个值。\n（2）除非数据已经填满，否则不会增加新的层。也就是说，B树追求"层"越少越好。\n（3）子节点中的值，与父节点中的值，有严格的大小对应关系。一般来说，如果父节点有a个值，那么就有a+1个子节点。比如上图中，父节点有两个值（7和16），就对应三个子节点，第一个子节点都是小于7的值，最后一个子节点都是大于16的值，中间的子节点就是7和16之间的值。')])]),t._v(" "),a("p",[t._v("这种数据结构，非常有利于减少读取硬盘的次数。")]),t._v(" "),a("p",[t._v("假定一个节点可以容纳100个值，那么3层的B树可以容纳100万个数据，如果换成二叉查找树，则需要20层！假定操作系统一次读取一个节点，并且根节点保留在内存中，那么B树在100万个数据中查找目标值，只需要读取两次硬盘。")]),t._v(" "),a("h4",{attrs:{id:"题外话-磁盘io问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题外话-磁盘io问题"}},[t._v("#")]),t._v(" 题外话 磁盘IO问题")]),t._v(" "),a("p",[t._v("问题:")]),t._v(" "),a("blockquote",[a("p",[t._v("数据库索引是存在磁盘上的，当数据量比较大的时候，索引大小也会很大\n这时候我们利用索引查询的时候，能把整个索引全部加载到内存中？")])]),t._v(" "),a("p",[a("strong",[t._v("答案是显然不能，能做的只有逐一加载每个磁盘页，这样的磁盘页对应索引树的节点")])]),t._v(" "),a("p",[t._v("磁盘IO的次数 等于二叉树的高度")]),t._v(" "),a("p",[t._v("所以为了减少磁盘IO的次数， B树(B-树)就出现了")]),t._v(" "),a("h4",{attrs:{id:"b树插入删除原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b树插入删除原理"}},[t._v("#")]),t._v(" B树插入删除原理")]),t._v(" "),a("p",[t._v("-待补充")]),t._v(" "),a("h4",{attrs:{id:"b-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[t._v("#")]),t._v(" B+树")]),t._v(" "),a("p",[t._v("B+树是基于B-树的一种变体，有着比B-树更高的查询性能")]),t._v(" "),a("p",[t._v("首先，每个父节点的元素都出现在子节点中，是子节点的最大（或最小）元素")]),t._v(" "),a("p",[t._v("至于子节点，由于父节点的元素都出现在子节点中，因此所有子节点包含全量元素信息")]),t._v(" "),a("p",[t._v("并且每个叶子节点都指向下一个节点的指针，形成了一个有序链表")]),t._v(" "),a("p",[t._v("如图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Syncma/Figurebed/master/img/1578287413276.png",alt:"Alt text"}})]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("B+树相比于B-树的优势有三个")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("单一节点存储更多的元素，使得查询的IO次数更少")]),t._v(" "),a("li",[t._v("所有查询都要查找到叶子节点，查询性能稳定")]),t._v(" "),a("li",[t._v("所有叶子节点形成有序链表，便于范围查询")])])]),t._v(" "),a("h4",{attrs:{id:"b-树插入删除原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树插入删除原理"}},[t._v("#")]),t._v(" B+树插入删除原理")]),t._v(" "),a("p",[t._v("-待补充")]),t._v(" "),a("h3",{attrs:{id:"优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),a("p",[t._v("类似图书馆建书目索引，提高数据检索的效率，"),a("strong",[t._v("降低数据库的IO成本")])]),t._v(" "),a("p",[t._v("通过索引对数据进行排序，降低数据排序的成本，"),a("strong",[t._v("降低了CPU的损耗")])]),t._v(" "),a("h3",{attrs:{id:"劣势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#劣势"}},[t._v("#")]),t._v(" 劣势")]),t._v(" "),a("p",[t._v("实际上索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录，所以"),a("strong",[t._v("索引列也是需要占用空间的")])]),t._v(" "),a("p",[t._v("虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行insert, update和delete.因为更新表，mysql不仅要保存数据，还要保存下一个索引文件每次更新添加了索引列的字段，都会调整因为更新所带来的键值变化后的索引信息")]),t._v(" "),a("p",[t._v("索引只是提高效率的一个因素，如果你的MySQL有大数据量的表，需要花时间建立最优秀的索引或者优化查询")]),t._v(" "),a("h3",{attrs:{id:"索引分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引分类"}},[t._v("#")]),t._v(" 索引分类")]),t._v(" "),a("h4",{attrs:{id:"单值索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单值索引"}},[t._v("#")]),t._v(" 单值索引")]),t._v(" "),a("p",[t._v("一个索引只包含单个列，一个表可以有多个单列索引")]),t._v(" "),a("h4",{attrs:{id:"唯一索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#唯一索引"}},[t._v("#")]),t._v(" 唯一索引")]),t._v(" "),a("p",[t._v("索引列的值必须唯一，但允许有空值")]),t._v(" "),a("h4",{attrs:{id:"复合索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合索引"}},[t._v("#")]),t._v(" 复合索引")]),t._v(" "),a("p",[t._v("一个索引包含多个列")]),t._v(" "),a("h4",{attrs:{id:"基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),a("p",[t._v("1.创建")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("create [unique] index indexname on mytable(columnname(length))\nalter mytable add [unique] index [indexname] on (columnname(length))\n")])])]),a("p",[t._v("2.删除")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("drop index [indexname] on mytable\n")])])]),a("p",[t._v("3.查看")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("show index from table_name\\G\n")])])]),a("p",[t._v("4.使用alter命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ALTER TABLE TABLE_NAME ADD PRIMARY KEY(COLUMN_LIST) # 添加主键\n\nALTER TABLE TABLE_NAME ADD UNIQUE index_name(column_list) # 创建索引的值必须是唯一的\n\nALTER TABLE TABLE_NAME ADD INDEX index_name(column_list) # 添加普通索引\n\nALTER TABLE table_name ADD FULLTEXT index_name(column_list) # 全文索引\n\n")])])]),a("h3",{attrs:{id:"索引结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引结构"}},[t._v("#")]),t._v(" 索引结构")]),t._v(" "),a("h4",{attrs:{id:"btree索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#btree索引"}},[t._v("#")]),t._v(" BTree索引")]),t._v(" "),a("p",[t._v("检索原理 -待补充")]),t._v(" "),a("h4",{attrs:{id:"hash索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash索引"}},[t._v("#")]),t._v(" Hash索引")]),t._v(" "),a("p",[t._v("-待补充")]),t._v(" "),a("h4",{attrs:{id:"fulltext索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fulltext索引"}},[t._v("#")]),t._v(" FullText索引")]),t._v(" "),a("p",[t._v("-待补充")]),t._v(" "),a("h4",{attrs:{id:"r-tree索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-tree索引"}},[t._v("#")]),t._v(" R-Tree索引")]),t._v(" "),a("p",[t._v("-待补充")]),t._v(" "),a("h3",{attrs:{id:"索引必要性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引必要性"}},[t._v("#")]),t._v(" 索引必要性")]),t._v(" "),a("ol",[a("li",[t._v("哪些情况需要创建索引？")])]),t._v(" "),a("ul",[a("li",[t._v("主键自动创建唯一索引")]),t._v(" "),a("li",[t._v("频繁作为查询条件的字段应该创建索引")]),t._v(" "),a("li",[t._v("查询中与其他表关联的字段，外键关系建立索引")]),t._v(" "),a("li",[t._v("频繁更新的字段不适合创建索引")]),t._v(" "),a("li",[t._v("Where条件里用不到的字段不创建索引")]),t._v(" "),a("li",[t._v("单键/组合索引的选择问题？")]),t._v(" "),a("li",[t._v("查询中排序的字段，排序字段若通过索引去访问将大大提高排序速度")]),t._v(" "),a("li",[t._v("查询中统计或者分组字段")])]),t._v(" "),a("p",[t._v("2.哪些情况不需要创建索引？")]),t._v(" "),a("ul",[a("li",[t._v("表记录太少")]),t._v(" "),a("li",[t._v("经常增删改的表")]),t._v(" "),a("li",[t._v("数据重复且分布平均的表字段，因此应该只为最经常查询和最经常排序的数据列建立索引。如果某个数据列包含许多重复的内容，为它创建索引没有太大的实际效果")])]),t._v(" "),a("h3",{attrs:{id:"索引工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引工作原理"}},[t._v("#")]),t._v(" 索引工作原理")]),t._v(" "),a("p",[t._v("-待补充")]),t._v(" "),a("h3",{attrs:{id:"性能分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能分析"}},[t._v("#")]),t._v(" 性能分析")]),t._v(" "),a("p",[t._v("-待补充")]),t._v(" "),a("h3",{attrs:{id:"索引优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引优化"}},[t._v("#")]),t._v(" 索引优化")]),t._v(" "),a("ul",[a("li",[t._v("全值匹配")]),t._v(" "),a("li",[t._v("最佳左前缀法则 -查询从索引的最左前列开始并且不跳过索引中的列")]),t._v(" "),a("li",[t._v("不在索引列上做任何操作，包含计算，函数，自动或者手动类型转化")]),t._v(" "),a("li",[t._v("存储引擎不能使用索引中范围条件右边的列")]),t._v(" "),a("li",[t._v("尽量使用覆盖索引（只访问索引的查询），减少select *")]),t._v(" "),a("li",[t._v("mysql在使用不等于的时候无法使用索引会导致全表扫描")]),t._v(" "),a("li",[t._v("is null, is not null 也无法使用索引")]),t._v(" "),a("li",[t._v("like 以通配符开头(%abc)，mysql索引失效会变成全表扫描的操作")]),t._v(" "),a("li",[t._v("字符串不加单引号索引失效")]),t._v(" "),a("li",[t._v("少用or,用它来连接时索引会失效")])]),t._v(" "),a("p",[a("strong",[t._v("-"),a("code",[t._v("需要每一条要有实例进行操作才能掌握")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);