import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { useUser } from '../../hooks/useUser';

export const Profile: React.FC = () => {
  const { userName, userEmail, userPhotoUrl } = useUser();

  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>{userName}</Text>
        <Text color="gray.600" fontSize="small">
          {userEmail}
        </Text>
      </Box>

      <Avatar size="md" name="Alexandre Monteiro" src={userPhotoUrl} />
    </Flex>
  );
};
