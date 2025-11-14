import { getTargetProduct } from "@/apis/products";
import { getCommentsList } from "@/apis/comments";
import { Product } from "@/types/product";
import { Comment } from "@/types/comment";

import ItemDetailPage from "./ItemDetailPage";
import { CommentsProvider } from "./context/CommentsContext";

const COMMENT_LIMIT = 3;
interface PageProps {
  params: { productId: string };
}

export default async function Page({ params }: PageProps) {
  const id = parseInt(params.productId);

  const product: Product = await getTargetProduct(id);
  if (!product) return <p>상품의 상세 정보를 불러올 수 없습니다</p>;

  const res = await getCommentsList(id, COMMENT_LIMIT);
  const commentList = (res.list ?? []).map((c: Comment) => ({
    ...c,
  }));

  return (
    <CommentsProvider productId={id} initialComments={res.list ?? []}>
      <ItemDetailPage product={product} />;
    </CommentsProvider>
  );
}
