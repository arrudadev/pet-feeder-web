import type { NextPage } from 'next';

import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Lading: NextPage = () => {
  return (
    <Flex flexDirection="column">
      <Header />

      <Flex
        as="main"
        align="center"
        justifyContent="center"
        maxW="1480px"
        mx="auto"
        px="6"
        flexWrap="wrap"
        position="relative"
      >
        <Flex as="section" flexDirection="column" maxW="600px">
          <Heading
            fontSize="4.5rem"
            lineHeight="4.5rem"
            fontWeight="700"
            mt="2.5rem"
          >
            Alimente seu Pet de forma fácil
          </Heading>

          <Text fontSize="1.5rem" lineHeight="2.5rem" mt="1.5rem" mb="1.5rem">
            Cuide da saúde do seu pet, alimente ele com a quantidade correta e
            nos horários corretos,{' '}
            <Text color="green.500" fontWeight="bold">
              nós te ajudamos a fazer isso.
            </Text>
          </Text>
        </Flex>

        <Image src="/dog.png" alt="Cachorro" h="50%" w="50%" />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Lading;
