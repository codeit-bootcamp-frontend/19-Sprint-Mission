import "./Item.css";
import likeIcon from "../assets/like-icon.svg";

const Item = ({ product }) => {
  const { name, price, images } = product;

  return (
    <div className="item">
      <img className="card" src={images[0]} />
      <div className="card-text">
        <div className="title">{name}</div>
        <div className="price">{price.toLocaleString()}원</div>
        <div className="like">
          <img className="icon" src={likeIcon}></img>
          <div className="count">240</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
