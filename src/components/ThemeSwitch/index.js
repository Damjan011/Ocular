import React, { useEffect, useState } from 'react';
import './style.scss';
import MoonIcon from '../../assets/images/moon@2x.png';
import SunIcon from '../../assets/images/brightness-low@2x.png';

const ThemeSwitch = () => {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setAppear(true);
  }, [])
  return (
    <div className="ui-theme-switch">
      <div className="sun-icon-wrapper">
        <img src={SunIcon} className="sun-icon" alt="Light" />
      </div>
      <label className={`form-switch ${appear ? 'animate' : ''}`}>
        <input type="checkbox" />
        <i></i>
      </label>
      <div className="moon-icon-wrapper">
        <img src={MoonIcon} className="moon-icon" alt="Dark" />
      </div>
    </div>
  )
}

export default ThemeSwitch;