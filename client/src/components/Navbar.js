import React from "react";
import { NavLink, } from "react-router-dom";

const Navbar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/about">About</NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/items">Items</NavLink>
  </nav>
)

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
};

export default Navbar;