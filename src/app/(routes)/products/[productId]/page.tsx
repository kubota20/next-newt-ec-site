// actions
import { getProductList, getProductById } from "@/actions/get-products";

// components
import Product from "@/components/pages/products/product";

type Props = {
  params: {
    productId: string;
  };
};

// revalidate リクエストは0秒に1回受信されます。
export const revalidate = 0;

const ProductPage = async ({ params }: Props) => {
  const { items } = await getProductList();
  const dataId = await getProductById(params.productId);

  const ProductData = items.find((item) => item._id === dataId._id);

  return (
    <div className="flex flex-col ">
      <Product item={ProductData} />
    </div>
  );
};

export default ProductPage;
