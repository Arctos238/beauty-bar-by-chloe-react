import React, { useState } from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav
        className={`${classes.NavBar} ${
          props.isNavOpen ? classes.navOpen : classes.navClosed
        }`}
      >
        <a href="#">Services</a>
        <a href="#">Gallery</a>
        <a href="#">Appointment</a>
        <a href="#">About Me</a>
        <a href="#">Contact Me</a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
