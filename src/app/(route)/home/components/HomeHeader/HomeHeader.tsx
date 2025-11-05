import LinkButton from "@/components/Button/wrappers/LinkButton";
import Image from "next/image";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className="mx-auto flex max-w-[1520px] items-center justify-between border-b border-[#DFDFDF] px-[24px] py-[10px]">
      <div className="flex items-center gap-8">
        <LinkButton href="/" variant="ghost" className="m-0 p-0">
          <picture>
            <source media="(max-width: 375px)" srcSet="/images/logo_mobile.png" />
            <Image src="/images/logo.png" alt="logo" width={153} height={51} />
          </picture>
        </LinkButton>
      </div>
      <div>
        <LinkButton href="/items" size="lg">
          로그인
        </LinkButton>
      </div>
    </div>
  );
};

export default HomeHeader;
