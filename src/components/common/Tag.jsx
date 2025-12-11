import "./Tag.scss";
import ic_close from "@/assets/images/ic_close.svg";

export default function Tag({ children, onDelete }) {
  return (
    <div className={`Tag ${onDelete ? "editing" : ""}`}>
      <span className="tag-text">{`#${children}`}</span>
      {onDelete && (
        <button className="tag-close-btn" onClick={onDelete}>
          <img src={ic_close} />
        </button>
      )}
    </div>
  );
}
