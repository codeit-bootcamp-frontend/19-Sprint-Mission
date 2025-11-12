/**
 * 공용 버튼 컴포넌트
 *
 * @component
 * @param {string} variantButton - 버튼의 추가 스타일 클래스 (예: 색상, 크기 등)
 * @param {string|ReactNode} name - 버튼 안에 표시될 텍스트 또는 요소
 * @param {function} onClick - 버튼 클릭 시 실행될 함수
 *
 * @example
 * <Button
 *   variantButton={style.primary}
 *   name="등록하기"
 *   onClick={() => console.log("clicked")}
 * />
 */

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
