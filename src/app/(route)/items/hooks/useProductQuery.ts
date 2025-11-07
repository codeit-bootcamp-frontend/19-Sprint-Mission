"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useCallback } from "react";

type SortType = "recent" | "favorite";

interface Queries {
  page: number;
  search: string;
  sort: SortType;
}

export function useProductQuery() {
  const router = useRouter();
  const params = useSearchParams();

  // 현재 쿼리 상태 : useMemo로 params 메모이제이션
  const query = useMemo<Queries>(() => {
    const page = Number(params.get("page")) || 1;
    const search = params.get("search") || "";
    const sort = (params.get("sort") as SortType) || "recent";
    return { page, search, sort };
  }, [params]);

  // 쿼리 갱신
  const updateQuery = useCallback(
    (updates: Partial<Queries>, options?: { replace?: boolean }) => {
      const newParams = new URLSearchParams(params.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") newParams.delete(key);
        else newParams.set(key, String(value));
      });

      const url = `?${newParams.toString()}`;

      if (options?.replace) {
        router.replace(url);
      } else {
        router.push(`?${newParams.toString()}`);
      }
    },
    [params, router],
  );

  return {
    ...query,
    setPage: (page: number) => updateQuery({ page }),
    setSearch: (search: string) => updateQuery({ search, page: 1 }, { replace: true }), // 검색 후 페이지 초기화
    setSort: (sort: SortType) => updateQuery({ sort }),
  };
}
