import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Items from './page/items';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/items" element={<Items />}></Route>
      </Routes>
    </>
  );
}

export default App;
