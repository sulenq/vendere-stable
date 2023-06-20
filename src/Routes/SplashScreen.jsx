import { VStack, Text } from '@chakra-ui/react';

function SplashScreen() {
  return (
    <VStack
      h={'100vh'}
      w={'100%'}
      position={'fixed'}
      top={0}
      left={0}
      justifyContent={'center'}
      bg={'red'}
      zIndex={99}
    >
      <Text fontSize={'5rem'} fontWeight={'bold'} color={'white'}>
        PDI ANJING
      </Text>
    </VStack>
  );
}

export default SplashScreen;
