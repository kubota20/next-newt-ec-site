# Next.js 14 CMS 　 Newt EC Site

- EC Design Library (参考サイト)

## EC サイト 制作の流れ

### 1. Figma で EC サイトの ER 図とサイトマップを作成

- [EC サイトの ER 図 & サイトマップ](https://www.figma.com/board/d2IByXLh9CprBUUNSJqWO3/%E7%84%A1%E9%A1%8C?node-id=1-591&t=HDTq8071YdY6wlEm-1)

### 2. canva で簡単なデザインを作成

- [ホームページ](https://nextectest.my.canva.site/) `テスト用`
- [canva で作成](https://www.canva.com/design/DAGKJcFnV2k/4hyg8SuUP9YJaMroEo0Ivg/edit?utm_content=DAGKJcFnV2k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

タブレット、PC 用のレスポンシブデザインはそのままを[ホームページ](https://nextectest.my.canva.site/)デザインを使用するが。
スマホ用のレスポンシブ対応になってないのでそこは後付けになりますが自分でスタイルを追加していきます。

### 3. ページ

- (Logo)ホーム
- (Products)商品 -> (Product)単品商品
- (Categories)カテゴリ ー> (Category)1 つのカテゴリー
- (Login)ログイン = アカウント = (Logout)ログアウト
- (Contact)お問い合せ
- (Carts)カート
- (OrderDetails)注文履歴

### 4. モーダル

- ログイン
- アカウント登録
- 注文
- カート
- 削除(注文,カート)

### 5. レスポンシブ

- Max: 1280px
- PC : 1024px
- タブレット : 640px
- スマホ : 380px

### 5. Next.js のプロジェクトを作成

`create-next-app`をしていきます。

```
pnpm create next-app my-app --typescript --tailwind --eslint
```

その後`GitHub`にリモートリポジトリにして push します。

#### コマンドの中身

- `pnpm` : 高速で効率的なパッケージマネージャー。npm や yarn の代替として使用されます。
- `create next-app` ： Next.js の公式 CLI（コマンドラインインターフェイス）ツールを使用して新しい Next.js プロジェクトを作成します。
- `my-app` : 作成するプロジェクトの名前。この場合、プロジェクトは「my-app」というディレクトリに作成されます。
- `--typescript` : 新しいプロジェクトに TypeScript を使用するオプション。これにより、TypeScript の設定ファイルとサンプルコードがプロジェクトに追加されます。
- `--tailwind` : Tailwind CSS をプロジェクトに組み込むオプション。これにより、Tailwind CSS の設定が自動的に追加され、スタイリングに使用できるようになります。
- `--eslint` : ESLint をプロジェクトに追加するオプション。これにより、コードの品質と一貫性を保つためのリンティングツールが設定されます。

### 6. テスト用のデータを作成

`newt CMS`を使用する前にテスト用の[データ](/my-app/src/datatest)を作成します。最初はスタイルを当てたいため`newt`で使用する画像やテキストを`datatest`で作りそれ等をテストします。フリー画像に`pixabay`を使用しました。

- [pixabay](https://pixabay.com/)

### 7. ページを作成

`datatest`を使用しホームページ、お問い合せページ、news ページ、他色々、を作成していきます。ここまでの作成は静的ページだけです。

### 8. vercel にデプロイ

[vercel](https://vercel.com/) > `Add New` > `Project` > push してある`Git Repository`を`import` > `Configure Project`設定 > Deploy

[初期デプロイ](https://next-newt-ec-site-kuc8cuxm9-kubota20s-projects.vercel.app/)

初期デプロイは認証機能の`clerk`や Headless CMS の`newt CMS`は使用していません。また動的ルートもまだ入れていません。デザインだけになります。
初期デプロイ後に色々導入していきます。

### 9. 動的ルート

動的ルートを作っていきます。作るのは news ページと商品ページの動的ページを作成します。

カテゴリーを忘れていたので categories ページと動的ページの作成と追加で Products ページにカテゴリー選択と検索 input を追加していきます。

`追加した動的ページ`

- [categories](https://next-newt-ec-site-gkqhxennp-kubota20s-projects.vercel.app/categories/a) : `[categoryId]`
- [news](https://next-newt-ec-site-gkqhxennp-kubota20s-projects.vercel.app/news/a) : `[newsId]`
- [products](https://next-newt-ec-site-gkqhxennp-kubota20s-projects.vercel.app/products/a) : `[productId]`

categoryId と productId の中身は同じなのでそのまま使い回してます。

### 10. Clerk を使って認証機能を導入

最初は`next-auth`を使って認証機能を入れようとしましたが、コードが多くなるとサイトの表示速度が遅くなるのと、簡単に導入できコード量も少なくユーザー情報も管理出来るので`Clerk`を選びました。

## 警告時の対処

### next/iamge

- `objectFitとlayout`プロパティの警告

Next.js 13 以降では使わないので`objectFitとlayout`プロパティは削除

- `Largest Contentful Paint (LCP)`の警告

`LCP`とはウェブページのメインコンテンツが読み込まれるまでの時間を測定するパフォーマンス指標です。
LCP の警告が出たのはホームページの[スライド画像](/my-app/src/features/home/top-images.tsx)なので`next/iamge`で画像を自動的に最適化するには`priority`プロパティを使って最適化します。

```:ruby

// 最初の画像を優先します
<Image priority={index === 0} />

```

## 出来なかったこと

### figma

`figma`を使いデザインを作ろうとしたが、あんまりなデザインに作成を中止しました。また操作も不慣れで時間もかけすぎると考え素早く作りったかった為それも踏まえ中止しました。でも、`figma`はチーム開発で使われることがあるとのことで一度触ってみて良かったと思っています。時間があればまた自分で作ってみたいです。

[figma で作ったデザイン](https://www.figma.com/design/A55Wt9baMnK1xrHVHMlClD/%E7%84%A1%E9%A1%8C?m=auto&t=LN38QPFNqMBxwYWF-6)

### Clerk

`Clerk`の`<AuthButton/>`を 640px 以内で表示される`Navbar`に追加してみたが、Clerk のモーダルは表示されるがサインインもサインアウトも出来ない。
理由も分からず難航した為[Navbar](/my-app/src/components/layouts/navbar.tsx)での[<AuthButton/>](/my-app/src/components/elements/auth-button.tsx)を入れるのをやめました。

## Vitest

この EC サイトのテストを`Vitest`で行います

主にテストをするのは`認証`や`API`のテストを行います

[test ファイル](/my-app/src/test/)で確認できます

最初はそれぞれの単発テストを行い、最後に結合テストを行います

| パッケージ                  | バージョン | 説明                                                         |
| :-------------------------- | :--------- | :----------------------------------------------------------- |
| vitest                      | v1.6.0     | 高速でシンプルなユニットテストフレームワーク                 |
| @vitejs/plugin-react        | v4.3.1     | Vite で React プロジェクトを構築・開発するためのプラグイン。 |
| @testing-library/react      | v16.0.0    | React コンポーネントのテストを支援するライブラリ             |
| @testing-library/user-event | v14.5.2    | ユーザーイベントをシミュレートしてテストするためのライブラリ |
| jsdom                       | v24.1.0    | Node.js 環境でブラウザの DOM をシミュレートするライブラリ    |

## インストール

```
pnpm i -D vitest @testing-library/react @testing-library/user-event @vitejs/plugin-react jsdom

```
