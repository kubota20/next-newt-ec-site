import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // ブラウザのような環境を使用
    globals: true, // グローバルな`describe`, `test`を有効化
    mockReset: true, // 各テスト間でモックをリセット
  },
  resolve: {
    alias: {
      // 絶対パスエイリアスの設定
      "@/": `${__dirname}/src/`,
    },
  },
});
