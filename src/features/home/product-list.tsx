import Link from "next/link";

// components
import Container from "@/components/elements/container";
import { ProductCard } from "@/features/products/product-card";
import { Info } from "@/components/elements/info";

// test
import { ProductData } from "@/datatest/product-data";

const ProductList = () => {
  return (
    <section className="bg-[rgb(248,248,248)]">
      <Container>
        <div className="my-20">
          {/* Product Card */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="bg-[#E2E8DE] w-full h-32 lg:h-52 rounded-full border p-3">
              <Info title="商品" />
            </div>
            {ProductData.map((item) => (
              <ProductCard key={item.id} item={item} />
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
