import { forwardRef } from "react";
import clsx from "clsx";
import { textareaVariants } from "./TextareaVariant";

const Textarea = forwardRef(({ variant, size, className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(textareaVariants({ variant, size }), className)}
      {...props}
    />
  );
});

export default Textarea;
