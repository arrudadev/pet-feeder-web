import { Flex, Spinner as ChakraSpinner, Text } from '@chakra-ui/react';

type SpinnerProps = {
  visible: boolean;
};

export const Spinner: React.FC<SpinnerProps> = ({ visible }) => {
  return (
    <>
      {visible && (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          w="100vw"
          h="100vh"
          position="absolute"
          top="0"
          left="0"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          zIndex="9999"
        >
          <ChakraSpinner color="white" size="xl" />

          <Text color="white" fontSize="28px" mt="30px">
            Carregando...
          </Text>
        </Flex>
      )}
    </>
  );
};
