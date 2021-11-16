import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text
} from '@chakra-ui/react';

import { useSidebarDrawer } from '../../hooks/useSidebarDrawer';
import { DatePicker } from '../DatePicker';
import { PetSelect } from '../PetSelect';

export const Sidebar: React.FC = () => {
  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader 
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            color="green.500"
          >
            PetFeeder
          </DrawerHeader>

          <DrawerBody>
            <Flex>
              <Avatar
                size="md"
                name="Alexandre Monteiro"
                src="https://github.com/monteiro-alexandre.png"
              />

              <Box ml="4" textAlign="left">
                <Text>Alexandre Monteiro</Text>
                <Text color="gray.600" fontSize="small">
                  alexandre.monteiro.bec@gmail.com
                </Text>
              </Box>
            </Flex>

            <Box mt="40px">
              <PetSelect />
            </Box>

            <Box mt="20px">
              <DatePicker />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
