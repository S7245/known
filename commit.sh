#!/usr/bin/env sh

git pull
git add -A
git commit -m '更新内容'
# git push -u origin master
git push -f git@github.com:samlau0401/known.git master
# chmod 777 /commit.sh  #使脚本具有执行权限