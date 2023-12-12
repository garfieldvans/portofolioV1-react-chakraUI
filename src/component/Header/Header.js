import { Box, Flex, Text, HStack, Image, Icon } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {SiVercel} from "react-icons/si"

const Header = () => {
  return (
    <Box pos="fixed" top="0" left="0" right="0" px='50px' fontFamily='Rubik'>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        bgColor='white' 
        
      >
        <Box as="a" href="#/">
          <Image src={window.location.origin + "/LOGO.png"} boxSize="80px" />
        </Box>
        <HStack spacing="50px">
          <Text
            as="a"
            href="#"
            textDecorationLine="none"
            textDecoration="none"
            color="black"
            fontWeight="400"
          >
            HOME
          </Text>
          <Text
            as="a"
            href="#"
            textDecorationLine="none"
            textDecoration="none"
            color="black"
            fontWeight="400"
          >
            ABOUT
          </Text>
          <Text
            as="a"
            href="#"
            textDecorationLine="none"
            textDecoration="none"
            color="black"
            fontWeight="400"
          >
            PROJECT
          </Text>
        </HStack>
        <HStack spacing="20px">
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
      <Box bgColor="whitesmoke" width="100%" height="2px" />
    </Box>
  );
};

export default Header;
