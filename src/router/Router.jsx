import { BrowserRouter, Route, Routes } from 'react-router';
import AddItem from '@/page/AddItem';
import Home from '@/page/Home';
import Items from '@/page/Items';
import Login from '@/page/Login';
import Signup from '@/page/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
