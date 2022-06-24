import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button } from '@chakra-ui/react';

const seasons: number[] = [1, 2, 3, 4, 5];

const Seasons: React.FC = () => (
  <Flex gap="8" mt="8" mb="4" flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
    {seasons.map(number => (
      <Button
        key={number}
        as={Link}
        to={`/episodes/season/${number}`}
        bg="gray"
        p="6"
      >
        Season {number}
      </Button>
    ))}
  </Flex>
);

export default Seasons;
