import React from "react";

import Header from "./Components/Layout/Header/Header";
import classes from "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return (
    <React.Fragment className={classes.app}>
      <Header />
      <AboutMe />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
