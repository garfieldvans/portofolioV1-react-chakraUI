import { Box, Flex, Text, HStack,  } from "@chakra-ui/react";
import {CSSReset, ChakraProvider} from "@chakra-ui/react"
import Header from "./component/Header/Header";
import About from "./component/About/About";

function App() {
  return (
    <ChakraProvider >
      <CSSReset />
      <Header />
      <Box mt='100px' px='40px'>
      <About/>
      </Box>

    </ChakraProvider>
  );
}

export default App;
