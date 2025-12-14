export default function TodoListContainer({ children }: { children: React.ReactNode }) {
  return <ul className='mt-[16px] flex flex-col gap-[16px]'>{children}</ul>;
}
