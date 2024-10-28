import { cdnClient } from "@/lib/newt";
import { cache } from "react";
import { CategoryProps, ProductProps } from "@/types/types";

export const getCategory = cache(async () => {
  const { items } = await cdnClient.getContents<CategoryProps>({
    appUid: "product",
    modelUid: "category",
    query: {
      select: ["_id", "name", "slug"],
    },
  });

  return items;
});

export const getCategoryList = cache(async () => {
  const { items } = await cdnClient.getContents<ProductProps>({
    appUid: "product",
    modelUid: "article",
  });

  return items;
});

export const getProductsByCategory = cache(async (category: string) => {
  const { items } = await cdnClient.getContents<ProductProps>({
    appUid: "product",
    modelUid: "article",
    query: {
      category: category,
      // _sys.customOrder は Category Select で必要になります
      // 選択した同じカテゴリを表示
      order: ["_sys.customOrder"],
    },
  });

  return items;
});
