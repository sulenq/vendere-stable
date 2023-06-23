import { useReducer, useState } from 'react';

import {
  Nav,
  TopBar,
  List,
  Details,
  PageHeader,
  DetailsModal,
  InputModal,
} from '../myComponents';
import { useWidthResizeListener, detailsReducer } from '../utils.js';

import { VStack, HStack } from '@chakra-ui/react';

export default function AdminDebts() {
  // Page Utils
  const screenWidth = useWidthResizeListener();

  // Page Datas
  const dummyListData = [
    {
      debitur: 'Bambang Sueb',
      total: 25500,
      lastTransaction: '2023-02-25T13:55:16.024772+07:00',
      status: 'utang',
      cartList: [
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
      ],
    },
    {
      debitur: 'Rudi Tabuti',
      total: 172500,
      lastTransaction: '2023-05-25T13:55:16.024772+07:00',
      status: 'utang',
      cartList: [
        {
          id: 27,
          name: 'Gula Pasir 1kg',
          code: 'pasir1',
          price: 14500,
          qty: 6,
          totalPrice: 87000,
          modal: 1000,
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
      ],
    },
    {
      debitur: 'Sutar Kalem',
      total: 55000,
      lastTransaction: '2023-03-25T13:55:16.024772+07:00',
      status: 'utang',
      cartList: [
        {
          id: 24,
          name: 'Telur 1kg',
          code: 'ndog1',
          price: 27500,
          qty: 2,
          totalPrice: 55000,
          modal: 1000,
        },
      ],
    },
  ];
  const listItems = {
    attributes: [
      { isNumeric: false, name: 'Debitur', key: 'debitur', type: 'string' },
      {
        isNumeric: false,
        name: 'Last Transaction',
        key: 'lastTransaction',
        type: 'date',
      },
      { isNumeric: true, name: 'Total (Rp)', key: 'total', type: 'number' },
      {
        isNumeric: true,
        name: 'Status',
        key: 'status',
        type: 'badge',
        colorOptions: { utang: 'red', lunas: 'green' },
      },
    ],
    listAction: { isNumeric: true, name: 'Action', action: 'details' },
    data: dummyListData,
  };
  const [detailsData, dispatch] = useReducer(detailsReducer, {});
  const detailsItems = {
    attributes: [
      ...listItems?.attributes,
      { name: 'Cart List', key: 'cartList', type: 'cartList' },
    ],
    data: detailsData,
  };
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
  const filterItems = [
    {
      name: 'Date Range',
      type: 'date',
      columns: 2,
      items: [
        { name: 'Start Date', value: '' },
        { name: 'End Date', value: '' },
      ],
    },
    {
      name: 'Total Debt Range',
      type: 'input',
      columns: 2,
      items: [
        { name: 'Min', value: 0 },
        { name: 'Max', value: 0 },
      ],
    },
  ];
  const updateItemsAttribute = {
    title: 'Paying Debt',
    btnClassName: 'primaryBtn',
    purpose: 'PAY DEBT',
    handlePurpose: handleUpdateData,
    btnW: '100%',
    items: [
      { key: 'debitur', name: 'Debitur', type: 'string', readOnly: true },
      {
        key: 'lastTransaction',
        name: 'Last Trans.',
        type: 'date',
        readOnly: true,
      },
      {
        key: 'total',
        type: 'number',
        name: 'Total (Rp)',
        readOnly: true,
      },
      {
        key: 'status',
        name: 'Status',
        type: 'badge',
        colorOptions: { utang: 'red', lunas: 'green' },
        readOnly: true,
      },
      {
        key: 'payDebt',
        type: 'payDebt',
        name: 'Pay Debt (Rp)',
      },
    ],
  };

  // Page Functions
  function handleSelectList(selectedListData) {
    dispatch({
      type: 'select',
      selectedListData: selectedListData,
    });
    if (screenWidth < 1200) {
      // console.log('open Details Modal');
      setDetailsModalIsOpen(true);
    }
  }
  function handleUpdateData(data) {
    console.log(data);
  }

  return (
    <HStack id={'appContainer'} pb={screenWidth < 1200 ? '40px' : null}>
      <Nav />
      <VStack id={'contentContainer'}>
        <TopBar />
        <HStack id={'mainContent'}>
          <VStack
            id={'listSection'}
            w={
              Object.keys(detailsData).length !== 0
                ? screenWidth < 1200
                  ? '100%'
                  : 'calc(100% - 400px)'
                : '100%'
            }
            // w={'100%'}
          >
            <PageHeader title={'Debts'} />
            <List
              listItems={listItems}
              searchPlaceholder={`Search by debitur's name`}
              filterItems={filterItems}
              selectList={handleSelectList}
            />
          </VStack>
          {screenWidth < 1200 ? (
            <DetailsModal
              detailsComponent={<Details detailsItems={detailsItems} />}
              detailsActions={[
                {
                  name: 'update',
                  initialData: detailsData,
                  itemsAttribute: updateItemsAttribute,
                },
              ]}
              detailsModalIsOpen={detailsModalIsOpen}
              setDetailsModalIsOpen={setDetailsModalIsOpen}
            />
          ) : (
            <VStack
              id={'detailsSection'}
              w={
                Object.keys(detailsData).length !== 0 ? '100%' : '0 !important'
              }
            >
              <VStack w={'100%'} spacing={null} overflow={'auto'}>
                <PageHeader title={'Details'} />
                <Details detailsItems={detailsItems} />
              </VStack>
              <VStack w={'100%'} spacing={null}>
                <HStack w={'100%'} spacing={null}>
                  <InputModal
                    initialData={{ ...detailsData, payDebt: 0 }}
                    itemsAttribute={updateItemsAttribute}
                  />
                </HStack>
              </VStack>
            </VStack>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
}
