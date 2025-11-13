import "./Card.scss";
import heartIcon from "../assets/ic_heart.svg";

const Card = (props) => {
  const { images, name, price, favoriteCount } = props;
  return (
    <div className="Card">
      <img className="card-image" src={images} />
      <div className="card-info">
        <h1 className="card-name">{name}</h1>
        <p className="card-price">{price}</p>
        <p className="card-favorite">
          <img src={heartIcon} />
          {favoriteCount}
        </p>
      </div>
    </div>
  );
};

export default Card;
