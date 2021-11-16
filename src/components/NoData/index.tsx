import { AiFillDatabase } from 'react-icons/ai';

import { Icon, Flex, Text } from '@chakra-ui/react';

export const NoData = () => {
  return (
    <Flex 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      h="100%" 
      w="100%"
    >
      <Icon as={AiFillDatabase} fontSize="42px" />

      <Text mt="20px">Nenhum Dado encontrado</Text>
    </Flex>
  );
}