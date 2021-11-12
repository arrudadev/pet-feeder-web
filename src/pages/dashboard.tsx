import type { NextPage } from 'next';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { AreaChart } from '../components/AreaChart';
import { BoxShadow } from '../components/BoxShadow';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PieChart } from '../components/PieChart';
import { Sidebar } from '../components/Sidebar';
import { Table } from '../components/Table';

const Dashboard: NextPage = () => {
  return (
    <>
      <Flex direction="column" h="100vh">
        <Header isLoggedIn />

        <Flex w="100%" h="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <Flex flexDirection="column" flex="1">
            <Flex>
              <Heading>Dashboard</Heading>
            </Flex>

            <Flex flex="1" mt="20px">
              <Box w="50%">
                <BoxShadow>
                  <Text fontSize="lg" mb="4" color="gray.600">
                    Controle de Alimentação Diario
                  </Text>

                  <Table />
                </BoxShadow>
              </Box>

              <Box w="50%" ml="20px">
                <BoxShadow>
                  <Text fontSize="lg" mb="4" color="gray.600">
                    Acompanhamento de Todas Alimentações
                  </Text>

                  <PieChart
                    labels={['Comeu no Horário', 'Não comeu no horário']}
                    series={[380, 560]}
                  />
                </BoxShadow>
              </Box>
            </Flex>

            <Flex flex="1" mt="20px">
              <Box w="50%">
                <BoxShadow>
                  <Text fontSize="lg" mb="4" color="gray.600">
                    Alimentações ao longo do dia
                  </Text>

                  <AreaChart />
                </BoxShadow>
              </Box>

              <Box w="50%" ml="20px">
                <BoxShadow>
                  <Text fontSize="lg" mb="4" color="gray.600">
                    Controle de Alimentação Diario
                  </Text>

                  <Table usePagination />
                </BoxShadow>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};

export default Dashboard;
