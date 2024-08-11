import { getProducts } from "@/actions/get-products";

import { Product } from "@/features/products/product";
import { getProduct } from "@/actions/get-product";

type Props = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: Props) => {
  const articles = await getProducts();
  const data = await getProduct(params.productId);

  const ProductData = articles.find((item) => item._id === data._id);

  return (
    <div className="flex flex-col ">
      <Product item={ProductData} />
    </div>
  );
};

export default ProductPage;
