import React from 'react';
import { NavLink } from 'react-router-dom';
import Mainlogo from '../../assets/img/mainlogo.png';
import { Navbar, NavbarBlock } from './NavStyle';

function Nav() {
  return (
    <NavbarBlock>
      <Navbar>
        <NavLink to="/Main">
          <img src={Mainlogo} alt="mainlogo" width="72px" />
        </NavLink>
        <NavLink to="/SearchCookRoom">요리방</NavLink>
        <NavLink to="/SearchRecipe">레시피</NavLink>
        <NavLink to="/MyIngredients">냉장고</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Navbar>
    </NavbarBlock>
  );
}

export default Nav;
