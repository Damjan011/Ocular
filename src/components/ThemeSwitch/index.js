import React, { useEffect, useState } from 'react';
import './style.scss';

const ThemeSwitch = () => {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setAppear(true);
  }, [])
  return (
    <div className="ui-theme-switch">
      <div className="sun-icon-wrapper">
        <img className="sun-icon" alt="Light" />
      </div>
      <label className={`form-switch ${appear ? 'animate' : ''}`}>
        <input type="checkbox" />
        <i></i>
      </label>
      <div className="moon-icon-wrapper">
        <img className="moon-icon" alt="Dark" />
      </div>
    </div>
  )
}

export default ThemeSwitch;