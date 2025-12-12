import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getComments } from "@/api/CommentApi";
import User from "@/components/User";
import styles from "./ProductDetail.module.scss";
import Button from "@/components/Button";
import CommentWrite from "@/components/Comment/CommentWrite";
import CommentEmpty from "@/components/Comment/CommentEmpty";
import CommentList from "@/components/Comment/CommentItem";
import CommentItem from "@/components/Comment/CommentItem";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerNickname: string;
  createdAt: string;
  favoriteCount: number;
}

export default function ProductDetailPage() {
  const product = useLoaderData() as ProductProps;
  const {
    id,
    name,
    description,
    price,
    tags,
    images,
    ownerNickname,
    createdAt,
    favoriteCount,
  } = product;

  const prodImage = images[0];
  const [disabled, setDisabled] = useState(true);
  const [comments, setComments] = useState([]);
  const [openMenuId, setOpenMenuId] = useState<null | number>(null);
  const [editId, setEditId] = useState<null | number>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [commentValue, setCommentValue] = useState("");

  // 댓글입력
  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setCommentValue(val);
  };
  // 댓글설정
  const handleCommentSet = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };
  // 댓글수정 토글UI
  const handleCommentEditSet = (id: number, content: string) => {
    setEditId(editId === id ? null : id);
    setEditValue(content);
  };
  // 댓글수정취소
  const handleEditCancel = () => {
    setEditId(null);
    setOpenMenuId(null);
  };
  // 댓글수정 API
  const handleEditSubmit = (value: string) => {
    console.log(`댓글수정완료 추후 api연결 ::: ` + value);
    setEditId(null);
    setOpenMenuId(null);
  };
  // 댓글등록 API
  const handleAddSubmit = () => {
    console.log("댓글등록 추후 api연결");
  };
  // 댓글삭제 API
  const handleDeleteSubmit = (id: number) => {
    console.log("댓글삭제 추후 api연결");
    setOpenMenuId(null);
  };

  // 댓글로드
  const loadCommnet = async () => {
    try {
      const commentData = await getComments({ id: id, limit: 5 });
      setComments(commentData.list);
    } catch (error) {
      console.error("댓글 로드 실패:", error);
    }
  };
  // price포멧
  const formatPrice = (price: number) => {
    return price.toLocaleString("ko-KR");
  };

  useEffect(() => {
    loadCommnet();
  }, []);

  return (
    <div className="content">
      <div className="inner">
        {/* 상품정보 */}
        <div className={styles.productInfo}>
          <div className={styles.thum}>
            <img src={prodImage} alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{formatPrice(price)}원</div>
            <dl className={styles.detail}>
              <dt className={styles.tit}>상품 소개</dt>
              <dd className={styles.data}>{description}</dd>
              <dt className={styles.tit}>상품 태그</dt>
              <dd className={styles.tags}>
                {tags.map((item, index) => (
                  <span className={styles.tag} key={index}>
                    {item}
                  </span>
                ))}
              </dd>
            </dl>
            <div className={styles.meta}>
              <div className={styles.left}>
                <User
                  type="seller"
                  name={ownerNickname}
                  date={createdAt}
                  image={""}
                />
              </div>
              <div className={styles.right}>
                <button className={styles.favorite}>{favoriteCount}</button>
              </div>
            </div>
          </div>
        </div>

        {/* 댓글입력 */}
        <CommentWrite
          title="문의하기"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={commentValue}
          onChange={handleTextarea}
          onClick={handleAddSubmit}
          disabled={disabled}
        />

        {/* 댓글목록 */}
        {comments.length > 0 ? (
          <ul className={styles.commentList}>
            {comments.map((item) => {
              const { id, content, createdAt, writer } = item;
              const { nickname, image } = writer;
              const isOpen = openMenuId === id;
              const isEdit = editId === id;

              return (
                <CommentItem
                  key={id}
                  isEdit={isEdit}
                  isOpen={isOpen}
                  id={id}
                  editValue={editValue}
                  content={content}
                  nickname={nickname}
                  createdAt={createdAt}
                  image={image}
                  setEditValue={setEditValue}
                  handleEditCancel={handleEditCancel}
                  handleEditSubmit={handleEditSubmit}
                  handleCommentSet={handleCommentSet}
                  handleCommentEditSet={handleCommentEditSet}
                  handleDeleteSubmit={handleDeleteSubmit}
                />
              );
            })}
          </ul>
        ) : (
          <CommentEmpty text="아직 문의가 없어요" />
        )}

        {/* 하단목록버튼 */}
        <div className={styles.btnBottom}>
          <Button as="a" href="/items" variant="back">
            목록으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
}
