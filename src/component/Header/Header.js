import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Icon,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from "react";
import DrawerComponent from './Drawer';
import Menus from "./Menu";

const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
      };
    
      const handleDrawerClose = () => {
        setDrawerOpen(false);
      };

      const menuItem = [
        { name: "About", pathname: "/"},
        { name: "Skills", pathname: "/" },
        { name: "Experience", pathname: "/"},
        { name: "Project", pathname: "/"},
        { name: "Contact", pathname: "/"},
      ];
  
  return (
    <Box pos="fixed" top="0" left="0" right="0" px="60px" fontFamily="Rubik" py='10px' bgColor="whitesmoke">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        
        
      >
        <Box as="a" href="#/">
          <Image
            src={window.location.origin + "/LOGO.png"}
            boxSize={{ base: "80px", md: "50px" }}
          />
        </Box>
        <Box
          display={{ base: "flex", md: "none" }}
          position="absolute"
          right={5}
          top={"15px"}
        >
          <IconButton
            icon={<BiMenu size="25px" />}
            onClick={handleDrawerOpen}
            variant="ghost"
            color="black"
            size="md"
            aria-label="Toggle Menu"
          />
        </Box>
        <HStack spacing="50px" display={{base: 'none', md:'flex', lg: 'flex'}}>
        <Flex
          direction={{ base: "none", md: "row" }} // Hide on small screens
          gap="4px"
          display={{ base: "none", md: "flex" }}
        >
          {menuItem.map((link) => (
            <Menus
              key={link.name}
              pathname={link.pathname}
            >
              {link.name}
            </Menus>
          ))}
        </Flex>
            {/* })} */}
          {/* <Text
            as="a"
            href="#"
            textDecorationLine="none"
            textDecoration="none"
            color="black"
            fontWeight="400"
          >
            About
          </Text>
          <Text
            as="a"
            href="#"
            textDecorationLine="none"
            textDecoration="none"
            color="black"
            fontWeight="400"
          >
            Skills
          </Text>
          <Text
            as="a"
            href="#"
            textDecorationLine="none"
            textDecoration="none"
            color="black"
            fontWeight="400"
          >
            Experience
          </Text>
          <Text
            as="a"
            href="#"
            textDecorationLine="none"
            textDecoration="none"
            color="black"
            fontWeight="400"
          >
            Contact
          </Text> */}
        </HStack>
        <HStack spacing="20px" display={{base: 'none', md:'flex', lg: 'flex'}}>
          <Box as="a" href="#">
            <Icon as={FaGithub} boxSize="30px" color="black" />
          </Box>
          <Box as="a" href="#">
            <Icon as={FaInstagram} boxSize="30px" color="black" />
          </Box>
          <Box as="a" href="#">
            <Icon as={FaLinkedin} boxSize="30px" color="black" />
          </Box>
          <Box as="a" href="https://vercel.com/bastians-projects-4b52ff06">
            <Icon as={SiVercel} boxSize="30px" color="black" />
          </Box>
        </HStack>
      </Box>
      <DrawerComponent isOpen={isDrawerOpen} onClose={handleDrawerClose} menuItem={menuItem}/>
      <Box bgColor="#c2c2c2" width="100%" height="2px" />
      
    </Box>
  );
};

export default Header;
