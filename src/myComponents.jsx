import {
  useWidthResizeListener,
  useFormatNumber,
  useReverseFormatNumber,
} from './myHooks.js';
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

import { ColorModeSwitcher } from './ColorModeSwitcher.js';

import {
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
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const Nav = () => {
  const screenWidth = useWidthResizeListener();
  const currentUrl = useLocation();
  const currentUrlSplitted = currentUrl.pathname.split('/');
  const activeNav = currentUrlSplitted[currentUrlSplitted.length - 1];

  if (screenWidth < 1080) {
    return (
      <HStack className={'navMobile'}>
        <Text>Nav Mobile</Text>
      </HStack>
    );
  } else {
    return (
      <VStack className={'nav'} justifyContent={'space-between'}>
        <Link href={'/'} className={'navIconContainer'}>
          <Image src={'../logo.png'} w={'22px'} />
        </Link>
        <VStack spacing={null}>
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
        <VStack spacing={null}>
          <HStack className={'navIconContainer'} spacing={null}>
            <Icon as={PersonOutlinedIcon} />
          </HStack>
          <HStack className={'navIconContainer'} spacing={null}>
            <Icon as={LogoutOutlinedIcon} />
          </HStack>
        </VStack>
      </VStack>
    );
  }
};

const TopBar = () => {
  const date = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('id-ID', options);

  return (
    <HStack
      w={'100%'}
      justifyContent={'space-between'}
      borderBottom="1px solid var(--divider)"
    >
      <Text px={'16px'}>{formattedDate}</Text>
      <HStack spacing={null}>
        <Button variant={'ghost'} borderRadius={'0 !important'} p={'8px'}>
          <Icon as={RefreshOutlinedIcon} />
        </Button>
        <ColorModeSwitcher ml={'0 !important'} />
      </HStack>
    </HStack>
  );
};

const List = props => {
  const ListFilter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [listData, setListData] = useState({});
    const fn = useFormatNumber;
    const rfn = useReverseFormatNumber;

    function resetFilter() {
      setFilter(filterReset);
    }

    const filterReset = {
      category: [
        { name: 'Foods', isChecked: false },
        { name: 'Drinks', isChecked: false },
        { name: 'Stationery', isChecked: false },
        { name: 'Hygiene', isChecked: false },
        { name: 'Medicine', isChecked: false },
        { name: 'Electronics', isChecked: false },
        { name: 'Cosmetics', isChecked: false },
        { name: 'Other', isChecked: false },
      ],
      supplyLimit: 0,
      priceRange: { min: 0, max: 0 },
      colors: [
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
    };

    const [filter, setFilter] = useState({
      category: [
        { name: 'Foods', isChecked: false },
        { name: 'Drinks', isChecked: false },
        { name: 'Stationery', isChecked: false },
        { name: 'Hygiene', isChecked: false },
        { name: 'Medicine', isChecked: false },
        { name: 'Electronics', isChecked: false },
        { name: 'Cosmetics', isChecked: false },
        { name: 'Other', isChecked: false },
      ],
      supplyLimit: 0,
      priceRange: { min: 0, max: 0 },
      colors: [
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
    });

    return (
      <>
        <IconButton
          onClick={onOpen}
          className={'btn'}
          w={'50%'}
          icon={<TuneOutlinedIcon />}
        ></IconButton>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={'inside'}
          isCentered
        >
          <ModalOverlay backdropFilter={'blur(5px)'} />
          <ModalContent className={'modalContent'}>
            <ModalCloseButton className={'closeBtn'} />

            <ModalHeader>
              <VStack alignItems={'flex-start'} spacing={null}>
                <Text>List Filter</Text>
                <Text fontWeight={'normal'} fontSize={'sm'}>
                  Click "APPLY" to apply filter to the list
                </Text>
              </VStack>
            </ModalHeader>

            <ModalBody>
              <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
                {/* Category */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <VStack alignItems={'flex-start'}>
                      {filter?.category.map((c, index) => {
                        return (
                          <Checkbox
                            key={index}
                            isChecked={c.isChecked}
                            onChange={e => {
                              setFilter(prevState => ({
                                ...prevState,
                                category: prevState.category.map(item =>
                                  item.name === c.name
                                    ? { ...item, isChecked: !item.isChecked }
                                    : item
                                ),
                              }));
                            }}
                          >
                            {c.name}
                          </Checkbox>
                        );
                      })}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>

                {/* Supply Limit */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Supply Limit
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Input
                      className={'input'}
                      placeholder={'Supply'}
                      onFocus={e => {
                        e.target.select();
                      }}
                      onChange={e => {
                        setFilter(prevState => ({
                          ...prevState,
                          supplyLimit: parseInt(rfn(e.target.value)),
                        }));
                      }}
                      value={fn(filter?.supplyLimit)}
                    />
                    <Text fontSize={'sm'} ml={'4px'} opacity={'0.5'}>
                      Displays items with lower supply than the value above
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                {/* Price Range */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Price Range
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <HStack spacing={null}>
                      <Input
                        className={'input'}
                        onFocus={e => {
                          e.target.select();
                        }}
                        onChange={e => {
                          setFilter(prevState => ({
                            ...prevState,
                            priceRange: {
                              ...prevState.priceRange,
                              min: parseInt(rfn(e.target.value)),
                            },
                          }));
                        }}
                        placeholder={'Min'}
                        value={fn(filter?.priceRange?.min)}
                      />
                      <Input
                        className={'input'}
                        placeholder={'Max'}
                        onFocus={e => {
                          e.target.select();
                        }}
                        onChange={e => {
                          setFilter(prevState => ({
                            ...prevState,
                            priceRange: {
                              ...prevState.priceRange,
                              max: parseInt(rfn(e.target.value)),
                            },
                          }));
                        }}
                        value={fn(filter?.priceRange?.max)}
                      />
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>

                {/* Colors */}
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Color
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Wrap>
                      {filter?.colors.map((c, index) => {
                        return (
                          <WrapItem
                            key={index}
                            cursor={'pointer'}
                            p={'6px 12px'}
                            border={
                              c.name === 'White' && c.isChecked
                                ? '1px solid black'
                                : '1px solid var(--divider)'
                            }
                            userSelect={'none'}
                            onClick={() => {
                              setFilter(prevState => ({
                                ...prevState,
                                colors: prevState.colors.map(item =>
                                  item.name === c.name
                                    ? { ...item, isChecked: !item.isChecked }
                                    : item
                                ),
                              }));
                            }}
                            bg={
                              c.name === 'Black' && c.isChecked
                                ? 'black'
                                : c.name === 'White' && c.isChecked
                                ? 'white'
                                : c.name === 'Brown' && c.isChecked
                                ? '#b55e12'
                                : c.isChecked
                                ? `${c.name.toLowerCase()}.300`
                                : null
                            }
                            color={
                              c.name === 'White' && c.isChecked
                                ? 'black'
                                : c.isChecked
                                ? 'white'
                                : ''
                            }
                          >
                            <Text>{c.name}</Text>
                          </WrapItem>
                        );
                      })}
                    </Wrap>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </ModalBody>

            <ModalFooter className={'modalFooter'} pt={'16px !important'}>
              <Button
                className={'btn'}
                h={'inherit'}
                w={'50%'}
                onClick={resetFilter}
              >
                RESET
              </Button>
              <Button
                className={'btn primary-btn'}
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

  return (
    <VStack w={'100%'} h={'inherit'}>
      <HStack id={'listSearch'} w={'100%'} spacing={null}>
        <Input
          className={'input'}
          placeholder="Search"
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
    </VStack>
  );
};

export { Nav, TopBar, List };
