"use client";
import Dropdown from "@/components/Dropdown/Dropdown";
import { useProductQuery } from "../../hooks/useProductQuery";

const sortOptions = [
  { label: "최신순", value: "recent" },
  { label: "좋아요순", value: "favorite" },
];

export default function SortDropdown() {
  const { sort, setSort } = useProductQuery();

  const defaultOption = sortOptions.find((opt) => opt.value === sort) ?? sortOptions[0];

  return (
    <Dropdown
      defaultSelected={defaultOption}
      options={sortOptions}
      onSelect={(option) => setSort(option.value as "recent" | "favorite")}
    />
  );
}
