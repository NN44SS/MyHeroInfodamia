import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerTxtContainer}>
        <div className={classes.footerTxt}>
          <p>Site created for practice purposes only.</p>
        </div>
        <div className={classes.footerTxt}>
          <p>All data and images used from https://myheroacademiaapi.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
