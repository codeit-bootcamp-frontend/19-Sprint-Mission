import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App.jsx";
import Index from "@/pages/Index";
import ItemPage from "@/pages/List";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import NotFoundPage from "@/pages/NotFoundPage";
import AddItemPage from "@/pages/AddItem";
import "./assets/scss/style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "items", element: <ItemPage /> },
      { path: "additem", element: <AddItemPage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  />
);
