import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Menu } from './Menu.component';

export default { title: 'Components / Menu' };

export const MenuBar = () => (
  <MemoryRouter>
    <Menu isAuthenticated={false} />
  </MemoryRouter>
);
export const MenuBarAuthenticated = () => (
  <MemoryRouter>
    <Menu isAuthenticated={true} />
  </MemoryRouter>
);
