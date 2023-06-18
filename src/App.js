import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from './Theme/myTheme.js';

import './style.css';
import LandingPage from './Routes/LandingPage';
import AdminProducts from './Routes/AdminProducts.jsx';

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const AdminEndPoint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/products');
    }
  }, [navigate, location]);
};

const CashierEndPoint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/cashier') {
      navigate('/cashier/cashiering');
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
          <Route path={'/cashier'} element={<CashierEndPoint />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
