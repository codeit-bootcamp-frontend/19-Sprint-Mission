import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <h1 className='w-fit'>
      <Link href='/'>
        <Image src='/logo/logo.svg' alt='do it 로고' width={151} height={40} loading='eager' />
      </Link>
    </h1>
  );
}
