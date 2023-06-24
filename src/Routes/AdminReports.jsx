import { useReducer, useState } from 'react';

import {
  Nav,
  TopBar,
  List,
  ReportDetails,
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
      period: 'April 2023',
      revenue: { penjualan: 35325000, grossRevenue: 35155000 },
      debt: { piutang: 15000, bebanUtang: 0, totalRevenue: 35005000 },
      cos: {
        pembelian: 1485800,
        bebanAngkut: 0,
        totalCos: 14858000,
        grossProfit: 20147000,
      },
      expenses: {
        bebanOperasional: {
          bebanListrik: 0,
          bebanSewa: 0,
          bebanTelepon: 0,
        },
        bebanLain: { penyesuaianPersediaan: 0, lainLain: 0 },
        totalExpenses: 14858000,
      },
      totalProfit: 5289000,
    },
  ];
  const listItems = {
    attributes: [
      {
        isNumeric: false,
        name: 'Period',
        key: 'period',
        type: 'string',
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
        name: 'Gross Revenue',
        key: 'grossRevenue',
        type: 'number',
      },
    ],
    listAction: { isNumeric: true, name: 'Action', action: 'details' },
    data: dummyListData,
  };
  const [detailsData, dispatch] = useReducer(detailsReducer, {});
  const detailsItems = {
    attributes: [
      {
        name: 'Status',
        type: 'badge',
        key: 'status',
        colorOptions: { profit: 'green', loss: 'red' },
      },
      { name: 'Period', type: 'string', key: 'period' },
      {
        name: 'Revenue',
        type: 'objectNumber',
        key: 'revenue',
        items: [
          { name: 'Penjualan', key: 'penjualan' },
          { name: 'Gross Revenue', key: 'grossRevenue' },
        ],
      },
      {
        name: 'Debt',
        type: 'objectNumber',
        key: 'debt',
        items: [
          { name: 'Piutang', key: 'piutang' },
          { name: 'BebanUtang', key: 'bebanUtang' },
        ],
      },
      {
        name: 'Cost of Sales',
        type: 'objectNumber',
        key: 'cos',
        items: [
          { name: 'Pembelian', key: 'pembelian' },
          { name: 'Beban Angkut', key: 'bebanAngkut' },
          { name: 'Total Cost of Sales', key: 'totalCos' },
          { name: 'Gross Profit', key: 'grossProfit' },
        ],
      },
      {
        name: 'Expenses',
        type: 'objectNumber',
        key: 'expenses',
        items: [
          {
            name: 'Beban Operasional',
            type: 'objectNumber',
            key: 'bebanOperasional',
            items: [
              { name: 'Beban Listrik', key: 'bebanListrik' },
              { name: 'Beban Sewa', key: 'bebanSewa' },
              { name: 'Beban Telepon', key: 'bebanTelepon' },
            ],
          },
          {
            name: 'Beban Lain',
            type: 'objectNumber',
            key: 'bebanLain',
            items: [
              { name: 'Penyesuaian Persediaan', key: 'penyesuaianPersediaan' },
              { name: 'Lain-lain', key: 'lainLain' },
            ],
          },
          { name: 'Total Expenses', key: 'totalExpenses', type: 'number' },
        ],
      },
      { name: 'Total Profit', key: 'totalProfit', type: 'number' },
    ],
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
              detailsComponent={<ReportDetails detailsItems={detailsItems} />}
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
                <ReportDetails detailsItems={detailsItems} />
              </VStack>
            </VStack>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
}
