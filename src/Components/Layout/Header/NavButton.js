import classes from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <button className={classes.navBtn}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
};

export default NavButton;
