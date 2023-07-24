---
# 当前页面内容标题
title: Git
# 当前页面图标
icon: git
# 分类
category:
- Git
# 标签
tag:
- Git
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: true
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---
# SVN

- SVN（Subversion），集中式版本控制系统，CVS（Concurrent Versions System）的替代产物
- 下载仓库资源 checkout、修改/提交 commit 仓库资源、同步 update 仓库资源

# Git

- 分布式版本控制系统
- [Reference Manual(opens new window)](https://git-scm.com/docs)
- [Pro Git book(opens new window)](https://git-scm.com/book/zh/v2)
- [Git Cheatsheet(opens new window)](https://ndpsoftware.com/git-cheatsheet.html)

## Git 常用命令

![Git基本操作](https://cdn.jsdelivr.net/gh/xiaou61/pictures/Git%25E5%259F%25BA%25E6%259C%25AC%25E6%2593%258D%25E4%25BD%259C.5b8f3da1.png)

- Workspace：工作区
- Index / Stage：暂存区
- Repository：仓库区（或本地仓库）
- Remote：远程仓库

### 用户配置

- git config --global user.name "Your Name"：全局配置用户名
- git config --global user.email "email@example.com"：全局配置邮箱
- git config --global alias.plm 'pull origin master'：设置别名
- git config --global core.editor notepad：设置默认编辑器
- 配置级别
    1. --local：默认，高优先级，只影响本仓库，保存目录 .git/config
    2. --global：中优先级，影响到所有当前用户的git仓库，保存目录 ~/.gitconfig
    3. -- system：低优先级，影响到全系统的git仓库，保存目录 /etc/gitconfig

### 基本操作

- git init：在当前目录下初始化仓库（--bare，纯版本库，没有工作目录）
- git add readme.txt：把文件添加到暂存区（同时文件被跟踪）
- git commit -m "wrote a readme file"：提交到本地仓库
- git commit --amend -m "new commit message"：将暂存区中的文件提交以修改最后一次提交的内容，或修改最后一次提交的提交说明
- git log --pretty=oneline：查看提交日志
- git reflog：查看提交日志（包括已经撤销的提交，即 HEAD 移动的记录）
- git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue){%an}%Creset' --abbrev-commit --date=relative
- git status：查看当前版本库的状态
- git diff readme.txt：查看差异
- git checkout -- readme.txt：撤销 readme.txt 文件在工作区的全部修改（对比暂存区或版本库）
- git reset --soft {commit id}：移动 HEAD 到指定提交
- git reset --mixed {commit id}：移动 HEAD 到指定提交，并重置索引
- git reset --hard HEAD^：回退到上一个版本
- git reset --hard {commit id}：回退到指定版本
- git revert HEAD：撤销最近一次提交
- git revert HEAD~1：撤销上上次的提交，注意：数字从 0 开始
- git revert -m 1 HEAD：如果要回滚的提交是 merge 后得到（父节点有 2 个），可以通过 **-m 1** 指定需要被**保留**下来的父节点（-m 选项接收的参数是一个数字，数字取值为 1 和 2）（Often this will be parent number one, for example if you were on master and did git merge unwanted and then decided to revert the merge of unwanted. The **first** parent would be your pre-merge master branch and the second parent would be the tip of unwanted.）
- git revert {commit id}：撤销指定的提交，撤销也会作为一次提交进行保存
- git revert 是用一次新的提交来回滚之前的提交，git reset 是直接删除指定的提交
- git rm --cached **/*.log：已经 push 过的文件，想从 git 远程库中删除，并在以后的提交中忽略，但在本地保留该文件
- git update-index --assume-unchanged config/config.xml：已经 push 过的文件，想在以后的提交时忽略此文件，即使本地已经修改过，且不删除 git 远程库中相应文件

![git-status](https://sdky.gitee.io/assets/img/git-status.c4bbf650.png)

- 三棵树

    1. HEAD：当前分支引用的指针，总是指向该分支上的最后一次提交，这表示 HEAD 将是下一次提交的父结点
    2. 暂存区（Index）：预期的下一次提交（暂存区）的快照
    3. 工作目录：相当于沙盒，在将修改提交到暂存区并记录到历史之前，可以随意更改



### 分支操作

- git branch：查看本地分支列表

- git branch -r：查看远程分支列表

- git branch {branch}：创建分支

- git branch -d {branch}：删除分支

- git branch -D {branch}：强制删除分支

- git branch -u origin/{branch}：设置本地分支跟踪的远程分支（上游分支）或 git branch --set-upstream-to origin/{branch}

- git branch --unset-upstream：取消跟踪远程分支（上游分支）

- git checkout {branch}：切换分支（切换分支前要先提交改动或使用 git stash 保存当前的操作）

- git checkout -b {branch} -t origin/{branch}：创建 + 切换分支，（-t 设置跟踪的远程分支，可省略）

- git merge {branch}：合并某分支的所有变更**到当前**分支

- git merge --squash {branch}：合并某分支的所有变更到当前分支，但**不提交、不移动 HEAD**

- git merge-base {branch1} {branch2}：在两次提交之间找出最佳的公共祖先，用于三向合并

- git cherry-pick {commit id}, {commit id}：获得在某个提交中引入的变更，然后尝试将作为一个新的提交引入到**当前分支上**

- git rebase -i [startpoint] [endpoint] --onto [branchName]：交互式变基，对提交进行分割、合并或者重排序，[startpoint] [endpoint] 指定了一个编辑区间，如果不指定 [endpoint]，则该区间的终点默认是当前分支 HEAD 所指向的 commit（注：该区间指定的是一个

  前开后闭

  的区间），--onto 指定基底分支。在正在 rebase 的每个提交上可以执行以下动作：

    - pick：保留该提交（缩写：p）
    - reword：保留该提交，但修改该提交的注释（缩写：r）
    - edit：保留该提交，但停下来修改该提交（不仅仅修改注释）（缩写：e）
    - squash：将该提交和前一个提交合并（缩写：s）
    - fixup：将该提交和前一个提交合并，但不要保留该提交的注释信息（缩写：f）
    - exec：执行 shell 命令（缩写：x）
    - drop：丢弃该提交（缩写：d）

### 存储操作

- git stash save some_msg：保存当前分支所有没有提交的操作
- git stash list：查看保存的操作
- git stash pop stash@{num}：恢复某一操作，并把这条 stash 记录删除
- git stash clear：清空保存的所有操作

### 标签

- git tag：列出已有的标签
- git tag v1.0：基于最新提交创建标签
- git tag -a v1.2 9fceb02：对指定的提交创建标签
- git checkout v1.0：切换到某个 tag

### 工作区

- git worktree add {path} -b {new-branch} origin/{branch}
- git worktree list
- git worktree remove [-f] {worktree}
- git worktree prune

### 远程操作

1. 创建 SSH Key：`ssh-keygen -t rsa -C "youremail@example.com"`
2. 在 GitLab 上添加的 SSH Key
3. 添加远程仓库并命名为 origin：`git remote add origin git@192.168.113.47:sdky/learngit.git`（可添加多个），或者克隆远程仓库作为本地仓库：`git clone git@192.168.113.47:sdky/learngit.git learngit`
4. 查看远程仓库：`git remote -v`
5. 获取远程仓库的提交历史：`git fetch origin`
6. 把远程仓库最新的内容更新到本地仓库：`git pull origin master`（git pull = git fetch + git merge）
7. 把本地仓库的 master 分支内容推送到远程仓库 origin 的 master 分支：
   `git push origin master`
   `git push -u origin master`（**-u 关联两个分支**）
   `git push -f origin master`（-f 强制推送）
   `git push origin master:master`

} push.default 在 Git 2.0 版本后的默认值为 simple，即：在中央仓库工作流程模式下，拒绝推送到上游与本地分支名字不同的分支，也就是只有本地分支名和上游分支名字一致才可以推送，且只会推送本地当前分支

![Git常用命令](https://sdky.gitee.io/assets/img/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.f85b51f4.png)

## 帮助命令

```sh
$ git help
使用：git [--version] [--help] [-C {path}] [-c {name}={value}]
           [--exec-path[={path}]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir={path}] [--work-tree={path}] [--namespace={name}]
           {command} [{args}]

这些是在各种情况下使用的通用Git命令：

start a working area (参见命令: git help tutorial)
   clone      将存储库克隆到新目录中
   init       创建一个空的Git存储库或重新初始化一个现有的存储库

work on the current change (参见命令: git help everyday)
   add        将文件内容添加到索引中
   mv         移动或重命名文件、目录或符号链接
   reset      将当前磁头重置为指定状态
   rm         从工作树和索引中删除文件

examine the history and state (参见命令: git help revisions)
   bisect     使用二分查找查找引入错误的提交
   grep       打印与模式匹配的行
   log        显示提交日志
   show       显示各种类型的对象
   status     显示工作树状态

grow, mark and tweak your common history
   branch     列出、创建或删除分支
   checkout   切换分支或还原工作树文件
   commit     记录对存储库的更改
   diff       显示提交、提交和工作树等之间的更改
   merge      将两个或多个开发历史连接在一起
   rebase     在另一个基本提示之上重新应用提交
   tag        创建、列表、删除或验证用GPG签名的标记对象

collaborate (参见命令: git help workflows)
   fetch      从另一个存储库下载对象和引用
   pull       从另一个存储库或本地分支获取并与之集成
   push       更新远程引用和相关对象

'git help -a' 和 'git help -g' 列出可用的子命令和一些概念指导。
命令'git help {command}' 或 'git help {concept}' 查看特定子命令或概念.
```
## 开发方式

- 分支开发，主干发布：需要开发一个新功能或者修复一个 Bug 时，从主干拉一个分支进行开发，开发完成且测试通过后，合并回主干，然后从主干进行发布

![分支模型](https://cdn.jsdelivr.net/gh/xiaou61/pictures/%25E5%2588%2586%25E6%2594%25AF%25E6%25A8%25A1%25E5%259E%258B.921c4829.png)

} Merge or pull requests are created in a git management application and ask an assigned person to merge two branches. Tools such as GitHub and Bitbucket choose the name pull request since the first manual action would be to pull the feature branch. Tools such as GitLab and Gitorious choose the name merge request since that is the final action that is requested of the assignee. In this article we'll refer to them as merge requests.

- Pull Request ![fork 工作流](https://cdn.jsdelivr.net/gh/xiaou61/pictures/fork%25E5%25B7%25A5%25E4%25BD%259C%25E6%25B5%2581.7b4e8f89.png)
- Merge Request ![merge 工作流](https://cdn.jsdelivr.net/gh/xiaou61/pictures/merge%25E5%25B7%25A5%25E4%25BD%259C%25E6%25B5%2581.1e3d74fd.png)

### Git 常用工作流

![Git常用工作流](https://sdky.gitee.io/assets/img/Git%E5%B8%B8%E7%94%A8%E5%B7%A5%E4%BD%9C%E6%B5%81.f6ccd0b3.png)

### GitHub 使用规范流程

![Git使用规范流程](https://sdky.gitee.io/assets/img/Git%E4%BD%BF%E7%94%A8%E8%A7%84%E8%8C%83%E6%B5%81%E7%A8%8B.34d08d6b.png)

1. 从主干仓库 GitHub fork 一个项目到自己的 GitHub 仓库
2. 从自己的 GitHub 仓库 clone 项目到本地仓库自己的分支上
3. 编写新功能后 git commit 提交到本地仓库
4. 当远程仓库更新代码后，pull 远程仓库的代码，再通过 rebase 合并到本地分支上
5. 把本地仓库的代码 push 到自己的 GitHub 仓库，最后再 pull request 到主干仓库

## Git commit 规范

commit message 格式：`{type}({scope}): {subject}`，如 `fix(DAO): 用户查询缺少 username 属性`，`feat(Controller): 用户查询接口开发`

- type（必须）：用于说明 git commit 的类别，只允许使用下面的标识
    - feat：新增功能（feature）
    - fix/to：修复 bug，可以是 QA 发现的 BUG，也可以是研发自己发现的 BUG
    - fix：产生 diff 并自动修复此问题，适合于一次提交直接修复问题
    - to：只产生 diff 不自动修复此问题，适合于多次提交，最终修复问题提交时使用 fix
    - docs：仅仅修改了文档，比如 README、CHANGELOG、CONTRIBUTE 等等
    - style：仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
    - refactor：代码重构，没有加新功能或者修复 Bug
    - perf：优化相关，比如提升性能、体验
    - test：增加测试用例，包括单元测试、集成测试等
    - chore：改变构建流程，或者增加依赖库、工具等
    - revert：回滚到上一个版本
    - merge：代码合并
    - sync：同步主线或分支的 bug
- scope（可选）：用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同
    - 例如在 Angular，可以是 location、browser、compile、compile、rootScope、ngHref、ngClick、ngView 等
    - 如果修改影响了不止一个 scope，可以使用 * 代替
- subject（必须）：subject 是 commit 目的的简短描述，不超过 50 个字符；建议使用中文，结尾不加句号或其他标点符号

## 自定义 Git

- 忽略特殊文件：`.gitignore` 文件，在线浏览：https://github.com/github/gitignore

```text
# 排除所有.开头的隐藏文件:
.*
# 排除所有.class文件:
*.class

# 不排除.gitignore和App.class:
!.gitignore
!App.class
```
