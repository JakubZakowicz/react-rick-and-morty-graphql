import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Text } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';
import StyledLink from '../components/StyledLink';
import { GET_EPISODE } from '../queries/index';
import { Character } from '../types';

const Episode: React.FC = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(GET_EPISODE, { variables: { id } });

  if (loading) return <Loader />;

  const { episode } = data;
  const seasonAndEpisode = episode.episode.split(/[A-Z]/);
  const seasonNumber = Number(seasonAndEpisode[1]);
  const episodeNumber = Number(seasonAndEpisode[2]);

  return (
    <Container>
      <Box
        mt="10"
        bg="gray"
        px="7"
        pt="3"
        pb="7"
        borderRadius="20"
        position="relative"
        boxShadow="dark-lg"
      >
        <Text fontSize="xl" fontWeight="bold" align="center">
          Episode name:
        </Text>
        <Text fontSize="xl" fontWeight="bold" align="center">
          {episode.name}
        </Text>
        <Text mt="10">Season: {seasonNumber}</Text>
        <Text mt="5">Episode: {episodeNumber}</Text>
        <Text mt="5">Air date: {episode.air_date}</Text>
        <Text mt="5">Characters: </Text>
        {episode.characters.map((character: Character) => (
          <Text display="inline">
            <StyledLink
              name={character.name}
              to={`/character/${character.id}`}
              isSecondary
            />
            ,&nbsp;
          </Text>
        ))}
        <BackButton />
      </Box>
    </Container>
  );
};

export default Episode;