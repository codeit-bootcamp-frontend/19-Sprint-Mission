import clsx from "clsx";
import styles from "./List.module.scss";
import { Link } from "react-router-dom";

export default function Items({ prodList, type }) {
  return (
    <ul
      className={clsx(styles.prodList, {
        [styles.best]: type === "best",
        [styles.all]: type !== "best",
      })}
    >
      {prodList.map((list) => {
        return <ProdItem key={list.id} id={list.id} {...list} type={type} />;
      })}
    </ul>
  );
}

export function ProdItem({ id, name, price, images, favoriteCount }) {
  // price포멧
  const formatPrice = (price) => {
    return price.toLocaleString("ko-KR");
  };
  return (
    <li className={styles.prodItem}>
      <Link to={`/items/${id}`}>
        <div className={styles.prodThum}>
          <img src={images} alt={name} />
        </div>
      </Link>
      <div className={styles.prodInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{formatPrice(price)}원</div>
        <div className={styles.favorite}>{favoriteCount}</div>
      </div>
    </li>
  );
}
