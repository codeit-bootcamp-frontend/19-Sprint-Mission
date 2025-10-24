import { clsx } from 'clsx';
import { tv } from 'tailwind-variants';
import React, { HTMLAttributes } from 'react';
import IC_Search from '@/components/icons/ic_search.svg';

const inputStyles = tv({
  base: 'flex items-center bg-gray-100 text-[16px] placeholder:text-gray-400 w-[325px] h-[42px] pl-10 focus:outline-none focus:border focus:border-gray-800',
  variants: {
    variant: {
      primary: '',
      secondary: '',
    },
    radius: {
      md:'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    }
  },
});

interface SearchInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  value: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary';
  radius?: 'md' | 'lg' | 'full';
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e:React.FormEvent) => void;  // 이건 왜 HTMLFormElement 안받지
};

const SearchInput = ({
  className,
  value,
  placeholder='검색할 상품을 입력해주세요',
  variant='primary',
  radius='md',
  onChange,
  onSubmit,
}:SearchInputProps) => {
  const inputClass = inputStyles({ variant, radius });
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form onSubmit={handleSubmit} className={clsx(className,'relative inline-block')}>
      <div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>
        <IC_Search/>
      </div>
      <input
        className={inputClass}
        value = {value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </form>
  )
}

export default SearchInput;