import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./Pages/Layout";
import Palindrom from "./Components/Palindrom";
import BubbleSort from "./Components/BubbleSort";
import Task3 from "./Components/Task3";
import Task4 from "./Components/Task4";
import Task5 from "./Components/Task5";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/palindrom" element={<Palindrom />} />
          <Route path="/bubblesort" element={<BubbleSort />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
