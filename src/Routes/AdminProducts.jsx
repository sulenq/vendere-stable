import { Nav, TopBar, List, Details, PageHeader } from '../myComponents';
import { useWidthResizeListener } from '../myHooks.js';

import { VStack, HStack, Button } from '@chakra-ui/react';

function AdminProducts() {
  const screenWidth = useWidthResizeListener();
  const filterData = [
    {
      name: 'Category',
      type: 'checkbox',
      item: [
        { name: 'Food', isChecked: false },
        { name: 'Drink', isChecked: false },
        { name: 'Stationery', isChecked: false },
        { name: 'Hygiene', isChecked: false },
        { name: 'Medicine', isChecked: false },
        { name: 'Electronics', isChecked: false },
        { name: 'Cosmetics', isChecked: false },
        { name: 'Other', isChecked: false },
      ],
    },
    {
      name: 'Supply Limit',
      type: 'input',
      columns: 1,
      item: [{ name: 'Supply', value: 0 }],
      hint: 'Displays the list with lower supply than the value above',
    },
    {
      name: 'Price Range',
      type: 'input',
      columns: 2,
      item: [
        { name: 'Min', value: 0 },
        { name: 'Max', value: 0 },
      ],
    },
    {
      name: 'Color',
      type: 'color',
      item: [
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
    },
  ];
  const detailsData = {
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
  };

  return (
    <HStack id={'appContainer'} spacing={null} h={'100vh'}>
      <Nav />
      <VStack spacing={null} w={'100%'} h={'100%'}>
        <TopBar />
        <HStack
          spacing={null}
          h={'100%'}
          w={'100%'}
          alignItems={'flex-start'}
          overflow={'auto'}
        >
          <VStack
            id={'ListSection'}
            w={screenWidth < 1200 ? '100%' : 'calc(100% - 400px)'}
            h={'100%'}
            borderRight={'1px solid var(--divider)'}
            spacing={null}
            overflow={'auto'}
          >
            <PageHeader title={'Products'} hasAddBtn />

            <List
              headers={['Code', 'Name', 'Stock', 'Price', 'Action']}
              body={['code', 'name', 'stock', 'price']}
              filterData={filterData}
              api={''}
            />
          </VStack>

          {screenWidth < 1200 ? null : (
            <VStack
              id={'DetailsSection'}
              w={'400px'}
              h={'100%'}
              spacing={null}
              justifyContent={'space-between'}
              overflow={'auto'}
            >
              <VStack w={'100%'} spacing={null}>
                <PageHeader title={'Details'} />

                <Details
                  detailsData={detailsData}
                  keys={[
                    'code',
                    'name',
                    'stock',
                    'price',
                    'CreatedAt',
                    'UpdatedAt',
                    'user_id',
                  ]}
                  keysName={[
                    'Code',
                    'Name',
                    'Stock',
                    'Price',
                    'Created at',
                    'Updated at',
                    'Created by',
                  ]}
                  hasImage
                />
              </VStack>

              <HStack w={'100%'} h={'50px'} spacing={null}>
                <Button className={'btn primaryBtn'} h={'100%'} w={'50%'}>
                  UPDATE
                </Button>
                <Button className={'btn primaryDarkBtn'} h={'100%'} w={'50%'}>
                  DELETE
                </Button>
              </HStack>
            </VStack>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
}

export default AdminProducts;
