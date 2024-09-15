import type { Metadata } from "next";

// actions
import { getProductList, getProductById } from "@/actions/get-products";

// features
import { Product } from "@/pages/products/product";

type Props = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: Props) => {
  const articles = await getProductList();
  const dataId = await getProductById(params.productId);

  const ProductData = articles.find((item) => item._id === dataId._id);

  return (
    <div className="flex flex-col ">
      <Product item={ProductData} />
    </div>
  );
};

export default ProductPage;
