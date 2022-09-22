import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import classes from "./SocialMediaBox.module.css";

const SocialMediaBox = (props) => {
  return (
    <div className={classes.SocialMediaBox}>
      <a href="#" className={`${classes.facebook} ${classes.social}`}>
        <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
      </a>
      <a href="#" className={`${classes.instagram} ${classes.social}`}>
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className={classes.icon}
        />
      </a>
    </div>
  );
};

export default SocialMediaBox;
