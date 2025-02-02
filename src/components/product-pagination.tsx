"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

// components
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductPagination = ({
  currentPage,
  total,
  itemsPerPage,
}: {
  currentPage: number;
  total: number;
  itemsPerPage: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathName = usePathname();

  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // 範囲外の場合
    // 現在のクエリパラメータを保持しつつページ番号を変更
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      {/* ページネーション */}
      <Pagination className="mt-6">
        <PaginationContent>
          {/* 前のページ */}
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
            />
          </PaginationItem>

          {/* ページ番号 */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* ページ区切り */}
          <PaginationItem>
            {/* ページ数が2以上あれば「...」が入る */}
            {totalPages > 2 && <PaginationEllipsis />}
          </PaginationItem>

          {/* 次のページ */}
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
export default ProductPagination;
