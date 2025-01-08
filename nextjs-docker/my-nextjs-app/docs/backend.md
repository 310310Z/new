# バックエンド要件

## 使用技術
- **バックエンドサービス**: Supabase
  - データベース（PostgreSQL）、認証、ストレージ機能を利用。
- **サーバー**: Node.js（Express.js）
  - APIサーバーとして、フロントエンドと連携。
- **データベース**: PostgreSQL
  - 日記データ、ユーザーデータを保存。

---

## APIエンドポイント
### 1. ユーザログイン API
- **エンドポイント**: `/api/diaries`
- **メソッド**: `POST`
- **リクエストボディ**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **レスポンス例**:
```json
{
  "message": "Login successful",
  "token": "jwt_token",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```


### 2. 日記作成 API
- **エンドポイント**: `/api/diaries`
- **メソッド**: `POST`
- **リクエストボディ**:
```json
  {
    "title": "日記のタイトル",
    "content": "日記の本文",
    "image_url": "画像のURL"
  }
```
- **レスポンス例**:
```json
  {
  "id": 1,
  "title": "日記のタイトル",
  "content": "日記の本文",
  "image_url": "画像のURL",
  "created_at": "2025-01-05T12:00:00Z"
}
```
## フロー図
### ログイン API フロー図
```mermaid
flowchart TD
    A[ユーザーがログイン画面でメールとパスワードを入力] --> B[POSTリクエストを/api/auth/loginに送信]
    B --> C[サーバー（Node.js/Express）で認証処理を実行]
    C --> D[Supabaseでユーザー認証]
    D --> E{認証結果}
    E -->|成功| F[JWTトークンを生成しレスポンス]
    E -->|失敗| G[エラーメッセージを返す]
    F --> H[フロントエンドにトークンとユーザーデータを通知]
    H --> I[ユーザーをダッシュボードへリダイレクト]
```
### 日記作成 API フロー図
```mermaid
flowchart TD
    A[ユーザーが日記作成画面で入力] --> B[POSTリクエストを/api/diariesに送信]
    B --> C[サーバー（Node.js/Express）でリクエストを受け取る]
    C --> D[データのバリデーション]
    D --> E{バリデーション結果}
    E -->|成功| F[Supabaseにデータを保存]
    E -->|失敗| G[エラーメッセージを返す]
    F --> H[日記データを保存し、レスポンスを返す]
    H --> I[フロントエンドに日記保存結果を通知]
    I --> J[ユーザーに成功メッセージを表示]
```
