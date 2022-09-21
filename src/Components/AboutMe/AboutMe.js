import React from "react";

import classes from "./AboutMe.module.css";
import AboutMeSideBar from "./AboutMeSideBar";
import AboutMeText from "./AboutMeText.js";

const AboutMe = (props) => {
  return (
    <div className={classes.aboutMe}>
      <AboutMeText />
      <AboutMeSideBar />
    </div>
  );
};

export default AboutMe;
