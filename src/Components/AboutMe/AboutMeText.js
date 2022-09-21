import classes from "./AboutMeText.module.css";

const AboutMeText = (props) => {
  return (
    <div className={classes.mainContent}>
      <div className={classes.theBusinessBox}>
        <h3>About Me</h3>
        <p>
          Beauty Bar by Chloe was created by a self employed, hard working and
          enthusiastic beauty student with a dream to pamper clients around the
          south-east region.
        </p>
        <p>
          We offer mobile services, which means we come to you. This personal
          one on one service offers a friendly, entrusted and judgement free
          zone.
        </p>
        <p>
          We have selected and tested the best skin care and beauty products to
          suit our clients needs.
        </p>
      </div>
      <div className={classes.whyMeBox}>
        <h3>Why Me?</h3>
        <ul>
          <li>Custom Taloried Designs Choosen by YOU!</li>
          <li>Friendly Customer Service</li>
          <li>Reliable Service</li>
          <li>Only the highest quality skin products</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeText;
