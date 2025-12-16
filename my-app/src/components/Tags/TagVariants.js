import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-800',
        primary: 'bg-blue-100 text-blue-700',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-yellow-100 text-yellow-700',
        error: 'bg-red-100 text-red-700',
      },
      removable: {
        true: 'pr-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      removable: true,
    },
  }
);
