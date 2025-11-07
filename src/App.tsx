import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/main-layout/MainLayout";
import Home from "@/pages/home/Home";
import ProductListPage from "@/pages/product/pages/ProductListPage";
import GlobalStyle from "@/styles/Globalstyle.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/items" element={<ProductListPage />}></Route>
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
