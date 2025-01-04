# Next.js 14 CMS 　 Newt EC Site

## 概要説明

この EC サイトでは、Clerk を利用した認証機能や Firebase による注文管理、NewtCMS を使った商品管理やメッセージ管理など実装しています。特に、状態管理には Zustand を採用し、カート機能やモーダルの操作を効率化することでユーザーがストレスなく操作できるよう工夫しました。スタイルには Tailwind CSS を使用し、Shadcn/UI の UI コンポーネントを活用しています。

- [デモサイト](https://next-newt-ec-site.vercel.app/)

## EC サイト 制作前の流れ

1. Figma で ER 図とサイトマップを作成

- [Figma](https://www.figma.com/board/d2IByXLh9CprBUUNSJqWO3/%E7%84%A1%E9%A1%8C?node-id=1-591&t=HDTq8071YdY6wlEm-1)

2. canva で簡単なデザインを作成

- [canva テストサイト](https://nextectest.my.canva.site/) `テスト用`

## プロジェクトのディレクトリ構造

簡単なディレクトリ構造です。

```
my-app
├── src
│   ├── actions         # データ取得や保存
│   ├── app
│   │   ├── (auth)      # 認証関連のルート
│   │   ├── (routes)    # 主なアプリケーションルート
│   │   ├── layout.tsx  # 全体レイアウト
│   │   ├── page.tsx    # ホームページ
│   │   └── globals.css
│   ├── components      # 再利用可能なコンポーネント
│   ├── lib             # 外部サービスやユーティリティ
│   ├── hooks           # カスタムフック
│   └── types           # 型定義
├── public
├── package.json
├── tsconfig.json
└── README.md
```

### 主な使用パッケージ一覧

| パッケージ名      | バージョン | 用途                                     |
| ----------------- | ---------- | ---------------------------------------- |
| `next`            | 14.2.4     | React ベースのフレームワーク             |
| `react`           | 18.3.1     | ユーザインターフェースの構築             |
| `firebase`        | ^11.0.1    | データベース・認証処理などのバックエンド |
| `@clerk/nextjs`   | ^5.7.1     | 認証管理                                 |
| `zustand`         | 5.0.0-rc.2 | 状態管理                                 |
| `react-hook-form` | ^7.52.1    | フォームバリデーション                   |
| `tailwindcss`     | ^3.4.1     | CSS ユーティリティ                       |
| `zod`             | ^3.23.8    | スキーマバリデーション                   |
| `react-hot-toast` | ^2.4.1     | 通知表示                                 |
| `newt-client-js`  | ^3.3.3     | NewtCMS との連携                         |
| `vitest`          | ^2.1.6     | テストフレームワーク                     |

## ホームページ

### カルーセル UI

- Shadcn/UI のカルーセルコンポーネントを基に、Embla Carousel プラグインを組み合わせて、5 秒ごとに自動でスライドするインタラクティブなデザインを実現しました。

### 注目商品セクション

- NewtCMS で管理されたデータを利用し、最新の商品 5 件を動的に表示。
- レスポンシブデザインを採用し、画面幅 640px 以下では 2 列、640px 以上では 3 列表示。
- スマホユーザー向けに、アイコンボタンを常時表示する仕様。

### イベント情報セクション

- Intersection Observer API を利用して、スクロール時に右から画像がスライド表示されるアニメーションを実装。
- モックデータを利用し、画像とテキストを直接表示。640px 以下では画像を非表示にし、テキストのみに切り替わるレスポンシブ対応。

## 商品ページ

### 商品表示

- 6 件の商品を表示し、6 件以上の場合はページネーションを追加。
- カテゴリーフィルターやタイトル検索機能を備え、ユーザーが目的の商品を簡単に見つけられるよう設計。

### シングルページ

- 商品の画像、説明、価格、注文ボタンを表示。モーダルでの個数選択に応じて合計価格を計算。
- ログインが必要な操作にはトースト通知で案内。

## お問い合わせページ

- React Hook Form を利用したフォームの状態管理と、Zod によるスキーマ検証を組み合わせ、入力エラーをリアルタイムで表示。

## 認証ページ

- Clerk を活用し、Google ログインや二要素認証付きのメール登録機能を実装。
- ユーザー情報の管理やサインアウトも可能。

## 警告やエラーの対処

### ビルドエラー

- エラー内容 -
  `@clerk/clerk-react: useAuth can only be used within the <ClerkProvider /> component. Learn more`

- 原因 -
  clerk の ClerkProvider か useAuth に問題があるとのこと、ClerkProvider をみるもちゃんと layout.tsx に入ってる。useAuth を使ってるファイルに`"use client"`を入れるも解決されず。問題は Next.js の App Router 構造に問題があリました。

- 解決策 -
  `src/pages`を`src/components/pages`にしました

### TypeScript

### Newt (エラー)

- Product (エラー)

- エラー内容 -

型 'ProductProps | undefined' を型 'ProductProps' に割り当てることはできません。
型 'undefined' を型 'ProductProps' に割り当てることはできません。ts(2322)

- 原因 -

```:ruby
const ProductData = articles.find((item) => item._id === data._id);

```

ProductData には find メソッドを使用している場合、`undefined`になる可能性があり、このエラーが出たと思われます。

- 解決策 -

item に undefined を追加、

```:ruby

type ProductDataProps = {
  item: ProductProps | undefined;
};

export const Product = ({ item }: ProductDataProps) => {


  if (!item) {
  return <div>商品が見つかりません。</div>;
}

  return (

    ...
  )
}

```

### next/iamge

#### `objectFitとlayout`プロパティ (警告)

Next.js 13 以降では使わないので`objectFitとlayout`プロパティは削除

#### `Largest Contentful Paint (LCP)` (警告)

`LCP`とはウェブページのメインコンテンツが読み込まれるまでの時間を測定するパフォーマンス指標です。
LCP の警告が出たのはホームページの[スライド画像](/my-app/src/components/pages/home/top-images.tsx)なので`next/iamge`で画像を自動的に最適化するには`priority`プロパティを使って最適化します。

```:ruby

// 最初の画像を優先します
<Image priority={index === 0} />

```

- `next/image` Un-configured Host (エラー)

`next/image`をで src に渡されるのが URL 場合`next.config.js`に`hostname`を入れる設定する必要が出てきます

```:ruby
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "site.assets.newt.so",
      },
    ],
  },
};

export default nextConfig;
```

## 出来なかったこと

### figma

`figma`を使いデザインを作ろうとしたが、あんまりなデザインに作成を中止しました。また操作も不慣れで時間もかけすぎると考え素早く作りったかった為それも踏まえ中止しました。でも、`figma`はチーム開発で使われることがあるとのことで一度触ってみて良かったと思っています。時間があればまた自分で作ってみたいです。

[figma で作ったデザイン](https://www.figma.com/design/A55Wt9baMnK1xrHVHMlClD/%E7%84%A1%E9%A1%8C?m=auto&t=LN38QPFNqMBxwYWF-6)

### Clerk

#### 1

`<AuthButton/>`を `layouts/navbar.tsx`に追加してみたが、Clerk のモーダルは表示されるが`アカウント管理やサインアウトなどクリックしても表示されない`。
理由も分からず難航した為[Navbar](/my-app/src/components/layouts/navbar.tsx)での[<AuthButton/>](/my-app/src/components/auth-button.tsx)を入れるのをやめました。

#### 2. プロフィールのカスタマイズ

`<UserButton/>`コンポーネントのプロフィール UI のユーザ名の姓名が英語用の表示順になってたので順番をカスタマイズしようとしたが、そもそも`UserButton`のプロフィールをカスタマイズは難しい、やり方は`プロフィールページを作成`する所からやらないと行けなくコード量が増える為断念。プロフィール UI が提供されているのでそのまま使用します。
