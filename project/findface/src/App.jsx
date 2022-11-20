import "./App.css";
import "./components/authentication/authentication";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Check from "./components/pages/Check";
import CheckIn from "./components/pages/CheckIn";
import CheckOut from "./components/pages/CheckOut";
import IsValidIn from "../../IsValidIn";
import IsValidOut from "../../IsValidOut";

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
          <Route path="/check-out">
            <CheckOut />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;