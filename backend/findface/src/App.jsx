import "./App.css";
import "../authentication";

function App() {
  return (
    <section>
      <h1>Face Authentication</h1>
      <button onClick={authenticateUser}>Check-In</button>
      <button>Check-Out</button>
    </section>
  );
}

export default App;
