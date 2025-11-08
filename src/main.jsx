import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@/App.jsx";
import Index from "@/pages/Index/Index.jsx";
import ItemPage from "@/pages/List/index.jsx";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import "./assets/css/style.scss";

createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <App>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="ItemPage" element={<ItemPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </App>
  </BrowserRouter>
);
