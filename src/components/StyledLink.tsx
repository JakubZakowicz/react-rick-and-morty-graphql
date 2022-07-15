import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { StyledLinkProps } from '../types';

const StyledLink: React.FC<StyledLinkProps> = ({
  name,
  to,
  children = null,
  fontSize = 'md',
  isSecondary = false,
}) => (
  <Link
    as={ReactLink}
    to={to}
    _hover={{ color: 'white' }}
    fontSize={fontSize}
    color="yellow"
  >
    {name}
    {children}
  </Link>
);

export default StyledLink;