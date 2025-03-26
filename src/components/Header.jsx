import React from "react";
import Buttons from "./buttons";
import LogOutButton from "./LogOutButton";
import { useLocation } from "react-router-dom";
// import "../css/header.css"

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <nav>
        <h1>My WORKOUT GYM</h1>
        {location.pathname === "/home" ||
        location.pathname === "/workouts/add" ? (
          <LogOutButton />
        ) : (
          <Buttons />
        )}
      </nav>
    </div>
  );
};

export default Header;
