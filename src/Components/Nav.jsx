import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="ul">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/palindrom">Palindrome checker</NavLink>

        <NavLink to="/bubblesort">Bubble sort</NavLink>

        <NavLink to="/task3">Selection sort</NavLink>

        <NavLink to="/task4">Stack data structure</NavLink>

        <NavLink to="/task5">Queue data</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
