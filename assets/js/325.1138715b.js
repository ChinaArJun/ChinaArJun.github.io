(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{903:function(e,r,t){"use strict";t.r(r);var a=t(44),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_5-3-swagger了解一下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-swagger了解一下"}},[e._v("#")]),e._v(" 5.3 Swagger了解一下")]),e._v(" "),t("p",[e._v("在"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000013408485",target:"_blank",rel:"noopener noreferrer"}},[e._v("上一节"),t("OutboundLink")],1),e._v("，我们完成了一个服务端同时支持"),t("code",[e._v("Rpc")]),e._v("和"),t("code",[e._v("RESTful Api")]),e._v("后，你以为自己大功告成了，结果突然发现要写"),t("code",[e._v("Api")]),e._v("文档和前端同事对接= = 。。。")]),e._v(" "),t("p",[e._v("你寻思有没有什么组件能够自动化生成"),t("code",[e._v("Api")]),e._v("文档来解决这个问题，就在这时你发现了"),t("code",[e._v("Swagger")]),e._v("，一起了解一下吧！")]),e._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),t("h3",{attrs:{id:"swagger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swagger"}},[e._v("#")]),e._v(" Swagger")]),e._v(" "),t("p",[t("code",[e._v("Swagger")]),e._v("是全球最大的"),t("code",[e._v("OpenAPI")]),e._v("规范（OAS）API开发工具框架，支持从设计和文档到测试和部署的整个API生命周期的开发")]),e._v(" "),t("p",[t("code",[e._v("Swagger")]),e._v("是目前最受欢迎的"),t("code",[e._v("RESTful Api")]),e._v("文档生成工具之一，主要的原因如下")]),e._v(" "),t("ul",[t("li",[e._v("跨平台、跨语言的支持")]),e._v(" "),t("li",[e._v("强大的社区")]),e._v(" "),t("li",[e._v("生态圈 Swagger Tools（"),t("a",{attrs:{href:"https://github.com/swagger-api/swagger-editor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger Editor"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://github.com/swagger-api/swagger-codegen",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger Codegen"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://github.com/swagger-api/swagger-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger UI"),t("OutboundLink")],1),e._v(" ...）")]),e._v(" "),t("li",[e._v("强大的控制台")])]),e._v(" "),t("p",[e._v("同时"),t("code",[e._v("grpc-gateway")]),e._v("也支持"),t("code",[e._v("Swagger")])]),e._v(" "),t("p",[e._v("[image]")]),e._v(" "),t("h3",{attrs:{id:"openapi规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openapi规范"}},[e._v("#")]),e._v(" "),t("code",[e._v("OpenAPI")]),e._v("规范")]),e._v(" "),t("p",[t("code",[e._v("OpenAPI")]),e._v("规范是"),t("code",[e._v("Linux")]),e._v("基金会的一个项目，试图通过定义一种用来描述API格式或API定义的语言，来规范"),t("code",[e._v("RESTful")]),e._v("服务开发过程。"),t("code",[e._v("OpenAPI")]),e._v("规范帮助我们描述一个API的基本信息，比如：")]),e._v(" "),t("ul",[t("li",[e._v("有关该API的一般性描述")]),e._v(" "),t("li",[e._v("可用路径（/资源）")]),e._v(" "),t("li",[e._v("在每个路径上的可用操作（获取/提交...）")]),e._v(" "),t("li",[e._v("每个操作的输入/输出格式")])]),e._v(" "),t("p",[e._v("目前V2.0版本的"),t("a",{attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI规范"),t("OutboundLink")],1),e._v("（也就是SwaggerV2.0规范）已经发布并开源在github上。该文档写的非常好，结构清晰，方便随时查阅。")]),e._v(" "),t("p",[e._v("注："),t("code",[e._v("OpenAPI")]),e._v("规范的介绍引用自"),t("a",{attrs:{href:"https://huangwenchao.gitbooks.io/swagger/content/",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),t("h3",{attrs:{id:"生成swagger的说明文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成swagger的说明文件"}},[e._v("#")]),e._v(" 生成"),t("code",[e._v("Swagger")]),e._v("的说明文件")]),e._v(" "),t("p",[t("strong",[e._v("第一")]),e._v("，我们需要检查$GOBIN下是否包含"),t("code",[e._v("protoc-gen-swagger")]),e._v("可执行文件")]),e._v(" "),t("p",[e._v("若不存在则需要执行：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger\n")])])]),t("p",[e._v("等待执行完毕后，可在"),t("code",[e._v("$GOPATH/bin")]),e._v("下发现该执行文件，将其移动到"),t("code",[e._v("$GOBIN")]),e._v("下即可")]),e._v(" "),t("p",[t("strong",[e._v("第二")]),e._v("，回到"),t("code",[e._v("$GOPATH/src/grpc-hello-world/proto")]),e._v("下，执行命令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("protoc -I/usr/local/include -I. -I$GOPATH/src/grpc-hello-world/proto/google/api --swagger_out=logtostderr=true:. ./hello.proto\n")])])]),t("p",[e._v("成功后执行"),t("code",[e._v("ls")]),e._v("即可看到"),t("code",[e._v("hello.swagger.json")]),e._v("文件")]),e._v(" "),t("h3",{attrs:{id:"下载swagger-ui文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载swagger-ui文件"}},[e._v("#")]),e._v(" 下载"),t("code",[e._v("Swagger UI")]),e._v("文件")]),e._v(" "),t("p",[t("code",[e._v("Swagger")]),e._v("提供可视化的"),t("code",[e._v("API")]),e._v("管理平台，就是"),t("a",{attrs:{href:"https://github.com/swagger-api/swagger-ui",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger UI"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("我们将其源码下载下来，并将其"),t("code",[e._v("dist")]),e._v("目录下的所有文件拷贝到我们项目中的"),t("code",[e._v("$GOPATH/src/grpc-hello-world/third_party/swagger-ui")]),e._v("去")]),e._v(" "),t("h3",{attrs:{id:"将swagger-ui转换为go源代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将swagger-ui转换为go源代码"}},[e._v("#")]),e._v(" 将"),t("code",[e._v("Swagger UI")]),e._v("转换为"),t("code",[e._v("Go")]),e._v("源代码")]),e._v(" "),t("p",[e._v("在这里我们使用的转换工具是"),t("a",{attrs:{href:"https://github.com/jteeuwen/go-bindata",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-bindata"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("它支持将任何文件转换为可管理的"),t("code",[e._v("Go")]),e._v("源代码。用于将二进制数据嵌入到"),t("code",[e._v("Go")]),e._v("程序中。并且在将文件数据转换为原始字节片之前，可以选择压缩文件数据")]),e._v(" "),t("h4",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go get -u github.com/jteeuwen/go-bindata/...\n")])])]),t("p",[e._v("完成后，将"),t("code",[e._v("$GOPATH/bin")]),e._v("下的"),t("code",[e._v("go-bindata")]),e._v("移动到"),t("code",[e._v("$GOBIN")]),e._v("下")]),e._v(" "),t("h4",{attrs:{id:"转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转换"}},[e._v("#")]),e._v(" 转换")]),e._v(" "),t("p",[e._v("在项目下新建"),t("code",[e._v("pkg/ui/data/swagger")]),e._v("目录，回到"),t("code",[e._v("$GOPATH/src/grpc-hello-world/third_party/swagger-ui")]),e._v("下，执行命令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go-bindata --nocompress -pkg swagger -o pkg/ui/data/swagger/datafile.go third_party/swagger-ui/...\n")])])]),t("h4",{attrs:{id:"检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查"}},[e._v("#")]),e._v(" 检查")]),e._v(" "),t("p",[e._v("回到"),t("code",[e._v("pkg/ui/data/swagger")]),e._v("目录，检查是否存在"),t("code",[e._v("datafile.go")]),e._v("文件")]),e._v(" "),t("h3",{attrs:{id:"swagger-ui文件服务器（对外提供服务）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swagger-ui文件服务器（对外提供服务）"}},[e._v("#")]),e._v(" "),t("code",[e._v("Swagger UI")]),e._v("文件服务器（对外提供服务）")]),e._v(" "),t("p",[e._v("在这一步，我们需要使用与其配套的"),t("a",{attrs:{href:"https://github.com/elazarl/go-bindata-assetfs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-bindata-assetfs"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("它能够使用"),t("code",[e._v("go-bindata")]),e._v("所生成"),t("code",[e._v("Swagger UI")]),e._v("的"),t("code",[e._v("Go")]),e._v("代码，结合"),t("code",[e._v("net/http")]),e._v("对外提供服务")]),e._v(" "),t("h4",{attrs:{id:"安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("go get github.com/elazarl/go-bindata-assetfs/...\n")])])]),t("h4",{attrs:{id:"编写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写"}},[e._v("#")]),e._v(" 编写")]),e._v(" "),t("p",[e._v("通过分析，我们得知生成的文件提供了一个"),t("code",[e._v("assetFS")]),e._v("函数，该函数返回一个封装了嵌入文件的"),t("code",[e._v("http.Filesystem")]),e._v("，可以用其来提供一个"),t("code",[e._v("HTTP")]),e._v("服务")]),e._v(" "),t("p",[e._v("那么我们来编写"),t("code",[e._v("Swagger UI")]),e._v("的代码吧，主要是两个部分，一个是"),t("code",[e._v("swagger.json")]),e._v("，另外一个是"),t("code",[e._v("swagger-ui")]),e._v("的响应")]),e._v(" "),t("h5",{attrs:{id:"serveswaggerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serveswaggerfile"}},[e._v("#")]),e._v(" serveSwaggerFile")]),e._v(" "),t("p",[e._v("引用包"),t("code",[e._v("strings")]),e._v("、"),t("code",[e._v("path")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('func serveSwaggerFile(w http.ResponseWriter, r *http.Request) {\n      if ! strings.HasSuffix(r.URL.Path, "swagger.json") {\n        log.Printf("Not Found: %s", r.URL.Path)\n        http.NotFound(w, r)\n        return\n    }\n\n    p := strings.TrimPrefix(r.URL.Path, "/swagger/")\n    p = path.Join("proto", p)\n\n    log.Printf("Serving swagger-file: %s", p)\n\n    http.ServeFile(w, r, p)\n}\n')])])]),t("p",[e._v("在函数中，我们利用"),t("code",[e._v("r.URL.Path")]),e._v("进行路径后缀判断")]),e._v(" "),t("p",[e._v("主要做了对"),t("code",[e._v("swagger.json")]),e._v("的文件访问支持（提供"),t("code",[e._v("https://127.0.0.1:50052/swagger/hello.swagger.json")]),e._v("的访问）")]),e._v(" "),t("h5",{attrs:{id:"serveswaggerui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serveswaggerui"}},[e._v("#")]),e._v(" serveSwaggerUI")]),e._v(" "),t("p",[e._v("引用包"),t("code",[e._v("github.com/elazarl/go-bindata-assetfs")]),e._v("、"),t("code",[e._v("grpc-hello-world/pkg/ui/data/swagger")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('func serveSwaggerUI(mux *http.ServeMux) {\n    fileServer := http.FileServer(&assetfs.AssetFS{\n        Asset:    swagger.Asset,\n        AssetDir: swagger.AssetDir,\n        Prefix:   "third_party/swagger-ui",\n    })\n    prefix := "/swagger-ui/"\n    mux.Handle(prefix, http.StripPrefix(prefix, fileServer))\n}\n')])])]),t("p",[e._v("在函数中，我们使用了"),t("a",{attrs:{href:"https://github.com/elazarl/go-bindata-assetfs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-bindata-assetfs"),t("OutboundLink")],1),e._v("来调度先前生成的"),t("code",[e._v("datafile.go")]),e._v("，结合"),t("code",[e._v("net/http")]),e._v("来对外提供"),t("code",[e._v("swagger-ui")]),e._v("的服务")]),e._v(" "),t("h4",{attrs:{id:"结合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结合"}},[e._v("#")]),e._v(" 结合")]),e._v(" "),t("p",[e._v("在完成功能后，我们发现"),t("code",[e._v('path.Join("proto", p)')]),e._v("是写死参数的，这样显然不对，我们应该将其导出成外部参数，那么我们来最终改造一番")]),e._v(" "),t("p",[e._v("首先我们在"),t("code",[e._v("server.go")]),e._v("新增包全局变量"),t("code",[e._v("SwaggerDir")]),e._v("，修改"),t("code",[e._v("cmd/server.go")]),e._v("文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('package cmd\n\nimport (\n\t"log"\n\n\t"github.com/spf13/cobra"\n\t\n\t"grpc-hello-world/server"\n)\n\nvar serverCmd = &cobra.Command{\n\tUse:   "server",\n\tShort: "Run the gRPC hello-world server",\n\tRun: func(cmd *cobra.Command, args []string) {\n\t\tdefer func() {\n\t\t\tif err := recover(); err != nil {\n\t\t\t\tlog.Println("Recover error : %v", err)\n\t\t\t}\n\t\t}()\n\t\t\n\t\tserver.Run()\n\t},\n}\n\nfunc init() {\n\tserverCmd.Flags().StringVarP(&server.ServerPort, "port", "p", "50052", "server port")\n\tserverCmd.Flags().StringVarP(&server.CertPemPath, "cert-pem", "", "./conf/certs/server.pem", "cert-pem path")\n\tserverCmd.Flags().StringVarP(&server.CertKeyPath, "cert-key", "", "./conf/certs/server.key", "cert-key path")\n\tserverCmd.Flags().StringVarP(&server.CertServerName, "cert-server-name", "", "grpc server name", "server\'s hostname")\n\tserverCmd.Flags().StringVarP(&server.SwaggerDir, "swagger-dir", "", "proto", "path to the directory which contains swagger definitions")\n\t\n\trootCmd.AddCommand(serverCmd)\n}\n')])])]),t("p",[e._v("修改"),t("code",[e._v('path.Join("proto", p)')]),e._v("为"),t("code",[e._v("path.Join(SwaggerDir, p)")]),e._v("，这样的话我们"),t("code",[e._v("swagger.json")]),e._v("的文件路径就可以根据外部情况去修改它")]),e._v(" "),t("p",[e._v("最终"),t("code",[e._v("server.go")]),e._v("文件内容：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('package server\n\nimport (\n    "crypto/tls"\n    "net"\n    "net/http"\n    "log"\n    "strings"\n    "path"\n\n    "golang.org/x/net/context"\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/credentials"\n    "github.com/grpc-ecosystem/grpc-gateway/runtime"\n    "github.com/elazarl/go-bindata-assetfs"\n    \n    pb "grpc-hello-world/proto"\n    "grpc-hello-world/pkg/util"\n    "grpc-hello-world/pkg/ui/data/swagger"\n)\n\nvar (\n    ServerPort string\n    CertServerName string\n    CertPemPath string\n    CertKeyPath string\n    SwaggerDir string\n    EndPoint string\n\n    tlsConfig *tls.Config\n)\n\nfunc Run() (err error) {\n    EndPoint = ":" + ServerPort\n    tlsConfig = util.GetTLSConfig(CertPemPath, CertKeyPath)\n\n    conn, err := net.Listen("tcp", EndPoint)\n    if err != nil {\n        log.Printf("TCP Listen err:%v\\n", err)\n    }\n\n    srv := newServer(conn)\n\n    log.Printf("gRPC and https listen on: %s\\n", ServerPort)\n\n    if err = srv.Serve(util.NewTLSListener(conn, tlsConfig)); err != nil {\n        log.Printf("ListenAndServe: %v\\n", err)\n    }\n\n    return err\n}\n \nfunc newServer(conn net.Listener) (*http.Server) {\n    grpcServer := newGrpc()\n    gwmux, err := newGateway()\n    if err != nil {\n        panic(err)\n    }\n\n    mux := http.NewServeMux()\n    mux.Handle("/", gwmux)\n    mux.HandleFunc("/swagger/", serveSwaggerFile)\n    serveSwaggerUI(mux)\n\n    return &http.Server{\n        Addr:      EndPoint,\n        Handler:   util.GrpcHandlerFunc(grpcServer, mux),\n        TLSConfig: tlsConfig,\n    }\n}\n\nfunc newGrpc() *grpc.Server {\n    creds, err := credentials.NewServerTLSFromFile(CertPemPath, CertKeyPath)\n    if err != nil {\n        panic(err)\n    }\n\n    opts := []grpc.ServerOption{\n        grpc.Creds(creds),\n    }\n    server := grpc.NewServer(opts...)\n\n    pb.RegisterHelloWorldServer(server, NewHelloService())\n\n    return server\n}\n\nfunc newGateway() (http.Handler, error) {\n    ctx := context.Background()\n    dcreds, err := credentials.NewClientTLSFromFile(CertPemPath, CertServerName)\n    if err != nil {\n        return nil, err\n    }\n    dopts := []grpc.DialOption{grpc.WithTransportCredentials(dcreds)}\n    \n    gwmux := runtime.NewServeMux()\n    if err := pb.RegisterHelloWorldHandlerFromEndpoint(ctx, gwmux, EndPoint, dopts); err != nil {\n        return nil, err\n    }\n\n    return gwmux, nil\n}\n\nfunc serveSwaggerFile(w http.ResponseWriter, r *http.Request) {\n      if ! strings.HasSuffix(r.URL.Path, "swagger.json") {\n        log.Printf("Not Found: %s", r.URL.Path)\n        http.NotFound(w, r)\n        return\n    }\n\n    p := strings.TrimPrefix(r.URL.Path, "/swagger/")\n    p = path.Join(SwaggerDir, p)\n\n    log.Printf("Serving swagger-file: %s", p)\n\n    http.ServeFile(w, r, p)\n}\n\nfunc serveSwaggerUI(mux *http.ServeMux) {\n    fileServer := http.FileServer(&assetfs.AssetFS{\n        Asset:    swagger.Asset,\n        AssetDir: swagger.AssetDir,\n        Prefix:   "third_party/swagger-ui",\n    })\n    prefix := "/swagger-ui/"\n    mux.Handle(prefix, http.StripPrefix(prefix, fileServer))\n}\n')])])]),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[e._v("#")]),e._v(" 测试")]),e._v(" "),t("p",[e._v("访问路径"),t("code",[e._v("https://127.0.0.1:50052/swagger/hello.swagger.json")]),e._v("，查看输出内容是否为"),t("code",[e._v("hello.swagger.json")]),e._v("的内容，例如：\n[image]")]),e._v(" "),t("p",[e._v("访问路径"),t("code",[e._v("https://127.0.0.1:50052/swagger-ui/")]),e._v("，查看内容\n[image]")]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("至此我们这一章节就完毕了，"),t("code",[e._v("Swagger")]),e._v("和其生态圈十分的丰富，有兴趣研究的小伙伴可以到其"),t("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),t("OutboundLink")],1),e._v("认真研究")]),e._v(" "),t("p",[e._v("而目前完成的程度也满足了日常工作的需求了，可较自动化的生成"),t("code",[e._v("RESTful Api")]),e._v("文档，完成与接口对接")]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("h3",{attrs:{id:"示例代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[e._v("#")]),e._v(" 示例代码")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/EDDYCJY/grpc-hello-world",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc-hello-world"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);