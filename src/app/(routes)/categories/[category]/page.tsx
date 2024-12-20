// components
import { ProductCard } from "@/components/product-card";
import Container from "@/components/ui/container";
import { CategorySelect } from "@/components/category-select";
import { TitleSearch } from "@/components/title-search";
import ProductPagination from "@/components/product-pagination";

// actions
import { getPaginatedProducts } from "@/actions/get-products";
import { getCategory } from "@/actions/get-categories";

// test
// import { ProductData } from "@/datatest/product-data";

type Props = {
  params: {
    category: string;
  };
  searchParams: { page?: string };
};

// revalidate リクエストは0秒に1回受信されます。
export const revalidate = 0;

const CategoriesPage = async ({ params, searchParams }: Props) => {
  const categoryData = await getCategory();
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 6;
  const { items, total } = await getPaginatedProducts(
    currentPage,
    itemsPerPage,
    {
      category: params.category,
    }
  );

  const currentCategory = categoryData.find(
    (cat) => cat._id === params?.category
  );

  return (
    <div className="flex flex-col h-full bg-[rgb(248,248,248)]">
      <div className="max-sm:my-12 sm:my-32 lg:my-24">
        <Container>
          <div className="flex items-center justify-between my-16 max-sm:flex-col max-sm:space-y-4">
            <div className="w-full flex items-center justify-center">
              <h2 className="font-bold text-3xl text-center">商品</h2>
              <p className="font-bold">（{currentCategory?.name}）</p>
            </div>
            <div className="flex gap-2">
              <CategorySelect catItem={categoryData} />
              <TitleSearch productData={items} />
            </div>
          </div>

          {/* 商品カード */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {items.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </Container>
      </div>

      {/* ページネーション */}
      <div className="mb-10">
        <ProductPagination
          currentPage={currentPage}
          total={total}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default CategoriesPage;
