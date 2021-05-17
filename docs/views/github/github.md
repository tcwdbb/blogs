---
title: 如何使用命令将本地项目上传到github
categories: 
- github
tags: 
- github
---

## 如何用命令将本地项目上传到git
 1、（先进入项目文件夹）通过命令 git init 把这个目录变成git可以管理的仓库

``` bash 
git init 
```

2、把文件添加到版本库中，使用命令 git add
.添加到暂存区里面去，不要忘记后面的小数点“.”，意为添加文件夹下的所有文件
``` bash 
git add .
```
 3、用命令 git commit告诉Git，把文件提交到仓库。引号内为提交说明
``` bash 
git commit -m 'first commit'
 ```

 4、关联到远程库
``` bash 
git remote add origin 你的远程库地址
  如：git remote add origin https://github.com/githubusername/demo.git
```
5、获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）

- git pull --rebase origin master

6、把本地库的内容推送到远程，使用 git push命令，实际上是把当前分支master推送到远程。执行此命令后会要求输入用户名、密码，验证通过后即开始上传。

- git push -u origin master

*、状态查询命令
- git status

### 常用命令
- 创建分支：git checkout -b 分支名
- 查看当前所处分支：git branch
- 查看当前文件状态：git status
- 将修改过的文件添加到暂存区：git add .
- 将修改后的文件保存到仓库中：git commit -m ‘描述’
- 将本地分支推送到云端：git push
- 切换分支：git checkout 分支名
- 切换到主分支：git checkout master
- 将分支合并到主分支：git merge 分支名
- 将本地创建的分支推送到云端保存：git push -u origin 分支名