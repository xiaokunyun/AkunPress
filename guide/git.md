# git提交流程
#### 在命令行上创建一个新的存储库
echo "# testss" >> README.md 
git init 
git add README.md
 git commit -m "first commit"
 git branch -M 'master' 
git remote add origin https://github.com/xiaokunyun/testss.git
git push -u origin 'master'
# 从命令行推送现有存储库
git remote add origin https://github.com/xiaokunyun/testss.git  
git branch -M 'master'  
git push -u origin 'master'