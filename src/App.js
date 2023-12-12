import { Box, Flex, Text, HStack,  } from "@chakra-ui/react";
import {CSSReset, ChakraProvider} from "@chakra-ui/react"
import Header from "./component/Header/Header";
import About from "./component/About/About";

function App() {
  return (
    <Box bgColor='whitesmoke'>
    <ChakraProvider>
      <CSSReset />
      <Header />
      <Box pt='80px'>
      <About/>
      </Box>

    </ChakraProvider>
    </Box>
  );
}

export default App;
