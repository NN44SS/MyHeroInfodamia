import classes from "./HeroGrid.module.css";
import CharacterCard from "../UI/CharacterCard";

const HeroGrid = (props) => {
  return (
    <div className={classes.heroGridWrapper}>
      <div>
        {props.heroList.map((heroList) => (
          <CharacterCard
            key={heroList.id + heroList.name}
            Img={heroList.img}
            Name={heroList.name}
            Alias={heroList.alias}
            Affiliation={heroList.affiliation}
            Birthday={heroList.birthday}
            Description={heroList.description}
            Occupation={heroList.occupation}
            Quirk={heroList.quirk}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroGrid;
