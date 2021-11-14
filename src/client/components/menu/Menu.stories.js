import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MenuLogin, Logout } from './Menu.component';

export default { title: 'Components / Menu' };

export const MenuBar = () => (
  <BrowserRouter>
    <MenuLogin />
  </BrowserRouter>
);
export const MenuLogout = () => <Logout />;
