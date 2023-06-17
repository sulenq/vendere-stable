// import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

import { ColorModeSwitcher } from './ColorModeSwitcher.js';
import {
  useWidthResizeListener,
  useFormatNumber,
  useReverseFormatNumber,
} from './myHooks.js';

import {
  VStack,
  HStack,
  Link,
  Button,
  Text,
  Image,
  Icon,
  Input,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Tooltip,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Wrap,
  WrapItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

const Nav = () => {
  const screenWidth = useWidthResizeListener();
  const currentUrl = useLocation();
  const currentUrlSplitted = currentUrl.pathname.split('/');
  const activeNav = currentUrlSplitted[currentUrlSplitted.length - 1];

  if (screenWidth < 1080) {
    return (
      <HStack className={'navMobile'}>
        <Text>Nav Mobile</Text>
      </HStack>
    );
  } else {
    return (
      <VStack className={'nav'} justifyContent={'space-between'}>
        <Link href={'/'} className={'navIconContainer'}>
          <Image src={'../logo.png'} w={'22px'} />
        </Link>
        <VStack spacing={null}>
          <Tooltip label={'Products'} placement={'right'} openDelay={'500'}>
            <HStack
              className={'navIconContainer'}
              spacing={null}
              bg={activeNav === 'products' ? 'primary' : null}
            >
              <Icon as={Inventory2OutlinedIcon} />
            </HStack>
          </Tooltip>
          <Tooltip label={'Debts'} placement={'right'} openDelay={'500'}>
            <HStack
              className={'navIconContainer'}
              spacing={null}
              bg={activeNav === 'debts' ? 'primary' : null}
            >
              <Icon as={MoneyOffCsredOutlinedIcon} />
            </HStack>
          </Tooltip>
          <Tooltip label={'Expenses'} placement={'right'} openDelay={'500'}>
            <HStack
              className={'navIconContainer'}
              spacing={null}
              bg={activeNav === 'expenses' ? 'primary' : null}
            >
              <Icon as={MonetizationOnOutlinedIcon} />
            </HStack>
          </Tooltip>
          <Tooltip label={'Reports'} placement={'right'} openDelay={'500'}>
            <HStack
              className={'navIconContainer'}
              spacing={null}
              bg={activeNav === 'reports' ? 'primary' : null}
            >
              <Icon as={SummarizeOutlinedIcon} />
            </HStack>
          </Tooltip>
        </VStack>
        <VStack spacing={null}>
          <HStack className={'navIconContainer'} spacing={null}>
            <Icon as={PersonOutlinedIcon} />
          </HStack>
          <HStack className={'navIconContainer'} spacing={null}>
            <Icon as={LogoutOutlinedIcon} />
          </HStack>
        </VStack>
      </VStack>
    );
  }
};

const TopBar = () => {
  const date = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('id-ID', options);

  return (
    <HStack
      w={'100%'}
      justifyContent={'space-between'}
      borderBottom="1px solid var(--divider)"
    >
      <Text px={'16px'}>{formattedDate}</Text>
      <HStack spacing={null}>
        <Button variant={'ghost'} borderRadius={'0 !important'} p={'8px'}>
          <Icon as={RefreshOutlinedIcon} />
        </Button>
        <ColorModeSwitcher ml={'0 !important'} />
      </HStack>
    </HStack>
  );
};

const List = props => {
  const ListFilter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [listData, setListData] = useState({});
    const fn = useFormatNumber;
    const rfn = useReverseFormatNumber;

    function resetFilter() {
      setFilter(filterReset);
    }

    const filterReset = {
      category: [
        { name: 'Foods', isChecked: false },
        { name: 'Drinks', isChecked: false },
        { name: 'Stationery', isChecked: false },
        { name: 'Hygiene', isChecked: false },
        { name: 'Medicine', isChecked: false },
        { name: 'Electronics', isChecked: false },
        { name: 'Cosmetics', isChecked: false },
        { name: 'Other', isChecked: false },
      ],
      supplyLimit: 0,
      priceRange: { min: 0, max: 0 },
      colors: [
        { name: 'Red', isChecked: false },
        { name: 'Blue', isChecked: false },
        { name: 'Green', isChecked: false },
        { name: 'Yellow', isChecked: false },
        { name: 'Purple', isChecked: false },
        { name: 'Orange', isChecked: false },
        { name: 'Black', isChecked: false },
        { name: 'White', isChecked: false },
        { name: 'Gray', isChecked: false },
        { name: 'Brown', isChecked: false },
        { name: 'Pink', isChecked: false },
      ],
    };

    const [filter, setFilter] = useState({
      category: [
        { name: 'Foods', isChecked: false },
        { name: 'Drinks', isChecked: false },
        { name: 'Stationery', isChecked: false },
        { name: 'Hygiene', isChecked: false },
        { name: 'Medicine', isChecked: false },
        { name: 'Electronics', isChecked: false },
        { name: 'Cosmetics', isChecked: false },
        { name: 'Other', isChecked: false },
      ],
      supplyLimit: 0,
      priceRange: { min: 0, max: 0 },
      colors: [
        { name: 'Red', isChecked: false },
        { name: 'Blue', isChecked: false },
        { name: 'Green', isChecked: false },
        { name: 'Yellow', isChecked: false },
        { name: 'Purple', isChecked: false },
        { name: 'Orange', isChecked: false },
        { name: 'Black', isChecked: false },
        { name: 'White', isChecked: false },
        { name: 'Gray', isChecked: false },
        { name: 'Brown', isChecked: false },
        { name: 'Pink', isChecked: false },
      ],
    });

    return (
      <>
        <IconButton
          onClick={onOpen}
          className={'btn'}
          w={'50%'}
          icon={<TuneOutlinedIcon />}
        ></IconButton>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={'inside'}
          isCentered
        >
          <ModalOverlay backdropFilter={'blur(5px)'} />
          <ModalContent className={'modalContent'}>
            <ModalCloseButton className={'closeBtn'} />

            <ModalHeader>
              <VStack alignItems={'flex-start'} spacing={null}>
                <Text>List Filter</Text>
                <Text fontWeight={'normal'} fontSize={'sm'}>
                  Click "APPLY" to apply filter to the list
                </Text>
              </VStack>
            </ModalHeader>

            <ModalBody>
              <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
                {/* Category */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <VStack alignItems={'flex-start'}>
                      {filter?.category.map((c, index) => {
                        return (
                          <Checkbox
                            key={index}
                            isChecked={c.isChecked}
                            onChange={e => {
                              setFilter(prevState => ({
                                ...prevState,
                                category: prevState.category.map(item =>
                                  item.name === c.name
                                    ? { ...item, isChecked: !item.isChecked }
                                    : item
                                ),
                              }));
                            }}
                          >
                            {c.name}
                          </Checkbox>
                        );
                      })}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>

                {/* Supply Limit */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Supply Limit
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Input
                      className={'input'}
                      placeholder={'Supply'}
                      onFocus={e => {
                        e.target.select();
                      }}
                      onChange={e => {
                        setFilter(prevState => ({
                          ...prevState,
                          supplyLimit: parseInt(rfn(e.target.value)),
                        }));
                      }}
                      value={fn(filter?.supplyLimit)}
                    />
                    <Text fontSize={'sm'} ml={'4px'} opacity={'0.5'}>
                      Displays items with lower supply than the value above
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                {/* Price Range */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Price Range
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <HStack spacing={null}>
                      <Input
                        className={'input'}
                        onFocus={e => {
                          e.target.select();
                        }}
                        onChange={e => {
                          setFilter(prevState => ({
                            ...prevState,
                            priceRange: {
                              ...prevState.priceRange,
                              min: parseInt(rfn(e.target.value)),
                            },
                          }));
                        }}
                        placeholder={'Min'}
                        value={fn(filter?.priceRange?.min)}
                      />
                      <Input
                        className={'input'}
                        placeholder={'Max'}
                        onFocus={e => {
                          e.target.select();
                        }}
                        onChange={e => {
                          setFilter(prevState => ({
                            ...prevState,
                            priceRange: {
                              ...prevState.priceRange,
                              max: parseInt(rfn(e.target.value)),
                            },
                          }));
                        }}
                        value={fn(filter?.priceRange?.max)}
                      />
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>

                {/* Colors */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Color
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Wrap>
                      {filter?.colors.map((c, index) => {
                        return (
                          <WrapItem
                            key={index}
                            cursor={'pointer'}
                            p={'6px 12px'}
                            border={
                              c.name === 'White' && c.isChecked
                                ? '1px solid black'
                                : '1px solid var(--divider)'
                            }
                            userSelect={'none'}
                            onClick={() => {
                              setFilter(prevState => ({
                                ...prevState,
                                colors: prevState.colors.map(item =>
                                  item.name === c.name
                                    ? { ...item, isChecked: !item.isChecked }
                                    : item
                                ),
                              }));
                            }}
                            bg={
                              c.name === 'Black' && c.isChecked
                                ? 'black'
                                : c.name === 'White' && c.isChecked
                                ? 'white'
                                : c.name === 'Brown' && c.isChecked
                                ? '#b55e12'
                                : c.isChecked
                                ? `${c.name.toLowerCase()}.300`
                                : null
                            }
                            color={
                              c.name === 'White' && c.isChecked
                                ? 'black'
                                : c.isChecked
                                ? 'white'
                                : ''
                            }
                          >
                            <Text>{c.name}</Text>
                          </WrapItem>
                        );
                      })}
                    </Wrap>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </ModalBody>

            <ModalFooter className={'modalFooter'}>
              <Button
                className={'btn'}
                h={'inherit'}
                w={'50%'}
                onClick={resetFilter}
              >
                RESET
              </Button>
              <Button
                className={'btn primary-btn'}
                h={'inherit'}
                w={'50%'}
                onClick={onClose}
              >
                APPLY
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  // function getListData(api) {
  //   const token = '';
  //   axios
  //     .get(api, { Authorization: 'Bearer ' + token })
  //     .then(r => {
  //       console.log(r);
  //     })
  //     .catch(r => {
  //       console.log(r);
  //     });
  // }

  const dummyListData = [
    {
      ID: 20,
      CreatedAt: '2023-02-25T13:55:16.024772+07:00',
      UpdatedAt: '2023-04-04T22:23:04.586542+07:00',
      DeletedAt: null,
      code: '8998866200318',
      name: 'Sedap Ayam Bawang',
      price: 3500,
      stock: 1068,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 14,
      CreatedAt: '2023-02-25T13:54:49.954006+07:00',
      UpdatedAt: '2023-04-04T22:23:51.492394+07:00',
      DeletedAt: null,
      code: '089686010046',
      name: 'Indomie Ayam Spesial',
      price: 3000,
      stock: 1075,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 27,
      CreatedAt: '2023-02-25T13:55:33.968144+07:00',
      UpdatedAt: '2023-06-07T18:37:56.683919+07:00',
      DeletedAt: null,
      code: 'pasir1',
      name: 'Gula Pasir 1kg',
      price: 14500,
      stock: 1071,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 24,
      CreatedAt: '2023-02-25T13:55:26.527913+07:00',
      UpdatedAt: '2023-04-10T14:08:28.68557+07:00',
      DeletedAt: null,
      code: 'ndog1',
      name: 'Telur 1kg',
      price: 27500,
      stock: 1020,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 23,
      CreatedAt: '2023-02-25T13:55:23.750773+07:00',
      UpdatedAt: '2023-04-04T22:23:28.738711+07:00',
      DeletedAt: null,
      code: '8886008101091',
      name: 'Aqua 1500ml | 1.5L (besar)',
      price: 6000,
      stock: 1052,
      user_id: 13,
      modal: 5000,
    },
    {
      ID: 81,
      CreatedAt: '2023-03-27T13:40:18.029857+07:00',
      UpdatedAt: '2023-04-04T22:22:49.504233+07:00',
      DeletedAt: null,
      code: '8993189270338',
      name: 'Charm Extra Maxi Wing 23cm 10 pads',
      price: 9000,
      stock: 1094,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 83,
      CreatedAt: '2023-03-27T13:49:43.208943+07:00',
      UpdatedAt: '2023-04-08T13:37:33.036705+07:00',
      DeletedAt: null,
      code: '899866679572',
      name: 'So Klin Lantai Rose Bouquet',
      price: 15000,
      stock: 1104,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 18,
      CreatedAt: '2023-02-25T13:55:10.24359+07:00',
      UpdatedAt: '2023-04-09T22:41:29.78629+07:00',
      DeletedAt: null,
      code: '8998866203104',
      name: 'Sedap Singapore Spicy Laksa',
      price: 3500,
      stock: 1082,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 28,
      CreatedAt: '2023-02-25T13:55:36.242393+07:00',
      UpdatedAt: '2023-04-04T22:23:11.922641+07:00',
      DeletedAt: null,
      code: 'pasir21',
      name: 'Gula Pasir 1/2kg',
      price: 7500,
      stock: 1085,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 15,
      CreatedAt: '2023-02-25T13:55:02.70239+07:00',
      UpdatedAt: '2023-04-04T22:23:35.07204+07:00',
      DeletedAt: null,
      code: '089686010015',
      name: 'Indomie Ayam Bawang',
      price: 3000,
      stock: 1090,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 29,
      CreatedAt: '2023-02-25T13:55:39.094371+07:00',
      UpdatedAt: '2023-04-04T22:22:52.954591+07:00',
      DeletedAt: null,
      code: 'pasir4',
      name: 'Gula Pasir 1/4kg',
      price: 4000,
      stock: 1086,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 126,
      CreatedAt: '2023-03-27T15:30:00.442364+07:00',
      UpdatedAt: '2023-03-27T15:30:00.442364+07:00',
      DeletedAt: null,
      code: '8992727005272',
      name: 'Attack Jazz1 45g',
      price: 1000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 26,
      CreatedAt: '2023-02-25T13:55:31.463597+07:00',
      UpdatedAt: '2023-03-13T23:38:44.217755+07:00',
      DeletedAt: null,
      code: 'ndog4',
      name: 'Telur 1/4kg',
      price: 7500,
      stock: 45,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 128,
      CreatedAt: '2023-03-27T15:34:34.889227+07:00',
      UpdatedAt: '2023-03-27T15:37:32.615692+07:00',
      DeletedAt: null,
      code: '899999027032',
      name: 'Lifebuoy Sampo Hijau Kuat & Berkilau 9ml',
      price: 500,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 91,
      CreatedAt: '2023-03-27T14:08:50.292408+07:00',
      UpdatedAt: '2023-03-27T14:08:50.292408+07:00',
      DeletedAt: null,
      code: '8994286120045',
      name: 'Dandang Teh Kepyur 40g',
      price: 3500,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 129,
      CreatedAt: '2023-03-27T15:42:35.178394+07:00',
      UpdatedAt: '2023-03-27T15:42:35.178394+07:00',
      DeletedAt: null,
      code: '8999999529833',
      name: 'Clear Sampo Sachet Menthol Segar & Dingin 9ml',
      price: 500,
      stock: 95,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 114,
      CreatedAt: '2023-03-27T14:52:14.979539+07:00',
      UpdatedAt: '2023-03-27T14:52:14.979539+07:00',
      DeletedAt: null,
      code: '899866602563',
      name: 'Nuvo Family Nature Protect 72g',
      price: 3500,
      stock: 100,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 21,
      CreatedAt: '2023-02-25T13:55:18.643331+07:00',
      UpdatedAt: '2023-03-11T17:34:33.191008+07:00',
      DeletedAt: null,
      code: '8998866200301',
      name: 'Sedap Goreng',
      price: 3500,
      stock: 75,
      user_id: 13,
      modal: 3000,
    },
    {
      ID: 90,
      CreatedAt: '2023-03-27T14:05:51.741856+07:00',
      UpdatedAt: '2023-03-27T14:05:51.741856+07:00',
      DeletedAt: null,
      code: '8997033700415',
      name: 'Poci Teh Kepyur 40g',
      price: 3500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 130,
      CreatedAt: '2023-03-27T15:46:50.192813+07:00',
      UpdatedAt: '2023-03-27T15:47:22.643828+07:00',
      DeletedAt: null,
      code: '8992772311014',
      name: 'Soffel Jeruk 6g',
      price: 1000,
      stock: 100,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 92,
      CreatedAt: '2023-03-27T14:10:39.801932+07:00',
      UpdatedAt: '2023-03-27T14:10:39.801932+07:00',
      DeletedAt: null,
      code: '8992936214014',
      name: 'Tong Tji Teh Kepyur 40g',
      price: 3500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 124,
      CreatedAt: '2023-03-27T15:27:09.601254+07:00',
      UpdatedAt: '2023-03-27T15:27:09.601254+07:00',
      DeletedAt: null,
      code: '8999999526894',
      name: 'Rinso Cair + Molto Royal Gold 38ml',
      price: 1000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 116,
      CreatedAt: '2023-03-27T14:57:01.83733+07:00',
      UpdatedAt: '2023-03-27T15:08:44.918827+07:00',
      DeletedAt: null,
      code: '8999999036607',
      name: 'Lux Botanicals Soft Rose 75g',
      price: 5000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 89,
      CreatedAt: '2023-03-27T14:02:43.011412+07:00',
      UpdatedAt: '2023-03-27T14:02:43.011412+07:00',
      DeletedAt: null,
      code: '8999999390198',
      name: 'Sunlight Jeruk Nipis 700 ml',
      price: 21000,
      stock: 97,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 30,
      CreatedAt: '2023-02-25T13:55:41.54716+07:00',
      UpdatedAt: '2023-03-12T14:17:24.561682+07:00',
      DeletedAt: null,
      code: 'beras1',
      name: 'Beras Stroberi 1kg',
      price: 12000,
      stock: 27,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 119,
      CreatedAt: '2023-03-27T15:17:02.469685+07:00',
      UpdatedAt: '2023-03-27T15:17:02.469685+07:00',
      DeletedAt: null,
      code: '8990011998880',
      name: 'Sabun Tawon 81g',
      price: 6500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 118,
      CreatedAt: '2023-03-27T15:10:28.234582+07:00',
      UpdatedAt: '2023-03-27T15:14:26.486168+07:00',
      DeletedAt: null,
      code: '8999999036638',
      name: 'Lux Botanicals Velvet Jasmine 75g',
      price: 5000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 96,
      CreatedAt: '2023-03-27T14:19:21.093536+07:00',
      UpdatedAt: '2023-03-27T14:19:21.093536+07:00',
      DeletedAt: null,
      code: '8991002101746',
      name: 'ABC Kopi Mocca 30g',
      price: 1500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 98,
      CreatedAt: '2023-03-27T14:22:58.517334+07:00',
      UpdatedAt: '2023-03-27T14:22:58.517334+07:00',
      DeletedAt: null,
      code: '8991002103238',
      name: 'Good Day Moccacinno 20g',
      price: 1500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 95,
      CreatedAt: '2023-03-27T14:17:18.268016+07:00',
      UpdatedAt: '2023-03-27T14:17:18.268016+07:00',
      DeletedAt: null,
      code: '8991002101630',
      name: 'ABC Kopi Susu 30g',
      price: 1500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 104,
      CreatedAt: '2023-03-27T14:33:39.225271+07:00',
      UpdatedAt: '2023-03-27T14:33:39.225271+07:00',
      DeletedAt: null,
      code: '8992696521797',
      name: 'Milo 22g',
      price: 2500,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 103,
      CreatedAt: '2023-03-27T14:32:31.784459+07:00',
      UpdatedAt: '2023-03-27T14:34:59.850958+07:00',
      DeletedAt: null,
      code: '8992696525054',
      name: 'Dancow Putih 26g',
      price: 4000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 127,
      CreatedAt: '2023-03-27T15:32:41.320966+07:00',
      UpdatedAt: '2023-03-27T15:34:48.941879+07:00',
      DeletedAt: null,
      code: '4902430563871',
      name: 'Pantene Sampo Perawatan Rambut Rontok 5ml',
      price: 500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 141,
      CreatedAt: '2023-03-28T16:10:41.247986+07:00',
      UpdatedAt: '2023-03-28T16:10:41.247986+07:00',
      DeletedAt: null,
      code: '8996001440124',
      name: 'Energen 32g vanilla',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 25,
      CreatedAt: '2023-02-25T13:55:29.086595+07:00',
      UpdatedAt: '2023-03-16T14:05:25.957673+07:00',
      DeletedAt: null,
      code: 'ndog2',
      name: 'Telur 1/2kg',
      price: 14000,
      stock: 94,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 87,
      CreatedAt: '2023-03-27T14:00:18.528133+07:00',
      UpdatedAt: '2023-03-27T14:00:18.528133+07:00',
      DeletedAt: null,
      code: '8999999059781',
      name: 'Sunlight Jeruk Nipis 210ml',
      price: 5500,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 88,
      CreatedAt: '2023-03-27T14:01:51.550514+07:00',
      UpdatedAt: '2023-03-27T17:52:11.320758+07:00',
      DeletedAt: null,
      code: '8999999572303',
      name: 'Sunlight Jeruk Nipis 460 ml',
      price: 10000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 16,
      CreatedAt: '2023-02-25T13:55:05.290012+07:00',
      UpdatedAt: '2023-04-04T22:24:07.554526+07:00',
      DeletedAt: null,
      code: '089686010343',
      name: 'Indomie Soto',
      price: 3000,
      stock: 1069,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 22,
      CreatedAt: '2023-02-25T13:55:21.354785+07:00',
      UpdatedAt: '2023-02-25T13:55:21.354785+07:00',
      DeletedAt: null,
      code: '8886008101053',
      name: 'Aqua 600ml (tanggung)',
      price: 3000,
      stock: 26,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 99,
      CreatedAt: '2023-03-27T14:25:41.448749+07:00',
      UpdatedAt: '2023-03-27T14:25:41.448749+07:00',
      DeletedAt: null,
      code: '8991002103436',
      name: 'Good Day Coolin 20g',
      price: 1500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 101,
      CreatedAt: '2023-03-27T14:28:45.46406+07:00',
      UpdatedAt: '2023-03-27T14:28:45.46406+07:00',
      DeletedAt: null,
      code: '8991002103764',
      name: 'Good Day Cappuccino 25g',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 100,
      CreatedAt: '2023-03-27T14:27:53.630791+07:00',
      UpdatedAt: '2023-03-27T14:28:55.881388+07:00',
      DeletedAt: null,
      code: '8991002103634',
      name: "Good Day Freeze Choc'orange 30g",
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 102,
      CreatedAt: '2023-03-27T14:30:48.126836+07:00',
      UpdatedAt: '2023-03-27T14:30:48.126836+07:00',
      DeletedAt: null,
      code: '8992775913000',
      name: 'Chocolatos Sachet 27g',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 121,
      CreatedAt: '2023-03-27T15:21:37.220082+07:00',
      UpdatedAt: '2023-03-27T15:21:37.220082+07:00',
      DeletedAt: null,
      code: '8999999509811',
      name: 'Wipol Sachet 36ml',
      price: 1000,
      stock: 95,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 105,
      CreatedAt: '2023-03-27T14:38:21.861592+07:00',
      UpdatedAt: '2023-03-27T14:38:21.861592+07:00',
      DeletedAt: null,
      code: '8992946512223',
      name: "Shinzu'i Hana",
      price: 5500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 106,
      CreatedAt: '2023-03-27T14:40:11.894477+07:00',
      UpdatedAt: '2023-03-27T14:40:11.894477+07:00',
      DeletedAt: null,
      code: '8992946512285',
      name: "Shinzu'i Kirei",
      price: 5500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 107,
      CreatedAt: '2023-03-27T14:41:32.96432+07:00',
      UpdatedAt: '2023-03-27T14:41:32.96432+07:00',
      DeletedAt: null,
      code: '8992742370683',
      name: 'Polytex Sabut Spon Regular 1 spon',
      price: 4000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 108,
      CreatedAt: '2023-03-27T14:43:43.097875+07:00',
      UpdatedAt: '2023-03-27T14:43:43.097875+07:00',
      DeletedAt: null,
      code: '8993560025236',
      name: 'Dettol Lasting Fresh 100g',
      price: 6000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 113,
      CreatedAt: '2023-03-27T14:51:18.06874+07:00',
      UpdatedAt: '2023-03-27T14:51:18.06874+07:00',
      DeletedAt: null,
      code: '8998866602556',
      name: 'Nuvo Family Protect 72g',
      price: 3500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 115,
      CreatedAt: '2023-03-27T14:53:43.535121+07:00',
      UpdatedAt: '2023-03-27T14:53:43.535121+07:00',
      DeletedAt: null,
      code: '8998866602549',
      name: 'Nuvo Family Mild Protect 72g',
      price: 3500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 85,
      CreatedAt: '2023-03-27T13:55:32.637197+07:00',
      UpdatedAt: '2023-03-27T15:21:52.704637+07:00',
      DeletedAt: null,
      code: '8999999520885',
      name: 'Wipol isi ulang 410 ml',
      price: 10000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 125,
      CreatedAt: '2023-03-27T15:28:50.050055+07:00',
      UpdatedAt: '2023-03-27T15:30:25.379516+07:00',
      DeletedAt: null,
      code: '8999999558.62 ',
      name: 'Rinso Bubuk  + Molto Classic Refresh 40g',
      price: 1000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 112,
      CreatedAt: '2023-03-27T14:48:38.778046+07:00',
      UpdatedAt: '2023-03-27T15:37:23.073764+07:00',
      DeletedAt: null,
      code: '8999999059316',
      name: 'Lifebuoy Sabun Merah Mild Care 70g',
      price: 4500,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 117,
      CreatedAt: '2023-03-27T14:57:46.893546+07:00',
      UpdatedAt: '2023-03-27T15:37:50.598063+07:00',
      DeletedAt: null,
      code: '8999999059323',
      name: 'Lifebuoy Sabun Kuning Lemon Fresh 70g',
      price: 4500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 111,
      CreatedAt: '2023-03-27T14:47:54.205249+07:00',
      UpdatedAt: '2023-03-27T15:38:00.623957+07:00',
      DeletedAt: null,
      code: '8999999059309',
      name: 'Lifebuoy Sabun Merah Total 10 70g',
      price: 4500,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 120,
      CreatedAt: '2023-03-27T15:20:07.624749+07:00',
      UpdatedAt: '2023-03-27T15:38:17.1116+07:00',
      DeletedAt: null,
      code: '8999999559540',
      name: 'Lifebuoy Sabun Kuning Lemon Fresh isi ulang 90ml',
      price: 5000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 131,
      CreatedAt: '2023-03-27T15:48:08.896721+07:00',
      UpdatedAt: '2023-03-27T15:48:08.896721+07:00',
      DeletedAt: null,
      code: '8992772311014',
      name: 'Soffel Jeruk 6g 3pcs ',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 122,
      CreatedAt: '2023-03-27T15:23:43.450402+07:00',
      UpdatedAt: '2023-03-27T15:48:35.335639+07:00',
      DeletedAt: null,
      code: '8998866603850',
      name: 'So Klin Lantai Citrus Lemon 25ml',
      price: 1000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 123,
      CreatedAt: '2023-03-27T15:25:21.68211+07:00',
      UpdatedAt: '2023-03-27T15:48:53.641484+07:00',
      DeletedAt: null,
      code: '8998866603881',
      name: 'So Klin Lantai Rose Boquet 25ml',
      price: 1000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 132,
      CreatedAt: '2023-03-27T15:49:17.542946+07:00',
      UpdatedAt: '2023-03-27T15:49:17.542946+07:00',
      DeletedAt: null,
      code: '8998866603881',
      name: 'So Klin Lantai Rose Boquet 25ml 3pcs',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 133,
      CreatedAt: '2023-03-27T15:49:51.580398+07:00',
      UpdatedAt: '2023-03-27T15:49:51.580398+07:00',
      DeletedAt: null,
      code: '8998866603850',
      name: 'So Klin Lantai Citrus Lemon 25ml 3pcs',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 136,
      CreatedAt: '2023-03-27T15:54:33.384495+07:00',
      UpdatedAt: '2023-03-27T15:54:33.384495+07:00',
      DeletedAt: null,
      code: '8992772191180',
      name: 'Kispray Amoris 7ml',
      price: 1000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 134,
      CreatedAt: '2023-03-27T15:53:30.830103+07:00',
      UpdatedAt: '2023-03-27T15:55:06.09599+07:00',
      DeletedAt: null,
      code: '8992772191203',
      name: 'Kispray Violet 7ml',
      price: 1000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 137,
      CreatedAt: '2023-03-27T16:40:11.809519+07:00',
      UpdatedAt: '2023-03-27T16:40:11.809519+07:00',
      DeletedAt: null,
      code: '8992772191180',
      name: 'Kispray Amoris 7ml 3ps',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 17,
      CreatedAt: '2023-02-25T13:55:07.605507+07:00',
      UpdatedAt: '2023-03-25T20:51:46.731505+07:00',
      DeletedAt: null,
      code: '089686043433',
      name: 'Indomie Hype Abis Ayam Geprek',
      price: 3000,
      stock: 181,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 82,
      CreatedAt: '2023-03-27T13:47:35.195251+07:00',
      UpdatedAt: '2023-03-27T13:47:35.195251+07:00',
      DeletedAt: null,
      code: '8992727000048',
      name: 'Laurier Active Day X-TRA 8 buah',
      price: 5000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 86,
      CreatedAt: '2023-03-27T13:59:21.574713+07:00',
      UpdatedAt: '2023-03-27T13:59:21.574713+07:00',
      DeletedAt: null,
      code: '8999999050009',
      name: 'Sunlight Jeruk Nipis Ekonomis',
      price: 2000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 135,
      CreatedAt: '2023-03-27T15:53:45.501893+07:00',
      UpdatedAt: '2023-03-31T16:46:19.64642+07:00',
      DeletedAt: null,
      code: '8992772191203',
      name: 'Kispray Violet 3pcs',
      price: 2000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 97,
      CreatedAt: '2023-03-27T14:21:05.958991+07:00',
      UpdatedAt: '2023-03-27T14:21:05.958991+07:00',
      DeletedAt: null,
      code: '8891002103634',
      name: 'Good Day Freeze 30g',
      price: 2000,
      stock: 96,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 93,
      CreatedAt: '2023-03-27T14:11:36.344758+07:00',
      UpdatedAt: '2023-03-27T14:12:33.500383+07:00',
      DeletedAt: null,
      code: '8999999195649',
      name: 'Sariwangi Kotak Teh Celup isi 25',
      price: 6500,
      stock: 97,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 94,
      CreatedAt: '2023-03-27T14:13:40.84138+07:00',
      UpdatedAt: '2023-03-27T14:13:40.84138+07:00',
      DeletedAt: null,
      code: '8886007811113',
      name: 'Poci Kotak Teh Celup isi 25',
      price: 6500,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 84,
      CreatedAt: '2023-03-27T13:53:02.493517+07:00',
      UpdatedAt: '2023-03-27T13:53:02.493517+07:00',
      DeletedAt: null,
      code: '89931892301003',
      name: 'Charm Safe Night 10 Pads',
      price: 10000,
      stock: 96,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 109,
      CreatedAt: '2023-03-27T14:44:08.117572+07:00',
      UpdatedAt: '2023-03-27T14:44:08.117572+07:00',
      DeletedAt: null,
      code: '8993560025227',
      name: 'Detol Cool 100g',
      price: 6000,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 110,
      CreatedAt: '2023-03-27T14:46:28.450156+07:00',
      UpdatedAt: '2023-03-27T14:46:28.450156+07:00',
      DeletedAt: null,
      code: '8998866608305',
      name: 'Giv White 72g',
      price: 3500,
      stock: 98,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 11,
      CreatedAt: '2023-02-25T13:53:25.749265+07:00',
      UpdatedAt: '2023-03-22T21:36:24.489331+07:00',
      DeletedAt: null,
      code: '089686010947',
      name: 'Indomie Goreng',
      price: 3500,
      stock: 117,
      user_id: 13,
      modal: 3050,
    },
    {
      ID: 19,
      CreatedAt: '2023-02-25T13:55:13.255471+07:00',
      UpdatedAt: '2023-02-25T13:55:13.255471+07:00',
      DeletedAt: null,
      code: '8998866200578',
      name: 'Sedap Kari Spesial',
      price: 3500,
      stock: 82,
      user_id: 13,
      modal: 1000,
    },
    {
      ID: 138,
      CreatedAt: '2023-03-28T16:04:34.662477+07:00',
      UpdatedAt: '2023-03-28T16:04:34.662477+07:00',
      DeletedAt: null,
      code: '8996001302323',
      name: 'Malkist Abon 105g',
      price: 7500,
      stock: 999,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 139,
      CreatedAt: '2023-03-28T16:06:28.121317+07:00',
      UpdatedAt: '2023-03-28T16:06:28.121317+07:00',
      DeletedAt: null,
      code: '8996001302026',
      name: 'Malkist Crackers 135g',
      price: 6500,
      stock: 999,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 140,
      CreatedAt: '2023-03-28T16:09:08.851585+07:00',
      UpdatedAt: '2023-03-28T16:09:08.851585+07:00',
      DeletedAt: null,
      code: '8888166336568',
      name: 'Nissin Crispy Crackers 250g',
      price: 11000,
      stock: 999,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 142,
      CreatedAt: '2023-03-28T16:15:14.571456+07:00',
      UpdatedAt: '2023-03-28T16:15:14.571456+07:00',
      DeletedAt: null,
      code: '8996001440049',
      name: 'Energen Cokelat 34gr',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 143,
      CreatedAt: '2023-03-28T16:16:51.03475+07:00',
      UpdatedAt: '2023-03-28T16:16:51.03475+07:00',
      DeletedAt: null,
      code: '8996001440087',
      name: 'Energen Kacang Hijau 34g',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 144,
      CreatedAt: '2023-03-28T16:17:56.901621+07:00',
      UpdatedAt: '2023-03-28T16:17:56.901621+07:00',
      DeletedAt: null,
      code: '8996001603376',
      name: 'Energen Kurma 30g',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 145,
      CreatedAt: '2023-03-28T16:20:47.334704+07:00',
      UpdatedAt: '2023-03-28T16:20:47.334704+07:00',
      DeletedAt: null,
      code: '8991002103931',
      name: 'Drink Beng-Beng 30g',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 146,
      CreatedAt: '2023-03-28T16:26:46.145028+07:00',
      UpdatedAt: '2023-03-28T16:26:46.145028+07:00',
      DeletedAt: null,
      code: '8991002103931',
      name: 'GoodDay Carebiannut 20g',
      price: 1500,
      stock: 1499,
      user_id: 13,
      modal: 0,
    },
    {
      ID: 12,
      CreatedAt: '2023-02-25T13:54:40.743465+07:00',
      UpdatedAt: '2023-03-05T10:18:03.580427+07:00',
      DeletedAt: null,
      code: '089686910704',
      name: 'Indomie Goreng Rendang',
      price: 3500,
      stock: 57,
      user_id: 13,
      modal: 3000,
    },
  ];

  return (
    <VStack w={'100%'} spacing={null} overflow={'auto'}>
      <HStack id={'listSearch'} w={'100%'} spacing={null}>
        <Input
          className={'input'}
          placeholder="Search"
          border={'none'}
          borderBottom={'1px solid var(--divider)'}
        />
        <HStack w={'120px !important'} spacing={null}>
          <IconButton
            className={'btn'}
            borderRight={'1px solid var(--divider)'}
            w={'50%'}
            icon={<SearchOutlinedIcon />}
          ></IconButton>
          <ListFilter />
        </HStack>
      </HStack>
      <VStack w={'100%'} overflow={'auto'}>
        <Table variant="simple" w={'100%'}>
          <Thead>
            <Tr>
              {props.headers.map((h, index) => {
                return h === 'Price' || h === 'Supply' || h === 'Action' ? (
                  <Th key={index} isNumeric>
                    {h}
                  </Th>
                ) : (
                  <Th key={index}>{h}</Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {dummyListData.map((data, index) => {
              return (
                <Tr key={index}>
                  <Td>{data?.code}</Td>
                  <Td>{data?.name}</Td>
                  <Td isNumeric>{data?.price}</Td>
                  <Td isNumeric>{data?.stock}</Td>
                  <Td isNumeric className={'detailsBtn'}>
                    details
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </VStack>
    </VStack>
  );
};

export { Nav, TopBar, List };
