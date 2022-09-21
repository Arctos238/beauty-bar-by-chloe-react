import React, { useState } from "react";

import CompanyLogo from "../../UI/CompanyLogo";
import NavButton from "./NavButton";
import classes from "./Header.module.css";

const Header = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={classes.header}>
      <CompanyLogo />
      <NavButton />
    </header>
  );
};

export default Header;
