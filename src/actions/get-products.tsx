import { NewtClient } from "@/lib/newt";
import { ProductProps } from "@/types/types";

export const getProductList = async () => {
  const { items } = await NewtClient.getContents<ProductProps>({
    appUid: "product",
    modelUid: "article",
  });

  return items;
};

export const getProductById = async (productId: string) => {
  const item = await NewtClient.getContent<ProductProps>({
    appUid: "product",
    modelUid: "article",
    contentId: productId,
  });

  return item;
};
