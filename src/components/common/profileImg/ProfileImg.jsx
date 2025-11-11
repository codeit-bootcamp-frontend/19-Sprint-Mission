import images from '@/assets/images/images';

const ProfileImg = ({ size = 'm' }) => {
  const width = size === 'm' ? 40 : 32;
  return <img width={width} src={images.profile} alt="프로필 이미지" />;
};

export default ProfileImg;
