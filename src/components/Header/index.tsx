import React from 'react';

import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

import { DatePicker } from '../DatePicker';
import { PetSelect } from '../PetSelect';
import { Profile } from './Profile';
import { SignInButton } from './SignInButton';

type HeaderProps = {
  isLoggedIn?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isLoggedIn = false }) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="gray.500"
    >
      <Flex
        as="header"
        w="100%"
        maxW={1480}
        h="20"
        mx="auto"
        px="6"
        align="center"
        justifyContent="space-between"
      >
        <Flex>
          <Heading
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            color="green.500"
          >
            PetFeeder
          </Heading>

          {isLoggedIn && isWideVersion && (
            <PetSelect />
          )}

          {isLoggedIn && isWideVersion && (
            <Box ml="20px">
              <DatePicker />
            </Box>
          )}
        </Flex>

        {isLoggedIn && isWideVersion && <Profile />}

        {!isLoggedIn && isWideVersion && <SignInButton />}
      </Flex>
    </Flex>
  );
};
