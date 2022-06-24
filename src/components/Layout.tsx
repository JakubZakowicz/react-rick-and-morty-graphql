import React from 'react';
import Menu from './Menu';
import { LayoutProps } from '../types';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Menu />
    {children}
  </>
);

export default Layout;