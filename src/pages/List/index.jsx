import BestItems from "@/pages/List/BestItems";
import TotalItems from "@/pages/List/TotalItems";

function ItemPage() {
  return (
    <div className="itemPage">
      <div className="inner">
        <BestItems />
        <TotalItems />
      </div>
    </div>
  );
}

export default ItemPage;
