(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{1220:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"本文为一整套安装流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文为一整套安装流程"}},[t._v("#")]),t._v(" 本文为一整套安装流程")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mv kubernetes/server/bin/kube{adm,ctl,let} /usr/bin/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls /usr/bin/kube*")]),t._v("\n/usr/bin/kubeadm  /usr/bin/kubectl  /usr/bin/kubelet\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubeadm version")]),t._v("\nkubeadm version: "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("version.Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Major:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(", Minor:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),t._v(", GitVersion:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1.11.3"')]),t._v(", GitCommit:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a4529464e4629c21224b3d52edfe0ea91b072862"')]),t._v(", GitTreeState:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean"')]),t._v(", BuildDate:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-09-09T17:59:42Z"')]),t._v(", GoVersion:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go1.10.3"')]),t._v(", Compiler:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gc"')]),t._v(", Platform:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"linux/amd64"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubectl version --client")]),t._v("\nClient Version: version.Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Major:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(", Minor:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),t._v(", GitVersion:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1.11.3"')]),t._v(", GitCommit:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a4529464e4629c21224b3d52edfe0ea91b072862"')]),t._v(", GitTreeState:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean"')]),t._v(", BuildDate:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-09-09T18:02:47Z"')]),t._v(", GoVersion:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go1.10.3"')]),t._v(", Compiler:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gc"')]),t._v(", Platform:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"linux/amd64"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubelet --version")]),t._v("\nKubernetes v1.11.3\n")])])]),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat <<'EOF' > /etc/systemd/system/kubelet.service")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kubelet: The Kubernetes Agent\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://kubernetes.io/docs/\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/kubelet\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("StartLimitInterval")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RestartSec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\nEOF\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir -p /etc/systemd/system/kubelet.service.d")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat <<'EOF' > /etc/systemd/system/kubelet.service.d/kubeadm.conf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-/var/lib/kubelet/kubeadm-flags.env\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-/etc/default/kubelet\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/kubelet "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$KUBELET_KUBECONFIG_ARGS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$KUBELET_CONFIG_ARGS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$KUBELET_KUBEADM_ARGS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$KUBELET_EXTRA_ARGS")]),t._v("\nEOF\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@master tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl enable kubelet")]),t._v("\nCreated symlink from /etc/systemd/system/multi-user.target.wants/kubelet.service to /etc/systemd/system/kubelet.service.\n")])])]),a("p",[t._v("在这里我们添加了 kubelet 的 systemd 配置，然后添加了它的 Drop-in 文件，我们增加的这个 kubeadm.conf 文件，会被 systemd 自动解析，用于复写 kubelet 的基础 systemd 配置，可以看到我们增加了一系列的配置参数。在第 17 章中，我们会对 kubelet 做详细剖析，到时再进行解释。")])])}),[],!1,null,null,null);s.default=n.exports}}]);