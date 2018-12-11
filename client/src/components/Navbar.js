import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.Item>
      <NavLink exact to="/">Home</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink exact to="/about">About</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink exact to="/departments">Departments</NavLink>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <NavLink exact to="/departments/new"><Button color="green" size="tiny">New Department</Button></NavLink>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;