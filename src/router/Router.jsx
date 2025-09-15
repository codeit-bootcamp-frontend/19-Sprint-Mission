import { BrowserRouter, Route, Routes } from 'react-router';
import AddItem from '@/pages/AddItem';
import Home from '@/pages/Home';
import Items from '@/pages/Items';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

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
