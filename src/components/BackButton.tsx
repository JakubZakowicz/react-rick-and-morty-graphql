import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      position="absolute"
      left="5"
      top="4"
      bg="yellow"
      px="3"
      borderRadius="20"
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon boxSize="7" />
    </Button>
  );
};

export default BackButton;
