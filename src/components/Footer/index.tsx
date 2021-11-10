import { Flex, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Flex
      align="center"
      justifyContent="center"
      w="100%"
      h="20"
      borderTopWidth="1px"
      borderTopStyle="solid"
      borderTopColor="gray.500"
    >
      <Text>Copyright &copy; 2021 PetFeeder. Todos direitos reservados</Text>
    </Flex>
  );
};
