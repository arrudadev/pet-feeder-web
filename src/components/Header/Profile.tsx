import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export const Profile: React.FC = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Alexandre Monteiro</Text>
        <Text color="gray.600" fontSize="small">
          alexandre.monteiro.bec@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Alexandre Monteiro"
        src="https://github.com/monteiro-alexandre.png"
      />
    </Flex>
  );
};
