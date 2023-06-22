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
import { useWidthResizeListener, listReducer } from '../utils.js';

import { VStack, HStack } from '@chakra-ui/react';

export default function AdminDebts() {
  // Page Utils
  const screenWidth = useWidthResizeListener();

  // Page Datas
  // Page Datas
  const dummyListData = [
    {
      debitur: 'Bambang Sueb',
      total: 382500,
      lastTransaction: '2023-02-25T13:55:16.024772+07:00',
      status: 'utang',
    },
    {
      debitur: 'Rudi Tabuti',
      total: 150300,
      lastTransaction: '2023-05-25T13:55:16.024772+07:00',
      status: 'utang',
    },
    {
      debitur: 'Sutar Kalem',
      total: 4500,
      lastTransaction: '2023-03-25T13:55:16.024772+07:00',
      status: 'lunas',
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
      { isNumeric: true, name: 'Total', key: 'total', type: 'number' },
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
  const detailsKeys = [
    'code',
    'name',
    'stock',
    'price',
    'category',
    'color',
    'CreatedAt',
    'UpdatedAt',
    'user_id',
  ];
  const detailsNames = [
    'Code',
    'Name',
    'Stock',
    'Price (Rp)',
    'Category',
    'Color',
    'Created at',
    'Updated at',
    'Created by',
  ];
  const [detailsData, dispatch] = useReducer(listReducer, {});
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
    title: 'Updating',
    btnClassName: 'primaryBtn',
    purpose: 'UPDATE',
    handlePurpose: handleUpdateData,
    btnW: '100%',
    items: [
      { key: 'code', name: 'Code', type: 'string' },
      { key: 'name', name: 'Name', type: 'string' },
      {
        key: 'stock',
        type: 'stock',
        name: 'Stock',
      },
      { key: 'price', name: 'Price', type: 'price' },
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
            w={screenWidth < 1200 ? '100%' : 'calc(100% - 400px)'}
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
              detailsComponent={
                <Details
                  detailsData={detailsData}
                  detailsKeys={detailsKeys}
                  detailsNames={detailsNames}
                  hasImage
                />
              }
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
              id={'DetailsSection'}
              w={'400px'}
              h={'100%'}
              borderLeft={'1px solid var(--divider)'}
              spacing={null}
              justifyContent={'space-between'}
              overflow={'auto'}
            >
              <VStack w={'100%'} spacing={null} overflow={'auto'}>
                <PageHeader title={'Details'} />

                <Details
                  detailsData={detailsData}
                  detailsKeys={detailsKeys}
                  detailsNames={detailsNames}
                  hasImage
                />
              </VStack>

              {Object.keys(detailsData).length !== 0 ? (
                <VStack w={'100%'} spacing={null}>
                  <HStack w={'100%'} spacing={null}>
                    <InputModal
                      initialData={detailsData}
                      itemsAttribute={updateItemsAttribute}
                    />
                  </HStack>
                </VStack>
              ) : null}
            </VStack>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
}
