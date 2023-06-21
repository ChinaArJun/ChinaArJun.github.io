(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{896:function(r,e,t){"use strict";t.r(e);var a=t(44),n=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"_4-6-unary-and-stream-interceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-unary-and-stream-interceptor"}},[r._v("#")]),r._v(" 4.6 Unary and Stream interceptor")]),r._v(" "),t("p",[r._v("项目地址：https://github.com/EDDYCJY/go-grpc-example")]),r._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[r._v("#")]),r._v(" 前言")]),r._v(" "),t("p",[r._v("我想在每个 RPC 方法的前或后做某些事情，怎么做？")]),r._v(" "),t("p",[r._v("本章节将要介绍的拦截器（interceptor），就能帮你在合适的地方实现这些功能。")]),r._v(" "),t("h2",{attrs:{id:"有几种方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有几种方法"}},[r._v("#")]),r._v(" 有几种方法")]),r._v(" "),t("p",[r._v("在 gRPC 中，大类可分为两种 RPC 方法，与拦截器的对应关系是：")]),r._v(" "),t("ul",[t("li",[r._v("普通方法：一元拦截器（grpc.UnaryInterceptor）")]),r._v(" "),t("li",[r._v("流方法：流拦截器（grpc.StreamInterceptor）")])]),r._v(" "),t("h2",{attrs:{id:"看一看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#看一看"}},[r._v("#")]),r._v(" 看一看")]),r._v(" "),t("h3",{attrs:{id:"grpc-unaryinterceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grpc-unaryinterceptor"}},[r._v("#")]),r._v(" grpc.UnaryInterceptor")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('func UnaryInterceptor(i UnaryServerInterceptor) ServerOption {\n\treturn func(o *options) {\n\t\tif o.unaryInt != nil {\n\t\t\tpanic("The unary server interceptor was already set and may not be reset.")\n\t\t}\n\t\to.unaryInt = i\n\t}\n}\n')])])]),t("p",[r._v("函数原型：")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("type UnaryServerInterceptor func(ctx context.Context, req interface{}, info *UnaryServerInfo, handler UnaryHandler) (resp interface{}, err error)\n")])])]),t("p",[r._v("通过查看源码可得知，要完成一个拦截器需要实现 "),t("code",[r._v("UnaryServerInterceptor")]),r._v(" 方法。形参如下：")]),r._v(" "),t("ul",[t("li",[r._v("ctx context.Context：请求上下文")]),r._v(" "),t("li",[r._v("req interface{}：RPC 方法的请求参数")]),r._v(" "),t("li",[r._v("info *UnaryServerInfo：RPC 方法的所有信息")]),r._v(" "),t("li",[r._v("handler UnaryHandler：RPC 方法本身")])]),r._v(" "),t("h3",{attrs:{id:"grpc-streaminterceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grpc-streaminterceptor"}},[r._v("#")]),r._v(" grpc.StreamInterceptor")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("func StreamInterceptor(i StreamServerInterceptor) ServerOption\n")])])]),t("p",[r._v("函数原型：")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("type StreamServerInterceptor func(srv interface{}, ss ServerStream, info *StreamServerInfo, handler StreamHandler) error\n")])])]),t("p",[r._v("StreamServerInterceptor 与 UnaryServerInterceptor 形参的意义是一样，不再赘述")]),r._v(" "),t("h3",{attrs:{id:"如何实现多个拦截器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何实现多个拦截器"}},[r._v("#")]),r._v(" 如何实现多个拦截器")]),r._v(" "),t("p",[r._v("另外，可以发现 gRPC 本身居然只能设置一个拦截器，难道所有的逻辑都只能写在一起？")]),r._v(" "),t("p",[r._v("关于这一点，你可以放心。采用开源项目 "),t("a",{attrs:{href:"https://github.com/grpc-ecosystem/go-grpc-middleware",target:"_blank",rel:"noopener noreferrer"}},[r._v("go-grpc-middleware"),t("OutboundLink")],1),r._v(" 就可以解决这个问题，本章也会使用它。")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('import "github.com/grpc-ecosystem/go-grpc-middleware"\n\nmyServer := grpc.NewServer(\n    grpc.StreamInterceptor(grpc_middleware.ChainStreamServer(\n        ...\n    )),\n    grpc.UnaryInterceptor(grpc_middleware.ChainUnaryServer(\n       ...\n    )),\n)\n')])])]),t("h2",{attrs:{id:"grpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[r._v("#")]),r._v(" gRPC")]),r._v(" "),t("p",[r._v("从本节开始编写 gRPC interceptor 的代码，我们会将实现以下拦截器：")]),r._v(" "),t("ul",[t("li",[r._v("logging：RPC 方法的入参出参的日志输出")]),r._v(" "),t("li",[r._v("recover：RPC 方法的异常保护和日志输出")])]),r._v(" "),t("h3",{attrs:{id:"实现-interceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现-interceptor"}},[r._v("#")]),r._v(" 实现 interceptor")]),r._v(" "),t("h4",{attrs:{id:"logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[r._v("#")]),r._v(" logging")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('func LoggingInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {\n\tlog.Printf("gRPC method: %s, %v", info.FullMethod, req)\n\tresp, err := handler(ctx, req)\n\tlog.Printf("gRPC method: %s, %v", info.FullMethod, resp)\n\treturn resp, err\n}\n')])])]),t("h4",{attrs:{id:"recover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recover"}},[r._v("#")]),r._v(" recover")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('func RecoveryInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp interface{}, err error) {\n\tdefer func() {\n\t\tif e := recover(); e != nil {\n\t\t\tdebug.PrintStack()\n\t\t\terr = status.Errorf(codes.Internal, "Panic err: %v", e)\n\t\t}\n\t}()\n\n\treturn handler(ctx, req)\n}\n')])])]),t("h3",{attrs:{id:"server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[r._v("#")]),r._v(" Server")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('import (\n\t"context"\n\t"crypto/tls"\n\t"crypto/x509"\n\t"errors"\n\t"io/ioutil"\n\t"log"\n\t"net"\n\t"runtime/debug"\n\n\t"google.golang.org/grpc"\n\t"google.golang.org/grpc/credentials"\n\t"google.golang.org/grpc/status"\n\t"google.golang.org/grpc/codes"\n\t"github.com/grpc-ecosystem/go-grpc-middleware"\n\n\tpb "github.com/EDDYCJY/go-grpc-example/proto"\n)\n\n...\n\nfunc main() {\n\tc, err := GetTLSCredentialsByCA()\n\tif err != nil {\n\t\tlog.Fatalf("GetTLSCredentialsByCA err: %v", err)\n\t}\n\n\topts := []grpc.ServerOption{\n\t\tgrpc.Creds(c),\n\t\tgrpc_middleware.WithUnaryServerChain(\n\t\t\tRecoveryInterceptor,\n\t\t\tLoggingInterceptor,\n\t\t),\n\t}\n\n\tserver := grpc.NewServer(opts...)\n\tpb.RegisterSearchServiceServer(server, &SearchService{})\n\n\tlis, err := net.Listen("tcp", ":"+PORT)\n\tif err != nil {\n\t\tlog.Fatalf("net.Listen err: %v", err)\n\t}\n\n\tserver.Serve(lis)\n}\n')])])]),t("h2",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[r._v("#")]),r._v(" 验证")]),r._v(" "),t("h3",{attrs:{id:"logging-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-2"}},[r._v("#")]),r._v(" logging")]),r._v(" "),t("p",[r._v("启动 simple_server/server.go，执行 simple_client/client.go 发起请求，得到结果：")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('$ go run server.go\n2018/10/02 13:46:35 gRPC method: /proto.SearchService/Search, request:"gRPC" \n2018/10/02 13:46:35 gRPC method: /proto.SearchService/Search, response:"gRPC Server"\n')])])]),t("h3",{attrs:{id:"recover-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recover-2"}},[r._v("#")]),r._v(" recover")]),r._v(" "),t("p",[r._v("在 RPC 方法中人为地制造运行时错误，再重复启动 server/client.go，得到结果：")]),r._v(" "),t("h4",{attrs:{id:"client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[r._v("#")]),r._v(" client")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("$ go run client.go\n2018/10/02 13:19:03 client.Search err: rpc error: code = Internal desc = Panic err: assignment to entry in nil map\nexit status 1\n")])])]),t("h4",{attrs:{id:"server-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-2"}},[r._v("#")]),r._v(" server")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("$ go run server.go\ngoroutine 23 [running]:\nruntime/debug.Stack(0xc420223588, 0x1033da9, 0xc420001980)\n\t/usr/local/Cellar/go/1.10.1/libexec/src/runtime/debug/stack.go:24 +0xa7\nruntime/debug.PrintStack()\n\t/usr/local/Cellar/go/1.10.1/libexec/src/runtime/debug/stack.go:16 +0x22\nmain.RecoveryInterceptor.func1(0xc420223a10)\n...\n")])])]),t("p",[r._v("检查服务是否仍然运行，即可知道 Recovery 是否成功生效")]),r._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),t("p",[r._v("通过本章节，你可以学会最常见的拦截器使用方法。接下来其它“新”需求只要举一反三即可。")]),r._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[r._v("#")]),r._v(" 参考")]),r._v(" "),t("h3",{attrs:{id:"本系列示例代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[r._v("#")]),r._v(" 本系列示例代码")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/EDDYCJY/go-grpc-example",target:"_blank",rel:"noopener noreferrer"}},[r._v("go-grpc-example"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);