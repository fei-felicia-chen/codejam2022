import "./App.css";
import "../authentication";

function App() {
  return (
    <section>
      <h1>Face Authentication</h1>
      <button onClick={enrollNewUser}>Enroll User</button>
      <button onClick={authenticateUser}>Authenticate User</button>
    </section>
  );
}

export default App;
