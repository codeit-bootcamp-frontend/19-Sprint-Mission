import { cva } from 'class-variance-authority';
import Icons from '@/shared/assets/icons';
import { cn } from '@/shared/lib/cn';

const buttonStyles = cva(
  `flex cursor-pointer items-center justify-center gap-[4px] border-style
  min-w-[56px] sm:w-[168px]
  disabled:bg-slate-200 disabled:cursor-default disabled:text-slate-900`,
  {
    variants: {
      theme: {
        add: 'bg-violet-600 text-white',
        delete: 'bg-rose-500 text-white',
        edit: 'bg-lime-300 text-slate-900',
      },
    },
  }
);

type ButtonTheme = 'add' | 'delete' | 'edit';

interface ButtonProps extends React.ComponentProps<'button'> {
  theme: ButtonTheme;
}

const renderIcon = (theme: ButtonTheme) => {
  switch (theme) {
    case 'add':
      return <Icons.PlusIcon width={16} height={16} />;
    case 'delete':
      return <Icons.CloseIcon width={16} height={16} />;
    case 'edit':
      return <Icons.CheckIcon width={16} height={16} />;
  }
};

export default function Button({
  children,
  theme,
  type = 'button',
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ theme }), className)}
      disabled={disabled}
      {...props}>
      {renderIcon(theme)}
      <span className='sr-only font-md-b sm:not-sr-only'>{children}</span>
    </button>
  );
}
