import {
  Box,
  Center,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box height="600px" fontFamily="Rubik">
      <Center px={{ base: "45px", md: "20%" }}>
        <Stack
          spacing="30px"
          direction={{ base: "column", md: "column" }}
          alignItems="self-start"
        >
        <Stack direction='row' spacing='40px' width='100%' justifyContent='center'>
            <Stack direction='column' spacing='0px' alignSelf='center' >

            <Text fontSize={{base: '18px',md:'26px'}}>Hi There,</Text>
            <Text fontWeight="900" fontSize={{base: '26px',md:'48px'}}>
              I am Bastian
            </Text>
            </Stack>
          <Image
            src={window.location.origin + "/profile.png"}
            height={{ base: "200px", md: "350px" }}
            width={{ base: "200px", md: "240px" }}
            roundedBottom='80'
          />
            </Stack>
          
            
            <Text textAlign="justify" fontSize={{base: '18px',md:'26px'}}>
              I graduated in information systems at a university in Yogyakarta.
              I have enough understanding and experience to develop websites
              using HTML, Javascript, CSS, PHP and MySQL programming. I also
              have sufficient understanding of mobile application development
              with React Native, Node JS, and React JS tools from the bootcamp
              program that I am currently participating in. I am very interested
              in a career in the development field, but I do not rule out the
              opportunity to have a career in other fields, especially the world
              of technology.
            </Text>
       
        </Stack>
      </Center>
    </Box>
  );
};

export default About;
