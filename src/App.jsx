import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App({ children }) {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <div className="container">{children}</div>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
