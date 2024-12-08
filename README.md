# new
## 環境構築手順  
### 必要なツール
Node.js
npm
Docker
### 手順
Node.jsを公式サイトからダウンロードし  
```node -v```  でインストールを確認、下記を実行する  

```
mkdir （プロジェクト名）  
cd（プロジェクト名）  
npx create-next-app@latest . 　
```
※セットアップ時の質問はデフォルト選択  
### Supabase  
Supabase公式サイトでログイン  
SettingタブからAPIタブへ移動し projectURL, anon keyを取得
プロジェクトディレクトリに.envを作成し環境変数を設定、下記を記入
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```  
次に開発サーバーを起動するため下記を実行しブラウザで http://localhost:3000 を開いて動作を確認
```
npm run dev
```
Dockerのインストールを前提とし、Supabase公式リポジトリをクローン
```
git clone https://github.com/supabase/supabase.git
cd supabase/docker
```  
Docker ComposeでSupabaseを起動
```
docker compose up
```
.envを編集してローカルSupabaseを使用するよう変更
```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=local-anon-key
```
