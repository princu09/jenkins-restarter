import React from "react";
import Navbar from "./Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Jenkins from "./Jenkins";
import Websites from "./Websites";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/websites" />} />
        <Route path="/jenkins" element={<Jenkins />} />
        <Route path="/websites" element={<Websites />} />
      </Routes>
    </div>
  );
};

export default App;
