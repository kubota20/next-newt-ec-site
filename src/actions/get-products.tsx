import { cdnClient } from "@/lib/newt";
import { cache } from "react";
import { ProductProps } from "@/types/types";

export const getProductList = cache(async () => {
  const { items } = await cdnClient.getContents<ProductProps>({
    appUid: "product",
    modelUid: "article",
  });

  return items;
});

export const getProductById = cache(async (productId: string) => {
  const item = await cdnClient.getContent<ProductProps>({
    appUid: "product",
    modelUid: "article",
    contentId: productId,
  });

  return item;
});
