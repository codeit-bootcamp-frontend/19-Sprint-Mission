import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select, { type SelectProps } from "@/components/ui/Select";
import useFilter, { type useFilterProps, type SortId } from "./useFilter";
import styled from "styled-components";

const sortOptions: Array<{ id: SortId; label: string }> = [
  { id: "latest", label: "최신순" },
  { id: "likes", label: "좋아요순" },
];

const Filter = ({ onSearchChange, onSortChange }: useFilterProps) => {
  const { sort, setSort, searchKeyword, handleSearch } = useFilter({
    onSearchChange,
    onSortChange,
  });

  return (
    <FilterContainer>
      <h2>전체 상품</h2>
      <SearchInput
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={searchKeyword}
        onChange={handleSearch}
      />
      <RegisterButton type="button">상품 등록하기</RegisterButton>
      <SortSelect<SortId>
        options={sortOptions}
        value={sort}
        onValueChange={setSort}
      />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  h2 {
    margin-bottom: 0;
  }
`;

const SearchInput = styled(Input)`
  margin-left: auto;
  flex: 1;
  max-width: 400px;
`;

const RegisterButton = styled(Button)`
  white-space: nowrap;
`;

const SortSelect = styled((props: SelectProps<SortId>) => (
  <Select<SortId> {...props} />
))`
  min-width: 120px;
`;

export default Filter;
