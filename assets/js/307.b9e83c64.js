(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{885:function(t,n,e){"use strict";e.r(n);var a=e(44),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用-jwt-进行身份校验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-jwt-进行身份校验"}},[t._v("#")]),t._v(" 使用 JWT 进行身份校验")]),t._v(" "),e("p",[t._v("项目地址：https://github.com/EDDYCJY/go-gin-example")]),t._v(" "),e("h2",{attrs:{id:"涉及知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#涉及知识点"}},[t._v("#")]),t._v(" 涉及知识点")]),t._v(" "),e("ul",[e("li",[t._v("JWT")])]),t._v(" "),e("h2",{attrs:{id:"本文目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[t._v("#")]),t._v(" 本文目标")]),t._v(" "),e("p",[t._v("在前面几节中，我们已经基本的完成了API's的编写，但是，还存在一些非常严重的问题，例如，我们现在的API是可以随意调用的，这显然还不安全全，在本文中我们通过 "),e("a",{attrs:{href:"https://github.com/dgrijalva/jwt-go",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt-go"),e("OutboundLink")],1),t._v(" （"),e("a",{attrs:{href:"https://godoc.org/github.com/dgrijalva/jwt-go",target:"_blank",rel:"noopener noreferrer"}},[t._v("GoDoc"),e("OutboundLink")],1),t._v("）的方式来简单解决这个问题。")]),t._v(" "),e("h2",{attrs:{id:"下载依赖包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载依赖包"}},[t._v("#")]),t._v(" 下载依赖包")]),t._v(" "),e("p",[t._v("首先，我们下载 jwt-go的依赖包，如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("go get -u github.com/dgrijalva/jwt-go\n")])])]),e("h2",{attrs:{id:"编写-jwt-工具包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写-jwt-工具包"}},[t._v("#")]),t._v(" 编写 jwt 工具包")]),t._v(" "),e("p",[t._v("我们需要编写一个"),e("code",[t._v("jwt")]),t._v("的工具包，我们在"),e("code",[t._v("pkg")]),t._v("下的"),e("code",[t._v("util")]),t._v("目录新建"),e("code",[t._v("jwt.go")]),t._v("，写入文件内容：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package util\n\nimport (\n\t"time"\n\n\tjwt "github.com/dgrijalva/jwt-go"\n\n\t"github.com/EDDYCJY/go-gin-example/pkg/setting"\n)\n\nvar jwtSecret = []byte(setting.JwtSecret)\n\ntype Claims struct {\n\tUsername string `json:"username"`\n\tPassword string `json:"password"`\n\tjwt.StandardClaims\n}\n\nfunc GenerateToken(username, password string) (string, error) {\n\tnowTime := time.Now()\n\texpireTime := nowTime.Add(3 * time.Hour)\n\n\tclaims := Claims{\n\t\tusername,\n\t\tpassword,\n\t\tjwt.StandardClaims {\n\t\t\tExpiresAt : expireTime.Unix(),\n\t\t\tIssuer : "gin-blog",\n\t\t},\n\t}\n\n\ttokenClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)\n\ttoken, err := tokenClaims.SignedString(jwtSecret)\n\n\treturn token, err\n}\n\nfunc ParseToken(token string) (*Claims, error) {\n\ttokenClaims, err := jwt.ParseWithClaims(token, &Claims{}, func(token *jwt.Token) (interface{}, error) {\n\t\treturn jwtSecret, nil\n\t})\n\n\tif tokenClaims != nil {\n\t\tif claims, ok := tokenClaims.Claims.(*Claims); ok && tokenClaims.Valid {\n\t\t\treturn claims, nil\n\t\t}\n\t}\n\n\treturn nil, err\n}\n')])])]),e("p",[t._v("在这个工具包，我们涉及到")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("NewWithClaims(method SigningMethod, claims Claims)")]),t._v("，"),e("code",[t._v("method")]),t._v("对应着"),e("code",[t._v("SigningMethodHMAC struct{}")]),t._v("，其包含"),e("code",[t._v("SigningMethodHS256")]),t._v("、"),e("code",[t._v("SigningMethodHS384")]),t._v("、"),e("code",[t._v("SigningMethodHS512")]),t._v("三种"),e("code",[t._v("crypto.Hash")]),t._v("方案")]),t._v(" "),e("li",[e("code",[t._v("func (t *Token) SignedString(key interface{})")]),t._v(" 该方法内部生成签名字符串，再用于获取完整、已签名的"),e("code",[t._v("token")])]),t._v(" "),e("li",[e("code",[t._v("func (p *Parser) ParseWithClaims")]),t._v(" 用于解析鉴权的声明，"),e("a",{attrs:{href:"https://gowalker.org/github.com/dgrijalva/jwt-go#Parser_ParseWithClaims",target:"_blank",rel:"noopener noreferrer"}},[t._v("方法内部"),e("OutboundLink")],1),t._v("主要是具体的解码和校验的过程，最终返回"),e("code",[t._v("*Token")])]),t._v(" "),e("li",[e("code",[t._v("func (m MapClaims) Valid()")]),t._v(" 验证基于时间的声明"),e("code",[t._v("exp, iat, nbf")]),t._v("，注意如果没有任何声明在令牌中，仍然会被认为是有效的。并且对于时区偏差没有计算方法")])]),t._v(" "),e("p",[t._v("有了"),e("code",[t._v("jwt")]),t._v("工具包，接下来我们要编写要用于"),e("code",[t._v("Gin")]),t._v("的中间件，我们在"),e("code",[t._v("middleware")]),t._v("下新建"),e("code",[t._v("jwt")]),t._v("目录，新建"),e("code",[t._v("jwt.go")]),t._v("文件，写入内容：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package jwt\n\nimport (\n\t"time"\n\t"net/http"\n\n\t"github.com/gin-gonic/gin"\n\n\t"github.com/EDDYCJY/go-gin-example/pkg/util"\n\t"github.com/EDDYCJY/go-gin-example/pkg/e"\n)\n\nfunc JWT() gin.HandlerFunc {\n\treturn func(c *gin.Context) {\n\t\tvar code int\n\t\tvar data interface{}\n\n\t\tcode = e.SUCCESS\n\t\ttoken := c.Query("token")\n\t\tif token == "" {\n\t\t\tcode = e.INVALID_PARAMS\n\t\t} else {\n\t\t\tclaims, err := util.ParseToken(token)\n\t\t\tif err != nil {\n\t\t\t\tcode = e.ERROR_AUTH_CHECK_TOKEN_FAIL\n\t\t\t} else if time.Now().Unix() > claims.ExpiresAt {\n\t\t\t\tcode = e.ERROR_AUTH_CHECK_TOKEN_TIMEOUT\n\t\t\t}\n\t\t}\n\n\t\tif code != e.SUCCESS {\n\t\t\tc.JSON(http.StatusUnauthorized, gin.H{\n\t\t        "code" : code,\n\t\t        "msg" : e.GetMsg(code),\n\t\t        "data" : data,\n\t\t    })\n\n\t\t    c.Abort()\n\t\t    return\n\t\t}\n\n\t\tc.Next()\n\t}\n}\n')])])]),e("h2",{attrs:{id:"如何获取token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何获取token"}},[t._v("#")]),t._v(" 如何获取"),e("code",[t._v("Token")])]),t._v(" "),e("p",[t._v("那么我们如何调用它呢，我们还要获取"),e("code",[t._v("Token")]),t._v("呢？")]),t._v(" "),e("p",[t._v("1、 我们要新增一个获取"),e("code",[t._v("Token")]),t._v("的API")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("models")]),t._v("下新建"),e("code",[t._v("auth.go")]),t._v("文件，写入内容：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package models\n\ntype Auth struct {\n\tID int `gorm:"primary_key" json:"id"`\n\tUsername string `json:"username"`\n\tPassword string `json:"password"`\n}\n\nfunc CheckAuth(username, password string) bool {\n\tvar auth Auth\n\tdb.Select("id").Where(Auth{Username : username, Password : password}).First(&auth)\n\tif auth.ID > 0 {\n\t\treturn true\n\t}\n\n\treturn false\n}\n')])])]),e("p",[t._v("在"),e("code",[t._v("routers")]),t._v("下的"),e("code",[t._v("api")]),t._v("目录新建"),e("code",[t._v("auth.go")]),t._v("文件，写入内容：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package api\n\nimport (\n\t"log"\n\t"net/http"\n\n\t"github.com/gin-gonic/gin"\n\t"github.com/astaxie/beego/validation"\n\n\t"github.com/EDDYCJY/go-gin-example/pkg/e"\n\t"github.com/EDDYCJY/go-gin-example/pkg/util"\n\t"github.com/EDDYCJY/go-gin-example/models"\n)\n\ntype auth struct {\n\tUsername string `valid:"Required; MaxSize(50)"`\n\tPassword string `valid:"Required; MaxSize(50)"`\n}\n\nfunc GetAuth(c *gin.Context) {\n\tusername := c.Query("username")\n\tpassword := c.Query("password")\n\n\tvalid := validation.Validation{}\n\ta := auth{Username: username, Password: password}\n\tok, _ := valid.Valid(&a)\n\n\tdata := make(map[string]interface{})\n\tcode := e.INVALID_PARAMS\n\tif ok {\n\t\tisExist := models.CheckAuth(username, password)\n\t\tif isExist {\n\t\t\ttoken, err := util.GenerateToken(username, password)\n\t\t\tif err != nil {\n\t\t\t\tcode = e.ERROR_AUTH_TOKEN\n\t\t\t} else {\n\t\t\t\tdata["token"] = token\n\t\t\t\t\n\t\t\t\tcode = e.SUCCESS\n\t\t\t}\n\n\t\t} else {\n\t\t\tcode = e.ERROR_AUTH\n\t\t}\n\t} else {\n\t\tfor _, err := range valid.Errors {\n            log.Println(err.Key, err.Message)\n        }\n\t}\n\n\tc.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : data,\n    })\n}\n')])])]),e("p",[t._v("我们打开"),e("code",[t._v("routers")]),t._v("目录下的"),e("code",[t._v("router.go")]),t._v("文件，修改文件内容（新增获取token的方法）：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package routers\n\nimport (\n    "github.com/gin-gonic/gin"\n    \n    "github.com/EDDYCJY/go-gin-example/routers/api"\n    "github.com/EDDYCJY/go-gin-example/routers/api/v1"\n    "github.com/EDDYCJY/go-gin-example/pkg/setting"\n)\n\nfunc InitRouter() *gin.Engine {\n    r := gin.New()\n\n    r.Use(gin.Logger())\n\n    r.Use(gin.Recovery())\n\n    gin.SetMode(setting.RunMode)\n\n    r.GET("/auth", api.GetAuth)\n\n    apiv1 := r.Group("/api/v1")\n    {\n        ...\n    }\n\n    return r\n}\n')])])]),e("h2",{attrs:{id:"验证token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证token"}},[t._v("#")]),t._v(" 验证"),e("code",[t._v("Token")])]),t._v(" "),e("p",[t._v("获取"),e("code",[t._v("token")]),t._v("的API方法就到这里啦，让我们来测试下是否可以正常使用吧！")]),t._v(" "),e("p",[t._v("重启服务后，用"),e("code",[t._v("GET")]),t._v("方式访问"),e("code",[t._v("http://127.0.0.1:8000/auth?username=test&password=test123456")]),t._v("，查看返回值是否正确")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "code": 200,\n  "data": {\n    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InRlc3QxMjM0NTYiLCJleHAiOjE1MTg3MjAwMzcsImlzcyI6Imdpbi1ibG9nIn0.-kK0V9E06qTHOzupQM_gHXAGDB3EJtJS4H5TTCyWwW8"\n  },\n  "msg": "ok"\n}\n')])])]),e("p",[t._v("我们有了"),e("code",[t._v("token")]),t._v("的API，也调用成功了")]),t._v(" "),e("h2",{attrs:{id:"将中间件接入gin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将中间件接入gin"}},[t._v("#")]),t._v(" 将中间件接入"),e("code",[t._v("Gin")])]),t._v(" "),e("p",[t._v("2、 接下来我们将中间件接入到"),e("code",[t._v("Gin")]),t._v("的访问流程中")]),t._v(" "),e("p",[t._v("我们打开"),e("code",[t._v("routers")]),t._v("目录下的"),e("code",[t._v("router.go")]),t._v("文件，修改文件内容（新增引用包和中间件引用）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package routers\n\nimport (\n    "github.com/gin-gonic/gin"\n    \n    "github.com/EDDYCJY/go-gin-example/routers/api"\n    "github.com/EDDYCJY/go-gin-example/routers/api/v1"\n    "github.com/EDDYCJY/go-gin-example/pkg/setting"\n    "github.com/EDDYCJY/go-gin-example/middleware/jwt"\n)\n\nfunc InitRouter() *gin.Engine {\n    r := gin.New()\n\n    r.Use(gin.Logger())\n\n    r.Use(gin.Recovery())\n\n    gin.SetMode(setting.RunMode)\n\n    r.GET("/auth", api.GetAuth)\n\n    apiv1 := r.Group("/api/v1")\n    apiv1.Use(jwt.JWT())\n    {\n        ...\n    }\n\n    return r\n}\n')])])]),e("p",[t._v("当前目录结构：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("go-gin-example/\n├── conf\n│   └── app.ini\n├── main.go\n├── middleware\n│   └── jwt\n│       └── jwt.go\n├── models\n│   ├── article.go\n│   ├── auth.go\n│   ├── models.go\n│   └── tag.go\n├── pkg\n│   ├── e\n│   │   ├── code.go\n│   │   └── msg.go\n│   ├── setting\n│   │   └── setting.go\n│   └── util\n│       ├── jwt.go\n│       └── pagination.go\n├── routers\n│   ├── api\n│   │   ├── auth.go\n│   │   └── v1\n│   │       ├── article.go\n│   │       └── tag.go\n│   └── router.go\n├── runtime\n")])])]),e("p",[t._v("到这里，我们的"),e("code",[t._v("JWT")]),t._v("编写就完成啦！")]),t._v(" "),e("h2",{attrs:{id:"验证功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证功能"}},[t._v("#")]),t._v(" 验证功能")]),t._v(" "),e("p",[t._v("我们来测试一下，再次访问")]),t._v(" "),e("ul",[e("li",[t._v("http://127.0.0.1:8000/api/v1/articles")]),t._v(" "),e("li",[t._v("http://127.0.0.1:8000/api/v1/articles?token=23131")])]),t._v(" "),e("p",[t._v("正确的反馈应该是")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "code": 400,\n  "data": null,\n  "msg": "请求参数错误"\n}\n\n{\n  "code": 20001,\n  "data": null,\n  "msg": "Token鉴权失败"\n}\n\n')])])]),e("p",[t._v("我们需要访问"),e("code",[t._v("http://127.0.0.1:8000/auth?username=test&password=test123456")]),t._v("，得到"),e("code",[t._v("token")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "code": 200,\n  "data": {\n    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InRlc3QxMjM0NTYiLCJleHAiOjE1MTg3MjQ2OTMsImlzcyI6Imdpbi1ibG9nIn0.KSBY6TeavV_30kfmP7HWLRYKP5TPEDgHtABe9HCsic4"\n  },\n  "msg": "ok"\n}\n')])])]),e("p",[t._v("再用包含"),e("code",[t._v("token")]),t._v("的URL参数去访问我们的应用API，")]),t._v(" "),e("p",[t._v("访问"),e("code",[t._v("http://127.0.0.1:8000/api/v1/articles?token=eyJhbGci...")]),t._v("，检查接口返回值")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "code": 200,\n  "data": {\n    "lists": [\n      {\n        "id": 2,\n        "created_on": 1518700920,\n        "modified_on": 0,\n        "tag_id": 1,\n        "tag": {\n          "id": 1,\n          "created_on": 1518684200,\n          "modified_on": 0,\n          "name": "tag1",\n          "created_by": "",\n          "modified_by": "",\n          "state": 0\n        },\n        "content": "test-content",\n        "created_by": "test-created",\n        "modified_by": "",\n        "state": 0\n      }\n    ],\n    "total": 1\n  },\n  "msg": "ok"\n}\n')])])]),e("p",[t._v("返回正确，至此我们的"),e("code",[t._v("jwt-go")]),t._v("在"),e("code",[t._v("Gin")]),t._v("中的验证就完成了！")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("h3",{attrs:{id:"本系列示例代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[t._v("#")]),t._v(" 本系列示例代码")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-gin-example"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"关于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),e("h3",{attrs:{id:"修改记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[t._v("#")]),t._v(" 修改记录")]),t._v(" "),e("ul",[e("li",[t._v("第一版：2018年02月16日发布文章")]),t._v(" "),e("li",[t._v("第二版：2019年10月01日修改文章")])]),t._v(" "),e("h2",{attrs:{id:"？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#？"}},[t._v("#")]),t._v(" ？")]),t._v(" "),e("p",[t._v("如果有任何疑问或错误，欢迎在 "),e("a",{attrs:{href:"https://github.com/EDDYCJY/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),e("OutboundLink")],1),t._v(" 进行提问或给予修正意见，如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进。")]),t._v(" "),e("h3",{attrs:{id:"我的公众号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[t._v("#")]),t._v(" 我的公众号")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://image.eddycjy.com/8d0b0c3a11e74efd5fdfd7910257e70b.jpg",alt:"image"}})])])}),[],!1,null,null,null);n.default=r.exports}}]);