import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from '../Home/Home.js';
import Analytics from '../Analytics/Analytics.js';

const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="tableauhackathon" element={<Home />} />
          <Route path="tableauhackathon/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
