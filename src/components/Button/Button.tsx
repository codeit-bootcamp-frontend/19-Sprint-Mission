import clsx from "clsx";
import { tv } from "tailwind-variants";
import React from "react";

const styles = tv({
  base: "flex justify-center items-center cursor-pointer",
  variants: {
    variant: {
      primary: "bg-[#3692FF] text-white hover:bg-blue-500",
      outlined: "bg-white text-gray600 border border-gray200",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md", // 6px
      lg: "rounded-lg", // 8px
      full: "rounded-full",
    },
    size: {
      sm: "w-32 h-12",
      md: "w-40",
      lg: "w-48",
      full: "w-full h-14",
    },
  },
});

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "primary" | "outlined";
  radius?: "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg" | "full";
}

const Button = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  radius = "lg",
  size = "sm",
}: ButtonProps) => {
  const classes = styles({
    variant,
    radius,
    size,
  });

  return (
    <button onClick={onClick} className={clsx(classes, className)}>
      {children}
    </button>
  );
};

export default Button;
