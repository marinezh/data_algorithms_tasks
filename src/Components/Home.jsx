import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flextasks">
      <NavLink to="/palindrom">
        <div className="taskdiv">
          <h3>
            Palindrome <br />
            checker
          </h3>
        </div>
      </NavLink>
      <NavLink to="/task2">
        <div className="taskdiv">
          <h3>Bubble sort</h3>
        </div>
      </NavLink>
      <NavLink to="/task3">
        <div className="taskdiv">
          <h3>Selection sort</h3>
        </div>
      </NavLink>
      <NavLink to="/task4">
        <div className="taskdiv">
          <h3>
            Stack data <br /> structure
          </h3>
        </div>
      </NavLink>
      <NavLink to="/task5">
        <div className="taskdiv">
          <h3>Queue data</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
