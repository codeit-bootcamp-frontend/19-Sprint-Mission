export default function Items({ prodList, type }) {
  return (
    <ul className={`prodList ${type === "best" ? "best" : "all"}`}>
      {prodList.map((list) => {
        return <ProdItem key={list.id} {...list} type={type} />;
      })}
    </ul>
  );
}

export function ProdItem({ name, price, images, favoriteCount }) {
  return (
    <li className="prodItem">
      <div className="prodThum">
        <img src={images} alt={name} />
      </div>
      <div className="prodInfo">
        <div className="name">{name}</div>
        <div className="price">{price}원</div>
        <div className="favorite">{favoriteCount}</div>
      </div>
    </li>
  );
}
