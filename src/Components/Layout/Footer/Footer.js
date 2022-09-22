import classes from "./Footer.module.css";
import ContactMe from "../../UI/ContactMe";
import SocialMediaBox from "../../UI/SocialMediaBox";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <ContactMe />
      <SocialMediaBox />
    </footer>
  );
};

export default Footer;
