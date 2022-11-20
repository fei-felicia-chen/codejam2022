import "./App.css";
import "./components/authentication/authentication";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Check from "./components/pages/Check";
import CheckIn from "./components/pages/CheckIn";
import "../../location";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <section>
              <h1 className="header">Face Authenticator</h1>
              <button className="btn" onClick={enrollNewUser}>
                Register
              </button>
              <button className="btn" onClick={authenticateUser}>
                Log In
              </button>
            </section>
          </Route>
          <Route path="/check">
            <Check />
          </Route>
          <Route path="/check-in">
            <CheckIn />
          </Route>
          <Route path="/check-out"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
