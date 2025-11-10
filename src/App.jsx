import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <div className="container">
        <Outlet />
      </div>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
