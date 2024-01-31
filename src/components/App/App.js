import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import Home from "../Home/Home.js";
import Analytics from "../Analytics/Analytics.js";

const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
