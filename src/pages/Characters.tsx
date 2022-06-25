import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Box,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import queryString from 'query-string';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import Seo from '../components/Seo';
import DetailsButton from '../components/DetailsButton';
import { GET_CHARACTERS } from '../queries';
import { Character } from '../types';
import { statuses } from '../utils/statuses';

const Characters: React.FC = () => {
  const pageParam = queryString.parse(window.location.search).page;
  const [page, setPage] = useState<number>(Number(pageParam ?? 1));
  const [search, setSearch] = useState<string>('');
  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page, search },
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (page !== 1) setPage(1)
  };

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected + 1;
    setPage(selectedPage);
    navigate(`?page=${selectedPage}`);
  };

  return (
    <Container>
      <Seo title={`Characters | page ${page}`} />
      <InputGroup w={{ base: 'auto', xl: '857px' }}>
        <InputLeftElement>
          <SearchIcon color="gray.300" w="20px" h="20px" ml="4px" mt="5px" />
        </InputLeftElement>
        <Input
          bg="white"
          color="black"
          placeholder="Search locations"
          value={search}
          size="lg"
          w="100%"
          borderRadius="15px"
          onChange={handleChange}
        />
      </InputGroup>
      {loading ? (
        <Loader />
      ) : (
        <>
          {data?.characters?.results.map((character: Character) => (
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
                    to={`/character/${character.id}`}
                    width="172px"
                  />
                </Flex>
              </Flex>
            </Box>
          ))}
          <Flex justify="start">
            <Pagination
              pageCount={data?.characters.info.pages}
              page={page}
              handlePageClick={handlePageClick}
            />
          </Flex>
        </>
      )}
    </Container>
  );
};

export default Characters;
