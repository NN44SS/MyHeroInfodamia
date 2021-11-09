import react from "react";
import StudentGrid from "./StudentGrid";
import { useState } from "react/cjs/react.development";
import studentImg from "../images/StudentsBanner.png";
import classes from "./StudentSection.module.css";

const StudentSection = (props) => {
  const [studentGrid, toggleStudentGrid] = useState(false);
  const [btnText, setBtnText] = useState("Students");

  const gridToggleHandler = () => {
    if (studentGrid === false) {
      toggleStudentGrid(true);
      setBtnText("Close");
    } else {
      toggleStudentGrid(false);
      setBtnText("Students");
    }
  };

  return (
    <react.Fragment>
      <div className={classes.studentSectionContainer}>
        <img src={studentImg} alt="Student Banner" className={classes.studentBannerImg} />
        <button onClick={gridToggleHandler} className={classes.studentBtn}>
          {btnText}
        </button>
      </div>
      <div>
        {studentGrid && <StudentGrid studentList={props.studentList} />}
      </div>
    </react.Fragment>
  );
};

export default StudentSection;
