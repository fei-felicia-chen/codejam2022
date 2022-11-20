import { Link } from "react-router-dom";
import isValidOut from "../../../../locationOut";
import classes from "./Check.module.css";
import isVal from "../../../../locationIn";

function CheckOut(props) {
  if (!isVal) {
    return (
      <div>
        <section>
          <h1 className={classes.header}>Check Out Is Successful!</h1>
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

export default CheckOut;
