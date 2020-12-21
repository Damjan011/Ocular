import React, { useState, useEffect } from 'react';
import './style.scss';
import ThemeSwitch from '../ThemeSwitch';

const TopBar = () => {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setAppear(true);
    }, 2500);
  }, []);
  return (
    <div className={`ui-topbar ${appear ? 'ui-topbar-animate' : ''}`}>
      <div className="ui-user-greeting">
        <p>Hello, Damjan</p>
      </div>
      <ThemeSwitch />
    </div>
  )
}

export default TopBar;