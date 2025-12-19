import MainLogo from "../../assets/MainLogo.svg?react";
import Button from "./Button";

const MainHeader = () => {
  return (
    <header className="h-18 border-b">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <MainLogo className="shrink-0" />

        <Button className="rounded-xl whitespace-nowrap">
          로그인
        </Button>
      </div>
    </header>
  );
};

export default MainHeader;
