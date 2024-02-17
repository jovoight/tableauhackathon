import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes.js";


const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
