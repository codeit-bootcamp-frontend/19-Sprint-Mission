import { useState, useEffect } from "react";

export type SortId = "latest" | "likes";

export interface useFilterProps {
  onSearchChange: (value: string) => void;
  onSortChange: (sortId: SortId) => void;
}

function useFilter({ onSearchChange, onSortChange }: useFilterProps) {
  const [sort, setSort] = useState<SortId>("latest");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 입력 변경 핸들러 
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchVal = e.target.value;
    setSearchKeyword(searchVal);
  };

  useEffect(() => {
    //디바운싱
    const timer = setTimeout(() => {
      // 처음에 조건문으로 나눴었는데... 앞 뒤 빈공간이 있는지도 확인하고
      // 검색어가 있을 때나 빈 문자열일 때 모두 onSearchChange 호출
      onSearchChange(searchKeyword);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchKeyword]);

  useEffect(() => {
    onSortChange(sort);
  }, [sort]);

  return {
    sort,
    setSort,
    searchKeyword,
    handleSearch,
  };
}

export default useFilter;
