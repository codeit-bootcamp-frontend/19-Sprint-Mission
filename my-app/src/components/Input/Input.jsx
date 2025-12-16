import { inputVariants } from "./InputVariants";
import clsx from "clsx";

const Input = ({ variant, size, className, ref, ...props }) => {
  return (
    <input
      ref={ref}
      className={clsx(inputVariants({ variant, size }), className)}
      {...props}
    />
  );
};

Input.displayName = "Input";
export default Input;
