import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Home from './containers/Home';
import DatabaseOperations from './containers/DatabaseOperations';
import Logo from './assets/images/server@3x.png';
import CalculatorIcon from './assets/images/calculator@3x.png';
import HomeIcon from './assets/images/home@3x.png';
import Octo from './assets/images/user@3x.png';
import Calculator from './containers/Calculator';
import TopBar from "./components/TopBar";
import SettingsIcon from './assets/images/settings@3x.png';
import JavascriptIcon from './assets/images/javascript.png';
import ReactIcon from './assets/images/react-icon.jpg';

export default function App() {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setAppear(true);
  }, []);

  return (
    <Router>
      <div className="ui-layout">
        <TopBar />
        <div className={`ui-sidebar ${appear ? 'ui-sidebar-animate' : ''}`}>
          <div className="ui-logo-box">
            <div className="ui-logo-small">
            <img className="ui-logo-small-image" alt="Small logo" src={Octo} />
            </div>
          </div>
          <div className="ui-vertical-menu">
            <div className="ui-sidebar-gray-label">
              <p>MAIN</p>
            </div>

            <NavLink activeClassName="active" exact to="/">
              <div className="ui-menu-icon">
                <img src={HomeIcon} alt="Home" />
              </div>
              <p>Home</p>
            </NavLink>
            
            <NavLink activeClassName="active" exact to="/databaseOperations">
              <img src={HomeIcon} alt="Home" />
              <p>CRUD</p>
            </NavLink>

            


            <NavLink activeClassName="active" exact to="/calculator">
              <img src={CalculatorIcon} alt="Home" />
              <p>BinToDec</p>
            </NavLink>
            <div style={{marginTop: '30px'}} className="ui-sidebar-gray-label">
              <p>TECHNOLOGIES</p>
            </div>
            <Link activeClassName="active">
              <img src={JavascriptIcon} alt="Home" />
              <p>JavaScript</p>
            </Link>

            <Link activeClassName="active">
              <img src={ReactIcon} alt="Home" />
              <p>React</p>
            </Link>
            <div className="ui-settings-box">
              <img src={SettingsIcon} alt="Settings" />
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/databaseOperations">
            <DatabaseOperations />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
