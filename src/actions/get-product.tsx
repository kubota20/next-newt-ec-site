import { cache } from "react";
import { NewtClient } from "@/lib/newt";
import { ProductProps } from "@/types/types";

export const getProduct = cache(async (productId: string) => {
  const item = await NewtClient.getContent<ProductProps>({
    appUid: "product",
    modelUid: "article",
    contentId: productId,
  });

  return item;
});
