# github-workshop
GitHub勉強会で使用します

## 内容
### Step.1 リポジトリをフォークする
https://github.com/kanazawazawa/github-workshop  
GitHub `Fork` クリック

### Step.2 リポジトリをクローンする
GitHub `Code` クリック, `SSH` クリック, Copy  
ターミナルでクローンする
```bash
git clone git@github.com:yourname/github-workshop.git
```
```bash
cd github-workshop/
```
URL確認
```bash
git remote -v
```

### Step.3 ブランチを作成して切り替える
main, master, dev 等永続ブランチで直接作業しないようにする  
ブランチを作成してチェックアウト  
```bash
git checkout -b post-yourname
```
ターミナルのブランチ名が変更していることを確認する
```bash
git branch
```

### Step.4 変更を加えコミットする
`_posts` の中に、`YYYY-MM-DD-title.md` ファイルを作成します。  
例：2022-06-10-GitHub勉強会.md  
ステイタスを確認し、ステージングエリアに登録、コミットする。
```bash
git status
git add -A
git commit -m "post yourname"
git status
```

### Step.5 トピックブランチを リモートリポジトリにプッシュする
main ブランチとの diff を確認する
```bash
git diff main
```
ブランチをプッシュ！
```bash
git push origin YYYY-MM-DD-title.md
```

### Step.6 プルリクエストを作成する
GitHub `Compare & request` クリック  
Leave a comment
`Create pull request` クリック  


（参考）プルリクエストがマージされた後にプルして最新の状態にする  
```bash
git pull origin main
```

### Step.7 実践


## 参考情報

### Git Install 
https://git-scm.com/

- Checkout Windows-style, commit Unix-style line endings  
コミット時 CRLF→LF、ワークツリーに反映時 LF→CRLF  

- Checkout as-is, commit Unix-style line endings  
コミット時 CRLF→LF  

- Checkout as-is, commit as-is  
改行コードを変換しない  

- SSH
```bash
ssh-keygen -t ed25519 -C "youraccount@example.com"
```
Enter file in which to save the key  
`Enter` 

Enter passphrase  

key をコピーする
```bash
clip < /c/Users/yourname/.ssh/id_ed25519.pub
```

GitHub `Settings`, `SSH and GPG Keys`, `New SSH key`

- user.name, user.email
```bash
git config --global user.name yourname
```
```bash
git config --global user.email youraccount@example.com
```
```bash
git confit --list
```

### Visual Studio Code Install
https://code.visualstudio.com/

### Introduction GitHub 
https://github.com/skills/introduction-to-github/

### GitHub Pages
https://github.com/skills/github-pages/

### firstcontributions
https://github.com/firstcontributions/first-contributions/

## 練習場
https://kanazawazawa.github.io/github-workshop/

