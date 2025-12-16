// App.tsx
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MarketPage from './pages/MarketPage';
import AddItemPage from './pages/AddItems'; 
import Layout from './components/common/Layout'; 
import ItemDetailPage from './pages/ItemDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Layout> {/* 공통 레이아웃 (Header 포함) */}
        <Routes>
          <Route path="/items" element={<MarketPage />} />
          <Route path="/additem" element={<AddItemPage />} />
          <Route path="/items/:productId" element={<ItemDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
