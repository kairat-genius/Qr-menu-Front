import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
