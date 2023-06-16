import { Nav, TopBar, List } from '../myComponents';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { VStack, HStack, Heading, Button } from '@chakra-ui/react';

function AdminProducts() {
  return (
    <HStack spacing={null}>
      <Nav />
      <VStack spacing={null} h={'100vh'} w={'100%'}>
        <TopBar />
        <HStack
          spacing={null}
          w={'100%'}
          justifyContent={'space-between'}
          borderBottom={'1px solid var(--divider)'}
        >
          <Heading py={'8px'} px={'16px'}>
            Products
          </Heading>
          <Button
            h={'100%'}
            className={'btn primary-btn'}
            w={'120px'}
            leftIcon={<AddOutlinedIcon />}
          >
            Add
          </Button>
        </HStack>
        <List
          headers={['Code', 'Product', 'Price', 'Supply', 'Action']}
          api={''}
        />
      </VStack>
    </HStack>
  );
}

export default AdminProducts;
