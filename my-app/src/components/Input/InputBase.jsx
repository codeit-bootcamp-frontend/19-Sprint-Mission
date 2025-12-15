import clsx from 'clsx';

export default function InputBase({ icon, children }) {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
      {children}
    </div>
  );
}
