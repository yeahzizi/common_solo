import React from 'react';
import { NavLink } from 'react-router-dom';
import mainlogo from './mainlogo.png';

function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/main">
          <img src={mainlogo} alt="mainlogo" width="100px" />
        </NavLink>
        <NavLink to="/room">요리방</NavLink>
        <NavLink to="/recipe">레시피</NavLink>
        <NavLink to="/rank">랭킹</NavLink>
        <NavLink to="/login">로그인</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
