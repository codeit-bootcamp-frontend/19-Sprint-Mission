import { forwardRef } from "react";
import SearchIcon from "../../assets/ic_search.svg?react";

const Input = forwardRef(
  ({ label, error, className = "", fullWidth, icon, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : ""}`}>
        {/* Label */}
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}

        {/* Wrapper with icon */}
        <div className="relative">
          {/* input */}
          <input
            ref={ref}
            className={`
              bg-gray-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 h-[42px] text-sm outline-none transition w-full
              focus:border-blue-500 focus:ring-2 focus:ring-blue-100
              ${error ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}
              ${className}
            `}
            {...props}
          />

          {/* Icon */}
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </span>
          )}
        </div>

        {/* Error */}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

export default Input;
