import { Outlet } from "react-router-dom";
import Header from "../Header";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
