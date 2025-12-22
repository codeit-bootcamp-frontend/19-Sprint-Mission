import { forwardRef, ReactNode } from "react";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  as?: React.ElementType;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as = "button",
      children,
      variant = "primary",
      size = "md",
      fullWidth,
      leftIcon,
      rightIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    const Component = as;

    const baseStyles = `
      inline-flex items-center justify-center font-medium transition
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants: Record<string, string> = {
      primary: "bg-primary-200 text-white hover:bg-blue-700",
      secondary: "bg-gray-400 text-gray-100 hover:bg-gray-300",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
      danger: "bg-red-500 text-white hover:bg-red-600",
    };

    const sizes: Record<string, string> = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <Component
        ref={ref}
        className={`
          ${baseStyles}
          ${variants[variant as string] || variants.primary}
          ${sizes[size as string] || sizes.md}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;