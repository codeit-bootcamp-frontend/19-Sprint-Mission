import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from '@/layouts/mainLayout/MainLayout';
import AddItem from '@/pages/AddItem';
import Boards from '@/pages/Boards';
import DetailItem from '@/pages/DetailItem';
import Home from '@/pages/Home';
import Items from '@/pages/Items';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path="/boards" element={<Boards />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/items">
            <Route index element={<Items />} />
            <Route path=":id" element={<DetailItem />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
