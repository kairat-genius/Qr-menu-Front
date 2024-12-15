import { Route, Routes } from 'react-router-dom';
// import { useURL } from '@/hooks/useURL';
import Dashboard from '@/layouts/Dashboard/Dashboard';
import Sign from '@/pages/Sign/Sign';
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/Home'));
const Support = lazy(() => import('@/pages/Support/Support'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Sign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default Router;
