import clsx from "clsx";
import { tv } from "tailwind-variants";
import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

const styles = tv({
  base: "flex cursor-pointer items-center justify-center transition-all duration-150",
  variants: {
    variant: {
      primary: "bg-[#3692FF] text-white hover:bg-blue-500",
      outlined: "text-gray600 border-gray200 hover:bg-gray100 border bg-white",
      ghost: "text-gray600 bg-transparent hover:scale-[1.02]",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md", // 6px
      lg: "rounded-lg", // 8px
      full: "rounded-full",
    },
    size: {
      xs: "h-6 w-6",
      sm: "h-10 w-10",
      md: "h-[42px] px-[23px]",
      lg: "h-12 px-[23px]",
      full: "h-14 w-full",
    },
    disabled: {
      true: "bg-gray400 hover:bg-gray400 cursor-not-allowed",
      false: "",
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
  size?: "xs" | "sm" | "md" | "lg" | "full";
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
    disabled,
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
