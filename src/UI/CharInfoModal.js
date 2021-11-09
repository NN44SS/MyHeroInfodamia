import Modal from "./Modal";
import classes from "./CharInfoModal.module.css";

const CharInfoModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.modalWrapper}>
        <div className={classes.modalImg}>
          <img src={props.Img} alt={props.name}></img>
        </div>
        <div className={classes.modalName}>
          <p>{props.Name}</p>
        </div>
        <div>
          <p><span className={classes.modalTitles}>Alias:</span> {props.Alias}</p>
          <p><span className={classes.modalTitles}>Affiliation:</span> {props.Affiliation}</p>
          <p><span className={classes.modalTitles}>Birthday:</span> {props.Birthday}</p>
          <p><span className={classes.modalTitles}>Occupation:</span> {props.Occupation}</p>
          <p><span className={classes.modalTitles}>Quirk:</span> {props.Quirk}</p>
          <p><span className={classes.modalTitles}>Description:</span> {props.Description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default CharInfoModal;
