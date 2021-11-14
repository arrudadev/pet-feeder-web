import type { NextPage } from 'next';

import { Flex, Grid, Heading } from '@chakra-ui/react';

import { AllMealAccompanimentChart } from '../components/AllMealAccompanimentChart';
import { DayliControl } from '../components/DayliControl';
import { DayMealsChart } from '../components/DayMealsChart';
import { Header } from '../components/Header';
import { MealAccompaniment } from '../components/MealAccompaniment';
import { Sidebar } from '../components/Sidebar';

const Dashboard: NextPage = () => {
  return (
    <>
      <Flex direction="column">
        <Header isLoggedIn />

        <Flex w="100%" h="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <Flex flexDirection="column" flex="1">
            <Flex>
              <Heading>Dashboard</Heading>
            </Flex>

            <Grid templateColumns="1fr 1fr" gap="20px" mt="20px">
              <MealAccompaniment />

              <AllMealAccompanimentChart />

              <DayMealsChart />

              <DayliControl height="250px" />
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
