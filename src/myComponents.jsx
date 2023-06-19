// import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { ColorModeSwitcher } from './ColorModeSwitcher.js';
import {
  useWidthResizeListener,
  useFormatNumber,
  useReverseFormatNumber,
  useIdFormatDate,
} from './utils.js';

import {
  Heading,
  VStack,
  HStack,
  Link,
  Button,
  Text,
  Image,
  Icon,
  Input,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Tooltip,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  SimpleGrid,
  Wrap,
  WrapItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

const Nav = () => {
  const screenWidth = useWidthResizeListener();
  const currentUrl = useLocation();
  const currentUrlSplitted = currentUrl.pathname.split('/');
  const activeNav = currentUrlSplitted[currentUrlSplitted.length - 1];

  if (screenWidth < 1200) {
    return (
      <HStack className={'navMobile'}>
        <Text>Nav Mobile</Text>
      </HStack>
    );
  } else {
    return (
      <VStack
        id={'nav'}
        className={'nav'}
        justifyContent={'space-between'}
        overflow={'auto'}
      >
        <HStack
          className={'navIconContainer'}
          p={'0'}
          borderBottom={'1px solid var(--divider)'}
        >
          <Link href={'/'} className={'navIconContainer'} w={'100%'}>
            <Image src={'../logo.png'} w={'28px'} mx={'auto !important'} />
          </Link>
        </HStack>
        <VStack w={'100%'} spacing={null} overflow={'auto'}>
          <Tooltip label={'Products'} placement={'right'} openDelay={'500'}>
            <HStack
              className={'navIconContainer'}
              spacing={null}
              bg={activeNav === 'products' ? 'primary' : null}
            >
              <Icon as={Inventory2OutlinedIcon} />
            </HStack>
          </Tooltip>
          <Tooltip label={'Debts'} placement={'right'} openDelay={'500'}>
            <HStack
              className={'navIconContainer'}
              spacing={null}
              bg={activeNav === 'debts' ? 'primary' : null}
            >
              <Icon as={MoneyOffCsredOutlinedIcon} />
            </HStack>
          </Tooltip>
          <Tooltip label={'Expenses'} placement={'right'} openDelay={'500'}>
            <HStack
              className={'navIconContainer'}
              spacing={null}
              bg={activeNav === 'expenses' ? 'primary' : null}
            >
              <Icon as={MonetizationOnOutlinedIcon} />
            </HStack>
          </Tooltip>
          <Tooltip label={'Reports'} placement={'right'} openDelay={'500'}>
            <HStack
              className={'navIconContainer'}
              spacing={null}
              bg={activeNav === 'reports' ? 'primary' : null}
            >
              <Icon as={SummarizeOutlinedIcon} />
            </HStack>
          </Tooltip>
        </VStack>
        <VStack
          spacing={null}
          w={'100%'}
          borderTop={'1px solid var(--divider)'}
        >
          <Tooltip label={'Profile'} placement={'right'} openDelay={'500'}>
            <HStack className={'navIconContainer'} spacing={null}>
              <Icon as={PersonOutlinedIcon} />
            </HStack>
          </Tooltip>
          <Tooltip label={'Sing Out'} placement={'right'} openDelay={'500'}>
            <HStack className={'navIconContainer'} spacing={null}>
              <Icon as={LogoutOutlinedIcon} />
            </HStack>
          </Tooltip>
        </VStack>
      </VStack>
    );
  }
};

const TopBar = () => {
  const date = new Date();
  const options = useIdFormatDate();
  const formattedDate = date.toLocaleDateString('id-ID', options);

  return (
    <HStack w={'100%'} justifyContent={'space-between'}>
      <Text px={'16px'}>{formattedDate}</Text>
      <HStack spacing={null}>
        <Button
          variant={'ghost'}
          borderRadius={'0 !important'}
          px={'16px !Important'}
        >
          <Icon as={RefreshOutlinedIcon} />
        </Button>
        <ColorModeSwitcher px={'16px !Important'} ml={'0 !important'} />
      </HStack>
    </HStack>
  );
};

const PageHeader = props => {
  return (
    <HStack
      spacing={null}
      w={'100%'}
      justifyContent={'space-between'}
      borderBottom={'1px solid var(--divider)'}
    >
      <Heading
        w={props.hasAddBtn ? 'calc(100% - 120px)' : '100%'}
        py={'8px'}
        px={'16px'}
        borderTop="1px solid var(--divider)"
      >
        {props.title}
      </Heading>
      {props.hasAddBtn ? (
        <Button
          h={'100%'}
          className={'btn primaryBtn'}
          w={'120px'}
          leftIcon={<AddOutlinedIcon />}
        >
          Add
        </Button>
      ) : null}
    </HStack>
  );
};

const List = props => {
  // Utils
  const fn = useFormatNumber;
  const rfn = useReverseFormatNumber;
  const filterData = props?.filterData;
  // const screenWidth = useWidthResizeListener();

  // Component
  const ListFilter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function resetFilter() {
      setFilter(filterReset);
    }

    const filterReset = JSON.parse(JSON.stringify(filterData));

    const [filter, setFilter] = useState(
      JSON.parse(JSON.stringify(filterData))
    );

    return (
      <>
        <IconButton
          onClick={onOpen}
          className={'btn'}
          w={'50%'}
          icon={<TuneOutlinedIcon />}
        ></IconButton>

        <Modal isOpen={isOpen} scrollBehavior={'inside'} isCentered>
          <ModalOverlay backdropFilter={'blur(0px)'} />
          <ModalContent className={'modalContent'}>
            <ModalHeader className={'modalHeader'}>
              <VStack alignItems={'flex-start'} spacing={null}>
                <Text>List Filter</Text>
                <Text fontWeight={'normal'} fontSize={'sm'}>
                  Click "APPLY" to apply filter to the list
                </Text>
              </VStack>
            </ModalHeader>

            <ModalBody pt={'0'} pb={'24px'}>
              <Accordion defaultIndex={[]} allowMultiple>
                {filter?.map((f, index) => {
                  if (f.type === 'checkbox') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            {f.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <VStack alignItems={'flex-start'}>
                            {f?.item?.map((i, iIndex) => {
                              return (
                                <Checkbox
                                  key={iIndex}
                                  isChecked={i?.isChecked}
                                  onChange={e => {
                                    const prevState = JSON.parse(
                                      JSON.stringify(filter)
                                    );
                                    prevState[index].item[iIndex].isChecked =
                                      !prevState[index].item[iIndex].isChecked;
                                    setFilter(prevState);
                                  }}
                                  py={'2px'}
                                >
                                  {i?.name}
                                </Checkbox>
                              );
                            })}
                          </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  } else if (f.type === 'input') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            {f.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <SimpleGrid columns={f?.columns}>
                            {f?.item?.map((i, iIndex) => {
                              return (
                                <Input
                                  key={iIndex}
                                  className={'input'}
                                  placeholder={i?.name}
                                  onFocus={e => {
                                    e.target.select();
                                  }}
                                  onChange={e => {
                                    setFilter(prevState => {
                                      prevState[index].item[iIndex].value =
                                        parseInt(rfn(e.target.value));
                                      return [...prevState];
                                    });
                                  }}
                                  value={fn(filter[index].item[iIndex].value)}
                                />
                              );
                            })}
                          </SimpleGrid>
                          {f?.hint ? (
                            <Text fontSize={'sm'} ml={'4px'} opacity={'0.5'}>
                              {f?.hint}
                            </Text>
                          ) : null}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  } else if (f.type === 'color') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            {f?.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Wrap>
                            {f?.item?.map((i, iIndex) => {
                              return (
                                <WrapItem
                                  key={iIndex}
                                  cursor={'pointer'}
                                  p={'6px 12px'}
                                  border={
                                    i?.name === 'White' && i?.isChecked
                                      ? '1px solid black'
                                      : '1px solid var(--divider)'
                                  }
                                  userSelect={'none'}
                                  onClick={() => {
                                    const prevState = JSON.parse(
                                      JSON.stringify(filter)
                                    );
                                    prevState[index].item[iIndex].isChecked =
                                      !prevState[index].item[iIndex].isChecked;
                                    setFilter(prevState);
                                  }}
                                  bg={
                                    i?.name === 'Black' && i?.isChecked
                                      ? 'black'
                                      : i?.name === 'White' && i?.isChecked
                                      ? 'white'
                                      : i?.name === 'Brown' && i?.isChecked
                                      ? '#b55e12'
                                      : i?.isChecked
                                      ? `${i?.name?.toLowerCase()}.300`
                                      : null
                                  }
                                  color={
                                    i?.name === 'White' && i?.isChecked
                                      ? 'black'
                                      : i?.isChecked
                                      ? 'white'
                                      : ''
                                  }
                                >
                                  <Text>{i?.name}</Text>
                                </WrapItem>
                              );
                            })}
                          </Wrap>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  } else {
                    return <Text>{`Filter Data '${f.name}' Invalid`}</Text>;
                  }
                })}
              </Accordion>
            </ModalBody>

            <ModalFooter className={'modalFooter'}>
              <Button
                className={'btn'}
                h={'inherit'}
                w={'50%'}
                onClick={resetFilter}
              >
                RESET
              </Button>
              <Button
                className={'btn primaryBtn'}
                h={'inherit'}
                w={'50%'}
                onClick={onClose}
              >
                APPLY
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  // Functions
  function listHandleClick(e, selectedListData, key) {
    const listBody = document.querySelectorAll('#listBody tr');
    listBody.forEach(l => {
      l.classList.remove('selectedList');
    });
    e.currentTarget.classList.add('selectedList');
    props?.selectList(selectedListData);
  }

  return (
    <VStack w={'100%'} spacing={null} overflow={'auto'}>
      <HStack id={'listSearch'} w={'100%'} spacing={null}>
        <Input
          className={'input'}
          placeholder={'Search'}
          px={'16px'}
          border={'none'}
          borderBottom={'1px solid var(--divider)'}
        />
        <HStack w={'120px !important'} spacing={null}>
          <IconButton
            className={'btn'}
            borderRight={'1px solid var(--divider)'}
            w={'50%'}
            icon={<SearchOutlinedIcon />}
          ></IconButton>
          <ListFilter />
        </HStack>
      </HStack>
      <Box
        w={'100%'}
        overflow={'auto'}
        // border={'1px solid red'}
      >
        <Table variant="simple" overflow={'auto'}>
          <Thead>
            <Tr>
              {props.headers.map((h, index) => {
                switch (h) {
                  default:
                    return (
                      <Th key={index} px={'16px !important'}>
                        {h}
                      </Th>
                    );
                  case 'Price':
                  case 'Stock':
                  case 'Action':
                    return (
                      <Th key={index} px={'16px !important'} isNumeric>
                        {h}
                      </Th>
                    );
                }
              })}
            </Tr>
          </Thead>
          <Tbody id={'listBody'}>
            {props?.listData?.map((data, index) => {
              return (
                <Tr
                  key={index}
                  className={'listItem'}
                  onClick={e => {
                    listHandleClick(e, data);
                  }}
                >
                  {props.body.map((bodyData, bIndex) => {
                    return (
                      <Td
                        key={bIndex}
                        px={'16px !important'}
                        isNumeric={
                          typeof data[bodyData] === 'number' ? true : null
                        }
                      >
                        {typeof data[bodyData] === 'number'
                          ? fn(data[bodyData])
                          : data[bodyData]}
                      </Td>
                    );
                  })}

                  <Td isNumeric className={'detailsBtn'}>
                    details
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

const Details = props => {
  const options = useIdFormatDate();
  const fn = useFormatNumber;

  return (
    <VStack
      w={'100%'}
      spacing={null}
      alignItems={'flex-start'}
      overflow={'auto'}
    >
      <VStack w={'100%'}>
        {props.hasImage ? (
          <Image
            src={'../img/noImage.jpg'}
            boxSize={'100%'}
            objectFit={'cover'}
            borderBottom={'1px solid var(--divider)'}
          />
        ) : null}
      </VStack>
      <VStack w={'100%'} spacing={null}>
        {props?.keys?.map((k, index) => {
          const createdAt = new Date(props?.detailsData?.CreatedAt);
          const updatedAt = new Date(props?.detailsData?.UpdatedAt);
          const formattedCreatedAt = createdAt?.toLocaleDateString(
            'id-ID',
            options
          );
          const formattedUpdateddAt = updatedAt?.toLocaleDateString(
            'id-ID',
            options
          );
          return (
            <HStack
              key={index}
              w={'100%'}
              borderBottom={
                '1px solid var(--divider)'
                // index !== props?.keysName?.length - 1
                //   ? '1px solid var(--divider)'
                //   : null
              }
              px={'16px'}
              py={'12px'}
              alignItems={'flex-start'}
            >
              <Text w={'120px'} opacity={'0.5'}>
                {props?.keysName[index]}
              </Text>
              <Text w={'calc(100% - 120px)'} wordBreak={'break-all'}>
                {!props?.detailsData[`${k}`]
                  ? 'No list selected'
                  : k === 'user_id'
                  ? props?.detailsData[`${k}`]
                  : k === 'CreatedAt'
                  ? formattedCreatedAt
                  : k === 'UpdatedAt'
                  ? formattedUpdateddAt
                  : typeof props?.detailsData[`${k}`] === 'number'
                  ? fn(props?.detailsData[`${k}`])
                  : props?.detailsData[`${k}`]}
              </Text>
            </HStack>
          );
        })}
      </VStack>
    </VStack>
  );
};

const DetailsModal = props => {
  return (
    <Modal
      isOpen={props.detailsModalIsOpen}
      onClose={() => {
        props.setDetailsModalIsOpen(false);
      }}
      scrollBehavior={'inside'}
      isCentered
    >
      <ModalOverlay />
      <ModalContent className={'modalContent'}>
        <ModalCloseButton
          className={'modalCloseBtn'}
          onClose={() => {
            props.setDetailsModalIsOpen(false);
          }}
        />
        <ModalHeader className={'modalHeader'}>Details</ModalHeader>
        <ModalBody pt={'0 !important'} p={'16px 0'}>
          {props.detailsComponent}
        </ModalBody>
        <ModalFooter className={'modalFooter'}>
          <HStack w={'100%'} h={'50px'} spacing={null}>
            <Button className={'btn primaryBtn'} h={'100%'} w={'50%'}>
              UPDATE
            </Button>
            <Button className={'btn primaryDarkBtn'} h={'100%'} w={'50%'}>
              DELETE
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { Nav, TopBar, List, Details, PageHeader, DetailsModal };
