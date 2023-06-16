import { useWidthResizeListener } from './myHooks.js';
// import { useEffect } from 'react';
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
          <HStack
            className={'navIconContainer'}
            spacing={null}
            bg={activeNav === 'products' ? 'primary' : null}
          >
            <Icon as={Inventory2OutlinedIcon} />
          </HStack>
          <HStack
            className={'navIconContainer'}
            spacing={null}
            bg={activeNav === 'debts' ? 'primary' : null}
          >
            <Icon as={MoneyOffCsredOutlinedIcon} />
          </HStack>
          <HStack
            className={'navIconContainer'}
            spacing={null}
            bg={activeNav === 'expenses' ? 'primary' : null}
          >
            <Icon as={MonetizationOnOutlinedIcon} />
          </HStack>
          <HStack
            className={'navIconContainer'}
            spacing={null}
            bg={activeNav === 'reports' ? 'primary' : null}
          >
            <Icon as={SummarizeOutlinedIcon} />
          </HStack>
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
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  );
};

const List = props => {
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
          <IconButton
            className={'btn'}
            w={'50%'}
            icon={<TuneOutlinedIcon />}
          ></IconButton>
        </HStack>
      </HStack>
    </VStack>
  );
};

export { Nav, TopBar, List };
