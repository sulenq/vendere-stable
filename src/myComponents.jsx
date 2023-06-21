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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Alert,
  AlertIcon,
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

  if (screenWidth < 1200) {
    // Nav Mobile
    return (
      <HStack className={'navMobile'} spacing={null}>
        <Tooltip label={'Products'} placement={'right'} openDelay={'500'}>
          <Link
            as={ReachLink}
            to={'/admin/products'}
            className={
              activeNav === 'products'
                ? 'navIconContainer primaryBtn'
                : 'navIconContainer'
            }
          >
            <HStack justifyContent={'center'}>
              <Icon as={Inventory2OutlinedIcon} />
            </HStack>
          </Link>
        </Tooltip>
        <Tooltip label={'Debts'} placement={'right'} openDelay={'500'}>
          <Link
            as={ReachLink}
            to={'/admin/debts'}
            className={
              activeNav === 'debts'
                ? 'navIconContainer primaryBtn'
                : 'navIconContainer'
            }
          >
            <HStack justifyContent={'center'}>
              <Icon as={MoneyOffCsredOutlinedIcon} />
            </HStack>
          </Link>
        </Tooltip>
        <Tooltip label={'Expenses'} placement={'right'} openDelay={'500'}>
          <Link
            as={ReachLink}
            to={'/admin/products'}
            className={
              activeNav === 'expenses'
                ? 'navIconContainer primaryBtn'
                : 'navIconContainer'
            }
          >
            <HStack justifyContent={'center'}>
              <Icon as={MonetizationOnOutlinedIcon} />
            </HStack>
          </Link>
        </Tooltip>
        <Tooltip label={'Reports'} placement={'right'} openDelay={'500'}>
          <Link
            as={ReachLink}
            to={'/admin/products'}
            className={
              activeNav === 'reports'
                ? 'navIconContainer primaryBtn'
                : 'navIconContainer'
            }
          >
            <HStack justifyContent={'center'}>
              <Icon as={SummarizeOutlinedIcon} />
            </HStack>
          </Link>
        </Tooltip>
        <Tooltip label={'Profile'} placement={'right'} openDelay={'500'}>
          <Link
            as={ReachLink}
            to={'/admin/products'}
            className={
              activeNav === 'profile'
                ? 'navIconContainer primaryBtn'
                : 'navIconContainer'
            }
          >
            <HStack justifyContent={'center'}>
              <Icon as={PersonOutlinedIcon} />
            </HStack>
          </Link>
        </Tooltip>
      </HStack>
    );
  } else {
    // Nav
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
              <Tooltip label={n?.name} placement={'right'} openDelay={'500'}>
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
          {/* <Tooltip label={'Products'} placement={'right'} openDelay={'500'}>
            <Link
              as={ReachLink}
              to={'/admin/products'}
              className={
                activeNav === 'products'
                  ? 'navIconContainer primaryBtn'
                  : 'navIconContainer'
              }
            >
              <Icon as={Inventory2OutlinedIcon} />
            </Link>
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
          </Tooltip> */}
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
  const options = useIdFormatDate();
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
      ) : (
        ''
      )}
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
      // h={'50px'}
      justifyContent={'space-between'}
      borderBottom={'1px solid var(--divider)'}
    >
      <Heading
        w={props.hasBtn ? 'calc(100% - 120px)' : '100%'}
        h={'100%'}
        borderTop="1px solid var(--divider)"
        py={'8px'}
        px={'16px'}
      >
        {props.title}
      </Heading>
      {props.hasBtn ? (
        <InputModal
          initialData={props?.initialData}
          itemsAttribute={props.addItemsAttribute}
        />
      ) : null}
    </HStack>
  );
};

const List = props => {
  // Utils
  const fn = useFormatNumber;
  const rfn = useReverseFormatNumber;
  const filterItems = props?.filterItems;
  // const screenWidth = useWidthResizeListener();

  // Component
  const ListFilter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function resetFilter() {
      setFilter(filterReset);
    }

    const filterReset = JSON.parse(JSON.stringify(filterItems));

    const [filter, setFilter] = useState(
      JSON.parse(JSON.stringify(filterItems))
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
          <ModalOverlay backdropFilter={'blur(5px)'} />
          <ModalContent className={'modalContent'}>
            <ModalHeader className={'modalHeader'} borderBottom={'none'}>
              <VStack alignItems={'flex-start'} spacing={null}>
                <Text fontSize={'20px'}>List Filter</Text>
                <Text fontWeight={'normal'} fontSize={'sm'}>
                  Click "APPLY" to apply filter to the list
                </Text>
              </VStack>
            </ModalHeader>

            <ModalBody p={'0'}>
              <Accordion defaultIndex={[]} allowMultiple>
                {filter?.map((f, index) => {
                  if (f.type === 'checkbox') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton className={'acordion'}>
                          <Box as="span" flex="1" textAlign="left">
                            {f.name}
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
                  } else if (f.type === 'input') {
                    return (
                      <AccordionItem key={index}>
                        <AccordionButton className={'acordion'}>
                          <Box as="span" flex="1" textAlign="left">
                            {f.name}
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
                  } else if (f.type === 'color') {
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
      l?.classList.remove('selectedList');
    });
    e.currentTarget?.classList.add('selectedList');
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
        {props?.hasImage ? (
          <Image
            src={'../img/noImage.jpg'}
            boxSize={'100%'}
            objectFit={'cover'}
            borderBottom={'1px solid var(--divider)'}
          />
        ) : null}
      </VStack>
      <VStack w={'100%'} spacing={null}>
        {props?.detailsKeys?.map((k, index) => {
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
              borderBottom={'1px solid var(--divider)'}
              px={'16px'}
              py={'12px'}
              alignItems={'flex-start'}
            >
              <Text w={'120px'} opacity={'0.5'}>
                {props?.detailsNames[index]}
              </Text>
              <Text w={'calc(100% - 120px)'} wordBreak={'break-all'}>
                {!props?.detailsData?.[`${k}`]
                  ? 'No list selected'
                  : k === 'user_id'
                  ? props?.detailsData?.[`${k}`]
                  : k === 'CreatedAt'
                  ? formattedCreatedAt
                  : k === 'UpdatedAt'
                  ? formattedUpdateddAt
                  : typeof props?.detailsData?.[`${k}`] === 'number'
                  ? fn(props?.detailsData?.[`${k}`])
                  : props?.detailsData?.[`${k}`]}
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
            <HStack w={'100%'} h={'50px'} spacing={null}>
              <InputModal
                itemsAttribute={props?.detailsActions[0]?.itemsAttribute}
                initialData={props?.detailsActions[0]?.initialData}
              />
              <InputModal
                borderLeft={'1px solid var(--divider)'}
                itemsAttribute={props?.detailsActions[1]?.itemsAttribute}
                initialData={props?.detailsActions[1]?.initialData}
              />
            </HStack>
            {props?.detailsActions[2] ? (
              <InputModal
                itemsAttribute={props?.detailsActions[2]?.itemsAttribute}
                initialData={props?.detailsActions[2]?.initialData}
              />
            ) : null}
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const InputModal = props => {
  // Utils
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fn = useFormatNumber;
  const rfn = useReverseFormatNumber;

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
            <VStack w={'100%'} spacing={'16px'} p={'24px !important'}>
              {props?.itemsAttribute?.items?.map((i, index) => {
                if (i?.readOnly) {
                  return (
                    <HStack key={index} w={'100%'} alignItems={'flex-start'}>
                      <Text w={'120px'}>{i?.name}</Text>
                      <Text alignSelf={'flex-start'}>{data[i?.key]}</Text>
                    </HStack>
                  );
                } else if (i?.type === 'string') {
                  return (
                    <Input
                      key={index}
                      className={'input'}
                      onChange={e => {
                        setData({ ...data, [i?.key]: e.target.value });
                      }}
                      placeholder={i?.name}
                      value={data[i?.key]}
                    />
                  );
                } else if (i?.type === 'price') {
                  return (
                    <InputGroup key={index} className={'input'}>
                      <InputLeftAddon className={'input'} children="Rp" />
                      <Input
                        className={'input'}
                        onChange={e => {
                          setData({
                            ...data,
                            [i?.key]: parseInt(rfn(e.target.value)),
                          });
                        }}
                        placeholder={i?.name}
                        value={fn(data[i?.key])}
                      />{' '}
                    </InputGroup>
                  );
                } else if (i?.type === 'number') {
                  return (
                    <Input
                      key={index}
                      className={'input'}
                      onChange={e => {
                        setData({
                          ...data,
                          [i?.key]: parseInt(rfn(e.target.value)),
                        });
                      }}
                      placeholder={i?.name}
                      value={fn(data[i?.key])}
                    />
                  );
                } else if (i?.type === 'stock') {
                  return (
                    <InputGroup key={index} className={'input'}>
                      <Input
                        className={'input'}
                        onChange={e => {
                          setData({
                            ...data,
                            [i?.key]: parseInt(rfn(e.target.value)),
                          });
                        }}
                        placeholder={i?.name}
                        value={fn(data[i?.key])}
                      />
                      <InputRightAddon className={'input'} children="pcs" />
                    </InputGroup>
                  );
                } else if (i?.type === 'selectString') {
                  return (
                    <Menu key={index}>
                      <MenuButton
                        className={'selectBtn'}
                        as={Button}
                        w={'100%'}
                      >
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <Text>{data?.[i?.key] || i?.name}</Text>
                          <Icon as={KeyboardArrowDownIcon} />
                        </HStack>
                      </MenuButton>
                      <MenuList>
                        {i?.options?.map((c, index) => {
                          return (
                            <MenuItem
                              key={index}
                              onClick={() => {
                                setData({ ...data, [i?.key]: c?.name });
                              }}
                            >
                              {c?.name}
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </Menu>
                  );
                } else if (i?.type === 'selectColor') {
                  return (
                    <Menu key={index}>
                      <MenuButton
                        className={'selectBtn'}
                        as={Button}
                        w={'100%'}
                      >
                        <HStack w={'100%'} justifyContent={'space-between'}>
                          <HStack>
                            {data?.color ? (
                              <Box
                                bg={
                                  data.color === 'Black'
                                    ? 'black'
                                    : data.color === 'White'
                                    ? 'white'
                                    : data.color === 'Brown'
                                    ? '#b55e12'
                                    : `${data.color?.toLowerCase()}.300`
                                }
                                border={
                                  data.color === 'White'
                                    ? '1px solid var(--divider)'
                                    : null
                                }
                                w={'10px'}
                                h={'12px'}
                              ></Box>
                            ) : null}
                            <Text>{data?.color || 'Color'}</Text>
                          </HStack>
                          <Icon as={KeyboardArrowDownIcon} />
                        </HStack>
                      </MenuButton>
                      <MenuList>
                        {i?.options?.map((c, index) => {
                          return (
                            <MenuItem
                              key={index}
                              onClick={() => {
                                setData({ ...data, color: c?.name });
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
                                    c?.name === 'White'
                                      ? '1px solid var(--divider)'
                                      : null
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
                } else {
                  return <Text>Invalid input type, check itemsAttribute</Text>;
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

export { Nav, TopBar, List, Details, PageHeader, DetailsModal, InputModal };
