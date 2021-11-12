import { Box } from '@chakra-ui/react';

type BoxShadowProps = {
  children: React.ReactNode;
};

export const BoxShadow: React.FC<BoxShadowProps> = ({ children }) => {
  return (
    <Box
      p={['6', '8']}
      borderRadius={8}
      pb="4"
      w="100%"
      h="100%"
      boxShadow="lg"
      rounded="md"
      border="1px solid #CFCFCF"
    >
      {children}
    </Box>
  );
};
