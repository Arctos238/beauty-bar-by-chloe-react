import classes from "./CompanyLogo.module.css";
import logo from "../../assets/imgs/beauty_bar_logo.jpg";

const CompanyLogo = (props) => {
  return (
    <div>
      <img alt="Company Logo" src={logo} className={classes.CompanyLogo} />
    </div>
  );
};

export default CompanyLogo;
