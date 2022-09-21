import React from "react";

import Header from "./Components/Layout/Header/Header";
import classes from "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {
  return (
    <React.Fragment className={classes.app}>
      <Header />
      <AboutMe />
    </React.Fragment>
  );
}

export default App;
