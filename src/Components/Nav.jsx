import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="ul">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/palindrom">Palindrome </NavLink>

        <NavLink to="/bubblesort">Bubble sort</NavLink>

        <NavLink to="/stackdata">Stack data</NavLink>

        <NavLink to="/queue">Queue data</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
