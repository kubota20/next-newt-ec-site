// components
import Container from "@/components/elements/container";
import { ProductData } from "@/datatest/product-data";
import { CategorySelect } from "@/components/elements/category-select";
import { TitleSearch } from "@/components/elements/title-search";
import { ProductCard } from "@/features/products/product-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/elements/pagination";

const CategoriesPage = () => {
  return (
    <div className="flex flex-col bg-[rgb(248,248,248)]">
      <Container>
        <div className="my-32">
          <div className="flex items-center justify-between my-16">
            <div className="w-full">
              <h2 className="font-bold text-3xl text-center">商品</h2>
            </div>
            <div className="flex items-center gap-2">
              <CategorySelect />
              <TitleSearch />
            </div>
          </div>

          {/* 商品カード */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {ProductData.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div> */}
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
      </Container>
    </div>
  );
};

export default CategoriesPage;
