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
      grossRevenue: 35155000,
      totalExpense: -14858000,
      revenue: { penjualan: 35325000, grossRevenue: 35155000 },
      debt: { piutang: -15000, bebanUtang: 0, totalRevenue: 35005000 },
      cos: {
        pembelian: -1485800,
        bebanAngkut: 0,
        totalCos: -14858000,
        grossProfit: 20147000,
      },
      expenses: {
        bebanOperasional: {
          bebanListrik: 0,
          bebanSewa: 0,
          bebanTelepon: 0,
        },
        bebanLain: { penyesuaianPersediaan: 0, lainLain: 0 },
        totalExpenses: -14858000,
      },
      totalProfit: 5289000,
    },
    {
      status: 'profit',
      period: 'May 2023',
      grossRevenue: 45155000,
      totalExpense: -15858000,
      revenue: { penjualan: 45325000, grossRevenue: 45155000 },
      debt: { piutang: -25000, bebanUtang: 0, totalRevenue: 45005000 },
      cos: {
        pembelian: -1585800,
        bebanAngkut: 0,
        totalCos: -15858000,
        grossProfit: 29147000,
      },
      expenses: {
        bebanOperasional: {
          bebanListrik: 0,
          bebanSewa: 0,
          bebanTelepon: 0,
        },
        bebanLain: { penyesuaianPersediaan: 0, lainLain: 0 },
        totalExpenses: -15858000,
      },
      totalProfit: 13289000,
    },
    {
      status: 'loss',
      period: 'June 2023',
      grossRevenue: 25155000,
      totalExpense: -5858000,
      revenue: { penjualan: 25325000, grossRevenue: 25155000 },
      debt: { piutang: -5000, bebanUtang: -10000, totalRevenue: 25005000 },
      cos: {
        pembelian: -1385800,
        bebanAngkut: -100000,
        totalCos: -4858000,
        grossProfit: 3147000,
      },
      expenses: {
        bebanOperasional: {
          bebanListrik: -100000,
          bebanSewa: -200000,
          bebanTelepon: -300000,
        },
        bebanLain: { penyesuaianPersediaan: -400000, lainLain: -500000 },
        totalExpenses: -5858000,
      },
      totalProfit: -2005000,
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
      {
        isNumeric: true,
        name: 'Total Expense',
        key: 'totalExpense',
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
    {
      name: 'Year',
      type: 'string',
      columns: 1,
      items: [{ name: 'Year', value: '' }],
    },
    {
      name: 'Month',
      type: 'checkbox',
      items: [
        { name: 'Januari', isChecked: false },
        { name: 'Februari', isChecked: false },
        { name: 'Maret', isChecked: false },
        { name: 'April', isChecked: false },
        { name: 'Mei', isChecked: false },
        { name: 'Juni', isChecked: false },
        { name: 'Juli', isChecked: false },
        { name: 'Agustus', isChecked: false },
        { name: 'September', isChecked: false },
        { name: 'Agustus', isChecked: false },
        { name: 'Oktober', isChecked: false },
        { name: 'November', isChecked: false },
        { name: 'Desember', isChecked: false },
      ],
    },
  ];

  // Page Functions
  function handleSelectList(selectedListData) {
    dispatch({
      type: 'select',
      selectedListData: selectedListData,
    });
    if (screenWidth < 1000) {
      // console.log('open Details Modal');
      setDetailsModalIsOpen(true);
    }
  }

  return (
    <HStack id={'appContainer'} pb={screenWidth < 1000 ? '56px' : null}>
      <Nav />
      <VStack id={'contentContainer'}>
        <TopBar />
        <HStack id={'mainContent'}>
          <VStack
            id={'listSection'}
            w={
              Object.keys(detailsData).length !== 0
                ? screenWidth < 1000
                  ? '100%'
                  : 'calc(100% - 320px)'
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
          {screenWidth < 1000 ? (
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
