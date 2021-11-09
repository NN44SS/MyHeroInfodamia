import classes from './Header.module.css';
import siteBanner from "../images/MyHeroLogo.png";

const Header = () => {
    return (
        <div className={classes.headerBlock}>
            <img src={siteBanner} alt="MyHeroInfodamia" className={classes.headerImg}/>
        </div>
    )
}

export default Header;