import clsx from "clsx";
import { tv } from "tailwind-variants";
import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

const styles = tv({
  base: "flex justify-center items-center cursor-pointer transition-all duration-150",
  variants: {
    variant: {
      primary: "bg-[#3692FF] text-white hover:bg-blue-500",
      outlined: "bg-white text-gray600 border border-gray200 hover:bg-gray100",
      ghost: "bg-transparent text-gray600 hover:scale-[1.02]",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md", // 6px
      lg: "rounded-lg", // 8px
      full: "rounded-full",
    },
    size: {
      sm: "w-10 h-10",
      md: "px-[23px] h-[42px]",
      lg: "px-[23px]  h-12",
      full: "w-full h-14",
    },
  },
});

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "chidren" | "onClick"> {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  radius?: "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg" | "full";
  variant?: "primary" | "outlined" | "ghost";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    asChild = false,
    children,
    className,
    disabled = false,
    radius = "lg",
    size = "md",
    variant = "primary",
    onClick,
    ...rest
  },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  const classes = styles({
    variant,
    radius,
    size,
  });

  return (
    <Comp
      ref={ref}
      className={clsx(classes, className)}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Comp>
  );
});

export default Button;
