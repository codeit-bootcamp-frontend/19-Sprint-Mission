import type { ComponentPropsWithoutRef } from "react";
import { styled } from "styled-components";

// props 타입설정
// 개선사항: label, error 추가 예정
// (현재는 placeholder로 충분하며, form 연동 시 라벨/에러 표시 추가 예정)
interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Input = (props: InputProps) => {
  return <InputStyled {...props} />;
};

const InputStyled = styled("input")`
  display: flex;
  width: 325px;
  height: 42px;
  padding: 9px 20px 9px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray100};
`;

export default Input;
//테스트
