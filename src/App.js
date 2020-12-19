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

export default function App() {
  const [damjan, setDamjan] = useState(false);
  const [burgija, setBurgija] = useState(false);

  useEffect(() => {
    setDamjan(true);
    setTimeout(function () {
      setBurgija(true);
    }, 2500);
  }, []);

  return (
    <Router>
      <div className="ui-layout">
        <div className={`ui-topbar ${burgija ? 'ui-topbar-animate' : ''}`}>
        </div>
        <div className={`ui-sidebar ${damjan ? 'ui-sidebar-animate' : ''}`}>
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
              <img src={require('./assets/images/settings@3x.png')} alt="Home" />
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

