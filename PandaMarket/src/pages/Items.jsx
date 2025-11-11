import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";
import style from "./Items.module.css";

const Items = () => {
  return (
    <div className={style.main}>
      <BestItems />
      <AllItems />
    </div>
  );
};

export default Items;
