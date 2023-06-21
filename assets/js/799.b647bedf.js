(window.webpackJsonp=window.webpackJsonp||[]).push([[799],{1400:function(_,v,e){"use strict";e.r(v);var c=e(44),d=Object(c.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"b-树索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-树索引"}},[_._v("#")]),_._v(" B+树索引")]),_._v(" "),e("p",[_._v("标签： MySQL是怎样运行的")]),_._v(" "),e("hr"),_._v(" "),e("p",[_._v("前边我们详细唠叨了"),e("code",[_._v("InnoDB")]),_._v("数据页的7个组成部分，知道了各个数据页可以组成一个"),e("code",[_._v("双向链表")]),_._v("，而每个数据页中的记录会按照主键值从小到大的顺序组成一个"),e("code",[_._v("单向链表")]),_._v("，每个数据页都会为存储在它里边儿的记录生成一个"),e("code",[_._v("页目录")]),_._v("，在通过主键查找某条记录的时候可以在"),e("code",[_._v("页目录")]),_._v("中使用二分法快速定位到对应的槽，然后再遍历该槽对应分组中的记录即可快速找到指定的记录（如果你对这段话有一丁点儿疑惑，那么接下来的部分不适合你，返回去看一下数据页结构吧）。页和记录的关系示意图如下：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd1b8eafbb4?w=1092&h=340&f=png&s=89754",alt:"image_1cov976plf2u1j3g1jp8serjc616.png-87.7kB"}})]),_._v(" "),e("p",[_._v("其中页a、页b、页c ... 页n 这些页可以不在物理结构上相连，只要通过双向链表相关联即可。")]),_._v(" "),e("h2",{attrs:{id:"没有索引的查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#没有索引的查找"}},[_._v("#")]),_._v(" 没有索引的查找")]),_._v(" "),e("p",[_._v("本集的主题是"),e("code",[_._v("索引")]),_._v("，在正式介绍"),e("code",[_._v("索引")]),_._v("之前，我们需要了解一下没有索引的时候是怎么查找记录的。为了方便大家理解，我们下边先只唠叨搜索条件为对某个列精确匹配的情况，所谓精确匹配，就是搜索条件中用等于"),e("code",[_._v("=")]),_._v("连接起的表达式，比如这样：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("SELECT [列名列表] FROM 表名 WHERE 列名 = xxx;\n")])])]),e("h3",{attrs:{id:"在一个页中的查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在一个页中的查找"}},[_._v("#")]),_._v(" 在一个页中的查找")]),_._v(" "),e("p",[_._v("假设目前表中的记录比较少，所有的记录都可以被存放到一个页中，在查找记录的时候可以根据搜索条件的不同分为两种情况：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("以主键为搜索条件")]),_._v(" "),e("p",[_._v("这个查找过程我们已经很熟悉了，可以在"),e("code",[_._v("页目录")]),_._v("中使用二分法快速定位到对应的槽，然后再遍历该槽对应分组中的记录即可快速找到指定的记录。")])]),_._v(" "),e("li",[e("p",[_._v("以其他列作为搜索条件")]),_._v(" "),e("p",[_._v("对非主键列的查找的过程可就不这么幸运了，因为在数据页中并没有对非主键列建立所谓的"),e("code",[_._v("页目录")]),_._v("，所以我们无法通过二分法快速定位相应的"),e("code",[_._v("槽")]),_._v("。这种情况下只能从"),e("code",[_._v("最小记录")]),_._v("开始依次遍历单链表中的每条记录，然后对比每条记录是不是符合搜索条件。很显然，这种查找的效率是非常低的。")])])]),_._v(" "),e("h3",{attrs:{id:"在很多页中查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在很多页中查找"}},[_._v("#")]),_._v(" 在很多页中查找")]),_._v(" "),e("p",[_._v("大部分情况下我们表中存放的记录都是非常多的，需要好多的数据页来存储这些记录。在很多页中查找记录的话可以分为两个步骤：")]),_._v(" "),e("ol",[e("li",[_._v("定位到记录所在的页。")]),_._v(" "),e("li",[_._v("从所在的页内中查找相应的记录。")])]),_._v(" "),e("p",[_._v("在没有索引的情况下，不论是根据主键列或者其他列的值进行查找，"),e("span",{staticStyle:{color:"red"}},[_._v("由于我们并不能快速的定位到记录所在的页，所以只能从第一个页沿着双向链表一直往下找，在每一个页中根据我们刚刚唠叨过的查找方式去查找指定的记录")]),_._v("。因为要遍历所有的数据页，所以这种方式显然是超级耗时的，如果一个表有一亿条记录，使用这种方式去查找记录那要等到猴年马月才能等到查找结果。所以祖国和人民都在期盼一种能高效完成搜索的方法，"),e("code",[_._v("索引")]),_._v("同志就要亮相登台了。")]),_._v(" "),e("h2",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[_._v("#")]),_._v(" 索引")]),_._v(" "),e("p",[_._v("为了故事的顺利发展，我们先建一个表：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("mysql> CREATE TABLE index_demo(\n    ->     c1 INT,\n    ->     c2 INT,\n    ->     c3 CHAR(1),\n    ->     PRIMARY KEY(c1)\n    -> ) ROW_FORMAT = Compact;\nQuery OK, 0 rows affected (0.03 sec)\n")])])]),e("p",[_._v("这个新建的"),e("code",[_._v("index_demo")]),_._v("表中有2个"),e("code",[_._v("INT")]),_._v("类型的列，1个"),e("code",[_._v("CHAR(1)")]),_._v("类型的列，而且我们规定了"),e("code",[_._v("c1")]),_._v("列为主键，这个表使用"),e("code",[_._v("Compact")]),_._v("行格式来实际存储记录的。为了我们理解上的方便，我们简化了一下"),e("code",[_._v("index_demo")]),_._v("表的行格式示意图：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd1ba8d05b2?w=1053&h=410&f=png&s=99439",alt:"image_1caac8jr7hhcld017gd1lch1n1m33.png-97.1kB"}})]),_._v(" "),e("p",[_._v("我们只在示意图里展示记录的这几个部分：")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("record_type")]),_._v("：记录头信息的一项属性，表示记录的类型，"),e("code",[_._v("0")]),_._v("表示普通记录、"),e("code",[_._v("2")]),_._v("表示最小记录、"),e("code",[_._v("3")]),_._v("表示最大记录、"),e("code",[_._v("1")]),_._v("我们还没用过，等会再说～")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("next_record")]),_._v("：记录头信息的一项属性，表示下一条地址相对于本条记录的地址偏移量，为了方便大家理解，我们都会用箭头来表明下一条记录是谁。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("各个列的值")]),_._v("：这里只记录在"),e("code",[_._v("index_demo")]),_._v("表中的三个列，分别是"),e("code",[_._v("c1")]),_._v("、"),e("code",[_._v("c2")]),_._v("和"),e("code",[_._v("c3")]),_._v("。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("其他信息")]),_._v("：除了上述3种信息以外的所有信息，包括其他隐藏列的值以及记录的额外信息。")])])]),_._v(" "),e("p",[_._v("为了节省篇幅，我们之后的示意图中会把记录的"),e("code",[_._v("其他信息")]),_._v("这个部分省略掉，因为它占地方并且不会有什么观赏效果。另外，为了方便理解，我们觉得把记录竖着放看起来感觉更好，所以将记录格式示意图的"),e("code",[_._v("其他信息")]),_._v("去掉并把它竖起来的效果就是这样：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd1b0cad198?w=642&h=471&f=png&s=69741",alt:"image_1caacokob6ne1nv41meda0s7vk3g.png-68.1kB"}})]),_._v(" "),e("p",[_._v("把一些记录放到页里边的示意图就是：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd1be0d43ce?w=969&h=517&f=png&s=81754",alt:"image_1caadhc4g1pb7hk81fcd4vt1u6r3t.png-79.8kB"}})]),_._v(" "),e("h3",{attrs:{id:"一个简单的索引方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的索引方案"}},[_._v("#")]),_._v(" 一个简单的索引方案")]),_._v(" "),e("p",[_._v("回到正题，我们在根据某个搜索条件查找一些记录时为什么要遍历所有的数据页呢？"),e("span",{staticStyle:{color:"red"}},[_._v("因为各个页中的记录并没有规律，我们并不知道我们的搜索条件匹配哪些页中的记录，所以 "),e("em",[e("strong",[_._v("不得不")])]),_._v(" 依次遍历所有的数据页")]),_._v("。所以如果我们想快速的定位到需要查找的记录在哪些数据页中该咋办？还记得我们为根据主键值快速定位一条记录在页中的位置而设立的页目录么？我们也可以想办法为快速定位记录所在的数据页而建立一个别的目录，建这个目录必须完成下边这些事儿：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("下一个数据页中用户记录的主键值必须大于上一个页中用户记录的主键值。")]),_._v(" "),e("p",[_._v("为了故事的顺利发展，我们这里需要做一个假设：假设我们的每个数据页最多能存放3条记录（实际上一个数据页非常大，可以存放下好多记录）。有了这个假设之后我们向"),e("code",[_._v("index_demo")]),_._v("表插入3条记录：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("mysql> INSERT INTO index_demo VALUES(1, 4, 'u'), (3, 9, 'd'), (5, 3, 'y');\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n")])])]),e("p",[_._v("那么这些记录已经按照主键值的大小串联成一个单向链表了，如图所示：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd1b5a6e2af?w=507&h=399&f=png&s=30170",alt:"image_1caaf26411d51bq7jtrvesr04a.png-29.5kB"}})]),_._v(" "),e("p",[_._v("从图中可以看出来，"),e("code",[_._v("index_demo")]),_._v("表中的3条记录都被插入到了编号为"),e("code",[_._v("10")]),_._v("的数据页中了。此时我们再来插入一条记录：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("mysql> INSERT INTO index_demo VALUES(4, 4, 'a');\nQuery OK, 1 row affected (0.00 sec)\n")])])]),e("p",[_._v("因为"),e("code",[_._v("页10")]),_._v("最多只能放3条记录，所以我们"),e("span",{staticStyle:{color:"red"}},[_._v("不得不")]),_._v("再分配一个新页：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd1b581b013?w=876&h=397&f=png&s=45569",alt:"image_1caafbcj1qpo1ad2j8q1ci4136s4n.png-44.5kB"}})]),_._v(" "),e("p",[_._v("咦？怎么分配的页号是"),e("code",[_._v("28")]),_._v("呀，不应该是"),e("code",[_._v("11")]),_._v("么？再次强调一遍，"),e("span",{staticStyle:{color:"red"}},[_._v("新分配的数据页编号可能并不是连续的，也就是说我们使用的这些页在存储空间里可能并不挨着")]),_._v("。它们只是通过维护着上一个页和下一个页的编号而建立了链表关系。另外，"),e("code",[_._v("页10")]),_._v("中用户记录最大的主键值是"),e("code",[_._v("5")]),_._v("，而"),e("code",[_._v("页28")]),_._v("中有一条记录的主键值是"),e("code",[_._v("4")]),_._v("，因为"),e("code",[_._v("5 > 4")]),_._v("，所以这就不符合"),e("span",{staticStyle:{color:"red"}},[_._v("下一个数据页中用户记录的主键值必须大于上一个页中用户记录的主键值")]),_._v("的要求，所以在插入主键值为"),e("code",[_._v("4")]),_._v("的记录的时候需要伴随着一次记录移动，也就是把主键值为"),e("code",[_._v("5")]),_._v("的记录移动到"),e("code",[_._v("页28")]),_._v("中，然后再把主键值为"),e("code",[_._v("4")]),_._v("的记录插入到"),e("code",[_._v("页10")]),_._v("中，这个过程的示意图如下：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd2641f1c47?w=880&h=565&f=png&s=99219",alt:"image_1caafkq3h1akv1mde14h2kjul6554.png-96.9kB"}})]),_._v(" "),e("p",[_._v("这个过程表明了在对页中的记录进行增删改操作的过程中，我们必须通过一些诸如记录移动的操作来始终保证这个状态一直成立："),e("span",{staticStyle:{color:"red"}},[_._v("下一个数据页中用户记录的主键值必须大于上一个页中用户记录的主键值")]),_._v("。这个过程我们也可以称为"),e("code",[_._v("页分裂")]),_._v("。")])]),_._v(" "),e("li",[e("p",[_._v("给所有的页建立一个目录项。")]),_._v(" "),e("p",[_._v("由于"),e("span",{staticStyle:{color:"red"}},[_._v("数据页的编号可能并不是连续的")]),_._v("，所以在向"),e("code",[_._v("index_demo")]),_._v("表中插入许多条记录后，可能是这样的效果：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd27e1f3cf3?w=1146&h=267&f=png&s=67255",alt:"image_1cab9u9midn61fgq1mi58j0gadm.png-65.7kB"}})]),_._v(" "),e("p",[_._v("因为这些"),e("code",[_._v("16KB")]),_._v("的页在物理存储上可能并不挨着，所以如果想从这么多页中根据主键值快速定位某些记录所在的页，我们需要给它们做个目录，"),e("span",{staticStyle:{color:"red"}},[_._v("每个页对应一个目录项")]),_._v("，每个目录项包括下边两个部分：")]),_._v(" "),e("ul",[e("li",[_._v("页的用户记录中最小的主键值，我们用"),e("code",[_._v("key")]),_._v("来表示。")]),_._v(" "),e("li",[_._v("页号，我们用"),e("code",[_._v("page_no")]),_._v("表示。")])]),_._v(" "),e("p",[_._v("所以我们为上边几个页做好的目录就像这样子：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd282d6b9b9?w=1098&h=573&f=png&s=121929",alt:"image_1caba0afo11fa1cli1nu070m16bg1j.png-119.1kB"}})]),_._v(" "),e("p",[_._v("以"),e("code",[_._v("页28")]),_._v("为例，它对应"),e("code",[_._v("目录项2")]),_._v("，这个目录项中包含着该页的页号"),e("code",[_._v("28")]),_._v("以及该页中用户记录的最小主键值"),e("code",[_._v("5")]),_._v("。我们只需要把几个目录项在物理存储器上连续存储，比如把他们放到一个数组里，就可以实现"),e("span",{staticStyle:{color:"red"}},[_._v("根据主键值")]),_._v("快速查找某条记录的功能了。比方说我们想找主键值为"),e("code",[_._v("20")]),_._v("的记录，具体查找过程分两步：")]),_._v(" "),e("ol",[e("li",[_._v("先从目录项中根据二分法快速确定出主键值为"),e("code",[_._v("20")]),_._v("的记录在"),e("code",[_._v("目录项3")]),_._v("中（因为 "),e("code",[_._v("12 < 20 < 209")]),_._v("），它对应的页是"),e("code",[_._v("页9")]),_._v("。")]),_._v(" "),e("li",[_._v("再根据前边说的在页中查找记录的方式去"),e("code",[_._v("页9")]),_._v("中定位具体的记录。")])])])]),_._v(" "),e("p",[_._v("至此，针对数据页做的简易目录就搞定了。不过忘了说了，这个"),e("code",[_._v("目录")]),_._v("有一个别名，称为"),e("code",[_._v("索引")]),_._v("。")]),_._v(" "),e("h3",{attrs:{id:"innodb中的索引方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb中的索引方案"}},[_._v("#")]),_._v(" InnoDB中的索引方案")]),_._v(" "),e("p",[_._v("上边之所以称为一个简易的索引方案，是因为我们为了在根据主键值进行查找时使用二分法快速定位具体的目录项而假设所有目录项都可以在物理存储器上连续存储，但是这样做有几个问题：")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("InnoDB")]),_._v("是使用页来作为管理存储空间的基本单位，也就是最多能保证"),e("code",[_._v("16KB")]),_._v("的连续存储空间，而随着表中记录数量的增多，需要非常大的连续的存储空间才能把所有的目录项都放下，这对记录数量非常多的表是不现实的。")])]),_._v(" "),e("li",[e("p",[_._v("我们时常会对记录进行增删，假设我们把"),e("code",[_._v("页28")]),_._v("中的记录都删除了，"),e("code",[_._v("页28")]),_._v("也就没有存在的必要了，那意味着"),e("code",[_._v("目录项2")]),_._v("也就没有存在的必要了，这就需要把"),e("code",[_._v("目录项2")]),_._v("后的目录项都向前移动一下，这种牵一发而动全身的设计不是什么好主意～")])])]),_._v(" "),e("p",[_._v("所以，设计"),e("code",[_._v("InnoDB")]),_._v("的大叔们需要一种可以灵活管理所有"),e("code",[_._v("目录项")]),_._v("的方式。他们灵光乍现，忽然发现这些"),e("code",[_._v("目录项")]),_._v("其实长得跟我们的用户记录差不多，只不过"),e("code",[_._v("目录项")]),_._v("中的两个列是"),e("code",[_._v("主键")]),_._v("和"),e("code",[_._v("页号")]),_._v("而已，所以他们"),e("span",{staticStyle:{color:"red"}},[_._v("复用了之前存储用户记录的数据页来存储目录项，为了和用户记录做一下区分，我们把这些用来表示目录项的记录称为"),e("code",[_._v("目录项记录")])]),_._v("。那"),e("code",[_._v("InnoDB")]),_._v("怎么区分一条记录是普通的"),e("code",[_._v("用户记录")]),_._v("还是"),e("code",[_._v("目录项记录")]),_._v("呢？别忘了记录头信息里的"),e("code",[_._v("record_type")]),_._v("属性，它的各个取值代表的意思如下：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("0")]),_._v("：普通的用户记录")]),_._v(" "),e("li",[e("code",[_._v("1")]),_._v("：目录项记录")]),_._v(" "),e("li",[e("code",[_._v("2")]),_._v("：最小记录")]),_._v(" "),e("li",[e("code",[_._v("3")]),_._v("：最大记录")])]),_._v(" "),e("p",[_._v("哈哈，原来这个值为"),e("code",[_._v("1")]),_._v("的"),e("code",[_._v("record_type")]),_._v("是这个意思呀，我们把前边使用到的目录项放到数据页中的样子就是这样：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd295fd42b5?w=1178&h=535&f=png&s=149447",alt:"image_1caahuomf15m11e5k19v1bf21inq9.png-145.9kB"}})]),_._v(" "),e("p",[_._v("从图中可以看出来，我们新分配了一个编号为"),e("code",[_._v("30")]),_._v("的页来专门存储"),e("code",[_._v("目录项记录")]),_._v("。这里再次强调一遍"),e("code",[_._v("目录项记录")]),_._v("和普通的"),e("code",[_._v("用户记录")]),_._v("的不同点：")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("目录项记录")]),_._v("的"),e("code",[_._v("record_type")]),_._v("值是1，而普通用户记录的"),e("code",[_._v("record_type")]),_._v("值是0。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("目录项记录")]),_._v("只有主键值和页的编号两个列，而普通的用户记录的列是用户自己定义的，可能包含很多列，另外还有"),e("code",[_._v("InnoDB")]),_._v("自己添加的隐藏列。")])]),_._v(" "),e("li",[e("p",[_._v("还记得我们之前在唠叨记录头信息的时候说过一个叫"),e("code",[_._v("min_rec_mask")]),_._v("的属性么，只有在存储"),e("code",[_._v("目录项记录")]),_._v("的页中的主键值最小的"),e("code",[_._v("目录项记录")]),_._v("的"),e("code",[_._v("min_rec_mask")]),_._v("值为"),e("code",[_._v("1")]),_._v("，其他别的记录的"),e("code",[_._v("min_rec_mask")]),_._v("值都是"),e("code",[_._v("0")]),_._v("。")])])]),_._v(" "),e("p",[_._v("除了上述几点外，这两者就没啥差别了，它们用的是一样的数据页（页面类型都是"),e("code",[_._v("0x45BF")]),_._v("，这个属性在"),e("code",[_._v("File Header")]),_._v("中，忘了的话可以翻到前边的文章看），页的组成结构也是一样一样的（就是我们前边介绍过的7个部分），都会为主键值生成"),e("code",[_._v("Page Directory")]),_._v("（页目录），从而在按照主键值进行查找时可以使用二分法来加快查询速度。现在以查找主键为"),e("code",[_._v("20")]),_._v("的记录为例，根据某个主键值去查找记录的步骤就可以大致拆分成下边两步：")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("先到存储"),e("code",[_._v("目录项记录")]),_._v("的页，也就是页"),e("code",[_._v("30")]),_._v("中通过二分法快速定位到对应目录项，因为"),e("code",[_._v("12 < 20 < 209")]),_._v("，所以定位到对应的记录所在的页就是"),e("code",[_._v("页9")]),_._v("。")])]),_._v(" "),e("li",[e("p",[_._v("再到存储用户记录的"),e("code",[_._v("页9")]),_._v("中根据二分法快速定位到主键值为"),e("code",[_._v("20")]),_._v("的用户记录。")])])]),_._v(" "),e("p",[_._v("虽然说"),e("code",[_._v("目录项记录")]),_._v("中"),e("span",{staticStyle:{color:"red"}},[_._v("只存储主键值和对应的页号")]),_._v("，比用户记录需要的存储空间小多了，但是不论怎么说一个页只有"),e("code",[_._v("16KB")]),_._v("大小，能存放的"),e("code",[_._v("目录项记录")]),_._v("也是有限的，那如果表中的数据太多，以至于一个数据页不足以存放所有的"),e("code",[_._v("目录项记录")]),_._v("，该咋办呢？")]),_._v(" "),e("p",[_._v("当然是再多整一个存储"),e("code",[_._v("目录项记录")]),_._v("的页喽～ 为了大家更好的理解新分配一个"),e("code",[_._v("目录项记录")]),_._v("页的过程，我们假设一个存储"),e("code",[_._v("目录项记录")]),_._v("的页最多只能存放4条"),e("code",[_._v("目录项记录")]),_._v("（请注意是假设哦，真实情况下可以存放好多条的），所以如果此时我们再向上图中插入一条主键值为"),e("code",[_._v("320")]),_._v("的用户记录的话，那就需要分配一个新的存储"),e("code",[_._v("目录项记录")]),_._v("的页喽：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd29ebc7a4c?w=1181&h=472&f=png&s=138985",alt:"image_1cacabsrh17a5133q1otf725gi92q.png-135.7kB"}})]),_._v(" "),e("p",[_._v("从图中可以看出，我们插入了一条主键值为"),e("code",[_._v("320")]),_._v("的用户记录之后需要两个新的数据页：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("为存储该用户记录而新生成了"),e("code",[_._v("页31")]),_._v("。")])]),_._v(" "),e("li",[e("p",[_._v("因为原先存储"),e("code",[_._v("目录项记录")]),_._v("的"),e("code",[_._v("页30")]),_._v("的容量已满（我们前边假设只能存储4条"),e("code",[_._v("目录项记录")]),_._v("），所以不得不需要一个新的"),e("code",[_._v("页32")]),_._v("来存放"),e("code",[_._v("页31")]),_._v("对应的目录项。")])])]),_._v(" "),e("p",[_._v("现在因为存储"),e("code",[_._v("目录项记录")]),_._v("的页不止一个，所以如果我们想根据主键值查找一条用户记录大致需要3个步骤，以查找主键值为"),e("code",[_._v("20")]),_._v("的记录为例：")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("确定"),e("code",[_._v("目录项记录")]),_._v("页")]),_._v(" "),e("p",[_._v("我们现在的存储"),e("code",[_._v("目录项记录")]),_._v("的页有两个，即"),e("code",[_._v("页30")]),_._v("和"),e("code",[_._v("页32")]),_._v("，又因为"),e("code",[_._v("页30")]),_._v("表示的目录项的主键值的范围是"),e("code",[_._v("[1, 320)")]),_._v("，"),e("code",[_._v("页32")]),_._v("表示的目录项的主键值不小于"),e("code",[_._v("320")]),_._v("，所以主键值为"),e("code",[_._v("20")]),_._v("的记录对应的目录项记录在"),e("code",[_._v("页30")]),_._v("中。")])]),_._v(" "),e("li",[e("p",[_._v("通过"),e("code",[_._v("目录项记录")]),_._v("页确定用户记录真实所在的页。")]),_._v(" "),e("p",[_._v("在一个存储"),e("code",[_._v("目录项记录")]),_._v("的页中通过主键值定位一条目录项记录的方式说过了，不赘述了～")])]),_._v(" "),e("li",[e("p",[_._v("在真实存储用户记录的页中定位到具体的记录。")]),_._v(" "),e("p",[_._v("在一个存储用户记录的页中通过主键值定位一条用户记录的方式已经说过200遍了，你再不会我就，我就，我就求你到上一篇唠叨数据页结构的文章中多看几遍，求你了～")])])]),_._v(" "),e("p",[_._v("那么问题来了，在这个查询步骤的第1步中我们需要定位存储"),e("code",[_._v("目录项记录")]),_._v("的页，但是这些页在存储空间中也可能不挨着，如果我们表中的数据非常多则会产生很多存储"),e("code",[_._v("目录项记录")]),_._v("的页，那我们怎么根据主键值快速定位一个存储"),e("code",[_._v("目录项记录")]),_._v("的页呢？其实也简单，为这些存储"),e("code",[_._v("目录项记录")]),_._v("的页再生成一个更高级的目录，就像是一个多级目录一样，大目录里嵌套小目录，小目录里才是实际的数据，所以现在各个页的示意图就是这样子：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd2a6c7a65f?w=1080&h=579&f=png&s=161941",alt:"image_1cacafpso19vpkik1j5rtrd17cm3a.png-158.1kB"}})]),_._v(" "),e("p",[_._v("如图，我们生成了一个存储更高级目录项的"),e("code",[_._v("页33")]),_._v("，这个页中的两条记录分别代表"),e("code",[_._v("页30")]),_._v("和"),e("code",[_._v("页32")]),_._v("，如果用户记录的主键值在"),e("code",[_._v("[1, 320)")]),_._v("之间，则到"),e("code",[_._v("页30")]),_._v("中查找更详细的"),e("code",[_._v("目录项记录")]),_._v("，如果主键值不小于"),e("code",[_._v("320")]),_._v("的话，就到"),e("code",[_._v("页32")]),_._v("中查找更详细的"),e("code",[_._v("目录项记录")]),_._v("。不过这张图好漂亮喔，随着表中记录的增加，这个目录的层级会继续增加，如果简化一下，那么我们可以用下边这个图来描述它：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd2a6fb9126?w=1136&h=533&f=png&s=56890",alt:"image_1ca80gps314u9121u1rdp9r7md8cm.png-55.6kB"}})]),_._v(" "),e("p",[_._v("这玩意儿像不像一个倒过来的"),e("code",[_._v("树")]),_._v("呀，上头是树根，下头是树叶！其实这是一种组织数据的形式，或者说是一种数据结构，它的名称是"),e("code",[_._v("B+")]),_._v("树。")]),_._v(" "),e("div",{staticClass:"language-! extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("小贴士：\n\n为啥叫`B+`呢，`B`树是个啥？喔对不起，这不是我们讨论的范围，你可以去找一本数据结构或算法的书来看。什么？数据结构的书看不懂？等我～\n")])])]),e("p",[_._v("不论是存放用户记录的数据页，还是存放目录项记录的数据页，我们都把它们存放到"),e("code",[_._v("B+")]),_._v("树这个数据结构中了，所以我们也称这些数据页为"),e("code",[_._v("节点")]),_._v("。从图中可以看出来，我们的"),e("span",{staticStyle:{color:"red"}},[_._v("实际用户记录其实都存放在B+树的最底层的节点上")]),_._v("，这些节点也被称为"),e("code",[_._v("叶子节点")]),_._v("或"),e("code",[_._v("叶节点")]),_._v("，其余用来存放"),e("code",[_._v("目录项")]),_._v("的节点称为"),e("code",[_._v("非叶子节点")]),_._v("或者"),e("code",[_._v("内节点")]),_._v("，其中"),e("code",[_._v("B+")]),_._v("树最上边的那个节点也称为"),e("code",[_._v("根节点")]),_._v("。")]),_._v(" "),e("p",[_._v("从图中可以看出来，一个"),e("code",[_._v("B+")]),_._v("树的节点其实可以分成好多层，设计"),e("code",[_._v("InnoDB")]),_._v("的大叔们为了讨论方便，规定最下边的那层，也就是存放我们用户记录的那层为第"),e("code",[_._v("0")]),_._v("层，之后依次往上加。之前的讨论我们做了一个非常极端的假设：存放用户记录的页最多存放3条记录，存放目录项记录的页最多存放4条记录。其实真实环境中一个页存放的记录数量是非常大的，假设，假设，假设所有存放用户记录的叶子节点代表的数据页可以存放100条用户记录，所有存放目录项记录的内节点代表的数据页可以存放1000条目录项记录，那么：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("如果"),e("code",[_._v("B+")]),_._v("树只有1层，也就是只有1个用于存放用户记录的节点，最多能存放"),e("code",[_._v("100")]),_._v("条记录。")])]),_._v(" "),e("li",[e("p",[_._v("如果"),e("code",[_._v("B+")]),_._v("树有2层，最多能存放"),e("code",[_._v("1000×100=100000")]),_._v("条记录。")])]),_._v(" "),e("li",[e("p",[_._v("如果"),e("code",[_._v("B+")]),_._v("树有3层，最多能存放"),e("code",[_._v("1000×1000×100=100000000")]),_._v("条记录。")])]),_._v(" "),e("li",[e("p",[_._v("如果"),e("code",[_._v("B+")]),_._v("树有4层，最多能存放"),e("code",[_._v("1000×1000×1000×100=100000000000")]),_._v("条记录。哇咔咔～这么多的记录！！！")])])]),_._v(" "),e("p",[_._v("你的表里能存放"),e("code",[_._v("100000000000")]),_._v("条记录么？所以一般情况下，我们用到的"),e("code",[_._v("B+")]),_._v("树都不会超过4层，那我们通过主键值去查找某条记录最多只需要做4个页面内的查找（查找3个目录项页和一个用户记录页），又因为在每个页面内有所谓的"),e("code",[_._v("Page Directory")]),_._v("（页目录），所以在页面内也可以通过二分法实现快速定位记录，这不是很牛么，哈哈！")]),_._v(" "),e("h4",{attrs:{id:"聚簇索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引"}},[_._v("#")]),_._v(" 聚簇索引")]),_._v(" "),e("p",[_._v("我们上边介绍的"),e("code",[_._v("B+")]),_._v("树本身就是一个目录，或者说本身就是一个索引。它有两个特点：")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("使用记录主键值的大小进行记录和页的排序，这包括三个方面的含义：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("页内的记录是按照主键的大小顺序排成一个单向链表。")])]),_._v(" "),e("li",[e("p",[_._v("各个存放用户记录的页也是根据页中用户记录的主键大小顺序排成一个双向链表。")])]),_._v(" "),e("li",[e("p",[_._v("存放目录项记录的页分为不同的层次，在同一层次中的页也是根据页中目录项记录的主键大小顺序排成一个双向链表。")])])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("B+")]),_._v("树的叶子节点存储的是完整的用户记录。")]),_._v(" "),e("p",[_._v("所谓完整的用户记录，就是指这个记录中存储了所有列的值（包括隐藏列）。")])])]),_._v(" "),e("p",[_._v("我们把具有这两种特性的"),e("code",[_._v("B+")]),_._v("树称为"),e("code",[_._v("聚簇索引")]),_._v("，所有完整的用户记录都存放在这个"),e("code",[_._v("聚簇索引")]),_._v("的叶子节点处。这种"),e("code",[_._v("聚簇索引")]),_._v("并不需要我们在"),e("code",[_._v("MySQL")]),_._v("语句中显式的使用"),e("code",[_._v("INDEX")]),_._v("语句去创建（后边会介绍索引相关的语句），"),e("code",[_._v("InnoDB")]),_._v("存储引擎会"),e("span",{staticStyle:{color:"red"}},[_._v("自动的为我们创建聚簇索引")]),_._v("。另外有趣的一点是，在"),e("code",[_._v("InnoDB")]),_._v("存储引擎中，"),e("code",[_._v("聚簇索引")]),_._v("就是数据的存储方式（所有的用户记录都存储在了"),e("code",[_._v("叶子节点")]),_._v("），也就是所谓的"),e("span",{staticStyle:{color:"red"}},[_._v("索引即数据，数据即索引")]),_._v("。")]),_._v(" "),e("h4",{attrs:{id:"二级索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二级索引"}},[_._v("#")]),_._v(" 二级索引")]),_._v(" "),e("p",[_._v("大家有木有发现，上边介绍的"),e("code",[_._v("聚簇索引")]),_._v("只能在搜索条件是主键值时才能发挥作用，因为"),e("code",[_._v("B+")]),_._v("树中的数据都是按照主键进行排序的。那如果我们想以别的列作为搜索条件该咋办呢？难道只能从头到尾沿着链表依次遍历记录么？")]),_._v(" "),e("p",[_._v("不，我们可以多建几棵"),e("code",[_._v("B+")]),_._v("树，不同的"),e("code",[_._v("B+")]),_._v("树中的数据采用不同的排序规则。比方说我们用"),e("code",[_._v("c2")]),_._v("列的大小作为数据页、页中记录的排序规则，再建一棵"),e("code",[_._v("B+")]),_._v("树，效果如下图所示：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd2a89adfa5?w=1112&h=586&f=png&s=165483",alt:"image_1cactc8jg14j91likvmd1h8cn3o4h.png-161.6kB"}})]),_._v(" "),e("p",[_._v("这个"),e("code",[_._v("B+")]),_._v("树与上边介绍的聚簇索引有几处不同：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("使用记录"),e("code",[_._v("c2")]),_._v("列的大小进行记录和页的排序，这包括三个方面的含义：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("页内的记录是按照"),e("code",[_._v("c2")]),_._v("列的大小顺序排成一个单向链表。")])]),_._v(" "),e("li",[e("p",[_._v("各个存放用户记录的页也是根据页中记录的"),e("code",[_._v("c2")]),_._v("列大小顺序排成一个双向链表。")])]),_._v(" "),e("li",[e("p",[_._v("存放目录项记录的页分为不同的层次，在同一层次中的页也是根据页中目录项记录的"),e("code",[_._v("c2")]),_._v("列大小顺序排成一个双向链表。")])])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("B+")]),_._v("树的叶子节点存储的并不是完整的用户记录，而只是"),e("code",[_._v("c2列+主键")]),_._v("这两个列的值。")])]),_._v(" "),e("li",[e("p",[_._v("目录项记录中不再是"),e("code",[_._v("主键+页号")]),_._v("的搭配，而变成了"),e("code",[_._v("c2列+页号")]),_._v("的搭配。")])])]),_._v(" "),e("p",[_._v("所以如果我们现在想通过"),e("code",[_._v("c2")]),_._v("列的值查找某些记录的话就可以使用我们刚刚建好的这个"),e("code",[_._v("B+")]),_._v("树了。以查找"),e("code",[_._v("c2")]),_._v("列的值为"),e("code",[_._v("4")]),_._v("的记录为例，查找过程如下：")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("确定"),e("code",[_._v("目录项记录")]),_._v("页")]),_._v(" "),e("p",[_._v("根据"),e("code",[_._v("根页面")]),_._v("，也就是"),e("code",[_._v("页44")]),_._v("，可以快速定位到"),e("code",[_._v("目录项记录")]),_._v("所在的页为"),e("code",[_._v("页42")]),_._v("（因为"),e("code",[_._v("2 < 4 < 9")]),_._v("）。")])]),_._v(" "),e("li",[e("p",[_._v("通过"),e("code",[_._v("目录项记录")]),_._v("页确定用户记录真实所在的页。")]),_._v(" "),e("p",[_._v("在"),e("code",[_._v("页42")]),_._v("中可以快速定位到实际存储用户记录的页，但是由于"),e("code",[_._v("c2")]),_._v("列并没有唯一性约束，所以"),e("code",[_._v("c2")]),_._v("列值为"),e("code",[_._v("4")]),_._v("的记录可能分布在多个数据页中，又因为"),e("code",[_._v("2 < 4 ≤ 4")]),_._v("，所以确定实际存储用户记录的页在"),e("code",[_._v("页34")]),_._v("和"),e("code",[_._v("页35")]),_._v("中。")])]),_._v(" "),e("li",[e("p",[_._v("在真实存储用户记录的页中定位到具体的记录。")]),_._v(" "),e("p",[_._v("到"),e("code",[_._v("页34")]),_._v("和"),e("code",[_._v("页35")]),_._v("中定位到具体的记录。")])]),_._v(" "),e("li",[e("p",[_._v("但是这个"),e("code",[_._v("B+")]),_._v("树的叶子节点中的记录只存储了"),e("code",[_._v("c2")]),_._v("和"),e("code",[_._v("c1")]),_._v("（也就是"),e("code",[_._v("主键")]),_._v("）两个列，所以"),e("span",{staticStyle:{color:"red"}},[_._v("我们必须再根据主键值去聚簇索引中再查找一遍完整的用户记录")]),_._v("。")])])]),_._v(" "),e("p",[_._v("各位各位，看到步骤4的操作了么？我们根据这个以"),e("code",[_._v("c2")]),_._v("列大小排序的"),e("code",[_._v("B+")]),_._v("树只能确定我们要查找记录的主键值，所以如果我们想根据"),e("code",[_._v("c2")]),_._v("列的值查找到完整的用户记录的话，仍然需要到"),e("code",[_._v("聚簇索引")]),_._v("中再查一遍，这个过程也被称为"),e("code",[_._v("回表")]),_._v("。也就是根据"),e("code",[_._v("c2")]),_._v("列的值查询一条完整的用户记录需要使用到"),e("code",[_._v("2")]),_._v("棵"),e("code",[_._v("B+")]),_._v("树！！！")]),_._v(" "),e("p",[_._v("为什么我们还需要一次"),e("code",[_._v("回表")]),_._v("操作呢？直接把完整的用户记录放到"),e("code",[_._v("叶子节点")]),_._v("不就好了么？你说的对，如果把完整的用户记录放到"),e("code",[_._v("叶子节点")]),_._v("是可以不用"),e("code",[_._v("回表")]),_._v("，但是太占地方了呀～相当于每建立一棵"),e("code",[_._v("B+")]),_._v("树都需要把所有的用户记录再都拷贝一遍，这就有点太浪费存储空间了。因为这种按照"),e("code",[_._v("非主键列")]),_._v("建立的"),e("code",[_._v("B+")]),_._v("树需要一次"),e("code",[_._v("回表")]),_._v("操作才可以定位到完整的用户记录，所以这种"),e("code",[_._v("B+")]),_._v("树也被称为"),e("code",[_._v("二级索引")]),_._v("（英文名"),e("code",[_._v("secondary index")]),_._v("），或者"),e("code",[_._v("辅助索引")]),_._v("。由于我们使用的是"),e("code",[_._v("c2")]),_._v("列的大小作为"),e("code",[_._v("B+")]),_._v("树的排序规则，所以我们也称这个"),e("code",[_._v("B+")]),_._v("树为"),e("span",{staticStyle:{color:"red"}},[_._v("为c2列建立的索引")]),_._v("。")]),_._v(" "),e("h5",{attrs:{id:"联合索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联合索引"}},[_._v("#")]),_._v(" 联合索引")]),_._v(" "),e("p",[_._v("我们也可以同时以多个列的大小作为排序规则，也就是同时为多个列建立索引，比方说我们想让"),e("code",[_._v("B+")]),_._v("树按照"),e("code",[_._v("c2")]),_._v("和"),e("code",[_._v("c3")]),_._v("列的大小进行排序，这个包含两层含义：")]),_._v(" "),e("ul",[e("li",[_._v("先把各个记录和页按照"),e("code",[_._v("c2")]),_._v("列进行排序。")]),_._v(" "),e("li",[_._v("在记录的"),e("code",[_._v("c2")]),_._v("列相同的情况下，采用"),e("code",[_._v("c3")]),_._v("列进行排序")])]),_._v(" "),e("p",[_._v("为"),e("code",[_._v("c2")]),_._v("和"),e("code",[_._v("c3")]),_._v("列建立的索引的示意图如下：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd2b0b70d72?w=1153&h=617&f=png&s=176346",alt:"image_1d80rmun21al711ok1tvo1i161rnpp.png-172.2kB"}})]),_._v(" "),e("p",[_._v("如图所示，我们需要注意一下几点：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("每条"),e("code",[_._v("目录项记录")]),_._v("都由"),e("code",[_._v("c2")]),_._v("、"),e("code",[_._v("c3")]),_._v("、"),e("code",[_._v("页号")]),_._v("这三个部分组成，各条记录先按照"),e("code",[_._v("c2")]),_._v("列的值进行排序，如果记录的"),e("code",[_._v("c2")]),_._v("列相同，则按照"),e("code",[_._v("c3")]),_._v("列的值进行排序。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("B+")]),_._v("树叶子节点处的用户记录由"),e("code",[_._v("c2")]),_._v("、"),e("code",[_._v("c3")]),_._v("和主键"),e("code",[_._v("c1")]),_._v("列组成。")])])]),_._v(" "),e("p",[_._v("千万要注意一点，"),e("span",{staticStyle:{color:"red"}},[_._v("以c2和c3列的大小为排序规则建立的B+树称为联合索引，本质上也是一个二级索引。它的意思与分别为c2和c3列分别建立索引的表述是不同的")]),_._v("，不同点如下：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("建立"),e("code",[_._v("联合索引")]),_._v("只会建立如上图一样的1棵"),e("code",[_._v("B+")]),_._v("树。")])]),_._v(" "),e("li",[e("p",[_._v("为c2和c3列分别建立索引会分别以"),e("code",[_._v("c2")]),_._v("和"),e("code",[_._v("c3")]),_._v("列的大小为排序规则建立2棵"),e("code",[_._v("B+")]),_._v("树。")])])]),_._v(" "),e("h3",{attrs:{id:"innodb的b-树索引的注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb的b-树索引的注意事项"}},[_._v("#")]),_._v(" InnoDB的B+树索引的注意事项")]),_._v(" "),e("h4",{attrs:{id:"根页面万年不动窝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根页面万年不动窝"}},[_._v("#")]),_._v(" 根页面万年不动窝")]),_._v(" "),e("p",[_._v("我们前边介绍"),e("code",[_._v("B+")]),_._v("树索引的时候，为了大家理解上的方便，先把存储用户记录的叶子节点都画出来，然后接着画存储目录项记录的内节点，实际上"),e("code",[_._v("B+")]),_._v("树的形成过程是这样的：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("每当为某个表创建一个"),e("code",[_._v("B+")]),_._v("树索引（聚簇索引不是人为创建的，默认就有）的时候，都会为这个索引创建一个"),e("code",[_._v("根节点")]),_._v("页面。最开始表中没有数据的时候，每个"),e("code",[_._v("B+")]),_._v("树索引对应的"),e("code",[_._v("根节点")]),_._v("中既没有用户记录，也没有目录项记录。")])]),_._v(" "),e("li",[e("p",[_._v("随后向表中插入用户记录时，先把用户记录存储到这个"),e("code",[_._v("根节点")]),_._v("中。")])]),_._v(" "),e("li",[e("p",[_._v("当"),e("code",[_._v("根节点")]),_._v("中的可用空间用完时继续插入记录，此时会将"),e("code",[_._v("根节点")]),_._v("中的所有记录复制到一个新分配的页，比如"),e("code",[_._v("页a")]),_._v("中，然后对这个新页进行"),e("code",[_._v("页分裂")]),_._v("的操作，得到另一个新页，比如"),e("code",[_._v("页b")]),_._v("。这时新插入的记录根据键值（也就是聚簇索引中的主键值，二级索引中对应的索引列的值）的大小就会被分配到"),e("code",[_._v("页a")]),_._v("或者"),e("code",[_._v("页b")]),_._v("中，而"),e("code",[_._v("根节点")]),_._v("便升级为存储目录项记录的页。")])])]),_._v(" "),e("p",[_._v("这个过程需要大家特别注意的是："),e("span",{staticStyle:{color:"red"}},[_._v("一个B+树索引的根节点自诞生之日起，便不会再移动")]),_._v("。这样只要我们对某个表建立一个索引，那么它的"),e("code",[_._v("根节点")]),_._v("的页号便会被记录到某个地方，然后凡是"),e("code",[_._v("InnoDB")]),_._v("存储引擎需要用到这个索引的时候，都会从那个固定的地方取出"),e("code",[_._v("根节点")]),_._v("的页号，从而来访问这个索引。")]),_._v(" "),e("div",{staticClass:"language-! extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("小贴士：\n\n跟大家剧透一下，这个存储某个索引的根节点在哪个页面中的信息就是传说中的数据字典中的一项信息，关于更多数据字典的内容，后边会详细唠叨，别着急哈。\n")])])]),e("h4",{attrs:{id:"内节点中目录项记录的唯一性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内节点中目录项记录的唯一性"}},[_._v("#")]),_._v(" 内节点中目录项记录的唯一性")]),_._v(" "),e("p",[_._v("我们知道"),e("code",[_._v("B+")]),_._v("树索引的内节点中目录项记录的内容是"),e("code",[_._v("索引列 + 页号")]),_._v("的搭配，但是这个搭配对于二级索引来说有点儿不严谨。还拿"),e("code",[_._v("index_demo")]),_._v("表为例，假设这个表中的数据是这样的：")]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("code",[_._v("c1")])]),_._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("code",[_._v("c2")])]),_._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("code",[_._v("c3")])])])]),_._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[_._v("1")]),_._v(" "),e("td",{staticStyle:{"text-align":"center"}},[_._v("1")]),_._v(" "),e("td",{staticStyle:{"text-align":"center"}},[_._v("'u'")])]),_._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[_._v("3")]),_._v(" "),e("td",{staticStyle:{"text-align":"center"}},[_._v("1")]),_._v(" "),e("td",{staticStyle:{"text-align":"center"}},[_._v("'d'")])]),_._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[_._v("5")]),_._v(" "),e("td",{staticStyle:{"text-align":"center"}},[_._v("1")]),_._v(" "),e("td",{staticStyle:{"text-align":"center"}},[_._v("'y'")])]),_._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[_._v("7")]),_._v(" "),e("td",{staticStyle:{"text-align":"center"}},[_._v("1")]),_._v(" "),e("td",{staticStyle:{"text-align":"center"}},[_._v("'a'")])])])]),_._v(" "),e("p",[_._v("如果二级索引中目录项记录的内容只是"),e("code",[_._v("索引列 + 页号")]),_._v("的搭配的话，那么为"),e("code",[_._v("c2")]),_._v("列建立索引后的"),e("code",[_._v("B+")]),_._v("树应该长这样：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd2c5b9ef01?w=533&h=563&f=png&s=60029",alt:"image_1cp9vthl71h9n8091dkdjek16qg1j.png-58.6kB"}})]),_._v(" "),e("p",[_._v("如果我们想新插入一行记录，其中"),e("code",[_._v("c1")]),_._v("、"),e("code",[_._v("c2")]),_._v("、"),e("code",[_._v("c3")]),_._v("的值分别是："),e("code",[_._v("9")]),_._v("、"),e("code",[_._v("1")]),_._v("、"),e("code",[_._v("'c'")]),_._v("，那么在修改这个为"),e("code",[_._v("c2")]),_._v("列建立的二级索引对应的"),e("code",[_._v("B+")]),_._v("树时便碰到了个大问题：由于"),e("code",[_._v("页3")]),_._v("中存储的目录项记录是由"),e("code",[_._v("c2列 + 页号")]),_._v("的值构成的，"),e("code",[_._v("页3")]),_._v("中的两条目录项记录对应的"),e("code",[_._v("c2")]),_._v("列的值都是"),e("code",[_._v("1")]),_._v("，而我们新插入的这条记录的"),e("code",[_._v("c2")]),_._v("列的值也是"),e("code",[_._v("1")]),_._v("，那我们这条新插入的记录到底应该放到"),e("code",[_._v("页4")]),_._v("中，还是应该放到"),e("code",[_._v("页5")]),_._v("中啊？答案是：对不起，懵逼了。")]),_._v(" "),e("p",[_._v("为了让新插入记录能找到自己在那个页里，"),e("span",{staticStyle:{color:"red"}},[_._v("我们需要保证在B+树的同一层内节点的目录项记录除"),e("code",[_._v("页号")]),_._v("这个字段以外是唯一的")]),_._v("。所以对于二级索引的内节点的目录项记录的内容实际上是由三个部分构成的：")]),_._v(" "),e("ul",[e("li",[_._v("索引列的值")]),_._v(" "),e("li",[_._v("主键值")]),_._v(" "),e("li",[_._v("页号")])]),_._v(" "),e("p",[_._v("也就是我们把"),e("code",[_._v("主键值")]),_._v("也添加到二级索引内节点中的目录项记录了，这样就能保证"),e("code",[_._v("B+")]),_._v("树每一层节点中各条目录项记录除"),e("code",[_._v("页号")]),_._v("这个字段外是唯一的，所以我们为"),e("code",[_._v("c2")]),_._v("列建立二级索引后的示意图实际上应该是这样子的：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd2c92fbca0?w=536&h=555&f=png&s=60020",alt:"image_1cpb919suginpp7lbgsk0147f20.png-58.6kB"}})]),_._v(" "),e("p",[_._v("这样我们再插入记录"),e("code",[_._v("(9, 1, 'c')")]),_._v("时，由于"),e("code",[_._v("页3")]),_._v("中存储的目录项记录是由"),e("code",[_._v("c2列 + 主键 + 页号")]),_._v("的值构成的，可以先把新记录的"),e("code",[_._v("c2")]),_._v("列的值和"),e("code",[_._v("页3")]),_._v("中各目录项记录的"),e("code",[_._v("c2")]),_._v("列的值作比较，如果"),e("code",[_._v("c2")]),_._v("列的值相同的话，可以接着比较主键值，因为"),e("code",[_._v("B+")]),_._v("树同一层中不同目录项记录的"),e("code",[_._v("c2列 + 主键")]),_._v("的值肯定是不一样的，所以最后肯定能定位唯一的一条目录项记录，在本例中最后确定新记录应该被插入到"),e("code",[_._v("页5")]),_._v("中。")]),_._v(" "),e("h4",{attrs:{id:"一个页面最少存储2条记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个页面最少存储2条记录"}},[_._v("#")]),_._v(" 一个页面最少存储2条记录")]),_._v(" "),e("p",[_._v("我们前边说过一个B+树只需要很少的层级就可以轻松存储数亿条记录，查询速度杠杠的！这是因为B+树本质上就是一个大的多层级目录，每经过一个目录时都会过滤掉许多无效的子目录，直到最后访问到存储真实数据的目录。那如果一个大的目录中只存放一个子目录是个啥效果呢？那就是目录层级非常非常非常多，而且最后的那个存放真实数据的目录中只能存放一条记录。费了半天劲只能存放一条真实的用户记录？逗我呢？所以"),e("code",[_._v("InnoDB")]),_._v("的一个数据页至少可以存放两条记录，这也是我们之前唠叨记录行格式的时候说过一个结论（我们当时依据这个结论推导了表中只有一个列时该列在不发生行溢出的情况下最多能存储多少字节，忘了的话回去看看吧）。")]),_._v(" "),e("h3",{attrs:{id:"myisam中的索引方案简单介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#myisam中的索引方案简单介绍"}},[_._v("#")]),_._v(" MyISAM中的索引方案简单介绍")]),_._v(" "),e("p",[_._v("至此，我们介绍的都是"),e("code",[_._v("InnoDB")]),_._v("存储引擎中的索引方案，为了内容的完整性，以及各位可能在面试的时候遇到这类的问题，我们有必要再简单介绍一下"),e("code",[_._v("MyISAM")]),_._v("存储引擎中的索引方案。我们知道"),e("code",[_._v("InnoDB")]),_._v("中"),e("span",{staticStyle:{color:"red"}},[_._v("索引即数据，也就是聚簇索引的那棵"),e("code",[_._v("B+")]),_._v("树的叶子节点中已经把所有完整的用户记录都包含了")]),_._v("，而"),e("code",[_._v("MyISAM")]),_._v("的索引方案虽然也使用树形结构，但是却将索引和数据分开存储：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("将表中的记录按照记录的插入顺序单独存储在一个文件中，称之为"),e("code",[_._v("数据文件")]),_._v("。这个文件并不划分为若干个数据页，有多少记录就往这个文件中塞多少记录就成了。我们可以通过行号而快速访问到一条记录。")]),_._v(" "),e("p",[e("code",[_._v("MyISAM")]),_._v("记录也需要记录头信息来存储一些额外数据，我们以上边唠叨过的"),e("code",[_._v("index_demo")]),_._v("表为例，看一下这个表中的记录使用"),e("code",[_._v("MyISAM")]),_._v("作为存储引擎在存储空间中的表示：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a01bd2d0c5ad53?w=332&h=528&f=png&s=60362",alt:"image_1cpc7go2o12t1ocd17nvr6msth9.png-58.9kB"}})]),_._v(" "),e("p",[_._v("由于在插入数据的时候并没有刻意按照主键大小排序，所以我们并不能在这些数据上使用二分法进行查找。")])]),_._v(" "),e("li",[e("p",[_._v("使用"),e("code",[_._v("MyISAM")]),_._v("存储引擎的表会把索引信息另外存储到一个称为"),e("code",[_._v("索引文件")]),_._v("的另一个文件中。"),e("code",[_._v("MyISAM")]),_._v("会单独为表的主键创建一个索引，只不过在索引的叶子节点中存储的不是完整的用户记录，而是"),e("code",[_._v("主键值 + 行号")]),_._v("的组合。也就是先通过索引找到对应的行号，再通过行号去找对应的记录！")]),_._v(" "),e("p",[_._v("这一点和"),e("code",[_._v("InnoDB")]),_._v("是完全不相同的，在"),e("code",[_._v("InnoDB")]),_._v("存储引擎中，我们只需要根据主键值对"),e("code",[_._v("聚簇索引")]),_._v("进行一次查找就能找到对应的记录，而在"),e("code",[_._v("MyISAM")]),_._v("中却需要进行一次"),e("code",[_._v("回表")]),_._v("操作，意味着"),e("span",{staticStyle:{color:"red"}},[e("code",[_._v("MyISAM")]),_._v("中建立的索引相当于全部都是"),e("code",[_._v("二级索引")])]),_._v("！")])]),_._v(" "),e("li",[e("p",[_._v("如果有需要的话，我们也可以对其它的列分别建立索引或者建立联合索引，原理和"),e("code",[_._v("InnoDB")]),_._v("中的索引差不多，不过在叶子节点处存储的是"),e("code",[_._v("相应的列 + 行号")]),_._v("。这些索引也全部都是"),e("code",[_._v("二级索引")]),_._v("。")])])]),_._v(" "),e("div",{staticClass:"language-! extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("小贴士：\n\nMyISAM的行格式有定长记录格式（Static）、变长记录格式（Dynamic）、压缩记录格式（Compressed）。上边用到的index_demo表采用定长记录格式，也就是一条记录占用存储空间的大小是固定的，这样就可以轻松算出某条记录在数据文件中的地址偏移量。但是变长记录格式就不行了，MyISAM会直接在索引叶子节点处存储该条记录在数据文件中的地址偏移量。通过这个可以看出，MyISAM的回表操作是十分快速的，因为是拿着地址偏移量直接到文件中取数据的，反观InnoDB是通过获取主键之后再去聚簇索引里边儿找记录，虽然说也不慢，但还是比不上直接用地址去访问。\n\n此处我们只是非常简要的介绍了一下MyISAM的索引，具体细节全拿出来又可以写一篇文章了。这里只是希望大家理解InnoDB中的索引即数据，数据即索引，而MyISAM中却是索引是索引、数据是数据。\n")])])]),e("h3",{attrs:{id:"mysql中创建和删除索引的语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql中创建和删除索引的语句"}},[_._v("#")]),_._v(" MySQL中创建和删除索引的语句")]),_._v(" "),e("p",[_._v("光顾着唠叨索引的原理了，那我们如何使用"),e("code",[_._v("MySQL")]),_._v("语句去建立这种索引呢？"),e("code",[_._v("InnoDB")]),_._v("和"),e("code",[_._v("MyISAM")]),_._v("会"),e("span",{staticStyle:{color:"red"}},[_._v("自动")]),_._v("为主键或者声明为"),e("code",[_._v("UNIQUE")]),_._v("的列去自动建立"),e("code",[_._v("B+")]),_._v("树索引，但是如果我们想为其他的列建立索引就需要我们显式的去指明。为啥不自动为每个列都建立个索引呢？别忘了，每建立一个索引都会建立一棵"),e("code",[_._v("B+")]),_._v("树，每插入一条记录都要维护各个记录、数据页的排序关系，这是很费性能和存储空间的。")]),_._v(" "),e("p",[_._v("我们可以在创建表的时候指定需要建立索引的单个列或者建立联合索引的多个列：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("CREATE TALBE 表名 (\n    各种列的信息 ··· , \n    [KEY|INDEX] 索引名 (需要被索引的单个列或多个列)\n)\n")])])]),e("p",[_._v("其中的"),e("code",[_._v("KEY")]),_._v("和"),e("code",[_._v("INDEX")]),_._v("是同义词，任意选用一个就可以。我们也可以在修改表结构的时候添加索引：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("ALTER TABLE 表名 ADD [INDEX|KEY] 索引名 (需要被索引的单个列或多个列);\n")])])]),e("p",[_._v("也可以在修改表结构的时候删除索引：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("ALTER TABLE 表名 DROP [INDEX|KEY] 索引名;\n")])])]),e("p",[_._v("比方说我们想在创建"),e("code",[_._v("index_demo")]),_._v("表的时候就为"),e("code",[_._v("c2")]),_._v("和"),e("code",[_._v("c3")]),_._v("列添加一个"),e("code",[_._v("联合索引")]),_._v("，可以这么写建表语句：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("CREATE TABLE index_demo(\n    c1 INT,\n    c2 INT,\n    c3 CHAR(1),\n    PRIMARY KEY(c1),\n    INDEX idx_c2_c3 (c2, c3)\n);\n")])])]),e("p",[_._v("在这个建表语句中我们创建的索引名是"),e("code",[_._v("idx_c2_c3")]),_._v("，这个名称可以随便起，不过我们还是建议以"),e("code",[_._v("idx_")]),_._v("为前缀，后边跟着需要建立索引的列名，多个列名之间用下划线"),e("code",[_._v("_")]),_._v("分隔开。")]),_._v(" "),e("p",[_._v("如果我们想删除这个索引，可以这么写：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("ALTER TABLE index_demo DROP INDEX idx_c2_c3;\n")])])])])}),[],!1,null,null,null);v.default=d.exports}}]);