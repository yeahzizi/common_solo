import React from 'react';
import { NavLink } from 'react-router-dom';
import mainlogo from '../../assets/img/mainlogo.png';

function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/Main">
          <img src={mainlogo} alt="mainlogo" width="70px" />
        </NavLink>
        <NavLink to="/SearchCookRoom">요리방</NavLink>
        <NavLink to="/SearchRecipe">레시피</NavLink>
        <NavLink to="/MyIngredients">냉장고</NavLink>
        <NavLink to="/Rank">랭킹</NavLink>
        <NavLink to="/Login">로그인</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
