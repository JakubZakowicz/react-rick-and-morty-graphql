import React, { useState } from 'react';
import { Box, Container, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useQuery } from '@apollo/client';
import Loader from '../components/Loader';
import BackButton from '../components/BackButton';
import Seo from '../components/Seo';
import StyledLink from '../components/StyledLink';
import { statuses } from '../utils/statuses';
import { GET_CHARACTER } from '../queries/index';
import { useParams } from 'react-router-dom';
import { Episode } from '../types';

const Character: React.FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  const [isMore, setIsMore] = useState(false);

  if (loading) return <Loader />;

  const { character } = data;

  return (
    <Container centerContent>
      <Seo title={`Character | ${character.name}`} />
      <Box
        mt={20}
        p={{ base: '75px 0 50px 0', xl: '20' }}
        bg="gray"
        w={{ base: 'auto', xl: '1000px' }}
        borderRadius={20}
        position="relative"
        boxShadow="dark-lg"
      >
        <Flex flexWrap="wrap" justifyContent={{ base: 'center', xl: 'start' }}>
          <Image src={character.image} borderRadius={20} w={300} h={300} />
          <Box ml={20}>
            <Text fontSize="4xl" fontWeight="bold">
              {character.name}
            </Text>
            <Box mt={5}>
              <Text color="#9E9E9E">Status:</Text>
              <Text fontSize="xl">
                <Box
                  bg={statuses[character.status]}
                  w="10px"
                  h="10px"
                  borderRadius="full"
                  display="inline-block"
                  mr={3}
                  mb="0.5"
                />
                {character.status}
              </Text>
            </Box>
            <Box mt={5}>
              <Text color="lightgray">Species:</Text>
              <Text fontSize="xl">{character.species}</Text>
            </Box>
            {character.type && (
              <Box mt={5}>
                <Text color="lightgray">Type:</Text>
                <Text fontSize="xl">{character.type}</Text>
              </Box>
            )}
            <Box mt={5}>
              <Text color="lightgray">Gender:</Text>
              <Text fontSize="xl">{character.gender}</Text>
            </Box>
            <Box mt={5}>
              <Text color="lightgray">Origin:</Text>
              {character.origin.name === 'unknown' ? (
                <Text fontSize="xl">{character.origin.name}</Text>
              ) : (
                <StyledLink
                  name={character.origin.name}
                  to={`/location/${character.origin.id}`}
                  fontSize="xl"
                />
              )}
            </Box>
            <Box mt={5}>
              <Text color="lightgray">Last known location:</Text>
              <StyledLink
                name={character.location.name}
                to={`/location/${character.location.id}`}
                fontSize="xl"
              />
            </Box>
            <Box mt={5}>
              <Text color="lightgray">Appearances:</Text>
              <Box position="relative">
                <StyledLink to={`/episode/${character.episode[0].id}`}>
                  <Flex w={300} align="center">
                    <Text fontSize="xl">{character.episode[0].name}</Text>
                    <Spacer />
                    <Text fontSize="xl">{character.episode[0].episode}</Text>
                  </Flex>
                </StyledLink>
                {isMore &&
                  character.episode.map(
                    (episode: Episode, index: number) =>
                      index !== 0 && (
                        <StyledLink to={`/episode/${episode.id}`}>
                          <Flex mt={2} w={300} align="center">
                            <Text fontSize="xl">{episode.name}</Text>
                            <Spacer />
                            <Text fontSize="xl">{episode.episode}</Text>
                          </Flex>
                        </StyledLink>
                      )
                  )}
                <Box
                  as="button"
                  position="absolute"
                  right={{ base: '40%', xl: '-130' }}
                  top={{ xl: '0' }}
                  onClick={() => setIsMore(prev => !prev)}
                >
                  {isMore ? (
                    <Flex align="center">
                      <ChevronUpIcon boxSize={8} />
                      <Text>Show less</Text>
                    </Flex>
                  ) : (
                    <Flex align="center">
                      <ChevronDownIcon boxSize={8} />
                      <Text>Show more</Text>
                    </Flex>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
        <BackButton />
      </Box>
    </Container>
  );
};
export default Character;
