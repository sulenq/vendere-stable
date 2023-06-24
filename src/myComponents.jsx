// import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useLocation, Link as ReachLink } from 'react-router-dom';

import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';

import { ColorModeSwitcher } from './ColorModeSwitcher.js';
import {
  useWidthResizeListener,
  useFormatNumber,
  useReverseFormatNumber,
  useIdDateFormat,
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Alert,
  AlertIcon,
  Badge,
} from '@chakra-ui/react';

const Nav = () => {
  // Utils
  const screenWidth = useWidthResizeListener();
  const currentUrl = useLocation();
  const currentUrlSplitted = currentUrl.pathname.split('/');
  const activeNav = currentUrlSplitted[currentUrlSplitted.length - 1];

  // Datas
  const navItems = [
    { name: 'Products', icon: Inventory2OutlinedIcon, link: '/admin/products' },
    { name: 'Debts', icon: MoneyOffCsredOutlinedIcon, link: '/admin/debts' },
    {
      name: 'Expenses',
      icon: MonetizationOnOutlinedIcon,
      link: '/admin/expenses',
    },
    { name: 'Reports', icon: SummarizeOutlinedIcon, link: '/admin/reports' },
  ];
  // Nav Mobile
  if (screenWidth < 1200) {
    return (
      <HStack className={'navMobile'} spacing={null}>
        {navItems?.map((n, index) => {
          return (
            <Tooltip
              key={index}
              label={n?.name}
              placement={'top'}
              openDelay={'500'}
            >
              <Link
                as={ReachLink}
                to={n?.link}
                className={
                  activeNav === n?.name?.toLowerCase()
                    ? 'navIconContainer primaryBtn'
                    : 'navIconContainer'
                }
              >
                <HStack justifyContent={'center'}>
                  <Icon as={n?.icon} />
                </HStack>
              </Link>
            </Tooltip>
          );
        })}
        <Tooltip label={'Profile'} placement={'top'} openDelay={'500'}>
          <Box
            className={
              activeNav === 'profile'
                ? 'navIconContainer primaryBtn'
                : 'navIconContainer'
            }
          >
            <HStack justifyContent={'center'}>
              <Icon as={PersonOutlinedIcon} />
            </HStack>
          </Box>
        </Tooltip>
      </HStack>
    );
    // Nav
  } else {
    return (
      <VStack
        id={'nav'}
        className={'nav'}
        spacing={null}
        justifyContent={'space-between'}
        overflow={'auto'}
      >
        <Tooltip label={'Landing Page'} placement={'right'} openDelay={'500'}>
          <HStack
            className={'navIconContainer'}
            // borderBottom={'1px solid var(--divider)'}
          >
            <Link as={ReachLink} to={'/'} w={'100%'}>
              <Image src={'../logo.png'} w={'28px'} mx={'auto !important'} />
            </Link>
          </HStack>
        </Tooltip>
        <VStack w={'100%'} spacing={null} overflow={'auto'}>
          {navItems?.map((n, index) => {
            return (
              <Tooltip
                key={index}
                label={n?.name}
                placement={'right'}
                openDelay={'500'}
              >
                <Link
                  as={ReachLink}
                  to={n?.link}
                  className={
                    activeNav === n?.name?.toLowerCase()
                      ? 'navIconContainer primaryBtn'
                      : 'navIconContainer'
                  }
                >
                  <Icon as={n?.icon} />
                </Link>
              </Tooltip>
            );
          })}
        </VStack>
        <VStack
          spacing={null}
          w={'100%'}
          // borderTop={'1px solid var(--divider)'}
        >
          <Tooltip label={'Profile'} placement={'right'} openDelay={'500'}>
            <HStack className={'navIconContainer'} spacing={null}>
              <Icon as={PersonOutlinedIcon} />
            </HStack>
          </Tooltip>
          <Tooltip label={'Sign Out'} placement={'right'} openDelay={'500'}>
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
  // Utils
  const screenWidth = useWidthResizeListener();

  // Data
  const date = new Date();
  const options = useIdDateFormat();
  const formattedDate = date.toLocaleDateString('id-ID', options);
  const [isScannerOn, setIsScannerOn] = useState(false);

  return (
    <HStack w={'100%'} justifyContent={'space-between'}>
      {screenWidth < 1200 ? (
        <Box p={'8px 16px'}>
          <Link as={ReachLink} to={'/'}>
            <Image src={'../logo.png'} w={'16px'} mx={'auto !important'} />
          </Link>
        </Box>
      ) : null}
      <Text px={'16px'}>{formattedDate}</Text>
      <HStack spacing={null}>
        <ColorModeSwitcher px={'16px !Important'} ml={'0 !important'} />
        <Button
          variant={'ghost'}
          borderRadius={'0 !important'}
          px={'16px !Important'}
        >
          <Icon as={RefreshOutlinedIcon} />
        </Button>
        <Button
          onClick={() => {
            setIsScannerOn(!isScannerOn);
          }}
          className={isScannerOn ? 'primaryBtn' : null}
          variant={'ghost'}
          borderBottom={isScannerOn ? '1px solid var(--primary-hover)' : null}
          borderRadius={'0 !important'}
          px={'16px !Important'}
        >
          <Icon as={ViewInArOutlinedIcon} />
        </Button>
      </HStack>
    </HStack>
  );
};

const PageHeader = props => {
  return (
    <HStack
      spacing={null}
      w={'100%'}
      h={'54px'}
      justifyContent={'space-between'}
      borderTop="1px solid var(--divider)"
      borderBottom={'1px solid var(--divider)'}
    >
      <Heading
        w={props.hasBtn ? 'calc(100% - 120px)' : '100%'}
        verticalAlign={'center'}
        py={'8px'}
        px={'16px'}
      >
        {props.title}
      </Heading>
      {props.hasBtn && (
        <InputModal
          initialData={props?.initialData}
          itemsAttribute={props.addItemsAttribute}
        />
      )}
    </HStack>
  );
};

const List = props => {
  // Utils
  const fn = useFormatNumber;
  const rfn = useReverseFormatNumber;
  const filterItems = props?.filterItems;
  const screenWidth = useWidthResizeListener();

  // Component
  const ListFilter = () => {
    // Utils
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Datas
    const filterReset = filterItems
      ? JSON.parse(JSON.stringify(filterItems))
      : {};
    const [filter, setFilter] = useState(
      filterItems ? JSON.parse(JSON.stringify(filterItems)) : {}
    );

    // Functions
    function resetFilter() {
      setFilter(filterReset);
    }

    return (
      <>
        <IconButton
          onClick={onOpen}
          className={'btn'}
          w={'50%'}
          icon={<TuneOutlinedIcon />}
        ></IconButton>

        <Modal isOpen={isOpen} scrollBehavior={'inside'} isCentered>
          <ModalOverlay backdropFilter={'blur(5px)'} />
          <ModalContent className={'modalContent'}>
            <ModalHeader className={'modalHeader'} borderBottom={'none'}>
              <VStack alignItems={'flex-start'} spacing={null}>
                <Text fontSize={'20px'}>List Filter</Text>
                <Text fontWeight={'normal'} fontSize={'sm'}>
                  Click "APPLY" to apply filter to the list and close
                </Text>
              </VStack>
            </ModalHeader>

            <ModalBody p={'0'}>
              <Accordion defaultIndex={[]} allowMultiple>
                {filter?.map((f, index) => {
                  if (f?.type === 'checkbox') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton className={'acordion'}>
                          <Box as="span" flex="1" textAlign="left">
                            {f?.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} className={'acordion'}>
                          <VStack alignItems={'flex-start'}>
                            {f?.items?.map((i, iIndex) => {
                              return (
                                <Checkbox
                                  key={iIndex}
                                  isChecked={i?.isChecked}
                                  onChange={e => {
                                    const prevState = JSON.parse(
                                      JSON.stringify(filter)
                                    );
                                    prevState[index].items[iIndex].isChecked =
                                      !prevState[index].items[iIndex].isChecked;
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
                  } else if (f?.type === 'number') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton className={'acordion'}>
                          <Box as="span" flex="1" textAlign="left">
                            {f?.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} className={'acordion'}>
                          <SimpleGrid columns={f?.columns}>
                            {f?.items?.map((i, iIndex) => {
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
                                      prevState[index].items[iIndex].value =
                                        parseInt(rfn(e.target.value));
                                      return [...prevState];
                                    });
                                  }}
                                  value={fn(filter[index].items[iIndex].value)}
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
                  } else if (f?.type === 'date') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton className={'acordion'}>
                          <Box as="span" flex="1" textAlign="left">
                            {f?.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} className={'acordion'}>
                          <SimpleGrid columns={f?.columns}>
                            {f?.items?.map((i, iIndex) => {
                              return (
                                <Input
                                  key={iIndex}
                                  className={'input'}
                                  placeholder={i?.name}
                                  type="datetime-local"
                                  // onChange={e => {
                                  //   setFilter(prevState => {
                                  //     prevState[index].items[iIndex].value =
                                  //       parseInt(rfn(e.target.value));
                                  //     return [...prevState];
                                  //   });
                                  // }}
                                  // value={fn(filter[index].items[iIndex].value)}
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
                  } else if (f?.type === 'color') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton className={'acordion'}>
                          <Box as="span" flex="1" textAlign="left">
                            {f?.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} className={'acordion'}>
                          <Wrap>
                            {f?.items?.map((i, iIndex) => {
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
                                    prevState[index].items[iIndex].isChecked =
                                      !prevState[index].items[iIndex].isChecked;
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
                  } else if (f?.type === 'string') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton className={'acordion'}>
                          <Box as="span" flex="1" textAlign="left">
                            {f?.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} className={'acordion'}>
                          <SimpleGrid columns={f?.columns}>
                            {f?.items?.map((i, iIndex) => {
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
                                      prevState[index].items[iIndex].value =
                                        e.target.value;
                                      return [...prevState];
                                    });
                                  }}
                                  value={filter[index].items[iIndex].value}
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
                  } else {
                    return <Text>{`Filter Data '${f?.name}' Invalid`}</Text>;
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
  function listHandleClick(e, selectedListData) {
    const listBody = document.querySelectorAll('#listBody tr');
    listBody.forEach(l => {
      l?.classList.remove('selectedList');
    });
    e.currentTarget?.classList.add('selectedList');
    props?.selectList(selectedListData);
  }

  return (
    <VStack w={'100%'} h={'calc(100% - 50px)'} spacing={null} overflow={'auto'}>
      <HStack id={'listSearch'} w={'100%'} spacing={null}>
        <Input
          className={'input'}
          placeholder={props?.searchPlaceholder}
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
              {props?.listItems?.attributes?.map((a, index) => {
                if (screenWidth > 1200 || (screenWidth < 1200 && index < 3)) {
                  return (
                    <Th
                      key={index}
                      px={'16px !important'}
                      isNumeric={a?.isNumeric}
                    >
                      {a?.name}
                    </Th>
                  );
                } else {
                  return null;
                }
              })}
              <Th px={'16px !important'} isNumeric>
                {props?.listItems?.listAction?.name}
              </Th>
            </Tr>
          </Thead>
          <Tbody id={'listBody'}>
            {props?.listItems?.data?.map((d, index) => {
              return (
                <Tr
                  key={index}
                  className={'listItem'}
                  onClick={e => {
                    listHandleClick(e, d);
                  }}
                >
                  {props?.listItems?.attributes?.map((a, aIndex) => {
                    if (
                      screenWidth > 1200 ||
                      (screenWidth < 1200 && aIndex < 3)
                    ) {
                      return (
                        <Td key={aIndex} isNumeric={a?.isNumeric}>
                          <ReadOnlyData
                            item={{
                              valueType: a?.type,
                              value: d[a?.key],
                              colorScheme: a?.colorOptions
                                ? a?.colorOptions[d[a?.key]]
                                : '',
                            }}
                          />
                        </Td>
                      );
                    } else {
                      return null;
                    }
                  })}

                  <Td isNumeric className={'detailsBtn'}>
                    {props?.listItems?.listAction?.action}
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
  return (
    <VStack
      w={'100%'}
      spacing={null}
      alignItems={'flex-start'}
      overflow={'auto'}
    >
      <VStack w={'100%'}>
        {props?.hasImage ? (
          <Image
            src={'../img/noImage.jpg'}
            w={'100%'}
            h={'400px !Important'}
            objectFit={'cover'}
            borderBottom={'1px solid var(--divider)'}
          />
        ) : null}
      </VStack>
      <VStack w={'100%'} spacing={null}>
        {props?.detailsItems?.attributes?.map((a, index) => {
          return (
            <Box
              key={index}
              w={'100%'}
              borderBottom={
                index !== props?.detailsItems?.attributes?.length - 1
                  ? '1px solid var(--divider)'
                  : ''
              }
              px={'16px'}
              py={'12px'}
              alignItems={'flex-start'}
            >
              <Text opacity={0.5}>{a?.name}</Text>
              {Object.keys(props?.detailsItems?.data).length !== 0 ? (
                <ReadOnlyData
                  item={{
                    valueType: a?.type,
                    value: props?.detailsItems?.data[a?.key],
                    colorScheme: a?.colorOptions
                      ? a?.colorOptions[props?.detailsItems?.data[a?.key]]
                      : '',
                  }}
                />
              ) : (
                <Text opacity={0.5}>Select list first</Text>
              )}
            </Box>
          );
        })}
      </VStack>
    </VStack>
  );
};

const ReportDetails = props => {
  // status: 'profit',
  // period: 'April 2023',
  // revenue: { penjualan: 35325000, grossRevenue: 35155000 },
  // debt: { piutang: 15000, bebanUtang: 0, totalRevenue: 35005000 },
  // cos: {
  //   pembelian: 1485800,
  //   bebanAngkut: 0,
  //   totalCos: 14858000,
  //   grossProfit: 20147000,
  //   expenses: {
  //     bebanOperasional: {
  //       bebanListrik: 0,
  //       bebanSewa: 0,
  //       bebanTelepon: 0,
  //     },
  //   },
  //   bebanLain: { penyesuaianPersediaan: 0, lainLain: 0 },
  //   totalExpenses: 14858000,
  // },
  // totalProfit: 5289000,
  return (
    <VStack
      w={'100%'}
      spacing={null}
      alignItems={'flex-start'}
      overflow={'auto'}
    >
      <VStack w={'100%'} spacing={null}>
        {props?.detailsItems?.attributes?.map((a, index) => {
          return (
            <Box
              key={index}
              w={'100%'}
              borderBottom={
                index !== props?.detailsItems?.attributes?.length - 1
                  ? '1px solid var(--divider)'
                  : ''
              }
              px={'16px'}
              py={'12px'}
              alignItems={'flex-start'}
            >
              <Text opacity={0.5}>{a?.name}</Text>
              {Object.keys(props?.detailsItems?.data).length !== 0 ? ( // <ReadOnlyData
                //   item={{
                //     valueType: a?.type,
                //     value: props?.detailsItems?.data[a?.key],
                //     colorScheme: a?.colorOptions
                //       ? a?.colorOptions[props?.detailsItems?.data[a?.key]]
                //       : '',
                //   }}
                // />
                'Anjay'
              ) : (
                <Text opacity={0.5}>Select list first</Text>
              )}
            </Box>
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
      // size={'xl'}
      onClose={() => {
        props.setDetailsModalIsOpen(false);
      }}
      scrollBehavior={'inside'}
      initialFocusRef={null}
      isCentered
    >
      <ModalOverlay backdropFilter={'blur(5px)'} />
      <ModalContent className={'modalContent'}>
        <ModalCloseButton className={'modalCloseBtn'} />
        <ModalHeader className={'modalHeader'}>
          <Text fontSize={'20px'}>Details</Text>
        </ModalHeader>
        <ModalBody p={'0 !important'}>{props.detailsComponent}</ModalBody>
        <ModalFooter className={'modalFooter'}>
          <VStack w={'100%'} spacing={null}>
            <HStack
              w={'100%'}
              h={props?.detailsActions && '50px'}
              spacing={null}
            >
              {props?.detailsActions &&
                props?.detailsActions?.map((i, index) => {
                  if (index < 2) {
                    return (
                      <InputModal
                        key={index}
                        borderLeft={
                          index === 1 ? '1px solid var(--divider)' : null
                        }
                        initialData={i?.initialData}
                        itemsAttribute={i?.itemsAttribute}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
            </HStack>
            {props?.detailsActions?.[2] && (
              <InputModal
                itemsAttribute={props?.detailsActions[2]?.itemsAttribute}
                initialData={props?.detailsActions[2]?.initialData}
              />
            )}
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const InputModal = props => {
  // Utils
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Datas
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props?.initialData);
  }, [props?.initialData]);
  const modalContentRef = useRef();

  return (
    <>
      <Button
        className={`btn ${props?.itemsAttribute?.btnClassName}`}
        onClick={onOpen}
        w={props?.itemsAttribute?.btnW}
        h={'100%'}
        leftIcon={props?.itemsAttribute?.icon}
        borderLeft={props?.borderLeft}
      >
        {props?.itemsAttribute?.purpose}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={'inside'}
        initialFocusRef={modalContentRef}
        isCentered
      >
        <ModalOverlay backdropFilter={'blur(5px)'} />
        <ModalContent className={'modalContent'} ref={modalContentRef}>
          <ModalHeader className={'modalHeader'}>
            <Text fontSize={'20px'}>{props?.itemsAttribute?.title}</Text>
          </ModalHeader>
          <ModalBody p={'0px !important'}>
            {props?.itemsAttribute?.alert &&
            props?.itemsAttribute?.alert?.position === 'top' ? (
              <Alert
                status={props?.itemsAttribute?.alert?.status}
                alignItems={'flex-start'}
                // variant="left-accent"
              >
                <AlertIcon />
                <Text alignSelf={'flex-start'}>
                  {props?.itemsAttribute?.alert?.text}
                </Text>
              </Alert>
            ) : null}
            <VStack
              w={'100%'}
              spacing={'16px'}
              p={'24px !important'}
              alignItems={'flex-start'}
            >
              {props?.itemsAttribute?.items?.map((i, index) => {
                switch (i?.readOnly) {
                  case true:
                    return (
                      <VStack
                        key={index}
                        alignItems={'flex-start'}
                        spacing={null}
                      >
                        <Text opacity={0.5}>{i?.name}</Text>;
                        <ReadOnlyData
                          item={{
                            valueType: i?.type,
                            value: data[i?.key],
                            colorScheme: i?.colorOptions
                              ? i?.colorOptions[data[i?.key]]
                              : null,
                          }}
                        />
                      </VStack>
                    );
                  default:
                    return (
                      <VStack
                        key={index}
                        w={'100%'}
                        alignItems={'flex-start'}
                        spacing={null}
                      >
                        <Text opacity={0.5}>{i?.name}</Text>;
                        <InputData
                          key={index}
                          item={{
                            initialData: data,
                            valueType: i?.type,
                            valueKey: i?.key,
                            value: data[i?.key],
                            placeholder: i?.name,
                            onInput: setData,
                            options: i?.options && i?.options,
                          }}
                        />
                      </VStack>
                    );
                }
              })}
            </VStack>
            {props?.itemsAttribute?.alert &&
            props?.itemsAttribute?.alert?.position === 'bottom' ? (
              <Alert
                status={props?.itemsAttribute?.alert?.status}
                alignItems={'flex-start'}
                // variant="left-accent"
              >
                <AlertIcon />
                <Text alignSelf={'flex-start'}>
                  {props?.itemsAttribute?.alert?.text}
                </Text>
              </Alert>
            ) : null}
          </ModalBody>
          <ModalFooter className={'modalFooter'}>
            <HStack w={'100%'} h={'50px'} spacing={null}>
              <Button className={'btn'} onClick={onClose} h={'100%'} w={'50%'}>
                CANCEL
              </Button>
              <Button
                className={'btn primaryBtn'}
                onClick={() => {
                  if (
                    typeof props?.itemsAttribute?.handlePurpose === 'function'
                  ) {
                    props?.itemsAttribute?.handlePurpose(data);
                  }
                  onClose();
                }}
                h={'100%'}
                w={'50%'}
              >
                {props?.itemsAttribute?.purpose}
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const ReadOnlyData = props => {
  // Utils
  const fn = useFormatNumber;
  const dateFormat = useIdDateFormat();

  // Datas
  const item = props?.item;

  switch (item?.valueType) {
    case 'number':
      return <Text>{fn(item?.value)}</Text>;
    case 'date':
      const date = new Date(item?.value);
      return <Text>{date?.toLocaleDateString('id-ID', dateFormat)}</Text>;
    case 'badge':
      return <Badge colorScheme={item?.colorScheme}>{item?.value}</Badge>;
    case 'cartList':
      return (
        <VStack w={'100%'} alignItems={'flex-start'}>
          {item?.value?.map((d, index) => {
            return (
              <VStack
                key={index}
                w={'100%'}
                spacing={null}
                pb={'8px'}
                // borderBottom={'1px solid var(--divider)'}
              >
                <HStack w={'100%'} justifyContent={'space-between'}>
                  <Text>{`${d?.name}`}</Text>
                  <Text>{fn(d?.totalPrice)}</Text>
                </HStack>
                <HStack w={'100%'} justifyContent={'space-between'}>
                  <Text>{`@${fn(d?.price)} [×${d?.qty}]`}</Text>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
      );
    case 'textArea':
      const text = item?.value;
      const lines = text?.split('\n');
      if (text) {
        return lines?.map((line, index) => {
          return (
            <Text key={index}>
              {line}
              {index !== lines.length - 1 && <br />}
            </Text>
          );
        });
      } else {
        return <Text>-</Text>;
      }

    default:
      return <Text>{item?.value}</Text>;
  }
};

const InputData = props => {
  // Utils
  const fn = useFormatNumber;
  const rfn = useReverseFormatNumber;

  // Datas
  const item = props?.item;

  switch (item?.valueType) {
    case 'number':
      return (
        <Input
          className={'input'}
          placeholder={item?.placeholder}
          onChange={e => {
            const newData = {
              ...item?.initialData,
              [item?.valueKey]: parseInt(rfn(e.target.value)),
            };
            item?.onInput(newData);
          }}
          value={fn(item?.initialData[item?.valueKey])}
        />
      );
    case 'selectString':
      return (
        <Menu>
          <MenuButton className={'selectBtn'} as={Button} w={'100%'}>
            <HStack w={'100%'} justifyContent={'space-between'}>
              <Text>
                {item?.initialData[item?.valueKey] || item?.placeholder}
              </Text>
              <Icon as={KeyboardArrowDownIcon} />
            </HStack>
          </MenuButton>
          <MenuList>
            {item?.options?.map((o, index) => {
              return (
                <MenuItem
                  key={index}
                  className={'menuItem'}
                  onClick={() => {
                    item?.onInput({
                      ...item?.initialData,
                      [item?.valueKey]: o?.name,
                    });
                  }}
                >
                  {o?.name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      );
    case 'selectColor':
      return (
        <Menu>
          <MenuButton className={'selectBtn'} as={Button} w={'100%'}>
            <HStack w={'100%'} justifyContent={'space-between'}>
              <HStack>
                {item?.value ? (
                  <Box
                    bg={
                      item?.value === 'Black'
                        ? 'black'
                        : item?.value === 'White'
                        ? 'white'
                        : item?.value === 'Brown'
                        ? '#b55e12'
                        : `${item?.value?.toLowerCase()}.300`
                    }
                    border={
                      item?.value === 'White'
                        ? '1px solid var(--divider)'
                        : null
                    }
                    w={'10px'}
                    h={'12px'}
                  ></Box>
                ) : null}
                <Text>{item?.value || 'Color'}</Text>
              </HStack>
              <Icon as={KeyboardArrowDownIcon} />
            </HStack>
          </MenuButton>
          <MenuList>
            {item?.options?.map((c, index) => {
              return (
                <MenuItem
                  key={index}
                  className={'menuItem'}
                  onClick={() => {
                    item?.onInput({
                      ...item?.initialData,
                      [item?.valueKey]: c?.name,
                    });
                  }}
                >
                  <HStack>
                    <Box
                      bg={
                        c?.name === 'Black'
                          ? 'black'
                          : c?.name === 'White'
                          ? 'white'
                          : c?.name === 'Brown'
                          ? '#b55e12'
                          : `${c?.name?.toLowerCase()}.300`
                      }
                      border={
                        c?.name === 'White' ? '1px solid var(--divider)' : null
                      }
                      w={'10px'}
                      h={'12px'}
                    ></Box>
                    <Text>{c?.name}</Text>
                  </HStack>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      );
    case 'date':
      return (
        <Input className={'input'} placeholder={'Date'} type="datetime-local" />
      );
    default:
      return (
        <Input
          className={'input'}
          placeholder={item?.placeholder}
          onChange={e => {
            item?.onInput({
              ...item?.initialData,
              [item?.valueKey]: e.target.value,
            });
          }}
          value={item?.initialData[item?.valueKey]}
        />
      );
  }
};

export {
  Nav,
  TopBar,
  List,
  Details,
  PageHeader,
  DetailsModal,
  InputModal,
  ReportDetails,
};
