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
import { useColorMode, Button } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { SiVercel } from "react-icons/si";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import DrawerComponent from "./Drawer";
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
    { name: "About", pathname: "/" },
    { name: "Skills", pathname: "/" },
    { name: "Experience", pathname: "/" },
    { name: "Project", pathname: "/" },
    { name: "Contact", pathname: "/" },
  ];

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      pos="fixed"
      top="0"
      left="0"
      right="0"
      px={{ base: "30px", md: "60px" }}
      fontFamily="Rubik"
      py={{ base: "5px", md: "10px" }}
      bg="background"
      color="text"
      //   bgColor={colorMode === "light" ? 'whitesmoke' : 'black'}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={{ base: "space-between", md: "space-between" }}
        alignItems="center"
      >
        <Box
          as="a"
          href="#/"
          flexDirection={{ base: "row-reverse", md: "row" }}
          display="flex"
          gap="5"
          alignItems="center"
        >
          <Image
            src={window.location.origin + "/LOGO.png"}
            boxSize={{ base: "60px", md: "50px" }}
            bgColor={colorMode === "light" ? "none" : "white"}
            borderRadius={colorMode === "light" ? "none" : "10px"}
          />
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MdDarkMode /> : <CiLight />}
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </IconButton>
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
            size="md"
            aria-label="Toggle Menu"
          />
        </Box>
        <HStack
          spacing={{ base: "20px", md: "30px" }}
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <Flex
            direction={{ base: "none", md: "row" }} // Hide on small screens
            gap="4px"
            display={{ base: "none", md: "flex" }}
          >
            {menuItem.map((link) => (
              <Menus key={link.name} pathname={link.pathname}>
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
        <HStack
          spacing={{ base: "20px", md: "10px" }}
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <Box as="a" href="#" >
            <Icon as={FaGithub} boxSize="25px" />
          </Box>
          <Box as="a" href="#">
            <Icon as={FaInstagram} boxSize="25px" />
          </Box>
          <Box as="a" href="#">
            <Icon as={FaLinkedin} boxSize="25px" />
          </Box>
          <Box as="a" href="https://vercel.com/bastians-projects-4b52ff06">
            <Icon as={SiVercel} boxSize="25px" />
          </Box>
        </HStack>
      </Box>
      <DrawerComponent
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        menuItem={menuItem}
      />
      <Box bgColor="#c2c2c2" width="100%" height="2px" mt="10px" />
    </Box>
  );
};

export default Header;
