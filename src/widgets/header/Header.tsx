import Logo from '@/shared/ui/logo/Logo';

export default function Header() {
  return (
    <header className='flex h-[60px] items-center border-b border-slate-200 bg-white px-[16px]'>
      <div className='container'>
        <Logo />
      </div>
    </header>
  );
}
