import { Button, Image } from '@chakra-ui/react';

import { useUser } from '../../hooks/useUser';

export const SignInButton: React.FC = () => {
  const { googleLogin } = useUser();

  const handleSignIn = async () => {
    await googleLogin();
  };

  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="gray.600"
      fontWeight="700"
      h="3rem"
      bg="gray.400"
      borderRadius="3rem"
      border="0"
      p="0 1.5rem"
      onClick={() => handleSignIn()}
    >
      <Image
        src="/icons/google-icon.png"
        alt="Google Icon"
        h="24px"
        w="24px"
        mr="20px"
      />
      Entrar com o Google
    </Button>
  );
};
