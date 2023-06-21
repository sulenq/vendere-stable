// import { useReducer, useState, useEffect, createContext } from 'react';

// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { Nav, TopBar } from '../myComponents';
import { useWidthResizeListener } from '../utils.js';

import { VStack, HStack } from '@chakra-ui/react';

export default function AdminDebts() {
  // Page Utils
  const screenWidth = useWidthResizeListener();

  return (
    <HStack
      id={'appContainer'}
      spacing={null}
      h={'100vh'}
      pb={screenWidth < 1200 ? '40px' : null}
    >
      <Nav />
      <VStack spacing={null} w={'100%'} h={'100%'}>
        <TopBar />
        <HStack
          spacing={null}
          h={'100%'}
          w={'100%'}
          alignItems={'flex-start'}
          overflow={'auto'}
        >
          <p>DEBTS PAGE</p>
        </HStack>
      </VStack>
    </HStack>
  );
}
