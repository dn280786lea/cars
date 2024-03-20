import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../Page/Home/Home'));
const Catalog = lazy(() => import('../Page/Catalog/Catalog'));
const Favorite = lazy(() => import('../Page/Favorite/Favorite'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
