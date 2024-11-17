// components
import { ProductCard } from "@/components/product-card";
import Container from "@/components/ui/container";
import { CategorySelect } from "@/components/category-select";
import { TitleSearch } from "@/components/title-search";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// actions
import { getProductList } from "@/actions/get-products";
import { getCategory, getProductsByCategory } from "@/actions/get-categories";

// test
// import { ProductData } from "@/datatest/product-data";

type Props = {
  params: {
    category: string;
  };
};

// revalidate リクエストは0秒に1回受信されます。
export const revalidate = 0;

const CategoriesPage = async ({ params }: Props) => {
  const data = await getProductsByCategory(params.category);

  const categoryData = await getCategory();
  const productData = await getProductList();

  const currentCategory = categoryData.find(
    (cat) => cat._id === params?.category
  );

  return (
    <div className="flex flex-col h-full bg-[rgb(248,248,248)]">
      <div className="my-32">
        <Container>
          <div className="flex items-center justify-between my-16 max-sm:flex-col max-sm:space-y-4">
            <div className="w-full flex items-center justify-center">
              <h2 className="font-bold text-3xl text-center">商品</h2>
              <p className="font-bold">（{currentCategory?.name}）</p>
            </div>
            <div className="flex gap-2">
              <CategorySelect catItem={categoryData} />
              <TitleSearch productData={productData} />
            </div>
          </div>

          {/* 商品カード */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {data.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </Container>
      </div>

      {/* ページネーション */}
      <div className="mb-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default CategoriesPage;
