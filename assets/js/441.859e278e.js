(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{1021:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"callbacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callbacks"}},[t._v("#")]),t._v(" Callbacks")]),t._v(" "),s("p",[t._v("您可以将回调方法定义为模型结构的指针，在创建，更新，查询，删除时将被调用，如果任何回调返回错误，gorm将停止未来操作并回滚所有更改。")]),t._v(" "),s("h2",{attrs:{id:"创建对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建对象"}},[t._v("#")]),t._v(" 创建对象")]),t._v(" "),s("p",[t._v("创建过程中可用的回调")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// begin transaction 开始事物")]),t._v("\nBeforeSave\nBeforeCreate\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// save before associations 保存前关联")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update timestamp `CreatedAt`, `UpdatedAt` 更新`CreatedAt`, `UpdatedAt`时间戳")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// save self 保存自己")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reload fields that have default value and its value is blank 重新加载具有默认值且其值为空的字段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// save after associations 保存后关联")]),t._v("\nAfterCreate\nAfterSave\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commit or rollback transaction 提交或回滚事务")]),t._v("\n")])])]),s("h2",{attrs:{id:"更新对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新对象"}},[t._v("#")]),t._v(" 更新对象")]),t._v(" "),s("p",[t._v("更新过程中可用的回调")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// begin transaction 开始事物")]),t._v("\nBeforeSave\nBeforeUpdate\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// save before associations 保存前关联")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update timestamp `UpdatedAt` 更新`UpdatedAt`时间戳")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// save self 保存自己")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// save after associations 保存后关联")]),t._v("\nAfterUpdate\nAfterSave\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commit or rollback transaction 提交或回滚事务")]),t._v("\n")])])]),s("h2",{attrs:{id:"删除对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除对象"}},[t._v("#")]),t._v(" 删除对象")]),t._v(" "),s("p",[t._v("删除过程中可用的回调")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// begin transaction 开始事物")]),t._v("\nBeforeDelete\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// delete self 删除自己")]),t._v("\nAfterDelete\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commit or rollback transaction 提交或回滚事务")]),t._v("\n")])])]),s("h2",{attrs:{id:"查询对象-querying-an-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询对象-querying-an-object"}},[t._v("#")]),t._v(" 查询对象 {#querying-an-object}")]),t._v(" "),s("p",[t._v("查询过程中可用的回调")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// load data from database 从数据库加载数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Preloading (edger loading) 预加载（加载）")]),t._v("\nAfterFind\n")])])]),s("h2",{attrs:{id:"回调示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调示例"}},[t._v("#")]),t._v(" 回调示例")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BeforeUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readonly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"read only user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果用户ID大于1000，则回滚插入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AfterCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" errors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user id is already greater than 1000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("gorm中的保存/删除操作正在事务中运行，因此在该事务中所做的更改不可见，除非提交。 如果要在回调中使用这些更改，则需要在同一事务中运行SQL。 所以你需要传递当前事务到回调，像这样：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AfterCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gorm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("User"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AfterCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gorm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  scope"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);