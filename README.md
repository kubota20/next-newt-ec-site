# Next.js 14 CMS 　 Newt EC Site

## 概要説明

この EC サイトでは、Clerk を利用した認証機能や Firebase による注文管理、NewtCMS を使った商品管理やメッセージ管理など実装しています。特に、状態管理には Zustand を採用し、カート機能やモーダルの操作を効率化することでユーザーがストレスなく操作できるよう工夫しました。スタイルには Tailwind CSS を使用し、Shadcn/UI の UI コンポーネントを活用しています。

## EC サイト 制作前の流れ

1. Figma で ER 図とサイトマップを作成

- [Figma](https://www.figma.com/board/d2IByXLh9CprBUUNSJqWO3/%E7%84%A1%E9%A1%8C?node-id=1-591&t=HDTq8071YdY6wlEm-1)

2. canva で簡単なデザインを作成

- [canva テストサイト](https://nextectest.my.canva.site/) `テスト用`

## ホームページ

[PC 用ホームページ全体](/my-app/site-images/image-1.png)

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

Newt での画像の型定義をする場合必ず`height`や`width`を必ず入れてください。
next/image コンポーネントは`StaticImageData`型を使って画像の情報を管理します。
そこには`height`や`width`プロパティが含まれているため、これ等の型定義が必要になります。

```
export interface Image {
  _id: string;
  src: string;
  title: string;
  height: number;
  width: number;
}
```

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
