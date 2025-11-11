import style from "./Button.module.css";

const Button = ({ variantButton, name }) => {
  return (
    <button
      className={`${style.button} ${variantButton}`}
      children={name}
    ></button>
  );
};

export default Button;
