import React from 'react';
import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import BackgroundImage from "../images/rick_and_morty.webp"

const Home: React.FC = () => (
  <Box>
    <Seo title="Home Page" />
    <Box position="absolute" top="0" filter="auto" brightness="40%" >
      <Image
        src={BackgroundImage}
        w={1848}
        h={948}
        objectFit="cover"
        alt="Rick and Morty background"
      />
    </Box>
    <Flex
      position="absolute"
      top="0"
      w="100%"
      h="100%"
      justify="center"
      align="center"
      direction="column"
    >
      <Text fontSize="6xl" fontWeight="semibold" textAlign="center">
        Welcome to my Rick and Morty website
      </Text>
      <Button
        as={Link}
        to="/"
        bg="yellow"
        p="30px 100px"
        fontSize="xl"
        mt="8"
        borderRadius="20px"
      >
        See more here
      </Button>
    </Flex>
  </Box>
);
export default Home;