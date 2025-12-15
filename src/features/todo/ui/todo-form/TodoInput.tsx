interface TodoInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoInput({ value, onChange }: TodoInputProps) {
  return (
    <input
      type='text'
      className='w-full border-style bg-slate-100 px-[24px] text-slate-900 placeholder:text-slate-500'
      placeholder='할 일을 입력해주세요'
      value={value}
      onChange={onChange}
    />
  );
}
