import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { PetContextProvider } from '../contexts/PetContext';
import { theme } from '../styles/theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PetContextProvider>
        <Component {...pageProps} />
      </PetContextProvider>      
    </ChakraProvider>
  );
}

export default MyApp;
