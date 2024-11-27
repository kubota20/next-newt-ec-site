import { cache } from "react";

// lib
import { cdnClient } from "@/lib/newt";

// types
import { ProductProps } from "@/types/types";

export const getProductList = cache(
  async (page: number = 1, limit: number = 10) => {
    const validLimit = Math.min(Math.max(limit, 1), 1000); // 1未満なら1、1000超なら1000に補正

    const skip = (page - 1) * validLimit;
    const { items } = await cdnClient.getContents<ProductProps>({
      appUid: "product",
      modelUid: "article",
      query: {
        skip,
        limit: limit,
      },
    });

    return { items }; // データと総件数を返却
  }
);

export const getProductById = cache(async (productId: string) => {
  const item = await cdnClient.getContent<ProductProps>({
    appUid: "product",
    modelUid: "article",
    contentId: productId,
  });

  return item;
});

// ページネーション対応のデータ取得
export const getPaginatedProducts = cache(
  async (page: number = 1, limit: number = 10) => {
    const validLimit = Math.min(Math.max(limit, 1), 1000); // 1未満なら1、1000超なら1000に補正

    const skip = (page - 1) * validLimit; // スキップする件数を計算
    const { items, total } = await cdnClient.getContents<ProductProps>({
      appUid: "product",
      modelUid: "article",
      query: {
        skip,
        limit: validLimit,
      },
    });

    return { items, total }; // データと総件数を返却
  }
);
