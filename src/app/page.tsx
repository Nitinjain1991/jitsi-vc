"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinRoom from "./screens/JoinRoom";
import ControlSetups from "./screens/ControlSetups";

const HomePage = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<JoinRoom />} /> */}
        <Route path="/" element={<ControlSetups />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
