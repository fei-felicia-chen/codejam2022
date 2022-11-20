import { Link } from "react-router-dom";
import IsValidIn from "../../../../IsValidIn";
import classes from "./Check.module.css";
import isVal from "../../../../IsValidIn";

function CheckIn(props) {
  if (isVal) {
    return (
      <div>
        <section>
          <h1 className={classes.header}>The Check In is a Success!</h1>
          <Link to="/">
            <button onClick={IsValidIn} className={classes.btnB}>Back</button>
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