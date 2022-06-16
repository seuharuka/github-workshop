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
git clone git@github.com:kanazawazawa/github-workshop.git
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
git checkout -b update-README.md
```
ターミナルのブランチ名が変更していることを確認する
```bash
git branch
```

### Step.4 変更を加えコミットする
ファイルを追加する、ファイルを変更する等変更を加える。  
ステイタスを確認し、ステージングエリアに登録、コミットする。
```bash
git status
git add README.md
git commit -m "update README.md"
```

### Step.5 トピックブランチを リモートリポジトリにプッシュする
main ブランチとの diff を確認する
```bash
git diff main
```
ブランチをプッシュ！
```bash
git push origin update-README.md
```

### Step.6 プルリクエストを作成する
GitHub `Compare & request` クリック

## 参考情報

### Git Install 
https://git-scm.com/

Checkout Windows-style, commit Unix-style line endings  
コミット時 CRLF→LF、ワークツリーに反映時 LF→CRLF  

Checkout as-is, commit Unix-style line endings  
コミット時 CRLF→LF  

Checkout as-is, commit as-is  
改行コードを変換しない  

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

`_posts` の中に、`YYYY-MM-DD-title.md` ファイルを作成します。
例：2022-06-10-GitHub勉強会.md
