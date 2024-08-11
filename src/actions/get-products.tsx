import { cache } from "react";
import { NewtClient } from "@/lib/newt";
import { ProductProps } from "@/types/types";

export const getProducts = cache(async () => {
  const { items } = await NewtClient.getContents<ProductProps>({
    appUid: "product",
    modelUid: "article",
    query: {
      skip: 0,
      limit: 10,
    },
  });

  return items;
});
