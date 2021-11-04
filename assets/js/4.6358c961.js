(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{172:function(s,t,n){s.exports=n.p+"assets/img/github_action.71b0e150.png"},173:function(s,t,n){s.exports=n.p+"assets/img/github_actions_node_cli.6fc2aa51.png"},246:function(s,t,n){"use strict";n.r(t);var a=[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"使用github-actions自动化构建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用github-actions自动化构建项目"}},[this._v("#")]),this._v(" 使用Github Actions自动化构建项目")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{attrs:{src:n(172),alt:"github action"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[this._v("#")]),this._v(" 准备工作")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone git@github.com:lexmin0412/github_action_test.git\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"创建action文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建action文件"}},[this._v("#")]),this._v(" 创建action文件")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .github\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .github\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" workflows\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" workflows\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" nodejs.yml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在 "),t("code",[this._v("nodejs.yml")]),this._v(" 中添加如下内容")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("name: 构建博客\non:\n  push:\n    branches:\n      - dev\n\njobs:\n  main:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout\n      uses: actions/checkout@v2\n      with:\n        persist-credentials: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# react项目为npm run-script build，vue项目改为npm run build")]),s._v("\n    - name: Install and Build\n      run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# react项目的FOLDER为build，vue项目改为dist")]),s._v("\n    - name: Deploy\n      uses: JamesIves/github-pages-deploy-action@releases/v3\n      with:\n        ACCESS_TOKEN: "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.ACCESS_TOKEN }")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        BRANCH: gh-pages\n        FOLDER: docs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"触发构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#触发构建"}},[this._v("#")]),this._v(" 触发构建")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{attrs:{src:n(173),alt:"Github Actions构建示例"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],e=n(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),n("p",[s._v("当你想要在线上查看你的项目效果时，github actions 可以帮到你。")]),s._v(" "),n("p",[s._v("是的，就是它 ⬇️")]),s._v(" "),s._m(1),s._v(" "),n("p",[s._v("废话不多说，我们现在就用它来创建一个属于自己的博客。")]),s._v(" "),s._m(2),s._v(" "),n("p",[s._v("创建并克隆 Repo 这个不多说")]),s._v(" "),s._m(3),s._m(4),s._v(" "),n("p",[s._v("在项目根目录下按照如下的路径创建待执行的YAML文件")]),s._v(" "),s._m(5),s._m(6),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),n("p",[s._v("此时点开Repo的Actions选项卡就可以看到如下的构建过程：")]),s._v(" "),s._m(10),s._v(" "),n("p",[s._v("可以看到我们在nodejs.yml中的定义的push事件被触发，执行了jobs中的所有步骤，打包并推送到了Repo的gh-pages分支。")]),s._v(" "),n("p",[s._v("当complete job选项完成的时候，访问 "),n("a",{attrs:{href:"https://lexmin0412.github.io/github_actions_test",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://lexmin0412.github.io/github_actions_test"),n("OutboundLink")],1),s._v(" 就可以看到自动构建完成的应用了。")]),s._v(" "),s._m(11),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://help.github.com/cn/articles/configuring-a-workflow",target:"_blank",rel:"noopener noreferrer"}},[s._v("github action"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://help.github.com/cn/articles/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub 操作的工作流程语法"),n("OutboundLink")],1)])])])}),a,!1,null,null,null);t.default=r.exports}}]);