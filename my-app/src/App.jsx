// App.tsx
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import MarketPage from './pages/MarketPage';
import AddItemPage from './pages/AddItems'; 
import Layout from './components/common/Layout'; 

function App() {
  return (
    <BrowserRouter>
      <Layout> {/* 공통 레이아웃 (Header 포함) */}
        <Routes>
          <Route path="/items" element={<MarketPage />} />
          <Route path="/additem" element={<AddItemPage />} />
          {/* 기타 경로 */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
