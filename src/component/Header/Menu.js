import { useNavigate } from 'react-router-dom';
import {
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Image,
    Center,
    Button,
  } from '@chakra-ui/react';



const Menus = ({ icon, children, pathname, ...rest }) => {
  const currentPathName = window.location.pathname;
  const isActive = pathname === currentPathName;

  return (
    <Box
      as="a"
      href={pathname}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      transition="3s ease"
    >
      <Flex
        align="center"
        pt="12px"
        pb="12px"
        pl="16px"
        pr="16px"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bgColor={isActive ? 'none' : 'none'}
        color={isActive ? 'none' : 'none'}
        fontSize="20"
        _hover={{
          bgColor: 'whitesmoke',
          color: 'black',
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Box>
  );
};
export default Menus;