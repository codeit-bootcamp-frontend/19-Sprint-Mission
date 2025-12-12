import "./Card.scss";
import heartIcon from "@/assets/images/ic_heart.svg";

const Card = (props) => {
  const { images, name, price, favoriteCount } = props;
  return (
    <div className="Card">
      <img
        className="card-image"
        src={images}
        onError={(e) =>
          (e.currentTarget.src =
            "https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg?semt=ais_incoming&w=740&q=80")
        }
      />
      <div className="card-info">
        <span className="card-name">{name}</span>
        <span className="card-price">{price}</span>
        <span className="card-favorite">
          <img src={heartIcon} />
          {favoriteCount}
        </span>
      </div>
    </div>
  );
};

export default Card;
