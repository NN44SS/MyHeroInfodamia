
import CharacterCard from "../UI/CharacterCard";
import classes from "./StudentGrid.module.css";

const StudentGrid = (props) => {
  return (
      <div className={classes.studentWrapper}>
        {props.studentList.map((studentList) => (
          <CharacterCard
            key={studentList.id + studentList.name}
            Img={studentList.img}
            Name={studentList.name}
            Alias={studentList.alias}
            Affiliation={studentList.affiliation}
            Birthday={studentList.birthday}
            Description={studentList.description}
            Occupation={studentList.occupation}
            Quirk={studentList.quirk}
          />
        ))}
      </div>
  );
};

export default StudentGrid;