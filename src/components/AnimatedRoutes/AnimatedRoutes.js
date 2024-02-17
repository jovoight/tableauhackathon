import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from '../Home/Home.js';
import Analytics from '../Analytics/Analytics.js';
import NavArrow from "../NavArrow/NavArrow.js";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence inital={false} mode="wait" >
            <Routes location={location} key={location.pathname}>
                <Route path="tableauhackathon" element={<Home />} />
                <Route path="tableauhackathon/analytics" element={<Analytics />} />
            </Routes>
            <NavArrow />
        </AnimatePresence>
    );
}

export default AnimatedRoutes;