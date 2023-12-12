import { useState, useEffect, Children } from "react";
import {
    Box,
    Flex,
    Text,
    HStack,
    Image,
    Icon,
    IconButton,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Drawer, 
    DrawerHeader,
    DrawerBody,
    Stack
  } from "@chakra-ui/react";

  const DrawerComponent = ({ isOpen, onClose, menuItem }) => {
    return(
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
          {menuItem.map((link) => (
              <Stack key={link.name}>
                <Box  height='50px' width='100%' as="a" href="/">
                <Text color='black' textAlign='center'>
                  {link.name}
                </Text>
                </Box>
              </Stack>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
}

export default DrawerComponent;