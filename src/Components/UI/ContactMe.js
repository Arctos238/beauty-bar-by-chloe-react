import classes from "./ContactMe.module.css";

const ContactMe = (props) => {
  return (
    <div className={classes.ContactMe}>
      <h4>Contact Me</h4>
      <ul className={classes.ContactMeList}>
        <li>17 Watercress Drive</li>
        <li>Sevenoaks, Kent, UK</li>
        <li>07720290788</li>
        <li>BeautyBarByChloe@gmail.com</li>
      </ul>
    </div>
  );
};

export default ContactMe;
