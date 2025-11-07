import { useState } from "react";
import type { OrderBy } from '@/type/product';

type SortId = "latest" | "likes";

export const useProductQueryState = (initial: {pageSize?: number; orderBy?: OrderBy;} = {}) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [orderBy, setOrderBy] = useState<OrderBy>(initial.orderBy ?? "recent");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = initial.pageSize ?? 10;

  // 드롭다운
  const handleSortChange = (sortId: SortId) => {
    if (sortId === "latest") {
      setOrderBy("recent");
    } else if (sortId === "likes") {
      setOrderBy("favorite");
    }
    setCurrentPage(1);
  };

   // 페이지네이션
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    searchKeyword,
    setSearchKeyword,
    orderBy,
    currentPage,
    pageSize,
    handleSortChange,
    handlePageChange,
  }

} 