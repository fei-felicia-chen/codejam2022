import { Link } from "react-router-dom";
import IsValidOut from "../../../../IsValidOut";
import classes from "./Check.module.css";
import isVal from "../../../../IsValidIn";

function CheckOut(props) {
  if (isVal) {
    return (
      <div>
        <section>
          <h1 className={classes.header}>Check Out Is Successful!</h1>
          <Link to="/">
            <button onClick={IsValidOut} className={classes.btnB}>Back</button>
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
            <button onClick={IsValidOut} className={classes.btnB}>Back</button>
          </Link>
        </section>
      </div>
    );
  }
}

export default CheckOut;