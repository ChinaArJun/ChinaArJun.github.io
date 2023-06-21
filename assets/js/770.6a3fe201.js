(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{1371:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"mysql高级知识-第2章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql高级知识-第2章"}},[t._v("#")]),t._v(" MySQL高级知识-第2章")]),t._v(" "),n("p",[t._v("[toc]")]),t._v(" "),n("h2",{attrs:{id:"查看存储引擎"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看存储引擎"}},[t._v("#")]),t._v(" 查看存储引擎")]),t._v(" "),n("p",[t._v("一般情况下，mysql会默认提供多种存储引擎,你可以通过下面的查看:")]),t._v(" "),n("p",[t._v("看你的mysql现在已提供什么存储引擎:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("mysql> show engines;\n")])])]),n("p",[t._v("看你的mysql当前默认的存储引擎:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("mysql> show variables like '%storage_engine%';\n")])])]),n("p",[n("strong",[n("code",[t._v("默认都是InnoDB引擎")])])]),t._v(" "),n("p",[t._v("查看某个表是使用哪种存储引擎:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("mysql> show table status like 'user' \\G    //查看user表\n")])])]),n("h3",{attrs:{id:"myisam-与innodb关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myisam-与innodb关系"}},[t._v("#")]),t._v(" MyISAM 与InnoDB关系")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/Syncma/Figurebed/master/img/数据库引擎.png",alt:"Alt text"}})]),t._v(" "),n("p",[t._v("总结：")]),t._v(" "),n("p",[t._v("mysql 中的MyISAM和InnoDB最重要的区别：")]),t._v(" "),n("blockquote",[n("p",[n("strong",[n("code",[t._v("MyISAM是表锁， InnoDB是行锁")])])])]),t._v(" "),n("h2",{attrs:{id:"行锁和表锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#行锁和表锁"}},[t._v("#")]),t._v(" 行锁和表锁")]),t._v(" "),n("p",[t._v("当选中某一行时，如果是通过主键或者索引选中的，这个时候是行级锁；\n如果是通过其它条件选中的，这个时候行级锁会升级成表锁，其它事务无法对当前表进行更新或插入操作")]),t._v(" "),n("p",[t._v("举例子：\nupdate  如果where 字段是唯一索引或者主键就是行锁，如果where 是一个范围 就是表锁")]),t._v(" "),n("p",[t._v("alter table 也是表锁")]),t._v(" "),n("p",[t._v("一般的索引，如果只索引到某一条数据  也是行锁\ndelete 也是一样")]),t._v(" "),n("p",[t._v("总结：")]),t._v(" "),n("blockquote",[n("p",[t._v("如果数据的变动仅仅是"),n("strong",[t._v("某一条数据，就是行锁")]),t._v("\n范围的和表结构更新都是表锁\n另外myisam引擎都是表锁")]),t._v(" "),n("p",[t._v("表级锁—-开销小，加锁快，不会出现死锁，并发度低\n行级锁—-开销大，加锁慢，会出现死锁，并发度也高.")])]),t._v(" "),n("h2",{attrs:{id:"事务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),n("h3",{attrs:{id:"事务是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事务是什么"}},[t._v("#")]),t._v(" 事务是什么")]),t._v(" "),n("p",[t._v("数据库事务(Database Transaction) ，是指作为单个逻辑工作单元执行的一系列操作，要么完全地执行，要么完全地不执行。")]),t._v(" "),n("h3",{attrs:{id:"事务特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事务特点"}},[t._v("#")]),t._v(" 事务特点")]),t._v(" "),n("p",[t._v("事务必须具备以下四个属性，简称"),n("strong",[t._v("ACID 属性")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("* 原子性（Atomicity）：就是事务里面的所有操作要么全部做完，要么都不做， 只要有一个操作失败就需要回滚\n* 一致性（Consistency）：当事务完成时，数据必须处于一致状态。\n* 隔离性（Isolation）：并发的事务之间不会互相影响\n* 持久性（Durability）：一旦事务提交后，它所作的修改将会永久保存在数据库中，即使宕机也不会丢失\n")])])]),n("h3",{attrs:{id:"事务方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事务方法"}},[t._v("#")]),t._v(" 事务方法")]),t._v(" "),n("p",[t._v("MySQL中支持事务的存储引擎InnoDB")]),t._v(" "),n("p",[t._v("1、用 BEGIN, ROLLBACK, COMMIT来实现")]),t._v(" "),n("p",[t._v("BEGIN 开始一个事务\nROLLBACK 事务回滚\nCOMMIT 事务确认")]),t._v(" "),n("p",[t._v("2、直接用 SET 来改变 MySQL 的自动提交模式:")]),t._v(" "),n("p",[t._v("SET AUTOCOMMIT=0 禁止自动提交\nSET AUTOCOMMIT=1 开启自动提交")]),t._v(" "),n("h3",{attrs:{id:"事务案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事务案例"}},[t._v("#")]),t._v(" 事务案例")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("CREATE  DATABASE  demo;\nUSE demo;\nCREATE TABLE demo_transaction_test(id INT(5));\n\n/* 这里要注意int和int(5)区别 */\nint 代表整数类型存储和范围\nint(5) 只是显示宽度，即如果我存储了 一个 9， 则在mysql中，其实int(1)的字段存储的是9，而int (5)存储的是00009\n\n/* 事务开始 */\nBEGIN;\nINSERT INTO demo_transaction_test VALUE(5);\nINSERT INTO demo_transaction_test VALUE(6);\nCOMMIT;\n\nSELECT * FROM demo_transaction_test;\n\n\n/* 事务回滚 */\nBEGIN;\nINSERT INTO demo_transaction_test VALUE(7);\n\nROLLBACK;\n\nSELECT * FROM demo_transaction_test;\n\n")])])]),n("h3",{attrs:{id:"事务开启关闭"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事务开启关闭"}},[t._v("#")]),t._v(" 事务开启关闭")]),t._v(" "),n("p",[t._v("默认情况下，每条单独的SQL语句视为一个事务；关闭默认提交状态后，可手动开启、关闭事务。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("show variables like 'auto%';\n")])])]),n("p",[t._v("运行结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('"auto_increment_increment"\t"1"\n"auto_increment_offset"\t"1"\n"autocommit"\t"ON"\n"automatic_sp_privileges"\t"ON"\n')])])]),n("p",[n("strong",[t._v("注意到 autocommit ，自定提交是打开的")])]),t._v(" "),n("p",[t._v("关闭/开启自动提交状态\nset autocommit = 0|1;")]),t._v(" "),n("p",[t._v("说明：")]),t._v(" "),n("blockquote",[n("p",[t._v("值为0：关闭自动提交；\n值为1：开启自动提交。")])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("关闭自动提交后，从下一条SQL语句开始则开启新事务，需使用commit或rollback语句结束该事务")]),t._v("。")])]),t._v(" "),n("h3",{attrs:{id:"python例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python例子"}},[t._v("#")]),t._v(" Python例子")]),t._v(" "),n("p",[t._v("Python 程序想要操作数据库，首先需要安装 模块 来进行操作，Python 2 中流行的模块为 MySQLdb，而该模块在Python 3 中将被废弃，而使用"),n("strong",[t._v("PyMySQL")]),t._v("  -"),n("code",[t._v("这里使用python3")])]),t._v(" "),n("ol",[n("li",[t._v("模块安装")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("pip install pymysql\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("测试例子")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pymysql\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" traceback\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不建议这样使用")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# connection = pymysql.connect(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     host='localhost',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     user='root',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     password='Qian123#',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     db='test',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# )")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建议使用模块化")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect_mysql")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    db_config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'port'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'charset'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pymysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("db_config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" conn\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用连接池技术")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库连接池包 DBUtils- pip install DBUtils")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" DBUtils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PooledDB "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PooledDB  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入线程池对象")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect_mysql_pool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    db_config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'port'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'charset'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'db'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mincached'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 20个连接")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最少的空闲连接数，如果空闲连接数小于这个数，pool会创建一个新的连接")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    pool "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PooledDB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pymysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("db_config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" conn\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# conn = connect_mysql()")]),t._v("\n    conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connect_mysql_pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cursor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建游标")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 游标是系统为用户开设的一个数据缓存区，存放SQL语句执行的结果，")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户可以用SQL语句逐一从游标中获取记录，并赋值给变量，交由Python进一步处理")]),t._v("\n\n    sql "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from demo_transaction_test"')]),t._v("\n    cursor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cursor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取所有结果")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 事务操作")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# insert_sql = "insert into demo_transaction_test values(1111)" # 输整数类型')]),t._v("\n        insert_sql "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"insert into demo_transaction_test values('hello')\"")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输字符串类型")]),t._v("\n        cursor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("insert_sql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rollback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    msg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traceback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format_exc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是出错信息")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MSG="')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是出错栈信息")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"事务原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事务原理"}},[t._v("#")]),t._v(" 事务原理")]),t._v(" "),n("p",[t._v("-待补充")])])}),[],!1,null,null,null);s.default=e.exports}}]);