import "./App.css";
import "./assets/css/global.scss";
import { Route, Routes } from "react-router-dom";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Layout from "@/layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"/items"} element={<Items />} />
          <Route path={"/additem"} element={<AddItem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
