import React from "react";

// test
import { ProductData } from "@/datatest/product-data";

// components
import Container from "@/components/elements/container";
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

const ProductsPage = () => {
  return (
    <div className="flex flex-col bg-[rgb(248,248,248)]">
      <Container>
        <div className="my-32">
          <h2 className="text-center my-16 font-bold text-3xl">商品</h2>

          {/* 商品カード */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {ProductData.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
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

export default ProductsPage;
