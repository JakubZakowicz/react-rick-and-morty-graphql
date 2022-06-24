import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Container, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import queryString from 'query-string';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import DetailsButton from '../components/DetailsButton';
import { GET_CHARACTERS } from '../queries';
import { Character } from '../types';
import { statuses } from '../utils/statuses';

const Characters: React.FC = () => {
  const pageParam = queryString.parse(window.location.search).page;
  const [page, setPage] = useState<number>(Number(pageParam) ?? 1);
  const { loading, data } = useQuery(GET_CHARACTERS, { variables: { page } });
  const navigate = useNavigate();

  if (loading) return <Loader />;

  const { characters } = data;

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected + 1;
    setPage(selectedPage);
    navigate(`?page=${selectedPage}`);
  };

  return (
    <Container>
      {characters?.results.map((character: Character) => (
        <Box
          key={character.id}
          w={{ xl: '857px', base: 'auto' }}
          bg="gray"
          borderRadius={20}
          p={6}
          mt={7}
          boxShadow="dark-lg"
        >
          <Flex>
            <Image
              src={character.image}
              borderRadius={20}
              w={{ base: '100px', lg: '150px', xl: '250px' }}
              h={{ base: '100px', lg: '150px', xl: '250px' }}
            />
            <Flex direction="column" ml={10}>
              <Box lineHeight="10">
                <Text fontSize="3xl" fontWeight="bold">
                  {character.name}
                </Text>
                <Text fontSize="1xl">
                  Status:{' '}
                  <Box
                    as="span"
                    bg={statuses[character.status]}
                    w="10px"
                    h="10px"
                    borderRadius="full"
                    display="inline-block"
                    mx={1}
                  />
                  {character.status}
                </Text>
                <Text fontSize="1xl">Species: {character.species}</Text>
                {character.type && (
                  <Text fontSize="1xl">Type: {character.type}</Text>
                )}
                <Text fontSize="1xl">Gender: {character.gender}</Text>
              </Box>
              <Spacer />
              <DetailsButton
                name="See more details"
                to={`/characters/${character.id}`}
                width="172px"
              />
            </Flex>
          </Flex>
        </Box>
      ))}
      <Flex justify="start">
        <Pagination
          pageCount={characters.info.pages}
          page={page}
          handlePageClick={handlePageClick}
        />
      </Flex>
    </Container>
  );
};

export default Characters;
