import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Palindrom from "./Components/Palindrom";
import BubbleSort from "./Components/BubbleSort";
import StackData from "./Components/StackData";
import Queue from "./Components/Queue";
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
          <Route path="/stackdata" element={<StackData />} />
          <Route path="/queue" element={<Queue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
