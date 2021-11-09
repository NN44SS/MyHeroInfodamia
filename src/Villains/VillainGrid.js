import CharacterCard from "../UI/CharacterCard";
import classes from "./VillainGrid.module.css";

const StudentGrid = (props) => {
    return (
        <div className={classes.villainWrapper}>
          {props.villainList.map((villainList) => (
            <CharacterCard
              key={villainList.id + villainList.name}
              Img={villainList.img}
              Name={villainList.name}
              Alias={villainList.alias}
              Affiliation={villainList.affiliation}
              Birthday={villainList.birthday}
              Description={villainList.description}
              Occupation={villainList.occupation}
              Quirk={villainList.quirk}
            />
          ))}
        </div>
    );
  };
  
  export default StudentGrid;