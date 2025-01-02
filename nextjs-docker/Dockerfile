FROM node:18-alpine

# アプリケーションディレクトリを作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY my-nextjs-app/package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションの残りのファイルをコピー
COPY my-nextjs-app/ .

# アプリケーションをビルド
RUN npm run build

# ポート 3000 を開放
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
