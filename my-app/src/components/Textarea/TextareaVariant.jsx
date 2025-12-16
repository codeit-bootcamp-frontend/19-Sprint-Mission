import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  'w-full rounded-md border outline-none transition-colors resize-none',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus:border-blue-500',
        secondary: 'border-gray-200 bg-gray-50 focus:border-gray-400',
        error: 'border-red-500 focus:border-red-500',
      },
      size: {
        sm: 'min-h-[80px] text-sm p-2',
        md: 'min-h-[120px] text-base p-3',
        lg: 'min-h-[282px] text-lg p-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);
