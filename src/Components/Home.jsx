import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flextasks">
      <NavLink to="/palindrom">
        <div className="taskdiv">
          <h3>Palindrome</h3>
        </div>
      </NavLink>
      <NavLink to="/bubblesort">
        <div className="taskdiv">
          <h3>Bubble sort</h3>
        </div>
      </NavLink>
      <NavLink to="/stackdata">
        <div className="taskdiv">
          <h3>Stack data</h3>
        </div>
      </NavLink>
      <NavLink to="/queue">
        <div className="taskdiv">
          <h3>Queue data</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
