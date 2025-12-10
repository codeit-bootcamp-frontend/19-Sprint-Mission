import clsx from "clsx";
import styles from "./List.module.scss";

export default function Items({ prodList, type }) {
  return (
    <ul
      className={clsx(styles.prodList, {
        [styles.best]: type === "best",
        [styles.all]: type !== "best",
      })}
    >
      {prodList.map((list) => {
        return <ProdItem key={list.id} {...list} type={type} />;
      })}
    </ul>
  );
}

export function ProdItem({ name, price, images, favoriteCount }) {
  return (
    <li className={styles.prodItem}>
      <div className={styles.prodThum}>
        <img src={images} alt={name} />
      </div>
      <div className={styles.prodInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}원</div>
        <div className={styles.favorite}>{favoriteCount}</div>
      </div>
    </li>
  );
}
