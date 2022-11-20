import { useRef } from "react";
import "./src/App.css";
import Card from "../components/card/Card";
import classes from "./CheckInForm.module.css";

function CheckInForm(props) {
  const nameInputRef = useRef();
  const locationInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const driverData = {
      name: enteredName,
      location: enteredLocation,
    };
  }

  return (
    <Card>
      {/* <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            required
            id="location"
            ref={locationInputRef}
          ></input>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form> */}
    </Card>
  );
}

export default CheckInForm;
