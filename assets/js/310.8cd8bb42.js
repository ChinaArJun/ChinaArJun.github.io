(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{888:function(a,t,e){"use strict";e.r(t);var s=e(44),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_3-8-为它加上swagger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-为它加上swagger"}},[a._v("#")]),a._v(" 3.8 为它加上Swagger")]),a._v(" "),e("p",[a._v("项目地址：https://github.com/EDDYCJY/go-gin-example")]),a._v(" "),e("h2",{attrs:{id:"涉及知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#涉及知识点"}},[a._v("#")]),a._v(" 涉及知识点")]),a._v(" "),e("ul",[e("li",[a._v("Swagger")])]),a._v(" "),e("h2",{attrs:{id:"本文目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[a._v("#")]),a._v(" 本文目标")]),a._v(" "),e("p",[a._v("一个好的 "),e("code",[a._v("API's")]),a._v("，必然离不开一个好的"),e("code",[a._v("API")]),a._v("文档，如果要开发纯手写 "),e("code",[a._v("API")]),a._v(" 文档，不存在的（很难持续维护），因此我们要自动生成接口文档。")]),a._v(" "),e("h2",{attrs:{id:"安装-swag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-swag"}},[a._v("#")]),a._v(" 安装 swag")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ go get -u github.com/swaggo/swag/cmd/swag\n")])])]),e("p",[a._v("若 "),e("code",[a._v("$GOROOT/bin")]),a._v(" 没有加入"),e("code",[a._v("$PATH")]),a._v("中，你需要执行将其可执行文件移动到"),e("code",[a._v("$GOBIN")]),a._v("下")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mv $GOPATH/bin/swag /usr/local/go/bin\n")])])]),e("h3",{attrs:{id:"验证是否安装成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证是否安装成功"}},[a._v("#")]),a._v(" 验证是否安装成功")]),a._v(" "),e("p",[a._v("检查 $GOBIN 下是否有 swag 文件，如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ swag -v\nswag version v1.1.1\n")])])]),e("h2",{attrs:{id:"安装-gin-swagger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-gin-swagger"}},[a._v("#")]),a._v(" 安装 gin-swagger")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ go get -u github.com/swaggo/gin-swagger\n\n$ go get -u github.com/swaggo/gin-swagger/swaggerFiles\n")])])]),e("p",[a._v("注：三个包都有一定大小，安装需要等一会或要科学上网。")]),a._v(" "),e("h2",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),e("h3",{attrs:{id:"编写api注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写api注释"}},[a._v("#")]),a._v(" 编写API注释")]),a._v(" "),e("p",[e("code",[a._v("Swagger")]),a._v(" 中需要将相应的注释或注解编写到方法上，再利用生成器自动生成说明文件")]),a._v(" "),e("p",[e("code",[a._v("gin-swagger")]),a._v(" 给出的范例：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// @Summary Add a new pet to the store\n// @Description get string by ID\n// @Accept  json\n// @Produce  json\n// @Param   some_id     path    int     true        "Some ID"\n// @Success 200 {string} string\t"ok"\n// @Failure 400 {object} web.APIError "We need ID!!"\n// @Failure 404 {object} web.APIError "Can not find ID"\n// @Router /testapi/get-string-by-int/{some_id} [get]\n')])])]),e("p",[a._v("我们可以参照 "),e("code",[a._v("Swagger")]),a._v(" 的注解规范和范例去编写")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// @Summary 新增文章标签\n// @Produce  json\n// @Param name query string true "Name"\n// @Param state query int false "State"\n// @Param created_by query int false "CreatedBy"\n// @Success 200 {string} json "{"code":200,"data":{},"msg":"ok"}"\n// @Router /api/v1/tags [post]\nfunc AddTag(c *gin.Context) {\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// @Summary 修改文章标签\n// @Produce  json\n// @Param id path int true "ID"\n// @Param name query string true "ID"\n// @Param state query int false "State"\n// @Param modified_by query string true "ModifiedBy"\n// @Success 200 {string} json "{"code":200,"data":{},"msg":"ok"}"\n// @Router /api/v1/tags/{id} [put]\nfunc EditTag(c *gin.Context) {\n')])])]),e("p",[a._v("参考的注解请参见 "),e("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[a._v("go-gin-example"),e("OutboundLink")],1),a._v("。以确保获取最新的 swag 语法")]),a._v(" "),e("h3",{attrs:{id:"路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[a._v("#")]),a._v(" 路由")]),a._v(" "),e("p",[a._v("在完成了注解的编写后，我们需要针对 swagger 新增初始化动作和对应的路由规则，才可以使用。打开 routers/router.go 文件，新增内容如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('package routers\n\nimport (\n\t...\n\t\n\t_ "github.com/EDDYCJY/go-gin-example/docs"\n\n\t...\n)\n\n// InitRouter initialize routing information\nfunc InitRouter() *gin.Engine {\n\t...\n\tr.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))\n\t...\n\tapiv1 := r.Group("/api/v1")\n\tapiv1.Use(jwt.JWT())\n\t{\n\t\t...\n\t}\n\n\treturn r\n}\n')])])]),e("h3",{attrs:{id:"生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成"}},[a._v("#")]),a._v(" 生成")]),a._v(" "),e("p",[a._v("我们进入到"),e("code",[a._v("gin-blog")]),a._v("的项目根目录中，执行初始化命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[$ gin-blog]# swag init\n2018/03/13 23:32:10 Generate swagger docs....\n2018/03/13 23:32:10 Generate general API Info\n2018/03/13 23:32:10 create docs.go at  docs/docs.go\n\n")])])]),e("p",[a._v("完毕后会在项目根目录下生成"),e("code",[a._v("docs")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docs/\n├── docs.go\n└── swagger\n    ├── swagger.json\n    └── swagger.yaml\n\n")])])]),e("p",[a._v("我们可以检查 "),e("code",[a._v("docs.go")]),a._v(" 文件中的 "),e("code",[a._v("doc")]),a._v(" 变量，详细记载中我们文件中所编写的注解和说明\n"),e("img",{attrs:{src:"https://image.eddycjy.com/37ae10e1714c63899a55d49c19af0860.png",alt:"image"}})]),a._v(" "),e("h3",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),e("p",[a._v("大功告成，访问一下 "),e("code",[a._v("http://127.0.0.1:8000/swagger/index.html")]),a._v("， 查看 "),e("code",[a._v("API")]),a._v(" 文档生成是否正确")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://image.eddycjy.com/703b677c6756129c33b5308c1655a35c.png",alt:"image"}})]),a._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("h3",{attrs:{id:"本系列示例代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[a._v("#")]),a._v(" 本系列示例代码")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[a._v("go-gin-example"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"关于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[a._v("#")]),a._v(" 关于")]),a._v(" "),e("h3",{attrs:{id:"修改记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[a._v("#")]),a._v(" 修改记录")]),a._v(" "),e("ul",[e("li",[a._v("第一版：2018年02月16日发布文章")]),a._v(" "),e("li",[a._v("第二版：2019年10月01日修改文章")])]),a._v(" "),e("h2",{attrs:{id:"？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#？"}},[a._v("#")]),a._v(" ？")]),a._v(" "),e("p",[a._v("如果有任何疑问或错误，欢迎在 "),e("a",{attrs:{href:"https://github.com/EDDYCJY/blog",target:"_blank",rel:"noopener noreferrer"}},[a._v("issues"),e("OutboundLink")],1),a._v(" 进行提问或给予修正意见，如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进。")]),a._v(" "),e("h3",{attrs:{id:"我的公众号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[a._v("#")]),a._v(" 我的公众号")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://image.eddycjy.com/8d0b0c3a11e74efd5fdfd7910257e70b.jpg",alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);