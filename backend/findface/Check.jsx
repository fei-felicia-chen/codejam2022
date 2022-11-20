import { Link } from "react-router-dom";
import classes from "./Check.module.css";

function Check() {
  return (
    <div>
      <section>
        <h1 className={classes.header}>CHOOSE YOUR STATUS</h1>
        <Link to="/check-in">
          <button className={classes.btn}>Check In</button>
        </Link>
        <Link to="/check-out">
          <button className={classes.btn}>Check Out</button>
        </Link>
      </section>
    </div>

  );
}

export default Check;
