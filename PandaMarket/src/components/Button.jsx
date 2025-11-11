import style from "./Button.module.css";

const Button = ({ variantButton }) => {
  return (
    <button className={`${style.button} ${variantButton}`}>
      상품 등록하기
    </button>
  );
};

export default Button;
