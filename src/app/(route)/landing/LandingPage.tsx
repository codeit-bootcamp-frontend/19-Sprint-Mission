'use client';

import Button from "@/components/Button/Button";
import Link from "next/link";

const LandingPage = () => {
  return(
    <div>
      <div className='flex justify-center items-end pt-20 bg-[#CFE5FF]'>
        <div className="flex flex-col py-5 border">
          <h1>일상의 모든 물건을 거래해 보세요</h1>
          <Link href='/items'>
            <Button radius="full" onClick={()=>console.log('page')}>구경하러 가기</Button>
          </Link>
        </div>
      </div>
      <div className='mx-auto max-w-[1200px] mt-6'>
        <div>
          <div>

          </div>
          <div>
            <span>Hot item</span>
            <h1>인기 상품을 확인해 보세요</h1>
            <span>가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;