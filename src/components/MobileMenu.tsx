import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  List,
  ListItem,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { menuLinks } from '../utils/menuLinks';
import MenuBar from './MenuBar';

const MobileMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuBar onOpen={onOpen} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <List bg="gray" h="full" py="5" px="10" lineHeight="10" fontSize="xl">
            {menuLinks.map(link => (
              <ListItem key={link.name}>
                <NavLink
                  to={link.to}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          padding: '10px 60px',
                          color: '#FF9E0C',
                          background: '#24282F',
                          borderRadius: '10px',
                        }
                      : {
                          padding: '10px 60px',
                        }
                  }
                  onClick={onClose}
                >
                  {link.name}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
