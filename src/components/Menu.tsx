import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@chakra-ui/react';
import { menuLinks } from '../utils/menuLinks';
import MobileMenu from './MobileMenu';
import { MenuLink } from '../types';

const Menu: React.FC = () => (
  <>
    <List
      position="fixed"
      h="100vh"
      bg="#3C3E44"
      top="0"
      left="0"
      py="5"
      px="5"
      lineHeight="10"
      fontSize="xl"
      display={{ base: 'none', md: 'block' }}
    >
      {menuLinks.map((link: MenuLink) => (
        <ListItem key={link.name}>
          <NavLink
            to={link.to}
            style={({ isActive }) =>
              isActive
                ? {
                    padding: '10px 20px',
                    color: '#FF9E0C',
                    background: '#24282F',
                    borderRadius: '10px',
                  }
                : {
                    padding: '10px 20px',
                  }
            }
          >
            {link.name}
          </NavLink>
        </ListItem>
      ))}
    </List>
    <MobileMenu />
  </>
);

export default Menu;
