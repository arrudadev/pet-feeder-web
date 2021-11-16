import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { PetContextProvider } from '../contexts/PetContext';
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';

import '../services/firebase';

import '../components/DatePicker/date-picker.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PetContextProvider>
        <SidebarDrawerContextProvider>
          <Component {...pageProps} />
        </SidebarDrawerContextProvider>
      </PetContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
