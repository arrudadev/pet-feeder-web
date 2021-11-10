import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import { Select } from '../Select';
import { Profile } from './Profile';
import { SignInButton } from './SignInButton';

type HeaderProps = {
  isLoggedIn?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isLoggedIn = false }) => {
  const pets = [
    { value: 'pipoca', label: 'Pipoca' },
    { value: 'marafo', label: 'Marafo' },
    { value: 'whisky', label: 'Whisky' },
  ];

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

          {isLoggedIn && (
            <Select
              colorScheme="green"
              options={pets}
              placeholder="Escolha um Pet"
              closeMenuOnSelect={false}
            />
          )}
        </Flex>

        {isLoggedIn && <Profile />}

        {!isLoggedIn && <SignInButton />}
      </Flex>
    </Flex>
  );
};
