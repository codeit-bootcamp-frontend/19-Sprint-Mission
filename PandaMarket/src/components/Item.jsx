import style from "./Item.module.css";
import likeIcon from "../assets/like-icon.svg";

const Item = ({ product, imgClass }) => {
  const { name, price, images } = product;

  return (
    <div className={style.item}>
      <img className={`${style.cardImg} ${imgClass}`} src={images[0]} />
      <div className={style.cardText}>
        <div className={style.title}>{name}</div>
        <div className={style.price}>{price.toLocaleString()}원</div>
        <div className={style.like}>
          <img className={style.icon} src={likeIcon}></img>
          <div className={style.count}>240</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
