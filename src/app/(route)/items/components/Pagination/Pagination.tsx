import Button from "@/components/Button/Button";

import IC_ArrowLeft from '@/components/icons/arrow_left.svg';
import IC_ArrowRight from '@/components/icons/arrow_right.svg';

interface PaginationProps {
  total: number;  // 총 데이터 개수
  page: number; // 현재 페이지
  setPage: React.Dispatch<React.SetStateAction<number>>;  // 페이지 상태 업데이트
  limit?: number; // 한 페이지당 데이터 수
};

const Pagination = ({
  total,
  page,
  setPage,
  limit = 10
}:PaginationProps) => {
  const totalPages = Math.ceil(total/limit);
  if(totalPages <= 1) return null;

  const handlePageChange = (num: number) => {
    if(num<1 || num>totalPages) return;
    setPage(num);
  }
  const handlePrev = () => {
    if(page > 1) setPage(page-1)
  };
  const handleNext = () => {
    if(page < totalPages) setPage(page+1);
  };

  return (
    <div className="flex justify-center items-center gap-2">
      {/* 이전 버튼 */}
      <Button variant='outlined' onClick={()=>handlePrev}>
        <IC_ArrowLeft/>
      </Button>
      {Array.from({length: totalPages}, (_,i)=>i+1).map((num) => (
        <Button
          key={num}
          variant={num===page?'primary':'outlined'}
          onClick={()=>handlePageChange(num)}
        >
          {num}
        </Button>
      ))}
      <Button variant='outlined' onClick={()=>handleNext}>
        <IC_ArrowRight/>
      </Button>
    </div>
  );
};

export default Pagination;