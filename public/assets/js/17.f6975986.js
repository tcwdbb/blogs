(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{449:function(t,s,a){"use strict";a.r(s);var i=a(18),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"如何用命令将本地项目上传到git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何用命令将本地项目上传到git"}},[t._v("#")]),t._v(" 如何用命令将本地项目上传到git")]),t._v(" "),a("p",[t._v("1、（先进入项目文件夹）通过命令 git init 把这个目录变成git可以管理的仓库")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("2、把文件添加到版本库中，使用命令 git add\n.添加到暂存区里面去，不要忘记后面的小数点“.”，意为添加文件夹下的所有文件")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("3、用命令 git commit告诉Git，把文件提交到仓库。引号内为提交说明")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first commit'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("4、关联到远程库")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin 你的远程库地址\n  如：git remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/githubusername/demo.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("5、获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）")]),t._v(" "),a("ul",[a("li",[t._v("git pull --rebase origin master")])]),t._v(" "),a("p",[t._v("6、把本地库的内容推送到远程，使用 git push命令，实际上是把当前分支master推送到远程。执行此命令后会要求输入用户名、密码，验证通过后即开始上传。")]),t._v(" "),a("ul",[a("li",[t._v("git push -u origin master")])]),t._v(" "),a("p",[t._v("*、状态查询命令")]),t._v(" "),a("ul",[a("li",[t._v("git status")])]),t._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("ul",[a("li",[t._v("创建分支：git checkout -b 分支名")]),t._v(" "),a("li",[t._v("查看当前所处分支：git branch")]),t._v(" "),a("li",[t._v("查看当前文件状态：git status")]),t._v(" "),a("li",[t._v("将修改过的文件添加到暂存区：git add .")]),t._v(" "),a("li",[t._v("将修改后的文件保存到仓库中：git commit -m ‘描述’")]),t._v(" "),a("li",[t._v("将本地分支推送到云端：git push")]),t._v(" "),a("li",[t._v("切换分支：git checkout 分支名")]),t._v(" "),a("li",[t._v("切换到主分支：git checkout master")]),t._v(" "),a("li",[t._v("将分支合并到主分支：git merge 分支名")]),t._v(" "),a("li",[t._v("将本地创建的分支推送到云端保存：git push -u origin 分支名")])])])}),[],!1,null,null,null);s.default=e.exports}}]);