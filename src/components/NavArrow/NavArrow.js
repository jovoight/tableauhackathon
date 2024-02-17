import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import "./NavArrow.css";

const NavArrow = () => {
  const location = useLocation();
  let navPath;
  if (location.pathname === "/tableauhackathon") {
    navPath = "/tableauhackathon/analytics";
  } else {
    navPath = "/tableauhackathon";
  }
  return (
    <NavLink to={navPath} className="NavArrow" >
      <svg width="auto" height="auto" viewBox="0 0 72 72" fill="none">
        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
      </svg>
    </NavLink>    
  );
}

export default NavArrow;