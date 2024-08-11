// import "server-only";
import { createClient } from "newt-client-js";

export const NewtClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

//　Newt SDK のメソッド

// getContents()  コンテンツ一覧を取得する
// getContent() 個別のコンテンツを取得する
// getFirstContent() 最初のコンテンツを取得する
// getApp() アプリを取得する
