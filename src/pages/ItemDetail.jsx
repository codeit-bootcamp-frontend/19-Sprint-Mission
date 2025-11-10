import classNames from 'classnames';
import { Link, useParams } from 'react-router';
import Icons from '@/assets/icons/icons';
import Button from '@/components/common/button/Button';
import CommentForm from '@/components/itemDetail/commentForm/CommentForm';
import CommentList from '@/components/itemDetail/commentList/CommentList';
import ProductDetail from '@/components/itemDetail/productDetail/ProductDetail';
import useFetchComments from '@/hooks/useFetchComments';
import useFetchProduct from '@/hooks/useFetchProduct';
import styels from '@/style/page/ItemDetail.module.css';

const ItemDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);
  const {
    comments,
    fetchMore,
    loading: commentLoading,
    isEnd,
    error: commentError,
  } = useFetchComments({ productId: id });

  const handleProductEdit = () => {
    // TODO: 수정 로직 이후 미션에서 구현
    console.log('수정하기');
  };

  const handleProductDelete = () => {
    // TODO: 삭제 로직 이후 미션에서 구현
    console.log('삭제하기');
  };

  const handleCommentEdit = () => {
    // TODO: 수정 로직 이후 미션에서 구현
    console.log('수정하기');
  };

  const handleCommentDelete = () => {
    // TODO: 삭제 로직 이후 미션에서 구현
    console.log('삭제하기');
  };

  if (loading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>에러: {error.message}</div>;
  }
  if (!product) {
    return null;
  }

  return (
    <div className={classNames(styels['common-layout'], styels.container)}>
      <ProductDetail
        product={product}
        onEdit={handleProductEdit}
        onDelete={handleProductDelete}
      />
      <div
        className={classNames(styels['common-layout'], styels['comment-area'])}>
        <CommentForm />

        {commentLoading && <div>댓글을 불러오는 중입니다...</div>}

        {commentError && <div>에러가 발생했습니다: {commentError.message}</div>}

        {!commentLoading && !commentError && (
          <div className={styels['comment-list']}>
            <CommentList
              comments={comments}
              onEdit={handleCommentEdit}
              onDelete={handleCommentDelete}
            />

            {!isEnd && (
              <Button
                theme="basic"
                onClick={fetchMore}
                disabled={commentLoading}
                size="xs"
                className={styels['load-more-btn']}>
                댓글 더보기
              </Button>
            )}
          </div>
        )}
      </div>
      <Button as={Link} to={'/items'} size="m">
        목록으로 돌아가기
        <Icons.BackIcon />
      </Button>
    </div>
  );
};

export default ItemDetail;
