import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import React from 'react';

const styles = tv({
  base: 'flex justify-center items-center px-[23px] py-3 h-[42px] h-[42px] cursor-pointer',
  variants: {
    variant: {
      primary:'bg-[#3692FF] text-white hover:bg-blue-500',
      outlined:'bg-white text-gray600 border border-gray200',
    },
    radius: {
      sm:'rounded-sm',
      md:'rounded-md',
      lg:'rounded-lg',
      full:'rounded-full',
    }
  }
})

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: 'primary' | 'outlined';
  radius?: 'sm' | 'md' | 'lg' | 'full';
}

const Button = ({
  onClick,
  children,
  className='',
  variant='primary',
  radius = 'lg',
}:ButtonProps) => {
  const classes = styles({
    variant,
    radius,
  });
  
  return (
    <button onClick={onClick} className={clsx(className,classes)}>
      {children}
    </button>
  );
}

export default Button;