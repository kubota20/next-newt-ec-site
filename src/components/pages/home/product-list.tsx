import Link from "next/link";

// components
import Container from "@/components/ui/container";
import { ProductCard } from "@/components/product-card";
import { Info } from "@/components/ui/info";

// actions
import { getProductList } from "@/actions/get-products";

// test
// import { ProductData } from "@/datatest/product-data";

const ProductList = async () => {
  // 最初の一ページ目の５件だけ表示
  const { items } = await getProductList(1, 5);

  return (
    <section className="bg-[rgb(248,248,248)]">
      <Container>
        <div className="my-20">
          {/* Product Card */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="bg-[#E2E8DE] w-full h-32 lg:h-52 rounded-full border p-3">
              <Info title="商品" />
            </div>
            {items.map((item) => (
              // ホームでは5件まで表示するようにしてます
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
        {/* Products Link */}
        <div className="text-right underline mb-2">
          <Link href="/products">商品を見に行く</Link>
        </div>
      </Container>
    </section>
  );
};

export default ProductList;
