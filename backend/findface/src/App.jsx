import "./App.css";
import "../authentication";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Check from "../Check";
import CheckInForm from "../CheckInForm";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <section>
              <h1>Face Authentication</h1>
              <button onClick={enrollNewUser}>Register</button>
              <button onClick={authenticateUser}>Log In</button>
            </section>
          </Route>
          <Route path="/check">
            <Check />
          </Route>
          <Route path="/check-in">
            <CheckInForm />
          </Route>
          <Route path="/check-out"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
