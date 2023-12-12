import { Box, Flex, Text, HStack,  } from "@chakra-ui/react";
import {CSSReset, ChakraProvider} from "@chakra-ui/react"
import Header from "./component/Header/Header";
import About from "./component/About/About";

function App() {
  return (
    <Box>
    <ChakraProvider>
      <CSSReset />
      <Header />
      <Box pt={{base:'30%', md: '20%', lg: '7%'}}>
      <About/>
      </Box>

    </ChakraProvider>
    </Box>
  );
}

export default App;
