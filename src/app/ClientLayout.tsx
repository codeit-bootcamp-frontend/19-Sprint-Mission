"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import HomeHeader from "./(route)/home/components/HomeHeader/HomeHeader";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAuth = pathname === "/login" || pathname === "/signup";

  return (
    <>
      {isAuth ? null : isHome ? <HomeHeader /> : <Header currentPath={pathname} />}
      {children}
    </>
  );
};

export default ClientLayout;
