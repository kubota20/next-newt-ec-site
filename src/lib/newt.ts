import { createClient } from "newt-client-js";

// Newt CDN APIのクライアント（公開コンテンツのみ取得）
export const cdnClient = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID + "",
  token: process.env.NEXT_PUBLIC_NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

//　Newt SDK のメソッド

// getContents()  コンテンツ一覧を取得する
// getContent() 個別のコンテンツを取得する
// getFirstContent() 最初のコンテンツを取得する
// getApp() アプリを取得する
