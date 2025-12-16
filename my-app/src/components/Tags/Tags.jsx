import clsx from "clsx";
import { tagVariants } from "./TagVariants";

export default function Tag({ children, variant, onRemove }) {
  return (
    <span className={tagVariants({ variant })}>
      #{children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 text-current/60 hover:text-current"
        >
          <div className="bg-gray-400 rounded-2xl w-5.5 h-6 text-gray-100">✕</div>
        </button>
      )}
    </span>
  );
}
