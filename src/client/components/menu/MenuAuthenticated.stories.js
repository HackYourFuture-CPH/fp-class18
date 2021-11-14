import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { Menu } from './Menu.component';

export default { title: 'Components / MenuAuthenticated' };

export const MenuBarAuthenticated = () => (
  <MemoryRouter>
    <Menu isAuthenticated={true} />
  </MemoryRouter>
);
