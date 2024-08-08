
# ToDoアプリ 設計書
## 1. 概要
このToDoアプリケーションは、ユーザーがタスクを管理するためのシンプルなアプリです。フロントエンドにはRemixを使用し、バックエンドにはSpring Bootを使用します。ビルドツールとしてBunを用いて、パッケージ管理とビルドの効率化を図ります。

## 2. 技術スタック
- フロントエンド: Remix
- バックエンド: Spring Boot
- ビルドツール: Bun
- テスト: Jest, JUnit
- DB: MySQL
- インフラ: AWS
## 3. フロントエンド設計
### 3.1. ディレクトリ構成
```
/src
  /components
    - TaskList.tsx
    - TaskItem.tsx
    - TaskForm.tsx
  /routes
    - index.tsx
    - tasks.tsx
  /styles
    - global.css
  /utils
    - api.ts
  /app
    - root.tsx
```
### 3.2. 主要コンポーネント
- TaskList: タスクリストを表示するコンポーネント。
- TaskItem: 各タスクを表示するコンポーネント。
- TaskForm: 新しいタスクを追加するためのフォーム。
### 3.3. ルーティング
- /: ホームページ、タスクリストの表示。
- /tasks: タスクの詳細表示と編集。
### 3.4. スタイリング
- グローバルなスタイルをglobal.cssで管理。
- コンポーネントごとにローカルスタイルも可能。
## 4. バックエンド設計
### 4.1. ディレクトリ構成
```
/src
  /main
    /java
      /com
        /example
          /todoapp
            /controller
              - TaskController.java
            /model
              - Task.java
            /repository
              - TaskRepository.java
            /service
              - TaskService.java
            /TodoAppApplication.java
  /resources
    - application.properties
    - schema.sql
```
### 4.2. エンドポイント
- GET /tasks: タスクリストを取得。
- POST /tasks: 新しいタスクを追加。
- GET /tasks/{id}: 特定のタスクを取得。
- PUT /tasks/{id}: タスクを更新。
- DELETE /tasks/{id}: タスクを削除。
### 4.3. モデル
- Task:
  - id: タスクID (Long)
  - title: タスクのタイトル (String)
  - description: タスクの説明 (String)
  - completed: タスクの完了状態 (Boolean)
  - createdAt: 作成日時 (LocalDateTime)
  - updatedAt: 更新日時 (LocalDateTime)
### 4.4. リポジトリ
TaskRepository: JPAリポジトリを使用してタスクデータのCRUD操作を行います。
### 4.5. サービス
TaskService: ビジネスロジックを含むサービスクラス。タスクの作成、更新、削除などを処理します。
### 4.6. コントローラー
TaskController: HTTPリクエストを処理し、サービスと連携してレスポンスを返します。
## 5. ビルドとデプロイ
### 5.1. Bunの設定
- bun install: 依存関係をインストール。
- bun build: プロジェクトをビルド。
- bun dev: 開発サーバーを起動。
### 5.2. Spring Bootの設定
- application.properties: データベース接続やサーバー設定などを記述。
- schema.sql: データベーススキーマの初期化。
### 5.3. デプロイ
- フロントエンド: ビルド後の静的ファイルをホスティングサービス（例: Vercel, Netlify）にデプロイ。
- バックエンド: Spring Bootアプリケーションをクラウドサービス（例: Heroku, AWS）にデプロイ。
## 6. データベース設計
### 6.1. テーブル定義
- tasks
  - id (BIGINT, 主キー, 自動生成)
  - title (VARCHAR, 非NULL)
  - description (TEXT, NULL許可)
  - completed (BOOLEAN, デフォルト: false)
  - created_at (TIMESTAMP, 非NULL)
  - updated_at (TIMESTAMP, 非NULL)
## 7. セキュリティ
- 認証: JWTやOAuth2を使用してユーザー認証を行う。
- 入力検証: フロントエンドおよびバックエンドで入力検証を行い、セキュリティリスクを軽減。
## 8. テスト
### 8.1. フロントエンド
- ユニットテスト: JestやReact Testing Libraryを使用してコンポーネントのテストを実施。
8.2. バックエンド
- ユニットテスト: JUnitを使用してサービス層のテストを実施。
- 統合テスト: Spring Bootのテスト機能を使用して全体の統合テストを実施。
## 9. ドキュメント
- APIドキュメント: SwaggerやOpenAPIを使用してAPI仕様書を作成。
- ユーザーマニュアル: アプリケーションの使用方法やよくある質問を含むドキュメントを用意。
