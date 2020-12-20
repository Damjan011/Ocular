import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './containers/Home';
import Data from './containers/Data';
import Logo from './assets/images/server@3x.png';
import CalculatorIcon from './assets/images/calculator@3x.png';
import HomeIcon from './assets/images/home@3x.png';
import Octo from './assets/images/octopuslogo.png';
import Calculator from './containers/Calculator';
import TopBar from "./components/TopBar";
import SettingsIcon from './assets/images/settings@3x.png';

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
            <img className="ui-logo-small" alt="Small logo" src={Octo} />
          </div>
          <div className="ui-vertical-menu">
            <div className="ui-sidebar-gray-label">
              <p>MAIN MENU</p>
            </div>
            <NavLink activeClassName="active" exact to="/">
              <div className="ui-menu-icon">
                <img src={Logo} alt="Home" />
              </div>
              <p>CRUD</p>
            </NavLink>
            <NavLink activeClassName="active" exact to="/data">
              <img src={HomeIcon} alt="Home" />
              <p>Data</p>
            </NavLink>
            <NavLink activeClassName="active" exact to="/calculator">
              <img src={CalculatorIcon} alt="Home" />
              <p>BinToDec</p>
            </NavLink>
            <div className="ui-settings-box">
              <img src={SettingsIcon} alt="Settings" />
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/data">
            <Data />
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

