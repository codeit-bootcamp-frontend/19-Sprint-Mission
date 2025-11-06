import "./Item.css";
import testProduct from "../assets/testimage.png";
import likeIcon from "../assets/like-icon.svg";

const Item = () => {
  return (
    <div className="item">
      <img className="card" src={testProduct} />
      <div className="card-text">
        <div className="title">아이패드 미니 팝니다</div>
        <div className="price">500,000</div>
        <div className="like">
          <img className="icon" src={likeIcon}></img>
          <div className="count">240</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
