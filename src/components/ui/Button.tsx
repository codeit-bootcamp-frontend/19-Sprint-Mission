import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { styled } from "styled-components";

// props 타입설정
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant?: "primary";
}

// 화살표 함수로 마이그레이션까지 완료
const Button = ({
  children,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled $variant={variant} type={type} {...props}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{ $variant: "primary" }>`
  display: flex;
  height: 42px;
  padding: 12px 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary100};
  color: white;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary300};
  }
`;

export default Button;
