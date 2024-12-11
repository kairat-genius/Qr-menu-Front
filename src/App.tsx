import { Route, Routes } from 'react-router-dom';
import '@/styles/global/App.css';
// import { useURL } from './hooks/useURL';

function App() {
  return (
    <Routes>
      <Route index element={'Hello'} />
      <Route path="/home" element={'World'} />
    </Routes>
  );
}

export default App;
