import style from "./Button.module.css";

const Button = ({ variantButton, name, onClick }) => {
  return (
    <button
      className={`${style.button} ${variantButton}`}
      children={name}
      onClick={onClick}
    ></button>
  );
};

export default Button;
