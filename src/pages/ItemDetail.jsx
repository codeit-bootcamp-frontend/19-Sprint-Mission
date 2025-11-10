import { Link, useParams } from 'react-router';
import Icons from '@/assets/icons/icons';
import Button from '@/components/common/button/Button';
import CommentForm from '@/components/itemDetail/commentForm/CommentForm';
import ProductDetail from '@/components/itemDetail/productDetail/ProductDetail';
import useFetchProduct from '@/hooks/useFetchProduct';
import styels from '@/style/page/ItemDetail.module.css';

const ItemDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);

  const handleProductEdit = () => {
    // TODO: 수정 로직 이후 미션에서 구현
    console.log('수정하기');
  };

  const handleProductDelete = () => {
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
    <div className={styels.container}>
      <ProductDetail
        product={product}
        onEdit={handleProductEdit}
        onDelete={handleProductDelete}
      />
      <CommentForm />
      <Button as={Link} to={'/items'} size="m">
        목록으로 돌아가기
        <Icons.BackIcon />
      </Button>
    </div>
  );
};

export default ItemDetail;
