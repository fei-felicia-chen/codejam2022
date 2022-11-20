import { Link } from "react-router-dom";
import classes from "./Check.module.css";
import IsValidIn from "../../../../IsValidIn";
import IsValidOut from "../../../../IsValidOut";

function Check() {
  return (
    <div>
      <section>
        <h1 className={classes.header}>CHOOSE YOUR STATUS</h1>
        <Link to="/check-in">
          <button onClick={IsValidIn} className={classes.btn}>
            Check In
          </button>
        </Link>
        <Link to="/check-out">
          <button onClick={IsValidOut} className={classes.btn}>
            Check Out
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Check;