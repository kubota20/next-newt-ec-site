import { cache } from "react";
import { NewtClient } from "@/lib/newt";
import { ProductProps } from "@/types/types";

export const getProductList = cache(async () => {
  const { items } = await NewtClient.getContents<ProductProps>({
    appUid: "product",
    modelUid: "article",
  });

  return items;
});

export const getProductById = cache(async (productId: string) => {
  const item = await NewtClient.getContent<ProductProps>({
    appUid: "product",
    modelUid: "article",
    contentId: productId,
  });

  return item;
});
