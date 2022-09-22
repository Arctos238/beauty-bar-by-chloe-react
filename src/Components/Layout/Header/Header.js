import React, { useState } from "react";

import NavButton from "./NavButton";
import CompanyLogo from "../../UI/CompanyLogo";
import NavBar from "./NavBar";
import classes from "./Header.module.css";

const Header = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const navOpenHandler = (isNavOpen) => {
    setNavOpen(isNavOpen);
  };

  return (
    <header className={classes.header}>
      <CompanyLogo />
      <NavBar isNavOpen={isNavOpen} />
      <NavButton navOpenHandler={navOpenHandler}></NavButton>
    </header>
  );
};

export default Header;
