import react from "react";
import { useState } from "react/cjs/react.development";
import classes from "./VillainSection.module.css";
import villainImg from "../images/VillainBanner.png";
import VillainGrid from "./VillainGrid";

const VillainSection = (props) => {
  const [villainGrid, toggleVillainGrid] = useState(false);
  const [btnText, setBtnText] = useState("Villains");

  const gridToggleHandler = () => {
    if (villainGrid === false) {
      toggleVillainGrid(true);
      setBtnText("Close");
    } else {
      toggleVillainGrid(false);
      setBtnText("Villains");
    }
  };

  return (
    <react.Fragment>
      <div className={classes.villainSectionContainer}>
        <img src={villainImg} alt="Villain Banner" className={classes.villainBannerImg} />
        <button onClick={gridToggleHandler} className={classes.villainBtn}>
          {btnText}
        </button>
      </div>
      <div>
        {villainGrid && <VillainGrid villainList={props.villainList} />}
      </div>
    </react.Fragment>
  );
};

export default VillainSection;
