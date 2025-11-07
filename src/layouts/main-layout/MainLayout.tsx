import Header from "@/layouts/main-layout/components/header/Header";
import LoginMenu from "@/layouts/main-layout/components/header/LoginMenu";
import MainMenu from "@/layouts/main-layout/components/header/MainMenu";
import Logo from "@/components/ui/Logo";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header>
        <Logo />
        <MainMenu />
        <LoginMenu />
      </Header>
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
