import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Routes/LandingPage';

import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from './Theme/myTheme.js';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={myTheme}>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
