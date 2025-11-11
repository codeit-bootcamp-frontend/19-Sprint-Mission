import images from '@/assets/images/images';
import styles from './Overview.module.css';

const OVERVIEW_ITEMS = [
  {
    id: 1,
    tag: 'Hot item',
    title: ['인기 상품을', '확인해 보세요'],
    desc: ['가장 HOT한 중고거래 물품을', '판다 마켓에서 확인해 보세요'],
    img: images.homeOverview1,
    isRight: false,
  },
  {
    id: 2,
    tag: 'Search',
    title: ['구매를 원하는', '상품을 검색하세요'],
    desc: ['구매하고 싶은 물품은 검색해서', '쉽게 찾아보세요'],
    img: images.homeOverview2,
    isRight: true,
  },
  {
    id: 3,
    tag: 'Register',
    title: ['판매를 원하는', '상품을 등록하세요'],
    desc: ['어떤 물건이든 판매하고 싶은 상품을', '쉽게 등록하세요'],
    img: images.homeOverview3,
    isRight: false,
  },
];

const Overview = () => {
  return (
    <section className={styles.container}>
      {OVERVIEW_ITEMS.map(({ id, tag, title, desc, img, isRight }) => {
        return (
          <div key={id} className={styles.contents}>
            <img
              src={img}
              alt={`판다마켓 소개 이미지${id}`}
              className={styles.img}
            />
            <div
              className={`${styles['text-area']}
              ${isRight ? styles['right'] : ''}`}>
              <span className={styles.tag}>{tag}</span>
              <h3 className={styles.title}>
                {title[0]} <br className={styles['title-br']} />
                {title[1]}
              </h3>
              <p className={styles.desc}>
                {desc[0]} <br /> {desc[1]}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Overview;
