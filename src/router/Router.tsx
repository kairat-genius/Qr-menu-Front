import { Route, Routes } from 'react-router-dom';
// import { useURL } from '@/hooks/useURL';
import Dashboard from '@/hoc/loyouts/Dashboard/Dashboard';
import Auth from '@/pages/Auth/Auth';
import { lazy } from 'react';

const Menu = lazy(() => import('@/pages/Menu/Menu'));
const Home = lazy(() => import('@/pages/Home/Home'));
const Support = lazy(() => import('@/pages/Support/Support'));
const Tables = lazy(() => import('@/pages/Tables/Tables'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default Router;
