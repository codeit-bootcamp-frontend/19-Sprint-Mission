import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const baseStyle = "flex justify-between items-center py-[10px] px-[24px] mx-auto max-w-[1520px] border-b border-[var(--gray600)]";
  const leftStyle = "flex items-center gap-8";

  return(
    <header className={baseStyle}>
      <div className={leftStyle}>
        <Link href='/'>
          <picture>
            <source media="(max-width: 375px)" srcSet="/images/logo_mobile.png"/>
            <Image src="/images/logo.png" alt="logo" width={153} height={51}/>
          </picture>
        </Link>
        <nav className='flex gap-[30px]'>
          <Link href='/items'>자유게시판</Link>
          <Link href='/items'>중고마켓</Link>
        </nav>
      </div>
      <div>
        <Link href='/items'>
          <img className="logo" src="images/ic_profile.png" alt="logo"/>
        </Link>
      </div>
    </header>
  )
}

export default Header;