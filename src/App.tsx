import { Route, Routes } from 'react-router-dom';
import Sign from '@/pages/Sign/Sign';
import Dashboard from '@/layouts/Dashboard/Dashboard';
import { lazy } from 'react';
// import { useURL } from './hooks/useURL';

const Home = lazy(() => import('@/pages/Home/Home'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Sign />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
