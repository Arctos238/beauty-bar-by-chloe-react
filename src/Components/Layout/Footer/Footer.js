
import classes from './Footer.module.css';
import ContactMe from '../../UI/ContactMe';

const Footer = (props) => {
    return <footer className={classes.Footer}  >
        <ContactMe/>
        {/* <SocialMediaBox/> */}
    </footer>
}

export default Footer;