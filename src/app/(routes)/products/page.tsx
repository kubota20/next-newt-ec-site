// test
// import { ProductData } from "@/datatest/product-data";

// actions
import { getPaginatedProducts } from "@/actions/get-products";
import { getCategory } from "@/actions/get-categories";

// components
import { ProductCard } from "@/components/product-card";
import Container from "@/components/ui/container";
import { CategorySelect } from "@/components/category-select";
import { TitleSearch } from "@/components/title-search";
import ProductPagination from "@/components/product-pagination";

type Props = {
  searchParams: { page?: string };
};

export const revalidate = 0;
const ProductsPage = async ({ searchParams }: Props) => {
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 6;
  const { items, total } = await getPaginatedProducts(
    currentPage,
    itemsPerPage
  );

  const categoryData = await getCategory();

  return (
    <div className="flex flex-col h-full bg-[rgb(248,248,248)]">
      <div className="my-32">
        <Container>
          <div className="flex items-center justify-between my-16">
            <div className="w-full">
              <h2 className="font-bold text-3xl text-center">商品</h2>
            </div>
            <div className="flex items-center gap-2">
              {/* カテゴリー選択 */}
              <CategorySelect catItem={categoryData} />

              {/* タイトル検索 */}
              <TitleSearch productData={items} />
            </div>
          </div>

          {/* 商品カード */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {items.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>

          {/* ページネーション */}
          <div className="mb-10">
            <ProductPagination
              currentPage={currentPage}
              total={total}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProductsPage;
