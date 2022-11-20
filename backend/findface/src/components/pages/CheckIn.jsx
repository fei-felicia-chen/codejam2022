import { Link } from "react-router-dom";
import isValidIn from "../../../../locationIn";
import classes from "./Check.module.css";

function CheckIn(props) {
  if (isValidIn) {
    return (
      <div>
        <section>
          <h1 className={classes.header}>The Check In is a Success!</h1>
          <Link to="/">
            <button className={classes.btnB}>Back</button>
          </Link>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section>
          <h1 className={classes.header}>You are not at the right location!</h1>
          <Link to="/">
            <button className={classes.btnB}>Back</button>
          </Link>
        </section>
      </div>
    );
  }
}

export default CheckIn;
