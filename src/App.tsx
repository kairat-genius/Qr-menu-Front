import { Route, Routes } from 'react-router-dom';
import Sign from './pages/Sign/Sign';
import Dashboard from './layouts/Dashboard/Dashboard';
// import { useURL } from './hooks/useURL';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Sign />} />
        <Route path="/home" element={'Hello'} />
      </Route>
    </Routes>
  );
}

export default App;
