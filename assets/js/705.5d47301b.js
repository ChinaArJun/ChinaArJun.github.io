(window.webpackJsonp=window.webpackJsonp||[]).push([[705],{1306:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("关于安装，参考上一篇文章")]),t._v(" "),a("h2",{attrs:{id:"启动-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-shell"}},[t._v("#")]),t._v(" 启动 shell")]),t._v(" "),a("p",[t._v("首先创建项目目录，并创建一个 sbt 文件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" hello\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" hello\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" hello.sbt\n")])])]),a("p",[t._v("启动 sbt shell，在 shell 中可以使用 "),a("code",[t._v("help")]),t._v(" 查看命令帮助")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ sbt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Updated "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /root/hello/project/build.properties: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" sbt.version to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(".8\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading project definition from /root/hello/project\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Updating ProjectRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file:/root/hello/project/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Done updating.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading settings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" project hello from build.sbt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Set current project to hello "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in build file:/root/hello/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" sbt server started at local:///root/.sbt/1.0/server/531858fa6de1db1d6da4/sock\nsbt:hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nsbt:hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n\n  about                                          Displays basic information about sbt and the build.\n  tasks                                          Lists the tasks defined "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the current project.\n  settings                                       Lists the settings defined "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the current project.\n  reload                                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("loads the current project or changes to plugins project or returns from it.\n  new                                            Creates a new sbt build.\n  projects                                       Lists the names of available projects or temporarily adds/removes extra builds to the session.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("在 shell 中使用 "),a("code",[t._v("exit")]),t._v(" 命令或者 Ctrl+D 退出")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("sbt:hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" shutting down server\n")])])]),a("p",[t._v("退出 shell 后，文件目录已发生了改变，我们使用 "),a("code",[t._v("tree")]),t._v(" 查看一下文件目录，这里的 "),a("code",[t._v("-L 5")]),t._v(" 代表打印目录层级深度为5。")]),t._v(" "),a("p",[t._v("如果你没有安装 "),a("code",[t._v("tree")]),t._v("，可以使用 "),a("code",[t._v("ls -lahR")]),t._v("，不过可读性和美观度就差了很多了。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ tree -L "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── build.sbt\n├── project\n│   ├── build.properties\n│   └── target\n│       ├── config-classes\n│       ├── scala-2.12\n│       │   └── sbt-1.0\n│       │       └── resolution-cache\n│       └── streams\n│           ├── "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$global")]),t._v("\n│           │   ├── "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$global")]),t._v("\n│           │   ├── dependencyPositions\n│           │   ├── ivyConfiguration\n│           │   ├── ivySbt\n│           │   ├── projectDescriptors\n│           │   └── update\n│           ├── compile\n│           │   ├── "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$global")]),t._v("\n│           │   ├── compile\n│           │   ├── compileIncSetup\n│           │   ├── compileIncremental\n│           │   ├── copyResources\n│           │   ├── dependencyClasspath\n│           │   ├── exportedProducts\n│           │   ├── externalDependencyClasspath\n│           │   ├── internalDependencyClasspath\n│           │   ├── managedClasspath\n│           │   ├── unmanagedClasspath\n│           │   └── unmanagedJars\n│           └── runtime\n│               ├── dependencyClasspath\n│               ├── exportedProducts\n│               ├── externalDependencyClasspath\n│               ├── fullClasspath\n│               ├── internalDependencyClasspath\n│               ├── managedClasspath\n│               ├── unmanagedClasspath\n│               └── unmanagedJars\n└── target\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v(" directories, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" files\n")])])]),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" hello, world")]),t._v(" "),a("p",[t._v("退出 shell 后，创建目录 "),a("code",[t._v("src/main/scala/example")]),t._v("，并创建文件 "),a("code",[t._v("Hello.scala")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p src/main/scala/example/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" src/main/scala/example/Hello.scala\n")])])]),a("p",[t._v("Hello.scala 文件中的程序是打印一个 "),a("code",[t._v("hello, world")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" Hello "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello, world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("再次进入 shell 中")]),t._v(" "),a("ol",[a("li",[t._v("使用 "),a("code",[t._v("compile")]),t._v(" 命令编译程序")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("run")]),t._v(" 命令运行程序")])]),t._v(" "),a("p",[t._v("程序运行成功，打印出 "),a("code",[t._v("hello, world")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("sbt:hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" compile\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Compiling "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" Scala "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" to /root/hello/target/scala-2.12/classes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Done compiling.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Total time: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" s, completed "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-4-17 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":29:17\nsbt:hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" run\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Packaging /root/hello/target/scala-2.12/hello_2.12-0.1.0-SNAPSHOT.jar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Done packaging.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Running example.Hello\nhello, world\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Total time: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" s, completed "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-4-17 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(":29:36\n")])])]),a("h2",{attrs:{id:"项目构建配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目构建配置"}},[t._v("#")]),t._v(" 项目构建配置")]),t._v(" "),a("p",[t._v("编写项目配置文件 "),a("code",[t._v("build.sbt")]),t._v("，指定 scala 版本号以及项目命名")]),t._v(" "),a("div",{staticClass:"language-sbt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('name := "Hello"\n')])])]),a("p",[t._v("修改 "),a("code",[t._v("build.sbt")]),t._v(" 后，使用 "),a("code",[t._v("reload")]),t._v(" 重新载入配置。此时提示符变为了项目名")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("sbt:hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" reload\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading project definition from /root/hello/project\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading settings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" project hello from build.sbt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Set current project to Hello "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in build file:/root/hello/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsbt:Hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[t._v("#")]),t._v(" 打包")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ sbt package\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading project definition from /root/hello/project\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Loading settings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" project hello from build.sbt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Set current project to Hello "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in build file:/root/hello/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Total time: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" s, completed "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-4-18 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":04:29\n")])])]),a("p",[t._v("打包成 "),a("code",[t._v("jar")]),t._v(" 后，可以在以下路径找到目标 "),a("code",[t._v("jar")]),t._v(" 包的位置 "),a("code",[t._v("./target/scala-2.12/")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" jar\n./target/scala-2.12/hello_2.12-0.1.0-SNAPSHOT-sources.jar\n./target/scala-2.12/hello_2.12-0.1.0-SNAPSHOT-javadoc.jar\n./target/scala-2.12/hello_2.12-0.1.0-SNAPSHOT.jar\n")])])]),a("h3",{attrs:{id:"第三方库依赖管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方库依赖管理"}},[t._v("#")]),t._v(" 第三方库依赖管理")]),t._v(" "),a("p",[t._v("对于你需要的第三方库可以到 "),a("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://maven.apache.org/"),a("OutboundLink")],1),t._v(" 进行查找")]),t._v(" "),a("p",[t._v("如果选择 "),a("code",[t._v("sbt")]),t._v(" 作为依赖管理工具，如果需要引入第三方库，编辑 "),a("code",[t._v("build.sbt")]),t._v("，按以下格式添加依赖")]),t._v(" "),a("div",{staticClass:"language-sbt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("libraryDependencies += groupID % artifactID % revision\n")])])]),a("p",[t._v("如需要添加 "),a("code",[t._v("spark-streaming")]),t._v(" 的库")]),t._v(" "),a("div",{staticClass:"language-sbt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// https://mvnrepository.com/artifact/org.apache.spark/spark-streaming\nlibraryDependencies += "org.apache.spark" %% "spark-streaming" % "2.4.1" % "provided"\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);