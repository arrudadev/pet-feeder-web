import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  colors: {
    green: {
      '600': '#2B7A4B',
      '500': '#32B768',
      '400': '#DAF2E4',
    },
    gray: {
      '600': '#52665A',
      '500': '#CFCFCF',
      '400': '#F0F0F0',
    },
  },
});
