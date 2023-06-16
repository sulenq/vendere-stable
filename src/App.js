import React, { useEffect } from 'react';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import LandingPage from './Routes/LandingPage';
import AdminProducts from './Routes/AdminProducts.jsx';

import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from './Theme/myTheme.js';

const AdminEndPoint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/products');
    }
  }, [navigate, location]);
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={myTheme}>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
          <Route path={'/admin'} element={<AdminEndPoint />} />
          <Route path={'/admin/products'} element={<AdminProducts />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
