import classes from "./AboutMeSideBar.module.css";
import facial_one from "../../assets/imgs/facial_one.jpg";
import beauty_products from "../../assets/imgs/beauty_products.jpg";
import manicure_one from "../../assets/imgs/manicure_one.jpg";

const AboutMeSideBar = (props) => {
  return (
    <aside className={classes.aboutMeSideBar}>
      <img className="side-bar-imgs" src={facial_one} alt="" />
      <img className="side-bar-imgs" src={beauty_products} alt="" />
      <img className="side-bar-imgs" src={manicure_one} alt="" />
    </aside>
  );
};

export default AboutMeSideBar;
