import { Nav, TopBar, List, Details, PageHeader } from '../myComponents';
import { useWidthResizeListener } from '../myHooks.js';

import { VStack, HStack } from '@chakra-ui/react';

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

  return (
    <HStack id={'appContainer'} spacing={null} h={'100vh'}>
      <Nav />
      <VStack spacing={null} h={'100%'} w={'100%'}>
        <TopBar />
        <HStack
          spacing={null}
          h={'100%'}
          w={'100%'}
          alignItems={'flex-start'}
          overflow={'auto'}
          overflowX={'auto'}
        >
          <VStack
            id={'ListSection'}
            h={'100%'}
            w={screenWidth < 1024 ? '100%' : 'calc(100% - 320px)'}
            spacing={null}
            overflow={'auto'}
            overflowX={'auto'}
          >
            <PageHeader title={'Products'} hasAddBtn />

            <List
              headers={['Code', 'Name', 'Stock', 'Price', 'Action']}
              body={['code', 'name', 'stock', 'price']}
              filterData={filterData}
              api={''}
            />
          </VStack>

          {screenWidth < 1024 ? null : (
            <VStack
              id={'DetailsSection'}
              h={'100%'}
              w={'320px'}
              spacing={null}
              overflow={'auto'}
              overflowX={'auto'}
            >
              <PageHeader title={'Details'} />

              <Details hasImage />
            </VStack>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
}

export default AdminProducts;
