import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/common/Button";
import ImageSlider from "../components/common/ImageSlider";
import { useProductDetail } from "../hooks/useProductDetail";
import { createQuestion } from "../services/Question";
import { formatDate } from "../utils/formatDate";
import { useFavorite } from "../hooks/useFavorite";
import Heart from "../assets/Icons/ic_heart.svg?react";
import Back from "../assets/Icons/ic_back.svg?react";

const ItemDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  //  상품 상세 + 문의 목록
  const { product, questions, setQuestions, loading, error } =
    useProductDetail(productId);

  //  문의 작성 상태
  const [content, setContent] = useState("");
  const isValid = content.trim().length > 0;

  const { count, isFavorite, onToggle } = useFavorite(
    product?.favoriteCount ?? 0,
    product?.id
  );

  if (loading) return <div className="p-10 text-center">로딩중...</div>;
  if (error) return <div className="p-10 text-center">{error}</div>;
  if (!product) return null;
  const handleSubmit = async () => {
    try {
      const newQuestion = await createQuestion(productId, content);
      setQuestions((prev) => [newQuestion, ...prev]);
      setContent("");
    } catch (e) {
      alert("문의 등록에 실패했습니다.", e);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl ">
      <div className="flex border-b pb-7">
        {/* 상품 이미지 */}
        <div className="max-w-[486px] max-h-[486px]">
          <ImageSlider images={product.images} className="rounded-2xl" />
        </div>

        <div className="ml-2 ">
          {/* 상품 정보 */}
          <h1 className="text-2xl font-bold  ">{product.name}</h1>
          <h2 className="text-2xl font-bold mt-2 mb-6">{product.price}원</h2>
          <label className=""> 상품소개</label>

          <p className="mt-2 text-gray-700">{product.description}</p>

          {/* 태그 */}
          <div className="flex flex-col gap-2 mt-6 flex-wrap">
            <label className=""> 상품태그</label>
            <div className="space-x-2 mt-2">
              {product.tags?.map((tag) => (
                <span
                  key={tag}
                  className="w-full bg-gray-100 rounded-2xl text-gray-600 text-sm px-2 py-1.5 "
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-15.5">
            <button
              onClick={onToggle}
              className="flex w-[87px] bg-gray-100 rounded-2xl items-center justify-center gap-1 text-gray-500"
            >
              <Heart className={isFavorite ? "fill-red-500" : "w-8 h-8"} />
              <span>{count}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 문의 작성 */}
      <div className="w-full mt-8 relative">
        <label> 문의하기</label>

        <textarea
          className="w-full bg-gray-300/50 rounded-2xl p-4 mt-3"
          rows={4}
          placeholder="문의 내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          className={`absolute right-0 bottom-0 translate-y-full mt-2 px-6 h-12 ${
            isValid ? "bg-[#9CA3AF]" : "bg-gray-300"
          }`}
          disabled={!isValid}
          onClick={handleSubmit}
        >
          등록
        </Button>
      </div>

      {/* 문의 목록 */}
      <div className="mt-8 space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="flex gap-3 border-b pb-4">
            <img
              src={q.writer.image}
              className="w-10 h-10 rounded-full"
              alt={q.writer.nickname}
            />
            <div>
              <div className="font-semibold">{q.writer.nickname}</div>
              <div className="text-sm text-gray-700">{q.content}</div>
              <div className="text-xs text-gray-400">
                {formatDate(q.updatedAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="primary"
          size="lg"
          className="mt-4 rounded-3xl"
          onClick={() => navigate("/items")}
        >
          목록으로 돌아가기
          <Back className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ItemDetailPage;
