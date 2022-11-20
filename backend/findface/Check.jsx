import { Link } from "react-router-dom";
function Check() {
  return (
    <section>
      <h1>CHOOSE YOUR STATUS</h1>
      <Link to="/check-in">
        <button>Check In</button>
      </Link>
      <Link to="/check-out">
        <button>Check Out</button>
      </Link>
    </section>
  );
}

export default Check;
