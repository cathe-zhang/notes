(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{235:function(s,e,t){"use strict";t.r(e);var a=t(0),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"ssh-多配置共存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-多配置共存","aria-hidden":"true"}},[s._v("#")]),s._v(" ssh 多配置共存")]),s._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("在我们的工作或学习中，经常会存在需要从多个 git 平台去拉取代码的情况，如我们在工作中使用 gitlab 来进行代码管理，而业务时间会使用 github 来存放自己的一些开源仓库或 demo, 或者为了稳定性考虑，会将 github 仓库中的代码放到 gitee 中进行备份，这些都是很常见的场景，而这就常常导致了一个问题：当我们将本机的 ssh-key 配置成 github 之后，一上班发现 gitlab 的代码拉不下来了，所以我们需要使多个 ssh-key 能做到共存，这样能减少很多重复性的工作。")]),s._v(" "),t("h2",{attrs:{id:"什么是-ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ssh-key","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是 SSH Key?")]),s._v(" "),t("p",[s._v("首先，我们需要弄懂什么是 SSH。")]),s._v(" "),t("p",[s._v("简单来说，它就是一个安全协议，在类 Unix 系统上使用较为广泛，它使用 SSH Key 来进行校验。在我们使用 ssh 协议进行连接，如通过 "),t("code",[s._v("git@site_name.com:group/project_name.git")]),s._v(" 的方式来进行 git 仓库的克隆时，需要先在本地生成一个 ssh-key, 然后将它的内容复制，配置到对应的 git 平台，如 github/gitlab，然后我们才能拥有拉取/提交代码的权限。")]),s._v(" "),t("h2",{attrs:{id:"如何生成-ssh-key？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何生成-ssh-key？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何生成 SSH Key？")]),s._v(" "),t("h3",{attrs:{id:"_1-在终端输入以下命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-在终端输入以下命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 在终端输入以下命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" key-gen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@xxx.com"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# your_email@xxx.com 是你在对应的平台注册的邮箱")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"ssh-key的匹配规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-key的匹配规则","aria-hidden":"true"}},[s._v("#")]),s._v(" ssh key的匹配规则")]),s._v(" "),t("p",[s._v("要配置多个 git 站点的 ssh key, 我们先需要知道它的匹配规则是什么。")]),s._v(" "),t("h2",{attrs:{id:"如何配置多个站点的-ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何配置多个站点的-ssh-key","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何配置多个站点的 ssh key?")]),s._v(" "),t("p",[s._v("配置 gitee 的 ssh key：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxx@company.com'")]),s._v(" -f ~/.ssh/gitee_id_rsa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("配置 github 的 ssh key：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxx@self.com'")]),s._v(" -f ~/.ssh/github_id_rsa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("会发现两个命令的不同除了账号邮箱本身不同之外，还有一点就是在 -f 标识后面指定了 ssh key file 的文件名，在 ~/.ssh/ 目录下，第一个会生成 "),t("code",[s._v("gitee_id_rsa")]),s._v(" 和 "),t("code",[s._v("gitee_id_rsa.pub")]),s._v(" 的文件，第二个会生成名为 "),t("code",[s._v("github_id_rsa")]),s._v(" 和 "),t("code",[s._v("github_id_rsa.pub")]),s._v(" 的文件，其中有 "),t("code",[s._v(".pub")]),s._v(" 后缀的文件存放的就是 ssh key的内容，它用于远端配置，而没有 .pub 后缀的文件，就是用来在连接时进行校验的。")]),s._v(" "),t("p",[s._v("目前为止，我们已经在 "),t("code",[s._v("~/.ssh/")]),s._v(" 目录下生成了 gitlab 和 github 两个站点的文件，但是由于这个文件名是我们自定义的，我们需要添加一个配置，让远端知道读取哪个文件。这时就轮到 "),t("code",[s._v("config")]),s._v(" 文件大展身手了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github")]),s._v("\nHost github.com\n    HostName github.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/id_rsa.github\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitee")]),s._v("\nHost gitee.com\n    HostName gitee.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/gitee_id_rsa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("ssh 配置构成：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("配置项")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("示例")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Host")]),s._v(" "),t("td",[s._v("站点标题")]),s._v(" "),t("td",[s._v("github")])]),s._v(" "),t("tr",[t("td",[s._v("HostName")]),s._v(" "),t("td",[s._v("站点 hostname")]),s._v(" "),t("td",[s._v("github.com")])]),s._v(" "),t("tr",[t("td",[s._v("PreferredAuthentications")]),s._v(" "),t("td",[s._v("定义客户端鉴权方式的先后顺序")]),s._v(" "),t("td",[t("code",[s._v("publickey,password")]),s._v(" 表示先读取publickey, 再使用密码校验")])]),s._v(" "),t("tr",[t("td",[s._v("IdentityFile")]),s._v(" "),t("td",[s._v("校验文件在本机上的绝对路径")]),s._v(" "),t("td",[t("code",[s._v("~/.ssh/gitee_id_rsa")])])])])]),s._v(" "),t("p",[s._v("ssh 默认会先读取 "),t("code",[s._v("~/.ssh/config")]),s._v(" 文件来读取用户配置，顺序是从上而下依次读取，如按照上面的配置，在使用 ssh 连接 gitee 时，会先读取第一条配置，发现 "),t("code",[s._v("HostName")]),s._v(" 不匹配，则跳过此条配置，读取下一条，发现 HostName 与当前站点 "),t("code",[s._v("gitee.com")]),s._v(" 匹配，则会应用这一条配置，那么在进行 ssh-key 校验时，读取的文件就是配置中指定的 "),t("code",[s._v("~/.ssh/gitee_id_rsa")]),s._v(" 文件了。")])])}],!1,null,null,null);e.default=i.exports}}]);