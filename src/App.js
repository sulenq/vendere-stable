import React, { useEffect } from 'react';
import { ChakraProvider, VStack, Text, Link } from '@chakra-ui/react';
import { myTheme } from './Theme/myTheme.js';

import './style.css';
import LandingPage from './Routes/LandingPage';
import AdminProducts from './Routes/AdminProducts';
import AdminDebts from './Routes/AdminDebts';

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link as ReachLink,
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

const NotFound = () => {
  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      fontWeight={'bold'}
      spacing={null}
      justifyContent={'center'}
      textAlign={'center'}
      zIndex={99}
    >
      <Text fontSize={'64px'}>404</Text>
      <Text fontSize={'64px'}>PAGE NOT FOUND</Text>
      <Link
        as={ReachLink}
        to={'/'}
        fontSize={'24px'}
        color={'primary'}
        textDecoration={'underline'}
      >
        Back to Landing Page
      </Link>
    </VStack>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={myTheme}>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
          <Route path={'/admin'} element={<AdminEndPoint />} />
          <Route path={'/admin/products'} element={<AdminProducts />} />
          <Route path={'/admin/debts'} element={<AdminDebts />} />
          <Route path={'/cashier'} element={<CashierEndPoint />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
