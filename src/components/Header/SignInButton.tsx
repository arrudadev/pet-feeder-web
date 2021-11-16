import { useRouter } from "next/router";

import { Button, Image } from '@chakra-ui/react';

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from '../../services/firebase';

const provider = new GoogleAuthProvider();

export const SignInButton: React.FC = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    const response = await signInWithPopup(auth, provider);

    const googleAccount = response.user;

    console.log(googleAccount);

    router.push('/dashboard');
  }

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
