import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Container, Text } from '@chakra-ui/react';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';
import Seo from '../components/Seo';
import StyledLink from '../components/StyledLink';
import { GET_LOCATION } from '../queries/index';
import { Character } from '../types';

const Location: React.FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_LOCATION, { variables: { id } });

  if (loading) return <Loader />;

  const { location } = data;

  return (
    <Container>
      <Seo title={`Location | ${location.name}`} />
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
          Location name:
        </Text>
        <Text fontSize="xl" fontWeight="bold" align="center">
          {location.name}
        </Text>
        <Text mt="10">Type: {location.type}</Text>
        <Text mt="5">Dimension: {location.dimension}</Text>
        <Text mt="5">Characters: </Text>
        {location?.residents?.map((character: Character) => (
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

export default Location;