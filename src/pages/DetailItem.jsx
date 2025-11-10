import { Link } from 'react-router';
import Icons from '@/assets/icons/icons';
import Button from '@/components/common/button/Button';

const DetailItem = () => {
  return (
    <>
      <Button as={Link} to={'/items'} size="m">
        목록으로 돌아가기
        <Icons.BackIcon />
      </Button>
    </>
  );
};

export default DetailItem;
