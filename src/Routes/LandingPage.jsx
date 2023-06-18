import { ColorModeSwitcher } from '../ColorModeSwitcher.js';
import { useWidthResizeListener } from '../myHooks.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  VStack,
  HStack,
  Text,
  ButtonGroup,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useColorMode,
} from '@chakra-ui/react';

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <Button className={'btn'} h={'67px'} variant={'ghost'} onClick={onOpen}>
        SIGN UP
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className={'modal'}>
          <ModalHeader textAlign={'center'}>
            <Text>Signing Up</Text>
            <Text fontSize={'sm'} fontWeight={'normal'}>
              Create admin account for your shop!
            </Text>
          </ModalHeader>
          <ModalBody py={'24px'}>
            <VStack spacing={'16px'}>
              <Input className={'input'} placeholder={'Shop Name'} />
              <Input className={'input'} placeholder={'E-mail'} />
              <Input
                className={'input'}
                type={'password'}
                placeholder={'Password'}
              />
              <Input
                className={'input'}
                type={'password'}
                placeholder={'Confirm Password '}
              />
            </VStack>
            <VStack
              alignItems={'flex-start'}
              py={'8px'}
              color={colorMode === 'light' ? 'red' : 'red.300'}
            >
              <Text fontSize={'sm'}>*shop name is required</Text>
              <Text fontSize={'sm'}>*e-mail is required</Text>
              <Text fontSize={'sm'}>*password is required</Text>
              <Text fontSize={'sm'}>*confirm password didn't match</Text>
            </VStack>
          </ModalBody>
          <ModalFooter p={'0'} h={'50px'}>
            <Button w={'50%'} h={'inherit'} className={'btn'} onClick={onClose}>
              CLOSE
            </Button>
            <Button
              w={'50%'}
              h={'inherit'}
              className={'btn primaryBtn'}
              onClick={onClose}
            >
              SIGN UP
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const SignIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [signInData, setSignInData] = useState({
    role: 'admin',
    kredential: '',
    password: '',
  });
  const navigate = useNavigate();

  return (
    <>
      <Button className={'btn primaryBtn'} h={'67px'} onClick={onOpen}>
        SIGN IN
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className={'modal'}>
          <ModalHeader textAlign={'center'}>
            <Text>Let's Gooo</Text>
            <Text fontSize={'sm'} fontWeight={'normal'}>
              Let's do some work!
            </Text>
          </ModalHeader>
          <ModalBody py={'24px'}>
            <VStack spacing={'16px'}>
              <HStack
                spacing={null}
                w={'100%'}
                border={'1px solid var(--divider)'}
                h={'40px'}
                cursor={'pointer'}
              >
                <HStack
                  onClick={() => {
                    setSignInData({ ...signInData, role: 'admin' });
                  }}
                  w={'50%'}
                  h={'inherit'}
                  bg={signInData?.role === 'admin' ? 'gray.500' : null}
                  color={signInData?.role === 'admin' ? 'white' : null}
                >
                  <Text w={'100%'} textAlign={'center'}>
                    Admin
                  </Text>
                </HStack>
                <HStack
                  onClick={() => {
                    setSignInData({ ...signInData, role: 'cashier' });
                  }}
                  w={'50%'}
                  h={'inherit'}
                  bg={signInData?.role === 'cashier' ? 'gray.500' : null}
                  color={signInData?.role === 'cashier' ? 'white' : null}
                >
                  <Text w={'100%'} textAlign={'center'}>
                    Cashier
                  </Text>
                </HStack>
              </HStack>
              <Input className={'input'} placeholder={'E-mail'} />
              <Input
                className={'input'}
                type={'password'}
                placeholder={'Password'}
              />
            </VStack>

            <VStack
              alignItems={'flex-start'}
              py={'8px'}
              color={colorMode === 'light' ? 'red' : 'red.300'}
            >
              <Text fontSize={'sm'}>*e-mail required</Text>
              <Text fontSize={'sm'}>*password required</Text>
            </VStack>
          </ModalBody>
          <ModalFooter p={'0'} h={'50px'}>
            <Button w={'50%'} h={'inherit'} className={'btn'} onClick={onClose}>
              CLOSE
            </Button>
            <Button
              w={'50%'}
              h={'inherit'}
              className={'btn primaryBtn'}
              onClick={() => {
                navigate('/admin');
              }}
            >
              SIGN IN
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Header = () => {
  const screenWidth = useWidthResizeListener;

  return (
    <HStack className={'wrapper'}>
      <HStack className={'container'}>
        <HStack spacing={null} w={'100%'} justifyContent={'space-between'}>
          {screenWidth < 1200 ? (
            <VStack
              spacing={null}
              alignItems={'flex-start'}
              py={'8px'}
              px={'24px'}
            >
              <Image src={'./logo.png'} w={'32px'} />
            </VStack>
          ) : (
            <VStack
              spacing={null}
              alignItems={'flex-start'}
              py={'8px'}
              px={'24px'}
            >
              <HStack>
                <Image src={'./logo.png'} w={'16px'} />
                <Text color={'primary'} fontSize={'20px'} fontWeight={'bold'}>
                  {'V E N D E R E'}
                </Text>
              </HStack>
              <Text fontSize={'sm'}>#pakaiVENDEREoke</Text>
            </VStack>
          )}

          <ButtonGroup spacing={null}>
            <ColorModeSwitcher h={'67px'} w={'67px'} />
            <SignUp />
            <SignIn />
          </ButtonGroup>
        </HStack>
      </HStack>
    </HStack>
  );
};

const Body = () => {
  return (
    <VStack
      className={'container'}
      px={'24px'}
      h={'inherit'}
      justifyContent={'center'}
    >
      <Text
        fontSize={'xxx-large'}
        textAlign={'center'}
        fontWeight={'bold'}
        lineHeight={'3.75rem'}
      >
        Responsive, powerful system to{' '}
        <span style={{ color: 'var(--primary)' }}>grow your bussiness</span>
      </Text>
    </VStack>
  );
};

function LandingPage() {
  return (
    <VStack id={'mainContainer'}>
      <VStack h={'100vh'} w={'100%'}>
        <Header />
        <Body />
      </VStack>
    </VStack>
  );
}

export default LandingPage;
