import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    primary: '#5a8cf0',
    'primary-hover': '#6a99f6',
    'primary-active': '#5483e1',
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#121214' : 'white',
      },
    }),
  },
  components: {
    Modal: {
      baseStyle: props => ({
        dialog: {
          bg: props.colorMode === 'dark' ? '#121214' : 'white',
          border: props.colorMode === 'dark' ? '1px solid var(--divider)' : '',
        },
      }),
    },
    Tooltip: {
      baseStyle: props => ({
        bg: 'primary',
        color: 'white',
      }),
    },
    Menu: {
      baseStyle: props => ({
        list: {
          bg: props.colorMode === 'dark' ? '#121214' : 'white',
        },
        item: {
          bg: props.colorMode === 'dark' ? '#121214' : 'white',
        },
      }),
    },
  },
});
