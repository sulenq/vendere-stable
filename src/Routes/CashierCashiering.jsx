import { useState, useEffect } from 'react';

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import { CashierNav, TopBar, PageHeader, InputData } from '../myComponents';
import { useWidthResizeListener, useFormatNumber } from '../utils.js';

import {
  VStack,
  HStack,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Input,
  Icon,
} from '@chakra-ui/react';

export default function CashierCashiering() {
  // Page Utils
  const screenWidth = useWidthResizeListener();
  const fn = useFormatNumber;

  // Page Datas
  // const dummyListData = [
  //   {
  //     status: 'profit',
  //     period: 'April 2023',
  //     grossRevenue: 35155000,
  //     totalExpense: -14858000,
  //     revenue: { penjualan: 35325000, grossRevenue: 35155000 },
  //     debt: { piutang: -15000, bebanUtang: 0, totalRevenue: 35005000 },
  //     cos: {
  //       pembelian: -1485800,
  //       bebanAngkut: 0,
  //       totalCos: -14858000,
  //       grossProfit: 20147000,
  //     },
  //     expenses: {
  //       bebanOperasional: {
  //         bebanListrik: 0,
  //         bebanSewa: 0,
  //         bebanTelepon: 0,
  //       },
  //       bebanLain: { penyesuaianPersediaan: 0, lainLain: 0 },
  //       totalExpenses: -14858000,
  //     },
  //     totalProfit: 5289000,
  //   },
  //   {
  //     status: 'profit',
  //     period: 'May 2023',
  //     grossRevenue: 45155000,
  //     totalExpense: -15858000,
  //     revenue: { penjualan: 45325000, grossRevenue: 45155000 },
  //     debt: { piutang: -25000, bebanUtang: 0, totalRevenue: 45005000 },
  //     cos: {
  //       pembelian: -1585800,
  //       bebanAngkut: 0,
  //       totalCos: -15858000,
  //       grossProfit: 29147000,
  //     },
  //     expenses: {
  //       bebanOperasional: {
  //         bebanListrik: 0,
  //         bebanSewa: 0,
  //         bebanTelepon: 0,
  //       },
  //       bebanLain: { penyesuaianPersediaan: 0, lainLain: 0 },
  //       totalExpenses: -15858000,
  //     },
  //     totalProfit: 13289000,
  //   },
  //   {
  //     status: 'loss',
  //     period: 'June 2023',
  //     grossRevenue: 25155000,
  //     totalExpense: -5858000,
  //     revenue: { penjualan: 25325000, grossRevenue: 25155000 },
  //     debt: { piutang: -5000, bebanUtang: -10000, totalRevenue: 25005000 },
  //     cos: {
  //       pembelian: -1385800,
  //       bebanAngkut: -100000,
  //       totalCos: -4858000,
  //       grossProfit: 3147000,
  //     },
  //     expenses: {
  //       bebanOperasional: {
  //         bebanListrik: -100000,
  //         bebanSewa: -200000,
  //         bebanTelepon: -300000,
  //       },
  //       bebanLain: { penyesuaianPersediaan: -400000, lainLain: -500000 },
  //       totalExpenses: -5858000,
  //     },
  //     totalProfit: -2005000,
  //   },
  // ];
  // const listItems = {
  //   attributes: [
  //     {
  //       isNumeric: false,
  //       name: 'Period',
  //       key: 'period',
  //       type: 'string',
  //     },
  //     {
  //       isNumeric: false,
  //       name: 'Status',
  //       key: 'status',
  //       type: 'badge',
  //       colorOptions: { profit: 'green', loss: 'red' },
  //     },
  //     {
  //       isNumeric: true,
  //       name: 'Gross Revenue',
  //       key: 'grossRevenue',
  //       type: 'number',
  //     },
  //     {
  //       isNumeric: true,
  //       name: 'Total Expense',
  //       key: 'totalExpense',
  //       type: 'number',
  //     },
  //   ],
  //   listAction: { isNumeric: true, name: 'Action', action: 'details' },
  //   data: dummyListData,
  // };
  // const filterItems = [
  //   {
  //     name: 'Year',
  //     type: 'string',
  //     columns: 1,
  //     items: [{ name: 'Year', value: '' }],
  //   },
  //   {
  //     name: 'Month',
  //     type: 'checkbox',
  //     items: [
  //       { name: 'Januari', isChecked: false },
  //       { name: 'Februari', isChecked: false },
  //       { name: 'Maret', isChecked: false },
  //       { name: 'April', isChecked: false },
  //       { name: 'Mei', isChecked: false },
  //       { name: 'Juni', isChecked: false },
  //       { name: 'Juli', isChecked: false },
  //       { name: 'Agustus', isChecked: false },
  //       { name: 'September', isChecked: false },
  //       { name: 'Agustus', isChecked: false },
  //       { name: 'Oktober', isChecked: false },
  //       { name: 'November', isChecked: false },
  //       { name: 'Desember', isChecked: false },
  //     ],
  //   },
  // ];
  const cartListDummyData = [
    {
      id: 27,
      name: 'Gula Pasir 1kg',
      code: 'pasir1',
      price: 14500,
      qty: 1,
      totalPrice: 14500,
      modal: 1000,
    },
    {
      id: 20,
      name: 'Sedap Ayam Bawang',
      code: '8998866200318',
      price: 3500,
      qty: 2,
      totalPrice: 7000,
      modal: 1000,
    },
    {
      id: 124,
      name: 'Rinso Cair + Molto Royal Gold 38ml',
      code: '8999999526894',
      price: 1000,
      qty: 2,
      totalPrice: 2000,
      modal: 0,
    },
    {
      id: 141,
      name: 'Energen 32g vanilla',
      code: '8996001440124',
      price: 2000,
      qty: 1,
      totalPrice: 2000,
      modal: 0,
    },
    {
      id: 24,
      name: 'Telur 1kg',
      code: 'ndog1',
      price: 27500,
      qty: 3,
      totalPrice: 82500,
      modal: 1000,
    },
    {
      id: 22,
      name: 'Aqua 600ml (tanggung)',
      code: '8886008101053',
      price: 3000,
      qty: 1,
      totalPrice: 3000,
      modal: 1000,
    },
  ];
  const [cartList, setCartList] = useState(cartListDummyData);
  const [checkoutData, setCheckoutData] = useState({
    cartList: cartList,
    total: 0,
    paymentMethod: 'Cash',
    pay: 0,
    change: 0,
  });
  useEffect(() => {
    console.log(checkoutData);
  }, [checkoutData]);

  // Components
  const AddCartModal = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button
          className={'btn primaryBtn'}
          onClick={onOpen}
          leftIcon={<ShoppingCartCheckoutOutlinedIcon />}
          w={'120px'}
          h={'100%'}
        >
          ADD
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className={'modalHeader'}>Products</ModalHeader>
            <ModalBody></ModalBody>
            <ModalFooter className={'modalFooter'}></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const Checkout = props => {
    // Utils
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Datas
    const paymentMethodItems = [
      { name: 'Cash' },
      { name: 'QRIS' },
      { name: 'Transfer' },
    ];
    const [paymentData, setPaymentData] = useState({
      pay: 0,
      paymentMethod: 'Cash',
    });

    // Functions
    function handlePaymentOnChange(newData) {
      setPaymentData(newData);
    }
    function handleCheckOut(e) {
      setCheckoutData(prevState => ({
        ...prevState,
        ...paymentData,
      }));
      setCartList({});
      onClose();
    }
    // function handleKeyDownOnInputPay(e) {
    //   const checkoutBtn = document.querySelector('#checkoutBtn');
    //   if (e.key === 'Enter') {
    //     checkoutBtn?.click();
    //   }
    // }

    return (
      <>
        <Button
          className={'btn primaryBtn'}
          onClick={onOpen}
          leftIcon={<AddShoppingCartOutlinedIcon />}
          w={'100%'}
          h={'100%'}
        >
          CHECKOUT
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'lg'}
          isCentered
          scrollBehavior={'inside'}
        >
          <ModalOverlay backdropFilter={'blur(5px)'} />
          <ModalContent className={'modalContent'}>
            <ModalCloseButton className={'modalCloseBtn'} />
            <ModalHeader className={'modalHeader'}>Checking Out</ModalHeader>
            <ModalBody p={0}>
              <VStack
                alignItems={'flex-start'}
                px={'16px'}
                py={'8px'}
                spacing={null}
                borderBottom={'1px solid var(--divider)'}
              >
                <Text opacity={0.5}>Total</Text>
                <Text
                  alignSelf={'flex-end'}
                  fontSize={'48px'}
                  fontWeight={'bold'}
                  color={'primary'}
                  lineHeight={'48px'}
                >
                  {fn(checkoutData?.total) || 0}
                </Text>
              </VStack>
              <VStack
                alignItems={'flex-start'}
                py={'8px'}
                px={'16px'}
                spacing={null}
                borderBottom={'1px solid var(--divider)'}
              >
                <Text opacity={0.5}>Change</Text>
                <Text
                  alignSelf={'flex-end'}
                  fontSize={'48px'}
                  fontWeight={'bold'}
                  lineHeight={'48px'}
                >
                  {fn(checkoutData?.change) || 0}
                </Text>
              </VStack>
              <HStack
                py={'8px'}
                px={'16px'}
                pb={'12px'}
                spacing={'8px'}
                borderBottom={'1px solid var(--divider)'}
              >
                <VStack alignItems={'flex-start'} w={'50%'}>
                  <Text opacity={0.5}>Pay</Text>
                  <InputData
                    item={{
                      initialData: paymentData,
                      valueType: 'number',
                      valueKey: 'pay',
                      onInput: handlePaymentOnChange,
                    }}
                  />
                </VStack>
                <VStack alignItems={'flex-start'} w={'50%'}>
                  <Text opacity={0.5}>Payment Method</Text>
                  <InputData
                    item={{
                      initialData: paymentData,
                      valueType: 'selectString',
                      valueKey: 'paymentMethod',
                      options: paymentMethodItems,
                      onInput: handlePaymentOnChange,
                    }}
                  />
                </VStack>
              </HStack>
            </ModalBody>
            <ModalFooter className={'modalFooter'}>
              <HStack w={'100%'}>
                <Button
                  id={'checkoutBtn'}
                  className={'btn primaryBtn'}
                  onClick={handleCheckOut}
                  w={'100%'}
                  h={'50px'}
                >
                  CHECKOUT
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <HStack id={'appContainer'} pb={screenWidth < 1000 ? '56px' : null}>
      <CashierNav />
      <VStack id={'contentContainer'}>
        <TopBar />
        <HStack id={'mainContent'}>
          {screenWidth > 1000 && (
            <VStack
              id={'listSection'}
              w={'50%'}
              // w={'100%'}
            >
              <PageHeader title={'Products'} />
            </VStack>
          )}
          {/* cartListSection */}
          <VStack
            id={'cartListSection'}
            w={screenWidth < 1000 ? '100%' : '50%'}
            position={'relative'}
            overflow={'auto'}
          >
            {/* Header */}
            <HStack
              spacing={null}
              w={'100%'}
              h={'54px'}
              justifyContent={'space-between'}
              borderTop="1px solid var(--divider)"
              borderBottom={'1px solid var(--divider)'}
            >
              <Heading
                w={'100%'}
                verticalAlign={'center'}
                py={'8px'}
                px={'16px'}
              >
                Cart List
              </Heading>
              {screenWidth < 1000 && <AddCartModal />}
            </HStack>
            {/* Body */}
            <VStack
              w={'100%'}
              h={'calc(100% - 189px)'}
              spacing={null}
              overflow={'auto'}
            >
              {Object.keys(cartList).length !== 0
                ? cartList?.map((c, index) => {
                    // console.log(c);
                    return (
                      <HStack
                        key={index}
                        w={'100%'}
                        p={'8px 16px'}
                        alignItems={'flex-start'}
                        justifyContent={'space-between'}
                        borderBottom={'1px solid var(--divider)'}
                      >
                        <VStack alignItems={'flex-start'}>
                          <Text>{c?.name}</Text>
                          <Text opacity={0.5}>{c?.code}</Text>
                          <Text opacity={0.5}>{`@ ${fn(c?.price)}`}</Text>
                        </VStack>
                        <VStack alignItems={'flex-end'}>
                          <Text fontSize={'16px'} fontWeight={'bold'}>
                            {fn(c?.totalPrice)}
                          </Text>
                          <HStack w={'100px'} spacing={null}>
                            <Button className={'counterBtn'}>
                              <Icon
                                fontSize={'16px !important'}
                                as={RemoveOutlinedIcon}
                              />
                            </Button>
                            <Input
                              className={'input'}
                              textAlign={'right'}
                              p={'8px'}
                              //TODO ubah jadi value dan buat onChange handler nya tod
                              defaultValue={c?.qty}
                            />
                            <Button className={'counterBtn'}>
                              <Icon
                                fontSize={'16px !important'}
                                as={AddOutlinedIcon}
                              />
                            </Button>
                          </HStack>
                        </VStack>
                      </HStack>
                    );
                  })
                : ''}
            </VStack>
            {/* Footer */}
            <VStack
              w={'100%'}
              position={'absolute'}
              bottom={'0'}
              spacing={null}
              borderTop={'1px solid var(--divider)'}
            >
              <VStack
                spacing={null}
                w={'100%'}
                alignItems={'center'}
                px={'16px'}
                pt={'6px'}
                pb={'10px'}
              >
                <Text opacity={0.5}>Total</Text>
                <Text
                  fontSize={'48px'}
                  lineHeight={'48px'}
                  fontWeight={'bold'}
                  color={'primary'}
                >
                  {fn(checkoutData?.total) || 0}
                </Text>
              </VStack>
              <Checkout />
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
}
