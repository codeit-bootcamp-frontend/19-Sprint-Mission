import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'w-full rounded-md border transition-colors outline-none disabled:bg-gray-100 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus:border-blue-500',
        error: 'border-red-500 focus:border-red-500',
        success: 'border-green-500 focus:border-green-500',
        ghost: 'border-transparent bg-gray-100 focus:bg-white',
      },
      size: {
        sm: 'h-8 px-2 text-sm',
        md: 'h-10 px-3 text-base',
        lg: 'h-12 px-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);
