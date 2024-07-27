import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Good from './pages/Good';
import Bad from './pages/Bad';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Good /> },
      { path: '/good', element: <Good /> },
      { path: '/bad', element: <Bad /> },
    ],
  },
]);

export default router;
