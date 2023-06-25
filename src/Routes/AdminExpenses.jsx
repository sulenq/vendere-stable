import { useReducer, useState } from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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

export default function AdminExpenses() {
  // Page Utils
  const screenWidth = useWidthResizeListener();

  // Page Datas
  const dummyListData = [
    {
      status: 'lunas',
      total: -25500,
      date: '2023-02-25T13:55:16.024772+07:00',
      category: 'Lain-Lain',
      description: 'ngambil gula 1kg, beras jempol 2kg',
    },
    {
      status: 'lunas',
      total: -172500,
      date: '2023-05-25T13:55:16.024772+07:00',
      category: 'Pembelian',
      description: '-gula pasir 1 sak\n-beras jempol 10 sak\n-gandum 1 sak',
    },
    {
      status: 'lunas',
      total: -55000,
      date: '2023-03-25T13:55:16.024772+07:00',
      category: 'Penyesuaian Persediaan',
    },
  ];
  const listItems = {
    attributes: [
      {
        isNumeric: false,
        name: 'Category',
        key: 'category',
        type: 'string',
      },
      { isNumeric: false, name: 'Date', key: 'date', type: 'date' },
      { isNumeric: true, name: 'Total(Rp)', key: 'total', type: 'number' },
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
      { name: 'Description', key: 'description', type: 'textArea' },
    ],
    data: detailsData,
  };
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
  const filterItems = [
    {
      name: 'Category',
      type: 'checkbox',
      items: [
        { name: 'Pembelian', isChecked: false },
        { name: 'Beban Angkut', isChecked: false },
        { name: 'Beban Gaji', isChecked: false },
        { name: 'Beban Listrik', isChecked: false },
        { name: 'Beban Sewa', isChecked: false },
        { name: 'Beban Telepon', isChecked: false },
        { name: 'Penyesuaian Persediaan', isChecked: false },
        { name: 'Lain-lain', isChecked: false },
        { name: 'Prive', isChecked: false },
      ],
    },
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
      name: 'Total Expense Range',
      type: 'number',
      columns: 2,
      items: [
        { name: 'Min', value: 0 },
        { name: 'Max', value: 0 },
      ],
    },
    {
      name: 'Status',
      type: 'checkbox',
      items: [
        { name: 'Lunas', isChecked: false },
        { name: 'Utang', isChecked: false },
      ],
    },
  ];
  const addItemsAttribute = {
    title: 'Adding',
    icon: <AddOutlinedIcon />,
    btnW: '120px',
    btnClassName: 'primaryBtn',
    purpose: 'ADD',
    handlePurpose: handleAddData,
    items: [
      {
        key: 'category',
        name: 'Category',
        type: 'selectString',
        options: filterItems[0]?.items,
      },
      {
        key: 'status',
        name: 'Status',
        type: 'selectString',
        options: [{ name: 'Lunas' }, { name: 'Utang' }],
      },
      { key: 'total', name: 'Total', type: 'number' },
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
  function handleAddData(data) {
    console.log(data);
  }

  return (
    <HStack id={'appContainer'} pb={screenWidth < 1200 ? '56px' : null}>
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
            <PageHeader
              title={'Expenses'}
              hasBtn
              initialData={{
                date: '',
                category: '',
                status: '',
                total: 0,
                description: '',
              }}
              addItemsAttribute={addItemsAttribute}
            />
            <List
              listItems={listItems}
              searchPlaceholder={`Search by date`}
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
