import { Link } from "react-router-dom";
//import "../location";

function Check() {
  return (
    <section>
      <h1>CHOOSE YOUR STATUS</h1>
      <Link to="/check-in">
        <button onClick={isValidLocation}>Check In</button>
      </Link>
      <Link to="/check-out">
        <button onClick={isValidLocation}>Check Out</button>
      </Link>
    </section>
  );
}

export default Check;
