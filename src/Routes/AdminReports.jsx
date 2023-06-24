import { useReducer, useState } from 'react';

import {
  Nav,
  TopBar,
  List,
  Details,
  PageHeader,
  DetailsModal,
} from '../myComponents';
import { useWidthResizeListener, detailsReducer } from '../utils.js';

import { VStack, HStack } from '@chakra-ui/react';

export default function AdminReports() {
  // Page Utils
  const screenWidth = useWidthResizeListener();

  // Page Datas
  const dummyListData = [
    {
      status: 'profit',
      revenue: 3532500,
      period: '2023-02-25T13:55:16.024772+07:00',
    },
  ];
  const listItems = {
    attributes: [
      {
        isNumeric: false,
        name: 'Period',
        key: 'period',
        type: 'date',
      },
      {
        isNumeric: false,
        name: 'Status',
        key: 'status',
        type: 'badge',
        colorOptions: { profit: 'green', loss: 'red' },
      },
      {
        isNumeric: true,
        name: 'Revenue',
        key: 'revenue',
        type: 'number',
      },
    ],
    listAction: { isNumeric: true, name: 'Action', action: 'details' },
    data: dummyListData,
  };
  const [detailsData, dispatch] = useReducer(detailsReducer, {});
  const detailsItems = {
    attributes: [...listItems?.attributes],
    data: detailsData,
  };
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
  const filterItems = [
    // {
    //   name: 'Profit/Loss',
    //   type: 'selectString',
    //   columns: 1,
    //   options: ['Profit', 'Loss'],
    // },
    {
      name: 'Year',
      type: 'string',
      columns: 1,
      items: [{ name: 'Year', value: '' }],
    },
    // {
    //   name: 'Month',
    //   type: 'selectString',
    //   columns: 1,
    //   options: [
    //     'Januari',
    //     'Februari',
    //     'Maret',
    //     'April',
    //     'Mei',
    //     'Juni',
    //     'Juli',
    //     'Agustus',
    //     'September',
    //     'Oktober',
    //     'November',
    //     'Desember',
    //   ],
    // },
  ];

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
            <PageHeader title={'Reports'} />
            <List
              listItems={listItems}
              searchPlaceholder={`Search by period`}
              filterItems={filterItems}
              selectList={handleSelectList}
            />
          </VStack>
          {screenWidth < 1200 ? (
            <DetailsModal
              detailsComponent={<Details detailsItems={detailsItems} />}
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
            </VStack>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
}
