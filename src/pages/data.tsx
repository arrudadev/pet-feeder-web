import type { NextPage } from 'next';

import { Box, Flex } from '@chakra-ui/react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Table } from '../components/Table';

const Data: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header isLoggedIn />

      <Flex w="100%" h="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} p="8" w="100%">
          <Table usePagination />
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Data;
