import classes from "./CharacterCard.module.css";
import React from "react";
import { useState } from "react";
import CharInfoModal from "./CharInfoModal";

const CharacterCard = (props) => {
  const [showCharModal, setShowCharModal] = useState(false);

  const showCharModalHandler = (props) => {
    setShowCharModal(true);
  };

  const hideCharModalHandler = (props) => {
    setShowCharModal(false);
  };

  return (
    <React.Fragment>
      {showCharModal && (
        <CharInfoModal
          onClose={hideCharModalHandler}
          Img={props.Img}
          Name={props.Name}
          Alias={props.Alias}
          Affiliation={props.Affiliation}
          Birthday={props.Birthday}
          Description={props.Description}
          Occupation={props.Occupation}
          Quirk={props.Quirk}
        />
      )}
      <div className={classes.cardWrapper} onClick={showCharModalHandler}>
        <div className={classes.imgSection}>
          <img src={props.Img} alt={props.name} className={classes.cardImg}></img>
        </div>
        <div className={classes.textSection}>
          <p className={classes.cardText}>{props.Name}</p>
          <p className={classes.aliasTxt}>{props.Alias}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CharacterCard;
