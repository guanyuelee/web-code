# Git Reminder

```bash
git init 
git status -s

git add file
git add . 

git commit -m "messaage"

git reset HEAD file.index  # remove track. 

git rm -f file
git rm --cached file

git log --pretty=oneline
git reset --hard <id>
git reflog --pretty=oneline

git remote add origin https://github.com/guanyuelee/web-code.git
git branch -M main
git push -u origin main
# git pull origin main --allow-unrelated-histories

# git flashback
git checkout -- file.md

# branch related. 

git branch
git branch -M main # rename the branch

git branch new-branch
git checkout new-branch

git branch main
git merge new-branch

git branch -d reg
git checkout register

# git push branch
git push -u origin payment:pay
git push -u origin payment

git remote show origin

git checkout -b payment origin/pay
git push origin --delete pay
```
