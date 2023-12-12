import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box height='600px' fontFamily='Rubik' bgColor='whitesmoke'>
      <Center px='20%'>
        <VStack spacing='30px'>
        <Image src={window.location.origin + '/profile.png'} boxSize='350px' boxSizing="content-box"/>
            <Box>
            <Text>Hi There</Text>
            <Text fontWeight='700' fontSize='28px'>I am Sebastian Haloho</Text>
        <Text textAlign='justify' >
          I graduated in information systems at a university in Yogyakarta. I
          have enough understanding and experience to develop websites using
          HTML, Javascript, CSS, PHP and MySQL programming. I also have
          sufficient understanding of mobile application development with React
          Native, Node JS, and React JS tools from the bootcamp program that I
          am currently participating in. I am very interested in a career in the
          development field, but I do not rule out the opportunity to have a
          career in other fields, especially the world of technology.
        </Text>
            </Box>
           
                
            
        </VStack>
        
      </Center>
    </Box>
  );
};

export default About;
