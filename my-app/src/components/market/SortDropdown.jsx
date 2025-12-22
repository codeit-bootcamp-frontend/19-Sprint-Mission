import { useEffect, useRef, useState } from "react";
import ArrowDown from "../../assets/Icons/ic_arrow_down.svg?react";
import Sort from "../../assets/Icons/ic_sort.svg?react";

const SortDropdown = ({ currentSort, setSortType }) => {
  const [isMobile, setIsMobile] = useState(false);
  const selectRef =  useRef(null)

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  // 🔹 모바일 UI
  if (isMobile) {
    return (
      <div className="relative inline-block">
        <select
          ref={selectRef}
          value={currentSort}
          onChange={handleSortChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        >
          <option value="latest">최신순</option>
          <option value="likes">좋아요순</option>
        </select>

        {/* 화면에 보이는 가짜 버튼 */}
        <button
          onClick={() => selectRef.current?.showPicker?.()} 
          className="flex items-center gap-2 px-3 py-2 border rounded bg-white shadow text-sm"
        >
          <Sort width={20} height={20} />
        </button>
      </div>
    );
  }

  // 🔹 데스크탑 UI
  return (
    <div className="relative inline-block">
      <select
        value={currentSort}
        onChange={handleSortChange}
        className="block appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="latest">최신순</option>
        <option value="likes">좋아요순</option>
      </select>

      {/* 🔥 정렬 아이콘: absolute 위치 고정 */}
      <ArrowDown className="pointer-events-none absolute inset-y-0 right-2 w-6 h-6 top-2 text-gray-700" />
    </div>
  );
};

export default SortDropdown;
