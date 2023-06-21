(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{883:function(e,t,a){"use strict";a.r(t);var n=a(44),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gin搭建blog-api-s-（二）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gin搭建blog-api-s-（二）"}},[e._v("#")]),e._v(" Gin搭建Blog API's （二）")]),e._v(" "),a("p",[e._v("项目地址：https://github.com/EDDYCJY/go-gin-example")]),e._v(" "),a("h2",{attrs:{id:"涉及知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#涉及知识点"}},[e._v("#")]),e._v(" 涉及知识点")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gin-gonic/gin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gin"),a("OutboundLink")],1),e._v("：Golang的一个微框架，性能极佳。")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/astaxie/beego/tree/master/validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("beego-validation"),a("OutboundLink")],1),e._v("：本节采用的beego的表单验证库，"),a("a",{attrs:{href:"https://beego.me/docs/mvc/controller/validation.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文文档"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/jinzhu/gorm",target:"_blank",rel:"noopener noreferrer"}},[e._v("gorm"),a("OutboundLink")],1),e._v("，对开发人员友好的ORM框架，"),a("a",{attrs:{href:"http://gorm.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Unknwon/com",target:"_blank",rel:"noopener noreferrer"}},[e._v("com"),a("OutboundLink")],1),e._v("，一个小而美的工具包。")])]),e._v(" "),a("h2",{attrs:{id:"本文目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[e._v("#")]),e._v(" 本文目标")]),e._v(" "),a("ul",[a("li",[e._v("完成博客的标签类接口定义和编写")])]),e._v(" "),a("h2",{attrs:{id:"定义接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义接口"}},[e._v("#")]),e._v(" 定义接口")]),e._v(" "),a("p",[e._v("本节正是编写标签的逻辑，我们想一想，一般接口为增删改查是基础的，那么我们定义一下接口吧！")]),e._v(" "),a("ul",[a("li",[e._v('获取标签列表：GET("/tags")')]),e._v(" "),a("li",[e._v('新建标签：POST("/tags")')]),e._v(" "),a("li",[e._v('更新指定标签：PUT("/tags/:id")')]),e._v(" "),a("li",[e._v('删除指定标签：DELETE("/tags/:id")')])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"编写路由空壳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写路由空壳"}},[e._v("#")]),e._v(" 编写路由空壳")]),e._v(" "),a("p",[e._v("开始编写路由文件逻辑，在"),a("code",[e._v("routers")]),e._v("下新建"),a("code",[e._v("api")]),e._v("目录，我们当前是第一个API大版本，因此在"),a("code",[e._v("api")]),e._v("下新建"),a("code",[e._v("v1")]),e._v("目录，再新建"),a("code",[e._v("tag.go")]),e._v("文件，写入内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package v1\n\nimport (\n    "github.com/gin-gonic/gin"\n)\n\n//获取多个文章标签\nfunc GetTags(c *gin.Context) {\n}\n\n//新增文章标签\nfunc AddTag(c *gin.Context) {\n}\n\n//修改文章标签\nfunc EditTag(c *gin.Context) {\n}\n\n//删除文章标签\nfunc DeleteTag(c *gin.Context) {\n}\n')])])]),a("h2",{attrs:{id:"注册路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册路由"}},[e._v("#")]),e._v(" 注册路由")]),e._v(" "),a("p",[e._v("我们打开"),a("code",[e._v("routers")]),e._v("下的"),a("code",[e._v("router.go")]),e._v("文件，修改文件内容为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package routers\n\nimport (\n    "github.com/gin-gonic/gin"\n    \n    "gin-blog/routers/api/v1"\n    "gin-blog/pkg/setting"\n)\n\nfunc InitRouter() *gin.Engine {\n    r := gin.New()\n\n    r.Use(gin.Logger())\n\n    r.Use(gin.Recovery())\n\n    gin.SetMode(setting.RunMode)\n\n    apiv1 := r.Group("/api/v1")\n    {\n        //获取标签列表\n        apiv1.GET("/tags", v1.GetTags)\n        //新建标签\n        apiv1.POST("/tags", v1.AddTag)\n        //更新指定标签\n        apiv1.PUT("/tags/:id", v1.EditTag)\n        //删除指定标签\n        apiv1.DELETE("/tags/:id", v1.DeleteTag)\n    }\n\n    return r\n}\n')])])]),a("p",[e._v("当前目录结构：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gin-blog/\n├── conf\n│   └── app.ini\n├── main.go\n├── middleware\n├── models\n│   └── models.go\n├── pkg\n│   ├── e\n│   │   ├── code.go\n│   │   └── msg.go\n│   ├── setting\n│   │   └── setting.go\n│   └── util\n│       └── pagination.go\n├── routers\n│   ├── api\n│   │   └── v1\n│   │       └── tag.go\n│   └── router.go\n├── runtime\n")])])]),a("h2",{attrs:{id:"检验路由是否注册成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检验路由是否注册成功"}},[e._v("#")]),e._v(" 检验路由是否注册成功")]),e._v(" "),a("p",[e._v("回到命令行，执行"),a("code",[e._v("go run main.go")]),e._v("，检查路由规则是否注册成功。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ go run main.go \n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:\texport GIN_MODE=release\n - using code:\tgin.SetMode(gin.ReleaseMode)\n\n[GIN-debug] GET    /api/v1/tags              --\x3e gin-blog/routers/api/v1.GetTags (3 handlers)\n[GIN-debug] POST   /api/v1/tags              --\x3e gin-blog/routers/api/v1.AddTag (3 handlers)\n[GIN-debug] PUT    /api/v1/tags/:id          --\x3e gin-blog/routers/api/v1.EditTag (3 handlers)\n[GIN-debug] DELETE /api/v1/tags/:id          --\x3e gin-blog/routers/api/v1.DeleteTag (3 handlers)\n')])])]),a("p",[e._v("运行成功，那么我们愉快的"),a("strong",[e._v("开始编写我们的接口")]),e._v("吧！")]),e._v(" "),a("h2",{attrs:{id:"下载依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载依赖包"}},[e._v("#")]),e._v(" 下载依赖包")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("首先我们要拉取"),a("code",[e._v("validation")]),e._v("的依赖包，在后面的接口里会使用到表单验证")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("go get -u github.com/astaxie/beego/validation\n")])])]),a("h2",{attrs:{id:"编写标签列表的models逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写标签列表的models逻辑"}},[e._v("#")]),e._v(" 编写标签列表的models逻辑")]),e._v(" "),a("p",[e._v("创建"),a("code",[e._v("models")]),e._v("目录下的"),a("code",[e._v("tag.go")]),e._v("，写入文件内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package models\n\ntype Tag struct {\n\tModel\n\n\tName string `json:"name"`\n\tCreatedBy string `json:"created_by"`\n\tModifiedBy string `json:"modified_by"`\n\tState int `json:"state"`\n}\n\nfunc GetTags(pageNum int, pageSize int, maps interface {}) (tags []Tag) {\n\tdb.Where(maps).Offset(pageNum).Limit(pageSize).Find(&tags)\n\t\n\treturn\n}\n\nfunc GetTagTotal(maps interface {}) (count int){\n\tdb.Model(&Tag{}).Where(maps).Count(&count)\n\n\treturn\n}\n')])])]),a("ol",[a("li",[a("p",[e._v("我们创建了一个"),a("code",[e._v("Tag struct{}")]),e._v("，用于"),a("code",[e._v("Gorm")]),e._v("的使用。并给予了附属属性"),a("code",[e._v("json")]),e._v("，这样子在"),a("code",[e._v("c.JSON")]),e._v("的时候就会自动转换格式，非常的便利")])]),e._v(" "),a("li",[a("p",[e._v("可能会有的初学者看到"),a("code",[e._v("return")]),e._v("，而后面没有跟着变量，会不理解；其实你可以看到在函数末端，我们已经显示声明了返回值，这个变量在函数体内也可以直接使用，因为他在一开始就被声明了")])]),e._v(" "),a("li",[a("p",[e._v("有人会疑惑"),a("code",[e._v("db")]),e._v("是哪里来的；因为在同个"),a("code",[e._v("models")]),e._v("包下，因此"),a("code",[e._v("db *gorm.DB")]),e._v("是可以直接使用的")])])]),e._v(" "),a("h2",{attrs:{id:"编写标签列表的路由逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写标签列表的路由逻辑"}},[e._v("#")]),e._v(" 编写标签列表的路由逻辑")]),e._v(" "),a("p",[e._v("打开"),a("code",[e._v("routers")]),e._v("目录下v1版本的"),a("code",[e._v("tag.go")]),e._v("，第一我们先编写"),a("strong",[e._v("获取标签列表的接口")])]),e._v(" "),a("p",[e._v("修改文件内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package v1\n\nimport (\n\t"net/http"\n\n    "github.com/gin-gonic/gin"\n    //"github.com/astaxie/beego/validation"\n    "github.com/Unknwon/com"\n\n    "gin-blog/pkg/e"\n    "gin-blog/models"\n    "gin-blog/pkg/util"\n    "gin-blog/pkg/setting"\n)\n\n//获取多个文章标签\nfunc GetTags(c *gin.Context) {\n    name := c.Query("name")\n\n    maps := make(map[string]interface{})\n    data := make(map[string]interface{})\n\n    if name != "" {\n        maps["name"] = name\n    }\n\n    var state int = -1\n    if arg := c.Query("state"); arg != "" {\n        state = com.StrTo(arg).MustInt()\n        maps["state"] = state\n    }\n\n    code := e.SUCCESS\n\n    data["lists"] = models.GetTags(util.GetPage(c), setting.PageSize, maps)\n    data["total"] = models.GetTagTotal(maps)\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : data,\n    })\n}\n\n//新增文章标签\nfunc AddTag(c *gin.Context) {\n}\n\n//修改文章标签\nfunc EditTag(c *gin.Context) {\n}\n\n//删除文章标签\nfunc DeleteTag(c *gin.Context) {\n}\n')])])]),a("ol",[a("li",[a("code",[e._v("c.Query")]),e._v("可用于获取"),a("code",[e._v("?name=test&state=1")]),e._v("这类URL参数，而"),a("code",[e._v("c.DefaultQuery")]),e._v("则支持设置一个默认值")]),e._v(" "),a("li",[a("code",[e._v("code")]),e._v("变量使用了"),a("code",[e._v("e")]),e._v("模块的错误编码，这正是先前规划好的错误码，方便排错和识别记录")]),e._v(" "),a("li",[a("code",[e._v("util.GetPage")]),e._v("保证了各接口的"),a("code",[e._v("page")]),e._v("处理是一致的")]),e._v(" "),a("li",[a("code",[e._v("c *gin.Context")]),e._v("是"),a("code",[e._v("Gin")]),e._v("很重要的组成部分，可以理解为上下文，它允许我们在中间件之间传递变量、管理流、验证请求的JSON和呈现JSON响应")])]),e._v(" "),a("p",[e._v("在本机执行"),a("code",[e._v("curl 127.0.0.1:8000/api/v1/tags")]),e._v("，正确的返回值为"),a("code",[e._v('{"code":200,"data":{"lists":[],"total":0},"msg":"ok"}')]),e._v("，若存在问题请结合gin结果进行拍错。")]),e._v(" "),a("p",[e._v("在获取标签列表接口中，我们可以根据"),a("code",[e._v("name")]),e._v("、"),a("code",[e._v("state")]),e._v("、"),a("code",[e._v("page")]),e._v("来筛选查询条件，分页的步长可通过"),a("code",[e._v("app.ini")]),e._v("进行配置，以"),a("code",[e._v("lists")]),e._v("、"),a("code",[e._v("total")]),e._v("的组合返回达到分页效果。")]),e._v(" "),a("h2",{attrs:{id:"编写新增标签的models逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写新增标签的models逻辑"}},[e._v("#")]),e._v(" 编写新增标签的models逻辑")]),e._v(" "),a("p",[e._v("接下来我们编写"),a("strong",[e._v("新增标签")]),e._v("的接口")]),e._v(" "),a("p",[e._v("打开"),a("code",[e._v("models")]),e._v("目录下的"),a("code",[e._v("tag.go")]),e._v("，修改文件（增加2个方法）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('...\nfunc ExistTagByName(name string) bool {\n\tvar tag Tag\n\tdb.Select("id").Where("name = ?", name).First(&tag)\n\tif tag.ID > 0 {\n\t\treturn true\n\t}\n\n\treturn false\n}\n\nfunc AddTag(name string, state int, createdBy string) bool{\n\tdb.Create(&Tag {\n\t\tName : name,\n\t\tState : state,\n\t\tCreatedBy : createdBy,\n\t})\n\n\treturn true\n}\n...\n')])])]),a("h2",{attrs:{id:"编写新增标签的路由逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写新增标签的路由逻辑"}},[e._v("#")]),e._v(" 编写新增标签的路由逻辑")]),e._v(" "),a("p",[e._v("打开"),a("code",[e._v("routers")]),e._v("目录下的"),a("code",[e._v("tag.go")]),e._v("，修改文件（变动AddTag方法）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package v1\n\nimport (\n    "log"\n    "net/http"\n\n    "github.com/gin-gonic/gin"\n    "github.com/astaxie/beego/validation"\n    "github.com/Unknwon/com"\n\n    "gin-blog/pkg/e"\n    "gin-blog/models"\n    "gin-blog/pkg/util"\n    "gin-blog/pkg/setting"\n)\n...\n//新增文章标签\nfunc AddTag(c *gin.Context) {\n    name := c.Query("name")\n    state := com.StrTo(c.DefaultQuery("state", "0")).MustInt()\n    createdBy := c.Query("created_by")\n\n    valid := validation.Validation{}\n\tvalid.Required(name, "name").Message("名称不能为空")\n\tvalid.MaxSize(name, 100, "name").Message("名称最长为100字符")\n\tvalid.Required(createdBy, "created_by").Message("创建人不能为空")\n\tvalid.MaxSize(createdBy, 100, "created_by").Message("创建人最长为100字符")\n\tvalid.Range(state, 0, 1, "state").Message("状态只允许0或1")\n\n    code := e.INVALID_PARAMS\n    if ! valid.HasErrors() {\n        if ! models.ExistTagByName(name) {\n            code = e.SUCCESS\n            models.AddTag(name, state, createdBy)\n        } else {\n            code = e.ERROR_EXIST_TAG\n        }\n    }\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : make(map[string]string),\n    })\n}\n...\n')])])]),a("p",[e._v("用"),a("code",[e._v("Postman")]),e._v("用POST访问"),a("code",[e._v("http://127.0.0.1:8000/api/v1/tags?name=1&state=1&created_by=test")]),e._v("，查看"),a("code",[e._v("code")]),e._v("是否返回"),a("code",[e._v("200")]),e._v("及"),a("code",[e._v("blog_tag")]),e._v("表中是否有值，有值则正确。")]),e._v(" "),a("h2",{attrs:{id:"编写models-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写models-callbacks"}},[e._v("#")]),e._v(" 编写models callbacks")]),e._v(" "),a("p",[e._v("但是这个时候大家会发现，我明明新增了标签，但"),a("code",[e._v("created_on")]),e._v("居然没有值，那做修改标签的时候"),a("code",[e._v("modified_on")]),e._v("会不会也存在这个问题？")]),e._v(" "),a("p",[e._v("为了解决这个问题，我们需要打开"),a("code",[e._v("models")]),e._v("目录下的"),a("code",[e._v("tag.go")]),e._v("文件，修改文件内容（修改包引用和增加2个方法）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package models\n\nimport (\n\t"time"\n\n\t"github.com/jinzhu/gorm"\n)\n\n...\n\nfunc (tag *Tag) BeforeCreate(scope *gorm.Scope) error {\n    scope.SetColumn("CreatedOn", time.Now().Unix())\n\n    return nil\n}\n\nfunc (tag *Tag) BeforeUpdate(scope *gorm.Scope) error {\n\tscope.SetColumn("ModifiedOn", time.Now().Unix())\n\n\treturn nil\n}\n')])])]),a("p",[e._v("重启服务，再在用"),a("code",[e._v("Postman")]),e._v("用POST访问"),a("code",[e._v("http://127.0.0.1:8000/api/v1/tags?name=2&state=1&created_by=test")]),e._v("，发现"),a("code",[e._v("created_on")]),e._v("已经有值了！")]),e._v(" "),a("p",[a("strong",[e._v("在这几段代码中，涉及到知识点：")])]),e._v(" "),a("p",[e._v("这属于"),a("code",[e._v("gorm")]),e._v("的"),a("code",[e._v("Callbacks")]),e._v("，可以将回调方法定义为模型结构的指针，在创建、更新、查询、删除时将被调用，如果任何回调返回错误，gorm将停止未来操作并回滚所有更改。")]),e._v(" "),a("p",[a("code",[e._v("gorm")]),e._v("所支持的回调方法：")]),e._v(" "),a("ul",[a("li",[e._v("创建：BeforeSave、BeforeCreate、AfterCreate、AfterSave")]),e._v(" "),a("li",[e._v("更新：BeforeSave、BeforeUpdate、AfterUpdate、AfterSave")]),e._v(" "),a("li",[e._v("删除：BeforeDelete、AfterDelete")]),e._v(" "),a("li",[e._v("查询：AfterFind")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"编写其余接口的路由逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写其余接口的路由逻辑"}},[e._v("#")]),e._v(" 编写其余接口的路由逻辑")]),e._v(" "),a("p",[e._v("接下来，我们一口气把剩余的两个接口（EditTag、DeleteTag）完成吧")]),e._v(" "),a("p",[e._v("打开"),a("code",[e._v("routers")]),e._v("目录下v1版本的"),a("code",[e._v("tag.go")]),e._v("文件，修改内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('...\n//修改文章标签\nfunc EditTag(c *gin.Context) {\n    id := com.StrTo(c.Param("id")).MustInt()\n    name := c.Query("name")\n    modifiedBy := c.Query("modified_by")\n\n    valid := validation.Validation{}\n\n    var state int = -1\n    if arg := c.Query("state"); arg != "" {\n        state = com.StrTo(arg).MustInt()\n        valid.Range(state, 0, 1, "state").Message("状态只允许0或1")\n    }\n\n    valid.Required(id, "id").Message("ID不能为空")\n    valid.Required(modifiedBy, "modified_by").Message("修改人不能为空")\n    valid.MaxSize(modifiedBy, 100, "modified_by").Message("修改人最长为100字符")\n    valid.MaxSize(name, 100, "name").Message("名称最长为100字符")\n\n    code := e.INVALID_PARAMS\n    if ! valid.HasErrors() {\n        code = e.SUCCESS\n        if models.ExistTagByID(id) {\n            data := make(map[string]interface{})\n            data["modified_by"] = modifiedBy\n            if name != "" {\n                data["name"] = name\n            }\n            if state != -1 {\n                data["state"] = state\n            }\n\n            models.EditTag(id, data)\n        } else {\n            code = e.ERROR_NOT_EXIST_TAG\n        }\n    }\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : make(map[string]string),\n    })\n}    \n\n//删除文章标签\nfunc DeleteTag(c *gin.Context) {\n    id := com.StrTo(c.Param("id")).MustInt()\n\n    valid := validation.Validation{}\n    valid.Min(id, 1, "id").Message("ID必须大于0")\n\n    code := e.INVALID_PARAMS\n    if ! valid.HasErrors() {\n        code = e.SUCCESS\n        if models.ExistTagByID(id) {\n            models.DeleteTag(id)\n        } else {\n            code = e.ERROR_NOT_EXIST_TAG\n        }\n    }\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : make(map[string]string),\n    })\n}\n')])])]),a("h2",{attrs:{id:"编写其余接口的models逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写其余接口的models逻辑"}},[e._v("#")]),e._v(" 编写其余接口的models逻辑")]),e._v(" "),a("p",[e._v("打开"),a("code",[e._v("models")]),e._v("下的"),a("code",[e._v("tag.go")]),e._v("，修改文件内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('...\n\nfunc ExistTagByID(id int) bool {\n\tvar tag Tag\n\tdb.Select("id").Where("id = ?", id).First(&tag)\n\tif tag.ID > 0 {\n\t\treturn true\n\t}\n\n\treturn false\n}\n\nfunc DeleteTag(id int) bool {\n\tdb.Where("id = ?", id).Delete(&Tag{})\n\n\treturn true\n}\n\nfunc EditTag(id int, data interface {}) bool {\n\tdb.Model(&Tag{}).Where("id = ?", id).Updates(data)\n\n\treturn true\n}\n...\n')])])]),a("h2",{attrs:{id:"验证功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证功能"}},[e._v("#")]),e._v(" 验证功能")]),e._v(" "),a("p",[e._v("重启服务，用Postman")]),e._v(" "),a("ul",[a("li",[e._v("PUT访问http://127.0.0.1:8000/api/v1/tags/1?name=edit1&state=0&modified_by=edit1，查看code是否返回200")]),e._v(" "),a("li",[e._v("DELETE访问http://127.0.0.1:8000/api/v1/tags/1，查看code是否返回200")])]),e._v(" "),a("p",[e._v("至此，Tag的API's完成，下一节我们将开始Article的API's编写！")]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("h3",{attrs:{id:"本系列示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[e._v("#")]),e._v(" 本系列示例代码")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-gin-example"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"关于"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[e._v("#")]),e._v(" 关于")]),e._v(" "),a("h3",{attrs:{id:"修改记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[e._v("#")]),e._v(" 修改记录")]),e._v(" "),a("ul",[a("li",[e._v("第一版：2018年02月16日发布文章")]),e._v(" "),a("li",[e._v("第二版：2019年10月01日修改文章")])]),e._v(" "),a("h2",{attrs:{id:"？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#？"}},[e._v("#")]),e._v(" ？")]),e._v(" "),a("p",[e._v("如果有任何疑问或错误，欢迎在 "),a("a",{attrs:{href:"https://github.com/EDDYCJY/blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),a("OutboundLink")],1),e._v(" 进行提问或给予修正意见，如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进。")]),e._v(" "),a("h3",{attrs:{id:"我的公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[e._v("#")]),e._v(" 我的公众号")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://image.eddycjy.com/8d0b0c3a11e74efd5fdfd7910257e70b.jpg",alt:"image"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);