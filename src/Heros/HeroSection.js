import react from "react";
import classes from "./HeroSection.module.css";
import HeroGrid from "./HeroGrid";
import { useState } from "react/cjs/react.development";
import heroImg from "../images/HeroBanner.png";

const HeroSection = (props) => {
  const [heroGrid, toggleHeroGrid] = useState(false);
  const [btnText, setBtnText] = useState("Heros");

  const gridToggleHandler = () => {
    if (heroGrid === false) {
      toggleHeroGrid(true);
      setBtnText("Close");
    } else {
      toggleHeroGrid(false);
      setBtnText("Heros");
    }
  };

  return (
    <react.Fragment>
      <div className={classes.heroSectionContainer}>
        <img src={heroImg} alt="Hero Banner" className={classes.heroBannerImg} />
        <button onClick={gridToggleHandler} className={classes.heroBtn}>
          {btnText}
        </button>
      </div>
      <div>{heroGrid && <HeroGrid heroList={props.heroList} />}</div>
    </react.Fragment>
  );
};

export default HeroSection;
