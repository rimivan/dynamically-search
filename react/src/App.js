import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Welcome from "./components/welcome/welcome";
import DynaSearch from "./components/dyna-search/dyna-search";

export default function App() {
  return (
      <Router>
        <div>
          <nav class="nav-bar">
              <li>
                <Link to="/">Welcome React</Link>
              </li>
              <li>
                <Link to="/dyna">Dyna search</Link>
              </li>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/dyna">
              <DynaSearch />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}





