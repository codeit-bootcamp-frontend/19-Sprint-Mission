import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import MarketPage from "./pages/MarketPage";
import AddItemPage from "./pages/AddItems";
import ItemDetailPage from "./pages/ItemDetailPage";
import MainPage from "./pages/mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout을 사용하지 않는 페이지 */}
        <Route path="/" element={<MainPage />} />

        {/* Layout을 사용하는 페이지들 */}
        <Route element={<Layout />}>
          <Route path="/items" element={<MarketPage />} />
          <Route path="/additem" element={<AddItemPage />} />
          <Route path="/items/:productId" element={<ItemDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
