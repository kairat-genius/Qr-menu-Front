import { Route, Routes } from 'react-router-dom';
import Sign from './pages/Sign/Sign';
// import { useURL } from './hooks/useURL';

function App() {
  return (
    <Routes>
      <Route path="/" element={'Hello'}>
        <Route index element={<Sign />} />
        <Route path="/home" element={'World'} />
      </Route>
    </Routes>
  );
}

export default App;
